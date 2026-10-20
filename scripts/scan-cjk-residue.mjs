// 精确扫描：只检查 vi/th/ru/ja/ko key 后面字符串值内的中文残留
import fs from "node:fs"
import path from "node:path"

const ROOT = "C:/Users/倪/Desktop/vibe codeing/huahao-sealing"
const DIRS = ["lib", "components"]
const EXTS = [".ts", ".tsx"]
// 匹配 vi: "..." / th: '...' / vi: { zh: ..., th: "..." } 里的目标语言值
const VAL = /(?:^|[{,\s])(vi|th|ru|ja|ko)\s*:\s*"((?:[^"\\]|\\.)*)"/g
const CJK = /[\u4e00-\u9fff]{2,}/
const WHITELIST = ["先锋电碳"]

const files = []
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "node_modules") continue
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (EXTS.includes(path.extname(e.name))) files.push(p)
  }
}
DIRS.forEach((d) => walk(path.join(ROOT, d)))

let hits = 0
for (const f of files) {
  const text = fs.readFileSync(f, "utf8")
  const lines = text.split("\n")
  // 逐行匹配（值基本不跨行）
  lines.forEach((line, i) => {
    let m
    VAL.lastIndex = 0
    while ((m = VAL.exec(line)) !== null) {
      if (m[1] === "ja") continue // 日文汉字属正常，跳过
      const val = m[2]
      const found = val.match(/[\u4e00-\u9fff]{2,}/g)
      if (!found) continue
      const real = found.filter((s) => !WHITELIST.includes(s))
      if (!real.length) continue
      hits++
      console.log(path.relative(ROOT, f) + ":" + (i + 1) + " [" + m[1] + "] [" + real.join(",") + "]")
      console.log("   " + line.trim().slice(0, 200))
    }
  })
}
console.log("\nTOTAL: " + hits + " CJK residue hits in vi/th/ru/ja/ko values")
