import Link from "next/link"
import { siteConfig, factoryHighlights } from "@/lib/constants"

export default function HeroSection() {
  return (
    <section className="bg-hero-bg text-white relative overflow-hidden">
      {/* Urgency ribbon */}
      <div className="bg-accent/95 text-white text-center py-2.5 text-sm font-medium tracking-wide">
        免费工程技术咨询 — 24小时内获取定制报价方案
      </div>

      <div className="container-wide py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Pain-point opener */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-accent text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-6">
            阻止泄漏 · 减少停机 · 延长设备寿命
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            高品质碳石墨
            <br />
            <span className="text-accent">密封解决方案</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            {siteConfig.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary text-base">
              获取报价
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base border-white text-white hover:bg-white hover:text-primary"
            >
              WhatsApp咨询
            </a>
            <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-gray-300 hover:text-white transition-colors">
              查看产品
            </Link>
          </div>

          {/* Trust stats strip inline */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
            {factoryHighlights.map((h) => (
              <div key={h.label} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-accent">{h.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
