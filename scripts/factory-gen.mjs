/**
 * 工厂与质量页 AI 实拍风格补图：gpt-image-2（apiyi 渠道）。
 * 用法：node scripts/factory-gen.mjs
 * 以现有实拍图为参考，输出存到 public/images/factory/。
 * 注意（同 lib/admin/imagegen.ts）：不传 response_format/input_fidelity；503 重试即可。
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { resolve } from "node:path"

const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8")
const key = process.env.APIYI_API_KEY || env.match(/^APIYI_API_KEY=(.+)$/m)?.[1]?.trim()
if (!key) { console.error("缺少 APIYI_API_KEY"); process.exit(1) }

const BASE = "https://api.apiyi.com/v1"
const MODEL = "gpt-image-2"
const OUT_DIR = resolve("public/images/factory")
mkdirSync(OUT_DIR, { recursive: true })

const STYLE =
  "真实工业摄影风格，手持相机抓拍感，自然光线，画面里不要出现任何文字、标志、水印或人脸特写。"

const tasks = [
  {
    name: "workshop-wide",
    refs: ["public/images/实拍/IMG_20260518_215113.webp"],
    prompt: STYLE + "参考图的碳石墨密封件工厂车间：宽敞的机加工车间全景，几台数控车床整齐排列，一位穿深色工装的工人正在操作车床，地面整洁，石墨坯料木托盘靠墙堆放，写实抓拍。",
  },
  {
    name: "cnc-turning",
    refs: ["public/images/密封环/IMG_20260410_141247.webp", "public/images/实拍/IMG_20260518_215335.webp"],
    prompt: STYLE + "数控车床正在车削一个黑色碳石墨密封环（外形参考图），卡盘夹持工件、切屑飞溅的瞬间特写，机床导轨和冷却液清晰可见，工业细节真实。",
  },
  {
    name: "qc-inspection",
    refs: ["public/images/密封环/IMG_20260404_133116.webp"],
    prompt: STYLE + "质检工位：一位工人戴白色手套，用外径千分尺在检验平台上测量一个黑色碳石墨密封环（外形参考图），旁边放有块规和检验记录夹，桌面干净，光线明亮，检测细节真实。",
  },
  {
    name: "packing-shipment",
    refs: ["public/images/实拍/IMG_20260517_193443.webp"],
    prompt: STYLE + "成品包装发货区：黑色碳石墨密封环逐个套上珍珠棉袋后整齐码放在出口木箱内，填充缓冲材料，旁边是贴好标签的纸箱和缠膜机，仓库光线，写实抓拍。",
  },
]

async function genOnce(task) {
  const form = new FormData()
  form.set("model", MODEL)
  form.set("prompt", task.prompt)
  form.set("quality", "medium")
  form.set("size", "1536x1024")
  form.set("output_format", "webp")
  for (const ref of task.refs) {
    const buf = readFileSync(resolve(ref))
    form.append("image[]", new Blob([buf], { type: "image/webp" }), ref.split("/").pop())
  }
  const res = await fetch(`${BASE}/images/edits`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}` },
    body: form,
    signal: AbortSignal.timeout(360_000),
  })
  const json = await res.json().catch(() => ({}))
  return { status: res.status, json }
}

const PRICE = { textIn: 5 / 1e6, imageIn: 8 / 1e6, out: 30 / 1e6 }
let totalCost = 0

for (const task of tasks) {
  let done = false
  for (let attempt = 1; attempt <= 4 && !done; attempt++) {
    const t0 = Date.now()
    try {
      const r = await genOnce(task)
      const u = r.json?.usage
      if (r.status === 200 && r.json?.data?.[0]?.b64_json) {
        const file = resolve(OUT_DIR, `${task.name}.webp`)
        writeFileSync(file, Buffer.from(r.json.data[0].b64_json, "base64"))
        const cost =
          (u?.input_tokens_details?.text_tokens ?? 0) * PRICE.textIn +
          (u?.input_tokens_details?.image_tokens ?? 0) * PRICE.imageIn +
          (u?.output_tokens ?? 0) * PRICE.out
        totalCost += cost
        console.log(`✔ ${task.name} ${( (Date.now()-t0)/1000 ).toFixed(0)}s  $${cost.toFixed(3)}  → ${file}`)
        done = true
      } else {
        console.log(`✖ ${task.name} 第${attempt}次 HTTP ${r.status}: ${JSON.stringify(r.json).slice(0, 200)}`)
        if (r.status !== 503) break
      }
    } catch (e) {
      console.log(`✖ ${task.name} 第${attempt}次异常: ${String(e).slice(0, 160)}`)
    }
    if (!done) await new Promise((s) => setTimeout(s, 5000 * attempt))
  }
}
console.log(`\n合计预估 $${totalCost.toFixed(3)}`)
