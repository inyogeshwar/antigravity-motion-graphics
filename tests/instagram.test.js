import test from 'node:test';
import assert from 'node:assert/strict';
import { scoreHook, listHookFormulas, humanizeText, lintCaption } from '../lib/instagram.js';

test('Instagram Viral Intelligence Suite', async (t) => {
  await t.test('listHookFormulas returns 26 scored hook formulas', () => {
    const formulas = listHookFormulas();
    assert.strictEqual(formulas.length, 26);
    assert.ok(formulas[0].name);
    assert.ok(formulas[0].template);
  });

  await t.test('scoreHook evaluates hook text with 5 core heuristics', () => {
    const res = scoreHook('I lost $18,000 on one missing clause');
    assert.ok(res.score > 70);
    assert.ok(res.verdict === 'STRONG' || res.verdict === 'OK');
    assert.ok(res.checks.LENGTH);
    assert.ok(res.checks.STAKES);
  });

  await t.test('humanizeText removes AI clichés and normalizes punctuation', () => {
    const input = 'In today\'s video, we will delve into this game-changer tool—unleash potential!';
    const res = humanizeText(input);
    assert.ok(res.text);
    // Em dash should be normalized to comma
    assert.ok(!res.text.includes('—'));
    // Clichés should be replaced
    assert.ok(!res.text.toLowerCase().includes("in today's video"));
  });

  await t.test('lintCaption enforces 5-hashtag cap and 125-char visible feed window', () => {
    const caption = 'Short feed caption with too many hashtags.\n\n#one #two #three #four #five #six #seven';
    const res = lintCaption(caption);
    assert.ok(res.checks);
    const hashtagCheck = res.checks.find(c => c.check === 'HASHTAGS');
    assert.ok(hashtagCheck);
    assert.strictEqual(hashtagCheck.status, 'FAIL');
  });
});
