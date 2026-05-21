"use client"

import { useTranslations } from "next-intl"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations("errorPage")

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-primary mb-2">{t("title")}</h2>
        <p className="text-muted mb-6">{t("description")}</p>
        <button onClick={() => reset()} className="btn-primary">{t("button")}</button>
      </div>
    </div>
  )
}
