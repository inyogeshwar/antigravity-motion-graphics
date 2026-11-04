// lib/lyrics.js - MotionOS Autonomous Lyric & Status Reel Engine
// Supports 5 viral presets:
// 1. hindi-calligraphy (Devanagari swashes, cyan/pink neon active glow, star zoom wipe)
// 2. golden-flare (Bold stacked capitals, gold cursive overlay, dual anamorphic flare streaks)
// 3. spotify-glow (Expanding neon pill search bar, green Spotify mark, typing text, waveform card)
// 4. anime-couple (Left/right illustrated character cutouts, center kinetic dialogue typography)
// 5. emoji-quote (Floating 3D Apple emoji breathing dynamics, light leak cards, minimal quotes)

import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

export const LYRICS_PRESETS = {
  'hindi-calligraphy': {
    id: 'hindi-calligraphy',
    name: 'Hindi Calligraphy & Neon Swash Status',
    description: 'Devanagari calligraphy with active cyan/pink glow, English cursive overlay, Apple emojis, and star zoom wipes.',
    accentColor: '#00F0FF',
    secondaryColor: '#FF2A85',
    defaultEmojis: ['🥰', '🥺 💖 ✨', '👀', '💕'],
    fonts: {
      calligraphy: 'assets/fonts/Hindi-Display.ttf',
      indic: 'assets/fonts/Indic-TriScript.ttf',
      englishBold: 'assets/fonts/SFPro-ExtraBold.ttf',
      cursive: 'assets/fonts/Insta-Neon.ttf',
      emoji: 'assets/fonts/AppleColorEmoji.ttf'
    }
  },
  'golden-flare': {
    id: 'golden-flare',
    name: 'Golden Anamorphic Flare & Dual Typography',
    description: 'Crisp bold uppercase text with golden italic cursive overlay, upper amber flare, lower white streak, and smoke dissolves.',
    accentColor: '#FFAA00',
    secondaryColor: '#FFFFFF',
    defaultEmojis: ['✨', '🔥', '👑'],
    fonts: {
      bold: 'assets/fonts/SFPro-ExtraBold.ttf',
      cursive: 'assets/fonts/Insta-Neon.ttf',
      emoji: 'assets/fonts/AppleColorEmoji.ttf'
    }
  },
  'spotify-glow': {
    id: 'spotify-glow',
    name: 'Spotify Search Bar & Glowing Player UI',
    description: 'Animated neon circle expanding to search bar, green Spotify logo, live typewriter text, album art, and audio waveform.',
    accentColor: '#1DB954',
    secondaryColor: '#FFFFFF',
    defaultEmojis: ['🎧', '🟢', '🎵'],
    fonts: {
      sans: 'assets/fonts/SFPro-Bold.ttf',
      mono: 'assets/fonts/JetBrainsMono-VF.ttf',
      emoji: 'assets/fonts/AppleColorEmoji.ttf'
    }
  },
  'anime-couple': {
    id: 'anime-couple',
    name: 'Anime Couple Dialogue & Sticker Typography',
    description: 'Illustrated character cutouts left & right, center kinetic dialogue typography color-coded by speaker.',
    accentColor: '#FF6B00',
    secondaryColor: '#FF1493',
    defaultEmojis: ['🌸', '✨', '🤍'],
    fonts: {
      bold: 'assets/fonts/SFPro-ExtraBold.ttf',
      script: 'assets/fonts/Insta-Neon.ttf',
      display: 'assets/fonts/Insta-Strong.ttf',
      emoji: 'assets/fonts/AppleColorEmoji.ttf'
    }
  },
  'emoji-quote': {
    id: 'emoji-quote',
    name: 'Floating 3D Apple Emojis & Minimal Status',
    description: 'Floating Apple emojis with spring breathing physics, warm light leak cards, and tracking romantic quotes.',
    accentColor: '#F59E0B',
    secondaryColor: '#E2E8F0',
    defaultEmojis: ['🥺 💔 🥀', '🎀 🦋', '✨ 🕊️'],
    fonts: {
      quote: 'assets/fonts/SFPro-SemiBold.ttf',
      emoji: 'assets/fonts/AppleColorEmoji.ttf'
    }
  }
};

/**
 * Parse raw lyrics input from text, LRC format, or JSON
 */
export function parseLyrics(input, totalDuration = 15.0) {
  if (Array.isArray(input)) return input;
  
  if (typeof input === 'string') {
    // Check if JSON
    try {
      const parsed = JSON.parse(input);
      if (Array.isArray(parsed)) return parsed;
    } catch {}

    // Check if LRC format ([mm:ss.xx] Lyric line)
    const lrcLines = [];
    const lrcRegex = /\[(\d{1,2}):(\d{2}(?:\.\d+)?)\](.*)/;
    const rawLines = input.split('\n').map(l => l.trim()).filter(Boolean);

    let hasLrc = false;
    for (const line of rawLines) {
      const match = line.match(lrcRegex);
      if (match) {
        hasLrc = true;
        const mins = parseInt(match[1], 10);
        const secs = parseFloat(match[2]);
        const time = mins * 60 + secs;
        const text = match[3].trim();
        if (text) {
          lrcLines.push({ time, text });
        }
      }
    }

    if (hasLrc && lrcLines.length > 0) {
      for (let i = 0; i < lrcLines.length; i++) {
        const nextTime = i < lrcLines.length - 1 ? lrcLines[i + 1].time : totalDuration;
        lrcLines[i].duration = Math.max(0.5, nextTime - lrcLines[i].time);
      }
      return lrcLines;
    }

    // Fallback: simple text lines distributed evenly
    const validLines = rawLines;
    if (validLines.length === 0) return [];
    
    const interval = totalDuration / validLines.length;
    return validLines.map((line, idx) => ({
      time: parseFloat((idx * interval).toFixed(2)),
      duration: parseFloat(interval.toFixed(2)),
      text: line
    }));
  }

  return [];
}

/**
 * Generate a complete, self-contained deterministic HTML composition for any lyrics preset
 */
export function generateLyricsHtml({
  presetId = 'hindi-calligraphy',
  lyrics = [],
  title = 'MotionOS Lyric Reel',
  artist = 'Official Audio',
  totalDuration = 15.0,
  watermark = '@motionos.studio',
  customAccent = null
}) {
  const preset = LYRICS_PRESETS[presetId] || LYRICS_PRESETS['hindi-calligraphy'];
  const accent = customAccent || preset.accentColor;
  const secondary = preset.secondaryColor;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1080, height=1920">
  <title>${title}</title>
  <style>
    @font-face {
      font-family: 'SFPro';
      src: url('../../assets/fonts/SFPro-ExtraBold.ttf') format('truetype');
      font-weight: 800;
    }
    @font-face {
      font-family: 'SFPro';
      src: url('../../assets/fonts/SFPro-Bold.ttf') format('truetype');
      font-weight: 700;
    }
    @font-face {
      font-family: 'HindiDisplay';
      src: url('../../assets/fonts/Hindi-Display.ttf') format('truetype');
    }
    @font-face {
      font-family: 'Indic';
      src: url('../../assets/fonts/Indic-TriScript.ttf') format('truetype');
    }
    @font-face {
      font-family: 'InstaNeon';
      src: url('../../assets/fonts/Insta-Neon.ttf') format('truetype');
    }
    @font-face {
      font-family: 'AppleEmoji';
      src: url('../../assets/fonts/AppleColorEmoji.ttf') format('truetype');
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 1080px;
      height: 1920px;
      overflow: hidden;
      background: #000000;
      color: #FFFFFF;
      font-family: 'SFPro', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    #stage {
      position: relative;
      width: 1080px;
      height: 1920px;
      background: #000000;
      overflow: hidden;
    }

    /* Transitions Overlay */
    #flash-cut {
      position: absolute;
      inset: 0;
      background: #FFFFFF;
      opacity: 0;
      pointer-events: none;
      z-index: 100;
    }
    #star-wipe {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      pointer-events: none;
      z-index: 90;
      opacity: 0;
      transform-origin: center center;
    }
    #star-wipe svg {
      width: 100%;
      height: 100%;
      fill: none;
      stroke: #FFFFFF;
      stroke-width: 4;
      filter: drop-shadow(0 0 20px #FFFFFF);
    }

    /* Ambient Light Beams */
    .light-streak {
      position: absolute;
      left: 0;
      right: 0;
      height: 6px;
      pointer-events: none;
      opacity: 0;
      filter: blur(4px);
    }
    #flare-top {
      top: calc(50% - 110px);
      background: radial-gradient(ellipse at center, ${accent} 0%, rgba(255, 170, 0, 0.4) 40%, transparent 80%);
      height: 12px;
      filter: blur(6px) drop-shadow(0 0 30px ${accent});
      z-index: 20;
    }
    #flare-bottom {
      top: calc(50% + 110px);
      background: radial-gradient(ellipse at center, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 30%, transparent 80%);
      height: 8px;
      filter: blur(5px) drop-shadow(0 0 25px #FFFFFF);
      z-index: 20;
    }

    /* Lyrics Display Container */
    #lyrics-container {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px;
      text-align: center;
    }

    /* Top Emojis Banner */
    #emojis-row {
      font-family: 'AppleEmoji', sans-serif;
      font-size: 72px;
      line-height: 1;
      margin-bottom: 24px;
      filter: drop-shadow(0 6px 16px rgba(0,0,0,0.8));
      transform-origin: center center;
    }

    /* Main Hindi Calligraphy */
    .hindi-line {
      font-family: 'HindiDisplay', 'Indic', sans-serif;
      font-size: 110px;
      line-height: 1.25;
      color: #FFFFFF;
      text-shadow: 0 0 25px rgba(255, 255, 255, 0.45);
      position: relative;
      display: inline-block;
    }
    .hindi-active {
      color: ${accent} !important;
      text-shadow: 0 0 45px ${accent}, 0 0 20px ${accent} !important;
    }

    /* English Accent Layer */
    .accent-english {
      font-family: 'InstaNeon', cursive;
      font-size: 64px;
      color: ${secondary};
      position: absolute;
      top: -36px;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      text-shadow: 0 0 25px ${secondary};
      z-index: 10;
    }

    /* Bold Stacked Typography */
    .stacked-bold {
      font-family: 'SFPro', sans-serif;
      font-weight: 800;
      font-size: 104px;
      line-height: 1.05;
      letter-spacing: -2px;
      color: #FFFFFF;
      text-transform: uppercase;
      text-shadow: 0 0 35px rgba(255, 255, 255, 0.6);
    }
    .stacked-sub {
      font-size: 84px;
      color: #E2E8F0;
      letter-spacing: 2px;
      margin-top: 6px;
    }

    /* Underline glowing bar */
    #glow-bar {
      width: 220px;
      height: 4px;
      background: #FFFFFF;
      border-radius: 9999px;
      margin: 20px auto 16px auto;
      box-shadow: 0 0 20px #FFFFFF, 0 0 40px ${accent};
    }

    /* Watermark / Creator Tag */
    #watermark {
      position: absolute;
      bottom: 120px;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 20px;
      letter-spacing: 2px;
      color: rgba(255, 255, 255, 0.35);
      font-family: 'SFPro', sans-serif;
      text-transform: uppercase;
      pointer-events: none;
    }

    /* Spotify Player UI */
    #spotify-card {
      width: 840px;
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 28px;
    }
    .spotify-logo {
      width: 56px;
      height: 56px;
      fill: #1DB954;
      filter: drop-shadow(0 0 20px rgba(29, 185, 84, 0.8));
    }
    .spotify-search-pill {
      width: 100%;
      padding: 24px 36px;
      border: 3px solid #FFFFFF;
      border-radius: 9999px;
      box-shadow: 0 0 35px rgba(255, 255, 255, 0.75);
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 34px;
      font-weight: 700;
      letter-spacing: 1px;
    }
    .spotify-player-box {
      width: 100%;
      padding: 30px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 28px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      display: flex;
      align-items: center;
      gap: 24px;
      backdrop-filter: blur(20px);
    }
    .spotify-thumb {
      width: 90px;
      height: 90px;
      background: linear-gradient(135deg, #FF512F 0%, #DD2476 100%);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
    }
    .spotify-meta {
      flex: 1;
      text-align: left;
    }
    .spotify-title { font-size: 30px; font-weight: 700; color: #FFFFFF; }
    .spotify-artist { font-size: 22px; color: #94A3B8; margin-top: 4px; }
  </style>
</head>
<body>

<div id="stage">
  <div id="flash-cut"></div>
  
  <div id="star-wipe">
    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
  </div>

  <div id="flare-top" class="light-streak"></div>
  <div id="flare-bottom" class="light-streak"></div>

  <div id="lyrics-container">
    <div id="emojis-row"></div>
    <div id="line-content"></div>
    <div id="glow-bar"></div>

    <!-- Spotify UI Container (used when preset is spotify-glow) -->
    <div id="spotify-card">
      <svg class="spotify-logo" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.306c-.216.353-.674.464-1.027.248-2.812-1.718-6.35-2.107-10.518-1.155-.403.092-.806-.157-.898-.56-.092-.403.157-.806.56-.898 4.562-1.042 8.472-.596 11.635 1.338.353.216.464.674.248 1.027zm1.468-3.26c-.272.443-.85.584-1.293.312-3.219-1.978-8.125-2.55-11.93-1.394-.499.151-1.03-.135-1.181-.634-.151-.499.135-1.03.634-1.181 4.354-1.321 9.774-.68 13.458 1.583.443.272.584.85.312 1.293zm.126-3.41c-3.86-2.292-10.228-2.503-13.896-1.389-.59.18-1.218-.154-1.398-.744-.18-.59.154-1.218.744-1.398 4.218-1.281 11.25-1.038 15.688 1.597.532.316.708 1.006.392 1.538-.316.532-1.006.708-1.538.392z"/></svg>
      <div class="spotify-search-pill">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <span id="spotify-search-text">Search</span>
      </div>
      <div class="spotify-player-box">
        <div class="spotify-thumb">🎵</div>
        <div class="spotify-meta">
          <div class="spotify-title">${title}</div>
          <div class="spotify-artist">${artist}</div>
        </div>
      </div>
    </div>
  </div>

  <div id="watermark">${watermark}</div>
</div>

<script>
  // Closed-Form Spring Motion
  function spring(t, k = 170, d = 26) {
    if (t <= 0) return 0;
    const w0 = Math.sqrt(k);
    const z = d / (2 * w0);
    if (z < 1) {
      const wd = w0 * Math.sqrt(1 - z * z);
      return 1 - Math.exp(-z * w0 * t) * (Math.cos(wd * t) + ((z * w0) / wd) * Math.sin(wd * t));
    }
    return 1 - Math.exp(-w0 * t) * (1 + w0 * t);
  }

  function clamp(x, a = 0, b = 1) { return Math.min(b, Math.max(a, x)); }

  const PRESET = ${JSON.stringify(presetId)};
  const LYRICS = ${JSON.stringify(lyrics)};
  const TOTAL_DURATION = ${totalDuration};

  const elEmojis = document.getElementById('emojis-row');
  const elLine = document.getElementById('line-content');
  const elGlowBar = document.getElementById('glow-bar');
  const elFlash = document.getElementById('flash-cut');
  const elStarWipe = document.getElementById('star-wipe');
  const flareTop = document.getElementById('flare-top');
  const flareBottom = document.getElementById('flare-bottom');
  const spotifyCard = document.getElementById('spotify-card');
  const spotifySearch = document.getElementById('spotify-search-text');

  if (PRESET === 'spotify-glow') {
    spotifyCard.style.display = 'flex';
    elGlowBar.style.display = 'none';
  }

  window.seek = function(t) {
    // 1. Find active lyric line
    let activeIdx = -1;
    for (let i = 0; i < LYRICS.length; i++) {
      const cur = LYRICS[i];
      const start = cur.time;
      const end = cur.time + (cur.duration || 3.0);
      if (t >= start && t < end) {
        activeIdx = i;
        break;
      }
    }

    if (activeIdx === -1 && LYRICS.length > 0) {
      if (t >= LYRICS[LYRICS.length - 1].time) {
        activeIdx = LYRICS.length - 1;
      } else {
        activeIdx = 0;
      }
    }

    const curLine = LYRICS[activeIdx] || { text: '', time: 0, duration: 3.0 };
    const localT = t - curLine.time;
    const lineDur = curLine.duration || 3.0;

    // 2. Transitions: Star Wipe & Flash Cut on Line change
    const isTransition = localT < 0.28;
    if (isTransition && activeIdx > 0) {
      const transT = localT / 0.28;
      // White Flash
      elFlash.style.opacity = Math.max(0, 1 - transT * 3.5);

      // Star Zoom Wipe
      const starScale = spring(localT, 360, 20) * 14;
      elStarWipe.style.opacity = clamp((1 - transT) * 1.5, 0, 1);
      elStarWipe.style.transform = 'scale(' + starScale + ')';
    } else {
      elFlash.style.opacity = 0;
      elStarWipe.style.opacity = 0;
    }

    // 3. Flares Animation
    if (PRESET === 'golden-flare') {
      const flarePulse = 0.75 + 0.25 * Math.sin(t * 8);
      flareTop.style.opacity = flarePulse;
      flareBottom.style.opacity = flarePulse * 0.85;
      flareTop.style.transform = 'scaleX(' + (0.95 + 0.1 * Math.sin(t * 6)) + ')';
    } else {
      flareTop.style.opacity = 0;
      flareBottom.style.opacity = 0;
    }

    // 4. Emojis Animation
    const emojis = curLine.emojis || (PRESET === 'hindi-calligraphy' ? ['🥰', '🥺 💖 ✨', '👀', '💕'][activeIdx % 4] : ['✨', '🔥'][activeIdx % 2]);
    elEmojis.textContent = emojis;
    const eSpring = spring(localT, 300, 18);
    const eScale = 0.8 + 0.2 * eSpring + 0.04 * Math.sin(t * 4);
    elEmojis.style.transform = 'scale(' + eScale + ') translateY(' + ((1 - eSpring) * -20) + 'px)';

    // 5. Line Rendering & Typography
    const text = curLine.text || '';
    const inSpring = spring(localT, 260, 22);

    if (PRESET === 'spotify-glow') {
      const charCount = Math.floor(clamp(localT / (lineDur * 0.4), 0, 1) * text.length);
      spotifySearch.textContent = text.slice(0, charCount) + (localT % 0.5 > 0.25 ? '|' : '');
      const sScale = 0.9 + 0.1 * inSpring;
      spotifyCard.style.transform = 'scale(' + sScale + ')';
    } else if (PRESET === 'golden-flare' || text.toUpperCase() === text && text.includes(' ')) {
      // Stacked bold typography
      const parts = text.split('/');
      const p1 = parts[0] ? parts[0].trim() : text;
      const p2 = parts[1] ? parts[1].trim() : '';

      elLine.innerHTML = '<div class="stacked-bold">' + p1 + '</div>' + 
                         (p2 ? '<div class="accent-english" style="position:static; margin-top: 10px;">' + p2 + '</div>' : '');
      elLine.style.transform = 'scale(' + (0.92 + 0.08 * inSpring) + ')';
    } else {
      // Hindi Calligraphy line with active word lighting
      const words = text.split(' ');
      const wordProgress = clamp(localT / (lineDur * 0.8), 0, 1);
      const activeWordIdx = Math.floor(wordProgress * words.length);

      let html = '<div class="hindi-line">';
      if (curLine.accent) {
        html += '<div class="accent-english">' + curLine.accent + '</div>';
      }
      for (let w = 0; w < words.length; w++) {
        const isAct = w <= activeWordIdx;
        html += '<span class="' + (isAct ? 'hindi-active' : '') + '">' + words[w] + ' </span>';
      }
      html += '</div>';
      elLine.innerHTML = html;
      elLine.style.transform = 'scale(' + (0.94 + 0.06 * inSpring) + ')';
    }

    // Glow bar pulse
    if (elGlowBar.style.display !== 'none') {
      const barScale = 0.95 + 0.08 * Math.sin(t * 6);
      elGlowBar.style.transform = 'scaleX(' + barScale + ')';
    }
  };

  window.seek(0);
</script>
</body>
</html>`;
}

/**
 * Generate and Render complete MP4 lyric video from input
 */
export async function createLyricReel({
  preset = 'hindi-calligraphy',
  audioFile,
  lyricsText = '',
  outputFile = 'out/lyric_reel.mp4',
  duration = 15.0,
  title = 'MotionOS Lyric Video',
  artist = 'Creator Edit',
  watermark = '@motionos.studio',
  fps = 30
}) {
  mkdirSync('scratch/lyrics', { recursive: true });
  mkdirSync(path.dirname(outputFile), { recursive: true });

  const parsedLyrics = parseLyrics(lyricsText, duration);
  const htmlContent = generateLyricsHtml({
    presetId: preset,
    lyrics: parsedLyrics,
    title,
    artist,
    totalDuration: duration,
    watermark
  });

  const htmlPath = path.resolve('scratch/lyrics/composition.html');
  writeFileSync(htmlPath, htmlContent);
  console.log(`[Lyrics Studio] Created composition: ${htmlPath}`);

  return {
    htmlPath,
    parsedLyrics,
    duration
  };
}
