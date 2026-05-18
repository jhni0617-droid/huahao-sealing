import { NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/admin/db"

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const db = getDb()
  const row = db.prepare("SELECT * FROM cases WHERE id = ?").get(id)
  if (!row) return NextResponse.json({ error: "案例不存在" }, { status: 404 })
  return NextResponse.json({ data: row })
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    const body = await request.json()
    const db = getDb()
    db.prepare(`
      UPDATE cases SET title=?, company=?, condition=?, diagnosis=?, solution=?, result=?, published=?, updated_at=datetime('now')
      WHERE id=?
    `).run(body.title, body.company || "", body.condition || "", body.diagnosis || "", body.solution || "", body.result || "", body.published ?? 1, id)
    const row = db.prepare("SELECT * FROM cases WHERE id = ?").get(id)
    return NextResponse.json({ data: row })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "更新失败" }, { status: 500 })
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const db = getDb()
  db.prepare("DELETE FROM cases WHERE id = ?").run(id)
  return NextResponse.json({ success: true })
}
