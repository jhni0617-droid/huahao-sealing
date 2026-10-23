import { createRequire } from "node:module"

const require = createRequire("C:/Users/倪/.workbuddy/binaries/node/workspace/")
const { chromium } = require("playwright-core")

const exe = "C:/Users/倪/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe"
const browser = await chromium.launch({ executablePath: exe })

async function probe(country, label) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  // 只改自己浏览器里的 /api/geo 响应，模拟该国家访客
  await ctx.route("**/api/geo", (route) =>
    route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ country }) }),
  )
  const page = await ctx.newPage()
  await page.goto("https://hhseal.cn/en", { waitUntil: "domcontentloaded", timeout: 90000 })
  await page.waitForTimeout(6500)

  const banner = await page.locator('[role="dialog"][aria-label]').count()
  const cmds = await page.evaluate(() =>
    (window.dataLayer || []).filter((x) => x && x[0] === "consent").map((x) => x[1]),
  )
  const cookies = (await ctx.cookies()).map((c) => c.name)
  const ads = cookies.filter((n) => ["_gcl_au", "_fbp", "test_cookie"].includes(n))

  console.log(`[${label} / ${country}] 横幅:${banner} | consent 指令:${cmds.join(">")} | 广告Cookie:${ads.join(",") || "无"}`)

  if (banner > 0) {
    await page.getByRole("button", { name: /Essential only/i }).click()
    await page.waitForTimeout(1500)
    const after = (await ctx.cookies()).map((c) => c.name)
    console.log(`  拒绝非必要后 广告Cookie: ${after.filter((n) => ["_gcl_au", "_fbp", "test_cookie"].includes(n)).join(",") || "无"}`)
    await page.reload({ waitUntil: "domcontentloaded" })
    await page.waitForTimeout(4000)
    console.log(`  重新加载后横幅: ${await page.locator('[role="dialog"][aria-label]').count()}（期望 0）`)
  }
  await ctx.close()
}

await probe("DE", "德国")
await probe("AE", "阿联酋")
await probe("US", "美国")

await browser.close()
