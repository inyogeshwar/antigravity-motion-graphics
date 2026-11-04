// tests/sfx.test.js - Unit tests for procedural SFX synthesis
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { synthesizeSfx, mixLibrarySfx, VOICES, LIBRARY_MAP } from '../sfx.mjs';

describe('SFX Procedural Synthesizer & Library - sfx.mjs', () => {
  test('exposes standard UI audio voice algorithms', () => {
    assert.ok(VOICES.click, 'Missing click voice');
    assert.ok(VOICES.pop, 'Missing pop voice');
    assert.ok(VOICES.thump, 'Missing thump voice');
    assert.ok(VOICES.whoosh, 'Missing whoosh voice');
    assert.ok(VOICES.ding, 'Missing ding voice');
  });

  test('exposes authentic creator sound effect library map', () => {
    assert.ok(LIBRARY_MAP.whoosh, 'Missing whoosh sample');
    assert.ok(LIBRARY_MAP.click, 'Missing click sample');
    assert.ok(LIBRARY_MAP.pop, 'Missing pop sample');
    assert.ok(LIBRARY_MAP.kaching, 'Missing kaching sample');
    assert.ok(LIBRARY_MAP.riser, 'Missing riser sample');
    assert.ok(LIBRARY_MAP.shutter, 'Missing shutter sample');
  });

  test('mixLibrarySfx handles sample mixing gracefully', () => {
    const cues = [
      { t: 0.1, type: 'whoosh' },
      { t: 0.5, type: 'click' },
      { t: 0.8, type: 'pop' }
    ];
    const buf = mixLibrarySfx({ cues });
    assert.ok(Buffer.isBuffer(buf), 'Output must be a Buffer');
    assert.ok(buf.length > 44, 'Buffer must contain audio data');
  });

  test('synthesizes valid 16-bit 48kHz WAV buffer', () => {
    const cues = [
      { t: 0.1, type: 'whoosh' },
      { t: 0.5, type: 'click' },
      { t: 0.8, type: 'pop' }
    ];

    const buf = synthesizeSfx({ cues, sampleRate: 48000 });
    assert.ok(Buffer.isBuffer(buf), 'Output must be a Buffer');

    // Header validation (RIFF / WAVEfmt / data)
    assert.equal(buf.subarray(0, 4).toString('ascii'), 'RIFF');
    assert.equal(buf.subarray(8, 16).toString('ascii'), 'WAVEfmt ');
    assert.equal(buf.subarray(36, 40).toString('ascii'), 'data');

    // Format chunk checks
    assert.equal(buf.readUInt16LE(20), 1, 'AudioFormat must be 1 (PCM)');
    assert.equal(buf.readUInt16LE(22), 1, 'NumChannels must be 1 (mono)');
    assert.equal(buf.readUInt32LE(24), 48000, 'SampleRate must be 48000');
    assert.equal(buf.readUInt16LE(34), 16, 'BitsPerSample must be 16');

    // Total byte length check (44 byte header + PCM bytes)
    const dataSize = buf.readUInt32LE(40);
    assert.equal(buf.length, 44 + dataSize);
  });

  test('handles empty cues without crashing', () => {
    const buf = synthesizeSfx({ cues: [] });
    assert.ok(buf.length > 44);
    assert.equal(buf.subarray(0, 4).toString('ascii'), 'RIFF');
  });
});
