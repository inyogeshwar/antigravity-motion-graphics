#!/usr/bin/env node
/**
 * scripts/build_previews.mjs
 *
 * Generates a self-contained preview for every creator style that lacks one:
 *   templates/playbooks/_styles/<id>/preview/index.html      (video page)
 *   templates/playbooks/_styles/<id>/preview/frames/0N.webp  (3 stills)
 * and records the block in that style's template.json:
 *   { "preview": { "page": "...", "frames": [...], "captions": [...] } }
 *
 * Stills are rendered deterministically by loading a composition in Playwright,
 * seeking to a fixed time with window.seek(t), and screenshotting to WebP - the
 * same engine the renderer uses, so no FFmpeg is required.
 *
 * Usage:
 *   node scripts/build_previews.mjs [--all] [--force] [--only <style-id>] [--quality 82]
 *   npx antigravity-motion previews
 */

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'templates', 'playbooks', '_styles');
const COMPOSITIONS_DIR = path.join(ROOT, 'compositions');

// style id -> source composition, its total duration, and (optional) aspect.
const STYLE_SOURCES = {
  // advoc media family -> REA showcase aesthetic (26.5s, 9:16)
  'advoc-cream-pipeline': { comp: 'rea_showcase', duration: 26.5 },
  'advoc-connector-automation': { comp: 'rea_showcase', duration: 26.5 },
  'advoc-split-talking-head': { comp: 'rea_showcase', duration: 26.5 },
  // neurobyte -> mega template reel (15.0s, 9:16)
  'neurobyte-cosmic-glass': { comp: 'mega_template_reel', duration: 15.0 },
  // raj shamani family -> podcast reel (15.0s, 9:16)
  'raj-shamani-neon-lime': { comp: 'podcast_raj_shamani', duration: 15.0 },
  'raj-shamani-cinema-serif': { comp: 'podcast_raj_shamani', duration: 15.0 },
  'raj-shamani-crimson-hook': { comp: 'podcast_raj_shamani', duration: 15.0 },
  'raj-shamani-handwritten-story': { comp: 'podcast_raj_shamani', duration: 15.0 },
  'raj-shamani-hype-emoji': { comp: 'podcast_raj_shamani', duration: 15.0 },
  // lyrical family -> kamariya lyric reel (16.0s, 9:16)
  'lyrical-neon-pulse': { comp: 'kamariya_reel', duration: 16.0 },
  'lyrical-minimal-editorial': { comp: 'kamariya_reel', duration: 16.0 },
  'lyrical-cyber-hindi': { comp: 'kamariya_reel', duration: 16.0 },
  // you-b tech faceless -> 16:9 explainer
  'you-b-tech-faceless': { comp: 'you_b_tech_explainer', duration: 26.2, aspect: '16:9' }
};

const FRACTIONS = [0.12, 0.45, 0.78];

// --- tiny CLI arg helpers -------------------------------------------------
const argv = process.argv.slice(2);
const has = (f) => argv.includes(f);
const val = (f, d) => {
  const i = argv.indexOf(f);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d;
};

const FORCE = has('--force') || has('--all') || has('-f');
const ONLY = val('--only', null);
const QUALITY = parseInt(val('--quality', '82'), 10);
const VERBOSE = has('--verbose') || has('-v');

// --- scene parsing --------------------------------------------------------
// Pull human captions out of the scene/chunk comments already present in the
// compositions, so the stills get real, in-context labels.
function parseScenes(html) {
  const scenes = [];
  const patterns = [
    // // SCENE 1 (0.0s - 7.0s): Discover morluto/rea
    /SCENE\s*\d+\s*\(\s*([\d.]+)\s*s\s*[-–]\s*([\d.]+)\s*s\s*\)\s*:\s*([^\n<]+)/gi,
    // // Chunk 1 (0.0s - 3.2s): The Hook
    /Chunk\s*\d+\s*\(\s*([\d.]+)\s*s\s*[-–]\s*([\d.]+)\s*s\s*\)\s*:\s*([^\n<]+)/gi,
    // <!-- Scene 1: Spotify UI Glow (0.0s - 2.3s) -->
    /Scene\s*\d+\s*:\s*([^<\n(]+?)\s*\(\s*([\d.]+)\s*s\s*[-–]\s*([\d.]+)\s*s\s*\)/gi
  ];
  for (let p = 0; p < patterns.length; p++) {
    const re = patterns[p];
    let m;
    while ((m = re.exec(html))) {
      let start, end, caption;
      if (p === 2) { caption = m[1]; start = m[2]; end = m[3]; }
      else { start = m[1]; end = m[2]; caption = m[3]; }
      caption = String(caption).replace(/\s+/g, ' ').replace(/[\s:.\-–]+$/, '').trim();
      if (caption) scenes.push({ start: parseFloat(start), end: parseFloat(end), caption });
    }
  }
  return scenes.sort((x, y) => x.start - y.start);
}

function captionFor(t, scenes, fallback) {
  const hit = scenes.find((s) => t >= s.start && t < s.end);
  if (hit) return hit.caption;
  if (scenes.length) {
    // nearest preceding scene
    const prev = scenes.filter((s) => s.start <= t).pop();
    if (prev) return prev.caption;
  }
  return fallback;
}

// --- preview page ---------------------------------------------------------
function previewPage(title, aspect) {
  const ratio = aspect.replace(':', '/');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title} preview</title><style>
:root{--page:#0b0b0b;--text:#f2f2f2}*{box-sizing:border-box;margin:0}html,body{height:100%;background:var(--page);color:var(--text);font:14px system-ui,sans-serif}
body{display:flex;align-items:center;justify-content:center}video{height:100vh;max-width:100%;aspect-ratio:${ratio};object-fit:contain;background:#000}
</style></head><body><video src="reel.mp4" autoplay muted loop playsinline controls></video></body></html>`;
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function styleName(styleId, template) {
  return (template && template.name) || styleId;
}

async function main() {
  if (!fs.existsSync(STYLES_DIR)) {
    console.error(`❌ Styles directory not found: ${STYLES_DIR}`);
    process.exit(1);
  }

  const styleIds = fs
    .readdirSync(STYLES_DIR)
    .filter((id) => fs.existsSync(path.join(STYLES_DIR, id, 'template.json')));

  const targets = styleIds.filter((id) => {
    if (ONLY) return id === ONLY;
    if (!STYLE_SOURCES[id]) return false; // only styles we know how to source
    const tpl = readJson(path.join(STYLES_DIR, id, 'template.json'));
    if (FORCE) return true;
    return !tpl.preview; // skip styles that already ship a preview
  });

  if (!targets.length) {
    console.log('✔ Nothing to do - every known style already has a preview. Use --force to rebuild.');
    return;
  }

  console.log(`▲ Building previews for ${targets.length} style(s)...`);

  const browser = await chromium.launch();
  try {
    for (const id of targets) {
      const src = STYLE_SOURCES[id];
      if (!src) {
        console.warn(`  ⚠ ${id}: no source composition mapped, skipping.`);
        continue;
      }
      const compPath = path.join(COMPOSITIONS_DIR, src.comp, 'index.html');
      if (!fs.existsSync(compPath)) {
        console.warn(`  ⚠ ${id}: composition ${src.comp} not found, skipping.`);
        continue;
      }

      const styleDir = path.join(STYLES_DIR, id);
      const template = readJson(path.join(styleDir, 'template.json'));
      const name = styleName(id, template);
      const aspect = src.aspect || '9:16';
      const [w, h] = aspect === '16:9' ? [1920, 1080] : [1080, 1920];

      const previewDir = path.join(styleDir, 'preview');
      const framesDir = path.join(previewDir, 'frames');
      fs.mkdirSync(framesDir, { recursive: true });

      const compHtml = fs.readFileSync(compPath, 'utf8');
      const scenes = parseScenes(compHtml);

      const page = await browser.newPage({
        viewport: { width: w, height: h },
        deviceScaleFactor: 0.5 // -> 540x960 or 960x540 stills
      });
      await page.goto(pathToFileURL(compPath).href, { waitUntil: 'load' });
      await page.waitForTimeout(500); // let webfonts settle

      const frames = [];
      const captions = [];
      for (let i = 0; i < FRACTIONS.length; i++) {
        const t = +(src.duration * FRACTIONS[i]).toFixed(2);
        await page.evaluate((tt) => { if (typeof window.seek === 'function') window.seek(tt); }, t);
        await page.waitForTimeout(150);
        const rel = `preview/frames/${String(i + 1).padStart(2, '0')}.webp`;
        await page.screenshot({ path: path.join(styleDir, rel), type: 'webp', quality: QUALITY });
        frames.push(rel);

        // Prefer a parsed scene comment; otherwise read the live on-screen caption.
        let caption = scenes.length ? captionFor(t, scenes, '') : '';
        if (!caption) {
          const domText = await page.evaluate(() => {
            const selectors = ['#lyricText', '#captionChunk', '#caption', '.p-word', '.caption', '.subtitle'];
            for (const s of selectors) {
              const el = document.querySelector(s);
              const txt = el && (el.innerText || el.textContent);
              if (txt && txt.trim()) return txt.trim().replace(/\s+/g, ' ');
            }
            return '';
          });
          caption = domText;
        }
        captions.push(caption || `${name} - frame ${i + 1}`);
      }
      await page.close();

      fs.writeFileSync(path.join(previewDir, 'index.html'), previewPage(name, aspect));

      template.preview = { page: 'preview/index.html', frames, captions };
      fs.writeFileSync(
        path.join(styleDir, 'template.json'),
        JSON.stringify(template, null, 2)
      );

      console.log(`  ✔ ${id} -> ${src.comp} (${aspect})`);
      if (VERBOSE) captions.forEach((c, i) => console.log(`      ${i + 1}. ${c}`));
    }
  } finally {
    await browser.close();
  }

  console.log('✔ Previews built.');
}

main().catch((err) => {
  console.error('❌ build_previews failed:', err.message);
  process.exit(1);
});
