import { siteConfig, enSiteConfig } from "./constants"
import { routing } from "@/i18n/routing"

export function generateMeta({
  title,
  description,
  path,
  locale,
  image,
}: {
  title: string
  description: string
  path?: string
  locale?: string
  image?: string
}) {
  const cfg = locale && locale !== "zh" ? enSiteConfig : siteConfig
  const ogImage = image || `${cfg.website}/images/og-banner.jpg`
  const fullTitle = `${title} | ${cfg.name}`
  // localePrefix: "always" —— 所有语言（含默认语言 en）的规范 URL 都带语言前缀，
  // 如 https://huahaoindustrial.com/en/about。无前缀 URL 会 307 重定向到带前缀版本，不能作为 canonical。
  const url = path
    ? locale
      ? `${cfg.website}/${locale}${path}`
      : `${cfg.website}${path}`
    : cfg.website

  // 页面级 alternates 会覆盖 layout 级的 alternates（Next.js 合并规则），
  // 因此这里必须为每个页面生成完整的 hreflang languages，否则子页面会丢失 hreflang。
  const languages = path
    ? Object.fromEntries(
        routing.locales.map((l) => [
          l === routing.defaultLocale ? "x-default" : l,
          `${cfg.website}/${l}${path}`,
        ]),
      )
    : undefined

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: cfg.name,
      type: "website" as const,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
  }
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ")
}
