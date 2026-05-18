import { NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/admin/db"

export async function GET() {
  const db = getDb()
  const rows = db.prepare("SELECT * FROM cases ORDER BY created_at DESC").all()
  return NextResponse.json({ data: rows })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const db = getDb()

    db.prepare(`
      INSERT INTO cases (title, company, condition, diagnosis, solution, result, published)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(body.title, body.company || "", body.condition || "", body.diagnosis || "", body.solution || "", body.result || "", body.published ?? 1)

    const row = db.prepare("SELECT * FROM cases WHERE title = ?").get(body.title)
    return NextResponse.json({ data: row }, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "创建失败" }, { status: 500 })
  }
}
