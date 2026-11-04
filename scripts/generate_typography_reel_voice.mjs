// scripts/generate_typography_reel_voice.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { getCartesiaApiKey } from '../cartesia.mjs';

const SCRIPT_TEXT = "Stop editing reels frame by frame. Meet MotionOS. Write clean code. Get instant kinetic typography, damped spring physics, and Apple emojis. Pure speed. Zero slop.";

async function run() {
  const apiKey = getCartesiaApiKey();
  if (!apiKey) throw new Error("CARTESIA_API_KEY missing");

  mkdirSync('scratch', { recursive: true });

  const sampleRate = 44100;
  console.log('[Voice Generator] Requesting speech + word timestamps from Cartesia sonic-3.6...');

  const res = await fetch('https://api.cartesia.ai/tts/sse', {
    method: 'POST',
    headers: {
      'X-API-Key': apiKey,
      'Cartesia-Version': '2024-06-10',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model_id: 'sonic-3.6',
      transcript: SCRIPT_TEXT,
      voice: { mode: 'id', id: '6cb8801d-259a-4bdc-978f-b45808d58cd3' }, // Jeremy
      output_format: { container: 'raw', encoding: 'pcm_s16le', sample_rate: sampleRate },
      add_timestamps: true
    })
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Cartesia error (${res.status}): ${err}`);
  }

  const text = await res.text();
  const chunks = [];
  const words = [];

  for (const line of text.split('\n')) {
    if (!line.startsWith('data:')) continue;
    try {
      const data = JSON.parse(line.slice(5).trim());
      if (data.data) {
        chunks.push(Buffer.from(data.data, 'base64'));
      }
      if (data.word_timestamps) {
        const wt = data.word_timestamps;
        for (let i = 0; i < wt.words.length; i++) {
          words.push({
            word: wt.words[i],
            start: wt.start[i],
            end: wt.end[i]
          });
        }
      }
    } catch {}
  }

  const rawPcm = Buffer.concat(chunks);
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(rawPcm.length + 36, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(1, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(rawPcm.length, 40);

  const wav = Buffer.concat([header, rawPcm]);
  const audioPath = 'scratch/motionos_reel_voice.wav';
  const wordsPath = 'scratch/motionos_reel_words.json';

  writeFileSync(audioPath, wav);
  writeFileSync(wordsPath, JSON.stringify(words, null, 2));

  const durationSec = rawPcm.length / (sampleRate * 2);
  console.log(`[Voice Generator] Generated ${words.length} words, total duration: ${durationSec.toFixed(2)}s`);
  console.log(`Audio saved: ${audioPath}`);
  console.log(`Word timings saved: ${wordsPath}`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
