#!/usr/bin/env node

/**
 * create-antigravity-motion
 * 
 * Interactive scaffolding CLI for Antigravity Motion Studio.
 * Usage:
 *   npx create-antigravity-motion [project-name] [options]
 */

import { existsSync, readdirSync, cpSync, renameSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import readline from 'node:readline/promises';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Terminal ANSI color helpers
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  amber: '\x1b[38;2;245;158;11m',
  terracotta: '\x1b[38;2;217;119;87m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  gray: '\x1b[90m'
};

function banner() {
  console.log(`
${c.amber}${c.bold}▲ Antigravity Motion Studio${c.reset}
${c.dim}High-Performance Programmatic Motion Design & Video Engine${c.reset}
`);
}

function printHelp() {
  banner();
  console.log(`
${c.bold}Usage:${c.reset}
  npx create-antigravity-motion [project-directory] [options]

${c.bold}Options:${c.reset}
  --template, -t <name>    Template to use: canvas, saas-showreel (default: canvas)
  --install, -i            Automatically install dependencies
  --no-install             Skip npm install
  --yes, -y                Skip interactive prompts and use defaults
  --help, -h               Show this help message

${c.bold}Examples:${c.reset}
  npx create-antigravity-motion my-motion-video
  npx create-antigravity-motion my-promo --template saas-showreel --install
`);
}

// Parse command line arguments
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  printHelp();
  process.exit(0);
}

let projectName = args.find(a => !a.startsWith('-'));
const isYes = args.includes('--yes') || args.includes('-y');
const shouldInstallExplicit = args.includes('--install') || args.includes('-i');
const noInstall = args.includes('--no-install');

let templateArg = null;
const tIndex = args.findIndex(a => a === '--template' || a === '-t');
if (tIndex > -1 && args[tIndex + 1]) {
  templateArg = args[tIndex + 1];
}

// Detect package manager
const userAgent = process.env.npm_config_user_agent || '';
const pkgManager = userAgent.includes('pnpm') ? 'pnpm' : userAgent.includes('yarn') ? 'yarn' : userAgent.includes('bun') ? 'bun' : 'npm';

async function run() {
  banner();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    // 1. Prompt Project Name if not provided
    if (!projectName) {
      if (isYes) {
        projectName = 'my-motion-video';
      } else {
        const answer = await rl.question(`${c.bold}?${c.reset} What is your project named? ${c.dim}(my-motion-video)${c.reset} `);
        projectName = answer.trim() || 'my-motion-video';
      }
    }

    const targetDir = path.resolve(process.cwd(), projectName);

    // 2. Validate directory safety
    if (existsSync(targetDir)) {
      const files = readdirSync(targetDir).filter(f => !f.startsWith('.git'));
      if (files.length > 0) {
        console.error(`\n${c.red}Error:${c.reset} Directory "${projectName}" already exists and is not empty.`);
        process.exit(1);
      }
    }

    // 3. Choose template
    let template = templateArg || 'canvas';
    if (!templateArg && !isYes) {
      console.log(`\n${c.bold}?${c.reset} Select a starter template:`);
      console.log(`  ${c.cyan}1) canvas${c.reset}        - Pure 0xMovez deterministic canvas + closed-form springs ${c.dim}(Recommended)${c.reset}`);
      console.log(`  ${c.cyan}2) saas-showreel${c.reset} - SaaS promo video + procedural SFX + cues`);
      const choice = (await rl.question(`  ${c.dim}Enter number [1-2] (default: 1):${c.reset} `)).trim();
      if (choice === '2' || choice.toLowerCase() === 'saas' || choice.toLowerCase() === 'saas-showreel') {
        template = 'saas-showreel';
      } else {
        template = 'canvas';
      }
    }

    const templateDir = path.join(ROOT_DIR, 'templates', template);
    if (!existsSync(templateDir)) {
      console.error(`\n${c.red}Error:${c.reset} Template "${template}" not found. Available: canvas, saas-showreel`);
      process.exit(1);
    }

    console.log(`\n${c.green}✔${c.reset} Scaffolding project into ${c.bold}${projectName}${c.reset}...`);

    // 4. Copy template files
    cpSync(templateDir, targetDir, { recursive: true });

    // Handle _gitignore -> .gitignore
    const gitignorePath = path.join(targetDir, '_gitignore');
    if (existsSync(gitignorePath)) {
      renameSync(gitignorePath, path.join(targetDir, '.gitignore'));
    }

    // Update package.json name
    const pkgPath = path.join(targetDir, 'package.json');
    if (existsSync(pkgPath)) {
      const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
      pkg.name = path.basename(projectName).toLowerCase().replace(/[^a-z0-9-_]/g, '-');
      writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
    }

    // 5. Git Init
    try {
      execSync('git init', { cwd: targetDir, stdio: 'ignore' });
      console.log(`${c.green}✔${c.reset} Initialized empty Git repository.`);
    } catch {
      // Git not available
    }

    // 6. Install dependencies if requested or interactive
    let doInstall = shouldInstallExplicit || (!noInstall && isYes);
    if (!shouldInstallExplicit && !noInstall && !isYes) {
      const ans = await rl.question(`\n${c.bold}?${c.reset} Install dependencies with ${c.cyan}${pkgManager}${c.reset}? ${c.dim}(Y/n)${c.reset} `);
      doInstall = ans.toLowerCase() !== 'n';
    }

    if (doInstall) {
      console.log(`\n${c.dim}Installing dependencies using ${pkgManager}...${c.reset}`);
      try {
        execSync(`${pkgManager} install`, { cwd: targetDir, stdio: 'inherit' });
        console.log(`${c.green}✔${c.reset} Installed dependencies.`);
      } catch (err) {
        console.warn(`${c.amber}Warning:${c.reset} Failed to install dependencies automatically.`);
      }
    }

    // 7. Success Banner & Instructions
    console.log(`
${c.green}${c.bold}Success!${c.reset} Created ${c.bold}${projectName}${c.reset} at ${targetDir}

Inside that directory, you can run:

  ${c.cyan}cd ${projectName}${c.reset}
  ${!doInstall ? `${c.cyan}${pkgManager} install${c.reset}\n  ` : ''}${c.cyan}npx playwright install chromium${c.reset}
  ${c.cyan}${pkgManager} run render${c.reset}      ${c.gray}# Render composition to out/silent.mp4${c.reset}
  ${c.cyan}${pkgManager} test${c.reset}            ${c.gray}# Run deterministic physics unit tests${c.reset}

${c.dim}Happy motion coding with Antigravity Motion Studio!${c.reset}
`);

  } finally {
    rl.close();
  }
}

run().catch((err) => {
  console.error(`\n${c.red}Error:${c.reset}`, err.message);
  process.exit(1);
});
