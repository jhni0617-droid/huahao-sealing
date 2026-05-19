import type { Metadata } from "next"
import { cookies } from "next/headers"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/plus-jakarta-sans/500.css"
import "@fontsource/plus-jakarta-sans/600.css"
import "@fontsource/plus-jakarta-sans/700.css"
import "@fontsource/plus-jakarta-sans/800.css"
import "./globals.css"

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
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies()
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "zh"

  return (
    <html lang={locale} className={`h-full antialiased ${locale !== "zh" ? "locale-en" : ""}`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  )
}
