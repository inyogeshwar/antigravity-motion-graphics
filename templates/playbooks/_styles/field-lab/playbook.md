# Science Documentary Playbook (v2, "Quiet Wonder, Elevated" edition, for Claude Opus 5.5)

> **In this plugin:** this file is the whole playbook: every measured value and recipe from the 3 reference reels is in it, and there is no other playbook file to open. Frame counts are at **30 fps** (the render rate); source frames are cited in brackets (vt1, vt2 measured at 29.97 fps, treated as 30; vt3 at 23.976 fps, converted ×1.25). Positions are on **1080×1920** (the references are 720×1280, scaled ×1.5). The per-reel notes it cites (`vt1…vt3`) are not shipped. Sounds are picked by id from SOUNDS.md; commands are in the edit skill's REFERENCE.md. The page gives you `FACE(n)` and `FACE0` (with `head_top` and `chin`) for every face frame.

**Purpose:** you (Claude) receive a talking-head video of the creator plus its script. Use this document to **ideate and build** every format choice, explainer picture, caption, transition and sound, so the Reel looks and sounds like a premium science documentary cut to vertical: **the picture explains, the face anchors, the voice takes its time**, built with so much care that the viewer can't look away until the fact lands.

**What v2 is:** a frame-by-frame analysis of 3 vertical reels by Veritasium, each an excerpt of a long-form science documentary (vt1 "the antiproton decelerator", 1:55: a studio host, a 3D model of the facility, an on-location walk-through with an operator; vt2 "the first portable antimatter trap", 2:33: a studio host, a scientist on a video call, location B-roll, drawn explainers, a 16:9 graphic in a centre band, a map; vt3 "you can never see anything enter a black hole", 1:50: an animated voice-over story in one illustrated world, the presenter as two 2-second anchors, an escalation montage), **elevated ten times** by the best motion designer and creative director in the world. The patience is the style, so the craft goes **into** the pictures: worlds with real depth and light, motion that obeys physics, numbers that roll into the scene as they are said, a camera always travelling toward the thing being named, an open question you can see that closes on screen, type you can read on a phone, and a quiet-wonder sound score. The analysis covered cut lists, layout and colour measurements, caption timing, motion recipes and audio. Every rule is either **observed** (the most consistent value chosen as the house standard) or a **fix** (a reel got it wrong). All measured layouts, recipes and rules are kept. Where a reference reel and a direction disagree, **the directions win**.

**Measured sizes are floors, not targets.** The references were set for long-form viewers; on a phone their captions (≈ 68–72 px) and map tags (28–34 px) read small, and a model shown whole leaves the named part tiny. Here:
- **Captions:** `CAP-DOC` **76–84 px**, `CAP-TEX` **80–88 px** (weight 500, not 400). If a chunk doesn't fit, chunk shorter; never shrink.
- **The exact thing owns the frame:** once the camera arrives, the named part, object or subject is **≥ 640 px wide** (one object) or fills **x ≈ 60–1020** (a model, a map, a group). Everything else is context: dimmed, defocused or hazed. **The camera never parks wide.** A wide establishing view is a move (≤ 0.7 s), not a hold: it is always travelling in to the named thing. On the 12 Oct test the hook held a ≈ 370 px terminal and a group of ≈ 180 px boxes for seconds; on a phone that reads as a tiny model in a dark room. A screen, window or terminal the voice is about is **≥ 860 px wide** with its text **≥ 44 px**; a group of 3–6 (an org chart, a lineup) fills **x ≈ 60–1020** with each member **≥ 280 px wide**; push in to the one being named.
- **In-world type:** labels and tags **≥ 48 px**; a number in the scene **≥ 120 px** cap height. Credits stay small (22–26 px); they are not meant to be read.
- **No empty frame:** if more than half of y 300–1400 is plain background for more than ~0.7 s, the camera is too far out or the next element is late. The one exception is the deliberate time-stop void (P-21), where the emptiness is the point.
- **The face is big and whole:** a close selfie stays **full screen** (move the text, not the video; hair may touch the top edge, eyes to chin always in); the `DOCK` card stays **≥ 940 px wide** and the footage fills it; never a narrow pillar, never over its own blurred copy.
- **Full screen or a box, never any footage or picture over its own blur** (Naman, 13 Oct): the creator's video either fills the frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground or scene) that it fills completely (cover-crop centred on the face). The same goes for every recording, screenshot, photo, diagram and clip: it fills the frame (cover-crop to the part that matters, or a push-in) or sits in a designed box on the style's own ground (its colour, gradient, texture, grid or drawn set). Never a sharp box over a blurred or darkened copy of itself, never a band padded with blurred bars: that hard rectangle inside the frame looks cheap. A tight selfie stays full screen: move the text, not the video; hair may touch the top edge, eyes to chin always in; when the whole head must show, use a box layout on the style's ground. A matte cut-out over a plate and a whole-frame blur transition are fine.
- **Full screen or a box, never their own blur** (Naman, 13 Oct): the creator's video either fills the frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground or scene) that it fills completely (cover-crop centred on the face). Never shrink it over a blurred or darkened copy of itself, never pad a band or box with blurred side bars, never set a card on their own blurred frame: that hard rectangle inside the frame looks cheap. A tight selfie stays full screen: move the text, not the video; hair may touch the top edge, eyes to chin always in; when the whole head must show, use a box layout on the style's ground. A matte cut-out over a plate and a whole-frame blur transition are fine.

### The feel (read this twice)
This is **a friend who happens to be a physicist, showing you the strangest true thing they learned this week**, and showing it instead of telling it. They say one sentence and the camera is already flying toward the thing: a white clay model of the facility with cyan light racing round the ring, a name glowing up out of the floor just as it's spoken, the speed rolling into place in the scene as the voice says it, the light visibly slowing down. When it gets strange, the presenter looks straight at you, smiles, and lets it sit in silence. Then you're inside the machine. Nothing flashes, nothing shouts, no text is stuck on top of the world: the words live inside the pictures, the pictures never stop moving, and every picture is the exact thing being said. It should feel like **a documentary you'd pay for, compressed into a minute, that makes you say "wait, really?" and stay to see why**. If it looks like a slideshow or a lecture, it's wrong; if it looks like a hype reel, it's wrong too.

**Who the reference creator is:** a science channel that explains one surprising physical fact at a time: why something is impossible, how a machine works, what a record means. The presenters are warm and curious, never loud; they gesture with both hands, smile at the absurd parts, and let a strange fact sit in silence. The authority comes from exact pictures (the real machine, a faithful model, a drawn thought experiment) and from the patience of the telling.

**Audience (ICP):** curious adults with no physics training. They know the words (antimatter, black hole, magnet) but not the mechanism. They want to **see inside the thing** and leave with one fact they can retell.

**Style lineage:** long-form documentary language cut to 9:16, in three layers:
1. **Anchor layer:** the presenter full frame, locked-off, warm low-key studio (or outdoors at night), never zoomed; real people at the real place (a handheld guest, a guest on a call, the presenter reacting). A face is on screen only when a person is the point of the beat.
2. **Explanation layer:** full-screen pictures that always move: a white-grey model with labels built *into* its floor, a drawn cartoon world with a virtual camera, a concept icon racking into focus, a cross-section on black, a 16:9 graphic in a designed box on the world's ground (never over its own blur), an animated map. The narrator is a voice over them.
3. **Text layer:** one serif caption line, hard-swapped every 2–3 words, **coloured by who is speaking** (white = presenter, gold = guest): just under the chin on a face, on the low caption line over pictures. No titles, logo, banner or highlights.
- **This style is not one layout.** One caption system, pace and grade carry **three formats** (§3): a lab documentary, a call-in documentary, an animated story.
- **The face and a graphic never share the screen.** The edit *alternates*: the face is a short full-frame anchor between explanation blocks; every explanation fills the screen with the face gone and the voice continuing. No split screens, cards or picture-in-picture of the speaker in any reference reel. Never collapse this into a "face in a box under a graphic" layout. **This edition's one exception is the `DOCK` (§3.9a):** for the number or result the whole reel hinges on, 1–2 times per 60 s, the creator eases into a wide card above it so viewers watch the reaction and the number together, then grows back to full frame. Everything else alternates.
- **IDs:** formats `FMT-…`, screen modes (`HOST`, `GUEST`, `REACT`, `WORLD`, `BAND`, `STRIP`, `BUBBLE`, `SHOW`), hook formulas `HF-…`, hook visuals `H-…`, endings `E-…`, structure devices `SD-…`, families `G-…`, patterns `P-…`, elevated devices `EV-…`, transitions `T-…`.

### Creator directives
| # | Directive | Where it lives |
|---|---|---|
| D1 | **Ten times better, same soul.** Keep the curiosity, the patience, the exact pictures; raise the craft: worlds with depth and light, physically true motion, numbers and labels that land inside the scene, the camera always travelling to the named thing. Never sensational, never a meme, never a flash | The feel, §8.0 |
| D2 | **The speaker moves, and frame 0 is never empty:** the face is a full-frame anchor that comes back every ≈ 6–12 s for the pivots; the pictures carry everything in between; frame 0 is the subject already moving, or the presenter mid-gesture, with the first words on it | §3.0a, §6.0 |
| D3 | **Seamless, running motion:** the virtual camera never parks; move inside a block, cut between blocks on the noun; something moves inside every picture every 1.5–3 s | §8.0, §9 |
| D4 | **Sound is scored like Naman's, at this style's volume:** soft air under camera travel, glassy pings where labels and light land, the real sounds of the mechanisms, a few deep weights for the turns. **No SFX file more than 2× in a reel** (the one list cue excepted). **No music bed, ever** | §11 |
| D5 | **The whole face is always visible, and never pale:** hair to chin, both sides, in every face beat; the footage in its own rich colour | §2, §4.4, §12.2 |
| D6 | **Captions are seen:** every spoken word, serif 76–84 px, white or gold by voice, just under the chin on a face | §5 |
| D7 | **No imposed checks.** This file gives taste, recipes and reasons; you decide like the best editor and creative director in the world. Only craft never bends | §2 |

### The reference reels → this edition, at a glance
| Area | The reference reels | This edition |
|---|---|---|
| The opening | Excerpts that start mid-story ("this research", a mechanism before the subject); a dry presenter | **The fact itself, standing alone**, with the subject big and moving on frame 0 and its key word landing as a picture inside the first second (§6.0) |
| The pictures | Clay model, drawn story world, concept icon, band, cross-section, map, real B-roll | The same families built as **2.5D worlds with depth**: 3–5 parallax planes, depth of field and rack focus, volumetric light on energy, haze between planes (§8.0) |
| Motion | The camera always moves; pulses run along the beam | The camera always moves **toward the named thing**, and everything in the world moves with **physics**: pulses stretch with speed and visibly slow when the voice says so, trails show speed (EV-4) |
| Numbers and labels | In the floor, behind the object, on a tag | The same, plus numbers that **roll** to their value on the word (EV-1), a scale ladder through orders of magnitude (EV-2), and the open question pinned in the world until it's answered (EV-5) |
| The face | Locked studio presenter; faces cut by edges in all three | Whole, in full rich colour, never zoomed; a selfie full screen, never shrunk into a pillar or over its own blur; caption just under the chin |
| Captions | Serif, ≈ 68–72 px, on the chest | Serif, **76–84 px**, every word, just under the chin on a face, the low line over pictures |
| Sound | No SFX at all; a music score under the voice | **No music, ever;** a quiet-wonder SFX score on the picture events (§11), the silence beat kept truly silent |
| Endings | All three stop on a long-form cliff | Every loop closed on screen; a deliberate ending (§6.7) |
| Checks | MUST / NEVER lists, a checkpoint | **Craft only** (§2); the rest is the house grammar (§2.1) and your judgement |

### Formats at a glance
| Area | `FMT-LAB` studio + model + location (vt1) | `FMT-CALL` studio + call guest + explainers (vt2) | `FMT-STORY` animated story (vt3) |
|---|---|---|---|
| Use when | A machine, place or process with named parts | A discovery or record told with a second voice; problem → solution → "what it means" | A thought experiment, a "you can never…", an abstract law |
| The face | Host full frame for the setup (one ≈ 17 s take) and as the questioner on location; guest between cutaways | Host for the hook and pivots (2–18 s takes); guest on the call; host reaction cutaways under the guest's voice | Presenter **twice, ≈ 2 s each**, at the turn to the big claim (3% of runtime) |
| The explanation | Full-frame model, camera always moving, labels in the scene (≈ 37%); location cutaways | Concept icon, band graphic, real→drawn zoom-through, cross-section, map (≈ 50%) | One continuous drawn world 35–45 s, a magnified bubble, band graphics, a montage (≈ 97%) |
| Captions | `CAP-DOC` 76–84 px, white / gold; under the chin on faces, baseline 1402 on pictures | `CAP-DOC` 76–84 px, white / gold; under the chin on faces, baseline 1402 on pictures | `CAP-TEX` 80–88 px, white, baseline 1368, cleared in silences |
| Pace | 2.86 words/s; slow-fast-slow | 2.70 words/s; long takes ↔ 1–3 s cutaways | 2.65 words/s; 3 cuts in 90 s, then 12 in 20 s |
| Sound (references → here) | Voice, live location sound and a score under it (we don't) → the quiet-wonder SFX score | **Dry hook**, a score later (we don't) → dry voice, SFX on the pictures | Voice and a score (we don't), a 2.1 s silence → the SFX score, the silence kept |

### Quick index
| § | What |
|---|---|
| §1 | Procedure |
| §2 | Craft that never bends + the house grammar |
| §3 | Formats, screen modes, the alternation, where the face sits, safe zones |
| §4 | Colour tokens and their meaning |
| §5 | Type tokens, captions (`CAP-DOC`, `CAP-TEX`), in-world labels |
| §6 | Hook system (formulas, visuals, timing, endings) |
| §7 | Structure devices |
| §8 | Graphics system: the 10× layer, families, patterns, line → pattern lookup, assets, elevated devices |
| §9 | Transitions `T-01…T-13` |
| §10 | Motion tokens, camera, layers, finishing |
| §11 | Sound: the quiet-wonder score, the ledger, silence, the mix |
| §12 | Footage handling (the face rule in numbers) |
| §13 | Output contract: beat sheet schema, hooks, what to show the creator |
| §14 | Worked example (vt2 as a plan, vt3 in brief) + cheat sheet |
| §15 | Look at your frames |
| §16 | Build + render |
| App. A | Evidence map |

---

## §1 Procedure (follow in order)

1. **Inventory.** Probe the footage (resolution, fps, duration, audio). Identify each setup (§12.1): studio medium close-up, selfie, handheld location, call recording. Note where the head sits in each, so every crop can keep the whole head.
2. **Transcribe** with word timings. **Keep the silence list:** this style keeps pauses and breaths, so silences are a design input. Spell every term, name and number from the script (numbers as digits).
3. **Find the one fact:** the single surprising sentence the reel exists for. Every beat sets it up, shows its mechanism, or says what it means.
4. **Choose the format** (§3.0): named parts → `FMT-LAB`; a second voice and a discovery → `FMT-CALL`; a thought experiment or absolute law → `FMT-STORY`. One line on why. Single patterns may be borrowed across formats; structures may not.
5. **Speaker map:** each sentence is presenter (white) or guest (gold). The caption colour follows the **voice**, not the picture.
6. **Face map:** each sentence is `FACE` (a person full frame) or `PICTURE` (an explanation; face absent; voice continues). The hook and every pivot ("But…", "So…", "Here's what that means") are `FACE`; every mechanism, number, part or place is `PICTURE`. Never both (M2).
7. **Segment:** `HOOK` (0–5 s), `LOOP` (by ≈ 15 s), `BLOCK`s, `PIVOT`s, `PAYOFF`, `MEANING`, `END` (§6.7).
8. **Classify every sentence** with a §8.4 line type and mark its **trigger noun**: the picture cuts on the noun.
9. **Place the silence:** the 1.0–2.1 s silence beat after the payoff (§7.1 SD-5).
10. **Ideate 3 hooks** (§6), each with a formula, frame 0, the first 3 s of events and a **stand-alone opening line** (M9). Recommend one.
11. **Fill the beat sheet** (§13): one beat per picture, with mode, pattern, in-scene label, camera move, caption chunks and colour, and transition.
11b. **The 10× pass** (§8.0): for every picture, where the camera starts and where it lands, what is in focus, what moves inside it and how (physically true), where the label or number lands, which elevated device (§8.8) lifts it. Then **attack the plan**: where is a frame empty, far out or parked? Where does the exact thing sit small? Where is a caption small, or low on a face? Where would a viewer swipe? Fix it in the plan.
11c. **Score it** (§11): a sound on every picture event that earns one, logged in the sound ledger; the silence beat stays silent.
12. **Plan transitions** (§9): hard cuts by default; signature moves within budget.
13. **Produce the assets** (§8.6): drawn scenes, real pictures of the named thing (credited), archive images (credited). Never invent a measurement.
14. **Show the creator** the plan and stills (§13.3).
15. **Build block by block,** look at the landing frame of every beat (the whole head in every `FACE` beat) and at your frames (§15), score, render (§16).

---

## §2 Craft that never bends
- **The whole face is always visible:** hair to chin and both sides in every face beat, at every framing, crop, reframe, bubble or panel (M3); a close selfie stays full screen or goes in the `DOCK` card; never shrunk over its own blur.
- **Text never sits on text:** a caption never over an in-world label, number or title.
- **Sound in sync:** every SFX on the frame its picture lands, never on a consonant (slide ±2 f); nothing ever louder than the voice.
- **True and exact:** facts, numbers and spelling from the script or supplied sources (M11, M14); every third-party image credited (M12).
- **Readable at phone size:** captions ≥ 76 px; in-world labels ≥ 48 px inside x 64–1016; the named thing ≥ 640 px wide once the camera lands.
- **Never pale:** the footage keeps its own colour or a touch richer (§4.4).
- **Loudness:** −14 LUFS integrated, true peak ≤ −1.0 dBTP; end on a complete sentence.

Everything else is direction. You decide; write your reasons into the plan.

### 2.1 The house grammar (what makes it this style)
Not checks: this is what the three reference reels do every time, and why it works. Break one only with a reason in the plan. (The IDs are kept because other sections cite them.)
- M1. **One format per reel** (§3.0), chosen with a written reason.
- M2. **Face and graphic alternate; they never share the screen.** A beat is either a person full frame (`HOST`, `GUEST`, `REACT`, `SHOW`) or a picture full screen (`WORLD`, `BAND`, `STRIP`, `BUBBLE`). No split, speaker card, picture-in-picture of the speaker, or cut-out over a graphic (0 exceptions in 3 reels). A face may share the frame only with a **real object in a hand** (`SHOW`) or, in this edition, in the `DOCK` above the reel's key number (§3.9a, 1–2 per 60 s).
- M3. **The whole face is always visible,** hair to chin, at every framing, crop, reframe, bubble or panel; the face decides how tight a shot goes. `HOST` head top ≥ 100 px (studio ≈ 140). No face cut by a side edge. **Fix** for vt3 (the presenter's hair cut by the top edge) and vt1/vt2 (location, call and reaction faces cut at the left/right edge). If a take cuts the face, keep it full screen with eyes to chin in (hair may touch the top edge), or cut away to a picture; never scale it down over its own blurred copy (§12.2). **Captions may cross the face.**
- M4. **Every explanation is its own full-screen picture, cut on its noun** (−2…+6 f of the onset), the voice continuing (vt1 cutaways on "blue devices", "orange ones", "pipe"; vt3 montage on "general", "relativity", "gravity").
- M5. **The picture is always alive:** drawn and modelled shots always have a camera move (vt1 model shots 15–16 s, vt3 world shots 35–45 s, never still); stills get a slow push; host takes are locked-off but gesturing.
- M6. **Labels live inside the picture** (on the model's floor, behind the object, on a map tag, in an instrument) and arrive by a camera move or a 15 f fade. No lower-thirds, banners or title cards.
- M7. **One caption system** (§5), serif, one line, centred, hard-swapped, no box, stroke, animation or highlight. **Colour = voice:** presenter white, guest gold, kept over reactions and B-roll; never a flip inside one speaker's sentence (fix: vt1 1:38.5, vt2 2:22).
- M8. **Unhurried pace, pauses kept:** 2.6–2.9 words/s, breaths in, conversational gaps up to ≈ 1.2 s left, and **one deliberate 1.0–2.1 s silence** after the payoff (vt3: 2.12 s after "frozen in time"). Only a guest's rambling answer is tightened, with plain jump cuts (vt1: 3 in 15 s).
- M9. **The opening sentence stands alone** (fix): it names its subject and makes a claim, a scarcity or a number. Never a pronoun or back-reference ("this research", "they", "of course"). §6.1.
- M10. **The reel ends deliberately** (fix): its loop closed on screen, then an ending from §6.7. Never a cliff that belongs to a longer video.
- M11. **Facts only from the script or supplied sources.** Models may simplify, never contradict; the number in the scene matches the voice (vt1: "16,200,000 km/h" in the scene, "16.2 million" spoken).
- M12. **Credit every third-party image** with a small vertical credit at the left edge (vt3); use only images you may reuse.
- M13. **Audio:** −14 LUFS, **true peak ≤ −1.0 dBTP** (fix: vt3 −0.5, vt2 at −1.0). Speech is always the loudest thing.
- M14. **Spelling and numbers:** digits in captions ("96% to 10%", "0.1%", "614 days", "20,000"); punctuation kept; terms spelled as in the script.
- M15. **Captions just under the chin on a face** (the line's top 40–80 px below `FACE(n)` chin), so the eye meets them the moment the frame is full of a face; over pictures they keep the low line (§5).
- M16. **Never pale** (the creator's direction, 12 Oct 2026): no desaturation, fade, milky or lifted blacks on any footage; the only colour shifts are drawn ones (the redshift fade, the HUD).

**Never in this style:**
- N1. A box, panel, split or bubble of the **presenter** beside or over a graphic, outside the `DOCK` (§3.9a). The style's only bubble shows the *subject* (vt3's character).
- N2. Persistent text: title card, channel bug, logo, banner, progress bar, chapter labels.
- N3. Sounds that shout: comedic, meme, cartoon, game, cash or glitch sounds, slams, risers building under speech, anything as loud as the voice. (The references had no SFX at all; this edition's quiet-wonder score, §11, is the only sound, always under the voice.)
- N4. Flashes, whips, glitches, light leaks, RGB splits, zoom slams, shake. The only exposure event is the white-out mirror (T-07), once, for "opposite".
- N5. Animated, word-by-word, coloured-keyword, boxed, sans-serif or two-line captions.
- N6. Punch-ins, Ken Burns or digital zooms on a talking head (vt1, vt2: no zoom change on any cut).
- N7. Unfinished graphics (fix: vt2 0:55.3 left a stray white line from the left edge before the dissolve).
- N8. White captions on a white or near-white frame without the heavy shadow (fix: vt3 1:41–1:43).
- N9. A face cut by the frame, or hidden behind the object it holds (fix: vt2 1:28–1:35).
- N10. Ending mid-thought or on a tease the reel never pays (fix: all three).
- N11. Generic stock "science" (glowing brains, random particle loops). Every picture is the specific thing said.
- N12. True peak above −1.0 dBTP, or a duration that doesn't match the edit.

---

## §3 Formats and screen modes

### 3.0 Choosing the format
| The script… | Format |
|---|---|
| …walks through a machine, place or process, naming its parts | `FMT-LAB` |
| …tells a discovery, record or build with a second voice, then an implication ("then why not ship it?") | `FMT-CALL` |
| …asks the viewer to imagine something, or states an absolute law ("you can **never**…") | `FMT-STORY` |
| …is one speaker with no real footage of the subject | `FMT-STORY` (abstract idea) or `FMT-LAB` with drawn models only (a machine or process). Never a talking head with nothing to cut to |

### 3.0a The alternation (every reel)
| Beat | Screen |
|---|---|
| **Hook** | `HOST` mid-gesture, caption on f0 (`FMT-CALL`), **or** `WORLD` already moving with the subject in frame (`FMT-LAB`, `FMT-STORY`) |
| **Setup / mechanism / number / part** | `WORLD`, `BAND` or `STRIP`; face absent; the voice continues |
| **Pivot** ("But they kept running into a problem.") | `HOST` full frame, 2–7 s |
| **Second voice** | `GUEST` full frame, cutaways to each named object, `REACT` cutaways under the guest's voice |
| **The key number / result** | `WORLD` or `STRIP`, or the `DOCK` (§3.9a) when the creator's reaction to it is the point (1–2 per 60 s) |
| **Payoff** | The object (`WORLD` / `STRIP`) or the presenter saying it plainly ("That is absurd.") |
| **Silence** | The payoff picture, no caption, no voice |
| **Meaning / vision** | `WORLD` (map, wide model), long camera move |
| **End** | §6.7 |

- **Face budget:** `FMT-LAB` ≈ 15% presenter + ≈ 20% guest; `FMT-CALL` ≈ 30% presenter + ≈ 18% guest + reactions; `FMT-STORY` 3–8% (2–4 anchors of ≈ 2 s).
- **Face shots:** anchors 2–7 s; **one** presenter take up to ≈ 18 s per reel, in the hook or setup, only while gesturing through a story (vt1 17.1 s, vt2 17.8 s and 16.0 s).
- **Picture shots:** 3–16 s when the camera moves; a drawn world may run 35–45 s uncut if its camera and content keep changing (vt3).
- Face ↔ picture is a **hard cut**; the voice runs across it (L/J-cut).
- **The speaker moves:** with the creator's own footage, the face comes back every ≈ 6–12 s for a pivot, a reaction or the plain-English line, and the pictures carry everything in between. Never a presenter take over ≈ 18 s; never a picture block so long the viewer forgets who is talking (`FMT-STORY`'s one-world camera excepted).

### 3.1 `HOOK` (0–5 s)
- **Frame 0 moves and is captioned:** the presenter mid-gesture (vt2) or a scene whose camera already moves with the subject in frame (vt1 orbit, vt3 black-hole edge sliding in). The first caption chunk is on f0 (all 3).
- **5–8 visual events in 3 s:** 5–6 caption swaps, the camera move, one picture event (a light pulse at f6–9 in vt1, the stamp in vt3, gestures in vt2). The references needed no cut before ≈ 4.5 s (vt3's first cut is at 4.63 s, on the next sentence); this edition brings the next picture or the presenter's look by ≈ 2.5–3 s, on the next sentence's noun, unless one continuous camera move is still revealing (§6.0).

### 3.2 `HOST`: presenter full frame
```
┌─────────────────────────┐ 0
│   (IG top UI, clear)    │ ← y 0–110
│      ╭────────╮         │ ← head top ≈ 140 (120–240 as he leans; never < 100)
│      │  face  │         │ ← eye line ≈ 475–510, face ≈ 300 px wide, x 430–650
│      ╰────────╯         │
│  shoulders, both hands  │ ← hands enter and leave the edges freely
│   Serif caption line    │ ← just under the chin (top 40–80 px below the chin)
│   (IG bottom UI)        │ ← y 1540–1920: no text
└─────────────────────────┘ 1920
```
- Locked-off tripod medium close-up from mid-chest, ≈ 50 mm feel, shallow focus, the studio as shot. Head never cropped (vt1, vt2). **No graphic shares this frame**; the caption is the only overlay. **No zoom change** at any cut (N6). **A close selfie:** keep it full screen (move the text, not the video; hair may touch the top edge, eyes to chin always in), or put it in the `DOCK` card on the world's ground that the footage fills; never shrink it over its own blurred copy (§12.2).
- **Night-anchor variant (vt3):** black background, tight close-up, front key. **Fix:** vt3 cut the top of the hair (head top ≈ 0). Keep head top ≥ 100, eye line 430–520, face ≤ 420 px wide; if the footage is tighter, keep it full screen and let the hair touch the top edge (eyes to chin always in); never scale it down over its own blurred copy (§12.2).

### 3.3 `GUEST`: a second person full frame
- **Location guest (vt1):** handheld ≈ 35 mm, often low angle; eye line ≈ 430, face 350–450 px wide, x 430–760; 1–6 s shots between cutaways.
- **Call guest (vt2):** the call recording upscaled to full frame, flat light; head top ≈ 345, eye line ≈ 650, face x ≈ 430, filling the width.
- **Fix:** the references let the frame cut the guest's face at a side edge (vt1 0:52.0, 1:11.5; vt2 1:23–1:25 when he leaned). Keep the whole face in: follow it inside the source frame, or cut away to the object being named; never scale the shot down over its blurred copy.
- Caption **gold** for every word the guest says, also over B-roll and reaction shots.

### 3.4 `REACT`: the presenter under the guest's voice
- Presenter in profile or three-quarter, laughing, nodding, looking at the object (vt2 1:29–1:30.5, 2:10.5–2:16), 1–6 s, at most one per answer; caption stays **gold**.
- **Fix:** vt2 cut the presenter's face at the right edge (1:14.5–1:20, 2:10.5). Here the whole profile is in, forehead to chin and nose to ear, ≥ 40 px from each edge. A shot from behind (vt1 0:48.7, filming with a camera) shows no face and is fine.

### 3.5 `WORLD`: the explanation full screen (face absent)
Full 1080×1920: a drawn or modelled scene, real B-roll of the object, an archive image or a map. The narrator is voice-over; the caption sits at its baseline with its shadow; the camera moves (M5); labels live in the scene (M6).

### 3.6 `BAND`: a 16:9 picture in a designed box on the world's ground
```
┌─────────────────────────┐ 0
│   the world's ground    │ ← deep navy gradient (or the model floor / black), a faint grid,
│   (gradient + grid)     │   a soft glow behind the box; never a blurred copy of the picture
│╭───────────────────────╮│ ← BAND-FIT:  y ≈ 656–1264 (1080×608; vt3 measured 663–1250), inset 24 px
││   16:9 graphic, sharp ││   BAND-CROP: y ≈ 398–1263 (1080×865, ×1.42, sides cropped; vt2)
│╰───────────────────────╯│   radius 24–32, 1 px light rim, soft shadow
│   Serif caption line    │ ← baseline 1368 / 1402, just under the band, on the ground
└─────────────────────────┘ 1920
```
- The references set the band over its own blurred, enlarged copy; **this edition never does** (Naman, 13 Oct: no footage or picture over its own blur). First choice: **cover-crop the picture to the part that matters, or push in, so it fills the frame**; when it only works wide, it sits in this designed box on the world's ground.
- For **landscape explainers** that only work wide: a symmetry panel, a simulation, an instrument display, a diagram (vt2 5.9 s, vt3 26.6 s).
- `BAND-FIT` when the edges matter (labels near the sides); `BAND-CROP` when the centre carries everything. Prefer `BAND-CROP` whenever the band's content would read small: its key element ≥ 560 px wide, its text ≥ 48 px.
- A designed box: rounded 24–32, a 1 px light rim, a soft shadow, on the world's ground (deep navy gradient, the model floor or black, with a faint grid). Face absent: **never put a face in a band**, never the creator's footage, and **never a blurred copy of the picture behind it**. Prefer `BAND-CROP`, or skip the band and fill the frame with a crop or push-in.

### 3.7 `STRIP`: an object on black
A photoreal cross-section as a horizontal strip (vt2 y ≈ 850–1110; here **≥ 420 px tall**, y ≈ 750–1170, so the parts read on a phone) on pure `#000000`; a hero object may sit lower (≈ y 1350–1600 with its title behind). The caption sits on the black below. The camera tracks slowly along it (≈ 8 s). Once or twice per reel, for the inside of a device.

### 3.8 `BUBBLE`: a magnified circle of the subject
- White rim 3–4 px, Ø ≈ 720, centre ≈ (640, 480), showing a close-up of something that has become too small to see (vt3: the character in the ship's window with a wall clock, 0:16–0:35.6).
- Slides in **diagonally from the top-right corner** (21 f, ease-out), holds the whole explanation (≈ 19 s), drifts slightly, leaves when the camera moves on. The world keeps moving behind it.
- It shows **the subject, never the speaker** (N1). A face inside it is **whole**, with ≥ 40 px to the rim.

### 3.9 `SHOW`: a person holds the real object to the camera
- The guest lifts the real object to the lens and explains it (vt2 1:21.7–1:40, a trap in a glass bell jar). The one allowed sharing of face and thing, because the thing is real.
- **Fix:** in vt2 the jar covered part of the guest's face and the edge cut it. Here the object sits **beside** the whole face; if it crosses the face, cut to a tighter crop of the object alone and keep the voice.

### 3.9a `DOCK`: the creator above the number (this edition)
- **When:** the one or two numbers or results the reel hinges on ("96% to 10%", "5 tools = 1 team"), when the creator's face reacting to it is half the moment. **1–2 per 60 s**, never two in a row, never in `FMT-STORY`.
- **Layout:** the creator's footage cover-cropped into a wide rounded card (filling it, centred on the face; never padded with a blurred copy), **x 70–1010 (940 px), y 150–860**, whole face with ≥ 40 px above the hair, full rich colour, a soft shadow and a 1 px cool rim from the world's light; the number or result below it fills **x 60–1020, y 920–1460** inside the drawn world, which stays alive (haze drifting, the number rolling). Caption just under the card.
- **In:** T-14, the frame eases into the card over 10–12 f (ease-out, a 2% overshoot that settles in 4 f) while the world fades up underneath. **Out:** T-15, the card grows back to full frame over 8–10 f on the next sentence's first word, or a hard cut to `WORLD` if the next line is a picture.
- **Why:** viewers keep watching a face; a number lands harder when they see the creator react to it. The alternation stays the spine; the dock is the accent.

### 3.10 Safe zones
- Key text inside **x 64–1016, y 110–1500**. Over pictures, caption baselines 1402 (`CAP-DOC`) / 1368 (`CAP-TEX`) keep descenders above ≈ 1420; on a face the caption sits just under the chin (§5.2).
- The bottom ≈ 380 px and right ≈ 110 px are platform UI: pictures may fill them, text never.
- In-scene labels sit in the upper two-thirds (vt1 "ELENA" y ≈ 470–560; the number y ≈ 700–1000; vt2 map tag ≈ y 300). Vertical credits at x ≈ 20–50, middle third.

---

## §4 Colour tokens

### 4.1 Core tokens (all formats)
| Token | Hex | Use |
|---|---|---|
| `capHost` | `#FAF9FC` (vt2 `#F9F9FB`, vt3 `#F8F8FA`) | Presenter / narrator captions |
| `capGuest` | `#E8C42A` (vt2 `#E8C52B`) | Guest captions, whoever is on screen |
| `capShadow` | `rgba(0,0,0,.50)`, offset +2/+3 px, blur ≈ 3 px | Caption drop shadow (`CAP-DOC`); `CAP-TEX` uses ≈ 30% |
| `capShadowHeavy` | `rgba(0,0,0,.75)`, offset +2/+3 px, blur ≈ 8 px | **Fix** for captions over white or bright cyan pictures (white-out, map) |
| `black` | `#000000` | `STRIP` background; the black before a pull-back; the frozen-ship void |
| `labelWhite` | `#FFFFFF` with a soft glow (≈ 8–12 px, 40%) | In-scene labels on the model floor and behind hero objects |
| `rim` | `#FFFFFF` | `BUBBLE` rim, 3–4 px |

### 4.2 World palettes (one per picture family)
| World | Values | Seen in |
|---|---|---|
| **Clay model** | Floor `#D3E4EC`, shadows `#4E6474`, white-grey buildings, saturated blue magnets, light pulses with core `#E9F7FC` and a cyan-white streak; soft vignette at the edges | vt1 |
| **Concept icon on navy** | Radial gradient `#272F4D` → `#191C2B`; glowing sphere `#C5E3FD`; black serif symbol on the sphere | vt2 p⁻ |
| **Symmetry / diagram panel** | Dark slate with neon red / green / blue circles, mirrored coloured hands, clocks | vt2 CPT band |
| **Object on black** | `#000000`; gold / copper electrodes, red coils, photoreal metal | vt2 trap |
| **Map** | Ocean `#0A93D5`, land `#5FDAF9`, a fine cyan grid, white dashed arcs, glowing point at the origin, concentric green-white ring markers on cities, a label tag on dark slate | vt2 |
| **Story world** | Night sky slate `#2C303F` with paper grain and white star specks; white textured cartoon ship, cyan window glass; the black hole pure `#000000` with a grey photon-ring gradient | vt3 |
| **Forbidden stamp** | Translucent crimson ≈ `#A0142A`, painterly edge | vt3 ⊘ |
| **Instrument HUD** | Teal `#219E9A` lines on near-black `#0B1414`; a red-amber-green gauge | vt3 |
| **Archive / sim** | As supplied: saturated astro colours, electric-blue grids, warm painted illustration | vt3 montage |

### 4.3 Meaning of colour
- **White caption** = the presenter is speaking. **Gold caption** = the guest is speaking. Nothing else uses gold text.
- **Cyan-white light moving along a path** = particles, energy or signal flowing (vt1 light pulses, vt2 map arcs).
- **Crimson** = forbidden / never / impossible (the ⊘). Used once per reel at most.
- **Shift toward red, then dark** = losing energy, fading from view, redshift (vt3 ship: blue → green → red → black over ≈ 12 s).
- **Teal UI** = an instrument or an imagined device the viewer looks *through* (vt3 "de-redshifter").
- **Pure white frame** = the opposite / mirror (vt3 white-out into the white hole).
- **Black void** = isolation, frozen time, the inside of a device.
- **Rules:** the world palettes never colour captions; captions are only white or gold. One accent hue per picture does the "look here" job (the blue magnets, the gold electrodes, the glowing city).

### 4.4 Footage look (don't fight it)
- **Studio:** low-key and moody; warm skin; deep navy shirt; dark bookshelf with warm practical bokeh; a teal painting as the one cool accent. Moderate contrast, natural saturation. Keep it as shot.
- **Night anchor:** black background, front key, warm skin, high contrast.
- **Location:** neutral-cool industrial light; saturated machine colours (blue steel, yellow railings, orange and blue magnets). Natural grade, handheld.
- **Call recording:** flat, warm beige; soft. Don't sharpen it to fake quality; let it read as a call.
- Normalise exposure between setups; no LUT, no teal-orange push.
- **Never pale** (the creator's direction, 12 Oct 2026): every setup keeps its own colour or a touch richer (saturation up to +10%, contrast +5%, true blacks). No desaturation, fade, milky or lifted blacks on any person. The only colour shifts in a reel are drawn ones (the redshift fade, the instrument's recolour).

---

## §5 Type tokens

### 5.1 Font map (observed faces are guesses; every renderer font is bundled)
| Role | Observed (guess) | Renderer font | Weight / style |
|---|---|---|---|
| `CAP-DOC` captions (vt1, vt2) | Merriweather / Georgia Bold: transitional serif, sturdy bracketed serifs | **Source Serif 4** | 650–700 |
| `CAP-TEX` captions (vt3) | CMU Serif (Computer Modern), regular | **Source Serif 4** | 500 (the reference's 400 is too thin on a phone) |
| Devanagari captions (if the script is in Devanagari) | — | **Noto Serif Devanagari** | 600 / 400 |
| In-scene label (vt1 "ELENA") | Wide-tracked white serif caps | **Source Serif 4** | 600, CAPS, tracking +18–25% |
| In-scene number (vt1 "16,200,000 km/h") | Courier-like monospaced slab | **Courier Prime** | Bold |
| Object title (vt2 "Antimatter Trap") | Computer-Modern-like italic serif | **EB Garamond Italic** | 400–500 |
| Icon symbol, map tag, diagram labels | Serif | **Source Serif 4** | 600 / 400 |
| Instrument name (vt3) | Small teal italic | **EB Garamond Italic** | 600 |
| Source credits | Small serif | **Source Serif 4** | 400, 22–26 px |

### 5.2 `CAP-DOC` (`FMT-LAB`, `FMT-CALL`)
| Property | Spec |
|---|---|
| Font | Source Serif 4 650–700, sentence case, punctuation kept, numerals as digits |
| Size | **76–84 px** (the references: ascender ≈ 51 px → ≈ 68–70 px, small on a phone); chunk shorter rather than shrink |
| Position | Centred x 540, **one line** (180–920 px wide). **On a face** (`HOST`, `GUEST`, `REACT`, `SHOW`): **just under the chin**, the line's top 40–80 px below `FACE(n)` chin (the references sat it on the chest at baseline 1402). **Over pictures:** ascender top ≈ 1340, **baseline ≈ 1402**, descenders ≈ 1425, clear of the hero |
| Colour | `capHost` white for the presenter; `capGuest` gold for the guest. **Follows the voice:** gold over the host's own reaction close-up (vt2 1:29–1:30.5) |
| Effects | No stroke or box; soft drop shadow (`capShadow`); `capShadowHeavy` over white or bright cyan (fix) |
| Chunking | **1–4 words** (typically 2–3) on phrase boundaries, 0.4–1.6 s each |
| Animation | **None**: hard swap on the next chunk's first onset; may run ≤ 5 f into the next shot (vt1 28.63) |
| Pauses | Holds through gaps < 0.6 s; clears in longer silences (adopted from vt3) |
| Coverage | Every spoken word, hook included; no highlights or emoji |

### 5.3 `CAP-TEX` (`FMT-STORY`)
| Property | Spec |
|---|---|
| Font | Source Serif 4 500, lighter than `CAP-DOC`; sentence case, lowercase where natural ("stronger,", "you see.", "opposite:") |
| Size | **80–88 px** (the reference ≈ 72 px); **baseline 1368** (71%) over pictures; just under the chin on the presenter anchors |
| Position | Centred x 540, one line, usually 200–340 px wide |
| Colour / effects | `capHost` only; very faint shadow (≈ 30%); `capShadowHeavy` on white-outs (fix) |
| Chunking | **1–3 words**, often one ("shaking", "rate.", "so", "Light"), 0.3–1.2 s |
| Silences | **Cleared** in every silence ≥ 0.5 s (vt3 48.7–51.5, 57.0, 1:07–1:08.5) |

`FMT-LAB` / `FMT-CALL` → `CAP-DOC`; `FMT-STORY` → `CAP-TEX`. Never both in one reel.

### 5.4 In-world labels (`LBL`)
| ID | Label | Spec | Seen |
|---|---|---|---|
| `LBL-FLOOR` | A term flat on the model's floor, in perspective | Source Serif 4 600 caps, wide tracking, white with soft glow, ≈ 750 px wide at its nearest, y ≈ 470–560 as it lands. Fades in over **15 f** on the word while a pulse runs past; **no exit**: the camera carries it out of frame | vt1 "ELENA" (f989→1004, on "Elena" at 33.03 s) |
| `LBL-NUM` | A number already in the scene, revealed by the camera | Courier Prime Bold, white with glow, full width, y ≈ 700–1000. The camera trucks so the digits slide in over **36 f** ease-out, starting ≈ 0.5 s before the number; readable as it is said; hold ≈ 3 s; out by hard cut | vt1 "16,200,000 km/h" (f1214→1250) |
| `LBL-TITLE` | The object's name behind it | EB Garamond Italic, white, ≈ 90–110 px, ≈ y 1320; revealed by the pull-back (21 f), settled ≈ 0.3 s after the key word | vt2 (f2044–2065) |
| `LBL-TAG` | A place on a map | Source Serif 4 600, **≥ 48 px** (the reference ≈ 28–34 px) white on a dark slate tag, under the glowing point | vt2 "CERN" |
| `LBL-HUD` | An instrument's name and readouts | EB Garamond Italic 600 teal, ≥ 48 px, top-right; readouts drawn in | vt3 |
| `LBL-CREDIT` | Credit for third-party imagery | Source Serif 4 400, 22–26 px, white ≈ 70%, rotated 90°, x ≈ 20–50 | vt3 |

**Rules:** a label lands on the word it names (±6 f), is never a box, never repeats the caption (the caption says the sentence, the label names the thing), and stays readable ≥ 1.5 s. Real text in footage (a poster, a sign) does title duty (vt2 0:17.8).

---

## §6 Hook system

### 6.0 The 10× hook
- **Frame 0 is the exact subject, big and already moving,** with the first caption chunk on it: the model orbiting with a pulse already on the beam, the ship mid-deform, or the presenter mid-gesture, whole, in full colour. Never a still, a title card or a black frame.
- **The fact lands as a picture inside the first second:** the key word gets its physical event on its onset: the number rolls into the floor (EV-1), the ⊘ stamps, the pulse visibly slows, the loop tag pins itself to the subject (EV-5).
- **The camera is travelling toward the thing by ~1.5 s,** and the next picture (or the presenter's look to camera) arrives by ~2.5–3 s, on the next sentence's noun.
- **The opening line stands alone** (M9) and the loop line arrives by ≈ 6–10 s, sooner than the references' 15 s.
- **Sound:** the voice dry; the picture events carry soft sound from the first second (§6.6).

### 6.1 What the hook must do in about 3 seconds
1. **State one surprising fact that stands on its own:** the subject named in full, the claim complete in the first sentence. An absolute ("You can never see anything enter a black hole."), a scarcity ("There is only one antimatter factory in the world."), or a number with stakes.
2. **Show the subject moving on frame 0,** or the presenter mid-gesture. Never a still or empty frame.
3. **Open a loop by ≈ 15 s:** a "how?" (vt1 "they need to be slowed down more"), a promised change (vt2 "But that might soon change"), or a "why?" told as a story (vt3 "Imagine you trap your nemesis…").

**Fix: the native hooks start mid-story** (they are excerpts):
- vt2 opens "One thing that makes **this research** so tricky…", pointing backwards. Start where the subject is named: "there is only one antimatter factory in the world" (with existing footage, trim the back-reference: §14.1).
- vt1 opens on a mechanism ("Strong electric fields in **the decelerator**…") over a model the viewer hasn't met. Put the surprise first, the mechanism second: "Antiprotons arrive here at 96% of the speed of light. Far too fast to study."
- vt3 is the house model: complete, absolute, literal ("You can **never** see anything enter a black hole." + the ⊘ drawn on "enter a black hole").

Caption, voice and picture say **the same fact three ways**: the words, the performance, the thing itself.

### 6.2 Hook formulas (`HF`)
| ID | Formula | Spoken pattern | Seen in |
|---|---|---|---|
| HF-1 | **Absolute claim** | "You can never [see / do / reach] X." *never / always / only* carries it | vt3 (the strongest native hook) |
| HF-2 | **Scarcity + change promise** | "There is only one X in the world. … But that might soon change." | vt2 |
| HF-3 | **Number with stakes** | "[Thing] lasts / moves [number]. [Why that is absurd / a problem]." | vt1 (fixed), vt2 "614 days… That is absurd." |
| HF-4 | **Thought experiment** | "Imagine you [put someone] in [situation]." | vt3 0:04.3 |
| HF-5 | **Expectation vs reality** | "You'd expect X. But that is not what you see." | vt3 0:16.9 |
| HF-6 | **The pressing question** | A deliberately naive question to an expert, played straight | vt2 1:10.7 (`FMT-CALL` only) |

Add-ons: **the literal symbol** (the claim's key word drawn into the picture, ⊘ on "never"); **the loop line** within 15 s; **a held beat** of 0.3–0.7 s before the loop line (vt2 keeps 0.7 s before "But that might soon change"). Write **3 variants** with different formulas; recommend one.

### 6.3 Hook visuals (`H`)
| ID | Hook visual | Recipe |
|---|---|---|
| **H-1** | **Stamp on the subject** (`FMT-STORY`) | f0: the subject centred, the camera already moving. On the verb the subject glows and deforms (≈ 24 f); a translucent crimson band sweeps across on a diagonal (19 f); it becomes the bar of a ⊘ while the ring draws in from the top (11 f); hold ≈ 40 f; hard cut on the next sentence (vt3 f36–111) |
| **H-2** | **Presenter mid-gesture** (`FMT-CALL`) | f0: `HOST`, hands moving, whole head (head top ≈ 140), first caption on; no graphic, no music; 6 caption swaps in 3 s |
| **H-3** | **Model orbit with the number** (`FMT-LAB`) | f0: the model orbiting; a light pulse along the beam at f6–9; the number lands in the floor (`LBL-NUM`) on its word by ≈ 1 s (fix: vt1 showed no number until 40 s) |
| **H-4** | **Concept icon rack-in** | Hard cut to an oversized blurred disc; in 10 f it shrinks to Ø ≈ 330 and racks into focus; then drifts 5% smaller over 2 s (vt2 0:20.8) |
| **H-5** | **The real object, then inside it** | The object full frame, then the T-03 zoom-through into its cross-section (vt2 0:54.6–0:58) |
| **H-6** | **Map with radiating arcs** | The origin blooms; dashed arcs stream out on loop (vt2 2:07.3); for "only one place / everywhere" |

### 6.4 Hook timing template (≈ 0–15 s)
| t | Beat |
|---|---|
| f0 | The subject moving (H-1, H-3, H-4, H-6) or the presenter mid-gesture (H-2); first caption chunk on |
| 0–3 s | The opening sentence in 5–6 chunks; one picture event lands on its key word |
| 3–6 s | Hard cut on the next sentence to the first explanation picture, or the presenter continues |
| 6–10 s | The loop line, optionally after a 0.3–0.7 s beat; the loop tag pins itself to the subject (EV-5) |

### 6.5 Hook text rules
The opening sentence is ≤ 16 words, names its subject, and holds the surprising word. No title card or headline: the caption is the only text; an in-scene label or the stamp may carry the key word. Numbers as digits from the first frame ("96% to 10%").

### 6.6 Hook sound
- **The voice stays dry** (vt2: pause floors −48 to −60 dBFS for its first 17 s); vt1 and vt3 ran a score under f0; we never do.
- **The pictures get their sound from the first second, softly** (§11): a glass ping as a label or number lands, an air move under the first camera travel, a low weight as the ⊘'s ring closes. No slam, riser or whoosh on f0 itself; nothing as loud as the voice.

### 6.7 Endings (pick one per reel)
**Fix: all three references stop hard on a cliff** that belongs to the long-form video (vt1 "…differently from normal matter.", vt2 "…all the top research institutions.", vt3 "…a way to travel between them."). A stand-alone reel closes its own loop, then ends with one of these, built only from devices seen in the reels:

| ID | Ending | Recipe | Built from |
|---|---|---|---|
| **E-1** | **The landing** | The vision picture's camera **settles** on the subject with its in-scene label on the last word; hold 0.5–1.0 s; hard cut | vt2 map fly-over landing on the origin tag |
| **E-2** | **The return** | The last picture returns to the hook's composition; the last line restates the fact, now understood | vt1 outro camera returning toward the opening picture (guess) |
| **E-3** | **The presenter's last word** | A final `HOST` anchor, whole head, 2–4 s: one plain sentence that closes the loop, plus the creator's own call to action if the script has one, captioned like every line; hard cut ≤ 6 f after the last word | vt3 presenter anchors; vt2 "That is absurd." |
| **E-4** | **The honest pointer** | For a series: close this part's loop, then one line naming the next question over the last picture, held still ≥ 0.5 s | vt3 montage, fixed so its own question is answered first |

No end card, logo, sticker, overlay button, third-party mention or black tail.

---

## §7 Structure devices

### 7.1 Structure devices (`SD`): pick the ones the format needs
| ID | Device | Use when | Recipe |
|---|---|---|---|
| **SD-1** | **Open loop → payoff** | Every reel | Name the problem by ≈ 15 s; pay it off on screen (vt1: "slowed down more" → the second ring at 0:33; vt2: "might soon change" → the trap at 1:05) |
| **SD-2** | **"Here's what that means" pivot** | After a record or a fact | Fact (614 days) → `HOST` "But here's what that means" → the implication (ship it) → its picture (map) (vt2 1:58.5) |
| **SD-3** | **Name it, then show it** | A guest or the presenter names physical parts | Each named object gets a 1.2–3.9 s cutaway on the noun, then back to the face (vt1 0:53–1:07: "blue devices" → dipole magnet, "orange ones" → quadrupole, "thin pipe" → the beam pipe) |
| **SD-4** | **One-world camera** | A thought experiment | Tell it in one continuous drawn scene: push, pull back, pan, reveal; cut only when time "stops" (vt3 0:10.4–0:44.9, 34.5 s without a cut) |
| **SD-5** | **Silence beat** | After the payoff or the key reveal | 1.0–2.1 s, picture holds (still moving slowly), no caption, no voice (vt3 48.7–50.7) |
| **SD-6** | **Expectation vs reality** | A counter-intuitive result | "You'd expect X." (the picture shows X starting) → "But that is not what you see." (the picture does the opposite) (vt3 0:16.9) |
| **SD-7** | **The pressing question (comedy beat)** | `FMT-CALL`, once | The presenter asks a deliberately naive question; a pause before it; a reaction shot after it (vt2 1:10.7) |
| **SD-8** | **Presenter as punctuation** | `FMT-STORY` | A 2–4 s `HOST` anchor marks the turn from the story to the big claim, and again before the last claim (vt3 1:29.5, 1:43.5) |
| **SD-9** | **Escalation montage** | The final 15–20 s of a reel that widens out | 1.0–3.0 s shots cut on each noun (12 cuts in 20 s in vt3), the picture getting bigger in scale each time (spacetime → the sun → the galaxy → the black hole → its opposite) |
| **SD-10** | **Show-and-tell** | A guest has the real object | `SHOW`: the object lifted to the camera, the whole face beside it (vt2 1:21.7, fixed) |

### 7.2 The block ritual (one recipe per explanation block, the same every time)
1. **Pivot in:** the presenter (or guest) states what is about to be explained, full frame (`HOST` / `GUEST`), 2–7 s.
2. **Hard cut to the picture** on the first noun of the explanation; the voice continues (L-cut).
3. **Inside the block,** the picture evolves with the sentence: the camera moves to the part being named, the label lands in the scene on its word, the light pulse runs along the path being described. One new picture event every 1.5–3 s; one shot may hold 8–16 s if its camera moves and its content keeps changing.
4. **The block's last frame is its answer:** the label readable, the number in the floor, the object whole.
5. **Hard cut back to a face** on the next pivot sentence (or straight into the next block if the explanation continues).

### 7.3 Open loops (retention)
- **The how-loop:** "they need to be slowed down more" → the solution block (vt1).
- **The change-loop:** "But that might soon change" → the discovery (vt2).
- **The why-loop:** "You can never…" → "Imagine…" → the reason (vt3, answered at 0:28 and 0:44, then escalated twice).
- **The escalating mini-loop:** each answer opens a bigger question ("if you could see that light…", vt3 1:04.7); at most two per reel.
- **Every loop is closed on screen** inside the reel (M10). The last loop may point onward only after the reel's own question is answered (E-4).

### 7.4 Rhythm by format
- `FMT-LAB` **slow-fast-slow:** model (≈ 11 s) + host take (≈ 17 s) → moving model payoff (≈ 16 s) → location cuts every 1.2–3.9 s → model outro (≈ 15 s).
- `FMT-CALL` **long-short:** host takes of 16–18 s against 1–3 s cutaways; one 15 s zoom-through block; an 11.5 s map outro.
- `FMT-STORY` **two extremes:** 3 transitions in 90 s, then 12 cuts in 20 s. All: median shot 2.1–3.1 s.

---

## §8 Graphics system

### 8.0 The 10× layer (what the best motion designer adds to a patient documentary)
**Animation principles, applied to physics:**
| Principle | How it shows up here |
|---|---|
| **Anticipation** | The camera eases in for 3–5 f before it travels; a pulse brightens at its source 4 f before it leaves; a label's glow rises 3 f before its letters |
| **Squash & stretch** | Physical only: a pulse stretches along its path in proportion to its speed (a fast antiproton is a long streak; slowed, a short bead); solid models never deform; the story world's cartoon props may (the ship squashes as it deforms, vt3) |
| **Follow-through & overlap** | Secondary parts settle 4–8 f after the hero (labels, ring markers, dust); a focus pull finishes 4 f after the camera stops |
| **Arcs** | Cameras orbit and crane on arcs; particles travel the curved beam path; map arcs are great-circle curves |
| **Slow in / slow out** | Every camera move eases in and out (the map's near-linear glide is the one exception); light fades on long exponential tails |
| **Staging** | One exact thing sharp and at full brightness; everything else at 40–60% brightness, out of focus (6–14 px) or in haze |
| **Secondary action** | While a shot holds: pulses keep flowing, dust and stars drift in parallax, the HUD's readouts tick, the bubble's clock keeps time |
| **Timing** | Physics sets it: a fast thing crosses in 6–10 f, a slow thing over seconds; the voice sets the beats; a picture event every 1.5–3 s |
| **Exaggeration** | Once per reel the scale goes huge: the scale ladder (EV-2), the montage's last image, or the white-out |
| **Solid drawing** | Real depth: 3–5 parallax planes, true perspective on floor labels, one consistent light direction per world |
| **Appeal** | Clean clay whites, deep blacks, one accent hue per picture, soft bloom on light, paper grain only in the story world |

**Design hierarchy (every frame):** 1. the exact thing being said: big (≥ 640 px, or across the width), sharp, brightest · 2. its in-world label or number · 3. the caption (white or gold, ≥ 76 px) · 4. context: the rest of the model or world, dimmed, defocused or hazed. On a face: the face, then the caption just under the chin; nothing else.

**Effects toolkit (inside drawn worlds only):** depth of field and rack focus (EV-6); volumetric light and soft bloom on energy (pulses, the map's origin, the photon ring); atmospheric haze between depth planes; motion trails (EV-4); the X-ray scan line (EV-3); chromatic rays only inside T-07; paper grain only in the story world; a soft edge vignette only in the model world. **On footage:** nothing but a clean, rich grade. **Never anywhere:** flashes, light leaks, RGB splits, glitches, shake, overlay flares.

**Calm, never idle:** the voice keeps its unhurried pace (2.6–2.9 words/s in the references; a faster creator keeps their own natural pace and pauses). Retention comes from what moves inside each picture, not from cutting faster: the camera never parks, something lands every 1.5–3 s, and the open question stays visible until it's answered.

### 8.1 Graphic families (`G`)
| ID | Family | Look | Motion signature | Seen |
|---|---|---|---|---|
| **G-1** | **Clay model of the place** | White-grey matte model, cool rim light, a saturated accent on the parts that matter (blue magnets), soft edge vignette | Slow orbit / truck / dolly with tilt; light pulses along the beam; labels in the floor | vt1 (3 shots, 42 s) |
| **G-2** | **Illustrated story world** | Hand-textured cartoon with paper grain, slate night sky, white props, black void objects | One continuous virtual camera; objects deform, glow and recolour to show physics | vt3 |
| **G-3** | **Concept icon** | One glowing symbol on a navy radial gradient | Defocus scale-in, then a 5% drift | vt2 |
| **G-4** | **Landscape explainer in a band** | A 16:9 diagram, simulation or panel in a designed box on the world's ground (or cover-cropped full frame), never over its blurred copy | Its own animation | vt2, vt3 |
| **G-5** | **Cross-section on black** | Photoreal metal cutaway as a strip | Slow lateral track as parts fill in; T-03 in, T-04 out | vt2 |
| **G-6** | **Map** | Cyan grid world map, glowing origin, dashed arcs, ring markers, slate tags | Radiate on loop / 11.5 s fly-over landing on the origin | vt2 |
| **G-7** | **The real thing, handheld** | B-roll of exactly the object named (the magnet, the pipe, the crate, the team, the poster) | 1.2–3.9 s cutaways on the noun | vt1, vt2 |
| **G-8** | **Archive science images** | Observatory images, a painted portrait of a historical scientist, a macro of a falling drop, renders | Slow push, zoom chain; credit at the left edge | vt3 |
| **G-9** | **Instrument HUD** | Teal wireframe sphere, brackets, rings, gauges, an italic name | Draw-on; contents recolour with the voice | vt3 |
| **G-10** | **The real object in a hand** | A person holding the device to the lens | `SHOW` | vt2 |

**Rules:** 3–5 families per reel; the format's home family carries most of it (G-1 in `FMT-LAB`, G-2 in `FMT-STORY`, a mix in `FMT-CALL`). A family runs as long as its camera keeps moving. **Never** a family in a box beside a face.

### 8.2 Staging choreography
1. **Lead:** the picture is there before its word (the number sits in the scene; the camera reveal starts ≈ 0.5 s before "16.2 million"; the cutaway lands on the noun).
2. **Land on the word:** the label fades in (15 f), the stamp completes, the icon racks into focus.
3. **Read (1.5–4 s):** the camera keeps moving; one thing changes inside (a pulse, a clock slowing, a colour shifting).
4. **Hand-off:** the camera **moves on** (labels leave by camera motion, no exit animation), or a hard cut on the next noun.

Move inside a block; cut between blocks.

### 8.3 Pattern specs (`P`)
| ID | Pattern | Family | Recipe |
|---|---|---|---|
| P-01 | **Model orbit** | G-1 | The whole place from ≈ 35–45° above; orbit ≈ 3–5°/s; a pulse every 2–4 s |
| P-02 | **Dolly to the part** | G-1 | Dolly in and tilt down onto the named part, 3–5 s ease-in-out |
| P-03 | **Floor label** | G-1 | `LBL-FLOOR` fades in on the word; leaves by camera motion |
| P-04 | **Camera-reveal number** | G-1 | `LBL-NUM` enters as the camera trucks, 36 f from ≈ 0.5 s before the number; hold ≈ 3 s |
| P-05 | **Light pulse flow** | G-1 / G-6 | A cyan-white streak along a path, looping under the narration |
| P-06 | **Exit to many** | G-1 | Pulses leave along N lines to N destinations, on "sent on to N…" |
| P-07 | **Name-then-show cutaway** | G-7 | The named object full frame, cut on the noun, 1.2–3.9 s, back to the speaker |
| P-08 | **Context B-roll** | G-7 | Team, hall, poster, crate; 1.2–2 s each on the setup's nouns |
| P-09 | **Concept icon** | G-3 | T-08 entrance on the noun; 5% drift; hard cut out |
| P-10 | **Band explainer** | G-4 | `BAND-FIT` / `BAND-CROP`, hard cut in and out |
| P-11 | **Zoom-through into the device** | G-7 → G-5 | T-03, then an ≈ 8 s track along the strip |
| P-12 | **Pull-out to the title** | G-5 | T-04 with `LBL-TITLE` |
| P-13 | **Cross-section reprise** | G-5 | The same strip for a later fact about the inside, 3–5 s |
| P-14 | **Map radiate** | G-6 | Origin blooms, dashed arcs stream out; static camera |
| P-15 | **Map fly-over** | G-6 | 11.5 s glide, ring markers pop on cities, settles on the origin tag on the last word (E-1) |
| P-16 | **Stamp** | G-2 | ⊘ on an absolute word (H-1) |
| P-17 | **Launch** | G-2 | The subject leaving toward the far object, shrinking in perspective, 5–6 s |
| P-18 | **Close-up → pull-back** | G-2 | From a detail (the window, the face) pull back until it is a dot, ≈ 5.6 s |
| P-19 | **Magnified bubble** | G-2 | `BUBBLE` with the close-up of the now-tiny subject |
| P-20 | **Slowing clock** | G-2 | A clock and a repeated gesture inside the bubble slow in steps with "slow down" |
| P-21 | **Freeze and fade** | G-2 | T-05 to the subject alone on black; then blue → green → red → black over ≈ 12 s, paced to "dimmer and redder until it completely fades" |
| P-22 | **Photon squiggles** | G-2 | Red wavy lines leaving the subject, sparser as the voice says "fewer" |
| P-23 | **Pull-back into the instrument** | G-2 → G-9 | T-06, then the HUD draws on (33 f) |
| P-24 | **Recolour in the instrument** | G-9 | Red silhouettes regain colour; the sphere shifts dark → crimson → blue, 1.5–3 s per step |
| P-25 | **Escalation montage** | G-4 / G-8 | 1.0–3.0 s shots cut on each noun, growing in scale |
| P-26 | **Zoom chain** | G-8 | T-11 deeper into one image |
| P-27 | **White-out mirror** | G-8 | T-07 into the opposite object |
| P-28 | **Show-and-tell** | G-10 | `SHOW`, the whole face beside the object |
| P-29 | **Reaction cutaway** | — | `REACT` under the guest's voice, gold caption, 1–6 s |

### 8.4 Line → pattern lookup (start here for every sentence)
| Line type | Primary | Alternates |
|---|---|---|
| "This is where it happens" / the whole place | P-01 | P-08 |
| A named part ("a secondary ring called X") | P-02 + P-03 | P-07 |
| A speed, distance, count or record | P-04 | P-13 |
| Something flows, travels, is sent | P-05 | P-06, P-14 |
| A guest naming parts ("the blue ones are…") | P-07 | P-28 |
| Who / where (the team, the lab, the experiment) | P-08 | real-world text in shot |
| An abstract quantity | P-09 | P-10 |
| A principle with symmetric parts, a sim, a diagram | P-10 | P-23 |
| "Inside it there is…" / how a device works | P-11 | P-13 |
| Naming the device after explaining it | P-12 | P-03 |
| "Only one place / to everywhere / the vision" | P-14 → P-15 | P-06 |
| "You can never / it's impossible" | P-16 | — |
| "Imagine you…" | P-17 / P-18 | P-19 |
| Something too small to see is the point | P-19 | P-18 |
| "Time slows" / "it stops, fades" | P-20 / P-21 | P-22 |
| "If you could see it…" / "it reveals everything" | P-23 → P-24 | P-10 |
| The widening finale | P-25 | P-26 |
| "Its opposite" | P-27 | — |
| "I have one here" | P-28 | P-07 |
| A guest's long answer | `GUEST` + P-29 + T-12 | P-07 on its nouns |
| A pivot, an opinion, a joke, "That is absurd." | `HOST` | — |

### 8.5 Density and variety
- A **new picture event every 1.5–3 s** inside a block (a cut, label, pulse, recolour, rack focus or reveal); never a static frame > 3 s (M5).
- **Sizes are floors** (top of this file): the exact thing ≥ 640 px wide once the camera lands, groups and maps across the width, in-world type ≥ 48 px; no mostly-empty frame for more than ~0.7 s.
- ≈ 10–16 picture beats per minute in `FMT-LAB` / `FMT-CALL`; ≈ 8 per minute in `FMT-STORY` plus continuous camera motion.
- No pattern more than 3 times in a row, except P-07 inside one guest answer.

### 8.6 Asset rules
- **Drawn, not faked:** models, story worlds, icons, cross-sections, maps and HUDs are drawn in the renderer as 2.5D layered planes with a virtual camera, in the §4.2 palettes.
- **The real thing when it exists:** photos or footage of the actual object, place or person (supplied, filmed by the creator, or from an official source with its credit).
- **Archive images** only from reusable sources, always credited (M12). No film or TV clips, music videos or other creators' footage; a painted stand-in replaces a historical photo you can't use (vt3 used a painted portrait).
- **Numbers and labels are live text**, never baked into images. Blur private data in any capture. Save to `edit/assets/<beat-id>.*`.

### 8.7 The "one exact picture" filter
- **Allowed:** the specific machine and part, a faithful simplified model, a drawn thought experiment, a real map, a credited image of the specific object.
- **Banned:** generic "science" filler (floating particles, glowing brains, plexus loops), stock footage of a different lab, pictures of a mood instead of a noun.
- **The test:** with the sound off, does the picture tell which object, number or event the sentence is about?

### 8.8 Elevated devices (new in this edition)
| ID | Device | When | What runs | Sound |
|---|---|---|---|---|
| **EV-1** | **Rolling number** (`LBL-NUM`, elevated) | Any speed, count, record or percentage | Courier Prime digits (≥ 120 px cap height) roll odometer-style through ≈ 8–12 values over 18–24 f, settling exactly on the unit's onset; the unit and a hairline scale sit beside it; the world matches the number (a percentage of light speed sets the pulse's speed) | `telemetry-graph-rising-01-2025-08-27-06-33-50-utc-36877-telemetry-graph-rising-01-full` (trimmed, low), `05405-shine-ding` on the settle |
| **EV-2** | **Scale ladder** | "Tiny", "huge", "N times", anything across orders of magnitude | The camera pulls back (or dives in) through 3–5 nested drawn scales, each landing for 0.8–1.2 s with an in-world scale tag (`LBL-TAG`: "1 m", "27 km", "Earth"); haze swallows each previous scale | The list tick on each tag; `long-thick-whoosh-long-thick-whoosh` low under the travel |
| **EV-3** | **X-ray sweep** | A quick look inside a real object (T-03 already used, or a small device) | A bright scan line crosses the real photo or B-roll over 18–24 f and leaves its matching drawn cutaway behind; the parts glow up in the order they are named | `digital-scan` (low) + a soft air |
| **EV-4** | **Physics trails** | Anything that moves: particles, ships, signals, light | Every moving thing leaves a 6–10 f fading trail whose length shows its speed; a change of speed or direction shows the instant it's said ("slowed to 10%": the streak shrinks to a bead) | `ui-sparkle` (very low) on a speed change |
| **EV-5** | **The loop tag** | The open question, from its loop line to the payoff | A small slate tag with "?" pins itself to the subject in the world (≥ 48 px) when the loop opens and rides with the camera; at the payoff it flips (6 f) to the answer: the number, the name, the place | `hint-appear-2025-08-27-02-25-12-utc-hint-appear-02` on the pin; `short-shine-2025-08-27-06-45-01-utc-short-shine-4` on the flip |
| **EV-6** | **Rack focus** | Every model and story-world shot | Foreground and background split by depth of field (6–14 px blur); the focus racks to the next named part on its word over 12–15 f | none |
| **EV-7** | **The held breath** | The payoff + SD-5 | Every motion in the picture eases to a stop over 10–15 f except a 1.00 → 1.03 camera creep; the caption clears; 1.0–2.1 s of silence; the next line restarts motion | Silence; then one weight, or nothing |
| **EV-8** | **Living still** | Every archive image or photo | Split into 2–4 depth planes (subject, mid, background) with a parallax push instead of a flat zoom; the credit at the left edge | none |

---

## §9 Transition system (`T`)

Transitions in this style are **almost invisible.** A hard cut on a noun is the default; the voice runs across it. The few signature moves are reserved for meaning: going *inside* a device, *stopping* time, the *opposite* of a thing.

### 9.1 Transition library (30 fps)
| ID | Transition | Frames @30 | Recipe | Source |
|---|---|---|---|---|
| **T-01** | **Hard cut** (default) | 0 | Straight cut, on a noun or at a sentence start. The voice continues across it; the caption may run on 0–5 f into the new shot | vt1 24/24, vt2 29/30 |
| **T-02** | **J-cut into a new speaker** | 2 | The new speaker's voice and its coloured caption start **2 f before** the picture cut to them | vt1 f1336→1338 |
| **T-03** | **Real → drawn zoom-through** | ≈ 63 + track | **f0–6:** cross-dissolve the real object into its matching drawn twin (same angle, same geometry). **f9–27:** the camera pushes in. **f30–39:** a dark port opens on the surface with a radial blur. **f42–51:** the camera flies through the port. **f54–63:** the black interior resolves into a horizontal cross-section (`STRIP`). Then an ≈ 8 s lateral track along it as parts fill in | vt2 f1681–1744 |
| **T-04** | **Pull-out reveal with title** (bookend of T-03) | 45 + 21 | **f0–45:** the camera pulls back out through the same port; the device shrinks into its whole model. **f48–69:** its name (`LBL-TITLE`) reveals behind it, settling ≈ 0.3 s after the key word | vt2 f1996–2065 |
| **T-05** | **Time-stop dissolve** | 10 | Cross-dissolve from the moving subject to the same subject smaller, alone, on black: the moment time "stops". Used once | vt3 f1077–1085 (8 f @23.976) |
| **T-06** | **Pull-back into the band** | 25 + blur | From black, a sliver of the world appears at the right edge, widens leftward and curves (the camera pulling out), and settles into a 16:9 band (`BAND-FIT`) with the subject centred; the world's ground (gradient + grid) fills above and below from f27; never a blurred copy | vt3 f1632–1654 (20 f @23.976) |
| **T-07** | **White-out mirror** | 15 + 10 + 8 | **f0–15:** push into the image while exposure rises to white. **f15–25:** pure white hold. **f25–33:** the opposite object materialises from the white with chromatic-aberration rays and resolves. Lands on the word "opposite". Captions over it use `capShadowHeavy` (fix) | vt3 f2422–2452 @23.976 |
| **T-08** | **Defocus scale-in** (graphic entrance) | 10 | Hard cut to an oversized, fully blurred disc; it shrinks to its size and racks into focus, strong ease-out; then a 5% scale-down drift over 2 s | vt2 f624–634 |
| **T-09** | **Camera move instead of a cut** | — | Inside a drawn world, move the virtual camera (pan, pull-back, push-in) to the next subject instead of cutting; smooth ease-in-out, 1–5 s per move | vt3 0:10.4–0:44.9, vt1 model shots |
| **T-10** | **Subject match cut** | 0 | Hard cut from the model of a thing to the real thing (same subject, not a matched frame): the drawn ring → the real hall with the ring | vt1 0:44.6→0:45.9 |
| **T-11** | **Zoom chain** | 2 × ≈ 4 | Soft dissolves (≈ 4 f) deeper into the same image region, ≈ 0.6 s apart | vt3 ≈ 97.97, 98.56 |
| **T-12** | **Plain jump cut** (guest answers only) | 0 | A cut inside a guest's answer to tighten it; **no zoom change** to hide it; on a word gap | vt1 f2717, 2768, 2882 |
| **T-13** | **Hard end** | 0 | Cut ≤ 6 f after the last word, or a still last frame held ≤ 1.0 s (§6.7) | all (fixed endings) |
| **T-14** | **Dock in** (this edition) | 10–12 | Full frame eases into the `DOCK` card (ease-out, 2% overshoot, 4 f settle); the world fades up below | this edition (§3.9a) |
| **T-15** | **Dock out** (this edition) | 8–10 | The card grows back to full frame on the next sentence's first word | this edition (§3.9a) |

### 9.2 Transition grammar
| Boundary | Use | Never |
|---|---|---|
| Frame 0 | Already moving (no transition) | A fade from black, a flash, a slam |
| Face → picture | **T-01** on the first noun of the explanation, voice continuing | A face shrinking into a box; a split |
| Picture → face | **T-01** on the pivot sentence's start | A dissolve |
| New speaker | **T-02** | A cut late after the voice starts |
| Model → real thing | **T-10** | — |
| Real object → its inside | **T-03** (once per reel) | A plain cut to a cross-section without the real object first |
| Inside → whole object + its name | **T-04** (bookend of T-03) | — |
| Story world → instrument / diagram | **T-06** | — |
| Time stops / a state change in the subject | **T-05** (once) | — |
| "Opposite" | **T-07** (once) | Any other white flash |
| Concept icon entrance | **T-08** | Pops, bounces |
| Inside one drawn world | **T-09** | Cuts that reset the camera for no reason |
| Inside a guest's answer | **T-12** | Punch-ins to hide it |
| Montage | **T-01** on each noun; T-11 inside one image | — |
| Last word | **T-13** | A black tail; an end card |

### 9.3 Transition map (part of the plan, §1 step 12)
A list of `{t, id, from, to, note}`: every face ↔ picture cut, every new speaker, every signature move. §14.1's last column is a complete example.

### 9.4 Transition budget (per reel)
- **T-03 / T-04:** at most one pair. **T-05:** ≤ 1. **T-06:** ≤ 1. **T-07:** ≤ 1. **T-08:** ≤ 2.
- **T-12:** ≤ 3 per guest answer; never on the presenter's takes (cover a presenter retake with a cutaway instead).
- **T-01:** unlimited; each lands on a noun or a sentence start (±3 f of the word onset).
- Signature transitions carry their sound (§11.1); plain hard cuts carry nothing, except at most one soft air at a face ↔ picture crossing.

---

## §10 Motion tokens, camera, finishing

### 10.1 Motion tokens (30 fps)
| Token | Value |
|---|---|
| Picture lead | Cutaways land −2…+6 f of the noun's onset; a camera reveal starts ≈ 15 f before its number |
| Label fade / number reveal / title reveal | 15 f / 36 f truck + ≈ 90 f hold / 21 f, settled ≈ 9 f after the word |
| Light pulse | A streak ≈ 10–18 f per segment (guess), every 2–4 s |
| Defocus scale-in | 10 f, strong ease-out, blur ≈ 40 → 0 px; then −5% scale over 60 f |
| Bubble slide | 21 f diagonal from the top-right, ease-out; ±10 px drift while held |
| Stamp | Glow ≈ 24 f; band sweep 19 f; ring 11 f; hold ≈ 40 f |
| Drawn-world camera | Ease-in-out; orbit ≈ 3–5°/s; dolly / pull-back 3–6 s; pans 2–5 s |
| Map fly-over | ≈ 345 f, near-linear, soft ease-out to land |
| HUD draw-on / recolour | 33 f / 1.5–3 s per step; a full redshift fade ≈ 12 s |
| Caption swap | Hard, 0 f |
| Rolling number (EV-1) | 18–24 f roll, settling on the unit's onset |
| Scale ladder (EV-2) | 0.8–1.2 s per scale, ease-in-out between |
| X-ray sweep (EV-3) | 18–24 f scan, parts glowing up 4–6 f apart |
| Trail (EV-4) | 6–10 f fade, length proportional to speed |
| Rack focus (EV-6) | 12–15 f, ease-in-out, 6–14 px depth blur |
| Held breath (EV-7) | 10–15 f ease to a stop; 1.00 → 1.03 creep |
| Easing | Ease-out for entrances, ease-in-out for cameras; **no bounce, overshoot or elastic** |

### 10.2 Camera
- **`HOST`:** locked-off, never zoomed or reframed between cuts (N6); his leaning (head top 140–240) is the only movement.
- **`GUEST` (location):** handheld drift and low angles kept, reframed so the whole face stays in (M3). **Call guest:** the recording scaled to full frame; follow the face if he leans.
- **Drawn worlds:** the virtual camera always moves, motivated by the sentence (dolly to the named part, pull back for scale, pan to reveal what's next).
- **Still images:** a slow push (1.00 → 1.06) or a drift.

### 10.3 Layer order (back to front)
1. The world's ground (`BAND`) or black (`STRIP`); never a blurred copy of the picture · 2. Picture / footage · 3. In-scene labels (in the picture's space, moving with its camera) · 4. `BUBBLE` · 5. HUD chrome · 6. Credit · 7. Caption · 8. White-out exposure (T-07 only)

### 10.4 Finishing
- No grain pass, film burn or light leak on anything; the story world's paper texture belongs to the drawing. A soft edge vignette belongs to the model world (G-1) only. Glow, bloom, depth of field and haze live **inside drawn worlds** (§8.0), never on footage.
- **Never pale:** footage keeps its own colour or a touch richer (§4.4).
- Match exposure between setups; keep the studio's low-key warmth; no LUT.
- Spell-check every caption and label against the script (M14).

---

## §11 Sound design (D4)

**No music bed, ever.** Sound is SFX only (the creator's direction, 12 Oct 2026): never a music track, bed, drone or loop under the voice.

### 11.0 What the references do (measured)
| | vt1 `FMT-LAB` | vt2 `FMT-CALL` | vt3 `FMT-STORY` |
|---|---|---|---|
| Integrated / LRA | −14.1 LUFS / 4.9 LU | −14.1 LUFS / 4.4 LU | −14.3 LUFS / 3.9 LU |
| True peak | −1.6 dBTP | −1.0 dBTP | **−0.5 dBTP (fix)** |
| Speech median | −17.1 dBFS | −18.3 dBFS | −17.8 dBFS |
| SFX / ending | none / hard stop | none / hard stop on the map | none / hard stop |

All three references ran a music score under the voice (7–15 dB under) and **no sound effects at all**: no whoosh on the zoom-through, hit on the stamp, pop on the icon or tick on the slowing clock (checked in the pauses around every reveal). We keep the patience and drop the score. This edition adds **a quiet-wonder SFX score**: soft air under the camera's travel, glassy pings where light and labels land, the real sounds of the mechanisms in the pictures, and two or three deep weights for the turns. The viewer should feel the pictures click into place, never hear "effects".

### 11.1 The palette (air, glass, mechanism, weight)
| Role | When | Pool (ids from SOUNDS.md; rotate) | Level vs voice |
|---|---|---|---|
| **Camera travel / crossing** | A dolly to a part, a pan in a drawn world; at most one soft air at a face ↔ picture crossing | `air-low-woosh`, `light-woosh-7119`, `woosh-2025-08-27-02-12-31-utc-woosh-01`, `woosh-2025-08-27-02-12-31-utc-woosh-04`, `swoosh-2025-01-08-03-02-26-utc-swoosh-02`, `zoom-2025-05-09-19-11-57-utc-zoom-5` | −22…−28 dB |
| **A label or tag lands** | `LBL-FLOOR`, `LBL-TITLE`, `LBL-TAG`, the EV-5 pin | `hint-appear-2025-08-27-02-25-12-utc-hint-appear-02`, `hint-appear-2025-08-27-02-25-12-utc-hint-appear-01`, `appear-enter` | −22…−26 dB |
| **Light and energy** | Pulses along the beam, the icon rack-in (T-08), the map's origin bloom, the instrument's recolour | `musicfx-ima02-24-1`, `ui-sparkle`, `tech-appear-2025-02-11-05-48-28-utc-tech-appear-2`, `game-key-collect-2025-02-11-03-32-33-utc-game-key-collect-2` | −24…−30 dB |
| **The number** (EV-1) | Digits roll and settle | `telemetry-graph-rising-01-2025-08-27-06-33-50-utc-36877-telemetry-graph-rising-01-full` (trimmed to ≈ 0.8 s), settle on `05405-shine-ding` | −24…−28 dB |
| **Inside the machine** | T-03 zoom-through, T-04 pull-out, EV-3 X-ray, the HUD draw-on | `long-thick-whoosh-long-thick-whoosh`, `zoom-in-zoom-in`, `digital-scan`, `whoosh-2025-01-08-02-32-33-utc-whoosh-02` | −16…−24 dB |
| **Mechanism** (diegetic) | The slowing clock (P-20): ticks spaced out with it; location B-roll keeps its own live sound instead | `clock-2025-08-27-06-56-42-utc-clock-1` (cut tick by tick) | −22…−28 dB |
| **Dock in / out** (T-14, T-15) | The card shrinking and growing back | `air-low-woosh` or `light-woosh-7119` (counts toward their 2× ledger) | −24…−28 dB |
| **The list tick** (list cue) | Each ring marker on the map, each scale tag (EV-2), each montage noun | `scifi-screen-tap-2025-08-27-05-29-10-utc-scifi-screen-tap-2` | −24…−28 dB |
| **The stamp** (H-1, P-16) | The ring draws, then closes on the band | `objects-drawing-board-marker-on-paper-drawing-circle-04-vadi` (trimmed, low) on the ring, `abstract-hit-sub-bass-07` as it closes | −18…−26 dB |
| **White-out mirror** (T-07) | The exposure climbs, the opposite resolves | `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-6` (its slow swell rides the white), `short-shine-2025-08-27-06-45-01-utc-short-shine-4` on the resolve | −10…−20 dB |
| **Weight** (≤ 3 per reel) | The payoff, the "here's what that means" turn, the time-stop | `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5`, `impactfadeinout-tfx2697`, `boom-2025-01-08-02-40-38-utc-boom` (tail trimmed) | −8…−14 dB, never above the voice |
| **The vision** (optional, once) | Under the map fly-over, stopping 0.5–1.0 s before the last word | `riser-2025-01-08-06-43-34-utc-riser-02` | −20…−26 dB |
| **The landing** | The fly-over settles on its tag; the last picture's label on the last word | `short-shine-2025-08-27-06-45-01-utc-short-shine-2`, `appear-magic` (trimmed) | −20…−24 dB |

**Never in this style:** comedic, meme or cartoon sounds, game blips, cash registers, glitches, sword or whip swishes, camera-flash pops, alarm beeps, vocal samples or choirs, risers under speech, anything as loud as the voice.

### 11.2 The SFX ledger (Naman's rule, unchanged)
- **Any file at most 2× in a reel,** except the one **list cue** (here `scifi-screen-tap-2025-08-27-05-29-10-utc-scifi-screen-tap-2`).
- **No file on two consecutive cues;** rotate within each pool.
- **Density:** about one cue every 1.8–2.5 s **inside picture blocks**, each tied to a picture event; face beats are dry (one soft air at a crossing at most); location B-roll keeps its live sound.
- **Never more than two cues overlapping;** never on a trigger noun's consonant (shift ±2 f).

### 11.3 Silence
- Keep breaths and room tone; never gate gaps to digital silence.
- **No new cue for 0.5–0.8 s before the payoff,** then the silence beat itself (SD-5, EV-7): voice stops, caption clears, picture drifts, **nothing plays**, 1.0–2.1 s; one per reel (two at most). The next picture's first event restarts the score.
- Sound stops with the last cut. No sting.

### 11.4 Mix
Voice high-pass 80 Hz, gentle de-ess, light compression; **−14 LUFS, true peak ≤ −1.0 dBTP**, LRA 3.5–5 LU. The voice is always the loudest thing by a wide margin; every SFX sits under it.

---

## §12 Footage handling

Re-measure on sampled frames for every shoot. **Every crop is sized from the face** (M3).

### 12.1 Shoot setups
| Setup | Description | Framing on 1080×1920 |
|---|---|---|
| **A: Studio presenter** (house) | Locked-off medium close-up from mid-chest, ≈ 50 mm, shallow focus, dark bookshelf, warm practicals, lav | Head top **140** (120–240), eye line **475–510**, face x 430–650, ≈ 300 px wide |
| **A2: Night anchor** | Tripod outdoors at night, black background, front key, tight | Observed head top ≈ 0 (**fix**): head top ≥ 100, eye 430–520, face ≤ 420 px |
| **B: Phone / selfie** (not in the references) | Handheld or propped phone | Reframe toward A's numbers. A close selfie: **keep it full screen (move the text, not the video; hair may touch the top edge, eyes to chin always in), or put it in the `DOCK` card on the world's ground that the footage fills; never shrink it over its own blurred copy**; the `DOCK` card ≥ 940 px wide, never a narrow pillar; a selfie face may be larger than A's ≈ 300 px. Gentle stabilisation; no handheld drift kept on the presenter |
| **C: Location guest** | Handheld ≈ 35 mm, low angles | Eye ≈ 430, face 350–450 px, x 430–760; whole face inside x 40–1040 (**fix**) |
| **D: Call guest** | Call recording, upscaled, flat light | Head top ≈ 345, eye ≈ 650, face x ≈ 430; whole head kept when he leans (**fix**) |
| **E: Presenter on location** | Profile, three-quarter, from behind, filming | Whole profile ≥ 40 px from the edges (**fix**), or no face at all (from behind) |

### 12.2 Crop table per mode
| Mode | Placement |
|---|---|
| `HOST`, 9:16 source | As shot if head top is 120–240; else scale/position so it is; never so large that head top < 100 |
| `HOST`, 16:9 source | A 9:16 window centred on the face (608×1080 from 1920×1080, ×1.78), head top 120–240; if that cuts the head, use the fallback |
| `GUEST` / `REACT` | Per shot, the whole face (hair to chin; ear to nose tip in profile) inside x 40–1040, y ≥ 60; a smoothed position track follows handheld drift |
| **Tight footage** (no blurred-copy fallback: Naman, 13 Oct) | Keep it **full screen**: hair may touch the top edge, eyes to chin always in; move the caption and labels clear of the face; limit any reframe. When the whole head must show, use the `DOCK` card on the world's ground (≥ 940 px wide, the footage filling it, cover-cropped on the face). **Never** shrink the footage over a blurred copy of itself |
| `SHOW` | Object and whole face side by side; if the object crosses the face, a tighter crop of the object alone |
| `BUBBLE` with a face | The whole face inside the circle, ≥ 40 px from the rim |

### 12.3 Matte
Not needed: nothing goes behind a person and no one is cut out (M2).

### 12.4 Frame rate
Deliver **30 fps** CFR, 1080×1920 (vt1/vt2 are 29.97; vt3 is 23.976, its frame counts converted ×1.25). Conform variable-frame-rate phone footage first. Drawn worlds animate at full 30 fps.

### 12.5 Audio
One clean track per speaker; level a call guest to the presenter (speech medians within 1–2 dB); keep room tone and breaths; two-pass normalisation to −14 LUFS, true peak ≤ −1.0 dBTP.

---

## §13 Output contract

### 13.1 Beat sheet schema (one row per beat; the first ```yaml``` block of the edit brief)
```yaml
- id: 9
  section: BLOCK-2          # HOOK | LOOP | BLOCK-n | PIVOT | PAYOFF | SILENCE | MEANING | END
  spoken: "So they built a Penning trap, with its own power supply,"
  voice: host               # host | guest  (caption colour)
  trigger: "Penning trap"   # the noun the picture lands on
  onset_s: 51.42
  start_s: 51.36
  format: FMT-CALL
  mode: WORLD               # HOST | GUEST | REACT | WORLD | BAND | STRIP | BUBBLE | SHOW
  face: PICTURE             # FACE | PICTURE (never both)
  face_check: null          # FACE beats: "head top 150, face x 440-700, whole head in"
  pattern: P-08             # family G-7
  visual: "The crate swinging on the crane, handheld"
  label: null               # {id: LBL-NUM, text: "16,200,000 km/h", on_word: "million"}
  camera: "handheld drift"  # or "dolly-in 4 s to the ring, ease-in-out"
  caption: {style: CAP-DOC, colour: capHost, chunks: ["So they built", "a Penning trap,", "with its own", "power supply,"]}
  transition_in: T-01
  sound: {silence: false, sfx: [{id: woosh-2025-08-27-02-12-31-utc-woosh-01, at: 51.38, db: -26}]}
  hero: "the crate, ≥ 640 px wide, sharp"   # the exact thing, its size once the camera lands
  principles: "handheld drift kept; lands on the noun; label settles 4 f after"   # the 10× pass for this beat
  ev: null                  # EV-1 … EV-8 used in this beat
  credit: null
  assets: [edit/assets/09_crate.mp4]
```

### 13.2 Hook proposal format (3 required)
```yaml
- name: "Only one factory"
  formula: HF-2
  frame_0: "HOST mid-gesture, head top 140, caption 'There is only one'"
  first_3s: ["6 caption swaps", "both hands spread on 'only one'", "no cut, no music"]
  opening_line: "There is only one antimatter factory in the world."   # stands alone (M9)
  loop_line: "But that might soon change."
  why: "Names the subject and the scarcity in one sentence; the promise opens the loop"
```

### 13.3 What to show the creator
1. The format and caption system, with a reason.
2. The 3 hooks (recommend one) and the chosen ending with its last line.
3. The speaker map and the face map.
4. The beat sheet and the transition list, signature moves counted against §9.4, and the EV devices used.
5. The silence plan and the sound plan (the score and its ledger).
6. The asset list: drawn scenes, real pictures of each named thing (source + credit), archive images, and anything still missing (never filled with generic filler).
7. Stills: frame 0, the 3 s mark, one `HOST`/`GUEST` frame (whole head, caption under the chin), one `WORLD` frame as a label or number lands, one `BAND` or `STRIP` frame, the silence frame, the last frame.

---

## §14 Worked example and reference cheat sheet

### 14.1 Worked example: vt2 "the first portable antimatter trap" as a plan (`FMT-CALL`)
Times are source seconds from the reel's `words.json` (it heard "Penning" as "panning" and "holes" as "holds": spelled from the script, M14). **Fixes applied:** the opening back-reference is trimmed; every face is whole; the jar no longer hides the guest; the ending lands deliberately; colour never flips inside a sentence; true peak ≤ −1.0 dBTP.

**Choices:** `FMT-CALL` (a discovery with a second voice: problem → solution → record → implication). Hook HF-2 + H-2: the first 5.2 s ("One thing that makes this research so tricky and also relatively slow is that") are **trimmed**, so the reel opens on "there is only one antimatter factory in the world" (reel time = source − 5.2). `CAP-DOC`, host white, guest gold. Ending E-1. Signature moves: T-08 ×1, T-03 + T-04 ×1. Silence after "That is absurd."

| t (src) | Spoken (voice) | Mode | Pattern | On screen | Transition / sound |
|---|---|---|---|---|---|
| 5.20 | "There is only one antimatter factory in the world… very limited." (host) | `HOST` | H-2 | Mid-gesture, head top ≈ 140, caption "There is only one" on f0 | Frame 0 moving; **dry** |
| 12.90 | "But that might soon change, all thanks to another experiment at the factory." (host) | `HOST` | SD-1 | The 0.7 s pause before "But" kept | — |
| 17.75 | "The BASE experiment was built to measure…" (host) | `WORLD` | P-08 | The experiment's poster (real text does title duty) → the team on the gantry | T-01 ×2 |
| 20.82 | "…the magnetic moment of the antiproton." (host) | `WORLD` | P-09 | Sphere "p⁻" on navy racks in on "magnetic moment" | **T-08** |
| 23.66 | "If CPT symmetry holds, then it should be exactly equal and opposite to that of the proton." (host) | `BAND-CROP` | P-10 | C / P / T in neon circles, mirrored hands, clocks; caption under the band | T-01 |
| 29.44 | "But they kept running into a problem." (host) | `HOST` | pivot | Whole head | T-01 |
| 31.63 | "CERN is continuously ramping magnetic fields in the background." (guest) | `GUEST` | — | Call guest, reframed so his head stays whole when he leans | **T-02** |
| 35.20 | "Even though these fluctuations were tiny…" (guest) | `REACT` | P-29 | Presenter laughing in profile, whole profile in frame | T-01; gold continues |
| 37.37 | "…20,000 times weaker than the Earth's magnetic field… they hit a wall." (guest) | `WORLD` | G-8, P-08 | Earth with field lines (credited) → scientist at the apparatus → researcher from behind | T-01 ×3 |
| 45.05 | "…to move the particles out of the accelerator." (guest) | `GUEST` | — | Whole head | T-01 |
| 50.52 | "So they built a Penning trap, with its own power supply, its own cooling system…" (host) | `WORLD` | P-08 | Crate on the crane → crate → researcher → blue cryostat, one per noun | T-01 ×4; stray line removed (N7) |
| 56.10 | "…and two storage holes for antiprotons. So now they could fill those holes… wherever they wanted." (host) | `STRIP` | P-11 | Cryostat → drawn twin → port → cross-section; lateral track; caption on the black | **T-03** |
| 65.20 | "They just created the world's first portable antimatter trap." (host) | `WORLD` | P-12 | Pull out of the port; "Antimatter Trap" settles behind the model ≈ 0.3 s after "portable" | **T-04** |
| 70.74 | "So, of course, I asked them a pressing scientific question." (host) | `HOST` | SD-7 | Deadpan, whole head | T-01 |
| 74.55 | "Are you gonna make it look super futuristic…" (host) | `REACT` | — | Close profile on location, whole face in | T-01 |
| 82.98 | "…I just have this trap here in my office, maybe I can show it to you." (guest) / "Oh yes, please." (host) | `GUEST` | — | Guest lifting the jar | T-02 |
| 89.00 | "This is one of these Penning traps." (guest) | `REACT` | P-29 | Presenter smiling at the jar | T-01 (gold) |
| 91.19 | "And they are inside the superconducting magnet…" (guest) | `SHOW` | P-28 | Jar **beside** the whole face; where it crosses his face, a tighter crop of the jar alone | T-01 |
| 100.46 | "It works. They have cracked the code of storing the most volatile substance in the universe." (host) | `HOST` | — | Whole head | T-01 |
| 105.78 | "Their current record for storing antiprotons is 614 days." (host) | `STRIP` | P-13 | The cross-section again; "614 days." in digits | T-01 |
| 110.50 | "That is, they can store antimatter… for close to two years. That is absurd." (host) | `HOST` | SD-5 | Whole head; after "absurd." **1.0 s silence**, caption cleared, nothing playing | — |
| 119.88 | "But here's what that means." (host) | `HOST` | SD-2 | Same take | — |
| 121.27 | "Because if you can store antimatter for years in a box… then why not ship it?" (host) | `WORLD` | P-14 | Map: origin blooms, arcs stream out, tag "CERN"; `capShadowHeavy` over the cyan | T-01 |
| 130.18 | "We can start distributing antiprotons to ambitious experiments all around the planet…" (guest) | `REACT` → `GUEST` | P-29 | Presenter in profile, whole face (the reference cut it at the right edge) → guest | T-01 ×2 |
| 141.81 | "I'm just imagining this map in my head… To all the top research institutions." (guest) | `WORLD` | P-15, E-1 | Fly-over, markers pop on cities, **settles on the origin tag on "institutions."**; the building layer stops 0.5 s before the last word | **T-13**: hold 0.6 s, hard cut |

The 142 s line is the guest's voice: **gold** to the end (fix for vt2 2:22).

**Scored in this edition (§11):** the hook stays dry; `hint-appear-2025-08-27-02-25-12-utc-hint-appear-02` as "p⁻" racks in (T-08); a soft air (`woosh-2025-08-27-02-12-31-utc-woosh-01`) on the cut into the crate run; the zoom-through (T-03) rides `long-thick-whoosh-long-thick-whoosh` low with `digital-scan` as the port opens; `appear-magic` (trimmed) as "Antimatter Trap" settles (T-04); "614 days." rolls in (EV-1) with the telemetry rise and `05405-shine-ding`; no new cue for 0.6 s before "That is absurd." and nothing in the 1.0 s after it; `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5` low under the map's origin bloom; the list tick on each ring marker; `riser-2025-01-08-06-43-34-utc-riser-02` very low under the fly-over, stopping 0.5 s before "institutions."; `short-shine-2025-08-27-06-45-01-utc-short-shine-2` as it settles on the tag. **Elevated:** the loop tag (EV-5) pins "?" to the factory on "might soon change" and flips to "614 days" at the record; the crate, the cryostat and the trap each land ≥ 640 px wide.

### 14.1a vt3 "you can never see anything enter a black hole" as a plan (`FMT-STORY`, in brief)
**Choices:** `CAP-TEX`; HF-1 + H-1; SD-4; one each of T-05, T-06, T-07; silence after "frozen in time."; ending E-3 (fix: the reference stops on a tease).

| t (src) | Spoken | Mode / pattern | On screen | Transition |
|---|---|---|---|---|
| 0.00 | "You can never see anything enter a black hole." | `WORLD` P-16 | The ship glows, squashes, reddens; crimson sweep; ⊘ on "a black hole." | f0 moving |
| 4.32 | "Imagine you trap your nemesis in a rocket ship and blast him off…" | `WORLD` P-17 → P-18 | Launch, then the window close-up pulling back | T-01, T-09 |
| 16.00 | "…so you'd expect him to speed up. But that is not what you see… slowing down." | `BUBBLE` P-19, P-20 | Bubble from the top-right, his **whole face inside**; fist and clock slow | SD-6 |
| 29.97 | "…his time is slowing down." → "At the very instant when he should cross the event horizon…" | `WORLD` T-09 | Pan to reveal the black hole; push to its edge | T-09 |
| 44.84 | "Instead, they seem to stop, frozen in time." + 2.1 s silence | `WORLD` P-21 | The small ship alone on black; no caption in the silence | **T-05** |
| 50.74 | "The light… gets dimmer and redder until it completely fades from view." | `WORLD` P-21, P-22 | ≈ 12 s fade to black, squiggles thinning | — |
| 64.70 | "But if you could see that light… frozen on its horizon, including the star that formed it." | `BAND-FIT` P-23, P-24 | Pull-back into the band; HUD draws on; recolour | **T-06** |
| 89.48 | "This is just one of the strange results… our current best theory of gravity." | `HOST` SD-8 → P-25 | ≈ 2 s anchor, **whole head** (fix) → sim, sun grid, drop, credited | T-01 ×3 |
| 96.01 | "The first solution of Einstein's equations… their opposite, white holes." | `WORLD` P-25–P-27 | Portrait → galaxy zoom chain → black-hole image → white-out → white hole; heavy shadow | T-11, **T-07** |
| 103.00 | "It also implied the existence of parallel universes…" | `HOST` → `BAND` → `WORLD` | Anchor, diagram, wormhole building | T-01 ×2 |
| end | The loop restated plainly (from the script) | `HOST` E-3 | Whole head, 2–4 s | **T-13** |

### 14.2 Reference-reel cheat sheet
| Reel | Format | Take from it | Don't copy |
|---|---|---|---|
| vt1 antiproton decelerator | `FMT-LAB` | Labels in the model's floor, the camera-reveal number, light pulses, name-then-show cutaways, J-cut 2 f, white/gold captions, slow-fast-slow, the outro returning to the opening picture | A mid-thought mechanism hook; guest faces cut by the edge; gold over narration (1:38.5); a tease ending |
| vt2 portable antimatter trap | `FMT-CALL` | Dry hook, icon rack-in, band (here on the world's ground, not its blurred copy), zoom-through and pull-out to the title, the pressing question, reactions under the gold voice, "here's what that means", the map landing | "this research" as the first words; faces cut at the edge; the jar hiding the face; the stray line; the colour flip (2:22) |
| vt3 black hole | `FMT-STORY` | The ⊘ hook, one drawn world, the subject's bubble, the time-stop dissolve, the 2.1 s silence, the pull-back into the instrument, the montage on nouns, the white-out mirror, captions cleared in silences, left-edge credits | Hair cut by the top edge; white captions on white; −0.5 dBTP; a tease ending |

---

## §15 Look at your frames
Not a checklist; the questions the best editor asks while scrubbing:
- **Frame 0, sound off:** is the exact subject on screen, big and already moving, with the first words? Would a stranger stop scrolling?
- **The frame:** is their video full screen or in a designed box (rounded, rimmed, on the style's ground), never a sharp rectangle over its own blur?
- **The first 3 s:** has the key word landed as a picture (the number rolled, the stamp, the pulse slowing)? Is the camera already travelling?
- **Every picture:** is it the exact thing said (sound off, can I tell which object or number)? Is it big, sharp, the brightest thing? Is the camera moving, with something moving inside? Is there any second of a far, empty or parked frame?
- **Every face:** whole (hair to chin, both sides), unzoomed, in full rich colour (never pale), the caption just under the chin? A selfie full screen or in the `DOCK` card, never a pillar, never over its own blur? Does the face come back often enough that I remember who is talking?
- **The captions:** every spoken word, readable on a phone, colour = voice (white / gold), never flipping inside a sentence?
- **The labels and numbers:** inside the world, on their words, readable at thumbnail size?
- **The dock:** did the reel's key number get the creator's face above it (once or twice, not more)? Is the card wide and the face whole?
- **The loop:** is the question visible early and visibly answered on screen? Does the reel end deliberately, not on a cliff?
- **The silence:** does the payoff get its breath, with nothing playing?
- **Sound:** soft, on the picture events, under the voice, no file overused, no music?
- **Vibe:** curious, patient, beautiful, exact. Anything loud, flashy, generic or sensational comes out.

---

## §16 Build + render

- **Pipeline:** plan → beat sheet → stills → score (`plan/sounds.json`) → storyboard → render, per the edit skill. Render with the frame-deterministic HTML renderer at **30 fps**; every animation is a function of the frame number, timed from `words.json`.
- **Fonts (all bundled):** Source Serif 4 (captions, labels, tags, credits), Courier Prime Bold (in-scene numbers), EB Garamond Italic (object titles, instrument names), Noto Serif Devanagari (Devanagari captions). Load them via `@font-face` from the bundled files; pre-paint ⊘ and the superscript minus (p⁻) before `READY`.
- **Component map:**

| Component | Role |
|---|---|
| `Footage` + `Ground` | Full-frame people sized from the face (§12.2); the world's ground (gradient, grid, glow) behind `BAND` boxes; never a blurred copy of any footage or picture |
| `Band` / `Strip` | 16:9 layer placement; object strip on black |
| `Scene25D` | Layered planes in perspective with a virtual camera; hosts G-1, G-2, G-5, G-6, G-9, with in-scene labels that move with its camera |
| `Pulse` / `Icon` / `Stamp` / `Bubble` / `Hud` / `Credit` | P-05, T-08, P-16, P-19, G-9, `LBL-CREDIT` |
| `Caption` | `CAP-DOC` / `CAP-TEX`, colour per voice, cleared in silences |
| Transition modules | T-03, T-04, T-05, T-06, T-07, T-11 |
| `RollNumber` / `ScaleLadder` / `XraySweep` / `Trail` / `LoopTag` / `RackFocus` / `HeldBreath` / `LivingStill` | EV-1 … EV-8 (§8.8) |
| `RichGrade` | Footage contrast and true blacks, never desaturate (§4.4) |

- **Final:** H.264, yuv420p, BT.709 tags, AAC, faststart. Verify the frame count, the loudness (−14 LUFS, ≤ −1.0 dBTP) and a contact sheet decoded from the final file, checking every face frame for a whole head.
- **Deliverables in `edit/`:** `final.mp4`, `words.json`, the edit brief (format, hooks, speaker and face maps, beat sheet, transitions, silence plan), `assets/`, a short summary.

---

## Appendix A. Evidence map (where each rule comes from)
| Rule / element | Reels |
|---|---|
| Face and graphic never share the screen; no splits, cards, PiP of the speaker | vt1, vt2, vt3 (0 exceptions) |
| The face as a short full-frame anchor; explanations full screen with voice-over | vt1 (15% host), vt2 (30% host + 18% guest), vt3 (3% presenter) |
| Locked-off studio presenter, no punch-ins | vt1, vt2 |
| Whole face rule (fix) | vt3 (hair cut by the top edge), vt1 (guest cut at 0:52.0, 1:11.5), vt2 (guest 1:23–1:25, presenter 1:14.5–1:20 and 2:10.5, jar over the face 1:28–1:35) |
| Serif captions, one line, hard swaps, no highlights | vt1, vt2 (`CAP-DOC`), vt3 (`CAP-TEX`) |
| Caption colour = voice (white host, gold guest) | vt1, vt2; slips fixed at vt1 1:38.5, vt2 2:22 |
| Captions cleared in silences | vt3 |
| Labels inside the scene (floor label, camera-reveal number, title behind the object, map tag) | vt1, vt2 |
| Model orbit with pulses; name-then-show cutaways | vt1; vt1, vt2 |
| Icon rack-in, zoom-through + pull-out, map radiate and landing | vt2 |
| 16:9 band (the references: over its own blurred copy; this edition: a designed box on the world's ground) | vt2 (`BAND-CROP`), vt3 (`BAND-FIT`) |
| One-world camera, subject bubble, time-stop dissolve, stamp, white-out, montage | vt3 |
| Unhurried pace (2.65–2.86 words/s), pauses and breaths kept, deliberate silence | vt1, vt2, vt3 (2.12 s beat in vt3) |
| Jump cuts only inside guest answers, no zoom | vt1 |
| J-cut 2 f into a new speaker | vt1 |
| No SFX in the references (this edition adds the quiet-wonder score, §11) | vt1, vt2, vt3 |
| Dry hook | vt2 |
| Music under the voice (a pad, an ambient cue, a wonder score): we don't use it, SFX only | vt1, vt2, vt3 |
| Credits at the left edge for third-party images | vt3 |
| Stand-alone opening line (fix) | vt1, vt2 (back-referencing openers) |
| Deliberate endings E-1…E-4 (fix) | vt1, vt2, vt3 (all stop on a tease); built from vt2's landing, vt1's return, vt3's anchors |
| Heavier caption shadow on bright frames (fix) | vt3 1:41–1:43 |
| No unfinished graphics (fix) | vt2 0:55.3 |
| True peak ≤ −1.0 dBTP (fix) | vt3 (−0.5), vt2 (−1.0 at the limit) |
| Ten times better within the vibe (§8.0, EV-1 … EV-8); sizes as floors; every spoken word captioned at 76–84 px, just under the chin on a face; the whole face always, a selfie never a pillar; never pale; the speaker moves; frame 0 never empty; the quiet-wonder SFX score with the ledger, no music ever; no imposed checks | **The creator's directions, 11–12 Oct 2026** |

---

## Starter prompt (paste with a new video)

```text
You are the editor and motion designer for this Reel, in the Science Documentary style.
Read this playbook fully, then follow §1 exactly (render at 30 fps).
Footage: <file(s)>. Script (ground truth for spelling and numbers): <script.md>.
Second speaker, if any: <name / file>, captioned gold.
Supplied pictures of the subject: <list, or "draw them; fetch credited images where real ones exist">.
Show me the plan and the §13.3 stills, then build.
```
