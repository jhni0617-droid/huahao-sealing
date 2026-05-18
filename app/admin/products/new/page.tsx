"use client"

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function NewProductPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: "",
    slug: "",
    model: "",
    category: "",
    description: "",
    short_desc: "",
    image: "",
    pdf_url: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || "创建失败")
        return
      }

      router.push("/admin/products")
    } catch {
      setError("网络错误")
    } finally {
      setLoading(false)
    }
  }

  const autoSlug = (name: string) => {
    setForm((f) => ({ ...f, name, slug: name.replace(/\s+/g, "-").toLowerCase() }))
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-xl font-bold text-gray-900 mb-6">新增产品</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">产品名称 *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => autoSlug(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 text-gray-500"
          />
          <p className="text-xs text-gray-400 mt-0.5">URL 标识，自动根据产品名称生成</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">型号</label>
            <input
              type="text"
              value={form.model}
              onChange={(e) => setForm((f) => ({ ...f, model: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">分类</label>
            <input
              type="text"
              value={form.category}
              onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="如：碳石墨密封环"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">简短描述</label>
          <input
            type="text"
            value={form.short_desc}
            onChange={(e) => setForm((f) => ({ ...f, short_desc: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">详细描述</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">图片路径</label>
            <input
              type="text"
              value={form.image}
              onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="/images/products/xxx.jpg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PDF 路径</label>
            <input
              type="text"
              value={form.pdf_url}
              onChange={(e) => setForm((f) => ({ ...f, pdf_url: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>
        </div>

        {error && <div className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg">{error}</div>}

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={loading} className="bg-accent hover:bg-accent/90 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors disabled:opacity-50">
            {loading ? "创建中..." : "创建产品"}
          </button>
          <button type="button" onClick={() => router.back()} className="text-sm text-gray-500 px-5 py-2.5 hover:text-gray-700">
            取消
          </button>
        </div>
      </form>
    </div>
  )
}
