import Image from "next/image"
import { getLocale, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import PageHero from "@/components/PageHero"
import CTASection from "@/components/CTASection"
import Icon, { type IconName } from "@/components/ui/Icon"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"

const content = {
  zh: {
    metaTitle: "工厂实力",
    metaDescription: "华豪密封碳石墨密封件工厂能力、CNC加工、浸渍工艺、质量检测与OEM定制能力。",
    eyebrow: "工厂实力",
    title: "从材料、加工到检测的完整制造能力",
    subtitle:
      "华豪密封面向泵、机械密封、化工设备和OEM客户，提供碳石墨密封环、石墨轴套、石墨轴承及三瓣环的批量制造与按图加工。",
    primary: "提交图纸询价",
    secondary: "查看产品目录",
    stats: [
      { value: "20+", label: "行业经验" },
      { value: "CNC", label: "精密加工" },
      { value: "24h", label: "工程响应" },
    ],
    evidenceKicker: "制造证据链",
    evidenceTitle: "采购商需要看到的，不只是产品图",
    evidenceText:
      "欧美工业采购更关注稳定交付、质量控制和工程沟通。页面将工厂能力拆成可验证的流程：材料选择、浸渍工艺、精密加工、终检与出口包装。",
    capabilities: [
      { icon: "chemical", title: "材料与浸渍", desc: "树脂、锑、铜等浸渍方案，按介质、温度、压力选择材料牌号。" },
      { icon: "gear", title: "精密加工", desc: "CNC车削、内外径加工、端面研磨、开槽和异形定制。" },
      { icon: "shield", title: "质量控制", desc: "尺寸、端面、外观、硬度和关键工况参数出厂前确认。" },
      { icon: "file-text", title: "OEM协作", desc: "支持图纸、样品、批量规格、替代型号和长期供货项目。" },
    ],
    processTitle: "制造流程",
    process: [
      ["01", "工况评估", "确认介质、温度、压力、转速、配对材料和安装尺寸。"],
      ["02", "材料匹配", "根据磨损、腐蚀、干运转或水下工况选择碳石墨与浸渍工艺。"],
      ["03", "精密加工", "按图纸加工内外径、高度、端面、槽口、孔位和特殊结构。"],
      ["04", "检测出厂", "完成尺寸检查、端面检查、外观确认和包装标识。"],
    ],
    galleryTitle: "工厂与产品实拍",
    qcTitle: "质量控制重点",
    qc: [
      "关键尺寸与公差记录",
      "端面平整度和外观检查",
      "材料牌号与工艺批次追踪",
      "包装标签与出口运输保护",
    ],
  },
  en: {
    metaTitle: "Factory",
    metaDescription:
      "Huahao Sealing factory capability for carbon graphite seals, CNC machining, impregnation process, quality inspection, and OEM custom manufacturing.",
    eyebrow: "Factory capability",
    title: "Integrated manufacturing from material to inspection",
    subtitle:
      "Huahao Sealing manufactures carbon graphite seal rings, bushings, bearings, and split rings for pumps, mechanical seals, chemical equipment, and OEM programs.",
    primary: "Send Drawing / Quote",
    secondary: "View Product Catalog",
    stats: [
      { value: "20+", label: "Years experience" },
      { value: "CNC", label: "Precision machining" },
      { value: "24h", label: "Engineering response" },
    ],
    evidenceKicker: "Manufacturing evidence",
    evidenceTitle: "Industrial buyers need more than product photos",
    evidenceText:
      "European and North American buyers look for stable supply, quality control, and engineering communication. This page shows a verifiable chain: material selection, impregnation, precision machining, final inspection, and export packing.",
    capabilities: [
      { icon: "chemical", title: "Material & impregnation", desc: "Resin, antimony, copper and other grades selected by media, temperature, pressure, and duty." },
      { icon: "gear", title: "Precision machining", desc: "CNC turning, I.D./O.D. machining, face lapping, grooving, holes, and custom profiles." },
      { icon: "shield", title: "Quality control", desc: "Dimensional, face, visual, hardness, and application-critical checks before shipment." },
      { icon: "file-text", title: "OEM collaboration", desc: "Drawings, samples, batch specs, replacement models, and long-term supply programs." },
    ],
    processTitle: "Manufacturing flow",
    process: [
      ["01", "Duty review", "Confirm media, temperature, pressure, speed, mating material, and installation dimensions."],
      ["02", "Grade matching", "Select graphite grade and impregnation for wear, corrosion, dry running, or submerged service."],
      ["03", "Precision machining", "Machine I.D., O.D., height, faces, grooves, holes, and special geometry per drawing."],
      ["04", "Final inspection", "Check dimensions, faces, appearance, packing labels, and shipment protection."],
    ],
    galleryTitle: "Factory and product evidence",
    qcTitle: "Quality control focus",
    qc: [
      "Critical dimension and tolerance records",
      "Seal face flatness and visual inspection",
      "Material grade and process batch tracking",
      "Export packing labels and transport protection",
    ],
  },
  vi: {
    metaTitle: "Nhà máy",
    metaDescription: "Năng lực nhà máy Huahao Sealing cho phớt than chì carbon, gia công CNC, tẩm vật liệu, kiểm tra chất lượng và OEM.",
    eyebrow: "Năng lực nhà máy",
    title: "Năng lực sản xuất tích hợp từ vật liệu đến kiểm tra",
    subtitle: "Huahao Sealing sản xuất vòng phớt, bạc lót, ổ trục và vòng chia than chì carbon cho bơm, phớt cơ khí, thiết bị hóa chất và dự án OEM.",
    primary: "Gửi bản vẽ / báo giá",
    secondary: "Xem danh mục sản phẩm",
    stats: [
      { value: "20+", label: "Năm kinh nghiệm" },
      { value: "CNC", label: "Gia công chính xác" },
      { value: "24h", label: "Phản hồi kỹ thuật" },
    ],
    evidenceKicker: "Bằng chứng sản xuất",
    evidenceTitle: "Người mua công nghiệp cần nhiều hơn ảnh sản phẩm",
    evidenceText: "Khách hàng B2B quan tâm đến nguồn cung ổn định, kiểm soát chất lượng và giao tiếp kỹ thuật. Trang này trình bày chuỗi có thể kiểm chứng: chọn vật liệu, tẩm, gia công chính xác, kiểm tra cuối và đóng gói xuất khẩu.",
    capabilities: [
      { icon: "chemical", title: "Vật liệu & tẩm", desc: "Chọn cấp nhựa, antimon, đồng theo môi trường, nhiệt độ, áp suất và tải." },
      { icon: "gear", title: "Gia công chính xác", desc: "Tiện CNC, gia công I.D./O.D., mài mặt, tạo rãnh, khoan lỗ và biên dạng tùy chỉnh." },
      { icon: "shield", title: "Kiểm soát chất lượng", desc: "Kiểm tra kích thước, mặt làm kín, ngoại quan, độ cứng và thông số quan trọng trước khi giao." },
      { icon: "file-text", title: "Hợp tác OEM", desc: "Hỗ trợ bản vẽ, mẫu, thông số lô, model thay thế và chương trình cung ứng dài hạn." },
    ],
    processTitle: "Quy trình sản xuất",
    process: [
      ["01", "Đánh giá điều kiện", "Xác nhận môi trường, nhiệt độ, áp suất, tốc độ, vật liệu đối tiếp và kích thước lắp đặt."],
      ["02", "Ghép cấp vật liệu", "Chọn cấp graphite và tẩm cho mài mòn, ăn mòn, chạy khô hoặc ngập nước."],
      ["03", "Gia công chính xác", "Gia công I.D., O.D., chiều cao, mặt, rãnh, lỗ và hình học đặc biệt theo bản vẽ."],
      ["04", "Kiểm tra xuất xưởng", "Kiểm tra kích thước, mặt, ngoại quan, nhãn đóng gói và bảo vệ vận chuyển."],
    ],
    galleryTitle: "Bằng chứng nhà máy và sản phẩm",
    qcTitle: "Trọng điểm kiểm soát chất lượng",
    qc: ["Ghi nhận kích thước và dung sai quan trọng", "Kiểm tra độ phẳng mặt phớt và ngoại quan", "Truy xuất cấp vật liệu và lô quy trình", "Nhãn đóng gói xuất khẩu và bảo vệ vận chuyển"],
  },
  th: {
    metaTitle: "โรงงาน",
    metaDescription: "ความสามารถโรงงาน Huahao Sealing สำหรับซีลคาร์บอนกราไฟต์ งาน CNC กระบวนการอัดซึม การตรวจคุณภาพ และ OEM",
    eyebrow: "ความสามารถโรงงาน",
    title: "การผลิตครบวงจรตั้งแต่วัสดุจนถึงการตรวจสอบ",
    subtitle: "Huahao Sealing ผลิตแหวนซีลคาร์บอนกราไฟต์ บูช แบริ่ง และแหวนแยก สำหรับปั๊ม ซีลกล อุปกรณ์เคมี และงาน OEM",
    primary: "ส่งแบบ / ขอราคา",
    secondary: "ดูแคตตาล็อกสินค้า",
    stats: [
      { value: "20+", label: "ปีประสบการณ์" },
      { value: "CNC", label: "กลึงแม่นยำ" },
      { value: "24h", label: "ตอบกลับวิศวกรรม" },
    ],
    evidenceKicker: "หลักฐานการผลิต",
    evidenceTitle: "ผู้ซื้ออุตสาหกรรมต้องการมากกว่ารูปสินค้า",
    evidenceText: "ลูกค้าอุตสาหกรรมยุโรปและอเมริกาให้ความสำคัญกับการส่งมอบที่มั่นคง การควบคุมคุณภาพ และการสื่อสารทางวิศวกรรม หน้านี้แสดงกระบวนการที่ตรวจสอบได้ตั้งแต่การเลือกวัสดุ การอัดซึม การกลึงแม่นยำ การตรวจขั้นสุดท้าย และบรรจุภัณฑ์ส่งออก",
    capabilities: [
      { icon: "chemical", title: "วัสดุและการอัดซึม", desc: "เลือกเกรดเรซิน พลวง ทองแดง และวัสดุตามตัวกลาง อุณหภูมิ แรงดัน และภาระงาน" },
      { icon: "gear", title: "การกลึงแม่นยำ", desc: "กลึง CNC, I.D./O.D., เจียรผิว, ทำร่อง, เจาะรู และโปรไฟล์พิเศษ" },
      { icon: "shield", title: "ควบคุมคุณภาพ", desc: "ตรวจขนาด หน้าซีล ลักษณะภายนอก ความแข็ง และค่าที่สำคัญก่อนส่งมอบ" },
      { icon: "file-text", title: "ความร่วมมือ OEM", desc: "รองรับแบบ ตัวอย่าง สเปกล็อต รุ่นทดแทน และโครงการจัดหาระยะยาว" },
    ],
    processTitle: "กระบวนการผลิต",
    process: [
      ["01", "ประเมินสภาวะ", "ยืนยันตัวกลาง อุณหภูมิ แรงดัน ความเร็ว วัสดุคู่ และขนาดติดตั้ง"],
      ["02", "จับคู่เกรดวัสดุ", "เลือกเกรดกราไฟต์และการอัดซึมสำหรับการสึกหรอ การกัดกร่อน งานแห้ง หรือใต้น้ำ"],
      ["03", "กลึงแม่นยำ", "กลึง I.D., O.D., ความสูง หน้า ร่อง รู และรูปทรงพิเศษตามแบบ"],
      ["04", "ตรวจสอบก่อนส่ง", "ตรวจขนาด หน้า ลักษณะภายนอก ฉลากบรรจุภัณฑ์ และการป้องกันขนส่ง"],
    ],
    galleryTitle: "หลักฐานโรงงานและสินค้า",
    qcTitle: "จุดเน้นควบคุมคุณภาพ",
    qc: ["บันทึกขนาดและค่าความคลาดเคลื่อนสำคัญ", "ตรวจความเรียบหน้าซีลและลักษณะภายนอก", "ติดตามเกรดวัสดุและล็อตกระบวนการ", "ฉลากส่งออกและการป้องกันระหว่างขนส่ง"],
  },
  ru: {
    metaTitle: "Производство",
    metaDescription: "Производственные возможности Huahao Sealing: углерод-графитовые уплотнения, CNC обработка, пропитка, контроль качества и OEM.",
    eyebrow: "Возможности завода",
    title: "Полный производственный цикл от материала до контроля",
    subtitle: "Huahao Sealing производит углерод-графитовые кольца, втулки, подшипники и сегментные кольца для насосов, механических уплотнений, химического оборудования и OEM.",
    primary: "Отправить чертеж / запрос",
    secondary: "Смотреть каталог",
    stats: [
      { value: "20+", label: "Лет опыта" },
      { value: "CNC", label: "Точная обработка" },
      { value: "24h", label: "Инженерный ответ" },
    ],
    evidenceKicker: "Производственные доказательства",
    evidenceTitle: "Промышленным закупщикам нужны не только фото",
    evidenceText: "Покупатели B2B обращают внимание на стабильные поставки, контроль качества и инженерную коммуникацию. Страница показывает проверяемую цепочку: материал, пропитка, точная обработка, финальный контроль и экспортная упаковка.",
    capabilities: [
      { icon: "chemical", title: "Материал и пропитка", desc: "Смола, сурьма, медь и другие марки подбираются по среде, температуре, давлению и нагрузке." },
      { icon: "gear", title: "Точная обработка", desc: "CNC точение, обработка I.D./O.D., притирка торцов, канавки, отверстия и спецпрофили." },
      { icon: "shield", title: "Контроль качества", desc: "Размеры, торцы, внешний вид, твердость и критические параметры перед отгрузкой." },
      { icon: "file-text", title: "OEM сотрудничество", desc: "Чертежи, образцы, партии, замены моделей и долгосрочные программы поставки." },
    ],
    processTitle: "Производственный процесс",
    process: [
      ["01", "Оценка условий", "Среда, температура, давление, скорость, сопряженный материал и монтажные размеры."],
      ["02", "Подбор марки", "Выбор графита и пропитки для износа, коррозии, сухого хода или погружения."],
      ["03", "Точная обработка", "Обработка I.D., O.D., высоты, торцов, канавок, отверстий и геометрии по чертежу."],
      ["04", "Финальный контроль", "Проверка размеров, торцов, внешнего вида, маркировки и защиты груза."],
    ],
    galleryTitle: "Производство и продукция",
    qcTitle: "Фокус контроля качества",
    qc: ["Записи критических размеров и допусков", "Проверка плоскостности торцов и внешнего вида", "Прослеживаемость марки и партии процесса", "Экспортная маркировка и защита при перевозке"],
  },
  ja: {
    metaTitle: "工場",
    metaDescription: "Huahao Sealingのカーボングラファイトシール、CNC加工、含浸、品質検査、OEM製造能力。",
    eyebrow: "工場能力",
    title: "材料から検査まで一貫した製造能力",
    subtitle: "Huahao Sealingはポンプ、メカニカルシール、化学設備、OEM向けにシールリング、ブッシング、軸受、分割リングを製造します。",
    primary: "図面送付 / 見積",
    secondary: "製品カタログを見る",
    stats: [
      { value: "20+", label: "年の経験" },
      { value: "CNC", label: "精密加工" },
      { value: "24h", label: "技術対応" },
    ],
    evidenceKicker: "製造証拠",
    evidenceTitle: "産業購買者が必要とするのは製品写真だけではありません",
    evidenceText: "欧米の産業購買者は安定供給、品質管理、技術コミュニケーションを重視します。材料選定、含浸、精密加工、最終検査、輸出梱包までを示します。",
    capabilities: [
      { icon: "chemical", title: "材料と含浸", desc: "媒体、温度、圧力、用途に応じて樹脂、アンチモン、銅などのグレードを選定。" },
      { icon: "gear", title: "精密加工", desc: "CNC旋削、内外径加工、端面ラップ、溝加工、穴加工、特殊形状対応。" },
      { icon: "shield", title: "品質管理", desc: "寸法、端面、外観、硬度、重要性能を出荷前に確認。" },
      { icon: "file-text", title: "OEM協力", desc: "図面、サンプル、ロット仕様、代替型番、長期供給プロジェクトに対応。" },
    ],
    processTitle: "製造フロー",
    process: [
      ["01", "条件確認", "媒体、温度、圧力、速度、相手材、取付寸法を確認。"],
      ["02", "グレード選定", "摩耗、腐食、ドライ運転、水中用途に応じてグラファイトと含浸を選定。"],
      ["03", "精密加工", "図面に従って内外径、高さ、端面、溝、穴、特殊形状を加工。"],
      ["04", "出荷検査", "寸法、端面、外観、梱包ラベル、輸送保護を確認。"],
    ],
    galleryTitle: "工場と製品の実例",
    qcTitle: "品質管理の重点",
    qc: ["重要寸法と公差記録", "シール面平面度と外観検査", "材料グレードと工程ロット追跡", "輸出梱包ラベルと輸送保護"],
  },
  ko: {
    metaTitle: "공장",
    metaDescription: "Huahao Sealing 카본 그라파이트 씰, CNC 가공, 함침 공정, 품질 검사 및 OEM 맞춤 제조 역량.",
    eyebrow: "공장 역량",
    title: "재료부터 검사까지 통합 제조 역량",
    subtitle: "Huahao Sealing은 펌프, 기계식 씰, 화학 장비 및 OEM용 카본 그라파이트 씰 링, 부싱, 베어링, 분할 링을 제조합니다.",
    primary: "도면 / 견적 보내기",
    secondary: "제품 카탈로그 보기",
    stats: [
      { value: "20+", label: "년 경험" },
      { value: "CNC", label: "정밀 가공" },
      { value: "24h", label: "엔지니어링 응답" },
    ],
    evidenceKicker: "제조 증거",
    evidenceTitle: "산업 구매자는 제품 사진 이상을 필요로 합니다",
    evidenceText: "유럽과 북미 구매자는 안정 공급, 품질 관리, 엔지니어링 커뮤니케이션을 중시합니다. 재료 선정, 함침, 정밀 가공, 최종 검사, 수출 포장의 검증 가능한 흐름을 보여줍니다.",
    capabilities: [
      { icon: "chemical", title: "재료 및 함침", desc: "매체, 온도, 압력, 용도에 따라 수지, 안티몬, 동 등급을 선택합니다." },
      { icon: "gear", title: "정밀 가공", desc: "CNC 선삭, I.D./O.D. 가공, 단면 래핑, 홈, 홀 및 맞춤 프로파일." },
      { icon: "shield", title: "품질 관리", desc: "출하 전 치수, 단면, 외관, 경도 및 핵심 성능 확인." },
      { icon: "file-text", title: "OEM 협업", desc: "도면, 샘플, 로트 사양, 대체 모델 및 장기 공급 프로젝트 지원." },
    ],
    processTitle: "제조 흐름",
    process: [
      ["01", "조건 검토", "매체, 온도, 압력, 속도, 상대 재료 및 설치 치수 확인."],
      ["02", "등급 매칭", "마모, 부식, 건식 운전 또는 수중 조건에 맞춰 그라파이트 등급과 함침 선택."],
      ["03", "정밀 가공", "도면에 따라 I.D., O.D., 높이, 단면, 홈, 구멍 및 특수 형상 가공."],
      ["04", "최종 검사", "치수, 단면, 외관, 포장 라벨 및 운송 보호 확인."],
    ],
    galleryTitle: "공장 및 제품 증거",
    qcTitle: "품질 관리 중점",
    qc: ["핵심 치수 및 공차 기록", "씰 면 평탄도 및 외관 검사", "재료 등급 및 공정 로트 추적", "수출 포장 라벨 및 운송 보호"],
  },
}

const gallery = [
  "/images/IMG_20260321_153130.webp",
  "/images/实拍/IMG_20260517_193443.webp",
  "/images/实拍/IMG_20260518_215113.webp",
  "/images/实拍/IMG_20260518_215335.webp",
  "/images/密封环/IMG_20260410_141247.webp",
  "/images/轴套/IMG_20260408_150153.webp",
]

function getCopy(locale: string) {
  return getLocalized(content, locale)
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const copy = getCopy(locale)
  return generateMeta({
    title: copy.metaTitle,
    description: copy.metaDescription,
    path: "/factory",
    locale,
  })
}

export default async function FactoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const copy = getCopy(locale)

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        primaryLabel={copy.primary}
        secondaryLabel={copy.secondary}
        secondaryHref="/products"
        stats={copy.stats}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.08em] text-accent">{copy.evidenceKicker}</div>
              <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">{copy.evidenceTitle}</h2>
              <div className="industrial-divider" />
              <p className="text-base leading-relaxed text-muted">{copy.evidenceText}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {copy.capabilities.map((item) => (
                <div key={item.title} className="border border-border bg-background p-5">
                  <Icon name={item.icon as IconName} className="mb-4 h-6 w-6 text-accent" />
                  <h3 className="font-bold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding industrial-surface">
        <div className="container-wide">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">{copy.processTitle}</h2>
              <div className="industrial-divider" />
            </div>
            <Link href="/contact" className="btn-primary md:self-start">
              {copy.primary}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {copy.process.map(([num, title, desc]) => (
              <div key={num} className="border border-border bg-white p-5">
                <div className="mb-5 text-sm font-bold text-accent">{num}</div>
                <h3 className="font-bold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">{copy.galleryTitle}</h2>
              <div className="industrial-divider" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.map((src, index) => (
                  <div key={src} className="relative aspect-[4/3] overflow-hidden border border-border bg-background">
                    <Image
                      src={src}
                      alt={`${copy.galleryTitle} ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            <aside className="border border-border bg-primary p-6 text-white lg:sticky lg:top-24">
              <div className="text-xs font-bold uppercase tracking-[0.08em] text-white/56">QC</div>
              <h3 className="mt-3 text-2xl font-bold">{copy.qcTitle}</h3>
              <div className="my-5 h-px bg-white/12" />
              <ul className="space-y-4">
                {copy.qc.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
