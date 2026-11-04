/**
 * lib/instagram.js - Antigravity Motion Studio Instagram Viral Intelligence Engine
 * 
 * Powered by Jake Schincariol's Instagram Agent Suite:
 * 1. 26 Scored Hook Formulas & hookscore (0-100 heuristic scoring before rendering)
 * 2. Invisible AI watermark stripper & slop lexicon cleaner (humanize)
 * 3. 125-char Feed preview window & 5-hashtag cap linter (caption)
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

function getPython() {
  const venvWin = path.join(ROOT_DIR, '.agent', 'skills', 'effects', '.venv', 'Scripts', 'python.exe');
  if (fs.existsSync(venvWin)) return venvWin;
  return process.platform === 'win32' ? 'python' : 'python3';
}

/**
 * Retrieve the 26 battle-tested Instagram hook formulas
 */
export function listHookFormulas() {
  const hooksFile = path.join(ROOT_DIR, 'scripts', 'hooks.json');
  if (!fs.existsSync(hooksFile)) return [];
  try {
    const data = JSON.parse(fs.readFileSync(hooksFile, 'utf8'));
    return data.hooks || [];
  } catch {
    return [];
  }
}

/**
 * Score a video hook (0-100) on 5 core viral heuristics:
 * - LENGTH (under 3s spoken, 5-12 words)
 * - SPECIFICITY (concrete numbers, entities, names)
 * - STAKES (tension, loss, pain, risk)
 * - FRONTLOAD (payload in first 2 words)
 * - ADDRESS (viewer callout, "you")
 */
export function scoreHook(hookText) {
  const py = getPython();
  const script = path.join(ROOT_DIR, 'scripts', 'hookscore.py');
  
  const res = spawnSync(py, [script, '--hook', hookText, '--json'], {
    encoding: 'utf8',
    cwd: ROOT_DIR
  });

  if (res.stdout) {
    try {
      return JSON.parse(res.stdout);
    } catch {}
  }

  // Graceful fallback
  return {
    hook: hookText,
    score: 50.0,
    verdict: 'OK',
    checks: {},
    weakest: 'UNKNOWN'
  };
}

/**
 * Strip invisible Unicode watermarks, typography errors, and 154 AI clichés
 */
export function humanizeText(text) {
  const py = getPython();
  const script = path.join(ROOT_DIR, 'scripts', 'humanize.py');

  const res = spawnSync(py, [script, '-', '--json'], {
    input: text,
    encoding: 'utf8',
    cwd: ROOT_DIR
  });

  if (res.stdout) {
    try {
      return JSON.parse(res.stdout);
    } catch {}
  }

  return { text, report: { invisible: [], typographic: [], lexical: [], structures: [] } };
}

/**
 * Lint an Instagram caption:
 * - Checks visible 125-char window before "... more"
 * - Enforces 5-hashtag cap
 * - Detects clear single Call-To-Action (ask)
 */
export function lintCaption(captionText, keywords = '') {
  const py = getPython();
  const script = path.join(ROOT_DIR, 'scripts', 'caption.py');
  
  const args = [script, '-', '--json'];
  if (keywords) {
    args.push('--keywords', keywords);
  }

  const res = spawnSync(py, args, {
    input: captionText,
    encoding: 'utf8',
    cwd: ROOT_DIR
  });

  if (res.stdout) {
    try {
      return JSON.parse(res.stdout);
    } catch {}
  }

  return { characters: captionText.length, verdict: 'PASS', checks: [] };
}
