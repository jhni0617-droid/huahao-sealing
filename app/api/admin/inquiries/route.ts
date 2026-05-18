import { NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/admin/db"

export async function GET(request: NextRequest) {
  const db = getDb()
  const { searchParams } = new URL(request.url)
  const status = searchParams.get("status")
  const search = searchParams.get("search") || ""

  let rows: any[]
  if (status && status !== "all") {
    rows = db
      .prepare("SELECT id, name, email, phone, company, product_type, status, created_at FROM inquiries WHERE status = ? AND (name LIKE ? OR email LIKE ? OR company LIKE ?) ORDER BY created_at DESC")
      .all(status, `%${search}%`, `%${search}%`, `%${search}%`) as any[]
  } else {
    rows = db
      .prepare("SELECT id, name, email, phone, company, product_type, status, created_at FROM inquiries WHERE name LIKE ? OR email LIKE ? OR company LIKE ? ORDER BY created_at DESC")
      .all(`%${search}%`, `%${search}%`, `%${search}%`) as any[]
  }

  const counts = {
    all: (db.prepare("SELECT COUNT(*) as c FROM inquiries").get() as any).c,
    unread: (db.prepare("SELECT COUNT(*) as c FROM inquiries WHERE status='unread'").get() as any).c,
    read: (db.prepare("SELECT COUNT(*) as c FROM inquiries WHERE status='read'").get() as any).c,
    replied: (db.prepare("SELECT COUNT(*) as c FROM inquiries WHERE status='replied'").get() as any).c,
    archived: (db.prepare("SELECT COUNT(*) as c FROM inquiries WHERE status='archived'").get() as any).c,
  }

  return NextResponse.json({ data: rows, counts })
}
