# SaaS Product Showreel

A high-production SaaS promotional video template powered by **Antigravity Motion Studio**.

## Features
- **Deterministic 0xMovez Engine:** Closed-form spring dynamics (`lib/motion.js`).
- **Procedural Sound Design:** Algorithmic UI clicks, whooshes, and pops (`sfx.mjs`).
- **Playwright Headless Renderer:** Raw pixel pipeline into FFmpeg (`render.mjs`).

## Quickstart

```bash
# 1. Install dependencies
npm install
npx playwright install chromium

# 2. Synthesize audio cues
npm run sfx

# 3. Render video
npm run render
```
