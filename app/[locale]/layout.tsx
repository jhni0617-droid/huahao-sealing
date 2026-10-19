import type { Metadata, Viewport } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
// 字体自托管（fontsource，构建/加载不再依赖 Google Fonts 网络）。
// 按子集细粒度引入，砍掉用不到的 @font-face 声明（全量 import 每个字重 8+ 子集，
// 阻塞渲染的 CSS 从 ~15.5KB 砍到 ~6KB）：
//   Inter      → latin + vietnamese + cyrillic（en/vi/ru 正文；th/ja/ko/zh 系统兜底）
//   Jakarta    → latin + vietnamese（非 zh 标题；ru 标题回退 Inter 西里尔）
//   Bebas      → latin（display 英文）
//   Playfair   → latin（仅数字与单位符号）
// ⚠️ 不要引入 @fontsource/noto-serif-sc：4 字重 × 101 子集会占首页 CSS 约 89%，
// 而 zh 的 --font-serif-sc 本就走系统衬线兜底（Songti SC / STSong / SimSun）。
import "@fontsource/inter/latin-400.css"
import "@fontsource/inter/latin-500.css"
import "@fontsource/inter/latin-600.css"
import "@fontsource/inter/latin-700.css"
import "@fontsource/inter/vietnamese-400.css"
import "@fontsource/inter/vietnamese-500.css"
import "@fontsource/inter/vietnamese-700.css"
import "@fontsource/inter/cyrillic-400.css"
import "@fontsource/inter/cyrillic-500.css"
import "@fontsource/inter/cyrillic-700.css"
import "@fontsource/plus-jakarta-sans/latin-500.css"
import "@fontsource/plus-jakarta-sans/latin-600.css"
import "@fontsource/plus-jakarta-sans/latin-700.css"
import "@fontsource/plus-jakarta-sans/latin-800.css"
import "@fontsource/plus-jakarta-sans/vietnamese-500.css"
import "@fontsource/plus-jakarta-sans/vietnamese-700.css"
import "@fontsource/bebas-neue/latin-400.css"
import "@fontsource/playfair-display/latin-500.css"
import "@fontsource/playfair-display/latin-600.css"
import "@fontsource/playfair-display/latin-700.css"
import "@fontsource/playfair-display/latin-500-italic.css"
import { routing } from "@/i18n/routing"
import LayoutShell from "@/components/LayoutShell"
import { OrganizationJsonLd } from "@/components/JsonLd"
import { notFound } from "next/navigation"
import { siteConfig } from "@/lib/constants"
import AnalyticsScripts from "@/components/AnalyticsScripts"
import WebVitalsReporter from "@/components/WebVitalsReporter"
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
  // localePrefix: "always" —— 规范 URL 统一带语言前缀（含默认语言 en）：https://hhseal.cn/en
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
          <WebVitalsReporter />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
