import type { Metadata } from "next"
import { cookies } from "next/headers"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

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

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "zh"
  const isZh = locale === "zh"

  return {
    title: isZh ? "华豪密封 | 高品质碳石墨密封解决方案" : "Huahao Sealing | High-Quality Carbon Graphite Sealing Solutions",
    description: isZh
      ? "专业生产碳石墨密封环、碳石墨轴套/轴承、碳石墨三瓣环。服务全球1000+客户，产品出口15+国家。"
      : "Professional manufacturer of carbon graphite seal rings, bushings/bearings, and split rings. Serving 1,000+ global customers, exporting to 15+ countries.",
    openGraph: {
      title: isZh ? "华豪密封 | 碳石墨密封解决方案" : "Huahao Sealing | Carbon Graphite Sealing Solutions",
      description: isZh
        ? "专业生产碳石墨密封环、碳石墨轴套/轴承、碳石墨三瓣环。"
        : "Professional manufacturer of carbon graphite seal rings, bushings and bearings, and split rings.",
      type: "website",
      url: "https://huahaoindustrial.com",
      images: [{ url: "https://huahaoindustrial.com/images/logo.webp", width: 1200, height: 1200 }],
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies()
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "zh"

  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`h-full antialiased ${inter.variable} ${plusJakartaSans.variable} ${locale !== "zh" ? "locale-en" : ""}`}>
      <head>
        <link rel="preconnect" href="https://huahaoindustrial.com" />
        <link rel="dns-prefetch" href="//huahaoindustrial.com" />
        <meta name="theme-color" content="#071525" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  )
}
