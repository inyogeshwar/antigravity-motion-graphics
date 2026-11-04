# Money Explainer Playbook (v2, "Calm Motion" edition, for Claude Opus 5.5)

> **In this plugin:** this file is the whole playbook: every measured value and recipe from the 4 reference reels is in it, and there is no other playbook file to open. Frame counts here are at **30 fps** unless marked "@25" (the references' measured rate): convert with t = f / fps inside `frame(t)`. The per-reel notes it cites (`aw1…aw4`) are not shipped. Sounds are picked by id from SOUNDS.md; commands are in the edit skill's REFERENCE.md.

**Purpose:** you (Claude) receive a talking-head video of the creator plus its script. Use this document to **ideate and build** every hook, ledger, widget, money machine, caption, transition and sound, then edit the Reel so it **stops the thumb at frame 0 without shouting**, and keeps the viewer to the last frame because every number they hear becomes something they can see.

**What v2 is:** a frame-by-frame analysis of 4 Ankur Warikoo reels (aw1 "2 incomes wale ghar mein yeh galti mat karna", aw2 "5 online offers jo aapko cheat kar rahe hain", aw3 "8 ka loan ya 11 ka loan", aw4 "Episode one of seven: money doesn't behave"), elevated around the creator's direction of 11 Oct 2026. Every measured layout, recipe and rule from those reels is kept here; where a reference reel and a direction disagree (the references had no sound design, and the speaker sat in one place), **the directions win**. They come first, because everything below serves them.

### The feel (read this twice)
This is the edit of a person who is **certain**. He doesn't raise his voice and the edit doesn't either. Nothing bounces, nothing flashes, nothing is there to decorate. And yet the screen is never still: numbers roll into place exactly as he says them, his salary drains out of a bar while he's still finishing the sentence, the frame breathes from his face into the ledger and back. It feels like watching a very good teacher draw on a perfect whiteboard, filmed by someone who loves motion. **Calm on the surface, relentless underneath.** If a frame looks like a hype reel, it's wrong. If a frame looks like a slide, it's wrong too.

### Who this is, and who it's for
- **The reference creator:** a calm, credible Indian money educator who talks **fast and without filler** (3.6–4.9 words/s) in Hindi-dominant **Hinglish** about salaries, loans, offers, insurance, family finances and money psychology. He never shouts, never jokes for the sake of it, never performs. The authority comes from the numbers being right and visible.
- **The audience:** urban, salaried, Hindi/Hinglish-speaking Indians aged roughly 20–40: first jobbers, young couples, EMI payers, online shoppers. They know the words (EMI, cashback, APR, premium) but not the maths. They want to **see the trick** in the numbers and leave with one sentence they can repeat at dinner.
- **The lineage:** a fintech-UI explainer in three layers.
  1. **Speaker:** one locked-off medium close-up, never zoomed inside a shot; jump cuts remove every breath; he is either full screen or framed in a card, never a cut-out.
  2. **Data:** a clean, flat UI built live, one element per spoken phrase (rows, bars, chips, result cards, a year scrubber, odometers, a running ledger). It **accumulates**: nothing leaves inside a section, so the last frame of a section is its summary.
  3. **Words:** plain subtitles, one clause at a time, no styling.
- **This style is not one layout.** The same creator, set and caption system carry **three data looks** (§3.1): a ledger, a data widget, and a documentary case file. Pick the look from the script.

### Creator directives
| # | Directive | Where it lives |
|---|---|---|
| D1 | **Calm, not flashy.** Premium, quiet confidence. No shakes, no stickers, no meme sounds, no neon, no bouncing type. The power comes from precision and continuity | §4, §10, the whole file |
| D2 | **The speaker moves.** Open **full screen** on his face with a big, clear hook object; **shrink into the card** when the maths starts; **come back full screen** for opinions, turns and the ending. Never card-only, never an empty canvas at frame 0 | §3.2 Stage moves, §6 |
| D3 | **Motion graphics are seamless and powerful.** Nothing appears from nowhere: every element arrives from something that was already on screen, every change happens to the thing itself, and the whole reel feels like **one continuous take of one evolving picture** | §8, §9, §10 |
| D4 | **Sound effects are scored to studio standards: dense, deliberate, retentive.** Every graphic event has its sound, tuned to this calm palette (paper, coins, pen, soft UI, low weight). **No SFX file more than 2× in a reel** (the one list cue excepted). | §11 |
| D5 | **No imposed checks.** This file gives taste, recipes and reasons; you make the calls like the best video editor in the world. The only things that never bend are craft: the face is never covered, text never sits on text, sound is in sync with the picture | §2 |
| D7 | **The face is always fully visible.** No zoom, push or crop ever goes so tight that his hair or chin leaves the frame | §2, §3.3 |
| D6 | **The screen does the maths.** Every number he says becomes something you can see, at its true size, landing on the word | §8.4 Money machines |

### The reference reels → this edition, at a glance
| Area | The reference reels | This edition |
|---|---|---|
| Speaker | One place per reel (top card, full frame or lower card) | **Moves on meaning:** full screen ↔ card, 2–4 cycles; the ledger waits behind him (D2) |
| Hook | Data builds on a quiet canvas from f0; 6–8 small changes in 3 s | **Calm stopper:** his face full screen + one big, true, surprising number object at f0; the object travels into the ledger on the shrink (§6) |
| Motion | Fades, pops, bar grows, crossfades | **Continuity system:** shared-element travel, morphs, one camera over one canvas, drains, pours, roll-ups; no element is born from nothing (§9, §10) |
| Data | Bars, chips, cards, widget, ledger counter | **Money machines:** salary pipes, EMI drains, interest meters, receipts, discount peels, compounding stacks, leaky buckets, balance scales (§8.4) |
| Ledger | Builds down the page and stays | Builds, **and the camera travels along it**; at the end it pulls back to show the whole sheet: the summary is a reveal (§8.5) |
| Captions | Plain English, inside the card | Plain, in the creator's caption choice; just under the chin when full screen (where the eye already is), in the card when small; the number in the caption gets one weight step (§5.2) |
| Sound | Dry voice; one boom on an end card | **Scored:** paper, coins, pen, soft UI, low weight, calm whooshes on every move; a short silence (no new SFX) before the turn; the ledger rule (§11) |
| Transitions | Jump cuts; morph and collapse inside the widget | Jump cuts + **stage moves** (shrink, expand, glide, page turn, pull-back) (§9) |
| Checks | A QA checklist | **Craft only** (§2). The rest is your judgement, written down in the plan |

### Quick index
| § | What |
|---|---|
| §1 | Procedure (the order that works) |
| §2 | Craft that never bends |
| §3 | Stages and stage moves (full screen, card, widget, case) |
| §4 | Colour (calm palette, one accent per meaning) |
| §5 | Type and captions |
| §6 | Hook system: the calm stopper, formulas, endings |
| §7 | Structure: the spine, the row ritual, the rhythm of a calm reel |
| §8 | Graphics: families, money machines, the travelling ledger, assets |
| §9 | Transitions and stage moves |
| §10 | Motion language: easing, continuity, timing to the voice |
| §11 | Sound: palette, the SFX ledger, no music bed, the mix |
| §12 | Footage handling |
| §13 | Output contract: the plan, the beat sheet, the sound ledger |
| §14 | Worked examples |
| §15 | Look at your frames |
| §16 | Build + render |

---

## §1 Procedure (the order that works)

0. **Know the footage and the words.** Identify the camera setup (§12.1): a locked tripod medium close-up is the house setup; a handheld selfie is steadied by the card crop, never left shaking full screen for long. Transcribe with word timestamps; Hindi comes back in Devanagari, which is for timing only: the captions follow the creator's caption choice (§5.2). Segment the script into `HOOK` (0–3 s), `SETUP` (the facts the maths needs), body `ROW`s / `RACE` steps / story `BEAT`s, the `TURN` (where the obvious answer flips), `TAKEAWAY`, `END`, and give every clause a line type from the lookup (§8.3b), its **trigger word** and its caption.
1. **Watch and listen first.** The whole cut, start to end, with sound. Note where his voice gets certain, where it turns ("lekin", "but", "toh"), where he looks into the lens to say what he believes. Those are your full-screen moments.
2. **Find the one idea** that runs through the reel, the thing the viewer should be able to say at dinner. It becomes the **spine**: one picture that is born in the hook, changes with every point and pays off at the end (a household's salary pipes, two loans racing, a team of five seats, a cart of "discounts"). Write it in one line.
3. **List every number** he says, with its word onset. Each one becomes a thing on screen at its true size (D6). Where he says no numbers, count the things he names.
4. **Choose the stage** (§3.1): ledger, widget or case. One line on why.
5. **Plan the speaker's movement** (§3.2): mark every beat full screen or card. Full screen at frame 0, shrink on the first number, expand on each turn or opinion, full screen for the ending.
6. **Design the end frame first.** What does the finished ledger look like, the screenshot someone would save? Then work backwards: in what order, on which words, does each element arrive, and **where does it come from** (§10.2)?
7. **Write 3 hooks, second by second** (§6), each with a formula, its frame 0, its first 3 s of events and its first two captions, with the calm stopper object, the shrink and the first travel. Keep the one that promises most.
8. **Score it** (§11): every graphic event gets its sound, from the calm palette, logged in the sound ledger.
9. **Attack your own plan** as the best editor you know would: where is the screen still? Where does something appear from nowhere? Where does the motion fight the voice? Where is it flashy? Fix it in the plan before you draw.
10. **Draw, look at your frames** (§15), and fix what a stranger would stumble on.

---

**Full screen or a box, never any footage or picture over its own blur** (Studio Standard): the creator's video either fills the whole frame edge to edge, or sits in a designed box (rounded corners, a rim or soft shadow, on this style's own ground) that it fills completely, cropped around the face. The same for every other medium: screen recordings, landscape clips, photos, receipts, diagrams and other people's footage either fill the frame (cover-cropped to the part that matters, or a push-in) or sit in a designed box on the style's own ground or scene (its colour, gradient, texture, grid or drawn set). Never shrink anything over a blurred or darkened copy of itself, never pad a band or box with blurred side bars, never set a card on the creator's blurred frame: a hard rectangle against its own blur looks cheap. A tight selfie stays full screen: move or shrink the text above the head, not the video; the hair may touch the top edge, eyes to chin are always in. When the whole head must be seen, use a box layout where it fits.

## §2 Craft that never bends

These are not taste. They are the difference between a professional edit and a broken one.

- **The whole face is always in frame.** Every zoom, push, settle, lean-back or card crop on the footage stops while his hair and chin are still inside the visible frame, with a little air above the hair: how far you can zoom is decided by the face (`FACE0`, `FACE(n)` when he moves), never by the frame. If a card is too small to hold his whole head at a readable size, change the card's shape or size; the footage always fills its card (never shrunk inside it over its own blur); never cut the face. Graphics sit beside him or above his head; a caption may cross his face when it has to.
- **Text never sits on text.** One caption at a time; a caption never overlaps a label, value or title; nothing is drawn over the caption.
- **Sound is in sync:** every SFX lands on the frame its picture lands, and never on top of a consonant of the word it illustrates (slide it ±2 f into the gap).
- **Numbers are true:** every amount, rate, date and name on screen is from the script or a real source, at its true proportion (a ₹75 L bar is 1.5× a ₹50 L bar). Illustrative values the speaker presents as an example are fine; decorative fake metrics are not.
- **Spelling and number format:** brand and product names exact; the currency and grouping from the creator's profile (₹1,63,250 for INR).
- **Loudness:** −14 LUFS integrated, true peak ≤ −1 dBTP. The reel ends on the last word or on a designed final frame, never on accidental black.

Everything else in this file is direction. You decide; write your reasons into the plan.

### 2.1 The house grammar (what makes it this style)
Not checks: this is what the four reference reels do every time, and why it works. Break one only with a reason in the plan.
- **One data look per reel** (ledger, widget or case), chosen from the script. Never mixed, except a section change inside the widget and an end card.
- **The breaths are cut.** No gap over ~0.25 s inside a phrase in the ledger and case looks; the widget may keep a 0.2–0.5 s beat before a new section ("How did this happen?"). Cuts sit in the micro-gap before a clause, never mid-word.
- **Every spoken number lands on screen, on the word:** values finish within ±3 f of the number's last syllable, the biggest reveal within ±2 f. When the caption (a translation) puts the number elsewhere, the graphic follows the **voice**.
- **Data-true proportions:** bars to scale (aw1 used 8 px per lakh: ₹75 L = 600 px, ₹50 L = 400 px); block counts equal the periods (10 years = 10 blocks); a race's lead flips exactly when the real numbers cross.
- **The data layer accumulates.** One element per phrase is added or mutated; nothing is removed inside a section. The last frame of each section is a screenshot-able cheat sheet.
- **Change by mutation, not replacement:** a bar drains to a red dashed ghost, a value flips to "₹0 / was ₹50 L", a strike crosses the belief, the "Costs more" tag jumps rows.
- **The speaker is never zoomed inside a shot.** No punch-in, no Ken Burns, no reframe on the talking head; jump cuts are invisible because the framing never changes. The only size change is the whole frame moving between full screen and the card, on a beat (§3.2).
- **One UI kit per reel:** Poppins only, one card radius, one margin, one canvas hue, white cards with near-black text. A sponsor or CTA card is built in the same kit.
- **The list size is visible up front** in a numbered piece: the empty 1…N skeleton is on screen by ~1.5 s and fills as he talks.
- **Rows share one pitch and one set of columns** (aw2's row 5 broke this once; never again).
- **No stock footage, screen-recording montages or emoji** in the ledger and widget looks: the drawn data *is* the B-roll.
- **Graphics never sit on the face:** in the widget the lowest element stays ≥ 80 px above the forehead; in the card looks nothing overlaps the card.
- **Chrome stays readable:** progress dots and thin text sit on a faint scrim or use a darker grey (aw4's grey dots vanished on light pictures).

---

## §3 Stages and stage moves

### 3.1 The three stages (pick one per reel)
| Stage | What the canvas does | Speaker when small | Choose it when |
|---|---|---|---|
| **LEDGER** | A sheet of rows, bars, chips and result cards that builds phrase by phrase and never clears inside a section | 16:9 card at the top, x 107–970, y 73–567, 3–4 px white border, square corners | An argument from a few numbers, or a list where each item resolves to a number |
| **WIDGET** | One persistent comparison widget above his head: option rows, a year scrubber, odometer values, mechanism blocks | Full frame, widget in y 140–760, forehead ≥ 80 px below it | Two options compared over time, or a mechanism explained |
| **CASE** | A noir black-and-white picture per clause with one object in ledger green, case chrome, a running money counter | 16:9 card in the lower middle, x 56–1020, y 990–1530, top edge feathered into a green glow | A true story, a case, a history, a series |

An opinion script with no numbers at all still takes the **LEDGER** with countable items (a chip for each named thing): the style shows every noun, never a bare talking head.

| | LEDGER (aw1, aw2) | WIDGET (aw3) | CASE (aw4) |
|---|---|---|---|
| Canvas | Animated dark gradient in the reel's theme hue, drifting light blob, dust specks | Dark-teal gradient over the top of the footage, black fade at the bottom | Dark-green glow canvas |
| The picture | A ledger that builds under the card, phrase by phrase, never cleared | One persistent comparison widget that morphs, races and rebuilds | A new noir B&W picture for every clause, one object in ledger green |
| Captions | Inside the card, baseline y ≈ 545 | Over the black bottom fade, baseline y ≈ 1524 | Inside the card bottom, baseline y ≈ 1500 |
| Pace (measured) | 4.3–4.9 words/s, cuts on caption swaps | 3.6 words/s, cuts every ~2.4 s, slower in the explanation | 4.6 words/s, a new picture every ~1.6 s |
| Ending | "Do you agree?" + pull-back or related-video card | CTA/sponsor card in the same UI kit | Unresolved question, series counter "case 01 / 07" |

**Canvas recipe (all stages):** a vertical gradient in the reel's theme hue (§4.2), a soft light blob drifting a few pixels per second (never pulsing), sparse 1–3 px dust specks drifting slowly. It is alive but never busy.

#### LEDGER layout (aw1, aw2)
```
┌─────────────────────────┐ 0
│ ┌─────────────────────┐ │ ← speaker card x 107–970, y 73–567 (864×495, 16:9)
│ │  speaker, eye line  │ │   white #FCFCFC border 3–4 px, square corners, no shadow
│ │  y≈228, face x 540  │ │   black bottom gradient inside the card
│ │  caption            │ │ ← caption baseline y≈545, centred, max width 750
│ └─────────────────────┘ │ 567
│  LABEL / sublabel       │ ← ledger zone x 68–980, y 600–1650
│  ████████████ [₹75 L]   │   rows, bars, chips, tabs, result cards
│  ████████ [₹50 L]       │
│  [chip] [chip] [chip]   │
│     [ TOTAL CARD ]      │
│   takeaway line here    │ ← y 1500–1570, centred
│                         │ ← y 1650–1920 empty (platform UI)
└─────────────────────────┘ 1920
```
- **Speaker in the card:** head top ≈ y 110, eye line ≈ y 228 (31% down the card), chin ≈ 355, face centre x ≈ 540, face height ≈ 50% of the card.
- **Ledger zone:** hard left margin x 68–70 (rows) or 104–110 (numbered lists); centred elements on x 540; the bottom 270–350 px left empty.
- **Two ledger shapes:**
  - **Argument ledger** (aw1): labelled rows with proportional bars + value chips + outline tags → a section label → a 3-column chip grid → a centred total card → a lowercase takeaway line.
  - **Numbered comparison ledger** (aw2): a pill tab bar (y 600–645) → N rows on a fixed 190 px pitch (rows start y ≈ 700, 890, 1080, 1270, 1460), each with a big translucent numeral, a bold claim title, a "you think" value and a "you actually get" result card.

#### WIDGET layout (aw3)
```
┌─────────────────────────┐ 0
│ Widget title (46 px)    │ ← x 62, baseline y≈182
│ (pill)(pill)(pill)      │ ← context pills y 212–260
│ Yr 2──4──6──8──10       │ ← scrubber y≈287
│ ╭─────────────────────╮ │ ← row 1 card y 382–485
│ │[8%] ▓▓▓▓▓░░░ ₹40,000│ │
│ ╰─────────────────────╯ │
│ ╭─────────────────────╮ │ ← row 2 card y 514–617
│ │[11%] ▓▓▓▓▓▓░ ₹51,880│ │   notes / pills to y≈760
│ ╰─────────────────────╯ │
│        ( head top ≥ 784)│ ← speaker full frame, eye line y≈1010–1030
│        speaker          │   face centre x 540, never zoomed
│  caption                │ ← baseline y≈1524 on the black fade
│█████████████████████████│ ← solid #000000 from y≈1620
└─────────────────────────┘ 1920
top gradient #022930 → clear by y≈800; bottom fade clear at 1450 → black at 1620
```
- **Widget zone:** x 62–1007, y 140–760. The forehead stays ≥ 80 px below the lowest widget element.
- **Row cards:** white, radius ≈ 16, x 62–1007, ~103 px tall; an option chip 148×74 (radius ≈ 10) on the left; a grey track `#BFC9D0`; the value right-aligned at x ≈ 990.
- **Title** changes per section (cross-fade 2–3 f, or a hard swap inside T-07). The talking head is the whole lower frame; the widget never shrinks him. His "full screen ↔ card" movement here is the **widget hiding** (rows collapse upward, 6–8 f) for a full-screen opinion and **returning** for the next data step.

#### CASE layout (aw4)
```
┌─────────────────────────┐ 0
│ case 01 / 07 ●○○○○○○   ledger│ ← chrome y 155–280
│                    ₹60,00,000│   (counter left, ledger right)
│   NOIR B&W PICTURE           │ ← picture zone y 0–~950, full width,
│   one object glows green     │   bottom ~200 px feathered into green
│ ░░░░░░░░ glow ░░░░░░░░░░░░░░ │ ← canvas glow #2D5F44 at y≈950–1100
│ ┌─────────────────────────┐  │ ← speaker card x 56–1020, y≈990–1530
│ │ speaker (green grade)   │  │   top 150–200 px feathered into the glow
│ │ caption                 │  │ ← caption baseline y≈1500
│ └─────────────────────────┘  │
│   dark green canvas          │ ← y 1530–1920 empty (platform UI)
└─────────────────────────┘ 1920
```
- **Cold-open title plate (0–3.4 s):** a full-width hero prop on a dark table (aw4: a ₹500 note that curls and flies off) with the episode wordmark (§5.6); the speaker card already below.
- **Documentary stack:** pictures on top, the speaker card in the lower middle, chrome above everything. The speaker is **small** here (face ≈ 170 px wide): the pictures own this look.

#### End cards
- **Related-video card** (aw1): ~3 s on pure black: a thumbnail (x 126–953, y 537–1002), a 2-line title in Poppins Bold ~30 px white, and a white dotted arrow (6 px dots) that writes on in ~10 f, then sways (1–2 px every ~4 f), pointing at the platform's related-video link. The card scales 104 → 100% over 2 f on the cut. A deep low hit under it (§11.3).
- **Sponsor / CTA card** (aw3): built in the widget kit (dark panel `#0B2027`, radius ≈ 14, x 62–1005): logo, "Talk to X", "Link given below", then chevrons ⌄ ⌄ ⌄ added one every 5 f.
- **No card** (aw2, aw4): the finished ledger, or the last picture, is the last frame.

### 3.2 Stage moves (how the speaker moves; D2)
| ID | Move | Recipe | Use |
|---|---|---|---|
| **SM-1** | **Shrink into the card** | The full-screen footage scales and translates into the card rect in **10–12 f**, expo-out, landing dead still (no overshoot). The white border draws on over the last 3 f. The canvas is revealed around it, and the hook object rides the same move to its place in the ledger (§10.2 travel) | Hook → first data; every return to the maths |
| **SM-2** | **Expand to full screen** | The card grows from its rect to the full frame in **10–12 f**, expo-out; the border fades over the first 3 f. Behind it the ledger dims to ~35% and blurs 6 px, then is covered | A turn ("lekin…"), an opinion, a reaction, the ending |
| **SM-3** | **Glide** | The card slides to a second position (top → lower third, or left/right of a tall graphic) in **12–14 f** while the ledger re-lays itself around it | When the ledger needs the top of the frame (a tall chart, a receipt) |
| **SM-4** | **Lean back** | Full screen, the footage eases from 100% to 94% over a held line while a single large object sits beside him, so he and the object share the frame; never a zoom on his face | A full-screen opinion that still needs one number beside him |
| **SM-5** | **Pull-back reveal** | At a section's end or the reel's end, the camera pulls back over the canvas (§8.5) so the whole finished ledger is visible at once, with him in his card at the top of it | The cheat-sheet payoff |

**Rhythm of the moves:**
- Full screen for the hook (1.5–5 s), for every turn and opinion, and for the last line. The card for the maths.
- 2–4 shrink/expand cycles in a 45–60 s reel feels right. Less feels like a slide deck; more feels nervous. Each full-screen stretch runs 1.5–6 s; never two moves within 1 s.
- A move starts on a word boundary and lands before the next stressed word, so the eye is settled when the number arrives.
- **The ledger never resets while he's full screen.** When he shrinks back, every element is exactly where it was, plus whatever the next phrase adds.

### 3.3 Full-screen composition
- He is framed as shot (no punch-in, no zoom). If the footage is a handheld selfie, keep it full screen only in the hook and on turns; the card steadies it for the long data sections.
- **Hook and full-screen objects** sit in the band above his head (y 120–520) or in the third beside his face, on a soft dark scrim (black 35–45%, radius 24, blur 20 px behind it) so they read on any background. They never touch his hair.
- **Captions full screen sit high, just under his chin** (the creator, 12 Oct: "a little up so that the viewer notices them when the frame is full"): the line's top ≈ 40–80 px below `FACE(n)` chin, centre y ≈ 1050–1200 on typical framing, never lower than y ≈ 1250. The eye is on his face; the words sit right where it lands next. On a tight selfie with the chin low, the line may cross the chin rather than drop to the chest. Move it left or right of the hands if needed.

### 3.4 Safe zones
Key text inside x 62–1018, y 110–1650. The bottom ≈ 270 px stays empty canvas (platform UI). The right ≈ 110 px holds no text below y 1000.

---

## §4 Colour (calm palette, one accent per meaning)

### 4.1 Core tokens
| Token | Hex | Use |
|---|---|---|
| `card` | `#FFFFFF` | Value chips, result cards, rows, the speaker card border |
| `ink` | `#111111` (near-black `#1A1010`–`#181E22` on cards) | Numbers and text on white |
| `label` | `#FFFFFF` at 100% / 72% / 48% | Labels, titles, takeaway lines (the three opacities are the hierarchy) |
| `idle` | `#AEAFAE` | Pending tabs, "you think" values, empty seats |
| `track` | `#BFC9D0` | Empty bars and tracks |
| `border` | `#FCFCFC` | The speaker card's 3–4 px border |
| `ghostNum` | `#D4CFCE` at ~65% | Big translucent list numerals |
| `loss` | `#D85A5C` (dashed outline) / `#D93436` (tags) | Costs more, lost, the trap |
| `gain` | `#237D27` (tags) / `#3FB37A` (fills, glows on dark) | Cheaper, gained, the right choice |
| `ledgerGreen` | `#45CA80` (highlights to `#AEFFD1`) | CASE stage: the money thread, the one coloured object, the counter, the active series dot |
| `optionA` / `optionB` | `#174A56` / `#181E22` | WIDGET option identities (chip fills) |
| `sponsor` | `#0B2027` | The kit-built CTA / sponsor panel |
| `shadow` | `0 18px 40px rgba(0,0,0,.28)` | Under white cards on the canvas (soft only, never hard) |
| `scrim` | black 35–45% + 20 px backdrop blur, radius 24 | Behind hook objects over full-screen footage |

### 4.2 Canvas themes (one per reel, from the topic's mood)
| Theme | Top → mid → bottom | Mood |
|---|---|---|
| **Teal** | `#051213` → `#3C6D74` → `#356569` | Calm, family, saving, planning |
| **Maroon** | `#190F0B` → `#8A584F` → `#683F3A` | Warning, spending, being cheated |
| **Widget teal** | `#022930` at the top → clear by y 800 over the footage; black fade from y 1450 | Loans, rates, products |
| **Case green** | glow `#2D5F44` at y 950–1100 → `#0A1A10` → `#061409` | Stories, history |
| **Ink blue** (new) | `#070B14` → `#22314F` → `#1B2740` | Investing, long-term, the future |

### 4.3 Meaning
- **White card, dark number** = a fact. **White label on the canvas** = what the fact is.
- **Red** = it costs you. **Green** = it saves you. **Grey** = what you believed, or what hasn't happened yet.
- **One accent per frame** besides white: never red and green fighting on the same element; when both appear (a comparison), they sit on different rows.
- No neon, no gradients on cards, no glow except one soft `gain` glow on the winning value and the CASE stage's green.
- **A strike-through is never coloured:** it crosses what you believed; the white result card beside it is the truth.

### 4.4 Footage look (don't fight it)
- **LEDGER / WIDGET:** natural, slightly warm, medium contrast, a soft key from one side, shallow depth of field. A home-study set (bookshelves, a lamp, a plant) is the reference; any clean, real room works. Keep it as shot; normalise exposure only.
- **CASE:** the reference graded the speaker near-monochrome with a green cast. **Not here: never pale** (Creator, 12 Oct). The speaker keeps full natural colour and deep blacks, a touch darker and more contrasty than the other looks; the story's green world lives in the backdrop and a soft green rim, not in a washed-out face.

---

## §5 Type and captions

### 5.1 Font map (Poppins only, bundled)
| Role | Weight | Size (px) |
|---|---|---|
| Caption | Regular 400 (the number in it: SemiBold 600) | 40–46 full screen, 36–40 in the card |
| Hook object number | Bold 700 / ExtraBold 800 | 140–220 |
| Row label | Bold 700, CAPS, +4% tracking | 28–32 |
| Sublabel | Regular, lowercase | 22–26 |
| Value on chip | Bold | 34–40 |
| Result / total value | Bold | 54–72 |
| Row title (lists) | Bold | 48–54 |
| Widget title | SemiBold | 44–48 |
| Takeaway line | SemiBold, lowercase | 40–46 (sub-line Regular 24–26, dimmer) |
| Row subtitle (lists) | Regular | 32–34 |
| Value sub-line | Regular, lowercase | 22 |
| Big list numeral | Bold / ExtraBold | ~118 (85 px tall) |
| Section label | Regular, lowercase | 28 ("what my ₹50 L covers") |
| Context pill text | Regular | 26 |
| Odometer number | ExtraBold | 42 |
| Tag | Bold / SemiBold | 22–24 (CAPS in the ledger, Sentence case in the widget) |
| Episode wordmark (CASE) | ExtraBold, lowercase, −4% tracking | 110–130 |
| Episode label / subtitle (CASE) | Regular mint `#BBD8CA` 24 / SemiBold 44 | lowercase |
| Chrome (case counter, ledger label, status) | Regular | 26–34, lowercase |
| Ledger value (CASE) | Bold, `ledgerGreen` | 46 |

### 5.2 Captions
- **Text:** the creator's caption choice from their profile (English translation of Hindi speech, as the reference does: "Ruchi, meri wife, 75 lakh rupaye saal ke kamaati hai" → "My wife Ruchi earns ₹75 lakhs a year."; romanised as spoken; or the original). **Every clause he says is captioned**, one clause per caption, 3–9 words, hard swap on the clause, no animation, no colour.
- **Chunking:** median ~1.4 s on screen; a single line, max width ~750–760 px; a long sentence splits mid-clause across two captions rather than going to two lines.
- **One emphasis, quietly:** the number or the key noun inside the caption is SemiBold; everything else Regular. Nothing else.
- **Position:** full screen, **high, just under the chin** (top ≈ 40–80 px below the chin, centre y ≈ 1050–1200, never below ≈ 1250; §3.3); in the LEDGER card, inside the card's bottom (baseline ≈ 545) on its black gradient; WIDGET, over the bottom black fade (baseline ≈ 1524); CASE card, inside its bottom (baseline ≈ 1500).
- **Legibility:** a soft bottom gradient or a 30% black band behind the line; never a box, never a stroke.
- The caption swaps **1 frame before** the cut it belongs to.

### 5.3 Ledger text (argument ledger)
- **Row label + sublabel:** "RUCHI" (Bold CAPS) above "her salary" (Regular), left at x 70, followed 3 f later by the bar.
- **Value chip:** white, radius ≈ 10, ~208×75 for one value; value Bold, sub-line ("a year") under it; soft dark shadow. Sits right of the bar end.
- **Outline tag:** 2–3 px white border, dark translucent fill (≈ `#112E2B` over teal), Bold CAPS white ("RUNS THE HOUSE", "INVESTED"), under the row it describes.
- **Total card:** white, radius ≈ 12, ~400×120, centred; value Bold ~54–60 px ("₹1.25 CR"), sub-line ("combined, every year").
- **Takeaway line:** centred, y ≈ 1500–1530, SemiBold white **lowercase**, an optional dimmer sub-line under it. It **rewrites itself** as the argument moves: question → fact → thesis → contrast (aw1: "what if one salary stopped?" → "income drops instantly. / the commitments do not." → "both incomes are load-bearing now" → "the second income used to be / the safety net").

### 5.4 List text (numbered ledger)
- **Tab bar:** N pills "OFFER 1…OFFER 5", ~165×45, fully rounded, y 600–645, gap ~11 px; inactive grey `#AEAFAE` with white Bold CAPS; **visited = white fill with black text, and it stays white** (a progress bar, not a selection).
- **Numeral column:** x 110–185, translucent white (`ghostNum`), Bold ~118 px.
- **Row text column:** from x 202: title Bold ~52, subtitle Regular ~34.
- **"You think" value:** right-aligned at x ≈ 705: value Bold ~32 px white, "you think" Regular ~22 px.
- **Result card:** x 730–980, ~249×128, white, radius ≈ 22, soft shadow; value Bold ~56 px near-black, sub-line ~22 px ("you actually get", "bill if you needed 1", "spent to save ₹50").

### 5.5 Widget text
- **Title:** SemiBold ~46 px white at x 62, baseline y ≈ 182; one per section ("Which loan costs you more?" → "How did this happen?" → "Same trap in insurance").
- **Context pills:** full radius, h 48, translucent dark fill (black ~35% over the teal), Regular ~26 px white ("₹2.5 lakh loan", "10 years", "Monthly EMI"); they stay for the whole section.
- **Option chip:** 148×74, radius ≈ 10, option colour fill, white Bold value ("8%").
- **Odometer value:** ExtraBold ~42 px black, right-aligned at x ≈ 990 inside the row card.
- **Tags:** red "Costs more" `#D93436` on the losing row's right corner (x 823–1007), mechanism tags ("Flat rate" red, "Reducing" green), white SemiBold.
- **Note lines:** Regular ~26 px white under the widget ("Flat: on the full ₹2.5 lakh, every year").
- **Action pill:** white with dark text ("Check the APR statement"), or white with a green ✓ ("Look at both, not just one").

### 5.6 Case chrome and the episode wordmark
- **Series counter:** "case 01 / 07" Regular ~34 px white at x 80–260, y 155–180, then N progress dots at x 300–420, y ≈ 172: the current episode in `ledgerGreen`, the rest translucent grey **on a faint dark scrim**.
- **Ledger counter:** right-aligned to x ≈ 998: "ledger" (~26 px) / value Bold ~46 px `ledgerGreen` / a status word (~26 px) that changes with the story: "needed" → "handed over" → "spent" → "recovered". No box. It sits **above** the flash layer.
- **Episode wordmark (cold open):** "episode one" mint `#BBD8CA` Regular ~24 at x ≈ 89, y ≈ 126–150. The series name in 3 staggered lowercase lines, ExtraBold ~120 px, tight negative tracking and leading, off-white `#F1F3ED`: line 1 left at x ≈ 89, line 2 right-aligned to x ≈ 992, line 3 left-indented; spanning y ≈ 185–530. The episode title ("that phone call") SemiBold ~44 px at y ≈ 650–690, with a short `ledgerGreen` rule above it (x ≈ 78–330, y ≈ 605). The hero prop passes **in front of** the title text.

Nothing in any of these goes under 22 px on a phone. Their motion is §10's: calm, no overshoot.

---

## §6 Hook system

### 6.1 The calm stopper (what frame 0 to 3 s must do)
1. **His face, full screen, mid-sentence**, with the first caption on. A human face that is already talking stops a thumb better than any graphic.
2. **One big, true, surprising object beside him, complete and readable on frame 0** (its value may finish rolling over f0–f6, but never an empty card waiting to fill): the number, the pair, the count, the date. It is the thing the reel is about, drawn large and clean on a soft scrim.
3. **The contradiction by ~3 s:** a second object that disagrees with the first (₹75 L earns more, but ₹50 L runs the house), or a tag on the obvious choice that will turn out wrong.
4. **The first travel:** on the first data phrase he shrinks into the card and the hook objects **fly into their places** in the ledger. The viewer realises the hook was the first line of the answer.

Count is not the point (the references measured 6–8 visual changes in the first 3 s, coming from the data building and the shrink). The hook works when a stranger, sound off, can read the surprising number and feel that something doesn't add up. **Show the shape of the answer before the answer:** two bars with no conclusion, an empty 1–5 skeleton, a "Cheaper?" tag on the wrong option, a counter at case 1 of 7. Caption, voice and graphic say **the same thing three ways**: the caption is the sentence, the voice is the tone, the graphic is the number.

### 6.2 Calm stopper devices (`CS`, combine one or two)
| ID | Device | Recipe |
|---|---|---|
| **CS-1** | **The number beside the face** | A white card on the scrim beside his face: the number at 160–220 px, a 1–3 word label under it. Arrives from a grey pill at 70% scale to 100% white in 7 f (expo-out, no overshoot); its value rolls into place over 10 f |
| **CS-2** | **The pair that disagrees** | Two number cards side by side above his head, the second arriving 1–2 s later; their true proportion shown by a thin bar under each that grows to length |
| **CS-3** | **The primed wrong answer** | Two option cards; a quiet green "Cheaper?" tag settles on the one everybody would pick. It will move later |
| **CS-4** | **The giant count** | His hand or his word says a count; a giant translucent numeral (300–420 px, white at 22%) fades up beside him, then splits into the N slots on the shrink |
| **CS-5** | **The receipt** | A receipt slides up from the bottom edge of the frame beside him (16 f, expo-out), lines printing one by one (2 f each) with the amounts he says |
| **CS-6** | **The cold-open prop** (CASE) | A spotlit object on a dark table (a note, a phone, a key) with the episode wordmark; the object moves in front of the type |

### 6.3 Hook formulas (`HF`)
| ID | Formula | Spoken shape |
|---|---|---|
| HF-1 | **Personal numbers + paradox** | "She earns ₹75 L, I earn ₹50 L, but the house runs on my salary" |
| HF-2 | **Count + accusation** | "These 5 offers cheat you" |
| HF-3 | **Binary trap** | "8% or 11%: which would you choose? Let's see." |
| HF-4 | **Episode cold open** | "Episode one. Money doesn't behave. That phone call. 24 May 1971…" |
| HF-5 | **The mistake** | "Don't make this mistake with your EMI / salary / card" + the number that proves it |
| HF-6 | **The quiet question** | "Do you know how much your 'free' delivery actually cost you?" + the number |

Add-ons that stack with any formula:
- **Priming the wrong answer:** a tag on the option the viewer will pick ("Cheaper?" on 8%), proved wrong later.
- **A gesture that is a number:** five fingers on "paanch".
- **"Let's see" / "Aaiye dekhte hain":** the explicit open loop, said once.

Write 3 variants with different formulas and devices; recommend one with its reason.

### 6.3b The four measured hooks (the references' frame 0–3 s, with the creator's movement)
| ID | Hook visual | Recipe |
|---|---|---|
| **H-1** | **Two-bar paradox** (aw1) | Full screen f0, mid-word. By f2 a big value card "₹75 L / Ruchi" arrives beside the face (never over it); at ~2 s "₹50 L / me" beside it; on the next phrase the frame **shrinks into the card** (T-11) and both values travel into their rows as the bars grow to their true lengths; at ~3 s the outline tag "RUNS THE HOUSE" lands under the *smaller* bar |
| **H-2** | **Big number skeleton** (aw2) | Full screen f0, his hand up showing five; f2–8 a giant translucent "5" arrives beside the face; on "cheat" the frame shrinks into the card and the "5" splits into the N tabs + numerals 1…N (tabs ~2 f apart, numerals ~4 f apart) |
| **H-3** | **Option cards + priming tag** (aw3) | Full screen f0. f2–7 the title + option A card fade up over the top of the frame; f24–29 a green "Cheaper?" tag settles on A; f46–48 the option B card; f53–58 a "Total interest ▬ vs ▬" bar; f66–72 the cards **morph** into the race widget (T-06) above his head |
| **H-4** | **Episode wordmark over a hero prop** (aw4) | f0 a spotlit hero prop (a ₹ note on a table); f11 "episode one"; f18/20/22 the 3 wordmark lines fade in (~6 f each, 2 f offsets); f41 the prop starts to move; f62 the episode title + green rule; f72–96 the prop flies off **in front of** the type; f94–100 the title group fades; f102 hard cut into the story |

**Hook text:** no banner, no title card. The hook's text is the **caption** plus the **labels** of the data; labels are nouns and numbers ("RUCHI / her salary / ₹75 L / a year"), never a sentence. The episode wordmark (HF-4) is the only big type in the style.

### 6.4 Hook timing (≈ 0–5 s)
| t | Beat |
|---|---|
| f0 | Face full screen, mid-word, caption on, **the stopper object already on screen and readable** (a card with its number, never an empty card) |
| f0–f8 | The stopper object settles (its value rolls into place, the label sharpens) with a soft pop sound |
| 1–3 s | The second object or the primed tag; the contradiction is readable |
| 1.5–4 s | **SM-1 shrink**; the hook objects travel into the ledger |
| 3–5 s | The first ledger row is complete; the open loop is visible (empty seats, a "?" row, a scrubber at year 2) |

### 6.5 Hook sound
A soft appear (`appear-enter` or `hint-appear-2025-08-27-02-25-12-utc-hint-appear-02`) on the stopper object; a quiet coin or paper accent on the second; a calm whoosh under the shrink.

### 6.6 Endings (pick one)
| ID | Ending | Recipe |
|---|---|---|
| E-1 | **Question + pull-back** | Full screen for "Do you agree?"; then SM-5 pulls back to the finished ledger, which holds 1.5–2 s as the last frame; a low soft hit under the pull-back |
| E-2 | **The finished cheat sheet** | The last result lands; the camera pulls back; the full ledger is the last frame |
| E-3 | **Keyword / link in the kit** | Full screen for the CTA line; a white card above his head with the keyword in a dark chip ("Comment **DEV**"), a short sub-line; a soft ding on the keyword; then the cheat sheet or a hard stop |
| E-4 | **The unresolved case** (CASE) | The open question over a call-back picture |

---

## §7 Structure

### 7.1 The spine
One picture carries the whole reel. It is born in the hook (the stopper object), it changes with every point (a seat fills, a bar drains, the race flips), and it pays off at the end (the pull-back shows the whole thing). Name it in the plan and write, for every beat, **what changes in the spine**. A beat that doesn't change the spine must earn its place another way (an opinion, full screen).

### 7.1b Structure devices (`SD`, pick the ones the look needs)
| ID | Device | Use when | Recipe |
|---|---|---|---|
| **SD-1** | **Skeleton first** | Any numbered list | All N slots (tabs + numerals, or seats) on screen by ~1.5 s, then filled in order |
| **SD-2** | **Tab bar as progress** | Numbered list | Visited tabs turn white and stay white; pending stay grey |
| **SD-3** | **Row grammar** | Myth-vs-maths list | Every row: claim title → grey "you think" value → white result card + strike-through, identical columns |
| **SD-4** | **Rewriting takeaway line** | Argument ledger | One lowercase line at y ≈ 1500 that rewrites itself at each turn of the argument |
| **SD-5** | **Year scrubber** | A race over time | A timeline "Yr 2 4 6 8 10" with a white knob that moves on each spoken year and leaves a filled trail |
| **SD-6** | **Section title** | Widget sections | The widget title changes per section: question → "How did this happen?" → "Same trap in insurance" |
| **SD-7** | **Case chrome** | Series / story | "case 01 / 07" + progress dots + a running ledger counter, all reel long |

### 7.2 The row ritual (lists; identical for every row)
1. **Shrink or stay** in the card; the row's slot is already there (empty seat, grey tab).
2. **Activate** on the ordinal word: the tab turns white (4 f), a soft page-turn or tick sound.
3. **Name** on the item's name: the title fades up from 70% opacity and 8 px lower (6 f).
4. **Show what it does** with a money machine (§8.4) inside the row's right column, on the words that describe it.
5. **Resolve** on the result word: the result card, the strike-through, the ✓; the one quiet `gain` glow.
6. **Optional full-screen beat** (SM-2) for his opinion on this item, then SM-1 back for the next row.

### 7.3 Open loops
- **The visible remainder:** empty seats, grey tabs, a "?" on the last row, a scrubber at year 2 of 10.
- **The primed wrong answer** that moves when the truth arrives.
- **The running number** (a ledger total, a counter with a status word: "needed → handed over → spent → recovered") that keeps changing.
- **The unresolved ending** (E-4), for a series only.
- **The promise** ("links at the end", "the fifth one is the craziest") paid off on screen in the same element that opened it.

### 7.4 The rhythm of a calm reel
- **Breath, build, turn.** Each section: a full-screen breath (his face, one sentence), a build in the card (rows, machines, numbers), a turn (the mutation: the drain, the flip, the strike), then breathe again.
- **Escalate quietly:** the last item gets the biggest move (the tallest machine, the longest pull-back, the one sub hit), not more effects.
- **Hold the silence that matters:** before the turn, let the screen be still for 6–10 frames while he says "lekin"; then the change lands. Stillness is a tool here, used once or twice.

---

## §8 Graphics

### 8.1 Families
| ID | Family | Look | Motion signature (§10) |
|---|---|---|---|
| G-1 | **Bar row** | Label + sublabel + white proportional bar (radius ≈ 6, 60 px tall) + value chip | Bar grows from the left in 14 f expo-out; the value rolls with it and lands on the number |
| G-2 | **Chip grid** | White radius-10 chips (~253×75), black lowercase Regular text; 3 columns (x 140–939, col gap 20, row gap 19) | Each chip slides 10 px up and fades in over 6 f, staggered 3 f, left to right, row by row |
| G-3 | **Tag** | Outline tag (2 px white, dark translucent fill) or colour tag | Shape draws its outline (6 f), text fades in (4 f) |
| G-4 | **Result / total card** | White, radius 16–22, soft shadow, big value + sub-line | Grows from the element it resolves (a chip, a bar end) in 8 f, expo-out, no overshoot |
| G-5 | **Takeaway line** | Centred lowercase SemiBold with an optional dim sub-line | Letters rise 6 px and fade in per word (2 f stagger); the old line drifts up and fades as the new one arrives |
| G-6 | **Tabs + numerals** | Pill tabs, translucent numerals | Fade up in a 3 f stagger; a tab turns white by a fill wiping left to right (5 f) |
| G-7 | **Race rows** | Option chip, track, fill, odometer | Fill and odometer move together, 12 f, ending on the number's last syllable |
| G-8 | **Scrubber** | Hairline timeline + knob | Draws on in 18 f; the knob glides 8 f with a short motion trail |
| G-9 | **Mechanism blocks** | N rounded blocks | Build from the bar they replace: the bar slices into N pieces that settle into their heights (14 f) |
| G-10 | **Money machines** | §8.4 | §8.4 |
| G-11 | **Noir picture** (CASE) | B&W, grain, one green object | Slow push 3–5% across the shot; hard cut on the clause |
| G-12 | **Case chrome + ledger counter** | §5.6 | Counter rolls on transfers (24 f, slight blur), status word cross-fades (4 f) |
| G-13 | **Hook objects** | §6.2 | §6.2, then travel on SM-1 |
| G-14 | **Episode wordmark + hero prop** (CASE) | §5.6 | §6.3b H-4 |
| G-15 | **End cards** | Related-video card, sponsor card | §3.1 End cards |
| G-16 | **Photo print** (CASE) | A real or period photo as a print, tilted ~10°, deckled white border | Hard cut; it sits in the picture zone like a prop |
| G-17 | **Context and action pills** (WIDGET) | Translucent dark pills (context); white pills, optional green ✓ (action) | Fade 4 f (context); settle in 4 f on the instruction (action) |

**Family rules:**
- LEDGER uses G-1…G-6 and the machines (G-10); WIDGET uses G-3, G-4, G-7…G-9, G-17 (+ G-15); CASE uses G-11, G-12, G-14, G-16.
- White cards carry facts; the canvas carries labels. Never put a fact as bare text on the canvas when a card can hold it.

### 8.2 Staging choreography (one phrase)
1. **Arrive from somewhere** (§10.2): out of the element before it, out of the speaker's card edge, out of the hook object, or out of the slot that was waiting.
2. **Land on the word:** the value finishes on the last syllable of the number (±2 f).
3. **Judge after it (3–6 f later):** the tag, the strike, the ghost, the ✓.
4. **Hold, alive:** while it holds, one quiet thing still moves (the canvas blob, a fill still settling its last 1%, a coin settling); never a dead freeze.
5. **Hand off by transformation, not replacement** (D3).

### 8.3 Patterns (measured from the references; play each with the continuity motion of §10)
| ID | Pattern | Family | What's on screen | Motion |
|---|---|---|---|---|
| P-01 | **Amount row** | G-1 | "NAME / sublabel" + proportional bar + "₹X / per Y" chip | Label rises 4 f; bar 14 f expo-out; chip settles as the bar reaches ~85%, value rolling |
| P-02 | **What it covers** | G-2 | A section label + a 3-column chip grid of the things the money pays for | Chips stagger ~3 f, L→R, row-wise |
| P-03 | **Role tag** | G-3 | "RUNS THE HOUSE" / "INVESTED" under the row it describes | Outline draws 6 f on the verb, text in 4 f |
| P-04 | **Combined total** | G-4 | A centred total card ("₹1.25 CR / combined, every year") | Grows out of the elements it sums, grey pill → white, number blurred → sharp, 8 f; sub-line +4 f |
| P-05 | **Data death** | G-1 mutation | The bar drains R→L, a red dashed ghost (`#D85A5C`, 3 px) marks where it was, the chip flips to "₹0 / was ₹50 L" | ~20 f: old takeaway out 3 f → new takeaway in 4 f → bar drains → ghost fades in → "₹0" → "was ₹50 L" |
| P-06 | **Takeaway rewrite** | G-5 | One lowercase line that changes at each turn | The old line drifts up and fades as the new one rises in |
| P-07 | **List skeleton** | G-6 | N tabs + N translucent numerals (or seats) | §6.3b H-2 |
| P-08 | **Myth → maths row** | G-6 + G-4 | Claim title, grey "you think" value, white result card, strike-through | §7.2 |
| P-09 | **Option cards** | G-4 (widget kit) | Two big option cards ("8% loan", "11% loan") side by side | Fade up 4–5 f each |
| P-10 | **Card → widget morph** | G-7 | The option cards shrink and slide into their chip positions in two rows | T-06 |
| P-11 | **Race step** | G-7 + G-8 | The knob moves to the next spoken year; both rows' bars and odometers update | Knob 4–7 f → roll 10–12 f → tag 3–5 f after |
| P-12 | **Lead flip** | G-3 tag | "Costs more" leaves the old row and lands on the new loser on "But…" | The tag **travels** between rows (T-16), 10 f |
| P-13 | **Mechanism blocks** | G-9 | A row's bar becomes N blocks; a tag names the mechanism; a note line defines it | Blocks slice out of the bar ~1/f L→R; tag mid-build; note fades 4 f |
| P-14 | **Action pill** | G-17 | "Check the APR statement" / ✓ "Look at both, not just one" | Settles in 4 f on the instruction |
| P-15 | **Analogy rebuild** | G-7 | The same two card slots reused for a new pair ("Premium / What you pay" vs "Cover / What you get") | T-07 collapse, then labels fill on the spoken words |
| P-16 | **Clause picture** | G-11 | The literal picture of the clause with one green object | Hard cut on the clause onset |
| P-17 | **Money transfer** | G-12 | The ledger counts down/up on a spoken transfer ("₹60,00,000 → ₹0 handed over") | Roll ~24 f |
| P-18 | **Status swap** | G-12 | The status word changes ("spent", "recovered") with the new amount | 3–4 f blur-swap |
| P-19 | **Cold-open title** | G-14 | Hero prop + episode wordmark + episode title | §6.3b H-4 |
| P-20 | **Related-video end** | G-15 | Thumbnail + title + dotted arrow on black | §3.1 End cards |
| P-21 | **Sponsor / CTA card** | G-15 | Kit-built CTA card with chevrons | §6.6 E-3 |
| P-22 | **Photo print** | G-16 | A tilted, deckled print for a person or memory | Hard cut |

### 8.3b Line → pattern lookup (start here for every clause)
| Line type | Primary | Alternates |
|---|---|---|
| "X earns / costs / pays ₹N" | P-01 Amount row | P-04 |
| "My salary covers A, B, C" | P-02 What it covers, or MM-1 Salary pipe | — |
| "Most of it goes to X" / a role | P-03 Role tag | — |
| "Together that's ₹N" | P-04 Combined total | MM-6 |
| "But if X stops / disappears" | P-05 Data death / MM-2 Drain | P-12 |
| The point of the argument | P-06 Takeaway rewrite | — |
| "N things that…" | P-07 List skeleton / MM-9 Seats | — |
| "You think X, actually Y" | P-08 Myth → maths row / MM-11 Belief → truth | P-12 |
| A price, a bill, a cart | MM-3 Receipt | P-01 |
| "X% + Y% off", a claimed discount | MM-4 Discount peel | P-08 |
| "A or B?" | P-09 Option cards → P-10 | — |
| "After N years…" | P-11 Race step / MM-10 Calendars | MM-5 |
| "But by year N…" (the flip) | P-12 Lead flip | P-05 |
| Rates, EMIs, interest over time | MM-5 Interest meter | P-11 |
| Investing, "over 10 years" | MM-6 Compounding stack | MM-10 |
| Small leaks: subscriptions, fees | MM-7 Leaky bucket | P-02 |
| A trade-off, "both matter" | MM-8 Balance scale | P-06 |
| "How did this happen?" / a mechanism | P-13 Mechanism blocks | — |
| "So check X / do Y" | P-14 Action pill | — |
| "The same trap in Z" | P-15 Analogy rebuild | — |
| A story clause (who, where, what happened) | P-16 Clause picture | P-22 |
| Money moves in the story | P-17 Money transfer | P-18 |
| "Do you agree?" / related video | E-1 / P-20 | E-2 |
| Sponsor / link / keyword | P-21 / E-3 | — |

### 8.4 Money machines (new in v2; D6: make them see the money)
A money machine is a small, calm diagram that **does** what he says, in the row's right column or full width for the turn. Flat white and greys on the canvas, one accent, soft shadows, no cartoon.
| ID | Machine | When he says | What it does | Sound |
|---|---|---|---|---|
| **MM-1** | **Salary pipe** | "my salary pays for…" | A white pipe from his salary bar splits into labelled outlets (school fees, food, EMI); a soft fill runs through each on its word | Soft flowing whoosh, a tick per outlet |
| **MM-2** | **The drain** | "if one salary stops" | The bar empties right to left (12 f), the dashed red ghost stays, the outlets fed by it fade to grey one by one | A low soft sub hit on the stop; a quiet descending tone |
| **MM-3** | **The receipt** | prices, bills, carts | A receipt prints line by line (2 f per line), the total underlines itself with a pen stroke | Typing ticks (light), pen stroke on the total |
| **MM-4** | **The discount peel** | "30% + 20% off" | A price tag shows the claim; the tag peels back (10 f, a slight curl) to reveal the real number underneath | Paper peel / page turn |
| **MM-5** | **The interest meter** | rates, EMIs over time | A horizontal meter with "what you borrowed" in white and "what you pay back" filling in red past it, year ticks marching | Clock ticks under the march, a soft hit where it passes the principal |
| **MM-6** | **Compounding stack** | investing, "over 10 years" | Coin-thin layers stack year by year, each a little thicker than the last; the stack's height is true to the number | One soft coin per few layers, a gentle shine on the final value |
| **MM-7** | **Leaky bucket** | small leaks: subscriptions, fees, impulse buys | A bucket of the monthly salary with small labelled drips; the water line falls on each named leak | A tiny drip tick per leak |
| **MM-8** | **Balance scale** | "both are load-bearing", trade-offs | A minimal scale with two weights that tip as he weighs them; it settles level or tips on the verdict | A soft wooden tick on each settle |
| **MM-9** | **Seats / slots** | "a team", "five tools", roles | N quiet seats with role labels; each fills with its item on its name; the last stays "?" until the end | Page turn as list cue (the one allowed repeat) |
| **MM-10** | **The two calendars** | "every month", "10 years" | Month squares fill as time passes; the red ones are the months that cost him | A soft tick per row of months |
| **MM-11** | **Belief → truth** | "we think…, actually…" | The belief value in grey; a white truth card rises out of it, and a pen line strikes the belief | Pen stroke on the strike, soft pop on the card |

**Rules of taste for machines:**
- Use them where a number would otherwise sit alone on a chip.
- One machine at a time, in its own space; the rest of the ledger stays still while it works.
- Draw them in the ledger's language (white, greys, one accent, soft shadow), never as illustrations or icons from elsewhere.

### 8.5 The travelling ledger (new in v2)
The ledger is one tall sheet, often taller than the frame. A camera moves over it:
- **Follow:** as rows are added below the visible area, the sheet glides up (14–18 f, ease-in-out), so the active row is always in the upper-middle of the canvas.
- **Lean in:** on a machine that needs room, the camera pushes 1.0 → 1.15 over the row (16 f) and back after.
- **Pull back (SM-5):** at the end, the camera pulls out until the whole sheet fits, with his card at its top; it holds as the summary.
Nothing about the camera ever shakes, whips or rotates.

### 8.5b Scale: the thing being explained is big
The calm comes from precision, not from small things. **The element he is talking about owns the empty canvas:** the active machine, the open-question card ("Tool 5 = ?"), the comparison: drawn large, centred in the space it has, often the whole width and the whole lower half of the canvas. The measured sizes in §3.1 and §5 are the reference reels' floors for type and chips, **not targets for the picture**. If a part of the canvas sits empty for more than a second while he's in the card, the active element should have grown into it. Only one thing is big at a time; the rest of the ledger stays at its normal size, quiet.

### 8.6 Density
Something is always moving, but only one thing at a time is **important**. A new fact roughly every 2–3 s in the card (measured 2.6 s and ~2 s); a new picture every ~1.6 s in CASE; in full screen, the face is the event and at most one object moves beside it.
- **Variety comes from the data changing,** not from new effects: the same chip, card and bar recipes repeat all reel long. Never add an effect to fill time; add the next fact.
- A stretch with no camera cut may run up to ~10 s **only if** the graphics change at least every 3 s inside it (aw1 2.9–13.4 s).

### 8.7 Assets
Everything in the ledger and widget is drawn in code. Logos only for a named brand or sponsor, real marks, inside a white card. CASE pictures: real archival or period photos fetched from the web (credited in the plan) or pictures you draw; convert to B&W, crush to deep blacks, add grain, and **colour exactly one object** `ledgerGreen` (a mask, glow or redraw over that object), with a slow 2–5% push across the shot. Never a picture that shows something the clause doesn't say. A related-video card uses the creator's real video title and thumbnail. No stock footage, no clip-art, no emoji.

---

## §9 Transitions and stage moves

### 9.1 Library
| ID | Transition | Frames @30 | Recipe | Sound |
|---|---|---|---|---|
| T-01 | **Invisible jump cut** | 0 | A straight cut between takes with identical framing, in the micro-gap before a clause (speech silent 1–3 f before, resumes 1–2 f after). No zoom, no blend | None |
| T-02 | **Caption-led cut** | 0 | The caption swaps 1 f before the picture cut (or on the same frame; pick one per reel) | None |
| T-03 | **Graphic cross-fade** | 3–7 | A text element fades out 3 f while its replacement fades in 3 f; no slide | None |
| T-04 | **Calm arrival** (was the references' back-out pop) | 6–8 | A grey pill at 25–30% scale and low opacity grows to 100% white, expo-out, **no overshoot**; its content sharpens on the last frame | A soft appear |
| T-05 | **Drain + ghost** | ~20 | P-05 | Low soft hit, then a quiet descending tone |
| T-06 | **Shared-element morph** | 8 | The hook cards translate and shrink toward their chip positions with directional motion blur on the fastest 3 f; the old title dims and the new one fades in over the last 2 f; then the rows build (row 1, row 2 +6 f, tracks +10 f) | Calm whoosh |
| T-07 | **Collapse** (widget sections) | 12 | The rows' contents thin to horizontal hairlines and fade (4 f); the cards collapse to thin white lines while the title swaps; two new empty white cards expand vertically (5 f); labels fill later on the spoken words. Rides a jump cut | Paper away |
| T-08 | **White flash** (CASE beats, ≤ 2) | 1–2 | Short: 1 f of white at ~60% over the incoming picture, on the cut. Long: 2 f, ~83% then ~60%. Chrome and the ledger counter stay un-flashed (above the flash layer) | A low soft hit |
| T-09 | **Title fade into story** (CASE) | 6 + cut | The cold-open title group fades out over 6 f, then a hard cut to the first story picture | Story shutter, quiet |
| T-10 | **Hard end / final frame** | 0 | On the last word, or on the pulled-back ledger | Nothing |
| **T-11** | **Shrink into the card** (SM-1) | 10–12 | §3.2 | Calm whoosh (`woosh-2025-08-27-02-12-31-utc-woosh-03` / `-01` / `air-low-woosh`) |
| **T-12** | **Expand to full screen** (SM-2) | 10–12 | §3.2 | A softer, lower whoosh (`woosh-2025-08-27-02-12-31-utc-woosh-02` / `transitionaleleme-ec09-64-3`) |
| **T-13** | **Glide** (SM-3) | 12–14 | §3.2 | `swoosh-2025-01-08-03-02-26-utc-swoosh-02` |
| **T-14** | **Page turn** (section change in LEDGER) | 12 | The finished section lifts like a sheet (a slight 3D curl, 8°) and slides up and away, revealing the next section's empty slots below it; the speaker card stays put | `paper-turn-page` |
| **T-15** | **Pull-back** (SM-5) | 20–30 | §8.5 | A low soft hit at the end (`cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5` or `-6`, quiet) |
| **T-16** | **Travel** | 10–14 | An element flies from where it was to where it belongs (hook object → ledger row, chip → total), scaling as it goes, with a 2–3 f motion trail | A soft swish (`fast-swish-movement-fast-swish-movement` / `swoosh-2025-01-08-03-02-26-utc-swoosh-04`) |

### 9.2 Grammar
| Boundary | Use | Avoid |
|---|---|---|
| Frame 0 | Face full screen, caption on, stopper object by f8 | Black, fade-in, empty canvas, the card |
| Hook → data | **T-11** + **T-16** (the hook objects travel) | A cut to the card |
| Data → opinion / turn | **T-12** | Staying small for an opinion |
| Opinion → data | **T-11** | — |
| Row → row | Activate in place; the ledger follows (§8.5) | Clearing anything |
| Section → section | **T-14** page turn (ledger) / **T-07** collapse (widget) | Hard cut to a new layout |
| Hook → body (widget) | **T-06** morph | A cut to a new layout |
| Story act break (case) | **T-08** (≤ 2 per reel); cold open → story **T-09** | A flash on every cut |
| The turn | A mutation (P-05 drain, P-12 flip, MM-11 strike) after 6–10 f of stillness | A flash or shake |
| End | **T-15** pull-back or **T-10** | A black tail |

**Budget (per 60 s):** jump cuts 16–35, on clause onsets only (one per caption swap or take join); T-06 ≤ 1 (hook → widget); T-07 ≤ 2; T-08 ≤ 2, CASE only; T-11 / T-12 2–4 cycles, never two moves within 1 s; arrivals and cross-fades as many as there are facts. Transitions never delay speech.

### 9.3 Transition map (part of the plan)
```yaml
transitions:
  - {t: 0.00,  id: open,      note: "face full screen; '₹75 L' card beside him by f6",  sfx: appear-enter}
  - {t: 2.10,  id: T-11+T-16, note: "shrink; both cards fly into rows 1–2",            sfx: woosh-2025-08-27-02-12-31-utc-woosh-03}
  - {t: 18.20, id: T-12,      note: "'lekin agar ek salary ruk gayi' full screen",      sfx: woosh-2025-08-27-02-12-31-utc-woosh-02}
  - {t: 21.40, id: T-11,      note: "back to the ledger for the drain",                 sfx: air-low-woosh}
  - {t: 44.10, id: T-12,      note: "'Do you agree?'"}
  - {t: 45.00, id: T-15,      note: "pull back to the full ledger",                     sfx: cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5}
```

---

## §10 Motion language

### 10.1 Easing and timing
| Token | Value |
|---|---|
| Entries | Expo-out `cubic-bezier(0.16, 1, 0.3, 1)`; things decelerate into place and stop dead |
| Moves (stage, travel, camera) | Ease-in-out `cubic-bezier(0.65, 0, 0.35, 1)`; 10–18 f |
| Exits | Ease-in `cubic-bezier(0.55, 0, 1, 0.45)`, 6–8 f, always toward where the thing is going |
| Overshoot | None. The calm comes from objects that know exactly where they're going |
| Motion blur | On anything moving more than ~40 px per frame: a 2–3 f directional trail at 30–50% |
| Rolls | Digits roll vertically with a slight blur, 10–14 f, ending on the number's last syllable |
| Fills | Bars, pipes and meters fill in 12–16 f, expo-out; the last 2% settles over 6 more frames (alive while holding) |
| Text | Words rise 6 px and fade in, 2 f stagger; never typewriter, never letter-by-letter |
| Stillness | Before a turn: 6–10 f where nothing new arrives |
| List stagger | 3–5 f between siblings (chips, tabs, seats) |
| Knob slide | 4–7 f with a short motion trail, leaving a filled track behind |
| Timeline draw | ~18 f, left to right |
| Blocks | ~1 block per frame, left to right, sliced out of the bar |
| Strike-through | A pen line drawn across the belief in 5 f, on the result card's last frame |
| Chevron cascade | One ⌄ every 5 f |
| Dotted arrow | Writes on in ~10 f, then sways 1–2 px every ~4 f |
| Wordmark | Per word 0 → 100% over ~6 f, the next word +2 f; group fade-out 6 f |
| Canvas drift | The light blob moves a few px per second; dust drifts slowly; never pulses |
| Exits | Only at section changes (T-07, T-14) or the end; otherwise everything holds |
| CASE pictures | A slow push or drift of 2–5% across each shot; moving light, smoke or rain inside it |

### 10.2 Continuity (D3: nothing is born from nothing)
Every element, before it appears, has an answer to **"where did it come from?"**:
- **From the hook object** (it travels into its row).
- **From the element before it** (a total grows out of the chips it sums; a result card rises out of the belief value; blocks are sliced from the bar).
- **From its slot** (an empty seat, a grey tab, a dashed outline that was already waiting).
- **From the speaker** (a card that slides out of the speaker card's edge when he names it).
- **From the edge in the direction of the story** (time comes from the left, money flows down, the future is to the right).
And every element, when it leaves, goes **somewhere that means something** (into the total, off the page with the turn, into the ghost outline).

### 10.3 Timing to the voice
- The element starts moving 2–4 f before the word, and **lands on it**.
- A move between stages starts on a word boundary and settles before the next stressed word.
- A judgement (tag, strike, ✓) lands 3–6 f after the fact it judges, in the breath after the word.
- If he speaks fast, merge two arrivals into one move rather than rushing two.

### 10.4 Layer order (back to front)
1. Canvas (gradient, blob, dust)
2. CASE pictures
3. Ledger / widget / machines
4. Speaker (card or full screen) and its border
5. Hook objects and their scrim (full screen only)
6. Caption
7. Flash layer (CASE)
8. Chrome (case counter, ledger counter)

### 10.5 Finishing
No grain, no vignette, no bloom in LEDGER and WIDGET. Soft shadows under white cards only. CASE pictures keep grain and deep blacks; the speaker there keeps full colour with deep blacks and a green rim, never pale (§4.4). Check every on-screen word and number against the script and the maths.

---

## §11 Sound (D4)

**No music bed, ever.** Sound is SFX only (the creator's direction, 12 Oct 2026): never a music track, bed, drone or loop under the voice.

### 11.1 The palette (calm, tactile, premium)
| Role | When | Pool (ids from SOUNDS.md; rotate) | Level vs voice |
|---|---|---|---|
| **Appear** | A card, a value, a hook object arrives | `appear-enter`, `hint-appear-2025-08-27-02-25-12-utc-hint-appear-02`, `ui-opening`, `game-pop-up-2025-08-27-06-39-58-utc-game-pop-up-3` | −22…−26 dB |
| **List / tick** | Chips, rows, seats filling, tabs | `0552611` → `0552621` → `0552631` (a rising 3-step set), `selection-click`, `ui-click`, `click-click`, `digital-click` | −24…−28 dB |
| **Paper** | Page turns, peels, receipts, a section leaving | `paper-turn-page`, `paper-away` | −20…−24 dB |
| **Pen** | Strikes, underlines, circles | `objects-drawing-board-marker-on-paper-drawing-line-long-01-vadi`, `objects-drawing-board-marker-on-paper-drawing-line-medium-length-02-vadi`, `objects-drawing-board-marker-on-paper-drawing-circle-04-vadi` | −20…−24 dB |
| **Money** | A value lands, a saving, a transfer | `money-2`, `coin-flip-sfx-coin-flip`, `shine-collect`; `cash-machine-2025-02-19-03-33-58-utc-cash-machine` only for one big money reveal | −18…−24 dB |
| **Right / win** | The ✓, the better option, the resolved row | `accept-flicker`, `correct-sfx`, `05405-shine-ding`, `short-shine-2025-08-27-06-45-01-utc-short-shine-2` | −20…−24 dB |
| **Cost / wrong** | The drain, "costs more", the trap | `interface-love-down`, `wrong-answer` (quiet), `abstract-hit-sub-bass-07` | −18…−24 dB |
| **Time** | Years passing, EMIs, the scrubber | `clock-2025-08-27-06-56-42-utc-clock-2` (trimmed), `selection-click` per tick | −26 dB |
| **Move** | Stage moves, travel, glides | `woosh-2025-08-27-02-12-31-utc-woosh-01` / `-02` / `-03` / `-04`, `air-low-woosh`, `light-woosh-7119`, `swoosh-2025-01-08-03-02-26-utc-swoosh-02`, `transitionaleleme-ec09-64-3`, `fast-swish-movement-fast-swish-movement`, `zoom-2025-05-09-19-11-57-utc-zoom-5` | −18…−24 dB |
| **Weight** | The turn, the biggest number, the pull-back | `abstract-hit-sub-bass-07`, `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5`, `-6`, `impactfadeinout-tfx2697` | −14…−20 dB |
| **Data** (WIDGET) | Odometers, meters | `digital-text-2026-05-18-01-34-24-utc-digital-text-02` (trimmed, very low), `data-woosh` | −28 dB |
| **Story** (CASE) | Cuts between pictures, flashes | `camera-shutter-2025-02-19-17-59-23-utc-dslr-camera-shutter-v2` (quiet), `classic-camera-focus-and-shutter-ohmlab`, `abstract-hit-sub-bass-07` | −22…−26 dB |

**Never in this style:** meme sounds, cartoon boings, risers that scream, glitches, alarms, record scratches, laughter, "ka-ching" more than once.

### 11.2 The SFX ledger (the rule from Creator's playbook, unchanged)
Every reel has its sounds in `plan/sounds.json` and a **ledger** in the plan: file → uses → times.
- **Any file at most 2× in a reel.** The one exception is the **list cue**: one file chosen to mark item 1, 2, 3… (here usually `paper-turn-page` or the 0552611/21/31 set), used once per item.
- **No file on two consecutive cues.** Rotate within the pool.
- **Density:** about one cue every 1.2–1.8 s on average. Every cue belongs to a picture: an arrival, a move, a judgement. Plain jump cuts get nothing.
- **Never more than two cues overlapping.** Never on a consonant of the word it illustrates.
- In this style the cues are **quiet and tactile**: the viewer should feel them more than notice them. If one makes you look up, it's too loud.

### 11.3 No music bed
- No music bed, ever: this style is scored with sound effects only. The voice and the SFX carry the reel.
- **Before the turn:** go silent (no new SFX) for 0.5–1 s, then land the turn's weight hit.
- **End card** (E-1 with a related-video card): 0.3–0.4 s of near-silence before the cut, then one deep **sub-bass boom** (50–80 Hz body, nothing above ~4 kHz) on the card, peaking around −12 dBFS and decaying over ~3 s (`abstract-hit-sub-bass-07` or a cinematic low hit).

### 11.4 Mix
Voice chain (high-pass 80 Hz, de-ess, light compression): the references' voice is tight and evenly compressed (LRA 4.4–6.9 LU). Normalise to −14 LUFS integrated, true peak ≤ −1 dBTP (two references peaked at +0.1 dBTP and one sat at −18.1 LUFS: never again). The voice is always the loudest thing.

---

## §12 Footage handling
Re-measure on sampled frames for every new shoot.

### 12.1 Setups
| Setup | Description | Best look |
|---|---|---|
| **A: Tripod MCU** (house) | Locked-off, eye level, head and upper chest, ~35–50 mm feel, a real room behind (shelves, a practical lamp, a plant) | All three |
| **B: Selfie handheld** | Front camera at arm's length, drifting | LEDGER or CASE: the card crop steadies it; full screen only in the hook and on short turns; never full frame under the WIDGET |
| **C: Tripod wide** | Waist-up or wider | WIDGET after a face-centred crop to MCU, or a card look |

### 12.2 Crops (starting values)
| Where | Placement |
|---|---|
| Full screen (hook, turns, ending) | As shot, face-centred, eye line ≈ y 700–800, face ≈ 30–40% of the width; from 720-wide footage keep the native framing (no crop past ~1.2×). Never punch in to "fix" a framing. Hook objects sit beside the face (left or right third) or above the head, never over it |
| LEDGER card | A 16:9 face-centred crop scaled into x 111–967, y 76–564; head top ≈ y 110, eye line ≈ y 228, face ≈ 50% of the card height. From vertical footage, crop the head-and-shoulders band (~1.2× from 720-wide sources: keep it sharp, never add a punch on top) |
| WIDGET | Full frame, scaled so the head top ≥ y 784, eye line ≈ y 1010–1030, face centre x 540, face width ≈ 290 px; shoulders leave both edges by y ≈ 1350 |
| CASE card | A 16:9 crop into x 56–1020, visible y ≈ 990–1530, the top 150–200 px feathered into the glow; face width ≈ 170 px, eye line ≈ y 1160; the green-cast grade |

If a selfie is shaky, keep its full-screen moments short and give the long data sections to the card. **A tight selfie still goes in the wide 16:9 card:** frame the card on his face (head-and-shoulders band), the footage filling the card; if the head would be cut, make the card taller rather than shrink the footage over a blurred copy of itself; never switch to a narrow tall card, which makes him small. If a tight selfie puts the hair where hook objects sit, move the object beside the face rather than over the head.

### 12.3 Matte, frame rate, audio
- No matte: this style never cuts the speaker out, never puts graphics behind him, never composites clones.
- The references are 25 fps; their measured frame counts are marked "@25" where they appear. Conform variable-frame-rate phone footage to constant before editing.
- One clean voice track, the chain in §11.4.

---

## §13 Output contract

### 13.1 The plan (the edit brief)
The plan follows the edit skill's pattern: the one idea and the spine, the hook second by second, every beat with its picture, words, moves and sounds, the sound ledger, and your attack on your own plan. In this style, also write:
- the **stage** and why;
- the **speaker map** (full / card per beat) and its moves;
- the **end frame** (what the pulled-back ledger shows);
- for every element, **where it comes from** (§10.2).

### 13.2 Beat sheet schema (the first ```yaml``` block)
```yaml
- id: 7
  section: ROW-2                   # HOOK | SETUP | ROW-n | RACE-n | BEAT-n | TURN | TAKEAWAY | END
  stage: LEDGER                    # LEDGER | WIDGET | CASE
  speaker: card                    # full | card
  move: null                       # T-11 | T-12 | T-13 | T-14 | T-15 | T-16 | null
  spoken: "Doosra, Context7 — latest documentation, har library ka."
  caption: ["Second, Context7:", "the latest documentation"]
  trigger: "Context7"
  onset_s: 19.3
  spine: "seat 2 fills: 'the researcher' → Context7"
  element: "row 2 title fades up out of its grey slot; MM-11: 'old docs' grey, white 'latest docs' card rises out of it, pen strike"
  comes_from: "the waiting seat 2; the truth card rises out of the belief value"
  motion: "title 6 f rise; card 8 f expo-out; strike 5 f"
  adds_or_mutates: adds            # adds | mutates (the data layer accumulates; the turn mutates)
  judgement: "pen strike on 'old docs', 4 f after the card lands"
  end_state: "seats 1–2 filled, 3–5 waiting"   # what the screen summarises after this beat
  sounds: [{id: paper-turn-page, at: 19.24, role: list-cue}, {id: objects-drawing-board-marker-on-paper-drawing-line-medium-length-02-vadi, at: 20.10}, {id: appear-enter, at: 20.16}]
```

**Hook proposals (3, in the plan):**
```yaml
- name: "Two-bar paradox"
  formula: HF-1 + HF-5
  stage: LEDGER
  frame0: "face full screen mid-word, caption 'My wife Ruchi earns ₹75 lakhs a year.', '₹75 L / Ruchi' card arriving beside him"
  first_3s: "f2 ₹75 L card · 2.0 ₹50 L card + true-length bars · 2.9 shrink, both travel into rows · 3.1 RUNS THE HOUSE under the smaller bar"
  captions: ["My wife Ruchi earns ₹75 lakhs a year.", "I earn ₹50 lakhs."]
  why: "Real numbers in 2 s, the paradox at 3 s, and the summary has already started"
```

### 13.3 The sound ledger (in the plan)
```text
paper-turn-page          ×5  (list cue: rows 1–5)
appear-enter             ×2  0.12, 20.16
objects-drawing-board-marker-on-paper-drawing-line-medium-length-02-vadi ×2  20.10, 31.40
woosh-2025-08-27-02-12-31-utc-woosh-03   ×1  2.10
cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5   ×1  45.00 (pull-back)
...
```

### 13.4 What to show the creator
The storyboard (the edit skill's step) with the hook frames, one shrink mid-move, one money machine mid-action, the turn, and the final pulled-back frame. Let the frames do the talking.

---

## §14 Worked examples

### 14.1 An argument ledger (from aw1, rebuilt in v2)
**Spine:** two salary pipes feeding one house. **Stage:** LEDGER, teal. **Ending:** E-1.
| t (s) | Spoken (gloss) | Speaker | Picture | Sound |
|---|---|---|---|---|
| 0.0 | "My wife Ruchi earns ₹75 L a year." | full | CS-1: a white card beside his face, "₹75 L / Ruchi" rolls in | `appear-enter` |
| 2.0 | "I earn ₹50 L." | full | CS-2: "₹50 L / me" beside it; thin true-length bars grow under both | `money-2` |
| 2.9 | "But the house runs on my salary." | full → card | **T-11**; both cards **travel** into rows 1–2 as full bars; "RUNS THE HOUSE" tag draws under the smaller one | `woosh-2025-08-27-02-12-31-utc-woosh-03`, `selection-click` |
| 4.4 | "School fees, food, electricity, water…" | card | MM-1: a pipe from his bar splits into four outlets that fill on each word | `0552611` `0552621` `0552631` + `selection-click` |
| 9.4 | "Most of hers goes into investments." | card | "INVESTED" tag; her pipe runs into a small MM-6 stack | `coin-flip-sfx-coin-flip` |
| 15.2 | "₹1.25 crore together." | card | The total card grows out of the two bars' ends meeting | `shine-collect` |
| 18.2 | "But what if one of our salaries stopped?" | **full** | **T-12**; the ledger dims behind; then silence (no new SFX) until the turn | `woosh-2025-08-27-02-12-31-utc-woosh-02` |
| 21.4 | "The fees won't halve. The EMI won't stop." | card | **T-11**; stillness 8 f; then MM-2: his bar drains, the red ghost stays, the outlets go grey one by one | `abstract-hit-sub-bass-07`, `interface-love-down` |
| 28.0 | "That is the truth of double-income families today." | full | **T-12**; a single takeaway line above his head: "both incomes are load-bearing now" | `hint-appear-2025-08-27-02-25-12-utc-hint-appear-02` |
| 38.1 | "When only one person worked, the second was the safety net." | card | **T-11**; MM-8 balance scale settles | `objects-drawing-board-marker-on-paper-drawing-line-medium-length-02-vadi` |
| 44.1 | "Do you agree?" | full | **T-12** | — |
| 45.0 | — | — | **T-15** pull-back: the whole ledger with his card at the top | `cinematic-hits-2025-02-19-18-27-16-utc-cinematic-hit-5` (quiet) |

### 14.2 A loan race (from aw3, rebuilt in v2)
**Spine:** two loans racing year by year. **Stage:** WIDGET. Open full screen with CS-3 (the two option cards above his head, "Cheaper?" on 8%), T-06 morph into the race rows; every "N saal baad" moves the knob with a `selection-click` and rolls the odometers; at "lekin 8 saal mein" the screen holds 8 f, then the "Costs more" tag **travels** from the 11% row to the 8% row (T-16, `interface-love-down`); "How did this happen?" full screen (T-12, then silence: no new SFX); back for the mechanism blocks sliced out of the bars (`paper-away` as the bars slice); the insurance analogy via T-07; the sponsor or keyword card in the kit; end on the pulled-back widget.

### 14.3 A numbered myth-vs-maths ledger (from aw2, rebuilt)
**Spine:** five tabs that turn white one by one, each row a belief struck out by the truth. **Stage:** LEDGER, maroon (being cheated). **Devices:** SD-1 skeleton, SD-2 tab progress, SD-3 row grammar. **Ending:** E-2, the finished cheat sheet. List cue: `paper-turn-page` on each OFFER.
| t (s) | Spoken (romanised) | Caption | Speaker | On screen | Move / sound |
|---|---|---|---|---|---|
| 0.00 | "Paanch tareeke ye online offers…" | "These 5 online offers cheat us." | full | Hand up, five fingers; a giant translucent "5" arrives beside his face | `appear-enter` |
| 1.28 | "…humein cheat karte hain." | — | full → card | The "5" splits into OFFER 1–5 tabs + numerals 1–5 as he shrinks | **T-11** + `woosh-…-woosh-03` |
| 2.44 | "Ek offer hoga 30% off, another 20% off" | "One offer will be 30% off, another 20% off." | card | OFFER 1 white; "30% + 20% off / Stacked discounts"; MM-4 tag with the claim | list cue |
| 4.72 | "humein lagta hai 50% off mil raha hai" | "We think we're getting 50% off." | card | "50% / you think" in grey | `selection-click` |
| 7.44 | "actually calculate karenge toh 44% off hi hai" | "If you actually calculate, / it's only 44% off." | card | The tag **peels** to "44% / you actually get"; pen strike on 50% | `objects-drawing-board-marker-on-paper-drawing-line-medium-length-02-vadi` + `appear-enter` |
| 8.44 | "Buy two get one free…" | "Another offer says buy 2 get 1 free." | card | OFFER 2; "Buy 2 get 1 free / Useful only if you need 3" | list cue |
| 13.60 | "…aapka bill double ho gaya" | "your bill doubled." | card → full | "2x / bill if you needed 1", strike "1 free"; then full screen for the reaction, ledger dimmed behind | `money-2`; **T-12** |
| 14.16 | "Teesra offer: 10% cashback…" | "The third offer…" | full → card | OFFER 3; "10% cashback / On ₹20,000"; "₹2,000 / you think" | **T-11**; list cue |
| 22.16 | "…toh 10% ab 2.5% hai" | "So that same 10% is now 2.5%." | card | "2.5% / capped at ₹500"; strike "₹2,000" | `objects-drawing-board-marker-on-paper-drawing-line-medium-length-02-vadi` |
| 23.04 | "Free delivery above ₹999…" | "The fourth offer…" | card | OFFER 4; "Free delivery / Above ₹999"; MM-3 receipt prints "₹50 saved?" | list cue |
| 30.96 | "₹99 kharch kiye ₹50 bachaane mein" | "You basically spent ₹99, / to save ₹50 on delivery." | card | The receipt total underlines itself: "₹99 / spent to save ₹50"; strike "₹50" | pen stroke |
| 33.80 | "Aur paanch: ₹500 ka voucher…" | "And the fifth one, / you get a ₹500 voucher," | card | OFFER 5; "₹500 voucher / Min. spend ₹2,500"; "₹500 / saved, you think" **in the belief column** | list cue |
| 37.92 | "Toh aapne ₹500 nahi bachaye…" | "So you didn't save ₹500," | full | Full screen for the punchline; silence (no new SFX) | **T-12** |
| 38.48 | "…aapne ₹2,500 kharch kiye" | "you spent ₹2,500." | — | **T-15** pull-back: the finished ledger, "₹2,500 / what you actually spend" lands, strike "₹500" | `abstract-hit-sub-bass-07` (quiet) |

### 14.4 What the references teach
Ledgers that never clear, data that mutates instead of being replaced, every number on its word, captions that never compete. What this edition adds: the face first, the move, the travel, the machines, and a score.
| Reel | Look | Learn from it | Don't copy |
|---|---|---|---|
| aw1 two incomes | LEDGER (argument) | Proportional bars, role tags, chip grid, total card, data death, the rewriting takeaway line, the related-video end card + boom | A 10.5 s stretch with no cut (it works only because the graphics keep changing) |
| aw2 5 offers | LEDGER (numbered) | Skeleton first, tab progress, myth → maths rows, the strike on the result, ending on the finished cheat sheet | Row 5's belief value out of its column; +0.1 dBTP |
| aw3 8% vs 11% loan | WIDGET | Option cards → morph → race widget, knob + odometer on every spoken year, the "Costs more" tag jumping rows, mechanism blocks, collapse into an analogy, the sponsor card in the kit | −18.1 LUFS; a primed tag landing before its word (follow the voice) |
| aw4 money doesn't behave | CASE | One noir picture per clause with one green object, case chrome + running ledger, two white flashes only on story beats, the episode wordmark cold open, the unresolved series ending | Grey dots vanishing on light pictures; +0.1 dBTP |

---

## §15 Look at your frames
Not a checklist; the questions a great editor asks while scrubbing:
- **Frame 0, sound off:** would a stranger stop? Is there a face and one number that doesn't add up?
- **Their video and every picture:** full screen, or in a designed box it fills on the style's own ground? Never a sharp rectangle (footage, recording, landscape clip, photo) over its own blur, never blurred side bars, never a card on their blurred frame?
- **Every move:** did something appear from nowhere? Could it have come out of what was already there?
- **Every number:** can I see it at its true size, landing as he says it?
- **The turn:** does the screen go still before it, and does the change happen *to* the thing?
- **Calm:** does any frame look like a hype reel (bounce, shake, sticker, neon)? Take it out.
- **Craft:** face clear, no text on text, sounds on their pictures.
- **The last frame:** would someone screenshot it?

---

## §16 Build + render
- **Pipeline:** the plugin's edit skill: plan, draw every frame in `reel.js` (`frame(t)`), look at stills, score (`plan/sounds.json`), storyboard, render.
- **Fonts:** Poppins (Regular, Medium, SemiBold, Bold, ExtraBold), bundled. Pre-paint ₹ ✓ ⌄ before the first frame.
- **Helpers you'll want in `reel.js`:** `Canvas(theme)`, `Speaker(t)` (full ↔ card interpolation from the speaker map), `Scrim`, `Sub`, `Roll(from,to,t0,f)`, `Fill(t0,f)`, `Travel(fromRect,toRect,t0,f)`, `LedgerCam(t)` (follow / lean in / pull back), the families (`BarRow`, `Chip`, `Tag`, `ResultCard`, `Takeaway`, `Tabs`, `RaceRow`, `Scrubber`, `Blocks`) and the machines (`Pipe`, `Drain`, `Receipt`, `Peel`, `Meter`, `Stack`, `Bucket`, `Scale`, `Seats`, `Calendar`, `Strike`), and per look: `SpeakerCard(rect, grade)` (16:9 face-centred crop, border or top feather, black bottom gradient), `Numerals`, `Odometer`, `Pill`, `WidgetTitle`, `NoirShot(img, accentMask)`, `CaseChrome`, `LedgerCounter`, `Wordmark`, `Morph`, `Collapse`, `Flash`. All pure functions of t.
- **Final:** 1080×1920, H.264, AAC, −14 LUFS; check a contact sheet of the final file.

---

## Appendix A. Evidence map (where each house rule comes from)
| Rule / element | Reels |
|---|---|
| Three data looks from one set and one caption system | aw1, aw2 (ledger), aw3 (widget), aw4 (case) |
| Plain translated subtitles, Poppins Regular, white, no box, hard swap | 4/4 |
| Caption leads the cut by 1 f / on the same frame | aw3, aw4 / aw1, aw2 |
| Locked speaker, never zoomed, jump cuts only; pauses cut, 3.6–4.9 words/s | 4/4 |
| Every number lands on its word | 4/4 (aw4 via the ledger counter) |
| Accumulating data layer, change by mutation | aw1, aw2, aw3 |
| Proportional data | aw1 (bars), aw3 (blocks, race) |
| Skeleton first + tab progress | aw2 |
| Red = loss, green = gain | aw1, aw3, aw4 |
| One green accent + white flashes on beats | aw4 |
| Fixes: true peak, row columns, chrome on a scrim, follow the voice not the caption | aw2/aw4 (+0.1 dBTP), aw2 (row 5), aw4 (dots), aw3 (caption order) |
| Speaker moves full screen ↔ card, a face and a number at frame 0, sound scored with the ledger rule, the whole face always in frame, calm not flashy | **The creator's directions, 11 Oct 2026 (D1–D7)** |
