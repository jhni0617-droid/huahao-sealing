export default function StatsSection() {
  const stats = [
    { value: "20+", label: "深耕行业经验" },
    { value: "1000+", label: "全球合作客户" },
    { value: "10+", label: "远销海外国家" },
    { value: "99.8%", label: "严苛出厂合格率" },
    { value: "30+", label: "专业生产设备" },
    { value: "3", label: "大标准化生产基地" },
    { value: "24h", label: "极速售后响应" },
    { value: "0", label: "重大质量售后事故" },
  ]

  const features = [
    {
      title: "一站式定制生产服务",
      desc: "来图来样，从原料到成品全程交付",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      title: "精细化品控全流程",
      desc: "从原料筛选到成品出库，层层把关",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      title: "资深技术工程师团队",
      desc: "专业方案设计，提供全面技术支持",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    },
    {
      title: "源头工厂直供价优",
      desc: "自有生产体系，去除中间环节",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
    {
      title: "多年外贸出口实力",
      desc: "产品远销欧美、东南亚等20国",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
  ]

  return (
    <section className="bg-primary text-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-wide py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-accent font-bold text-sm tracking-[0.15em]">核心实力</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3">
            华豪密封核心实力
          </h2>
          <div className="w-[60px] h-[3px] bg-accent mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            数字见证品质，服务赢得信赖
          </p>
        </div>

        {/* Stats grid — 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-14">
          {stats.map((s) => (
            <div
              key={s.value + s.label}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 md:p-6 text-center hover:bg-white/[0.06] hover:border-accent/30 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-accent/5 blur-2xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1 tabular-nums">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400 group-hover:text-white transition-colors">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-xs text-gray-500 tracking-[0.2em] uppercase">服务保障</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Features row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 text-center hover:bg-white/[0.06] hover:border-accent/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                </svg>
              </div>
              <h4 className="text-sm font-semibold mb-1">{f.title}</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
