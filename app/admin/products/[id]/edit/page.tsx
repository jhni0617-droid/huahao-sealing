import { getDb, dbGet } from "@/lib/admin/db"
import EditProductForm from "./EditProductForm"

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const db = await getDb()
  const product = await dbGet("SELECT * FROM products WHERE id = ?", [params.id]) as any

  if (!product) {
    return <div className="text-gray-500">产品不存在</div>
  }

  // Parse JSON fields
  product.specs = JSON.parse(product.specs || "[]")
  product.applications = JSON.parse(product.applications || "[]")
  product.materials = JSON.parse(product.materials || "[]")
  product.features = JSON.parse(product.features || "[]")
  product.faq = JSON.parse(product.faq || "[]")

  return <EditProductForm product={product} />
}
