// PSI 终版提取：tabpanel 分设备 → .lh-category 分类目 → .lh-audit-group 分“机遇/诊断结果/数据分析/已通过”
import { createRequire } from 'module';
import { writeFileSync } from 'fs';
const require = createRequire('C:/Users/倪/.workbuddy/binaries/node/workspace/');
const { chromium } = require('playwright-core');

const EXE = 'C:/Users/倪/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe';
const url = 'https://pagespeed.web.dev/analysis/https-hhseal-cn/4ob6y95uas?utm_source=search_console&form_factor=mobile&hl=zh_CN';

const browser = await chromium.launch({
  executablePath: EXE,
  headless: true,
  proxy: { server: 'http://127.0.0.1:7890' },
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(22000);

const result = await page.evaluate(() => {
  const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();

  function extractFromPanel(panel) {
    // 分数
    const gauges = {};
    const re = /(\d{1,3})\s*(性能|无障碍|最佳做法|SEO)/g;
    let m;
    while ((m = re.exec(panel.innerText || '')) !== null) if (!(m[2] in gauges)) gauges[m[2]] = parseInt(m[1], 10);
    // 指标
    const metrics = {};
    panel.querySelectorAll('.lh-metric').forEach((el) => {
      const name = clean(el.querySelector('.lh-metric__title')?.textContent);
      const val = clean(el.querySelector('.lh-metric__value')?.textContent);
      if (name) metrics[name] = val;
    });
    // 类目 → 组 → audits
    const categories = {};
    panel.querySelectorAll('.lh-audit').forEach((a) => {
      const group = a.closest('.lh-audit-group');
      const groupName = clean(group?.querySelector('.lh-audit-group__title')?.textContent) || '其他';
      const cat = group?.closest('.lh-category');
      const catName = clean(cat?.querySelector('.lh-category__title, h3')?.textContent) || '性能';
      const title = clean(a.querySelector('.lh-audit__title')?.textContent);
      if (!title) return;
      const dt = clean(a.querySelector('.lh-audit__display-text')?.textContent);
      const desc = clean(a.querySelector('.lh-audit__description')?.textContent).slice(0, 300);
      const rows = [];
      a.querySelectorAll('.lh-table tbody tr').forEach((tr) => {
        const cells = [...tr.querySelectorAll('td')].map((td) => clean(td.textContent).slice(0, 100));
        if (cells.length) rows.push(cells.join(' | '));
      });
      (categories[catName] = categories[catName] || {})[groupName] =
        (categories[catName]?.[groupName] || []);
      categories[catName][groupName].push({ title, saving: dt, desc, detail: rows.slice(0, 10) });
    });
    return { gauges, metrics, categories };
  }

  const panels = [...document.querySelectorAll('[role="tabpanel"]')];
  const out = {};
  panels.forEach((p, i) => { out[i === 0 ? 'mobile' : 'desktop'] = extractFromPanel(p); });
  out._env = {
    createdAt: (document.body.innerText.match(/(\d{4}年\d{1,2}月\d{1,2}日 \d{2}:\d{2}:\d{2})创建的报告/) || [])[1],
    lighthouse: (document.body.innerText.match(/with Lighthouse ([\d.]+)/) || [])[1],
    url: 'https://hhseal.cn/en',
  };
  return out;
});

const s = {};
for (const k of ['mobile', 'desktop']) {
  if (!result[k]) continue;
  s[k] = {
    gauges: result[k].gauges,
    metrics: result[k].metrics,
    categories: Object.fromEntries(Object.entries(result[k].categories).map(([c, g]) => [c, Object.fromEntries(Object.entries(g).map(([gn, arr]) => [gn, arr.length]))])),
  };
}
console.log(JSON.stringify(s, null, 1));
writeFileSync('C:/Users/倪/Desktop/vibe codeing/huahao-sealing/scripts/psi_report.json', JSON.stringify(result, null, 1));
console.log('SAVED scripts/psi_report.json');
await browser.close();
