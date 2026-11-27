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

  // ── 缺少语种前缀的旧地址：用 301 永久重定向到默认语种 ──
  // 之前交给 next-intl 处理会返回 307（临时），Google 不传递权重，
  // 旧 URL 会一直留在索引里跟规范 URL 抢排名（GSC「网页会自动重定向」29 条）。
  const hasLocalePrefix = routing.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )
  if (!hasLocalePrefix) {
    const url = request.nextUrl.clone()
    url.pathname = `/${routing.defaultLocale}${pathname === "/" ? "" : pathname}`
    return NextResponse.redirect(url, 301)
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
