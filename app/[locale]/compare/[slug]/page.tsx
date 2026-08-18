import { setRequestLocale } from "next-intl/server"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import {
  getComparisonBySlug,
  getAllComparisonSlugs,
} from "@/lib/compare-data"
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"
import FAQAccordion from "@/components/FAQAccordion"
import { Link } from "@/i18n/routing"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params
  const comparison = getComparisonBySlug(slug)
  if (!comparison) return {}
  const title = getLocalized(comparison.title, locale)
  const description = getLocalized(comparison.description, locale)
  return generateMeta({
    title,
    description,
    path: `/compare/${slug}`,
    locale,
  })
}

export default async function ComparePage({ params }: Props) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const comparison = getComparisonBySlug(slug)
  if (!comparison) notFound()

  const title = getLocalized(comparison.title, locale)
  const description = getLocalized(comparison.description, locale)
  const intro = getLocalized(comparison.intro, locale)
  const tableHeaders = getLocalized(comparison.tableHeaders, locale)
  const conclusion = getLocalized(comparison.conclusion, locale)
  const faqItems = getLocalized(comparison.faq, locale)

  const ui = getLocalized(
    {
      zh: {
        eyebrow: "材料对比",
        compareList: "对比列表",
        overview: "对比概览",
        tableTitle: "参数对比表",
        conclusion: "选型结论",
        faq: "常见问题",
        home: "首页",
        statParams: "对比参数",
        statMaterials: "材料对比",
        statData: "工程数据",
        primaryLabel: "获取选型建议",
        secondaryLabel: "查看产品",
      },
      en: {
        eyebrow: "Material Comparison",
        compareList: "Comparisons",
        overview: "Overview",
        tableTitle: "Parameter Comparison Table",
        conclusion: "Selection Conclusion",
        faq: "FAQ",
        home: "Home",
        statParams: "Parameters",
        statMaterials: "Materials",
        statData: "Engineering Data",
        primaryLabel: "Get Selection Advice",
        secondaryLabel: "View Products",
      },
      vi: {
        eyebrow: "So sánh vật liệu",
        compareList: "So sánh",
        overview: "Tổng quan",
        tableTitle: "Bảng so sánh thông số",
        conclusion: "Kết luận chọn",
        faq: "FAQ",
        home: "Trang chủ",
        statParams: "Thông số",
        statMaterials: "Vật liệu",
        statData: "Dữ liệu kỹ thuật",
        primaryLabel: "Nhận tư vấn chọn",
        secondaryLabel: "Xem sản phẩm",
      },
      th: {
        eyebrow: "เปรียบเทียบวัสดุ",
        compareList: "การเปรียบเทียบ",
        overview: "ภาพรวม",
        tableTitle: "ตารางเปรียบเทียบพารามิเตอร์",
        conclusion: "ข้อสรุปการเลือก",
        faq: "FAQ",
        home: "หน้าแรก",
        statParams: "พารามิเตอร์",
        statMaterials: "วัสดุ",
        statData: "ข้อมูลวิศวกรรม",
        primaryLabel: "รับคำแนะนำเลือก",
        secondaryLabel: "ดูสินค้า",
      },
      ru: {
        eyebrow: "Сравнение материалов",
        compareList: "Сравнения",
        overview: "Обзор",
        tableTitle: "Таблица сравнения параметров",
        conclusion: "Вывод по выбору",
        faq: "FAQ",
        home: "Главная",
        statParams: "Параметры",
        statMaterials: "Материалы",
        statData: "Инженерные данные",
        primaryLabel: "Получить консультацию",
        secondaryLabel: "Смотреть продукты",
      },
      ja: {
        eyebrow: "材料比較",
        compareList: "比較一覧",
        overview: "概要",
        tableTitle: "パラメータ比較表",
        conclusion: "選定結論",
        faq: "FAQ",
        home: "ホーム",
        statParams: "パラメータ",
        statMaterials: "材料",
        statData: "エンジニアリングデータ",
        primaryLabel: "選定アドバイスを取得",
        secondaryLabel: "製品を見る",
      },
      ko: {
        eyebrow: "재료 비교",
        compareList: "비교 목록",
        overview: "개요",
        tableTitle: "매개변수 비교표",
        conclusion: "선택 결론",
        faq: "FAQ",
        home: "홈",
        statParams: "매개변수",
        statMaterials: "재료",
        statData: "엔지니어링 데이터",
        primaryLabel: "선택 조언 받기",
        secondaryLabel: "제품 보기",
      },
    },
    locale
  )

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: ui.home, url: "" },
          { name: ui.compareList, url: "/compare" },
          { name: title, url: `/compare/${slug}` },
        ]}
      />
      <FaqJsonLd questions={faqItems.map((f) => ({ q: f.q, a: f.a }))} />

      <PageHero
        eyebrow={ui.eyebrow}
        title={title}
        subtitle={description}
        primaryLabel={ui.primaryLabel}
        secondaryLabel={ui.secondaryLabel}
        secondaryHref="/products"
        stats={[
          { value: String(comparison.rows.length), label: ui.statParams },
          { value: "2", label: ui.statMaterials },
          { value: "100%", label: ui.statData },
        ]}
      />

      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-border">
        <div className="container-wide py-4 text-sm text-muted">
          <Link href="/" className="hover:text-primary">
            {ui.home}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{ui.compareList}</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">{title}</span>
        </div>
      </section>

      {/* Intro + Table + Conclusion */}
      <section className="section-padding industrial-surface">
        <div className="container-wide max-w-5xl">
          <h2 className="text-2xl font-bold text-primary mb-4">{ui.overview}</h2>
          <p className="text-muted leading-relaxed mb-10">{intro}</p>

          {/* Comparison Table */}
          <div className="card-static bg-white p-2 md:p-4 mb-10 overflow-x-auto">
            <h3 className="text-xl font-bold text-primary m-4">{ui.tableTitle}</h3>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  {tableHeaders.map((h, i) => (
                    <th key={i} className="text-left p-3 bg-primary text-white whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, i) => {
                  const feature = getLocalized(row.feature, locale)
                  return (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-3 border-b font-medium text-primary whitespace-nowrap">
                        {feature}
                      </td>
                      {row.values.map((v, j) => (
                        <td key={j} className="p-3 border-b text-muted">
                          {v}
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Conclusion */}
          <div className="card-static bg-white p-6 md:p-8 border-l-4 border-accent">
            <h2 className="text-2xl font-bold text-primary mb-4">{ui.conclusion}</h2>
            <p className="text-muted leading-relaxed">{conclusion}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">{ui.faq}</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <FAQAccordion key={i} title={item.q}>
                <p className="text-sm text-muted leading-relaxed">{item.a}</p>
              </FAQAccordion>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}