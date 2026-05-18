import type { Metadata } from "next"
import LayoutShell from "@/components/LayoutShell"
import "./globals.css"

export const metadata: Metadata = {
  title: "华豪密封 | 高品质碳石墨密封解决方案",
  description:
    "专业生产碳石墨密封环、碳石墨轴套/轴承、碳石墨三瓣环。20+年行业经验，服务全球1000+客户，产品出口10+国家。",
  openGraph: {
    title: "华豪密封 | 碳石墨密封解决方案",
    description:
      "专业生产碳石墨密封环、碳石墨轴套/轴承、碳石墨三瓣环。20+年行业经验。",
    type: "website",
    url: "https://huahaoindustrial.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  )
}
