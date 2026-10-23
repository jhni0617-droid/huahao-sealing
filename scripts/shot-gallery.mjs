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
  if (r.status() >= 400) failed.push(`${r.status()} ${r.url().slice(-60)}`)
})

await page.goto("http://127.0.0.1:3005/en/products", { waitUntil: "domcontentloaded", timeout: 120000 })
await page.waitForTimeout(3000)

const heading = page.getByRole("heading", { name: "Product Photo Gallery" })
await heading.scrollIntoViewIfNeeded()
await page.waitForTimeout(1500)
await page.screenshot({ path: `${OUT}/gallery-top.png` })

// 向下滚一屏，看懒加载与网格
await page.evaluate(() => window.scrollBy(0, 900))
await page.waitForTimeout(1500)
await page.screenshot({ path: `${OUT}/gallery-more.png` })

// 打开第一张
const firstTile = page.locator("button[aria-label^='Enlarge']").first()
await firstTile.click()
await page.waitForTimeout(1200)
await page.screenshot({ path: `${OUT}/gallery-lightbox.png` })

const counter = await page.locator("span", { hasText: /^\d+ \/ \d+$/ }).first().textContent().catch(() => null)
console.log("lightbox 计数:", counter)

// 右切一张
await page.getByRole("button", { name: "Next", exact: true }).click()
await page.waitForTimeout(800)
console.log("切换后计数:", await page.locator("span", { hasText: /^\d+ \/ \d+$/ }).first().textContent().catch(() => null))

// Esc 关闭
await page.keyboard.press("Escape")
await page.waitForTimeout(600)
console.log("关闭后 dialog 数:", await page.locator('[role="dialog"][aria-modal="true"]').count())

console.log("图片/资源失败:", failed.length ? failed.slice(0, 6).join(" | ") : "无")
await browser.close()
