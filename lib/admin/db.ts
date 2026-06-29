import path from "path"
import type { ResultSet, Client, InValue } from "@libsql/client"

const CREATE_TABLES_SQL = `
CREATE TABLE IF NOT EXISTS admins (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  username      TEXT    NOT NULL UNIQUE,
  password_hash TEXT    NOT NULL,
  display_name  TEXT    NOT NULL,
  created_at    TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at    TEXT    NOT NULL DEFAULT (datetime('now'))
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
  created_at   TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at   TEXT    NOT NULL DEFAULT (datetime('now'))
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
  created_at   TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at   TEXT    NOT NULL DEFAULT (datetime('now'))
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
  created_at  TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at  TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS page_views (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  path        TEXT    NOT NULL,
  locale      TEXT    NOT NULL DEFAULT 'zh',
  visited_at  TEXT    NOT NULL DEFAULT (datetime('now'))
);
`

let client: Client | null = null

function rowToObj(rs: ResultSet, row: Record<string, InValue | undefined>): Record<string, any> {
  const obj: Record<string, any> = {}
  for (const col of rs.columns) {
    obj[col] = row[col]
  }
  return obj
}

export async function getDb(): Promise<Client> {
  if (client) return client

  const { createClient } = await import("@libsql/client")

  const isTurso = !!process.env.TURSO_DB_URL

  client = createClient(
    isTurso
      ? {
          url: process.env.TURSO_DB_URL!,
          authToken: process.env.TURSO_DB_TOKEN,
        }
      : {
          // On Vercel, use /tmp/ (only writable directory). Local dev uses cwd.
          url: `file:${process.env.SQLITE_DB_PATH || path.join(process.env.VERCEL ? "/tmp" : process.cwd(), "huahao-admin.db")}`,
        },
  )

  // Initialize tables (split multi-statement SQL for libsql compatibility)
  const statements = CREATE_TABLES_SQL.split(";").filter((s) => s.trim())
  for (const stmt of statements) {
    await client.execute(stmt + ";")
  }

  // Ensure default admin exists
  const existing = await client.execute("SELECT id FROM admins WHERE username = ?", ["admin"])
  if (existing.rows.length === 0) {
    const bcrypt = await import("bcryptjs")
    const hash = bcrypt.hashSync("qqnjh123", 10)
    await client.execute("INSERT INTO admins (username, password_hash, display_name) VALUES (?, ?, ?)", [
      "admin",
      hash,
      "管理员",
    ])
  }

  return client
}

/**
 * Helper: execute a query and return first row as plain object (or undefined)
 */
export async function dbGet(sql: string, params: InValue[] = []): Promise<Record<string, any> | undefined> {
  const c = await getDb()
  const rs = await c.execute(sql, params)
  if (rs.rows.length === 0) return undefined
  return rowToObj(rs, rs.rows[0] as any)
}

/**
 * Helper: execute a query and return all rows as plain objects
 */
export async function dbAll(sql: string, params: InValue[] = []): Promise<Record<string, any>[]> {
  const c = await getDb()
  const rs = await c.execute(sql, params)
  return rs.rows.map((row) => rowToObj(rs, row as any))
}

/**
 * Helper: execute INSERT/UPDATE/DELETE and return changes info
 */
export async function dbRun(sql: string, params: InValue[] = []): Promise<{ changes: number; id: number }> {
  const c = await getDb()
  const rs = await c.execute(sql, params)
  return { changes: rs.rowsAffected ?? 0, id: Number(rs.lastInsertRowid ?? 0) }
}
