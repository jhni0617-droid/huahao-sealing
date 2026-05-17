import Link from "next/link"
import { siteConfig, factoryHighlights } from "@/lib/constants"

export default function HeroSection() {
  return (
    <section className="bg-hero-bg text-white relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(30deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff),
            linear-gradient(150deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff),
            linear-gradient(30deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff),
            linear-gradient(150deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff)
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }}
      />

      {/* Diagonal accent bar */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5"
        style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
      />

      <div className="container-wide relative z-10 py-20 md:py-0">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left content — 3/5 width */}
          <div className="lg:col-span-3">
            {/* Tag line */}
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              自润滑 · 耐高温 · 耐腐蚀 · 耐磨
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
              高品质碳石墨
              <br />
              <span className="text-accent">密封解决方案</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-10">
              {siteConfig.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-base group">
                获取报价
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold border-2 border-white/20 text-white rounded hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp咨询
              </a>
              <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-gray-400 hover:text-white transition-colors">
                查看产品
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right side — stats panel */}
          <div className="lg:col-span-2 lg:pl-8">
            <div className="space-y-4">
              {factoryHighlights.map((h, i) => (
                <div key={h.label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-accent">{h.value}</div>
                  <div className="text-sm text-gray-400 mt-0.5">{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs tracking-widest">向下滚动</span>
          <div className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
