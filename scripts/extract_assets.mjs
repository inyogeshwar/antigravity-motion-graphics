/**
 * scripts/extract_assets.mjs
 * 
 * Utility script to launch headless Playwright and capture responsive screenshots
 * and assets from any landing page for product showreels.
 * 
 * Usage:
 *   node scripts/extract_assets.mjs <url> [outputDir]
 */

import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import path from 'node:path';

const targetUrl = process.argv[2] || 'https://viralokit.vercel.app/';
const outDir = process.argv[3] || 'assets';

mkdirSync(outDir, { recursive: true });

console.log(`[Asset Extractor] Launching browser to scrape assets from: ${targetUrl}`);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1080 } });

try {
  await page.goto(targetUrl, { waitUntil: 'networkidle' });

  // Capture full desktop hero
  await page.screenshot({ path: path.join(outDir, 'hero_desktop.png'), fullPage: false });
  console.log(`[Asset Extractor] Saved ${path.join(outDir, 'hero_desktop.png')}`);

  // Switch to mobile viewport
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: path.join(outDir, 'hero_mobile.png'), fullPage: false });
  console.log(`[Asset Extractor] Saved ${path.join(outDir, 'hero_mobile.png')}`);
} finally {
  await browser.close();
  console.log('[Asset Extractor] Finished asset capture.');
}
