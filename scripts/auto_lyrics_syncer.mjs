// scripts/auto_lyrics_syncer.mjs - Automated Lyrics Fetcher & Sync Engine
// Powered by open-source lyrics providers (LRCLIB, PaxSenix, lrc.red architecture from BitChord)

import { execSync } from 'node:child_process';
import { writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';

/**
 * Clean metadata extracted from audio ID3 tags
 */
export function cleanMetadata(rawTitle = '', rawArtist = '') {
  let title = rawTitle
    .replace(/^\d+[_-\s]*/, '')
    .replace(/_/g, ' ')
    .replace(/\(From\s+["'].*?["']\)/gi, '')
    .replace(/\[From\s+["'].*?["']\]/gi, '')
    .replace(/\bFrom\s+.*$/gi, '')
    .replace(/\(SpotiDost.*?\)/gi, '')
    .replace(/\bSpotiDost\b/gi, '')
    .replace(/[-_]SpotiDost/gi, '')
    .replace(/\(Original.*?\)/gi, '')
    .trim();

  let artist = rawArtist
    .replace(/- Topic/gi, '')
    .replace(/\bSpotiDost\b/gi, '')
    .replace(/_/g, ' ')
    .trim();

  return { title, artist };
}

/**
 * Fetch synchronized lyrics from open-source lyrics provider (LRCLIB API)
 * Same provider used in BitChord open-source client.
 */
export async function fetchLyricsFromProviders(title, artist = '', duration = 0) {
  const query = `${title} ${artist}`.trim();
  const searchUrl = `https://lrclib.net/api/search?q=${encodeURIComponent(query)}`;

  const headers = {
    'User-Agent': 'AntigravityMotionStudio/1.2 (https://github.com/google/antigravity)'
  };

  async function fetchWithRetry(url, retries = 3, delay = 1000) {
    for (let i = 0; i < retries; i++) {
      try {
        const res = await fetch(url, { headers });
        if (res.ok) return await res.json();
        if (res.status === 503 && i < retries - 1) {
          await new Promise(r => setTimeout(r, delay * (i + 1)));
          continue;
        }
      } catch (e) {
        if (i < retries - 1) {
          await new Promise(r => setTimeout(r, delay * (i + 1)));
          continue;
        }
      }
    }
    return null;
  }

  try {
    let data = await fetchWithRetry(searchUrl);
    if (!Array.isArray(data) || data.length === 0) {
      // Fallback: search title only
      const titleUrl = `https://lrclib.net/api/search?q=${encodeURIComponent(title)}`;
      data = await fetchWithRetry(titleUrl);
    }
    if (Array.isArray(data) && data.length > 0) {
      return data.find(item => item.syncedLyrics) || data[0];
    }
    return null;
  } catch (err) {
    console.error(`[LyricsFetcher] Error querying provider:`, err.message);
    return null;
  }
}

/**
 * Parse standard LRC format string into timestamps and lines
 * Format: [mm:ss.xx] Lyric text
 */
export function parseLrcString(lrcContent) {
  if (!lrcContent) return [];
  const lines = lrcContent.split('\n');
  const parsed = [];

  const timeRegex = /\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/;

  for (const line of lines) {
    const match = line.match(timeRegex);
    if (match) {
      const minutes = parseInt(match[1], 10);
      const seconds = parseInt(match[2], 10);
      const ms = parseFloat('0.' + match[3]);
      const totalSeconds = minutes * 60 + seconds + ms;
      const text = match[4].trim();

      if (text) {
        parsed.push({
          time: Number(totalSeconds.toFixed(3)),
          text,
          words: text.split(/\s+/).filter(Boolean)
        });
      }
    }
  }

  return parsed.sort((a, b) => a.time - b.time);
}

/**
 * Check if a filename or title is generic (e.g. audio_123, video-456, recording.mp3)
 */
export function isGenericName(name) {
  if (!name || name.trim().length === 0) return true;
  const n = name.toLowerCase().trim();
  const genericPatterns = [
    /^audio[_\-\d]*/,
    /^video[_\-\d]*/,
    /^track[_\-\d]*/,
    /^recording[_\-\d]*/,
    /^voice[_\-\d]*/,
    /^whatsapp[_\-\d]*/,
    /^sound[_\-\d]*/,
    /^untitled/,
    /^anonymous/,
    /^\d+$/
  ];
  return genericPatterns.some(p => p.test(n));
}

/**
 * Acoustically recognize unknown/nameless audio using Shazam fingerprinting
 */
export function identifySongAcoustically(filePath) {
  try {
    const cmd = `python scripts/identify_song.py "${filePath}"`;
    const out = execSync(cmd, { encoding: 'utf-8', timeout: 8000 });
    // find JSON block
    const match = out.match(/\{[\s\S]*?\}/);
    if (match) {
      const data = JSON.parse(match[0]);
      if (data.title) {
        console.log(`[AudioRecognition] Shazam identified: "${data.title}" by "${data.artist}"`);
        return cleanMetadata(data.title, data.artist || '');
      }
    }
  } catch (err) {
    console.warn(`[AudioRecognition] Acoustic fingerprinting skipped:`, err.message);
  }
  return null;
}

/**
 * Read track metadata directly from an audio file using ffprobe,
 * with automatic acoustic Shazam fingerprint fallback for nameless files.
 */
export function extractAudioMeta(filePath) {
  try {
    const cmd = `ffprobe -v quiet -print_format json -show_format "${filePath}"`;
    const output = execSync(cmd, { encoding: 'utf-8' });
    const info = JSON.parse(output);
    const tags = info.format?.tags || {};
    const duration = parseFloat(info.format?.duration || '0');

    let rawTitle = tags.title || path.basename(filePath, path.extname(filePath));
    let rawArtist = tags.artist || '';

    let { title, artist } = cleanMetadata(rawTitle, rawArtist);

    // If title is generic or unknown, trigger acoustic Shazam recognition!
    if (isGenericName(title)) {
      console.log(`[AudioMeta] Generic name detected ("${title}"). Running acoustic fingerprinting...`);
      const identified = identifySongAcoustically(filePath);
      if (identified && identified.title) {
        title = identified.title;
        artist = identified.artist || artist;
      }
    }

    return {
      title,
      artist,
      duration,
      rawTitle,
      rawArtist
    };
  } catch (err) {
    console.error(`[AudioMeta] Failed to probe ${filePath}:`, err.message);
    const base = path.basename(filePath, path.extname(filePath));
    return { title: base, artist: '', duration: 0, rawTitle: base, rawArtist: '' };
  }
}

/**
 * Generate a complete, ready-to-render MotionOS composition HTML
 * using the fetched lyrics and trending blog fonts
 */
export function buildLyricsComposition({
  trackName,
  artistName,
  startTime = 0,
  duration = 15.0,
  cues = [],
  outputPath = 'compositions/auto_lyrics_reel/index.html'
}) {
  const relativeCues = cues
    .filter(c => c.time >= startTime && c.time < startTime + duration)
    .map(c => ({
      ...c,
      relTime: Number((c.time - startTime).toFixed(3))
    }));

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1080, height=1920">
  <title>${trackName} - Synced Lyric Reel</title>
  <style>
    @font-face {
      font-family: 'AmericanCaptain';
      src: url('../../assets/fonts/blog/American-Captain.ttf') format('truetype');
    }
    @font-face {
      font-family: 'BillionDreams';
      src: url('../../assets/fonts/blog/BillionDreams_PERSONAL.ttf') format('truetype');
    }
    @font-face {
      font-family: 'CharlotteSouthern';
      src: url('../../assets/fonts/blog/Charlotte-Southern.otf') format('opentype');
    }
    @font-face {
      font-family: 'BigNoodle';
      src: url('../../assets/fonts/blog/big_noodle_titling_oblique.ttf') format('truetype');
    }
    @font-face {
      font-family: 'LemonMilk';
      src: url('../../assets/fonts/blog/LEMONMILK-BoldItalic.otf') format('opentype');
    }
    @font-face {
      font-family: 'HindiDisplay';
      src: url('../../assets/fonts/RozhaOne-Regular.ttf') format('truetype');
    }
    @font-face {
      font-family: 'AppleColorEmoji';
      src: url('../../assets/fonts/AppleColorEmoji.ttf') format('truetype');
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1080px;
      height: 1920px;
      overflow: hidden;
      background: radial-gradient(circle at 50% 40%, #1a0b1e 0%, #060309 85%);
      color: #FFF;
      font-family: 'AmericanCaptain', sans-serif;
      position: relative;
    }
    #stage {
      width: 1080px;
      height: 1920px;
      position: absolute;
      top: 0; left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .top-pill {
      position: absolute;
      top: 80px;
      padding: 12px 30px;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      font-family: 'BigNoodle', sans-serif;
      font-size: 32px;
      letter-spacing: 3px;
      color: #FF007F;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .top-pill .dot {
      width: 10px; height: 10px; border-radius: 50%; background: #FF007F; box-shadow: 0 0 14px #FF007F;
    }
    .main-hook {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      width: 960px;
      text-align: center;
    }
    .emojis {
      font-family: 'AppleColorEmoji', sans-serif;
      font-size: 80px;
      filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));
    }
    .hindi-text {
      font-family: 'HindiDisplay', serif;
      font-size: 130px;
      font-weight: 700;
      color: #FFF;
      text-shadow: 0 0 40px rgba(255,0,127,0.7), 0 0 80px rgba(255,100,0,0.4);
      line-height: 1.2;
    }
    .english-sub {
      font-family: 'BillionDreams', cursive;
      font-size: 76px;
      color: #FFD166;
      text-shadow: 0 0 30px rgba(255,209,102,0.6);
    }
    .artist-credit {
      font-family: 'CharlotteSouthern', cursive;
      font-size: 44px;
      color: #00F0FF;
      margin-top: 20px;
      text-shadow: 0 0 20px rgba(0,240,255,0.5);
    }
    .eq-container {
      position: absolute;
      bottom: 80px;
      display: flex;
      gap: 10px;
      height: 70px;
      align-items: flex-end;
    }
    .eq-bar {
      width: 10px;
      background: linear-gradient(180deg, #FF007F, #FFB800);
      border-radius: 999px;
      height: 10px;
    }
  </style>
</head>
<body>
  <div id="stage">
    <div class="top-pill">
      <div class="dot"></div>
      <span>AUTONOMOUS LYRICS SYNC • LRCLIB</span>
    </div>
    <div class="main-hook">
      <div class="emojis" id="emojiEl">🔥 💃 👑</div>
      <div class="hindi-text" id="lyricText">${trackName}</div>
      <div class="english-sub" id="subText">${artistName}</div>
      <div class="artist-credit">MotionOS × Open-Source Providers</div>
    </div>
    <div class="eq-container" id="eqContainer"></div>
  </div>

  <script>
    const cues = ${JSON.stringify(relativeCues)};

    function spring(t, k = 200, d = 22) {
      if (t <= 0) return 0;
      const w0 = Math.sqrt(k);
      const z = d / (2 * w0);
      if (z < 1) {
        const wd = w0 * Math.sqrt(1 - z * z);
        return 1 - Math.exp(-z * w0 * t) * (Math.cos(wd * t) + ((z * w0) / wd) * Math.sin(wd * t));
      }
      return 1 - Math.exp(-w0 * t) * (1 + w0 * t);
    }

    const eqContainer = document.getElementById('eqContainer');
    for (let i = 0; i < 16; i++) {
      const b = document.createElement('div');
      b.className = 'eq-bar';
      b.id = 'eq_' + i;
      eqContainer.appendChild(b);
    }

    window.seek = function(t) {
      // Find current active cue
      let active = cues[0];
      for (let i = 0; i < cues.length; i++) {
        if (t >= cues[i].relTime) {
          active = cues[i];
        }
      }

      if (active) {
        const el = document.getElementById('lyricText');
        el.innerText = active.text;
        const bounce = spring(t - active.relTime, 280, 22);
        el.style.transform = 'scale(' + (1.0 + 0.12 * bounce) + ')';
      }

      // EQ bars animation
      for (let i = 0; i < 16; i++) {
        const bar = document.getElementById('eq_' + i);
        const wave = 0.5 + 0.5 * Math.sin(t * 14 + i * 0.7);
        bar.style.height = Math.max(8, wave * 65) + 'px';
      }
    };

    window.seek(0);
  </script>
</body>
</html>`;

  const outDir = path.dirname(outputPath);
  if (!existsSync(outDir)) {
    execSync(`mkdir "${outDir}"`, { stdio: 'ignore' });
  }
  writeFileSync(outputPath, html, 'utf-8');
  console.log(`[AutoLyrics] Generated composition HTML -> ${outputPath}`);
  return outputPath;
}
async function main() {
  const targetFile = process.argv[2] || "C:\\Users\\jaygu\\Music\\Bollywood Dance Music_SpotiDost\\01_Aaj_Ki_Raat_From_Stree_2_SpotiDost.mp3";
  console.log(`[AutoLyrics] Probing audio file: ${targetFile}`);

  const meta = extractAudioMeta(targetFile);
  console.log(`[AutoLyrics] Clean Metadata: "${meta.title}" by "${meta.artist}" (${meta.duration.toFixed(1)}s)`);

  console.log(`[AutoLyrics] Fetching synced lyrics from LRCLIB open-source provider...`);
  const result = await fetchLyricsFromProviders(meta.title, meta.artist, meta.duration);

  if (result && result.syncedLyrics) {
    console.log(`[AutoLyrics] Successfully fetched synced lyrics! (${result.trackName} - ${result.artistName})`);
    const parsed = parseLrcString(result.syncedLyrics);
    console.log(`[AutoLyrics] Total synced cue lines: ${parsed.length}`);
    console.log(`[AutoLyrics] First 5 synced cues:`);
    parsed.slice(0, 5).forEach(c => {
      console.log(`  [${c.time.toFixed(2)}s] ${c.text}`);
    });

    const outLrc = path.join('scratch', 'fetched_lyrics.lrc');
    writeFileSync(outLrc, result.syncedLyrics, 'utf-8');
    console.log(`[AutoLyrics] Saved raw LRC to: ${outLrc}`);
  } else {
    console.log(`[AutoLyrics] No synced lyrics found for query.`);
  }
}

if (process.argv[1] && process.argv[1].endsWith('auto_lyrics_syncer.mjs')) {
  main();
}
