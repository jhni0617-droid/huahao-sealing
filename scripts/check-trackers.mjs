import { createRequire } from "node:module"

const require = createRequire("C:/Users/倪/.workbuddy/binaries/node/workspace/")
const { chromium } = require("playwright-core")

const exe = "C:/Users/倪/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe"
const browser = await chromium.launch({ executablePath: exe })
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })

const hosts = new Set()
page.on("request", (r) => {
  try {
    hosts.add(new URL(r.url()).host)
  } catch {}
})

await page.goto("https://hhseal.cn/en", { waitUntil: "domcontentloaded", timeout: 60000 })
await page.waitForTimeout(6000)

console.log("== 第三方请求域名 ==")
;[...hosts].sort().forEach((h) => console.log(h))

const cookies = await page.context().cookies()
console.log("== Cookie 名称 ==")
console.log(cookies.map((c) => `${c.name} @ ${c.domain}`).join("\n") || "(无)")

await browser.close()
