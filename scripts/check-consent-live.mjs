import { createRequire } from "node:module"

const require = createRequire("C:/Users/倪/.workbuddy/binaries/node/workspace/")
const { chromium } = require("playwright-core")

const exe = "C:/Users/倪/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe"
const browser = await chromium.launch({ executablePath: exe })
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
const page = await ctx.newPage()

const hosts = new Set()
page.on("request", (r) => {
  try {
    hosts.add(new URL(r.url()).host)
  } catch {}
})

await page.goto("https://hhseal.cn/en", { waitUntil: "domcontentloaded", timeout: 90000 })
await page.waitForTimeout(7000)

const bannerCount = await page.locator('[role="dialog"][aria-label]').count()
console.log("横幅数量（中国 IP，期望 0）:", bannerCount)

const consentCmds = await page.evaluate(() => {
  const dl = window.dataLayer || []
  return dl
    .filter((x) => x && x[0] === "consent")
    .map((x) => `${x[1]}:${JSON.stringify(x[2])}`)
})
console.log("dataLayer consent 指令:", consentCmds)

const cookies = (await ctx.cookies()).map((c) => `${c.name}@${c.domain}`)
console.log("Cookie:", cookies.join(", "))

console.log("第三方域名:", [...hosts].filter((h) => !h.includes("hhseal")).sort().join(", "))

await browser.close()
