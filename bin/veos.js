#!/usr/bin/env node

/**
 * MotionOS - Vibe Editing OS (VEOS) CLI Subsystem
 * 
 * Usage:
 *   npx motionos veos playbook [list|show|init]
 *   npx motionos veos reel <folder>
 *   npx motionos veos prep <video.mp4>
 *   npx motionos veos plan <video.mp4> [--style <name>]
 *   npx motionos veos preview <video.mp4> [--plan <plan.json>]
 *   npx motionos veos render <video.mp4> [--plan <plan.json>] [--out <out.mp4>]
 *   npx motionos veos review <video.mp4>
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import {
  getPythonPath,
  analyzeTranscript,
  generateVibePlan,
  STYLE_PRESETS,
  listPlaybookStyles,
  getPlaybookStyle,
  initPlaybook
} from '../lib/veos.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const subcmd = process.argv[2];
const targetArg = process.argv[3];
const rawArgs = process.argv.slice(4);

function parseFlags(args) {
  const flags = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      const val = args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true;
      flags[key] = val;
      if (val !== true) i++;
    }
  }
  return flags;
}

const flags = parseFlags(rawArgs);

function printVeosHelp() {
  console.log(`
▲ MotionOS - Vibe Editing OS (VEOS) Workflow Engine
The Operating System for Autonomous Motion Design & Creator Reels

Usage:
  npx motionos veos <action> [target] [options]

High-Level Creator Actions:
  playbook [list|show|init] Manage creator playbooks & 23 authentic creator styles
  reel <clips_folder>       Full end-to-end reel pipeline: cut -> storyboard -> render

Standard Vibe Actions:
  prep <video>              Transcribe audio & detect silence/jump-cut timings
  plan <video>              Generate AI storyboard plan with 51 CV effects & SFX cues
                            Options: --style <creator_style>
  preview <video>           Extract rapid still-frame storyboard for human approval
                            Options: --plan <path>
  render <video>            Render broadcast-grade video with face-matting & audio
                            Options: --plan <path> --out <path> --width [1080|2160]
  review <video>            Generate contact sheet & run vision verification rubric
  styles                    List all 23 available creator styles

Examples:
  npx motionos veos playbook list
  npx motionos veos playbook init naman-infotainment-motion
  npx motionos veos reel "./Reel 1" --style tech-bento
  npx motionos veos plan input.mp4 --style naman-infotainment-motion
  npx motionos veos preview input.mp4
  npx motionos veos render input.mp4 --out out/final.mp4
`);
}

if (!subcmd || subcmd === 'help' || subcmd === '--help' || subcmd === '-h') {
  printVeosHelp();
  process.exit(0);
}

const pyCmd = getPythonPath();
const wordsScript = path.join(ROOT_DIR, '.agent', 'skills', 'effects', 'scripts', 'words.py');
const fxScript = path.join(ROOT_DIR, '.agent', 'skills', 'effects', 'scripts', 'fx.py');

switch (subcmd) {
  case 'playbook': {
    const action = targetArg || 'list';
    const styleId = rawArgs[0] || 'naman-infotainment-motion';

    if (action === 'list') {
      const styles = listPlaybookStyles();
      console.log(`\n▲ MotionOS Available Creator Playbook Styles (${styles.length} styles):\n`);
      styles.forEach((s, idx) => {
        const nicheStr = s.niches.length ? `[${s.niches.join(', ')}]` : '';
        console.log(`  ${(idx + 1).toString().padStart(2)}. ${s.id.padEnd(28)} ${s.name} ${nicheStr}`);
        if (s.tagline) console.log(`      └─ ${s.tagline.slice(0, 85)}...`);
      });
      console.log(`\nTo view a style: npx motionos veos playbook show <style-id>`);
      console.log(`To use a style:  npx motionos veos playbook init <style-id>\n`);
    } else if (action === 'show') {
      const id = targetArg === 'show' ? (rawArgs[0] || 'naman-infotainment-motion') : targetArg;
      const style = getPlaybookStyle(id);
      if (!style) {
        console.error(`❌ Style '${id}' not found. Run 'npx motionos veos playbook list'.`);
        process.exit(1);
      }
      console.log(`\n▲ Playbook Style: ${style.template.name || id} (${id})`);
      console.log(`  Tagline: ${style.template.tagline || 'N/A'}`);
      console.log(`  Niches:  ${(style.template.niches || []).join(', ') || 'General'}`);
      console.log(`  Folder:  ${style.dir}\n`);
      if (style.template.preview?.captions) {
        console.log('  Visual Moments:');
        style.template.preview.captions.forEach((c, i) => console.log(`    ${i + 1}. ${c}`));
      }
      console.log('');
    } else if (action === 'init') {
      const id = targetArg === 'init' ? (rawArgs[0] || 'naman-infotainment-motion') : targetArg;
      try {
        const res = initPlaybook(id, process.cwd());
        console.log(`\n✅ Playbook initialized for style: '${id}'`);
        console.log(`   Saved: ${res.playbookPath}`);
        console.log(`   Saved: ${res.profilePath}`);
        console.log(`   You can now customize your branding, accents, and voice in playbook.md!\n`);
      } catch (err) {
        console.error(`❌ ${err.message}`);
        process.exit(1);
      }
    } else {
      console.error(`Unknown playbook action: '${action}'. Use 'list', 'show', or 'init'.`);
      process.exit(1);
    }
    break;
  }

  case 'reel': {
    // End-to-end reel flow
    const folder = targetArg ? path.resolve(targetArg) : process.cwd();
    if (!fs.existsSync(folder)) {
      console.error(`❌ Folder not found: ${folder}`);
      process.exit(1);
    }

    // Find raw clips in folder
    const files = fs.readdirSync(folder).filter(f => /\.(mp4|mov|mkv|m4v)$/i.test(f) && !f.includes('_motionos') && !f.includes('_effects'));
    if (files.length === 0) {
      console.error(`❌ No raw video files (.mp4/.mov) found in folder: ${folder}`);
      console.error(`   Place your raw talking-head clip in this folder and try again.`);
      process.exit(1);
    }

    const rawClip = path.join(folder, files[0]);
    console.log(`\n🎬 [MotionOS Reel] Found raw clip: ${path.basename(rawClip)}`);
    console.log(`   Starting autonomous Vibe Editing OS pipeline...`);

    // 1. Prep
    console.log(`\n[1/4] Transcribing & silence detection...`);
    const child = spawn(pyCmd, [wordsScript, rawClip], { stdio: 'inherit' });
    child.on('close', code => {
      if (code !== 0) {
        console.error(`❌ Error in prep stage (exit code ${code})`);
        process.exit(code || 1);
      }

      const wordsJson = path.join(folder, `${path.basename(rawClip, path.extname(rawClip))}.words.json`);
      if (!fs.existsSync(wordsJson)) {
        console.error(`❌ Words file not found: ${wordsJson}`);
        process.exit(1);
      }

      const words = JSON.parse(fs.readFileSync(wordsJson, 'utf8'));
      const analysis = analyzeTranscript(words);
      console.log(`\n✅ Prep complete: ${analysis.totalWords} words, ${analysis.duration}s, ${analysis.stats.wpm} WPM.`);

      // 2. Plan
      console.log(`\n[2/4] Generating Vibe Storyboard plan...`);
      const styleName = flags.style || 'naman-infotainment-motion';
      const plan = generateVibePlan(words, { style: styleName });
      const planJson = path.join(folder, `${path.basename(rawClip, path.extname(rawClip))}_plan.json`);
      const cuesJson = path.join(folder, `${path.basename(rawClip, path.extname(rawClip))}_cues.json`);

      fs.writeFileSync(planJson, JSON.stringify({ effects: plan.effects }, null, 2));
      fs.writeFileSync(cuesJson, JSON.stringify(plan.sfxCues, null, 2));

      console.log(`✅ Storyboard saved: ${planJson}`);
      console.log(`   Effects planned: ${plan.effects.length}`);

      // 3. Preview
      console.log(`\n[3/4] Extracting rapid still frames for creator approval...`);
      const midpoints = plan.effects.map(e => ((e.start + e.end) / 2).toFixed(1));
      const previewOut = path.join(folder, `${path.basename(rawClip, path.extname(rawClip))}_check.png`);

      const fxChild = spawn(pyCmd, [
        fxScript,
        '--plan', planJson,
        rawClip,
        previewOut,
        '--still', midpoints.join(',')
      ], { stdio: 'inherit' });

      fxChild.on('close', prevCode => {
        if (prevCode === 0) {
          console.log(`\n📸 Stills extracted to: ${previewOut}`);
          console.log(`\n[4/4] ⛔ HUMAN APPROVAL GATE:`);
          console.log(`   Review '${previewOut}'. If happy, render with:`);
          console.log(`   npx motionos veos render "${rawClip}"\n`);
        } else {
          process.exit(prevCode || 1);
        }
      });
    });
    break;
  }

  case 'prep': {
    if (!targetArg) {
      console.error('Error: Please provide a video file path.');
      process.exit(1);
    }
    const videoPath = path.resolve(targetArg);
    const baseName = path.basename(videoPath, path.extname(videoPath));
    const dirName = path.dirname(videoPath);
    const wordsJsonPath = path.join(dirName, `${baseName}.words.json`);

    console.log(`\n🎙️ [MotionOS VEOS] Running speech-to-text & silence analysis on: ${baseName}...`);
    const child = spawn(pyCmd, [wordsScript, videoPath], { stdio: 'inherit' });
    child.on('close', code => {
      if (code !== 0) {
        console.error(`\n❌ Error during transcription (exit code ${code}). Ensure Python dependencies are installed.`);
        process.exit(code || 1);
      }

      if (fs.existsSync(wordsJsonPath)) {
        const words = JSON.parse(fs.readFileSync(wordsJsonPath, 'utf8'));
        const analysis = analyzeTranscript(words);
        console.log(`\n✅ Prep complete!`);
        console.log(`   Total Words: ${analysis.totalWords} | Duration: ${analysis.duration}s | Pacing: ${analysis.stats.wpm} WPM`);
        if (analysis.silences.length > 0) {
          console.log(`   Detected ${analysis.silences.length} pause(s) (>0.6s) for jump-cut trimming.`);
        }
        console.log(`   Next step: run 'npx motionos veos plan "${videoPath}"' to build storyboard.`);
      }
    });
    break;
  }

  case 'plan': {
    if (!targetArg) {
      console.error('Error: Please provide a video file path.');
      process.exit(1);
    }
    const videoPath = path.resolve(targetArg);
    const baseName = path.basename(videoPath, path.extname(videoPath));
    const dirName = path.dirname(videoPath);
    const wordsJsonPath = path.join(dirName, `${baseName}.words.json`);
    const planJsonPath = flags.plan ? path.resolve(flags.plan) : path.join(dirName, `${baseName}_plan.json`);
    const cuesJsonPath = path.join(dirName, `${baseName}_cues.json`);

    if (!fs.existsSync(wordsJsonPath)) {
      console.log(`⚠️ Words file not found at ${wordsJsonPath}. Running prep step first...`);
      const child = spawn(pyCmd, [wordsScript, videoPath], { stdio: 'inherit' });
      child.on('close', code => {
        if (code === 0) runPlanner();
        else process.exit(code || 1);
      });
    } else {
      runPlanner();
    }

    function runPlanner() {
      const words = JSON.parse(fs.readFileSync(wordsJsonPath, 'utf8'));
      const styleName = flags.style || 'naman-infotainment-motion';
      const plan = generateVibePlan(words, { style: styleName });

      fs.writeFileSync(planJsonPath, JSON.stringify({ effects: plan.effects }, null, 2));
      fs.writeFileSync(cuesJsonPath, JSON.stringify(plan.sfxCues, null, 2));

      console.log(`\n📋 [MotionOS VEOS] Storyboard generated in style: '${styleName}'`);
      console.log(`   Saved plan to: ${planJsonPath}`);
      console.log(`   Saved SFX cues to: ${cuesJsonPath}\n`);

      console.log('Planned Visual Milestones:');
      plan.effects.forEach((fx, idx) => {
        const info = fx.text ? `"${fx.text}"` : (fx.title || fx.from ? `${fx.from || ''} → ${fx.to || ''}` : '');
        console.log(`  ${idx + 1}. [${fx.start.toFixed(1)}s - ${fx.end.toFixed(1)}s] FX: ${fx.fx.padEnd(20)} ${info}`);
      });

      console.log(`\nNext step: run 'npx motionos veos preview "${videoPath}"' to review visual frames before rendering!`);
    }
    break;
  }

  case 'preview': {
    if (!targetArg) {
      console.error('Error: Please provide a video file path.');
      process.exit(1);
    }
    const videoPath = path.resolve(targetArg);
    const baseName = path.basename(videoPath, path.extname(videoPath));
    const dirName = path.dirname(videoPath);
    const planJsonPath = flags.plan ? path.resolve(flags.plan) : path.join(dirName, `${baseName}_plan.json`);

    if (!fs.existsSync(planJsonPath)) {
      console.error(`❌ Plan not found: ${planJsonPath}. Run 'npx motionos veos plan "${videoPath}"' first.`);
      process.exit(1);
    }

    const plan = JSON.parse(fs.readFileSync(planJsonPath, 'utf8'));
    const effects = plan.effects || [];
    if (effects.length === 0) {
      console.error('Plan contains no effects.');
      process.exit(1);
    }

    const midpoints = effects.map(e => ((e.start + e.end) / 2).toFixed(1));
    const stillsArg = midpoints.join(',');
    const previewOut = path.join(dirName, `${baseName}_check.png`);

    console.log(`\n📸 [MotionOS VEOS] Extracting preview frames at: ${stillsArg}s...`);
    const child = spawn(pyCmd, [
      fxScript,
      '--plan', planJsonPath,
      videoPath,
      previewOut,
      '--still', stillsArg
    ], { stdio: 'inherit' });

    child.on('close', code => {
      if (code === 0) {
        console.log(`\n✅ Storyboard preview stills extracted!`);
        console.log(`   Review file: ${previewOut}`);
        console.log(`   Ready to render? Run: npx motionos veos render "${videoPath}"`);
      } else {
        process.exit(code || 1);
      }
    });
    break;
  }

  case 'render': {
    if (!targetArg) {
      console.error('Error: Please provide a video file path.');
      process.exit(1);
    }
    const videoPath = path.resolve(targetArg);
    const baseName = path.basename(videoPath, path.extname(videoPath));
    const dirName = path.dirname(videoPath);
    const planJsonPath = flags.plan ? path.resolve(flags.plan) : path.join(dirName, `${baseName}_plan.json`);

    if (!fs.existsSync(planJsonPath)) {
      console.error(`❌ Plan not found: ${planJsonPath}. Run 'npx motionos veos plan "${videoPath}"' first.`);
      process.exit(1);
    }

    const outPath = flags.out ? path.resolve(flags.out) : path.join(dirName, `${baseName}_motionos.mp4`);
    const width = flags.width || '1080';

    console.log(`\n🎬 [MotionOS VEOS] Rendering full broadcast video...`);
    console.log(`   Input:  ${videoPath}`);
    console.log(`   Plan:   ${planJsonPath}`);
    console.log(`   Output: ${outPath} (${width}p)`);

    const child = spawn(pyCmd, [
      fxScript,
      '--plan', planJsonPath,
      videoPath,
      outPath,
      '--width', width
    ], { stdio: 'inherit' });

    child.on('close', code => {
      if (code === 0) {
        console.log(`\n🎉 [MotionOS VEOS] Render complete: ${outPath}`);
        console.log(`   Run 'npx motionos veos review "${outPath}"' for vision verification score.`);
      } else {
        process.exit(code || 1);
      }
    });
    break;
  }

  case 'review': {
    if (!targetArg) {
      console.error('Error: Please provide a video file path.');
      process.exit(1);
    }
    const videoPath = path.resolve(targetArg);
    const baseName = path.basename(videoPath, path.extname(videoPath));
    const dirName = path.dirname(videoPath);
    const contactOut = path.join(dirName, `${baseName}_contact.png`);
    console.log(`\n🔍 [MotionOS VEOS] Generating contact sheet for: ${videoPath}...`);

    const ff = spawn('ffmpeg', [
      '-y', '-i', videoPath,
      '-vf', 'fps=2,scale=270:-1,tile=6x5',
      '-frames:v', '1',
      contactOut
    ], { stdio: 'inherit' });

    ff.on('close', code => {
      if (code === 0) {
        console.log(`\n✅ Contact sheet generated: ${contactOut}`);
        console.log(`
MotionOS Vision Verification Checklist:
  [ ] Hook in first 2 seconds (immediate visual engagement)
  [ ] Mobile readability at 360px viewport
  [ ] Damped spring dynamics (no linear/cheap easing)
  [ ] Pacing: new visual event every 2 to 4 seconds
  [ ] Audio & beat transients locked to visual onsets
`);
      } else {
        process.exit(code || 1);
      }
    });
    break;
  }

  case 'styles': {
    const styles = listPlaybookStyles();
    console.log(`\n▲ MotionOS Creator Styles Gallery (${styles.length} styles):\n`);
    styles.forEach((s, idx) => {
      console.log(`  • ${s.id.padEnd(28)}: ${s.name}`);
    });
    console.log(`\nRun 'npx motionos veos playbook show <id>' for full style guide details.\n`);
    break;
  }

  default:
    console.error(`Unknown VEOS action: '${subcmd}'. Run 'npx motionos veos --help'`);
    process.exit(1);
}
