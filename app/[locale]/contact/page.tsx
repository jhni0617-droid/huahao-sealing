import { getLocale, getTranslations } from "next-intl/server"
import ContactForm from "@/components/ContactForm"
import ImageCarousel from "@/components/ui/ImageCarousel"
import Icon from "@/components/ui/Icon"
import { siteConfig, enSiteConfig } from "@/lib/constants"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import PageHero from "@/components/PageHero"

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations("contact")
  return generateMeta({
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    path: "/contact",
    locale,
  })
}

export default async function ContactPage(props: { searchParams?: Promise<{ product?: string }> }) {
  const searchParams = await props.searchParams
  const defaultProduct = searchParams?.product
  const locale = await getLocale()
  const t = await getTranslations("contact")
  const cfg = getLocalized({ zh: siteConfig, en: enSiteConfig }, locale)
  const altText = { zh: "华豪密封工厂实拍", en: "Huahao Sealing factory", vi: "Nhà máy Huahao Sealing", th: "โรงงาน Huahao Sealing", ru: "Завод Huahao Sealing", ja: "華豪シール工場", ko: "Huahao Sealing 공장" }
  const isZh = locale === "zh"

  return (
    <>
      <PageHero
        eyebrow={isZh ? "工程询盘" : "Engineering inquiry"}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        stats={[
          { value: "24h", label: isZh ? "响应" : "Response" },
          { value: "PDF/CAD", label: isZh ? "图纸支持" : "Drawing support" },
          { value: "OEM", label: isZh ? "定制加工" : "Custom machining" },
        ]}
      />

      <section className="section-padding industrial-surface">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="card-static p-6 bg-white">
                <h2 className="font-bold mb-4">{t("infoTitle")}</h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-muted text-xs tracking-wider mb-1">{t("emailLabel")}</div>
                    <a href={`mailto:${cfg.email}`} className="text-primary font-medium hover:underline">
                      {cfg.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-muted text-xs tracking-wider mb-1">{t("phoneLabel")}</div>
                    <p>{cfg.phone}</p>
                  </div>
                  <div>
                    <div className="text-muted text-xs tracking-wider mb-1">WhatsApp</div>
                    <a
                      href={`https://wa.me/${cfg.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      {cfg.whatsapp}
                    </a>
                  </div>
                  <div>
                    <div className="text-muted text-xs tracking-wider mb-1">{t("addressLabel")}</div>
                    <p>{cfg.address}</p>
                  </div>
                </div>
              </div>

              <div className="card-static p-6 bg-white">
                <h2 className="font-bold mb-3">{t("whyTitle")}</h2>
                <ul className="space-y-2 text-sm text-muted">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="check" className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {t(`reason${i}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <ImageCarousel
                images={[
                  { src: "/images/实拍/IMG_20260518_214858.jpg", alt: getLocalized(altText, locale) },
                  { src: "/images/实拍/IMG_20260518_215335.jpg", alt: getLocalized(altText, locale) },
                  { src: "/images/实拍/IMG_20260518_215353.jpg", alt: getLocalized(altText, locale) },
                  { src: "/images/实拍/file_00000000e47c7209a756fff4f4d29c2b.jpg", alt: getLocalized(altText, locale) },
                ]}
                aspectRatio="16/10"
                variant="solid"
                autoPlay
                interval={4000}
              />
            </div>

            <div className="lg:col-span-3">
              <div className="mb-6 border-l-2 border-accent pl-4">
                <h2 className="text-2xl font-bold text-primary">{t("formTitle")}</h2>
                <p className="text-sm text-muted mt-1">{t("formDesc")}</p>
              </div>
              <ContactForm defaultProduct={defaultProduct} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
