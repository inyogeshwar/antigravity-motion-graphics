// render.mjs - High-Performance Playwright Frame-by-Frame Deterministic Renderer
import { chromium } from 'playwright';
import { spawn, execSync } from 'node:child_process';
import { mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';

function printHelp() {
  console.log(`
Antigravity Motion Graphics - Playwright Renderer

Usage:
  node render.mjs [options]

Options:
  --fps <number>     Frame rate (default: 30)
  --dur <number>     Duration in seconds (default: 15)
  --sub <number>     Sub-frame sampling multiplier for motion blur (default: 1)
  --w <number>       Output width in pixels (default: 1080)
  --h <number>       Output height in pixels (default: 1920)
  --out <path>       Output MP4 path (default: out/silent.mp4)
  --html <path>      Path to HTML composition (default: index.html)
  --help, -h         Show this help message
`);
}

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  printHelp();
  process.exit(0);
}

const arg = (k, d) => {
  const i = process.argv.indexOf('--' + k);
  return i > 0 ? (typeof d === 'number' ? Number(process.argv[i + 1]) : process.argv[i + 1]) : d;
};

const FPS = arg('fps', 30);
const DUR = arg('dur', 15);
const SUB = arg('sub', 1);
const W = arg('w', 1080);
const H = arg('h', 1920);
const OUT = arg('out', 'out/silent.mp4');
const HTML = arg('html', 'index.html');

mkdirSync(path.dirname(OUT), { recursive: true });

/**
 * Cross-platform FFmpeg executable resolution:
 * 1. Explicit FFMPEG_PATH environment variable
 * 2. System PATH
 * 3. Windows WinGet Links path (%LOCALAPPDATA%)
 * 4. Optional ffmpeg-static package
 */
function resolveFfmpeg() {
  if (process.env.FFMPEG_PATH && existsSync(process.env.FFMPEG_PATH)) {
    return process.env.FFMPEG_PATH;
  }

  // Check if system ffmpeg is directly callable
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
    return 'ffmpeg';
  } catch {
    // Continue fallback search
  }

  // Windows WinGet fallback using dynamic environment variable
  if (process.platform === 'win32' && process.env.LOCALAPPDATA) {
    const wingetLink = path.join(process.env.LOCALAPPDATA, 'Microsoft', 'WinGet', 'Links', 'ffmpeg.exe');
    if (existsSync(wingetLink)) {
      return wingetLink;
    }
  }

  return 'ffmpeg';
}

const ffmpegCmd = resolveFfmpeg();

const browser = await chromium.launch({
  args: ['--allow-file-access-from-files', '--disable-gpu', '--no-sandbox']
});
const page = await browser.newPage({
  viewport: { width: W, height: H },
  deviceScaleFactor: 1
});

page.on('console', msg => console.log('[Browser Console]', msg.text()));
page.on('pageerror', err => console.error('[Browser Error]', err.message));

const htmlPath = path.resolve(HTML);
if (!existsSync(htmlPath)) {
  console.error(`[Error] HTML composition file not found: ${htmlPath}`);
  await browser.close();
  process.exit(1);
}

await page.goto('file:///' + htmlPath.replace(/\\/g, '/'));
await page.evaluate(() => document.fonts.ready);
// Wait for images and layout to settle
await page.waitForTimeout(500);

// Video filter for motion blur / framerate
const vf = SUB > 1 
  ? `tmix=frames=${SUB},select='eq(mod(n\\,${SUB})\\,${SUB - 1})',setpts=N/${FPS}/TB`
  : `setpts=N/${FPS}/TB`;

const ff = spawn(ffmpegCmd, [
  '-y',
  '-f', 'image2pipe',
  '-framerate', String(FPS * SUB),
  '-i', '-',
  '-vf', vf,
  '-r', String(FPS),
  '-c:v', 'libx264',
  '-preset', 'faster',
  '-crf', '18',
  '-pix_fmt', 'yuv420p',
  OUT
], { stdio: ['pipe', 'inherit', 'inherit'] });

ff.on('error', (err) => {
  console.error('[FFmpeg Error]', err.message);
});

const total = Math.round(DUR * FPS * SUB);
console.log(`[Render] Starting render: ${DUR}s @ ${FPS}fps (${SUB} subframes = ${total} frames total) -> ${OUT}`);

const startTime = Date.now();
for (let i = 0; i < total; i++) {
  const t = i / (FPS * SUB);
  await page.evaluate((currT) => {
    if (typeof window.seek === 'function') {
      window.seek(currT);
    }
  }, t);

  const buf = await page.screenshot({ type: 'jpeg', quality: 92 });
  if (!ff.stdin.write(buf)) {
    await new Promise((r) => ff.stdin.once('drain', r));
  }
  if (i % (FPS * SUB) === 0 || i === total - 1) {
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    const progress = (i / (FPS * SUB)).toFixed(1);
    console.log(`[Render] Progress: ${progress}s / ${DUR}s (${elapsed}s elapsed)`);
  }
}

ff.stdin.end();
await new Promise((r) => ff.on('close', r));
await browser.close();
const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
console.log(`[Render] Finished in ${totalTime}s -> ${OUT}`);
