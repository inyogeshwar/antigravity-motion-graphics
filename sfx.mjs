// sfx.mjs - Studio SFX Mixer & Procedural Synthesizer for 16-bit 48kHz WAV
// Usage: node sfx.mjs [cues.json] [out/sfx.wav] [--library]

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { audioEncodeArgs, extensionOf, outputKind } from './lib/formats.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname);

// Procedural synthesizer voices (Fallback / Zero Dependency)
export const VOICES = {
  click: [0.05, t => Math.sin(2 * Math.PI * 1800 * t) * Math.exp(-t * 90) * 0.5],
  pop: [0.15, t => Math.sin(2 * Math.PI * (600 + 900 * t) * t) * Math.exp(-t * 30) * 0.4],
  thump: [0.50, t => Math.sin(2 * Math.PI * (90 - 60 * t) * t) * Math.exp(-t * 9) * 0.9],
  whoosh: [0.35, t => {
    let s = Math.floor(t * 48000) * 1664525 + 1013904223;
    const n = ((s >>> 0) / 4294967296) * 2 - 1;
    return n * Math.sin(Math.PI * Math.min(1, t / 0.35)) * 0.25;
  }],
  ding: [0.60, t => Math.sin(2 * Math.PI * 880 * t) * Math.exp(-t * 5) * 0.4 + Math.sin(2 * Math.PI * 1760 * t) * Math.exp(-t * 8) * 0.2]
};

// Authentic Audio Samples Mapping from assets/sfx/library/
export const LIBRARY_MAP = {
  whoosh: 'assets/sfx/library/whoosh/swoosh-fast.mp3',
  swoosh: 'assets/sfx/library/whoosh/swoosh-fast.mp3',
  'whoosh-short': 'assets/sfx/library/whoosh/whoosh-short.mp3',
  swish: 'assets/sfx/library/whoosh/swish-whoosh.mp3',
  'jet-whoosh': 'assets/sfx/library/whoosh/jet-whoosh.wav',
  click: 'assets/sfx/library/ui/click-hd.mp3',
  'click-mouse': 'assets/sfx/library/ui/click-mouse.mp3',
  pop: 'assets/sfx/library/ui/notification-iphone.mp3',
  notification: 'assets/sfx/library/ui/notification-iphone.mp3',
  keyboard: 'assets/sfx/library/ui/keyboard-typing.mp3',
  beep: 'assets/sfx/library/ui/ui-beep.mp3',
  punch: 'assets/sfx/library/impact/impact-punch.mp3',
  impact: 'assets/sfx/library/impact/impact-punch.mp3',
  thump: 'assets/sfx/library/impact/impact-punch.mp3',
  riser: 'assets/sfx/library/impact/riser-cinematic.mp3',
  glitch: 'assets/sfx/library/impact/glitch-accent.mp3',
  camera: 'assets/sfx/library/camera/camera-shutter-crunch.mp3',
  shutter: 'assets/sfx/library/camera/camera-shutter-crunch.mp3',
  flash: 'assets/sfx/library/camera/camera-flash.mp3',
  cash: 'assets/sfx/library/finance/cash-register-kaching.mp3',
  kaching: 'assets/sfx/library/finance/cash-register-kaching.mp3',
  coin: 'assets/sfx/library/finance/coin-drop.mp3',
  counter: 'assets/sfx/library/finance/digital-counter.mp3',
  counting: 'assets/sfx/library/finance/digital-counter.mp3',
  magic: 'assets/sfx/library/novelty/magic-reveal.mp3',
  wrong: 'assets/sfx/library/novelty/wrong-buzzer.mp3',
  buzzer: 'assets/sfx/library/novelty/wrong-buzzer.mp3',
  paper: 'assets/sfx/library/novelty/paper-rustle.mp3',
  gear: 'assets/sfx/library/novelty/gear-turning.wav'
};

/**
 * Mix authentic SFX sample audio files using FFmpeg
 */
export function mixLibrarySfx({ cues = [], outputFile = 'out/sfx.wav', volume = 0.85 }) {
  if (!Array.isArray(cues) || cues.length === 0) {
    return synthesizeSfx({ cues, outputFile });
  }

  // Filter valid cues that have audio files
  const validCues = [];
  for (const c of cues) {
    const cueType = (c.type || c.voice || 'click').toLowerCase();
    const relPath = LIBRARY_MAP[cueType] || LIBRARY_MAP.click;
    const fullPath = path.resolve(ROOT_DIR, relPath);
    if (existsSync(fullPath)) {
      validCues.push({
        time: typeof c.t === 'number' ? c.t : (typeof c.time === 'number' ? c.time : 0),
        file: fullPath,
        volume: c.volume || volume
      });
    }
  }

  if (validCues.length === 0) {
    return synthesizeSfx({ cues, outputFile });
  }

  const inputs = [];
  const filterParts = [];
  validCues.forEach((cue, idx) => {
    inputs.push('-i', cue.file);
    const delayMs = Math.max(0, Math.round(cue.time * 1000));
    filterParts.push(`[${idx}:a]adelay=${delayMs}|${delayMs},volume=${cue.volume}[a${idx}]`);
  });

  const mixInputs = validCues.map((_, idx) => `[a${idx}]`).join('');
  const filterComplex = `${filterParts.join(';')};${mixInputs}amix=inputs=${validCues.length}:normalize=0[outa]`;

  mkdirSync(path.dirname(outputFile), { recursive: true });

  const args = [
    '-y',
    ...inputs,
    '-filter_complex', filterComplex,
    '-map', '[outa]',
    ...audioEncodeArgs(outputFile),
    '-ar', '48000',
    outputFile
  ];

  try {
    const res = spawnSync('ffmpeg', args, { stdio: 'pipe' });
    if (res.status === 0 && existsSync(outputFile)) {
      console.log(`[SFX Studio] Mixed ${validCues.length} creator SFX cues -> ${outputFile}`);
      return readFileSync(outputFile);
    }
  } catch (err) {
    console.warn(`[SFX Studio] FFmpeg sample mix error: ${err.message}, falling back to synth.`);
  }

  return synthesizeSfx({ cues, outputFile });
}

/**
 * Synthesize cues array into a procedural WAV buffer
 */
export function synthesizeSfx({ cues = [], outputFile = null, sampleRate = 48000 }) {
  const SR = sampleRate;
  const maxT = cues.length > 0 ? Math.max(...cues.map(c => c.t || c.time || 0)) : 1;
  const buf = new Float32Array(Math.ceil((maxT + 2) * SR));

  for (const c of cues) {
    const voiceKey = c.type || c.voice || 'click';
    const voice = VOICES[voiceKey] || VOICES.click;
    const [len, fn] = voice;
    const start = Math.floor((c.t || c.time || 0) * SR);
    for (let i = 0; i < len * SR && start + i < buf.length; i++) {
      buf[start + i] += fn(i / SR);
    }
  }

  const n = buf.length;
  const b = Buffer.alloc(44 + n * 2);
  b.write('RIFF', 0);
  b.writeUInt32LE(36 + n * 2, 4);
  b.write('WAVEfmt ', 8);
  b.writeUInt32LE(16, 16);
  b.writeUInt16LE(1, 20); // PCM
  b.writeUInt16LE(1, 22); // mono
  b.writeUInt32LE(SR, 24);
  b.writeUInt32LE(SR * 2, 28);
  b.writeUInt16LE(2, 32);
  b.writeUInt16LE(16, 34);
  b.write('data', 36);
  b.writeUInt32LE(n * 2, 40);

  for (let i = 0; i < n; i++) {
    const sample = Math.round(Math.max(-1, Math.min(1, buf[i])) * 32767);
    b.writeInt16LE(sample, 44 + i * 2);
  }

  if (outputFile) {
    mkdirSync(path.dirname(outputFile), { recursive: true });
    if (extensionOf(outputFile) === 'wav' || outputKind(outputFile) !== 'audio') {
      writeFileSync(outputFile, b);
    } else {
      transcodeWav(b, outputFile);
    }
    console.log(`[SFX Synth] Synthesized ${cues.length} cues -> ${outputFile}`);
  }

  return b;
}

/**
 * Write a synthesized WAV buffer to a non-WAV container (mp3, m4a, flac, ogg, opus...)
 * by piping it through FFmpeg. Falls back to a .wav file if FFmpeg is unavailable.
 */
function transcodeWav(wavBuffer, outputFile) {
  const res = spawnSync('ffmpeg', [
    '-y', '-f', 'wav', '-i', 'pipe:0',
    ...audioEncodeArgs(outputFile),
    outputFile
  ], { input: wavBuffer, stdio: ['pipe', 'inherit', 'inherit'] });
  if (res.status !== 0) {
    const fallback = outputFile.replace(/\.[^.]+$/, '') + '.wav';
    console.warn(`[SFX Synth] FFmpeg could not encode ${outputFile}; wrote ${fallback} instead.`);
    writeFileSync(fallback, wavBuffer);
  }
}

// CLI Execution support
if (process.argv[1] && process.argv[1].endsWith('sfx.mjs')) {
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log(`
Antigravity Motion Graphics - SFX Engine & Synthesizer

Usage:
  node sfx.mjs [cues.json] [out/sfx.wav] [--library]

Output format follows the file extension: wav, mp3, m4a, aac, flac, ogg, opus (non-WAV is encoded via FFmpeg).

Authentic Creator SFX:
  ${Object.keys(LIBRARY_MAP).join(', ')}

Procedural Voices:
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
    cues = [
      { t: 0.1, type: 'whoosh' },
      { t: 0.5, type: 'click' },
      { t: 1.0, type: 'pop' },
      { t: 1.5, type: 'cash' }
    ];
  }

  if (existsSync('assets/sfx/library')) {
    mixLibrarySfx({ cues, outputFile });
  } else {
    synthesizeSfx({ cues, outputFile });
  }
}
