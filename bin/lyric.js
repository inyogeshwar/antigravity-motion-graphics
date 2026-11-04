#!/usr/bin/env node
// bin/lyric.js - CLI runner for MotionOS Autonomous Lyric & Status Studio

import { readFileSync, existsSync } from 'node:fs';
import { spawnSync, execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LYRICS_PRESETS, createLyricReel } from '../lib/lyrics.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

function printHelp() {
  console.log(`
MotionOS Lyric & Status Studio CLI
Autonomous generation of viral 9:16 Instagram & Shorts lyric reels

Usage:
  npx motionos lyric [options]

Options:
  --style <name>      Preset style (default: hindi-calligraphy)
                      Available: ${Object.keys(LYRICS_PRESETS).join(', ')}
  --song <path>       Audio file (MP3 or WAV)
  --lyrics <path|str> Path to text/LRC file, or lyrics string
  --out <path>        Output MP4 path (default: out/lyric_reel.mp4)
  --dur <seconds>     Video duration in seconds (default: 15)
  --title <string>    Song title for UI/player (default: "Viral Edit")
  --artist <string>   Artist name for UI/player (default: "Official Audio")
  --watermark <text>  Creator watermark (default: "@motionos.studio")
  --preview           Quick 6-frame contact sheet preview without full video render
  --help, -h          Show this help message

Presets:
${Object.entries(LYRICS_PRESETS).map(([k, v]) => `  • ${k.padEnd(18)} : ${v.description}`).join('\n')}
`);
}

const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  printHelp();
  process.exit(0);
}

const getArg = (k, def) => {
  const i = args.indexOf('--' + k);
  return i > -1 && args[i + 1] ? args[i + 1] : def;
};

const style = getArg('style', 'hindi-calligraphy');
const song = getArg('song', null);
const lyricsArg = getArg('lyrics', null);
const out = getArg('out', 'out/lyric_reel.mp4');
const dur = parseFloat(getArg('dur', '15.0'));
const title = getArg('title', 'Aesthetic Lyric Edit');
const artist = getArg('artist', 'MotionOS Studio');
const watermark = getArg('watermark', '@motionos.studio');
const isPreview = args.includes('--preview');

// Read lyrics from file if exists, or use provided string or default sample
let lyricsContent = '';
if (lyricsArg && existsSync(lyricsArg)) {
  lyricsContent = readFileSync(lyricsArg, 'utf8');
} else if (lyricsArg) {
  lyricsContent = lyricsArg;
} else {
  // Default sample for demonstration
  lyricsContent = `[00:01.00] केसा नेसा
[00:04.20] प्यार करके देखो ना
[00:07.50] TARAH / MERI
[00:10.80] Tum कभी BHI`;
}

console.log(`[Lyrics Studio] Generating reel with style: '${style}' (${dur}s)...`);

const result = await createLyricReel({
  preset: style,
  audioFile: song,
  lyricsText: lyricsContent,
  outputFile: out,
  duration: dur,
  title,
  artist,
  watermark
});

if (isPreview) {
  const contactOut = out.replace(/\.[^.]+$/, '_contact.png');
  console.log(`[Lyrics Studio] Generating rapid preview contact sheet -> ${contactOut}`);
  // Quick snapshot using node render or test_snapshots
  const snapScript = path.join(ROOT_DIR, 'scripts', 'test_snapshots.mjs');
  if (existsSync(snapScript)) {
    execSync(`node "${snapScript}"`, { stdio: 'inherit' });
  }
  process.exit(0);
}

// Full Render Pipeline
const silentOut = path.resolve('scratch/lyrics/silent.mp4');
console.log(`[Lyrics Studio] Rendering video frames -> ${silentOut}...`);

const renderProc = spawnSync(process.execPath, [
  path.join(ROOT_DIR, 'render.mjs'),
  '--html', result.htmlPath,
  '--out', silentOut,
  '--dur', String(dur),
  '--fps', '30'
], { stdio: 'inherit' });

if (renderProc.status !== 0) {
  console.error('[Lyrics Studio Error] Video rendering failed.');
  process.exit(1);
}

// If audio file provided, mux audio
if (song && existsSync(song)) {
  console.log(`[Lyrics Studio] Muxing audio track '${song}' -> ${out}...`);
  execSync(`ffmpeg -y -i "${silentOut}" -i "${song}" -c:v copy -c:a aac -b:a 192k -shortest "${out}"`, { stdio: 'inherit' });
} else {
  // Copy silent as final
  execSync(`ffmpeg -y -i "${silentOut}" -c:v copy "${out}"`, { stdio: 'inherit' });
}

console.log(`\n🎉 [Lyrics Studio] Successfully generated broadcast reel -> ${out}`);
