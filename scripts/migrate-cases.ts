import Database from "better-sqlite3"

const db = new Database("./huahao-admin.db")

// Add new columns if they don't exist
const cols = db.prepare("PRAGMA table_info(cases)").all() as any[]
const colNames = cols.map((c) => c.name)
console.log("Current columns:", colNames.join(", "))

if (!colNames.includes("condition")) {
  db.exec("ALTER TABLE cases ADD COLUMN condition TEXT NOT NULL DEFAULT ''")
  console.log("+ added column: condition")
}
if (!colNames.includes("diagnosis")) {
  db.exec("ALTER TABLE cases ADD COLUMN diagnosis TEXT NOT NULL DEFAULT ''")
  console.log("+ added column: diagnosis")
}
if (!colNames.includes("solution")) {
  db.exec("ALTER TABLE cases ADD COLUMN solution TEXT NOT NULL DEFAULT ''")
  console.log("+ added column: solution")
}

// Update existing 3 cases with expanded content
const updates = [
  {
    id: 1,
    condition: "某化工集团离心泵，输送腐蚀性化工介质，泵轴直径50mm，转速1450rpm，工作温度80-120°C。原使用聚四氟乙烯(PTFE)密封组件+辅助密封圈，运行中频繁发生介质泄漏，平均每3个月需停机更换密封件。",
    diagnosis: "1. PTFE材料在80-120°C下蠕变严重，密封面压力衰减导致泄漏\n2. 化工介质对辅助密封圈有溶胀作用，加速老化失效\n3. 密封端面磨损不均匀，产生局部间隙\n4. 原有密封结构对轴跳动的补偿能力不足",
    solution: "1. 密封材料改为59U系列镶嵌石墨环（碳石墨+巴氏合金镶嵌结构）\n2. 利用石墨自润滑性，取消辅助润滑系统\n3. 优化密封面比压设计，适应泵轴运行跳动\n4. 单边间隙取0.12mm，兼顾密封性与跟随性",
    result: "使用寿命从3个月延长至18个月，提升6倍。维修成本降低75%，年节约维护费用约28万元。泵组运行可靠性显著提高，计划外停机大幅减少。",
  },
  {
    id: 2,
    condition: "某船舶制造厂船用海水泵，输送海水用于船舶冷却系统，泵轴直径60mm，转速1750rpm，工作温度5-40°C。原密封件为铜基金属轴承+橡胶密封圈，在海水中耐腐蚀性不足，频繁出现泄漏，平均每6个月需更换。",
    diagnosis: "1. 铜基金属轴承在海水中电化学腐蚀严重，加速磨损\n2. 橡胶密封圈在海水浸泡下发生降解，失去弹性\n3. 海水中泥沙颗粒进入摩擦面，产生磨粒磨损\n4. 原设计未充分考虑海水介质的腐蚀性和含沙量",
    solution: "1. 轴承材料改为204B系列碳石墨轴承（特殊耐蚀浸渍工艺）\n2. 利用碳石墨的化学惰性，完全抵抗海水腐蚀\n3. 选用耐海水专用浸渍剂，填充石墨孔隙\n4. 优化轴承间隙设计（单边0.10mm），允许泥沙颗粒通过而不卡死",
    result: "连续运行2年免维护，通过DNV（挪威船级社）认证。彻底解决了海水腐蚀导致的密封失效问题，成为该船厂标准配置方案。",
  },
  {
    id: 3,
    condition: "某电力集团大型循环水泵，用于电厂冷却水循环系统，泵轴直径120mm，转速990rpm，工作温度60-80°C（夏季可达95°C）。原使用金属轴承（锡青铜），轴承高温磨损严重，每月需停机检修，严重影响发电效率。",
    diagnosis: "1. 锡青铜轴承在60-95°C工况下硬度下降，耐磨性不足\n2. 循环水中含少量泥沙，加剧了轴承磨损\n3. 大轴径(120mm)导致轴承线速度高，摩擦热积聚\n4. 原轴承润滑方式单一，高温下润滑膜易破裂\n5. 每月停机检修导致年损失大量发电时间",
    solution: "1. 定制化58B系列大尺寸碳石墨轴承（耐温250°C，安全裕度充足）\n2. 碳石墨自身具备固体润滑特性，无需依赖流体润滑膜\n3. 针对大轴径优化轴承长径比，改善散热条件\n4. 轴承内孔设计微量锥度，补偿温度梯度引起的变形\n5. 单边间隙取0.18mm，兼顾大尺寸热膨胀和运行精度",
    result: "连续运行15个月无异常，年停机时间减少720小时，发电效率提升3%。年维护成本降低80%以上，设备可用率大幅提高。",
  },
]

for (const u of updates) {
  db.prepare(
    "UPDATE cases SET condition=?, diagnosis=?, solution=?, result=? WHERE id=?",
  ).run(u.condition, u.diagnosis, u.solution, u.result, u.id)
  console.log(`✓ Case ${u.id} updated`)
}

// Insert 3 new cases
const newCases = [
  {
    title: "高温烘箱输送线——不锈钢轴磨损严重",
    company: "某锂电池材料生产厂",
    condition: "隧道式烘箱工作温度300℃，输送线驱动轴直径45mm，转速80rpm。原使用铜套+高温润滑脂，每2个月更换一次轴套，轴颈磨损0.3mm后需整体更换。",
    diagnosis: "1. 高温下润滑脂碳化失效，形成硬质积碳颗粒\n2. 铜套与轴发生干摩擦，产生粘着磨损\n3. 积碳颗粒像磨料一样加剧磨损\n4. 轴材料为304不锈钢（硬度低），换轴成本高",
    solution: "1. 铜套改为碳石墨轴套（牌号M106H，锑浸渍，耐温500℃）\n2. 取消润滑脂，利用石墨自润滑特性\n3. 轴表面不做改动，允许石墨环磨损保护轴\n4. 单边间隙取0.15mm（轴径的3.3‰，高温预留膨胀量）",
    result: "连续运行6个月，轴套磨损约0.2mm，轴颈无明显磨损。更换轴套即可恢复精度，无需换轴。维护成本降低约60%，停机时间减少70%。",
  },
  {
    title: "高温熔盐泵——金属轴承频繁抱死",
    company: "某光热发电项目",
    condition: "熔盐泵输送450℃液态熔盐，轴径65mm，转速1500rpm。原设计为特种合金轴承（Stellite），运行中频繁发生抱死和咬合，平均寿命仅3个月。",
    diagnosis: "1. 熔盐介质具有强腐蚀性和极差的润滑性\n2. 金属轴承在高温下表面发生扩散粘着\n3. 熔盐结晶颗粒进入摩擦面加剧磨损\n4. 金属材料无法在无润滑条件下长期运行",
    solution: "1. 轴承材料改为碳石墨（牌号M191T，碳化处理，耐温600℃）\n2. 与不锈钢轴配对，利用石墨的化学惰性和自润滑性\n3. 单边间隙取0.25mm（轴径的3.8‰，考虑高温膨胀和结晶空间）\n4. 增加熔盐冲洗流道，带走磨损颗粒",
    result: "连续运行12个月，石墨轴承磨损均匀，无抱死现象。轴颈保持完好，无需更换。设备连续运行时间从3个月延长至12个月以上。该方案已成为同行业标准配置。",
  },
  {
    title: "食品搅拌机——铜套污染产品被投诉",
    company: "某食品机械厂",
    condition: "生产巧克力搅拌机，搅拌轴直径30mm，转速200rpm，工作温度约80℃。原使用铜套+食品级润滑脂，但客户投诉产品检出微量铜离子和润滑脂残留。",
    diagnosis: "1. 铜套磨损产生铜屑，污染巧克力\n2. 润滑脂在搅拌过程中被甩出，混入产品\n3. 食品行业对金属离子和外来物有严格限制（FDA、EU标准）\n4. 需要完全无油、无金属污染的解决方案",
    solution: "1. 轴承改为碳石墨轴套（牌号M106K，树脂浸渍，食品接触级）\n2. 取消所有润滑剂，纯干运行\n3. 轴材料改为304不锈钢，表面抛光至Ra 0.2μm\n4. 单边间隙取0.08mm（轴径的2.7‰，干摩擦需稍大间隙散热）",
    result: "完全无油运行，无润滑脂甩出风险。石墨轴套磨损产生的微量碳粉为黑色，容易被发现和清除。石墨本身符合FDA食品接触材料要求。客户投诉降为零，设备通过食品安全认证。",
  },
]

for (const c of newCases) {
  const existing = db.prepare("SELECT id FROM cases WHERE title = ?").get(c.title) as any
  if (existing) {
    db.prepare(
      "UPDATE cases SET company=?, condition=?, diagnosis=?, solution=?, result=? WHERE id=?",
    ).run(c.company, c.condition, c.diagnosis, c.solution, c.result, existing.id)
    console.log(`✓ Existing case updated: ${c.title}`)
  } else {
    db.prepare(
      "INSERT INTO cases (title, company, condition, diagnosis, solution, result) VALUES (?, ?, ?, ?, ?, ?)",
    ).run(c.title, c.company, c.condition, c.diagnosis, c.solution, c.result)
    console.log(`+ New case added: ${c.title}`)
  }
}

console.log("\n✓ All cases migrated successfully")
db.close()
