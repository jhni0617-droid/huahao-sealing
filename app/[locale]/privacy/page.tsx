import { setRequestLocale } from "next-intl/server"
import Breadcrumb from "@/components/Breadcrumb"
import PageHead from "@/components/ui/PageHead"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import { privacyContent } from "@/lib/privacy-data"

/** 页面级简短描述（intro 太长，不适合放 meta description） */
const metaDescriptions: Record<string, string> = {
  zh: "华豪密封隐私政策：本站收集哪些数据、如何使用、与谁共享，以及你可以行使的权利和 Cookie 设置方式。",
  en: "Huahao Sealing privacy policy: what this website collects, how it is used, who it is shared with, your rights, and how to change your cookie settings.",
  vi: "Chính sách quyền riêng tư của Huahao Sealing: website thu thập gì, dùng thế nào, chia sẻ với ai, quyền của bạn và cách thay đổi cài đặt cookie.",
  th: "นโยบายความเป็นส่วนตัวของ Huahao Sealing: เว็บไซต์เก็บข้อมูลใด ใช้อย่างไร เปิดเผยต่อใคร สิทธิของคุณ และวิธีเปลี่ยนการตั้งค่าคุกกี้",
  ru: "Политика конфиденциальности Huahao Sealing: какие данные собирает сайт, как они используются, кому передаются, ваши права и настройки cookie.",
  ja: "華豪密封のプライバシーポリシー：取得する情報、利用目的、第三者提供、お客様の権利、Cookie 設定の変更方法について。",
  ko: "화하오 밀봉 개인정보 처리방침: 수집 항목, 이용 목적, 제3자 제공, 이용자의 권리, 쿠키 설정 변경 방법을 안내합니다.",
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const doc = getLocalized(privacyContent, locale)
  return generateMeta({
    title: doc.title,
    description: getLocalized(metaDescriptions, locale),
    path: "/privacy",
    locale,
  })
}

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }

/** 把 "- " 开头的连续条目聚成列表，其余作为段落，保持原顺序 */
function groupBlocks(blocks: string[]): Block[] {
  const out: Block[] = []
  for (const block of blocks) {
    if (block.startsWith("- ")) {
      const last = out[out.length - 1]
      if (last && last.type === "ul") last.items.push(block.slice(2))
      else out.push({ type: "ul", items: [block.slice(2)] })
    } else {
      out.push({ type: "p", text: block })
    }
  }
  return out
}

/** 只处理 **加粗** 与 `代码`；文案是仓库内静态内容，不存在外部输入 */
function inline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-primary">$1</strong>')
    .replace(
      /`([^`]+)`/g,
      '<code class="rounded bg-border-light px-1 py-0.5 font-mono text-[0.9em] text-primary">$1</code>',
    )
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  const doc = getLocalized(privacyContent, locale)

  return (
    <>
      <Breadcrumb items={[{ name: doc.title, url: "/privacy" }]} locale={locale} />
      <PageHead en="LEGAL · PRIVACY" title={doc.title} />

      <section className="bg-white pb-16 md:pb-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm leading-relaxed text-muted">{doc.intro}</p>
            <p className="mt-4 text-xs text-muted-light">
              {doc.updatedLabel}: {doc.updated}
            </p>

            {doc.sections.map((section) => (
              <section key={section.heading} className="mt-9">
                <h2 className="text-base font-bold text-primary md:text-lg">{section.heading}</h2>
                <div className="mt-3">
                  {groupBlocks(section.blocks).map((block, i) =>
                    block.type === "p" ? (
                      <p
                        key={i}
                        className="mb-3 text-sm leading-relaxed text-muted"
                        dangerouslySetInnerHTML={{ __html: inline(block.text) }}
                      />
                    ) : (
                      <ul key={i} className="mb-4 space-y-2 pl-5">
                        {block.items.map((item, j) => (
                          <li
                            key={j}
                            className="list-disc text-sm leading-relaxed text-muted"
                            dangerouslySetInnerHTML={{ __html: inline(item) }}
                          />
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </section>
            ))}

            <div className="mt-12 rounded-lg border border-border-light bg-[#fafafa] p-5 md:p-6">
              <h2 className="text-base font-bold text-primary md:text-lg">{doc.contactHeading}</h2>
              {doc.contactBlocks.map((block, i) => (
                <p
                  key={i}
                  className="mt-2 text-sm leading-relaxed text-muted"
                  dangerouslySetInnerHTML={{ __html: inline(block) }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
