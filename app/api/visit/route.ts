import { NextRequest, NextResponse } from "next/server"
import { getDb, dbRun } from "@/lib/admin/db"

export async function POST(request: NextRequest) {
  try {
    const { path, locale } = await request.json()
    if (!path || typeof path !== "string") {
      return NextResponse.json({ error: "path required" }, { status: 400 })
    }

    const db = await getDb()
    await dbRun("INSERT INTO page_views (path, locale) VALUES (?, ?)", [path, locale || "zh"])

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: true })
  }
}
