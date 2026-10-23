import { createRequire } from "node:module"

const require = createRequire("C:/Users/倪/.workbuddy/binaries/node/workspace/")
const { chromium } = require("playwright-core")

const exe = "C:/Users/倪/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe"
const browser = await chromium.launch({ executablePath: exe })
const page = await browser.newPage({ viewport: { width: 1280, height: 1000 }, deviceScaleFactor: 1.5 })
await page.goto("http://127.0.0.1:3005/en/blog/when-to-drop-grease-graphite-bearings", { waitUntil: "networkidle" })

// 滚到外链所在段落并截图
const link = page.locator('a[href="https://tflbearing.com/blog/bearing-grease-lithium-vs-synthetic-comparison.html"]').first()
await link.scrollIntoViewIfNeeded()
await page.waitForTimeout(600)
await page.screenshot({ path: "C:/Users/倪/Desktop/vibe codeing/huahao-sealing/out/blog-link-context.png" })

// 文章头部
await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(400)
await page.screenshot({ path: "C:/Users/倪/Desktop/vibe codeing/huahao-sealing/out/blog-head.png" })

console.log("ok")
await browser.close()
