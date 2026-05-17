import Image from "next/image"
import { manufacturingProcess } from "@/lib/constants"

export default function FactoryWorkshopSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-bold text-sm tracking-widest">生产制造</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            从原材料到成品，全程品质可控
          </h2>
          <p className="text-muted leading-relaxed">
            每一道工序都经过标准化作业、过程检测和数据记录，确保交付给客户的产品始终如一。
          </p>
        </div>

        {/* Factory image banner */}
        <div className="relative w-full aspect-[2.5/1] rounded-lg overflow-hidden border border-border mb-14">
          <Image
            src="/images/IMG_20260321_153130.jpg"
            alt="华豪密封车间实景 — 精密加工设备"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Capabilities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { label: "CNC加工中心", desc: "高精度自动化车铣，微米级公差控制", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
            { label: "材料检测实验室", desc: "每批次密度、硬度、成分自主分析", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
            { label: "浸渍处理车间", desc: "先进树脂及金属浸渍，可按需定制配方", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
            { label: "检验检测中心", desc: "三坐标测量仪、表面轮廓仪、压力试验台 — 100%全检", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
          ].map((cap) => (
            <div key={cap.label} className="border border-border rounded-lg p-5 bg-gray-50 hover:bg-white hover:border-accent/20 transition-all">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cap.icon} />
                </svg>
              </div>
              <h4 className="font-semibold text-sm">{cap.label}</h4>
              <p className="text-xs text-muted mt-1 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>

        {/* Manufacturing process timeline */}
        <div className="relative">
          <h3 className="text-xl font-bold text-primary text-center mb-10">生产工艺流程</h3>
          <div className="space-y-8">
            {manufacturingProcess.map((step, idx) => (
              <div key={step.step} className="relative flex gap-6">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  {idx < manufacturingProcess.length - 1 && (
                    <div className="w-0.5 flex-1 bg-accent/20 mt-2" />
                  )}
                </div>

                <div className="flex-1 pb-2">
                  <div className="card p-5">
                    <h4 className="font-bold text-primary mb-1">{step.title}</h4>
                    <p className="text-sm text-muted leading-relaxed mb-3">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((d) => (
                        <span key={d} className="text-xs bg-primary/5 border border-primary/10 px-2.5 py-1 rounded text-primary">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
