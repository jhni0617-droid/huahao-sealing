/**
 * 碳石墨材料 Landing Page 数据
 * 对照竞争情报报告 P0 关键词 #51-65：resin/antimony impregnated graphite、graphite grades、
 * carbon graphite properties、isostatic graphite、copper graphite、babbitt impregnated、electrographite。
 * 8 个材料 × 4 语言（zh / en / vi / th），内容专业、技术性强，覆盖材料选型与性能关键词。
 * 参考：锑浸渍耐温 500℃、树脂浸渍耐温 220℃、碳化处理 600℃、SiC 配对面、自润滑。
 */

export interface MaterialLanding {
  slug: string
  title: { zh: string; en: string; vi?: string; th?: string }
  description: { zh: string; en: string; vi?: string; th?: string }
  properties: { label: string; value: string }[]
  advantages: { zh: string[]; en: string[]; vi?: string[]; th?: string[] }
  applications: { zh: string[]; en: string[]; vi?: string[]; th?: string[] }
  grades: { code: string; temp: string; note: { zh: string; en: string; vi?: string; th?: string } }[]
  relatedProducts: string[]
  faq: {
    zh: { q: string; a: string }[]
    en: { q: string; a: string }[]
    vi?: { q: string; a: string }[]
    th?: { q: string; a: string }[]
  }
}

export const materialLandings: MaterialLanding[] = [
  // 1. 碳石墨材料总览
  {
    slug: "carbon-graphite",
    title: {
      zh: "碳石墨材料 | 性能参数、牌号选型与工业应用",
      en: "Carbon Graphite Material | Properties, Grade Selection & Industrial Applications",
      vi: "Vật liệu than chì carbon | Thông số, lựa chọn vật liệu và ứng dụng",
      th: "วัสดุคาร์บอนกราไฟต์ | คุณสมบัติ การเลือกเกรดและการใช้งานอุตสาหกรรม",
    },
    description: {
      zh: "碳石墨是以石油焦、沥青焦为主要原料，经混捏、压型、焙烧制成的高纯度碳基材料。华豪密封提供多种碳石墨牌号，密度1.55-1.85 g/cm³，耐温-200~600℃，具备天然自润滑、化学惰性、高导热等特性，广泛用于机械密封环、轴套、轴承等摩擦磨损部件。",
      en: "Carbon graphite is a high-purity carbon-based material made from petroleum coke and pitch coke through mixing, forming and baking. Huahao Sealing supplies multiple carbon graphite grades with density 1.55-1.85 g/cm³, temperature range -200 to 600°C, featuring natural self-lubrication, chemical inertness and high thermal conductivity for mechanical seal rings, bushings and bearings.",
      vi: "Than chì carbon là vật liệu nền carbon độ tinh khiết cao làm từ coke dầu mỏ và coke hắc ín. Huahao Sealing cung cấp nhiều vật liệu than chì carbon với mật độ 1.55-1.85 g/cm³, dải nhiệt -200 đến 600°C, tự bôi trơn, trơ hóa học và dẫn nhiệt cao cho vòng kín, bạc lót và vòng bi.",
      th: "คาร์บอนกราไฟต์เป็นวัสดุพื้นฐานคาร์บอนบริสุทธิ์สูงจาก coke ปิโตรเลียม Huahao Sealing จัดหาหลายเกรดคาร์บอนกราไฟต์ ความหนาแน่น 1.55-1.85 g/cm³ ช่วงอุณหภูมิ -200 ถึง 600°C ตัวหล่อลื่นเอง เฉื่อยทางเคมี นำความร้อนสูง",
    },
    properties: [
      { label: "Density", value: "1.55 – 1.85 g/cm³" },
      { label: "Temperature", value: "-200°C ~ 600°C (grade dependent)" },
      { label: "Compressive Strength", value: "150 – 350 MPa" },
      { label: "Shore Hardness", value: "60 – 95 HS" },
      { label: "Thermal Conductivity", value: "8 – 70 W/m·K" },
      { label: "Coefficient of Friction", value: "0.04 – 0.15 (dry)" },
      { label: "pH Resistance", value: "0 – 14 (grade dependent)" },
      { label: "Porosity", value: "8 – 15% (before impregnation)" },
    ],
    advantages: {
      zh: [
        "天然自润滑——石墨层状晶体结构在摩擦面形成转移膜，摩擦系数低至0.04，无需外部润滑",
        "化学惰性——耐大多数酸、碱、盐和有机溶剂，pH 0-14 全范围稳定",
        "高导热——导热率8-70 W/m·K，是金属轴承的数倍，快速散热防止热斑",
        "耐高温——抗氧化处理后长期600℃稳定运行，短期峰值可达700℃",
        "可加工性——可精密车削、铣削、研磨至微米级公差，适应各种非标结构",
      ],
      en: [
        "Natural self-lubrication — layered graphite crystal structure forms a transfer film at the friction interface, friction coefficient as low as 0.04, no external lubrication required",
        "Chemical inertness — resists most acids, alkalis, salts and organic solvents, stable across pH 0-14",
        "High thermal conductivity — 8-70 W/m·K, several times that of metal bearings, dissipates heat rapidly to prevent hot spots",
        "High temperature resistance — anti-oxidation treatment enables stable 600°C continuous operation, 700°C short-term peak",
        "Machinability — precision turning, milling and grinding to micron-level tolerances for custom non-standard geometries",
      ],
      vi: [
        "Tự bôi trơn — cấu trúc tinh thể than chì lớp tạo màng chuyển tại bề mặt ma sát, hệ số ma sát 0.04, không cần bôi trơn ngoài",
        "Trơ hóa học — chống most axit, kiềm, muối và dung môi, ổn định pH 0-14",
        "Dẫn nhiệt cao — 8-70 W/m·K, tản nhiệt nhanh chống điểm nóng",
        "Chịu nhiệt cao — xử lý chống oxy hóa hoạt động ổn định 600°C, đỉnh 700°C",
        "Gia công chính xác — tiện, phay, mài đến dung sai micromet",
      ],
      th: [
        "หล่อลื่นเอง — โครงสร้างผลึกกราไฟต์ชั้นสร้างฟิล์มถ่ายทอดที่ผิวเสียดทาน สัมประสิทธิ์การเสียดทาน 0.04 ไม่ต้องหล่อลื่น",
        "เฉื่อยทางเคมี — ทนกรด ด่าง เกลือ และตัวทำละลายอินทรีย์ คงตัว pH 0-14",
        "นำความร้อนสูง — 8-70 W/m·K ระบายความร้อนเร็วป้องกันจุดร้อน",
        "ทนความร้อนสูง — ป้องกันออกซิเดชันทำงาน 600°C ได้คงที่",
        "กะเทาะได้ — กลึง กะเทาะ ถึงระดับไมโครเมตร",
      ],
    },
    applications: {
      zh: [
        "机械密封环——离心泵、化工泵、油泵的端面密封",
        "碳石墨轴套——泵轴支撑套，替代金属铜套",
        "碳石墨轴承——高温、干运转、腐蚀介质工况",
        "压缩机密封环——活塞杆、轴密封",
        "搅拌器轴承——反应釜搅拌轴支撑",
      ],
      en: [
        "Mechanical seal rings — face seals for centrifugal pumps, chemical pumps and oil pumps",
        "Carbon graphite bushings — pump shaft support sleeves replacing metallic bushings",
        "Carbon graphite bearings — high-temperature, dry-running and corrosive-media applications",
        "Compressor seal rings — piston rod and shaft sealing",
        "Agitator bearings — reactor vessel stirring shaft support",
      ],
      vi: [
        "Vòng kín cơ khí — kín mặt cho bơm ly tâm, bơm hóa chất và bơm dầu",
        "Bạc lót than chì — ống lót trục bơm thay bạc kim loại",
        "Vòng bi than chì — nhiệt cao, chạy khô và môi trường ăn mòn",
        "Vòng kín máy nén — kín piston và trục",
        "Vòng bi khuấy — hỗ trợ trục khuấy bồn phản ứng",
      ],
      th: [
        "แหวนซีลเชิงกล — ซีลหน้าสำหรับปั๊มเหวียน ปั๊มเคมีและปั๊มน้ำมัน",
        "บุชชิ่งคาร์บอนกราไฟต์ — ปลอกสนับเพลาปั๊มแทนบุชโลหะ",
        "แบริ่งคาร์บอนกราไฟต์ — อุณหภูมิสูง วิ่งแห้งและสื่อกัดกร่อน",
        "แหวนซีลคอมเพรสเซอร์ — ซีลลูกสูบและเพลา",
        "แบริ่งกวน — สนับเพลากวนถังปฏิกิริยา",
      ],
    },
    grades: [
      { code: "M106", temp: "350°C", note: { zh: "普通碳石墨，通用机械密封与轴承", en: "Standard carbon graphite, general-purpose seals and bearings", vi: "Than chì carbon tiêu chuẩn, kín và vòng bi thông dụng", th: "คาร์บอนกราไฟต์มาตรฐาน ซีลและแบริ่งทั่วไป" } },
      { code: "M106K", temp: "220°C", note: { zh: "树脂浸渍，食品级，FDA合规", en: "Resin-impregnated, food-grade, FDA compliant", vi: "Impregnation nhựa, cấp thực phẩm, tuân thủ FDA", th: "อิมเพรกเนชันเรซิน เกรดอาหาร ตรงมาตรฐาน FDA" } },
      { code: "M106H", temp: "500°C", note: { zh: "锑浸渍，耐高温抗氧化", en: "Antimony-impregnated, high-temp anti-oxidation", vi: "Impregnation antimony, nhiệt cao chống oxy hóa", th: "อิมเพรกเนชันพลวง ความร้อนสูงป้องกันออกซิเดชัน" } },
      { code: "M191T", temp: "600°C", note: { zh: "碳化处理，化学惰性极高", en: "Carbonized, extreme chemical inertness", vi: "Carbonized, trơ hóa học cực cao", th: "ระบมพลาสติก ความเฉื่อยเคมีสูงมาก" } },
    ],
    relatedProducts: ["109-series", "graphite-bushing", "graphite-bearing", "graphite-thrust-disc"],
    faq: {
      zh: [
        { q: "碳石墨和石墨有什么区别？", a: "碳石墨是经过焙烧处理的工程材料，孔隙率8-15%，需要浸渍处理后用于密封件。天然石墨或可膨胀石墨层间结合力弱，不适合精密加工。密封行业说的'碳石墨'通常指经过焙烧、浸渍的工程碳石墨。" },
        { q: "碳石墨的最高工作温度是多少？", a: "取决于牌号。普通碳石墨350℃，树脂浸渍牌号(M106K)220℃，锑浸渍牌号(M106H)500℃，碳化处理牌号(M191T)600℃。超过400℃需选用金属浸渍或碳化处理牌号，并配合抗氧化处理。" },
        { q: "碳石墨的密度是多少？", a: "未浸渍碳石墨密度1.55-1.70 g/cm³。树脂浸渍后1.75-1.80 g/cm³，锑浸渍后1.80-1.85 g/cm³。密度越高，孔隙率越低，机械强度和耐磨性越好。" },
        { q: "碳石墨为什么能自润滑？", a: "碳石墨的层状晶体结构中，碳原子在同一平面内以强共价键结合，层间以弱范德华力结合。摩擦时层间容易滑动，并在配对面上形成转移膜，从而降低摩擦系数至0.04-0.15。" },
      ],
      en: [
        { q: "What is the difference between carbon graphite and graphite?", a: "Carbon graphite is a baked engineering material with 8-15% porosity that requires impregnation for seal applications. Natural or expandable graphite has weak interlayer bonding and is unsuitable for precision machining. The term 'carbon graphite' in the sealing industry refers to baked and impregnated engineering carbon graphite." },
        { q: "What is the maximum working temperature of carbon graphite?", a: "It depends on the grade. Standard carbon graphite 350°C, resin-impregnated (M106K) 220°C, antimony-impregnated (M106H) 500°C, carbonized (M191T) 600°C. Above 400°C, metal-impregnated or carbonized grades with anti-oxidation treatment are required." },
        { q: "What is the density of carbon graphite?", a: "Unimpregnated carbon graphite density is 1.55-1.70 g/cm³. After resin impregnation 1.75-1.80 g/cm³, after antimony impregnation 1.80-1.85 g/cm³. Higher density means lower porosity and better mechanical strength and wear resistance." },
        { q: "Why is carbon graphite self-lubricating?", a: "In the layered crystal structure of carbon graphite, carbon atoms are bonded by strong covalent bonds within layers and weak van der Waals forces between layers. During friction, layers slide easily and form a transfer film on the mating surface, reducing the friction coefficient to 0.04-0.15." },
      ],
      vi: [
        { q: "Khác nhau giữa than chì carbon và than chì?", a: "Than chì carbon là vật liệu kỹ thuật đã nung, độ rỗng 8-15%, cần impregnation cho ứng dụng kín. Than chì tự nhiên liên kết lớp yếu, không phù hợp gia công chính xác. 'Than chì carbon' trong ngành kín chỉ vật liệu đã nung và impregnation." },
        { q: "Nhiệt độ làm việc tối đa của than chì carbon?", a: "Tùy vật liệu: tiêu chuẩn 350°C, impregnation nhựa (M106K) 220°C, impregnation antimony (M106H) 500°C, carbonized (M191T) 600°C. Trên 400°C cần vật liệu impregnation kim loại hoặc carbonized có xử lý chống oxy hóa." },
        { q: "Mật độ than chì carbon?", a: "Chưa impregnation 1.55-1.70 g/cm³. Sau impregnation nhựa 1.75-1.80 g/cm³, sau impregnation antimony 1.80-1.85 g/cm³. Mật độ cao hơn = độ rỗng thấp hơn, độ bền và chống mài mòn tốt hơn." },
        { q: "Tại sao than chì carbon tự bôi trơn?", a: "Cấu trúc tinh thể lớp, liên kết đồng hóa trị mạnh trong lớp, liên kết Van der Waals yếu giữa các lớp. Ma sát trượt lớp dễ dàng tạo màng chuyển, giảm hệ số ma sát 0.04-0.15." },
      ],
      th: [
        { q: "ความแตกต่างระหว่างคาร์บอนกราไฟต์และกราไฟต์?", a: "คาร์บอนกราไฟต์เป็นวัสดุวิศวกรรมที่ผ่านการเผา มีรูพรุน 8-15% ต้อง impregnation สำหรับงานซีล กราไฟต์ธรรมชาติพันธะชั้นอ่อนไม่เหมาะกับการกะเทาะที่ละเอียด" },
        { q: "อุณหภูมิทำงานสูงสุดของคาร์บอนกราไฟต์?", a: "ขึ้นกับเกรด มาตรฐาน 350°C เรซิน 220°C พลวง 500°C คาร์บอไนซ์ 600°C มากกว่า 400°C ต้องใช้เกรด impregnation โลหะหรือคาร์บอไนซ์" },
        { q: "ความหนาแน่นของคาร์บอนกราไฟต์?", a: "ก่อน impregnation 1.55-1.70 g/cm³ หลังเรซิน 1.75-1.80 หลังพลวง 1.80-1.85 หนาแน่นสูงกว่า = รูพรุนต่ำกว่า ทนการสึกดีกว่า" },
        { q: "ทำไมคาร์บอนกราไฟต์หล่อลื่นเอง?", a: "โครงสร้างผลึกชั้น พันธะโควาเลนต์แข็งในชั้น พันธะ Van der Waals อ่อนระหว่างชั้น เสียดทานทำให้ชั้นเลื่อนง่ายสร้างฟิล์มถ่ายทอด" },
      ],
    },
  },

  // 2. 树脂浸渍石墨
  {
    slug: "resin-impregnated-graphite",
    title: {
      zh: "树脂浸渍石墨 | 食品级密封材料 M106K",
      en: "Resin Impregnated Graphite | Food-Grade Sealing Material M106K",
      vi: "Than chì impregnation nhựa | Vật liệu kín cấp thực phẩm M106K",
      th: "กราไฟต์อิมเพรกเนชันเรซิน | วัสดุซีลเกรดอาหาร M106K",
    },
    description: {
      zh: "树脂浸渍石墨是将焙烧后的碳石墨基体在真空条件下浸入酚醛或环氧树脂，使树脂填充微孔，密度提升至1.75-1.80 g/cm³。华豪密封M106K牌号耐温220℃，符合FDA食品接触标准，用于食品机械、制药设备、饮用水泵等无污染自润滑工况。",
      en: "Resin-impregnated graphite is produced by vacuum-impregnating baked carbon graphite with phenolic or epoxy resin, filling the micropores to raise density to 1.75-1.80 g/cm³. Huahao Sealing's M106K grade is rated 220°C and FDA-compliant for food machinery, pharmaceutical equipment and drinking-water pumps requiring contamination-free self-lubrication.",
      vi: "Than chì impregnation nhựa được tạo bằng cách impregnation than chì đã nung với nhựa phenolic hoặc epoxy trong chân không, lấp đầy lỗ rỗng nâng mật độ 1.75-1.80 g/cm³. Vật liệu M106K của Huahao Sealing chịu 220°C, tuân thủ FDA cho máy thực phẩm, thiết bị dược phẩm và bơm nước uống.",
      th: "กราไฟต์อิมเพรกเนชันเรซินสร้างโดยอิมเพรกเนตกราไฟต์ที่เผาแล้วด้วยเรซินเฟนอลิกหรืออีพอกซีในสุญญากาศ เติมรูพรุนเพิ่มความหนาแน่นเป็น 1.75-1.80 g/cm³ เกรด M106K ของ Huahao ทน 220°C ตรง FDA",
    },
    properties: [
      { label: "Density", value: "1.75 – 1.80 g/cm³" },
      { label: "Temperature", value: "-200°C ~ 220°C" },
      { label: "Compressive Strength", value: "200 – 280 MPa" },
      { label: "Shore Hardness", value: "75 – 90 HS" },
      { label: "Porosity (after impregnation)", value: "< 2%" },
      { label: "Friction Coefficient", value: "0.04 – 0.10" },
      { label: "Food Contact Compliance", value: "FDA, EU 1935/2004" },
      { label: "Impregnant", value: "Phenolic / Epoxy resin" },
    ],
    advantages: {
      zh: [
        "食品级合规——树脂浸渍剂符合FDA 21 CFR和EU 1935/2004食品接触标准，无金属离子污染",
        "低孔隙率——浸渍后孔隙率<2%，介质渗透率极低，适用于压力密封",
        "自润滑干运转——无需润滑油脂，避免产品污染，适合食品和制药工况",
        "成本效益高——相比金属浸渍牌号，树脂浸渍成本更低，大批量OEM应用经济",
        "良好可加工性——硬度适中，可精密车削至微米级公差",
      ],
      en: [
        "Food-grade compliance — impregnants meet FDA 21 CFR and EU 1935/2004 food contact standards, no metal ion contamination",
        "Low porosity — post-impregnation porosity below 2%, extremely low media permeability for pressure sealing",
        "Self-lubricating dry running — no grease required, eliminates product contamination for food and pharma applications",
        "Cost-effective — lower cost than metal-impregnated grades, economical for high-volume OEM applications",
        "Good machinability — moderate hardness enables precision turning to micron-level tolerances",
      ],
      vi: [
        "Tuân thủ cấp thực phẩm — impregnant tuân thủ FDA 21 CFR và EU 1935/2004, không nhiễm ion kim loại",
        "Độ rỗng thấp — sau impregnation <2%, thấm môi trường cực thấp cho kín áp suất",
        "Tự bôi trơn chạy khô — không cần mỡ, tránh nhiễm bẩn sản phẩm cho thực phẩm và dược phẩm",
        "Hiệu quả chi phí — rẻ hơn vật liệu kim loại, kinh tế cho OEM sản lượng lớn",
        "Gia công tốt — độ cứng vừa phải, tiện chính xác đến micromet",
      ],
      th: [
        "เกรดอาหาร — สารอิมเพรกเนตตรง FDA 21 CFR และ EU 1935/2004 ไม่มีการปนเปื้อนไอออนโลหะ",
        "รูพรุนต่ำ — หลังอิมเพรกเนชันต่ำกว่า 2% ซึมผ่านต่ำมากสำหรับซีลแรงดัน",
        "หล่อลื่นเองวิ่งแห้ง — ไม่ต้องใช้จารบิล กันการปนเปื้อนผลิตภัณฑ์",
        "คุ้มราคา — ถูกกว่าเกรดโลหะ เศรษฐกิจสำหรับ OEM ปริมาณมาก",
        "กะเทาะได้ดี — ความแข็งปานกลาง กะเทาะถึงระดับไมโครเมตร",
      ],
    },
    applications: {
      zh: [
        "食品机械——巧克力搅拌机、食品输送泵、灌装机轴承",
        "制药设备——反应釜搅拌轴密封、CIP清洗泵轴套",
        "饮用水泵——供水系统无污染密封",
        "家用洗衣机——小型泵密封环",
        "轻工设备——低负载干运转工况",
      ],
      en: [
        "Food machinery — chocolate mixers, food conveyor pumps, filling machine bearings",
        "Pharmaceutical equipment — reactor agitator shaft seals, CIP cleaning pump bushings",
        "Drinking water pumps — contamination-free seals for water supply systems",
        "Domestic washing machines — small pump seal rings",
        "Light industrial equipment — low-load dry-running applications",
      ],
      vi: [
        "Máy thực phẩm — máy khuấy chocolate, bơm băng tải, vòng bi máy chiết",
        "Thiết bị dược phẩm — kín trục khuấy bồn phản ứng, bạc bơm rửa CIP",
        "Bơm nước uống — kín không nhiễm bẩn hệ thống cấp nước",
        "Máy giặt gia đình — vòng kín bơm nhỏ",
        "Thiết bị công nghiệp nhẹ — chạy khô tải thấp",
      ],
      th: [
        "เครื่องจักรอาหาร — เครื่องผสมช็อกโกแลต ปั๊มสายพาน แบริ่งเครื่องบรรจุ",
        "อุปกรณ์เภสัช — ซีลเพลากวนถังปฏิกิริยา บุชปั๊มล้าง CIP",
        "ปั๊มน้ำดื่ม — ซีลไม่ปนเปื้อน",
        "เครื่องซักผ้า — แหวนซีลปั๊มเล็ก",
        "อุปกรณ์อุตสาหกรรมเบา — วิ่งแห้งโหลดต่ำ",
      ],
    },
    grades: [
      { code: "M106K", temp: "220°C", note: { zh: "酚醛树脂浸渍，食品级", en: "Phenolic resin impregnated, food-grade", vi: "Impregnation nhựa phenolic, cấp thực phẩm", th: "อิมเพรกเนตเรซินเฟนอลิก เกรดอาหาร" } },
      { code: "M120K", temp: "200°C", note: { zh: "环氧树脂浸渍，耐腐蚀", en: "Epoxy resin impregnated, corrosion-resistant", vi: "Impregnation nhựa epoxy, chống ăn mòn", th: "อิมเพรกเนตเรซินอีพอกซี ทนการกัดกร่อน" } },
    ],
    relatedProducts: ["104-series", "graphite-bushing", "graphite-bearing"],
    faq: {
      zh: [
        { q: "树脂浸渍石墨能在高温下使用吗？", a: "树脂浸渍牌号(M106K)最高工作温度220℃。超过此温度树脂会碳化分解，失去浸渍效果。高温工况(>220℃)应选用锑浸渍(M106H, 500℃)或碳化处理(M191T, 600℃)牌号。" },
        { q: "树脂浸渍石墨符合食品级标准吗？", a: "是的。M106K牌号使用食品级酚醛树脂浸渍剂，符合FDA 21 CFR 175.300和EU 1935/2004食品接触材料标准。完全无油自润滑运行，无金属离子污染风险，已通过食品安全认证。" },
        { q: "树脂浸渍和锑浸渍怎么选？", a: "温度低于220℃且要求食品级/无污染工况选树脂浸渍(M106K)。温度高于220℃或需高耐磨性选锑浸渍(M106H, 500℃)。锑浸渍硬度更高、耐温更高，但不适合食品接触。" },
      ],
      en: [
        { q: "Can resin-impregnated graphite be used at high temperatures?", a: "Resin-impregnated grade (M106K) has a maximum working temperature of 220°C. Above this, the resin carbonizes and decomposes, losing its impregnation effect. For high-temperature service (>220°C), select antimony-impregnated (M106H, 500°C) or carbonized (M191T, 600°C) grades." },
        { q: "Is resin-impregnated graphite food-grade compliant?", a: "Yes. The M106K grade uses food-grade phenolic resin impregnant that meets FDA 21 CFR 175.300 and EU 1935/2004 food contact material standards. It runs completely oil-free with no metal ion contamination risk and has passed food safety certification." },
        { q: "How to choose between resin and antimony impregnation?", a: "For temperatures below 220°C with food-grade/contamination-free requirements, choose resin-impregnated (M106K). For temperatures above 220°C or where high wear resistance is needed, choose antimony-impregnated (M106H, 500°C). Antimony grades have higher hardness and temperature resistance but are not suitable for food contact." },
      ],
      vi: [
        { q: "Than chì impregnation nhựa dùng được ở nhiệt cao không?", a: "Vật liệu M106K nhiệt tối đa 220°C. Trên nhiệt này nhựa carbonized phân hủy. Trên 220°C chọn impregnation antimony (M106H, 500°C) hoặc carbonized (M191T, 600°C)." },
        { q: "Than chì impregnation nhựa có đạt chuẩn thực phẩm?", a: "Có. M106K dùng nhựa phenolic cấp thực phẩm, tuân thủ FDA 21 CFR 175.300 và EU 1935/2004. Chạy hoàn toàn không dầu, không nhiễm ion kim loại." },
        { q: "Chọn nhựa hay antimony impregnation?", a: "Dưới 220°C yêu cầu cấp thực phẩm chọn nhựa (M106K). Trên 220°C hoặc cần chống mài mòn cao chọn antimony (M106H, 500°C). Antimony cứng hơn, chịu nhiệt cao hơn nhưng không phù hợp tiếp xúc thực phẩm." },
      ],
      th: [
        { q: "กราไฟต์อิมเพรกเนตเรซินใช้ที่อุณหภูมิสูงได้ไหม?", a: "เกรด M106K อุณหภูมิสูงสุด 220°C สูงกว่านั้นเรซินคาร์บอไนซ์ ต้องเลือกพลวง (M106H, 500°C) หรือคาร์บอไนซ์ (M191T, 600°C)" },
        { q: "กราไฟต์อิมเพรกเนตเรซินเกรดอาหารไหม?", a: "ใช่ M106K ใช้เรซินเฟนอลิกเกรดอาหาร ตรง FDA 21 CFR 175.300 และ EU 1935/2004 วิ่งไม่มีน้ำมัน" },
        { q: "เลือกเรซินหรือพลวง?", a: "ต่ำกว่า 220°C ต้องการเกรดอาหารเลือกเรซิน สูงกว่า 220°C เลือกพลวง พลวงแข็งและทนร้อนกว่าแต่ไม่เหมาะกับอาหาร" },
      ],
    },
  },

  // 3. 锑浸渍石墨
  {
    slug: "antimony-impregnated-graphite",
    title: {
      zh: "锑浸渍石墨 | 高温抗氧化密封材料 M106H",
      en: "Antimony Impregnated Graphite | High-Temp Anti-Oxidation Sealing Material M106H",
      vi: "Than chì impregnation antimony | Vật liệu kín nhiệt cao chống oxy hóa M106H",
      th: "กราไฟต์อิมเพรกเนชันพลวง | วัสดุซีลความร้อนสูงป้องกันออกซิเดชัน M106H",
    },
    description: {
      zh: "锑浸渍石墨是将碳石墨基体在高压下浸入熔融锑金属，锑填充微孔形成金属网络，密度提升至1.80-1.85 g/cm³。华豪密封M106H牌号耐温500℃，配有抗氧化处理，硬度高、耐磨性优异，广泛用于高温油泵、压缩机、石化设备等苛刻工况。",
      en: "Antimony-impregnated graphite is produced by high-pressure impregnation of carbon graphite with molten antimony metal, forming a metallic network in the micropores to raise density to 1.80-1.85 g/cm³. Huahao Sealing's M106H grade is rated 500°C with anti-oxidation treatment, offering high hardness and excellent wear resistance for high-temperature oil pumps, compressors and petrochemical equipment.",
      vi: "Than chì impregnation antimony được tạo bằng cách impregnation than chì carbon với antimony nóng chảy ở áp suất cao, tạo mạng lưới kim loại trong lỗ rỗng, mật độ 1.80-1.85 g/cm³. Vật liệu M106H của Huahao chịu 500°C có xử lý chống oxy hóa, độ cứng cao và chống mài mòn tuyệt vời cho bơm dầu nhiệt cao, máy nén và thiết bị hóa chất.",
      th: "กราไฟต์อิมเพรกเนชันพลวงสร้างโดยอิมเพรกเนตกราไฟต์กับพลวงหลอมเหลวใต้แรงดันสูง สร้างเครือข่ายโลหะเพิ่มความหนาแน่น 1.80-1.85 g/cm³ เกรด M106H ทน 500°C มีการป้องกันออกซิเดชัน แข็งและทนการสึกดี",
    },
    properties: [
      { label: "Density", value: "1.80 – 1.85 g/cm³" },
      { label: "Temperature", value: "-200°C ~ 500°C" },
      { label: "Compressive Strength", value: "250 – 350 MPa" },
      { label: "Shore Hardness", value: "85 – 105 HS" },
      { label: "Porosity (after impregnation)", value: "< 1.5%" },
      { label: "Friction Coefficient", value: "0.05 – 0.12" },
      { label: "Anti-Oxidation Treatment", value: "Yes (proprietary)" },
      { label: "Impregnant", value: "Antimony (Sb) metal" },
    ],
    advantages: {
      zh: [
        "耐高温500℃——锑金属网络耐热性优异，配合抗氧化处理可在450-500℃长期稳定运行",
        "高硬度高耐磨——浸锑后硬度提升至85-105 HS，耐磨性比普通石墨提高60-80%",
        "低孔隙率——浸渍后孔隙率<1.5%，适用于高压密封工况",
        "优良导热——锑金属导热率高，快速散热防止密封面热斑与热裂",
        "化学稳定性——在含硫油品和弱酸弱碱中保持稳定，不发生电化学腐蚀",
      ],
      en: [
        "High temperature 500°C — antimony metallic network offers excellent heat resistance, with anti-oxidation treatment for stable 450-500°C continuous operation",
        "High hardness and wear resistance — impregnation raises hardness to 85-105 HS, wear resistance 60-80% better than standard graphite",
        "Low porosity — post-impregnation porosity below 1.5%, suitable for high-pressure sealing applications",
        "Excellent thermal conductivity — antimony metal's high thermal conductivity dissipates heat rapidly, preventing seal face hot spots and thermal cracking",
        "Chemical stability — remains stable in sour crude and mild acids/alkalis, with no galvanic corrosion",
      ],
      vi: [
        "Nhiệt cao 500°C — mạng antimony chịu nhiệt tốt, xử lý chống oxy hóa hoạt động 450-500°C",
        "Độ cứng và chống mài mòn — impregnation nâng độ cứng 85-105 HS, chống mài mòn tốt hơn 60-80%",
        "Độ rỗng thấp — sau impregnation <1.5%, phù hợp kín áp suất cao",
        "Dẫn nhiệt tốt — antimony dẫn nhiệt cao tản nhiệt nhanh chống điểm nóng",
        "Ổn định hóa học — ổn định trong dầu lưu huỳnh và axit/kiềm nhẹ, không ăn mòn điện hóa",
      ],
      th: [
        "ความร้อนสูง 500°C — เครือข่ายพลวงทนร้อนดี ป้องกันออกซิเดชันทำงาน 450-500°C",
        "แข็งและทนการสึก — ความแข็ง 85-105 HS ทนการสึกดีกว่า 60-80%",
        "รูพรุนต่ำ — หลังอิมเพรกเนชันต่ำกว่า 1.5% เหมาะกับซีลแรงดันสูง",
        "นำความร้อนดี — พลวงนำความร้อนสูงระบายความร้อนเร็ว",
        "เสถียรทางเคมี — คงตัวในน้ำมันกำมะถันและกรด/ด่างอ่อน",
      ],
    },
    applications: {
      zh: [
        "高温油泵——催化裂化装置、常减压塔底泵",
        "压缩机密封——天然气压缩机活塞杆密封",
        "石化设备——含硫油品输送泵、反应釜搅拌轴",
        "电厂设备——循环水泵、供热泵轴承",
        "冶金设备——高温轧机润滑系统密封",
      ],
      en: [
        "High-temperature oil pumps — FCC unit and vacuum tower bottom pumps",
        "Compressor seals — natural gas compressor piston rod sealing",
        "Petrochemical equipment — sour crude transport pumps, reactor agitator shafts",
        "Power plant equipment — circulating water pumps and heat supply pump bearings",
        "Metallurgical equipment — hot rolling mill lubrication system seals",
      ],
      vi: [
        "Bơm dầu nhiệt cao — bơm FCC và bơm chân không",
        "Kín máy nén — kín piston máy nén khí đốt",
        "Thiết bị hóa chất — bơm dầu lưu huỳnh, trục khuấy bồn phản ứng",
        "Thiết bị điện — bơm tuần hoàn và bạc bơm nhiệt",
        "Thiết bị luyện kim — kín hệ thống bôi trơn máy cán",
      ],
      th: [
        "ปั๊มน้ำมันความร้อนสูง — ปั๊ม FCC และปั๊มสุญญากาศ",
        "ซีลคอมเพรสเซอร์ — ซีลลูกสูบคอมเพรสเซอร์ก๊าซ",
        "อุปกรณ์ปิโตรเคมี — ปั๊มน้ำมันกำมะถัน เพลากวนถังปฏิกิริยา",
        "อุปกรณ์โรงไฟฟ้า — ปั๊มหมุนเวียนและแบริ่งปั๊มความร้อน",
        "อุปกรณ์โลหะวิทยา — ซีลระบบหล่อลื่นเครื่องรีด",
      ],
    },
    grades: [
      { code: "M106H", temp: "500°C", note: { zh: "锑浸渍+抗氧化处理，通用高温牌号", en: "Antimony + anti-oxidation, general high-temp grade", vi: "Antimony + chống oxy hóa, vật liệu nhiệt cao thông dụng", th: "พลวง + ป้องกันออกซิเดชัน เกรดความร้อนสูงทั่วไป" } },
      { code: "M120H", temp: "500°C", note: { zh: "高密度锑浸渍，耐压更高", en: "High-density antimony, higher pressure rating", vi: "Antimony mật độ cao, chịu áp cao hơn", th: "พลวงความหนาแน่นสูง ทนแรงดันสูงกว่า" } },
    ],
    relatedProducts: ["m7n-series", "206-series", "oil-pump-double-seal", "graphite-bushing"],
    faq: {
      zh: [
        { q: "锑浸渍石墨和碳化处理石墨有什么区别？", a: "锑浸渍(M106H)是将熔融锑金属填充石墨微孔，耐温500℃，硬度高、导热好。碳化处理(M191T)是高温石墨化处理，耐温600℃，化学惰性更高但硬度稍低。500℃以下选锑浸渍，500-600℃选碳化处理。" },
        { q: "锑浸渍石墨在含硫油品中会腐蚀吗？", a: "不会。锑浸渍牌号在含硫油品和酸性水中保持化学惰性，硫离子不侵蚀锑金属和石墨基体。长期运行无溶胀、无点蚀，已广泛用于催化裂化油泵和含硫原油输送泵。" },
        { q: "锑浸渍石墨符合食品级标准吗？", a: "不符合。锑是重金属，不适合食品接触。食品级工况应选用树脂浸渍牌号(M106K)，符合FDA标准。锑浸渍牌号专用于工业高温、高压、重载工况。" },
      ],
      en: [
        { q: "What is the difference between antimony-impregnated and carbonized graphite?", a: "Antimony impregnation (M106H) fills graphite micropores with molten antimony metal, rated 500°C, with high hardness and good thermal conductivity. Carbonization (M191T) is a high-temperature graphitization treatment, rated 600°C, with higher chemical inertness but slightly lower hardness. Below 500°C choose antimony; for 500-600°C choose carbonized." },
        { q: "Will antimony-impregnated graphite corrode in sour crude service?", a: "No. Antimony-impregnated grades remain chemically inert in sour crude and sour water. Sulfur ions do not attack the antimony metal or graphite matrix, with no swelling or pitting over long-term operation. It is widely used in FCC oil pumps and sour crude transport pumps." },
        { q: "Is antimony-impregnated graphite food-grade compliant?", a: "No. Antimony is a heavy metal unsuitable for food contact. Food-grade applications should use resin-impregnated grade (M106K) that meets FDA standards. Antimony-impregnated grades are designed for industrial high-temperature, high-pressure and heavy-duty service." },
      ],
      vi: [
        { q: "Khác nhau giữa antimony impregnation và carbonized?", a: "Antimony (M106H) lấp đầy lỗ rỗng bằng antimony nóng chảy, 500°C, cứng và dẫn nhiệt tốt. Carbonized (M191T) xử lý nhiệt cao, 600°C, trơ hóa học cao hơn nhưng cứng thấp hơn. Dưới 500°C chọn antimony, 500-600°C chọn carbonized." },
        { q: "Antimony có bị ăn mòn trong dầu lưu huỳnh?", a: "Không. Vật liệu antimony trơ hóa học trong dầu lưu huỳnh, ion lưu huỳnh không tấn công antimony và nền than chì. Dùng rộng rãi cho bơm FCC và bơm dầu lưu huỳnh." },
        { q: "Antimony có đạt chuẩn thực phẩm?", a: "Không. Antimony là kim loại nặng, không phù hợp tiếp xúc thực phẩm. Cấp thực phẩm dùng M106K (nhựa), tuân thủ FDA. Antimony chuyên dùng công nghiệp nhiệt cao áp cao." },
      ],
      th: [
        { q: "ต่างกันอย่างไรระหว่างพลวงและคาร์บอไนซ์?", a: "พลวง (M106H) เติมพลวงหลอม 500°C แข็งและนำความร้อนดี คาร์บอไนซ์ (M191T) ปฏิบัติการความร้อนสูง 600°C เฉื่อยเคมีสูงกว่าแต่แข็งน้อยกว่า" },
        { q: "พลวงถูกกัดกร่อนในน้ำมันกำมะถันไหม?", a: "ไม่ พลวงเฉื่อยทางเคมี ไอออนกำมะถันไม่ทำลายพลวงและเมทริกซ์กราไฟต์ ใช้กันในปั๊ม FCC" },
        { q: "พลวงเกรดอาหารไหม?", a: "ไม่ พลวงเป็นโลหะหนัก ใช้ M106K เรซินสำหรับอาหาร" },
      ],
    },
  },

  // 4. 浸铜石墨
  {
    slug: "copper-graphite",
    title: {
      zh: "浸铜石墨 | 高载荷轴承材料 M106D",
      en: "Copper Graphite Material | High-Load Bearing Material M106D",
      vi: "Than chì impregnation đồng | Vật liệu vòng bi tải cao M106D",
      th: "กราไฟต์อิมเพรกเนชันทองแด | วัสดุแบริ่งโหลดสูง M106D",
    },
    description: {
      zh: "浸铜石墨是将碳石墨基体在真空条件下浸入熔融铜合金，铜填充微孔形成金属网络。华豪密封M106D牌号密度1.85-1.95 g/cm³，兼具铜的导电导热性和石墨的自润滑性，适用于高载荷、高转速轴承和导电碳刷工况。",
      en: "Copper graphite is produced by vacuum-impregnating carbon graphite with molten copper alloy, forming a metallic network in the micropores. Huahao Sealing's M106D grade has density 1.85-1.95 g/cm³, combining copper's electrical and thermal conductivity with graphite's self-lubrication for high-load, high-speed bearings and electrical carbon brushes.",
      vi: "Than chì impregnation đồng được tạo bằng cách impregnation than chì carbon với hợp kim đồng nóng chảy trong chân không. Vật liệu M106D mật độ 1.85-1.95 g/cm³, kết hợp dẫn điện/nhiệt của đồng và tự bôi trơn của than chì cho vòng bi tải cao và chổi than.",
      th: "กราไฟต์ทองแดสร้างโดยอิมเพรกเนตกราไฟต์กับทองแดหลอมเหลวในสุญญากาศ เกรด M106D ความหนาแน่น 1.85-1.95 g/cm³ ผสานการนำไฟฟ้า/ความร้อนของทองแดและการหล่อลื่นเอง",
    },
    properties: [
      { label: "Density", value: "1.85 – 1.95 g/cm³" },
      { label: "Temperature", value: "-200°C ~ 400°C" },
      { label: "Compressive Strength", value: "220 – 320 MPa" },
      { label: "Shore Hardness", value: "80 – 100 HS" },
      { label: "Electrical Resistivity", value: "10 – 50 μΩ·m" },
      { label: "Friction Coefficient", value: "0.05 – 0.12" },
      { label: "Thermal Conductivity", value: "40 – 70 W/m·K" },
      { label: "Impregnant", value: "Copper (Cu) alloy" },
    ],
    advantages: {
      zh: [
        "高导电导热——铜金属网络使导电率和导热率大幅提升，适合导电和散热工况",
        "高载荷承载——铜增强基体抗压强度，适用于重载轴承和止推轴承",
        "自润滑保留——石墨层状结构在铜网络中保持自润滑特性，摩擦系数0.05-0.12",
        "耐磨损——铜填充孔隙形成坚硬耐磨表面，寿命比普通石墨长2-3倍",
        "适用高转速——导热散热快，适合5000rpm以上高转速工况",
      ],
      en: [
        "High electrical and thermal conductivity — copper metallic network significantly boosts conductivity, suitable for electrical and heat dissipation applications",
        "High load capacity — copper-reinforced matrix increases compressive strength for heavy-duty bearings and thrust bearings",
        "Retained self-lubrication — graphite layered structure maintains self-lubricating properties within the copper network, friction coefficient 0.05-0.12",
        "Wear resistance — copper-filled pores create a hard wear-resistant surface, service life 2-3× longer than standard graphite",
        "Suitable for high speeds — rapid heat dissipation suits applications above 5000 rpm",
      ],
      vi: [
        "Dẫn điện/nhiệt cao — mạng đồng nâng dẫn điện/nhiệt, phù hợp ứng dụng điện và tản nhiệt",
        "Tải cao — nền đồng tăng cường độ nén cho vòng bi tải nặng",
        "Giữ tự bôi trơn — cấu trúc lớp than chì giữ tự bôi trơn trong mạng đồng",
        "Chống mài mòn — lỗ rỗng đầy đồng tạo bề mặt cứng, tuổi thọ 2-3 lần than chì thường",
        "Tốc độ cao — tản nhiệt nhanh phù hợp trên 5000 rpm",
      ],
      th: [
        "นำไฟ/ความร้อนสูง — เครือข่ายทองแดเพิ่มการนำไฟฟ้าและความร้อน",
        "โหลดสูง — เมทริกซ์ทองแดเสริมความแข็งแรง",
        "หล่อลื่นเอง — โครงสร้างชั้นกราไฟต์คงคุณสมบัติ",
        "ทนการสึก — รูพรุนเต็มทองแดสร้างผิวแข็ง อายุการใช้งาน 2-3 เท่า",
        "ความเร็วสูง — ระบายความร้อนเร็วเหมาะบน 5000 rpm",
      ],
    },
    applications: {
      zh: [
        "高载荷轴承——重型机械、轧机、矿山设备",
        "止推轴承——水泵、压缩机轴向承载",
        "导电碳刷——电机、发电机集电环",
        "高温密封环——400℃以下高温工况",
        "压缩机活塞环——无油润滑往复密封",
      ],
      en: [
        "High-load bearings — heavy machinery, rolling mills, mining equipment",
        "Thrust bearings — axial load support for pumps and compressors",
        "Electrical carbon brushes — motor and generator slip rings",
        "High-temperature seal rings — service below 400°C",
        "Compressor piston rings — oil-free reciprocating seals",
      ],
      vi: [
        "Vòng bi tải cao — máy nặng, máy cán, thiết bị mỏ",
        "Vòng bi đỡ dọc — đỡ trục cho bơm và máy nén",
        "Chổi than — vòng trượt máy phát điện",
        "Vòng kín nhiệt cao — dưới 400°C",
        "Vòng piston máy nén — kín qua lại không dầu",
      ],
      th: [
        "แบริ่งโหลดสูง — เครื่องจักรหนัก เครื่องรีด เหมือง",
        "แบริ่งรับแรงดันขวาง — สำหรับปั๊มและคอมเพรสเซอร์",
        "แปรงถ่าน — สลิปริงมอเตอร์และเครื่องกำเนิดไฟฟ้า",
        "แหวนซีลความร้อนสูง — ต่ำกว่า 400°C",
        "แหวนลูกสูบคอมเพรสเซอร์ — ซีลกระทำซ้ำไม่มีน้ำมัน",
      ],
    },
    grades: [
      { code: "M106D", temp: "400°C", note: { zh: "铜合金浸渍，高载荷通用牌号", en: "Copper alloy impregnated, general high-load grade", vi: "Impregnation hợp kim đồng, vật liệu tải cao thông dụng", th: "อิมเพรกเนตอัลลอยทองแด เกรดโหลดสูงทั่วไป" } },
    ],
    relatedProducts: ["graphite-thrust-disc", "graphite-bearing", "g6-series"],
    faq: {
      zh: [
        { q: "浸铜石墨和浸锑石墨怎么选？", a: "浸铜(M106D)耐温400℃，导电导热性好，适合高载荷和高转速工况。浸锑(M106H)耐温500℃，硬度更高，适合高温油泵和石化工况。需要导电选铜，需要更高耐温选锑。" },
        { q: "浸铜石墨能导电吗？", a: "可以。铜金属网络填充石墨微孔后，导电率大幅提升至10-50 μΩ·m，适合电机碳刷、集电环等需要导电自润滑的工况。普通石墨电阻率较高，不适合大电流导电场合。" },
      ],
      en: [
        { q: "How to choose between copper and antimony impregnated graphite?", a: "Copper (M106D) is rated 400°C with good electrical/thermal conductivity, suitable for high-load and high-speed applications. Antimony (M106H) is rated 500°C with higher hardness, suitable for high-temperature oil pumps and petrochemical service. Choose copper for electrical conductivity, antimony for higher temperature." },
        { q: "Is copper graphite electrically conductive?", a: "Yes. After copper fills the graphite micropores, electrical resistivity drops to 10-50 μΩ·m, suitable for motor carbon brushes and slip rings requiring conductive self-lubrication. Standard graphite has higher resistivity and is unsuitable for high-current applications." },
      ],
      vi: [
        { q: "Chọn đồng hay antimony?", a: "Đồng (M106D) 400°C dẫn điện/nhiệt tốt cho tải cao và tốc độ cao. Antimony (M106H) 500°C cứng hơn cho bơm dầu nhiệt cao. Cần dẫn điện chọn đồng, cần nhiệt cao hơn chọn antimony." },
        { q: "Đồng dẫn điện được không?", a: "Được. Mạng đồng lấp đầy lỗ rỗng, điện trở 10-50 μΩ·m, phù hợp chổi than và vòng trượt. Than chì thường điện trở cao hơn không phù hợp dòng lớn." },
      ],
      th: [
        { q: "เลือกทองแดหรือพลวง?", a: "ทองแด (M106D) 400°C นำไฟ/ความร้อนดี พลวง (M106H) 500°C แข็งกว่า ต้องการไฟฟ้าเลือกทองแด ความร้อนสูงเลือกพลวง" },
        { q: "ทองแดนำไฟฟ้าได้ไหม?", a: "ได้ เครือข่ายทองแดเติมรูพรุน ความต้านทาน 10-50 μΩ·m เหมาะแปรงถ่านและสลิปริง" },
      ],
    },
  },

  // 5. 巴氏合金浸渍石墨
  {
    slug: "babbitt-impregnated-graphite",
    title: {
      zh: "巴氏合金浸渍石墨 | 高速精密密封材料",
      en: "Babbitt Impregnated Carbon Graphite | High-Speed Precision Sealing Material",
      vi: "Than chì impregnation babbitt | Vật liệu kín chính xác tốc độ cao",
      th: "กราไฟต์อิมเพรกเนชันบาบิต | วัสดุซีลความเร็วสูงความแม่นยำ",
    },
    description: {
      zh: "巴氏合金(巴氏合金)浸渍石墨是将碳石墨基体浸入熔融巴氏合金(Sn-Sb-Cu系)，形成低摩擦金属网络。华豪密封该牌号耐温200℃，摩擦系数极低，跑合性优异，适用于高转速精密机械密封和压缩机密封环。",
      en: "Babbitt-impregnated carbon graphite is produced by impregnating carbon graphite with molten Babbitt alloy (Sn-Sb-Cu system), forming a low-friction metallic network. Huahao Sealing's grade is rated 200°C with extremely low friction coefficient and excellent running-in properties for high-speed precision mechanical seals and compressor seal rings.",
      vi: "Than chì impregnation babbitt được tạo bằng cách impregnation than chì carbon với hợp kim babbitt (Sn-Sb-Cu) nóng chảy, tạo mạng kim loại ma sát thấp. Vật liệu chịu 200°C, hệ số ma sát cực thấp, chạy lồng tốt cho kín cơ khí chính xác tốc độ cao.",
      th: "กราไฟต์อิมเพรกเนชันบาบิตสร้างโดยอิมเพรกเนตกราไฟต์กับบาบิตหลอมเหลว เกรด 200°C สัมประสิทธิ์การเสียดทานต่ำมากสำหรับซีลความเร็วสูง",
    },
    properties: [
      { label: "Density", value: "1.80 – 1.90 g/cm³" },
      { label: "Temperature", value: "-200°C ~ 200°C" },
      { label: "Compressive Strength", value: "180 – 260 MPa" },
      { label: "Shore Hardness", value: "70 – 90 HS" },
      { label: "Friction Coefficient", value: "0.04 – 0.08" },
      { label: "Running-in Property", value: "Excellent" },
      { label: "Impregnant", value: "Babbitt (Sn-Sb-Cu) alloy" },
    ],
    advantages: {
      zh: [
        "极低摩擦——巴氏合金本身即为轴承合金，与石墨复合后摩擦系数低至0.04",
        "优异跑合性——巴氏合金软质特性使密封面快速跑合，适应对偶面微观不平度",
        "抗粘着磨损——巴氏合金防止金属对偶面粘着咬合，保护轴和对偶面",
        "高转速适用——低摩擦生热少，适合5000-10000rpm高转速工况",
        "嵌入性好——微小颗粒可嵌入软质合金中，减少磨粒磨损",
      ],
      en: [
        "Extremely low friction — Babbitt is itself a bearing alloy; combined with graphite, friction coefficient drops to 0.04",
        "Excellent running-in — Babbitt's soft nature allows rapid seal face running-in, accommodating mating surface micro-irregularities",
        "Anti-galling — Babbitt prevents adhesive seizure against metallic mating surfaces, protecting shafts and counterfaces",
        "High-speed suitability — low friction generates less heat, suitable for 5000-10000 rpm high-speed applications",
        "Good embeddability — small particles embed in the soft alloy, reducing abrasive wear",
      ],
      vi: [
        "Ma sát cực thấp — babbitt là hợp kim vòng bi, kết hợp than chì hệ số ma sát 0.04",
        "Chạy lồng tốt — babbitt mềm cho chạy lồng nhanh, thích ứng bề mặt không đều",
        "Chống dính — babbitt chống dính bám kim loại bảo vệ trục",
        "Tốc độ cao — ma sát thấp ít sinh nhiệt, phù hợp 5000-10000 rpm",
        "Lấp đầy tốt — hạt nhỏ lấp vào hợp kim mềm giảm mài mòn",
      ],
      th: [
        "เสียดทานต่ำมาก — บาบิตเป็นโลหะแบริ่ง ผสมกราไฟต์ค่าเสียดทาน 0.04",
        "รันอินดี — บาบิตอ่อนรันอินเร็ว ปรับผิวไม่เรียบ",
        "กันการยึดติด — บาบิตกันการยึดติดโลหะป้องกันเพลา",
        "ความเร็วสูง — เสียดทานต่ำเกิดความร้อนน้อย 5000-10000 rpm",
        "ฝังตัวดี — อนุภาคเล็กฝังในโลหะอ่อนลดการสึก",
      ],
    },
    applications: {
      zh: [
        "高速机械密封——5000-10000rpm高速泵密封环",
        "压缩机密封——离心压缩机轴密封",
        "精密仪器轴承——低摩擦精密轴承",
        "涡轮设备密封——燃气轮机辅助密封",
        "高速转子轴承——高速旋转设备支撑",
      ],
      en: [
        "High-speed mechanical seals — 5000-10000 rpm high-speed pump seal rings",
        "Compressor seals — centrifugal compressor shaft sealing",
        "Precision instrument bearings — low-friction precision bearings",
        "Turbine equipment seals — gas turbine auxiliary seals",
        "High-speed rotor bearings — high-speed rotating equipment support",
      ],
      vi: [
        "Kín cơ khí tốc cao — 5000-10000 rpm",
        "Kín máy nén — kín trục máy nén ly tâm",
        "Vòng bi thiết bị chính xác — vòng bi ma sát thấp",
        "Kín tuabin — kín phụ tuabin khí",
        "Vòng bi rôto tốc cao — hỗ trợ thiết bị quay nhanh",
      ],
      th: [
        "ซีลเชิงกลความเร็วสูง — 5000-10000 rpm",
        "ซีลคอมเพรสเซอร์ — ซีลเพลาคอมเพรสเซอร์เหวียน",
        "แบริ่งเครื่องมือความแม่นยำ — แบริ่งเสียดทานต่ำ",
        "ซีลกังหัน — ซีลกังหันก๊าซ",
        "แบริ่งโรเตอร์ความเร็วสูง",
      ],
    },
    grades: [
      { code: "M254B", temp: "200°C", note: { zh: "巴氏合金浸渍，高速低摩擦", en: "Babbitt impregnated, high-speed low-friction", vi: "Impregnation babbitt, tốc cao ma sát thấp", th: "อิมเพรกเนตบาบิต ความเร็วสูงเสียดทานต่ำ" } },
    ],
    relatedProducts: ["59u-series", "58b-series", "graphite-bearing"],
    faq: {
      zh: [
        { q: "巴氏合金浸渍石墨的最高耐温是多少？", a: "200℃。巴氏合金(Sn-Sb-Cu系)熔点较低，超过200℃会软化失去浸渍效果。高温工况(>200℃)应选用锑浸渍(M106H, 500℃)或碳化处理(M191T, 600℃)。" },
        { q: "巴氏合金浸渍石墨适合什么工况？", a: "适合高转速(5000-10000rpm)、低摩擦、需要快速跑合的精密密封工况。如高速泵密封环、离心压缩机轴封、精密仪器轴承。不适合高温高压重载工况。" },
      ],
      en: [
        { q: "What is the maximum temperature for Babbitt-impregnated graphite?", a: "200°C. Babbitt alloy (Sn-Sb-Cu system) has a low melting point and softens above 200°C, losing its impregnation effect. For high-temperature service (>200°C), select antimony-impregnated (M106H, 500°C) or carbonized (M191T, 600°C) grades." },
        { q: "What applications suit Babbitt-impregnated graphite?", a: "High-speed (5000-10000 rpm), low-friction precision sealing applications requiring rapid running-in, such as high-speed pump seal rings, centrifugal compressor shaft seals and precision instrument bearings. Not suitable for high-temperature, high-pressure or heavy-load service." },
      ],
      vi: [
        { q: "Nhiệt tối đa của babbitt?", a: "200°C. Hợp kim babbitt (Sn-Sb-Cu) nhiệt độ nóng chảy thấp, trên 200°C mềm mất tác dụng. Trên 200°C chọn antimony (M106H, 500°C) hoặc carbonized (M191T, 600°C)." },
        { q: "Babbitt phù hợp ứng dụng nào?", a: "Tốc cao (5000-10000 rpm), ma sát thấp, cần chạy lồng nhanh như kín bơm tốc cao, kín trục máy nén ly tâm, vòng bi thiết bị chính xác. Không phù hợp nhiệt cao áp cao." },
      ],
      th: [
        { q: "อุณหภูมิสูงสุดของบาบิต?", a: "200°C บาบิตจุดหลอมเหลวต่ำ หลอมเหลือบน 200°C เลือกพลวงหรือคาร์บอไนซ์" },
        { q: "บาบิตเหมาะกับอะไร?", a: "ความเร็วสูง เสียดทานต่ำ รันอินเร็ว เช่นซีลปั๊มความเร็วสูง ซีลเพลาคอมเพรสเซอร์" },
      ],
    },
  },

  // 6. 等静压石墨
  {
    slug: "isostatic-graphite",
    title: {
      zh: "等静压石墨 | 高纯度各向同性石墨材料",
      en: "Isostatic Graphite | High-Purity Isotropic Graphite Material",
      vi: "Than chì isostatic | Vật liệu than chì đẳng hướng độ tinh khiết cao",
      th: "กราไฟต์ไอโซสเตติก | วัสดุกราไฟต์ไอโซทรอปิกบริสุทธิ์สูง",
    },
    description: {
      zh: "等静压石墨是采用冷等静压(CIP)工艺成型，各向同性度高、结构均匀的高纯度石墨。华豪密封提供等静压石墨毛坯和精密加工件，纯度>99.99%，密度1.75-1.85 g/cm³，各向同性度<5%，适用于半导体、光伏、核工业等高端领域及高精度密封件。",
      en: "Isostatic graphite is a high-purity graphite formed by cold isostatic pressing (CIP), featuring high isotropy and uniform structure. Huahao Sealing supplies isostatic graphite blanks and precision-machined parts with purity above 99.99%, density 1.75-1.85 g/cm³ and isotropy below 5%, for semiconductor, photovoltaic, nuclear and high-precision sealing applications.",
      vi: "Than chì isostatic là than chì độ tinh khiết cao tạo hình bằng ép isostatic lạnh (CIP), độ đẳng hướng cao và cấu trúc đều. Huahao Sealing cung cấp phôi và chi tiết gia công chính xác độ tinh khiết trên 99.99%, mật độ 1.75-1.85 g/cm³, độ đẳng hướng dưới 5%.",
      th: "กราไฟต์ไอโซสเตติกเป็นกราไฟต์บริสุทธิ์สูงที่ขึ้นรูปด้วยการอัด isostatic เย็น ความไอโซทรอปิกสูงและโครงสร้างสม่ำเสมอ บริสุทธิ์เหนือ 99.99%",
    },
    properties: [
      { label: "Density", value: "1.75 – 1.85 g/cm³" },
      { label: "Purity", value: "> 99.99% carbon" },
      { label: "Isotropy", value: "< 5% (CTE variation)" },
      { label: "Temperature", value: "-200°C ~ 500°C (inert atmosphere 2800°C)" },
      { label: "Compressive Strength", value: "120 – 200 MPa" },
      { label: "Shore Hardness", value: "55 – 75 HS" },
      { label: "Grain Size", value: "10 – 20 μm (fine-grain)" },
      { label: "Ash Content", value: "< 100 ppm" },
    ],
    advantages: {
      zh: [
        "高纯度——碳含量>99.99%，灰分<100ppm，满足半导体和光伏行业纯度要求",
        "各向同性——等静压成型使材料各方向性能一致，各向异性<5%，精密加工不变形",
        "结构均匀——细颗粒结构(10-20μm)，截面性能一致，适合高精度密封件",
        "高可加工性——硬度适中(55-75 HS)，可加工复杂几何形状和微米级公差",
        "超高耐温——惰性气氛下可达2800℃，真空下2000℃",
      ],
      en: [
        "High purity — carbon content above 99.99%, ash below 100 ppm, meeting semiconductor and photovoltaic purity requirements",
        "Isotropy — isostatic forming ensures uniform properties in all directions, anisotropy below 5%, no deformation during precision machining",
        "Uniform structure — fine-grain structure (10-20 μm), consistent cross-sectional properties for high-precision seals",
        "High machinability — moderate hardness (55-75 HS) allows complex geometries and micron-level tolerances",
        "Ultra-high temperature — up to 2800°C in inert atmosphere, 2000°C in vacuum",
      ],
      vi: [
        "Độ tinh khiết cao — carbon trên 99.99%, tro dưới 100ppm, đạt yêu cầu bán dẫn và quang điện",
        "Đẳng hướng — tạo hình isostatic cho tính chất đều theo mọi hướng, dị hướng dưới 5%",
        "Cấu trúc đều — hạt mịn (10-20μm), tính chất mặt cắt nhất quán",
        "Gia công cao — độ cứng vừa (55-75 HS) cho hình học phức tạp",
        "Nhiệt siêu cao — khí trơ lên đến 2800°C, chân không 2000°C",
      ],
      th: [
        "บริสุทธิ์สูง — คาร์บอนเหนือ 99.99% เถ้าต่ำกว่า 100ppm",
        "ไอโซทรอปิก — ขึ้นรูป isostatic คุณสมบัติเท่ากันทุกทิศทาง",
        "โครงสร้างสม่ำเสมอ — เกร็ดละเอียด 10-20μm",
        "กะเทาะได้สูง — ความแข็งปานกลาง 55-75 HS",
        "ความร้อนสูงมาก — บรรยากาศเฉื่อย 2800°C",
      ],
    },
    applications: {
      zh: [
        "半导体制造——晶体生长炉加热器、坩埚、隔热罩",
        "光伏产业——单晶硅拉晶炉石墨部件",
        "高温真空炉——加热体、反射屏、炉床",
        "核工业——反应堆石墨反射层和慢化剂",
        "高精度密封——EDM加工密封件、精密模具",
      ],
      en: [
        "Semiconductor manufacturing — crystal growth furnace heaters, crucibles, heat shields",
        "Photovoltaic industry — monocrystalline silicon pulling furnace graphite components",
        "High-temperature vacuum furnaces — heating elements, radiation shields, furnace beds",
        "Nuclear industry — reactor graphite reflectors and moderators",
        "High-precision sealing — EDM-machined seals, precision molds",
      ],
      vi: [
        "Bán dẫn — bộ gia nhiệt lò tinh thể, cốc, chắn nhiệt",
        "Quang điện — chi tiết than chì lò kéo silicon",
        "Lò chân không nhiệt cao — bộ gia nhiệt, chắn bức xạ",
        "Hạt nhân — lớp phản xạ và chậm nơtron",
        "Kín chính xác — kín EDM, khuôn chính xác",
      ],
      th: [
        "สารกึ่งตัวนำ — เตาเพาะผลึก ได้พื้นที่กันความร้อน",
        "โซลาร์เซลล์ — ชิ้นส่วนกราไฟต์เตาดึงซิลิคอน",
        "เตาสุญญากาศความร้อนสูง — องค์ประกอบความร้อน",
        "นิวเคลียร์ — สะท้อนและชะละนิวตรอน",
        "ซีลความแม่นยำ — ซีล EDM แม่พิมพ์",
      ],
    },
    grades: [
      { code: "IG-11", temp: "2800°C", note: { zh: "通用等静压石墨，半导体级", en: "General isostatic graphite, semiconductor grade", vi: "Than chì isostatic thông dụng, cấp bán dẫn", th: "กราไฟต์ไอโซสเตติกทั่วไป เกรดสารกึ่งตัวนำ" } },
      { code: "IG-430", temp: "2800°C", note: { zh: "高密度等静压石墨，耐磨型", en: "High-density isostatic graphite, wear-resistant", vi: "Than chì isostatic mật độ cao, chống mài mòn", th: "กราไฟต์ไอโซสเตติกความหนาแน่นสูง ทนการสึก" } },
    ],
    relatedProducts: ["graphite-blanks", "press-series"],
    faq: {
      zh: [
        { q: "等静压石墨和普通模压石墨有什么区别？", a: "等静压石墨采用CIP工艺各方向均匀受压成型，各向同性度<5%，结构均匀、纯度高。普通模压石墨是单向压制，各向异性大，性能方向差异大，不适合高精度和高纯度应用。" },
        { q: "等静压石墨能用于半导体行业吗？", a: "可以。等静压石墨纯度>99.99%，灰分<100ppm，满足半导体行业对材料纯度的严格要求。广泛用于晶体生长炉加热器、坩埚、隔热罩等核心部件。" },
      ],
      en: [
        { q: "What is the difference between isostatic and standard molded graphite?", a: "Isostatic graphite is formed by CIP (cold isostatic pressing) with uniform pressure from all directions, achieving isotropy below 5% with uniform structure and high purity. Standard molded graphite is unidirectionally pressed, with high anisotropy and significant directional property variation, unsuitable for high-precision and high-purity applications." },
        { q: "Can isostatic graphite be used in the semiconductor industry?", a: "Yes. Isostatic graphite has purity above 99.99% and ash below 100 ppm, meeting the semiconductor industry's strict material purity requirements. It is widely used for crystal growth furnace heaters, crucibles and heat shields." },
      ],
      vi: [
        { q: "Khác nhau giữa isostatic và ép khuôn thường?", a: "Isostatic dùng CIP ép đều mọi hướng, đẳng hướng dưới 5%. Ép khuôn thường ép một hướng, dị hướng lớn, không phù hợp độ chính xác và tinh khiết cao." },
        { q: "Isostatic dùng cho bán dẫn được không?", a: "Được. Tinh khiết trên 99.99%, tro dưới 100ppm, đáp ứng yêu cầu bán dẫn. Dùng cho bộ gia nhiệt, cốc, chắn nhiệt." },
      ],
      th: [
        { q: "ต่างกันอย่างไร isostatic และแม่พิมพ์ปกติ?", a: "isostatic ใช้ CIP อัดเท่ากันทุกทิศทาง ไอโซทรอปิกต่ำกว่า 5% แม่พิมพ์ปกติอัดทางเดียว" },
        { q: "isostatic ใช้สารกึ่งตัวนำได้ไหม?", a: "ได้ บริสุทธิ์เหนือ 99.99% เถ้าต่ำกว่า 100ppm" },
      ],
    },
  },

  // 7. 电化石墨
  {
    slug: "electrographite",
    title: {
      zh: "电化石墨 | 高温石墨化处理材料",
      en: "Electrographite Material | High-Temperature Graphitized Carbon",
      vi: "Điện hóa than chì | Vật liệu than chì than hóa nhiệt cao",
      th: "อิเล็กโตรกราไฟต์ | วัสดุคาร์บอนกราไฟต์ไนซ์ความร้อนสูง",
    },
    description: {
      zh: "电化石墨是经过2500-3000℃高温石墨化处理的碳石墨材料，晶体结构完全转化为石墨化结构。华豪密封电化石墨牌号耐温600℃，化学惰性极高，导电性优异，用于冶金、化工、电池等高温和腐蚀性工况的密封与导电部件。",
      en: "Electrographite is carbon graphite material that has undergone high-temperature graphitization at 2500-3000°C, with crystal structure fully transformed to graphitic structure. Huahao Sealing's electrographite grades are rated 600°C with extreme chemical inertness and excellent electrical conductivity for sealing and conductive components in metallurgy, chemistry and battery applications.",
      vi: "Điện hóa than chì là vật liệu than chì carbon đã qua than hóa nhiệt cao 2500-3000°C, cấu trúc tinh thể chuyển hoàn toàn thành cấu trúc than chì. Vật liệu của Huahao chịu 600°C, trơ hóa học cực cao, dẫn điện tốt cho kín và chi tiết dẫn điện trong luyện kim, hóa chất và pin.",
      th: "อิเล็กโตรกราไฟต์เป็นคาร์บอนกราไฟต์ที่ผ่านการกราไฟต์ไนซ์ที่อุณหภูมิสูง 2500-3000°C เกรด 600°C เฉื่อยเคมีสูงและนำไฟฟ้าดี",
    },
    properties: [
      { label: "Density", value: "1.60 – 1.75 g/cm³" },
      { label: "Temperature", value: "-200°C ~ 600°C" },
      { label: "Graphitization Degree", value: "> 85%" },
      { label: "Compressive Strength", value: "100 – 180 MPa" },
      { label: "Shore Hardness", value: "45 – 65 HS" },
      { label: "Electrical Resistivity", value: "8 – 30 μΩ·m" },
      { label: "Ash Content", value: "< 0.5%" },
      { label: "Thermal Conductivity", value: "50 – 120 W/m·K" },
    ],
    advantages: {
      zh: [
        "完全石墨化——2500℃以上高温处理，晶体结构完全石墨化，石墨化度>85%",
        "极高化学惰性——石墨化后化学稳定性极高，耐强酸强碱和强氧化性介质",
        "优异导电性——石墨化后电阻率降至8-30 μΩ·m，适合导电部件",
        "超高耐温——600℃空气环境稳定，惰性气氛下可达2800℃",
        "高导热——导热率50-120 W/m·K，散热性能优异",
      ],
      en: [
        "Full graphitization — high-temperature treatment above 2500°C, crystal structure fully graphitized, graphitization degree above 85%",
        "Extreme chemical inertness — graphitization yields extreme chemical stability, resisting strong acids, alkalis and oxidizing media",
        "Excellent electrical conductivity — resistivity drops to 8-30 μΩ·m after graphitization, suitable for conductive components",
        "Ultra-high temperature — stable at 600°C in air, up to 2800°C in inert atmosphere",
        "High thermal conductivity — 50-120 W/m·K, excellent heat dissipation",
      ],
      vi: [
        "Than hóa hoàn toàn — xử lý nhiệt trên 2500°C, độ than hóa trên 85%",
        "Trơ hóa học cực cao — ổn định cực cao chống axit kiềm mạnh",
        "Dẫn điện tốt — điện trở 8-30 μΩ·m",
        "Nhiệt siêu cao — ổn định 600°C không khí, 2800°C khí trơ",
        "Dẫn nhiệt cao — 50-120 W/m·K tản nhiệt tốt",
      ],
      th: [
        "กราไฟต์ไนซ์เต็มที่ — ปฏิบัติการเหนือ 2500°C กราไฟต์ไนซ์เหนือ 85%",
        "เฉื่อยเคมีสูงมาก — เสถียรสูงต้านกรดด่าง",
        "นำไฟฟ้าดี — ความต้าน 8-30 μΩ·m",
        "ความร้อนสูงมาก — 600°C ในอากาศ 2800°C ก๊าซเฉื่อย",
        "นำความร้อนสูง — 50-120 W/m·K",
      ],
    },
    applications: {
      zh: [
        "高温密封——600℃高温炉密封环、阀门密封",
        "冶金工业——电炉电极、加热元件",
        "化工设备——强腐蚀介质密封件",
        "电池行业——电池极板导电材料",
        "导电碳刷——大电流集电环",
      ],
      en: [
        "High-temperature seals — 600°C furnace seal rings, valve seals",
        "Metallurgical industry — electric furnace electrodes, heating elements",
        "Chemical equipment — seals for highly corrosive media",
        "Battery industry — battery plate conductive materials",
        "Electrical carbon brushes — high-current slip rings",
      ],
      vi: [
        "Kín nhiệt cao — vòng kín lò 600°C, kín van",
        "Luyện kim — điện cực lò, bộ gia nhiệt",
        "Thiết bị hóa chất — kín môi trường ăn mòn mạnh",
        "Pin — vật liệu dẫn điện bản cực",
        "Chổi than — vòng trượt dòng lớn",
      ],
      th: [
        "ซีลความร้อนสูง — แหวนซีลเตา 600°C ซีลวาล์ว",
        "โลหะวิทยา — ขั้วไฟฟ้าเตาไฟฟ้า",
        "อุปกรณ์เคมี — ซีลสื่อกัดกร่อน",
        "แบตเตอรี่ — วัสดุนำไฟฟ้าแผ่นขั้ว",
        "แปรงถ่าน — สลิปริงกระแสสูง",
      ],
    },
    grades: [
      { code: "M191T", temp: "600°C", note: { zh: "碳化处理，化学惰性极高", en: "Carbonized, extreme chemical inertness", vi: "Carbonized, trơ hóa học cực cao", th: "คาร์บอไนซ์ เฉื่อยเคมีสูงมาก" } },
    ],
    relatedProducts: ["2100-series", "1527-series", "graphite-thrust-disc"],
    faq: {
      zh: [
        { q: "电化石墨和普通碳石墨有什么区别？", a: "电化石墨经过2500-3000℃高温石墨化处理，晶体结构完全石墨化，石墨化度>85%，导电性和化学惰性远高于普通碳石墨。普通碳石墨仅经过1000-1200℃焙烧，石墨化度低，性能不如电化石墨。" },
        { q: "电化石墨的耐温极限是多少？", a: "在空气环境中600℃长期稳定（配有抗氧化处理）。在惰性气氛或真空环境中可达2800℃。超过600℃空气环境需配合抗氧化浸渍处理。" },
      ],
      en: [
        { q: "What is the difference between electrographite and standard carbon graphite?", a: "Electrographite undergoes high-temperature graphitization at 2500-3000°C, with crystal structure fully graphitized (above 85%), offering much higher electrical conductivity and chemical inertness than standard carbon graphite, which is only baked at 1000-1200°C with low graphitization." },
        { q: "What is the temperature limit of electrographite?", a: "Stable at 600°C long-term in air (with anti-oxidation treatment). In inert atmosphere or vacuum, up to 2800°C. Above 600°C in air requires anti-oxidation impregnation treatment." },
      ],
      vi: [
        { q: "Khác nhau điện hóa và than chì carbon thường?", a: "Điện hóa qua than hóa 2500-3000°C, độ than hóa trên 85%, dẫn điện và trơ hóa học cao hơn nhiều. Than chì thường chỉ nung 1000-1200°C, độ than hóa thấp." },
        { q: "Nhiệt tối đa của điện hóa?", a: "Không khí 600°C ổn định (có chống oxy hóa). Khí trơ/chân không 2800°C. Trên 600°C không khí cần impregnation chống oxy hóa." },
      ],
      th: [
        { q: "ต่างกันอย่างไร?", a: "อิเล็กโตรกราไฟต์ผ่านกราไฟต์ไนซ์ 2500-3000°C กราไฟต์ไนซ์เหนือ 85% กราไฟต์ทั่วไปนึ่ง 1000-1200°C" },
        { q: "อุณหภูมิสูงสุด?", a: "อากาศ 600°C ก๊าซเฉื่อย 2800°C" },
      ],
    },
  },

  // 8. 金属浸渍石墨总览
  {
    slug: "metal-impregnated-graphite",
    title: {
      zh: "金属浸渍石墨 | 锑/铜/巴氏合金浸渍对比",
      en: "Metal Impregnated Graphite | Antimony/Copper/Babbitt Comparison",
      vi: "Than chì impregnation kim loại | So sánh antimony/đồng/babbitt",
      th: "กราไฟต์อิมเพรกเนชันโลหะ | เปรียบเทียบพลวง/ทองแด/บาบิต",
    },
    description: {
      zh: "金属浸渍石墨是通过真空/高压将熔融金属(锑、铜、巴氏合金)填充碳石墨微孔制成的高性能复合材料。华豪密封提供多种金属浸渍牌号，兼顾石墨自润滑性和金属的强度、导电导热性，覆盖200-500℃各温度段、食品级到重工业各类工况。",
      en: "Metal-impregnated graphite is a high-performance composite made by filling carbon graphite micropores with molten metal (antimony, copper, Babbitt) under vacuum/high pressure. Huahao Sealing supplies multiple metal-impregnated grades balancing graphite's self-lubrication with metal's strength and conductivity, covering 200-500°C temperature ranges from food-grade to heavy industry.",
      vi: "Than chì impregnation kim loại là vật liệu composite hiệu năng cao tạo bằng lấp đầy lỗ rỗng than chì carbon bằng kim loại nóng chảy (antimony, đồng, babbitt) trong chân không/áp suất cao. Huahao Sealing cung cấp nhiều vật liệu cân bằng tự bôi trơn và cường độ/dẫn điện kim loại, phủ 200-500°C.",
      th: "กราไฟต์อิมเพรกเนชันโลหะเป็นคอมโพสิตประสิทธิภาพสูง Huahao จัดหาหลายเกรดสมดุลการหล่อลื่นเองและความแข็งแรง/การนำไฟฟ้า คลุม 200-500°C",
    },
    properties: [
      { label: "Antimony (M106H)", value: "500°C, 85-105 HS, <1.5% porosity" },
      { label: "Copper (M106D)", value: "400°C, 80-100 HS, high conductivity" },
      { label: "Babbitt (M254B)", value: "200°C, 70-90 HS, lowest friction" },
      { label: "Density Range", value: "1.80 – 1.95 g/cm³" },
      { label: "Friction Coefficient", value: "0.04 – 0.15" },
      { label: "Pressure Rating", value: "up to 25 MPa" },
    ],
    advantages: {
      zh: [
        "强度倍增——金属网络使抗压强度提升至180-350 MPa，是未浸渍石墨的2倍",
        "孔隙率极低——浸渍后孔隙率<2%，介质渗透率极低，适合高压密封",
        "导热散热——金属网络导热率远高于纯石墨，防止热斑和热裂",
        "按工况选型——锑(高温)、铜(导电/高载)、巴氏合金(高速低摩擦)各有所长",
        "耐磨性提升——金属填充孔隙形成坚硬耐磨表面，寿命提升2-3倍",
      ],
      en: [
        "Doubled strength — metallic network raises compressive strength to 180-350 MPa, 2× unimpregnated graphite",
        "Extremely low porosity — post-impregnation porosity below 2%, very low media permeability for high-pressure sealing",
        "Thermal dissipation — metallic network thermal conductivity far exceeds pure graphite, preventing hot spots and thermal cracking",
        "Grade selection by duty — antimony (high-temp), copper (conductive/high-load), Babbitt (high-speed/low-friction) each excel in their niche",
        "Improved wear resistance — metal-filled pores create a hard wear surface, 2-3× longer life",
      ],
      vi: [
        "Cường độ gấp đôi — mạng kim loại nâng độ nén 180-350 MPa, gấp 2 chưa impregnation",
        "Độ rỗng cực thấp — sau impregnation dưới 2%, thấm thấp cho kín áp cao",
        "Tản nhiệt — mạng kim loại dẫn nhiệt cao hơn than chì thuần, chống điểm nóng",
        "Chọn theo ứng dụng — antimony (nhiệt cao), đồng (dẫn điện/tải cao), babbitt (tốc cao/ma sát thấp)",
        "Chống mài mòn — lỗ đầy kim loại tạo bề mặt cứng, tuổi thọ 2-3 lần",
      ],
      th: [
        "แข็งแรงเป็นสองเท่า — เครือข่ายโลหะเพิ่มความต้านทานการอัด 180-350 MPa",
        "รูพรุนต่ำมาก — หลังอิมเพรกเนชันต่ำกว่า 2%",
        "ระบายความร้อน — เครือข่ายโลหะนำความร้อนสูงกว่า",
        "เลือกตามการใช้งาน — พลวง ทองแด บาบิต",
        "ทนการสึก — รูเต็มโลหะสร้างผิวแข็ง 2-3 เท่า",
      ],
    },
    applications: {
      zh: [
        "锑浸渍——500℃高温油泵、石化设备密封",
        "铜浸渍——高载荷轴承、导电碳刷、高转速工况",
        "巴氏合金——高速精密密封、压缩机轴封",
        "高压密封——孔隙率<2%适用25MPa高压工况",
        "重工业——冶金、矿山、电力设备密封",
      ],
      en: [
        "Antimony — 500°C high-temp oil pumps, petrochemical seals",
        "Copper — high-load bearings, electrical brushes, high-speed service",
        "Babbitt — high-speed precision seals, compressor shaft seals",
        "High-pressure seals — porosity below 2% for 25 MPa service",
        "Heavy industry — metallurgy, mining, power equipment seals",
      ],
      vi: [
        "Antimony — bơm dầu 500°C, kín hóa chất",
        "Đồng — vòng bi tải cao, chổi than, tốc cao",
        "Babbitt — kín chính xác tốc cao, kín trục máy nén",
        "Kín áp cao — độ rỗng dưới 2% cho 25 MPa",
        "Công nghiệp nặng — luyện kim, mỏ, điện",
      ],
      th: [
        "พลวง — ปั๊มน้ำมัน 500°C ซีลปิโตรเคมี",
        "ทองแด — แบริ่งโหลดสูง แปรงถ่าน",
        "บาบิต — ซีลความเร็วสูง ซีลเพลาคอมเพรสเซอร์",
        "ซีลแรงดันสูง — รูพรุนต่ำกว่า 2% สำหรับ 25 MPa",
        "อุตสาหกรรมหนัก — โลหะวิทยา เหมือง ไฟฟ้า",
      ],
    },
    grades: [
      { code: "M106H (Sb)", temp: "500°C", note: { zh: "锑浸渍，高温重载", en: "Antimony, high-temp heavy-duty", vi: "Antimony, nhiệt cao tải nặng", th: "พลวง ความร้อนสูงโหลดหนัก" } },
      { code: "M106D (Cu)", temp: "400°C", note: { zh: "铜浸渍，导电高载", en: "Copper, conductive high-load", vi: "Đồng, dẫn điện tải cao", th: "ทองแด นำไฟฟ้าโหลดสูง" } },
      { code: "M254B (Babbitt)", temp: "200°C", note: { zh: "巴氏合金，高速低摩擦", en: "Babbitt, high-speed low-friction", vi: "Babbitt, tốc cao ma sát thấp", th: "บาบิต ความเร็วสูงเสียดทานต่ำ" } },
    ],
    relatedProducts: ["m7n-series", "graphite-bearing", "graphite-thrust-disc", "oil-pump-double-seal"],
    faq: {
      zh: [
        { q: "三种金属浸渍怎么选？", a: "按温度和工况选：500℃高温选锑(M106H)，400℃以下需导电/高载选铜(M106D)，200℃以下高速精密选巴氏合金(M254B)。锑硬度最高，铜导电最好，巴氏合金摩擦最低。" },
        { q: "金属浸渍石墨能用在水泵里吗？", a: "可以。锑浸渍和铜浸渍牌号在水中化学稳定，适合水泵密封。但不适合食品级饮用水——金属离子可能溶出，饮用水应选树脂浸渍(M106K)。" },
      ],
      en: [
        { q: "How to choose among the three metal impregnations?", a: "By temperature and duty: 500°C high-temp choose antimony (M106H); below 400°C needing conductivity/high-load choose copper (M106D); below 200°C high-speed precision choose Babbitt (M254B). Antimony has highest hardness, copper best conductivity, Babbitt lowest friction." },
        { q: "Can metal-impregnated graphite be used in water pumps?", a: "Yes. Antimony and copper-impregnated grades are chemically stable in water for pump seals. However, they are not suitable for food-grade drinking water — metal ions may leach out. Drinking water should use resin-impregnated grade (M106K)." },
      ],
      vi: [
        { q: "Chọn 3 loại kim loại nào?", a: "Theo nhiệt: 500°C chọn antimony (M106H), dưới 400°C cần dẫn điện/tải cao chọn đồng (M106D), dưới 200°C tốc cao chọn babbitt (M254B). Antimony cứng nhất, đồng dẫn điện tốt nhất, babbitt ma sát thấp nhất." },
        { q: "Dùng trong bơm nước được không?", a: "Được. Antimony và đồng ổn định trong nước. Nhưng không phù hợp nước uống — ion kim loại có thể rỉ ra, nước uống dùng M106K nhựa." },
      ],
      th: [
        { q: "เลือก 3 โลหะอย่างไร?", a: "ตามอุณหภูมิ 500°C พลวง 400°C ทองแด 200°C บาบิต" },
        { q: "ใช้ในปั๊มน้ำได้ไหม?", a: "ได้ พลวงและทองแดเสถียรในน้ำ แต่ไม่เหมาะน้ำดื่ม ใช้ M106K เรซิน" },
      ],
    },
  },
]

export function getMaterialBySlug(slug: string): MaterialLanding | undefined {
  return materialLandings.find((m) => m.slug === slug)
}
