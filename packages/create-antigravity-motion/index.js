#!/usr/bin/env node

/**
 * create-antigravity-motion
 * 
 * Official one-click scaffolding wrapper for Antigravity Motion Studio.
 * Seamlessly delegates to the latest core engine initializer.
 */

import { spawn } from 'node:child_process';

const userArgs = process.argv.slice(2);
const isWindows = process.platform === 'win32';

const cmd = isWindows ? (process.env.ComSpec || 'cmd.exe') : 'npx';
const args = isWindows 
  ? ['/d', '/s', '/c', 'npx', 'antigravity-motion-graphics@latest', ...userArgs]
  : ['antigravity-motion-graphics@latest', ...userArgs];

const child = spawn(cmd, args, {
  stdio: 'inherit',
  cwd: process.cwd()
});

child.on('close', code => {
  process.exit(code || 0);
});

child.on('error', err => {
  console.error('[create-antigravity-motion] Execution failed:', err.message);
  process.exit(1);
});
