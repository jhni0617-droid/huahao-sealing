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
  title: "HuaHao Sealing | Premium Carbon Graphite Sealing Solutions",
  description:
    "Professional manufacturer of carbon graphite seals, mechanical seals, and seal rings. 20+ years expertise serving 5000+ customers in 50+ countries.",
  openGraph: {
    title: "HuaHao Sealing | Carbon Graphite Sealing Solutions",
    description:
      "Professional manufacturer of carbon graphite seals, mechanical seals, and seal rings. ISO-certified quality.",
    type: "website",
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
