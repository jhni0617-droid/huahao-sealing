/**
 * 图片优化脚本
 * 将 public/images/实拍/ 中的大尺寸 PNG 照片转为 JPEG
 * 保留原始 PNG 作为备份（移到 _original 子目录）
 *
 * 用法: node scripts/optimize-images.mjs
 */
import sharp from "sharp"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.resolve(__dirname, "../public/images/实拍")

if (!fs.existsSync(dir)) {
  console.error("目录不存在:", dir)
  process.exit(1)
}

const files = fs.readdirSync(dir).filter(f => /\.(png|jpg|jpeg)$/i.test(f))
console.log(`找到 ${files.length} 个图片文件`)

const origDir = path.join(dir, "_original")
fs.mkdirSync(origDir, { recursive: true })

let totalSaved = 0

for (const file of files) {
  const filePath = path.join(dir, file)
  const ext = path.extname(file).toLowerCase()
  const name = path.basename(file, ext)
  const stat = fs.statSync(filePath)
  const sizeKB = stat.size / 1024

  // 小于 100KB 的图片不处理
  if (stat.size < 100 * 1024) {
    console.log(`  ⏭️  跳过 ${file} (${sizeKB.toFixed(0)}KB — 较小)`)
    continue
  }

  // 移到 _original 作为备份
  const backupPath = path.join(origDir, file)
  fs.renameSync(filePath, backupPath)

  try {
    const img = sharp(backupPath)
    const meta = await img.metadata()

    if (ext === ".png" && meta.format === "png") {
      // PNG 照片 → 转 JPEG quality=80
      const outPath = path.join(dir, `${name}.jpg`)
      await img
        .flatten({ background: { r: 255, g: 255, b: 255 } })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(outPath)
      const outStat = fs.statSync(outPath)
      const saved = stat.size - outStat.size
      totalSaved += saved
      console.log(`  ✅ ${file} (${(stat.size / 1024).toFixed(0)}KB) → ${name}.jpg (${(outStat.size / 1024).toFixed(0)}KB) 节省 ${(saved / 1024).toFixed(0)}KB`)
    } else if (ext === ".jpg" || ext === ".jpeg") {
      // JPEG 重新压缩
      await img.jpeg({ quality: 80, mozjpeg: true }).toFile(filePath)
      const outStat = fs.statSync(filePath)
      const saved = stat.size - outStat.size
      totalSaved += saved
      console.log(`  ✅ ${file} (${(stat.size / 1024).toFixed(0)}KB → ${(outStat.size / 1024).toFixed(0)}KB) 节省 ${(saved / 1024).toFixed(0)}KB`)
    }
  } catch (err) {
    // 出错时恢复备份
    fs.renameSync(backupPath, filePath)
    console.error(`  ❌ ${file}: ${err.message}`)
  }
}

console.log(`\n📊 总共节省: ${(totalSaved / 1024 / 1024).toFixed(1)}MB`)
console.log("⚠️  原始文件已备份到 _original/ 目录")
console.log("📝 注意: 代码中的 .png 引用需要手动更新为 .jpg")
