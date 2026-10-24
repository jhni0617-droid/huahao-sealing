import Image from "next/image"
import { getLocale } from "next-intl/server"
import { getLocalized } from "@/lib/locale-data"
import { productRailModels, productRailGallery } from "@/lib/product-rail"
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
          <RailRow items={productRailModels} direction="forward" duration={51} />
          {/* 第二行：实拍图倒序，从产品中心最后一张开始，反方向滚动 */}
          <RailRow items={[...productRailGallery].reverse()} direction="reverse" duration={89} />
        </ProductRailViewport>
      </div>
    </section>
  )
}

function RailRow({
  items,
  direction,
  duration,
}: {
  items: string[]
  direction: "forward" | "reverse"
  duration: number
}) {
  // 复制两份，靠 translateX(-50%) 循环；卡片用 mr 而非父级 gap，两份宽度才严格相等
  const track = [...items, ...items]
  const cls = direction === "forward" ? "product-rail-track" : "product-rail-track product-rail-track-reverse"

  return (
    <div className={`${cls} flex w-max`} style={{ animationDuration: `${duration}s` }}>
      {track.map((src, i) => (
        <div
          key={`${src}-${i}`}
          aria-hidden={i >= items.length}
          className="relative mr-2 aspect-[4/3] w-[130px] shrink-0 overflow-hidden bg-[#f0f1f2] sm:w-[170px] md:mr-3 md:w-[180px]"
        >
          <Image
            src={src}
            alt=""
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
