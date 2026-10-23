import { createRequire } from "node:module"
import fs from "node:fs"
import path from "node:path"

const require = createRequire("C:/Users/倪/Desktop/vibe codeing/huahao-sealing/")
const sharp = require("sharp")

const MEDIA = "C:/Users/倪/AppData/Local/Temp/pptx-media/ppt/media"
const OUT = "C:/Users/倪/AppData/Local/Temp/pptx-media/sheets"
fs.mkdirSync(OUT, { recursive: true })

// 第 9–22 页的顺序，人工从解析结果整理（上排左→右，下排左→右）
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

const list = []
for (const [page, imgs] of Object.entries(pages)) {
  for (const name of imgs) {
    const f = fs.readdirSync(MEDIA).find((x) => x.startsWith(name + "."))
    if (!f) {
      console.log("MISSING", name)
      continue
    }
    list.push({ page: Number(page), file: path.join(MEDIA, f), label: f.replace(/\.[a-z]+$/i, "") })
  }
}
console.log("total", list.length)
fs.writeFileSync(path.join(OUT, "list.json"), JSON.stringify(list, null, 1))

// 每张拼版 24 格（4 列 × 6 行），格 300×225
const CELL_W = 300
const CELL_H = 225
const COLS = 4
const ROWS = 6
const PER = COLS * ROWS

for (let s = 0; s < Math.ceil(list.length / PER); s++) {
  const chunk = list.slice(s * PER, s * PER + PER)
  const canvasW = COLS * CELL_W
  const canvasH = ROWS * CELL_H
  const composites = []

  for (let i = 0; i < chunk.length; i++) {
    const item = chunk[i]
    const col = i % COLS
    const row = Math.floor(i / COLS)
    const buf = await sharp(item.file)
      .resize(CELL_W, CELL_H, { fit: "cover" })
      .toBuffer()
    composites.push({ input: buf, left: col * CELL_W, top: row * CELL_H })

    const idx = s * PER + i + 1
    const svg = Buffer.from(
      `<svg width="${CELL_W}" height="30"><rect width="100%" height="30" fill="black" opacity="0.65"/><text x="6" y="21" font-family="Arial" font-size="18" fill="white">${idx} · p${item.page}</text></svg>`,
    )
    composites.push({ input: svg, left: col * CELL_W, top: row * CELL_H })
  }

  await sharp({
    create: { width: canvasW, height: canvasH, channels: 3, background: "#ffffff" },
  })
    .composite(composites)
    .jpeg({ quality: 78 })
    .toFile(path.join(OUT, `sheet-${s + 1}.jpg`))

  console.log("sheet", s + 1, chunk.length, "cells")
}
