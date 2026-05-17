import Link from "next/link"
import { siteConfig, factoryHighlights } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-bold text-lg mb-4">{siteConfig.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{siteConfig.description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-gray-300 hover:text-white">产品中心</Link></li>
              <li><Link href="/applications" className="text-gray-300 hover:text-white">应用领域</Link></li>
              <li><Link href="/cases" className="text-gray-300 hover:text-white">案例中心</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">关于我们</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">联系我们</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">产品系列</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/mechanical-seals" className="text-gray-300 hover:text-white">机械密封</Link></li>
              <li><Link href="/products/carbon-graphite-rings" className="text-gray-300 hover:text-white">碳石墨环</Link></li>
              <li><Link href="/products/carbon-graphite-bearings" className="text-gray-300 hover:text-white">石墨轴承</Link></li>
              <li><Link href="/products/seal-rings" className="text-gray-300 hover:text-white">密封环</Link></li>
              <li><Link href="/products/inlaid-graphite-rings" className="text-gray-300 hover:text-white">镶嵌石墨环</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">联系方式</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>邮箱: {siteConfig.email}</p>
              <p>电话: {siteConfig.phone}</p>
              <p>地址: {siteConfig.address}</p>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-accent text-white text-sm font-semibold rounded"
            >
              WhatsApp咨询
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            {factoryHighlights.map((h) => (
              <div key={h.label} className="text-center">
                <div className="text-2xl font-bold text-accent">{h.value}</div>
                <div className="text-xs text-gray-400">{h.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {siteConfig.fullName}. 版权所有.
          </p>
        </div>
      </div>
    </footer>
  )
}
