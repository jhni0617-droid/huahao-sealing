import type { Metadata, Viewport } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
// 字体自托管（fontsource，构建/加载不再依赖 Google Fonts 网络）
// Inter 支持拉丁+西里尔，作为英文正文与俄语兜底
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/plus-jakarta-sans/500.css"
import "@fontsource/plus-jakarta-sans/600.css"
import "@fontsource/plus-jakarta-sans/700.css"
import "@fontsource/plus-jakarta-sans/800.css"
import "@fontsource/bebas-neue/400.css"
import "@fontsource/playfair-display/500.css"
import "@fontsource/playfair-display/600.css"
import "@fontsource/playfair-display/700.css"
import "@fontsource/playfair-display/500-italic.css"
import "@fontsource/noto-serif-sc/500.css"
import "@fontsource/noto-serif-sc/600.css"
import "@fontsource/noto-serif-sc/700.css"
import "@fontsource/noto-serif-sc/900.css"
import { routing } from "@/i18n/routing"
import LayoutShell from "@/components/LayoutShell"
import { OrganizationJsonLd } from "@/components/JsonLd"
import { notFound } from "next/navigation"
import { siteConfig } from "@/lib/constants"
import AnalyticsScripts from "@/components/AnalyticsScripts"
import "../globals.css"

interface Props {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isZh = locale === "zh"
  const locales = routing.locales
  const defaultLocale = routing.defaultLocale
  // localePrefix: "always" —— 规范 URL 统一带语言前缀（含默认语言 en）：https://huahaoindustrial.com/en
  const canonicalUrl = `${siteConfig.website}/${locale}`

  return {
    metadataBase: new URL(siteConfig.website),
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
    },
    title: isZh
      ? "华豪密封 | 高品质碳石墨密封解决方案"
      : "Huahao Sealing | High-Quality Carbon Graphite Sealing Solutions",
    description: isZh
      ? "专业生产碳石墨密封环、碳石墨轴套/轴承、碳石墨三瓣环。服务全球1,000+客户，产品出口10+国家。"
      : "Professional manufacturer of carbon graphite seal rings, bushings/bearings, and split rings. Serving 1,000+ global customers, exporting to 10+ countries.",
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        locales.map((l) => [
          l === defaultLocale ? "x-default" : l,
          `${siteConfig.website}/${l}`,
        ]),
      ),
    },
    openGraph: {
      title: isZh ? "华豪密封 | 碳石墨密封解决方案" : "Huahao Sealing | Carbon Graphite Sealing Solutions",
      description: isZh
        ? "专业生产碳石墨密封环、碳石墨轴套/轴承、碳石墨三瓣环。"
        : "Professional manufacturer of carbon graphite seal rings, bushings and bearings, and split rings.",
      type: "website",
      url: canonicalUrl,
      locale: locale === "zh" ? "zh_CN" : locale === "ja" ? "ja_JP" : locale === "vi" ? "vi_VN" : locale === "th" ? "th_TH" : locale === "ru" ? "ru_RU" : locale === "ko" ? "ko_KR" : "en_US",
      siteName: "Huahao Sealing",
      images: [{ url: `${siteConfig.website}/images/og-banner.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: isZh ? "华豪密封 | 碳石墨密封解决方案" : "Huahao Sealing | Carbon Graphite Sealing Solutions",
      description: isZh
        ? "专业生产碳石墨密封环、碳石墨轴套/轴承、碳石墨三瓣环。"
        : "Professional manufacturer of carbon graphite seal rings, bushings and bearings, and split rings.",
      images: [`${siteConfig.website}/images/og-banner.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "content-language": locale,
    },
  }
}

export const viewport: Viewport = {
  themeColor: "#101215",
  width: "device-width",
  initialScale: 1,
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) notFound()

  // Enable static rendering for this locale's routes
  setRequestLocale(locale)

  const allMessages = await getMessages()

  // Only pass namespaces used by client-side components (Header, Hero, FloatingCTA, etc.)
  // Server components use getTranslations() directly and don't need client provider
  const clientMessages = {
    nav: allMessages.nav,
    common: allMessages.common,
    company: allMessages.company,
    home: allMessages.home,
    contact: allMessages.contact,
    failure: allMessages.failure,
    faq: allMessages.faq,
    products: allMessages.products,
    productDetail: allMessages.productDetail,
    errorPage: allMessages.errorPage,
  }

  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`h-full antialiased ${locale !== "zh" ? "locale-en" : ""}`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={clientMessages}>
          <OrganizationJsonLd locale={locale} />
          <LayoutShell>{children}</LayoutShell>
          <AnalyticsScripts />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
