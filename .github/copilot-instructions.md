# GitHub Copilot & Coding Agent Instructions

This repository is **Antigravity Motion Studio**, a deterministic programmatic motion design engine.
All code generated or modified in this repository must adhere to the following principles:

## 1. The Render Contract (Non-Negotiable)
- **Pure Function of Time:** Every animation must be a pure, deterministic function of time `window.seek(t)`.
- **Zero Carried State & Zero Non-Determinism:**
  - Never use `setTimeout`, `setInterval`, or CSS asynchronous transitions.
  - Never use `Math.random()`. Always use `rng(seed)` from `lib/motion.js` (Mulberry32 PRNG) so renders are bit-identical on every pass.
- **Closed-Form Springs:** Use damped analytical springs (`spring(t, k, d)`) and continuous target tracking (`track(t, keys)`). Never use generic cubic bezier easing when physical mass and momentum are expected.

## 2. Aesthetics & Anti-Slop Look
- Banned defaults:
  - ❌ Centered text on generic dark gradient.
  - ❌ Everything slowly fading in.
  - ❌ Corner status labels and HUD frame borders (classic giveaway of low-effort AI video).
  - ❌ Random unmotivated particle bursts.
- Standards:
  - Strong visual hierarchy: One display face, one UI face.
  - One primary accent color.
  - Pacing: Every 2 to 4 seconds, something visually meaningful must occur.
  - Continuous morphing: Prefer one container morphing across UI states rather than abrupt jarring cuts.

## 3. Audio & Beat Synchronization
- UI clicks, whooshes, and thumps must be synthesized with `node sfx.mjs cues.json out/sfx.wav` or custom audio buffers.
- Target audio loudness: -14 LUFS.

## 4. Testing Requirements
- Every new mathematical animation utility in `lib/motion.js` must have unit tests in `tests/motion.test.js`.
- Always run `npm test` before committing.
