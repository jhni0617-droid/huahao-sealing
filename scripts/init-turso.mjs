import { createClient } from "@libsql/client"
import { readFileSync } from "fs"
import { join } from "path"
import bcrypt from "bcryptjs"

// 读取 .env.local
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

// 建表（Turso 版）
const CREATE_TABLES_SQL = `
CREATE TABLE IF NOT EXISTS admins (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  username      TEXT    NOT NULL UNIQUE,
  password_hash TEXT    NOT NULL,
  display_name  TEXT    NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  slug         TEXT    NOT NULL UNIQUE,
  name         TEXT    NOT NULL,
  model        TEXT    NOT NULL DEFAULT '',
  category     TEXT    NOT NULL DEFAULT '',
  description  TEXT    NOT NULL DEFAULT '',
  short_desc   TEXT    NOT NULL DEFAULT '',
  specs        TEXT    NOT NULL DEFAULT '[]',
  applications TEXT    NOT NULL DEFAULT '[]',
  materials    TEXT    NOT NULL DEFAULT '[]',
  features     TEXT    NOT NULL DEFAULT '[]',
  faq          TEXT    NOT NULL DEFAULT '[]',
  image        TEXT    DEFAULT NULL,
  pdf_url      TEXT    DEFAULT NULL,
  published    INTEGER NOT NULL DEFAULT 1,
  created_at   TEXT,
  updated_at   TEXT
);

CREATE TABLE IF NOT EXISTS inquiries (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  name         TEXT    NOT NULL DEFAULT '',
  email        TEXT    NOT NULL,
  phone        TEXT    DEFAULT '',
  company      TEXT    DEFAULT '',
  product_type TEXT    DEFAULT '',
  industry     TEXT    DEFAULT '',
  temperature  TEXT    DEFAULT '',
  pressure     TEXT    DEFAULT '',
  medium       TEXT    DEFAULT '',
  speed        TEXT    DEFAULT '',
  quantity     TEXT    DEFAULT '',
  message      TEXT    NOT NULL DEFAULT '',
  product      TEXT    DEFAULT NULL,
  file_name    TEXT    DEFAULT NULL,
  file_content TEXT    DEFAULT NULL,
  status       TEXT    NOT NULL DEFAULT 'unread',
  created_at   TEXT,
  updated_at   TEXT
);

CREATE TABLE IF NOT EXISTS cases (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  title       TEXT    NOT NULL,
  company     TEXT    NOT NULL DEFAULT '',
  condition   TEXT    NOT NULL DEFAULT '',
  diagnosis   TEXT    NOT NULL DEFAULT '',
  solution    TEXT    NOT NULL DEFAULT '',
  result      TEXT    NOT NULL DEFAULT '',
  published   INTEGER NOT NULL DEFAULT 1,
  created_at  TEXT,
  updated_at  TEXT
);

CREATE TABLE IF NOT EXISTS page_views (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  path        TEXT    NOT NULL,
  locale      TEXT    NOT NULL DEFAULT 'zh',
  country     TEXT    DEFAULT NULL,
  referrer    TEXT    DEFAULT NULL,
  user_agent  TEXT    DEFAULT NULL,
  ip_hash     TEXT    DEFAULT NULL,
  session_id  TEXT    DEFAULT NULL,
  is_bot      INTEGER NOT NULL DEFAULT 0,
  visited_at  TEXT
);
`

const statements = CREATE_TABLES_SQL.split(";").filter((s) => s.trim())
for (const stmt of statements) {
  try {
    await client.execute(stmt + ";")
    console.log("✓ Executed:", stmt.slice(0, 50).trim().replace(/\n/g, " ") + "...")
  } catch (e) {
    console.log("⚠ Error:", e.message)
  }
}

// 建索引
const INDEXES = [
  "CREATE INDEX IF NOT EXISTS idx_page_views_visited_at ON page_views(visited_at)",
  "CREATE INDEX IF NOT EXISTS idx_page_views_ip_hash ON page_views(ip_hash)",
  "CREATE INDEX IF NOT EXISTS idx_page_views_country ON page_views(country)",
]
for (const sql of INDEXES) {
  try {
    await client.execute(sql)
    console.log("✓ Index created")
  } catch (e) {
    console.log("⚠ Index error:", e.message)
  }
}

// 检查表结构
const cols = await client.execute("PRAGMA table_info(page_views)")
console.log("\npage_views columns:", cols.rows.map((r) => r.name).join(", "))

// 检查是否有 admin
const adminCheck = await client.execute("SELECT id FROM admins WHERE username = 'admin'")
if (adminCheck.rows.length === 0) {
  const hash = bcrypt.hashSync("qqnjh123", 10)
  await client.execute("INSERT INTO admins (username, password_hash, display_name) VALUES (?, ?, ?)", ["admin", hash, "管理员"])
  console.log("✓ Default admin created (username: admin, password: qqnjh123)")
} else {
  console.log("✓ Admin already exists")
}

console.log("\n✅ Turso 初始化完成！")
process.exit(0)