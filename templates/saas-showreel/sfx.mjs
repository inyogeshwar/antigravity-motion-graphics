// sfx.mjs - Synthesize UI Sound Effects and Audio Cues directly to 16-bit 48kHz WAV
// Usage: node sfx.mjs cues.json out/sfx.wav
// Cues format: [{"t": 0.5, "type": "click"}, {"t": 1.2, "type": "whoosh"}]

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

// Procedural synthesizer voices for UI animations
export const VOICES = {
  click: [0.05, t => Math.sin(2 * Math.PI * 1800 * t) * Math.exp(-t * 90) * 0.5],
  pop: [0.15, t => Math.sin(2 * Math.PI * (600 + 900 * t) * t) * Math.exp(-t * 30) * 0.4],
  thump: [0.50, t => Math.sin(2 * Math.PI * (90 - 60 * t) * t) * Math.exp(-t * 9) * 0.9],
  whoosh: [0.35, t => {
    // Deterministic linear congruential generator for noise burst
    let s = Math.floor(t * 48000) * 1664525 + 1013904223;
    const n = ((s >>> 0) / 4294967296) * 2 - 1;
    return n * Math.sin(Math.PI * Math.min(1, t / 0.35)) * 0.25;
  }],
  ding: [0.60, t => Math.sin(2 * Math.PI * 880 * t) * Math.exp(-t * 5) * 0.4 + Math.sin(2 * Math.PI * 1760 * t) * Math.exp(-t * 8) * 0.2]
};

/**
 * Synthesize cues array into a WAV buffer / file
 * 
 * @param {Object} options
 * @param {Array<{t: number, type: string}>} options.cues - List of audio cues
 * @param {string} [options.outputFile] - Optional output file path
 * @param {number} [options.sampleRate=48000] - Audio sample rate (Hz)
 * @returns {Buffer} WAV audio buffer
 */
export function synthesizeSfx({ cues = [], outputFile = null, sampleRate = 48000 }) {
  const SR = sampleRate;
  const maxT = cues.length > 0 ? Math.max(...cues.map(c => c.t || 0)) : 1;
  const buf = new Float32Array(Math.ceil((maxT + 2) * SR));

  for (const c of cues) {
    const voice = VOICES[c.type] || VOICES.click;
    const [len, fn] = voice;
    const start = Math.floor((c.t || 0) * SR);
    for (let i = 0; i < len * SR && start + i < buf.length; i++) {
      buf[start + i] += fn(i / SR);
    }
  }

  // Write 16-bit Mono WAV format
  const n = buf.length;
  const b = Buffer.alloc(44 + n * 2);
  b.write('RIFF', 0);
  b.writeUInt32LE(36 + n * 2, 4);
  b.write('WAVEfmt ', 8);
  b.writeUInt32LE(16, 16);
  b.writeUInt16LE(1, 20); // PCM
  b.writeUInt16LE(1, 22); // 1 channel (mono)
  b.writeUInt32LE(SR, 24); // sample rate
  b.writeUInt32LE(SR * 2, 28); // byte rate
  b.writeUInt16LE(2, 32); // block align
  b.writeUInt16LE(16, 34); // bits per sample
  b.write('data', 36);
  b.writeUInt32LE(n * 2, 40);

  for (let i = 0; i < n; i++) {
    const sample = Math.round(Math.max(-1, Math.min(1, buf[i])) * 32767);
    b.writeInt16LE(sample, 44 + i * 2);
  }

  if (outputFile) {
    mkdirSync(path.dirname(outputFile), { recursive: true });
    writeFileSync(outputFile, b);
    console.log(`[SFX] Synthesized ${cues.length} cues -> ${outputFile}`);
  }

  return b;
}

// CLI Execution support
if (process.argv[1] && process.argv[1].endsWith('sfx.mjs')) {
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log(`
Antigravity Motion Graphics - SFX Synthesizer

Usage:
  node sfx.mjs [cues.json] [out/sfx.wav]

Available Voice Effects:
  ${Object.keys(VOICES).join(', ')}
`);
    process.exit(0);
  }

  const inputFile = process.argv[2] || 'cues.json';
  const outputFile = process.argv[3] || 'out/sfx.wav';

  let cues = [];
  try {
    cues = JSON.parse(readFileSync(inputFile, 'utf8'));
  } catch {
    console.warn(`[SFX] Could not read cues file "${inputFile}", using fallback UI test cues.`);
    cues = [
      { t: 0.1, type: "whoosh" },
      { t: 0.5, type: "click" },
      { t: 1.0, type: "pop" },
      { t: 1.5, type: "thump" }
    ];
  }

  synthesizeSfx({ cues, outputFile });
}
