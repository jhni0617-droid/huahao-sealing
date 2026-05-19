import Icon, { type IconName } from "./Icon"
import { getLocalized } from "@/lib/locale-data"

interface Cert {
  name: string
  enName: string
  icon: IconName
}

const certs: Cert[] = [
  { name: "ISO 9001 认证", enName: "ISO 9001 Certified", icon: "shield" },
  { name: "DNV 船级社", enName: "DNV Marine Approved", icon: "shield" },
  { name: "FDA 食品接触", enName: "FDA Food Contact", icon: "check" },
  { name: "REACH 合规", enName: "REACH Compliant", icon: "globe" },
  { name: "RoHS 认证", enName: "RoHS Certified", icon: "file-text" },
]

interface CertBadgeProps {
  locale: string
}

export default function CertBadge({ locale }: CertBadgeProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {certs.map((cert) => (
        <div key={cert.name} className="flex items-center gap-2 px-3 py-1.5 bg-accent/5 border border-accent/10 rounded-xl">
          <Icon name={cert.icon} className="w-4 h-4 text-accent" />
          <span className="text-xs font-medium text-accent">{getLocalized({ zh: cert.name, en: cert.enName, vi: cert.enName, th: cert.enName, ru: cert.enName, ja: cert.enName, ko: cert.enName }, locale)}</span>
        </div>
      ))}
    </div>
  )
}
