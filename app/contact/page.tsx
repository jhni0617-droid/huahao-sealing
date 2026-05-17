import ContactForm from "@/components/ContactForm"
import { siteConfig } from "@/lib/constants"
import { generateMeta } from "@/lib/utils"

export const metadata = generateMeta({
  title: "Contact Us | Get a Quote",
  description: "Contact HuaHao Sealing for product inquiries, custom solutions, technical support, or partnership opportunities. We respond within 24 hours.",
  path: "/contact",
})

export default async function ContactPage(props: { searchParams?: Promise<{ product?: string }> }) {
  const searchParams = await props.searchParams
  const defaultProduct = searchParams?.product

  return (
    <>
      <section className="bg-hero-bg text-white">
        <div className="container-wide py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <div className="w-[60px] h-[3px] bg-accent mb-4" />
          <p className="text-gray-300 max-w-2xl">
            Get in touch for pricing, technical specifications, or custom manufacturing solutions.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-6">
                <h3 className="font-bold mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-muted text-xs uppercase tracking-wider mb-1">Email</div>
                    <a href={`mailto:${siteConfig.email}`} className="text-primary font-medium hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-muted text-xs uppercase tracking-wider mb-1">Phone</div>
                    <p>{siteConfig.phone}</p>
                  </div>
                  <div>
                    <div className="text-muted text-xs uppercase tracking-wider mb-1">WhatsApp</div>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      {siteConfig.whatsapp}
                    </a>
                  </div>
                  <div>
                    <div className="text-muted text-xs uppercase tracking-wider mb-1">Address</div>
                    <p>{siteConfig.address}</p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="font-bold mb-3">Why Choose HuaHao?</h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ISO 9001 certified quality management
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    20+ years of specialized expertise
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom engineering available
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Competitive pricing, fast delivery
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-primary">Send Inquiry</h2>
                <p className="text-sm text-muted mt-1">
                  Fill out the form and our team will respond within 24 hours.
                </p>
              </div>
              <ContactForm defaultProduct={defaultProduct} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
