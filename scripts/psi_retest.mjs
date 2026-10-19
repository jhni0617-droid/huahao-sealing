// PSI 强制新分析：打开 analysis 页 → 输入框重输 URL 回车 → 等全新 Lighthouse 报告
import { createRequire } from 'module';
import { writeFileSync } from 'fs';
const require = createRequire('C:/Users/倪/.workbuddy/binaries/node/workspace/');
const { chromium } = require('playwright-core');

const EXE = 'C:/Users/倪/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe';
const TARGET = process.argv[2] || 'https://hhseal.cn/en';

const browser = await chromium.launch({
  executablePath: EXE,
  headless: true,
  proxy: { server: 'http://127.0.0.1:7890' },
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });

// 先随便开一个 analysis 页拿到输入框
await page.goto('https://pagespeed.web.dev/analysis/https-hhseal-cn?form_factor=mobile&hl=zh_CN', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(3000);

// 找 URL 输入框，重输目标 URL 并回车（强制触发新分析，绕开服务端缓存）
const input = page.locator('input[type="url"], input[name="url"], input[placeholder*="网址"], input[placeholder*="URL"]').first();
await input.fill(TARGET);
await input.press('Enter');
console.log('SUBMITTED', TARGET);

// 等新报告：轮询 innerText，最多 180s（Lighthouse 跑完 + 渲染）
let ok = false;
for (let i = 0; i < 60; i++) {
  await page.waitForTimeout(3000);
  const t = await page.evaluate(() => document.body.innerText || '');
  if (/First Contentful Paint|首次内容绘制/.test(t) && /创建的报告/.test(t)) { ok = true; break; }
  if (i % 6 === 5) console.log('waiting...', (i + 1) * 3 + 's');
}
await page.waitForTimeout(5000);

const result = await page.evaluate(() => {
  const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();

  function extractFromPanel(panel) {
    const gauges = {};
    const re = /(\d{1,3})\s*(性能|无障碍|最佳做法|SEO)/g;
    let m;
    while ((m = re.exec(panel.innerText || '')) !== null) if (!(m[2] in gauges)) gauges[m[2]] = parseInt(m[1], 10);
    const metrics = {};
    panel.querySelectorAll('.lh-metric').forEach((el) => {
      const name = clean(el.querySelector('.lh-metric__title')?.textContent);
      const val = clean(el.querySelector('.lh-metric__value')?.textContent);
      if (name) metrics[name] = val;
    });
    const categories = {};
    panel.querySelectorAll('.lh-audit').forEach((a) => {
      const group = a.closest('.lh-audit-group');
      const groupName = clean(group?.querySelector('.lh-audit-group__title')?.textContent) || '其他';
      const title = clean(a.querySelector('.lh-audit__title')?.textContent);
      if (!title) return;
      const dt = clean(a.querySelector('.lh-audit__display-text')?.textContent);
      const desc = clean(a.querySelector('.lh-audit__description')?.textContent).slice(0, 300);
      const rows = [];
      a.querySelectorAll('.lh-table tbody tr').forEach((tr) => {
        const cells = [...tr.querySelectorAll('td')].map((td) => clean(td.textContent).slice(0, 100));
        if (cells.length) rows.push(cells.join(' | '));
      });
      (categories[groupName] = categories[groupName] || []).push({ title, saving: dt, desc, detail: rows.slice(0, 10) });
    });
    return { gauges, metrics, categories };
  }

  const panels = [...document.querySelectorAll('[role="tabpanel"]')];
  const out = {};
  panels.forEach((p, i) => { out[i === 0 ? 'mobile' : 'desktop'] = extractFromPanel(p); });
  out._env = {
    createdAt: (document.body.innerText.match(/(\d{4}年\d{1,2}月\d{1,2}日 \d{2}:\d{2}:\d{2})创建的报告/) || [])[1],
    lighthouse: (document.body.innerText.match(/with Lighthouse ([\d.]+)/) || [])[1],
    url: location.href.slice(0, 120),
  };
  return out;
});

const s = {};
for (const k of ['mobile', 'desktop']) {
  if (!result[k]) continue;
  s[k] = {
    gauges: result[k].gauges,
    metrics: result[k].metrics,
    groups: Object.fromEntries(Object.entries(result[k].categories).map(([g, arr]) => [g, arr.length])),
  };
}
console.log('READY=' + ok);
console.log(JSON.stringify(s, null, 1));
writeFileSync('C:/Users/倪/Desktop/vibe codeing/huahao-sealing/scripts/psi_report_after.json', JSON.stringify(result, null, 1));
console.log('SAVED scripts/psi_report_after.json');
await browser.close();
