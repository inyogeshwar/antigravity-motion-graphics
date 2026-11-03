#!/usr/bin/env node

/**
 * antigravity-motion CLI
 * 
 * Command line suite for Antigravity Motion Studio operations.
 * Usage:
 *   npx antigravity-motion <command> [options]
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
▲ Antigravity Motion Studio CLI

Usage:
  npx antigravity-motion <command> [options]

Commands:
  init [dir]         Scaffold a new motion graphics project (or: npx create-antigravity-motion)
  render [options]   Render HTML/canvas composition to MP4 using Playwright & FFmpeg
  sfx [options]      Synthesize procedural UI audio cues (clicks, whooshes) to WAV
  voice [options]    Generate AI voice narration (Cartesia, HeyGen, OpenAI, ElevenLabs)
  beats [options]    Extract beat grid or generate synthetic 120 BPM grid
  test               Run deterministic motion engine unit tests
  help, --help, -h   Show this help message

Examples:
  npx antigravity-motion init my-reel
  npx antigravity-motion render --dur 15 --fps 30
  npx antigravity-motion sfx cues.json out/sfx.wav
  npx antigravity-motion voice --provider cartesia --text "Hello world"
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
  case 'init':
  case 'create':
    runScript(path.join(__dirname, 'create.js'), args);
    break;

  case 'render':
    runScript(path.join(ROOT_DIR, 'render.mjs'), args);
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
    console.error(`Unknown command: "${command}". Run "npx antigravity-motion --help" for available commands.`);
    process.exit(1);
}
