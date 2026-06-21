import { NextRequest, NextResponse } from "next/server"
import { getDb, dbGet, dbRun } from "@/lib/admin/db"

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const inquiry = await dbGet("SELECT * FROM inquiries WHERE id = ?", [id])
  if (!inquiry) {
    return NextResponse.json({ error: "询价不存在" }, { status: 404 })
  }
  return NextResponse.json({ data: inquiry })
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const { status } = await request.json()
  const validStatuses = ["unread", "read", "replied", "archived"]

  if (!validStatuses.includes(status)) {
    return NextResponse.json({ error: "无效状态" }, { status: 400 })
  }

  await dbRun("UPDATE inquiries SET status=?, updated_at=datetime('now') WHERE id=?", [status, id])
  return NextResponse.json({ success: true })
}
