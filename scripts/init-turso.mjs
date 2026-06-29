import { createClient } from "@libsql/client"
import bcrypt from "bcryptjs"
import fs from "fs"

// Read DB auth token
const token = fs.readFileSync("./scripts/turso-db-jwt.txt", "utf8").trim()

const DB_URL = "libsql://huahao-admin-jhni0617-droid.aws-ap-northeast-1.turso.io"

async function main() {
  const client = createClient({ url: DB_URL, authToken: token })
  console.log("✅ Connected to Turso")

  const sqls = [
    "CREATE TABLE IF NOT EXISTS admins (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL UNIQUE, password_hash TEXT NOT NULL, display_name TEXT NOT NULL)",
    "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, slug TEXT NOT NULL UNIQUE, name TEXT NOT NULL, model TEXT DEFAULT '', category TEXT DEFAULT '', description TEXT DEFAULT '', short_desc TEXT DEFAULT '', specs TEXT DEFAULT '[]', applications TEXT DEFAULT '[]', materials TEXT DEFAULT '[]', features TEXT DEFAULT '[]', faq TEXT DEFAULT '[]', image TEXT DEFAULT NULL, pdf_url TEXT DEFAULT NULL, published INTEGER DEFAULT 1)",
    "CREATE TABLE IF NOT EXISTS inquiries (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT DEFAULT '', email TEXT NOT NULL, phone TEXT DEFAULT '', company TEXT DEFAULT '', product_type TEXT DEFAULT '', industry TEXT DEFAULT '', temperature TEXT DEFAULT '', pressure TEXT DEFAULT '', medium TEXT DEFAULT '', speed TEXT DEFAULT '', quantity TEXT DEFAULT '', message TEXT NOT NULL DEFAULT '', product TEXT DEFAULT NULL, file_name TEXT DEFAULT NULL, file_content TEXT DEFAULT NULL, status TEXT DEFAULT 'unread')",
    "CREATE TABLE IF NOT EXISTS cases (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, company TEXT DEFAULT '', condition TEXT DEFAULT '', diagnosis TEXT DEFAULT '', solution TEXT DEFAULT '', result TEXT DEFAULT '', published INTEGER DEFAULT 1)",
    "CREATE TABLE IF NOT EXISTS page_views (id INTEGER PRIMARY KEY AUTOINCREMENT, path TEXT NOT NULL, locale TEXT DEFAULT 'zh')",
  ]

  for (const s of sqls) {
    await client.execute(s)
  }
  console.log("✅ Tables created")

  // Create admin
  const hash = bcrypt.hashSync("qqnjh123", 10)
  const existing = await client.execute("SELECT id FROM admins WHERE username = ?", ["admin"])
  if (existing.rows.length === 0) {
    await client.execute("INSERT INTO admins (username, password_hash, display_name) VALUES (?, ?, ?)", ["admin", hash, "管理员"])
    console.log("✅ Admin created")
  } else {
    await client.execute("UPDATE admins SET password_hash = ? WHERE username = ?", [hash, "admin"])
    console.log("✅ Admin password updated")
  }

  console.log("🎉 Done!")
  process.exit(0)
}
main().catch((e) => {
  console.error("❌", e.message)
  process.exit(1)
})
