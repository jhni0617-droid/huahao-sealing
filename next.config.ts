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
  experimental: {
    optimizePackageImports: ["next-intl"],
  },
}

export default withNextIntl(nextConfig)
