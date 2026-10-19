import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./i18n/request.ts")

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [480, 640, 768, 1024, 1280],
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "huahaoindustrial.com" }],
        destination: "https://hhseal.cn/:path*",
        permanent: true,
        basePath: false,
      },
    ]
  },
  experimental: {
    optimizePackageImports: ["next-intl"],
  },
  // 生产构建移除 console.log/debug/info（保留 error/warn）：
  // 减小 client bundle，同时避免运行时 console 输出触发 Lighthouse
  // 「控制台日志中已记录浏览器错误」类告警。
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
}

export default withNextIntl(nextConfig)
