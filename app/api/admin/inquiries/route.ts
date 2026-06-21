import { NextRequest, NextResponse } from "next/server"
import { getDb, dbAll, dbGet } from "@/lib/admin/db"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get("status")
  const search = searchParams.get("search") || ""

  let rows: any[]
  if (status && status !== "all") {
    rows = await dbAll(
      "SELECT id, name, email, phone, company, product_type, status, created_at FROM inquiries WHERE status = ? AND (name LIKE ? OR email LIKE ? OR company LIKE ?) ORDER BY created_at DESC",
      [status, `%${search}%`, `%${search}%`, `%${search}%`],
    ) as any[]
  } else {
    rows = await dbAll(
      "SELECT id, name, email, phone, company, product_type, status, created_at FROM inquiries WHERE name LIKE ? OR email LIKE ? OR company LIKE ? ORDER BY created_at DESC",
      [`%${search}%`, `%${search}%`, `%${search}%`],
    ) as any[]
  }

  const counts = {
    all: (await dbGet("SELECT COUNT(*) as c FROM inquiries"))!.c,
    unread: (await dbGet("SELECT COUNT(*) as c FROM inquiries WHERE status='unread'"))!.c,
    read: (await dbGet("SELECT COUNT(*) as c FROM inquiries WHERE status='read'"))!.c,
    replied: (await dbGet("SELECT COUNT(*) as c FROM inquiries WHERE status='replied'"))!.c,
    archived: (await dbGet("SELECT COUNT(*) as c FROM inquiries WHERE status='archived'"))!.c,
  }

  return NextResponse.json({ data: rows, counts })
}
