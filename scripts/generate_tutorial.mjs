#!/usr/bin/env node
/**
 * scripts/generate_tutorial.mjs
 * 
 * Dynamic Universal Generator for You B Tech / Faceless 16:9 Motion Graphics Tutorials
 * Works for ANY topic (Docker, Supabase, Cursor AI, Next.js, Python, Flutter, etc.)
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync, execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Default topic presets library (supports any arbitrary topic dynamically)
const TOPIC_PRESETS = {
  'cursor-ai': {
    brand: 'CURSOR AI // ZERO TO PRO',
    episode: 'EPISODE 01 // WORKFLOW SETUP',
    centerNode: { title: 'Cursor Core', icon: '⚡' },
    toolNodes: [
      { title: 'Composer Engine', desc: 'Multi-File Code Generation', icon: '📝' },
      { title: 'Terminal Agent', desc: 'Auto-Run Bash & Git', icon: '💻' },
      { title: 'Codebase Index', desc: 'Vector Embeddings Search', icon: '🧠' },
      { title: 'MCP Extensions', desc: 'Custom Tool Calling', icon: '⚙️' }
    ],
    roadmap: [
      { text: '01. Download & Import VS Code Settings', status: 'Complete' },
      { text: '02. Index Entire Local Repository', status: 'Active' },
      { text: '03. Multi-File Agentic Composer', status: 'Pending' },
      { text: '04. Production Deployment Workflow', status: 'Pending' }
    ],
    donutTarget: 88,
    comparison: {
      card1: {
        tag: 'METHOD 01',
        title: 'Traditional Coding',
        features: ['Manual syntax typing', 'Hours spent debugging', 'Context switching to Google']
      },
      card2: {
        tag: 'METHOD 02',
        title: 'Cursor AI Agent',
        features: ['Full codebase semantic memory', 'Instant refactoring across 10 files', 'Zero hallucination tool calling']
      }
    },
    captions: [
      { start: 0.0, end: 3.8, text: "Cursor AI ka complete zero to pro setup", focus: "zero to pro setup" },
      { start: 3.8, end: 7.2, text: "ab aap apne PC par free me kar sakte hain.", focus: "free me" },
      { start: 7.2, end: 11.0, text: "Isme aapko multi file composer aur codebase indexing", focus: "codebase indexing" },
      { start: 11.0, end: 14.5, text: "ek hi jagah milti hai AI terminal agent ke saath.", focus: "AI terminal agent" },
      { start: 14.5, end: 18.0, text: "Chahe aap frontend build karein,", focus: "frontend build" },
      { start: 18.0, end: 21.5, text: "ya complex fullstack backend banayein,", focus: "complex backend" },
      { start: 21.5, end: 26.2, text: "coding speed 10x fast ho jati hai! ⚡", focus: "10x fast" }
    ],
    scriptText: 'Cursor AI ka complete zero to pro setup ab aap apne PC par free me kar sakte hain. Isme aapko multi file composer aur codebase indexing ek hi jagah milti hai AI terminal agent ke saath. Chahe aap frontend build karein, ya complex fullstack backend banayein, coding speed 10x fast ho jati hai.',
    channel: 'You B Tech'
  },
  'docker': {
    brand: 'DOCKER // CONTAINER MASTERCLASS',
    episode: 'EPISODE 01 // DOCKER SETUP',
    centerNode: { title: 'Docker Engine', icon: '🐳' },
    toolNodes: [
      { title: 'Containers', desc: 'Isolated Lightweight MicroVMs', icon: '📦' },
      { title: 'Docker Compose', desc: 'Multi-Service Orchestration', icon: '🐙' },
      { title: 'Image Hub', desc: 'Official Base Repositories', icon: '🌐' },
      { title: 'Volumes', desc: 'Persistent Data Storage', icon: '💾' }
    ],
    roadmap: [
      { text: '01. Install Docker Desktop Engine', status: 'Complete' },
      { text: '02. Write Production Dockerfile', status: 'Active' },
      { text: '03. Multi-Container Compose YAML', status: 'Pending' },
      { text: '04. Cloud Kubernetes Deployment', status: 'Pending' }
    ],
    donutTarget: 92,
    comparison: {
      card1: {
        tag: 'METHOD 01',
        title: 'Heavy VirtualBox VM',
        features: ['Consumes 8GB to 16GB RAM', 'Minutes to boot OS kernel', 'Works only on my machine']
      },
      card2: {
        tag: 'METHOD 02',
        title: 'Docker Containers',
        features: ['Lightweight under 50MB RAM', 'Instant sub-second boot time', 'Runs bit-identical in production']
      }
    },
    captions: [
      { start: 0.0, end: 3.8, text: "Docker ka complete zero to pro setup", focus: "zero to pro setup" },
      { start: 3.8, end: 7.2, text: "ab aap apne PC par free me kar sakte hain.", focus: "free me" },
      { start: 7.2, end: 11.0, text: "Isme aapko lightweight containers aur compose", focus: "compose" },
      { start: 11.0, end: 14.5, text: "ek hi jagah milti hai persistent storage ke saath.", focus: "storage" },
      { start: 14.5, end: 18.0, text: "Chahe aap local machine par test karein,", focus: "local machine" },
      { start: 18.0, end: 21.5, text: "ya production cloud server par deploy karein,", focus: "cloud server" },
      { start: 21.5, end: 26.2, text: "deploy sirf 1 second me ho jata hai! 🐳", focus: "1 second me deploy" }
    ],
    scriptText: 'Docker ka complete zero to pro setup ab aap apne PC par free me kar sakte hain. Isme aapko lightweight containers aur compose ek hi jagah milti hai persistent storage ke saath. Chahe aap local machine par test karein, ya production cloud server par deploy karein, deploy sirf 1 second me ho jata hai.',
    channel: 'You B Tech'
  },
  'supabase': {
    brand: 'SUPABASE // BACKEND IN SECONDS',
    episode: 'EPISODE 01 // DATABASE ARCHITECTURE',
    centerNode: { title: 'Supabase Core', icon: '⚡' },
    toolNodes: [
      { title: 'Postgres DB', desc: 'Relational Vector Storage', icon: '🐘' },
      { title: 'Auth & MFA', desc: 'Row Level Security (RLS)', icon: '🔒' },
      { title: 'Realtime Engine', desc: 'Websocket Event Streaming', icon: '📡' },
      { title: 'Edge Functions', desc: 'Serverless Deno TypeScript', icon: '⚡' }
    ],
    roadmap: [
      { text: '01. Provision Postgres Database', status: 'Complete' },
      { text: '02. Configure Row Level Security (RLS)', status: 'Active' },
      { text: '03. Realtime Chat Subscriptions', status: 'Pending' },
      { text: '04. Serverless Edge Functions', status: 'Pending' }
    ],
    donutTarget: 95,
    comparison: {
      card1: {
        tag: 'METHOD 01',
        title: 'Legacy Firebase',
        features: ['Vendor lock-in proprietary NoSQL', 'Complex aggregation queries', 'Expensive read/write billing']
      },
      card2: {
        tag: 'METHOD 02',
        title: 'Supabase Postgres',
        features: ['100% Open source Postgres', 'Native SQL joins and pgvector', 'Generous free tier with RLS']
      }
    },
    captions: [
      { start: 0.0, end: 3.8, text: "Supabase ka complete zero to pro setup", focus: "zero to pro setup" },
      { start: 3.8, end: 7.2, text: "ab aap apne PC par free me kar sakte hain.", focus: "free me" },
      { start: 7.2, end: 11.0, text: "Isme aapko Postgres database aur RLS auth", focus: "Postgres database" },
      { start: 11.0, end: 14.5, text: "ek hi jagah milti hai Realtime engine ke saath.", focus: "Realtime engine" },
      { start: 14.5, end: 18.0, text: "Chahe aap web app build karein,", focus: "web app" },
      { start: 18.0, end: 21.5, text: "ya AI agent memory configure karein,", focus: "AI agent memory" },
      { start: 21.5, end: 26.2, text: "backend sirf 5 minute me live ho jata hai! ⚡", focus: "5 minute me live" }
    ],
    scriptText: 'Supabase ka complete zero to pro setup ab aap apne PC par free me kar sakte hain. Isme aapko Postgres database aur RLS auth ek hi jagah milti hai Realtime engine ke saath. Chahe aap web app build karein, ya AI agent memory configure karein, backend sirf 5 minute me live ho jata hai.',
    channel: 'You B Tech'
  }
};

/**
 * Build dynamic HTML from any arbitrary topic config
 */
export function buildTutorialHtml(config) {
  const tplPath = path.join(ROOT_DIR, 'compositions', 'you_b_tech_explainer', 'index.html');
  let html = fs.readFileSync(tplPath, 'utf8');

  // Replace Brand & Episode Header
  html = html.replace(/HERMES AGENT \/\/ ZERO TO PRO/g, config.brand);
  html = html.replace(/EPISODE 01 \/\/ PC SETUP/g, config.episode);

  // Replace Center Node
  html = html.replace(/🤖/g, config.centerNode.icon);
  html = html.replace(/Hermes Core/g, config.centerNode.title);

  // Replace Tool Nodes
  if (config.toolNodes && config.toolNodes.length === 4) {
    html = html.replace(/Browser Engine/g, config.toolNodes[0].title);
    html = html.replace(/Autonomous Web Scraping/g, config.toolNodes[0].desc);

    html = html.replace(/Multi-App Control/g, config.toolNodes[1].title);
    html = html.replace(/Native Desktop & Mobile/g, config.toolNodes[1].desc);

    html = html.replace(/Reasoning Model/g, config.toolNodes[2].title);
    html = html.replace(/DeepSeek & Claude 3\.7/g, config.toolNodes[2].desc);

    html = html.replace(/Tools & APIs/g, config.toolNodes[3].title);
    html = html.replace(/Local Config & MCP/g, config.toolNodes[3].desc);
  }

  // Replace Roadmap Card
  html = html.replace(/Hermes Masterclass Roadmap/g, `${config.brand} Roadmap`);
  if (config.roadmap && config.roadmap.length === 4) {
    html = html.replace(/01\. Local PC Environment Setup/g, config.roadmap[0].text);
    html = html.replace(/02\. Multi-Tool Function Calling/g, config.roadmap[1].text);
    html = html.replace(/03\. Browser Automation Engine/g, config.roadmap[2].text);
    html = html.replace(/04\. 24\/7 Production Deployment/g, config.roadmap[3].text);
  }

  // Replace Donut Chart
  if (config.donutTarget) {
    html = html.replace(/const targetPct = 84;/g, `const targetPct = ${config.donutTarget};`);
  }

  // Replace Comparison Cards
  if (config.comparison) {
    html = html.replace(/Your Local PC/g, config.comparison.card1.title);
    html = html.replace(/24\/7 Cloud Server/g, config.comparison.card2.title);

    if (config.comparison.card1.features && config.comparison.card1.features.length >= 3) {
      html = html.replace(/100% Free & Open Source/g, config.comparison.card1.features[0]);
      html = html.replace(/Runs on Windows, Mac & Linux/g, config.comparison.card1.features[1]);
      html = html.replace(/Zero API fees using Ollama/g, config.comparison.card1.features[2]);
    }
    if (config.comparison.card2.features && config.comparison.card2.features.length >= 3) {
      html = html.replace(/Always Online 24\/7 Without Sleep/g, config.comparison.card2.features[0]);
      html = html.replace(/Direct Remote Desktop \(RDP\)/g, config.comparison.card2.features[1]);
      html = html.replace(/Automated Daily Cron Tasks/g, config.comparison.card2.features[2]);
    }
  }

  // Replace Laptop SaaS Mockup Title
  html = html.replace(/Hermes Agent Hub/g, `${config.centerNode.title} Hub`);

  // Replace Captions
  if (config.captions && config.captions.length > 0) {
    const captionsJs = JSON.stringify(config.captions);
    html = html.replace(/const captionsData = \[[\s\S]*?\];/g, `const captionsData = ${captionsJs};`);
  }

  return html;
}

// CLI Execution
const args = process.argv.slice(2);
const topicArg = args[0] || 'cursor-ai';
const outArg = args[1] || `out/tutorial_${topicArg}.mp4`;

console.log(`\n▲ You B Tech Universal Tutorial Generator`);
console.log(`Generating video for topic: [${topicArg}] -> ${outArg}\n`);

const config = TOPIC_PRESETS[topicArg] || {
  brand: `${topicArg.toUpperCase()} // MASTERCLASS`,
  episode: 'EPISODE 01 // COMPLETE SETUP',
  centerNode: { title: `${topicArg} Core`, icon: '⚡' },
  toolNodes: [
    { title: 'Core Engine', desc: 'High Performance Runtime', icon: '⚙️' },
    { title: 'Automations', desc: 'Workflows & Event Pipeline', icon: '🔄' },
    { title: 'Integrations', desc: 'APIs & Webhooks', icon: '🌐' },
    { title: 'Deployment', desc: '24/7 Production Setup', icon: '🚀' }
  ],
  roadmap: [
    { text: `01. Install & Configure ${topicArg}`, status: 'Complete' },
    { text: '02. Setup Core Architecture', status: 'Active' },
    { text: '03. Connect APIs & Automations', status: 'Pending' },
    { text: '04. Final Production Deployment', status: 'Pending' }
  ],
  donutTarget: 85,
  comparison: {
    card1: {
      tag: 'METHOD 01',
      title: 'Old Manual Method',
      features: ['Slow and repetitive', 'Complex manual setup', 'Frequent runtime errors']
    },
    card2: {
      tag: 'METHOD 02',
      title: `Modern ${topicArg}`,
      features: ['100% Automated workflow', 'Clean modern architecture', 'Zero maintenance']
    }
  },
  captions: [
    { start: 0.0, end: 3.8, text: `${topicArg} ka complete zero to pro setup`, focus: "zero to pro setup" },
    { start: 3.8, end: 7.2, text: "ab aap apne PC par free me kar sakte hain.", focus: "free me" },
    { start: 7.2, end: 11.0, text: `Isme aapko modern architecture aur automations`, focus: "automations" },
    { start: 11.0, end: 14.5, text: `ek hi jagah milti hai clean APIs ke saath.`, focus: "clean APIs" },
    { start: 14.5, end: 18.0, text: `Chahe aap local machine par run karein,`, focus: "local machine" },
    { start: 18.0, end: 21.5, text: `ya cloud cluster par deploy karein,`, focus: "cloud cluster" },
    { start: 21.5, end: 26.2, text: `setup sirf 5 minute me complete ho jata hai! ✨`, focus: "5 minute me complete" }
  ],
  scriptText: `${topicArg} ka complete zero to pro setup ab aap apne PC par free me kar sakte hain. Isme aapko modern architecture aur automations ek hi jagah milti hai clean APIs ke saath. Chahe aap local machine par run karein, ya cloud cluster par deploy karein, setup sirf 5 minute me complete ho jata hai.`,
  channel: 'You B Tech'
};

// 1. Generate Voiceover using edge-tts
const voiceFile = path.join(ROOT_DIR, 'scratch', `tutorial_${topicArg}_voice.mp3`);
const genVoiceCmd = `python -c "import asyncio, edge_tts; asyncio.run(edge_tts.Communicate('''${config.scriptText}''', 'hi-IN-MadhurNeural', rate='+2%').save('''${voiceFile.replace(/\\/g, '/')}'''))"`;
console.log('[1/4] Generating Neural Hindi Voiceover...');
execSync(genVoiceCmd, { stdio: 'inherit', cwd: ROOT_DIR });

// 2. Synthesize Procedural Audio SFX
const sfxFile = path.join(ROOT_DIR, 'scratch', `tutorial_${topicArg}_sfx.wav`);
const cues = [
  { time: 0.2, type: 'pop', volume: 0.35 },
  { time: 1.2, type: 'whoosh', volume: 0.3 },
  { time: 2.0, type: 'click', volume: 0.4 },
  { time: 6.8, type: 'whoosh', volume: 0.35 },
  { time: 8.5, type: 'ding', volume: 0.4 },
  { time: 14.2, type: 'whoosh', volume: 0.35 },
  { time: 15.5, type: 'click', volume: 0.4 },
  { time: 16.8, type: 'click', volume: 0.4 },
  { time: 21.0, type: 'whoosh', volume: 0.4 },
  { time: 22.5, type: 'ding', volume: 0.5 }
];
const cuesFile = path.join(ROOT_DIR, 'scratch', `tutorial_${topicArg}_cues.json`);
fs.writeFileSync(cuesFile, JSON.stringify(cues));
execSync(`node sfx.mjs "${cuesFile}" "${sfxFile}"`, { stdio: 'inherit', cwd: ROOT_DIR });

// 3. Mix Audio to -14 LUFS
const finalAudio = path.join(ROOT_DIR, 'scratch', `tutorial_${topicArg}_final_audio.wav`);
console.log('[2/4] Mixing Audio to -14 LUFS...');
execSync(`ffmpeg -y -i "${voiceFile}" -i "${sfxFile}" -filter_complex "[0:a]volume=1.0[v];[1:a]volume=0.7[s];[v][s]amix=inputs=2:duration=first:dropout_transition=2,loudnorm=I=-14:LRA=7:TP=-1.5[out]" -map "[out]" "${finalAudio}"`, { stdio: 'ignore', cwd: ROOT_DIR });

// 4. Build Dynamic HTML Composition
const dynamicHtml = buildTutorialHtml(config);
const dynamicHtmlPath = path.join(ROOT_DIR, 'scratch', `tutorial_${topicArg}.html`);
fs.writeFileSync(dynamicHtmlPath, dynamicHtml, 'utf8');

// 5. Render Video Deterministically
console.log('[3/4] Rendering 16:9 Landscape Frames with Playwright...');
const silentVideo = path.join(ROOT_DIR, 'scratch', `tutorial_${topicArg}_silent.mp4`);
execSync(`node render.mjs --html "${dynamicHtmlPath}" --w 1920 --h 1080 --dur 25.5 --fps 30 --out "${silentVideo}"`, { stdio: 'inherit', cwd: ROOT_DIR });

// 6. Mux Audio & Export Final Video
console.log('[4/4] Muxing Audio and Finalizing Video...');
fs.mkdirSync(path.dirname(outArg), { recursive: true });
execSync(`ffmpeg -y -i "${silentVideo}" -i "${finalAudio}" -c:v copy -c:a aac -b:a 192k -shortest "${outArg}"`, { stdio: 'ignore', cwd: ROOT_DIR });

// Generate Contact Sheet Proof
const contactPng = path.join(path.dirname(outArg), `contact_${path.basename(outArg, '.mp4')}.png`);
execSync(`ffmpeg -y -i "${outArg}" -vf "fps=1/2.6,scale=360:-1,tile=5x2" -frames:v 1 "${contactPng}"`, { stdio: 'ignore', cwd: ROOT_DIR });

console.log(`\n✅ Tutorial Video Generated Successfully!`);
console.log(`🎥 Video: ${outArg}`);
console.log(`🖼️ Contact Sheet: ${contactPng}\n`);
