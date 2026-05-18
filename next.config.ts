import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./i18n/request.ts")

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: __dirname,
  },
  experimental: {
    optimizePackageImports: ["next-intl", "@react-three/fiber", "three", "three-stdlib"],
  },
}

export default withNextIntl(nextConfig)
