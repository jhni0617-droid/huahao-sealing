/**
 * 定制加工 Landing Page 数据
 * 目标关键词：custom carbon graphite bushings / custom machined carbon graphite parts /
 * graphite seal rings to drawing / OEM graphite components（中文：非标碳石墨件按图加工）。
 * 买家画像：手里有图纸或样品、要找厂按图做件的设备制造商、代工厂与备件采购。
 * 数值口径取自 lib/products.ts 与 lib/materials-data.ts；MOQ、交期、价格一律按规格与数量核算，不写死。
 */

type Loc = { zh: string; en: string; vi?: string; th?: string }

export interface CustomLanding {
  slug: string
  /** 面包屑与导航用的短名 */
  name: Loc
  title: Loc
  description: Loc
  intro: Loc
  /** 关键事实速览：给精选摘要与 AI 引擎直接引用 */
  keyFacts: { label: string; value: string }[]
  /** 加工动作清单 */
  capabilities: { title: Loc; desc: Loc }[]
  /** 典型公差与表面边界 */
  tolerances: { feature: Loc; value: string }[]
  /** 可用于非标件的材料牌号 */
  grades: { code: string; temp: string; note: Loc }[]
  /** 接受的输入形式 */
  inputs: { label: Loc; desc: Loc }[]
  /** 下单流程 */
  process: { step: string; title: Loc; desc: Loc }[]
  useCases: { zh: string[]; en: string[]; vi?: string[]; th?: string[] }
  faq: { q: Loc; a: Loc }[]
}

export const customLanding: CustomLanding = {
  slug: "custom",
  name: {
    zh: "按图定制加工",
    en: "Custom Machining",
    vi: "Gia công theo bản vẽ",
    th: "ผลิตตามแบบ",
  },
  title: {
    zh: "碳石墨非标件按图定制 | 来图来样加工轴套、密封环与异形件",
    en: "Custom Carbon Graphite Parts | Bushings, Seal Rings & Shapes Machined to Your Drawing",
    vi: "Gia công than chì carbon theo bản vẽ | Bạc lót, vòng đệm và chi tiết hình dạng theo yêu cầu",
    th: "ผลิตชิ้นส่วนคาร์บอนกราไฟต์ตามแบบ | บุชชิ่ง แหวนซีล และรูปทรงพิเศษตามแบบเขียน",
  },
  description: {
    zh: "华豪密封按图纸或样品定制碳石墨非标件：长径比大的薄壁轴套、带螺旋槽与台阶结构的密封环、2/4/6 瓣分体环、超大直径与异形块料加工。CNC 车削、内外圆磨与端面研磨在同一厂内完成，材料可选树脂、锑、铜或巴氏合金浸渍碳石墨，密度 1.55-1.85 g/cm³。评审图纸后给出工艺路线与报价，首件打样确认再批量。",
    en: "Huahao Sealing machines custom carbon graphite parts from your drawing or sample: long thin-wall bushings, seal rings with spiral grooves and steps, 2/4/6-segment split rings, and large-diameter or irregular blocks. CNC turning, cylindrical grinding and face lapping all happen in our own plant, in resin-, antimony-, copper- or babbitt-impregnated carbon graphite at 1.55-1.85 g/cm³. We review the drawing, propose the process route and quotation, then confirm a first article before batch production.",
    vi: "Huahao Sealing gia công chi tiết than chì carbon phi tiêu chuẩn theo bản vẽ hoặc mẫu: bạc lót thành mỏng chiều dài lớn, vòng đệm có rãnh xoắn và bậc, vòng chia 2/4/6 mảnh, khối đường kính lớn hoặc hình dạng bất định. Tiện CNC, mài trụ và mài mặt phẳng thực hiện trong nhà máy của chúng tôi, vật liệu impregnation nhựa, antimony, đồng hoặc babbitt với tỷ trọng 1.55-1.85 g/cm³.",
    th: "Huahao Sealing รับผลิตชิ้นส่วนคาร์บอนกราไฟต์พิเศษตามแบบหรือตัวอย่าง: บุชชิ่งผนังบางความยาวสูง แหวนซีลมีร่องเกลียวและขั้น แหวนแบ่ง 2/4/6 ชิ้น และบล็อกเส้นผ่านศูนย์กลางใหญ่หรือรูปทรงอิสระ กลึง CNC เจียรทรงกระบอกและลบผิวหน้าทำงานในโรงงานของเรา วัสดุ impregnation เรซิน พลวง ทองแดง และบาบดิต ความหนาแน่น 1.55-1.85 g/cm³",
  },
  intro: {
    zh: "标准型号覆盖不了的安装空间，是碳石墨件最常见的采购难点：轴径太大塞不进密封腔、要求薄壁长径比、需要在环面开螺旋槽建立液膜、或者原厂型号早已停产。我们做的非标件就是解决这一类问题——先评审图纸与工况，再定材料牌号、浸渍方式与工艺路线，首件检验合格后才投产批量。所有机加工与浸渍在同一厂区完成，不需要在两个供应商之间转手。",
    en: "Non-standard geometry is the most common reason a carbon graphite part ends up as an RFQ: the shaft is too large to insert a one-piece ring, a thin wall with a high length-to-diameter ratio is required, spiral grooves have to be cut into the face to generate a liquid film, or the original part number has long been discontinued. That is exactly what we build here — we review the drawing and the duty first, then set the grade, the impregnation and the process route, and only after a first article passes inspection do we run the batch. Machining and impregnation happen in the same plant, so nothing is handed between two suppliers.",
    vi: "Hình học phi tiêu chuẩn là lý do phổ biến nhất khiến một chi tiết than chì carbon trở thành yêu cầu báo giá: trục quá lớn không thể lắp vòng nguyên khối, yêu cầu thành mỏng với tỷ lệ dài/đường kính cao, cần xẻ rãnh xoắn trên mặt để tạo màng dịch, hoặc mã chi tiết gốc đã ngừng sản xuất. Đó chính là thứ chúng tôi làm ở đây — xem bản vẽ và điều kiện làm việc trước, rồi chọn mác vật liệu, loại impregnation và quy trình gia công; chỉ sau khi mẫu đầu tiên đạt kiểm tra mới sản xuất lô.",
    th: "รูปทรงพิเศษคือเหตุผลที่พบบ่อยที่สุดที่ทำให้ต้องขอใบเสนอราคาชิ้นส่วนคาร์บอนกราไฟต์: เพลาใหญ่เกินจะสวมแหวนชิ้นเดียวได้ ต้องการผนังบางที่มีอัตราส่วนความยาวต่อเส้นผ่านศูนย์กลางสูง ต้องบากร่องเกลียวบนหน้าซีลเพื่อสร้างฟิล์มของเหลว หรือเบอร์ชิ้นส่วนเดิมเลิกผลิตไปนานแล้ว นี่คืองานที่เราทำตรงนี้ — ตรวจแบบและสภาพการทำงานก่อน แล้วจึงกำหนดเกรด ชนิด impregnation และกระบวนการผลิต และจะผลิตล็อตก็ต่อเมื่อชิ้นตัวอย่างแรกผ่านการตรวจสอบ",
  },
  keyFacts: [
    { label: "Accepted inputs", value: "2D drawing (PDF / DWG), 3D model (STEP / IGES), physical sample, or duty parameter sheet" },
    { label: "Machining", value: "CNC turning, ID/OD grinding, face lapping, grooving, drilling, threaded & stepped features" },
    { label: "Tolerance", value: "Micron-level on CNC; seal faces individually lapped and flatness-inspected" },
    { label: "Material", value: "Carbon graphite, density 1.55 – 1.85 g/cm³, unimpregnated or impregnated" },
    { label: "Impregnation", value: "Phenolic / furan / epoxy resin, antimony, copper, babbitt" },
    { label: "Temperature range", value: "-200°C ~ 600°C depending on grade" },
    { label: "Sequence", value: "Machining before or after impregnation, chosen to suit the part" },
    { label: "Batch", value: "Prototype, small batch and recurring OEM supply" },
  ],
  capabilities: [
    {
      title: { zh: "车削与镗孔", en: "Turning & boring", vi: "Tiện và doa", th: "กลึงและขยายรู" },
      desc: {
        zh: "CNC 车削完成外圆、内孔与台阶，适配薄壁长径比大的轴套；碳石墨为脆性材料，装夹与走刀路径按件设计以避免崩边。",
        en: "CNC turning produces OD, bore and steps, including high length-to-diameter thin-wall bushings; because carbon graphite is brittle, fixturing and tool paths are planned per part to avoid chipping.",
        vi: "Tiện CNC tạo đường kính ngoài, lỗ trong và bậc, kể cả bạc lót thành mỏng có tỷ lệ dài/đường kính lớn; vì than chì carbon giòn, đồ gá và đường chạy dao được tính riêng cho từng chi tiết để tránh sứt mẻ.",
        th: "กลึง CNC ผลิตผ่านอกรูใน และขั้น รวมถึงบุชผนังบางที่อัตราส่วนความยาวต่อเส้นผ่านศูนย์กลางสูง เนื่องจากคาร์บอนกราไฟต์เป็นวัสดุเปราะ จึงออกแบบการจับยึดและเส้นทางมีดต่อชิ้นเพื่อป้องกันบิ่น",
      },
    },
    {
      title: { zh: "内外圆磨削", en: "Cylindrical grinding", vi: "Mài trụ trong/ngoài", th: "เจียรทรงกระบอก" },
      desc: {
        zh: "对配合面做内圆与外圆磨削，得到图纸要求的尺寸精度与表面质量，用于与腔壁或轴面配合的位置。",
        en: "Internal and external cylindrical grinding brings fit faces to the drawing's dimensional and surface requirements where the part locates against a housing or a shaft.",
        vi: "Mài trụ trong và ngoài cho các mặt lắp ghép đạt yêu cầu kích thước và bề mặt theo bản vẽ, tại vị trí chi tiết định vị với vỏ hoặc trục.",
        th: "เจียรผิวด้านในและด้านนอกของผิวประกอบให้ตรงตามข้อกำหนดขนาดและผิวในแบบ ที่ตำแหน่งชิ้นงานวางเข้ากับห้องหรือเพลา",
      },
    },
    {
      title: { zh: "端面研磨", en: "Seal face lapping", vi: "Mài phẳng mặt kín", th: "ลบผิวหน้าซีล" },
      desc: {
        zh: "密封工作面单独研磨，并逐件做平面度检验后再包装，避免运输造成的崩边与划伤。",
        en: "Seal faces are lapped individually and each one is flatness-inspected before packing, so transit chipping and scratching do not reach the customer.",
        vi: "Mặt kín được mài phẳng riêng từng chi tiết và kiểm tra độ phẳng trước khi đóng gói, để mẻ và xước khi vận chuyển không tới tay khách hàng.",
        th: "หน้าซีลถูกลบผิวทีละชิ้นและตรวจความแบนก่อนบรรจุ เพื่อไม่ให้การบิ่นและรอยขูดจากการขนส่งไปถึงลูกค้า",
      },
    },
    {
      title: { zh: "开槽与螺旋纹", en: "Grooving & spiral patterns", vi: "Xẻ rãnh và rãnh xoắn", th: "บากร่องและลายเกลียว" },
      desc: {
        zh: "端面与内壁可开直槽、螺旋槽、楔形槽或排颗粒槽，用于建立液膜、排出固体颗粒或改善启动润滑。",
        en: "Straight, spiral, wedge and particle-flush grooves can be cut on faces and bores to generate a liquid film, expel solids, or improve lubrication at start-up.",
        vi: "Có thể xẻ rãnh thẳng, xoắn, hình nêm và rãnh đẩy hạt trên mặt và lỗ trong để tạo màng dịch, đuổi hạt rắn hoặc cải thiện bôi trơn khi khởi động.",
        th: "บากร่องตรง เกลียว รูปเลื่อน และร่องไล่อนุภาคบนหน้าซีลและผิวด้านในได้ เพื่อสร้างฟิล์มของเหลว ไล่อนุภาค หรือปรับปรุงการหล่อลื่นตอนเริ่มเดิน",
      },
    },
    {
      title: { zh: "钻孔与攻丝", en: "Drilling & tapping", vi: "Khoan và taro", th: "เจาะและทำเกลียว" },
      desc: {
        zh: "传动孔、销孔、螺纹孔与减载孔均可按图加工；孔位与端面相对位置在同一装夹下完成，保证位置度。",
        en: "Drive holes, pin holes, tapped holes and relief holes are machined to drawing, with hole positions completed in a single setup relative to the face to hold position tolerance.",
        vi: "Lỗ truyền động, lỗ chốt, lỗ ren và lỗ giảm tải được gia công theo bản vẽ; vị trí lỗ hoàn thành trong một lần gá so với mặt để giữ dung sai vị trí.",
        th: "รูส่งกำลัง รูพิน รูเกลียว และรูคลายแรงกระทำตามแบบ ตำแหน่งรูทำให้จบในการจับยึดครั้งเดียวกับหน้าซีลเพื่อคงความคลาดเคลื่อนตำแหน่ง",
      },
    },
    {
      title: { zh: "浸渍前后加工", en: "Pre- and post-impregnation machining", vi: "Gia công trước/sau impregnation", th: "แปรรูปก่อน/หลัง impregnation" },
      desc: {
        zh: "先加工后浸渍可保证气孔被填满、最终性能一致；先浸渍后加工则省一道精修，但刀具磨损更大、需按浸渍类型调整切速。两种顺序我们都能做，并在报价时给出建议。",
        en: "Machining before impregnation guarantees the pores fill and the final properties are uniform; machining after impregnation saves a finishing pass but increases tool wear and requires cutting parameters tuned to the impregnant. We do both and recommend one at quotation stage.",
        vi: "Gia công trước impregnation bảo đảm lỗ rỗng được lấp đầy và tính chất cuối đồng nhất; gia công sau impregnation tiết kiệm một bước tinh nhưng tăng mòn dao và phải điều chỉnh thông số cắt theo loại chất impregnation. Chúng tôi làm cả hai và khuyến nghị ngay khi báo giá.",
        th: "การแปรรูปก่อน impregnation รับประกันว่ารูพรุนถูกเติมเต็มและสมบัติสุดท้ายสม่ำเสมอ ส่วนการแปรรูปหลัง impregnation ประหยัดหนึ่งขั้นละเอียดแต่ทำให้มีดสึกมากขึ้นและต้องปรับพารามิเตอร์ตัดตามชนิดสาร impregnation เราทำได้ทั้งสองแบบและแนะนำตั้งแต่ขั้นเสนอราคา",
      },
    },
    {
      title: { zh: "分体与多瓣结构", en: "Segmented & multi-piece designs", vi: "Kết cấu chia mảnh", th: "ดีไซน์แบบแบ่งชิ้น" },
      desc: {
        zh: "2/4/6 瓣分体环的接合面逐片配对研磨，同圈成套交付，供封闭腔体免拆轴安装。",
        en: "Two-, four- and six-segment rings have their joints lapped as a matched set and are delivered ring-by-ring as a set, for installation in enclosed cavities without pulling the shaft.",
        vi: "Vòng chia 2/4/6 mảnh có mặt tiếp giáp được mài theo cặp và giao nguyên bộ theo từng vòng, để lắp trong khoang kín không cần rút trục.",
        th: "แหวนแบ่ง 2/4/6 ชิ้นลบผิวรอยต่อเป็นชุดคู่และส่งเป็นชุดต่อวง สำหรับติดตั้งในโพรงปิดโดยไม่ต้องถอดเพลา",
      },
    },
    {
      title: { zh: "近净成形坯料", en: "Near-net-shape blanks", vi: "Phôi gần sát hình cuối", th: "บล็อกใกล้รูปสุดท้าย" },
      desc: {
        zh: "可只交付下料或近净成形坯料（棒料、管料、环坯、块料），由客户自行精加工，以减少材料损耗与工时。",
        en: "We can supply cut-to-size or near-net-shape blanks only — rod, tube, ring and block — for the customer to finish, reducing material loss and machine hours.",
        vi: "Chúng tôi có thể chỉ cung cấp phôi cắt theo kích thước hoặc phôi gần sát hình cuối — thanh, ống, vòng và khối — để khách tự gia công tinh, giảm hao hụt vật liệu và giờ máy.",
        th: "จัดส่งเป็นบล็อกตัดตามขนาดหรือบล็อกใกล้รูปสุดท้ายเท่านั้น — แท่ง ท่อ วง และบล็อก — ให้ลูกค้าลบขนาดเอง เพื่อลดการสูญเสียวัสดุและชั่วโมงเครื่อง",
      },
    },
  ],
  tolerances: [
    {
      feature: { zh: "内外径尺寸", en: "Bore & OD size", vi: "Kích thước lỗ và đường kính ngoài", th: "ขนาดรูและเส้นผ่านศูนย์กลางนอก" },
      value: "CNC to drawing; micron-level achievable, final call set by geometry",
    },
    {
      feature: { zh: "密封面平面度", en: "Seal face flatness", vi: "Độ phẳng mặt kín", th: "ความแบนของหน้าซีล" },
      value: "Individually lapped and inspected before packing",
    },
    {
      feature: { zh: "密封面粗糙度", en: "Seal face roughness", vi: "Độ nhám mặt kín", th: "ความหยาบหน้าซีล" },
      value: "Lapped finish; specify Ra target on the drawing",
    },
    {
      feature: { zh: "推荐对偶轴面", en: "Recommended shaft counterface", vi: "Bề mặt trục đối ghép khuyến nghị", th: "ผิวเพลาคู่ที่แนะนำ" },
      value: "304/316 stainless polished to about Ra 0.2 µm",
    },
    {
      feature: { zh: "干运转配合间隙", en: "Dry-running clearance", vi: "Khe hở chạy khô", th: "ช่องว่างขณะวิ่งแห้ง" },
      value: "Typically 2.5 – 3‰ of shaft diameter, single side",
    },
    {
      feature: { zh: "薄壁与细长件", en: "Thin-wall & slender parts", vi: "Chi tiết thành mỏng, dài", th: "ชิ้นผนังบางและยาว" },
      value: "First-article deformation check recommended before batch",
    },
    {
      feature: { zh: "位置度与同轴度", en: "Position & concentricity", vi: "Dung sai vị trí và đồng tâm", th: "ความคลาดเคลื่อนตำแหน่งและความร่วมศูนย์" },
      value: "Held by machining in a single setup; state the datum on the drawing",
    },
  ],
  grades: [
    { code: "M106", temp: "350°C", note: { zh: "普通碳石墨，通用非标件首选，未浸渍状态最好加工", en: "Standard carbon graphite, the general-purpose choice; easiest to machine unimpregnated", vi: "Than chì carbon tiêu chuẩn, chọn chung; dễ gia công nhất khi chưa impregnation", th: "คาร์บอนกราไฟต์มาตรฐาน เลือกเป็นค่าเริ่มต้น กลึงง่ายที่สุดก่อน impregnation" } },
    { code: "M106K", temp: "220°C", note: { zh: "树脂浸渍，食品与制药级无油工况", en: "Resin-impregnated, food and pharma oil-free duty", vi: "Impregnation nhựa, ứng dụng thực phẩm/dược không dầu", th: "impregnation เรซิน งานอาหารและยาที่ไร้น้ำมัน" } },
    { code: "M106D", temp: "500°C", note: { zh: "锑浸渍，高温抗氧化；硬度高，刀具磨损快", en: "Antimony-impregnated, high-temp anti-oxidation; hard on tooling", vi: "Impregnation antimony, nhiệt cao chống oxy hóa; mòn dao nhanh", th: "impregnation พลวง ทนความร้อนต้านออกซิเดชัน มีดสึกเร็ว" } },
    { code: "M191T", temp: "600°C", note: { zh: "碳化处理，化学惰性要求最高的工况", en: "Carbonized, for the highest chemical inertness requirement", vi: "Carbonized, cho yêu cầu trơ hóa học cao nhất", th: "คาร์บอไนซ์ สำหรับความต้องการความเฉื่อยเคมีสูงสุด" } },
    { code: "Cu-impregnated", temp: "400°C", note: { zh: "浸铜石墨，高载荷与低速重载轴承件", en: "Copper-impregnated for high-load, low-speed bearing parts", vi: "Impregnation đồng cho chi tiết vòng bi tải cao tốc độ thấp", th: "impregnation ทองแดงสำหรับชิ้นแบริ่งรับน้ำหนักมากความเร็วต่ำ" } },
  ],
  inputs: [
    {
      label: { zh: "2D 图纸", en: "2D drawing", vi: "Bản vẽ 2D", th: "แบบ 2D" },
      desc: {
        zh: "PDF 或 DWG。请标注内径、外径、高度、密封面位置、公差与表面要求，并注明哪个面是工作面。",
        en: "PDF or DWG. Give bore, OD, height, which faces are seal faces, tolerance and surface requirements, and mark the working face.",
        vi: "PDF hoặc DWG. Ghi rõ đường kính trong, ngoài, chiều cao, mặt nào là mặt kín, dung sai và yêu cầu bề mặt, đồng thời đánh dấu mặt làm việc.",
        th: "PDF หรือ DWG ระบุรูใน นอก ความสูง ผิวใดเป็นหน้าซีล ความคลาดเคลื่อนและข้อกำหนดผิว พร้อมทำเครื่องหมายผิวทำงาน",
      },
    },
    {
      label: { zh: "3D 模型", en: "3D model", vi: "Mô hình 3D", th: "โมเดล 3D" },
      desc: {
        zh: "STEP 或 IGES。适合异形结构、带曲面或装配关系复杂的件，我们据此直接生成加工路径。",
        en: "STEP or IGES. Best for irregular geometry, curved surfaces or complex assembly relationships — we build tool paths directly from it.",
        vi: "STEP hoặc IGES. Phù hợp với chi tiết hình dạng bất định, bề mặt cong hoặc quan hệ lắp ghép phức tạp — chúng tôi lập đường chạy dao trực tiếp từ đó.",
        th: "STEP หรือ IGES เหมาะกับรูปทรงอิสระ ผิวโค้ง หรือความสัมพัธ์การประกอบที่ซับซ้อน โดยเราวางเส้นทางมีดจากไฟล์โดยตรง",
      },
    },
    {
      label: { zh: "实物样品", en: "Physical sample", vi: "Mẫu thực", th: "ตัวอย่างจริง" },
      desc: {
        zh: "没有图纸也可以。我们测绘、出图后回给你确认，确认无误再排产。",
        en: "No drawing is fine. We measure and reverse-draft the part, send you the drawing to approve, and only then schedule production.",
        vi: "Không có bản vẽ cũng được. Chúng tôi đo vẽ ngược, gửi bản vẽ cho bạn xác nhận rồi mới xếp lịch sản xuất.",
        th: "ไม่มีแบบก็ได้ เราวัดและเขียนแบบย้อนกลับ ส่งแบบให้คุณยืนยันก่อนจึงจัดตารางผลิต",
      },
    },
    {
      label: { zh: "工况参数表", en: "Duty parameter sheet", vi: "Bảng thông số làm việc", th: "ตารางเงื่อนไขการทำงาน" },
      desc: {
        zh: "轴径、转速、温度、压力、介质与润滑条件。给了这六项，我们可以替你选牌号和间隙，而不只是照图加工。",
        en: "Shaft diameter, speed, temperature, pressure, media and lubrication condition. With those six we can select the grade and clearance for you instead of only machining to shape.",
        vi: "Đường kính trục, tốc độ, nhiệt độ, áp suất, môi trường và điều kiện bôi trơn. Có sáu thông số này, chúng tôi chọn vật liệu và khe hở giúp bạn thay vì chỉ gia công theo hình.",
        th: "เส้นผ่านศูนย์กลางเพลา ความเร็ว อุณหภูมิ ความดัน สื่อ และเงื่อนไขหล่อลื่น หากมีหกค่านี้ เราช่วยเลือกเกรดและช่องว่างให้ได้ ไม่ใช่แค่แปรรูปตามรูปทรง",
      },
    },
  ],
  process: [
    { step: "01", title: { zh: "图纸与工况评审", en: "Drawing & duty review", vi: "Rà soát bản vẽ và điều kiện làm việc", th: "ตรวจแบบและเงื่อนไขการทำงาน" }, desc: { zh: "工程师看尺寸链、壁厚、密封面位置与工况，指出图纸上会导致加工失败或早期失效的设计点。", en: "Engineers check the dimension chain, wall thickness, seal-face location and duty, and flag anything in the drawing that would cause a machining or early-life failure.", vi: "Kỹ sư kiểm tra chuỗi kích thước, chiều dày thành, vị trí mặt kín và điều kiện làm việc, chỉ ra mọi điểm trong bản vẽ có thể gây lỗi gia công hoặc hỏng sớm.", th: "วิศวกรตรวจลำดับขนาด ความหนาผนัง ตำแหน่งหน้าซีลและเงื่อนไขการทำงาน พร้อมชี้จุดในแบบที่ทำให้แปรรูปล้มเหลวหรืออายุสั้น" } },
    { step: "02", title: { zh: "牌号与浸渍选型", en: "Grade & impregnation selection", vi: "Chọn mác và loại impregnation", th: "เลือกเกรดและชนิด impregnation" }, desc: { zh: "按温度、介质与载荷定牌号和浸渍类型，并说明先加工还是先浸渍。", en: "The grade and impregnant are chosen from temperature, media and load, together with whether to machine before or after impregnation.", vi: "Chọn mác và chất impregnation theo nhiệt độ, môi trường và tải trọng, kèm quyết định gia công trước hay sau impregnation.", th: "กำหนดเกรดและสาร impregnation จากอุณหภูมิ สื่อ และแรงที่กระทำ พร้อมระบุว่าควรกลึงก่อนหรือหลัง impregnation" } },
    { step: "03", title: { zh: "工艺路线与报价", en: "Process route & quotation", vi: "Quy trình công nghệ và báo giá", th: "กระบวนการและใบเสนอราคา" }, desc: { zh: "给出工序清单、装夹方案与检验点，按数量与复杂度核算报价。", en: "We issue the operation list, fixturing plan and inspection points, with price built from quantity and complexity.", vi: "Chúng tôi đưa ra danh sách công đoạn, phương án đồ gá và điểm kiểm tra, giá tính theo số lượng và độ phức tạp.", th: "ส่งรายการขั้นตอน แผนการจับยึดและจุดตรวจสอบ พร้อมราคาตามปริมาณและความซับซ้อน" } },
    { step: "04", title: { zh: "首件打样与确认", en: "First article & approval", vi: "Làm mẫu đầu tiên và xác nhận", th: "ทำชิ้นแรกและอนุมัติ" }, desc: { zh: "先做首件，按图纸量全尺寸并反馈检验结果，你确认后再排批量。", en: "A first article is produced, fully measured against the drawing and reported to you; batch scheduling follows your approval.", vi: "Làm một mẫu đầu tiên, đo toàn bộ kích thước theo bản vẽ và báo cáo cho bạn; xếp lịch sản xuất lô sau khi bạn xác nhận.", th: "ผลิตชิ้นตัวอย่างแรก วัดขนาดครบตามแบบพร้อมรายงานผล จะเริ่มล็อตต่อเมื่อคุณอนุมัติ" } },
    { step: "05", title: { zh: "批量生产与浸渍", en: "Batch production & impregnation", vi: "Sản xuất lô và impregnation", th: "ผลิตล็อตและ impregnation" }, desc: { zh: "机加工、浸渍与后处理在同一厂区流转，减少跨供应商转运造成的崩边。", en: "Machining, impregnation and post-processing move within one site, cutting the transit handling that chips brittle graphite.", vi: "Gia công, impregnation và xử lý nhiệt diễn ra trong cùng khu vực, giảm va gây mẻ cho graphite giòn.", th: "การแปรรูป impregnation และขั้นหลังการผลิตทั้งหมดอยู่ในพื้นที่เดียวกัน ลดการกระแทกที่ทำให้กราไฟต์บิ่น" } },
    { step: "06", title: { zh: "出厂检验与包装", en: "Outgoing inspection & packing", vi: "Kiểm tra xuất xưởng và đóng gói", th: "ตรวจก่อนส่งและบรรจุ" }, desc: { zh: "按图纸抽检或全检尺寸与密封面，独立缓冲包装后发货，并附检验记录。", en: "Dimensions and seal faces are sampled or fully inspected against the drawing, then packed in individual cushioning and shipped with the inspection record.", vi: "Kích thước và mặt kín được lấy mẫu hoặc kiểm tra 100% theo bản vẽ, đóng gói đệm riêng từng chi tiết và gửi kèm hồ sơ kiểm tra.", th: "ตรวจขนาดและหน้าซีลตามแบบแบบสุ่มหรือตรวจครบทุกชิ้น บรรจุแบบกันกระแทกแยกชิ้น และส่งพร้อมบันทึกการตรวจสอบ" } },
  ],
  useCases: {
    zh: [
      "封闭腔体、轴两端不可分离，整体环装不进去——改成 3 瓣或 4 瓣分体环",
      "原厂型号已停产，只有一件磨损旧件——测绘后按样品复刻",
      "薄壁、长径比大的长轴套，金属套无法满足耐蚀要求",
      "端面需要螺旋槽或楔形槽来建立液膜、排出催化剂颗粒",
      "超大直径或异形块料，需要按最终形状下料以省料省工时",
      "反应釜搅拌器的支承与密封组合件，需要同一厂内完成机加工与浸渍",
    ],
    en: [
      "Enclosed cavity with no shaft-end access — a one-piece ring cannot be fitted, so a 3- or 4-segment ring is machined instead",
      "Original part number discontinued and only a worn sample exists — reverse-drafted and reproduced",
      "Long thin-wall bushings with a high length-to-diameter ratio where a metallic sleeve cannot meet the corrosion requirement",
      "Faces needing spiral or wedge grooves to generate a liquid film or flush catalyst particles",
      "Large-diameter or irregular blocks cut near net shape to save material and machine hours",
      "Combined support and sealing parts for reactor agitators, where machining and impregnation must stay in one plant",
    ],
    vi: [
      "Khoang kín không có lối từ đầu trục — không lắp được vòng nguyên khối, phải gia công vòng 3 hoặc 4 mảnh",
      "Mã chi tiết gốc đã ngừng sản xuất, chỉ còn một mẫu mòn — đo vẽ ngược và tái chế tạo",
      "Bạc lót dài thành mỏng, tỷ lệ dài/đường kính lớn, nơi bạc kim loại không đáp ứng yêu cầu ăn mòn",
      "Mặt kín cần rãnh xoắn hoặc hình nêm để tạo màng dịch hoặc đuổi hạt xúc tác",
      "Phôi đường kính lớn hoặc hình dạng bất định cắt gần sát hình cuối để tiết kiệm vật liệu và giờ máy",
      "Chi tiết kết hợp đỡ và kín cho máy khuấy bồn phản ứng, cần gia công và impregnation trong cùng một nhà máy",
    ],
    th: [
      "ห้องปิดที่สอดจากปลายเพลาไม่ได้ — สวมแหวนชิ้นเดียวไม่ลง ต้องผลิตเป็นแหวนแบ่ง 3 หรือ 4 ชิ้น",
      "เบอร์ชิ้นเดิมเลิกผลิต มีเพียงตัวอย่างที่สึกหรอ — วัดเขียนแบบย้อนกลับแล้วผลิตซ้ำ",
      "บุชชิ่งยาวผนังบาง อัตราส่วนความยาวต่อเส้นผ่านศูนย์กลางสูง ซึ่งบุชโลหะทนการกัดกร่อนไม่ได้",
      "หน้าซีลที่ต้องมีร่องเกลียวหรือรูปเลื่อนเพื่อสร้างฟิล์มของเหลวหรือไล่อนุภาคตัวเร่งปฏิกิริยา",
      "บล็อกเส้นผ่านศูนย์กลางใหญ่หรือรูปทรงอิสระ ตัดใกล้รูปสุดท้ายเพื่อประหยัดวัสดุและชั่วโมงเครื่อง",
      "ชิ้นส่วนรองรับและซีลรวมของเครื่องกวนถังปฏิกิริยา ที่ต้องกลึงและ impregnation ในโรงงานเดียวกัน",
    ],
  },
  faq: [
    {
      q: { zh: "打样可以只做一件吗？", en: "Can you make a single prototype piece?", vi: "Có làm mẫu thử chỉ một chi tiết được không?", th: "ผลิตชิ้นตัวอย่างแค่ชิ้นเดียวได้ไหม?" },
      a: { zh: "可以。首件打样是标准流程的一环，我们按图纸做一件、量全尺寸并回传检验结果，你确认后再决定是否投批量。批量价格按数量与复杂度核算，打样与批量的报价会一起给你。", en: "Yes. A first article is a normal step here: we make one to drawing, measure it fully against the drawing and send you the report before you decide on the batch. Batch price is computed from quantity and complexity, and we quote prototype and batch together.", vi: "Được. Làm mẫu đầu tiên là một bước bình thường: chúng tôi làm một chi tiết theo bản vẽ, đo toàn bộ kích thước và gửi báo cáo trước khi bạn quyết định sản xuất lô. Giá lô tính theo số lượng và độ phức tạp, và chúng tôi báo giá cả mẫu lẫn lô cùng lúc.", th: "ได้ การผลิตชิ้นแรกเป็นขั้นตามปกติ เราทำหนึ่งชิ้นตามแบบ วัดขนาดครบตามแบบแล้วส่งรายงานให้คุณก่อนตัดสินใจผลิตล็อต ราคาล็อตคำนวณจากปริมาณและความซับซ้อน และเสนอราคาลูกค้าดูทั้งสองส่วนพร้อมกัน" },
    },
    {
      q: { zh: "只有样品、没有图纸怎么办？", en: "What if I only have a sample and no drawing?", vi: "Nếu chỉ có mẫu mà không có bản vẽ thì sao?", th: "ถ้ามีแค่ตัวอย่างไม่มีแบบต้องทำอย่างไร?" },
      a: { zh: "寄样品过来即可。我们做测绘并出 2D 图（需要时补 3D 模型），标注尺寸、公差与密封面位置后回给你确认。确认无误才排产——避免按猜测的尺寸直接加工。", en: "Send the sample. We measure it, produce a 2D drawing (and a 3D model where the shape needs it) with dimensions, tolerances and seal-face locations marked, and return it for your approval. Production is scheduled only after you confirm, rather than machining against a guess.", vi: "Hãy gửi mẫu. Chúng tôi đo vẽ, lập bản vẽ 2D (và mô hình 3D khi hình dạng yêu cầu) ghi kích thước, dung sai và vị trí mặt kín, rồi gửi lại bạn xác nhận. Chỉ xếp lịch sản xuất sau khi bạn xác nhận, thay vì gia công theo phỏng đoán.", th: "ส่งตัวอย่างมา เราวัดและเขียนแบบ 2D (และโมเดล 3D หากรูปทรงต้องการ) พร้อมระบุขนาด ความคลาดเคลื่อน และตำแหน่งหน้าซีล แล้วส่งให้คุณยืนยัน จะผลิตก็ต่อเมื่อคุณยืนยันแล้ว ไม่ใช่เดาขนาดแล้วขึ้นเครื่อง" },
    },
    {
      q: { zh: "公差能到多少？密封面要求很严能做吗？", en: "How tight can you hold tolerance, especially on seal faces?", vi: "Dung sai đạt mức nào, đặc biệt với mặt kín yêu cầu khắt khe?", th: "ควบคุมความคลาดเคลื่อนได้แคไหน โดยเฉพาะหน้าซีลที่ต้องการสูง?" },
      a: { zh: "尺寸靠 CNC 与磨削控制，微米级可达到，最终取值由几何决定——薄壁、细长和大直径件要先做首件验证变形。密封面单独研磨并逐件做平面度检验后再包装。请把图纸上的公差与表面要求写明确，哪个是工作面，我们会标出做不到的地方并给替代方案，而不是接单后再出问题。", en: "Dimensions are held by CNC and grinding; micron-level is achievable, and the final value depends on geometry — thin-wall, slender and large-diameter parts get a first-article deformation check. Seal faces are lapped individually and flatness-inspected before packing. State the tolerance and surface requirement on the drawing and mark which face is the sealing face; we will flag anything we cannot hold and propose an alternative rather than accept the order and fail later.", vi: "Kích thước kiểm soát bằng CNC và mài; đạt mức micromet, giá trị cuối phụ thuộc hình dạng — chi tiết thành mỏng, dài và đường kính lớn đều phải kiểm tra biến dạng bằng mẫu đầu tiên. Mặt kín mài riêng từng chi tiết và kiểm độ phẳng trước khi đóng gói. Ghi rõ dung sai và yêu cầu bề mặt trên bản vẽ, đánh dấu mặt làm việc; chúng tôi sẽ chỉ ra chỗ không đạt được và đề xuất phương án thay thế thay vì nhận đơn rồi hỏng sau.", th: "ควบคุมขนาดด้วย CNC และการเจียร ทำได้ถึงระดับไมครอน ค่าสุดท้ายขึ้นกับรูปทรง — ชิ้นผนังบาง ยาว และเส้นผ่านศูนย์กลางใหญ่ ต้องตรวจการเสียรูปด้วยชิ้นแรก หน้าซีลลบผิวทีละชิ้นและตรวจความแบนก่อนบรรจุ ระบุความคลาดเคลื่อนและข้อกำหนดผิวในแบบพร้อมทำเครื่องหมายผิวทำงาน เราจะแจ้งจุดที่ควบคุมไม่ได้และเสนอทางเลือกอื่น ดีกว่ารับออร์เดอร์แล้วค่อยพลาด" },
    },
    {
      q: { zh: "按图加工会出检验报告吗？", en: "Do you provide inspection reports for machined parts?", vi: "Có cung cấp báo cáo kiểm tra cho chi tiết gia công theo bản vẽ?", th: "มีรายงานตรวจสอบให้ชิ้นงานที่แปรรูปตามแบบไหม?" },
      a: { zh: "出厂按图纸做尺寸与密封面检验，附检验记录。如果你需要材质证明、密度与孔隙率数据或浸渍工艺记录，在下单时说明，我们按你要求的表格形式出具。", en: "Every shipment is inspected against the drawing for dimensions and seal faces and goes out with an inspection record. If you also need material certification, density and porosity data, or impregnation process records, tell us at order time and we issue them in the form your QA requires.", vi: "Mỗi lô xuất đều được kiểm tra kích thước và mặt kín theo bản vẽ kèm hồ sơ kiểm tra. Nếu bạn cần thêm chứng chỉ vật liệu, số liệu tỷ trọng và độ rỗng hoặc hồ sơ công nghệ impregnation, hãy nói khi đặt hàng, chúng tôi xuất theo đúng biểu mẫu QA của bạn.", th: "ทุกเที่ยวส่งตรวจขนาดและหน้าซีลตามแบบพร้อมบันทึกการตรวจสอบ หากต้องการใบรับรองวัสดุ ข้อมูลความหนาแน่นและรูพรุน หรือบันทึกกระบวนการ impregnation แจ้งตอนสั่งซื้อ เราจะออกให้ตรงแบบฟอร์มที่ฝ่าย QA ของคุณกำหนด" },
    },
    {
      q: { zh: "图纸和技术资料会保密吗？", en: "Is my drawing kept confidential?", vi: "Bản vẽ có được bảo mật không?", th: "แบบของฉันเป็นความลับไหม?" },
      a: { zh: "会。图纸只用于报价与生产，不对外提供、不用于给其他客户加工、也不放到网站展示。需要书面 NDA 的话我们签，签署后再传图纸。", en: "Yes. Drawings are used only for your quotation and production — not shared, not used to supply other customers, and never shown on our site. If you want it in writing, we will sign an NDA before you send anything.", vi: "Có. Bản vẽ chỉ dùng cho báo giá và sản xuất cho chính bạn — không chia sẻ, không dùng để cung cấp cho khách khác, và không đăng trên website. Nếu cần văn bản, chúng tôi ký NDA trước khi bạn gửi bất kỳ tài liệu nào.", th: "ใช่ แบบนำไปใช้เพื่อเสนอราคาและผลิตให้คุณเท่านั้น ไม่เผยแพร่ ไม่ใช้ผลิตให้ลูกค้ารายอื่น และไม่แสดงบนเว็บไซต์ของเรา หากต้องการเป็นลายลักษณ์อักษร เรายินดีลงนาม NDA ก่อนที่คุณจะส่งไฟล์มา" },
    },
    {
      q: { zh: "交期怎么算？", en: "How is lead time determined?", vi: "Thời gian giao hàng tính thế nào?", th: "กำหนดส่งคำนวณอย่างไร?" },
      a: { zh: "交期取决于几何复杂度、是否需要浸渍、以及浸渍与后精修要过几轮循环——浸渍件通常要在浸渍后回到磨削工位，这是非标件最容易被忽略的一段时间。报价时我们会给出打样与各批次的预计周期；急需件可协商分批交付。", en: "Lead time follows geometric complexity, whether impregnation is needed, and how many impregnation and re-finishing cycles the part requires — impregnated parts must return to the grinding station afterwards, which is the step most often missed in non-standard quotes. We give expected durations for the prototype and each batch at quotation stage, and can arrange staged delivery for urgent needs.", vi: "Thời gian giao phụ thuộc độ phức tạp hình học, có cần impregnation hay không, và số lần impregnation rồi gia công tinh lặp lại — chi tiết impregnation phải quay lại công đoạn mài sau đó, là bước hay bị bỏ quên nhất trong báo giá phi tiêu chuẩn. Chúng tôi nêu thời gian dự kiến cho mẫu và từng lô ngay khi báo giá, và có thể thu xếp giao theo đợt khi cần gấp.", th: "กำหนดส่งขึ้นกับความซับซ้อนของรูปทรง ต้อง impregnation หรือไม่ และต้องวน impregnation แล้วลบผิวซ้ำกี่รอบ — ชิ้นงาน impregnation ต้องกลับเข้าสถานีเจียรหลังเสร็จ ซึ่งเป็นขั้นที่มักลืมมากที่สุดในใบเสนอราคางานพิเศษ เราแจ้งเวลาที่คาดไว้ทั้งขั้นตัวอย่างและทุกล็อตตั้งแต่เสนอราคา และตกลงส่งแบ่งล็อตได้หากเร่งด่วน" },
    },
  ],
}
