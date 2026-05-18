"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const navItems = [
  { href: "/admin", label: "仪表盘", icon: "📊" },
  { href: "/admin/products", label: "产品管理", icon: "📦" },
  { href: "/admin/inquiries", label: "询价记录", icon: "✉️" },
  { href: "/admin/cases", label: "案例管理", icon: "📋" },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/admin/auth/logout", { method: "POST" })
    router.push("/admin/login")
  }

  return (
    <aside className="w-56 bg-[#1B2838] text-white flex flex-col shrink-0">
      {/* Brand */}
      <div className="px-5 py-5 border-b border-white/10">
        <Link href="/admin" className="text-sm font-bold tracking-tight">
          华豪密封 <span className="text-accent font-normal text-[11px]">管理后台</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-accent/20 text-accent font-medium"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <span className="text-base">🚪</span>
          退出登录
        </button>
      </div>
    </aside>
  )
}
