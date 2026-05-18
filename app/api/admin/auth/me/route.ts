import { NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/admin/db"

export async function GET(request: NextRequest) {
  const adminId = request.headers.get("x-admin-id")

  if (!adminId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const db = getDb()
  const admin = db.prepare("SELECT id, username, display_name FROM admins WHERE id = ?").get(adminId) as any

  if (!admin) {
    return NextResponse.json({ error: "Admin not found" }, { status: 404 })
  }

  return NextResponse.json({ data: { id: admin.id, username: admin.username, displayName: admin.display_name } })
}
