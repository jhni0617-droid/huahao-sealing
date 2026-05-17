import Link from "next/link"
import { siteConfig, factoryHighlights } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-bold text-lg mb-4">{siteConfig.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{siteConfig.description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-gray-300 hover:text-white">Products</Link></li>
              <li><Link href="/applications" className="text-gray-300 hover:text-white">Applications</Link></li>
              <li><Link href="/cases" className="text-gray-300 hover:text-white">Case Studies</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product Lines</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/mechanical-seals" className="text-gray-300 hover:text-white">Mechanical Seals</Link></li>
              <li><Link href="/products/carbon-graphite-rings" className="text-gray-300 hover:text-white">Carbon Graphite Rings</Link></li>
              <li><Link href="/products/carbon-graphite-bearings" className="text-gray-300 hover:text-white">Graphite Bearings</Link></li>
              <li><Link href="/products/seal-rings" className="text-gray-300 hover:text-white">Seal Rings</Link></li>
              <li><Link href="/products/inlaid-graphite-rings" className="text-gray-300 hover:text-white">Inlaid Graphite Rings</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Email: {siteConfig.email}</p>
              <p>Phone: {siteConfig.phone}</p>
              <p>Address: {siteConfig.address}</p>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-accent text-white text-sm font-semibold rounded"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            {factoryHighlights.map((h) => (
              <div key={h.label} className="text-center">
                <div className="text-2xl font-bold text-accent">{h.value}</div>
                <div className="text-xs text-gray-400">{h.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
