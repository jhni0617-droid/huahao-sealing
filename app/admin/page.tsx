import StatsCard from "@/components/admin/StatsCard"
import StatusBadge from "@/components/admin/StatusBadge"
import Link from "next/link"
import { getDb } from "@/lib/admin/db"

export default async function AdminDashboardPage() {
  const db = getDb()

  const productCount = (db.prepare("SELECT COUNT(*) as count FROM products").get() as any).count
  const inquiryCount = (db.prepare("SELECT COUNT(*) as count FROM inquiries").get() as any).count
  const unreadCount = (db.prepare("SELECT COUNT(*) as count FROM inquiries WHERE status = 'unread'").get() as any).count
  const caseCount = (db.prepare("SELECT COUNT(*) as count FROM cases").get() as any).count

  const totalVisits = (db.prepare("SELECT COUNT(*) as count FROM page_views").get() as any).count
  const todayVisits = (db.prepare("SELECT COUNT(*) as count FROM page_views WHERE date(visited_at) = date('now')").get() as any).count
  const topPages = db
    .prepare("SELECT path, locale, COUNT(*) as count FROM page_views GROUP BY path, locale ORDER BY count DESC LIMIT 8")
    .all() as any[]
  const visitsByDay = db
    .prepare("SELECT date(visited_at) as day, COUNT(*) as count FROM page_views WHERE visited_at >= datetime('now', '-7 days') GROUP BY day ORDER BY day")
    .all() as any[]

  const recentInquiries = db
    .prepare("SELECT id, name, email, company, status, created_at FROM inquiries ORDER BY created_at DESC LIMIT 5")
    .all() as any[]
  const categories = db
    .prepare("SELECT category, COUNT(*) as count FROM products GROUP BY category")
    .all() as any[]

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-900 mb-6">仪表盘</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard label="产品总数" value={productCount} icon="📦" />
        <StatsCard label="询价总数" value={inquiryCount} icon="✉️" />
        <StatsCard label="未读询价" value={unreadCount} icon="🔴" />
        <StatsCard label="案例数量" value={caseCount} icon="📋" />
      </div>

      {/* Visit Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <StatsCard label="总访问次数" value={totalVisits} icon="👁️" />
        <StatsCard label="今日访问" value={todayVisits} icon="📊" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Top Pages */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">热门页面 TOP 8</h2>
          {topPages.length === 0 ? (
            <p className="text-sm text-gray-400">暂无数据</p>
          ) : (
            <div className="space-y-2">
              {topPages.map((p: any, i: number) => (
                <div key={`${p.path}-${p.locale}`} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xs text-gray-400 w-4 shrink-0">{i + 1}</span>
                    <span className="text-xs text-gray-500 font-mono shrink-0">{p.locale}</span>
                    <span className="text-sm text-gray-700 truncate">{p.path || "/"}</span>
                  </div>
                  <span className="text-sm font-medium text-accent shrink-0 ml-2">{p.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Visits by Day */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">最近 7 天访问趋势</h2>
          {visitsByDay.length === 0 ? (
            <p className="text-sm text-gray-400">暂无数据</p>
          ) : (
            <div className="space-y-2">
              {visitsByDay.map((d: any) => (
                <div key={d.day} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50">
                  <span className="text-sm text-gray-700">{d.day}</span>
                  <span className="text-sm font-medium text-accent">{d.count} 次</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Inquiries */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-900">最近询价</h2>
            <Link href="/admin/inquiries" className="text-xs text-accent hover:underline">查看全部</Link>
          </div>
          {recentInquiries.length === 0 ? (
            <p className="text-sm text-gray-400">暂无询价</p>
          ) : (
            <div className="space-y-3">
              {recentInquiries.map((inq: any) => (
                <Link
                  key={inq.id}
                  href={`/admin/inquiries/${inq.id}`}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <div className="text-sm font-medium text-gray-900">{inq.name}</div>
                    <div className="text-xs text-gray-500">{inq.company || inq.email}</div>
                  </div>
                  <StatusBadge status={inq.status} />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">产品分类统计</h2>
          {categories.length === 0 ? (
            <p className="text-sm text-gray-400">暂无产品</p>
          ) : (
            <div className="space-y-3">
              {categories.map((cat: any) => (
                <div key={cat.category} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <span className="text-sm text-gray-700">{cat.category}</span>
                  <span className="text-sm font-medium text-accent">{cat.count} 个</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
