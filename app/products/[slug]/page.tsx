import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { products, getProductBySlug } from "@/lib/products"
import CTASection from "@/components/CTASection"
import { generateMeta } from "@/lib/utils"
import { siteConfig } from "@/lib/constants"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return generateMeta({
    title: `${product.name} (${product.model}) | 华豪密封`,
    description: product.shortDesc,
    path: `/products/${slug}`,
  })
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  return (
    <>
      <section className="bg-gray-50 border-b border-border">
        <div className="container-wide py-4 text-sm text-muted">
          <Link href="/" className="hover:text-primary">首页</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary">产品中心</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">{product.category}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{product.name}</h1>
              <p className="text-lg text-muted mb-6">{product.model}</p>
              <p className="text-muted leading-relaxed mb-8">{product.description}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a href={`https://wa.me/${siteConfig.whatsapp}?text=Inquiry%20about%20${encodeURIComponent(product.name)}`}
                  target="_blank" rel="noopener noreferrer" className="btn-primary">
                  WhatsApp咨询
                </a>
                <Link href={`/contact?product=${product.slug}`} className="btn-secondary">
                  获取报价
                </Link>
              </div>

              <h2 className="text-xl font-bold text-primary mb-4">产品特点</h2>
              <ul className="space-y-2 mb-8">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {product.image && (
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-50 border border-border mb-8">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}
              <div className="card p-6 md:p-8">
                <h2 className="text-xl font-bold text-primary mb-6">技术参数</h2>
                <table className="spec-table">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr key={i}>
                        <td>{spec.label}</td>
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="card p-6 md:p-8 mt-6">
                <h2 className="text-xl font-bold text-primary mb-4">可选材料</h2>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((m) => (
                    <span key={m} className="px-3 py-1.5 bg-gray-50 border border-border rounded text-sm">{m}</span>
                  ))}
                </div>
              </div>

              <div className="card p-6 md:p-8 mt-6">
                <h2 className="text-xl font-bold text-primary mb-4">应用领域</h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span key={app} className="px-3 py-1.5 bg-accent/5 border border-accent/20 text-accent rounded text-sm font-medium">{app}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.faq.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-wide max-w-4xl">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">常见问题</h2>
            <div className="space-y-4">
              {product.faq.map((item, i) => (
                <details key={i} className="card p-5 [&[open]]:border-primary/20">
                  <summary className="font-semibold cursor-pointer">{item.q}</summary>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`对 ${product.name} 感兴趣？`}
        subtitle="联系我们获取报价、技术参数或定制制造需求。"
      />
    </>
  )
}
