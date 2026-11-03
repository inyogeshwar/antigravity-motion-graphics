// tests/motion.test.js - Unit tests for deterministic motion engine
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { clamp, spring, rng, track, loopT, swapAlpha } from '../lib/motion.js';

describe('Deterministic Motion Engine - lib/motion.js', () => {
  describe('clamp()', () => {
    test('clamps values below minimum', () => {
      assert.equal(clamp(-5, 0, 10), 0);
    });

    test('clamps values above maximum', () => {
      assert.equal(clamp(15, 0, 10), 10);
    });

    test('preserves values within range', () => {
      assert.equal(clamp(5, 0, 10), 5);
    });
  });

  describe('spring()', () => {
    test('returns 0 at t <= 0', () => {
      assert.equal(spring(0), 0);
      assert.equal(spring(-1), 0);
    });

    test('converges to 1 as t increases', () => {
      const valAt2s = spring(2.0, 170, 26);
      assert.ok(Math.abs(valAt2s - 1.0) < 0.001, `Expected close to 1.0, got ${valAt2s}`);
    });

    test('is strictly deterministic across calls', () => {
      const t = 0.42;
      const pass1 = spring(t, 200, 20);
      const pass2 = spring(t, 200, 20);
      assert.equal(pass1, pass2);
    });

    test('handles critically damped and over-damped regimes (z >= 1)', () => {
      // k = 100 -> w0 = 10. For z = 1, d = 20. For z > 1, d = 30.
      const overdamped = spring(0.5, 100, 30);
      assert.ok(overdamped > 0 && overdamped <= 1.0);
    });
  });

  describe('rng() - Deterministic PRNG', () => {
    test('generates values between 0 and 1', () => {
      const rand = rng(1337);
      for (let i = 0; i < 50; i++) {
        const val = rand();
        assert.ok(val >= 0 && val < 1, `Value ${val} out of bounds [0, 1)`);
      }
    });

    test('is bit-identical for the same seed', () => {
      const randA = rng(42);
      const randB = rng(42);
      for (let i = 0; i < 20; i++) {
        assert.equal(randA(), randB());
      }
    });

    test('differs for distinct seeds', () => {
      const rand1 = rng(1);
      const rand2 = rng(2);
      assert.notEqual(rand1(), rand2());
    });
  });

  describe('track() - Multi-target spring tracking', () => {
    test('returns 0 for empty keys', () => {
      assert.equal(track(1.0, []), 0);
    });

    test('tracks initial key before second stop', () => {
      const keys = [[0, 100], [2.0, 200]];
      const valAtZero = track(0, keys);
      assert.equal(valAtZero, 100);
    });

    test('smoothly approaches second target after step', () => {
      const keys = [[0, 0], [1.0, 100]];
      const midway = track(1.2, keys);
      const finished = track(3.0, keys);
      assert.ok(midway > 0 && midway < 110);
      assert.ok(Math.abs(finished - 100) < 0.1);
    });
  });

  describe('loopT() - Deterministic time wrapping', () => {
    test('wraps positive time within duration', () => {
      assert.equal(loopT(16.5, 15), 1.5);
      assert.equal(loopT(30, 15), 0);
    });

    test('wraps negative time correctly', () => {
      assert.equal(loopT(-1, 10), 9);
    });
  });

  describe('swapAlpha()', () => {
    test('returns 0 outside the display window', () => {
      assert.equal(swapAlpha(0.0, 1.0, 3.0), 0);
      assert.equal(swapAlpha(4.0, 1.0, 3.0), 0);
    });

    test('returns 1 inside the active stable window', () => {
      assert.equal(swapAlpha(2.0, 1.0, 3.0), 1);
    });
  });
});
