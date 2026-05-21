import Database from "better-sqlite3"
import path from "path"
import fs from "fs"
import bcrypt from "bcryptjs"
import { CREATE_TABLES } from "./schema"

let db: Database.Database | null = null

export function getDb(): Database.Database {
  if (db) return db

  const isVercel = !!process.env.VERCEL
  const dbPath = isVercel
    ? "/tmp/huahao-admin.db"
    : process.env.SQLITE_DB_PATH || path.join(process.cwd(), "huahao-admin.db")

  // On Vercel, always copy from source to /tmp so we get the latest DB
  if (isVercel) {
    const source = path.join(process.cwd(), "huahao-admin.db")
    if (fs.existsSync(source)) {
      fs.copyFileSync(source, dbPath)
    }
  }

  db = new Database(dbPath)

  if (isVercel) {
    db.pragma("journal_mode = DELETE")
  } else {
    db.pragma("journal_mode = WAL")
  }
  db.pragma("foreign_keys = ON")

  // Initialize tables
  db.exec(CREATE_TABLES)

  // Ensure default admin exists
  const admin = db.prepare("SELECT id FROM admins WHERE username = ?").get("admin")
  if (!admin) {
    const hash = bcrypt.hashSync("qqnjh123", 10)
    db.prepare("INSERT INTO admins (username, password_hash, display_name) VALUES (?, ?, ?)").run(
      "admin", hash, "管理员"
    )
  }

  return db
}
