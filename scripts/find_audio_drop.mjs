// scripts/find_audio_drop.mjs
import { execSync } from 'node:child_process';
import path from 'node:path';

const songPath = 'C:\\Users\\jaygu\\Music\\Bollywood Dance Music_SpotiDost\\01_Aaj_Ki_Raat_From_Stree_2_SpotiDost.mp3';

// Cut slices at 0:15-0:30, 0:30-0:45, 0:45-1:00 to check where the hook is
const slices = [
  { start: '00:00:20', dur: 15, out: 'scratch/slice_20s.wav' },
  { start: '00:00:35', dur: 15, out: 'scratch/slice_35s.wav' },
  { start: '00:00:50', dur: 15, out: 'scratch/slice_50s.wav' }
];

for (const s of slices) {
  execSync(`ffmpeg -y -ss ${s.start} -t ${s.dur} -i "${songPath}" -c:a pcm_s16le "${s.out}"`, { stdio: 'ignore' });
  console.log(`Extracted: ${s.out}`);
}
