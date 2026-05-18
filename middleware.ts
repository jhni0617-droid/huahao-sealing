import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyToken, COOKIE_NAME } from "@/lib/admin/auth"
import createIntlMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

const intlMiddleware = createIntlMiddleware(routing)

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ── Admin routes: JWT auth ──
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    // Allow public admin paths
    if (pathname === "/admin/login" || pathname === "/api/admin/auth/login") {
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

  // ── Non-admin API routes: pass through ──
  if (pathname.startsWith("/api/")) {
    return NextResponse.next()
  }

  // ── All other routes: i18n routing (handles locale detection, cookie, redirect) ──
  return intlMiddleware(request)
}

export const config = {
  matcher: [
    // Match all routes except Next.js internals and static files with extensions
    "/((?!_next|_vercel|favicon.ico|.*\\..*).*)",
  ],
}
