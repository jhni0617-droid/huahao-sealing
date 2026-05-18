import ContactForm from "@/components/ContactForm"
import { siteConfig } from "@/lib/constants"
import { generateMeta } from "@/lib/utils"

export const metadata = generateMeta({
  title: "联系我们 | 获取报价",
  description: "联系华豪密封，获取产品咨询、定制方案、技术支持或合作机会。我们将在24小时内回复。",
  path: "/contact",
})

export default async function ContactPage(props: { searchParams?: Promise<{ product?: string }> }) {
  const searchParams = await props.searchParams
  const defaultProduct = searchParams?.product

  return (
    <>
      <section className="bg-hero-bg text-white">
        <div className="container-wide py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
          <div className="w-[60px] h-[3px] bg-accent mb-4" />
          <p className="text-gray-300 max-w-2xl">
            获取报价、技术参数或定制制造方案，请与我们取得联系。
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-6">
                <h2 className="font-bold mb-4">联系信息</h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-muted text-xs tracking-wider mb-1">邮箱</div>
                    <a href={`mailto:${siteConfig.email}`} className="text-primary font-medium hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-muted text-xs tracking-wider mb-1">电话</div>
                    <p>{siteConfig.phone}</p>
                  </div>
                  <div>
                    <div className="text-muted text-xs tracking-wider mb-1">WhatsApp</div>
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
                    <div className="text-muted text-xs tracking-wider mb-1">地址</div>
                    <p>{siteConfig.address}</p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h2 className="font-bold mb-3">为什么选择华豪？</h2>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    20+年专业制造经验
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    支持定制工程方案
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    有竞争力价格，快速交付
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    源头工厂，质量保障，价格实惠
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-primary">发送询价</h2>
                <p className="text-sm text-muted mt-1">
                  填写表单，我们的团队将在24小时内回复。
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
