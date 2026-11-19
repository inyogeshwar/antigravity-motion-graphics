# create-antigravity-motion

<div align="center">

[![npm version](https://img.shields.io/npm/v/create-antigravity-motion.svg)](https://www.npmjs.com/package/create-antigravity-motion)
[![Core Engine](https://img.shields.io/npm/v/antigravity-motion-graphics.svg?label=core%20engine)](https://www.npmjs.com/package/antigravity-motion-graphics)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-brightgreen.svg)](package.json)

**The Official One-Click Scaffolding Wizard for Antigravity Motion Studio**

*Scaffold broadcast-grade deterministic programmatic motion graphics, UI showreels, and talking-head effects in one command.*

</div>

---

## 🚀 Instant Quickstart

### 1. Interactive Scaffolding (Recommended)
```bash
npx create-antigravity-motion my-video
```
or via your preferred package manager:
```bash
npm create antigravity-motion my-video
pnpm create antigravity-motion my-video
bun create antigravity-motion my-video
yarn create antigravity-motion my-video
```

### 2. Instant Non-Interactive Setup
```bash
# Scaffold canvas template and install dependencies automatically
npx create-antigravity-motion my-video --template canvas --yes --install

# Scaffold SaaS Product Showreel template
npx create-antigravity-motion my-showreel --template saas-showreel --yes --install
```

---

## 🎨 Available Templates

| Template | Description | Technology |
| :--- | :--- | :--- |
| **`canvas`** *(Default)* | Zero-dependency pure DOM/Canvas motion graphics with closed-form springs and 60fps render engine. | Vanilla JS + Canvas + Playwright |
| **`saas-showreel`** | B2B SaaS landing page mockup with animated browser windows, feature cards, and procedural audio cues. | HTML5 + CSS3 + sfx.mjs |

---

## 📦 What Gets Created

Every scaffolded project includes:
- `index.html`: Deterministic composition pure function `window.seek(t)`.
- `lib/motion.js`: Damped harmonic closed-form spring physics & Mulberry32 seeded PRNG.
- `render.mjs`: High-speed Playwright Chromium automation piping raw frames into FFmpeg.
- `sfx.mjs`: Audio cue mixer and procedural synthesizer.
- `tests/`: 100% deterministic unit tests for motion dynamics.

---

## 🎬 Running Your Scaffolded Project

```bash
cd my-video

# 1. Install headless browser (one-time)
npx playwright install chromium

# 2. Render MP4 video
npm run render

# 3. Run physics unit tests
npm test
```

---

## 🔗 Related Packages & Documentation

* **Core Engine & CLI Suite:** [`antigravity-motion-graphics`](https://www.npmjs.com/package/antigravity-motion-graphics)
* **GitHub Repository:** [https://github.com/inyogeshwar/antigravity-motion-graphics](https://github.com/inyogeshwar/antigravity-motion-graphics)
* **Full Production Guide:** [MotionOS Guide](https://github.com/inyogeshwar/antigravity-motion-graphics/blob/main/docs/MOTIONOS_GUIDE.md)
