/**
 * gpt-image-2 直连冒烟测试：文生图 + 图片编辑各一次。
 * 用法：node scripts/imagegen-test.mjs
 * Key 从环境变量 APIYI_API_KEY 读取（或 .env.local）。
 */
import { readFileSync, writeFileSync, statSync } from "node:fs"
import { resolve } from "node:path"

const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8")
const key = process.env.APIYI_API_KEY || env.match(/^APIYI_API_KEY=(.+)$/m)?.[1]?.trim()
if (!key) { console.error("缺少 APIYI_API_KEY"); process.exit(1) }

const BASE = "https://api.apiyi.com/v1"
const PRICE = { textIn: 5 / 1e6, imageIn: 8 / 1e6, out: 30 / 1e6 }
const costOf = (u) =>
  ((u.input_tokens_details?.text_tokens ?? 0) * PRICE.textIn +
   (u.input_tokens_details?.image_tokens ?? 0) * PRICE.imageIn +
   u.output_tokens * PRICE.out)

async function call(url, body, isForm) {
  const t0 = Date.now()
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}` },
    body: isForm ? body : JSON.stringify(body),
    signal: AbortSignal.timeout(360_000),
  })
  const json = await res.json().catch(() => ({}))
  return { status: res.status, json, ms: Date.now() - t0 }
}

function report(label, r) {
  const u = r.json?.usage
  console.log(`\n== ${label} == HTTP ${r.status}，耗时 ${(r.ms / 1000).toFixed(1)}s`)
  if (r.status === 200 && r.json?.data?.[0]?.b64_json) {
    console.log(`b64 长度 ${r.json.data[0].b64_json.length}，前缀检查: ${r.json.data[0].b64_json.startsWith("data:") ? "带前缀(异常)" : "纯 base64(符合文档)"}`)
    console.log(`usage: 输入 ${u.input_tokens}（文本 ${u.input_tokens_details?.text_tokens ?? 0} / 图片 ${u.input_tokens_details?.image_tokens ?? 0}），输出 ${u.output_tokens}`)
    console.log(`预估花费 $${costOf(u).toFixed(4)}`)
    return true
  }
  console.log("失败：", JSON.stringify(r.json).slice(0, 400))
  return false
}

// 1) 文生图（low 档冒烟，控制成本）
const gen = await call(`${BASE}/images/generations`, {
  model: "gpt-image-2",
  prompt: "极简工业风图标设计：一枚黑色碳石墨机械密封环的正面线稿，白底，右下角一处 #E60012 红色小方块点缀，工程制图风格",
  quality: "low",
  size: "1024x1024",
})
const genOk = report("文生图 /v1/images/generations", gen)
if (genOk) writeFileSync(new URL("../out/imagegen-test-generate.png", import.meta.url), Buffer.from(gen.json.data[0].b64_json, "base64"))

// 2) 图片编辑（用项目里的实拍图做参考）
const refPath = resolve("public/images/products/graphite-bushing.webp")
const form = new FormData()
form.set("model", "gpt-image-2")
form.set("prompt", "把这张石墨轴套产品图放到深灰色工业背景上，底部加一条细红色分隔线，其余保持不变")
form.set("quality", "low")
form.set("size", "1024x1024")
form.append("image[]", new Blob([readFileSync(refPath)], { type: "image/webp" }), "ref.webp")
const edit = await call(`${BASE}/images/edits`, form, true)
const editOk = report("图片编辑 /v1/images/edits", edit)
if (editOk) writeFileSync(new URL("../out/imagegen-test-edit.png", import.meta.url), Buffer.from(edit.json.data[0].b64_json, "base64"))

console.log(`\n合计预估花费 $${((genOk ? costOf(gen.json.usage) : 0) + (editOk ? costOf(edit.json.usage) : 0)).toFixed(4)}`)
console.log("出图文件：out/imagegen-test-generate.png、out/imagegen-test-edit.png")
