import Link from "next/link"
import { applications } from "@/lib/constants"

const iconMap: Record<string, string> = {
  pump: "M3 12h2v-2H3v2zm16 0h2v-2h-2v2zM5 12l6-6v4h6v4h-6v4l-6-6z",
  ship: "M20 21v-2h-2v-2h-2v-2h-2V9h-2V7h-2V3l-2 4v2H4v4h2v4h2v2h2v2h10z",
  chem: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
  seal: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.25 3.15L17 12.23l-4-2.37z",
}

export default function ApplicationsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Industries We Serve</h2>
          <div className="industrial-divider mx-auto" />
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Our sealing solutions are trusted across a wide range of industrial sectors worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app) => (
            <Link
              key={app.slug}
              href={`/applications#${app.slug}`}
              className="card p-8 text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-5 bg-primary/5 rounded-lg flex items-center justify-center group-hover:bg-accent/5 transition-colors">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconMap[app.image]} />
                </svg>
              </div>
              <h3 className="font-bold mb-2">{app.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{app.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
