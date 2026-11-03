# Antigravity Motion Studio - Agent Guidelines & Harness

This project is a high-performance **Programmatic Motion Design Studio** powered by Google Antigravity.
It unifies:
1. **0xMovez Studio Harness & Deterministic `seek(t)` Engine** (`lib/motion.js`, `render.mjs`, `sfx.mjs`)
2. **Remotion Framework & Agent Skills** (`remotion-dev/skills`, `codex-plugin`)
3. **HyperFrames (HeyGen) Framework & MCP** (`heygen-com/hyperframes`)
4. **Computer-Vision Video Effects** (`.agent/skills/effects`)

---

## 1. The Render Contract (Non-Negotiable)
- **Pure Function of Time:** Every animation must be a pure, deterministic function of time `window.seek(t)` (or frame `f` in Remotion).
- **Zero Carried State & Zero Non-Determinism:**
  - In render mode, never use `setTimeout`, `setInterval`, or asynchronous CSS transitions.
  - Never use `Math.random()`. Use seeded PRNG (`lib/motion.js` -> `rng(seed)`) so renders are bit-identical on every pass.
- **Closed-Form Springs:** Use damped analytical springs (`spring(t, k, d)`) and continuous target tracking (`track(t, keys)`). Easing curves look cheap; springs give realistic weight and momentum.

## 2. Aesthetics & Anti-Slop Look
- **Banned Defaults:**
  - ❌ Centered text on generic dark gradient.
  - ❌ Everything slowly fading in.
  - ❌ Corner status labels and HUD frame borders (the classic giveaway of low-effort AI video).
  - ❌ Random unmotivated particle bursts.
- **Studio Standards:**
  - Strong visual hierarchy: One display face, one UI face.
  - One primary accent color (e.g., `#D97757` terracotta, `#F59E0B` amber).
  - Pacing: Every 2 to 4 seconds, something visually meaningful and new must occur.
  - Continuous morphing: Prefer one container morphing across UI states rather than abrupt jarring cuts.

## 3. Audio & Sound Contract
- Cuts, transitions, and UI clicks must lock to the beat grid (`beats.json` via `python beats.py` or synthetic 120 BPM).
- UI clicks, whooshes, and thumps must be synthesized with `node sfx.mjs cues.json out/sfx.wav` or custom audio buffers.
- Target audio loudness: -14 LUFS.

## 4. The 3 Production Routes
- **Route A (Zero Dependencies / Fast / Raw):** Pure `index.html` + `window.seek(t)` + Playwright (`render.mjs`) + FFmpeg.
- **Route B-1 (Remotion / React):** Best for multi-composition projects, complex React UI components, and reusable templates (`npx remotion studio`, `npx remotion render`).
- **Route B-2 (HyperFrames / GSAP):** Best for GSAP timelines, web-page based motion graphics, or HeyGen cloud MCP generation (`npx hyperframes preview / render` or HyperFrames MCP).

## 5. Vision Verification & Self-Critique Loop
Before delivering any video to the user:
1. Render a contact sheet:
   ```bash
   ffmpeg -i out/video.mp4 -vf "fps=2,scale=270:-1,tile=6x5" -frames:v 1 out/contact.png
   ```
2. Inspect `out/contact.png` using file inspection / vision.
3. Score 1-10 on:
   - Hook in first 2 seconds
   - Readability at phone size
   - Motion quality (spring dynamics, no dead frames)
   - Variety & pacing
   - Sound sync
4. Fix the 3 worst issues and re-render until quality is 8+/10.

## 6. Development & Quality Gate
- Always run `npm test` and `npm run test:py` after making changes to core math, renderers, or utilities.
- Never hardcode user paths (e.g. `C:\Users\...`) or commit API keys (`.env`).
