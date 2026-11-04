// scripts/test_snapshots.mjs
import { chromium } from 'playwright';
import path from 'node:path';
import { mkdirSync } from 'node:fs';

async function main() {
  mkdirSync('scratch/snapshots', { recursive: true });
  const browser = await chromium.launch({
    headless: true,
    args: ['--allow-file-access-from-files', '--disable-gpu', '--no-sandbox']
  });
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1920 },
    deviceScaleFactor: 1
  });

  const htmlPath = path.resolve('compositions/motionos_reel/index.html');
  console.log('Loading:', htmlPath);
  await page.goto('file:///' + htmlPath.replace(/\\/g, '/'));
  await page.evaluate(() => document.fonts.ready);

  const times = [
    { t: 0.8, name: 'scene1_hook.png' },
    { t: 3.0, name: 'scene2_brand.png' },
    { t: 4.4, name: 'scene3_code.png' },
    { t: 6.2, name: 'scene4_captions.png' },
    { t: 7.7, name: 'scene5_springs.png' },
    { t: 8.9, name: 'scene6_emojis.png' },
    { t: 11.2, name: 'scene7_finale.png' }
  ];

  for (const item of times) {
    await page.evaluate((currT) => window.seek(currT), item.t);
    const out = `scratch/snapshots/${item.name}`;
    await page.screenshot({ path: out, type: 'png' });
    console.log(`Saved snapshot at t=${item.t}s -> ${out}`);
  }

  await browser.close();
  console.log('Snapshot testing complete!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
