/**
 * 联系页重设计概念图：gpt-image-2 文生图，浅色瑞士工业风。
 * 用法：node scripts/design-mockup-contact.mjs
 * 输出：docs/mockups/contact-light.png
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { resolve } from "node:path"

const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8")
const key = process.env.APIYI_API_KEY || env.match(/^APIYI_API_KEY=(.+)$/m)?.[1]?.trim()
if (!key) { console.error("缺少 APIYI_API_KEY"); process.exit(1) }

const BASE = "https://api.apiyi.com/v1"
const OUT_DIR = resolve("docs/mockups")
mkdirSync(OUT_DIR, { recursive: true })

const prompt = `Full-length website UI design mockup, long scrolling desktop CONTACT page for a Chinese industrial B2B manufacturer "华豪密封 HUAHAO SEALING" making carbon graphite mechanical seal rings. Desktop 1440px web design, flat front view, complete page top to bottom. Style: German Swiss industrial minimalism like premium international brands ABB SKF Festo, restrained premium B2B. Brand tokens: near-black #17191d text, paper white #f4f5f6 background, warm grays, ONE accent color Chinese red #E60012 used sparingly under 5 percent, heavy Chinese serif (Noto Serif SC) for headlines, condensed grotesque numerals, red 3px short bar plus tiny letter-spaced caption above the heading, thin hairline rules 1px, real black-and-white factory photography, sharp square corners, no rounded corners, no gradients except photo darkening, no 3D decoration, no illustrations. Compact white header bar with small logo left and six nav links right, then slim breadcrumb. Keep Chinese text short and large; tiny garbled placeholder text elsewhere is fine.

Sections top to bottom: 1) compact page head: red bar caption 联系我们, big serif headline 提交图纸，工程师当天回复, one-line intro 支持中文、英语、越南语、泰语、俄语、日语、韩语对接; 2) three big condensed stat numerals in a hairline strip: 24h 工程响应, 7 语言支持, OEM 按图定制; 3) main split block: LEFT 60 percent a large inquiry form on white with hairline 1px inputs — fields 姓名, 邮箱, 公司, WhatsApp, 留言, plus a large dashed-border file upload dropzone with an upload icon and caption 拖拽上传图纸 PDF / DWG / STEP, and one solid red square submit button 提交询盘; RIGHT 40 percent a deep near-black #101215 panel with white text: top small red caption 询盘处理路径, three numbered steps 01 提交需求 02 工程师匹配 03 当天回复 each with big red condensed numeral and thin divider, below a hairline-divided contact list with tiny icons: 邮箱, 电话, WhatsApp, Facebook, Zalo, 工厂地址, each row label left value right; 4) full-width black-and-white factory workshop photo strip with thin caption bar; 5) closing thin footer strip with copyright.`

async function gen() {
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
        const out = resolve(OUT_DIR, "contact-light.png")
        writeFileSync(out, Buffer.from(json.data[0].b64_json, "base64"))
        const u = json.usage
        const cost = ((u?.input_tokens_details?.text_tokens ?? 0) * 5 + (u?.input_tokens_details?.image_tokens ?? 0) * 8 + (u?.output_tokens ?? 0) * 30) / 1e6
        console.log(`contact-light: OK ${((Date.now() - t0) / 1000).toFixed(0)}s -> ${out} (≈$${cost.toFixed(4)})`)
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
