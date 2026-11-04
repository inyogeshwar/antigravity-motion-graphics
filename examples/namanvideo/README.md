# Naman Infotainment Reel Showcase - MotionOS

This example demonstrates an automated, asset-driven video edit produced using **MotionOS** inside Google Antigravity.

---

## 📸 Render Outputs & Contact Sheets

### 1. MotionOS Render Preview
![MotionOS Render Contact Sheet](naman_final_contact.png)

### 2. Authentic Reference Breakdown
![Reference Contact Sheet](naman_reference_contact.png)

---

## 🎬 Production Specs
- **Input Footage:** `namanvideo.mp4` (48.98s, 1080x1920 9:16 vertical video)
- **Transcription:** Local Faster-Whisper Large V3 Turbo (`namanvideo.words.json`)
- **Storyboard Plan:** `namanvideo_plan.json`
- **Active Creator Style:** `naman-infotainment-motion` (`templates/playbooks/_styles/naman-infotainment-motion/`)
- **Key Animation Techniques:**
  - Depth Sandwich (`text-behind-head` segmentation with MediaPipe Selfie Segmenter)
  - Bezier Easing Motion Specs
  - Split Cards (01 COLORS, 02 FONTS, 03 MOTION)
  - Instagram Comment CTA Box

---

## 🛠️ How to Reproduce

```bash
# 1. Transcribe footage locally with Whisper (offline)
python .agent/skills/effects/scripts/words.py examples/namanvideo/namanvideo.mp4

# 2. Generate MotionOS plan
npx motionos plan examples/namanvideo/namanvideo.words.json --style naman-infotainment-motion

# 3. Render video deterministically
npx motionos render examples/namanvideo/namanvideo_plan.json --out out/naman_render.mp4
```
