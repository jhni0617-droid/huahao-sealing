import { getLocale, getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { advantagesByLocale } from "@/lib/translations"
import { getLocalized } from "@/lib/locale-data"
import Reveal from "@/components/ui/Reveal"
import SectionHead from "@/components/ui/SectionHead"

const problemsData = {
  zh: [
    { title: "密封磨损、寿命短", description: "普通密封件使用几个月就开始磨损，频繁更换推高维护成本。每一次更换都意味着拆解设备、更换零件和生产线停机的损失。" },
    { title: "泄漏与环保风险", description: "密封失效导致介质泄漏，带来安全隐患、环保违规处罚和高昂的物料损失。一次密封故障就可能造成监管罚款。" },
    { title: "非计划停机损失", description: "密封故障引发的紧急停机打乱生产计划、延迟交货。每一次非计划停机都直接影响企业利润。" },
  ],
  en: [
    { title: "Seal Wear, Short Life", description: "Ordinary seals wear out within months. Frequent replacements drive up maintenance costs. Each replacement means equipment disassembly and production line downtime." },
    { title: "Leakage & Environmental Risk", description: "Seal failure causes media leakage, safety hazards, and environmental penalties. A single seal failure can result in regulatory fines." },
    { title: "Unplanned Downtime Loss", description: "Emergency shutdowns from seal failure disrupt production and delay deliveries. Every unplanned stoppage directly impacts your bottom line." },
  ],
  vi: [
    { title: "Mòn phớt, tuổi thọ ngắn", description: "Phớt thông thường bị mòn sau vài tháng. Thay thế thường xuyên làm tăng chi phí bảo trì. Mỗi lần thay có nghĩa là tháo thiết bị và ngừng dây chuyền sản xuất." },
    { title: "Rò rỉ & Rủi ro môi trường", description: "Phớt hỏng gây rò rỉ môi chất, dẫn đến nguy cơ an toàn, phạt vi phạm môi trường và tổn thất vật liệu lớn." },
    { title: "Tổn thất do ngừng máy ngoài kế hoạch", description: "Ngừng máy khẩn cấp do phớt hỏng làm gián đoạn sản xuất và chậm giao hàng. Mỗi lần ngừng máy ảnh hưởng trực tiếp đến lợi nhuận." },
  ],
  th: [
    { title: "การสึกหรอของซีล อายุสั้น", description: "ซีลทั่วไปสึกหรอภายในไม่กี่เดือน การเปลี่ยนบ่อยเพิ่มค่าบำรุงรักษา การเปลี่ยนแต่ละครั้งหมายถึงการถอดประกอบอุปกรณ์และหยุดสายการผลิต" },
    { title: "การรั่วไหลและความเสี่ยงด้านสิ่งแวดล้อม", description: "ซีลเสียทำให้ของเหลวรั่วไหล นำไปสู่ความเสี่ยงด้านความปลอดภัย ค่าปรับด้านสิ่งแวดล้อม และการสูญเสียวัสดุ" },
    { title: "การสูญเสียจากการหยุดผลิตโดยไม่ได้วางแผน", description: "การหยุดฉุกเฉินจากซีลเสียขัดขวางการผลิตและทำให้การส่งมอบล่าช้า ส่งผลกระทบโดยตรงต่อผลกำไร" },
  ],
  ru: [
    { title: "Износ уплотнения, короткий срок службы", description: "Обычные уплотнения изнашиваются за несколько месяцев. Частая замена увеличивает расходы на обслуживание. Каждая замена означает разборку оборудования и простой производства." },
    { title: "Утечка и экологический риск", description: "Отказ уплотнения приводит к утечке среды, создавая угрозу безопасности, экологические штрафы и потери материалов." },
    { title: "Потери от внеплановых простоев", description: "Аварийные остановки из-за отказа уплотнения нарушают производство и задерживают поставки. Каждый внеплановый простой напрямую влияет на прибыль." },
  ],
  ja: [
    { title: "シール摩耗、寿命が短い", description: "通常のシールは数ヶ月で摩耗します。頻繁な交換はメンテナンスコストを押し上げます。毎回の交換は装置の分解と生産ラインの停止を意味します。" },
    { title: "漏洩と環境リスク", description: "シール不良による媒体漏洩は、安全上の危険、環境違反罰金、および多大な材料損失を引き起こします。" },
    { title: "計画外ダウンタイムの損失", description: "シール不良による緊急停止は生産計画を乱し、納期を遅らせます。計画外の停止は利益に直接影響します。" },
  ],
  ko: [
    { title: "씰 마모, 짧은 수명", description: "일반 씰은 몇 개월 내에 마모됩니다. 빈번한 교체는 유지보수 비용을 증가시킵니다. 교체할 때마다 장비 분해와 생산라인 중단이 발생합니다." },
    { title: "누출 및 환경 위험", description: "씰 고장으로 인한 매체 누출은 안전 위험, 환경 위반 벌금 및 막대한 재료 손실을 초래합니다." },
    { title: "계획 외 가동 중단 손실", description: "씰 고장으로 인한 비상 정지는 생산 계획을 방해하고 납품을 지연시킵니다. 계획 외 중단은 이익에 직접적인 영향을 미칩니다." },
  ],
}

export default async function WhyCarbonGraphite() {
  const locale = await getLocale()
  const t = await getTranslations("home.whyCarbon")
  const problems = getLocalized(problemsData, locale)
  const items = getLocalized(advantagesByLocale, locale)

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHead en="Why Carbon Graphite" title={t("title")} description={t("description")} />

        <div className="grid gap-px border border-border bg-border lg:grid-cols-2">
          <Reveal>
          <div className="h-full bg-white p-5 md:p-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-6 w-[3px] bg-accent" aria-hidden />
              <h3 className="en-caption text-sm text-muted">{t("problemsTitle")}</h3>
            </div>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                <div className="border-l-2 border-l-accent bg-background p-4">
                  <h4 className="font-bold text-sm text-primary mb-1.5">{p.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{p.description}</p>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
          </Reveal>

          <Reveal delay={150}>
          <div className="h-full bg-white p-5 md:p-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-6 w-[3px] bg-accent" aria-hidden />
              <h3 className="en-caption text-sm text-muted">{t("solutionTitle")}</h3>
            </div>
            <div className="space-y-4">
              {items.map((adv, i) => (
                <Reveal key={adv.title} delay={i * 90}>
                <div className="border-l-2 border-l-accent bg-background p-4">
                  <h4 className="font-bold text-sm text-primary mb-1">{adv.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{adv.description}</p>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
          </Reveal>
        </div>

        <Reveal className="mt-14 grid gap-4 border border-border bg-background p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">{t("ctaTitle")}</h3>
            <p className="text-muted text-sm max-w-2xl leading-relaxed">{t("ctaDescription")}</p>
          </div>
          <Link href="/contact" className="btn-primary md:justify-self-end">{t("ctaButton")}</Link>
        </Reveal>
      </div>
    </section>
  )
}
