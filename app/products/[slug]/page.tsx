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
                {product.pdfUrl && (
                  <a href={product.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold border border-primary/20 text-primary rounded-[10px] hover:bg-primary/5 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    下载数据表
                  </a>
                )}
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

              {product.commonSizes && product.commonSizes.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-primary mb-4">常用规格尺寸</h2>
                  <div className="card p-5">
                    <table className="w-full text-sm">
                      <tbody>
                        {product.commonSizes.map((s, i) => (
                          <tr key={i} className="border-b border-border last:border-0">
                            <td className="py-2.5 pr-4 text-muted font-medium w-32">{s.label}</td>
                            <td className="py-2.5 text-primary font-semibold">{s.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-muted mt-3">注：以上为常规尺寸范围，可按图纸定制任意非标尺寸。</p>
                  </div>
                </div>
              )}

              {product.installationNotes && product.installationNotes.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-primary mb-4">安装注意事项</h2>
                  <ul className="space-y-2">
                    {product.installationNotes.map((note, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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

              {product.category === "碳石墨密封环" && (
                <div className="card p-6 md:p-8 mt-6">
                  <h2 className="text-xl font-bold text-primary mb-4">普通石墨技术参数</h2>
                  <table className="spec-table">
                    <tbody>
                      <tr><td>抗压强度</td><td>92 MPa</td></tr>
                      <tr><td>碳含量</td><td>99.9%</td></tr>
                      <tr><td>抗折强度</td><td>38 MPa</td></tr>
                      <tr><td>肖氏硬度</td><td>78 HS</td></tr>
                      <tr><td>灰分</td><td>0.002%</td></tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted mt-3">以上为基础普通石墨（M106H）物理性能指标，不同浸渍工艺后性能会有所提升。</p>
                </div>
              )}

              <div className="card p-6 md:p-8 mt-6">
                <h2 className="text-xl font-bold text-primary mb-4">可选材料</h2>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((m) => (
                    <span key={m} className="px-3 py-1.5 bg-gray-50 border border-border rounded text-sm">{m}</span>
                  ))}
                </div>
              </div>

              {product.category === "碳石墨密封环" && (
                <div className="card p-6 md:p-8 mt-6">
                  <h2 className="text-xl font-bold text-primary mb-4">配对材质建议</h2>
                  <p className="text-sm text-muted mb-3">碳石墨密封环与以下对磨材质配合使用效果最佳：</p>
                  <div className="flex flex-wrap gap-2">
                    {(product.matingMaterials || ["碳化硅（SiC）", "碳化钨（WC）", "氧化铝陶瓷", "高铬不锈钢", "淬火工具钢", "氮化硅（Si₃N₄）"]).map((m) => (
                      <span key={m} className="px-3 py-1.5 bg-accent/5 border border-accent/20 text-accent rounded text-sm font-medium">{m}</span>
                    ))}
                  </div>
                  <p className="text-xs text-muted mt-3">推荐对磨面硬度 ≥ HRC 55，表面粗糙度 Ra ≤ 0.2 μm</p>
                </div>
              )}

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
