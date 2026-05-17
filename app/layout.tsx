import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingCTA from "@/components/FloatingCTA"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "华豪密封 | 高品质碳石墨密封解决方案",
  description:
    "专业生产碳石墨密封件、机械密封、密封环。20+年行业经验，服务全球1000+客户，产品出口10+国家。",
  openGraph: {
    title: "华豪密封 | 碳石墨密封解决方案",
    description:
      "专业生产碳石墨密封件、机械密封、密封环。20+年行业经验。",
    type: "website",
    url: "https://huahaoindustrial.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
