import { siteConfig, enSiteConfig } from "./constants"
import { routing } from "@/i18n/routing"

export function generateMeta({
  title,
  description,
  path,
  locale,
}: {
  title: string
  description: string
  path?: string
  locale?: string
}) {
  const cfg = locale && locale !== "zh" ? enSiteConfig : siteConfig
  const fullTitle = `${title} | ${cfg.name}`
  const url = path ? `${cfg.website}${path}` : cfg.website

  // 页面级 alternates 会覆盖 layout 级的 alternates（Next.js 合并规则），
  // 因此这里必须为每个页面生成完整的 hreflang languages，否则子页面会丢失 hreflang。
  const languages = path
    ? Object.fromEntries(
        routing.locales.map((l) => [
          l === routing.defaultLocale ? "x-default" : l,
          l === routing.defaultLocale ? url : `${cfg.website}/${l}${path}`,
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
      images: [{ url: `${cfg.website}/images/og-banner.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description,
      images: [`${cfg.website}/images/og-banner.jpg`],
    },
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
  }
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ")
}
