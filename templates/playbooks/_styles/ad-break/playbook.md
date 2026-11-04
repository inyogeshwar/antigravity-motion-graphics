# Handmade Ad Break Playbook (v2, "Stop-Motion Commercial, Elevated" edition, for Claude Opus 5.5)

> **In this plugin:** this file is the whole playbook: every measured value and recipe from the 3 reference reels is in it, and there is no other playbook file to open. Frame counts are measured at each reference's own rate: **ec1 and ec3 at 24 fps, ec2 at 29.97 fps** (all 720×1280; positions scaled ×1.5 to 1080×1920). Values marked "@30" are converted for the 30 fps render (`frame(t)`; t = f / fps). The per-reel notes it cites (`ec1…ec3`) are not shipped. Sounds are picked by id from SOUNDS.md; commands are in the edit skill's REFERENCE.md. The page gives you `FACE(n)` and `FACE0` (with `head_top` and `chin`) for every speaker frame. *(guess)* marks an estimate.

**Purpose:** you (Claude) receive a talking-head video of the user plus its script. Use this document to **ideate and build** every format choice, framing, prop, screen insert, super, caption, transition and sound, so the Reel feels like a **handmade, deadpan little commercial**: a warm tiny world, the real thing in hand from frame 0, an "ad break" that interrupts the video, words blinking like late-night TV, and an ending that closes like an old film, built with such craft that the viewer watches it twice to catch every gag.

**What v2 is:** a frame-by-frame analysis of 3 stop-motion brand ads posted by Emma Chamberlain for her own brand (**ec1** "Venice walk": claymation, 11.96 s; **ec2** "We interrupt this broadcast": claymation sitcom, 28.29 s; **ec3** "Frog & Bee": needle felt, 32.21 s), covering cut lists, per-frame animation timing, layout and colour measurements, caption and super timing, transition recipes and audio, **elevated ten times** by the best editor, stop-motion animator and creative director in the world. The handmade-ad grammar is kept whole; this edition gives every arrival **clay weight** (it lands, squashes and settles), makes the TV in the set **alive** (it powers on, its glass glows, the camera pushes into it for the name), puts **the speaker on their own TV** as the host of their own cheap commercial, makes the supers **climb** like a real infomercial, treats **timing as the joke**, and scores it all with a **handmade foley score** (the objects' own small sounds, the static, the ad's cheap sparkle, and silence where the joke lands). All measured layouts, recipes and rules are kept. Where a reference reel and a direction disagree, **the directions win**.
- Every rule is either **observed** (the most consistent value chosen), a **fix** (a reel got it wrong; this playbook corrects it), or this edition's **elevation** (marked EV or "this edition").
- **Not one layout:** the three reels are **three formats** (§3.0): a three-world vignette, an ad inside the video with a screen in the set, a subtitled mini-quest ending in an iris.
- **No human presenter in the references:** a clay figure in the creator's likeness (ec1), the brand's animal mascots (ec2), a felt frog and bee (ec3). **The plugin's users are one person talking to their own camera**, so **§3.8 ADAPTATION is the heart of this playbook**: it maps every observed device (the thing in hand on frame 0, the "we interrupt this video" static break into a self-made ad, B-roll on a screen inside the frame, blinking benefit words, the silent deadpan punch-in, the bloom trip, the foreground wipe, the two-speed iris to a silent card, the in-world text rules, the on-twos holds, the room-sound rule) onto one person's footage, plus this edition's elevations (§8.8).
- **The speaker moves**, by hard cuts between shot sizes and worlds (close-up → wide → the screen insert → **the speaker on the TV** → a silent close reaction → back), never parked in one framing. Frame 0 always shows the speaker **and** the real thing.
- **The product slot is always the user's own product, tool or idea.** The reference brand, its products and its packaging never appear in a plan.

**Measured sizes are floors, not targets.** The references were made for a TV-sized frame; on a phone their small things vanish. Here:
- **Captions** `CAP-DIALOGUE` **72–80 px** font (the references ran 58–60 px), Poppins 600, every spoken word. Never below the floor: chunk the line shorter instead.
- **Supers** ≥ **88 px cap height** (≈ 120 px Anton) on one line, ≥ 76 px cap on two lines (the references ran 41–59 px).
- **The TV is big:** the screen insert is **≥ 860 px wide** (the reference's 661 px screen is the floor, not the target), so the ad's content reads: the product **≥ 480 px** on its long side, the lineup spans the screen edge to edge, the name **≥ 760 px** wide in the ad and on the card.
- **The speaker on the TV** (`L-TV-SELF`): the face inside the screen ≥ 300 px wide, whole.
- **A head that carries a line in a wide** ≥ 160 px tall (the references' ≈ 80 px heroes vanished).
- **No dead frame:** apart from the deliberate deadpan hold (a still face is the joke, not empty) and the silent card, a frame that is more than half soft background for longer than ~0.7 s means the thing is too small or the next beat is late.
- **The tight selfie stays big and full screen:** move the text, not the video; hair may touch the top edge, eyes to chin always in. When the whole head must show, the box layout on the drawn set (≥ 940 px wide, rounded, rimmed), never a narrow pillar and never over its own blur.
- **Full screen or a box, never any footage or picture over its own blur** (Studio Standard): the creator's video either fills the frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground or scene) that it fills completely (cover-crop centred on the face). The same goes for every recording, screenshot, photo, diagram and clip: it fills the frame (cover-crop to the part that matters, or a push-in) or sits in a designed box on the style's own ground (its colour, gradient, texture, grid or drawn set). Never a sharp box over a blurred or darkened copy of itself, never a band padded with blurred bars: that hard rectangle inside the frame looks cheap. A tight selfie stays full screen: move the text, not the video; hair may touch the top edge, eyes to chin always in; when the whole head must show, use a box layout on the style's ground. A matte cut-out over a plate and a whole-frame blur transition are fine.
- **Full screen or a box, never their own blur** (Studio Standard): the creator's video either fills the frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground or scene) that it fills completely (cover-crop centred on the face). Never shrink it over a blurred or darkened copy of itself, never pad a band or box with blurred side bars, never set a card on their own blurred frame: that hard rectangle inside the frame looks cheap. A tight selfie stays full screen: move the text, not the video; hair may touch the top edge, eyes to chin always in; when the whole head must show, use a box layout on the style's ground. A matte cut-out over a plate and a whole-frame blur transition are fine.

**Never pale.** The world is warm, but rich: natural or slightly richer saturation, deep blacks, contrast a touch up, skin warm. Never desaturate, fade, wash out or lift the blacks of the speaker's footage as a look. The yellow trip (`L-VOID`) is a **short named beat (≤ 2 s)** and the speaker inside it keeps their own colour with a yellow rim; the ad's pastel sky is a background colour, never a grade on a person.

**How to use this file:**
- Follow §1 in order.
- Look up visuals by ID: formats `FMT-…` / `ADAPT-…`, layouts `L-…`, hook formulas `HF-…`, hook visuals `H-…`, structure devices `SD-…`, families `G-…`, patterns `P-…`, transitions `T-…`, endings `E-…`, elevated devices `EV-…`.
- §2 is the craft that never bends; §2.1 is the house grammar (what makes this style, with reasons). Everything else is a default you adapt like the best editor in the world, with a one-line reason in the plan.

### The feel (read this twice)
This is **a tiny handmade commercial that interrupts your own video, and nobody on screen thinks it's funny**. The speaker is mid-sentence with the real thing in hand, sips or taps it on the first frames, and holds the pose like a clay puppet. Then the little TV in the room clicks on, fills with static, and a cheap, sincere ad plays: a pastel sky, the product tossed in by a hand and landing with a soft clay thump, a lump that squishes into the product, red words blinking like late-night TV, each one a step higher, then the name popping up over a lineup while the camera pushes into the glass. Static again. Cut to the speaker's face, silent, still, for exactly too long. That pause is the joke. Everything moves like it was animated by hand: a quick move, a dead hold; nothing glides. It feels **warm, dry, charming and exact**. If it looks like a slick ad, it's wrong; if it looks like a meme edit with boings and laugh tracks, it's wrong too. **One exception, for shares:** when the creator mocks something (a bad habit, an old way, a rival), the reel may spend **one** meme hit, in the gap right after the line lands, once per reel (§11 "The one meme hit").

**Who the reference creator is:** an American lifestyle creator whose brand talks in her own dry, casual, Gen-Z voice: understated, a little absurd, never salesy on the surface. The ads are handmade worlds and the humour is deadpan: cartoon fans who prefer the ad to the game, a frog who swears because the drink is that good. The hard sell is always wrapped in a joke or a story.

**Audience (ICP)** *(guess)*: young, social-first viewers who scroll past obvious ads but stop for craft, a recognisable face, a joke or a tiny world, and reward an ad that admits it's an ad. In the plugin: anyone showing **their own product, tool or idea** who wants it handmade and charming, not loud.

**Style lineage:** a handmade TV-ad parody in four layers:
1. **World:** small, warm, shallow-focus sets; every shot a **new set and colour world**; motion **pose to pose** (a quick move, a dead hold; 49–75% of frames are holds).
2. **Ad:** the product **in use** (in hand) or **on a screen in the world**: a little CRT plays a cheap, loud commercial with **blinking red benefit words**, a lump that **morphs into the product**, a lineup and a **name that scales up**, switched in and out by **TV static**.
3. **Sound:** **the room** (ec2: voices, room tone, the TV, the static, the louder ad), plus this edition's **handmade foley score**: the objects make their own small sounds (a clay thump, a squish, a knob click), the ad gets its cheap infomercial sparkle, and the joke lands in room tone. ec1 and ec3 ran one song under subtitled dialogue; we never use music.
4. **Ending:** a stare and a hard cut, an in-world line, or a **two-speed iris** to a **silent** name card.

### Creator directives
| # | Directive | Where it lives |
|---|---|---|
| D1 | **Ten times better, same soul.** Keep the handmade deadpan commercial; raise the craft: clay weight on every arrival, a TV that lives, the speaker as the host of their own ad, supers that climb, timing as the joke, one hero per frame. Never slick, never a meme | The feel, §8.0, §8.8 |
| D2 | **The speaker moves:** full frame with the thing → the TV in the room (face absent) → **on the TV** (`L-TV-SELF`) → the silent punch-in → a wide → back; never one framing for more than ~3 cuts or ~6 s; frame 0 is the face **and** the thing, already moving | §3.0a, §3.8 |
| D3 | **Seamless, running motion, stop-motion style:** move → dead hold; puppets on twos; camera pushes linear to a dead stop; something visibly changes every 1.3–2.7 s; a hold is a beat, never dead air | §8.0, §10 |
| D4 | **Sound is scored to studio standards, at this style's volume:** a handmade foley score (the use, the knob, the static, the toss and the thump, the squish, the benefit ladder, the name's sparkle, the lens on the iris); ordinary cuts and the deadpan stay in room tone. **No SFX file more than 2× in a reel** (the one list cue excepted). **No music bed, ever** | §11 |
| D5 | **The whole face is always visible** at every framing, punch-in, push, screen and iris; a close selfie stays full screen (move the text, not the video) or goes in a box on the drawn set; never a narrow pillar, never over its own blur | §2, §12.2 |
| D6 | **Captions are seen:** every spoken word, `CAP-DIALOGUE` 72–80 px, just under the chin on face beats (under the TV in screen beats), plain cream, hard on and off | §5.2 |
| D7 | **No imposed checks.** This file gives taste, recipes and reasons; you decide like the best editor and creative director in the world. Only craft never bends | §2 |

### The reference reels → this edition, at a glance
| Area | The reference reels | This edition |
|---|---|---|
| The open | ec1: the cup in hand on f0, used on f1–8; ec2: a face-less TV, interrupt at 5.44 s; ec3: an 80 px hero | **Face + the thing on f0**, used by f8 with its own sound, caption by f6, the static by ≤ 3.0 s (§6.0) |
| The TV | 661×448 screen, locked, still | **≥ 860 px screen that lives** (EV-2: a power-on line, glass glow); **the speaker on it** (EV-3); **a push into the glass** for the name (EV-5) |
| Arrivals | Stepped on twos, no squash | **Clay weight** (EV-1: a dip before, a squash on landing, a settle, a contact shadow); **line boil** on everything drawn (EV-7) |
| Supers | Red Anton 41–59 px cap, silent | ≥ 88 px cap; **the benefit ladder** (EV-4: each super lands one tonal step higher, then a breath, then the name) |
| The reaction | Silent CUs, ears cropped | Whole head; **deadpan timing** (EV-6: still eyes, one blink as the punchline, room tone dips) |
| Captions | ec2 none; ec3 58–60 px cream at the bottom | **Every spoken word, 72–80 px, just under the chin** (under the TV in screen beats) |
| Colour | Warm, soft, lifted mids | Warm and **rich, never pale**; the product's hue climbs as a rim and a reflection, never on the face (EV-8) |
| Sound | ec1/ec3 one song; ec2 the room only | **The room + a handmade foley score**, ledger rule, silence where the joke lands; never music (§11) |
| Ending | Stare + cut; in-world line; iris to a silent card | The same, with the **film-gate iris** (EV-9: focus-ring ticks on the creep, a shutter on the snap, a silent card that settles once) |
| Checks | MUST / NEVER lists, QA checklist, checkpoint | **Craft only** (§2); the rest is the house grammar (§2.1), questions (§15) and your judgement |

### Formats at a glance
| Area | `FMT-VIGNETTE` (ec1) | `FMT-BREAK` (ec2) | `FMT-QUEST` (ec3) | `ADAPT-…` (§3.8) |
|---|---|---|---|---|
| Use when | A moment of use, a routine, a mood | A product with 2–4 benefits to "sell" with a wink | A recommendation or story: dare → journey → payoff | Every plugin reel |
| Length / shots | 12 s, 3 shots | 28 s, 7 shots + 4 in-screen switches | 32 s, 7 shots + iris + card | 15–45 s *(guess)* |
| The face | MCU (eyes 41% down), then small in a deep wide | Wide two-shot (eyes 32–35%); 3 frontal reaction CUs (39–44%) | Two-shots (33–41%); frontal trip (upper third) | Full frame at f0 and most beats; **on the TV** as the ad's host (`L-TV-SELF`); absent only in the ad's product beats and the card |
| The thing | **In hand**, same frame as the face, used on f1 | **On a screen in the set**, face absent | **In hand** + the trip after the try | In hand at f0; the screen insert for features; the trip for the feeling |
| Text | Set dressing only | Red blinking supers + the name in the TV; no subtitles | Cream subtitles (silent dialogue); name card | Every spoken word captioned under the chin (fix); supers only in the screen; the name |
| Sound | One mellow song, hard stop (we never use music) | Room only: TV, static hiss, louder announcer, room tone | One upbeat song, fades to digital silence (we never use music) | `ROOM` + the handmade foley score, never music (§11) |
| Ending | Stare, hard cut | In-world line, hard stop 1.1 s later | Iris → silent card 1.8 s | E-1…E-4, the user's own CTA |

### Quick index
| § | What |
|---|---|
| §1 | Procedure |
| §2 | Craft that never bends; the house grammar (M / N) |
| §3 | Formats, layouts `L-…`, where the face is, the speaker's movement, **§3.8 ADAPTATION**, safe zones |
| §4 | Colour tokens, colour worlds, meaning |
| §5 | Type: `CAP-DIALOGUE`, `SUPER-BLINK`, `NAME-ARCH`, in-world lettering |
| §6 | The 10× hook, hook system, endings / CTA |
| §7 | Structure devices |
| §8 | Graphics and props: the 10× layer, families, patterns, frame recipes, line → pattern lookup, assets, elevated devices `EV-…` |
| §9 | Transitions `T-01…T-12` |
| §10 | Motion (pose to pose, on twos), camera, layers, finishing |
| §11 | Sound: the room rule, levels, the handmade foley palette (real ids), the ledger, silence and the mix; never music |
| §12 | Footage handling (crop table, the tight-face fix, matte) |
| §13 | Output contract; what to show the creator |
| §14 | Worked example (ec2 as a plan), adaptation map, cheat sheet |
| §15 | Look at your frames |
| §16 | Build + render |
| App. A | Evidence map |

---

## §1 Procedure (follow in order)

1. **Inventory.** Probe the footage. Identify the setups (§12.1): handheld selfie, tripod MCU, a wide in their space, hand/product inserts, a real screen in the room. Note every stretch where the speaker is **silent and still ≥ 1.3 s** (deadpan punch-in material, P-12).
2. **Transcribe** with word timings; captions are the spoken words checked against the script.
3. **Find the real thing** and **what using it looks like on camera** (a sip, a tap, opening a box, a screen lighting up, a page held up). If the footage has no such moment, plan it from what exists and list the missing insert at the checkpoint.
4. **Choose the format** (§3.0, §3.8): a moment → `ADAPT-VIGNETTE`; a product with 2–4 benefits → `ADAPT-BREAK`; a recommendation or journey → `ADAPT-QUEST`. One line of reasoning. Devices from other formats may appear within the §3.8.3 budget.
5. **Sound** (§11): `ROOM` + the handmade foley score for every reel, spoken or wordless; never music.
6. **Plan the speaker map** (§3.0a, §3.8): every beat's layout and face box. Frame 0 is `L-MCU` with the thing in hand. Decide whether the speaker hosts their own ad on the TV (`L-TV-SELF`, EV-3).
7. **Segment:** `HOOK` (0–3 s), `SHOW` / `WORLD`, the `BREAK` or the `QUEST` legs, `TRIP`, `REACTION`, `PAYOFF`, `END`.
8. **Classify every line** with §8.4 and mark its trigger word.
9. **Ideate 3 hooks** (§6), each with frame 0, the first 3 s of events, the first caption and the loop. Recommend one.
10. **Fill the beat sheet** (§13): one beat per cut or in-frame change, each with layout, face box, colour world, pattern, caption or super, transition, sound.
11. **Plan the transition map** and check the budget (§9.4).
12. **The 10× pass and the score** (§8.0, §8.8, §11): for every beat, its hero, how each arrival anticipates, lands and settles, where the push goes, where the joke's silence sits; then score every event and log the sound ledger. **Attack the plan:** where is a frame mostly empty? Where is something small that should be read? Where does the face sit in one framing too long? Where did you explain a joke that should be a hold? Fix it in the plan.
13. **Produce the assets** (§8.6). Never invent a claim.
14. **Show the creator** the plan and the style stills (§13.3).
15. **Build**, look at the landing frames (§15), score, render (§16).

---

## §2 Craft that never bends
- **The whole face is always visible:** hair to chin at every framing, punch-in, push, screen, trip and iris; a tight selfie stays full screen (hair may touch the top edge, eyes to chin always in; move the text, not the video) or sits in a designed box on the drawn set; never shrunk over its own blurred frame. Captions may cross the face.
- **Text never sits on text:** a caption never over a super, the name or the product; supers live inside the screen only.
- **Sound in sync:** every SFX on the frame its picture lands (the static's hiss and picture on the same frame); nothing ever louder than the voice except the ad's own voice (M9) and the static's first frame.
- **True and exact:** every benefit, claim, price and name true for the user's product, spelled exactly.
- **Readable at phone size:** captions ≥ 72 px; supers ≥ 88 px cap; the product ≥ 480 px; the name ≥ 760 px wide.
- **Loudness:** −14 LUFS integrated, true peak ≤ −1.0 dBTP; a hard stop, no tail with sound.

Everything else is direction. You decide; write your reasons into the plan.

### 2.1 The house grammar (what makes it this style)
Not checks: this is what the three reference reels do every time (or what this edition fixed), and why it works. Break one only with a reason in the plan. (The IDs are kept because other sections cite them.)
- M1. **Frame 0 shows a face and the real thing**, and the thing is used by f1–8 (ec1: the cup is in hand at f0, lifted to the mouth over f1–8). Fix: ec2 opened on a screen with no face, ec3 on a wide with an 80 px hero; both took 1.4–2.8 s to show a face.
- M2. **The whole face is visible whenever it is on screen:** hair to chin, at every zoom, punch-in, push, crop, iris and screen. How far a zoom goes is decided by the face, not the frame. When footage is tighter than the face allows (a handheld selfie with hair or chin out of frame), **keep it full screen and move the text, or put it in a designed box on the drawn set** (§12.2), the box ≥ 940 px wide and filled by the footage, never a narrow pillar; never over its own blurred copy; eyes to chin always in. Captions may cross the face. Fix: ec2's CUs cropped ears; ec1's wide sank the eye line to 84%.
- M3. **Pose to pose.** Every move (2–8 f @24 ≈ 3–10 f @30) resolves into a hold (4–14 f @24 ≈ 5–18 f @30); cuts land on holds.
- M4. **Each shot is its own world:** a cut changes the shot size **and** the colour world (ec1 peach MCU → dusk-blue/orange wide → olive jungle with a red-orange reveal; ec3 changes world on every shot).
- M5. **Text lives in the world.** On screen only: (a) dialogue captions (§5.2), (b) supers **inside the screen insert** (§5.3), (c) the name (§5.4), (d) real lettering on props. No titles, labels, chips, emoji, lower thirds or kinetic type (none in the 3 reels).
- M6. **Every spoken word is captioned**, just under the chin on face beats. Fix: ec2 had no subtitles, so a muted viewer loses the joke.
- M7. **Readable at phone size (sizes are floors):** captions ≥ 72 px font; supers ≥ 88 px cap height (≥ 76 px on two lines); the product in the ad ≥ 480 px; the name ≥ 760 px wide in the ad and on the card. Fix: ec2's 41–59 px supers; ec3's 58–60 px captions; ec2's 661 px screen.
- M8. **The static is uniform:** 33 f @29.97 (1.10 s) of grey noise in the screen rect, picture and hiss switched **on the same frame**, hard on, hard off, identical both times.
- M9. **The ad is louder than the show:** its voice 6–8 dB hotter than the talk around it (ec2: −9…−17 vs −20…−28 dBFS), within M14.
- M10. **Supers complement the voice:** one benefit adjective the voice does **not** say, on ≈ 1.25 s **before** the matching spoken point (ec2: 8.34 s vs 9.59 s).
- M11. **Every benefit, claim and price is true** for the user's product, from the script or sources.
- M12. **One sound mode:** `ROOM` + the handmade foley score (§11); never a song or music bed.
- M13. **End deliberately** with E-1, E-2, E-3 (or E-4 inside the break).
- M14. **Audio:** −14 LUFS integrated, **true peak ≤ −1.0 dBTP**. Fix: ec2 +0.1, ec3 +0.3 dBTP.
- M15. **Spelling and stress:** names exact; CAPS only for spoken stress ("you've GOT to try this"); a dash for a cut-off word; asterisks for a swear.
- M16. **Hold to read:** captions ≥ 1.3 s; a super ≥ 4 blink cycles; the name ≥ 35 f after landing; the card 1.5–2 s.
- M17. **Never pale** (this edition): the speaker's footage keeps its own rich colour, deep blacks, contrast a touch up; the yellow trip is a short named beat (≤ 2 s) with the speaker in their own colour inside it.
- M18. **The speaker moves** (this edition): full frame, the TV, on the TV, the punch-in, the wide; never one framing for more than ~3 cuts or ~6 s.

**Never in this style:**
- N1. A face cut by the frame, a punch-in or push past hair or chin, an iris over the face before the snap, a screen insert covering the face (the face whole **inside** the TV is `L-TV-SELF`, allowed).
- N2. A face-less frame 0, a fade from black, an ambient open whose hook comes after 3 s (fix: ec2's interruption at 5.44 s, hook line at 8.2 s).
- N3. Graphic text outside M5: no titles, labels, stickers, emoji, progress bars, subscribe buttons.
- N4. Supers outside the screen, repeating the spoken word, two at once, or in any colour but `superRed`.
- N5. Music anywhere; meme cues (except the **one** meme hit on a mock beat, §11), laugh tracks, rimshots, boings or crowd sounds; any sound on the deadpan beat; whooshes, risers or impacts on ordinary world-change cuts (they are source switches).
- N6. Songs or music of any kind (SFX only). Fix: ec1 and ec3 ride licensed-sounding vocal songs.
- N7. Captions in a box or pill, coloured, word-by-word, typed, popped or faded.
- N8. Dissolves, whips, glitches, zoom blurs or light leaks between ordinary shots; only T-02…T-08 (§9) exist besides the cut.
- N9. Another brand's product or logo, sponsor lines, third-party plugs; the reference brand, products or packaging in a plan.
- N10. Smooth tweened motion on puppet-like elements (rises, morphs, lineup items); they step on twos.
- N11. Grain, VHS damage, scan lines or retro filters on the footage; the retro lives in the TV object and the static.
- N12. A tail with sound, an end card louder than the reel, a duration that doesn't match the edit.
- N13. A pale look: desaturating, fading, washing out or lifting the blacks of the speaker's footage (this edition).

---

## §3 Formats, layouts, where the face is, safe zones

### 3.0 Choosing the format
| The script… | Format |
|---|---|
| …shows a moment of use, a routine, a place, a feeling | `ADAPT-VIGNETTE` |
| …names a product and 2–4 benefits, ideally with a joke about being an ad | `ADAPT-BREAK` |
| …recommends something, goes where it comes from, tells a little story | `ADAPT-QUEST` |
| …is an opinion with nothing to hold | `ADAPT-BREAK` with the idea as the product (its claims as supers, a page or capture on the insert); never a bare talking head |

### 3.0a The speaker's movement, by cuts (every reel)
| Beat | Speaker | Seen in |
|---|---|---|
| Frame 0 → first use (0–0.4 s) | **Full frame** `L-MCU`, the thing in hand, used on f1–8 | ec1 |
| The thing is explained or sold | **Cut to the screen insert** `L-SCREEN`; face absent, the voice continues; 1.5–10.4 s, a change inside every ≈ 2 s | ec2 (51% of the runtime) |
| Back from the insert | Static, then **full frame**, or first the silent punch-in | ec2 |
| A big line, a joke, a turn | **Silent punch-in** `L-CU`, 38 f @29.97 (1.27 s); a row of up to 3, the last 57 f | ec2 |
| A place, a scale | **Wide** `L-WIDE`, face small but whole, linear push to a hold | ec1, ec3 |
| "How it feels" | **The trip** `L-VOID`, 1.75 s | ec3 |
| The ad's spoken line ("we interrupt this video…") | **On the TV** `L-TV-SELF`: the speaker's own footage inside the screen, whole face ≥ 300 px wide, the voice 6–8 dB hotter; in by a hard cut on the line, out by the static | this edition (EV-3), built from ec2's TV |
| The last line | Full frame, then E-1…E-3 | all |
- Shots 1.27–6.6 s (medians 2.4–4.2 s); never two size changes within 1 s except inside the reaction row.
- **Never one framing for more than ~3 cuts or ~6 s** (this edition): if a stretch of talk runs long in `L-MCU`, change the world (a wide, the TV, a pose change on a held frame, a face-limited push) on the next thought.

### 3.1 `L-MCU`: full-frame medium close-up (ec1 A; the adaptation's home)
```
┌─────────────────────────┐ 0
│  (platform UI, y 0–110) │
│        ╭─────╮          │ ← head top y ≈ 527 (hair ≥ 60 px below the top)
│        │ eyes│          │ ← eye line y ≈ 783 (41%), face x ≈ 594
│        │mouth│          │ ← mouth y ≈ 945; face width ≈ 470 px (44%)
│        ╰──┬──╯          │
│   Caption line one      │ ← CAP-DIALOGUE just under the chin (top 40–80 px below it)
│   [thing in hand]       │ ← y 850–1300 beside the caption; lifted to the face on f1–8
│   caption line two      │ ← if the thing sits under the chin: caption under the thing, last baseline ≤ y 1560
│  (platform caption/UI)  │
└─────────────────────────┘ 1920
background: warm, very shallow focus
```
- Face: head top y 380–560, eye line 760–860, chin ≤ 1200, face centre x 480–600, width 40–50%. The body is cut by the frame bottom.
- The thing stays between the chin and the bottom safe line, in front of the face only while used. The caption sits **just under the chin**; when the thing is held there, the caption moves to just under the thing (never over it, never below y 1560).

### 3.2 `L-WIDE`: the person small in their world (ec1 B, ec2 wide, ec3 1 and 4)
- **ec1 deep wide:** one-point street, a big in-world sign top (y ≈ 486, 690 px wide), the figure on the centre line (head top ≈ 1040, eyes ≈ 1107, feet ≈ 1728). A **linear** push with tilt over 77 f @24 (3.2 s) grows the sign 51% and sinks the eyes to y ≈ 1620.
- **ec2 wide:** frontal, locked; two faces upper-middle, left/right (eyes y ≈ 680 at x ≈ 290; y ≈ 621 at x ≈ 800).
- **ec3 wides:** heads ≈ 80 px in the middle band (y 1000–1100).
- **Fix:** the eye line ends **≤ y 1440 (75%)**; a head carrying a line is ≥ 160 px tall (this edition; the references' fix was 120 px).

### 3.3 `L-SCREEN`: the thing on a screen in the set (ec2 C)
```
┌─────────────────────────┐ 0
│  [room above, soft]     │
│ ┌─────────────────────┐ │ ← TV body x 41–1013, y 635–1350 (#2E160B)
│ │ ┌─────────────────┐ │ │ ← SCREEN x 203–863, y 702–1150 (661×448)
│ │ │   SUPER WORD    │ │ │ ← cap top ≈ y 766–774, centred x ≈ 540
│ │ │   [product]     │ │ │ ← y ≈ 900–1100
│ │ └─────────────────┘ │ │
│ └─────────────────────┘ │ 1350
│  [cabinet, books]       │
└─────────────────────────┘ 1920
```
- A box **inside the world**, not a layout box: locked camera, content switched inside (T-03) or by static (T-02).
- **This edition (sizes are floors):** the TV is drawn bigger than ec2's: body **x 24–1056, y 470–1390**, screen **x 100–980, y 560–1160 (880×600)**, so the ad's product is ≥ 480 px and the supers ≥ 88 px cap fit inside with ≥ 30 px side margins. The measured rects above remain the reference and the floor. Captions sit under the TV (cap top y ≈ 1421). The TV **lives** (EV-2): it powers on with a horizontal line the first time it appears, its glass carries a faint highlight and a ±2% shimmer. The one camera move: the push into the glass for the name (EV-5).
- Inside: a pastel painted-cloud sky (`#8F8B99` average), the product delivered by a hand or morphed from a lump, a super, then a lineup with the name.
- **Face: absent.** The reactions come after. The voice continues over it.
- **`L-SCREEN-POV`** (ec2 A, 0–2.77 s): the TV small top-middle (screen x 378–716, y 527–729), seen from the sofa past blurred paws, a tiny figure from behind. Never frame 0 (no face); in the adaptation only with a real over-the-shoulder shot.

### 3.4 `L-CU`: the silent frontal reaction (ec2 D1–D3)
- Frontal, head filling the width, eye line **y 743–851 (39–44%)**, face x 513–540; a row of 38 / 38 / 57 f @29.97 in near silence, the last carrying a line, then a cut wide for the punchline.
- **Fix:** the references crop ears at the sides (dog) and top (rabbit). Here the CU is the **largest framing that keeps the whole head**: hair ≥ 60 px below the top, chin ≤ y 1360, face width ≤ 1000 px. If that isn't bigger than the shot before, the reaction is a **held still** at the same size.

### 3.4a `L-TV-SELF`: the speaker on their own TV (this edition, EV-3)
- The TV in the room (§3.3 house rects), and **inside the screen the speaker's own footage**: the ad's host, saying the interrupt line or the imperative with the hotter ad voice (M9).
- Face: whole, hair to chin inside the screen, face width ≥ 300 px (scale the footage so the head fills ≈ 60–75% of the screen's height), centred, glass tint and highlight over it, rich colour (never pale).
- In: a hard cut on the ad line's first word (or straight out of the first static). Out: the static, or a T-03 switch to the product. ≤ 1 per break, ≤ 4 s.
- Captions under the TV, the line's words verbatim. Supers may blink above the speaker's head inside the screen.

### 3.5 `L-TWO` and `L-FOLLOW` (ec3 shots 2, 6, 7)
- Two-shot: eyes at (190, 729) and (810, 783), heads cut by the side edges; deck-chair two-shot: (459, 729) and (675, 634), slow push-in. Follow: the hero's back in the lower half (head ≈ (540, 1200)), the camera through the leaves.
- **Fix:** no head is cut by an edge; the speaker's whole head stays in frame.

### 3.6 `L-VOID`: the trip (ec3 shot 3)
- The hero centred, spread-eagled in a glowing yellow void (`#F0C301`), face at **(594, 513)**, honeycomb cells on twos behind, bloom to a whiteout. In by T-04, out by T-05.

### 3.7 `L-IRIS` and `L-CARD` (ec3 28.0–32.2 s)
- **Iris:** a feathered circle (20–30 px) on black, centre ≈ **(540, 940)**, diameter ≈ 1000 px at the creep (top edge y 436, x 26–1050); faces inside its upper half until the snap; the punch-line caption on black below.
- **Card:** black, the white arched name centred (bbox x 222–857, y 842–1077), revealed behind the snapping iris, frozen, silent, 1.8 s.

### 3.8 ADAPTATION: one person talking to their own camera (**not observed as a whole; built from the devices above plus this edition's elevations**)
> Read this for every plugin reel. The face rule (M2) applies to every layout; captions may cross the face.

**3.8.1 What maps to what**
| Reference device | In the adaptation |
|---|---|
| The figure in the creator's likeness (ec1) | **The speaker**, full frame, recognisable at thumbnail size (whole face, eyes ≈ 41% down) |
| Product in hand on f0, used on f1–8 | **The user's product, tool or idea in hand on f0** (the phone with the app open, the box, the page, the tool, the mug if that's the product), used by f8: lifted to the lens, opened, tapped, sipped |
| The CRT in the set | **`L-SCREEN`:** a drawn retro TV body around the B-roll, standing on a designed set (a drawn wall, wallpaper and table in the style's palette, or a separate room plate photo; never the creator's own footage blurred as the surround); or, when a real monitor/TV is visible behind the speaker, the B-roll **corner-pinned onto it** (`L-SCREEN-ROOM`) |
| The cheap ad inside the TV | **A self-made ad:** the user's product (photo, capture, name) on the pastel sky, delivered from the bottom edge or morphed from a lump, blinking benefit supers, lineup + name pop; the speaker may host it from inside the TV (`L-TV-SELF`, EV-3) |
| Static (33 f, hiss) | Unchanged: "we interrupt this video" into and out of the ad |
| The reaction row of three animals | **The silent deadpan punch-in:** 1–3 cuts to the speaker's still, silent face at different face-limited sizes, 1.27 s each, the last up to 1.9 s |
| The sip trip | **The bloom trip:** after the first try, 8 f of bloom, a 1.75 s yellow void with the speaker frozen in it, whiteout and light orb back |
| The camera through foreground leaves | **The foreground wipe:** a hand, the product or an object passing close across the lens (filmed) to change place |
| The quest's locations | Real places or framings the user filmed; with one setup only, legs are carried by screen inserts and the trip, never by fake wides |
| Iris → silent logo card | Iris on the last line → **silent name card**: the user's name, handle or product |
| Song or room | `ROOM` + the handmade foley score for every reel; never music |

**3.8.2 The three adaptation formats**

`ADAPT-VIGNETTE` (ec1; 10–20 s)
| t | Layout | What happens |
|---|---|---|
| f0 | `L-MCU` | Speaker, the thing at chest height, face whole |
| f1–f8 | `L-MCU` | The thing used, on ones; hold 9–14 f |
| 0.4–2.9 s | `L-MCU` | 3–5 poses (a short captioned line, a head turn, a look into the lens), each a 2–8 f move + a 4–14 f hold |
| ≈ 2.9 s | `L-WIDE` (if filmed) or `L-SCREEN` | A new colour world; a linear push to the face limit over ≈ 3.2 s, dead hold ≥ 1.5 s |
| ≈ 9 s | Odd reveal | A third world: a detail of the user's life or product holds still, then something peeks in from the edge (≈ 8 f on twos) and stares |
| end | E-1 | Stare 1.5 s, hard cut ≤ 6 f after the last word |

`ADAPT-BREAK` (ec2; 20–45 s; the default for selling)
| t | Layout | What happens |
|---|---|---|
| f0 | `L-MCU` | Speaker mid-line, the thing in hand; caption on by f6 |
| 0–2.5 s | `L-MCU` | The "show": something ordinary begins |
| ≤ 3.0 s | `L-SCREEN` | Cut to the TV (it powers on, EV-2) showing the show content (their B-roll or a still), then **static** 33 f |
| +1.1 s | `L-TV-SELF` (optional) | The speaker on the TV says the interrupt line, ad voice hotter (EV-3), ≤ 4 s |
| then | `L-SCREEN` | **The ad:** the sky, the product delivered (P-05) or morphed (P-06) with clay weight (EV-1), one super per benefit (≈ 2 s each) climbing the benefit ladder (EV-4), 2–4 benefits |
| ad end | `L-SCREEN` | Lineup + name pop (P-07) on the user's imperative (their CTA) while the camera pushes into the glass (EV-5), hold 35 f |
| +0.2 s | `L-SCREEN` | 6 f of digital silence, **static** 33 f, the show resumes 1–1.5 s |
| back | `L-CU` | The silent deadpan row (38 / 38 / 57 f) |
| end | `L-MCU` | The in-world line (the CTA said as a reaction), hard stop ≤ 1.1 s after it (E-2) |
- Face share ≈ 45–65% *(guess)*; the ad ≤ **10.4 s** (ec2's ad length). Fix: the reference's static came at 5.44 s; here **by 3.0 s**.

`ADAPT-QUEST` (ec3; 20–40 s)
| t | Layout | What happens |
|---|---|---|
| f0 | `L-MCU` | The thing held toward the lens; the dare caption by f6 ("you've GOT to try this") |
| 0.4–5.5 s | `L-MCU` | The try and the reaction line |
| ≈ 5.5 s | `L-VOID` | The trip, 1.75 s |
| 7–22 s | `L-MCU` / `L-WIDE` / `L-SCREEN` | Quest legs (where it comes from, how to get it): each a new place or framing and colour world, 3.6–6.6 s, joined by hard cuts or the foreground wipe; captions end on the cut frame |
| ≈ 22 s | `L-MCU` | The payoff: the thing in use, calm, slow push to the face limit |
| last 4 s | `L-IRIS` → `L-CARD` | Two-speed iris on the punch line, caption on black below, silent card 1.5–2 s |
- `ROOM`: the iris closes on the last word, room tone fading to digital silence (ec3 ran a song here; we don't).

**3.8.3 Budgets**
| Device | Per reel |
|---|---|
| Static break | 0 or 1 (= 2 statics) |
| The speaker on the TV (`L-TV-SELF`) | ≤ 1 per break, ≤ 4 s |
| Push into the glass (EV-5) | ≤ 1 |
| Screen insert | 1–3, each ≤ 10.4 s |
| Deadpan punch-in | 1 row of 1–3; ≤ 2 rows in 45 s |
| Trip | ≤ 1 |
| Foreground wipe | ≤ 2 |
| Iris | ≤ 1, only as the ending |
| Wide | only if filmed; ≤ 40% of the runtime |

**3.8.4 Where the face sits**
| Layout | Face (1080×1920) | Scale rule |
|---|---|---|
| `L-MCU` | Head top 380–560, eye line 760–860, chin ≤ 1200, x 480–600, width 40–50% | As shot, full screen; if the head leaves the frame, move the text or use the box on the drawn set (§12.2), never over its own blur |
| `L-WIDE` | Eye line ≤ 1440, head ≥ 160 px | The push stops at M2 or at eye line 1440 |
| `L-SCREEN` | Absent (voice continues) | — |
| `L-TV-SELF` | Inside the screen, centred, face width ≥ 300 px, hair to chin inside the screen | Scale so the head fills ≈ 60–75% of the screen height |
| `L-SCREEN-ROOM` | As `L-MCU`; the real screen never overlaps the face | Corner-pin into the screen's quad only |
| `L-CU` | Eye line 743–851, hair ≥ 60 px below the top, chin ≤ 1360, width ≤ 1000 | Largest scale keeping the whole head |
| `L-VOID` | Face centre ≈ (540–594, 513–700), whole head + shoulders | Frozen at 0.80–1.00 of the MCU size |
| `L-IRIS` | Circle centre = (face x, eye line + 80) | Creep diameter ≥ 1.7 × hair-to-chin height (ec3: 973 px; ≈ 1.7 × an MCU head of ≈ 573 px *(guess)*) |

### 3.9 Safe zones (Instagram)
- Key text inside **x 64–1016, y 110–1560**; the bottom ≈ 360 px and the right ≈ 110 px below y 1000 are platform UI.
- Captions: **just under the chin** on face beats (top 40–80 px below `FACE(n)` chin); **cap top y ≈ 1421** under the TV and on face-less beats; last baseline ≤ **1560**, centred, ≤ 900 px wide. Supers inside the screen only. Eye line ≤ 1440.

---

## §4 Colour tokens

### 4.1 Core tokens
| Token | Hex | Use |
|---|---|---|
| `capCream` | `#F5F8D0` core (measured `#EFFFE9` on black, `#FFFF99` under the warm grade) | Captions |
| `capShadow` | `rgba(0,0,0,.55)` blur 8–12 px, no stroke; **bright frames: `rgba(0,0,0,.8)` blur 14 px + 2 px `#2A1E00` outline** (fix) | Caption shadow |
| `superRed` | `#CC0103` | Supers only; flat |
| `nameWhite` | `#FDFDFD` (+ `#1A1A1A` 3–4 px outline and a drop shadow in the ad) | The name |
| `cardBlack` | `#000000` | Iris surround, end card |
| `adSky` | `#8F8B99` average (lavender-grey clouds, pale blue, lilac) | The ad's background |
| `staticGrey` | `#585458` average, random per pixel and per frame | T-02 |
| `tvBrown` | `#2E160B` | The TV body |
| `tripYellow` / `honey` | `#F0C301` / `#F4F445` | The trip void; glows, the orb |

### 4.2 Colour worlds (one per shot, M4)
| Reel | World | Key hexes |
|---|---|---|
| ec1 | Beach MCU | sky `#D9B58F`, skin `#D06711`, hair `#F2C45E`, palms `#385430` |
| ec1 | Street wide | sky `#52536E`, buildings `#EF7322` |
| ec1 | Jungle reveal | moss `#312609`, sky `#C3BEAE`, the reveal **`#F04619`** (most saturated object, saved for the last shot) |
| ec2 | 70s room | wall `#E0A062`, walnut `#0C0404`, rug `#5A3E3D`, characters `#6797A1` / `#F39181` |
| ec2 | Inside the TV | `#8F8B99`, `#CC0103`, bright product colours |
| ec3 | Forest → trip → river → leaves → honey → end | `#EC331B`, `#675F34` → `#F0C301` → `#4B537B`, `#926977` → greens → `#F4F445` → `#000000` |

### 4.3 Meaning of colour
- **Warm room** = the show, the person, the talk. **Cooler, saturated screen** = the ad; it must pop out of the room.
- **The product's hue climbs** until it owns the frame (ec3: sun flare → trip → waterfall → honey river). Adaptation: small in hand at f0, filling the trip, big in the lineup.
- **The most saturated hue is saved for the last shot** (ec1). **Red `#CC0103`** = a benefit word, nothing else. **Black** = the end only.

### 4.4 Footage look (warm, rich, never pale)
- Warm and soft, **never pale**: a tungsten-amber tilt, contrast a touch up, soft highlights, **deep blacks** (never lifted or milky), natural or slightly richer saturation (up to +10%), skin warm, shallow focus where the camera gives it. Normalise exposure between setups. Never desaturate, fade or wash out the speaker (M17, N13).
- Bloom/halation on talking footage stays subtle *(guess: 20–30 px glow, 10–15% screen blend on the brightest 5%)*; full strength only in the trip. No grain, vignette or VHS on footage.
- **The product's hue climbs** (EV-8) as light around the speaker (a lamp, a reflection on the TV glass, a rim), never as a tint on the face.

---

## §5 Type tokens

### 5.1 Font map (bundled only)
| Role | Observed (guess) | Bundled |
|---|---|---|
| Captions | App-native geometric sans (Google / Product / Instagram Sans) | **Poppins SemiBold** (`Poppins-SemiBold.ttf`; fallback Medium) |
| Supers | Condensed heavy grotesque caps (Impact / Anton) | **Anton** (`Anton-Regular.ttf`) |
| The name | Soft arched serif with outline | **Fraunces Soft** (`FrauncesSoft-VF.ttf`), wght 700–800, on an arc |
| Lettering in the world | Physical signs | Real props; if one must be drawn on an insert, Anton |

### 5.2 `CAP-DIALOGUE` (the only caption system)
| Property | Spec |
|---|---|
| Size | Observed 58–60 px font (42 px cap, 77 px line pitch). **House 72–80 px font (52–58 px cap), pitch 92–100 px** (sizes are floors; chunk shorter rather than shrink) |
| Style | Poppins 600, sentence case, `capCream`, `capShadow`; no stroke, no box |
| Position | Centred x 540. **Face beats: just under the chin** (the line's top 40–80 px below `FACE(n)` chin) so the eye meets it right after the face; if the thing in hand sits there, just under the thing. **Screen and face-less beats:** cap top **y 1421**. Last baseline ≤ 1560; 1–2 lines; ≤ 900 px wide (≈ 20 characters per line) |
| Chunk | One spoken line (2–8 words) per caption; **every spoken word** is in a caption |
| Timing | Hard on at the first word (≤ 6 f early), hard off at its end; **1.3–2.7 s** on screen; 0.4–1.0 s gaps between speakers/beats; a caption ending near a cut ends **on** the cut frame (ec3 f175, f293, f541) |
| Animation | None |
| Punctuation | Ellipses pass a thought across two captions; a dash cuts a word ("nervou-"); asterisks censor ("F**k"); "!!" for excitement; CAPS only for stress |
| Bright frames | **Fix:** above ≈ `#E0C000` brightness (the trip, a window), the strong shadow + outline; ec3's cream on yellow was nearly unreadable |
| Under the iris | On black below the circle |

### 5.3 `SUPER-BLINK` (inside the screen only)
| Property | Spec |
|---|---|
| Style | Anton ALL CAPS, flat `superRed`, no stroke, no shadow: cheap late-night TV |
| Size | Observed caps 55 px (7 letters, x 420–660), 59 px (6, x 418–661), 41 px (21 characters, x 289–790). **House ≥ 88 px cap (≈ 120 px font) for ≤ 11 characters; two lines at ≥ 76 px cap for longer**, ≥ 30 px inside the screen's sides (sizes are floors) |
| Position | Centred on the screen centre x (533–540); cap top 64–72 px under the screen's top (y ≈ 766–774) |
| Blink | On 6–7 / off 5–6 f @29.97 (≈ 2.4 Hz); **@30 on 6 / off 6**; 4–5 cycles (≈ 1.9 s) per word; next word on the next "on" frame |
| Content | 2–4 per ad; a benefit adjective or two-word phrase, ≈ 1.25 s before its spoken point (M10) |
| Landing (this edition) | Each super's first "on" frame is 1.12× for one frame, then 1.0 (a tiny stamp); it lands on its tonal step of the benefit ladder (EV-4) |

### 5.4 `NAME-ARCH`
| | In the ad (ec2) | End card (ec3) |
|---|---|---|
| Style | `nameWhite` + dark outline + drop shadow, over the lineup | White on black, no outline |
| Size | Observed ≈ x 280–765, y 800–990; letters 60–70 px. **House ≥ 760 px wide (≈ x 160–920), letters ≥ 110 px**, the push into the glass (EV-5) makes it bigger still | Observed bbox x 222–857, y 842–1077 (635×235). **House ≥ 760 px wide** |
| Motion | 6 f after the lineup, **20% → 100% over 21 f @29.97 with an ease-in** (accelerating), lands after the imperative, holds 35 f | Revealed behind the iris, frozen |
| Sound | The announcer carries it, plus one sparkle as it lands (§11.4) | **Silence** |

### 5.5 In-world lettering
- Real signs carry words (ec1's marquee letters 95–140 px). Lettering as small as ec1's 25 px blade sign is texture, never information. Adaptation: a real sign, a printed page, the product's own label held to the lens.

---

## §6 Hook system

### 6.0 The 10× hook
- **Frame 0:** the speaker mid-line, whole face, **the real thing already moving in hand**, the caption on by f6 just under the chin. Never a TV, a black frame or a wide with a tiny hero.
- **f1–8 the use, with its own sound:** the sip, the tap, the click, the page; if the footage is silent there, one dry foley sweetener (§11.4). The first sound the viewer hears is the product.
- **≥ 6 visible changes by 3 s:** the use, the hold, a pose, a cut on a held pose, the TV clicking on with its power-on line (EV-2), the static (`ADAPT-BREAK`) or the try (`ADAPT-QUEST`).
- **The loop on screen:** "this" is in hand and unnamed; the viewer has seen the product but not its name. It pays off on the name pop (EV-5) or the card (EV-9).
- **The static's hiss is the first loud sound of the reel** and it arrives by 3.0 s; until then the reel is voice, the use and the room.

### 6.1 What the hook must do in about 3 seconds
1. **Show a face and the thing, in use** (ec1: lift and sip over f1–8, hold mid-sip f9–22).
2. **Raise one unspoken question:** "is that…?" (recognition, ec1), "what's on?" (context, ec2), "try *what*?" (the dare, ec3).
3. **Promise a tiny world:** the warm shallow-focus frame, the deliberate holds, the deadpan.
- Visual changes in the first 3 s: ec1 7, ec3 6, ec2 2. **House ≥ 6** (poses, the use, the first caption, a cut, the static). Fix: ec2's slow ambient open.

### 6.2 Hook formulas (`HF`)
| ID | Formula | Line pattern | Seen in |
|---|---|---|---|
| HF-1 | **Recognition + use** | No line, or one short line while using the thing | ec1 |
| HF-2 | **Familiar context → interruption** | Starts like ordinary content, interrupted by the ad (≤ 3 s, fix) | ec2 |
| HF-3 | **The dare** | "Dude, you've GOT to try this." "This" is not named until the name appears | ec3 |
| HF-4 | **Dare + interruption** (adaptation combo) | "You've GOT to try this—" → static → the ad | ec2 + ec3 |
- The loop is **"this" / "what's on"**, never a number. It pays off on the name (ec2: 14.85 s; ec3: the card).

### 6.3 Hook visuals (`H`)
| ID | Visual | Recipe |
|---|---|---|
| **H-1** | **In hand, used on f1** | `L-MCU`; f1–8 lift into use (on ones), hold 9–14 f, lower 3–5 f, hold; head turn 3–4 f, hold (ec1 0–2.9 s) |
| **H-2** | **The screen in the room** | `L-MCU` with the show on a real screen behind or the speaker introducing it; ≤ 3 s cut to `L-SCREEN` + static (ec2, fixed) |
| **H-3** | **The dare caption** | The dare by f6, CAPS on the stressed word, the thing held to the lens; first cut ≈ 1.4 s (ec3: 1.42 s) |
| **H-4** | **The peek** | (Second world or ending) a still frame ≤ 1 s, then something slides in from the edge over ≈ 8 f on twos and stares (ec1 10.08–10.42 s). Never frame 0 |
| **H-5** | **Ad-first open** | (Adaptation, reels ≤ 20 s) f0 = the speaker already saying the interrupt line; static ≤ 0.5 s; the ad by 1.6 s |

### 6.4 Hook timing template (≈ 0–3 s)
| t | Beat | Rule |
|---|---|---|
| f0 | Face + thing | `L-MCU`; first caption by **f6** (fix: ec3's came at 1.17 s) |
| f1–f8 | The use | Lift, open, tap, sip; on ones |
| 0.3–1.5 s | Hold + line | Hold 9–14 f; the dare or the show line |
| 1.4–2.9 s | First cut | Next world or size (ec3 1.42, ec2 2.77, ec1 2.92 s) |
| ≤ 3.0 s | The turn | BREAK: static. QUEST: the try. VIGNETTE: the wide |

### 6.5 Hook line rules
- Spoken like a person, not an ad; ≤ 8 words; the stressed word in CAPS in the caption; no numbers or "in this video".

### 6.6 Hook sound
- `ROOM`: voice and room tone from f0, dry. No hit or whoosh on frame 0 (none in the references).
- This edition: the use's own sound on f1–8 (or one dry sweetener), the TV knob click and power-on on the first cut to the TV, then the static.

### 6.7 Endings and CTA (`E`)
| ID | Ending | Recipe | Seen in |
|---|---|---|---|
| **E-1** | **Stare + hard cut** | A look into the lens held ≥ 1.5 s; stop ≤ 6 f after the last word; no card; loops to frame 0 | ec1 |
| **E-2** | **In-world line** | A line said as a character, not a pitch ("Let's order some more…"); hard stop **≤ 1.1 s** after it on a held frame | ec2 |
| **E-3** | **Iris → silent card** | The verdict under the creeping iris, the snap, the name on black, silence, 1.5–2 s | ec3 |
| **E-4** | **The ad's CTA** | Inside the ad: the imperative ("Buy … now!") on the lineup + name pop; then the break ends | ec2 |
- The CTA is **the user's own** (product name, handle, "link in bio", "comment X"), spoken as E-2 or E-4 and shown only as `NAME-ARCH` (and in the caption, as spoken). No URLs, buttons or keyword stickers.
- One closing ending per reel (E-1, E-2 or E-3); E-4 lives inside the break and may combine with E-2.

---

## §7 Structure devices

### 7.1 Structure devices (`SD`)
| ID | Device | Recipe |
|---|---|---|
| **SD-1** | **Three worlds** | MCU (use) → wide (place) → odd reveal (end); 24 / 52 / 24% of the runtime, each a new palette (ec1) |
| **SD-2** | **The channel sandwich** | Show 2–3 s → static 33 f → ad ≤ 10.4 s → static 33 f → show 1–1.5 s → reaction row → the line (ec2) |
| **SD-3** | **The reaction row** | 2–3 silent frontal cuts, 38 / 38 / 57 f @29.97, room tone ≈ −31 dBFS; the last may carry a line; then wide/MCU for the punchline (ec2 19.49–23.92 s) |
| **SD-4** | **Quest legs** | Each leg a new place and a new camera grammar: wide → top-down → follow → payoff (ec3: 4.88 / 3.63 / 6.63 / 5.4 s) |
| **SD-5** | **The trip** | Right after the first try (ec3 5.58–7.33 s) |
| **SD-6** | **Captions as acting** | Short casual lines; CAPS for stress; ellipses passing a thought; a cut-off dash; a censored swear |
| **SD-7** | **The product hue climbs** | Small at f0, filling the trip, owning the payoff (ec3) |
| **SD-8** | **Deadpan** | The joke is never explained: a hold, a silent face, an understatement ("…And spending time with you I guess") |

### 7.2 The break ritual (identical every time)
1. The show line (`L-MCU`), 2–3 s.
2. Cut to `L-SCREEN` with the show content; ≈ 0.27 s later the static (ec2: 5.17 → 5.44 s).
3. The ad: the interrupt line (fast, ≈ 4.1 words/s, 6–8 dB hotter), the product delivered or morphed, one super per benefit (≈ 2 s each), lineup + name pop ≈ 8.3 s in, hold 35 f.
4. 6 f of digital silence (ec2: −54 dBFS), the static.
5. The show resumes on the screen 1–1.5 s.
6. The reaction row, then the line (E-2).

### 7.3 Open loops
- **"This"**: in hand but unnamed until the trip, the ad or the card (ec3). **"What's on"**: the show is cut off before it says anything (ec2). **The stare** at the end loops to frame 0 (ec1). Every loop pays off on screen.

### 7.4 Rhythm
- Shot means ≈ 4.0 s in all three reels; medians 2.4–4.2 s. The speed lives **inside** the shots (moves on ones, characters on twos, holds), not in cutting.
- Captions change every 1.3–2.7 s, supers every ≈ 1.9 s, reaction cuts every 1.27 s.
- Speech: a commentator ≈ 3.2 words/s, the ad read **4.1**, a character line ≈ 4.5. **Pauses are kept on purpose** in the reaction beat (19.5–22.4 s almost wordless): the deadpan needs air, so the talk is not chopped to remove every breath.

---

## §8 Graphics and props system

### 8.0 The 10× layer (what the best stop-motion animator adds to every beat)
**Animation principles, applied to this style** (stop-motion doesn't ease; it **spaces**: the drawings are bunched where things are slow and spread where they're fast):
| Principle | How it shows up here |
|---|---|
| **Anticipation** | A delivered product dips 20–30 px for one drawing before it rises or is thrown; the lump shows its thin ring first (P-06); the name waits 6 f after the lineup; the second static waits 6 f of digital silence; the TV's power-on line is the anticipation of the picture |
| **Squash & weight** | Every arrival lands with clay weight (EV-1): one drawing at 1.08 × 0.92, then 1.0; a soft contact shadow grows under it; heavy things land lower and settle longer |
| **Follow-through & overlap** | After the landing, a 2–3% wobble for one more drawing; lineup items settle one drawing apart, left to right; the speaker's head turn finishes a drawing after the shoulders |
| **Arcs** | Tosses travel on a parabola (ec2's bottom-left toss); the peek's slide curves in slightly; the orb drifts on an arc |
| **Slow in / slow out** | Only by spacing on twos (smaller steps near the stops); camera pushes stay **linear** to a dead stop (the references' signature); the name pop **eases in** (accelerating) |
| **Staging** | One hero per frame: the thing in hand, the product in the screen, the name, or the face. Everything else is soft focus |
| **Secondary action** | The TV glass shimmers ±2%; drawn lines boil on twos (EV-7); the honeycomb pulses in the trip; the room is still (locked camera), so the small life reads |
| **Timing** | The comedy is in the holds: deadpan rows of 38 / 38 / 57 f, a stare ≥ 1.5 s, the hold after every move (5–18 f). Never trim a deadpan to "keep it moving": the hold **is** the moving part |
| **Exaggeration** | Once per reel: the trip's bloom goes too far, or the push into the glass on the name |
| **Solid drawing & appeal** | Everything drawn looks handmade: soft contact shadows, rounded clay forms, slight line boil, real textures (felt, clay, paper) on drawn objects; never flat app UI |

**Design hierarchy (every frame):** 1. the thing (in hand, in the screen) or the face · 2. the caption or the super · 3. the TV or the world it sits in · 4. everything else, soft and warm.

**Effects toolkit:** shallow focus on the drawn set around the TV (never the creator's own frame blurred behind a box); subtle warm bloom on footage (full only in the trip); the CRT's glass (a soft curved highlight, a faint inner vignette inside the screen, the power-on line, the ±2% shimmer); line boil on drawn elements (EV-7); contact shadows; the honeycomb and whiteout of the trip; the iris's warm feathered edge (EV-9). Never: flashes, glitches outside the static, light leaks, whips, zoom blurs, shake, scan lines or VHS on footage.

### 8.1 Families (`G`)
| ID | Family | Look | Motion | Seen in |
|---|---|---|---|---|
| **G-1** | Thing in hand | The real product in the hero's hand, same frame as the face | Lifted on ones, held | ec1, ec3 |
| **G-2** | Screen in the set | Retro CRT, 661×448 screen, brown body, dial and grille | Never moves | ec2 |
| **G-3** | TV static | Grey noise in the screen rect | 33 f, hard on/off | ec2 |
| **G-4** | Blink super | Anton caps, flat red | On 6 / off 6 | ec2 |
| **G-5** | Hand-delivered product | A real hand throws, catches or raises it from the bottom edge | 6–10 f on ones | ec2 |
| **G-6** | Lump → product | A ring of the product colour → lumpy block → product shape → the real product | 14 f on ones | ec2 (×2) |
| **G-7** | Lineup + name | Every product in a row, the arched name over them | Cut on; name 20 → 100% ease-in | ec2 |
| **G-8** | The trip | Yellow void, hero frozen/floating, honeycomb, bloom | §8.3a | ec3 |
| **G-9** | Light orb | Soft yellow glow ≈ 400 px | Fades ≈ 24 f @24 | ec3 |
| **G-10** | Iris | Feathered circle, black outside | Fast → creep → snap | ec3 |
| **G-11** | Name card | White arched name on black | Revealed behind the iris | ec3 |
| **G-12** | In-world sign | Real lettering in the set | Grows only with a push | ec1 |
| **G-13** | The peek | A creature/object sliding in from the edge | ≈ 8 f on twos, then a stare | ec1 |
| **G-14** | Passing foreground | Big soft elements crossing the lens | Stepped on twos, ≈ 27 f @24 | ec3 |
- Everything moves like a physical object: **on ones for fast actions, on twos for puppet-like elements, smooth only for camera moves, the iris and the name pop.**
- No flat "UI" (cards, panels, icons, charts), no stock footage. The product is shown in hand or on the screen; every other shot is the world itself.

### 8.2 Staging choreography
1. **Move** (2–8 f): the delivery (lift, throw, rise, morph, peek).
2. **Hold** (4–14 f @24; longer for a stare): the pose reads, the caption or super is up.
3. **Switch:** a hard cut or a hard in-screen switch. Nothing has an animated exit: it is switched off, cut away from, or covered by the static, the whiteout or the iris.

### 8.3 Pattern specs (`P`)
| ID | Pattern | Recipe |
|---|---|---|
| **P-01** | **Use on f1** | f0 the thing at chest height. f1–8 lift to the mouth/lens on ones. f9–22 hold (14 f). f23–27 lower. Hold. f37–40 head turn. Hold (ec1) |
| **P-02** | **Screen in the room** | `L-SCREEN` rects (§3.3); the surround is the room defocused. Adaptation: **a designed set** in the style's palette (a drawn wall, wallpaper, a table under the TV, soft warm light), or a separate room plate photo; **never the creator's own footage blurred behind the TV** |
| **P-03** | **Static** | §9 T-02 |
| **P-04** | **Blink super** | §5.3 |
| **P-05** | **Hand delivery** | The product enters from the screen's bottom edge (or tossed from bottom-left) over 6–10 f on ones, a real hand catching or raising it; settles at centre (observed ≈ 150×240 px for a tall item, ≈ 190 px wide for a small one; **house ≥ 480 px on its long side**) and holds, landing with clay weight (EV-1). Adaptation: the user's hand filmed raising the product against a plain wall, cropped into the screen; without it, the product image **rises in 3 steps on twos** (40 → 80 → 100% of its travel, 6 f) with a 2–3° tilt that straightens on the hold *(guess)* |
| **P-06** | **Lump → product** | f0 a thin ring of the product's main colour at the target spot; f2–6 it thickens into a lumpy block; f8–12 it takes the product's silhouette; f14 hard switch to the real product. 14 f @29.97 on ones, then hold. Variant: two blobs merge (ec2 12.4–13.0 s). Draw as an organic SVG blob with turbulence displacement so it reads handmade |
| **P-07** | **Lineup + name pop** | f0 every product cut on in a row (observed x ≈ 300–850 in the screen; **house: the row spans the screen edge to edge**, settling one drawing apart); f6 the name at 20%, growing to 100% over 21 f **ease-in**, landing after the imperative, while the camera pushes into the glass (EV-5); hold 35 f; then the static |
| **P-08** | **The show on the screen** | Ordinary content plays in the screen with its own small filtered sound and a slight glass tint (ec2: sports footage on the CRT). Adaptation: the user's own B-roll or capture |
| **P-09** | **The trip** | §8.3a |
| **P-10** | **Iris to card** | §9 T-08 |
| **P-11** | **The peek** | A still frame ≈ 1 s (something small may cross on twos), then the thing slides from the edge to its stop (ec1: (513, 1390), 284 px wide) over ≈ 8 f on twos, stops dead, stares 36 f with one small tilt; end on it |
| **P-12** | **Deadpan punch-in** | Cut to the speaker's silent, still face at the largest size M2 allows; 38 f @29.97, near silence; row 38 / 38 / 57 f. Source: a silent stretch of the footage; else a freeze-frame of a held face (75% of ec2's frames are holds). Pick frames with still eyes and a closed mouth; one blink in the middle beat is the punchline (EV-6) |
| **P-17** | **The speaker on the TV** (this edition) | `L-TV-SELF` (§3.4a): the speaker's own footage inside the screen with the glass over it, saying the ad line hotter; a super may blink above their head; out by the static (EV-3) |
| **P-18** | **Push into the glass** (this edition) | On the lineup + name: a linear push from the TV in the room until the screen fills the frame width (≈ 1.20–1.25×) over 18–24 f, dead stop, hold 35 f; the static plays at that scale; then a hard cut back to the room (EV-5) |
| **P-13** | **Push and hold** | A **linear** push (no easing) over 77 f @24, ≈ 1.5× on a wide (ec1), stopping dead, hold ≥ 38 f. On a person it stops at the face limit (§10.2) |
| **P-14** | **Foreground wipe** | §9 T-06 |
| **P-15** | **Split line** | One thought across two captions with ellipses, on two beats, no gap (ec3 22.5–26.1 s) |
| **P-16** | **Sign push** | A real sign in the top third (letters ≥ 95 px) grown by the push (690 → 1040 px wide) |

### 8.3a Frame recipes (the ones that make the style)
**The trip (P-09), ec3 f128–210 @24 (@30 in brackets):**
1. **f128–133 (8 f) bloom build** on the outgoing shot: the hero leaps (adaptation: the speaker's reaction to the first try); glow and brightness rise every frame (per-frame difference 8 → 25): glow 10 → 60 px screen-blended, exposure +0.5 → +2 stops *(guess)*.
2. **f134 hard cut into the void:** `#F0C301`, brighter `#F4F445` at the centre; the hero centred, limbs spread, face (594, 513). Adaptation: **the speaker's matte** frozen at the peak of their reaction, 0.80–1.00 of the MCU size, face centre y 513–700, whole head (M2), a soft yellow rim glow. No matte: the whole frame graded to yellow (contrast −20%) and bloomed, face still whole.
3. **f140–160 (25 f):** honeycomb cells fade up **behind** the hero on twos (cells ≈ 120–160 px flat-to-flat, glowing edges *(guess)*).
4. **f165–169:** the bloom intensifies.
5. **f170–175 (8 f):** white-yellow whiteout (T-05).
6. **f176:** hard cut; a soft yellow orb ≈ 400 px at centre fades over ≈ 24 f (30 f).
- ≈ 2 s in all, timed to the reaction line; the caption uses the bright-frame shadow.

**The ad, ec2 6.54–16.92 s (t from the ad's first frame):**
| t | Event |
|---|---|
| 0.00 | Static off → pastel sky; ad audio on the same frame |
| 0.13–0.86 | Product A tossed in from the bottom-left; a real hand catches it |
| 1.69 | The interrupt line ("We now interrupt this broadcast to bring you…"), 4.1 words/s |
| 1.80 | Super 1 on (≈ 1.25 s before its spoken point); a lump → product B (14 f) |
| 3.80 | Super 2; a hand raises product C from the bottom edge |
| 5.84 | Super 3 (two words); two blobs → product D |
| 7.85 | The imperative ("Buy … now!") |
| 8.31 / 8.51–9.21 | Lineup cut on / name pop 20 → 100% (21 f, ease-in) |
| 9.21–10.38 | Hold; a character's protest ("Nooooo!") |
| 10.10–10.30 | 6 f digital silence |
| 10.41 | Static on |

### 8.4 Line → pattern lookup (adaptation)
| Line type | Primary | Alternates |
|---|---|---|
| Opening line with the thing | P-01 in `L-MCU` | H-3 dare |
| "We interrupt this video…", the ad's own line | **P-17** on the TV | The VO over P-05 |
| Naming the product / tool / idea | P-01 (held to the lens) | P-05 / P-06 in the ad |
| A feature or benefit | **P-04 super** in the ad with P-05/P-06 | The voice says the feature, the super the feeling (M10) |
| 2–4 benefits or variants | The ad: one super + one product beat each, ≈ 2 s | P-07 for the range |
| Price, "get it", CTA | P-07 + P-18 + E-4, or E-2 | E-3 |
| The first try, "what it feels like" | **P-09 trip** | P-12 (understatement) |
| Something ordinary to interrupt | P-08 → static | H-5 |
| A joke, a turn, "…anyway" | **P-12 deadpan** | A pose hold in `L-MCU` |
| Where it comes from, how to get there | SD-4 legs + T-06 | P-02 insert per step |
| A place, "my setup" | `L-WIDE` + P-13 (+ P-16) | — |
| Anything on a screen (an app, a site) | P-08 inside the TV | `L-SCREEN-ROOM` |
| The verdict | E-1, E-2 or E-3 | — |

### 8.5 Density and variety
- A visible change every **1.3–2.7 s**; a new world every 3–6.6 s. **Holds count as beats**, not dead air.
- Families per reel: VIGNETTE 2–3 (G-1, G-12, G-13), BREAK 6–8 (G-1…G-7), QUEST 5–7 (G-1, G-8…G-11, G-14).
- **Never a dead frame:** a frame more than half soft background for longer than ~0.7 s needs its next element or a bigger hero; the deadpan hold and the silent card are the only deliberate exceptions.

### 8.6 Asset rules
- **The product:** the user's own: a clean photo (cut out for P-05/P-06/P-07), a capture of the app (P-08), a scan of the page. Never another brand's.
- **The sky plate:** pastel painted clouds (lavender, pale blue, lilac; ≈ `#8F8B99`), no text.
- **The TV body:** a drawn retro CRT (`#2E160B`, rounded screen corners, a dial strip), screen hole at x 203–863, y 702–1150.
- **Supers:** 2–4 true benefit words (M11), ≤ 11 characters a line. **The name:** text in Fraunces Soft, never a redrawn logo.
- **Honeycomb:** a generated hex pattern with glowing edges, transparent.
- No stock footage, fake testimonials, fake reviews or comments.

### 8.7 Mistakes seen in the references (and the fix)
| Seen | Fix |
|---|---|
| ec2: no face at f0, interrupt at 5.44 s; ec3: 80 px hero, caption at 1.17 s | M1, §6.4: face + thing at f0, caption by f6, static ≤ 3 s |
| ec2: no subtitles; 41–59 px supers | M6, §5.3 |
| ec3: cream captions on the yellow trip | §5.2 bright-frame shadow |
| ec2 CUs crop ears; ec3 cuts a head at the edge; ec1 eyes at 84% | M2, eye line ≤ 1440 |
| ec2 +0.1, ec3 +0.3 dBTP; licensed songs | M14, N6 |
| ec1: a duplicated frame before each cut | Not copied: cut on a deliberate hold |
| ec2: a 661 px screen with ≈ 150–240 px products and 41–59 px supers | The ≥ 860 px TV, products ≥ 480 px, supers ≥ 88 px cap (sizes are floors) |

### 8.8 Elevated devices (new in this edition)
| ID | Device | When | What runs | Sound |
|---|---|---|---|---|
| **EV-1** | **Clay weight** | Every arrival (P-05 delivery, P-06 morph, lineup items, the peek) | One drawing of anticipation (a 20–30 px dip), the move on ones or twos, the landing at 1.08 × 0.92 for one drawing, a 2–3% wobble on the next, then dead still; a soft contact shadow grows under it as it lands | A soft clay thump on the landing (`hard-sitting-on-bed-…`, `game-pop-up-…-3`); `selection-click` on each stepped rise (the list cue) |
| **EV-2** | **The TV lives** | The first time the TV is seen; every TV beat | Power-on: a bright horizontal line opens to the full picture over 4 f, a 2 f bloom on the glass; afterwards the glass carries a soft curved highlight and a ±2% brightness shimmer; the content sits slightly inside the glass (1–2 px softness, a faint inner vignette) | `click-click` (the knob) + `ui-opening` (very low) on the power-on |
| **EV-3** | **You're on TV** | The ad's spoken line ("we interrupt this video to bring you…") | `L-TV-SELF`: the speaker's own footage inside the screen, glass over it, the ad voice 6–8 dB hotter; a super may blink above their head; ≤ 4 s; out by the static. The speaker has become the host of their own cheap commercial | The static carries the in and out; nothing else |
| **EV-4** | **The benefit ladder** | Every super in the ad | Each super lands with a 1-frame 1.12× stamp and one tonal step, each a little higher (benefit 1 low, 2 middle, 3 high); after the last, 0.4 s of no new sound, then the name | `0552611` → `0552621` → `0552631`; a fourth benefit `little-game-point` |
| **EV-5** | **Push into the glass** | The lineup + name pop | P-18: a linear push (on ones) from the TV in the room until the screen fills the frame width, dead stop on the name's landing, hold 35 f; the static plays at that scale; a hard cut back to the room's TV | `camera-quick-zoom-shoot-ohmlab-camera-quick-zoom-shoot-ohmlab` (the lens whirr ending in its click on the dead stop); the name lands on `05405-shine-ding` |
| **EV-6** | **Deadpan timing** | The reaction row (P-12, SD-3) | Frames with still eyes and a closed mouth; one blink in the middle beat (the punchline); the room tone dips 2 dB; the row's lengths (38 / 38 / 57 f) never trimmed | None: room tone only. The silence is the joke |
| **EV-7** | **Line boil** | Everything drawn: the lump, the TV body outline, the cloud edges, the honeycomb, the orb's rim | Outlines and edges redraw with a 1–2 px wobble on twos so the ad looks handmade; never on footage, captions, supers or the name | None |
| **EV-8** | **The hue climbs, seen** | The whole reel | The product's main colour appears as light: a lamp in the room, a reflection on the TV glass, the trip's void, the lineup's backdrop, growing until it owns the name beat; never a tint on the face | None |
| **EV-9** | **Film-gate iris** | E-3 | The iris's feathered edge carries a faint warm glow; the creep is a lens finding focus, the snap a shutter; the card's name settles with one 2-drawing wobble, then holds silent | `classic-camera-focus-and-shutter-ohmlab` aligned so the shutter lands on the snap; then digital silence |

---

## §9 Transition system (`T`)

A **hard cut to a new world** is the sentence. **Static** is the channel change. **Bloom and whiteout** are the trip's doors. **The iris** is the full stop.

### 9.1 Transition library
| ID | Transition | Frames | Recipe | Sound |
|---|---|---|---|---|
| **T-01** | **World-change hard cut** (default) | 0 | Changes the shot size **and** the colour world (M4), landing on a held pose. May fall mid-sentence when the line continues (ec2: "…play, and \| the ball is snapped"); a caption ending near it ends on the cut frame | None: a source switch only |
| **T-02** | **TV static** (signature) | **33 @29.97 = 33 @30 (1.10 s)** | Inside the screen rect only: f0 the picture becomes grey noise (`#585458` average, new every frame) and the hiss starts on the same frame at a steady level (ec2: −28.7 dBFS RMS, centroid ≈ 5.1 kHz); f33 the next picture and its audio start on the same frame. No fade, roll or colour bars. Always a pair; 6 f of digital silence before the second (ec2 16.64–16.84 s, −54 dBFS) | `glitch-2025-01-08-02-40-44-utc-glitch-06` trimmed to its flattest 1.10 s *(listen first; the file builds then breaks up)*, or `interference-flicker-1` trimmed to 1.10 s; ≈ 14 dB under the voice |
| **T-03** | **In-screen switch** | 0 | The screen's content changes on one frame; the TV and room don't move | None |
| **T-04** | **Bloom-flash in** | 6 @24 (8 @30) | The outgoing shot blooms every frame, then a hard cut into the void (§8.3a 1–2) | `short-shine-2025-08-27-06-45-01-utc-short-shine-3` under the build (−24 dB); `appear-magic` on the cut into the void (−22 dB) |
| **T-05** | **Whiteout + orb out** | 6 @24 (8 @30) + orb 24 @24 (30 @30) | Whiteout, a cut at its peak, a ≈ 400 px yellow orb fading over the new shot | `cinematic-transition-flash-05` on the whiteout (−22 dB); `simple-whoosh-382724` on the orb (−26 dB; the reference shows a small HF accent at 7.29 s) |
| **T-06** | **Foreground wipe** | ≈ 27 @24 (≈ 34 @30) | A big soft foreground element (ec3: leaves; adaptation: a hand, the product, an object) passes close across the lens, stepped on twos, revealing the next place (ec3 f476–502). Join two clips on the frame the foreground covers ≥ 90% | `air-low-woosh` or `woosh-2025-08-27-02-12-31-utc-woosh-01` at −26…−28 dB |
| **T-07** | **Reaction-row cut** | 0 | Hard cuts on a 38 f @29.97 (1.27 s) beat, the last 57 f (1.90 s), in near silence; back to wide/MCU after the last line | Room tone only |
| **T-08** | **Two-speed iris to the card** | 60 @24 (76 @30) | Circle centre (540, 940) (adaptation: on the face, §3.8.4), feather 20–30 px with a faint warm glow on the edge (EV-9), black outside. **Fast** f670–700 @24 (38 f @30): from just covering the frame (radius ≈ 1120) to diameter ≈ 1063 (measured "equivalent diameter" 1365 → 1063, ≈ 10 px/f; corners and top first). **Creep** f700–720 (25 f): 1063 → 973, a near-hold while the punch line reads below on black. **Snap** f720–730 (13 f): 973 → 0, the card visible inside the circle on its last 3–4 f. Hard hold on the card | The room tone fades after the last word, step by step with the iris (ec3's song: −15 dBFS → −22 at the iris start, −34 in the creep, −43 at the snap; we use no music), **digital silence before the card** (−120 dBFS from 30.5 s); this edition: `classic-camera-focus-and-shutter-ohmlab` with its focus ticks on the creep and the shutter on the snap (EV-9) |
| **T-09** | **Push into a hold** | 77 + hold @24 | Linear push or tilt, stopped dead, hold ≥ 38 f (P-13) | Optional `zoom-2025-05-09-19-11-57-utc-zoom-5` very low (−30 dB) under a push on a wide |
| **T-10** | **Hard stop** | 0 | The last frame is a held pose; E-1 ≤ 6 f after the last word, E-2 ≤ 1.1 s after the line. No fade, no tail with sound | None |
| **T-11** | **TV power-on** (this edition, EV-2) | 4 | The first cut to the TV: the screen is black, a bright horizontal line opens to the full picture over 4 f with a 2 f glass bloom | `click-click` + `ui-opening` (very low) |
| **T-12** | **Into the push** (this edition, EV-5) | 18–24 + hold 35 | The linear push into the glass on the name; dead stop on its landing; the static then plays at that scale; out by a hard cut to the room | `camera-quick-zoom-shoot-ohmlab-camera-quick-zoom-shoot-ohmlab` |

### 9.2 Transition grammar
| Boundary | Use | Never |
|---|---|---|
| Frame 0 | Nothing: the reel starts on the face and the thing | Fade-in, static open, black |
| Between worlds / sizes | **T-01** | Dissolves, whips, zooms, flashes |
| The first sight of the TV | **T-11** | A TV that is already on, unless it was on in the footage |
| Into / out of the ad | **T-02** pair | A straight cut from show to ad |
| The name in the ad | **T-12** | A zoom with easing or blur |
| Inside the ad | **T-03** | Slides, wipes, fades |
| After the ad or a big line | **T-07** | Stings |
| Into / out of the trip | **T-04** / **T-05** | Using them anywhere else |
| Between two places | T-01 or **T-06** | — |
| Inside a long shot | **T-09** | A drift that never stops |
| The end | **T-08** (E-3) or **T-10** (E-1, E-2) | A tail with sound, a loud card |

### 9.3 Transition map (part of the plan)
```yaml
transitions:   # structure illustration; every time comes from words.json
  - {t: 2.50,  id: T-01, from: L-MCU,    to: L-SCREEN, note: "the show on the TV"}
  - {t: 2.80,  id: T-02, from: show,     to: ad,   sound: glitch-2025-01-08-02-40-44-utc-glitch-06}
  - {t: 12.10, id: T-02, from: ad,       to: show, note: "6 f silence before"}
  - {t: 14.30, id: T-07, from: L-SCREEN, to: L-CU}
  - {t: 16.84, id: T-01, from: L-CU,     to: L-MCU}
  - {t: 30.60, id: T-10, from: L-MCU,    to: END}
```

### 9.4 Transition budget (per reel)
- **T-02:** 0 or 2. **T-04 + T-05:** ≤ 1 pair. **T-06:** ≤ 2. **T-07:** ≤ 2 rows in 45 s, ≤ 3 cuts each. **T-08:** ≤ 1, ending only. **T-11:** ≤ 1 (the first sight of the TV). **T-12:** ≤ 1. **T-01:** unlimited, each changing world or size.
- Transitions never delay speech; a cut sits on a held pose or a word boundary.

---

## §10 Motion tokens, camera, layers, finishing

### 10.1 Motion tokens
| Token | Reference | House @30 |
|---|---|---|
| Fast action (lift, throw, catch, morph) | 2–8 f on ones @24 | 3–10 f on ones |
| Hold after a move | 4–14 f @24 (0.17–0.58 s) | 5–18 f |
| Puppet-like elements (rises, the peek, honeycomb, lineup steps) | **On twos** (12 drawings/s; per-frame differences alternate high/low) | **12 drawings/s: holds of 3-2-3-2 f** (2 f = 15/s if 12 reads too choppy) |
| Camera push / tilt | On ones, linear (ec1: flat per-frame difference 3.6–4.0 for 77 f), dead stop | Same |
| Camera follow through foreground | Stepped on twos (ec3 f481–498) | On twos |
| Blink | On 6–7 / off 5–6 @29.97 | On 6 / off 6 |
| Name pop | 20 → 100%, 21 f, **ease-in** | 21 f, `cubic-bezier(.55,0,1,.45)` *(guess)* |
| Morph | 14 f on ones | 14 f |
| Peek | ≈ 8 f on twos + 36 f stare @24 | 10 f + 45 f |
| Trip | 6 + 42 + 6 (+ orb 24) @24 | 8 + 52 + 8 (+ 30) |
| Iris | 30 / 20 / 10 @24 | 38 / 25 / 13 |
| Clay landing (EV-1) | — | Dip 1 drawing, land 1.08 × 0.92 for 1 drawing, wobble 2–3% for 1 drawing, still |
| TV power-on (EV-2) | — | Line 4 f, glass bloom 2 f |
| Push into the glass (EV-5) | — | 18–24 f linear, dead stop, hold 35 f |
| Line boil (EV-7) | — | 1–2 px redraw on twos |
| Held frames | ec1 49%, ec2 75% | The talking footage stays live; graphics and inserts hold |

- **Talking footage stays at full frame rate** while the speaker talks (lip sync). The stop-motion feel comes from cutting on held poses, a 5–18 f freeze-hold after a gesture, the graphics on twos, and the stepped trip and peek. Speech is never stepped to 12 fps.
- Objects **arrive and stop**; nothing eases softly into place (the camera's stop is dead). No motion blur on stepped elements. Nothing slides across the screen insert.

### 10.2 Camera
- **Locked off** by default (every ec2 setup; ec1's MCU). **One engineered move per world:** a linear push that stops dead and holds (ec1's wide ≈ 1.5× over 3.2 s; ec3 shots 1 and 7, slow).
- **On a person the push is face-limited:** the end scale is the largest that keeps hair ≥ 60 px below the top and the chin above y 1360; typically 1.00–1.08 on a handheld selfie and 1.10–1.35 on a tripod MCU *(guess)*. The face limit beats the reference's 1.5×.
- No added shake, drift or endless Ken Burns.

### 10.3 Layer order (back to front)
1. The world (footage full screen, or the TV's drawn set)
2. The TV body with its screen hole
3. In the screen: sky → products / morph / hand → super → name
4. Static (screen rect)
5. The trip: void → honeycomb → the speaker's matte → bloom
5a. `L-TV-SELF`: the speaker's footage inside the screen, under the glass highlight
6. `CAP-DIALOGUE`
7. Light orb, whiteout
8. The iris matte, with the card behind it

### 10.4 Finishing
- The room warm, soft and rich (§4.4, never pale); the retro lives in the TV object only.
- TV glass: a slight tint and softness on the screen content (ec2), 1–2 px blur and a faint top highlight *(guess)*; no scan lines.
- The trip is the one place the bloom goes "too far".
- Spelling of every caption, super and name checked against the script.

---

## §11 Sound (D4)

**No music bed, ever.** Sound is SFX only (the creator's direction, 12 Oct 2026): never a music track, bed, drone or loop under the voice.

### 11.1 The room rule (M12)
| Mode | What plays | Seen in | Use for |
|---|---|---|---|
| **`ROOM`** | Diegetic: voice(s), room tone, what's on the screen (the show small and filtered, the hiss, the louder ad), plus this edition's handmade foley score (§11.4); **no bed under the talk** | ec2 (−14.9 LUFS, LRA 12.3) | Every reel |
- ec1 and ec3 ran one song under subtitled dialogue; we never use music. ec2 is the model: the TV, the static and the room carry it, and the joke lands in room tone.

### 11.2 `ROOM` levels (ec2, RMS)
| Layer | Level | Rule |
|---|---|---|
| The show on the screen | −20…−28 dBFS, filtered and small (≈ 300 Hz–5 kHz *(guess)*) | A burst may peak at −7/−8 on a cut |
| Static hiss | −28.7 dBFS steady | Switched with the picture |
| The ad voice | **−9…−17 dBFS**, brighter | +6–8 dB over the talk (M9) |
| Speaker / character lines | −13…−16 dBFS | The voice |
| Room tone in the reaction row | −31…−32 dBFS | **Room tone, not digital silence** |
| Before the second static | −54 dBFS for 6 f | A deliberate gap |
| Sound bridge | The show continues quietly (−28…−33) over the cut to the reaction | The screen lives off camera |
- **No SFX on ordinary world-change cuts**: those level changes are source switches. The user's room tone is taken from their own footage, never generated.

### 11.3 No music bed
- No music bed, ever: this style is scored with sound effects only. The voice, the room and the foley carry the reel.

### 11.4 The palette (a handmade foley score; ids from SOUNDS.md, rotate)
The references are almost dry (ec2: the TV, the static, the room). This edition scores the **objects' own small sounds** so every arrival feels physical, gives the ad its cheap infomercial sparkle, and keeps the jokes in room tone.

| Role | When | Pool | Level vs voice |
|---|---|---|---|
| **The use** (P-01, f1–8) | The sip, tap, click, page on the first frames | The footage's own sound first; if silent, one dry sweetener: `beer-bottle-opening-sound-effect-no-copyright` (a can or bottle), `bottle-cork`, `click-click` (a press), `mouse-click-mouse-click` (a tap), `paper-turn-page` (a page) | −18…−24 dB |
| **The TV clicks on** (EV-2, T-11) | The first cut to the TV | `click-click` (the knob), `ui-opening` (very low, under the power-on line) | −20…−28 dB |
| **Static** (T-02, the pair) | Both statics, identical (M8) | `glitch-2025-01-08-02-40-44-utc-glitch-06` trimmed to its flattest 1.10 s, **the same file both times** (2 uses); alt `interference-flicker-1` | ≈ −28 dBFS RMS (≈ 14 dB under the voice) |
| **The weight under the break** (≤ 2 per reel) | The first static's first frame; the lineup's cut-on | `abstract-hit-sub-bass-07` (felt, not heard) | −14…−18 dB |
| **The toss** (P-05) | A product tossed in | `swsh-arrow-feather-high-sdcl-archery166`, `fast-swish-movement-fast-swish-movement` | −20…−24 dB |
| **Clay landing** (EV-1) | A product lands, a lineup item settles | `hard-sitting-on-bed-2025-08-27-06-37-27-utc-ldj-audio-hard-sitting-on-bed-wav` (trimmed to the thump), `game-pop-up-2025-08-27-06-39-58-utc-game-pop-up-3`, `game-pop-up-2025-08-27-06-39-58-utc-game-pop-up-1` | −18…−22 dB |
| **Stepped rise** (list cue) | Each step of a stepped arrival (P-05's three steps), each lineup item | `selection-click` | −26…−30 dB |
| **The squish** (P-06) | The lump becomes the product | `suctionboink-lb015101` (trimmed to its ≈ 0.5 s pop), `paperslightcrumbl-pe1017507` (felt or paper products) | −20…−24 dB |
| **The benefit ladder** (EV-4) | Each super's first frame | `0552611` → `0552621` → `0552631`; a fourth `little-game-point` | −18…−22 dB |
| **The product's first full reveal** | Once, in the ad | `twinkly-bell-glitter-twinkly-bell-glitter-3` | −22 dB |
| **The name lands** (P-07) | The name's landing frame | `05405-shine-ding`; alt `ting-ting` | −14…−18 dB |
| **The price** (optional, once) | Only when a real price is said in the imperative | `cash-machine-2025-02-19-03-33-58-utc-cash-machine` | −18 dB |
| **The push into the glass** (EV-5, T-12) | The push on the name | `camera-quick-zoom-shoot-ohmlab-camera-quick-zoom-shoot-ohmlab` (whirr → click on the dead stop) | −20 dB |
| **A push on a wide** (T-09) | Optional | `zoom-2025-05-09-19-11-57-utc-zoom-5` | −30 dB |
| **The trip** (T-04 / T-05) | Bloom build, into the void, honeycomb, whiteout, orb | `short-shine-2025-08-27-06-45-01-utc-short-shine-3`, `appear-magic`, `fairy-glitter-dust-fairy-glitter-dust` (low), `cinematic-transition-flash-05`, `simple-whoosh-382724` | −20…−28 dB |
| **The foreground wipe** (T-06) | A hand or object across the lens | `air-low-woosh`, `woosh-2025-08-27-02-12-31-utc-woosh-01` | −26…−28 dB |
| **The peek** (P-11) | The slide in on twos (the stare is silent) | `wind-up-toy-wind-up-toy-3` (a toy wound off screen, deadpan) | −24 dB |
| **The TV switches off** (optional) | A last TV beat that powers down to a dot | `ui-sci-fi-disappear-flicker-11` | −24 dB |
| **The iris** (EV-9, T-08) | The creep and the snap | `classic-camera-focus-and-shutter-ohmlab` (focus ticks on the creep, the shutter on the snap) | −20 dB |

**The one meme hit (once per reel, optional):** only on a line where the creator mocks something, placed in the gap right after the line (never on the deadpan beat, never inside the ad), at −14…−18 dB with the tail trimmed to ≤ 0.8 s: `record-scratch-record-scratch` ("wait, what?") or `vine-boom-sound-effect-128k` (a shocking fact). If no line mocks anything, there is no meme hit.

**Never in this style:** meme cues beyond that one hit (crowd "aww", laughs, voice memes), boings, rimshots, risers under the voice, cinematic booms, anything on the deadpan beat, anything on an ordinary world-change cut, music.

### 11.5 The SFX ledger (Studio Standard Rule, unchanged)
- **Any file at most 2× in a reel,** except the one **list cue** (here `selection-click` on each stepped arrival and lineup item). The static's file is used exactly twice (the pair).
- **No file on two consecutive cues;** rotate within each pool.
- **Density, scaled to the vibe:** about one cue every **0.8–1.4 s inside the ad** (a cheap, busy commercial), one every **2–3 s in the show** (the use, the knob, a push, a wipe), **none in the deadpan row** and none on plain cuts or under ordinary talk.
- **Never more than two cues overlapping;** never on a trigger word's consonant (shift ±2 f). Foley sits at the object's own scale: small things are small sounds.
- The static, the clay thumps and the name's sparkle are what the viewer remembers; the clicks and steps are texture.

### 11.6 Silence and the mix
- **Silence is the punchline:** the reaction row is room tone (−31…−32 dBFS), with the dip of EV-6; **0.4–0.6 s of no new sound before the name lands**; 6 f of digital silence before the second static; the card is digital silence.
- Voice: high-pass 80 Hz, gentle de-ess, light compression; pauses kept in the deadpan beats.
- The ad: +6–8 dB (or +3 dB at 3–5 kHz *(guess)*), then limited. In `L-TV-SELF` the speaker's own voice gets the same treatment, plus a slight small-speaker band (≈ 200 Hz–6 kHz).
- Final: **−14 LUFS, true peak ≤ −1.0 dBTP** (references: −14.1 / −0.9, −14.9 / +0.1, −14.5 / +0.3 dBTP). Reels may run a wide LRA (12.3 LU, ec2). The voice is always the loudest thing except the ad's own voice and the static's first frame.

---

## §12 Footage handling

### 12.1 Shoot setups
| Setup | Description | Use |
|---|---|---|
| **A: Handheld selfie** | Arm's length, wide lens; head 55–75% of the height, hair or chin may leave the frame | `L-MCU` after the tight-face fix |
| **B: Tripod MCU** | Locked, chest-up; head top 300–600, eye line 650–900 | `L-MCU`, `L-CU`, `L-VOID` matte source |
| **C: Wide in their space** | Full body or waist-up; head 160–300 px | `L-WIDE`, quest legs, the vignette's second world |
| **D: Hands + product** | The product handled against a plain background | P-05, P-01 close use |
| **E: Real screen in the room** | A monitor/TV behind the speaker | `L-SCREEN-ROOM` |
| **F: Captures, photos** | The app, the site, the product photo | P-08, P-05/P-06/P-07 |

### 12.2 Crop table per layout
| Layout | Placement |
|---|---|
| `L-MCU` (tripod) | Scale/offset so head top is 380–560 and the eye line 760–860, within the face limit |
| `L-MCU` (selfie: **the tight-face fix**) | If the hair is < 60 px from the top or the chin below y 1360 (or either leaves the frame): **keep the footage full screen** (hair may touch the top edge, eyes to chin always in) and move the supers and captions clear of the face; **or**, when the whole head must show, put the footage in a **box on the drawn set**: ≥ 940 px wide, rounded 28–36 px, a soft contact shadow, the footage cover-cropped inside it and centred on the face. **Never a blurred copy of the same frame behind it**, never a narrow pillar, never pale |
| `L-CU` | Scale = the smallest of 1300 / hair-to-chin height, 1000 / face width, and the resolution limit (≤ 1.5× on 1080p, ≤ 2.5× on 4K); eye line at 743–851. If ≤ 1.05× the previous shot, use a held still instead |
| `L-WIDE` | As shot; the push ends with the eye line ≤ 1440 and the head whole |
| `L-SCREEN` surround | A designed set in the style's palette (drawn wall, wallpaper, table) or a separate room plate photo; never the creator's own footage blurred |
| `L-SCREEN-ROOM` | Corner-pin into the real screen's quad, tracked if the camera moves; never over the face |
| `L-TV-SELF` | The speaker's footage scaled into the screen (880×600 house) so the head fills ≈ 60–75% of the screen height, centred, whole; glass highlight over it |
| `L-VOID` | The speaker's matte, frozen, 0.80–1.00 of `L-MCU`, face centre (540–594, 513–700) |
| `L-IRIS` | Centre (face x, eye line + 80); creep diameter ≥ 1.7 × hair-to-chin height |

### 12.3 Matte, frame rate, audio
- **Matte** only for `L-VOID` and a filmed hand delivery on a busy background; one matte job at a time; without one, the trip's no-matte fallback.
- **Deliver 30 fps**, 1080×1920 (references: 24 and 29.97 fps). Conform VFR phone footage to constant 30 fps first. Stepped elements are 12 drawings/s inside the 30 fps render.
- **Audio:** one clean voice track; keep the room tone (the reaction row's sound). The ad lines are the user's own voice, mixed hotter, never re-voiced.

---

## §13 Output contract

### 13.1 Beat-sheet schema (one row per beat; the first ```yaml``` block of the edit brief)
```yaml
- id: 6
  section: BREAK-AD              # HOOK | WORLD | SHOW | BREAK-STATIC | BREAK-AD | REACTION | TRIP | QUEST-n | PAYOFF | END
  format: ADAPT-BREAK            # ADAPT-VIGNETTE | ADAPT-BREAK | ADAPT-QUEST
  sound_mode: ROOM               # ROOM only (no music)
  spoken: "<the line, from words.json>"
  trigger: "<the word that starts the beat>"
  onset_s: 0.00                  # from words.json
  start_s: 0.00
  layout: L-SCREEN               # L-MCU | L-WIDE | L-SCREEN | L-SCREEN-ROOM | L-TV-SELF | L-CU | L-VOID | L-IRIS | L-CARD
  face: null                     # or {hair_top_y: 470, eye_y: 790, chin_y: 1120, x: 560, scale: 1.0, fix: none|scale_down}
  world: "inside the TV: adSky #8F8B99"   # the colour world (M4)
  family: G-6                    # G-1 … G-14
  pattern: P-06                  # §8.3 (P-01 … P-18)
  elevated: [EV-1, EV-7]         # §8.8
  visual: "lump in the product's colour forms at (540, 1040) and becomes the product photo, 14 f on ones"
  super: {text: "<BENEFIT>", on_s: 0.00, cycles: 4}    # inside L-SCREEN only, else null
  caption: {text: "<the spoken line>", on_s: 0.00, off_s: 0.00}   # CAP-DIALOGUE, every spoken line
  name: null                     # NAME-ARCH beats only
  motion: "ring 2 f (anticipation), morph 14 f on ones, 1.08×0.92 squash 1 drawing, wobble 1 drawing, hold"
  transition_in: T-03
  transition_out: T-03           # T-01 … T-12
  sound: [{id: suctionboink-lb015101, at: 0.47, level_db: -22}, {id: "0552611", at: 0.00, level_db: -20}]   # ids from SOUNDS.md (§11.4); log each in the ledger
  hero: "the product, ≥ 480 px, centred in the screen"
  assets: [edit/assets/product_cutout.png, edit/assets/sky_plate.png]
```

### 13.2 Hook proposal format (3 required)
```yaml
- name: "<short name>"
  formula: HF-3                  # HF-1 … HF-4
  visuals: [H-1, H-3]
  frame0: "speaker L-MCU, <the product> in the right hand at chest height, eye line y≈790"
  first_3s: "f1–8 lifts it to the lens | f9–22 hold | f6 caption '<line>' | 1.4 s cut to <next>"
  caption: "<the first line with the stressed word in CAPS>"
  loop: "what 'this' is (paid off by the name pop / the card)"
  sound: ROOM                    # SFX only, never music
  why: "<one line>"
```

### 13.3 What to show the creator
1. The format (`ADAPT-…`), one line of reasoning.
2. The hook (3 proposals, one recommended).
3. **The speaker map:** every beat's layout with the face box (hair top, eye line, chin) and any scale-down fix; the face share; the budget counts (statics, inserts, `L-TV-SELF`, punch-ins, trip, iris).
4. The beat sheet + the transition map + the sound ledger.
5. The asset list: product photos/cut-outs, screen recordings, the sky plate, the TV body, the true benefit words (with their source), the name; anything missing (a hand insert, a wide).
6. Stills:
   - frame 0 (face + thing + first caption under the chin);
   - the use pose (f8–20);
   - the TV's power-on frame, a static frame, and the first ad frame with a super "on";
   - the speaker on the TV (if used);
   - a product landing (the squash frame);
   - the name pop's landing frame at the end of the push;
   - a reaction punch-in (whole head);
   - the trip's peak (if used);
   - the iris at its creep and the card (if used), or the last frame.

---

## §14 Worked example and reference cheat sheet

### 14.1 Worked example: ec2 "We interrupt this broadcast" rebuilt as a plan (`FMT-BREAK`, `ROOM`)
Reference fps 29.97; times from the reel. Products are written as A–D (the reference's own products don't belong in any plan); supers as "benefit 1–3".

**Choices:** format `FMT-BREAK`; sound `ROOM`; hook HF-2 (familiar context) with H-2; one break (2 statics); a reaction row of 3; ending E-4 inside the ad + E-2.

| t (s) | f | Spoken | Layout | Pattern | On screen | Text | Transition / sound |
|---|---|---|---|---|---|---|---|
| 0.00 | 0 | Commentator: "The offense shifts to the right side for this play, and…" | `L-SCREEN-POV` | P-08 | POV from the sofa: small TV top-middle (screen 378–716 × 527–729) with live football; blurred paws and snacks at the bottom corners; a tiny jersey figure from behind | — (**fix: caption the commentary**) | Game audio −20…−28 dBFS (**fix: open on faces, §14.1 notes**) |
| 2.77 | 83 | "…the ball is snapped, the quarterback…" | `L-WIDE` | — | Reverse wide: the two fans on the sofa, eyes y ≈ 680 / 621, snacks, mugs; small pose changes f118–143 | caption | T-01 mid-sentence |
| 5.17 | 155 | (crowd roar) | `L-SCREEN` | P-08 | CU of the TV: body 41–1013 × 635–1350, screen 203–863 × 702–1150, football | — | T-01 on the roar (−8 dBFS burst) |
| 5.44 | 163 | — | `L-SCREEN` | P-03 | Static, 33 f | — | **T-02**, hiss −28.7 dBFS |
| 6.54 | 196 | Ad sting | `L-SCREEN` | P-05 | Pastel sky; product A tossed in from the bottom-left, a real hand catches it | — | T-02 off; ad audio on the same frame (−10 dBFS) |
| 8.23 | 247 | Announcer: "We now interrupt this broadcast to bring you…" (4.1 w/s) | `L-SCREEN` | P-04 + P-06 | Super "benefit 1" blinks (on 8.34 s, ≈ 1.25 s before its spoken point); a lump forms and becomes product B (f256–270) | super 1 | Ad 6–8 dB over the show |
| 10.34 | 310 | (VO continues) | `L-SCREEN` | P-04 + P-05 | "benefit 2" replaces it; a hand raises product C from the bottom edge | super 2 | — |
| 12.11 | 363 | "In addition, we have …" (the range) | `L-SCREEN` | P-04 + P-06 | "benefit 3" (two words, 41 px cap: **fix ≥ 76 px cap, two lines**); two blobs merge into product D | super 3 | — |
| 14.39 | 431 | "Buy … now!" | `L-SCREEN` | P-07 | Lineup cut on at 14.85 (f445); the name pops 20 → 100% f451–472 (ease-in), holds to f507 | name | E-4 |
| 16.21 | — | A fan: "Nooooo!" | `L-SCREEN` | — | Name holds | caption (**fix**) | — |
| 16.64 | 498 | — | `L-SCREEN` | — | — | — | 0.2 s digital silence (−54 dBFS) |
| 16.95 | 508 | — | `L-SCREEN` | P-03 | Static, 33 f | — | **T-02** |
| 18.05 | 541 | "Fakes a throw left, hands off right, running back." | `L-SCREEN` | P-08 | The game resumes | caption (**fix**) | T-02 off |
| 19.49 | 584 | (TV faint: "He's blocked well and tries…") | `L-CU` | P-12 | Fan 1 frontal CU, eye line y 743 (**fix: whole head, ears in**) | — | T-07; room tone −31 dBFS; sound bridge from the TV |
| 20.75 | 622 | — | `L-CU` | P-12 | Fan 3 CU, eye line y 851 | — | T-07 (38 f) |
| 22.02 | 660 | Fan 2: "Wow, that looked good." (23.62) | `L-CU` | P-12 | Fan 2 CU, eye line y 837 (**fix: whole head, ears in**); small mouth and eye replacements f695–703 | caption (**fix**) | T-07 (57 f) |
| 23.92 | 717 | "Let's order some more…" (25.55–27.2) | `L-WIDE` | — | Back to the sofa wide; a head turn f771, f826–830 | caption (**fix**) | T-01 |
| 28.29 | 847 | — | — | — | Hard stop 1.1 s after the line, on the held wide | — | **T-10** (E-2) |

**Notes (what the plan changes from the reference):**
- Frame 0 had no face and the interruption came at 5.44 s. The plan for a plugin reel opens `L-MCU` on the speaker with the thing in hand and reaches the static by ≤ 3 s (§3.8 `ADAPT-BREAK`).
- Every spoken word gets `CAP-DIALOGUE` at 72–80 px (under the chin on face beats); the supers are ≥ 88 px cap (one line) or ≥ 76 px (two lines) on a ≥ 860 px screen; the reaction CUs keep the whole head; the final mix peaks at ≤ −1.0 dBTP.

### 14.1a Adaptation map: a 32 s `ADAPT-BREAK` talking-head reel (structure only; every word comes from the user's script)
| t (s) | Layout | Face | Beat | Text | Sound |
|---|---|---|---|---|---|
| 0.00 | `L-MCU` | hair top 470, eyes 790, chin 1130 (tripod) | Speaker mid-line with [the product] in hand; lifts it to the lens f1–8, holds 12 f | caption by f6 under the chin (the "show" line) | `ROOM`, voice; the use's own sound (or one sweetener) |
| 1.60 | `L-MCU` | same | Pose change (head turn, 4 f), hold | caption | — |
| 2.50 | `L-SCREEN` | — | The TV in the room powers on (T-11), the show content on it (the speaker's own B-roll of the ordinary thing) | caption under the TV | `click-click` + `ui-opening`; the B-roll's own sound, small |
| 2.80 | `L-SCREEN` | — | Static 33 f | — | `glitch-2025-01-08-02-40-44-utc-glitch-06` (1.10 s) + `abstract-hit-sub-bass-07` (felt) |
| 3.90 | `L-TV-SELF` | the speaker inside the screen, face ≈ 330 px wide | "We interrupt this video to bring you [the product]" said by the speaker on their own TV (EV-3) | caption under the TV | the voice +6–8 dB, small-speaker band |
| 5.40 | `L-SCREEN` | — | The ad: sky, [the product] rises from the bottom edge in 3 steps (P-05), lands with clay weight (EV-1) | caption + super 1 (≈ 1.25 s before benefit 1 is said) | `selection-click` ×3, `hard-sitting-on-bed-…` on the land, `0552611` on the super |
| 7.20 | `L-SCREEN` | — | Lump → [product view 2] (P-06), super 2 | caption + super 2 | `suctionboink-lb015101`, `0552621` |
| 8.80 | `L-SCREEN` | — | [screen recording of the product in use] on the TV, super 3 | caption + super 3 | `0552631`, then 0.4 s of no new sound |
| 10.20 | `L-SCREEN` → push | — | Lineup of [variants / views] settles one drawing apart; the camera pushes into the glass (EV-5); [the name] pops (21 f ease-in) on the dead stop; the imperative ([the user's CTA]) | caption + name | `game-pop-up-…-3` on the lineup, `camera-quick-zoom-shoot-ohmlab-…`, `05405-shine-ding` on the name |
| 12.00 | `L-SCREEN` | — | 6 f silence, static 33 f (at the pushed scale), hard cut back to the room's TV, the show resumes 1.2 s | — | static (the same file, second use) |
| 14.30 | `L-CU` | punch to the face limit (e.g. 1.45×), eyes 800 | Silent deadpan (from a silent stretch of the footage), still eyes (EV-6) | — | room tone, −2 dB |
| 15.57 | `L-CU` | 1.2× (a different size), eyes 780 | Second silent beat, 38 f, one blink (the punchline) | — | room tone |
| 16.84 | `L-MCU` | as at f0 | The reaction line ("…ok, I'm getting more") | caption | voice |
| 19–29 | `L-MCU` / `L-WIDE` | each beat whole | 2–3 short lines about why, a pose hold at each, one world change if a wide exists | caption per line | voice |
| 29.5 | `L-MCU` | whole | The in-world CTA line | caption | voice |
| 30.6 | — | — | Hard stop ≤ 1.1 s after the line (E-2) | — | — |
- Face share ≈ 66% (counting `L-TV-SELF`); the ad ≈ 8.1 s (≤ 10.4); something changes inside the ad every ≈ 1–2 s; 2 statics; 1 reaction row of 2; about 16 cues, each file ≤ 2× except `selection-click`.

### 14.2 Reference-reel cheat sheet (what to steal from each)
| Reel | Format | Learn from it | Don't copy |
|---|---|---|---|
| **ec1** "Venice walk" (12 s, 24 fps) | `FMT-VIGNETTE` (a song in the reference; we never use music) | The thing in hand on f0 and used on f1–8; pose-to-pose holds (moves 2–8 f, holds 4–14 f); three worlds with three palettes; a linear push to a dead hold; the peek ending; a stare + hard cut that loops | The eye line sinking to 84% under the platform UI; the song (no music: SFX only); the duplicated frame before each cut |
| **ec2** "We interrupt this broadcast" (28 s, 29.97 fps) | `FMT-BREAK`, `ROOM` | The screen in the set as the product's home; 33 f static, picture + hiss on the same frame; blinking red supers that complement the VO; the lump → product morph; hand delivery; lineup + ease-in name pop; ads-are-louder; the silent reaction row; the in-world CTA line | The face-less, slow open (interrupt at 5.44 s); no subtitles; 41–59 px supers; ears cropped in the CUs; +0.1 dBTP |
| **ec3** "Frog & Bee" (32 s, 24 fps) | `FMT-QUEST` (a song in the reference; we never use music) | The dare as line one; captions as acting (CAPS stress, "nervou-", "F**k"); the bloom trip; the quest legs, each a new camera grammar; the foreground wipe; the two-speed iris to a silent card; the product hue climbing | The 80 px hero on frame 0 and the 1.17 s first caption; cream captions on yellow; the head cut by the left edge in shot 2; +0.3 dBTP; the song (no music: SFX only) |

---

## §15 Look at your frames
Not a checklist; the questions the best editor asks while scrubbing:
- **Frame 0, sound off:** is the whole face there with the real thing already moving, and the caption on by f6, just under the chin? Do I want to know what "this" is?
- **The frame:** is their video full screen or in a designed box (rounded, rimmed, on the style's ground), never a sharp rectangle over its own blur?
- **The first 3 s:** six changes? The use with its own sound, the TV clicking on, the static by 3.0 s?
- **Every face frame:** whole head, hair to chin, in rich colour (never pale)? A close selfie full screen (or in a box on the drawn set), never shrunk over its own blur, never a pillar? Has the speaker sat in one framing too long?
- **The TV:** is it big enough that the product reads at thumbnail size (≥ 480 px) and the supers at arm's length? Does it power on, does the glass live? If the speaker is on it, is their face whole and ≥ 300 px?
- **Every arrival:** does it dip, land with weight, squash, settle and go dead still? Does it make its own small sound?
- **The ad:** does something change every 1–2 s? Do the supers climb the ladder and blink on 6 / off 6? Is there a breath before the name, and does the push stop dead on it?
- **The joke:** are the deadpan beats full length, silent, still? Did I explain anything that should have been a hold?
- **Every frame:** one hero; nothing small I'm meant to read; no frame mostly empty for more than ~0.7 s except the deadpan and the card?
- **Sound:** the room, the static pair, clay thumps, the ladder, the sparkle, the lens on the iris; no file overused, nothing on ordinary cuts, nothing on the deadpan, no music?
- **Vibe:** warm, dry, charming, exact. Anything slick, loud or meme-y comes out (the one meme hit on a mock beat excepted: is it in the gap, once, and does it land?).

---

## §16 Build + render

- **Pipeline:** the edit skill's process (REFERENCE.md): plan → stills → storyboard → render, at **30 fps**. Draw every element with `frame(t)`; convert reference frame counts with t = f / fps (§10.1 already gives @30 values).
- **Fonts (bundled in `assets/fonts`):** `Poppins-SemiBold.ttf` (captions; `Poppins-Medium.ttf` fallback), `Anton-Regular.ttf` (supers), `FrauncesSoft-VF.ttf` at wght 700–800 (the name, on an arc). Nothing else.
- **Components:**

| Component | Role |
|---|---|
| `Footage` | `L-MCU` / `L-WIDE` / `L-CU`: face-limited scale, full screen or the box on the drawn set for a tight selfie (§12.2), linear push + dead stop, freeze-holds |
| `TvInsert` | `L-SCREEN` / `L-TV-SELF`: the drawn set surround (never the creator's blurred footage), the CRT body, the screen rect (house 100–980 × 560–1160; reference 203–863 × 702–1150), the glass tint, highlight and shimmer, the power-on line (EV-2); content slots (incl. the speaker's footage) |
| `Static` | Per-frame grey noise in the screen rect, 33 f, with its sound cue on the same frames |
| `AdContent` | Sky plate; P-05 delivery (stepped), P-06 morph (SVG blob + turbulence, 14 f on ones), P-07 lineup + name pop (ease-in 21 f) |
| `SuperBlink` | Anton red caps, on 6 / off 6, positioned 64–72 px under the screen top |
| `Trip` | Bloom build (8 f), yellow void + matte or tinted frame, honeycomb on twos, whiteout (8 f), orb (30 f) |
| `Iris` | Feathered circle mask, three phases (38 / 25 / 13 f), centred on the face; the name card behind |
| `NameArch` | Fraunces Soft on an arc, white (+ outline and shadow in the ad) |
| `CapDialogue` | Poppins 600 cream captions, 72–80 px, just under the chin on face beats (from `FACE(n)`), under the TV on screen beats, hard on/off from `words.json`, bright-frame shadow switch |
| `ClayLand`, `LineBoil`, `PushGlass`, `HueClimb` | EV-1, EV-7, EV-5, EV-8 |

- **Helpful ffmpeg building blocks** *(for prototyping stills; the engine draws the final)*:
  - Static noise for a 661×448 rect: `color=c=0x585458:s=661x448:r=30,noise=alls=100:allf=t+u,format=gray`.
  - Stepped insert at 12 drawings/s inside 30 fps: `fps=12,fps=30`.
  - The tight-face box on the drawn set (no blurred fill): cover-crop the footage to the box (`scale=-2:H_box,crop=W_box:H_box:x_face:0`), round its corners and lay it on the set plate with a soft shadow.
  - Bloom: `split[a][b];[b]gblur=sigma=30,eq=brightness=0.15[g];[a][g]blend=all_mode=screen`.
- **Final:** H.264 CRF ≤ 16, yuv420p, BT.709, AAC 320k, faststart; check the frame count, loudness (−14 LUFS, ≤ −1.0 dBTP) and a contact sheet decoded from the final file.
- **Deliverables in `edit/`:** `final.mp4`, `words.json`, the edit brief (beat sheet + transition map + hooks + speaker map + sound ledger), `sounds.json`, `assets/`, and a short summary of specs and known limitations.

---

## Appendix A. Evidence map (where each rule comes from)
| Rule / element | Reels |
|---|---|
| The thing in hand on f0, used on f1–8 | ec1 (f0–8), ec3 (the cup in the two-shot, sipped at ≈ 4 s) |
| Pose to pose: moves 2–8 f, holds 4–14 f | ec1 (49% holds), ec2 (75% identical frames) |
| Characters on twos, camera on ones | ec1 (shot C), ec3 (shots 1, 2, 5, 7; the follow move on twos) |
| Each shot a new world and palette | ec1 (3/3 shots), ec3 (7/7 shots) |
| Shallow focus, warm tungsten grade, soft bloom | ec1, ec2, ec3 (bloom strongest in ec3) |
| Linear push-in to a dead hold | ec1 (77 f, ≈ 1.5×, hold 38 f), ec3 (shots 1, 7) |
| Screen in the set (51% of the runtime); static 33 f ×2 with picture + hiss together; blinking red supers ×3 (on 6 / off 6, ≈ 1.25 s lead); lump → product ×2; hand delivery ×2; lineup + ease-in name pop; ads louder (−9…−17 vs −20…−28 dBFS); silent reaction row 38 / 38 / 57 f; in-world CTA, hard stop 1.1 s later | ec2 |
| Subtitles as dialogue (14, hard on/off, cap top y 1421, CAPS / ellipses / dash / asterisks, ending on cut frames f175, f293, f541); the dare; the trip; the foreground wipe (f476–502); the two-speed iris to a silent card | ec3 |
| Product hue climbs; the most saturated hue saved for last | ec3; ec1 |
| The peek ending, stare + hard cut | ec1 |
| One song, no SFX, no foley in the references (we never use music; this edition scores foley) | ec1, ec3 |
| Diegetic only (`ROOM`) | ec2 |
| **Fixes:** frame 0 face + thing (M1); the whole head (M2); captions for every line (M6); readable sizes (M7, §5.2, §5.3); caption contrast on bright frames; true peak ≤ −1.0 dBTP (M14); no songs or music (N6); static by ≤ 3 s; eye line ≤ 1440 | ec2 and ec3 openings; ec1 wide, ec2 CUs, ec3 shot 2; ec2 dialogue; ec2 supers, ec3 captions; ec3 trip; ec2, ec3 peaks; ec1, ec3 songs; ec2 open; ec1 wide |
| **ADAPTATION (§3.8):** one person at their own camera | Not observed as a whole; built from the devices above plus this edition's elevations |
| Sizes as floors (captions 72–80 px, supers ≥ 88 px cap, the ≥ 860 px TV, the product ≥ 480 px, the name ≥ 760 px); captions under the chin, every word; never pale; the speaker moves (incl. on the TV); clay weight, the living TV, the benefit ladder, the push into the glass, deadpan timing, line boil, the hue climb, the film-gate iris; the handmade foley score with the ledger rule, no music; the whole face always; no imposed checks | **The creator's directions, 11–12 Oct 2026** |

---

## Starter prompt (paste with a new video)

```text
You are the editor, stop-motion animator and creative director for this Reel.
Read this playbook fully, then follow §1 exactly (30 fps).
Footage: <file(s)>. Script (ground truth for spelling): <script.md>.
The product / tool / idea: <what it is, and what using it looks like on camera>.
True benefits I can claim: <2–4, with sources>. My name / handle for the name card: <text>.
Sound: ROOM + the handmade foley score, SFX only (no music).
Show me frame 0 and the style stills (§13.3) as you go.
```
