import { getLocale } from "next-intl/server"
import { redirect } from "@/i18n/routing"

export default async function DownloadPage() {
  const locale = await getLocale()
  redirect({ href: "/contact", locale })
}