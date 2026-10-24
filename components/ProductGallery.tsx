"use client"

import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { useLocale } from "next-intl"
import { getLocalized } from "@/lib/locale-data"
import { productGallery, type GalleryImageKind } from "@/lib/product-gallery"

/**
 * 产品实拍图集。
 *
 * 这些图来源于产品目录 PPT 第 9–22 页，**没有产品名称也没有参数**，因此这里只做图片展示：
 * 不生成产品页、不写型号、不做结构化数据，避免造出一批没有实际内容的空页面。
 * 图片统一 lazy 加载，78 张全部在交付 HTML 里，但不阻塞首屏。
 */

const copy = {
  zh: {
    eyebrow: "PHOTO GALLERY",
    title: "产品实拍图集",
    desc: "车间实拍，覆盖密封环、轴套、三瓣环及各类异形件的实际加工效果。点击任意图片可放大查看细节。",
    open: "放大查看",
    prev: "上一张",
    next: "下一张",
    close: "关闭",
  },
  en: {
    eyebrow: "PHOTO GALLERY",
    title: "Product Photo Gallery",
    desc: "Real shots from our workshop — seal rings, bushings, split rings and custom shapes exactly as machined. Click any image to enlarge.",
    open: "Enlarge",
    prev: "Previous",
    next: "Next",
    close: "Close",
  },
  vi: {
    eyebrow: "PHOTO GALLERY",
    title: "Thư viện ảnh sản phẩm",
    desc: "Ảnh thực tế tại xưởng — vòng đệm, bạc lót, vòng chẻ và các chi tiết dị hình đúng như khi gia công. Nhấn vào ảnh để xem lớn.",
    open: "Xem lớn",
    prev: "Ảnh trước",
    next: "Ảnh sau",
    close: "Đóng",
  },
  th: {
    eyebrow: "PHOTO GALLERY",
    title: "แกลเลอรีภาพสินค้าจริง",
    desc: "ภาพถ่ายจริงจากโรงงาน ครอบคลุมแหวนซีล บูช แหวนผ่าครึ่ง และชิ้นงานพิเศษตามที่ผลิตจริง คลิกที่ภาพเพื่อขยาย",
    open: "ขยาย",
    prev: "ก่อนหน้า",
    next: "ถัดไป",
    close: "ปิด",
  },
  ru: {
    eyebrow: "PHOTO GALLERY",
    title: "Фотогалерея продукции",
    desc: "Реальные снимки из цеха — кольца, втулки, разрезные кольца и детали нестандартной формы в том виде, в каком они выходят после обработки. Нажмите на изображение, чтобы увеличить.",
    open: "Увеличить",
    prev: "Предыдущее",
    next: "Следующее",
    close: "Закрыть",
  },
  ja: {
    eyebrow: "PHOTO GALLERY",
    title: "製品実写ギャラリー",
    desc: "工場での実写です。シールリング、ブッシュ、分割リング、特殊形状品の加工仕上がりをご覧いただけます。画像をクリックすると拡大表示します。",
    open: "拡大",
    prev: "前へ",
    next: "次へ",
    close: "閉じる",
  },
  ko: {
    eyebrow: "PHOTO GALLERY",
    title: "제품 실사 갤러리",
    desc: "공장에서 촬영한 실제 사진입니다. 씰 링, 부시, 분할 링, 특수 형상 부품의 가공 결과를 확인하실 수 있습니다. 이미지를 클릭하면 확대됩니다.",
    open: "확대",
    prev: "이전",
    next: "다음",
    close: "닫기",
  },
}

/**
 * 图集 alt，按 lib/product-gallery.ts 的 kind 分类取文案（2026-10-24 加）。
 * 此前 78 张全是空 alt —— 图集是产品中心页的主体内容之一，
 * 空 alt 等于放弃 Google 图片搜索这个入口。
 */
const altCopy: Record<GalleryImageKind, Record<"zh" | "en" | "vi" | "th" | "ru" | "ja" | "ko", string>> = {
  "seal-ring": {
    zh: "碳石墨机械密封环车间实拍，华豪密封件",
    en: "Carbon graphite mechanical seal ring, workshop photo, Huahao Sealing",
    vi: "Vòng đệm cơ khí than chì carbon, ảnh thực tế tại xưởng, Huahao Sealing",
    th: "แหวนซีลแมกคานิคัลคาร์บอนกราไฟต์ ภาพจริงจากโรงงาน Huahao Sealing",
    ru: "Уплотнительное кольцо из углеродного графита, фото с производства, Huahao Sealing",
    ja: "カーボングラファイト機械シールリング、工場実写、華豪シール",
    ko: "카본 그라파이트 기계 씰 링, 공장 실사, 화하오 씰",
  },
  bearing: {
    zh: "碳石墨轴承与轴套车间实拍，华豪密封件",
    en: "Carbon graphite bearing and bushing, workshop photo, Huahao Sealing",
    vi: "Ổ đỡ và bạc lót than chì carbon, ảnh thực tế tại xưởng, Huahao Sealing",
    th: "ตำแหน่งและบัชชิ่งคาร์บอนกราไฟต์ ภาพจริงจากโรงงาน Huahao Sealing",
    ru: "Подшипник и втулка из углеродного графита, фото с производства, Huahao Sealing",
    ja: "カーボングラファイト軸受・ブッシング、工場実写、華豪シール",
    ko: "카본 그라파이트 베어링 및 부싱, 공장 실사, 화하오 씰",
  },
  mixed: {
    zh: "华豪密封件车间实拍：碳石墨密封环与轴承",
    en: "Huahao Sealing workshop photo: carbon graphite seal rings and bearings",
    vi: "Ảnh thực tế tại xưởng Huahao Sealing: vòng đệm và ổ đỡ than chì carbon",
    th: "ภาพจริงจากโรงงาน Huahao Sealing: แหวนซีลและตำแหน่งคาร์บอนกราไฟต์",
    ru: "Фото с производства Huahao Sealing: кольца и подшипники из углеродного графита",
    ja: "華豪シール工場実写：カーボングラファイトシールリングと軸受",
    ko: "화하오 씰 공장 실사: 카본 그라파이트 씰 링 및 베어링",
  },
}

export default function ProductGallery() {
  const locale = useLocale()
  const t = getLocalized(copy, locale)
  const [index, setIndex] = useState<number | null>(null)

  const close = useCallback(() => setIndex(null), [])
  const step = useCallback((delta: number) => {
    setIndex((current) =>
      current === null ? null : (current + delta + productGallery.length) % productGallery.length,
    )
  }, [])

  useEffect(() => {
    if (index === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
      else if (event.key === "ArrowLeft") step(-1)
      else if (event.key === "ArrowRight") step(1)
    }
    window.addEventListener("keydown", onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [index, close, step])

  if (productGallery.length === 0) return null
  return (
    <section className="section-padding industrial-surface border-t border-border">
      <div className="container-wide">
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-accent" aria-hidden />
            <span className="en-caption text-sm text-muted">{t.eyebrow}</span>
          </div>
          <h2 className="font-serif-sc text-2xl font-bold text-primary md:text-3xl">{t.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{t.desc}</p>
        </div>

        <div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
          {productGallery.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${t.open} ${i + 1} / ${productGallery.length}`}
              className="group relative aspect-[4/3] overflow-hidden bg-background"
            >
              <Image
                src={item.src}
                alt={getLocalized(altCopy[item.kind], locale)}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              <span className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />
            </button>
          ))}
        </div>
      </div>

      {/* 灯箱挂到 body：页面祖先层带 transform 会隔离层叠上下文，
          就地 fixed 会被 Header / 悬浮栏的 z-50 压住（实测出现过）。
          index 只在客户端点击后才非 null，SSR 阶段不会触碰 document。 */}
      {index !== null &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={t.title}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          >
          <div className="relative h-full w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={productGallery[index].src}
              alt={getLocalized(altCopy[productGallery[index].kind], locale)}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={close}
            aria-label={t.close}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              step(-1)
            }}
            aria-label={t.prev}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 sm:left-6"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              step(1)
            }}
            aria-label={t.next}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 sm:right-6"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/70">
            {index + 1} / {productGallery.length}
          </span>
          </div>,
          document.body,
        )}
    </section>
  )
}
