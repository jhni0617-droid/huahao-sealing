import { getLocale, getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"

export default async function NotFound() {
  const locale = await getLocale()
  const t = await getTranslations("notFound")

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl font-bold text-primary mb-2">{t("title")}</h2>
        <p className="text-muted mb-6">{t("description")}</p>
        <Link href="/" className="btn-primary inline-flex">{t("button")}</Link>
      </div>
    </div>
  )
}
