/**
 * 技术爆炸图生成：机械密封 / 离心泵 / 闸阀，突出石墨配件。
 * 模型：gpt-image-2.5-flare（apiyi 官转，文生图推荐）
 * 用法：node scripts/technical-diagrams-gen.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { resolve } from "node:path"

const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8")
const key = process.env.APIYI_API_KEY || env.match(/^APIYI_API_KEY=(.+)$/m)?.[1]?.trim()
if (!key) { console.error("缺少 APIYI_API_KEY"); process.exit(1) }

const BASE = "https://api.apiyi.com/v1"
const MODEL = "gpt-image-2.5-flare"
const OUT_DIR = resolve("public/images/technical")
mkdirSync(OUT_DIR, { recursive: true })

const tasks = [
  {
    name: "mechanical-seal-exploded",
    prompt:
      "Technical exploded-view diagram of a mechanical seal assembly on a clean white engineering background with a faint light-blue blueprint grid. All components separated along a horizontal centerline with clear gaps between them, from left to right: shaft sleeve, drive collar, two red O-rings, coil springs, rotary sealing ring, stationary seat ring, gland plate. The rotary ring and stationary seat ring are made of dark carbon graphite and are highlighted with a warm amber glow outline. Steel blue-gray for all metal parts, metallic silver for springs, bright red for O-rings. Professional isometric engineering illustration with clean linework and subtle shading. Thin leader lines connect each component to its label. Title centered at top: 'Mechanical Seal — Exploded View'. Labels in English: 'Shaft Sleeve', 'Drive Collar', 'O-Rings', 'Coil Springs', 'Rotary Ring (Carbon Graphite)', 'Stationary Seat (Carbon Graphite)', 'Gland Plate'. Clean sans-serif engineering font for all text. Title, all components, leader lines and labels fully within the frame with safe margins, no cropping.",
  },
  {
    name: "centrifugal-pump-exploded",
    prompt:
      "Technical exploded-view diagram of a single-stage centrifugal pump on a clean white engineering background with a faint light-blue blueprint grid. All components separated along a horizontal centerline with clear gaps between them, from left to right: volute casing, closed impeller, shaft, mechanical seal cartridge containing carbon graphite rings, seal chamber, bearing housing with two bearings, flexible coupling. The mechanical seal's carbon graphite rings are highlighted with a warm amber glow outline. Steel blue-gray for casing and shaft, brass gold for the impeller, metallic silver for bearings. Professional isometric engineering illustration with clean linework and subtle shading. Thin leader lines connect each component to its label. Title centered at top: 'Centrifugal Pump — Exploded View'. Labels in English: 'Volute Casing', 'Impeller', 'Shaft', 'Mechanical Seal (Carbon Graphite Rings)', 'Seal Chamber', 'Bearing Housing', 'Bearings', 'Coupling'. Clean sans-serif engineering font for all text. Title, all components, leader lines and labels fully within the frame with safe margins, no cropping.",
  },
  {
    name: "gate-valve-exploded",
    prompt:
      "Technical exploded-view diagram of a flanged gate valve on a clean white engineering background with a faint light-blue blueprint grid. All components separated along a vertical centerline with clear gaps between them, from bottom to top: valve body with two flanged ends, wedge gate disc, valve stem, stacked graphite packing rings, packing gland, bonnet, yoke, handwheel. The stacked carbon graphite packing rings are highlighted with a warm amber glow outline. Steel blue-gray for body, bonnet and yoke, dark iron gray for the gate disc. Professional isometric engineering illustration with clean linework and subtle shading. Thin leader lines connect each component to its label. Title centered at top: 'Gate Valve — Exploded View'. Labels in English: 'Valve Body', 'Gate Disc', 'Valve Stem', 'Graphite Packing Rings', 'Packing Gland', 'Bonnet', 'Yoke', 'Handwheel'. Clean sans-serif engineering font for all text. Title, all components, leader lines and labels fully within the frame with safe margins, no cropping.",
  },
]

async function genOnce(task) {
  const t0 = Date.now()
  const res = await fetch(`${BASE}/images/generations`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      prompt: task.prompt,
      quality: "medium",
      size: "1024x1024",
      output_format: "png",
    }),
    signal: AbortSignal.timeout(360_000),
  })
  const json = await res.json().catch(() => ({}))
  return { status: res.status, json, ms: Date.now() - t0 }
}

const PRICE = { textIn: 5 / 1e6, imageIn: 8 / 1e6, out: 30 / 1e6 }
let totalCost = 0

for (const task of tasks) {
  let done = false
  for (let attempt = 1; attempt <= 4 && !done; attempt++) {
    try {
      const r = await genOnce(task)
      const u = r.json?.usage
      if (r.status === 200 && r.json?.data?.[0]?.b64_json) {
        const file = resolve(OUT_DIR, `${task.name}.png`)
        writeFileSync(file, Buffer.from(r.json.data[0].b64_json, "base64"))
        const cost =
          (u?.input_tokens_details?.text_tokens ?? 0) * PRICE.textIn +
          (u?.input_tokens_details?.image_tokens ?? 0) * PRICE.imageIn +
          (u?.output_tokens ?? 0) * PRICE.out
        totalCost += cost
        console.log(`✔ ${task.name}  ${(r.ms / 1000).toFixed(0)}s  $${cost.toFixed(3)}  → ${file}`)
        done = true
      } else {
        console.log(`✖ ${task.name} 第${attempt}次 HTTP ${r.status}: ${JSON.stringify(r.json).slice(0, 300)}`)
        if (r.status !== 503 && r.status !== 429) break
      }
    } catch (e) {
      console.log(`✖ ${task.name} 第${attempt}次异常: ${String(e).slice(0, 200)}`)
    }
    if (!done) await new Promise((s) => setTimeout(s, 5000 * attempt))
  }
}
console.log(`\n合计预估 $${totalCost.toFixed(3)}`)
