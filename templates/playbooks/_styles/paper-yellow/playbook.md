# Poster Vlog Playbook (v2, "Yellow Poster, Cream Page, Elevated" edition, for Claude Opus 5.5)

> **In this plugin:** this file is the whole playbook: every measured value and recipe from the 5 reference reels is in it, and there is no other playbook file to open. Frame counts are measured at the references' **23.976 fps** (written "f"): convert with t = f / 23.976 when you draw (`frame(t)` runs at the render fps). Positions are on a 1080×1920 frame (the references are 720×1280, scaled ×1.5). The per-reel findings this file cites (`oa1…oa5`) are not shipped. Sounds are picked by id from SOUNDS.md; commands are in the edit skill's REFERENCE.md. The page gives you `FACE(n)` and `FACE0` (with `head_top` and `chin`) for every speaker frame.

**Purpose:** you (Claude) receive a talking-head video plus its script. Use this document to **ideate and build** every format choice, poster title, caption, card, transition and sound, then edit the Reel so it looks and sounds like a premium American creator-vlog explainer: a calm, warm voice; a picture for every noun; **big yellow poster words that sit behind the speaker's head**; cinematic serif subtitles you can actually read; and a **cream page** where the proof lives in cards, built with such taste that the viewer keeps watching for how it looks and stays for what it says.

**What v2 is:** a frame-by-frame analysis of 5 finished reels by Adrian (@omgadrian), a US lifestyle / filmmaking creator: oa1 a store tour ("shopping in person is way better than online"), oa2 "there's three types of content creators", oa3 "cinematic vertical video composition" (a tutorial), oa4 "this decision changed my life" (a year-of-posting recap) and oa5 a branded photo-editing series episode. The analysis covered cut lists, layout and colour measurements, caption timing, motion-graphic frame recipes and audio (the music beds, which we don't use; SFX; loudness). Then **elevated ten times** by the best video editor and creative director in the world: poster words that sit *in the room* (the cap in front, a contact shadow, the scene's light on their edge), a cream page that feels like real paper under a real lamp, cards and polaroids that land with weight and develop, a marker drawn by a hand, numbers that build with weight, the speaker stepping onto the page in his own card and back, the hero word carried from the face onto the page, a warm cinematic grade that is never pale, and a calm, tactile sound score (paper, shutter, marker, air, one deep boom at the turn). All measured layouts, recipes and rules are kept; each one is **observed** (seen in the reels, with the most consistent value chosen as the house standard) or a **fix** (something a reel got wrong; marked **(fix)**). Where a reference reel and a direction disagree, **the directions win**.

**Measured sizes are floors, not targets.** The references set subtitles at 42–45 px, thin script at 40–70 px and the UI inside example cards at ~18–20 px; on a phone that reads as texture, not words. Here:
- **Captions:** `CAP-SUB` **86–96 px**, every spoken word, **just under the chin** on full frame and in the band under the cards on the page; script connectors **≥ 72 px**; labels, UI and card titles **≥ 48 px**. Chunk shorter, never shrink. (The 12 Oct test drew the serif subtitle at ≈ 48 px and it read thin and small under the big posters; set it at 86–96 px, weight 700, hard shadow.)
- **The page is filled, not dotted:** the hero card, badge list or polaroid spans **x ≈ 70–1010** and the page's lower half carries the next element or the speaker dock; a single small card on a big cream page for more than ~0.7 s reads as empty. Frame 0 already has its poster word up, big.
- **The hero of every beat is big:** the poster hero line auto-fits to ~850 px; the page card fills its slot (the 9:16 card 700×1245, a 16:9 card ≥ 960 px wide, a single object on the page ≥ 760 px wide); digit blocks ≥ 690 px wide; the chapter numeral ~735 px tall; polaroids and face cards **≥ 940 px wide**; a carousel card ≥ 560 px wide.
- **No frame is mostly empty for more than ~0.7 s:** the page always holds a card that fills its slot; the sky above the head holds a poster phrase or the next one is on its way. The only named exceptions are the walk-out endings (the poster holding over the empty set, ≤ 2 s).
- **Minimal means few, not small:** one poster phrase and one card at a time (that is the taste), each one big.
- **The selfie stays big:** a tight selfie stays full screen (the hair or cap may touch the top edge; the poster words move, not the video); a face card (polaroid, page dock) is **≥ 940 px wide**, filled by the footage, never a narrow pillar, never shrunk over its own blur.

**Never pale.** The grade is warm and rich: warm skin, deep blacks (never lifted or milky), saturated skies. The cream page is a background colour, never a washed-out speaker. B&W is a short named beat only (a doubt or reframe line ≤ 2 s; a montage of inserts ≤ 3 s), and colour comes back on the action (§4.5, EV-7).

**Full screen or a box, never any footage or picture over its own blur** (Naman, 13 Oct): the creator's video either fills the whole frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground) that it fills completely, cropped around the face. The same for every other medium: screen recordings, landscape clips, photos, receipts, diagrams and other people's footage either fill the frame (cover-cropped to the part that matters, or a push-in) or sit in a designed box on the style's own ground or scene (its colour, gradient, texture, grid or drawn set). Never shrink anything over a blurred or darkened copy of itself, never pad a band or box with blurred side bars, never set a card on the creator's blurred frame: a hard rectangle against its own blur looks cheap. A tight selfie stays full screen: move or shrink the text above the head, not the video; the hair may touch the top edge, eyes to chin are always in. When the whole head must be seen, use a box layout where it fits.

**How to use this file:**
- Follow §1 (procedure) in order.
- Look up visuals by ID: formats `FMT-…`, hook formulas `HF-…`, hook visuals `H-…`, structure devices `SD-…`, graphic families `G-…`, patterns `P-…`, transitions `T-…`, elevated devices `EV-…`.
- Only §2's craft never bends. Everything else, including the house grammar (§2.1), is direction: adapt it with a one-line reason in the plan.

### The feel (read this twice)
This is **a cinematic magazine that talks to you.** A warm, calm voice; behind his head, huge yellow words like a poster pasted on the wall of the room, his cap sitting in front of them. When he shows you something, the frame turns to a sheet of cream paper and the example lands on it like a print laid on a desk under a lamp, a yellow marker circling exactly the thing he means as he says it. A polaroid of him slides in and develops; a number builds digit by digit in the sky above him; then he's back full frame, saying the rule, unhurried. Nothing shouts and nothing bounces, yet something is always moving: the slow push, the poster drifting against it, the light crossing the paper. It feels **tasteful, warm and effortless**: designed like a magazine, shot like a film, paced like a friend talking. The viewer should finish thinking *"I want my videos to look like this."* If it looks like a caption template on a talking head, it's wrong; if it looks busy, loud or bouncy, it's wrong too.

**Who the reference creator is:** a warm, relaxed American creator in his late 20s/30s (cap, tinted glasses, tattoos) who makes cinematic vertical vlogs, filmmaking tips, skits and milestone recaps. He talks **calmly and smoothly**, never shouts, and lets the pictures carry the energy. His authority comes from taste: every frame looks composed, every claim gets a picture, and the typography looks like a magazine poster.

**Audience (ICP):** English-speaking 18–35s who follow lifestyle, tech and creator content: aspiring creators and filmmakers, people who like "premium" vlogs, couples, phone photographers. They scroll fast, respond to a beautiful first frame and a bold claim, and stay for a picture on every line. They want **taste and a takeaway**, not a lecture.

**Style lineage:** a cinematic creator-vlog with editorial typography, built from four layers:
1. **Footage layer:** composed, graded vertical footage (tripod sets, selfie arm's-length, 0.5× POV, macros, top-down wides). The speaker is either **full frame** or **absent** (voice-over over B-roll); when he is "shown small", it is in a **polaroid, a 9:16 card or a cut-out on paper**, never a picture-in-picture over B-roll.
2. **Poster layer:** big flat-yellow display words (condensed caps or extended caps), built word by word on the spoken word, often **layered behind the speaker's head, cap or a foreground object**, with small handwritten-script or italic-serif connector words around them.
3. **Page layer:** a paper backdrop (cream, beige-vignetted, or grid paper) that holds the proof: rounded 9:16 / 16:9 cards, phone-UI cards, polaroids, framed photos, hand-drawn yellow marker annotations, giant numerals.
4. **Subtitle layer:** one line of lemon-yellow **old-style serif** subtitles with a hard black drop shadow, sentence case, like a film subtitle (measured at y ≈ 1488 and 42–45 px; here 86–96 px, every word, just under the chin on full frame).
- **This style is not one layout.** The same caption system, poster type and cream page carry **five formats** (§3): a cinematic tour, an archetype skit, a tutorial on a cream page, a milestone recap and a branded-series tutorial. Pick the format from the script.
- **And the speaker moves.** He is **full screen** for every first-person claim; the screen **goes to the page** (cream, beige or grid paper) when proof is shown, sometimes with **him in a polaroid or a card on that page**; this edition adds **the page dock**: when he keeps talking over a number or a proof, he shrinks into a wide photo card on the lower page and grows back (§3.8a); and it **comes back full screen** for the next claim and the ending (§3.0a). A reel never sits on the page from frame 0, and it never opens on an empty frame (two references did: fixed in §6).
- **The references were shot with a crew** (location B-roll, sets, a car, a second person). Users of this plugin mostly have **one talking-head take**. §3.8 is a clearly marked **adaptation**: the same grammar for one person talking to their own camera, using the devices seen in these reels plus this edition's elevations (§8.7).

### Creator directives
| # | Directive | Where it lives |
|---|---|---|
| D1 | **Ten times better, same soul.** Keep the yellow poster words behind the head, the cream page and its card slot, the serif subtitles, the polaroids, the calm voice; raise the craft: words that sit in the room, real paper, cards with weight, a hand-drawn marker, one hero per frame. Never loud, never bouncy, never templated | The feel, §8.0, §8.7 |
| D2 | **The speaker moves:** full frame at frame 0 and for every claim and the ending; the page for proof (absent, in a polaroid or card, or in the page dock); back full frame. No layout unchanged for more than ~6–8 s; frame 0 is never empty | §3.0a, §3.8a |
| D3 | **Seamless motion, high retention:** a visual change every ≤ 1.5 s, cut on the word that names it; the hero word carries from the face onto the page (EV-8); inside every beat something keeps moving (the push, the poster's parallax, the light on the paper, the marker drawing) | §8.0, §9, §10 |
| D4 | **Sound is scored like Naman's, at this style's calm:** paper on the page, a shutter on the polaroid, the marker on its stroke, air under the poster's rise, a warm pop on every numbered item, one deep boom at the turn; about one cue every 1.6–2.4 s on shown beats. **No SFX file more than 2× in a reel** (the one list cue excepted). **No music bed, ever** | §11 |
| D5 | **The whole face is always visible:** cap/hair to chin at every push, punch, polaroid, card, carousel, cut-out and dock; a tight selfie stays full screen or fills a ≥ 940 px face card, never shrunk over its own blur, never a pillar | §2, §3.7, §12.2 |
| D6 | **Captions are seen:** every spoken word, `CAP-SUB` 86–96 px, **just under the chin** on full frame, in the band under the cards on the page; nothing a viewer must read under 48 px | §5 |
| D7 | **Never pale, and no imposed checks.** Warm, rich colour and deep blacks always; B&W only as a short named beat. This file gives taste, recipes and reasons; you decide like the best editor and creative director in the world. Only craft never bends | §2, §4.5 |

### The reference reels → this edition, at a glance
| Area | The reference reels | This edition |
|---|---|---|
| The speaker | Full frame for claims, the page for proof, polaroid / card moments; the live talking head never shrinks in the tutorial | The same grammar, plus **the page dock** (EV-9, §3.8a): he shrinks into a wide photo card under a number or proof while he talks, and grows back on the claim |
| Captions | Serif lemon subtitle at y ≈ 1488, 42–45 px; absent under the hook posters | **86–96 px, every spoken word**, just under the chin on full frame, the band under the cards on the page |
| Poster words | Flat yellow, behind the cap | **In the room** (EV-1): a contact shadow from the cap, the scene's light on their edge, parallax against the push, a soft settle; the hero word **carries onto the page** as a tape label (EV-8) |
| The page | Flat cream, cards hard-cut in, no shadow | **Real paper** (EV-2): grain, a warm lamp gradient, a slow light sweep, cards that land like prints on a desk; **the slot remembers** (EV-6) |
| Polaroids | White flash in, stills swap, flash out | The photo **develops** (EV-3); the polaroid ≥ 940 px wide |
| Marker | Strokes write on in 6–8 f | **Drawn by a hand** (EV-4): pressure, taper, a slight wobble, arrowhead last, finishing on the named word |
| Numbers | Digit builds, hard pops | **With weight** (EV-5): each digit drops in, the block glides to re-centre, the last digit blooms |
| Grade | Warm iPhone cinematic with slightly lifted blacks; B&W items | **Never pale:** deep blacks, warm skin; B&W ≤ 2 s and colour **blooms back** on the action (EV-7) |
| Small print | Labels 40 px, script 40–70 px thin, UI in cards ~18–20 px | Labels and UI ≥ 48 px, script ≥ 72 px |
| Sound | A music bed under the voice + 0–5 designed sounds | **No bed.** A calm, tactile score on every picture event with the ledger rule (§11) |
| Checks | MUST / NEVER lists, a checkpoint, a QA list | **Craft only** (§2); the house grammar (§2.1); questions to ask your frames (§15) |

### Formats at a glance (the speaker's full screen ↔ page movement in §3.0a applies to all five)
| Area | `FMT-TOUR` cinematic tour (oa1) | `FMT-ARCHETYPE` skit explainer (oa2) | `FMT-PAGE` tutorial on a cream page (oa3) | `FMT-RECAP` milestone recap (oa4) | `FMT-SERIES` branded-series tutorial (oa5) |
|---|---|---|---|---|---|
| Use when | A place, product or experience walked through ("I went to X, here's everything") | N types / N mistakes / N kinds of people, then a reframe and an offer | "How I do X" with N numbered tips, each proved by an example | A milestone, a year, a number that changed something, a thank-you | A recurring series episode: problem skit → host → step-by-step screen demo → result |
| Speaker in claims | Full frame (selfie, mirror, tripod) | Full frame, a new set / grade per item | Full frame at a desk, outdoors, seated | Full frame, cinematic wide or close | Full frame host on a set |
| Proof shown as | Full-frame B-roll per noun (speaker absent, VO) | Floating callback cards, grid-paper carousel, polaroid pop-out, UI mocks | Rounded 9:16 / 16:9 cards on cream `#FAF4E1`, annotations, a white centre line, numeral plates | 9:16 cards on cream `#FDFCE4` swapping every ~0.5 s ("receipts") | Phone-UI card on vignetted paper + full-frame button zooms, framed photo on paper |
| The speaker shrinks? | Once: into a **polaroid on beige paper** (2 s) | Yes, 3×: small cut-out among cards, a card on grid paper, polaroids | No: examples go into cards; he returns full screen for each rule | No: his reels go into cards; he returns full screen for each sincere line | No: full frame or absent |
| Pace | 3.5 words/s, a cut every ~1.04 s | 3.0 words/s, a visual change every ~1.5 s | 3.2 words/s, cuts on sentence ends | 2.9 words/s, montages at 0.5 s | 3.5 words/s, frantic B-roll, slow UI steps |
| Ending | Loops back to the opening shot | Walks out of frame, title holds, sound dead | Blooper + text end card | Walks out, empty frame holds | Punch-in on the sign-off joke |

- **This edition** adds the **page dock** to every format that has a number or a proof he talks over (§3.8a): he shrinks into a wide photo card on the page and grows back for the claim.

### Quick index
| § | What |
|---|---|
| §1–§2 | Procedure; craft that never bends + the house grammar (M/N) |
| §3 | Formats, layouts, the speaker's movement, framing the face, **§3.8 adaptation for one talking-head take**, **§3.8a the page dock**, safe zones |
| §4 | Colour tokens, the meaning of colour, never pale (§4.5) |
| §5 | Type tokens and caption styles (`CAP-SUB`, poster words, connectors, numerals, labels) |
| §6 | Hook system (the 10× hook, formulas, visuals, timing, endings, CTA) |
| §7 | Structure devices: chapters, archetypes, callbacks, receipts, bookends, act breaks, open loops |
| §8 | Graphics / B-roll: the 10× layer, families `G-…`, patterns `P-…`, line → pattern lookup, density, assets, elevated devices `EV-…` |
| §9 | Transition system `T-01…T-20`: recipes, grammar, map, budget |
| §10 | Motion tokens, camera, layer order, finishing |
| §11 | Sound: the palette (ids from SOUNDS.md), the SFX ledger, silence, the mix |
| §12 | Footage handling (setups, crop table, matte, frame rate, audio) |
| §13 | Output contract: beat sheet schema, hook proposals, what to show the creator |
| §14 | Worked example (oa3 rebuilt as a plan) + reference-reel cheat sheet |
| §15–§16 | Look at your frames; build + render |
| App. A | Evidence map (which reels each rule comes from) |

---

## §1 Procedure (follow in order)

1. **Inventory.** Probe the footage; identify the setup (§12.1). Note the **headroom above the head** (the poster words live there) and find the tightest frame: any shot where the hair or chin leaves the frame gets the §3.7 fix before you plan a single zoom.
2. **Transcribe** with word timings; subtitles are the speaker's words, **every spoken word**, sentence case (§5.2). Cut breaths and dead air (M2).
3. **List every noun, number and key word** with its onset. Each noun gets a picture (B-roll or a card on the page); each key word or number gets a poster word (M3, M4).
4. **Choose the format** (§3.0) with a one-line reason. One talking-head take with no B-roll: read §3.8 first.
5. **Plan the speaker's movement** (§3.0a): every beat is **full**, **page** (proof in a card; speaker absent or in a polaroid/card), **dock** (he keeps talking in a wide photo card under the proof, §3.8a) or **absent** (full-frame B-roll / UI). Full at f0; page on the first proof; full for every claim and the ending; no layout unchanged for more than ~6–8 s.
6. **Segment:** `HOOK` (0–4 s), `SETUP`, body `ITEM`s / `TIP`s / `STOP`s, `TURN`, `PAYOFF`, `CTA`, `END`.
7. **Classify every line** (§8.4): its trigger word and its subtitle chunks (2–6 words).
8. **Ideate 3 hooks** (§6.0, §6): formula, frame 0 (speaker in shot, first poster word mid-rise behind the head), first 3 s of events, first two subtitles. Recommend one.
9. **Fill the beat sheet** (§13.1) and the **transition map** (§9.3); check the budget (§9.4).
10. **The 10× pass and the score** (§8.0, §8.7, §11): for every beat, its hero, how it anticipates, lands and settles, what keeps moving inside it, where the depth is; then score every picture event (paper on the page, shutter on the polaroid, marker on its stroke, air under a poster phrase, the list pop on every numbered item, the turn boom) and log the sound ledger. Real ids only. **Attack the plan:** where does a layout sit unchanged for more than ~6–8 s? Where is a frame mostly empty? Where is something small meant to be read? Where is the colour flat or pale? Which noun has no picture? Which number could build in the sky, which proof could carry the dock? Fix it in the plan.
11. **Produce the assets** (§8.6): stills from the take, fetched or drawn proof, UI mocks. Never other creators' reels or sponsor lockups.
12. **Show the creator** the plan and the stills (§13.3).
13. **Build section by section,** look at your frames (§15): whole face? every word readable on a phone? Score, render (§16).

---

## §2 Craft that never bends
- **The whole face is always visible:** cap/hair to chin in every full frame, push, punch-in, polaroid, card, carousel, cut-out and dock; a tight selfie stays full screen (cap/hair may touch the top edge, eyes to chin always in) or fills a ≥ 940 px face card on the page, never shrunk over its own blurred frame, never a narrow pillar. Captions may cross the face.
- **Text never sits on text;** a poster word never over the eyes or mouth.
- **Sound in sync:** every SFX on the frame its picture lands, never on a consonant (±2 f); the voice is always the loudest thing.
- **True and exact:** proof is real (own footage, real captures, honest mocks, licensed images), every word spelled as said; no other creators' reels, no sponsor plugs.
- **Readable at phone size:** `CAP-SUB` ≥ 72 px, script ≥ 72 px, labels, UI and card titles ≥ 48 px.
- **Never pale:** warm, rich colour and deep blacks on the footage; B&W only as a short named beat (§4.5).
- **Loudness:** −14 LUFS integrated, true peak ≤ −1.0 dBTP; a deliberate ending.

Everything else is direction. You decide; write your reasons into the plan.

### 2.1 The house grammar (what makes it this style)
Not checks: this is what the five reference reels do every time, and why it works. Break one only with a reason in the plan. (The IDs are kept because other sections cite them.)
- M1. **One format per reel** (§3.0) with a written reason, **and the speaker moves** (§3.0a): full at f0, to the page for proof (or the page dock, §3.8a), back to full for every claim and the ending. Page stretches last **2–8.5 s** (measured max: oa4 8.6 s, oa3 8.4 s), except a step-by-step screen demo in `FMT-SERIES`.
- M2. **Gapless voice:** 2.9–3.5 words/s, breaths cut (oa1: no gap > 0.42 s). Pauses only as designed beats: a chapter breather 0.7–1.8 s (oa3), a comedic beat ≤ 0.84 s (oa5), a natural-sound vlog beat ≤ 2.6 s (`FMT-RECAP`).
- M3. **A picture for every noun** (oa1: store, logo, kiosk, DJ wall, laser, cafe). A noun with no footage becomes a **card on the page**, never a bare talking head.
- M4. **Poster words land on the spoken word:** each hero word rises in 4–5 f and lands **0–2 f early**; one phrase at a time; the old phrase exits blur-up 3–4 f or dies with the cut.
- M5. **Poster words live in the negative space, behind the speaker** (matte, §12.3), never over the eyes; the cap may cover the lower part of a hero word if ≥ 60% of each letter shows.
- M6. **Frame 0 is never empty** (fix: oa3, oa4 opened on asphalt / sky with him entering at the edge and no text until f10): the speaker (or the real thing) is in position and the first poster word is already writing. **≥ 5 visual changes in the first 3 s** (measured 7, 6, 3, 3, 9); this edition aims for 8–10 (§6.0).
- M7. **The whole face is always visible**, hair/cap to chin, at every zoom, punch-in, crop, polaroid, card, carousel and cut-out (§3.7). The face decides how far a crop goes. When footage is tighter than that (a handheld selfie with the cap and chin leaving the frame), **keep it full screen as shot (the cap may touch the top edge; eyes to chin always in) and move the poster words, or put it in a ≥ 940 px face card on the page that it fills,** never shrunk over a blurred copy of itself and never punched into the head. **Captions may cross the face.**
- M8. **Readable at phone size** (fix): `CAP-SUB` **86–96 px** (references ≈ 42–45 px), yellow + hard shadow on footage, **near-black ink on paper and white** (the creator already flips his hero words to black on white); script connectors ≥ 72 px; labels, UI and card titles ≥ 48 px; legal-only small print ≥ 36 px (§5.6).
- M9. **One poster yellow per reel:** warm `#FAD004` with condensed caps or lemon `#FAE62F` with extended caps; `#0C0C0C` on white/cream.
- M10. **Proof is real** (fix): own footage, own reels, real captures, honest drawn mocks, or licensed / public-domain images with a credit. No other creators' reels (oa4), no copyrighted famous photos (oa3), no "simulated" screens.
- M11. **No third-party plugs** (fix: oa5's sponsor lockup and disclaimer slate, oa1's sponsored framing). That slot becomes the creator's own series card (§5.7) or CTA.
- M12. **Audio:** −14 LUFS, **true peak ≤ −1.0 dBTP** (fix: oa3 −10.9 / oa4 −10.4 LUFS at 0.0 dBTP; oa1, oa5 at −0.3 / −0.1 dBTP).
- M13. **Spelling exact** (fix): "LET'S" not "LETS" (oa4); no stray capitals ("dead Space.", oa3); subtitles match the words said.
- M14. **Format changes are designed moves** (§9); inside a format, hard cuts.
- M15. **End deliberately** (§6.6); no accidental black tail.
- M16. **Every spoken word is on screen** (the creator's direction): `CAP-SUB` carries every word, just under the chin on full frame (§5.2); it drops only while a hook poster spells the very same words.
- M17. **Never pale** (the creator's direction, 12 Oct 2026): the footage keeps warm skin, deep blacks and saturated skies; B&W only as a short named beat with colour returning on the action (§4.5).
- M18. **Measured sizes are floors:** the hero of every beat is big (the poster hero line ~850 px wide, the card filling its slot, polaroids and face cards ≥ 940 px wide), and no frame is mostly empty for more than ~0.7 s.
- M19. **Something moves inside every beat:** a slow push (+2–4%) under a held face, the poster drifting against it, a card settling, the light crossing the paper, the marker drawing. Nothing is still for more than ~1.5 s.

**Never in this style:**
- N1. Picture-in-picture over B-roll, split screens, face bubbles. He is full frame, absent, or on the page (a polaroid, a card, or the wide page dock, §3.8a); never a corner bubble or a narrow pillar.
- N2. A poster word over the eyes or mouth; text on text.
- N3. Bouncy, elastic or overshooting type.
- N4. Emoji, stickers, icon packs, stock footage.
- N5. Boxed, pill or karaoke captions; highlight colours inside the subtitle.
- N6. Text under the floor in §5.6 (fix: 42–45 px subtitles, thin 40–50 px script on bright skies, a ~15 px disclaimer, ~18–20 px burned-in subtitles in example cards).
- N7. A crop, zoom or card that cuts the cap/hair or chin (fix: oa3 38.4–44.8 s lean-in from the right edge; oa1 ~43 s low-angle selfie; oa2 24.9–25.2 s extreme close-up).
- N8. Two poster yellows in a reel; yellow poster words on white.
- N9. Sound on a plain cut or under the talking head with nothing shown; cartoon, meme or glitch sounds; any file over its ledger (§11).
- N10. Integrated loudness hotter than −13 LUFS or a true peak above −1.0 dBTP.
- N11. Music, ever: no bed, drone, pad or loop under the voice (SFX only, §11).
- N12. A pale, faded, lifted-black or desaturated look on the footage outside the named B&W beats (M17).
- N13. A frame that is mostly empty for more than ~0.7 s (an empty sky with no poster coming, an empty page, a card smaller than its slot), except the walk-out endings.

---

## §3 Formats, layouts and the speaker's movement

### 3.0 Choosing the format
| The script… | Format | Why |
|---|---|---|
| …walks through a place, product or experience; lots of nouns | `FMT-TOUR` | One picture per noun on a ~1 s pulse gives the walk-through a rhythm |
| …lists N types / mistakes / people, then flips to a reframe and an offer | `FMT-ARCHETYPE` | Each item gets its own look; callbacks pay off the list |
| …teaches "how I do X" in N numbered tips with examples | `FMT-PAGE` | The cream page holds the example; he states each rule full frame |
| …celebrates a milestone, a year or a number, and thanks people | `FMT-RECAP` | Numbers as giant type, receipts as a card montage, a riser-and-drop act break |
| …is an episode of a recurring series with a screen demo | `FMT-SERIES` | Series card, phone-UI card, a zoom into every button |
| …is an opinion with no B-roll at all (one take) | `FMT-PAGE` or `FMT-ARCHETYPE` via §3.8 | The page and the poster words carry every noun |

### 3.0a The speaker's movement: full screen ↔ page (every reel)
The format decides what the page shows; **this decides where the speaker is, beat by beat.**
| Beat | Speaker | Measured |
|---|---|---|
| **Hook (frame 0 → ~4 s)** | **Full frame**, composed wide or medium, the first poster word writing on from f0 | oa1 0–4.0, oa2 0–2.75, oa3 0–4.6, oa4 0–19.3 (with inserts), oa5 0–2.67 |
| **First proof** | **To the page**: the frame cuts or flashes to the page, the proof card lands on it (speaker absent or inside a card) | oa3 6.34 (card on black → cream at 11.26), oa4 19.27, oa2 26.32 |
| **"Me" beats on the page** | The speaker himself **in a polaroid / card on the page** (his stills, his earlier reels, a small cut-out) | oa1 28.95–31.0 (polaroid of 3 selfies, 2.05 s), oa2 26.3–28.2 (small B&W cut-out among 3 callback cards), 29.4–31.8 (his reel in a carousel card), 44.75–49.3 (polaroids) |
| **A number or proof he keeps talking over** | **The page dock** (this edition, §3.8a): he shrinks from full frame into a wide photo card on the lower page while the proof sits above; he grows back to full frame on the claim | adaptation, built from oa1's polaroid, oa2's card-on-grid and oa3's card slot |
| **Claim / rule / sincere line** | **Back to full frame**; the page disappears completely | oa3 14.68, 28.28; oa4 27.95, 42.29; oa2 31.78, 52.26 |
| **Next proof** | To the page again; same page colour, same card slot | oa3 20.35; oa4 33.53, 47.76 |
| **Ending** | **Full frame** for the last line, then the format's ending (§6.6) | 5/5 end on him full frame or on his empty frame |

- **Budget:** 2–4 full ↔ page cycles per 60 s (oa4: 3 in 85 s; oa3: 4 in 85 s; oa2: 3 in 58 s). Each full-frame stretch ≥ 1.5 s; each page stretch 2–8.5 s.
- **The move:** cut on the pulse (oa3, oa4), a 3–4 f white flash into and out of a polaroid (oa1), a speck-to-card scale-in 4–6 f (oa5), a card fly-in 3–5 f (oa2), a light-leak burn into the CTA (oa2). This edition adds the **poster carry** (T-20, EV-8) and the **dock** (T-18 / T-19). Never a slow push or a dissolve.
- **The page holds its state:** when he returns full screen and comes back, the page is the same colour and the card is in the same slot (oa3: x 190–890 every time; oa4: x 162–920 every time).

### 3.1 `HOOK` (0–4 s)
- **Frame 0:** the speaker in position in one composed, unusual frame (or the real subject: oa1's store mirror), the first poster word already writing (oa1, oa5 at f0; fix for oa3/oa4, whose text came at f10 over an empty frame). That frame carries 2.7–4.6 s while the poster builds; the first cut lands at 2.7–4.6 s (§6).

### 3.2 `FMT-TOUR`: cinematic tour (oa1)
- **Speaker:** selfie arm's length (eye line y ≈ 825, face x 370–540 because the other hand holds the product right, face width ≈ 45% of frame), mirror selfies (small inside the mirror shape), tripod walk-ins and sit-downs. When B-roll shows, he is **absent**: B-roll fully replaces him while the VO runs. About 35–40% of shots show his face.
- **B-roll:** product macros with shallow depth of field, signage, kiosks, hands (0.5× POV top-down), staff interactions, the venue's details. One shot per noun.
- **Poster words:** only in the hook (0–4.0 s), one setup line (7.0–7.9 "The perfect / [PRODUCT]"), and one section change (44.0–45.3 "And something / NEW HERE / as well", built behind him walking up the stairs).
- **The one shrink:** "it's hard to pick which one" → white flash (3 f) → 3 selfie stills swapping hard every 8–16 f inside one polaroid (measured x 87–993; here **x 60–1020**, ≥ 940 px wide; y 372–1548, ~1° tilt, white border ~25 px, halftone, soft shadow; face y ≈ 900–1000) on beige paper vignetted to `#585650` → white flash out (3 f) → full frame.
- **Ending:** cut back to the opening shot (loop).

### 3.3 `FMT-ARCHETYPE`: skit explainer (oa2)
| Layout | Rect (1080×1920) | % runtime | Where the face is |
|---|---|---|---|
| `L-FULL` talking/acting + poster words | full | ~45% | Full frame; hero word behind the head/cap (hook: cap top y ≈ 540, eye y ≈ 690, face x ≈ 520 at f50 after the push-in) |
| `L-MONTAGE` B&W flash-cut montage + floating text | full | ~15% | Full frame, acting; floating shot-list text around and in front (defocused) |
| `L-INSERT` search bar, cameras, phone screen | full | ~12% | Absent, or inside the phone screen as his own reel |
| `L-CALLBACK` B&W cut-out on a white cyc + floating 9:16 cards | full | ~8% | His full body small, centred (head y ≈ 830), **plus his face again inside each callback card** (right edge-cut, left-bottom, top-left small) |
| `L-CAROUSEL` grid-paper card carousel | card measured x 0–455; here **x 0–600** (≥ 560 px wide, still cut by the left edge), y 307–1407, r ≈ 37 | ~9% | Inside the rounded card on the left (his earlier reel), the card cut by the left frame edge, face inside; poster word on the right |
| `L-POLAROID` polaroid pop-out on grid paper | x 237–834, y 645–1368 | ~8% | Matted: head and hands **break out above the polaroid frame**, whole head visible |
| `L-PRODUCT` dark-grid product card | ~x 45–1035, y 315–585 | ~3% | Inside the landscape card, small |
| `L-SPOT` red spotlight silhouette (CTA) | full, red circle r ≈ 360 | ~10% | Profile silhouette against the circle, head top y ≈ 640 |

- **Movement (measured):** full (0–26.3) → small cut-out with callback cards (26.3) → full B&W on the same cyc with "IT'S ALL GOOD" in black (28.2) → card on grid paper (29.4) → full frame sets (31.8–41.2) → card field / polaroids (41.2–52.3) → full-frame silhouette CTA (52.3). **Every return to full frame is on an emotional or claim line.**
- **Each item gets its own look:** item 1 curtains + red cap, then B&W chaos; item 2 red jacket at a dark desk; item 3 hoodie on the floor; the reframe B&W on a white cyc; the promise on saturated teal; the CTA in red. Set + outfit + grade per item. **Here the B&W looks are short beats** (≤ 2 s on him, ≤ 3 s across a montage of inserts), colour blooming back on the action (§4.5, EV-7).

### 3.4 `FMT-PAGE`: tutorial on a cream page (oa3)
```
FULL FRAME (rule)               CREAM PAGE (example)
+-----------------------+ 0     +-----------------------+ 0
| EXTENDED LEMON TITLE  |       | cream #FAF4E1         |
| (hook: x45-1022,      |       |  +-----------------+  | <- 183
|  y231-363)            |       |  | 9:16 example    |  |
|                       |       |  | card x190-890   |  |
|  speaker at a desk:   |       |  | r ~ 38, no      |  |
|  cap top y~630,       |       |  | shadow; white   |  |
|  eye y~760, face x560 |       |  | centre line x540|  |
|                       |       |  | + yellow marker |  |
|                       |       |  +-----------------+  | <- 1428
|  subtitle y~1488      |       |  subtitle y~1488      |
+-----------------------+ 1920  +-----------------------+ 1920
```
- **In the reference the live talking head is never shrunk.** Only example footage goes into cards; he returns full frame to state each rule (14.68, 28.28, 59.85 park). When the example is one of his own reels, his face is inside the card (thumbnail scale). **This edition adds one move:** when he keeps talking over a number or a proof, he shrinks into the page dock under it (§3.8a) and grows back for the rule.
- **Card slot:** x 190–890, y 183–1428 (700×1245, 9:16), radius ≈ 38, no border, no shadow, on cream `#FAF4E1`. Card contents **hard-swap** every 0.5–0.9 s while the page stays (11.26–14.68).
- **16:9 slot:** x 25–1050, y 170–415, thin white 3×3 thirds grid when the point is the grid.
- **Phone mock slot:** x 250–825, y 186–1431, a black phone bezel with a real UI capture inside, a yellow marker ellipse around the area he names.
- **Numbered chapter plates:** a full-frame texture/aerial shot + the subtitle "Number.." + a giant rounded numeral (x 230–850, y 437–1172) popping on "one / two / three" (§7, SD-1).
- **Format argument shot:** a 16:9 card on black rotates ~35–40° and grows over ~105 f until it becomes the 9:16 frame (T-12).

### 3.5 `FMT-RECAP`: milestone recap (oa4)
| Layout | Rect | % runtime | Face |
|---|---|---|---|
| `L-FULL` cinematic monologue / vlog | full | ~60% | Full frame, wide (head y ≈ 350–420) or close (bench: cap top ≈ 200, eye ≈ 345, face x ≈ 540) |
| `L-PLATE` landscape / inserts + number builds | full | ~12% | Absent (VO) |
| `L-CREAM` 9:16 card on cream | x 162–920, y 135–1478, r ≈ 30 | ~20% | Inside the card when it's his reel (face 40–80 px: a thumbnail) |
| `L-PHONE` phone-UI card on cream | x 212–869, y 180–1530 | ~6% | Absent (see M10: no other creators' reels) |
| `L-EVENT` 16:9 card on cream | x 112–966, y ≈ 620–1100 | ~3% | Inside the card (event footage) |

- **Movement (measured):** full (0–19.3) → cards (19.3–27.9) → full driving (27.9–33.5) → cards (33.5–42.3) → full (42.3–47.8) → cards (47.8–55.7) → full to the end. **He returns full frame for every sincere, first-person statement; cards carry the evidence.**
- **Numbers are the hero:** giant lemon digits build digit by digit on the syllables, in the sky above his head ("3" → "36" → "365", block x 201–890, y 192–450).

### 3.6 `FMT-SERIES`: branded-series tutorial (oa5)
| Layout | Rect | % runtime | Face |
|---|---|---|---|
| `L-SKIT` wide skit + push-up question | full | ~10% | Full frame, small (couple full body, heads y ≈ 480–540); poster words in the sky/water above the heads |
| `L-HOST` studio host | full | ~25% | Full frame, cap top y ≈ 683, eye y ≈ 833, face x ≈ 518, ~680 px headroom |
| `L-BROLL` shoot / recap B-roll | full | ~20% | Absent (VO) |
| `L-FRAME` framed photo on vignetted paper | frame x 60–1025, y 320–1608, white border ~27 px | ~8% | Absent (the subject's photos) |
| `L-UI` phone-UI card on paper | x ≈ 24–1026, y ≈ 120–1800, r ≈ 40 | ~15% | Absent (VO over UI) |
| `L-ZOOM` full-frame UI zoom | full | ~20% | Absent |
| `L-SERIES` series title card | full | ~3% | Absent |

- **Movement (measured):** skit (0–5.84) → host (5.84–9.18) → series card (9.18) → B-roll (10.97–23.5) → framed photos (23.5–26.4) → host (27.4) → UI tutorial (30.1–57.5) → framed before/after (57.5) → skit (60.7) → host to the end (63.0).
- **The host never shrinks** into a card in the reference: full frame or absent. The paper page holds the UI card and the framed photos. This edition may carry him in the page dock (§3.8a) under a result he talks over.

### 3.7 Framing the face (every layout)
The rule is one sentence: **hair (or cap) and the full face sit comfortably inside every frame, card, polaroid or cut-out, and every zoom stops where the face is still whole.** Captions may cross the face. Nothing else is checked.
| Layout | Face placement (starting values) |
|---|---|
| Full frame, tripod seated (oa2 den, oa5 studio) | Cap top y 540–690, eye line y 690–835, face x 515–560; headroom ≥ 500 px holds the poster words |
| Full frame, desk / wide-lens (oa3) | Cap top ≈ 630, eye ≈ 760, face x ≈ 560 |
| Full frame, selfie arm's length (oa1) | Cap top ≥ 90 px below the frame top (measured ≥ 90), eye ≈ 825, face x 370–540 |
| Full frame, close bench / close low angle (oa4) | Cap top ≥ 120 (measured ≈ 200 on the bench close-up); eye ≈ 345 |
| Punch-in cut (oa4 3.46 +25%, oa5 67.32 +35%) | The punch stops where the cap top is ≥ 80 px inside the frame and the chin ≥ 80 px above the subtitle zone (oa5's punch kept the cap at y ≈ 370) |
| Polaroid / photo card | Inside the photo window: cap top ≥ 40 px below the window top, chin ≥ 40 px above the window bottom |
| 9:16 card on the page | Same as the polaroid, inside the card rect |
| Carousel card cut by the frame edge (oa2) | The card may run off the frame edge; the **face may not**: face centre ≥ 100 px inside the visible part |
| Pop-out polaroid (oa2) | The matted head breaks above the polaroid frame; the whole head stays inside the 1080×1920 frame |
| Small cut-out on a cyc (oa2) | Full body; nothing to crop |

**The tight-selfie fix (every layout):** when the footage is tighter than the face allows (a handheld selfie or close low angle where the cap/hair or the chin already touch or leave the frame: oa1 ~43 s, oa3 38.4–44.8 s, oa2 24.9 s), do **not** crop further and do not punch in. **Keep the shot full screen, edge to edge** (Naman, 13 Oct: never shrink it over a blurred copy of itself; a hard rectangle against its own blur looks cheap). The cap or hair may touch the top edge; eyes to chin are always in. Make room by moving the poster block (smaller, lower, or beside the head) or by turning the beat into a page beat with the ≥ 940 px face card, which the footage fills. Let the subtitle cross the chest if needed. Never zoom past the face to "fill" the frame.

### 3.8 ADAPTATION: one person, one talking-head take (for most plugin users)
> **This section is an adaptation, not an observation.** The references were shot with a crew, sets and location B-roll. A plugin user usually has one take of themselves talking to their own camera. Below is how the same grammar runs on that take. It uses the devices seen in these five reels; the moves this edition adds (the page dock §3.8a, the poster carry EV-8) are marked.

**The four devices that carry over:**
1. **Big yellow poster words behind the head** (all 5 reels): the take's headroom is the poster's home. The matte (§12.3) puts the hero word behind the head/cap; script connectors around it. Every key word, number and list title becomes a poster phrase over the speaker's own full-frame shot (oa4 builds "365" in the sky above him; oa2 builds "IDENTITY" behind his cap on a tight desk shot).
2. **The cream page with cards** (oa3, oa4; beige/grid paper in oa1, oa2, oa5): every noun with no footage becomes a card on the page: a screenshot or screen recording of the thing named, a fetched licensed photo, a drawn UI mock (search bar, product card, button; oa2/oa5), a phone-UI card, a 16:9 example. Marker annotations (yellow arrows, circles, ellipses) point at the part he names.
3. **Yellow serif subtitles** (5/5), at the readable size (§5.2).
4. **Polaroid and callback cards of the speaker himself** (oa1, oa2): stills and short clips **from the same take** become the "me" pictures: a polaroid of 2–3 stills from the take swapping every 8–16 f (oa1); earlier moments of the reel re-shown as floating 9:16 callback cards when he summarises (oa2); his take inside a 9:16 card on grid paper beside a poster word (oa2 carousel).

**The movement on one take (timings):**
| Beat | One-take version | Move |
|---|---|---|
| 0–~3.5 s hook | Full frame, poster phrase building behind the head from f0; a slow push-in +20–35% over the hook if the take allows it (oa2), stopped by the face rule | — |
| First noun / example | Cut to the cream page; the card for the noun lands in the slot | Hard cut on the pulse, or speck-to-card 4–6 f (T-10) |
| Each further noun | Card content hard-swaps in the same slot every 0.5–1.5 s | T-13 page swap |
| A number or proof he keeps talking over | **The page dock:** the proof card above, him in a wide photo card below (§3.8a) | T-18 dock / T-19 back to full (this edition) |
| The claim / the rule | Back to full frame; poster word on the key word | Hard cut, or the poster carry (T-20) out of the page |
| A "me" moment ("I tried them all", "I was stuck") | Polaroid of take stills on beige paper | White flash in 3 f / out 3 f (T-03) |
| The list reframe ("if any of these feel familiar") | Callback cards of the earlier items fly in around a smaller version of him (a B&W cut-out on a white page via the matte) | Card fly-in 3–5 f, defocus-fade out 3–4 f (T-07) |
| Item changes in a list | A new **grade** per item on the same take (warm, teal, red spotlight: oa2's per-item looks; B&W only as a ≤ 2 s doubt beat, never pale, §4.5), plus the item's poster title | Hard cut or a warm light sweep (EV-7); optional zoom-blur punch (T-05) into a hand gesture |
| CTA | Full frame; the keyword built as poster words (script "Just comment" + the hero keyword) | Light-leak burn (T-08) or hard cut |
| End | Full frame; loop back to the opening frame (oa1) or a punch-in on the last line (oa5) | — |

- **Budget on one take:** 3–4 page stretches per 60 s, each 2–8.5 s; 1–3 page-dock round trips; 1 polaroid moment; ≤ 1 callback moment; full-frame stretches 1.5–6 s with a poster phrase or a punch-in cut at least every ~2.5 s so the face shot never sits still (oa2: "never a static frame > ~1.5 s without a type build, card move or camera push").
- **Numbers** go up as giant lemon digits in the headroom above the speaker's own shot (oa4 "365"); a numbered tip's numeral pops there too (oa3's numeral recipe, without the B-roll plate).
- **A tight selfie take** follows §3.7: full screen as shot (never shrunk over its own blur), the poster words sized to the headroom there is, or the beat moved to the page with the face card.
- **What does not carry over:** sets and outfit changes per item, a second person, aerial plates, car and location B-roll. Do not fake them; the grade change, the page and the poster words carry the variety.

### 3.8a `L-DOCK`: the page dock (this edition, adaptation)
```
┌─────────────────────────┐ 0
│  PROOF on the page:     │ ← y≈130–720: a 16:9 card (≥ 960 px wide), a number
│  16:9 card / number /   │   build, a UI card or a 4:5 crop of an example
│  UI / example           │   (≥ 860 px wide); the marker draws here
│ ╭─────────────────────╮ │ ← dock card x 70–1010, y≈760–1420 (940×660), r ≈ 30,
│ │ speaker, live,      │ │   a white photo border ~18 px, ~1° tilt, a soft shadow
│ │ whole head, colour  │ │   (≈ 25% black, 20 px blur) on the paper
│ ╰─────────────────────╯ │
│   CAP-SUB y≈1475        │ ← subInk on the cream, 86–96 px
└─────────────────────────┘ 1920
```
- **What it is:** the "shrink to a card for the data" move, built from the references' own vocabulary (oa1's polaroid on paper, oa2's card on grid paper, oa3's card slot). When a number, a result or an example is the point **and** he keeps talking, he shrinks from full frame into a wide photo card laid on the page (T-18: 12 f on a soft arc, the ~1° tilt resolving as it lands, a 4 f settle) while the proof lands above it; on the next claim the card grows back to full frame (T-19: 10 f) as the page slides away.
- **The face:** the take scaled to the card's width, face-centred; the whole head inside with ≥ 40 px above the hair/cap and ≥ 60 px below the chin. If a tight selfie's head doesn't fit, the card grows taller (up to y ≈ 640–1420); the footage always fills the card, never shrunk inside it over its own blur. Full colour, never a grey card; never a corner bubble or a narrow pillar (N1).
- **The page:** the reel's one page theme (§4.2), with its grain and light (EV-2); the proof follows the page's card rules (no shadow on cream cards, the marker in `marker`).
- **Captions:** `CAP-SUB` in `subInk` in the band under the dock; a poster word may sit on the proof only when the proof is the word.
- **Budget:** 1–3 round trips per 60 s, each 1.5–5 s; never two docks back to back without a full-frame claim between.

### 3.9 Safe zones (Instagram / Shorts)
- Key text inside **x 60–1020, y 120–1520**. On the page and over B-roll the subtitle sits at y ≈ 1440–1510 (centre ≈ 1475): above the platform's caption/username band, as the creator teaches in oa3 ("everything below this lower third is dead space"). On full frame it rides just under the chin (§5.2), never below y ≈ 1510.
- The right ≈ 120 px holds no text below y 1000 (the action buttons).
- Cards end by y ≈ 1430–1480 on the page; the page below stays empty paper.
- Poster blocks use x 108–970 (measured margins 108–114 px left/right), never closer than 45 px to an edge.

---

## §4 Colour tokens

### 4.1 Core tokens (all formats)
| Token | Hex | Use |
|---|---|---|
| `posterWarm` | `#FAD004` (oa2 `#F9D237`, oa5 `#FBCE04`) | Condensed hero words (Anton) over footage. Flat: no stroke, shadow or glow |
| `posterLemon` | `#FAE62F` (oa3 `#F9E530`, oa4 `#FDE62A`) | Extended titles and digit builds; rounded numerals `#FEE629` |
| `posterInk` | `#0C0C0C` | Hero words on white / cream / white-cyc backgrounds (oa2 "IT'S ALL GOOD", "BACK") |
| `scriptWhite` | `#FDFAF5` | Handwritten connector words over footage |
| `serifYellow` | `#F9D237` | Italic-serif connector words (oa2) |
| `subYellow` | `#F4EC46` (range `#F0E466`–`#F4EC46`) | `CAP-SUB` on footage |
| `subShadow` | `#060510` | Hard drop shadow under `CAP-SUB`, ~3 px down-right (4–5 px at 86–96 px type) |
| `subInk` | `#14110C` (fix) | `CAP-SUB` on cream / beige / grid / white pages, no shadow |
| `marker` | `#EED453` | Hand-drawn annotations (arrows, circles, ellipses, triangles) |
| `guide` | `#FFFFFF`, 2 px | The vertical centre line at x = 540 |
| `polaroid` | `#F5F5F5`, border ~25 px | Polaroid / photo-frame borders (framed photo `#FFFFFF`, ~27 px) |
| `cardShadow` | ~25–30% black, 16–24 px blur | Under polaroids, framed photos, the phone-UI card; none under cream-page cards |

### 4.2 Page themes (one per reel)
| Page | Centre → edge | Texture | Seen in |
|---|---|---|---|
| **Cream page** | `#FAF4E1` (oa3) / `#FDFCE4` (oa4), flat | none | Tutorial, recap |
| **Beige paper** | `#D4CFB8` → `#585650` corners | paper grain, halftone print | oa1 polaroid |
| **Vignetted paper** | `#E3DEC6` → `#8A8678` | paper grain | oa5 series card, framed photos, UI card |
| **Grid paper** | `#C9C9C7` → `#4F4E4E` | ~40 px grid, worn | oa2 carousel, polaroids |
| **Dark grid** | near-black, darker corners (guess) | grid + plus marks | oa2 product card, collage |
| **White cyc** | white-grey, B&W footage | soft vignette | oa2 callback cut-out |

Pick **one page** per reel (cream for tutorials and recaps, vignetted/beige for a memory or framed-photo moment, grid for lists and skits) and keep it for every page stretch.

### 4.3 Grades (per format)
- **Warm iPhone cinematic** (default, `FMT-TOUR`): warm, clean, **deep blacks** (the reference lifted them slightly; here never), moderate-to-rich contrast.
- **Saturated daylight** (`FMT-PAGE`, `FMT-RECAP` outdoors): deep cyan skies, golden skin, teal shadows.
- **Warm tungsten den** (`FMT-ARCHETYPE` hook) and **green-amber studio** (`FMT-SERIES` host): lamp practicals, shallow depth of field, light grain.
- **High-contrast B&W** for doubt and the reframe, **as a short beat only** (≤ 2 s on the creator, ≤ 3 s across a montage of inserts), colour returning on the action (EV-7); **saturated teal** for the promise; **red spotlight** `#CE2000` → red-black for the CTA (oa2).

### 4.4 Meaning of colour
- **Yellow poster word** = the idea (key noun, number, list title, promise). One phrase at a time. **Black** = the same on a white world.
- **White script / yellow italic serif** = connective words, never the important one.
- **Yellow marker** = "look here". **White centre line** = the rule being taught.
- **B&W** = inside the head. **Colour** = action and promise. **Red spotlight** = the call to act.
- One poster yellow per reel (M9); the subtitle yellow is paler than the poster yellow, so the two layers never merge.

### 4.5 Never pale (the creator's direction, 12 Oct 2026)
- The footage keeps its rich colour: warm skin, **deep blacks** (true black, never lifted or milky), saturated skies and teal shadows where the light gives them. Grade contrast up 5–10% rather than down; saturation as shot or up to +10%.
- The cream, beige and grid pages are **background colours**; the speaker on them (polaroid, card, page dock) keeps full colour, and the paper itself gets a warm lamp gradient, never a flat grey.
- **B&W is a named beat:** a doubt or reframe line on the creator (≤ 2 s), an anxiety montage of inserts (≤ 3 s), the callback cut-out (≤ 2 s). Colour comes back by blooming from the face outward on the action word (EV-7). Never a pale, faded or desaturated look for a whole item or the reel.
- No blurred fill behind the speaker anywhere: full screen or a face card on the page (Naman, 13 Oct).

---

## §5 Type tokens and caption systems

### 5.1 Font map (all bundled)
| Role | Reference look (guess) | Bundled font | Size at 1080 |
|---|---|---|---|
| `CAP-SUB` | Old-style serif semibold | **EB Garamond** 700 | **86–96 px** (fix; ref ≈ 42–45) |
| Condensed hero words | Anton / Druk Condensed | **Anton** | Each line auto-fit to ~850 px: cap 110–300 |
| Extended titles, word builds | Monument / Druk Wide | **Archivo Black** (or **Unbounded** 900) | Title cap 55–80; builds 110–200 |
| Digit builds | Heavy extended | **Archivo Black** | Cap 260–400 |
| Rounded numerals, "CUT" | Cooper-like rounded heavy | **Lilita One** (or **Fraunces Soft** 900) | ~735 px numerals |
| Handwritten connectors | Thin monoline hand | **Caveat** 600 (or **Nanum Pen Script**) | **≥ 72 px** (fix; ref 40–70, thin) |
| Italic-serif connectors | Playfair / Bodoni Italic | **Bodoni Moda Italic** (or **Instrument Serif Italic**) | 64–90 |
| Floating shot-list / thoughts, bracket labels | Rounded geometric sans | **Jost** 500–700 | 48–110, some defocused (only texture may sit below 48) |
| UI mocks | System sans | **Inter Tight** / **Plus Jakarta Sans** | ≥ 48 |
| Series card | Swash script + wide caps | **Pinyon Script** + **Archivo Black** | ~120 / cap ~150 |
| End-card wall | Extended caps | **Archivo Black** | 60–150 cap, justified |

### 5.2 `CAP-SUB` (the one subtitle system, 5/5 reels)
| Property | Observed | House value |
|---|---|---|
| Font | Old-style serif semibold | EB Garamond 600 |
| Size | ≈ 42–45 px tall (≈ 2.2% of frame height): small on a phone | **86–96 px** (fix), x-height ≈ 32–35; chunk shorter rather than shrink |
| Case | Sentence case, punctuation; ".." on cliff-hanger fragments (oa4) | Same |
| Colour on footage | `#F4EC46` + hard black shadow ~3 px, no stroke, no box | Same, shadow 4–5 px |
| Colour on paper / white | Same yellow, carried only by the shadow | **`subInk`, no shadow** (fix) |
| Position | Centred x 540, one line, centre y ≈ 1488 (≈ 1512 on oa4's cream) | **Full frame: just under the chin** (the line's top ≈ 40–80 px below `FACE(n)` chin, never below y ≈ 1510), so the eye meets it right after the face; **on the page, in the dock layout and over B-roll:** centre y ≈ 1475. Max width 900 |
| Chunk | 1–7 words; "#1.", "Number.." as their own captions | 2–6 words; split long phrases into two captions, never two lines |
| Animation / highlight | None; hard on/off, independent of cuts | Same (N5) |
| During the hook poster | Absent in oa1, oa2 hooks | **Every spoken word is on screen:** the subtitle may drop only while the hook poster spells the very same words; any word the poster doesn't carry is subtitled |
| Example cards' own subtitles | ~18–20 px, unreadable | Crop or cover them (fix) |

### 5.3 Poster words, condensed system (oa1, oa2, oa5)
- **Hero line:** Anton caps, `posterWarm`, each line **auto-fitted to the same width** (~850 px, x 114–966), so short words grow tall: "YOU WEAR" cap 212, "IS WAY" / "BETTER" ~290, "NEW HERE" 227, "LOVING" ~300, "CREATIVE" ~107 (beside a card), "SOON" ~480.
- **Placement:** block top y ≈ 98–338 on talking shots (top third over wall or sky); mid-frame (y ≈ 760–1000) when the head is low; right half when a card sits left; lower third only when the face is high. Never over the eyes.
- **Depth:** behind the head/cap, a mirror, a walking body or a silhouette (matte). The cap overlapping the bottom of "CONTENT" / "IDENTITY" is the signature.
- **Connectors:** Caveat white **above** the hero line (y ≈ 150–200) or **split left and right** of it ("than … online" either side of the mirror; "Is … Your" at the outer ends); Bodoni Moda Italic yellow beside or under it.
- **On white:** the hero word turns `posterInk` (oa2 block x 234–820, y 450–1124).

### 5.4 Poster titles, extended system (oa3, oa4)
- **Hook title:** 2 lines, Archivo Black caps, `posterLemon`, block x 45–1022 (oa3) / x 108–970 (oa4), y 231–400, cap ~55–80. Line 1 wipes in at **f0** (fix: was f10), line 2 at +2 f; out bottom line first, 2 f each.
- **Word build / replace:** one to three words per beat in the sky (y ≈ 140–420); each new phrase **replaces** the old ("CHANGED" → "MY" → "MY LIFE"; "LET'S" → "LET'S TAKE A" → "LET'S TAKE A TRIP DOWN" → "MEMORY" → "MEMORY LANE", LANE cap ~200). Hard pops (oa4).
- **Digit builds:** a digit per syllable, re-centred as it grows ("3" f84 → "36" f100 → "365" f114, block x 201–890, y 192–450); "52" + "ORIGINAL / SHORT / FILMS" stacked, each line fitted to the same width (x 168–904, y 300–1166), then reset to "5" for the next phrase.
- **Outline stack** (oa3 17.06): the phrase in 4 lines alternating outline and filled lemon, x ≈ 60–660, y ≈ 180–520, ~0.5 s.

### 5.5 Numerals, stacked letters, labels
- **Chapter numeral:** Lilita One `#FEE629`, ~735 px tall, x 230–850, y 437–1172, over a full-frame texture plate; scale-pop 3–4 f on "one / two / three", hold ~10 f, dies with the cut.
- **Stacked letters:** "C / U / T" built top-down one letter per frame, held 10 f, once.
- **Bracket labels / intrusive thoughts** (oa2): Jost white, 48–110 px, type-on 1 char/frame, drift; foreground ones defocused.
- **Search bar mock:** white pill ~110 px tall (fix: ref ~60), magnifier, text ≥ 48 px, typewriter 1 char/frame. **Result card:** white, soft shadow, swings in edge-on in 5 f. **Button:** orange `#F5A623`-ish pill, yellow text, cursor click.

### 5.6 Readability floor (fix, all text)
| Text | Minimum at 1080×1920 |
|---|---|
| `CAP-SUB` | 86–96 px (never below 80) |
| Script connectors | 72 px, + 2 px `subShadow` on bright sky or white wall |
| Labels, UI text, card titles | 48 px |
| Anything (credits, legal) | 36 px (ref disclaimer ~15 px) |

### 5.7 Series card (oa5, made the creator's own)
- Script word (Pinyon Script) over a wide heavy word (Archivo Black), "ep. 06" below (≥ 48 px), in series orange `#F6B43A` / `#EFC778`, centred x ≈ 150–965, y ≈ 840–1060, on vignetted paper.
- Speck to full in 4 f with zoom blur (f220–224), holds ~1.8 s, hard cut out.
- **Fix:** the sponsor lockup before it (a brand wordmark, 8.0–9.2 s) is removed; the series card carries the episode.

---

## §6 Hook system

### 6.0 The 10× hook
- **Frame 0 is three layers deep and already moving:** the composed frame with him in position (or the real thing), the first hero word mid-rise **behind** the head with the cap in front (EV-1), and the first subtitle or connector; the slow push already under way. Never a still, never an empty sky or floor.
- **8–10 visual events in the first 3 s** (the references measured 3–9): each hero word, the connectors, the push, a 14-f detail insert or a punch on the number, the first card or polaroid landing.
- **The hook's best word is the biggest thing on screen:** the hero line auto-fitted to ~850 px, behind the cap, or the number built digit by digit in the sky (EV-5).
- **The promise or the number is on screen by ~2 s** and paid off on screen at the end (§7.3): the loop the viewer stays for.
- **The first proof lands by ~4–6 s** on the page with a paper cue: the viewer sees the taste before they are asked to trust it.
- **Sound:** the voice dry and first; 2–3 soft cues on the pictures (§6.5).

### 6.1 What the hook must do in about 3 seconds
1. **A beautiful, unusual frame at f0 with the speaker (or the subject) in it**: a low-angle mirror, a warm den with a push-in, a top-down wide on a car, a couple at a railing.
2. **The hook line as poster words, word by word, from f0**: read as much as heard.
3. **A bold claim, a number or a question** that opens a loop.

Picture, poster and voice say it three ways: the picture is the taste, the poster is the claim, the voice is the warmth.

### 6.2 Hook formulas (`HF`)
| ID | Formula | Spoken pattern | Seen in |
|---|---|---|---|
| HF-1 | **Contrarian lifestyle claim** | "When it comes to X, Y is way better than Z." | oa1 |
| HF-2 | **Numbered archetypes** | "There's three types of X." (three fingers up) | oa2 |
| HF-3 | **"How I do X" promise** | "Today we're gonna talk about how I X." | oa3 |
| HF-4 | **Life-change claim + a number** | Title "THIS DECISION CHANGED MY LIFE" → "I made a post 365 days straight." | oa4 |
| HF-5 | **Second-person question + instant proof** | "Is your X still not Y?" → reaction shot by ~4 s → "we're gonna fix that." | oa5 |

Add-ons: **a gesture that is a number** (three fingers + zoom-blur punch, oa2); **comedic proof in 4 s** (oa5); **the open loop said once** ("to find me the perfect…"). Write **3 variants** with different formulas; recommend one.

### 6.3 Hook visuals (`H`)
| ID | Hook visual | Recipe |
|---|---|---|
| **H-1** | **Depth poster over an unusual frame** | f0 a static composed frame (low angle up at a round mirror with him inside); script "when it comes to" writing on from f0 at y ≈ 150; f14–18 "YOU", f18–20 "WEAR" blur-rise; f24–28 exit blur-up; f32–47 "SHOPPING / IN / PERSON"; f50–54 exit; f57–70 "IS / WAY / BETTER", BETTER **behind the mirror**; script "than … online" splits either side; hard cut f96 (oa1) |
| **H-2** | **Numbered poster + push-in + gesture punch** | f0 seated wide in a warm set; push-in ~+35% over f0–56 (face rule); f14 "3", f24 "types of", f34 "CONTENT" **behind the cap**, f40 "creators"; f54–60 zoom-blur punch into the three-finger hand; cut f66 (oa2) |
| **H-3** | **Extended title over a top-down wide** | f0 top-down, him already leaning on the car (fix); title line 1 at f0, line 2 at f2; subtitles from ~f20; ~4 s hold; three 14-f detail inserts (oa3) |
| **H-4** | **Title + digit build** | f0 hilltop wide, him already in place (fix); title f0–78; punch-in cut +25% at f83; "3" f84 → "36" f100 → "365" f114 above his head (oa4) |
| **H-5** | **Push-up question scroll over a wide skit** | f0 couple full body, clean sky/water above; script "Is" / "Your" from f0; f6–10 "GIRLFRIEND" rises from ~300 px below with heavy blur; f22 "Still", f28 "Not"; f31–37 "LOVING" pushes the old line off the top; f47–56 "You Got Of Her?" word by word; cut f64 to the reaction (oa5) |

### 6.4 Hook timing template (≈ 0–4 s)
| t | Beat | Rule |
|---|---|---|
| f0 | Open | Speaker or subject **in position** in a composed frame; first poster word / title line already writing; no black, no fade, no empty sky or floor (fix) |
| f0–f20 | First hero word | Lands 0–2 f before its word |
| 0–3 s | Build | ≥ 8 visual events (measured 7, 6, 9; oa3/oa4 had 3: fixed) |
| 2.7–4.6 s | First cut | To the setup or the reaction proof |
| ≤ 8 s | Loop | The promise is said |

### 6.5 Hook text and sound
- The hook poster **is the hook line** word for word (oa1, oa5), or a ≤ 5-word topic title (oa3, oa4). Hero words = nouns and verdict; connectors = small words; ≤ 3 lines on screen.
- **Sound:** the voice dry and first from f0 in every format (+ real sound in `FMT-RECAP` until the act break); no bed, no music intro, ever. The hook gets 2–3 soft cues on its pictures: air under the first hero phrase's rise, paper or a shutter on the first card or polaroid, a low thump on a number that lands (§11.1). Never a riser or a hit over the hook line itself.

### 6.6 Endings (pick one per reel)
| ID | Ending | Recipe | Seen in |
|---|---|---|---|
| E-1 | **Loop to the opening shot** | The CTA line over the last B-roll, then a hard cut back to the exact opening frame (~2.5 s) | oa1 |
| E-2 | **Walk-out, title holds, sound dead** | CTA built as poster words ("Just comment / KEYWORD / to join", "See you in there / SOON"); he walks out (~13 f); the poster holds ~0.4 s on the empty set; ~1.2 s of silence before the end | oa2 |
| E-3 | **Blooper + text end card** | A short blooper, the sign-off, then a wall of extended lemon type over a texture plate ("THIS WAS PART 1 / JOIN [COMMUNITY] / LINK IN BIO"), 3 s | oa3 |
| E-4 | **Walk-out, empty frame holds** | Last line close-up; he jumps up and exits; the empty frame holds ~2 s | oa4 |
| E-5 | **Punch-in on the sign-off joke** | Punch-in cut +35% (face rule) on the last joke | oa5 |

The CTA uses the creator's own keyword, series or link from the brief, built as poster words or an end card; never a sponsor's (M11).

---

## §7 Structure devices

### 7.1 Structure devices (`SD`)
| ID | Device | Use when | Recipe |
|---|---|---|---|
| **SD-1** | **Numbered chapter plate** | Numbered tips | Full-frame texture plate (~1 s) + subtitle "Number.." + numeral pop on "one / two / three"; a 0.7–1.8 s breather before it; card swaps **accelerate** to ~5 f each just before (oa3 53.5–54.1) |
| **SD-2** | **One look per item** | A list of types / mistakes | Each item its own set, outfit and grade; its name as a hero word on its first line ("The / OVERTHINKER") (oa2) |
| **SD-3** | **Callback cards** | Summarising a list | Earlier items return as floating 9:16 cards around him (oa2 26.5–28.2) |
| **SD-4** | **Receipts montage** | A thank-you, "everything I did" | His own reel covers swap every ~0.5 s in one card slot on the cream page under a continuous line (oa4: ~16 covers in 8.5 s) |
| **SD-5** | **Bookend / loop** | A strong opening shot | End on the opening frame (oa1) or the opening skit before the CTA (oa5) |
| **SD-6** | **Series card** | A recurring series | Name + episode on paper right after the promise (oa5 9.18), ~1.8 s |
| **SD-7** | **Riser-and-drop act break** | A recap or story with a turn | Dry voice + natural sound for the setup (oa4 0–16 s), a riser 16.15–16.5, the drop hit lands on the turn line (oa4's music entered here; we don't use music) |
| **SD-8** | **Cliff-hanger subtitle** | A line that pays off on its last word | Subtitle ends in ".." while the poster builds the payoff ("CHANGED" → "MY" → "MY LIFE") |
| **SD-9** | **List at half pulse** | Any spoken list | One shot per item at 0.46–0.63 s (oa1 20.4–25.7) |
| **SD-10** | **Live rule overlay** | A visible rule (centre, depth, dead zone) | 2 px white centre line through every frame of the section; marker strokes draw on with the word (oa3) |
| **SD-11** | **Skit → host → demo → result → skit** | A series tutorial | Problem + reaction, promise, steps as UI zooms, before/after in a framed photo, back to the skit for the payoff (oa5) |
| **SD-12** | **Section-change poster** | One mid-reel change in a tour | The only mid-reel poster, built behind him walking ("And something / NEW HERE / as well", oa1 44.0) |

### 7.2 The item ritual (identical every item)
- **`FMT-ARCHETYPE`:** (1) "#N." subtitle, cut to the item's look, its name built behind the head; (2) 3–6 s of the item acted out; (3) a hero word on each key noun ("PERFECT", "MEGAPIXELS", "STORY"); (4) a quick UI joke or insert bridges to the next item ("BUY NOW" pill + cursor).
- **`FMT-PAGE`:** (1) the plate (SD-1); (2) the rule over the first example, marker on the key word; (3) 3–6 examples in the card slot or full frame with the centre line; (4) full frame for the next rule.

### 7.3 Open loops (retention)
- **The promise in the setup** ("to find me the perfect…", "how to still achieve…", "we're gonna fix that"), paid off in the result beat.
- **"Which one am I?"** (oa2, paid at 26.3 s); **"which decision?"** (oa4, answered at 3.5 s, paid at 54 and 74 s); numbered plates 1 → 2 → 3 show what is left.
- Every loop is paid off **on screen**, in the same poster style, card slot or opening shot.

---

## §8 Graphics / B-roll system

### 8.0 The 10× layer (what the best editor adds to every word and picture)
**Animation principles, applied to this style** (calm, so the craft goes into weight and light, never bounce):
| Principle | How it shows up here |
|---|---|
| **Anticipation** | A hero word's blur shadow arrives 1 f before the word itself; a card's contact shadow appears on the paper 2 f before the card lands; the polaroid's white flash peaks 1 f before the photo; a 0.4–0.6 s hush (no new sound) before the turn line and the payoff |
| **Follow-through & overlap** | Connectors write on 2–3 f after their hero word lands; a card settles 102 → 100% while its shadow tightens 2 f later; the polaroid border lands first and the photo develops after (EV-3); the marker's arrowhead draws last; the hero word's contact shadow catches up 1 f after the word |
| **Weight (restrained squash)** | A card lands with a 1-frame 2% compression and its shadow tightening, like a print laid on a desk; digits drop 12 px into place (EV-5). **Never bounce, elastic or overshoot past 100%** (N3) |
| **Arcs** | Polaroids, callback cards and the dock travel on soft arcs with a 1–3° rotation that resolves on landing; the poster carry (EV-8) arcs up onto the page |
| **Slow in / slow out** | The house ease: a fast ease-out with directional blur (measured); holds breathe instead of freezing |
| **Staging** | One poster phrase and one card at a time (measured); when a card lands the poster exits; while the marker draws nothing else moves; the subtitle never sits on the proof |
| **Secondary action** | Under a held face beat: a slow push (+2–4%) with the poster drifting 0.3–0.6 px/f against it (parallax); on the page: a warm light sweep across the paper every ~4–6 s and live grain; callback cards drift a few px/s |
| **Timing** | Hero words land 0–2 f early; a visual change every ≤ 1.5 s; tours on the ~1.04 s pulse; card swaps 0.5–0.9 s; a calm hold only when a build lives inside it |
| **Exaggeration** | One moment per reel goes biggest: the number building to full width in the sky, or the turn line with the hero word at full width and the deep boom |
| **Appeal** | Magazine type, warm film colour, real paper; it should look like a designer and a colourist made it on a slow Sunday |

**Design hierarchy (every frame):** 1. the face, or the proof card on the page · 2. the yellow hero word · 3. the marker stroke or the number · 4. `CAP-SUB` · 5. connectors and the paper itself. Nothing competes with the one hero.

**Effects toolkit:** the person matte for real depth; a soft contact shadow of the cap/hair on the poster word (≈ 20% black, 18 px blur, offset toward the floor); **light wrap** (the scene's key light bleeding 2–4 px onto the poster edge that faces it); paper grain and a faint halftone on paper pages; a warm lamp gradient and a slow diagonal light sweep (+6% brightness, 1.2 s) across the paper; the polaroid develop (EV-3); motion blur on every move; a soft bloom on the lemon digits; one light leak per reel (T-08). **Never:** glitches, RGB splits, shake, chromatic aberration, overlay flare packs, bouncy type, a pale or faded grade.

### 8.1 Families (`G`)
| ID | Family | Look | Motion signature |
|---|---|---|---|
| **G-1** | **Depth poster phrase** | Condensed yellow hero line(s) + script / italic connectors, behind the speaker | Per-word blur-rise 4–5 f; phrase exit blur-up 3–4 f or dies with the cut |
| **G-2** | **Push-up scroll** | Same type; each new line pushes the last off the top | Rise from ~300–400 px below, heavy vertical blur, 4–5 f |
| **G-3** | **Extended title / word build** | Lemon extended caps, top third | 2-f line wipes; hard-pop word replace |
| **G-4** | **Digit build** | Giant lemon digits, stacked lines | A digit per syllable, hard pop |
| **G-5** | **Numeral plate** | Rounded numeral over a texture plate | Scale-pop 3–4 f with blur |
| **G-6** | **Cream-page card** | Rounded 9:16 / 16:9 / phone card on the page, no shadow | Hard cut in; content hard-swaps in the slot |
| **G-7** | **Polaroid memory** | Polaroid on beige vignetted paper, ~1° tilt, halftone, soft shadow | White flash in/out 3–4 f; photos swap every 8–16 f |
| **G-8** | **Polaroid pop-out** | Cream polaroid on grid paper, matted subject breaking out the top | Scale-in 40 → 100% over ~8 f; exit rotate ~20° + slide with blur 4 f; finale pull-back to a collage |
| **G-9** | **Callback cards** | 9:16 rounded cards (r ≈ 35) of earlier scenes, slight 3D yaw | Fly in from off-frame with blur, settle 3–5 f, drift; exit defocus + fade 3–4 f |
| **G-10** | **Grid carousel** | One rounded card on grid paper, poster word beside it | Pop 60 → 100% in ~4 f; advance = whole row whips left with heavy blur ~15 f |
| **G-11** | **Marker annotation** | `marker` strokes: arrows, circles, ellipses, triangles | Stroke write-on 6–8 f, arrowhead last; holds until the cut |
| **G-12** | **Centre guide line** | 2 px white line at x = 540, full height | Present for the whole section |
| **G-13** | **Framed photo** | White-bordered photo on vignetted paper, drop shadow | Hard cut in; photos swap inside; before → after dissolve ~12 f |
| **G-14** | **Phone-UI card + button zoom** | Real screen recording in a black phone card on paper | Speck-to-card 4–6 f; blurred push 3–4 f into each tapped button, hold 1–2 s, back out |
| **G-15** | **Series card** | §5.7 | Speck to full 4 f |
| **G-16** | **Floating text layers** | Shot-list brackets / intrusive thoughts, some huge and defocused | Type-on 1 char/f, drift |
| **G-17** | **UI mocks** | Search bar, result card, "BUY NOW" pill + cursor | Typewriter 1 char/f; 3D swing-in 5 f; pop on the cut |
| **G-18** | **3D fly-through reveal** | Oversized word rotating past camera, settling into a stacked logo among floating photo cards | Continuous slow push afterwards |
| **G-19** | **Format-rotation card** | 16:9 card on black | Holds 12 f, rotates + scales (ease-in-out, ~105 f) until it fills the frame |
| **G-20** | **End-card wall** | Justified extended lemon caps over a texture | Hard cut in, hard end |

### 8.2 Staging choreography (how a line plays out)
1. **On the phrase start:** the picture for the noun cuts in (B-roll, or a card in the page slot), or the first connector writes on.
2. **On the key word (0–2 f early):** the hero word rises into place, or the marker stroke starts, or the numeral pops.
3. **Hold:** to the phrase end; the next phrase replaces it (exit blur-up 3–4 f, a ~4 f clean gap) or the cut kills it.
4. **One poster phrase and one card on screen at a time.**

### 8.3 Pattern specs (`P`)
| ID | Pattern | What's on screen | Motion |
|---|---|---|---|
| P-01 | **Noun shot** | The thing named, full frame, speaker absent | Hard cut on the pulse |
| P-02 | **List burst** | One shot per listed item | 0.46–0.63 s each (SD-9) |
| P-03 | **Claim poster** | The claim's nouns as hero words behind the head | Blur-rise per word |
| P-04 | **Item title** | "The" script + "ITEM NAME" behind the head | Blur-rise on the name |
| P-05 | **Number build** | The spoken number, digit by digit, above the head | Pop per syllable |
| P-06 | **Chapter plate** | Texture plate + "Number.." + numeral | SD-1 |
| P-07 | **Example card** | The example in the 9:16 slot, swapping per example | Hard swaps 0.5–0.9 s |
| P-08 | **Rule overlay** | Centre line + marker on the named part | Draw-on 6–8 f on the word |
| P-09 | **Receipts** | Own reel covers in the slot | Swaps every ~0.5 s (SD-4) |
| P-10 | **Memory polaroid** | 2–3 stills of him in one polaroid | Flash in/out, swaps 8–16 f |
| P-11 | **Callback** | Earlier scenes as cards around him | Fly-in, defocus-out |
| P-12 | **Carousel** | His reel in a card + a poster word right | Pop, whip-advance |
| P-13 | **Pop-out polaroids** | "From X to Y" moments, one polaroid each | Scale-in, tilt-slide out, collage pull-back |
| P-14 | **Search / product mock** | Query typed; result card swings in beside the head | Typewriter + 3D swing-in |
| P-15 | **UI step** | The tapped button zoomed full frame | Blurred push 3–4 f |
| P-16 | **Before / after** | The same photo framed, before → after | Dissolve ~12 f |
| P-17 | **Thought cloud** | Intrusive thoughts or shot-list text around him in B&W | Type-on, drift |
| P-18 | **Format argument** | The old format rotating into the new one | ~105 f rotate-grow |
| P-19 | **CTA poster** | "Just comment / KEYWORD / to join" over the CTA set | Blur-rise per word |
| P-20 | **End card** | "THIS WAS PART 1 / JOIN … / LINK IN BIO" | Hard cut |

### 8.4 Line → pattern lookup (start here for every line)
| Line type | Primary | Alternates |
|---|---|---|
| "I'm here at X" / a place, product, object | P-01 | P-07 (no footage) |
| "every A, every B, every C" | P-02 | P-07 with fast swaps |
| A bold claim or verdict | P-03 | P-05 if it has a number |
| "Number one…" | P-06 | — |
| "The first type is…" / an item's name | P-04 | — |
| A number, a year, a count | P-05 | P-06; the page dock (§3.8a) when he keeps talking over it |
| "For example" / "like this" | P-07 | P-01 |
| "this line right here", "the centre", "in front and behind" | P-08 | — |
| "Thank you for watching all my videos" | P-09 | — |
| "It's hard to pick", a personal memory | P-10 | — |
| "If any of these feel familiar" | P-11 | P-12 |
| "This is what being X is" | P-12 | P-03 |
| "From X to Y" (transformations) | P-13 | P-07 |
| "They search for the best X" | P-14 | — |
| "Hit Edit, then Tools…" | P-15 | — |
| "Just like that" (a result) | P-16 | — |
| Doubts, anxiety, overthinking | P-17 | B&W grade on P-01 (≤ 2–3 s, colour back on the action, §4.5) |
| "We came from X and had to adapt" | P-18 | — |
| The comment keyword / join line | P-19 | P-20 |

### 8.5 Density and variety
- **Something changes every ≤ 1.5 s** (oa2 rule: no static frame > ~1.5 s without a type build, card move or camera push). Cuts on the ~1.04 s pulse in a tour (median 1.04 s, 74 shots in 85 s); a visual change every ~1.5 s in a tutorial or skit; card swaps every 0.5 s in receipts.
- A held shot may run 3–7 s only if poster words build inside it (oa1 hook 4.0 s; oa3 park 6.8 s is the longest talking hold: break it with a punch-in cut or a poster word in a copy).
- **Variety comes from the pictures**, not new effects: one poster system, one page, one card slot per reel.
- **No frame mostly empty for more than ~0.7 s** (N13): the sky above the head holds a phrase or the next one is coming; the page holds a card that fills its slot.

### 8.6 Asset rules
- **Own footage first:** the speaker's take, its stills (polaroid, callback cards), his earlier reels if supplied.
- **Proof for the page:** screen recordings or screenshots of what he names; licensed or public-domain photos fetched from the web, credited in the asset list; honest drawn UI mocks (search bar, result card, button). Never another creator's reel (fix, oa4), never a copyrighted photograph as decoration (fix, oa3), never a sponsor's simulated screen (fix, oa5).
- **Logos** only for what the script actually discusses, small, inside a card; no "With [brand]" lockups (M11).
- **Matte:** needed for G-1 depth (behind the head), G-8 pop-out and the B&W cut-out (§12.3).

### 8.7 Elevated devices (new in this edition)
| ID | Device | When | What runs | Sound |
|---|---|---|---|---|
| **EV-1** | **The poster in the room** | Every hero word behind the head (G-1, G-2, G-3) | Behind the matted cap/hair, the word gets a soft contact shadow from the head (≈ 20% black, 18 px blur), the scene's key light wraps 2–4 px onto its facing edge, and it drifts 0.3–0.6 px/f against the speaker's slow push (parallax). It lands with the measured blur-rise, then settles 102 → 100% over 3 f (never past 100%). Never over the eyes or mouth | `air-low-woosh` or `woosh-2025-08-27-02-12-31-utc-woosh-01` (very low) on the **first** word of a phrase only |
| **EV-2** | **Real paper** | Every page stretch (G-6, G-7, G-13, G-14) | The page has fine grain, a faint halftone, a warm lamp gradient from the top-left and a slow light sweep every ~4–6 s; the first card of a page stretch lands like a print laid on a desk (its contact shadow 2 f early, a 2% compression, the shadow tightening; on cream the shadow fades out after the landing, as measured). Swaps inside the slot stay hard cuts (T-13) | `paper-turn-page` on the page's arrival; `paper-away` when a stretch clears (≤ 2 each) |
| **EV-3** | **The polaroid develops** | P-10, G-7, G-8 | On the white flash (T-03) the polaroid lands border-first; its window starts warm white and **develops** into the photo over 8–10 f (exposure and warmth easing in); the stills then swap every 8–16 f; out on the flash. ≥ 940 px wide | `classic-camera-focus-and-shutter-ohmlab` or `camera-shutter-2025-02-19-17-59-23-utc-dslr-camera-shutter-v2` on the flash |
| **EV-4** | **A hand-drawn marker** | Every G-11 stroke, P-08 | The stroke draws at a hand's speed with pressure (thicker mid-stroke, tapered ends), a 1–2° wobble, and finishes **on the named word**; an ellipse overshoots its start by ~10° like a real hand; the arrowhead draws last. One stroke at a time; nothing else moves while it draws | `objects-drawing-board-marker-on-paper-drawing-line-medium-length-02-vadi` (lines, arrows) or `objects-drawing-board-marker-on-paper-drawing-circle-04-vadi` (circles, ellipses), trimmed to the stroke |
| **EV-5** | **Numbers with weight** | Every digit build (G-4, P-05), the numeral plate (G-5) | Each digit drops 12 px into place with a 1-frame compression; the block **glides** 3–4 f to re-centre as it grows (never jumps); the last digit gets a soft bloom; the block ≥ 690 px wide in the sky above the head, behind the cap if they meet | `abstract-hit-sub-bass-07` (low) on the last digit; `05405-shine-ding` on the land |
| **EV-6** | **The slot remembers** | Callbacks (SD-3), receipts (SD-4), the recap | The page's card slot keeps its history: on a callback or the recap the earlier cards fan out of the slot in a stack (2–3° rotations, 3 f apart) and gather back; a receipts montage plays as a riffle, the covers flicking through the slot at ~0.5 s | `swoosh-2025-01-08-03-02-26-utc-swoosh-02` on the fan; `digital-camera-fast-shutter-digital-camera-fast-shutter-3` once under a riffle |
| **EV-7** | **Light that changes with the meaning** | Per-item looks (SD-2), the doubt beat | Item → item the grade changes under a warm light sweep (6 f) instead of a flat swap; on a doubt line the frame goes B&W (≤ 2 s) and **colour blooms back from the face outward** over 6 f on the action word. Never pale between | `woosh-2-2025-08-27-06-25-17-utc-woosh` (low) into the B&W; `short-shine-2025-08-27-06-45-01-utc-short-shine-2` on the colour return |
| **EV-8** | **The poster carry** | Full frame → page, at most 3 per reel | The hero word on the face doesn't just die with the cut: on the noun it lifts on an arc (8–10 f), turns `posterInk` as it crosses onto the cream and lands as a **lemon tape label** across the top edge of the incoming card (ink caps ≥ 80 px on a `posterLemon` strip, ~2° tilt); the card arrives under it. Back to full frame, the label peels off with the cut | `turn-whoosh-transition` (low) |
| **EV-9** | **The page dock** | A number, result or example he keeps talking over (§3.8a) | He shrinks from full frame into the wide photo card on the lower page (T-18: 12 f on a soft arc, a 4 f settle) while the proof lands above; on the next claim the card grows back to full frame (T-19: 10 f) as the page slides away | `woosh-2025-08-27-02-12-31-utc-woosh-04` in; `zoom-2025-05-09-19-11-57-utc-zoom-4` out |

---

## §9 Transition system (`T`)

### 9.1 Transition library (frames at 23.976 fps; sounds for the designed moves are in the §11 palette, plain cuts are silent)
| ID | Transition | Frames | Recipe |
|---|---|---|---|
| **T-01** | **Hard cut on the pulse** (default) | 0 | Straight cut every ~1.04 s in tours (49 of 73 mid-word: cuts follow the ~1.04 s pulse, not sentences); on sentence ends in tutorials |
| **T-02** | **Title dies with the cut** | 0 | The poster phrase has no exit; the cut removes it (oa1 f96, f1087) |
| **T-03** | **White flash** | 3–4 | f0 normal; f1 ~90% white blow-out of the outgoing shot with the incoming ghosting through; f2 white + incoming; f3 incoming bright and warm; f4 clean. Same in reverse to leave. Only into and out of a polaroid memory (oa1 f693–697, f742–746) |
| **T-04** | **1-frame flash cut** | 1 + 2–3 | Hard cut → 1 frame pure white → 2–3 f of the incoming blown-out, fading to normal; every 0.4–0.9 s through a B&W anxiety montage (oa2) |
| **T-05** | **Zoom-blur punch** | 6 + 6 | Push into a detail (a hand gesture) with motion blur over 6 f, hard cut, the new shot settles from a blurred push over 6 f (oa2 f54–72). Face rule: the push ends on the hand, never mid-face |
| **T-06** | **Whip-pan blur** | ~6 | Horizontal smear from one look to the next (B&W → colour, oa2 f197–203) |
| **T-07** | **Defocus-fade** | 3–4 | Cards blur and fade while the next title builds (oa2 f674–677) |
| **T-08** | **Light-leak burn** | 4–5 | Warm cream/yellow over-exposure washes the scene to white, the next set appears (oa2 f1252–1257, into the CTA) |
| **T-09** | **Carousel whip / polaroid tilt-slide** | ~15 / ~4 | The card row whips left with heavy blur; a polaroid rotates ~20° and slides off with blur |
| **T-10** | **Speck-to-card** | 4–6 | A card (series card, phone-UI card) grows from ~2% to 100% with zoom blur and a strong ease-out, its shadow growing with it (oa5 f220–224, f721–727) |
| **T-11** | **UI push / whip** | 3–4 | A fast blurred push from the phone card into the tapped button; whip or pull back to the card for the next step (oa5) |
| **T-12** | **Format rotation** | ~105 | §8.1 G-19 (oa3 6.3–11.3) |
| **T-13** | **Page swap** | 0 | The page stays; only the card's content hard-swaps; swaps accelerate to ~5 f before a chapter (oa3, oa4) |
| **T-14** | **Punch-in cut** | 0 | A cut to the same shot +25–35% (oa4 3.46 on "365", oa5 67.32 on the sign-off), sized by the face rule |
| **T-15** | **Dissolve** | ~12 | Before → after inside the framed photo only (oa5) |
| **T-16** | **Dark-dip frames** | 1–2 | 1–2 near-black frames between clips in a fast recap burst (oa5 13.2–14.2) |
| **T-17** | **Walk-out / loop end** | — | He leaves frame; the frame (and poster) holds 0.4–2 s; or a cut back to the opening shot (§6.6) |
| **T-18** | **Dock** (this edition) | 12 + 4 | Full frame → the page dock: the take shrinks on a soft arc into the wide photo card (x 70–1010), the page fades up behind it in 4 f, the proof lands above 2 f later (EV-9) |
| **T-19** | **Undock** (this edition) | 10 | The dock card grows back to full frame on the claim's first word; the page and the proof slide away under it |
| **T-20** | **Poster carry** (this edition) | 8–10 | The hero word lifts off the face shot on an arc, turns ink and lands as the tape label on the incoming card (EV-8); the cut to the page sits under it |

### 9.2 Transition grammar
| Boundary | Use | Never |
|---|---|---|
| Frame 0 | Composed frame, speaker in position, poster writing | Fade-in, black, an empty frame |
| Hook → setup | T-01 (or T-05 out of a gesture) | A flash |
| Full frame ↔ page | T-01 on the pulse; T-10 into a paper card; T-03 into/out of a polaroid; T-20 poster carry; T-18 / T-19 for the dock | A slow push or dissolve into the page |
| Inside the page | T-13 | Rebuilding the page |
| Item → item (archetype) | T-01 with a new look, T-04 inside a B&W montage, T-06 between looks | The same look twice |
| Into the CTA | T-08 | — |
| Last frame | T-17 | An accidental black tail |

### 9.3 Transition map (part of the plan)
```yaml
transitions:
  - {t: 0.00,  id: open, note: "speaker in position, title line 1 at f0"}
  - {t: 6.34,  id: T-12, note: "16:9 card rotates into the vertical frame"}
  - {t: 11.26, id: T-01, note: "to the cream page, first example card"}
  - {t: 14.68, id: T-01, note: "full frame for the rule"}
  - {t: 82.0,  id: T-17}
```

### 9.4 Transition budget (per 60 s)
- Hard cuts: 25–50 in a tour, 15–30 elsewhere; page swaps as many as examples.
- Designed moves: **2–6 per reel**, each on a format change (T-03 ≤ 2, T-08 ≤ 1, T-12 ≤ 1, T-20 ≤ 3), plus 1–3 dock round trips (T-18 / T-19); punch-in cuts ≤ 3; dissolves only for before/after.

---

## §10 Motion tokens, camera, layers, finishing

### 10.1 Motion tokens (23.976 fps)
| Token | Value |
|---|---|
| Trigger | Hero word lands 0–2 f before its spoken word; ~1 word every 6–7 f in a fast build |
| Blur-rise | From ~0% opacity, 10–20 px below, heavy vertical motion blur, in place in 4–5 f; most of the move in the first 2 f; no overshoot |
| Phrase exit | Blur + fade upward 3–4 f, then a clean gap ~4 f before the next phrase |
| Push-up scroll | Rise from 300–400 px below in 4–5 f; the old line pushed off the top with the same blur |
| Line wipe | 2 f in, 2 f out (line 2 out first) |
| Hard pop | 0 → 100% in 1 f (digit builds, word replace) |
| Numeral pop | ~5% → 40% (blurred) → 85% (blurred) → 100% sharp over 3–4 f; hold ~10 f |
| Marker write-on | 6–8 f along the path, arrowhead last |
| Card fly-in | 3–5 f with motion blur, slight 3D yaw, then a slow drift (a few px/s) |
| Card pop | 60 → 100% in ~4 f (grid carousel); 40 → 100% in ~8 f (polaroid), ease-out |
| Speck-to-card | ~2 → 100% in 4–6 f with zoom blur |
| Carousel advance | ~15 f whip with heavy horizontal blur |
| Defocus-fade | 3–4 f |
| White flash | 3–4 f (§9 T-03) |
| Easing | Fast ease-out with directional blur; **no bounce, no elastic, no overshoot** (N3) |
| Settle (this edition) | Poster words and cards 102 → 100% over 3 f after landing; never past 100% |
| Card land (EV-2) | Contact shadow 2 f early; a 1-frame 2% compression on contact; the shadow tightens over 2 f |
| Polaroid develop (EV-3) | Warm white → photo over 8–10 f, after the border lands |
| Digit drop (EV-5) | 12 px drop + 1-frame compression per digit; the block glides 3–4 f to re-centre |
| Parallax (EV-1) | The poster drifts 0.3–0.6 px/f against the speaker's push |
| Paper light sweep (EV-2) | A soft diagonal +6% brightness band crossing the page in ~1.2 s, every ~4–6 s |
| Dock (T-18 / T-19) | 12 f in on an arc + 4 f settle; 10 f out |

### 10.2 Camera
- **Footage carries the motion:** handheld drift, walking, driving, 0.5× POV, top-down wides. No digital zooms in a tour.
- **Hook push-in:** a slow continuous push ~+35% over the hook (oa2 f0–56), stopped where the face rule says.
- **Punch-in cuts** (T-14) on a number or the last joke, ≤ 3 per reel.
- **Page devices move a little:** callback cards drift, the fly-through pushes slowly; the cream page itself barely breathes: its grain lives, a warm light sweep crosses it every ~4–6 s (EV-2), the card holds still.
- **Never zoom past the face** (§3.7): when a shot is too tight, keep it full screen as shot and move the text, or use the face card; never shrink it over its own blur.

### 10.3 Layer order (back to front)
1. Page / paper backdrop (or full-frame footage)
2. Cards, polaroids, framed photos, phone-UI card (with shadow where the page has one)
3. **Hero poster words** (depth layer)
4. **Matted speaker / foreground object** (head, cap, mirror, walking body) — this is what puts the poster behind him; its soft contact shadow falls on the poster (EV-1)
5. Connector words that sit in front, floating defocused foreground text
6. Marker annotations, centre guide line
7. `CAP-SUB`
8. Flash / light-leak layer (T-03, T-04, T-08)

### 10.4 Finishing
- Grade per §4.3; **never pale** (§4.5): deep blacks, warm skin, saturated skies; light grain allowed on tungsten and B&W looks; no added vignette on footage (vignettes belong to the paper pages).
- Typos: check every poster word and subtitle against what is said (M13).

---

## §11 Sound design (D4)

**No music bed, ever.** Sound is SFX only (the creator's direction, 12 Oct 2026): never a music track, bed, drone or loop under the voice.

### 11.0 What the references do (measured)
| Format | Music in the reference (evidence only; we don't use it: SFX only) | Designed sounds |
|---|---|---|
| `FMT-TOUR` | Bassy chill hip-hop / lo-fi, ~9 dB under the voice; steps up ~10 dB in the low end at the section change (oa1 41–44 s) and stays up | **None** (cut transients equal the baseline) |
| `FMT-ARCHETYPE` | Cinematic hip-hop / trailer-ish, 4–10 dB under, rising slightly 28–44 s; **hard stop to digital silence** ~1.2 s before the end | One low boom at the turn (36.5 s, louder than the voice), airy whooshes on the "BUY NOW" pop and the card fly-in, a whoosh into the CTA |
| `FMT-PAGE` | Lo-fi bed ~14 dB under; music-only intro ~0.7 s and a music-only beat break under the detail inserts (4.3–6.1 s); thins after ~72 s | Whoosh into the rotating card (6.34), a whoosh on the cut to "let's break down" (14.68) |
| `FMT-RECAP` | **None for 16 s**: dry voice, real silence, diegetic car door and engine; a short riser 16.15–16.5, a bass drop at 16.5, the bed enters on the turn line; dips 64–68 s under the reflective lines; plays out loud under the empty-frame ending | The riser + drop only |
| `FMT-SERIES` | Light upbeat bed 5–10 dB under; low end lighter under the tutorial core; fades after the last word | Whoosh/shimmer on the series card, whooshes on the UI-card scale-in and the first UI zoom, on the skit cuts in and out |

Measured loudness: oa1, oa2, oa5 −14.2 LUFS (true peak −0.3, −1.4, −0.1 dBTP); **oa3 −10.9 and oa4 −10.4 LUFS at 0.0 dBTP (fix)**. The references ran 0–5 designed sounds per reel on top of a bed. This edition drops the bed and **scores every picture event** at the style's calm: a tactile palette of paper, shutter, marker, air and one deep weight, about one cue every 1.6–2.4 s on shown beats; the talking head's plain cuts stay dry.

### 11.1 The palette (tactile and cinematic: paper, shutter, marker, air, one weight)
| Event | Ids (SOUNDS.md; rotate within each pool) | Level vs voice |
|---|---|---|
| Poster phrase rise (the first word of a phrase only, EV-1) | `air-low-woosh`, `woosh-2025-08-27-02-12-31-utc-woosh-01`, `woosh-2025-08-27-02-12-31-utc-woosh-03`, `simple-whoosh-382724` | −22…−26 dB |
| The page arrives / clears (EV-2) | `paper-turn-page`, `paper-away` | −18…−20 dB |
| Card fly-in, callback, carousel whip (G-9, G-10, P-14, T-09) | `whoosh-2025-01-08-02-32-33-utc-whoosh-04`, `fast-swish-movement-fast-swish-movement`, `swoosh-2025-01-08-03-02-26-utc-swoosh-02` | −16…−20 dB |
| Speck-to-card, UI push (T-10, T-11) | `woosh-2025-08-27-02-12-31-utc-woosh-02`, `zoom-2025-05-09-19-11-57-utc-zoom-5`, `zoom-in-zoom-in` | −18…−22 dB |
| Polaroid / white flash (T-03, EV-3) | `classic-camera-focus-and-shutter-ohmlab`, `camera-shutter-2025-02-19-17-59-23-utc-dslr-camera-shutter-v2`, `flash-2025-08-27-06-37-47-utc-flash-1` (low) | −18…−22 dB |
| Receipts riffle (SD-4, EV-6) | `digital-camera-fast-shutter-digital-camera-fast-shutter-3` (one burst under the montage) | −22 dB |
| Marker stroke (G-11, EV-4) | `objects-drawing-board-marker-on-paper-drawing-line-medium-length-02-vadi`, `objects-drawing-board-marker-on-paper-drawing-circle-04-vadi`, `objects-drawing-board-marker-on-paper-drawing-line-long-01-vadi` (trim to the stroke) | −20…−24 dB |
| **Numbered chapter / item (the list cue)** | `game-pop-up-2025-08-27-06-39-58-utc-game-pop-up-3` (a warm low pop) on every numeral plate (SD-1) or item title (SD-2) | −18 dB |
| Number build (EV-5) | `abstract-hit-sub-bass-07` (low) on the last digit, `05405-shine-ding` on the land | −16 / −22 dB |
| Search bar / UI mock typing (G-17, P-14) | `keyboard-typing-2025-02-18-23-33-14-utc-mountain-audio-typing-sound-3`, `keyboard-typing-2025-02-18-23-33-14-utc-mountain-audio-typing-sound-17` | −26 dB |
| Button / cursor (P-15, G-17) | `mouse-click-mouse-click`, `ui-click` | −22 dB |
| Series card shimmer (SD-6) | `short-shine-2025-08-27-06-45-01-utc-short-shine-1` | −20 dB |
| Before → after (P-16) | `appear-magic` (low) | −22 dB |
| B&W in / colour back (EV-7) | `woosh-2-2025-08-27-06-25-17-utc-woosh` (low) / `short-shine-2025-08-27-06-45-01-utc-short-shine-2` | −20 / −22 dB |
| Format rotation (T-12) | `whoosh-2025-01-08-02-32-33-utc-whoosh-06` | −16 dB |
| Poster carry (T-20, EV-8) | `turn-whoosh-transition` (low) | −20 dB |
| Page dock in / out (T-18 / T-19, EV-9) | `woosh-2025-08-27-02-12-31-utc-woosh-04` / `zoom-2025-05-09-19-11-57-utc-zoom-4` | −20 dB |
| Into the CTA (T-08 light leak) | `cinematic-transition-flash-05` (low), `whoosh-2025-01-08-02-32-33-utc-whoosh-02` | −16…−18 dB |
| **The turn** (the reframe / the big turn, once) | `boom-2025-01-08-02-40-38-utc-boom`, `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5` | −6…−10 dB |
| Act-break riser + drop (SD-7, once) | `riser-hit-2025-08-27-06-39-00-utc-riser-hit-1` (trim to the 2 s swell + boom), `riser` | −8 dB |
| End card (E-3) | `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-6` (low) | −14 dB |

- **Real sound is welcome** under a vlog beat (oa4: car door, engine); it counts as a cue for the cadence.
- **Never in this style:** meme or cartoon sounds, glitches, alarms, cash registers, long risers under the voice; nothing that sounds like a template pack. The vibe is cinematic and tactile.

### 11.2 The SFX ledger (Naman's rule)
- **Any file at most 2× in a reel,** except the one **list cue** (`game-pop-up-2025-08-27-06-39-58-utc-game-pop-up-3`, one per numbered chapter or item).
- **No file on two consecutive cues;** rotate within each pool.
- **Density:** about one cue every 1.6–2.4 s on shown beats (a poster phrase, the page, a card, a polaroid, a marker stroke, a number, a UI step); swaps inside the card slot and plain cuts on the talking head stay dry; in a tour's ~1.04 s pulse, score the first and last shot of a list burst, not every cut.
- **Never more than two cues overlapping;** never on a consonant (shift ±2 f). Every cue sits under the voice; the turn boom is the one sound allowed to rise near it.
- Log every cue in the plan's sound ledger (`plan/sounds.json`).

### 11.3 Silence and the mix
- **Go quiet (no new cue) for 0.4–0.6 s before the turn line and before the payoff,** then land the boom or the shine.
- **Endings:** no music under any ending; E-2 ends in digital silence ~1.2 s before the end; E-4's empty frame holds with the room's own sound.
- **Mix:** high-pass the voice at 80 Hz, light compression, de-ess; normalise to **−14 LUFS integrated, true peak ≤ −1.0 dBTP** (fix: oa3, oa4 at −10.4 to −10.9 LUFS and 0.0 dBTP).

---

## §12 Footage handling

### 12.1 Shoot setups (identify which the footage uses; full-frame face values are in §3.7)
| Setup | Description |
|---|---|
| **A: Tripod seated** (house) | Locked-off, 35–50 mm feel, a warm set with lamp practicals, ≥ 500 px headroom |
| **B: Desk / wide lens** | Tripod, slight low angle, laptop foreground |
| **C: Selfie arm's length** | Front camera, slight wide-angle distortion, chest-up; often too tight → the §3.7 fix |
| **D: Mirror selfie** | Phone visible in a mirror; subject small inside the mirror shape |
| **E: Wide / top-down / outdoor** | Full body, sky or ground for type (head y ≈ 280–520) |
| **F: B-roll** | Macros, 0.5× POV, signage, inserts |

### 12.2 Crop table (starting values)
| Layout | Placement |
|---|---|
| Full frame + poster (all) | As shot; poster block above the head: head top ≥ poster block top + 120 px so the hero word can sit behind the cap. If headroom is short (selfie), keep the shot full screen and size the poster to the headroom there is (it may sit lower, beside the head, or behind the shoulders), never shrink the shot over its blurred copy (§3.7) |
| Hook push-in | Up to +35% over the hook, ending with the cap top ≥ 80 px inside |
| Punch-in cut | +25–35%, cap top ≥ 80 px inside, chin ≥ 80 px above the subtitle zone |
| 9:16 card on cream | Footage scaled into x 190–890, y 183–1428 (700×1245, r ≈ 38); face whole with ≥ 40 px margins |
| Polaroid (beige) | Card x 60–1020 (measured 87–993), y 372–1548, photo window inside the ~25 px border; face whole, ≥ 40 px margins |
| Grid carousel card | x 0–600 (measured 0–455), y 307–1407; face centre ≥ 100 px inside the visible edge |
| Page dock (§3.8a) | Dock card x 70–1010, y ≈ 760–1420 (grows to y ≈ 640 for a tight selfie; the footage always fills the card, never a blurred fill); whole head with ≥ 40 px above the hair/cap and ≥ 60 px below the chin; full colour |
| Small cut-out on a page | Matted, full body, head ≈ y 830, ~600 px tall |

### 12.3 Matte
- Needed for: hero words behind the head (G-1), the pop-out polaroid (G-8), the B&W cut-out among callback cards (P-11), a poster behind a walking body (SD-12).
- Use the plugin's person matte on the speaker's footage; a shaped mask is enough for a static mirror or object (oa1).

### 12.4 Frame rate
- References are 23.976 fps. Render at the plugin's rate and convert durations with t = f / 23.976.
- Conform variable-frame-rate phone footage to constant first.

### 12.5 Audio
One clean voice track; the chain in §11. Keep diegetic sound where a vlog beat uses it.

---

## §13 Output contract

### 13.1 Beat sheet schema (one row per beat; the first ```yaml``` block of the edit brief)
```yaml
- id: 7
  section: TIP-1                 # HOOK | SETUP | ITEM-n | TIP-n | STOP-n | TURN | PAYOFF | CTA | END
  format: FMT-PAGE               # one per reel
  speaker: page                  # full | page | dock | polaroid | card | absent (§3.0a, §3.8a)
  spoken: "My golden guide is this vertical line right here."
  caption: ["My golden guide", "is this vertical line right here."]   # every spoken word, 2–6 words each, 86–96 px
  trigger: "right here"
  onset_s: 21.70
  pattern: P-08
  poster: null                   # hero words + connectors, or null
  page: {theme: cream, slot: "9:16 x190–890 y183–1428", content: "example clip, subject on the centre line"}
  face: "no face in card"        # where the face sits and that it is whole (§3.7)
  motion: "centre line on; marker arrows write on 6–8 f on 'right here'"
  transition: T-13
  sound: [objects-drawing-board-marker-on-paper-drawing-line-medium-length-02-vadi]   # ids from SOUNDS.md on this beat's pictures (§11), [] on a plain talking beat
  ev: [EV-2, EV-4]               # elevated devices on this beat (§8.7)
  assets: ["example clip"]
```

### 13.2 Hook proposals (3 required)
```yaml
- name: "Topic title over a composed wide"
  formula: HF-3
  format: FMT-PAGE
  frame0: "speaker already in position in a wide; title line 1 wiping in at f0"
  first_3s: "f0 line 1 · f2 line 2 · f20 first subtitle · ~f60 push-in starts · 8 events by 3 s"
  captions: ["Today we're gonna talk about", "how I frame my vertical videos."]
  why: "a beautiful frame, the topic in 1 s, a numbered promise"
```

### 13.3 What to show the creator
(1) the format and one line on why, the page theme and the poster yellow; (2) the 3 hook proposals with the recommended one and its frame 0; (3) the speaker map (full / page / dock / polaroid / card / absent per beat) with the full ↔ page cycle count; (4) the beat sheet + transition map + the sound ledger; (5) the asset list (stills from the take, fetched proof with credits, drawn mocks) with anything missing; (6) stills: frame 0, the 3 s mark, the first hero word landing behind the head, one page card at its fullest, the page dock with its proof, a polaroid developing, a number build, the tightest face crop, the last frame.

---

## §14 Worked example and cheat sheet

### 14.1 oa3 "cinematic vertical video composition" rebuilt as a plan (`FMT-PAGE`)
**Choices:** `FMT-PAGE` · HF-3 · cream `#FAF4E1` · `posterLemon` · SD-1 plates + SD-10 rule overlay · speaker full ↔ page 4 cycles (one as the page dock) · ending E-3 · a calm, tactile SFX score, no music · fixes: f0 not empty, subtitles 86–96 px (under the chin on full frame, `subInk` on the page), −14 LUFS, no famous photographs, cap never cut, never pale.

| t (s) | Spoken | Speaker | On screen | Move / sound |
|---|---|---|---|---|
| 0.00 | "Today we're gonna talk about how I frame my vertical videos." | full | Top-down wide, he is **already leaning on the car** (fix); "CINEMATIC VERTICAL / VIDEO COMPOSITION" wipes in f0/f2; subtitles from 0.74 s | open · `air-low-woosh` under the title |
| 4.59 | — | absent | 3 detail inserts, 14 f each | T-01 ×3 |
| 6.06 | "See, most of us, we came from the horizontal video era and we just had to adapt." | absent | 16:9 driving clip on black, rotating and growing into the 9:16 frame | T-12 + `whoosh-2025-01-08-02-32-33-utc-whoosh-06` |
| 10.91 | "I'm not saying that it's bad or good, but rather a necessity." | page | Cream page; his own past reels in the 9:16 slot, hard swaps 0.5–0.9 s; subtitle in `subInk` | T-01, T-13 · `paper-turn-page` as the page arrives |
| 13.29 | "So let's break down how to still achieve cinematic images while filming vertically." | full | Desk talking head (cap top ≈ 630); "CINEMATIC IMAGES" outline stack on "cinematic images", behind the cap (EV-1) | T-01 · `woosh-2025-08-27-02-12-31-utc-woosh-03` under the stack |
| 18.9 | "Number one." | absent | Freeway plate; "Number.." subtitle; numeral "1" pops | SD-1 · list cue `game-pop-up-2025-08-27-06-39-58-utc-game-pop-up-3` |
| 20.08 | "My golden guide is this vertical line right here." | page | Example clip in the slot, **centre line on**, marker arrows drawn by a hand finishing on "right here" (EV-4) | T-13, P-08 · marker line |
| 23.16 | "We don't have the luxury of using the rule of thirds…" | page | 16:9 examples with a white 3×3 grid in the 16:9 slot, swaps ~1 s | T-13 |
| 27.34 | "That's okay. The overall weight of the composition should be centred." | full | Desk, poster "CENTERED" behind the cap, contact shadow and parallax (EV-1) | T-01, P-03 · `simple-whoosh-382724` |
| 31.17 | "Whether it's leading lines, B-roll, a two-shot of anything…" | absent | List burst with the centre line, marker triangles on the leading lines, ~1 s per example | SD-9, P-08 |
| 37.57 | "Cut!" | absent | "C / U / T" stacked build, 10 f hold | — |
| 38.92 | "Okay, so here's a pro tip…" | full | Close lean-in **full screen as shot, the cap touching the top edge, eyes to chin in** (fix: never shrunk over its blur) | T-01, §3.8 |
| 44.02 | "turn your body and put your lead eye in the centre." | dock | The example above as a 4:5 crop with a marker circle on the eye + arrows; he keeps talking in the page dock below (§3.8a) | T-18, P-08 · `woosh-2025-08-27-02-12-31-utc-woosh-04` + marker circle |
| 50.93 | "And some of the most iconic paintings and photographs have proven so." | page | Public-domain paintings only (fix), swaps accelerating to ~5 f | T-19 then T-13 · `paper-away` as the swaps end |
| 54.77 | "Number two, place things in the front and behind you…" | absent → page | Grass plate + "2"; then the depth example in the slot with marker ellipses on foreground and background | SD-1, P-08 · list cue + marker circle |
| 61.36 | "…will give that sense of depth…" | full | Park talking head; a punch-in cut at ~63.8 s so the 6.8 s hold breaks | T-14 |
| 66.75 | "And lastly, number three, film what's important above this lower third." | absent | Garage plate + "3"; street demo with marker arrows rising from the lower third | SD-1 · list cue |
| 69.71 | "Everything below this is dead space…" | page | Phone mocks in the phone slot, marker ellipse on the caption area | T-13 |
| 76.77 | "Whoa." "Well, that's all folks… Peace." | full | Blooper, then the sign-off seated on a wall | T-01 |
| 81.92 | — | absent | End card "THIS WAS PART 1 / JOIN [COMMUNITY] / LINK IN BIO" | E-3 · `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-6` (low) |

### 14.2 Reference-reel cheat sheet
| Reel | Format | Learn from it | Don't copy |
|---|---|---|---|
| oa1 store tour | `FMT-TOUR` | The ~1.04 s pulse, a picture per noun, the depth poster behind the mirror, the flash-in polaroid, the loop ending | ~42 px subtitles on white shelves; the sponsor framing; the cap cut in the 43 s selfie |
| oa2 three types | `FMT-ARCHETYPE` | One look per item, posters behind the cap, black-on-white flip, callback cards, grid carousel, pop-out polaroids, light-leak into a red CTA, walk-out ending | Yellow subtitles on the white cyc; the 24.9 s close-up cutting the cap and eyes |
| oa3 composition | `FMT-PAGE` | Cream page + card slot, centre line, marker annotations, numeral plates, format-rotation card | Empty f0, −10.9 LUFS, famous copyrighted photos, a silent end card, the cap cut on the lean-in |
| oa4 decision | `FMT-RECAP` | Digit builds, word-replace builds, receipts on cream, the dry-voice → riser → drop act break, walk-out | Empty f0, −10.4 LUFS, other creators' reels, "LETS" |
| oa5 series ep. | `FMT-SERIES` | Push-up question hook, series card from a speck, phone-UI card + button zooms, framed before/after, skit bookends, punch-in sign-off | The sponsor lockup, the 15 px disclaimer, thin 45 px script on a bright sky |

---

## §15 Look at your frames
Not a checklist; the questions the best editor asks while scrubbing:
- **Frame 0, sound off:** is he (or the real thing) in position in a beautiful frame, the first hero word already rising behind the cap, a subtitle on? Would I stop scrolling? Do 8–10 things happen by 3 s?
- **Their video and every picture:** full screen, or in a designed box it fills on the style's own ground? Never a sharp rectangle (footage, recording, landscape clip, photo) over its own blur, never blurred side bars, never a card on their blurred frame?
- **Every word:** on screen, `CAP-SUB` just under the chin on full frame, `subInk` on the page, readable on a phone at arm's length?
- **The speaker:** does he move (full, page, dock, polaroid) and come back full frame for every claim and the ending? Is any layout unchanged for more than ~6–8 s without a push, a poster or a card?
- **Every noun:** does it have a picture, on the word? One poster phrase and one card at a time? Is any frame mostly empty for more than ~0.7 s?
- **Scale:** shrink the still to thumbnail size. Is the hero word or the card the first thing I see? Polaroids and face cards ≥ 940 px, never a pillar?
- **Depth and paper:** does the poster sit in the room, the cap in front with its soft shadow? Does the page feel like real paper under a lamp? Do cards land with weight?
- **The face:** whole, cap/hair to chin, in every frame, punch, card, polaroid and dock?
- **Colour:** warm, rich, deep blacks, never pale? B&W only as a short beat, colour blooming back?
- **Sound:** paper, shutter, marker and air on their pictures; the list pop on every item; no file overused; a hush before the turn; no music?
- **Vibe:** calm, warm, tasteful. Anything loud, bouncy or templated comes out.

---

## §16 Build + render

- **Pipeline:** the plugin's edit skill: plan, draw every frame in `reel.js` (`frame(t)`), look at stills, score (`plan/sounds.json`, then `veos sfx`), storyboard, render.
- **Fonts:** all bundled, mapped in §5.1.
- **Component map** (helpers you write once per reel):

| Component | Role |
|---|---|
| `Page(theme)` | Cream / beige / vignetted / grid / dark-grid backdrop (§4.2) |
| `Speaker(t)` | Full frame, page, dock, polaroid or card per the speaker map; applies the face rule (§3.7): full screen edge to edge or a face card the footage fills, never shrunk over its own blur, colour kept |
| `Matte(t)` | The speaker's alpha, for posters behind the head and cut-outs |
| `Poster(words, t0)` | Hero words + connectors, blur-rise / push-up / wipe / hard pop (§5.3–5.4, §10.1) |
| `DigitBuild`, `Numeral`, `StackLetters` | §5.4–5.5 |
| `Sub(text)` | `CAP-SUB` at y ≈ 1475, yellow + shadow or `subInk` per background |
| `Card(slot, src)`, `Polaroid`, `PopOut`, `Callback`, `Carousel`, `FramedPhoto`, `PhoneCard` | Page devices (§8.1) |
| `Marker(path, t0)`, `GuideLine` | Annotations and the centre line |
| `Flash`, `LightLeak`, `ZoomBlur`, `Whip`, `SpeckIn` | T-03, T-08, T-05, T-06, T-10 |
| `PosterDepth(word)` | EV-1: contact shadow from the matte, light wrap, parallax, settle |
| `Paper(theme)` | EV-2: grain, halftone, lamp gradient, light sweep; `CardLand` for the weighted landing |
| `Develop(polaroid)` | EV-3 |
| `HandMarker(path, t0, t1)` | EV-4: pressure, taper, wobble, finishing on the word |
| `DigitDrop`, `SlotFan`, `LightShift`, `PosterCarry`, `PageDock` | EV-5…EV-9, T-18…T-20 |

- **Final:** 1080×1920, H.264, AAC; check the frame count, loudness and a contact sheet of the final file.

---

## Appendix A. Evidence map (where each rule comes from)
| Rule / element | Reels |
|---|---|
| Serif lemon subtitles + black shadow at y ≈ 1488; too small and weak on paper (fix M8) | 5/5 |
| Yellow hero poster words behind the speaker | oa1 (mirror, stairs), oa2 (cap, silhouette), oa5 |
| Extended lemon titles, digit and word builds | oa3, oa4 |
| Script / italic-serif connectors | oa1, oa2, oa5 |
| Black hero words on white | oa2 |
| Cream page + rounded card slot | oa3, oa4 |
| Polaroid / photo on paper | oa1, oa2, oa5 |
| Callback cards, grid carousel, pop-out polaroids | oa2 |
| Marker annotations, centre line, numeral plates | oa3 |
| Speaker full for claims, page for proof | oa2, oa3, oa4 (+ oa1 polaroid, oa5 full/absent) |
| A picture per noun, ~1.04 s pulse, list at half pulse | oa1 |
| Riser-and-drop act break (oa4's music entrance; we don't use music: SFX only) | oa4 |
| Series card, UI card + button zooms, before/after | oa5 |
| Empty f0 (fix M6) | oa3, oa4 |
| Face cut by the frame (fix M7/N7) | oa1 ~43 s, oa2 24.9 s, oa3 38.4–44.8 s |
| Loudness / true peak (fix M12) | oa3, oa4 (−10.9 / −10.4 LUFS, 0.0 dBTP); oa1, oa5 TP −0.3 / −0.1 |
| Third-party content and plugs (fix M10/M11) | oa1 (sponsored), oa3 (famous photos), oa4 (other creators' reels), oa5 (sponsor lockup, disclaimer) |
| Typos (fix M13) | oa3, oa4 |
| Sizes as floors (`CAP-SUB` 86–96 px just under the chin, script ≥ 72 px, labels and UI ≥ 48 px, polaroids and face cards ≥ 940 px, the carousel card ≥ 560 px, no mostly-empty frame > ~0.7 s); every spoken word captioned; the page dock and the poster carry; the poster in the room, real paper, the polaroid that develops, the hand-drawn marker, numbers with weight, the slot that remembers, light that changes with the meaning; never pale (B&W ≤ 2 s); the whole face always (selfie shifted down, ≥ 88%); a calm, tactile SFX score with the ledger rule, no music; no imposed checks | **The creator's directions, 11–12 Oct 2026** |
