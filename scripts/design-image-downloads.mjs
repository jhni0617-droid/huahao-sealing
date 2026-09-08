/**
 * 下载页头图：gpt-image-2 生成棚拍风文档平铺图。
 * 用法：node scripts/design-image-downloads.mjs
 * 输出：public/images/stock/downloads-desk.webp（生成 png 后转 webp）
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { resolve } from "node:path"

const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8")
const key = process.env.APIYI_API_KEY || env.match(/^APIYI_API_KEY=(.+)$/m)?.[1]?.trim()
if (!key) { console.error("缺少 APIYI_API_KEY"); process.exit(1) }

const BASE = "https://api.apiyi.com/v1"
const OUT = resolve("public/images/stock")

const prompt = `Studio flat-lay photograph, top-down view on warm light gray paper background: neatly arranged industrial technical documents — a white product catalog booklet, a technical manual, an engineering drawing blueprint with technical sketches of a mechanical seal ring, and a black carbon graphite mechanical seal ring placed on top as a paperweight. Monochrome muted tones, soft even studio lighting, subtle shadows, generous negative space on the left side, premium German industrial aesthetic, no text legible, no people, photorealistic.`

async function gen() {
  for (let attempt = 1; attempt <= 4; attempt++) {
    const t0 = Date.now()
    try {
      const res = await fetch(`${BASE}/images/generations`, {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({ model: "gpt-image-2", prompt, quality: "medium", size: "1536x1024" }),
        signal: AbortSignal.timeout(360_000),
      })
      const json = await res.json().catch(() => ({}))
      if (res.ok && json?.data?.[0]?.b64_json) {
        mkdirSync(OUT, { recursive: true })
        const out = resolve(OUT, "downloads-desk.png")
        writeFileSync(out, Buffer.from(json.data[0].b64_json, "base64"))
        const u = json.usage
        const cost = ((u?.input_tokens_details?.text_tokens ?? 0) * 5 + (u?.input_tokens_details?.image_tokens ?? 0) * 8 + (u?.output_tokens ?? 0) * 30) / 1e6
        console.log(`downloads-desk: OK ${((Date.now() - t0) / 1000).toFixed(0)}s -> ${out} (≈$${cost.toFixed(4)})`)
        return
      }
      console.log(`attempt ${attempt}: HTTP ${res.status} ${JSON.stringify(json).slice(0, 200)}`)
    } catch (e) {
      console.log(`attempt ${attempt}: error ${e.message.slice(0, 200)}`)
    }
    await new Promise((r) => setTimeout(r, 3000 * attempt))
  }
  console.log("FAILED after retries")
}
await gen()
