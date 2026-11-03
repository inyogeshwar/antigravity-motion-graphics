# Contributing to Antigravity Motion Studio

Thank you for your interest in contributing to **Antigravity Motion Studio**! We welcome contributions from developers, motion designers, and sound engineers.

---

## Code of Conduct

All contributors and participants are expected to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Development Setup

### Prerequisites
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **Python**: 3.10 or later
- **FFmpeg**: Modern build with H.264 support
- **Playwright Chromium**: Automatically installed via package manager

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/inyogeshwar/antigravity-motion-graphics.git
   cd antigravity-motion-graphics
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browser binaries:**
   ```bash
   npx playwright install chromium
   ```

4. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Add your optional Cartesia or HeyGen API keys if working with AI voice generation.

5. **Run the test suite:**
   ```bash
   npm test
   npm run test:py
   ```

---

## The Motion Design Standards (Render Contract)

Before writing motion code or PRs, please review the [Render Contract](docs/render-contract.md):
- **Pure Function of Time:** All animations must be a pure mathematical function of time `window.seek(t)`.
- **Zero Non-Determinism:** Never use `Math.random()`, `setTimeout`, or asynchronous CSS transitions. Use `rng(seed)` for reproducible pseudorandom values.
- **Closed-Form Springs:** Use analytical damped springs (`spring(t, k, d)`) and continuous target tracking (`track(t, keys)`).

---

## Git Workflow & Conventional Commits

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
- `feat:` A new feature or animation module
- `fix:` A bug fix in the renderer, physics, or audio pipeline
- `docs:` Documentation improvements
- `refactor:` Code restructuring without changing behavior
- `test:` Adding or updating tests
- `chore:` Maintenance, dependency upgrades, or CI adjustments

### Pull Request Process
1. Create a feature branch from `main`:
   ```bash
   git checkout -b feat/my-new-effect
   ```
2. Write clean, modular code with comments explaining physics and easing parameters.
3. Add unit tests in `tests/` covering new math functions or features.
4. Ensure all tests pass:
   ```bash
   npm run test:all
   ```
5. Submit your Pull Request using the [PR Template](.github/PULL_REQUEST_TEMPLATE.md).
