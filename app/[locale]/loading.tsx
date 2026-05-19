import { getTranslations } from "next-intl/server"

export default async function Loading() {
  const t = await getTranslations("loading")

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
        <p className="text-sm text-muted">{t("text")}</p>
      </div>
    </div>
  )
}
