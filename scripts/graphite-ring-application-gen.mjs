/**
 * 石墨密封环应用场景剖面图：机械密封腔内的碳石墨静环，带台阶和倒角。
 * 模型：gpt-image-2.5-flare，medium，1024x1024
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { resolve } from "node:path"

const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8")
const key = process.env.APIYI_API_KEY || env.match(/^APIYI_API_KEY=(.+)$/m)?.[1]?.trim()
if (!key) { console.error("缺少 APIYI_API_KEY"); process.exit(1) }

const BASE = "https://api.apiyi.com/v1"
const OUT_DIR = resolve("public/images/technical")
mkdirSync(OUT_DIR, { recursive: true })

const prompt =
  "Detailed cross-sectional cutaway engineering illustration of a mechanical seal assembly installed in a centrifugal pump seal chamber, on a clean white background with a faint light-blue blueprint grid. The view is a vertical axial cross-section cutting through the center of the seal. Visible components from left to right: pump shaft (steel), shaft sleeve, rotary seal ring (silicon carbide, dark gray) mounted on the sleeve, carbon graphite stationary seat ring seated inside the metal gland housing, multiple coil springs pushing the graphite ring toward the rotary ring, O-rings, and the metal gland plate bolted to the pump casing. The carbon graphite stationary seat ring is the focal point, rendered in dark charcoal gray with a subtle warm amber glow outline. Its cross-section clearly shows precise machining details: a stepped outer diameter with two different diameter steps, a chamfered corner at 45 degrees on the outer edge, a flat lapped sealing face on the right side that mates with the rotary ring, an internal bore step that accommodates an O-ring, and another chamfer at the inner corner. The graphite ring is shown pressed firmly against the rotary ring's sealing face, demonstrating the sealing interface. Steel blue-gray for all metal parts (shaft, sleeve, gland, springs), bright red for O-rings, dark gray for silicon carbide rotary ring, dark charcoal with amber glow for the carbon graphite ring. Professional technical illustration with cross-hatching on cut metal surfaces, clean linework, and subtle shading. English labels with thin leader lines: 'Carbon Graphite Stationary Ring (with steps & chamfers)', 'Rotary Ring (SiC)', 'Springs', 'O-Ring', 'Gland Housing', 'Shaft Sleeve', 'Sealing Face'. Title at top: 'Carbon Graphite Seal Ring in Mechanical Seal Assembly'. All text in clean sans-serif engineering font, all components and labels fully within frame with safe margins, no cropping."

async function gen() {
  const t0 = Date.now()
  const res = await fetch(`${BASE}/images/generations`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-image-2.5-flare",
      prompt,
      quality: "medium",
      size: "1024x1024",
      output_format: "png",
    }),
    signal: AbortSignal.timeout(360_000),
  })
  const json = await res.json().catch(() => ({}))
  if (res.status === 200 && json?.data?.[0]?.b64_json) {
    const file = resolve(OUT_DIR, "graphite-seal-ring-application.png")
    writeFileSync(file, Buffer.from(json.data[0].b64_json, "base64"))
    const u = json.usage
    const cost = (u?.input_tokens_details?.text_tokens ?? 0) * 5 / 1e6
      + (u?.output_tokens ?? 0) * 30 / 1e6
    console.log(`✔  ${( (Date.now()-t0)/1000 ).toFixed(0)}s  $${cost.toFixed(3)}  → ${file}`)
  } else {
    console.log(`✖ HTTP ${res.status}: ${JSON.stringify(json).slice(0, 400)}`)
  }
}
gen()
