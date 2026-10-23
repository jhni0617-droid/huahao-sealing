import { createRequire } from "node:module"

const require = createRequire("C:/Users/倪/.workbuddy/binaries/node/workspace/")
const { chromium } = require("playwright-core")

const exe = "C:/Users/倪/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe"
const OUT = "C:/Users/倪/Desktop/vibe codeing/huahao-sealing/out"
const browser = await chromium.launch({ executablePath: exe })

const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1.5 })
const page = await ctx.newPage()

const failed = []
page.on("response", (r) => {
  if (r.status() >= 400) failed.push(`${r.status()} ${r.url()}`)
})

await page.goto("http://127.0.0.1:3005/en", { waitUntil: "domcontentloaded", timeout: 90000 })
await page.waitForTimeout(3500)

const newsTitle = page.getByText("Company News", { exact: true }).first()
await newsTitle.scrollIntoViewIfNeeded()
await page.waitForTimeout(1200)
await page.screenshot({ path: `${OUT}/news-cover-desktop.png` })

// 第一张封面的实际 src
const firstImg = page.locator('img[src*="company-team-huoqiu"], img[src*="company-plaque"]').first()
const src = await firstImg.getAttribute("src").catch(() => null)
const box = await firstImg.boundingBox().catch(() => null)
console.log("封面 src:", src)
console.log("封面尺寸:", box && `${Math.round(box.width)}x${Math.round(box.height)}`)

// 博客列表页
await page.goto("http://127.0.0.1:3005/en/blog", { waitUntil: "domcontentloaded", timeout: 90000 })
await page.waitForTimeout(3000)
await page.screenshot({ path: `${OUT}/blog-list-cover.png` })

console.log("4xx/5xx:", failed.length ? failed.slice(0, 5).join(" | ") : "无")
await browser.close()
