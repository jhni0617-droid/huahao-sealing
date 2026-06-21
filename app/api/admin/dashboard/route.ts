import { NextRequest, NextResponse } from "next/server"
import { getDb, dbGet, dbAll } from "@/lib/admin/db"

export async function GET() {
  const db = await getDb()

  const productCount = (await dbGet("SELECT COUNT(*) as count FROM products", []) as any).count
  const inquiryCount = (await dbGet("SELECT COUNT(*) as count FROM inquiries", []) as any).count
  const unreadCount = (await dbGet("SELECT COUNT(*) as count FROM inquiries WHERE status = 'unread'", []) as any).count
  const caseCount = (await dbGet("SELECT COUNT(*) as count FROM cases", []) as any).count

  // Visit stats
  const totalVisits = (await dbGet("SELECT COUNT(*) as count FROM page_views", []) as any).count
  const todayVisits = (await dbGet("SELECT COUNT(*) as count FROM page_views WHERE date(visited_at) = date('now')", []) as any).count
  const topPages = await dbAll("SELECT path, locale, COUNT(*) as count FROM page_views GROUP BY path, locale ORDER BY count DESC LIMIT 10", [])
  const visitsByDay = await dbAll("SELECT date(visited_at) as day, COUNT(*) as count FROM page_views WHERE visited_at >= datetime('now', '-7 days') GROUP BY day ORDER BY day", [])

  const recentInquiries = await dbAll("SELECT id, name, email, company, status, created_at FROM inquiries ORDER BY created_at DESC LIMIT 5", [])

  const categories = await dbAll("SELECT category, COUNT(*) as count FROM products GROUP BY category", [])

  return NextResponse.json({
    data: {
      stats: { productCount, inquiryCount, unreadCount, caseCount },
      visits: { totalVisits, todayVisits, topPages, visitsByDay },
      recentInquiries,
      categories,
    },
  })
}
