"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { getProductsByCategory } from "@/lib/products"
import { getEnProductsByCategory } from "@/lib/products-en"
import {
  productsByLocale,
  categoriesByLocale,
  getViProductsByCategory,
  getThProductsByCategory,
  getRuProductsByCategory,
  getJaProductsByCategory,
  getKoProductsByCategory,
} from "@/lib/translations-products"
import { getLocalized, getLocalizedProductCategory } from "@/lib/locale-data"
import CTASection from "@/components/CTASection"
import Icon from "@/components/ui/Icon"
import type { Product } from "@/lib/products"

const localizedCopy = {
  zh: {
    overline: "工业产品目录",
    intro:
      "按产品线、型号或应用场景快速筛选。若工况涉及高温、腐蚀、干运转或非标尺寸，请直接提交图纸和运行参数。",
    search: "搜索型号、产品名称、应用或材料，例如 108、轴套、泵、SiC",
    drawing: "发送图纸 / 询价",
    applications: "查看应用工况",
    reference: "规格为选型参考，最终材料牌号按介质、温度、压力和转速确认。",
    catalog: "目录",
    capability: "选型能力",
    custom: "按图加工",
    customDesc: "支持来图、来样、非标尺寸、批量 OEM。",
    material: "材料匹配",
    materialDesc: "树脂、锑、铜浸渍及配对面材料建议。",
    qc: "质量确认",
    qcDesc: "尺寸、端面、外观与关键性能出厂检查。",
    model: "型号",
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
    catalog: "Catalog",
    capability: "Selection support",
    custom: "Drawing-based OEM",
    customDesc: "Custom dimensions, samples, and batch OEM machining.",
    material: "Material matching",
    materialDesc: "Resin, antimony, copper impregnation and mating face guidance.",
    qc: "QC confirmation",
    qcDesc: "Dimensional, face, visual, and key performance checks before shipment.",
    model: "Model",
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
    catalog: "Danh mục",
    capability: "Hỗ trợ chọn mẫu",
    custom: "Gia công theo bản vẽ",
    customDesc: "Hỗ trợ bản vẽ, mẫu, kích thước phi tiêu chuẩn và OEM số lượng lớn.",
    material: "Ghép vật liệu",
    materialDesc: "Tư vấn tẩm nhựa, antimon, đồng và vật liệu bề mặt đối tiếp.",
    qc: "Xác nhận QC",
    qcDesc: "Kiểm tra kích thước, mặt làm kín, ngoại quan và hiệu suất trước xuất xưởng.",
    model: "Model",
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
    catalog: "แคตตาล็อก",
    capability: "สนับสนุนการเลือก",
    custom: "ผลิตตามแบบ",
    customDesc: "รองรับแบบ ตัวอย่าง ขนาดพิเศษ และ OEM เป็นล็อต",
    material: "จับคู่วัสดุ",
    materialDesc: "แนะนำการอัดซึมเรซิน พลวง ทองแดง และวัสดุผิวคู่",
    qc: "ยืนยันคุณภาพ",
    qcDesc: "ตรวจสอบขนาด หน้าซีล ลักษณะภายนอก และสมรรถนะก่อนส่งออก",
    model: "รุ่น",
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
    catalog: "Каталог",
    capability: "Подбор",
    custom: "Изготовление по чертежу",
    customDesc: "Чертежи, образцы, нестандартные размеры и серийный OEM.",
    material: "Подбор материала",
    materialDesc: "Рекомендации по пропитке смолой, сурьмой, медью и сопряженным поверхностям.",
    qc: "Контроль качества",
    qcDesc: "Проверка размеров, торцов, внешнего вида и ключевых параметров перед отгрузкой.",
    model: "Модель",
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
    catalog: "カタログ",
    capability: "選定サポート",
    custom: "図面加工",
    customDesc: "図面、サンプル、非標準寸法、量産OEMに対応。",
    material: "材料マッチング",
    materialDesc: "樹脂、アンチモン、銅含浸および相手材の提案。",
    qc: "品質確認",
    qcDesc: "寸法、端面、外観、主要性能を出荷前に検査。",
    model: "型番",
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
    catalog: "카탈로그",
    capability: "선정 지원",
    custom: "도면 기반 가공",
    customDesc: "도면, 샘플, 비표준 치수 및 대량 OEM 지원.",
    material: "재료 매칭",
    materialDesc: "수지, 안티몬, 동 함침 및 상대면 재료 제안.",
    qc: "품질 확인",
    qcDesc: "출하 전 치수, 단면, 외관 및 핵심 성능 검사.",
    model: "모델",
    view: "상세 보기",
    noImage: "맞춤형 그라파이트 부품",
    emptyHint: "다른 키워드를 시도하거나 운전 조건을 보내 선정 상담을 받으세요.",
  },
}

const categoryNotes: Record<string, Record<string, string>> = {
  "seal-rings": {
    zh: "机械密封动静环、泵用密封端面及标准互换型号。",
    en: "Mechanical seal faces, pump seal rings, and interchangeable standard models.",
    vi: "Mặt phớt cơ khí, vòng phớt bơm và model tiêu chuẩn thay thế.",
    th: "หน้าซีลกล แหวนซีลปั๊ม และรุ่นมาตรฐานทดแทน",
    ru: "Торцевые уплотнения, кольца для насосов и взаимозаменяемые модели.",
    ja: "メカニカルシール面、ポンプ用シールリング、標準互換型番。",
    ko: "기계식 씰 페이스, 펌프 씰 링 및 표준 호환 모델.",
  },
  "carbon-graphite-sleeves": {
    zh: "自润滑轴套、轴承和止推件，适合无油、水下和腐蚀工况。",
    en: "Self-lubricating bushings, bearings, and thrust parts for oil-free, submerged, and corrosive duty.",
    vi: "Bạc lót, ổ trục và chi tiết chặn tự bôi trơn cho môi trường không dầu, ngập nước và ăn mòn.",
    th: "บูช แบริ่ง และชิ้นส่วนรับแรงแบบหล่อลื่นตัวเอง สำหรับงานไร้น้ำมัน ใต้น้ำ และกัดกร่อน",
    ru: "Самосмазывающиеся втулки, подшипники и упорные детали для безмасляных, погружных и коррозионных условий.",
    ja: "無給油、水中、腐食条件向けの自己潤滑ブッシング、軸受、スラスト部品。",
    ko: "무급유, 수중 및 부식 조건용 자체 윤활 부싱, 베어링, 스러스트 부품.",
  },
  "three-part-rings": {
    zh: "分瓣结构，适合无法从轴端安装的封闭腔体。",
    en: "Segmented rings for enclosed cavities where shaft-end installation is not possible.",
    vi: "Vòng phân đoạn cho khoang kín không thể lắp từ đầu trục.",
    th: "วงแหวนแบ่งชิ้นสำหรับช่องปิดที่ไม่สามารถติดตั้งจากปลายเพลาได้",
    ru: "Сегментные кольца для закрытых полостей, где монтаж с конца вала невозможен.",
    ja: "軸端から取り付けできない密閉空間向けの分割リング。",
    ko: "축 끝에서 설치할 수 없는 밀폐 공간용 분할 링.",
  },
}

const specLabelSets = {
  temp: ["温度范围", "Temperature", "Nhiệt độ", "อุณหภูมิ", "Температура", "温度", "온도"],
  pressure: ["压力", "压力范围", "轴向载荷", "Pressure", "Áp suất", "แรงดัน", "Давление", "압력"],
  speed: ["转速", "Speed", "Tốc độ", "ความเร็ว", "Скорость", "速度", "속도"],
}

function getCopy(locale: string) {
  return getLocalized(localizedCopy, locale)
}

function getSpec(product: Product, labels: string[]) {
  return product.specs.find((s) => labels.includes(s.label))
}

function getCategoryDescription(slug: string, locale: string) {
  return getLocalized(categoryNotes[slug] || { en: "" }, locale)
}

function ProductSpecMini({ icon, label, value }: { icon: "thermometer" | "gear" | "clock"; label: string; value?: string }) {
  if (!value) return null

  return (
    <div className="min-w-0 border-l border-border pl-3">
      <div className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase text-muted">
        <Icon name={icon} className="h-3.5 w-3.5 text-accent" />
        {label}
      </div>
      <div className="truncate text-sm font-bold text-primary">{value}</div>
    </div>
  )
}

function ProductCard({ product, locale }: { product: Product; locale: string }) {
  const t = useTranslations("productDetail")
  const copy = getCopy(locale)
  const tempSpec = getSpec(product, specLabelSets.temp)
  const pressureSpec = getSpec(product, specLabelSets.pressure)
  const speedSpec = getSpec(product, specLabelSets.speed)

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group grid min-h-full overflow-hidden border border-border bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:shadow-[0_18px_44px_rgba(7,21,37,0.08)] focus-ring sm:grid-rows-[auto_1fr] lg:grid-cols-[180px_1fr] lg:grid-rows-1"
    >
      <div className="relative flex min-h-32 sm:min-h-40 items-center justify-center border-b border-border bg-gradient-to-br from-white to-slate-50 lg:border-b-0 lg:border-r lg:min-h-full">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 sm:p-6 lg:p-8 transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 100vw, 180px"
          />
        ) : (
          <div className="px-4 sm:px-6 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-muted-light">
            {copy.noImage}
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-col p-3 sm:p-4 md:p-5 lg:p-6">
        <div className="mb-2 sm:mb-3 flex flex-wrap items-center justify-between gap-2 sm:gap-3">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.08em] text-accent">
            {getLocalizedProductCategory(product.category, locale)}
          </span>
          <span className="border border-border bg-background px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-muted">
            {copy.model}: {product.model}
          </span>
        </div>

        <h3 className="text-sm sm:text-base lg:text-lg font-bold leading-snug text-primary transition-colors group-hover:text-accent line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-1 sm:mt-2 line-clamp-2 text-xs sm:text-sm leading-relaxed text-muted">{product.shortDesc}</p>

        <div className="mt-3 sm:mt-5 grid grid-cols-3 gap-1.5 sm:gap-3">
          <ProductSpecMini icon="thermometer" label={t("specTemp")} value={tempSpec?.value} />
          <ProductSpecMini icon="gear" label={t("specPressure")} value={pressureSpec?.value} />
          <ProductSpecMini icon="clock" label={t("specSpeed")} value={speedSpec?.value} />
        </div>

        <div className="mt-3 sm:mt-5 flex flex-wrap gap-1 sm:gap-2 border-t border-border pt-3 sm:pt-4">
          {product.applications.slice(0, 3).map((app) => (
            <span key={app} className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 border border-border rounded bg-background text-muted">
              {app}
            </span>
          ))}
          {product.applications.length > 3 && <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 border border-border rounded bg-background text-muted">+{product.applications.length - 3}</span>}
        </div>

        <div className="mt-3 sm:mt-5 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-accent">
          {copy.view}
          <Icon name="arrow-right" className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

export default function ProductsPageContent() {
  const locale = useLocale()
  const t = useTranslations("products")
  const copy = getCopy(locale)

  const catList = categoriesByLocale[locale] || categoriesByLocale.en
  const getItemsMap: Record<string, (slug: string) => Product[]> = {
    zh: getProductsByCategory,
    en: getEnProductsByCategory,
    vi: getViProductsByCategory,
    th: getThProductsByCategory,
    ru: getRuProductsByCategory,
    ja: getJaProductsByCategory,
    ko: getKoProductsByCategory,
  }
  const getItems = getItemsMap[locale] || getItemsMap.en
  const allProducts = productsByLocale[locale] || productsByLocale.en

  const [activeCategory, setActiveCategory] = useState("all")
  const [query, setQuery] = useState("")

  const categorySummaries = useMemo(
    () =>
      catList.map((cat) => ({
        ...cat,
        count: getItems(cat.slug).length,
        description: getCategoryDescription(cat.slug, locale),
      })),
    [catList, getItems, locale],
  )

  const filteredProducts = useMemo(() => {
    const base = activeCategory === "all" ? allProducts : getItems(activeCategory)
    const q = query.trim().toLowerCase()
    if (!q) return base

    return base.filter((product) => {
      const haystack = [
        product.name,
        product.model,
        getLocalizedProductCategory(product.category, locale),
        product.shortDesc,
        product.description,
        ...product.specs.flatMap((spec) => [spec.label, spec.value]),
        ...(product.applications || []),
        ...(product.features || []),
        ...(product.materials || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()

      return haystack.includes(q)
    })
  }, [activeCategory, allProducts, getItems, query])

  return (
    <>
      <section className="border-b border-border bg-white">
        <div className="container-wide py-8 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
            <aside className="border border-border bg-background p-5">
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-muted">{copy.catalog}</div>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`flex w-full items-center justify-between border px-3.5 py-3 text-left text-sm font-semibold transition-colors ${
                    activeCategory === "all"
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-white text-primary hover:border-accent hover:text-accent"
                  }`}
                >
                  {t("all")}
                  <span className="text-xs opacity-75">{allProducts.length}</span>
                </button>

                {categorySummaries.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`w-full border px-3.5 py-3 text-left transition-colors ${
                      activeCategory === cat.slug
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-white text-primary hover:border-accent hover:text-accent"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-4 text-sm font-semibold">
                      {cat.name}
                      <span className="text-xs opacity-75">{cat.count}</span>
                    </span>
                    <span className={`mt-1 block text-xs leading-relaxed ${activeCategory === cat.slug ? "text-white/68" : "text-muted"}`}>
                      {cat.description}
                    </span>
                  </button>
                ))}
              </div>
            </aside>

            <div>
              <div className="grid gap-5 border border-border bg-white p-5 md:p-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <div className="text-xs font-bold uppercase tracking-[0.08em] text-accent">{copy.overline}</div>
                  <h2 className="mt-2 text-2xl font-bold text-primary md:text-3xl">
                    {t("productCount", { count: filteredProducts.length })}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{copy.intro}</p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Link href="/contact" className="btn-primary">
                    {copy.drawing}
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Link>
                  <Link href="/applications" className="btn-secondary">
                    {copy.applications}
                  </Link>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                <label className="relative block">
                  <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className="form-input rounded-none pl-11"
                    placeholder={copy.search}
                    aria-label="Search products"
                  />
                </label>
                <div className="text-xs leading-relaxed text-muted md:max-w-xs md:text-right">{copy.reference}</div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {[
                  { title: copy.custom, desc: copy.customDesc, icon: "file-text" as const },
                  { title: copy.material, desc: copy.materialDesc, icon: "chemical" as const },
                  { title: copy.qc, desc: copy.qcDesc, icon: "shield" as const },
                ].map((item) => (
                  <div key={item.title} className="border border-border bg-background p-4">
                    <Icon name={item.icon} className="mb-3 h-5 w-5 text-accent" />
                    <div className="text-sm font-bold text-primary">{item.title}</div>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding industrial-surface">
        <div className="container-wide">
          {filteredProducts.length > 0 ? (
            <div className="grid gap-4 sm:gap-5 grid-cols-2">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} locale={locale} />
              ))}
            </div>
          ) : (
            <div className="border border-border bg-white px-6 py-16 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-border bg-background text-accent">
                <Icon name="search" className="h-5 w-5" />
              </div>
              <div className="font-bold text-primary">{t("empty")}</div>
              <p className="mt-2 text-sm text-muted">{copy.emptyHint}</p>
            </div>
          )}
        </div>
      </section>

      <CTASection title={t("ctaTitle")} subtitle={t("ctaSubtitle")} />
    </>
  )
}
