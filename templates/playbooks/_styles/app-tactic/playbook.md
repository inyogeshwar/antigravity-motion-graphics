# App-Tactic Explainer Playbook (v2, "Show the Tap, Elevated" edition, for Claude Opus 5.5)

> **In this plugin:** this file is the whole playbook: every measured value and recipe from the 5 reference reels is in it, and there is no other playbook file to open. Frame counts are measured at each reel's own rate: **dj1 and dj2 at 24 fps; dj3, dj4 and dj5 at 30 fps** (the reel is named beside every number). The motion tokens in §10 are converted to **30 fps**, the render rate; convert anything else with t = f / fps. Positions are on **1080×1920** (sources 720×1280, scaled ×1.5). The per-reel notes cited here (`dj1…dj5`) are not shipped. Sounds are picked by id from SOUNDS.md; commands are in the edit skill's REFERENCE.md. `FACE(n)` / `FACE0` are the face boxes the page gives you (with `head_top` and `chin`).

**Purpose:** you (Claude) receive a talking-head video of the creator plus its script. Use this document to **ideate and build** every format choice, hook title, caption, screen walkthrough, UI mock, chart, transition and sound, then edit the Reel so it looks and sounds like a fast, punchy, dark-studio **platform-tactic explainer**: the speaker says the claim to camera, then **the screen shows the tap** (the real app, the real button, the number moving), built with such craft that the viewer can't look away: every tap lands like a button you can feel, every number slams, and the person keeps moving through the screen.

**What v2 is:** a frame-by-frame analysis of 5 finished reels by Devin Jatho (@devinjatho, a US content-marketing coach for creators and personal brands): dj1 "Never post on Instagram without Linking Reels" (75.8 s), dj2 "Followers hooks from sh*t to gold, part 1", a hook makeover of another coach's reel (103.2 s), dj3 "Instagram's big d*ck update": clickable links, 3 ways to use them (76.2 s), dj4 "You finally went viral, don't f*ck it up": the 72-hour story play (47.5 s), dj5 "Instagram cheat code": duplicate the draft, post one as a Trial Reel (35.9 s), **elevated ten times** by the best motion designer and creative director in the world: the tap-walkthrough grammar kept whole, with every tap, toggle, card and counter animated with anticipation, weight and follow-through; a speaker who moves through the screen (full frame → tile → circle → data card → cut-out → full frame) and is never gone for long; numbers that slam; verdict colours that sweep; labels you can read; and a punchy, fully scored sound design with no music. The analysis covered cut lists, layout and colour measurements, caption timing, motion recipes and audio; the contact sheets of every reel (the hook sheet and two body sheets each) were read for where the face sits while something is shown. All measured layouts, recipes and rules are kept. Where a reference reel and a direction disagree, **the directions win**.
- Every rule is either **observed** (the most consistent value chosen as the house standard) or a **fix** (something a reel got wrong that this playbook forbids), marked **(fix)**.
- **This style is not one layout.** One creator and one caption family carry **four formats** (§3.0): the tap walkthrough, the teardown, the chaptered explainer, the simulation.
- **And the speaker moves.** He opens **full frame** with the title on his chest; **leaves or shrinks** while the screen shows something (a profile-grid tile, a feed-post card, a circle above the copy, a wide data card above a chart, a cut-out over the result, a slide to one side beside a card); and **comes back full frame** for every opinion, turn, payoff and CTA (§3.1). Never one box from start to end.

**Measured sizes are floors, not targets.** The references set meaning-carrying labels at 16–24 px, ran a recording in the top 45% of a black frame and parked a 660 px grid on an empty canvas. On a phone that reads as empty or unreadable. So:
- **Captions:** `CAP-WIDE` font ≥ 76 px (its lines are scaled to one width, so short lines come out bigger); `CAP-SCREEN` ≥ 60 px.
- **The hero of a beat** (the recording, the chart, the card pair, the phone, the funnel) is **≥ 860 px wide** (x ≈ 110–970) and owns the middle of the frame; a recording is zoomed to fill the width.
- **Labels and numbers:** any label that carries meaning ≥ 44 px; text objects ≥ 60 px; counters ≥ 96 px font (≥ 70 px cap), their units ≥ 44 px.
- **A group** (a card pair, the people grid, a notification stack, the tiers) fills **x ≈ 80–1000**; never a small cluster in the middle of black.
- **No empty frame:** if more than half of y 200–1500 is plain background for more than ~0.7 s, zoom in, bring the next element, or bring the speaker back.
- **The face stays big:** a tight selfie stays full screen (move the text, not the video; hair may touch the top edge, eyes to chin always in); when the whole head must show, it goes in a designed box (the data card, a tile) on the style's canvas, **≥ 940 px wide** when it's the hero, never a narrow pillar, never over its own blurred copy.
- **Full screen or a box, never any footage or picture over its own blur** (Studio Standard): the creator's video either fills the frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground or scene) that it fills completely (cover-crop centred on the face). The same goes for every recording, screenshot, photo, diagram and clip: it fills the frame (cover-crop to the part that matters, or a push-in) or sits in a designed box on the style's own ground (its colour, gradient, texture, grid or drawn set). Never a sharp box over a blurred or darkened copy of itself, never a band padded with blurred bars: that hard rectangle inside the frame looks cheap. A tight selfie stays full screen: move the text, not the video; hair may touch the top edge, eyes to chin always in; when the whole head must show, use a box layout on the style's ground. A matte cut-out over a plate and a whole-frame blur transition are fine.
- **Full screen or a box, never their own blur** (Studio Standard): the creator's video either fills the frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground or scene) that it fills completely (cover-crop centred on the face). Never shrink it over a blurred or darkened copy of itself, never pad a band or box with blurred side bars, never set a card on their own blurred frame: that hard rectangle inside the frame looks cheap. A tight selfie stays full screen: move the text, not the video; hair may touch the top edge, eyes to chin always in; when the whole head must show, use a box layout on the style's ground. A matte cut-out over a plate and a whole-frame blur transition are fine.

**Never pale.** The creator's footage keeps its rich, dark, contrasty colour with deep blacks: never desaturated, faded or lifted. Washes and tints are short punctuation (≤ 10 f) and the skin comes back to full colour; desaturation is only for someone else's footage behind a circle (T-11), never for the creator.

### The feel (read this twice)
This is **a hyped-up friend grabbing your phone and saying "no, no, tap HERE"**. He's in a moody neon room, talking fast, swearing for punch, and the second he says "tap", the screen is in your face: the real app, a glowing cursor landing on the exact button, the toggle snapping on, the number rocketing up. Then he's back, mid-gesture, with a verdict: red for the mistake, green for the fix, gold for the win. It feels **urgent, insider and satisfying**, like watching someone unlock a cheat code in real time. Every tap clicks, every number slams, every layout change hits with a boom or a whoosh, and he keeps moving: full frame, into a tile, into a circle, into a card, back out at you. If it looks like a screen-recording with a voice-over, it's wrong; if it looks like a meme edit, it's wrong too.

**How to use this file:** follow §1 in order; look up visuals by ID (formats `FMT-…`, layouts `L-…`, hook formulas `HF-…`, hook visuals `H-…`, structure devices `SD-…`, families `G-…`, patterns `P-…`, elevated devices `EV-…`, transitions `T-…`, endings `E-…`); §2's craft never bends; everything else is a default you may adapt with a one-line reason.

**Who the reference creator is:** a young, high-energy US creator-coach who teaches **platform tactics** (new Instagram features, hooks, stories, funnels) to people building a personal brand. He talks **fast and casual** (3.2–3.7 words/s, every breath cut), swears for punch (starred on screen) and sells urgency ("never, ever, ever", "before it's too late", "you didn't even notice"). He films seated in moody lit sets (an RGB studio, a night-city window, a lit-shelf apartment) and lets the edit do the showing.

**Audience (ICP):** English-speaking creators, coaches and small-business owners on Instagram who want followers, leads and sales. They know the app but not the trick; they want to **see exactly where to tap**, see the number go up, and leave with one action for their next post.

**Style lineage:** a dark, neon app-tactic explainer in three layers:
1. **Claim layer (the face):** a full-frame tripod talking head in a lit set; wide heavy all-caps captions on the chest with one glowing highlight line; jump cuts disguised by punch-ins, reframes or a backlight colour swap.
2. **Proof layer (the screen):** the real app screen-recorded with a glowing tap cursor, or a drawn iOS/Instagram mock that simulates the tactic, or a data canvas (people grid, donut, funnel). Voice-over continues; the references left screens uncaptioned (the UI is the text); this edition runs every word in a compact band under the UI (`CAP-SCREEN`), never over the tap.
3. **Punctuation layer:** a verdict colour grammar (red = mistake, green = fix, gold = viral), booms and whooshes on every layout change, and a loop ending cut mid-sentence back into the hook.

### Creator directives
| # | Directive | Where it lives |
|---|---|---|
| D1 | **Ten times better, same soul.** Keep the tap-first, fast, urgent teaching; raise the craft: animation principles on every tap, toggle, card and counter; one hero per frame; the verdict colours as a story. Never a meme edit, never a slideshow of screenshots | The feel, §8.0 |
| D2 | **The speaker moves:** full frame at frame 0 and for every opinion, turn, payoff and CTA; into a tile, circle, post, data card or cut-out while the screen proves the point, then back out; **never gone for more than ~8 s**; frame 0 is never empty | §3.1 |
| D3 | **Seamless, running motion:** every cut lands on a word; screens flow into each other (blur-slides, a dive through the phone, pull-backs); something changes every ~1.5–2.5 s; nothing teleports, nothing sits after its point has landed | §8.0, §9 |
| D4 | **Sound is scored to studio standards:** a click on every tap (the list cue), a whoosh on every screen, a pop on every card, a roll and a slam on every number, a boom on every section and verdict. **No SFX file more than 2× in a reel** (the tap click excepted). **No music bed, ever** | §11 |
| D5 | **The whole face is always visible:** hair to chin in every layout, tile, circle, card and cut-out; a tight selfie stays full screen or goes in a designed box on the canvas, never a pillar, never over its own blur; **never pale** | §2, §3.3 |
| D6 | **Captions are seen:** every spoken word; `CAP-WIDE` just under the chin on the face, `CAP-SCREEN` under the UI on screens | §5 |
| D7 | **No imposed checks.** This file gives taste, recipes and reasons; you decide like the best editor and creative director in the world. Only craft never bends | §2 |

### The reference reels → this edition, at a glance
| Area | The reference reels | This edition |
|---|---|---|
| Hook | Face + title on the chest, a push-in, a hook object | The same, with the hook object **already moving on f0** (the toggle card tilting in, the cursor mid-arc), **≥ 5 changes by 3 s**, and the twist landing as a verdict colour (§6.0) |
| Taps | A cyan cursor lands, a ring pulses | **The magnetic tap** (EV-1): the cursor travels on an arc with anticipation, the control presses in and springs back, a ripple runs through the UI, the screen camera breathes toward it |
| Into the screen | Hard cut or sheet slide | **Dive through the phone** (EV-2): a 3D phone swings up from his chest and the camera flies through its glass into the recording; it pulls back out at the turn |
| Numbers | Count-ups land on the word | **Number slam** (EV-3): digits roll with motion blur, overshoot, and land with a glow flash and a 2-frame scale punch |
| Verdicts | Red, then green, by hard swaps | **Verdict sweep** (EV-4): the colour wipes across the object in reading direction; a ✕ cracks apart, a ✓ draws itself |
| Where we are | A chapter card in `FMT-CHAPTERS` only | **The step tracker** (EV-6) in every multi-step reel: dots that fill per step and all flash green at the payoff |
| The speaker | Tile, post, circle, share, cut-out; 17–25 s faceless runs | The same moves plus **the data card** (EV-8, he shrinks into a wide card above the chart and grows back); **≤ 8 s faceless** |
| Labels | 16–24 px on meaning-carrying labels | ≥ 44 px; counters ≥ 96 px font; heroes ≥ 860 px wide |
| Captions | On the face only, on the chest | **Every word:** `CAP-WIDE` just under the chin, `CAP-SCREEN` under the UI |
| Sound | 8–15 SFX + a sub/808 bed and a pad | **Scored**: a cue every ~1.0–1.5 s inside screens and data, booms on sections, silence before the payoff; **no bed, no pad, no drone** (§11) |
| Ending | Loop cut | **Seamless loop** (EV-7): the last frame matches frame 0's scale and colours, so the cut disappears |
| Colour | Moody, deep blacks, washes | The same, **never pale**: washes ≤ 10 f, skin back to full colour |
| Checks | MUST / NEVER lists, a QA checklist | **Craft only** (§2); the rest is the house grammar (§2.1) and your judgement |

### Formats at a glance (the movement in §3.1 applies to all four)
| Area | `FMT-TAP` tap walkthrough (dj1, dj5) | `FMT-TEARDOWN` copy teardown (dj2) | `FMT-CHAPTERS` chaptered explainer (dj3) | `FMT-SIM` tactic simulation (dj4) |
|---|---|---|---|---|
| Use when | Steps inside an app: a feature, a setting | Fixing a piece of copy (hook, caption, bio) | "N ways to use X", each with an example | A tactic whose payoff is a chain of events (views → profile → story → DMs → money) |
| Speaker while something is shown | **Absent** on the screen steps; returns as a **grid tile** (L-TILE) or a **cut-out over the result** (L-CUTOUT) | **Circle at top centre** (L-CIRCLE) over the dimmed subject footage, copy below | **Slides to one side** with a card on the other (L-SHARE); acted example scenes (L-EXAMPLE) | **Inside a feed-post card** (L-POST), then absent for the simulation |
| Speaker for hook, turns, payoff, CTA | Full frame (L-FULL) | Full frame | Full frame | Full frame |
| The picture | Real screen-recording + tap cursor; toggle cards; linked reel cards; donut on white | The copy as a text object edited live; people grid; the subject's clip | Neon funnel chapter card; reel cards beside the face; progress-bar metaphor; article highlight | Countdown, feed with climbing counts, story typed, testimonial cards, 3D phone with DMs and a receipt |
| Faceless share (observed) | 54% (dj1), 68% (dj5) | 33% | 23% | 73% |
| Ending | Loop mid-sentence | Keyword typed in a comment field | Keyword + "button will appear here" + loop | Keyword + loop |

### Quick index
| § | What |
|---|---|
| §1–§2 | Procedure; craft that never bends + the house grammar |
| §3 | Formats, layouts, the speaker's movement, framing the face, safe zones, one-camera adaptation |
| §4–§5 | Colour tokens and meaning (never pale); type and captions (`CAP-WIDE`, `CAP-WORD`, `CAP-EX`, `CAP-SOFT`, `CAP-SCREEN`, `TXT-OBJ`, titles, labels) |
| §6–§7 | The 10× hook, hook formulas, visuals, timing, endings; structure devices (steps, chapter card, live copy edit, verdict grammar, simulation chain, loops) |
| §8 | Graphics: the 10× layer, families `G-…`, patterns `P-…`, line → pattern lookup, density, assets, elevated devices `EV-…` |
| §9–§10 | Transitions `T-01…T-24`: recipes, grammar, map, budget; motion tokens, camera, layer order, finishing |
| §11–§12 | Sound (real ids, the ledger, no music); footage handling |
| §13–§14 | Output contract; worked examples (dj5, dj2) + cheat sheet |
| §15–§16, App. A | Look at your frames; build + render; evidence map |

---

## §1 Procedure (follow in order)

1. **Inventory.** Probe the footage; identify the setup (§12.1). Read `FACE0`: if the head top is within 60 px of the frame top or the chin is below y 1000, the footage is **tighter than this style's framing**; every layout then uses the fit in §3.3.
2. **Transcribe** with word timings. Captions are every spoken word as said (English, or romanised Hinglish as spoken), ALL CAPS, 2–4 words (§5.2, §5.9). App, feature and button names must match the real UI exactly ("Trial", "Link a reel", "Professional dashboard").
3. **Find the taps and the numbers:** every app action (open, tap, toggle, duplicate, post, link, comment) and every number (followers, views, %, hours, $) with its onset. Every action gets its screen; every number its counter (M3).
4. **Choose the format** (§3.0) with one line of reasoning.
5. **Segment:** `HOOK` (0–~3.5 s), `TWIST/STAKES`, `PROOF`, body `STEP`s / `CH`apters / `FIX`es / `SIM` beats, `TURN` ("but what makes this so good?"), `PAYOFF`, `CTA` / `LOOP`.
6. **Plan the speaker map** (§3.1): every beat L-FULL, absent, or a shown layout. Full frame at frame 0 and for every opinion, turn, payoff and CTA; no faceless run over 8 s (M5); the data card (EV-8) for numbers he talks over.
7. **Classify every sentence** with a line type (§8.4) and mark its trigger (the verb the tap lands on, the noun the card shows, the number the counter lands on).
8. **Ideate 3 hooks** (§6.0): formula, frame-0 picture (face + title on + a hook object already moving), the first 3 s of events (≥ 5), the twist as a verdict, the open loop. Recommend one.
9. **Fill the beat sheet** (§13), a visual change every ~1.5–2.5 s: layout, speaker state, pattern, device, caption (`CAP-WIDE` on the face, `CAP-SCREEN` on screens), transition, SFX.
10. **Transition map** (§9.3) and budget (§9.4).
11. **Assets** (§8.6): real recordings of the creator's own account, the real source screenshot, his own reels and profile, drawn mocks for the rest. Never invent a number, a famous sender or a receipt.
12. **The 10× pass and the score** (§8.0, §8.7, §11): for every beat, its hero and how it anticipates, lands and follows through; where the magnetic taps, the dive, the number slams, the verdict sweeps, the step tracker and the data card go; then score every event and log the sound ledger. **Attack the plan:** where is he gone for more than ~6 s? Where is a frame half empty or a label small? Where does a tap happen without its click, or a number without its slam? Where does the picture sit still? Fix it in the plan.
13. **Show the creator** the plan and stills (§13.3).
14. **Build section by section,** look at the landing frames and every face crop (§15), score, render (§16).

---

## §2 Craft that never bends
- **The whole face is always visible:** hair to chin with the margins in every layout, punch, reframe, tile, post, circle, card and cut-out (M6); a tight selfie stays full screen (move the text, not the video) or goes in a designed box on the canvas, never a pillar, never over its own blur. Captions may cross the face.
- **Text never sits on text:** no caption over the tapped control, a counter or a label; stickers beside the face, never on it.
- **Sound in sync:** every SFX on the frame its picture lands (a tap ±2 f, a counter on its last syllable), never on a consonant; nothing louder than the voice.
- **True and exact:** real recordings, real sources, real numbers or labelled illustrations; no famous senders; private data blurred; every word and button name spelled right (M11, M14, N4, N5).
- **Readable at phone size:** captions ≥ 76 px (`CAP-SCREEN` ≥ 60 px), labels ≥ 44 px, counters ≥ 96 px font, the hero ≥ 860 px wide.
- **Loudness:** −14 LUFS integrated, true peak ≤ −1.0 dBTP; end on purpose (the loop or the keyword), no tail.

Everything else is direction. You decide; write your reasons into the plan.

### 2.1 The house grammar (what makes it this style)
Not checks: this is what the five reference reels do every time, and why it works. Break one only with a reason in the plan. (The IDs are kept because other sections cite them.)
- M1. **Frame 0 is the speaker full frame, mid-word, with the hook title already on his chest** (H-1), as in 5/5 reels. Never an empty set, a blank canvas or a fade from black. Something moves by f3–f6.
- M2. **Zero dead air:** 3.2–3.7 words/s, no gap over 0.5 s (measured longest 0.43–0.50 s). One deliberate beat ≤ 0.9 s is allowed before a reveal ("…let's take a look", dj2). Cuts on word boundaries, usually sentence or clause starts.
- M3. **Every app action gets its real screen and every number its counter, on the word.** A tap lands on the spoken verb (±2 f); a screen changes on "tap on / open"; a counter lands on the number's last syllable; a card lands within ~0.5 s of its noun.
- M4. **Something changes every ≤ 2.5 s** (measured mean shots 1.6–3.2 s, longest still 2.4–3.6 s). A layout held longer (dj2's circle, 14.6 s) gets a text or graphic event every 1–2 s.
- M5. **The speaker moves, and comes back** (§3.1). **(fix)** No faceless run over **8 s**: the references ran 17–25 s faceless (dj1 38.75–56.0, dj2 52.6–75.0, dj4 19.0–44.7, dj5 5.1–29.7) and those stretches sag. After ~6 s of screen he returns for one line as a cut-out, circle, tile, data card (EV-8) or full frame.
- M6. **The whole face is always visible:** hair to chin, at every punch-in, reframe, tile, post card, circle and cut-out. How far a zoom goes is decided by the face, not the frame (§3.3). When footage is tighter than the layout allows, **keep it full screen and move the text, or put it in a designed box on the canvas that it fills (cover-crop on the face)**; never shrink it over a blurred copy of itself; the hero box stays ≥ 940 px wide, never a narrow pillar; eyes to chin always in. **(fix)** dj3's reframes cut the hair at the left edge (35.3–36.3 s) and the hair and half the face at the right edge (55.0–60.2 s, punch ~170%). **Captions may cross the face;** no other checks.
- M7. **Readable at phone size:** chest captions ≥ 76 px font (measured 70–130); `CAP-SCREEN` ≥ 60 px; text objects ≥ 60 px; any label that carries meaning ≥ 44 px; counters and chart numbers ≥ 96 px font; the hero ≥ 860 px wide. **(fix)** The references set meaning-carrying labels at 16–24 px ("% POTENTIAL CLIENTS", profile tags, donut labels, notification and testimonial bodies). Small UI texture is fine only when a big label or number carries its meaning.
- M8. **Every spoken word is on screen.** On face layouts `CAP-WIDE` (L-FULL, L-SHARE, L-TILE, L-POST, L-EXAMPLE, L-DATACARD). Over screen-recordings, mocks and canvases the words run in `CAP-SCREEN` (§5.9), a compact band under the UI, **never over the tapped control, a counter or a label** (the references left screens uncaptioned, dj1, dj5; the creator's direction: every word is seen). A word steps out of the captions only while a big title, label or typed text carries that same line.
- M9. **One verdict grammar per reel** (§4.3): red = mistake / warning, green = fix / solved / money, gold = viral / result, cyan-blue = the feature and the tap; on text, boxes, canvases and the tint of the returning face (dj2).
- M10. **Every promise is paid off on screen:** "3 ways" shows 3 chapters; the chapter graphic assembles at the end; the CTA keyword is typed on screen (dj2, dj3, dj4).
- M11. **Facts only from the script or supplied sources.** Counters land on the real value; recordings are the real app; the source is the real article. Illustrative numbers only where the script says they're an example ("3K → 9K → 27K" for "3x the followers"), never posing as the creator's stats.
- M12. **Audio:** −14 LUFS integrated, **true peak ≤ −1.0 dBTP**. **(fix)** dj1 +0.4, dj2 +0.7, dj3 +0.1 dBTP.
- M13. **End on purpose:** a hard cut mid-sentence that loops into the hook (E-1, made seamless by EV-7) or a hard stop on the CTA's last word (E-2). No end card, no black tail (5/5).
- M14. **Spelling:** every word right; app and button names exactly as the app shows them. **(fix)** dj2 shipped "ACHIVE". Swears starred on screen ("SH*T", "F*CK").

**Never in this style:**
- N1. An empty or near-empty frame, at the start or mid-reel; a hero smaller than 860 px wide in a sea of background. **(fix)** dj2's data canvas (56–64 s: a small grid and a ~30 px label on dark red), dj4's countdown alone on black (10.3–11.3 s), dj5's recording (16–21 s: UI in the top 45%, the rest black), dj3's funnel cards (top and bottom thirds empty). Zoom recordings to fill the width, make the chart or chapter graphic the hero (≥ 70% of the width), and put the speaker or a second element in any empty half.
- N2. A head cut by a frame, tile, post-card or circle edge, or a punch that brings the hair within 40 px of an edge (M6).
- N3. `CAP-WIDE` over screens or canvases, or any caption over the tapped control, a counter or a label (M8); highlight colour on more than one line of a caption block.
- N4. **(fix)** Fake messages, DMs, receipts or notifications "from" real famous people, or their avatars as decoration (dj2's payment banners from named investors; dj4's DMs and story avatars of named celebrities). Use the creator's own real screenshots, or generic senders ("New client") in a simulation.
- N5. Unblurred private data in any recording or testimonial (dj4 blurred them; keep doing it).
- N6. **(fix)** Third-party plugs or "tutorial for another app" slots (dj3's CTA sent viewers to another app's tutorial). The CTA slot is always the creator's own keyword, resource or loop.
- N7. Graphics on the face. Chest overlays live in y 870–1480; stickers sit beside the face. (Captions are the exception.)
- N8. Invented numbers posing as real, or a "proof" screenshot that isn't the real source (M11).
- N9. A true peak above −1.0 dBTP, or a fade-out tail.
- N10. Comedy or cartoon sounds and voice clips. The energy is booms, whooshes, glitches and UI clicks (§11).
- N11. Copyrighted songs or film clips. Someone else's reel only as the subject of a teardown they asked for (dj2's CTA invites it), with its own audio.
- N12. More than one hero at a time: one screen, card or chart, plus the speaker, plus at most one label or counter.
- N13. A pale creator: desaturated, faded, milky-black or washed-out footage of the speaker (a wash is ≤ 10 f of punctuation; T-11's desaturation is for someone else's footage only).
- N14. Music of any kind: a bed, a pad, an 808 loop, a drone, or a riser held under the voice (the references ran a bass bed; we never do).

---

## §3 Formats, layouts and the speaker

### 3.0 Choosing the format
| The script… | Format |
|---|---|
| …walks through steps inside an app or a setting | `FMT-TAP` |
| …critiques and rewrites a piece of copy | `FMT-TEARDOWN` |
| …lists N tactics, each "use it for X" with an example | `FMT-CHAPTERS` |
| …promises an outcome that unfolds over time (after you post, after you go viral) | `FMT-SIM` |
| …is an opinion with no app steps | `FMT-CHAPTERS` with one chapter per point, cards beside the face; never a bare talking head |

A format may borrow one device from another for one beat (a tap step inside `FMT-CHAPTERS`, a counter inside `FMT-TEARDOWN`); never run two formats' main layouts side by side.

### 3.1 The speaker's movement (every reel)
| Beat | Speaker | Seen |
|---|---|---|
| **Hook (f0 → twist, ~3–3.7 s)** | **L-FULL** mid-word, title on the chest; a slow push-in 100 → 115–125% over 1.8–2.5 s, or a punch-out settle (dj1 f0–9) | 5/5 |
| **Twist / stakes** | **L-FULL**, a cut or punch on the twist word, title off, chest captions on | dj1 3.0, dj3 3.4, dj4 4.87, dj5 3.57 |
| **Proof / platform beat** | **L-SHARE** (he slides aside, a card takes the other side; dj3 4.2–9.4), **L-POST** (he becomes a post under the activity pill; dj4 11.3–19.0), or absent on the article (dj1 4.5–8.17) | — |
| **Steps / data / simulation** | **Absent** (screen or canvas), **L-CIRCLE** above the copy (dj2), or **L-TILE** in his grid (dj1 33.0–37.4) | — |
| **Data while he still talks** (this edition) | **L-DATACARD** (EV-8): he shrinks into a wide card in the top half while the count, chart or card pair rises below; back to full frame on the next opinion | — |
| **A key line inside a screen run** | **L-CUTOUT**: he swings in over the dimmed result and talks about the highlighted thing (dj1 56.0–60.8); (fix M5) use it whenever a screen run reaches ~6 s | dj1 |
| **Turn / opinion / judgement** | **Back to L-FULL** (dj1 19.75 "But… what makes this feature so good", dj2 24.96, 46.71) | — |
| **Payoff** | **L-FULL** with the result on his chest (dj5 phone cards + FREE; dj3 funnel carried onto the chest) | 5/5 |
| **CTA** | **L-FULL** with the comment field typing the keyword, or **L-BLURCARD** for a resource card (dj3 66.07–69.4), then L-FULL for the last line | 4/5 |

- **Measured cycles:** dj1 full → absent → full → tile → full → absent → cut-out → absent → full; dj2 full → absent → circle → full → skit → circle → full → absent → circle → full.
- **Moves:** in with T-09 (into tile/post), T-11 (circle), T-03 (share), T-10 (cut-out) or EV-8 (data card); into a screen run with EV-2 (the dive) once per reel; back with a hard cut, T-07 glitch, T-19 white haze, T-21 static or the data card growing back, on a sentence start. Every shrink and return is **eased with follow-through** (§8.0), never a hard cut into a box.
- **Budget:** 2–4 shown-layout entries per 60 s; each full-frame stretch 1.5–6 s; never two layout moves within 1 s. A screen resumes where it was when a step continues after a face beat.

### 3.2 Layouts
| ID | Layout | Seen | Face position (1080×1920) | With it |
|---|---|---|---|---|
| **L-FULL** | Full-frame talking head | all | head top 296–454, eye line 560–700, face centre x 535–567 | chest captions y 870–1140; chest graphics y 870–1480; stickers beside the face |
| **L-SHARE** | Reframed to one side + card on the other | dj3 | punched, face centre x 790–810 (right) or ~190–260 (left), eyes ~620–640 | reel card x 136–460 or 532–838, y 246–1025 |
| **L-TILE** | Inside a tile of his own profile grid | dj1 | tile x 200–890, y 333–1490 (frame at ~64%), eyes ~710 | neighbouring tiles; counter over the tile's chest |
| **L-POST** | Inside a feed-post card | dj4 | card x 71–1010, y 648–1920; eyes ~875 zoomed; at the low position the chin ≥ 250 px above the bottom | activity pill above (x 165–904, y 739–849), stories row above it |
| **L-CIRCLE** | Circle at top centre + copy below, over dimmed footage | dj2 | Ø 410–465, centre x 540, top y 431–486, bottom ~890–950 | text block x 162–918, y 1100–1270; background: the style's dark canvas with a soft verdict-tinted glow (never any footage blurred behind the circle) |
| **L-CUTOUT** | Matted speaker over the dimmed screen | dj1 | waist up in the lower 60%: head top 724–780, eyes 940–1010, face x 460–540 | UI dimmed ~50%; a highlight box behind his hair (y 430–832) |
| **L-BLURCARD** | Card over him, **dimmed, not blurred** (this edition: the reference blurred him; Studio Standard: never a card on their own blurred frame) | dj3 | dimmed to ~55%, sharp, ≤ 3.5 s; or the card on the dark canvas with him gone | dark glass card x 140–940, y 612–1100, r ≈ 30 |
| **L-DATACARD** (this edition, adaptation) | He shrinks into a wide glass card in the top half; the data owns the bottom half | built from L-TILE / L-POST's shrink | card x 70–1010, y 170–760 (≈ 940 × 590), r ≈ 34, a 2 px `feature` rim glow; whole head inside with ≥ 40 px above the hair, eyes ≈ 430, full colour | the chart, counter, card pair or recording in y 820–1500, ≥ 860 px wide; `CAP-SCREEN` under it |
| **L-EXAMPLE** | An acted "example reel", full frame | dj3 (dj2 skit) | head top ~440, eyes ~699, face x ~537 | example captions (CAP-EX), camcorder REC frame, link card |
| **L-SCREEN** | Full-screen recording or source screenshot | dj1, dj3, dj5 | absent | tap cursor, dimmed rows, highlight; voice-over |
| **L-CANVAS** | Drawn canvas: data-viz, chapter card, countdown, white chart canvas | dj2–dj5 | absent | one hero graphic |
| **L-PHONE** | 3D phone mock, or a phone in hand | dj3, dj4, dj5 | only as content inside the phone (150–250 px) | notification stacks, a donut beside it |

**Divided screens:** no reel splits the screen. The divided moments are **pairs on one plane**: two reel cards side by side (dj1 linked cards, dj2 before/after, dj5 Normal vs Trial), a card + check box (dj2), a card beside the face (L-SHARE). Keep pairs as pairs; never merge them into one box.

### 3.2a Layout diagrams
```
L-FULL (house)                    L-SHARE (dj3)                    L-CIRCLE (dj2)
┌──────────────────┐ 0            ┌──────────────────┐             ┌──────────────────┐
│     ( head )     │ ← top 300–450│┌────┐   ( head ) │ ← face x 800│   ╭────────╮     │ ← circle top 431–486
│      face        │ ← eyes 560–700││card│    face   │             │   │  face  │     │   Ø 410–465, x 540
│                  │              ││reel│            │             │   ╰────────╯     │ ← bottom ~890
│  WIDE CAPTION    │ ← y 880–1140 │└────┘   CAPTION  │             │ HOOK COPY LINE 1 │ ← text x 162, y 1100
│  HIGHLIGHT LINE  │              │                  │             │ ▢WRONG LINE 2▢ ✕ │   red box / green ✓
│ [chest graphic]  │ ← to y 1480  │                  │             │ line 3 (dimmed)  │
│ (platform UI)    │ ← y 1540–1920│ (platform UI)    │             │ (platform UI)    │
└──────────────────┘ 1920         └──────────────────┘             └──────────────────┘
```

### 3.3 Framing the face (every layout, every reel)
The person's size and place are decided by the face. Read `FACE0` once and `FACE(n)` wherever a punch or reframe moves.

| Layout | Rule |
|---|---|
| **L-FULL** | Hair ≥ 40 px below the top at every punch; a punch (115–130%) is anchored on the face centre and stops short if the hair would get closer. |
| **L-SHARE** | The pan stops with the face box inside x 300–780: hair and far ear ≥ 40 px inside the edge. **(fix)** dj3 punched to 170% and lost the hair and half the face; the house punch is **≤ 135%**. If the card needs room, shrink the card, not the margin. |
| **L-TILE / L-POST** | The whole head inside the tile or card with ≥ 40 px above the hair; the post's side edges never touch the face; at the low position the chin is ≥ 250 px above the bottom (observed). |
| **L-CIRCLE** | Hair top ≥ **8% of the diameter** (≈ 35 px on 430) below the circle's top; chin ≥ 10% above its bottom; the head (hair to chin) ≤ 62% of the diameter: "hair and the full face sit comfortably in the circle". **(fix)** dj2's hair sat 15–20 px under the edge and reads as touching. |
| **L-CUTOUT** | The matte keeps the whole head and hair; the head top ≥ 120 px below the highlight box's top, so the box reads *behind* him. |
| **L-DATACARD** | The whole head inside the card with ≥ 40 px above the hair and ≥ 60 px below the chin; the footage cover-cropped into the card, centred on the face (no gap, no blurred bars), on the style's canvas (never his own blurred frame), never a narrow crop. |
| **Footage too tight (any layout)** | **The selfie / tight fix:** when the hair or chin would leave the frame or box (a handheld selfie close-up, a punch on tight footage), **keep full frame full screen** (hair may touch the top edge, eyes to chin always in; move the title and chips, not the video; limit the punch) **or move him into a designed box** on the canvas (the data card, a tile) that the footage fills, cover-cropped on the face. **Never a blurred copy of the same frame behind a shrunk frame**, never a narrow pillar, never pad a box with blurred bars. Captions may cross the face; nothing else checks it. |

### 3.4 Format notes (the shapes; §7 has the devices, §14 the full plans)
- **`FMT-TAP` (dj1, dj5):** L-FULL hook (title + toggle) → twist → proof (article) → L-SCREEN steps, one screen per verb (zoomed 110–130%, other rows dimmed ~40%, cursor tap on the verb; a real button may be relabelled as a joke, dj5 "Post" → "Wait! ✋") → L-CUTOUT or L-TILE for a key line → result canvas (linked cards with counters; or a white canvas with a 3D phone at the right edge and a donut, dj5 22.0–29.7: the phone may be cut by the frame, a face never) → L-FULL payoff → loop.
- **`FMT-TEARDOWN` (dj2):** L-FULL hook (series title, before/after cards) → the subject (profile card, 60 s countdown, count-up) → the subject's clip with its own audio → L-CIRCLE + the copy → mistake 1 → L-FULL judgement → fix 1 → recap card + ✓ → mistake 2 → people-grid canvas → L-CIRCLE: the new copy typed in green → L-FULL payoff and keyword CTA. The subject's footage behind the circle is dimmed, blurred and washed in the current verdict colour.
- **`FMT-CHAPTERS` (dj3):** L-FULL hook → instant proof on L-SHARE → B-roll (template profile counting, the article) → the promise with the chapter graphic on his chest → per chapter: chapter card → explanation (L-FULL / L-SHARE) → example (L-EXAMPLE) → … → the chapter graphic assembles and slides onto his chest → CTA → loop.
- **`FMT-SIM` (dj4):** L-FULL emotion-arc hook → the secret stat with a sticker beside the face → countdown → L-POST with the climbing activity pill → push-in to "Your story" → story mock → 3D phone (notifications, viewers, DM, receipt) → L-FULL CTA via static → loop. **(fix M5)** dj4 ran 25.6 s faceless: after the story mock, return to L-FULL or L-CUTOUT over the phone for "every single person that saw all that social proof is now a warm lead".

### 3.5 Safe zones (Instagram)
- Key text inside **x 64–1016, y 110–1540**; the bottom ≈ 380 px holds only footage, UI texture or a post's lower edge; the right ≈ 110 px below y 1000 holds no text.
- Chest captions: block centre y **960–1010** (line 1 top at y 870–995); move within y 880–1140 to clear a hand, never above the chin.
- Chest graphics y 870–1480; beside-the-face stickers x 300–530 or 600–1000 at y 630–850, never over the face box.

### 3.6 Adaptation: one person, one camera (an adaptation, not filmed this way in the references)
The references use what a single creator filming themselves may not have: two backlight colours swapped between takes (dj1), a 3/4 second camera (dj1 19.75–20.8), a second room and wardrobe for the acted example (dj3) and the skit (dj2), a filmed hand holding a phone (dj3 40.0–44.8). The same grammar with only devices from these reels:
- **Light swap → rim swap:** cut the jump on the same framing and change the colour of the light *around* him, not on him: a red or blue glow on the background and the frame's edges (shadows split-toned toward the hue, a ~25% edge glow), skin and blacks kept at full colour (never a wash held over the face; never pale), and the caption highlight hue switched with it. Use it where dj1 swaps the light: the twist, the myth, the turn.
- **Second angle → punch + pan:** a 115–125% punch with a slight pan (L-SHARE's move) and a T-07 glitch on the cut gives dj1's "new shot" beat (within §3.3's limits).
- **Example reel → another take, marked as the example:** the camcorder REC frame, CAP-EX captions, the real link card where the platform puts it, and a warmer tint doing the job of the kitchen.
- **Skit → the creator plays the audience** in the same seat with thought bubbles (white blurred ovals tinting red then green, dj2 28.0–32.1), framed L-SHARE to the other side so the two "people" face opposite ways.
- **Phone in hand → the 3D phone mock** playing his reel over a dimmed scrolling grid of his reels.
- **Screen-recordings:** recorded on his own phone and account; if he has none, a drawn mock of the exact flow with the real button names (dj1 and dj4 draw most of theirs).

---

## §4 Colour tokens

### 4.1 Core tokens
| Token | Hex | Use |
|---|---|---|
| `night` | `#0A0B0E` (UI `#0C0B10`, canvas `#0D0D10`) | Chapter and data canvases, dark UI, every mock's base |
| `capWhite` | `#FFFFFF` → `#D8D8DC` (vertical) | Chest caption main lines; soft shadow `rgba(0,0,0,.6)` blur 12 |
| `feature` | `#8BECF9` → `#1E9BFF` + same-hue glow 20–30 px | Default highlight line; the feature taught; pills `#1E9BFF` |
| `tap` | `#5FE6F0`, white centre, glow 30 px | Tap cursor and pulse ring |
| `toggle` | `#0A84FF` ("New" pill `#4A9BEA`) | iOS toggle on, info pills |
| `wrong` | `#F50302` / `#FB3335` / `#FF2D3D` + glow | Mistake, warning; red boxes, ✕; red canvas `#1A0000 → #3A0505` |
| `right` | `#39FF4A` (text `#C9FFCE`); gradient `#B9FAAB → #8CF961 → #3EF03A` | Fix, solved, money, ✓; green canvas `#000000 → #052301` |
| `gold` | `#FDFE7C` / `#F5F000`; serif `#FFFF84 → #F9E268`; sticker `#FFE600` | Viral, result, celebration, FREE, the example's caption voice |
| `igGrad` | `#FFC060` / `#FFB25A` → `#F278ED` / `#F06DD3` | The platform's name and logo in a hook title |
| `glass` | `#141414` @ 80–85%, r 20–30, 1 px `rgba(255,255,255,.12)` | Profile cards, banners, comment fields, chest phone cards |
| `card` | `#F5F4F7` / `#FFFFFF`, shadow `0 16px 40px rgba(0,0,0,.35)` | Light UI cards (toggle card, story boxes, testimonials) |
| `paper` | `#FFFFFF` | The white data canvas (dj5) |
| `tier` | `#2E6BFF → #5AA0FF`, `#8A3CFF → #B65CFF`, `#36D94A → #93FD69`; arrows `#5FD8FF` | The 3-tier chapter graphic |
| `chart` | `#E100FF → #B400FF`, `#2AA8FF`, track `#E6EEF8` | Donuts |

### 4.2 Light passes and washes
- **Red wash** (T-12): `#FF1E2E` full frame at 100% on the cut, decaying to 0 over 10 f (dj4 4.87). **Gold bloom:** `#FFF3A0` additive, peak in 2 f, settle over 10–12 f (dj2 2.17, dj4 3.2).
- **Glow-bloom to white** (T-04) → `#FAFAFA`; **white flash** (T-18) 100 → 0 over 6 f; **white haze** (T-19) 70 → 0 over 7–9 f.
- **Verdict tint on return:** the incoming face under a ~50% red (or green) multiply fading over 10 f (dj2 24.96); by f10 the skin is back to full colour.
- **Backlight (as shot):** blue rim `#1E5BD8`-ish or red `#C8102E`-ish, alternated on jump cuts (dj1).

### 4.3 Meaning of colour
- **Red** = mistake, warning, problem, "it's too late". Red text, red neon boxes, the red canvas, the red wash.
- **Green** = fix, solved ✓, "it works", money, the right desire, the keyword to type.
- **Gold / yellow** = viral, the result, celebration, "gold", "FREE", the example reel's caption voice.
- **Cyan / blue** = the feature itself, the tap, the platform's UI, highlight pills, the article highlight.
- **IG gradient** = the platform's name and logo only.
- **White** = speech on the face. **Dimmed white** (25–40%) = context.

**Rules:** one highlight hue per caption block; the highlight line may echo the backlight of the take (cyan in a blue take, red-pink in a red take, dj1); a hue repeats only when its role repeats; one verdict at a time on one object (a line is red, *then* green).

### 4.4 Footage look (don't fight it)
- **Dark, moody, high contrast, deep blacks**, with saturated practicals: RGB LED strips (dj1), a night-city window with warm bokeh (dj3, dj5), lit walnut shelving (dj4), a dusk skyline (dj2). Skin warm and natural; wardrobe dark or neutral grey.
- Keep it as shot, or a touch richer (contrast +5%, true blacks). Normalise exposure between takes; don't regrade, except the deliberate washes (§4.2) and the one-camera rim swap (§3.6).
- **Never pale:** no desaturation, fade, lifted or milky blacks on the creator, ever. Every wash is ≤ 10 f and the skin returns to full colour; a dimmed backdrop behind a card keeps its colour.
- Screens are dark mode (`#0C0B10`); the white canvas is the one bright reset per reel (dj5), for data only.

---

## §5 Type tokens and caption systems

### 5.1 Font map (observed faces are guesses; render with the bundled fonts)
| Role | Observed (guess) | Renderer font |
|---|---|---|
| Chest captions, hook titles | Eurostile Extended Black / Bank Gothic / Monument Extended | **Unbounded** 800–900, ALL CAPS, tracking +2% |
| Text object (copy under the circle) | Montserrat ExtraBold / Inter Black | **Montserrat** 800, ALL CAPS |
| Example captions, soft endings, "But don't" | SF Pro Rounded / Nunito | **Poppins** 700 / 600, lowercase or sentence case |
| Celebration word | Playfair / Cinzel / Bodoni | **Bodoni Moda** 700 |
| Arcade word ("CHEATCODE") | Orbitron / Ethnocentric | **Unbounded** 900 with a scanline fill (**Silkscreen** while it decodes) |
| HUD readouts, decode blocks | pixel / LCD | **Silkscreen** |
| Handwritten insert ("f*cking") | marker script | **Permanent Marker** |
| Countdown digits | mono | **JetBrains Mono** 700 |
| Outline numerals ("99%") | condensed outline | **Anton**, 3 px white stroke, no fill, glow |
| UI mocks | SF Pro / IG Classic | **Inter Tight** 500–700 |

### 5.2 `CAP-WIDE` (the house caption: every line on the face)
| Property | Spec |
|---|---|
| Font | Unbounded 800–900, ALL CAPS, the spoken words |
| Chunk | **2–4 words**, max 2 lines, phrase-aligned ("HERE'S / WHAT YOU DO", "YOU DIDN'T / EVEN NOTICE") |
| Size | Every line is scaled to the **same width**, **715–805 px** (x ≈ 150–955), so a short line comes out bigger. Resulting cap height 49–90 px (font ≈ 70–130 px). **Minimum font 76 px**; chunk shorter rather than shrink |
| Colour | Main lines `capWhite` gradient with a soft dark shadow, no stroke. **One highlight line** per block in a gradient + glow: `feature` (default), `right`, `wrong` or `gold` by meaning |
| Position | Centred on x 540, **just under the chin**: the block's top ≈ 40–80 px below `FACE(n)` chin, so the viewer meets it the moment the frame is full of his face (the references sat it at block centre y 960–1010, on the chest); keep it inside y 870–1140; leading ~0.9 |
| Build | **Hard cut on, 0 frames, no pop.** Optionally word-append: "YOU DIDN'T" → "+EVEN" → "+NOTICE" (dj5 f107/f120/f136), the block re-centring as lines are added; or a single word first ("SO"), then the phrase |
| Highlight sheen | A slow light sweep L → R across the highlight line, ~22 f (dj1: 18 f at 24 fps) |
| Exit | Hard off on the next caption or cut; optionally dim to 40% for 3–4 f before the swap (dj3 73.5 s) |
| Where | L-FULL, L-SHARE, L-TILE (over the tile's chest), L-POST (inside the post), L-DATACARD (under the card, ≥ 64 px). On L-SCREEN, L-CANVAS and L-PHONE the words continue in `CAP-SCREEN` (§5.9, M8) |

### 5.3 `CAP-WORD` (one-word punches in the close)
- 1–2 words per caption ("IF", "I PROMISE", "MORE", "F*CKING", "MONEY"), Unbounded 900, cap 70–85 px (font ≈ 100–120 px), centred at y 950–1040. Used in the last 15–20 s of a teardown, where jump cuts run every 1–3 s (dj2 83–103 s).
- The highlight can **jump between lines while the text holds** ("WANT ME TO / BREAK DOWN": the colour moves from line 1 to line 2 on the spoken word).

### 5.4 `CAP-EX` (the example reel's own captions)
- A deliberately "ordinary creator" style, so the viewer knows it's the example: Poppins 700, **lowercase**, `gold` `#F0F030` with a soft yellow glow, 1–3 words, ~85 px font, centred at y 983–1077 (dj3 21.3–38.6).
- Key words become their own graphic: "SKINNY FAT ⚠" in red, "LOSE WEIGHT ✓" in green.

### 5.5 `CAP-SOFT` and emotion-matched words
- **Soft ending** (dj5 33.7–35.9): "So do this", "everytime", "because" in Poppins 600, mixed case, white with a soft glow, ~80 px, y 972–1090; scale 110 → 100% + fade over 8 f, a small upward drift. Shouty → friendly for the instruction.
- **Calm connector into a shout** (dj4 4.87): "But don't" in Poppins 600 (~50 px cap), then "F*CK IT UP" in Unbounded 900 red with glow, appended on the word.
- **Celebration** (dj4 3.2–4.85): "Congratulations" in Bodoni Moda 700, gold gradient, cap ~75 px, x 120–962, y 875–990; a flare streak and glow peak in 2–3 f, then a shimmer.
- **Rule:** the type matches the emotion: wide heavy = claim, gold serif = celebration, rounded calm = instruction, red heavy = warning.

### 5.6 Hook titles (`TITLE-HOOK`, frame 0 to the twist)
- **Lines:** two lines of matched width, a platform word + a promise ("NEVER POST / INSTAGRAM", "INSTAGRAM / CHEATCODE", "FOLLOWERS HOOK / SH*T → GOLD", "YOU FINALLY / DID IT!").
- **Type:** Unbounded 900, main line cap 75–85 px (≈ 110 px font), a long second line ≥ 45 px cap. The platform word in `igGrad`; the other line white or a verdict colour; the platform's app logo (~150 px, optionally tilted ~8°) at the right.
- **Place and life:** x 100–1000, y 945–1135, **on f0**; a sheen (~3 f) at ~0.6 s, a glow pulse on the key word, an optional recolour (all red neon on "without", dj1 f51); out on the first cut by a 6 f glitch (slice displacement + chromatic fringe) or a hard off. Measured life 2.96–3.71 s. A hook object may sit under it (H-2, H-3, H-4).

### 5.7 `TXT-OBJ` (the copy as an object, `FMT-TEARDOWN`)
| Property | Spec |
|---|---|
| Font | Montserrat 800, ALL CAPS, **60–72 px** font (the observed 55–62 px read small on a phone), tight leading, up to 5 lines |
| Position | Left-aligned at x 162, block y 1100–1270, under the circle |
| States | white = current line; dimmed 25% = context; **red text in a red neon box** (1–3 px stroke, outer glow, a small square tag at the box's bottom-right) = wrong; red ✕ appended = rejected; **green text + glow + ✓** = fix; a green bracket tag ("[RISK REVERSAL]") = the principle |
| Build | Word-append on the spoken word (0 f): "BLESS" → "BLESS YOU" → "BLESS YOU WITH SOME"; a box pops in 2 f; a label scrambles into place over ~10 f ("WRONG DESIRE") |
| Above it | Optional HUD readout ("VIRAL RATE: 75%" → 80%) in Silkscreen `gold` with an underline bar; **(fix M7)** ≥ 44 px, not the observed ~30 px |

### 5.8 Labels, numbers and small text
- **Counter:** Unbounded 900 ≥ 70 px cap (≥ 96 px font) with the role glow; its unit ≥ 44 px (fix: observed ~30 px); lands on the spoken number with the slam (EV-3).
- **Highlight pill:** `#1E9BFF`, white text, glow, grown from the phrase centre; may morph into a verdict word ("LEGENDARY", gold).
- **Pointer label:** a dashed pill "HERE" + "IN 7 SECONDS" beside the face (dj3), ≥ 44 px cap.
- **Stickers:** "FREE" (gold, −30°, slaps on, dj5); a pixel "?" box (purple `#9B5CFF` glow, dj4).
- **UI body text** (reel cards, notifications, testimonials) is texture; **(fix M7)** anything the viewer must read from it is re-set as a label ≥ 44 px or a counter.

### 5.9 `CAP-SCREEN` (every word over screens, mocks and canvases; this edition)
| Property | Spec |
|---|---|
| Font | Unbounded 800, ALL CAPS, the spoken words, **60–68 px**, white with a soft dark shadow; the one key word of the chunk in the current role colour (`feature`, `wrong`, `right`, `gold`) |
| Band | A dark glass strip (`glass`, r 24) hugging the words, centred x 540, **y ≈ 1400–1520** (under the UI's working area, above the platform UI); when a recording fills the screen it sits over the least important rows, **never over the tapped control, a counter or a label** |
| Chunk / timing | 2–4 words, hard swap on the phrase onset, like `CAP-WIDE`; it rides the same timing across a cut from the face |
| When a line is carried | If a big label, typed text or counter says the same words, the band fades out over 3 f for that line and returns on the next phrase |

---

## §6 Hook system

### 6.0 The 10× hook
- **Frame 0 is three layers deep:** the speaker full frame, mid-word and mid-gesture (whole face, rich colour); the hook title already on his chest; a hook object **already moving** (the toggle card tilting in from 20°, the cursor mid-arc, the reel cards mid-scroll). Never a still first frame.
- **≥ 5 changes by 3 s** (the references ran 3–5): the push-in runs, the sheen crosses the platform word, the hook object lands with its click, the key word glows, the twist lands with a boom.
- **The twist is a verdict:** on the twist word the title glitches out, the frame takes the verdict colour for 6–10 f (red for a warning, gold for a win) and the caption's highlight line arrives in the same colour.
- **The proof by ~4–6 s:** the first real screen or source dives in (EV-2) so the claim is shown before the viewer can doubt it.
- **The loop on screen:** the unnamed feature as a blacked-out pill or a pixel "?" sticker beside the face (P-31) that only flips at its reveal; the step tracker (EV-6) shows how many steps are coming.

### 6.1 What the hook must do in about 3 seconds
1. **Stop the thumb with a face and a promise:** the speaker full frame mid-word (often mid-gesture, a big expression) with the hook title already on (5/5).
2. **Name the platform and the stake:** the platform's name in its gradient plus a warning, a secret, a celebration or a transformation.
3. **Twist at ~3–3.7 s:** a cut, a light change or a punch with a new line that raises the stake ("and it is f***ing legendary", "because look", "but don't f*ck it up", "and you didn't even notice").
4. **Open a loop by ~10–22 s:** the feature unnamed until 9 s, "how should you use it?", "three best ways", "the part 99% miss", "in 60 seconds we're going to make him go viral".

Visual changes measured in 0–3 s: 3–5 (dj1 5, dj2 4, dj3 3, dj4 4, dj5 4). **This edition: ≥ 5 by 3 s** (the title's life, a hook object building, a recolour or sheen, the hook object's tap, the twist cut).

### 6.2 Hook formulas (`HF`)
| ID | Formula | Spoken pattern | Seen |
|---|---|---|---|
| HF-1 | **Never X without Y** | "Never, ever, ever post on Instagram without using this brand new feature" | dj1 |
| HF-2 | **Series makeover** | "Taking followers hooks from sh*t to gold, part one. This is [name]… in 60 seconds we're going to make him go viral" | dj2 |
| HF-3 | **Shock + news + instant proof** | "Instagram just [did X] with this new update, because look, this video right here, you can actually click it" | dj3 |
| HF-4 | **Identity celebration → twist** | "You finally got your first viral video? Congratulations, but don't f*ck it up. Here's the part 99% of business owners miss" | dj4 |
| HF-5 | **Cheat code + accusation** | "Instagram seriously just gave you the biggest cheat code, and you didn't even notice" | dj5 |

Stack-ons: profanity for punch (starred), platform authority ("Instagram just…"), a secret stat ("99%"), money stakes ("costs them millions").

### 6.3 Hook visuals (`H`)
| ID | Hook visual | Recipe |
|---|---|---|
| **H-1** | **Title on the chest from f0** (always) | TITLE-HOOK on f0 over L-FULL; push-in 100 → 115–125% over 1.8–2.5 s (dj3, dj5) or a punch-out settle (dj1); the title glitches out on the twist |
| **H-2** | **Secret setting / feature toggle** | A dark glass settings row under the title (x 145–965, y 1175–1275, r ≈ 30): label decodes from pixel blocks over 20 f, toggle flips on the key word in 4 f (dj5); or a white toggle card "Linking" + "New" flips green after the twist (dj1 3.0–4.5) |
| **H-3** | **Before / after cards** | Two phone cards on the chest (x 180–480 / 580–880, y 1030–1400); red multiply on the bad word, gold bloom + "1.2M" on the good one (dj2) |
| **H-4** | **Slot carousel of own reels** | Reel cards with view counts rise with vertical blur (17 f), scroll and stop with the viral one centred; its border and eye icon light gold (dj4 f3–60) |
| **H-5** | **Emotion arc** | Green "YOU FINALLY / DID IT!" → gold serif "Congratulations" + fireworks in the window → red wash + "But don't / F*CK IT UP" (dj4 0–5.5 s) |
| **H-6** | **Instant proof beside the face** | On "this video right here" the frame slides right and the reel card pops left; a profile tag beside the face on "my profile" (dj3 4.2–9.4) |
| **H-7** | **Sticker + eyeline** | A pixel "?" box pops beside the face; he looks up at it on "the part that…" (dj4 6.5–9.0) |

### 6.4 Hook timing template (≈ 0–10 s)
- **f0:** L-FULL mid-word, TITLE-HOOK on, a hook object starting; motion by f3–f6.
- **0–2.5 s:** the push-in runs; sheen and glow land on the key word; the hook object builds (toggle flips, card tints, carousel lands).
- **2.9–3.7 s:** cut / punch / light swap on the twist word; the title glitches out; CAP-WIDE on; a boom or impact.
- **3.7–10 s:** the feature shown (toggle card, article, the subject's clip, the "99%" sticker), then the first loop. **≤ 22 s:** the second loop.

### 6.5 Hook text rules
Platform word + promise, ≤ 5 words, two matched lines, ALL CAPS, swears starred; the same promise the voice says, shorter; on the chest, never over the face; dies on the first cut.

### 6.6 Hook sound
A low boom under frame 0 (dj1, dj2: ~−11 dBFS in the first gap) or a dry hook after its first boom (dj3); a shine on "gold" / "Congratulations"; a glitch on the title's exit. Go silent (no new SFX) for 0.5–1 s at the first turn (§11).

### 6.7 Endings (`E`; E-1 can follow E-2)
| ID | Ending | Recipe | Seen |
|---|---|---|---|
| **E-1** | **Loop mid-sentence** | The last line ends on a dangling connector ("…which is why you should", "…every time, because", "for whenever"); hard cut ≤ 4 f after it, reading into the hook's first words | dj1, dj3, dj4, dj5 |
| **E-2** | **Keyword CTA** | "Comment the word [KEYWORD]" on L-FULL; a glass comment field (x 133–940, y 917–1250) types it; optionally a mention banner on "you might be next" | dj2, dj3, dj4 |
| **E-3** | **Self-referential CTA** | The CTA uses the taught feature ("the button that will appear here in seven seconds") with a dashed "HERE" pill | dj3 |
| — | **Resource card** | L-BLURCARD with the creator's own steps, then L-FULL (fix N6: never another product's tutorial) | dj3 |

---

## §7 Structure devices

### 7.1 Structure devices (`SD`): pick the ones the format needs
| ID | Device | Recipe |
|---|---|---|
| **SD-1** | **Tap step** (`FMT-TAP`) | One screen per verb; zoom 110–130% to the target; rest dimmed ~40%; the cursor taps on the verb; screens change by T-15 or T-06 |
| **SD-2** | **Chapter card** (`FMT-CHAPTERS`) | The same graphic each chapter (dj3's 3-tier neon funnel), arrows ▶◀ on the active tier, others at 25%, the glow moving down over 10 f. At the end it **assembles**: tiers light bottom → top, float apart with a 3D tilt (~1.2 s), snap under a white flash, avatars fall in, green "$" fall out; then it slides onto his chest |
| **SD-3** | **Live copy edit** (`FMT-TEARDOWN`) | TXT-OBJ: dim → box red → label morph → ✕ → rebuild word by word in green → ✓ |
| **SD-4** | **Verdict grammar** | Red, then green, then gold on text, boxes, canvases and the returning face's tint |
| **SD-5** | **Simulation chain** (`FMT-SIM`) | Each spoken consequence is the next UI state (countdown → feed counts → story → cards → notifications → list → DM → receipt), one every 1–2 s |
| **SD-6** | **Example reel** | L-EXAMPLE with CAP-EX, the REC frame and the real link card where the platform puts it (§3.6 for one camera) |
| **SD-7** | **Progress-bar metaphor** | A progress bar (x 170–915, y ≈ 1058) scrubs to "END", turns green "PROBLEM SOLVED ✓", flips red "NEW ⚠ PROBLEM" (blinking), and an arrow draws to a linked reel card (dj3 21.3–29.4) |
| **SD-8** | **Mood arc** | Grade, type and sound change per line (H-5) |

### 7.2 The step ritual (one recipe per step, identical every time)
1. **Enter** on the step's verb: T-15 blur-slide, T-06 sheet slide or a hard cut to the screen, with a whoosh.
2. **Zoom** to the active control (110–130%) over 8–10 f; dim the rest.
3. **Tap** on the spoken verb with the magnetic tap (EV-1): the cursor lands on its arc, the control presses in and springs back, a ring pulses (6 f), the UI responds (a menu pops, a toggle flips, a toast appears) with a click.
4. **Confirm** the result for 0.5–1 s (a toast, a highlight box, a duplicated row). (fix M7) Re-set the confirmation as a label ≥ 44 px if the native text is small. The step tracker's dot fills (EV-6).
5. **Next step** within 1–1.5 s. After ~6 s of steps, the speaker returns for one line (M5): a cut-out, a tile or the data card.

### 7.3 The chapter ritual (`FMT-CHAPTERS`)
1. Chapter card (L-CANVAS) on "if you want more [views / followers / sales]" (hard cut, boom or whoosh), the active tier lit, ~1.3–1.4 s.
2. The explanation on L-FULL or L-SHARE with a card beside the face.
3. The example (L-EXAMPLE), cut on its own sentences.
4. The next chapter card, the next tier lit. The last chapter is followed by the assembly (SD-2).

### 7.4 Open loops (retention)
- **Unnamed feature** (dj1: named at 9 s); **the question turn** at ~20–25% of the runtime with 0.5–1 s of SFX silence before it ("But what makes this feature so good, and how should you use it?", dj1 19.75); **count** ("the three best ways", dj3); **secret** ("the part 99% miss", dj4); **challenge** ("in 60 seconds… go viral" + 01:00 ring, dj2); **myth** ("Everyone's gonna tell you this is only for X… but", dj1 23.5).
- Every loop is paid off on screen (M10).

---

## §8 Graphics system

### 8.0 The 10× layer (what the best motion designer adds to every tap)
**Animation principles, applied to this style:**
| Principle | How it shows up here |
|---|---|
| **Anticipation** | The cursor pulls back 6 px before it travels; a card dips to 96% before it pops; a 2-frame dark breath on the screen before a toggle flips; the push-in eases in a beat before the twist |
| **Squash & weight** | The tapped control presses to 94% and springs 104% → 100% (EV-1); stickers slap on at 115% → 96% → 100%; counters punch 108% → 100% on landing (EV-3) |
| **Follow-through & overlap** | Rows dim in a 2-frame cascade top → bottom; card pairs land 3 f apart; the ring keeps expanding after the tap; the title's glitch slices settle one after another; the data card's rim glow overshoots by 4 f |
| **Arcs** | The cursor travels on a shallow arc, never a straight line; the cut-out swings in on an arc; whips follow the gesture's direction; the 3D phone swings up on an arc (EV-2) |
| **Slow in / slow out** | Ease-out arrivals (cubic), ease-in exits, ease-in-out zooms and shrinks; only taps, caption swaps and verdict flips are hard |
| **Staging** | One hero: when the cursor lands, everything else dims to 40% and the screen camera breathes 3% toward the control; the face, when shown small, never competes with the number |
| **Secondary action** | While held: the push-in drifts, the sheen crosses the highlight line, the UI scrolls a little, glows breathe ±6%, the count's last digit flickers before it lands |
| **Timing** | Taps 8–10 f of travel + a 6 f ring; screens 1–1.5 s each; face beats 1.5–6 s; never two layout moves within 1 s |
| **Exaggeration** | One moment per reel goes huge: the payoff counter fills the frame, the funnel assembles, the FREE sticker slams (P-30) |
| **Appeal** | Deep blacks, neon glows, glossy glass cards, crisp white type; it looks like the best growth channel on the platform made it |

**Design hierarchy (every frame):** 1. the tapped control, the number or the verdict word · 2. the speaker's face (when shown) · 3. the caption · 4. the label or the counter's unit · 5. everything else, dimmed to 25–40%.

**Effects toolkit:** neon glows (20–30 px, same hue) on highlight lines, the cursor, verdict boxes and counters; glass cards with a 1 px light rim and a soft shadow; directional motion blur on blur-slides, whips and rolling digits; a light sheen across titles and highlight lines; depth of field on 3D phone mocks; drawn particles (fireworks, money) on the payoff; the RGB glitch and static as punctuation (≤ 2 each). Never: grain, vignettes, film burns, stock flares, shake, desaturating the creator.

### 8.1 Graphic families (`G`)
| ID | Family | Look → motion |
|---|---|---|
| **G-1** | **Screen-recording** | The real app, dark mode, 110–130% to the action → zoom/pan, dimmed rows, tap cursor, blur-slides |
| **G-2** | **Drawn UI mock** | Toggle card, select sheet, profile template, feed, story, comment field, settings row → sheets slide up, toggles flip, text types, counts climb |
| **G-3** | **Reel / phone cards** | His own reels as portrait cards (r 15–20, thin white border, shadow) with view counts → pop 90 → 100%, pairs, chains, B/W → colour |
| **G-4** | **Proof screenshot** | The real source article, white, full frame → fast ~3× zoom with blur onto the phrase, then a blue highlight |
| **G-5** | **Counter** | Big number + unit, glow → count-up 1–3 s landing on the word |
| **G-6** | **Data canvas** | People grid, donut, 3-tier funnel, countdown → shrinking selections, sweeps, lit tiers, verdict canvas swaps |
| **G-7** | **Text object** | TXT-OBJ, HUD readout → append, box, morph, ✕/✓ |
| **G-8** | **Neon objects & stickers** | Chain link, pixel "?" box, FREE tag, ✓ box, ⚠ → whip in, float, slap on with overshoot |
| **G-9** | **3D phone mock** | Glossy tilted phone, dark UI, or at the right edge of the white canvas → recede, tilt, slide screens |
| **G-10** | **Highlight box / pill** | White 4 px outline box (r ≈ 15); blue pill → box flashes 60% fill → outline, the rest dims; pill grows from the centre |
| **G-11** | **Notification stack** | iOS banners (dark glass, icon, 2 lines) → drop and stack, 0.4–0.5 s each |
| **G-12** | **Particles / VFX** | Fireworks in the window, money rain, "$" → burst on the word, drawn not stock |

At least 4 families per 60 s; one hero at a time (N12); his own reels and profile are the preferred card content.

### 8.2 Staging choreography (how a beat plays out)
1. **Lead-in (−2 f):** the element starts 2 f before its word.
2. **Land (≤ 6 f):** it reaches 100% by the word (taps ±2 f; counters on the last syllable).
3. **Live (0.6–2 s):** one thing moves inside it (a count, a scroll, a typewriter, a pulse, a float).
4. **Hand-off:** the next word **evolves** it (a label morphs, a colour flips, a second card joins as a pair, a count continues) or a transition **replaces** it (§9). Evolve inside a step; replace between steps.

### 8.3 Pattern specs (`P`, motion at 30 fps)
| ID | Pattern | What's on screen → motion |
|---|---|---|
| P-01 | **Feature toggle** | White card "Feature" + "New" pill + toggle on the chest (x 175–890, y 950–1130), or a settings row under the title → toggle flips in 4 f on the key word |
| P-02 | **Tap step** | Real screen at 110–130%, target undimmed, cyan cursor Ø ~80 px → cursor eases in 8–10 f, ring pulses 6 f on the verb |
| P-03 | **Sheet slide** | A bottom sheet ("Select a reel", "Link a reel") → slides up 10 f ease-out |
| P-04 | **Relabelled button** | "Post" → "Wait! ✋" on "right before you hit post" → hard swap + glow |
| P-05 | **Toast** | "Trial Reel Posted"-style confirmation re-set ≥ 44 px → fade + rise 6 f, hold 1 s |
| P-06 | **Linked reel pair** | Two reel cards ~390 × 690 each (fix: the observed ~260 × 460 was unreadable) on navy `#0B1520 → #050608`, joined by a glowing chain, counters under each → left 100K → 0, right 540K → 640K over ~1.4 s; the B/W card colourises in 5 f |
| P-07 | **Card beside the face** | His reel at x 136–460 or 532–838, y 246–1025 (L-SHARE) → pops as the frame pans; an arrow draws on "tap this video" |
| P-08 | **Profile tile** | L-TILE in his grid → punch-out 12 f, grid scrolls, counter pops over the tile |
| P-09 | **Profile template** | White "Your Name \| Your Niche" profile, followers 55.5K → 510K (illustrative, labelled so) → count ~2 s, tiles flip blue |
| P-10 | **Article fly-in** | The real article → sharpen 8 f, zoom ~3× over 10 f with blur onto the phrase, a blue box grows from its centre over 12 f, the text turns white |
| P-11 | **Anchor pill → verdict** | The pill survives T-05 back to the face, morphs blue → green → yellow over 12 f into "LEGENDARY" |
| P-12 | **Chest counter** | "3K → 9K → 27K → 243K Followers" → steps with a glitch on each spoken multiple |
| P-13 | **Neon object** | 3D chain link ~250 px, cyan glow, on the chest → whip in 5 f, float and rotate, drop out on the next punch |
| P-14 | **Numbered labels** | "P1 P2 P3" (y ~980), then thumbnails (x 110–990, y 1060–1380) → each fades in 5 f on its number |
| P-15 | **Highlight box on the result** | White box around the items (x 102–982, y 430–832) with L-CUTOUT in front → 60% fill → outline in 8 f, the rest dims |
| P-16 | **Thumbnail shuffle** | The New-reel thumbnail changes every 8 f on "every single video you post" |
| P-17 | **Circle + copy** | L-CIRCLE + TXT-OBJ → circle slides in from the left 60 → 100% over 5 f, the background swaps to the dark canvas with a verdict-tinted glow over 4 f (no blur), a gold underline draws out from the centre over 12 f |
| P-18 | **Box + label morph** | Lines grouped in a red neon box → box 2 f, text scrambles to "WRONG DESIRE" over 10 f |
| P-19 | **Strike + rewrite** | Rejected phrase + ✕; the new phrase appended white, flipped green with ✓ → flip 4 f, ✓ writes 5 f |
| P-20 | **Card collapse + check** | The improved card shrinks ~55% and slides left; a box draws, a connector runs, ✓ writes → 10 f, ✓ 5 f |
| P-21 | **People grid** | 10 × 10 glyphs **≥ 860 px wide** (fix: ~660 px with a 20 px label), label ≥ 44 px → selection 99% → 9% over ~35 f with the % counting, others dim to 20%, bracket labels attach, canvas swaps red/green in ~8 f |
| P-22 | **Profile card** | Dark glass header (avatar ring, name ≥ 40 px, counts) → scales up from the left 8 f; a word turns green on its mention |
| P-23 | **Countdown** | "01:00" ring or "72:00:00" (JetBrains Mono ≥ 140 px, labels ≥ 44 px) → ticks once, then a pull-back reveals it on the next UI (fix N1: never alone on black > 0.5 s) |
| P-24 | **Activity pill** | Red pill `#FF3B5C` (x 165–904, y 739–849) over L-POST → counts 2.9K → 7.4K over ~3 s |
| P-25 | **Story build** | His own photo, a question in story boxes ("[Name]" in blue), result cards, segment bars 1–4, a reply bar with the keyword in green → typewriter ~2 words/s, cards cascade 5 f each, zoom out to the bars and back |
| P-26 | **Phone + notifications** | 3D phone; banners stack; viewer list with green "$" avatars; DM; receipt (amount ≥ 60 px) → recede/tilt 10 f, banners 0.4 s each, the receipt slides up |
| P-27 | **Funnel chapter card** | SD-2 |
| P-28 | **Progress bar** | SD-7, changes 4–6 f each |
| P-29 | **White-canvas donut** | Phone at the right edge, donut ≥ 560 px, "%" ≥ 96 px, label ≥ 44 px (fix) → ring sweeps ~18 f, views count ~3 s, the second series replaces the first with a smear |
| P-30 | **This-vs-that cards** | Two phone cards on the chest (x 246–510, 567–832, y 945–1406), labels "• Normal 134K / • Trial 134K" ≥ 44 px, then a "FREE" sticker → pop 6 f, labels on the word, sticker slaps at −30° |
| P-31 | **Sticker beside the face** | Pixel "?" box (x ≈ 300–530, y ≈ 630–840) → pops, floats; he looks at it |
| P-32 | **Comment-field CTA** | Dark glass field types the keyword, send arrow, optional mention banner → 1 letter / 2 f, banner 8 f |
| P-33 | **Money / celebration VFX** | Fireworks in the window, money rain → burst 0.3–0.5 s after the word |
| P-34 | **Subject clip** | The teardown subject's reel, full frame with its audio, or as a side card ≥ 360 px on a canvas |
| P-35 | **Emotion words** | §5.5 |

### 8.4 Line → pattern lookup (start here for every sentence)
| Line type | Primary | Alternates |
|---|---|---|
| "This brand new feature / setting" | P-01 | H-2 |
| "Instagram launched X" (the source) | P-10 | P-11 |
| "Go to / tap / open / toggle / post" | P-02 | P-03, P-05 |
| "Right before you hit post" | P-04 | P-02 |
| "It takes them to another video" | P-06 | P-07 |
| "This video right here / my profile" | P-07 | P-08 |
| "Part 1, 2, 3 / series" | P-14 | P-27 |
| "3x the followers / grow your brand" | P-12 | P-09, P-08 |
| "The top three…" | P-15 + L-CUTOUT | P-02 |
| "Every single video you post" | P-16 | P-14 |
| "This hook / caption" | P-17 | P-34 |
| "The mistake is…" / "Instead, say…" | P-18 / P-19 | SD-4, P-20 |
| "Only a percentage / everyone wants X" | P-21 | P-12 |
| "This is [name], a [niche]" | P-22 | P-34 |
| "In 60 seconds / the next 72 hours" | P-23 | P-24 |
| "Your profile activity is the highest" | P-24 (L-POST) | P-12 |
| "Put up a story that says…" | P-25 | P-02 |
| "You'll get DMs / leads / sales" | P-26 | P-33 |
| "N ways / if you want more X" | P-27 | P-14 |
| An abstract idea ("open loop") | P-28 | P-06 |
| "Followers vs non-followers" | P-29 | P-21 |
| "Same video, double the views, free" | P-30 | P-12 |
| "Congratulations / don't f*ck it up" | P-35 | P-33 |
| "Here's the part that…" | P-31 | CAP-WIDE |
| "Comment the word X" | P-32 | E-3 |
| Opinion, turn, judgement, promise | **L-FULL + CAP-WIDE** | CAP-WORD |

### 8.5 Density and variety
- A new visual event every **1.6–2.5 s** (measured means 1.6–3.2 s; screen steps every 1–1.5 s).
- At least **4 families** and **8 patterns** per 60 s; the same pattern at most 3 beats in a row (tap steps count as one pattern; keep each step's screen different).
- Layout mix per 60 s (house): ~35–45% the face full (L-FULL, L-SHARE, L-EXAMPLE), ~15–25% the face shown small (tile, post, circle, data card, cut-out), ≤ 45% faceless (screen, canvas, phone), with no faceless run over 8 s (M5).
- **Scale:** the hero ≥ 860 px wide and owning the middle; recordings zoomed to fill the width; no frame more than half empty for over ~0.7 s (the header's floors).

### 8.6 Asset rules
- **Real captures:** the app recorded on the creator's own phone and account (1080 wide, 30 fps), the source article as a screenshot, his own reels and profile (`vibe asset add "<file>" --name <name> --source "<url>"`). **Drawn mocks** for the rest, with the real labels and his own handle; placeholders ("Your Name | Your Niche") for templates.
- **Someone else's reel** only as a teardown subject who asked for it (N11). **Testimonials and DMs:** his own real screenshots, private data blurred (N5), famous names never (N4).
- **VFX** drawn in the page, not stock. **Logos:** only the platform's app logo in the hook title.

### 8.7 Elevated devices (new in this edition)
| ID | Device | When | What runs | Sound |
|---|---|---|---|---|
| **EV-1** | **The magnetic tap** | Every tap step (P-02, SD-1) | The cursor pulls back 6 px, travels on a shallow arc (8–10 f, ease-out) leaving a 4-frame glow trail; on the verb the control presses to 94% and springs 104% → 100% (6 f); a ring and a soft ripple run outward through the UI; the rest dims to 40% and the screen camera breathes 3% toward the control | `mouse-click-mouse-click` (the list cue, every tap) |
| **EV-2** | **Dive through the phone** | Face → the first screen of a run; the turn back out. Once in and once out per reel | A glossy 3D phone (G-9) swings up from his chest on an arc (8 f), the camera pushes through its glass (10–12 f, motion blur) into the full-screen recording; at the turn the recording shrinks back into the phone, the phone drops away and he's there | `zoom-in-zoom-in` in; `swoosh-2025-01-08-03-02-26-utc-swoosh-06` out |
| **EV-3** | **Number slam** | Every counter (P-12, P-24, P-29) and the payoff number | Digits roll with vertical motion blur, overshoot the final value by ~3% and settle (ease-out-back), then land with a 2-frame scale punch (108% → 100%) and a glow flash in the role colour; the unit lands 2 f later | `telemetry-graph-rising-01-2025-08-27-06-33-50-utc-36877-telemetry-graph-rising-01-full` under the roll; `electric-hit-2025-02-20-01-45-58-utc-electric-hit-4` or `abstract-hit-sub-bass-07` on the land |
| **EV-4** | **Verdict sweep** | Every red → green (or → gold) change on text, a box, a canvas, the returning face's tint | The new colour wipes across the object in reading direction (8 f, a bright leading edge); a ✕ cracks into 5–6 shards that fall and fade (8 f); a ✓ draws itself (5 f) with a glow pop | `wrong-answer` / `correct-sfx` / `correct-answer-2fast` (rotate) |
| **EV-5** | **Depth sandwich** | ≤ 2 per reel: the hook object or the payoff number | The graphic (toggle card, counter, chain link) sits **behind** his head and shoulders, in front of the set, so he stands in front of the data; matte for those seconds only (§12.3) | `futuristic-switch-transition` |
| **EV-6** | **The step tracker** | Every reel with 2+ steps, chapters or fixes | A row of neon dots (Ø ≥ 22 px) with "STEP 2/3" (Unbounded 800, ≥ 44 px) at the top-left of screens and above the data card (x 70–520, y 150–220); the active dot fills with a glow as its step starts; at the payoff all dots flash green and the row slides off | `0552611` → `0552621` → `0552631` (one per step, rising) |
| **EV-7** | **Seamless loop** | Every E-1 ending | The last shot is framed and scaled like frame 0 (the same push-in start, the last caption in the hook title's colours), so the loop cut reads as one continuous take | none: silence in the last 0.5 s |
| **EV-8** | **The data card** | Data and results while he keeps talking (a count, a chart, a card pair, a short recording) | He shrinks from full frame into L-DATACARD (12 f, ease-in-out, the card's rim glow overshooting 4 f) while the data rises into the lower half; on the next opinion or turn the card grows back to full frame (10 f) as the data drops away | `swoosh-2025-01-08-03-02-26-utc-swoosh-02` in; `ui-opening` out |

---

## §9 Transition system (`T`)

Transitions are the punctuation: a **boom + layout change** opens a section, a **glitch or haze** brings the face back, a **jump cut** is a breath removed. Each showy transition is used once or twice per reel (dj1), never as a pack.

### 9.1 Transition library (30 fps)
| ID | Transition | Frames | Recipe (seen) |
|---|---|---|---|
| T-01 | **Light-swap jump** | 1 | Same framing, the other backlight colour, the highlight hue follows (dj1 3.0, 23.58, 31.0, 74.67; one camera: §3.6) |
| T-02 | **Punch jump** | 1 | 100 ↔ 115–130% across a jump, anchored on the face (dj2, dj4, dj5) |
| T-03 | **Reframe to share** | 8–12 (whip 5–7) | Pan + punch so a card takes the other side; whip variant with directional blur (dj3) |
| T-04 | **Glow-bloom to white** | 6 + cut | A graphic's glow grows to near-white; hard cut to the white screenshot (dj1 4.5) |
| T-05 | **Iris on an anchor** | 5 | The page closes into a circle (r 390 → 0) centred on a kept pill, revealing the face (dj1 8.17) |
| T-06 | **Sheet slide-up** | 10 | A UI sheet slides up over the speaker or screen (dj1 10.42, 64.3) |
| T-07 | **RGB glitch cut** | 5–7 | Slice displacement + red/blue split on the last and first frames (dj1 19.75, 37.42) |
| T-08 | **Whip / streak** | 4–5 | Object streak + motion blur across the cut (dj1 31.0, dj4 3.07) |
| T-09 | **Into a tile / post** | 8–12 | The frame scales into a grid tile or a feed post, or a pull-back reveals it in a bigger UI (dj1 33.0, dj4 11.3, 32.15) |
| T-10 | **Cut-out swing-in** | 8 | The matted speaker rises from bottom right with a slight rotation and overshoot (dj1 56.0) |
| T-11 | **Dim-down into the circle** | 4–5 | The footage gives way to the dark canvas with a verdict-tinted glow (no blur; the reference blurred it); the circle slides in (dj2 15.46) |
| T-12 | **Colour wash** | 1 + 10 | Red (or gold) flash decaying, or the returning face tinted (dj4 4.87, dj2 24.96) |
| T-13 | **Blur + tint clear** | ~36 | Footage enters blurred and tinted, clearing on the play line (dj2 3.71) |
| T-14 | **Card collapse** | 10 | A big card shrinks into the corner of the next shot (dj2 46.71) |
| T-15 | **Blur-slide / smear** | 6 | Directional blur + slide between screens or into a screenshot (dj5, dj3 11.5) |
| T-16 | **Push-in to tap** | ~15 | Zoom onto a UI target, ring, cut (dj4 17.4) |
| T-17 | **Hard cut to canvas** | 1 | To a chapter card or the white data canvas (dj3, dj5 22.0) |
| T-18 | **White merge flash** | 6 | The assembling graphic flashes white (dj3 61.97) |
| T-19 | **White haze return** | 8 | The white canvas fades as a veil over the returning face (dj5 29.7, 33.67) |
| T-20 | **Dim-down behind a card** | 6 | The face darkens to ~55% (sharp, no blur; the reference blurred it) while a card rises (dj3 66.07) |
| T-21 | **TV static** | 5 | Noise + scanlines into the face (dj4 44.75) |
| T-22 | **Graphic carry-over** | ~20 | A graphic slides from its canvas onto his chest (dj3 64.8) |
| T-23 | **UI staggered fade-in** | 10 | Cut to black, UI rows fade in top → bottom (dj1 38.75) |
| T-24 | **Loop cut** | 0 | Hard cut ≤ 4 f after the dangling last word (dj1, dj3, dj4, dj5) |

### 9.2 Transition grammar
| Boundary | Use | Never |
|---|---|---|
| Frame 0 | Already moving: push-in or punch-out settle (H-1) | Fade from black, a static or empty frame |
| Hook → twist | T-01, T-02, T-08, title glitch-out | A dissolve |
| Face → proof screenshot | T-04 | — |
| Proof → face | T-05 (keep the anchor) | — |
| Face → screen steps | EV-2 (once per reel), T-06, T-23, a hard cut, T-16 | — |
| Screen → screen | T-15, T-06, T-16 | A still jump |
| Face → shown layout | T-09 (tile/post), T-11 (circle), T-03 (share), T-10 (cut-out), EV-8 (data card) | A hard cut into a box |
| Shown/screen → face (turn, payoff, CTA) | T-07, T-19, T-21, T-12 tint, a hard cut on a sentence start | — |
| Chapter in / out | T-17 | — |
| Payoff assembly → face | T-18 then T-22 | — |
| CTA resource card | T-20 in, hard cut out | — |
| Last word | T-24 | A black tail, a fade |

### 9.3 Transition map (part of the plan)
```yaml
transitions:
  - {t: 0.00, id: H-1, from: null, to: L-FULL, sfx: [boom-2025-01-08-02-40-38-utc-boom]}
  - {t: 3.57, id: T-02, from: L-FULL, to: L-FULL, note: "twist; title glitches out"}
  - {t: 5.13, id: T-17, from: L-FULL, to: L-SCREEN, sfx: [whoosh-2025-01-08-02-32-33-utc-whoosh-03]}
  - {t: 9.73, id: T-15, from: L-SCREEN, to: L-SCREEN, note: "on 'open your drafts'"}
  - {t: 29.70, id: T-19, from: L-CANVAS, to: L-FULL, note: "on 'So'"}
  - {t: 35.90, id: T-24, from: L-FULL, to: END}
```

### 9.4 Transition budget (per 60 s)
- Showy transitions (T-04, T-05, T-07, T-08, T-12, T-18, T-21): each **≤ 2 per reel**, at most 6 in total; never two within 2 s.
- Layout moves (T-03, T-09, T-10, T-11, EV-8): 3–5 per 60 s (§3.1); EV-2 once in and once out per reel.
- Screen moves (T-06, T-15, T-16): one per step, unlimited.
- Jump cuts (T-01, T-02): unlimited, on word boundaries only; a punch on every 2nd–3rd cut in long talking stretches.
- Transitions never delay speech; the cut frame is within ±1 f of a word boundary.

---

## §10 Motion tokens, camera, layers, finishing

### 10.1 Motion tokens (30 fps; dj1/dj2 frames ×1.25)
| Token | Value |
|---|---|
| Beat lead | 2 f before the trigger word |
| Caption | Hard 1-frame on, no scale; word-append; highlight sheen L → R ~22 f |
| Hook push-in | 100 → 115–125% over 54–75 f, ease-in-out, on the face |
| Punch / reframe | 100 ↔ 115–130% on a cut; reframe 8–12 f ease-out (whip 5–7 f) |
| Pops | Cards/stickers 90 → 100% + fade, 5–6 f; stickers 8% overshoot |
| UI | Sheet 10 f; toggle 4 f; cursor travel 8–10 f on an arc; tap ring 6 f; typing 1 letter / 2 f |
| Magnetic tap (EV-1) | Pull-back 6 px over 2 f; travel 8–10 f ease-out; press 94% → 104% → 100% over 6 f; screen camera +3% over 8 f, back over 12 f |
| Number slam (EV-3) | Roll 1–3 s ease-out-back, ~3% overshoot; land punch 108% → 100% over 2 f; glow flash 3 f; unit +2 f |
| Data card (EV-8) | Shrink 12 f ease-in-out, rim glow overshoot 4 f; grow back 10 f |
| Dive (EV-2) | Phone swing-up 8 f on an arc; push through the glass 10–12 f with motion blur |
| Screenshot zoom / highlight | ~3× over 10 f with blur / grows from the centre 12 f |
| Morphs | Label scramble ~10 f; colour morph 10–12 f; canvas verdict swap ~8 f; selection shrink ~35 f |
| Count-up | 1–3 s ease-out, landing on the word |
| Holds / exits | A label ≥ 10 f after landing, text ≥ 0.25 s per word; hard off on cuts |

### 10.2 Camera
- **Tripod, eye level, ~35 mm feel, medium shot** (all five). Never static for long: the hook push-in (dj3, dj5), punch jumps (dj2, dj4, dj5), reframes to share (dj3), the light swap (dj1).
- Every punch, push and reframe is anchored on the face and stops where the whole head still has ≥ 40 px to every edge (M6). If the footage is tight, limit the punch and move the text, or use a box on the canvas (§3.3); never shrink it over its own blurred copy.
- Inside screens, the "camera" is the zoom/pan on the recording (110–130%), moving to each target.

### 10.3 Layer order (back to front)
Footage / screen / canvas → dim, blur, tint → cards, mocks, charts, the highlight box → the speaker in a shown layout (`CUT(n)` for the cut-out) → stickers, counters, labels, the cursor → captions and the hook title → light passes and washes.

### 10.4 Finishing
No grain or vignette on the footage; the creator's colour rich, never pale; glow only on highlight lines, neon objects, verdict boxes, counters and the cursor. Cards r 15–30, a thin light border on dark cards, a soft shadow. Spell-check every word (M14).

---

## §11 Sound design (D4)

**No music bed, ever.** Sound is SFX only (the creator's direction, 12 Oct 2026): never a music track, bed, pad, 808 loop, drone or a riser held under the voice.

### 11.0 What the references do (measured)
| Reel | Loudness | True peak | Music in the references (evidence only; we don't use it: SFX only) | SFX |
|---|---|---|---|---|
| dj1 | −14.4 LUFS | +0.4 (fix) | Sub/808 bed (−12 to −20 dBFS < 60 Hz) + soft pad; drops out at the myth, the "top three" step and the turn gap (−43 dBFS) | ~10–12 |
| dj2 | −14.3 | +0.7 (fix) | Steady dark sub drone (−30 to −35 dBFS), no song | ~10–12 |
| dj3 | −14.5 | +0.1 (fix) | Dry hook (3–9 s), sub bed through the body, peaking under the funnel payoff, gone before the loop | ~12–15 |
| dj4 | −14.1 | −0.2 | Heavy sub tension under the stakes (4.8–12.8 s); a faint pad under the story/DMs | ~12 |
| dj5 | −14.3 | −0.5 | Sub heavier under data and payoff; a pad from ~5 s; a gap at "save it as a draft" | ~8–10 |

This edition **scores every graphic event** like the best app-tactic channel would: a click on every tap, a whoosh on every screen, a pop on every card, a roll and a slam on every number, a crack or a chime on every verdict, a boom on every section; the face beats carry only their events.

### 11.1 The palette (neon app: clicks, whooshes, glitches, slams)
| Role | When | Pool (ids from SOUNDS.md; rotate) | Level vs voice |
|---|---|---|---|
| **Frame-0 / section boom** | Under the first word; a section or chapter opens | `boom-2025-01-08-02-40-38-utc-boom`, `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5`, `swish-boom` | −6 to −10 dB |
| **Twist / verdict impact** | The twist cut, the red wash | `impactdropdistsh-sdt2018402`, `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-2`, `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-4` | −6 to −10 dB |
| **Tap** (the list cue) | Every tap on its verb (EV-1) | `mouse-click-mouse-click` | −18 to −22 dB |
| **Toggle / UI response** | A toggle flips, a menu pops, a sheet opens | `digital-click`, `ui-click`, `click-click`, `ui-opening` | −18 to −24 dB |
| **Screen move** | Blur-slides, sheet slides, push-in to tap | `whoosh-2025-01-08-02-32-33-utc-whoosh-03`, `whoosh-2025-01-08-02-32-33-utc-whoosh-07`, `swoosh-2025-01-08-03-02-26-utc-swoosh-02`, `ultra-fast-swipe` | −12 to −18 dB |
| **Dive / zoom** | EV-2, a punch on the twist | `zoom-in-zoom-in`, `zoom-2025-05-09-19-11-57-utc-zoom-3`, `swoosh-2025-01-08-03-02-26-utc-swoosh-06` | −10 to −16 dB |
| **Layout move** | Into a tile, post, circle or data card; the cut-out swing | `woosh-2-2025-08-27-06-25-17-utc-woosh`, `futuristic-switch-transition`, `swoosh-2025-01-08-03-02-26-utc-swoosh-02` | −12 to −18 dB |
| **Glitch** | T-07, the title's exit, a label scramble, a decode, T-21 static | `glitch-2025-02-19-15-01-37-utc-glitch-8`, `glitch-2025-02-19-15-01-37-utc-glitch-3`, `glitch-2025-02-19-15-01-37-utc-glitch-14`, `glitch-2025-01-08-02-40-44-utc-glitch-06`, `interference-flicker-1` | −14 to −20 dB |
| **Whip** | T-08, a fast pan to share | `whip-swish-2025-08-27-06-37-41-utc-whip-swish`, `fast-swish-movement-fast-swish-movement` | −16 to −20 dB |
| **Card / sticker / label** | Cards, stickers, labels, pills | `pop-up-pop-up`, `game-pop-up-2025-08-27-06-39-58-utc-game-pop-up-2`, `appear-enter`, `pop-flicker-ding`, `hitsmack-cte01-79-4` (the sticker slap) | −16 to −22 dB |
| **Count and land** | EV-3 | `telemetry-graph-rising-01-2025-08-27-06-33-50-utc-36877-telemetry-graph-rising-01-full` under the roll; `electric-hit-2025-02-20-01-45-58-utc-electric-hit-4`, `abstract-hit-sub-bass-07` on the land | −16 to −20 / −8 to −12 dB |
| **✕ / ✓** | EV-4 | `wrong-answer`, `wrong`, `correct-sfx`, `correct-answer-2fast`, `accept-flicker` | −16 to −20 dB |
| **Typing** | The keyword typed, the copy rebuilt, a story typed | `keyboard-typing-2025-02-18-23-33-14-utc-mountain-audio-typing-sound-3`, `keyboard-typing-2025-02-18-23-33-14-utc-mountain-audio-typing-sound-5`, `digital-text-2026-05-18-01-34-24-utc-digital-text-05` | −20 to −24 dB |
| **Step tracker** | EV-6, one per step | `0552611`, `0552621`, `0552631` | −20 dB |
| **Notification / DM** | Banners stack, a DM lands | `17571-download-iphone-notification-ringtone-iphone-sms-ringtones`, `hint-appear-2025-08-27-02-25-12-utc-hint-appear-01` | −16 to −20 dB |
| **Countdown** | P-23 | `clock-2025-08-27-06-56-42-utc-clock-3` (trimmed to ≤ 1 s) | −18 dB |
| **Shine / viral / gold** | "gold", "Congratulations", "LEGENDARY", "FREE" | `short-shine-2025-08-27-06-45-01-utc-short-shine-1`, `05405-shine-ding`, `bonus-win-bonus-win` | −14 to −18 dB |
| **Money** | A receipt, "$", sales | `cash-register-sounds-effects-no-copyright-free-use`, `money-2` | −14 to −18 dB |
| **Flash** | T-18, T-04 | `flash-2025-08-27-06-37-47-utc-flash-1`, `cinematic-transition-flash-05` | −10 to −14 dB |
| **Celebration** | P-33 fireworks, confetti | `confetti-pop-particles-spill` | −14 dB |
| **Into the payoff** | Once per reel, into the payoff cut, never under a full sentence | `riser-hit-2025-08-27-06-39-00-utc-riser-hit-1` (trimmed to its last ~1.5 s) or `riser` (trimmed to ~1 s) | −10 to −14 dB |

**Never in this style:** comedy or cartoon sounds, voice clips, meme hits, crowd reactions (N10); a bed, pad, 808 loop, drone or tension riser held under the talking (N14).

### 11.2 The SFX ledger (Studio Standard Rule)
- **Any file at most 2× in a reel,** except the one **list cue** (here `mouse-click-mouse-click` on every tap; the three step-tracker blips count as one rising set).
- **No file on two consecutive cues;** rotate within each pool.
- **Density:** about one cue every 1.0–1.5 s inside screens, mocks and data (this style is fast and punchy); on face beats only their events (the twist boom, a sticker, a layout move, a verdict); nothing on plain jump cuts.
- **Never more than two cues overlapping;** never on a consonant of the trigger word (slide ±2 f).
- The clicks, pops and ticks are texture; the booms, the verdict impacts and the payoff are what the viewer feels. Log every cue (id, time, role) in the ledger.

### 11.3 Silence and the mix
- **Silence** (no new SFX) for 0.5–1 s at the turn and the key instruction, and in the last 0.5 s before the loop cut (dj1, dj3, dj5); then the payoff lands on a boom.
- **Mix:** a dry, loud, compressed voice (speech median −13.8 to −15.8 dBFS), high-pass 80 Hz, de-ess; **−14 LUFS, true peak ≤ −1.0 dBTP**. The voice is always the loudest thing. A teardown subject's clip plays with its own audio at voice level.

---

## §12 Footage handling

### 12.1 Shoot setups
| Setup | Framing (full frame) | Use |
|---|---|---|
| **A: Desk medium** (house): seated, eye level, tripod, ~35 mm feel, lit set behind | head top 300–454, eyes 560–700, face x 535–567 | L-FULL and every shown layout |
| **A-tight / N armchair**: the same punched 115–130%, or an armchair by a night window | head top 260–360, eyes 583–624 | twist and close beats, L-SHARE |
| **Selfie** (not in the references): handheld, close | often head top < 60 or chin > 1000 | the tight fix (§3.3) in every layout: full screen with the text moved, or a designed box on the canvas; never over its own blur, never a pillar |

### 12.2 Crop table per layout (starting values; §3.3 wins)
| Layout | Placement |
|---|---|
| L-FULL | As shot; punches 115–130% on the face, hair ≥ 40 px from the top |
| L-SHARE | Punch ≤ 135%, pan until the face box sits in x 300–780 |
| L-TILE / L-POST | The full frame at ~64% in the tile (x 200–890, y 333–1490) / inside the post (x 71–1010) |
| L-CIRCLE | Ø 430 at x 540, top y 460; head ≤ 62% of Ø, hair ≥ 35 px under the top |
| L-CUTOUT | `CUT(n)` with head top y 724–780, eyes 940–1010, face x 460–540 |
| L-BLURCARD | Full frame, sharp (no blur), brightness ~55%, colour kept |
| L-DATACARD | The footage fills the card (cover-crop, x 70–1010, y 170–760), centred on the face, eyes ≈ 430, eyes to chin always inside; on the canvas, never on his blurred frame |
| Too tight anywhere | Full screen with the text moved (hair may touch the top edge, eyes to chin in), or a designed box on the canvas the footage fills (≥ 940 px wide as the hero, never a pillar); never over its own blurred copy |

### 12.3 Matte, frame rate, audio
- **Matte** only for L-CUTOUT, the depth sandwich (EV-5) and anything behind the hair: `vibe matte --seconds <those seconds>` in the background, one heavy job at a time, then `vibe prep-frames`.
- **Frame rate:** dj1 and dj2 are 24 fps, the rest 30. Render at 30 fps; conform 24 fps or variable-rate footage and recordings to constant 30 fps first.
- **Audio:** one clean voice track; high-pass 80 Hz, de-ess, light compression, two-pass loudnorm to −14 LUFS, true peak ≤ −1.0 dBTP.

---

## §13 Output contract

### 13.1 Beat sheet schema (one row per beat; the first ```yaml``` block of the edit brief)
```yaml
- id: 6
  section: STEP-2              # HOOK | TWIST | PROOF | STEP-n | CH-n | FIX-n | SIM-n | TURN | PAYOFF | CTA
  format: FMT-TAP
  layout: L-SCREEN             # L-FULL | L-SHARE | L-TILE | L-POST | L-CIRCLE | L-CUTOUT | L-BLURCARD | L-DATACARD | L-EXAMPLE | L-SCREEN | L-CANVAS | L-PHONE
  speaker: absent              # full | share | tile | post | circle | datacard | cutout | dimmed | example | absent
  faceless_run_s: 4.6          # running total since the face was last on screen (M5: ≤ 8)
  spoken: "Then open your drafts, tap on the three dots next to it and duplicate it."
  trigger: "duplicate"
  onset_s: 12.9
  pattern: P-02
  devices: [EV-1, EV-6]        # elevated devices on this beat
  visual: "Drafts at 120%, rows dimmed; cursor to ⋯; menu pops; tap 'Duplicate' on the word; new row + ≥ 44 px label"
  on_screen_text: ["Duplicate"]
  caption: "OPEN YOUR DRAFTS"  # CAP-WIDE on face layouts; CAP-SCREEN on screens (every word)
  colour_role: feature         # feature | wrong | right | gold
  transition_in: T-15
  sfx: [{id: mouse-click-mouse-click, t: 12.9}, {id: 0552621, t: 12.4}]
  face_check: "n/a (absent)"   # on face layouts: framing + 'whole head in, ≥ 40 px'
```

### 13.2 Hook proposals (3 required)
```yaml
- name: "Cheat code + secret setting"
  formula: HF-5
  frame0: "L-FULL mid-word; INSTAGRAM / CHEATCODE on the chest; settings row decoding"
  first_3s: ["push-in from f0", "settings row tilting in from 20° on f0", "label decodes f0–20", "toggle presses and flips on 'cheat code' (2.1 s)", "3.57 punch, title glitches out, gold flash, 'YOU DIDN'T / EVEN NOTICE'"]
  loop: "what the cheat code is (from 5 s)"
  why: "Face + promise on f0; the toggle makes 'secret setting' visible; the accusation twist"
```

### 13.3 What to show the creator
(1) the format and why; (2) the hook (3 proposals, one recommended); (3) the speaker map with every faceless run timed (≤ 8 s); (4) the beat sheet + transition map + the sound ledger; (5) the asset list (recordings, screenshots, own reels and profile, mocks, anything missing); (6) stills: frame 0, the twist, the first magnetic tap as it lands, a number at its slam, every shown layout's first frame (tile, circle, data card, cut-out), the payoff and the last frame next to frame 0 (the loop).

---

## §14 Worked examples and reference cheat sheet

### 14.1 dj5 "Instagram cheat code" rebuilt as a plan (`FMT-TAP`, 35.9 s)
**Choices:** HF-5 + H-1/H-2; no new SFX at 9.4–9.9 and from 35.4; ending E-1 + EV-7. The observed 24.6 s faceless run is split by a cut-out at 14.5 and the data card at 22.0 (fix M5). **This edition:** EV-2 dives into the new-reel screen at 5.13 and the donut canvas pulls back out at 29.70; EV-1 on every tap (the click is the list cue); EV-6 tracker STEP 1/3 (save as draft) → 2/3 (duplicate) → 3/3 (trial + normal); EV-3 on both donut counts; EV-4 as the toast lands green; every word captioned (`CAP-SCREEN` on the screens); scored per §11, no music.

| t (s) | Spoken | Layout | Visual / caption | Transition / SFX |
|---|---|---|---|---|
| 0.00 | "Instagram seriously just gave you…" | L-FULL | "INSTAGRAM / CHEATCODE"; settings row "Secret Settings" decoding; push-in 100 → 115% to 2.5 s | H-1 / boom |
| 2.10 | "…the biggest f*cking cheat code…" | L-FULL | Toggle flips on (4 f) | `digital-click` |
| 3.57 | "…and you didn't even notice." | L-FULL, punch 115% | Title glitches out; "YOU DIDN'T" + "EVEN" + "NOTICE" appended | T-02 / glitch |
| 4.50 | "When you go to upload your next video, right before you hit post…" | L-FULL | "RIGHT BEFORE / **YOU HIT POST**" | jump |
| 5.13 | "…save it as a draft." | L-SCREEN | New-reel screen at 120%; "Post" → "Wait! ✋" (P-04); tap "Save draft" on "draft" | T-17 / whoosh, click |
| 9.73 | "Then open your drafts, tap on the three dots…" | L-SCREEN | Drafts list; cursor to ⋯ | T-15 |
| 12.9 | "…and duplicate it." | L-SCREEN | Menu pops; "Duplicate" tapped; the duplicate row + a ≥ 44 px label | click, pop |
| 14.5 | "Now open the first draft and make it a trial reel…" | **L-CUTOUT** | He swings in over the dimmed draft; the Trial row boxed behind his hair | T-10 / low swoosh |
| 16.0 | "…and then hit post" | L-SCREEN | Trial on; Post tapped; toast "Trial Reel Posted" ≥ 44 px | click, pop |
| 18.0 | "then go back and post the second draft as a normal reel" | L-SCREEN | Back to drafts; post the duplicate | T-15, click |
| 22.0 | "the normal reel will get views from your followers…" | **L-DATACARD** over the white canvas | He shrinks into the card (EV-8); phone in from the right; donut "83% Followers" 560 px, 40K → 134K slams (P-29, EV-3) | EV-8 / swoosh, count + land |
| 26.0 | "…but the trial will only be shown to new people…" | L-CANVAS | Explore grid in the phone; blue "100% Non-followers", 67K → 133K | smear, count |
| 29.70 | "So same video…" | L-FULL | "SO" | T-19 / whoosh |
| 30.23 | "…but you get double the views…" | L-FULL | Two phone cards on the chest (P-30); "DOUBLE / **THE VIEWS**" | pop |
| 31.57 | "…all for free." | L-FULL | "• Normal 134K / • Trial 134K"; "FREE" slaps on; "ALL / **FOR FREE**" (gold) | shine |
| 33.67 | "So do this every time, because" | L-FULL | CAP-SOFT "So do this" → "every time" → "because" | T-19 |
| 35.90 | — | — | Hard cut, loops into "Instagram seriously…" | T-24 |

### 14.2 dj2 "Followers hooks from sh*t to gold" as a plan (`FMT-TEARDOWN`, key beats)
| t (s) | Beat | Layout | Visual / sound |
|---|---|---|---|
| 0.0 | Hook HF-2 | L-FULL | "FOLLOWERS HOOK / SH*T → GOLD"; before/after cards; red tint on "shit", gold bloom + 1.2M on "gold" / boom, shine |
| 3.7 | Subject | L-SCREEN (clip blurred, gold tint clearing, T-13) | Profile card; 01:00 ring on "60 seconds"; 3 → 1.2M / whoosh, ticks |
| 15.5 | Diagnosis | **L-CIRCLE** (hair ≥ 35 px under the top) | TXT-OBJ; VIRAL RATE 75% → 80% (≥ 40 px); red boxes; "WRONG DESIRE" / T-11 boom |
| 25.0 | Judgement | L-FULL, red tint fading | Profile card on the chest, "Weight Loss Coach" goes green / impact |
| 28.0 | Audience voice | L-SHARE (one camera, §3.6) | Bubbles "HEALTHY SWAPS?" red → "I WANT SKINNY" green / whip |
| 32.1 | Fix 1 | L-CIRCLE | "healthy swaps" ✕ → "low calorie swaps" ✓ + "[RISK REVERSAL]" |
| 46.7 | Recap | L-FULL | Card collapses left, ✓ writes on (T-14) / boom, `correct-sfx` |
| 52.6 | Data | L-CANVAS, grid 780 px | 99% → 9%; **(fix M5) the circle returns at ~60.5 for "a snacker at Walmart"** |
| 75.0 | Fix 2 | L-CIRCLE | New hook typed in green / typing |
| 83.2 | Payoff + CTA | L-FULL, CAP-WORD cuts every 1–3 s | Grid on the chest; banners from **generic senders** (fix N4); keyword typed; mention banner; T-24 |

### 14.3 Reference-reel cheat sheet
| Reel | Take | Don't copy |
|---|---|---|
| dj1 (`FMT-TAP`) | Light-swap jumps, toggle card, article fly-in + anchor iris, linked-pair view transfer, tile punch-out, cut-out over the highlighted result, thumbnail shuffle, loop | +0.4 dBTP; 17 s faceless; 15 px card text |
| dj2 (`FMT-TEARDOWN`) | Series title in verdict colours, circle + live copy edit, people grid, card collapse + ✓, word-punch close, keyword typed | +0.7 dBTP; "ACHIVE"; 18–20 px labels; tight circle; near-empty canvas; famous-name banners |
| dj3 (`FMT-CHAPTERS`) | Push-in hook, reframe to share, funnel chapter card + assembly + carry-over, progress-bar metaphor, example reel with its own captions, self-referential CTA | Reframes cutting the hair and face; 22 px tags; other-app tutorial slot |
| dj4 (`FMT-SIM`) | Emotion arc, slot carousel of own reels, sticker + eyeline, L-POST with the climbing pill, story build, notification stack | 25.6 s faceless; countdown alone on black; famous-name DMs and avatars; unreadable testimonials |
| dj5 (`FMT-TAP`) | Secret-setting toggle, word-append twist, fast tap steps with the relabelled button, white-canvas donut, this-vs-that cards + FREE, soft close, loop on "because" | Half-black recording frames; small donut and labels; 24.6 s faceless |

---

## §15 Look at your frames
Not a checklist; the questions the best editor asks while scrubbing:
- **Frame 0, sound off:** is he there full frame, mid-word and mid-gesture, whole face, rich colour, the title on his chest and a hook object already moving? Are there five changes by 3 s and a twist that lands like a verdict?
- **The frame:** is their video full screen or in a designed box (rounded, rimmed, on the style's ground), never a sharp rectangle over its own blur?
- **Every tap:** does the cursor travel on its arc, the control press and spring back, the click land on the verb? Can I see exactly where to tap, at phone size?
- **Every number:** does it roll and slam on its word, big enough to read from across the room?
- **The speaker:** is he back within ~8 s every time, moving through tile, circle, data card and cut-out with eased shrinks, never a pillar, never pale, the caption just under the chin?
- **Scale:** shrink the still to thumbnail size. Is the hero ≥ 860 px and the first thing I see, or is the frame half black? Can I read every caption, label and count?
- **Captions:** is every spoken word on screen, `CAP-WIDE` on the face and `CAP-SCREEN` under the UI, never over the tap?
- **Truth:** real screens, real numbers or labelled illustrations, no famous senders, private data blurred, every word spelled right?
- **Sound:** a click on every tap, a whoosh on every screen, a slam on every number, silence before the payoff, no file overused, no music?
- **The loop:** does the last frame flow into frame 0 without a seam?
- **Vibe:** urgent, insider, satisfying. Anything that feels like a lazy screen-recording or a meme edit comes out.

---

## §16 Build + render
- **Pipeline:** the plugin's edit skill: plan in the edit brief (beat sheet, transition map, sound ledger), draw every frame in `reel.js` (`frame(t)`), look at stills of every landing frame, score (`plan/sounds.json`, `vibe sfx`), then storyboard and render; 30 fps.
- **Fonts (bundled):** Unbounded, Montserrat, Poppins, Bodoni Moda, Silkscreen, Permanent Marker, JetBrains Mono, Anton, Inter Tight.
- **Helpers you'll want** (pure functions of t): `FaceFit(box)` (cover-fits the footage into any frame or box, centred on the face so eyes to chin are in; never a blurred copy behind it; uses `FACE(n)` / `FACE0`), `TitleHook`, `CapWide` (equal-width lines, one highlight, sheen), `CapWord`, `CapEx`, `CapSoft`, `TextObj`, `TapCursor`, `ScreenRec(asset, zoom, target, dimRows)`, `Sheet`, `ToggleCard`, `ReelCard`, `LinkedPair`, `Counter`, `ArticleFly`, `AnchorIris`, `Tile`, `PostCard`, `CirclePIP`, `Cutout` (`CUT(n)`), `PeopleGrid`, `Donut`, `Funnel`, `ProgressBar`, `Countdown`, `ActivityPill`, `StoryBuild`, `Phone3D`, `NotifStack`, `CommentField`, `Sticker`, `Particles`, `RGBGlitch`, `GlowBloom`, `Wash`, `WhiteHaze`, `Static`; this edition: `MagneticTap` (EV-1), `PhoneDive` (EV-2), `NumberSlam` (EV-3), `VerdictSweep` (EV-4), `DepthSandwich` (EV-5), `StepTracker` (EV-6), `LoopSeam` (EV-7), `DataCard` (EV-8), `CapScreen` (§5.9).
- **Matte** only for the cut-out and depth-sandwich seconds (`vibe matte --seconds …`), one heavy job at a time.
- **Final:** 1080×1920, H.264, AAC, −14 LUFS, true peak ≤ −1.0 dBTP; check a contact sheet of the final file.

---

## Appendix A. Evidence map
| Rule / element | Reels |
|---|---|
| Frame 0: full-frame face mid-word + title on the chest | 5/5 |
| Wide heavy all-caps chest captions, equal-width lines, one glowing highlight line | 5/5 |
| No captions over screens / canvases in the references (this edition: every word, `CAP-SCREEN` under the UI) | dj1, dj5 (and the mock stretches of dj2–dj4) |
| The speaker moves (full ↔ shown ↔ absent ↔ full) | dj1 tile + cut-out, dj2 circle, dj3 share, dj4 post, dj5 bookends |
| Real recording + tap cursor + dimmed rows | dj1, dj5 |
| Drawn mocks simulating the tactic; counters on the word | 5/5 |
| Verdict colours red / green / gold, cyan for the feature | dj2, dj3, dj4 (dj1, dj5 cyan) |
| Chapter card + assembly; live copy edit in a circle | dj3; dj2 |
| Emotion-matched type | dj4, dj5 (dj3 example captions) |
| SFX on cuts and landings in the references (this edition scores every tap, screen, card, number and verdict, §11); the references also ran a bass-led bed (we don't: no music, ever) | 5/5 |
| Keyword typed in a comment field; loop ending | dj2, dj3, dj4; dj1, dj3, dj4, dj5 |
| 3.2–3.7 words/s, no gap > 0.5 s | 5/5 |
| Fixes: true peak (dj1–dj3), typo (dj2), face cut by reframes (dj3), tight circle (dj2), unreadable labels (5/5), near-empty frames (dj2–dj5), long faceless runs (dj1, dj2, dj4, dj5), famous-name notifications and avatars (dj2, dj4), other-app tutorial slot (dj3) | as listed |
| The magnetic tap, the dive through the phone, the number slam, the verdict sweep, the depth sandwich, the step tracker, the seamless loop, the data card; ≤ 8 s faceless; sizes as floors (captions ≥ 76 px, labels ≥ 44 px, heroes ≥ 860 px); every word captioned, `CAP-WIDE` under the chin and `CAP-SCREEN` on screens; never pale; a fully scored SFX design with the ledger rule, no music; the whole face always, never a pillar | **The creator's directions, 11–12 Oct 2026** |
