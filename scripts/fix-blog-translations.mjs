// C 档：博客译文库定向修复（已知错误模式，保留 2-space JSON 格式）
import fs from "node:fs"

const PATH = "C:/Users/倪/Desktop/vibe codeing/huahao-sealing/content/blog-translations.json"
const d = JSON.parse(fs.readFileSync(PATH, "utf8"))

// 每语言替换表：[错误串, 修正串, 说明]
const FIX = {
  th: [
    ["โลหะวิทยา", "โลหการ", "金属学→冶金"],
    ["สวนอุตสาหกรรม", "นิคมอุตสาหกรรม", "工业花园→工业园"],
    ["น้ำมันปิโตรเลียมโค้ก", "โค้กปิโตรเลียม", "石油焦语序"],
  ],
  vi: [["ổ trục", "vòng bi", "生造轴座→轴承"]],
  ko: [["제련", "야금", "冶炼→冶金"]],
  ja: [["万元", "万人民元", "中文货币单位→人民元"]],
}

const stats = {}
for (const slug of Object.keys(d)) {
  for (const lang of Object.keys(FIX)) {
    const c = d[slug][lang]
    if (!c) continue
    for (const field of ["title", "excerpt", "content"]) {
      if (typeof c[field] !== "string") continue
      let s = c[field]
      for (const [bad, good, note] of FIX[lang]) {
        if (s.includes(bad)) {
          const n = s.split(bad).length - 1
          s = s.split(bad).join(good)
          const key = `${lang}:${note}`
          stats[key] = (stats[key] || 0) + n
        }
      }
      c[field] = s
    }
  }
}

fs.writeFileSync(PATH, JSON.stringify(d, null, 2) + "\n")
console.log("替换统计：")
for (const k of Object.keys(stats)) console.log(`  ${k} × ${stats[k]}`)
console.log("总替换处数:", Object.values(stats).reduce((a, b) => a + b, 0))
