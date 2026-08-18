import { Link } from "@/i18n/routing"
import { BreadcrumbJsonLd } from "@/components/JsonLd"
import { getLocalized } from "@/lib/locale-data"

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  locale: string
}

const homeLabels: Record<string, string> = {
  zh: "首页",
  en: "Home",
  vi: "Trang chủ",
  th: "หน้าแรก",
  ru: "Главная",
  ja: "ホーム",
  ko: "홈",
}

export default function Breadcrumb({ items, locale }: BreadcrumbProps) {
  const homeLabel = getLocalized(homeLabels, locale)
  const fullItems = [{ name: homeLabel, url: "" }, ...items]

  return (
    <>
      <BreadcrumbJsonLd items={fullItems} locale={locale} />
      <nav aria-label="Breadcrumb" className="container-wide pt-4 pb-2">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
          {fullItems.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && (
                <span className="text-muted/40 mx-1" aria-hidden="true">
                  /
                </span>
              )}
              {i === fullItems.length - 1 ? (
                <span className="font-medium text-primary">{item.name}</span>
              ) : (
                <Link href={item.url} className="hover:text-accent transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}