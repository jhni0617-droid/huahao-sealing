import { Link } from "@/i18n/routing"
import Icon from "@/components/ui/Icon"

interface HeroStat {
  value: string
  label: string
}

interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  stats?: HeroStat[]
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  stats,
  primaryLabel,
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref = "/products",
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container-wide relative py-16 md:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
          <div className="max-w-3xl">
            {eyebrow && (
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-8 w-[3px] bg-accent" aria-hidden />
                <span className="en-caption text-xs sm:text-sm text-white/85">{eyebrow}</span>
              </div>
            )}
            <h1 className="font-serif-sc text-4xl font-bold leading-tight md:text-5xl lg:text-[3.4rem]">{title}</h1>
            <div className="industrial-divider" />
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">{subtitle}</p>
            {(primaryLabel || secondaryLabel) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryLabel && (
                  <Link href={primaryHref} className="btn-primary">
                    {primaryLabel}
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Link>
                )}
                {secondaryLabel && (
                  <Link href={secondaryHref} className="btn-ghost">
                    {secondaryLabel}
                  </Link>
                )}
              </div>
            )}
          </div>

          {stats && stats.length > 0 && (
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {stats.map((stat) => (
                <div key={`${stat.value}-${stat.label}`} className="min-w-0">
                  <div className="text-2xl font-bold text-white md:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
