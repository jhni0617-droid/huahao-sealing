import Link from "next/link"
import { getDb, dbAll } from "@/lib/admin/db"

export default async function AdminInquiriesPage({
  searchParams,
}: {
  searchParams: { status?: string }
}) {
  const db = await getDb()
  const filter = searchParams.status || "all"

  let inquiries: any[]
  if (filter === "all") {
    inquiries = await dbAll("SELECT id, name, email, company, product_type, status, created_at FROM inquiries ORDER BY created_at DESC", []) as any[]
  } else {
    inquiries = await dbAll("SELECT id, name, email, company, product_type, status, created_at FROM inquiries WHERE status = ? ORDER BY created_at DESC", [filter]) as any[]
  }

  const statuses = [
    { key: "all", label: "全部" },
    { key: "unread", label: "未读" },
    { key: "read", label: "已读" },
    { key: "replied", label: "已回复" },
    { key: "archived", label: "已归档" },
  ]

  const statusColors: Record<string, string> = {
    unread: "bg-red-100 text-red-600",
    read: "bg-blue-100 text-blue-600",
    replied: "bg-green-100 text-green-600",
    archived: "bg-gray-200 text-gray-500",
  }
  const statusLabels: Record<string, string> = {
    unread: "未读",
    read: "已读",
    replied: "已回复",
    archived: "已归档",
  }

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-900 mb-6">询价记录</h1>

      {/* Status filter tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {statuses.map((s) => {
          const active = filter === s.key
          return (
            <Link
              key={s.key}
              href={s.key === "all" ? "/admin/inquiries" : `/admin/inquiries?status=${s.key}`}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                active
                  ? "bg-accent text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {s.label}
            </Link>
          )
        })}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-4 py-3 font-medium text-gray-600">姓名</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">邮箱</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">公司</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">产品类型</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">状态</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">时间</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center text-gray-400">暂无询价</td>
              </tr>
            ) : (
              inquiries.map((inq: any) => (
                <tr key={inq.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <Link href={`/admin/inquiries/${inq.id}`} className="font-medium text-gray-900 hover:text-accent">
                      {inq.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{inq.email}</td>
                  <td className="px-4 py-3 text-gray-500">{inq.company || "-"}</td>
                  <td className="px-4 py-3 text-gray-500">{inq.product_type || "-"}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[inq.status] || ""}`}>
                      {statusLabels[inq.status] || inq.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400 text-xs">{inq.created_at}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
