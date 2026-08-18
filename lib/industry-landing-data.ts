/**
 * 行业 Landing Page 数据
 * 模仿 graphalloy.com 策略 —— 每个行业一个独立 SEO landing page。
 * 10 个行业 × 4 语言（zh / en / vi / th），内容专业、技术性强。
 * 参考：锑浸渍石墨耐温 500℃、树脂浸渍耐温 220℃、碳化处理 600℃、SiC 配对面、API 标准、FDA 食品级。
 */

export interface IndustryLanding {
  slug: string
  title: { zh: string; en: string; vi?: string; th?: string }
  description: { zh: string; en: string; vi?: string; th?: string }
  challenges: { zh: string[]; en: string[]; vi?: string[]; th?: string[] }
  solutions: { zh: string[]; en: string[]; vi?: string[]; th?: string[] }
  specs: { label: string; value: string }[]
  relatedProducts: string[]
  faq: {
    zh: { q: string; a: string }[]
    en: { q: string; a: string }[]
    vi?: { q: string; a: string }[]
    th?: { q: string; a: string }[]
  }
}

export const industryLandings: IndustryLanding[] = [
  // 1. 石油炼化
  {
    slug: "petroleum-refining",
    title: {
      zh: "石油炼化碳石墨密封环 | 高温油泵与催化装置机械密封",
      en: "Petroleum Refining Carbon Graphite Seal Rings | High-Temp Oil Pump & Catalytic Unit Mechanical Seals",
      vi: "Vòng đệm than chì carbon cho lọc dầu | Bơm dầu nhiệt độ cao & thiết bị xúc tác",
      th: "แหวนซีลคาร์บอนกราไฟต์สำหรับการกลั่นน้ำมัน | ปั๊มน้ำมันอุณหภูมิสูงและอุปกรณ์ตัวเร่งปฏิกิริยา",
    },
    description: {
      zh: "华豪密封为石油炼化行业提供碳石墨密封环、轴套与轴承，锑浸渍牌号耐温500℃，碳化处理牌号达600℃，适配催化裂化油泵、常减压塔底泵、含硫油品输送泵等严苛工况，满足API 682标准要求。",
      en: "Huahao Sealing supplies carbon graphite seal rings, bushings and bearings for petroleum refining. Antimony-impregnated grades handle 500°C, carbonized grades reach 600°C for FCC pumps, vacuum bottom pumps and sour crude service, meeting API 682 requirements.",
      vi: "Huahao Sealing cung cấp vòng đệm than chì carbon, bạc lót và vòng bi cho ngành lọc dầu. Vật liệu impregnation antimony chịu 500°C, carbonized đạt 600°C cho bơm FCC, bơm chân không và dầu lưu huỳnh, đáp ứng API 682.",
      th: "Huahao Sealing จัดหาแหวนซีลคาร์บอนกราไฟต์ บุชชิ่งและแบริ่งสำหรับอุตสาหกรรมกลั่นน้ำมัน วัสดุ impregnation antimony ทน 500°C แบบ carbonized ถึง 600°C สำหรับปั๊ม FCC ปั๊มสุญญากาศและน้ำมันกำมะถัน ตามมาตรฐาน API 682",
    },
    challenges: {
      zh: [
        "催化裂化装置油泵长期在350-450℃高温下运行，普通密封材料热失稳、氧化失效",
        "含硫油品与酸性水腐蚀性强，金属轴承发生电化学腐蚀与硫化",
        "常减压塔底泵输送高温重油，含催化剂粉末颗粒，造成磨粒磨损",
        "频繁启停与热循环导致密封面翘曲变形、泄漏",
      ],
      en: [
        "FCC unit oil pumps run continuously at 350-450°C; standard seal materials suffer thermal instability and oxidation failure",
        "Sour crude and sour water are highly corrosive; metallic bearings suffer galvanic corrosion and sulfidation",
        "Vacuum tower bottom pumps handle hot residuum laden with catalyst fines, causing abrasive wear",
        "Frequent start-stop and thermal cycling warp seal faces and cause leakage",
      ],
      vi: [
        "Bơm FCC hoạt động liên tục ở 350-450°C; vật liệu kín thông thường bị mất ổn định nhiệt và oxy hóa",
        "Dầu lưu huỳnh và nước chua rất ăn mòn; bạc kim loại bị ăn mòn điện hóa và sunfua",
        "Bơm chân không chươc cặn nóng chứa bột xúc tác gây mài mòn",
        "Khởi động-dừng thường xuyên và chu kỳ nhiệt làm cong vênh bề mặt kín gây rò rỉ",
      ],
      th: [
        "ปั๊ม FCC ทำงานต่อเนื่องที่ 350-450°C วัสดุซีลมาตรฐานไม่เสถียรทางความร้อนและเกิดออกซิเดชัน",
        "น้ำมันกำมะถันและน้ำเปรี้ยวกัดกร่อนสูง แบริ่งโลหะเกิดการกัดกร่อนกัลวานิกและซัลไฟด์",
        "ปั๊มสุญญากาศส่งกากน้ำมันร้อนที่มีเศษตัวเร่งปฏิกิริยาก่อให้เกิดการสึกกร่อน",
        "การเปิด-ปิดบ่อยและวงจรความร้อนทำให้ผิวซีลงอและรั่ว",
      ],
    },
    solutions: {
      zh: [
        "锑浸渍石墨牌号（M106H）耐温500℃，抗氧化处理适配催化装置高温油泵",
        "碳化处理石墨牌号（M191T）耐温600℃，化学惰性抵抗含硫介质腐蚀",
        "碳石墨配对SiC（碳化硅）端面，导热率高散热快，防止热斑与热裂",
        "API 682标准密封腔尺寸，可直接替换Plan 11/23/53A冲洗方案下的原厂密封",
      ],
      en: [
        "Antimony-impregnated graphite grade (M106H) rated 500°C with anti-oxidation treatment for FCC high-temp pumps",
        "Carbonized graphite grade (M191T) rated 600°C with chemical inertness against sour media corrosion",
        "Carbon graphite paired with SiC mating face provides high thermal conductivity, preventing hot spots and thermal cracking",
        "API 682 standard seal chamber dimensions, drop-in replacement under Plan 11/23/53A flush configurations",
      ],
      vi: [
        "Vật liệu than chì impregnation antimony (M106H) chịu 500°C với xử lý chống oxy hóa cho bơm FCC nhiệt cao",
        "Vật liệu than chì carbonized (M191T) chịu 600°C trơ về hóa học chống ăn mòn dầu lưu huỳnh",
        "Than chì carbon ghép cặp với mặt SiC dẫn nhiệt cao chống điểm nóng và nứt nhiệt",
        "Kích thước buồng kín API 682 thay thế trực tiếp theo sơ đồ xả Plan 11/23/53A",
      ],
      th: [
        "วัสดุกราไฟต์ impregnation antimony (M106H) ทน 500°C ป้องกันออกซิเดชันสำหรับปั๊ม FCC อุณหภูมิสูง",
        "วัสดุกราไฟต์ carbonized (M191T) ทน 600°C มีความเฉื่อยทางเคมีต้านการกัดกร่อนจากน้ำมันกำมะถัน",
        "กราไฟต์คาร์บอนจับคู่กับผิว SiC นำความร้อนสูง ป้องกันจุดร้อนและรอยร้าวจากความร้อน",
        "ขนาดห้องซีล API 682 เปลี่ยนตรงได้ภายใต้แผนล้าง Plan 11/23/53A",
      ],
    },
    specs: [
      { label: "Temperature", value: "-50°C ~ 600°C" },
      { label: "Pressure", value: "≤ 25 MPa (API 682)" },
      { label: "Speed", value: "≤ 25 m/s" },
      { label: "Media", value: "Crude oil, sour gas, catalyst fines" },
      { label: "Grade", value: "M106H (Sb) / M191T (Carbonized)" },
      { label: "Mating Face", value: "SiC / WC" },
    ],
    relatedProducts: ["oil-pump-double-seal", "206-series", "m7n-series", "graphite-bushing"],
    faq: {
      zh: [
        { q: "碳石墨密封环在含硫油品中会腐蚀吗？", a: "不会。经过碳化处理的碳石墨牌号（M191T）在含硫油品和酸性水中保持化学惰性，硫离子不会侵蚀石墨基体，长期运行无溶胀、无点蚀。" },
        { q: "催化裂化装置450℃高温工况选什么牌号？", a: "推荐M106H锑浸渍牌号，耐温500℃，配有抗氧化处理。若工况温度可达550-600℃，选M191T碳化处理牌号。两者均配对SiC端面使用。" },
        { q: "是否满足API 682标准要求？", a: "是。我们的密封环尺寸符合API 682标准密封腔规范，可直接用于Plan 11/23/53A冲洗方案，替换原厂密封件无需改造腔体。" },
        { q: "含催化剂颗粒的塔底泵如何避免磨粒磨损？", a: "推荐选用高硬度浸锑石墨牌号配SiC端面，石墨自润滑降低摩擦热，SiC高硬度抵抗颗粒冲刷。必要时密封面开槽设计排出颗粒。" },
      ],
      en: [
        { q: "Will carbon graphite seal rings corrode in sour crude service?", a: "No. Carbonized graphite grades (M191T) remain chemically inert in sour crude and sour water. Sulfur ions do not attack the graphite matrix, with no swelling or pitting over long-term operation." },
        { q: "Which grade is recommended for FCC unit 450°C service?", a: "M106H antimony-impregnated grade rated 500°C with anti-oxidation treatment. For 550-600°C service, select M191T carbonized grade. Both pair with SiC mating faces." },
        { q: "Do your seals meet API 682 standard requirements?", a: "Yes. Our seal ring dimensions comply with API 682 seal chamber specifications and drop into Plan 11/23/53A flush configurations without chamber modification." },
        { q: "How to prevent abrasive wear in catalyst-laden vacuum bottom pumps?", a: "Select high-hardness antimony-impregnated graphite paired with SiC face. Graphite self-lubrication reduces friction heat, SiC hardness resists particle erosion. Optional face grooving discharges particles." },
      ],
      vi: [
        { q: "Vòng đệm than chì carbon có bị ăn mòn trong dầu lưu huỳnh không?", a: "Không. Vật liệu than chì carbonized (M191T) trơ về hóa học trong dầu lưu huỳnh và nước chua, ion lưu huỳnh không tấn công nền than chì, không trương nở hay rỗ bề mặt." },
        { q: "Nên chọn vật liệu nào cho thiết bị FCC 450°C?", a: "M106H impregnation antimony chịu 500°C có xử lý chống oxy hóa. Cho 550-600°C chọn M191T carbonized. Cả hai ghép với mặt SiC." },
        { q: "Có đáp ứng tiêu chuẩn API 682 không?", a: "Có. Kích thước vòng kín đáp ứng thông số buồng kín API 682, thay thế trực tiếp sơ đồ xả Plan 11/23/53A mà không cần cải tạo." },
        { q: "Cách chống mài mòn cho bơm chân không có bột xúc tác?", a: "Chọn vật liệu impregnation antimony độ cứng cao ghép mặt SiC. Tự bôi trơn giảm ma sát, SiC cứng chống mài mòn. Có thể khắc rãnh xả hạt." },
      ],
      th: [
        { q: "แหวนซีลคาร์บอนกราไฟต์จะถูกกัดกร่อนในน้ำมันกำมะถันหรือไม่?", a: "ไม่ วัสดุกราไฟต์ carbonized (M191T) มีความเฉื่อยทางเคมีในน้ำมันกำมะถันและน้ำเปรี้ยว ไอออนกำมะถันไม่ทำลายเมทริกซ์กราไฟต์ ไม่บวมหรือเป็นรู" },
        { q: "ควรเลือกวัสดุใดสำหรับอุปกรณ์ FCC 450°C?", a: "M106H antimony impregnation ทน 500°C ป้องกันออกซิเดชัน สำหรับ 550-600°C เลือก M191T carbonized ทั้งสองจับคู่กับผิว SiC" },
        { q: "ผลิตภัณฑ์ตรงมาตรฐาน API 682 หรือไม่?", a: "ใช่ ขนาดวงซีลตรงมาตรฐาน API 682 เปลี่ยนตรงได้ภายใต้แผนล้าง Plan 11/23/53A โดยไม่ต้องดัดแปลง" },
        { q: "วิธีป้องกันการสึกกร่อนในปั๊มสุญญากาศที่มีเศษตัวเร่งปฏิกิริยา?", a: "เลือกกราไฟต์ antimony impregnation ความแข็งสูงจับคู่ SiC ตัวหล่อลื่นตัวเองลดความร้อนจากการเสียดทาน SiC แข็งต้านการกัดกร่อน สามารถเจาะร่องเพื่อขับเศษ" },
      ],
    },
  },

  // 2. 化肥化工
  {
    slug: "fertilizer",
    title: {
      zh: "化肥化工碳石墨密封件 | 合成氨尿素装置耐腐蚀机械密封",
      en: "Fertilizer & Chemical Carbon Graphite Seals | Ammonia/Urea Plant Corrosion-Resistant Mechanical Seals",
      vi: "Vòng đệm than chì carbon cho hóa chất & phân bón | Bền ăn mòn cho nhà máy amoni/ure",
      th: "แหวนซีลคาร์บอนกราไฟต์สำหรับปุ๋ยและเคมี | ทนการกัดกร่อนสำหรับโรงงานแอมโมเนีย/ยูเรีย",
    },
    description: {
      zh: "华豪密封为合成氨、尿素、磷肥等化肥化工装置提供碳石墨密封环与轴承，树脂浸渍牌号耐温220℃且耐受氨、尿素液、磷酸、碱液腐蚀，碳化处理牌号达600℃，适配高压甲铵泵、氨泵、磷浆泵等关键设备。",
      en: "Huahao Sealing provides carbon graphite seal rings and bearings for ammonia, urea and phosphate fertilizer plants. Resin-impregnated grades handle 220°C with resistance to ammonia, urea liquor, phosphoric acid and caustic; carbonized grades reach 600°C for high-pressure carbamate pumps and ammonia service.",
      vi: "Huahao Sealing cung cấp vòng đệm than chì carbon và vòng bi cho nhà máy amoni, ure và phân lân. Vật liệu resin impregnation chịu 220°C kháng amoni, dung dịch ure, axit photphoric và kiềm; vật liệu carbonized đạt 600°C cho bơm carbamate áp cao và amoni.",
      th: "Huahao Sealing จัดหาแหวนซีลและแบริ่งคาร์บอนกราไฟต์สำหรับโรงงานแอมโมเนีย ยูเรียและฟอสเฟต วัสดุ resin impregnation ทน 220°C ต้านแอมโมเนีย ยูเรีย กรดฟอสฟอริกและด่าง วัสดุ carbonized ถึง 600°C สำหรับปั๊ม carbamate แรงดันสูง",
    },
    challenges: {
      zh: [
        "高压甲铵泵输送15-25 MPa的甲铵液，极具腐蚀性，普通金属轴承点蚀失效",
        "合成氨装置氢气环境高温高压，密封材料氢脆、渗氢失效",
        "尿素熔融液温度140-180℃，易结晶卡滞密封腔",
        "磷浆泵输送含固体颗粒的磷酸料浆，磨粒磨损严重",
      ],
      en: [
        "High-pressure carbamate pumps handle 15-25 MPa carbamate liquor — extremely corrosive; standard metallic bearings suffer pitting failure",
        "Ammonia synthesis operates in high-temp high-pressure hydrogen; seal materials suffer hydrogen embrittlement and permeation",
        "Urea melt at 140-180°C tends to crystallize and seize the seal chamber",
        "Phosphate slurry pumps convey phosphoric acid slurry with solids, causing severe abrasive wear",
      ],
      vi: [
        "Bơm carbamate áp cao truyền dung dịch carbamate 15-25 MPa cực kỳ ăn mòn; bạc kim loại thông thường bị rỗ",
        "Thiết bị tổng hợp amoni hoạt động trong hydro nhiệt-áp cao; vật liệu kín bị giòn hydro và thấm hydro",
        "Nước ure nóng chảy 140-180°C dễ kết tinh kẹt buồng kín",
        "Bơm bùn lân truyền dung dịch axit photphoric có hạt rắn gây mài mòn nặng",
      ],
      th: [
        "ปั๊ม carbamate แรงดันสูงส่งของเหลว carbamate 15-25 MPa กัดกร่อนรุนแรง แบริ่งโลหะมาตรฐานเป็นรู",
        "อุปกรณ์สังเคราะห์แอมโมเนียทำงานในไฮโดรเจนที่อุณหภูมิและแรงดันสูง วัสดุซีลเกิดการเปราะและซึมไฮโดรเจน",
        "ยูเรียหลอมเหลวที่ 140-180°C ตกผลึกและติดในห้องซีล",
        "ปั๊มบูนฟอสเฟตส่งกรดฟอสฟอริกที่มีเศษวัสดุทำให้สึกกร่อนหนัก",
      ],
    },
    solutions: {
      zh: [
        "树脂浸渍石墨牌号（M106K）耐温220℃，化学惰性耐受甲铵液、氨液、尿素液腐蚀",
        "碳化处理石墨牌号（M191T）耐温600℃，抗氢脆，适配合成氨高温高压段",
        "碳石墨自润滑免外部润滑，避免尿素结晶在润滑通道沉积卡滞",
        "配对SiC端面高硬度，抵抗磷浆中固体颗粒磨粒磨损",
      ],
      en: [
        "Resin-impregnated graphite grade (M106K) rated 220°C, chemically inert against carbamate, ammonia and urea liquor corrosion",
        "Carbonized graphite grade (M191T) rated 600°C, hydrogen-embrittlement resistant for high-temp high-pressure ammonia synthesis sections",
        "Carbon graphite self-lubrication eliminates external lubricant, avoiding urea crystallization deposition and seizure in lube channels",
        "Paired with SiC mating face of high hardness to resist abrasive wear from phosphate slurry solids",
      ],
      vi: [
        "Vật liệu resin impregnation (M106K) chịu 220°C trơ hóa học chống ăn mòn carbamate amoni và dung dịch ure",
        "Vật liệu carbonized (M191T) chịu 600°C chống giòn hydro cho đoạn nhiệt-áp cao tổng hợp amoni",
        "Tự bôi trơn không cần bôi trơn ngoài tránh ure kết tinh lắng kẹt kênh bôi trơn",
        "Ghép mặt SiC độ cứng cao chống mài mòn hạt rắn trong bùn lân",
      ],
      th: [
        "วัสดุ resin impregnation (M106K) ทน 220°C เฉื่อยทางเคมีต้านการกัดกร่อน carbamate แอมโมเนียและยูเรีย",
        "วัสดุ carbonized (M191T) ทน 600°C ต้านการเปราะไฮโดรเจนสำหรับส่วนอุณหภูมิและแรงดันสูงของการสังเคราะห์แอมโมเนีย",
        "ตัวหล่อลื่นตัวเองไม่ต้องหล่อลื่นภายนอก หลีกเลี่ยงการตกผลึกของยูเรียติดในช่องหล่อลื่น",
        "จับคู่ผิว SiC ความแข็งสูงต้านการสึกกร่อนจากเศษในบูนฟอสเฟต",
      ],
    },
    specs: [
      { label: "Temperature", value: "-50°C ~ 600°C" },
      { label: "Pressure", value: "≤ 25 MPa" },
      { label: "Speed", value: "≤ 20 m/s" },
      { label: "Media", value: "Ammonia, urea, carbamate, phosphoric acid" },
      { label: "Grade", value: "M106K (Resin) / M191T (Carbonized)" },
      { label: "pH Range", value: "0-14" },
    ],
    relatedProducts: ["m7n-series", "206-series", "graphite-bearing", "58b-series"],
    faq: {
      zh: [
        { q: "高压甲铵泵密封选什么牌号？", a: "推荐M106K树脂浸渍牌号，耐温220℃，化学惰性耐受甲铵液腐蚀。配对SiC端面，密封腔需带冲洗接口防止结晶。" },
        { q: "合成氨高温段400-500℃用什么材料？", a: "选M191T碳化处理牌号，耐温600℃，抗氢脆、抗渗氢。碳石墨在氢气环境中保持化学稳定，不会发生氢脆失效。" },
        { q: "尿素结晶卡滞密封腔如何解决？", a: "碳石墨自润滑无需外部润滑脂，避免尿素在润滑通道结晶沉积。密封腔建议配置蒸汽保温夹套或低压蒸汽吹扫。" },
        { q: "磷浆泵密封寿命短怎么办？", a: "选M106H浸锑牌号配SiC端面。SiC硬度达HV2500，抵抗磷酸料浆中固体颗粒冲刷；石墨自润滑降低摩擦热，延长密封寿命3-6倍。" },
      ],
      en: [
        { q: "Which grade for high-pressure carbamate pump seals?", a: "M106K resin-impregnated grade rated 220°C, chemically inert against carbamate corrosion. Pair with SiC face; seal chamber needs flush port to prevent crystallization." },
        { q: "What material for ammonia synthesis high-temp 400-500°C section?", a: "M191T carbonized grade rated 600°C, hydrogen-embrittlement and permeation resistant. Carbon graphite remains chemically stable in hydrogen service without embrittlement failure." },
        { q: "How to resolve urea crystallization seizing in seal chamber?", a: "Carbon graphite self-lubrication eliminates external grease, avoiding urea deposition in lube channels. Seal chamber should use steam jacket or low-pressure steam purge." },
        { q: "Short seal life on phosphate slurry pumps?", a: "Select M106H antimony grade with SiC face. SiC hardness HV2500 resists slurry solids erosion; graphite self-lubrication reduces friction heat, extending seal life 3-6×." },
      ],
      vi: [
        { q: "Vật liệu nào cho vòng kín bơm carbamate áp cao?", a: "M106K resin impregnation chịu 220°C trơ hóa học chống ăn mòn carbamate. Ghép mặt SiC; buồng kín cần cổng xả chống kết tinh." },
        { q: "Vật liệu nào cho đoạn nhiệt cao 400-500°C tổng hợp amoni?", a: "M191T carbonized chịu 600°C chống giòn và thấm hydro. Than chì ổn định hóa học trong môi trường hydro không giòn." },
        { q: "Cách xử lý ure kết tinh kẹt buồng kín?", a: "Tự bôi trơn than chì không cần mỡ ngoài tránh lắng ure. Buồng kín nên có áo hơi hoặc xả hơi áp thấp." },
        { q: "Tuổi thọ kín bơm bùn lân ngắn?", a: "Chọn M106H impregnation antimony ghép mặt SiC. SiC cứng HV2500 chống hạt rắn; tự bôi trơn giảm nhiệt kéo dài tuổi thọ 3-6 lần." },
      ],
      th: [
        { q: "วัสดุใดสำหรับซีลปั๊ม carbamate แรงดันสูง?", a: "M106K resin impregnation ทน 220°C เฉื่อยทางเคมีต้านการกัดกร่อน carbamate จับคู่ SiC ห้องซีลต้องมีรูล้างป้องกันการตกผลึก" },
        { q: "วัสดุใดสำหรับส่วนอุณหภูมิสูง 400-500°C ของการสังเคราะห์แอมโมเนีย?", a: "M191T carbonized ทน 600°C ต้านการเปราะและซึมไฮโดรเจน กราไฟต์เสถียรทางเคมีในไฮโดรเจนไม่เปราะ" },
        { q: "วิธีแก้ยูเรียตกผลึกติดในห้องซีล?", a: "ตัวหล่อลื่นตัวเองของกราไฟต์ไม่ต้องใช้จารบีภายนอก หลีกเลี่ยงการตกผลึก ห้องซีลควรมีแจ็กเก็ตไอน้ำหรือไล่ไอ" },
        { q: "อายุซีลปั๊มบูนฟอสเฟตสั้น?", a: "เลือก M106H antimony impregnation จับคู่ SiC SiC แข็ง HV2500 ต้านเศษ; ตัวหล่อลื่นตัวเองลดความร้อนยืดอายุ 3-6 เท่า" },
      ],
    },
  },

  // 3. 造纸
  {
    slug: "pulp-paper",
    title: {
      zh: "造纸行业碳石墨密封与轴承 | 黑液泵与烘缸冷凝水密封方案",
      en: "Pulp & Paper Carbon Graphite Seals & Bearings | Black Liquor Pump & Dryer Condensate Sealing Solutions",
      vi: "Vòng đệm & vòng bi than chì carbon cho giấy | Bơm dung dịch đen và ngưng tụ烘 cuộn",
      th: "ซีลและแบริ่งคาร์บอนกราไฟต์สำหรับกระดาษ | ปั๊มของเหลวดำและคอนเดนเสทลูกกลิ้งอบแห้ง",
    },
    description: {
      zh: "华豪密封为造纸行业提供碳石墨密封环、轴套与推力盘，适配黑液泵、白液泵、烘缸冷凝水排出泵、压榨辊轴承等关键设备。浸锑牌号耐温500℃，耐碱液腐蚀，抗纤维与填料颗粒磨粒磨损，延长大修周期至12个月以上。",
      en: "Huahao Sealing provides carbon graphite seal rings, bushings and thrust discs for the pulp & paper industry — black liquor pumps, white liquor pumps, dryer condensate pumps and press roll bearings. Antimony grades handle 500°C, resist caustic corrosion and abrasive fiber/filler wear, extending overhaul cycles beyond 12 months.",
      vi: "Huahao Sealing cung cấp vòng đệm, bạc lót và đĩa hãm than chì carbon cho ngành giấy — bơm dung dịch đen, bơm dung dịch trắng, bơm ngưng tụ烘 cuộn và vòng bi trục ép. Vật liệu antimony chịu 500°C, kháng kiềm và mài mòn sợi, kéo dài chu kỳ đại tu quá 12 tháng.",
      th: "Huahao Sealing จัดหาแหวนซีล บุชชิ่งและจานหนุนคาร์บอนกราไฟต์สำหรับอุตสาหกรรมกระดาษ — ปั๊มของเหลวดำ ปั๊มของเหลวขาว ปั๊มคอนเดนเสทลูกกลิ้งอบแห้งและแบริ่งลูกกลิ้งอัด วัสดุ antimony ทน 500°C ต้านด่างและการสึกจากเส้นใย ยืดอายุการซ่อมใหญ่เกิน 12 เดือน",
    },
    challenges: {
      zh: [
        "黑液泵输送浓度50-65%的黑液，含碱(NaOH/Na₂S)和有机物，温度120-180℃，腐蚀与磨损并存",
        "烘缸冷凝水排出泵在蒸汽环境150-200℃运行，密封件高温氧化、失弹",
        "白液泵输送强碱液(pH 13-14)，金属轴承发生碱脆与腐蚀",
        "浆料含纤维和填料颗粒，进入密封面形成磨粒磨损",
      ],
      en: [
        "Black liquor pumps handle 50-65% concentration black liquor with caustic (NaOH/Na₂S) and organics at 120-180°C — corrosion and wear coexist",
        "Dryer condensate pumps run in steam environments at 150-200°C; seals suffer high-temp oxidation and elasticity loss",
        "White liquor pumps carry strong caustic (pH 13-14); metallic bearings suffer caustic embrittlement and corrosion",
        "Pulp stock carries fiber and filler particles that intrude into seal faces, causing abrasive wear",
      ],
      vi: [
        "Bơm dung dịch đen truyền nồng độ 50-65% có kiềm (NaOH/Na₂S) và hữu cơ ở 120-180°C — ăn mòn và mài mòn cùng tồn tại",
        "Bơm ngưng tụ烘 cuộn hoạt động trong hơi 150-200°C; vòng kín bị oxy hóa nhiệt và mất đàn hồi",
        "Bơm dung dịch trắng truyền kiềm mạnh (pH 13-14); bạc kim loại bị giòn kiềm và ăn mòn",
        "Bột giấy có sợi và hạt fillers lọt vào mặt kín gây mài mòn",
      ],
      th: [
        "ปั๊มของเหลวดำส่งของเหลวดำ 50-65% ที่มีด่าง (NaOH/Na₂S) และสารอินทรีย์ที่ 120-180°C กัดกร่อนและสึกกร่อนพร้อมกัน",
        "ปั๊มคอนเดนเสทลูกกลิ้งอบแห้งทำงานในไอน้ำที่ 150-200°C ซีลเกิดออกซิเดชันและสูญเสียความยืดหยุ่น",
        "ปั๊มของเหลวขาวส่งด่างเข้มข้น (pH 13-14) แบริ่งโลหะเกิดการเปราะและกัดกร่อน",
        "เยื่อกระดาษมีเส้นใยและฟิลเลอร์เข้าสู่ผิวซีลทำให้สึกกร่อน",
      ],
    },
    solutions: {
      zh: [
        "浸锑石墨牌号（M106H）耐温500℃，化学惰性耐受黑液/白液碱液腐蚀",
        "碳石墨自润滑避免纤维颗粒在润滑通道沉积，减少密封面磨粒磨损",
        "配对SiC端面硬度HV2500，抵抗纤维与填料颗粒冲刷",
        "石墨推力盘承受轴向载荷，适配立式烘缸冷凝水泵，免润滑长期运行",
      ],
      en: [
        "Antimony-impregnated graphite grade (M106H) rated 500°C, chemically inert against black/white liquor caustic corrosion",
        "Carbon graphite self-lubrication prevents fiber particle deposition in lube channels, reducing abrasive face wear",
        "Paired with SiC mating face hardness HV2500, resisting fiber and filler particle erosion",
        "Graphite thrust discs handle axial loads in vertical dryer condensate pumps, operating lubricant-free long-term",
      ],
      vi: [
        "Vật liệu antimony impregnation (M106H) chịu 500°C trơ hóa học chống kiềm dung dịch đen/trắng",
        "Tự bôi trơn than chì tránh sợi lắng trong kênh bôi trơn giảm mài mòn mặt kín",
        "Ghép mặt SiC cứng HV2500 chống mài mòn sợi và hạt fillers",
        "Đĩa hãm than chì chịu tải trục cho bơm ngưng tụ烘 cuộn đứng chạy không bôi trơn dài hạn",
      ],
      th: [
        "วัสดุ antimony impregnation (M106H) ทน 500°C เฉื่อยทางเคมีต้านด่างของเหลวดำ/ขาว",
        "ตัวหล่อลื่นตัวเองของกราไฟต์ป้องกันเส้นใยตกตะกอนในช่องหล่อลื่น ลดการสึกของผิวซีล",
        "จับคู่ผิว SiC ความแข็ง HV2500 ต้านการกัดกร่อนจากเส้นใยและฟิลเลอร์",
        "จานหนุนกราไฟต์รับแรงแกนในปั๊มคอนเดนเสทลูกกลิ้งอบแห้งแนวตั้ง ทำงานไม่ต้องหล่อลื่นระยะยาว",
      ],
    },
    specs: [
      { label: "Temperature", value: "-20°C ~ 500°C" },
      { label: "Pressure", value: "≤ 15 MPa" },
      { label: "Speed", value: "≤ 20 m/s" },
      { label: "Media", value: "Black/white liquor, steam, pulp stock" },
      { label: "Grade", value: "M106H (Sb) / M254K (Resin)" },
      { label: "Mating Face", value: "SiC / WC" },
    ],
    relatedProducts: ["109-series", "58b-series", "graphite-bushing", "graphite-thrust-disc"],
    faq: {
      zh: [
        { q: "黑液泵密封寿命短，3个月就泄漏，怎么办？", a: "选M106H浸锑牌号配SiC端面。浸锑石墨耐温500℃且化学惰性耐受黑液碱腐蚀；SiC硬度HV2500抵抗黑液中的有机物和颗粒磨损。实际工况寿命可达12-18个月。" },
        { q: "烘缸冷凝水排出泵180℃蒸汽环境密封材料怎么选？", a: "推荐M106H浸锑牌号，配有抗氧化处理，耐温500℃远超180℃工况要求。蒸汽环境碳石墨不氧化、不失弹，长期运行稳定。" },
        { q: "白液泵(pH 14)轴承用碳石墨可以吗？", a: "可以。碳石墨化学惰性覆盖pH 0-14，强碱液不腐蚀。选浸锑牌号提高耐磨性，配不锈钢(316L)轴，单边间隙取0.10-0.15mm。" },
        { q: "浆料中纤维和填料颗粒进入密封面怎么办？", a: "配SiC端面抵抗颗粒冲刷。密封面可开冲洗槽引入清洁白水或清水冲洗，带走颗粒。碳石墨自润滑避免外部润滑脂被纤维污染。" },
      ],
      en: [
        { q: "Short black liquor pump seal life, leaking in 3 months?", a: "Select M106H antimony grade with SiC face. Antimony graphite handles 500°C and is chemically inert to black liquor caustic; SiC HV2500 resists organic and particulate wear. Service life reaches 12-18 months." },
        { q: "Which seal material for dryer condensate pump at 180°C steam?", a: "M106H antimony grade with anti-oxidation treatment, rated 500°C — far exceeding the 180°C duty. Carbon graphite does not oxidize or lose elasticity in steam, ensuring stable long-term operation." },
        { q: "Can carbon graphite bearings be used in white liquor (pH 14) pumps?", a: "Yes. Carbon graphite is chemically inert across pH 0-14; strong caustic does not corrode it. Select antimony grade for wear resistance, pair with 316L stainless shaft, single-side clearance 0.10-0.15mm." },
        { q: "How to handle fiber and filler particles entering the seal face?", a: "Pair with SiC face to resist particle erosion. Seal face can be grooved for clean white water or fresh water flush to carry away particles. Carbon graphite self-lubrication avoids grease contamination by fibers." },
      ],
      vi: [
        { q: "Tuổi thọ kín bơm dung dịch đen ngắn, rò rỉ sau 3 tháng?", a: "Chọn M106H antimony ghép mặt SiC. Than chì antimony chịu 500°C trơ kiềm dung dịch đen; SiC HV2500 chống mài mòn hữu cơ và hạt. Tuổi thọ 12-18 tháng." },
        { q: "Vật liệu kín cho bơm ngưng tụ烘 cuộn 180°C hơi?", a: "M106H antimony có chống oxy hóa, chịu 500°C vượt 180°C. Than chì không oxy hóa不失 đàn hồi trong hơi, ổn định dài hạn." },
        { q: "Bạc than chì dùng cho bơm dung dịch trắng (pH 14) được không?", a: "Được. Than chì trơ pH 0-14, kiềm mạnh không ăn mòn. Chọn antimony chống mài mòn, ghép trục 316L, khe hở 0.10-0.15mm." },
        { q: "Sợi và hạt fillers lọt vào mặt kín xử lý thế nào?", a: "Ghép SiC chống mài mòn hạt. Mặt kín có rãnh xả nước sạch hoặc nước trắng xả hạt. Tự bôi trơn tránh mỡ bị sợi bẩn." },
      ],
      th: [
        { q: "อายุซีลปั๊มของเหลวดำสั้น รั่วใน 3 เดือน?", a: "เลือก M106H antimony จับคู่ SiC กราไฟต์ antimony ทน 500°C เฉื่อยทางด่างของเหลวดำ SiC HV2500 ต้านสารอินทรีย์และเศษ อายุ 12-18 เดือน" },
        { q: "วัสดุซีลสำหรับปั๊มคอนเดนเสทลูกกลิ้งอบแห้ง 180°C ไอ?", a: "M106H antimony ป้องกันออกซิเดชัน ทน 500°C เกิน 180°C กราไฟต์ไม่ออกซิไดซ์และไม่สูญเสียความยืดหยุ่นในไอ ทำงานเสถียรระยะยาว" },
        { q: "แบริ่งกราไฟต์ใช้ในปั๊มของเหลวขาว (pH 14) ได้หรือไม่?", a: "ได้ กราไฟต์เฉื่อยทางเคมี pH 0-14 ด่างเข้มไม่กัดกร่อน เลือก antimony ต้านการสึก จับคู่เพลา 316L ระยะห่าง 0.10-0.15mm" },
        { q: "เส้นใยและฟิลเลอร์เข้าผิวซีลจัดการอย่างไร?", a: "จับคู่ SiC ต้านการกัดกร่อน ผิวซีลเจาะร่องล้างน้ำสะอาดหรือน้ำขาวเพื่อขับเศษ ตัวหล่อลื่นตัวเองหลีกเลี่ยงจารบีถูกเส้นใยปนเปื้อน" },
      ],
    },
  },

  // 4. 半导体
  {
    slug: "semiconductor",
    title: {
      zh: "半导体行业碳石墨密封 | 真空泵与等离子刻蚀腔体无污染密封",
      en: "Semiconductor Carbon Graphite Seals | Vacuum Pump & Plasma Etch Chamber Contamination-Free Sealing",
      vi: "Vòng đệm than chì carbon cho bán dẫn | Bơm chân không và buồng plasma không nhiễm bẩn",
      th: "ซีลคาร์บอนกราไฟต์สำหรับกึ่งตัวนำ | ปั๊มสุญญากาศและห้องพลาสมาไม่ปนเปื้อน",
    },
    description: {
      zh: "华豪密封为半导体行业提供超高纯度碳石墨密封环与轴承，适配干式真空泵、机械真空泵、等离子刻蚀腔体旋转密封。碳石墨无金属离子析出、无油脂污染，符合SEMI标准，满足10⁻⁹ Torr超高真空与腐蚀性工艺气体(CF₄、SF₆)工况。",
      en: "Huahao Sealing provides ultra-high-purity carbon graphite seal rings and bearings for semiconductor dry vacuum pumps, mechanical vacuum pumps and plasma etch chamber rotary seals. Zero metal-ion leaching, zero grease contamination, SEMI-compliant, rated for 10⁻⁹ Torr ultra-high vacuum and corrosive process gases (CF₄, SF₆).",
      vi: "Huahao Sealing cung cấp vòng đệm và vòng bi than chì carbon siêu tinh khiết cho bán dẫn — bơm chân không khô, bơm chân không cơ học và vòng kín quay buồng plasma. Không rã kim loại, không mỡ bẩn, theo SEMI, cho chân không 10⁻⁹ Torr và khí ăn mòn (CF₄, SF₆).",
      th: "Huahao Sealing จัดหาแหวนซีลและแบริ่งกราไฟต์คาร์บอนความบริสุทธิ์สูงสำหรับกึ่งตัวนำ — ปั๊มสุญญากาศแห้ง ปั๊มสุญญากาศเชิงกลและซีลหมุนห้องพลาสมา ไม่รั่วไอออนโลหะ ไม่มีจารบีปนเปื้อน ตามมาตรฐาน SEMI ทนสุญญากาศ 10⁻⁹ Torr และก๊าซกัดกร่อน (CF₄, SF₆)",
    },
    challenges: {
      zh: [
        "干式真空泵在10⁻⁹ Torr超高真空下运行，密封件放气污染晶圆工艺",
        "等离子刻蚀腔体使用CF₄、SF₆、ClF₃等腐蚀性工艺气体，密封材料被化学侵蚀",
        "晶圆制造要求零金属离子污染，金属轴承的铜、铁离子析出致命缺陷",
        "高温烘烤除气(150-200℃)与高转速(4000-6000 rpm)并存，密封件热失稳",
      ],
      en: [
        "Dry vacuum pumps operate at 10⁻⁹ Torr ultra-high vacuum; seal outgassing contaminates wafer processes",
        "Plasma etch chambers use corrosive process gases CF₄, SF₆, ClF₃ that chemically attack seal materials",
        "Wafer fabrication demands zero metal-ion contamination; copper and iron ion leaching from metallic bearings causes fatal defects",
        "High-temperature bake-out degassing (150-200°C) coexists with high speeds (4000-6000 rpm); seals suffer thermal instability",
      ],
      vi: [
        "Bơm chân không khô hoạt động ở 10⁻⁹ Torr; khí thoát kín bẩn quy trình wafer",
        "Buồng plasma dùng khí CF₄, SF₆, ClF₃ ăn mòn vật liệu kín",
        "Sản xuất wafer yêu cầu không ion kim loại; ion đồng sắt từ bạc kim loại gây lỗi chết",
        "Sấy nhiệt (150-200°C) cùng tốc độ cao (4000-6000 rpm); kín mất ổn định nhiệt",
      ],
      th: [
        "ปั๊มสุญญากาศแห้งทำงานที่ 10⁻⁹ Torr ก๊าซจากซีลปนเปื้อนกระบวนการเวเฟอร์",
        "ห้องพลาสมาใช้ก๊าซกัดกร่อน CF₄, SF₆, ClF₃ ทำลายวัสดุซีลทางเคมี",
        "การผลิตเวเฟอร์ต้องการไม่มีไอออนโลหะ ไอออนทองแดงและเหล็กจากแบริ่งโลหะก่อให้เกิดข้อบกพร่องร้ายแรง",
        "การอบความร้อน (150-200°C) ควบคู่กับความเร็วสูง (4000-6000 rpm) ซีลไม่เสถียรทางความร้อน",
      ],
    },
    solutions: {
      zh: [
        "超高纯度碳石墨牌号，灰分≤0.002%，无金属离子析出，满足SEMI F57标准",
        "树脂浸渍牌号无放气、无油脂挥发，适配超高真空环境",
        "碳石墨化学惰性耐受CF₄、SF₆等氟等离子体化学侵蚀",
        "配对SiC端面高导热率散热，适应高转速与高温烘烤工况",
      ],
      en: [
        "Ultra-high-purity carbon graphite grades, ash content ≤0.002%, zero metal-ion leaching, meeting SEMI F57 standard",
        "Resin-impregnated grades with zero outgassing and zero grease volatilization for ultra-high vacuum service",
        "Carbon graphite chemical inertness withstands CF₄, SF₆ and other fluorine plasma chemical attack",
        "Paired with SiC mating face of high thermal conductivity for heat dissipation in high-speed and bake-out service",
      ],
      vi: [
        "Vật liệu than chì siêu tinh khiết, tro ≤0.002%, không rã kim loại, theo SEMI F57",
        "Vật liệu resin impregnation không thoát khí, không mỡ bay hơi cho chân không siêu cao",
        "Than chì trơ hóa học chịu CF₄, SF₆ và plasma flo ăn mòn",
        "Ghép mặt SiC dẫn nhiệt cao tản nhiệt cho tốc độ cao và sấy nhiệt",
      ],
      th: [
        "วัสดุกราไฟต์คาร์บอนความบริสุทธิ์สูง เถ้า ≤0.002% ไม่รั่วไอออนโลหะ ตามมาตรฐาน SEMI F57",
        "วัสดุ resin impregnation ไม่มีก๊าซออก ไม่มีจารบีระเหย สำหรับสุญญากาศสูง",
        "กราไฟต์คาร์บอนเฉื่อยทางเคมี ทน CF₄, SF₆ และพลาสมาฟลูออรีนกัดกร่อน",
        "จับคู่ผิว SiC นำความร้อนสูง ระบายความร้อนสำหรับความเร็วสูงและการอบ",
      ],
    },
    specs: [
      { label: "Vacuum Level", value: "10⁻⁹ Torr" },
      { label: "Temperature", value: "-20°C ~ 350°C" },
      { label: "Speed", value: "≤ 6000 rpm" },
      { label: "Media", value: "CF₄, SF₆, ClF₃, N₂, Ar plasma" },
      { label: "Ash Content", value: "≤ 0.002%" },
      { label: "Standard", value: "SEMI F57" },
    ],
    relatedProducts: ["bia-series", "graphite-bearing", "graphite-bushing", "graphite-thrust-disc"],
    faq: {
      zh: [
        { q: "碳石墨密封件会污染晶圆吗？", a: "不会。超高纯度碳石墨牌号灰分≤0.002%，无金属离子析出，符合SEMI F57标准。树脂浸渍牌号无放气、无油脂挥发，适配10⁻⁹ Torr超高真空环境。" },
        { q: "等离子刻蚀腔体CF₄气体腐蚀碳石墨吗？", a: "碳石墨化学惰性强，耐受CF₄、SF₆等氟等离子体化学侵蚀。但强氧化性等离子体长期作用可能使表面石墨化，建议选用高密度浸渍牌号提升耐久性。" },
        { q: "干式真空泵高转速6000 rpm适合什么牌号？", a: "推荐BIA系列高纯度碳石墨密封环配SiC端面。SiC高导热率快速散热，防止高速摩擦热积聚；石墨自润滑降低摩擦系数，适配6000 rpm高速工况。" },
        { q: "高温烘烤除气200℃后密封件性能是否变化？", a: "树脂浸渍牌号经高温烘烤后无挥发物残留，性能稳定。抗氧化浸渍牌号耐温350-500℃，200℃烘烤远低于其耐温上限，性能不受影响。" },
      ],
      en: [
        { q: "Will carbon graphite seals contaminate wafers?", a: "No. Ultra-high-purity grades have ash content ≤0.002%, zero metal-ion leaching, meeting SEMI F57. Resin-impregnated grades have zero outgassing and zero grease volatilization for 10⁻⁹ Torr UHV service." },
        { q: "Does CF₄ plasma in etch chambers corrode carbon graphite?", a: "Carbon graphite is chemically inert and withstands CF₄, SF₆ and fluorine plasma attack. However, prolonged strong-oxidizer plasma may graphitize the surface; select high-density impregnated grades for durability." },
        { q: "Which grade for dry vacuum pump at 6000 rpm?", a: "BIA series high-purity carbon graphite seal ring with SiC mating face. SiC high thermal conductivity dissipates friction heat; graphite self-lubrication lowers friction coefficient for 6000 rpm service." },
        { q: "Does performance change after 200°C bake-out degassing?", a: "Resin-impregnated grades leave no volatile residue after bake-out, with stable performance. Anti-oxidation impregnated grades are rated 350-500°C; 200°C bake-out is well within limits with no impact." },
      ],
      vi: [
        { q: "Vòng đệm than chì có bẩn wafer không?", a: "Không. Vật liệu siêu tinh khiết tro ≤0.002% không rã kim loại, theo SEMI F57. Resin impregnation không thoát khí, không mỡ bay hơi cho 10⁻⁹ Torr." },
        { q: "Plasma CF₄ trong buồng có ăn mòn than chì không?", a: "Than chì trơ hóa học chịu CF₄, SF₆ và plasma flo. Nhưng plasma oxy hóa mạnh lâu có thể graphit hóa bề mặt; chọn vật liệu impregnation mật độ cao." },
        { q: "Vật liệu nào cho bơm chân không khô 6000 rpm?", a: "BIA series than chì tinh khiết cao ghép mặt SiC. SiC dẫn nhiệt cao tản nhiệt ma sát; tự bôi trơn giảm ma sát cho 6000 rpm." },
        { q: "Hiệu suất có đổi sau sấy 200°C?", a: "Vật liệu resin impregnation không dư bay hơi sau sấy, ổn định. Vật liệu chống oxy hóa chịu 350-500°C, 200°C thấp hơn giới hạn, không ảnh hưởng." },
      ],
      th: [
        { q: "ซีลกราไฟต์จะปนเปื้อนเวเฟอร์หรือไม่?", a: "ไม่ วัสดุบริสุทธิ์สูงเถ้า ≤0.002% ไม่รั่วไอออนโลหะ ตาม SEMI F57 resin impregnation ไม่มีก๊าซออก ไม่มีจารบีระเหย สำหรับ 10⁻⁹ Torr" },
        { q: "พลาสมา CF₄ ในห้องกัดกร่อนกราไฟต์หรือไม่?", a: "กราไฟต์เฉื่อยทางเคมีทน CF₄, SF₆ และพลาสมาฟลูออรีน แต่พลาสมาออกซิไดเซอร์เข้มข้นนานอาจทำให้ผิวกราไฟต์; เลือกวัสดุ impregnation ความหนาแน่นสูง" },
        { q: "วัสดุใดสำหรับปั๊มสุญญากาศแห้ง 6000 rpm?", a: "BIA series กราไฟต์บริสุทธิ์สูงจับคู่ SiC SiC นำความร้อนสูงระบายความร้อนจากการเสียดสี ตัวหล่อลื่นตัวเองลดสัมประสิทธิ์การเสียดสี สำหรับ 6000 rpm" },
        { q: "ประสิทธิภาพเปลี่ยนหลังอบ 200°C หรือไม่?", a: "วัสดุ resin impregnation ไม่มีสารระเหยตกค้างหลังอบ เสถียร วัสดุป้องกันออกซิเดชันทน 350-500°C 200°C ต่ำกว่าขีดจำกัด ไม่กระทบ" },
      ],
    },
  },

  // 5. 纺织印染
  {
    slug: "textile",
    title: {
      zh: "纺织印染碳石墨密封环 | 染色机与高温染液泵机械密封",
      en: "Textile & Dyeing Carbon Graphite Seal Rings | Dyeing Machine & High-Temp Dye Liquor Pump Mechanical Seals",
      vi: "Vòng đệm than chì carbon cho dệt nhuộm | Máy nhuộm và bơm thuốc nhuộm nhiệt cao",
      th: "แหวนซีลคาร์บอนกราไฟต์สำหรับสิ่งทอและย้อม | เครื่องย้อมและปั๊มน้ำยาย้อมอุณหภูมิสูง",
    },
    description: {
      zh: "华豪密封为纺织印染行业提供专用碳石墨密封环，适配高温染色机、染液循环泵、定形机导布辊轴承等关键设备。耐高温染料液(130-180℃)与化学品(酸、碱、还原剂)腐蚀，自润滑避免油渍污染布匹，延长密封寿命至18个月以上。",
      en: "Huahao Sealing provides purpose-built carbon graphite seal rings for textile dyeing — high-temp dyeing machines, dye liquor circulation pumps and stenter guide roll bearings. Resistant to high-temp dye liquor (130-180°C) and chemicals (acids, alkalis, reducers), self-lubricating to prevent oil stain on fabric, extending seal life beyond 18 months.",
      vi: "Huahao Sealing cung cấp vòng đệm than chì carbon chuyên dụng cho dệt nhuộm — máy nhuộm nhiệt cao, bơm tuần hoàn thuốc nhuộm và vòng bi trục dẫn vải. Chịu thuốc nhuộm nhiệt cao (130-180°C) và hóa chất (axit, kiềm, chất khử), tự bôi trơn tránh dầu bẩn vải, kéo dài tuổi thọ quá 18 tháng.",
      th: "Huahao Sealing จัดหาแหวนซีลคาร์บอนกราไฟต์เฉพาะสำหรับสิ่งทอและย้อม — เครื่องย้อมอุณหภูมิสูง ปั๊มหมุนเวียนน้ำยาย้อมและแบริ่งเพลานำผ้า ทนน้ำยาย้อมอุณหภูมิสูง (130-180°C) และสารเคมี (กรด ด่าง ตัวรีดิวซ์) ตัวหล่อลื่นตัวเองป้องกันคราบน้ำมันบนผ้า ยืดอายุซีลเกิน 18 เดือน",
    },
    challenges: {
      zh: [
        "高温染色机染液温度130-180℃，含酸、碱、还原剂与染料颗粒，密封材料腐蚀与磨损并存",
        "染液循环泵长期运行，油润滑泄漏污染布匹，造成批量报废",
        "定形机导布辊高温(200℃)运行，普通轴承润滑脂碳化失效",
        "染料颗粒进入密封面形成磨粒磨损，密封寿命短",
      ],
      en: [
        "High-temp dyeing machine dye liquor at 130-180°C contains acids, alkalis, reducers and dye particles — corrosion and wear coexist",
        "Dye liquor circulation pumps run long-term; oil lubricant leakage contaminates fabric, causing batch rejection",
        "Stenter guide rolls run at 200°C; standard bearing grease carbonizes and fails",
        "Dye particles intrude into seal faces, causing abrasive wear and short seal life",
      ],
      vi: [
        "Máy nhuộm nhiệt cao thuốc nhuộm 130-180°C có axit kiềm chất khử và hạt nhuộm — ăn mòn và mài mòn cùng tồn",
        "Bơm tuần hoàn thuốc nhuộm chạy dài hạn; dầu rò rỉ bẩn vải gây hủy lô",
        "Trục dẫn vải定形 chạy 200°C; mỡ bạc thông thường bị carbon hóa hỏng",
        "Hạt nhuộm lọt vào mặt kín gây mài mòn, tuổi thọ ngắn",
      ],
      th: [
        "เครื่องย้อมอุณหภูมิสูงน้ำยาย้อม 130-180°C มีกรด ด่าง ตัวรีดิวซ์และเศษย้อม กัดกร่อนและสึกกร่อนพร้อมกัน",
        "ปั๊มหมุนเวียนน้ำยาย้อมทำงานระยะยาว น้ำมันรั่วปนเปื้อนผ้าทำให้เสียทั้งล็อต",
        "เพลานำผ้าเครื่องตั้งรูปทำงานที่ 200°C จารบีมาตรฐานเกิดคาร์บอนไนเซชันและเสีย",
        "เศษย้อมเข้าผิวซีลทำให้สึกกร่อนอายุสั้น",
      ],
    },
    solutions: {
      zh: [
        "染色机专用碳石墨密封环，耐温220℃，化学惰性耐受染料液与化学品腐蚀",
        "碳石墨自润滑免外部润滑脂，彻底避免油渍污染布匹",
        "配对SiC端面高硬度，抵抗染料颗粒磨粒磨损",
        "定形机导布辊选用浸锑石墨轴承(M106H)，耐温500℃，无润滑脂碳化失效风险",
      ],
      en: [
        "Purpose-built dyeing machine carbon graphite seal rings rated 220°C, chemically inert against dye liquor and chemical corrosion",
        "Carbon graphite self-lubrication eliminates external grease, completely avoiding oil-stain fabric contamination",
        "Paired with SiC mating face of high hardness to resist dye particle abrasive wear",
        "Stenter guide rolls use antimony-impregnated graphite bearings (M106H) rated 500°C, with no grease carbonization failure risk",
      ],
      vi: [
        "Vòng kín than chì chuyên dụng máy nhuộm chịu 220°C trơ hóa học chống thuốc nhuộm và hóa chất",
        "Tự bôi trơn không mỡ ngoài triệt để tránh dầu bẩn vải",
        "Ghép mặt SiC cứng cao chống mài mòn hạt nhuộm",
        "Trục dẫn vải dùng bạc than chì antimony (M106H) chịu 500°C không mỡ carbon hóa",
      ],
      th: [
        "แหวนซีลกราไฟต์เฉพาะเครื่องย้อมทน 220°C เฉื่อยทางเคมีต้านน้ำยาย้อมและสารเคมี",
        "ตัวหล่อลื่นตัวเองไม่มีจารบีภายนอกหลีกเลี่ยงคราบน้ำมันบนผ้าโดยสมบูรณ์",
        "จับคู่ผิว SiC ความแข็งสูงต้านการสึกกร่อนจากเศษย้อม",
        "เพลานำผ้าใช้แบริ่งกราไฟต์ antimony (M106H) ทน 500°C ไม่มีความเสี่ยงจารบีคาร์บอนไนเซชัน",
      ],
    },
    specs: [
      { label: "Temperature", value: "-10°C ~ 220°C" },
      { label: "Pressure", value: "≤ 1.0 MPa" },
      { label: "Speed", value: "≤ 3500 rpm" },
      { label: "Media", value: "Dye liquor, acids, alkalis, reducers" },
      { label: "Grade", value: "M106K (Resin) / M106H (Sb)" },
      { label: "Mating Face", value: "SiC / 316L SS" },
    ],
    relatedProducts: ["dyeing-machine-series", "m7n-series", "graphite-bearing", "59u-series"],
    faq: {
      zh: [
        { q: "染色机密封漏油污染布匹怎么解决？", a: "碳石墨自润滑免外部润滑脂，彻底杜绝油渍污染。选41.275染色机专用密封环配SiC端面，耐温220℃适配高温染液工况。" },
        { q: "高温染色机180℃染液腐蚀密封吗？", a: "树脂浸渍碳石墨(M106K)化学惰性耐受染液中的酸、碱、还原剂腐蚀。耐温220℃，180℃染液工况稳定运行。" },
        { q: "定形机导布辊200℃轴承油脂碳化失效怎么办？", a: "选M106H浸锑石墨轴承，耐温500℃，自润滑免润滑脂。彻底解决高温油脂碳化失效、污染布匹的问题。" },
        { q: "染料颗粒进入密封面导致寿命短？", a: "配SiC端面硬度HV2500抵抗颗粒磨损。密封面可开冲洗槽引入清洁染液冲洗带走颗粒。碳石墨自润滑降低摩擦热，延长寿命至18个月以上。" },
      ],
      en: [
        { q: "How to resolve dyeing machine seal oil leakage contaminating fabric?", a: "Carbon graphite self-lubrication eliminates external grease, completely preventing oil stains. Select 41.275 dyeing machine purpose-built seal ring with SiC face, rated 220°C for high-temp dye liquor service." },
        { q: "Does 180°C dye liquor corrode seals?", a: "Resin-impregnated carbon graphite (M106K) is chemically inert against acids, alkalis and reducers in dye liquor. Rated 220°C, stable at 180°C dye liquor service." },
        { q: "Stenter guide roll 200°C bearing grease carbonizes — what to do?", a: "Select M106H antimony-impregnated graphite bearings rated 500°C, self-lubricating without grease. This completely resolves high-temp grease carbonization failure and fabric contamination." },
        { q: "Dye particles entering seal face cause short life?", a: "Pair with SiC face hardness HV2500 to resist particle wear. Seal face can be grooved for clean dye liquor flush to carry away particles. Self-lubrication reduces friction heat, extending life beyond 18 months." },
      ],
      vi: [
        { q: "Cách xử lý dầu rò rỉ kín máy nhuộm bẩn vải?", a: "Tự bôi trơn than chì không mỡ ngoài triệt để tránh dầu bẩn. Chọn vòng kín 41.275 chuyên dụng máy nhuộm ghép SiC, chịu 220°C cho thuốc nhuộm nhiệt cao." },
        { q: "Thuốc nhuộm 180°C có ăn mòn kín không?", a: "Than chì resin impregnation (M106K) trơ hóa học chịu axit kiềm chất khử trong thuốc nhuộm. Chịu 220°C, ổn định ở 180°C." },
        { q: "Bạc trục dẫn vải 200°C mỡ carbon hóa hỏng thì sao?", a: "Chọn M106H bạc antimony chịu 500°C, tự bôi trơn không mỡ. Giải quyết triệt để mỡ carbon hóa bẩn vải." },
        { q: "Hạt nhuộm vào mặt kín tuổi thọ ngắn?", a: "Ghép SiC cứng HV2500 chống mài mòn hạt. Mặt kín có rãnh xả thuốc sạch tống hạt. Tự bôi trơn giảm nhiệt, kéo dài tuổi thọ quá 18 tháng." },
      ],
      th: [
        { q: "แก้ปั๊มซีลเครื่องย้อมน้ำมันรั่วปนเปื้อนผ้าอย่างไร?", a: "ตัวหล่อลื่นตัวเองไม่มีจารบีภายนอกหลีกเลี่ยงคราบน้ำมัน เลือกแหวนซีล 41.275 เฉพาะเครื่องย้อมจับคู่ SiC ทน 220°C สำหรับน้ำยาย้อมอุณหภูมิสูง" },
        { q: "น้ำยาย้อม 180°C กัดกร่อนซีลหรือไม่?", a: "กราไฟต์ resin impregnation (M106K) เฉื่อยทางเคมีทนกรด ด่าง ตัวรีดิวซ์ในน้ำยา ทน 220°C เสถียรที่ 180°C" },
        { q: "แบริ่งเพลานำผ้า 200°C จารบีคาร์บอนไนเซชันเสีย ทำอย่างไร?", a: "เลือก M106H แบริ่ง antimony ทน 500°C ตัวหล่อลื่นตัวเองไม่มีจารบี แก้ปัญหาจารบีคาร์บอนไนเซชันและปนเปื้อนผ้า" },
        { q: "เศษย้อมเข้าผิวซีลอายุสั้น?", a: "จับคู่ SiC แข็ง HV2500 ต้านการสึก เจาะร่องล้างน้ำยาสะอาดขับเศษ ตัวหล่อลื่นตัวเองลดความร้อน ยืดอายุเกิน 18 เดือน" },
      ],
    },
  },

  // 6. 船舶
  {
    slug: "marine",
    title: {
      zh: "船舶与海洋工程碳石墨密封 | 艉轴密封与海水泵轴承方案",
      en: "Marine & Offshore Carbon Graphite Seals | Stern Shaft Seals & Seawater Pump Bearing Solutions",
      vi: "Vòng đệm than chì carbon cho hàng hải | Kín trục đuôi và bạc bơm nước biển",
      th: "ซีลคาร์บอนกราไฟต์สำหรับทางทะเล | ซีลเพลาท้ายเรือและแบริ่งปั๊มน้ำทะเล",
    },
    description: {
      zh: "华豪密封为船舶与海洋工程提供碳石墨艉轴密封、海水冷却泵轴承与舵轴承。特殊耐海水腐蚀浸渍工艺，化学惰性抵抗海水氯离子腐蚀，干湿交替工况下尺寸稳定，通过DNV等船级社认证，适配商船、军舰与海洋平台。",
      en: "Huahao Sealing provides carbon graphite stern shaft seals, seawater cooling pump bearings and rudder bearings for marine and offshore. Special seawater-corrosion-resistant impregnation, chemically inert against chloride attack, dimensionally stable in wet/dry cycling, DNV-certified for commercial vessels, naval ships and offshore platforms.",
      vi: "Huahao Sealing cung cấp kín trục đuôi, bạc bơm nước biển và bạc bánh lái than chì carbon cho hàng hải. Công nghệ impregnation đặc biệt chống ăn mòn nước biển, trơ hóa học chống ion clo, ổn định kích thước trong chu kỳ ướt-khô, chứng nhận DNV cho tàu thương mại, quân sự và giàn khai thác.",
      th: "Huahao Sealing จัดหาซีลเพลาท้ายเรือ แบริ่งปั๊มน้ำทะเลและแบริ่งหางเสือกราไฟต์คาร์บอนสำหรับทางทะเล เทคโนโลยี impregnation พิเศษต้านการกัดกร่อนน้ำทะเล เฉื่อยทางเคมีต้านไอออนคลอไรด์ ขนาดเสถียรในวัฏจักรแห้ง-เปียก รับรอง DNV สำหรับเรือพาณิชย์ เรือรบและแท่นน้ำ",
    },
    challenges: {
      zh: [
        "艉轴密封长期浸泡海水，氯离子腐蚀金属轴承，电化学腐蚀严重",
        "海水冷却泵含泥沙颗粒，干湿交替工况下密封件磨损加剧",
        "舵轴承承受冲击载荷与振动，金属轴承抱死风险高",
        "船舶在港停机期间轴承干运转，无润滑启动损伤严重",
      ],
      en: [
        "Stern shaft seals are submerged in seawater long-term; chloride ions corrode metallic bearings with severe galvanic corrosion",
        "Seawater cooling pumps carry silt particles; wet/dry cycling accelerates seal wear",
        "Rudder bearings endure impact loads and vibration; metallic bearings have high seizure risk",
        "During in-port layup, bearings run dry; unlubricated startup causes severe damage",
      ],
      vi: [
        "Kín trục đuôi ngâm nước biển dài hạn; ion clo ăn mòn bạc kim loại严重 ăn mòn điện hóa",
        "Bơm nước biển có bùn cát; chu kỳ ướt-khô làm mòn kín nhanh hơn",
        "Bạc bánh lái chịu tải va đập và rung; bạc kim loại dễ kẹt",
        "Khi tàu cập cảng bạc chạy khô; khởi động không bôi trơn gây hư nặng",
      ],
      th: [
        "ซีลเพลาท้ายเรือจมน้ำทะเลระยะยาว ไอออนคลอไรด์กัดกร่อนแบริ่งโลหะด้วยการกัดกร่อนกัลวานิกอย่างรุนแรง",
        "ปั๊มน้ำทะเลมีตะกอนโคลนทราย วัฏจักรแห้ง-เปียกทำให้ซีลสึกกร่อนเร็วขึ้น",
        "แบริ่งหางเสือรับแรงกระแทกและการสั่น แบริ่งโลหะมีความเสี่ยงการติดสูง",
        "ระหว่างเทียบท่าแบริ่งหมุนแห้ง การเริ่มต้นโดยไม่หล่อลื่นก่อให้เกิดความเสียหายรุนแรง",
      ],
    },
    solutions: {
      zh: [
        "特殊耐海水浸渍工艺的碳石墨轴承，化学惰性抵抗氯离子腐蚀，无电化学腐蚀风险",
        "碳石墨自润滑，干运转与无润滑启动不损伤，适配船舶在港停机干湿交替工况",
        "碳石墨天然阻尼特性吸收振动与冲击载荷，降低舵轴承抱死风险",
        "配对高铬不锈钢或SiC端面，抵抗海水含沙颗粒磨粒磨损",
      ],
      en: [
        "Special seawater-corrosion-resistant impregnated carbon graphite bearings, chemically inert against chloride corrosion with zero galvanic corrosion risk",
        "Carbon graphite self-lubrication tolerates dry running and unlubricated startup, ideal for in-port layup wet/dry cycling",
        "Carbon graphite natural damping absorbs vibration and impact loads, reducing rudder bearing seizure risk",
        "Paired with high-chrome stainless steel or SiC mating face, resisting abrasive wear from silt-laden seawater",
      ],
      vi: [
        "Bạc than chì impregnation đặc biệt chống nước biển trơ hóa học chống ion clo, không ăn mòn điện hóa",
        "Tự bôi trơn than chì, chạy khô và khởi động không bôi trơn không hư, cho chu kỳ ướt-khô tàu cập cảng",
        "Tính cản tự nhiên than chì hấp thụ rung va đập, giảm kẹt bạc bánh lái",
        "Ghép thép không gỉ crom cao hoặc SiC, chống mài mòn bùn cát nước biển",
      ],
      th: [
        "แบริ่งกราไฟต์ impregnation พิเศษต้านน้ำทะเล เฉื่อยทางเคมีต้านไอออนคลอไรด์ ไม่มีความเสี่ยงกัดกร่อนกัลวานิก",
        "ตัวหล่อลื่นตัวเองของกราไฟต์ทนการหมุนแห้งและการเริ่มต้นโดยไม่หล่อลื่น เหมาะสำหรับวัฏจักรแห้ง-เปียกขณะเทียบท่า",
        "คุณสมบัติดัดซับของกราไฟต์ดูดซับการสั่นและแรงกระแทก ลดความเสี่ยงแบริ่งหางเสือติด",
        "จับคู่เหล็กกล้าไฮครอมหรือ SiC ต้านการสึกกร่อนจากตะกอนในน้ำทะเล",
      ],
    },
    specs: [
      { label: "Temperature", value: "-20°C ~ 150°C" },
      { label: "Pressure", value: "≤ 10 MPa" },
      { label: "Speed", value: "≤ 15 m/s" },
      { label: "Media", value: "Seawater, brine, marine lubricants" },
      { label: "Grade", value: "M204K / M254K (Seawater)" },
      { label: "Certification", value: "DNV / ABS / LR" },
    ],
    relatedProducts: ["59u-series", "graphite-bearing", "graphite-bushing", "three-part-series"],
    faq: {
      zh: [
        { q: "碳石墨轴承在海水中会腐蚀吗？", a: "不会。选用M204K/M254K耐海水浸渍牌号，化学惰性抵抗氯离子腐蚀，无电化学腐蚀风险。碳石墨是非金属，不会与钢轴形成电偶电池，彻底避免电化学腐蚀。" },
        { q: "船舶在港停机期间轴承干运转会损坏吗？", a: "碳石墨自润滑特性使其在干运转和无润滑启动时不损伤。这特别适合船舶在港停机期间艉轴和海水泵的干湿交替工况。" },
        { q: "是否通过船级社认证？", a: "通过DNV（挪威船级社）认证，可按客户要求提供ABS、LR等船级社证书。已有多家船厂采用作为标准配置。" },
        { q: "海水含沙颗粒会磨损密封吗？", a: "配SiC端面或高铬不锈钢配对面，硬度高抵抗颗粒冲刷。轴承间隙优化设计(单边0.10mm)，允许泥沙颗粒通过而不卡死。" },
      ],
      en: [
        { q: "Will carbon graphite bearings corrode in seawater?", a: "No. M204K/M254K seawater-corrosion-resistant impregnated grades are chemically inert against chloride attack with zero galvanic corrosion risk. Carbon graphite is non-metallic and does not form a galvanic couple with steel shafts." },
        { q: "Will dry running during in-port layup damage bearings?", a: "Carbon graphite self-lubrication tolerates dry running and unlubricated startup without damage. This is particularly suited for wet/dry cycling of stern shafts and seawater pumps during in-port layup." },
        { q: "Are your products certified by classification societies?", a: "DNV (Det Norske Veritas) certified; ABS, LR and other society certificates available on request. Adopted as standard configuration by multiple shipyards." },
        { q: "Will silt particles in seawater wear the seal?", a: "Paired with SiC or high-chrome stainless mating face of high hardness to resist particle erosion. Bearing clearance is optimized (single-side 0.10mm) to allow silt particles to pass without seizure." },
      ],
      vi: [
        { q: "Bạc than chì có bị ăn mòn trong nước biển không?", a: "Không. M204K/M254K impregnation chống nước biển trơ hóa học chống ion clo, không ăn mòn điện hóa. Than chì phi kim không ghép điện hóa với trục thép." },
        { q: "Chạy khô khi tàu cập cảng có hư bạc không?", a: "Tự bôi trơn than chì chạy khô và khởi động không bôi trơn không hư. Phù hợp chu kỳ ướt-khô trục đuôi và bơm nước biển khi tàu cập cảng." },
        { q: "Có chứng nhận tổ chức phân loại không?", a: "Chứng nhận DNV; có thể cung cấp chứng ABS, LR theo yêu cầu. Nhiều xưởng tàu dùng làm cấu hình chuẩn." },
        { q: "Bùn cát nước biển có mòn kín không?", a: "Ghép SiC hoặc thép crom cao cứng chống mài mòn hạt. Khe hở bạc tối ưu (0.10mm) cho hạt qua không kẹt." },
      ],
      th: [
        { q: "แบริ่งกราไฟต์จะถูกกัดกร่อนในน้ำทะเลหรือไม่?", a: "ไม่ M204K/M254K impregnation ต้านน้ำทะเล เฉื่อยทางเคมีต้านไอออนคลอไรด์ ไม่มีความเสี่ยงกัดกร่อนกัลวานิก กราไฟต์ไม่ใช่โลหะไม่เกิดกัลวานิกกับเพลาเหล็ก" },
        { q: "หมุนแห้งขณะเทียบท่าจะทำให้แบริ่งเสียหรือไม่?", a: "ตัวหล่อลื่นตัวเองของกราไฟต์ทนการหมุนแห้งและเริ่มต้นโดยไม่หล่อลื่น เหมาะสำหรับวัฏจักรแห้ง-เปียกของเพลาท้ายและปั๊มน้ำทะเล" },
        { q: "ได้รับการรับรองจากสมาคมจัดประเภทเรือหรือไม่?", a: "รับรองโดย DNV สามารถจัดหาใบรับรอง ABS, LR ตามคำขอ หลายอู่ต่อเรือใช้เป็นมาตรฐาน" },
        { q: "ตะกอนในน้ำทะเลจะสึกซีลหรือไม่?", a: "จับคู่ SiC หรือเหล็กไฮครอมแข็งต้านการกัดกร่อน ระยะห่างแบริ่งที่ปรับให้เหมาะสม (0.10mm) ปล่อยให้ตะกอนผ่านได้ไม่ติด" },
      ],
    },
  },

  // 7. 食品制药
  {
    slug: "food-pharma",
    title: {
      zh: "食品制药碳石墨密封件 | FDA食品级无油自润滑机械密封",
      en: "Food & Pharma Carbon Graphite Seals | FDA-Grade Oil-Free Self-Lubricating Mechanical Seals",
      vi: "Vòng đệm than chì carbon cho thực phẩm & dược | FDA không dầu tự bôi trơn",
      th: "ซีลคาร์บอนกราไฟต์สำหรับอาหารและยา | มาตรฐาน FDA ไม่มีน้ำมันตัวหล่อลื่นตัวเอง",
    },
    description: {
      zh: "华豪密封为食品与制药行业提供FDA食品级树脂浸渍碳石墨密封件，完全无油自润滑运行，无金属离子析出与润滑脂污染风险，符合FDA、EU食品接触材料标准与HACCP体系要求，适配搅拌机、灌装机、输送泵、CIP在线清洗设备。",
      en: "Huahao Sealing provides FDA food-grade resin-impregnated carbon graphite seals for the food and pharmaceutical industry. Completely oil-free self-lubricating operation with zero metal-ion leaching and grease contamination risk, compliant with FDA and EU food contact material standards and HACCP requirements, suited for mixers, fillers, transfer pumps and CIP equipment.",
      vi: "Huahao Sealing cung cấp vòng đệm than chì resin impregnation cấp thực phẩm FDA cho ngành thực phẩm và dược. Hoàn toàn không dầu tự bôi trơn, không rã kim loại và mỡ bẩn, theo FDA, EU tiếp xúc thực phẩm và HACCP, cho máy trộn, chiết, bơm chuyển và thiết bị CIP.",
      th: "Huahao Sealing จัดหาซีลกราไฟต์ resin impregnation ระดับอาหาร FDA สำหรับอุตสาหกรรมอาหารและยา ทำงานตัวหล่อลื่นตัวเองโดยไม่มีน้ำมัน ไม่รั่วไอออนโลหะและไม่มีคราบจารบี ตามมาตรฐาน FDA, EU และ HACCP เหมาะสำหรับเครื่องผสม เครื่องบรรจุ ปั๊มส่งและอุปกรณ์ CIP",
    },
    challenges: {
      zh: [
        "食品搅拌机铜套磨损产生铜离子污染产品，违反FDA、EU食品接触材料标准",
        "润滑脂在搅拌过程中甩出混入食品，造成批量报废与消费者投诉",
        "制药机械CIP在线清洗使用酸碱液(pH 2-12)，密封件化学腐蚀失效",
        "洁净生产环境要求无金属颗粒脱落，金属轴承磨损颗粒致命污染",
      ],
      en: [
        "Food mixer copper bushing wear produces copper ion contamination, violating FDA and EU food contact material standards",
        "Grease is flung off during mixing and mixes into food products, causing batch rejection and consumer complaints",
        "Pharmaceutical CIP cleaning uses acid/alkali (pH 2-12); seals suffer chemical corrosion and failure",
        "Clean production environments require zero metal particle shedding; metallic bearing wear particles fatally contaminate product",
      ],
      vi: [
        "Bạc đồng máy trộn thực phẩm mài mòn ra ion đồng bẩn sản phẩm vi phạm FDA EU",
        "Mỡ văng khi trộn lẫn vào thực phẩm gây hủy lô và khiếu nại",
        "CIP dược dùng axit kiềm (pH 2-12); kín bị ăn mòn hóa học hỏng",
        "Môi trường sạch yêu cầu không hạt kim loại; hạt bạc kim loại bẩn chết người",
      ],
      th: [
        "การสึกของบุชชิ่งทองแดงในเครื่องผสมอาหารก่อให้เกิดการปนเปื้อนไอออนทองแดง ละเมิดมาตรฐาน FDA และ EU",
        "จารบีกระเด็นระหว่างการผสมและปะปนในอาหาร ทำให้เสียทั้งล็อตและมีการร้องเรียน",
        "CIP ทำความสะอาดใช้กรด/ด่าง (pH 2-12) ซีลเกิดการกัดกร่อนทางเคมีและเสีย",
        "สภาพแวดล้อมการผลิตสะอาดต้องไม่มีเศษโลหะหลุด เศษจากแบริ่งโลหะปนเปื้อนร้ายแรง",
      ],
    },
    solutions: {
      zh: [
        "FDA食品级树脂浸渍碳石墨(M106K)，完全无油自润滑，零润滑脂污染风险",
        "碳石墨非金属，无铜、铁离子析出，符合FDA 21 CFR 178食品接触材料标准",
        "化学惰性耐受CIP酸碱清洗液(pH 2-12)，可蒸汽消毒与酸碱交替清洗",
        "碳石墨磨损产生的微量碳粉为黑色，易发现清除，无金属污染隐蔽风险",
      ],
      en: [
        "FDA food-grade resin-impregnated carbon graphite (M106K), completely oil-free self-lubrication with zero grease contamination risk",
        "Carbon graphite is non-metallic with zero copper or iron ion leaching, compliant with FDA 21 CFR 178 food contact material standards",
        "Chemically inert against CIP acid/alkali cleaning fluids (pH 2-12), tolerates steam sterilization and acid-alkali alternating cleaning",
        "Carbon graphite wear produces trace black carbon powder that is easily detected and removed, with no hidden metal contamination risk",
      ],
      vi: [
        "M106K resin impregnation cấp FDA, hoàn toàn không dầu tự bôi trơn, không mỡ bẩn",
        "Than chì phi kim không rã đồng sắt, theo FDA 21 CFR 178 tiếp xúc thực phẩm",
        "Trơ hóa học chịu dung dịch CIP axit kiềm (pH 2-12), tiệt trùng hơi và rửa xen kẽ",
        "Mòn than chì ra bột carbon đen dễ thấy dễ dọn, không nguy cơ bẩn kim loại tiềm ẩn",
      ],
      th: [
        "M106K resin impregnation ระดับ FDA ตัวหล่อลื่นตัวเองไม่มีน้ำมัน ไม่มีความเสี่ยงจารบีปนเปื้อน",
        "กราไฟต์คาร์บอนไม่ใช่โลหะไม่รั่วไอออนทองแดงเหล็ก ตาม FDA 21 CFR 178",
        "เฉื่อยทางเคมีทนของเหลว CIP กรด/ด่าง (pH 2-12) ทนไอน้ำฆ่าเชื้อและสลับล้างกรด-ด่าง",
        "การสึกของกราไฟต์ให้ผงคาร์บอนดำปริมาณน้อยตรวจพบง่ายและกำจัดง่าย ไม่มีความเสี่ยงปนเปื้อนโลหะซ่อนเร้น",
      ],
    },
    specs: [
      { label: "Temperature", value: "-20°C ~ 220°C" },
      { label: "Pressure", value: "≤ 10 MPa" },
      { label: "Speed", value: "≤ 10 m/s" },
      { label: "Media", value: "Food slurries, CIP fluids, steam" },
      { label: "Grade", value: "M106K (FDA Resin)" },
      { label: "Standard", value: "FDA 21 CFR 178 / EU 10/2011" },
    ],
    relatedProducts: ["bia-series", "m7n-series", "graphite-bushing", "109-series"],
    faq: {
      zh: [
        { q: "碳石墨密封件符合FDA食品级要求吗？", a: "符合。M106K食品级树脂浸渍碳石墨通过FDA 21 CFR 178食品接触材料标准认证，完全无油运行，无金属离子析出，适配HACCP食品安全管理体系要求。" },
        { q: "搅拌机铜套污染产品如何彻底解决？", a: "将铜套更换为M106K食品级碳石墨轴套。碳石墨非金属，无铜离子析出；自润滑免润滑脂，无油脂甩出混入产品。彻底解决铜离子和润滑脂双重污染。" },
        { q: "CIP在线清洗酸碱液会腐蚀碳石墨吗？", a: "不会。碳石墨化学惰性覆盖pH 0-14，耐受CIP酸碱清洗液(pH 2-12)和蒸汽消毒。树脂浸渍牌号填充孔隙，进一步降低渗透与化学侵蚀风险。" },
        { q: "碳石墨磨损产生的粉末会污染食品吗？", a: "碳石墨磨损产生微量黑色碳粉，与食品颜色对比明显，易被发现和清除。碳粉本身是食品级材料(FDA认证)，微量摄入无害。相比金属磨损颗粒，碳粉污染更易控制和发现。" },
      ],
      en: [
        { q: "Are carbon graphite seals FDA food-grade compliant?", a: "Yes. M106K food-grade resin-impregnated carbon graphite is certified to FDA 21 CFR 178 food contact material standards, completely oil-free with zero metal-ion leaching, suited for HACCP food safety management systems." },
        { q: "How to completely resolve mixer copper bushing product contamination?", a: "Replace copper bushings with M106K food-grade carbon graphite bushings. Carbon graphite is non-metallic with zero copper ion leaching; self-lubricating without grease, no oil flung into product. Completely resolves dual copper-ion and grease contamination." },
        { q: "Will CIP acid/alkali cleaning fluids corrode carbon graphite?", a: "No. Carbon graphite is chemically inert across pH 0-14, tolerating CIP acid/alkali (pH 2-12) and steam sterilization. Resin-impregnated grades fill porosity, further reducing permeation and chemical attack risk." },
        { q: "Will carbon graphite wear powder contaminate food?", a: "Carbon graphite wear produces trace black carbon powder with high contrast against food color, easily detected and removed. Carbon powder is itself food-grade (FDA certified), harmless in trace amounts. Compared to metallic wear particles, carbon powder contamination is easier to control and detect." },
      ],
      vi: [
        { q: "Vòng đệm than chì có đạt FDA thực phẩm không?", a: "Có. M106K resin impregnation cấp thực phẩm qua FDA 21 CFR 178, hoàn toàn không dầu, không rã kim loại, theo HACCP." },
        { q: "Cách giải quyết bạc đồng máy trộn bẩn sản phẩm?", a: "Đổi bạc đồng sang M106K than chì cấp thực phẩm. Phi kim không rã đồng; tự bôi trơn không mỡ văng. Giải quyết kép đồng và mỡ bẩn." },
        { q: "Dung dịch CIP axit kiềm có ăn mòn than chì không?", a: "Không. Than chì trơ pH 0-14, chịu CIP (pH 2-12) và tiệt trùng hơi. Resin impregnation lấp lỗ giảm thẩm thấu." },
        { q: "Bột mòn than chì có bẩn thực phẩm không?", a: "Bột carbon đen dễ thấy dễ dọn. Carbon cấp FDA vô hại lượng vết. So với hạt kim loại, bột carbon dễ kiểm soát phát hiện hơn." },
      ],
      th: [
        { q: "ซีลกราไฟต์ได้มาตรฐาน FDA อาหารหรือไม่?", a: "ได้ M106K resin impregnation ระดับอาหารผ่าน FDA 21 CFR 178 ไม่มีน้ำมัน ไม่รั่วไอออนโลหะ ตาม HACCP" },
        { q: "แก้บุชชิ่งทองแดงเครื่องผสมปนเปื้อนผลิตภัณฑ์อย่างไร?", a: "เปลี่ยนบุชชิ่งทองแดงเป็น M106K กราไฟต์อาหาร ไม่ใช่โลหะไม่รั่วทองแดง ตัวหล่อลื่นตัวเองไม่มีจารบีกระเด็น แก้ปัญหาทองแดงและจารบีพร้อมกัน" },
        { q: "ของเหลว CIP กรด/ด่างจะกัดกร่อนกราไฟต์หรือไม่?", a: "ไม่ กราไฟต์เฉื่อย pH 0-14 ทน CIP (pH 2-12) และไอน้ำฆ่าเชื้อ resin impregnation เติมรูพรุนลดการซึม" },
        { q: "ผงจากการสึกของกราไฟต์จะปนเปื้อนอาหารหรือไม่?", a: "ผงคาร์บอนดำตัดกับสีอาหาร ตรวจพบและกำจัดง่าย คาร์บอนได้รับการรับรอง FDA ไม่เป็นอันตรายในปริมาณน้อย เทียบกับเศษโลหะ ผงคาร์บอนควบคุมและตรวจพบง่ายกว่า" },
      ],
    },
  },

  // 8. 电力
  {
    slug: "power-generation",
    title: {
      zh: "电力行业碳石墨密封与轴承 | 循环水泵与汽轮机油泵密封方案",
      en: "Power Generation Carbon Graphite Seals & Bearings | Circulating Water Pump & Turbine Oil Pump Sealing Solutions",
      vi: "Vòng đệm & vòng bi than chì carbon cho điện | Bơm nước tuần hoàn và bơm dầu tuabin",
      th: "ซีลและแบริ่งคาร์บอนกราไฟต์สำหรับไฟฟ้า | ปั๊มน้ำหมุนเวียนและปั๊มน้ำมันเทอร์ไบน์",
    },
    description: {
      zh: "华豪密封为电力行业提供碳石墨密封环、轴承与推力盘，适配电厂循环水泵、汽轮机润滑油泵、核电站辅助泵、热电联产供热泵。耐高温蒸汽环境(≤600℃)，自润滑适应油泵故障干运转工况，大尺寸轴承适配120mm以上大轴径泵组，延长大修周期至15个月以上。",
      en: "Huahao Sealing provides carbon graphite seal rings, bearings and thrust discs for power generation — circulating water pumps, turbine lube oil pumps, nuclear auxiliary pumps and CHP heat supply pumps. High-temp steam service (≤600°C), self-lubrication for dry running during oil pump failure, large-size bearings for 120mm+ shaft pumps, extending overhaul cycles beyond 15 months.",
      vi: "Huahao Sealing cung cấp vòng đệm, vòng bi và đĩa hãm than chì carbon cho điện — bơm nước tuần hoàn, bơm dầu tuabin, bơm phụ trợ hạt nhân và bơm nhiệt CHP. Chịu hơi nhiệt (≤600°C), tự bôi trơn khi bơm dầu hỏng chạy khô, bạc cỡ lớn cho trục 120mm+, kéo dài đại tu quá 15 tháng.",
      th: "Huahao Sealing จัดหาซีล แบริ่งและจานหนุนกราไฟต์คาร์บอนสำหรับไฟฟ้า — ปั๊มน้ำหมุนเวียน ปั๊มน้ำมันหล่อลื่นเทอร์ไบน์ ปั๊มเสริมนิวเคลียร์และปั๊ม CHP ทนไอน้ำอุณหภูมิสูง (≤600°C) ตัวหล่อลื่นตัวเองเมื่อปั๊มน้ำมันเสียหมุนแห้ง แบริ่งขนาดใหญ่สำหรับเพลา 120mm+ ยืดการซ่อมใหญ่เกิน 15 เดือน",
    },
    challenges: {
      zh: [
        "电厂循环水泵大轴径(120mm+)高转速运行，金属轴承摩擦热积聚、磨损快",
        "汽轮机润滑油泵在200-300℃高温环境运行，密封件高温失弹、氧化",
        "循环水中含泥沙颗粒，金属轴承磨粒磨损严重，每月停机检修",
        "高温区域防火安全要求无油运行，润滑油泄漏火灾风险高",
      ],
      en: [
        "Power plant circulating water pumps with large shafts (120mm+) at high speed; metallic bearings suffer friction heat buildup and rapid wear",
        "Turbine lube oil pumps operate at 200-300°C; seals suffer high-temp elasticity loss and oxidation",
        "Circulating water carries silt particles; metallic bearings suffer severe abrasive wear with monthly maintenance shutdowns",
        "High-temperature zones require oil-free operation; lube oil leakage creates high fire risk",
      ],
      vi: [
        "Bơm nước tuần hoàn nhà máy điện trục lớn (120mm+) tốc độ cao; bạc kim loại tích nhiệt ma sát mòn nhanh",
        "Bơm dầu tuabin hoạt động 200-300°C; kín mất đàn hồi nhiệt và oxy hóa",
        "Nước tuần hoàn có bùn cát; bạc kim loại mòn nặng,每月 dừng sửa",
        "Vùng nhiệt cao yêu cầu không dầu; dầu rò rỉ nguy cơ cháy cao",
      ],
      th: [
        "ปั๊มน้ำหมุนเวียนโรงไฟฟ้าเพลาใหญ่ (120mm+) ความเร็วสูง แบริ่งโลหะสะสมความร้อนจากการเสียดสีและสึกเร็ว",
        "ปั๊มน้ำมันหล่อลื่นเทอร์ไบน์ทำงานที่ 200-300°C ซีลสูญเสียความยืดหยุ่นและออกซิเดชัน",
        "น้ำหมุนเวียนมีตะกอนโคลนทราย แบริ่งโลหะสึกกร่อนหนัก ต้องหยุดซ่อมทุกเดือน",
        "โซนอุณหภูมิสูงต้องทำงานไม่มีน้ำมัน น้ำมันหล่อลื่นรั่วมีความเสี่ยงไฟไหม้สูง",
      ],
    },
    solutions: {
      zh: [
        "大尺寸碳石墨轴承(58B系列定制)，耐温250℃，固体润滑无需流体润滑膜",
        "浸锑石墨牌号(M106H)耐温500℃，抗氧化处理适配高温蒸汽环境",
        "碳石墨自润滑，润滑油泵故障时仍可短期干运转，争取应急停机时间",
        "大轴径优化长径比改善散热，内孔微量锥度补偿温度梯度变形",
      ],
      en: [
        "Large-size carbon graphite bearings (58B series custom) rated 250°C, solid lubrication independent of fluid lubricant film",
        "Antimony-impregnated graphite grade (M106H) rated 500°C, anti-oxidation treatment for high-temp steam environments",
        "Carbon graphite self-lubrication tolerates short-term dry running during lube oil pump failure, gaining emergency shutdown time",
        "Large-shaft optimized length-to-diameter ratio improves heat dissipation; bore micro-taper compensates for temperature-gradient deformation",
      ],
      vi: [
        "Bạc than chì cỡ lớn (58B custom) chịu 250°C, bôi trơn rắn không cần màng bôi trơn lỏng",
        "M106H antimony chịu 500°C, chống oxy hóa cho môi trường hơi nhiệt",
        "Tự bôi trơn, bơm dầu hỏng vẫn chạy khô ngắn hạn, có thời gian dừng khẩn",
        "Trục lớn tối ưu tỷ lệ dài-đường kính tản nhiệt; lỗ côn nhỏ bù biến dạng gradient nhiệt",
      ],
      th: [
        "แบริ่งกราไฟต์ขนาดใหญ่ (58B custom) ทน 250°C ตัวหล่อลื่นแบบแข็งไม่ต้องมีฟิล์มหล่อลื่นเหลว",
        "M106H antimony ทน 500°C ป้องกันออกซิเดชันสำหรับสภาพแวดล้อมไอน้ำอุณหภูมิสูง",
        "ตัวหล่อลื่นตัวเองทนการหมุนแห้งระยะสั้นเมื่อปั๊มน้ำมันหล่อลื่นเสีย ได้เวลาหยุดฉุกเฉิน",
        "เพลาใหญ่ปรับอัตราส่วนความยาวต่อเส้นผ่านศูนย์กลางเพื่อระบายความร้อน รูปทรงกรวยเล็กชดเชยการเปลี่ยนรูปจากความชันอุณหภูมิ",
      ],
    },
    specs: [
      { label: "Temperature", value: "0°C ~ 600°C" },
      { label: "Pressure", value: "≤ 16 MPa" },
      { label: "Speed", value: "≤ 20 m/s" },
      { label: "Shaft Diameter", value: "up to 120mm+" },
      { label: "Media", value: "Cooling water, steam, thermal oil" },
      { label: "Grade", value: "M106H (Sb) / 58B Custom" },
    ],
    relatedProducts: ["58b-series", "109-series", "graphite-bearing", "graphite-thrust-disc"],
    faq: {
      zh: [
        { q: "电厂循环水泵120mm大轴径用什么轴承？", a: "58B系列大尺寸碳石墨轴承定制，耐温250℃，固体润滑无需流体润滑膜。针对大轴径优化长径比改善散热，内孔微量锥度补偿温度梯度变形。" },
        { q: "汽轮机润滑油泵300℃高温密封选什么？", a: "M106H浸锑石墨牌号，耐温500℃，配有抗氧化处理。300℃远低于耐温上限，长期运行性能稳定。碳石墨自润滑特性还能在润滑油泵故障时短期干运转，争取应急停机时间。" },
        { q: "高温区域为什么必须无油运行？", a: "电厂高温区域(锅炉、汽机附近)防火安全要求严格，润滑油泄漏遇高温表面易引发火灾。碳石墨自润滑免外部润滑脂，从源头消除火灾风险。" },
        { q: "循环水含泥沙颗粒导致轴承磨损快怎么办？", a: "选M106H浸锑牌号，高硬度抵抗颗粒磨损。轴承间隙优化设计允许颗粒通过不卡死。某电厂改造后连续运行15个月，年停机时间减少720小时。" },
      ],
      en: [
        { q: "Which bearing for power plant circulating water pump 120mm large shaft?", a: "58B series large-size carbon graphite bearings custom-made, rated 250°C, solid lubrication without fluid film. Optimized length-to-diameter ratio for large shafts improves heat dissipation; bore micro-taper compensates for temperature-gradient deformation." },
        { q: "Which seal for turbine lube oil pump at 300°C?", a: "M106H antimony-impregnated graphite grade rated 500°C with anti-oxidation treatment. 300°C is well within limits for stable long-term performance. Self-lubrication also enables short-term dry running during lube pump failure." },
        { q: "Why must high-temperature zones operate oil-free?", a: "Power plant high-temp zones (near boiler, turbine) have strict fire safety requirements; lube oil leakage contacting hot surfaces easily causes fire. Carbon graphite self-lubrication eliminates external grease, removing fire risk at the source." },
        { q: "How to address rapid bearing wear from silt in circulating water?", a: "Select M106H antimony grade with high hardness to resist particle wear. Bearing clearance is optimized to allow particles to pass without seizure. One plant retrofit achieved 15 months continuous operation, reducing annual downtime by 720 hours." },
      ],
      vi: [
        { q: "Bạc nào cho bơm nước tuần hoàn nhà máy điện trục 120mm?", a: "58B series bạc than chì cỡ lớn custom chịu 250°C, bôi trơn rắn không màng lỏng. Tối ưu tỷ lệ dài-đường kính cho trục lớn tản nhiệt; lỗ côn nhỏ bù biến dạng gradient nhiệt." },
        { q: "Kín nào cho bơm dầu tuabin 300°C?", a: "M106H antimony chịu 500°C có chống oxy hóa. 300°C thấp hơn giới hạn, ổn định dài hạn. Tự bôi trơn cho chạy khô ngắn hạn khi bơm dầu hỏng." },
        { q: "Tại sao vùng nhiệt cao phải không dầu?", a: "Vùng nhiệt cao nhà máy điện (gần lò tuabin) yêu cầu phòng cháy nghiêm; dầu rò rỉ gặp bề mặt nhiệt dễ cháy. Tự bôi trơn than chì triệt tiêu nguy cơ cháy." },
        { q: "Bùn cát nước tuần hoàn làm bạc mòn nhanh xử lý thế nào?", a: "Chọn M106H antimony cứng cao chống mài mòn hạt. Khe hở bạc tối ưu cho hạt qua không kẹt. Một nhà máy cải tạo chạy 15 tháng, giảm dừng 720 giờ/năm." },
      ],
      th: [
        { q: "แบริ่งใดสำหรับปั๊มน้ำหมุนเวียนโรงไฟฟ้าเพลา 120mm?", a: "58B series แบริ่งกราไฟต์ขนาดใหญ่ custom ทน 250°C ตัวหล่อลื่นแบบแข็งไม่ต้องมีฟิล์มเหลว ปรับอัตราส่วนความยาวต่อเส้นผ่านศูนย์กลางสำหรับเพลาใหญ่ระบายความร้อน รูปทรงกรวยเล็กชดเชยการเปลี่ยนรูป" },
        { q: "ซีลใดสำหรับปั๊มน้ำมันเทอร์ไบน์ 300°C?", a: "M106H antimony ทน 500°C ป้องกันออกซิเดชัน 300°C ต่ำกว่าขีดจำกัด เสถียรระยะยาว ตัวหล่อลื่นตัวเองหมุนแห้งได้ระยะสั้นเมื่อปั๊มน้ำมันเสีย" },
        { q: "ทำไมโซนอุณหภูมิสูงต้องไม่มีน้ำมัน?", a: "โซนอุณหภูมิสูงในโรงไฟฟ้า (ใกล้หม้อไอน้ำเทอร์ไบน์) มีข้อกำหนดป้องกันอัคคีภัยเข้มงวด น้ำมันรั่วสัมผัสผิวร้อนเกิดไฟไหม้ง่าย ตัวหล่อลื่นตัวเองของกราไฟต์ขจัดความเสี่ยงไฟไหม้ที่ต้นเหตุ" },
        { q: "ตะกอนในน้ำหมุนเวียนทำให้แบริ่งสึกเร็ว จัดการอย่างไร?", a: "เลือก M106H antimony แข็งสูงต้านการสึกจากเศษ ระยะห่างแบริ่งที่ปรับให้เหมาะสมปล่อยให้เศษผ่านไม่ติด โรงไฟฟ้าหนึ่งปรับปรุงแล้วทำงาน 15 เดือน ลดการหยุด 720 ชม./ปี" },
      ],
    },
  },

  // 9. 真空泵
  {
    slug: "vacuum-pump",
    title: {
      zh: "真空泵碳石墨密封与旋片 | 干式机械真空泵无油自润滑密封方案",
      en: "Vacuum Pump Carbon Graphite Seals & Vanes | Dry Mechanical Vacuum Pump Oil-Free Self-Lubricating Sealing Solutions",
      vi: "Vòng đệm & cánh quạt than chì carbon cho bơm chân không | Bơm chân không khô không dầu tự bôi trơn",
      th: "ซีลและใบพัดกราไฟต์คาร์บอนสำหรับปั๊มสุญญากาศ | ปั๊มสุญญากาศแห้งไม่มีน้ำมันตัวหล่อลื่นตัวเอง",
    },
    description: {
      zh: "华豪密封为真空泵行业提供碳石墨密封环、旋片与轴承，适配干式机械真空泵、旋片真空泵、罗茨真空泵。碳石墨自润滑免油污染真空系统，高纯度牌号低放气适配10⁻⁶ Torr高真空，耐温350℃适配高温烘烤除气工艺。",
      en: "Huahao Sealing provides carbon graphite seal rings, vanes and bearings for vacuum pumps — dry mechanical vacuum pumps, rotary vane pumps and Roots pumps. Carbon graphite self-lubrication avoids oil contamination of vacuum systems; high-purity grades with low outgassing suit 10⁻⁶ Torr high vacuum; 350°C rating suits bake-out degassing processes.",
      vi: "Huahao Sealing cung cấp vòng đệm, cánh quạt và vòng bi than chì carbon cho bơm chân không — bơm chân không khô, bơm cánh quạt và bơm Roots. Tự bôi trơn tránh dầu bẩn hệ chân không; vật liệu tinh khiết thấp thoát khí cho 10⁻⁶ Torr; chịu 350°C cho sấy nhiệt.",
      th: "Huahao Sealing จัดหาซีล ใบพัดและแบริ่งกราไฟต์คาร์บอนสำหรับปั๊มสุญญากาศ — ปั๊มสุญญากาศแห้ง ปั๊มใบพัดหมุนและปั๊ม Roots ตัวหล่อลื่นตัวเองหลีกเลี่ยงน้ำมันปนเปื้อนระบบสุญญากาศ วัสดุบริสุทธิ์ต่ำก๊าซออกสำหรับ 10⁻⁶ Torr ทน 350°C สำหรับกระบวนการอบ",
    },
    challenges: {
      zh: [
        "油润滑真空泵的油蒸汽污染真空系统与工艺产品，无法满足洁净真空要求",
        "高真空(10⁻⁶ Torr)环境下密封件放气降低真空度，污染工艺",
        "干式真空泵高转速(3000-6000 rpm)干摩擦产生大量热，密封件磨损快",
        "高温烘烤除气工艺(200-350℃)使普通密封材料氧化、失弹",
      ],
      en: [
        "Oil-lubricated vacuum pump oil vapor contaminates vacuum systems and process products, failing to meet clean vacuum requirements",
        "High vacuum (10⁻⁶ Torr) environments suffer seal outgassing that degrades vacuum level and contaminates processes",
        "Dry vacuum pumps at high speed (3000-6000 rpm) generate significant heat from dry friction, causing rapid seal wear",
        "Bake-out degassing processes at 200-350°C oxidize and de-elasticize standard seal materials",
      ],
      vi: [
        "Bơm chân không dầu có hơi dầu bẩn hệ chân không và sản phẩm, không đáp ứng chân không sạch",
        "Chân không cao (10⁻⁶ Torr) khí thoát kín giảm mức chân không bẩn quy trình",
        "Bơm chân không khô tốc độ cao (3000-6000 rpm) ma sát khô sinh nhiệt lớn, kín mòn nhanh",
        "Sấy nhiệt (200-350°C) làm vật liệu kín oxy hóa mất đàn hồi",
      ],
      th: [
        "ไอน้ำมันจากปั๊มสุญญากาศหล่อลื่นด้วยน้ำมันปนเปื้อนระบบและผลิตภัณฑ์ ไม่ผ่านข้อกำหนดสุญญากาศสะอาด",
        "สุญญากาศสูง (10⁻⁶ Torr) ก๊าซจากซีลทำให้ระดับสุญญากาศลดลงและปนเปื้อน",
        "ปั๊มสุญญากาศแห้งความเร็วสูง (3000-6000 rpm) เกิดความร้อนจากการเสียดสีแห้งจำนวนมาก ซีลสึกเร็ว",
        "การอบ (200-350°C) ทำให้วัสดุซีลออกซิไดซ์และสูญเสียความยืดหยุ่น",
      ],
    },
    solutions: {
      zh: [
        "碳石墨自润滑免油运行，彻底消除油蒸汽污染，适配干式洁净真空系统",
        "高纯度碳石墨牌号低放气率，适配10⁻⁶ Torr高真空环境",
        "配对SiC端面高导热率散热，适应高转速干摩擦工况",
        "抗氧化浸渍牌号耐温350℃，适配高温烘烤除气工艺",
      ],
      en: [
        "Carbon graphite self-lubrication enables oil-free operation, completely eliminating oil vapor contamination for dry clean vacuum systems",
        "High-purity carbon graphite grades with low outgassing rate suit 10⁻⁶ Torr high vacuum environments",
        "Paired with SiC mating face of high thermal conductivity for heat dissipation in high-speed dry friction service",
        "Anti-oxidation impregnated grades rated 350°C suit bake-out degassing processes",
      ],
      vi: [
        "Tự bôi trơn than chì không dầu, triệt tiêu hơi dầu bẩn cho hệ chân không khô sạch",
        "Vật liệu tinh khiết thấp thoát khí cho 10⁻⁶ Torr chân không cao",
        "Ghép mặt SiC dẫn nhiệt cao tản nhiệt cho ma sát khô tốc độ cao",
        "Vật liệu chống oxy hóa chịu 350°C cho sấy nhiệt",
      ],
      th: [
        "ตัวหล่อลื่นตัวเองของกราไฟต์ทำงานไม่มีน้ำมัน ขจัดไอน้ำมันปนเปื้อนสำหรับระบบสุญญากาศแห้งสะอาด",
        "วัสดุกราไฟต์บริสุทธิ์สูงอัตราก๊าซออกต่ำ เหมาะสำหรับสุญญากาศสูง 10⁻⁶ Torr",
        "จับคู่ผิว SiC นำความร้อนสูง ระบายความร้อนสำหรับการเสียดสีแห้งความเร็วสูง",
        "วัสดุ impregnation ป้องกันออกซิเดชัน ทน 350°C สำหรับกระบวนการอบ",
      ],
    },
    specs: [
      { label: "Vacuum Level", value: "10⁻⁶ Torr" },
      { label: "Temperature", value: "-20°C ~ 350°C" },
      { label: "Speed", value: "≤ 6000 rpm" },
      { label: "Media", value: "Air, N₂, Ar, process gases" },
      { label: "Grade", value: "M106K (Resin) / M106H (Sb)" },
      { label: "Outgassing", value: "Low (ASTM E595)" },
    ],
    relatedProducts: ["bia-series", "three-part-series", "109-series", "graphite-bearing"],
    faq: {
      zh: [
        { q: "干式真空泵为什么用碳石墨密封？", a: "碳石墨自润滑免油运行，彻底消除油蒸汽污染真空系统。高纯度牌号低放气适配10⁻⁶ Torr高真空，是干式洁净真空泵的理想密封材料。" },
        { q: "真空泵高转速6000 rpm密封磨损快怎么办？", a: "推荐BIA系列碳石墨密封环配SiC端面。SiC高导热率快速散热，防止高速干摩擦热积聚；石墨自润滑降低摩擦系数，适配6000 rpm高速干运转工况。" },
        { q: "高温烘烤除气350℃后密封性能变化吗？", a: "抗氧化浸渍牌号耐温350℃，烘烤后性能稳定。树脂浸渍牌号经烘烤后无挥发物残留。两种牌号均适配真空泵烘烤除气工艺。" },
        { q: "碳石墨旋片适用于哪种真空泵？", a: "适用于旋片真空泵和罗茨真空泵。碳石墨旋片自润滑免油，配对铸铁或SiC缸体，在干摩擦工况下磨损率低，延长旋片更换周期至12个月以上。" },
      ],
      en: [
        { q: "Why use carbon graphite seals in dry vacuum pumps?", a: "Carbon graphite self-lubrication enables oil-free operation, completely eliminating oil vapor contamination of vacuum systems. High-purity grades with low outgassing suit 10⁻⁶ Torr high vacuum — ideal for dry clean vacuum pumps." },
        { q: "How to address rapid seal wear at 6000 rpm in vacuum pumps?", a: "BIA series carbon graphite seal rings with SiC mating face. SiC high thermal conductivity dissipates heat from high-speed dry friction; graphite self-lubrication lowers friction coefficient for 6000 rpm dry running." },
        { q: "Does performance change after 350°C bake-out degassing?", a: "Anti-oxidation impregnated grades rated 350°C maintain stable performance after bake-out. Resin-impregnated grades leave no volatile residue after bake-out. Both suit vacuum pump bake-out processes." },
        { q: "Which vacuum pumps are carbon graphite vanes suited for?", a: "Rotary vane vacuum pumps and Roots pumps. Carbon graphite vanes are self-lubricating and oil-free, paired with cast iron or SiC cylinders, with low wear rate in dry friction, extending vane replacement cycles beyond 12 months." },
      ],
      vi: [
        { q: "Tại sao dùng kín than chì cho bơm chân không khô?", a: "Tự bôi trơn than chì không dầu, triệt tiêu hơi dầu bẩn hệ chân không. Vật liệu tinh khiết thấp thoát khí cho 10⁻⁶ Torr, lý tưởng cho bơm chân không khô sạch." },
        { q: "Kín bơm chân không 6000 rpm mòn nhanh xử lý thế nào?", a: "BIA series than chì ghép mặt SiC. SiC dẫn nhiệt cao tản nhiệt ma sát khô; tự bôi trơn giảm ma sát cho 6000 rpm chạy khô." },
        { q: "Hiệu suất có đổi sau sấy 350°C không?", a: "Vật liệu chống oxy hóa chịu 350°C ổn định sau sấy. Resin impregnation không dư bay hơi. Cả hai cho sấy bơm chân không." },
        { q: "Cánh quạt than chì dùng cho bơm chân không nào?", a: "Bơm cánh quạt và bơm Roots. Cánh quạt than chì tự bôi trơn không dầu, ghép gang hoặc SiC, mòn thấp chạy khô, kéo dài thay cánh quá 12 tháng." },
      ],
      th: [
        { q: "ทำไมใช้ซีลกราไฟต์ในปั๊มสุญญากาศแห้ง?", a: "ตัวหล่อลื่นตัวเองของกราไฟต์ทำงานไม่มีน้ำมัน ขจัดไอน้ำมันปนเปื้อนระบบสุญญากาศ วัสดุบริสุทธิ์ต่ำก๊าซออกสำหรับ 10⁻⁶ Torr เหมาะสำหรับปั๊มสุญญากาศแห้งสะอาด" },
        { q: "ซีลปั๊มสุญญากาศ 6000 rpm สึกเร็ว จัดการอย่างไร?", a: "BIA series กราไฟต์จับคู่ SiC SiC นำความร้อนสูงระบายความร้อนจากการเสียดสีแห้ง ตัวหล่อลื่นตัวเองลดสัมประสิทธิ์การเสียดสี สำหรับ 6000 rpm หมุนแห้ง" },
        { q: "ประสิทธิภาพเปลี่ยนหลังอบ 350°C หรือไม่?", a: "วัสดุป้องกันออกซิเดชัน ทน 350°C เสถียรหลังอบ resin impregnation ไม่มีสารระเหยตกค้าง ทั้งสองเหมาะสำหรับการอบปั๊มสุญญากาศ" },
        { q: "ใบพัดกราไฟต์เหมาะสำหรับปั๊มสุญญากาศใด?", a: "ปั๊มใบพัดหมุนและปั๊ม Roots ใบพัดกราไฟต์ตัวหล่อลื่นตัวเองไม่มีน้ำมัน จับคู่กับเหล็กหล่อหรือ SiC สึกน้อยในการเสียดสีแห้ง ยืดรอบเปลี่ยนใบพัดเกิน 12 เดือน" },
      ],
    },
  },

  // 10. 压缩机
  {
    slug: "compressor",
    title: {
      zh: "压缩机碳石墨密封环与活塞环 | 无油润滑往复式/螺杆/离心压缩机密封",
      en: "Compressor Carbon Graphite Seal Rings & Piston Rings | Oil-Free Reciprocating/Screw/Centrifugal Compressor Sealing",
      vi: "Vòng đệm & vòng piston than chì carbon cho máy nén | Máy nén piston/trục vít/ly tâm không dầu",
      th: "แหวนซีลและแหวนลูกสูบคาร์บอนกราไฟต์สำหรับคอมเพรสเซอร์ | คอมเพรสเซอร์ลูกสูบ/สกรู/เซนทริฟิวัดแบบไม่มีน้ำมัน",
    },
    description: {
      zh: "华豪密封为压缩机行业提供碳石墨活塞环、填料密封环与轴承，适配往复式、螺杆式与离心式压缩机。碳石墨自润滑免油运行，满足工艺气、空气、天然气、氢气、CO₂等介质的干式密封需求，耐压25 MPa，耐温350℃，配对SiC端面提升高转速耐磨性。",
      en: "Huahao Sealing supplies carbon graphite piston rings, packing seal rings and bearings for compressors — reciprocating, screw and centrifugal types. Carbon graphite self-lubrication enables oil-free operation for process gas, air, natural gas, hydrogen and CO₂ dry sealing service; rated 25 MPa pressure and 350°C temperature, paired with SiC mating face for high-speed wear resistance.",
      vi: "Huahao Sealing cung cấp vòng piston, vòng đệm packing và vòng bi than chì carbon cho máy nén — piston, trục vít và ly tâm. Tự bôi trơn than chì chạy không dầu cho khí quy trình, không khí, khí tự nhiên, hydro và CO₂; chịu 25 MPa và 350°C, ghép mặt SiC cho tốc độ cao chống mòn.",
      th: "Huahao Sealing จัดหาแหวนลูกสูบ แหวนซีล packing และแบริ่งคาร์บอนกราไฟต์สำหรับคอมเพรสเซอร์ — ลูกสูบ สกรู และเซนทริฟิวัด ตัวหล่อลื่นตัวเองทำงานไม่มีน้ำมันสำหรับก๊าซกระบวนการ อากาศ ก๊าซธรรมชาติ ไฮโดรเจน และ CO₂ ทน 25 MPa และ 350°C จับคู่ SiC สำหรับความเร็วสูงต้านการสึก",
    },
    challenges: {
      zh: [
        "工艺气压缩机要求无油润滑，普通金属活塞环与填料需注油润滑，污染工艺气与下游产品",
        "往复式压缩机活塞杆高压干摩擦磨损严重，金属填料环寿命短，频繁停机更换",
        "天然气与合成气含H₂S、CO₂腐蚀性组分，金属密封件发生化学腐蚀与应力腐蚀开裂",
        "离心式压缩机高速干气密封端面干摩擦发热，普通材料热裂、磨损快",
      ],
      en: [
        "Process gas compressors demand oil-free operation; conventional metallic piston rings and packing require oil lubrication that contaminates process gas and downstream products",
        "Reciprocating compressor piston rods suffer severe high-pressure dry friction wear; metallic packing rings have short life and require frequent shutdown for replacement",
        "Natural gas and synthesis gas contain corrosive H₂S and CO₂; metallic seals suffer chemical corrosion and stress corrosion cracking",
        "Centrifugal compressor high-speed dry gas seal faces suffer dry friction heat; standard materials experience thermal cracking and rapid wear",
      ],
      vi: [
        "Máy nén khí quy trình yêu cầu chạy không dầu; vòng piston và packing kim loại thông thường cần bôi trơn dầu làm bẩn khí quy trình và sản phẩm",
        "Trục piston máy nén chạy đi lại chịu mài mòn ma sát khô áp cao; vòng packing kim loại tuổi thọ ngắn, dừng máy thay thường xuyên",
        "Khí tự nhiên và khí tổng hợp có H₂S và CO₂ ăn mòn; kín kim loại bị ăn mòn hóa học và nứt ứng suất",
        "Mặt kín khí khô tốc độ cao máy nén ly tâm ma sát khô sinh nhiệt; vật liệu thông thường nứt nhiệt và mòn nhanh",
      ],
      th: [
        "คอมเพรสเซอร์ก๊าซกระบวนการต้องทำงานไม่มีน้ำมัน แหวนลูกสูบและ packing โลหะทั่วไปตองหล่อลื่นด้วยน้ำมันทำให้ก๊าซและผลิตภัณฑ์ปนเปื้อน",
        "ลูกสูบลูกเสื้อคอมเพรสเซอร์กระทุ้เสียดสีแห้งแรงดันสูงสึกหนัก แหวน packing โลหะอายุสั้น หยุดเครื่องเปลี่ยนบ่อย",
        "ก๊าซธรรมชาติและก๊าซสังเคราะห์มี H₂S และ CO₂ ซีลโลหะเกิดการกัดกร่อนเคมีและร้าวแรงเครียด",
        "ผิวซีลก๊าซแห้งความเร็วสูงคอมเพรสเซอร์เซนทริฟิวัดเสียดสีแห้งเกิดความร้อน วัสดุทั่วไปร้าวจากความร้อนและสึกเร็ว",
      ],
    },
    solutions: {
      zh: [
        "碳石墨自润滑活塞环与填料环，免油运行彻底消除工艺气油污染，适配无油润滑压缩机",
        "锑浸渍石墨牌号（M106H）耐温500℃，高压干摩擦工况下耐磨寿命长，减少停机更换",
        "碳化处理石墨牌号（M191T）化学惰性抵抗H₂S、CO₂腐蚀，无应力腐蚀开裂风险",
        "碳石墨配对SiC端面用于离心式干气密封，高导热率散热，防止高速干摩擦热裂",
      ],
      en: [
        "Carbon graphite self-lubricating piston rings and packing rings enable oil-free operation, completely eliminating process gas oil contamination for oil-lubricated compressors",
        "Antimony-impregnated graphite grade (M106H) rated 500°C provides long wear life under high-pressure dry friction, reducing shutdowns",
        "Carbonized graphite grade (M191T) with chemical inertness resists H₂S and CO₂ corrosion, with no stress corrosion cracking risk",
        "Carbon graphite paired with SiC mating face for centrifugal dry gas seals provides high thermal conductivity heat dissipation, preventing high-speed dry friction thermal cracking",
      ],
      vi: [
        "Vòng piston và vòng packing than chì tự bôi trơn chạy không dầu, triệt tiêu dầu bẩn khí quy trình cho máy nén không dầu",
        "Vật liệu than chì impregnation antimony (M106H) chịu 500°C tuổi thọ mòn dài dưới ma sát khô áp cao, giảm dừng máy",
        "Vật liệu than chì carbonized (M191T) trơ hóa học chịu H₂S và CO₂, không nứt ứng suất",
        "Than chì ghép mặt SiC cho kín khí khô ly tâm dẫn nhiệt cao tản nhiệt, chống nứt nhiệt ma sát khô tốc độ cao",
      ],
      th: [
        "แหวนลูกสูบและแหวน packing กราไฟต์ตัวหล่อลื่นตัวเองทำงานไม่มีน้ำมัน ขจัดน้ำมันปนเปื้อนก๊าซสำหรับคอมเพรสเซอร์ไม่มีน้ำมัน",
        "วัสดุกราไฟต์ impregnation antimony (M106H) ทน 500°C อายุการสึกยาวใต้แรงดันสูงเสียดสีแห้ง ลดการหยุดเครื่อง",
        "วัสดุกราไฟต์ carbonized (M191T) เฉื่อยทางเคมีทน H₂S และ CO₂ ไม่เกิดร้าวแรงเครียด",
        "กราไฟต์จับคู่ผิว SiC สำหรับซีลก๊าซแห้งเซนทริฟิวัด นำความร้อนสูงระบายความร้อน ป้องกันร้าวจากความร้อนเสียดสีแห้งความเร็วสูง",
      ],
    },
    specs: [
      { label: "Pressure", value: "≤ 25 MPa" },
      { label: "Temperature", value: "-40°C ~ 350°C" },
      { label: "Speed", value: "≤ 25 m/s" },
      { label: "Media", value: "Air, N₂, H₂, natural gas, CO₂, H₂S" },
      { label: "Grade", value: "M106H (Sb) / M191T (Carbonized) / M106K (Resin)" },
      { label: "Lubrication", value: "Oil-free self-lubricating" },
    ],
    relatedProducts: ["bia-series", "three-part-series", "graphite-bushing", "graphite-bearing"],
    faq: {
      zh: [
        { q: "无油润滑压缩机为什么用碳石墨活塞环？", a: "碳石墨自润滑免油运行，彻底杜绝润滑油污染工艺气。配对缸体或SiC套，干摩擦磨损率低，延长活塞环更换周期至12-18个月，是无油压缩机的理想密封材料。" },
        { q: "往复式压缩机高压25 MPa工况选什么牌号？", a: "推荐M106H锑浸渍牌号，耐温500℃，抗压强度高，高压干摩擦工况下耐磨寿命长。配对SiC或硬铬镀层活塞杆，密封寿命可达12-18个月。" },
        { q: "含H₂S天然气压缩机密封会腐蚀吗？", a: "不会。碳化处理牌号（M191T）化学惰性强，耐受H₂S、CO₂腐蚀，无应力腐蚀开裂风险。碳石墨是非金属，不发生电化学腐蚀，适合酸性天然气工况。" },
        { q: "离心式压缩机干气密封端面材料怎么选？", a: "碳石墨配对SiC端面是干气密封的标准组合。SiC高导热率快速散热，防止高速干摩擦热裂；碳石墨自润滑降低摩擦系数，适配高速干气密封工况。" },
      ],
      en: [
        { q: "Why use carbon graphite piston rings in oil-free compressors?", a: "Carbon graphite self-lubrication enables oil-free operation, completely eliminating lube oil contamination of process gas. Paired with cylinder or SiC sleeve, dry friction wear rate is low, extending piston ring replacement cycles to 12-18 months — ideal for oil-free compressors." },
        { q: "Which grade for 25 MPa high-pressure reciprocating compressor service?", a: "M106H antimony-impregnated grade is recommended, rated 500°C with high compressive strength and long wear life under high-pressure dry friction. Paired with SiC or hard chrome plated piston rod, seal life reaches 12-18 months." },
        { q: "Do carbon graphite seals corrode in H₂S-containing natural gas compressors?", a: "No. Carbonized grade (M191T) has strong chemical inertness, resisting H₂S and CO₂ corrosion with no stress corrosion cracking risk. Carbon graphite is non-metallic, with no galvanic corrosion — suited for sour natural gas service." },
        { q: "How to select dry gas seal face materials for centrifugal compressors?", a: "Carbon graphite paired with SiC mating face is the standard combination for dry gas seals. SiC high thermal conductivity dissipates heat, preventing high-speed dry friction thermal cracking; carbon graphite self-lubrication lowers friction coefficient for high-speed dry gas service." },
      ],
      vi: [
        { q: "Tại sao máy nén không dầu dùng vòng piston than chì?", a: "Tự bôi trơn than chì không dầu, triệt tiêu dầu bẩn khí quy trình. Ghép xi lanh hoặc SiC, mòn ma sát khô thấp, thay vòng piston 12-18 tháng — lý tưởng cho máy nén không dầu." },
        { q: "Mẫu nào cho máy nén piston áp 25 MPa?", a: "M106H impregnation antimony chịu 500°C cường độ nén cao mòn dài dưới ma sát khô áp cao. Ghép SiC hoặc crome cứng piston, tuổi thọ kín 12-18 tháng." },
        { q: "Kín than chì bị ăn mòn trong khí tự nhiên có H₂S?", a: "Không. Mẫu carbonized (M191T) trơ hóa học chịu H₂S và CO₂ không nứt ứng suất. Than chì phi kim loại không ăn mòn điện hóa — phù hợp khí chua." },
        { q: "Chọn vật liệu mặt kín khí khô máy nén ly tâm thế nào?", a: "Than chì ghép mặt SiC là chuẩn cho kín khí khô. SiC dẫn nhiệt cao tản nhiệt chống nứt nhiệt ma sát khô tốc độ cao; than chì tự bôi trơn giảm ma sát cho tốc độ cao." },
      ],
      th: [
        { q: "ทำไมคอมเพรสเซอร์ไม่มีน้ำมันใช้แหวนลูกสูบกราไฟต์?", a: "ตัวหล่อลื่นตัวเองของกราไฟต์ทำงานไม่มีน้ำมัน ขจัดน้ำมันปนเปื้อนก๊าซกระบวนการ จับคู่กับลูกสูบหรือ SiC การสึกจากเสียดสีแห้งต่ำ ยืดรอบเปลี่ยนแหวนลูกสูบ 12-18 เดือน เหมาะสำหรับคอมเพรสเซอร์ไม่มีน้ำมัน" },
        { q: "เลือกเกรดใดสำหรับคอมเพรสเซอร์ลูกสูบแรงดัน 25 MPa?", a: "แนะนำ M106H antimony-impregnated ทน 500°C ความแข็งแรงอัดสูง อายุการสึกยาวใต้แรงดันสูงเสียดสีแห้ง จับคู่ SiC หรือโครเมียมแข็ง อายุซีล 12-18 เดือน" },
        { q: "ซีลกราไฟต์ถูกกัดกร่อนในก๊าซธรรมชาติมี H₂S หรือไม่?", a: "ไม่ เกรด carbonized (M191T) เฉื่อยทางเคมีทน H₂S และ CO₂ ไม่เกิดร้าวแรงเครียด กราไฟต์เป็นวัสดุอโลหะไม่เกิดกัดกร่อนกัลวานิก เหมาะสำหรับบริการก๊าซเปรี้ยว" },
        { q: "เลือกวัสดุผิวซีลก๊าซแห้งคอมเพรสเซอร์เซนทริฟิวัดอย่างไร?", a: "กราไฟต์จับคู่ SiC เป็นชุดมาตรฐานสำหรับซีลก๊าซแห้ง SiC นำความร้อนสูงระบายความร้อน ป้องกันร้าวจากความร้อนเสียดสีแห้งความเร็วสูง กราไฟต์ตัวหล่อลื่นตัวเองลดสัมประสิทธิ์การเสียดสีสำหรับความเร็วสูง" },
      ],
    },
  },
]