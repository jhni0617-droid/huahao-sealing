/**
 * 碳石墨材料技术参数参考数据（SEO/GEO 用）
 *
 * 包含 6 个主流石墨牌号的详细工程参数，以及碳石墨通用物理性能。
 * type 为技术分类（英文，国际通用术语），applications 为本地化应用描述。
 */

export interface TechnicalGrade {
  grade: string
  type: string
  tempMax: string
  pressureMax: string
  speedMax: string
  compressiveStrength: string
  flexuralStrength: string
  thermalConductivity: string
  applications: { zh: string; en: string; vi?: string; th?: string }
}

export interface TechnicalData {
  grades: TechnicalGrade[]
  materialProperties: {
    title: { zh: string; en: string; vi?: string; th?: string }
    properties: { name: string; value: string; unit: string }[]
  }
  faq: {
    zh: { q: string; a: string }[]
    en: { q: string; a: string }[]
    vi?: { q: string; a: string }[]
    th?: { q: string; a: string }[]
  }
}

export const technicalData: TechnicalData = {
  grades: [
    {
      grade: "M106H",
      type: "Epoxy-resin-impregnated",
      tempMax: "180°C",
      pressureMax: "1.5 MPa",
      speedMax: "25 m/s",
      compressiveStrength: "92 MPa",
      flexuralStrength: "38 MPa",
      thermalConductivity: "45 W/(m·K)",
      applications: {
        zh: "离心泵、化工泵、清水泵机械密封环与轴套；通用工业密封，介质温度低于 180℃ 的水、油、弱酸弱碱。",
        en: "Centrifugal pumps, chemical pumps, water pump mechanical seal rings and bushings; general industrial sealing for water, oil, weak acids/alkalis below 180°C.",
        vi: "Vòng đệm kín cơ và bạc lót bơm ly tâm, bơm hóa chất, bơm nước; kín công nghiệp chung cho nước, dầu, axit/kiềm yếu dưới 180°C.",
        th: "แหวนซีลกลไกและบุชชิ่งปั๊มเหวียน ปั๊มเคมี ปั๊มน้ำ; ซีลอุตสาหกรรมทั่วไปสำหรับน้ำ น้ำมัน กรด/ด่างอ่อนใต้ 180°C",
      },
    },
    {
      grade: "M106D",
      type: "Antimony-impregnated",
      tempMax: "500°C",
      pressureMax: "2.0 MPa",
      speedMax: "25 m/s",
      compressiveStrength: "190 MPa (tested)",
      flexuralStrength: "72 MPa (tested)",
      thermalConductivity: "70 W/(m·K)",
      applications: {
        zh: "高温导热油泵、熔盐泵、蒸汽阀、高温烘箱输送线轴套；工况温度 220–500℃ 的高温密封与轴承。",
        en: "High-temperature thermal oil pumps, molten salt pumps, steam valves, high-temp oven conveyor bushings; seals and bearings for 220–500°C service.",
        vi: "Bơm dầu dẫn nhiệt nhiệt độ cao, bơm muối nóng chảy, van hơi, bạc lót băng tải lò nung nóng; kín và vòng bi cho nhiệt độ 220–500°C.",
        th: "ปั๊มน้ำมันถ่ายเทความร้อนอุณหภูมิสูง ปั๊มเกลือหลอมเหลว วาล์วไอน้ำ บุชชิ่งสายพานเตาอบอุณหภูมิสูง; ซีลและแบริ่งสำหรับ 220–500°C",
      },
    },
    {
      grade: "M106K",
      type: "Food-grade resin-impregnated (FDA)",
      tempMax: "220°C",
      pressureMax: "1.5 MPa",
      speedMax: "20 m/s",
      compressiveStrength: "90 MPa",
      flexuralStrength: "36 MPa",
      thermalConductivity: "42 W/(m·K)",
      applications: {
        zh: "食品机械（巧克力搅拌机、灌装机）、制药设备搅拌轴密封；符合 FDA 与 EU 食品接触标准，完全无油自润滑。",
        en: "Food machinery (chocolate mixers, filling machines), pharmaceutical agitator shaft seals; FDA and EU food-contact compliant, completely oil-free self-lubricating.",
        vi: "Máy thực phẩm (máy trộn chocolate, máy chiết rót), kín trục khuấy thiết bị dược; tuân thủ FDA và EU tiếp xúc thực phẩm, tự bôi trơn không dầu hoàn toàn.",
        th: "เครื่องจักรอาหาร (เครื่องผสมช็อกโกแลต, เครื่องบรรจุ), ซีลเพลากวนเครื่องยา; ได้มาตรฐาน FDA และ EU สัมผัสอาหาร หล่อลื่นตัวเองไม่มีน้ำมัน",
      },
    },
    {
      grade: "M191T",
      type: "Carbonized (baked)",
      tempMax: "600°C",
      pressureMax: "2.5 MPa",
      speedMax: "20 m/s",
      compressiveStrength: "100 MPa",
      flexuralStrength: "40 MPa",
      thermalConductivity: "55 W/(m·K)",
      applications: {
        zh: "光热发电熔盐泵、冶金高温炉轴承、电厂高温循环泵；工况温度 500–600℃ 的极端高温密封，无需金属浸渍。",
        en: "Solar-thermal molten salt pumps, metallurgical high-temp furnace bearings, power plant high-temp circulating pumps; extreme high-temp seals for 500–600°C without metal impregnation.",
        vi: "Bơm muối nóng chảy điện quang nhiệt, vòng bi lò luyện kim nhiệt độ cao, bơm tuần hoàn nhiệt độ cao nhà máy điện; kín cực nóng 500–600°C không cần ngấm kim loại.",
        th: "ปั๊มเกลือหลอมเหลวโซลาร์เทอร์มอล แบริ่งเตาเหล็กกล้าอุณหภูมิสูง ปั๊มหมุนเวียนอุณหภูมิสูงโรงไฟฟ้า; ซีลอุณหภูมิสูงสุด 500–600°C ไม่ต้องอิมพรีเกตโลหะ",
      },
    },
    {
      grade: "204B",
      type: "Seawater-corrosion-resistant impregnated",
      tempMax: "200°C",
      pressureMax: "1.5 MPa",
      speedMax: "25 m/s",
      compressiveStrength: "95 MPa",
      flexuralStrength: "39 MPa",
      thermalConductivity: "48 W/(m·K)",
      applications: {
        zh: "船舶艉轴密封、海水冷却泵轴套、舵轴承、海洋平台设备；耐海水电化学腐蚀，通过 DNV 船级社认证。",
        en: "Marine stern shaft seals, seawater cooling pump bushings, rudder bearings, offshore platform equipment; resists seawater galvanic corrosion, DNV certified.",
        vi: "Kín trục lái tàu, bạc lót bơm làm mát nước biển, vòng bi bánh lái, thiết bị giàn khoan; chịu ăn mòn điện hóa nước biển, chứng nhận DNV.",
        th: "ซีลเพลาท้ายเรือ บุชชิ่งปั๊มน้ำทะเลหล่อเย็น แบริ่งหางเสือ อุปกรณ์แท่นน้ำมัน; ทนการกัดกร่อนกัลวานิกน้ำทะเล ผ่านการรับรอง DNV",
      },
    },
    {
      grade: "59U",
      type: "Babbitt-inlaid carbon graphite",
      tempMax: "180°C",
      pressureMax: "1.0 MPa",
      speedMax: "15 m/s",
      compressiveStrength: "88 MPa",
      flexuralStrength: "35 MPa",
      thermalConductivity: "40 W/(m·K)",
      applications: {
        zh: "化工离心泵机械密封、压缩机密封、搅拌器密封；巴氏合金镶嵌结构补偿轴跳动，适应压力波动工况。",
        en: "Chemical centrifugal pump mechanical seals, compressor seals, agitator seals; babbitt-inlaid structure compensates shaft runout, suits pressure-fluctuation service.",
        vi: "Kín cơ bơm ly tâm hóa chất, kín máy nén, kín khuấy; cấu trúc khảm babbitt bù dao động trục, phù hợp với áp suất biến động.",
        th: "ซีลกลไกปั๊มเหวียนเคมี ซีลคอมเพรสเซอร์ ซีลกวน; โครงสร้างฝังบับบิตชดเชยการกระตุกเพลา เหมาะกับแรงดันผันผวน",
      },
    },
  ],
  materialProperties: {
    title: {
      zh: "碳石墨通用物理性能",
      en: "General Physical Properties of Carbon Graphite",
      vi: "Tính chất vật lý chung của than chì carbon",
      th: "คุณสมบัติทางกายภาพทั่วไปของคาร์บอนกราไฟต์",
    },
    properties: [
      { name: "Carbon content", value: "99.9", unit: "%" },
      { name: "Bulk density", value: "1.75–1.85", unit: "g/cm³" },
      { name: "Shore hardness", value: "78–82", unit: "HS" },
      { name: "Ash content", value: "0.002", unit: "%" },
      { name: "Coefficient of thermal expansion", value: "4.0–5.0", unit: "×10⁻⁶/°C" },
      { name: "Porosity (before impregnation)", value: "10–15", unit: "%" },
      { name: "Max operating temperature (inert atmosphere)", value: "600", unit: "°C" },
      { name: "Compressive strength (typical)", value: "88–120", unit: "MPa" },
    ],
  },
  faq: {
    zh: [
      { q: "M106H 和 M106D 有什么区别？", a: "M106H 为环氧树脂浸渍，耐温约 180℃；M106D 为锑浸渍，耐温 500℃，抗压强度 190 MPa、抗折强度 72 MPa、肖氏硬度 92 HS（第三方检测值）。高温工况（>180℃）应选 M106D。" },
      { q: "哪个牌号符合食品级要求？", a: "M106K 为食品级树脂浸渍碳石墨，符合 FDA 与 EU 食品接触材料标准，完全无油自润滑，适用于巧克力搅拌机、灌装机、制药设备等卫生级工况。" },
      { q: "最高耐温的牌号是哪个？", a: "M191T，碳化处理牌号，耐温 600℃，无需金属浸渍即可在极端高温下运行，适用于光热发电熔盐泵、冶金高温炉等 500–600℃ 工况。" },
      { q: "海水工况应该选哪个牌号？", a: "204B，采用特殊耐蚀浸渍工艺，耐海水电化学腐蚀，通过 DNV 船级社认证，适用于船舶艉轴密封、海水冷却泵轴套、舵轴承等海洋工况。" },
      { q: "浸渍处理的作用是什么？", a: "浸渍填充碳石墨基体的微孔，降低孔隙率至 2% 以下，提升抗压强度、耐磨性与致密性，并针对特定工况（高温、腐蚀、食品）定制性能。不同浸渍剂（树脂、锑、金属）决定耐温上限与耐腐蚀特性。" },
    ],
    en: [
      { q: "What is the difference between M106H and M106D?", a: "M106H is epoxy-resin-impregnated, rated to about 180°C; M106D is antimony-impregnated, rated to 500°C, with third-party tested compressive strength 190 MPa, flexural strength 72 MPa and Shore hardness 92 HS. High-temperature service (>180°C) requires M106D." },
      { q: "Which grade is food-grade compliant?", a: "M106K is a food-grade resin-impregnated carbon graphite, FDA and EU food-contact compliant, completely oil-free self-lubricating, suited for chocolate mixers, filling machines, and pharmaceutical equipment." },
      { q: "Which grade has the highest temperature rating?", a: "M191T, a carbonized (baked) grade rated to 600°C, operates at extreme high temperatures without metal impregnation, suited for solar-thermal molten salt pumps and metallurgical furnaces at 500–600°C." },
      { q: "Which grade should I choose for seawater service?", a: "204B, with a special corrosion-resistant impregnation process, resists seawater galvanic corrosion and is DNV certified, suited for marine stern shaft seals, seawater cooling pump bushings, and rudder bearings." },
      { q: "What is the purpose of impregnation?", a: "Impregnation fills the carbon graphite substrate micro-pores, reducing porosity below 2%, boosting compressive strength, wear resistance, and density, while tailoring performance for specific service (high-temp, corrosion, food). Different impregnants (resin, antimony, metal) determine the temperature ceiling and corrosion characteristics." },
    ],
    vi: [
      { q: "Khác nhau giữa M106H và M106D là gì?", a: "M106H ngầm nhựa epoxy, chịu khoảng 180°C; M106D ngâm antimon, chịu 500°C, cường độ nén 190 MPa, độ bền uốn 72 MPa, độ cứng Shore 92 HS (giá trị kiểm định bên thứ ba). Nhiệt độ cao (>180°C) nên chọn M106D." },
      { q: "Mác nào đạt tiêu chuẩn thực phẩm?", a: "M106K là than chì ngầm nhựa cấp thực phẩm, tuân thủ FDA và EU tiếp xúc thực phẩm, tự bôi trơn không dầu hoàn toàn, hợp máy trộn chocolate, máy chiết rót, thiết bị dược." },
      { q: "Mác nào chịu nhiệt cao nhất?", a: "M191T, mác cacbon hóa, chịu 600°C, chạy cực nóng không cần ngấm kim loại, hợp bơm muối nóng chảy điện quang nhiệt, lò luyện kim 500–600°C." },
      { q: "Môi trường nước biển chọn mác nào?", a: "204B, công nghệ ngấm chống ăn mòn đặc biệt, chịu ăn mòn điện hóa nước biển, chứng nhận DNV, hợp kín trục lái tàu, bạc bơm làm mát nước biển, vòng bi bánh lái." },
      { q: "Tác dụng của ngấm là gì?", a: "Ngấm lấp lỗ rỗng than chì, giảm độ rỗng dưới 2%, tăng cường độ nén, chịu mài và độ đặc, tùy biến cho điều kiện đặc định (nhiệt cao, ăn mòn, thực phẩm). Chất ngấm khác nhau (nhựa, antimon, kim loại) quyết định giới hạn nhiệt và đặc tính ăn mòn." },
    ],
    th: [
      { q: "ความแตกต่างระหว่าง M106H และ M106D คืออะไร?", a: "M106H อิมพรีเกตเรซินอีพอกซี ทนราว 180°C; M106D อิมพรีเกตพลวง ทน 500°C กำลังอัด 190 MPa กำลังดัด 72 MPa ความแข็ง Shore 92 HS (ค่าทดสอบภายนอก) อุณหภูมิสูง (>180°C) เลือก M106D" },
      { q: "เกรดใดได้มาตรฐานอาหาร?", a: "M106K เป็นกราไฟต์อิมพรีเกตเรซินเกรดอาหาร ได้มาตรฐาน FDA และ EU สัมผัสอาหาร หล่อลื่นตัวเองไม่มีน้ำมัน เหมาะกับเครื่องผสมช็อกโกแลต เครื่องบรรจุ เครื่องจักรยา" },
      { q: "เกรดใดทนอุณหภูมิสูงสุด?", a: "M191T เกรดคาร์บอไนซ์ ทน 600°C ทำงานอุณหภูมิสูงสุดได้โดยไม่ต้องอิมพรีเกตโลหะ เหมาะกับปั๊มเกลือหลอมเหลวโซลาร์เทอร์มอลและเตาเหล็กกล้า 500–600°C" },
      { q: "สภาพน้ำทะเลเลือกเกรดใด?", a: "204B กระบวนการอิมพรีเกตต้านการกัดกร่อนพิเศษ ทนการกัดกร่อนกัลวานิกน้ำทะเล ผ่านการรับรอง DNV เหมาะกับซีลเพลาท้ายเรือ บุชปั๊มน้ำทะเลหล่อเย็น แบริ่งหางเสือ" },
      { q: "จุดประสงค์ของการอิมพรีเกตคืออะไร?", a: "การอิมพรีเกตอัดรูพรุนกราไฟต์ ลดความพรุนต่ำกว่า 2% เพิ่มกำลังอัด ความทนสึกและความหนาแน่น ปรับแต่งสำหรับสภาพเฉพาะ (อุณหภูมิสูง กัดกร่อน อาหาร) สารอิมพรีเกตต่างกัน (เรซิน พลวง โลหะ) กำหนดขีดจำกัดอุณหภูมิและคุณสมบัติการกัดกร่อน" },
    ],
  },
}