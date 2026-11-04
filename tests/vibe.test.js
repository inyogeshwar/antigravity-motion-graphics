import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  analyzeTranscript,
  generateVibePlan,
  STYLE_PRESETS,
  getPythonPath,
  listPlaybookStyles,
  getPlaybookStyle,
  initPlaybook
} from '../lib/vibe.js';

describe('MotionOS Vibe Editing Engine (lib/vibe.js)', () => {
  test('listPlaybookStyles returns all authentic creator styles', () => {
    const styles = listPlaybookStyles();
    assert.ok(styles.length >= 20, `Expected at least 20 styles, found ${styles.length}`);
    const creatorStyle = styles.find(s => s.id === 'creator-infotainment-motion');
    assert.ok(creatorStyle, 'creator-infotainment-motion should be present');
    assert.strictEqual(creatorStyle.name, 'Creator Infotainment Motion');
  });

  test('getPlaybookStyle retrieves full style metadata and template', () => {
    const style = getPlaybookStyle('creator-infotainment-motion');
    assert.ok(style);
    assert.strictEqual(style.id, 'creator-infotainment-motion');
    assert.ok(style.template.tagline.length > 0);
    assert.ok(style.markdown.length > 0);
  });

  test('initPlaybook creates playbook.md and profile.json in target dir', () => {
    const tmpDir = path.resolve('test-playbook-dir');
    if (fs.existsSync(tmpDir)) fs.rmSync(tmpDir, { recursive: true, force: true });
    fs.mkdirSync(tmpDir, { recursive: true });

    const res = initPlaybook('creator-infotainment-motion', tmpDir);
    assert.ok(fs.existsSync(res.playbookPath));
    assert.ok(fs.existsSync(res.profilePath));

    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('STYLE_PRESETS contains all official vibe styles', () => {
    assert.ok(STYLE_PRESETS['tech-bento']);
    assert.ok(STYLE_PRESETS['bold-creator']);
    assert.ok(STYLE_PRESETS['minimal']);
    assert.ok(STYLE_PRESETS['neon-glow']);
    assert.strictEqual(typeof STYLE_PRESETS['tech-bento'].accentColor, 'string');
    assert.ok(STYLE_PRESETS['tech-bento'].effectsPool.length > 0);
  });

  test('getPythonPath resolves a valid python command or path', () => {
    const py = getPythonPath();
    assert.strictEqual(typeof py, 'string');
    assert.ok(py.length > 0);
  });

  test('analyzeTranscript calculates words, duration, WPM and silence gaps', () => {
    const mockWords = [
      { w: 'Welcome', s: 0.1, e: 0.5 },
      { w: 'to', s: 0.6, e: 0.8 },
      { w: 'MotionOS', s: 0.9, e: 1.4 },
      // Gap of 0.8s (> 0.6s threshold)
      { w: 'This', s: 2.2, e: 2.5 },
      { w: 'is', s: 2.6, e: 2.8 },
      { w: 'fast', s: 2.9, e: 3.4 }
    ];

    const analysis = analyzeTranscript(mockWords);
    assert.strictEqual(analysis.totalWords, 6);
    assert.strictEqual(analysis.duration, 3.4);
    assert.ok(analysis.stats.wpm > 0);
    assert.strictEqual(analysis.silences.length, 1);
    assert.strictEqual(analysis.silences[0].afterWord, 'MotionOS');
    assert.strictEqual(analysis.silences[0].duration, 0.8);
  });

  test('analyzeTranscript handles empty word list gracefully', () => {
    const analysis = analyzeTranscript([]);
    assert.strictEqual(analysis.totalWords, 0);
    assert.strictEqual(analysis.duration, 0);
    assert.strictEqual(analysis.silences.length, 0);
  });

  describe('generateVibePlan()', () => {
    test('generates hook effect in first 2.5 seconds', () => {
      const mockWords = [
        { w: 'stop', s: 0.2, e: 0.5 },
        { w: 'scrolling', s: 0.6, e: 1.2 },
        { w: 'now', s: 1.3, e: 1.8 }
      ];

      const plan = generateVibePlan(mockWords, { style: 'tech-bento' });
      assert.strictEqual(plan.style, 'tech-bento');
      assert.ok(plan.effects.length >= 1);
      assert.strictEqual(plan.effects[0].fx, 'backdrop-word');
      assert.strictEqual(plan.effects[0].start, 0.1);
      assert.strictEqual(plan.effects[0].end, 1.8);
      assert.ok(plan.sfxCues.length >= 1);
    });

    test('maps numbers to liquid-glass-graph or growth metrics', () => {
      const mockWords = [
        { w: 'Hook', s: 0.1, e: 1.0 },
        { w: 'we', s: 3.0, e: 3.3 },
        { w: 'scaled', s: 3.4, e: 3.8 },
        { w: 'to', s: 3.9, e: 4.1 },
        { w: '100k', s: 4.2, e: 4.8 },
        { w: 'users', s: 5.0, e: 5.4 }
      ];

      const plan = generateVibePlan(mockWords, { style: 'tech-bento' });
      const graphFx = plan.effects.find(e => e.fx === 'liquid-glass-graph');
      assert.ok(graphFx, 'Should create liquid-glass-graph effect for numbers/metrics');
      assert.strictEqual(graphFx.to, '100K');
    });

    test('maps steps / checklist keywords to checklist effect', () => {
      const mockWords = [
        { w: 'Hook', s: 0.1, e: 1.0 },
        { w: 'here', s: 3.0, e: 3.3 },
        { w: 'are', s: 3.4, e: 3.5 },
        { w: 'the', s: 3.6, e: 3.7 },
        { w: 'three', s: 3.8, e: 4.0 },
        { w: 'rules', s: 4.1, e: 4.5 }
      ];

      const plan = generateVibePlan(mockWords, { style: 'bold-creator' });
      const checklistFx = plan.effects.find(e => e.fx === 'checklist');
      assert.ok(checklistFx, 'Should create checklist effect for rules/steps');
    });

    test('generates lean-in hook when style is bold-creator', () => {
      const mockWords = [
        { w: 'watch', s: 0.1, e: 0.6 },
        { w: 'this', s: 0.7, e: 1.2 }
      ];

      const plan = generateVibePlan(mockWords, { style: 'bold-creator' });
      assert.strictEqual(plan.style, 'bold-creator');
      assert.strictEqual(plan.effects[0].fx, 'lean-in');
    });
  });
});
