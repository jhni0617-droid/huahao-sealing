import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import createIntlMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

const intlMiddleware = createIntlMiddleware(routing)

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ── API 路由统一放行（询盘表单、埋点） ──
  if (pathname.startsWith("/api/")) {
    return NextResponse.next()
  }

  // ── 其余路由：i18n（语种识别、cookie、重定向） ──
  return intlMiddleware(request)
}

export const config = {
  matcher: [
    // Match all routes except Next.js internals and static files with extensions
    "/((?!_next|_vercel|favicon.ico|.*\\..*).*)",
  ],
}
