import Link from "next/link"
import { getDb } from "@/lib/admin/db"

export default async function AdminProductsPage() {
  const db = getDb()
  const products = db.prepare("SELECT * FROM products ORDER BY created_at DESC").all() as any[]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-900">产品管理</h1>
        <Link href="/admin/products/new" className="bg-accent hover:bg-accent/90 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
          + 新增产品
        </Link>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-4 py-3 font-medium text-gray-600">产品名称</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">型号</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">分类</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">状态</th>
              <th className="text-right px-4 py-3 font-medium text-gray-600">操作</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-gray-400">暂无产品</td>
              </tr>
            ) : (
              products.map((p: any) => (
                <tr key={p.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-4 py-3 text-gray-500">{p.model}</td>
                  <td className="px-4 py-3 text-gray-500">{p.category}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                      p.published ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                    }`}>
                      {p.published ? "已发布" : "已隐藏"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/admin/products/${p.id}/edit`}
                      className="text-accent hover:underline text-sm"
                    >
                      编辑
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
