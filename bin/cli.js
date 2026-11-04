#!/usr/bin/env node

/**
 * MotionOS CLI (Antigravity Edition)
 * 
 * The Operating System for Autonomous Motion Design & Vibe Editing.
 * Usage:
 *   npx motionos <command> [options]
 */

import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const command = process.argv[2];
const args = process.argv.slice(3);

function printHelp() {
  console.log(`
▲ Antigravity Motion Studio CLI (MotionOS)
The Operating System for Autonomous Motion Design & Vibe Editing

Usage:
  npx motionos <command> [options] (or: npx antigravity-motion <command>)

Vibe Editing OS (VEOS) Commands:
  playbook [list|init]  Manage creator styles & brand playbooks (23 authentic styles)
  reel <clips_folder>   Autonomous end-to-end reel pipeline: cut -> storyboard -> render
  setup-models [opts]   Download & bind local AI models (RVM, YuNet, BlazeFace, Whisper)
  veos <action> [opts]  Run VEOS workflow (prep, plan, preview, render, review, styles)
  prep <video>          Transcribe speech & detect silence gaps
  plan <video>          Generate AI storyboard plan with 51 CV effects & SFX cues
  preview <video>       Extract rapid keyframe stills before full render
  review <video>        Generate visual contact sheet & vision quality score

Motion Studio Commands:
  init [dir]            Scaffold a new motion project (or: npx create-antigravity-motion)
  render [options]      Render HTML/canvas composition to MP4 using Playwright & FFmpeg
  sfx [options]         Synthesize procedural UI audio cues (clicks, whooshes) to WAV
  voice [options]       Generate AI voice narration (Cartesia, HeyGen, OpenAI, ElevenLabs)
  beats [options]       Extract beat grid or generate synthetic 120 BPM grid
  test                  Run deterministic motion engine unit tests
  help, --help, -h      Show this help message

Examples:
  npx motionos veos plan input.mp4 --style tech-bento
  npx motionos veos preview input.mp4
  npx motionos render --dur 15 --fps 30
  npx motionos sfx cues.json out/sfx.wav
`);
}

if (!command || command === 'help' || command === '--help' || command === '-h') {
  printHelp();
  process.exit(0);
}

function runScript(scriptPath, scriptArgs) {
  const child = spawn(process.execPath, [scriptPath, ...scriptArgs], {
    stdio: 'inherit',
    cwd: process.cwd()
  });

  child.on('close', code => {
    process.exit(code || 0);
  });
}

switch (command) {
  case 'setup-models':
  case 'models':
    runScript(path.join(ROOT_DIR, 'scripts', 'setup_models.mjs'), args);
    break;

  case 'playbook':
  case 'reel':
  case 'veos':
  case 'vibe':
    runScript(path.join(__dirname, 'veos.js'), [command, ...args]);
    break;

  case 'prep':
  case 'plan':
  case 'preview':
  case 'review':
    runScript(path.join(__dirname, 'veos.js'), [command, ...args]);
    break;

  case 'init':
  case 'create':
    runScript(path.join(__dirname, 'create.js'), args);
    break;

  case 'render':
    // If first argument is a video file ending in .mp4, route to veos render
    if (args[0] && (args[0].endsWith('.mp4') || args[0].endsWith('.mov'))) {
      runScript(path.join(__dirname, 'veos.js'), ['render', ...args]);
    } else {
      runScript(path.join(ROOT_DIR, 'render.mjs'), args);
    }
    break;

  case 'sfx':
    runScript(path.join(ROOT_DIR, 'sfx.mjs'), args);
    break;

  case 'voice':
    runScript(path.join(ROOT_DIR, 'voice.mjs'), args);
    break;

  case 'beats': {
    const pythonCmd = process.platform === 'win32' ? 'python' : 'python3';
    const child = spawn(pythonCmd, [path.join(ROOT_DIR, 'beats.py'), ...args], {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    child.on('close', code => process.exit(code || 0));
    break;
  }

  case 'test': {
    const child = spawn('npm', ['test'], {
      stdio: 'inherit',
      cwd: ROOT_DIR,
      shell: true
    });
    child.on('close', code => process.exit(code || 0));
    break;
  }

  default:
    console.error(`Unknown command: '${command}'.\nRun 'npx motionos --help' for available commands.`);
    process.exit(1);
}
