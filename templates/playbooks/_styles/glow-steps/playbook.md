# Studio Breakdown Playbook (v2, "Name It, Show It, Make It Glow" edition, for Claude Opus 5.5)

> **In this plugin:** this file is the whole playbook: every measured value and recipe from the 5 reference reels is in it, and there is no other playbook file to open. Frame counts are measured at each reel's own rate: jw1–jw4 at **30 fps**, jw5 at **23.976 fps** (the reel is named beside every number). Convert with t = f / fps when you draw (`frame(t)` runs at the render fps). Positions are on 1080×1920 (the sources are 720×1280, scaled ×1.5). The per-reel notes this file cites (`jw1…jw5`) are not shipped. Sounds are picked by id from SOUNDS.md; commands are in the edit skill's REFERENCE.md. The page gives you `FACE(n)` and `FACE0` (with `head_top` and `chin`) for every speaker frame.

**Purpose:** you (Claude) receive a talking-head video of the creator plus its script. Use this document to **ideate and build** every format choice, caption stack, numbered badge, slide, window, card, transition and sound, then edit the Reel so it looks and sounds like a calm, premium "here's how it's made" breakdown: **the speaker names the thing, and on that word the screen shows it**, with such polish that the viewer saves it for the steps and rewatches it for the motion.

**What v2 is:** a frame-by-frame analysis of 5 finished reels by Joseph (@josephswork), a video-editing educator: jw1 "This editing style is taking over in 2026" (3 steps, full-screen slides), jw2 "The reason you still can't create a viral edit…" (a talk on a bright canvas where he shrinks into a card), jw3 "…the six pillars" (chapters with an example window over his chest), jw4 "If you look at your edits…" (3 reasons, one shot, graphics on his chest), and jw5, a 2-minute trailer-style sales video for his own programme, **elevated ten times** by the best motion designer and creative director in the world: the name-it-show-it grammar kept whole; every badge, row, card and window animated with anticipation, overshoot and follow-through; the badge carried across the cut into its slide; one result card that visibly transforms step by step and pays off in a before → after; the speaker gliding between full frame, a card, a data dock and the slide; text you can read on a phone; and a glassy, quiet sound score on every graphic landing. From jw5 only the **editing grammar** is used; its offer, name and pitch are never written here, and its slot becomes **the user's own CTA**. All measured layouts, recipes and rules are kept. Where a reference reel and a direction disagree, **the directions win**.
- Every rule below is either **observed** (seen in the reels, the most consistent value chosen as the house standard), a **fix** (something a reel got wrong that this playbook corrects), or **this edition** (an elevation). Guesses are marked as guesses.
- **This style is not one layout.** One creator, one caption grammar and one badge system carry **five formats** (§3): full-screen slides, the light canvas where the speaker shrinks into a card, the chest window, graphics on the body, and the trailer. Pick the format from the script.
- **And the speaker moves.** He is full frame most of the time; when a thing is shown he either **swaps out** for a full-screen slide (jw1), **shrinks whole into a card or oval** on a bright canvas and comes back (jw2, jw3 hook), **docks into a card above the data** (this edition, L-12), or **stays full frame with the thing under his chin** (jw3, jw4). These movements have timings (§3.1).

**Measured sizes are floors, not targets.** The references set labels at 30–40 px, connectors at 45 px, a 434 px result card, a 626 px window and a 384 px filmstrip card: small on a phone. Here:
- **Captions:** `CAP-STACK` connectors **≥ 60 px**, bold noun **96–120 px**, script lead **110–150 px**; `CAP-PLAIN` **72–88 px**; `CAP-SUB` (slides, windows) **60–64 px**; `CAP-CAPS` **≥ 84 px**. If a phrase doesn't fit, chunk it shorter; never shrink it.
- **Text:** titles **≥ 72 px**; rows, labels and callouts **≥ 52 px**; footers **≥ 48 px**.
- **The hero object of a beat is big:** the result card **≥ 640 px wide** on a slide (it shares the slide with its checklist; the checklist text ≥ 52 px fills the rest of the width), **≥ 860 px** when alone; the chest window **≥ 860 px wide**; a canvas object **≥ 860 px**; a group (badge row, stars, stack, carousel) spans **x ≈ 120–960**.
- **The speaker:** a card among context cards **≥ 680 px wide** (face ≥ 240 px), the oval **≥ 480 px**, the filmstrip centre card **≥ 680 px**, the L-12 dock **≥ 760 px**, the inset **≥ 864 px**; when his card is the hero alone, **≥ 940 px**.
- **Above-the-head chips** (tool tabs, the window over the head) are **≥ 200 px tall with labels ≥ 44 px**, or they move off the face into their own beat; a row of tiny tabs over the hair reads as clutter.
- **The 12 Oct test drew small:** a ≈ 500 px planner card with ≈ 30 px rows and a ≈ 540 px speaker card on an empty dark field. These floors are raised for that; if a slide still looks like a small card in a big glow, push in until the card fills x ≈ 90–990.
- **No near-empty frame for more than ~0.7 s:** if more than half of y 200–1650 is plain canvas, push in on what's there or bring the next element. Minimal means few things, not small things.
- **Full screen or a box, never any footage or picture over its own blur** (Studio Standard): the creator's video either fills the frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground or scene) that it fills completely (cover-crop centred on the face). The same goes for every recording, screenshot, photo, diagram and clip: it fills the frame (cover-crop to the part that matters, or a push-in) or sits in a designed box on the style's own ground (its colour, gradient, texture, grid or drawn set). Never a sharp box over a blurred or darkened copy of itself, never a band padded with blurred bars: that hard rectangle inside the frame looks cheap. A tight selfie stays full screen: move the text, not the video; hair may touch the top edge, eyes to chin always in; when the whole head must show, use a box layout on the style's ground. A matte cut-out over a plate and a whole-frame blur transition are fine.
- **Full screen or a box, never their own blur** (Studio Standard): the creator's video either fills the frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground or scene) that it fills completely (cover-crop centred on the face). Never shrink it over a blurred or darkened copy of itself, never pad a band or box with blurred side bars, never set a card on their own blurred frame: that hard rectangle inside the frame looks cheap. A tight selfie stays full screen: move the text, not the video; hair may touch the top edge, eyes to chin always in; when the whole head must show, use a box layout on the style's ground. A matte cut-out over a plate and a whole-frame blur transition are fine.

**How to use this file:**
- Follow §1 (procedure) in order.
- Look up visuals by ID: formats `FMT-…`, layouts `L-…`, hook formulas `HF-…`, hook visuals `H-…`, structure devices `SD-…`, graphic families `G-…`, patterns `P-…`, transitions `T-…`, endings `E-…`, elevated devices `EV-…`.
- Only the craft in §2 never bends. Everything else is a default you adapt like the best editor would, with a one-line reason in the plan.

### The feel (read this twice)
This is **a friendly motion designer pulling back the curtain on his own edit.** He sits in a moody studio washed in one saturated hue, a podcast mic in front of him, and talks to you fast and warm, counting on his fingers. Every time he names a step it appears, glowing, on that exact word: a diamond badge sparks off his fingertip, the slide cuts in with the badge already flying to its place, the result card transforms row by row in front of you, and he's back before you miss him. His words build on his chest in a white mix of elegant script and heavy bold. It feels **calm, confident and premium**: never loud, never cluttered, always moving. The energy comes from graphics that land on the word, not from shouting. If it looks like a slideshow, it's wrong; if it looks like a hype edit, it's wrong too. It should feel like **the edit is demonstrating itself**.

**Who the reference creator is:** a young, friendly, confident editor who teaches other editors how a look is built. He talks to camera from a lit studio chair, fast and without filler (3.7–3.9 words/s), counting on his fingers ("first", "number two", "and lastly"). He never shouts; the energy comes from graphics that move every 1–2 s. His reels demonstrate themselves: the breakdown is edited in the style it describes.

**Audience (ICP):** beginner and intermediate short-form creators and editors, English-speaking, who want **exactly how a look is made** (steps, fonts, effects, order). They save numbered recipes and trust a creator who shows the result at every step.

**Style lineage:** a premium "motion-design tutorial" edit in four layers:
1. **Speaker:** one tripod medium shot in a moody studio lit in one saturated hue, a podcast mic on a boom in front of the chest; jump cuts with small punch-ins remove every pause. He is full frame, absent behind a full-screen slide, or shrunk **whole** into a rounded card on a bright canvas. Never a cut-out, never a corner picture-in-picture.
2. **Structure:** numbered **diamond badges** in the set's hue that pop out of his raised fingers, line up as the "1 2 3" promise and head every step.
3. **Proof:** each step's result shown literally: a glowing card whose content changes on every checklist row, an example window over his chest, a rating, a notification pill, a glass checklist, a giant number, a carousel.
4. **Captions:** a white **mixed-type stack** (a script word leads, small sans connectors, a big bold noun), appended word by word; plain one-word captions for filler.

### Creator directives
| # | Directive | Where it lives |
|---|---|---|
| D1 | **Ten times better, same soul.** Keep "name it, then show it", the badges and the five formats; raise the craft: animation principles on every badge, row, card and window; one hero per frame; a result that visibly builds and pays off. Calm and premium, never loud | The feel, §8.0, §8.7 |
| D2 | **The speaker moves:** full frame to open and for every claim; out for the slide, into a card on the canvas, docked above the data; back to full frame by a cut or an eased grow. Never frozen in one layout; frame 0 is never empty | §3.1 |
| D3 | **Seamless motion:** the badge flies across the cut, the result card carries from step to step, shrinks and returns are eased; something changes every ≤ 2 s and nothing teleports | §8.0, §9 |
| D4 | **Sound is scored to studio standards, at this style's volume:** a glassy pop, click, glint or soft air on every landing; a few weights; **no SFX file more than 2× in a reel** (the one list cue excepted). **No music bed, ever** | §11 |
| D5 | **The whole face is always visible, and big:** hair to chin in every frame; tight footage stays full screen (move the text, not the video) or fills a card on the canvas, ≥ 940 px wide as the hero; never a pillar, never over its own blur; **never pale** | §2, §3.7, §4.4 |
| D6 | **Captions are seen:** every spoken word; the stack just under the chin; a `CAP-SUB` line on slides and windows; sizes are floors | §5 |
| D7 | **No imposed checks.** This file gives taste, recipes and reasons; you decide like the best editor and creative director in the world. Only craft never bends | §2 |

### The reference reels → this edition, at a glance
| Area | The reference reels | This edition |
|---|---|---|
| The speaker | Full frame 52–100%, absent behind slides, a card on the canvas; returns by hard cuts | The same, plus **the data dock** (L-12) and **the eased grow home** (T-17): he glides between full frame, card, dock and slide, never parked in one layout |
| Badges | Pop at the fingertip, park, flip off | **Carried across the cut** on an arc into the slide (EV-2), with a squash on landing and a glint (EV-3) |
| The result | A card that changes per row | **One living result card** for the whole reel (EV-1): each step transforms it, the camera pushes to each change (EV-4), and the payoff scrubs back through every state |
| Captions | Script + sans stack on the chest at y 990–1250; none on slides or in chapters | The stack **just under the chin** at bigger sizes (connectors ≥ 60 px), the script **writing itself** (EV-6); **every word seen**: a one-line `CAP-SUB` on slides and windows |
| Sizes | Labels 30–40 px, a 434 px card, a 626 px window, a 384 px filmstrip card | Floors: rows ≥ 52 px, titles ≥ 72 px, the card ≥ 640 px (≥ 860 alone), the window ≥ 860 px, the speaker card ≥ 680 px |
| Sound | A soft pad under the voice; graphics silent; ≤ 3 SFX | **No music, ever.** A glassy score on every graphic landing, about one cue every 1.4–2.2 s in graphic beats, the ledger rule, silence before the payoff (§11) |
| Finish | Soft glows | Glows plus a glint on every landing, frosted glass, a breathing bloom, depth behind the head (§8.0) |
| Checks | MUST / NEVER lists, a checkpoint, a QA checklist | **Craft only** (§2); the rest is the house grammar (§2.1), your judgement, and the questions in §15 |

### Formats at a glance (the speaker's movement in §3.1 applies to all five)
| Area | `FMT-SLIDES` step slides (jw1) | `FMT-CANVAS` light canvas + shrinking card (jw2) | `FMT-WINDOW` chest window chapters (jw3) | `FMT-ONBODY` graphics on the body (jw4) | `FMT-TRAILER` launch trailer (jw5) |
|---|---|---|---|---|---|
| Use when | N steps that each have a visible result ("how it's made in 3 steps") | An argument or a motivation talk with abstract nouns to picture ("the one thing", "look around") | N chapters, each with a short example to play ("the six pillars") | N reasons, tips or mistakes, mostly talk ("3 reasons your X looks bad") | The user's own launch, offer or big announcement (≥ 60 s) |
| Speaker | Full frame (57%) ↔ **absent** behind a full-screen slide (43%), swapped by cuts | Full frame (52%) → **shrinks into a card/oval** on the canvas (13%) → absent on faceless text beats (35%) → hard cut back | Full frame 91%; the hook **shrinks him into a filmstrip card** for ~4 s | **Full frame 100%**, never moves | Full frame (66%) ↔ absent on full-screen cinematic cut-aways (31%); one 1.25 s dimmed inset |
| The thing shown | 434×770 glowing card (here ≥ 640 px wide) + checklist on a navy→purple slide | Around his card, then full screen on #E8F2F7 | 626×316 window (here ≥ 860 px wide) | Props in the chest band y ≈ 950–1650 | 3D worlds, screenshot stacks, glass cards and tabs |
| Structure | Badge from the fingertip → heads the slide | Giant numeral; word-by-word slides | Badge + title → window → checklist | Badges as hand props; recap row | Glass number tabs |
| Captions | Script+sans stack and plain words; on slides a one-line `CAP-SUB` under the card (this edition) | Stack on the talking head; navy kinetic words on the canvas | Titles, callouts and checklist carry their own words; every other word as a `CAP-SUB` line just under his chin (this edition) | Stack + plain words + italic labels | All-caps light-italic glow captions, 2–3 words; stacked emphasis lines |
| Sound / ending | A glassy score on badges, rows and card swaps (§11) · own-content card | Scored shrinks, canvas objects and numeral · reminder line | Scored badges, window, callouts, rows · keyword in quotes | Soft score on props and badges · recap row | One SFX per device, plus pops on tabs and pills · keyword pill |

### Quick index
| § | What |
|---|---|
| §1 | Procedure (do this in order) |
| §2 | Craft that never bends + the house grammar |
| §3 | Formats, the speaker's movement, layouts, framing the face, safe zones, the one-person adaptation |
| §4 | Colour tokens and the meaning of colour |
| §5 | Type tokens and caption systems |
| §6 | Hook system (the 10× hook, formulas, visuals, timing, endings/CTA) |
| §7 | Structure devices: badges, the item ritual per format, open loops |
| §8 | Graphics: the 10× layer, families, patterns, line → pattern lookup, density, assets, elevated devices |
| §9 | Transition system: library, grammar, map, budget |
| §10 | Motion tokens, camera, layers, finishing |
| §11 | Sound design: palette, SFX ledger, silence, mix (no music bed, ever) |
| §12 | Footage handling |
| §13 | Output contract |
| §14 | Worked example (jw4 rebuilt as a plan, jw1 in short) + reference-reel cheat sheet |
| §15 | Look at your frames |
| §16 | Build + render |
| App. A | Evidence map |

---

## §1 Procedure (follow in order)

1. **Inventory.** Probe the footage; identify the setup (§12.1). On 3 sampled frames measure head top, chin, eye line, face width and centre (1080×1920). Hair or chin within ~60 px of an edge = **tighter than the face allows**: plan the tight-footage fix (§3.7: full screen with the text moved, or a card on the canvas that the footage fills; never over its own blur) everywhere.
2. **Read the set hue** (the wall, the light) and pick one accent family (§4.2); a neutral room follows §3.10.
3. **Transcribe** with word timestamps; check every name, number and term (the references shipped "Youneed", "Stytlize", "abberation").
4. **Choose the format** (§3.0) with one line on why; `FMT-TRAILER` only for the user's own launch or offer.
5. **Segment:** `HOOK` (0–5 s) → `PROMISE` ("N steps" + badge row) → `ITEM-n` (each on an ordinal: "First / Number one / The first pillar / And lastly") → `PAYOFF`/`RECAP` → `CTA`.
6. **Mark every trigger word:** ordinals (badges), step nouns (slide/window/graphic), listed items (rows), abstract nouns (§8.4), numbers; each visual lands 0–3 f before its word.
7. **Plan the speaker map** (§3.1): full clean, full + chest graphic, card/oval, data dock (L-12), or absent; frame 0 is the speaker; returns on a sentence start; never two moves within 1 s; he never sits in one layout for long.
8. **Ideate 3 hooks** (§6), recommend one.
9. **Fill the beat sheet** (§13) and the transition map (§9.3); check the budget (§9.4).
10. **Produce the assets** (§8.6) and list what is missing. Never fake a result, number or testimonial.
11. **The 10× pass and the score** (§8.0, §8.7, §11): for every beat, its hero, how each element anticipates, lands and follows through, where the badge travels, how the result card changes; then score every graphic landing and log the sound ledger. **Attack the plan:** where is a frame still for more than ~2 s? Where is something small meant to be read? Where is the speaker stuck in one layout? Where is a spoken word not on screen? Fix it in the plan.
12. **Show the creator** the plan and stills (§13.3).
13. **Build, look at your frames (§15), score, render (§16).**

---

## §2 Craft that never bends
- **The whole face is always visible:** hair to chin at every zoom, punch, card, oval, dock, filmstrip, inset and window; tight footage stays full screen (hair may touch the top edge, eyes to chin always in) or fills a card on the canvas; never shrunk over its own blurred copy. Captions may cross the face.
- **Nothing over the face but captions:** graphics live from the caption block down; cards go behind the head only with a matte.
- **Text never sits on text:** one text layer at a time (M7).
- **Sound in sync:** every SFX on the frame its picture lands (slide ±2 f off a consonant); nothing louder than the voice.
- **True and exact:** every number, name, result and screenshot real; the user's own examples and CTA; every word spelled right.
- **Readable at phone size:** captions ≥ 60 px, rows ≥ 52 px, titles ≥ 72 px; the hero object big.
- **Never pale:** his footage keeps its rich colour; deep blacks, the set's hue saturated, skin natural.
- **Loudness:** −14 LUFS integrated, true peak ≤ −1 dBTP; a hard stop ≤ 6 f after the last word.

Everything else is direction. You decide; write your reasons into the plan.

### 2.1 The house grammar (what makes it this style)
Not checks: this is what the five reference reels do every time, and why it works. Break one only with a reason in the plan. (The IDs are kept because other sections cite them.)
- M1. **Name it, then show it.** Every step, chapter, reason or item gets its visual on its word: the badge 0–3 f before the ordinal; the slide 0.3–1.0 s after the step noun ends (jw1: "background" ends 10.71 s, slide at 11.03 s); each checklist row on its item ±3 f.
- M2. **The whole face is always visible:** hair to chin, at every zoom, punch-in, crop, card, oval, circle, inset or window; the face decides how far a punch goes and how small a card gets. **Captions may cross the face.** Fix: jw5's ≈ 190% punches put the hairline at y ≈ 324 with the head nearly full width; ours keep ≥ 60 px above the hair and the chin inside. When footage is tighter than the face allows (a handheld selfie close-up with the hair and chin out of frame), **keep it full screen** (hair may touch the top edge, eyes to chin always in; move the text, not the video) **or let it fill a card on the canvas** (cover-crop on the face) (§3.7). Never shrink it over a blurred copy of itself (Studio Standard); never a narrow pillar.
- M3. **Frame 0 is the speaker, sharp, with the first caption word on.** Fixes: jw4 opened on a black frame, jw1 on a blurred 130% frame, jw2/jw3/jw5 had no text until f1. The first graphic by f9–f21.
- M4. **One accent family per reel, from the set** (§4.2): badges, glows, rims, bullets and lines share it; captions stay white.
- M5. **The badge is the structure:** the same diamond, recipe and place at the promise row and at every item.
- M6. **Graphics over the speaker live in the chest band**, y ≥ 950 (chin ≈ 800–830), x 150–930; the face zone carries captions only. Exception: cards **behind** a matted head (P-17).
- M7. **One text layer at a time:** the talking-head stack clears 2–3 f before a slide cut, never runs under a window or checklist and never shares the screen with a badge title (jw1, jw3, jw4); on slides and windows the words go to the one-line `CAP-SUB`, which steps aside while a row, title or callout carries the same words (this edition, §5.4a).
- M8. **Pauses cut:** 3.7–3.9 words/s, no gap over ~0.35 s, a jump cut with a 3–10% punch change at every ordinal.
- M9. **Something changes every ≤ 2 s** (≤ 1.5 s in the trailer). Fix: jw2's 4.9 s of talking head with captions only (17.7–22.57 s) gets a punch-in or a plain-caption swap.
- M10. **Readable at phone size** (§5.7): caption words ≥ 60 px, labels/rows/callouts ≥ 52 px, titles ≥ 72 px; the hero object big (the floors at the top of this file). Fix: the references used 30–40 px for labels and 45 px connectors.
- M11. **Truth:** every number, name, result and screenshot real; example clips are the user's own.
- M12. **Audio:** −14 LUFS, **true peak ≤ −1 dBTP** (fixes: jw2 +1.7, jw4 +1.1, jw3 −0.1, jw1 −0.3 dBFS).
- M13. **End clean:** a hard stop ≤ 6 f after the last word, no ring-out over black (fix: jw5 rang its music out 1.7 s; we use no music).
- M14. **The CTA is the user's own** (own video, resource or keyword). No third-party product or service as a plug.

**Never in this style:**
- N1. A corner picture-in-picture, a split screen, or the speaker cut out onto a canvas.
- N2. The speaker stuck in one small box: card and oval beats last 1–3 s and return to full frame (§3.1).
- N3. An empty or near-empty frame. Fixes: jw2's search bar and course banner alone in a white field (5.2–9.3 s); jw1's slide opening on a 20% card with a faint title. Ours: badge + title by f4; every canvas beat has its label line and an object ≥ 860 px wide.
- N4. Coloured highlight words in captions; emphasis is font and size only.
- N5. The talking-head caption stack on full-screen slides or under the chest window (the one-line `CAP-SUB` carries the words there, §5.4a).
- N6. Graphics over the face; burns, inversions or tears across it (fix: jw5's burns crossed the face for 6–8 f; ours open from the edges, T-14).
- N7. Burns, glitches, RGB splits, leaks or flashes in the teaching formats (trailer only).
- N8. Other creators' clips, profiles or names as content (fixes: jw2's carousel and profile card, jw5's named showcase).
- N9. Typos ("Youneed", "Stytlize", "abberation" shipped in the references).
- N10. A black first frame, a dark last frame in a teaching reel (jw2), a black tail over 1 s.
- N11. A pale speaker: desaturated, faded or lifted-black footage as a look (the creator's direction, 12 Oct 2026). The light canvas is a background colour, never a wash over his face.
- N12. Music under the voice, ever (§11).

---

## §3 Formats, the speaker's movement, layouts, framing the face, safe zones

### 3.0 Choosing the format
| The script… | Format |
|---|---|
| …teaches N steps, each with a visible result | `FMT-SLIDES` (the card shows the result changing row by row) |
| …argues one idea or motivates, with abstract nouns to picture | `FMT-CANVAS` (every noun becomes an object; so does the speaker) |
| …walks through N chapters, each with a short example | `FMT-WINDOW` (the example plays under his chin) |
| …gives N reasons, tips or mistakes, mostly as talk | `FMT-ONBODY` (one shot, props on the chest) |
| …is the user's own launch, offer or announcement, ≥ 60 s | `FMT-TRAILER` |
| …mixes them | the dominant one, borrowing at most one device (jw3's hook borrows the canvas shrink) |

### 3.1 The speaker's movement (every format)
This decides how big the speaker is, beat by beat. Never box him into one layout.

| Beat | Speaker | Measured |
|---|---|---|
| **Hook (frame 0 → ~3 s)** | **Full frame**, mid-word, first caption word on at f0, the first graphic over or behind him by f9–f21 | All 5 reels open on the talking head |
| **Promise ("N steps / things")** | Full frame, the badge row in the chest band | jw1 7.3 s, jw3 3.4 s (on the canvas), jw4 4.5 s |
| **Item, `FMT-SLIDES`** | Full frame names it with the badge in his hand → **hard cut: he is absent** behind the slide → zoom-blur back to full frame for the next ordinal | jw1: slides 7.0, 6.2, 3.9, 4.7 s; talking-head stretches between them 6.1, 2.3, 2.1 s |
| **Context, `FMT-CANVAS`** | **Shrinks whole into a rounded card** (T-05, 25 f) with context cards around him → the camera leaves him for faceless canvas beats → **hard cut back to full frame** on a sentence start (or the eased grow home, T-17) | jw2: shrink at 0.7 s, back at 9.3 s; shrink at 11.0 s (into a carousel card, rotates away at 14.2 s), back at 17.7 s; shrink → oval at 33.6 s, back at 38.57 s |
| **Item, `FMT-WINDOW` / `FMT-ONBODY`** | **Stays full frame**; the thing arrives under his chin | jw3 91% full frame; jw4 100% |
| **Data line, any format** (this edition) | **Docks into a card above the data** (L-12, T-05 eased, 12–14 f): he stays whole at the top while the number, comparison or result owns the bottom; **grows home** to full frame on the next sentence (T-17) | An adaptation of jw2's shrink; 1–3 s per beat |
| **Hook, `FMT-WINDOW`** | Shrinks into a filmstrip card on a pale canvas over ~1 s, holds while the hook text builds, **hard cut back** to full frame on the first chapter | jw3: f8–30 shrink, back at 5.0 s |
| **Cut-away, `FMT-TRAILER`** | Absent for 1–11 s of full-screen picture, then a cut back to full frame; once per reel, a 1.25 s **dimmed inset** for the imagined viewer question | jw5: inset 19.31–20.56 s |
| **Ending** | **Full frame** for the last line, always | All 5 reels |

- **Budget:** the speaker is full frame (clean or with chest graphics) for ≥ 50% of the runtime in every format (measured 52–100%). Card/oval beats (and L-12 docks) last 1–3 s each, 2–4 per 45 s. Absent stretches last 1–7 s each.
- **Returns** to full frame: a hard cut on a sentence start (jw1 adds a 5 f zoom-blur, T-03; jw2 the dark ↔ light cut, T-09), or, this edition, the **eased grow home** (T-17, 12–14 f, ease-in-out with a 2% overshoot) from a centred card or an L-12 dock. The references never grow back; grow when it keeps the eye on him, cut when the luminance jump is the point.
- **Never two speaker moves within 1 s.**

### 3.2 `FMT-SLIDES`: full frame ↔ full-screen step slides (jw1)
```
TALKING HEAD (L-1 / L-2)                 STEP SLIDE (L-3, speaker absent)
┌──────────────────────────┐ 0           ┌──────────────────────────┐ 0
│                          │             │                          │
│        ╭──────╮          │ ← head top  │ ◆1  Creating the Backgr… │ ← badge (238,432) ~200 px
│        │ face │          │   y≈421     │     title x 355, y≈432   │   title 52 → 64 px (fix)
│        ╰──────╯          │ ← eyes 640  │ ┌─────────┐ ✦ White bg   │ ← card x 138–572,
│   ◆1   ☝                 │ ← badge at  │ │  9:16   │ ✦ Grid       │   y 575–1345 (434×770)
│  (290,1030) beside hand  │   fingertip │ │  card,  │ ✦ Halftone   │   radius 22, rim glow
│  𝓕𝓲𝓻𝓼𝓽 is the            │ ← caption   │ │ result  │ ✦ Shadow     │ ← rows ≥ 48 px (fix),
│  background              │   stack y   │ │ changes │              │   pitch ≈ 95–110 px
│     (mic, chest)         │   990–1250  │ └─────────┘              │
│                          │             │ The full breakdown is… │ ← footer y≈1465, ≥ 44 px
│                          │             │                          │   = user's own CTA line
└──────────────────────────┘ 1920        └──────────────────────────┘ 1920
footage full frame                        canvas #000C25 → #0A0D3E → #330556 + lower-left bloom
```
- The ritual is in §7.2. The card's content swaps on the same frame as each row (jw1: texture, grid, halftone, shadow; an object placed, desaturated, textured, shadowed).
- **This edition's slide sizes** (the drawing above shows jw1's measured values): result card **x 70–580, y 540–1447** (≈ 510 × 907, radius 24, rim glow), checklist **x 620–980**, rows ≥ 52 px at a pitch of ≈ 120 px (a row may wrap to 2 lines), badge ≈ 220 px at (200, 420), title ≥ 72 px from x ≈ 340; `CAP-SUB` at y ≈ 1500–1570 under the card; the footer (≥ 48 px, y ≈ 1600) types on only in a pause.
- **Bonus-step variant:** no badge; a centred card (x ≈ 300–780) settles from ~115% (T-04); callouts instead of a checklist.
- **Mini cards** on the talking head (P-07) for an "A vs B" line before the slide.

### 3.3 `FMT-CANVAS`: full frame → card/oval on a light canvas → faceless canvas → hard cut back (jw2)
```
FULL FRAME (L-1)          SHRUNK INTO A CARD (L-4)          FACELESS CANVAS (L-5)
┌──────────────┐          ┌──────────────────┐              ┌──────────────────┐
│   ╭────╮     │          │ ▢635K      ▢331K │ ← dimmed     │                  │
│   │face│     │  T-05    │   ┌──────────┐   │   proof      │  1  𝒯𝒽𝒾𝓃𝑔       │ ← giant thin "1"
│   ╰────╯     │  25 f    │   │ ╭────╮   │   │   cards      │  and one thing   │   ≈320 px + script
│ 𝒯𝒽ℯ reason   │ ───────► │   │ │face│   │   │   ≈270×420   │     Only         │
│  you 𝒮𝓉𝒾𝓁𝓁    │          │   │ ╰────╯   │   │              │                  │
│   (mic)      │          │   └──────────┘   │ ← card x 268–812, y 583–1199 → x 298–773, y 648–1123
│              │          │ Can't create a viral edit   ← label ≥ 56 px (fix), grey→black
└──────────────┘          └──────────────────┘              └──────────────────┘
blue studio               canvas #E8F2F7, card radius 20, soft blue glow         hard cut back to full frame
```
- **The shrink** is T-05: the whole frame, never a cut-out. **Head in the card:** card top y 648, head top y ≈ 690, so **≥ 40 px of air above the hair**: the house minimum for every card, oval and inset. This edition: the card ends **≥ 680 px wide** (x 200–880; jw2 shrank to 475 px), so his face reads; with no context cards around it, it stays ≥ 940 px.
- **The oval** (T-06, measured x 378–702, y 760–1119, 324 px wide; here **≥ 420 px**, x 330–750) is the smallest he gets; the whole head sits inside, the hair under the top curve. **The carousel card** (P-20): he becomes its centre card and rotates away.
- **Faceless beats** (P-22…P-25) each hold a label line + an object ≥ 860 px (N3 fix). **Return:** a hard cut dark ↔ light (T-09; jw2 9.30, 17.70, 27.33, 38.57 s), or the eased grow home (T-17) from a centred card.

### 3.4 `FMT-WINDOW`: full frame + a window over the chest (jw3)
```
HOOK: FILMSTRIP (L-6)                    CHAPTER (L-1 → L-7)
┌──────────────────────────┐ 0           ┌──────────────────────────┐ 0
│ more than two years to   │ ← hook text │        ╭──────╮          │ ← head top y≈378
│ build                    │   ≥ 64 px   │        │ face │          │   eyes ≈648, chin ≈800
│ ▯ ▯ ┌──────────┐ ▯ ▯     │   (fix: 50) │        ╰──────╯          │
│ ▯ ▯ │ speaker  │ ▯ ▯     │ ← centre    │  Sans Font ╲             │ ← callouts ≥ 48 px (fix)
│ ▯ ▯ │ (dashed  │ ▯ ▯     │   card ≥ 540│ ┌──────────────────────┐ │ ← window x 227–853,
│ ▯ ▯ │  inset)  │ ▯ ▯     │   wide (fix)│ │  example clip plays  │ │   y 976–1292 (626×316)
│     └──────────┘         │             │ └──────────────────────┘ │   radius 16, rim #426BB1
│  ◆1 ◆2 ◆3 ◆4 ◆5 ◆6       │ ← y≈1360    │ ✦ Create 5 stars…        │ ← checklist rows
│                          │             │ ✦ Add a glow…            │   y≈1354 / 1426, ≥ 48 px
└──────────────────────────┘ 1920        └──────────────────────────┘ 1920
canvas #D0D9DF                            teal-blue studio, black tee
```
- The chapter ritual is in §7.2; the portrait variant is P-10; the hook filmstrip is T-10 + H-3. Fix: jw3's filmstrip card was 384 px wide (face ≈ 105 px); ours is **≥ 600 px wide**, so the face reads.
- **This edition's window:** **x 110–970, y 960–1444** (860 × 484, radius 20, rim + glow); checklist rows ≥ 52 px at y ≈ 1480 / 1560 (two rows on screen, a third replaces the first); callouts ≥ 52 px. The words not carried by a title, callout or row run as a `CAP-SUB` line **just under the chin**, above the window (§5.4a).

### 3.5 `FMT-ONBODY`: one continuous shot, all graphics on the chest (jw4)
- Indigo wall (#170051 → #260084), navy tee, mic from the right. Head top y ≈ 400 (≈ 378 punched), eyes ≈ 648, face x ≈ 560, chin ≈ 830; nothing graphic above y ≈ 950.
- Caption stack y ≈ 1000–1190; badge in the raised hand (≈ 260, 1330); pill x 151–907, y 1048–1199; glass card x 313–767, y 976–1640; stars y 1382–1469; badge row x 313 / 540 / 760, y ≈ 1361.
- He never moves; jump cuts alternate ≈ 100% ↔ 105–110%; every graphic is a prop on the torso (P-01…P-04, P-12…P-16).
- **This edition:** the stack sits just under the chin (§5.2); props sit below it and are bigger: the glass card ≥ 640 px wide (x 220–860), stars ≥ 120 px (x 190–890), the pill ≥ 860 px, the badge in the hand ≥ 220 px. A data line may take an L-12 dock (§3.1), so even this format moves.

### 3.6 `FMT-TRAILER`: talking head ↔ full-screen cinematic picture (jw5)
- **Talking head** (≈ 66%): medium close-up, a practical light tube at the side, a white mic in the lower foreground; `CAP-CAPS` captions; over it the glass proof stack (P-28), the glass tabs with the mic defocused (SD-4), chrome titles and the keyword pill.
- **Cut-aways** (≈ 31%): 3D worlds with rays and dust, tilted screenshot grids, a paper-floor count-up, a smoky showcase (P-29…P-32), each landing on its key noun and running 1–11 s with a camera move inside.
- **The dimmed inset** (L-10) for "you might be wondering…", cut back full frame on the next word (the creator's name in bold quotes).
- **Framing fix:** jw5 alternated 100 / 155 / 190% punches; ours stop where the face stops (head top ≥ 60 px, chin and ears inside: ≈ 130–150% on a medium close-up).

### 3.7 Framing the face (all formats)
| Framing | Head top y | Eye line y | Face width | Used for |
|---|---|---|---|---|
| **A, normal** | 378–454 | 580–713 | 280–324 | Most talking (jw1–jw5) |
| **B, punched** | 320–420 | 550–640 | +5–15% | Every other jump cut |
| **C, close punch** (trailer) | ≥ 60 (fix: jw5 ≈ 324 at 190%, head near full width) | ≈ 700–800 | ≤ 520 | Trailer emphasis |
| **Card / oval / dock / inset** | ≥ 40 px under the shape's top | — | ≥ 200 (card, dock), ≥ 150 (oval) | CANVAS, L-12, the WINDOW hook, the trailer inset |
| **Opening zoom-out** (jw1) | ≥ 60 at 130% (measured ≈ 280) | — | — | f0–6, sharp at f0 (fix) |

- **The tight-footage fix** (a handheld selfie close-up, hair or chin within ~60 px of an edge): never punch further. **On full frame it stays full screen**: hair may touch the top edge, eyes to chin always in; move the stack, badges and chips clear of the face, not the video. **In a card or dock** the footage fills the card (cover-crop centred on the face; make the card taller before anything else), and the card sits on the canvas or the set's glow, **never on a blurred copy of his own frame** (Studio Standard). Never a narrow pillar. The face stays sharp, whole and big.
- **Behind the head:** jw1's proof cards (y ≈ 230–700) overlap the head zone with his head **in front** (a matte). Cards go behind the head only with a matte, never in front of the face.
- **Captions may cross the face.** No other face checks.

### 3.8 Layouts
| ID | Layout | Rects (1080×1920) | Face |
|---|---|---|---|
| **L-1** | Full-frame talking head + caption stack (52–100% of a reel) | caption block x ≈ 120–960, its top 40–80 px under the chin (≈ y 870–1150 at framing A; measured 990–1250) | full frame |
| **L-2** | L-1 + chest-band graphic (badge, stars, pill, mini cards, own-content card, light line) | y 950–1650, x 150–930 | full frame above it |
| **L-3** | Full-screen step slide (43% of jw1) | card x 70–580, y 540–1447 (measured 138–572 × 575–1345); list x 620–980; badge (200, 420); `CAP-SUB` y ≈ 1500–1570 | **absent** |
| **L-4** | Speaker card / oval / carousel card on the light canvas | card x 268–812, y 583–1199 → x 298–773, y 648–1123; oval x 378–702, y 760–1119; carousel x 413–925, y 501–1417; this edition: card ≥ 680 px wide, oval ≥ 480 px | whole, ≥ 40 px above the hair |
| **L-5** | Faceless light canvas (35% of jw2) | full | **absent** |
| **L-6** | Filmstrip hook | centre card ≥ 600 wide; text above; badge row y ≈ 1360 | in the centre card |
| **L-7** | L-1 + chest window (44% of jw3) | window x 110–970, y 960–1444 (measured 227–853 × 976–1292); checklist y ≈ 1480–1620; `CAP-SUB` just under the chin | full frame above it |
| **L-8** | L-1 + portrait card / glass checklist card | x 300–780 / x 220–860, from under the stack (measured 367–713 × 968–1581 / 313–767 × 976–1640) | full frame above it |
| **L-9** | Full-screen cinematic cut-away (31% of jw5) | full | **absent** |
| **L-10** | Dimmed inset | x 97–961, y 205–1706, −60% exposure on black | whole in the inset |
| **L-11** | L-1 + glass tabs, foreground defocused | tiles ≈ 162 px at y ≈ 1555; title y ≈ 1360 | full frame |
| **L-12** | **Data dock** (this edition) | speaker card 4:5, x 160–920 (760 wide), y 170–1120, radius 24, set-hue glow; the data object below it, x 90–990, y 1160–1640 | whole, ≥ 40 px above the hair |

- **Never collapse a divided layout into one box:** the slide keeps card **and** checklist side by side; the canvas card keeps its context cards; the chapter keeps window **and** checklist.

### 3.9 Safe zones (Instagram)
- Key text inside **x 100–980, y 200–1650**. The bottom ≈ 270 px is left to the platform UI (fix: jw5's DM card sat at y 1700–1850).
- The right ≈ 110 px holds no text below y 1000 (badges may exit through it).
- Face zone: from the head top to the chin (≈ y 380–830 at framing A) carries captions at most, never graphics.

### 3.10 Adaptation (marked): one person, an ordinary room, their own camera
Joseph films in a lit studio with a coloured wall and a podcast mic in shot; most users won't. Only devices observed in these reels are re-applied:
- **No coloured set:** take the accent from the strongest hue in the user's background (a lamp, a wall, a shirt). In a neutral room use the purple family (jw1/jw4) for SLIDES/ONBODY, or the light canvas (jw2) for CANVAS: both carry the look whatever the room.
- **No mic in shot:** the caption stack keeps its y (990–1250).
- **No raised hand:** the badge grows at its fixed spot (as jw3 does at (222, 1119)); holograms sit at fixed chest positions.
- **Handheld selfie:** the tight-footage fix (§3.7: full screen with the text moved, or a card on the canvas the footage fills; never over its own blur) in every layout; no added punch-ins (the drift already moves); CANVAS and SLIDES suit it best (he is a card or absent).
- **Wide or standing footage:** crop to framing A first.

---

## §4 Colour tokens

### 4.1 Core tokens (all formats)
| Token | Hex | Use |
|---|---|---|
| `capWhite` | `#FFFFFF` + soft dark drop shadow (~6 px blur, 40%) | Every talking-head caption |
| `slideText` | `#DCDEEE` | Slide titles, checklist rows, footer (jw1) |
| `rimLight` | `#E1DCEA` (purple sets) / `#DFE6F6` (blue sets) | 2–4 px badge outline |
| `glassDark` | `#2F2C36` @ ~75% (purple) / `#193659` (teal) | Own-content card ("watch the full version") |
| `deskBlack` | `#06050A`–`#0B0937` | The crushed bottom of the studio frame; never brightened |

### 4.2 Accent families (one per reel, from the set)
| Family | Set it came from | Badge | Glow / rim | Lines and bars | Slide / card |
|---|---|---|---|---|---|
| **Purple** (jw1) | purple practicals #4C137F–#8328D2 | `#8628D5`, lighter top | card rim `#ECBAE6` → `#F9D0FE`, purple outer glow | — | canvas `#000C25` top → `#0A0D3E` mid → `#330556` bottom + soft purple bloom lower left |
| **Indigo** (jw4) | wall #170051 → #260084 | `#9034CA` | stars `#993AD0` | light line `#4F0BBF` → `#8754CC`; underline `#5423A9` → `#9D3DDF` | glass `#321B74` (pill), `#14043F` translucent (card) |
| **Teal-cyan** (jw3) | wall #2C3E51 / #184A71 | `#1091CA` | window rim `#426BB1`, glow `#1E4583` | table bars `#4DDEE6` → violet | hook canvas `#D0D9DF`, text `#031425` |
| **Light canvas** (jw2) | blue studio #0B1E4F → #1E3B68 | — | card glow ≈ `#5AA0E0` (guess) | teal gradient `#46B9CF` → `#115B93` | canvas `#E8F2F7`; gradient `#C6E4FB` → `#DBEDFC`; punch slide `#064B90` with `#DAEFFD` text; navy text `#0C4681`/`#074887`; script navy `#154776`/`#224F82`; grey numeral `#6A7881` |
| **Trailer** (jw5) | wall #1F1942, warm tube #FFF6D9 | — | rays `#BFD4FF`, chrome steel-blue | glitch accents magenta `#FF2D7A`, green, cyan (burns only) | 3D dark `#0B1A2E`; showcase `#131113`–`#1C1C1D`; paper floor `#B3B3B3`–`#C0C0C0`; glass `#68676C` / `#464547` |

### 4.3 Meaning of colour
- **The set's hue = the house:** every graphic repeats the studio light, so talking head and slides feel like one world (jw1).
- **White = the voice:** captions always white; emphasis is font, never colour (N4).
- **Light canvas = an idea, dark studio = the person** (jw2's pattern break every 3–6 s); the deep-blue slide = the punchline, once per reel.
- **Brand colours** only inside their own thumbnail (jw2's stack glows match each card). **Trailer only:** one second accent for one section (jw5's green chrome) and glitch colours inside burns.

### 4.4 Footage look (don't fight it)
Moody, low-key, high contrast; one saturated practical colour on the wall; a neutral key on a natural face; crushed blacks at the desk. Keep it as shot, or a touch richer. Grade only to match takes. The trailer is more contrasty and saturated (a trailer grade), but the skin stays natural.
- **Never pale** (the creator's direction, 12 Oct 2026): never desaturate, fade or lift the blacks of the speaker as a look; deep blacks, the set's hue saturated, skin warm and natural. A desaturated object inside a result card (jw1's step "desaturated") is the step's content, not a grade on him; the light canvas (jw2) is a background colour, never a wash over his face.

---

## §5 Type tokens and caption systems

### 5.1 Font map (all bundled)
| Role | Observed (guess where marked) | Bundled font |
|---|---|---|
| Script lead / emphasis word | Edwardian Script (jw4, per his own breakdown in jw3); Great Vibes / Pinyon-like (jw1, jw2 guess) | **Pinyon Script** (`PinyonScript-Regular.ttf`) |
| Caption sans (connectors + bold nouns) | Coolvetica (jw4, per jw3); Poppins-like (jw1 guess) | **Poppins** Regular / Medium / SemiBold / Bold |
| Slide titles, footer, callouts (jw1) | Montserrat SemiBold / Regular (guess) | **Montserrat** VF (600 / 400) |
| Chapter titles, hook canvas text, labels (jw2, jw3) | SF Pro / Inter-like | **Inter Tight** VF (400–600) |
| Giant thin numeral (jw2) | thin/regular grotesk | **Inter Tight** VF 200 |
| Outline mega-word (jw4) | Coolvetica, hollow | **Poppins** Bold, 2 px white stroke, no fill |
| Trailer caption | Neue Montreal / Helvetica Now Light Italic (guess) | **Inter Tight Italic** VF 300 (caps) |
| Trailer emphasis caps | bold italic caps | **Inter Tight Italic** VF 800 |
| Trailer serif word ("been seen") | Fraunces / Playfair Bold (guess) | **Fraunces** VF 700 |
| Trailer chrome title | extruded bold italic caps | **Inter Tight Italic** 900 with a chrome gradient, rays behind |

Pre-load every font before frame 0; script words render with the same shadow as the sans.

### 5.2 `CAP-STACK`: the mixed script + sans stack (the house caption, jw1–jw4)
- **Composition:** 2–3 stacked lines, 3–8 words. The lead or emphasis word in script (*This*, *Three Steps*, *First*, *Design*, *nothing*); function words small sans regular; the key noun or number sans bold and large. Lines overlap 10–20 px; small words tuck into the gaps.
- **Sizes:** script **110–150 px** font (measured ≈ 100–140); bold noun **96–120 px** (85–110); a year or number up to ≈ 140 px; connectors **≥ 60 px** (fix: 45 px).
- **Place:** x ≈ 120–960, centred near x 470–540, **just under the chin**: the block's top 40–80 px below `FACE(n).chin` (≈ y 870–1150 at framing A; the references sat it lower, y 990–1250), so the eye meets it the moment the frame is full of his face. Over the mic is fine; on tight footage it may cross the chin. `#FFFFFF`, soft dark shadow, no stroke, box or colour.
- **Animation:** word-by-word append, each word from ~20% with a slight blur over **4–5 f** (jw1 "taking" f34 → f38), on its syllable (0–2 f early); the block clears in 1 f on the next phrase. ~60% of talking time (jw1), most of jw4; `CAP-PLAIN` takes the rest, so **every spoken word is seen**. This edition (EV-6): the script word **writes itself** along its stroke over 6–8 f, its glow 2 f behind; the bold noun lands at 104% and settles to 100% in 3 f.

### 5.3 `CAP-PLAIN`: one or two plain words (jw1–jw4)
Poppins SemiBold/Bold **72–88 px** (measured ≈ 60–75), white, soft shadow, centred x ≈ 540, just under the chin (baseline ≈ chin + 120…160; measured y ≈ 1110–1160); 1–2 words swapped per word with a 2–3 f fade; for filler, connectives and the CTA run-in; a word may enter grey and turn white (jw4).

### 5.4 `CAP-CAPS`: the trailer caption (jw5)
All caps, Inter Tight Italic 300, **≥ 84 px** font (measured ≈ 80), white with a soft bloom, centred x 540, just under the chin (measured baseline y ≈ 1250, ≈ 1130–1360 on close punches); 2–3 words hard-swapped per phrase with a ~4 f blur-fade. Key lines get a stacked emphasis block: bold italic caps 65–90 px, light italic caps, a serif bold word ≈ 75 px, a script word ≈ 100 px, appended word by word. The viewer's imagined question names the creator in bold quotes ≈ 90 px.

### 5.4a `CAP-SUB`: the slide and window line (this edition)
Every spoken word is seen, even when he is off screen. On a full-screen slide, a canvas beat without its own kinetic words, and inside a chapter window, the voice runs as **one line**: Poppins SemiBold **60–64 px**, white with the soft shadow (navy `#0C4681` on the light canvas), 2–5 words, hard-swapped on the phrase onset with a 3 f fade. Place: slides y ≈ 1500–1570 under the card; window chapters just under the chin, above the window; the canvas y ≈ 1500. It **steps aside** (a 3 f fade) while a checklist row, title, callout or kinetic word is carrying the same words, and returns on the next phrase. Never two lines, never a box.

### 5.5 Slide, canvas and label text (house values; the reference value in brackets when it was a fix)
| Element | Font, colour, place | House size |
|---|---|---|
| Slide title (jw1) | Montserrat 600, `#DCDEEE`, left x ≈ 340, centre y ≈ 420, beside the badge | ≥ 72 px (52) |
| Slide checklist row (jw1) | ✦ sparkle bullet, x 620–980, pitch ≈ 120 px from y ≈ 620 (measured x ≥ 600, pitch 110), wraps to 2 lines | ≥ 52 px (36) |
| Slide callout (jw1) / window callout (jw3) | 2 px white leader line + label | ≥ 52 px (32–36) |
| Slide footer (jw1) | Montserrat 400, centred y ≈ 1465, types on ~10 f; the user's own CTA line or nothing | ≥ 48 px (40) |
| Kinetic word on the canvas (jw2) | navy Poppins Bold, centred y ≈ 950 | ≥ 84 px |
| Big words over a card (jw2) | navy bold at y ≈ 640, word by word | ≈ 130 px |
| Gradient headline (jw2) | bold, teal → navy, the camera pans along it | ≈ 100 px |
| Punch slide (jw2) | semibold `#DAEFFD` on `#064B90`, fades up from 30% over ~12 f | ≈ 115 px |
| Grey→black label (jw2, jw3 hook) | Inter Tight, `#1E2A38`/`#031425`; each new word grey, black when the next arrives | ≥ 64 px (40–50) |
| Navy script title (jw2) | script `#154776` ≈ 110 px + a small black sans line, letter-by-letter fade | sans ≥ 60 px (40) |
| Giant numeral (jw2) | ≈ 320 px tall, grey `#6A7881` → transparent, thin, beside a navy script word | as measured |
| Chapter title (jw3) | Inter Tight 600 white, left x ≈ 356, centre y ≈ 1119, letter reveal ~10 f | ≥ 80 px (≈ 72) |
| Window checklist (jw3) | white, cyan ✦, rows y ≈ 1480 / 1560 here (measured 1354 / 1430 / 1506), x ≈ 130 | ≥ 52 px (40) |
| Keyword in quotes (jw3) | white bold, above the own-content card at y ≈ 990 | ≈ 90 px |
| Italic label (jw4) | white italic 600 at y ≈ 1119 beside the light line at x ≈ 270 | ≥ 56 px (≈ 48) |
| ▶ bullet (jw4) | white, glowing play triangles, rows under the stack (measured y ≈ 1063 / 1143) | ≥ 52 px (38) |
| Outline mega-word (jw4) | hollow, 2 px white stroke, x 259–821, centre y ≈ 1150; bold subtitle ≈ 70 px at y ≈ 1320 | ≈ 270 px |
| Glass checklist items (jw4) | white under a title + gradient underline; the card's height follows its rows | ≥ 52 px (30–40) |
| Rating label (jw4) | above the stars (≈ 97 px measured, ≥ 120 px here) | ≥ 60 px (36) |

### 5.6 Badges, tabs, pills, small text
- **Diamond badge** (SD-1): a rotated rounded square ≈ 200–240 px (measured 200–205; feature badge ≈ 300 px; row badges **≥ 170 px**, never under 150 px: jw3's hook row was ≈ 60 px), the family's fill with a lighter top, a 2–4 px `rimLight` outline, a ~30 px glow, a white bold numeral ≈ 80–90 px.
- **Glass tabs** (trailer): ≈ 162 px frosted tiles, active = bright rim, inactive 30%; a bold italic caps title (cap ≈ 97 px) + script word (≈ 120 px) above.
- **Keyword pill** (trailer): "DM *OR* COMMENT" (≈ 70 px, "OR" in thin outline) over a frosted pill (x ≈ 281–982, y ≈ 1318–1512, radius ≈ 30, `#464547`) with the keyword ≈ 150 px.
- **Island pill** (jw4) and **own-content card** (jw1, jw3): their small body/meta text (≈ 22–30 px) is texture; a ≥ 52 px title and the voice carry them.

### 5.7 Readability floor (fix, all formats)
| Text | Floor at 1080×1920 |
|---|---|
| Caption words (any style) | ≥ 60 px font (the stack's bold noun ≥ 96 px; `CAP-PLAIN` ≥ 72 px) |
| Titles (slide, chapter, section) | ≥ 72 px |
| Labels, callouts, checklist rows, bullets, card titles | ≥ 52 px |
| Footer / secondary lines | ≥ 48 px |
| Screenshot or UI body text | may be smaller **only** as texture, with a ≥ 52 px label or the voice carrying its meaning |
| The hero object | result card ≥ 640 px wide on a slide (≥ 860 alone), window ≥ 860, canvas object ≥ 860, a group x ≈ 120–960, the speaker card ≥ 680 (dock ≥ 760) |

---

## §6 Hook system

### 6.0 The 10× hook (this edition)
- **Frame 0 is a picture, not a person waiting:** him full frame, sharp, mid-word and mid-gesture, the first caption word written, **and** the set's glow already alive (a soft hue bloom behind him); never an empty or blurred frame.
- **The result first, by ~0.5–1 s:** the finished look the reel teaches arrives as the first graphic (proof cards sliding in behind his matted head, H-1; the rating gap, H-4; the filmstrip, H-3; the shrink into a proof grid, H-2), with its glint (EV-3) and a soft whoosh.
- **6–8 visual changes in the first 3 s,** each on a word: the stack appending, the first graphic, a punch, the second graphic.
- **The countable promise by 3–5 s,** the badge row staggering in (P-02), each badge with its pop and glint: the open loop the whole reel pays off (EV-8 at the recap).
- **Sound inside the first second:** the voice opens; the first graphic lands with its soft cue; nothing is ever louder than the voice.
- Pick three titles for the hook and keep the one that promises most.

### 6.1 What the hook must do in about 3 seconds
- **Frame 0:** the speaker full frame, sharp, mid-word, with the first caption word written (M3). Never black, never blurred, never an empty canvas.
- **6–7 visual changes in the first 3 s** (measured 7, 6, 6, 6, 7): words appending, the first graphic (f9–f21), a jump cut or a shrink, a second graphic, a slow push.
- **A picture of the claim by ~1 s:** proof cards of the thing (jw1, jw2, jw3), a rating that shows the gap (jw4), a title (jw5).
- **A countable promise by 4–7 s:** "three steps", "six pillars", "one thing", "one of these three things", with the numbered badge row on screen (jw1 7.3 s, jw3 3.4 s, jw4 4.5 s) or a giant numeral (jw2 3.1 s). That row is the open loop.

### 6.2 Hook formulas (`HF`)
| ID | Formula | Shape | From |
|---|---|---|---|
| **HF-1** | **Trend claim + social proof** | "This [thing] is taking over in [year] and every single [person] wants to learn it." → "So here's a quick breakdown of how it's made." | jw1 |
| **HF-2** | **The one-reason promise** | "The reason you still can't [result] comes down to one thing and one thing only." (answered at ~40% of the reel) | jw2 |
| **HF-3** | **Effort credential + numbered list** | "This [thing] took me more than [time] to build. Here are the [N] pillars behind it." | jw3 |
| **HF-4** | **Relatable self-doubt + comparison + number** | "If you look at your [work] and you think it looks nothing like what you see on [platform], it's probably one of these [N] things." | jw4 |
| **HF-5** | **Question + name + novelty + big promise** (trailer) | "What is [the user's thing]? Well, something that's never been seen before. [It] can take any [person] just like you and within only [time] [result]." → "Don't believe me?" | jw5 (grammar only) |

### 6.3 Hook visuals (`H`)
| ID | Visual | Recipe | From |
|---|---|---|---|
| **H-1** | Proof carousel behind the head | 4 example cards (≈ 270×480, radius 16, glowing 3 px white rim, 30 px gaps) slide in from the left with motion blur (f13–30), drift left ~2 px/f along y ≈ 230–700 behind the matted head, fade at ~3.4 s; an own-content card rises ~40 px into the chest band (f12–25) | jw1 |
| **H-2** | Shrink into a proof grid | T-05 at f21 into a card among 6 dimmed examples with view chips; a grey→black label builds under him | jw2 |
| **H-3** | Reel-in-reel filmstrip | dashed rect on the chest (f5–8), filled with an example (f9–14), zoom-out into a filmstrip (T-10), text above, badge row under | jw3 |
| **H-4** | Rating comparison | P-12: "yours" 1 star (f9–15), "theirs" fills 3 f apart | jw4 |
| **H-5** | Chrome title fly-through (trailer) | T-12 with the user's own title | jw5 |
| **H-6** | Badge row of N | P-02 | jw1, jw3, jw4 |
| **H-7** | Giant numeral | T-07 to a ≈ 320 px thin grey "1" + navy script words appending | jw2 |

### 6.4 Hook timing template (≈ 0–7 s, 30 fps)
- **f0:** speaker full frame, sharp, mid-word, caption word 1 written (optional T-11).
- **f4–f50:** caption words append with the voice. **f9–f21:** the first graphic (H-1, H-3, H-4, or the shrink H-2). **~f66:** a tighter jump cut.
- **1–3 s:** the comparison or proof resolves (stars fill; "*In* **2026**" at ~f70). **3–5 s:** the promise and its badge row or numeral. **4.8–7 s:** the cut into item 1.

### 6.5 Hook text and sound
- Always captioned word by word; one big word per block ("2026", "*Three Things*", "*nothing*"); the promised count = the badges = the items.
- Teaching: no hit at f0 (the voice opens); the first graphic gets a soft whoosh (`light-woosh-7119`) and its glint, the reveal a shimmer (`tech-appear-2025-02-11-05-48-28-utc-tech-appear-2`; measured jw2 ≈ 4.3 s, guess), the badge row the list cue per badge (§11.2). Trailer: a whoosh under the title fly (guess): `whoosh-2025-01-08-02-32-33-utc-whoosh-03`. The full palette is in §11.

### 6.6 Endings and CTA (`E`), always the user's own
| ID | Ending | Recipe | From |
|---|---|---|---|
| **E-1** | **Own-content card + "go check it out"** | Plain captions "If you would like to watch me…", then a dark glass card (x 140–940, y 1160–1415, radius ≈ 20) with the user's own video thumbnail and title rises ~40 px over 12 f; the last stack "*Just* go *ahead* and check it out"; hard stop mid-smile | jw1 |
| **E-2** | **Comment keyword in quotes** | Plain captions, then the own-content card scales up at the chest (~8 f, x 274–803, y 1052–1458), then the user's keyword in bold quotes (≈ 90 px) above it; hard stop with the card up | jw3 |
| **E-3** | **The reminder line** | A spoken reminder ("So this is your reminder… one step closer to your goal") as the last caption stack; hard stop on the last word (fix: no dark last frame) | jw2 |
| **E-4** | **Recap badge row** | "Remember these three tips…": the 1-2-3 row returns (stagger pop) under the last stack; hard stop | jw4 |
| **E-5** | **Keyword pill** (trailer) | "WHAT ARE YOU / GOING TO DO?", then "DM *OR* COMMENT" types on, the frosted pill grows with the user's keyword, holds ~5–7 s | jw5 |

---

## §7 Structure devices

### 7.1 Structure devices (`SD`)
- **SD-1 Diamond badge** (§5.6) at every ordinal of a teaching reel: in the hand, on the slide, beside the chapter title, in the rows.
- **SD-2 Badge row of N** (H-6) for the promise and the recap (E-4).
- **SD-3 Giant numeral + script word** (H-7) for a single-answer promise.
- **SD-4 Glass tabs** (trailer): the row shifts one slot left per stage, the active tile brightens (~6 f), the mic defocuses.
- **SD-5 One identical template per item:** only the content changes between items.

### 7.2 The item ritual (one recipe per item, identical every time)
- **`FMT-SLIDES`** (jw1): jump cut on the ordinal → badge from the fingertip (P-01) + the step's name in the stack → captions clear 2–3 f early → T-02 to the slide 0.3–1.0 s after the step noun → one row per spoken item, the card changing on the same frame (P-06) → footer ~1 s after the card → T-03 back on the next ordinal.
- **`FMT-CANVAS`** (jw2): the claim on the talking head → shrink into the card among context cards (T-05) on the context noun → one faceless picture per abstract noun (P-21…P-25) → T-09 back on the next sentence.
- **`FMT-WINDOW`** (jw3): jump cut on "The Nth pillar" → badge at (222, 1119) + letter-reveal title → both fade (4 f) → window rim, then content (P-08) → callouts (P-09) → checklist rows → window fades just before the next badge. No running captions inside.
- **`FMT-ONBODY`** (jw4): jump cut + punch on "Number one" → badge from the fingers → the reason in the stack → the badge flips off on the next sentence → one prop per claim → recap row at the end.
- **`FMT-TRAILER`** (jw5): a section title over the tabs → talking head with `CAP-CAPS` → a cut-away on the key noun (1–11 s) → back on a phrase boundary; T-14 only at big turns.

### 7.3 Open loops (retention)
The badge row (jw1, jw3, jw4); "one thing" answered ~40% in (jw2); the 1-star vs 5-star gap (jw4); "don't believe me?" answered at once (jw5); the own-content card in the hook (jw1). This edition adds the result card's journey (EV-1): the viewer stays to see what it looks like after the last step. Close every loop on screen.

---

## §8 Graphics system

### 8.0 The 10× layer (what the best motion designer adds to every landing)
**Animation principles, applied to this style:**
| Principle | How it shows up here |
|---|---|
| **Anticipation** | A 3 f glint at the fingertip before the badge pops; the slide's canvas glow swells 2 f before the card grows; the window's rim draws before its content; the speaker card tilts 2° before it shrinks |
| **Squash & stretch** | The badge pops 10 → 112 → 100% with a 1-frame squash (105 / 95%) on the land; the island pill stretches 4% past its width and snaps back |
| **Follow-through & overlap** | Stack words overlap their blur-ins (each starts 2 f before the last finishes); the glow trails the badge by 2 f; a card's shadow and rim settle 2–3 f after the card; a row's bullet and text wipe overlap |
| **Arcs** | The badge flies on an arc from his fingertip to its slide slot (EV-2); carousel cards swing on a curve; the flip-off turns on an arc to the right edge |
| **Slow in / slow out** | Strong ease-out on every arrival, ease-in on exits, ease-in-out on the shrink and the grow home; nothing linear except typing |
| **Staging** | One hero per frame: when a row lands, the result card pushes 1.0 → 1.04 and the older rows dim to 55% (EV-4); when he speaks to camera, nothing moves but the stack |
| **Secondary action** | Slides and canvases drift ~2%; the canvas bloom breathes (±5% every ~2 s); a held badge's glow pulses once a second; sparkle bullets twinkle once on landing |
| **Timing** | Pops 7–10 f, card grows 15 f, shrinks 12–25 f, holds as long as the line; something new every 1–2 s |
| **Exaggeration** | One payoff per reel goes big: the result card's before → after scrub through every step (EV-1), or the recap constellation (EV-8) |
| **Solid drawing / depth** | Cards are glass with a 1 px inner highlight, a soft shadow and a set-hue rim; proof cards behind the matted head drift at two speeds (EV-5) |
| **Appeal** | Deep studio colour, crisp white type, one glowing hue, real results; it looks like a top motion designer's own reel |

**Design hierarchy (every frame):** 1. the result (the card, the window, the prop) or his face · 2. the badge (the number) · 3. the bold noun of the stack or the slide title · 4. rows, callouts, labels · 5. everything else, dimmed or drifting.

**Effects toolkit:** soft outer glows in the family hue on every card, badge and window; a specular glint sweep (EV-3) once per landing; frosted glass (≈ 20 px backdrop blur, 1 px inner highlight) on cards and pills; a set-hue bloom on the slide canvas (lower left, breathing); depth of field on the proof cards behind the head; motion blur on fast moves (the badge arc, the carousel, T-03's zoom blur); the defocused foreground mic (trailer). **Never** in the teaching formats: burns, glitches, RGB splits, light leaks, flashes, shake, or grain and vignette on his face.

**Calm, never idle:** the energy is precision, not noise. Nothing on screen holds still for more than ~2 s (a drift, a row, a glint, a punch), and nothing shouts.

### 8.1 Graphic families (`G`)
- **G-1 Markers:** badges, badge rows, glass tabs, sparkle and ▶ bullets (all formats).
- **G-2 Result cards:** the changing 9:16 card, mini cards, the chest window, the portrait card (SLIDES, WINDOW).
- **G-3 Lists:** slide checklist, window checklist, glass checklist card, light-line labels (SLIDES, WINDOW, ONBODY).
- **G-4 UI objects:** island pill, search bar, profile-style card, own-content card, star rating.
- **G-5 Canvas objects:** giant numeral, kinetic words, gradient headline, carousel, orbit, card stack, holograms (CANVAS).
- **G-6 Annotation:** callouts, outline mega-word, mascot badge.
- **G-7 Trailer pictures:** chrome titles, 3D worlds, tilted grids, count-up floor, proof stack, flurry, showcase, keyword pill (TRAILER).

### 8.2 Staging choreography
The element lands 0–3 f before its word, enters by its token (§10.1), holds while the line runs (slides and canvases drift ~2%), and leaves by a hard cut or a 4–6 f fade just before the next element. One text layer at a time.

### 8.3 Pattern specs (`P`; timings in §10.1)
| ID | Pattern | Recipe (1080×1920) | From |
|---|---|---|---|
| **P-01** | Badge from the fingertip | Spawns at the raised fingertip (x ≈ 260–290, y ≈ 1030–1330), pops, parks beside the hand | jw1, jw4 |
| **P-02** | Badge row | x 300/540/780 at y ≈ 1430 (150 px) or x 313/540/760 at y ≈ 1361 (205 px), staggered; this edition ≥ 170 px badges at x 250/540/830 | jw1, jw3, jw4 |
| **P-03** | Badge flip-off | Y-axis turn + slide to x ≈ 900–960 on the next sentence | jw4 |
| **P-04** | Mascot badge | On "brings it to life", the numeral becomes two dot eyes | jw4 |
| **P-05** | Step slide | §3.2; badge + title by f4, card grows, slide drifts | jw1 |
| **P-06** | Show-the-result checklist | Each row on its item; the result card's content hard-swaps on the same frame | jw1 |
| **P-07** | Mini cards A vs B | x 120–510 and 570–960 from under the stack (measured x 205–475 and 598–868, y 1108–1592), script labels, scale-pop | jw1 |
| **P-08** | Chest window | x 110–970, y 960–1444 (measured x 227–853, y 976–1292), radius 20, 3 px rim + glow; rim, then content; the user's example clip | jw3 |
| **P-09** | Callout | 2 px white line from the object or window corner, then a ≥ 52 px label | jw1, jw3 |
| **P-10** | Portrait UI card | x 300–780 from under the stack (measured x 367–713, y 968–1581), white, radius ≈ 12, cyan glow, slow dissolve; a 3D drift over the user's own board | jw3 |
| **P-11** | Bars in the window | effect rows with bars `#4DDEE6` → violet, filling as each is spoken | jw3 |
| **P-12** | Star rating | 5 stars ≥ 120 px, x 190–890 (measured ≈ 97 px, x 313–767, y 1382–1469); 1 filled for "yours", all filled L→R for "theirs"; label above | jw4 |
| **P-13** | Island notification | capsule 150 → 860 px (x 110–970; measured 756 px, x 151–907, y 1048–1199), icon, ≥ 52 px title, "Open"; collapses in reverse | jw4 |
| **P-14** | Light-line labels | vertical glow line x ≈ 270, y 950–1285; italic labels swap per item | jw4 |
| **P-15** | Outline mega-word | the negative word hollow behind a ≈ 300 px badge, bold subtitle under | jw4 |
| **P-16** | Glass checklist card | x 220–860 from under the stack (measured x 313–767 from y 976), radius ≈ 16, title + gradient underline, rows on their words | jw4 |
| **P-17** | Proof carousel behind the head | H-1, the speaker matted in front | jw1 |
| **P-18** | Shrink into a card | §3.3, T-05 | jw2, jw3 |
| **P-19** | Orbit | the speaker in the oval; ~10 of the user's thumbnails fly in and orbit; an outlined big number behind | jw2 |
| **P-20** | 3D carousel | curved ring of the user's clips (centre x 413–925, y 501–1417, radius ≈ 30), one card per ~20 f | jw2 |
| **P-21** | Card flip to UI | the centre card turns −30° → 0 into a profile-style card (x 173–907, y 778–1140); big navy words land over it | jw2 |
| **P-22** | Search bar | navy pill x ≈ 140–940 (fix: 680 px wide in jw2), y ≈ 900–1010, typing the question, a label above | jw2 |
| **P-23** | Giant numeral | H-7 | jw2 |
| **P-24** | Word-by-word slide | one navy word per spoken word by hard cut, then the deep-blue punch slide | jw2 |
| **P-25** | Staggered stack | 3 cards (x 400–907; y 566–842 / 853–1119 / 1156–1393) grow from points, each glow matching its card, a script title around them | jw2 |
| **P-26** | Palm holograms | icons in cyan wireframe diamonds rise from the palms, labels ≥ 52 px (fix: 36) | jw2 |
| **P-27** | Chrome title | H-5 | jw5 |
| **P-28** | Glass proof stack | frosted cards of the user's real posts slide up and tilt in on each "this" (x 205–972, y 1100–1426, 5–10°) | jw5 |
| **P-29** | Screenshot flurry | 4–6 white screenshots of real results, 4 f each, vignetted | jw5 |
| **P-30** | Paper-floor count-up | white 3D grid floor, extruded numerals counting to the real value over ~1.5 s, camera dolly | jw5 |
| **P-31** | Smoky showcase | `#131113` stage, one of the user's examples (x 238–842, y 238–1307) + "NAME *Style*" label at y ≈ 1470; hard cut per name | jw5 |
| **P-32** | Tilted grid | a tilted dark grid of thumbnails with depth of field and drift; the question over it | jw5 |

### 8.4 Line → pattern lookup (start here for every sentence)
| The line says… | Use |
|---|---|
| "There are N steps / things / pillars" | P-02 (H-6) |
| "First / Number one / And lastly" | P-01 (or the fixed spot) + the item's name in the stack |
| A step's name / each item of the step | P-05 slide / P-06 row + the result changes |
| "Two types: A and B" | P-07 |
| "Like this / for example" · a named part of it | P-08 window · P-09 callout |
| "We walk the viewer through the UI" · a list of effects | P-10 · P-11 or P-16 |
| "Yours vs theirs" | P-12 |
| A named file, resource or app | P-13 |
| Consequences ("you'll get lost") | ▶ bullets |
| Three short named problems · a negative word · "brings it to life" | P-14 · P-15 · P-04 |
| "This is everywhere / taking over" | P-17 |
| "Look around / so many / hundreds of" | P-20 or P-19 |
| "One thing" · a question people type | P-23 · P-22 |
| "It's not because you don't have X" | X alone with its label line (N3) |
| "None of them were born this way" | P-21 (the user's own card or a drawn generic) |
| A blunt verdict · two ingredients · "so many options for you" | P-24 · P-26 · P-25 |
| Trailer: the name · "don't believe me?" · a number · a list of modules · "how is this different?" · "you might be wondering" | P-27 · P-28 → P-29 · P-30 · SD-4 + P-31 · P-32 · L-10 |
| A number, a comparison or a result to see (this edition) | L-12 data dock: he docks above, the number, rating, bars or result big below (P-12, P-11, a count-up drawn in the family hue) |
| Opinion, filler, connective words | `CAP-PLAIN`, no graphic |

### 8.5 Density and variety
A graphic event every ~1–2 s (jw4 ≈ 1.5 s; jw2 0.5–1 s on the canvas; jw5 ≈ 75–90 changes in 120 s). Variety comes from content inside one template per item (SD-5). One list on screen at a time; never a second family in the chest band beside a card. Every graphic landing gets its sound (§11); every spoken word its caption (§5).

### 8.6 Asset rules
- **The user's own work:** clips for windows and result cards, thumbnails for carousels and orbits, screenshots for proof stacks; never other creators' reels or profiles (N8).
- **Drawn in code** in the family's hue: badges, tabs, pills, search bars, ratings, checklist cards. Stock cut-out objects may be a step's content inside a result card (jw1).
- **Real results only:** proof screenshots are the user's (small text as texture, a ≥ 52 px label or the voice says what they prove); no fake numbers, testimonials or view counts.

### 8.7 Elevated devices (new in this edition)
| ID | Device | When | What runs | Sound |
|---|---|---|---|---|
| **EV-1** | **The living result card** (the spine) | `FMT-SLIDES`, any multi-step build | One result card carries the whole reel: slide 2 opens on slide 1's finished result, each row transforms it on its word; at the payoff the card **scrubs back through every state** (a 24 f before → after wipe with a glowing edge), landing on the finished look | `selection-click` per row (the list cue); `appear-magic` on the scrub's end |
| **EV-2** | **The badge carry** | Every ordinal into a slide or window | The badge pops at his fingertip on the ordinal; on the cut it is **already flying**: the same screen position on the slide's first frame, travelling on an arc to its slot (10 f, ease-out, motion blur), landing with a squash | `tech-appear-2025-02-11-05-48-28-utc-tech-appear-1` / `-3` on the pop (rotate); `swsh-arrow-feather-high-sdcl-archery166` on the flight (low) |
| **EV-3** | **The glint** | A badge, card rim, window rim or title landing | A soft specular band (≈ 12°, 40 px wide, 30% white, additive) sweeps across it once in 10 f, 2 f after it lands | `short-shine-2025-08-27-06-45-01-utc-short-shine-1` / `-2` / `-3` (very low, rotate) |
| **EV-4** | **Focus on the row** | Each checklist row or callout | The result card pushes 1.0 → 1.04 toward the change; the older rows dim to 55%; the new row's bullet twinkles | covered by the list cue |
| **EV-5** | **Depth behind the head** | H-1, P-17, "this is everywhere" | Proof cards behind the matted head in two layers drifting at different speeds (2 px/f and 1 px/f), depth of field on the back layer; a thin set-hue rim where the matte meets the cards | `light-woosh-7119` as they slide in |
| **EV-6** | **The pen stack** | Every `CAP-STACK` with a script word | The script word writes itself along its stroke (6–8 f), its glow 2 f behind; the bold noun lands at 104% and settles | none (the voice carries it) |
| **EV-7** | **The glide** | Every card, oval and L-12 dock | Shrink: a 2° anticipation tilt, then T-05 eased, the card's glow and shadow settling 3 f after; return: the grow home (T-17) with a 2% overshoot | `air-low-woosh` / `whoosh-2025-01-08-02-32-33-utc-whoosh-05` (low, rotate) |
| **EV-8** | **The recap constellation** | `RECAP`, or the run-in to the CTA | The badge row returns, each badge holding a tiny thumbnail of its step's result; a glowing line draws L → R through them (16 f) and the finished result blooms above | the list cue per badge; `05405-shine-ding` on the bloom |

---

## §9 Transition system (`T`)

### 9.1 Transition library (frames at the named reel's fps)
| ID | Transition | Frames | Recipe | Sound |
|---|---|---|---|---|
| **T-01** | Jump cut + punch change (default) | 0 | In the gap between phrases; framing A ↔ B (+5–15%; jw4 100 ↔ 108%, jw2 100 ↔ 110–115%); on every ordinal | none |
| **T-02** | Hard cut to a slide + card grow | 15 | Badge + title by f4 (carried in by T-18 after an ordinal); the card grows 20 → 100%, ease-out, moving down into place (jw1 f331–346) | `woosh-2025-08-27-02-12-31-utc-woosh-02` (low) |
| **T-03** | Zoom-blur exit | 5 + 2 | The slide scales up ~6% with radial blur (jw1 f536–541); cut; 2 f of matching blur on the talking head | `whoosh-back-zoom-swoosh-fast-camera-in-and-out-ocp-1707-23-01` (low) |
| **T-04** | Card-enters-large settle | ~10 | 115% → 100% with motion blur (jw1 38.53 s) | `simple-whoosh-382724` (low) |
| **T-05** | Shrink into a card | ~25 | Full frame → 70% (f10) → 47% (f24), ease-out, crop 9:16 → 4:5, radius-20 rect with a soft glow from f1, canvas and context cards fade in (jw2 f21–45); this edition eases in and out with a 2° anticipation tilt (EV-7) | `air-low-woosh` / `light-woosh-7119` (low) |
| **T-06** | Card → oval | ~12 | T-05 with the radius animating to 50% while the camera pulls back and thumbnails orbit in (jw2 33.7–34.1 s) | `ui-sparkle` (very low) as the thumbnails orbit in |
| **T-07** | Virtual-camera cut | 0 | A hard cut to ~2.5× on the same canvas, then a drift ~3 px/f (jw2 3.10 s) | `tech-appear-2025-02-11-05-48-28-utc-tech-appear-2` (low) |
| **T-08** | Card flip to UI | ~12 | The centre card turns −30° → 0 while morphing and scaling down (jw2 14.2 s) | `swoosh-2025-01-08-03-02-26-utc-swoosh-03` (low) |
| **T-09** | Hard cut dark ↔ light | 0 | Studio ↔ bright canvas; the luminance jump is the transition (jw2 ×6) | `abstract-hit-sub-bass-07` (felt; measured as a possible thump, jw3 5.0 s, guess), ≤ 2 per reel |
| **T-10** | Reel-in-reel zoom-out | ~25 | Dashed rect draws (4 f), fills (6 f), the frame scales into a filmstrip card (jw3 f5–30) | `camera-shutter-2025-02-19-17-59-23-utc-dslr-camera-shutter-v2` (low) as it becomes the filmstrip |
| **T-11** | Opening zoom-out | 6 | 130% → 100%, sharp from f0 (fix), the head whole at 130% (jw1) | none |
| **T-12** | Chrome title fly-through | 6 + 10 + 6 | Glows in with rays, holds, flies ~300% into camera with motion blur, reveals the talking head (jw5 f24–46) | whoosh (guess) |
| **T-13** | 3D panel swing | 5 | The talking head becomes a panel with a warm rim and rotates away into a 3D world (jw5 f227–231) | whoosh (guess) |
| **T-14** | Burn-glitch (trailer only) | ~8 | A burn hole with a charred edge + an RGB split reveals the next shot (jw5 ×5). **Fix:** it opens from a frame edge and the split stays outside the face box | static burst (guess) |
| **T-15** | Screenshot flurry | 4 per shot | Hard cuts through white screenshots (jw5 f439–459) | a noise riser into it (guess) |
| **T-16** | Hard end | 0 | Teaching: stop ≤ 6 f after the last word on the talking head, caption up. Trailer: cut to black | none |
| **T-17** | **Grow home** (this edition) | 12–14 | From a centred card, oval or L-12 dock back to full frame: ease-in-out, 2% overshoot, the card's radius and glow dissolving in the last 4 f; on a sentence start | `whoosh-2025-01-08-02-32-33-utc-whoosh-05` (low) |
| **T-18** | **Badge carry** (this edition) | 0 + 10 | A hard cut with the badge in flight across it (EV-2) | `swsh-arrow-feather-high-sdcl-archery166` (low) |

### 9.2 Transition grammar
| Boundary | Use | Never |
|---|---|---|
| Frame 0 | The talking head, sharp, caption on (T-11 allowed) | Black, blurred, an empty canvas |
| Between phrases / on an ordinal | **T-01** (+ a punch on the ordinal) | A whip, a flash, a dissolve |
| Talking head ↔ step slide | **T-02** in (with **T-18** when an ordinal leads in), **T-03** out | An empty canvas; animating the slide back |
| Talking head ↔ data dock (L-12) | **T-05** (12–14 f, eased) in, **T-17** out | A cut-out; staying docked past ~3 s |
| Talking head → canvas card | **T-05** / T-06 | A cut-out |
| Canvas → canvas / canvas ↔ studio | T-07, T-08, a hard cut / **T-09**, or **T-17** from a centred card | Clearing to white |
| Graphic → graphic over the speaker | 4–6 f fades, flips, island collapse | Rescaling the speaker inside a graphic beat (he moves only by T-05, T-06, T-17 and cuts) |
| Trailer sections | T-14 (≤ 5 per 2 min), T-13, T-12 | T-14 in a teaching reel |
| Last word | **T-16** | A black tail over 1 s |

### 9.3 Transition map (part of the plan, §1 step 9)
```yaml
transitions:
  - {t: 0.00,  id: T-11, note: "talking head 130→100% in 6 f, sharp, 'This' on f0"}
  - {t: 4.80,  id: T-01, note: "jump cut on 'So here's'"}
  - {t: 7.03,  id: T-01, note: "punch-in ~3% on 'There's really three steps'"}
  - {t: 11.03, id: T-02, note: "slide 1: badge+title by f4, card grows 15 f"}
  - {t: 18.07, id: T-03, note: "zoom-blur back on 'Your second'"}
  - {t: 50.37, id: T-16}
```

### 9.4 Transition budget (per 60 s)
- **SLIDES:** T-01 4–8; one T-02/T-03 pair per step (3–5); T-04 ≤ 1. **CANVAS:** T-01 6–10; T-05/T-06 2–3; T-09 4–8; T-07/T-08 ≤ 2 each. **WINDOW:** T-01 8–12; T-10 ≤ 1; T-09 ≤ 1. **ONBODY:** T-01 12–16 only. **TRAILER:** ≈ 20 cuts and changes; T-14 ≤ 3; T-12 ≤ 2; T-13 ≤ 1; T-15 ≤ 1. **Every format:** T-18 on each ordinal into a slide or window; one T-05 + T-17 pair per card or dock beat.
- Never two speaker moves within 1 s; transitions never delay the voice.

---

## §10 Motion tokens, camera, layers, finishing

### 10.1 Motion tokens (30 fps unless named)
| Token | Value |
|---|---|
| Trigger | 0–3 f before the word (trailer 2–4 f) |
| Caption append | ~20% → 100% with a slight blur, 4–5 f per word; block clears in 1 f; clears 2–3 f before a slide cut |
| Plain swap · grey → black word | 2–3 f fade · ~6 f |
| Badge pop · row stagger · flip-off | 10 → 100% over 7–10 f, slight overshoot · 4–6 f apart, 60–80 → 100% over ~6 f · ~10 f ease-in |
| Slide card grow · settle | 20 → 100% over 15 f, strong ease-out · 115 → 100% over ~10 f |
| Checklist row | bullet 3–4 f, then a L→R text wipe 8–10 f |
| Title letter reveal · footer type-on | ~10 f (trailer ~8 f) · 10–12 f, ~1 s after the card |
| Callout · window build | line 5–6 f, label 4–6 f · rim 3 f, content 6–8 f, no scale |
| Island pill · star fill · glass card | 150 → 756 px over ~6 f + content 4 f · 3 f apart · 70 → 100% over 12 f |
| Hologram · stack · carousel | ~10 f · 3 f stagger, ~20 f each · one card per ~20 f |
| Search typing | ~2 characters per frame |
| Exits · holds | 4–6 f fades · slides and canvases drift ~2% over 6 s |
| Glint (EV-3) | a 12° band, 10 f, 2 f after the landing |
| Badge carry (EV-2, T-18) | 10 f arc, ease-out, motion blur, a 1-frame squash on the land |
| Shrink (T-05) · grow home (T-17) | 12–25 f ease-in-out after a 2° anticipation tilt · 12–14 f ease-in-out, 2% overshoot |
| Row focus (EV-4) | card 1.0 → 1.04 over 8 f; older rows to 55% over 6 f |
| Script write-on (EV-6) | 6–8 f along the stroke, glow 2 f behind; bold noun 104 → 100% in 3 f |
| Trailer (23.976 fps) | caption blur-in ~4 f; glass card ~8 f; tabs in ~14 f, active swap ~6 f |

### 10.2 Camera
- Jump-cut punches A ↔ B (+5–15%) on every ordinal and about every other phrase; slow push-ins of 3–8% over 1–3 s under talk and into the CTA; the opening zoom-out (T-11).
- Trailer punches stop where the face stops (§3.6); when the footage is too tight to punch, use the next caption or a cut-away for emphasis.
- Slides and canvases have a slow "camera" drift; the trailer's 3D worlds dolly and orbit.

### 10.3 Layer order (back to front)
1. Canvas / slide / 3D world / the set's glow (never a blurred copy of his footage)
2. Cards behind the head (P-17)
3. The speaker (full, card, oval or inset)
4. Chest-band graphics
5. Captions
6. Transition overlays (zoom blur, burn)

### 10.4 Finishing
Soft outer glows in the family hue on every card, badge and window; no grain or vignette on the talking head, and never a pale grade (§4.4); every on-screen word checked; the last frame is the talking head or the CTA card, never black.


---

## §11 Sound design (D4)

**No music bed, ever.** Sound is SFX only (the creator's direction, 12 Oct 2026): never a music track, bed, drone or loop under the voice.

### 11.0 What the references do (measured)
| Format | Music in the reference (evidence only, genre a guess; we don't use it: SFX only) | Its level under the voice | SFX (guesses) | Loudness |
|---|---|---|---|---|
| `FMT-SLIDES` (jw1) | soft melodic synth pad / lo-fi | ≈ −13 dB | none; maybe a soft swish before one slide (38.2 s) | −14.3 LUFS, LRA 3.0, TP −0.3 |
| `FMT-CANVAS` (jw2) | soft tonal ambient | ≈ −15 dB | a rising shimmer into "1 Thing" (4.3–4.8 s), keyboard clicks under the search bar (7.5–8.8 s) | −14.3, LRA 2.7, **TP +1.7** |
| `FMT-WINDOW` (jw3) | soft pad/keys, constant | ≈ −15 dB | maybe a low thump on the canvas → studio cut (5.0 s) | −14.2, LRA 2.8, TP −0.1 |
| `FMT-ONBODY` (jw4) | soft sustained, **stops with the last word** | ≈ −10 to −13 dB | maybe a UI swish on the pill (13.1 s) | −14.3, LRA 3.4, **TP +1.1** |
| `FMT-TRAILER` (jw5) | bass-heavy trailer beat, wall to wall | ≈ −6 to −8 dB; rings out ~1.8 s | static bursts on burns, a noise riser into the flurry, whooshes on the swing and fly-through | −14.2, **LRA 1.4**, TP −2.2 |

- The references kept their graphics nearly silent and let a soft pad carry the calm (badges, rows and cards are silent in jw1, jw3 and jw4). **This edition drops the pad and scores the graphics instead:** quiet, glassy, precise sounds on every landing, so the motion is felt and the voice still owns the mix.

### 11.1 The palette (a motion designer's desk: glass, light, soft air)
| Role | When | Pool (ids from SOUNDS.md; rotate) | Level vs voice |
|---|---|---|---|
| **Badge pop** | P-01, EV-2, on the ordinal | `tech-appear-2025-02-11-05-48-28-utc-tech-appear-1`, `tech-appear-2025-02-11-05-48-28-utc-tech-appear-3`, `game-pop-up-2025-08-27-06-39-58-utc-game-pop-up-1` | −16…−20 dB |
| **Badges in a row, checklist rows** (the list cue) | P-02 each badge, P-06 each row, P-16 rows, EV-8 | `selection-click` | −20…−24 dB |
| **Glint** | EV-3 | `short-shine-2025-08-27-06-45-01-utc-short-shine-1` / `-2` / `-3` | −24…−28 dB |
| **Slide in / card settle** | T-02, T-04 | `woosh-2025-08-27-02-12-31-utc-woosh-02`, `simple-whoosh-382724` | −14…−18 dB |
| **Slide out** | T-03 | `whoosh-back-zoom-swoosh-fast-camera-in-and-out-ocp-1707-23-01`, `swoosh-2025-01-08-03-02-26-utc-swoosh-03` | −14…−18 dB |
| **Shrink / grow home** | T-05, T-06, T-17, EV-7 | `air-low-woosh`, `light-woosh-7119`, `whoosh-2025-01-08-02-32-33-utc-whoosh-05` | −18…−22 dB |
| **Badge flight** | T-18 | `swsh-arrow-feather-high-sdcl-archery166` | −22…−26 dB |
| **Card content swap** | P-06 when the result changes without a row; P-21 flip | `ui-click`, `digital-click` | −22…−26 dB |
| **Window / pill / UI** | P-08 rim, P-13 opens and collapses, P-22 typing | `ui-opening`, `keyboard-typing-2025-02-18-23-33-14-utc-mountain-audio-typing-sound-7` (trim to the typing), `mouse-click-mouse-click` | −18…−24 dB |
| **Callout / light line** | P-09, P-14 | `objects-drawing-board-marker-on-paper-drawing-line-medium-length-02-vadi`, `hint-appear-2025-08-27-02-25-12-utc-hint-appear-02` | −22…−26 dB |
| **Stars** | P-12: the one star, then the fill | `ui-sparkle`, `twinkly-bell-glitter-twinkly-bell-glitter-2` | −20…−24 dB |
| **Reveal / shimmer** | T-07, H-7 numeral, the punch slide, the hook's reveal | `tech-appear-2025-02-11-05-48-28-utc-tech-appear-2`, `appear-magic` | −16…−20 dB |
| **Weight** (≤ 3 per reel) | T-09 dark ↔ light, the promise's last badge, P-15's hollow word | `abstract-hit-sub-bass-07`, `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5`, `impactfadeinout-tfx2697` | felt, −8…−12 dB |
| **The payoff** | EV-1 scrub's end, EV-8 bloom | `05405-shine-ding`, `appear-magic` | −14…−18 dB |
| **Trailer only** | T-12, T-13, T-14, T-15, P-29, P-30 | whooshes `whoosh-2025-01-08-02-32-33-utc-whoosh-03` / `-06`; burns `glitch-2025-01-08-02-40-44-utc-glitch-06`, `interference-flicker-1` (never the same twice in a row); the riser `riser` into the flurry, stopping on its first frame; shutters `camera-shutter-2025-02-19-17-59-23-utc-dslr-camera-shutter-v3` / `-v4` in the flurry; the count-up `telemetry-graph-rising-01-2025-08-27-06-33-50-utc-36877-telemetry-graph-rising-01-full` | ≈ −7…−12 dB |

**Never in this style:** comedy or meme sounds, cartoon boings, crowd reactions, voice clips, cash registers, record scratches, loud risers under the voice, anything while he is only talking with captions (the badge pop on an ordinal is the exception: it's a graphic).

### 11.2 The SFX ledger (Studio Standard Rule)
- **Any file at most 2× in a reel,** except the one **list cue** (`selection-click` for badges in a row and checklist rows).
- **No file on two consecutive cues;** rotate within each pool.
- **Density:** about one cue every **1.4–2.2 s inside graphic beats**, each tied to a picture landing: this style's calm means fewer cues than a hype edit, never silent graphics. Pure talking with only the caption stack gets nothing.
- **Never more than two cues overlapping;** never on a trigger word's consonant (shift ±2 f). Glints and clicks are texture; the weights and the payoff are what the viewer feels.
- Log every cue in the plan's sound ledger (id, time, picture).

### 11.3 Silence and the mix
- **Go silent (no new SFX) for 0.4–0.6 s before the payoff** (the result card's final state, the giant numeral, the punch slide), then land it.
- Voice: high-pass 80 Hz, de-ess, firm compression (the references sit at LRA 1.4–3.4 LU). The voice is always the loudest thing.
- Normalise to **−14 LUFS integrated, true peak ≤ −1.0 dBTP** (fix: jw2 +1.7, jw4 +1.1, jw3 −0.1, jw1 −0.3 dBFS).
- Every format: a hard stop ≤ 6 f after the last word, no ring-out over black (fix: jw5 1.7 s).
- Leave the voice's natural slips out: re-cut doubled words (jw5 shipped "can can", "are are").

---

## §12 Footage handling

Re-measure on sampled frames for every new shoot.

### 12.1 Shoot setups (identify which ones the footage uses)
| Setup | Description | Best formats |
|---|---|---|
| **A: Tripod medium shot** (house) | Front-on, eye level, mid-chest or waist up, ~35–50 mm feel, a moody wall in one hue, a mic on a boom | All five |
| **B: Tripod medium close-up** (jw5) | Chest up, a practical light at the side, a mic in the lower foreground | TRAILER, ONBODY |
| **C: 3/4 side angle** (jw5, rare) | A second angle or a reframe | One variety cut in the trailer |
| **D: Handheld selfie** (adaptation, §3.10) | Arm's length, often tighter than the face allows | CANVAS, SLIDES, with the tight-footage fix |

### 12.2 Crop table per layout (starting values)
| Layout | Placement |
|---|---|
| Full frame (A) | Head top ≈ 380–450, eye line ≈ 580–713, face ≈ 280–324 px wide, centre x ≈ 520–580; native framing ×1.5 from 720-wide sources |
| Punch (B / C) | +5–15% (trailer up to ≈ 130–150%), head top ≥ 60 px, chin inside |
| Card / oval / dock / filmstrip / inset | The whole frame scaled (card ≥ 680 px wide (jw2 544 → 475), oval ≥ 480 px (324), the L-12 dock ≥ 760 px, filmstrip ≥ 680 px, inset x 97–961), ≥ 40 px above the hair |
| Tight footage (any layout) | Full screen with the text moved (hair may touch the top edge, eyes to chin in), or a card on the canvas the footage fills (§3.7); never over its own blurred copy |

### 12.3 Matte, frame rate, audio
- Matte only for P-17 (cards behind the head); never to paste the speaker on a canvas.
- References: jw1–jw4 at 30 fps, jw5 at 23.976 fps (2997/125). Render at the plugin's rate, convert by t = f / fps; conform VFR phone footage to constant first.
- One clean voice track; the chain in §11.3.

---

## §13 Output contract

### 13.1 Beat sheet schema (one row per beat; the first ```yaml``` block of the edit brief)
```yaml
- id: 7
  section: ITEM-2                    # HOOK | PROMISE | ITEM-n | PAYOFF | RECAP | CTA
  format: FMT-ONBODY                 # FMT-SLIDES | FMT-CANVAS | FMT-WINDOW | FMT-ONBODY | FMT-TRAILER
  speaker: full                      # full | card | oval | dock | filmstrip | inset | absent (§3.1)
  framing: B                         # A | B | C (§3.7); tight: true when the footage needs the §3.7 fix
  layout: L-2                        # §3.8
  spoken: "Number two is bad design."
  caption: {style: CAP-STACK, text: "Bad *Design*", sizes: {script: 130, bold: 104}, top: "chin + 60"}
  trigger: "two"                     # the word the element lands on
  onset_s: 20.67                     # from the words file
  pattern: P-01                      # §8.3
  element: "badge 2 from the fingertip at (259, 1150), 8 f; flips off at 22.10 (P-03)"
  motion: "pop 10→100% 8 f, overshoot; flip 10 f ease-in"
  transition: T-01                   # T-xx; punch-in on the ordinal
  sound: tech-appear-2025-02-11-05-48-28-utc-tech-appear-1   # ids from SOUNDS.md (§11), logged in the ledger
  assets: []
```

### 13.2 Hook proposal format (3 required)
```yaml
- name: "The rating gap"
  formula: HF-4
  visual: H-4 + H-6
  format: FMT-ONBODY
  frame0: "talking head full frame, sharp, mid-word, '*If*' written in script at the chest"
  first_3s: "f9 'Your [work]' label + 1 star · f15 four outline stars · f66 jump cut tighter · f90 '[platform]' stars fill 3 f apart"
  promise: "'one of these three things' at 4.5 s, badge row 1-2-3"
  loop: "which three?"
  why: "A picture of the gap in 3 s; a countable promise by 5 s"
```

### 13.3 What to show the creator
(1) the format, the accent family and why; (2) the speaker map with times, the face measurements (framing A/B, any tight-footage fix) and how he moves between layouts; (3) 3 hooks, one recommended; (4) the beat sheet + transition map + the sound ledger, with every ordinal → its badge and every item → its row, window or prop; (5) the asset list (the user's own clips, thumbnails, screenshots; what's missing); (6) stills: frame 0, the 3 s mark, the promise row, one item mid-ritual (a row landing on the result card), one card or dock beat, the payoff (EV-1 or EV-8), the last frame.

---

## §14 Worked examples and reference cheat sheet

### 14.1 Worked example: jw4 "If you look at your edits…" (3 reasons) rebuilt as a plan
**Choices:** `FMT-ONBODY` · HF-4 + H-4 + H-6 · indigo family (badge #9034CA, stars #993AD0) · full frame throughout, framing A ↔ B on every ordinal · E-4 · scored (below) · fixes: sharp f0 (no black frame), rating label ≥ 52 px, bullets and rows ≥ 48 px, "aberration" spelled right, TP ≤ −1 dBTP.

| t (s) | Spoken | Caption | On screen · motion |
|---|---|---|---|
| 0.00 | "If you look at your edits and you think" | stack "*If* you look / at **your** edits / and you **think**" | Sharp, mid-gesture, "*If*" at f0; slow push f0–15; "Your edits" + 1 star of 5 (P-12, f9–15) |
| 2.20 | "…that looks nothing like what I see on Instagram" | "*That* looks / *nothing* like what / I see on **Instagram**" | T-01 tighter (f66); label → "Instagram", stars fill 3 f apart |
| 4.50 | "…one of these three things" | "**One of these** / *Three Things*" | Badge row 1-2-3 (P-02, 4 f stagger) |
| 5.98 | "Number one, a lack of direction." | "A lack of *Direction*" | T-01 + punch; badge 1 at the fingers (≈ 260, 1330), P-01 8 f |
| 7.50 | "To create a good scene, you need to know exactly…" | stacks, then plain "you", "scene", "like" | Badge 1 flips off (P-03) |
| 11.63 | "…an inspiration vault the size of your house" | plain | T-01 (punch-out); island pill for the reference file (P-13) + `ui-opening` |
| 14.50 | "Thousands of references…" | "*Thousands* / of **references**" | Pill collapses |
| 18.00 | "…you'll get lost… the edit won't be great" | — | ▶ bullets, rows y 1063 / 1143 |
| 20.67 | "Number two is bad design." | "Bad *Design*" | T-01 + punch; badge 2 at (259, 1150), flips away at 22.1 s |
| 22.10 | "Design is the most important skill…" | "*Design* / is the most **important**" | T-01 |
| 25.10 | "…imbalanced scenes, bad contrast, uncommon patterns" | — (labels carry it) | T-01; light line at x 270 (P-14), the label swaps on each item |
| 28.80 | "…like a beginner editor" | plain "Beginner Editor", grey → white | — |
| 30.87 | "And lastly, number three is poor post-production" | — (title carries it) | T-01 + punch; ≈ 300 px badge 3 at (536, 1069), hollow "*Poor*" behind, "Post Production" under (P-15) |
| 33.40 | "…brings your animations to life" | "*Is* what brings your / *animations* / **to life**" | Numeral → eyes (P-04) |
| 36.20 | "…vignettes, blurs, chromatic aberration, noise and posterize time" | — (card carries it) | T-01; glass card from y 976 (P-16), one row per effect |
| 41.64 | "Now just make sure to remember these three tips…" | plain, then "*The* next time **your** edit / Looks *boring*" | T-01; badge row returns at 42.9 s |
| 45.68 | (end) | caption still up | T-16 hard stop ≤ 6 f |

**Speaker map:** full frame 100%; 12 jump cuts (≈ one per 3.8 s); every prop at y ≥ 950, the face zone clean.

**This edition on top:** the stack just under the chin with connectors ≥ 60 px; stars ≥ 120 px; each badge with its glint (EV-3); "thousands of references" docks him above a wall of the user's own reference thumbnails for 2 s (L-12) and grows home on "you'll get lost". **The score:** `light-woosh-7119` as the first star row lands (0.3 s), `twinkly-bell-glitter-twinkly-bell-glitter-2` on the fill (≈ 3.0 s), `selection-click` × 3 on the badge row (4.5 s), `tech-appear-2025-02-11-05-48-28-utc-tech-appear-1` / `-3` / `game-pop-up-2025-08-27-06-39-58-utc-game-pop-up-1` on badges 1–3, `ui-opening` on the pill, `air-low-woosh` on the dock and `whoosh-2025-01-08-02-32-33-utc-whoosh-05` on the grow home, `objects-drawing-board-marker-on-paper-drawing-line-medium-length-02-vadi` on the light line, `selection-click` on each glass-card row, `abstract-hit-sub-bass-07` under the hollow "*Poor*" (the one weight), 0.5 s of silence before the recap, `05405-shine-ding` on the recap bloom (EV-8). About one cue every 1.8 s, none while he only talks.

### 14.1a jw1 "This editing style is taking over in 2026" in short (`FMT-SLIDES`)
HF-1 + H-1 + H-6 · purple family (badge #8628D5, slide canvas #000C25 → #330556) · fixes: frame 0 sharp, titles 64 px, rows 48 px, the footer = the user's own CTA line, "Stylize" spelled right.
- **0.00** T-11 open; stack "*This* editing *style* / is **taking over** / *In* **2026**"; example cards slide in behind his head (P-17, f13–30); own-content card rises at the chest (f12–25).
- **4.80 / 7.03** T-01 jump cuts; "*Three Steps*" stack + badge row 1-2-3 at y ≈ 1430 (f221, 227, 231).
- **9.62** "First is the background": badge 1 from the fingertip (P-01). **11.03** T-02 → slide 1, four rows, the card's texture changing on each (P-06). **18.07** T-03 back.
- **18.07–24.13** item 2 on the talking head, with mini cards "Text centric / Object centric" (P-07) at 22.0 s; **24.13** slide 2 (object placed → desaturated → textured → shadowed); **30.30** back; **32.57** slide 3 with two callouts; **36.47** back; **38.53** slide 4 (T-04, no badge) + `simple-whoosh-382724`.
- **43.27** back for the CTA: plain words, a slow push, the user's own video card at 46.8 s (E-1); T-16 at 50.37 s.
- **Speaker map:** full 0–11.0, absent 11.0–18.1, full 18.1–24.1, absent 24.1–30.3, full 30.3–32.6, absent 32.6–36.5, full 36.5–38.5, absent 38.5–43.3, full 43.3–end.
- **This edition:** the badge carries across each slide cut (EV-2, T-18); the one result card carries from slide to slide (EV-1) and scrubs back through all four states before the CTA; every slide has its `CAP-SUB` line; scored per §11.

### 14.2 Reference-reel cheat sheet (what to steal from each)
| Reel | Format | Learn from it | Don't copy |
|---|---|---|---|
| jw1 | SLIDES | Say it, then show it; one slide template; rows that change the result card; badge from the fingertip; proof cards behind the head; zoom-blur back | 32–40 px slide text; a blurred frame 0; "Stytlize"; a platform-plug footer |
| jw2 | CANVAS | Shrinking whole into the world and back by a hard cut; dark ↔ light breaks; a picture for every abstract noun; giant numeral; word slides | Other creators' clips and a third-party profile; near-empty canvas frames; 40 px labels; "Youneed"; +1.7 dBFS; a dark last frame |
| jw3 | WINDOW | Badge + title → window → checklist per chapter; one text layer at a time; filmstrip hook; keyword in quotes | A 384 px filmstrip card; 36–50 px text |
| jw4 | ONBODY | 100% face; chest-band props; badges as hand props; rating hook; island pill; light-line labels; mascot badge; glass checklist | A black f0; 22–40 px small print; "abberation"; +1.1 dBFS |
| jw5 | TRAILER (grammar only) | Chrome title; proof stack → flurry; count-up; glass tabs with a defocused foreground; dimmed inset; keyword pill | The offer, name and pitch; 190% punches; burns across the face; named third-party creators; text in the UI band; a 1.7 s black tail |

---

## §15 Look at your frames
Not a checklist; the questions the best editor and creative director ask while scrubbing:
- **Frame 0, sound off:** is he there, sharp, mid-word, with the first word written and the set's glow alive? Does the result appear by ~1 s and the countable promise by ~5 s?
- **The frame:** is their video full screen or in a designed box (rounded, rimmed, on the style's ground), never a sharp rectangle over its own blur?
- **Every ordinal:** does the badge spark off his fingertip on the word, and is it already flying when the slide cuts in? Same badge, same place, every time?
- **Every row:** does it land on its word and change the result card on the same frame, the card pushing toward it? Can I read it on a phone?
- **The speaker:** does he move (full frame, card, dock, absent, back) and never sit in one small box for more than ~3 s? Whole face in every frame, big, never a pillar, never pale?
- **Captions:** is every spoken word on screen: the stack just under his chin, the `CAP-SUB` line on slides and windows? Script, bold and connectors at their sizes?
- **Scale:** shrink the still to thumbnail size. Is the result card, window or object the first thing I see, or is it small in empty canvas?
- **Motion:** is anything still for more than ~2 s? Does every landing anticipate, overshoot and settle? One hero per frame?
- **Sound:** a glassy cue on every landing, none while he only talks, no file overused, silence before the payoff, no music?
- **Vibe:** calm, confident, premium. Anything loud, cluttered or cheap comes out.

---

## §16 Build + render

- **Pipeline:** the plugin's edit skill: plan in the edit brief, draw every frame in `reel.js` (`frame(t)`), look at stills, score (`plan/sounds.json`, then `vibe sfx`), then storyboard and render.
- **Fonts (bundled):** Pinyon Script, Poppins (Regular, Medium, SemiBold, Bold), Montserrat VF, Inter Tight VF + Italic VF, Fraunces VF. Pre-paint ✦ ▶ ★ ☆ and the quote marks before the first frame.
- **Component map** (helpers you write once per reel in `reel.js`):

| Component | Role |
|---|---|
| `Speaker(t)` | The footage per the beat list: full (A/B/C), card, oval, dock (L-12), filmstrip, inset or absent; T-05/T-06/T-17; punches per cut |
| `FitFace(rect)` | Cover-fits the footage to the rect (full frame or a card), centred so eyes to chin are inside with their margin; never shrinks it over a blurred copy of itself |
| `CapStack`, `CapPlain`, `CapCaps` | §5.2–5.4, timed from the words file |
| `Badge`, `BadgeRow`, `Tabs` | §5.6, P-01…P-04, SD-4 |
| `Slide`, `ResultCard`, `Checklist`, `Footer`, `MiniCards`, `Callout` | FMT-SLIDES (P-05…P-09) |
| `ChestWindow`, `PortraitCard`, `Bars` | FMT-WINDOW (P-08, P-10, P-11) |
| `Stars`, `IslandPill`, `PlayBullets`, `LightLine`, `OutlineWord`, `GlassChecklist` | FMT-ONBODY (P-12…P-16) |
| `LightCanvas`, `ProofGrid`, `Carousel3D`, `Orbit`, `FlipCard`, `SearchBar`, `Numeral`, `WordSlide`, `CardStack`, `Holograms` | FMT-CANVAS (P-18…P-26) |
| `ChromeTitle`, `ProofStack`, `Flurry`, `PaperCountUp`, `Showcase`, `TiltGrid`, `Inset`, `KeywordPill`, `Burn` | FMT-TRAILER (P-27…P-32, T-14) |
| `Pop`, `Grow`, `Fade`, `Wipe`, `Type`, `Draw`, `Flip`, `ZoomBlur`, `ZoomOut` | §10.1 tokens and T-03/T-11 as pure functions of t |
| `Glint`, `BadgeCarry`, `RowFocus`, `PenScript`, `Glide`, `GrowHome`, `Constellation`, `ResultScrub`, `CapSub`, `DataDock` | This edition's devices (EV-1…EV-8, T-17, T-18, L-12, §5.4a) |

- **Final:** 1080×1920, H.264, AAC; check the frame count, the loudness and true peak, and a contact sheet of the final file (face whole in every tile, no near-empty tile, text readable at phone size).

---

## Appendix A. Evidence map (where each rule comes from)
| Rule / element | Reels |
|---|---|
| Five formats, one caption grammar, one badge system | jw1 slides, jw2 canvas, jw3 window, jw4 on-body, jw5 trailer |
| Speaker full frame 52–100%; absent behind slides / canvas / cut-aways | jw1 57/43%, jw2 52/35%, jw3 91%, jw4 100%, jw5 66/31% |
| Shrinks whole into a card / oval / carousel card, back by a hard cut | jw2 (0.7, 11.0, 33.6 s), jw3 hook |
| Dimmed inset for the viewer's question | jw5 19.31–20.56 s |
| Graphics in the chest band; cards behind the matted head | jw3, jw4, jw1 mini cards; jw1 hook (contact sheet 1.0–3.0 s) |
| `CAP-STACK` word by word 4–5 f, no colour highlights; `CAP-PLAIN`; `CAP-CAPS` | jw1–jw4; jw1–jw4; jw5 |
| One text layer at a time | jw1, jw3, jw4 |
| Diamond badges (fingertip, row, header, flip-off, mascot) in the set's hue | jw1, jw3, jw4 |
| Name it, then show it; rows change the result | jw1 |
| Window, rating, pill, light line, mega-word, glass card | jw3, jw4 |
| Numeral, search bar, carousel, flip, word slides, holograms, stack, orbit | jw2 |
| Chrome title, proof stack, flurry, count-up, tabs, showcase, burn, pill | jw5 |
| Pauses cut, 3.7–3.9 words/s, punch on every ordinal | jw1–jw5 |
| Silent graphics in the teaching references, transition SFX in the trailer (the references also ran a calm pad or a trailer beat; we don't: SFX only, and this edition scores every graphic landing, §11) | jw1–jw4 / jw5 |
| Endings: own-content card, keyword in quotes, reminder, recap row, pill | jw1, jw3, jw2, jw4, jw5 |
| **Fix:** frame 0 sharp with a caption | jw4 black f0, jw1 blurred f0, jw2/jw3/jw5 text from f1 |
| **Fix:** face whole at every punch; burns off the face; filmstrip card ≥ 600 px; the tight-footage fix (full screen, or a card on the canvas; no blurred fill, 13 Oct) | jw5 190% punches and burns; jw3 384 px card; the 11 Oct stills (tight selfie close-ups) |
| **Fix:** readability floor; no near-empty frames | jw1 32–40 px, jw2 36–40 px, jw3 36–50 px, jw4 22–40 px; jw2 5.2–9.3 s, jw1 slide opens |
| **Fix:** true peak; spelling; doubled words | jw2 +1.7, jw4 +1.1, jw3 −0.1, jw1 −0.3; "Youneed", "Stytlize", "abberation"; jw5 "can can" |
| **Fix:** the user's own examples and CTA (M14, N8) | jw2 carousel + profile card; jw5 named showcase, course banners and its sales slot |
| **Fix:** black tail ≤ 1 s, no dark last frame, text out of the UI band | jw5 1.7 s; jw2 f1416; jw5 DM card y 1700–1850 |
| The 10× layer (§8.0), elevated devices EV-1…EV-8, T-17 and T-18, the data dock L-12, `CAP-SUB` | This edition (an elevation, not observed as such) |
| Sizes as floors (captions ≥ 60 px, rows ≥ 52 px, titles ≥ 72 px, hero objects big, no near-empty frame over ~0.7 s); every spoken word on screen with the stack just under the chin; the speaker moving between layouts with eased shrinks and returns; the tight-footage fix (full screen or a card on the canvas, never over its own blur); never pale; a glassy SFX score with the ledger rule, no music; no imposed checks; the whole face always | **The creator's directions, 11–12 Oct 2026** |
