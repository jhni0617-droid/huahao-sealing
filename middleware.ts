import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyToken, COOKIE_NAME } from "@/lib/admin/auth"

const publicPaths = ["/admin/login"]
const publicApiPaths = ["/api/admin/auth/login"]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow public paths
  if (publicPaths.some((p) => pathname === p) || publicApiPaths.some((p) => pathname === p)) {
    return NextResponse.next()
  }

  const token = request.cookies.get(COOKIE_NAME)?.value

  if (!token) {
    if (pathname.startsWith("/api/admin")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  try {
    const payload = await verifyToken(token)
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("x-admin-id", payload.sub)
    requestHeaders.set("x-admin-username", payload.username)
    return NextResponse.next({ request: { headers: requestHeaders } })
  } catch {
    if (pathname.startsWith("/api/admin")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    const res = NextResponse.redirect(new URL("/admin/login", request.url))
    res.cookies.delete(COOKIE_NAME)
    return res
  }
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
}
