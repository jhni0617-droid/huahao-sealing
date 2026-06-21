import { NextRequest, NextResponse } from "next/server"
import { getDb, dbAll, dbGet, dbRun } from "@/lib/admin/db"

export async function GET() {
  const rows = await dbAll("SELECT * FROM cases ORDER BY created_at DESC")
  return NextResponse.json({ data: rows })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const db = await getDb()

    const result = await dbRun(
      `INSERT INTO cases (title, company, condition, diagnosis, solution, result, published)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [body.title, body.company || "", body.condition || "", body.diagnosis || "", body.solution || "", body.result || "", body.published ?? 1],
    )

    const row = await dbGet("SELECT * FROM cases WHERE id = ?", [result.id])
    return NextResponse.json({ data: row }, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "创建失败" }, { status: 500 })
  }
}
