# Hands-On Proof Playbook (v2, "The Real Thing, Full Frame, Elevated" edition, for Claude Opus 5.5)

> **In this plugin:** this file is the whole playbook: every observed value and recipe from the 3 reference reels is in it, and there is no other playbook file to open. Frame counts are measured at each reel's own rate (mw1 at **24 fps**, mw2 and mw3 at **30 fps**; the reel is named beside every number): convert with t = f / fps when you draw (`frame(t)` runs at the render fps). Positions are on 1080×1920 (the sources were 720×1280, scaled ×1.5). The per-reel notes this file cites (`mw1…mw3`) are not shipped. Sounds are picked by id from SOUNDS.md; commands are in the edit skill's REFERENCE.md. The page gives you `FACE(n)` and `FACE0` (with `head_top` and `chin`) for every speaker frame.

**Purpose:** you (Claude) receive a talking-head video of the creator plus its script. Use this document to **ideate and build** every hook, cut, whip, punch, counter, overlay, caption and sound, then edit the Reel so it looks and sounds like a fast, glossy, hands-on tech Short: **the speaker says it, and the next frame is the real thing doing it, full frame**, cut with such gloss, weight and timing that the viewer can't look away and watches it twice.

**What v2 is:** a frame-by-frame analysis of 3 finished Shorts by Mrwhosetheboss (Arun Maini, a British tech reviewer), **elevated ten times** by the best editor, motion designer and creative director in the world. The "say it, see the real thing" grammar is kept whole; this edition makes every cut a continuous camera move, lifts the one detail that proves each fact off its screen, gives the loud element real weight, lets the speaker dock under the thing he's judging, and scores every real-thing event with a precise, glossy sound. All measured layouts, recipes and rules are kept. Where a reference reel and a direction disagree, **the directions win**. The three reels:
- **mw1** (24 fps, 27.8 s), an announcement skit: a phone opinion is interrupted by a message invite to a charity football match; he reacts, throws the phone, announces it; the event's launch card closes it.
- **mw2** (30 fps, 36.9 s), a rapid-fact listicle: "What they don't tell you about the iPhone", five hidden phone behaviours, each shown on the real device in his hands.
- **mw3** (30 fps, 45.5 s), an escalating experiment: "Can your iPhone see the back of your head?", the phone's photo-reframe feature run 20 times on one photo, with a live red counter.

The analysis covered cut lists, framing measurements, caption timing, motion-graphic frame recipes, colour samples and audio (SFX, loudness).
- Every rule below is either **observed** (seen in the reels, with the most consistent value chosen as the house standard), a **fix**: something a reel got wrong (or something that cannot ship from a plugin user's account) that this playbook forbids or replaces, or this edition's **elevation** (marked as such; §6.0, §8.0, §8.8).
- **This style is not one layout.** One creator, one temperament and one "show the real thing" grammar carry **three formats** (§3): the rapid-fact list, the counter experiment and the reaction skit. Pick the format from the script.
- **The speaker moves.** Full frame is home: never split, never a picture-in-picture bubble. His movement is **full frame ↔ the real thing full frame**: the talking head owns the claim, the joke and the reaction; the real thing takes the whole frame on its word; motion-blur whips, radial zooms and punch ladders join the two. His "small → big" is done with content: the result seen small on the device is blown up full screen. This edition adds one designed move, the **show-and-tell dock** (`L-10`, EV-8): he eases into a wide card under the real thing for an opinion that needs the thing visible, then grows back to full frame.
- **His footage is hard to copy.** He shoots macro B-roll of real products, a second camera, studio light. Plugin users usually have **one talking-head take plus screen recordings or photos**. §3.6 (clearly marked **ADAPTATION**) carries the same grammar onto that footage, using the devices seen in these three reels plus this edition's elevations.

**Measured sizes are floors, not targets.** The references' subtitles (≈ 48–56 px), counter (≈ 80 px), title (cap 66–100 px) and bubble text (≈ 31 px) were small on a phone. Here:
- **Captions** `CAP-SUB` **72–80 px**, every word. Never below the floor: split the phrase instead.
- **The real thing is the hero:** a recording, photo or macro fills the frame height (or ≥ 1000 px wide for a landscape recording); the one detail that proves the fact reads at **≥ 48 px**: punch it (EV-3) or lift it (EV-2) until it does.
- **The loud element:** `TITLE-3D` card 1 cap ≥ 120 px and **900–960 px wide** (no card below a 88 px cap); `COUNTER` **120–140 px**; `BUBBLE` **860–940 px wide** with 56 px body text.
- **The dock** (`L-10`): the real thing **≥ 960 px wide** on top, the speaker card **≥ 940 px wide** below. The card is a **wide 16:9 crop of the speaker (≈ 940×530)**, never a small 4:5 box under a grid.
- **A page is never the hero; its one line is.** The 12 Oct test showed whole web pages and a six-window grid with ≈ 15 px text, and blurred pages with a tiny pull-quote: unreadable on a phone. So: a full page shows for **≤ 0.6 s** as the landing, then the camera pushes (EV-3) or the line lifts (EV-2) until the named part reads at **≥ 56 px** in a card **≥ 860 px wide**. A group of windows is **at most 4**, each **≥ 480 px wide** with its name ≥ 48 px, held ≤ 1.2 s before it pushes into the one being named.
- **Captions over a bright page** sit on a dark band or a soft dark shadow plate, never white-on-white.
- **No dead frame:** a frame that is more than half plain or blurred background for longer than ~0.7 s means the thing is too small or the next element is late: punch, lift or cut.
- **The selfie stays big:** a tight selfie stays full screen (hair may touch the top edge, eyes to chin always in; move the text, not the video) or fills the dock card; never shrunk over its own blurred copy; the dock card stays **≥ 940 px wide**, never a narrow pillar.
- **Full screen or a box, never any footage or picture over its own blur** (Naman, 13 Oct): the creator's video either fills the frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground or scene) that it fills completely (cover-crop centred on the face). The same goes for every recording, screenshot, photo, diagram and clip: it fills the frame (cover-crop to the part that matters, or a push-in) or sits in a designed box on the style's own ground (its colour, gradient, texture, grid or drawn set). Never a sharp box over a blurred or darkened copy of itself, never a band padded with blurred bars: that hard rectangle inside the frame looks cheap. A tight selfie stays full screen: move the text, not the video; hair may touch the top edge, eyes to chin always in; when the whole head must show, use a box layout on the style's ground. A matte cut-out over a plate and a whole-frame blur transition are fine.
- **Full screen or a box, never their own blur** (Naman, 13 Oct): the creator's video either fills the frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground or scene) that it fills completely (cover-crop centred on the face). Never shrink it over a blurred or darkened copy of itself, never pad a band or box with blurred side bars, never set a card on their own blurred frame: that hard rectangle inside the frame looks cheap. A tight selfie stays full screen: move the text, not the video; hair may touch the top edge, eyes to chin always in; when the whole head must show, use a box layout on the style's ground. A matte cut-out over a plate and a whole-frame blur transition are fine.

**Never pale.** The look is a glossy tech ad: saturated, medium-high contrast, deep blacks, warm skin, bright clean screens. Never desaturate, fade or lift the blacks as a look; nothing (the creator's footage or any recording) is ever shown over a blurred copy of itself. The only dimming is functional and brief: the rest of a screen behind a UI lift (EV-2), the edges in a focus punch (EV-3).

**How to use this file:**
- Follow §1 (procedure) in order.
- Look up visuals by ID: formats `FMT-…`, layouts `L-…`, hook formulas `HF-…`, hook visuals `H-…`, structure devices `SD-…`, B-roll families `B-…`, graphic families `G-…`, patterns `P-…`, transitions `T-…`, endings `E-…`, elevated devices `EV-…`.
- §2 is the craft that never bends; §2.1 is the house grammar (what makes this style, with reasons). Everything else is a default you adapt like the best editor in the world, with a one-line reason.

### The feel (read this twice)
This is **a glossy product film cut by a friend who is slightly unimpressed by everything except the one thing he's about to show you.** He says it, and before the word has finished the real thing fills the screen: sharp, lit, alive, a finger on the glass. The camera whips with intent and the motion carries straight through the cut; the detail that matters leaps forward off its screen; a soft glint runs across the hero; a number ticks over with a satisfying weight. Then he's back, dry, one line, a face-palm laugh, and it's already the next fact. It feels **premium, fast and honest**: keynote polish with a reviewer's deadpan. Nothing is decoration and nothing is fake: every pixel of proof is the real device or the real screen. If it looks like a meme edit, it's wrong; if it looks like a slow unboxing, it's wrong too.

**Who the reference creator is:** a British tech reviewer, dry and slightly deadpan, breaking into broad, genuine reactions (a face-palm laugh, a scream). **Fast, no filler** in the explainers (4.1 words/s); slow only when the silence *is* the joke (the skit, 1.6 words/s). The product is in his hand in every A-roll shot. His authority is that **you see it happen on the real device, in his hands, within a second of him saying it.**

**Audience (ICP):** mainstream phone owners and tech-curious viewers, global, English-speaking. Not engineers: people who use the thing every day and want the hidden trick, the weird test, the surprising number. They need to *see* the behaviour on a real screen, big and sharp; they don't want diagrams.

**Style lineage:** a glossy "tech-ad" creator edit, built from four layers:
1. **Speaker layer:** one tripod mid-shot per reel, eye level, shallow focus, a strongly coloured set. Full frame is home, re-framed between returns (centre / left third / right third); this edition adds one designed move, the show-and-tell dock (`L-10`).
2. **Real-thing layer:** full-frame hand-held macros of the actual device doing the thing, on (or 0–0.3 s before) its noun; the device on a tripod as a "lab"; the result full screen. 60–66 % of the runtime in the explainers. No stock, no diagrams, no icons.
3. **Glue layer:** whip pans, radial zooms and spin whips (6–10 f) at topic changes; hard cuts inside a fact; punch-ins and punch ladders for rhythm.
4. **Type layer:** **one loud element per reel** (a 3D blue italic hook title, *or* a red odometer counter, *or* a realistic message bubble) and otherwise quiet white sentence-case subtitles that never animate (here 72–80 px, every word, just under the chin on the face).

### Creator directives
| # | Directive | Where it lives |
|---|---|---|
| D1 | **Ten times better, same soul.** Keep "say it → see the real thing, full frame" and the one loud element; raise the craft: whips that carry the motion through the cut, the proof detail lifted or focus-punched, a counter with weight, glints on the heroes. Premium and fast, never busy, never fake | The feel, §8.0 |
| D2 | **The speaker moves:** full frame ↔ the real thing full frame on its word, re-framed every return, and into the dock (`L-10`) and back for show-and-tell; the talking head 30–40 % in the explainers; frame 0 is him mid-gesture with the thing in hand | §3.2, §3.6 |
| D3 | **Seamless, running motion:** every blur transition is one continuous camera move (EV-1), every landing settles with a 2-frame overshoot, something moves inside every shot, a change every ~1–1.8 s in the explainers | §8.0, §9, §10 |
| D4 | **Sound is scored like Naman's, at this style's volume:** precise whips, glass taps, focus clicks, soft UI opens, a tick on every counter flip, a few deep hits on reveals; opinion lines and the skit's silences dry. **No SFX file more than 2× in a reel** (the one list cue excepted). **No music bed, ever** | §11 |
| D5 | **The whole face is always visible** at every framing, punch, settle, side angle, reaction and in the dock; a tight selfie stays full screen or fills the dock card, never a narrow pillar, never over its own blur | §2, §3.4, §12.2 |
| D6 | **Captions are seen:** every spoken word, `CAP-SUB` 72–80 px, just under the chin on the face, one fixed band on the real thing; still quiet (no pop, no colour) | §5.2 |
| D7 | **No imposed checks.** This file gives taste, recipes and reasons; you decide like the best editor and creative director in the world. Only craft never bends | §2 |

### The reference reels → this edition, at a glance
| Area | The reference reels | This edition |
|---|---|---|
| The cut to the real thing | Whip / radial / spin (6–10 f) at topic changes, hard cuts inside | The same, as a **motion relay** (EV-1): the blur continues the outgoing motion and the incoming thing lands at 103 % and settles |
| Showing the detail | Punch-ins +15–40 % | **Focus punch** (EV-3): the punch plus a rack to the detail; or the **UI lift** (EV-2): the real UI element lifts off its screen in 2.5D |
| The speaker | Full frame 100 %, re-framed per return | The same, plus the **show-and-tell dock** (`L-10`, EV-8) for 1–3 beats per 60 s |
| The loud element | Title / counter / bubble at small sizes | Still one per reel, bigger and with weight: a lit, extruded title with a glint; a counter that thumps; a 56 px bubble |
| Comparisons | Two shots, a hard cut | A **before/after wipe** on the same framing (EV-5) |
| Captions | 48–56 px, low in frame (mw2 under the app UI); none in the skit | **72–80 px, every word**: under the chin on the face, a fixed band on the real thing; still quiet |
| Sound | 3–7 cues per reel: an f0 boom and whooshes on blurs; the skit dry | **Scored** at about one cue every 1.2–2.0 s on real-thing beats: whips, taps, focus clicks, lifts, glints, counter ticks, reveal hits; opinion lines and the skit's silence dry (§11) |
| Colour | Glossy and saturated (mw3's garden slightly lifted) | **Never pale**: glossy, saturated, deep blacks (§4.4) |
| The ending | Button line / extreme result / a third party's card | The same, with a **seamless loop** (EV-7) on the button line; the user's own card |
| Checks | MUST / NEVER lists, a QA checklist, a checkpoint | **Craft only** (§2); the house grammar (§2.1), questions (§15) and your judgement |

### Formats at a glance
| Area | `FMT-LIST` rapid-fact listicle (mw2) | `FMT-COUNTER` escalating experiment (mw3) | `FMT-SKIT` reaction / announcement skit (mw1) |
|---|---|---|---|
| Use when | N facts, tricks, hidden features, "things they don't tell you" | One action repeated or pushed further and further ("what if we keep doing it?"), a test, a stress test | A story that happens *to* the speaker on camera: a message, a delivery, a surprise, an announcement |
| Speaker | Full frame, ≈ 34 % of runtime, re-framed each return; the dock (`L-10`) for 1–2 show-and-tell beats | Full frame, ≈ 36 %, leaning into the lens, the "lab" (device on a tripod) in shot at frame right; the dock under a reveal once | Full frame close-up ≈ 66 %, one wide second angle ≈ 15 % (no dock: the skit is one take) |
| The real thing | Full-frame hand-held macro of the device doing the fact, ≈ 66 % | The device on its tripod (punch ladders) ≈ 36 % + the result full screen ≈ 25 % | The prop in his hands; one diegetic message bubble on the plate at chest height |
| The movement | Talking head full ↔ real thing full, a swap every ~1.8 s | Talking head ↔ device ↔ full-screen result, accelerating to 0.47 s steps | Close ↔ wide ↔ close, cuts only on reaction peaks |
| Loud element | 3-card 3D blue italic hook title (first 1.3 s only) | Red "Label: N" counter, persistent, odometer flips | The message bubble (8.6 s hold) |
| Captions | Quiet white subtitles, ≈ 48 px in the reference → **72–80 px, every word**: just under the chin on the face, a fixed band (baseline y≈1440) on the real thing | ≈ 56 px under the counter → **72–80 px**: under the counter on the device, under the chin on the face | None in the reference → **every word**, quiet, never telegraphing the twist (the silent read has no words) |
| Transitions | Whip pans, radial zooms, spin whips at topic changes; hard cuts inside a fact | Radial zoom-through into/out of the device, one whip, punch ladders, hard cuts into reveals | Hard camera-angle cuts, a J-cut, cut to black into the end card |
| Sound (references → here) | An f0 boom, whooshes on blurs (≈ 7 cues) → **scored**: whips, taps, focus punches, UI lifts, a glint, number lands (§11) | Boom, zoom, maybe a riser → **scored**, with a soft tick on every counter flip (the list cue) and a hit on each full-screen reveal | None → **nearly dry**: an f0 sound and the user's end card only; the silence is the joke |
| Ending | Reaction line + face-palm laugh, hard stop | The most extreme result full screen, hard stop | A branded end card (fix: the user's own card, or a hard stop) |

### Quick index
| § | What |
|---|---|
| §1 | Procedure (do this in order) |
| §2 | Craft that never bends + §2.1 the house grammar |
| §3 | Formats, layouts (incl. the dock `L-10`), the speaker's movement, framing the face, safe zones, **§3.6 ADAPTATION** for one talking head + screen recordings/photos |
| §4 | Colour tokens, the meaning of colour, never pale |
| §5 | Type tokens and caption systems (`CAP-SUB`, `TITLE-3D`, `COUNTER`, `BUBBLE`) |
| §6 | Hook system (the 10× hook, formulas, visuals, timing, endings) |
| §7 | Structure devices: the fact ritual, the escalation loop, the skit beat, open loops |
| §8 | B-roll and graphics system: the 10× layer, families `B-…` / `G-…`, patterns `P-…`, frame recipes, line → pattern lookup, density, assets, fixes, elevated devices `EV-…` |
| §9 | Transition system `T-01…T-16`: recipes, grammar, map, budget |
| §10 | Motion tokens, camera, layers, finishing |
| §11 | Sound design (real ids, the ledger, silence, the mix) |
| §12 | Footage handling (setups, crop table, tight footage, frame rate, audio) |
| §13 | Output contract: beat sheet schema, hook proposals, what to show the creator |
| §14 | Worked examples (mw2, mw3, mw1 as plans; a selfie + recordings adaptation) + cheat sheet |
| §15 | Look at your frames |
| §16 | Build + render |
| App. A | Evidence map |

---

## §1 Procedure (follow in order)

1. **Inventory.** Probe the footage. Identify the setups (§12.1): tripod talking head, selfie, real-thing B-roll, screen recordings, photos, result images. Measure the head on sampled frames: it decides how far every punch can go (§3.4).
2. **Transcribe** with word timestamps. Captions are every spoken word, in phrases of 2–5, sentence case, punctuation kept (§5.2). Check every product and feature name against the script.
3. **Choose the format** (§3.0):
   - a list of facts, tricks or features → `FMT-LIST`;
   - one action pushed further and further, a test with a number that climbs → `FMT-COUNTER`;
   - something that happens to the speaker on camera (a message, a surprise, an announcement) → `FMT-SKIT`.
   One line on why. If the footage has no B-roll of the real thing, read §3.6 now: the format stays, the real-thing layer comes from screen recordings and photos.
4. **Segment** the script: `HOOK` (0–1.4 s `FMT-LIST`, 0–4 s `FMT-COUNTER`, the bait in `FMT-SKIT`) → `FACT-n` / `ROUND-n` / `BEAT-n` → `PAYOFF` (the button line or the most extreme result) → `END` (hard stop or the user's own end card).
5. **Mark every real thing** the viewer must see (the feature, the screen, the number, the result) with its onset. Each gets its full-frame real visual cut in **on the noun or 0–0.3 s before it** (mw2), and each number in `FMT-COUNTER` gets a counter flip and a punch step (mw3).
6. **Plan the speaker map** (§3.3): for every beat, talking head (`L-1` + its framing), the real thing full frame (`L-2…L-7`), or the show-and-tell dock (`L-10`, 1–3 per 60 s) when he judges a thing that must stay visible. The talking head takes the claim, joke, opinion and reaction; the real thing takes the fact. Full frame is home; the dock is the only box, and it is wide.
7. **Ideate 3 hooks** (§6) and recommend one. Frame 0 always shows the speaker's whole face and the real thing, already moving (§6.0, §6.1).
8. **Fill the beat sheet** (§13): one beat per real thing, number or reaction, so the picture changes every ~1–1.8 s in `FMT-LIST`/`FMT-COUNTER`. Each beat gets its layout, framing, pattern, transition in/out, caption phrases and sound.
9. **Plan the transition map** (§9.3): a blur transition (whip, radial, spin) at every topic change; hard cuts inside a fact; punch ladders on counted numbers. Check the budget (§9.4).
10. **Produce the assets** (§8.6): the real device or app doing the thing (filmed, or recorded on screen), the real result images, the real message (only if it was really received). List anything missing. Never fake a UI, a result or a number.
11. **The 10× pass and the score** (§8.0, §8.8, §11): for every beat, its hero detail and how it lands (relay whip, focus punch, UI lift, glint, before/after, dock); then score every real-thing event and log the sound ledger. **Attack the plan:** where is a proof detail too small to read? Where does a whip not carry the motion? Where is the speaker on the same framing twice? Where is a frame half background? Where is a sound on a plain cut or under an opinion line? Fix it in the plan.
12. **Show the creator** the plan and stills (§13.3).
13. **Build, look at your frames (§15), score, render (§16).**

---

## §2 Craft that never bends
- **The whole face is always visible:** hair to chin, ≥ 40 px inside every edge, at every framing, punch, settle, side angle, reaction and in the dock; tight footage stays full screen (hair may touch the top edge, eyes to chin always in; move the text, not the video) or fills the dock card; never shrunk over its own blurred copy. Captions may cross the face.
- **Text never sits on text:** a caption never over the loud element or a lifted UI; the counter and its subtitle keep their stack.
- **Sound in sync:** every SFX on the frame its picture lands, never on a consonant (slide ±2 f); nothing louder than the voice.
- **True and real:** every feature, number, result and message is the real one, from the script or the user's own device; no mock-up, invented result or fake message.
- **Readable at phone size:** captions 72–80 px; anything meant to be read ≥ 48 px; the real thing big.
- **Loudness:** −14 LUFS integrated, true peak ≤ −1 dBTP; a hard stop ≤ 0.4 s after the last word (or the user's own card).

Everything else is direction. You decide; write your reasons into the plan.

### 2.1 The house grammar (what makes it this style)
Not checks: this is what the three reference reels do every time, and why it works. Break one only with a reason in the plan. (The IDs are kept because other sections cite them.)
- M1. **Full frame is home.** No split, PiP, corner box or cut-out (3/3 reels). He moves full frame ↔ the real thing full frame (§3.2): in `FMT-LIST`/`FMT-COUNTER` the talking head holds 30–40 % of the runtime, the real thing 60–70 %. This edition's one designed exception is the **show-and-tell dock** (`L-10`, EV-8): one wide card under the real thing, 1–3 times per 60 s.
- M2. **The whole face is always visible, hair to chin, in every talking-head frame:** at every punch-in, punch ladder, push-in, re-frame, reaction close-up and whip settle. How far a zoom goes is decided by the face, never by the frame. **Captions may cross the face.** Fixes (the list is in §8.7): reaction close-ups and a side angle that cut the head (mw2, mw3), and opening settles that slid the face off the edge (mw1, mw2). When the source is tighter than the face allows, shift it down first, then scale it down only as far as needed (≥ 88 %) over a blurred copy of itself (§3.4).
- M3. **Frame 0 is never empty and never still.** The whole face and the real thing are on screen at f0, already moving (T-01). All three reels open on him in motion; this edition keeps that and fixes the face at the edge.
- M4. **Show the real thing, on its word.** Every feature, screen, number or result spoken appears **full frame on the real device (or its real recording)**, on the noun or up to 0.3 s before it (mw2 cuts exactly on "15" at 20.40 s). No diagrams or icons stand in for it.
- M5. **One loud element per reel.** Pick exactly one: the 3D hook title (`FMT-LIST`), the live counter (`FMT-COUNTER`), or the message bubble (`FMT-SKIT`). Everything else on screen is quiet: white subtitles, the product's own UI. This edition makes the loud element heavier (§5.3–§5.5), not more numerous; the elevated devices (§8.8) are motion, depth and light on the real thing, not extra loud graphics.
- M6. **Captions are quiet, and every word is on screen:** white, semibold, sentence case with punctuation, 2–5 words, hard swaps, no pops, no colour, no word highlight; just under the chin on the face, one fixed band on the real thing (§5.2). They sit on top of whip and zoom blurs, sharp.
- M7. **Readable at phone size.** Subtitles 72–80 px; the counter 120–140 px; the hook title cap ≥ 88 px (card 1 ≥ 120 px); the message bubble's text 56 px; nothing that carries information below 48 px. Fixes: mw1's bubble text (≈ 31 px) and its ≈ 18–20 px small lines; mw2's 48 px subtitles vanishing over white phone screens (§8.7). The product's own UI inside filmed footage is footage, but shown big enough to read (≥ 48 px here when it carries the fact; mw2 ran 30–40 px): punch it (EV-3) or lift it (EV-2) until it is.
- M8. **Pauses cut in the explainer formats:** `FMT-LIST`/`FMT-COUNTER` run at ≈ 4.1 words/s with no gap over 0.4 s (one reaction gap ≤ 0.7 s is allowed, mw3 0.68 s). `FMT-SKIT` keeps its silences on purpose (1–3 s) when the reaction *is* the content (mw1).
- M9. **A blur transition marks a topic change; a hard cut stays inside a topic** (mw2: blurs at 10.6, 17.93, 24.4, 29.8 s, all fact starts). Never a blur transition between two shots of the same fact.
- M10. **Compress repetition** (`FMT-COUNTER`): the first rounds get ~2.5 s each; later rounds collapse into a punch ladder of 14–15 f steps, one number per step (mw3). Never play the same beat at the same speed twice.
- M11. **Re-frame every talking-head return:** centre, left third, right third, or a punch-in, so no two consecutive A-roll shots share a framing (mw2), always within M2.
- M12. **Facts and results are real:** every number, behaviour and result image comes from the script, the user's own device or the user's own recording. A recreated message bubble shows only a message the user really received (mw1's bubble was a real invite).
- M13. **Audio:** −14 LUFS integrated, true peak ≤ −1 dBTP. Fixes: mw1 −0.5, mw2 −0.8, mw3 −0.6 dBTP (all too hot); mw1 −14.8 and mw2 −14.3 LUFS normalised to −14.
- M14. **End clean.** A hard stop ≤ 0.4 s after the last word or the button gesture (mw2 stops mid-gesture at 36.93 s; mw3 on the final image). If an end card is used, it is the user's own and ≤ 4.5 s (§6.4).

**Never in this style:**
- N1. Drawn graphics over the product: no arrows, icons, emoji, stickers, number badges or stock footage on the real thing (mw2, mw3). The two exceptions are the neon outline pointer on the first mention of the prop (G-4, 8 f) and the counter (G-3). This edition's elevations are not drawn graphics: the UI lift (EV-2) moves the product's own UI, the focus punch (EV-3) is depth, the glint (EV-6) is light.
- N2. Animated subtitles: no pop, scale, bounce, colour or karaoke (mw2, mw3). The only animated text is the one loud element.
- N3. The loud element twice: the 3D title lives only in the hook; the counter only between its first and last value; the bubble only for its message.
- N4. Flashes, light leaks, glitches, RGB splits, crossfades between scenes. The glue is motion blur (whip, radial, spin), punches and hard cuts (3/3).
- N5. Sound on a plain hard cut, under the opinion lines, or on the message bubble (mw1 had no "ding": the silence is the joke). Every SFX belongs to a picture event (§11).
- N6. Comedy or cartoon sound effects, crowd sounds, voice memes. The comedy comes from his face and the silence (mw1), never from a sound.
- N7. A third party's branded card, logo sting, or plug in the user's reel. Fix: mw1 closed on an event organiser's launch card; that slot becomes the user's own end card or a hard stop (§6.4).
- N8. A device brand as a style rule. Brand names appear only when they are the reel's subject, spelled as the brand spells them.
- N9. Invented messages, results or comments from real people. A bubble, a result, a screenshot is the real one.
- N10. A head cut by the frame, or a punch further than the face allows (M2).
- N11. A long black tail, a fade to black, or an outro louder than the voice.
- N12. Music, ever: no bed, track, drone or loop under the voice (the creator's direction, 12 Oct 2026).
- N13. A pale picture: desaturated, faded or lifted-black footage, or a washed-out blurred fill (§4.4).
- N14. A narrow pillar, or the creator's footage shrunk over a blurred copy of itself (Naman, 13 Oct): keep it full screen, or a dock card ≥ 940 px wide that it fills (§3.4).

---

## §3 Formats, layouts, the speaker's movement, safe zones

### 3.0 Choosing the format
| The script… | Format |
|---|---|
| …lists N facts, features, tricks, settings, "things you didn't know" | `FMT-LIST` |
| …does one thing again and again, pushes a test to the limit, counts something up (rounds, attempts, drops, days) | `FMT-COUNTER` |
| …is a moment that happens on camera (a message arrives, a parcel, a surprise, an announcement) | `FMT-SKIT` |
| …mixes them | the dominant one; borrow at most one device from another (e.g. a counter inside a list of tests, a message bubble opening a list) |

### 3.1 The talking head's framings (all full frame)
| Framing | Reel | Head top y | Eye line y | Face centre x | Head height | Notes |
|---|---|---|---|---|---|---|
| **A-desk** close-up | mw1 (24 fps) | 195–390 | 450–510 | 375–495 | ≈ 380 px | Seated, desk edge at y≈1530–1605; slightly tighter after the cut back (head top 195) |
| **A-library** mid-shot, centre | mw2 | 186–234 | 510–555 | 510–555 | ≈ 330 px | Standing, phone in hand, chest mic visible |
| **A-library** left third | mw2 f760 | 225 | 510 | 330 | ≈ 330 px | — |
| **A-library** right third | mw2 f1080 | 195 | 480 | 795 | ≈ 330 px | Phone held to frame left |
| **A-outdoor** lean-in | mw3 | 204–420 | 495–690 | 270–420 (left third) | ≈ 400–450 px (guess) | Leans into the lens; the device on its tripod stays in shot at x≈800–1000 |
| **Side angle** | mw2 29.8–31.47, mw3 7.77–9.27 / 26.43–28.9 | — | — | 930 (mw2) / left (mw3) | — | He looks at the device; mw3 turns to the lens mid-take. **Fix:** mw2's side angle cut the back of the head at the right edge; ours keeps the head ≥ 40 px inside |
| **Wide** second angle | mw1 13.83–18.0 | ≈ 495 | — | ≈ 420 | ≈ 90 px | Whole body, small, in the room |

House framing for a new reel (the median of the three): **head top 190–420, eye line 480–690, head 330–450 px tall**, face centre on a third or the centre line, the hand with the device beside the face or at chest height. Every framing keeps **≥ 40 px of air above the hair and the whole chin inside**.

### 3.2 The speaker's movement (every reel): full frame ↔ the real thing full frame
Full frame is home. The movement is mostly a **swap of the whole frame**, made continuous by motion blur (and, in this edition, by the motion relay, EV-1); the one designed exception is the show-and-tell dock (`L-10`, EV-8). It follows the words:

| Move | When (the trigger) | How (frames at the reel's rate, measured) |
|---|---|---|
| **Talking head → real thing** | The fact's noun ("screenshot", "carousel", "15", "burst photos") or the action ("let's go again") | A blur transition at a topic start (whip ~7 f, radial 8–10 f, spin 6–8 f), a hard cut inside a topic; the real thing on 0–0.3 s **before** the noun (mw2: 9 swaps A→B; mw3: 14 cuts to the device or result) |
| **Real thing → talking head** | The opinion, joke or reaction ("is all an illusion", "serious hoarding problems", "Oh my God") | Hard cut on the phrase boundary, or a radial zoom out of a result (mw3 15.97, 37.93 s); A-roll shots 0.9–2.5 s, one explain beat 4.4 s |
| **Small → full** ("reveal = full screen") | The result is named ("…a little funny", "hurricane", "highway") | Hard cut (mw3 10.43, 14.60, 34.43, 42.77 s) or a whip (28.93 s) from the device on its tripod to the result full frame, held 1.4–3.5 s |
| **Into the device** | The method line ("So using the new reframe feature…") | Radial zoom-through, 6–7 f (mw3 f74–79) |
| **The thing into the lens** (hook) | The subject's name ("…about the iPhone") | In camera: the phone swings from his shoulder to the lens, rotation + ×2, rack focus face → phone f10–13; his face stays in frame, soft, behind it (mw2 f3–13) |
| **Close → wide → close** (`FMT-SKIT`) | The reaction peak, then the line | Hard cut to the wide on the peak, dry (no SFX: the silence is the effect); J-cut back, audio leading 0.78 s (mw1 f332, f432 at 24 fps) |
| **Slow push** (`FMT-SKIT`) | The silent read | Footage + bubble scale +16 % over 6.7 s, linear (mw1 f140→f300) |
| **Into the dock and back** (this edition, EV-8) | He reacts to, compares or judges the thing while it must stay visible (a spec, a before/after, a number) | T-14: he eases (10–12 f, on an arc, 2-f settle) into the wide card `L-10` while the real thing takes the top; T-15: he grows back to full frame on his next opinion line. 1–3 per 60 s, never two within 6 s |

Share of the frame: mw2 talking head ≈ 34 %, real thing ≈ 66 %; mw3 talking head ≈ 36 %, device ≈ 38 %, result ≈ 25 %; mw1 close-up ≈ 66 %, wide 15 %, end card 19 %.

### 3.3 Layouts
| ID | Layout | Rects (1080×1920) | Seen in | Where the face is |
|---|---|---|---|---|
| **L-1** | Talking head, full frame | footage full frame; subtitles at the format's fixed y | mw1, mw2, mw3 | Full frame, whole, on a third or the centre; head top 186–420 |
| **L-2** | Hook: the thing held into the lens | phone x≈150–600, y≈330–1240 in the foreground; 3D title at y≈1300–1390 | mw2 f3–39 | **In frame, soft, behind the phone** at frame right (face x≈700–900). Fix: whole head inside the right edge (mw2's ear slid off f5–9) |
| **L-3** | Real thing, hand-held macro | full frame; the device ≈ x 200–850, often tilted, real hands, set bokeh behind | mw2 (B1, B2, B4) | **Absent** (hands only) |
| **L-4** | Real thing in use by someone else's hands | full frame, over-the-shoulder; the speaker may appear tiny *inside* the phone's camera view | mw2 (B3) | Absent (or diegetic, tiny, inside the device screen) |
| **L-5** | The device on a stand ("the lab") | full frame; device fills 60–90 % of the frame height, centred (x≈225–855, y≈150–1350 at f200), punch-laddered | mw3 (B1) | Absent; his face is present only inside the device screen (the photo being processed) |
| **L-6** | Result full screen | the result image full frame 1080×1920 with a slight digital push | mw3 (B3) | The subject of the result (his likeness, distorted) fills the frame |
| **L-7** | Wide second angle | full frame | mw1 | Small, whole, seated right of centre |
| **L-8** | End card | full frame, no footage | mw1 (fix: the user's own) | Absent |
| **L-9** | Over-the-device reaction | device in focus at right, the speaker at the left edge | mw3 13.67–14.6 | **Fix:** only a cheek and nose showed; ours keeps the whole head inside (§3.4) or plays it as L-1 |
| **L-10** | **Show-and-tell dock** (this edition) | the real thing (recording, photo, result) x≈60–1020, y≈150–780 (≥ 960 px wide, a soft shadow); the speaker card x≈70–1010, y≈820–1460 (≥ 940 px wide, radius 36, a 2 px rim at 15 % white, a soft shadow); the background is a deep gradient in the set's hue with a soft glow and a faint grid (never the real thing or his footage blurred) | adaptation | **Whole, in the card:** head box ≥ 40 px inside the card's edges, face ≥ 300 px wide; caption just under his chin inside the card |

Overlays sit **on** a full-frame layout, never in a box: the bubble at chest height (mw1), the counter + subtitles mid-low (mw3), the 3D title on L-2 (mw2), the neon outline on the real device (mw3).

**Divided boxes:** none in any reel. This edition adds exactly one, the dock (`L-10`): the speaker in one wide card under the real thing. Never a split, a PiP bubble, a corner box or a narrow pillar.

### 3.3a Layout diagrams
```
L-1 FMT-LIST talking head        L-2 hook: thing into the lens     L-3 real thing (macro)
┌────────────────────────┐ 0     ┌────────────────────────┐ 0     ┌────────────────────────┐ 0
│   warm shelves bokeh   │       │ ╭──────╮      (face,   │       │   set bokeh, warm      │
│      ╭────╮            │ ←head │ │PHONE │       soft,   │       │     ╭──────────╮       │
│      │face│            │  top  │ │ in   │       whole)  │       │     │ the real │       │
│      ╰────╯            │ ≈190  │ │focus │        ╭──╮   │       │     │  screen  │       │
│    shoulders  [phone]  │       │ │      │        │  │   │       │     │  doing   │       │
│   grey polo, mic       │       │ ╰──────╯        ╰──╯   │       │     │  the fact│       │
│                        │       │   WHAT THEY            │ ←3D   │     ╰──────────╯       │
│                        │       │  (blue, italic, 3D)    │ title │   real hand / finger   │
│                        │       │                        │ y≈1344│                        │
│ When you take a screen │ ←sub  │                        │       │  is all an illusion.   │ ←sub
└────────────────────────┘ 1920  └────────────────────────┘ 1920  └────────────────────────┘ 1920
face whole, centre/left/right    face whole behind the object     face absent, hands only

L-5 FMT-COUNTER the lab          L-6 result full screen           L-1 FMT-SKIT + bubble
┌────────────────────────┐ 0     ┌────────────────────────┐ 0     ┌────────────────────────┐ 0
│  ╭──────────────────╮  │       │   the result image,    │       │  cyan window, magenta  │
│  │ device on tripod │  │       │   full frame, slight   │       │       ╭────╮           │
│  │  (punch ladder)  │  │       │   digital push         │       │       │face│           │ ←head
│  │                  │  │       │                        │       │       ╰────╯           │  top
│  │ Reframes: 7      │  │ ←1158 │ Reframes: 15           │ ←1158 │  ◯ ╭───────────────╮   │  ≈195–390
│  │ and now seven    │  │ ←1272 │ traces of the hand     │ ←1272 │avatar│ message text │   │ ←bubble
│  │                  │  │       │                        │       │      ╰──────────────╯  │  y≈1100–1300
│  ╰──────────────────╯  │       │                        │       │  ══════ desk ══════    │  (chest)
└────────────────────────┘ 1920  └────────────────────────┘ 1920  └────────────────────────┘ 1920
face absent (inside the screen)  his likeness is the subject      face whole above the bubble

L-10 the dock (this edition)
┌────────────────────────┐ 0
│ ╭────────────────────╮ │ ←y≈150
│ │   the real thing   │ │
│ │ (recording/result) │ │
│ ╰────────────────────╯ │ ←y≈780
│ ╭────────────────────╮ │ ←y≈820
│ │      ╭────╮        │ │
│ │      │face│ whole  │ │
│ │      ╰────╯        │ │
│ │ caption under chin │ │
│ ╰────────────────────╯ │ ←y≈1460
└────────────────────────┘ 1920
both wide; background = the set's deep gradient + glow (no blur)
```

### 3.4 Framing the face (every layout, every zoom)
The face decides every zoom. Measure the **head box** (hair top to chin, ear to ear) on the source, then:
- **Punch-ins and re-frames:** capped so the head box stays **≥ 40 px inside every edge** (mw2's +15 % punch at 14.13 s kept the head whole); a punch that would push the hair out is reduced.
- **Reaction close-ups** (the hands-on-face laugh, the lean-in "help?"): keep the energy, keep the head. If the source is already tighter than the head box allows (the hair or chin at or over the edge), **keep it full screen**: hair may touch the top edge, eyes to chin always in; cap the punch so the face stays inside, and move the subtitle clear (it may cross the chest). **Never scale the footage down inside the frame over a blurred copy of itself** (Naman, 13 Oct). If the head truly must show whole, cut to a wider take or use the dock card (`L-10`) the footage fills. This is the fix for mw3 33.40–34.43 s and 22.6–24.0 s, and for any tight handheld selfie close-up.
- **The opening settle** (T-01): the whip-in scales about the **face centre**, starting ≤ 112 %, so the head is inside the frame from f0 (fix for mw1 f0–f2, mw2 f0–f9). The blur may smear the face; the edge may not cut it.
- **Side angles, the object into the lens, the over-the-device reaction:** the back of the head, the soft face behind the object (at rest) and the reacting head all stay inside the frame (fixes for mw2 29.8–31.47 s and f5–9, mw3 13.67–14.6 s).
- **Captions may cross the face.** The counter and subtitles in `FMT-COUNTER` sit across his chest and hands (and sometimes his chin when he leans in); that is fine. No other check.

### 3.5 Safe zones (Instagram Reels and Shorts)
- Key text inside **x 64–1016, y 110–1500**. The bottom ≈ 380 px (caption, username, audio row) and the right ≈ 110 px below y 1000 (the action buttons) are covered by the app's UI.
- **Fix:** mw2's subtitles sit at baseline y≈1621, inside Instagram's bottom UI band. Ours sit **just under the chin** on the face (the line's top 40–80 px below `FACE(n)` chin) and on one fixed band at **baseline y≈1440** on the real thing (the same quiet look, larger, visible on Instagram).
- `FMT-COUNTER`: the counter centre y≈1158, the subtitle centre y≈1272 (mw3), both inside the safe area.
- The 3D hook title: centre y≈1344 (mw2), inside.
- The message bubble: y≈1100–1300 (chest height on L-1), inside.
- The left edge of the counter stays at x≈261 and it grows right; at "Label: 20" it ends near x≈820, inside the right margin.

### 3.6 ADAPTATION: one person, one camera, screen recordings and photos
**This section is an adaptation, not an observation.** The reference creator films macro B-roll of real hardware with real hands, a second camera angle, and a "lab" on a tripod. Most users of this plugin have **one talking-head take** (tripod or handheld selfie) and **screen recordings or photos** of the thing they talk about. The grammar carries over unchanged; only the source of the real-thing layer changes. Every device below is one seen in mw1–mw3, except the rows marked (this edition).

| His device (observed) | With one talking head + recordings/photos |
|---|---|
| **The real thing full frame on its word** (L-3, mw2) | The screen recording or photo takes the **whole frame** on its noun (0–0.3 s before it). A portrait phone recording fills the frame height-first, centred. A landscape desktop recording is **cover-cropped to the part that matters** (or pushed in on it) so it fills the frame; when it must be seen whole, it sits in a **designed glass box** (radius 28–36, a 1 px light rim, a soft shadow) on a deep gradient in the set's hue with a soft glow and a faint grid. **Never over a blurred copy of itself** (Naman, 13 Oct). Never a box beside the speaker (the dock, `L-10`, is the one designed exception: the thing on top, the speaker below). |
| **The slow life inside a macro shot** (hands, a finger tapping, a scroll; mw2) | The recording's own motion (a scroll, a tap, a toggle). If the recording is still, a slight digital push (+3–6 % over the shot), as on mw3's result stills. |
| **Punch-in on a detail** (mw2 8.17 s +20 %, 33.53 s +40 %) | An instant punch into the detail that matters (the setting, the number, the button) inside the recording, +20–40 %, hard step. |
| **Punch ladder on counted numbers** (mw3) | The same, on the recording or the result photo: +8–15 % per step, every 14–15 f, one step per spoken number, with the counter flipping. |
| **The object held into the lens with his face soft behind it** (hook, mw2) | If the user holds their phone up to the lens in the take, keep it. If not, open on the talking head (whole face, T-01) with the 3D title and bring the real thing full frame by ≤ 1.4 s via a spin whip. Never paste a fake phone over the speaker. |
| **The neon outline pointer** (mw3) | Traced around the real thing the user holds or points at in the take (a phone, a laptop edge), or around the one UI element in the recording that the line names (8 f, cyan). Once per reel, on the first mention. |
| **Radial zoom-through into the device** (mw3) | The talking head radial-zooms into the full-frame recording on the method line ("so I opened…", "here's what happens…"), 6–7 f. |
| **Reveal = full screen** (mw3) | Show the result small first as it appears inside the recording, then hard-cut to the result image (an exported photo, a screenshot) full frame and hold it 1.4–3.5 s. |
| **Motion-blur glue** (3/3) | Unchanged: whip pans, radial zooms, spin whips at topic changes; hard cuts inside a topic. |
| **The live counter** (mw3) | Unchanged, in any reel that counts up (attempts, days, rounds, versions). |
| **The 3D hook title** (mw2) | Unchanged, on the talking head's hook, 3 cards of 2–3 words. |
| **The message bubble** (mw1) | Only for a message the user really received; wipes out of the phone in their hand (or from the frame edge nearest their hand), chest height, held while they react. |
| **Quiet subtitles** (mw2, mw3) | Every word, 72–80 px: just under the chin on the face, the fixed band on the recording. |
| **The wide second angle** (mw1) | A second take from further back if the user has one; otherwise the reaction stays on the close-up (scaled per §3.4) and the reaction still plays dry. Never fake a wide by cropping. |
| **Re-framing each return** (mw2) | A tripod take is re-framed digitally (centre ↔ a third ↔ a ≤ 15 % punch) within §3.4. A handheld selfie is not re-framed (its drift is the movement); if tight, it stays full screen (hair may touch the top edge, eyes to chin in), never shrunk over a blurred copy of itself. |
| **(This edition) The dock** | When the user reacts to a recording that must stay visible (a before/after, a number, a setting), the talking head eases into the wide card under it (`L-10`, EV-8), then back. The one place speaker and thing share the frame. |
| **(This edition) Screen-fill hand-off** | If the user holds a phone up in the take, the cut into the recording happens **inside the phone's screen** as it fills the frame (EV-9): the strongest adaptation of mw2's lens push. |
| **(This edition) The proof detail** | The one setting, number or toggle the line names is lifted off the recording (EV-2) or focus-punched (EV-3) until it reads at ≥ 48 px. |

**Share targets for an adapted reel:** talking head 30–40 %, recordings/photos full frame 60–70 % (the same as mw2/mw3). If the user only has 2–3 recordings, re-use them with different punches and scroll positions rather than holding the talking head longer than ~3 s without a change.

---

## §4 Colour tokens

### 4.1 Core tokens
| Token | Hex | Use | From |
|---|---|---|---|
| `titleBlue` | `#1573CF` | 3D hook title face (royal blue) | mw2 |
| `titleRim` | `#DDE5F1` | Thin light inner rim / bevel on the title, ~3 px | mw2 |
| `titleExtrude` | `#06040A` | Hard drop/extrude shadow on the title, offset down-right ~6 px | mw2 |
| `sub` | `#FFFFFF` | Subtitle fill | mw2, mw3 |
| `subStroke` | `#000000` | Subtitle outline 2–3 px + slight soft shadow | mw2, mw3 |
| `counterRed` | `#E81A20` | Counter fill, ~3 px black outline | mw3 |
| `neon` | ≈ `#7FE8FF` core, white-hot centre, soft outer glow (guess) | Neon outline pointer around the real device | mw3 |
| `bubble` | `#FFFDFF` | Message bubble fill, radius ≈ 18 px, faint soft shadow | mw1 |
| `bubbleInk` | ≈ `#2C2C2E` (guess; sampled `#504D51` with antialias) | Message text; the key word in bold | mw1 |
| `endBlack` | `#000000` | End-card canvas and the black frames around it | mw1 |

### 4.2 Footage looks (keep them, don't fight them)
| Set | Hexes sampled | Feel | From |
|---|---|---|---|
| **Warm library** | shelves `#864835`, dark wood `#412521`, skin `#CF7C5D`, cool grey-lavender polo `#A1A2B1` | Warm/cool split, saturated, glossy "tech-ad" | mw2 |
| **Neon studio desk** | cyan window `#81C2F0`, violet/magenta practicals `#8761D1`, near-black desk `#2A2027`, black tee | Complementary orange/teal against a saturated orange prop | mw1 |
| **Sunlit garden** | hedge `#5C6D2A`, light grey deck `#AFAFBA`, navy tee `#1E2142`, skin in shade `#9D6158` | Natural daylight, crisp and bright (keep the blacks deep: never lift them) | mw3 |
| **Product B-roll** | pale-to-lime wallpaper `#CFE9D6`, white UI | Brighter and cleaner than the A-roll; macro, shallow focus | mw2 |
| **Uncanny result** | deep indigo sky `#1B183D`, chrome smears, cyan/magenta fringes | Deliberately strange, contrasting the natural A-roll | mw3 |

**Rules:** high saturation, medium contrast, shallow depth of field everywhere, no grain, no LUT on top of the footage; the only vignette is the focus punch's (EV-3). Match exposure and white balance between the talking head and the B-roll of one reel; let the result images keep their own odd palette.

### 4.3 Meaning of colour
- **Blue (3D, extruded)** = the hook's promise. Once, in the first 1.3 s.
- **Red with a black stroke** = the number that is climbing. Nothing else is red.
- **White with a thin black outline** = what he is saying. Never coloured.
- **Cyan neon** = "look at this real object", once, on its first mention.
- **White bubble, dark text, one bold word** = a real message from a real person.
- **The product's own UI colours** = the information. The edit adds no colour on top of the product.

One accent hue per reel (the loud element's), never two.

### 4.4 Never pale
- **The footage stays glossy:** natural saturation or a touch more, contrast +5–10 %, blacks crushed to true black, warm skin, screens bright and clean. Never desaturate, fade, lift the blacks or add a "film" look.
- **No blurred fills:** a landscape recording fills the frame (cover-crop or push-in) or sits in a designed box on the set's gradient; the creator's footage is full screen or fills the dock card. Nothing is ever padded with a blurred copy of itself.
- **Dimming is functional and brief:** the rest of a screen behind a UI lift (−25 %), the edges of a focus punch (≤ 15 % vignette), the dock's background (≈ 60 %). Nothing else is dimmed.
- **No black-and-white beat** in this style: the uncanny results (mw3) already bring their own strange palette.

---

## §5 Type tokens and caption systems

### 5.1 Font map
Observed faces are best guesses from the frames. Use the bundled renderer fonts.

| Role | Observed (guess) | Renderer font (bundled) | Weight / style |
|---|---|---|---|
| `TITLE-3D` hook title | Montserrat / Gotham / Proxima Nova Black Italic, ALL CAPS | **Montserrat** (`Montserrat-Italic-VF.ttf`) | 900 italic |
| `CAP-SUB` subtitles | Proxima Nova / Montserrat SemiBold, sentence case | **Montserrat** (`Montserrat-VF.ttf`) | 600 |
| `COUNTER` | the same family, extra-bold/black, title case | **Montserrat** (`Montserrat-VF.ttf`) | 800–900 |
| `BUBBLE` message text | the phone's system UI face | **Inter Tight** (`InterTight-VF.ttf`) | 400 body, 700 key word |
| `BUBBLE` sender · time | system UI | **Inter Tight** | 500 |
| End-card wordmark (the user's own) | heavy condensed caps | **Anton** (`Anton-Regular.ttf`) or **Barlow Condensed** (`BarlowCondensed-Bold.ttf`) | 400 / 700 |

One family (Montserrat) carries the whole reel in `FMT-LIST` and `FMT-COUNTER`; the realism of the bubble needs its own UI face.

### 5.2 `CAP-SUB` (the one caption system)
| Property | Spec |
|---|---|
| Text | The spoken words, sentence case, punctuation kept ("is all an illusion.", "Oh my God", "Um…") |
| Phrase | 2–5 words (typical 3–4), phrase-aligned: "When you take a screenshot" / "while FaceTiming someone" (mw2); "Can your iPhone" / "actually see" / "the back of your head?" (mw3) |
| Font | Montserrat 600, **72–80 px** (mw2 ran ≈ 48 px, mw3 ≈ 56 px: too small on a phone); the one number or product name in a phrase may be 800 weight, still white, never coloured. If a phrase doesn't fit, chunk it shorter; never shrink |
| Colour | `sub` white, `subStroke` 3 px black outline + a soft shadow (0 2 px 6 px, 50 % black). Fix: mw2's 2 px outline alone lost the words over white phone screens (25.9–29.8 s); 3 px + shadow holds on every plate |
| Width | One line, ≤ 920 px (two lines only if a phrase can't split); split longer phrases |
| Position | Centred x 540. **On the face** (`L-1`, the dock): **just under the chin** (the line's top 40–80 px below `FACE(n)` chin), so it's seen the moment the frame is full of his face. **On the real thing:** one fixed band per reel, baseline y≈1440 (fix from mw2's 1621, §3.5); `FMT-COUNTER` directly under the counter (centre y≈1300). The band never moves inside a shot |
| Animation | **None.** Hard swap on the phrase boundary (the first word's onset). No pop, scale, colour, highlight, karaoke |
| On transitions | Stays sharp on top of whip and zoom blurs (it is not part of the blurred plate); swaps on the cut frame |
| Coverage | Every spoken word, from the first word to the last (mw3 had subtitles from f0), except while `TITLE-3D` *is* the caption (mw2 f2–f40) |
| Suppression | Hidden only while `TITLE-3D` carries the same words; in `FMT-SKIT` the silent read has no words, so nothing is hidden |

**Measured:** mw2's first subtitle lands at f41, the frame after the title clears, on "When"; mw3's phrases last 0.5–1.2 s.

**Phrase breaking:** at commas and clause starts; a number stays with its noun ("is capped at 600.", "15."); never a single function word alone.

### 5.3 `TITLE-3D` (the `FMT-LIST` hook's loud element)
| Property | Spec (mw2, 30 fps) |
|---|---|
| Text | The hook line in ALL CAPS, split into **3 cards of 2–3 words**: WHAT THEY / DON'T TELL YOU / ABOUT THE IPHONE |
| Font | Montserrat 900 italic |
| Fill | `titleBlue` `#1573CF`, a thin `titleRim` `#DDE5F1` inner rim (~3 px bevel), a hard `titleExtrude` `#06040A` shadow offset ≈ 6 px down-right: an embossed, 3D look |
| Size | Card 1 cap ≥ 120 px (mw2 ≈ 100 px), width **900–960 px**; longer cards keep that width (card 3 cap ≥ 88 px; mw2 ≈ 66 px). Never below an 88 px cap: split the line into another card instead |
| Position | Centred x 540, centre y≈1344 (block ≈ y 1300–1390): on his chest / over the object's lower half |
| Timing | Card 1 f2–8, card 2 f10–15, card 3 f17–39; each lands **on its spoken words** (card 1 at f2 ≈ the speech onset) |
| Swap | **1-frame horizontal smear**: on f9 and f16 the outgoing and incoming cards overlap with a ~40 px horizontal motion streak; the next frame is sharp. No scale, no slide. Card 1 smears in from nothing at f2 |
| Depth (this edition) | Real extrusion (8–10 px, the face lit from the top-left), a 2 px specular top edge, and one glint (EV-6) across card 1 as it lands; each card arrives on a short arc (±6° yaw → 0 over 4 f) inside its smear |
| Exit | Blurs out with the spin whip into the first B-roll (f39–41) |
| Budget | Once per reel, only in the hook |

### 5.4 `COUNTER` (the `FMT-COUNTER` loud element)
| Property | Spec (mw3, 30 fps) |
|---|---|
| Text | "Label: N" in title case, the label naming what is counted ("Reframes: 0") |
| Font | Montserrat 800–900 |
| Fill | `counterRed` `#E81A20` with a ~3 px black outline (add the subtitle's soft shadow when the plate behind is busy; fix, §8.7) |
| Size | **120–140 px** font (mw3 ≈ 80 px, cap ≈ 63 px: small on a phone) |
| Position | **Left edge fixed** (mw3 x≈261; here x≈110 so the larger counter grows right to ≤ x 980 at two digits), centre y≈1150; it grows rightwards as digits are added; ~90 px above the subtitle |
| On | Hard cut-on, no animation, on the first frame of the first device shot (f123, 4.10 s) |
| Increment | **Odometer flip, 5 f:** the old digit squashes vertically toward its baseline (f+0–1); the new digit unrolls from the top while the old flattens to a line (f+2–3); the new digit is full (f+4). Integers only, no tween through values |
| Weight (this edition, EV-4) | The roll has real vertical motion blur; the counter thumps 1.0 → 1.06 → 1.0 over 4 f on each flip; a soft red underglow (≈ 20 %, 16 px blur) breathes once per flip; on its last value the outline brightens for 2 f, then the cut takes it off |
| Sync | Each flip lands on the new image appearing on the device, or on the spoken number ("eight", "nine", "ten") |
| In punch ladders | One flip per step, every 14–15 f, in lockstep with the punch |
| Off | Hard cut-off on the final full-screen result (f1283, 42.77 s) |

### 5.5 `BUBBLE` (the `FMT-SKIT` loud element)
| Property | Reference (mw1, 24 fps) | This edition (readable) |
|---|---|---|
| Body text | ≈ 31 px, dark grey, the key word bold | **56 px** Inter Tight 400, key word 700 |
| Bubble | x 272–839, y 1131–1248 (w 567, h 117), `#FFFDFF`, radius ≈ 18, faint shadow, no stroke | width 860–940 px, height to fit 2 lines (≈ 190 px), radius 30, same fill, a slightly deeper soft shadow so it sits on the plate |
| Avatar | circle Ø≈150 at x 104–255, y 1113–1268, real photo, thin light-grey ring | Ø 150, left of the bubble, the real sender's photo (with consent) or their initial |
| Sender · time | right-aligned under the bubble, y≈1280, ≈ 18 px (unreadable) | **40 px**, white at 85 % with the subtitle shadow, or omitted |
| Group position | chest height on L-1, below the eye line (head and eyes at y 195–600) | group x 60–1020, y≈1080–1340, below the chin |
| Entry | stretch-wipe out of the phone's screen, 6 f (§8.3a R-3) | same |
| Life | parented to the plate: it scales with the slow push-in (567 → 615 → 660 px wide from f140 → f200 → f300) | same |
| Exit | none: the cut to the wide removes it | same |

### 5.6 Small text
- **Rule:** if a viewer must read it, it is ≥ 48 px; captions 72–80 px; labels 48 px and up. Decorative lines below 40 px are not used (fix for mw1's ≈ 18–20 px sender line and end-card footer).
- In-device UI is footage: shoot or crop so the UI text that matters reads at ≥ 48 px on the 1080 frame (mw2's macros ran 30–40 px); when it can't, punch it (EV-3) or lift it (EV-2) until it does. UI text that doesn't matter (mw3's "Reframing your photo…" at ~20 px) needs no fix: it is not information.

---

## §6 Hook system

### 6.0 The 10× hook (this edition)
- **Frame 0:** his whole face mid-gesture with the real thing already in hand and moving (T-01), the first caption or `TITLE-3D` card on the first word; never a still, never a black frame.
- **The thing in the viewer's face by ~0.4 s:** the lens push (P-01), the neon trace (P-10) or, with a held phone, the screen-fill hand-off (EV-9); a glint (EV-6) runs across the device or title card 1 as it lands.
- **The first real thing full frame by ≤ 1.4 s** through a relay whip (EV-1), its proof detail punched or lifted by ~2.5 s.
- **≥ 6 changes in the first 3 s** (mw2 had 8): settle, card swaps, the push, the rack, the whip, the first detail.
- **The loop stated on screen:** the unnumbered list keeps topping up, the counter appears at 0, or the bubble arrives in silence; the end pays it.

### 6.1 What the hook must do
1. **Frame 0: the face and the real thing, already moving.** mw2 f0: him mid-gesture in the library, motion-blurred, the phone in his hand. mw3 f0: him leaning toward the lens at left, pointing, the device on its tripod at right showing a photo of him, subtitle "Can your iPhone" already on. mw1 f0: him holding the phone at chest height, mouth open mid-word, settling from a whip. Fix: the whole face inside the frame at f0 (M2, M3).
2. **Name the real thing in the first second** ("…about the iPhone" at 0.88 s; "iPhone" at 0.30 s) and put it in the viewer's face: thrust into the lens (mw2), traced with neon (mw3), held up and pointed at (mw1).
3. **Open a loop the structure pays:** hidden facts (mw2: the list never numbers itself; it keeps topping up), a climbing number toward an unknown end (mw3: "what if we keep doing it?" then the counter from 4.1 s), an interruption that changes the story (mw1: the message at 5.1 s).

**Measured first 3 s:**
- mw2 (30 fps), 8 changes: settle f0–2 · title card 1 f2 · phone toward the lens f3–12 · card 2 f10 · rack focus f10–13 · card 3 f17 · spin whip f39–44 · first subtitle f41.
- mw3 (30 fps), 5 changes: settle f0–2 · neon outline f9–16 · subtitle swaps ×3 · zoom-through f74 · a finger tapping.
- mw1 (24 fps), ~3 changes: settle f0–10 · phone raised f5–12 · a pointing gesture. No graphics, no cuts: the bait is deliberately mundane.

### 6.2 Hook formulas (`HF`)
| ID | Formula | Spoken pattern | Seen in |
|---|---|---|---|
| HF-1 | **The secret claim** | "(What) they don't tell you about [the thing]." Then straight into fact 1 with no preamble | mw2 |
| HF-2 | **The impossible question + the escalation promise** | "Can your [thing] actually [impossible-sounding result]?" → the method in one line → "…but what if we keep doing it?" | mw3 |
| HF-3 | **The bait and the interruption** | A mundane opinion about the thing ("I just don't personally think the cameras are as good as they should be. It's okay.") — then the real story arrives on screen, unannounced | mw1 |

No hook puts a count ("5 things") on screen, a question card or a banner. The promise is spoken once and shown once.

### 6.3 Hook visuals (`H`)
| ID | Visual | Recipe |
|---|---|---|
| **H-1** | **Lens push + 3D title** (`FMT-LIST`) | f0 whip-in settle on the talking head with the device in hand; f3–12 the device swings from the shoulder into the lens (rotation + ≈ ×2 scale), focus racks face → device f10–13; `TITLE-3D` cards smear-swap on the words (f2, f9, f16); at ≈ 1.3 s a spin whip (6–8 f) clears the title into the first fact's B-roll |
| **H-2** | **Lean-in + neon pointer + zoom-through** (`FMT-COUNTER`) | f0 push-in settle (≈ 2 f) on the talking head leaning into the lens with the lab in shot; subtitles from f0; the neon outline traces the real device on its name (f9–17); on the method line a radial zoom-through into the device (f74–79, 6–7 f); a finger taps; the counter cuts on at 0 |
| **H-3** | **Mundane in motion → the diegetic interruption** (`FMT-SKIT`) | f0 whip settle (≈ 115 → 100 % in 10 f at 24 fps; fix ≤ 112 % about the face) on the close-up mid-sentence, the prop in hand; the bait line; he sets the prop down; at ≈ 5.1 s the message bubble stretch-wipes out of the phone on the desk; nothing tells you what is happening |

### 6.4 Endings (`E`)
| ID | Ending | Recipe | Seen in |
|---|---|---|---|
| **E-1** | **The button line** | The last fact ends on the real thing; a hard cut to L-1 for a one-line verdict ("Attention to detail is wild."), a face-palm laugh, a hard stop mid-gesture (≤ 0.4 s after the word). Loops cleanly into the hook | mw2 |
| **E-2** | **The extreme result** | The counter is removed; the most extreme result holds full screen 2.7 s under the closing line; no SFX under the last line, so it plays dry; hard stop on the image | mw3 |
| **E-3** | **The end card** (fix) | mw1 cut to black after the announcement's giggle, then the event organiser's launch card streaked in (wordmark + event details, 4.2 s, its own trailer music, which we don't use: SFX only), streaked out, 0.37 s black. **Fix:** the slot becomes **the user's own end card** (their name or handle in `Anton` caps, cap ≥ 140 px, centred y≈780, on `endBlack`, with the same streak-in / zoom-blur-out, ≤ 4.5 s, no music) **or a hard stop** on the last reaction. Never another brand's card or sting | mw1 |

No spoken CTA in any reel. If the user's brief has a keyword or a link, it is said in the last line and shown as that line's subtitle, never as a new graphic.

---

## §7 Structure devices

### 7.0 The shape of each format
- **`FMT-LIST`:** hook (title + the thing into the lens) → fact 1…N, each **noun → real thing full frame (1–4 s, hard cuts and punches inside) → talking head for the opinion or joke (0.9–2.5 s)** → the button line. 5 facts in ≈ 35 s, ≈ 6–7 s per fact; 21 shots in 36.9 s, median 1.56 s, longest 4.0 s. Facts are never numbered on screen.
- **`FMT-COUNTER`:** hook (question + pointer + zoom-through) → round 1 (slow, explained) → rounds 2–5 (~2.5 s each, each **tap → result on the device → reveal full screen or a reaction**) → an explain beat on the talking head (≈ 4.4 s, the longest shot) → rounds 6–10 (faster) → "let's just go crazy": a punch ladder 11→15 → reveal + reaction → a punch ladder 16→20 → the final result full screen, counter off. 36 shots in 45.5 s, median ≈ 0.98 s.
- **`FMT-SKIT`:** bait (≈ 3.8 s) → interruption (the bubble) → silent read under a slow push (≈ 8.6 s, the pause is the joke) → reaction on the wide, dry (≈ 4.2 s) → J-cut back for the announcement (≈ 4.4 s) → end. One continuous take, no jump cuts: 3 cuts in 22.4 s.

### 7.1 Structure devices (`SD`)
| ID | Device | Recipe | Seen in |
|---|---|---|---|
| **SD-1** | **Fact = the real thing** | The noun brings the full-frame real thing 0–0.3 s early; inside the fact, hard cuts between angles (grid → photo; 3 burst angles) and punch-ins; the talking head only for the opinion/joke (§7.2) | mw2 |
| **SD-2** | **The topic-change blur** | Whip, radial or spin (6–10 f) only where a new fact starts; hard cuts everywhere else | mw2 (10.6, 17.93, 24.4, 29.8 s), mw3 |
| **SD-3** | **The escalation loop** | tap → device (punch) → reveal (L-6) or reaction (L-1), repeated with acceleration; the counter flips once per new result | mw3 |
| **SD-4** | **The punch ladder** | Cut to the device, then instant +8–15 % scale steps every 14–15 f, one per spoken number, one counter flip per step; by step 5 the device overfills the frame | mw3 31.13–33.0 s (11→15), 40.23–42.3 s (16→20) |
| **SD-5** | **Reveal = full screen** | The result seen small on the device, then hard cut (or whip) to it full frame, held 1.4–3.5 s with a slight push; the line that names it plays over it | mw3 (5 reveals) |
| **SD-6** | **Re-frame each return** | Centre → left third → right third → a punch-in, never the same framing twice in a row | mw2 |
| **SD-7** | **The diegetic interruption** | The story arrives as a real-looking object in the scene (a message wiping out of the real phone), in silence, with no caption or sound telling you what it is | mw1 |
| **SD-8** | **Silence + wide on the peak** | On the reaction peak: hard cut to the wide angle, no SFX; let the room sound carry 3–4 s | mw1 f332 |
| **SD-9** | **J-cut return** | The punchline starts on the wide; cut back to the close-up mid-sentence, audio leading ≈ 0.78 s | mw1 f413 → f432 |

### 7.2 The fact ritual (`FMT-LIST`, identical every fact)
1. **Topic-change blur** (whip / radial / spin; alternate them) placed so the real thing is sharp 0–0.3 s before the fact's noun, with a soft whoosh.
2. **The real thing full frame** while the fact is spoken: 1–4 s, a hard cut to a second angle or a punch-in every ~1.5 s. The one detail that proves the fact gets the focus punch (EV-3) or the UI lift (EV-2) on its word.
3. **Hard cut to the talking head** (a new framing, SD-6) for the opinion, joke or consequence line.
4. Next fact: back to 1.

### 7.3 The round ritual (`FMT-COUNTER`)
1. **Tap** (a finger on the device, or the talking head saying "let's go again"), hard cut.
2. **The device** with the new result appearing; the counter flips on it (EV-4: the thump and its tick); one punch-in (+10–15 %) as the result lands.
3. **Reveal or reaction:** every 2–3 rounds the result goes full screen (SD-5); otherwise a hard cut to the talking head reacting.
4. Compress: rounds 1–5 at ≈ 2.5 s, 6–10 at ≈ 1–1.5 s, then ladders at 0.47 s per number.

### 7.4 Open loops (retention)
- **The unnumbered list:** never show "1/5"; the list ends when the button line lands (mw2).
- **The climbing number:** the counter is on screen from 4.1 s to the final reveal; the final value is never promised in advance (mw3).
- **The withheld reveal:** the result is seen small on the device before it goes full screen (mw3).
- **The silent read:** the message is on screen for 8.6 s before he says a word about it (mw1).
Every loop is paid on screen: the last fact, the last number, the announcement.

---

## §8 B-roll and graphics system

### 8.0 The 10× layer (what the best motion designer adds to every real thing)
**Animation principles, applied to this style:**
| Principle | How it shows up here |
|---|---|
| **Anticipation** | The out-shot's blur builds 2 f before every whip; the hand starts to move before the cut; the counter's digit squashes before it rolls; the rest of the screen dips 3 f before a UI lift |
| **Follow-through & overlap** | The incoming real thing lands at 103 % and settles to 100 % over 2–4 f; the lifted UI overshoots 1.32 → 1.28; the dock card trails the face by 2 f and settles; title cards smear across each other |
| **Squash & weight** | The counter thumps 1.0 → 1.06 → 1.0 per flip; a full-screen reveal (SD-5) lands with a 1-frame 2 % compression |
| **Arcs** | Spin whips rotate on an arc; the dock travels on an arc, not a straight line; title cards yaw in ±6° |
| **Slow in / slow out** | Ease-out arrivals, ease-in-out dock and return; whips are fast-in, fast-out; punches stay instant (they're the rhythm) |
| **Staging** | One hero per frame: the detail that proves the fact. The focus punch defocuses everything else; the lift dims the rest of the screen by 25 % |
| **Secondary action** | The hand drifts, the finger taps, the recording scrolls, result stills push +3–6 %, the dock's background glow breathes |
| **Timing** | Facts fast (a change every ~1–1.8 s), the explain beat long (≤ 4.4 s), the skit's silence longest (the pause is the joke) |
| **Exaggeration** | Once per reel the reveal goes all the way: the final result full screen with a hit after 0.5 s of silence, or the ladder overfilling the frame |
| **Appeal** | Glossy, saturated, real hardware and real screens; keynote clean; nothing cartoon |

**Design hierarchy (every frame):** 1. the detail that proves the fact (or the result) · 2. his face (talking beats) · 3. the loud element · 4. the subtitle · 5. everything else, softened by depth.

**Effects toolkit:** shallow depth of field and the rack (EV-3); directional motion blur (whips, the relay); the specular glint (EV-6); soft drop shadows under the lifted UI and the dock card; a ≤ 15 % vignette only inside the focus punch; a ≤ 10 % glow on a bright screen in a dark set. Never: flashes, light leaks, glitches, RGB splits, crossfades, grain, stickers, emoji, arrows on the product.

### 8.1 Families
**Real-thing B-roll (`B`)**, always full frame, always the actual product:
| ID | Family | Look | Motion | Seen in |
|---|---|---|---|---|
| **B-1** | Hand-held macro | The device in his hand against the set's bokeh, the screen doing the fact, a finger tapping/scrolling | Hand drift; hard cuts between angles; punch-ins +15–40 % | mw2 |
| **B-2** | Device over a surface | The device over a dark wooden desk, a finger swiping | As B-1 | mw2 |
| **B-3** | Someone else's hands | Over-the-shoulder, a second person filming the speaker with the device (he appears tiny inside its camera view) | 3 angles, hard cuts | mw2 |
| **B-4** | Extreme angled macro | One UI detail, tilted ~30°, very shallow focus | A punch-in (≈ +40 %) | mw2 |
| **B-5** | The lab | The device on a tripod, 60–90 % of the frame height, garden bokeh, a finger tapping | Punch ladder | mw3 |
| **B-6** | Result still | The real output image full frame | Slight digital push | mw3 |
| **B-7** | Wide second angle | The whole room, the speaker small | Locked off | mw1 |

**Graphics (`G`)**, the only drawn things:
| ID | Graphic | Spec | Seen in |
|---|---|---|---|
| **G-1** | `TITLE-3D` | §5.3 | mw2 |
| **G-2** | `CAP-SUB` | §5.2 | mw2, mw3 |
| **G-3** | `COUNTER` | §5.4 | mw3 |
| **G-4** | Neon outline pointer | A cyan/ice-blue glowing stroke (~4 px core, soft outer glow) tracing the real device's rounded-rect outline (mw3: phone rect x≈650–860, y≈890–1270) | mw3 |
| **G-5** | `BUBBLE` | §5.5 | mw1 |
| **G-6** | End card | The user's own (§6.4 E-3) | mw1 (fix) |
| **G-7** | The dock card | §3.3 `L-10`, EV-8 | this edition |
| **G-8** | The glint | A soft specular band (EV-6) | this edition |

### 8.2 Staging choreography (how a beat plays out)
1. **Lead:** the real thing is sharp 0–0.3 s **before** the noun (mw2).
2. **Land:** at a topic start the blur transition peaks ≈ 2–4 f before the noun; inside a topic it's a hard cut on the word boundary.
3. **Hold and move:** 1–4 s; something moves inside the shot (a scroll, a tap, a hand drift) and a hard cut or punch-in every ~1.5 s.
4. **Hand-off:** a hard cut to the talking head on the next phrase that is an opinion, joke or reaction.

### 8.3 Pattern specs (`P`)
| ID | Pattern | Family | What's on screen | Motion |
|---|---|---|---|---|
| P-01 | **Lens push** | hook | The device swung into the lens, face soft behind | f3–12 rotation + ×2, rack focus f10–13 |
| P-02 | **Fact macro** | B-1/B-2 | The device doing the fact | Cut or blur in; hand drift |
| P-03 | **Second angle** | B-1/B-3 | The same fact from another angle (grid → photo) | Hard cut inside the fact |
| P-04 | **Detail punch** | B-1/B-4 | The one UI detail | Instant +20–40 % |
| P-05 | **Others' hands** | B-3 | The thing used in context by someone else | 3 angles, hard cuts |
| P-06 | **The lab tap** | B-5 | A finger taps the device on its stand | Hard cut |
| P-07 | **New result on the device** | B-5 + G-3 | The result appearing; the counter flips | One punch +10–15 % |
| P-08 | **Punch ladder** | B-5 + G-3 | The device, stepped in per number | +8–15 % every 14–15 f |
| P-09 | **Reveal full screen** | B-6 | The result full frame | Hard cut or whip in; slight push; held 1.4–3.5 s |
| P-10 | **Neon pointer** | G-4 | The real device outlined on its first mention | Trace 4 f, hold 3 f, fade 2 f |
| P-11 | **Zoom-through** | T-04 | Talking head → into the device / result → out to the talking head | 6–7 f radial |
| P-12 | **Diegetic message** | G-5 | The real message on the plate at chest height | Stretch-wipe 6 f; rides the push-in |
| P-13 | **Wide reaction** | B-7 | The room, the speaker's real reaction | Hard cut, dry |
| P-14 | **Button line** | L-1 | The verdict + a laugh | Hard cut in, hard stop; EV-7 loop |
| P-15 | **UI lift** (this edition) | B-1/B-6 + EV-2 | The real setting, toggle or number lifted off its screen | 8 f lift with overshoot, the rest dimmed (sharp, no blur) |
| P-16 | **Focus punch** (this edition) | B-1/B-4 + EV-3 | The proof detail, everything else soft | Instant punch + 6-f rack |
| P-17 | **Before/after** (this edition) | B-1/B-6 + EV-5 | The same framing in both states | 8–10 f glass-edge wipe |
| P-18 | **Dock beat** (this edition) | `L-10` + EV-8 | The thing on top, his reaction in the wide card below | T-14 in, T-15 out |

### 8.3a Frame-by-frame recipes (the ones that make the style)
**R-1 Title smear-swap (mw2 f2–41, 30 fps):** card 1 is on at f2 (a 1-frame horizontal smear from nothing). Hold 6–7 f. On f9 cards 1 and 2 overlap, both streaked ~40 px horizontally at partial opacity; f10 card 2 sharp. Same at f16 → f17. Card 3 holds to f39, then blurs out inside the spin whip (f39–41).

**R-2 Neon trace (mw3 f9–17, 30 fps):** f9–10 a glow appears at the bottom-right corner of the real device; f11–13 the stroke traces up both sides (ease-out); f14–16 the outline is closed, the top edge brightest; f17 gone (≈ 2 f fade). It lands exactly on the spoken name (0.30–0.60 s).

**R-3 Bubble stretch-wipe (mw1 f123–129, 24 fps):** f123 a 1-px white line at the phone's screen edge (x≈840, y≈1190); f124–126 it extends leftwards with horizontal motion blur to the full bubble width; f127–128 the height opens and the text resolves out of the blur; f129 sharp. Ease-out. No sound. Parented to the plate.

**R-4 Odometer flip (mw3 f130–134, 30 fps):** see §5.4. Five frames, digit squash → unroll → full.

**R-5 Punch ladder (mw3 31.13–33.0 s):** hard cut to the lab at 31.13; steps at 31.60, 32.07, 32.53, 33.00 s (every 14 f), each an instant +8–15 % about the device centre with no easing; a counter flip on each; by the fifth step the device overfills the frame. Then a hard cut to the talking head ("Um… help?").

**R-6 End card streak (mw1 f538–666, 24 fps; for the user's own card):** a hard cut to black, 2–3 f; the wordmark assembles from horizontal speed streaks (low opacity, smeared) to sharp over ~8 f; secondary elements by f552; hold ≈ 4 s; exit: a horizontal zoom/radial streak builds over 4 f, the wordmark smears out, black ≤ 9 f.

### 8.4 Line → pattern lookup
| Line type | Primary | Alternates |
|---|---|---|
| The hook naming the thing | P-01 (`FMT-LIST`) / P-10 (`FMT-COUNTER`) | — |
| "When you [do X]…" (a fact's set-up) | P-02 | P-05 |
| "Instead it…" / "it actually…" (the hidden behaviour) | P-03 | P-04 |
| A number spoken in a fact ("15", "capped at 600") | Hard cut **on** the number to the device showing it | P-04 |
| "So using [the feature]…" (the method) | P-11 into the device, then P-06 | — |
| "Let's go again" / "what if we keep doing it?" | P-06 → P-07 | — |
| Counting up fast ("eight, nine, ten", "another five") | P-08 | — |
| Naming the result ("looks like I'm in a hurricane") | P-09 | — |
| An opinion, a joke, a consequence ("serious hoarding problems") | L-1, new framing | — |
| A reaction ("Oh my God", "help?") | L-1 (whole head, §3.4) | P-13 if a wide exists |
| A message / something arriving | P-12 | — |
| The verdict | P-14 | E-2 |
| A setting, a toggle, a number inside the UI | P-15 | P-16 |
| "Before / after", "old vs new", "on vs off" | P-17 | P-18 |
| His verdict on a thing that should stay visible | P-18 | L-1 |

### 8.5 Density and variety
- `FMT-LIST`: a shot change every ~1.8 s (mean 1.76, median 1.56 s); longest shot ≤ 4.0 s; ≥ 60 % real thing.
- `FMT-COUNTER`: median ≈ 1 s, accelerating to 0.47 s; longest ≤ 4.4 s (one explain beat).
- `FMT-SKIT`: shots of 4–14 s are allowed, alive only through the acting and the slow push; never more than 3–4 cuts.
- At most one shot of the same framing in a row (SD-6); alternate the three blur transitions.

### 8.6 Asset rules
**Reference inventory (what he put on screen):**
| Reel | t (s) | Element | Source | Trigger |
|---|---|---|---|---|
| mw2 | 1.33–4.07 | video call, a finger taps the screenshot | filmed macro | "When you take a screenshot" |
| mw2 | 5.33–9.73 | the photo grid → the received photo (punch-in at 8.17) | filmed macro | "Instead it uses the…" |
| mw2 | 10.6–17.93 | the alarm time picker scrolled by a finger (2 blocks) | filmed macro | "infinitely scrolling carousel" |
| mw2 | 20.40–24.4 | home screens swiped over a desk | filmed macro | "15" |
| mw2 | 25.87–29.8 | the burst counter 02 → 592 → 597, 3 angles | filmed by a second person | "capped at 600" |
| mw2 | 31.47–35.33 | the clock icon, tilted macro, punch-in at 33.53 | filmed extreme macro | "smoothly rotating hand" |
| mw3 | 2.47–4.10 | a finger taps the feature button | filmed | "So using…" |
| mw3 | 4.1–42.7 | the device on its tripod with each new result (8 blocks) | filmed | each round |
| mw3 | 10.43 / 14.60 / 28.93 / 34.43 / 42.77 | the result full frame | the real exported image | each named result |
| mw1 | 5.13–13.83 | the message bubble | recreated UI of a real message, real avatar photo | the tap on the phone |

- Film or record the real thing: no stock, no generated scenes, no mock-ups for a real screen. Recreate a UI only for a real event (the message). Results are the real outputs. Blur private data.

### 8.7 Mistakes seen in the references (and the fix)
| Seen | Fix |
|---|---|
| mw3 33.40–34.43 s: hair top and the left of the head cut in the lean-in reaction; 22.6–24.0 s too close | Eyes to chin inside, full screen; cap the punch, move the subtitle; never over a blurred copy (§3.4) |
| mw3 13.67–14.60 s: only a cheek and nose at the left edge | Whole head inside, or play it as L-1 |
| mw2 29.8–31.47 s: back of the head and ear cut at the right edge | Frame the side angle with the head inside |
| mw1 f0–f2, mw2 f0–f9: face sliding off the edge during the opening settle | Settle ≤ 112 % about the face centre |
| mw1: bubble text ≈ 31 px, sender line ≈ 18 px, end-card footer ≈ 20 px | 56 px body, 40 px sender line, nothing that matters below 48 px |
| mw2: 48 px subtitles with a 2 px outline vanish over white phone screens | 72–80 px, 3 px outline + soft shadow |
| mw2: subtitles at baseline y≈1621, under Instagram's bottom UI | Under the chin on the face; baseline y≈1440 on the real thing |
| mw3: the counter and subtitles sit on the busy result photo when the ladder overfills the frame | Same position; 3 px outline + the subtitle soft shadow on both |
| mw1: a third party's launch card and trailer music as the ending | The user's own end card or a hard stop; no music (SFX only) |
| True peak −0.5 / −0.8 / −0.6 dBTP | ≤ −1 dBTP |

### 8.8 Elevated devices (new in this edition)
| ID | Device | When | What runs | Sound |
|---|---|---|---|---|
| **EV-1** | **Motion relay** | Every blur transition (T-02, T-03, T-05) | The blur's direction continues the outgoing motion (a hand swing, a scroll, a lean); the incoming shot enters moving the same way, lands at 103 % and settles to 100 % in 2–4 f. Two cuts read as one camera move | the whip / zoom pool (§11.1) |
| **EV-2** | **UI lift** | The one UI element the line names (a setting, a toggle, a count, a notification) in a recording or macro | The real element (cropped from the same footage, never redrawn) lifts off its screen: 1.0 → 1.32 → 1.28 over 8 f (ease-out with overshoot), a soft shadow (30 px blur, 35 %); the rest of the screen dims 30 % and stays sharp (never blurred behind its own lifted piece); it holds while the line plays and sinks back on the next phrase (6 f). Lifted text ≥ 48 px; a lifted row ≥ 760 px wide | `ui-opening` / `appear-enter` (low) |
| **EV-3** | **Focus punch** | The detail that proves the fact, when a lift would break the shot (a hand-held macro, a moving device) | An instant +20–40 % punch on the word, then a 6-f rack: the rest of the frame defocuses (≈ 12 px), a ≤ 15 % vignette around the detail; released on the hand-off | `camera-quick-zoom-shoot-ohmlab-camera-quick-zoom-shoot-ohmlab` / `classic-camera-focus-and-shutter-ohmlab` (low) |
| **EV-4** | **Counter with weight** | Every counter flip (`FMT-COUNTER`) | §5.4: a blurred roll, a 4-f thump, a red underglow breath; the last value locks with a 2-f outline brighten | `selection-click` (the list cue) |
| **EV-5** | **Before/after wipe** | "before / after", "old vs new", "on vs off" on the same framing | The same shot in both states; a vertical wipe L→R over 8–10 f (ease-in-out) with a 4 px white glass edge and a 20 px soft glow; the edge pauses 3 f at the centre on the word, then completes | `swoosh-2025-01-08-03-02-26-utc-swoosh-06` / `swsh-arrow-feather-high-sdcl-archery166` |
| **EV-6** | **Glint** | The hero's landing: title card 1, the device in the lens push, a lifted UI, the final result | A soft white specular band (≈ 120 px wide, 20° tilt, ≤ 25 %, feathered) sweeps across the object in 10 f; ≤ 3 per reel | `05405-shine-ding` / `short-shine-2025-08-27-06-45-01-utc-short-shine-2` (very low) |
| **EV-7** | **Seamless loop** | The E-1 button line | The last gesture runs into a whip whose direction and speed match T-01 at f0; the last caption clears 2 f before the end, so the replay reads as one take | none (the f0 sound covers the join) |
| **EV-8** | **Show-and-tell dock** | His opinion on a thing that must stay visible (a spec, a before/after, a number) | T-14: the full-frame talking head eases (10–12 f, on an arc) into the wide card `L-10` while the real thing slides up into the top slot; his caption sits under his chin in the card; T-15: he grows back to full frame on the next opinion line (8–10 f). 1–3 per 60 s | `air-low-woosh` in / `woosh-2025-08-27-02-12-31-utc-woosh-03` out |
| **EV-9** | **Screen-fill hand-off** | The user holds a phone up in the take (`ADAPT`; the hook or a fact start) | The phone's screen is tracked; on the noun it scales up (8–10 f, ease-in) until it fills the frame, and the cut to the full-frame recording happens inside the screen: the device becomes the picture | `zoom-in-zoom-in` / `whoosh-back-zoom-swoosh-fast-camera-in-and-out-ocp-1707-23-01` |

---

## §9 Transition system (`T`)

### 9.1 Transition library (frames at the reel's rate)
| ID | Transition | Frames | Recipe | SFX | Seen in |
|---|---|---|---|---|---|
| **T-01** | **Whip-in settle** (open) | 2–10 | f0 already moving: scaled ≈ 108–112 % about the face centre with directional motion blur, easing out to 100 % (mw1: 115 → 100 % in 10 f at 24 fps; mw2/mw3: f0–2). Whole head inside from f0 (fix) | Boom on f0 | 3/3 |
| **T-02** | **Horizontal whip pan** | ≈ 7 | Out-shot: horizontal motion blur builds 2 f (streak ~60 → 200 px); 2–3 peak frames with both shots smeared and crossfaded, **the cut inside the blur**; in-shot de-blurs 2 f. Left → right, no colour flash | Soft whoosh | mw2 5.33, 15.27, 24.4; mw3 28.93 |
| **T-03** | **Radial zoom blur** | 8–10 | Out-shot: radial blur from the centre grows 4 f (feels like a push-in); ≈ 2 f of pure streaks; in-shot: radial blur decays 3 f | Whoosh / zoom | mw2 10.6, 17.93 |
| **T-04** | **Zoom-through** (into / out of the device) | 6–7 | Out-shot radial blur 3 f; peak frame both smeared; in-shot de-blurs 2–3 f. Into the device on the method line; out of a result back to the talking head | Zoom | mw3 2.47, 15.97, 37.93 |
| **T-05** | **Diagonal / spin whip** | 6–8 | Directional blur at ~30–45° with a slight rotation, A↔B | Whoosh | mw2 1.33, 29.8 |
| **T-06** | **Hard cut** | 0 | Inside a fact, on a keyword ("15"), into a reveal, back to the talking head. On a word boundary | None | 3/3 |
| **T-07** | **Punch-in** | 0 | Instant scale jump +15–40 % (B-roll) / ≤ +15 % and face-capped (talking head) | A soft focus click on a detail punch (EV-3) only; none on the talking head | mw2 8.17, 14.13, 33.53 |
| **T-08** | **Punch ladder** | 0 per step | §8.3a R-5 | The list cue `selection-click` on each step, with the counter flip | mw3 |
| **T-09** | **Camera-angle cut** | 0 | Close ↔ wide on a reaction peak, dry | None (silence is the effect) | mw1 f332 |
| **T-10** | **J-cut return** | 0 | The line starts on the outgoing shot; cut mid-sentence, audio leading ≈ 0.78 s (19 f at 24 fps) | None | mw1 f432 |
| **T-11** | **Slow push** | whole shot | +16 % over 6.7 s, linear, footage and overlays together | None | mw1 |
| **T-12** | **Cut to black → end card** | 2–3 black + 8 build | §8.3a R-6 | The card's own hit (§11) | mw1 (fix: own card) |
| **T-13** | **Hard end** | 0 | ≤ 0.4 s after the last word or gesture | None | 3/3 |
| **T-14** | **Dock** (this edition) | 10–12 | The talking head scales down on an arc into the `L-10` card (ease-in-out, a 2-f settle); the real thing slides up into the top slot 2 f later; the background fades to the set's deep gradient (no blurred | `air-low-woosh` | this edition |
| **T-15** | **Undock** (this edition) | 8–10 | The card grows back to full frame on an ease-out (the face whole throughout); the real thing exits upward | `woosh-2025-08-27-02-12-31-utc-woosh-03` (low) | this edition |
| **T-16** | **Screen-fill** (this edition) | 8–10 | EV-9 | `zoom-in-zoom-in` | this edition (from mw2's lens push) |

### 9.2 Grammar
| Boundary | Use | Never |
|---|---|---|
| Frame 0 | T-01 | A still frame, a fade from black |
| Hook → first fact (`FMT-LIST`) | T-05 spin whip | Hard cut |
| New fact / topic (`FMT-LIST`) | T-02, T-03 or T-05 (alternate) | A blur inside a fact |
| Inside a fact | T-06, T-07 | Blur transitions |
| Talking head → device (method, `FMT-COUNTER`) | T-04 in | — |
| Counted numbers | T-08 | — |
| Device → result | T-06 (or T-02 once) | — |
| Result → talking head | T-04 out or T-06 | — |
| Reaction peak (`FMT-SKIT`) | T-09, dry | A sound effect |
| Opinion on a thing that must stay visible | T-14 into the dock, T-15 out | A split, a PiP, a corner box |
| The user's phone held up (`ADAPT`) | T-16 into the recording | A pasted fake phone |
| Last word | T-13 (or T-12 to the user's own card) | Black tail > 0.4 s |

### 9.3 Transition map (part of the plan)
```yaml
transitions:
  - {t: 0.00,  id: T-01, to: L-2, note: "whip-in settle, face whole", sfx: boom}
  - {t: 1.33,  id: T-05, from: L-2, to: L-3, note: "title out, fact 1", sfx: whoosh}
  - {t: 5.33,  id: T-02, from: L-1, to: L-3, note: "inside fact 1's turn to the reveal"}
  - {t: 10.60, id: T-03, from: L-1, to: L-3, note: "fact 2 starts", sfx: zoom}
  - {t: 20.40, id: T-06, from: L-1, to: L-3, note: "cut exactly on '15'"}
  - {t: 36.93, id: T-13}
```

### 9.4 Budget (per 60 s)
- Blur transitions (T-02/03/04/05): 6–10, one per topic change, never two within 2 s; alternate their types.
- Hard cuts: 15–30 (`FMT-LIST`/`FMT-COUNTER`), 2–4 (`FMT-SKIT`).
- Punch-ins: 3–6; punch ladders: ≤ 2 per reel.
- T-09 and T-10: once each, `FMT-SKIT` only. T-12: ≤ 1.
- T-14/T-15 (the dock): 1–3 pairs per 60 s, never two within 6 s. UI lifts and focus punches (EV-2, EV-3): 2–5 per 60 s. Glints (EV-6): ≤ 3 per reel.

---

## §10 Motion tokens, camera, layers, finishing

### 10.1 Motion tokens
| Token | Value |
|---|---|
| Lead | The real thing sharp 0–0.3 s before its noun |
| Whip pan | ≈ 7 f, streak 60 → 200 px, cut mid-blur |
| Radial zoom | 8–10 f (topic change), 6–7 f (zoom-through) |
| Spin whip | 6–8 f, 30–45°, slight rotation |
| Open settle | ≤ 112 % → 100 %, 2–10 f, ease-out, about the face |
| Punch-in | instant, +15–40 % (B-roll), ≤ 15 % face-capped (talking head) |
| Punch ladder | +8–15 % per step, every 14–15 f |
| Slow push | ≈ 0.1 %/f linear (+16 % over 6.7 s) |
| Result push | slight, +3–6 % over the hold |
| Subtitles | hard swap, no animation |
| Landing settle | 103 % → 100 % over 2–4 f, ease-out (every real-thing landing after a blur) |
| UI lift | 1.0 → 1.32 → 1.28 over 8 f; sinks back in 6 f |
| Focus punch | instant +20–40 %, then a 6-f rack (≈ 12 px defocus around the detail) |
| Counter thump | 1.0 → 1.06 → 1.0 over 4 f per flip |
| Glint | a 10 f sweep, 20° tilt, ≤ 25 % white |
| Dock / undock | 10–12 f in (arc, ease-in-out, 2-f settle) / 8–10 f out |
| Before/after wipe | 8–10 f, a 3-f pause at the centre on the word |

### 10.2 Camera
- **Talking head:** a tripod, eye level, shallow depth of field. Never static for long: re-framed between returns (SD-6), a punch-in now and then, the opening settle. Every move keeps the whole head (§3.4).
- **B-roll:** hand-held; the hand's drift is the move; punch-ins push into details.
- **In-camera moves count:** the device swung into the lens, the rack focus, him leaning in and turning to the lens mid-take are the hook's motion; don't stack digital moves on top of them.

### 10.3 Layer order (back to front)
1. Footage / B-roll / result image (a landscape recording cover-cropped full screen or in a designed box on the gradient; the creator's footage full screen or in the dock card; never a blurred fill, §3.4)
2. The dock card (`L-10`) or the lifted UI (EV-2), with their soft shadows; the bubble (parented to the plate) and the neon outline (on the plate); the glint (EV-6) on whatever it crosses
3. `COUNTER`
4. `CAP-SUB` (always above the blur transitions, sharp)
5. `TITLE-3D` (hook only)

### 10.4 Finishing
- Clean and glossy, **never pale** (§4.4): high saturation, medium contrast, deep blacks, no grain, no LUT; the only vignette is the focus punch's and the only bloom a ≤ 10 % glow on a bright screen in a dark set.
- Match the talking head and B-roll exposure within a reel; keep each set's palette (§4.2).
- Spell-check every on-screen word against the script; brand and feature names as the brand writes them.

---

## §11 Sound design (D4)

**No music bed, ever.** Sound is SFX only (the creator's direction, 12 Oct 2026): never a music track, bed, drone or loop under the voice.

### 11.0 What the references do (measured)
| Format | SFX | Loudness measured |
|---|---|---|
| `FMT-LIST` | A bass boom/whoosh on f0; soft whooshes on the blur transitions (one clear burst at 17.7 s just before the radial zoom at 17.93) | −14.3 LUFS, LRA 3.7, TP −0.8 |
| `FMT-COUNTER` | A boom on f0; a whoosh on the zoom-through into the device (2.47 s); probably a short riser into the final reveal (42.3–42.44 s, guess); the counter flips are dry | −14.1 LUFS, LRA 2.1, TP −0.6 |
| `FMT-SKIT` | **None**: no ding on the message; the room, the scream and the phone hitting the floor are the sound | −14.8 LUFS, LRA 10.2, TP −0.5 |
- mw3 and mw1 ran a quiet music track under the voice (and mw1's end card its own trailer music); we don't: SFX only.
- The references put sound only on **f0** and the **blur transitions** (≈ 6–10 cues per 60 s); hard cuts, punches, counter flips and the bubble were dry.
- The voice is a close lav, dry, bright and heavily compressed in the explainer formats (LRA 2–4).
- Silence is a device: the reaction cut plays dry (mw1), and so does the payoff's last line (mw3).

This edition **scores every real-thing event** with a premium tech-ad sound (precise whips, glass taps, camera focus clicks, soft UI opens, a tick on every counter flip, a few deep hits on reveals) and keeps the opinion lines and the skit's silences dry.

### 11.1 The palette (glossy tech: whips, glass, focus, light)
| Role | When | Pool (ids from SOUNDS.md; rotate) | Level vs voice |
|---|---|---|---|
| **f0 open** | T-01 | `swish-boom`, `boom-2025-01-08-02-40-38-utc-boom`, `abstract-hit-sub-bass-07` | −12…−16 dB |
| **Title cards** | `TITLE-3D` smear swaps (cards 2, 3) | `swsh-arrow-feather-high-sdcl-archery166`, `simple-whoosh-382724` | −20…−24 dB |
| **Whip / spin** | T-02, T-05, EV-1 at topic changes | `whip-swish-2025-08-27-06-37-41-utc-whip-swish`, `fast-swish-movement-fast-swish-movement`, `whoosh-2025-01-08-02-32-33-utc-whoosh-03`, `whoosh-2025-01-08-02-32-33-utc-whoosh-04`, `ultra-fast-swipe` | −16…−20 dB |
| **Radial / zoom-through / screen-fill** | T-03, T-04, T-16 | `zoom-in-zoom-in`, `zoom-2025-05-09-19-11-57-utc-zoom-3`, `zoom`, `whoosh-back-zoom-swoosh-fast-camera-in-and-out-ocp-1707-23-01` | −16…−20 dB |
| **Touch** | A finger tap, a toggle, a click in the recording, on its frame | `scifi-screen-tap-2025-08-27-05-29-10-utc-scifi-screen-tap-2`, `ui-click`, `click-click`, `mouse-click-mouse-click` (a desktop click) | −22…−26 dB |
| **Focus punch** | EV-3 | `camera-quick-zoom-shoot-ohmlab-camera-quick-zoom-shoot-ohmlab`, `classic-camera-focus-and-shutter-ohmlab` | −20…−24 dB |
| **UI lift** | EV-2 | `ui-opening`, `appear-enter`, `tech-appear-2025-02-11-05-48-28-utc-tech-appear-2` | −20…−24 dB |
| **Counter flip / ladder step** (the list cue) | EV-4, T-08 | `selection-click` | −22 dB |
| **A number lands** | The cut on a spoken number ("15", "600") | `abstract-hit-sub-bass-07`, `digital-text-2026-05-18-01-34-24-utc-digital-text-03` | −14…−20 dB |
| **Before/after** | EV-5 | `swoosh-2025-01-08-03-02-26-utc-swoosh-06`, `swsh-arrow-feather-high-sdcl-archery166` | −18…−22 dB |
| **Glint** | EV-6 | `05405-shine-ding`, `short-shine-2025-08-27-06-45-01-utc-short-shine-2` | −22…−26 dB |
| **Dock / undock** | T-14 / T-15 | `air-low-woosh`, `woosh-2025-08-27-02-12-31-utc-woosh-03`, `light-woosh-7119` | −20…−24 dB |
| **Reveal = full screen** | SD-5, the result goes full frame | `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5`, `impactfadeinout-tfx2697`, `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-6` | −8…−14 dB |
| **Into the final reveal** (optional) | The last ladder | `zoom-in-riser-zoom-in-riser` or `riser-hit-2025-08-27-06-39-00-utc-riser-hit-1`, trimmed to stop on the cut | −18…−20 dB |
| **The user's own end card** | E-3, T-12 | `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-4` | ≤ voice level |

**Never in this style:** comedy, cartoon or crowd sounds, voice memes, record scratches, cash registers, glitches (N6). The comedy is his face and the silence.

### 11.2 The SFX ledger (Naman's rule)
- **Any file at most 2× in a reel,** except the one **list cue** (here `selection-click` on each counter flip and ladder step).
- **No file on two consecutive cues;** rotate within each pool.
- **Density:** about one cue every 1.2–2.0 s on real-thing beats (`FMT-LIST`, `FMT-COUNTER`), each tied to a picture event; the opinion lines on the talking head stay dry (one soft crossing at most); `FMT-SKIT` stays nearly dry (f0 and the end card; nothing on the bubble or the reaction).
- **Never more than two cues overlapping;** never on a trigger word's consonant (shift ±2 f).
- The taps, clicks and focus are texture; the f0 sound, the number lands and the reveal hits are what the viewer feels.

### 11.3 Silence and the mix
- **Go silent (no new SFX) for 0.4–0.6 s before the final reveal and before the button line,** then land it. The payoff's last line plays dry (mw3); the skit's reaction plays dry (mw1).
- Voice: high-pass 80 Hz, de-ess, firm compression (LRA 2–4 in the explainers; natural in the skit).
- Master: **−14 LUFS integrated, true peak ≤ −1 dBTP** (fixes all three references). The voice is always the loudest thing.

---

## §12 Footage handling

### 12.1 Shoot setups
| Setup | Description | Best format |
|---|---|---|
| **A: Tripod talking head** (house) | Eye level, ~35 mm feel (mw1/mw2) or ~24–28 mm leaning in (mw3), shallow depth of field, a strongly coloured set, the product in hand | All |
| **B: Hand-held macro of the product** | Real hands, the screen big and sharp, the set's bokeh behind | `FMT-LIST` |
| **C: The lab** | The device on a tripod in the same location, filmed close | `FMT-COUNTER` |
| **D: Wide second angle** | Locked off, the whole room | `FMT-SKIT` |
| **E/F: Selfie, recordings, photos** | The plugin user's usual footage | Any, via §3.6 (a tight selfie stays full screen or fills the dock card; never over its own blurred copy) |

### 12.2 Crop table (starting values)
| Situation | Placement |
|---|---|
| Talking-head framings | §3.1 (centre, thirds, lean-in, desk close-up) |
| Punch on the talking head | ≤ +15 %, head box ≥ 40 px inside every edge |
| Punch on B-roll | +15–40 %, no limit but legibility |
| Footage tighter than the face allows | Full screen: hair may touch the top edge, eyes to chin always in; cap punches, move text clear; or the dock card the footage fills. Never a blurred copy of itself behind shrunk footage, never a narrow pillar |
| Landscape recording (§3.6) | Cover-crop to the part that matters (or push in) to fill the frame; or a designed glass box on the set's gradient; never over a blurred copy |
| The dock (`L-10`) | A wide crop around the face: head box ≥ 40 px inside the card, face ≥ 300 px wide; the thing above ≥ 960 px wide |

### 12.3 Frame rate
- mw1 was 24 fps, mw2/mw3 30 fps. Render at the talking head's rate (30 fps by default) and conform every clip to it; convert the reference frame counts with t = f / fps.

### 12.4 Audio
- One clean voice track (all three reels use a visible lav). Keep the real room sound in `FMT-SKIT` (the scream, the clatter) on the reaction.

---

## §13 Output contract

### 13.1 Beat sheet schema
```yaml
- id: 6
  section: FACT-2                  # HOOK | FACT-n | ROUND-n | BEAT-n | PAYOFF | END
  format: FMT-LIST
  layout: L-3                      # L-1 … L-10
  framing: null                    # L-1 only: centre | left | right | punch
  spoken: "This infinitely scrolling carousel that you sometimes see is all an illusion."
  trigger: "carousel"
  onset_s: 11.79
  pattern: P-02                    # §8.3
  visual: "the alarm time picker scrolled by a finger, full frame"
  transition_in: T-03              # topic change
  transition_out: T-06             # hard cut to L-1 on 'is all an illusion'
  caption: ["This infinitely scrolling carousel", "that you sometimes see"]
  loud_element: null               # TITLE-3D | COUNTER (+value) | BUBBLE
  elevation: EV-1                  # EV-1 … EV-9, or null
  sound: [zoom-in-zoom-in, scifi-screen-tap-2025-08-27-05-29-10-utc-scifi-screen-tap-2]
  face: "absent (B-roll)"          # or "whole head, top ≈ 200, ≥ 40 px air"
```

### 13.2 Hook proposal format (3 required)
```yaml
- name: "Can it actually…?"
  formula: HF-2
  format: FMT-COUNTER
  frame0: "lean-in talking head left third, whole head inside, the device on its stand at frame right, subtitle on"
  first_3s: "push-in settle · neon traces the device on its name · 3 subtitle swaps · radial zoom-through into the device"
  promise: "an impossible result, tested for real"
  loop: "the counter from 0: what does the last number look like?"
```

### 13.3 What to show the creator
(1) the format and why; (2) the 3 hooks with the recommended one; (3) the loud element; (4) the speaker map (talking head vs real thing share, and where the dock is used); (5) the beat sheet + transition map with the budget; (6) the sound ledger; (7) the asset list (recordings, result images, a real message if any, anything missing); (8) stills: frame 0, the 1.3 s mark, one blur transition at its peak, one real-thing beat with its focus punch or UI lift, a talking-head frame with the caption under the chin (whole head), the dock if used, the last frame.

---

## §14 Worked example and cheat sheet

### 14.1 mw2 "What they don't tell you about the iPhone" as a plan (`FMT-LIST`, 30 fps)
| t (s) | Spoken | Layout | Visual | Transition / sound |
|---|---|---|---|---|
| 0.00 | "(What) they don't tell you about the iPhone." | L-2 | P-01 + `TITLE-3D` cards on f2 / f10 / f17 | T-01 / `swish-boom` |
| 1.33 | "When you take a screenshot while FaceTiming someone," | L-3 | P-02: video call, a finger taps the screenshot | T-05 / `whoosh-2025-01-08-02-32-33-utc-whoosh-03` |
| 4.07 | "it's not actually a shot of your screen." | L-1 centre | — | T-06 |
| 5.33 | "Instead, it uses the other person's camera…" | L-3 | P-03: the photo grid → the received photo (6.43), P-04 punch at 8.17 | T-02 / `whip-swish-2025-08-27-06-37-41-utc-whip-swish` |
| 9.73 | "…so it's higher quality." | L-1 | — | T-06 |
| 10.61 | "This infinitely scrolling carousel…" | L-3 | P-02: the alarm picker scrolled | T-03 / `zoom-in-zoom-in` |
| 13.30 | "…is all an illusion." | L-1, then punch at 14.13 | — | T-06, T-07 |
| 15.27 | "…if you scroll through the thing hundreds of times." | L-3 | the picker continued | T-02 / `fast-swish-movement-fast-swish-movement` |
| 17.93 | "There's a limit on how many pages…" | L-1 left third | — | T-03 / `zoom-2025-05-09-19-11-57-utc-zoom-3` |
| 20.40 | "15." | L-3 | P-02: home screens swiped over the desk, cut **on** "15" | T-06 |
| 24.40 | "The number of burst photos you can take…" | L-1 | — | T-02 / `whoosh-2025-01-08-02-32-33-utc-whoosh-04` |
| 25.87 | "…is capped at 600…" | L-4 | P-05: the burst counter, 3 angles (26.73, 28.27) | T-06 |
| 29.80 | "When you switch on low power mode," | L-1 side (whole head, fix) | — | T-05 / `whip-swish-2025-08-27-06-37-41-utc-whip-swish` |
| 31.47 | "…the smoothly rotating hand on the clock icon…" | L-3 | P-04: tilted macro, punch at 33.53 | T-06, T-07 |
| 35.33 | "Attention to detail is wild." | L-1 right third | P-14: face-palm laugh | T-06 → T-13 at 36.93 |
Sound: SFX only, no music; the reference had 7 cues, this edition scores ≈ 20 (whips, taps, the focus punches at 8.17 and 33.53 s, a UI lift on the burst counter, one glint on title card 1, a sub hit on "15"); −14 LUFS, ≤ −1 dBTP. Subtitles 72–80 px from f41: under the chin on the face, baseline y≈1440 on the real thing.

### 14.1a mw3 "Can your iPhone see the back of your head?" (`FMT-COUNTER`, condensed)
| t (s) | Spoken | Layout | Visual | Transition |
|---|---|---|---|---|
| 0.00 | "Can your iPhone actually see the back of your head?" | L-1 lean-in | P-10 neon on "iPhone" (f9–17) | T-01 / `swish-boom` |
| 2.47 | "So using the new reframe feature, that's one rotation," | L-5 | P-06 tap; counter on at 4.10 ("Reframes: 0" → 1) | T-04 / `zoom-in-zoom-in` |
| 5.20 | "…but what if we keep doing it?" | L-1 | — | T-06 |
| 10.43 | "My face is starting to look a little funny." | L-6 | P-09 reveal | T-06 |
| 15.97 | "…you are seeing the inside of my ear…" | L-1 (4.4 s) | — | T-04 out |
| 24.0 | "eight, and then nine, and then ten" | L-5 | P-07 ×3 punches | T-06, T-07 |
| 31.13 | "Let's do another five more." | L-5 | P-08 ladder 11→15 | T-08 |
| 33.40 | "Um… help?" | L-1 (full screen, punch capped so eyes to chin stay in, fix) | — | T-06 |
| 40.23 | "…to the absolute limit" | L-5 | P-08 ladder 16→20 | T-08 / optional `riser` |
| 42.77 | "…truly AI doing what it does best" | L-6 | counter off | T-06 → T-13 at 45.5 |

### 14.1b mw1 the announcement skit (`FMT-SKIT`, 24 fps, condensed)
0.0 bait on L-1 (T-01) → 3.8 "It's okay", prop down → 5.13 P-12 bubble (46 px, fix) → 6.25–13.8 T-11 slow push, silent read → 13.83 T-09 to the wide, dry → 17.22 the line starts on the wide → 18.0 T-10 back to the close-up → 22.42 E-3: the user's own end card (T-12) or a hard stop.

### 14.1c ADAPTATION example: a selfie + screen recordings (`FMT-LIST`, 30 fps)
A creator on a handheld selfie, five hidden settings in an app, five screen recordings (illustrative numbers).
| t (s) | Spoken | Layout | Visual | Transition / sound |
|---|---|---|---|---|
| 0.00 | "Five settings this app hides from you." | L-1 (selfie full screen, the title placed clear of the face) + `TITLE-3D` | the phone held up; card 1 lands with a glint (EV-6) | T-01 / `swish-boom` |
| 0.45 | "…hides from you." | L-1 → recording | EV-9: the held phone's screen fills the frame and becomes the full-frame recording | T-16 / `zoom-in-zoom-in` |
| 1.30 | "First: turn off…" | recording, full frame (§3.6) | the settings list scrolling | T-06 |
| 2.10 | "…smart replies." | recording | P-15: the toggle row lifts (EV-2); a tap flips it | `ui-opening`, `scifi-screen-tap-2025-08-27-05-29-10-utc-scifi-screen-tap-2` |
| 3.40 | "It reads every chat to do that." | L-1 left third (whole head) | caption under the chin | T-06 (dry) |
| 4.60 | "Second…" | recording 2 | relay whip (EV-1), lands at 103 % and settles | T-02 / `whip-swish-2025-08-27-06-37-41-utc-whip-swish` |
| 5.50 | "…storage drops by 2 GB." | recording 2 | cut on "2 GB" to the storage bar; P-16 focus punch | T-06, T-07 / `abstract-hit-sub-bass-07`, `camera-quick-zoom-shoot-ohmlab-camera-quick-zoom-shoot-ohmlab` |
| 7.20 | "Before, and after." | recording 2 | P-17 wipe between the two states | `swoosh-2025-01-08-03-02-26-utc-swoosh-06` |
| 8.40 | "Honestly, that's ridiculous." | `L-10` dock under the after-state | T-14 in; caption under his chin in the card | `air-low-woosh` |
| 10.0 | "Third…" | L-1 → recording 3 | T-15 out, then a radial zoom | `woosh-2025-08-27-02-12-31-utc-woosh-03`, `zoom-2025-05-09-19-11-57-utc-zoom-3` |
| … | … | … | … | … |
| end | "Attention to detail is wild." | L-1 right third | P-14 button line, a face-palm laugh; EV-7 loop whip | T-13 |
Talking head ≈ 35 %; the dock once; about one cue every 1.5 s on the recordings, opinion lines dry; subtitles 72–80 px, every word.

### 14.2 Cheat sheet
| Reel | Format | Learn | Don't copy |
|---|---|---|---|
| mw2 | `FMT-LIST` | The thing into the lens, the 3D title, fact = real thing full frame, blur only at topic changes, re-framed returns, quiet subtitles | 48 px subtitles under the app UI; the side angle cutting the head; −0.8 dBTP |
| mw3 | `FMT-COUNTER` | The live counter, odometer flips, punch ladders, compression, zoom-through, reveal = full screen, the dry payoff | Reaction close-ups cutting the head; text on a busy plate without a shadow; −0.6 dBTP |
| mw1 | `FMT-SKIT` | Bait then interruption, the diegetic message, the silent read, silence + wide, the J-cut | 31 / 18 px bubble text; a third party's end card; −0.5 dBTP |

---

## §15 Look at your frames
Not a checklist; the questions the best editor asks while scrubbing:
- **Frame 0, sound off:** is his whole face there, mid-gesture, with the real thing in hand and the first words on screen?
- **The frame:** is their video full screen or in a designed box (rounded, rimmed, on the style's ground), never a sharp rectangle over its own blur?
- **Every fact:** does the real thing fill the frame on its noun (or just before), and can I read the one detail that proves it on a phone? Did it get its punch, lift or glint?
- **Every whip:** does the motion carry across the cut, and does the new shot land and settle?
- **The speaker:** the whole head in every frame, re-framed every return, the caption just under the chin? Is he 30–40 % of the reel? If the dock is used, is the card wide and the thing above it big?
- **Scale:** shrink the still to thumbnail size. Is the hero the first thing I see? Is any frame mostly blurred background, a narrow pillar, or their footage shrunk over its own blur?
- **The loud element:** one, heavy, only in its window?
- **Colour:** glossy and saturated, deep blacks? Anything pale comes out.
- **Sound:** whips, taps, focus, lifts, ticks, a few hits, each on its picture; no file overused; the opinion lines and the skit's silence dry; no music?
- **Vibe:** premium, fast, honest, deadpan. Anything cartoon, fake or busy comes out.

---

## §16 Build + render
- **Pipeline:** the plugin's edit skill: plan, draw every frame in `reel.js` (`frame(t)`), look at stills, storyboard, render.
- **Fonts (bundled):** Montserrat (`Montserrat-VF.ttf`, `Montserrat-Italic-VF.ttf`), Inter Tight (`InterTight-VF.ttf`), Anton (`Anton-Regular.ttf`), Barlow Condensed (`BarlowCondensed-Bold.ttf`).
- **Helpers you'll want:** `Footage(t)` (framings, punches, the face-capped scale; always full screen, never a blurred fill), `WhipPan`, `RadialZoom`, `SpinWhip`, `ZoomThrough`, `PunchLadder(steps)`, `Title3D(cards)`, `CapSub(phrases)`, `Counter(label, values)` (odometer flip), `NeonOutline(rect)`, `Bubble(msg)` (stretch-wipe, parented to the plate), `EndCard(name)`, `Relay(dir)` (EV-1), `UILift(rect)` (EV-2), `FocusPunch(rect)` (EV-3), `BeforeAfter(a, b)` (EV-5), `Glint(target)` (EV-6), `Dock(t)` (EV-8), `ScreenFill(phoneRect)` (EV-9). All pure functions of t.
- **Final:** 1080×1920, H.264, AAC, −14 LUFS, true peak ≤ −1 dBTP; check a contact sheet of the final file.

---

## Appendix A. Evidence map
| Rule / element | Reels |
|---|---|
| Speaker full frame, never boxed or split; full frame ↔ real thing full frame (this edition adds the dock, `L-10`) | mw1, mw2, mw3 (3/3) |
| Real thing full frame on its noun, 0–0.3 s early; no drawn graphics on the product | mw2, mw3 |
| One loud element per reel (title / counter / bubble), quiet still subtitles | mw2 / mw3 / mw1 |
| Blur transitions at topic changes, hard cuts inside | mw2, mw3 |
| Punch ladders, counter, compression, reveal = full screen | mw3 |
| Re-framed returns, the thing into the lens | mw2 |
| Diegetic message, silent read, silence + wide, J-cut | mw1 |
| Frame 0 in motion, boom on f0 | 3/3 (boom: mw2, mw3) |
| Pauses cut at 4.1 words/s | mw2, mw3 |
| Fixes: face cut (mw1, mw2, mw3), small text (mw1, mw2), subtitle y (mw2), busy plate (mw3), third-party end card (mw1), true peak (3/3) | mw1, mw2, mw3 |
| The dock (`L-10`), motion relay, UI lift, focus punch, counter with weight, before/after wipe, glint, seamless loop, screen-fill; sizes as floors (captions 72–80 px, counter 120–140 px, title cap ≥ 120 px); every word captioned, under the chin on the face; never pale; a scored SFX palette with the ledger rule, no music; the whole face always, tight selfies shifted down and ≥ 88 % | **The creator's directions, 11–12 Oct 2026** |
