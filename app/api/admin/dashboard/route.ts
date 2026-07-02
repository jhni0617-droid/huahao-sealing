import { NextResponse } from "next/server"
import { getDb, dbGet, dbAll } from "@/lib/admin/db"

export async function GET() {
  const db = await getDb()

  const productCount = (await dbGet("SELECT COUNT(*) as count FROM products", []) as any).count
  const inquiryCount = (await dbGet("SELECT COUNT(*) as count FROM inquiries", []) as any).count
  const unreadCount = (await dbGet("SELECT COUNT(*) as count FROM inquiries WHERE status = 'unread'", []) as any).count
  const caseCount = (await dbGet("SELECT COUNT(*) as count FROM cases", []) as any).count

  // Visit stats —— 全部基于非爬虫访问
  const totalVisits = (await dbGet("SELECT COUNT(*) as count FROM page_views WHERE is_bot = 0", []) as any).count
  const botVisits = (await dbGet("SELECT COUNT(*) as count FROM page_views WHERE is_bot = 1", []) as any).count
  const todayVisits = (await dbGet("SELECT COUNT(*) as count FROM page_views WHERE is_bot = 0 AND date(visited_at) = date('now')", []) as any).count
  // unique visitors：按 ip_hash + session_id 去重
  const uniqueVisitors = (await dbGet(
    `SELECT COUNT(DISTINCT COALESCE(ip_hash, session_id)) as count
     FROM page_views
     WHERE is_bot = 0 AND (ip_hash IS NOT NULL OR session_id IS NOT NULL)`,
    [],
  ) as any).count

  const topPages = await dbAll(
    `SELECT path, locale, COUNT(*) as count
     FROM page_views WHERE is_bot = 0
     GROUP BY path, locale ORDER BY count DESC LIMIT 10`,
    [],
  )
  const visitsByDay = await dbAll(
    `SELECT date(visited_at) as day, COUNT(*) as count
     FROM page_views
     WHERE is_bot = 0 AND visited_at >= datetime('now', '-7 days')
     GROUP BY day ORDER BY day`,
    [],
  )

  // 国家分布
  const byCountry = await dbAll(
    `SELECT COALESCE(country, 'Unknown') as country, COUNT(*) as count, COUNT(DISTINCT COALESCE(ip_hash, session_id)) as unique_count
     FROM page_views WHERE is_bot = 0
     GROUP BY country ORDER BY count DESC LIMIT 15`,
    [],
  )

  // 来源分布（外部 referrer）
  const byReferrer = await dbAll(
    `SELECT COALESCE(referrer, '(直接访问 / 收藏夹)') as referrer, COUNT(*) as count
     FROM page_views WHERE is_bot = 0
     GROUP BY referrer ORDER BY count DESC LIMIT 15`,
    [],
  )

  // 最近 30 条真实访客明细
  const recentVisits = await dbAll(
    `SELECT id, path, locale, country, referrer, visited_at
     FROM page_views WHERE is_bot = 0
     ORDER BY id DESC LIMIT 30`,
    [],
  )

  // 最近 30 条爬虫访问（用来给站长看是不是搜索引擎在抓）
  const recentBots = await dbAll(
    `SELECT id, path, locale, country, user_agent, visited_at
     FROM page_views WHERE is_bot = 1
     ORDER BY id DESC LIMIT 20`,
    [],
  )

  const recentInquiries = await dbAll(
    "SELECT id, name, email, company, status, created_at FROM inquiries ORDER BY created_at DESC LIMIT 5",
    [],
  )
  const categories = await dbAll("SELECT category, COUNT(*) as count FROM products GROUP BY category", [])

  return NextResponse.json({
    data: {
      stats: { productCount, inquiryCount, unreadCount, caseCount },
      visits: {
        totalVisits,
        todayVisits,
        botVisits,
        uniqueVisitors,
        topPages,
        visitsByDay,
        byCountry,
        byReferrer,
        recentVisits,
        recentBots,
      },
      recentInquiries,
      categories,
    },
  })
}
