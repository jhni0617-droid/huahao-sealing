import { createRequire } from "node:module"

const require = createRequire("C:/Users/倪/.workbuddy/binaries/node/workspace/")
const { chromium } = require("playwright-core")

const exe = "C:/Users/倪/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe"
const OUT = "C:/Users/倪/Desktop/vibe codeing/huahao-sealing/out"

const browser = await chromium.launch({ executablePath: exe })
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1.5 })
const page = await ctx.newPage()

await page.goto("http://127.0.0.1:3005/en/privacy", { waitUntil: "domcontentloaded", timeout: 90000 })
await page.waitForTimeout(3000)
await page.screenshot({ path: `${OUT}/privacy-en-top.png` })

// 滚到第二节看正文排版
await page.evaluate(() => window.scrollBy(0, 900))
await page.waitForTimeout(400)
await page.screenshot({ path: `${OUT}/privacy-en-body.png` })

// 中文版首屏
await page.goto("http://127.0.0.1:3005/zh/privacy", { waitUntil: "domcontentloaded", timeout: 90000 })
await page.waitForTimeout(2500)
await page.screenshot({ path: `${OUT}/privacy-zh-top.png` })

// 泰文版正文（检查长词换行）
await page.goto("http://127.0.0.1:3005/th/privacy", { waitUntil: "domcontentloaded", timeout: 90000 })
await page.waitForTimeout(2500)
await page.evaluate(() => window.scrollBy(0, 700))
await page.waitForTimeout(400)
await page.screenshot({ path: `${OUT}/privacy-th-body.png` })

// 横幅里的隐私链接
await page.goto("http://127.0.0.1:3005/en?consent=demo", { waitUntil: "domcontentloaded", timeout: 90000 })
await page.waitForTimeout(3500)
await page.screenshot({ path: `${OUT}/cookie-banner-with-link.png` })

// 页脚
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await page.waitForTimeout(1200)
await page.screenshot({ path: `${OUT}/footer-legal-links.png` })

await browser.close()
console.log("done")
