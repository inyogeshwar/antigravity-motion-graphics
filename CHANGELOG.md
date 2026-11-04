# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2026-11-03

### Added
- **MotionOS Rebranding & Autonomous Vibe Editing OS (VEOS):**
  - Officially rebranded and upgraded the framework to **MotionOS (Antigravity Edition)**.
  - Added native `motionos` and `motion-os` CLI bin targets in `package.json`.
- **Vibe Editing OS (VEOS) Pipeline Engine (`lib/veos.js`):**
  - `analyzeTranscript()`: automatic speech-to-text word metrics, WPM, and silence gap detection for jump cuts.
  - `generateVibePlan()`: intelligent storyboard generation scheduling 51 computer-vision effects (backdrop words, liquid glass graphs, checklists, apple toggles) and procedural audio cues.
  - 4 Curated Creator Style Presets: `tech-bento` (sky blue glass), `bold-creator` (high contrast amber), `minimal` (editorial terracotta), and `neon-glow` (emerald cinematic).
- **VEOS CLI Suite (`bin/veos.js` & `bin/cli.js`):**
  - `npx motionos veos prep <video.mp4>`
  - `npx motionos veos plan <video.mp4> --style <style>`
  - `npx motionos veos preview <video.mp4>` (rapid keyframe still extraction for approval before render)
  - `npx motionos veos render <video.mp4>` (broadcast 1080p/4K MP4 with face matting and audio sync)
  - `npx motionos veos review <video.mp4>` (6x5 contact sheet and mobile phone inspection)
  - `npx motionos veos styles` (lists all available creator style presets)
- **Comprehensive MotionOS Production Manual (`docs/MOTIONOS_GUIDE.md`):**
  - Full end-to-end documentation replicating and elevating the VEOS guide for Antigravity.
- **Unit Test Coverage (`tests/veos.test.js`):**
  - Added 8 unit tests for transcript analysis, silence detection, hook creation, and keyword-to-effect mapping (bringing total tests to 35 passing).

## [1.0.1] - 2026-11-03

### Added
- **Official Scaffolding Wrapper Package (`packages/create-antigravity-motion`):**
  - Instant `npx create-antigravity-motion [name]` delegation.
  - Native support for `npm create antigravity-motion`, `pnpm create antigravity-motion`, and `bun create antigravity-motion`.
- **Live NPM Badges & Registry Integration:**
  - Added live version and download badges.
  - Verified binary mappings for `antigravity-motion`, `create-antigravity-motion`, and `antigravity-motion-graphics`.

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
