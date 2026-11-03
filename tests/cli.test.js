// tests/cli.test.js - Unit tests for npx CLI and project scaffolding
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { execSync } from 'node:child_process';
import { existsSync, rmSync, readFileSync } from 'node:fs';
import path from 'node:path';

describe('NPX CLI Suite (bin/create.js & bin/cli.js)', () => {
  const testProjectDir = path.resolve('test-scaffold-app');

  test('create-antigravity-motion scaffolds project non-interactively', () => {
    // Clean up test dir if exists
    if (existsSync(testProjectDir)) {
      rmSync(testProjectDir, { recursive: true, force: true });
    }

    // Run scaffold with --yes --no-install
    execSync(`node bin/create.js "${testProjectDir}" --template canvas --yes --no-install`, {
      stdio: 'pipe'
    });

    // Check files generated
    assert.ok(existsSync(path.join(testProjectDir, 'index.html')), 'Missing index.html');
    assert.ok(existsSync(path.join(testProjectDir, 'lib', 'motion.js')), 'Missing lib/motion.js');
    assert.ok(existsSync(path.join(testProjectDir, 'render.mjs')), 'Missing render.mjs');
    assert.ok(existsSync(path.join(testProjectDir, 'package.json')), 'Missing package.json');
    assert.ok(existsSync(path.join(testProjectDir, '.gitignore')), 'Missing .gitignore');

    // Check package.json name
    const pkg = JSON.parse(readFileSync(path.join(testProjectDir, 'package.json'), 'utf8'));
    assert.equal(pkg.name, 'test-scaffold-app');

    // Clean up
    rmSync(testProjectDir, { recursive: true, force: true });
  });

  test('antigravity-motion CLI responds to --help', () => {
    const stdout = execSync('node bin/cli.js --help', { encoding: 'utf8' });
    assert.match(stdout, /▲ Antigravity Motion Studio CLI/);
    assert.match(stdout, /render \[options\]/);
  });
});
