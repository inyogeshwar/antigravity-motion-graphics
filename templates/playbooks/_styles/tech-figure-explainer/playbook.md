# Tech Figure Explainer Playbook (v2, "Engineered Motion" edition, for Claude Opus 5.5)

> **In this plugin:** this file is the whole playbook: every measured value and recipe from the 3 reference reels is in it, and there is no other playbook file to open. Frame counts here are at **30 fps** unless marked "@25" (the references' measured rate): convert with t = f / fps inside `frame(t)`. Positions are on 1080×1920 (the references were 720×1280, scaled ×1.5). The per-reel notes it cites (`hx1…hx3`) are not shipped. Sounds are picked by id from SOUNDS.md; commands are in the edit skill's REFERENCE.md. The page gives you `FACE(n)` and `FACE0` (with `head_top` and `chin`) for framing every circle and cut-out.

**Purpose:** you (Claude) receive a talking-head video of the creator plus its script. Use this document to **ideate and build** every figure, window, diagram, counter, caption, cut and sound, then edit the Reel so that **every sentence becomes a purpose-built moving figure**, the creator anchors the turns, and the whole thing feels like a product demo built by the best engineering team you know.

**What v2 is:** a frame-by-frame analysis of 3 100xEngineers reels (hx1 "Claude solved a 9-loop physics problem": AI news in dark editorial figures; hx2 "This video is fully edited by Claude Opus 5.5": a masterclass promo in cream neo-brutalist windows; hx3 "If your AI bill is getting out of control, you probably need Jev": a product explained in flat pink diagrams), elevated around the creator's direction of 11 Oct 2026. Every measured layout, kit, recipe and rule from those reels is kept here; where a reference reel and a direction disagree, **the directions win**.

**Measured sizes are floors, not targets.** The positions and sizes in this file are what the references measured; the figure itself is drawn **big**, owning the content zone (§8.2b). A figure page with empty space for more than a second is unfinished.
- **Full screen or a box, never any footage or picture over its own blur** (Naman, 13 Oct): the creator's video, a screen recording, a landscape clip, a photo or a diagram either fills the whole frame edge to edge (cover-crop to the part that matters, or a push-in), or sits in a designed box (rounded, rimmed or softly shadowed, on this style's own ground, colour, gradient, texture, grid or drawn set) that it fills completely. Never shrink anything inside the frame over a blurred or darkened copy of itself, never pad a box, band or panel with blurred side bars, never set a card on the creator's own blurred frame. A tight selfie stays full screen as shot: move the text, not the video (eyes to chin always in; the hair may touch the top edge). When the whole head must show, use a box sized so the footage fills it with the head inside. (A matte cut-out over a plate is fine: it has no box edge.)

### The feel (read this twice)
This is an edit that **looks engineered**. Every figure is a small machine that runs: a window opens and its cursor moves, a counter climbs and lands exactly on the spoken number, a diagram routes a request while you watch, a grid of cards sorts itself the moment he says "classify". The energy is a builder's energy: **fast, confident, precise, a little playful in its details** (a lime ✓ sticker, a blinking cursor, a window that refills), but never silly. It is the opposite of a slide deck and the opposite of a hype reel. The viewer should finish it thinking two things: *I understood exactly how that works*, and *these people build properly*.

### Who this is, and who it's for
- **The reference creator:** an applied-AI education brand whose hosts talk in clear, fast, continuous **English** (3.56–3.73 words/s, Indian accent) about AI news, AI tools, workflows and their own courses. Calm-authoritative in news, high-energy in promos, never comic. The brand's promise is "we build real things", so **the edit itself must look engineered**: precise, systematic, dense.
- **The audience:** developers, builders, marketers and tech-curious professionals, mid-to-senior, who follow AI closely. They don't need hype; they need to **see the mechanism** (how the router decides, how the calculation ran, how the workflow sorts) in one look, and they reward edits that feel like a research paper or a product demo.
- **The lineage:** an editorial motion-design explainer in three layers.
  1. **Figures (58–71% of runtime):** full-screen, purpose-built animated figures, one per fact: counters, bars, rings, diagrams, terminals, documents, portraits, UI windows, sorting cards. Pictures carry the story, not words.
  2. **The anchor (5–25%):** the talking head, full frame, in the bottom half of a 50/50 split, or in a PIP circle, for turns, caveats, claims and the CTA. Every return lands with a settle.
  3. **Captions:** small, neutral 1–3-word boxes or pills on every spoken word, hard-swapped, never coloured. The figures do the emphasis.
- **One grammar, three kits** (§4): the grammar is constant; the kit is chosen per reel from the topic. Never mix kits in one reel.

### Creator directives
| # | Directive | Where it lives |
|---|---|---|
| D1 | **More powerful, plenty of motion graphics.** Every line gets a figure, and every figure moves: it builds, runs, changes state and hands off. The screen is never a still with words on it | §8, §10 |
| D2 | **Understand the vibe.** Engineered, smart, energetic, premium-playful. No memes, no cartoon sounds, no shakes, no neon gamer looks. The playfulness lives in the details (stickers, cursors, `.exe` titles, a lime ✓) | The feel, §4, §11 |
| D3 | **The right sound effects, scored densely:** every window, click, type, count, sort and reveal has its sound, from a tech-premium palette. **No SFX file more than 2× in a reel** (the one list cue excepted). | §11 |
| D4 | **The whole face, hair included, is always visible:** inside every circle, bubble, PIP or cut-out, and in every zoom, settle or punch-in on the footage. How far you zoom and how tight you crop is decided by the face, never by the frame | §2, §3.3 |
| D5 | **No imposed checks.** This file gives taste, recipes and reasons; you decide like the best video editor in the world. Only craft never bends | §2 |
| D6 | **The creator stays one glance away.** Full-frame turns, the split, the PIP circle: his face is on screen or one beat away the whole reel | §3 |

### The reference reels → this edition, at a glance
| Area | The reference reels | This edition |
|---|---|---|
| Figures | One figure per fact, 58–71% of runtime | One figure per fact **that runs**: each figure has a build, at least two state changes on the following words, and a hand-off into the next figure (§8.2) |
| Continuity | Hard cuts between figures; morphs inside BRUTAL | **Figure chains:** the next figure grows out of the last one (a window refills, a node opens into a diagram, a tile zooms into a page) wherever the story continues; hard cuts only where the subject changes (§9) |
| Speaker | Full-frame turns, split bottom, PIP | Same stages, plus **stage moves** between them (§3.2), and every circle framed from the face (D4) |
| Hook | Claim + evidence in 3 s | **The working demo:** frame 0 already shows the thing running, the claim types in over it, the result lands by 2 s (§6) |
| Chapters | Chapter slams (FLAT), FIG headers (FIG) | A **chapter system per kit** that reuses one composition with a new state each time, so the viewer learns the rhythm (§7) |
| Sound | ~4–6 accents | **Scored:** clicks, typing, appears, counts, sorts, whooshes, risers into reveals, a shine on every ✓; the ledger rule; a short silence (no new SFX) before the climax (§11) |
| Captions | Small neutral boxes, hard swaps | Same, placed so they never touch a figure; the number in a caption gets one weight step (§5.2) |
| Checks | A QA checklist | **Craft only** (§2) |

### Quick index
| § | What |
|---|---|
| §1 | Procedure |
| §2 | Craft that never bends |
| §3 | Stages, stage moves, framing the face |
| §4 | Kits and colour |
| §5 | Type and captions |
| §6 | Hook system: the working demo |
| §7 | Structure: spine, chapters, rhythm |
| §8 | Figure system: families, machines, chains, assets |
| §9 | Transitions |
| §10 | Motion language |
| §11 | Sound |
| §12 | Footage handling |
| §13 | Output contract |
| §14 | Worked examples |
| §15 | Look at your frames |
| §16 | Build + render |

---

## §1 Procedure

0. **Know the footage and the words.** Note the resolution (the full-frame anchor must stay sharp) and the setup (§12). Transcribe with word timestamps; check every product, model and person name against the script. Segment into `HOOK` (0–3 s), `SETUP` (what it is / the promise, with a preview of the body), body `CH`apters (one per use case, step or fact cluster), `TURN` / `CAVEAT`, `PAYOFF`, `CTA`.
1. **Watch and listen to the whole cut.** Mark the turns ("but", "now", "then in August", "all you need to do"), the claims about himself, and the CTA. Those are his full-frame beats.
2. **Find the one idea and its spine:** the system the reel is about, drawn once and changed by every point (a team of five seats; a router that decides; a run log that keeps going; a bill that climbs then collapses). Write it in one line.
3. **Choose the kit** (§4.1): `KIT-FIG` (news, research, a result with history), `KIT-BRUTAL` (launch, offer, "I built this with AI", a course), `KIT-FLAT` (a product or workflow through use cases). One line on why.
4. **Write one figure per fact** (§8.4): for every factual clause, name the figure that **shows the mechanism**, its build, its state changes on the following words, and how it hands off.
5. **List every number** with its onset: each one counts, grows, fills or multiplies, landing on the word.
6. **Plan the speaker map** (§3): full frame, split, PIP or hidden, beat by beat, with the moves between them; frame every circle from `FACE0` (D4). He appears on turn words ("Then in August", "Now, this isn't…", "All you need to do"), caveats, claims about himself and the CTA: 5–25% of runtime, 3–5 anchor beats per 60 s.
7. **Write 3 hooks, second by second** (§6), each with a formula, a frame-0 picture already in motion, the first-3-s events and the first captions; keep the one that promises most.
8. **Score it** (§11): every figure event gets its sound from the palette, logged in the sound ledger.
9. **Attack your plan** like the best editor you know: where is a figure just text in a box? Where does a figure sit still for more than a second? Where does a new figure arrive from nowhere when it could grow out of the last one? Where is the energy flat? Fix it in the plan.
10. **Draw, look at your frames** (§15), fix what a stranger would stumble on.

---

## §2 Craft that never bends

- **The whole face sits comfortably in every frame that shows it, at every zoom.** No settle, punch-in, zoom-through or crop on the footage goes so tight that his hair or chin leaves the frame: cap every zoom by the face box (`FACE0`, `FACE(n)` when he moves) with a little air above the hair. In any circle, bubble, PIP, card or cut-out, the full head is inside: hair with clear air above it, chin above the rim, ears not cropped by the edge. Size and place the crop from the face (`FACE0.head_top`, `FACE0.chin`, `FACE(n)` for movement), never by scaling the video frame into the shape. Full frame or split, no figure, caption or sticker covers the face or hair. The footage always fills its frame, half or circle (cover, cropped on the face): never shrink it over a blurred copy of itself or pad the split with blurred side bars; a tight selfie that won't fit the split bottom plays that beat full frame or in the circle.
- **Text never sits on text,** and nothing sits on the caption.
- **Sound is in sync:** each SFX on the frame its picture lands, never on a consonant of the word it illustrates (slide ±2 f).
- **Facts are true:** names, numbers, dates, benchmarks from the script or real sources; real photos for real people; real screenshots for proof. Illustrative values the speaker presents as an example are fine; fake metrics, fake comments from real brands and copyrighted film clips are not.
- **Spelling:** product, model and people names exactly as their owners write them.
- **Loudness:** −14 LUFS integrated, true peak ≤ −1 dBTP; the reel ends on the last word or the designed final state, never on accidental black.

Everything else is direction. You decide; write your reasons into the plan.

### 2.1 The house grammar (what makes it this style)
Not checks: this is what the three reference reels do every time, and why it works. Break one only with a reason in the plan.
- **Every factual clause becomes a dedicated, moving figure.** Figures hold the screen 58–71% of the runtime (hx1 71%, hx2 58%, hx3 ~60%). A sentence pasted on a card is never the visual: a figure shows the mechanism, the count, the person or the proof.
- **The breaths are cut.** No gap over ~0.3 s (0.5 s before a caveat). Cuts sit on word boundaries, 0–3 f before the first word of a clause, never mid-word.
- **Every spoken number moves and lands on the word:** count-ups (3→7 days, 0→96 CPUs, 1→10s→100s), bar builds, ring draw-ons, grid fills, highlighter sweeps; the last value lands on the key number (same frame to +2 f).
- **Nothing holds still:** inside a figure something new animates every 0.5–1.5 s; no frame static for more than ~1.5 s (FIG) or ~0.5 s (BRUTAL, FLAT). If the speech is long, the figure gains a state, never an effect for its own sake.
- **The speaker anchors, the figures explain:** ≤ 2.5 s per full-frame appearance, and his face available in the hook and CTA (PIP, split or full).
- **Every return to the speaker lands with a settle** (T-02), capped by his face (§3.3).
- **One kit, one system:** one canvas, one outline/shadow rule, one palette, one type trio (display or serif numerals + mono labels + caption sans) for every figure.
- **Captions on every spoken word, small and neutral** (§5.2); where kinetic type says the same words, it *is* the caption (never both).
- **Name and picture every person:** a portrait chip pops on the name.
- **Structure is numbered on screen:** chapter slams, or figure headers counting **in order** (hx1 jumped 04→14→01: never).
- **The CTA is said and shown:** the keyword spoken twice (mid-reel and end), shown as kinetic type, then acted out on the comment sheet. A news reel may end on its thesis with no CTA.
- **Never:** flashes, glitches, spins, dissolves, light leaks or RGB splits between shots (movement lives inside shots); coloured words or emoji in captions; a caption on the face or on the split divider, or jumping height within one layout; a PIP or panel over a headline or his head; copyrighted film/TV clips or fake comments from real brands; a soft, over-zoomed anchor crop; a stuttering clip that wasn't conformed to the render rate; mixed kits; stock footage or glowing-brain AI clichés.

---

## §3 Stages, stage moves, framing the face

### 3.1 Stages and layouts
| Stage | What | Use |
|---|---|---|
| **FIG page** | Full-screen figure on the kit canvas, his face in a PIP circle (top right) or absent for ≤ 3 s | Most facts (55–70% of runtime) |
| **SPLIT** | Figure on top (y 0–960), him below (960–1920) in his wide framing | The hook, proof moments, caveats |
| **FULL** | Full-frame talking head, optionally a top panel ending ≥ 60 px above his hair | Turns, personal claims, chapter openers, CTA |
| **SHEET** | Full frame with the comment sheet sliding up | The CTA |
| **BLEED** | Full-bleed B-roll: the creator's own screen or code recording, a drawn illustration (≤ 16%) | Proof of his own product |

```
L-FIG  full-screen figure           L-SPLIT 50/50 split               L-HEAD  full-frame anchor
┌────────────────────┐ 0            ┌────────────────────┐ 0          ┌────────────────────┐
│FIG.04 TITLE  SRC:… │ ← y≈110      │  figure / proof /   │            │  (top panel ≤ y 720 │
│                    │              │  screenshot         │            │   only if head ≥ +60)│
│   the figure       │ ← y 120–1300 │                    │            │                    │
│   (counter, rings, │              ├──── caption box ───┤ ← y 960    │      speaker       │
│    diagram…)       │              │  speaker (wide,    │  seam      │   eye line ≈ 545–650│
│                    │              │  inside its set)   │            │  [ 1–3 words ]     │ ← just under the chin
│  [ 1–3 words ]     │ ← y≈1380     │                    │            │                    │
└────────────────────┘ 1920         └────────────────────┘ 1920       └────────────────────┘
```
| Layout | Rects (1080×1920, measured) |
|---|---|
| **FIG page** (`L-FIG`) | Header y ≈ 90–130 (KIT-FIG); **content zone y 120–1300, which the figure owns**; caption box centre y ≈ 1380 (FIG) / ≈ 1290 (FLAT) / ≈ 1455 (BRUTAL) |
| **SPLIT** (`L-SPLIT`) | Seam at **y 960** (a 3 px white divider in KIT-FIG); the caption **just below the seam** (y ≈ 1000–1020), never on the line; a hook headline may straddle the seam |
| **FULL** (`L-HEAD`) | Optional top panel x 86–998, y 97–≤ 720 (BRUTAL), ending ≥ 60 px above his hair |
| **PIP** (`L-PIP`) | The reference circle was Ø 384 at centre (797, 392) with an orange ring; headlines keep x ≤ 590 on the PIP's rows. Size it from his face (§3.3) |
| **SHEET** | Sheet top y ≈ 351 (hx3) / ≈ 1260 (hx2) |
| **BLEED** | Caption box ≈ y 1385–1436 |

**Anchor placement (measured):** full frame head top ≈ y 290–310 (tight chest-up) or ≈ 572–605 (seated wide), eye line 545–810, face centre x 540–570. Split bottom: the wider framing, head top ≈ y 1080–1117, eye line ≈ 1205–1247, face x ≈ 515–534; the set itself frames him (a painted sky with a ring around the head). The hook measured **6–8 visual changes in the first 3 s**.

### 3.2 Stage moves
| ID | Move | Recipe | Use |
|---|---|---|---|
| **SM-1** | **Settle in** | Every entry into live footage opens at up to 112–120% (less if his head would leave the frame) and eases to 100% in 6–8 f (expo-out, motion blur on the first 2 f) | Every cut to FULL or SPLIT |
| **SM-2** | **Into the circle** | FULL → FIG page: his footage shrinks into the PIP circle (top right, Ø 300–380) along a curved path in 12 f while the figure page builds around it; the circle's ring draws on in the last 4 f | A turn line that leads into a fact |
| **SM-3** | **Out of the circle** | The reverse: the circle grows to full frame in 10 f as the figure page slides away behind | A fact that ends on his opinion |
| **SM-4** | **Split drop** | FULL → SPLIT: he slides down into the bottom half in 10 f as the top figure builds; the seam line draws across | Proof that needs him beside it |
| **SM-5** | **Zoom-through** | The camera dives into a figure element (a window, a node, a tile) in 10–12 f; its fill becomes the next page's background | A figure whose detail is the next fact |

### 3.3 Framing the face (D4)
- **Circle / bubble / PIP:** take the face box from `FACE0` (steady) or `FACE(n)` (if he moves a lot). The circle's **diameter ≈ 2.1–2.4 × the face height** (forehead to chin); its centre sits ≈ 8–12% of the diameter **above** the face centre, so the hair has room and the chin clears the rim. If his head moves, the crop follows smoothly (a 6–10 f lag), never jittering. Check one frame at his highest and one at his lowest head position.
- **Split bottom:** his wide framing, head top ≥ 80 px below the seam. The footage fills the bottom half edge to edge (cover-crop centred on the face), never letterboxed or padded with its own blur.
- **Full frame:** as shot (no punch-ins); every settle or zoom keeps his whole head in frame; top panels end ≥ 60 px above his hair.
- **Cut-outs or chips with his face** (chapter openers, team cards): the same rule: full head inside the shape, never a crown cut off by the edge.

### 3.4 Safe zones
Key text inside x 40–1040, y 100–1600; the bottom ≈ 320 px stays free of text; the right ≈ 110 px holds no text below y 1000.

---

## §4 Kits and colour

### 4.1 The three kits (one per reel)
| Kit | Canvas | Figures | Accent jobs | Choose it for |
|---|---|---|---|---|
| **`KIT-FIG`** editorial figure | Warm near-black paper `#181614`, fine grain, vignette, soft navy/rust blooms | Cream cards, coral serif numerals, mono micro-labels, "FIG. NN · TITLE / SRC: … · DATE" headers numbered in order | coral = the subject; red = old/error/cost; blue = new/verified; gold = money | AI news, research, records, results with a history |
| **`KIT-BRUTAL`** cream neo-brutalist | Cream `#FDF3E6` with a faint grid | White windows with `.exe` title bars and traffic lights, 3–5 px ink outlines, hard 8–12 px offset shadows, orange + lime slabs, `// snake_case` mono pills, small stickers | orange = the subject; lime = done/action/the keyword; ink = structure | Launches, offers, "I built/edited this with AI", courses, tool lists |
| **`KIT-FLAT`** flat pink diagram | Flat pink `#FB8593` or grey-teal `#A7B6B8` | Solid fills, 2–3 px maroon outlines, hard 12–18 px maroon shadows, dashed connectors, chapter slams | the product box in card-pink; periwinkle for the second group; magenta highlighter for proof; yellow for the one word | A product or workflow explained by use cases |

### 4.2 Colour taste
- One hero colour per kit carries the subject; one "done" colour carries success (lime / blue / green ✓); red only for errors, old records and costs.
- At most three colours doing work in a frame besides the kit's ink and paper.
- Brand logos keep their own colours inside a white card.
- **A dark variant per kit for the climax:** BRUTAL → an ink `#201D1B` page with cream windows; FLAT → a maroon `#3B252F` page; FIG → a deeper black with one coral bloom. Use it once, for the biggest moment.

### 4.3 Kit tokens (measured)
**`KIT-FIG`** (editorial figure)
| Token | Hex | Use |
|---|---|---|
| `paper` | `#181614` / `#1C1818` + film grain + vignette | Canvas |
| `bloom` | navy `#1D2C4A` / rust `#5A2A1E`, soft, behind cards | Depth behind the hero element |
| `coral` | `#EE8968` / `#FB9169` | Hero numerals, "FIG. NN", hand-drawn circles and underlines |
| `cream` | `#F2EBE4` / `#ECE4DE` / graph paper `#E6DFDA` | Cards, documents, diagrams on paper |
| `gold` | `#F9BD2E` | Money, "this one", price tags |
| `red` | `#D34D44` | The old record, an error, cost, "before" |
| `blue` | `#4884F2` / `#519BEA` | The AI / the new result, fixed, verified, the glow path |
| `violet` | `#756FD4` | Gradient midpoint (coral → violet → blue: rings, CPU grid) |
| `mono` | `#8A8580` | Micro-labels, SRC text |
| `divider` | `#FFFFFF`, 3 px | The split seam |
| `capBox` | `#000000` at ~60% | Caption box |

**`KIT-BRUTAL`** (cream neo-brutalist)
| Token | Hex | Use |
|---|---|---|
| `paper` | `#FDF3E6` + faint square grid | Canvas |
| `card` | `#FFFFFF` | Windows, cards |
| `ink` | `#201D1B` | Outlines 3–5 px, hard offset shadows 8–12 px (no blur), headline line 1, slabs |
| `orange` | `#FD6932` | Headline line 2 (with a full stop), slabs, tiles, PIP ring, title bars |
| `lime` | `#8AFD2D` | Tag pills, tiles, the CTA keyword, "BEST", ✓ |
| `pink` | `#FCDFD8` | Montage background, a tile colour |
| `capBox` | `#FD4A32` | Caption box |

**`KIT-FLAT`** (flat pink diagram)
| Token | Hex | Use |
|---|---|---|
| `canvasPink` | `#FB8593` (chapter cards `#FC8E9F`) | Figure canvases, split tops |
| `canvasTeal` | `#A7B6B8` | Diagram canvases, the hook's top half |
| `cardPink` | `#F68BA1`–`#FD8BA1` | Hero boxes (the product box, billing card, title window) |
| `maroon` | `#46282C` / `#4D2328` / `#3B252F` | Outlines 2–3 px, hard 12–18 px offset shadows, label bars, dashed connectors |
| `white` | `#FFFFFF` | Child boxes, tags, the numeral face |
| `periwinkle` | `#848CFE` | The second group ("Sales Team") |
| `highlighter` | `#D45DA9` | Highlighter sweeps on proof screenshots |
| `yellow` | `#F2C400` | The one accent word in a title ("Jev AI") |
| `keyword` | `#FC8E9F` | The keyword in a big stacked caption |
| `capPill` | `#FD5831`, text `#FFFCF9` | Caption pill |
| `terminal` | `#3A2C2D` | Terminal windows |

**Meaning (all kits):** the hero colour (coral / orange / pink) is the subject; red = before, old, error, cost; blue = after, new, fixed, verified (FIG); gold / yellow = money or the one word to remember; lime = action (BRUTAL); ink / maroon = structure. Captions never take a hue; at most one accent per figure besides the kit's base.

### 4.4 Footage look (don't fight it)
Clean podcast-set lighting, moderate contrast, natural saturation, soft key; a designed set behind him (a painted sky with a ring, a couch with a plant and a lamp). Keep it as shot; match exposure across segments. The figures carry the colour.

---

## §5 Type and captions

### 5.1 Fonts (bundled)
| Role | Font |
|---|---|
| Captions | Inter Tight 700 (FIG) · Space Grotesk 700 (BRUTAL) · Plus Jakarta Sans 800 (FLAT) |
| Headlines, slabs | Inter Tight 800 CAPS (BRUTAL) · Archivo Black CAPS (FIG hook) · Plus Jakarta Sans 800 (FLAT) |
| Hero numerals, quotes | Instrument Serif (FIG) · Inter Tight 800 / Anton (BRUTAL) · extruded Plus Jakarta (FLAT) |
| Mono labels, terminals, `.exe` titles, pills | JetBrains Mono 500–700 |

Nothing under 22 px on a phone; window text that must be read is ≥ 26 px. Anything smaller is texture and must look like texture.

### 5.2 Captions
- **Every spoken word,** in the creator's caption choice (English as spoken; Hinglish romanised as spoken), lowercase or sentence case as spoken, punctuation kept, numbers as digits ("$2,000", "96 CPUs"). **1–3 words** (usually 2), 0.25–0.6 s each, hard swap on the word onset, no animation, no colour, no emoji.
- **The box:** FIG: white text on black ~60%, padding ~10/8 px, radius ~8. BRUTAL: white on `#FD4A32`, padding ~12/6, radius ~8, height ~63–69. FLAT: white `#FFFCF9` on a `#FD5831` pill, ~74 px tall, radius ~8. The box hugs the text width. Text 48–58 px (cap ~30–40 px).
- **Height per layout, fixed within a layout:** FIG page y ≈ 1380 (FIG) / 1290 (FLAT) / 1455 (BRUTAL), or just under the figure's lowest element with ≥ 40 px air; SPLIT just below the seam (y ≈ 1000–1020); BLEED y ≈ 1385–1436; **FULL: high, just under his chin** (top ≈ 40–80 px below `FACE(n)` chin) so the viewer sees it the moment the face fills the frame (the references sat it at the chest, y ≈ 1210–1290; that is too low to be noticed).
- The number or the product name inside a caption is one weight heavier; nothing else changes.
- Never on a seam line, never on a figure element; over the chin is fine when it has to be.
- Where kinetic type on screen says the same words (a slam, a typed headline, the CTA keyword, the hook headline open), that type *is* the caption and the box steps aside; never both.

### 5.3 `CAP-STACK` (FLAT big stacked keyword: the hook payoff and the CTA only)
Lowercase white Plus Jakarta Sans 800 in stacked lines of different sizes ("you" ~80 px, "probably" ~100 px cap, "need"), the **keyword ~200 px cap** in `keyword` pink with a maroon shadow; block x ≈ 207–882, y ≈ 1030–1650. Words append one at a time with a blur-in (soft at ~90% → sharp in 4 f) on their onsets. In a CTA the stack ('comment "Jev"') holds while a caption box below carries the rest of the sentence.

### 5.4 Hook headlines (per kit)
- **FIG:** two lines, white, ultra-wide heavy CAPS (Archivo Black: "CLAUDE SOLVED / PHYSICS PROBLEM"), soft dark drop shadow, no box, x ≈ 75–970, y ≈ 805–930 (just above the seam). Slides in from the right over f1–f11, strong ease-out, line 2 leading line 1 by 1–2 f; it lives only in the hook.
- **FLAT:** two centred lines, white, heavy rounded sans, sentence case, cap ~55 px, maroon drop shadow ~4 px, across the seam (y ≈ 800–950). Line 1 slides in from the left and line 2 from the right, settled by f12.
- **BRUTAL:** two lines at x ≈ 35, y ≈ 340–530, ~90 px CAPS: line 1 `ink`, line 2 `orange` with a full stop ("LEARN AI BY / BUILDING."). Types on ~1 letter/f (f4–f14), line 2 after line 1; exits sliding up with blur (~5 f). A lime mono tag pill ("// who_we_are") sits above it (x 35–190, y 244–302).
- The headline is the claim in ≤ 5 words per line, 2 lines; it never returns after the hook.

### 5.5 Figure header (FIG), labels, slabs, numerals
- **Figure header:** top-left "FIG. 04  ONE WEEK, NONSTOP", top-right "SRC: ANTHROPIC · SEP 2026", JetBrains Mono CAPS at y ≈ 110 ("FIG. NN" in `coral`, the rest `mono` grey), numbered **in order of appearance**; SRC names the real source and date. Readable: ≥ 22 px.
- **Mono micro-labels:** CAPS, tracking +4%, beside figures ("LOOPS · THE RECORD", "≈ $2,000 TOTAL COMPUTE", "RESEARCHERS: ASLEEP"), ≥ 22 px.
- **Slam slab (BRUTAL):** a word on a coloured slab (white on orange, black on lime, lime on black) with an ink outline and hard shadow, rotated −3° to −8°.
- **Window title bar:** `name.exe` mono label + three traffic-light dots (BRUTAL) / a dark header bar with a mono CAPS label (FLAT).
- **Chapter label box (FLAT):** white, 2 px maroon outline, hard shadow, maroon heavy sans ~60 px, typed on with a blinking cursor.
- **Portrait name (FIG):** mono CAPS name ("LANCE DIXON") + a small affiliation sub-label under a ~150 px (or larger) portrait circle.
- **Numerals:** FIG coral Instrument Serif 120–300 px (a hero numeral may dim to ~25% and become a backdrop); BRUTAL orange outline numerals with an ink shadow ("100s") or black slabs with lime text, units on a slab ("MINUTES"); FLAT a giant extruded white numeral (~520 px tall, maroon 3D side + shadow) on the chapter slam.

---

## §6 Hook system: the working demo

### 6.1 What the first 3 seconds do
1. **Frame 0 is already running:** a window mid-flip, a bill mid-count, a terminal mid-type, a split settling. Never a still, never black.
2. **The claim types or slides in over it** in ≤ 5 words per line.
3. **The result lands by ~2 s:** the thing working, the number at its value, the "READY ✓".
4. **The promise opens the loop:** "5 tools", "2 use cases", a locked seat, "watch till end", with a preview of what's coming.

### 6.2 Hook devices (`HD`, combine two)
| ID | Device | Recipe |
|---|---|---|
| **HD-1** | **The one becomes many** | The subject starts as one small window or tile, then multiplies into the N things the reel promises (4 f stagger), each labelled; a lime ✓ sticker slaps on when the set is complete |
| **HD-2** | **The running bill** | A billing window drops in with real logos; amounts climb every frame; a riser under it; it hands off to the answer on the next line |
| **HD-3** | **The headline split** | Proof on top, him below settling; a wide CAPS headline slides in at the seam |
| **HD-4** | **The edit is the proof** | The kit itself on screen from f0: a window flipping up, a headline typing, his PIP talking |
| **HD-5** | **The locked slot** | One slot of the spine stays locked (a padlock, a "?") while the others fill; it opens at the climax |
| **HD-6** | **The progress promise** | A loading bar or a "watch till end" slider that fills a little at every chapter and completes at the CTA |

### 6.3 Hook formulas
| ID | Formula | Spoken pattern (seen in) |
|---|---|---|
| HF-1 | **News claim + cost/effort number** | "Claude just solved a physics problem by working on it non-stop for a whole week, and it cost researchers just $2,000." (hx1) |
| HF-2 | **Meta-claim + instant proof** | "This video is fully edited by Claude Opus 5.5. Everything, including the animations, the text, and even the captions." (hx2) |
| HF-3 | **Pain conditional + product answer** | "If your AI bill is getting out of control, you probably need Jev." (hx3) |
| HF-4 | **Number promise** (stacks on any) | "Here are two real business use cases you can solve with X." (hx3) |
| HF-5 | **Provocation** (stacks on any) | "Content creation is 100% automated now." (hx2) |

Write 3 variants with different formulas, recommend one.

### 6.3b The four measured hooks
| ID | Hook visual | Recipe |
|---|---|---|
| **H-1** | **Headline split** (hx1) | SPLIT: proof footage or a figure on top, him below; both halves start settling at f0; the FIG headline slides in from the right f1–11; at ~1.6 s a hard cut to the first full-screen figure |
| **H-2** | **Counting bill** (hx3) | SPLIT: a pink billing card drops from the top (lands by f7) with real logos, dollar amounts climbing every frame, linear, never settling (+5–9 per frame); the headline lines slide in from both sides at the seam; at 2.0 s a cut to the full-frame anchor with the `CAP-STACK` payoff "you probably need **X**" |
| **H-3** | **The edit is the proof** (hx2) | PIP: f0 a window card mid 3D flip-in (rotateX ~60° → 0 in 4 f), his PIP already talking, stickers drifting, the first caption on; f4–14 the headline types on; ~1.5 s chips pop in; 2.56 s the headline slides up and the window refills with the next scene |
| **H-4** | **Preview of the body** (hx3) | Every use-case figure shown as stacked cards while he says "two use cases": the back card pops white and greys out with its contents (~8 f), the front card rises in overlapping ~30%; the same assets are reused later |

**Hook timing (measured):** f0 already moving (settle, flip-in, drop-in or a counter), caption or headline arriving by f1–f12 · 0–1.6 s the claim, numbers already moving · 1.6–3 s the evidence: a cut to the first full figure or the anchor's payoff line, ≥ 6 changes by 3 s · 3–6 s the promise with a preview, or the first chapter.

### 6.4 Hook sound
A soft tech appear or a window-open click on f0; typing under the typed headline; a quick swish per window in a multiply; a short riser into the result; a shine or `correct-sfx` on "READY ✓".

---

## §7 Structure

### 7.1 The spine
One system drawn in the hook and changed by every chapter: seats that fill, a router that decides, a log that grows, a bill that collapses. A persistent mini-map of the spine (a row of small tabs with ✓ marks, top of the frame) keeps it visible on every page.

### 7.2 Chapters (one composition, a new state each time)
- **Opener (FULL, 0.8–1.5 s):** his face full frame with a chapter slab ("01 PLANNER", "03 BAHUT IMPORTANT") sliding in above his head; the spine mini-map ticks to this chapter. **Vary it** each time: slab from the left, then a slab dropping from the top, then a slab typing on; or a different crop of his framing; so three openers never look identical.
- **Figure page:** title block top-left (role label in mono, the name big, kit colours), his PIP top-right (framed from the face, D4), the figure window below, the caption under it.
- **The figure runs** on his words (§8.2), then resolves with a ✓ sticker or a result slab.
- **The hand-off** to the next chapter: the figure folds into its tab on the mini-map (8 f) as the next opener arrives.

### 7.3 Rhythm
- **Build, run, resolve, hand off** inside each chapter; **full frame between chapters** for a breath of his face.
- **Escalate:** the last chapter gets the dark variant page, the biggest figure, the longest run and the one heavy hit.
- **Speed:** a new figure every ~2–4 s, a state change inside it every 0.5–1.2 s. The density comes from figures running, not from more cuts.

### 7.4 CTA
1. **Mid-reel keyword** (~30–45% of runtime): "If you want to learn how I did this, comment 'content' and I'll send you a link…". On screen: kinetic type above his head (BRUTAL: "comment" white with an orange 6 px offset, blurring in over 4 f; the keyword in lime heavy condensed caps (Anton) ~130 px with a dark green outline and quotes, landing on the spoken word) or a `CAP-STACK` 'comment "X"' with a caption box below (FLAT).
2. **The offer** (if any): the creator's own promo card or a title window built in the kit ("CLAUDE / CONTENT AUTOMATION / for / MARKETERS"; "Building / Workflows / with **Jev AI**"), each line landing on its word. A deliverable (a PDF card listing what they'll get) may appear here.
3. **End keyword:** "Comment X and I'll see you there." The **comment sheet** slides up over him in ~7 f (his frame stays sharp behind it; the sheet's soft top shadow separates them), the input lifts and **types the keyword** (~2 f per character, with a cursor), posts, and the posted comment sits at the top with likes. Other comments are generic viewers or the creator's own account, never real brands.
4. **Hard stop** on the posted state (≤ 0.4 s hold), no black.
5. **News variant (no CTA):** end on the thesis figure (SD-6), hard stop on the last word.

### 7.5 Structure devices (`SD`) and open loops
| ID | Device | Use when | Recipe |
|---|---|---|---|
| **SD-1** | **Chapter slam** | Numbered use cases / steps (FLAT) | Hard cut to flat `canvasPink`; a giant extruded white numeral fades in over ~8 f, rising a few px; a white outlined label box appears with a cursor and **types ~1 char/f** ("AI Model Router|"); the cursor blinks until the cut; 1.4–2.0 s on screen |
| **SD-2** | **Figure header** | FIG, every figure | "FIG. NN · TITLE" + "SRC: … · DATE", numbered in order |
| **SD-3** | **Body preview** | A number promise in the setup | Every chapter's figure as stacked cards while the promise is spoken; the same asset reused later |
| **SD-4** | **Window refill** | BRUTAL scene changes | The window persists; the old headline slides up and out (~5 f, blur), the window clears and refills with the next scene |
| **SD-5** | **Tag pill as section name** | BRUTAL | A lime mono pill "// who_we_are" → "// what_you_learn" → "100x_instructors" above each headline |
| **SD-6** | **Thesis dashboard** | The last figure of a news reel | Slider rows (FROM → TO: TOY PROBLEMS → OPEN FRONTIER, SUPERVISED → AUTONOMOUS), dots slide right, a blue glow path connects the final positions, the last row turns red |

**Open loops:** a number promise with a preview ("two use cases", then chapters 1 and 2); the record and the challenge (an old number held on screen, "8 · THE RECORD", "3 YEARS, NO MOVEMENT", then the stamp "TARGET: 9 LOOPS"); "how did he do this?" answered only by the offer. Every promise is paid on screen in the same figure family that opened it.

---

## §8 Figure system

### 8.1 Families (the look, and the run that keeps it moving)
| ID | Family | Look | The run |
|---|---|---|---|
| F-1 | **Counter** | A big numeral (serif coral / outline orange / white) with a unit label | Integer steps every 2–4 f, or one step per spoken word (3→4→5→6→7 on "by / working / nonstop / for a whole / week"); lands on the spoken number; a unit slab slams under it |
| F-2 | **Bars and curves** | Bars on a baseline with labels; a curve or dashed target line | Bars grow 10–12 f ease-out, staggered ~5 f or per spoken name; the curve draws on ~0.6 s after; the winner gets a ✓ |
| F-3 | **Rings and loops** | Concentric arcs, coral → violet → blue outward, a centre numeral | Arcs draw clockwise; the numeral steps as each ring closes (~3 f per step) |
| F-4 | **Object metaphor** | A drawn object that **is** the idea: an hourglass of falling dots for "a week", a stopwatch pie for "20 minutes", a laptop with a "$2K USED" tag, a padlock for "unlock", a sun rising for "not new", a receipt | The object does the thing: dots fall, the pie fills, the padlock opens, the receipt prints; line-art draws on; tags swing in |
| F-5 | **Portrait chip** | B/W photo circle ~150 px (or bigger), coloured ring, mono name + affiliation | Fades and scales up from small (~5 f) on the name; the ring draws around clockwise; a role pill slides under |
| F-6 | **Document / quote card** | Cream letter card rotated ~−2°, avatar header, name, date, italic serif quote | The quote types on word by word; a coral underline sweeps under the last line; a red rotated stamp ("TARGET: 9 LOOPS") lands 1.2 → 1.0 in ~4 f |
| F-7 | **Terminal / code window** | macOS-style window (traffic lights), mono text, a coloured model pill | Settles from slightly larger (~24 f); the prompt types ~2 chars/f with a block cursor; log lines append one per phrase with timestamps; ERROR → FIXED pill swaps red → blue on the word; a progress line fills |
| F-8 | **Grid fill / multiply** | An N×M grid of squares or play tiles | Squares light in a diagonal sweep while a counter climbs (0, 6, 28, 60, 86, 95, 96 over ~2.5 s); or tiles multiply around a seed (1 → 6 → 14 → 24, ~every 14 f) as the number steps |
| F-9 | **Network / router tree** | Coloured nodes with mono pill labels and connectors to a centre node; or a product box with dashed connectors to child boxes | Nodes pop one every ~7 f; lines draw toward the centre; a T-connector draws down (~7 f) and splits (~7 f); a packet travels the chosen branch; the highlight **alternates** ~every 13 f to show the decision |
| F-10 | **Sorting flurry** | Tag cards (email, ticket, lead, call) with names | Spawn small at scattered points, fly out at random ±15° rotations (a pop each, ~0.1 s apart); on the word they de-rotate and **snap into a grid**; a line wipes down the middle and splits them; group boxes grow behind; labels type on |
| F-11 | **UI window** (BRUTAL / FLAT) | White or pink window with a title bar, outlines, hard shadows, tiles or buttons | 3D flip-in (rotateX ~60° → 0, 4 f) or a drop-in from the top (~7 f); tiles pop ~5 f apart; a cursor glides on an ease-out curve and clicks (the button drops ~4 px into its shadow); the content refills or the scene zooms toward the click point |
| F-12 | **Proof screenshot** | A real article, paper or dashboard screenshot | A highlighter grows behind the exact number (~7 f for 5 chars) as he says it, then moves to the next line on the next number |
| F-13 | **Slam label / kinetic type** | A word on a slab, rotated −3° to −8° | Enters at ~1.4× with motion blur, settles to 1.0 in 4–5 f on the keyword |
| F-14 | **Device montage** | Phone mockups of the creator's real outputs | Fly in from the top with 3D rotation, settle in ~7 f, then rearrange; screens play |
| F-15 | **Chapter slab / slam** | §7.2, SD-1 | §7.2 |
| F-16 | **Comparison chart** | Bars for old vs new vs others with a dashed target and a marker | Bars grow per spoken name; a faceted gem marker drops onto the winner; a label ("FRONTIER") |
| F-17 | **Off-the-chart** | A bar that shoots past the top of the frame, then the real stub | The bar overshoots the frame (~12 f), then cut-swaps to a short "ACTUAL" stub |
| F-18 | **Comment sheet** | A dark platform comment sheet, the creator's avatar, an input bar | §7.4 |

**Family rules:** one figure per fact (a clause that adds a fact to the current figure changes its **state**; a clause with a new fact gets a **new figure**); a 45–75 s reel uses 8–15 distinct figures (hx1: 15).

### 8.2 How a figure plays (the run)
1. **Arrive** on the trigger word: from the previous figure (a chain, §9), from its tab on the spine mini-map, or from the edge in the story's direction.
2. **Run:** at least two state changes on the next words (a click, a type, a count step, a packet moving, a ✓).
3. **Resolve** on the key word: the result slab, the ✓ sticker, the circled number.
4. **Hand off:** fold into the mini-map, morph into the next figure, or cut if the subject changes.
Nothing on a figure page sits completely still for more than about a second; even a held result has its cursor blinking or its fill settling.

### 8.2b Scale: the figure is big
A figure is the picture of the whole idea, so it is drawn **big**: on a FIG page it fills the content zone (x 40–1040, y 120–1300) with its hero element at the centre of attention; in a SPLIT it fills its half. The measured sizes in this file (label sizes, the PIP's Ø 384, a ~150 px portrait) are the references' floors, never a reason to draw small. Empty canvas for more than a second means the figure should have grown into it. One hero element at a time is big; supporting labels stay quiet.

### 8.3 Machines (figures that do the mechanism)
| ID | Machine | When he says | What runs | Sound |
|---|---|---|---|---|
| **MX-1** | **Plan → build → test** | planning tools, "spec, plan, test" | A checklist ticks item by item; code lines type in the right pane; test rows flip to PASS | `selection-click` per tick, typing burst, `correct-sfx` on PASS |
| **MX-2** | **Old docs → latest** | docs, versions, "up to date" | An outdated API line strikes through; a fresh docs card slides in and the line rewrites itself; "LATEST ✓" | `objects-drawing-board-marker-on-paper-drawing-line-medium-length-02-vadi`, `tech-appear-2025-02-11-05-48-28-utc-tech-appear-2`, a shine |
| **MX-3** | **Bug hunt** | review, bugs, security | A scan line passes down the code; bug markers pop on the bad lines with a count; "BUGS FOUND N" | `digital-scan`, a soft blip per bug, a low hit on the count |
| **MX-4** | **Bloat → lean** | simplify, refactor, clean | The file's line bars compress, duplicates fold away, the line count rolls down; "SIMPLIFIED ✓" | `paper-away` or a compress whoosh, a roll tick, a shine |
| **MX-5** | **Unlock** | the big reveal, "the best one", a famous builder | The locked slot opens: the padlock drops, the real thing appears (a real photo, a real logo, the real product), and what it brings fans out below with a count | A low riser into `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5`, a pop per row |
| **MX-6** | **Router** | "decides", "routes", cheap vs expensive | A request packet enters, pauses at the product box, picks a branch, lands; the next packet picks the other | A tick at the decision, a soft whoosh along the branch |
| **MX-7** | **Sort into teams** | classify, triage, "route everything" | P-19 (F-10), with a pop per card and a thump when the grid snaps | pops, `abstract-hit-sub-bass-07` on the snap |
| **MX-8** | **Run log** | "it kept going", agents, overnight | Terminal lines append with timestamps; a moon "ASLEEP" icon; the clock fast-forwards | Typing, `clock-2025-08-27-06-56-42-utc-clock-3` trimmed |
| **MX-9** | **Cost collapse** | "used to cost…, now…" | P-14: the bar overshoots, then the real stub, then the price tag on a small object | `riser`, a soft drop, `money-2` |
| **MX-10** | **Multiply** | "hundreds of videos", scale | A tile multiplies around a seed as the number steps | A rising 3-step pop set |
| **MX-11** | **Deliverable** | "I'll send you…", links, a PDF | A PDF card writes its contents line by line; a "full setup ✓" pill | Typing, `paper-turn-page`, a shine |

### 8.4 Patterns (measured from the references)
| ID | Pattern | Family | What's on screen | Motion |
|---|---|---|---|---|
| P-01 | **Time hourglass** | F-4 + F-1 | Hourglass of falling dots, one highlighted dot, a day counter, a callout "DAY 1" | Dots fall; the counter ticks per word; a slow push ~1.3× (~1 s) reveals a gold cost label |
| P-02 | **Loop rings** | F-3 | Concentric rings with a serif numeral 1 → N, then a label | Rings draw clockwise; numeral steps per ring |
| P-03 | **Collision** | F-4 | Two glossy spheres on a perspective grid with dashed trajectories | Slide in from both edges, collide on the word, burst into particles with a glow ring |
| P-04 | **Difficulty bars** | F-2 | Bars L1…LN, the last as a dashed "?" box, an exponential curve | Bars grow ~1 per 5 f; the curve draws on |
| P-05 | **The record** | F-1 + F-5 | A giant numeral "8 · THE RECORD", then two portrait chips, then a timeline "3 YEARS, NO MOVEMENT" | The numeral dims to ~25% as portraits pop; the timeline extends right over ~1 s |
| P-06 | **The challenge** | F-6 | Quote card + stamp | Quote types; underline sweeps; stamp lands |
| P-07 | **The run log** | F-7 | Name tags typing on, a terminal with the prompt and appended log lines, a moon icon "ASLEEP" | Typewriter + appends (MX-8) |
| P-08 | **Self-fixing code** | F-7 | Code lines with an ERROR pill → FIXED pill | Lines type; the pill swaps red → blue on "fixed" |
| P-09 | **Compute grid** | F-8 | 8×12 squares, counter 0 → 96, "~1 WEEK" tag | Diagonal sweep + count |
| P-10 | **Methods network** | F-9 | Method nodes → a central result node, cost pills at the bottom | Nodes pop ~0.25 s apart; lines draw inward; pills on the cost word |
| P-11 | **Verification** | F-5 + F-1 + F-2 | Portrait, a "2 → 14 DAYS CHECKING" count, two bars → "✓ PASS", the result pill circled | Count-up; bars fill; a coral ellipse draws on "held up" |
| P-12 | **Frontier chart** | F-16 | 2023 RECORD (red) / CLAUDE (blue) / OTHERS, dashed target line, gem marker | Bars per name; gem drop |
| P-13 | **Model vs reality** | F-4 | "the simplified model" vs "the real world" | Fade/type in; for a caveat |
| P-14 | **Cost collapse** | F-17 + F-4 | "EXPECTED COST off the chart ↑" → "ACTUAL" stub → a laptop with a "$2K USED" tag | Overshoot, swap, draw-on, tag swing (MX-9) |
| P-15 | **Thesis dashboard** | SD-6 | Slider rows FROM → TO | Whip-in, dots slide, glow path draws top-down |
| P-16 | **Counting bill** | F-1 + F-11 | Billing card with real logos and climbing $ amounts | §6.3b H-2 |
| P-17 | **Out of credits** | F-11 | "0 Credits Remaining / Buy More" card + cursor | Cursor glides, clicks; the canvas pans to the solution |
| P-18 | **Router tree** | F-9 | Product box → Cheap Model / Expensive Model | Connectors write on; children wipe in; highlight alternates (MX-6) |
| P-19 | **Chaos → order** | F-10 | Ticket/lead/email/call cards → grid → two team boxes | F-10 (MX-7) |
| P-20 | **Proof highlight** | F-12 | Article screenshot "193.6x Faster, 444.6x Cheaper." | Sweep per spoken number; the spoken rounding ("200 times") only when the screenshot shows the exact number |
| P-21 | **Stopwatch + receipt** | F-4 + F-1 | Stopwatch pie fills, 0 → 20 "MINUTES" slab, a receipt "LESS THAN $1" + coin + ✓ | Pie + count ~12 f; slab slams; the stopwatch shrinks left as the receipt slides in |
| P-22 | **Multiply** | F-8 | "1 → 10s → 100s OF VIDEOS", a "1 DAY" calendar, a play-tile grid | Seed tile; tiles multiply per number step (MX-10) |
| P-23 | **Curriculum window** | F-11 | Window with N module tiles, a cursor clicking one | Tiles pop ~5 f apart; the click zoom-collapses (T-15) |
| P-24 | **Comment sheet** | F-18 | The sheet over him, the keyword typed and posted | §7.4 |
| P-25 | **Instructor / team cards** | F-5 cards | Profile cards with photo cut-outs (whole head inside, D4), role pills, stats, rotated ±4° | Slide/rotate in from both edges; a starburst sticker pops |
| P-26 | **Prompt blocks** | F-11 | A chat window whose prompt bubble fills with ROLE / TASK / STYLE / FORMAT chips | The bubble grows; chips stack in |
| P-27 | **Output montage** | F-14 | Phones showing the creator's real outputs on pink | 3D fly-in, settle |

### 8.4b Line → figure (start here for every clause)
| Line type | Primary | Alternates |
|---|---|---|
| A duration ("a whole week", "20 minutes", "1 day") | P-01 / P-21 object + counter | P-22 |
| A count that grows ("9 loops", "96 CPUs", "hundreds of videos") | P-02 / P-09 / P-22 (MX-10) | F-1 counter |
| "It gets exponentially harder" | P-04 Difficulty bars | — |
| A record / the old number | P-05 The record | P-12 |
| A named person | F-5 portrait chip | P-25 |
| A quote or a challenge | P-06 The challenge | — |
| "It ran / it kept going / overnight / agents" | P-07 / MX-8 Run log | — |
| "It wrote and fixed its own code" | P-08 Self-fixing code | MX-3 |
| Planning tools, "spec, plan, test" | MX-1 Plan → build → test | P-08 |
| Docs, versions, "up to date" | MX-2 Old docs → latest | — |
| Review, bugs, security | MX-3 Bug hunt | — |
| Simplify, refactor, clean | MX-4 Bloat → lean | — |
| The big reveal, "the best one", a famous builder | MX-5 Unlock | P-05 |
| "It combined methods / a stack / a pipeline" | P-10 Methods network | P-18 |
| "It was verified / it held up" | P-11 Verification | P-20 |
| "X vs Y vs Z" | P-12 Frontier chart | F-2 |
| A caveat ("this isn't…", "simplified") | P-13 / anchor beat | — |
| "It used to cost a fortune, now it costs X" | P-14 / MX-9 Cost collapse | — |
| The thesis / "this changes…" | P-15 Thesis dashboard | — |
| A money pain ("your bill") | P-16 Counting bill | P-17 |
| "You run out / you hit a limit" | P-17 Out of credits | — |
| "X decides / routes" | P-18 / MX-6 Router | P-10 |
| "Classify / sort / route everything" | P-19 / MX-7 Sort | — |
| A benchmark claim ("200x faster") | P-20 Proof highlight | P-12 |
| "It took me only…" | P-21 Stopwatch + receipt | — |
| "You'll learn modules A, B, C" | P-23 Curriculum window | — |
| People who teach / built it | P-25 Team cards | — |
| "Use the right prompt" | P-26 Prompt blocks | — |
| "These are real outputs" | P-27 Output montage | — |
| "I'll send you…", links, a PDF | MX-11 Deliverable | — |
| Comment keyword | §7.4 + P-24 | — |
| A turn ("Then in August", "All you need to do") | **His face, full frame** (≤ 2.5 s) | SPLIT |

Any line with a number gets a counter or a chart; any promise gets a locked slot or a progress bar that the CTA pays off.

### 8.4c Density
A new figure every ~2–4 s (median shot 1.7–3.8 s), a state change inside it every 0.5–1.5 s; 8–15 distinct figures per 60 s; never the same pattern twice in a row unless it's an explicit reuse (SD-3); 3–5 anchor beats per 60 s.

### 8.5 Assets
Drawn in code in the kit; real photos for real people (B/W in FIG); real logos in white cards; real screenshots for proof; the creator's own screen recordings for their own product. No stock footage, no film clips, no AI illustration that breaks the kit, no fake comments from real brands: where hx3 used a movie clip or AI illustrations for "developers" or "redundant tasks", draw a figure in the kit instead (a desk silhouette, a looping task bar). Conform every clip to the render rate; blur private data in captures.

---

## §9 Transitions

| ID | Transition | Frames @30 | Recipe | Sound |
|---|---|---|---|---|
| T-01 | **Hard cut** | 0 | On a word boundary, 0–3 f before the clause | None (or the next figure's arrival sound) |
| T-02 | **Settle in** (SM-1) | 4–19 | §3.2, capped by his face. Measured per kit: FLAT 115% → 100% in 4–5 f; BRUTAL 7–10 f; FIG ~1.4× → 1.0 in 12–19 f with a long tail; motion blur on the first 2–3 f | A soft whoosh on chapter openers only |
| T-03 | **Empty canvas beat** | 3–5 | The bare canvas with the caption, then the figure builds | — |
| T-04 | **Canvas pan** | 10–12 | The problem figure exits left as the answer enters right | `swoosh-2025-01-08-03-02-26-utc-swoosh-04` |
| T-05 | **Morph chain** | 6–10 | The object becomes the next object (pill → card → window; window → phone; tile → grid) | `turn-whoosh-transition` or a soft pop |
| T-06 | **Refill** | 6–8 | The window stays; the old content slides up and out; the new content builds | `ui-opening` |
| T-07 | **Fold into the mini-map** | 8 | The resolved figure shrinks into its tab at the top and the tab gets its ✓ | `selection-click` + a tiny shine |
| T-08 | **Zoom-through** (SM-5) | 10–12 | §3.2 | `zoom-in-zoom-in` or `zoom-2025-05-09-19-11-57-utc-zoom-5` |
| T-09 | **Into / out of the circle** (SM-2/SM-3) | 10–12 | §3.2 | `woosh-2025-08-27-02-12-31-utc-woosh-03` |
| T-10 | **Split drop** (SM-4) | 10 | §3.2 | `whoosh-2025-01-08-02-32-33-utc-whoosh-06` |
| T-11 | **Dark-stage drop** (climax) | 12 | The page darkens from the edges inward as the kit's dark variant fades up; the figure re-lights on it | `whoosh-2025-01-08-02-32-33-utc-whoosh-05` into a low hit |
| T-12 | **Sheet slide-up** | 6 | The comment sheet rises; background blurs ~10 px | `ui-opening` + typing |
| T-13 | **Hard end** | 0 | On the last word (≤ 6 f) or the posted comment; never a black hold | A short `ding-2025-02-19-22-16-47-utc-ding` on the post |
| T-14 | **Whip-in** | 4–5 | A figure enters with a horizontal smear (hx1); once per reel at most | A quick swish |
| T-15 | **Zoom-collapse → badge → circle wipe** (BRUTAL, once, at the hook's section change) | ~34 | f0–4 the window scales down toward the cursor's click point into a small white circle (blur); f5–14 the circle holds and a lime dot grows inside; f16–24 the white disc expands to a full white frame while a lime ring with rotating mono text grows; f25–28 the badge fills the screen with an orange disc inside; f29 the orange disc fills the frame; f34 hard cut | A soft whoosh into a pop |
| T-16 | **Chapter slam** (FLAT) | 0 + build | Hard cut to flat pink; the numeral fades in (~8 f); the label types on (SD-1) | Typing clicks; the list cue |
| T-17 | **Graphic camera push** | ~30 | A slow push into the figure (~1.3×, ease-in-out) to reveal the next label instead of cutting (hx1) | A soft rising swell, quiet |

**Grammar:** frame 0 already moving (a settle, a flip-in, a drop-in); hard cuts when the subject changes (T-01, optionally T-03); chains (T-04/05/06/07/08/17) when the story continues; into the anchor always T-01 + T-02, and out of it a cut on the noun being introduced; a new chapter gets its opener or T-16; one dark-stage drop per reel; the CTA gets T-12; the last word T-13. No flashes, glitches, spins or dissolves anywhere.

**Budget (per 60 s):** hard cuts 14–28, all on clause starts; one settle per anchor entry (3–8); T-14 ≤ 1; T-15 ≤ 1; one opener or slam per chapter; T-12 for the CTA only. Transitions never delay speech.

---

## §10 Motion language

| Token | Value |
|---|---|
| Entries | Expo-out `cubic-bezier(0.16, 1, 0.3, 1)`; windows and slabs may overshoot 4–6% once (BRUTAL, FLAT); FIG never overshoots |
| Moves | Ease-in-out `cubic-bezier(0.65, 0, 0.35, 1)`, 8–14 f |
| Exits | Ease-in, 5–7 f, toward where the thing goes (the mini-map, off the page with the pan) |
| Typing | Headlines 1 letter / f; terminals 2 chars / f with a block cursor; quotes word by word |
| Counts | Step per word or every 2–4 f; land on the last syllable |
| Cursor | Glides on an ease-out curve (10–16 f), presses (the button drops 4 px into its shadow, 3 f), releases |
| Stickers | Slap in from 130% rotated ±8°, settle in 4 f |
| Motion blur | On anything moving > 40 px / f: a 2–3 f trail |
| Hold | Something always alive: a blinking cursor, a fill settling, a packet travelling |
| Count step | Every 2–4 f, or one per spoken word; linear for a "running" bill, stepping for a "climbing" count |
| Bar grow | 10–12 f, ease-out, staggered ~5 f |
| Ring draw | Clockwise, ~3 f per ring |
| Flip-in / drop-in | rotateX ~60° → 0 in ~4 f / from above in ~7 f, ease-out |
| Connector draw | ~7 f per segment |
| Highlight alternate | ~13 f per state |
| Highlighter sweep | ~1 char per 1–2 f |
| Blur-in word | Soft at ~90% opacity → sharp in 4–5 f, no position move |
| Morph | 5–10 f, ease-out (overshoot only in BRUTAL / FLAT) |
| Camera on figures | A figure may have a camera (a slow push ~1.3× to reveal the next label, a pan between problem and solution), always ease-in-out. His footage never gets a slow push; its only move is the settle |
| Timing | Elements start 2–3 f before the word and land on it; state changes on the following words; the resolve on the key word |

**Layer order (back to front):** canvas → figure windows → machines and markers → stickers and slabs → speaker (PIP / split / full) → caption → kit header (FIG) → mini-map.

**Finishing:** FIG: grain and vignette on the canvas only, soft blooms behind heroes; the anchor stays clean. BRUTAL / FLAT: flat fills, hard offset shadows, no gradients, no glow (except a creator's own promo card). Check every on-screen name, number and label against the script and sources.

---

## §11 Sound (D3)

**No music bed, ever.** Sound is SFX only (the creator's direction, 12 Oct 2026): never a music track, bed, drone or loop under the voice.

### 11.1 The palette (tech-premium, tactile, precise)
| Role | When | Pool (ids from SOUNDS.md; rotate) | Level vs voice |
|---|---|---|---|
| **Window / appear** | A window opens, a card or slab arrives | `ui-opening`, `appear-enter`, `tech-appear-2025-02-11-05-48-28-utc-tech-appear-1` / `-2` / `-3`, `hint-appear-2025-08-27-02-25-12-utc-hint-appear-01` | −20…−26 dB |
| **Click / tap** | A cursor click, a tab ticking, a list item | `click-click`, `mouse-click-mouse-click`, `ui-click`, `digital-click`, `selection-click`, `scifi-screen-tap-2025-08-27-05-29-10-utc-scifi-screen-tap-3` | −22…−28 dB |
| **List steps** | Items popping in order (windows multiplying, tiles, rows) | `0552611` → `0552621` → `0552631` | −24 dB |
| **Typing** | Headlines, terminals, labels, the CTA keyword | `keyboard-typing-2025-02-18-23-33-14-utc-mountain-audio-typing-sound-3` / `-5` / `-7` / `-11` / `-17`, `laptop-keyboard`, `digital-text-2026-05-18-01-34-24-utc-digital-text-04` | −24…−28 dB |
| **Data / scan** | Scans, counters, logs, routing | `digital-scan`, `data-woosh`, `digital-text-2026-05-18-01-34-24-utc-digital-text-02` (very low), `data-sound-effect` (trimmed short) | −24…−30 dB |
| **Done / ✓** | PASS, LATEST, SIMPLIFIED, READY, a resolved chapter | `correct-sfx`, `accept-flicker`, `good-answer-2025-02-19-16-10-13-utc-good-answer`, `05405-shine-ding`, `short-shine-2025-08-27-06-45-01-utc-short-shine-1` / `-3` | −18…−24 dB |
| **Error / bug** | A bug marker, an error pill, an old record | `wrong-answer` (quiet), `glitch-2025-02-19-15-01-37-utc-glitch-5` (very short, quiet), `interface-love-down` | −22…−26 dB |
| **Move** | Pans, morphs, chains, stage moves | `swoosh-2025-01-08-03-02-26-utc-swoosh-04`, `whoosh-2025-01-08-02-32-33-utc-whoosh-04` / `-06` / `-07`, `fast-swish-movement-fast-swish-movement`, `turn-whoosh-transition`, `woosh-2025-08-27-02-12-31-utc-woosh-03`, `zoom-in-zoom-in` | −18…−24 dB |
| **Slam / sticker** | A slab or sticker lands | `hitsmack-cte01-79-4` (quiet), `abstract-hit-sub-bass-07`, `pop-up-pop-up` | −20…−24 dB |
| **Build-up** | Into a reveal (the hook result, the climax) | `riser`, `riser-2`, `riser-2025-01-08-06-43-34-utc-riser-01` (trimmed to 1–2 s) | −20…−24 dB |
| **Weight** | The climax, the biggest number | `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5`, `electric-hit-2025-02-20-01-45-58-utc-electric-hit-4` (tech reveals), `cinematic-impact-scifi-sfx-cinematic-impact-scifi` (once) | −14…−18 dB |
| **Money** | Costs, bills, prices | `money-2`, `cash-machine-2025-02-19-03-33-58-utc-cash-machine` (once) | −20 dB |
| **Notify** | The comment posts, a message arrives | `17571-download-iphone-notification-ringtone-iphone-sms-ringtones`, `ding-2025-02-19-22-16-47-utc-ding` | −18…−22 dB |

**Never in this style:** meme sounds, cartoon boings, crowd reactions, record scratches, alarms, heavy glitch bursts, trap/phonk energy.

### 11.2 The SFX ledger (Naman's rule, unchanged)
Every reel has its sounds in `plan/sounds.json` and a ledger in the plan: file → uses → times.
- **Any file at most 2× in a reel**, except the one **list cue** that marks chapter 1, 2, 3… (one file, once per chapter).
- **No file on two consecutive cues;** rotate within each pool.
- **Density:** about one cue every 1.0–1.6 s on average; this style is busier than a calm one because its figures run. Every cue belongs to a picture.
- **Never more than two cues overlapping;** typing runs count as one cue.
- Clicks and typing are quiet texture; the done/✓ sounds and the weight hits are the ones the viewer should notice.

### 11.3 No music bed
- No music bed, ever: this style is scored with sound effects only. The voice and the SFX carry the reel.
- **Go silent (no new SFX) for 0.5–1 s before the climax** (the dark stage), then land the weight hit.

### 11.4 Mix
Voice chain (high-pass 80 Hz, de-ess, light compression); the references' read is dense and even (LRA ~3.5 LU). −14 LUFS integrated, true peak ≤ −1 dBTP (hx1 peaked at +0.1: never). The voice is always the loudest thing.

---

## §12 Footage handling
Re-measure on sampled frames for every new shoot.

| Setup | Description | Use |
|---|---|---|
| **A: Desk MCU** | Tripod, frontal, at desk height, hands on a white desk, a designed backdrop (a painted sky with a red/blue ring around the head) | SPLIT bottom (wide), FULL (crop) |
| **B: Seated wide** | Tripod, head to knees on a couch, a mic transmitter as a prop, a warm practical lamp, a plant, wall art | FULL with overlays, PIP |
| **C: Selfie / handheld** | Not in the references | FULL beats and inside circles or the split bottom (the small window hides shake); the footage always fills its area (cover, cropped on the face), never a scaled-down frame with blurred side bars |

| Where | Placement (starting values) |
|---|---|
| FULL | Chest-up: head top ≈ y 290–310, eye line ≈ 545–650, face x 540–560, face ≈ 35% of the width. **Never scale past ~1.5× of the source's native resolution**: from 720-wide footage, prefer the wider seated framing (head top ≈ 572–605) over a soft 2× crop |
| SPLIT bottom | The wider framing in y 960–1920: head top ≈ 1080–1117, eye line ≈ 1205–1247, face x ≈ 515–534; the footage covers the whole half (cropped on the face), never letterboxed or padded with blur |
| PIP | A circle framed from his face (§3.3); the references' Ø 384 at (797, 392) with an orange ring is the floor |
| Top panel over FULL | Panel bottom ≥ 60 px above the head top |

- Never punch in on the speaker; never scale him past the footage's sharpness. Every circle and cut-out is framed from the face (§3.3, D4).
- No matte: the PIP is a circular mask of the whole frame.
- The references are 25 fps (their frame counts are marked "@25" where they appear). Conform every clip (screen recordings, promos) to the render rate: hx2 pasted a 12.5 fps promo raw and it stuttered.

---

## §13 Output contract

### 13.1 The plan (the edit brief)
The edit skill's pattern (the one idea and the spine, the hook second by second, every beat with its picture, words, moves and sounds, the sound ledger, your attack on your plan), plus in this style:
- the **kit** and why;
- the **speaker map** with its moves and the circle framing from `FACE0`;
- the **figure list**: fact → figure → its run (build, state changes, resolve, hand-off);
- the **climax** on the dark variant.

### 13.2 Beat sheet schema (the first ```yaml``` block)
```yaml
- id: 12
  section: CH-2                     # HOOK | SETUP | CH-n | TURN | CLIMAX | CTA
  kit: KIT-FLAT
  stage: FIG                        # FIG | SPLIT | FULL | SHEET
  move: T-04                        # how we arrive here (T-xx / SM-x)
  spoken: "let Jev decide whether a request needs a cheap model or an expensive one"
  caption: ["let Jev", "decide whether", "a request needs", "a cheap model", "or an expensive", "one"]
  trigger: "decide"
  onset_s: 10.0
  spine: "use case 1 of 2 runs; mini-map tab 1 gets ✓ at the resolve"
  figure: MX-6
  run: ["packet 1 enters", "pauses at the Jev box on 'decide'", "takes the cheap branch on 'cheap'", "packet 2 takes the expensive branch on 'expensive'"]
  pip: {framed_from: FACE0, diameter: 2.3x_face, centre_above_face: 10%}
  fact: "Jev routes each request to a cheap or an expensive model"
  mark: null                       # circle / underline / stamp / sweep / slam on the key word
  sounds: [{id: swoosh-2025-01-08-03-02-26-utc-swoosh-04, at: 9.6}, {id: selection-click, at: 10.1}, {id: digital-click, at: 11.4}]
```

**Hook proposals (3, in the plan):**
```yaml
- name: "Counting bill"
  formula: HF-3 + HF-4
  kit: KIT-FLAT
  frame0: "split; pink billing card already dropping, OpenAI $26 / Claude $38 counting; him settling below; headline line 1 sliding in"
  first_3s: "f0–7 card lands · f0–12 headline lines in · f0–59 amounts climb · f60 cut + settle to him · 'you' · 'probably' · 'need Jev' stack"
  captions: ["If your AI bill is / getting out of control", "you probably need Jev"]
  why: "The pain is visible and climbing before the sentence ends; the answer lands as the biggest word"
```

### 13.3 The sound ledger (in the plan)
File → uses → times, with the list cue marked.

### 13.4 What to show the creator
The storyboard (the edit skill's step), with: frame 0; the 3 s mark; one figure at its key-word landing; one figure mid-build; one return to his face mid-settle; the CTA keyword frame; the last frame.

---

## §14 Worked examples

### 14.1 A product through its use cases (rebuilt in v2)
**Spine:** a router box with two numbered use cases; a 2-tab mini-map. **Kit:** FLAT; climax on the maroon page.
| t (s) | Spoken | Stage | Figure / run | Sound |
|---|---|---|---|---|
| 0.0 | "If your AI bill is getting out of control," | SPLIT | HD-2: the billing window drops in, real logos, amounts climbing every frame | `ui-opening`, `riser-2` under the count |
| 2.0 | "you probably need Jev." | FULL | Settle in (T-02); the product name lands big beside his face | `appear-enter` |
| 3.3 | "Here are two real use cases…" | FIG | Both use-case figures stacked as preview cards; the 2-tab mini-map appears | `0552611`, `0552621` |
| 6.5 | "One." | FULL → FIG | Opener "1 / AI Model Router" (slab from the left); into the circle (T-09) | list cue `paper-turn-page` |
| 8.0 | "Before you pay for an expensive call…" | FIG | MX-6: a "0 credits / Buy more" window; the cursor glides and presses | `mouse-click-mouse-click` |
| 9.6 | "…let Jev decide: cheap model or expensive one." | FIG | Canvas pan (T-04) to the router; packets pick their branches, one after another | `swoosh-2025-01-08-03-02-26-utc-swoosh-04`, `selection-click` per decision |
| 13.7 | "Two." | FULL → FIG | Opener "2 / Intelligent Triage" (slab drops from the top) | list cue |
| 15.7 | "Classify every ticket, lead, email or call and route it." | FIG | MX-7: the flurry snaps into a grid on "call", splits on "automatically", team boxes grow on "route" | `pop-up-pop-up` ×1, `game-pop-up-2025-08-27-06-39-58-utc-game-pop-up-3` ×1, `abstract-hit-sub-bass-07` on the snap |
| 21.2 | "Comment Jev and I'll send the link." | FULL | Keyword slab beside his face | typing |
| 32.3 | "200 times faster, 400 times cheaper." | SPLIT | F-12: the real article, the highlighter sweeps each number as he says it | `objects-drawing-board-marker-on-paper-drawing-line-medium-length-02-vadi` ×2 |
| 39.0 | "…where to use it and where not to." | FIG dark | T-11 dark drop; the terminal runs the setup, the two cases light green and red | `whoosh-2025-01-08-02-32-33-utc-whoosh-05` → `electric-hit-2025-02-20-01-45-58-utc-electric-hit-4` |
| 41.5 | "Comment Jev and I'll see you there." | SHEET | T-12; the keyword types and posts | typing, `17571-download-iphone-notification-ringtone-iphone-sms-ringtones` |

### 14.2 What the references teach
One figure per fact (hx1), the kit as proof of craft (hx2), mechanisms you can watch (hx3). This edition adds: every figure runs, chains instead of cuts where the story continues, a scored layer of sound effects, figures drawn big, and a face that always sits comfortably in its circle.
| Reel | Kit | Learn from it | Don't copy |
|---|---|---|---|
| hx1 Claude solved physics | FIG | One figure per fact (15 of them), the FIG header system, counters on every number, portrait chips, quote card + stamp, terminal run log, compute grid, the verification circle, off-the-chart → actual, the thesis dashboard, ending with no CTA | A soft 2× crop of him; a caption on the divider; FIG numbers out of order; +0.1 dBFS |
| hx2 fully edited by Claude | BRUTAL | The PIP circle in figure scenes, typed two-tone headlines, 3D flip-in windows, morph chains, slam labels, stopwatch + receipt, the multiply grid, the badge circle wipe, the kinetic keyword, the comment-sheet ending | The PIP covering headlines; a top panel touching his head; a 12.5 fps promo; a 0.85 s black tail; fake brand comments |
| hx3 you probably need Jev | FLAT | The counting-bill hook, the `CAP-STACK` payoff, the body preview, chapter slams with typing, cursor click + canvas pan, the router tree with alternating highlight, chaos → order, the proof highlighter | A movie clip; off-kit AI illustrations; a mid-word cut; the caption pill jumping heights |

---

## §15 Look at your frames
Questions, not a checklist:
- **The footage frame:** is every video, recording and picture full screen or in a designed box it fills, never a sharp rectangle over its own blur, never padded with blurred bars?
- **Frame 0, sound off:** is something already running, and is the claim readable?
- **Every figure page:** does the figure show the mechanism, and does it change at least twice while he talks about it?
- **Every circle:** is the whole head inside with air above the hair, at his highest and lowest moment?
- **Every arrival:** could it have grown out of what was on screen?
- **The climax:** is it clearly the biggest moment, on the dark page?
- **Vibe:** does anything look like a meme edit, a gamer edit or a slide? Take it out.
- **Craft:** no text on text, face clear, sounds on their pictures.

---

## §16 Build + render
- **Pipeline:** the plugin's edit skill: plan, draw every frame in `reel.js` (`frame(t)`), look at stills, score (`plan/sounds.json`), storyboard, render.
- **Fonts (bundled):** Inter Tight, Space Grotesk, Plus Jakarta Sans, Instrument Serif, Archivo Black, JetBrains Mono, Anton.
- **Helpers you'll want:** `Canvas(kit)`, `Anchor(t)` (full / split / circle from the speaker map), `Circle(face, d)` (framed from `FACE0`/`FACE(n)` per §3.3), `Window`, `Terminal`, `Cursor`, `Counter`, `Bars`, `Network`, `Flurry`, `Sticker`, `Slab`, `MiniMap`, `ChapterOpener`, the machines (`PlanBuildTest`, `DocsSwap`, `BugHunt`, `Simplify`, `OrgUnlock`, `Router`, `Sort`, `RunLog`, `CostCollapse`, `Multiply`, `Deliverable`), `CommentSheet`, `FigHeader(n, title, src)`, `CapBox(chunks)` / `CapStack(words)`, `Rings`, `Grid`, `Tree`, `DocCard`, `Portrait`, `Stamp`, `Highlighter`, `ChapterSlam(n, label)`, and the moves (`Pan`, `Morph`, `Refill`, `Fold`, `ZoomThrough`, `DarkDrop`, `Settle`, `Whip`, `CircleWipe`, `Push`). Pre-paint $ ₹ ✓ → ↑ before the first frame. All pure functions of t.
- **Final:** 1080×1920, H.264, AAC, −14 LUFS; check a contact sheet of the final file.

---

## Appendix A. Evidence map (where each house rule comes from)
| Rule / element | Reels |
|---|---|
| Figures carry 58–71% of runtime | hx1 (71%), hx2 (58%), hx3 (~60%) |
| Every spoken number moves and lands on the word | 3/3 |
| Pauses cut, 3.56–3.73 words/s | 3/3 |
| Hard cuts between shots; motion inside shots | 3/3 |
| A settle on every return to him | 3/3 |
| Small neutral 1–3-word caption box on every word, hard swap | 3/3 (black box hx1; red-orange box hx2, pill hx3) |
| Kinetic type replaces captions | hx2 |
| Big stacked keyword caption with blur-in | hx3 |
| FIG header system, portrait chips, document + stamp, terminal log | hx1 |
| PIP circle, typed headlines, morph chains, slams, circle wipe | hx2 |
| Chapter slams, preview, cursor + pan, chaos → order, highlighter | hx3 |
| Comment keyword twice + comment-sheet ending | hx2, hx3 |
| Fixes: true peak, soft crop, seam caption, FIG order, PIP overlap, panel on the head, 12.5 fps clip, black tail, fake comments, movie clip, mid-word cut, caption height jumps | hx1, hx2, hx3 |
| Every figure runs and chains, scored SFX with the ledger rule (no music), the whole face in every circle and zoom, figures drawn big, captions high on full frame | **The creator's directions, 11–12 Oct 2026** |
