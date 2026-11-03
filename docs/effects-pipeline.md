# Video Effects & Face Tracking Pipeline

Antigravity Motion Studio incorporates the 51 face-tracked and behind-the-head video effects pipeline (`.agent/skills/effects`).

---

## Capabilities

Using lightweight OpenCV YuNet neural face detection and MediaPipe selfie segmentation, graphics can be rendered **behind** a creator's head or tracked tightly to their eyes, chin, and shoulders in real time.

### Top Effects

1. **`backdrop-word`**: Places giant, bold typography behind the speaker's head without obscuring their face.
2. **`locked-on`**: Face camera lock-on with corner brackets tracking head movement and punch-in zoom.
3. **`messages`**: Realistic frosted-glass iOS notification bubbles stacking up sequentially.
4. **`liquid-glass-graph`**: Translucent frosted glass card displaying real-time animated metric graphs.
5. **`tap`**: Follow button animation that clicks to "Following" with haptic spring feedback.
6. **`spotlight`**: Lowers background lighting while keeping the speaker illuminated.
7. **`apple-toggles`**: iPhone-style toggles flipping on step-by-step.

---

## Multi-Effect Plan Execution

Create a plan file in JSON format:
```json
{
  "effects": [
    {
      "fx": "backdrop-word",
      "start": 0.5,
      "end": 3.2,
      "text": "CHATGPT FREE",
      "color": "#F59E0B"
    },
    {
      "fx": "locked-on",
      "start": 3.2,
      "end": 5.5,
      "zoom": 1.25
    },
    {
      "fx": "messages",
      "start": 5.5,
      "end": 9.0,
      "text": "Limit over ho gayi?|Bina subscription banegi photo|Check this out!"
    }
  ]
}
```

### Rendering:
```bash
python .agent/skills/effects/scripts/fx.py --plan plan.json in.mp4 out.mp4
```

### Vision Checking:
Render still check frames at specified timestamps without waiting for full video encoding:
```bash
python .agent/skills/effects/scripts/fx.py --plan plan.json in.mp4 check.png --still 1.5,4.2,7.5
```
