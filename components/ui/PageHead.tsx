/**
 * 内页紧凑页头：红色短线 + 字距小标 + 衬线大标题 + 一行简介。
 * 取代 PageHero 的浅色编辑风变体，与产品页/效果图定稿一致。
 */
export default function PageHead({
  en,
  title,
  description,
}: {
  en: string
  title: string
  description?: string
}) {
  return (
    <section className="border-b border-border bg-white">
      <div className="container-wide pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-[3px] w-10 bg-accent" aria-hidden />
          <span className="en-caption text-sm text-muted">{en}</span>
        </div>
        <h1 className="font-serif-sc text-3xl font-bold leading-tight text-primary md:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        {description && <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{description}</p>}
      </div>
    </section>
  )
}
