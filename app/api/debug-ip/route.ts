import { NextRequest, NextResponse } from "next/server"
import { getCountryCodeByIp, extractClientIp } from "@/lib/ip-geolocation"

export async function GET(request: NextRequest) {
  const ip = extractClientIp(request.headers)
  const ipCountry = getCountryCodeByIp(ip)

  const headers: Record<string, string> = {}
  const interestingHeaders = [
    "x-vercel-ip-country",
    "x-vercel-ip-city",
    "x-vercel-ip-timezone",
    "x-vercel-ip-latitude",
    "x-vercel-ip-longitude",
    "x-vercel-forwarded-for",
    "x-forwarded-for",
    "x-real-ip",
    "x-country",
    "cf-connecting-ip",
    "cf-ipcountry",
  ]
  for (const h of interestingHeaders) {
    const v = request.headers.get(h)
    if (v) headers[h] = v
  }

  return NextResponse.json({
    ip,
    ipCountry,
    headers,
    vercelCountry: request.headers.get("x-vercel-ip-country"),
    finalCountry: ipCountry || request.headers.get("x-vercel-ip-country") || request.headers.get("x-country") || null,
  })
}