# Drawing the reel

You draw the whole reel yourself, as HTML, one frame at a time. Two files: `P/plan/kit.js` (your helpers: `veos kit
start` puts this style's kit there, or the starting kit) and `P/plan/reel.js` (this reel: its sections and timeline).
`veos page` puts them in one page with the reel's data; `veos stills`, `veos storyboard` and `veos render` capture it in
headless Chrome. Anything HTML, CSS, SVG or canvas can do, you can draw: there is no component library and no ceiling.

## What the page gives you
| Name | What |
|---|---|
| `CFG` | `{W: 1080, H: 1920, FPS: 30, OUT_FPS, NF, N}`: footage fps, output fps (30 storyboard, 60 final), frame counts |
| `FPS` | 30, the design / footage rate: time every animation in these frames |
| `WORDS` | `[[start_s, end_s, text], ...]`: every word in edit seconds, your fixes applied (hidden words left out) |
| `BEATS` | no-voice reels: `{beats, bars, sections, hits, bar_energy}` in edit seconds; otherwise `null` |
| `FOOT(n)` | URL of footage frame `n` (1080×1920 jpg) |
| `CUT(n)` | URL of the person cut out at frame `n` (transparent webp), or `null` where there is no cut-out |
| `FACE(n)` | the face box at frame `n` `{x, y, w, h, cx, cy}`, or `null` |
| `FACE0` | the reel's steady face `{x, y, w, h, cx, cy, head_top, chin}` (median), for crops and layout |
| `ASSET(name)` | URL of `P/plan/assets/<name>` (file stem or full name): logos, screenshots, the creator's images |
| `VIDEO(name, t)` | URL of the frame at local time `t` of a video asset (`veos asset add <clip> --name <name>`) |
| `VB` | set it to a px value in a frame to give wrappers with `filter:url(#vb)` a vertical motion blur |
| fonts | every bundled family, by name in CSS: Inter Tight, Plus Jakarta Sans, Anton, Instrument Serif, Permanent Marker, Montserrat, Jost, Silkscreen, Lilita One, JetBrains Mono, Poppins, EB Garamond, Source Serif 4, Space Grotesk, Pinyon Script, Barlow Condensed, Barlow Semi Condensed, Bangers, Archivo Black, Caveat, Nanum Pen Script, Unbounded, Bodoni Moda, Courier Prime, Fraunces, Noto Sans / Serif Devanagari, Noto Sans Telugu, Tamil, Kannada, Malayalam, Bengali, Gujarati, Gurmukhi, Noto Color Emoji |

The page calls `frameHTML(n)` with the OUTPUT frame `n` and shows what it returns inside a 1080×1920 `#root` (classes
`.L` = full-frame layer, `.A` = absolute, `img.sp` = footage image). The starting kit's `frameHTML` computes
`t = n / CFG.OUT_FPS` and the footage frame `fn = floor(t × 30)`, finds your section in `SEGS` and adds the punch
settles (`CUTS`), shakes (`SHAKES`) and light-leak flashes (`FLASHES`). Define those in reel.js, or your own
`frameHTML(n)`.

## The starting kit (kit.js)
Easing (`EO`, `EI`, `EIO`, `BO`, `bez`), `V(t, t_in, t_out, {in, out})` (appear / disappear: blur, pop, hpop, grow,
rise, drop, stamp, fade; out: blur, knock, collapse, hexit, up), `D` / `AD` / `G` (place an element, an animated
element, an animated group), `svgL` + `drawPath` (draw-on paths), `tw` (exact text width), `stage`, `spFull` /
`spPlate` (the person: punched in about the face, cut out, over a plate), `CK` / `CH` / `CB` (keyword caption, hook card,
body caption), `chunks` / `SUB` (subtitles from `WORDS`), `flashO`, `HASH` (deterministic "random"), `rgba`, `lerp`,
`cl`. `ACC` / `ON` are the accent and its text colour: set them from the playbook in reel.js (`ACC = '#FCF700';`). A
playbook that already has a kit (saved from its last approved reel) gives you its helpers instead: its banner, its
stamp, its captions. Change, add or delete anything in kit.js; nothing checks how you use it.

## Rules that save rework
- **A pure function of the frame.** Everything animates from `t` (or `n`). No `Math.random` (use `HASH`), no `Date`,
  timers, CSS animations or transitions, `<video>` or `fetch`. Images only through `FOOT`, `CUT`, `ASSET`, `VIDEO`.
- **One function per section** (`hook(t, n)`, `item(t, n)`, `cta(t, n)`…) composed in `SEGS = [[start_s, end_s, fn]]`;
  section boundaries are the cut times. `n` inside a section is the footage frame; use `t` for everything else.
- **Times come from the words:** start a pop on its word (onset − 2 frames); land a hit on the frame the word lands.
  A transition peak sits on a real frame: the cut frame is `ceil(t × 30)`.
- **Morph, don't replace:** interpolate positions, sizes, radii and colours between states so things transform.
- **Camera moves** are a transform on a full-frame wrapper (`transform-origin` = the point of interest); the person in a
  panel is the footage scaled into a clipped box; depth (graphics behind the person) is a layer drawn before `CUT(n)`.
- **Text:** measure with `tw()` after fonts load; inline-block caption words need the line's font size set (or spaces
  collapse); keep big words inside x 64–1016 and clear of the face where it matters (`FACE(n)`, `FACE0`). A caption
  crossing the chin for a beat is fine; a head chopped by a window edge is not.
- **The footage is full screen or in a box, never in its own blur.** The creator's video either fills the whole frame
  edge to edge, or sits inside a designed box (rounded corners, a rim or soft shadow) on the style's own ground or
  graphics, filling that box completely. Never shrink the video inside the frame over a blurred or darkened copy of
  itself, never fill a band or box with blurred side bars, and never set a card on a blurred copy of the same footage:
  that hard rectangle against its own blur looks cheap. The same goes for any footage or picture (a screen recording,
  a landscape clip, a photo): it fills the frame (crop to the part that matters, or push in) or sits in a box on the
  style's ground, never over its own blur. (A matte cut-out of the person over a plate is fine; it has no box edge.)
- **Tight selfies:** a handheld close-up often puts the hair where the banner or top text sits. Keep the video full
  screen and move the text (lower, smaller, or into the scene), or, when the whole head must be seen, use a box layout
  on the style's ground where the head fits. Hair may touch the top edge on full screen; eyes to chin are always in.
- **Glyphs:** ₹ ✓ ⚠ emoji and Indian scripts work; the page warms up every character your code and words use.
- **Kit and reel share one scope:** reel.js assigns the kit's `let` values (`ACC = ...`) and never re-declares a name
  the kit declares; it may replace a kit function by declaring a function of the same name.
- **Keep it light:** a few hundred elements on screen at most; build big constant strings once, outside the frame
  function.
- **If the page fails to load,** `veos stills` / `veos render` report the error with its line: fix it in reel.js or kit.js.
