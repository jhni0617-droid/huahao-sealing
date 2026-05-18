import { NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/admin/db"
import { signToken, COOKIE_NAME, TOKEN_EXPIRY, verifyPassword } from "@/lib/admin/auth"

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json({ error: "请输入用户名和密码" }, { status: 400 })
    }

    const db = getDb()
    const admin = db.prepare("SELECT * FROM admins WHERE username = ?").get(username) as any

    if (!admin) {
      return NextResponse.json({ error: "用户名或密码错误" }, { status: 401 })
    }

    const valid = await verifyPassword(password, admin.password_hash)
    if (!valid) {
      return NextResponse.json({ error: "用户名或密码错误" }, { status: 401 })
    }

    const token = await signToken({ sub: String(admin.id), username: admin.username })

    const response = NextResponse.json({
      data: { id: admin.id, username: admin.username, displayName: admin.display_name },
    })

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: TOKEN_EXPIRY,
      path: "/",
    })

    return response
  } catch (error: any) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "登录失败" }, { status: 500 })
  }
}
