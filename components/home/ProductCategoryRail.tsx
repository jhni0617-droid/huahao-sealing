"use client"

import { useState } from "react"
import Image from "next/image"
import { useLocale } from "next-intl"
import { Link } from "@/i18n/routing"
import { getLocalized } from "@/lib/locale-data"

/**
 * Hero 下方 5 张产品分类卡片 —— 还原上海良工阀门（lgvf.com）的 hover 展开动效。
 *
 * 动效要点（与良工原版一致）：
 * - 默认 5 列等宽（每列 1/5 = 20%）
 * - hover 时被 hover 项展宽到 1/4（25%），其余 4 项收窄到 15%
 * - 被 hover 项背景变 bg-accent（#e60012），文字变白
 * - "MORE" 按钮默认 opacity:0 + top:24px，hover 时上移 + 淡入，0.5s 延迟
 * - 全程 transition: all 0.5s
 *
 * 多语言（7 语种，见 railCopy）：
 * - 覆盖卡片名称、描述、按钮文案与区域 aria-label；
 *   术语与 lib/locale-data.ts、lib/products*.ts 对齐，同一产品在各页面叫法一致。
 * - 排版护栏：卡片改为 flex 纵向布局，文字层在上、图片 mt-auto 沉底，
 *   标题/描述用 line-clamp + break-words 截断，任何语种都不会压到图片或撑破卡片；
 *   英/越/俄等长单词语言自动降一档字号（denseScript），避免断词与挤压。
 */

type ItemKey = "antimonyBlank" | "resinBlank" | "bearing" | "sealRing" | "splitRing"

const items: { key: ItemKey; href: string; image: string }[] = [
  {
    key: "antimonyBlank",
    href: "/products",
    image: "/images/products/antimony-blank.webp",
  },
  {
    key: "resinBlank",
    href: "/products",
    image: "/images/products/resin-blank.webp",
  },
  {
    key: "bearing",
    href: "/products",
    image: "/images/products/carbon-graphite-bearing.webp",
  },
  {
    key: "sealRing",
    href: "/products",
    image: "/images/products/carbon-graphite-seal-ring.webp",
  },
  {
    key: "splitRing",
    href: "/products",
    image: "/images/products/carbon-graphite-three-segment.webp",
  },
]

type ItemCopy = { title: string; description: string }
type RailCopy = { label: string; more: string; items: Record<ItemKey, ItemCopy> }

const railCopy: Record<string, RailCopy> = {
  zh: {
    label: "产品分类导航",
    more: "了解更多",
    items: {
      antimonyBlank: { title: "浸锑石墨毛坯", description: "耐高温、抗氧化，适合高 PV 值干运转工况。" },
      resinBlank: { title: "浸树脂石墨毛坯", description: "尺寸稳定、气密性好，适合通用泵与密封件加工。" },
      bearing: { title: "碳石墨轴承", description: "自润滑、耐腐蚀，用于潜水泵、船舶与重载旋转设备。" },
      sealRing: { title: "碳石墨密封环", description: "机械密封动、静环常用材质，按图定制内外径与端面。" },
      splitRing: { title: "碳石墨三瓣环", description: "剖分式结构，无需拆卸轴即可安装与更换。" },
    },
  },
  en: {
    label: "Product category navigation",
    more: "Learn more",
    items: {
      antimonyBlank: { title: "Antimony-Impregnated Graphite Blanks", description: "Heat- and oxidation-resistant, suited to high-PV dry-running service." },
      resinBlank: { title: "Resin-Impregnated Graphite Blanks", description: "Dimensionally stable and gas-tight for general pump and seal machining." },
      bearing: { title: "Carbon Graphite Bearings", description: "Self-lubricating and corrosion-resistant for submersible pumps and heavy-duty rotation." },
      sealRing: { title: "Carbon Graphite Seal Rings", description: "Standard material for mechanical seal faces; I.D./O.D. and faces machined to your drawing." },
      splitRing: { title: "Carbon Graphite Split Rings", description: "Split construction allows fitting or replacement without removing the shaft." },
    },
  },
  vi: {
    label: "Danh mục sản phẩm",
    more: "Tìm hiểu thêm",
    items: {
      antimonyBlank: { title: "Phôi than chì tẩm antimon", description: "Chịu nhiệt, chống oxy hóa, phù hợp vận hành khô PV cao." },
      resinBlank: { title: "Phôi than chì tẩm nhựa", description: "Ổn định kích thước, kín khí, dùng cho bơm và phớt thông dụng." },
      bearing: { title: "Vòng bi than chì carbon", description: "Tự bôi trơn, chống ăn mòn cho bơm chìm, hàng hải và thiết bị quay tải nặng." },
      sealRing: { title: "Vòng đệm than chì carbon", description: "Vật liệu chuẩn cho mặt phớt cơ khí; đường kính và mặt gia công theo bản vẽ." },
      splitRing: { title: "Vòng phân đoạn than chì carbon", description: "Kết cấu chia mảnh, lắp và thay thế không cần tháo trục." },
    },
  },
  th: {
    label: "หมวดหมู่สินค้า",
    more: "ดูเพิ่มเติม",
    items: {
      antimonyBlank: { title: "แท่งคาร์บอนกราไฟต์อิมเพรกเนตพลวง", description: "ทนความร้อน ต้านออกซิเดชัน เหมาะงานเดินแห้ง PV สูง" },
      resinBlank: { title: "แท่งคาร์บอนกราไฟต์อิมเพรกเนตเรซิน", description: "ขนาดคงที่ ผนึกแน่น ใช้กับงานปั๊มและซีลทั่วไป" },
      bearing: { title: "แบริ่งคาร์บอนกราไฟต์", description: "หล่อลื่นตัวเอง ทนการกัดกร่อน สำหรับปั๊มจุ่ม งานเรือ และงานหมุนหนัก" },
      sealRing: { title: "แหวนซีลคาร์บอนกราไฟต์", description: "วัสดุมาตรฐานสำหรับหน้าซีลกล กลึงขนาดและหน้าตามแบบ" },
      splitRing: { title: "แหวนแยกคาร์บอนกราไฟต์", description: "แบบแยกชิ้น ติดตั้งและเปลี่ยนได้โดยไม่ต้องถอดเพลา" },
    },
  },
  ru: {
    label: "Категории продукции",
    more: "Подробнее",
    items: {
      antimonyBlank: { title: "Заготовки графита с пропиткой сурьмой", description: "Жаро- и окислостойкие; для сухого трения при высоком PV." },
      resinBlank: { title: "Заготовки графита с пропиткой смолой", description: "Стабильные размеры и герметичность для насосов и уплотнений." },
      bearing: { title: "Подшипники из углеродного графита", description: "Самосмазка и стойкость к коррозии для погружных насосов и тяжелых узлов." },
      sealRing: { title: "Кольца из углеродного графита", description: "Базовый материал торцевых уплотнений; размеры и торцы по чертежу." },
      splitRing: { title: "Разрезные кольца из углеродного графита", description: "Разрезная конструкция: замена без снятия вала." },
    },
  },
  ja: {
    label: "製品カテゴリ",
    more: "詳しく見る",
    items: {
      antimonyBlank: { title: "アンチモン含浸グラファイト素材", description: "耐熱・耐酸化性に優れ、高PVのドライ運転に適します。" },
      resinBlank: { title: "レジン含浸グラファイト素材", description: "寸法安定性と気密性が高く、汎用ポンプ・シール加工に適します。" },
      bearing: { title: "カーボングラファイト軸受", description: "自己潤滑・耐食性。水中ポンプ、船舶、重負荷回転機器向け。" },
      sealRing: { title: "カーボングラファイトシールリング", description: "メカニカルシール面の標準材質。内外径と端面は図面対応。" },
      splitRing: { title: "カーボングラファイト分割リング", description: "分割構造で、軸を外さずに交換できます。" },
    },
  },
  ko: {
    label: "제품 카테고리",
    more: "자세히 보기",
    items: {
      antimonyBlank: { title: "안티모니 함침 그라파이트 소재", description: "내열·내산화성이 우수해 고PV 건식 운전에 적합합니다." },
      resinBlank: { title: "레진 함침 그라파이트 소재", description: "치수 안정성과 기밀성이 좋아 범용 펌프·씰 가공에 적합합니다." },
      bearing: { title: "카본 그라파이트 베어링", description: "자체 윤활·내식성. 수중 펌프, 해양, 중부하 회전 장비용." },
      sealRing: { title: "카본 그라파이트 씰 링", description: "기계식 씰 페이스 표준 소재. 내외경과 면을 도면대로 가공." },
      splitRing: { title: "카본 그라파이트 분할 링", description: "분할 구조로 축을 분리하지 않고 교체할 수 있습니다." },
    },
  },
}

export default function ProductCategoryRail() {
  const locale = useLocale()
  const copy = getLocalized(railCopy, locale)
  const [hovered, setHovered] = useState<number | null>(null)
  const anyHovered = hovered !== null

  /* 中日韩泰文字密度高、可任意换行，标题用原字号；
     英/越/俄单词长且不宜断行，标题降一档字号，避免断词和挤压。
     两侧的行数上限随之不同（长单词语言多给一行，总体高度都留有余量）。 */
  const denseScript = ["zh", "ja", "ko", "th"].includes(locale)
  const titleSize = denseScript ? "text-[22px] lg:text-[26px]" : "text-[16px] lg:text-[19px]"
  const titleClamp = denseScript ? "line-clamp-2" : "line-clamp-3"

  return (
    <section
      aria-label={copy.label}
      className="border-t border-border bg-white"
    >
      {/* ============ 桌面端：5 列 + hover 展开 ============ */}
      <ul className="hidden md:flex">
        {items.map((item, i) => {
          const isHovered = hovered === i
          const t = copy.items[item.key]
          const widthClass = !anyHovered
            ? "w-1/5"
            : isHovered
              ? "w-1/4"
              : "w-[18.75%]"
          return (
            <li
              key={item.key}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocusCapture={() => setHovered(i)}
              onBlurCapture={() => setHovered(null)}
              className={`relative shrink-0 border-r border-border-light last:border-r-0 ${widthClass} transition-all duration-500 ease-out`}
            >
              <Link
                href={item.href}
                className={`relative flex h-[360px] flex-col overflow-hidden px-[24px] pb-[40px] pt-[50px] transition-all duration-500 lg:h-[440px] lg:px-[50px] lg:pb-[40px] lg:pt-[60px] ${
                  isHovered ? "bg-accent" : "bg-white"
                }`}
              >
                {/* 标题 + 描述：普通流布局，用 line-clamp 限行，永不与图片重叠 */}
                <b
                  className={`${titleSize} ${titleClamp} break-words font-bold leading-tight transition-colors duration-500 ${
                    isHovered ? "text-white" : "text-primary"
                  }`}
                >
                  {t.title}
                </b>
                <p
                  className={`mt-2.5 line-clamp-2 break-words text-[12.5px] leading-snug transition-colors duration-500 lg:mt-3 lg:text-[13.5px] ${
                    isHovered ? "text-white/85" : "text-muted"
                  }`}
                >
                  {t.description}
                </p>

                {/* 图片区：mt-auto 沉底 + 自身居中，尺寸随断点收放 */}
                <div className="relative mt-auto h-[150px] w-[200px] shrink-0 self-center lg:h-[200px] lg:w-[240px]">
                  <Image
                    src={item.image}
                    alt={t.title}
                    fill
                    sizes="(max-width: 1024px) 200px, 240px"
                    className="object-contain transition-transform duration-500"
                  />
                </div>

                {/* MORE 按钮：默认隐藏，hover 时上移 + 淡入，0.5s 延迟。
                    whitespace-nowrap：md 断点下列宽只有 ~153px，英/越/俄的长按钮文案
                    会被压成两行、把按钮底部顶到标题上；禁止换行 + md 收紧右间距即可。
                    字号/间距 md 用 11px、lg 恢复 12px，保证各语种都不溢出、不裁字。 */}
                <span
                  className={`absolute right-[24px] top-[24px] z-10 inline-flex items-center gap-2 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-500 lg:right-[50px] lg:text-xs ${
                    isHovered ? "-translate-y-6 opacity-100" : "translate-y-0 opacity-0"
                  }`}
                  style={{ transitionDelay: isHovered ? "0.5s" : "0s" }}
                >
                  {copy.more}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </li>
          )
        })}
      </ul>

      {/* ============ 移动端：2 列网格（不展开） ============ */}
      <ul className="grid grid-cols-2 md:hidden">
        {items.map((item) => {
          const t = copy.items[item.key]
          return (
            <li key={item.key} className="border-b border-r border-border-light">
              <Link
                href={item.href}
                className="relative flex h-[240px] flex-col overflow-hidden bg-white px-5 pb-4 pt-5"
              >
                <b
                  className={`${
                    denseScript ? "text-[16px]" : "text-[14px]"
                  } line-clamp-2 break-words font-bold leading-tight text-primary`}
                >
                  {t.title}
                </b>
                <p className="mt-2 line-clamp-2 break-words text-[11.5px] leading-snug text-muted">
                  {t.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
                  {copy.more} →
                </span>

                <div className="relative mt-auto h-[96px] w-[136px] shrink-0 self-center">
                  <Image
                    src={item.image}
                    alt={t.title}
                    fill
                    sizes="136px"
                    className="object-contain"
                  />
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
