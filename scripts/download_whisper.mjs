#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const WHISPER_DIR = path.join(ROOT_DIR, 'models', 'whisper');

const FILES = [
  {
    name: 'config.json',
    url: 'https://huggingface.co/mobiuslabsgmbh/faster-whisper-large-v3-turbo/resolve/main/config.json'
  },
  {
    name: 'preprocessor_config.json',
    url: 'https://huggingface.co/mobiuslabsgmbh/faster-whisper-large-v3-turbo/resolve/main/preprocessor_config.json'
  },
  {
    name: 'tokenizer.json',
    url: 'https://huggingface.co/mobiuslabsgmbh/faster-whisper-large-v3-turbo/resolve/main/tokenizer.json'
  },
  {
    name: 'vocabulary.json',
    url: 'https://huggingface.co/mobiuslabsgmbh/faster-whisper-large-v3-turbo/resolve/main/vocabulary.json'
  },
  {
    name: 'model.bin',
    url: 'https://huggingface.co/mobiuslabsgmbh/faster-whisper-large-v3-turbo/resolve/main/model.bin'
  }
];

async function main() {
  if (!fs.existsSync(WHISPER_DIR)) fs.mkdirSync(WHISPER_DIR, { recursive: true });
  console.log(`\n▲ MotionOS - Faster-Whisper Large V3 Turbo Downloader`);
  console.log(`Destination: ${WHISPER_DIR}\n`);

  for (const f of FILES) {
    const dest = path.join(WHISPER_DIR, f.name);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      if (f.name === 'model.bin' && fs.statSync(dest).size < 1000000000) {
        // partial or incomplete
        fs.unlinkSync(dest);
      } else {
        const mb = (fs.statSync(dest).size / (1024 * 1024)).toFixed(2);
        console.log(`  ✓ ${f.name.padEnd(25)} [Already present - ${mb} MB]`);
        continue;
      }
    }

    console.log(`  ⏳ Downloading ${f.name}...`);
    const res = await fetch(f.url);
    if (!res.ok) throw new Error(`HTTP ${res.status} on ${f.url}`);

    const fileStream = fs.createWriteStream(dest);
    await pipeline(Readable.fromWeb(res.body), fileStream);

    const mb = (fs.statSync(dest).size / (1024 * 1024)).toFixed(2);
    console.log(`  ✓ ${f.name.padEnd(25)} Downloaded (${mb} MB)`);
  }

  console.log(`\n🎉 Faster-Whisper Large V3 Turbo setup complete in models/whisper!\n`);
}

main().catch(err => {
  console.error('Error downloading whisper files:', err);
  process.exit(1);
});
