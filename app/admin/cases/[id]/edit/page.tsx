"use client"

import { useEffect, useState, FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function EditCasePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [form, setForm] = useState({ title: "", company: "", condition: "", diagnosis: "", solution: "", result: "" })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")

  const set = (field: string) => (e: any) => setForm((f) => ({ ...f, [field]: e.target.value }))

  useEffect(() => {
    (async () => {
      const { id } = await params
      try {
        const res = await fetch(`/api/admin/cases/${id}`)
        const d = await res.json()
        if (d.data) {
          setForm({
            title: d.data.title,
            company: d.data.company || "",
            condition: d.data.condition || "",
            diagnosis: d.data.diagnosis || "",
            solution: d.data.solution || "",
            result: d.data.result || "",
          })
        }
      } finally {
        setLoading(false)
      }
    })()
  }, [params])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError("")
    try {
      const { id } = await params
      const res = await fetch(`/api/admin/cases/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) { const d = await res.json(); setError(d.error); return }
      router.push("/admin/cases")
    } catch { setError("网络错误") } finally { setSaving(false) }
  }

  if (loading) return <div className="text-gray-400">加载中...</div>

  return (
    <div className="max-w-3xl">
      <h1 className="text-xl font-bold text-gray-900 mb-6">编辑案例</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">标题 *</label>
          <input type="text" value={form.title} onChange={set("title")} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">客户公司</label>
          <input type="text" value={form.company} onChange={set("company")} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">工况描述</label>
          <textarea value={form.condition} onChange={set("condition")} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">问题诊断</label>
          <textarea value={form.diagnosis} onChange={set("diagnosis")} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">解决方案</label>
          <textarea value={form.solution} onChange={set("solution")} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">效果</label>
          <textarea value={form.result} onChange={set("result")} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>
        {error && <div className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg">{error}</div>}
        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving} className="bg-accent hover:bg-accent/90 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors disabled:opacity-50">
            {saving ? "保存中..." : "保存"}
          </button>
          <button type="button" onClick={() => router.back()} className="text-sm text-gray-500 px-5 py-2.5 hover:text-gray-700">取消</button>
        </div>
      </form>
    </div>
  )
}
