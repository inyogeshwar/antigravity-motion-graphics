# Cinematic Kinetic Explainer Playbook (v2, "Words That Weigh, Elevated" edition, for Claude Opus 5.5)

> **In this plugin:** this file is the whole playbook: every measured value and recipe from the 5 reference reels is in it, and there is no other playbook file to open. Frame counts are measured at the references' **25 fps** (al3 is 24 fps; its values are converted): convert with t = f / 25 when you draw (`frame(t)` runs at the render fps). The per-reel notes it cites (`al1…al5`) are not shipped. Sounds are picked by id from SOUNDS.md; commands are in the edit skill's REFERENCE.md. Positions are on a 1080×1920 frame (the sources are 720×1280, scaled ×1.5). The page gives you `FACE(n)` and `FACE0` (with `head_top` and `chin`) for every speaker frame.

**Purpose:** you (Claude) receive a talking-head video of one creator plus its script. Use this document to **ideate and build** every format choice, caption, graphic, transition and sound, then edit the Reel so it looks and sounds like a polished, cinematic short-form explainer in which **every word is on screen, sized by how much it matters**, a new picture arrives about every 1.2–1.6 s, and the edit itself is so well made that the viewer trusts the advice before the advice lands.

**What v2 is:** a frame-by-frame analysis of 5 finished reels by Antonio (@ant.lon), a professional short-form video editor who teaches other editors (al1 "Two editors, six months": a parable; al2 "My 7-step process for elite talking-head videos"; al3 "10/10 video editing habits you need to lock in"; al4 "10 ways to earn money as a video editor"; al5 "Editing better videos 101: it comes down to 3 things"), covering cuts, layout and colour measurements, caption timing, motion recipes and audio, with the hook sheet and two or more body sheets of every reel checked for where the face sits in each layout. Then **elevated ten times** by the best video editor and creative director in the world: every key word lands with physical weight, the type behind the head gets real depth, a shape carries the eye across every section turn, counts land on their word with a bloom, the speaker moves between full frame, slide-down, spotlight card and a new data dock, the colour stays rich, and a full cinematic sound score runs on every picture. All measured layouts, recipes and rules are kept; each one is **observed** (the most consistent value chosen) or a **fix** (a reel got it wrong; marked **(fix)**). Where a reference reel and a direction disagree, **the directions win**.

**Measured sizes are floors, not targets.** The references set filler captions at 40–55 px, labels at 20–37 px and panel UI at 15–25 px; on a phone that reads as texture, not words. Here:
- **Captions:** S1 **80–92 px** (Medium 500, with a soft shadow; the 12 Oct test drew filler words at ≈ 45 px and they vanished on a phone), just under the chin; S2 140–150 px; S3 150–200 px; a word alone on a card **≥ 160 px glyph**. Chunk shorter, never shrink; an S2/S3 word wider than 960 px is scaled to fit, never wrapped.
- **Labels, counters and pills ≥ 48 px; UI that matters ≥ 44 px** (zoom the recording to it, or add an S2 label).
- **The hero of every beat is big:** the count-up ring **≥ 600 px wide**, a picture or spotlight card **≥ 860 px wide**, a panel zoomed so its subject fills it, the CTA keyword at 290–316 px glyph.
- **No frame is mostly empty for more than ~0.7 s:** a word card is one big word that moves (scale, underline, selection box), never a small word on a flat colour.
- **The selfie stays big:** a tight selfie stays **full screen** (move the text, not the video; hair may touch the top edge, eyes to chin always in); a face card (spotlight, dock) is **≥ 940 px wide**, filled by the footage, never a narrow pillar, never over its own blur.
- **Full screen or a box, never any footage or picture over its own blur** (Studio Standard): the creator's video either fills the frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground or scene) that it fills completely (cover-crop centred on the face). The same goes for every recording, screenshot, photo, diagram and clip: it fills the frame (cover-crop to the part that matters, or a push-in) or sits in a designed box on the style's own ground (its colour, gradient, texture, grid or drawn set). Never a sharp box over a blurred or darkened copy of itself, never a band padded with blurred bars: that hard rectangle inside the frame looks cheap. A tight selfie stays full screen: move the text, not the video; hair may touch the top edge, eyes to chin always in; when the whole head must show, use a box layout on the style's ground. A matte cut-out over a plate and a whole-frame blur transition are fine.
- **Full screen or a box, never their own blur** (Studio Standard): the creator's video either fills the frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground or scene) that it fills completely (cover-crop centred on the face). Never shrink it over a blurred or darkened copy of itself, never pad a band or box with blurred side bars, never set a card on their own blurred frame: that hard rectangle inside the frame looks cheap. A tight selfie stays full screen: move the text, not the video; hair may touch the top edge, eyes to chin always in; when the whole head must show, use a box layout on the style's ground. A matte cut-out over a plate and a whole-frame blur transition are fine.

### The feel (read this twice)
This is **an editor's showreel disguised as a lesson.** He talks fast and smiles; every word he says hits the screen the instant he says it, small when it's filler and huge when it matters, a serif italic when it's a feeling or a name. Titles and numbers sit behind his head as if they were lit on the wall of the set. When he names a thing, the frame becomes that thing: a word card, his own work flipping past, a ring counting up to the exact word "perform." A deep boom tells you a section just turned; a whoosh tells you a step began. It feels **expensive, fast and certain**: cinematic, never templated; dense, never noisy; colour that looks graded by a colourist, type that looks set by a designer. The viewer should finish thinking *"if his reels look like this, his advice must work."* If it looks like a caption template on a talking head, it's wrong; if it looks like a hype montage, it's wrong too.

**Who the reference creator is:** a polished, fast-talking English-speaking video editor at a dark desk of monitors (glasses, black tee), teaching editors to edit, build a brand and earn. **3.5–4.3 words/s**, every breath cut, smiling, counting on his fingers. The edit itself is the proof: if the reel looks expensive, the advice must be good.

**Audience (ICP):** aspiring and working short-form creators and editors, ~18–35, who want videos that perform and income from the skill. Visual, impatient, fluent in reel grammar; they reward **taste** (type, grade, sound) and punish anything templated or slow.

**Style lineage:** a cinematic kinetic-type explainer, built from four layers:
1. **Voice layer:** one dense, dry, loud voice with zero dead air, cut word-tight (longest gap 0.40–0.46 s in the cinematic reels).
2. **Word layer:** **one word on screen at a time, every word**, sized and styled by importance: tiny white sans for filler, huge sans for key words, a condensed serif italic for emotional or naming words. Key titles and the call-to-action keyword sit **in the band above the head and tuck behind it** (matte).
3. **Picture layer:** a new picture every ~1.2–1.6 s: self-shot cinematic plates, solid colour word cards, his own UI and work, count-up stats, literal pictures of metaphors (a red "ceiling" line, a painting), glow graphics on the wall.
4. **Score layer:** SFX only: a low boom on structure cuts, whooshes on chapter changes, tick runs under count-ups, a deep boom under the final keyword (the references ran a bed under the voice; we never do). This edition scores every picture event (§11).
- **This style is not one layout.** Two edit styles: the **cinematic** reels (al1, al2, al5) carry the core style in three variants (parable, steps, chapters); the **list-card** template (al3, al4) is a lighter second format (§3.0).
- **The speaker moves.** In the cinematic formats he is the full-frame anchor; the edit **cuts away** to plates, word cards and spotlight cards while the idea is shown and **comes back full frame** for claims, turns and the ending; under a screen recording he **slides down** at the same size and comes back up (§3.0a). This edition adds **the dock**: for data he shrinks into a wide card under it and grows back (§3.8a). The list format holds one framing and changes the picture above his head every 2–3 s.
- **Much of his core format is voice-over over his own cinematic B-roll** (al1 ≈ 64% faceless, al5 ≈ 50%). Users have one talking-head take, so §3.9 (**ADAPTATION**) applies the grammar to one person at their own camera with devices observed in these reels.

### Creator directives
| # | Directive | Where it lives |
|---|---|---|
| D1 | **Ten times better, same soul.** Keep the weighted one-word captions, the text behind the head, the blue/red meaning, the cards, rings and rituals; raise the craft: animation principles on every word and graphic, real depth behind the head, a shape that carries every section turn, one hero per frame. Never templated, never a meme | The feel, §8.0, §8.9 |
| D2 | **The speaker moves:** full frame at frame 0 and for claims, turns and the CTA; cut-away, slide-down, spotlight card or the data dock while something is shown; back full frame. No layout unchanged for more than ~6–9 s; frame 0 is never empty | §3.0a, §3.8a |
| D3 | **Seamless motion, high retention:** a new picture every ~1.2–1.6 s, cut on the word that names it, and inside every beat something keeps moving (the slow push, the type drifting behind the head, the ring counting, the card settling) | §8.0, §9, §10 |
| D4 | **Sound is scored to studio standards:** whooshes on steps, booms on structure cuts, ticks under counts, pops on badges, a click on every demo, the deep keyword boom; about one cue every 1.0–1.5 s on shown beats. **No SFX file more than 2× in a reel** (the one list cue excepted). **No music bed, ever** | §11 |
| D5 | **The whole face is always visible:** hair to chin at every zoom, punch, card, panel and dock; a tight selfie stays full screen or fills a designed card ≥ 940 px wide, never a pillar, never over its own blur | §2, §12.3 |
| D6 | **Captions are seen:** every spoken word, one at a time, sized by importance, **just under the chin** on full frame; nothing a viewer must read under 48 px (S1 ≥ 80 px) | §5 |
| D7 | **Never pale, and no imposed checks.** Rich cinematic colour always; B&W only as the named pain beat (≤ 2 s). This file gives taste, recipes and reasons; you decide like the best editor and creative director in the world. Only craft never bends | §2, §4.4 |

### The reference reels → this edition, at a glance
| Area | The reference reels | This edition |
|---|---|---|
| The speaker | Full-frame anchor + cut-aways; slide-down under a panel; al1 opens 11 s faceless | The same grammar, the face back by ~4 s, plus **the dock** (EV-8): he shrinks into a wide card under a ring or a result and grows back on the next claim |
| Captions | One word at a time; S1 40–55 px on the chest | The same, **S1 80–92 px just under the chin**; S2/S3 land with weight (EV-1): a 2-frame rise, a 3-frame overshoot, a soft glow on serif words |
| Text behind the head | Flat letters behind a head matte | **Real depth** (EV-2): the band drifts against the speaker's push, the hair casts a soft contact shadow on the letters, titles settle instead of popping |
| Section turns | Hard cut on the word + a whoosh | The same, plus **the shape relay** (EV-4): the outgoing frame's shape becomes the incoming picture (the underline becomes the limit line, the ring's arc becomes the numeral) |
| Count-ups | The ring counts and lands | **A count that lands** (EV-5): speed-ramped, the last 10% over the last word, a bloom on the leading dot, a shine ding on the land |
| Small print | Labels 20–37 px, UI 15–25 px, cards ≈ 500–700 px wide | Labels ≥ 48 px, UI ≥ 44 px, cards ≥ 860 px wide, the ring ≥ 600 px wide |
| Grade | Cinematic; B&W pain beats up to 3.8 s | **Never pale:** rich cinematic colour always; the B&W pain beat ≤ 2 s and colour **blooms back** from the face on the solution (EV-7) |
| Sound | A bed under the voice + 8–20 hits per reel | **No bed.** Scored on every picture event, about one cue every 1.0–1.5 s on shown beats, with the ledger rule (§11) |
| Checks | MUST / NEVER lists, a checkpoint, a QA list | **Craft only** (§2); the house grammar (§2.1); questions to ask your frames (§15) |


### Formats at a glance (the speaker movement in §3.0a applies to every format)
| Area | `FMT-PARABLE` cinematic story (al1) | `FMT-STEPS` numbered tutorial (al2) | `FMT-CHAPTERS` cinematic 3-point explainer (al5) | `FMT-LIST` list-card template (al3, al4) |
|---|---|---|---|---|
| Use when | A comparison or a story with two people/paths ("two people, same 6 months, different results") | A process with 3–8 steps the viewer can copy, especially tool steps | An argument that "comes down to N things" (2–4), each a chapter | A fast list of 6–10 items, tips, habits, ways |
| Speaker | Full-frame anchor 36% of runtime; the rest voice-over over plates, word cards and a montage (**adaptation §3.9**) | Present ≈ 77%: full frame, **slides down** under a top screen-rec panel, **shifts down** under the CTA stack panel | Full-frame anchor ≈ 51%, plus punch-out / push-in / B&W; chapter plates and spotlight cards between (**adaptation §3.9**) | Full frame, one framing, never moves |
| What shows the idea | Colour-coded plates (blue = winner, red = loser), glow logos/notifications on the wall, word cards, count-up ring | Screen recordings in a top panel, self-demonstrating steps (grade wipe, toggle), B-roll bursts | "No.N" chapter plates, literal metaphor graphics, spotlight cards on a blue / off-white canvas | A serif header "N. Item" + one picture card above and behind the head |
| Hook | Split screen of the two characters + "Picture this" | Pull-out open + carousel of own work behind the head + ECU punch | Banner slides in + typewriter + giant ghost "101" behind the head | Title box/banner + typewriter (+ money rain for money topics) |
| Pace | 3.9 w/s, a picture every ~1.6 s (median 1.2) | 3.5 w/s, mean 1.7 s, B-roll bursts 8–14 f | 3.65 w/s, mean 1.4 s, montages 0.3–0.5 s | 3.8–4.3 w/s, a new item every 2.1–3.0 s, almost no visible cuts |
| Sound | Booms on structure cuts, tick runs | Whoosh/impact on every step | Risers into chapters, pop run on badges | A whoosh/pop on every item, a boom on the CTA keyword |
| Ending | Huge quoted keyword behind the head, hard stop | Asset parade in a top panel, then the keyword | Keyword with gradient behind the head, then a one-line P.S. on a push-in | CTA as the last list item, keyword huge, boom |

### Quick index
| § | What |
|---|---|
| §1–§2 | Procedure; craft that never bends + the house grammar (M/N) |
| §3 | Formats, layouts `L-…`, the speaker's movement, the data dock (§3.8a), the one-person ADAPTATION (§3.9), safe zones |
| §4 | Colour tokens, the meaning of colour, the footage look (never pale) |
| §5 | Type tokens and the caption tiers `S1…S7` |
| §6 | Hook system (the 10× hook, formulas, visuals, timing, frame 0, endings / CTA) |
| §7 | Structure devices `SD-…`, the item ritual, open loops |
| §8 | Graphics: the 10× layer, families `G-…`, patterns `P-…`, lookup, density, assets, mistakes, elevated devices `EV-…` |
| §9 | Transition system `T-01…T-19`: recipes, grammar, map, budget |
| §10 | Motion tokens, camera, layer order, finishing |
| §11 | Sound: the palette (ids from SOUNDS.md), the SFX ledger, silence, the mix |
| §12 | Footage handling, the face rule in practice, matte |
| §13 | Output contract: beat sheet, hooks, what to show the creator |
| §14 | Worked example (al2; al1 one-person) + cheat sheet |
| §15–16 | Look at your frames; build + render |
| App. A | Evidence map |

---

## §1 Procedure (follow in order)

1. **Inventory.** Probe the footage; identify the setup (§12.1). Find the tightest frame and check it against the face rule (§12.3) before planning any zoom.
2. **Transcribe** with word timestamps. Captions are the **spoken words**, one at a time; the script is the ground truth for spelling.
3. **Cut it tight:** every breath and pause out (references: no gap above 0.46 s, 4–8 gaps above 0.25 s per minute), in the micro-gap before a word (M3).
4. **Choose the format** (§3.0) from the shape of the script and write one line on why:
   - a comparison or story with two paths → `FMT-PARABLE`;
   - a copyable process with steps → `FMT-STEPS`;
   - "it comes down to N things" → `FMT-CHAPTERS`;
   - a fast list of 6–10 items → `FMT-LIST`.
5. **Plan the speaker's movement** (§3.0a): mark every beat `full`, `slid` (under a top panel), `stack` (under the CTA panel), `dock` (shrunk into the wide card under the data, §3.8a), `card` (own clip in a spotlight card, adaptation) or `off` (plate, word card, montage). Full frame at frame 0 and for claims, turns and the ending; no `off` stretch over ~6 s; no `full` stretch over ~9 s without a punch, a graphic behind the head or a size change.
6. **Weigh every word** (§5.2): `S1` filler, `S2` key, `S3` emotional/naming; about 1 key word every 3–5 words.
7. **Classify every phrase** (§8.4): pattern, trigger word, onset. **Every listed item gets its own picture** ("edit / build / earn" = three shots, al1).
8. **3 hook variants** (§6): formula, frame 0 (sharp, face whole, caption on), the first 3 s of events, the first 6 words with tiers. Recommend one.
9. **Beat sheet** (§13.1): one beat per picture change, with layout, speaker state, pattern, trigger, tiers, transition, sound ids.
10. **Transitions** (§9.3): hard cuts on onsets; designed ones only at chapter/step changes; check the budget (§9.4).
11. **The 10× pass and the score** (§8.0, §8.9, §11): for every beat, its hero, how it anticipates, lands and settles, what keeps moving inside it, where the depth is; then score every picture event (booms on structure cuts, whooshes on chapter/step/item changes, ticks under count-ups, clicks on demos, the keyword boom) and log the sound ledger. Real ids only. **Attack the plan:** where does one layout sit unchanged for more than ~6–9 s? Where is a frame mostly empty? Where is something small meant to be read? Where is the colour flat or pale? Which turn could carry a shape relay, which number the dock? Fix it in the plan.
12. **Assets** (§8.6): own proof, recordings, fetched pictures; logos only for names the script says; no third-party offers.
13. **Show the creator** the plan and stills (§13.3).
14. **Build,** look at your frames (§15): frame 0, every face crop, every caption size, every landing; score, render (§16).

---

## §2 Craft that never bends
- **The whole face is always visible:** hair to chin in every layout, punch, push, card, panel, dock and close-up; a tight selfie stays full screen (move the text, not the video) or fills a designed card ≥ 940 px wide; never shrunk over its own blurred frame. Captions may cross the face.
- **Text never sits on text,** and nothing but captions crosses the face.
- **Sound in sync:** every SFX on the frame its picture lands, never on a consonant (±2 f); the voice is always the loudest thing.
- **True and exact:** every on-screen word spelled as the script; stats real or clearly illustrative; proof is the user's own.
- **Readable at phone size:** S1 ≥ 80 px, labels ≥ 48 px, UI that matters ≥ 44 px, cards ≥ 860 px wide, the ring ≥ 600 px wide.
- **Never pale:** rich cinematic colour on the footage; B&W only as the ≤ 2 s pain beat.
- **Loudness:** −14 LUFS integrated, true peak ≤ −1.0 dBTP; a hard stop 0.30–0.35 s after the last word.

Everything else is direction. You decide; write your reasons into the plan.

### 2.1 The house grammar (what makes it this style)
Not checks: this is what the five reference reels do every time, and why it works. Break one only with a reason in the plan. (The IDs are kept because other sections cite them.)
- M1. **One format per reel** (§3.0) with a written reason, **and the speaker moves** (§3.0a): full frame at frame 0, cut-aways / slide-downs while things are shown, full frame for claims, turns and the ending. Never one framing for a whole cinematic reel.
- M2. **Every spoken word is a caption, one at a time,** hard-replaced on its onset, sized by importance (S1/S2/S3); a 2–3-word key phrase may build by appending. Never a sentence block (5/5 reels).
- M3. **Pauses and breaths are cut:** 3.5–4.3 words/s; no gap > 0.45 s **(fix: al3 left 0.69 s and 0.74 s)**.
- M4. **The picture changes on the word that names it** (±2 f): a logo swaps on the brand's name (al4), a count-up lands on the payoff word (al1 "perform."). Each listed item gets its own shot.
- M5. **The whole face is always visible, hair to chin,** at every zoom, punch-in, push-in, crop, card, panel, split box and B-roll close-up of the speaker. How far a zoom goes is decided by the face, not the frame. When footage is tighter than the face allows (a handheld selfie close-up where hair or chin leave the frame), **keep it full screen and move the text (hair may touch the top edge, eyes to chin always in), or put it in a designed card ≥ 940 px wide that the footage fills, cover-cropped on the face; never shrink it over a blurred copy of itself** (Studio Standard; §12.3) **(fix: al4's opening crop and the al1/al5 profile close-ups cut the head)**. Captions may cross the face.
- M6. **Frame 0 is never empty or blurred.** The speaker (or the real thing being talked about) is sharp and readable at f0 with the first caption on **(fix: al1 opened fully defocused, al4 on a motion-blurred crop, al3 with an arm across the lens)**. A hook title or banner is already on screen or entering at f0.
- M7. **Text behind the head:** titles, numerals, stats and the keyword live in the band **above** the head (y ≈ 90–620) and tuck **behind** the hair (matte); never over the eyes, nose or mouth. Only captions cross the face.
- M8. **Readable on a phone:** S1 ≥ 80 px, labels/numbers ≥ 48 px, UI text that matters ≥ 44 px or a big label **(fix: S1 40 px in four reels, labels 20–37 px, panel UI 15–25 px)** (§5).
- M9. **One job per hue** (§4.3): blue = house accent / winner / reveal; red = loser, failure, limit; B&W = pain (a ≤ 2 s beat).
- M10. **Chapters, steps and items are marked identically every time** (same marker, slot, entrance).
- M11. **The CTA is the user's own,** in the creator's device: a huge quoted keyword behind the head, colour-cycle entrance, deep boom, said and shown together. Keyword, offer and destination come from the user's brief **(fix: never the reference creator's keyword or offer)**.
- M12. **Audio:** −14 LUFS integrated, **true peak ≤ −1.0 dBTP** **(fix: all five reels peaked between −0.8 and +1.5 dBTP; al2 clipped at +1.5)**.
- M13. **End clean:** a hard stop 0.30–0.35 s after the last word (5/5 reels). No end card, no black tail.
- M14. **Spelling, numbers and language:** every on-screen word is spelled as the script; stats are real or clearly illustrative; borrowed screenshots are in the reel's language **(fix: al5 showed German UI "Aufrufe" in an English reel)**.
- M15. **Never pale** (the creator's direction, 12 Oct 2026): the footage keeps its rich cinematic colour, warm skin and deep blacks; never desaturate, fade or lift the blacks as a look. B&W is a named beat only: the pain switch (≤ 2 s, P-26) and the flat-to-graded demo (flat ≤ 0.5 s before its wipe, P-17).
- M16. **Measured sizes are floors** (§5.2, §5.6): the hero of every beat is big (a single card word ≥ 160 px glyph, cards ≥ 860 px wide, the ring ≥ 600 px wide), and no frame is mostly empty for more than ~0.7 s.
- M17. **Something moves inside every beat:** a slow push (+2–4% over a held face beat), the type behind the head drifting, a count running, a card settling. A picture changes every ~1.2–1.6 s; nothing on screen is still for more than ~2 s.

**Never in this style:**
- N1. A dissolve, fade-through-black or cross-fade on the talking head. Hard cuts and punches only; designed transitions live on plates, cards and panels (§9).
- N2. A graphic, card, panel or title over the speaker's face. The face is either full frame with graphics above/behind the head, or the speaker is off screen.
- N3. Shrinking the speaker into a small picture-in-picture bubble over other footage. When something needs room he slides down at the same scale (al2), docks into the wide card under the data (§3.8a) or the edit cuts away; the only boxed speakers are the spotlight card (§3.9) and the dock, both wide (≥ 940 px) with the whole head.
- N4. Two text styles fighting: never S2 and S3 on screen at once except a deliberate 2-word build ("detailed breakdown"); never a caption over a header or title (text on text).
- N5. More than one caption line of filler; karaoke colouring; captions in boxes. The **only** caption boxes are the 1-frame blue-box reveal (S5) and the off-white card words.
- N6. Copyrighted film clips, other creators' thumbnails or profiles, or fake comments/notifications presented as real. A wall of tutorial thumbnails (al1) becomes the user's own work or generic blurred tiles **(fix)**.
- N7. Third-party offers or plugs: no marketplace, app, playlist or community promotion that the user's script doesn't make. Logos appear only when the script names that brand.
- N8. A pause > 0.45 s, a breath, a stumble or a repeated take left in.
- N9. Comedic sound sets (boings, crowd reactions, voice clips). The score is cinematic: booms, whooshes, risers, ticks, soft pops.
- N10. Unreadable small print as content: "Views" labels, handle pills, kicker lettering, UI panels at phone size (M8).
- N11. A frame 0 that is black, defocused, motion-blurred, covered by a hand, or a near-empty card (M6).
- N12. Cutting the hair or chin with the frame edge, a split seam, a card edge, a panel edge or a zoom (M5).
- N13. Music, ever: no bed, drone, pad or loop under the voice (SFX only, §11).
- N14. A pale, faded or desaturated look on the footage outside the named B&W beats (M15).

---

## §3 Formats, layouts, the speaker's movement, safe zones

### 3.0 Choosing the format
| The script… | Format | Why |
|---|---|---|
| …contrasts two people, paths or outcomes over time ("two editors, six months") | `FMT-PARABLE` | The colour-coded characters (blue/red) carry the contrast without words |
| …teaches a process the viewer can copy, step by step, with tools or settings | `FMT-STEPS` | The step marker counts; each step demonstrates itself in a top panel |
| …argues that success "comes down to N things" (2–4) | `FMT-CHAPTERS` | Chapter plates reset attention every ~12 s; each chapter gets its literal picture |
| …is a quick list of 6–10 tips, habits or ways | `FMT-LIST` | One framing, one picture card per item, the header is a running table of contents |
| …is an opinion with no list | `FMT-PARABLE` (two sides) or `FMT-CHAPTERS` with N = 2 | The style always shows the idea; never a bare talking head |

### 3.0a The speaker's movement (every reel)
The format decides what shows the idea; **this decides where the speaker is, beat by beat.** Measured maps:
- **al1:** off 0–13.9 (split, plates, cards) → **full** 13.9 ("Here's why.", punched in) → off → **full** at 20.5, 29.5, 37.1 ("No.2" behind the head), 41.6–48.5 (ring, profile card behind the head) → off 48.5–57.5 → **full** 57.5–66.7 (CTA). Full stretches 0.9–9.2 s; off stretches 3–11 s.
- **al2:** **full** 0–16.1 → **slid** 16.1–22.6 → **full** 22.6–36.8 → **slid** 36.8–40.9 → **full** 40.9–43.5 → **stack** 43.5–55.0.
- **al5:** **full** 0–4.8 → off 4.8–11.5 → **full** 11.5–15.7 → off → **full** at 24.5, 31.9 (warm close), 40.2–44.0 (B&W), 44.0–50.7 → off spotlight 50.7–60.7 → **full** 60.7–75.7 (punch-out 66.7, push-in 70.2).
- **al3/al4:** **full** all reel, one framing; the picture above the head changes every 2.1–3.0 s.

House rules from these maps:
| Beat | Speaker | Why |
|---|---|---|
| **Hook (f0 → ~3 s)** | **Full frame** with the hook title/visual already on (al2, al5, al3, al4). The parable's split opening is the only faceless hook; in the adaptation the speaker is in it (§3.9) | A face and a word stop the thumb |
| **Open loop / "Here's why." / claims** | **Full**, often punched in +15% on the loop word | He talks to you |
| **Idea being shown** (an item, a tool, a stat, a metaphor) | `off` (plate / card / montage) **or** `slid` under a top panel **or** full with the graphic in the band above and behind the head | The idea needs the room; the head never gets covered |
| **Chapter / step change** | Chapter plate or step marker, then back to **full** within 1.5–3 s | The ritual resets attention |
| **Data, a result, a count while he keeps talking** (this edition) | **`dock`** (§3.8a, EV-8): he shrinks into the wide card in the lower half while the ring, number or result owns the top; back to full on the next claim | The data gets the room; he never leaves |
| **Pain beat** | **Full in B&W** (≤ 2 s here; al5 held 40.2–44.0) or a B&W plate with red words (al1); colour blooms back on the solution (EV-7) | Grade carries the emotion |
| **CTA** | **Full**, keyword behind the head; or **stack** (shifted down under a top panel) for an asset parade | The ask is personal |
| **P.S. / last line** | **Push-in** ~135%, face whole (al5) | Intimacy at the end |

- **Budget:** in a 45–75 s cinematic reel, 4–7 returns to full frame; each full stretch 1–9 s; each off/slid stretch ≤ 6.5 s (al2's longest slid stretch); 1–3 dock round trips, each docked stretch 1.5–5 s **(fix: al1 has an 11 s faceless run at the start; in this playbook the face is back by ~4 s, §3.9)**.
- **The slide-down:** the speaker keeps the same scale and moves down so the head-top lands ≈ 180 px below the panel's bottom edge (al2: panel 0–870, head-top ≈ 1050, eyes ≈ 1235). It is a translate, not a shrink. In al2 it happens on a hard cut; the stack version arrives with the panel's 4–5 f flash-in (T-08). Default: cut for the screen-rec panel, 4–5 f ease-out move for the CTA stack.
- **Never two moves within 1 s,** and never move the speaker mid-word.

### 3.1 `L-HEAD`: full-frame talking head (all reels; the anchor)
```
┌─────────────────────────┐ 0
│   TITLE / NUMERAL / RING│ ← band above the head y≈90–620: chapter "No.N", stats ring,
│   / PROFILE CARD / KEY  │   profile card, banner, keyword — tucked BEHIND the hair (matte)
│        ╭─────╮          │ ← head-top ≈ 560–600 (al1/al5 575; al2 ≈ 490; al4 607)
│        │ face│          │ ← eye line ≈ 780 (al2 690), face centre x 540
│        ╰─────╯          │ ← chin ≈ 960–1000
│      S2 / S3 KEY WORD   │ ← y≈1050–1260 on the chest (captions may cross the chin)
│        s1 filler        │ ← y≈1100–1210
│   hands, object, mic    │
│                         │ ← y≥1650 nothing (platform UI)
└─────────────────────────┘ 1920
```
- **Framing:** eye level, ~35–50 mm feel, tripod, chest-up, shallow depth of field, monitors behind; face centre x 540.
- **Scales:** base; punch-in +15% (head-top ≈ 485–495, eyes ≈ 685; al1 "Here's why.", "I'll"); ECU ~180% (al2 2.44–3.76, hair 55–80 px from the top, face fills the frame); slow push ≈ +10% over 3.7 s under a count-up, snapping back on the next cut (al1 41.6–45.3); punch-out ~85–90% (al5 CTA); push-in ~135% (al5 P.S., head-top 374).
- **Graphics** occupy the band above the head and tuck behind it (with depth, EV-2); nothing on the face.
- **Captions just under the chin:** the S1/S2 line's top sits ≈ 40–80 px below `FACE(n).chin` (y ≈ 1040–1200 on the house framing), so the eye meets it right after the face.
- **Never still:** a held full-frame beat carries a slow push (+2–4% over ~2 s, snapping back on the next cut), a punch on its key word, or a graphic behind the head.
- **% of runtime:** 36% (al1), 37% + slid/stack 40% (al2), 51% (al5).

### 3.2 `L-SPLIT`: two stacked plates (al1 hook, 0–3.56 s)
```
┌─────────────────────────┐ 0
│  plate A (blue wash)    │ ← top half y 0–950: character A, colour-coded
│  ───── S4 / S5 ─────    │ ← caption slot ON the seam y≈945 (blue-box reveals)
│  plate B (red wash)     │ ← bottom half y 952–1920: character B
└─────────────────────────┘ 1920
```
- Two full-width halves, seam y ≈ 952, no border. Both characters seen whole at small size (in the reference, from behind; faceless).
- Captions sit on the seam: filler on small blue pills, key words with the 1-frame blue-box reveal ("2 editors", "6 months").
- **(fix)** The reference opens fully defocused for 14 f: here both halves are sharp at f0. **Adaptation:** §3.9.

### 3.3 `L-PLATE`: full-frame plate with floating graphics (al1, al5)
- A full-frame cinematic shot (back-of-head desk shot, silhouette, side profile, hands, overhead desk) with a single-colour wall wash.
- Graphics float **on the empty wall above the monitor** (y ≈ 430–720): glow logos, a notification pill, a wall of screenshots (y 0–700) drifting sideways, all with screen blend and bloom.
- Captions centred y ≈ 950–1010, or red failure words above the monitor y ≈ 450–500 on a B&W plate.
- Chapter plates: "No.N" serif ~280 px glyph centred y ≈ 230–520 with an S1 subtitle appended under it.
- **Where the face is:** absent or seen from behind/silhouette (voice-over). Close-ups of the speaker as B-roll keep the whole face (M5). **Adaptation:** §3.9.

### 3.4 `L-CARD`: solid colour word card (al1, al2, al5)
- Full frame `#F1F1F1` off-white, `#09162B` navy or `#213CEF` electric blue. 3–8 words of voice-over, one at a time, centred y ≈ 940–1010.
- Text: on off-white, blue `#2B3BD0` sans + serif italic; on navy/blue, white. Optional 3 px white underline that snaps to each word's width (al1 27.2–29.5).
- Typed variant (al5 8.24–9.8): a word slides in from the left with motion blur, the next pops, a text cursor blinks, a blue selection box grows L→R behind the next words, which fill it white-on-blue ("comes down / to 3 things").
- Lasts 0.7–2.3 s per card; cards come in chains of 2–3 colours (al1 11.7/12.4; 54.6/55.2/56.1).
- **Where the face is:** absent. **(fix)** Card words measured 20–60 px glyph ("Then", "to", "timeline", "and"): here every card word is ≥ 110 px (S2/S3 size, §5).

### 3.5 `L-PANEL`: screen recording on top, speaker slid down (al2)
```
┌─────────────────────────┐ 0
│  screen recording /     │ ← top panel 1080 × ~870 on black, no border
│  dialog / timeline      │   cursor visible; content swaps inside
├─────────────────────────┤ 870 (seam, no line)
│        ( head-top 1050) │ ← speaker at the SAME scale, translated down
│        face, eyes 1235  │
│        s1 caption ≈1260 │
│   step marker / mic     │
└─────────────────────────┘ 1920
```
- The speaker keeps his scale; only the head and upper chest show in the lower box. Head-top ≥ 150 px under the seam; never cut by the seam.
- **(fix)** al2's panel UI text was 15–25 px (texture only): zoom the recording so the part being talked about fills the panel and its key text is ≥ 44 px, or add an S2 label in the panel (§8.3 P-12). The zoom eases toward the clicked control (12 f) so the panel is never a static screenshot.

### 3.6 `L-STACK`: CTA stack panel above a shifted speaker (al2 43.5–55.0)
- A portrait panel ≈ x 243–837, y 22–724 over a dark gradient, **behind** the head; the speaker shifted down (head-top ≈ 805, eyes ≈ 1010) at full size.
- The panel arrives over-exposed white, slides down ~60 px and settles in 4–5 f (T-08); its content cuts every 0.8–1.5 s, one item per spoken asset.
- Captions: S1 at y ≈ 1260 under the face; S2/S3 words inside the panel's lower third ("coincidence", "editors").

### 3.7 `L-SPOT`: spotlight card on a colour canvas (al5 50.7–58.4)
```
┌─────────────────────────┐ 0
│                         │   canvas: electric blue #203BF0 or off-white #F2F2F2
│     ( @handle pill )    │ ← y≈450 (fix: ≥ 40 px text, §5.6)
│   ┌─────────────────┐   │ ← content card ≈ 700×870, x 189–891, y 522–1395
│   │  clip / cover /  │   │   radius ~16, no border; swaps every ~0.7 s
│   │  stat ring       │   │
│   └─────────────────┘   │
│       caption word      │ ← y≈1432–1539, ~105 px glyph, blue on off-white / white on blue
└─────────────────────────┘ 1920
```
- Wide variant: a 1080×720 clip at y 600–1319 on off-white with platform icons.
- **House sizes (floors):** the content card **≥ 860 px wide** (x 110–970, ≈ 860×1000, y ≈ 380–1380), the handle pill above it with text ≥ 48 px, the caption word under it ≥ 110 px glyph (y ≈ 1420–1530); the speaker's own clip in the card **≥ 940 px wide** (x 70–1010). The card breathes (scale 100 → 102% over its hold) and swaps on the word.
- **Where the face is:** in the reference, other people's faces inside the card. **Adaptation:** this is where the **speaker's own clip** goes while the canvas shows the idea (§3.9). A face inside the card keeps eyes to chin; the footage fills the card (cover-crop on the face; a taller card for tight footage), never a blurred copy behind it (§12.3).

### 3.8 `L-LIST`: full-frame head + header + picture card (al3, al4)
```
┌─────────────────────────┐ 0
│   7. Header in serif    │ ← header y≈190–340, serif italic ~90 px glyph, flicker-in
│   ┌─────────────────┐   │ ← picture card ≈ 500×470 (up to 830 wide), x 292–788,
│   │  one picture    │   │   y≈280–775; bottom edge tucked BEHIND the head (matte)
│   └──────╭────╮─────┘   │
│          │face│         │ ← head-top ≈ 607–648, eye line ≈ 765–800
│          ╰────╯         │
│        S1 word          │ ← chest y≈1116–1152
│  notebook / hands       │
└─────────────────────────┘ 1920
```
- One framing for the whole reel (al4: a 7-frame zoom-out open only). Hidden jump cuts under each header/card swap.
- The card is the item's **one picture**: a logo tile, a photo, an illustration, a screenshot, a stat ring.
- **(fix)** al3's S1 was 40 px on a dark shirt and UI cards were unreadable at phone size: S1 here is 80–92 px (S2 key words ≥ 140 px glyph), and a screenshot card is cropped to the one thing named.
- **House sizes:** the picture card **≥ 640 px wide** (up to 860), ≥ 520 px tall, its bottom still tucked behind the hair; the header glyph ≥ 90 px.

### 3.8a `L-DOCK`: the speaker docked under the data (this edition, adaptation)
```
┌─────────────────────────┐ 0
│  DATA: ring / counter / │ ← y≈120–900: the data, ≥ 860 px wide (ring ≥ 600 px)
│  result card / chart    │   the hero; captions never over it
│                         │
│ ╭─────────────────────╮ │ ← dock card x 70–1010, y≈960–1550 (≈ 940×590), radius ≈ 28,
│ │  speaker, whole head│ │   whole head inside, ≥ 40 px above the hair, full colour
│ │   S1 / S2 caption   │ │ ← caption on the card's chest (y ≈ 1440–1530)
│ ╰─────────────────────╯ │
└─────────────────────────┘ 1920
```
- **What it is:** the "shrink to the card for data" move. When a number, a result or a ring is the point **and** he keeps talking, he shrinks from full frame into a wide rounded card in the lower half (T-17, 12 f on an arc, a 4 f settle) while the data rises into the top; on the next claim or turn the card grows back to full frame (T-18, 10 f). Not seen in the five reels; built from al2's slide-down and stack panel (same idea: the speaker gives the top to the thing being shown).
- **The face:** the footage scaled to the card's width, face-centred; the whole head inside with ≥ 40 px above the hair and ≥ 60 px below the chin. If a tight selfie's head doesn't fit, the card grows taller (up to y ≈ 700–1550) before the footage shrinks. Never a narrow crop, never a corner bubble (N3).
- **Look:** a 2 px `blue` rim with a soft 12 px glow, a soft shadow under the card; the background behind the data is the `navy` card colour or the reel's dark canvas with a soft glow (never the creator's own frame blurred), never a flat grey.
- **Captions:** S1/S2 words on the card's chest; S2/S3 key words may land in the data zone only when the data is a word.
- **Budget:** 1–3 round trips per 60 s, each 1.5–5 s.

### 3.9 ADAPTATION: one person talking to their own camera (for `FMT-PARABLE` and `FMT-CHAPTERS`)
> **This section is an adaptation, not an observation.** Antonio fills half of his cinematic reels with voice-over over self-shot cinematic B-roll (back-of-head desk plates in coloured light, silhouettes, lifestyle shots). A plugin user has one talking-head take. The grammar stays the same; only devices seen in these 5 reels are used.

| Reference device (faceless) | One-person version (devices observed elsewhere in the set) |
|---|---|
| `L-SPLIT` hook: two characters from behind, blue top / red bottom | **Top box = the real thing** (a screenshot, result, picture of "path A"), **bottom box = the speaker**, same scale as `L-PANEL` (al2), seam y ≈ 870–950. Character colour is carried by a wash on the top picture (blue) and the B&W + red-word treatment when path B is named (al1 9.6 s grade switch). Frame 0: both boxes sharp, caption on the seam with a blue-box reveal |
| Voice-over over cinematic plates (al1 3.6–11.7) | **`L-HEAD` with the graphics in the band above and behind the head:** glow logos, the notification pill and the ring move from the wall above the monitor to the band above the speaker (positions as al1 41.6–48.5) |
| A chain of lifestyle B-roll per listed item (al1 30.5–37.1) | One **picture per item**: `L-CARD` word card, a fetched picture or screenshot in `L-SPOT`, or a full-frame picture (al5 painting) for 0.4–0.8 s, then back to full frame |
| Chapter plate "No.N" over a back-of-head shot (al5) | "No.N" serif **behind the speaker's head** in the top band (al1 37.1 did exactly this) or on a blue `L-CARD` with the subtitle appended |
| B&W plate with red failure words (al1 9.6–11.7) | **The speaker full frame graded B&W for ≤ 2 s** (al5 40.2–44.0) with the failure word in red S6 in the band above the head; colour blooms back on the solution (EV-7) |
| Showreel montage of own past reels with 3D card flips (al1, al5) | The user's own past work, screenshots or results in the same 4–10 f flip montage; if they have none, skip it (never fake proof) |
| Spotlight cards of other people's work (al5) | **The speaker's own clip inside the spotlight card** on the blue / off-white canvas (al5 6.5 s shows his own reel inside a flipped card; al2's stack panel shows his own clip), while the caption word sits under the card. Card ≥ 940 px wide (x 70–1010), whole head inside |
| Silhouette / profile ECU of the speaker | A **push-in** on the talking head (≤ 135%, face whole) or the B&W switch |

- **Speaker movement in the adaptation:** full frame (hook, claims, turns, CTA) → `card` in `L-SPOT`, `slid` under a top picture or `dock` under the data while an idea is shown (1.5–6 s) → full frame. Off-screen stretches (word cards, a picture, the montage) last ≤ 2.5 s each; the face is never away for more than ~4 s in a row.
- **The move between full and card:** a hard cut (his grammar), or a 3D card flip (T-05, 4–6 f) when the speaker's clip lands in the card on the blue canvas (al5 6.5 s recipe).

### 3.10 Safe zones (Instagram / Shorts)
- Key text inside **x 60–1020, y 90–1650**. The bottom ≈ 270 px (y > 1650) carries no text; the right ≈ 110 px holds no text below y 1000.
- The band above the head (y 90–620) is the title zone; the chest (y 1050–1260) is the caption zone; the seam or panel bottom is the caption zone in split layouts.
- S2/S3 words wider than 960 px are scaled down to fit; never wrapped to two lines.

---

## §4 Colour tokens

### 4.1 Core tokens
| Token | Hex | Use |
|---|---|---|
| `ink` | `#FFFFFF` | Every caption on footage; card text on blue/navy |
| `blue` | `#213CEF` (measured `#213CEF`, `#223BF2`, `#203BF0`) | The house accent: word cards, blue-box reveal (S5), title boxes and banners (al3/al4 measured nearer `#2B3BD0`), spotlight canvas, badges, montage field, colour-flash entrances |
| `blueText` | `#2B3BD0` | Text on off-white cards and spotlight captions |
| `navy` | `#09162B` | Second word-card colour |
| `paper` | `#F1F1F1` (al5 `#F2F2F2`) | Off-white word cards, spotlight canvas, white image cards |
| `red` | `#F82228` | Failure words on B&W (S6), path-B / loser |
| `laser` | `#DF0607` | The 12 px "limit" line with glow |
| `alert` | `#F6505B` | Notification pill with glow |
| `redSerif` | `#E0282A` | Red serif words over a painting / on white |
| `ringA → ringB` | `#D437BC → #7135FA` | Count-up ring gradient (al1, al3, al5) |
| `cream` | `#C8CDAB` / `#EEF3D0` | Chapter serif "No.N", the quoted keyword (al1) |
| `flashTeal` | `#7FD0D0` / `#50C8D0` | 1–3 f colour-flash before a word turns white |
| `kwGradient` | `#FF5A1F → #E0208A → #3050F0` (guess from sheet) | The gradient CTA keyword (al5) |
| `go` | `#40E040` (once, guess) | A single green highlight word inside a clip (al2) |
| `shadow` | soft, ~20% black, 6–10 px blur | Behind S2 on bright footage; under the profile card |

### 4.2 Plate and wash colours (one meaning each)
| Wash | Hex (measured on the wall) | Meaning |
|---|---|---|
| Blue wall | `#1E5BA0`-ish | Path A, the winner, chapters 1 and 3 |
| Red wall | `#8F3534`-ish | Path B, the loser |
| Warm orange | golden-hour / tungsten | Chapter 2 (the creative side), aspiration |
| B&W | desaturated | The pain beat, failure, "trial and error": a ≤ 2 s beat, never the reel's look |

### 4.3 Meaning of colour
- **White** = the words. **Blue** = the house: key-word reveal, cards, the winner. **Red** = the limit, the failure, the loser (and only that). **B&W** = pain (≤ 2 s); colour blooms back with the solution. **Magenta → violet** = growth numbers (views, followers). **Cream** = chapter titles and the keyword.
- **Rules:** one accent per meaning; red never decorates; never two accents on one word except the keyword gradient.

### 4.4 Footage look (don't fight it)
- Cinematic, low-key, rich contrast, deep blacks; teal/cyan shadows, warm skin; practical monitor colours in the background (red/green/blue timelines). If the user's footage is flat, a gentle teal-shadow / warm-skin grade, a touch more saturation and a contrast lift get close; never crush the face.
- **Never pale** (the creator's direction): no desaturation, fading, milky or lifted blacks as a look, on any beat but the named B&W ones. The skin stays warm and full; a phone selfie gets richer, not flatter.
- al2's step 1 starts **deliberately ungraded** and wipes to the grade as a demo (§8.3 P-17): the only time flat footage is shown, and the flat frame is on screen ≤ 0.5 s before the wipe starts.

---

## §5 Type tokens and caption tiers

### 5.1 Font map (all bundled)
| Role | Reference look (guess) | Bundled font | Weight / setting |
|---|---|---|---|
| S1 filler, S2 key word, labels, numbers | Geometric/grotesk display sans, tight tracking (Inter Display / Neue Montreal feel) | **Inter Tight** (`InterTight-VF.ttf`) | S1 Medium 500; S2 SemiBold 600; tracking −3 to −4% |
| S3 emotional / naming words, list headers, step word + numerals | Condensed high-contrast serif italic | **Instrument Serif Italic** (`InstrumentSerif-Italic.ttf`) | Regular; tracking −2% |
| Chapter "No.N", title boxes (al3/al4), quoted keyword | Condensed serif upright | **Instrument Serif** (`InstrumentSerif-Regular.ttf`) | Regular |
| Promise headline, gradient keyword, banner sans | Bold grotesk | **Inter Tight** | ExtraBold 800 (headline caps, leading 0.85, tracking −4%); banner SemiBold 600 |
| Red serif over a painting | Bold serif italic with drop shadow | **Bodoni Moda Italic** (`BodoniModa-Italic-VF.ttf`) | Bold 700 |

### 5.2 The caption tiers (one word on screen at a time)
| Tier | Use | Size on 1080×1920 | Colour | Position | Measured |
|---|---|---|---|---|---|
| **S1 filler** | Every unimportant word ("he", "used", "that", "the") | **80–92 px font (≈ 60–68 px cap)** **(fix: 40 px in al1/al3/al4/al5, 55 px in al2: too small on a phone)** | `#FFFFFF` | x 540; **just under the chin** on `L-HEAD` (top ≈ 40–80 px below `FACE(n).chin`; y ≈ 1040–1200 on the house framing); collar y ≈ 960 when a mic is in frame; y ≈ 1260 when slid/stacked; on the card's chest when docked; centre y ≈ 960 on plates | 40–55 px |
| **S2 key word** | Nouns, numbers, verbs that carry the claim ("perform.", "2 things.", "video", "Here's why.") | **140–150 px font (≈ 110–120 px glyph)** | `#FFFFFF`, faint soft shadow | chest y ≈ 1050–1260; or the band above the head y ≈ 340–620; plates y ≈ 950–1010 | 110–150 px |
| **S3 emotional / naming** | Names, feelings, identity words ("Antonio"-type self-names, "succeed", "editor", "never", "earn", "community") | **150–200 px font** | `#FFFFFF` (cream `#EEF3D0` on chapter plates) | same slots as S2 | 150–200 px |
| **S4 seam pill** | Filler in a split layout | 64 px text on a blue pill, radius 6 **(fix: 20 px in al1)** | white on `blue` | on the seam | 20 px |
| **S5 blue-box reveal** | The key words of a split hook | 1 frame of a solid `blue` block the size of the coming word, then the word | `blue` → white word | where the word lands | 1 f |
| **S6 red word** | Failure words on B&W ("barely", "closer") | 110 px glyph **(fix: 55 px glyph in al1)** | `red` | band above the head / above the monitor y ≈ 300–500 | 55 px |
| **S7 card word** | Word cards and spotlight captions | ≥ 110 px glyph; a word alone on a card ≥ 160 px glyph (spotlight 105 px measured) | `blueText` on paper; white on blue/navy | card centre y ≈ 940–1010; under a spotlight card y ≈ 1432–1539 | 20–110 px |

**Weighing rule (observed):** about every 3rd–5th word is S2 or S3. Numbers are S2. A word that names a person, a feeling or an identity is S3. Last words of a sentence with a full stop ("perform.", "started.", "better.") are often S2. Two-word key phrases build by appending: the first word lands, the second fades in 2–3 f later beside it ("still" f311 → "still stuck" f315; "detailed" + "breakdown").

**Animation (all tiers):** each word fades in over **2 f** (40% → 100%) with a **5–10 px rise**; holds until the next word; **hard replace, no exit**. **This edition (EV-1):** S2/S3 words then overshoot 106 → 100% over 3 f with a faint motion trail on the rise, and S3 serif words carry a soft 2-frame glow; S1 stays exactly as measured. Colour-flash variant on a few key words: the word appears **1–3 f in `blue` or `flashTeal`**, then white ("STEP" blue→white, "private" teal→white, "build" blue→white). Flicker variant on the very first word ("Creating" f0–4: on/dim/on/dim/on).

### 5.3 Titles in the band above the head
- **Promise headline** (al2 4.3–5.5): "STEP BY STEP" Inter Tight ExtraBold caps, cap height 180–280 px, x 112–975, y 102–576, partly behind the head; enters `blue` for 2 f, then white; cut out.
- **Kicker + title** (al2 6.0–7.44): letter-spaced caps kicker (tracking +60%) above a title "Talking Head *Videos*" (S2 sans + S3 serif word, ~108 px). **(fix)** Kicker measured 37 px: set it ≥ 56 px.
- **Chapter numeral** (al1 37.1, al5): "No.N" Instrument Serif, glyph ~125 px (al1, behind the head) to ~280 px (al5, on plates), cream; flicker-in (5 f); S1 subtitle appends word by word under it ("the technical foundation").
- **Metaphor word** (al5 "Ceiling"): S3 serif italic y ≈ 203–428, letters reveal in random order over ~12 f.

### 5.4 Step marker (al2)
- "step" Instrument Serif Italic **≥ 80 px** **(fix: ~45 px measured)** at x ≈ 300–420, plus the numeral Instrument Serif Italic **~270 px tall** at x ≈ 560–770, y ≈ 982–1252: at chest height **beside the mic**, the same slot every step.
- "step" arrives 1–2 f before the numeral; the numeral wipes in ghosted (~30%) then solid over 3 f; held 1.5–2 s; out by cut.

### 5.5 List header and title box (al3, al4)
- **Header:** "N. Item name" Instrument Serif Italic, glyph 80–100 px, white with a faint shadow, centred, y ≈ 190–340. Flicker-in 5 f (100/40/100/40/100%), held until the next item, hard-replaced.
- **Title box (hook):** Instrument Serif white ~60–75 px on a `blue` box, square corners (al3 box x 138–934, y 342–472; al4 banner x 90–976, y 315–475). Sub-line under it types 1 character per frame, **≥ 56 px** **(fix: 37–45 px measured)**.

### 5.6 Small print (labels, numbers, pills) — the phone floor
| Element | Measured | House size |
|---|---|---|
| Ring number | ~75 px glyph | **≥ 110 px glyph**; the ring ≥ 600 px wide |
| "Views" / "Followers" label | ~25 px | **≥ 48 px** (fix) |
| Notification counters | ~25 px | **≥ 48 px** (fix) |
| Handle / profile pill text | ~20 px | **≥ 48 px** (fix) |
| Panel UI text that is the point | 15–25 px | **≥ 44 px** by zooming, or an S2 label (fix) |
| Card words on colour cards | 20–60 px | **≥ 110 px glyph; one word alone ≥ 160 px** (fix) |
| Picture / spotlight cards | ≈ 500–700 px wide | **≥ 860 px wide** (L-LIST card ≥ 640 px) |

### 5.7 The quoted keyword (CTA)
- The user's keyword in **curly quotes**, Instrument Serif caps (al1/al4 look, glyph 290–316 px, x ≈ 153–925, y ≈ 303–684) **or** Inter Tight ExtraBold with `kwGradient` (al5 look, y ≈ 396–621), in the band above the head, **behind** the hair.
- Entrance: colour-cycle over 3 f (`blue` → `flashTeal` → white, al4) or a cut in with the gradient (al5). Held 1.2–3.5 s to the end. A deep boom under it (§11).

---

## §6 Hook system

### 6.0 The 10× hook
- **Frame 0 is already moving:** the speaker sharp, whole face, the first word on, and the hook title on or entering, with the pull-out (T-11) or the banner's tilt already under way; never a still, never an empty card.
- **12–15 visual events in the first 3 s** (the references measured 10–13): every word, the title building, a carousel, ghost numeral or particles behind the head drifting with depth (EV-2), one punch or ECU on the hook's key word, the first key word landing with weight (EV-1).
- **The count is on screen by ~2 s** ("7", "No.1", "10/10", "3 things") and stays visible as the progress spine (EV-6): the loop the viewer can count.
- **The first structure cut (~3–4 s) lands on a sub boom** with the picture that proves the hook (a result, his work, path A's progress); a shape relay (EV-4) may carry the eye into it.
- **The hook's best word is the biggest thing on screen:** an S3 serif word at 180–200 px or the promise headline, with a colour flash.

### 6.1 What the hook must do in about 3 seconds
1. **Show a face or the real thing, sharp, at frame 0,** with the first caption on (M6).
2. **Stack 10–13 visual events in the first 3 s** (measured ≈ 11, 10, 13, 30+, 12): caption words (one per word), a title building, a zoom or punch, a graphic arriving behind the head.
3. **Open a loop the viewer can count:** "two editors… here's why", "7 steps", "10 habits", "comes down to 3 things", "each one better than the last".

### 6.2 Hook formulas (`HF`)
| ID | Formula | Spoken pattern | Seen in |
|---|---|---|---|
| HF-1 | **"Picture this" parable** | "Picture this: two [people] doing [the same thing] for [time]. One [result A]. The other [result B]. Here's why." | al1 |
| HF-2 | **De-mystify + year + process** | "[Result] in [year] isn't that hard, so here's my step-by-step process on how I [do it]." | al2 |
| HF-3 | **Audience call-out + 101** | "You want to [goal] but don't know where to start? Then this video is for you." | al5 |
| HF-4 | **Number list + urgency** | "Here are [N] [things] that you need to [act] today." | al3 |
| HF-5 | **Number list + escalation** | "Here are [N] ways to [goal], each one better than the last." | al4 |

Add-ons that stack with any formula:
- **The explicit loop word:** "Here's why." on a punch-in, S2 (al1 13.9).
- **The credential beat right after the loop:** "Hi, my name is [name]…" with a 1.5–3.5 s montage of the speaker's own results (al1 14.8–18.1, al5 4.8–8.2). Only with real proof.
- **The promise card:** "comes down to / 3 things" typed on an off-white card with a growing blue selection box (al5 8.24–9.8).
- **Digit-by-digit number build:** "2 → 20 → 202 → 2026" one digit per word frame (al2 1.4–2.0).

Write **3 variants** per video with different formulas and recommend one.

### 6.3 Hook visuals (`H`)
| ID | Hook visual | Recipe |
|---|---|---|
| **H-1** | **Colour-coded split** (al1, fixed) | f0 `L-SPLIT` both halves **sharp** **(fix: the reference rack-focuses from fully blurred over 14 f)**, top washed blue, bottom red; caption on the seam: S1 pills for filler, S5 blue-box reveal on "2 [people]" (f18 block → f19 word) and "6 months"; ~3.6 s hard cut with a low boom to path A full frame. Adaptation: top = the real thing, bottom = the speaker (§3.9) |
| **H-2** | **Pull-out + own work behind the head** (al2) | f0 MCU at ~130% (face whole) with the first word flickering in; f0–14 eased pull-out to 100%; f16 a curved carousel of the speaker's own work (cards ~250×600) fades in **behind the head** in the top band and drifts L→R ~8 px/f; f61 ECU punch (~180%, face whole) on the de-mystifying word ("isn't") in S3; f94 punch-out; f108 the promise headline enters blue → white |
| **H-3** | **Banner + ghost numeral** (al5) | f0 `L-HEAD` with a giant grey serif italic numeral ("101"-type) at ~40% **behind the head** (y 135–450); f3–9 a blue banner slides in from the left tilted ~−6°, straightens, and its text types 1 char/f until ~f20; S1/S2 captions on the chest; held to ~4.8 s |
| **H-4** | **Title box + typewriter** (al3) | f0 `L-HEAD` with a blue title box already on (x 138–934, y 342–472) and its sub-line typing 1 char/f (f2–15); the first item's header + card land on a hidden jump cut at ~2.8 s. **(fix)** al3's arm crosses the lens at f0: the face is clear from f0 |
| **H-5** | **Banner drop + money rain** (al4) | f0 `L-HEAD` **(fix: sharp and face-whole at f0; the reference starts on a motion-blurred ~150% crop that cuts the head)**; f0–7 zoom-out from the largest face-whole scale to base; the banner drops from the top at ~−5°, straightens by ~f20 while its text types; a 3D falling-money particle layer runs **behind the head** for the whole hook; the first item card lands at ~3.7 s after a bright shimmer |

### 6.4 Hook timing template (≈ 0–4 s)
| t | Beat | Rule |
|---|---|---|
| **f0** | Open | **The speaker (or the real thing) sharp, face whole, first caption on, the hook title on or entering.** No black, no blur, no hand over the lens, no empty card |
| f0–14 | Camera move | Pull-out 130→100% (H-2) or zoom-out (H-5), eased; or none (H-3, H-4) |
| f2–20 | Title builds | Typewriter 1 char/f; banner straightens; carousel/ghost numeral/money rain behind the head |
| every word | Captions | One word per onset; the first key word in S2/S3 by ~1 s |
| ~2.4 s | Emphasis | Punch-in or ECU on the hook's key word, face whole (al2 f61) |
| ~3–4 s | First structure cut | A hard cut with a low boom to the first idea (al1 3.56, al2 3.76, al3 2.83, al4 3.72) |

### 6.5 Hook text rules
The title is **the promise in ≤ 6 words**, digits for numbers ("10/10 video editing habits"); the typed sub-line carries the rest.

### 6.6 Hook sound
A whoosh on the opening move (al4), a whoosh on the first punch-in (al2 2.44), a low boom on the first structure cut (al1 3.56).

### 6.7 Endings and CTA (pick one per reel)
| ID | Ending | Recipe | Seen in |
|---|---|---|---|
| **E-1** | **Keyword behind the head** | Full frame; the setup words in S2 in the top band ("private community"-type phrase, with a teal→white flash on its first word); then the user's quoted keyword (§5.7) behind the head for the last 1.2–2.3 s with a deep boom; S1 filler continues on the chest; hard stop 0.33–0.35 s after the last word | al1, al4 |
| **E-2** | **Asset parade + keyword** | `L-STACK`: the panel flashes in and each promised item (the user's real deliverables) cuts in as it is named, every 0.8–1.5 s; then the keyword 3.5 s | al2 |
| **E-3** | **CTA as the last list item** | The header becomes "N. [the user's CTA]" with its own card (the user's profile pill at ≥ 48 px, or their own page); then the CTA words big (al3: "edit / build / earn" at ~165 px); or the keyword (al4) | al3, al4 |
| **E-4** | **Keyword + P.S. on a push-in** | E-1, then a punch-out to ~85–90%, then a push-in to ~135% (face whole) for a one-line P.S. in S2/S3 | al5 |
- The CTA slot is **the user's own** (M11): their keyword, their offer, their destination, from the brief. If the brief has no keyword, E-3 with "follow for more" is the default.
- **(fix)** The reference CTAs sell the creator's paid community and add scarcity lines; never copy the offer, the keyword or a scarcity claim the user didn't make.

---

## §7 Structure devices

### 7.1 Structure devices (`SD`): pick the ones the format needs
| ID | Device | Use when | Recipe |
|---|---|---|---|
| **SD-1** | **Chapter numeral "No.N"** | `FMT-CHAPTERS`, `FMT-PARABLE` sections | Serif "No.N" + S1 subtitle appended; on a plate (al5), behind the head (al1 37.1) or on a blue card (adaptation); a riser into it, a whoosh on it; ~1.7 s; every chapter identical |
| **SD-2** | **Step marker** | `FMT-STEPS` | "step" + giant numeral at the chest beside the mic (§5.4), on the step word, every step |
| **SD-3** | **Running header (TOC)** | `FMT-LIST` | "N. Item" header always on screen from the first item; flicker-in on each new item (§5.5) |
| **SD-4** | **Loop + payoff** | Any | "Here's why." / "I'll tell you." on a punch-in, paid off by the chapters/steps |
| **SD-5** | **Two-colour characters** | `FMT-PARABLE` | Path A = blue light, path B = red light; B's failure lines go B&W with red S6 words (al1 9.6) |
| **SD-6** | **Recap badges** | Before the CTA in a chapters reel | "#1 #2 #3" blue translucent circles ~110 px (number ≥ 56 px) above the head, popping 4 f apart on "all 3" (al5 47.0) |
| **SD-7** | **Credential montage** | After the hook loop | The speaker's own results/work in 4–10 f inserts with 3D card flips (al1 16.1–17.5, al5 6.3–7.9) |
| **SD-8** | **Promise card** | `FMT-CHAPTERS` | Typed off-white card with the blue selection box (§3.4) stating the N |
| **SD-9** | **Self-demonstrating step** | `FMT-STEPS` | The step does what it says on screen: ungraded → graded wipe, Original → Enhanced toggle, an export dialog's slider dragged (al2) |
| **SD-10** | **Pain in B&W** | Any | The pain beat goes B&W (speaker or plate) for ≤ 2 s; colour blooms back on the solution (al1, al5; EV-7) |

### 7.2 The item ritual (one recipe per chapter / step / item, identical every time)
- **Chapter (al5):** riser under the last 0.5 s of the previous section → hard cut + whoosh to the chapter plate/card → "No.N" flickers in → S1 subtitle appends word by word → 1.5–2 s later hard cut back to full frame → the chapter's metaphor picture lands on its noun.
- **Step (al2):** whoosh/impact on "Step N" → marker "step" (f0) + numeral (f1–4) at the chest → 1.5–2 s on the speaker → the step's demonstration (panel / full-screen recording / B-roll burst of 3–4 shots at ~0.4 s each) → back to full frame.
- **List item (al3, al4):** on the item's first word: hidden jump cut + header flicker-in + new picture card (hard swap) + a whoosh/pop; S1 captions run; a logo swaps inside the item on the brand's name; next item on the next ordinal word. Each item 2.1–3.0 s.

### 7.3 Open loops (retention)
- **The count:** "two editors", "7 steps", "3 things", "10 habits" said in the hook and kept visible (numerals, header numbers, recap badges).
- **"Here's why."** at 12–15 s after the setup, then a fast credential beat, then the answer.
- **Escalation:** "each one better than the last" (al4) — the order must genuinely escalate.
- **The last item is the ask** (al3, al4): the list's final slot pays the loop and makes the CTA.
- Every loop is paid on screen in the element that opened it (the numeral, the header, the badges).

---

## §8 Graphics / B-roll system

### 8.0 The 10× layer (what the best editor adds to every word and picture)
**Animation principles, applied to this style:**
| Principle | How it shows up here |
|---|---|
| **Anticipation** | A 1-frame blue-box flash before a key word (S5); the ring's leading dot appears 2 f before the arc draws; the banner starts tilting 2 f before it slides; a 0.3–0.5 s held breath of silence before the keyword |
| **Follow-through & overlap** | S2/S3 words overshoot 106 → 100% over 3 f after their rise; badges pop 40 → 108 → 100%; cards settle 95 → 101 → 100%; graphics behind the head settle 2–4 f after the speaker's punch lands, never on the same frame |
| **Squash & weight** | The CTA keyword drops 104 → 100% with a 1-frame compression on its boom; the step numeral lands with a 1-frame stretch at the end of its wipe |
| **Arcs** | Logos rise on gentle arcs; the banner swings out of its tilt on an arc; the dock travels on an arc, never a straight slide |
| **Slow in / slow out** | The house is a fast ease-out; overshoots ≤ 6%; never bounce or elastic |
| **Staging** | One hero per frame: when an S3 word lands, the band graphics dim ~30% for its hold; when the ring counts, captions drop to S1; when the dock opens, the data is the only bright thing |
| **Secondary action** | A slow push (+2–4%) under every held face beat; the band text drifting 0.5–1 px/f against it; plates drifting; grain living on plates; the spotlight card breathing 100 → 102% |
| **Timing** | Words every ~0.26 s; a picture every 1.2–1.6 s; inserts 4–10 f; B-roll bursts 8–14 f; holds only where a count or the keyword earns them |
| **Exaggeration** | One moment per reel goes biggest: the ring landing on the payoff word or the keyword drop |
| **Appeal** | Deep blacks, warm skin, crisp white type, one blue; it looks like a colourist and a type designer made it |

**Design hierarchy (every frame):** 1. the key word (S2/S3) or the face · 2. the picture the word names (behind the head, card, panel, dock data) · 3. the count / structure marker (EV-6) · 4. S1 filler · 5. everything else, dimmed.

**Effects toolkit:** the head-and-hair matte for real depth; a soft contact shadow of the hair on text behind it (≈ 25% black, 20 px blur); bloom on glow graphics and the ring's leading dot; motion blur on slides, flips and whips; light film grain on plates only; the colour flash on key words; one light leak per reel (T-06); rack focus on plates. **Never:** glitches, RGB splits, shake, overlay flare packs, dissolves on the face, a pale or faded grade.

### 8.1 Graphic families (`G`)
| ID | Family | Look | Motion signature |
|---|---|---|---|
| **G-1** | **Weighted one-word captions** | §5.2 tiers | 2 f fade + rise, hard replace; colour-flash on a few key words |
| **G-2** | **Text behind the head** | Titles, numerals, stats, keyword in the band above the head, hair over the letters (matte) | Flicker-in / cut / colour-cycle; the head always in front |
| **G-3** | **Word cards** | Solid paper / navy / blue full frame, 1 word at a time, optional underline rule | Hard cut in on the next word; underline snaps to word width |
| **G-4** | **Glow graphics** | Logos and a notification pill floating on the wall (or the band above the head), screen blend, bloom | Defocus → sharp + rise (logos); red bloom → sharp (pill); counters count up |
| **G-5** | **Count-up ring** | Horseshoe arc `ringA → ringB`, white number, label, leading highlight dot | Arc draws clockwise from 12 o'clock ~12 f; number eases out over ~90 f, lands on the payoff word |
| **G-6** | **UI cards behind the head** | Off-white profile card, radius ~20, soft shadow, translucent | Fade + scale 95→100% over ~8 f |
| **G-7** | **Screen recordings** | Top panel on black (`L-PANEL`), full screen with motion-blur scrolls, or a tilted 3D plane in black space with a slow orbit (al5) | Hard cuts; cursor moves; scroll blur |
| **G-8** | **Own-work montage / carousel** | 3D card flips on a blue field; curved carousel behind the head | Flip 4–6 f; carousel ~8 px/f |
| **G-9** | **Picture card above the head** | Square/rounded card radius 16–20, bottom tucked behind the head (`L-LIST`) | Hard swap on the item word |
| **G-10** | **Banners and title boxes** | Blue box/banner, serif or sans white text, typewriter sub-line | Slide/drop at ~−5°/−6° tilt, straighten ~15–18 f; type 1 char/f |
| **G-11** | **Literal metaphors** | A red laser "limit" line just above the head, a painting with red serif words, falling money behind the head, a giant ghost numeral | Line wipe 12 f L→R; painting hard cut; rain loop |
| **G-12** | **Spotlight card** | Colour canvas + ~700×870 card + handle pill + one caption word under | Hard swaps every ~0.7 s |
| **G-13** | **Badges** | Blue translucent circles with serif "#N" | Pop 40→100% in 3–4 f, 4 f apart |
| **G-14** | **Demonstrations** | Grade wipe, toggle switch, a file icon dragged by a cursor, floating file names | Wipe 6 f; toggle 4 f; drag with cursor; parallax drift |
| **G-15** | **B&W + red word** | The grade switches to B&W on the same shot; failure words in red S6 | Hard switch on the word |

**Family rules:** parable G-1…5, 8, 11, 15; steps G-1, 2, 7, 8, 10, 14; chapters G-1…3, 5…8, 10…13, 15; list G-1, 2, 5, 9, 10, 11. Pictures sit **above** the head or **replace** the frame, never over the face (N2).

### 8.2 Staging choreography (how a phrase plays out)
1. **On the phrase's first word:** the new picture lands (cut, card, header) and the first caption word appears.
2. **On the trigger word:** the key word arrives in S2/S3; its graphic lands on the same frame (±2 f).
3. **During the phrase:** S1 filler words replace each other on every onset; a count-up runs; a slow push may run.
4. **On the last word:** the payoff value lands (ring final number, notification count); the next phrase cuts.

### 8.2a Timing to the voice (measured)
A caption every ~0.26 s; montage inserts 4–10 f; B-roll bursts 8–14 f per shot; count-ups start ~0.1 s before the phrase and land on its last key word (al1 "perform.").

### 8.3 Pattern specs (`P`)
| ID | Pattern | Family | What's on screen | Motion |
|---|---|---|---|---|
| P-01 | **Key-word punch** | G-1 | Full frame; the key word S2/S3 on the chest; a +15% punch-in on it | Punch on the word onset (hard); out on the next cut |
| P-02 | **Phrase build** | G-1 | Two key words side by side ("still stuck", "detailed breakdown") | Second word fades in 2–3 f after its onset |
| P-03 | **Blue-box reveal** | G-1 | A solid blue block the size of the next key word, then the word | 1 f block → word on the next frame |
| P-04 | **Chapter title behind the head** | G-2 | "No.N" cream serif in the top band behind the hair | Flicker-in f0 on, f1 dim, f2 on, f3 dim, f4 solid; cut out on the next shot |
| P-05 | **Word-card chain** | G-3 | 2–3 colour cards in a row (paper → navy → blue) carrying 3–8 words | Hard cuts on words, 0.7–2.3 s each |
| P-06 | **Underline card** | G-3 | Blue card, white word, 3 px white rule under it that snaps to each word's width | Rule width jumps with each word (260 → 160 px) |
| P-07 | **Typed promise card** | G-3 | Off-white card; a word slides in, the next pops, a cursor blinks, a blue selection box grows behind the last words, which fill it white | Slide 5 f with blur; pop 1 f; cursor blink; box grows ~6 f L→R |
| P-08 | **Brand proof glow** | G-4 | 2–4 logos (only those the script names) floating above the head or on the wall | Each starts ~20 px blurred at 60%, sharpens over 8–10 f while rising ~15 px; staggered 2 f (right → left) |
| P-09 | **Notification count** | G-4 | A red pill (comments / likes / followers) with glow | Red bloom → sharp in ~8–10 f; counters count up ~4 per frame |
| P-10 | **Views ring** | G-5 | Horseshoe ring above the head (al1 bbox x 267–812, y 87–446; list card slot in al3; house ≥ 600 px wide) with the number and "Views" ≥ 48 px; or above the speaker docked (§3.8a) | §8.1 G-5; a slow push on the speaker under it; tick run; the landing per EV-5 |
| P-11 | **Profile card behind the head** | G-6 | The user's own profile/result card x ≈ 20–1060, y ≈ 130–420, behind the head | 8 f fade + scale 95→100% |
| P-12 | **Panel demo** | G-7 | `L-PANEL`: the recording on top, zoomed to the part being talked about, plus an S2 label if UI text is < 44 px | Cut in with the speaker sliding down; content cuts inside on each action word |
| P-13 | **3D screen orbit** | G-7 | A recording on a tilted plane in black space, slow orbit | Blur dissolve in ~4 f (purple glow) then orbit ~2–4°/s |
| P-14 | **Own-work montage** | G-8 | 3–6 inserts of the speaker's own results on blue/white fields | 4–10 f each, 3D flip on 1–2 of them |
| P-15 | **Carousel behind the head** | G-8 | Own work on a curved wall behind the head in the top band | Fade in ~4 f; drift ~8 px/f |
| P-16 | **Item card** | G-9 | One picture for the list item above the head, bottom tucked behind the hair | Hard swap on the item word with the header |
| P-17 | **Before/after wipe** | G-14 | The same shot, flat → graded (flat ≤ 0.5 s before the wipe) | Vertical edge R→L over 6 f, a thin light line riding the edge |
| P-18 | **Toggle** | G-14 | "Original ◉ Enhanced"-type pill (the user's own labels) | Knob slides L→R in ~4 f; track fills blue |
| P-19 | **File drag** | G-14 | A white file/doc icon dragged by a cursor across the top band | Slides in with the cursor, fades out 5 f |
| P-20 | **Floating names** | G-14 | Real names (files, tools, sounds) floating on an off-white card in parallax | Slow drift; cut |
| P-21 | **Limit line** | G-11 | The metaphor word (S3) above the head + a 12 px red line with glow just above the hair (al5 y ≈ 514–526) | Letters reveal in random order ~12 f; line wipes L→R 12 f |
| P-22 | **Painting metaphor** | G-11 | A public-domain painting full frame with red Bodoni italic words over it | Hard cut; words per onset |
| P-23 | **Falling money / particles** | G-11 | Particle layer behind the head for a money topic | Loop through the hook |
| P-24 | **Spotlight** | G-12 | `L-SPOT`: canvas, handle pill, card, caption word | Content swaps every ~0.7 s; caption per word |
| P-25 | **Recap badges** | G-13 | "#1 #2 #3" above the head | §7.1 SD-6 |
| P-26 | **Pain switch** | G-15 | Same shot to B&W for ≤ 2 s; red S6 word above the head | Hard switch on the pain word; colour blooms back on the solution (EV-7) |
| P-27 | **CTA keyword** | G-2 | §5.7 | Colour-cycle 3 f; boom |

### 8.4 Line → pattern lookup (start here for every phrase)
| Line type | Primary pattern | Alternates |
|---|---|---|
| A claim / "Here's why." / opinion | P-01 Key-word punch | P-02 |
| "Two people / A vs B" | H-1 split + SD-5 colours | P-26 |
| "[Path A] made incredible progress…" | P-08 / P-09 / P-10 above the head | P-14 |
| "[Path B] barely moved…" | P-26 Pain switch | P-05 |
| "Hi, my name is…" / credibility | P-14 Own-work montage | P-11 |
| A listed set ("edit, build and earn") | One picture per item: P-05 cards or P-16 / P-24 | P-14 |
| "First / No.1 / chapter" | P-04 / SD-1 | P-06 |
| "Step N" | SD-2 marker | — |
| A tool action ("open X, click Y") | P-12 Panel demo | P-13 |
| A setting or before/after | P-17 / P-18 | P-12 |
| "Views / followers / results" | P-10 Ring / P-09 | P-11, or the dock (EV-8) while he keeps talking |
| A number, a result or a before → after said while he explains it | EV-8 dock + P-10 / P-09 above him | P-01 with the number in the band |
| "my profile / my brand" | P-11 Profile card behind the head | — |
| A metaphor ("ceiling", "steal like an artist") | P-21 / P-22 | P-05 |
| A number or duration said once ("2 years", "6 months") | P-03 blue-box or P-06 | P-02 |
| "It comes down to N things" | P-07 Typed promise card | P-25 |
| "All 3 / recap" | P-25 Recap badges | — |
| An item in a list | P-16 Item card + header | P-24 |
| A brand named in an item | P-16 logo tile, swapped on the name | P-08 |
| A person or someone else's work named in the script | P-24 Spotlight | — |
| The ask | P-27 + §6.7 | E-2 parade |

### 8.5 Density and variety
- Cinematic: **a new picture every ~1.2–1.6 s**, ~42–55 visual changes per 60–75 s, and something moving inside every picture (M17); median shot 0.6–1.2 s inside montages, 2–4 s on the talking head (which carries a punch, a graphic or caption-size changes).
- List: a new item picture every 2.1–3.0 s; captions every word.
- The longest static stretch is the CTA (6–11.5 s) and it is carried by per-word captions and the keyword/panel changes.
- Variety comes from the **picture changing with the words**, not from new effects: the same tiers, cards and rings repeat.

### 8.6 Asset rules
- **Own work only as proof:** results, profile, past reels, screenshots must be the user's (supplied or captured). Never fake a stat, a notification count or a comment (N6).
- **Pictures for metaphors and list items:** fetched from the web (public-domain art, photos, illustrations) or drawn; graded to the reel (blue-tinted, grainy, or kept in their own colour as a tile). Credit in the asset list.
- **Logos:** only brands the script names, real marks, on a white or brand-colour tile (radius ~20), never as an endorsement the script doesn't make (N7).
- **Screen recordings:** recorded by the user or recreated; zoom so the point reads (M8); localise the UI language (M14).
- **Other creators:** never their profile, thumbnails or clips unless the script is explicitly about them and the user supplies them.

### 8.7 Signature moves (the ones a viewer would recognise)
Importance-sized one-word captions; text behind the head; blue/red characters and B&W with a red word; paper/navy/blue word cards; the count-up ring; the step marker beside the mic and the slide-down under a recording; the running serif header with a picture card above the head; the quoted keyword behind the head with a boom.

### 8.8 Mistakes seen in the references (and the fix)
| Reel | Mistake | Fix in this playbook |
|---|---|---|
| al1 | Frame 0 fully defocused for 14 f | Sharp at f0 (M6, H-1) |
| al1 | 11 s with no face at the start | Face back by ~4 s (§3.9) |
| al1 | Seam pills 20 px; card words 20–30 px; "Views" 25 px | §5.2/§5.6 floors |
| al1, al5 | Profile close-ups crop the top/back of the speaker's head | Whole face: full screen with the text moved, or a designed card the footage fills (M5); never over its own blur |
| al1 | A wall of other people's tutorial thumbnails | Own work or generic blurred tiles (N6) |
| al2 | True peak +1.5 dBTP | ≤ −1.0 dBTP (M12) |
| al2 | Panel UI text 15–25 px, kicker 37 px | Zoom or S2 label; kicker ≥ 56 px |
| al5 | A 3.8 s B&W stretch on the speaker | The B&W pain beat ≤ 2 s; colour blooms back (M15, EV-7) |
| al3 | Arm across the lens at f0; 0.69/0.74 s pauses; S1 40 px | M6, M3, M8 |
| al4 | f0 on a blurred ~150% crop that cuts the head | H-5 fix |
| al5 | German UI in an English reel; handle pills 20 px | M14, §5.6 |
| all | True peak −0.8 to +1.5 dBTP | M12 |
| al1, al4, al5 | The CTA sells the creator's own community with his keyword | The user's own CTA (M11) |

### 8.9 Elevated devices (new in this edition)
| ID | Device | When | What runs | Sound |
|---|---|---|---|---|
| **EV-1** | **Weighted landing** | Every S2/S3 word | The measured 2 f fade + rise, then a 106 → 100% overshoot over 3 f with a faint motion trail on the rise; S3 serif words carry a soft 2-frame glow; the band graphics dim ~30% for an S3 word's hold (staging). S1 stays exactly as measured | None (the voice carries it); up to 3 S3 slams per reel get `abstract-hit-sub-bass-07` (low) |
| **EV-2** | **Real depth behind the head** | Every title, numeral, ring, card and keyword in the band | Behind the matted hair, the band drifts 0.5–1 px/f against the speaker's slow push (parallax); the hair casts a soft contact shadow on the letters (≈ 25% black, 20 px blur); a title settles 102 → 100% instead of popping. Never over the eyes, nose or mouth | `whoosh-2025-01-08-02-32-33-utc-whoosh-07` (low) on a title's entrance |
| **EV-3** | **The edit proves itself** | `FMT-STEPS`, any tip about editing | Each instruction is performed on this very reel: the grade wipe runs across the speaker's own shot (P-17), the caption tier switches live on "animate your captions", the cut tightens on "cut the pauses" (a visible jump), a waveform pulses under his voice on "sound design". The viewer sees the advice work | The step's own cue (§11.1) |
| **EV-4** | **Shape relay** | Section turns (chapter, step, path B), at most 3 per reel | The outgoing frame's dominant shape becomes the incoming picture over 4–6 f on the noun: the underline rule stretches into the red limit line; the ring's arc closes into the "No.N" glyph; a blue word card's colour becomes the spotlight canvas; the step numeral slides into the panel's seam | `turn-whoosh-transition` or `whoosh-2025-01-08-02-32-33-utc-whoosh-07` |
| **EV-5** | **A count that lands** | Every count-up (ring, notification, money, views) | The count speed-ramps (fast start, the last 10% stretched over the last word) and lands **on the payoff word**; the leading dot blooms for 2 f; the number settles 104 → 100%; a slow +10% push on the speaker under it, snapping back on the next cut | `clock-2025-08-27-06-56-42-utc-clock-3` or `telemetry-graph-rising-01-2025-08-27-06-33-50-utc-36877-telemetry-graph-rising-01-full` under it; `05405-shine-ding` on the land |
| **EV-6** | **The progress spine** | Every reel with a count (steps, chapters, items) | The count stays visible: between rituals the current step / chapter numeral sits small (Instrument Serif Italic ≥ 64 px) at the top band's corner (x ≥ 90, y ≈ 110–200), behind the hair if they meet; at the recap the badges (SD-6) fill in order and light together on "all 3" | `0552611` / `0552621` / `0552631` on the badges |
| **EV-7** | **Pain to colour** | The B&W pain beat (≤ 2 s) | B&W on the pain word, the red S6 word landing above the head; on the solution word colour **blooms back from the face outward** over 6 f (a radial reveal, not a flat switch); the only time the grade animates | `impactfadeinout-tfx2697` (low) into the B&W; `short-shine-2025-08-27-06-45-01-utc-short-shine-1` on the colour return |
| **EV-8** | **The dock** | A number, result or ring while he keeps talking (§3.8a) | He shrinks from full frame into the wide card in the lower half (T-17: 12 f on an arc, a 4 f settle) while the data rises into the top 2 f behind; on the next claim the card grows back to full frame (T-18: 10 f) as the data drops away | `swoosh-2025-01-08-03-02-26-utc-swoosh-02` in; `ui-opening` out |
| **EV-9** | **The keyword drop** | The CTA (§5.7, E-1…E-4) | 0.3–0.5 s with no new sound; the user's keyword drops behind the head (104 → 100% with a 1-frame compression), colour-cycles in 3 f, while the speaker pushes in +4% over the hold | `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-1` (the deep boom) |

---

## §9 Transition system (`T`)

The talking head only cuts, punches, slides and docks. Designed transitions live on plates, cards and panels, at chapter/step changes.

### 9.1 Transition library (frames at 25 fps)
Sounds per transition are in §11.

| ID | Transition | Frames | Recipe |
|---|---|---|---|
| **T-01** | **Hard cut on the word** (default) | 0 | On the onset of the word the new picture illustrates; mid-sentence cuts to cards are normal |
| **T-02** | **Punch-in / out** | 0 | +15% (claims) or ECU ~180% (hook word), face whole (M5); out on the next cut |
| **T-03** | **Slow push + snap back** | ~90 | ≈ +10% over a count-up, back to base on the next cut |
| **T-04** | **Grade switch** | 0 | Same shot to B&W on the pain word (≤ 2 s), colour blooming back on the solution (EV-7, 6 f) |
| **T-05** | **3D card flip** | 4–6 | A card turns ~70° on Y with motion blur; background swaps white ↔ blue on the edge-on frame |
| **T-06** | **Light leak** | 5 | Diagonal blue→magenta leak from top-left, near-white at f3, clear by f5. Once per reel, into the first step |
| **T-07** | **Blur-zoom** | 4 | Defocus + slight scale-down 4 f, sharp on f5 |
| **T-08** | **Flash-in panel** | 4–5 | The panel arrives over-exposed white, slides down ~60 px, settles; the speaker shifts down in step |
| **T-09** | **Grade wipe** | 6 | Vertical edge R→L reveals the graded image (a demo) |
| **T-10** | **Whip blur** | 3–4 | Motion-blurred pan across the monitors into the next shot |
| **T-11** | **Pull-out open** | 14 | 130% → 100% ease-out from f0 (face whole at 130%) |
| **T-12** | **Zoom-out open** | 7 | From the largest face-whole scale to base, sharp face at f0 **(fix)** |
| **T-13** | **Slide down / up** | 0 or 4–5 | Speaker translates under a top panel at the same scale, and back |
| **T-14** | **Blur dissolve into 3D** | ~4 | Into a 3D screen orbit through a purple glow (never on the talking head) |
| **T-15** | **Header flicker swap** | 5 | List header flickers in (100/40/100/40/100%) on a hidden jump cut |
| **T-16** | **Hard end** | 0 | Stop 0.30–0.35 s after the last word |
| **T-17** | **Dock** (this edition) | 12 | Full frame → the wide dock card in the lower half on an eased arc (ease-in-out), a 4 f settle (100 → 101 → 100%); the data rises into the top 2 f behind (§3.8a) |
| **T-18** | **Undock** (this edition) | 10 | The card grows back to full frame on an arc, the data dropping away 2 f ahead; lands on the next claim's first word |
| **T-19** | **Shape relay** (this edition) | 4–6 | The outgoing frame's dominant shape morphs into the incoming picture on the noun (EV-4) |

### 9.2 Transition grammar
| Boundary | Use | Never |
|---|---|---|
| Frame 0 | T-11, T-12 or none; sharp face | Black, blur, fade-in, a hand over the face |
| Claim → shown idea | T-01 (cut away) or T-13 (slide down) | A dissolve on the face (N1) |
| Hook → first step | T-06 (once) or T-01 + boom | — |
| Chapter / step change | T-01 + whoosh, T-07 or T-05 | A new effect per chapter |
| Inside a montage | T-05 on 1–2 inserts, T-01 | — |
| Pain beat | T-04 | A B&W stretch over 2 s |
| Data while he talks | T-17 → T-18 | A small corner bubble (N3) |
| Section turn (optional) | T-19 | More than 3 per reel |
| List item | T-15 | Visible jump cuts |
| CTA | T-08 (stack) or T-01 | — |
| Last word | T-16 | An end card, a black tail |

### 9.3 Transition map (part of the plan, §1 step 10)
```yaml
transitions:
  - {t: 0.00,  id: T-11, note: "MCU 130% → 100%, face whole, 'Creating' flickers in"}
  - {t: 2.44,  id: T-02, note: "ECU on 'isn't', face whole"}
  - {t: 7.44,  id: T-06, note: "leak into step 1"}
  - {t: 16.08, id: T-13, note: "speaker slides down under the panel"}
  - {t: 22.60, id: T-07, note: "blur-zoom into step 4"}
  - {t: 43.48, id: T-08, note: "CTA stack flashes in"}
  - {t: 55.04, id: T-16}
```

### 9.4 Transition budget (per 60 s)
- Hard cuts 30–45 (cinematic) or hidden jumps only (list); punches 2–4; T-05 only inside montages (≤ 3); T-06 ≤ 1; T-07 ≤ 2; T-04 ≤ 2; T-08 ≤ 1; T-13 ≤ 2 round trips; T-17/T-18 1–3 round trips; T-19 ≤ 3.

---

## §10 Motion tokens, camera, finishing

### 10.1 Motion tokens (25 fps)
| Token | Value |
|---|---|
| Trigger | On the word onset (±2 f) |
| Captions, colour flash, flicker, blue-box | §5.2 |
| Typewriter | 1 character per frame |
| Banner settle | From −5°/−6° tilt to flat in 15–18 f, ease-out |
| Logo build | 20 px blur + 60% → sharp + 100% over 8–10 f, rise 15 px, stagger 2 f |
| Bloom resolve | 8–10 f |
| Ring | Arc ~12 f; number ease-out over ~90 f (fast start) |
| Card scale-in | 95 → 100% + fade, ~8 f |
| Numeral wipe | ghost 30% → solid in 3 f; "step" 1–2 f earlier |
| Badge pop | 40 → 100% in 3–4 f, siblings 4 f apart |
| Letter reveal | random order over ~12 f |
| Line wipe | 12 f L → R |
| Carousel drift | ~8 px/f |
| Holds | Everything holds until replaced; exits are cuts |
| Easing | Fast ease-out; no bounce, no elastic (this edition's settles overshoot ≤ 6%) |
| Key-word landing (EV-1) | 2 f fade + rise, then 106 → 100% over 3 f |
| Behind-the-head drift (EV-2) | 0.5–1 px/f against the speaker's push; contact shadow 25% black, 20 px blur |
| Slow push on a held face | +2–4% over ~2 s, snaps back on the next cut |
| Dock / undock (T-17 / T-18) | 12 f / 10 f on an arc, ease-in-out, 4 f settle |
| Count landing (EV-5) | Speed-ramp, the last 10% over the last word; bloom 2 f; settle 104 → 100% |
| Colour return (EV-7) | 6 f radial bloom from the face |
| Shape relay (EV-4) | 4–6 f morph on the noun |

### 10.2 Camera
- The speaker's camera is locked; all moves are digital: punch +15%, ECU ~180%, push ≈ +10% slow, pull-out 130 → 100%, punch-out ~85–90%, push-in ~135%. **Every scale is capped by the face (M5, §12.3).**
- Plates and pictures may drift slowly (wall of screenshots pans sideways; 3D recordings orbit).
- **Secondary motion on the face:** a slow push (+2–4%) over every held full-frame beat, capped by the face; it resets on the next cut so the cuts stay crisp.

### 10.3 Layer order (back to front)
1. Background plate / canvas / footage background
2. Graphics behind the head: titles, numerals, rings, profile cards, carousel, particles, keyword
3. The speaker (matted head and hair over layer 2)
4. Cards and panels that replace the frame (`L-CARD`, `L-SPOT`, `L-PANEL` top)
5. Captions (S1–S7), allowed over the face
6. Flash / leak overlays

### 10.4 Finishing
- Cinematic grade (§4.4): rich, warm skin, deep blacks, **never pale**; light film texture on plates only; no vignette on the face.
- Check every on-screen word and number against the script (M14).

---

## §11 Sound design (D4)

**No music bed, ever.** Sound is SFX only (the creator's direction, 12 Oct 2026): never a music track, bed, drone or loop under the voice.

### 11.0 What the references do (measured)
- **Count:** ~8–10 hits + 2 tick runs (al1), 12–15 (al2), 15–20 (al5), one per item + the keyword boom (list).
- Every SFX is tied to a picture change; plain word cuts get nothing. A bed ran under the voice in al1, al2, al3 and al5 (al4 faint); this edition drops it.
- **Mix:** high-pass 80 Hz, de-ess, firm compression (LRA 1.6–2.4 LU measured); every reel peaked between −0.8 and +1.5 dBTP (fixed, M12).

This edition **scores every picture event** at the reel's pace: a cinematic editor's toolkit of whooshes, deep hits, ticks, clicks and soft pops, about one cue every 1.0–1.5 s on shown beats; the talking head's plain word cuts stay dry.

### 11.1 The palette (cinematic: whoosh, weight, tick, click)
| Event | Ids (SOUNDS.md; rotate within each pool) | Level vs voice |
|---|---|---|
| Structure cut (hook → body, path B, chapter) | `abstract-hit-sub-bass-07`, `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5`, `boom-2025-01-08-02-40-38-utc-boom`, `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-6` | −10…−14 dB |
| Step / chapter whoosh | `whoosh-2025-01-08-02-32-33-utc-whoosh-03`, `whoosh-2025-01-08-02-32-33-utc-whoosh-06`, `swoosh-2025-01-08-03-02-26-utc-swoosh-06`, `whoosh-2025-01-08-02-32-33-utc-whoosh-01` | −12…−16 dB |
| Riser into a chapter | `riser`, `riser-2` (trim to 0.5–1 s; never longer under the voice) | −16 dB |
| ECU / punch / blur-zoom | `fast-swish-movement-fast-swish-movement`, `whoosh-2025-01-08-02-32-33-utc-whoosh-05`, `zoom-2025-05-09-19-11-57-utc-zoom-3` | −16 dB |
| Pull-out / zoom-out open (T-11, T-12) | `zoom-2025-05-09-19-11-57-utc-zoom-4` | −18 dB |
| Card flip / shape relay (T-05, EV-4) | `turn-whoosh-transition`, `whoosh-2025-01-08-02-32-33-utc-whoosh-07` | −18 dB |
| Word-card chain / title entrance | `simple-whoosh-382724`, `ultra-fast-swipe` | −20 dB |
| Flash / leak | `cinematic-transition-flash-05`, `flash-2025-08-27-06-37-47-utc-flash-3` | −16 dB |
| Count-up tick run | `clock-2025-08-27-06-56-42-utc-clock-3`, `telemetry-graph-rising-01-2025-08-27-06-33-50-utc-36877-telemetry-graph-rising-01-full` | −22 dB |
| Count landing (EV-5) | `05405-shine-ding` | −20 dB |
| Logo glow / notification | `ui-sparkle`, `17571-download-iphone-notification-ringtone-iphone-sms-ringtones`, `tech-appear-2025-02-11-05-48-28-utc-tech-appear-2` | −22 dB |
| Badge pop run (SD-6, EV-6) | `0552611`, `0552621`, `0552631` | −20 dB |
| **List item swap (the list cue)** | `swsh-arrow-feather-high-sdcl-archery166` on every item; `pop-up-pop-up`, `swipe-flicker-ding` as occasional accents | −18…−20 dB |
| Typewriter | `keyboard-typing-2025-02-18-23-33-14-utc-mountain-audio-typing-sound-17`, `keyboard-typing-2025-02-18-23-33-14-utc-mountain-audio-typing-sound-3` | −26 dB |
| Toggle / cursor | `digital-click`, `mouse-click-mouse-click` | −22 dB |
| Panel / stack / dock (T-08, T-13, T-17/18) | `ui-opening`, `swoosh-2025-01-08-03-02-26-utc-swoosh-02` | −20 dB |
| Pain beat / colour return (EV-7) | `impactfadeinout-tfx2697` (low) / `short-shine-2025-08-27-06-45-01-utc-short-shine-1` | −18 / −22 dB |
| S3 slam (≤ 3 per reel, EV-1) | `abstract-hit-sub-bass-07` (shared with the structure pool; counts toward its ledger) | −14 dB |
| Money rain | `money-2` | −22 dB |
| **CTA keyword** (EV-9) | `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-1` (deep boom) | −8…−10 dB |

**Never in this style:** comedic sets (boings, crowd reactions, voice clips, cartoon hits), glitches, cash registers, long risers under the voice, anything that sounds like a template pack (N9).

### 11.2 The SFX ledger (Studio Standard Rule)
- **Any file at most 2× in a reel,** except the one **list cue** (`swsh-arrow-feather-high-sdcl-archery166`, one per item / step).
- **No file on two consecutive cues;** rotate within each pool.
- **Density:** about one cue every 1.0–1.5 s on shown beats (cards, panels, rings, montages, the dock), each tied to a picture; plain word cuts on the talking head get nothing.
- **Never more than two cues overlapping;** never on a consonant (shift ±2 f).
- Whooshes and ticks are texture; the structure hits, the S3 slams and the keyword boom are what the viewer feels.

### 11.3 Silence and the mix
- **Go silent (no new SFX) for 0.3–0.5 s before the keyword and before "Here's why."'s payoff**, then land the hit.
- High-pass 80 Hz, de-ess, firm compression (LRA ≈ 2 LU); the voice is always the loudest thing.
- Master: **−14 LUFS, true peak ≤ −1.0 dBTP** (M12).

---

## §12 Footage handling

### 12.1 Shoot setups
| Setup | Description | Formats |
|---|---|---|
| **A: tripod desk mid-shot** (house) | Eye level, chest-up, monitors behind, shallow DOF | All |
| **A-mic: seated with a boom mic** | Chair, mic on a boom centred (x ≈ 540, y 1250–1920) | `FMT-STEPS`; captions move to the collar |
| **B: low-angle / handheld selfie** | Below eye level, wide lens (al3) | `FMT-LIST`; check the face rule first |

### 12.2 Crop table (starting values on 1080×1920)
| Layout | Placement |
|---|---|
| `L-HEAD` base | Head-top 560–600, eye line ≈ 780, face centre x 540; band above the head ≥ 470 px clear |
| Punch +15% / ECU | Scale about the face centre; stop where the hair-top reaches ≈ 40 px or the chin ≈ 1880 |
| `L-PANEL` slid | Same scale, head-top ≈ seam + 180 |
| `L-STACK` | Same scale, head-top ≈ 805 |
| `L-SPOT` card (adaptation) | Face-centred crop into a card ≥ 940 px wide (x 70–1010, ≈ 940×1000), head-top ≥ 60 px inside the card |
| `L-DOCK` (this edition) | The footage fills the card (cover-crop, x 70–1010, y ≈ 960–1550), face-centred; eyes to chin always inside, chin ≥ 60 px above the card's bottom; for a tight selfie the card grows taller; the footage never shrinks inside it and never sits on a blurred copy of itself |
| `L-LIST` | Head-top 600–650, eye line 765–800; card bottom tucked 100–170 px behind the hair |

### 12.3 The face rule in practice
- Measure the head box (hair-top to chin) on sampled frames of every take. A zoom, crop, card or box may never place the hair-top or the chin outside its frame.
- **Tight handheld selfie (hair or chin already out of frame):** **keep it full screen** (hair may touch the top edge, eyes to chin always in), limit the punch, and move the band text clear of the face; **never shrink it over a blurred copy of itself** (Studio Standard). A face card (spotlight, dock, the lower box of a split) stays ≥ 940 px wide and the footage fills it (cover-crop on the face), never a narrow pillar, never padded with blurred bars; if the head doesn't fit, the card grows taller first.
- Captions may cross the face; nothing else does.

### 12.3a Matte
Text behind the head needs a head-and-hair matte (al1, al2, al4, al5). If the matte is ragged, place the text fully above the hair instead of behind it.

### 12.4 Frame rate
References 25 fps (al3 24). Render at the plugin's rate; motion durations are 25 fps frames. Conform VFR phone footage first.

### 12.5 Audio
One clean voice track, cut word-tight (M3), chain in §11.

---

## §13 Output contract

### 13.1 Beat sheet schema (the first ```yaml``` block of the edit brief)
```yaml
- id: 7
  section: STEP-3                 # HOOK | LOOP | INTRO | CH-n | STEP-n | ITEM-n | PAIN | RECAP | CTA
  format: FMT-STEPS               # FMT-PARABLE | FMT-STEPS | FMT-CHAPTERS | FMT-LIST
  layout: L-PANEL                 # L-HEAD | L-SPLIT | L-PLATE | L-CARD | L-PANEL | L-STACK | L-SPOT | L-LIST | L-DOCK
  speaker: slid                   # full | slid | stack | dock | card | off
  spoken: "Step three, build your caption base layer"
  tiers: {S2: ["caption", "base"], S3: ["layer"]}
  trigger: "caption"
  onset_s: 16.08
  pattern: P-12
  element: "step 3 marker; panel: captions dialog zoomed, label 'CAPTIONS'"
  motion: "marker 3 f; panel cut; speaker slides down; panel eases 110% toward the dialog"
  face: "head-top 1050 under seam 870, chin in frame"
  transition: T-13
  sounds: [whoosh-2025-01-08-02-32-33-utc-whoosh-06]
  assets: [captions-dialog.png]
```

### 13.2 Hook proposal format (3 required)
```yaml
- name: "Pull-out + own work behind the head"
  formula: HF-2
  frame0: "MCU 130%, face whole, 'Creating' S2 flickering in"
  first_3s: "f0–14 pull-out · f16 carousel behind head · f35 '2→2026' digit build · f61 ECU 'isn't' S3"
  captions: ["Creating(S2)", "banger(S2)", "videos(S2)", "in", "2026(S2)", "isn't(S3)"]
  why: "Face + motion at f0, proof behind the head, the de-mystify word lands on the ECU"
```

### 13.3 What to show the creator
(1) the format and one line on why; (2) the 3 hook proposals with the recommended one and its frame 0; (3) the speaker map (full / slid / stack / dock / card / off per beat); (4) the beat sheet + transition map + the sound ledger; (5) the asset list (own proof, fetched pictures, recordings) with anything missing; (6) stills: frame 0, the 3 s mark, a key word landing at S2/S3, a card or panel at its fullest, the dock with its data, the tightest face crop, the ring landing on its word, the CTA keyword behind the head, the last frame.

---

## §14 Worked example and reference cheat sheet

### 14.1 al2 "My 7-step process for elite talking-head videos" as a plan
**Choices:** `FMT-STEPS` · HF-2 · H-2 · SD-2 step marker + SD-9 demonstrations · speaker full → slid → full → slid → full → stack · ending E-2 then the user's keyword · SFX only, no bed.

| t (s) | Spoken | On screen | Speaker / move | Sound |
|---|---|---|---|---|
| 0.00 | "Creating banger videos in 2026…" | S2 words; carousel of own work behind the head from f16; "2026" built digit by digit | full, T-11 pull-out | — |
| 2.44 | "…isn't that hard," | S3 "isn't", "hard" | ECU ~180%, face whole | whoosh |
| 3.76 | "so here's my step-by-step process…" | "STEP BY STEP" blue → white above the head; then kicker + title | full, punch-out | low hit |
| 7.44 | "Step one: colour grade your rough cut…" | marker "step 1"; flat footage wipes to graded (P-17); file drag (P-19); toggle (P-18) | full | T-06 leak + hit |
| 12.20 | "Step two: pick a song…" | audio meter full screen, song list scroll, play button | off (recording) | whoosh, click |
| 16.08 | "Step three: caption base layer and visual cues…" | marker; panel demo zoomed, S2 label | **slid** (T-13) | whoosh |
| 22.60 | "Step four: B-roll and multiple hooks…" | marker; B&W burst ×3 + colour burst ×4 (8–14 f), "B-Roll" label ≥ 56 px | full → off bursts | T-07 whoosh, low hits |
| 27.68 | "Step five: animate your captions and make them come alive." | top-band phrase build ("and make / alive.") | full | — |
| 30.96 | "Step six: sound design…" | off-white card "step 6", floating real file names (P-20), burst | off | whoosh |
| 36.84 | "Step seven: export at the highest quality… and you're done." | panel: export dialog, slider dragged | **slid** | whoosh, click |
| 40.88 | "If you want a much more detailed breakdown…" | "detailed breakdown" phrase build | full | — |
| 43.48 | "…including all the assets I used…" | **stack** panel flashes in; each real asset cuts in as named | **stack** (T-08) | flash |
| ~51.5 | "…comment [the user's keyword]…" | quoted keyword behind the head, 3.5 s | stack | keyword boom |
| 55.04 | — | hard stop | T-16 | — |

### 14.1a al1 "Two editors, six months" as a one-person plan (§3.9)
- **0.00** "Picture this…": adapted `L-SPLIT`, top = path A's real result (blue wash), bottom = the speaker, sharp at f0, S5 reveals on the seam.
- **3.56** path A's progress: full frame, glow proof (P-08) and notification count (P-09) above the head, boom. **8.68** path B: speaker B&W for ≤ 2 s, red S6 words (P-26), colour blooming back as the word cards start (EV-7). **11.72** word-card chain (P-05), one big moving word per card.
- **13.92** "Here's why.": +15% punch. **14.8** own-work montage (P-14) 1.5 s.
- **20.5–48.5** the reasons: full ↔ cards / spotlight with the speaker's clip; the views ring over the speaker docked (EV-8, P-10), landing on "perform." (EV-5); "No.2" behind the head with depth (EV-2). **48.48** path B again in B&W (≤ 2 s).
- **57.52** CTA: full, setup phrase in the top band, the user's keyword (E-1), boom, hard stop.

### 14.2 Cheat sheet (what to steal from each)
| Reel | Format | Steal | Don't copy |
|---|---|---|---|
| al1 | `FMT-PARABLE` | Weighted captions, blue/red characters, B&W + red word, word cards, ring with push, text behind the head | Blurred f0, 11 s faceless open, 20 px pills, other creators' thumbnails |
| al2 | `FMT-STEPS` | Pull-out + carousel hook, step marker beside the mic, slide-down panel, demos, stack parade | +1.5 dBTP, unreadable panel UI |
| al3 | `FMT-LIST` | Running serif header, picture card behind the cap, CTA as item 10 | Arm over the lens at f0, 0.7 s pauses, 40 px S1 |
| al4 | `FMT-LIST` | Banner drop + typewriter, money rain, logo swap on the name, keyword boom | Head-cutting blurred f0, the community offer |
| al5 | `FMT-CHAPTERS` | Banner + ghost numeral, typed promise card, "No.N", limit line, B&W pain, spotlight cards, recap badges, gradient keyword | German UI, 20 px handles, scarcity line |

---

## §15 Look at your frames
Not a checklist; the questions the best editor asks while scrubbing:
- **Frame 0, sound off:** is the speaker sharp, whole face, a word on, the hook title already moving? Would I stop scrolling?
- **The frame:** is their video full screen or in a designed box (rounded, rimmed, on the style's ground), never a sharp rectangle over its own blur?
- **Every word:** on screen, one at a time, with the right weight, just under the chin, readable on a phone at arm's length? Does each key word land with weight?
- **The speaker:** does he move (full, slid, dock, card, off) and come back full for every claim? Is any layout unchanged for more than ~6–9 s without a push, a punch or a picture?
- **Every picture:** on the word that names it? One hero? Something moving inside it? Is any frame mostly empty for more than ~0.7 s?
- **Scale:** shrink the still to thumbnail size. Is the key word, the ring or the card the first thing I see? Cards ≥ 860 px, the ring ≥ 600 px, a face card ≥ 940 px wide, never a pillar?
- **Depth:** does the type behind the head sit there like it was lit on the wall, with the hair in front?
- **Colour:** rich and warm, never pale? B&W only on the pain beat, and under 2 s?
- **The count:** can I always see where we are (the step, the chapter, the item) and does the recap pay it off?
- **Sound:** whooshes, hits, ticks and clicks on their pictures; no file overused; silence before the keyword; no music?
- **Vibe:** expensive, fast, certain. Anything templated or noisy comes out.

---

## §16 Build + render

- **Pipeline:** the plugin's edit skill: plan in the edit brief, draw every frame in `reel.js` (`frame(t)`), look at stills, then storyboard and render.
- **Fonts (bundled):** Inter Tight (VF), Instrument Serif Regular + Italic, Bodoni Moda Italic (VF). Pre-paint curly quotes ‘ ’ and ◉ before the first frame.
- **Component map:**

| Component | Role |
|---|---|
| `Speaker(t)` | Full / slid / stack / dock / card states, punches and pushes, the slow push on held beats, capped by the face box (§12.3); a tight selfie stays full screen or fills its card (cover-crop on the face), never over its blurred copy |
| `HeadMatte` | Hair-and-head matte for text behind the head |
| `Word(t)` | One-word captions with tiers S1–S7, fade + rise, colour flash, blue-box reveal |
| `TopBand` | Titles, "No.N", step promise, keyword, ring, profile card, carousel, particles behind the head |
| `WordCard`, `TypedCard` | `L-CARD`, P-05…P-07 |
| `Panel`, `StackPanel`, `Spotlight` | `L-PANEL`, `L-STACK`, `L-SPOT` |
| `ListHeader`, `ItemCard`, `Banner` | `L-LIST`, title box, typewriter |
| `Ring`, `Glow`, `Notify`, `Badges`, `LimitLine`, `Toggle`, `Wipe` | §8.3 patterns |
| `Flip`, `Leak`, `BlurZoom`, `Flash`, `Grade` | T-05, T-06, T-07, T-08, T-04 |
| `Dock`, `ShapeRelay`, `ColourBloom` | T-17/T-18 (EV-8), T-19 (EV-4), EV-7 |
| `Land(word)`, `DepthBand`, `CountLand`, `Spine`, `KeywordDrop` | EV-1, EV-2, EV-5, EV-6, EV-9 |

- **Final:** 1080×1920, H.264, AAC; the frame count, loudness, true peak and a contact sheet of the final file.

---

## Appendix A. Evidence map
| Rule / element | Reels |
|---|---|
| Two edit styles: cinematic (3 variants) + list template | al1, al2, al5 / al3, al4 |
| One word at a time, importance-sized S1/S2/S3 | 5/5 |
| Pauses cut, 3.5–4.3 w/s | 5/5 (al3 fix) |
| Text behind the head (matte) | al1, al2, al4, al5 (al3 card behind the cap) |
| Full-frame anchor + cut-aways | al1, al5; slide-down under panels al2 |
| Word cards paper / navy / blue | al1, al2, al5 |
| Blue/red characters, B&W pain + red word | al1; B&W pain al5 |
| Count-up ring | al1, al3, al5 |
| Step marker / chapter numeral / running header | al2 / al1, al5 / al3, al4 |
| Banner or title box + typewriter | al3, al4, al5 |
| Spotlight cards | al5 |
| Quoted keyword behind the head + boom | al1, al4, al5 (al2 in the stack) |
| Bed under the voice (the references ran one; we don't: SFX only) | al1, al2, al3, al5 (al4 faint) |
| Booms on structure cuts, whooshes on steps, ticks under counters | al1, al2, al5; item whooshes al3, al4 |
| Hard stop 0.30–0.35 s | 5/5 |
| Fixes: frame 0 (al1, al3, al4), face crops (al1, al4, al5), small text (all), true peak (all), pauses (al3), UI language (al5), thumbnails (al1), CTA offer (al1, al4, al5) | as listed |
| The creator back by ~4 s and the speaker moving (including the dock); sizes are floors (S1 ≥ 64 px just under the chin, labels ≥ 48 px, cards ≥ 860 px, the ring ≥ 600 px); weighted landings, depth behind the head, the edit proving itself, shape relays, counts that land, the progress spine, pain to colour, the keyword drop; never pale (B&W ≤ 2 s); the whole face always (selfie ≥ 88%, face cards ≥ 940 px); a full SFX score with the ledger rule, no music; no imposed checks | **The creator's directions, 11–12 Oct 2026** |
