import Database from "better-sqlite3"
import path from "path"
import { CREATE_TABLES } from "./schema"

let db: Database.Database | null = null

export function getDb(): Database.Database {
  if (db) return db

  const dbPath = process.env.SQLITE_DB_PATH || path.join(process.cwd(), "huahao-admin.db")
  db = new Database(dbPath)
  db.pragma("journal_mode = WAL")
  db.pragma("foreign_keys = ON")

  // Initialize tables
  db.exec(CREATE_TABLES)

  return db
}
