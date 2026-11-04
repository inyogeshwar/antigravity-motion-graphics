// scripts/inspect_batch.mjs
import { execSync } from 'node:child_process';
import { mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';

const files = [
  "Video-99105.mp4",
  "Video-70583.mp4",
  "Video-40154.mp4",
  "Video-55921.mp4",
  "Video-88227.mp4",
  "Video-28024.mp4",
  "Video-24298.mp4",
  "Video-411.mp4",
  "Video-68477.mp4"
];

const DOWNLOADS = "C:\\Users\\jaygu\\Downloads";
const OUT_DIR = "scratch/batch_inspect";
mkdirSync(OUT_DIR, { recursive: true });

console.log('Extracting contact sheets for 9 reels...');

for (const file of files) {
  const input = path.join(DOWNLOADS, file);
  const base = path.basename(file, '.mp4');
  const outContact = path.join(OUT_DIR, `${base}_contact.png`);

  try {
    // Get duration
    const probe = execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${input}"`, { encoding: 'utf8' }).trim();
    const dur = parseFloat(probe) || 10;
    
    // Generate contact sheet (3x2 or 4x2 grid = 6 or 8 keyframes across duration)
    execSync(`ffmpeg -y -i "${input}" -vf "fps=2,scale=270:-1,tile=4x2" -frames:v 1 "${outContact}"`, { stdio: 'ignore' });
    console.log(`[OK] ${file} (${dur.toFixed(1)}s) -> ${outContact}`);
  } catch (err) {
    console.error(`[Error] ${file}:`, err.message);
  }
}

console.log('Done extracting all contact sheets!');
