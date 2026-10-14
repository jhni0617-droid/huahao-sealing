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
}

export default withNextIntl(nextConfig)
