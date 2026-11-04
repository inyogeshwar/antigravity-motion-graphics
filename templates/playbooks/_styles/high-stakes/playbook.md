# Stakes Challenge Playbook (v2, "Every Number Is a Picture, Elevated" edition, for Claude Opus 5.5)

> **In this plugin:** this file is the whole playbook: every measured value and recipe from the 4 reference reels is in it, and there is no other playbook file to open. Frame counts are measured at each reel's own rate (mb1, mb2, mb3 at **30 fps**; mb4 at **29.97 fps**, treated as 30 for drawing). Convert with t = f / 30 when you draw. Positions are on 1080×1920 (all four references are native 1080×1920). The per-reel notes it cites (`mb1…mb4`) are not shipped. Sounds are picked by id from SOUNDS.md; commands are in the edit skill's REFERENCE.md. The page gives you `FACE(n)` and `FACE0` (with `head_top` and `chin`) for every speaker frame. Every **fix** is marked as one; everything else was seen in the reels or is this edition's elevation, marked as such.

**Purpose:** you (Claude) receive a video plus its script. Use this document to **ideate and build** every hook, caption, stake graphic, verdict, cut and sound, then edit the Reel so it feels like a high-stakes challenge Short: **something is on the line, the viewer can see exactly how much, and the edit never lets them look away.** The reference reels are crew-shot challenges with strangers. The plugin's users film one person talking to their own camera, so §3.7 carries the same grammar to a single talking head. Read §3.7 before you plan a talking-head reel.

**What v2 is:** a frame-by-frame analysis (cuts, framing, colour, caption timing, motion recipes, audio) of 4 Shorts by MrBeast: mb1 "Answer The Call, Win 10,000" (38.44 s, a campus subscriber check; if his mom answers they each win $10,000), mb2 "Buy Feastables, Win Unlimited Money" (50.98 s, a brand stunt told as a heist episode with a 60-second grab), mb3 "Can You Pass This Classroom Quiz" (73.55 s, a classroom game show, $3,000 per right answer), mb4 "I Paid A Random Student's College Tuition" (36.86 s, a subscriber check; the winner names his tuition and gets more), **elevated ten times** by the best editor, motion designer and creative director in the world. The stakes grammar is kept whole; this edition gives every number **weight** (it slams, squashes, settles and glints), keeps **one pot** growing on screen for the whole reel, makes the speaker **move** through framings and into a stake board, lets the viewer always see how many tries are left, and scores every stake event with a punchy, exact sound. All measured layouts, recipes and rules are kept. Where a reference reel and a direction disagree, **the directions win**.
- **Not one layout:** three formats (§3): the street check, the heist episode and the game show, each with its own caption system and clock; plus `FMT-SOLO` (§3.7) for one person on camera.
- **Full frame is home:** every frame of all four reels is full-frame footage; people move by **shot distance** and full-frame inserts (§3.0a). This edition adds one designed move for a talking head, the **stake board** (`L-9`, EV-3): the speaker eases into a wide card while a big number owns the screen, then eases back to full frame.

**Measured sizes are floors, not targets.** The references' captions (70 px in mb1), pills (50 px), labels (~60 px in a wide) and shouts (70 px) were too small for a phone. Here:
- **Captions** `CAP-COMIC` **110–130 px** font (cap ≥ 80 px); `CAP-WORD` ≥ 100 px. Never below the floor: split the phrase instead.
- **The stake number** of a beat is the hero: **≥ 140 px tall** and **≥ 560 px wide** on the speaker (`FMT-SOLO`), **≥ 860 px wide** on the stake board or a plate; a countdown spans **x ≈ 120–960**; the clock ≥ 170 px tall; the red X ≥ 300 px; pills ≥ 700 px wide with text ≥ 64 px; badges ≥ 200 px.
- **No small thing that matters:** a number the viewer must read is never under 90 px tall; decoration (HUD) ≥ 40 px and never carries information.
- **No dead frame:** a full-frame talking head is never "empty", but a stake board, insert or plate that is more than half plain background for longer than ~0.7 s means the number is too small or the next element is late.
- **Full screen or a box, never any footage or picture over its own blur** (Naman, 13 Oct): the creator's video either fills the frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground or scene) that it fills completely (cover-crop centred on the face). The same goes for every recording, screenshot, photo, diagram and clip: it fills the frame (cover-crop to the part that matters, or a push-in) or sits in a designed box on the style's own ground (its colour, gradient, texture, grid or drawn set). Never a sharp box over a blurred or darkened copy of itself, never a band padded with blurred bars: that hard rectangle inside the frame looks cheap. A tight selfie stays full screen: move the text, not the video; hair may touch the top edge, eyes to chin always in; when the whole head must show, use a box layout on the style's ground. A matte cut-out over a plate and a whole-frame blur transition are fine.
- **Full screen or a box, never their own blur** (Naman, 13 Oct): the creator's video either fills the frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground or scene) that it fills completely (cover-crop centred on the face). Never shrink it over a blurred or darkened copy of itself, never pad a band or box with blurred side bars, never set a card on their own blurred frame: that hard rectangle inside the frame looks cheap. A tight selfie stays full screen: move the text, not the video; hair may touch the top edge, eyes to chin always in; when the whole head must show, use a box layout on the style's ground. A matte cut-out over a plate and a whole-frame blur transition are fine.

**Never pale.** The footage stays bright, punchy and saturated: natural skin, deep blacks, contrast and saturation a touch up. Never desaturate, fade or lift the blacks as a look. The black-and-white fail (`mono`, P-07) is a **short named verdict beat (≤ 1.5 s)**; colour snaps back on the next cut.

**How to use this file:**
- Follow §1 (procedure) in order.
- Look up visuals by ID: formats `FMT-…`, layouts `L-…`, hook formulas `HF-…`, hook visuals `H-…`, structure devices `SD-…`, graphic families `G-…`, patterns `P-…`, transitions `T-…`, endings `E-…`, elevated devices `EV-…`.
- §2 is the craft that never bends; §2.1 is the house grammar (what makes this style, with reasons). Everything else is a default you adapt like the best editor in the world, with a one-line reason.

### The feel (read this twice)
This is **a game show that happens to one person, and the viewer is the audience**. A number is said and it *is there*: neon green, heavy, slammed onto the thing it belongs to with a sub boom you feel in your chest. A countdown drains a prize to a red `$0` while the ticks race. A try fails and the whole world drops to black-and-white for a breath, in silence; a try passes and the frame flashes lime with a bright ding. The pot in the corner keeps growing, the tries left are always visible, and every second something changes: a punch-in, a slam, a flash, a cut to the thing itself. It feels **loud, bright, generous and exact**: big energy, never messy; every graphic is a fact, nothing is decoration. If a number is only spoken, it's wrong; if the screen ever looks like a slideshow or a meme compilation, it's wrong too.

**Who the reference creator is:** a fast, friendly, slightly goofy host who puts real money in front of ordinary people and lets the camera catch what happens. 3.5–4.4 words/s, short direct questions ("Are you subscribed?"), the rule in one breath, then out of the way of the reaction. The authority is the stakes being **visible, exact and real**.

**Audience (ICP):** global teen and young-adult Shorts viewers, scrolling fast. They want **a clear stake, a clear rule, a clear verdict**, then the payoff: shown, not explained.

**Style lineage:** a crew-shot reality-challenge edit, built from three layers:
1. **Footage layer:** handheld, wide phone lens, natural light, full frame 100% of the time. Cuts every ~1.0–1.6 s to whoever speaks or reacts next. No boxes, no splits, no PiP, no cut-outs (all 4 reels).
2. **Stakes layer:** every amount, rule and result becomes a picture on the word. Neon-green money typed onto the prop it lives in, a countdown that drains a prize to `$0` in red, a running total tracked on the winner, a pinned clock that skips, a red X or a black-and-white snap on a fail, a green flash and a ding on a win.
3. **Voice layer:** heavy comic captions coloured **by who is speaking** (white host, yellow guest, magenta off-screen voice, green money words), sub-bass booms where the stakes rise, and a hard stop on the payoff.

### Creator directives
| # | Directive | Where it lives |
|---|---|---|
| D1 | **Ten times better, same soul.** Keep the stakes grammar (every number a picture on the word, verdicts seen before they're said); raise the craft: every stake slams with weight, one pot grows all reel, one hero per frame, a clear payoff. Loud and generous, never messy | The feel, §8.0 |
| D2 | **The speaker moves:** base ↔ punch-in ↔ the thing full frame ↔ side framing ↔ the stake board (`L-9`) and back; never one framing for more than ~3 cuts; frame 0 is the speaker mid-word with the caption on | §3.0a, §3.7 |
| D3 | **Seamless, running motion:** something changes every ≤ 1.6 s; numbers anticipate, slam, squash, settle and glint; pushes ease; the dock eases out and back; no frame sits still | §8.0, §10 |
| D4 | **Sound is scored like Naman's, at this style's volume:** booms on stakes, ticks under counters, a ka-ching as the pot grows, a ding on a pass, pops on pills and logos, whooshes on punches and the dock; the fail is the one silence. **No SFX file more than 2× in a reel** (the one list cue excepted). **No music bed, ever** | §11 |
| D5 | **The whole face is always visible** at every framing, punch, push, dock and crop; a close selfie stays full screen (move the text, not the video) or fills the stake-board card; never a narrow pillar, never over its own blur | §2, §3.6, §12.2 |
| D6 | **Captions are seen:** every spoken word, `CAP-COMIC` 110–130 px just under the chin, coloured by speaker; a word leaves the captions only while a stake graphic carries that same word | §5 |
| D7 | **No imposed checks.** This file gives taste, recipes and reasons; you decide like the best editor and creative director in the world. Only craft never bends | §2 |

### The reference reels → this edition, at a glance
| Area | The reference reels | This edition |
|---|---|---|
| Stake numbers | Typed on props in neon, ~90 px tall in a wide; labels ~60 px in a wide (mb3) | **Slammed with weight** (anticipation glow, 1.18 → 0.96 → 1.0 settle, green sparks, a glint sweep); ≥ 140 px tall on the speaker, ≥ 860 px wide on the board (EV-1) |
| The running total | One label on mb3's winner, per reel only in the game show | **The pot** (EV-2): one green total pinned to the speaker's side, growing with every stake in every format, fanning out at the payoff |
| The speaker | Full frame 100%; movement by shot distance (crew coverage) | The same, plus the talking-head moves: punch-in every 2nd–3rd cut, slow push on stakes, side framing for names, and the **stake board** (EV-3: eased into a wide card while the number owns the screen) |
| Tries | Fail / near / pass told by the cut | **Tries left are always visible** (EV-4: a row of dots that fill red or green on each verdict) |
| Verdicts | B&W snap (36 f) or a red X; green flash + badge + ding | The same, with a **stamp** (the X slams with a 2-frame footage squash), B&W **≤ 1.5 s**, and colour bursting back on the pass (EV-5) |
| The payoff | Plate, count-up, stack add | **The over-delivery flip** (EV-6: the expected number is struck and replaced by a bigger one) and a **locked prize tease** (EV-7: `$???` from the hook, unlocked at the end) |
| Captions | 70–130 px, on the chest (y 868–1190); hidden under stakes; dropped under the clock (mb2) | **110–130 px just under the chin**, every word; hidden only while a stake graphic shows that same word |
| Sound | 3–8 SFX per reel: booms on stakes, ticks, a ding, silence | **Scored** at about one cue every 1.0–1.5 s on stake events: booms, ticks, ka-ching, ding, pops, whooshes on punches and the dock; plain cuts dry; the fail silent (§11) |
| Colour | As shot; B&W fail to the end of the shot | **Never pale**: bright, punchy footage; B&W only as a ≤ 1.5 s verdict |
| Checks | MUST / NEVER lists, QA checklist, checkpoint | **Craft only** (§2); the rest is the house grammar (§2.1), questions (§15) and your judgement |

### Formats at a glance
| Area | `FMT-STREET` street check (mb1, mb4) | `FMT-EPISODE` heist mini-episode (mb2) | `FMT-GAMESHOW` game show (mb3) |
|---|---|---|---|
| Use when | One rule tested on person after person, pass/fail, a prize ("if X, you win Y") | A story in acts with a twist and a timed task | Questions or tasks that each add to a prize |
| Host | Full frame in walking and two-shot wides; absent in close-ups and inserts | Full frame to one side in the opening; absent mid-episode; small in the payoff | Full frame beside the screen; absent in reaction shots (~45% of cuts) |
| The picture | Money typed on props; countdown to `$0`; red X / B&W fail; green flash + badge pass; 3D payoff plate | Logo pops on names; REC HUD; pinned skipping clock; 3-angle reveal | Questions on a real screen; one running total on the winner; count-up; per-item pops |
| Captions | One word (mb1) or 2–4-word comic phrases (mb4), speaker-coloured | One comic word, popped; dropped once the clock is up | None (fix for a talking head, §5) |
| Sound | Dialogue, no bed; booms on stake, rule, answer; ticks; ding; a mute beat | Silence (no new SFX) before twists; whoosh + sub; booms on the reveal | Crowd at speech level; a boom per question; no bed |
| Pace | 3.9–4.4 words/s; median shot 1.2–1.4 s | 3.7 words/s; median 1.27 s | ~3.5 words/s; median 1.03 s |
| Ending | CTA + red arrow (mb1) or hard stop on the thank-you (mb4) | Hard stop on the payoff line | Long outro (fix: ≤ 2.6 s) |

### Quick index
| § | What |
|---|---|
| §1 | Procedure (do this in order) |
| §2 | Craft that never bends + the house grammar (M/N, with reasons) |
| §3 | Formats, layouts, the speaker's movement, framing the face, safe zones, **§3.7 the one-person adaptation**, the stake board `L-9` |
| §4 | Colour tokens and the meaning of colour |
| §5 | Type tokens and caption systems (`CAP-WORD`, `CAP-COMIC`, `CAP-SHOUT`, `CAP-OFF`, money and clock type) |
| §6 | Hook system (the 10× hook, formulas, visuals, timing, endings) |
| §7 | Structure devices: the rule taught by trying, the running stake, the clock, verdicts, open loops |
| §8 | Graphics system: the 10× layer, families `G-…`, patterns `P-…`, line → pattern lookup, density, assets, elevated devices `EV-…` |
| §9 | Transition system `T-01…T-15`: recipes, grammar, budget |
| §10 | Motion tokens, camera, layer order, finishing |
| §11 | Sound design (the palette with real ids, the SFX ledger, silence, the mix; no music) |
| §12 | Footage handling (setups, crop table from the face, the too-tight fix, frame rate, audio) |
| §13 | Output contract: beat sheet schema, hook proposals, what to show the creator |
| §14 | Worked example (mb1 rebuilt as a plan) + reference-reel cheat sheet |
| §15 | Look at your frames (the questions) |
| §16 | Build + render |
| App. A | Evidence map (which reels each rule comes from) |

---

## §1 Procedure (follow in order)

1. **Inventory.** Probe the footage (resolution, fps, duration, audio). Identify the setup (§12.1):
   - **crew coverage** (several people, handheld, multiple angles): build one of the three observed formats directly;
   - **one person talking to their own camera** (selfie or tripod, one take): this is the normal case for this plugin. Build with §3.7, which maps every device to a single talking head.
   - Conform any 29.97 fps or variable-rate phone footage to a constant 30 fps (§12.4).
2. **Transcribe** with word-level timestamps. Check every name and number against the script; a wrong number on screen breaks the whole style.
3. **Find the stakes.** List every number, amount, count, time limit, deadline, score and outcome the speaker says, with its word onset. In this style **every stake is a picture within ~0.2 s of the word** (M3). If the script has no money, the stake is whatever number or outcome it carries: a price, a score, a deadline, a count of attempts, a before and after. Write the list before anything else.
4. **Find the rule and the verdicts.** Mark the sentence that states the rule ("if X, you get Y; if not, zero"), every moment a result is known (pass / fail / answer / reveal), and the payoff line. These drive the biggest events: the countdown, the verdict grade, the boom.
5. **Choose the format** (§3.0) and write one line on why. For a talking head, choose which format's *clock* the script has (§3.7): a rule tested several times (street), a timed task in acts (episode), or questions adding to a total (game show).
6. **Plan the speaker's movement** (§3.0a, §3.7): for every beat, base framing, punch-in close-up, the thing full frame (speaker absent ≤ 1.5 s), a held stake shot with a slow push, side framing for names, or the stake board (`L-9`, 1–3 per 60 s). Write each punch-in's scale **from the face** (§3.6).
7. **Segment** the script: `HOOK` (0–3 s), `RULE` (the stake and the condition), `TRY-n` / `ACT-n` / `Q-n` (each attempt, act or question), `VERDICT`s, `PAYOFF`, `KICKER` (optional), `END`.
8. **Ideate 3 hook variants** (§6), each with a formula, frame 0, the first 3 s of events and the first captions. Recommend one.
9. **Fill the beat sheet** (§13): one beat per stake, verdict, rule or speaker change, so something changes every ≤ 1.6 s. Each beat gets its layout, framing scale, pattern, caption colour, transition and sound.
10. **The 10× pass** (§8.0, §8.7): for every stake, how it anticipates, slams, settles and glints (EV-1); where the pot grows (EV-2); where the stake board earns its place (EV-3); the tries row (EV-4); the locked tease and its unlock (EV-7). **Attack the plan:** where is a number only spoken? Where is a framing held for more than ~3 cuts? Where is a stake small? Where is the payoff not the biggest moment? Fix it in the plan.
11. **Plan transitions and score** (§9.3, §11): hard cuts by default; every stake event scored from the palette, plain cuts dry, the fail silent; silence before each twist and before the payoff. Log the SFX ledger.
12. **Produce the assets** (§8.6): real props, real screens, real logos only for names the script says, never a third party's ad. Never invent a number.
13. **Show the creator** the plan and stills (§13.3).
14. **Build act by act,** look at the stills of every stake landing and every verdict frame (§15), score, render (§16).

---

## §2 Craft that never bends
- **The whole face is always visible:** hair to chin at every framing, punch-in, push, dock, crop and insert; the face, not the frame, decides how far a zoom goes. A close selfie stays full screen (hair may touch the top edge, eyes to chin always in; move the text, not the video) or fills the stake-board card ≥ 940 px wide; never shrunk over a blurred copy of itself (§3.6). **Captions may cross the face**; nothing else does.
- **Text never sits on text:** never a caption under a stake graphic, never two stake graphics at once.
- **Sound in sync:** every SFX on the frame its picture lands, never on a stake word's consonant (slide ±2 f); nothing louder than the voice except the sub of a boom.
- **True and exact:** every number, name and result from the script; counters land on the real value; no invented verdict or reaction.
- **Readable at phone size:** captions ≥ 110 px font; stake numbers ≥ 140 px tall (never < 90 px for anything read); the hero stake ≥ 560 px wide on the speaker, ≥ 860 px on the board.
- **Loudness:** −14 LUFS integrated, true peak ≤ −1 dBTP; end on a complete line, hard stop.

Everything else is direction. You decide; write your reasons into the plan.

### 2.1 The house grammar (what makes it this style)
Not checks: this is what the four reference reels do every time, and why it works. Break one only with a reason in the plan. (The IDs are kept because other sections cite them.)
- M1. **Full frame is home.** All 4 reels are 100% full-frame footage; people move by shot distance and inserts (§3.0a), never boxed, PiP'd or split. The one designed exception is this edition's **stake board** (`L-9`, EV-3): for a big number the speaker eases into a wide card (≥ 940 px wide, whole face) while the number owns the screen, then eases back to full frame. The too-tight fix (§3.6) also scales the footage inside the frame over a blurred copy of itself.
- M2. **The whole face is always visible** (craft rule): hair to chin, at every framing, punch-in, push, dock, crop and insert. **Fix:** the references crop faces and hair constantly (mb1 20.5–24.5 and 29.9–31.7 s; mb2 selfies 10.1–15.5 s; mb3 58.0–58.5 s; mb4 2.7–4.0, 21.5–22.5, 25.0–25.5, 27.0–27.5 s). When footage is tighter than the face allows, shift it down for headroom, then scale it down inside the frame (≥ 88%) over a blurred copy of itself (§3.6); never cut the head. **Captions may cross the face.**
- M3. **Every stake is a picture, on the word:** every amount, count, time limit or outcome lands within **0–6 f** after the word (mb1 money ~0.2 s after the amount; mb2 logos 0–3 f), never only spoken. This is the style.
- M4. **Stakes sit on the thing they belong to** and stay tracked to it (mb1 briefcases, mb3 the teacher's desk, mb4 the money word on the student's chest). A **running total stays on the beneficiary** and updates in place (mb3); in this edition it becomes the pot (EV-2).
- M5. **Verdicts are seen before they are said:** a fail snaps to B&W (mb4, **≤ 1.5 s**, never pale beyond the beat) or slams a red X (mb1); a pass gets a green flash + badge + ding (mb4); 0–3 f after the reveal cut.
- M6. **Something changes every ≤ 1.6 s** (median shot 1.03–1.4 s). A held stretch never exceeds ~5 s, and only with a stake graphic and a slow push (mb1 12.6–17.4 s).
- M7. **Captions are coloured by speaker:** white host, yellow guest, magenta off-screen voice, green money/stake word (mb1, mb2, mb4). Every spoken word is on screen; a word leaves the captions only while a stake graphic carries that same word (mb1 hid the line under its money graphics).
- M8. **Pauses cut** (3.5–4.4 words/s); gaps ≥ 0.3 s kept only for action or suspense (mb1 0.78 s, mb2 1.58 s) or a mute before a deadpan line (mb4 0.74 s).
- M9. **The big sounds are for stakes.** Booms land on stake reveals, penalty landings, question/answer reveals and the payoff (all 4); this edition also scores the smaller stake events (ticks, ka-ching, pops, ding, whooshes on punches and the dock) per §11, but **ordinary cuts and caption swaps stay dry**.
- M10. **Readable at phone size:** captions 110–130 px font (cap ≥ 80 px); stake numbers ≥ 140 px tall in `FMT-SOLO` (≥ 90 px in a crew wide); clock ≥ 170 px; pills ≥ 64 px text. **Fixes:** mb1's 70 px captions and 50 px pill text, mb3's ~60 px label in a wide and ~50 px mid-count, mb2's 70 px shout. Decorative HUD ≥ 40 px and never carries information.
- M11. **Facts exact:** real numbers only; counters land on the real value; a skipping clock only skips forward and lands on the spoken count (mb2).
- M12. **Frame 0 is never empty.** **Fix:** mb1, mb2, mb3 show no text on f0 (and mb1/mb2 open on a small full-body host). Ours: the speaker mid-word with the first caption **already on** (mb4's way), and the first stake's picture by f6 if the line has one.
- M13. **Audio:** −14 LUFS, true peak ≤ −1 dBTP. **Fix:** references ranged −10.9 to −19.3 LUFS; mb2 peaked −0.2 dBTP.
- M14. **End hard** (≤ 6 f after the last word); no end card, fade or long outro (fix: mb3's 6 s outro).
- M15. **The CTA slot is the user's own.** Sponsor reads (mb2, mb3) and channel-subscribe gags (mb1, mb4) are plugs; the slot carries **the user's own CTA** with the same devices (§6.7).
- M16. **Never pale** (this edition): footage bright and punchy, deep blacks, saturation a touch up; B&W only as the ≤ 1.5 s fail verdict.

**Never in this style:**
- N1. A PiP bubble, a split screen, a cut-out over a graphic, or a small corner box of a person. The only boxed speaker is the stake board's wide card (`L-9`, ≥ 940 px wide, whole face), eased in and out.
- N2. A graphic over a face (all 4 put stakes on props, chests, desks or the empty side, y 778–1250). Captions may cross a face.
- N3. Dissolves, fades, glitches, light leaks, spins, RGB splits or zoom transitions. Only hard cuts, ≤ 2 whips, the clock blur-in, the two in-shot verdict grades and the stake board's eased dock and return (§9).
- N4. A boom, whoosh or pop on an ordinary cut or caption swap.
- N5. Two stake graphics at once, or a caption under a big one. (The pot and the tries row are small persistent trackers, not stake graphics.)
- N6. Green for anything but money, gain or a pass; red for anything but zero, fail, loss or the CTA arrow.
- N7. A stake label clipped by the edge (**fix:** mb3's `$2k` half off the left edge at 12.0 s); stakes land inside x 60–1020.
- N8. A real-time minute: compress timed tasks with clock jumps (mb2: 60 s in ~13 s).
- N9. A third party's ad, a retailer logo with no story reason, or a subscribe gag that isn't the user's own.
- N10. Copyrighted or commercial music, or any music bed (mb2 ran a bass groove under the episode; we don't: SFX only).
- N11. Fake verdicts, reactions or numbers.
- N12. True peak above −1 dBTP, loudness off −14 LUFS, or a duration that doesn't match the edit.
- N13. A pale, faded, desaturated or milky look on the footage; a B&W fail held longer than ~1.5 s.
- N14. Comedy cartoon sounds, voice memes or songs (none in any reel); the fail stays silent.

---

## §3 Formats, layouts, the speaker's movement, safe zones

### 3.0 Choosing the format
| The script… | Format | Why |
|---|---|---|
| …tests one rule on several people or attempts, each with a pass/fail result ("if you're X, you win Y") | `FMT-STREET` | The rule is taught by trying it; verdicts are the rhythm |
| …tells a story in acts (a setup, a twist, a timed task, a payoff) | `FMT-EPISODE` | Each act gets its own costume; the clock compresses the task |
| …asks questions or completes tasks that each add to one total | `FMT-GAMESHOW` | One running total on the winner; a boom per question |
| …is one person talking to their own camera (the plugin's normal case) | `FMT-SOLO` (§3.7), borrowing the clock of whichever of the three the script resembles | The grammar carries; the crew coverage doesn't |
| …mixes them | The dominant one; borrow at most one device from another (e.g. a pinned clock inside a street check) | One temperament per reel |

### 3.0a The speaker's movement: wide ↔ close-up ↔ the thing ↔ back (every reel)
The person is never boxed; the edit moves them by **shot distance and inserts**, on hard cuts. Measured rhythm:

| Beat | Where the person is | Measured |
|---|---|---|
| **Hook** (frame 0 → ~3 s) | Full frame, mid-action, already talking (walking wide mb1/mb4; spectacle wide mb2; selfie-distance close-up with the prize mb3) | First cut at 1.30–2.13 s |
| **Rule / stake** | A wider frame so the prop and the people are in one shot, the stake typed onto the prop; a slow digital push-in while it holds | mb1 group wide 12.6–17.1 s, push ~10% over 23 f (f440–463) |
| **The other person speaks or reacts** | Cut to them (close-up / medium), host absent | 0.6–1.3 s per reaction (mb3), cut on the first syllable of their line |
| **The thing itself** (a phone screen, the cash, a question, the call) | **Full-frame insert**, host absent | mb1 phone inserts 0.8–1.0 s, FaceTime 33 f (1.1 s); mb3 TV cutaways ~1.2 s; mb2 pile inserts 0.5 s each; mb4 inserts 0.5–1.5 s |
| **Verdict** | On the insert or the close-up where the result is visible; grade/flash on that frame | 0–3 f after the cut |
| **Back to the host** | Two-shot or medium on the next sentence start | Hard cut |
| **Payoff** | Medium or two-shot with the prize in frame; a push to the winner | mb3 push ~1.5× over 16 f, ease-out |
| **Ending** | Full frame, the person who speaks last | Hard stop |

- **Every distance change is a hard cut** (or, rarely, a slow push inside a held shot). The only glide is this edition's stake board (`L-9`, T-14/T-15): an eased shrink into a wide card and back, 10–12 f each way.
- **Inserts are short:** ≤ 1.5 s (longest measured: mb4's cash CU 1.5 s, mb2's grab shot 2.7 s with the clock running over it). Back to a person on the next line.
- **The two-shot flips sides** between subjects so consecutive people don't stand in the same place (mb4: host left with student 1, host right with student 2).
- **Framing leaves room for what is coming:** when names or logos are due, the host stands in the right third (face x 820–930) and the left two-thirds stays empty at torso height for them (mb2 1.5–4.0 s).

### 3.1 `HOOK` (0–3 s)
- Frame 0 is the person **mid-word, mid-action**: walking towards the lens, standing by the prize, holding it. Never a still establishing shot, never a title card.
- **Fix (M12):** the first caption is already on screen on frame 0 (mb4 had "I'M ABOUT TO" on f0; mb1, mb2 and mb3 waited until f1 and mb1/mb2 opened on a small full-body host). For a talking head, frame 0 is the base framing with the face filling it, never a wide where the face is tiny.
- **Visual events in the first 3 s:** measured 5 (mb1), 4 (mb2), 3 (mb3), 4 (mb4), plus 3–8 caption swaps. House minimum: **6 events + caption swaps by 3 s** (§6.0).
- The hook's stake is visible early: the cash in frame from f0 (mb2, mb3), the channel pill at f23 (mb1), the green prop glow at f49 (mb3).

### 3.2 `FMT-STREET`: street check (mb1, mb4)
One question asked to strangers; the first fails, a second nearly passes, the one who passes gets the stakes. Setups A–D + inserts (§12.1). Graphics: money typed on props, the rule as a countdown, verdict grades or icons, a name pill, a 3D payoff plate, the CTA arrow. Captions speaker-coloured on chests. Shape in §7.0.

### 3.3 `FMT-EPISODE`: heist mini-episode (mb2)
Acts in costumes: the vault (locked-off wide, host face x ~820), the stakeout (telephoto + REC HUD), the crew selfie, the car-park gag, the vault payoff with pile inserts. A pinned countdown (top centre, y 200–380) runs from "go!" to the end, hidden during a talk beat (42.4–44.5 s). Single comic-word captions in acts 1–2, **dropped once the clock is the main text** (35.6 s on). The sound goes silent (no new SFX) before each twist and a boom lands on the reveal.

### 3.4 `FMT-GAMESHOW`: game show (mb3)
The questions live on a **real screen in the room**, filmed (host beside it: face x 300–380; screen x 518–929, y 713–1015). The editor adds only green money labels: **one running total on the winner** (+$3k per right answer, a final count-up). 2–4 reaction shots of 0.6–1.3 s after each host line (~40% of runtime). No captions (fix for a talking head: always captioned, §5).

### 3.5 Layouts
Every layout is full-frame footage. The list is of *framings*, not boxes.
| ID | Layout | What's where (1080×1920) | Share seen | The face while something is shown |
|---|---|---|---|---|
| **L-1** | Walking / two-shot wide | Host head top 280–480, eye 400–540; subject on the other side; captions on chests (baseline y 868–960) | mb1 ~45%, mb4 ~40% | In the same frame, beside the caption; the stake graphic goes on the prop or the chest below the faces |
| **L-2** | Subject close-up | Eye y 250–550; caption on the chest (y 1006–1080 for a money word) | ~20% | The subject's face fills the frame; host absent |
| **L-3** | Stake wide (people + props) | Heads top 430–650; money typed on props at y 778–1237 | mb1 12.6–17.1 s | Small, above the graphics; slow push-in while the stake holds |
| **L-4** | Spectacle wide, host to one side | Host face x 820–930, eye 530–640; logos x 100–980, y 875–1045 in the empty side | mb2 0–4 s | Right third, logos below and beside him at torso height, never over the face |
| **L-5** | Full-frame insert | The phone, screen recording, cash, question screen, prize pile | 3–15% | **Absent** (≤ 1.5 s) |
| **L-6** | Pinned-HUD frame | Clock top centre y 200–380; or a REC HUD at the edges | mb2 35.6–48.7 s, 5.7–17.4 s | Below the clock (head top ~100 px under it in the wides) |
| **L-7** | Host beside a real screen | Host face x 300–380; screen x 518–929, y 713–1015 | mb3 | Same frame, the screen to his right; no edited divide |
| **L-8** | Verdict-graded frame | B&W snap (≤ 1.5 s) or green flash over any of the above | mb4 | Unchanged; the grade covers the whole frame, face included |
| **L-9** | **Stake board** (ADAPTATION, this edition) | The speaker in a wide rounded card (radius 36, **≥ 940 px wide**, x 70–1010, y ≈ 230–1000, cropped from the footage to head and shoulders, whole face, a soft dark shadow) on a designed deep backdrop (a near-black gradient with a soft neon glow in the stake colour and a faint grid; **never the creator's own footage blurred**: Naman, 13 Oct); the big number owns **y ≈ 1040–1480** (≥ 860 px wide, ≥ 220 px tall); the caption rides just under the chin inside the card's lower edge | `FMT-SOLO` only, 1–3 per 60 s, 1.5–3.5 s each | **In the card, whole**, still talking; the number below it is the hero |

**Divided boxes: none in any reel.** The stake board is the one designed card, used only for a talking head and only when a number deserves the whole screen.

### 3.6 Framing the face (every layout)
Measure `FACE` on sampled frames of each shot: the box from the top of the hair to the bottom of the chin, plus the face's x centre.
- **Margins:** at every scale, the hair top stays ≥ 40 px below the frame's top edge (≥ 400 px when the pinned clock is up, so the clock sits above the head as in mb2), the chin stays inside the frame with ≥ 40 px to spare, and the face's left and right edges stay ≥ 40 px inside.
- **Punch-in cap:** the largest scale that keeps those margins on every frame of the shot (handheld drift included). If that is below 1.20, skip the punch-in for that shot and use the slow push instead.
- **The too-tight fix:** when the footage at scale 1.00 already breaks the margins (a tight handheld selfie close-up where the hair and chin leave the frame; mb4's student at 10.0 s, mb2's crew selfies), **keep it full screen** (hair may touch the top edge, eyes to chin always in; cap punches; move the stakes and captions clear of the face), or, for a big number, put him in the stake board (`L-9`) card that the footage fills. **Never scale the footage down over a blurred copy of itself** (Naman, 13 Oct). Never a narrow pillar.
- **Captions may cross the face.** That is fine. Graphics may not (N2).

### 3.7 ADAPTATION (not observed): one person talking to their own camera (`FMT-SOLO`)
**This section is an adaptation, clearly marked.** The references are crew-shot with strangers; the plugin's users film one talking-head take (a selfie or a tripod). Everything here uses only devices observed in mb1–mb4, mapped to one person.

**What carries over unchanged:** the stakes grammar (every number a neon-green picture within ~0.2 s of the word, count-ups and countdowns, a pinned clock that skips, a B&W snap + red X on a fail, a green flash + ding on a win, a running label that stays on the thing it belongs to), the speaker-coloured comic captions, the 1.0–1.3 s shot rhythm, sub-bass only on stakes, a mid-action intent-line hook and a hard-stop ending.

**What the stake is:** in the references it is money. In `FMT-SOLO` it is **whatever number or outcome the user's script carries**: a price, a saving, a score, a deadline, a count of attempts, a before and after, a yes/no result. It is typed in neon green on the word, exactly as mb1 types `$10,000`.

**The movement map (the speaker is never boxed and never stuck in one framing):**
| Beat | Framing | Timing |
|---|---|---|
| Frame 0 / hook | **Base**: full frame, face filling it as shot (scale 1.00, or the too-tight fix §3.6) | First caption on f0; the hook's stake picture by f6 if the first line has one |
| Every 2nd–3rd jump cut | **Punch-in close-up** at 1.20–1.35× (capped by the face, §3.6), alternating with base | Hard, on the cut (0 f). Shots 1.0–1.3 s |
| A stake lands and holds | Base or punch-in, plus a **slow push** 1.00 → 1.08–1.10 over 21–23 f while the number holds | mb1 f440–463, mb4 f59–80 |
| The biggest numbers (the rule, the total, the over-delivery) | **Stake board** (`L-9`, EV-3): eased into the wide card (T-14, 10–12 f), the number slams below, eased back to full frame (T-15) on the next sentence | 1–3 per 60 s, 1.5–3.5 s each (this edition) |
| "Here's the thing" (a screen, a product, a document, a photo the script names) | **Full-frame insert** of the real thing, speaker absent | ≤ 1.5 s, then back to base on the next sentence start |
| The result / the winner / the payoff | **Push to the face** 1.00 → up to the face cap (mb3 went 1.5×) over 16 f, ease-out, with the running label riding along | Lands on the payoff word |
| Names or logos coming | **Side framing**: the face in the right third, the empty side for the names (mb2). If the footage is centred, scale 1.15–1.25 and shift right only as far as that scale allows, so no edge is ever exposed (never a blurred fill) (§3.6) | Hard cut into it, hard cut out |
| End | Base or punch-in on the last line | Hard stop ≤ 6 f |

- **Reaction shots become the speaker's own close-ups.** mb3 follows every host line with 2–4 reaction shots; a solo reel has no audience, so the reaction is a 0.6–1.3 s punch-in on the speaker's own face as they land the line (a laugh, a look, a "wait").
- **Other voices keep their colours.** When the speaker quotes someone, that quote is yellow (the guest colour); a voice from a phone, a clip or a screen is magenta (mb1's off-screen voice); money and stake words are green; everything else is white.
- **The clock the script has decides the borrowed devices:** a rule tried several times → verdict grades per attempt (street); a timed task → the pinned skipping clock (episode); steps adding to a total → the running label and the final count-up (game show).
- **The CTA slot is the user's own CTA** (M15), with mb1's red down arrow if it points at something real on screen.
- **Never:** a PiP bubble, a split, a cut-out, a card other than the stake board, or a talking head left at one framing for more than ~3 cuts.
- **The persistent trackers** (this edition): the pot (EV-2) sits on the speaker's open side at chest height, ≈ 300–420 px wide, and the tries row (EV-4) sits under the clock or above the head; both are small, steady and never over the face.

### 3.8 Safe zones (Shorts / Reels)
- Key text inside **x 60–1020, y 110–1500**. The bottom ≈ 380 px and the right ≈ 110 px are covered by the platform's UI (mb1's CTA arrow at y 1500–1620 points *into* that zone on purpose, at the real button).
- Captions: in `FMT-SOLO` **just under the chin** (the caption's top ≈ 40–80 px below `FACE(n)` chin) so the eye meets it right after the face; in crew wides on the chest under the faces (observed baseline 868–960 in two-shots and walks, 1006–1080 for a close-up money word, 1110–1190 in mb2).
- Stake graphics: on the prop or chest, y **778–1250**; the clock at **y 200–380**; the off-screen shout in the sky area **y 450–600**.

---

## §4 Colour tokens

### 4.1 Core tokens
| Token | Hex | Use (observed in) |
|---|---|---|
| `host` | `#FFFFFF` | Host captions, clock digits, white pill (mb1, mb2, mb4) |
| `ink` | `#000000` | Caption stroke (8–14 px), clock stroke and shadow (all) |
| `guest` | `#FCFD05` (range `#EDFE06`–`#FAFE06`, mb1 `#F0FF1A`) | The contestant's / guest's words; the off-screen shout (mb1, mb2, mb4) |
| `offVoice` | `#FE66FA` | A voice from a phone or off screen, bigger and popped (mb1) |
| `moneyWord` | `#02FD02` (mb4 `#67FB0A`) | A money or stake word inside a caption (mb2, mb4) |
| `moneyNeon` | `#85FD59` fill, darker green bevel, same-hue outer glow | Big money numbers typed on props (mb1) |
| `moneyLabel` | `#0CE959` (range `#01FF4F`–`#13F344`) + dark-green shadow + glow | Running totals, tick-ups, count-ups, per-item pops (mb3) |
| `plateGreen` | text `#AFF483` with glow on a green glass slab | The 3D money plate on the payoff prop (mb1) |
| `zero` | `#FC0000` (X ≈ `#FF1A1A`) | `$0`, the red X, the red +, the CTA arrow (mb1) |
| `flash` | lime green, full-frame overlay | The pass verdict flash (mb4) |
| `mono` | 100% desaturation, contrast kept, **≤ 1.5 s** | The fail verdict only (mb4) |
| `ctaGlow` | warm yellow vignette rising from the bottom | Under the CTA arrow (mb1) |

### 4.2 The countdown's colour sweep
A drain to zero sweeps **green → yellow → orange → red** as it counts (mb1 f578–601): `#85FD59` at the start, through yellow and orange, landing **`#FC0000` on `$0`**. A count-up stays green the whole way (mb3).

### 4.3 Meaning of colour
- **Green** = money, the prize, gain, a pass. Never decoration.
- **Red** = zero, fail, loss, "no", and the CTA arrow.
- **White** = the host speaking. **Yellow** = the guest / the other person / a shout. **Magenta** = a voice from a phone or off screen.
- **Black-and-white frame** = "this one failed" (a beat, ≤ 1.5 s). **Green flash** = "this one passed".
- **Brand colours** appear only inside a real logo the script names (mb2's logos kept their own colours).

**Rules:** one stake colour per graphic; at most one green graphic and one caption on screen together; red only on a zero, a fail or the CTA arrow.

### 4.4 Footage look (don't fight it)
Natural light, lightly warm daylight (mb1), golden-hour orange key with a deep blue sky (mb4), bright cool fluorescent classroom (mb3), cool grey vault and saturated store aisles (mb2). Bright, punchy, slightly boosted saturation, no LUT, no grain, no vignette. Keep the footage as shot or a touch richer (contrast +5–10%, saturation up to +10%, true blacks); match exposure between takes. **Never pale:** no faded, milky or desaturated look; only the fail verdict goes B&W, for ≤ 1.5 s. The stake colours are neon so they read over any of these.

---

## §5 Type tokens and caption systems

### 5.1 Font map
Observed faces are best guesses from the renders; the renderer fonts are bundled with the plugin.
| Role | Observed (guess) | Renderer font (bundled) | Weight / style |
|---|---|---|---|
| Comic captions (`CAP-COMIC`, `CAP-SHOUT`) | Komika Axis / Bangers / Badaboom, slightly italic, ALL CAPS | **Bangers** (`Bangers-Regular.ttf`); fallback **Lilita One** | 400 (display), ALL CAPS |
| One-word captions (`CAP-WORD`) | Montserrat SemiBold / Proxima Nova Semibold, lowercase | **Montserrat** (`Montserrat-VF.ttf`) | 700, lowercase as spoken |
| Off-screen voice (`CAP-OFF`) | Same family as the reel's caption, bigger | the reel's caption font | as the caption, ×1.5 size |
| Neon money numbers, plates, labels | Heavy rounded-square display, bevel + glow | **Unbounded** (`Unbounded-VF.ttf`); fallback **Lilita One** | 800–900 |
| Clock digits | White heavy geometric sans, thick black stroke | **Poppins** ExtraBold (`Poppins-ExtraBold.ttf`) | 800, tabular figures |
| Pill text (name / channel badge) | Black geometric sans ~50 px | **Poppins** SemiBold | 600 |
| Camcorder HUD | Thin white UI sans | **Space Grotesk** (`SpaceGrotesk-VF.ttf`) | 400 |
| Wordmarks (only the user's own, §6.7) | Heavy condensed sans | **Barlow Condensed** Bold | 700, ALL CAPS |

### 5.2 `CAP-COMIC` (the house caption: mb2, mb4)
| Property | Spec |
|---|---|
| Font | Bangers, ALL CAPS, slightly italic as drawn. Keeps "...", "?", "!", "??", "!!", a cut-off "-" ("THAT'S FUNNY-"), and ASCII emoticons ":)" ":D" for a wink (mb2) |
| Size | **110–130 px** font (cap ≈ 80–95 px). Observed 95–130 px font, cap 70–100 px. Floor **110 px font** (M10). A long phrase never shrinks below the floor; split it instead |
| Colour | By speaker (§4.1): `host` white, `guest` yellow, `moneyWord` green for the money word; one colour per caption, except a green money word inside a white or yellow phrase |
| Stroke | Black `#000000` 8–10 px + a soft dark drop shadow (~6 px blur, 40%) |
| Position | Centred x 540; baseline **y ≈ 868** (two-shot), **920** (walk), **1006–1080** (close-up money word), **1110–1190** (mb2). In `FMT-SOLO`, **just under the chin**: the caption's top ≈ 40–80 px below `FACE(n)` chin, moving with the punch-ins (never below y 1500). It may cross the face or chest (fine) but never a stake graphic; in `L-9` it rides inside the card's lower edge |
| Chunking | **Phrase mode** (mb4, conversational): 2–4 words, hard swap on the phrase onset. **Word mode** (mb2, high energy, hooks): 1 word, sometimes 2 stacked and offset for a dramatic line ("THAT... / WALKING", "AWAY...") |
| Animation | Word mode: **pop** 40% → 90% → 100% over 3 f, no bounce, then hard swaps. Phrase mode: no pop; already at full size on its first frame |
| Highlight | The money word is 1.2–1.4× bigger and green (`MONEY` 569×142 px in mb2) |
| Exit | Hard cut, or carried into a whip blur |
| Suppression | A word leaves the caption only while a big stake graphic (an X, a countdown, a money plate) carries **that same word**; the rest of the line stays captioned. Under a pinned clock the caption stays on (mb2 dropped it; we don't: every word is seen) |

### 5.3 `CAP-WORD` (mb1's alternative)
| Property | Spec |
|---|---|
| Font | Montserrat 700, **lowercase as spoken**, keeps "?" and "!" |
| Size | **Fix:** mb1 ran 70 px (≈ 6.5% of the width: legible only because it is one word). House: **≥ 110 px** font with a 10 px black stroke |
| Colour | White, or `guest` yellow for the contestant's words ("mom", "my", "got") |
| Position | Centred x 540, baseline y 960 (the frame's centre line, chest height in a wide); in `FMT-SOLO` just under the chin |
| Animation | Hard swap on each word's onset (no scale-in); a 2–3 f blur dissolve only when a graphic replaces it |
| Use | A reel where the speaker is calm and fast and the stake graphics should dominate. Pick `CAP-COMIC` or `CAP-WORD` per reel, never both |

### 5.4 `CAP-OFF` (an off-screen voice: mb1)
- `offVoice` magenta `#FE66FA`, black stroke, **~105 px** (×1.5 the reel's caption), placed near the source (the phone) at y ~760–860, centred x ~550.
- The first word **pops 0 → 40 → 85 → 100% over 3 f** (mb1 f900–902); later words swap with no pop.
- Used only while that voice speaks (mb1 29.9–31.7 s). In `FMT-SOLO`: a voice from a clip, a call or a screen recording the speaker plays.

### 5.5 `CAP-SHOUT` (the off-screen exclamation: mb4, mb2)
- An oversized yellow exclamation: `guest` `#FAFE06`, **cap ≥ 150 px** (≈ 2× the caption; mb4 ~135 px), **arched and rotated −8°**, in the sky area upper-left (x ~100–700, y ~450–600); in `FMT-SOLO` above the head, never over the face.
- **Built word by word**, 7 f apart ("HOLY" f59, "GOD!" appended f66), during a slow push-in (~8% over f59–80).
- **Fix:** mb2's small yellow shout ("NOLAN!!" ~70 px at x~280, y~1000) is too small; every shout uses this spec.
- One per reel at most; for a gasp or a cry that isn't the main speaker's sentence (in `FMT-SOLO`: the speaker's own aside or reaction word).

### 5.6 Stake type
- **Neon money number** (`moneyNeon`): Unbounded 900, **≥ 90 px tall** on a prop in a crew wide (mb1 352×90 at x 478–829, y 778–867); in `FMT-SOLO` **≥ 140 px tall and ≥ 560 px wide** on the speaker's open side; **≥ 220 px tall, ≥ 860 px wide** on the stake board or as a plate. Fill `#85FD59`, darker green bevel, same-hue outer glow ~20 px.
- **Running label / tick-up** (`moneyLabel`): Unbounded 800, **≥ 120 px tall** (mb3's 114 px `+$3k`, 133 px `$250`). **Fix:** the same label at ~60 px in a wide (mb3 12.2 s) is too small; scale it to the floor before the push-in, not after.
- **Countdown** (mb1 ~110 px tall across x 250–860): here **≥ 160 px tall across x ≈ 120–960**, y 880–1060 (or the board's number band); colour sweep §4.2.
- **The pot** (EV-2): Unbounded 800 ≥ 72 px digits in a dark glass chip (≈ 300–420 px wide) with a green rim; the label word ("POT", or the script's unit) ≥ 40 px.
- **Format:** `$` before the number, comma thousands (`$10,000`, `+$9,000`), `+` for a gain, `k` short form allowed in a tick-up (`$1k → $2k → +$3k`). In `FMT-SOLO`, use the unit the script uses (`₹`, `%`, `days`, `kg`, `/10`) in the same treatment.

### 5.7 Clock type (mb2)
- White Poppins 800 digits **≥ 170 px tall** (mb2 ~150 px), black stroke ~14 px + a dark outer glow; box x 280–800, y 200–390, centred x 540. Format `0:59`.
- Arrives with a green glow that cross-fades to the black stroke over 6 f (f1081–1087).

### 5.8 Pills, badges, HUD, small text
- **Name pill** (mb1): white full-radius pill (mb1 ~550×130; here **≥ 700×150**), avatar left, black Poppins 600 text; **replaces the caption** on the spoken name. **Fix:** text ~50 px → **≥ 64 px**. In `FMT-SOLO`: a name the script says, or the user's own handle on the CTA.
- **Status badge** (mb4): white circle (mb4 ~120 px; here **≥ 200 px**), avatar inside, a status dot flipping bell → **green check** (f370–373), above the thing it confirms (mb4 x 380–500, y 720–860).
- **Camcorder HUD** (mb2): "REC", a running timecode, "HDV", "AWB", "Tv 60", a level meter, thin white type at the edges; decoration ≥ 40 px.
- **The tries row** (EV-4): 3–5 dots (≥ 44 px each, 24 px apart) with "TRIES" ≥ 40 px, empty white rings that fill red or green on each verdict.
- No source tags, title cards or watermarks (none in any reel).

---

## §6 Hook system

### 6.0 The 10× hook (this edition)
- **Frame 0:** the speaker mid-word, mid-gesture, whole face, the first caption already on at 110+ px just under the chin. Never a title card, never black.
- **By ~1 s:** the stake is on screen: the first number slammed with weight (EV-1), or the **locked prize** (EV-7: `$???` or `[ ? ]` in green glass) if the number is the payoff.
- **By 3 s: ≥ 6 visual events** (measured 3–5 in the references): caption swaps, the stake slam, a punch-in, the pot appearing, a verdict or a shout, plus their sounds.
- **The loop on screen:** the locked prize, the empty tries row or the pot at `0` tells the viewer what they are waiting for; it pays off in the last seconds.
- **Sound:** dry voice with a sub on the first stake; the hook's fail (if any) silent.

### 6.1 What the hook must do in about 3 seconds
1. **Start mid-action:** moving and talking on frame 0; the prize in frame or by ~1.6 s (mb2 f0, mb1 pill f23, mb3 glow f49).
2. **One line of intent or question:** "I'm about to…", "Are you…?", "This is unlimited money."
3. **Open the loop** (what does a yes get you? who gets it?), answered 2.7–12.6 s later (mb4, mb1).

### 6.2 Hook formulas (`HF`)
| ID | Formula | Spoken pattern | Seen in |
|---|---|---|---|
| HF-1 | **Direct question + instant fail** | "Are you subscribed to …?" → "I knew it. Never mind then." (red X on the cut) | mb1 |
| HF-2 | **Spectacle claim + who-gets-it rule** | "This is unlimited money. And the next person to [do X], we're going to [give it to]." | mb2 |
| HF-3 | **Intent line + visible prize** | "I'm about to [do X] for [who] with [a ton of money]." | mb3 |
| HF-4 | **Withheld question** | "I'm about to ask people a very important question…" → the question 2.7 s later | mb4 |

Add-ons that stack:
- **A shout in the hook** (`CAP-SHOUT`): "HOLY GOD!" over a wide (mb4 1.97 s).
- **The rule taught by trying it** right after the hook (§7.1): the first try fails on screen.

In `FMT-SOLO`, HF-3 and HF-4 carry directly ("I'm about to [try / test / spend / give] [the stake]…"); HF-2 becomes the stake claim + the rule ("This is [the number]. If [condition], [outcome]."); HF-1 becomes a question to the viewer with an instant verdict on the cut.

Write **3 variants** per video, with different formulas, and recommend one.

### 6.3 Hook visuals (`H`)
| ID | Hook visual | Recipe |
|---|---|---|
| **H-1** | **Walking intent** | Frame 0: the speaker walking toward the lens, mid-word, the camera backing up; caption on f0 (mb4). First cut at ~1.3 s |
| **H-2** | **Prize in frame** | Frame 0: the speaker beside or holding the prize (cash bucket, cash spill); the prize glows green on the money word (mb3 f49–53, 4 f fade-in) |
| **H-3** | **Instant verdict** | The question in a wide, then a hard cut to the answerer's close-up with the **red X slamming in on the cut frame** (mb1 f44) |
| **H-4** | **Name chain** | The speaker in the right third; each spoken name pops as a logo or pill in the empty side, back to back (mb2 f70, f104; mb1 pill f23) |
| **H-5** | **Shout + push** | A wide with a slow push-in; an arched `CAP-SHOUT` built word by word in the sky (mb4 f59–80) |
| **H-6** | **Stake on the word** | The first number typed in neon onto the thing it describes within 6 f of the word (mb1 type-on recipe) |

### 6.4 Hook timing template (0–3 s)
| t | Beat | Rule |
|---|---|---|
| f0 | Open | Speaker mid-word, full frame, **caption already on** (M12) |
| f1–f30 | The line | Caption swaps on each word or phrase; the prize or a name badge appears (pill at f23, mb1) |
| 1.3–2.2 s | First cut | To the other person, the thing, or a punch-in (mb4 1.30, mb1 1.47, mb2 1.53, mb3 2.13 s) |
| 1.5–3 s | First stake or verdict | Red X / prop glow / logo / shout lands with its sound |
| by 3 s | **≥ 6 visual events + caption swaps** (§6.0) | Measured 3–5 |

### 6.5 Hook text rules
- **The caption is the only hook text** (no title card, no headline), plus the stake picture (all 4). Verbatim, in the reel's caption system; one green word at most.

### 6.6 Hook sound
- Dry voice and room, no music (mb1, mb3, mb4; mb2 ran a bed under the vault, we don't). mb2 **goes silent at 4.0 s** before "kidnap", then a whip.
- A sub boom on the first stake or reaction (mb3 0.1 and 3.7 s; mb4 1.9 s; mb1 7.7 s), with the slam's small pieces (a swish into the number, a glint) per §11. A fail in the hook is **silent** (mb4).

### 6.7 Endings (`E`) (pick one per reel)
| ID | Ending | Recipe | Seen in |
|---|---|---|---|
| **E-1** | **Hard stop on the payoff** | The last line over the prize ("I feel like Santa."), cut mid-moment, no end card; loops back to the opening's claim | mb2 |
| **E-2** | **Kicker, then thank-you, hard stop** | After the payoff, one deadpan joke line ("You literally could have lied and said $100,000…"), the laugh, the hug, cut | mb4 |
| **E-3** | **The user's own CTA with the red arrow** | The speaker points down; a red down arrow (x 700–780, y 1500–1620) fades and drops in over 4 f, then bobs; a warm yellow glow rises from the bottom (from f1136 in mb1); hard stop ≤ 6 f after the last word. **The ask is the user's own** (their keyword, link or follow), never a third party's channel | mb1 (fix: the slot carried a channel-subscribe gag) |
| **E-4** | **Short outro wide** | The speaker walks in with the prize, one sign-off line, hard stop. **Fix:** mb3 held 5.98 s of a static wide with a sponsor thank-you; ours ≤ 2.6 s and the thank-you is the user's own line | mb3 |

**Never:** a sponsor read in the ending or anywhere (M15), a fade, an end card, black tail.

---

## §7 Structure devices

### 7.0 The shape of each format
| Format | Shape (beats in order) |
|---|---|
| `FMT-STREET` (mb1) | Question → **fail** → near pass → **pass** → stake (boom) → **rule as a countdown** → suspense → **reveal** insert (boom) → reactions → **payoff** plate → CTA (full plan in §14.1) |
| `FMT-STREET` (mb4) | Withheld question → shout → the question → **fail** (B&W) → next stranger → **pass** (green flash + badge + ding) → stake named by the guest (`$14,000`, green) → crew brings the prize → **silent beat** (0.74 s) → over-delivery ("I just have $20,000") → reveal of the cash → **kicker** → thank-you, hug, stop |
| `FMT-EPISODE` (mb2) | Claim + rule (logos on names) → whip → act 1 stakeout (HUD, **near-miss**) → act 2 approach (guest yellow) → act 3 the gag (car park) → suspense (silence) → **reveal** (bag off; 3-angle pile montage at 15 f, booms) → rules ("60 seconds, go!") → **pinned clock** with jumps → aside (clock hidden) → final 3-2-1 → payoff line, stop |
| `FMT-GAMESHOW` (mb3) | Intent + prize glow → walk in → room reaction (boom) → rules + **running total** on the winner (`$1k → $2k → +$3k`, push-in) → Q1 (boom, screen) → answer → `+$3,000` lands with the cash → Q2 → `+$3,000` → "last one is the hardest" (boom) → Q3 → **count-up to the total** (`+$9,000`) → twist (everyone wins) → per-item pops → outro |

### 7.1 Structure devices (`SD`): pick the ones the script needs
| ID | Device | Recipe | Seen in |
|---|---|---|---|
| **SD-1** | **The rule taught by trying** | Three tries in ~12 s (fail / near / pass), each with its verdict, before the stakes land | mb1 (mb4: fail, pass) |
| **SD-2** | **Near-miss before success** | Someone touches the thing and walks away ("THAT… / WALKING AWAY…") before the winner | mb2 |
| **SD-3** | **The rule as a countdown** | Max amount, 6 f read, 14 f drain green → red with ticks, land on the word with a boom (P-03) | mb1 |
| **SD-4** | **Running stake on the beneficiary** | One tracked label, updated per success, final count-up (P-05, P-06) | mb3 |
| **SD-5** | **The skipping clock** | From "go!", ticks in-shot, jumps on cuts (0:58 → 0:49 → 0:45 → 0:26 → 0:03), hidden in a talk beat, final count in sync (P-09) | mb2 |
| **SD-6** | **Name the price, then beat it** | The expected number in green (`FMT-SOLO`: the usual price, the target); the payoff over-delivers | mb4 ($14,000 → $20,000) |
| **SD-7** | **Verdict grading** | Fail = B&W to the cut (≤ 1.5 s); pass = green flash + badge + ding (P-07, P-08) | mb4 (mb1: red X / red +) |
| **SD-8** | **The silent beat** | 0.5–0.8 s full mute before a deadpan line | mb4 |
| **SD-9** | **Genre costume per act** | A REC HUD for a stakeout, a game-show clock for a task | mb2 |
| **SD-10** | **Reaction ratio** | 2–4 reaction shots of 0.6–1.3 s after a key line (`FMT-SOLO`: the speaker's own punch-in reaction) | mb3 |
| **SD-11** | **Boom per question** | A sub hit on every question or task reveal | mb3 |
| **SD-12** | **The pot** (this edition) | One running total grows on screen through the whole reel, every stake adding to it, fanning out at the payoff (EV-2) | mb3's running label, extended |
| **SD-13** | **Tries left** (this edition) | A tries row fills red or green on each verdict, so the viewer always knows how many chances remain (EV-4) | mb1's three tries, made visible |
| **SD-14** | **The locked prize** (this edition) | The payoff shown locked in the hook (`$???`), unlocked with the over-delivery at the end (EV-7, EV-6) | mb1's "what does a yes get you?", made visible |

### 7.2 The try / question ritual (identical every time)
1. **Set it up** in one line on a person (wide or two-shot), caption on.
2. **Cut to the thing** where the result is visible (the phone, the screen, the answer), full frame, ≤ 1.5 s.
3. **Verdict on that frame** (0–3 f after the cut): B&W (≤ 1.5 s) or red X for a fail (silent), green flash + badge + ding for a pass, `+amount` on the winner for a right answer (boom); the tries row fills (EV-4) and a win adds to the pot (EV-2).
4. **Reaction**: 1–4 short shots (0.6–1.3 s) of whoever the verdict touched.
5. **Back to the host** on the next sentence start.
Never vary the verdict device inside one reel: a fail always looks the same, a pass always looks the same.

### 7.3 Open loops (retention)
- **What does a yes get you?** (mb1, paid at 12.6 s). **What does that word mean?** ("kidnap", mb2). **The withheld question** (mb4, 2.7 s).
- **Will it happen?** Real-time suspense cut to ~4 s with the ringtone kept, answered by a hard cut (mb1's strongest cut, score 0.72).
- **"The last one is the hardest"** before the final question, with a boom (mb3).
- Every loop and every hook stake is paid off on screen.

---

## §8 Graphics system

### 8.0 The 10× layer (what the best motion designer adds to every stake)
**Animation principles, applied to this style:**
| Principle | How it shows up here |
|---|---|
| **Anticipation** | 2–3 f before a number lands, a green glow blooms where it will sit; before a countdown, the number holds 6 f to be read; before the payoff, 0.5–0.8 s of silence |
| **Squash & stretch / weight** | Every stake slams: 1.18 → 0.96 → 1.0 over 6 f; the red X lands with a 2-frame footage squash (scale 1.03 → 1.0); the pot bumps 1.12 → 1.0 when it grows |
| **Follow-through & overlap** | Digits land in an overlapping wave (each starts 1 f after the last); the unit (`$`, `₹`, `%`) settles 2 f after the number; green sparks fall 6–10 f after the slam; the badge's check flips after the flash |
| **Arcs** | The number flies from the stake to the pot on an arc (EV-2); the dock card travels on a gentle arc (T-14) |
| **Slow in / slow out** | Ease-out on slams, pushes, the dock and its return; linear only on countdown drains and ticks |
| **Staging** | One hero per frame: while a stake holds, everything else dims a touch (captions hide only that word); on the board the number owns the lower half |
| **Secondary action** | The slow push under every held stake; the pot's soft glow pulse; the tries row's empty dots breathing; handheld drift |
| **Timing** | Cuts every 1.0–1.6 s; stakes hold 1.5–2.5 s; verdicts 0–3 f after the reveal; the B&W fail ≤ 1.5 s |
| **Exaggeration** | One moment per reel goes biggest: the over-delivery flip or the final count-up on the stake board, with the heaviest boom |
| **Appeal** | Neon green on bright footage, heavy black strokes, clean glass chips; it looks like the biggest channel's best editor made it |

**Design hierarchy (every frame):** 1. the stake number (or the verdict) · 2. the speaker's face · 3. the caption · 4. the pot and the tries row · 5. everything else.

**Effects toolkit:** neon glow and bevel on stake numbers; a **glint sweep** across a number 8–12 f after it lands; green spark particles on a slam (12–20 sparks, 6–10 f, gravity); motion blur on slams, whips and the clock; the lime pass flash; the B&W snap (≤ 1.5 s); a soft dark vignette **only behind the stake board's number band**; a warm CTA glow. Never: glitches, light leaks, RGB splits, film burns, dissolves, shake on the whole frame.

### 8.1 Graphic families (`G`)
| ID | Family | Look | Motion signature | Seen in |
|---|---|---|---|---|
| **G-1** | **Neon stake number** | `moneyNeon` digits typed onto a prop, bevel + glow | Type-on 1 character per frame, each rising out of a glowing slot; tracked to the prop | mb1 |
| **G-2** | **Counter** | A big number that drains (green → red) or climbs (green) | Countdown 14 f linear after a 6 f read hold; count-up 15 f ease-out | mb1, mb3 |
| **G-3** | **Running label** | `moneyLabel` `+$amount` tracked on the winner | Ticks one value per 3 f; pops 2–3 f per new item | mb3 |
| **G-4** | **3D stake plate** | A green glass slab with neon text, growing out of the prop | Grow 7 f ease-out, glow rising; stays stuck to the prop | mb1 |
| **G-5** | **Verdict icon** | Red X, red +, a green check in a status badge | Slam from 2.5× blurred to 1× in 5 f; pulse; state flip 3 f | mb1, mb4 |
| **G-6** | **Verdict grade** | Full-frame B&W (fail), full-frame green flash (pass) | B&W hard on one frame; flash full strength then a 7 f decay | mb4 |
| **G-7** | **Name pill / logo pop** | A white pill with an avatar; a real logo on a soft white glow | Pill blur-whips in 4–5 f; logo pops 30 → 110 → 100% in 5 f | mb1, mb2 |
| **G-8** | **Prop glow** | The real prize tinted neon green with a glow | 4 f fade-in on the money word, held to the cut | mb3 |
| **G-9** | **Pinned clock** | White `0:59` digits top centre | Blur-zoom arrival 5 f; ticks; jumps on cuts | mb2 |
| **G-10** | **Genre HUD** | Camcorder REC chrome at the frame edges | On and off with its shots | mb2 |
| **G-11** | **Full-frame insert** | The real thing: a phone screen, a screen recording, a question on a screen, the prize pile | Hard cut in and out; ≤ 1.5 s | mb1, mb2, mb3, mb4 |
| **G-12** | **CTA arrow** | Red down arrow, white edge, warm glow from below | 4 f fade + 20–30 px drop, then a bob | mb1 |
| **G-13** | **Shout** | `CAP-SHOUT` arched yellow exclamation | Word-append 7 f apart during a push | mb4 |
| **G-14** | **The pot** (this edition) | A dark glass chip with a green rim and the running total | Bumps on each add; fans out at the payoff | mb3, extended |
| **G-15** | **Tries row** (this edition) | 3–5 dots that fill red or green | Each dot fills with a 4 f pop on its verdict | mb1, made visible |
| **G-16** | **Stake board** (this edition) | The speaker in a wide card above the hero number | Eased dock and return, 10–12 f | `FMT-SOLO` adaptation |

**Family rules:**
- **One stake graphic at a time** (N5). A new one replaces the old on a cut or after its hold.
- **Graphics sit on the footage**, on props, chests, desks or the empty side; never in a box, never over a face (N1, N2).
- **Use ≥ 5 families per 40 s** (mb1 used 7 graphic events from 6 families in 38 s; mb2 5 families; mb3 4; mb4 4).

### 8.2 Staging choreography (how a stake plays out)
1. **The word** (the amount, the rule, the result) is spoken.
2. **Land (0–6 f after the word):** the graphic types, slams, pops or flashes in **on or just after** the word, never before it (mb1: 0–6 f late; mb2 logos 0–3 f; mb4 verdicts 0–3 f after the reveal cut); this edition adds the anticipation glow 2–3 f before and the settle, sparks and glint after (EV-1).
3. **Read (1.5–2.5 s):** it holds long enough to read; the shot slowly pushes in (~8–10% over 21–23 f) or the label rides a push to the winner.
4. **Hand-off:** a hard cut takes it away, it fades over 2–3 f (mb1 `+$10,000` f1126–1128), or (this edition) it flies on an arc into the pot (EV-2). Captions come back on the next word.
In `FMT-GAMESHOW` the money lands **on the physical action** (the cash put down, the card dealt), not on a word (mb3).

### 8.3 Pattern specs (`P`)
| ID | Pattern | Family | What's on screen | Motion (frames at 30 fps) |
|---|---|---|---|---|
| P-01 | **Stake typed on the prop** | G-1 | `$10,000` on the case it lives in (in `FMT-SOLO`: on the object in hand, on the chest, or on the empty side by the face) | Type-on **1 char/f** (7 chars = 7 f), each char a vertical glowing bar resolving into the digit (~8 f total); lands ~0.2 s after the spoken amount; holds 1.5–2.5 s; slow push ~10% over 23 f while it holds |
| P-02 | **Second stake** | G-1 | The same treatment on the second prop (mb1's second case at ~16.0 s) | Same recipe, 1.3 s after the first |
| P-03 | **Rule as a countdown** | G-2 | `$20,000 → $0` across x 250–860, y 900–1010 | Slides in from the left with motion blur (3 f), **holds 6 f** to be read, counts down linearly over **14 f** (~1,430/f) with the colour sweep green → yellow → orange → red, tail digits motion-blurred, lands `$0` `#FC0000` exactly on "zero dollars", holds to the cut (44 f). Ticks under the roll, a sub boom on the landing |
| P-04 | **Tick-up label** | G-3 | `$1k → $2k → +$3k` on the winner | One value per **3 f**; then a push-in on the winner ~1.5× over **16 f** ease-out with the label tracked (capped by the face, §3.6); the label carries over the cut to the close-up (`+$3k` 323×114 at x 333–655, y 868–981) |
| P-05 | **Per-success pop** | G-3 | `+$3,000` on the desk where the cash lands | Pops in 2–3 f as the prize touches down; boom |
| P-06 | **Count-up to the total** | G-2/G-3 | `+$3,000 → +$9,000` on the winner (x ~144–615, y ~990–1060) | Ease-out over **15 f** (+1,500/f at first, +30/f at the end), lands ~0.3 s after the cheer peaks; holds ~1.5 s |
| P-07 | **Fail grade** | G-6 | The whole frame snaps to black-and-white | Hard switch on the frame the result is visible (mb4 f192), no fade, held to the end of the shot (mb4 36 f; **≤ 45 f / 1.5 s**), colour back on the next cut; the tries dot fills red; no SFX |
| P-08 | **Pass flash + badge** | G-6 + G-5 | Full-frame lime-green flash; a status badge above the thing (bell → green check) | Flash at full strength on the first frame of the insert, decays over **~7 f**; badge pops on the cut, its dot flips to a green check over 3 f; a short second flash 0.7 s later (f391–392) on the next confirming word; a **ding** |
| P-09 | **Pinned skipping clock** | G-9 | `0:59` top centre | Arrival: digits fly in from a zoomed, triple-ghosted blur over **5 f** (f1067–1072) while the shot blurs briefly; green glow cross-fades to the black stroke over 6 f (f1081–1087). Ticks once per second inside a shot; **jumps forward on every cut**; hidden during a talk beat; returns for the last 3-2-1 in sync with the voice; `0:00` on "time is up" |
| P-10 | **Red X slam** | G-5 | A red X on the answerer's chest (mb1 ~150 px at x ~470–620, y ~880–990; here **≥ 300 px**, beside the face, never over it) | On the cut frame: starts ~2.5× scale, blurred and translucent, eases to 1× in **5 f** with a 2-frame footage squash (1.03 → 1.0); holds to the cut (22 f) |
| P-11 | **Red + / live action** | G-5 | A red + with a pulsing glow on a phone screen | Appears on the cut, pulses; small sub hit |
| P-12 | **Name pill** | G-7 | White pill ~550×130 with an avatar and the name, replacing the caption on the spoken name | Blur-whip in from the left 4–5 f (f23–27), the logo coin-spins (f30–33), the text shimmers (f34–37), out on the cut |
| P-13 | **Logo chain** | G-7 | Real logos for names the script says, in the empty side at torso height (~880 px wide, y 875–1045) | Pop 30% → 110% → 100% over 5 f, a soft white radial glow behind, hard exit; the next logo pops the next frame |
| P-14 | **Prop glow** | G-8 | The real prize tinted neon green | 4 f fade-in on the money word (mb3 f49–53), held to the cut |
| P-15 | **3D plate on the payoff** | G-4 | `$10,000` on a green glass slab (660×240 at x 322–983, y 1000–1237) growing out of the prop | Ease-out grow **7 f**, glow rising; tracked to the prop; holds ~1.5 s |
| P-16 | **Stack add** | G-3 + tint | The second prop tinted green with `+$10,000` on it | Tint on the moving prop over 7 f (f1089–1096), the number pops on f1097, holds, fades over 2–3 f (f1126–1128) |
| P-17 | **Full-frame proof insert** | G-11 | The real screen or object where the result is visible | Hard cut in and out; 0.5–1.5 s (FaceTime 33 f) |
| P-18 | **Three-angle reveal** | G-11 | The prize from 3 angles | Cuts every **15 f**; a boom on the first cut and on each angle change |
| P-19 | **Stakeout HUD** | G-10 | REC chrome on telephoto shots | On and off with the shots |
| P-20 | **Shout** | G-13 | `CAP-SHOUT` in the sky | Word-append 7 f apart; slow push ~8% over ~21 f |
| P-21 | **CTA arrow** | G-12 | Red down arrow on the user's own CTA | 4 f fade + 20–30 px drop, bob; warm glow rising |
| P-22 | **Money word caption** | — | The stake said by someone in a green caption on their chest (`$14,000`, 285×75 at y 1006–1080 in the close-up) | Swaps on like any caption |

### 8.4 Line → pattern lookup (start here for every clause)
| Line type | Primary pattern | Alternates |
|---|---|---|
| A stake or amount is named ("10 grand", "$14,000", in solo: the number the script carries) | **P-01** typed on the thing | P-22 (if someone else says it), P-15 (payoff) |
| The rule's penalty ("if not, you get zero") | **P-03** countdown | P-07 |
| A second, matching stake ("…and the person that answers") | **P-02** | P-16 |
| A try fails | **P-07** B&W (or P-10 red X) | — |
| A try passes / it worked | **P-08** green flash + badge + ding | P-11 |
| A right answer / a step done / a success adds to a total | **P-05** pop, then **P-04** tick-up on the first | P-06 at the end |
| The final total | **P-06** count-up | P-15 |
| The payoff ("this is your $10,000") | **P-15** 3D plate on the prop | P-16 |
| "Go! / you have N seconds / by Friday" | **P-09** pinned clock | — |
| A name, a brand, an account (only if the script says it; never an ad) | **P-12** pill or **P-13** logo | — |
| "Look at this / here it is" | **P-17** full-frame insert | P-18 for a reveal |
| The prize is mentioned while visible | **P-14** prop glow | P-01 |
| A gasp, a shout, an aside reaction | **P-20** shout | punch-in close-up |
| A stakeout / watching / waiting segment | **P-19** HUD | — |
| The ask at the end | **P-21** CTA arrow on the user's own CTA | E-1 hard stop |
| Opinion, joke, chatter | Captions only, cut on speaker changes | punch-in |
| The biggest number of the reel (the rule, the total, the beat-the-price) | **EV-3** stake board + **EV-1** slam | P-06 count-up on the board |
| "I expected X… it's actually Y" / over-delivery | **EV-6** over-delivery flip | P-16 |
| What's at stake isn't revealed yet | **EV-7** locked prize | P-14 |
| Each try / attempt / chance | **EV-4** tries row fills | P-07 / P-08 |

### 8.5 Density and variety
- **A cut every 1.0–1.6 s** (median 1.03–1.4 s); a stake graphic every ~5–9 s (mb1: 7 in 38 s; mb3: ~9 money labels in 73 s; mb4: 3 graphic events + 1 money caption in 37 s).
- **≥ 6 visual events by 3 s** (§6.0), **≥ 5 families per 40 s**.
- No stretch without a cut, a graphic or a push for more than ~5 s (mb1's 4.8 s group wide had two money graphics and a push).
- Verdicts: one per try; never more than one verdict grade in the same shot.

### 8.6 Asset rules
- **Real things only:** the real prop, the real screen, the real recording of the call or the result. The references' "graphics" are often the world itself (mb3's quiz on a real screen; mb1's FaceTime screen recording; mb4's phone).
- **Screen recordings** of a phone go full frame, native UI, no card (mb1 27.67–28.77 s); blur private data.
- **Logos:** only for names the script says, real marks in their own colours, on a soft white glow (mb2). **Never** a sponsor or retailer read (M15).
- **The status badge** uses the user's own avatar or the real account's avatar.
- **No stock footage, no AI-generated scenes, no emoji graphics** (none in any reel).
- **Never invent** a number, a verdict or a reaction (N11).

### 8.7 Elevated devices (new in this edition)
| ID | Device | When | What runs | Sound |
|---|---|---|---|---|
| **EV-1** | **The weighted slam** | Every stake number (P-01, P-05, P-15, P-22's big form) | 2–3 f anticipation glow where it will land → the digits slam in an overlapping wave (1 f apart), each 1.18 → 0.96 → 1.0 over 6 f with a motion-blur trail → the unit settles 2 f later → 12–20 green sparks fall (6–10 f) → a glint sweeps across 8–12 f after the land → a slow push underneath while it holds | `swish-boom` or `abstract-hit-sub-bass-07` on the land (by size); `pop-flicker-ding` very low on the glint (≤ 2) |
| **EV-2** | **The pot** (the spine) | From the first stake to the payoff, every format | A dark glass chip (≈ 300–420 px wide, green rim, ≥ 72 px digits) on the speaker's open side at chest height; when a stake is won or added, the number flies on an arc (10–14 f) into it, the pot bumps 1.12 → 1.0 and rolls up to the new total (ease-out, 12 f); at the payoff the pot grows onto the stake board as the final count-up | `cash-machine-2025-02-19-03-33-58-utc-cash-machine` on each add (**the list cue**); `telemetry-graph-rising-01-2025-08-27-06-33-50-utc-36877-telemetry-graph-rising-01-full` (trimmed) under the final roll |
| **EV-3** | **The stake board** | The 1–3 biggest numbers per 60 s (`FMT-SOLO`) | T-14: the full-frame speaker eases (10–12 f, ease-in-out, a slight arc) into the `L-9` wide card at the top (≥ 940 px wide, whole face, still talking), the deep board backdrop fades up behind it; the number slams below (EV-1, ≥ 860 px wide); 1.5–3.5 s later T-15 eases the card back to full frame on the next sentence start | `whoosh-2025-01-08-02-32-33-utc-whoosh-03` on the dock; `woosh-2025-08-27-02-12-31-utc-woosh-03` on the return; the boom on the number |
| **EV-4** | **Tries left** | Any rule tried more than once (street, a challenge, attempts, questions) | A row of 3–5 empty rings (≥ 44 px) under the clock or above the head; each verdict fills its ring red (fail, silent) or green (pass, with the ding) with a 4 f pop; the last empty ring pulses before the final try | the pass ding only; the fail stays silent |
| **EV-5** | **Verdict stamp** | Every verdict | Fail: the red X (≥ 300 px) slams with a 2-frame footage squash and the frame drops to B&W for ≤ 1.5 s, then colour cuts back. Pass: the lime flash decays over 7 f while colour **blooms** slightly richer for 10 f, the badge checks, the tries ring fills green | Fail: none. Pass: `correct-answer-2fast` or `hint-appear-2025-08-27-02-25-12-utc-hint-appear-01` |
| **EV-6** | **The over-delivery flip** | "Name the price, then beat it" (SD-6), or any "expected X, got Y" | The expected number sits in white on the board; on the beat a red strike draws across it (5 f), it drops 40 px and dims, and the bigger number slams in above it in green (EV-1), the pot rolls up to match | `swsh-arrow-feather-high-sdcl-archery166` on the strike; `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-2` on the slam (the biggest moment only) |
| **EV-7** | **The locked prize** | A payoff that is withheld until the end | In the hook, the prize appears as `$???` (or `[ ? ]`) in green glass with a small lock, beside the speaker; it pulses once on each later mention; at the payoff the lock snaps open (6 f), the question marks spin like a slot reel (10 f) and land on the real number with EV-1 | `coin-flip-sfx-coin-flip-nocatch` on the tease; `bonus-win-bonus-win` on the unlock (once) |
| **EV-8** | **The money word punch** | A stake word said by the speaker inside a sentence (P-22) | The green word in the caption scales 1.0 → 1.35 → 1.25 over 5 f with a green underglow, and the shot punches in 1.0 → 1.12 on the same frame (capped by the face) | `hitsmack-cte01-79-4` low (≤ 2) |

---

## §9 Transition system (`T`)

Transitions here are almost all **hard cuts**. The energy comes from what lands on the cut frame (a red X, a flash, a clock) and from the boom under it, not from the transition itself.

### 9.1 Transition library (30 fps)
| ID | Transition | Frames | Recipe | Sound |
|---|---|---|---|---|
| **T-01** | **Hard cut** (default) | 0 | Between speakers, on a phrase boundary or the first syllable of the next speaker's line (cut-to-speaker, ~50% of cuts) | None |
| **T-02** | **Jump cut** | 0 | Same angle, a small reframe, inside one take; removes a breath | None |
| **T-03** | **Punch cut** | 0 | Cut to a closer framing of the same person (wide → close-up, or 1.00 → 1.20–1.35 in `FMT-SOLO`), capped by the face | None |
| **T-04** | **Slow push** (in-shot) | 21–23 | Digital push ~8–10% while a stake or a shout holds (mb1 f440–463; mb4 f59–80) | None (the stake's boom) |
| **T-05** | **Push to the winner** (in-shot) | 16 | Digital push up to ~1.5×, ease-out, the label tracked, ending in a cut to the close-up (mb3 12.4–13.0 s); capped by the face | None |
| **T-06** | **Whip-blur** | ~8 | The last 3–4 f of the outgoing shot get a growing horizontal directional blur (left → right); the cut sits mid-blur; the incoming shot starts blurred and resolves in 3–4 f (mb2 5.73 s, 10.13 s). Used between places or acts | Whoosh + sub; a beat of silence just before (mb2) |
| **T-07** | **Insert cut** | 0 | Hard cut to a full-frame screen or object (≤ 1.5 s) and hard cut back | A boom only if it reveals a stake (mb1 27.67 s) |
| **T-08** | **B&W snap** (in-shot) | 0 | The frame turns monochrome on one frame, held to the cut | None |
| **T-09** | **Green flash** (in-shot) | ~7 | P-08 | Ding |
| **T-10** | **Clock blur-in** | 5 | P-09 arrival; the shot blurs with it | Optional whoosh |
| **T-11** | **Reveal montage** | 15 per cut | Three angles of the prize at 15 f each | Boom on the first cut and each angle change |
| **T-12** | **Silent beat** (audio) | 15–22 | 0.5–0.74 s of full mute (or −40 dBFS) before a deadpan line; the picture continues | Silence |
| **T-13** | **Hard end** | 0 | Cut ≤ 6 f after the last word, mid-moment | None |
| **T-14** | **Dock to the stake board** (this edition) | 10–12 | The full-frame speaker eases (ease-in-out, a slight upward arc) into the `L-9` wide card at the top; the deep board backdrop (gradient + neon glow, never his blurred footage) fades up over the same frames; the card overshoots 2% and settles | A whoosh (§11) |
| **T-15** | **Return from the board** (this edition) | 10–12 | The card eases back up to full frame on the next sentence's first word; the board backdrop fades out under it; the pot rides along | A soft short woosh (§11) |

### 9.2 Transition grammar
| Boundary | Use | Never |
|---|---|---|
| Frame 0 | Already mid-action (no transition) | A fade-in, a title card |
| Speaker → speaker | **T-01** on the next speaker's first syllable | A dissolve |
| Inside one take | **T-02**, with **T-03** on every 2nd–3rd cut in `FMT-SOLO` | Zoom transitions |
| A stake holds | **T-04** | — |
| A result is visible | **T-07** to the insert + **T-08** or **T-09** on its first frames | Saying the verdict before it is seen |
| Place → place, act → act | **T-06** whip (≤ 2 per reel) or a hard cut | Flashes, leaks, glitches |
| "Go!" → the timed task | **T-10** | — |
| The big reveal | **T-11** or one T-07 with a boom | — |
| The biggest number of a section (`FMT-SOLO`) | **T-14** into the stake board, **T-15** back | A board for ordinary numbers; more than 3 per 60 s |
| Before a deadpan punchline | **T-12** | — |
| Last word | **T-13** | Black tail, end card |

### 9.3 Transition map (part of the plan)
```yaml
transitions:
  - {t: 0.00,  id: null, note: "mid-action open, caption on f0"}
  - {t: 1.47,  id: T-01, note: "to the answerer's close-up; red X on the cut frame"}
  - {t: 12.60, id: T-01, note: "to the stake wide; sub boom"}
  - {t: 14.70, id: T-04, note: "slow push while $10,000 holds"}
  - {t: 27.67, id: T-07, note: "full-frame screen insert, 33 f; boom"}
  - {t: 38.44, id: T-13}
```

### 9.4 Transition budget (per 60 s)
- **Hard and jump cuts:** 35–50 (mb3 58 in 73.5 s; mb2 35 in 51 s; mb4 28 in 37 s; mb1 ~24 in 38 s).
- **T-06 whip:** ≤ 2 per reel. **T-10:** 1 per clock. **T-11:** ≤ 1 per reel. **T-14/T-15:** 1–3 pairs per 60 s.
- **T-08 / T-09:** one per verdict.
- **T-12 silent beat:** ≤ 2 per reel.
- Transitions never delay speech; a cut is within ±1 f of a phrase boundary.

---

## §10 Motion tokens, camera, finishing

### 10.1 Motion tokens (30 fps)
| Token | Value |
|---|---|
| Land after the word | **0–6 f after** the word's onset or last syllable; never before |
| Type-on | 1 character / f, each char a glowing bar resolving over ~3 f |
| Caption pop (word mode) | 40 → 90 → 100% over 3 f, no bounce |
| Off-voice pop | 0 → 40 → 85 → 100% over 3 f |
| Logo pop | 30 → 110 → 100% over 5 f |
| Icon slam | 2.5× blurred translucent → 1× in 5 f, no bounce |
| Pill whip-in | horizontal blur from the left, 4–5 f |
| Plate grow | ease-out 7 f, glow rising |
| Countdown | slide-in 3 f, read hold 6 f, linear 14 f |
| Count-up | ease-out 15 f |
| Tick-up | one value / 3 f |
| Clock arrival | ghosted blur zoom 5 f; glow → stroke 6 f |
| Green flash | full on f0, decay ~7 f |
| B&W | hard, 1 f |
| Slow push | ~8–10% over 21–23 f |
| Push to the winner | up to the face cap (mb3 ~1.5×) over 16 f, ease-out |
| Arrow | fade + 20–30 px drop over 4 f, then a gentle bob |
| Holds | stakes 1.5–2.5 s; a countdown's `$0` to the cut |
| Slam (EV-1) | anticipation glow 2–3 f; digits 1 f apart; 1.18 → 0.96 → 1.0 over 6 f; unit +2 f; sparks 6–10 f; glint 8–12 f after |
| Pot add (EV-2) | arc flight 10–14 f; bump 1.12 → 1.0; roll-up ease-out 12 f |
| Dock / return (T-14/T-15) | 10–12 f ease-in-out, 2% overshoot and settle |
| Tries dot | 4 f pop fill |
| B&W fail | ≤ 45 f (1.5 s) |
| Exits | hard off on cuts (default); 2–3 f fade or blur dissolve otherwise |

### 10.2 Camera
- **Handheld, wide phone lens** in all four references (an operator walking with the subjects; mb3's later shots ultra-wide). Natural drift is the camera move.
- **Tripod or selfie footage (`FMT-SOLO`):** never static for more than ~3 cuts. Alternate base and punch-in on jump cuts (T-03), slow pushes while stakes hold (T-04), the stake board for the biggest numbers (T-14/T-15), a push to the face on the payoff (T-05). Every scale is capped by the face (§3.6).
- **Tracking:** every stake graphic is tracked to its prop or person through the handheld drift (mb1, mb3).

### 10.3 Layer order (back to front)
1. The stake board's designed backdrop (never a blurred copy of the creator's footage)
2. Footage (with the verdict grade applied to it: B&W ≤ 1.5 s), or the stake board's card
3. Prop glow / prop tint
4. Stake graphics (numbers, plates, labels, counters, icons, logos, pills, badges)
5. Captions (`CAP-COMIC` / `CAP-WORD` / `CAP-OFF` / `CAP-SHOUT`)
6. HUD, the pinned clock, the pot and the tries row
7. CTA arrow and glow
8. Full-frame passes (the green flash; the whip blur)

### 10.4 Finishing
- **No grain, no LUT, no vignette on footage.** Clean, bright, punchy footage, never pale; neon graphics with glow; heavy black strokes on all text.
- **Glow lives only on green stake graphics, the pot's rim, the clock's arrival, the red + and the logo backlight.**
- **Spell-check** every on-screen word and check every number against the script.

---

## §11 Sound design

**No music bed, ever.** Sound is SFX only (the creator's direction, 12 Oct 2026): never a music track, bed, drone or loop under the voice.

### 11.1 What the references do (measured)
| Reel | Loudness / LRA / true peak | Music under the voice (evidence only; we never use one) | SFX |
|---|---|---|---|
| mb1 | −18.3 LUFS / 3.1 LU / −2.1 dBTP | None (crowd fills the gaps; guess) | Booms 12.8 (stake), 20.1 (`$0`), 27.5 (answer), small 7.7; ticks under the countdown 19.2–19.7; ringtone kept |
| mb2 | −19.3 / 5.6 / **−0.2 dBTP** | **Yes (likely):** a bass groove (guess) out at 4.0–5.6, 18–20, 24.5–26.5, 28–31 s, back at the reveal 33–35 s | Whoosh + sub 5.7; sub 11.3; booms 31.6, 33.4, 34.0; ticks / buzzer near the final count (guess) |
| mb3 | **−10.9** / 6.4 / −2.7 | None (guess) | ~8 booms: open, gasp, `+$3k`, each question, "last question", the reveal |
| mb4 | −15.9 / **2.3** / −3.5 | None (guess) | Sub 1.9 (shout), 10.7 ("yes"); ding ~2.4 kHz 12.6; **0.74 s digital silence** 24.09; −40 dBFS dip 31.96–32.49 |

**The rule underneath:** a boom = the stakes just changed; a ding = it worked; ticks = a number is moving; silence = wait for it (all 4). This edition keeps that grammar and scores **every stake event** with it, at Naman's density, while ordinary cuts stay dry.

### 11.2 The palette (pick by id from SOUNDS.md; rotate within each pool)
| Role | When | Pool | Level (peak vs the voice) |
|---|---|---|---|
| **The big boom** | A stake reveal, a rule landing, a question reveal, the stake board's number | `boom-2025-01-08-02-40-38-utc-boom`, `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5`, `swish-boom` | sub-band +20–30 dB over the speech median, ~0.8–1 s decay; felt more than heard |
| **The biggest moment** (once) | The payoff / over-delivery (EV-6) | `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-2` | the heaviest hit, TP ≤ −1 dBTP |
| **A smaller stake beat** | A live action, a "yes", a shout, a money word punch (EV-8) | `abstract-hit-sub-bass-07`, `hitsmack-cte01-79-4`, `hd-punch-sound-effect` | −6 dB under the big boom |
| **A number rolling** | A countdown drain, a count-up, the pot's roll-up | `clock-2025-08-27-06-56-42-utc-clock-3` (trim to the roll's 14–15 f), `telemetry-graph-rising-01-2025-08-27-06-33-50-utc-36877-telemetry-graph-rising-01-full` (trimmed, for count-ups) | −18…−20 dB |
| **The final 3-2-1 of a clock** | P-09's last seconds | `clock-2025-08-27-06-56-42-utc-clock-2`, then `bomb-timer` on `0:00` | −18 dB |
| **The pot grows** (the list cue) | Every add to the pot (EV-2) | `cash-machine-2025-02-19-03-33-58-utc-cash-machine` | −14…−16 dB |
| **Money landing on a prop** | P-05 per-success pop, P-16 stack add | `money-2`, `shine-collect` | −16 dB |
| **A pass** | Flash + badge (P-08, EV-5) | `correct-answer-2fast`, `hint-appear-2025-08-27-02-25-12-utc-hint-appear-01`, `ting-bells` | −14…−16 dB |
| **A fail** | B&W or red X | **Nothing**: the deflated line carries it | — |
| **Pills, logos, badges, the tries row** | P-12, P-13, the badge, EV-4 | `pop-up-pop-up`, `game-pop-up-2025-08-27-06-39-58-utc-game-pop-up-3`, `appear-enter` | −18…−22 dB |
| **The glint** | EV-1's sweep on a big number | `pop-flicker-ding`, `05405-shine-ding` | −22 dB |
| **Punches and pushes** | The money word punch, a push to the winner, a T-03 that lands on a stake | `zoom-2025-05-09-19-11-57-utc-zoom-3`, `zoom-in-zoom-in` | −14…−18 dB |
| **The stake board** | T-14 dock / T-15 return | `whoosh-2025-01-08-02-32-33-utc-whoosh-03` / `woosh-2025-08-27-02-12-31-utc-woosh-03` | −12…−16 dB |
| **A whip between places** | T-06 | `whip-swish-2025-08-27-06-37-41-utc-whip-swish` layered with `swoosh-2025-01-08-03-02-26-utc-swoosh-06` | −12 dB |
| **The over-delivery strike** | EV-6 | `swsh-arrow-feather-high-sdcl-archery166` | −18 dB |
| **The locked prize** | EV-7 tease / unlock | `coin-flip-sfx-coin-flip-nocatch` / `bonus-win-bonus-win` | −16 dB |
| **The CTA arrow** | P-21 | `appear-magic` (low) | −20 dB |
| **A diegetic sound** | A ringtone, a crowd's gasp, a real buzzer | **Keep it from the footage** | as recorded |

**Never in this style:** cartoon boings, crowd "aww" or "yay" samples, voice memes, record scratches, songs, risers or drones under the voice, anything on a plain cut or caption swap, any sound on a fail.

### 11.2a The SFX ledger (Naman's rule)
- **Any file at most 2× in a reel,** except the one **list cue** (here the pot's `cash-machine-2025-02-19-03-33-58-utc-cash-machine`).
- **No file on two consecutive cues;** rotate within each pool.
- **Density:** about **one cue every 1.0–1.5 s** across stake events (slams, rolls, adds, verdicts, pills, punches, the board); plain cuts and caption swaps get nothing. The references ran 3–8 per reel; this edition scores the stake grammar fully, so a 40 s reel lands around 20–30 cues.
- **Never more than two cues overlapping;** never on a stake word's consonant (shift ±2 f).
- **Booms land on the frame the stake becomes visible** (the cut to the stake, the `$0`, the cut to the answer, the slam on the board).

### 11.2b Silence
- **The fail is silent** (mb4, mb1): the deflation is the joke.
- **Silence before twists (episode):** no new SFX **~1.5 s before each twist word** (mb2 4.0, "kidnap" ~4.5, whip 5.73) and through suspense and dialogue; **a boom lands on the reveal**.
- **The silent beat** (SD-8, T-12): 0.5–0.74 s full mute before a deadpan line (mb4).
- **Before the payoff:** no new cue for 0.5–0.8 s, then the biggest moment.
- **No music bed** in any format (location sound fills the gaps in the street check and game show). `FMT-SOLO`: dry voice + the scored stake events.
- SFX never mask a stake word's consonant (shift ±2 f).

### 11.3 Mix
- Voice: high-pass 80 Hz, light compression; level the dialogue tightly (mb4's LRA 2.3 LU keeps every line equal).
- **Final: −14 LUFS integrated, true peak ≤ −1 dBTP** (M13). Fix: the references ranged −10.9 to −19.3 LUFS and mb2 peaked at −0.2 dBTP.
- Booms sit in the sub band (< 100 Hz) so they don't fight the voice.

---

## §12 Footage handling

### 12.1 Shoot setups (identify which ones the footage uses)
| Setup | Framing (full frame, measured) |
|---|---|
| **A: Walking track** (operator backs up in front) | Host head top ~370, eye ~520, face x ~345 (mb4) |
| **B: Two-shot medium** | Host head top 280–330, eye 400–440, face x 190–300 (left) or ~800–820 (right) |
| **C: Subject close-up** | Eyes y 250–550 |
| **D: Stake wide** (people + props) | Heads top 430–650 |
| **E: Spectacle wide**, locked-off | Head top 455–585, eye 530–640, face x 820–930 (mb2) |
| **F: Selfie two-shot**, very wide | Faces y 650–1100; second face half off the edge (**fix**) |
| **G: Insert** | Phone, screen, prop, pile |
| **S1 / S2: Solo selfie / tripod** (`FMT-SOLO`) | Measure per shot; selfies are often too tight at the top (the fix) |

### 12.2 Crop table (starting values, all capped by the face)
| Framing | Placement |
|---|---|
| Base (`FMT-SOLO`) | As shot at 1.00 if the face margins hold (§3.6); otherwise the too-tight fix |
| Punch-in close-up | 1.20–1.35×, centred on the face; reduce until hair top ≥ 40 px and chin inside with ≥ 40 px to spare on every frame of the shot |
| Slow push | 1.00 → 1.08–1.10 over 21–23 f, toward the face, capped |
| Push to the winner | 1.00 → up to the cap (≤ 1.5×) over 16 f, ease-out |
| Side framing (names coming) | 1.15–1.25×, shifted so the face sits at x 760–860, never past the edge that scale allows (no blurred fill) |
| Pinned clock up | Hair top ≥ 410 px (below the clock box at y 390); if not, drop the clock lower or move it beside the head; never shrink the footage over a blurred copy |
| **Too tight (the fix)** | **Full screen**: hair may touch the top edge, eyes to chin always in; cap punches, move text clear; or the stake-board card the footage fills. **Never** a blurred copy of the same footage behind shrunk footage, never a narrow pillar |
| **Stake board** (`L-9`) | The card crops head and shoulders from the footage: ≥ 940 px wide, top y ≈ 230, hair ≥ 40 px inside the card's top edge, chin ≥ 60 px above its bottom edge; never tighter than the whole face allows |
| Full-frame insert | Fill the frame (cover), nothing important cropped; a phone screen recording is shown whole |

### 12.3 Matte
Not needed. No cut-outs, no graphics behind people in any reel. Tracking (not matting) keeps labels on props and people.

### 12.4 Frame rate
- Deliver at **30 fps** CFR. mb4 is 29.97 fps (30000/1001); mb1–mb3 are 30 fps.
- Conform variable-rate phone footage to a constant 30 fps first.

### 12.5 Audio
- One clean voice track. Keep diegetic sounds that carry the story (a ringtone, a buzzer, a crowd gasp).
- Two-pass loudness normalisation to −14 LUFS, true peak ≤ −1 dBTP.

---

## §13 Output contract

### 13.1 Beat sheet schema (one row per beat; the first ```yaml``` block of the edit brief)
```yaml
- id: 6
  section: RULE                  # HOOK | RULE | TRY-n | ACT-n | Q-n | VERDICT | PAYOFF | KICKER | END
  speaker: host                  # host | guest | off (colours the caption)
  spoken: "If she doesn't answer, you get zero dollars."
  trigger: "zero"                # the word the graphic lands on
  onset_s: 20.05                 # from words.json
  layout: L-3                    # L-1 … L-9 (FMT-SOLO: base | punch | insert | side | clock | board)
  framing: {scale: 1.00, face_cap: 1.28, too_tight_fix: false}
  pattern: P-03                  # §8.3
  stake: {from: "$20,000", to: "$0", colour_sweep: true}
  on_screen_text: ["$20,000", "$0"]
  caption: {system: CAP-COMIC, mode: phrase, text: ["IF SHE DOESN'T", "ANSWER"], colour: host, hidden_during: P-03}
  motion: "slide-in 3 f, hold 6 f, count 14 f, land red on 'zero'"
  ev: [EV-1]                     # elevated devices on this beat (EV-1 … EV-8)
  pot: {before: "$0", after: "$0"}   # the running pot (EV-2)
  tries: "○○○"                    # the tries row after this beat (EV-4), if used
  transition_in: T-01
  transition_out: cut
  sfx: [clock-2025-08-27-06-56-42-utc-clock-3, boom-2025-01-08-02-40-38-utc-boom]
  assets: []
```

### 13.2 Hook proposal format (3 required)
```yaml
- name: "Instant verdict"
  formula: HF-1
  frame0: "speaker mid-word, base framing, caption 'ARE YOU' on"
  visuals: [H-3]
  captions: {system: CAP-COMIC, mode: word}
  storyboard: "f0 question | f23 name pill | 1.47 cut to the answer, red X slams f44 | 2.2 back to host | 2.9 next try"
  sound: [abstract-hit-sub-bass-07]
  loop: "what does a yes get you?"
  why: "the rule is taught by failing it in the first 2 s"
```

### 13.3 What to show the creator
(1) the format (and for a talking head, which format's clock it borrows) with one line on why; (2) the stakes list: every number or outcome, its onset and its pattern; (3) the hook you chose (and the two you didn't); (4) the speaker map: every beat's framing and scale, each punch-in's face cap, every stake board, every shot that needs the too-tight fix; (5) the beat sheet + transition map + the SFX ledger; (6) stills: frame 0 (caption on, face whole), the 3 s mark, the first stake at its landing frame (with its sparks and glint), a stake board frame, a verdict frame (B&W or flash) with the tries row, the pot after its last add, the tightest punch-in (face whole), the last frame. Then build; the creator's notes come back on the stills.

---

## §14 Worked example and reference cheat sheet

### 14.1 Worked example: mb1 "Answer The Call, Win 10,000" rebuilt as a plan
The reference reel itself, re-planned with this playbook's fixes. Times from the reel (30 fps).

**Choices:**
- **Format:** `FMT-STREET` (one rule tried on several people, a pass/fail verdict, a prize).
- **Hook:** HF-1 direct question + instant fail, H-3.
- **Captions:** `CAP-COMIC` word mode at 110 px (fix: the reference's `CAP-WORD` was 70 px), white host, yellow contestant, magenta mom, green money word.
- **Verdicts:** red X for a fail, red + for a live action, the screen insert for the pass.
- **Sound:** scored per §11 (the reference ran ~6 SFX; the column names the key cues, fill the rest from the palette), no music; the fail silent.
- **Elevated:** the tries row (EV-4) fills red, red, green across the three tries; the pot (EV-2) starts at `$0` and takes both `$10,000`s at the payoff; the countdown rides the stake board (EV-3).
- **Ending:** E-3, the user's own CTA (fix: the reference's slot carried a channel-subscribe gag).

| t (s) | Spoken | Layout / framing | Pattern | On screen | Caption | Transition / sound |
|---|---|---|---|---|---|---|
| 0.00 | "Are you subscribed to…?" | L-1 walking wide | H-1 | — | `ARE` **on f0** (fix), word mode | open mid-action |
| 0.77 | (the channel name) | L-1 | P-12 | Name pill replaces the caption (text ≥ 60 px, fix) | hidden while the pill is up | pill whip-in 4 f |
| 1.47 | "I knew it. Never mind then." | L-2 close-up (face whole: the reference's crop is inside the margins here) | P-10 | Red X slams on the cut frame, on her chest | hidden while the X is up | T-01; no SFX |
| 2.20 | "Never mind." | L-1 | — | — | `NEVERMIND` white | T-01 |
| 2.93 | "Of course I am… let me see…" | L-1 → L-2 | — | — | guest yellow | T-01 / T-02 |
| 7.80 | (she subscribes) | L-5 phone insert | P-11 | Red + pulsing on the screen | — | T-07; `abstract-hit-sub-bass-07` |
| 9.97 | "He's subscribed, okay." | L-1 → L-5 proof | P-17 | The phone showing the channel, full frame | white | T-01 |
| 12.60 | "If you call someone and they answer…" | L-3 stake wide | — | — | white, word mode | T-01; `boom-2025-01-08-02-40-38-utc-boom` |
| 14.70 | "…I will give you 10 grand…" | L-3 + push | P-01 + T-04 | `$10,000` typed onto case 1 (1 char/f), push ~10% over 23 f | hidden while it builds | — |
| 16.00 | "…and the person that answers." | L-3 | P-02 | `$10,000` on case 2 | hidden | — |
| 17.13 | "Who are you thinking?" "My mom." | L-1 two-shot. **Fix:** the host's face is half out of the left edge at 20.5–21.0; reframe or apply the too-tight fix so it's whole | — | — | white / yellow (`MOM`) | T-01 |
| 19.27 | "If she doesn't answer you get zero dollars." | L-1 | P-03 | `$20,000 → $0`, sweep to red | hidden during the roll | `clock-2025-08-27-06-56-42-utc-clock-3` under the roll; `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5` on `$0` |
| 21.50 | "She's my ride or die. I got this." | L-1 jump cut | — | — | yellow | T-02; then a kept 0.78 s suspense gap |
| 23.23 | "He's FaceTiming. Will his mom answer?" | L-1 other side (**fix:** host face cut at the left edge 23.3–24.5) | — | ringtone kept | white | T-01 |
| 25.13 | "10 grand for him… 10 grand for his mom" | L-3 | P-22 | `$10,000` as a green caption word, ×2 | green money word | T-01 |
| 27.67 | (she answers) | L-5 full-frame screen insert, 33 f | P-17 | The call connecting | — | T-07; `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-2` |
| 28.77 | "Oh she answered!" | L-1 reaction | — | — | white | T-01 (the strongest cut) |
| 29.93 | Mom: "Oh my god it's Mr B!" | L-2 contestant close-up (**fix:** his hair is cut by the top edge; keep it full screen with eyes to chin in, or cut to the wider angle; never shrink over a blurred copy) | — | — | `CAP-OFF` magenta ~105 px, popped | T-01 |
| 34.47 | "That is your $10,000." | L-3 medium-wide | P-15 | 3D plate grows out of the case (7 f) | hidden | T-01 |
| 36.30 | "This is your mom's 10 grand." | L-3 | P-16 | Case 2 tints green, `+$10,000` pops | hidden | — |
| 37.47 | **The user's own CTA** (fix) | L-1 punch | P-21 | Red down arrow, warm glow from below | white | T-03; hard stop **T-13** at 38.44 |

**Fixes applied in this plan:** caption on f0; captions 110 px instead of 70 px; the pill text 60 px instead of 50 px; three face crops repaired (host 20.5–21.0 and 23.3–24.5, contestant 29.9–31.7); the subscribe gag replaced by the user's own CTA; the mix normalised from −18.3 to −14 LUFS.

### 14.2 Reference-reel cheat sheet (what to take from each)
| Reel | Format | Take from it | Don't copy |
|---|---|---|---|
| mb1 call | `FMT-STREET` | Three tries; money typed on props; countdown to `$0`; red X on the cut frame; magenta off-voice; climax insert; 3D plate; CTA arrow | 70 px captions, 50 px pill, cut faces, empty f0, subscribe gag, −18.3 LUFS |
| mb2 heist | `FMT-EPISODE` | Comic word captions; logo chain; HUD; whips after a silence; 15 f reveal; skipping clock | Sponsor read, cut selfie faces, 70 px shout, −0.2 dBTP |
| mb3 classroom | `FMT-GAMESHOW` | Reaction ratio; real screen; running total + push; per-success pop; count-up; boom per question; prop glow | No captions, 60 px label, clipped label, sponsor segment, 6 s outro, −10.9 LUFS |
| mb4 tuition | `FMT-STREET` | Phrase captions by speaker; B&W fail; flash + badge + ding; name the price, beat it; shout; silent beat; kicker | Faces cut at edges and top, a subscribe-ask premise |

---

## §15 Look at your frames
Not a checklist; the questions the best editor asks while scrubbing:
- **Frame 0, sound off:** the speaker mid-word, whole face, a big caption on? Is there a stake (or the locked prize) on screen by ~1 s? Would I stop scrolling?
- **The frame:** is their video full screen or in a designed box (rounded, rimmed, on the style's ground), never a sharp rectangle over its own blur?
- **Every number:** is it a picture within 6 frames of the word, on the thing it belongs to, big enough to read at arm's length (≥ 140 px tall on the speaker)? Does it land with weight, sparks and a glint, or does it just appear?
- **The pot and the tries:** can I always see what's been won and how many chances are left? Does the pot pay off at the end?
- **Every verdict:** seen before it's said? The fail grey for a breath and silent, the pass bright with its ding? Colour back right after?
- **The speaker:** moving every 2–3 cuts (punch, push, side, board), whole face in every frame, the caption just under the chin? Is the board used only for the biggest numbers, with a wide card, not a pillar?
- **Every frame:** one hero; nothing held still for more than ~1.6 s without a push; nothing small that I'm meant to read? On the board, is the number filling its half?
- **Colour:** bright and punchy, never pale? B&W only on a fail and under 1.5 s?
- **Sound:** a boom on every stake, ticks under every roll, a ka-ching as the pot grows, dings on passes, silence on fails and before the payoff; no file overused; nothing on plain cuts; no music?
- **Vibe:** loud, bright, generous, exact. Anything messy, memey or decorative comes out.

---

## §16 Build + render

- **Render** with the frame-deterministic HTML renderer at **30 fps**, 1080×1920. Timing comes from `words.json`.
- **Fonts** (bundled in `assets/fonts`): `Bangers-Regular.ttf` (captions), `Montserrat-VF.ttf` (word captions), `Unbounded-VF.ttf` (stake numbers), `Poppins-ExtraBold.ttf` and `Poppins-SemiBold.ttf` (clock, pills), `SpaceGrotesk-VF.ttf` (HUD), `BarlowCondensed-Bold.ttf` (the user's own wordmark), `LilitaOne-Regular.ttf` (fallback). Pre-paint the glyphs `$ ₹ % + : ✓` before the first frame.
- **Component map:**

| Component | Role |
|---|---|
| `Footage` | Cut list, base / punch / push scales from the face cap, the too-tight fix: full screen with capped punches, or the stake-board card; never over a blurred copy |
| `Grade` / `Whip` | P-07, P-08 / T-06 |
| `Tracker` | Keeps stakes stuck to a prop or person through drift |
| `StakeNumber` / `Counter` / `Label` | P-01, P-02, P-15, P-16 / P-03, P-04, P-06 / P-05 |
| `Icon` / `Pill` / `LogoPop` | P-10, P-11, P-21, badge / P-12 / P-13 |
| `Clock` / `HUD` | P-09 (jump list, hide windows) / P-19 |
| `Captions` | `CAP-COMIC`, `CAP-WORD`, `CAP-OFF`, `CAP-SHOUT`, speaker-coloured, just under the chin, a word hidden only while a stake shows that word |
| `Slam` / `Pot` / `Board` / `Tries` | EV-1 / EV-2 / EV-3 (T-14, T-15) / EV-4 |
| `Stamp` / `Flip` / `Lock` / `WordPunch` | EV-5 / EV-6 / EV-7 / EV-8 |

- **Final:** H.264 CRF ≤ 16, yuv420p, BT.709, AAC 320k, faststart; the frame count, −14 LUFS / ≤ −1 dBTP, and a contact sheet decoded from the final file.

---

## Appendix A. Evidence map (where each rule comes from)
| Rule / element | Reels |
|---|---|
| Full frame 100%; movement by shot distance and inserts; sub booms only on stakes; median shot 1.03–1.4 s | mb1–mb4 |
| Every amount a picture within ~0.2 s | mb1, mb2, mb3 (on the action), mb4 |
| Money typed on the prop; countdown to `$0`; red X; magenta off-voice; CTA arrow | mb1 |
| Running total on the beneficiary, tick-up, count-up, prop glow | mb3 |
| Pinned skipping clock; logo chain; whip after a silence; HUD | mb2 |
| B&W fail, green flash + badge + ding; silent beat; arched shout | mb4 |
| Speaker-coloured captions | mb1, mb2, mb4 (comic caps: mb2, mb4) |
| Hard-stop endings | mb1, mb2, mb4 |
| **Fix:** whole face always (crops at mb1 20.5–24.5 / 29.9–31.7, mb2 10.1–15.5, mb3 58.0–58.5, mb4 2.7–4.0 / 21.5–27.5) | mb1, mb2, mb3, mb4 |
| **Fix:** caption on frame 0 | mb1, mb2, mb3 (mb4 already did it) |
| **Fix:** captions ≥ 110 px, stakes ≥ 140 px tall on the speaker, pills ≥ 64 px | mb1 (70 px, 50 px), mb2 (70 px shout), mb3 (~60 px label, ~50 px mid-count) |
| **Fix:** stake labels fully inside the frame | mb3 12.0 s |
| **Fix:** −14 LUFS, ≤ −1 dBTP | mb1 −18.3, mb2 −19.3 / −0.2 dBTP, mb3 −10.9, mb4 −15.9 |
| **Fix:** sponsor reads and subscribe gags → the user's own CTA | mb1, mb2, mb3, mb4 |
| **Fix:** outro ≤ 2.6 s | mb3 (5.98 s) |
| **Fix:** a talking head is always captioned | mb3 (none) |
| **Adaptation (not observed):** `FMT-SOLO` | §3.7, built only from the devices above |
| The stake board `L-9`, the pot, the tries row, the weighted slam, the verdict stamp, the over-delivery flip, the locked prize, the money word punch | This edition's elevations (§8.7), built from mb1–mb4's devices |
| The speaker moving every 2–3 cuts and into the stake board; sizes are floors (captions 110–130 px just under the chin, stakes ≥ 140 px tall, the board's number ≥ 860 px wide, red X ≥ 300 px, pills ≥ 64 px text); every spoken word captioned; never pale (B&W ≤ 1.5 s); the whole face always (selfie shifted down, ≥ 0.88, face card ≥ 940 px wide); a full SFX score with the ledger rule, the fail silent, no music; no imposed checks | **The creator's directions, 11–12 Oct 2026** |
