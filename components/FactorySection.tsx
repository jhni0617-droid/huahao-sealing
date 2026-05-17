import Image from "next/image"

export default function FactorySection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">我们的工厂</h2>
            <div className="industrial-divider" />
            <p className="text-muted mt-4 leading-relaxed">
              拥有20多年专业化制造经验，我们的工厂采用先进的加工中心和精密检测设备生产碳石墨密封组件。每一件产品在出厂前都经过严格的质量控制。
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { label: "20+", sub: "年行业经验" },
                { label: "5000+", sub: "服务客户" },
                { label: "50+", sub: "出口国家" },
                { label: "ISO 9001", sub: "质量认证" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-border rounded p-4 text-center">
                  <div className="text-xl font-bold text-accent">{stat.label}</div>
                  <div className="text-xs text-muted mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { label: "CNC加工中心", desc: "高精度自动化加工" },
                { label: "材料实验室", desc: "自主材料检测与研发" },
                { label: "质量检测", desc: "100%尺寸与性能检测" },
                { label: "定制方案", desc: "工程支持特殊需求" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{item.label}</h4>
                    <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-border">
            <Image
              src="/images/IMG_20260321_153130.jpg"
              alt="华豪密封工厂车间 — CNC加工设备实景"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
