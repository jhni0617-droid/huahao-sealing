import { manufacturingProcess } from "@/lib/constants"

export default function FactoryWorkshopSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-bold text-sm tracking-widest uppercase">Our Manufacturing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Factory & Production Workshop
          </h2>
          <p className="text-muted leading-relaxed">
            From raw material to finished product, every step is controlled, measured, and documented to ensure
            consistent quality across every batch.
          </p>
        </div>

        {/* Capabilities overview */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { label: "CNC Machining Centers", desc: "High-precision automated turning & milling with micron-level tolerances" },
            { label: "Material Testing Lab", desc: "In-house density, hardness, and chemical analysis for every batch" },
            { label: "Impregnation Workshop", desc: "Advanced resin & metal impregnation lines for customized properties" },
            { label: "Inspection Station", desc: "CMM, surface profilometer, pressure test rigs — 100% QC" },
          ].map((cap) => (
            <div key={cap.label} className="border border-border rounded-lg p-5 bg-gray-50">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-sm">{cap.label}</h4>
              <p className="text-xs text-muted mt-1 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>

        {/* Manufacturing process timeline */}
        <div className="relative">
          <h3 className="text-xl font-bold text-primary text-center mb-10">Manufacturing Process</h3>
          <div className="space-y-8">
            {manufacturingProcess.map((step, idx) => (
              <div key={step.step} className="relative flex gap-6">
                {/* Step number circle */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  {idx < manufacturingProcess.length - 1 && (
                    <div className="w-0.5 flex-1 bg-accent/20 mt-2" />
                  )}
                </div>

                {/* Content card */}
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

        {/* Quality assurance callout */}
        <div className="mt-12 p-6 md:p-8 bg-primary text-white rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">ISO 9001 Certified Quality Management</h3>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Every product is manufactured under a certified quality management system. From raw material
            traceability to final inspection records, complete documentation accompanies every shipment.
          </p>
        </div>
      </div>
    </section>
  )
}
