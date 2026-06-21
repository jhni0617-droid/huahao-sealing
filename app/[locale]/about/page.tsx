import Image from "next/image"
import { getLocale, getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import CTASection from "@/components/CTASection"
import FAQAccordion from "@/components/FAQAccordion"
import { FaqJsonLd } from "@/components/JsonLd"
import { generateMeta } from "@/lib/utils"
import { getLocalized } from "@/lib/locale-data"
import PageHero from "@/components/PageHero"
import Icon, { type IconName } from "@/components/ui/Icon"

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations("about")
  return generateMeta({
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    path: "/about",
    locale,
  })
}

const zhMilestones = [
  { year: "2006", event: "嘉善先锋电碳正式成立，深耕碳石墨密封件行业，专业从事石墨密封环、碳石墨耐磨制品研发、生产与定制加工，夯实实业发展根基。" },
  { year: "2009", event: "批量引进高精度车床设备，全面升级加工硬件，优化生产流程，扩充生产产能，迈入标准化、规模化生产新阶段。" },
  { year: "2010", event: "搭建完善全域质检体系，制定全流程严苛品控标准，从原料筛选到成品出库层层严控，稳步提升产品品质与市场口碑。" },
  { year: "2012", event: "引进行业先进全自动浸渍生产线，升级石墨致密化核心工艺，全面强化产品耐高温、耐磨损、耐腐蚀及密封稳定性。" },
  { year: "2019", event: "企业战略迁址安徽六安，正式更名霍邱县华豪密封件有限公司，全面整合资源，重新规划布局生产全线。" },
  { year: "2020", event: "组建专业专项研发团队，自主研发抗氧化浸渍核心技术，攻克高温恶劣工况应用难题，核心工艺实力稳居行业前沿。" },
  { year: "2021", event: "拓宽市场应用赛道，全面布局新能源、液压机械、化工泵阀、空压机等领域，丰富全系密封产品，适配多元工业工况需求。" },
  { year: "2022", event: "扩建现代化标准生产厂区，完善生产配套设施，大幅提升批量供货能力，有效压缩订单交付周期。" },
  { year: "2025", event: "专注深耕高端精密石墨密封领域，聚焦特殊工况定制研发，匠心打造高适配、高耐用、高性能一体化工业密封解决方案。" },
]

const enMilestones = [
  { year: "2006", event: "Jiashan Xianfeng Carbon formally established, focusing on carbon graphite sealing products." },
  { year: "2009", event: "Introduced high-precision lathe equipment, upgrading processing capabilities and moving toward standardized production." },
  { year: "2010", event: "Established comprehensive quality inspection system with strict control from raw materials to finished products." },
  { year: "2012", event: "Introduced advanced automatic impregnation production line, enhancing core densification process." },
  { year: "2019", event: "Strategic relocation to Lu'an, Anhui. Renamed to Huahao Sealing Co., Ltd., integrating resources for full production line." },
  { year: "2020", event: "Established dedicated R&D team, developed proprietary anti-oxidation impregnation technology for high-temperature applications." },
  { year: "2021", event: "Expanded market presence into new energy, hydraulic machinery, chemical pumps, and air compressors." },
  { year: "2022", event: "Expanded modern standardized factory, significantly increased batch delivery capacity." },
  { year: "2025", event: "Focused on high-precision graphite sealing, specializing in custom R&D for demanding operating conditions." },
]

const milestonesData: Record<string, { year: string; event: string }[]> = {
  zh: zhMilestones,
  en: enMilestones,
  vi: [
    { year: "2006", event: "Jiashan Xianfeng Carbon chính thức thành lập, chuyên sản xuất sản phẩm làm kín than chì carbon." },
    { year: "2009", event: "Đưa vào trang thiết bị máy tiện độ chính xác cao, nâng cấp năng lực gia công hướng tới sản xuất tiêu chuẩn hóa." },
    { year: "2010", event: "Thiết lập hệ thống kiểm tra chất lượng toàn diện từ nguyên liệu thô đến thành phẩm." },
    { year: "2012", event: "Đưa vào dây chuyền tẩm tự động tiên tiến, nâng cao quy trình làm đặc cốt lõi." },
    { year: "2019", event: "Di dời chiến lược đến Lục An, An Huy. Đổi tên thành Huahao Sealing, tích hợp nguồn lực cho dây chuyền sản xuất hoàn chỉnh." },
    { year: "2020", event: "Thành lập đội R&D chuyên trách, phát triển công nghệ tẩm chống oxy hóa cho ứng dụng nhiệt độ cao." },
    { year: "2021", event: "Mở rộng thị trường sang năng lượng mới, máy thủy lực, bơm hóa chất và máy nén khí." },
    { year: "2022", event: "Mở rộng nhà máy tiêu chuẩn hóa, tăng đáng kể năng lực giao hàng lô lớn." },
    { year: "2025", event: "Tập trung vào làm kín than chì độ chính xác cao, R&D tùy chỉnh cho điều kiện vận hành khắt khe." },
  ],
  th: [
    { year: "2006", event: "Jiashan Xianfeng Carbon จัดตั้งขึ้นอย่างเป็นทางการ มุ่งเน้นผลิตภัณฑ์ซีลคาร์บอนกราไฟต์" },
    { year: "2009", event: "นำเข้าเครื่องกลึงความแม่นยำสูง ยกระดับขีดความสามารถในการผลิตสู่มาตรฐาน" },
    { year: "2010", event: "จัดตั้งระบบตรวจสอบคุณภาพครบวงจร ควบคุมเข้มงวดตั้งแต่วัตถุดิบถึงผลิตภัณฑ์สำเร็จรูป" },
    { year: "2012", event: "นำสายการผลิตอัดซึมอัตโนมัติขั้นสูง เพิ่มประสิทธิภาพกระบวนการทำให้แน่น" },
    { year: "2019", event: "ย้ายฐานการผลิตเชิงกลยุทธ์ไปที่ลู่อาน มณฑลอันฮุย เปลี่ยนชื่อเป็น Huahao Sealing" },
    { year: "2020", event: "จัดตั้งทีม R&D เฉพาะทาง พัฒนาเทคโนโลยีอัดซึมป้องกันออกซิเดชันสำหรับงานอุณหภูมิสูง" },
    { year: "2021", event: "ขยายการตลาดสู่พลังงานใหม่ เครื่องจักรไฮดรอลิก ปั๊มเคมี และเครื่องอัดอากาศ" },
    { year: "2022", event: "ขยายโรงงานมาตรฐานทันสมัย เพิ่มขีดความสามารถในการจัดส่งเป็นล็อตใหญ่" },
    { year: "2025", event: "มุ่งเน้นซีลกราไฟต์ความแม่นยำสูง R&D เฉพาะทางสำหรับสภาพการทำงานที่ต้องการสูง" },
  ],
  ru: [
    { year: "2006", event: "Jiashan Xianfeng Carbon официально основана, специализируется на углерод-графитовых уплотнениях." },
    { year: "2009", event: "Внедрены высокоточные токарные станки, модернизированы производственные мощности." },
    { year: "2010", event: "Создана комплексная система контроля качества от сырья до готовой продукции." },
    { year: "2012", event: "Внедрена передовая автоматическая линия пропитки, улучшен процесс уплотнения." },
    { year: "2019", event: "Стратегический переезд в Луань, Аньхой. Переименована в Huahao Sealing." },
    { year: "2020", event: "Создана специализированная R&D группа, разработана технология антиокислительной пропитки." },
    { year: "2021", event: "Расширение на рынки новой энергетики, гидравлики, химических насосов и компрессоров." },
    { year: "2022", event: "Расширен современный стандартизированный завод, увеличены объемы отгрузки." },
    { year: "2025", event: "Фокус на высокоточных графитовых уплотнениях, R&D для сложных условий эксплуатации." },
  ],
  ja: [
    { year: "2006", event: "嘉善先锋電碳として正式設立、カーボングラファイトシール製品に特化。" },
    { year: "2009", event: "高精度旋盤設備を導入、加工能力を向上し標準化生産へ移行。" },
    { year: "2010", event: "原材料から完成品までの包括的な品質検査システムを構築。" },
    { year: "2012", event: "先進の自動含浸ラインを導入、中核的な緻密化プロセスを強化。" },
    { year: "2019", event: "安徽省六安に戦略的移転。華豪密封件有限公司に社名変更。" },
    { year: "2020", event: "専任R&Dチームを設立、高温用途向け独自の耐酸化含浸技術を開発。" },
    { year: "2021", event: "新エネルギー、油圧機械、化学ポンプ、空気圧縮機へ市場拡大。" },
    { year: "2022", event: "最新式標準工場を拡張、バッチ出荷能力を大幅に向上。" },
    { year: "2025", event: "高精密グラファイトシールに特化、要求の厳しい運転条件向けカスタムR&D。" },
  ],
  ko: [
    { year: "2006", event: "Jiashan Xianfeng Carbon 공식 설립, 카본 그라파이트 씰링 제품 전문 생산." },
    { year: "2009", event: "고정밀 선반 장비 도입, 가공 능력 향상 및 표준화 생산으로 전환." },
    { year: "2010", event: "원자재부터 완제품까지 엄격한 관리의 종합 품질 검사 시스템 구축." },
    { year: "2012", event: "첨단 자동 함침 라인 도입, 핵심 치밀화 공정 강화." },
    { year: "2019", event: "안후이성 루안으로 전략적 이전. Huahao Sealing으로 사명 변경." },
    { year: "2020", event: "전담 R&D 팀 구성, 고온 응용을 위한 자체 내산화 함침 기술 개발." },
    { year: "2021", event: "신에너지, 유압기계, 화학펌프, 공기압축기 시장으로 확장." },
    { year: "2022", event: "현대식 표준 공장 확장, 대량 출하 능력 대폭 향상." },
    { year: "2025", event: "고정밀 그라파이트 씰링에 집중, 까다로운 운전 조건 맞춤 R&D." },
  ],
}

// Quality cards
interface QualityCard {
  title: string
  desc: string
}

const zhQualityCards: QualityCard[] = [
  { title: "原材料控制", desc: "每批碳石墨原材料在投产前均经过密度、硬度和纯度检测。" },
  { title: "精密加工", desc: "CNC加工中心实现微米级尺寸公差，确保每一批次的质量一致性。" },
  { title: "性能检测", desc: "每件产品经过严格的尺寸验证、压力测试和表面质量评估。" },
]

const enQualityCards: QualityCard[] = [
  { title: "Raw Material Control", desc: "Each batch of carbon graphite raw material is tested for density, hardness and purity before production." },
  { title: "Precision Machining", desc: "CNC machining centers achieve micron-level dimensional tolerances for consistent quality across every batch." },
  { title: "Performance Testing", desc: "Every product undergoes strict dimensional verification, pressure testing, and surface quality assessment." },
]

const qualityData: Record<string, QualityCard[]> = {
  zh: zhQualityCards,
  en: enQualityCards,
  vi: [
    { title: "Kiểm soát Nguyên liệu", desc: "Mỗi lô nguyên liệu than chì được kiểm tra mật độ, độ cứng và độ tinh khiết trước khi sản xuất." },
    { title: "Gia công Chính xác", desc: "Trung tâm gia công CNC đạt dung sai kích thước micron, đảm bảo chất lượng đồng nhất mỗi lô." },
    { title: "Kiểm tra Hiệu suất", desc: "Mỗi sản phẩm trải qua kiểm tra kích thước, thử áp suất và đánh giá chất lượng bề mặt nghiêm ngặt." },
  ],
  th: [
    { title: "ควบคุมวัตถุดิบ", desc: "วัตถุดิบคาร์บอนกราไฟต์แต่ละชุดทดสอบความหนาแน่น ความแข็ง และความบริสุทธิ์ก่อนการผลิต" },
    { title: "กลึงแม่นยำ", desc: "ศูนย์กลึง CNC ค่าความคลาดเคลื่อนระดับไมครอน คุณภาพสม่ำเสมอทุกชุดการผลิต" },
    { title: "ทดสอบประสิทธิภาพ", desc: "ผลิตภัณฑ์ทุกชิ้นผ่านการตรวจสอบมิติ ทดสอบแรงดัน และประเมินคุณภาพพื้นผิวอย่างเข้มงวด" },
  ],
  ru: [
    { title: "Контроль сырья", desc: "Каждая партия сырья проходит проверку плотности, твердости и чистоты перед производством." },
    { title: "Прецизионная обработка", desc: "Обработка на станках с ЧПУ с допусками на уровне микрон для стабильного качества." },
    { title: "Испытания", desc: "Каждое изделие проходит проверку размеров, испытания давлением и оценку поверхности." },
  ],
  ja: [
    { title: "原材料管理", desc: "生産前に各ロットのカーボングラファイト原料の密度、硬度、純度をテスト。" },
    { title: "精密加工", desc: "CNC加工センターがミクロンレベルの寸法公差を実現、全ロットで一貫した品質。" },
    { title: "性能テスト", desc: "全製品が厳格な寸法検証、圧力テスト、表面品質評価を実施。" },
  ],
  ko: [
    { title: "원자재 관리", desc: "생산 전 각 로트의 카본 그라파이트 원자재 밀도, 경도, 순도 테스트." },
    { title: "정밀 가공", desc: "CNC 가공센터가 미크론 수준 치수 공차 달성, 모든 로트에서 일관된 품질." },
    { title: "성능 테스트", desc: "모든 제품이 엄격한 치수 검증, 압력 테스트, 표면 품질 평가를 거칩니다." },
  ],
}

const trustPillars = {
  zh: [
    { icon: "chemical", title: "材料体系", desc: "围绕高温、腐蚀、干运转和水下工况选择碳石墨牌号与浸渍方案。" },
    { icon: "gear", title: "加工体系", desc: "覆盖石墨密封环、轴套、轴承、止推件、三瓣环等精密零部件加工。" },
    { icon: "shield", title: "检测体系", desc: "尺寸、公差、端面、外观和关键性能按出厂标准进行确认。" },
    { icon: "file-text", title: "OEM协作", desc: "支持图纸、样品、替代型号、长期供货和批量定制项目。" },
  ],
  en: [
    { icon: "chemical", title: "Material system", desc: "Graphite grade and impregnation selected for heat, corrosion, dry running, and submerged duty." },
    { icon: "gear", title: "Machining system", desc: "Precision machining for seal rings, bushings, bearings, thrust parts, and split rings." },
    { icon: "shield", title: "Inspection system", desc: "Dimensions, tolerances, faces, appearance, and key performance points checked before shipment." },
    { icon: "file-text", title: "OEM collaboration", desc: "Drawings, samples, replacement models, long-term supply, and batch custom programs." },
  ],
  vi: [
    { icon: "chemical", title: "Hệ vật liệu", desc: "Chọn cấp graphite và tẩm cho nhiệt, ăn mòn, chạy khô và ngập nước." },
    { icon: "gear", title: "Hệ gia công", desc: "Gia công chính xác vòng phớt, bạc lót, ổ trục, chi tiết chặn và vòng chia." },
    { icon: "shield", title: "Hệ kiểm tra", desc: "Kích thước, dung sai, mặt, ngoại quan và điểm hiệu suất chính được kiểm tra trước giao hàng." },
    { icon: "file-text", title: "Hợp tác OEM", desc: "Bản vẽ, mẫu, model thay thế, cung ứng dài hạn và chương trình tùy chỉnh lô." },
  ],
  th: [
    { icon: "chemical", title: "ระบบวัสดุ", desc: "เลือกเกรดกราไฟต์และการอัดซึมสำหรับความร้อน การกัดกร่อน งานแห้ง และงานใต้น้ำ" },
    { icon: "gear", title: "ระบบการผลิต", desc: "กลึงแม่นยำสำหรับแหวนซีล บูช แบริ่ง ชิ้นส่วนรับแรง และแหวนแบ่ง" },
    { icon: "shield", title: "ระบบตรวจสอบ", desc: "ตรวจขนาด ค่าความคลาดเคลื่อน หน้า ลักษณะภายนอก และจุดสมรรถนะสำคัญก่อนส่ง" },
    { icon: "file-text", title: "ความร่วมมือ OEM", desc: "รองรับแบบ ตัวอย่าง รุ่นทดแทน การจัดหาระยะยาว และโครงการผลิตเป็นล็อต" },
  ],
  ru: [
    { icon: "chemical", title: "Система материалов", desc: "Подбор марки графита и пропитки для тепла, коррозии, сухого хода и погружения." },
    { icon: "gear", title: "Система обработки", desc: "Точная обработка колец, втулок, подшипников, упорных деталей и сегментных колец." },
    { icon: "shield", title: "Система контроля", desc: "Размеры, допуски, торцы, внешний вид и ключевые параметры проверяются перед отгрузкой." },
    { icon: "file-text", title: "OEM сотрудничество", desc: "Чертежи, образцы, замена моделей, долгосрочные поставки и серийные проекты." },
  ],
  ja: [
    { icon: "chemical", title: "材料体系", desc: "高温、腐食、ドライ運転、水中条件に応じてグラファイトグレードと含浸を選定。" },
    { icon: "gear", title: "加工体系", desc: "シールリング、ブッシング、軸受、スラスト部品、分割リングの精密加工。" },
    { icon: "shield", title: "検査体系", desc: "寸法、公差、端面、外観、主要性能を出荷前に確認。" },
    { icon: "file-text", title: "OEM協力", desc: "図面、サンプル、代替型番、長期供給、量産カスタムに対応。" },
  ],
  ko: [
    { icon: "chemical", title: "재료 시스템", desc: "고온, 부식, 건식 운전 및 수중 조건에 맞춰 그라파이트 등급과 함침 선택." },
    { icon: "gear", title: "가공 시스템", desc: "씰 링, 부싱, 베어링, 스러스트 부품 및 분할 링 정밀 가공." },
    { icon: "shield", title: "검사 시스템", desc: "출하 전 치수, 공차, 단면, 외관 및 핵심 성능 확인." },
    { icon: "file-text", title: "OEM 협업", desc: "도면, 샘플, 대체 모델, 장기 공급 및 대량 맞춤 프로젝트 지원." },
  ],
}

function getAboutCopy(locale: string) {
  return getLocalized({
    zh: {
      eyebrow: "制造能力",
      primary: "联系工厂",
      secondary: "查看产品",
      stats: ["行业起点", "精密加工", "出厂检测"],
      proof: "制造与质量证据",
      profileKicker: "公司定位",
      profileCta: "查看工厂实力",
      faqKicker: "采购常见问题",
    },
    en: {
      eyebrow: "Manufacturing capability",
      primary: "Contact Factory",
      secondary: "View Products",
      stats: ["Industry start", "Precision machining", "Inspection"],
      proof: "Manufacturing and quality evidence",
      profileKicker: "Company position",
      profileCta: "View Factory Capability",
      faqKicker: "Buyer FAQ",
    },
    vi: {
      eyebrow: "Năng lực sản xuất",
      primary: "Liên hệ nhà máy",
      secondary: "Xem sản phẩm",
      stats: ["Khởi điểm ngành", "Gia công chính xác", "Kiểm tra"],
      proof: "Bằng chứng sản xuất và chất lượng",
      profileKicker: "Định vị công ty",
      profileCta: "Xem năng lực nhà máy",
      faqKicker: "FAQ mua hàng",
    },
    th: {
      eyebrow: "ความสามารถการผลิต",
      primary: "ติดต่อโรงงาน",
      secondary: "ดูสินค้า",
      stats: ["จุดเริ่มต้นอุตสาหกรรม", "กลึงแม่นยำ", "ตรวจสอบก่อนส่ง"],
      proof: "หลักฐานการผลิตและคุณภาพ",
      profileKicker: "ตำแหน่งของบริษัท",
      profileCta: "ดูความสามารถโรงงาน",
      faqKicker: "คำถามผู้ซื้อ",
    },
    ru: {
      eyebrow: "Производственные возможности",
      primary: "Связаться с заводом",
      secondary: "Смотреть продукцию",
      stats: ["Старт отрасли", "Точная обработка", "Контроль"],
      proof: "Производство и качество",
      profileKicker: "Позиционирование",
      profileCta: "Смотреть производство",
      faqKicker: "FAQ закупщика",
    },
    ja: {
      eyebrow: "製造能力",
      primary: "工場に問い合わせ",
      secondary: "製品を見る",
      stats: ["業界開始", "精密加工", "出荷検査"],
      proof: "製造と品質の証拠",
      profileKicker: "会社ポジション",
      profileCta: "工場能力を見る",
      faqKicker: "購買FAQ",
    },
    ko: {
      eyebrow: "제조 역량",
      primary: "공장 문의",
      secondary: "제품 보기",
      stats: ["산업 시작", "정밀 가공", "출하 검사"],
      proof: "제조 및 품질 증거",
      profileKicker: "회사 포지션",
      profileCta: "공장 역량 보기",
      faqKicker: "구매 FAQ",
    },
  }, locale)
}

// FAQ content
interface FaqEntry {
  question: string
  answer: string
}

interface FaqCategory {
  title: string
  items: FaqEntry[]
}

const zhFaqCategoriesData: FaqCategory[] = [
  {
    title: "一、公司基础信息",
    items: [
      { question: "贵公司主营什么产品？", answer: "我司专业生产各类石墨轴套、石墨密封件、石墨三瓣环等石墨制品，主打自润滑耐磨石墨配件，支持非标定制、精密加工。" },
      { question: "公司成立多久，生产实力如何？", answer: "深耕石墨制品行业多年，自有原料调配、成型烧结、精密机加工、真空浸渍全套生产线，自产自销，产能充足，可大批量稳定供货。" },
      { question: "公司地址在哪里？", answer: "厂区位于安徽六安，交通物流便捷，全国可快速发货，就近配送高效省心。" },
      { question: "是否为源头工厂，有无中间商差价？", answer: "纯实体源头生产厂家，无层层分销，直接对接厂家直供，性价比高，价格透明。" },
    ],
  },
  {
    title: "二、产品工艺与品质",
    items: [
      { question: "产品采用哪些主流浸渍工艺？", answer: "可做树脂浸渍、锑浸渍、巴氏合金浸渍等多种工艺，适配不同工况需求。" },
      { question: "产品精度与质量有保障吗？", answer: "严格把控烧结密度、外观平整度、内外径公差，成品经过尺寸检测、耐磨测试、耐温测试，出厂全检，品质稳定耐用。" },
      { question: "产品耐温、耐磨、耐腐蚀性能怎么样？", answer: "可适配低温、常温、中高温、干磨、油润滑、清水、弱酸碱等多种工况，耐磨减磨效果优异，使用寿命长。" },
    ],
  },
  {
    title: "三、定制与加工服务",
    items: [
      { question: "可以来图来样非标定制吗？", answer: "支持任意尺寸、异形结构、开槽、打孔、端面打磨等精密定制，图纸 / 样品均可接单。" },
      { question: "最小起订量是多少？", answer: "支持试样小批量接单，也可承接大批量订单，灵活适配客户需求。" },
      { question: "交货周期大概多久？", answer: "常规现货款式当天 / 次日发货；标准定制 1-3 天；复杂异形件 7-10 天，急单可优先排产。" },
      { question: "能否提供图纸选型、工况技术指导？", answer: "专业技术团队免费提供工况选材、间隙搭配、工艺选型、安装使用全套技术方案。" },
    ],
  },
  {
    title: "四、合作与售后",
    items: [
      { question: "支持哪些合作模式？", answer: "工厂直供、经销商合作、项目配套、外贸订单、代工贴牌均可合作。" },
      { question: "发货物流怎么安排？", answer: "默认专线物流、快递配送，大件走货运，可按客户指定物流发货，运费合理。" },
      { question: "出现质量问题如何处理？", answer: "非人为使用损坏，严格按售后政策处理，退换货无忧，全力保障客户使用权益。" },
      { question: "是否可以免费寄样？", answer: "支持客户申请样品测试，少量试样免费，仅收取基础运费。" },
    ],
  },
  {
    title: "五、行业优势",
    items: [
      { question: "相比同行你们最大优势是什么？", answer: "自产原料 + 自主浸渍工艺 + 精密机加工一体化，价格低、交期快、精度高、工况适配性强，一站式解决石墨耐磨密封配件需求。" },
    ],
  },
]

const enFaqCategoriesData: FaqCategory[] = [
  {
    title: "1. Company Information",
    items: [
      { question: "What products does your company mainly offer?", answer: "We specialize in graphite bushings, graphite seals, graphite split rings and other graphite products, featuring self-lubricating wear-resistant graphite components, supporting custom machining." },
      { question: "How long has the company been established?", answer: "Years of deep expertise in graphite products, with complete in-house production lines from raw material blending to precision machining and vacuum impregnation." },
      { question: "Where is the company located?", answer: "Our factory is located in Lu'an, Anhui Province, with convenient logistics for fast delivery nationwide." },
      { question: "Are you a direct factory source?", answer: "Direct factory source with no middlemen. Competitive pricing with full transparency." },
    ],
  },
  {
    title: "2. Product & Quality",
    items: [
      { question: "What impregnation processes do you use?", answer: "Resin impregnation, antimony impregnation, Babbitt metal impregnation and more, tailored to different operating conditions." },
      { question: "Is product quality guaranteed?", answer: "Strict control over density, flatness, and dimensional tolerances. Every product undergoes dimensional inspection, wear testing, and temperature testing before shipment." },
      { question: "How about temperature, wear and corrosion resistance?", answer: "Suitable for low, normal, and high temperatures, dry running, oil lubrication, water, and mild acid/alkali conditions. Excellent wear resistance with long service life." },
    ],
  },
  {
    title: "3. Customization Services",
    items: [
      { question: "Can you customize per drawing or sample?", answer: "Yes, we support custom sizes, special shapes, grooving, drilling, end-face grinding, etc. Both drawings and samples accepted." },
      { question: "What is the minimum order quantity?", answer: "Small trial batches supported as well as large-volume orders, flexibly adapted to customer needs." },
      { question: "What is the delivery time?", answer: "Standard stock items ship same/next day. Custom orders 1-3 days. Complex parts 7-10 days. Rush orders prioritized." },
      { question: "Can you provide technical guidance?", answer: "Our professional technical team provides free guidance on material selection, clearance matching, process selection, and installation." },
    ],
  },
  {
    title: "4. Cooperation & After-Sales",
    items: [
      { question: "What cooperation models do you support?", answer: "Factory direct supply, distributor cooperation, project matching, export orders, and OEM/ODM available." },
      { question: "How is shipping arranged?", answer: "Dedicated logistics or express delivery for small items, freight for large items. Customer-specified carriers accepted." },
      { question: "How do you handle quality issues?", answer: "Non-artificial damage is handled per our after-sales policy with hassle-free returns and exchanges." },
      { question: "Can I get free samples?", answer: "Sample testing is supported. Small trial samples are free, only basic shipping charges apply." },
    ],
  },
  {
    title: "5. Industry Advantages",
    items: [
      { question: "What is your biggest advantage?", answer: "Integrated in-house raw material production + proprietary impregnation + precision machining. Lower cost, faster delivery, higher precision, and strong condition adaptability — a one-stop solution for graphite wear-resistant sealing needs." },
    ],
  },
]

const viFaqCategoriesData: FaqCategory[] = [
  {
    title: "1. Thông tin Công ty",
    items: [
      { question: "Công ty chuyên sản xuất sản phẩm gì?", answer: "Chúng tôi chuyên sản xuất các loại bạc than chì, phớt than chì, vòng than chì ba mảnh và các sản phẩm than chì khác, tập trung vào phụ kiện than chì chống mài mòn tự bôi trơn, hỗ trợ gia công tùy chỉnh phi tiêu chuẩn." },
      { question: "Công ty thành lập bao lâu và năng lực sản xuất thế nào?", answer: "Nhiều năm kinh nghiệm sâu rộng trong sản phẩm than chì, với dây chuyền sản xuất nội bộ hoàn chỉnh từ phối trộn nguyên liệu đến gia công chính xác và tẩm chân không, tự sản xuất tự tiêu thụ, năng lực sản xuất dồi dào, có thể cung cấp ổn định số lượng lớn." },
      { question: "Địa chỉ công ty ở đâu?", answer: "Nhà máy tọa lạc tại Lục An, An Huy, giao thông logistics thuận tiện, có thể giao hàng nhanh trên toàn quốc." },
      { question: "Có phải nhà máy gốc không, có chênh lệch trung gian không?", answer: "Nhà sản xuất gốc thực thể thuần túy, không qua trung gian phân phối, trực tiếp từ nhà máy, giá cạnh tranh, minh bạch." },
    ],
  },
  {
    title: "2. Quy trình & Chất lượng",
    items: [
      { question: "Sử dụng những quy trình tẩm chính nào?", answer: "Chúng tôi cung cấp tẩm nhựa, tẩm antimon, tẩm hợp kim babit và nhiều quy trình khác, phù hợp với các điều kiện vận hành khác nhau." },
      { question: "Sản phẩm có đảm bảo chất lượng không?", answer: "Kiểm soát chặt chẽ mật độ thiêu kết, độ phẳng bề mặt, dung sai kích thước. Sản phẩm qua kiểm tra kích thước, thử mài mòn, thử nhiệt độ, kiểm tra 100% trước khi xuất xưởng." },
      { question: "Khả năng chịu nhiệt, mài mòn, ăn mòn thế nào?", answer: "Phù hợp với nhiệt độ thấp, thường, cao, mài khô, bôi trơn dầu, nước sạch, axit/kiềm nhẹ. Hiệu quả chống mài mòn tuyệt vời, tuổi thọ dài." },
    ],
  },
  {
    title: "3. Dịch vụ Tùy chỉnh & Gia công",
    items: [
      { question: "Có thể nhận gia công tùy chỉnh theo bản vẽ không?", answer: "Hỗ trợ mọi kích thước, cấu trúc đặc biệt, rãnh, khoan lỗ, mài bề mặt. Nhận cả bản vẽ và mẫu." },
      { question: "Số lượng đặt hàng tối thiểu là bao nhiêu?", answer: "Hỗ trợ đơn hàng thử nghiệm số lượng nhỏ, cũng như đơn hàng số lượng lớn, linh hoạt theo nhu cầu khách hàng." },
      { question: "Thời gian giao hàng khoảng bao lâu?", answer: "Hàng có sẵn tiêu chuẩn giao ngày hôm đó/ngày hôm sau; tùy chỉnh tiêu chuẩn 1-3 ngày; chi tiết phức tạp 7-10 ngày, có thể ưu tiên sản xuất đơn gấp." },
      { question: "Có thể cung cấp hướng dẫn kỹ thuật không?", answer: "Đội ngũ kỹ thuật chuyên nghiệp cung cấp miễn phí tư vấn chọn vật liệu, phối ghép khe hở, chọn quy trình và hướng dẫn lắp đặt." },
    ],
  },
  {
    title: "4. Hợp tác & Hậu mãi",
    items: [
      { question: "Hỗ trợ những mô hình hợp tác nào?", answer: "Cung cấp trực tiếp nhà máy, hợp tác đại lý, dự án đi kèm, đơn hàng xuất khẩu, OEM/ODM." },
      { question: "Logistics vận chuyển thế nào?", answer: "Mặc định logistics chuyên tuyến, chuyển phát nhanh, hàng lớn đi vận tải, có thể gửi theo logistic khách hàng chỉ định, cước phí hợp lý." },
      { question: "Xử lý vấn đề chất lượng ra sao?", answer: "Hư hỏng không do con người gây ra được xử lý theo chính sách hậu mãi, đổi trả không lo lắng, bảo vệ quyền lợi khách hàng." },
      { question: "Có thể gửi mẫu miễn phí không?", answer: "Hỗ trợ khách hàng xin mẫu thử nghiệm, mẫu thử số lượng nhỏ miễn phí, chỉ tính phí vận chuyển cơ bản." },
    ],
  },
  {
    title: "5. Lợi thế Ngành",
    items: [
      { question: "Lợi thế lớn nhất so với đối thủ là gì?", answer: "Tự sản xuất nguyên liệu + quy trình tẩm độc quyền + gia công chính xác tích hợp. Giá thấp hơn, giao hàng nhanh hơn, độ chính xác cao hơn, khả năng thích ứng điều kiện mạnh — giải pháp một cửa cho nhu cầu phụ kiện than chì chịu mài mòn." },
    ],
  },
]

const thFaqCategoriesData: FaqCategory[] = [
  {
    title: "1. ข้อมูลบริษัท",
    items: [
      { question: "บริษัทผลิตสินค้าหลักอะไร?", answer: "เราผลิตบูชกราไฟต์ ซีลกราไฟต์ วงแหวนกราไฟต์สามชิ้น และผลิตภัณฑ์กราไฟต์อื่นๆ เน้นชิ้นส่วนกราไฟต์ทนทานหล่อลื่นในตัว รองรับการกลึงขึ้นรูปตามแบบ" },
      { question: "บริษัทก่อตั้งมานานแค่ไหน?", answer: "มีประสบการณ์ด้านผลิตภัณฑ์กราไฟต์หลายปี มีสายการผลิตในโรงงานครบวงจรตั้งแต่การผสมวัตถุดิบจนถึงการกลึงแม่นยำและการอัดซึมสุญญากาศ ผลิตเองขายเอง กำลังผลิตเพียงพอ" },
      { question: "ที่อยู่บริษัทอยู่ที่ไหน?", answer: "โรงงานตั้งอยู่ที่ลู่อาน มณฑลอันฮุย การเดินทางและโลจิสติกส์สะดวก สามารถจัดส่งทั่วประเทศอย่างรวดเร็ว" },
      { question: "เป็นผู้ผลิตโดยตรงหรือไม่?", answer: "เป็นผู้ผลิตต้นทางจริง ไม่มีคนกลาง ราคาจากโรงงานโดยตรง โปร่งใส" },
    ],
  },
  {
    title: "2. กระบวนการผลิตและคุณภาพ",
    items: [
      { question: "ใช้กระบวนการอัดซึมหลักอะไรบ้าง?", answer: "เราสามารถอัดซึมเรซิน อัดซึมพลวง อัดซึมโลหะแบ็บบิต และอื่นๆ ปรับเปลี่ยนตามความต้องการสภาพการทำงาน" },
      { question: "ผลิตภัณฑ์มีรับประกันคุณภาพหรือไม่?", answer: "ควบคุมความหนาแน่น ความเรียบผิว และค่าความคลาดเคลื่อนอย่างเข้มงวด สินค้าผ่านการตรวจสอบขนาด ทดสอบการสึกหรอ และทดสอบอุณหภูมิ ตรวจสอบ 100% ก่อนส่งออก" },
      { question: "ทนอุณหภูมิ สึกหรอ และกัดกร่อนได้ดีแค่ไหน?", answer: "เหมาะกับอุณหภูมิต่ำ ปกติ สูง การทำงานแห้ง หล่อลื่นด้วยน้ำมัน น้ำสะอาด กรด/ด่างอ่อน มีประสิทธิภาพต้านทานการสึกหรอดีเยี่ยม อายุการใช้งานยาวนาน" },
    ],
  },
  {
    title: "3. บริการปรับแต่งและกลึงขึ้นรูป",
    items: [
      { question: "รับผลิตตามแบบหรือตัวอย่างได้ไหม?", answer: "รองรับทุกขนาด รูปทรงพิเศษ การเจาะร่อง เจาะรู และเจียรผิว รองรับทั้งแบบและตัวอย่าง" },
      { question: "ปริมาณสั่งซื้อขั้นต่ำเท่าไหร่?", answer: "รองรับการสั่งทดลองจำนวนน้อยและคำสั่งซื้อปริมาณมาก ยืดหยุ่นตามความต้องการของลูกค้า" },
      { question: "ระยะเวลาจัดส่งประมาณเท่าไหร่?", answer: "สินค้ามาตรฐานมีสต็อกพร้อมส่งวันนี้/พรุ่งนี้; สั่งผลิตมาตรฐาน 1-3 วัน; ชิ้นส่วนซับซ้อน 7-10 วัน; เร่งผลิตได้" },
      { question: "可以提供คำแนะนำทางเทคนิคได้ไหม?", answer: "ทีมวิศวกรมืออาชีพให้คำแนะนำฟรีด้านการเลือกวัสดุ การจับคู่ระยะห่าง การเลือกกระบวนการ และการติดตั้ง" },
    ],
  },
  {
    title: "4. ความร่วมมือและบริการหลังการขาย",
    items: [
      { question: "มีรูปแบบความร่วมมืออะไรบ้าง?", answer: "จำหน่ายตรงจากโรงงาน ร่วมมือกับตัวแทนจำหน่าย ร่วมโครงการ สั่งซื้อส่งออก OEM/ODM ได้ทั้งหมด" },
      { question: "การขนส่งเป็นอย่างไร?", answer: "เริ่มต้นส่งทางโลจิสติกส์เฉพาะทางและพัสดุ ชิ้นใหญ่ส่งทางขนส่ง สามารถเลือกผู้ให้บริการขนส่งตามที่ลูกค้ากำหนด" },
      { question: "จัดการปัญหาคุณภาพอย่างไร?", answer: "ความเสียหายที่ไม่ได้เกิดจากการใช้งานผิดวิธี ดำเนินการตามนโยบายหลังการขาย เปลี่ยนหรือคืนสินค้าได้" },
      { question: "ขอตัวอย่างฟรีได้ไหม?", answer: "ลูกค้าสามารถขอตัวอย่างทดสอบได้ ตัวอย่างจำนวนน้อยฟรี คิดเฉพาะค่าขนส่งพื้นฐาน" },
    ],
  },
  {
    title: "5. ข้อได้เปรียบทางอุตสาหกรรม",
    items: [
      { question: "ข้อได้เปรียบที่ใหญ่ที่สุดของคุณคืออะไร?", answer: "ผลิตวัตถุดิบเอง + กระบวนการอัดซึมกรรมสิทธิ์ + การกลึงแม่นยำในที่เดียว ราคาถูกกว่า ส่งเร็วกว่า แม่นยำกว่า ปรับตัวเข้ากับสภาพการทำงานได้ดี — โซลูชันครบวงจรสำหรับความต้องการชิ้นส่วนกราไฟต์ทนทาน" },
    ],
  },
]

const ruFaqCategoriesData: FaqCategory[] = [
  {
    title: "1. Информация о компании",
    items: [
      { question: "Какую продукцию вы производите?", answer: "Мы специализируемся на производстве графитовых втулок, графитовых уплотнений, графитовых разрезных колец и других графитовых изделий, с упором на самосмазывающиеся износостойкие графитовые компоненты с возможностью нестандартного изготовления." },
      { question: "Как давно основана компания и каковы производственные мощности?", answer: "Многолетний опыт в графитовых изделиях, полный цикл производства от подготовки сырья до точной механической обработки и вакуумной пропитки. Собственное производство, достаточные мощности для стабильных поставок крупных партий." },
      { question: "Где находится компания?", answer: "Завод расположен в городе Луань, провинция Аньхой, с удобной транспортной логистикой для быстрой доставки по всей стране." },
      { question: "Вы являетесь прямым производителем?", answer: "Мы являемся непосредственным производителем без посредников. Прямые поставки с завода по конкурентоспособным ценам с полной прозрачностью." },
    ],
  },
  {
    title: "2. Технология и качество",
    items: [
      { question: "Какие основные процессы пропитки вы используете?", answer: "Мы выполняем пропитку смолами, сурьмой, баббитовым сплавом и другими материалами, адаптируясь к различным условиям эксплуатации." },
      { question: "Гарантируется ли качество продукции?", answer: "Строгий контроль плотности спекания, плоскостности поверхности и допусков. Каждое изделие проходит контроль размеров, испытания на износ и термостойкость. 100% контроль перед отгрузкой." },
      { question: "Какова стойкость к температуре, износу и коррозии?", answer: "Подходит для низких, нормальных и высоких температур, сухого трения, масляной смазки, чистой воды, слабых кислот/щелочей. Отличная износостойкость и длительный срок службы." },
    ],
  },
  {
    title: "3. Услуги по изготовлению на заказ",
    items: [
      { question: "Можно ли изготовить по чертежу или образцу?", answer: "Поддерживаем любые размеры, специальные формы, проточку канавок, сверление, шлифовку торцов. Принимаем как чертежи, так и образцы." },
      { question: "Каков минимальный объем заказа?", answer: "Поддерживаем как пробные заказы малых партий, так и крупносерийные заказы, гибко подстраиваясь под потребности клиента." },
      { question: "Каковы сроки поставки?", answer: "Стандартные позиции со склада отгружаются в день/на следующий день. Стандартные заказы — 1-3 дня. Сложные детали — 7-10 дней. Срочные заказы выполняются в приоритетном порядке." },
      { question: "Предоставляете ли вы техническую консультацию?", answer: "Наша профессиональная техническая команда бесплатно предоставляет консультации по выбору материала, подбору зазоров, выбору технологии и установке." },
    ],
  },
  {
    title: "4. Сотрудничество и гарантия",
    items: [
      { question: "Какие модели сотрудничества вы поддерживаете?", answer: "Прямые поставки с завода, дилерское сотрудничество, проектные поставки, экспортные заказы, OEM/ODM." },
      { question: "Как организуется доставка?", answer: "По умолчанию — специализированная логистика или курьерская доставка для мелких партий, грузовые перевозки для крупных. Возможна отправка указанным клиентом перевозчиком." },
      { question: "Как решаются вопросы качества?", answer: "Повреждения не по вине пользователя обрабатываются согласно гарантийной политике с беспроблемным возвратом и обменом." },
      { question: "Можно ли получить бесплатные образцы?", answer: "Поддерживаем предоставление образцов для тестирования. Небольшие пробные образцы бесплатно, только базовая стоимость доставки." },
    ],
  },
  {
    title: "5. Отраслевые преимущества",
    items: [
      { question: "В чем ваше главное преимущество?", answer: "Интегрированное собственное производство сырья + собственная пропитка + прецизионная обработка. Более низкая цена, быстрая доставка, высокая точность и сильная адаптируемость — комплексное решение для износостойких графитовых уплотнений." },
    ],
  },
]

const jaFaqCategoriesData: FaqCategory[] = [
  {
    title: "1. 会社基本情報",
    items: [
      { question: "御社の主力製品は何ですか？", answer: "当社は各種グラファイトブッシング、グラファイトシール、グラファイトスプリットリングなどの石墨製品を専門に製造しています。耐摩耗性自己潤滑グラファイト部品が主力で、非標準カスタム加工にも対応しています。" },
      { question: "会社の設立年数と生産能力は？", answer: "石墨製品業界での多年の経験を持ち、原料調合、成型焼結、精密機械加工、真空含浸の完全な一貫生産ラインを所有。自社生産・自社販売で、十分な生産能力により大量安定供給が可能です。" },
      { question: "会社の所在地は？", answer: "工場は安徽省六安に位置し、交通物流に便利で、全国に迅速に発送できます。" },
      { question: "直販メーカーですか？中間業者はいますか？", answer: "純然たる製造元メーカーで、中間流通は一切なく、メーカー直販により高コストパフォーマンスと透明な価格を実現しています。" },
    ],
  },
  {
    title: "2. 製品・品質",
    items: [
      { question: "どのような含浸工法に対応していますか？", answer: "樹脂含浸、アンチモン含浸、バビットメタル含浸など、さまざまな工法に対応し、異なる運転条件に適合します。" },
      { question: "製品の品質保証はありますか？", answer: "焼結密度、表面平坦度、内外径公差を厳格に管理。全製品が寸法検査、耐摩耗試験、耐熱試験を経て、出荷時に全数検査を実施しています。" },
      { question: "耐熱性、耐摩耗性、耐食性は？", answer: "低温、常温、中高温、乾式運転、油潤滑、清水、弱酸・弱アルカリなど多様な条件に適合。優れた耐摩耗効果と長寿命を実現します。" },
    ],
  },
  {
    title: "3. カスタム加工サービス",
    items: [
      { question: "図面やサンプルからのカスタム製作に対応していますか？", answer: "あらゆるサイズ、異形形状、溝加工、穴あけ、端面研磨などの精密カスタムに対応。図面・サンプルともに受注可能です。" },
      { question: "最小受注数量は？", answer: "少量の試作ロットから大量注文まで対応。お客様のニーズに柔軟に適合します。" },
      { question: "納期はどのくらいですか？", answer: "標準在庫品は当日〜翌日出荷。標準カスタム品は1〜3日。複雑な異形品は7〜10日。急ぎの注文は優先生産可能です。" },
      { question: "技術指導は提供していますか？", answer: "専門技術チームが、材料選定、隙間調整、工法選定、設置に関する総合的な技術サポートを無料で提供します。" },
    ],
  },
  {
    title: "4. 協力・アフターサービス",
    items: [
      { question: "どのような協業形態に対応していますか？", answer: "メーカー直販、ディーラー協力、プロジェクトマッチング、輸出注文、OEM/ODMいずれにも対応。" },
      { question: "発送方法は？", answer: "標準では専用物流または宅配。大型品は貨物輸送。お客様指定の運送業者にも対応可能。運賃は合理的です。" },
      { question: "品質問題にはどう対応しますか？", answer: "人為的な損傷でない場合は、アフターサービスポリシーに従って対応。安心してご利用いただける返品交換を保証します。" },
      { question: "無料サンプルはもらえますか？", answer: "サンプルテストに対応。少量の試作品は無料（基本送料のみご負担）。" },
    ],
  },
  {
    title: "5. 業界アドバンテージ",
    items: [
      { question: "競合他社と比べて最大の強みは？", answer: "原料生産＋独自含浸技術＋精密機械加工の一体化。低価格、短納期、高精度、強い条件適応力を実現。グラファイト耐摩耗シールニーズに対するワンストップソリューションを提供します。" },
    ],
  },
]

const koFaqCategoriesData: FaqCategory[] = [
  {
    title: "1. 회사 기본 정보",
    items: [
      { question: "귀사는 주로 어떤 제품을 생산하나요?", answer: "당사는 각종 그라파이트 부싱, 그라파이트 씰, 그라파이트 분할링 등 흑연 제품을 전문 생산하며, 자체 윤활 내마모 그라파이트 부품을 주력으로 하고 비표준 맞춤 가공을 지원합니다." },
      { question: "회사 설립 기간과 생산 능력은?", answer: "흑연 제품 업계에서 다년간의 깊은 경험을 보유하고 있으며, 원료 배합부터 성형 소결, 정밀 기계 가공, 진공 함침까지 완벽한 자체 생산 라인을 갖추고 있어 대량 안정적 공급이 가능합니다." },
      { question: "회사 주소는 어디인가요?", answer: "공장은 안후이성 루안에 위치하며, 교통과 물류가 편리하여 전국으로 신속하게 발송 가능합니다." },
      { question: "직영 공장인가요? 중간 유통 마진이 있나요?", answer: "순수 직영 생산 업체로, 중간 유통 단계가 없으며 공장 직공으로 가격 경쟁력이 높고 투명합니다." },
    ],
  },
  {
    title: "2. 제품 공정 및 품질",
    items: [
      { question: "어떤 주요 함침 공정을 사용하나요?", answer: "수지 함침, 안티몬 함침, 배빗 합금 함침 등 다양한 공정이 가능하며, 다양한 운전 조건에 맞춰 조정합니다." },
      { question: "제품 품질이 보장되나요?", answer: "소결 밀도, 표면 평탄도, 내외경 공차를 엄격히 관리합니다. 완제품은 치수 검사, 내마모 테스트, 내열 테스트를 거쳐 전수 검사 후 출고됩니다." },
      { question: "내열성, 내마모성, 내식성은 어떤가요?", answer: "저온, 상온, 중고온, 건식 마모, 오일 윤활, 청수, 약산/약알칼리 등 다양한 조건에 적합하며, 우수한 내마모 효과와 긴 수명을 제공합니다." },
    ],
  },
  {
    title: "3. 맞춤 및 가공 서비스",
    items: [
      { question: "도면이나 샘플로 비표준 맞춤 제작이 가능한가요?", answer: "모든 크기, 이형 구조, 홈 가공, 드릴링, 단면 연마 등 정밀 맞춤이 가능하며 도면/샘플 모두 접수 가능합니다." },
      { question: "최소 주문 수량은 얼마인가요?", answer: "소량 시험 주문부터 대량 주문까지 유연하게 대응 가능합니다." },
      { question: "납기 기간은 어느 정도인가요?", answer: "일반 재고 품목은 당일/익일 출고됩니다. 표준 맞춤 1-3일, 복잡한 이형품 7-10일이며, 긴급 주문은 우선 생산 가능합니다." },
      { question: "도면 선정 및 기술 지도를 제공하나요?", answer: "전문 기술 팀이 무료로 조건별 재료 선정, 간극 조합, 공정 선정, 설치에 관한 종합 기술 솔루션을 제공합니다." },
    ],
  },
  {
    title: "4. 협력 및 애프터서비스",
    items: [
      { question: "어떤 협력 방식을 지원하나요?", answer: "공장 직공, 대리점 협력, 프로젝트 매칭, 해외 주문, OEM/ODM 모두 가능합니다." },
      { question: "배송 물류는 어떻게 되나요?", answer: "기본 전용 물류 및 택배 배송, 대형 품목은 화물 운송, 고객 지정 물류사로 발송 가능하며 운임은 합리적입니다." },
      { question: "품질 문제는 어떻게 처리하나요?", answer: "인위적 손상이 아닌 경우 애프터서비스 정책에 따라 처리되며, 안심하고 교환/반품할 수 있습니다." },
      { question: "무료 샘플을 받을 수 있나요?", answer: "고객의 샘플 테스트를 지원합니다. 소량 시료는 무료이며 기본 운송비만 부담하시면 됩니다." },
    ],
  },
  {
    title: "5. 업계 우위",
    items: [
      { question: "경쟁사 대비 가장 큰 장점은 무엇인가요?", answer: "원료 자체 생산 + 독자 함침 공정 + 정밀 기계 가공의 통합. 낮은 가격, 빠른 납기, 높은 정밀도, 강력한 조건 적응력으로 그라파이트 내마모 씰링 요구에 대한 원스톱 솔루션을 제공합니다." },
    ],
  },
]

const faqCategoriesData: Record<string, FaqCategory[]> = {
  zh: zhFaqCategoriesData,
  en: enFaqCategoriesData,
  vi: viFaqCategoriesData,
  th: thFaqCategoriesData,
  ru: ruFaqCategoriesData,
  ja: jaFaqCategoriesData,
  ko: koFaqCategoriesData,
}

export default async function AboutPage() {
  const locale = await getLocale()
  const t = await getTranslations("about")
  const milestones = getLocalized(milestonesData, locale)
  const qualityCards = getLocalized(qualityData, locale)
  const faqCats = getLocalized(faqCategoriesData, locale)
  const pillars = getLocalized(trustPillars, locale)
  const copy = getAboutCopy(locale)

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        primaryLabel={copy.primary}
        secondaryLabel={copy.secondary}
        secondaryHref="/products"
        stats={[
          { value: "2006", label: copy.stats[0] },
          { value: "CNC", label: copy.stats[1] },
          { value: "100%", label: copy.stats[2] },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.08em] text-accent">{copy.profileKicker}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("companyTitle")}</h2>
              <div className="industrial-divider" />
              <p className="text-muted mt-4 leading-relaxed">{t("companyPara1")}</p>
              <p className="text-muted mt-4 leading-relaxed">{t("companyPara2")}</p>
              <p className="text-muted mt-4 leading-relaxed">{t("companyPara3")}</p>
              <Link href="/factory" className="btn-secondary mt-8">
                {copy.profileCta}
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative min-h-[420px] overflow-hidden border border-border bg-background">
              <Image
                src="/images/factory-satellite-view.png"
                alt={getLocalized({ zh: "华豪密封件厂区实景", en: "Huahao Sealing factory", vi: "Nhà máy Huahao Sealing", th: "โรงงาน Huahao Sealing", ru: "Завод Huahao Sealing", ja: "華豪シール工場", ko: "Huahao Sealing 공장" }, locale)}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding industrial-surface">
        <div className="container-wide">
          <div className="mb-10 max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.08em] text-accent">{copy.proof}</div>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">{t("qualityTitle")}</h2>
            <div className="industrial-divider" />
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {pillars.map((item) => (
              <div key={item.title} className="border border-border bg-white p-5">
                <Icon name={item.icon as IconName} className="mb-4 h-6 w-6 text-accent" />
                <h3 className="font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {qualityCards.map((item) => (
              <div key={item.title} className="card-static bg-white p-6">
                <h3 className="font-bold text-lg mb-3 text-primary">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">{t("milestoneTitle")}</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 pb-8 last:pb-0 relative">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent rounded-full shrink-0 mt-1" />
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                </div>
                <div>
                  <span className="text-sm font-semibold text-accent">{m.year}</span>
                  <p className="text-muted mt-1">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding industrial-surface">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.08em] text-accent">{copy.faqKicker}</div>
            <h2 className="mt-3 text-3xl font-bold text-primary">{t("faqTitle")}</h2>
            <div className="industrial-divider mx-auto" />
            <p className="text-muted mt-4 max-w-2xl mx-auto">{t("faqSubtitle")}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            {faqCats.map((cat, ci) => (
              <div key={ci}>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-accent" />
                  {cat.title}
                </h3>
                <div className="space-y-3">
                  {cat.items.map((item, ii) => (
                    <FAQAccordion key={ii} title={item.question}>
                      <p className="text-sm text-muted leading-relaxed">{item.answer}</p>
                    </FAQAccordion>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* FAQ structured data for search engines */}
      <FaqJsonLd
        questions={faqCats.flatMap((cat) =>
          cat.items.map((item) => ({ q: item.question, a: item.answer }))
        )}
      />
    </>
  )
}
