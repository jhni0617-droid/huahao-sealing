import { createRequire } from "node:module"
import fs from "node:fs"
import path from "node:path"

const require = createRequire("C:/Users/倪/Desktop/vibe codeing/huahao-sealing/")
const sharp = require("sharp")

const MEDIA = "C:/Users/倪/AppData/Local/Temp/pptx-media/ppt/media"
const DEST = "C:/Users/倪/Desktop/vibe codeing/huahao-sealing/public/images/products/gallery"
fs.mkdirSync(DEST, { recursive: true })

const pages = {
  9: ["image43", "image48", "image47", "image44", "image45", "image46"],
  10: ["image49", "image54", "image50", "image51", "image52", "image53"],
  11: ["image55", "image59", "image56", "image57", "image58", "image60"],
  12: ["image61", "image66", "image62", "image63", "image64", "image65"],
  13: ["image67", "image68", "image69", "image70", "image71", "image72"],
  14: ["image77", "image76", "image73", "image74", "image78", "image75"],
  15: ["image82", "image79", "image80", "image81", "image84", "image83"],
  16: ["image85", "image86", "image87", "image88", "image89", "image90"],
  17: ["image91", "image92", "image96", "image93", "image94", "image95"],
  18: ["image97", "image102", "image100", "image98", "image101", "image99"],
  19: ["image107", "image108", "image106", "image105", "image103", "image104"],
  20: ["image113", "image109", "image110", "image111", "image114", "image112"],
  21: ["image119", "image120", "image115", "image116", "image117", "image118"],
  22: ["image121", "image125", "image122", "image123", "image124", "image126"],
}

// 剔除的图（序号对应 sheet 上的编号）：严重虚焦 / 主体不是产品
const DROP = new Set([55, 66, 69, 75, 81, 82])

const files = []
for (const [page, imgs] of Object.entries(pages)) {
  for (const name of imgs) {
    const f = fs.readdirSync(MEDIA).find((x) => x.startsWith(name + "."))
    if (!f) {
      console.log("MISSING", name)
      continue
    }
    files.push({ page: Number(page), file: path.join(MEDIA, f) })
  }
}

const kept = []
let idx = 0
for (let i = 0; i < files.length; i++) {
  const item = files[i]
  const sheetNo = i + 1
  if (DROP.has(sheetNo)) continue
  idx++
  const out = `gallery-${String(idx).padStart(2, "0")}.webp`
  const info = await sharp(item.file)
    .resize({ width: 720, withoutEnlargement: true })
    .webp({ quality: 76, effort: 6 })
    .toFile(path.join(DEST, out))
  kept.push({ file: out, page: item.page, w: info.width, h: info.height, kb: Math.round(info.size / 1024) })
}

fs.writeFileSync("C:/Users/倪/Desktop/vibe codeing/huahao-sealing/scripts/ppt-gallery-manifest.json", JSON.stringify(kept, null, 1))
const totalKb = kept.reduce((a, b) => a + b.kb, 0)
console.log(`kept ${kept.length} / dropped ${DROP.size} / total ${(totalKb / 1024).toFixed(1)} MB`)
console.log("sample:", kept.slice(0, 3).map((k) => `${k.file} ${k.w}x${k.h} ${k.kb}KB`).join(" | "))
