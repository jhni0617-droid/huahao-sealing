import sharp from "sharp"
import fs from "fs"
import path from "path"

const publicDir = "C:/Users/倪/Desktop/vibe codeing/客户/huahao-sealing/public/images"

async function convertDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await convertDir(full)
      continue
    }

    const ext = path.extname(entry.name).toLowerCase()
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue
    if (entry.name.startsWith("{") && entry.name.includes("-")) continue // skip GUID files

    const webpName = path.basename(entry.name, ext) + ".webp"
    const webpPath = path.join(dir, webpName)
    if (fs.existsSync(webpPath)) continue

    const stat = fs.statSync(full)
    if (stat.size < 50000) continue // skip tiny files

    try {
      const img = sharp(full)
      const meta = await img.metadata()
      const origW = meta.width || 1600

      // Resize to max 1600px wide, quality 82
      const resized = img.resize({ width: Math.min(origW, 1600), withoutEnlargement: true })
      await resized.webp({ quality: 82, effort: 4 }).toFile(webpPath)

      const newSize = fs.statSync(webpPath).size
      const savedPct = ((1 - newSize / stat.size) * 100).toFixed(0)
      console.log(`${savedPct}% off | ${(stat.size/1024).toFixed(0)}K -> ${(newSize/1024).toFixed(0)}K | ${entry.name}`)
    } catch (e) {
      console.log(`FAILED ${entry.name}: ${e.message}`)
    }
  }
}

convertDir(publicDir).then(() => console.log("\nDone!"))
