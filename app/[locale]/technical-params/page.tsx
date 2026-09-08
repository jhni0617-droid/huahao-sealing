import { setRequestLocale } from "next-intl/server"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import { technicalData } from "@/lib/technical-data"
import { FaqJsonLd } from "@/components/JsonLd"
import Breadcrumb from "@/components/Breadcrumb"
import CTASection from "@/components/CTASection"
import PageHead from "@/components/ui/PageHead"
import StatsRow from "@/components/ui/StatsRow"
import FAQAccordion from "@/components/FAQAccordion"

interface Props {
  params: Promise<{ locale: string }>
}

const pageCopy = {
  zh: {
    eyebrow: "技术参数",
    title: "碳石墨材料技术参数参考",
    subtitle: "6 个主流碳石墨牌号的工程参数速查：耐温、耐压、转速、抗压强度、抗折强度、导热系数与应用场景，辅助密封与轴承选材。",
    home: "首页",
    operatingLimits: "工况极限参数",
    mechanicalProps: "力学与导热性能",
    applications: "典型应用场景",
    physicalProps: "通用物理性能",
    faq: "常见问题",
    colGrade: "牌号",
    colType: "类型",
    colTemp: "最高耐温",
    colPressure: "最高压力",
    colSpeed: "最高线速度",
    colCompressive: "抗压强度",
    colFlexural: "抗折强度",
    colThermal: "导热系数",
    colProperty: "性能",
    colValue: "数值",
    statGrades: "材料牌号",
    statMaxTemp: "最高耐温",
    statCarbon: "碳含量",
    primaryLabel: "获取选型建议",
    secondaryLabel: "查看产品",
  },
  en: {
    eyebrow: "Technical Parameters",
    title: "Carbon Graphite Material Technical Parameters Reference",
    subtitle: "Engineering data for 6 mainstream carbon graphite grades: temperature, pressure, speed, compressive and flexural strength, thermal conductivity, and applications to guide seal and bearing selection.",
    home: "Home",
    operatingLimits: "Operating Limit Parameters",
    mechanicalProps: "Mechanical & Thermal Properties",
    applications: "Typical Applications",
    physicalProps: "General Physical Properties",
    faq: "FAQ",
    colGrade: "Grade",
    colType: "Type",
    colTemp: "Max Temp",
    colPressure: "Max Pressure",
    colSpeed: "Max Speed",
    colCompressive: "Compressive Strength",
    colFlexural: "Flexural Strength",
    colThermal: "Thermal Conductivity",
    colProperty: "Property",
    colValue: "Value",
    statGrades: "Grades",
    statMaxTemp: "Max Temp",
    statCarbon: "Carbon",
    primaryLabel: "Get Selection Advice",
    secondaryLabel: "View Products",
  },
  vi: {
    eyebrow: "Thông số kỹ thuật",
    title: "Tham số kỹ thuật vật liệu than chì carbon",
    subtitle: "Dữ liệu kỹ thuật 6 mác than chì carbon chính: nhiệt độ, áp suất, tốc độ, cường độ nén/uốn, dẫn nhiệt và ứng dụng để hướng dẫn chọn kín và vòng bi.",
    home: "Trang chủ",
    operatingLimits: "Thông số giới hạn",
    mechanicalProps: "Cơ học và dẫn nhiệt",
    applications: "Ứng dụng điển hình",
    physicalProps: "Tính chất vật lý chung",
    faq: "FAQ",
    colGrade: "Mác",
    colType: "Loại",
    colTemp: "Nhiệt độ tối đa",
    colPressure: "Áp suất tối đa",
    colSpeed: "Tốc độ tối đa",
    colCompressive: "Cường độ nén",
    colFlexural: "Cường độ uốn",
    colThermal: "Dẫn nhiệt",
    colProperty: "Thông số",
    colValue: "Giá trị",
    statGrades: "Mác vật liệu",
    statMaxTemp: "Nhiệt độ tối đa",
    statCarbon: "Hàm lượng C",
    primaryLabel: "Nhận tư vấn chọn",
    secondaryLabel: "Xem sản phẩm",
  },
  th: {
    eyebrow: "พารามิเตอร์ทางเทคนิค",
    title: "ข้อมูลพารามิเตอร์ทางเทคนิควัสดุคาร์บอนกราไฟต์",
    subtitle: "ข้อมูลวิศวกรรม 6 เกรดคาร์บอนกราไฟต์หลัก: อุณหภูมิ ความดัน ความเร็ว กำลังอัด/ดัด การนำความร้อน และการใช้งาน เพื่อแนะนำการเลือกซีลและแบริ่ง",
    home: "หน้าแรก",
    operatingLimits: "พารามิเตอร์ขีดจำกัด",
    mechanicalProps: "คุณสมบัติกลและนำความร้อน",
    applications: "การใช้งานทั่วไป",
    physicalProps: "คุณสมบัติทางกายภาพทั่วไป",
    faq: "FAQ",
    colGrade: "เกรด",
    colType: "ชนิด",
    colTemp: "อุณหภูมิสูงสุด",
    colPressure: "ความดันสูงสุด",
    colSpeed: "ความเร็วสูงสุด",
    colCompressive: "กำลังอัด",
    colFlexural: "กำลังดัด",
    colThermal: "การนำความร้อน",
    colProperty: "คุณสมบัติ",
    colValue: "ค่า",
    statGrades: "เกรดวัสดุ",
    statMaxTemp: "อุณหภูมิสูงสุด",
    statCarbon: "ปริมาณคาร์บอน",
    primaryLabel: "รับคำแนะนำเลือก",
    secondaryLabel: "ดูสินค้า",
  },
  ru: {
    eyebrow: "Технические параметры",
    title: "Справочник технических параметров углеграфитовых материалов",
    subtitle: "Инженерные данные 6 основных марок углеграфита: температура, давление, скорость, прочность на сжатие/изгиб, теплопроводность и применения для выбора уплотнений и подшипников.",
    home: "Главная",
    operatingLimits: "Предельные параметры",
    mechanicalProps: "Механические и тепловые свойства",
    applications: "Типовые применения",
    physicalProps: "Общие физические свойства",
    faq: "FAQ",
    colGrade: "Марка",
    colType: "Тип",
    colTemp: "Макс. температура",
    colPressure: "Макс. давление",
    colSpeed: "Макс. скорость",
    colCompressive: "Прочность на сжатие",
    colFlexural: "Прочность на изгиб",
    colThermal: "Теплопроводность",
    colProperty: "Свойство",
    colValue: "Значение",
    statGrades: "Марки",
    statMaxTemp: "Макс. температура",
    statCarbon: "Углерод",
    primaryLabel: "Получить консультацию",
    secondaryLabel: "Смотреть продукты",
  },
  ja: {
    eyebrow: "技術パラメータ",
    title: "カーボングラファイト材料技術パラメータリファレンス",
    subtitle: "6つの主要カーボングラファイト銘柄のエンジニアリングデータ：耐温・耐圧・速度・圧縮/曲げ強さ・熱伝導率・用途でシールとベアリングの選定を支援。",
    home: "ホーム",
    operatingLimits: "使用限界パラメータ",
    mechanicalProps: "機械的・熱的特性",
    applications: "典型用途",
    physicalProps: "一般物理特性",
    faq: "FAQ",
    colGrade: "銘柄",
    colType: "タイプ",
    colTemp: "最高耐温",
    colPressure: "最高圧力",
    colSpeed: "最高速度",
    colCompressive: "圧縮強さ",
    colFlexural: "曲げ強さ",
    colThermal: "熱伝導率",
    colProperty: "特性",
    colValue: "値",
    statGrades: "材料銘柄",
    statMaxTemp: "最高耐温",
    statCarbon: "炭素含有量",
    primaryLabel: "選定アドバイスを取得",
    secondaryLabel: "製品を見る",
  },
  ko: {
    eyebrow: "기술 매개변수",
    title: "카본 그라파이트 재료 기술 매개변수 참조",
    subtitle: "6개 주요 카본 그라파이트 등급의 엔지니어링 데이터: 내온·내압·속도·압축/굽힘 강도·열전도율·적용으로 씰과 베어링 선택을 안내.",
    home: "홈",
    operatingLimits: "사용 한계 매개변수",
    mechanicalProps: "기계적 및 열적 특성",
    applications: "일반적 응용",
    physicalProps: "일반 물리적 특성",
    faq: "FAQ",
    colGrade: "등급",
    colType: "유형",
    colTemp: "최대 온도",
    colPressure: "최대 압력",
    colSpeed: "최대 속도",
    colCompressive: "압축 강도",
    colFlexural: "굽힘 강도",
    colThermal: "열전도율",
    colProperty: "특성",
    colValue: "값",
    statGrades: "재료 등급",
    statMaxTemp: "최대 온도",
    statCarbon: "탄소 함량",
    primaryLabel: "선택 조언 받기",
    secondaryLabel: "제품 보기",
  },
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const copy = getLocalized(pageCopy, locale)
  return generateMeta({
    title: copy.title,
    description: copy.subtitle,
    path: "/technical-params",
    locale,
  })
}

export default async function TechnicalParamsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const copy = getLocalized(pageCopy, locale)
  const faqItems = getLocalized(technicalData.faq, locale)
  const propsTitle = getLocalized(technicalData.materialProperties.title, locale)

  return (
    <>
      <FaqJsonLd questions={faqItems.map((f) => ({ q: f.q, a: f.a }))} />
      <Breadcrumb items={[{ name: copy.title, url: "/technical-params" }]} locale={locale} />

      <PageHead en={copy.eyebrow} title={copy.title} description={copy.subtitle} />

      <StatsRow
        items={[
          { value: String(technicalData.grades.length), label: copy.statGrades },
          { value: "600°C", label: copy.statMaxTemp },
          { value: "99.9%", label: copy.statCarbon },
        ]}
      />

      <section className="section-padding-sm bg-white">
        <div className="container-wide">
          {/* 工况极限参数表 */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-accent" aria-hidden />
            <span className="en-caption text-sm text-muted">{copy.operatingLimits}</span>
          </div>
          <div className="overflow-x-auto border border-border bg-white">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  {[copy.colGrade, copy.colType, copy.colTemp, copy.colPressure, copy.colSpeed].map((label) => (
                    <th key={label} className="whitespace-nowrap px-4 py-3 text-xs font-bold uppercase tracking-[0.06em]">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {technicalData.grades.map((g, i) => (
                  <tr key={g.grade} className={`border-t border-border ${i % 2 === 1 ? "bg-[#f7f8f9]" : "bg-white"}`}>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className="flex items-center gap-2">
                        {g.grade === "M106D" && <span className="h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />}
                        <span className="font-mono font-bold text-primary">{g.grade}</span>
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs leading-relaxed text-muted">{g.type}</td>
                    <td className={`whitespace-nowrap px-4 py-3 font-mono ${g.grade === "M106D" ? "font-bold text-accent" : "text-primary"}`}>{g.tempMax}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-primary">{g.pressureMax}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-primary">{g.speedMax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 力学与导热性能表 */}
          <div className="mb-4 mt-12 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-accent" aria-hidden />
            <span className="en-caption text-sm text-muted">{copy.mechanicalProps}</span>
          </div>
          <div className="overflow-x-auto border border-border bg-white">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-left text-white">
                  {[copy.colGrade, copy.colCompressive, copy.colFlexural, copy.colThermal].map((label) => (
                    <th key={label} className="whitespace-nowrap px-4 py-3 text-xs font-bold uppercase tracking-[0.06em]">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {technicalData.grades.map((g, i) => (
                  <tr key={g.grade} className={`border-t border-border ${i % 2 === 1 ? "bg-[#f7f8f9]" : "bg-white"}`}>
                    <td className="whitespace-nowrap px-4 py-3 font-mono font-bold text-primary">{g.grade}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-primary">{g.compressiveStrength}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-primary">{g.flexuralStrength}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-primary">{g.thermalConductivity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 典型应用场景 */}
      <section className="section-padding-sm industrial-surface">
        <div className="container-wide">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-accent" aria-hidden />
            <span className="en-caption text-sm text-muted">{copy.applications}</span>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {technicalData.grades.map((g) => (
              <div key={g.grade} className="bg-white p-6">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono font-bold text-primary">{g.grade}</span>
                  <span className="text-xs text-muted">{g.type}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{getLocalized(g.applications, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 通用物理性能表 */}
      <section className="section-padding-sm bg-white">
        <div className="container-wide">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-accent" aria-hidden />
            <span className="en-caption text-sm text-muted">{copy.physicalProps}</span>
          </div>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {technicalData.materialProperties.properties.map((p) => (
              <div key={p.name} className="bg-white p-5">
                <div className="text-xs leading-relaxed text-muted">{p.name}</div>
                <div className="mt-2 font-mono text-lg font-bold text-primary">
                  {p.value}
                  <span className="ml-1 text-xs font-semibold text-muted">{p.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding-sm industrial-surface">
        <div className="container-wide max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-accent" aria-hidden />
            <span className="en-caption text-sm text-muted">{copy.faq}</span>
          </div>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <FAQAccordion key={i} title={item.q}>
                <p className="text-sm text-muted leading-relaxed">{item.a}</p>
              </FAQAccordion>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}