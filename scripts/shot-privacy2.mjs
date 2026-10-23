import { createRequire } from "node:module"

const require = createRequire("C:/Users/倪/.workbuddy/binaries/node/workspace/")
const { chromium } = require("playwright-core")

const exe = "C:/Users/倪/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe"
const OUT = "C:/Users/倪/Desktop/vibe codeing/huahao-sealing/out"

const browser = await chromium.launch({ executablePath: exe })

// A. 页脚法务链接（先接受横幅，否则被遮住）
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1.5 })
const page = await ctx.newPage()
await page.goto("http://127.0.0.1:3005/en?consent=demo", { waitUntil: "domcontentloaded", timeout: 90000 })
await page.waitForTimeout(3500)
await page.getByRole("button", { name: /Accept all/i }).click()
await page.waitForTimeout(800)
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await page.waitForTimeout(1200)
await page.screenshot({ path: `${OUT}/footer-legal-links.png` })
await ctx.close()

// B. 隐私页 Cookie 一节的代码样式
const ctx2 = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1.5 })
const p2 = await ctx2.newPage()
await p2.goto("http://127.0.0.1:3005/en/privacy", { waitUntil: "domcontentloaded", timeout: 90000 })
await p2.waitForTimeout(2500)
await p2.getByText("5. Cookies and similar technologies").scrollIntoViewIfNeeded()
await p2.waitForTimeout(500)
await p2.screenshot({ path: `${OUT}/privacy-en-cookies.png` })
await ctx2.close()

// C. 移动端：横幅 + 底部询盘栏是否让位
const ctx3 = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true })
const p3 = await ctx3.newPage()
await p3.goto("http://127.0.0.1:3005/en?consent=demo", { waitUntil: "domcontentloaded", timeout: 90000 })
await p3.waitForTimeout(3500)
await p3.evaluate(() => window.scrollBy(0, 1200))
await p3.waitForTimeout(1500)
const bannerBox = await p3.locator('[role="dialog"][aria-label]').boundingBox()
const ctaBar = p3.locator("div.lg\\:hidden.fixed").first()
const ctaBox = await ctaBar.boundingBox().catch(() => null)
console.log("banner top:", bannerBox && Math.round(bannerBox.y), "height:", bannerBox && Math.round(bannerBox.height))
console.log("cta bottom:", ctaBox && Math.round(ctaBox.y + ctaBox.height), "cta top:", ctaBox && Math.round(ctaBox.y))
await p3.screenshot({ path: `${OUT}/cookie-banner-mobile-scrolled.png` })
await ctx3.close()

await browser.close()
console.log("done")
