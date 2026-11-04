// tests/lyrics.test.js - Unit tests for MotionOS Lyric Studio Engine
import test from 'node:test';
import assert from 'node:assert';
import { LYRICS_PRESETS, parseLyrics, generateLyricsHtml } from '../lib/lyrics.js';

test('Lyrics Studio Presets Registry', () => {
  assert.ok(LYRICS_PRESETS['hindi-calligraphy'], 'has hindi-calligraphy preset');
  assert.ok(LYRICS_PRESETS['golden-flare'], 'has golden-flare preset');
  assert.ok(LYRICS_PRESETS['spotify-glow'], 'has spotify-glow preset');
  assert.ok(LYRICS_PRESETS['anime-couple'], 'has anime-couple preset');
  assert.ok(LYRICS_PRESETS['emoji-quote'], 'has emoji-quote preset');
});

test('parseLyrics handles raw string and LRC format', () => {
  const plainText = "Line 1\nLine 2\nLine 3";
  const lines = parseLyrics(plainText, 15.0);
  assert.strictEqual(lines.length, 3);
  assert.strictEqual(lines[0].text, 'Line 1');
  assert.strictEqual(lines[0].time, 0);

  const lrc = "[00:02.50] Pehla Nasha\n[00:06.00] Khumar Hai";
  const parsedLrc = parseLyrics(lrc, 10.0);
  assert.strictEqual(parsedLrc.length, 2);
  assert.strictEqual(parsedLrc[0].text, 'Pehla Nasha');
  assert.strictEqual(parsedLrc[0].time, 2.5);
  assert.strictEqual(parsedLrc[1].time, 6.0);
});

test('generateLyricsHtml produces valid deterministic HTML', () => {
  const html = generateLyricsHtml({
    presetId: 'hindi-calligraphy',
    lyrics: [{ time: 0, text: 'केसा नेसा' }],
    totalDuration: 10
  });

  assert.ok(html.includes('<!DOCTYPE html>'));
  assert.ok(html.includes('window.seek = function(t)'));
  assert.ok(html.includes('HindiDisplay'));
  assert.ok(html.includes('AppleEmoji'));
});
