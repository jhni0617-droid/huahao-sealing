import { createRequire } from "node:module"

const require = createRequire("C:/Users/倪/.workbuddy/binaries/node/workspace/")
const { chromium } = require("playwright-core")

const exe = "C:/Users/倪/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe"
const OUT = "C:/Users/倪/Desktop/vibe codeing/huahao-sealing/out"
const browser = await chromium.launch({ executablePath: exe })

const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 })
const page = await ctx.newPage()
const bad = []
page.on("response", (r) => { if (r.status() >= 400) bad.push(`${r.status()} ${r.url().slice(-45)}`) })

await page.goto("http://127.0.0.1:3005/zh", { waitUntil: "domcontentloaded", timeout: 120000 })
await page.waitForTimeout(3000)

const rail = page.locator(".product-rail-track")
// 轨道在无限动画中，scrollIntoViewIfNeeded 会因元素持续移动而超时，改为直接滚动到它的位置
await page.evaluate(() => {
  const el = document.querySelector(".product-rail-track")
  if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 250)
})
await page.waitForTimeout(3000)

const box = await rail.boundingBox()
const cards = await page.locator(".product-rail-track > div").count()
const firstTransform = await rail.evaluate((el) => getComputedStyle(el).transform)
await page.waitForTimeout(2500)
const secondTransform = await rail.evaluate((el) => getComputedStyle(el).transform)

console.log("轨道卡片数（应为 202）:", cards)
console.log("轨道宽度:", Math.round(box.width))
console.log("动画位移:", firstTransform.slice(0, 28), "→", secondTransform.slice(0, 28))
console.log("动画是否在跑:", firstTransform !== secondTransform)
console.log("资源失败:", bad.length ? bad.slice(0, 5).join(" | ") : "无")

await page.screenshot({ path: `${OUT}/home-rail-desktop.png` })
await ctx.close()

const ctx2 = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true })
const p2 = await ctx2.newPage()
await p2.goto("http://127.0.0.1:3005/zh", { waitUntil: "domcontentloaded", timeout: 120000 })
await p2.waitForTimeout(2500)
await p2.evaluate(() => {
  const el = document.querySelector(".product-rail-track")
  if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 200)
})
await p2.waitForTimeout(2500)
await p2.screenshot({ path: `${OUT}/home-rail-mobile.png` })
const hOver = await p2.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1)
console.log("移动端横向滚动:", hOver)
await ctx2.close()

await browser.close()
