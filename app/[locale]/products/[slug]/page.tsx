import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { notFound } from "next/navigation"
import { products } from "@/lib/products"
import { productsByLocale } from "@/lib/translations-products"
import CTASection from "@/components/CTASection"
import FAQAccordion from "@/components/FAQAccordion"
import SpecBadge from "@/components/ui/SpecBadge"
import Icon from "@/components/ui/Icon"
import { ProductJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd"
import { generateMeta } from "@/lib/utils"
import { siteConfig } from "@/lib/constants"
import { getLocalized, getLocalizedProductCategory } from "@/lib/locale-data"

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params
  const product = (productsByLocale[locale] || productsByLocale.en).find((p) => p.slug === slug)
  if (!product) return {}
  return generateMeta({
    title: `${product.name} (${product.model})`,
    description: product.shortDesc,
    path: `/products/${slug}`,
    locale,
    image: product.image ? `${siteConfig.website}${product.image}` : undefined,
  })
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const product = (productsByLocale[locale] || productsByLocale.en).find((p) => p.slug === slug)
  if (!product) notFound()

  const t = await getTranslations("productDetail")
  const tnav = await getTranslations("nav")

  const getSpecValue = (label: string) =>
    product.specs.find((s) => s.label === label)?.value || ""

  const isSealRing = product.category === "碳石墨密封环" || product.category === "Seal Rings"
  const displayCategory = getLocalizedProductCategory(product.category, locale)
  const defaultMating = getLocalized({
    zh: ["碳化硅（SiC）", "碳化钨（WC）", "氧化铝陶瓷", "高铬不锈钢"],
    en: ["Silicon Carbide (SiC)", "Tungsten Carbide (WC)", "Alumina Ceramic", "High-Chrome Stainless Steel"],
    vi: ["Cacbua Silic (SiC)", "Cacbua Vonfram (WC)", "Gốm Alumina", "Thép không gỉ Crom cao"],
    th: ["ซิลิคอนคาร์ไบด์ (SiC)", "ทังสเตนคาร์ไบด์ (WC)", "เซรามิกอะลูมินา", "สแตนเลสโครเมียมสูง"],
    ru: ["Карбид кремния (SiC)", "Карбид вольфрама (WC)", "Глиноземная керамика", "Высокохромистая нержавеющая сталь"],
    ja: ["炭化ケイ素 (SiC)", "炭化タングステン (WC)", "アルミナセラミック", "高クロムステンレス鋼"],
    ko: ["탄화규소 (SiC)", "탄화텅스텐 (WC)", "알루미나 세라믹", "고크롬 스테인리스강"],
  }, locale)

  return (
    <>
      <BreadcrumbJsonLd locale={locale} items={[
        { name: tnav("home"), url: "" },
        { name: tnav("products"), url: "/products" },
        { name: product.name, url: `/products/${slug}` },
      ]} />
      <ProductJsonLd
        name={product.name}
        model={product.model}
        description={product.description}
        image={product.image}
                category={displayCategory}
        locale={locale}
      />

      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-border">
        <div className="container-wide py-4 text-sm text-muted">
          <Link href="/" className="hover:text-primary">{tnav("home")}</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary">{tnav("products")}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Product Info */}
            <div>
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">{displayCategory}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{product.name}</h1>
              <p className="text-lg text-muted mb-4">{product.model}</p>

              {/* Spec badges strip */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(() => {
                  const temp = getSpecValue("温度范围") || getSpecValue("Temperature")
                  const pressure = getSpecValue("压力") || getSpecValue("Pressure")
                  const speed = getSpecValue("转速") || getSpecValue("Speed")
                  return (
                    <>
                      {temp && <SpecBadge icon="thermometer" label={t("specTemp")} value={temp} />}
                      {pressure && <SpecBadge icon="gear" label={t("specPressure")} value={pressure} />}
                      {speed && <SpecBadge icon="clock" label={t("specSpeed")} value={speed} />}
                    </>
                  )
                })()}
              </div>

              <p className="text-muted leading-relaxed mb-8">{product.description}</p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Inquiry%20about%20${encodeURIComponent(product.name)}`}
                  target="_blank" rel="noopener noreferrer" className="btn-primary"
                >
                  {t("whatsapp")}
                </a>
                <Link href={`/contact?product=${product.slug}`} className="btn-secondary">
                  {t("getQuote")}
                </Link>
                {product.pdfUrl && (
                  <a href={product.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold border border-primary/20 text-primary rounded-[10px] hover:bg-primary/5 transition-all">
                    <Icon name="download" className="w-4 h-4" />
                    {t("downloadPdf")}
                  </a>
                )}
              </div>

              {/* Features */}
              <h2 className="text-xl font-bold text-primary mb-4">{t("features")}</h2>
              <ul className="space-y-2 mb-8">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Icon name="check" className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Common Sizes */}
              {product.commonSizes && product.commonSizes.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-primary mb-4">{t("commonSizes")}</h2>
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
                    <p className="text-xs text-muted mt-3">
                      {t("commonSizesNote")}
                    </p>
                  </div>
                </div>
              )}

              {/* Installation Notes */}
              {product.installationNotes && product.installationNotes.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-primary mb-4">{t("installationNotes")}</h2>
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

            {/* Right: Image + Sidebar */}
            <div>
              {product.image && (
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 border border-border mb-6 shadow-sm">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              )}

              {/* Technical Parameters */}
              <div className="card p-6 md:p-8">
                <h2 className="text-xl font-bold text-primary mb-6">{t("technicalParams")}</h2>
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr key={i} className="border-b border-border last:border-0">
                        <td className="py-3 pr-4 text-muted font-medium w-36">{spec.label}</td>
                        <td className="py-3 text-primary font-semibold">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Graphite Technical Data (for seal rings) */}
              {isSealRing && (
                <div className="card p-6 md:p-8 mt-6">
                  <h2 className="text-xl font-bold text-primary mb-4">{t("graphiteParams")}</h2>
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-border"><td className="py-2.5 text-muted">{getLocalized({ zh: "抗压强度", en: "Compressive Strength", vi: "Cường độ nén", th: "กำลังอัด", ru: "Прочность на сжатие", ja: "圧縮強さ", ko: "압축 강도" }, locale)}</td><td className="py-2.5 text-primary font-semibold">92 MPa</td></tr>
                      <tr className="border-b border-border"><td className="py-2.5 text-muted">{getLocalized({ zh: "碳含量", en: "Carbon Content", vi: "Hàm lượng Carbon", th: "ปริมาณคาร์บอน", ru: "Содержание углерода", ja: "炭素含有量", ko: "탄소 함량" }, locale)}</td><td className="py-2.5 text-primary font-semibold">99.9%</td></tr>
                      <tr className="border-b border-border"><td className="py-2.5 text-muted">{getLocalized({ zh: "抗折强度", en: "Flexural Strength", vi: "Cường độ uốn", th: "กำลังดัด", ru: "Прочность на изгиб", ja: "曲げ強さ", ko: "굽힘 강도" }, locale)}</td><td className="py-2.5 text-primary font-semibold">38 MPa</td></tr>
                      <tr className="border-b border-border"><td className="py-2.5 text-muted">{getLocalized({ zh: "肖氏硬度", en: "Shore Hardness", vi: "Độ cứng Shore", th: "ความแข็งโชร์", ru: "Твердость по Шору", ja: "ショア硬度", ko: "쇼어 경도" }, locale)}</td><td className="py-2.5 text-primary font-semibold">78 HS</td></tr>
                      <tr><td className="py-2.5 text-muted">{getLocalized({ zh: "灰分", en: "Ash Content", vi: "Hàm lượng tro", th: "ปริมาณเถ้า", ru: "Зольность", ja: "灰分", ko: "회분" }, locale)}</td><td className="py-2.5 text-primary font-semibold">0.002%</td></tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted mt-3">
                    {t("graphiteParamsNote")}
                  </p>
                </div>
              )}

              {/* Available Materials */}
              <div className="card p-6 md:p-8 mt-6">
                <h2 className="text-xl font-bold text-primary mb-4">{t("materials")}</h2>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((m) => (
                    <span key={m} className="px-3 py-1.5 bg-gray-50 border border-border rounded text-sm">{m}</span>
                  ))}
                </div>
              </div>

              {/* Mating Materials (for seal rings) */}
              {isSealRing && (
                <div className="card p-6 md:p-8 mt-6">
                  <h2 className="text-xl font-bold text-primary mb-4">{t("matingMaterials")}</h2>
                  <p className="text-sm text-muted mb-3">
                    {t("matingMaterialsDesc")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(product.matingMaterials || defaultMating).map((m) => (
                      <span key={m} className="px-3 py-1.5 bg-accent/5 border border-accent/20 text-accent rounded text-sm font-medium">{m}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              <div className="card p-6 md:p-8 mt-6">
                <h2 className="text-xl font-bold text-primary mb-4">{t("applications")}</h2>
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

      {/* FAQ */}
      {product.faq.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-wide max-w-4xl">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">{t("faq")}</h2>
            <div className="space-y-4">
              {product.faq.map((item, i) => (
                <FAQAccordion key={i} title={item.q}>
                  <p className="text-sm text-muted leading-relaxed">{item.a}</p>
                </FAQAccordion>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={t("ctaTitle", { product: product.name })}
        subtitle={t("ctaSubtitle")}
      />
    </>
  )
}
