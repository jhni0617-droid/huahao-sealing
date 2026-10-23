import { NextRequest, NextResponse } from "next/server"
import { getCountryCodeByIp, extractClientIp } from "@/lib/ip-geolocation"

/**
 * 返回访客国家码，供客户端决定是否展示 Cookie 同意横幅。
 *
 * 为什么不直接在 layout 里读 x-vercel-ip-country：
 * App Router 的 layout 一旦调用 headers()，其下所有路由都会退化为按请求动态渲染，
 * 这个站靠静态化拿 PSI 分数，代价太大。改由客户端在空闲时打一次极轻的请求。
 *
 * 为什么不放 edge runtime：ip2region 兜底依赖 node:fs，只能跑 Node runtime。
 */

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  const vercelCountry = request.headers.get("x-vercel-ip-country")
  const cdnCountry = request.headers.get("x-country")
  const ipCountry = getCountryCodeByIp(extractClientIp(request.headers))

  // Vercel 官方头最可信；x-country 为其他 CDN 透传；ip2region 库偏旧，仅兜底
  const country = (vercelCountry || cdnCountry || ipCountry || "").toUpperCase() || null

  return NextResponse.json(
    { country },
    {
      headers: {
        // 每用户不同，禁止任何层级的缓存
        "cache-control": "private, no-store, max-age=0, must-revalidate",
      },
    },
  )
}
