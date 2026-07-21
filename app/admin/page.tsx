import StatsCard from "@/components/admin/StatsCard"
import StatusBadge from "@/components/admin/StatusBadge"
import Link from "next/link"
import { getDb, dbGet, dbAll } from "@/lib/admin/db"
import { getCountryName } from "@/lib/country-names"

export default async function AdminDashboardPage() {
  const db = await getDb()

  const productCount = (await dbGet("SELECT COUNT(*) as count FROM products", []) as any).count
  const inquiryCount = (await dbGet("SELECT COUNT(*) as count FROM inquiries", []) as any).count
  const unreadCount = (await dbGet("SELECT COUNT(*) as count FROM inquiries WHERE status = 'unread'", []) as any).count
  const caseCount = (await dbGet("SELECT COUNT(*) as count FROM cases", []) as any).count

  // 真实访客统计（排除爬虫）。visited_at 存储为 UTC 时间，查询时转换为 UTC+8
  const totalVisits = (await dbGet("SELECT COUNT(*) as count FROM page_views WHERE is_bot = 0", []) as any).count
  const botVisits = (await dbGet("SELECT COUNT(*) as count FROM page_views WHERE is_bot = 1", []) as any).count
  const todayVisits = (await dbGet(
    "SELECT COUNT(*) as count FROM page_views WHERE is_bot = 0 AND date(visited_at, '+8 hours') = date('now')",
    [],
  ) as any).count
  const uniqueVisitors = (await dbGet(
    `SELECT COUNT(DISTINCT COALESCE(ip_hash, session_id)) as count
     FROM page_views
     WHERE is_bot = 0 AND (ip_hash IS NOT NULL OR session_id IS NOT NULL)`,
    [],
  ) as any).count

  // 热门入口页面：由于会话级去重，这里统计的是用户进入站点的第一个页面
  const topPages = await dbAll(
    `SELECT path, locale, COUNT(*) as count FROM page_views WHERE is_bot = 0
     GROUP BY path, locale ORDER BY count DESC LIMIT 8`,
    [],
  ) as any[]
  const visitsByDay = await dbAll(
    `SELECT date(visited_at, '+8 hours') as day, COUNT(*) as count FROM page_views
     WHERE is_bot = 0 AND visited_at >= datetime('now', '-7 days')
     GROUP BY day ORDER BY day`,
    [],
  ) as any[]

  // 国家分布
  const byCountry = await dbAll(
    `SELECT COALESCE(country, 'Unknown') as country, COUNT(*) as count,
            COUNT(DISTINCT COALESCE(ip_hash, session_id)) as unique_count
     FROM page_views WHERE is_bot = 0
     GROUP BY country ORDER BY count DESC LIMIT 15`,
    [],
  ) as any[]

  const byCountryWithNames = byCountry.map((c: any) => ({
    ...c,
    displayName: c.country === 'Unknown' ? '未知' : getCountryName(c.country),
  }))

  // 来源分布
  const byReferrer = await dbAll(
    `SELECT COALESCE(referrer, '(直接访问 / 收藏夹)') as referrer, COUNT(*) as count
     FROM page_views WHERE is_bot = 0
     GROUP BY referrer ORDER BY count DESC LIMIT 15`,
    [],
  ) as any[]

  // 最近真实访客明细
  const recentVisits = await dbAll(
    `SELECT id, path, locale, country, referrer, visited_at
     FROM page_views WHERE is_bot = 0
     ORDER BY id DESC LIMIT 30`,
    [],
  ) as any[]

  const recentInquiries = await dbAll(
    "SELECT id, name, email, company, status, created_at FROM inquiries ORDER BY created_at DESC LIMIT 5",
    [],
  ) as any[]
  const categories = await dbAll("SELECT category, COUNT(*) as count FROM products GROUP BY category", []) as any[]

  const maxDay = Math.max(1, ...visitsByDay.map((d) => d.count))

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-900 mb-6">仪表盘</h1>

      {/* 业务统计 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatsCard label="产品总数" value={productCount} icon="📦" />
        <StatsCard label="询价总数" value={inquiryCount} icon="✉️" />
        <StatsCard label="未读询价" value={unreadCount} icon="🔴" />
        <StatsCard label="案例数量" value={caseCount} icon="📋" />
      </div>

      {/* 真实访客统计 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatsCard label="访问次数（会话级）" value={totalVisits} icon="👁️" />
        <StatsCard label="独立访客 UV" value={uniqueVisitors} icon="👤" />
        <StatsCard label="今日访问" value={todayVisits} icon="📊" />
        <StatsCard label="爬虫访问（已过滤）" value={botVisits} icon="🤖" />
      </div>

      {totalVisits === 0 && botVisits === 0 && (
        <div className="mb-6 p-4 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-800">
          ℹ️ 升级后旧的访问记录没有国家/来源/爬虫标记。从这里开始，所有新访问都会带上这些字段。
        </div>
      )}

      {/* 7 天趋势 + 热门页面 */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">最近 7 天真实访客趋势</h2>
          {visitsByDay.length === 0 ? (
            <p className="text-sm text-gray-400">暂无数据</p>
          ) : (
            <div className="space-y-2">
              {visitsByDay.map((d: any) => (
                <div key={d.day} className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-24 shrink-0">{d.day}</span>
                  <div className="flex-1 bg-gray-100 rounded h-5 overflow-hidden">
                    <div
                      className="bg-accent h-full"
                      style={{ width: `${(d.count / maxDay) * 100}%`, minWidth: "4px" }}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-700 w-8 text-right">{d.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">入口页面 TOP 8（用户首次访问的页面）</h2>
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
      </div>

      {/* 国家分布 + 来源分布 */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">访客国家 / 地区分布</h2>
          {byCountryWithNames.length === 0 ? (
            <p className="text-sm text-gray-400">暂无数据</p>
          ) : (
            <div className="space-y-2">
              {byCountryWithNames.map((c: any) => (
                <div key={c.country} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50">
                  <span className="text-sm text-gray-700">{c.displayName}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">UV {c.unique_count}</span>
                    <span className="text-sm font-medium text-accent">{c.count} 次</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">访问来源（外部网站）</h2>
          {byReferrer.length === 0 ? (
            <p className="text-sm text-gray-400">暂无数据</p>
          ) : (
            <div className="space-y-2">
              {byReferrer.map((r: any) => (
                <div key={r.referrer} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50">
                  <span className="text-sm text-gray-700 truncate" title={r.referrer}>{r.referrer}</span>
                  <span className="text-sm font-medium text-accent shrink-0 ml-2">{r.count} 次</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 最近真实访客明细 */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
        <h2 className="text-sm font-semibold text-gray-900 mb-4">最近 30 条真实访客明细</h2>
        {recentVisits.length === 0 ? (
          <p className="text-sm text-gray-400">暂无数据</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-200">
                  <th className="py-2 pr-3 font-medium">时间</th>
                  <th className="py-2 pr-3 font-medium">国家</th>
                  <th className="py-2 pr-3 font-medium">语言</th>
                  <th className="py-2 pr-3 font-medium">页面</th>
                  <th className="py-2 font-medium">来源</th>
                </tr>
              </thead>
              <tbody>
                {recentVisits.map((v: any) => (
                  <tr key={v.id} className="border-b border-gray-50">
                    <td className="py-2 pr-3 text-gray-500 whitespace-nowrap">{v.visited_at}</td>
                    <td className="py-2 pr-3 text-gray-700">{v.country ? getCountryName(v.country) : "—"}</td>
                    <td className="py-2 pr-3 text-gray-500 font-mono">{v.locale}</td>
                    <td className="py-2 pr-3 text-gray-700">{v.path}</td>
                    <td className="py-2 text-gray-500 truncate max-w-[200px]" title={v.referrer || ""}>
                      {v.referrer || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
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
