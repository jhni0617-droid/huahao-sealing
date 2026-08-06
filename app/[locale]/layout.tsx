import type { Metadata, Viewport } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { routing } from "@/i18n/routing"
import LayoutShell from "@/components/LayoutShell"
import { OrganizationJsonLd } from "@/components/JsonLd"
import { notFound } from "next/navigation"
import { siteConfig } from "@/lib/constants"
import AnalyticsScripts from "@/components/AnalyticsScripts"
import "../globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["500", "600", "700", "800"],
})

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
      ? "专业生产碳石墨密封环、碳石墨轴套/轴承、碳石墨三瓣环。服务全球1000+客户，产品出口15+国家。"
      : "Professional manufacturer of carbon graphite seal rings, bushings/bearings, and split rings. Serving 1,000+ global customers, exporting to 15+ countries.",
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
      locale: locale === "zh" ? "zh_CN" : locale === "ja" ? "ja_JP" : "en_US",
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
  }
}

export const viewport: Viewport = {
  themeColor: "#071525",
  width: "device-width",
  initialScale: 1,
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!routing.locales.includes(locale as any)) notFound()

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
    <html lang={locale} data-scroll-behavior="smooth" className={`h-full antialiased ${inter.variable} ${plusJakartaSans.variable} ${locale !== "zh" ? "locale-en" : ""}`}>
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
