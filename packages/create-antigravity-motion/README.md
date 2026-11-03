# create-antigravity-motion

**One-Click Starter for Antigravity Motion Studio**

Scaffold broadcast-grade deterministic programmatic motion graphics, UI showreels, and talking-head effects in one command.

---

## Usage

### Interactive Wizard (Recommended)
```bash
npx create-antigravity-motion my-video
```
or via npm / pnpm / yarn / bun:
```bash
npm create antigravity-motion my-video
pnpm create antigravity-motion my-video
bun create antigravity-motion my-video
```

### Instant Non-Interactive Setup
```bash
npx create-antigravity-motion my-video --template canvas --yes --install
```

---

## What Gets Created

- `index.html`: Pure deterministic Canvas/DOM composition with `window.seek(t)`
- `lib/motion.js`: Damped harmonic closed-form spring physics & Mulberry32 seeded PRNG
- `render.mjs`: Playwright headless frame-by-frame raw pixel pipeline into FFmpeg
- `tests/`: 100% deterministic unit tests for motion dynamics

---

## Next Steps

```bash
cd my-video
npx playwright install chromium
npm run render      # Render video to out/silent.mp4
npm test            # Run physics unit tests
```

For full documentation and core engine source code, visit:  
👉 [https://github.com/inyogeshwar/antigravity-motion-graphics](https://github.com/inyogeshwar/antigravity-motion-graphics)
