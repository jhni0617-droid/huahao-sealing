/**
 * 技术资源 Landing Page 数据
 * 对照竞争情报报告 P0 关键词 #81-95：graphite grade selection guide、chemical resistance chart、
 * carbon graphite properties、mechanical seal selection、API 682 seal selection。
 * 2 个核心技术资源 × 4 语言（zh / en / vi / th），提供牌号选型决策与化学耐蚀性查询。
 * 参考：锑浸渍 M106H 耐 500℃、树脂浸渍 M120H 耐 220℃、碳化 M191T 耐 600℃、铜浸渍 M254J 高载荷。
 */

export interface ResourceTable {
  columns: { zh: string[]; en: string[]; vi?: string[]; th?: string[] }
  rows: { zh: string[]; en: string[]; vi?: string[]; th?: string[] }[]
}

export interface ResourceSection {
  heading: { zh: string; en: string; vi?: string; th?: string }
  intro?: { zh: string; en: string; vi?: string; th?: string }
  table?: ResourceTable
  paragraphs?: { zh: string[]; en: string[]; vi?: string[]; th?: string[] }
}

export interface ResourceLanding {
  slug: string
  title: { zh: string; en: string; vi?: string; th?: string }
  description: { zh: string; en: string; vi?: string; th?: string }
  sections: ResourceSection[]
  faq: {
    zh: { q: string; a: string }[]
    en: { q: string; a: string }[]
    vi?: { q: string; a: string }[]
    th?: { q: string; a: string }[]
  }
}

export const resourceLandings: ResourceLanding[] = [
  // 1. 石墨牌号选型指南
  {
    slug: "graphite-grade-selection-guide",
    title: {
      zh: "碳石墨牌号选型指南 | 按温度、介质、压力与应用选材",
      en: "Carbon Graphite Grade Selection Guide | By Temperature, Media, Pressure & Application",
      vi: "Hướng dẫn lựa chọn vật liệu than chì carbon | Theo nhiệt độ, môi trường, áp suất",
      th: "คู่มือเลือกเกรดคาร์บอนกราไฟต์ | ตามอุณหภูมิ สื่อ แรงดัน และการใช้งาน",
    },
    description: {
      zh: "华豪密封碳石墨牌号选型指南：按工况温度（-200~600℃）、介质（酸/碱/盐/溶剂）、压力（PV 值）、应用场景（机械密封/轴套/轴承）选择合适牌号。涵盖树脂浸渍 M120H、锑浸渍 M106H、碳化 M191T、铜浸渍 M254J、巴氏合金 M254B 等牌号对比。",
      en: "Huahao Sealing carbon graphite grade selection guide: choose the right grade by operating temperature (-200 to 600°C), media (acid/alkali/salt/solvent), pressure (PV value), and application (mechanical seal/bushing/bearing). Covers resin-impregnated M120H, antimony M106H, carbonized M191T, copper M254J, Babbitt M254B grade comparisons.",
      vi: "Hướng dẫn lựa chọn vật liệu than chì carbon Huahao Sealing: chọn vật liệu theo nhiệt độ (-200 đến 600°C), môi trường (axit/kiềm/muối/dung môi), áp suất (PV), và ứng dụng. Bao gồm M120H nhựa, M106H antimony, M191T carbonized, M254J đồng, M254B babbitt.",
      th: "คู่มือเลือกเกรด Huahao Sealing: เลือกตามอุณหภูมิ (-200 ถึง 600°C) สื่อ (กรด/ด่าง/เกลือ/ตัวทำละลาย) แรงดัน (PV) และการใช้งาน ครอบคลุม M120H, M106H, M191T, M254J, M254B",
    },
    sections: [
      // 1.1 牌号对照表
      {
        heading: {
          zh: "牌号对照表",
          en: "Grade Comparison Chart",
          vi: "Bảng so sánh vật liệu",
          th: "ตารางเปรียบเทียบเกรด",
        },
        intro: {
          zh: "下表汇总华豪密封主流碳石墨牌号的关键性能参数,供快速对比选型。所有牌号均可按图纸定制加工。",
          en: "The table below summarizes key performance parameters of Huahao Sealing's mainstream carbon graphite grades for quick comparison. All grades can be custom-machined per drawings.",
          vi: "Bảng dưới tóm tắt thông số chính của các vật liệu than chì carbon Huahao Sealing để so sánh nhanh. Có thể gia công theo bản vẽ.",
          th: "ตารางสรุปพารามิเตอร์หลักของเกรดคาร์บอนกราไฟต์ Huahao Sealing เพื่อเปรียบเทียบเร็ว",
        },
        table: {
          columns: {
            zh: ["牌号", "浸渍类型", "密度 g/cm³", "耐温 ℃", "硬度 HS", "抗压 MPa", "适用工况"],
            en: ["Grade", "Impregnation", "Density g/cm³", "Temp °C", "Hardness HS", "Compressive MPa", "Service"],
            vi: ["Vật liệu", "Tẩm", "Mật độ g/cm³", "Nhiệt °C", "Độ cứng HS", "Nén MPa", "Ứng dụng"],
            th: ["เกรด", "อิมเพรกเนชัน", "ความหนาแน่น", "อุณหภูมิ", "ความแข็ง", "อัด", "การใช้งาน"],
          },
          rows: [
            {
              zh: ["M106H", "锑浸渍", "1.80", "500", "90", "300", "高温油泵、催化装置"],
              en: ["M106H", "Antimony", "1.80", "500", "90", "300", "High-temp oil pumps, FCC"],
              vi: ["M106H", "Antimony", "1.80", "500", "90", "300", "Bơm dầu nhiệt cao, FCC"],
              th: ["M106H", "Antimony", "1.80", "500", "90", "300", "ปั๊มน้ำมันร้อน FCC"],
            },
            {
              zh: ["M120H", "树脂浸渍", "1.78", "220", "85", "260", "通用化工、水溶液"],
              en: ["M120H", "Resin", "1.78", "220", "85", "260", "General chemical, aqueous"],
              vi: ["M120H", "Nhựa", "1.78", "220", "85", "260", "Hóa chất chung, nước"],
              th: ["M120H", "เรซิน", "1.78", "220", "85", "260", "เคมีทั่วไป น้ำ"],
            },
            {
              zh: ["M191T", "碳化处理", "1.85", "600", "95", "350", "极高温、含硫介质"],
              en: ["M191T", "Carbonized", "1.85", "600", "95", "350", "Extreme temp, sour media"],
              vi: ["M191T", "Carbonized", "1.85", "600", "95", "350", "Nhiệt cực, lưu huỳnh"],
              th: ["M191T", "คาร์บอนไนซ์", "1.85", "600", "95", "350", "ร้อนจัด กำมะถัน"],
            },
            {
              zh: ["M254J", "铜浸渍", "1.90", "400", "95", "320", "高载荷、重工况"],
              en: ["M254J", "Copper", "1.90", "400", "95", "320", "High load, heavy duty"],
              vi: ["M254J", "Đồng", "1.90", "400", "95", "320", "Tải cao, nặng"],
              th: ["M254J", "ทองแดง", "1.90", "400", "95", "320", "โหลดสูง หนัก"],
            },
            {
              zh: ["M254B", "巴氏合金", "1.85", "200", "80", "240", "低速重载、轴承"],
              en: ["M254B", "Babbitt", "1.85", "200", "80", "240", "Low-speed heavy, bearings"],
              vi: ["M254B", "Babbitt", "1.85", "200", "80", "240", "Tốc độ thấp, vòng bi"],
              th: ["M254B", "บาบิต", "1.85", "200", "80", "240", "ความเร็วต่ำ แบริ่ง"],
            },
            {
              zh: ["M233", "未浸渍", "1.70", "350", "70", "180", "食品级、低载荷"],
              en: ["M233", "Unimpregnated", "1.70", "350", "70", "180", "Food-grade, low load"],
              vi: ["M233", "Không tẩm", "1.70", "350", "70", "180", "Thực phẩm, tải thấp"],
              th: ["M233", "ไม่อิมเพรก", "1.70", "350", "70", "180", "อาหาร โหลดต่ำ"],
            },
          ],
        },
      },
      // 1.2 按温度选型
      {
        heading: {
          zh: "按工况温度选型",
          en: "Selection by Operating Temperature",
          vi: "Lựa chọn theo nhiệt độ vận hành",
          th: "เลือกตามอุณหภูมิการทำงาน",
        },
        intro: {
          zh: "工况温度是选型首要因素。温度超过牌号极限会导致浸渍剂分解、氧化失效。",
          en: "Operating temperature is the primary selection factor. Exceeding the grade limit causes impregnation decomposition and oxidation failure.",
          vi: "Nhiệt độ vận hành là yếu tố chọn chính. Vượt giới hạn gây phân hủy và oxy hóa.",
          th: "อุณหภูมิการทำงานเป็นปัจจัยหลัก ถ้าเกินขีดจำกัดทำให้สลายและออกซิไดซ์",
        },
        paragraphs: {
          zh: [
            "≤ 200℃：M120H 树脂浸渍、M254B 巴氏合金 — 适配水溶液、油品、一般化工。",
            "200-350℃：M233 未浸渍、M254J 铜浸渍 — 适配中温油泵、锅炉给水泵。",
            "350-500℃：M106H 锑浸渍 — 适配催化裂化油泵、压缩机密封、热油循环泵。",
            "500-600℃：M191T 碳化处理 — 适配 FCC 高温、含硫油品、极高温工况。",
            "-200℃ 以下：等静压石墨、低温牌号 — 适配 LNG、液氧、液氮低温工况。",
          ],
          en: [
            "≤ 200°C: M120H resin, M254B Babbitt — aqueous, oil, general chemical.",
            "200-350°C: M233 unimpregnated, M254J copper — mid-temp oil pumps, boiler feed.",
            "350-500°C: M106H antimony — FCC oil pumps, compressor seals, hot oil circulation.",
            "500-600°C: M191T carbonized — FCC high-temp, sour crude, extreme service.",
            "Below -200°C: Isostatic graphite, cryogenic grades — LNG, LOX, LN2.",
          ],
          vi: [
            "≤ 200°C: M120H nhựa, M254B — nước, dầu, hóa chất chung.",
            "200-350°C: M233, M254J đồng — bơm dầu trung, nồi hơi.",
            "350-500°C: M106H antimony — bơm FCC, nén, dầu nóng.",
            "500-600°C: M191T carbonized — FCC, lưu huỳnh, cực.",
            "Dưới -200°C: Isostatic, cryogenic — LNG, LOX, LN2.",
          ],
          th: [
            "≤ 200°C: M120H เรซิน M254B — น้ำ น้ำมัน เคมีทั่วไป",
            "200-350°C: M233 M254J ทองแดง — ปั๊มน้ำมัน หม้อไอน้ำ",
            "350-500°C: M106H antimony — ปั๊ม FCC คอมเพรสเซอร์ น้ำมันร้อน",
            "500-600°C: M191T — FCC กำมะถัน ร้อนจัด",
            "ต่ำกว่า -200°C: Isostatic cryogenic — LNG LOX LN2",
          ],
        },
      },
      // 1.3 按介质选型
      {
        heading: {
          zh: "按介质腐蚀性选型",
          en: "Selection by Media Corrosiveness",
          vi: "Lựa chọn theo mức ăn mòn",
          th: "เลือกตามการกัดกร่อนของสื่อ",
        },
        intro: {
          zh: "介质决定浸渍类型。强酸强碱需要树脂或碳化处理,含盐介质需要 SiC 配对面。",
          en: "Media determines impregnation type. Strong acids/alkalis need resin or carbonized; saline media needs SiC mating faces.",
          vi: "Môi trường quyết định loại tẩm. Axit/kiềm mạnh cần nhựa hoặc carbonized; môi trường mặn cần mặt SiC.",
          th: "สื่อกำหนดประเภทอิมเพรก กรด/ด่างแรงต้องเรซินหรือคาร์บอนไนซ์ สื่อเค็มต้อง SiC",
        },
        paragraphs: {
          zh: [
            "强酸 (HCl、H2SO4、HNO3)：M191T 碳化处理,化学惰性最强,耐所有浓度。",
            "强碱 (NaOH、KOH)：M120H 树脂浸渍或 M191T,耐 50% 浓度碱液。",
            "盐溶液 (NaCl、海水)：M254J 铜浸渍 + SiC 配对面,抗氯离子腐蚀。",
            "有机溶剂 (苯、丙酮、醇)：M120H 树脂浸渍,耐溶剂性能好。",
            "含硫油品 (H2S、含硫原油)：M191T 碳化处理,符合 NACE MR0175。",
          ],
          en: [
            "Strong acids (HCl, H2SO4, HNO3): M191T carbonized, strongest chemical inertness, all concentrations.",
            "Strong alkalis (NaOH, KOH): M120H resin or M191T, 50% concentration alkali.",
            "Salt solutions (NaCl, seawater): M254J copper + SiC mating face, chloride-ion resistance.",
            "Organic solvents (benzene, acetone, alcohol): M120H resin, good solvent resistance.",
            "Sour crude (H2S, sour crude): M191T carbonized, NACE MR0175 compliant.",
          ],
          vi: [
            "Axit mạnh (HCl, H2SO4, HNO3): M191T carbonized, trơ hóa học mạnh nhất.",
            "Kiềm mạnh (NaOH, KOH): M120H nhựa hoặc M191T, nồng độ 50%.",
            "Muối (NaCl, nước biển): M254J đồng + mặt SiC, chống chloride.",
            "Dung môi (benzene, acetone, cồn): M120H nhựa.",
            "Dầu lưu huỳnh (H2S): M191T carbonized, hợp NACE MR0175.",
          ],
          th: [
            "กรดแรง (HCl, H2SO4, HNO3): M191T carbonized เฉื่อยเคมีแรงสุด",
            "ด่างแรง (NaOH, KOH): M120H หรือ M191T ความเข้มข้น 50%",
            "สารละลายเกลือ (NaCl, น้ำทะเล): M254J ทองแดง + SiC ต้านคลอไรด์",
            "ตัวทำละลาย (เบนซีน อะซีโทน แอลกอฮอล์): M120H เรซิน",
            "น้ำมันกำมะถัน (H2S): M191T carbonized สอดคล้อง NACE MR0175",
          ],
        },
      },
      // 1.4 按压力选型
      {
        heading: {
          zh: "按 PV 值与压力选型",
          en: "Selection by PV Value & Pressure",
          vi: "Lựa chọn theo PV và áp suất",
          th: "เลือกตามค่า PV และแรงดัน",
        },
        intro: {
          zh: "PV 值（压力×速度）决定机械承载。高 PV 需金属浸渍增强韧性,防止热裂与剥落。",
          en: "PV value (pressure × velocity) determines mechanical load. High PV needs metal impregnation for toughness, preventing thermal cracking and spalling.",
          vi: "Giá trị PV (áp suất × tốc độ) quyết định tải cơ. PV cao cần tẩm kim loại, chống nứt nhiệt.",
          th: "ค่า PV (แรงดัน × ความเร็ว) กำหนดโหลดเชิงกล PV สูงต้องอิมเพรกโลหะป้องกันร้าว",
        },
        table: {
          columns: {
            zh: ["PV 值 MPa·m/s", "推荐牌号", "配对面", "应用"],
            en: ["PV MPa·m/s", "Grade", "Mating Face", "Application"],
            vi: ["PV MPa·m/s", "Vật liệu", "Mặt đối", "Ứng dụng"],
            th: ["PV MPa·m/s", "เกรด", "ผิวคู่", "การใช้งาน"],
          },
          rows: [
            {
              zh: ["≤ 5", "M120H 树脂浸渍", "不锈钢/碳化硅", "通用机械密封"],
              en: ["≤ 5", "M120H resin", "SS/SiC", "General mechanical seals"],
              vi: ["≤ 5", "M120H nhựa", "Thép/SiC", "Kín cơ khí chung"],
              th: ["≤ 5", "M120H เรซิน", "สแตนเลส/SiC", "ซีลทั่วไป"],
            },
            {
              zh: ["5-10", "M106H 锑浸渍", "碳化硅", "化工泵、油泵"],
              en: ["5-10", "M106H antimony", "SiC", "Chemical/oil pumps"],
              vi: ["5-10", "M106H antimony", "SiC", "Bơm hóa/dầu"],
              th: ["5-10", "M106H antimony", "SiC", "ปั๊มเคมี/น้ำมัน"],
            },
            {
              zh: ["10-15", "M254J 铜浸渍", "碳化硅/硬质合金", "高载荷压缩机"],
              en: ["10-15", "M254J copper", "SiC/carbide", "High-load compressors"],
              vi: ["10-15", "M254J đồng", "SiC/carbide", "Máy nén tải cao"],
              th: ["10-15", "M254J ทองแดง", "SiC/carbide", "คอมเพรสเซอร์โหลดสูง"],
            },
            {
              zh: ["15-25", "M191T 碳化处理", "碳化硅", "极重载荷工况"],
              en: ["15-25", "M191T carbonized", "SiC", "Extreme load service"],
              vi: ["15-25", "M191T carbonized", "SiC", "Tải cực"],
              th: ["15-25", "M191T carbonized", "SiC", "โหลดจัด"],
            },
          ],
        },
      },
      // 1.5 按应用场景选型
      {
        heading: {
          zh: "按应用场景选型",
          en: "Selection by Application",
          vi: "Lựa chọn theo ứng dụng",
          th: "เลือกตามการใช้งาน",
        },
        intro: {
          zh: "不同应用对密封件的要求不同。机械密封环看重摩擦磨损,轴套看重 PV 承载,轴承看重自润滑。",
          en: "Different applications impose different requirements. Mechanical seal rings emphasize friction/wear; bushings emphasize PV load; bearings emphasize self-lubrication.",
          vi: "Ứng dụng khác nhau yêu cầu khác nhau. Vòng kín cơ khí chú trọng ma sát; bạc chú trọng PV; vòng bi chú trọng tự bôi trơn.",
          th: "การใช้งานต่างกันต้องการต่างกัน ซีลกลเครื่องเน้นการสึก บุชชิ่งเน้น PV แบริ่งเน้นหล่อลื่นเอง",
        },
        paragraphs: {
          zh: [
            "机械密封环：M106H 锑浸渍 + SiC 配对面,适配 API 682 标准 Plan 11/23/53A 冲洗方案。",
            "碳石墨轴套：M254J 铜浸渍,高载荷、抗磨粒磨损,适配含颗粒介质泵。",
            "碳石墨轴承：M254B 巴氏合金,低速重载,自润滑免维护。",
            "压缩机密封：M106H 锑浸渍,耐高温、耐干运转,适配活塞杆密封。",
            "搅拌器轴承：M120H 树脂浸渍,耐腐蚀介质,适配反应釜搅拌轴。",
          ],
          en: [
            "Mechanical seal rings: M106H antimony + SiC mating face, API 682 Plan 11/23/53A.",
            "Carbon graphite bushings: M254J copper, high load, abrasive wear resistance.",
            "Carbon graphite bearings: M254B Babbitt, low-speed heavy, self-lubricating.",
            "Compressor seals: M106H antimony, high temp, dry running, piston rod sealing.",
            "Agitator bearings: M120H resin, corrosive media, reactor stirring shaft.",
          ],
          vi: [
            "Vòng kín cơ khí: M106H antimony + mặt SiC, API 682 Plan 11/23/53A.",
            "Bạc than chì: M254J đồng, tải cao, chống mài mòn.",
            "Vòng bi than chì: M254B babbitt, tốc độ thấp, tự bôi trơn.",
            "Kín máy nén: M106H antimony, nhiệt cao, chạy khô.",
            "Bạc khuấy: M120H nhựa, môi trường ăn mòn.",
          ],
          th: [
            "ซีลกลเครื่อง: M106H antimony + SiC API 682 Plan 11/23/53A",
            "บุชชิ่ง: M254J ทองแดง โหลดสูง ทนสึก",
            "แบริ่ง: M254B บาบิต ความเร็วต่ำ หล่อลื่นเอง",
            "ซีลคอมเพรสเซอร์: M106H antimony ร้อน วิ่งแห้ง",
            "บุชชิ่งกวน: M120H เรซิน ทนกัดกร่อน",
          ],
        },
      },
    ],
    faq: {
      zh: [
        { q: "如何快速确定适合我的牌号？", a: "按工况温度、介质、压力三步筛选：① 温度筛掉不达标牌号；② 介质腐蚀性筛掉不耐蚀牌号；③ PV 值筛掉承载不足牌号。剩余牌号按价格交货期选。可提交工况参数让工程师代选。" },
        { q: "M106H 与 M191T 如何选择？", a: "M106H 锑浸渍耐 500℃,适配一般高温油泵；M191T 碳化处理耐 600℃ 且化学惰性更强,适配极高温、含硫、强酸碱工况。M191T 价格略高,但极限工况必须用 M191T。" },
        { q: "SiC 配对面如何选？", a: "SiC（碳化硅）配对面硬度高、导热好、耐腐蚀,是碳石墨密封环的最佳对磨面。高 PV、含颗粒介质、强腐蚀工况必须配 SiC。一般工况也可用硬质合金或硬化不锈钢。" },
      ],
      en: [
        { q: "How to quickly choose the right grade?", a: "Filter in 3 steps: ① temperature eliminates grades below limit; ② media corrosiveness eliminates incompatible; ③ PV value eliminates insufficient load. Choose remaining by price/delivery. Engineers can help with parameters." },
        { q: "M106H vs M191T?", a: "M106H antimony (500°C) for general high-temp oil pumps. M191T carbonized (600°C, stronger chemical inertness) for extreme temp, sour, strong acid/alkali. M191T is slightly pricier but mandatory for extreme service." },
        { q: "How to choose SiC mating face?", a: "SiC (silicon carbide) is the best mating face for carbon graphite seal rings — high hardness, good conductivity, corrosion resistance. Mandatory for high PV, particulate media, strong corrosion. Carbide or hardened SS for general service." },
      ],
      vi: [
        { q: "Chọn vật liệu nhanh?", a: "Lọc 3 bước: nhiệt, môi trường, PV. Vật liệu còn lại chọn theo giá/giao." },
        { q: "M106H hay M191T?", a: "M106H antimony 500°C cho bơm dầu. M191T carbonized 600°C cho cực, lưu huỳnh, axit." },
        { q: "Mặt SiC?", a: "SiC cứng, dẫn nhiệt, chống mòn. Bắt buộc cho PV cao, mặn, axit." },
      ],
      th: [
        { q: "เลือกเกรดเร็ว?", a: "กรอง 3 ขั้น อุณหภูมิ สื่อ PV" },
        { q: "M106H หรือ M191T?", a: "M106H 500°C ทั่วไป M191T 600°C จัด" },
        { q: "ผิว SiC?", a: "SiC แข็ง นำความร้อน ทนกัดกร่อน" },
      ],
    },
  },

  // 2. 化学耐蚀性表
  {
    slug: "chemical-resistance-chart",
    title: {
      zh: "碳石墨化学耐蚀性表 | 酸碱盐溶剂介质耐蚀数据",
      en: "Carbon Graphite Chemical Resistance Chart | Acid, Alkali, Salt & Solvent Media Data",
      vi: "Bảng kháng hóa chất than chì carbon | Axit, kiềm, muối, dung môi",
      th: "ตารางต้านทานเคมีคาร์บอนกราไฟต์ | กรด ด่าง เกลือ ตัวทำละลาย",
    },
    description: {
      zh: "华豪密封碳石墨化学耐蚀性表：列出 40+ 种常见化学介质（酸/碱/盐/有机溶剂/气体）在不同浓度与温度下对 M106H/M120H/M191T/M254J 牌号的耐蚀等级（A 优秀/B 良好/C 有限/X 不推荐）。供化工泵、反应釜、压缩机密封选型参考。",
      en: "Huahao Sealing carbon graphite chemical resistance chart: 40+ common chemical media (acids/alkalis/salts/solvents/gases) across concentrations and temperatures, with A excellent / B good / C limited / X not recommended ratings for M106H/M120H/M191T/M254J grades. For chemical pumps, reactors, compressor seal selection.",
      vi: "Bảng kháng hóa chất than chì carbon Huahao: 40+ môi trường hóa chất, đánh giá A/B/C/X cho M106H/M120H/M191T/M254J. Cho bơm hóa chất, phản ứng, nén.",
      th: "ตารางต้านทานเคมีคาร์บอนกราไฟต์ Huahao: 40+ สื่อเคมี จัดอันดับ A/B/C/X สำหรับ M106H/M120H/M191T/M254J",
    },
    sections: [
      // 2.1 等级说明
      {
        heading: {
          zh: "耐蚀等级说明",
          en: "Rating System",
          vi: "Hệ thống đánh giá",
          th: "ระบบจัดอันดับ",
        },
        intro: {
          zh: "耐蚀性基于浸渍石墨在指定浓度与温度下浸渍 30 天后的重量变化、强度变化与外观变化综合评定。",
          en: "Ratings are based on impregnated graphite immersion for 30 days at specified concentration and temperature, evaluating weight change, strength change, and appearance.",
          vi: "Đánh giá dựa trên ngâm 30 ngày, đánh giá thay đổi khối lượng, cường độ, bề mặt.",
          th: "จัดอันดับจากการแช่ 30 วัน ประเมินการเปลี่ยนแปลง",
        },
        table: {
          columns: {
            zh: ["等级", "重量变化", "强度保留", "外观", "推荐"],
            en: ["Rating", "Weight Change", "Strength Retained", "Appearance", "Recommendation"],
            vi: ["Hạng", "Khối lượng", "Cường độ", "Bề mặt", "Khuyến nghị"],
            th: ["ระดับ", "น้ำหนัก", "ความแข็งแรง", "รูปลักษณ์", "คำแนะนำ"],
          },
          rows: [
            {
              zh: ["A 优秀", "< 1%", "> 95%", "无变化", "长期使用"],
              en: ["A Excellent", "< 1%", "> 95%", "No change", "Long-term"],
              vi: ["A Xuất sắc", "< 1%", "> 95%", "Không đổi", "Dài hạn"],
              th: ["A ดีมาก", "< 1%", "> 95%", "ไม่เปลี่ยน", "ระยะยาว"],
            },
            {
              zh: ["B 良好", "1-3%", "85-95%", "轻微变色", "推荐使用"],
              en: ["B Good", "1-3%", "85-95%", "Slight discoloration", "Recommended"],
              vi: ["B Tốt", "1-3%", "85-95%", "Đổi màu nhẹ", "Khuyến nghị"],
              th: ["B ดี", "1-3%", "85-95%", "เปลี่ยนสีเล็กน้อย", "แนะนำ"],
            },
            {
              zh: ["C 有限", "3-10%", "70-85%", "明显变色", "试验后用"],
              en: ["C Limited", "3-10%", "70-85%", "Significant discoloration", "After testing"],
              vi: ["C Hạn chế", "3-10%", "70-85%", "Đổi màu rõ", "Sau thử nghiệm"],
              th: ["C จำกัด", "3-10%", "70-85%", "เปลี่ยนสีชัด", "หลังทดสอบ"],
            },
            {
              zh: ["X 不推荐", "> 10%", "< 70%", "腐蚀严重", "不推荐"],
              en: ["X Not Recommended", "> 10%", "< 70%", "Severe corrosion", "Not recommended"],
              vi: ["X Không", "> 10%", "< 70%", "Ăn mòn nặng", "Không"],
              th: ["X ไม่แนะนำ", "> 10%", "< 70%", "กัดกร่อนหนัก", "ไม่แนะนำ"],
            },
          ],
        },
      },
      // 2.2 酸类介质
      {
        heading: {
          zh: "酸类介质耐蚀性",
          en: "Acid Media Resistance",
          vi: "Kháng axit",
          th: "ต้านกรด",
        },
        intro: {
          zh: "测试条件：常压、浓度 30%（除非另注）、温度 20℃。温度升高时耐蚀等级可能下调。",
          en: "Test conditions: atmospheric pressure, 30% concentration (unless noted), 20°C. Ratings may decrease at higher temperatures.",
          vi: "Điều kiện: áp suất thường, nồng độ 30%, 20°C. Nhiệt cao có thể giảm hạng.",
          th: "เงื่อนไข: ความดันบรรยากาศ 30% 20°C อุณหภูมิสูงอาจลดระดับ",
        },
        table: {
          columns: {
            zh: ["介质", "浓度 %", "温度 ℃", "M106H 锑", "M120H 树脂", "M191T 碳化"],
            en: ["Media", "Conc %", "Temp °C", "M106H Sb", "M120H Resin", "M191T Carb"],
            vi: ["Môi trường", "Nồng độ %", "Nhiệt °C", "M106H Sb", "M120H Nhựa", "M191T C"],
            th: ["สื่อ", "ความเข้มข้น %", "อุณหภูมิ °C", "M106H Sb", "M120H เรซิน", "M191T C"],
          },
          rows: [
            {
              zh: ["盐酸 HCl", "30", "20", "A", "B", "A"],
              en: ["Hydrochloric HCl", "30", "20", "A", "B", "A"],
              vi: ["HCl", "30", "20", "A", "B", "A"],
              th: ["HCl", "30", "20", "A", "B", "A"],
            },
            {
              zh: ["硫酸 H2SO4 稀", "10", "20", "A", "A", "A"],
              en: ["Sulfuric dilute", "10", "20", "A", "A", "A"],
              vi: ["H2SO4 loãng", "10", "20", "A", "A", "A"],
              th: ["H2SO4 เจือจาง", "10", "20", "A", "A", "A"],
            },
            {
              zh: ["硫酸 H2SO4 浓", "98", "20", "C", "X", "B"],
              en: ["Sulfuric conc.", "98", "20", "C", "X", "B"],
              vi: ["H2SO4 đặc", "98", "20", "C", "X", "B"],
              th: ["H2SO4 เข้มข้น", "98", "20", "C", "X", "B"],
            },
            {
              zh: ["硝酸 HNO3 稀", "10", "20", "B", "C", "A"],
              en: ["Nitric dilute", "10", "20", "B", "C", "A"],
              vi: ["HNO3 loãng", "10", "20", "B", "C", "A"],
              th: ["HNO3 เจือจาง", "10", "20", "B", "C", "A"],
            },
            {
              zh: ["硝酸 HNO3 浓", "60", "20", "X", "X", "C"],
              en: ["Nitric conc.", "60", "20", "X", "X", "C"],
              vi: ["HNO3 đặc", "60", "20", "X", "X", "C"],
              th: ["HNO3 เข้มข้น", "60", "20", "X", "X", "C"],
            },
            {
              zh: ["磷酸 H3PO4", "85", "20", "A", "A", "A"],
              en: ["Phosphoric H3PO4", "85", "20", "A", "A", "A"],
              vi: ["H3PO4", "85", "20", "A", "A", "A"],
              th: ["H3PO4", "85", "20", "A", "A", "A"],
            },
            {
              zh: ["氢氟酸 HF", "10", "20", "C", "C", "B"],
              en: ["Hydrofluoric HF", "10", "20", "C", "C", "B"],
              vi: ["HF", "10", "20", "C", "C", "B"],
              th: ["HF", "10", "20", "C", "C", "B"],
            },
            {
              zh: ["醋酸 CH3COOH", "100", "20", "A", "A", "A"],
              en: ["Acetic acid", "100", "20", "A", "A", "A"],
              vi: ["CH3COOH", "100", "20", "A", "A", "A"],
              th: ["กรดอะซิติก", "100", "20", "A", "A", "A"],
            },
          ],
        },
      },
      // 2.3 碱类介质
      {
        heading: {
          zh: "碱类介质耐蚀性",
          en: "Alkali Media Resistance",
          vi: "Kháng kiềm",
          th: "ต้านด่าง",
        },
        intro: {
          zh: "碳石墨本体耐碱性好,但树脂浸渍牌号在高温高浓度碱液中可能水解。",
          en: "Carbon graphite body has good alkali resistance, but resin-impregnated grades may hydrolyze in hot concentrated alkali.",
          vi: "Than chì vốn chịu kiềm tốt, nhưng M120H nhựa có thể thủy phân trong kiềm đặc nóng.",
          th: "คาร์บอนกราไฟต์ทนด่างดี แต่ M120H เรซินอาจไฮโดรไลซิสในด่างเข้มร้อน",
        },
        table: {
          columns: {
            zh: ["介质", "浓度 %", "温度 ℃", "M106H 锑", "M120H 树脂", "M191T 碳化"],
            en: ["Media", "Conc %", "Temp °C", "M106H Sb", "M120H Resin", "M191T Carb"],
            vi: ["Môi trường", "Nồng độ %", "Nhiệt °C", "M106H Sb", "M120H Nhựa", "M191T C"],
            th: ["สื่อ", "ความเข้มข้น %", "อุณหภูมิ °C", "M106H Sb", "M120H เรซิน", "M191T C"],
          },
          rows: [
            {
              zh: ["氢氧化钠 NaOH", "30", "20", "A", "A", "A"],
              en: ["Sodium hydroxide", "30", "20", "A", "A", "A"],
              vi: ["NaOH", "30", "20", "A", "A", "A"],
              th: ["NaOH", "30", "20", "A", "A", "A"],
            },
            {
              zh: ["氢氧化钠 NaOH", "50", "80", "B", "C", "A"],
              en: ["Sodium hydroxide", "50", "80", "B", "C", "A"],
              vi: ["NaOH", "50", "80", "B", "C", "A"],
              th: ["NaOH", "50", "80", "B", "C", "A"],
            },
            {
              zh: ["氢氧化钾 KOH", "30", "20", "A", "B", "A"],
              en: ["Potassium hydroxide", "30", "20", "A", "B", "A"],
              vi: ["KOH", "30", "20", "A", "B", "A"],
              th: ["KOH", "30", "20", "A", "B", "A"],
            },
            {
              zh: ["氨水 NH3·H2O", "25", "20", "A", "A", "A"],
              en: ["Ammonia water", "25", "20", "A", "A", "A"],
              vi: ["NH3·H2O", "25", "20", "A", "A", "A"],
              th: ["แอมโมเนีย", "25", "20", "A", "A", "A"],
            },
            {
              zh: ["碳酸钠 Na2CO3", "20", "20", "A", "A", "A"],
              en: ["Sodium carbonate", "20", "20", "A", "A", "A"],
              vi: ["Na2CO3", "20", "20", "A", "A", "A"],
              th: ["Na2CO3", "20", "20", "A", "A", "A"],
            },
            {
              zh: ["乙醇胺 MEA", "30", "20", "A", "B", "A"],
              en: ["Ethanolamine MEA", "30", "20", "A", "B", "A"],
              vi: ["MEA", "30", "20", "A", "B", "A"],
              th: ["MEA", "30", "20", "A", "B", "A"],
            },
          ],
        },
      },
      // 2.4 盐类介质
      {
        heading: {
          zh: "盐类介质耐蚀性",
          en: "Salt Solution Resistance",
          vi: "Kháng muối",
          th: "ต้านเกลือ",
        },
        intro: {
          zh: "盐溶液本身对碳石墨腐蚀轻,但氯离子会造成金属浸渍牌号的电化学腐蚀。",
          en: "Salt solutions cause minor corrosion to carbon graphite, but chloride ions cause galvanic corrosion in metal-impregnated grades.",
          vi: "Muối ít ăn mòn than chì, nhưng chloride gây ăn mòn điện hóa cho vật liệu tẩm kim loại.",
          th: "สารละลายเกลือกัดกร่อนคาร์บอนกราไฟต์น้อย แต่คลอไรด์กัดกร่อนกัลวานิกวัสดุอิมเพรกโลหะ",
        },
        table: {
          columns: {
            zh: ["介质", "浓度 %", "温度 ℃", "M106H 锑", "M254J 铜", "M191T 碳化"],
            en: ["Media", "Conc %", "Temp °C", "M106H Sb", "M254J Cu", "M191T Carb"],
            vi: ["Môi trường", "Nồng độ %", "Nhiệt °C", "M106H Sb", "M254J Cu", "M191T C"],
            th: ["สื่อ", "ความเข้มข้น %", "อุณหภูมิ °C", "M106H Sb", "M254J Cu", "M191T C"],
          },
          rows: [
            {
              zh: ["氯化钠 NaCl 海水", "3.5", "20", "B", "C", "A"],
              en: ["NaCl seawater", "3.5", "20", "B", "C", "A"],
              vi: ["NaCl biển", "3.5", "20", "B", "C", "A"],
              th: ["NaCl น้ำทะเล", "3.5", "20", "B", "C", "A"],
            },
            {
              zh: ["氯化钙 CaCl2", "30", "20", "B", "C", "A"],
              en: ["Calcium chloride", "30", "20", "B", "C", "A"],
              vi: ["CaCl2", "30", "20", "B", "C", "A"],
              th: ["CaCl2", "30", "20", "B", "C", "A"],
            },
            {
              zh: ["硫酸钠 Na2SO4", "20", "20", "A", "A", "A"],
              en: ["Sodium sulfate", "20", "20", "A", "A", "A"],
              vi: ["Na2SO4", "20", "20", "A", "A", "A"],
              th: ["Na2SO4", "20", "20", "A", "A", "A"],
            },
            {
              zh: ["硝酸钾 KNO3", "20", "20", "A", "A", "A"],
              en: ["Potassium nitrate", "20", "20", "A", "A", "A"],
              vi: ["KNO3", "20", "20", "A", "A", "A"],
              th: ["KNO3", "20", "20", "A", "A", "A"],
            },
            {
              zh: ["碳酸氢钠 NaHCO3", "10", "20", "A", "A", "A"],
              en: ["Sodium bicarbonate", "10", "20", "A", "A", "A"],
              vi: ["NaHCO3", "10", "20", "A", "A", "A"],
              th: ["NaHCO3", "10", "20", "A", "A", "A"],
            },
            {
              zh: ["次氯酸钠 NaClO", "5", "20", "C", "X", "B"],
              en: ["Sodium hypochlorite", "5", "20", "C", "X", "B"],
              vi: ["NaClO", "5", "20", "C", "X", "B"],
              th: ["NaClO", "5", "20", "C", "X", "B"],
            },
          ],
        },
      },
      // 2.5 有机溶剂
      {
        heading: {
          zh: "有机溶剂耐蚀性",
          en: "Organic Solvent Resistance",
          vi: "Kháng dung môi",
          th: "ต้านตัวทำละลาย",
        },
        intro: {
          zh: "碳石墨对绝大多数有机溶剂耐蚀性优秀,是石化、制药、精细化工首选密封材料。",
          en: "Carbon graphite has excellent resistance to most organic solvents, making it the preferred seal material for petrochemical, pharmaceutical and fine chemical industries.",
          vi: "Than chì kháng hầu hết dung môi, vật liệu kín hàng đầu cho hóa dầu, dược.",
          th: "คาร์บอนกราไฟต์ทนตัวทำละลายส่วนใหญ่ เป็นวัสดุซีลหลักสำหรับปิโตรเคมี",
        },
        table: {
          columns: {
            zh: ["介质", "浓度 %", "温度 ℃", "M106H 锑", "M120H 树脂", "M191T 碳化"],
            en: ["Media", "Conc %", "Temp °C", "M106H Sb", "M120H Resin", "M191T Carb"],
            vi: ["Môi trường", "Nồng độ %", "Nhiệt °C", "M106H Sb", "M120H Nhựa", "M191T C"],
            th: ["สื่อ", "ความเข้มข้น %", "อุณหภูมิ °C", "M106H Sb", "M120H เรซิน", "M191T C"],
          },
          rows: [
            {
              zh: ["苯 C6H6", "100", "20", "A", "A", "A"],
              en: ["Benzene", "100", "20", "A", "A", "A"],
              vi: ["Benzene", "100", "20", "A", "A", "A"],
              th: ["เบนซีน", "100", "20", "A", "A", "A"],
            },
            {
              zh: ["甲苯 C7H8", "100", "20", "A", "A", "A"],
              en: ["Toluene", "100", "20", "A", "A", "A"],
              vi: ["Toluene", "100", "20", "A", "A", "A"],
              th: ["โทลูอีน", "100", "20", "A", "A", "A"],
            },
            {
              zh: ["丙酮 (CH3)2CO", "100", "20", "A", "B", "A"],
              en: ["Acetone", "100", "20", "A", "B", "A"],
              vi: ["Acetone", "100", "20", "A", "B", "A"],
              th: ["อะซีโทน", "100", "20", "A", "B", "A"],
            },
            {
              zh: ["乙醇 C2H5OH", "100", "20", "A", "A", "A"],
              en: ["Ethanol", "100", "20", "A", "A", "A"],
              vi: ["Ethanol", "100", "20", "A", "A", "A"],
              th: ["เอทานอล", "100", "20", "A", "A", "A"],
            },
            {
              zh: ["甲醇 CH3OH", "100", "20", "A", "A", "A"],
              en: ["Methanol", "100", "20", "A", "A", "A"],
              vi: ["Methanol", "100", "20", "A", "A", "A"],
              th: ["เมทานอล", "100", "20", "A", "A", "A"],
            },
            {
              zh: ["汽油", "100", "20", "A", "A", "A"],
              en: ["Gasoline", "100", "20", "A", "A", "A"],
              vi: ["Xăng", "100", "20", "A", "A", "A"],
              th: ["น้ำมันเบนซิน", "100", "20", "A", "A", "A"],
            },
            {
              zh: ["原油", "100", "80", "A", "B", "A"],
              en: ["Crude oil", "100", "80", "A", "B", "A"],
              vi: ["Dầu thô", "100", "80", "A", "B", "A"],
              th: ["น้ำมันดิบ", "100", "80", "A", "B", "A"],
            },
          ],
        },
      },
    ],
    faq: {
      zh: [
        { q: "耐蚀等级 A 和 B 实际使用区别？", a: "A 级可长期使用,10 年以上寿命；B 级推荐使用,5-10 年寿命,需定期检查。两者均可用于生产设备,关键工况优先 A 级。" },
        { q: "为什么 M191T 在浓酸中表现更好？", a: "M191T 碳化处理在 1200℃ 以上完成石墨化,残留杂质极少,化学惰性接近完全石墨。树脂浸渍 M120H 的浸渍剂在强氧化性酸中会降解,故浓硝酸、浓硫酸工况必须用 M191T。" },
        { q: "温度升高对耐蚀性有何影响？", a: "温度每升高 50℃,化学反应速率约翻倍。常温 A 级在 80℃ 可能降为 B 级,150℃ 可能降为 C 级。高温工况建议参考高温数据或咨询工程师。" },
      ],
      en: [
        { q: "Difference between A and B ratings?", a: "A: long-term (10+ years). B: recommended (5-10 years) with periodic inspection. Both are production-ready; prefer A for critical service." },
        { q: "Why is M191T better in concentrated acids?", a: "M191T carbonized at 1200°C+ completes graphitization with minimal impurities, near-pure graphite inertness. Resin impregnation in M120H degrades in strong oxidizing acids, so M191T is mandatory for concentrated nitric/sulfuric." },
        { q: "Temperature effect on resistance?", a: "Reaction rate roughly doubles per 50°C increase. Room-temp A may drop to B at 80°C, C at 150°C. Consult high-temp data or engineers for high-temp service." },
      ],
      vi: [
        { q: "Khác nhau A và B?", a: "A: dài hạn 10+ năm. B: 5-10 năm, kiểm tra định kỳ." },
        { q: "Tại sao M191T tốt trong axit đặc?", a: "M191T carbonized 1200°C độ tinh khiết cao. M120H nhựa bị phân hủy trong axit oxy hóa." },
        { q: "Nhiệt độ ảnh hưởng?", a: "Tốc độ phản ứng tăng gấp đôi mỗi 50°C. A ở nhiệt thường có thể thành B ở 80°C." },
      ],
      th: [
        { q: "ต่างกัน A และ B?", a: "A: ระยะยาว 10+ ปี B: 5-10 ปี ตรวจเป็นระยะ" },
        { q: "ทำไม M191T ดีในกรดเข้มข้น?", a: "M191T carbonized 1200°C บริสุทธิ์สูง" },
        { q: "อุณหภูมิมีผล?", a: "อัตราปฏิกิริยาเพิ่มสองเท่าต่อ 50°C" },
      ],
    },
  },
]
