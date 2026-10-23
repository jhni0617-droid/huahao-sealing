import { createRequire } from "node:module"

const require = createRequire("C:/Users/倪/.workbuddy/binaries/node/workspace/")
const { chromium } = require("playwright-core")

const exe = "C:/Users/倪/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe"
const BASE = "http://127.0.0.1:3005/en"
const OUT = "C:/Users/倪/Desktop/vibe codeing/huahao-sealing/out"

const browser = await chromium.launch({ executablePath: exe })

// 1) 正常访问（非管辖区）—— 应该没有横幅
const ctx1 = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1.5 })
const p1 = await ctx1.newPage()
await p1.goto(BASE, { waitUntil: "domcontentloaded", timeout: 90000 })
await p1.waitForTimeout(3500)
const normalBanner = await p1.locator('[role="dialog"][aria-label]').count()
console.log("普通访问横幅数量（期望 0）:", normalBanner)
await ctx1.close()

// 2) ?consent=demo 强制显示 —— 桌面
const ctx2 = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1.5 })
const p2 = await ctx2.newPage()
await p2.goto(`${BASE}?consent=demo`, { waitUntil: "domcontentloaded", timeout: 90000 })
await p2.waitForTimeout(4000)
const banner = p2.locator('[role="dialog"][aria-label]')
console.log("demo 横幅数量（期望 1）:", await banner.count())
await p2.screenshot({ path: `${OUT}/cookie-banner-desktop.png` })

// 3) 展开自定义
await p2.getByRole("button", { name: /Customize|自定义/i }).click()
await p2.waitForTimeout(600)
await p2.screenshot({ path: `${OUT}/cookie-banner-custom.png` })

// 4) 点「保存选择」后应消失
await banner.getByRole("button", { name: /Save choices|保存选择/i }).click()
await p2.waitForTimeout(800)
console.log("接受后横幅数量（期望 0）:", await banner.count())
const stored = await p2.evaluate(() => window.localStorage.getItem("hh_consent_v1"))
console.log("localStorage:", stored)
await ctx2.close()

// 5) 移动端
const ctx3 = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true })
const p3 = await ctx3.newPage()
await p3.goto(`${BASE}?consent=demo`, { waitUntil: "domcontentloaded", timeout: 90000 })
await p3.waitForTimeout(4000)
await p3.screenshot({ path: `${OUT}/cookie-banner-mobile.png` })
await ctx3.close()

await browser.close()
console.log("done")
