import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { resourceLandings } from "@/lib/resources-data"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import CTASection from "@/components/CTASection"
import Breadcrumb from "@/components/Breadcrumb"
import PageHead from "@/components/ui/PageHead"
import Icon from "@/components/ui/Icon"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "resources" })
  return generateMeta({
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    path: "/resources",
    locale,
  })
}

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("resources")

  const hero = getLocalized({
    zh: { eyebrow: "技术资源" },
    en: { eyebrow: "Technical Resources" },
    vi: { eyebrow: "Tài nguyên kỹ thuật" },
    th: { eyebrow: "แหล่งข้อมูลเทคนิค" },
    ru: { eyebrow: "Технические ресурсы" },
    ja: { eyebrow: "技術リソース" },
    ko: { eyebrow: "기술 자료" },
  }, locale)

  return (
    <>
      <Breadcrumb items={[{ name: t("pageTitle"), url: "/resources" }]} locale={locale} />

      <PageHead en={hero.eyebrow} title={t("pageTitle")} description={t("heroSubtitle")} />

      <section className="section-padding-sm bg-white">
        <div className="container-wide">
          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {resourceLandings.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="group flex flex-col bg-white p-6 transition-colors hover:bg-[#fafafb]"
              >
                <Icon name="file-text" className="mb-4 h-5 w-5 text-accent" />
                <h2 className="font-serif-sc text-lg font-bold leading-tight text-primary transition-colors group-hover:text-accent">
                  {getLocalized(resource.title, locale)}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-4 flex-1">
                  {getLocalized(resource.description, locale)}
                </p>
                <div className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-semibold text-accent">
                  {getLocalized({ zh: "查看详情", en: "View details", vi: "Xem chi tiết", th: "ดูรายละเอียด", ru: "Подробнее", ja: "詳細を見る", ko: "상세 보기" }, locale)}
                  <Icon name="arrow-right" className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}

            {/* 下载中心入口：目录/手册/检测报告 */}
            <Link
              href="/download"
              className="group flex flex-col bg-white p-6 transition-colors hover:bg-[#fafafb]"
            >
              <Icon name="download" className="mb-4 h-5 w-5 text-accent" />
              <h2 className="font-serif-sc text-lg font-bold leading-tight text-primary transition-colors group-hover:text-accent">
                {getLocalized({ zh: "资料下载中心", en: "Downloads" }, locale)}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-4 flex-1">
                {getLocalized({
                  zh: "产品目录、技术手册、图纸模板与 M106D/M120K/M140K 材料检测报告，在线直下。",
                  en: "Product catalog, technical manual, drawing template, and M106D/M120K/M140K test reports — direct downloads.",
                }, locale)}
              </p>
              <div className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-semibold text-accent">
                {getLocalized({ zh: "前往下载", en: "Go to downloads", vi: "Tải xuống", th: "ดาวน์โหลด", ru: "Скачать", ja: "ダウンロード", ko: "다운로드" }, locale)}
                <Icon name="arrow-right" className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={getLocalized({
          zh: "找不到所需数据？联系工程师对接",
          en: "Don't see the data you need? Contact our engineers",
          vi: "Không thấy dữ liệu? Liên hệ kỹ sư",
          th: "ไม่เห็นข้อมูล? ติดต่อวิศวกร",
          ru: "Не нашли данные? Свяжитесь с инженерами",
          ja: "データがない？エンジニアにご相談を",
          ko: "데이터가 없나요? 엔지니어에게 문의",
        }, locale)}
        subtitle={getLocalized({
          zh: "提交工况参数，工程师提供个性化选型与耐蚀性数据。",
          en: "Submit duty parameters — engineers provide personalized selection and resistance data.",
          vi: "Gửi thông số — kỹ sư trả lời cá nhân hóa.",
          th: "ส่งพารามิเตอร์ — วิศวกรตอบเฉพาะ",
          ru: "Отправьте параметры — инженеры дадут персональные данные.",
          ja: "パラメータ送信 — エンジニアが個別回答。",
          ko: "파라미터 제출 — 엔지니어가 맞춤 답변.",
        }, locale)}
      />
    </>
  )
}
