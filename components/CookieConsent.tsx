"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useLocale } from "next-intl"
import { Link } from "@/i18n/routing"
import { getLocalized } from "@/lib/locale-data"
import {
  CONSENT_OPEN_EVENT,
  getVisitorCountry,
  readConsent,
  needsConsentFor,
  saveConsent,
  type ConsentChoice,
} from "@/lib/consent"

/**
 * Cookie 同意横幅。
 *
 * 只在需要前置同意的辖区（EEA / 英国 / 瑞士）出现，其余地区不弹 ——
 * B2B 询价站的首屏被横幅挡住，转化损失是实打实的，不该为东南亚、中东客户承担欧洲的合规成本。
 * 本地预览：URL 加 ?consent=demo 可强制显示。
 */

const copy = {
  zh: {
    title: "我们重视您的隐私",
    desc: "我们使用 Cookie 保障网站基本功能，并在征得同意的前提下分析流量、衡量广告效果。您可以接受全部、仅保留必要项，或自行选择。",
    necessary: "必要 Cookie（始终启用）",
    necessaryNote: "记住语言偏好等基础设置，网站运行所必需。",
    analytics: "分析",
    analyticsNote: "了解访客如何使用网站，用于改进页面内容。",
    ads: "广告",
    adsNote: "衡量广告效果并优化投放，不影响您看到的价格。",
    acceptAll: "接受全部",
    rejectAll: "仅必要项",
    customize: "自定义",
    save: "保存选择",
    policy: "隐私政策",
  },
  en: {
    title: "We value your privacy",
    desc: "We use cookies to keep this site working and, with your consent, to measure traffic and advertising performance. You can accept all, reject non-essential cookies, or choose what to allow.",
    necessary: "Necessary cookies (always on)",
    necessaryNote: "Remember language and basic settings — required for the site to work.",
    analytics: "Analytics",
    analyticsNote: "Helps us understand how visitors use the site so we can improve it.",
    ads: "Advertising",
    adsNote: "Measures ad performance and improves targeting. Does not change the prices you see.",
    acceptAll: "Accept all",
    rejectAll: "Essential only",
    customize: "Customize",
    save: "Save choices",
    policy: "Privacy Policy",
  },
  vi: {
    title: "Chúng tôi tôn trọng quyền riêng tư của bạn",
    desc: "Chúng tôi dùng cookie để đảm bảo trang hoạt động và, khi bạn đồng ý, để đo lưu lượng truy cập và hiệu quả quảng cáo. Bạn có thể chấp nhận tất cả, từ chối cookie không cần thiết, hoặc tự chọn.",
    necessary: "Cookie cần thiết (luôn bật)",
    necessaryNote: "Ghi nhớ ngôn ngữ và các thiết lập cơ bản, cần cho trang hoạt động.",
    analytics: "Phân tích",
    analyticsNote: "Hiểu cách khách truy cập dùng trang để cải thiện nội dung.",
    ads: "Quảng cáo",
    adsNote: "Đo lường hiệu quả quảng cáo. Không ảnh hưởng đến giá bạn thấy.",
    acceptAll: "Chấp nhận tất cả",
    rejectAll: "Chỉ cần thiết",
    customize: "Tùy chỉnh",
    save: "Lưu lựa chọn",
    policy: "Chính sách quyền riêng tư",
  },
  th: {
    title: "เราให้ความสำคัญกับความเป็นส่วนตัวของคุณ",
    desc: "เราใช้คุกกี้เพื่อให้เว็บไซต์ทำงานได้ และเมื่อคุณยินยอม เพื่อวัดปริมาณการเข้าชมและประสิทธิภาพโฆษณา คุณสามารถยอมรับทั้งหมด ปฏิเสธคุกกี้ที่ไม่จำเป็น หรือเลือกเองได้",
    necessary: "คุกกี้ที่จำเป็น (เปิดเสมอ)",
    necessaryNote: "จดจำภาษาและการตั้งค่าพื้นฐาน จำเป็นต่อการทำงานของเว็บไซต์",
    analytics: "การวิเคราะห์",
    analyticsNote: "เข้าใจว่าผู้เยี่ยมชมใช้เว็บไซต์อย่างไร เพื่อปรับปรุงเนื้อหา",
    ads: "โฆษณา",
    adsNote: "วัดผลโฆษณา ไม่กระทบราคาที่คุณเห็น",
    acceptAll: "ยอมรับทั้งหมด",
    rejectAll: "เฉพาะที่จำเป็น",
    customize: "ตั้งค่าเอง",
    save: "บันทึกตัวเลือก",
    policy: "นโยบายความเป็นส่วนตัว",
  },
  ru: {
    title: "Мы уважаем вашу конфиденциальность",
    desc: "Мы используем cookie для работы сайта, а с вашего согласия — для анализа трафика и эффективности рекламы. Вы можете принять все, отклонить необязательные или настроить самостоятельно.",
    necessary: "Необходимые cookie (всегда включены)",
    necessaryNote: "Запоминают язык и базовые настройки, без них сайт не работает.",
    analytics: "Аналитика",
    analyticsNote: "Помогает понять, как посетители используют сайт, чтобы улучшать страницы.",
    ads: "Реклама",
    adsNote: "Измеряет эффективность рекламы и не влияет на цены, которые вы видите.",
    acceptAll: "Принять все",
    rejectAll: "Только необходимые",
    customize: "Настроить",
    save: "Сохранить выбор",
    policy: "Политика конфиденциальности",
  },
  ja: {
    title: "プライバシーを尊重します",
    desc: "当サイトは、サイトの動作のために、また同意いただいた場合にはアクセス解析と広告効果の測定のために Cookie を使用します。すべて許可する、必須以外を拒否する、個別に選択する、いずれも可能です。",
    necessary: "必須 Cookie（常に有効）",
    necessaryNote: "言語設定などの基本機能を記憶します。サイトの動作に必要です。",
    analytics: "分析",
    analyticsNote: "閲覧状況を把握し、ページ改善に役立てます。",
    ads: "広告",
    adsNote: "広告効果を測定します。表示価格には影響しません。",
    acceptAll: "すべて許可",
    rejectAll: "必須のみ",
    customize: "個別に設定",
    save: "選択を保存",
    policy: "プライバシーポリシー",
  },
  ko: {
    title: "개인정보를 소중히 여깁니다",
    desc: "당사는 사이트 운영을 위해, 그리고 동의하신 경우 트래픽 분석과 광고 성과 측정을 위해 쿠키를 사용합니다. 모두 허용하거나, 필수 항목 외 거부하거나, 직접 선택할 수 있습니다.",
    necessary: "필수 쿠키 (항상 사용)",
    necessaryNote: "언어 설정 등 기본 기능을 기억합니다. 사이트 운영에 필요합니다.",
    analytics: "분석",
    analyticsNote: "방문자가 사이트를 어떻게 이용하는지 파악해 페이지를 개선합니다.",
    ads: "광고",
    adsNote: "광고 성과를 측정하며, 표시되는 가격에는 영향을 주지 않습니다.",
    acceptAll: "모두 허용",
    rejectAll: "필수만 허용",
    customize: "직접 설정",
    save: "선택 저장",
    policy: "개인정보 처리방침",
  },
}

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: (next: boolean) => void
  label: string
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
        checked ? "bg-accent" : "bg-muted-light"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  )
}

export default function CookieConsent() {
  const locale = useLocale()
  const t = getLocalized(copy, locale)

  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)
  // 惰性初始化读取本地已保存的选择，避免在 effect 里同步 setState
  const [initialConsent] = useState(() => readConsent())
  const [analytics, setAnalytics] = useState(initialConsent?.analytics ?? true)
  const [ads, setAds] = useState(initialConsent?.ads ?? true)

  // 首次判定：已选择过就不再打扰；未选择则先问国家，只在管辖区显示
  useEffect(() => {
    if (initialConsent) return

    let cancelled = false
    const forced = new URLSearchParams(window.location.search).get("consent") === "demo"
    getVisitorCountry().then((country) => {
      if (cancelled) return
      if (forced || needsConsentFor(country)) setVisible(true)
    })
    return () => {
      cancelled = true
    }
  }, [initialConsent])

  // 页脚的「Cookie 设置」按钮通过这个事件重新唤起横幅
  useEffect(() => {
    const open = () => {
      const saved = readConsent()
      setAnalytics(saved ? saved.analytics : true)
      setAds(saved ? saved.ads : true)
      setExpanded(true)
      setVisible(true)
    }
    window.addEventListener(CONSENT_OPEN_EVENT, open)
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open)
  }, [])

  const decide = useCallback((choice: ConsentChoice) => {
    saveConsent(choice)
    setVisible(false)
    setExpanded(false)
  }, [])

  /**
   * 横幅出现时把自身高度写进 CSS 变量 --consent-offset，
   * 移动端底部询盘栏（FloatingCTA）据此上移，避免被遮死 —— 欧洲访客不点横幅就看不到询盘按钮，
   * 那才是最贵的合规成本。
   */
  useEffect(() => {
    const root = document.documentElement
    const el = bannerRef.current
    if (!visible || !el) {
      root.style.setProperty("--consent-offset", "0px")
      return
    }
    const sync = () => root.style.setProperty("--consent-offset", `${el.offsetHeight}px`)
    sync()
    const observer = new ResizeObserver(sync)
    observer.observe(el)
    return () => {
      observer.disconnect()
      root.style.setProperty("--consent-offset", "0px")
    }
  }, [visible, expanded])

  if (!visible) return null

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-modal="false"
      aria-label={t.title}
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-white shadow-[0_-6px_24px_rgba(0,0,0,0.10)]"
    >
      <div className="mx-auto w-full max-w-5xl px-4 py-3.5 sm:px-6 sm:py-5">
        <p className="text-sm font-bold text-primary sm:text-base">{t.title}</p>
        <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
          {t.desc}{" "}
          <Link
            href="/privacy"
            className="whitespace-nowrap text-accent underline underline-offset-2 hover:text-accent-hover"
          >
            {t.policy}
          </Link>
        </p>

        {expanded && (
          <div className="mt-4 space-y-3 rounded-lg border border-border-light bg-[#fafafa] p-3.5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[13px] font-semibold text-primary">{t.necessary}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted">{t.necessaryNote}</p>
              </div>
              <span className="mt-0.5 shrink-0 rounded bg-border-light px-2 py-0.5 text-[11px] font-medium text-muted">
                {locale === "zh" ? "开启" : locale === "ja" ? "有効" : locale === "ko" ? "사용" : "On"}
              </span>
            </div>

            <div className="flex items-start justify-between gap-3 border-t border-border-light pt-3">
              <div>
                <p className="text-[13px] font-semibold text-primary">{t.analytics}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted">{t.analyticsNote}</p>
              </div>
              <Toggle checked={analytics} onChange={setAnalytics} label={t.analytics} />
            </div>

            <div className="flex items-start justify-between gap-3 border-t border-border-light pt-3">
              <div>
                <p className="text-[13px] font-semibold text-primary">{t.ads}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted">{t.adsNote}</p>
              </div>
              <Toggle checked={ads} onChange={setAds} label={t.ads} />
            </div>
          </div>
        )}

        <div className="mt-3.5 grid grid-cols-2 gap-2 sm:mt-4 sm:flex sm:flex-wrap sm:items-center sm:justify-end">
          {expanded ? (
            <>
              <button
                type="button"
                onClick={() => decide({ analytics, ads })}
                className="col-span-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:col-auto sm:w-auto"
              >
                {t.save}
              </button>
              <button
                type="button"
                onClick={() => decide({ analytics: false, ads: false })}
                className="col-span-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-muted-light sm:col-auto sm:w-auto"
              >
                {t.rejectAll}
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="order-3 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-muted-light sm:order-1 sm:w-auto"
              >
                {t.customize}
              </button>
              <button
                type="button"
                onClick={() => decide({ analytics: false, ads: false })}
                className="order-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-muted-light sm:w-auto"
              >
                {t.rejectAll}
              </button>
              <button
                type="button"
                onClick={() => decide({ analytics: true, ads: true })}
                className="order-1 col-span-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:order-3 sm:col-auto sm:w-auto"
              >
                {t.acceptAll}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
