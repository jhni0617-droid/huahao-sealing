/**
 * 首页重设计概念图批量生成：gpt-image-2 文生图 × 3 个方向。
 * 用法：node scripts/design-mockups.mjs [concept-a|concept-b|concept-c|all]
 * 输出：docs/mockups/<concept>.png
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { resolve } from "node:path"

const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8")
const key = process.env.APIYI_API_KEY || env.match(/^APIYI_API_KEY=(.+)$/m)?.[1]?.trim()
if (!key) { console.error("缺少 APIYI_API_KEY"); process.exit(1) }

const BASE = "https://api.apiyi.com/v1"
const OUT_DIR = resolve("docs/mockups")
mkdirSync(OUT_DIR, { recursive: true })

const SHARED = `Full-length website UI design mockup, long scrolling desktop homepage for a Chinese industrial B2B manufacturer "华豪密封 HUAHAO SEALING" making carbon graphite mechanical seal rings, bushings and split rings. Desktop 1440px web design, flat front view, complete page top to bottom. Style: German industrial minimalism, restrained premium B2B. Brand tokens: near-black #17191d, paper white #f4f5f6, warm grays, ONE accent color Chinese red #E60012 used sparingly under 5 percent, heavy Chinese serif (Noto Serif SC) for headlines, condensed grotesque numerals, thin hairline rules 1px, real black-and-white factory photography (CNC lathes, graphite rings), sharp square corners (no rounded corners), no gradients except photo darkening, no 3D decoration, no illustrations. Keep Chinese text short and large; tiny garbled placeholder text elsewhere is fine. Sections top to bottom: 1) hero: full-screen black-and-white CNC workshop photo background, transparent top nav (logo left, six white links right), huge white serif headline 碳石墨密封件·按图定制 with 按图定制 in red, giant italic serif 600°C with thin vertical divider and small caption, one thin white rule, one red pill button 提交图纸询价; 2) stats strip with three huge condensed numbers; 3) product categories with real product photos; 4) material advantages; 5) factory and quality with photo grid; 6) global clients; 7) application industries; 8) export cases; 9) closing call-to-action band with red button.`

const CONCEPTS = {
  "concept-a": `${SHARED} Variant A — LIGHT Swiss industrial: page background paper white and light gray bands, near-black text, numbered section headers like 01 产品中心 with red index numerals, hairline dividers between all sections, black-and-white photos with small red tag chips, ultra clean generous whitespace, editorial grid, thin 1px borders on cards.`,
  "concept-b": `${SHARED} Variant B — DARK premium engineering: page mostly deep graphite #101215 with white text, sections separated by metallic hairlines, faint blueprint grid pattern in background, red hairline accents and one red button per view, photos blending into dark background with heavy dark fade, high contrast, cinematic, luxury industrial.`,
  "concept-c": `${SHARED} Variant C — Editorial magazine contrast: asymmetric layouts alternating pure white and pure black full-width blocks, oversized serif section numerals 01-06 partially bleeding off grid, very large product cutout photos, red underline strokes on key words, dramatic whitespace, Swiss typography poster feel.`,
}

const which = process.argv[2] || "all"
const queue = which === "all" ? Object.keys(CONCEPTS) : [which]

async function gen(name, prompt) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    const t0 = Date.now()
    try {
      const res = await fetch(`${BASE}/images/generations`, {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({ model: "gpt-image-2", prompt, quality: "medium", size: "1024x1536" }),
        signal: AbortSignal.timeout(360_000),
      })
      const json = await res.json().catch(() => ({}))
      if (res.ok && json?.data?.[0]?.b64_json) {
        const out = resolve(OUT_DIR, `${name}.png`)
        writeFileSync(out, Buffer.from(json.data[0].b64_json, "base64"))
        const u = json.usage
        const cost = ((u?.input_tokens_details?.text_tokens ?? 0) * 5 + (u?.input_tokens_details?.image_tokens ?? 0) * 8 + (u?.output_tokens ?? 0) * 30) / 1e6
        console.log(`${name}: OK ${((Date.now() - t0) / 1000).toFixed(0)}s -> ${out} (≈$${cost.toFixed(4)})`)
        return
      }
      console.log(`${name}: attempt ${attempt} HTTP ${res.status} ${JSON.stringify(json).slice(0, 200)}`)
    } catch (e) {
      console.log(`${name}: attempt ${attempt} error ${e.message.slice(0, 200)}`)
    }
    await new Promise((r) => setTimeout(r, 3000 * attempt))
  }
  console.log(`${name}: FAILED after retries`)
}

for (const name of queue) {
  await gen(name, CONCEPTS[name])
}
console.log("done")
