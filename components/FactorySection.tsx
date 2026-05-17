export default function FactorySection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Factory</h2>
            <div className="industrial-divider" />
            <p className="text-muted mt-4 leading-relaxed">
              With over 20 years of specialized manufacturing experience, our factory produces carbon graphite sealing
              components using advanced machining centers and precision inspection equipment. Every product undergoes
              rigorous quality control before shipment.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { label: "CNC Machining Centers", desc: "High-precision automated machining" },
                { label: "Material Lab", desc: "In-house material testing & R&D" },
                { label: "Quality Inspection", desc: "100% dimensional & performance testing" },
                { label: "Custom Solutions", desc: "Engineering support for special requirements" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-sm">{item.label}</h4>
                  <p className="text-xs text-muted mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "20+", sub: "Years Experience" },
              { label: "5000+", sub: "Customers Served" },
              { label: "50+", sub: "Export Countries" },
              { label: "ISO 9001", sub: "Quality Certified" },
            ].map((stat) => (
              <div key={stat.label} className="card p-6 text-center">
                <div className="text-3xl font-bold text-accent">{stat.label}</div>
                <div className="text-sm text-muted mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
