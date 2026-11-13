// tests/formats.test.js - Unit tests for the central media format registry
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  extensionOf,
  isVideo,
  isAudio,
  isImage,
  isMedia,
  videoFileRegex,
  formatList,
  outputKind,
  isGifOutput,
  videoEncodeArgs,
  audioEncodeArgs
} from '../lib/formats.js';

describe('Media format registry (lib/formats.js)', () => {
  test('extensionOf normalizes case and strips the dot', () => {
    assert.strictEqual(extensionOf('Clip.MOV'), 'mov');
    assert.strictEqual(extensionOf('/tmp/a/b/reel.mp4'), 'mp4');
    assert.strictEqual(extensionOf('noext'), '');
    assert.strictEqual(extensionOf(''), '');
  });

  test('detects video, audio and image inputs', () => {
    assert.ok(isVideo('a.mp4'));
    assert.ok(isVideo('a.mkv'));
    assert.ok(isVideo('a.webm'));
    assert.ok(isVideo('a.mov'));
    assert.ok(!isVideo('a.mp3'));

    assert.ok(isAudio('a.mp3'));
    assert.ok(isAudio('a.wav'));
    assert.ok(isAudio('a.flac'));
    assert.ok(!isAudio('a.png'));

    assert.ok(isImage('a.png'));
    assert.ok(isImage('a.HEIC'));
    assert.ok(!isImage('a.mp4'));
  });

  test('isMedia covers every supported input family', () => {
    assert.ok(isMedia('talk.mp4'));
    assert.ok(isMedia('voice.m4a'));
    assert.ok(isMedia('logo.webp'));
    assert.ok(!isMedia('notes.txt'));
    assert.ok(!isMedia('package.json'));
  });

  test('videoFileRegex matches raw footage by extension (case-insensitive)', () => {
    const re = videoFileRegex();
    assert.ok(re.test('IMG_1234.MOV'));
    assert.ok(re.test('take-2.mkv'));
    assert.ok(!re.test('thumbnail.jpg'));
    assert.ok(!re.test('script.js'));
  });

  test('formatList renders a comma separated extension list', () => {
    assert.match(formatList('video'), /mp4/);
    assert.match(formatList('audio'), /mp3/);
    assert.match(formatList('image'), /png/);
  });

  test('outputKind and isGifOutput classify containers', () => {
    assert.strictEqual(outputKind('out.mp4'), 'video');
    assert.strictEqual(outputKind('out.webm'), 'video');
    assert.strictEqual(outputKind('out.mp3'), 'audio');
    assert.strictEqual(outputKind('out.wav'), 'audio');
    assert.strictEqual(outputKind('out.gif'), 'gif');
    assert.strictEqual(outputKind('out.unknown'), 'video'); // fallback
    assert.ok(isGifOutput('out.gif'));
    assert.ok(!isGifOutput('out.mp4'));
  });

  test('videoEncodeArgs picks the right codec per container', () => {
    assert.ok(videoEncodeArgs('out.mp4').includes('libx264'));
    assert.ok(videoEncodeArgs('out.mp4').includes('+faststart'));
    assert.ok(videoEncodeArgs('out.webm').includes('libvpx-vp9'));
    assert.ok(videoEncodeArgs('out.mov', { alpha: true }).includes('prores_ks'));
    // unknown container falls back to H.264/MP4 settings
    assert.ok(videoEncodeArgs('out.xyz').includes('libx264'));
  });

  test('audioEncodeArgs maps containers to codecs', () => {
    assert.deepEqual(audioEncodeArgs('out.wav'), ['-c:a', 'pcm_s16le']);
    assert.ok(audioEncodeArgs('out.mp3').includes('libmp3lame'));
    assert.ok(audioEncodeArgs('out.m4a').includes('aac'));
    assert.ok(audioEncodeArgs('out.flac').includes('flac'));
    // unknown extension defaults to WAV
    assert.deepEqual(audioEncodeArgs('out.weird'), ['-c:a', 'pcm_s16le']);
  });
});
