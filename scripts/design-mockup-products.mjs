/**
 * 产品页重设计概念图：gpt-image-2 文生图。
 * 用法：node scripts/design-mockup-products.mjs [light|dark|all]
 * 输出：docs/mockups/products-<variant>.png
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { resolve } from "node:path"

const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8")
const key = process.env.APIYI_API_KEY || env.match(/^APIYI_API_KEY=(.+)$/m)?.[1]?.trim()
if (!key) { console.error("缺少 APIYI_API_KEY"); process.exit(1) }

const BASE = "https://api.apiyi.com/v1"
const OUT_DIR = resolve("docs/mockups")
mkdirSync(OUT_DIR, { recursive: true })

const SHARED = `Full-length website UI design mockup, long scrolling desktop PRODUCT LISTING page for a Chinese industrial B2B manufacturer "华豪密封 HUAHAO SEALING" making carbon graphite mechanical seal rings (密封环), bushings (轴套), split rings (分瓣环) and custom non-standard graphite parts. Desktop 1440px web design, flat front view, complete page top to bottom. Style: German industrial minimalism, restrained premium B2B. Brand tokens: near-black #17191d, paper white #f4f5f6, warm grays, ONE accent color Chinese red #E60012 used sparingly under 5 percent, heavy Chinese serif (Noto Serif SC) for headlines, condensed grotesque numerals, thin hairline rules 1px, real black-and-white product photography (graphite rings on gray background), sharp square corners (no rounded corners), no gradients except photo darkening, no 3D decoration, no illustrations. Keep Chinese text short and large; tiny garbled placeholder text elsewhere is fine. Sections top to bottom: 1) slim white header with logo left, nav links right; 2) compact page head: small red overline 工业产品目录, big serif headline 产品中心, one-line intro, a wide search input with placeholder 搜索型号、产品名称、应用或材料, plus row of category filter chips (全部 / 密封环 / 轴套 / 分瓣环 / 非标件); 3) product grid 3 columns x 3 rows, each card: square black-and-white product photo of graphite ring, hairline border, model number like M106H in condensed type, short Chinese name, tiny spec line, thin 查看详情 link with arrow, small red tag chips on some photos (浸锑 / 按图定制); 4) three-step selection capability strip: 01 按图加工 02 材料匹配 03 质量确认, numbered with red index numerals and hairline dividers; 5) closing CTA band: dark strip with short serif line 提交图纸，工程师当天回复 and one red button 发送图纸询价.`

const VARIANTS = {
  light: `${SHARED} Variant LIGHT Swiss industrial: page background paper white and light gray bands, near-black text, numbered section headers with red index numerals, hairline dividers between all sections, ultra clean generous whitespace, editorial grid, thin 1px borders on cards.`,
  dark: `${SHARED} Variant DARK premium engineering: page mostly deep graphite #101215 with white text, product photos blending into dark background with heavy dark fade, red hairline accents, one red button per view, faint blueprint grid pattern in background, cinematic luxury industrial.`,
}

const which = process.argv[2] || "light"
const queue = which === "all" ? Object.keys(VARIANTS) : [which]

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
        const out = resolve(OUT_DIR, `products-${name}.png`)
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
  await gen(name, VARIANTS[name])
}
console.log("done")
