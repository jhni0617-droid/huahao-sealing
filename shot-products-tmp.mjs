import puppeteer from "puppeteer-core"
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] })
const page = await b.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto("http://localhost:3000/zh/products", { waitUntil: "networkidle0", timeout: 60000 })
await new Promise(r => setTimeout(r, 1500))
await page.screenshot({ path: "C:\Users\倪\Desktop\vibe codeing\客户\huahao-sealing\docs\mockups\products-light-live.png", fullPage: true })
await b.close()
console.log("ok")
