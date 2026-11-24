import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./i18n/request.ts")

const nextConfig: NextConfig = {
  // 自托管（阿里云/任意 VPS）构建产物：.next/standalone 只含运行期必要文件，
  // 启动用 node .next/standalone/server.js，体积和内存都远小于整份 node_modules。
  output: "standalone",
  images: {
    // 阿里云单机：public/ 下 279 张图已全部预转 WebP（最大 364KB），
    // 关闭 /_next/image 按需转码，避免小机器 CPU 打满导致 502。
    unoptimized: true,
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
