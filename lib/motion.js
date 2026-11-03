// lib/motion.js - Deterministic Closed-Form Motion Engine
// Part of Antigravity Motion Studio (based on 0xMovez studio pipeline)

export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));

/**
 * Closed-form damped spring from 0 to 1.
 * Pure mathematical function of time t (in seconds).
 * Deterministic: Can render frame 800 without simulating frames 0..799.
 * 
 * @param {number} t - Time offset since spring start (seconds)
 * @param {number} k - Stiffness (e.g. 170 for default, 260 for snappy UI, 120 for heavy/large)
 * @param {number} d - Damping (e.g. 26 for default, 20 for slight overshoot, 30 for critically damped)
 */
export function spring(t, k = 170, d = 26) {
  if (t <= 0) return 0;
  const w0 = Math.sqrt(k);
  const z = d / (2 * w0);
  if (z < 1) {
    const wd = w0 * Math.sqrt(1 - z * z);
    return 1 - Math.exp(-z * w0 * t) * (Math.cos(wd * t) + ((z * w0) / wd) * Math.sin(wd * t));
  }
  return 1 - Math.exp(-w0 * t) * (1 + w0 * t); // critically or over-damped
}

/**
 * Deterministic seeded PRNG (mulberry32).
 * Never use Math.random in render mode: every render must be bit-identical.
 */
export function rng(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Multi-target spring tracking without restarting simulation.
 * Sums one spring per target change.
 * 
 * @param {number} t - Current time in seconds
 * @param {Array<[number, number]>} keys - Array of [timestamp, targetValue], sorted by time
 * @param {number} k - Stiffness
 * @param {number} d - Damping
 */
export function track(t, keys, k = 170, d = 26) {
  if (!keys || keys.length === 0) return 0;
  let v = keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    const [t0, val] = keys[i];
    const prevVal = keys[i - 1][1];
    v += (val - prevVal) * spring(t - t0, k, d);
  }
  return v;
}

/**
 * Morphing tab indicator that stretches:
 * Leading edge has stiffer spring than trailing edge.
 */
export function indicator(t, stops) {
  const lead = track(t, stops, 320, 30);
  const trail = track(t, stops, 140, 22);
  return {
    left: Math.min(lead, trail),
    right: Math.max(lead, trail) + 120,
    width: Math.abs(lead - trail) + 120,
  };
}

/**
 * Clean text opacity inside a morphing container:
 * Fades in after the container starts morphing, fades out before the next morph starts.
 */
export function swapAlpha(t, tIn, tOut) {
  return Math.min(
    clamp((t - tIn - 0.08) / 0.12),
    clamp((tOut - 0.1 - t) / 0.1)
  );
}

/**
 * Seamless loop helper: wraps time deterministically into duration
 */
export const loopT = (t, dur) => ((t % dur) + dur) % dur;
