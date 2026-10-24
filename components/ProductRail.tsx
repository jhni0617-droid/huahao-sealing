import Image from "next/image"
import { getLocale } from "next-intl/server"
import { getLocalized } from "@/lib/locale-data"
import {
  productRailModels,
  productRailGallery,
  type RailImage,
  type RailImageKind,
} from "@/lib/product-rail"
import { Link } from "@/i18n/routing"
import ProductRailViewport from "./ProductRailViewport"

/**
 * 首页产品图片轮播（无限横向滚动）。
 *
 * 纯 CSS 动画，无客户端 JS —— 服务端输出两遍同样的图片，靠 translateX(-50%) 循环。
 * 每个卡片自带右侧内边距而不靠父级 gap，两份宽度才严格相等，循环处不会出现半格错位。
 *
 * 两行图片源刻意拆开、内容零重叠：
 *   第一行 = 23 张型号图（正序、向左）
 *   第二行 = 40 张车间实拍倒序（从最后一张开始、向右）
 * 共用同一批图会因两行方向相反在中途交汇，导致同一张图上下同时出现。
 * 动画时长按各自轨道长度换算，保持相同的线速度（约 172px/s）。
 *
 * 离屏暂停见 ProductRailViewport —— 滚出视口就停掉动画并释放合成层。
 */

const copy = {
  zh: { label: "产品实拍", more: "查看全部产品" },
  en: { label: "Product Gallery", more: "View all products" },
  vi: { label: "Ảnh sản phẩm", more: "Xem tất cả sản phẩm" },
  th: { label: "ภาพสินค้า", more: "ดูสินค้าทั้งหมด" },
  ru: { label: "Фотографии продукции", more: "Все продукты" },
  ja: { label: "製品ギャラリー", more: "すべての製品を見る" },
  ko: { label: "제품 갤러리", more: "전체 제품 보기" },
}

/**
 * 轮播图 alt，按 lib/product-rail.ts 的 kind 分类取文案（2026-10-24 加）。
 * 空 alt 会让 Google 图片搜索和 AI 爬虫完全读不到语义 —— 首页 126 张 +
 * 产品中心 78 张轮播图此前全是空 alt，等于白加载。
 * 文案 = 产品主体 + 品牌名，控制在读屏软件一句话内；刻意不写「图片 N」之类序号。
 */
const altCopy: Record<RailImageKind, Record<"zh" | "en" | "vi" | "th" | "ru" | "ja" | "ko", string>> = {
  "seal-ring": {
    zh: "碳石墨机械密封环，浸树脂静环，华豪密封件",
    en: "Carbon graphite mechanical seal ring, resin-impregnated stationary ring, Huahao Sealing",
    vi: "Vòng đệm cơ khí than chì carbon, tẩm nhựa, Huahao Sealing",
    th: "แหวนซีลแมกคานิคัลคาร์บอนกราไฟต์ สุบน้ำยา Huahao Sealing",
    ru: "Уплотнительное кольцо из углеродного графита, неподвижное кольцо, Huahao Sealing",
    ja: "カーボングラファイト機械シールリング（樹脂含侵固定リング）、華豪シール",
    ko: "카본 그라파이트 기계 씰 링, 수지 함침 고정 링, 화하오 씰",
  },
  bearing: {
    zh: "碳石墨轴承与轴套，自润滑，华豪密封件",
    en: "Carbon graphite bearing and bushing, self-lubricating, Huahao Sealing",
    vi: "Ổ đỡ và bạc lót than chì carbon, tự bôi trơn, Huahao Sealing",
    th: "ตำแหน่งและบัชชิ่งคาร์บอนกราไฟต์ หล่อลื่นเอง Huahao Sealing",
    ru: "Подшипник и втулка из углеродного графита, самосмазывающиеся, Huahao Sealing",
    ja: "カーボングラファイト軸受・ブッシング（自己潤滑）、華豪シール",
    ko: "카본 그라파이트 베어링 및 부싱, 자체 윤활, 화하오 씰",
  },
  "thrust-bearing": {
    zh: "碳石墨止推轴承，端面螺旋槽，华豪密封件",
    en: "Carbon graphite thrust bearing with spiral grooves, Huahao Sealing",
    vi: "Ổ đỡ lực đẩy than chì carbon, rãnh xoắn, Huahao Sealing",
    th: "ตำแหน่งดันคาร์บอนกราไฟต์ ร่องเกลียว Hua Hao Sealing",
    ru: "Упорный подшипник из углеродного графита со спиральными канавками, Huahao Sealing",
    ja: "カーボングラファイトスラスト軸受（渦巻き溝）、華豪シール",
    ko: "카본 그라파이트 스러스트 베어링, 나선 홈, 화하오 씰",
  },
  "split-ring": {
    zh: "碳石墨三瓣环，分瓣式组合环，华豪密封件",
    en: "Carbon graphite three-segment split ring, Huahao Sealing",
    vi: "Vòng đệm ba mảnh than chì carbon, Huahao Sealing",
    th: "แหวนซีลคาร์บอนกราไฟต์สามเส้น Huahao Sealing",
    ru: "Трехсегментное кольцо из углеродного графита, Huahao Sealing",
    ja: "カーボングラファイト三段分割リング、華豪シール",
    ko: "카본 그라파이트 3분할 링, 화하오 씰",
  },
  parts: {
    zh: "碳石墨密封配件，小规格石墨件，华豪密封件",
    en: "Carbon graphite seal parts, small-size components, Huahao Sealing",
    vi: "Chi tiết phụ tùng seal than chì carbon, kích thước nhỏ, Huahao Sealing",
    th: "ชิ้นส่วนซีลคาร์บอนกราไฟต์ขนาดเล็ก Huahao Sealing",
    ru: "Детали уплотнений из углеродного графита малого размера, Huahao Sealing",
    ja: "カーボングラファイトシール小物部品、華豪シール",
    ko: "카본 그라파이트 씰 부품, 소형 부품, 화하오 씰",
  },
}

export default async function ProductRail() {
  const locale = await getLocale()
  const t = getLocalized(copy, locale)
  return (
    <section className="overflow-hidden border-y border-border bg-white py-5 md:py-6">
      <div className="mb-3 flex items-center justify-between container-wide">
        <div className="flex items-center gap-3">
          <span className="h-[3px] w-8 bg-accent" aria-hidden />
          <span className="en-caption text-xs text-muted">{t.label}</span>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-accent"
        >
          {t.more}
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="product-rail-mask">
        <ProductRailViewport>
          <RailRow items={productRailModels} direction="forward" duration={51} locale={locale} />
          {/* 第二行：实拍图倒序，从产品中心最后一张开始，反方向滚动 */}
          <RailRow items={[...productRailGallery].reverse()} direction="reverse" duration={89} locale={locale} />
        </ProductRailViewport>
      </div>
    </section>
  )
}

function RailRow({
  items,
  direction,
  duration,
  locale,
}: {
  items: RailImage[]
  direction: "forward" | "reverse"
  duration: number
  locale: string
}) {
  // 复制两份，靠 translateX(-50%) 循环；卡片用 mr 而非父级 gap，两份宽度才严格相等
  const track = [...items, ...items]
  const cls = direction === "forward" ? "product-rail-track" : "product-rail-track product-rail-track-reverse"

  return (
    <div className={`${cls} flex w-max`} style={{ animationDuration: `${duration}s` }}>
      {track.map((item, i) => (
        <div
          key={`${item.src}-${i}`}
          aria-hidden={i >= items.length}
          className="relative mr-2 aspect-[4/3] w-[130px] shrink-0 overflow-hidden bg-[#f0f1f2] sm:w-[170px] md:mr-3 md:w-[180px]"
        >
          <Image
            src={item.src}
            alt={getLocalized(altCopy[item.kind], locale)}
            fill
            sizes="180px"
            loading="lazy"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}
