# A real plan: Reel 10 ("7 security checks", Creator Infotainment)

This is the plan behind a reel that came out spectacular, kept exactly as it was written. Read it for **depth, not look**: how every line is read, how one idea (the 7-segment shield) runs through the whole reel, how the hook is planned second by second, and how every beat names its picture in a full sentence, its words, its moves in and out and its exact sounds. Your reel takes its look from its own playbook and its own footage: never copy this reel's shield, colours or jokes into a reel they don't belong to.

Its tool notes (`~/tools`, `renderer/_core.html`, `build.py`, `drive.py`, sound file names, `PB §` and P-/T-/Z- ids) belong to the run it came from and to its own playbook; the plugin's equivalents are in REFERENCE.md.

---

# Edit Brief: Reel 10 · "Claude ka app = hackers ki chummi" · 7 security checks (CTA keyword: SECURE)

You are the editor and motion designer. This brief is the single, final plan; execute it exactly.

- **Read first:** `../../Creator-Reel-Editing-Playbook-v2.md` (PB) and v1 for measured values. This brief wins on conflicts. Deviations are marked `(dev)`.
- **Visual reference:** `edit/mockup.html`. The storyboard is the **first pre-render gate**: the concept gate is skipped, as in Reel 1, on Creator's instruction.
- **Ground truth:** the footage (`words.json`). `../script.md` is a reference only (spelling, keyword, PDF).

## 1. Inputs and footage facts
| Item | Value |
|---|---|
| Source | `../reel 10.mp4`: 1080×1920, 30 fps CFR, **1724 frames = 57.47 s**, H.264 BT.709 |
| Audio | AAC stereo; L and R are near-identical (difference −56 dB), so use `0:a:0` as mono |
| Setup | **One tripod take** (gaming chair, "We require more tokens" tee), real studio, no camera cuts |
| Transcript | `words.json`: 237 words, romanised Hinglish, corrections logged |
| Output | 1080×1920; storyboard at 30 fps; final at **60 fps** (as approved for Reel 1) |

### 1.1 Measured framing
Head top y ≈ 711, face centre x ≈ 540 (range 507–588), eye line ≈ 800, gestures mostly frame-right.

### 1.2 Crop values
| Mode | Placement |
|---|---|
| `F` (full, punched) | Scale 1.35, left −189, top −320 (head top ≈ 640, face ≈ 540/760) |
| `D` panel (`P-INSET`, x 12–1068, y 1008–1881, radius 60) | Scale 1.5, left −380, top 12 (head top ≈ 1078, face x ≈ 430) |
| Hook depth sandwich | Cut-out scale 1.25, left 85, top 111 (head top ≈ 1000, face x ≈ 760) over a plate (the same raw frame, blur 26, brightness 0.42) |

### 1.3 Layout constants
| Element | Value |
|---|---|
| Banner | x 40–1040, top 150 |
| Hook phone | x 70–490, y 360–1220 |
| Data Stage graphics zone | x 40–1040, y 300–900 |
| Shield spine (SM-8) | Docked at x 40, y 150, 130 wide |
| Title band | x 170–1040, y 178 |
| `CAP-SUB` | D: top 930 (white); F: top 1300 |
| `CAP-CHUNKY` | x 20–680, y 1250 |

### 1.4 Matte
Apple Vision (`renderer/tools/vmask.py`), frames 0–424 only (the hook). Every other mode uses raw frames (`renderer/raw/`).

### 1.5 Environment
`~/tools` ffmpeg/python, Chrome. The renderer is `renderer/_core.html` (shared core from Reel 1) + `renderer/scenes10.js`. `renderer/build.py` produces `render.html` (30 fps) and `render60.html` (60 fps).

## 2. Transcript, segmentation and line classification
| Act | Time | Line (as spoken) | Type | Tone | Trigger @ onset |
|---|---|---|---|---|---|
| HOOK | 0.00 | agar tum soch rahe ho ki tumhara vibe coded app secure hai na | Viewer's belief | hype | vibe 1.10 · secure 1.70 |
| HOOK | 2.46 | wahi app jaake hackers ki chummi le raha hai | Roast (garbage state) | **mock** | hackers 3.28 · chummi 3.76 |
| HOOK | 4.46 | chalo main batata hoon ki tumhara app secure karte kaise hai | Fixed state | awe | secure 5.80 |
| HOOK | 6.84 | launch se pehle na ye 7 test zaroor kar lena · saatwa sabse khatarnaak hai | Count + open loop | hype/warn | 7 7.90 · khatarnaak 10.23 |
| LOOP | 10.81 | reel end tak dekhoge na to saare prompts tumhe DM mein bhej dunga | Loop | hype | DM 12.97 |
| S1 | 13.95 | sabse pehla rate limiting, taaki tumhare API isko spam na kar paaye | Risk → fix | explain | rate 14.55 · spam 16.51 |
| S2 | 17.47 | doosra, har ek input check karo ki tumhare server input se match kar raha hai ya nahi, warna reject kar daalo | Risk → fix | explain | input 18.48 · match 20.80 · reject 21.98 |
| S3 | 22.68 | teesra, code commit karte karte na APIs ki commit mat kar dena | Risk → fix | warn | commit 23.48 · mat 25.32 |
| ASIDE | 25.96 | make sure to add this one prompt that I'll give you in the end of the reel | Promise | hype | prompt 27.18 · end 28.28 |
| S4 | 28.97 | chautha, jo bhi package install kar rahe ho na, ek baar version check zaroor kar lena | Risk → fix | explain | install 30.03 · version 31.29 |
| S5 | 32.71 | paanchva, error aate hi na user ko tumhare code ki details dikhne lag jaati hai, uski jagah ek simple message dikha dena | Risk → fix | explain/win | details 35.31 · simple 37.03 |
| S6 | 38.37 | chhatha, file upload pe na ek size limit laga do | Risk → fix | explain | limit 40.35 |
| JOKE | 41.13 | warna tumhara app hi log Google Drive jaise use karne lag jaayenge | Joke | **mock** | Drive 42.53 |
| S7 | 43.98 | aur saatwa, aur ye sabse khatarnak hai, just make sure ki tumhara user app ke andar kisi aur user ka data to nahi dekh sakta hai, seedha privacy breach ho jaayegi | Escalated risk | warn → win | khatarnak 45.13 · data 49.16 · nahi 49.49 · privacy 50.62 |
| CTA | 51.69 | sab ke sab prompts tumhare DMs mein bhej dunga, comment kar do SECURE, aur meri community join karna mat bhoolna, link is in the bio | CTA | cta | DMs 52.91 · SECURE 54.47 · join 55.56 · bio 57.16 (ends 57.35) |

**Deviations from the written script** (the footage wins):
- (dev) The hook is "**hackers ki chummi**" (kissing hackers), not "gift for hackers". The visual is a kiss, and there is a kiss meme hit.
- (dev) Check 4 is a "**version check**" of installed packages. The written script and PDF talk about packages that don't exist or are weak; the PDF's check 4 still covers it.
- (dev) Check 6 adds the **Google Drive joke**.
- (dev) Check 7 has **no Supabase/RLS mention**; it ends on "privacy breach".
- (dev) The CTA community is unnamed (no "MotionOS Studio", no "Peace out").
- **Promise kept:** the English aside promises "one prompt… in the end of the reel". The CTA PDF holds all 7 prompts, including secrets ("Hidden API keys → find, move, rotate").

## 3. Theme, spine, signature moves
- **Worlds:**
  - The hook is a depth sandwich over a blurred plate.
  - Checks 1–6 run on the **Data Stage** (night grid, cyan glow) with Creator in an inset panel.
  - Check 7 escalates to a **red alarm stage** (T-14).
  - The aside, the joke and the CTA are **F** pop-backs with top-band insets.
- **Spine (SM-8):** a 7-segment shield.
  - On "7 test" it is big and numbered.
  - Segment 7 pulses red with ☠ on "saatwa sabse khatarnaak".
  - It docks top-left, and each segment turns green at its fix moment: 17.0, 22.1, 25.75, 32.0, 37.6, 40.6 and 49.6.
  - It completes as "7/7 SECURE ✓" before the CTA.
- **Data Theatre machines (PB P-50…P-58):** bot flood vs LIMIT gate; SERVER format slot (match/reject); commit card with the 🔑 pulled before the public repo; package scanner; error window flipping to a simple message; SIZE LIMIT bar; user data wall.

## 4. Hook (Result-First Roast)
| t | Spoken | Visual | Caption | Camera | SFX |
|---|---|---|---|---|---|
| f0 | agar | Slab "Your vibe-coded app is / **KISSING HACKERS 💋**" (red chip) + phone app + Creator's cut-out in front; silhouette strobe f1/3/5 | "agar tum soch rahe ho" | Slab settle | Sub hit + flicker |
| 1.70 | secure hai na | A green "SECURE ✓" badge pops on the phone (the viewer's belief) | **SECURE HAI NA?** green | — | Pop |
| 2.9–3.7 | wahi app jaake hackers | 14 red hacker cursors swarm toward the phone | **HACKERS** red | — | Glitch swish |
| 3.76 | ki chummi le raha hai | 💋 stamps on the screen; SECURE falls; ❤️ + 🔑 💳 👤 fly out to the cursors; chip pulse | **CHUMMI** pink | Z-7 tilt | **Kiss meme** in the 4.30–4.46 gap |
| 4.6–5.4 | chalo main batata hoon | A cyan shield wraps the phone (light sweep); the cursors bounce away | — | — | Riser |
| 5.80 | secure karte kaise hai | **Banner flip** → "SECURE ✓" (green) | **SECURE** green | — | Cinematic hit + shine |
| 7.68–7.9 | ye 7 test | Big numbered 7-segment shield rises; the phone dims | **7 TEST** | Z-1 on "7" | Pop |
| 9.89 | saatwa sabse khatarnaak | Segment 7 pulses red, ☠ sticker, shake | **SABSE KHATARNAAK** red | Shake | Alarm |
| 10.8–13.6 | reel end tak… DM mein bhej dunga | Shield waits; loop captions | END TAK / DEKHOGE NA / PROMPTS / DM MEIN / BHEJ DUNGA | Banner rockets at 13.75; the shield docks | Swoosh |

## 5. Beat sheet (YAML, validated)
```yaml
- {id: 1, section: HOOK, spoken: "agar tum soch rahe ho ki tumhara vibe coded app", trigger: "vibe", onset_s: 1.10, start_s: 0.00, tone: hype, mode: HOOK, pattern: "VS-1 + VS-2 + T-02", family: B-15, visual: "Frame-0 stopper: Headline Slab 'Your vibe-coded app is KISSING HACKERS 💋', the viewer's app on a phone, Creator's cut-out in front of it; white silhouette strobe f1/3/5", on_screen_text: ["Your vibe-coded app is", "KISSING HACKERS 💋", "VIBE CODED"], transition_in: T-02, transition_out: evolve, sfx: ["ABSTRACT_HIT_Sub_Bass_07.wav", "Hit FX Flicker.wav"]}
- {id: 2, section: HOOK, spoken: "secure hai na", trigger: "secure", onset_s: 1.70, start_s: 1.66, tone: hype, mode: HOOK, pattern: P-65, family: B-15, visual: "A green 'SECURE ✓' badge pops on the phone: what the viewer believes", on_screen_text: ["SECURE ✓", "SECURE HAI NA?"], transition_in: evolve, transition_out: evolve, sfx: ["pop-up/pop-up.wav"]}
- {id: 3, section: HOOK, spoken: "wahi app jaake hackers", trigger: "hackers", onset_s: 3.28, start_s: 2.44, tone: mock, mode: HOOK, pattern: P-49 (cursors), family: B-12, visual: "14 red hacker cursors swarm in toward the phone", on_screen_text: ["HACKERS"], transition_in: evolve, transition_out: evolve, sfx: ["glitch swish"]}
- {id: 4, section: HOOK, spoken: "ki chummi le raha hai", trigger: "chummi", onset_s: 3.76, start_s: 3.72, tone: mock, mode: HOOK, pattern: "P-63 + P-65", family: B-14, visual: "A 💋 kiss mark stamps the screen, the SECURE badge cracks and falls, hearts and 🔑 💳 👤 data fly out to the hackers; Creator tilts (Z-7); kiss meme in the gap", on_screen_text: ["CHUMMI", "💋"], transition_in: evolve, transition_out: evolve, sfx: ["kiss-beso-sound-effect-19-11100.mp3 (MEME 1×, @4.32)"]}
- {id: 5, section: HOOK, spoken: "chalo main batata hoon ki tumhara app secure karte kaise hai", trigger: "secure", onset_s: 5.80, start_s: 4.44, tone: awe, mode: HOOK, pattern: "T-20 shield wrap + T-21 banner flip", family: B-15, visual: "A cyan shield grows around the phone with a light sweep, the cursors bounce away; the banner chip flips KISSING HACKERS → SECURE ✓", on_screen_text: ["SECURE ✓", "SECURE"], transition_in: evolve, transition_out: evolve, sfx: ["Zoom In Riser.wav", "Cinematic Hit 4.wav", "Short Shine 2.wav"]}
- {id: 6, section: HOOK, spoken: "launch se pehle na ye 7 test zaroor kar lena", trigger: "7", onset_s: 7.90, start_s: 6.82, tone: hype, mode: HOOK, pattern: SM-8 (big), family: B-12, visual: "A big numbered 7-segment shield rises over the dimmed phone; Z-1 punch on '7'", on_screen_text: ["7 TEST", "0/7"], transition_in: evolve, transition_out: evolve, sfx: ["Camera Quick Zoom Shoot - OhmLab.wav"]}
- {id: 7, section: HOOK, spoken: "saatwa sabse khatarnaak hai", trigger: "khatarnaak", onset_s: 10.23, start_s: 9.43, tone: warn, mode: HOOK, pattern: "SM-8 red 7", family: B-12, visual: "Segment 7 pulses red with a ☠ sticker and a shake: the open loop", on_screen_text: ["SABSE KHATARNAAK", "☠️"], transition_in: evolve, transition_out: evolve, sfx: ["MidrangeAlarmWarni PE419101.wav"]}
- {id: 8, section: LOOP, spoken: "reel end tak dekhoge na to saare prompts tumhe DM mein bhej dunga", trigger: "DM", onset_s: 12.97, start_s: 10.79, tone: hype, mode: HOOK, pattern: CAP-CHUNKY loop, family: B-7, visual: "Loop captions; the banner rockets up and the shield docks to the top-left corner", on_screen_text: ["END TAK", "DEKHOGE NA", "PROMPTS", "DM MEIN", "BHEJ DUNGA"], transition_in: evolve, transition_out: T-04, sfx: ["Swoosh 06.wav"]}
- {id: 9, section: S1, spoken: "sabse pehla rate limiting", trigger: "rate", onset_s: 14.55, start_s: 13.95, tone: explain, mode: D, pattern: "T-04 + P-50", family: B-13, visual: "Panel drop onto the Data Stage; title '1 Rate limiting'; an API door with a yellow LIMIT gate; normal requests (cyan) flow in", on_screen_text: ["1 Rate limiting", "API", "LIMIT"], transition_in: T-04, transition_out: evolve, sfx: ["Fast Swish Movement.wav (LIST CUE)", "Tech Appear 1.wav"]}
- {id: 10, section: S1, spoken: "taaki tumhare API isko spam na kar paaye", trigger: "spam", onset_s: 16.51, start_s: 15.29, tone: explain, mode: D, pattern: P-50, family: B-13, visual: "A flood of red bot requests slams the LIMIT gate and bounces back; SPAM ✕ stamp; shield segment 1 turns green", on_screen_text: ["🤖 bots", "SPAM ✕"], transition_in: evolve, transition_out: T-12, sfx: ["Data sound effect.mp3", "HitSmack CTE01_79.4.wav"]}
- {id: 11, section: S2, spoken: "doosra, har ek input check karo", trigger: "input", onset_s: 18.48, start_s: 17.40, tone: explain, mode: D, pattern: P-51, family: B-13, visual: "Title '2 Input check'; a SERVER box with a 'format ✓' slot; a valid input chip slides toward it", on_screen_text: ["2 Input check", "SERVER", "creator@mail.com"], transition_in: T-12, transition_out: evolve, sfx: ["woosh 01"]}
- {id: 12, section: S2, spoken: "ki tumhare server input se match kar raha hai ya nahi", trigger: "match", onset_s: 20.80, start_s: 19.44, tone: win, mode: D, pattern: P-51, family: B-13, visual: "The slot glows green; the valid input turns ✓ and enters the server", on_screen_text: ["format ✓", "creator@mail.com ✓"], transition_in: evolve, transition_out: evolve, sfx: ["Correct Answer 2fast.wav"]}
- {id: 13, section: S2, spoken: "warna reject kar daalo", trigger: "reject", onset_s: 21.98, start_s: 21.74, tone: warn, mode: D, pattern: "P-51 + P-63", family: B-14, visual: "A weird input (😈😈 ??!!%%) hits the slot, turns red and is thrown out; REJECT ✕ stamp; segment 2", on_screen_text: ["REJECT ✕"], transition_in: evolve, transition_out: T-12, sfx: ["Interference Flicker 1.wav"]}
- {id: 14, section: S3, spoken: "teesra, code commit karte karte na", trigger: "commit", onset_s: 23.48, start_s: 22.62, tone: warn, mode: D, pattern: P-52 (commit), family: B-13, visual: "Title '3 API keys'; a git commit card (index.html ✓, app.js ✓, 🔑 .env · API_KEY in red) heads toward a public repo surrounded by hacker cursors", on_screen_text: ["3 API keys", "git commit", "🔑 .env · API_KEY", "public repo"], transition_in: T-12, transition_out: evolve, sfx: ["Mountain Audio - Typing Sound 3.wav"]}
- {id: 15, section: S3, spoken: "APIs ki commit mat kar dena", trigger: "mat", onset_s: 25.32, start_s: 24.40, tone: warn, mode: D, pattern: "P-52 + P-63", family: B-14, visual: "The key row pulses red; a ✋ plus a DON'T COMMIT 🔑 stamp; the key is pulled into '🔒 secret safe ✓'; segment 3", on_screen_text: ["DON'T COMMIT 🔑", "🔒 secret safe ✓"], transition_in: evolve, transition_out: T-17, sfx: ["HD - Punch Sound Effect.mp3", "Good Answer.wav"]}
- {id: 16, section: ASIDE, spoken: "make sure to add this one prompt that I'll give you in the end of the reel", trigger: "prompt", onset_s: 27.18, start_s: 25.92, tone: hype, mode: F, pattern: "T-17 + Mode I", family: B-3, visual: "Pop-back to Creator; a top-band 'Secret-scan prompt' card (blurred teaser) and a yellow END OF REEL ⏳ chip that pulses on 'end'", on_screen_text: ["🔒 Secret-scan prompt", "END OF REEL ⏳"], transition_in: T-17, transition_out: T-04, sfx: ["Swoosh 02.wav", "Game Pop Up 2.wav"]}
- {id: 17, section: S4, spoken: "chautha, jo bhi package install kar rahe ho na", trigger: "install", onset_s: 30.03, start_s: 28.95, tone: explain, mode: D, pattern: P-53 (versions), family: B-13, visual: "Panel drop; title '4 Package check'; an 'npm install' chip; four 📦 packages with '?' tags; auth-lib flagged 'old ⚠'", on_screen_text: ["4 Package check", "npm install", "old ⚠"], transition_in: T-04, transition_out: evolve, sfx: ["Fast Swish Movement.wav (LIST CUE)", "Mountain Audio - Typing Sound 7.wav"]}
- {id: 18, section: S4, spoken: "ek baar version check zaroor kar lena", trigger: "version", onset_s: 31.29, start_s: 31.01, tone: win, mode: D, pattern: P-53, family: B-13, visual: "A 🔍 sweeps the shelf; every box turns '✓ checked', auth-lib flips to 'updated ✓'; segment 4", on_screen_text: ["✓ checked", "updated ✓"], transition_in: evolve, transition_out: T-12, sfx: ["Digital Scan.wav", "Selection Click.wav"]}
- {id: 19, section: S5, spoken: "paanchva, error aate hi na user ko tumhare code ki details dikhne lag jaati hai", trigger: "details", onset_s: 35.31, start_s: 32.65, tone: warn, mode: D, pattern: P-54, family: B-13, visual: "Title '5 Error messages'; a red error window glitches in with blurred, illegible code lines; a 😱 user; a yellow highlight box and 'tumhara code 👀'", on_screen_text: ["5 Error messages", "⚠ Error", "tumhara code 👀"], transition_in: T-12, transition_out: evolve, sfx: ["glitch-2025-01-08-02-40-44-utc/Glitch 02.wav", "Marker Swipe 9.wav"]}
- {id: 20, section: S5, spoken: "uski jagah ek simple message dikha dena", trigger: "simple", onset_s: 37.03, start_s: 36.45, tone: win, mode: D, pattern: P-54, family: B-13, visual: "The window flips to a friendly card: 😅 'Oops! Kuch galat ho gaya' with a Try again button; simple ✓; segment 5", on_screen_text: ["Oops! Kuch galat ho gaya", "Try again", "simple ✓"], transition_in: evolve, transition_out: T-12, sfx: ["Short Shine 3.wav"]}
- {id: 21, section: S6, spoken: "chhatha, file upload pe na ek size limit laga do", trigger: "limit", onset_s: 40.35, start_s: 38.30, tone: explain, mode: D, pattern: P-55, family: B-13, visual: "Title '6 File uploads'; a drop zone takes photo.jpg; a 4K movie swells past the zone; the SIZE LIMIT bar slams across it; TOO BIG ✕; segment 6", on_screen_text: ["6 File uploads", "photo.jpg ✓", "movie_4K.mp4", "SIZE LIMIT", "TOO BIG ✕"], transition_in: T-12, transition_out: T-17, sfx: ["Pop Popping Down.wav", "electric-hit…/Electric Hit 3.wav"]}
- {id: 22, section: JOKE, spoken: "warna tumhara app hi log Google Drive jaise use karne lag jaayenge", trigger: "Drive", onset_s: 42.53, start_s: 41.10, tone: mock, mode: F, pattern: "T-17 + Mode I + Z-2", family: B-14, visual: "Pop-back; a storage card fills as files rain in, renames itself 'Google Drive 2.0 🤡' with a NOT A DRIVE 🤦 stamp; crash zoom on Creator; Fahh in the gap", on_screen_text: ["📱 your app", "Google Drive 2.0 🤡", "FULL 💥", "NOT A DRIVE 🤦"], transition_in: T-17, transition_out: T-14, sfx: ["Swoosh 06.wav", "zoom-2025-05-09-19-11-57-utc/Zoom 2.wav", "Fahh - Sound Effect  SowaSFX - SowaSFX.mp3 (MEME 1×, @43.55)"]}
- {id: 23, section: S7, spoken: "aur saatwa, aur ye sabse khatarnak hai", trigger: "khatarnak", onset_s: 45.13, start_s: 43.98, tone: warn, mode: S-DARK, pattern: "T-14 + red badge", family: B-12, visual: "Shrink-zoom into a red alarm stage; a red '7' badge rises, ☠ sticker", on_screen_text: ["7", "☠️"], transition_in: T-14, transition_out: evolve, sfx: ["Fast Swish Movement.wav (LIST CUE)", "Tension Riser 1.wav"]}
- {id: 24, section: S7, spoken: "just make sure ki tumhara user, app ke andar", trigger: "user", onset_s: 46.95, start_s: 45.71, tone: explain, mode: S-DARK, pattern: P-56, family: B-13, visual: "Title '7 Whose data?'; a User A card; a dashed 'your app' frame draws around the stage", on_screen_text: ["7 Whose data?", "User A", "your app"], transition_in: evolve, transition_out: evolve, sfx: ["Appear Enter.wav"]}
- {id: 25, section: S7, spoken: "kisi aur user ka data to nahi dekh sakta hai", trigger: "nahi", onset_s: 49.49, start_s: 48.20, tone: win, mode: S-DARK, pattern: P-56, family: B-13, visual: "A User B's data card appears; A's cursor reaches for it; a red laser wall slams up: BLOCKED ✓; segment 7", on_screen_text: ["User B's data", "BLOCKED ✓"], transition_in: evolve, transition_out: evolve, sfx: ["Mouse Click.wav", "Electric Hit 2.wav"]}
- {id: 26, section: S7, spoken: "seedha privacy breach ho jaayegi", trigger: "privacy", onset_s: 50.62, start_s: 50.18, tone: warn, mode: S-DARK, pattern: "P-63 alarm + P-28", family: B-14, visual: "A red alarm wash, 'warna:' and a PRIVACY BREACH 🚨 stamp with a shake; then the shield completes 7/7 SECURE ✓", on_screen_text: ["warna:", "PRIVACY BREACH 🚨", "7/7 SECURE ✓"], transition_in: evolve, transition_out: T-17, sfx: ["boom-2025-01-08-02-40-38-utc/Boom.wav", "Level Up.wav"]}
- {id: 27, section: CTA, spoken: "sab ke sab prompts tumhare DMs mein bhej dunga", trigger: "DMs", onset_s: 52.91, start_s: 51.66, tone: cta, mode: F, pattern: "T-17 + P-27", family: B-10, visual: "Pop-back; the real SECURE PDF cover pops top-right on 'prompts'; a yellow DM bubble pops on 'DMs'", on_screen_text: ["SECURE PDF", "DM"], transition_in: T-17, transition_out: evolve, sfx: ["woosh 02", "A4 Printing Paper Paper Grab Smash.wav", "17571_download_iphone_notification…mp3"]}
- {id: 28, section: CTA, spoken: "comment kar do SECURE", trigger: "SECURE", onset_s: 54.47, start_s: 53.85, tone: cta, mode: F, pattern: P-68, family: B-7, visual: "Z-3 pull-out; 'comment kar do' + a 3D yellow SECURE key-cap pressed on the keyword; the PDF flies into the DM bubble (badge 1)", on_screen_text: ["comment kar do", "SECURE"], transition_in: evolve, transition_out: evolve, sfx: ["UI Click.mp3", "simple-whoosh-382724.mp3", "Short Shine 4.wav"]}
- {id: 29, section: CTA, spoken: "aur meri community join karna mat bhoolna", trigger: "join", onset_s: 55.56, start_s: 54.90, tone: cta, mode: I, pattern: community card, family: B-11, visual: "A community card slides into the top band, avatars pop, and the JOIN button is pressed → JOINED ✓", on_screen_text: ["Creator's community", "JOIN", "JOINED ✓"], transition_in: T-13, transition_out: evolve, sfx: ["UI opening.mp3", "Shine Collect.wav"]}
- {id: 30, section: CTA, spoken: "link is in the bio", trigger: "bio", onset_s: 57.16, start_s: 56.67, tone: cta, mode: F, pattern: P-29, family: B-4, visual: "A yellow chip 'community link → bio ☝️' bounces in; hard end at the last frame", on_screen_text: ["community link → bio ☝️"], transition_in: evolve, transition_out: T-16, sfx: ["Game Pop Up 3.wav"]}
```

### 5.1 Assets
- **Captured:** `img/pdf.jpg` (the SECURE PDF's source page).
- **Built live (generic, unbranded):** the phone app, the hacker cursors, the shield, the API door, the server slot, the commit card, the package shelf, the error and friendly windows, the drop zone, the storage card, the user cards, the community card.
- No logos are recreated. "Google Drive" appears as spoken text only.

## 6. Modes and transitions
| Range (s) | Mode | In | Out |
|---|---|---|---|
| 0–13.95 | HOOK (depth sandwich) | T-02 | T-04 |
| 13.95–25.92 | D (S1–S3) | T-04 | T-17 |
| 25.92–28.95 | F aside + inset | T-17 | T-04 |
| 28.95–41.10 | D (S4–S6) | T-04 | T-17 |
| 41.10–43.98 | F joke + inset | T-17 | T-14 |
| 43.98–51.66 | S-DARK red (S7) | T-14 | T-17 |
| 51.66–57.47 | F CTA + insets | T-17 | T-16 |

- **Zooms:** Z-7 (3.74 cut-out), Z-1 (7.88, 26.20, 51.66), Z-2 (42.98, the joke), Z-3 (53.87), Z-5 shakes on stamps.
- **Item swaps inside D:** T-12 push-up/rise.
- **Memes:** 2 (kiss @4.32, Fahh @43.55), each in a speech gap and each used once.

## 7. Fixed decisions
- 30 fps storyboard, 60 fps final.
- SFX ledger rules (PB §11.2): `Fast Swish Movement.wav` is the list cue (entries into the S1, S4 and S7 stages), every other file ≤ 2×, no file on consecutive cues.
- Bed: Trap Phonk Loop, the same as Reel 1 for series consistency. It enters on the T-04 at 13.95, sits 18–22 dB under the voice, and drops out for 0.6 s before "BLOCKED ✓" (49.49).

## 8. Build, checkpoint, QA, render
- Renderer: `renderer/build.py` → `render.html` / `render60.html`.
- Storyboard: `storyboard.config.json` → `mockup.html` (30 stills, 12 strips, animatic).
- **⛔ Stop for approval.** After approval: P10 render at 60 fps, P11 audio (ledger + bed, −14 LUFS / −1.5 dBTP), P12 assemble and QA.
