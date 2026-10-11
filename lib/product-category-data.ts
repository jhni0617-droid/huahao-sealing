/**
 * 产品类别 Landing Page 数据
 * 把 /products#seal-rings 这类 hash 锚点升级为可独立收录的 URL，让每个类别词拿到自己的
 * title / H1 / FAQPage schema，而不是三个核心产品词共用 /products 的权重。
 * 覆盖类别词：carbon graphite seal rings / carbon graphite bushings / carbon graphite bearings /
 * three-piece carbon seal rings，并承接 graphite components for mechanical seals 这一「产品+用途」长尾。
 * 4 个类别 × 4 语言（zh / en / vi / th），ru/ja/ko 由渲染端回落英文。
 * 数值口径取自 lib/products.ts 的 SKU 规格与 lib/materials-data.ts 的牌号表，不新增未验证参数。
 */

import { applyLandingTranslations } from "./landing-translations"

type Loc = { zh: string; en: string; vi?: string; th?: string }

export interface ProductCategoryLanding {
  slug: string
  /** 面包屑与卡片用的短名 */
  name: Loc
  /** SEO title：主关键词 | 场景细分词 */
  title: Loc
  /** meta description */
  description: Loc
  /** 首屏长简介 */
  intro: Loc
  image: string
  /** 关键事实速览：给精选摘要与 AI 引擎直接引用 */
  keyFacts: { label: string; value: string }[]
  /** 工况边界表 */
  specs: { label: string; value: string }[]
  advantages: { zh: string[]; en: string[]; vi?: string[]; th?: string[] }
  applications: { zh: string[]; en: string[]; vi?: string[]; th?: string[] }
  /** 该类别下的具体型号页（SKU slug），构成类别页 → 型号页的内链 */
  relatedProducts: string[]
  /** 跨族内链：材料页 / 场景页 / 定制页 / 对比页 */
  relatedPages: { href: string; label: Loc }[]
  faq: { q: Loc; a: Loc }[]
}

const sealRingSkus = [
  "bia-series", "104-series", "109-series", "58u-series", "m7n-series",
  "206-series", "59u-series", "58b-series", "g6-series", "f-type-series",
  "120-m3n-series", "fbd-series", "2100-series", "1527-series", "us-series",
  "527-series", "press-series", "dyeing-machine-series", "oil-pump-double-seal",
]

const RAW_ITEMS: ProductCategoryLanding[] = [
  // 1. 碳石墨密封环
  {
    slug: "seal-rings",
    name: {
      zh: "碳石墨密封环",
      en: "Carbon Graphite Seal Rings",
      vi: "Vòng đệm than chì carbon",
      th: "แหวนซีลคาร์บอนกราไฟต์",
    },
    title: {
      zh: "碳石墨密封环 | 泵与压缩机机械密封端面环，19 个标准型号可按图定制",
      en: "Carbon Graphite Seal Rings | Mechanical Seal Face Rings for Pumps & Compressors",
      vi: "Vòng đệm than chì carbon | Vòng kín mặt cho bơm và máy nén",
      th: "แหวนซีลคาร์บอนกราไฟต์ | แหวนหน้าซีลเชิงกลสำหรับปั๊มและคอมเพรสเซอร์",
    },
    description: {
      zh: "华豪密封量产 19 个碳石墨密封环标准型号，用作机械密封的动环与静环。内径 12-100 mm、外径 24-130 mm、环高 6-20 mm，可选树脂浸渍、锑浸渍与碳化处理牌号，配对 SiC、WC、氧化铝陶瓷或高铬不锈钢环。适用于离心泵、化工泵、油泵与压缩机端面密封，支持按图纸或样品定制非标尺寸。",
      en: "Huahao Sealing supplies 19 standard carbon graphite seal ring models used as rotating and stationary faces in mechanical seals. Bore 12-100 mm, OD 24-130 mm, height 6-20 mm, in resin-, antimony- or carbonized-impregnated grades, paired against SiC, WC, alumina ceramic or high-chrome steel faces. Seal rings for centrifugal pumps, chemical pumps, oil pumps and compressor service, custom sizes available to drawing or sample.",
      vi: "Huahao Sealing cung cấp 19 mẫu vòng đệm than chì carbon dùng làm mặt kín quay và mặt kín tĩnh trong kín cơ khí. Đường kính trong 12-100 mm, ngoài 24-130 mm, cao 6-20 mm, vật liệu impregnation nhựa, antimony hoặc carbonized, ghép với mặt SiC, WC, gốm alumina hoặc thép crom cao. Nhận gia công theo bản vẽ.",
      th: "Huahao Sealing จัดหาแหวนซีลคาร์บอนกราไฟต์ 19 รุ่นมาตรฐานใช้เป็นหน้าซีลหมุนและหน้าซีลนิ่งในซีลเชิงกล ขนาดรูใน 12-100 mm เส้นผ่านศูนย์กลางนอก 24-130 mm ความสูง 6-20 mm มีเกรด impregnation เรซิน พลวง และคาร์บอไนซ์ จับคู่กับผิว SiC WC เซรามิกอะลูมินา หรือเหล็กโครเมียมสูง รับผลิตตามแบบ",
    },
    intro: {
      zh: "碳石墨密封环是机械密封里承担端面密封的碳石墨环件，与硬质对偶环组成一对摩擦副。华豪密封的密封环以石油焦、沥青焦为原料经焙烧制成，孔隙率 8-15%，再按工况做树脂、锑或碳化浸渍封闭气孔，最终研磨至图纸公差并逐件检验平面度。摩擦系数 0.04-0.15，导热 8-70 W/m·K，可在无油或稀液润滑下建立自润滑转移膜，避免咬死与干摩擦擦伤。",
      en: "A carbon graphite seal ring is the carbon graphite member of a mechanical seal face pair, running against a harder mating ring. Huahao rings start as petroleum-coke and pitch-coke bodies that are baked, leaving 8-15% porosity, then impregnated with resin, antimony or carbonized to seal the pores according to duty, and finally lapped to drawing tolerance with flatness checked part by part. Friction coefficient 0.04-0.15 and thermal conductivity 8-70 W/m·K let the ring build a transfer film under oil-free or starved lubrication, preventing seizure and dry-run scoring.",
      vi: "Vòng đệm than chì carbon là bộ phận than chì của cặp mặt kín cơ khí, làm việc với vòng đối ghép cứng hơn. Vòng của Huahao làm từ coke dầu mỏ và coke hắc ín đã nung, độ rỗng 8-15%, sau đó impregnation nhựa, antimony hoặc carbonized tùy điều kiện làm việc và mài tinh đến dung sai bản vẽ, kiểm tra độ phẳng từng chi tiết. Hệ số ma sát 0.04-0.15, dẫn nhiệt 8-70 W/m·K tạo màng tự bôi trơn khi không có dầu.",
      th: "แหวนซีลคาร์บอนกราไฟต์คือชิ้นส่วนกราไฟต์ของคู่หน้าซีลเชิงกล ทำงานคู่กับแหวนอีกด้านที่มีความแข็งสูงกว่า แหวนของ Huahao ผลิตจาก coke ปิโตรเลียมและ coke hắc ín ผ่านการเผา มีรูพรุน 8-15% จากนั้น impregnation เรซิน พลวง หรือคาร์บอไนซ์ตามสภาพการทำงาน แล้วลบผิวจนถึงความคลาดเคลื่อนตามแบบและตรวจสอบความแบนทุกชิ้น สัมประสิทธิ์การเสียดทาน 0.04-0.15 นำความร้อน 8-70 W/m·K สร้างฟิล์มหล่อลื่นเองได้แม้ไม่มีน้ำมัน",
    },
    image: "/images/products/carbon-graphite-seal-ring.webp",
    keyFacts: [
      { label: "Standard models", value: "19 (BIA / 104 / 109 / 58U / M7N / 206 / G6 / F-Type …)" },
      { label: "Bore (d)", value: "12 – 100 mm" },
      { label: "Outer diameter (D)", value: "24 – 130 mm" },
      { label: "Ring height (H)", value: "6 – 20 mm" },
      { label: "Seal face width", value: "3 – 8 mm" },
      { label: "Temperature", value: "-40°C ~ 280°C standard; 300–350°C anti-oxidation grades; up to 500°C antimony / 600°C carbonized" },
      { label: "Recommended PV", value: "0.8 – 1.2 MPa·m/s (phenolic impregnated)" },
      { label: "Mating faces", value: "SiC / WC / Alumina ceramic / high-chrome stainless" },
    ],
    specs: [
      { label: "Temperature", value: "-40°C ~ 280°C (standard) · up to 350°C (anti-oxidation impregnation) · 500°C (antimony) · 600°C (carbonized)" },
      { label: "Pressure", value: "≤ 0.8 – 2.0 MPa seal face duty" },
      { label: "Shaft speed", value: "≤ 2000 – 5000 rpm depending on model" },
      { label: "Coefficient of friction", value: "0.04 – 0.15 (dry)" },
      { label: "Thermal conductivity", value: "8 – 70 W/m·K" },
      { label: "Chemical resistance", value: "pH 0 – 14 (grade dependent)" },
      { label: "Density", value: "1.55 – 1.85 g/cm³" },
      { label: "Dimensional finish", value: "CNC machined and face-lapped to drawing tolerance" },
    ],
    advantages: {
      zh: [
        "自润滑转移膜使摩擦系数低至0.04-0.15，在断液或启动瞬间保护对偶面不被擦伤",
        "导热率8-70 W/m·K，是金属环件的数倍，把端面摩擦热快速带走，降低热裂与热斑风险",
        "浸渍类型决定使用边界：酚醛树脂220℃、呋喃树脂Tg 260-300℃、锑浸渍500℃、碳化处理600℃",
        "化学惰性耐酸碱盐与有机溶剂，适合化工泵、海水泵与含硫油品等金属环件腐蚀失效的工况",
        "密封面逐件研磨检验，尺寸按图纸控制微米级公差，可直接替换原厂环而无需改造密封腔",
      ],
      en: [
        "The graphite transfer film keeps the friction coefficient at 0.04-0.15, protecting the mating face from scoring during liquid loss or startup",
        "Thermal conductivity of 8-70 W/m·K — several times metallic rings — carries friction heat away from the face and lowers thermal cracking and hot-spot risk",
        "Impregation sets the duty boundary: phenolic resin 220°C, furan resin Tg 260-300°C, antimony 500°C, carbonized 600°C",
        "Chemically inert to acids, alkalis, salts and solvents, suited to chemical pumps, seawater pumps and sour oil where metallic rings corrode",
        "Each seal face is lapped and inspected, dimensions held to micron-level drawing tolerance for drop-in replacement without modifying the seal chamber",
      ],
      vi: [
        "Màng chuyển graphite giữ hệ số ma sát 0.04-0.15, bảo vệ mặt kín khỏi trầy xước khi mất dịch hoặc khi khởi động",
        "Dẫn nhiệt 8-70 W/m·K gấp nhiều lần vòng kim loại, đưa nhiệt ma sát ra khỏi mặt kín, giảm nứt nhiệt",
        "Loại impregnation quyết định giới hạn làm việc: nhựa phenolic 220°C, nhựa furan Tg 260-300°C, antimony 500°C, carbonized 600°C",
        "Trơ hóa học với axit, kiềm, muối và dung môi, phù hợp bơm hóa chất, bơm nước biển và dầu nhiễm lưu huỳnh",
        "Mặt kín được mài và kiểm tra từng chi tiết, dung sai micromet theo bản vẽ, thay trực tiếp không cần cải tạo buồng kín",
      ],
      th: [
        "ฟิล์มถ่ายทอดกราไฟต์รักษาสัมประสิทธิ์การเสียดทาน 0.04-0.15 ป้องกันผิวหน้าซีลเสียหายเมื่อขาดของเหลวหรือขณะเริ่มต้น",
        "นำความร้อน 8-70 W/m·K สูงกว่าวงแหวนโลหะหลายเท่า พาความร้อนจากการเสียดทานออกจากพื้นผิว ลดรอยแตกจากความร้อน",
        "ชนิด impregnation กำหนดขอบเขตการใช้งาน เรซินฟีนอลิก 220°C ฟูลาน Tg 260-300°C พลวง 500°C คาร์บอไนซ์ 600°C",
        "เฉื่อยทางเคมีต่อกรด ด่าง เกลือ และตัวทำละลาย เหมาะกับปั๊มเคมี ปั๊มน้ำทะเล และน้ำมันที่มีกำมะถัน",
        "ลบผิวหน้าซีลและตรวจสอบทีละชิ้น ควบคุมขนาดระดับไมครอนตามแบบ เปลี่ยนตรงได้โดยไม่ต้องดัดแปลงห้องซีล",
      ],
    },
    applications: {
      zh: [
        "离心泵与化工泵的机械密封动环、静环",
        "高温油泵、塔底泵与含硫油品输送泵端面密封",
        "往复式与螺杆压缩机的密封环、活塞环",
        "船舶海水泵、艉轴密封与液压设备",
        "染色机高温染液泵与纺织设备密封",
      ],
      en: [
        "Rotating and stationary faces for centrifugal and chemical pump mechanical seals",
        "Face seals for hot oil pumps, tower bottom pumps and sour crude transfer pumps",
        "Seal rings and piston rings for reciprocating and screw compressors",
        "Marine seawater pumps, stern tube seals and hydraulic equipment",
        "High-temperature dye liquor pumps and textile machinery seals",
      ],
      vi: [
        "Mặt kín quay và tĩnh cho kín cơ khí của bơm ly tâm và bơm hóa chất",
        "Mặt kín cho bơm dầu nóng, bơm đáy tháp và bơm truyền dầu nhiễm lưu huỳnh",
        "Vòng kín và vòng piston cho máy nén pittông và máy nén trục vít",
        "Bơm nước biển hàng hải, kín trục lái và thiết bị thủy lực",
        "Bơm dung dịch nhuộm nhiệt cao và thiết bị dệt",
      ],
      th: [
        "หน้าซีลหมุนและหน้าซีลนิ่งสำหรับซีลเชิงกลของปั๊มเหวี่ยงและปั๊มเคมี",
        "หน้าซีลสำหรับปั๊มน้ำมันร้อน ปั๊มก้นหอกลั่น และปั๊มส่งน้ำมันที่มีกำมะถัน",
        "แหวนซีลและแหวนลูกสูบสำหรับคอมเพรสเซอร์ลูกสูบและสกรู",
        "ปั๊มน้ำทะเลงานเรือ แหวนซีลเพลาท้าย และอุปกรณ์ไฮดรอลิก",
        "ปั๊มน้ำสีย้อมอุณหภูมิสูงและเครื่องจักรสิ่งทอ",
      ],
    },
    relatedProducts: sealRingSkus,
    relatedPages: [
      { href: "/materials/carbon-graphite", label: { zh: "碳石墨材料牌号与性能", en: "Carbon Graphite Grades & Properties", vi: "Vật liệu & thông số than chì carbon", th: "เกรดและคุณสมบัติคาร์บอนกราไฟต์" } },
      { href: "/materials/antimony-impregnated-graphite", label: { zh: "锑浸渍石墨（500℃高温）", en: "Antimony Impregnated Graphite (500°C)", vi: "Than chì impregnation antimony (500°C)", th: "กราไฟต์ impregnation พลวง (500°C)" } },
      { href: "/compare/antimony-vs-resin-impregnated-graphite", label: { zh: "锑浸渍 vs 树脂浸渍怎么选", en: "Antimony vs Resin Impregnated: How to Choose", vi: "Chọn antimony hay nhựa impregnation", th: "เลือกพลวงหรือเรซิน impregnation" } },
      { href: "/compare/sic-vs-wc-mating-materials", label: { zh: "SiC 与 WC 配对面选择", en: "SiC vs WC Mating Materials", vi: "Vật liệu đối ghép SiC và WC", th: "ผิวคู่ SiC เทียบ WC" } },
      { href: "/custom", label: { zh: "按图纸定制非标密封环", en: "Custom Seal Rings to Your Drawing", vi: "Gia công vòng kín theo bản vẽ", th: "ผลิตแหวนซีลตามแบบ" } },
    ],
    faq: [
      {
        q: { zh: "碳石墨密封环该配什么对偶面？", en: "What mating face should I pair with a carbon graphite seal ring?", vi: "Nên ghép vòng đệm than chì carbon với mặt kín nào?", th: "ควรจับคู่แหวนซีลคาร์บอนกราไฟต์กับผิวหน้าใด?" },
        a: { zh: "四种常用：碳化硅（SiC）硬度高、导热好，是最通用的选择，耐颗粒冲刷；碳化钨（WC）韧性好，适合有振动和冲击的工况；氧化铝陶瓷成本低，适合温和介质与低速；高铬不锈钢只在低速轻载、成本优先时使用。配对面材质与涂层要一起报给我们，我们据此推荐碳石墨牌号。", en: "Four are standard: silicon carbide (SiC) is the general-purpose choice with high hardness and conductivity and good resistance to particle erosion; tungsten carbide (WC) is tougher and suits vibration and shock; alumina ceramic is the low-cost option for mild media and low speed; high-chrome stainless is reserved for light, slow duty. Tell us the mating material and coating and we select the carbon graphite grade around it.", vi: "Bốn loại phổ biến: SiC cứng và dẫn nhiệt tốt, chống mài mòn hạt, chọn chung; WC dẻo hơn, phù hợp rung và va đập; gốm alumina chi phí thấp cho môi trường nhẹ, tốc độ thấp; thép crom cao chỉ dùng tải nhẹ tốc độ thấp. Hãy cho biết vật liệu mặt đối ghép để chúng tôi chọn vật liệu than chì.", th: "มีสี่แบบที่ใช้งานทั่วไป: SiC ความแข็งสูงนำความร้อนดี ต้านการกัดจากอนุภาค ใช้ได้ทั่วไป; WC เหนียวกว่า เหมาะกับงานที่มีสั่นสะเทือนและกระแทก; เซรามิกอะลูมินาราคาต่ำสำหรับสื่อบรรยากาศและความเร็วต่ำ; สเตนเลสโครเมียมสูงใช้เฉพาะงานเบาความเร็วต่ำ แจ้งวัสดุผิวคู่มาเพื่อเลือกเกรดคาร์บอนกราไฟต์" },
      },
      {
        q: { zh: "树脂浸渍、锑浸渍、碳化处理怎么选？", en: "How do I choose between resin-, antimony- and carbonized-impregnated rings?", vi: "Chọn vòng impregnation nhựa, antimony hay carbonized?", th: "เลือกแหวน impregnation เรซิน พลวง หรือคาร์บอไนซ์อย่างไร?" },
        a: { zh: "先看温度和介质。树脂浸渍（如 M106K）封闭气孔后适合食品与制药级无油工况，长期耐温约 220℃；呋喃树脂浸渍 Tg 260-300℃、Td5 340℃、700℃残炭率 65%，是干启动与高温风险工况的升级选项；锑浸渍（M106D）耐温 500℃、在 600-650℃ 才明显氧化，用于炼化高温油泵；碳化处理（M191T）耐温 600℃、化学惰性最高。", en: "Start with temperature and media. Resin impregnation (M106K) seals the pores for food and pharma oil-free duty at about 220°C continuous; furan-impregnated material has Tg 260-300°C, Td5 340°C and 65% char yield at 700°C, making it the upgrade where dry starts are credible; antimony impregnation (M106D) is rated 500°C and only oxidises noticeably at 600-650°C, used for refining hot oil pumps; carbonized (M191T) reaches 600°C with the highest chemical inertness.", vi: "Bắt đầu từ nhiệt độ và môi trường. Impregnation nhựa (M106K) kín lỗ rỗng cho ứng dụng thực phẩm/dược không dầu ở khoảng 220°C; nhựa furan có Tg 260-300°C, Td5 340°C, residuum carbon 65% ở 700°C, là lựa chọn nâng cấp khi có nguy cơ chạy khô; impregnation antimony (M106D) chịu 500°C, chỉ oxy hóa rõ ở 600-650°C; carbonized (M191T) đạt 600°C, trơ hóa học cao nhất.", th: "เริ่มจากอุณหภูมิและสื่อ เรซิน impregnation (M106K) อุดรูพรุนสำหรับงานอาหารและยาที่ไร้น้ำมันที่ราว 220°C; ฟูลานเรซินมี Tg 260-300°C, Td5 340°C, อัตราคาร์บอนค้าง 65% ที่ 700°C เป็นตัวเลือกยกระดับเมื่อมีความเสี่ยงวิ่งแห้ง; พลวง impregnation (M106D) ทน 500°C ออกซิเดชันชัดเจนที่ 600-650°C; คาร์บอไนซ์ (M191T) ถึง 600°C เฉื่อยทางเคมีสูงสุด" },
      },
      {
        q: { zh: "碳石墨密封环最常见的失效形式是什么？", en: "What are the most common seal ring failure modes?", vi: "Các dạng hỏng hóc phổ biến nhất của vòng đệm than chì?", th: "โหมดความล้มเหลวที่พบบ่อยที่สุดของแหวนซีลคืออะไร?" },
        a: { zh: "四类。①热失效：干运转时 PV 冲过 0.8-1.2 MPa·m/s 上限，端面温升越过树脂 Tg，摩擦系数从 0.08 骤升到 0.22，浸渍层被剪切剥离；②磨粒磨损：介质固体颗粒超过 50 mg/L 时寿命可缩短 60-80%，表现为内孔均匀扩大、表面粗糙化，加磁性过滤器可恢复到原寿命 85% 以上；③热裂：温度急变导致端面出现径向裂纹并泄漏；④腐蚀溶胀：选错浸渍树脂类型，被介质侵蚀。前两类占实际故障的多数，都与润滑液膜丢失或介质洁净度有关。", en: "Four. (1) Thermal: dry running pushes PV past the 0.8-1.2 MPa·m/s limit, the face crosses resin Tg, friction jumps from 0.08 to 0.22 and the impregnation layer shears off the matrix. (2) Abrasive wear: above 50 mg/L solids in the media, life drops 60-80%, showing as even bore enlargement and surface roughening — a magnetic filter restores life to over 85% of original. (3) Thermal cracking: rapid temperature change puts radial cracks in the face and it leaks. (4) Chemical attack: the wrong resin type is swollen or eaten by the media. The first two dominate real field failures and both trace back to lost liquid film or dirty media.", vi: "Bốn dạng: (1) Hỏng nhiệt — chạy khô đẩy PV vượt giới hạn 0.8-1.2 MPa·m/s, mặt kín vượt Tg của nhựa, hệ số ma sát nhảy từ 0.08 lên 0.22, lớp impregnation bị bóc khỏi nền. (2) Mài mòn hạt — khi hàm lượng rắn vượt 50 mg/L, tuổi thọ giảm 60-80%, lỗ trong mòn đều và nhám hơn; lọc từ tính có thể phục hồi trên 85% tuổi thọ. (3) Nứt nhiệt — biến nhiệt nhanh gây nứt hướng kính. (4) Ăn mòn hóa học — chọn sai loại nhựa bị môi trường tấn công. Hai dạng đầu chiếm đa số hỏng hóc thực tế và đều liên quan đến mất màng dịch hoặc môi trường bẩn.", th: "สี่แบบ: (1) ล้มเหลวจากความร้อน — การวิ่งแห้งดัน PV เกินขีดจำกัด 0.8-1.2 MPa·m/s หน้าซีลผ่าน Tg ของเรซิน สัมประสิทธิ์เสียดทานจาก 0.08 เป็น 0.22 ชั้น impregnation ลอกออกจากเนื้อฐาน (2) การสึกจากอนุภาค — ของแข็งเกิน 50 mg/L ทำให้อายุใช้งานลด 60-80% พบรูในขยายสม่ำเสมอและผิวหยาบ การกรองแม่เหล็กคืนอายุได้เกิน 85% (3) ร้าวจากความร้อน — อุณหภูมิเปลี่ยนเร็วเกิดรอยร้าวตามแนวรัศมี (4) การกัดกร่อนเคมี — เลือกเรซินผิดชนิด สองแบบแรกพบบ่อยที่สุดและเกี่ยวกับการสูญเสียฟิล์มของเหลวหรือสื่อสกปรก" },
      },
      {
        q: { zh: "没有现货的非标尺寸可以按图纸或样品定制吗？", en: "Can you make non-standard sizes that are not in stock, from a drawing or a sample?", vi: "Có nhận gia công kích thước phi tiêu chuẩn theo bản vẽ hoặc mẫu không?", th: "รับผลิตขนาดพิเศษที่ไม่มีในสต็อกตามแบบหรือตัวอย่างหรือไม่?" },
        a: { zh: "可以。来图、来样都接受，支持非标尺寸、开槽、钻孔、倒角与端面研磨，CNC 加工控制在微米级公差。标准库存件直接发货，常规非标件按数量与复杂度报价；如果只有样品，我们可以测绘后先出图纸给你确认。", en: "Yes. Drawings and physical samples are both accepted, including non-standard dimensions, grooving, drilling, chamfering and face lapping, machined on CNC to micron-level tolerance. Standard stocked items ship directly; non-standard parts are quoted by quantity and complexity. If you only have a sample, we measure it and send back a drawing for your approval first.", vi: "Được. Nhận cả bản vẽ và mẫu thực, gồm kích thước phi tiêu chuẩn, xẻ rãnh, khoan, vát mép và mài mặt, gia công CNC dung sai micromet. Hàng tiêu chuẩn có sẵn giao ngay; hàng phi tiêu chuẩn báo giá theo số lượng và độ phức tạp. Nếu chỉ có mẫu, chúng tôi đo vẽ và gửi bản vẽ xác nhận trước.", th: "ได้ รับทั้งแบบพิมพ์และตัวอย่างจริง รวมถึงขนาดพิเศษ ร่อง เจาะ ลบมุม และลบหน้าซีลขึ้นรูป CNC ความคลาดเคลื่อนระดับไมครอน มาตรฐานที่มีสต็อกส่งได้เลย ชิ้นพิเศษเสนอราคาตามปริมาณและความซับซ้อน หากมีเพียงตัวอย่าง เราจะวัดและเขียนแบบให้ยืนยันก่อน" },
      },
    ],
  },

  // 2. 碳石墨轴套
  {
    slug: "carbon-graphite-bushings",
    name: {
      zh: "碳石墨轴套",
      en: "Carbon Graphite Bushings",
      vi: "Bạc lót than chì carbon",
      th: "บุชชิ่งคาร์บอนกราไฟต์",
    },
    title: {
      zh: "碳石墨轴套 | 无油自润滑石墨轴套，直接替换铜套",
      en: "Carbon Graphite Bushings | Self-Lubricating Graphite Shaft Sleeves Replacing Bronze",
      vi: "Bạc lót than chì carbon | Tự bôi trơn, không dầu, thay bạc đồng",
      th: "บุชชิ่งคาร์บอนกราไฟต์ | หล่อลื่นเองไร้น้ำมัน ใช้แทนบุชทองแดง",
    },
    description: {
      zh: "碳石墨轴套用于支撑和导向泵轴、搅拌轴与液压杆，在无水、无油或腐蚀介质中替代铜套与复合轴承。华豪密封 SB 系列轴套采用浸渍碳石墨，耐温 -50~300℃（抗氧化牌号 350℃），耐高压至 15 MPa，线速度 20 m/s，摩擦系数 0.04-0.15，可在水、海水、污水、油类与有机溶剂中长期运行，支持按图定制非标长度与台阶结构。",
      en: "Carbon graphite bushings support and guide pump shafts, agitator shafts and hydraulic rods where bronze bushes and composite bearings fail from lack of oil, water or corrosion. Huahao SB-series bushings are impregnated carbon graphite rated -50 to 300°C (350°C anti-oxidation grade), pressure to 15 MPa, surface speed to 20 m/s and friction coefficient 0.04-0.15, running long-term in water, seawater, sewage, oils and solvents. Non-standard lengths and stepped geometry available to drawing.",
      vi: "Bạc lót than chì carbon đỡ và dẫn hướng trục bơm, trục khuấy và ty thủy lực ở nơi bạc đồng và vòng bi composite hỏng vì thiếu dầu, thiếu nước hoặc ăn mòn. Bạc lót dòng SB của Huahao làm từ than chì carbon impregnation, chịu -50 đến 300°C (350°C chống oxy hóa), áp suất đến 15 MPa, tốc độ bề mặt đến 20 m/s, hệ số ma sát 0.04-0.15, làm việc lâu dài trong nước, nước biển, nước thải, dầu và dung môi.",
      th: "บุชชิ่งคาร์บอนกราไฟต์รองรับและนำทางเพลาปั๊ม เพลาเครื่องกวน และก้านกระบอกสูบไฮดรอลิก ในจุดที่บุชทองแดงและแบริ่งคอมโพสิตเสียหายเพราะขาดน้ำมัน ขาดน้ำ หรือการกัดกร่อน บุชซีรีส์ SB ของ Huahao ผลิตจากคาร์บอนกราไฟต์ impregnation ทน -50 ถึง 300°C (350°C ต้านออกซิเดชัน) ความดันถึง 15 MPa ความเร็วผิวถึง 20 m/s สัมประสิทธิ์เสียดทาน 0.04-0.15 ใช้งานระยะยาวในน้ำ น้ำทะเล น้ำเสีย น้ำมัน และตัวทำละลาย รับผลิตความยาวและรูปทรงขั้นตามแบบ",
    },
    intro: {
      zh: "轴套是套在轴上、承受径向力并引导轴回转的薄壁套筒件。碳石墨轴套的价值在于它不需要外部供油：石墨层状结构在轴面形成转移膜，摩擦系数 0.04-0.15，同时把摩擦热通过 8-70 W/m·K 的导热率排走。因此潜水泵、污水泵、化工泵和水下设备里那些无法加油、加了油又会污染介质的位置，通常都用碳石墨轴套替代铜套。",
      en: "A bushing is a thin-wall sleeve that carries radial load and guides a rotating shaft. Carbon graphite bushings earn their place because they need no external oil supply: the layered graphite structure deposits a transfer film on the shaft at a friction coefficient of 0.04-0.15 while conducting friction heat away at 8-70 W/m·K. That is why submersible pumps, sewage pumps, chemical pumps and submerged equipment — positions where oil cannot be fed, or would contaminate the product — normally replace bronze with carbon graphite.",
      vi: "Bạc lót là ống lót thành mỏng chịu tải hướng kính và dẫn hướng trục quay. Bạc lót than chì carbon phù hợp vì không cần cấp dầu ngoài: cấu trúc lớp của graphite tạo màng chuyển trên trục với hệ số ma sát 0.04-0.15 và dẫn nhiệt 8-70 W/m·K. Đó là lý do bơm chìm, bơm nước thải, bơm hóa chất và thiết bị ngập nước — những vị trí không thể cấp dầu hoặc dầu sẽ làm ô nhiễm sản phẩm — thường thay bạc đồng bằng than chì carbon.",
      th: "บุชชิ่งเป็นปลอกลูกบางรองรับแรงตามแนวรัศมีและนำทางเพลาหมุน บุชชิ่งคาร์บอนกราไฟต์เหมาะเพราะไม่ต้องป้อนน้ำมันจากภายนอก: โครงสร้างชั้นของกราไฟต์สร้างฟิล์มถ่ายทอดบนเพลาที่สัมประสิทธิ์เสียดทาน 0.04-0.15 และพาความร้อนออกด้วยการนำความร้อน 8-70 W/m·K จึงเป็นเหตุผลที่ปั๊มจุ่ม ปั๊มน้ำเสีย ปั๊มเคมี และอุปกรณ์ที่จมในน้ำ ซึ่งป้อนน้ำมันไม่ได้หรือน้ำมันจะปนเปื้อนผลิตภัณฑ์ มักเปลี่ยนจากบุชทองแดงเป็นคาร์บอนกราไฟต์",
    },
    image: "/images/products/graphite-bushing.webp",
    keyFacts: [
      { label: "Series", value: "SB100 / SB200 / SB300 (custom to drawing)" },
      { label: "Bore (d)", value: "10 – 100 mm" },
      { label: "Length", value: "6 – 120 mm, custom longer on request" },
      { label: "Temperature", value: "-50°C ~ 300°C (350°C anti-oxidation grade)" },
      { label: "Pressure", value: "≤ 15 MPa" },
      { label: "Surface speed", value: "≤ 20 m/s" },
      { label: "Dry running", value: "Yes — self-lubricating, no external oil feed" },
      { label: "Typical grades", value: "M120K / M140K / M106D" },
    ],
    specs: [
      { label: "Temperature", value: "-50°C ~ 300°C · 350°C with anti-oxidation impregnation" },
      { label: "Pressure", value: "≤ 15 MPa" },
      { label: "Surface speed", value: "≤ 20 m/s" },
      { label: "Coefficient of friction", value: "0.04 – 0.15 (dry)" },
      { label: "Recommended PV", value: "0.8 – 1.2 MPa·m/s (phenolic impregnated)" },
      { label: "Media", value: "Fresh water, sewage, seawater, oils, weak acids/alkalis, organic solvents" },
      { label: "Shaft counterface", value: "304/316 stainless polished to Ra 0.2 µm recommended" },
      { label: "Clearance", value: "Dry-running duty typically 2.5 – 3‰ of shaft diameter" },
    ],
    advantages: {
      zh: [
        "无需外部润滑系统，干运转或边界润滑下也能建立转移膜，适合潜水泵与水下设备",
        "输送介质不被润滑油污染，满足食品、制药与电子级工艺的清洁要求",
        "耐海水与弱酸弱碱腐蚀，铜套在海水泵中常见的电化学腐蚀与镀层剥落在碳石墨上不存在",
        "热膨胀系数低、尺寸稳定，摩擦热由 8-70 W/m·K 导热率排出，不易形成热斑卡轴",
        "可按图纸做长径比大、薄壁、台阶、开槽与螺旋槽结构，也可先加工后浸渍保证气孔封闭率",
      ],
      en: [
        "No external lubrication system — a transfer film forms under dry running or boundary lubrication, which is what submersible and submerged equipment need",
        "The pumped medium stays free of oil contamination, meeting cleanliness requirements in food, pharma and electronics processes",
        "Resists seawater and weak acid/alkali attack; the galvanic corrosion and coating loss common to bronze bushes in seawater pumps do not occur",
        "Low thermal expansion and good dimensional stability, with friction heat removed at 8-70 W/m·K, so hot spots and shaft seizure are unlikely",
        "High length-to-diameter ratios, thin walls, steps, grooves and spiral grooves available to drawing; machining before or after impregnation can be specified to control pore closure",
      ],
      vi: [
        "Không cần hệ thống bôi trơn ngoài — màng chuyển hình thành khi chạy khô hoặc bôi trơn biên, đúng thứ bơm chìm và thiết bị ngập nước cần",
        "Lưu chất không bị nhiễm dầu, đáp ứng yêu cầu sạch trong thực phẩm, dược và điện tử",
        "Chống nước biển và axit/kiềm loãng; không xảy ra ăn mòn điện hóa và bong lớp phủ như bạc đồng trong bơm nước biển",
        "Giãn nở nhiệt thấp, ổn định kích thước, nhiệt ma sát thoát ở 8-70 W/m·K nên khó phát sinh điểm nóng và kẹt trục",
        "Nhận tỷ lệ dài/đường kính lớn, thành mỏng, bậc, rãnh thẳng và rãnh xoắn theo bản vẽ; gia công trước hoặc sau impregnation để kiểm soát độ kín lỗ rỗng",
      ],
      th: [
        "ไม่ต้องมีระบบหล่อลื่นภายนอก ฟิล์มถ่ายทอดเกิดขึ้นได้แม้วิ่งแห้งหรือหล่อลื่นขอบ ซึ่งจำเป็นสำหรับปั๊มจุ่มและอุปกรณ์ใต้น้ำ",
        "สื่อที่ส่งไม่ปนเปื้อนน้ำมัน ตอบโจทย์ความสะอาดในอุตสาหกรรมอาหาร ยา และอิเล็กทรอนิกส์",
        "ทนน้ำทะเลและกรด-ด่างอ่อน ไม่เกิดปัญหาการกัดกร่อนกัลวานิกและเคลือกล่อนที่พบบ่อยในบุชทองแดงของปั๊มน้ำทะเล",
        "การขยายตัวจากความร้อนต่ำ ขนาดคงตัว พาความร้อนจากการเสียดทานที่ 8-70 W/m·K จึงเกิดจุดร้อนและเพลาติดได้ยาก",
        "รับผลิตอัตราส่วนความยาวต่อเส้นผ่านศูนย์กลางสูง ผนังบาง ขั้น ร่องตรง และร่องเกลียวตามแบบ จะกลึงก่อนหรือหลัง impregnation ก็ได้เพื่อควบคุมการอุดรูพรุน",
      ],
    },
    applications: {
      zh: [
        "潜水泵与污水泵的轴支撑套，水中润滑不可加油的位置",
        "化工泵与流程泵的导向轴套，替代被介质腐蚀的铜套",
        "液压设备与阀门阀杆衬套",
        "反应釜搅拌器的中间支撑轴承套",
        "食品与制药设备的无油自润滑轴套",
      ],
      en: [
        "Shaft support sleeves for submersible and sewage pumps, at positions lubricated by the pumped water itself",
        "Guide bushings for chemical and process pumps, replacing bronze bushes eaten by the medium",
        "Bushes for hydraulic equipment and valve stems",
        "Intermediate bearing sleeves for reactor agitators",
        "Oil-free self-lubricating bushings for food and pharmaceutical equipment",
      ],
      vi: [
        "Ống lót đỡ trục cho bơm chìm và bơm nước thải tại vị trí được bôi trơn chính bằng nước bơm",
        "Bạc lót dẫn hướng cho bơm hóa chất và bơm công nghệ, thay bạc đồng bị môi trường ăn mòn",
        "Bạc lót cho thiết bị thủy lực và ty van",
        "Ống lót đỡ trung gian cho máy khuấy bồn phản ứng",
        "Bạc lót tự bôi trơn không dầu cho thiết bị thực phẩm và dược",
      ],
      th: [
        "ปลอกรองรับเพลาของปั๊มจุ่มและปั๊มน้ำเสีย ในตำแหน่งที่หล่อลื่นด้วยน้ำที่สูบเอง",
        "บุชนำทางของปั๊มเคมีและปั๊มกระบวนการ ใช้แทนบุชทองแดงที่ถูกสารกัดกร่อน",
        "บุชสำหรับอุปกรณ์ไฮดรอลิกและก้านวาล์ว",
        "ปลอกรองรับกลางของเครื่องกวนในถังปฏิกิริยา",
        "บุชหล่อลื่นเองไร้น้ำมันในเครื่องจักรอาหารและยา",
      ],
    },
    relatedProducts: ["graphite-bushing", "graphite-bearing", "graphite-thrust-disc", "109-series", "58b-series"],
    relatedPages: [
      { href: "/applications/magnetic-pump-bushings", label: { zh: "磁力泵碳石墨轴套", en: "Bushings for Magnetic Drive Pumps", vi: "Bạc lót cho bơm truyền động từ", th: "บุชสำหรับปั๊มขับแม่เหล็ก" } },
      { href: "/applications/marine", label: { zh: "船舶与海水泵应用", en: "Marine & Seawater Pump Applications", vi: "Ứng dụng hàng hải và bơm nước biển", th: "งานเรือและปั๊มน้ำทะเล" } },
      { href: "/materials/carbon-graphite", label: { zh: "碳石墨材料牌号", en: "Carbon Graphite Grades", vi: "Vật liệu than chì carbon", th: "เกรดคาร์บอนกราไฟต์" } },
      { href: "/custom", label: { zh: "非标轴套按图加工", en: "Custom Bushings to Drawing", vi: "Gia công bạc lót theo bản vẽ", th: "ผลิตบุชตามแบบ" } },
    ],
    faq: [
      {
        q: { zh: "石墨轴套需要加油润滑吗？", en: "Do graphite bushings need oil?", vi: "Bạc lót than chì có cần bôi dầu không?", th: "บุชกราไฟต์ต้องเติมน้ำมันหล่อลื่นไหม?" },
        a: { zh: "不需要。碳石墨本身是固体润滑剂，层间范德华力弱，摩擦时层易滑动并在轴面形成转移膜，摩擦系数降到 0.04-0.15，这正是它用于潜水泵和水下设备的原因。若工况允许供液，被输送介质本身还能进一步降温，寿命会更长。", en: "No. Carbon graphite is a solid lubricant — weak van der Waals bonding between layers lets them slide and deposit a transfer film on the shaft, dropping friction to 0.04-0.15. That is exactly why it is used in submersible and submerged equipment. Where the pumped fluid is compatible, it also cools the bearing and extends life further.", vi: "Không. Than chì carbon là chất bôi trơn rắn — liên kết Van der Waals yếu giữa các lớp cho phép chúng trượt và tạo màng chuyển trên trục, giảm ma sát còn 0.04-0.15. Đó chính là lý do dùng cho bơm chìm và thiết bị ngập nước. Nếu lưu chất bơm tương thích, nó còn làm mát bạc và tăng tuổi thọ.", th: "ไม่ คาร์บอนกราไฟต์เป็นสารหล่อลื่นของแข็ง พันธะวานเดอร์วาลส์ระหว่างชั้นอ่อนทำให้ชั้นเลื่อนและสร้างฟิล์มถ่ายทอดบนเพลา ลดสัมประสิทธิ์เสียดทานเหลือ 0.04-0.15 นั่นคือเหตุผลที่ใช้กับปั๊มจุ่มและอุปกรณ์ใต้น้ำ หากตัวไหลที่สูบเข้ากันได้ ยังช่วยระบายความร้อนและทำให้อายุยืนขึ้น" },
      },
      {
        q: { zh: "轴套和轴承有什么区别？该选哪个？", en: "What is the difference between a bushing and a bearing?", vi: "Khác nhau giữa bạc lót và vòng bi?", th: "บุชชิ่งกับแบริ่งต่างกันอย่างไร?" },
        a: { zh: "轴套是薄壁套筒，主要引导轴并承受中等径向力，占用轴向空间小；石墨轴承（GB 系列）壁厚更大、承载等级更高，径向压力可到 20 MPa，用于重载旋转与冲击工况。判断依据是径向载荷与安装空间：载荷高、有冲击选轴承；空间受限、以导向为主选轴套。立式设备还要在轴端配石墨推力盘承受轴向力。", en: "A bushing is a thin-wall sleeve that guides the shaft under moderate radial load in a short axial envelope. Graphite bearings (GB series) have thicker walls and higher load ratings — radial pressure up to 20 MPa — for heavy-duty and impact rotation. Choose by radial load and available space: high load or shock means a bearing; space-limited guiding means a bushing. Vertical equipment additionally needs a graphite thrust disc at the shaft end to take axial load.", vi: "Bạc lót là ống lót thành mỏng dẫn hướng trục với tải hướng kính vừa trong chiều dài lắp đặt ngắn. Vòng bi than chì (dòng GB) dày hơn, tải trọng cao hơn — áp suất hướng kính đến 20 MPa — cho trục quay tải nặng và va đập. Chọn theo tải hướng kính và không gian: tải cao hoặc va đập thì dùng vòng bi; không gian hạn chế thì dùng bạc lót. Thiết bị đứng cần thêm đĩa chặn than chì ở đầu trục.", th: "บุชชิ่งเป็นปลอกผนังบางนำทางเพลาภายใต้แรงรัศมีปานกลางในพื้นที่ตามแนวเพลาจำกัด แบริ่งกราไฟต์ (ซีรีส์ GB) ผนังหนากว่า รับแรงสูงกว่า — ความดันตามแนวรัศมีถึง 20 MPa — สำหรับงานหนักและมีการกระแทก เลือกจากแรงรัศมีและพื้นที่: แรงมากหรือมีกระแทกใช้แบริ่ง พื้นที่จำกัดใช้บุช อุปกรณ์ตั้งยังต้องใช้จานผลักกราไฟต์ที่ปลายเพลา" },
      },
      {
        q: { zh: "可以直接替换原来的铜套吗？", en: "Can I drop a graphite bushing in where a bronze bush was fitted?", vi: "Thay trực tiếp bạc đồng bằng bạc than chì được không?", th: "เปลี่ยนจากบุชทองแดงเป็นบุชกราไฟต์ได้เลยไหม?" },
        a: { zh: "多数情况可以，但间隙要重新算。碳石墨的线膨胀比铜小，且干摩擦需要更宽的间隙散热，干运转工况单边间隙通常取轴径的 2.5-3‰（例：轴径 30 mm 取 0.08 mm 左右）。同时推荐对偶轴面为 304/316 不锈钢并抛光到 Ra 0.2 μm 左右——粗糙的轴面会把碳石墨磨蚀掉。请把轴径、转速、介质和温度告诉我们，我们按这些重新选型并给出图纸。", en: "Usually yes, but the clearance has to be recalculated. Carbon graphite expands less than bronze and dry friction needs a wider gap to shed heat, so dry-running duty typically takes 2.5-3‰ of shaft diameter as single-side clearance (roughly 0.08 mm on a 30 mm shaft). The shaft counterface should be 304/316 stainless polished to about Ra 0.2 µm — a rough shaft will abrade the graphite. Send us shaft diameter, speed, media and temperature and we re-select the grade and issue a drawing.", vi: "Thường được, nhưng phải tính lại khe hở. Than chì carbon giãn nở ít hơn đồng và chạy khô cần khe hở lớn hơn để tản nhiệt, vì vậy khi chạy khô thường lấy khe hở một bên bằng 2,5-3‰ đường kính trục (trục 30 mm thì khoảng 0,08 mm). Trục đối ghép nên là inox 304/316 đánh bóng đến khoảng Ra 0,2 µm — trục nhám sẽ mài mòn than chì. Gửi chúng tôi đường kính trục, tốc độ, môi trường và nhiệt độ để chọn lại và xuất bản vẽ.", th: "ส่วนใหญ่ได้ แต่ต้องคำนวณ clearance ใหม่ คาร์บอนกราไฟต์ขยายตัวน้อยกว่าทองแดงและการวิ่งแห้งต้องการช่องว่างกว้างขึ้นเพื่อระบายความร้อน งานวิ่งแห้งจึงใช้ช่องว่างด้านเดียวราว 2.5-3‰ ของเส้นผ่านศูนย์กลางเพลา (เพลา 30 mm ประมาณ 0.08 mm) ผิวเพลาคู่ควรเป็นสเตนเลส 304/316 ขัดถึงราว Ra 0.2 µm — เพลาหยาบจะขัดกราไฟต์สึก แจ้งเส้นผ่านศูนย์กลางเพลา ความเร็ว สื่อ และอุณหภูมิเพื่อให้เราเลือกเกรดและออกแบบใหม่" },
      },
      {
        q: { zh: "含固体颗粒的介质会缩短轴套寿命吗？", en: "Will solids in the medium shorten bushing life?", vi: "Hạt rắn trong môi trường có làm giảm tuổi thọ bạc lót?", th: "อนุภาคในสื่อทำให้อายุบุชสั้นลงไหม?" },
        a: { zh: "会，而且是主要失效模式之一。介质中固体颗粒含量超过 50 mg/L 时，间隙内形成三体磨粒磨损，轴套寿命可缩短 60-80%；在高含砂的河水输送工况中实测石墨轴套寿命仅约 1800 小时。加装 50 μm 精度的磁性过滤器除去铁磁颗粒后，寿命恢复到原值的 85% 以上（约 5100 小时）。颗粒不可回避时，选更高硬度的浸锑牌号并在轴套上开直槽或螺旋槽帮助排出颗粒。", en: "Yes — it is a primary failure mode. Above 50 mg/L solids the clearance becomes a three-body abrasive wear zone and bushing life falls 60-80%; in high-sand river water transfer, measured graphite bushing life was only about 1800 hours. Adding a 50 µm magnetic filter to remove ferromagnetic particles restored life to over 85% of the original value, around 5100 hours. Where solids cannot be excluded, choose a harder antimony-impregnated grade and groove the bushing straight or helically to flush particles out.", vi: "Có — đây là một dạng hỏng chính. Khi hàm lượng rắn vượt 50 mg/L, trong khe hở xảy ra mài mòn ba thể và tuổi thọ bạc giảm 60-80%; thực tế bơm nước sông nhiễm cát nặng, tuổi thọ bạc than chì chỉ khoảng 1800 giờ. Thêm lọc từ tính 50 µm để loại hạt nhiễm từ đã phục hồi tuổi thọ trên 85% giá trị gốc, khoảng 5100 giờ. Nếu không thể loại hết hạt, chọn vật liệu impregnation antimony cứng hơn và xẻ rãnh thẳng hoặc xoắn để đẩy hạt ra.", th: "ใช่ — เป็นโหมดล้มเหลวหลัก เมื่อของแข็งเกิน 50 mg/L ช่องว่างจะเกิดการสึกแบบสามอนุภาค ทำให้อายุบุชลด 60-80% งานส่งน้ำแม่น้ำที่มีทรายสูง วัดอายุบุชกราไฟต์ได้เพียงราว 1800 ชั่วโมง การติดตั้งแม่เหล็กกรอง 50 µm กำจัดอนุภาคแม่เหล็กคืนอายุได้เกิน 85% ของค่าเดิม ราว 5100 ชั่วโมง หากกันอนุภาคไม่ได้ ให้เลือกเกรดพลวง impregnation ที่แข็งขึ้นและบากร่องตรงหรือเกลียวเพื่อไล่อนุภาคออก" },
      },
    ],
  },

  // 3. 碳石墨轴承
  {
    slug: "carbon-graphite-bearings",
    name: {
      zh: "碳石墨轴承",
      en: "Carbon Graphite Bearings",
      vi: "Vòng bi than chì carbon",
      th: "แบริ่งคาร์บอนกราไฟต์",
    },
    title: {
      zh: "碳石墨轴承 | 干运转与水下重载石墨轴承，耐温 350℃",
      en: "Carbon Graphite Bearings | Dry-Running, Submerged & Heavy-Load Graphite Bearings",
      vi: "Vòng bi than chì carbon | Chạy khô, ngập nước, tải nặng",
      th: "แบริ่งคาร์บอนกราไฟต์ | วิ่งแห้ง จมน้ำ และรับน้ำหนักมาก",
    },
    description: {
      zh: "碳石墨轴承用于无法供油、水下运行或介质具腐蚀性的重载旋转设备。华豪密封 GB 系列石墨轴承径向承载压力可达 20 MPa，耐温 -50~300℃（抗氧化牌号 350℃），线速度 15 m/s，摩擦系数 0.04-0.15，广泛用于船舶艉轴、海水泵、搅拌器、压缩机与矿山设备，替代需要润滑脂且会被介质腐蚀的滚动轴承与铜轴承。",
      en: "Carbon graphite bearings serve heavy rotating equipment that cannot be oiled, runs submerged, or sits in corrosive media. Huahao GB-series graphite bearings carry radial pressure to 20 MPa, are rated -50 to 300°C (350°C anti-oxidation grade) and 15 m/s surface speed, with a friction coefficient of 0.04-0.15. They replace grease-lubricated rolling bearings and bronze bushes in marine stern tubes, seawater pumps, agitators, compressors and mining equipment.",
      vi: "Vòng bi than chì carbon dùng cho thiết bị quay tải nặng không thể cấp dầu, chạy ngập hoặc ở trong môi trường ăn mòn. Vòng bi dòng GB của Huahao chịu áp suất hướng kính đến 20 MPa, dải nhiệt -50 đến 300°C (350°C chống oxy hóa), tốc độ bề mặt 15 m/s, hệ số ma sát 0.04-0.15. Thay vòng bi lăn bôi trơn mỡ và bạc đồng trong trục lái tàu, bơm nước biển, máy khuấy, máy nén và thiết bị khai khoáng.",
      th: "แบริ่งคาร์บอนกราไฟต์ใช้กับเครื่องจักรหมุนงานหนักที่ป้อนน้ำมันไม่ได้ ทำงานจมน้ำ หรืออยู่ในสื่อกัดกร่อน แบริ่งกราไฟต์ซีรีส์ GB ของ Huahao รับความดันตามแนวรัศมีถึง 20 MPa ทน -50 ถึง 300°C (เกรดต้านออกซิเดชัน 350°C) ความเร็วผิว 15 m/s สัมประสิทธิ์เสียดทาน 0.04-0.15 ใช้แทนแบริ่งลูกกลิ้งที่หล่อลื่นด้วย จระบีและบุชทองแดงในเพลาท้ายเรือ ปั๊มน้ำทะเล เครื่องกวน คอมเพรสเซอร์ และอุปกรณ์ทำเหมือง",
    },
    intro: {
      zh: "石墨轴承解决的是滚动轴承和铜轴承做不了的三类工况：完全不能带润滑脂的洁净与无油场合、整台设备泡在水或介质里的水下支承、以及会腐蚀金属轴承的化学介质。GB 系列以高强度碳石墨加工而成，径向承载压力 5-20 MPa，启动与停机阶段仍保持润滑状态——这恰是滚动轴承磨损最集中的两个瞬间。浸铜牌号用于更高载荷，浸锑牌号用于高温，树脂浸渍牌号用于食品与制药级无油工况。",
      en: "Graphite bearings exist for the three duty cases rolling-element and bronze bearings cannot handle: clean or oil-free machinery where grease is prohibited, submerged supports with the whole machine under the medium, and chemically aggressive fluids that corrode metallic bearings. GB-series bearings are machined from high-strength carbon graphite and carry 5-20 MPa radial pressure while staying lubricated through start-up and shut-down — the two moments that consume most of a rolling bearing's life. Copper-impregnated grades take higher loads, antimony grades take heat, and resin-impregnated grades cover food and pharma oil-free duty.",
      vi: "Vòng bi graphite tồn tại cho ba nhóm điều kiện mà vòng bi lăn và bạc đồng không đáp ứng được: máy móc sạch hoặc không dầu cấm dùng mỡ, gối đỡ ngập hoàn toàn trong lưu chất, và môi trường hóa chất ăn mòn vòng bi kim loại. Vòng bi dòng GB gia công từ than chì carbon cường độ cao, chịu áp suất hướng kính 5-20 MPa và vẫn được bôi trơn trong suốt quá trình khởi động và dừng máy — hai thời điểm tiêu hao phần lớn tuổi thọ vòng bi lăn. Loại impregnation đồng chịu tải cao hơn, loại antimony chịu nhiệt, loại nhựa phủ cho ứng dụng thực phẩm/dược không dầu.",
      th: "แบริ่งกราไฟต์เกิดขึ้นเพื่อสามเงื่อนไขที่แบริ่งลูกกลิ้งและบุชทองแดงทำไม่ได้: เครื่องจักรสะอาดหรือไร้น้ำมันที่ห้ามใช้จระบี จุดรองรับที่จมอยู่ในสื่อทั้งหมด และสารเคมีที่กัดกร่อนแบริ่งโลหะ แบริ่งซีรีส์ GB กลึงจากคาร์บอนกราไฟต์ความแข็งแรงสูง รับความดันตามแนวรัศมี 5-20 MPa และยังหล่อลื่นต่อเนื่องในช่วงเริ่มเดินและหยุดเครื่อง — สองช่วงที่กินอายุแบริ่งลูกกลิ้งมากที่สุด เกรด impregnation ทองแดงรับแรงสูงขึ้น เกรดพลวงทนความร้อน เกรดเรซินสำหรับงานอาหารและยาที่ไร้น้ำมัน",
    },
    image: "/images/products/carbon-graphite-bearing.webp",
    keyFacts: [
      { label: "Series", value: "GB100 / GB200 / GB300 (custom to drawing)" },
      { label: "Radial load", value: "5 – 20 MPa by grade" },
      { label: "Temperature", value: "-50°C ~ 300°C (350°C anti-oxidation grade)" },
      { label: "Surface speed", value: "≤ 15 m/s" },
      { label: "Coefficient of friction", value: "0.04 – 0.15 (dry)" },
      { label: "Lubrication", value: "None required — self-lubricating through start-up and shut-down" },
      { label: "Typical grades", value: "M204K / M254K / M126D, plus copper-impregnated for high load" },
      { label: "Seawater service", value: "Yes — corrosion-impregnated grade for stern tubes and seawater pumps" },
    ],
    specs: [
      { label: "Temperature", value: "-50°C ~ 300°C · 350°C with anti-oxidation impregnation" },
      { label: "Radial pressure", value: "5 – 20 MPa depending on grade and impregnation" },
      { label: "Surface speed", value: "≤ 15 m/s" },
      { label: "Coefficient of friction", value: "0.04 – 0.15 (dry)" },
      { label: "Thermal conductivity", value: "8 – 70 W/m·K" },
      { label: "Media", value: "Fresh water, seawater, oils, weak acids/alkalis, organic solvents" },
      { label: "Density", value: "1.55 – 1.85 g/cm³" },
      { label: "Machining", value: "CNC to drawing, micron-level tolerance, custom segmented shapes" },
    ],
    advantages: {
      zh: [
        "全程无需润滑剂，启动和停机阶段仍有润滑状态，消除滚动轴承在这两个瞬间的边界磨损",
        "径向承载可达 20 MPa，配合浸铜牌号可进一步提高承载能力，适合重载旋转设备",
        "水下与海水工况可靠运行，是船舶艉轴轴承和海水泵轴承对铜轴承的直接升级",
        "导热率 8-70 W/m·K，摩擦热即时导出，避免金属轴承常见的热斑与抱轴",
        "化学惰性耐酸碱盐与有机溶剂，金属轴承的电化学腐蚀与氢脆问题在此不存在",
        "运行安静、振动低，且磨损可测——检修时直接量间隙即可判断剩余寿命",
      ],
      en: [
        "No lubricant at all, yet the contact stays lubricated through start-up and shut-down, removing the boundary wear that consumes rolling bearings in exactly those two moments",
        "Radial load up to 20 MPa, higher with copper-impregnated grades, so heavy rotating equipment is covered",
        "Dependable submerged and seawater duty — a direct upgrade over bronze for marine stern tube and seawater pump bearings",
        "Thermal conductivity 8-70 W/m·K removes friction heat immediately, avoiding the hot spots and shaft seizure typical of metal bearings",
        "Chemically inert to acids, alkalis, salts and solvents, so galvanic corrosion and hydrogen embrittlement issues of metallic bearings do not arise",
        "Quiet, low-vibration running with measurable wear — clearances can be gauged at overhaul to judge remaining life",
      ],
      vi: [
        "Hoàn toàn không cần chất bôi trơn nhưng bề mặt vẫn được bôi trơn khi khởi động và dừng máy, loại bỏ mài mòn biên — thứ làm hỏng vòng bi lăn đúng vào hai thời điểm đó",
        "Tải hướng kính đến 20 MPa, cao hơn với vật liệu impregnation đồng, đáp ứng thiết bị quay tải nặng",
        "Làm việc tin cậy khi ngập nước và trong nước biển — nâng cấp trực tiếp so với bạc đồng cho trục lái tàu và bơm nước biển",
        "Dẫn nhiệt 8-70 W/m·K đưa nhiệt ma sát ra ngay, tránh điểm nóng và kẹt trục thường gặp ở vòng bi kim loại",
        "Trơ hóa học với axit, kiềm, muối và dung môi nên không phát sinh ăn mòn điện hóa và giòn hydro như vòng bi kim loại",
        "Chạy êm, ít rung, mòn đo được — kiểm tra khe hở khi bảo dưỡng để đánh giá tuổi thọ còn lại",
      ],
      th: [
        "ไม่ต้องใช้สารหล่อลื่นเลยแต่ผิวยังหล่อลื่นในช่วงเริ่มและหยุดเครื่อง ขจัดการสึกหรอบริเวณขอบที่กินอายุแบริ่งลูกกลิ้งในสองช่วงนี้",
        "รับแรงตามแนวรัศมีถึง 20 MPa และสูงขึ้นกับเกรด impregnation ทองแดง ครอบคลุมเครื่องหมุนงานหนัก",
        "ทำงานใต้น้ำและในน้ำทะเลได้เชื่อถือได้ เป็นอัปเกรดตรงจากบุชทองแดงสำหรับเพลาท้ายเรือและปั๊มน้ำทะเล",
        "นำความร้อน 8-70 W/m·K พาความร้อนจากการเสียดทานออกทันที ลดจุดร้อนและเพลาติดที่มักเกิดกับแบริ่งโลหะ",
        "เฉื่อยทางเคมีต่อกรด ด่าง เกลือ และตัวทำละลาย จึงไม่มีปัญหาการกัดกร่อนกัลวานิกและความเปราะจากไฮโดรเจนแบบแบริ่งโลหะ",
        "เดินเงียบ สั่นน้อย และวัดการสึกได้ ตรวจสอบช่องว่างตอนซ่อมบำรุงเพื่อประเมินอายุคงเหลือ",
      ],
    },
    applications: {
      zh: [
        "船舶艉轴轴承与尾管水润滑轴承",
        "海水泵、污水泵与立式泵的中导轴承",
        "反应釜搅拌器与螺旋输送机的支承轴承",
        "压缩机与鼓风机的自润滑轴承",
        "矿山设备的重载低速旋转支承",
        "食品与制药设备中禁止用润滑脂的轴承位",
      ],
      en: [
        "Marine stern tube and water-lubricated shaft bearings",
        "Intermediate bearings for seawater, sewage and vertical pumps",
        "Support bearings for reactor agitators and screw conveyors",
        "Self-lubricating bearings for compressors and blowers",
        "Heavy, low-speed rotary supports in mining equipment",
        "Bearing positions in food and pharma machinery where grease is prohibited",
      ],
      vi: [
        "Vòng bi trục lái tàu và vòng bi bôi trơn bằng nước trong ống bao trục",
        "Vòng bi trung gian cho bơm nước biển, bơm nước thải và bơm đứng",
        "Vòng bi đỡ cho máy khuấy bồn phản ứng và tải trục vít",
        "Vòng bi tự bôi trơn cho máy nén và máy thổi khí",
        "Gối đỡ quay tải nặng tốc độ thấp trong thiết bị khai khoáng",
        "Vị trí vòng bi trong thiết bị thực phẩm và dược phẩm cấm dùng mỡ",
      ],
      th: [
        "แบริ่งเพลาท้ายเรือและแบริ่งหล่อลื่นด้วยน้ำในท่อบุกรอง",
        "แบริ่งกลางของปั๊มน้ำทะเล ปั๊มน้ำเสีย และปั๊มตั้ง",
        "แบริ่งรองรับเครื่องกวนถังปฏิกิริยาและสกรูลำเลียง",
        "แบริ่งหล่อลื่นตัวเองในคอมเพรสเซอร์และเครื่องเป่าอากาศ",
        "จุดรองรับหมุนงานหนักความเร็วต่ำในอุปกรณ์ทำเหมือง",
        "ตำแหน่งแบริ่งในเครื่องจักรอาหารและยาที่ห้ามใช้จระบี",
      ],
    },
    relatedProducts: ["graphite-bearing", "graphite-bushing", "graphite-thrust-disc", "three-part-series", "m7n-series"],
    relatedPages: [
      { href: "/applications/chemical-pump-bearings", label: { zh: "化工泵碳石墨轴承", en: "Carbon Bearings for Chemical Pumps", vi: "Vòng bi carbon cho bơm hóa chất", th: "แบริ่งคาร์บอนสำหรับปั๊มเคมี" } },
      { href: "/applications/marine", label: { zh: "船舶艉轴与海水泵方案", en: "Marine Stern Tube & Seawater Pump Solutions", vi: "Giải pháp trục lái tàu và bơm nước biển", th: "โซลูชันเพลาท้ายเรือและปั๊มน้ำทะเล" } },
      { href: "/materials/copper-graphite", label: { zh: "浸铜石墨：高承载牌号", en: "Copper Graphite for High-Load Duty", vi: "Than chì impregnation đồng cho tải cao", th: "กราไฟต์ impregnation ทองแดงสำหรับงานรับน้ำหนักมาก" } },
      { href: "/compare/carbon-graphite-vs-metal-alloy-seals", label: { zh: "碳石墨 vs 金属合金轴承", en: "Carbon Graphite vs Metal Alloy Bearings", vi: "So sánh than chì carbon và hợp kim", th: "คาร์บอนกราไฟต์เทียบโลหะอัลลอย" } },
    ],
    faq: [
      {
        q: { zh: "石墨轴承能承受多大载荷？", en: "How much load can a graphite bearing carry?", vi: "Vòng bi than chì chịu được tải bao nhiêu?", th: "แบริ่งกราไฟต์รับแรงได้แค่ไหน?" },
        a: { zh: "GB 系列按牌号和浸渍工艺不同，可承受的径向载荷在 5-20 MPa 之间。浸铜牌号承载最高，适合低速重载；树脂浸渍牌号适合中载高速；锑浸渍牌号主要用于把耐温提到 500℃。请提供轴径、转速、径向力与介质，我们据此推荐牌号和间隙。", en: "Across the GB range, radial load capacity is 5-20 MPa depending on grade and impregnation. Copper-impregnated grades carry the most and suit low-speed heavy duty; resin-impregnated grades suit medium load at higher speed; antimony grades are chosen mainly to lift the temperature ceiling to 500°C. Send shaft diameter, speed, radial force and media and we will recommend the grade and clearance.", vi: "Trong dòng GB, khả năng chịu tải hướng kính là 5-20 MPa tùy vật liệu và công nghệ impregnation. Loại impregnation đồng chịu nhiều nhất, phù hợp tốc độ thấp tải nặng; loại nhựa phù hợp tải trung bình tốc độ cao hơn; loại antimony chọn chủ yếu để nâng giới hạn nhiệt lên 500°C. Gửi đường kính trục, tốc độ, lực hướng kính và môi trường để chúng tôi khuyên vật liệu và khe hở.", th: "ในซีรีส์ GB ความสามารถรับแรงตามแนวรัศมีอยู่ระหว่าง 5-20 MPa แล้วแต่เกรดและกระบวนการ impregnation เกรด impregnation ทองแดงรับได้สูงสุด เหมาะความเร็วต่ำและน้ำหนักมาก เกรดเรซินเหมาะกับแรงระดับกลางและความเร็วสูงขึ้น ส่วนเกรดพลวงเลือกเป็นหลักเพื่อยอดเพดานอุณหภูมิเป็น 500°C แจ้งเส้นผ่านศูนย์กลางเพลา ความเร็ว แรงรัศมี และสื่อเพื่อให้เราแนะนำเกรดและช่องว่าง" },
      },
      {
        q: { zh: "石墨轴承适用于海水环境吗？", en: "Are graphite bearings suitable in seawater?", vi: "Vòng bi than chì có dùng được trong nước biển?", th: "แบริ่งกราไฟต์ใช้กับน้ำทะเลได้ไหม?" },
        a: { zh: "适用。采用耐腐蚀浸渍工艺的石墨轴承可在海水环境中长期稳定运行，这也是船舶艉轴轴承和海水泵轴承选它的原因。金属轴承在海水中面临电化学腐蚀、点蚀和海生物附着，石墨则化学惰性、且自润滑特性正好利用海水本身作为冷却介质。", en: "Yes. With a corrosion-resistant impregnation, graphite bearings run long-term in seawater, which is why they are chosen for marine stern tubes and seawater pumps. Metal bearings in seawater face galvanic corrosion, pitting and marine growth; graphite is chemically inert and self-lubricating, and uses the seawater itself as the coolant.", vi: "Có. Với công nghệ impregnation chống ăn mòn, vòng bi than chì chạy ổn định lâu dài trong nước biển — lý do dùng cho trục lái tàu và bơm nước biển. Vòng bi kim loại trong nước biển gặp ăn mòn điện hóa, rỗ và hà bám; than chì trơ hóa học, tự bôi trơn và dùng chính nước biển làm chất làm mát.", th: "ได้ แบริ่งกราไฟต์ที่ impregnation ต้านการกัดกร่อนทำงานในน้ำทะเลได้ระยะยาว จึงถูกเลือกใช้ในเพลาท้ายเรือและปั๊มน้ำทะเล แบริ่งโลหะในน้ำทะเลพบการกัดกร่อนกัลวานิก การเกิดรอยผุ และการเกาะของสิ่งมีชีวิตทางทะเล ส่วนกราไฟต์เฉื่อยทางเคมี หล่อลื่นตัวเอง และใช้น้ำทะเลเป็นตัวระบายความร้อนเอง" },
      },
      {
        q: { zh: "没有润滑油，启动瞬间会不会烧坏？", en: "Without oil, does start-up burn the bearing out?", vi: "Không có dầu, khởi động có làm cháy vòng bi?", th: "ไม่มีน้ำมัน ตอนเริ่มเครื่องแบริ่งจะไหม้ไหม?" },
        a: { zh: "正常设计工况下不会——石墨在静止和启动瞬间就靠自身转移膜润滑，这正是它相对滚动轴承的优势。风险在干运转叠加高 PV：以酚醛浸渍碳石墨为例，推荐 PV 上限 0.8-1.2 MPa·m/s，若超过 2 MPa·m/s 摩擦热来不及散出，端面温度可越过树脂 Tg（酚醛 160-190℃）导致浸渍层软化剥离。高干启动风险的工况请用呋喃浸渍（Tg 260-300℃）或锑浸渍（500℃）牌号。", en: "Not in a properly designed duty — graphite lubricates itself from the transfer film even at standstill and during the first revolutions, which is its edge over rolling bearings. The risk is dry running combined with high PV: for phenolic-impregnated graphite the recommended ceiling is 0.8-1.2 MPa·m/s, and beyond roughly 2 MPa·m/s heat outruns dissipation, the surface crosses resin Tg (160-190°C for phenolic) and the impregnation layer softens and shears off. Where dry starts are credible, specify furan-impregnated material (Tg 260-300°C) or antimony (500°C).", vi: "Không, nếu thiết kế đúng — graphite tự bôi trơn bằng màng chuyển ngay khi đứng yên và trong những vòng quay đầu tiên, đó là ưu thế so với vòng bi lăn. Rủi ro là chạy khô kết hợp PV cao: với than chì impregnation nhựa phenolic, giới hạn khuyến nghị là 0.8-1.2 MPa·m/s; vượt khoảng 2 MPa·m/s thì nhiệt thoát không kịp, bề mặt vượt Tg của nhựa (160-190°C với phenolic) và lớp impregnation mềm ra, bóc khỏi nền. Nếu có nguy cơ chạy khô, chọn vật liệu impregnation furan (Tg 260-300°C) hoặc antimony (500°C).", th: "ไม่ หากออกแบบถูกต้อง กราไฟต์หล่อลื่นตัวเองด้วยฟิล์มถ่ายทอดตั้งแต่หยุดนิ่งและรอบหมุนแรก นั่นคือข้อได้เปรียบเหนือแบริ่งลูกกลิ้ง ความเสี่ยงอยู่ที่การวิ่งแห้งร่วมกับ PV สูง: สำหรับคาร์บอนกราไฟต์ impregnation เรซินฟี nolิก ขีดแนะนำคือ 0.8-1.2 MPa·m/s เกินราว 2 MPa·m/s ความร้อนระบายไม่ทัน ผิวจะข้าม Tg ของเรซิน (160-190°C สำหรับฟี nolิก) และชั้น impregnation จะอ่อนตัวลอก งานที่มีความเสี่ยงวิ่งแห้งสูง ใช้เกรดฟูลาน (Tg 260-300°C) หรือพลวง (500°C)" },
      },
      {
        q: { zh: "石墨轴承坏了怎么判断？能单独更换吗？", en: "How do I know a graphite bearing is worn out? Can it be replaced alone?", vi: "Làm sao biết vòng bi than chì đã mòn? Có thay riêng được không?", th: "รู้ได้อย่างไรว่าแบริ่งกราไฟต์สึก? เปลี่ยนแยกชิ้นได้ไหม?" },
        a: { zh: "看间隙和振动。石墨磨损是渐进的，检修时用内径量具测轴承内孔，与图纸原始尺寸对比即可判断剩余寿命；孔径局部扩大、表面粗糙化通常来自介质颗粒的三体磨损。设备表现为轴下沉、振动上升或异响时也提示轴承到寿。石墨轴承是可单独更换的消耗件，不需要更换轴或轴承座；磨损不均匀往往是安装对中或间隙设计问题，换件时一起校正。", en: "Measure clearance and watch vibration. Graphite wears progressively, so at overhaul you gauge the bore against the drawing size and read the remaining life directly; localised bore enlargement with a roughened surface points to three-body abrasive wear from solids in the media. A shaft that sits lower, rising vibration or new noise also flags end of life. Graphite bearings are individually replaceable wear items — the shaft and housing stay. Uneven wear usually signals misalignment or a wrong designed clearance, so correct it at the same time.", vi: "Hãy đo khe hở và theo dõi rung. Mòn của graphite diễn ra từ từ, khi bảo dưỡng hãy đo lỗ trong so với kích thước bản vẽ để đọc tuổi thọ còn lại; lỗ mòn không đều và bề mặt nhám là dấu hiệu mài mòn ba thể do hạt rắn. Trục hạ thấp hơn, rung tăng hoặc tiếng động lạ cũng báo hết hạn. Vòng bi than chì là chi tiết mòn thay riêng được — không cần thay trục hay gối đỡ. Mòn không đều thường do lệch tâm hoặc khe hở thiết kế sai, cần hiệu chỉnh ngay khi thay.", th: "วัดช่องว่างและสังเกตการสั่น กราไฟต์สึกอย่างค่อยเป็นค่อยไป ตอนซ่อมบำรุงให้วัดรูในเทียบกับขนาดในแบบแล้วประเมินอายุคงเหลือได้เลย รูขยายเฉพาะที่พร้อมผิวหยาบชี้ถึงการสึกแบบสามอนุภาคจากของแข็งในสื่อ เพลาต่ำลง การสั่นเพิ่ม หรือเสียงแปลกใหม่ก็บอกหมดอายุ แบริ่งกราไฟต์เป็นชิ้นสิ้นเปลืองที่เปลี่ยนแยกได้ ไม่ต้องเปลี่ยนเพลาหรือชุดรองรับ การสึกไม่สม่ำเสมอมักมาจากการศูนย์ไม่ตรงหรือช่องว่างออกแบบผิด ควรแก้พร้อมกัน" },
      },
    ],
  },

  // 4. 三瓣环 / Three-Piece Carbon Seal Rings
  {
    slug: "three-piece-carbon-seal-rings",
    name: {
      zh: "碳石墨三瓣环",
      en: "Three-Piece Carbon Seal Rings",
      vi: "Vòng ba mảnh than chì carbon",
      th: "แหวนซีลคาร์บอนสามชิ้น",
    },
    title: {
      zh: "碳石墨三瓣环 | 三片式石墨密封环，封闭腔体免拆轴安装",
      en: "Three-Piece Carbon Graphite Seal Rings | 3-Split Graphite Rings for Enclosed Cavities",
      vi: "Vòng ba mảnh than chì carbon | Vòng chia 3 mảnh cho khoang kín",
      th: "แหวนซีลคาร์บอนกราไฟต์สามชิ้น | แหวนแบ่ง 3 ชิ้นสำหรับห้องซีลปิด",
    },
    description: {
      zh: "碳石墨三瓣环由三块 120° 弧段精密拼接而成，瓣间贴合面逐片研磨，装配后密封性能接近整体环，却能在无法从轴端穿入的封闭式腔体内直接安装、单独换瓣。华豪密封 TP 系列耐温 -40~280℃（抗氧化牌号 350℃），耐压 10 MPa，线速度 15 m/s，用于压缩机、离心泵、蒸汽透平与化工设备，也可定制 2/4/6 瓣结构。海外常称 three-piece seal rings、3 split seal rings 或 segmented graphite rings。",
      en: "A carbon graphite three-piece seal ring is built from three 120° arc segments whose mating faces are lapped individually, so the assembled ring seals close to a one-piece ring yet can be fitted inside an enclosed cavity that offers no shaft-end access — and a single damaged segment can be replaced. Huahao TP series is rated -40 to 280°C (350°C anti-oxidation grade), 10 MPa and 15 m/s, used in compressors, centrifugal pumps, steam turbines and chemical equipment, with 2/4/6-segment variants available. Also searched as three-piece seal rings, 3 split seal rings or segmented graphite rings.",
      vi: "Vòng ba mảnh than chì carbon gồm ba cung 120° ghép lại, mặt tiếp giáp từng mảnh được mài riêng nên khi lắp kín gần bằng vòng nguyên khối, nhưng lắp được trong khoang kín không có lối từ đầu trục và có thể thay từng mảnh. Dòng TP của Huahao chịu -40 đến 280°C (350°C chống oxy hóa), 10 MPa, tốc độ bề mặt 15 m/s, dùng cho máy nén, bơm ly tâm, turbine hơi và thiết bị hóa chất; nhận chế tạo 2/4/6 mảnh.",
      th: "แหวนซีลคาร์บอนกราไฟต์สามชิ้นประกอบจากแผ่นโค้ง 120° สามชิ้น โดยผิว ประกบของแต่ละชิ้นถูกลบผิวแยกกัน เมื่อประกอบแล้วซีลได้ใกล้เคียงแหวนชิ้นเดียว แต่ยังติดตั้งภายในห้องปิดที่สอดจากปลายเพลาไม่ได้ และเปลี่ยนเฉพาะชิ้นที่เสียหายได้ แหวนซีรีส์ TP ของ Huahao ทน -40 ถึง 280°C (เกรดต้านออกซิเดชัน 350°C) ความดัน 10 MPa ความเร็วผิว 15 m/s ใช้ในคอมเพรสเซอร์ ปั๊มเหวี่ยง ไอน้ำเทอร์ไบน์ และอุปกรณ์เคมี รับผลิตแบบ 2/4/6 ชิ้น",
    },
    intro: {
      zh: "整体式碳石墨环要从轴端滑进去——当密封腔是封闭结构、轴两端不可分离，或者拆轴意味着整台设备停产数天时，这个安装前提就不成立。三瓣环把环切成三块 120° 弧段，逐片研磨接合面后在腔内拼合成圈，安装不需拆轴，维护时可单独更换损坏瓣片。瓣间配合面经精密研磨后间隙极小，配合碳石墨的自润滑特性，在多数工况下整体密封性能与整体环无异。",
      en: "A one-piece carbon graphite ring has to slide on from the shaft end. When the seal chamber is enclosed, the shaft cannot be separated at either end, or pulling the shaft means days of downtime, that assumption breaks. A three-piece ring divides the circle into three 120° arc segments, each mating face lapped individually, so the segments assemble into a ring inside the cavity without disturbing the shaft and a single damaged segment can be swapped. Because the ground segment joints run extremely tight and carbon graphite lubricates itself, overall sealing performance matches a one-piece ring in most duties.",
      vi: "Vòng nguyên khối phải trượt vào từ đầu trục. Khi buồng kín là khoang kín, trục không tách được hai đầu, hoặc rút trục nghĩa là dừng máy nhiều ngày, giả định đó không còn đúng. Vòng ba mảnh chia đường tròn thành ba cung 120°, mỗi mặt tiếp giáp mài riêng, nên lắp thành vòng ngay trong khoang mà không động tới trục và có thể thay từng mảnh. Vì khe tiếp giáp sau khi mài rất nhỏ và than chì carbon tự bôi trơn, khả năng kín tổng thể tương đương vòng nguyên khối ở hầu hết điều kiện.",
      th: "แหวนชิ้นเดียวต้องรูดเข้าจากปลายเพลา เมื่อห้องซีลเป็นโพรงปิด เพลาแยกจากกันทั้งสองข้างไม่ได้ หรือการดึงเพลาหมายถึงหยุดผลิตหลายวัน สมมติฐานนั้นใช้ไม่ได้ แหวนสามชิ้นแบ่งวงกลมเป็นแผ่นโค้ง 120° สามแผ่น ลบผิวหน้าประกบแยกชิ้น จึงประกอบเป็นวงภายในห้องได้โดยไม่แตะเพลา และเปลี่ยนเฉพาะแผ่นที่เสียหายได้ เพราะรอยต่อที่ลบผิวแล้วเฉียดกริบมาก บวกกับคุณสมบัติหล่อลื่นตัวเองของคาร์บอนกราไฟต์ สมรรถนะการซีลรวมจึงเทียบเท่าแหวนชิ้นเดียวในสภาพการทำงานส่วนใหญ่",
    },
    image: "/images/products/carbon-graphite-three-segment.webp",
    keyFacts: [
      { label: "Segments", value: "3 × 120° standard; 2 / 4 / 6-segment on request" },
      { label: "Series", value: "TP100 / TP200 / TP300 (custom to drawing)" },
      { label: "Bore (d)", value: "10 – 120 mm standard, larger on request" },
      { label: "Temperature", value: "-40°C ~ 280°C (350°C anti-oxidation grade)" },
      { label: "Pressure", value: "≤ 10 MPa" },
      { label: "Surface speed", value: "≤ 15 m/s" },
      { label: "Installation", value: "Fits enclosed cavities — no shaft-end access needed" },
      { label: "Maintenance", value: "Individual segments replaceable" },
    ],
    specs: [
      { label: "Temperature", value: "-40°C ~ 280°C · 350°C with anti-oxidation grade" },
      { label: "Pressure", value: "≤ 10 MPa" },
      { label: "Surface speed", value: "≤ 15 m/s" },
      { label: "Segment count", value: "3 (standard) · 2 / 4 / 6 to drawing" },
      { label: "Joint face finish", value: "Individually lapped mating faces, minimal joint gap" },
      { label: "Coefficient of friction", value: "0.04 – 0.15 (dry)" },
      { label: "Media", value: "Water, oils, chemicals, steam, gases" },
      { label: "Impregnation options", value: "Resin / antimony / copper / unimpregnated" },
    ],
    advantages: {
      zh: [
        "封闭腔体免拆轴安装，省去拆装转子与对中复测的停机时间",
        "瓣间接合面逐片研磨，拼合后间隙极小，多数工况密封性能与整体环无异",
        "可单独更换损坏瓣片，备件按瓣计价、库存体积远小于整体环",
        "低摩擦系数 0.04-0.15 与自润滑转移膜，在无油或稀液润滑下保护对偶面",
        "耐温耐压随浸渍类型可上调，蒸汽透平与化工设备也有对应牌号",
        "2/4/6 瓣与异形结构可按图纸定制，适配原厂无法提供的安装空间",
      ],
      en: [
        "Installs inside an enclosed cavity without pulling the shaft, eliminating rotor disassembly and realignment downtime",
        "Segment joints are lapped individually, so the assembled gap is minimal and sealing matches a one-piece ring in most duties",
        "Damaged segments are replaced one at a time — spares are priced per segment and store far smaller than full rings",
        "Friction coefficient 0.04-0.15 with a self-generated transfer film protects the mating face under oil-free or starved lubrication",
        "Temperature and pressure ceilings rise with the impregnation choice, covering steam turbine and chemical plant duty",
        "2, 4 and 6-segment layouts and non-standard geometries available to drawing for spaces the original design cannot serve",
      ],
      vi: [
        "Lắp trong khoang kín mà không cần rút trục, loại bỏ thời gian tháo roto và căn chỉnh lại",
        "Mặt tiếp giáp từng mảnh được mài riêng nên khe hở khi lắp rất nhỏ, độ kín tương đương vòng nguyên khối ở hầu hết điều kiện",
        "Thay từng mảnh hỏng — phụ tùng tính theo mảnh, tồn kho chiếm chỗ ít hơn nhiều so với vòng nguyên khối",
        "Hệ số ma sát 0.04-0.15 kèm màng tự bôi trơn bảo vệ mặt đối ghép khi không có dầu hoặc thiếu dầu",
        "Giới hạn nhiệt và áp tăng theo loại impregnation, phủ được ứng dụng turbine hơi và nhà máy hóa chất",
        "Nhận cấu hình 2/4/6 mảnh và hình dạng phi tiêu chuẩn theo bản vẽ cho những không gian thiết kế gốc không đáp ứng",
      ],
      th: [
        "ติดตั้งภายในห้องปิดโดยไม่ต้องถอดเพลา ตัดเวลาหยุดเครื่องที่ต้องถอดโรเตอร์และตั้งศูนย์ใหม่",
        "ผิวประกบของแต่ละชิ้นถูกลบแยกชิ้น ช่องว่างเมื่อประกอบจึงน้อยมาก จึงซีลได้เทียบเท่าแหวนชิ้นเดียวในสภาพใช้งานส่วนใหญ่",
        "เปลี่ยนเฉพาะชิ้นที่เสียหาย ราคาอะไหล่คิดต่อชิ้น และใช้พื้นที่สต็อกน้อยกว่าแหวนชิ้นเดียวมาก",
        "สัมประสิทธิ์เสียดทาน 0.04-0.15 พร้อมฟิล์มหล่อลื่นเอง ปกป้องผิวคู่แม้ไร้น้ำมันหรือหล่อลื่นไม่เพียงพอ",
        "เพดานอุณหภูมิและความดันปรับสูงขึ้นตามชนิด impregnation ครอบคลุมงานไอน้ำเทอร์ไบน์และโรงงานเคมี",
        "รับออกแบบ 2/4/6 ชิ้นและรูปทรงพิเศษตามแบบ สำหรับช่องว่างที่แบบเดิมเข้าไม่ถึง"
      ],
    },
    applications: {
      zh: [
        "压缩机密封腔与活塞杆支承密封",
        "离心泵与流程泵中无法从轴端装入的封闭密封腔",
        "船舶设备尾管与轴系密封",
        "蒸汽透平与高温气体设备密封",
        "化工反应釜与搅拌设备的分段密封",
        "原厂停产型号的分体式替代件",
      ],
      en: [
        "Compressor seal chambers and piston rod sealing",
        "Centrifugal and process pump cavities where shaft-end insertion is impossible",
        "Marine stern tube and shaft line sealing",
        "Steam turbine and hot gas equipment seals",
        "Segmented seals for chemical reactors and agitators",
        "Drop-in replacements for obsolete OEM part numbers",
      ],
      vi: [
        "Buồng kín máy nén và kín ty piston",
        "Buồng kín của bơm ly tâm và bơm công nghệ không thể lắp từ đầu trục",
        "Kín trục lái và hệ trục hàng hải",
        "Vòng kín cho turbine hơi và thiết bị khí nóng",
        "Vòng chia mảnh cho bồn phản ứng hóa chất và máy khuấy",
        "Thay thế tương đương cho mã OEM đã ngừng sản xuất",
      ],
      th: [
        "ห้องซีลคอมเพรสเซอร์และซีลก้านลูกสูบ",
        "ห้องซีลของปั๊มเหวี่ยงและปั๊มกระบวนการที่สอดจากปลายเพลาไม่ได้",
        "ซีลเพลาท้ายเรือและระบบเพลางานเรือ",
        "ซีลสำหรับไอน้ำเทอร์ไบน์และอุปกรณ์ก๊าซร้อน",
        "ซีลแบ่งชิ้นสำหรับถังปฏิกิริยาเคมีและเครื่องกวน",
        "ชิ้นทดแทนสำหรับเบอร์อะไหล่ OEM ที่เลิกผลิต",
      ],
    },
    relatedProducts: ["three-part-series", "graphite-bearing", "graphite-bushing", "2100-series", "us-series"],
    relatedPages: [
      { href: "/applications/compressor", label: { zh: "压缩机无油润滑密封", en: "Oil-Free Compressor Sealing", vi: "Kín máy nén không dầu", th: "การซีลคอมเพรสเซอร์ไร้น้ำมัน" } },
      { href: "/products/seal-rings", label: { zh: "整体式碳石墨密封环", en: "One-Piece Carbon Graphite Seal Rings", vi: "Vòng đệm nguyên khối", th: "แหวนซีลคาร์บอนกราไฟต์ชิ้นเดียว" } },
      { href: "/custom", label: { zh: "非标瓣数与异形结构定制", en: "Custom Segment Counts & Geometries", vi: "Gia công số mảnh và hình dạng theo yêu cầu", th: "ผลิตจำนวนชิ้นและรูปทรงตามสั่ง" } },
      { href: "/materials/antimony-impregnated-graphite", label: { zh: "高温工况选锑浸渍牌号", en: "Antimony Grades for High-Temperature Duty", vi: "Vật liệu antimony cho nhiệt độ cao", th: "เกรดพลวงสำหรับงานอุณหภูมิสูง" } },
    ],
    faq: [
      {
        q: { zh: "三瓣环和整体环有什么区别？什么时候必须用三瓣？", en: "What is the difference between a three-piece ring and a one-piece ring, and when is a split ring mandatory?", vi: "Khác nhau giữa vòng ba mảnh và vòng nguyên khối? Khi nào bắt buộc dùng vòng chia mảnh?", th: "แหวนสามชิ้นต่างจากแหวนชิ้นเดียวอย่างไร และเมื่อใดต้องใช้แหวนแบ่งชิ้น?" },
        a: { zh: "区别只在结构，材料、牌号与浸渍工艺完全相同。整体环密封性略优，但必须从轴端滑入；只要满足以下任一条，就得用三瓣环：①密封腔是封闭结构、轴两端不可分离；②拆轴需要吊转子或破坏管路，停机成本远高于备件；③原厂就采用分体设计。三瓣环拼合后整体圆度由接合面研磨精度保证，我们的接合面逐片研磨，多数工况下密封性能与整体环无异。", en: "Only the geometry differs — material, grade and impregnation are identical. A one-piece ring seals marginally better but must slide on from the shaft end, so a three-piece ring becomes the answer whenever: (1) the seal chamber is enclosed and the shaft cannot be separated at either end; (2) pulling the shaft means lifting the rotor or breaking pipework, so downtime costs far more than the part; or (3) the OEM fitted a segmented design originally. Roundness of the assembled ring is guaranteed by the lapped joint faces — we lap each segment individually, so in most duties sealing matches a one-piece ring.", vi: "Chỉ hình học khác nhau — vật liệu, mác và công nghệ impregnation hoàn toàn giống. Vòng nguyên khối kín hơn một chút nhưng phải trượt vào từ đầu trục, nên dùng vòng ba mảnh khi: (1) buồng kín là khoang kín và không tách được hai đầu trục; (2) rút trục nghĩa là nâng roto hoặc cắt đường ống, chi phí dừng máy lớn hơn nhiều so với phụ tùng; hoặc (3) ngay từ đầu OEM đã dùng thiết kế chia mảnh. Độ tròn của vòng sau lắp được bảo đảm bằng mặt tiếp giáp đã mài — chúng tôi mài riêng từng mảnh nên ở hầu hết điều kiện, độ kín tương đương vòng nguyên khối.", th: "ต่างกันเพียงรูปทรง — วัสดุ เกรด และกระบวนการ impregnation เหมือนกันทุกประการ แหวนชิ้นเดียวซีลได้ดีกว่าเล็กน้อยแต่ต้องรูดเข้าจากปลายเพลา จึงต้องใช้แหวนสามชิ้นเมื่อ (1) ห้องซีลเป็นโพรงปิดและแยกเพลาจากปลายสองข้างไม่ได้ (2) การดึงเพลาต้องยกโรเตอร์หรือตัดระบบท่อ ต้นทุนหยุดเครื่องสูงกว่าราคาชิ้นส่วนมาก หรือ (3) เดิมที OEM ออกแบบเป็นแบบแบ่งชิ้น ความกลมของแหวนหลังประกอบรับประกันด้วยผิวประกบที่ลบผิว โดยเราลบผิวแยกทีละชิ้น จึงซีลได้เทียบเท่าแหวนชิ้นเดียวในสภาพใช้งานส่วนใหญ่" },
      },
      {
        q: { zh: "瓣与瓣之间的接合处会不会泄漏？", en: "Does the joint between segments leak?", vi: "Khe giữa các mảnh có rò rỉ không?", th: "รอยต่อระหว่างแผ่นจะรั่วไหม?" },
        a: { zh: "正常运行下不会到可测泄漏量。瓣间接合面逐片精密研磨后贴合间隙极小，加上运行中环受介质压力与径向力作用会贴紧腔壁，且碳石墨自润滑不会产生粘滑抖动。需要注意两种情况：①颗粒介质卡在接缝里会把缝隙撑开，此时应加过滤或选开槽结构；②接合面研磨不到位或运输崩边会造成初期渗漏，我们因此对每片接合面做外观与贴合检查后再包装。", en: "Under normal running it will not reach measurable leakage. The lapped segment joints close to a minimal gap, operating pressure and radial force press the ring against the chamber wall, and carbon graphite's self-lubrication avoids stick-slip. Two things to watch: solids lodged in a joint can pry the gap open, so filter the media or specify a grooved design; and a poorly lapped joint or a chipped edge in transit gives early seepage, which is why every segment face is inspected for appearance and contact before packing.", vi: "Khi vận hành bình thường sẽ không đạt mức rò đo được. Khe tiếp giáp sau khi mài kín gần như tối thiểu, áp suất và lực hướng kính trong vận hành ép vòng áp sát thành buồng, và tính tự bôi trơn của than chì tránh hiện tượng stick-slip. Hai điều cần lưu ý: hạt rắn kẹt trong khe sẽ nới rộng khe hở, cần lọc hoặc chọn thiết kế có rãnh; và mặt tiếp giáp mài kém hoặc mẻ cạnh khi vận chuyển sẽ gây rỉ sớm — vì vậy chúng tôi kiểm tra từng mặt mảnh trước khi đóng gói.", th: "ภายใต้การทำงานปกติจะไม่รั่วจนวัดค่าได้ รอยต่อที่ลบผิวแล้วแนบสนิทจนช่องว่างน้อยมาก ความดันและแรงรัศมีขณะทำงานจะกดแหวนให้ชิดผนังห้อง และการหล่อลื่นตัวเองของคาร์บอนกราไฟต์หลีกเลี่ยงการเสียดทานแบบ stick-slip สองเรื่องที่ควรระวัง: อนุภาคที่คากรอยต่ออาจง้างช่องว่างให้กว้างขึ้น จึงควรกรองสื่อหรือเลือกรูปแบบบากร่อง กับรอยต่อลบผิวไม่ดีหรือขอบบิ่นระหว่างการขนส่งจะทำให้ซึมตั้งแต่แรก เราจึงตรวจสอบผิวทุกชิ้นก่อนบรรจุ" },
      },
      {
        q: { zh: "可以定制 2 瓣、4 瓣或 6 瓣吗？", en: "Can you supply 2-piece, 4-piece or 6-piece rings?", vi: "Có cung cấp loại 2, 4, 6 mảnh không?", th: "สั่งผลิตแบบ 2/4/6 ชิ้นได้ไหม?" },
        a: { zh: "可以。标准是三瓣（120° 均分），但瓣数是按安装空间定的设计参数：腔体开口窄、轴径大时用 4 或 6 瓣降低单片通过尺寸；腔体浅、要求接缝少时可用 2 瓣。请按图纸给出内径、外径、高度、瓣数与接缝位置偏好，我们会同时校核壁薄与强度，必要时建议改成整体环或调整结构。", en: "Yes. Three segments at 120° is standard, but the segment count is a design parameter set by access: a narrow chamber opening with a large shaft calls for 4 or 6 segments to shrink the size of each passing piece, while a shallow chamber that benefits from fewer joints can use 2. Send bore, OD, height, segment count and preferred joint positions and we will also check wall thickness and strength, recommending a one-piece ring or a geometry change where that is the better answer.", vi: "Có. Ba mảnh chia 120° là tiêu chuẩn, nhưng số mảnh là thông số thiết kế phụ thuộc không gian lắp: khoang hẹp và trục lớn nên dùng 4 hoặc 6 mảnh để giảm kích thước từng mảnh; khoang nông, cần ít khe hơn thì dùng 2 mảnh. Vui lòng gửi đường kính trong, ngoài, chiều cao, số mảnh và vị trí khe mong muốn, chúng tôi sẽ kiểm tra chiều dày thành và độ bền, khuyến nghị dùng vòng nguyên khối hoặc đổi hình học nếu đó là phương án tốt hơn.", th: "ได้ มาตรฐานคือ 3 ชิ้นแบ่ง 120° แต่จำนวนชิ้นคือพารามิเตอร์ออกแบบที่ขึ้นกับช่องเข้าถึง: ห้องแคบและเพลาใหญ่ควรใช้ 4 หรือ 6 ชิ้นเพื่อลดขนาดแต่ละชิ้น ห้องตื้นที่ต้องการรอยต่อน้อยใช้ 2 ชิ้นได้ ส่งขนาดรูใน ขนาดนอก ความสูง จำนวนชิ้น และตำแหน่งรอยต่อที่ชอบมา เราจะตรวจสอบความหนาผนังและความแข็งแรงควบคู่ไป หากวงชิ้นเดียวหรือแก้รูปทรงดีกว่าเราจะแจ้ง" },
      },
      {
        q: { zh: "三瓣环的备件应该备几片？", en: "How many spare segments should be kept on the shelf?", vi: "Nên dự trữ bao nhiêu mảnh?", th: "ควรมีอะไหล่สำรองกี่ชิ้น?" },
        a: { zh: "建议按整圈数量备，即一次备 3 片（或所订购瓣数的整倍数）。原因不是磨损概率，而是配合关系：同圈的接合面是配对研磨的，混用不同批次的单片会让接缝间隙变大、圆度下降。如果只想降低库存量，可以订购两组并各自标注所属腔位，避免跨组混装。这一点在下单时就要确定，因为配对研磨在加工阶段完成。", en: "Keep full rings' worth — three segments, or a whole multiple of the segment count you order. The reason is not wear probability but fit: the joint faces within one ring are lapped as a matched set, so mixing a single segment from another batch opens the joint gap and degrades roundness. To cut shelf stock, order two matched sets and label each to its cavity position rather than mixing across sets. Decide this at order time, because match-lapping happens during manufacture.", vi: "Hãy dự trữ theo cả vòng — đủ 3 mảnh, hoặc bội số nguyên của số mảnh bạn đặt. Lý do không phải xác suất mòn mà là mối ghép: các mặt tiếp giáp trong cùng một vòng được mài theo cặp, nên trộn lẫn một mảnh từ lô khác sẽ làm hở khe và giảm độ tròn. Nếu muốn giảm tồn kho, đặt hai bộ hoàn chỉnh và ghi rõ bộ nào cho buồng nào, tránh lắp lẫn giữa các bộ. Cần quyết định ngay khi đặt hàng vì công đoạn mài cặp thực hiện lúc chế tạo.", th: "ควรสำรองเป็นวงครบวง คือ 3 ชิ้น หรือจำนวนเต็มเท่าของจำนวนชิ้นที่สั่ง เหตุผลไม่ใช่โอกาสสึกแต่คือความเข้ากันได้: ผิวประกบในแหวนวงหนึ่งถูกลบผิวมาเป็นชุดคู่ หากหยิบชิ้นจากอีกล็อตมาผสมจะทำให้ช่องว่างรอยต่อเปิดและความกลมลดลง หากอยากลดสต็อก ให้สั่งเป็นชุดคู่ครบสองชุดพร้อมทำเครื่องหมายว่าชุดใดใช้กับห้องใด ห้ามปนข้ามชุด ต้องตัดสินใจตั้งแต่ตอนสั่งซื้อ เพราะการลบผิวเป็นคู่เกิดขึ้นในขั้นตอนผลิต" },
      },
    ],
  },
]

export function getProductCategoryBySlug(slug: string): ProductCategoryLanding | undefined {
  return productCategoryLandings.find((c) => c.slug === slug)
}

/**
 * 型号页 → 所属类别页的反查。轴套类目下 bushings / bearings 已拆成两个关键词页，
 * 所以不能直接复用 lib/products.ts 的 category→slug 单值映射。
 */
export function getCategorySlugForProduct(product: { slug: string; category: string }): string | undefined {
  if (product.category === "碳石墨密封环") return "seal-rings"
  if (product.category === "碳石墨三瓣环") return "three-piece-carbon-seal-rings"
  if (product.category === "碳石墨轴套") {
    return product.slug === "graphite-bushing" ? "carbon-graphite-bushings" : "carbon-graphite-bearings"
  }
  return undefined
}

/**
 * productCategoryLandings 补齐俄/日/韩三语种后的对外导出。
 * 原数组只写了 zh/en/vi/th，categories 的 /ru /ja /ko 页面因此整段吐英文，
 * 被 Search Console 判成「重复网页，Google 选择的规范网页与用户指定的不同」。
 * 译文来自 content/landing-translations.json（scripts/translate-landings.ts 增量生成）。
 */
export const productCategoryLandings = applyLandingTranslations("categories", RAW_ITEMS)
