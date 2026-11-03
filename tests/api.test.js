// tests/api.test.js - Unit tests for voice synthesis integrations
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { VOICES as CARTESIA_VOICES, getCartesiaApiKey } from '../cartesia.mjs';
import { HEYGEN_VOICES, getHeyGenApiKey } from '../heygen.mjs';

describe('Voice Integration Registries & Fallbacks', () => {
  describe('Cartesia AI', () => {
    test('contains curated English and Hindi voice IDs', () => {
      assert.ok(CARTESIA_VOICES.jeremy, 'Missing jeremy voice');
      assert.ok(CARTESIA_VOICES.ishan, 'Missing ishan voice');
      assert.ok(CARTESIA_VOICES.arushi, 'Missing arushi voice');
      assert.match(CARTESIA_VOICES.jeremy, /^[0-9a-f-]{36}$/i);
    });

    test('getCartesiaApiKey returns string or null without throwing', () => {
      const key = getCartesiaApiKey();
      assert.ok(key === null || typeof key === 'string');
    });
  });

  describe('HeyGen AI', () => {
    test('contains curated Turbo free public and Hindi voice IDs', () => {
      assert.ok(HEYGEN_VOICES.mirror, 'Missing mirror voice');
      assert.ok(HEYGEN_VOICES.sofia, 'Missing sofia voice');
      assert.ok(HEYGEN_VOICES.kumar, 'Missing kumar voice');
      assert.equal(typeof HEYGEN_VOICES.mirror, 'string');
    });

    test('getHeyGenApiKey returns string or null without throwing', () => {
      const key = getHeyGenApiKey();
      assert.ok(key === null || typeof key === 'string');
    });
  });

  describe('Universal Voice Engine (voice.mjs)', () => {
    test('rejects unknown provider gracefully', async () => {
      const { generateUniversalSpeech } = await import('../voice.mjs');
      await assert.rejects(
        () => generateUniversalSpeech({ text: 'test', provider: 'non_existent_provider' }),
        /Unknown provider/
      );
    });
  });
});
