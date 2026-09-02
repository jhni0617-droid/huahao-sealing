/**
 * 国家/区域市场 Landing Page 数据
 * 对照竞争情报报告 P0 关键词 #66-80：vietnam graphite seals supplier、india mechanical seal manufacturer、
 * middle east industrial seals、indonesia pump seal、brazil mechanical seals importer、russia carbon graphite。
 * 6 个核心出口市场 × 4 语言（zh / en / vi / th），聚焦区域市场特征、本地化工况与进口需求。
 * 参考：越南化工泵市场、印度石化 API 682、中东油气防腐、印尼造纸与化肥、巴西乙醇与制糖、俄罗斯极寒工业。
 */

export interface MarketLanding {
  slug: string
  title: { zh: string; en: string; vi?: string; th?: string }
  description: { zh: string; en: string; vi?: string; th?: string }
  marketStats: { label: string; value: string }[]
  industries: { zh: string[]; en: string[]; vi?: string[]; th?: string[] }
  solutions: { zh: string[]; en: string[]; vi?: string[]; th?: string[] }
  relatedProducts: string[]
  faq: {
    zh: { q: string; a: string }[]
    en: { q: string; a: string }[]
    vi?: { q: string; a: string }[]
    th?: { q: string; a: string }[]
  }
}

export const marketLandings: MarketLanding[] = [
  // 1. 越南市场
  {
    slug: "vietnam",
    title: {
      zh: "越南碳石墨密封件供应商 | 化工泵与纺织机械密封环",
      en: "Vietnam Carbon Graphite Seal Supplier | Chemical Pump & Textile Machinery Seal Rings",
      vi: "Nhà cung cấp vòng đệm than chì carbon Việt Nam | Vòng kín bơm hóa chất & máy dệt",
      th: "ซัพพลายเออร์ซีลคาร์บอนกราไฟต์เวียดนาม | แหวนซีลปั๊มเคมีและเครื่องจักรสิ่งทอ",
    },
    description: {
      zh: "华豪密封深耕越南市场，为海防化工园区、胡志明市纺织集群与北部湾炼油厂提供碳石墨密封环、轴套与三瓣环。支持越南进口清关单据与原产地证 FormE 享受 ASEAN-China FTA 0% 关税，中文 / 越南语 / 英文工程师对接，河内与海防港口到岸 7-10 天。",
      en: "Huahao Sealing has served Vietnam's market for years, supplying carbon graphite seal rings, bushings and split rings to Hai Phong chemical parks, Ho Chi Minh textile clusters and northern refineries. We provide FormE origin certificates for ASEAN-China FTA 0% tariff, support Vietnamese / English / Chinese engineering dialogue, with 7-10 day delivery to Hai Phong and Hanoi ports.",
      vi: "Huahao Sealing đã phục thị trường Việt Nam nhiều năm, cung cấp vòng đệm than chì carbon, bạc lót và vòng chẻm cho khu công nghiệp hóa chất Hải Phòng, cụm dệt TP.HCM và nhà máy lọc dầu miền Bắc. Cung cấp chứng nhận xuất xứ FormE để hưởng thuế 0% ASEAN-China FTA, hỗ trợ kỹ sư Việt / Anh / Trung, giao 7-10 ngày đến cảng Hải Phòng và Hà Nội.",
      th: "Huahao Sealing รับใช้ตลาดเวียดนามมาหลายปี จัดหาแหวนซีลคาร์บอนกราไฟต์ บุชชิ่งและวงแหวนแยกให้นิคมอุตสาหกรรมเคมีไฮฟอง คลัสเตอร์สิ่งทอโฮจิมินห์และโรงกลั่นน้ำมันภาคเหนือ ออกใบรับรองแหล่งกำเนิด FormE ภาษี 0% ASEAN-China FTA",
    },
    marketStats: [
      { label: "Market Focus", value: "Chemical pumps · Textile machinery · Refining" },
      { label: "FTA Status", value: "ASEAN-China 0% tariff (FormE)" },
      { label: "Lead Time", value: "7-10 days to Hai Phong / Hanoi" },
      { label: "Languages", value: "Vietnamese · English · Chinese" },
      { label: "Key Ports", value: "Hai Phong · Ho Chi Minh · Da Nang" },
    ],
    industries: {
      zh: [
        "海防化工园区——烧碱、PVC、化肥装置泵密封",
        "胡志明市纺织与印染——高温导热油泵、染液循环泵",
        "北部湾炼油厂——含硫油品输送泵、压缩机密封",
        "造纸与制糖——纸浆泵、糖液离心机轴套",
      ],
      en: [
        "Hai Phong chemical parks — caustic soda, PVC and fertilizer plant pump seals",
        "Ho Chi Minh textile & dyeing — hot thermal oil pumps, dye circulation pumps",
        "Northern refineries — sour crude transfer pumps, compressor seals",
        "Paper & sugar — pulp pumps, sugar centrifuge bushings",
      ],
      vi: [
        "Khu hóa chất Hải Phòng — bơm xút, PVC, phân bón",
        "Dệt và nhuộm TP.HCM — bơm dầu tản nhiệt, bơm dung dịch nhuộm",
        "Nhà máy lọc dầu miền Bắc — bơm dầu lưu huỳnh, kín máy nén",
        "Giấy và đường — bơm bột giấy, bạc li tâm đường",
      ],
      th: [
        "นิคมเคมีไฮฟอง — ปั๊มด่าง PVC ปุ๋ย",
        "สิ่งทอและย้อมสีโฮจิมินห์ — ปั๊มน้ำมันระบายความร้อน ปั๊มสีย้อม",
        "โรงกลั่นน้ำมันภาคเหนือ — ปั๊มน้ำมันกำมะถัน ซีลคอมเพรสเซอร์",
        "กระดาษและน้ำตาล — ปั๊มเยื่อกระดาษ บุชชิ่งเหวี่ยงน้ำตาล",
      ],
    },
    solutions: {
      zh: [
        "FormE 原产地证——ASEAN-China FTA 0% 关税，降低越南进口商采购成本",
        "越南语技术对接——本地化选型建议与报价单，消除语言障碍",
        "耐碱石墨牌号 M106H——适配海防化工厂烧碱、纯碱工况",
        "快速发货——青岛/上海港至海防 7-10 天到岸，支持急单 5 天空运",
      ],
      en: [
        "FormE origin certificate — ASEAN-China FTA 0% tariff reduces importer cost",
        "Vietnamese engineering dialogue — localized grade selection and quotations eliminate language barriers",
        "Alkali-resistant graphite grade M106H — adapts to Hai Phong caustic soda and soda ash service",
        "Fast delivery — Qingdao / Shanghai to Hai Phong 7-10 days, 5-day air freight for urgent orders",
      ],
      vi: [
        "Chứng nhận xuất xứ FormE — thuế 0% ASEAN-China FTA giảm chi phí nhập khẩu",
        "Kỹ sư tiếng Việt — tư vấn chọn vật liệu và báo giá bằng tiếng Việt",
        "Vật liệu chống kiềm M106H — cho nhà máy xút, xút cáu ở Hải Phòng",
        "Giao nhanh — Thanh Đảo / Thượng Hải đến Hải Phòng 7-10 ngày, hàng không 5 ngày",
      ],
      th: [
        "ใบรับรองแหล่งกำเนิด FormE — ภาษี 0% ASEAN-China FTA ลดต้นทุนนำเข้า",
        "วิศวกรภาษาเวียดนาม — คำแนะนำเลือกวัสดุและใบเสนอราคาภาษาเวียดนาม",
        "วัสดุทนด่าง M106H — สำหรับโรงงานด่าง โซดาแอช ที่ไฮฟอง",
        "จัดส่งเร็ว — ชิงเต่า เซี่ยงไฮ้ ถึงไฮฟอง 7-10 วัน อากาศ 5 วัน",
      ],
    },
    relatedProducts: ["seal-rings", "bushings", "split-rings"],
    faq: {
      zh: [
        {
          q: "越南客户如何申请 FormE 原产地证享受 0% 关税？",
          a: "出口前我们会向出入境检验检疫局申请 FormE 中国-东盟自贸区原产地证,越南进口商凭此证可享受 ASEAN-China FTA 0% 关税待遇。请下单时提供完整的越南进口商名称、HS 编码(通常 8484.10.00)和合同号。",
        },
        {
          q: "越南本地是否有技术对接？",
          a: "我们有越南语工程师对接,选型建议、报价单、安装说明均可提供越南语版本。越南客户可直接用越南语沟通,无需英语或中文翻译。",
        },
        {
          q: "海运到越南海防港需要多久？",
          a: "青岛港或上海港到海防港海运 7-10 天,支持整柜 (FCL) 和拼箱 (LCL)。急单可走空运到河内内排机场或胡志明市新山一机场,4-5 天到货。",
        },
      ],
      en: [
        {
          q: "How do Vietnamese buyers obtain FormE certificates for 0% tariff?",
          a: "We apply to China Customs for FormE ASEAN-China FTA origin certificates before shipment. Vietnamese importers present this certificate to enjoy 0% tariff treatment. Please provide the importer's full name, HS code (typically 8484.10.00), and contract number with your order.",
        },
        {
          q: "Do you offer Vietnamese-language technical support?",
          a: "Yes — we have Vietnamese-speaking engineers for grade selection, quotations and installation instructions in Vietnamese. Vietnamese buyers can communicate directly in Vietnamese without English or Chinese translation.",
        },
        {
          q: "What's the sea freight lead time to Vietnam?",
          a: "Sea freight from Qingdao or Shanghai to Hai Phong takes 7-10 days, supporting both FCL and LCL. Urgent orders ship by air to Hanoi Noi Bai or HCMC Tan Son Nhat airports, 4-5 days delivery.",
        },
      ],
      vi: [
        {
          q: "Khách hàng Việt Nam làm FormE hưởng thuế 0% thế nào?",
          a: "Chúng tôi xin chứng nhận xuất xứ FormE ASEAN-China FTA từ hải quan trước khi xuất hàng. Nhập khẩu Việt Nam dùng chứng nhận này để hưởng thuế 0%. Vui lòng cung cấp tên nhập khẩu, mã HS (thường là 8484.10.00) và số hợp đồng khi đặt hàng.",
        },
        {
          q: "Có hỗ trợ kỹ thuật tiếng Việt không?",
          a: "Có — chúng tôi có kỹ sư nói tiếng Việt cho tư vấn vật liệu, báo giá và hướng dẫn lắp đặt bằng tiếng Việt. Khách Việt có thể trao đổi trực tiếp bằng tiếng Việt.",
        },
        {
          q: "Thời gian giao hàng biển đến Việt Nam?",
          a: "Từ Thanh Đảo hoặc Thượng Hải đến Hải Phòng mất 7-10 ngày, hỗ trợ FCL và LCL. Hàng khẩn bay đến Hà Nội Nội Bài hoặc Tân Sơn Nhất, 4-5 ngày.",
        },
      ],
      th: [
        {
          q: "ผู้นำเข้าเวียดนามรับ FormE เพื่อภาษี 0% อย่างไร?",
          a: "เราขอใบรับรองแหล่งกำเนิด FormE ASEAN-China FTA จากศุลกากรก่อนส่งออก ผู้นำเข้าเวียดนามใช้ใบนี้เพื่อภาษี 0%",
        },
        {
          q: "มีบริการวิศวกรภาษาเวียดนามหรือไม่?",
          a: "มี — เรามีวิศวกรพูดภาษาเวียดนามสำหรับเลือกวัสดุ ใบเสนอราคา และคู่มือการติดตั้งภาษาเวียดนาม",
        },
        {
          q: "เวลาจัดส่งทางเรือไปเวียดนาม?",
          a: "จากชิงเต่าหรือเซี่ยงไฮ้ไปไฮฟองใช้ 7-10 วัน รองรับทั้ง FCL และ LCL",
        },
      ],
    },
  },

  // 2. 印度市场
  {
    slug: "india",
    title: {
      zh: "印度碳石墨机械密封制造商 | 石化 API 682 与电站密封环",
      en: "India Carbon Graphite Mechanical Seal Manufacturer | Petrochemical API 682 & Power Plant Seal Rings",
      vi: "Nhà sản xuất vòng kín cơ khí than chì carbon cho Ấn Độ | API 682 hóa dầu & nhà máy điện",
      th: "ผู้ผลิตซีลคาร์บอนกราไฟต์อินเดีย | API 682 ปิโตรเคมีและโรงไฟฟ้า",
    },
    description: {
      zh: "华豪密封服务印度石化与电站市场,为 Reliance、IOCL、BPCL 等大型炼厂提供 API 682 标准碳石墨密封环,适配催化裂化油泵、减压塔底泵、含硫油品输送泵。支持 BIS 认证咨询、英文技术对接,孟买那瓦舍瓦港到岸 18-25 天。",
      en: "Huahao Sealing serves India's petrochemical and power market, supplying API 682-grade carbon graphite seal rings to Reliance, IOCL, BPCL and other major refineries. Our rings fit FCC oil pumps, vacuum tower bottom pumps, and sour crude transfer pumps. We support BIS certification consultation, English engineering dialogue, and 18-25 day delivery to Mumbai Nhava Sheva port.",
      vi: "Huahao Sealing phục thị trường hóa dầu và điện Ấn Độ, cung cấp vòng đệm than chì carbon tiêu chuẩn API 682 cho Reliance, IOCL, BPCL. Phù hợp bơm FCC, bơm chân không, bơm dầu lưu huỳnh. Hỗ trợ tư vấn BIS, kỹ sư Anh ngữ, giao 18-25 ngày đến cảng Mumbai Nhava Sheva.",
      th: "Huahao Sealing รับใช้ตลาดปิโตรเคมีและไฟฟ้าอินเดีย จัดหาแหวนซีลคาร์บอนกราไฟต์ API 682 ให้ Reliance IOCL BPCL เหมาะกับปั๊ม FCC ปั๊มสุญญากาศ ปั๊มน้ำมันกำมะถัน",
    },
    marketStats: [
      { label: "Market Focus", value: "Petrochemical · Refinery · Power plant" },
      { label: "Standard", value: "API 682 / IS 9375" },
      { label: "Lead Time", value: "18-25 days to Mumbai Nhava Sheva" },
      { label: "Languages", value: "English · Hindi (on request)" },
      { label: "Key Ports", value: "Mumbai · Chennai · Mundra · Kolkata" },
    ],
    industries: {
      zh: [
        "Reliance / IOCL / BPCL 炼厂——API 682 标准机械密封",
        "Gujarat Dahej 化工园区——烧碱、氯乙烯装置",
        "印度火电站——锅炉给水泵、凝结水泵密封",
        "Tata / Adani 电站——汽轮机轴封与给水泵密封",
      ],
      en: [
        "Reliance / IOCL / BPCL refineries — API 682 mechanical seals",
        "Gujarat Dahej chemical parks — caustic soda, VCM plants",
        "Indian thermal power plants — boiler feed pumps, condensate pumps",
        "Tata / Adani power — turbine shaft seals and feed pump seals",
      ],
      vi: [
        "Reliance / IOCL / BPCL — kín cơ khí API 682",
        "Khu hóa chất Gujarat Dahej — xút, VCM",
        "Nhà máy nhiệt điện Ấn Độ — bơm cấp nồi hơi, bơm ngưng",
        "Tata / Adani — kín trục tuabin và bơm cấp",
      ],
      th: [
        "Reliance / IOCL / BPCL — ซีล API 682",
        "นิคมเคมี Gujarat Dahej — ด่าง VCM",
        "โรงไฟฟ้าพลังความร้อนอินเดีย — ปั๊มน้ำป้อนหม้อ ปั๊มควบแน่น",
        "Tata / Adani — ซีลเพลาเทอร์ไบน์และปั๊มป้อน",
      ],
    },
    solutions: {
      zh: [
        "API 682 标准密封腔——直接替换 Reliance、IOCL 炼厂原厂密封",
        "BIS 认证咨询——协助进口商申请 BIS 注册证,合规清关",
        "锑浸渍石墨 M106H——耐 500℃,适配 FCC 油泵高温工况",
        "英文工程师对接——孟买、金奈客户经理 24 小时响应",
      ],
      en: [
        "API 682 seal chambers — drop-in replacement for Reliance, IOCL refinery OEM seals",
        "BIS certification consultation — assists importers in obtaining BIS registration for compliant clearance",
        "Antimony-impregnated graphite M106H — rated 500°C for FCC oil pump high-temp service",
        "English engineer dialogue — Mumbai, Chennai account managers respond within 24 hours",
      ],
      vi: [
        "Kín API 682 — thay thế trực tiếp OEM Reliance, IOCL",
        "Tư vấn BIS — hỗ trợ xin BIS cho thông quan",
        "Than chì antimony M106H — chịu 500°C cho bơm FCC",
        "Kỹ sư Anh ngữ — Mumbai, Chennai trả lời 24 giờ",
      ],
      th: [
        "ซีล API 682 — เปลี่ยนตรงสำหรับ OEM Reliance, IOCL",
        "ที่ปรึกษา BIS — ช่วยขอ BIS ให้ผ่านพิธีการ",
        "กราไฟต์ antimony M106H — ทน 500°C สำหรับปั๊ม FCC",
        "วิศวกรภาษาอังกฤษ — Mumbai, Chennai ตอบ 24 ชม.",
      ],
    },
    relatedProducts: ["seal-rings", "bushings", "split-rings"],
    faq: {
      zh: [
        {
          q: "印度进口是否需要 BIS 认证?",
          a: "部分机械密封件属于 IS 9375 范围,进口商需 BIS 注册。我们提供 BIS 注册所需的全套技术文件、材质报告与样品,协助印度进口商完成注册流程。",
        },
        {
          q: "是否可以替代 John Crane / Flowserve 印度市场原厂密封?",
          a: "可对标 John Crane T2100/T2300 系列、Flowserve PSS-10 系列等 API 682 标准,提供相同密封腔尺寸的碳石墨密封环,材质可选锑浸渍 M106H、碳化处理 M191T。",
        },
        {
          q: "海运到印度孟买需多久?",
          a: "上海港或青岛港到孟买那瓦舍瓦港 18-25 天,加尔各答港 22-28 天。空运到孟买机场 4-5 天。",
        },
      ],
      en: [
        {
          q: "Is BIS certification required for India import?",
          a: "Some mechanical seals fall under IS 9375 scope and require BIS registration. We provide complete technical files, material reports and samples required for BIS registration to assist Indian importers through the process.",
        },
        {
          q: "Can you replace John Crane / Flowserve India OEM seals?",
          a: "Yes — we match John Crane T2100/T2300 series, Flowserve PSS-10 series and other API 682 standard seal chambers, providing carbon graphite seal rings with the same chamber dimensions. Material options include antimony-impregnated M106H and carbonized M191T.",
        },
        {
          q: "What's the sea freight lead time to Mumbai?",
          a: "Shanghai or Qingdao to Mumbai Nhava Sheva port takes 18-25 days, Kolkata 22-28 days. Air freight to Mumbai airport 4-5 days.",
        },
      ],
      vi: [
        {
          q: "Nhập khẩu Ấn Độ có cần BIS không?",
          a: "Một số vòng kín cơ khí theo IS 9375 cần BIS. Chúng tôi cung cấp đầy đủ hồ sơ kỹ thuật, báo cáo vật liệu và mẫu cho BIS.",
        },
        {
          q: "Có thể thay OEM John Crane / Flowserve ở Ấn Độ không?",
          a: "Có — đối tiêu John Crane T2100/T2300, Flowserve PSS-10, cùng kích thước kín API 682. Vật liệu M106H, M191T.",
        },
        {
          q: "Thời gian giao đến Mumbai?",
          a: "Thượng Hải hoặc Thanh Đảo đến Mumbai 18-25 ngày, Kolkata 22-28 ngày. Hàng không 4-5 ngày.",
        },
      ],
      th: [
        {
          q: "การนำเข้าอินเดียต้องมี BIS ไหม?",
          a: "ซีลกลุ่ม IS 9375 ต้องมี BIS เราจัดเต็มเอกสารและตัวอย่าง",
        },
        {
          q: "ทดแทน John Crane / Flowserve ได้ไหม?",
          a: "ได้ — จับคู่ T2100/T2300, PSS-10 ขนาดเท่า API 682",
        },
        {
          q: "เวลาจัดส่งถึง Mumbai?",
          a: "18-25 วัน ถึง Nhava Sheva",
        },
      ],
    },
  },

  // 3. 中东市场
  {
    slug: "middle-east",
    title: {
      zh: "中东油气工业碳石墨密封件 | 含硫油品与海水冷却工况",
      en: "Middle East Oil & Gas Carbon Graphite Seals | Sour Crude & Seawater Cooling Applications",
      vi: "Vòng đệm than chì carbon dầu khí Trung Đông | Dầu lưu huỳnh & làm mát nước biển",
      th: "ซีลคาร์บอนกราไฟต์น้ำมันก๊าซตะวันออกกลาง | น้ำมันกำมะถันและหล่อเย็นน้ำทะเล",
    },
    description: {
      zh: "华豪密封服务中东油气工业,为沙特阿美、ADNOC、卡塔尔能源等提供抗 H2S 含硫油品碳石墨密封环、抗氯离子海水冷却泵轴套。碳化处理牌号 M191T 耐 600℃ 适配催化裂化高温,SiC 配对面抗含盐介质腐蚀。迪拜杰贝阿里港到岸 20-28 天。",
      en: "Huahao Sealing serves Middle East oil & gas, supplying H2S-resistant carbon graphite seal rings for sour crude and chloride-resistant bushings for seawater cooling pumps to Saudi Aramco, ADNOC, QatarEnergy. Carbonized grade M191T handles 600°C FCC service, SiC mating faces resist salt media corrosion. 20-28 days delivery to Dubai Jebel Ali port.",
      vi: "Huahao Sealing phục dầu khí Trung Đông, cung cấp vòng đệm than chì carbon chống H2S cho dầu lưu huỳnh và bạc chống chloride cho bơm làm mát nước biển. M191T chịu 600°C FCC, mặt SiC chống mặn. Giao 20-28 ngày đến Dubai Jebel Ali.",
      th: "Huahao Sealing รับใช้น้ำมันก๊าซตะวันออกกลาง จัดหาซีลคาร์บอนกราไฟต์ต้าน H2S น้ำมันกำมะถันและบุชชิ่งต้านคลอไรด์สำหรับปั๊มน้ำทะเล M191T ทน 600°C FCC ผิว SiC ทนเค็ม",
    },
    marketStats: [
      { label: "Market Focus", value: "Oil & gas · Sour crude · Seawater cooling" },
      { label: "Standards", value: "API 682 · NACE MR0175 · SASO" },
      { label: "Lead Time", value: "20-28 days to Dubai Jebel Ali" },
      { label: "Languages", value: "English · Arabic (on request)" },
      { label: "Key Ports", value: "Dubai · Dammam · Doha · Jebel Ali" },
    ],
    industries: {
      zh: [
        "沙特阿美 / ADNOC 炼厂——含硫油品与酸性水工况",
        "卡塔尔 LNG 工厂——低温泵与压缩机密封",
        "迪拜海水淡化——多级闪蒸泵轴套",
        "沙特石化 Sabic——乙烯装置与裂解炉密封",
      ],
      en: [
        "Saudi Aramco / ADNOC refineries — sour crude and sour water service",
        "Qatar LNG plants — cryogenic pumps and compressor seals",
        "Dubai desalination — MSF flash pump bushings",
        "Saudi Sabic petrochemical — ethylene unit and cracker seals",
      ],
      vi: [
        "Aramco / ADNOC — dầu lưu huỳnh và nước chua",
        "Qatar LNG — bơm cryogenic, kín nén",
        "Dubai lọc nước — bạc bơm MSF",
        "Sabic hóa dầu — kín cặn etylen",
      ],
      th: [
        "Aramco / ADNOC — น้ำมันกำมะถันและน้ำเปรี้ยว",
        "Qatar LNG — ปั๊ม cryogenic ซีลคอมเพรสเซอร์",
        "Dubai กรองน้ำ — บุชชิ่งปั๊ม MSF",
        "Sabic — ซีล etylen",
      ],
    },
    solutions: {
      zh: [
        "碳化处理 M191T——耐 600℃,适配 FCC 高温油泵",
        "SiC 配对面——抗含盐海水介质腐蚀",
        "NACE MR0175 抗 H2S 牌号——含硫油品工况合规",
        "SASO 认证咨询——协助沙特进口商 SASO IECEE 清关",
      ],
      en: [
        "Carbonized M191T — rated 600°C for FCC high-temp pumps",
        "SiC mating faces — resist saline seawater media corrosion",
        "NACE MR0175 H2S-resistant grades — sour crude service compliance",
        "SASO certification consultation — assists Saudi importers with SASO IECEE clearance",
      ],
      vi: [
        "M191T carbonized — chịu 600°C cho bơm FCC",
        "Mặt SiC — chống mặn nước biển",
        "Vật liệu NACE MR0175 — hợp chuẩn H2S",
        "Tư vấn SASO — hỗ trợ nhập khẩu Saudi",
      ],
      th: [
        "M191T carbonized — ทน 600°C สำหรับปั๊ม FCC",
        "ผิว SiC — ทนน้ำเค็ม",
        "วัสดุ NACE MR0175 — สอดคล้อง H2S",
        "ที่ปรึกษา SASO — ช่วยนำเข้าซาอุดี",
      ],
    },
    relatedProducts: ["seal-rings", "bushings", "split-rings"],
    faq: {
      zh: [
        {
          q: "出口沙特需要 SASO 认证吗?",
          a: "部分工业品出口沙特需 SASO IECEE 认证。我们提供产品测试报告、COC 证书申请协助,沙特进口商凭 SASO COC 证书清关。",
        },
        {
          q: "抗 H2S 含硫油品应选什么牌号?",
          a: "推荐碳化处理石墨 M191T(耐 600℃、化学惰性强),或锑浸渍 M106H(耐 500℃)。两种牌号均符合 NACE MR0175 含硫油品工况要求。",
        },
      ],
      en: [
        {
          q: "Does Saudi export require SASO certification?",
          a: "Some industrial products exported to Saudi Arabia require SASO IECEE certification. We provide product test reports and COC certificate application assistance. Saudi importers clear customs with the SASO COC certificate.",
        },
        {
          q: "Which grade for H2S sour crude service?",
          a: "We recommend carbonized graphite M191T (600°C, strong chemical inertness) or antimony-impregnated M106H (500°C). Both grades comply with NACE MR0175 sour service requirements.",
        },
      ],
      vi: [
        { q: "Xuất Saudi cần SASO không?", a: "Một số sản phẩm cần SASO IECEE. Chúng tôi hỗ trợ báo cáo test và COC." },
        { q: "Vật liệu nào cho H2S?", a: "M191T carbonized 600°C hoặc M106H 500°C, đều hợp NACE MR0175." },
      ],
      th: [
        { q: "ส่งซาอุดีต้องมี SASO ไหม?", a: "บางสินค้าต้องมี SASO IECEE เราช่วยรายงานทดสอบและ COC" },
        { q: "วัสดุใดสำหรับ H2S?", a: "M191T 600°C หรือ M106H 500°C สอดคล้อง NACE MR0175" },
      ],
    },
  },

  // 4. 印尼市场
  {
    slug: "indonesia",
    title: {
      zh: "印尼碳石墨密封环供应商 | 造纸化肥与棕榈油工业",
      en: "Indonesia Carbon Graphite Seal Ring Supplier | Pulp & Fertilizer & Palm Oil Industry",
      vi: "Nhà cung cấp vòng đệm than chì carbon Indonesia | Giấy & phân bón & dầu cọ",
      th: "ซัพพลายเออร์ซีลคาร์บอนกราไฟต์อินโดนีเซีย | เยื่อกระดาษ ปุ๋ย และน้ำมันปาล์ม",
    },
    description: {
      zh: "华豪密封服务印尼造纸、化肥、棕榈油工业,为 APP 亚洲纸浆、Pupuk Indonesia 化肥、Wilmar 棕榈油提供耐碱耐磨损碳石墨密封环与轴套。支持原产地证 FormE 享受 ASEAN-China FTA 0% 关税,雅加达丹戎不碌港到岸 12-18 天。",
      en: "Huahao Sealing serves Indonesia's paper, fertilizer, and palm oil industries, supplying alkali-resistant, wear-resistant carbon graphite seal rings and bushings to APP (Asia Pulp & Paper), Pupuk Indonesia fertilizer, and Wilmar palm oil. FormE origin certificates enable ASEAN-China FTA 0% tariff, 12-18 days delivery to Jakarta Tanjung Priok port.",
      vi: "Huahao Sealing phục thị trường giấy, phân bón, dầu cọ Indonesia, cung cấp vòng đệm và bạc than chì carbon chống kiềm mài mòn cho APP, Pupuk Indonesia, Wilmar. FormE hưởng thuế 0%, giao 12-18 ngày đến cảng Jakarta Tanjung Priok.",
      th: "Huahao Sealing รับใช้อุตสาหกรรมกระดาษ ปุ๋ย น้ำมันปาล์มอินโดนีเซีย จัดหาซีลและบุชชิ่งทนด่างทนสึกให้ APP Pupuk Indonesia Wilmar FormE ภาษี 0% ส่ง 12-18 วันถึงท่าเรือจาการ์ตา",
    },
    marketStats: [
      { label: "Market Focus", value: "Pulp & paper · Fertilizer · Palm oil" },
      { label: "FTA Status", value: "ASEAN-China 0% (FormE)" },
      { label: "Lead Time", value: "12-18 days to Jakarta Tanjung Priok" },
      { label: "Languages", value: "English · Bahasa (on request)" },
      { label: "Key Ports", value: "Jakarta · Surabaya · Belawan" },
    ],
    industries: {
      zh: [
        "APP 亚洲纸浆——纸浆泵、白水泵密封",
        "Pupuk Indonesia 化肥——氨水、尿素装置泵",
        "Wilmar 棕榈油——高温油泵、压榨机轴套",
        "印尼炼厂 Pertamina——油品输送与压缩机密封",
      ],
      en: [
        "APP Asia Pulp & Paper — pulp pumps, white water pump seals",
        "Pupuk Indonesia fertilizer — ammonia, urea plant pumps",
        "Wilmar palm oil — hot oil pumps, press bushings",
        "Pertamina refineries — oil transfer & compressor seals",
      ],
      vi: [
        "APP — bơm bột giấy, bơm nước trắng",
        "Pupuk Indonesia — bơm amoniac, urê",
        "Wilmar — bơm dầu nóng, bạc ép",
        "Pertamina — bơm dầu, kín nén",
      ],
      th: [
        "APP — ปั๊มเยื่อ ปั๊มน้ำขาว",
        "Pupuk — ปั๊มแอมโมเนีย ยูเรีย",
        "Wilmar — ปั๊มน้ำมันร้อน บุชชิ่งอัด",
        "Pertamina — ปั๊มน้ำมัน ซีล",
      ],
    },
    solutions: {
      zh: [
        "耐碱石墨牌号——适配 APP 造纸烧碱工况",
        "树脂浸渍石墨——耐 220℃,适配棕榈油高温压榨",
        "FormE 原产地证——ASEAN-China FTA 0% 关税",
        "印尼语对接支持——雅加达客户经理 24 小时响应",
      ],
      en: [
        "Alkali-resistant graphite grades — adapt to APP paper caustic soda service",
        "Resin-impregnated graphite — rated 220°C, adapts to palm oil hot pressing",
        "FormE origin certificate — ASEAN-China FTA 0% tariff",
        "Bahasa Indonesia support — Jakarta account managers respond within 24 hours",
      ],
      vi: [
        "Vật liệu chống kiềm — cho APP giấy xút",
        "Than chì nhựa — chịu 220°C, cho dầu cọ",
        "FormE — thuế 0% ASEAN-China",
        "Tiếng Indonesia — Jakarta 24 giờ",
      ],
      th: [
        "วัสดุทนด่าง — สำหรับ APP กระดาษด่าง",
        "กราไฟต์อิมพรีเกรตเรซิน — ทน 220°C สำหรับน้ำมันปาล์ม",
        "FormE — ภาษี 0% ASEAN-China",
        "ภาษาอินโดนีเซีย — จาการ์ตา 24 ชม.",
      ],
    },
    relatedProducts: ["seal-rings", "bushings", "split-rings"],
    faq: {
      zh: [
        { q: "出口印尼的关税如何?", a: "凭 FormE 中国-东盟自贸区原产地证,可享 ASEAN-China FTA 0% 关税。下单请提供印尼进口商名称和 HS 编码。" },
        { q: "棕榈油高温工况推荐什么牌号?", a: "推荐树脂浸渍石墨 M120H(耐 220℃),适配棕榈油压榨温度。若温度更高可选锑浸渍 M106H(500℃)。" },
      ],
      en: [
        { q: "What are the tariffs for Indonesia exports?", a: "With FormE ASEAN-China FTA origin certificate, 0% tariff. Provide Indonesian importer name and HS code with order." },
        { q: "Which grade for palm oil high-temp service?", a: "Resin-impregnated M120H (220°C) for palm oil pressing. For higher temperatures, antimony-impregnated M106H (500°C)." },
      ],
      vi: [
        { q: "Thuế xuất Indonesia?", a: "FormE thuế 0%. Cung cấp tên nhập khẩu và HS." },
        { q: "Vật liệu cho dầu cọ nhiệt cao?", a: "M120H nhựa 220°C, hoặc M106H 500°C." },
      ],
      th: [
        { q: "ภาษีส่งอินโดนีเซีย?", a: "FormE ภาษี 0% แจ้งชื่อผู้นำเข้าและ HS" },
        { q: "วัสดุสำหรับน้ำมันปาล์มร้อน?", a: "M120H อิมพรีเกรตเรซิน 220°C หรือ M106H 500°C" },
      ],
    },
  },

  // 5. 巴西市场
  {
    slug: "brazil",
    title: {
      zh: "巴西碳石墨机械密封进口商 | 乙醇制糖与海上油气",
      en: "Brazil Carbon Graphite Mechanical Seal Importer | Ethanol, Sugar & Offshore Oil",
      vi: "Nhà nhập khẩu vòng kín cơ khí than chì carbon Brazil | Etanol, đường & dầu khí",
      th: "ผู้นำเข้าซีลคาร์บอนกราไฟต์บราซิล | เอทานอล น้ำตาล และน้ำมันก๊าซ",
    },
    description: {
      zh: "华豪密封服务巴西乙醇、制糖与海上油气市场,为 Petrobras、Raízen、Cosan 提供 API 682 标准机械密封、耐磨损轴套。支持英文 / 葡萄牙语对接,桑托斯港到岸 35-45 天,急单空运圣保罗 6-8 天。",
      en: "Huahao Sealing serves Brazil's ethanol, sugar, and offshore oil markets, supplying API 682 mechanical seals and wear-resistant bushings to Petrobras, Raízen, and Cosan. English and Portuguese dialogue support. Santos port delivery 35-45 days, urgent air freight to São Paulo 6-8 days.",
      vi: "Huahao Sealing phục ethanol, đường, dầu khí ngoài khơi Brazil, cung cấp kín API 682 và bạc chống mài mòn cho Petrobras, Raízen, Cosan. Hỗ trợ Anh / Bồ Đào Nha. Santos 35-45 ngày, hàng không São Paulo 6-8 ngày.",
      th: "Huahao Sealing รับใช้เอทานอล น้ำตาล และน้ำมันนอกชายฝั่งบราซิล จัดหาซีล API 682 และบุชชิ่งทนสึกให้ Petrobras Raízen Cosan รองรับอังกฤษ/โปรตุเกส Santos 35-45 วัน",
    },
    marketStats: [
      { label: "Market Focus", value: "Ethanol · Sugar · Offshore oil" },
      { label: "Standards", value: "API 682 · ANTT" },
      { label: "Lead Time", value: "35-45 days to Santos" },
      { label: "Languages", value: "English · Portuguese (on request)" },
      { label: "Key Ports", value: "Santos · Rio · Itajaí" },
    ],
    industries: {
      zh: [
        "Petrobras 海上平台——钻井设备与离心泵密封",
        "Raízen 乙醇厂——发酵罐搅拌器与蒸馏塔泵",
        "Cosan 制糖——糖液离心机与压榨机轴套",
        "巴西纸浆——桉树纸浆生产线",
      ],
      en: [
        "Petrobras offshore platforms — drilling equipment & centrifugal pump seals",
        "Raízen ethanol plants — fermenter agitators & distillation column pumps",
        "Cosan sugar — sugar centrifuges & press bushings",
        "Brazil pulp — eucalyptus pulp lines",
      ],
      vi: [
        "Petrobras — bơm khoan, ly tâm",
        "Raízen — bơm cất, khuấy trộn",
        "Cosan — li tâm đường, bạc ép",
        "Giấy — bột eucalyptus",
      ],
      th: [
        "Petrobras — ปั๊มเจาะ ปั๊มหมุน",
        "Raízen — ปั๊มกลั่น อีกievล",
        "Cosan — เหวี่ยงน้ำตาล บุชชิ่งอัด",
        "กระดาษ — ยูคาลิปตัส",
      ],
    },
    solutions: {
      zh: [
        "API 682 标准机械密封——直接替换 Petrobras 海上平台原厂",
        "耐磨损轴套 M254J——适配 Cosan 制糖离心机颗粒磨损",
        "耐醇牌号——适配 Raízen 乙醇发酵与蒸馏",
        "葡萄牙语对接——圣保罗客户经理 24 小时响应",
      ],
      en: [
        "API 682 mechanical seals — drop-in replacement for Petrobras offshore platform OEM",
        "Wear-resistant bushing M254J — adapts to Cosan sugar centrifuge particle abrasion",
        "Alcohol-resistant grades — adapts to Raízen ethanol fermentation & distillation",
        "Portuguese dialogue — São Paulo account managers respond within 24 hours",
      ],
      vi: [
        "Kín API 682 — thay OEM Petrobras",
        "Bạc M254J — cho Cosan li tâm",
        "Vật liệu chống cồn — cho Raízen",
        "Bồ Đào Nha — São Paulo 24 giờ",
      ],
      th: [
        "ซีล API 682 — แทน OEM Petrobras",
        "บุชชิ่ง M254J — สำหรับ Cosan",
        "วัสดุต้านแอลกอฮอล์ — สำหรับ Raízen",
        "โปรตุเกส — เซาเปาโล 24 ชม.",
      ],
    },
    relatedProducts: ["seal-rings", "bushings", "split-rings"],
    faq: {
      zh: [
        { q: "海运到巴西桑托斯港需要多久?", a: "上海港或青岛港到桑托斯港 35-45 天,经新加坡或南非中转。急单可走空运到圣保罗瓜鲁柳斯机场 6-8 天。" },
        { q: "可以替代 John Crane 巴西原厂密封吗?", a: "可对标 John Crane T2100 系列、Flowserve PSS-10 等主流 API 682 标准,提供碳石墨密封环,材质可选锑浸渍、铜浸渍。" },
      ],
      en: [
        { q: "Sea freight lead time to Brazil Santos?", a: "Shanghai or Qingdao to Santos takes 35-45 days, via Singapore or South Africa transshipment. Urgent air freight to São Paulo Guarulhos 6-8 days." },
        { q: "Can you replace John Crane Brazil OEM seals?", a: "Yes — matching John Crane T2100 series, Flowserve PSS-10 and other mainstream API 682, with antimony or copper impregnated carbon graphite." },
      ],
      vi: [
        { q: "Thời gian đến Santos Brazil?", a: "35-45 ngày, qua Singapore hoặc Nam Phi. Hàng không São Paulo 6-8 ngày." },
        { q: "Thay OEM John Crane Brazil?", a: "Có — T2100, PSS-10 API 682, vật liệu M106H, đồng." },
      ],
      th: [
        { q: "เวลาถึง Santos Brazil?", a: "35-45 วัน ผ่านสิงคโปร์หรือแอฟริกาใต้ อากาศเซาเปาโล 6-8 วัน" },
        { q: "แทน John Crane Brazil?", a: "ได้ — T2100, PSS-10 API 682 วัสดุ M106H ทองแดง" },
      ],
    },
  },

  // 6. 俄罗斯市场
  {
    slug: "russia",
    title: {
      zh: "俄罗斯碳石墨密封件供应商 | 极寒工业与化工",
      en: "Russia Carbon Graphite Seal Supplier | Arctic-Grade Industrial & Chemical Applications",
      vi: "Nhà cung cấp vòng đệm than chì carbon Nga | Công nghiệp lạnh & hóa chất",
      th: "ซัพพลายเออร์ซีลคาร์บอนกราไฟต์รัสเซีย | อุตสาหกรรมหนาวเย็นและเคมี",
    },
    description: {
      zh: "华豪密封服务俄罗斯极寒工业与化工市场,为 Gazprom、Lukoil、Rosneft 提供低温 -200℃ 至高温 600℃ 全温区碳石墨密封环与轴套。支持俄语对接,圣彼得堡港到岸 30-40 天,中欧班列 18-25 天到莫斯科。",
      en: "Huahao Sealing serves Russia's arctic-grade industrial and chemical markets, supplying carbon graphite seal rings and bushings spanning -200°C cryogenic to 600°C high-temp for Gazprom, Lukoil, Rosneft. Russian-language support, 30-40 days to Saint Petersburg port, 18-25 days China-Europe rail to Moscow.",
      vi: "Huahao Sealing phục thị trường công nghiệp lạnh và hóa chất Nga, cung cấp vòng đệm than chì carbon từ -200°C cryogenic đến 600°C cho Gazprom, Lukoil, Rosneft. Hỗ trợ tiếng Nga, 30-40 ngày đến Saint Petersburg, 18-25 ngày tàu điện đến Moscow.",
      th: "Huahao Sealing รับใช้ตลาดอุตสาหกรรมหนาวเย็นและเคมีรัสเซีย จัดหาซีลคาร์บอนกราไฟต์ช่วง -200°C ถึง 600°C ให้ Gazprom Lukoil Rosneft ภาษารัสเซีย 30-40 วันถึง Saint Petersburg",
    },
    marketStats: [
      { label: "Market Focus", value: "Oil & gas · Cryogenic · Chemical" },
      { label: "Temperature", value: "-200°C to 600°C full range" },
      { label: "Lead Time", value: "18-25 days rail / 30-40 days sea" },
      { label: "Languages", value: "Russian · English" },
      { label: "Key Routes", value: "Saint Petersburg · Moscow rail · Vladivostok" },
    ],
    industries: {
      zh: [
        "Gazprom / Lukoil / Rosneft——油气输送泵与压缩机",
        "Novatek LNG——低温 -162℃ 液化天然气泵密封",
        "俄罗斯化肥厂——氨水与尿素装置",
        "西伯利亚极寒工业——-50℃ 启动工况密封",
      ],
      en: [
        "Gazprom / Lukoil / Rosneft — oil & gas transfer pumps and compressors",
        "Novatek LNG — cryogenic -162°C LNG pump seals",
        "Russian fertilizer plants — ammonia and urea units",
        "Siberian arctic industry — -50°C start-up service seals",
      ],
      vi: [
        "Gazprom / Lukoil / Rosneft — bơm dầu khí, nén",
        "Novatek LNG — kín -162°C",
        "Phân bón Nga — amoniac, urê",
        "Siberia -50°C khởi động",
      ],
      th: [
        "Gazprom / Lukoil / Rosneft — ปั๊มน้ำมันก๊าซ",
        "Novatek LNG — ซีล -162°C",
        "ปุ๋ย Nga — แอมโมเนีย ยูเรีย",
        "ไซบีเรีย -50°C",
      ],
    },
    solutions: {
      zh: [
        "全温区材料——-200℃ 至 600℃ 全覆盖",
        "低温牌号——适配 Novatek LNG -162℃ 工况",
        "中欧班列——18-25 天到莫斯科,比海运更快",
        "俄语对接——本地化选型与报价",
      ],
      en: [
        "Full-temperature-range materials — -200°C to 600°C coverage",
        "Cryogenic grades — adapt to Novatek LNG -162°C service",
        "China-Europe rail — 18-25 days to Moscow, faster than sea freight",
        "Russian-language dialogue — localized selection and quotation",
      ],
      vi: [
        "Vật liệu toàn dải — -200°C đến 600°C",
        "Vật liệu cryogenic — cho Novatek -162°C",
        "Tàu điện — 18-25 ngày đến Moscow",
        "Tiếng Nga — tư vấn và báo giá",
      ],
      th: [
        "วัสดุช่วงเต็ม — -200°C ถึง 600°C",
        "วัสดุ cryogenic — สำหรับ Novatek -162°C",
        "รถไฟจีน-ยุโรป — 18-25 วันถึง Moscow",
        "ภาษารัสเซีย — เลือกและเสนอราคา",
      ],
    },
    relatedProducts: ["seal-rings", "bushings", "split-rings"],
    faq: {
      zh: [
        { q: "中欧班列到莫斯科多久?", a: "中欧班列 18-25 天到莫斯科,比海运快 10-15 天。建议大宗货物走班列,急单空运到莫斯科谢列梅捷沃机场 6-8 天。" },
        { q: "极寒工况推荐什么牌号?", a: "推荐等静压石墨牌号(密度高、抗热震),低温适配 -200℃ LNG 工况。极寒启动可加金属浸渍增强韧性。" },
      ],
      en: [
        { q: "China-Europe rail lead time to Moscow?", a: "18-25 days to Moscow, 10-15 days faster than sea. Bulk shipments via rail, urgent air freight to Moscow Sheremetyevo 6-8 days." },
        { q: "Which grade for arctic service?", a: "Isostatic graphite grade (high density, thermal shock resistant) for -200°C LNG. Add metal impregnation for arctic start-up toughness." },
      ],
      vi: [
        { q: "Tàu điện đến Moscow?", a: "18-25 ngày, nhanh hơn 10-15 ngày. Hàng không Sheremetyevo 6-8 ngày." },
        { q: "Vật liệu cho lạnh?", a: "Isostatic graphite cho -200°C. Thêm kim loại cho khởi động lạnh." },
      ],
      th: [
        { q: "รถไฟถึง Moscow?", a: "18-25 วัน อากาศ Sheremetyevo 6-8 วัน" },
        { q: "วัสดุสำหรับหนาว?", a: "Isostatic graphite สำหรับ -200°C เติมโลหะเพิ่มความทน" },
      ],
    },
  },
]
