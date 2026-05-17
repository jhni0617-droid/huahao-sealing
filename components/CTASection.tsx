import Link from "next/link"
import { siteConfig } from "@/lib/constants"

interface CTAProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
}

export default function CTASection({ title, subtitle, primaryLabel, primaryHref }: CTAProps) {
  return (
    <section className="bg-hero-bg text-white">
      <div className="container-wide py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title || "准备好优化您的密封方案了吗？"}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle ||
            "联系我们的工程团队获取技术参数、定制方案或有竞争力的报价。我们将在24小时内回复。"}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={primaryHref || "/contact"} className="btn-primary text-base">
            {primaryLabel || "获取报价"}
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base border-white text-white hover:bg-white hover:text-primary"
          >
            WhatsApp咨询
          </a>
        </div>
      </div>
    </section>
  )
}
