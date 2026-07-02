import { createClient } from "@libsql/client"
import { readFileSync } from "fs"
import { join } from "path"

const envPath = join(process.cwd(), ".env.local")
const envContent = readFileSync(envPath, "utf-8")
for (const line of envContent.split("\n")) {
  const [key, ...rest] = line.split("=")
  const value = rest.join("=")
  if (key && value && !key.startsWith("#")) {
    process.env[key.trim()] = value.trim()
  }
}

const client = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_DB_TOKEN,
})

console.log("Connected to Turso:", process.env.TURSO_DB_URL)

// 添加新字段
const migrations = [
  "ALTER TABLE page_views ADD COLUMN country TEXT DEFAULT NULL",
  "ALTER TABLE page_views ADD COLUMN referrer TEXT DEFAULT NULL",
  "ALTER TABLE page_views ADD COLUMN user_agent TEXT DEFAULT NULL",
  "ALTER TABLE page_views ADD COLUMN ip_hash TEXT DEFAULT NULL",
  "ALTER TABLE page_views ADD COLUMN session_id TEXT DEFAULT NULL",
  "ALTER TABLE page_views ADD COLUMN is_bot INTEGER NOT NULL DEFAULT 0",
]

for (const sql of migrations) {
  try {
    await client.execute(sql)
    console.log("✓ Migrated:", sql.split("ADD COLUMN")[1].trim())
  } catch (e) {
    console.log("⚠ Error:", e.message)
  }
}

// 建索引
const indexes = [
  "CREATE INDEX IF NOT EXISTS idx_page_views_visited_at ON page_views(visited_at)",
  "CREATE INDEX IF NOT EXISTS idx_page_views_ip_hash ON page_views(ip_hash)",
  "CREATE INDEX IF NOT EXISTS idx_page_views_country ON page_views(country)",
]

for (const sql of indexes) {
  try {
    await client.execute(sql)
    console.log("✓ Index:", sql.split("ON ")[1].trim())
  } catch (e) {
    console.log("⚠ Index error:", e.message)
  }
}

// 验证
const cols = await client.execute("PRAGMA table_info(page_views)")
console.log("\npage_views columns:", cols.rows.map((r) => r.name).join(", "))

console.log("\n✅ Turso 迁移完成！")
process.exit(0)