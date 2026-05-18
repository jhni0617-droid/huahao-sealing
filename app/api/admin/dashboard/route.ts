import { NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/admin/db"

export async function GET() {
  const db = getDb()

  const productCount = (db.prepare("SELECT COUNT(*) as count FROM products").get() as any).count
  const inquiryCount = (db.prepare("SELECT COUNT(*) as count FROM inquiries").get() as any).count
  const unreadCount = (db.prepare("SELECT COUNT(*) as count FROM inquiries WHERE status = 'unread'").get() as any).count
  const caseCount = (db.prepare("SELECT COUNT(*) as count FROM cases").get() as any).count

  const recentInquiries = db
    .prepare("SELECT id, name, email, company, status, created_at FROM inquiries ORDER BY created_at DESC LIMIT 5")
    .all()

  const categories = db
    .prepare("SELECT category, COUNT(*) as count FROM products GROUP BY category")
    .all()

  return NextResponse.json({
    data: {
      stats: { productCount, inquiryCount, unreadCount, caseCount },
      recentInquiries,
      categories,
    },
  })
}
