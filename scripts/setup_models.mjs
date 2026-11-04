#!/usr/bin/env node

/**
 * MotionOS AI Models Downloader & Local Binder
 * 
 * Downloads official open-source computer-vision & speech models:
 * - RobustVideoMatting (RVM ONNX) - Real-time green-screen-free subject cutout
 * - YuNet ONNX & BlazeFace - Real-time face tracking & coordinates
 * - Selfie Segmenter - MediaPipe body & head contour mask
 * - CAM++ - Speaker recognition ONNX
 * - Faster-Whisper Turbo - Millisecond speech-to-text
 * 
 * Usage:
 *   node scripts/setup_models.mjs [--quick] [--all]
 */

import fs from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { getPythonPath } from '../lib/vibe.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const MODELS_DIR = path.join(ROOT_DIR, 'models');

const isQuick = process.argv.includes('--quick');
const isAll = process.argv.includes('--all') || (!isQuick && !process.argv.includes('--help'));

const CV_MODELS = [
  {
    name: 'RobustVideoMatting (RVM)',
    category: 'matting',
    file: 'rvm_mobilenetv3_fp32.onnx',
    url: 'https://github.com/PeterL1n/RobustVideoMatting/releases/download/v1.0.0/rvm_mobilenetv3_fp32.onnx',
    desc: 'Bina green screen ke insaan ka cutout (16 MB)'
  },
  {
    name: 'YuNet Face Detector',
    category: 'face',
    file: 'yunet.onnx',
    url: 'https://github.com/opencv/opencv_zoo/raw/main/models/face_detection_yunet/face_detection_yunet_2023mar.onnx',
    desc: 'Real-time face & landmark tracking (230 KB)'
  },
  {
    name: 'BlazeFace Short Range',
    category: 'face',
    file: 'blaze_face_short_range.tflite',
    url: 'https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite',
    desc: 'Google MediaPipe face bounding (250 KB)'
  },
  {
    name: 'MediaPipe Selfie Segmenter',
    category: 'face',
    file: 'selfie_segmenter.tflite',
    url: 'https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite',
    desc: 'Contour segmentation for text-behind-head (250 KB)'
  },
  {
    name: 'CAM++ Speaker Recognition',
    category: 'speaker',
    file: 'campplus_sv_en_voxceleb_16k.onnx',
    url: 'https://github.com/k2-fsa/sherpa-onnx/releases/download/speaker-recongition-models/3dspeaker_speech_campplus_sv_en_voxceleb_16k.onnx',
    desc: 'Multi-speaker voice separation (24 MB)'
  }
];

async function downloadFile(url, destPath, label) {
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 1000) {
    const sizeMb = (fs.statSync(destPath).size / (1024 * 1024)).toFixed(2);
    console.log(`  ✓ ${label.padEnd(30)} [Already present - ${sizeMb} MB]`);
    return;
  }

  process.stdout.write(`  ⏳ Downloading ${label}... `);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

    const fileStream = fs.createWriteStream(destPath);
    await pipeline(Readable.fromWeb(res.body), fileStream);

    const sizeMb = (fs.statSync(destPath).size / (1024 * 1024)).toFixed(2);
    console.log(`✓ (${sizeMb} MB)`);
  } catch (err) {
    console.log(`❌ Failed: ${err.message}`);
  }
}

async function prefetchWhisper() {
  console.log(`\n🎙️ Prefetching Whisper Turbo (Speech-to-Text Model)...`);
  const py = getPythonPath();
  const pyCode = `
import sys
try:
    from faster_whisper import WhisperModel
    print("  Initializing faster-whisper turbo cache...", flush=True)
    m = WhisperModel('large-v3-turbo', device='cpu', compute_type='int8', download_root='models/whisper')
    print("  ✓ Whisper large-v3-turbo cached successfully!")
except Exception as e:
    print(f"  Note on Whisper: {e}")
    print("  (Whisper will auto-cache on your first 'npx motionos veos prep' run)")
`;
  return new Promise(resolve => {
    const child = spawn(py, ['-c', pyCode], { stdio: 'inherit', cwd: ROOT_DIR });
    child.on('close', () => resolve());
  });
}

async function main() {
  console.log(`\n▲ MotionOS - Local AI Models Setup Engine`);
  console.log(`Target Directory: ${MODELS_DIR}\n`);

  // 1. Download Computer Vision & Matting Models
  console.log(`📦 Downloading Computer Vision & Subject Matting Models:`);
  for (const m of CV_MODELS) {
    const dest = path.join(MODELS_DIR, m.category, m.file);
    await downloadFile(m.url, dest, m.name);

    // Also mirror to .agent/skills/effects/models if needed by fx.py
    const legacyDest = path.join(ROOT_DIR, '.agent', 'skills', 'effects', 'models', m.file);
    if (fs.existsSync(dest) && !fs.existsSync(legacyDest)) {
      const legDir = path.dirname(legacyDest);
      if (!fs.existsSync(legDir)) fs.mkdirSync(legDir, { recursive: true });
      fs.copyFileSync(dest, legacyDest);
    }
  }

  // 2. Whisper Speech Model (if --all or default)
  if (isAll && !isQuick) {
    await prefetchWhisper();
  }

  console.log(`\n🎉 Models setup complete! MotionOS is ready for offline video editing.`);
  console.log(`   Run 'npx motionos reel <folder>' to start editing!\n`);
}

main().catch(err => {
  console.error('Fatal error during models setup:', err);
  process.exit(1);
});
