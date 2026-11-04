/**
 * MotionOS - Vibe Editing OS (MotionOS Vibe) Pipeline Engine
 * 
 * Automates the 4-step Vibe Editing workflow:
 * 1. prep: Speech-to-text transcript & word timestamps (words.py / Whisper)
 * 2. plan: Intelligent AI storyboard generation with 51 CV effects & SFX cues
 * 3. preview: Rapid keyframe contact sheet extraction before rendering
 * 4. render: Deterministic 4K/1080p face-matting render with audio & SFX sync
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Find Python executable (checks local .agent venv first, then system python)
export function getPythonPath() {
  const venvWin = path.join(ROOT_DIR, '.agent', 'skills', 'effects', '.venv', 'Scripts', 'python.exe');
  const venvUnix = path.join(ROOT_DIR, '.agent', 'skills', 'effects', '.venv', 'bin', 'python');

  if (fs.existsSync(venvWin)) return venvWin;
  if (fs.existsSync(venvUnix)) return venvUnix;
  return process.platform === 'win32' ? 'python' : 'python3';
}

// Preset visual styles for Vibe Editing
export const STYLE_PRESETS = {
  'money-explainer': {
    name: 'Money Explainer (Finance & Wealth Graphics)',
    hookEffect: 'backdrop-word',
    accentColor: '#F59E0B',
    effectsPool: ['red-collage', 'reject-stamp', 'headline-box', 'liquid-glass-graph', 'tap'],
    font: 'bold'
  },
  'editor-cinema': {
    name: 'Editor Cinema (Cinematic Film Grade & Cut)',
    hookEffect: 'slow-push',
    accentColor: '#D97757',
    effectsPool: ['timeline', 'moody', 'split-headline', 'tape-label'],
    font: 'serif'
  },
  'glow-steps': {
    name: 'Glow Steps (Glowing Neon Workflows)',
    hookEffect: 'spotlight',
    accentColor: '#38BDF8',
    effectsPool: ['checklist', 'led-sign', 'apple-toggles', 'dot-reveal'],
    font: 'bold'
  },
  'tech-bento': {
    name: 'Tech Bento (Modern Frosted Glass)',
    hookEffect: 'backdrop-word',
    accentColor: '#38BDF8',
    effectsPool: ['glass-widgets', 'liquid-glass-graph', 'apple-toggles', 'over-the-shoulder-zoom', 'timeline'],
    font: 'bold'
  },
  'bold-creator': {
    name: 'Bold Creator (High Retention & Contrast)',
    hookEffect: 'lean-in',
    accentColor: '#F59E0B',
    effectsPool: ['red-collage', 'headline-box', 'reject-stamp', 'todo', 'the-bill', 'tape-label'],
    font: 'bold'
  },
  'minimal': {
    name: 'Minimalist Editorial (Subtle & Elegant)',
    hookEffect: 'slow-push',
    accentColor: '#D97757',
    effectsPool: ['cover-star', 'pastel-word', 'split-headline', 'tap', 'crayon-write'],
    font: 'serif'
  },
  'neon-glow': {
    name: 'Cyber Neon (Cinematic Dark Mode)',
    hookEffect: 'spotlight',
    accentColor: '#10B981',
    effectsPool: ['led-sign', 'moody', 'glitter-spotlight', 'dot-reveal', 'carousel-spin'],
    font: 'bold'
  },

  // --- Advoc Media / Claude Code Pipeline Styles ---
  'advoc-cream-pipeline': {
    name: 'Advoc Media Cream Pipeline (Warm Paper + Floating macOS + 4-Step Stepper)',
    hookEffect: 'backdrop-word',
    accentColor: '#FF2D95',
    secondaryColor: '#007BA7',
    backgroundColor: '#F3ECE1',
    effectsPool: ['headline-box', 'reject-stamp', 'checklist', 'glass-widgets'],
    font: 'anton'
  },
  'neurobyte-cosmic-glass': {
    name: 'Neurobyte Cosmic Glass (Dark Space Nebula + Glassmorphism Cards + Star Badges)',
    hookEffect: 'spotlight',
    accentColor: '#00D2FF',
    secondaryColor: '#3B82F6',
    backgroundColor: '#0B111E',
    effectsPool: ['glass-widgets', 'led-sign', 'apple-toggles', 'liquid-glass-graph'],
    font: 'bold'
  },
  'advoc-split-talking-head': {
    name: 'Advoc Split-Screen (50% Motion Graphics Canvas + 50% Talking Head)',
    hookEffect: 'split-headline',
    accentColor: '#FF2D95',
    secondaryColor: '#D97757',
    effectsPool: ['split-headline', 'headline-box', 'checklist', 'glass-widgets'],
    font: 'bold'
  },
  'advoc-connector-automation': {
    name: 'Advoc Connector Automation (App Node Connections + Live Profile Analytics)',
    hookEffect: 'backdrop-word',
    accentColor: '#FF2D95',
    secondaryColor: '#10B981',
    effectsPool: ['apple-toggles', 'timeline', 'glass-widgets'],
    font: 'bold'
  },

  // --- Raj Shamani High-Retention Podcast Styles ---
  'raj-shamani-neon-lime': {
    name: 'Raj Shamani Neon Lime (Top Hook Badge + Electric Lime Glow + Rapid Zoom)',
    hookEffect: 'lean-in',
    accentColor: '#00FF66',
    secondaryColor: '#FFFFFF',
    effectsPool: ['headline-box', 'over-the-shoulder-zoom', 'led-sign'],
    font: 'bold'
  },
  'raj-shamani-cinema-serif': {
    name: 'Raj Shamani Cinema Serif (Reflective Dialog + Synchronized B-Roll Film Cuts)',
    hookEffect: 'slow-push',
    accentColor: '#FFFFFF',
    secondaryColor: '#D97757',
    effectsPool: ['timeline', 'moody', 'split-headline'],
    font: 'serif'
  },
  'raj-shamani-crimson-hook': {
    name: 'Raj Shamani Crimson Hook (Sam Altman Void Hook + Archival PIP Window)',
    hookEffect: 'spotlight',
    accentColor: '#FF1E27',
    secondaryColor: '#FFFFFF',
    effectsPool: ['backdrop-word', 'over-the-shoulder-zoom', 'headline-box'],
    font: 'bold'
  },
  'raj-shamani-handwritten-story': {
    name: 'Raj Shamani Handwritten Story (Organic Narrative + Intimate Timing)',
    hookEffect: 'slow-push',
    accentColor: '#F3EDE3',
    secondaryColor: '#D97757',
    effectsPool: ['crayon-write', 'pastel-word', 'moody'],
    font: 'handwritten'
  },
  'raj-shamani-hype-emoji': {
    name: 'Raj Shamani Hype Emoji (Dual-Tone Yellow & Red + 3D Animated Emojis)',
    hookEffect: 'lean-in',
    accentColor: '#FFE500',
    secondaryColor: '#FF2222',
    effectsPool: ['red-collage', 'headline-box', 'reject-stamp'],
    font: 'bold'
  },

  // --- Lyrical & Bollywood Motion Styles ---
  'lyrical-neon-pulse': {
    name: 'Lyrical Neon Pulse (High Energy Beat-Locked Audio Sync & Pop Glow)',
    hookEffect: 'spotlight',
    accentColor: '#EC4899',
    secondaryColor: '#8B5CF6',
    effectsPool: ['led-sign', 'dot-reveal', 'glitter-spotlight'],
    font: 'bold'
  },
  'lyrical-minimal-editorial': {
    name: 'Lyrical Minimal Editorial (Serif Typography & Film Grain Subtitles)',
    hookEffect: 'slow-push',
    accentColor: '#FAF5EE',
    secondaryColor: '#D97757',
    effectsPool: ['split-headline', 'moody', 'pastel-word'],
    font: 'serif'
  },
  'lyrical-cyber-hindi': {
    name: 'Lyrical Cyber Hindi (Stylized Calligraphic Hindi & Neon Accents)',
    hookEffect: 'spotlight',
    accentColor: '#00F2FE',
    secondaryColor: '#4FACFE',
    effectsPool: ['led-sign', 'dot-reveal'],
    font: 'bold'
  }
};

/**
 * List all available authentic creator playbook styles from templates/playbooks/_styles
 */
export function listPlaybookStyles() {
  const stylesDir = path.join(ROOT_DIR, 'templates', 'playbooks', '_styles');
  if (!fs.existsSync(stylesDir)) return [];

  const dirs = fs.readdirSync(stylesDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  return dirs.map(id => {
    const tplPath = path.join(stylesDir, id, 'template.json');
    if (fs.existsSync(tplPath)) {
      try {
        const tpl = JSON.parse(fs.readFileSync(tplPath, 'utf8'));
        return {
          id: tpl.id || id,
          name: tpl.name || id,
          tagline: tpl.tagline || '',
          niches: tpl.niches || []
        };
      } catch {}
    }
    return { id, name: id, tagline: '', niches: [] };
  });
}

/**
 * Get full playbook style details (template, profile, markdown)
 */
export function getPlaybookStyle(styleId) {
  const styleDir = path.join(ROOT_DIR, 'templates', 'playbooks', '_styles', styleId);
  if (!fs.existsSync(styleDir)) return null;

  const tplPath = path.join(styleDir, 'template.json');
  const profPath = path.join(styleDir, 'profile.json');
  const mdPath = path.join(styleDir, 'playbook.md');

  const template = fs.existsSync(tplPath) ? JSON.parse(fs.readFileSync(tplPath, 'utf8')) : {};
  const profile = fs.existsSync(profPath) ? JSON.parse(fs.readFileSync(profPath, 'utf8')) : {};
  const markdown = fs.existsSync(mdPath) ? fs.readFileSync(mdPath, 'utf8') : '';

  return { id: styleId, template, profile, markdown, dir: styleDir };
}

/**
 * Initialize a playbook into a target directory
 */
export function initPlaybook(styleId = 'money-explainer', targetDir = process.cwd()) {
  const style = getPlaybookStyle(styleId);
  if (!style) {
    throw new Error(`Style '${styleId}' not found in templates/playbooks/_styles`);
  }

  const outMd = path.join(targetDir, 'playbook.md');
  const outProf = path.join(targetDir, 'profile.json');

  if (style.markdown) fs.writeFileSync(outMd, style.markdown, 'utf8');
  if (style.profile) fs.writeFileSync(outProf, JSON.stringify(style.profile, null, 2), 'utf8');

  return { styleId, playbookPath: outMd, profilePath: outProf };
}

/**
 * Analyze transcript words and silence gaps
 */
export function analyzeTranscript(words) {
  if (!Array.isArray(words) || words.length === 0) {
    return { totalWords: 0, duration: 0, silences: [], stats: { wpm: 0 } };
  }

  const duration = words[words.length - 1].e || 0;
  const silences = [];

  for (let i = 0; i < words.length - 1; i++) {
    const gap = words[i + 1].s - words[i].e;
    if (gap > 0.6) {
      silences.push({
        start: round(words[i].e),
        end: round(words[i + 1].s),
        duration: round(gap),
        afterWord: words[i].w
      });
    }
  }

  const wpm = duration > 0 ? Math.round((words.length / duration) * 60) : 0;

  return {
    totalWords: words.length,
    duration: round(duration),
    silences,
    stats: { wpm }
  };
}

/**
 * Generate intelligent Vibe Storyboard Plan from transcript words
 */
export function generateVibePlan(words, options = {}) {
  const styleName = options.style || 'tech-bento';
  const style = STYLE_PRESETS[styleName] || STYLE_PRESETS['tech-bento'];
  const effects = [];
  const cues = [];

  if (!Array.isArray(words) || words.length === 0) {
    return { style: styleName, effects, sfxCues: cues };
  }

  const totalDuration = options.duration || (words[words.length - 1].e || 10);

  // 1. Hook (First 2.5s)
  const hookEnd = Math.min(2.5, totalDuration);
  const hookWords = words.filter(w => w.s <= hookEnd).map(w => w.w).join(' ').toUpperCase();
  const hookText = hookWords.length > 0 ? hookWords.split(' ').slice(0, 3).join(' ') : 'MOTION OS';

  if (style.hookEffect === 'backdrop-word') {
    effects.push({
      fx: 'backdrop-word',
      start: 0.1,
      end: hookEnd,
      text: hookText,
      color: style.accentColor,
      font: style.font
    });
  } else if (style.hookEffect === 'lean-in') {
    effects.push({
      fx: 'lean-in',
      start: 0.0,
      end: hookEnd,
      zoom: 1.4,
      speed: 1.2
    });
  } else if (style.hookEffect === 'spotlight') {
    effects.push({
      fx: 'spotlight',
      start: 0.1,
      end: hookEnd,
      text: hookText,
      color: style.accentColor,
      push: true
    });
  } else {
    effects.push({
      fx: 'slow-push',
      start: 0.0,
      end: hookEnd,
      zoom: 1.35
    });
  }

  cues.push({ time: 0.1, voice: 'whoosh' });

  // 2. Scan for keyword moments & assign high-relevance CV effects
  let lastEffectEnd = hookEnd;

  for (let i = 0; i < words.length; i++) {
    const item = words[i];
    if (item.s < lastEffectEnd) continue;
    if (item.s >= totalDuration) break;

    const lower = item.w.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Number / Metric match -> Liquid Glass Graph or Select Resize
    if (/^\d+[kmb%]?$/.test(lower) || ['k', 'm', 'percent', 'double', 'triple', 'metrics', 'scale'].includes(lower)) {
      const effectDur = Math.min(2.4, Math.max(0.8, totalDuration - item.s));
      effects.push({
        fx: 'liquid-glass-graph',
        start: round(item.s),
        end: round(item.s + effectDur),
        text: 'GROWTH',
        from: '10K',
        to: lower.toUpperCase(),
        color: style.accentColor
      });
      cues.push({ time: round(item.s), voice: 'pop' });
      lastEffectEnd = item.s + effectDur;
      continue;
    }

    // Step / Rule / List match -> Checklist or Todo
    if (['step', 'rules', 'rule', 'first', 'second', 'third', 'checklist', 'todo', 'task'].includes(lower)) {
      const effectDur = Math.min(2.8, Math.max(0.8, totalDuration - item.s));
      effects.push({
        fx: 'checklist',
        start: round(item.s),
        end: round(item.s + effectDur),
        title: 'EXECUTION PLAN',
        text: 'Record Video|Generate Plan|Ship 4K'
      });
      cues.push({ time: round(item.s), voice: 'click' });
      lastEffectEnd = item.s + effectDur;
      continue;
    }

    // Settings / Features match -> Apple Toggles or Glass Widgets
    if (['feature', 'features', 'toggle', 'switch', 'automation', 'tool', 'stack'].includes(lower)) {
      const effectDur = Math.min(2.5, Math.max(0.8, totalDuration - item.s));
      effects.push({
        fx: 'apple-toggles',
        start: round(item.s),
        end: round(item.s + effectDur),
        text: 'Motion Blur|Beat Sync|Deterministic Seek',
        ticks: `${round(item.s + 0.5)}|${round(item.s + 1.2)}|${round(item.s + 1.9)}`,
        color: style.accentColor
      });
      cues.push({ time: round(item.s + 0.5), voice: 'click' });
      cues.push({ time: round(item.s + 1.2), voice: 'click' });
      lastEffectEnd = item.s + effectDur;
      continue;
    }

    // CTA / Follow / Comment match -> Tap or Comment Box
    if (['follow', 'subscribe', 'comment', 'share', 'save', 'link'].includes(lower)) {
      const effectDur = Math.min(2.2, Math.max(0.8, totalDuration - item.s));
      effects.push({
        fx: 'tap',
        start: round(item.s),
        end: round(item.s + effectDur),
        at: round(item.s + 0.4),
        color: style.accentColor
      });
      cues.push({ time: round(item.s + 0.4), voice: 'pop' });
      lastEffectEnd = item.s + effectDur;
      continue;
    }

    // Pacing fallback: if 4.0 seconds pass without an effect, pick an aesthetic style effect
    if (item.s - lastEffectEnd >= 4.0) {
      const fallbackFx = style.effectsPool[effects.length % style.effectsPool.length];
      const effectDur = Math.min(2.2, Math.max(0.8, totalDuration - item.s));
      effects.push({
        fx: fallbackFx,
        start: round(item.s),
        end: round(item.s + effectDur),
        text: item.w.toUpperCase()
      });
      cues.push({ time: round(item.s), voice: 'whoosh' });
      lastEffectEnd = item.s + effectDur;
    }
  }

  return {
    style: styleName,
    metadata: {
      generatedAt: new Date().toISOString(),
      generator: 'MotionOS Vibe Editing Engine v2.0',
      totalEffects: effects.length
    },
    effects,
    sfxCues: cues
  };
}

function round(num) {
  return Math.round(num * 100) / 100;
}
