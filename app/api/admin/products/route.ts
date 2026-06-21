import { NextRequest, NextResponse } from "next/server"
import { getDb, dbAll, dbRun, dbGet } from "@/lib/admin/db"

export async function GET(request: NextRequest) {
  const db = await getDb()
  const { searchParams } = new URL(request.url)
  const search = searchParams.get("search") || ""

  let rows: any[]
  if (search) {
    rows = await dbAll("SELECT * FROM products WHERE name LIKE ? OR model LIKE ? OR category LIKE ? ORDER BY created_at DESC", [`%${search}%`, `%${search}%`, `%${search}%`]) as any[]
  } else {
    rows = await dbAll("SELECT * FROM products ORDER BY created_at DESC", []) as any[]
  }

  return NextResponse.json({ data: rows, total: rows.length })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const db = await getDb()

    await dbRun(`
      INSERT INTO products (slug, name, model, category, description, short_desc, specs, applications, materials, features, faq, image, pdf_url, published)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
    ])

    const product = await dbGet("SELECT * FROM products WHERE slug = ?", [body.slug])
    return NextResponse.json({ data: product }, { status: 201 })
  } catch (error: any) {
    console.error("Create product error:", error)
    return NextResponse.json({ error: error.message || "创建失败" }, { status: 500 })
  }
}
