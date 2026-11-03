# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-11-03

### Added
- **Deterministic Closed-Form Motion Engine (`lib/motion.js`):**
  - Analytical damped harmonic spring physics (`spring(t, k, d)`).
  - Mulberry32 seeded pseudo-random number generator (`rng(seed)`).
  - Multi-target continuous spring tracker (`track(t, keys)`).
  - Morphing indicator stretching physics (`indicator(t, stops)`).
  - Deterministic time wrapping and container opacity curves (`loopT`, `swapAlpha`).
- **High-Performance Headless Renderer (`render.mjs`):**
  - Playwright-driven frame-by-frame capture piped directly to FFmpeg `image2pipe`.
  - Dynamic cross-platform FFmpeg path resolution with WinGet and environment variable support.
  - Sub-frame sampling multiplier (`--sub`) for spatial and temporal motion blur.
- **Procedural Sound Effects Synthesizer (`sfx.mjs`):**
  - Algorithmic audio cue synthesis directly to 16-bit 48kHz PCM WAV.
  - Procedural sound voices: `click`, `pop`, `thump`, `whoosh`, `ding`.
- **AI Voice Integration:**
  - Cartesia AI TTS client with flagship `sonic-3.6` multilingual model (`cartesia.mjs`).
  - HeyGen Voice Turbo Free client with `$0 / million chars` tier (`heygen.mjs`).
- **Claude Video Effects Pipeline (`.agent/skills/effects`):**
  - 51 face-tracked and behind-the-head motion graphics effects (`fx.py`).
  - YuNet face detection and MediaPipe selfie segmentation.
- **Beat Grid Analyzer (`beats.py`):**
  - Perceptual onset peak picking and 120 BPM fallback grid.
- **Automated Test Suite (`tests/`):**
  - 24 unit tests covering motion physics, audio synthesis, and registry fallbacks via native Node.js test runner.
  - Python test suite for beat grid generation.
- **GitHub Community Standards & CI/CD:**
  - Automated CI matrix workflow (`.github/workflows/ci.yml`).
  - GitHub CodeQL static security analysis (`.github/workflows/codeql.yml`).
  - Automated Dependabot updates for npm and actions (`.github/dependabot.yml`).
  - Structured issue forms, PR template, CODEOWNERS, and Copilot instructions.
