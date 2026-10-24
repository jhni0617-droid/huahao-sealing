import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { getLocalizedProductCategory } from "@/lib/locale-data"
import type { ProductsPageData } from "@/lib/products-page-data"
import type { Product } from "@/lib/products"
import CTASection from "@/components/CTASection"
import VideoGallery from "@/components/VideoGallery"
import ProductGallery from "@/components/ProductGallery"
import Icon from "@/components/ui/Icon"
import ProductsFilters from "./products-filters"

const localizedCopy = {
  zh: {
    overline: "工业产品目录",
    intro:
      "按产品线、型号或应用场景快速筛选。若工况涉及高温、腐蚀、干运转或非标尺寸，请直接提交图纸和运行参数。",
    search: "搜索型号、产品名称、应用或材料，例如 108、轴套、泵、SiC",
    drawing: "发送图纸 / 询价",
    applications: "查看应用工况",
    reference: "规格为选型参考，最终材料牌号按介质、温度、压力和转速确认。",
    guides: "按类别浏览选型指南：",
    view: "查看详情",
    noImage: "定制石墨零部件",
    emptyHint: "换一个关键词，或直接发送工况让工程师匹配型号。",
  },
  en: {
    overline: "Industrial product directory",
    intro:
      "Filter by product line, model, or application. For high temperature, corrosion, dry running, or non-standard dimensions, send drawings and duty conditions directly.",
    search: "Search model, product, application, or material, e.g. 108, bushing, pump, SiC",
    drawing: "Send Drawing / Quote",
    applications: "View Applications",
    reference: "Specifications are for selection reference. Final grade depends on media, temperature, pressure, and speed.",
    guides: "Browse by category:",
    view: "View Details",
    noImage: "Custom graphite component",
    emptyHint: "Try another keyword or send duty conditions for engineering selection.",
  },
  vi: {
    overline: "Danh mục sản phẩm công nghiệp",
    intro: "Lọc nhanh theo dòng sản phẩm, model hoặc ứng dụng. Với nhiệt độ cao, ăn mòn, chạy khô hoặc kích thước phi tiêu chuẩn, hãy gửi bản vẽ và điều kiện vận hành.",
    search: "Tìm model, sản phẩm, ứng dụng hoặc vật liệu, ví dụ 108, bạc lót, bơm, SiC",
    drawing: "Gửi bản vẽ / báo giá",
    applications: "Xem điều kiện ứng dụng",
    reference: "Thông số chỉ để tham khảo chọn mẫu. Cấp vật liệu cuối cùng phụ thuộc vào môi trường, nhiệt độ, áp suất và tốc độ.",
    guides: "Xem theo nhóm:",
    view: "Xem chi tiết",
    noImage: "Linh kiện than chì tùy chỉnh",
    emptyHint: "Thử từ khóa khác hoặc gửi điều kiện vận hành để kỹ sư chọn mẫu.",
  },
  th: {
    overline: "แคตตาล็อกสินค้าอุตสาหกรรม",
    intro: "กรองตามกลุ่มสินค้า รุ่น หรือการใช้งานได้รวดเร็ว หากมีอุณหภูมิสูง การกัดกร่อน การทำงานแห้ง หรือขนาดพิเศษ กรุณาส่งแบบและสภาวะการทำงาน",
    search: "ค้นหารุ่น สินค้า การใช้งาน หรือวัสดุ เช่น 108, บูช, ปั๊ม, SiC",
    drawing: "ส่งแบบ / ขอราคา",
    applications: "ดูสภาวะการใช้งาน",
    reference: "ข้อมูลสเปกใช้เพื่ออ้างอิงการเลือก รุ่นวัสดุสุดท้ายขึ้นอยู่กับตัวกลาง อุณหภูมิ แรงดัน และความเร็ว",
    guides: "ดูตามหมวด:",
    view: "ดูรายละเอียด",
    noImage: "ชิ้นส่วนกราไฟต์แบบกำหนดเอง",
    emptyHint: "ลองคำค้นอื่น หรือส่งสภาวะให้วิศวกรช่วยเลือกรุ่น",
  },
  ru: {
    overline: "Промышленный каталог",
    intro: "Фильтруйте по линейке, модели или применению. Для высоких температур, коррозии, сухого хода или нестандартных размеров отправьте чертежи и условия работы.",
    search: "Поиск модели, изделия, применения или материала, например 108, втулка, насос, SiC",
    drawing: "Отправить чертеж / запрос",
    applications: "Смотреть условия применения",
    reference: "Характеристики справочные. Итоговая марка зависит от среды, температуры, давления и скорости.",
    guides: "Выбор по категориям:",
    view: "Подробнее",
    noImage: "Графитовая деталь на заказ",
    emptyHint: "Попробуйте другой запрос или отправьте условия работы для подбора.",
  },
  ja: {
    overline: "産業製品カタログ",
    intro: "製品ライン、型番、用途で素早く絞り込み。高温、腐食、ドライ運転、非標準寸法の場合は図面と運転条件を送付してください。",
    search: "型番、製品、用途、材料を検索 例: 108、ブッシング、ポンプ、SiC",
    drawing: "図面送付 / 見積依頼",
    applications: "用途条件を見る",
    reference: "仕様は選定参考です。最終材料グレードは媒体、温度、圧力、速度で確認します。",
    guides: "カテゴリ別に見る：",
    view: "詳細を見る",
    noImage: "カスタムグラファイト部品",
    emptyHint: "別のキーワードを試すか、運転条件を送って選定相談してください。",
  },
  ko: {
    overline: "산업 제품 카탈로그",
    intro: "제품군, 모델 또는 응용 분야별로 빠르게 필터링하세요. 고온, 부식, 건식 운전 또는 비표준 치수는 도면과 운전 조건을 보내주세요.",
    search: "모델, 제품, 응용 또는 재료 검색 예: 108, 부싱, 펌프, SiC",
    drawing: "도면 / 견적 보내기",
    applications: "응용 조건 보기",
    reference: "사양은 선정 참고용입니다. 최종 재료 등급은 매체, 온도, 압력, 속도에 따라 확정됩니다.",
    guides: "카테고리별 보기:",
    view: "상세 보기",
    noImage: "맞춤형 그라파이트 부품",
    emptyHint: "다른 키워드를 시도하거나 운전 조건을 보내 선정 상담을 받으세요.",
  },
}

const specLabelSets = {
  temp: ["温度范围", "Temperature", "Nhiệt độ", "อุณหภูมิ", "Температура", "温度", "온도"],
  pressure: ["压力", "压力范围", "轴向载荷", "Pressure", "Áp suất", "แรงดัน", "Давление", "압력"],
  speed: ["转速", "Speed", "Tốc độ", "ความเร็ว", "Скорость", "速度", "속도"],
}

function getCopy(locale: string) {
  return localizedCopy[(locale as keyof typeof localizedCopy)] ?? localizedCopy.en
}

function getSpec(product: Product, labels: string[]) {
  return product.specs.find((s) => labels.includes(s.label))
}

function ProductCard({ product, locale, cats }: { product: Product; locale: string; cats: string[] }) {
  const copy = getCopy(locale)
  const tempSpec = getSpec(product, specLabelSets.temp)
  const pressureSpec = getSpec(product, specLabelSets.pressure)
  const speedSpec = getSpec(product, specLabelSets.speed)
  const specLine = [tempSpec?.value, pressureSpec?.value, speedSpec?.value].filter(Boolean)

  return (
    <Link
      href={`/products/${product.slug}`}
      data-product-slug={product.slug}
      data-cats={cats.join(" ")}
      className="group flex h-full min-w-0 flex-col border-r border-b border-border bg-white transition-colors duration-300 focus-ring hover:bg-[#fafafb]"
    >
      <div className="relative aspect-square overflow-hidden border-b border-border bg-[#f0f1f2]">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.04] sm:p-5"
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold tracking-[0.08em] text-muted">
            {copy.noImage}
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-3 sm:p-4">
        <div className="flex items-baseline justify-between gap-3">
          <span className="min-w-0 flex-1 truncate whitespace-nowrap font-mono text-sm font-bold tracking-tight text-primary sm:text-base" title={product.model}>{product.model}</span>
          <span className="hidden max-w-[45%] shrink-0 truncate text-[10px] font-semibold uppercase tracking-[0.06em] text-muted 2xl:block">
            {getLocalizedProductCategory(product.category, locale)}
          </span>
        </div>

        <h3 className="mt-1.5 font-serif-sc text-sm font-bold leading-snug text-primary transition-colors group-hover:text-accent line-clamp-2">
          {product.name}
        </h3>

        {specLine.length > 0 && (
          <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-muted" title={specLine.join(" · ")}>
            {specLine.join(" · ")}
          </p>
        )}

        <div className="mt-auto flex items-center gap-2 pt-5 text-xs font-semibold text-accent">
          {copy.view}
          <Icon name="arrow-right" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

/**
 * 产品目录页主体（服务端组件）。
 *
 * 关键约束：**全部**产品卡片都在这里渲染进 HTML，分类与搜索只是客户端对已渲染卡片的显隐。
 * 改造前整个目录在客户端组件里，靠 useSearchParams + <Suspense> 才渲染，
 * 静态路由下服务端只吐骨架，/products 交付的 HTML 里一条产品链接都没有。
 */
export default async function ProductsPageContent({
  locale,
  categories,
  allProducts,
  productsByCategory,
  categoryGuides,
  searchIndex,
}: ProductsPageData) {
  const t = await getTranslations({ locale, namespace: "products" })
  const copy = getCopy(locale)

  // 反向索引：产品 slug → 所属分类 slug 列表，供客户端按分类隐藏卡片
  const catsByProduct: Record<string, string[]> = {}
  for (const [catSlug, list] of Object.entries(productsByCategory)) {
    for (const product of list) {
      if (!catsByProduct[product.slug]) catsByProduct[product.slug] = []
      catsByProduct[product.slug].push(catSlug)
    }
  }

  const categoryTabs = categories.map((cat) => ({
    slug: cat.slug,
    name: cat.name,
    count: (productsByCategory[cat.slug] ?? []).length,
  }))

  return (
    <>
      <section className="border-b border-border bg-white">
        <div className="container-wide py-10 md:py-14">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-accent" aria-hidden />
              <span className="en-caption text-sm text-muted">{copy.overline}</span>
            </div>
            <h1 className="font-serif-sc text-3xl font-bold leading-tight text-primary md:text-4xl">
              {t("pageTitle")}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted">{copy.intro}</p>
          </div>

          <ProductsFilters
            categoryTabs={categoryTabs}
            allLabel={t("all")}
            allCount={allProducts.length}
            searchPlaceholder={copy.search}
            drawingLabel={copy.drawing}
            applicationsLabel={copy.applications}
            referenceNote={copy.reference}
            searchIndex={searchIndex}
          />

          {/* 类别落地页入口：/products 与各 /products/{类别} 之间的父子内链 */}
          {categoryGuides.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{copy.guides}</span>
              {categoryGuides.map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="inline-flex items-center gap-1.5 border border-primary/20 bg-white px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  {g.name}
                  <Icon name="arrow-right" className="h-3 w-3" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 这里刻意不用 section-padding：它自带 1.25rem 水平内边距，与内层 container-wide
          的 1.25rem 叠加成 40px，比上方标题区（只靠 container-wide 的 20px）多缩进一截，
          移动端两列时每张卡片会被挤到 147px。改成只给垂直内边距，水平留白交给 container-wide。 */}
      <section className="industrial-surface py-[4.5rem] md:py-24 lg:py-[7.5rem]">
        <div className="container-wide">
          <div id="products-empty" style={{ display: "none" }} className="border border-border bg-white px-6 py-16 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-border bg-background text-accent">
              <Icon name="search" className="h-5 w-5" />
            </div>
            <div className="font-bold text-primary">{t("empty")}</div>
            <p className="mt-2 text-sm text-muted">{copy.emptyHint}</p>
          </div>

          {/* 发丝线网格：用单元格边框而非 gap-px 底色，避免最后一行不满时露出灰块 */}
          <div id="products-grid" className="mt-12 grid grid-cols-2 border-l border-t border-border lg:grid-cols-4">
            {allProducts.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                locale={locale}
                cats={catsByProduct[product.slug] ?? []}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductGallery />

      <VideoGallery />

      <CTASection title={t("ctaTitle")} subtitle={t("ctaSubtitle")} />
    </>
  )
}
