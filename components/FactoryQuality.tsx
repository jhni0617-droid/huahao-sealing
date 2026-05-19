import { getLocale, getTranslations } from "next-intl/server"
import ImageCarousel from "@/components/ui/ImageCarousel"
import CertBadge from "@/components/ui/CertBadge"
import Icon from "@/components/ui/Icon"
import { getLocalized } from "@/lib/locale-data"

const carouselImages = [
  { src: "/images/IMG_20260321_153130.jpg", alt: "Huahao Sealing Factory · Overview" },
  { src: "/images/实拍/IMG_20260517_193443.png", alt: "Huahao Sealing · Workshop" },
  { src: "/images/实拍/IMG_20260518_215113.png", alt: "Huahao Sealing · Production Equipment" },
  { src: "/images/实拍/file_00000000d5807206805d8fd791f071db.png", alt: "Huahao Sealing · Manufacturing" },
  { src: "/images/实拍/GPT Image 2_1776946246679_0.png", alt: "Huahao Sealing · Product Showcase" },
  { src: "/images/实拍/IMG_20260517_192804.png", alt: "Huahao Sealing · Processing" },
  { src: "/images/实拍/IMG_20260517_192907.png", alt: "Huahao Sealing · Workshop Detail" },
  { src: "/images/实拍/IMG_20260517_193309.png", alt: "Huahao Sealing · Machining" },
  { src: "/images/实拍/IMG_20260517_193327.png", alt: "Huahao Sealing · Quality Control" },
  { src: "/images/实拍/IMG_20260517_193418.jpg", alt: "Huahao Sealing · Facility" },
]

const capabilitiesData = {
  zh: [
    { label: "CNC加工中心", desc: "高精度自动化加工" },
    { label: "材料实验室", desc: "自主材料检测与研发" },
    { label: "质量检测", desc: "100%尺寸与性能检测" },
    { label: "定制方案", desc: "工程支持特殊需求" },
  ],
  en: [
    { label: "CNC Machining", desc: "High-precision automated machining" },
    { label: "Materials Lab", desc: "In-house material testing & R&D" },
    { label: "Quality Control", desc: "100% dimensional & performance testing" },
    { label: "Custom Solutions", desc: "Engineering support for special needs" },
  ],
  vi: [
    { label: "Gia công CNC", desc: "Gia công tự động độ chính xác cao" },
    { label: "Phòng thí nghiệm vật liệu", desc: "Kiểm tra & R&D vật liệu nội bộ" },
    { label: "Kiểm soát chất lượng", desc: "Kiểm tra kích thước & hiệu suất 100%" },
    { label: "Giải pháp tùy chỉnh", desc: "Hỗ trợ kỹ thuật cho nhu cầu đặc biệt" },
  ],
  th: [
    { label: "งานกลึง CNC", desc: "การตัดเฉือนอัตโนมัติความแม่นยำสูง" },
    { label: "ห้องปฏิบัติการวัสดุ", desc: "ทดสอบและวิจัยวัสดุภายในองค์กร" },
    { label: "ควบคุมคุณภาพ", desc: "ตรวจสอบมิติและประสิทธิภาพ 100%" },
    { label: "โซลูชันเฉพาะทาง", desc: "วิศวกรรมสนับสนุนความต้องการพิเศษ" },
  ],
  ru: [
    { label: "Обработка CNC", desc: "Высокоточная автоматическая обработка" },
    { label: "Лаборатория материалов", desc: "Внутренние испытания и разработка материалов" },
    { label: "Контроль качества", desc: "100% проверка размеров и производительности" },
    { label: "Индивидуальные решения", desc: "Инженерная поддержка специальных требований" },
  ],
  ja: [
    { label: "CNC加工", desc: "高精度自動加工" },
    { label: "材料ラボ", desc: "社内材料試験・研究開発" },
    { label: "品質管理", desc: "100%寸法・性能検査" },
    { label: "カスタムソリューション", desc: "特別なニーズへのエンジニアリング支援" },
  ],
  ko: [
    { label: "CNC 가공", desc: "고정밀 자동 가공" },
    { label: "재료 연구소", desc: "자체 재료 테스트 및 R&D" },
    { label: "품질 관리", desc: "100% 치수 및 성능 검사" },
    { label: "맞춤 솔루션", desc: "특수 요구사항에 대한 엔지니어링 지원" },
  ],
}

const statsData = {
  zh: [
    { value: "20+", label: "年行业经验" },
    { value: "1,000+", label: "服务客户" },
    { value: "15+", label: "出口国家" },
    { value: "200+", label: "定制方案" },
  ],
  en: [
    { value: "20+", label: "Years Experience" },
    { value: "1,000+", label: "Customers Served" },
    { value: "15+", label: "Export Countries" },
    { value: "200+", label: "Custom Solutions" },
  ],
  vi: [
    { value: "20+", label: "Năm Kinh Nghiệm" },
    { value: "1,000+", label: "Khách Hàng Đã Phục Vụ" },
    { value: "15+", label: "Quốc Gia Xuất Khẩu" },
    { value: "200+", label: "Giải Pháp Tùy Chỉnh" },
  ],
  th: [
    { value: "20+", label: "ปีแห่งประสบการณ์" },
    { value: "1,000+", label: "ลูกค้าที่ให้บริการ" },
    { value: "15+", label: "ประเทศที่ส่งออก" },
    { value: "200+", label: "โซลูชันที่กำหนดเอง" },
  ],
  ru: [
    { value: "20+", label: "Лет опыта" },
    { value: "1,000+", label: "Обслуженных клиентов" },
    { value: "15+", label: "Стран экспорта" },
    { value: "200+", label: "Индивидуальных решений" },
  ],
  ja: [
    { value: "20+", label: "年の経験" },
    { value: "1,000+", label: "顧客実績" },
    { value: "15+", label: "輸出国" },
    { value: "200+", label: "カスタムソリューション" },
  ],
  ko: [
    { value: "20+", label: "년 경험" },
    { value: "1,000+", label: "서비스 고객" },
    { value: "15+", label: "수출 국가" },
    { value: "200+", label: "맞춤 솔루션" },
  ],
}

const qcItemsData = {
  zh: [
    { icon: "thermometer", title: "三坐标测量", desc: "微米级尺寸精度检测" },
    { icon: "shield", title: "泄漏测试", desc: "气密性与压力测试" },
    { icon: "eye", title: "表面粗糙度", desc: "Ra 0.1μm 精密分析" },
    { icon: "gear", title: "硬度检测", desc: "材料硬度验证" },
  ],
  en: [
    { icon: "thermometer", title: "CMM Inspection", desc: "Micron-level dimensional check" },
    { icon: "shield", title: "Leak Test", desc: "Pressure & seal integrity test" },
    { icon: "eye", title: "Surface Roughness", desc: "Ra 0.1μm precision analysis" },
    { icon: "gear", title: "Hardness Check", desc: "Material hardness verification" },
  ],
  vi: [
    { icon: "thermometer", title: "Đo CMM", desc: "Kiểm tra kích thước micron" },
    { icon: "shield", title: "Kiểm tra rò rỉ", desc: "Kiểm tra áp suất & độ kín" },
    { icon: "eye", title: "Độ nhám bề mặt", desc: "Phân tích chính xác Ra 0.1μm" },
    { icon: "gear", title: "Kiểm tra độ cứng", desc: "Xác minh độ cứng vật liệu" },
  ],
  th: [
    { icon: "thermometer", title: "ตรวจสอบ CMM", desc: "ตรวจสอบมิติระดับไมครอน" },
    { icon: "shield", title: "ทดสอบการรั่ว", desc: "ทดสอบแรงดันและความสมบูรณ์ของซีล" },
    { icon: "eye", title: "ความหยาบผิว", desc: "วิเคราะห์ความแม่นยำ Ra 0.1μm" },
    { icon: "gear", title: "ตรวจสอบความแข็ง", desc: "ยืนยันความแข็งของวัสดุ" },
  ],
  ru: [
    { icon: "thermometer", title: "КИМ контроль", desc: "Микронная проверка размеров" },
    { icon: "shield", title: "Тест на утечку", desc: "Проверка давления и герметичности" },
    { icon: "eye", title: "Шероховатость поверхности", desc: "Точный анализ Ra 0,1 мкм" },
    { icon: "gear", title: "Проверка твердости", desc: "Подтверждение твердости материала" },
  ],
  ja: [
    { icon: "thermometer", title: "CMM測定", desc: "ミクロンレベルの寸法検査" },
    { icon: "shield", title: "漏れ試験", desc: "圧力・シール完全性テスト" },
    { icon: "eye", title: "表面粗さ", desc: "Ra 0.1μm 精密分析" },
    { icon: "gear", title: "硬度チェック", desc: "材料硬度検証" },
  ],
  ko: [
    { icon: "thermometer", title: "CMM 검사", desc: "미크론 단위 치수 검사" },
    { icon: "shield", title: "누출 테스트", desc: "압력 및 밀봉 무결성 테스트" },
    { icon: "eye", title: "표면 거칠기", desc: "Ra 0.1μm 정밀 분석" },
    { icon: "gear", title: "경도 검사", desc: "재료 경도 확인" },
  ],
}

export default async function FactoryQuality() {
  const locale = await getLocale()
  const t = await getTranslations("home.factory")
  const capabilities = getLocalized(capabilitiesData, locale)
  const stats = getLocalized(statsData, locale)
  const qcItems = getLocalized(qcItemsData, locale)

  return (
    <section className="bg-primary text-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`, backgroundSize: "40px 40px" }} />

      <div className="container-wide py-16 md:py-24">
        {/* Top: Carousel + Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageCarousel
              images={carouselImages}
              aspectRatio="4/3"
              variant="glass"
              autoPlay
              interval={5000}
              showDots={false}
            />
          </div>

          <div>
            <div className="badge-accent text-white/80 border-white/10 bg-white/5 mb-4">
              {t("tag")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {t("title")}
            </h2>
            <div className="w-14 h-0.5 bg-accent mb-6" />
            <p className="text-gray-400 leading-relaxed mb-8 text-base">
              {t("description")}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {capabilities.map((item) => (
                <div key={item.label} className="card-dark p-4">
                  <h3 className="font-semibold text-sm text-accent">{item.label}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.value} className="text-center p-3 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                  <div className="text-xl font-bold text-accent">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* QC Equipment strip */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-xs text-gray-500 tracking-[0.2em] uppercase">{getLocalized({ zh: "品控设备", en: "QC Equipment", vi: "Thiết bị QC", th: "อุปกรณ์ QC", ru: "Оборудование КК", ja: "品質管理設備", ko: "품질 관리 장비" }, locale)}</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {qcItems.map((qc) => (
              <div key={qc.title} className="card-dark p-5 text-center">
                <Icon name={qc.icon as any} className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="text-sm font-bold mb-1">{qc.title}</h3>
                <p className="text-xs text-gray-500">{qc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certification strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6 border-t border-white/[0.08]">
          <CertBadge locale={locale} />
        </div>
      </div>
    </section>
  )
}
