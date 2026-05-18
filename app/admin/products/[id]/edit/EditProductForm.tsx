"use client"

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"

interface FormData {
  name: string
  slug: string
  model: string
  category: string
  description: string
  short_desc: string
  image: string
  pdf_url: string
  published: boolean
}

export default function EditProductForm({ product }: { product: any }) {
  const router = useRouter()
  const [form, setForm] = useState<FormData>({
    name: product.name || "",
    slug: product.slug || "",
    model: product.model || "",
    category: product.category || "",
    description: product.description || "",
    short_desc: product.short_desc || "",
    image: product.image || "",
    pdf_url: product.pdf_url || "",
    published: !!product.published,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch(`/api/admin/products/${product.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || "更新失败")
        return
      }

      router.push("/admin/products")
    } catch {
      setError("网络错误")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-xl font-bold text-gray-900 mb-6">编辑产品</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">产品名称 *</label>
          <input type="text" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input type="text" value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-500" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">型号</label>
            <input type="text" value={form.model} onChange={(e) => setForm((f) => ({ ...f, model: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">分类</label>
            <input type="text" value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">简短描述</label>
          <input type="text" value={form.short_desc} onChange={(e) => setForm((f) => ({ ...f, short_desc: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">详细描述</label>
          <textarea value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">图片路径</label>
            <input type="text" value={form.image} onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PDF 路径</label>
            <input type="text" value={form.pdf_url} onChange={(e) => setForm((f) => ({ ...f, pdf_url: e.target.value }))} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="published" checked={form.published} onChange={(e) => setForm((f) => ({ ...f, published: e.target.checked }))} className="rounded" />
          <label htmlFor="published" className="text-sm text-gray-700">已发布</label>
        </div>

        {error && <div className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg">{error}</div>}

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={loading} className="bg-accent hover:bg-accent/90 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors disabled:opacity-50">
            {loading ? "保存中..." : "保存"}
          </button>
          <button type="button" onClick={() => router.back()} className="text-sm text-gray-500 px-5 py-2.5 hover:text-gray-700">取消</button>
        </div>
      </form>
    </div>
  )
}
