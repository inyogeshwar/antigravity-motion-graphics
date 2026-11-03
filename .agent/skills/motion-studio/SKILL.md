---
name: motion-studio
description: Autonomous Motion Design Studio in Google Antigravity. Builds deterministic, high-production motion graphics, showreels, UI morph loops, and promo films using the 0xMovez engine, Remotion, and HyperFrames. Use whenever asked to create a video, motion graphics, animated promo, UI morph, showreel, or Remotion/HyperFrames project.
---

# Antigravity Motion Studio

Unified Motion Design Studio for Google Antigravity. It merges:
1. **0xMovez Studio Harness:** Deterministic closed-form spring canvas engine with subframe motion blur and vision self-critique.
2. **Remotion Framework:** Programmatic React video compositions, studio preview, and server-side rendering.
3. **HyperFrames (HeyGen):** HTML/GSAP seekable video generator and HeyGen cloud MCP connector.

---

## 1. Project Setup & Routes

When asked to create motion graphics or video, select the optimal route:

### Route A: Pure Canvas `seek(t)` Engine (Default for Viral Motion & Showreels)
- **Files:** `index.html`, `lib/motion.js`, `render.mjs`, `sfx.mjs`, `beats.py`
- **Why:** Zero runtime framework dependencies. Extremely fast. Full control over canvas 2D contexts, mathematical springs, and custom shaders.
- **Rendering:**
  ```bash
  # Render silent video at 60fps with 4x subframe motion blur
  node render.mjs --fps 60 --dur 15 --sub 4 --out out/silent.mp4

  # Synthesize sound effects locked to cue timestamps
  node sfx.mjs cues.json out/sfx.wav

  # Merge audio and video
  ffmpeg -y -i out/silent.mp4 -i out/sfx.wav -c:v copy -c:a aac -shortest out/final.mp4
  ```

### Route B-1: Remotion (React-Based Video)
- **Best For:** Complex UI component libraries, reusable video templates, data visualizations, multi-scene React projects.
- **Commands:**
  ```bash
  npx remotion studio    # Launch live interactive studio
  npx remotion render <CompositionId> out/video.mp4
  ```

### Route B-2: HyperFrames (HeyGen GSAP / HTML)
- **Best For:** GSAP-driven web animations, HeyGen AI avatar integration, or cloud-based MCP rendering.
- **Commands:**
  ```bash
  npx hyperframes preview   # Live browser preview
  npx hyperframes render    # Local CLI render
  ```

---

## 2. Hard Render Contract & Motion Rules

1. **Pure Function of Time:**
   - Every frame must be calculated solely as `f(t)` where `t` is elapsed seconds.
   - 🚫 NO CSS animations / transitions in render mode (they are non-deterministic under headless capture).
   - 🚫 NO `setTimeout` or `requestAnimationFrame` state accumulation in render mode.
   - 🚫 NO `Math.random()`. Use seeded `rng(seed)` from `lib/motion.js`.

2. **Spring Physics (lib/motion.js):**
   - Use `spring(t, k, d)` instead of bezier easing.
   - **UI buttons & toggles:** $k=260, d=22$ (snappy).
   - **Cards & containers:** $k=170, d=26$ (balanced default).
   - **Heavy titles & 3D objects:** $k=120, d=28$ (heavy, zero overshoot).
   - **Multiple Targets:** Use `track(t, keys)` where keys are `[[t0, val0], [t1, val1], ...]` so springs do not restart from zero.

3. **Anti-Slop Aesthetics:**
   - 🚫 NEVER output centered text on generic radial gradient background.
   - 🚫 NEVER fade everything in at once.
   - 🚫 NO gratuitous corner labels or sci-fi frame borders unless explicitly requested.
   - 🎨 Maintain clear color palette: 1 background tone, 1 text primary, 1 accent color.
   - ⏱️ Ensure pacing: something visually new happens every 2 to 4 seconds.

---

## 3. Audio & Beat Synchronization

1. **Extract Beat Grid:**
   ```bash
   python beats.py audio/track.wav > beats.json
   ```
   Or use the built-in synthetic 120 BPM grid if generating music/SFX from scratch.
2. **Audio Cues:**
   Create `cues.json` aligning hits, clicks, pops, and whooshes with `beats.json` peaks:
   ```json
   [
     { "t": 0.0, "type": "whoosh" },
     { "t": 0.5, "type": "click" },
     { "t": 1.0, "type": "pop" }
   ]
   ```
3. Synthesize with `node sfx.mjs cues.json out/sfx.wav`.

---

## 4. Multimodal Vision Self-Critique Loop

Never deliver a video blindly. Always execute the critique loop:

1. **Generate Contact Sheet & Inspection Frames:**
   ```bash
   # 2 frames per second, 6x5 grid
   ffmpeg -y -i out/final.mp4 -vf "fps=2,scale=270:-1,tile=6x5" -frames:v 1 out/contact.png

   # Phone aspect readability check
   ffmpeg -y -i out/final.mp4 -vf "fps=1,scale=360:-1,tile=5x3" -frames:v 1 out/phone.png
   ```

2. **Inspect:**
   Read `out/contact.png` using Antigravity's file reading / image inspection capabilities.

3. **Score 1-10 on:**
   - **Hook:** Does the first 2 seconds grab immediate attention?
   - **Readability:** Are fonts crisp and legible at phone size?
   - **Motion:** Are springs natural without dead frames?
   - **Variety:** Does each 2-4 second window introduce new visual information?
   - **Audio Sync:** Are cuts locked to audio hits?

4. **Iterate:**
   Identify the 3 worst issues, modify `index.html` or the Remotion composition, re-render, and verify until all scores reach 8+/10.
