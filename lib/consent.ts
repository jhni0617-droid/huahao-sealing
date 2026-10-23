/**
 * Cookie 同意状态（GDPR / UK GDPR / 瑞士 FADP）—— 全站唯一入口。
 *
 * 设计要点：
 * 1. 只管「分析」和「广告」两类非必要 Cookie；必要 Cookie（NEXT_LOCALE、登录态）不在管辖范围。
 * 2. 同意状态存 localStorage，键名带版本号，规则变化时改版本即可让旧同意失效。
 * 3. 是否弹窗由访客所在国家决定：只有 EEA 30 国 + 英国 + 瑞士需要前置同意。
 *    国家由 /api/geo 通过服务端请求头解析（Vercel 自带 x-vercel-ip-country），
 *    **不在 layout 里读 headers()** —— 那会让整站退化为动态渲染，牺牲静态化和 PSI。
 * 4. 状态变更用自定义事件广播，AnalyticsScripts 监听后决定是否加载像素。
 */

export const CONSENT_STORAGE_KEY = "hh_consent_v1"
export const CONSENT_CHANGE_EVENT = "hh:consent-change"
/** 页脚「Cookie 设置」按钮用它重新唤起横幅（GDPR 要求同意可随时撤回） */
export const CONSENT_OPEN_EVENT = "hh:consent-open"

export type ConsentRecord = {
  v: 1
  /** 分析类：GA4 / Microsoft Clarity / Web Vitals */
  analytics: boolean
  /** 广告类：Google Ads 转化与再营销、Meta Pixel */
  ads: boolean
  ts: number
}

export type ConsentChoice = Pick<ConsentRecord, "analytics" | "ads">

/**
 * 需要前置同意的司法辖区：
 * EEA = 欧盟 27 国 + 冰岛 / 列支敦士登 / 挪威；另加英国（UK GDPR）与瑞士（FADP）。
 */
const CONSENT_COUNTRIES = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
])

export function requiresConsent(country: string | null): boolean {
  if (!country) return false
  return CONSENT_COUNTRIES.has(country.toUpperCase())
}

/**
 * 兜底：国家识别失败时看浏览器时区。
 * 宁可对少数用欧洲时区的非欧访客多弹一次，也不能让欧洲访客在 API 抖动时被静默追踪。
 */
function looksLikeEuropeByTimezone(): boolean {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""
    if (tz.startsWith("Europe/")) return true
    return [
      "Atlantic/Canary",
      "Atlantic/Azores",
      "Atlantic/Madeira",
      "Atlantic/Faroe",
      "Atlantic/Reykjavik",
    ].includes(tz)
  } catch {
    return false
  }
}

/**
 * 最终判定：这个访客是否需要前置同意。
 * - 国家已知且不在辖区 → 不需要
 * - 国家已知且在辖区 → 需要
 * - 国家未知（API 失败/未部署在 Vercel）→ 用浏览器时区兜底
 */
export function needsConsentFor(country: string | null): boolean {
  if (country) return CONSENT_COUNTRIES.has(country.toUpperCase())
  return looksLikeEuropeByTimezone()
}

export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<ConsentRecord>
    if (parsed?.v !== 1) return null
    return {
      v: 1,
      analytics: Boolean(parsed.analytics),
      ads: Boolean(parsed.ads),
      ts: Number(parsed.ts) || 0,
    }
  } catch {
    return null
  }
}

export function saveConsent(choice: ConsentChoice): ConsentRecord {
  const record: ConsentRecord = {
    v: 1,
    analytics: Boolean(choice.analytics),
    ads: Boolean(choice.ads),
    ts: Date.now(),
  }
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record))
    } catch {
      /* 隐私模式下 localStorage 可能不可写，忽略即可 */
    }
    window.dispatchEvent(new CustomEvent<ConsentRecord>(CONSENT_CHANGE_EVENT, { detail: record }))
  }
  return record
}

export function clearConsent(): void {
  if (typeof window === "undefined") return
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY)
  } catch {
    /* 同上 */
  }
}

let countryPromise: Promise<string | null> | null = null

async function fetchCountryOnce(): Promise<string | null> {
  try {
    const res = await fetch("/api/geo", { cache: "no-store" })
    if (!res.ok) return null
    const data = (await res.json()) as { country?: string | null }
    const code = data?.country
    return typeof code === "string" && code.length === 2 ? code.toUpperCase() : null
  } catch {
    return null
  }
}

/**
 * 取访客国家码（ISO 3166-1 alpha-2）。同一页面生命周期内只请求一次。
 * 首次失败会隔 400ms 重试一次 —— 冷启动或移动网络抖动时的一次失败，
 * 不应让欧洲访客直接掉到「无同意即追踪」的分支。
 * 两次都失败返回 null，交由 needsConsentFor() 用时区兜底。
 */
export function getVisitorCountry(): Promise<string | null> {
  if (typeof window === "undefined") return Promise.resolve(null)
  if (!countryPromise) {
    countryPromise = (async () => {
      const first = await fetchCountryOnce()
      if (first) return first
      await new Promise((resolve) => setTimeout(resolve, 400))
      return fetchCountryOnce()
    })()
  }
  return countryPromise
}
