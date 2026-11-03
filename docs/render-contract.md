# The Render Contract

The core principle behind **Antigravity Motion Studio** is: **Motion is a pure, deterministic function of time.**

$$f(t) \to \text{Frame State}$$

---

## 1. Zero Non-Determinism
Every frame $i$ rendered at time $t = \frac{i}{\text{fps}}$ must produce the exact same pixel buffer regardless of:
- When it was rendered
- Which machine rendered it
- How fast or slow the CPU executed the loop
- Whether frame $i$ was rendered after frame $i-1$ or jumped directly via random seek

### Rules:
1. **Never use `Math.random()` in render mode.**  
   Use the deterministic Mulberry32 PRNG from `lib/motion.js`:
   ```javascript
   import { rng } from './lib/motion.js';
   const rand = rng(1337);
   const x = rand(); // bit-identical on every render pass
   ```
2. **Never use `setTimeout`, `setInterval`, or CSS transitions.**  
   CSS transitions execute asynchronously against the browser's wall clock, creating dropped frames and non-deterministic timing during offline headless capture.
3. **Pure `window.seek(t)` Interface:**  
   Every scene defines a single global `window.seek(t)` that takes time $t$ in seconds and updates all DOM elements, Canvas, or WebGL contexts synchronously.

---

## 2. Closed-Form Damped Harmonic Springs
Easing curves (`ease-in-out`, cubic-bezier) look cheap and mechanical. Physical springs provide realistic weight, momentum, and physical elasticity.

Most animation libraries implement springs using numerical Euler or Verlet integration:
$$\Delta x_{i} = v_i \Delta t$$
This requires running frames $0, 1, \dots, n-1$ to compute frame $n$. If you seek to second 12.0, you have to simulate 720 frames!

In Antigravity Motion Studio, we use the **analytical closed-form solution** of the damped harmonic oscillator:

$$m \ddot{x} + c \dot{x} + k x = 0$$

For an underdamped system ($\zeta < 1$):

$$x(t) = 1 - e^{-\zeta \omega_0 t} \left( \cos(\omega_d t) + \frac{\zeta \omega_0}{\omega_d} \sin(\omega_d t) \right)$$

Where:
- $\omega_0 = \sqrt{k}$ (undamped angular frequency)
- $\zeta = \frac{d}{2 \sqrt{k}}$ (damping ratio)
- $\omega_d = \omega_0 \sqrt{1 - \zeta^2}$ (damped frequency)

### Code Implementation (`lib/motion.js`):
```javascript
export function spring(t, k = 170, d = 26) {
  if (t <= 0) return 0;
  const w0 = Math.sqrt(k);
  const z = d / (2 * w0);
  if (z < 1) {
    const wd = w0 * Math.sqrt(1 - z * z);
    return 1 - Math.exp(-z * w0 * t) * (Math.cos(wd * t) + ((z * w0) / wd) * Math.sin(wd * t));
  }
  return 1 - Math.exp(-w0 * t) * (1 + w0 * t); // critically or over-damped
}
```
**Advantage:** You can calculate frame 800 in $O(1)$ constant time with zero prior frame simulation.

---

## 3. Aesthetics & Anti-Slop Guidelines
AI video generation frequently defaults to generic tropes ("slop"). We enforce studio aesthetic standards:

- **Banned Defaults:**
  - ❌ Centered white text over generic purple/blue gradients
  - ❌ Everything slowly fading in with 0.3s opacity transitions
  - ❌ Corner status badges and HUD sci-fi borders (dead giveaway of low-effort AI video)
  - ❌ Unmotivated particle bursts
- **Studio Standards:**
  - **Typographic Hierarchy:** Exactly one display typeface and one clean UI typeface.
  - **Single Accent Color:** One focused brand accent color (e.g., Terracotta `#D97757` or Amber `#F59E0B`).
  - **Pacing Rule:** Every 2 to 4 seconds, a new visual development or state morph must occur.
  - **Continuous Morphing:** Elements morph and stretch continuously across states rather than abruptly cutting.
