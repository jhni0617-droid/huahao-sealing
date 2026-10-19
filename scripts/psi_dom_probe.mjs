// Probe3: 打印"渲染阻塞请求"audit 的祖先链，找区块标题元素
import { createRequire } from 'module';
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

const info = await page.evaluate(() => {
  const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();
  const panels = [...document.querySelectorAll('[role="tabpanel"]')];
  const panel = panels[0];
  const audit = [...panel.querySelectorAll('.lh-audit')].find((a) => a.textContent.includes('渲染阻塞请求'));
  if (!audit) return 'AUDIT_NOT_FOUND';
  const chain = [];
  let el = audit;
  for (let i = 0; i < 8 && el && el !== panel; i++) {
    // 找该层内、audit 之前的兄弟标题
    let headingBefore = null;
    let node = el;
    while (node) {
      const prev = node.previousElementSibling;
      if (!prev) { node = node.parentElement; if (!node || node === panel) break; continue; }
      const t = clean(prev.textContent);
      if (t && t.length < 40) { headingBefore = { tag: prev.tagName, cls: prev.className, text: t }; break; }
      node = prev;
    }
    chain.push({ level: i, tag: el.tagName, cls: el.className.slice(0, 80), headingBefore });
    el = el.parentElement;
  }
  // 面板内所有 class 含 group/heading 的短文本元素
  const groups = [];
  panel.querySelectorAll('[class*="group"], [class*="heading"]').forEach((g) => {
    const t = clean(g.textContent);
    if (t.length > 0 && t.length < 40) groups.push({ cls: g.className.slice(0, 60), text: t });
  });
  return { chain, groups: groups.slice(0, 20) };
});
console.log(JSON.stringify(info, null, 1));
await browser.close();
