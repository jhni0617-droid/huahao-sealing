"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DeleteDialog from "@/components/admin/DeleteDialog"

export default function AdminCasesPage() {
  const router = useRouter()
  const [cases, setCases] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [deleteId, setDeleteId] = useState<number | null>(null)
  const [deleting, setDeleting] = useState(false)

  const fetchCases = () => {
    setLoading(true)
    fetch("/api/admin/cases")
      .then((r) => r.json())
      .then((d) => setCases(d.data))
      .finally(() => setLoading(false))
  }

  useEffect(() => { fetchCases() }, [])

  const handleDelete = async () => {
    if (!deleteId) return
    setDeleting(true)
    try {
      await fetch(`/api/admin/cases/${deleteId}`, { method: "DELETE" })
      setDeleteId(null)
      fetchCases()
    } finally {
      setDeleting(false)
    }
  }

  if (loading) return <div className="text-gray-400">加载中...</div>

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-900">案例管理</h1>
        <button onClick={() => router.push("/admin/cases/new")} className="bg-accent hover:bg-accent/90 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
          + 新增案例
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-4 py-3 font-medium text-gray-600">标题</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">公司</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">状态</th>
              <th className="text-right px-4 py-3 font-medium text-gray-600">操作</th>
            </tr>
          </thead>
          <tbody>
            {cases.length === 0 ? (
              <tr><td colSpan={4} className="px-4 py-12 text-center text-gray-400">暂无案例</td></tr>
            ) : (
              cases.map((c: any) => (
                <tr key={c.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{c.title}</td>
                  <td className="px-4 py-3 text-gray-500">{c.company || "-"}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${c.published ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}>
                      {c.published ? "已发布" : "已隐藏"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-3">
                    <button onClick={() => router.push(`/admin/cases/${c.id}/edit`)} className="text-accent hover:underline text-sm">编辑</button>
                    <button onClick={() => setDeleteId(c.id)} className="text-red-500 hover:underline text-sm">删除</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <DeleteDialog
        open={!!deleteId}
        title="删除案例"
        message="确定要删除这个案例吗？此操作不可恢复。"
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
        loading={deleting}
      />
    </div>
  )
}
