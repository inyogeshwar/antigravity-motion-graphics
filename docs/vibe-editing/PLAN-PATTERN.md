# The plan: `P/plan/edit-brief.md`

The edit brief is the single, final plan: the reel is built from it exactly, and a fresh session could build it from the
brief alone. It is long because the reel is decided in it: a 60-second reel's brief runs to 20–30 KB, a 15-second one is
shorter but just as complete. Every beat is a full block, never a one-liner. PLAN-EXAMPLE.md is a real one (Reel 10).

```markdown
# Edit Brief: <reel title> (CTA keyword: <KEYWORD or none>)
You are the editor and motion designer. This brief is the single, final plan; execute it exactly.
Read first: the playbook (PB). This brief wins on conflicts; deviations are marked (dev) with a reason.
Ground truth: the footage (the words with their timings). A script is a reference only (spellings, keyword, deliverable).

## 1. Inputs and footage facts
| Item | Value |   (length and frames, setup: tripod / selfie / screen, background, what was said vs the script, keyword)
### 1.1 Framing            (face centre, head top, eye line, chin from the footage; where the person moves)
### 1.2 Crop values        (scale / left / top of the person in every screen mode; plate placement + blur per mode)
### 1.3 Layout constants   (banner, stage / graphics zone, caption zones per mode, cards, behind-the-person layer)
### 1.4 Cut-out            (the seconds that need the person cut out: hook, depth moments; everything else uses the footage)

## 2. Transcript, segmentation and line classification
| Act | Time | Line (as spoken) | Type | Tone | Trigger @ onset |
Every line: its act (hook, loop, items, aside, joke, payoff, CTA), its type (roast, count, risk → fix, comparison, tool,
promise, joke, CTA…), its tone (hype, mock, warn, explain, win, awe, cta) and the word the viewer would underline, with
the second it lands. Then **Deviations from the written script** (the footage wins) and promises the reel must keep.

## 3. Theme, spine, signature moves (one line of reasoning each)
- **Worlds:** where each section lives, and where the reel escalates.
- **Spine:** the one idea that runs through this reel: born in the hook, reacting at every point (with the exact seconds),
  paying off before the CTA. Every reel gets its own.
- **Machines:** for each point, the small scene that *does* what is being said (what moves, how, what it proves).
- **Signature moves:** the 6–10 moments only this reel has.
### 3.1 Section headlines   | Section | Marker | Title | Treatment | Timing |

## 4. Hook (one evolving object): second by second
| t | Spoken | Visual | Caption | Camera | SFX |   one row per change; frame 0 is already moving and promising

## 5. Beat sheet (YAML). It MUST be the brief's FIRST yaml code block: a top-level list with integer ids 1..N in time
## order (the storyboard reads it). Fields: id, section, spoken, trigger, onset_s, start_s, tone, mode, pattern, family,
## visual, on_screen_text, transition_in, transition_out, sfx.
- {id: 1, section: HOOK, spoken: "...", trigger: "...", onset_s: 1.10, start_s: 0.00, tone: hype, mode: HOOK,
   pattern: "<the playbook's move ids>", family: "<its B-roll family>",
   visual: "<a full sentence: what is on screen, what moves and how, where, and what it proves>",
   on_screen_text: ["...", "..."], transition_in: <move>, transition_out: <move>, sfx: ["<sound id>", "<sound id>"]}
### 5.1 Assets   (fetched from the web, with where from; the creator's own; built live)

## 6. Modes and transitions
| Range (s) | Mode | In | Out |   plus the zooms (which, at which second, never the same twice in a row), the item-swap
move, the memes (which, in which speech gap, once each) and the CTA plan.

## 7. Fixed decisions
Output (storyboard 30 fps, final 60 fps); the sound ledger (the one list sound, every other file at most twice, never the
same file twice in a row, memes once); the music bed (which, where it enters, how far under the voice, where it drops
out); fonts; anything the creator asked for in their brief ("when I say X, show Y") and where it lands.

## 8. Build, checkpoint, render
The stills to check (one per beat, plus each signature move frame by frame); the storyboard; after approval the 60 fps
render, the sound and the mix.

## 9. Ambition review
Five honest lines on the plan above: where it plays safe, which tools went unused (depth behind the person, zoom-through,
match cuts, morphs, the split, the crash zoom), whether the climax is the biggest moment, any beat there only to fill
time. Then what you upgraded (the plan above already carries the upgrades).

> Revision N (date): what changed, with times. Overrides the matching parts above.
```
