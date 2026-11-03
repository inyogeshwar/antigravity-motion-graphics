# Antigravity Motion Canvas Project

A high-performance deterministic programmatic motion graphics project powered by **Antigravity Motion Studio**.

## Quickstart

### 1. Install dependencies
```bash
npm install
npx playwright install chromium
```

### 2. Render to MP4
```bash
# Fast preview render
npm run render

# High-quality render with 4x sub-frame motion blur
npm run render:hq
```

### 3. Run Tests
```bash
npm test
```

## The Render Contract
All animations are driven deterministically by `window.seek(t)` in `index.html`. No timeouts, intervals, or non-deterministic loops.
