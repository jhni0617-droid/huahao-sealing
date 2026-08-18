/**
 * 材料对比型内容数据（SEO/GEO 用）
 *
 * 每篇对比文章包含 4 语言（zh/en/vi/th）：标题、描述、引言、对比表、结论、FAQ。
 * 对比表 values 为语言中立的字符串（数字+单位 或 符号），
 * 本地化语义由 feature 标签承载，确保表格在所有语言下均可读。
 */

export interface ComparisonData {
  slug: string
  title: { zh: string; en: string; vi?: string; th?: string }
  description: { zh: string; en: string; vi?: string; th?: string }
  intro: { zh: string; en: string; vi?: string; th?: string }
  /** 表头列名；第一列为对比项标签，其后为各材料/选项列 */
  tableHeaders: { zh: string[]; en: string[]; vi?: string[]; th?: string[] }
  /** 每行：feature 为本地化行名，values 为各列值（语言中立） */
  rows: {
    feature: { zh: string; en: string; vi?: string; th?: string }
    values: string[]
  }[]
  conclusion: { zh: string; en: string; vi?: string; th?: string }
  faq: {
    zh: { q: string; a: string }[]
    en: { q: string; a: string }[]
    vi?: { q: string; a: string }[]
    th?: { q: string; a: string }[]
  }
}

export const comparisons: ComparisonData[] = [
  {
    slug: "antimony-vs-resin-impregnated-graphite",
    title: {
      zh: "锑浸渍石墨 vs 树脂浸渍石墨：高温密封选材对比",
      en: "Antimony-Impregnated vs Resin-Impregnated Graphite: High-Temperature Seal Material Comparison",
      vi: "Than chì ngâm Antimon vs Than chì ngầm Nhựa: So sánh vật liệu kín nhiệt độ cao",
      th: "กราไฟต์อิมพรีเกเตดพลวง vs กราไฟต์อิมพรีเกเตดเรซิน: เปรียบเทียบวัสดุซีลอุณหภูมิสูง"
    },
    description: {
      zh: "锑浸渍石墨耐温 500℃，树脂浸渍石墨耐温 220℃。本文对比两者在温度、强度、导热、耐腐蚀与成本上的差异，帮助高温泵密封与轴承选材。",
      en: "Antimony-impregnated graphite withstands 500°C; resin-impregnated graphite is limited to 220°C. This article compares temperature, strength, thermal conductivity, corrosion resistance, and cost to guide high-temperature pump seal and bearing selection.",
      vi: "Than chì ngâm antimon chịu được 500°C; than chì ngầm nhựa giới hạn ở 220°C. Bài viết so sánh nhiệt độ, cường độ, dẫn nhiệt, chống ăn mòn và chi phí để hướng dẫn chọn vật liệu kín và vòng bi bơm nhiệt độ cao.",
      th: "กราไฟต์อิมพรีเกเตดพลวงทนอุณหภูมิ 500°C ส่วนกราไฟต์อิมพรีเกเตดเรซินจำกัดที่ 220°C บทความนี้เปรียบเทียบอุณหภูมิ ความแข็งแรง การนำความร้อน การต้านการกัดกร่อน และต้นทุน เพื่อแนะนำการเลือกวัสดุซีลและแบริ่งปั๊มอุณหภูมิสูง"
    },
    intro: {
      zh: "碳石墨基体通过浸渍工艺填充孔隙以提升密度与强度。锑浸渍与树脂浸渍是两条主流工艺路线，其耐温上限相差超过一倍，直接决定了适用工况边界。选错牌号会导致高温下浸渍剂碳化、密封面失压泄漏。本对比从 8 项关键参数给出量化差异，并给出选型结论。",
      en: "Carbon graphite substrates are impregnated to fill porosity and boost density and strength. Antimony and resin impregnation are the two mainstream routes, with a more than twofold difference in temperature ceiling that defines the operating envelope. Choosing the wrong grade causes impregnant carbonization and seal-face pressure loss at high temperature. This comparison quantifies 8 key parameters and gives a selection conclusion.",
      vi: "Bề mặt than chì carbon được ngấm để lấp đầy lỗ rỗng và tăng mật độ, cường độ. Ngâm antimon và ngầm nhựa là hai phương pháp chính, với chênh lệch giới hạn nhiệt độ hơn gấp đôi, quyết định phạm vi hoạt động. Chọn sai mác gây cacbon hóa chất ngấm và mất áp bề mặt kín ở nhiệt độ cao. Bài so sánh định lượng 8 thông số chính và đưa ra kết luận chọn vật liệu.",
      th: "พื้นฐานกราไฟต์คาร์บอนถูกอิมพรีเกตเพื่ออัดรูพรุนและเพิ่มความหนาแน่นและความแข็งแรง การอิมพรีเกตพลวงและเรซินเป็นสองวิธีหลัก โดยมีขีดจำกัดอุณหภูมิต่างกันมากกว่าสองเท่าซึ่งกำหนดขอบเขตการทำงาน การเลือกเกรดผิดทำให้สารอิมพรีเกตคาร์บอไนซ์และแรงดันผิวซีลสูญเสียที่อุณหภูมิสูง การเปรียบเทียบนี้ปริมาณ 8 พารามิเตอร์หลักและให้ข้อสรุปการเลือก"
    },
    tableHeaders: {
      zh: ["对比项", "锑浸渍石墨（M106H-Sb）", "树脂浸渍石墨（M106H）"],
      en: ["Property", "Antimony-Impregnated (M106H-Sb)", "Resin-Impregnated (M106H)"],
      vi: ["Thông số", "Than chì ngâm Antimon (M106H-Sb)", "Than chì ngầm Nhựa (M106H)"],
      th: ["พารามิเตอร์", "กราไฟต์พลวง (M106H-Sb)", "กราไฟต์เรซิน (M106H)"]
    },
    rows: [
      { feature: { zh: "最高使用温度", en: "Max service temperature", vi: "Nhiệt độ làm việc tối đa", th: "อุณหภูมิใช้งานสูงสุด" }, values: ["500°C", "220°C"] },
      { feature: { zh: "抗压强度", en: "Compressive strength", vi: "Cường độ nén", th: "กำลังอัด" }, values: ["120 MPa", "92 MPa"] },
      { feature: { zh: "抗折强度", en: "Flexural strength", vi: "Cường độ uốn", th: "กำลังดัด" }, values: ["45 MPa", "38 MPa"] },
      { feature: { zh: "导热系数", en: "Thermal conductivity", vi: "Hệ số dẫn nhiệt", th: "สัมประสิทธิ์การนำความร้อน" }, values: ["70 W/(m·K)", "45 W/(m·K)"] },
      { feature: { zh: "肖氏硬度", en: "Shore hardness", vi: "Độ cứng Shore", th: "ความแข็งโชร์" }, values: ["82 HS", "78 HS"] },
      { feature: { zh: "耐蒸汽 / 导热油", en: "Steam / thermal oil resistance", vi: "Chịu hơi nước / dầu dẫn nhiệt", th: "ทนไอน้ำ / น้ำมันถ่ายเทความร้อน" }, values: ["✓", "◐ (≤220°C)"] },
      { feature: { zh: "耐强酸强碱", en: "Strong acid / alkali resistance", vi: "Chịu axit / kiềm mạnh", th: "ทนกรด / ด่างแรง" }, values: ["◐", "✓"] },
      { feature: { zh: "相对成本", en: "Relative cost", vi: "Chi phí tương đối", th: "ต้นทุนสัมพัทธ์" }, values: ["×1.8", "×1.0"] }
    ],
    conclusion: {
      zh: "当工况温度高于 220℃（如导热油泵、熔盐泵、高温烘箱轴、蒸汽阀）时必须选锑浸渍石墨（M106H-Sb），其 500℃ 耐温上限与更高导热系数可避免浸渍剂碳化失效。当介质为常温强酸强碱且温度低于 220℃ 时，树脂浸渍石墨（M106H）耐腐蚀性更好且成本更低。两者均为自润滑材料，无需外加润滑脂，对轴有保护作用。",
      en: "When operating temperature exceeds 220°C (thermal oil pumps, molten salt pumps, high-temp oven shafts, steam valves), antimony-impregnated graphite (M106H-Sb) is mandatory — its 500°C ceiling and higher thermal conductivity prevent impregnant carbonization. For ambient strong acid/alkali media below 220°C, resin-impregnated graphite (M106H) offers better corrosion resistance at lower cost. Both are self-lubricating, grease-free, and protect the shaft.",
      vi: "Khi nhiệt độ vận hành vượt 220°C (bơm dầu dẫn nhiệt, bơm muối nóng chảy, trục lò nung nhiệt độ cao, van hơi), than chì ngâm antimon (M106H-Sb) là bắt buộc — giới hạn 500°C và dẫn nhiệt cao hơn ngăn ngấm cacbon hóa. Cho môi trường axit/kiềm mạnh ở nhiệt độ dưới 220°C, than chì ngầm nhựa (M106H) chống ăn mòn tốt hơn với chi phí thấp hơn. Cả hai đều tự bôi trơn, không cần mỡ và bảo vệ trục.",
      th: "เมื่ออุณหภูมิการทำงานเกิน 220°C (ปั๊มน้ำมันถ่ายเทความร้อน ปั๊มเกลือหลอมเหลว เพลาเตาอบอุณหภูมิสูง วาล์วไอน้ำ) กราไฟต์พลวง (M106H-Sb) เป็นสิ่งจำเป็น — ขีดจำกัด 500°C และการนำความร้อนที่สูงกว่าป้องกันสารอิมพรีเกตคาร์บอไนซ์ สำหรับสื่อกรด/ด่างแรงที่อุณหภูมิต่ำกว่า 220°C กราไฟต์เรซิน (M106H) ต้านการกัดกร่อนได้ดีกว่าในต้นทุนที่ต่ำกว่า ทั้งสองชนิดเป็นแบบหล่อลื่นตัวเอง ไม่ต้องใช้จาระบีและปกป้องเพลา"
    },
    faq: {
      zh: [
        { q: "锑浸渍石墨为什么能耐 500℃？", a: "锑的熔点为 630.6℃，远高于树脂的碳化温度（约 250–300℃）。锑金属浸入石墨孔隙后形成耐高温骨架，在 500℃ 长期运行不分解、不挥发，因此耐温上限是树脂浸渍的两倍以上。" },
        { q: "树脂浸渍石墨可以用在蒸汽工况吗？", a: "仅限于 220℃ 以下的低压饱和蒸汽。过热蒸汽或温度超过 220℃ 时树脂会逐步碳化变脆、密封面失压泄漏，此时应改用锑浸渍石墨。" },
        { q: "两种浸渍石墨哪个更耐腐蚀？", a: "在常温强酸、强碱介质中树脂浸渍石墨更耐腐蚀；锑浸渍石墨因含金属锑，在强氧化性酸（如浓硝酸）中耐蚀性略逊，但在中高温水/油工况下更稳定。" },
        { q: "锑浸渍石墨符合食品级要求吗？", a: "不符合。锑为重金属，不可用于食品、制药等卫生级工况。食品级应选 M106K（FDA 认证树脂浸渍）牌号。" }
      ],
      en: [
        { q: "Why can antimony-impregnated graphite withstand 500°C?", a: "Antimony melts at 630.6°C, far above the carbonization point of resin (~250–300°C). The antimony metal fills graphite pores to form a high-temperature skeleton that does not decompose or volatilize during continuous 500°C operation, so its temperature ceiling is more than double that of resin impregnation." },
        { q: "Can resin-impregnated graphite be used in steam service?", a: "Only in low-pressure saturated steam below 220°C. In superheated steam or above 220°C the resin gradually carbonizes, becomes brittle, and the seal face loses pressure and leaks. Switch to antimony-impregnated graphite in such cases." },
        { q: "Which impregnation is more corrosion-resistant?", a: "Resin-impregnated graphite is more corrosion-resistant in ambient strong acids and alkalis. Antimony-impregnated graphite, containing metallic antimony, is slightly less resistant in strong oxidizing acids (e.g. concentrated nitric acid) but more stable in medium-to-high temperature water/oil service." },
        { q: "Is antimony-impregnated graphite food-grade compliant?", a: "No. Antimony is a heavy metal and must not be used in food or pharmaceutical hygienic service. For food-grade applications choose the M106K (FDA-certified resin-impregnated) grade." }
      ],
      vi: [
        { q: "Tại sao than chì ngâm antimon chịu được 500°C?", a: "Antimon nóng chảy ở 630.6°C, cao hơn nhiều điểm cacbon hóa của nhựa (~250–300°C). Kim loại antimon lấp đầy lỗ rỗng than chì tạo khung chịu nhiệt, không phân hủy hay bay hơi ở 500°C liên tục, nên giới hạn nhiệt cao hơn gấp đôi nhựa ngấm." },
        { q: "Than chì ngầm nhựa có dùng được trong môi trường hơi nước không?", a: "Chỉ dùng cho hơi bão hòa áp thấp dưới 220°C. Hơi quá nhiệt hoặc trên 220°C làm nhựa dần cacbon hóa, giòn, bề mặt kín mất áp và rò rỉ. Khi đó nên chuyển sang than chì ngâm antimon." },
        { q: "Loại ngấm nào chống ăn mòn tốt hơn?", a: "Than chì ngầm nhựa chống ăn mòn tốt hơn trong axit/kiềm mạnh ở nhiệt độ thường. Than chì ngâm antimon chứa kim loại antimon nên kém hơn chút ít trong axit oxy hóa mạnh (như axit nitric đặc) nhưng ổn định hơn trong nước/dầu nhiệt độ trung bình đến cao." },
        { q: "Than chì ngâm antimon có đạt tiêu chuẩn thực phẩm không?", a: "Không. Antimon là kim loại nặng, không được dùng trong thực phẩm/dược phẩm. Ứng dụng thực phẩm nên chọn mác M106K (nhựa ngấm chứng nhận FDA)." }
      ],
      th: [
        { q: "ทำไมกราไฟต์พลวงจึงทน 500°C ได้?", a: "พลวงหลอมเหลวที่ 630.6°C สูงกว่าจุดคาร์บอไนเซชันของเรซิน (~250–300°C) มาก โลหะพลวงอัดรูพรุนกราไฟต์เป็นโครงรับความร้อนที่ไม่สลายตัวหรือระเหยที่ 500°C ต่อเนื่อง จึงทนอุณหภูมิได้สูงกว่าเรซินมากกว่าสองเท่า" },
        { q: "กราไฟต์เรซินใช้กับไอน้ำได้ไหม?", a: "ใช้ได้เฉพาะไอน้ำอิ่มตัวแรงดันต่ำใต้ 220°C เท่านั้น ไอน้ำร้อนยวดยิ่งหรือเกิน 220°C จะทำให้เรซินค่อย ๆ คาร์บอไนซ์ เปราะ ผิวซีลสูญแรงดันและรั่ว ควรเปลี่ยนเป็นกราไฟต์พลวง" },
        { q: "การอิมพรีเกตแบบใดต้านการกัดกร่อนได้ดีกว่า?", a: "กราไฟต์เรซินต้านการกัดกร่อนได้ดีกว่าในกรด/ด่างแรงที่อุณหภูมิห้อง กราไฟต์พลวงมีโลหะพลวงจึงต้านกรดออกซิไดซ์แรง (เช่น กรดไนตริกเข้มข้น) ได้น้อยกว่าเล็กน้อย แต่คงตัวกว่าในน้ำ/น้ำมันอุณหภูมิกลางถึงสูง" },
        { q: "กราไฟต์พลวงได้มาตรฐานอาหารหรือไม่?", a: "ไม่ พลวงเป็นโลหะหนัก ห้ามใช้ในอาหาร/ยา สำหรับอาหารควรเลือกเกรด M106K (เรซินอิมพรีเกตที่ได้รับการรับรอง FDA)" }
      ]
    }
  },
  {
    slug: "carbon-graphite-vs-metal-alloy-seals",
    title: {
      zh: "碳石墨 vs 金属合金密封：自润滑与耐磨寿命对比",
      en: "Carbon Graphite vs Metal Alloy Seals: Self-Lubrication and Wear Life Comparison",
      vi: "Than chì Carbon vs Kín Hợp kim Kim loại: So sánh tự bôi trơn và tuổi thọ mài mòn",
      th: "คาร์บอนกราไฟต์ vs ซีลโลหะผสม: เปรียบเทียบการหล่อลื่นตัวเองและอายุการสึกหรอ"
    },
    description: {
      zh: "碳石墨自润滑无需油脂，金属合金密封需外润滑。本文对比两者在摩擦系数、耐磨寿命、耐温、耐腐蚀与维护成本上的差异，给出泵与压缩机选材建议。",
      en: "Carbon graphite is self-lubricating and grease-free; metal alloy seals require external lubrication. This article compares friction coefficient, wear life, temperature and corrosion resistance, and maintenance cost to guide pump and compressor material selection.",
      vi: "Than chì carbon tự bôi trơn không cần mỡ; kín hợp kim kim loại cần bôi trơn ngoài. Bài viết so sánh hệ số ma sát, tuổi thọ mài mòn, chịu nhiệt, chống ăn mòn và chi phí bảo trì để hướng dẫn chọn vật liệu bơm và máy nén.",
      th: "คาร์บอนกราไฟต์หล่อลื่นตัวเองไม่ต้องใช้จาระบี; ซีลโลหะผสมต้องการการหล่อลื่นภายนอก บทความเปรียบเทียบสัมประสิทธิ์แรงเสียดทาน อายุการสึกหรอ การทนความร้อนและการกัดกร่อน และต้นทุนบำรุงรักษา เพื่อแนะนำการเลือกวัสดุปั๊มและคอมเพรสเซอร์"
    },
    intro: {
      zh: "金属合金（青铜、巴氏合金、司太立）长期作为泵与压缩机的轴承/密封材料，但依赖外部润滑，高温下润滑膜破裂即发生粘着磨损与抱死。碳石墨凭借层状结构的自润滑特性，干摩擦下仍可稳定运行，且化学惰性耐腐蚀。本对比从 8 项参数量化两者的适用边界。",
      en: "Metal alloys (bronze, babbitt, Stellite) have long served as pump and compressor bearing/seal materials, but they depend on external lubrication; once the lubricant film breaks down at high temperature, adhesive wear and seizure follow. Carbon graphite layered structure provides self-lubrication, running stably even under dry friction, with chemical inertness against corrosion. This comparison quantifies the operating envelope across 8 parameters.",
      vi: "Hợp kim kim loại (đồng thanh, babbitt, Stellite) lâu nay là vật liệu vòng bi/kín cho bơm và máy nén, nhưng phụ thuộc bôi trơn ngoài; khi màng dầu vỡ ở nhiệt độ cao sẽ mài dính và kẹt. Cấu trúc lớp của than chì carbon cho phép tự bôi trơn, chạy ổn định ngay khi ma sát khô, cùng tính trơ hóa học chống ăn mòn. Bài so sánh định lượng phạm vi áp dụng qua 8 thông số.",
      th: "โลหะผสม (บรอนซ์ แบบบิต สเตลไลต์) ใช้เป็นวัสดุแบริ่ง/ซีลปั๊มและคอมเพรสเซอร์มานาน แต่ต้องพึ่งการหล่อลื่นภายนอก เมื่อฟิล์มหล่อลื่นแตกที่อุณหภูมิสูงจะเกิดการสึกแบบยึดติดและการกิน โครงสร้างเป็นชั้นของคาร์บอนกราไฟต์ให้การหล่อลื่นตัวเอง ทำงานได้คงที่แม้แรงเสียดทานแห้ง พร้อมความเฉื่อยทางเคมีต้านการกัดกร่อน การเปรียบเทียบนี้ปริมาณขอบเขตการใช้งานผ่าน 8 พารามิเตอร์"
    },
    tableHeaders: {
      zh: ["对比项", "碳石墨密封", "金属合金密封"],
      en: ["Property", "Carbon Graphite Seal", "Metal Alloy Seal"],
      vi: ["Thông số", "Kín Than chì Carbon", "Kín Hợp kim Kim loại"],
      th: ["พารามิเตอร์", "ซีลคาร์บอนกราไฟต์", "ซีลโลหะผสม"]
    },
    rows: [
      { feature: { zh: "自润滑（无需油脂）", en: "Self-lubricating (grease-free)", vi: "Tự bôi trơn (không mỡ)", th: "หล่อลื่นตัวเอง (ไม่มีจาระบี)" }, values: ["✓", "✗"] },
      { feature: { zh: "干摩擦系数", en: "Dry friction coefficient", vi: "Hệ số ma sát khô", th: "สัมประสิทธิ์แรงเสียดทานแห้ง" }, values: ["0.04–0.08", "0.20–0.40"] },
      { feature: { zh: "最高耐温（无润滑）", en: "Max temperature (unlubricated)", vi: "Nhiệt độ tối đa (không bôi trơn)", th: "อุณหภูมิสูงสุด (ไม่หล่อลื่น)" }, values: ["500°C", "150°C"] },
      { feature: { zh: "耐酸碱腐蚀（pH 0–14）", en: "Acid/alkali corrosion resistance (pH 0–14)", vi: "Chịu ăn mòn axit/kiềm (pH 0–14)", th: "ทนการกัดกร่อนกรด/ด่าง (pH 0–14)" }, values: ["✓", "✗"] },
      { feature: { zh: "对轴的磨损", en: "Wear on shaft", vi: "Mài trục", th: "การสึกของเพลา" }, values: ["极低（保护轴）", "高（需淬火轴）"] },
      { feature: { zh: "相对寿命（干/半干工况）", en: "Relative life (dry/semi-dry service)", vi: "Tuổi thọ tương đối (khô/bán khô)", th: "อายุสัมพัทธ์ (แห้ง/กึ่งแห้ง)" }, values: ["×3–6", "×1.0"] },
      { feature: { zh: "抗冲击 / 承载", en: "Impact resistance / load capacity", vi: "Chịu va đập / tải trọng", th: "ทนแรงกระแทก / รับน้ำหนัก" }, values: ["◐ (中)", "✓ (高)"] },
      { feature: { zh: "维护需求", en: "Maintenance requirement", vi: "Yêu cầu bảo trì", th: "ความต้องการบำรุงรักษา" }, values: ["免维护", "定期补脂/换油"] }
    ],
    conclusion: {
      zh: "在干摩擦、半干摩擦、高温或腐蚀工况下（高温烘箱、熔盐泵、化工反应釜、食品机械、海水泵），碳石墨密封凭借自润滑与化学惰性，寿命是金属合金的 3–6 倍且免维护，并保护轴颈免于磨损。仅在高冲击、重载且能保证连续润滑的场合（如液压缸衬套、低速重载滑动轴承），金属合金因承载与抗冲击优势仍不可替代。",
      en: "In dry, semi-dry, high-temperature, or corrosive service (high-temp ovens, molten salt pumps, chemical reactors, food machinery, seawater pumps), carbon graphite seals last 3–6× longer than metal alloys and are maintenance-free, while protecting the shaft journal from wear. Only in high-impact, heavy-load applications with guaranteed continuous lubrication (hydraulic cylinder bushings, low-speed heavy-duty journal bearings) do metal alloys remain irreplaceable thanks to their load and impact capacity.",
      vi: "Trong điều kiện ma sát khô, bán khô, nhiệt độ cao hoặc ăn mòn (lò nung nóng, bơm muối nóng chảy, bồn phản ứng hóa chất, máy thực phẩm, bơm nước biển), kín than chì carbon có tuổi thọ gấp 3–6 lần hợp kim kim loại, không cần bảo trì và bảo vệ cổ trục khỏi mài mòn. Chỉ trong ứng dụng va đập cao, tải nặng và có bôi trơn liên tục (bạc xi lanh thủy lực, vòng bi trượt tốc độ thấp tải nặng), hợp kim kim loại vẫn không thể thay thế nhờ khả năng chịu tải và va đập.",
      th: "ในสภาพแรงเสียดทานแห้ง กึ่งแห้ง อุณหภูมิสูง หรือกัดกร่อน (เตาอบอุณหภูมิสูง ปั๊มเกลือหลอมเหลว เครื่องปฏิกรณ์เคมี เครื่องจักรอาหาร ปั๊มน้ำทะเล) ซีลคาร์บอนกราไฟต์มีอายุยืนกว่าโลหะผสม 3–6 เท่า ไม่ต้องบำรุงรักษา และปกป้องเพลาจากการสึกหรอ มีเพียงในงานกระแทกสูง รับน้ำหนักมากและมีการหล่อลื่นต่อเนื่อง (บุชลูกสูบไฮดรอลิก แบริ่งเพลารับน้ำหนักความเร็วต่ำ) ที่โลหะผสมยังไม่สามารถถูกแทนที่ได้ด้วยความสามารถรับน้ำหนักและกระแทก"
    },
    faq: {
      zh: [
        { q: "碳石墨为什么能自润滑？", a: "碳石墨为层状六方晶体结构，层间结合力弱（范德华力），受剪切力时层间易滑动并转移成膜，因此干摩擦系数仅 0.04–0.08，无需外加润滑脂。" },
        { q: "金属合金密封在什么工况下仍优于碳石墨？", a: "高冲击、重载、低转速且能保证连续润滑的工况（如液压缸衬套、轧机轴承）。金属合金抗冲击与承载能力高于碳石墨，碳石墨在重冲击下可能碎裂。" },
        { q: "碳石墨密封会磨损轴吗？", a: "不会，反而保护轴。碳石墨硬度低于金属轴，磨损优先发生在石墨件上（牺牲磨损件），轴颈几乎无磨损，仅需更换石墨环即可恢复精度。" },
        { q: "干运行工况下碳石墨寿命能延长多少？", a: "在干摩擦或半干摩擦工况下，碳石墨寿命通常是金属合金的 3–6 倍。因金属合金在缺油时发生粘着磨损与抱死，而碳石墨保持稳定自润滑。" }
      ],
      en: [
        { q: "Why is carbon graphite self-lubricating?", a: "Carbon graphite has a layered hexagonal crystal structure with weak interlayer bonding (van der Waals forces). Under shear, layers slide easily and transfer to form a lubricating film, giving a dry friction coefficient of just 0.04–0.08 without any grease." },
        { q: "When are metal alloy seals still superior to carbon graphite?", a: "In high-impact, heavy-load, low-speed applications with guaranteed continuous lubrication (e.g. hydraulic cylinder bushings, rolling-mill bearings). Metal alloys have higher impact and load capacity; carbon graphite may fracture under heavy impact." },
        { q: "Does a carbon graphite seal wear the shaft?", a: "No — it protects the shaft. Carbon graphite is softer than the metal shaft, so wear occurs preferentially on the graphite (sacrificial wear part), leaving the shaft journal virtually unworn. Only the graphite ring needs replacement to restore precision." },
        { q: "How much longer does carbon graphite last in dry running?", a: "Under dry or semi-dry friction, carbon graphite typically lasts 3–6× longer than metal alloys, because metal alloys suffer adhesive wear and seizure when starved of lubricant, while carbon graphite maintains stable self-lubrication." }
      ],
      vi: [
        { q: "Tại sao than chì carbon tự bôi trơn?", a: "Than chì carbon có cấu trúc tinh thể lục giác lớp, liên kết giữa lớp yếu (lực van der Waals). Dưới lực cắt các lớp dễ trượt và chuyển thành màng bôi trơn, cho hệ số ma sát khô chỉ 0.04–0.08 mà không cần mỡ." },
        { q: "Khi nào kín hợp kim kim loại vẫn ưu việt hơn than chì carbon?", a: "Trong ứng dụng va đập cao, tải nặng, tốc độ thấp và có bôi trơn liên tục (bạc xi lanh thủy lực, vòng bi máy cán). Hợp kim kim loại chịu va đập và tải cao hơn; than chì có thể nứt vỡ dưới va đập nặng." },
        { q: "Kín than chì carbon có mài trục không?", a: "Không — nó bảo vệ trục. Than chì mềm hơn trục kim loại nên mài mòn ưu tiên xảy ra ở than chì (chi tiết mài hy sinh), cổ trục gần như không mòn. Chỉ cần thay vòng than chì để phục hồi độ chính xác." },
        { q: "Tuổi thọ than chì carbon kéo dài thêm bao nhiêu khi chạy khô?", a: "Trong ma sát khô hoặc bán khô, than chì carbon thường có tuổi thọ gấp 3–6 lần hợp kim kim loại, vì hợp kim kim loại bị mài dính và kẹt khi thiếu dầu, trong khi than chì carbon giữ tự bôi trơn ổn định." }
      ],
      th: [
        { q: "ทำไมคาร์บอนกราไฟต์จึงหล่อลื่นตัวเองได้?", a: "คาร์บอนกราไฟต์มีโครงสร้างผลึกหกเหลี่ยมเป็นชั้น พันธะระหว่างชั้นอ่อน (แรงฟานเดอร์วาลส์) เมื่อมีแรงเฉือนชั้นจะลื่นได้ง่ายและถ่ายโอนเป็นฟิล์มหล่อลื่น ให้สัมประสิทธิ์แรงเสียดทานแห้งเพียง 0.04–0.08 โดยไม่ต้องใช้จาระบี" },
        { q: "เมื่อไรซีลโลหะผสมยังได้เปรียบกว่าคาร์บอนกราไฟต์?", a: "ในงานกระแทกสูง รับน้ำหนักมาก ความเร็วต่ำและมีการหล่อลื่นต่อเนื่อง (บุชลูกสูบไฮดรอลิก แบริ่งเครื่องรีด) โลหะผสมมีความทนกระแทกและรับน้ำหนักสูงกว่า คาร์บอนกราไฟต์อาจแตกหักภายใต้กระแทกหนัก" },
        { q: "ซีลคาร์บอนกราไฟต์ทำให้เพลาสึกไหม?", a: "ไม่ — มันปกป้องเพลา คาร์บอนกราไฟต์อ่อนกว่าเพลาโลหะจึงสึกที่กราไฟต์ก่อน (ชิ้นสึกเสียสละ) คอเพลาแทบไม่สึก ต้องเปลี่ยนเพียงวงกราไฟต์เพื่อคืนความแม่นยำ" },
        { q: "คาร์บอนกราไฟต์อายุยืนขึ้นเท่าไรเมื่อวิ่งแห้ง?", a: "ในแรงเสียดทานแห้งหรือกึ่งแห้ง คาร์บอนกราไฟต์มักอายุยืนกว่าโลหะผสม 3–6 เท่า เพราะโลหะผสมสึกแบบยึดติดและกินเมื่อขาดหล่อลื่น ขณะที่คาร์บอนกราไฟต์รักษาการหล่อลื่นตัวเองได้คงที่" }
      ]
    }
  },
  {
    slug: "carbon-graphite-vs-ptfe-seals",
    title: {
      zh: "碳石墨 vs PTFE 密封：蠕变、导热与尺寸稳定性对比",
      en: "Carbon Graphite vs PTFE Seals: Creep, Thermal Conductivity and Dimensional Stability Comparison",
      vi: "Than chì Carbon vs Kín PTFE: So sánh creep, dẫn nhiệt và ổn định kích thước",
      th: "คาร์บอนกราไฟต์ vs ซีล PTFE: เปรียบเทียบครีป การนำความร้อนและความคงตัวทางขนาด"
    },
    description: {
      zh: "PTFE 蠕变严重导致密封面失压泄漏，碳石墨尺寸稳定。本文对比两者在蠕变率、导热、耐温、硬度与 PV 极限上的差异，帮助化工泵与压缩机密封选材。",
      en: "PTFE suffers severe creep causing seal-face pressure loss and leakage; carbon graphite is dimensionally stable. This article compares creep rate, thermal conductivity, temperature limit, hardness, and PV limit to guide chemical pump and compressor seal selection.",
      vi: "PTFE bị creep nghiêm trọng gây mất áp bề mặt kín và rò rỉ; than chì carbon ổn định kích thước. Bài viết so sánh tỷ lệ creep, dẫn nhiệt, giới hạn nhiệt, độ cứng và giới hạn PV để hướng dẫn chọn kín bơm hóa chất và máy nén.",
      th: "PTFE เกิดครีปรุนแรงทำให้ผิวซีลสูญแรงดันและรั่ว คาร์บอนกราไฟต์คงตัวทางขนาด บทความเปรียบเทียบอัตราครีป การนำความร้อน ขีดจำกัดอุณหภูมิ ความแข็ง และขีดจำกัด PV เพื่อแนะนำการเลือกซีลปั๊มสารเคมีและคอมเพรสเซอร์"
    },
    intro: {
      zh: "聚四氟乙烯（PTFE）以极低摩擦系数和近乎全能的耐腐蚀性著称，但作为聚合物其冷流蠕变、低导热与低硬度三大缺陷在高温高压密封中暴露明显：80–120℃ 即出现明显蠕变，密封面比压衰减导致泄漏。碳石墨尺寸稳定、导热高、硬度高，在相同工况下密封寿命更长。本对比量化 8 项关键差异。",
      en: "PTFE is known for its extremely low friction coefficient and near-universal corrosion resistance, but as a polymer its three key weaknesses — cold-flow creep, low thermal conductivity, and low hardness — become obvious in high-temperature, high-pressure seals: noticeable creep appears at 80–120°C, and seal-face pressure decay causes leakage. Carbon graphite offers dimensional stability, high thermal conductivity, and high hardness, delivering longer seal life under the same conditions. This comparison quantifies 8 key differences.",
      vi: "PTFE nổi bật với hệ số ma sát cực thấp và khả năng chống ăn mòn gần như toàn diện, nhưng là polyme nên ba điểm yếu — creep chảy nguội, dẫn nhiệt thấp và độ cứng thấp — bộc lộ rõ trong kín nhiệt độ cao áp cao: creep rõ ở 80–120°C, áp bề mặt kín giảm gây rò rỉ. Than chì carbon ổn định kích thước, dẫn nhiệt cao, độ cứng cao, cho tuổi thọ kín dài hơn trong cùng điều kiện. Bài so sánh định lượng 8 khác biệt chính.",
      th: "PTFE ขึ้นชื่อเรื่องสัมประสิทธิ์แรงเสียดทานต่ำมากและทนการกัดกร่อนเกือบทุกชนิด แต่ในฐานะพอลิเมอร์จุดอ่อนสามประการ — ครีปไหลเย็น การนำความร้อนต่ำ และความแข็งต่ำ — เด่นชัดในซีลอุณหภูมิและแรงดันสูง: ครีปเห็นได้ชัดที่ 80–120°C แรงดันผิวซีลลดลงทำให้รั่ว คาร์บอนกราไฟต์คงตัวทางขนาด นำความร้อนสูง และแข็งสูง ให้อายุซีลยาวนานกว่าในสภาพเดียวกัน การเปรียบเทียบนี้ปริมาณความแตกต่าง 8 ประการ"
    },
    tableHeaders: {
      zh: ["对比项", "碳石墨密封", "PTFE 密封"],
      en: ["Property", "Carbon Graphite Seal", "PTFE Seal"],
      vi: ["Thông số", "Kín Than chì Carbon", "Kín PTFE"],
      th: ["พารามิเตอร์", "ซีลคาร์บอนกราไฟต์", "ซีล PTFE"]
    },
    rows: [
      { feature: { zh: "蠕变率（100℃/10MPa）", en: "Creep rate (100°C/10MPa)", vi: "Tỷ lệ creep (100°C/10MPa)", th: "อัตราครีป (100°C/10MPa)" }, values: ["≈0（无机物）", "1–3%/1000h"] },
      { feature: { zh: "导热系数", en: "Thermal conductivity", vi: "Hệ số dẫn nhiệt", th: "สัมประสิทธิ์การนำความร้อน" }, values: ["45–70 W/(m·K)", "0.25 W/(m·K)"] },
      { feature: { zh: "最高使用温度", en: "Max service temperature", vi: "Nhiệt độ làm việc tối đa", th: "อุณหภูมิใช้งานสูงสุด" }, values: ["500°C", "260°C"] },
      { feature: { zh: "硬度（肖氏）", en: "Hardness (Shore)", vi: "Độ cứng (Shore)", th: "ความแข็ง (โชร์)" }, values: ["78–82 HS", "D50–D65"] },
      { feature: { zh: "PV 极限（干摩擦）", en: "PV limit (dry friction)", vi: "Giới hạn PV (ma sát khô)", th: "ขีดจำกัด PV (แรงเสียดทานแห้ง)" }, values: ["×3–5", "×1.0"] },
      { feature: { zh: "尺寸稳定性", en: "Dimensional stability", vi: "Ổn định kích thước", th: "ความคงตัวทางขนาด" }, values: ["✓", "✗ (冷流)"] },
      { feature: { zh: "耐强酸强碱", en: "Strong acid/alkali resistance", vi: "Chịu axit/kiềm mạnh", th: "ทนกรด/ด่างแรง" }, values: ["✓", "✓（更优）"] },
      { feature: { zh: "干摩擦系数", en: "Dry friction coefficient", vi: "Hệ số ma sát khô", th: "สัมประสิทธิ์แรงเสียดทานแห้ง" }, values: ["0.04–0.08", "0.02–0.04"] }
    ],
    conclusion: {
      zh: "当密封工况温度高于 80℃ 或压力高于 1 MPa 时，PTFE 的冷流蠕变会导致密封面比压衰减与泄漏，应优先选碳石墨。碳石墨导热系数是 PTFE 的 180–280 倍，散热能力远优，PV 极限高 3–5 倍，适合高速高压干摩擦密封。PTFE 仅在强氧化性介质（如王水、浓双氧水）且温度低于 80℃、压力低于 0.5 MPa 的低载荷工况下，凭借更优的耐腐蚀性与更低摩擦系数占优。",
      en: "When seal service temperature exceeds 80°C or pressure exceeds 1 MPa, PTFE cold-flow creep causes seal-face pressure decay and leakage — carbon graphite should be preferred. Carbon graphite thermal conductivity is 180–280× that of PTFE, giving far superior heat dissipation, with a 3–5× higher PV limit, making it ideal for high-speed, high-pressure dry-friction seals. PTFE wins only in strongly oxidizing media (aqua regia, concentrated hydrogen peroxide) at temperatures below 80°C and pressures below 0.5 MPa in low-load service, thanks to superior corrosion resistance and lower friction coefficient.",
      vi: "Khi nhiệt độ kín vượt 80°C hoặc áp suất vượt 1 MPa, creep chảy nguội PTFE làm áp bề mặt kín giảm và rò rỉ — nên ưu tiên than chì carbon. Dẫn nhiệt than chì carbon gấp 180–280 lần PTFE, tản nhiệt tốt hơn hẳn, giới hạn PV cao 3–5 lần, phù hợp kín ma sát khô tốc độ cao áp cao. PTFE chỉ ưu việt trong môi trường oxy hóa mạnh (nước cường toan, hydro peroxide đặc) ở nhiệt độ dưới 80°C và áp dưới 0.5 MPa tải thấp, nhờ chống ăn mòn tốt hơn và ma sát thấp hơn.",
      th: "เมื่ออุณหภูมิซีลเกิน 80°C หรือแรงดันเกิน 1 MPa ครีปไหลเย็นของ PTFE ทำให้แรงดันผิวซีลลดและรั่ว — ควรเลือกคาร์บอนกราไฟต์ก่อน การนำความร้อนของคาร์บอนกราไฟต์สูงกว่า PTFE 180–280 เท่า ระบายความร้อนดีกว่ามาก ขีดจำกัด PV สูงกว่า 3–5 เท่า เหมาะกับซีลแรงเสียดทานแห้งความเร็วและแรงดันสูง PTFE เด่นเฉพาะในสื่อออกซิไดซ์แรง (aqua regia, ไฮโดรเจนเพอร์ออกไซด์เข้มข้น) ที่อุณหภูมิใต้ 80°C และแรงดันใต้ 0.5 MPa รับน้ำหนักต่ำ ด้วยการต้านการกัดกร่อนและแรงเสียดทานที่ดีกว่า"
    },
    faq: {
      zh: [
        { q: "PTFE 的蠕变为什么会导致密封泄漏？", a: "PTFE 是非晶+结晶聚合物，在持续载荷下大分子链滑移产生冷流，密封面比压随时间衰减。100℃/10MPa 下 1000 小时蠕变率可达 1–3%，密封面变形后介质沿低压区泄漏。" },
        { q: "碳石墨导热比 PTFE 高多少？", a: "碳石墨导热系数 45–70 W/(m·K)，PTFE 仅约 0.25 W/(m·K)，相差 180–280 倍。摩擦热能迅速导出，避免密封面局部过热变形。" },
        { q: "什么情况下 PTFE 仍优于碳石墨？", a: "强氧化性介质（王水、浓双氧水、浓硝酸）、温度低于 80℃、压力低于 0.5 MPa 的低载工况。PTFE 耐腐蚀性更全面，且摩擦系数更低（0.02–0.04）。" },
        { q: "碳石墨与 PTFE 能配合使用吗？", a: "可以。碳石墨常作为动环，PTFE 作为静密封圈或波纹管，组合兼顾碳石墨的耐磨导热与 PTFE 的耐腐蚀补偿。但作为摩擦副配对，碳石墨通常与碳化硅或碳化钨配对，而非 PTFE。" }
      ],
      en: [
        { q: "Why does PTFE creep cause seal leakage?", a: "PTFE is a semi-crystalline polymer; under sustained load its molecular chains slip and cold-flow, so seal-face pressure decays over time. At 100°C/10MPa the creep rate reaches 1–3% per 1000 hours, and once the face deforms the medium leaks along low-pressure zones." },
        { q: "How much higher is carbon graphite thermal conductivity than PTFE?", a: "Carbon graphite conducts 45–70 W/(m·K) vs only about 0.25 W/(m·K) for PTFE — a 180–280× difference. Frictional heat is dissipated quickly, preventing localized overheating and deformation of the seal face." },
        { q: "When is PTFE still superior to carbon graphite?", a: "In strongly oxidizing media (aqua regia, concentrated hydrogen peroxide, concentrated nitric acid) at temperatures below 80°C and pressures below 0.5 MPa under low load. PTFE offers broader corrosion resistance and a lower friction coefficient (0.02–0.04)." },
        { q: "Can carbon graphite and PTFE be used together?", a: "Yes. Carbon graphite often serves as the rotating face while PTFE is used as a static seal ring or bellows, combining graphite wear/heat performance with PTFE corrosion-resistant compliance. However, as a friction pair, carbon graphite is typically mated with silicon carbide or tungsten carbide, not PTFE." }
      ],
      vi: [
        { q: "Tại sao creep PTFE gây rò rỉ kín?", a: "PTFE là polyme bán tinh thể; dưới tải liên tục mạch phân tử trượt và chảy nguội, nên áp bề mặt kín giảm theo thời gian. Ở 100°C/10MPa tỷ lệ creep đạt 1–3%/1000h, khi bề mặt biến dạng môi chất rò theo vùng áp thấp." },
        { q: "Dẫn nhiệt than chì carbon cao hơn PTFE bao nhiêu?", a: "Than chì carbon dẫn 45–70 W/(m·K), PTFE chỉ khoảng 0.25 W/(m·K) — chênh 180–280 lần. Nhiệt ma sát tản nhanh, tránh quá nhiệt cục bộ và biến dạng bề mặt kín." },
        { q: "Khi nào PTFE vẫn ưu việt hơn than chì carbon?", a: "Trong môi trường oxy hóa mạnh (nước cường toan, hydro peroxide đặc, axit nitric đặc), nhiệt độ dưới 80°C, áp dưới 0.5 MPa tải thấp. PTFE chống ăn mòn toàn diện hơn và ma sát thấp hơn (0.02–0.04)." },
        { q: "Than chì carbon và PTFE có dùng chung được không?", a: "Được. Than chì carbon thường làm mặt động, PTFE làm vòng kín tĩnh hoặc ống hình, kết hợp chịu mài/dẫn nhiệt của than chì và bù ăn mòn của PTFE. Nhưng như cặp ma sát, than chì carbon thường ghép với carbur silic hoặc carbur vonfram, không phải PTFE." }
      ],
      th: [
        { q: "ทำไมครีปของ PTFE จึงทำให้ซีลรั่ว?", a: "PTFE เป็นพอลิเมอร์กึ่งผลึก ภายใต้แรงดันต่อเนื่องสายโซ่โมเลกุลลื่นและไหลเย็น แรงดันผิวซีลจึงลดลงตามเวลา ที่ 100°C/10MPa อัตราครีปถึง 1–3%/1000h เมื่อผิวผิดรูปสื่อจะรั่วตามบริเวณแรงดันต่ำ" },
        { q: "การนำความร้อนของคาร์บอนกราไฟต์สูงกว่า PTFE เท่าไร?", a: "คาร์บอนกราไฟต์นำ 45–70 W/(m·K) เทียบกับ PTFE ที่ประมาณ 0.25 W/(m·K) — ต่างกัน 180–280 เท่า ความร้อนจากแรงเสียดทานระบายเร็ว ป้องกันความร้อนสูงเฉพาะจุดและการผิดรูปผิวซีล" },
        { q: "เมื่อไร PTFE ยังได้เปรียบกว่าคาร์บอนกราไฟต์?", a: "ในสื่อออกซิไดซ์แรง (aqua regia, ไฮโดรเจนเพอร์ออกไซด์เข้มข้น, กรดไนตริกเข้มข้น) ที่อุณหภูมิใต้ 80°C แรงดันใต้ 0.5 MPa รับน้ำหนักต่ำ PTFE ต้านการกัดกร่อนได้กว้างกว่าและแรงเสียดทานต่ำกว่า (0.02–0.04)" },
        { q: "คาร์บอนกราไฟต์กับ PTFE ใช้ร่วมกันได้ไหม?", a: "ได้ คาร์บอนกราไฟต์มักเป็นหน้าหมุน PTFE เป็นวงซีลนิ่งหรือหูแบบ ผสมผสานความทนสึก/นำความร้อนของกราไฟต์กับการชดเชยการกัดกร่อนของ PTFE แต่ในฐานะคู่แรงเสียดทาน คาร์บอนกราไฟต์มักจับคู่กับซิลิคอนคาร์ไบด์หรือทังสเตนคาร์ไบด์ ไม่ใช่ PTFE" }
      ]
    }
  },
  {
    slug: "sic-vs-wc-mating-materials",
    title: {
      zh: "碳化硅 vs 碳化钨：机械密封配对面材料对比",
      en: "Silicon Carbide vs Tungsten Carbide: Mechanical Seal Mating Face Material Comparison",
      vi: "Carbur Silic vs Carbur Vonfram: So sánh vật liệu mặt ghép kín cơ",
      th: "ซิลิคอนคาร์ไบด์ vs ทังสเตนคาร์ไบด์: เปรียบเทียบวัสดุผิวคู่ซีลกลไก"
    },
    description: {
      zh: "碳化硅导热 120–150 W/(m·K)，碳化钨导热 80–100 W/(m·K)。本文对比两者在硬度、导热、耐腐蚀、PV 极限与成本上的差异，为机械密封配对面选材提供依据。",
      en: "Silicon carbide conducts 120–150 W/(m·K); tungsten carbide conducts 80–100 W/(m·K). This article compares hardness, thermal conductivity, corrosion resistance, PV limit, and cost to guide mechanical seal mating-face material selection.",
      vi: "Carbur silic dẫn 120–150 W/(m·K); carbur vonfram dẫn 80–100 W/(m·K). Bài viết so sánh độ cứng, dẫn nhiệt, chống ăn mòn, giới hạn PV và chi phí để hướng dẫn chọn vật liệu mặt ghép kín cơ.",
      th: "ซิลิคอนคาร์ไบด์นำ 120–150 W/(m·K); ทังสเตนคาร์ไบด์นำ 80–100 W/(m·K) บทความเปรียบเทียบความแข็ง การนำความร้อน การต้านการกัดกร่อน ขีดจำกัด PV และต้นทุน เพื่อแนะนำการเลือกวัสดุผิวคู่ซีลกลไก"
    },
    intro: {
      zh: "机械密封的动静环配对面决定密封寿命与可靠性。碳化硅（SiC）与碳化钨（WC）是两种主流硬面材料，常与碳石墨配对使用。SiC 导热更高、硬度更高、耐腐蚀更全；WC 韧性更好、抗冲击更强。本对比从 8 项参数量化差异，并说明各自最佳配对工况。",
      en: "The mating faces of a mechanical seal rotating and stationary rings determine seal life and reliability. Silicon carbide (SiC) and tungsten carbide (WC) are the two mainstream hard-face materials, commonly paired with carbon graphite. SiC offers higher thermal conductivity, higher hardness, and broader corrosion resistance; WC offers better toughness and impact resistance. This comparison quantifies 8 parameters and explains the best pairing for each.",
      vi: "Mặt ghép vòng động/tĩnh của kín cơ quyết định tuổi thọ và độ tin cậy. Carbur silic (SiC) và carbur vonfram (WC) là hai vật liệu mặt cứng chính, thường ghép với than chì carbon. SiC dẫn nhiệt cao hơn, cứng hơn, chống ăn mòn rộng hơn; WC dai hơn, chịu va đập tốt hơn. Bài so sánh định lượng 8 thông số và nêu điều kiện ghép tối ưu cho từng loại.",
      th: "ผิวคู่วงหมุน/นิ่งของซีลกลไกกำหนดอายุและความน่าเชื่อถือของซีล ซิลิคอนคาร์ไบด์ (SiC) และทังสเตนคาร์ไบด์ (WC) เป็นวัสดุผิวแข็งหลักสองชนิด มักจับคู่กับคาร์บอนกราไฟต์ SiC นำความร้อนสูงกว่า แข็งกว่า ต้านการกัดกร่อนกว้างกว่า; WC ทนทานกว่า ทนกระแทกกว่า การเปรียบเทียบนี้ปริมาณ 8 พารามิเตอร์และอธิบายการจับคู่ที่เหมาะสมที่สุดของแต่ละชนิด"
    },
    tableHeaders: {
      zh: ["对比项", "碳化硅（SiC）", "碳化钨（WC）"],
      en: ["Property", "Silicon Carbide (SiC)", "Tungsten Carbide (WC)"],
      vi: ["Thông số", "Carbur Silic (SiC)", "Carbur Vonfram (WC)"],
      th: ["พารามิเตอร์", "ซิลิคอนคาร์ไบด์ (SiC)", "ทังสเตนคาร์ไบด์ (WC)"]
    },
    rows: [
      { feature: { zh: "导热系数", en: "Thermal conductivity", vi: "Hệ số dẫn nhiệt", th: "สัมประสิทธิ์การนำความร้อน" }, values: ["120–150 W/(m·K)", "80–100 W/(m·K)"] },
      { feature: { zh: "硬度（维氏）", en: "Hardness (Vickers)", vi: "Độ cứng (Vickers)", th: "ความแข็ง (วิกเกอร์ส)" }, values: ["2500–2800 HV", "1500–1800 HV"] },
      { feature: { zh: "耐强酸强碱", en: "Strong acid/alkali resistance", vi: "Chịu axit/kiềm mạnh", th: "ทนกรด/ด่างแรง" }, values: ["✓（除 HF）", "◐"] },
      { feature: { zh: "抗冲击韧性", en: "Impact toughness", vi: "Độ dai va đập", th: "ความเหนียวต่อกระแทก" }, values: ["◐", "✓"] },
      { feature: { zh: "PV 极限（配碳石墨）", en: "PV limit (vs carbon graphite)", vi: "Giới hạn PV (ghép than chì carbon)", th: "ขีดจำกัด PV (จับคู่คาร์บอนกราไฟต์)" }, values: ["×1.5–2.0", "×1.0"] },
      { feature: { zh: "密度", en: "Density", vi: "Mật độ", th: "ความหนาแน่น" }, values: ["3.1 g/cm³", "14.5 g/cm³"] },
      { feature: { zh: "干运行能力", en: "Dry-running capability", vi: "Khả năng chạy khô", th: "ความสามารถวิ่งแห้ง" }, values: ["✓（短时）", "◐"] },
      { feature: { zh: "相对成本", en: "Relative cost", vi: "Chi phí tương đối", th: "ต้นทุนสัมพัทธ์" }, values: ["×1.3", "×1.0"] }
    ],
    conclusion: {
      zh: "优先选碳化硅（SiC）的工况：高速、高温、强腐蚀（除氢氟酸外）、需短时干运行或散热要求高的密封——其导热比 WC 高 30–50%，硬度高 60% 以上，PV 极限高 1.5–2 倍。优先选碳化钨（WC）的工况：含固体颗粒冲击、易发生机械碰撞、需高韧性的密封——WC 抗冲击韧性显著优于 SiC，不易崩裂。两者均常与碳石墨配对，利用石墨自润滑降低摩擦与磨损。",
      en: "Prefer silicon carbide (SiC) for: high-speed, high-temperature, strongly corrosive (except HF), short-term dry-running, or high heat-dissipation seals — its thermal conductivity is 30–50% higher than WC, hardness 60%+ higher, and PV limit 1.5–2× higher. Prefer tungsten carbide (WC) for: seals with solid-particle impact, risk of mechanical collision, or high toughness requirements — WC impact toughness is significantly better than SiC, resisting chipping. Both are commonly paired with carbon graphite, leveraging graphite self-lubrication to reduce friction and wear.",
      vi: "Ưu tiên carbur silic (SiC) cho: kín tốc độ cao, nhiệt độ cao, ăn mòn mạnh (trừ HF), chạy khô ngắn hoặc tản nhiệt cao — dẫn nhiệt cao hơn WC 30–50%, độ cứng cao hơn 60%, giới hạn PV cao 1,5–2 lần. Ưu tiên carbur vonfram (WC) cho: kín có hạt rắn va đập, dễ va chạm cơ khí, cần độ dai cao — độ dai va đập của WC vượt trội SiC, khó vỡ. Cả hai thường ghép với than chì carbon, tận dụng tự bôi trơn giảm ma sát mài mòn.",
      th: "เลือกซิลิคอนคาร์ไบด์ (SiC) สำหรับ: ซีลความเร็วสูง อุณหภูมิสูง กัดกร่อนแรง (ยกเว้น HF) วิ่งแห้งระยะสั้น หรือต้องการระบายความร้อนสูง — การนำความร้อนสูงกว่า WC 30–50% ความแข็งสูงกว่า 60% ขีดจำกัด PV สูงกว่า 1.5–2 เท่า เลือกทังสเตนคาร์ไบด์ (WC) สำหรับ: ซีลที่มีอนุภาคแข็งกระแทก เสี่ยงชนทางกล หรือต้องการความเหนียวสูง — ความเหนียวต่อกระแทกของ WC ดีกว่า SiC อย่างชัดเจน ทนการแตกหัก ทั้งสองมักจับคู่กับคาร์บอนกราไฟต์ ใช้ประโยชน์การหล่อลื่นตัวเองลดแรงเสียดทานและการสึกหรอ"
    },
    faq: {
      zh: [
        { q: "为什么 SiC 导热比 WC 高？", a: "SiC 为共价键晶体，声子传热效率高，导热系数 120–150 W/(m·K)；WC 为金属键+共价键混合，且含钴粘结相增加声子散射，导热 80–100 W/(m·K)。导热高使 SiC 摩擦热散失更快，适合高速密封。" },
        { q: "SiC 和 WC 哪个更耐腐蚀？", a: "SiC 更耐腐蚀，可耐绝大多数酸碱（仅氢氟酸除外）。WC 因含钴粘结相，在强酸中钴被溶出导致材料劣化，耐腐蚀性不如 SiC。" },
        { q: "为什么高冲击工况要选 WC？", a: "WC 含钴粘结相，断裂韧性 KIc 约 10–15 MPa·m½，是 SiC（约 3–4 MPa·m½）的 3–4 倍。在含颗粒介质或装配冲击下 SiC 易崩裂，WC 更耐机械冲击。" },
        { q: "SiC 和 WC 通常与什么材料配对？", a: "通常与碳石墨配对。碳石墨作为软面自润滑，硬面（SiC 或 WC）作为耐磨对磨面。这种软-硬配对兼顾低摩擦与长寿命，是机械密封最经典的摩擦副组合。" }
      ],
      en: [
        { q: "Why is SiC more thermally conductive than WC?", a: "SiC is a covalent crystal with efficient phonon heat transfer, giving 120–150 W/(m·K). WC has mixed metallic/covalent bonding and a cobalt binder phase that scatters phonons, giving 80–100 W/(m·K). Higher conductivity lets SiC dissipate frictional heat faster, suiting high-speed seals." },
        { q: "Which is more corrosion-resistant, SiC or WC?", a: "SiC is more corrosion-resistant, withstanding virtually all acids and alkalis (except hydrofluoric acid). WC contains a cobalt binder that leaches out in strong acids, degrading the material, so its corrosion resistance is inferior to SiC." },
        { q: "Why choose WC for high-impact service?", a: "WC cobalt binder gives a fracture toughness KIc of about 10–15 MPa·m½, 3–4× that of SiC (~3–4 MPa·m½). In particulate media or assembly impact, SiC chips easily while WC resists mechanical shock." },
        { q: "What are SiC and WC usually paired with?", a: "They are usually paired with carbon graphite. Carbon graphite serves as the self-lubricating soft face, while the hard face (SiC or WC) is the wear-resistant counterface. This soft-hard pairing balances low friction with long life — the classic mechanical seal friction pair." }
      ],
      vi: [
        { q: "Tại sao SiC dẫn nhiệt cao hơn WC?", a: "SiC là tinh thể cộng hóa trị, truyền nhiệt phonon hiệu quả, dẫn 120–150 W/(m·K). WC có liên kết kim loại/cộng hóa trị hỗn hợp và pha kết dính cobalt làm tán xạ phonon, dẫn 80–100 W/(m·K). Dẫn nhiệt cao giúp SiC tản nhiệt ma sát nhanh hơn, hợp kín tốc độ cao." },
        { q: "SiC hay WC chịu ăn mòn tốt hơn?", a: "SiC chịu ăn mòn tốt hơn, chịu hầu hết axit/kiềm (trừ axit flohydric). WC có pha cobalt bị hòa tan trong axit mạnh làm vật liệu suy giảm, nên kém hơn SiC." },
        { q: "Tại sao va đập cao chọn WC?", a: "WC có pha cobalt, độ dai phá vỡ KIc khoảng 10–15 MPa·m½, gấp 3–4 lần SiC (~3–4 MPa·m½). Trong môi trường hạt hoặc va đập lắp ráp SiC dễ vỡ, WC chịu va đập cơ khí tốt hơn." },
        { q: "SiC và WC thường ghép với vật liệu gì?", a: "Thường ghép với than chì carbon. Than chì carbon làm mặt mềm tự bôi trơn, mặt cứng (SiC hoặc WC) làm mặt đối chịu mài. Cặp mềm-cứng này cân bằng ma sát thấp và tuổi thọ cao — cặp ma sát kín cơ kinh điển." }
      ],
      th: [
        { q: "ทำไม SiC นำความร้อนสูงกว่า WC?", a: "SiC เป็นผลึกโควาเลนต์ ถ่ายเทความร้อนด้วยโฟนอนมีประสิทธิภาพ นำ 120–150 W/(m·K) WC มีพันธะโลหะ/โควาเลนต์ผสมและวัฏภาคตัวประสานโคบอลต์ที่ทำให้โฟนอนกระจัดกระจาย นำ 80–100 W/(m·K) การนำสูงช่วยให้ SiC ระบายความร้อนจากแรงเสียดทานเร็วกว่า เหมาะกับซีลความเร็วสูง" },
        { q: "SiC หรือ WC ทนการกัดกร่อนได้ดีกว่า?", a: "SiC ทนการกัดกร่อนได้ดีกว่า ทนกรด/ด่างเกือบทุกชนิด (ยกเว้นกรดไฮโดรฟลูออริก) WC มีวัฏภาคโคบอลต์ที่ถูกชะละลายในกรดแรงทำให้วัสดุเสื่อม จึงทนการกัดกร่อนได้ไม่ดีเท่า SiC" },
        { q: "ทำไมงานกระแทกสูงจึงเลือก WC?", a: "WC มีวัฏภาคโคบอลต์ ความเหนียวต่อการแตก KIc ประมาณ 10–15 MPa·m½ สูงกว่า SiC (~3–4 MPa·m½) 3–4 เท่า ในสื่อมีอนุภาคหรือกระแทกขณะประกอบ SiC แตกง่าย WC ทนกระแทกทางกลได้ดีกว่า" },
        { q: "SiC และ WC มักจับคู่กับวัสดุอะไร?", a: "มักจับคู่กับคาร์บอนกราไฟต์ คาร์บอนกราไฟต์เป็นหน้าอ่อนหล่อลื่นตัวเอง หน้าแข็ง (SiC หรือ WC) เป็นหน้าคู่ทนสึก การจับคู่อ่อน-แข็งนี้สมดุลแรงเสียดทานต่ำกับอายุยาว — คู่แรงเสียดทานซีลกลไกคลาสสิก" }
      ]
    }
  }
]

export function getComparisonBySlug(slug: string): ComparisonData | undefined {
  return comparisons.find((c) => c.slug === slug)
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug)
}