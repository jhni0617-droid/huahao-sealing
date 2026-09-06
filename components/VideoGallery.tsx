"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import Icon from "@/components/ui/Icon"

type VideoItem = {
  slug: string
  src: string
  thumb: string
  title: { zh: string; en: string }
  desc: { zh: string; en: string }
}

const videos: VideoItem[] = [
  {
    slug: "hand-ring",
    src: "/videos/hand-ring.mp4",
    thumb: "/images/videos/hand-ring.webp",
    title: { zh: "成品密封环实拍", en: "Finished seal ring" },
    desc: { zh: "机加工后的树脂浸渍石墨密封环，端面与倒角细节。", en: "Resin-impregnated graphite seal ring after machining, face and chamfer details." },
  },
  {
    slug: "machining-ring",
    src: "/videos/machining-ring.mp4",
    thumb: "/images/videos/machining-ring.webp",
    title: { zh: "精密车削加工", en: "Precision turning" },
    desc: { zh: "数控车削密封环端面与内外圆，公差全程受控。", en: "CNC turning of seal ring faces and diameters with controlled tolerances." },
  },
  {
    slug: "seal-ring-batch",
    src: "/videos/seal-ring-batch.mp4",
    thumb: "/images/videos/seal-ring-batch.webp",
    title: { zh: "密封环批量出货", en: "Seal ring batches" },
    desc: { zh: "批量机械密封环成品，标准型号与定制尺寸均可供货。", en: "Batch mechanical seal rings, standard models and custom sizes available." },
  },
  {
    slug: "seal-faces",
    src: "/videos/seal-faces.mp4",
    thumb: "/images/videos/seal-faces.webp",
    title: { zh: "动静环端面", en: "Seal face rings" },
    desc: { zh: "机械密封动环、静环配对件，研磨端面平整光洁。", en: "Mating rotating and stationary seal rings with lapped, flat faces." },
  },
  {
    slug: "impregnated-parts",
    src: "/videos/impregnated-parts.mp4",
    thumb: "/images/videos/impregnated-parts.webp",
    title: { zh: "浸渍石墨坯料", en: "Impregnated blanks" },
    desc: { zh: "树脂/金属浸渍石墨坯料，二次浸渍提升气密性。", en: "Resin/metal impregnated graphite blanks, double impregnation for air tightness." },
  },
  {
    slug: "custom-bushings",
    src: "/videos/custom-bushings.mp4",
    thumb: "/images/videos/custom-bushings.webp",
    title: { zh: "定制轴套与轴承", en: "Custom bushings" },
    desc: { zh: "自润滑石墨轴套、轴承和止推件，按图定制尺寸。", en: "Self-lubricating graphite bushings, bearings and thrust parts made to drawing." },
  },
  {
    slug: "semi-finished",
    src: "/videos/semi-finished.mp4",
    thumb: "/images/videos/semi-finished.webp",
    title: { zh: "车间与半成品", en: "Workshop & semi-finished parts" },
    desc: { zh: "全流程自产车间，各工序间半成品流转实拍。", en: "Fully in-house workshop; semi-finished parts moving between stations." },
  },
  {
    slug: "crucible-mesh",
    src: "/videos/crucible-mesh.mp4",
    thumb: "/images/videos/crucible-mesh.webp",
    title: { zh: "石墨坩埚部件", en: "Graphite crucible parts" },
    desc: { zh: "耐高温石墨坩埚与异形件，可用于高温熔炼工况。", en: "High-temperature graphite crucibles and shaped parts for melting duty." },
  },
  {
    slug: "component-detail",
    src: "/videos/component-detail.mp4",
    thumb: "/images/videos/component-detail.webp",
    title: { zh: "异形件细节", en: "Component details" },
    desc: { zh: "按图纸加工的异形石墨零部件，支持来图来样定制。", en: "Custom-shaped graphite components machined from drawings or samples." },
  },
]

export default function VideoGallery() {
  const locale = useLocale()
  const t = useTranslations("products")
  const zh = locale === "zh"
  const [active, setActive] = useState<VideoItem | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [active])

  return (
    <section className="section-padding industrial-surface border-t border-border">
      <div className="container-wide">
        <div className="mb-8 max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.08em] text-accent">{t("videoOverline")}</div>
          <h2 className="mt-2 text-2xl font-bold text-primary md:text-3xl">{t("videoTitle")}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{t("videoIntro")}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {videos.map((v) => (
            <button
              key={v.slug}
              onClick={() => setActive(v)}
              className="group relative block overflow-hidden border border-border bg-white text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:shadow-[0_18px_44px_rgba(7,21,37,0.08)] focus-ring"
              aria-label={zh ? v.title.zh : v.title.en}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={v.thumb}
                  alt={zh ? v.title.zh : v.title.en}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors duration-200 group-hover:bg-primary/25">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/92 shadow-lg transition-transform duration-200 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-primary" aria-hidden>
                      <path d="M8 5.5v13l11-6.5-11-6.5z" />
                    </svg>
                  </span>
                </span>
              </div>
              <div className="p-4">
                <div className="text-sm font-bold text-primary transition-colors group-hover:text-accent">{zh ? v.title.zh : v.title.en}</div>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">{zh ? v.desc.zh : v.desc.en}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-primary/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActive(null)}
              className="absolute -top-11 right-0 flex items-center gap-1.5 text-sm font-semibold text-white/85 transition-colors hover:text-white"
              aria-label="Close"
            >
              Close
              <Icon name="close" className="h-5 w-5" />
            </button>
            <video
              key={active.src}
              src={active.src}
              className="max-h-[80vh] w-full border border-white/15 bg-black"
              controls
              autoPlay
              playsInline
              loop
            />
            <div className="mt-3 text-white">
              <div className="text-base font-bold">{zh ? active.title.zh : active.title.en}</div>
              <p className="mt-1 text-sm text-white/70">{zh ? active.desc.zh : active.desc.en}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
