# Creator Reel Editing Playbook (v2, "Infotainment Motion" edition, for Claude Opus 5.5)

> **In this plugin:** this file is the whole playbook. Every measured value and recipe the edit needs is in it; there is no other playbook file to open. The preview page and the `inspiration-analysis/` notes this playbook mentions are not shipped. Where it names the tools of its original run (`render.html`, `drive.py`, `storyboard.py`, `sfx-cues.json`, `SFX/` file names), the edit skill's REFERENCE.md has the plugin's equivalents; sounds are picked by id from SOUNDS.md.

**Purpose:** you (Claude) receive a talking-head video of Creator plus its script. Use this document to **ideate and build** every hook, banner, caption, motion graphic, zoom, sound effect and transition, then edit the Reel so that it **stops the thumb at frame 0** and keeps teaching and entertaining to the last frame.

**What v2 is:** a frame-by-frame analysis of 10 of Creator's finished reels (`inspiration/`, per-reel notes in `inspiration-analysis/`), elevated around his own direction of 3 Oct 2026. The measured house moves (canvas split, panel drop, orange leak, chunky captions, the full transition and pattern libraries) are kept here in full. Where a reference reel and a directive disagree, **Creator's directives win**. They are listed first, because every rule below serves them.

**Visual preview** of the new B-roll moves (13 animated frames): `Creator-Playbook-v2-Preview/index.html`.

### Creator directives (non-negotiable)
| # | Directive | Where it lives |
|---|---|---|
| D1 | **The hook is a visual stopper.** Motion graphics in the first second must make the reel stand out from everything else in the feed | §6.1, §6.3, VS-1…VS-8 |
| D2 | **Mocking tone gets meme SFX.** When Creator roasts the viewer's bad result or assumption, use the right meme sound | §11.3, tone tags §1 step 6 |
| D3 | **Result first, always.** The hook shows the viewer's *garbage* result and then Creator's *premium* result ("ye tumhari website hai… ye maine vibe coding se banayi") | §6.2 Result-First Roast |
| D4 | **The yellow banner is the strongest element.** It is the first thing people read | §5.2, §6.5, Appendix B |
| D5 | **Numbers, scale and security become elite motion graphics.** 5 users vs 5,000 users, hacks, checks: the viewer *sees* what Creator *says* | §3.5 Data Stage, §8.3 P-40…P-60 |
| D6 | **Bright colours:** yellow first, plus a disciplined set of bright accents | §4 |
| D7 | **No SFX file repeats more than 2× (3× at most)** in a reel. The exception is a parallel list cue (item 1, 2, 3… share one cue) | §11.2 SFX ledger |
| D8 | **Infotainment:** information + entertainment. Splits, coming back on screen, dynamic zooms and snappy zooms are part of the language | §3, §9, §10.2 zoom system |

### The reference reels → this edition, at a glance
| Area | The reference reels | This edition |
|---|---|---|
| Hook | Many formulas, banner + chunky captions | **Result-First Roast** is the default: garbage result → roast → premium result, ≥ 10 visual changes in 3 s, a 3-layer frame 0 |
| Banner | Flat yellow box, ≤ 14 words, plain | **Headline Slab**: yellow + 6 px ink stroke + hard offset shadow, a keyword chip, ≤ 9 words, readable at thumbnail size, alive (pulse, flip, rocket exit) |
| Palette | Yellow + role hues measured from reels | **Bright system**: Hype Yellow, Blaze Orange, Alarm Red, Volt Green, Electric Cyan, Ultra Violet, Comedy Pink, each with one job |
| Worlds | Dark studio + light canvas | **Three worlds**: Studio (Creator), Canvas (explain tools), **Data Stage** (night-neon for numbers, scale, security) |
| Data | Counters, metric card | **Data Theatre**: procedural crowds of 5 → 5,000 people, crash phones, gauges, versus lanes, metaphor machines (book index, bouncer, gift box, data wall) |
| Comedy | None (meme SFX were banned) | **Comedy layer** gated by tone: meme SFX, freeze-frame roasts, marker circles, stamps, stickers, crash zooms |
| Camera | Jump cuts; no selfie punch-ins | **Zoom system Z-1…Z-7**: snap punch, crash zoom, pull-out reveal, zoom-through, rotation snap, shake |
| Splits | Panel drop / return | **Stage moves**: panel drop, **pop-back**, slide-aside versus, reaction bubble, depth sandwich (graphics behind Creator) |
| SFX | Few, same whoosh everywhere | **Tone-tagged pools + a ledger**: every cue logged; no file > 2×; meme files 1× each |

### Quick index
| § | What |
|---|---|
| §1 | Procedure (do this in order) |
| §2 | Hard rules (MUST / NEVER) |
| §3 | Worlds, screen modes, stage moves, layout, safe zones |
| §4 | Colour system (bright palette, roles, contrast pairs) |
| §5 | Type tokens: Headline Slab banner, captions, labels, kinetic type, comedy marker, hero numbers |
| §6 | Hook system: visual stoppers, Result-First Roast, result pairs per topic, banner writing, CTA formula |
| §7 | Structure: step markers, item ritual, open loops, infotainment rhythm |
| §8 | B-roll system: families, patterns (incl. Data Theatre P-40…P-60, Comedy P-61…P-68), lookup, assets |
| §9 | Transitions `T-01…T-24`: recipes, grammar, budget |
| §10 | Motion tokens, zoom system `Z-1…Z-7`, layers, finishing |
| §11 | Sound: tone palettes, SFX ledger (no repeats), meme SFX rules, no music bed, mix |
| §12 | Footage handling (setups, crops, matte, reaction bank, VFR, audio) |
| §13 | Output contract: beat sheet schema (with `tone` + SFX ledger) + checkpoint |
| §14 | Worked examples: Reel 1 hook, Reel 6 data plan, Reel 10 security plan |
| §15 | QA checklist |
| §16 | Build + render |
| App. A | Evidence map |
| App. B | Banner bank for the October reels |

---

## §1 Procedure (follow in order)

1. **Inventory.** Run `ffprobe` (resolution, fps, duration, audio; pick one voice track). Identify camera setups (§12.1). Conform phone VFR footage to 30 fps CFR.
2. **Matte.** v2 needs a person matte in almost every reel, for the depth sandwich, cut-out stickers, the reaction bubble and the silhouette strobe. Generate it for the whole clip (§12.3).
3. **Transcribe** with word timestamps (PROC P4). Whisper writes Hindi in Devanagari; keep it for timing only. Captions are romanised Hinglish from `script.md`. Check every brand and tool name.
4. **Segment** into `HOOK`, `LOOP`, items/steps (ordinal words), `PAYOFF`, `CTA`.
5. **Classify every sentence** with a line type (§8.4) and mark its **trigger word**.
6. **Tone-tag every sentence:** `hype` · `mock` · `awe` · `explain` · `warn` · `win` · `cta` (§10.2, §11.1). The tone decides colour, zoom, caption treatment and SFX family. A sentence is `mock` when Creator roasts the viewer's result, assumption or habit ("wo ekdam bekaar hai", "paanch nithalle dost", "hackers ke liye gift").
7. **Pick the result pair** for the hook (§6.4): what is the viewer's *garbage* state, and what is Creator's *premium / fixed* state? Plan the assets for both.
8. **Write 3 banners** (§6.5) and **3 hook variants** (§6). Recommend one. Run the stopper test (§6.1).
9. **Plan the data story** for any number, comparison or security idea: which Data Theatre pattern (P-40…P-60) makes the viewer *see* it (§8.5).
10. **Fill the beat sheet** (§13): one beat per trigger word, an event every ≤ 1.5 s. Each beat gets mode, pattern, family, caption, tone, zoom, transition and **SFX file names**.
11. **Build the SFX ledger** (§11.2) and the transition map (§9.3). Check the budgets.
12. **Produce assets** (§8.7). **CHECKPOINT** (§13.3), then **wait for approval.**
13. Build act by act, preview, QA (§15, max 3 passes), final render (§16).

---

**Full screen or a box, never any footage or picture over its own blur** (Creator, 13 Oct): the creator's video either fills the whole frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground) that it fills completely, cropped around the face. The same for every other medium: screen recordings, landscape clips, photos, receipts, diagrams and other people's footage either fill the frame (cover-cropped to the part that matters, or a push-in) or sit in a designed box on the style's own ground or scene (its colour, gradient, texture, grid or drawn set). Never shrink anything over a blurred or darkened copy of itself, never pad a band or box with blurred side bars, never set a card on the creator's blurred frame: a hard rectangle against its own blur looks cheap. A tight selfie stays full screen: move or shrink the text above the head, not the video; the hair may touch the top edge, eyes to chin are always in. When the whole head must be seen, use a box layout where it fits.

## §2 Hard rules

**MUST**
- M1. **Frame 0 is a thumbnail and a stopper.** It holds ≥ 3 layers: **banner + result + Creator**. At least one element is moving on f0, and the banner is fully readable on f0.
- M2. **≥ 10 visual changes in the first 3 s.** Caption steps, flaw circles, stamps, zooms, cards and chip pulses all count.
- M3. **Result first.** By **2.0 s** the viewer has seen a result: the garbage state, the premium state, or both (D3, §6.2).
- M4. **The banner obeys §5.2 / §6.5:** ≤ 9 words, ≤ 2 lines (3 only with a number), one keyword chip, readable at 25% scale, and saying the same thing as the result pair on screen.
- M5. **Zero dead air.** At most 1 gap ≥ 150 ms per 15 s, except a deliberate ≤ 0.3 s record-stop before a pivot or punchline. Jump cuts on word boundaries ±1 f.
- M6. **Literal, on-the-word visuals.** Every tool, number, command, step and risk gets its visual 2 f before the word and fully on within ±5 f. Tool cards land within ±1 f of the tool name.
- M7. **Something changes every ≤ 1.5 s** (body) and **≤ 1 s** (hook). Nothing is visually static for more than 2.5 s.
- M8. **Numbers become pictures** (D5). Every spoken quantity, comparison or risk is shown with a Data Theatre pattern: quantity as countable things, comparisons on the same axes, risk as a mechanism. Never just a number on a card.
- M9. **Tone drives treatment.** Comedy visuals and meme SFX appear only on `mock` beats (and the one allowed `win` meme, §11.3). `awe` beats are clean and premium. `warn` beats are red and tense.
- M10. **The SFX ledger is clean** (D7): no file used more than 2×, except the parallel list cue (≤ the number of items). Each meme file is used once. No file on two consecutive cues.
- M11. **Creator stays on screen or one tap away.** B-roll lives in cards, splits, the Data Stage with a panel or bubble, or the depth sandwich. Full-screen graphics without him last ≤ 2.5 s.
- M12. **The face is never covered.** The banner bottom sits ≥ 40 px above his head top, captions at chest height, stickers never on the face.
- M13. **Promise integrity.** The banner count equals the items shown. Every "end mein dunga" is paid off on screen. The CTA keyword is on screen.
- M14. **Facts only from the script or sources.** Illustrative numbers that the script itself presents as hypothetical ("5,000 users aaye toh…") may be shown, but **never decorative fake metrics** (made-up response times, percentages, revenue).
- M15. **Spelling:** romanised Hinglish may be phonetic, but English words and brand names must be exact.
- M16. **Hold before you cut.** Titles and labels hold ≥ 10 f after building. On-screen text holds ≥ 0.25 s per word.
- M17. **Audio:** −14 LUFS integrated, true peak ≤ −1.5 dBTP. A hard end ≤ 6 f after the last word.
- M18. **Deterministic, frame-based animation:** all crowds, particles and shakes come from seeded noise of the frame number (PROC rule 6).
- M19. **Every spoken word is on screen.** `CAP-CHUNKY` in the hook and CTA blocks, `CAP-SUB` in the talking sections, each word on its onset. A word leaves the captions only while a `CAP-GLOW`, KT card or big label is carrying that same line.

**NEVER**
- N1. Readable code, stack traces or raw error logs as a main visual. Illegible code-shaped lines are allowed as texture inside a scanner, magnifier or blur (e.g. P-52). Commands go in chips.
- N2. Contrast failures: white or yellow text on the white canvas; dark logos on dark footage; red text on the night stage without a white outline; pink text on white without an ink stroke.
- N3. Raw full-bleed screen recordings. Use a card, a device mock, the depth sandwich, or a ≤ 2.5 s full-screen moment with a frame.
- N4. Meme SFX or comedy visuals on `explain`, `awe` or `cta` beats, or under a trigger word. Meme files from the excluded list (§11.3).
- N5. The same SFX file more than 2× (outside the list cue). The same zoom type twice in a row. The same transition 3× in a row.
- N6. More than 3 bright hues in one frame (yellow + 2). Comedy Pink outside the comedy layer. Coloured words inside subtitles.
- N7. Hooded hackers, glowing robot brains, Matrix rain, random stock tech footage. Use mechanisms instead (red cursors, gift box, data wall, bouncer).
- N8. Transitions outside `T-01…T-24` or zooms outside `Z-1…Z-7`. No RGB-split packs, film burns or lens-flare PNGs.
- N9. Fake UIs presented as real products, fake dashboards, invented revenue or testimonials. The garbage and premium example sites are generic, unbranded mocks, or Creator's own builds.
- N10. A black tail > 0.2 s, or an outro louder than the voice.
- N11. Text layers overlapping (subtitle under a title, sticker over the banner).
- N12. Visuals that only decorate. Every motion graphic shows the thing being said.

---

## §3 Worlds, screen modes, stage moves

### 3.1 Three worlds
| World | Look | Carries | Enter / exit |
|---|---|---|---|
| **Studio** | Creator's footage (low-key warm room) | Claims, roasts, opinions, asides, CTA | Hard cut, T-17 pop-back, zooms |
| **Canvas** | `#FCFCFC` + dashed `#C5C5C5` grid, 141 px | Tools, sites, prompts, docs, step-by-step explanations | T-04 panel drop in; T-01 or T-17 out |
| **Data Stage** | Night `#07070C`, faint cyan dot grid (`#00D8FF` at 10%, 60 px), neon glows | Numbers, scale, crashes, money, security, comparisons | T-18 zoom-through or T-04 (dark), out with T-17 or T-01 |

Switching worlds is a beat in itself, so each switch must land on an ordinal or discourse word.

### 3.2 Screen modes
| Mode | What | Share (per 60 s) |
|---|---|---|
| `HOOK` | Result-First Roast (§6.2): banner + result + Creator | 5–9 s |
| `F` | Full-frame talking head (selfie or tripod) + `CAP-SUB`, with zooms Z-1…Z-7 | 25–35% |
| `S` | Canvas split: card(s) on top, Creator in the panel at the bottom (`P-BLEED` top y 1135, or `P-INSET` x 12–1068, y 1008–1881) | 30–45% |
| `D` | **Data Stage** split or full: the night stage with a Data Theatre pattern; Creator in the panel or in the reaction bubble | 10–30% (higher in data/security reels) |
| `V` | **Versus split:** left/right halves with the same axes (garbage vs premium, 5 vs 5,000). Creator in the bubble or a centre strip | ≤ 10% |
| `R` | **Reaction bubble:** a full-screen B-roll or Data Stage with Creator in a circular bubble | ≤ 15% |
| `I` | Inset card in the top band over `F` | ≤ 10% |
| `K` | Card on the canvas (never over Creator's blurred self) | ≤ 10% |
| `U` | Full-screen UI mock (comment or share flow) | ≤ 3 s |

**How each mode plays:**
- **`F`:** shows `CAP-SUB` plus at most one big keyword (`CAP-GLOW`) per line. It carries opinions, asides, jokes, "ye galti mat karna", objection busters and the CTA. Selfie: jump cuts every 1–2.5 s, with Z-zooms on meaning (§10.2). Tripod: never static. Alternate punch-in/out across jump cuts (±10–50%, e.g. wide → 1.4× → wide), or a slow Ken Burns of ±7–10% over 3–6 s with the direction alternating segment to segment.
- **`I`:** a card in the top band (x 24–1056, y 60–600; bleeding off the top edge is allowed) over the full-frame talking head, or a small PiP (≈ 300×530, radius 24, top-right) for a phone UI. Enter with T-13 smear, a 4 f fade or a slide-down; exit with a smear or a hard cut. For quick proof that doesn't deserve a layout change.
- **`K`:** a 1024-wide card (radius 55) centred at y ≈ 590–1330 on the canvas (the stage's own ground: dark grid or the current scene), never on Creator's blurred or darkened frame (Creator, 13 Oct: a card over his own blurred video looks cheap). Voice and subtitles continue. Enter with T-11 (the card grows 60 → 100% as the canvas replaces the footage, 6 f); exit with a hard cut or T-17 pop-back.
- **`U`:** a full-frame recreation of a real Instagram action (the comment or share flow on Creator's own account) with a cursor, 10 f per step. At most one per reel. Enter with a hard cut; exit with T-07.
- **`S-DARK`:** the canvas split on a black canvas with a faint grid, used **once** per reel for the payoff or the best item. Enter with T-14.

### 3.3 Canvas split layout (`S`)
```
┌─────────────────────────┐ 0
│  (IG top UI, keep clear)│ ← y 0–110
│   Tool Title (serif)    │ ← title band y 190–300 (or step marker)
│  ╭───────────────────╮  │
│  │  CARD: real site, │  │ ← card zone x 24–1056, y 300–900, radius 40
│  │  prompt, doc, UI  │  │
│  ╰───────────────────╯  │
│   black subtitle here   │ ← CAP-SUB black, centre y = panel top − 60
│╭───────────────────────╮│ ← SPEAKER PANEL top y 1135, top radius 64
││   Creator (footage)     ││   x 12–1068, bleeds off the bottom
└┴───────────────────────┴┘ 1920
```
- **Canvas:** `#FCFCFC` with dashed grid lines `#C5C5C5`, 3 px, dash 14/10, pitch **141 px** (vertical lines at x ≈ 121, 262, 404, 545, 686, 828, 969). A cooler variant: canvas `#E1E7F2` with lines `#BBC1C9`.
- **Panel variants:** `P-BLEED` (the default) bleeds off the bottom with top corners rounded 64, top y **1135** (observed 914–1184). `P-INSET` (listicles): x 12–1068, y 1008–1881, radius 60 on all corners.
- **Speaker in the panel:** head top = panel top + 60…110, eye line ≈ panel top + 250, face x **340–560**. Keep him left of centre when he gestures, so the hand fills the right side.
- **Cards:** one idea per card. The card may shift right and half off-frame to make room for a big text list on the left (P-06), or split into two small tiles (P-04). Card swaps inside `S` are always animated (T-11 / T-12), never a still jump.

### 3.4 Stage moves (how Creator moves between layouts)
| ID | Move | Recipe | Use |
|---|---|---|---|
| **G-1** | **Panel drop** | T-04: full frame slides down into the panel in 6–8 f, canvas/stage revealed, card rises | Into every item |
| **G-2** | **Pop-back** | T-17: the panel bursts back to full frame. Scale 0.92 → 1.06 → 1.00 over 7 f, vertical blur, a Z-1 punch on the landing word | Back to Creator for a roast, opinion or punchline |
| **G-3** | **Slide-aside** | T-23: the panel narrows and slides to the left 42% (x 0–450, rounded right edge) in 8 f. The B-roll takes the right side | Creator pointing at a duel, or explaining beside a tall phone mock |
| **G-4** | **Reaction bubble** | T-24: the footage shrinks into a Ø 300 circle (8 px `paper` ring + 12 px ink shadow) at bottom-left (centre x 210, y 1560) in 8 f, with an elastic overshoot. The bubble bounces 1.0 → 1.12 → 1.0 on his punch words | Full-screen Data Stage, versus or UI moments |
| **G-5** | **Depth sandwich** | Creator's matte is drawn **in front of** the graphic. The graphic sits behind him (layer 6.5), and he overlaps the card's bottom edge or corner. Parallax: the card drifts ±12 px against him | Hook, premium reveal, hero numbers |
| **G-6** | **Lean-in** | Creator's cut-out slides in from the right edge (10 f, ease-out) pointing at the card, hips cropped by the frame | "Ye dekho", flaw pointing |

### 3.5 Data Stage (`D`) spec
- **Background:** `#07070C` with a faint dot grid (`#00D8FF` at 10%, pitch 60 px). A 700 px radial glow behind the hero element (`#FF6A00` or `#00D8FF` at 14%) drifts ±20 px.
- **Layout:** the graphic zone is x 40–1040, y 160–1080. Creator sits in a `P-INSET` panel (dark-rimmed) or the G-4 bubble. Captions are white `CAP-SUB` at y = panel top − 60.
- **Neon rule:** glows only on the hero element and the state change (OK → crash). Everything else stays flat.
- **Scale honesty:** quantities are drawn as countable things: 5 avatars, 5,000 dots (literally 5,000, seeded positions), N shield segments.

### 3.6 Safe zones (Instagram)
- Key text sits within x 64–1016, y 110–1500. The bottom ≈ 380 px and the right ≈ 110 px are UI-covered; only the speaker panel or bubble may live there.
- **Banner:** top edge y 140–200.
- **Captions:** centre y 1150–1450.
- **Bubble:** keep it above y 1740 (bottom edge).

---

## §4 Colour system (bright, each hue has one job)

### 4.1 Bright palette
| Token | Hex | Job | Text on it |
|---|---|---|---|
| `hype` **Hype Yellow** | `#FCF700` | The banner, keyword chips, CTA keyword, list cue highlights. *The* brand colour | `ink` (17:1) |
| `blaze` **Blaze Orange** | `#FF6A00` | Premium energy: reveal light sweeps, T-01 leak, "awe" glows, marker underlines | `ink` (7.5:1) |
| `alarm` **Alarm Red** | `#FF2A2A` | Garbage, danger, crash, blocked, "bilkul mat", flaw circles | `paper` bold ≥ 40 px (3.9:1) / `ink` (5.3:1) |
| `volt` **Volt Green** | `#22F06A` | Premium result, fixed, secure, money, ✓ | `ink` (13:1) |
| `cyan` **Electric Cyan** | `#00D8FF` | Tech, data, systems, users, requests, the Data Stage accent | `ink` (12:1) |
| `violet` **Ultra Violet** | `#8A5CFF` | Concept and tool names (`CAP-GLOW`), step badges | `paper` (4.6:1) |
| `meme` **Comedy Pink** | `#FF2E8B` | **Comedy layer only:** stickers, roast labels, freeze-frame marks | `paper` bold (3.6:1, large only) / `ink` |
| `ink` | `#0B0B0B` | Text, strokes, hard shadows | — |
| `paper` | `#FFFFFF` | White text, cards, chips, sticker outlines | — |
| `canvas` / `grid` | `#FCFCFC` / `#C5C5C5` | Canvas world | — |
| `night` | `#07070C` | Data Stage | — |

Gradients (for `CAP-GLOW` and badges only):
- Violet `#B48CFF → #8A5CFF → #5B2FD6`
- Volt `#9BFFC2 → #22F06A → #0FB24A`
- Cyan `#9CF0FF → #00D8FF → #0089C7`
- Blaze `#FFC27A → #FF6A00 → #D93D00`

Light passes, as measured:
- **Orange leak (T-01):** wash `#F94F00` / `#FA5302`, decay `#E66B2D`, hot flare edge `#FCEF2D`–`#FEFD70`, darks lifted to `#8C1700`.
- **Warm leak, long (T-05):** ramp `#FC623C` → `#FCC051` → `#EA342B` → cream `#FCE4AB`.

Shadows: subtitles on footage `rgba(0,0,0,.55)` blur 10; light cards on the canvas `0 16px 40px rgba(0,0,0,.12)`; yellow chips on the canvas `0 8px 15px #C4C4C4`. Brand colours as measured: Claude `#D97757`, Stripe `#635BFF`, YouTube `#FF0000`.

### 4.2 Meaning (both worlds)
- **Yellow** = read this / the hook / do this.
- **Red** = their garbage, danger, crash, blocked.
- **Green** = Creator's premium, fixed, secure, money.
- **Orange** = premium energy and light.
- **Cyan** = tech, data, users.
- **Violet** = the concept or tool name.
- **Pink** = it's a joke.
- Brand colours appear only on brand names and logos.

**The before/after axis is always red → green.** Garbage gets red marks; premium gets a green chip and an orange light sweep.

### 4.3 Rules
- Max **yellow + 2** bright hues per frame (N6).
- One hue per caption block. Subtitles are never coloured.
- On the canvas, coloured text needs an `ink` stroke ≥ 4 px, or it must sit on a chip.
- On the Data Stage, red and pink text gets a 3 px white outline or sits on a chip.
- Footage is not regraded (low-key, warm, magenta practicals). Graphics never use the studio magenta.

---

## §5 Type tokens

### 5.1 Font map (renderer fonts; confirm the editor's project fonts when available)
| Role | Font | Weight |
|---|---|---|
| **Banner (Headline Slab)** | **Inter Tight** | 900 |
| Chunky captions | **Gagalin** (install) → fallback **Lilita One** | 400 |
| Subtitles | **Plus Jakarta Sans** | 800, lowercase |
| Glow keywords, labels, data words | **Inter Tight** | 800–900 |
| Hero numbers, badges | **Anton** | 400 |
| Serif helper, tool titles, premium site type | **Instrument Serif** | 400 italic |
| **Comedy marker (roast notes)** | **Permanent Marker** | 400 |
| Imperative 3D cards | **Montserrat** | 900 italic |
| Chips, prompt text | **Jost** | 500 / 700 |
| Pixel titles | **Silkscreen** | 700 |

### 5.2 `CAP-BANNER`: the Headline Slab (the strongest element on screen)
| Property | Spec |
|---|---|
| Slab | `hype` fill, **6 px `ink` stroke**, **hard shadow +12/+14 px `ink`** (no blur), radius 26, rotated **−1.5°**. x 40–1040, top y **150**, height auto (2 lines ≈ 230 px) |
| Text | `ink`, Inter Tight 900, **66–78 px**, line height 1.02, tracking −2%, centred. ≤ 9 words, ≤ 2 lines (3 only when a number needs it) |
| Keyword chip | 1–2 words in CAPS inside the slab, in a chip with radius 14, padding 2/16. Colours: `ink` with yellow text (default); `alarm` with white text (garbage, danger); `volt` with ink text (premium, fixed); `cyan` with ink text (data) |
| Emoji | ≤ 2, at line ends (🤢🔥💀🎁🔐💥🚀✅). Never mid-line |
| Underline | A `blaze` marker swipe (8 px, slightly wavy) wipes under the chip word L → R over 6 f, **when that word is spoken** |
| f0 | **Fully readable on frame 0** at scale 1.06, settling to 1.00 by f5 (ease-out back). The shadow offset grows from 0 to final over f0–f4, so it "lands" |
| Life | Chip pulse (1.0 → 1.12 → 1.0, 6 f) on the spoken keyword. **Banner flip** (T-21) at the transformation beat: the chip flips on the X axis (4 f) to its opposite ("SLOP" → "PREMIUM", red → green). One flip max |
| Exit | **Rockets up** off-frame in 5 f with vertical blur at the hook's end, or blur-out inside T-04. Never a hard pop mid-sentence |
| Duration | The hook (≥ 0.25 s per word, minimum 2.5 s, maximum 9 s) |
| Variants | **B-VERSUS** "Your X 🤢 vs MINE 🔥" (two chips, red and green). **B-NUMBER** with a giant numeral chip ("5 ✅ → 5,000 💥"). **B-WARN**: the slab keeps its yellow, the chip is red, the emoji 🎁 / 🔓 |

### 5.3 `CAP-CHUNKY` (hook, early-CTA block, end CTA)
- Chunky rounded unicase (Gagalin → Lilita One).
- Keyword line 130–150 px in `hype` (or a role hue), with a 6 px `ink` stroke and a hard shadow +6/+8.
- Helper line 60–80 px in white.
- Centred on x 540, block y 1240–1560. In a skit, centred under the speaking clone.
- **Build: every spoken word appears, on its own onset.** Word-append with hard 1-frame pops. A block holds 1 keyword + ≤ 4 helper words (the helper line above or below the keyword), then clears for 1–2 f before the next block. Nothing that was said is skipped: the keyword is the one word that goes big, the rest of the phrase is the helper line.
- The keyword word gets a **squash-pop**: scale y 0.7 → 1.15 → 1 and x 1.2 → 0.95 → 1 over 5 f.
- **First caption** flies in: from below (y +500 → 0 over 7 f, ease-out, echo trails) or from the left (4 f, horizontal blur).
- **Dressing:** the money word goes green + glow with a tiny helper under it. A place or scale word goes **giant** (≈ 210 px cap) with tiny connectors. Reactions and questions go yellow. Brand names take their brand colour.
- **Typed variant:** the hook word typed 1 character per frame, optionally rotated −5° ("AI se Website").

### 5.4 `CAP-GLOW` (keyword titles)
- Inter Tight 900, cap height 150–220 px, a §4.1 gradient by role plus a same-hue glow of 20–40 px.
- Typed at 1 letter/frame, or a 1-frame smear landing sharp.
- Helper: white Instrument Serif italic, 70–80 px, under the right half, fading in over 4 f.
- Hold ≥ 10 f. Subtitles hide while it's up. Budget: 1 per ~5 s.

### 5.5 `CAP-SUB` (subtitles: every word of talking sections)
- **Every spoken word of the talking sections**, lowercase as spoken (brand names capitalised), phrase-aligned chunks of 2–3 words (max 4), each on screen 0.3–0.8 s.
- Plus Jakarta Sans 800, 54–60 px, tight tracking, hard swap on the word onset or a 2 f blur dissolve. No pops, no colour.
- White with a soft shadow on footage and the Data Stage; `#111` on the canvas.
- Centre y 1300 in `F`; in `S` / `D`, at panel top − 60.
- Hidden under `CAP-GLOW`, KT, big labels, during T-01 / T-04 / T-17, and during the hook (the hook uses `CAP-CHUNKY`).

### 5.6 Labels, titles, stacked words
- **Edge labels** on the card bottom edge, white Inter Tight 800, 90–120 px, swapped per noun (fade + 6 f rise, hard swap).
- **Serif tool titles** above cards, Instrument Serif italic 90 px, letter-by-letter blur reveal (10 f).
- **Stacked feature words**, black, left-aligned, one per spoken item, typed in per word (4–8 f each). Optional Difference blend over a card.

### 5.7 Kinetic type (`KT`, on the canvas, for instructions)
- **KT-RED (imperatives):** Montserrat 900 italic, face `#FF2A2A`, 3D extrude `#B3001B`, rotated −7°, 2–4 short CAPS lines. Lines fly in from the left with motion blur, ~4 f each. ("STEP BY STEP SETUP", "BILKUL MAT KARNA".)
- **KT-TYPE (sentences):** bold black sans ~60–70 px on the canvas. Typewriter at 1 char/frame, with the upcoming letters pre-shown in light grey (ghost letters).
- **KT-PIXEL (product names):** Silkscreen, salmon `#D47557` with a darker pixel shadow ("CLAUDE CODE"). Fades in from 30% over 6 f.
- **KT-ACRONYM:** Anton, `hype` with a black extrude ≈ 10 px, cap ≈ 300 px. Builds one letter per spoken syllable ("A." → "A.E." → "A.E.O"); the expansion wipes in underneath in small white text over ~30 f.
- **KT-ARC (hook only):** words wrapped on an arc around Creator's head (matte in front), coloured with glow. Letters reveal with the syllables at ~1 letter/f, hold ≈ 1 s, hard off ("60 seconds", "Claude se").

### 5.8 Comedy marker (`CAP-MARKER`, `mock` beats only)
- Permanent Marker, 56–72 px, `alarm` red on light backgrounds or `meme` pink with a white outline on dark ones, rotated −4…+6°.
- Written on with a 10 f L → R wipe (hand speed).
- Paired with hand-drawn strokes: circles 8 px wide (drawn with `stroke-dashoffset` over 8 f, slightly overshooting the start point), arrows (shaft 6 f, then head 2 f) and underlines.
- Examples: "purple gradient 🤢", "same 3 cards", "ye tum ho 😭", "5 nithalle dost".

### 5.9 Hero numbers (`HERO-NUM`)
- Anton, 260–520 px, white or a role colour, with a 6 px ink stroke on the canvas and a glow on the Data Stage.
- Always **counts** (slot roll or ease-out count over 18–30 f) or **assembles** from particles (P-59).
- Lands with a Z-5 shake + an impact SFX from the pool.
- The comma format follows the script ("5,000"). The ₹ glyph is pre-painted.

### 5.10 Stickers (`STICKER`, `mock` beats only)
- An emoji or a 1–3 word pink/white label: 10 px white outline, hard shadow +6/+8 ink, rotated ±8°.
- Pop 0 → 1.25 → 0.95 → 1.0 over 6 f, wobble ±3° for 12 f.
- ≤ 1 on screen, ≤ 5 per reel, never on the face. Set: 💀 🤡 🤦 😭 🗑️ 🎁 "bruh" "AI SLOP" "BEKAAR".

### 5.11 Chips and small numbers
- **Command chip:** `hype` (or `paper`) rounded rect, radius 16–36, Jost 700, 70–75 px black text, chip shadow. Pops with overshoot 25 → 100 → 150 → 120 → 100% over 5 f, on the verb (`Ctrl+C`, `Ctrl+V`, `/loop`).
- **Domain chip:** blue pill `#0170D7` / `#035DF7` with a `#6DE9FF` glow ("yourbrand.com"), rising with blur over 6 f; the text can morph ("→ rahul@yourbrand.com").
- **Number circle:** lavender radial `#CB94F8 → #DBAFFA`, soft glow, Ø 195, white bold italic numeral. Fade + blur-in + 10 px rise over 5 f.
- **Money counter:** green heavy rounded sans ≈ 130 px with glow, slot-machine digit roll over ≈ 30 f landing on the real value; a helper word ("mahine ke") is appended after.
- No source or footnote tags on this channel unless asked.

---

## §6 Hook system

### 6.1 The stopper test (run it on frame 0 and on 0–3 s)
1. **Thumbnail test:** frame 0 at 25% scale still shows *what this is about*: the banner is readable, and the result plus Creator are visible.
2. **Mute test:** with sound off, the first 3 s still tell the story (garbage → premium, or failure → fix).
3. **1-second read:** the banner reads in ≤ 1.5 s (≤ 9 words).
4. **Change count:** ≥ 10 visual changes in 0–3 s, and ≥ 1 moving element on f0.
5. **Feed-contrast test:** in a strip of 6 random reel thumbnails, ours has the highest contrast element (the yellow slab with its ink shadow) and a clear "two states" picture.

### 6.2 The Result-First Roast (default hook for every "build" reel)
Spoken pattern (Creator): "*Ye tumhari website hai* [garbage]… *aur ye maine vibe coding se banayi* [premium]."

| t | Beat | Tone | Visual | Caption | Zoom / move | SFX (from pools, §11) |
|---|---|---|---|---|---|---|
| **f0** | Stopper frame | hype | **Banner slab** settled-in (B-VERSUS) + the **garbage result** (browser or phone mock, tilted 4°) mid-frame + **Creator cut-out** overlapping its bottom corner (G-5), already pointing | — | Slab 1.06 → 1, card tilt-in | Hit on f0 (`ABSTRACT_HIT_Sub_Bass_07`) |
| 0.1–1.4 | "Ye tumhari website hai…" | mock | Card pushes in (1.00 → 1.08). **Flaw markup (P-62):** 2–3 red marker circles draw on the real flaws, with labels ("purple gradient", "same 3 cards", "centred text") | CHUNKY "ye tumhari / **WEBSITE**" | Creator Z-7 rotation snap −3° | Marker swipe per circle (different files) |
| 1.4–2.1 | Punchline ("…ekdam garbage / AI slop") | mock | **Stamp verdict (P-63)** "AI SLOP" slams onto the card (rotation −12°, scale 1.7 → 1) + Z-5 shake + 💀 sticker. Optional Z-2 crash zoom on Creator's smirk (5–8 f) | CHUNKY "**GARBAGE**" in red | Z-2 or shake | **Meme hit in the gap after the word** (`Vine_boom` *or* `Fahh`) |
| 2.1–2.6 | Pivot ("…aur ye") | awe | **Garbage exits (T-19 Shatter):** the card cracks and falls in 9–14 shards with gravity and spin, or crumples into a trash icon | — | Z-3 snap pull-out | Riser into the reveal (`Zoom In Riser`) |
| 2.6–4.6 | "…maine vibe coding se banayi" | awe | **Premium result reveal (T-20 Light-sweep):** an orange light bar sweeps L → R, revealing the premium site in 3D tilt (rotateY 18° → 0 over 14 f) with live motion inside. **Banner flip (T-21)** "SLOP" → "PREMIUM" (red → green). Creator stays in front (G-5) | CHUNKY "vibe coding / **SE**" | Z-4 push-in drift | Cinematic hit + shine on the flip (`Cinematic Hit 4` + `Short Shine 2`) |
| 4.6–7.5 | Count + loop ("ye 3 skills…, end tak dekhna") | hype | Feature chips **orbit** the premium card (P-66). Count tiles rise | CHUNKY "**3 skills** / end tak dekhna" | Z-1 punch on the count | Pop (pool) |
| ≤ 9 | Exit | — | The banner rockets up; T-04 panel drop into item 1 on "Pehla" | — | — | Whoosh (pool, not used yet) |

**Never skip the premium state.** Even if the script's hook only roasts, the premium (or fixed) state appears by 4.6 s. That's the open loop.

### 6.3 Visual stopper devices (VS, combine 2–3 in a hook)
| ID | Device | Recipe |
|---|---|---|
| VS-1 | **Garbage card with flaw markup** | P-62 on a browser or phone mock, red circles + marker notes |
| VS-2 | **Depth sandwich** | Creator's matte in front of the result card (G-5), with parallax |
| VS-3 | **Stamp verdict** | P-63 stamp + shake + meme hit |
| VS-4 | **Shatter → light-sweep** | T-19 + T-20, garbage to premium in 1 s |
| VS-5 | **Versus from f0** | Mode V: left garbage (red frame), right premium (green frame); a diagonal wipe divider animates on f0–8 |
| VS-6 | **Number made of people** | P-59: the hero number assembles from 5,000 dots that were people |
| VS-7 | **Metaphor object** | Gift box / vault / bouncer pops in with squash, already doing its thing |
| VS-8 | **Silhouette strobe / zoom-blur slam** | T-02 / T-03 (§9.1), only if combined with a result |

**House hook visuals** (proven in the reference reels; stack them with a VS device and a result):
| ID | Hook visual | Recipe |
|---|---|---|
| H-1 | **Clone skit** | Locked-off high-angle wide (setup D). Two takes mask-split at x ≈ 540. The second Creator strobes in (T-02) on f1–6. Chunky captions sit under whoever speaks; take changes hide under T-01 |
| H-2 | **Zoom-blur slam selfie** | f0 at 2.5–3× on the eyes → 1.0 by f6 with radial blur (T-03). The first chunky caption flies in; the banner lands |
| H-3 | **Result-first card** | The finished site or animation plays in a rounded card (y 248–820) over the selfie or on the canvas, under the banner, while he says the hook |
| H-5 | **Proof footage** | A phone-filmed monitor showing the revenue or listing (moiré is fine, it reads real), then a currency conversion. Exposure pop (T-08) on the number |
| H-6 | **Hero object in hands** | The brand mark (e.g. the Claude starburst) glowing over his cupped hands on f1, shrinking from oversized to rest in 5 f, out by f21 |
| H-7 | **Arc words** | KT-ARC words orbiting his head on the key phrases |
| H-9 | **Countdown tiles** | N purple tiles rise from below on "N plugins"; the last grows and 3D-flips (4 f) into a teaser card |
| H-10 | **Montage proof** | Push down to the canvas by ~1.7 s, with 3–4 premium site cards popping and carouselling on "aisi, aisi, aisi" |

### 6.4 Result pairs by topic (pick one per reel)
| Topic | Garbage state (red) | Premium / fixed state (green) | Pair pattern |
|---|---|---|---|
| Website design (Reel 1, 5) | Purple-gradient AI-slop site: centred text, 3 identical cards | Dark premium motion site, serif display type, live animation | P-61 |
| Website "alive" (Reel 7) | Site opening on a static photo, 😴 | The same site with a looping video background | P-60 (Mode V) |
| Launch checklist (Reel 3) | A broken launch: missing items flagged red | Every item ticked green, "LIVE 🚀" | P-58 shield/checklist variant |
| App UX (Reel 2) | Crowded icons, a frozen Save spinner | A clean bar, instant update | P-61 on a phone mock |
| Scale (Reel 6) | 5,000 users → the app cracks and goes black | 5,000 users → app smooth, gauge green | P-40 + P-43 |
| Security (Reel 10) | The app as a **gift box** opened by a swarm of red cursors | A vault: shield 7/7, cursors bounce off | P-49 → P-58 |
| AI team / dev team (Reel 4, 8) | One stressed person juggling 6 tasks | 6 agent cards working in parallel, all ✓ | P-44 versus lanes |
| Prompts (Reel 9) | A vague 1-line prompt → generic output | A structured prompt → shipped app | P-61 with prompt cards |

### 6.5 Banner writing (the first thing people read)
**Formula:** `[viewer-pointed setup] + [KEYWORD CHIP] + [≤ 2 emoji]`, ≤ 9 words, and it must match the result pair on screen.

| Template | Example |
|---|---|
| **Versus** (default with a result pair) | "Your Claude website 🤢 vs **MINE** 🔥" |
| **Number** | "**5** users ✅ **5,000** users 💥" |
| **Warning** | "Your Claude app is a **GIFT** for hackers 🎁" |
| **POV outcome** | "POV: your website finally looks **PREMIUM**" |
| **Count + promise** | "**3** Claude skills that kill AI slop" |
| **Skip-this** | "Skip this if you like **BORING** websites 😴" |

- **Sentence case + one CAPS chip.** English is the banner language (Instagram-native); the spoken hook stays Hinglish.
- **Write 3 and pick by the stopper test.** The others go to Trial Reels A/B.
- **Banned:** vague hype ("Game changer!!"), more than 2 emoji, counts that don't match, and claims the reel doesn't prove.

### 6.6 Other hook formulas (still valid, all must show a result by 2 s)
| ID | Formula | Spoken pattern (Hinglish) |
|---|---|---|
| HF-1 | Clone skit / argument | A: confident claim. B: punctures it. A: "abey aisa kyu bol raha hai?" |
| HF-2 | Money claim + proof | "Ek application… 43,000 dollars kama raha hai, INR mein itna" |
| HF-3 | POV / "You found…" + result first | Banner "POV: You found the cheat code for…", with the result playing |
| HF-4 | Reverse psychology | "Aisi website bilkul mat banana, kyunki log paise dena chalu kar denge" |
| HF-5 | Pain point + contrarian agreement | "Kyu bhai, nahi ban rahi na AI se premium website? Banegi bhi nahi. But…" |
| **HF-6** | **Before / after**, which is now the Result-First Roast (default) | "Tumhari website aisi dikhti hai na… aur tum chahte ho aisi dikhe" |
| HF-7 | FOMO / newness | "Naya-naya maal aaya hai market mein…" |
| HF-8 | Time-ask + outcome | "Mujhe 60 seconds de do, main tumhe aisi skill bataunga jisse clients land karoge" |
| HF-9 | "Skip this if…" | Banner "skip this if you don't want your AI website to look PREMIUM" |
| HF-10 | Mock quote of the viewer | "Kya bro, Claude ne banaya hai toh secure hoga bro?" (the Reel 10 hook) |

Add-ons that stack with any formula: the **objection buster** ("agar tumhe ye fake lag raha hai, to ye dekho" + proof), **relatability** ("mujhe bhi bhai"), and the **mid-hook pivot** ("But…" after ≤ 0.3 s of silence).

### 6.7 Hook sound
- The hook is **dry** (no bed). Every hook SFX comes from a different file.
- There's one meme hit maximum in the hook, on the punchline gap.
- Tone switch `mock` → `awe` is marked by sound: the meme hit is followed by a riser, then a cinematic hit.

### 6.8 CTA formula (matches `POSTING_ORDER.md`)
1. **Early loop** (5–12 s, `CAP-CHUNKY`): "reel end tak dekhna… saare prompts DM mein".
2. **End CTA:** Creator pops back (G-2) for "comment kar do **KEYWORD**".
   - **P-68 Key-cap CTA:** the KEYWORD on a 3D yellow keyboard key that presses down (8 f) with a click, then the PDF card (its real title) flies into a DM bubble (14 f).
   - The keyword is on screen ≥ 1.5 s.
3. **Community chip** "MotionOS Studio · link in bio" pops in the top band (P-29).
4. **"Peace out"**, then a hard end ≤ 6 f after the last word (T-16). The CTA is tone `cta`: no meme SFX.

---

## §7 Structure devices

### 7.1 Step / item markers (one style per reel, at **every** item)
| ID | Marker | Recipe |
|---|---|---|
| SM-1 | Numbered chapter badge | Violet gradient badge 285×350, radius 30, white Anton numeral, lavender glow. Rises from behind the panel's top edge during T-04 (f+4 → f+10), holds ~1.2 s at y 419–769, then drifts up 20 px and fades over 4 f as the first card arrives |
| SM-2 | "N Step" arc | A thin black arc enters from the left edge with a dot on it; a bold italic numeral + "Step" rotates in along the arc with motion blur over ~10 f. Holds 0.4–0.7 s, then hard-cuts to the tool card on the tool name |
| SM-3 | White number circle | White Ø 150, soft shadow, black italic numeral; slides up from the panel edge with blur over 12 f |
| SM-4 | Number circles row | 3 lavender circles in the caption band ("teen cheezein" in a selfie reel), fade + blur-in over 5 f |
| SM-5 | Countdown tiles | N tiles rise; the active tile lights **yellow** at each item (spine) |
| SM-6 | Serif tool title | The title is the marker |
| SM-7 | KT step card | KT-RED / "LAST STEP" |
| **SM-8** | **Shield segments** (security listicles) | An N-segment shield in the top-left badge position; each item lights its segment green with a check (P-58) |
| **SM-9** | **Progress rail** | A thin yellow rail on the canvas top (y 118) with N notches; the active notch pops; shows how much is left |

### 7.2 Item ritual (identical for every item)
1. G-1 panel drop (or T-18 zoom-through into the Data Stage) 0–8 f before the ordinal word. **List cue SFX** (the one allowed repeat).
2. Marker 0.6–1.2 s.
3. Title + card or Data Theatre pattern on the tool or risk name (±1 f).
4. 2–4 beats of evolving visuals, one per noun, every ≤ 1.5 s.
5. **Pop-back (G-2)** to Creator for the opinion, aside or mock line, with a Z-1 or Z-2.
6. Optional reaction bubble (G-4) when the visual must stay full screen while he reacts.
7. Optional **aside cut:** a joke or aside ("freebie hai", "dimaag chalana hi nahi hai") gets its own 1–1.2 s full-frame shot between items.

If an item exits without a pop-back, pick one exit style for the whole reel (T-01 orange leak or a plain hard cut) and keep it. If a promise says the full prompt comes "at the end", **show it** at the end as P-08 with a 1.5 s hold.

### 7.3 Open loops
- Count loop (markers count up to N).
- "Last one is the most dangerous / best" loop (Reel 10: "last wala sabse khatarnak").
- Deliverable loop (DM PDF).
- All loops are paid off on screen.

### 7.4 Infotainment rhythm
- **Every 6–10 s, an entertainment beat:** a roast (`mock`), skit line, reaction bubble, freeze-frame or sticker. It must also carry information; no filler jokes.
- **Never two comedy beats back to back.** Between them comes at least one `explain` / `win` beat.
- **Energy curve:** hook (max) → item 1 (high) → middle items (steady, alternate the worlds) → the last item (escalate: Data Stage or `S-DARK`, a bigger hero move) → CTA (clean, confident).

---

## §8 B-roll system

### 8.1 Families
| ID | Family | Look | Motion signature |
|---|---|---|---|
| B-1 | Screen-recording card | A real site or app capture in a rounded card (radius 40; 28–55 seen). Dark sites: no border. Light sites: 1 px `#E3E3E3` + card shadow | Grows from ~20% at its centre (10–12 f, ease-out) or rises from behind the panel. Inside: scroll, cursor, hover, or a slow push 1.00 → 1.06 |
| B-2 | Screenshot / doc card | GitHub README, docs page, Claude chat, extension store, audit doc | Scale-in from 95%, push-in or Ken Burns; content swaps every ~1 s with a slide or wipe |
| B-3 | Prompt card | "Prompt:" header (violet gradient, or red `#C0262D`) + a white card radius 24–55 with Jost 500 black text, or a Claude input-box replica | Header types 1 letter / 2 f; text blur-to-sharp (6 f) or types in. On "Claude" the Claude mark pops above and the text wraps into a Claude input card |
| B-4 | Chip / command | Yellow or white chips: commands, shortcuts, domains, file names | 5 f overshoot pop (§5.11). Below the card or in the top band |
| B-5 | Logo / wordmark | Real brand marks in brand colours | Fade + scale 60 → 100% (5 f), small overshoot. A stack **replaces** the previous logo (crossfade or push down); rows pop 1 icon every 1–2 f |
| B-6 | Silhouette illustration | Flat black B&W vector people (creator at a desk, stressed man with "?", agency team) on the canvas | Rises from behind the panel (6 f); swaps by vertical push (14 f); fades grey → black |
| B-7 | Kinetic-type card | KT-RED / TYPE / PIXEL / ACRONYM / stacked words | §5.7 |
| B-8 | Proof / data card | Phone-filmed revenue screen, currency conversion, counters, metric card (10/100 → 40/100) | Counter roll, exposure pop, card scale from a point (8 f) |
| B-9 | Flow diagram | Dot grid (4 → 40 dots), chips, dotted orange connectors, envelope; sitemap tree | Dots multiply, lines draw, chips slide |
| B-10 | Icon pop | DOCX/PDF icon, emoji, Apple-style glyphs | Starts small near his shoulder, scales up and moves to rest in ~6 f; exits shrink + fade in 2 f |
| B-11 | UI mock | IG comment / share flow on Creator's account, with a cursor | Full screen, cursor-driven, ≤ 3 s |
| **B-12** | **Data Theatre** | Procedural people, requests, packets, gauges, shields on the Data Stage. Thousands of seeded elements, synced to words |
| **B-13** | **Metaphor machine** | A physical metaphor that *does the mechanism*: book index, bouncer gate, gift box, vault, data wall, shape sorter |
| **B-14** | **Comedy layer** | Marker notes, stamps, stickers, freeze-frames, crash zooms. `mock` tone only |
| **B-15** | **Device mock (built live)** | Browser window and phone frame drawn in the renderer, so the content inside can crash, crack, scroll or transform |

**Family rules:**
- ≥ 5 families per 60 s.
- The same family runs no more than ~8 s straight.
- B-12 / B-13 are mandatory for every number, comparison or risk (M8).
- B-14 only on `mock` beats.
- B-1 / B-2 / B-3 always sit in a rounded card. B-5 / B-6 / B-7 / B-9 sit directly on the canvas.

### 8.2 Staging choreography
Lead −2 f → land ≤ 5 f → read 0.6–1.5 s (something moves inside) → **evolve** (add, split, zoom-through) or **swap**. Evolve inside an item; swap between items.

### 8.3 Pattern specs
**House patterns (the explainer workhorses, measured from the reference reels)**
| ID | Pattern | Family | What's on screen | Motion |
|---|---|---|---|---|
| P-01 | **Site card** | B-1 | One real site recording, full card width | Grow 20 → 100% (12 f), then scroll |
| P-02 | **Site montage** | B-1 | 3–4 small site cards → 2×2 grid | Pops 2–3 f each; horizontal carousel swap (5 f) |
| P-03 | **Before → after** | B-1 | Bad site small (bottom-right), good site big over it | 10 f grow, then a 30 f grow + fade |
| P-04 | **Pair split** | B-1/B-2 | One tile splits into two labelled tiles ("Start frame" / "End frame") | Re-layout move, 8 f |
| P-05 | **Tool title + card** | B-1 + label | Serif title on top, card below | Title blur-types (10 f); the card grows on the tool name |
| P-06 | **Feature list beside card** | B-1 + label | The card slides right (half off-frame); big stacked words on the left, one per spoken feature | Card slide 10–15 f; lines type in 4–8 f each |
| P-07 | **Edge labels** | B-1/B-2 + label | A giant white noun on the card's bottom edge, swapped per noun | Fade + 6 f rise; hard swap |
| P-08 | **Prompt card** | B-3 | "Prompt:" + the prompt text (readable, or teaser-blurred only if the full prompt is delivered) | Header typewriter; text blur-to-sharp 6 f |
| P-09 | **Prompt → Claude** | B-3 + B-5 | Raw prompt text slides up; on "Claude" the mark pops and the text wraps into a Claude input card | Slide-up 12 f; logo scale 6 f |
| P-10 | **Command chip** | B-4 | `/loop`, `Ctrl+C` / `Ctrl+V`, short `npx …` | 5 f overshoot pop, on the verb |
| P-11 | **Domain chip** | B-4 | Blue pill "yourbrand.com" → "rahul@yourbrand.com" over a silhouette | Rises with blur 6 f; text morph |
| P-12 | **Logo stack** | B-5 | A tech stack named one by one (Next.js → Supabase → Stripe) | Each replaces the last: crossfade 3 f or push down |
| P-13 | **Icon row** | B-5 | Platform icons in a row (FB, IG, In, X, YT) | 1 icon per 1–2 f, slide from the left |
| P-14 | **Silhouette scene** | B-6 | A person doing the line ("creators", "agencies", "bhool jaate hain" + "?") | Rise 6 f; "?" draws 10 f; vertical push swap |
| P-15 | **Imperative card** | B-7 | KT-RED 2–4 lines | Lines fly in from the left, 4 f each |
| P-16 | **Typewriter headline** | B-7 | KT-TYPE sentence with ghost letters, + a silhouette | 1 char / f; the silhouette slides in from the right |
| P-17 | **Stacked feature words** | B-7 | Big black words, one per spoken item | Type in per word |
| P-18 | **Acronym build** | B-7 | KT-ACRONYM letters per syllable + expansion | Hard-on per syllable; 30 f wipe |
| P-19 | **Explainer slide** | B-2 | Dark navy slide "STEP n" + headline (white/violet) + thumbnails or hand-drawn arrows | Pop from a point 13 f; an in-slide push moves to the next slide |
| P-20 | **Counter** | B-8 | Green ₹/$ slot-machine roll to the real value + helper | Roll 30 f |
| P-21 | **Proof footage** | B-8 | Phone-filmed screen of revenue or results + currency conversion | Slow drift; T-08 on the number |
| P-22 | **Metric before/after** | B-8 | Small card "10/100 → 40/100", red → green icons | Scale from a point 8 f, top-right inset |
| P-23 | **Flow diagram** | B-9 | Source logo → dots multiply → chips → envelope | Dots double every 3 f; connectors draw 10 f |
| P-24 | **Sitemap / tree** | B-9 | A website map diagram | Fade/slide up 6 f |
| P-25 | **Chip grid** | B-4 | 6–9 pastel category chips ("SEO, Technical, Content…") under a title | Fly in from off-frame with motion blur, 6 f |
| P-26 | **Number badge** | SM-1 | Violet chapter badge | §7.1 |
| P-27 | **Doc / PDF pop** | B-10 | A DOCX/PDF icon or a 1-page doc card with the reel's real PDF title | Grow from the shoulder 6 f; exit 2 f |
| P-28 | **Emoji pop** | B-10 | 🔥 (CTA emoji keyword) | Scale 30 → 110 → 100% over 4 f, 0.2 s before the word |
| P-29 | **Community chip** | B-4 | `paper` chip "MotionOS Studio · link in bio" in the top band | 5 f overshoot pop; holds to the end |
| P-30 | **CTA UI mock** | B-11 | IG comment or share flow on Creator's account | Cursor 10 f per step |
| P-31 | **Tile flip teaser** | SM-5 | The last tile 3D-flips (Y axis, 4 f) into a teaser card | 4 f flip |
| P-32 | **Top inset proof** | Mode I | A card in the top band over full frame | T-13 smear in/out, or slide-down 8 f |
| P-33 | **Canvas card** | Mode K | A card centred on the canvas (never over his blurred talking head) | T-11, 6 f |
| P-34 | **Terminal glimpse** | B-2 | ≤ 1.5 s terminal/IDE with a label ("Claude khud code likh raha hai") | Fade 4 f |
| P-35 | **Live preview** | B-1 | The finished page, slightly 3D-tilted, scrolling: the payoff proof | Push-in or rotate 2° |

New in this edition:

**Data Theatre (B-12, `D` mode)**
| ID | Pattern | What's on screen | Motion (30 fps) |
|---|---|---|---|
| **P-40** | **Crowd counter** | Countable people: 5 avatar circles on a sofa row → 5,000 dots. A counter chip shows the real number from speech | Avatars pop 4 f stagger. Counter slot-rolls 24 f. The new dots pour in from the top as a stream (seeded, 120 dots/frame) |
| **P-41** | **Zoom-out reveal** ("powers of ten") | Start tight on 5 people, then pull the camera out ×12 to reveal they're 5 dots inside a sea of 5,000 | 20 f ease-in-out pull-out; dots fade in by distance ring |
| **P-42** | **Load gauge** | A semicircle gauge (green → yellow → red zones), needle, label "SERVER" | The needle follows the crowd count (lag 4 f), shivers ±2° in the red, sparks at max |
| **P-43** | **Crash device** | A phone/browser mock running the app: rows lag, a spinner appears, the screen glitches, **SVG cracks draw** from an impact point, then the screen goes black + 💀 | Lag 10 f → glitch 6 f → cracks 8 f → black. Z-5 shake. App states are drawn, never a fake error dump |
| **P-44** | **Versus lanes** | Two identical frames side by side (or stacked), same axes: left the garbage/small case, right the premium/large case | Both animate in sync; the loser desaturates 40% + red frame, the winner gets a green frame + glow |
| **P-45** | **Overflow bars** | Two bars on the same axis; one overflows the frame and breaks through the top edge | Grow 18 f; overflow pushes the frame (Z-5) |
| **P-46** | **Book index** (database index) | Left: a scanner reads table rows one by one (slow, timer ticking, rows flash). Right: an index tab jumps straight to row #4217 (a laser line) | Left scan 1 row / f; right jump 6 f + ✓ |
| **P-47** | **Cache fan-out** | One source card is built once ("ek baar bana ke save"), then copies fly to 12 user avatars instantly. Contrast: the database chimney stays idle | Build 12 f; fan-out copies 2 f stagger |
| **P-48** | **Load-test swarm** | Claude sends thousands of ghost users (translucent cyan) at a staging app; the break point is marked with a red marker circle "yahan tootega" | Swarm builds 30 f; the crack pulses at the weak component |
| **P-49** | **Gift-box exploit** | The app as a yellow gift box with an ink bow and label "your app"; the lid pops off and a swarm of **red cursors** climbs in | Lid pop 6 f (squash); cursors stream 40 f with seeded jitter |
| **P-50** | **Bouncer gate** (rate limiting) | Requests (cyan pellets) stream at a gate; a steady few pass, the spam flood bounces back red; a "spam ❌" stamp | Steady pass every 6 f; bounces with spring |
| **P-51** | **Shape sorter** (input validation) | Inputs fall toward a server slot; correct shapes pass with green ✓, wrong ones are rejected and fall away with red ✕ | Fall with gravity 14 f; reject bounce 8 f |
| **P-52** | **Key hunt** (hidden API keys) | A magnifier scans illegible code-shaped lines and finds a glowing 🔑 "API KEY"; the old key crumbles, a new one is minted ("delete nahi, badlo") | Scan 20 f; find pulse; crumble 10 f; mint 8 f |
| **P-53** | **Ghost package** | A row of package boxes, one translucent and flickering, "doesn't exist 👻"; one cracked, "kamzor" | Ghost flicker 2 f on/off; crack 6 f |
| **P-54** | **Scary → simple error** | A wall of blurred, illegible red error texture morphs into one friendly line ("Kuch galat ho gaya, dobara try karo") | Blur-to-card morph 12 f |
| **P-55** | **Upload filter** | Files drop at a gate: a ".exe" is bounced, an oversized file is squeezed and rejected, a valid image passes | 3 files, 10 f each |
| **P-56** | **Data wall** (access control / RLS) | User A's cursor drags toward User B's folder; a red laser wall slams up; stamp "BLOCKED"; a green "RLS ON" chip | Drag 14 f, wall 4 f + Z-5, stamp 5 f |
| **P-57** | **X-ray scan** | A scan line passes down the app mock; vulnerabilities light up as red holes with labels | Scan 24 f; holes pop 3 f stagger |
| **P-58** | **Shield meter** (security spine) | An N-segment shield; each check lights a segment green with ✓; the final state "7/7 SECURE" | 6 f per segment; full shield glints |
| **P-59** | **Hero number from people** | The giant number ("5,000") assembles from the crowd's dots, which fly into the glyph shapes | 24 f gather, then Z-5 slam |
| **P-60** | **Static vs alive** (Mode V) | Left: site with a static photo, 😴, grey. Right: the same site with a moving video background, sparkles, green chip "ALIVE" | Left frozen; right loops |

**Result & Comedy (B-14, B-15)**
| ID | Pattern | What | Motion |
|---|---|---|---|
| **P-61** | **Garbage → premium** | The hook core: garbage card → shatter (T-19) → light-sweep premium (T-20) | §6.2 |
| **P-62** | **Flaw markup** | Red marker circles + Permanent Marker notes on the real flaws | Circle 8 f, note 10 f, 6 f stagger |
| **P-63** | **Stamp verdict** | Rubber-stamp text ("AI SLOP", "BEKAAR", "BLOCKED", "SECURE ✓") in `alarm` or `volt`, 6 px rough-edge border | Scale 1.7 → 1 in 5 f, rotate −12°, Z-5 shake, ink splatter 3 dots |
| **P-64** | **Freeze-frame roast** | Creator's footage freezes (desaturated 60%, 1.25× crash zoom), a pink marker circle + arrow + note ("ye tum ho 😭"), a pause icon "⏸" top-left | Freeze on the word, 18–30 f hold, unfreeze with a Z-3 |
| **P-65** | **Meme sticker** | A STICKER (§5.10) near the subject | Pop 6 f, wobble 12 f |
| **P-66** | **Depth hero + orbit** | The premium result behind Creator (G-5); 3–4 feature chips orbit around it on an ellipse | Orbit 1 rev / 4 s; chips scale by depth |
| **P-67** | **Banner flip** | T-21 on the banner chip | 4 f |
| **P-68** | **Key-cap CTA** | The keyword on a 3D yellow keyboard key; press 8 f; the PDF card flies into a DM bubble | Press, then a 14 f arc flight |

### 8.4 Line → pattern lookup (v2 additions first)
| Line type | Primary | Alternates |
|---|---|---|
| "Ye tumhari website / app hai" (roast of the viewer's result) | P-61 + P-62 + P-63 | P-64 |
| "Aur ye maine banayi" (premium result) | P-61 reveal + P-66 | P-35 live preview |
| "N log aaye / users / traffic" | P-40 Crowd counter | P-41, P-59 |
| "App phat jayega / slow / crash" | P-43 Crash device + P-42 | P-45 |
| Small vs big comparison | P-44 Versus lanes | P-45, P-60 |
| How a fix works (index, cache, queue) | Metaphor machine P-46 / P-47 | P-23 flow |
| "Test kar lo / load test" | P-48 Load-test swarm | P-42 |
| "Hackers ke liye gift" / app is unsafe | P-49 Gift-box exploit | P-57 |
| Rate limiting / spam | P-50 Bouncer gate | — |
| Input validation | P-51 Shape sorter | — |
| Secrets / API keys | P-52 Key hunt | — |
| Packages / dependencies | P-53 Ghost package | — |
| Error messages | P-54 Scary → simple | — |
| File uploads | P-55 Upload filter | — |
| "Ek user doosre ka data" / RLS | P-56 Data wall | — |
| Security checklist progress | P-58 Shield meter (SM-8) | SM-9 |
| A mocking aside about the viewer | P-64 Freeze-frame or P-65 sticker + Z-2 | Mode R bubble |
| Static vs living site | P-60 | P-44 |
| Showing a result / "aisi website" | P-01 Site card | P-02, P-35 |
| Tool / library / plugin name | P-05 Tool title + card (with marker) | P-12, P-07 |
| Features of a tool ("animations, hero sections…") | P-06 Feature list beside card | P-07, P-17 |
| "Ye prompt daal do" | P-08 Prompt card | P-09 |
| "Claude mein bhej do" | P-09 Prompt → Claude | P-05 |
| A command, shortcut or action verb ("copy, paste", "/loop") | P-10 Command chip | P-15 |
| Tech stack | P-12 Logo stack | P-13 |
| Platforms / "har jagah" | P-13 Icon row | — |
| People / clients / agencies / a struggle | P-14 Silhouette scene | P-16 |
| "Don't do this / galti mat karna" | P-15 Imperative card (KT-RED) | Mode F + red `CAP-GLOW` |
| A process sentence ("website banana chalu kar do") | P-16 Typewriter headline | P-19 |
| An acronym or new term | P-18 Acronym build | `CAP-GLOW` + serif helper |
| How it works (frames, pipeline) | P-19 Explainer slide | P-23, P-24 |
| Money / revenue | P-20 Counter | P-21 |
| Proof it's real ("fake lag raha hai?") | P-21 Proof footage | P-35 |
| Better results / metrics | P-22 Metric before/after | P-20 |
| Leads / outreach / automation flow | P-23 Flow diagram | P-11 |
| A category list ("audit mein ye sab") | P-25 Chip grid | P-17 |
| Concept word to remember | `CAP-GLOW` + serif helper in Mode F | P-18 |
| "Document / PDF bhej dunga" | P-27 Doc pop | P-29 |
| Comment CTA | P-68 Key-cap CTA | P-30 |

### 8.5 Data Theatre rules (D5: make it so they *see* it)
1. **Quantity is countable.** 5 means five avatars and 5,000 means five thousand dots. Never a lone number on a card.
2. **Same axes.** A comparison uses identical frames and scales (P-44); only the variable changes.
3. **Show the mechanism, not the jargon.** An index is a book index, caching is make-once-serve-many, rate limiting is a bouncer. The label names it once (`CAP-GLOW` violet), then the machine runs.
4. **State change = colour change.** OK is cyan or green, stressed is yellow, broken is red. The change lands on the spoken word ("aaye" / "phat jayega").
5. **One idea per screen.** Max 3 animated groups at once. Everything else is dimmed 40%.
6. **Sync to speech:** counts finish on the number word, crashes land on the crash word, fixes land on the fix verb.
7. **Real or script-stated numbers only** (M14). Units and labels in plain Hinglish/English ("users", "requests").
8. **Escalate.** The last item gets the biggest data move (hero number, full-screen stage, reaction bubble).

### 8.6 Density and variety
- An event every 0.8–1.5 s.
- ≥ 10 different patterns and ≥ 5 families per 60 s.
- The same pattern at most 2 beats in a row; the list ritual is the exception.

### 8.7 Asset rules
- **Real captures** for tools, sites and prompts: record the sites and tools yourself (1080-wide crops at 2×, 30 fps, smooth scroll), or use supplied files.
- **Prompts:** the exact prompt from the script or its PDF.
- **Result mocks** (garbage/premium sites, phone apps) may be built live in the renderer as **generic, unbranded** designs, or captured from Creator's actual builds (preferred for premium).
- **Logos:** real marks in brand colours. If one is missing, use a text wordmark in Inter Tight 800. Never redraw a logo.
- **Silhouettes (B-6):** flat black people on transparency, no baked-in text; labels are live text.
- No AI stock scenes. Blur or crop private data (emails, API keys, account numbers) in every capture.
- **The non-coder test:** would a viewer who has never coded understand what this screen proves, from its label or caption alone, in 1 s? Real UIs, sites, Claude chats, prompts and short commands in chips pass. GitHub pages pass only as labelled proof. Code blocks or terminal output held longer than 1.5 s, or shown without a label, fail.

---

## §9 Transition system (`T`)

### 9.1 Library (30 fps)
Transitions are the punctuation of the reel. An orange leak is a full stop between acts, a panel drop opens a new step, a pop-back brings Creator back to say what he thinks, and a jump cut is a breath that was removed.

**The house transitions (measured from the reference reels):**
| ID | Transition | Frames | Recipe | SFX role |
|---|---|---|---|---|
| **T-01** | **Orange leak flash** (signature) | 6–7 | **f1:** the outgoing shot is graded hot; a yellow-white flare band (`#FCEF2D`) enters from the **left edge** over an orange wash. **f2–3:** full orange wash (`#F94F00` core, darks lifted to `#8C1700`; frame mean ≈ `#DD591E`). **The hard cut sits on f4**, inside the wash. **f4–6:** the same wash over the incoming shot, decaying; for split → full it can push straight into a T-04. **f7:** clean. Screen/add blend; the cut is never visible raw | Flash hit or whoosh, optional (silent flashes are fine) |
| **T-02** | **Silhouette strobe** (frame 0) | 6–8 | A flat white `#FCFCFC` matte of Creator (or the arriving clone) on f1, f3, f5; real footage on f2, f4, f6. The hook keyword alternates white/yellow in sync. f0 may be the empty set ("teleport in"); the first caption on f7 | Opening hit at ~0.2 s |
| **T-03** | **Zoom-blur slam** (open) | 6–7 | f0 at 2.5–3× on the eyes/mouth with radial zoom blur → 1.0 by f6, ease-out. The banner lands f3–6; the first caption slides in f2–5; a B-roll card fades up | Zoom whoosh at 0.00 |
| **T-04** | **Panel drop** (full → split) | 6–8 (+ card 8–12) | f0: the full-frame shot. f1–6: the whole frame scales to panel width and **slides down** with heavy vertical motion blur; its top corners round to 64 px; the canvas is revealed above. Lands at panel top y 1135 with a 10 px overshoot on f6–7. Banner and captions blur out on f0–2. **The card rises from behind the panel or grows from ~20%** over f+4…f+12, ease-out; a marker (SM-1) may rise with it | Whoosh starting **8 f before** the cut |
| **T-05** | **Warm leak lift** (full → split, long) | 15 | f0–1 a red radial leak sweeping as an arc from the top-left (`#FC623C`). f2–3 orange-yellow (`#FCC051`). f5–6 deep red (`#EA342B`). f7–8 cream white-out (`#FCE4AB`): **the layout cut is here, at the peak**. f9 the panel slides up from below with motion blur. f10–13 a residual tint while the marker enters. f14 clean | Soft whoosh |
| **T-06** | **Return to full** (split → full) | 0 or 4–8 | A hard cut on a sentence start, or the panel's top edge rises 1135 → 0 over 4 f (8 f with vertical blur) while the card slides up and out. (T-17 pop-back is the default return; this is the quieter one) | None / whoosh |
| **T-07** | **Invert flicker** (pattern interrupt) | 4–6 | A whole-frame negative on N, N+2, N+4 and normal on N+1, N+3, N+5; the real cut sits on N+2. Variant **invert-to-white**: 4 f of the incoming shot inverted and washed toward white | Short glitch |
| **T-08** | **Exposure pop** (no cut) | 2 | The frame lifts to near-white and desaturates for 2 f, on a number or claim word | Flash / shutter tick |
| **T-09** | **Jump cut** (default) | 0 | The pause removed. The cut sits within ±1 f of the word gap; the next word starts 0–150 ms after. Captions clear 1–2 f. Zooms follow §10.2 | None |
| **T-10** | **Whip blur jump** | 3–4 per side | Strong directional motion blur on both sides of a jump cut, reading as a camera whip | Swish |
| **T-11** | **Card grow / pop-from-point** | 10–13 | A card starts at 4–20% scale at its own centre (or a point) and grows to 100%, ease-out `(0.22,1,0.36,1)`, no blur. In Mode K the canvas replaces the footage at the same time (never a blur of his frame) | Soft pop |
| **T-12** | **Card push swap** | 4–5 out + 6–8 in | The old card pushes up and out with vertical blur; the new card rises from behind the speaker panel (masked by it) with a small overshoot | Swish + pop |
| **T-13** | **Smear inset** | 4–5 | A horizontal motion-blur streak band in the top band resolves into the card; the exit is the reverse | Swish |
| **T-14** | **Shrink-zoom to dark** (payoff item) | 6 | The full frame zoom-blurs up ~10% (2 f), then shrinks into the panel over the **black** grid canvas (4 f). The card then grows slowly from ~15% over 18 f | Deep whoosh |
| **T-15** | **Haze cut** (hook only) | 1 | One frame of blur + white lift (+12 luma, −30% contrast) between two jump-cut hook shots | None |
| **T-16** | **Hard end** | 0 | Cut on the last syllable (≤ 6 f after). No fade, no long black | None (optional ≤ 1.0 s button) |

New in this edition:

| ID | Transition | Frames | Recipe | SFX role |
|---|---|---|---|---|
| **T-17** | **Pop-back** (G-2) | 7 | Panel → full frame: scale 0.92 → 1.06 → 1.00, vertical motion blur f1–3. The canvas/stage collapses behind. The landing frame takes a Z-1 punch on the next word | Swoosh-up (pool) |
| **T-18** | **Zoom-through** | 10–12 | The camera dives into an object (phone screen, Creator's pointing hand, a card node): 1 → 6× with radial blur on the last 4 f. The object's fill becomes the next scene's background (e.g. phone screen → Data Stage) | Zoom whoosh (pool) |
| **T-19** | **Shatter** (garbage exit) | 10–14 | The card freezes, a white impact flash (1 f), then 9–14 Voronoi-style shards with seeded velocity, spin ±40° and gravity fall off-frame. Their edges catch a 2 px white highlight | Glass/impact + (if `mock`) a meme hit before it |
| **T-20** | **Light-sweep reveal** (premium entry) | 12–16 | An orange (`blaze`) light bar, 120 px wide with a white core, sweeps L → R at 15°. Behind it the premium card resolves from blur 20 → 0 and rotateY 18° → 0. A bloom flare on exit | Riser into a cinematic hit |
| **T-21** | **Banner flip** | 4 | The banner chip rotates on the X axis 0 → 90° (2 f), swaps text and colour, 90 → 0 (2 f). The slab does a 1.04 bump | Shine (pool) |
| **T-22** | **Freeze-frame** | 0 + hold | The footage freezes on the punch word, desaturates 60% over 3 f, Z-2 crash 1.25×; P-64 marks draw; it unfreezes with Z-3 | Record scratch or sudden stop (meme, once) |
| **T-23** | **Slide-aside** (G-3) | 8 | The panel narrows to x 0–450 with rounded right corners; the B-roll grows into x 470–1060 | Soft swish |
| **T-24** | **Bubble shrink / grow** (G-4) | 8 | Footage → a Ø 300 circle at bottom-left (elastic overshoot 1.15); the reverse returns to full frame | Pop (shrink) / swoosh (grow) |

### 9.2 Grammar
| Boundary | Use | Never |
|---|---|---|
| Frame 0 | Banner slab settle + T-02 / T-03 / VS devices | A static or fade-in frame |
| Garbage → premium (hook) | **T-19 → T-20** (+ T-21 on the banner) | Crossfade, hard cut |
| Hook → item 1 | T-04 (canvas) or **T-18** (into the Data Stage) | — |
| New item | T-04 / T-18 + marker on the ordinal word | Hard cut |
| Item → Creator (opinion, mock) | **T-17 Pop-back** (default) or T-01 | — |
| Creator → full-screen graphic while he keeps talking | T-24 bubble | — |
| Comparison | T-23 slide-aside or Mode V wipe | — |
| Mock punchline on Creator | T-22 freeze (≤ 2 per reel) or Z-2 | — |
| Card → card | T-11 / T-12 / evolve | A still jump |
| Number lands | Z-5 shake + T-08 | — |
| Last word | T-16 | Black tail |

### 9.3 Transition map (part of the plan)
```yaml
transitions:
  - {t: 0.00, id: VS-1+G-5, to: HOOK, sfx: "ABSTRACT_HIT_Sub_Bass_07.wav"}
  - {t: 2.10, id: T-19, from: garbage, to: premium, sfx: "Zoom In Riser.wav"}
  - {t: 2.60, id: T-20, sfx: "cinematic-hits…/Cinematic Hit 4.wav"}
  - {t: 2.62, id: T-21, sfx: "short-shine…/Short Shine 2.wav"}
  - {t: 7.40, id: T-18, from: HOOK, to: D, note: "on 'Pehla'", sfx: "zoom-2025-05-09…/Zoom 2.wav"}
  - {t: 14.2, id: T-17, from: D, to: F, sfx: "swoosh…/Swoosh 06.wav"}
```

### 9.4 Budget (per 60 s)
- T-01 ≤ 4 (it was the reference reels' workhorse; prefer T-17 for returns to Creator).
- T-04 / T-18 one per item.
- T-19 / T-20 once (hook), plus once more only for a payoff.
- T-22 ≤ 2. T-07 ≤ 1. T-24 ≤ 3.
- **The same transition never 3× in a row** (except the item-entry ritual).
- Cuts are within ±1 f of word boundaries; audio is never offset.

---

## §10 Motion tokens, zoom system, layers, finishing

### 10.1 Motion tokens (30 fps)
| Token | Value |
|---|---|
| Beat lead | 2 f before the onset |
| Squash-pop (chunky keyword, stickers) | Scale y 0.7 → 1.15 → 1, x 1.2 → 0.95 → 1, 5–6 f |
| Elastic overshoot (bubble, badges) | ease `cubic-bezier(0.34, 1.56, 0.64, 1)`, 8 f |
| Entries | `cubic-bezier(0.22, 1, 0.36, 1)` (expo-out) |
| Exits | `cubic-bezier(0.64, 0, 0.78, 0)`, 4–5 f |
| Marker circle draw | 8 f, overshoot the start by 15° |
| Typewriter | 1 letter / f, blur 6 → 0 |
| Counter | 18–30 f ease-out, or a slot roll |
| Stamp | Scale 1.7 → 1 in 5 f, rotate −12°, then Z-5 |
| Shake (Z-5) | ±10 px, 6 f, seeded, decaying |
| Orbit | 1 rev / 4 s, ellipse 0.35 aspect, chips scale 0.8–1.1 by depth |
| Crowd pour | Seeded positions, 120 elements / f, each with an 8 f fall |
| Word append (captions) | Hard 1-frame on, no scale |
| Caption clear | 1–2 f blank between blocks and on every cut |
| First-caption fly-in | From below: y +500 → 0 over 7 f, ease-out, echo trails. Or from the left: 4 f with horizontal blur |
| Header typewriter | 1 letter / 2 f, each letter blur 6 px → 0 and 30% → 100% |
| Smear-in | 1 f horizontal motion blur, sharp on the next frame, then a 3% scale drift |
| Serif helper | Fades in 4 f after the main word completes |
| Blur-in (subs, labels) | Blur 8 px → 0 + fade: 2 f (subs) / 6 f with a 6 px rise (labels) |
| Card grow | 20% → 100%, 10–12 f, expo-out |
| Chip pop | 25 → 100 → 150 → 120 → 100%, 5 f |
| Icon pop | 30 → 110 → 100%, 4 f |
| Panel drop | 6–8 f, ease-out, vertical motion blur, 10 px overshoot |
| Badge rise | From behind the panel edge, 6 f; drift up 20 px + fade 4 f on exit |
| 3D flip | Y axis, 4 f, edge-on at f2 |
| Hold | Titles ≥ 10 f after complete; text ≥ 0.25 s / word |
| Exits | Hard off on cuts (default); 2–4 f blur-out otherwise |

### 10.2 Zoom system (`Z`): snappy and dynamic, always on meaning
| ID | Zoom | Recipe | Tone / use |
|---|---|---|---|
| **Z-1** | **Snap punch-in** | 1.00 → 1.22 (selfie) / 1.35 (tripod) in **3 f**, motion blur on f1–2, hold until the next cut | `hype` / `win` emphasis word |
| **Z-2** | **Crash zoom** | 1.00 → 1.7 toward the eyes in **4 f** + rotation ±3°, hold 8–20 f; optional T-22 freeze | `mock` reaction, ≤ 2 per reel |
| **Z-3** | **Snap pull-out** | 1.35 → 1.00 in 4 f | Reveal a graphic beside him, unfreeze |
| **Z-4** | **Push drift** | 1.00 → 1.06 over the beat | `awe`, premium reveal, a calm explanation |
| **Z-5** | **Impact shake** | ±10 px 6 f + a 1.03 bump | Stamps, hero numbers, crashes, walls |
| **Z-6** | **Zoom-through** | = T-18 | World changes |
| **Z-7** | **Rotation snap** | 0 → −3…−4° in 3 f, reset at the next cut | `mock` tilt ("ye tumhari website…") |

**Zoom rules:**
- In Mode F, a zoom event every **2.5–5 s**.
- **Never the same Z twice in a row.**
- Zoom on meaning (emphasis, roast, reveal), not on every cut. Selfie jump cuts alternate: plain, then Z-1, then plain, then Z-7…
- Zooms never push the face out of the safe frame or under the banner.
- **Tripod footage is never static:** between zoom events, alternate punch-in/out across jump cuts or run a slow Ken Burns (§3.2 `F`).
- **Inside the panel** the footage is a reframe of the same take (scale 1.0–1.9×), centred so that head top = panel top + 60…110.
- **Cards in `S` / `K`** stay alive with a slow push 1.00 → 1.06 or a scroll.

### 10.3 Layer order (back to front)
1. Background (canvas / night stage / footage)
2. Glow
3. Card(s) and Data Theatre
4. **Creator matte (depth sandwich)** *or* the speaker panel
5. Labels and stacked words
6. Markers and badges
7. `CAP-SUB`
8. `CAP-GLOW` / `CAP-CHUNKY`
9. Comedy layer (marker notes, stamps, stickers)
10. Banner
11. Light passes (T-01, T-20 sweep, T-08)

### 10.4 Finishing
- No grain, no vignette. Glow only on Data Stage hero elements, `CAP-GLOW`, badges and the T-20 sweep.
- Footage is not regraded; only exposure and white balance are matched between setups.
- Card radius 24–55 (default 40). Hard ink shadows only on the banner, chips, stickers and stamps (the "sticker" family). Soft shadows on content cards.

---

## §11 Sound design

**No music bed, ever.** Sound is SFX only (the creator's direction, 12 Oct 2026): never a music track, bed, drone or loop under the voice.

### 11.1 Tone palettes
| Tone | Colour | Zoom | SFX family (pools in §11.4) | Level vs voice |
|---|---|---|---|---|
| `hype` | Yellow | Z-1 | Whoosh, sub hit, pop | −14…−20 dB |
| `mock` | Pink / red | Z-2, Z-7, T-22 | **Meme hits** (§11.3), marker swipe, stamp thud | Meme −6…−12 dB (it must be heard) |
| `awe` | Orange / green | Z-4 | Riser → cinematic hit, shine, sparkle | −12…−16 dB |
| `explain` | Cyan / violet | rare | UI pops, digital text, typing (light) | −22…−28 dB |
| `warn` | Red | Z-5 | Tension riser, alarm, glitch, low boom | −14…−20 dB |
| `win` | Green | Z-1 | Ding, level up, correct; 1 allowed win-meme ("sukoon") | −16…−22 dB |
| `cta` | Yellow | Z-3 | Key click, shine, swoosh | −18…−22 dB |

### 11.2 The SFX ledger (D7)
Every reel has an `sfx-cues.json` plus a **ledger**: a table of file → uses → times. Rules:
- **Any file ≤ 2 uses.** It may go up to the item count **only** as the **parallel list cue**: the one sound that marks item 1, 2, 3… entries. Only one file per reel may be the list cue.
- **Meme files: 1 use each.**
- **No file on two consecutive cues.** Rotate variants inside a pool (Woosh 01 → Swoosh 02 → Fast Swish → Woosh 03…).
- **Density:** about 1 cue per 1.2–1.8 s on average. Never more than 2 cues overlapping. No cue under a trigger word's consonant (shift ±2 f).
- **Every cue is tied to a picture** (a graphic, a stage move, a transition). Plain jump cuts get nothing. Whooshes for T-04 / T-12 start **8 f before** the cut so the move lands on the sound's peak.
- **QA prints the ledger.** Any file over the limit fails the build.

### 11.3 Meme SFX (D2, `mock` tone only)
**When:** Creator mocks the viewer's result, assumption or habit ("wo ekdam bekaar hai", "paanch nithalle dost", "hackers ke liye gift", "Kya bro…"). **Not** on explanations, premium reveals or CTAs.

**How:**
- The hit lands in the **gap right after the punch word** (0–4 f after the word ends), never over a word.
- Pair it with a visual (stamp, freeze, crash zoom or sticker).
- ≤ 4 meme hits per reel, ≥ 4 s apart, each a **different file**.
- Don't duck the voice for them. Trim tails to ≤ 1.2 s (Vine boom tail to 0.9 s).

| Meme (file in `SFX/`) | Use it for |
|---|---|
| `Vine_boom_sound_effect_128k.mp3` | The verdict lands: stamp "AI SLOP", a shocking fact about their app |
| `Fahh - Sound Effect  SowaSFX - SowaSFX.mp3` | Facepalm: their garbage result, a classic mistake |
| `record-scratch/record-scratch.wav` / `ScratchRecord EC04_40_2.wav` | "Wait, what?": freeze-frame, record-stop before the pivot |
| `Sudden Stop Sound Effect - Anne Ghanda Vlog.mp3` | A hard freeze-frame roast (P-64) |
| `Shocked Sound Effect  Shravan 10 Sound Effects.mp3` | Indian TV-serial shock: crash zoom on "hackers ka gift", "app phat gaya" |
| `Windows XP Error Meme - DoomTheBoom.mp3` | The app/site breaks (crash device, error moment), trimmed to the "dun" |
| `Disappointed - Sound Effect (HD).mp3` | Crowd "ohhh": a letdown (their app after 5,000 users) |
| `Crowd Aww Sound Effect.mp3` / `Aww.mp3` | Mock sympathy: "5 nithalle dost" |
| `cartoon-dizzy-bang-with-chirps-01-…/39281 Cartoon dizzy bang…wav` | The app gets knocked out (P-43 end) |
| `funny_pan_hit_sound_effect_128k.mp3` / `Slap_sound_effect_128k.mp3` | Reality-check slap on a wrong belief |
| `Funny Effect 20.mp3` | A deflating claim ("secure hoga bro?" → no) |
| `ComedyAccent MIX64_44_4 REV.wav` | The suck-in right before a punchline |
| `06830 tabla up triple collect.wav` | A desi flourish on a cheeky reveal |
| `Windows Startup Meme Sound Effect.mp3` | A "booting up" gag (Claude starts working), trimmed |
| `#shorts #experiment  #memes  sukun ka naam suna hai means.mp3` | **`win` only, ≤ 1 per reel:** the satisfying fix ("itna sukoon"), trimmed |
| `10 random meme sounds…mp3` (cut "Nope" or "bruh") | Rejection gags (input rejected, access blocked), cut cleanly |

**Excluded always:**
- Profanity (`It was at this moment…`)
- Rage and screams (`KOREAN RAGE…`, `Long Scream…`, `WhatsApp Audio…` screams)
- Romantic/kiss cues (unless the script is literally about it)
- Devotional chants
- Regional-language clips that don't match the reel (Telugu, `mallareddy clg.mp3`), and AI voiceovers
- Every copyrighted song in the folder

### 11.4 Premium SFX pools (rotate; ≤ 2 uses per file)
| Role | Pool (files in `SFX/`) |
|---|---|
| Whoosh / move | `Fast Swish Movement/Fast Swish Movement.wav`, `swoosh-2025-01-08-…/Swoosh 02.wav`, `…/Swoosh 06.wav`, `woosh-2025-08-27-…/Woosh 01–04.wav`, `whoosh-2025-01-08-…/Whoosh 01.wav`, `simple-whoosh-382724.mp3`, `whip-swish-…`, `Air Low Woosh.wav`, `Futuristic Switch Transition.wav`, `data woosh.mp3` |
| Zoom | `Camera Quick Zoom Shoot - OhmLab/…wav`, `zoom-in/zoom-in.wav`, `zoom-2025-05-09-…/Zoom 1–5.wav`, `zoom-2025-01-08-…/Zoom.wav` |
| Flash / leak | `CINEMATIC_TRANSITION_Flash_05.wav`, `flash-2025-08-27-…/Flash 1–3.wav` |
| Risers | `Zoom In Riser/Zoom In Riser.wav`, `riser-2025-01-08-…/Riser 01–02.wav`, `electricity-charge-up-…/Electricity Charge Up 1–3.wav`, `intense-riser-…`, `tension-riser-…/Tension Riser 1–3.wav` (`warn`) |
| Impacts | `cinematic-hits-…/Cinematic Hit 1–8.wav`, `Cinematic Impact Scifi SFX/Cinematic_impact_scifi.wav`, `swish boom.mp3`, `ABSTRACT_HIT_Sub_Bass_07.wav`, `HD - Punch Sound Effect.mp3`, `Hit Spin.wav`, `electric-hit-…/Electric Hit 1–6.wav`, `Mountain Audio - Sudden Appearance…` |
| UI pops | `pop-up/pop-up.wav`, `game-pop-up-…/Game Pop Up 1–3.wav`, `Appear Enter.wav`, `tech-appear-…/Tech Appear 1–3.wav`, `UI Click.mp3`, `Digital Click.wav`, `Selection Click.wav`, `scifi-screen-tap-…/Scifi Screen Tap 1–3`, `Pop Popping Down.wav`, `Mouse Click/Mouse Click.wav` |
| Shine / win | `short-shine-…/Short Shine 1–4.wav`, `ding-…/Ding.wav`, `Level Up.wav`, `Shine Collect.wav`, `good-answer-…/Good Answer.wav`, `Correct Answer 2fast.wav`, `ui sparkle.mp3`, `Confetti Pop Particles Spill.wav`, `Twinkly Bell Glitter 1–3` |
| Data | `Digital Scan.wav` (X-ray, key hunt), `digital-text-…/Digital Text 01–06.wav`, `Data sound effect.mp3`, `telemetry-graph-rising-01-…` (counters, gauges), `Timer Clock Ticking`, `Mountain Audio - Electronic Clock Timer 3`, `cash-machine-…/Cash Machine.wav` |
| Danger / failure | `glitch-2025-01-08-…/Glitch 04.wav` (system failure), `Glitch 01–06`, `glitch-2025-02-19-…/Glitch 1–15.wav`, `MidrangeAlarmWarni PE419101.wav`, `Interference Flicker 1.wav`, `wrong answer.mp3`, `Wrong.wav`, `boom-…/Boom.wav` |
| Typing | `keyboard-typing-…/Mountain Audio - Typing Sound 1–19.wav`, `laptop keyboard.mp3` (prompts) |
| Camera / freeze | `Digital Camera Fast Shutter 1–3`, `camera-shutter-…/DSLR Camera Shutter v1–v4`, `camera-flash-…/Camera Flash 1.mp3` |

### 11.5 No music bed, silence, outro, mix
- **No music bed, ever:** this style is scored with sound effects only. The voice and the SFX carry the reel.
- **Silence before the payoff:** go silent (no new SFX) for 0.5–1 s before the biggest payoff or reveal, then land the hit.
- **Record-stop:** ≤ 0.3 s of near-silence before a pivot or punchline (the meme scratch may sit there).
- **Outro:** hard stop ≤ 6 f after "peace out". An optional ≤ 1 s button ≤ voice level.
- **Mix:** voice chain (high-pass 80 Hz, de-ess, light compression) → **−14 LUFS integrated, true peak ≤ −1.5 dBTP** (9 of the 10 reference reels clipped).

---

## §12 Footage handling

### 12.1 Setups (identify which ones the footage uses; re-measure on sampled frames for every new shoot)
| Setup | Description | Use | Typical framing (full frame) |
|---|---|---|---|
| **A: Selfie** | Phone front cam at arm's length, wide lens, handheld, gaming chair, monitors and posters behind; hand gestures into the lens | Roasts, reactions, crash zooms | Head top 450–600, eye line 850–1000, face x 420–580, face ≈ 45–60% of width |
| **B: Tripod seated** | Gaming chair, knees visible, wide (~35 mm feel), monitors frame-right; often holds the mic TX at the chin | Panel and full | Head top 330–580, eye line 470–775, face x 420–560 (left of centre) |
| **B-med** | The same tripod at ~1.5× (chest-up) | Full | Head top 150–410, eye line 420–650 |
| **C: Tripod standing** | Standing in front of the desk monitors, waist/knees-up | Full | Head top ~460, eye line ~655, face x ~600 |
| **D: Skit wide** | Locked-off, high angle (~30–40° down, ~2.2 m), wide lens, full bodies; two passes for the clone | Clone skits | Heads ~120 px; left clone x ≈ 195, right x ≈ 870–895 |

The studio look is low-key and warm: crushed blacks, warm skin, wood slats, a magenta/purple LED strip, cyan monitors. The selfie is brighter and warmer than the tripod. Keep it as shot; only match exposure and white balance between setups.

### 12.2 Crops
- `F` selfie: as shot, with Z-zooms. If the banner is on, the head top must sit ≥ banner bottom + 40 px; otherwise scale 1.05–1.1 and move the frame down.
- `F` tripod: as shot, or a punch 1.2–1.5× alternating on jump cuts; Ken Burns ±7–10%.
- `S` / `D` panel `P-BLEED` (top 1135): scale so that head top = 1195–1245 and eye line ≈ 1385; typical scale 1.0–1.3 (selfie), 1.5–1.9 (tripod wide); face x 340–560.
- `S` panel `P-INSET`: head top ≈ 1070–1130, eye line ≈ 1290–1330.
- `K`: full-frame footage, Gaussian 60 px, brightness 35%.
- **Bubble (G-4):** the face centred in the circle, scale so the face fills 70% of Ø 300.
- **Slide-aside (G-3):** the face centred in x 0–450.
- **Depth sandwich (G-5):** the matte placed so the head top sits ≥ 40 px below the banner bottom and his hand or shoulder overlaps the card corner by 60–140 px.

### 12.3 Matte (required in v2)
- DaVinci Resolve Magic Mask (Person) or RobustVideoMatting for video. `rembg` (`u2net_human_seg`) works for stills.
- Feather 2 px, choke 1 px, temporal smoothing; QA the hair at 200%.
- Export the alpha for the whole clip.
- **Clone composite:** two locked-off passes, mask-split at x ≈ 540 (feather 20 px), matched exposure. The strobe (T-02) uses the arriving clone's matte filled `#FCFCFC`.

### 12.4 Reaction bank (ask at the shoot)
For the comedy layer, ask Creator to record 2–3 s each of:
- a smirk at camera
- a facepalm
- a slow head-shake
- a pointing-up "ye dekho"
- a shocked face
- a shrug
- a "chef's kiss"

These feed T-22 freezes, the G-4 bubble and the G-6 lean-in when the main take has no usable reaction.

### 12.5 Frame rate & audio
- 30 fps CFR. Conform phone VFR footage to a constant 30 fps first (`-fps_mode cfr -r 30`), or duplicated frames cause judder. 1080×1920, BT.709.
- One voice track: high-pass, de-ess, compression, −14 LUFS.

---

## §13 Output contract

### 13.1 Beat sheet schema (the first ```yaml``` block of the edit brief)
```yaml
- id: 3
  section: HOOK                  # HOOK | LOOP | ITEM-n | PAYOFF | CTA
  spoken: "wahi purple gradient, wahi AI slop"
  trigger: "slop"
  onset_s: 1.62
  start_s: 1.55
  tone: mock                     # hype | mock | awe | explain | warn | win | cta
  mode: HOOK                     # HOOK | F | S | S-DARK | D | V | R | I | K | U
  stage_move: G-5                # G-1…G-6 or null
  family: B-14
  pattern: P-63                  # §8.3
  visual: "AI SLOP stamp slams on the garbage card, -12°, ink splatter; 💀 sticker by Creator's shoulder"
  on_screen_text: ["AI SLOP"]
  caption: {style: CAP-CHUNKY, text: ["wahi", "AI SLOP"], colour: alarm}
  banner: {text: "Your Claude website 🤢 vs MINE 🔥", chip_state: "SLOP"}
  zoom: Z-5                      # Z-1…Z-7 or null
  transition_in: evolve
  transition_out: T-19
  sfx:
    - {file: "Vine_boom_sound_effect_128k.mp3", at: "after 'slop' (+2 f)", level_db: -9, role: meme}
  assets: [edit/assets/broll/garbage_site.mp4]
```

### 13.2 SFX ledger (in the edit brief, generated from the beat sheet)
```yaml
sfx_ledger:
  "Vine_boom_sound_effect_128k.mp3": {uses: 1, at: [1.70], role: meme}
  "Fast Swish Movement/Fast Swish Movement.wav": {uses: 4, at: [7.4, 15.1, 22.6, 31.0], role: LIST-CUE}   # the one allowed repeat
  "woosh-2025-08-27-02-12-31-utc/Woosh 02.wav": {uses: 2, at: [12.0, 27.3]}
```

### 13.3 Hook proposal format (3 required)
```yaml
- name: "Result-First Roast: slop vs premium"
  formula: HF-6 (Result-First Roast)
  banner: "Your Claude website 🤢 vs MINE 🔥"          # passes the stopper test
  result_pair: {garbage: "purple-gradient AI-slop site", premium: "Creator's motion site"}
  stoppers: [VS-1, VS-2, VS-3, VS-4]
  captions: {style: CAP-CHUNKY, cards: ["ye tumhari / WEBSITE", "AI SLOP", "vibe coding / SE"]}
  storyboard: "f0 slab + garbage card + Creator cut-out | 0.3 flaw circles ×3 | 1.6 stamp + vine boom | 2.1 shatter | 2.6 light sweep + banner flip | 4.6 chips orbit"
  sound: [sub hit, marker swipe ×3 (3 files), vine boom, riser, cinematic hit, shine]
  stopper_test: {thumbnail: pass, mute: pass, read_s: 1.2, changes_3s: 14}
```

### 13.4 Checkpoint (before building)
Send:
1. 3 hooks with banners + the stopper test results.
2. The result pair and how both states will be produced (captured or built live).
3. The beat sheet with tones, the transition map and the **SFX ledger**.
4. The Data Theatre plan for every number and risk.
5. The asset list.
6. Style stills:
   - f0 (thumbnail)
   - 1.6 s (roast)
   - 2.8 s (reveal)
   - one Data Theatre beat
   - one pop-back
   - the CTA key-cap

**Wait for approval.** The storyboard page (PROC P9) is gate 2.

---

## §14 Worked examples

### 14.1 Reel 1 hook ("Claude ko ye 3 design skills sikha do", keyword SKILLS)
Times are estimates; replace them with `words.json` onsets.
- **Spoken:** "Haan bhai, Claude se website bana li, wahi purple gradient, wahi AI slop, ab isko aisa banate hain."
- **Banner:** "Your Claude website 🤢 vs **MINE** 🔥" (B-VERSUS).

| t (s) | Spoken | Tone | Visual | Caption | Zoom | SFX (ledger) |
|---|---|---|---|---|---|---|
| f0 | — | hype | Slab + garbage site card (tilted 4°) + Creator cut-out pointing at it (G-5) | — | slab settle | `ABSTRACT_HIT_Sub_Bass_07.wav` |
| 0.2 | "Haan bhai, Claude se website bana li" | mock | Card push-in; circle 1 "purple gradient" | CHUNKY "Claude se / **WEBSITE**" (Claude in brand colour) | Z-7 | `Marker Swipe 9.wav` |
| 1.0 | "wahi purple gradient" | mock | Circle 2 "same 3 cards", circle 3 "centred text" | CHUNKY "wahi purple / **GRADIENT**" | — | `Selection Click.wav`, `Digital Click.wav` |
| 1.7 | "wahi AI slop" | mock | **Stamp "AI SLOP"** + Z-5 + 💀 sticker | CHUNKY "**AI SLOP**" in red | Z-5 | **`Vine_boom_sound_effect_128k.mp3`** (+2 f after "slop") |
| 2.3 | "ab isko" | awe | **Shatter** (T-19) | — | Z-3 | `Zoom In Riser/Zoom In Riser.wav` |
| 2.7 | "aisa banate hain" | awe | **Light-sweep reveal** of the premium site (T-20) + banner flip "SLOP" → "PREMIUM" | CHUNKY "aisa / **BANATE HAIN**" | Z-4 | `Cinematic Hit 4.wav` + `Short Shine 2.wav` |
| 4.6 | "Main khud yahi teen skills…" | hype | Chips orbit the premium site ("Emil Kowalski", "Impeccable", "Taste") (P-66) + 3 tiles | CHUNKY "**3 SKILLS**" | Z-1 | `Game Pop Up 2.wav` |
| 9.6 | "Pehla, Emil Kowalski…" | explain | T-04 into item 1 (canvas), banner rockets up | black sub | — | **List cue:** `Fast Swish Movement.wav` (items 1–3 + bonus) |

### 14.2 Reel 6 data plan ("Users aate hi tumhara app tootega", keyword SCALE)
**Banner:** "**5** users ✅ **5,000** users 💥" (B-NUMBER). **Result pair:** app smooth with 5 friends → app cracks at 5,000. **Spine:** SM-9 progress rail (4 notches).

| Section | Spoken (gist) | Tone | Mode / pattern |
|---|---|---|---|
| Hook 0–2 | "sirf tumhare paanch nithalle dost hi use karenge" | mock | `D`: 5 lazy avatars on a sofa (P-40) on the app phone. Marker note "5 nithalle dost 😴". `Crowd Aww` meme in the gap |
| Hook 2–4.5 | "jaise hi paanch hazaar log aaye, wo phat jayega" | warn | P-41 zoom-out to 5,000 dots pouring in → P-42 gauge to red → **P-43 crash device** (cracks, black, 💀). Banner chip "5,000" pulses red. `Glitch 04` + `Shocked Sound Effect` (meme, once) |
| Hook 4.5–6 | "agar tumne ye chaar cheezein nahi ki toh!" | hype | G-2 pop-back + Z-1. 4 tiles rise |
| Loop | "Tension mat lo… last mein de dunga" | hype | CHUNKY, rail appears |
| 1 Indexes | "book ke peeche wala index…" | explain → win | T-18 into the phone → `D`: **P-46 book index**. Left: a slow scan with a ticking clock. Right: an index jump ✓. Violet `CAP-GLOW` "INDEX" |
| 2 Caching | "ek baar bana ke save kar lo, har user ko turant" | explain → win | **P-47 cache fan-out**: 1 card → 12 users; the DB chimney idles |
| 3 Load testing | "Claude hazaaron fake users bhej ke bata dega kahan tootega" | warn → win | **P-48 load-test swarm** with ghost users; marker circle "yahan tootega" |
| 4 Skip Kubernetes | "Kubernetes ke chakkar mein mat padna… asli problem database" | mock → explain | KT-RED "MAT PADNA" + freeze-frame roast (P-64, `record-scratch`), then **P-44 versus lanes**: "Kubernetes maze" vs "Vercel auto-scale ✓"; the database highlighted |
| CTA | "comment kar do SCALE" | cta | G-2 pop-back, **P-68 key-cap "SCALE"** → the PDF "SCALE – 4 prompts so your app survives going viral" flies to the DM |

### 14.3 Reel 10 security plan ("Claude ka app = hackers ka gift", keyword SECURE)
**Banner:** "Your Claude app is a **GIFT** for hackers 🎁" (B-WARN). **Spine:** SM-8 shield (7 segments). **Last item escalates** ("sabse khatarnak").

| Item | Spoken | Pattern |
|---|---|---|
| Hook | "Kya bro, Claude ne app banaya hai toh secure bhi hoga bro?" (mock quote) | Creator Z-7 + `Funny Effect 20` deflate; the app card wobbles |
| Hook | "Hackers ke liye toh gift hai ye." | **P-49 gift box** opened by red cursors + `Windows XP Error Meme` (trimmed) → T-21 banner chip "GIFT" pulses |
| 1 Rate limiting | "koi tumhari API ko spam na kar paaye" | **P-50 bouncer gate** |
| 2 Input validation | "jo format se match na kare, seedha reject" | **P-51 shape sorter** |
| 3 API keys | "mili toh sirf delete nahi, badlo" | **P-52 key hunt** (`Digital Scan.wav`) |
| 4 AI packages | "kuch exist hi nahi karte, kuch kamzor" | **P-53 ghost package** |
| 5 Error messages | "sirf simple message, code ki details nahi" | **P-54 scary → simple** |
| 6 File uploads | "type aur size limit… file kabhi chalni nahi chahiye" | **P-55 upload filter** |
| 7 Access control (escalation) | "ek user doosre ka data toh nahi dekh sakta? RLS on karo" | Silence (no new SFX) 0.6 s → `S-DARK` → **P-56 data wall** "BLOCKED" + Z-5 → shield 7/7 "SECURE ✓" (`Level Up.wav`) |
| CTA | "comment kar do SECURE" | P-68 key-cap → PDF "SECURE – 7 security checks before launch" |

### 14.4 What the reference reels taught
This edition keeps the references' best moves (panel drop, orange leak, chunky captions, serif titles) and adds the result-first hook, Data Theatre, the comedy layer and the zoom system on top.

---

## §15 QA checklist

**Footage frame**
- [ ] Creator's video and every recording, clip or photo is full screen or in a designed box/panel it fills on the canvas; never a sharp rectangle over its own blur, never blurred side bars, never a card on his blurred frame (Mode K sits on the canvas).

**Stopper hook**
- [ ] Frame 0: banner readable + result visible + Creator visible; ≥ 1 element moving. Passes the thumbnail test at 25%.
- [ ] ≥ 10 visual changes in 0–3 s. A result is visible by 2.0 s. The premium/fixed state appears by ~4.6 s.
- [ ] Banner: ≤ 9 words, ≤ 2 lines, one chip, stroke + hard shadow, readable in ≤ 1.5 s, matches the result pair, flips at most once, rockets out (no pop-off mid-word).
- [ ] The mute test passes (the story reads without sound).

**Body**
- [ ] No dead air. Cuts on word boundaries ±1 f.
- [ ] An event every ≤ 1.5 s; nothing static > 2.5 s.
- [ ] Every number, comparison and risk uses a Data Theatre pattern (M8, §8.5). Quantities are countable, comparisons share axes, numbers are real or script-stated.
- [ ] Every item uses the identical ritual + marker. Pop-backs (G-2) bring Creator back for opinions and roasts.
- [ ] An entertainment beat every 6–10 s; never two comedy beats back to back.
- [ ] Zoom events every 2.5–5 s in Mode F; never the same Z twice in a row; Z-2 ≤ 2.
- [ ] ≤ yellow + 2 bright hues per frame; pink only in the comedy layer; red → green before/after axis.
- [ ] No overlapping text; titles hold ≥ 10 f; subtitles hidden under titles.

**Sound**
- [ ] The **SFX ledger** is printed: no file > 2 uses except the single list cue; meme files 1× each; no file on consecutive cues.
- [ ] Meme hits only on `mock` beats (plus ≤ 1 `win` "sukoon"), ≤ 4 per reel, ≥ 4 s apart, in gaps (not over words), none from the excluded list.
- [ ] The hook is dry; there's a short silence (no new SFX) before the big payoff; −14 LUFS; true peak ≤ −1.5 dBTP.

**Truth, text, end**
- [ ] Facts, numbers and screenshots are real or script-stated; the result mocks are generic or Creator's own.
- [ ] Spelling is exact for English words and brands.
- [ ] Promises are paid off on screen; the CTA keyword is on a key-cap ≥ 1.5 s; the PDF title is correct; the community chip is shown.
- [ ] 1080×1920, 30 fps CFR, ends ≤ 6 f after the last word, no black tail.

---

## §16 Build + render

- **Pipeline:** PROC P0–P13 with the frame-deterministic HTML renderer at **30 fps**. The storyboard page (`Storyboard-Template.md`) comes before any full render. The animatic runs at 5 fps (every 6th frame).
- **Why this is hard to match by hand:** crowds of 5,000 seeded people, shard physics, gauges that follow counters, word-synced machines and a ledger-checked sound map are all **generated from `words.json` + the beat sheet**. Every frame is a function of its index, so a revision re-renders in minutes instead of days of keyframing.
- **Fonts:** Inter Tight 900, Plus Jakarta Sans 800, Anton, Instrument Serif italic, Permanent Marker, Montserrat 900 italic, Jost, Silkscreen, Lilita One (+ Gagalin if installed). Pre-paint the glyphs ₹ ✓ ✕ → and the emoji used.
- **Components:**

| Component | Role |
|---|---|
| `Canvas` | `#FCFCFC` + dashed 141 px grid (light) / black grid (`S-DARK`) |
| `SpeakerPanel` | `P-BLEED` / `P-INSET`, footage reframe, rounded mask, drop / rise / pop-back |
| `Footage` | Full-frame selfie/tripod with the jump-cut list, punch / Ken Burns; edge to edge or in the panel, never shrunk over its own blur |
| `CapChunky` / `CapGlow` / `CapSub` / `CapMarker` | Caption systems (§5), word-append from `words.json` |
| `Label` / `ToolTitle` / `StackWords` / `KineticType` | §5.6, §5.7 |
| `Card` | B-1 / B-2 / B-3 cards with grow / push / smear, inner video + scroll |
| `Chip` / `Badge` / `Tiles` / `Counter` / `IconPop` / `Silhouette` / `FlowDiagram` | §5.11, §7.1, B-6, B-9 |
| `LeakFlash` (T-01, T-05), `Strobe` (T-02), `ZoomSlam` (T-03), `Invert` (T-07), `ExposurePop` (T-08), `Smear` (T-13) | Transitions as overlays indexed by frame |
| `Slab` | Headline Slab banner: stroke, offset shadow, chip, marker underline, pulse, flip (T-21), rocket exit |
| `DeviceMock` | Browser and phone frames whose content can scroll, lag, glitch, crack (SVG crack paths) and go black |
| `ResultPair` | Garbage and premium site generators (generic, unbranded) or captured clips |
| `Shatter` | Seeded Voronoi shards with gravity (T-19) |
| `LightSweep` | T-20 |
| `DataStage` | Night background, dot grid, glow drift |
| `Crowd` | Seeded N-person field (avatars → dots), pour, gather-into-glyph (P-40, P-41, P-59) |
| `Gauge` / `Lanes` / `Bars` | P-42, P-44, P-45 |
| `Machines` | BookIndex, CacheFanout, Bouncer, ShapeSorter, KeyHunt, GhostPackage, UploadFilter, DataWall, XRay, Shield (P-46…P-58) |
| `Comedy` | MarkerNote, MarkerCircle, Stamp, Sticker, FreezeFrame (P-62…P-65, T-22) |
| `ZoomCam` | Z-1…Z-7 on the footage layer, with seeded shake |
| `Stage` | G-1…G-6 stage moves, including the matte-driven depth sandwich and bubble |
| `KeyCapCTA` | P-68 |
| `SfxLedger` | Builds `sfx-cues.json` from the beat sheet and fails the build if D7 is broken |

- **Performance:** draw crowds and shards on one `<canvas>` per layer (not DOM nodes). 5,000 dots at 1080×1920 render in < 20 ms per frame.
- **Final:** H.264 CRF ≤ 14, yuv420p, BT.709, AAC 320k, faststart. Verify frames, loudness and a contact sheet decoded from the final file (PROC P12).

---

## Appendix A. Evidence map
| Element | Source |
|---|---|
| Result-first hook, banner as the strongest element, meme SFX on mocking tone, data motion graphics, bright palette, no repeated SFX, zooms and splits | **Creator's directives, 3 Oct 2026 (D1–D8)** |
| Yellow banner `#FCF700` (7/10 reels), chunky captions with hard shadow (r11–r14, r20–r22), canvas split (9/10), panel drop (9/10), orange leak (r11–r13, r15, r17), silhouette strobe (r11, r13, r15), zoom-blur slam (r12, r17, r20, r22), invert (r20, r22, r24), dry hook (8/10), DM lead-magnet CTA (10/10) | The 10 reference reels |
| Fixes: promises, true peak, black tails, typos, short banners, dark logos | r13, r15, r17, r20, r21, r22 |
| The "same whoosh everywhere" problem (D7) | Reported by Creator; r17's 9 whooshes and r22's 11 whoosh events were similar stereo swishes |

## Appendix B. Banner bank, October reels (draft; verify against each `script.md`)
| Reel | Keyword | Primary banner (≤ 9 words) | Alternate |
|---|---|---|---|
| 1 | SKILLS | Your Claude website 🤢 vs **MINE** 🔥 | **3** Claude skills that kill AI slop |
| 2 | FIX | Your vibe-coded app is **BEKAAR** 💀 | **5** reasons nobody uses your app |
| 3 | LAUNCH | Don't launch before this **CHECKLIST** ✅ | **15** checks before your site goes live |
| 4 | TEAM | One person. A full **AI TEAM** 🤖 | Your one-person company's **AI TEAM** |
| 5 | TOOLS | **4 FREE** tools that make Claude build like a pro | Claude builds like a **PRO** with these 🔥 |
| 6 | SCALE | **5** users ✅ **5,000** users 💥 | Your app **CRASHES** at 5,000 users 💀 |
| 7 | PREMIUM | Your site: a photo 😴 Mine: **ALIVE** 🔥 | Make your website come **ALIVE** |
| 8 | DEV | Claude Code = your full **DEV TEAM** | Turn Claude Code into a **DEV TEAM** 👨‍💻 |
| 9 | PROMPTS | **7** prompts. **4** apps. 6 months. | The **7** prompts behind my 4 apps |
| 10 | SECURE | Your Claude app is a **GIFT** for hackers 🎁 | **7** security checks before you launch 🔐 |

---

## Starter prompt (paste with a new video)
```text
You are the editor and motion designer for Creator's Instagram Reel.
Read Creator-Reel-Editing-Playbook-v2.md fully, then follow §1 exactly. Process: Video-Edit-Production-Process.md; storyboard: Storyboard-Template.md (30 fps).
Footage: <file(s)>. Script: <Reel N/script.md>. Keyword + PDF: <POSTING_ORDER.md>.
Result pair for the hook: <garbage state> → <premium/fixed state> (captured or built live).
Stop at the §13.4 checkpoint (3 banners + stopper test + SFX ledger) and wait for my approval.
```
