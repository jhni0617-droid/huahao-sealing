import { createRequire } from "node:module"
import fs from "node:fs"
import path from "node:path"

const require = createRequire("C:/Users/倪/Desktop/vibe codeing/huahao-sealing/")
const sharp = require("sharp")

const ROOT = "C:/Users/倪/Desktop/vibe codeing/huahao-sealing"
const DEST = path.join(ROOT, "public/images/products/rail")
fs.mkdirSync(DEST, { recursive: true })

// 顺序：先 23 个型号/品类产品图，再 78 张车间实拍
const productImgs = [
  "catalog/bia.webp", "catalog/104.webp", "catalog/109.webp", "catalog/120-m3n.webp",
  "catalog/1527.webp", "catalog/206.webp", "catalog/2100.webp", "catalog/527.webp",
  "catalog/58b.webp", "catalog/58u.webp", "catalog/59u.webp", "catalog/dyeing-machine.webp",
  "catalog/f-type.webp", "catalog/fbd.webp", "catalog/g6.webp", "catalog/m7n.webp",
  "catalog/oil-pump-double-seal.webp", "catalog/press.webp", "catalog/us.webp",
  "graphite-bearing.webp", "graphite-bushing.webp", "graphite-thrust-disc.webp", "three-part-ring.webp",
].map((f) => path.join(ROOT, "public/images/products", f))

const galleryDir = path.join(ROOT, "public/images/products/gallery")
const galleryImgs = fs
  .readdirSync(galleryDir)
  .filter((f) => f.endsWith(".webp"))
  .sort()
  .map((f) => path.join(galleryDir, f))

const all = [...productImgs, ...galleryImgs]
const out = []
let i = 0
for (const src of all) {
  if (!fs.existsSync(src)) {
    console.log("MISS", src)
    continue
  }
  i++
  const name = `rail-${String(i).padStart(3, "0")}.webp`
  const info = await sharp(src)
    .resize({ width: 360, withoutEnlargement: true })
    .webp({ quality: 72, effort: 6 })
    .toFile(path.join(DEST, name))
  out.push({ file: name, w: info.width, h: info.height, kb: Math.round(info.size / 1024) })
}

fs.writeFileSync(path.join(ROOT, "scripts/ppt-rail-manifest.json"), JSON.stringify(out, null, 1))
const total = out.reduce((a, b) => a + b.kb, 0)
console.log(`rail ${out.length} 张 / ${(total / 1024).toFixed(2)} MB / 平均 ${Math.round(total / out.length)} KB`)
