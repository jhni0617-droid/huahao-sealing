import { NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/admin/db"

export async function GET() {
  const db = getDb()

  const productCount = (db.prepare("SELECT COUNT(*) as count FROM products").get() as any).count
  const inquiryCount = (db.prepare("SELECT COUNT(*) as count FROM inquiries").get() as any).count
  const unreadCount = (db.prepare("SELECT COUNT(*) as count FROM inquiries WHERE status = 'unread'").get() as any).count
  const caseCount = (db.prepare("SELECT COUNT(*) as count FROM cases").get() as any).count

  // Visit stats
  const totalVisits = (db.prepare("SELECT COUNT(*) as count FROM page_views").get() as any).count
  const todayVisits = (db.prepare("SELECT COUNT(*) as count FROM page_views WHERE date(visited_at) = date('now')").get() as any).count
  const topPages = db
    .prepare("SELECT path, locale, COUNT(*) as count FROM page_views GROUP BY path, locale ORDER BY count DESC LIMIT 10")
    .all()
  const visitsByDay = db
    .prepare("SELECT date(visited_at) as day, COUNT(*) as count FROM page_views WHERE visited_at >= datetime('now', '-7 days') GROUP BY day ORDER BY day")
    .all()

  const recentInquiries = db
    .prepare("SELECT id, name, email, company, status, created_at FROM inquiries ORDER BY created_at DESC LIMIT 5")
    .all()

  const categories = db
    .prepare("SELECT category, COUNT(*) as count FROM products GROUP BY category")
    .all()

  return NextResponse.json({
    data: {
      stats: { productCount, inquiryCount, unreadCount, caseCount },
      visits: { totalVisits, todayVisits, topPages, visitsByDay },
      recentInquiries,
      categories,
    },
  })
}
