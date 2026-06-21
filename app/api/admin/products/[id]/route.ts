import { NextRequest, NextResponse } from "next/server"
import { getDb, dbGet, dbRun } from "@/lib/admin/db"

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const db = await getDb()
  const product = await dbGet("SELECT * FROM products WHERE id = ?", [id]) as any
  if (!product) {
    return NextResponse.json({ error: "产品不存在" }, { status: 404 })
  }
  // Parse JSON fields
  product.specs = JSON.parse(product.specs || "[]")
  product.applications = JSON.parse(product.applications || "[]")
  product.materials = JSON.parse(product.materials || "[]")
  product.features = JSON.parse(product.features || "[]")
  product.faq = JSON.parse(product.faq || "[]")
  return NextResponse.json({ data: product })
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    const body = await request.json()
    const db = await getDb()

    await dbRun(`
      UPDATE products SET slug=?, name=?, model=?, category=?, description=?, short_desc=?,
        specs=?, applications=?, materials=?, features=?, faq=?, image=?, pdf_url=?, published=?,
        updated_at=datetime('now')
      WHERE id=?
    `, [
      body.slug,
      body.name,
      body.model || "",
      body.category || "",
      body.description || "",
      body.short_desc || "",
      JSON.stringify(body.specs || []),
      JSON.stringify(body.applications || []),
      JSON.stringify(body.materials || []),
      JSON.stringify(body.features || []),
      JSON.stringify(body.faq || []),
      body.image || null,
      body.pdf_url || null,
      body.published ?? 1,
      id,
    ])

    const product = await dbGet("SELECT * FROM products WHERE id = ?", [id])
    return NextResponse.json({ data: product })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "更新失败" }, { status: 500 })
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const db = await getDb()
  await dbRun("DELETE FROM products WHERE id = ?", [id])
  return NextResponse.json({ success: true })
}
