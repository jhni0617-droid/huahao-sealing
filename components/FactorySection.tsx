import Image from "next/image"

export default function FactorySection() {
  return (
    <section className="bg-primary text-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="container-wide py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 order-2 lg:order-1">
            <Image
              src="/images/IMG_20260321_153130.jpg"
              alt="华豪密封工厂车间 — CNC加工设备实景"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">20年专注碳石墨密封制造</h2>
            <div className="w-[60px] h-[3px] bg-accent mb-6" />
            <p className="text-gray-300 leading-relaxed mb-8">
              拥有20多年专业化制造经验，我们的工厂采用先进的CNC加工中心和精密检测设备，
              每一件碳石墨密封组件在出厂前都经过严格的质量控制。
            </p>

            {/* Capabilities grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { label: "CNC加工中心", desc: "高精度自动化加工" },
                { label: "材料实验室", desc: "自主材料检测与研发" },
                { label: "质量检测", desc: "100%尺寸与性能检测" },
                { label: "定制方案", desc: "工程支持特殊需求" },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded p-4">
                  <h4 className="font-semibold text-sm text-accent">{item.label}</h4>
                  <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "20+", sub: "年行业经验" },
                { label: "1,000+", sub: "服务客户" },
                { label: "10+", sub: "出口国家" },
                { label: "200+", sub: "定制方案" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 bg-white/5 rounded border border-white/10">
                  <div className="text-xl font-bold text-accent">{stat.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
