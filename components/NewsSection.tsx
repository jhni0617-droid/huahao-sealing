import Image from "next/image"
import { getLocale, getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { getLocalized } from "@/lib/locale-data"
import { blogPostsMeta } from "@/lib/blog-data"
import Reveal from "@/components/ui/Reveal"
import SectionRail, { HomeSection } from "@/components/home/SectionRail"

const railLabel = {
  zh: "公司新闻", en: "Company News", vi: "Tin công ty", th: "ข่าวบริษัท", ru: "Новости компании", ja: "会社ニュース", ko: "회사 소식",
}

const pinnedCovers: Record<string, string> = {
  "huahao-relocated-to-luan-2018": "/images/factory/company-plaque-2018.png",
  "cnc-machining-upgrade-2020": "/images/factory/cnc-turning-graphite.png",
  "self-built-factory-2021": "/images/factory/factory-aerial-2021.png",
}

export default async function NewsSection() {
  const locale = await getLocale()
  const t = await getTranslations("blog")
  const posts = blogPostsMeta.filter((p) => p.pinned).slice(0, 3)

  return (
    <HomeSection className="bg-background">
      <SectionRail locale={locale} index="02" label={getLocalized(railLabel, locale)} en="Company News" href="/blog" />

      <div className="min-w-0">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => {
            const cover = pinnedCovers[post.slug] ?? "/images/og-banner.jpg"
            return (
              <Reveal key={post.slug} delay={i * 80} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col bg-white transition-colors duration-300 hover:bg-[#fafafb]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background">
                    <Image
                      src={cover}
                      alt={getLocalized(post.title, locale)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2">
                      <span className="border border-accent/30 bg-accent/5 px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-accent">
                        {getLocalized({ zh: "公司动态", en: "News", vi: "Tin tức", th: "ข่าว", ru: "Новости", ja: "ニュース", ko: "뉴스" }, locale)}
                      </span>
                      <span className="text-[11px] text-muted">{post.date}</span>
                    </div>
                    <h3 className="mt-3 font-serif-sc text-lg font-bold leading-snug text-primary line-clamp-2 transition-colors group-hover:text-accent">
                      {getLocalized(post.title, locale)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
                      {getLocalized(post.excerpt, locale)}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-semibold text-accent">
                      {t("readMore")}
                      <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </HomeSection>
  )
}
