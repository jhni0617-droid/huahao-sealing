// 一次性迁移：products.image 字段从 jpg/png 更新为对应的 webp 路径
// 用法: node --env-file=.env.local scripts/migrate-product-images.mjs
// 会同时更新本地 SQLite（未配置 TURSO 时）或 Turso 云库（配置了 TURSO_DB_URL 时）
import { createClient } from "@libsql/client"
import fs from "node:fs"
import path from "node:path"

function loadEnvFile(p) {
  const env = {}
  if (!fs.existsSync(p)) return env
  for (const line of fs.readFileSync(p, "utf8").split("\n")) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) continue
    const eq = trimmed.indexOf("=")
    if (eq <= 0) continue
    let key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    env[key] = value
  }
  return env
}

async function main() {
  const env = loadEnvFile(".env.local")
  const isTurso = !!env.TURSO_DB_URL

  const client = createClient(
    isTurso
      ? { url: env.TURSO_DB_URL, authToken: env.TURSO_DB_TOKEN }
      : { url: `file:${path.join(process.cwd(), "huahao-admin.db")}` },
  )

  const rs = await client.execute("SELECT id, image FROM products WHERE image IS NOT NULL")
  let updated = 0
  for (const row of rs.rows) {
    const img = String(row.image)
    const webp = img.replace(/\.(jpg|jpeg|png)$/i, ".webp")
    if (webp === img) continue
    if (!fs.existsSync(path.join("public", webp))) {
      console.log(`SKIP (no webp): ${img}`)
      continue
    }
    await client.execute("UPDATE products SET image = ? WHERE id = ?", [webp, row.id])
    console.log(`UPDATE: ${img} -> ${webp}`)
    updated++
  }

  console.log(`\nDone. Updated ${updated} rows on ${isTurso ? "Turso (production)" : "local SQLite"}.`)
  client.close()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
