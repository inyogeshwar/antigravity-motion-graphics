# MotionOS: The Autonomous Vibe Editing & Motion Graphics Operating System

> **Official Guide & Production Manual**  
> *Antigravity Edition — Upgraded from the MotionOS (Vibe Editing OS) Architecture*

---

## 1. What is MotionOS?

**MotionOS** is an autonomous video editing and motion design operating system designed natively for **Google Antigravity** and next-gen AI coding agents.

Instead of spending hours inside Premiere Pro, Final Cut, or After Effects manually cutting pauses, keyframing zooms, tracking masks, and aligning sound effects, **MotionOS** treats video production as an executable code pipeline:

```
[ Raw Footage (MP4) ] ➔ [ Speech-to-Words ] ➔ [ AI Vibe Storyboard ] ➔ [ Human Approval Gate ] ➔ [ 4K Broadcast MP4 ]
```

### Core Superpowers:
1. **Zero-Timeline Editing:** You talk to the agent in Antigravity or run the CLI; the agent parses transcripts, cuts dead air, and places visual effects on exact word timestamps.
2. **51 Computer-Vision Effects with Face Matting:** Elements (3D graphs, giant words, phone carousels, bento cards) track your movements and render **seamlessly behind your head**.
3. **Deterministic Spring Physics:** Closed-form damped springs ($k=170, d=26$) rather than cheap linear easing.
4. **Procedural SFX & Beat Synchronization:** Synthesizes audio clicks, pops, whooshes, and thumps directly locked to video transitions.
5. **Vision Verification Loop:** Self-critique engine that inspects rendered contact sheets at phone sizes before delivery.

---

## 2. Quickstart & Installation

MotionOS runs locally on macOS, Linux, and Windows 10/11:

```bash
# 1. System prerequisites
# Windows: winget install Gyan.FFmpeg Python.Python.3.12
# macOS:   brew install ffmpeg python@3.12 node

# 2. Clone or run via npx
git clone https://github.com/inyogeshwar/antigravity-motion-graphics.git
cd "antigravity-motion-graphics"
npm install

# 3. Test installation
npm test
```

---

## 3. The 4-Step Vibe Editing Workflow

### Step 1: Prep & Word Alignment (`prep`)
Transcribe raw footage down to millisecond word timestamps using `faster-whisper`, and analyze pauses for jump-cut trimming:

```bash
npx motionos vibe prep "raw_footage.mp4"
```
*Outputs: `raw_footage.words.json` with word timestamps and silence gap detection.*

---

### Step 2: Intelligent Storyboarding (`plan`)
The AI engine analyzes the transcript semantics, places a dynamic hook in the first 2.5 seconds, assigns context-aware visual effects (e.g. liquid graphs when mentioning metrics, checklists on step-by-step rules), and schedules audio cues:

```bash
# Select one of the 4 creator styles:
# --style tech-bento | bold-creator | minimal | neon-glow
npx motionos vibe plan "raw_footage.mp4" --style tech-bento
```
*Outputs:*
* `raw_footage_plan.json` (visual effects timetable)
* `raw_footage_cues.json` (sound effects track)

---

### Step 3: Rapid Human Approval Gate (`preview`)
**Never wait for a full render just to see if you like the visuals.**  
MotionOS extracts keyframes at the exact midpoint of every planned effect and generates a visual preview contact sheet:

```bash
npx motionos vibe preview "raw_footage.mp4"
```
*Outputs: `raw_footage_check.png`.*  
Inspect the frame in Antigravity or your image viewer:
* Did the text sit behind your head cleanly?
* Is the accent color legible?
* Approve or make a 1-line tweak to the plan before proceeding!

---

### Step 4: Broadcast 4K Render (`render`)
Execute the full rendering pipeline with camera tracking, background matting, and audio muxing:

```bash
# 1080p standard
npx motionos vibe render "raw_footage.mp4" --out "out/final.mp4"

# 4K Ultra-HD
npx motionos vibe render "raw_footage.mp4" --out "out/final_4k.mp4" --width 2160
```

---

### Step 5: Vision Verification (`review`)
Generate a contact sheet tile (6x5) and mobile phone viewport test to verify the 5-point studio rubric:

```bash
npx motionos vibe review "out/final.mp4"
```

#### The MotionOS Quality Rubric (Target 8+/10):
1. **Hook:** Does visual motion start within the first 1.5 seconds?
2. **Mobile Readability:** Is typography legible at 360px width?
3. **Pacing:** Does a new visual milestone occur every 2 to 4 seconds?
4. **Natural Physics:** Are transitions weighted with damped harmonic springs?
5. **Sound Alignment:** Do SFX whooshes and clicks lock to visual transitions?

---

## 4. Built-In Style Presets

| Style | Aesthetic | Accent Color | Primary Effects |
|---|---|---|---|
| **`tech-bento`** (Default) | Modern frosted glass, KPIs, Apple-inspired | `#38BDF8` (Sky) | `backdrop-word`, `glass-widgets`, `liquid-glass-graph`, `apple-toggles` |
| **`bold-creator`** | High contrast, viral retention, punchy edits | `#F59E0B` (Amber) | `lean-in`, `red-collage`, `headline-box`, `reject-stamp`, `the-bill` |
| **`minimal`** | Subtle luxury, editorial typography, calm | `#D97757` (Terracotta) | `slow-push`, `cover-star`, `pastel-word`, `split-headline`, `tap` |
| **`neon-glow`** | Cinematic dark mode, cyber lighting | `#10B981` (Emerald) | `spotlight`, `led-sign`, `moody`, `glitter-spotlight`, `dot-reveal` |

---

## 5. The 51 CV Effects Cheat Sheet

Every effect automatically segments your head and body using MediaPipe / OpenCV, allowing graphic layers to render behind you:

* **Camera Moves:** `lean-in` (punch zoom on keyword), `slow-push` (cinematic zoom), `over-the-shoulder-zoom`, `locked-on` (face lock brackets).
* **Typography:** `backdrop-word` (giant word behind head), `led-sign` (retro glowing ticker), `crayon-write` (marker underline), `huge-strike` (strikethrough).
* **Data & Product UI:** `liquid-glass-graph` (counting growth chart), `glass-widgets` (floating frosted stats), `apple-toggles` (iPhone toggles flipping on), `timeline` (REC timecode & playhead).
* **Social & Engagement:** `tap` (Follow button pops and flips to Following), `comment-box` (Instagram comment bar), `reel-frame` (shrinks into reel card), `messages` (iMessage popups).
* **Lists & Steps:** `checklist` (animated green checkmarks), `todo` (ticking checklist card), `the-bill` (receipt printout).
* **Showcase Fans:** `orbit` (reels/screens circling your head in 3D), `phone-fan` (fan of phones), `fan-build`, `place-in-grid` (3x3 Instagram profile grid).

---

## 6. Directing MotionOS Inside Antigravity

In Antigravity chat, you can direct MotionOS conversationally:

### Example Prompts:

**1. End-to-End Vibe Edit:**
> *"I've uploaded `my_talking_head.mp4`. Run MotionOS in `tech-bento` style. When I say 'three steps', add a checklist effect behind my head, and show me the preview stills before rendering the final 1080p video."*

**2. Single Effect Punch:**
> *"Add a `lean-in` zoom on the word 'revolutionary' and an `apple-toggles` switch card under my chin from second 4 to 7."*

**3. Programmatic Showreel (Without Camera Footage):**
> *"Make a dynamic 15-second motion graphics promo for our new AI developer tool at 60 fps using Route A (`seek(t)`). Single terracotta accent `#D97757`, 120 BPM sound design, and show me the contact sheet."*

---

## 7. The 3 Render Engines Under the Hood

1. **Vibe Editing OS (`fx.py` + MediaPipe + Whisper):** Best for creator talking-head videos with computer-vision effects and face matting.
2. **Pure `window.seek(t)` Engine (`render.mjs` + Playwright):** Best for deterministic 60fps canvas animations, UI morphs, and zero-dependency web graphics.
3. **Remotion Framework (`remotion studio`):** Best for complex React components, Lottie animations, and multi-track compositing.

---

*MotionOS is maintained by the Antigravity Motion Studio community. Licensed under MIT.*
