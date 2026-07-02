const { chromium } = require('playwright');
(async () => {

const BASE = 'http://localhost:8931/index.html';
const OUT = 'output/playwright/audit/after';
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'laptop', width: 1200, height: 800 },
  { name: 'tablet', width: 1024, height: 768 },
  { name: 'mobile', width: 390, height: 844 },
];

const browser = await chromium.launch();

for (const vp of viewports) {
  for (const theme of ['light', 'dark']) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();
    await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
    const errors = [];
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    page.on('pageerror', (e) => errors.push(String(e)));
    await page.goto(BASE, { waitUntil: 'networkidle' }).catch(() => page.goto(BASE));
    await page.waitForTimeout(800);

    const tag = `${vp.name}-${theme}`;
    await page.screenshot({ path: `${OUT}/${tag}-1-index.png`, fullPage: vp.name === 'mobile' });

    // select first project
    await page.locator('.project-row').first().click();
    await page.waitForTimeout(600);
    await page.screenshot({ path: `${OUT}/${tag}-2-selected.png`, fullPage: vp.name === 'mobile' });

    // expand
    const open = page.locator('#previewOpen');
    if (await open.isVisible()) {
      await open.click();
      await page.waitForTimeout(600);
      await page.screenshot({ path: `${OUT}/${tag}-3-expanded.png`, fullPage: vp.name === 'mobile' });
    }

    // horizontal overflow check
    const overflow = await page.evaluate(() => {
      const d = document.documentElement;
      return { scrollW: d.scrollWidth, clientW: d.clientWidth, bodyScrollW: document.body.scrollWidth };
    });
    if (overflow.scrollW > overflow.clientW) {
      console.log(`OVERFLOW ${tag}: scrollWidth ${overflow.scrollW} > clientWidth ${overflow.clientW}`);
    }
    if (errors.length) console.log(`ERRORS ${tag}:`, errors.slice(0, 5).join(' | '));
    await ctx.close();
  }
}

await browser.close();
console.log('done');
})();
