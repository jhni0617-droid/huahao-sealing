/**
 * 内页重设计概念图批量生成：gpt-image-2 文生图，浅色瑞士工业风。
 * 用法：node scripts/design-mockups-inner.mjs [applications|factory|cases|materials|all]
 * 输出：docs/mockups/inner-<page>.png
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { resolve } from "node:path"

const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8")
const key = process.env.APIYI_API_KEY || env.match(/^APIYI_API_KEY=(.+)$/m)?.[1]?.trim()
if (!key) { console.error("缺少 APIYI_API_KEY"); process.exit(1) }

const BASE = "https://api.apiyi.com/v1"
const OUT_DIR = resolve("docs/mockups")
mkdirSync(OUT_DIR, { recursive: true })

/* 与已定稿的产品页浅色版同一套品牌 tokens，保证全站一致 */
const SHARED = `Full-length website UI design mockup, long scrolling desktop inner page for a Chinese industrial B2B manufacturer "华豪密封 HUAHAO SEALING" making carbon graphite mechanical seal rings, bushings and split rings. Desktop 1440px web design, flat front view, complete page top to bottom. Style: German Swiss industrial minimalism like premium international brands ABB SKF Festo, restrained premium B2B. Brand tokens: near-black #17191d text, paper white #f4f5f6 background, warm grays, ONE accent color Chinese red #E60012 used sparingly under 5 percent, heavy Chinese serif (Noto Serif SC) for headlines, condensed grotesque numerals, red 3px short bar plus tiny letter-spaced caption above each heading, thin hairline rules 1px everywhere, real black-and-white factory photography, sharp square corners, no rounded corners, no gradients except photo darkening, no 3D decoration, no illustrations. Compact white header bar with small logo left and six nav links right, then slim breadcrumb. Keep Chinese text short and large; tiny garbled placeholder text elsewhere is fine. Every page ends with a three-step numbered strip 01/02/03 with big red condensed numerals and hairline dividers, then a dark near-black CTA band with short serif line and one red button.`

const PAGES = {
  applications: `${SHARED} Page: APPLICATION INDUSTRIES 应用行业. Sections top to bottom: 1) compact page head: red bar caption 应用行业, big serif headline 覆盖八大工业领域, one-line intro; 2) large editorial grid of 8 industry tiles, each tile a real black-and-white photo (industrial pumps, chemical plant towers, container ship, power station cooling towers, food processing line, mining truck, oil refinery, pipelines and valves) with grayscale look, industry name in bold serif on a white strip under the photo, tiny red index numeral 01-08 in the tile corner, hairline gaps between tiles; 3) a wide feature band: half page real photo of pump equipment, other half white with serif headline 为工况选材料 not 为目录卖型号, three short bullet lines with thin rules and small red square markers; 4) numbered three-step strip 01 提交工况 02 材料匹配 03 方案确认; 5) dark CTA band 提交工况参数，工程师当天回复 with red button.`,
  factory: `${SHARED} Page: FACTORY & QUALITY 工厂与质量. Sections top to bottom: 1) compact page head: red bar caption 工厂与质量, big serif headline 从坯料到成品，全程自产, one-line intro; 2) full-width large black-and-white real photo of CNC workshop with machines, thin white caption strip below; 3) two-column editorial block: left sticky serif headline 自有产线，公差受控, right a vertical list of 4 process steps (等静压成型 / 高温烧结 / 精密车削 / 平面研磨) each with big gray condensed numeral, short title, tiny description, hairline divider between steps; 4) photo mosaic grid of 4 real black-and-white photos (CNC lathe close-up, measuring instruments, worker inspecting seal ring faces, packed export boxes); 5) quality metrics row: three huge condensed numbers like 0.001mm, 2006, 24h with tiny captions, hairline dividers; 6) numbered three-step strip 01 来料检验 02 过程管控 03 出厂全检; 7) dark CTA band 欢迎来厂考察或视频验厂 with red button.`,
  cases: `${SHARED} Page: EXPORT CASES 出口案例. Sections top to bottom: 1) compact page head: red bar caption 出口案例, big serif headline 交付记录, one-line intro about custom graphite parts shipped worldwide; 2) featured case: full-width split block, left large black-and-white photo of crate packing with graphite rings, right white panel with big serif case title 染色机密封环批量交付, small meta rows 出口国家 / 数量 / 交付周期 with hairline rules, short paragraph; 3) case archive grid 2 columns x 2 rows, each card: thin hairline border, black-and-white photo strip on top, condensed case code like CASE-2025-041, serif title, one-line spec, tiny red tag chip 非标定制 or 批量供货; 4) industries served strip: small uppercase labels of industries separated by thin vertical rules; 5) numbered three-step strip 01 需求确认 02 打样试制 03 批量交付; 6) dark CTA band 提交图纸获取同类方案报价 with red button.`,
  materials: `${SHARED} Page: MATERIALS & GRADES 材料与技术. Sections top to bottom: 1) compact page head: red bar caption 材料与技术, big serif headline 碳石墨材料牌号体系, one-line intro; 2) material family cards row of 3: 浸树脂石墨 / 浸锑石墨 / 浸铜石墨, each card hairline border, serif title, two-line description, tiny red letter tag H / D / K in corner; 3) large technical data table with hairline 1px borders: header row near-black background white text, columns 牌号 / 体积密度 / 抗压强度 / 硬度 / 使用温度, six data rows with condensed model codes M106H M106D M254K etc, zebra light gray rows, one row highlighted with tiny red index marker; 4) selection guide block: left serif headline 按工况选牌号, right three Q&A rows with thin rules: 介质腐蚀选哪种 / 干运转选哪种 / 高温高压选哪种; 5) numbered three-step strip 01 提供工况 02 推荐牌号 03 样品验证; 6) dark CTA band 发送介质与参数，获取牌号推荐 with red button.`,
}

const which = process.argv[2] || "all"
const queue = which === "all" ? Object.keys(PAGES) : [which]

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
        const out = resolve(OUT_DIR, `inner-${name}.png`)
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
  await gen(name, PAGES[name])
}
console.log("done")
