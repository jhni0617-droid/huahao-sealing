import { createRequire } from "node:module"

const require = createRequire("C:/Users/倪/.workbuddy/binaries/node/workspace/")
const { chromium } = require("playwright-core")

const exe = "C:/Users/倪/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe"
const OUT = "C:/Users/倪/Desktop/vibe codeing/huahao-sealing/out"
const browser = await chromium.launch({ executablePath: exe })

async function shot(width, name, scrollTo) {
  const ctx = await browser.newContext({ viewport: { width, height: 1000 }, deviceScaleFactor: 1.4 })
  const page = await ctx.newPage()
  await page.goto("http://127.0.0.1:3005/en/products", { waitUntil: "domcontentloaded", timeout: 120000 })
  await page.waitForTimeout(2500)

  const grid = page.locator("#products-grid")
  await grid.scrollIntoViewIfNeeded()
  await page.waitForTimeout(600)

  // 列数
  const cols = await page.evaluate(() => {
    const el = document.getElementById("products-grid")
    if (!el) return 0
    return getComputedStyle(el).gridTemplateColumns.split(" ").length
  })

  // 卡片内横向溢出检测
  const overflow = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll("#products-grid a[data-product-slug]"))
    return cards.filter((c) => c.scrollWidth > c.clientWidth + 1).map((c) => c.getAttribute("data-product-slug"))
  })

  console.log(`[${width}px] 列数=${cols} 溢出卡片=${overflow.length ? overflow.join(",") : "无"}`)

  if (scrollTo) {
    await page.getByRole("heading", { name: scrollTo }).scrollIntoViewIfNeeded()
    await page.waitForTimeout(800)
  }
  await page.screenshot({ path: `${OUT}/${name}.png` })
  await ctx.close()
}

await shot(1440, "products-4col-1440", null)
await shot(1024, "products-4col-1024", null)

// 区块顺序：图集标题应在视频标题之前
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1.4 })
const page = await ctx.newPage()
await page.goto("http://127.0.0.1:3005/en/products", { waitUntil: "domcontentloaded", timeout: 120000 })
await page.waitForTimeout(2500)
const order = await page.evaluate(() => {
  const h = Array.from(document.querySelectorAll("h2")).map((x) => x.textContent?.trim())
  return h.slice(-4)
})
console.log("页面末尾 h2 顺序:", order.join(" → "))
await page.getByRole("heading", { name: "Product Photo Gallery" }).scrollIntoViewIfNeeded()
await page.waitForTimeout(1200)
await page.screenshot({ path: `${OUT}/gallery-before-video.png` })
await ctx.close()

await browser.close()
