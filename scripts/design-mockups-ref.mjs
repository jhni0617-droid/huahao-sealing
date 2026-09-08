/**
 * 以用户提供的参考设计图为结构模板，用 gpt-image-2 edits 出 3 个首页变体供选择。
 * 用法：node scripts/design-mockups-ref.mjs [v1|v2|v3|all]
 * 输出：docs/mockups/variant-{1,2,3}.png
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { resolve } from "node:path"

const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8")
const key = process.env.APIYI_API_KEY || env.match(/^APIYI_API_KEY=(.+)$/m)?.[1]?.trim()
if (!key) { console.error("缺少 APIYI_API_KEY"); process.exit(1) }

const BASE = "https://api.apiyi.com/v1"
const OUT_DIR = resolve("docs/mockups")
mkdirSync(OUT_DIR, { recursive: true })
const ref = new File([readFileSync(resolve("docs/mockups/reference.jpg"))], "reference.jpg", { type: "image/jpeg" })

const BASE_PROMPT = `Redesign this long industrial B2B homepage mockup, keeping the EXACT same section structure top to bottom: 1) top nav with logo left and links right; 2) hero with headline and a large carbon graphite rings product photo; 3) stats strip with 4 small line icons and numbers; 4) three product category cards with photos; 5) split banner: photo left, text and checklist right about custom machining from drawings; 6) two side-by-side panels: common problems list vs carbon graphite advantages checklist; 7) factory and quality section with 4 photos and captions; 8) certifications logo strip; 9) industry applications grid of 8 photos with labels; 10) three case study cards each with two big metric numbers; 11) dark world map export band; 12) closing CTA band; 13) footer. All headings and UI text in simplified Chinese for a company named 华豪密封 (HUAHAO SEALING) making carbon graphite seal rings, bushings and split rings. Photorealistic UI mockup, flat front view, tall portrait page.`

const VARIANTS = {
  v1: `${BASE_PROMPT} Variant style: premium graphite black + white + one Chinese red #E60012 accent used sparingly (buttons, icon highlights, small tags), heavy Chinese serif (Noto Serif SC) headlines, black-and-white factory photography with color product photos, thin hairline rules, square corners, Swiss industrial minimalism.`,
  v2: `${BASE_PROMPT} Variant style: stay very faithful to the reference layout and rhythm, engineering blue #1F6FEB accent, clean white background, sans-serif Chinese headlines, colorful industrial photography, soft light-gray section bands, modern professional B2B look.`,
  v3: `${BASE_PROMPT} Variant style: dark premium engineering — deep graphite #101215 page background with white text, sections separated by metallic hairlines, red #E60012 accents, photos blending into dark backgrounds, cinematic high-contrast industrial luxury.`,
}

const which = process.argv[2] || "all"
const queue = which === "all" ? Object.keys(VARIANTS) : [which]
const outName = { v1: "variant-1", v2: "variant-2", v3: "variant-3" }

async function gen(name, prompt) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    const t0 = Date.now()
    try {
      const form = new FormData()
      form.set("model", "gpt-image-2")
      form.set("prompt", prompt)
      form.set("quality", "medium")
      form.set("size", "1024x1536")
      form.append("image[]", ref, "reference.jpg")
      const res = await fetch(`${BASE}/images/edits`, {
        method: "POST",
        headers: { Authorization: `Bearer ${key}` },
        body: form,
        signal: AbortSignal.timeout(360_000),
      })
      const json = await res.json().catch(() => ({}))
      if (res.ok && json?.data?.[0]?.b64_json) {
        const out = resolve(OUT_DIR, `${outName[name]}.png`)
        writeFileSync(out, Buffer.from(json.data[0].b64_json, "base64"))
        const u = json.usage
        const cost = ((u?.input_tokens_details?.text_tokens ?? 0) * 5 + (u?.input_tokens_details?.image_tokens ?? 0) * 8 + (u?.output_tokens ?? 0) * 30) / 1e6
        console.log(`${name}: OK ${((Date.now() - t0) / 1000).toFixed(0)}s -> ${out} (≈$${cost.toFixed(4)})`)
        return
      }
      console.log(`${name}: attempt ${attempt} HTTP ${res.status} ${JSON.stringify(json).slice(0, 200)}`)
      if (res.status === 403) break // 配额不足，重试无意义
    } catch (e) {
      console.log(`${name}: attempt ${attempt} error ${e.message.slice(0, 200)}`)
    }
    await new Promise((r) => setTimeout(r, 3000 * attempt))
  }
  console.log(`${name}: FAILED`)
}

for (const name of queue) {
  await gen(name, VARIANTS[name])
}
console.log("done")
