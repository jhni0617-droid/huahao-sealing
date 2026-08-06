import type { Metadata } from "next"
import "../globals.css"
import AdminShell from "@/components/admin/AdminShell"

export const metadata: Metadata = {
  title: {
    default: "华豪密封管理后台",
    template: "%s | 华豪密封管理后台",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-full">
        <AdminShell>{children}</AdminShell>
      </body>
    </html>
  )
}
