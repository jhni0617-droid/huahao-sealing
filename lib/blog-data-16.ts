import { BlogPost } from "./blog-data"

export const blogPostsBatch16: BlogPost[] = [
  // 9. October 19, 2026 - Chiller centrifugal compressor labyrinth graphite
  {
    slug: "chiller-centrifugal-compressor-labyrinth-graphite",
    title: {
      zh: "离心冷水机组：叶轮迷宫镶片与轴端碳环的石墨选件",
      en: "Centrifugal Chillers: Graphite Options for Impeller Labyrinth Strips and Shaft-End Carbon Rings",
    },
    excerpt: {
      zh: "离心式冷水机组的效率损失很大一块来自叶轮顶隙泄漏与轴端窜油。碳石墨迷宫镶片和碳环密封是机组的两个关键石墨件。本文讲它们在机组里的位置、间隙设计、磨损更换判据，以及机组大修时的检查顺序。",
      en: "A large share of centrifugal chiller efficiency loss comes from impeller tip clearance leakage and shaft-end oil migration. Carbon graphite labyrinth strips and shaft-end carbon rings are the two key graphite parts in the machine. This article covers their location, clearance design, wear criteria and the inspection order at overhaul.",
    },
    tag: "application",
    date: "2026-10-19",
    content: {
      zh: `## 核心要点

- 离心机组的两个石墨件：叶轮与机壳间的迷宫镶片（控制内泄漏）、轴端碳环（隔离轴承腔与压缩腔），分工不同，失效模式也不同
- 迷宫镶片间隙每增大 0.1 mm，机组效率损失约 1~2 个百分点（随叶轮直径与压比变化），这是它必须按磨损量换件的依据
- 碳环按"受控泄漏"工作：间隙 0.08~0.15 mm，靠密封气建立屏障；密封气不洁净会污染冷媒回路
- 大修判据：机组能效比（COP/IPLV）下降 5% 以上、密封气流量持续爬升、轴承温度异常，三者出现其一即安排拆检
- 更换周期通常与轴承大修同步（20000~40000 小时），碳环建议整套换，镶片按测量结果单片换

## 一、机组里的两个石墨件

离心式冷水机组（离心机）靠高速叶轮（通常 8000~15000 rpm，经增速齿轮或直联）压缩冷媒。冷媒侧与油侧是两套互不相通的系统，石墨件出现在两个交界面：

### 1.1 叶轮迷宫镶片

叶轮外缘与机壳之间有一圈环形间隙，高压侧气体会从这个间隙漏回低压侧（内泄漏），直接降低压缩效率。控制手段是在机壳（或叶轮上）嵌一圈**迷宫镶片**——分段碳石墨条，与叶轮保持小间隙，既耐磨又不伤叶轮。

典型材料：浸树脂或浸金属碳石墨，也有机组厂用聚苯酯或铝合金镶片的。石墨的优势是自润滑、不伤叶轮、热膨胀小。

### 1.2 轴端碳环

叶轮轴穿过轴承腔（有润滑油），冷媒腔（无油、可能负压）在另一侧。开机负压阶段油会被吸进冷媒腔，污染换热器、降低换热效率。轴端装**碳环密封**（本站 [TP 系列三瓣环](/products/three-part-series) 即此类元件，标称 ≤ 10 MPa、≤ 15 m/s）把两侧隔开，配合密封气形成压力屏障。

## 二、间隙设计

### 2.1 迷宫镶片间隙

镶片与叶轮的径向间隙是机组效率的核心参数之一：

| 机组类型 | 典型间隙 | 说明 |
|---|---|---|
| 小型半封闭（叶轮直接装在电机轴上） | 0.25~0.40 mm | 转速较低、直径小 |
| 中型开启式（增速齿轮） | 0.35~0.55 mm | 主流商业机型 |
| 大型双级 | 0.50~0.80 mm | 热膨胀与装配公差都要留 |

间隙设计的拉扯因素：

- **热膨胀**：运行中机壳与叶轮的温升不同（叶轮受压缩功加热更明显），碳的膨胀系数（2~5×10⁻⁶/℃）远小于钢与叶轮合金，冷态间隙按热态核算
- **装配与磨损**：间隙留小了，轴承磨损、轴振、转子动平衡劣化都会让叶轮蹭到镶片；留大了效率损失
- **启停碰摩**：启动瞬间油膜未建立，轴的位置与稳态不同，间隙必须覆盖这个过渡态

### 2.2 碳环间隙

轴端碳环直径间隙典型 0.08~0.15 mm（按轴径 50~100 mm 机型），与本站[《无油螺杆空压机碳环密封》](/blog/oil-free-screw-air-compressor-carbon-ring-seal)一文的口径一致。碳环必须配密封气：

- 气源：洁净干燥的空气或氮气，露点 ≤ -20℃，含油 ≤ 0.01 mg/m³
- 压力：高于冷媒侧 0.01~0.05 MPa，保证气流朝冷媒侧，把油雾挡在轴承腔
- 流量：按泄漏曲线最小有效量标定

**最危险的错误是用普通仪表空气做密封气**：含油的仪表空气把油直接送进冷媒回路，机组制冷量下降、油分离器负荷增大，而现场往往查不到原因——因为泄漏检测只看冷媒，不看油。

## 三、磨损与判据

### 3.1 迷宫镶片

| 失效 | 现象 | 判据 |
|---|---|---|
| 均匀磨损 | 间隙增大，COP 缓慢下降 | 大修实测间隙超过新机值 2 倍，或效率损失不可接受 |
| 局部磨损（碰摩） | 镶片单侧发亮、缺口 | 轴振超标或动平衡劣化的证据，必须查根因再换件 |
| 碎裂脱落 | 碎片进入流道 | 立即停机；同时检查叶轮有无损伤 |

镶片的磨损速率与轴振、启停次数、冷媒带液（液击）强相关。频繁启停的机组（如部分负荷频繁波动的商业楼宇）比连续运行的机组磨损快。

### 3.2 碳环

| 阶段 | 现象 |
|---|---|
| 稳定 | 密封气流量平稳，轴承腔回油正常 |
| 劣化 | 流量缓慢爬升（间隙被内孔沟槽磨大） |
| 失效 | 流量陡增（环断裂/弹簧松弛），冷媒侧出现油迹 |

判据：密封气流量相对初始值上升 50% 以上、或轴承温度异常上升，安排更换。

## 四、大修检查顺序

机组大修（通常与轴承更换同步）时，石墨件的检查按这个顺序：

1. **拆前记录**：密封气流量、轴承温度、电流、冷媒进出口温度——没有拆前数据就无法判断劣化趋势
2. **轴端碳环**：测内孔与轴的实际间隙；看内孔有无沟槽、瓣间缝磨损；测弹簧自由长度（误差 > 5% 换）
3. **迷宫镶片**：测各段与叶轮的间隙（至少测 4 个均布方位）；记录磨损形貌
4. **轴与轴承**：径向跳动、轴振、轴承间隙——这些是镶片异常磨损的根因，先修再装密封
5. **密封气系统**：气源品质（露点、含油）、减压阀稳定性、管路过滤器压差
6. **回装**：镶片按实测间隙选配（或修整），碳环整套更换，密封气先建立再开机

## 五、现场管理要点

- **能效趋势是最好的体检**：每周记录 COP 或单位冷量电耗，比任何单点测量都能早发现问题
- **冷媒带液（液击）是镶片杀手**：膨胀阀开度异常、负荷骤降都会造成；机组带液运行后应安排检查
- **密封气品质季度检测**：露点、含油量、颗粒，数据归档
- **备件策略**：碳环组按套储备（含弹簧、保持件）；镶片按机组数量储备 1~2 套，磨损不均是常态
- **改装评估**：老机组原用铝合金镶片的，大修时改浸金属碳石墨镶片，碰摩时不伤叶轮，长期更经济

## 结语

离心机组的两个石墨件都不复杂——几段镶片、几瓣碳环——但都坐在效率和油管理的节骨眼上。选型时把间隙设计做对（镶片按热态间隙、碳环按受控泄漏），运行中把 COP 趋势和密封气流量当体检指标，大修时按"先修轴系、再装密封"的顺序作业，机组效率可以长期贴住设计值。`,
      en: `## Key Points

- Two graphite parts in a centrifugal chiller: impeller labyrinth strips (control internal leakage) and shaft-end carbon rings (isolate bearing chamber from refrigerant chamber) — different jobs, different failure modes
- Every 0.1 mm of labyrinth clearance growth costs roughly 1–2 points of machine efficiency (varies with impeller diameter and pressure ratio) — the basis for wear-based replacement
- Carbon rings work as controlled-leakage seals: 0.08–0.15 mm clearance with a seal-gas barrier; contaminated seal gas poisons the refrigerant circuit
- Overhaul triggers: COP/IPLV down more than 5%, seal-gas flow creeping up, abnormal bearing temperature — any one warrants teardown
- Replacement usually rides on bearing overhauls (20,000–40,000 h); carbon stacks are replaced as sets, labyrinth strips individually by measurement

## 1. The Two Graphite Parts

A centrifugal chiller compresses refrigerant with a high-speed impeller (typically 8,000–15,000 rpm, geared or direct-drive). Refrigerant side and oil side are two separate systems, and graphite parts appear at both interfaces.

### 1.1 Impeller Labyrinth Strips

Between the impeller rim and the casing sits an annular gap; high-pressure gas leaks back through it (internal leakage), directly costing compression efficiency. The control is a **labyrinth strip** — segmented carbon graphite bars in the casing (or on the impeller) holding a small clearance over the impeller: wear-resistant and non-galling to the impeller.

Typical material: resin- or metal-impregnated carbon graphite; some OEMs use polyarylate or aluminum strips. Graphite's advantages are self-lubrication, non-galling behavior and low thermal expansion.

### 1.2 Shaft-End Carbon Rings

The impeller shaft passes through the bearing chamber (oil-lubricated) with the refrigerant chamber (oil-free, possibly sub-atmospheric) on the other side. At startup suction, oil is drawn toward the refrigerant side, fouling heat exchangers and degrading heat transfer. A **shaft-end carbon ring** (the [TP-series three-segment rings](/products/three-part-series) on this site are such components, rated ≤ 10 MPa, ≤ 15 m/s) isolates the two sides, with seal gas forming the pressure barrier.

## 2. Clearance Design

### 2.1 Labyrinth Clearance

The strip-to-impeller radial clearance is one of the machine's core efficiency parameters:

| Machine class | Typical clearance | Notes |
|---|---|---|
| Small semi-hermetic (impeller on motor shaft) | 0.25–0.40 mm | Lower speed, smaller diameter |
| Medium open-drive (geared) | 0.35–0.55 mm | Mainstream commercial machines |
| Large two-stage | 0.50–0.80 mm | Thermal growth and assembly tolerance both need room |

Design tensions:

- **Thermal growth**: casing and impeller heat differently (the impeller absorbs compression work); carbon CTE (2–5×10⁻⁶/°C) is far below steel and impeller alloys, so cold clearance must be computed for hot condition
- **Assembly and wear**: too small and bearing wear, shaft vibration or balance degradation let the impeller touch the strips; too large costs efficiency
- **Start/stop rub**: at startup the oil film is not yet established and the shaft sits differently from steady state — clearance must cover this transition

### 2.2 Carbon Ring Clearance

Shaft-end carbon ring diametral clearance is typically 0.08–0.15 mm (50–100 mm shaft machines), consistent with this site's [article on oil-free screw compressor carbon rings](/blog/oil-free-screw-air-compressor-carbon-ring-seal). Seal gas is mandatory:

- Source: clean dry air or nitrogen, dew point ≤ -20°C, oil ≤ 0.01 mg/m³
- Pressure: 0.01–0.05 MPa above refrigerant side so flow points at the refrigerant side, keeping oil mist in the bearing chamber
- Flow: minimum effective value per the leakage curve

**The most dangerous mistake is ordinary instrument air as seal gas**: oily air injects oil straight into the refrigerant circuit; capacity drops and oil-separator load rises, yet the field finds no cause — because leak detection watches refrigerant, not oil.

## 3. Wear and Criteria

### 3.1 Labyrinth Strips

| Failure | Symptom | Criterion |
|---|---|---|
| Uniform wear | Clearance grows, COP slowly falls | Measured clearance at overhaul above 2× new value, or unacceptable efficiency loss |
| Localized wear (rub) | One side of strips polished, nicked | Evidence of shaft vibration or balance degradation — fix the root cause before replacing |
| Fracture / detachment | Fragments in the gas path | Stop immediately; inspect impeller for damage |

Wear rate correlates strongly with shaft vibration, start/stop count and liquid slugging. Machines with frequent cycling (commercial buildings with swinging load) wear faster than continuous-duty machines.

### 3.2 Carbon Rings

| Stage | Symptom |
|---|---|
| Stable | Flat seal-gas flow, normal oil return |
| Degradation | Flow creeping up (clearance opened by bore grooving) |
| Failure | Flow jump (ring fracture/spring relaxation); oil traces in refrigerant side |

Criteria: seal-gas flow up 50% or more over initial value, or abnormal bearing temperature rise — schedule replacement.

## 4. Overhaul Inspection Order

At overhaul (usually synced with bearing replacement), inspect graphite parts in this order:

1. **Record before teardown**: seal-gas flow, bearing temperature, current, refrigerant in/out temperatures — without pre-teardown data there is no trend
2. **Shaft-end carbon rings**: measure actual bore-to-shaft clearance; inspect bore grooving and butt-joint wear; measure spring free length (replace beyond 5% deviation)
3. **Labyrinth strips**: measure clearance to impeller at four equally spaced positions minimum; record wear pattern
4. **Shaft and bearings**: radial runout, vibration, bearing clearance — these are root causes of abnormal strip wear; fix before resealing
5. **Seal-gas system**: source quality (dew point, oil content), regulator stability, line filter ΔP
6. **Reassembly**: select or trim strips to measured clearance; replace carbon stacks as sets; establish seal gas before starting

## 5. Site Management

- **Efficiency trend is the best health check**: weekly COP or kW-per-ton logging catches problems earlier than any point measurement
- **Liquid slugging kills strips**: expansion-valve faults and sudden load drops cause it; schedule inspection after any slugging event
- **Quarterly seal-gas quality test**: dew point, oil content, particles — archive the data
- **Spares strategy**: carbon stacks stocked as sets (springs and retainers included); strips stocked 1–2 sets per machine count — uneven wear is normal
- **Retrofit evaluation**: replacing legacy aluminum strips with metal-impregnated carbon graphite at overhaul protects the impeller on rub and is more economical long-term

## Conclusion

Neither graphite part in a centrifugal chiller is complicated — a few strips, a few ring segments — but both sit at the hinge of efficiency and oil management. Design the clearances correctly (hot-condition labyrinth, controlled-leakage carbon rings), treat COP trend and seal-gas flow as health indicators, and at overhaul follow "fix the shaft line first, then install the seals." Machine efficiency will then track design values over the long term.`,
    },
  },
  // 10. October 21, 2026 - Graphite bearing load and pv calculation
  {
    slug: "graphite-bearing-load-pv-calculation",
    title: {
      zh: "石墨轴承的比压与pv值计算：自润滑轴承的负荷核算方法",
      en: "Load and pv Calculations for Graphite Bearings: Sizing Self-Lubricated Bearings",
    },
    excerpt: {
      zh: "石墨轴承没有油膜保护，选型的核心不是「够不够硬「，而是比压 p 与 pv 值是否落在材料的安全区内。本文给出一套可直接照抄的核算流程：径向与推力负荷分解、比压计算、pv 校核、间隙与磨损的匹配，附常见介质的 pv 修正系数。",
      en: "Graphite bearings run without an oil film; selection is not about hardness but whether specific load p and pv stay inside the material's safe envelope. This article gives a copy-ready sizing flow: radial and thrust load resolution, specific pressure calculation, pv verification, and clearance-wear matching, with pv correction factors for common media.",
    },
    tag: "precision",
    date: "2026-10-21",
    content: {
      zh: `## 核心要点

- 石墨轴承的选型三步：算比压 p = F/(d·L) → 算 pv = p·v → 对照材料牌号的许用 pv；任何一步超限都要改结构而不是改材料硬扛
- 碳石墨的许用 pv 强烈依赖润滑条件：水润滑比干摩擦高一个量级；转速升高时许用比压下降，二者不能同时取上限
- 许用比压的行业口径：干摩擦约 0.5~1.5 MPa，水润滑 2~5 MPa；GB 系列标称承压 ≤ 20 MPa 是强度极限，不是运转许用值——两者差 4~10 倍
- 推力负荷按推力盘（TD 系列）核算，轴向许用 ≤ 10 MPa 量级，推力面润滑不良时实际可用值减半
- 磨损量与 pv、含砂量近似成正比；核算时留 2 倍以上裕度，寿命预期才能落到 8000 小时以上

## 一、为什么石墨轴承要先算 pv

金属轴承靠油膜把摩擦副分开，石墨轴承不行——它工作在边界摩擦甚至干摩擦状态，摩擦热直接进入接触区。这带来两条约束：

1. **承载约束**：接触应力超过材料强度时，石墨会发生局部压溃（脆性材料没有屈服阶段）
2. **热约束**：摩擦功率（≈ μ·p·v）在接触面转化为热，石墨导热有限（15~85 W/(m·K)，视浸渍体系），局部温升过高时热裂

工程上用两个参数把这两条约束合并：

- **比压 p**（MPa）= 负荷 F / 承压面积
- **pv 值**（MPa·m/s）= p × 摩擦面线速度 v

pv 本质上是"单位面积的摩擦功率密度"，是自润滑材料（石墨、塑料、涂层轴承）的通用选型语言。**石墨轴承选型 = 把实际 pv 压到材料许用 pv 以下，并留裕度**。

## 二、核算流程

### 2.1 第一步：负荷分解

轴承实际受的力往往不是单纯的径向力。分解顺序：

1. **径向力 F_r**：皮带拉力、齿轮啮合力、叶轮/转子水力不平衡力、重力分量
2. **轴向力 F_a**：单吸叶轮的吸入力、齿轮螺旋角产生的轴向分力、安装预紧
3. **合成力**：F = √(F_r² + F_a²)，若轴向力占比超过 30%，应改推力结构（推力盘/止推轴承）而不是让径向轴承斜着扛

### 2.2 第二步：比压计算

径向轴承：

- p = F / (d × L)，d 为轴径（mm），L 为轴承长度（mm），F 为牛顿
- 换算成 MPa：p[MPa] = F[N] / (d[mm] × L[mm])

推力轴承（推力盘）：

- p = F_a / A，A 为环形推力面面积 = π/4 × (D² - d²)
- 注意推力面通常不止一个端面，核算时按有效接触面积算，不能按名义外径满算

### 2.3 第三步：pv 校核

- 摩擦面线速度 v = π × d × n / 60000（m/s，d 单位 mm，n 单位 rpm）
- pv = p × v
- 与许用 pv 对照（见下表），裕度 ≥ 2

### 2.4 第四步：间隙与磨损匹配

pv 合格不等于寿命合格。间隙设计按介质粘度取：

| 介质 | 直径间隙（% d） | 说明 |
|---|---|---|
| 干摩擦 | 0.10~0.20 | 需考虑粉尘排出；太小会被磨屑抱轴 |
| 水 | 0.15~0.25 | 水膜承载弱，间隙大了建立不了动压 |
| 油 | 0.10~0.15 | 油膜好，间隙偏小取 |
| 含砂介质 | 0.25~0.35 | 让砂粒有机会被带走而不是嵌进接触面 |

## 三、许用值参考表

### 3.1 按润滑条件

| 润滑条件 | 许用比压 p | 许用 pv | 说明 |
|---|---|---|---|
| 干摩擦（间断） | 0.5~1.5 MPa | 0.5~1.5 MPa·m/s | 启停瞬间、低速检修盘车 |
| 干摩擦（连续） | ≤ 0.5 MPa | ≤ 1.0 MPa·m/s | 不推荐，属于降级使用 |
| 水润滑 | 2~5 MPa | 3~8 MPa·m/s | 水泵、船用泵常规工况 |
| 油润滑 | 2~5 MPa | 5~10 MPa·m/s | 润滑系统、油泵 |
| 富气体介质 | 1~2 MPa | 1~3 MPa·m/s | 压缩机、蒸汽环境 |

上表是浸渍碳石墨的通行量级参考，**具体牌号以材料供应商数据为准**——基体颗粒度、浸渍体系、密度不同，许用值可以差一倍。本站 [GB 系列石墨轴承](/products/graphite-bearing) 标称承压 ≤ 20 MPa 是指静强度（压溃极限），运转许用值远低于此；[TD 系列推力盘](/products/graphite-thrust-disc) 标称轴向 ≤ 10 MPa 同理。

### 3.2 按浸渍体系修正

| 浸渍体系 | 特点 | pv 修正 |
|---|---|---|
| 浸树脂 | 摩擦系数低，致密 | 基准 |
| 浸锑 | 强度高、导热中等 | 可比压上调 20~40% |
| 浸铜 | 导热最好（85 W/(m·K) 量级） | 干运转/频繁启停场合最优，可比压与速度上调 30~50% |
| 不浸渍 | 强度低、孔隙排屑好 | 比压下调 30~50%，适合低速轻载 |

### 3.3 按环境修正

- **含砂/磨粒介质**：许用 pv 打 5~7 折；磨粒磨损速率与砂量近似线性
- **高温（> 200℃）**：树脂体系到顶，换锑/铜浸渍；许用值按牌号高温数据
- **低温（< -30℃）**：注意脆性与收缩，间隙按冷态核算放大 10~20%
- **腐蚀性介质**：先做介质兼容筛选（氨禁铜、强氧化禁锑），再谈负荷

## 四、算例

一台潜水泵的径向石墨轴承，轴径 φ40 mm，轴承长度 60 mm，转子径向力 900 N，转速 2900 rpm，清水介质。

1. **比压**：p = 900 / (40 × 60) = 0.375 MPa
2. **线速度**：v = π × 40 × 2900 / 60000 = 6.07 m/s
3. **pv**：pv = 0.375 × 6.07 = 2.28 MPa·m/s
4. **校核**：清水润滑许用 pv 取 3~8，裕度 = 3 / 2.28 = 1.32 —— **低于 2 倍裕度线，不合格**
5. **调整**：加长轴承到 80 mm → p = 0.28 MPa → pv = 1.71 → 裕度 1.75，仍偏低；改为浸锑牌号（许用上调 30%）→ 许用 3.9~10.4 → 裕度 2.3，通过
6. **间隙**：清水 0.15%~0.25% × 40 = 0.06~0.10 mm

这个算例说明两件事：**加长轴承比换材料便宜，但两类手段可以叠加**；以及 2900 rpm 这种常见转速下线速度并不低，"小泵小负荷"的直觉容易低估 pv。

## 五、现场速查

| 问题 | 核算口径 |
|---|---|
| 轴承压溃、裂纹 | 比压超限，先算 p 再谈材料 |
| 局部熔化/热裂纹 | pv 超限，摩擦功率密度过大 |
| 均匀磨损过快 | pv 裕度不足或含砂；先查介质再查裕度 |
| 抱轴（新装机） | 间隙过小；核对冷态/热态膨胀差 |
| 推力面咬痕 | 轴向力超限或推力面润滑不良 |

## 结语

石墨轴承的负荷核算可以浓缩成一句话：**比压管强度、pv 管温度、间隙管磨损**。三步核算十分钟能做完，但它决定的是轴承跑 2000 小时还是 20000 小时。拿不准许用值时，宁可加长轴承、降低比压，也不要指望"石墨很硬"——脆性材料没有超载预警，第一次超限就是断裂。`,
      en: `## Key Points

- Three sizing steps for graphite bearings: compute specific load p = F/(d·L) → compute pv = p·v → compare with the grade's allowable pv; exceeding any step calls for a design change, not material brute force
- Carbon graphite allowable pv depends strongly on lubrication: water-lubricated is an order of magnitude above dry friction; as speed rises, allowable pressure falls — never take both at maximum
- Industry reference for allowable pressure: dry friction ~0.5–1.5 MPa, water-lubricated 2–5 MPa; the GB-series rating of ≤ 20 MPa is a strength limit, not an operating allowable — a 4–10× difference
- Thrust loads are sized against thrust discs (TD series), axial allowables around ≤ 10 MPa; halve them when thrust-face lubrication is poor
- Wear scales roughly with pv and sand content; keep a 2× margin if you expect 8,000+ hours of life

## 1. Why pv Comes First

Metal bearings separate the pair with an oil film; graphite bearings run in boundary or dry friction, with heat generated directly at the contact. Two constraints follow:

1. **Load**: above material strength, graphite crushes locally — brittle materials have no yield stage
2. **Heat**: friction power (≈ μ·p·v) converts to heat in the contact zone, and graphite conductivity is limited (15–85 W/(m·K) by impregnation); excessive local temperature rise causes thermal cracking

Engineering merges both into two parameters:

- **Specific load p** (MPa) = force F / loaded area
- **pv value** (MPa·m/s) = p × surface velocity v

pv is essentially friction power per unit area — the common sizing language for self-lubricating materials (graphite, plastics, coated bearings). **Selecting a graphite bearing = pushing actual pv below the allowable, with margin.**

## 2. Sizing Flow

### 2.1 Step 1: Resolve Loads

Bearing loads are rarely purely radial. Resolve in order:

1. **Radial force F_r**: belt pull, gear mesh force, hydraulic unbalance of impeller/rotor, gravity component
2. **Axial force F_a**: single-suction impeller suction, gear helix axial component, installation preload
3. **Resultant**: F = √(F_r² + F_a²); if the axial share exceeds 30%, add a thrust structure (thrust disc/thrust bearing) rather than letting the radial carry it obliquely

### 2.2 Step 2: Specific Load

Radial bearing:

- p = F / (d × L), d = shaft diameter (mm), L = bearing length (mm), F in newtons
- p[MPa] = F[N] / (d[mm] × L[mm])

Thrust bearing (thrust disc):

- p = F_a / A, A = annular thrust area = π/4 × (D² - d²)
- Use effective contact area, not the nominal full OD area — thrust faces often have relieved regions

### 2.3 Step 3: pv Check

- Surface velocity v = π × d × n / 60000 (m/s; d in mm, n in rpm)
- pv = p × v
- Compare with allowable (table below), margin ≥ 2

### 2.4 Step 4: Match Clearance and Wear

Passing pv is not passing life. Size clearance by medium:

| Medium | Diametral clearance (% of d) | Notes |
|---|---|---|
| Dry friction | 0.10–0.20 | Must expel debris; too small seizes on wear particles |
| Water | 0.15–0.25 | Weak water film; too large builds no hydrodynamic pressure |
| Oil | 0.10–0.15 | Good film; take the tighter end |
| Abrasive media | 0.25–0.35 | Let sand pass through instead of embedding |

## 3. Allowable Reference Tables

### 3.1 By Lubrication Condition

| Lubrication | Allowable p | Allowable pv | Notes |
|---|---|---|---|
| Dry friction (intermittent) | 0.5–1.5 MPa | 0.5–1.5 MPa·m/s | Startup transients, low-speed barring |
| Dry friction (continuous) | ≤ 0.5 MPa | ≤ 1.0 MPa·m/s | Not recommended; derated service |
| Water-lubricated | 2–5 MPa | 3–8 MPa·m/s | Water pumps, marine pumps |
| Oil-lubricated | 2–5 MPa | 5–10 MPa·m/s | Lubrication systems, oil pumps |
| Gas-rich media | 1–2 MPa | 1–3 MPa·m/s | Compressors, steam |

These are order-of-magnitude references for impregnated carbon graphite; **actual grades follow supplier data** — base grain size, impregnant and density can shift allowables by 2×. The [GB-series rating](/products/graphite-bearing) of ≤ 20 MPa is static strength (crush limit); operating allowables are far lower. The [TD-series axial ≤ 10 MPa](/products/graphite-thrust-disc) is the same story.

### 3.2 By Impregnant

| Impregnant | Character | pv correction |
|---|---|---|
| Resin | Low friction, dense | Baseline |
| Antimony | High strength, moderate conductivity | Pressure +20–40% |
| Copper | Best conductivity (~85 W/(m·K) class) | Best for dry/intermittent duty; pressure and speed +30–50% |
| Unimpregnated | Lower strength, good debris expulsion | Pressure −30–50%; suits low-speed light load |

### 3.3 By Environment

- **Abrrasive media**: knock allowable pv to 50–70%; wear rate is roughly linear with sand content
- **High temperature (> 200°C)**: resin systems top out; switch to antimony/copper and use grade high-temperature data
- **Low temperature (< -30°C)**: mind brittleness and contraction; open cold clearance 10–20%
- **Corrosive media**: screen media compatibility first (no copper in ammonia, no antimony in strong oxidizers), then discuss load

## 4. Worked Example

A submersible pump radial graphite bearing: shaft φ40 mm, length 60 mm, radial force 900 N, speed 2900 rpm, clean water.

1. **Specific load**: p = 900 / (40 × 60) = 0.375 MPa
2. **Surface velocity**: v = π × 40 × 2900 / 60000 = 6.07 m/s
3. **pv**: pv = 0.375 × 6.07 = 2.28 MPa·m/s
4. **Check**: water-lubricated allowable 3–8 → margin = 3 / 2.28 = 1.32 — **below the 2× line, fails**
5. **Adjust**: lengthen the bearing to 80 mm → p = 0.28 MPa → pv = 1.71 → margin 1.75, still low; switch to an antimony-impregnated grade (allowable +30%) → allowable 3.9–10.4 → margin 2.3, passes
6. **Clearance**: water 0.15%–0.25% × 40 = 0.06–0.10 mm

Two lessons: **lengthening the bearing is cheaper than changing material, and the two can be combined**; and at 2900 rpm surface velocity is not low — the "small pump, small load" intuition routinely underestimates pv.

## 5. Field Quick Reference

| Problem | Sizing angle |
|---|---|
| Crushed/cracked bearing | Specific load exceeded — compute p before blaming material |
| Local melting / thermal cracks | pv exceeded — friction power density too high |
| Fast uniform wear | Insufficient pv margin or sand; check medium first, margin second |
| Seizure (new installation) | Clearance too small; check cold/hot expansion delta |
| Bite marks on thrust face | Axial force exceeded or poor thrust-face lubrication |

## Conclusion

Graphite bearing load sizing reduces to one sentence: **specific load governs strength, pv governs temperature, clearance governs wear**. The three-step calculation takes ten minutes and decides between 2,000 and 20,000 hours of life. When allowables are uncertain, lengthen the bearing and lower specific pressure — never rely on "graphite is hard." Brittle materials give no overload warning: the first exceedance is fracture.`,
    },
  },
  // 11. October 23, 2026 - G6 series multi-spring seal ring
  {
    slug: "g6-series-multi-spring-seal-ring",
    title: {
      zh: "G6系列多弹簧机械密封石墨环：结构原理与检修要点",
      en: "G6 Series Multi-Spring Mechanical Seal Graphite Rings: Design Principle and Maintenance",
    },
    excerpt: {
      zh: "G6系列（-20℃~200℃、≤0.8 MPa、≤3500 rpm）是工业泵、清水泵与污水泵上装机量最大的石墨环规格之一。多弹簧结构对石墨环提出特殊要求：压缩量控制、防转、弹簧座磨损。本文讲检修时的检查顺序与换型判据。",
      en: "The G6 series (-20 to 200°C, ≤ 0.8 MPa, ≤ 3500 rpm) is among the highest-volume graphite ring sizes on industrial, water and sewage pumps. Multi-spring designs impose special requirements on graphite rings: compression control, anti-rotation and spring-seat wear. This article covers overhaul inspection order and replacement criteria.",
    },
    tag: "process",
    date: "2026-10-23",
    content: {
      zh: `## 核心要点

- 多弹簧密封的端面比压由一圈小弹簧提供，石墨环承受的是"多点集中载荷"——端面平面度和弹簧座磨损直接决定比压均匀性
- G6系列标称 -20℃ ~ 200℃、≤ 0.8 MPa、≤ 3500 rpm，覆盖工业泵、清水泵、污水泵与通用机械，参数不极端但工况杂
- 换环判据：端面磨损量超过 1 mm（或端面宽度磨去 1/3）、密封面出现贯通划痕、弹簧自由长度衰减超 5%
- 检修顺序：先测轴套跳动和弹簧座磨损，再拆环；只换石墨环不查弹簧座，等于白修
- 污水泵场合优先选浸锑牌号 + SiC 对磨面；含纤维介质必须配过滤，否则任何石墨环都活不长

## 一、多弹簧密封的结构特点

机械密封按弹性元件分单弹簧与多弹簧两类：

- **单弹簧**：一只大圆锥弹簧套在轴上，结构简单、不易堵，适合含颗粒介质
- **多弹簧**：一圈小圆柱弹簧（4~12 只）沿圆周均布，通过弹簧座把力传给石墨环，结构紧凑、弹力均匀、适合小轴径

G6 系列石墨环服务的正是多弹簧结构的密封腔。多弹簧对石墨环的影响是双向的：

**好处**：圆周弹力分布均匀，端面比压比单弹簧更容易做平；石墨环端面局部高压点少，崩边风险低。

**代价**：

1. 每个弹簧的力都通过一个小面积弹簧座传到石墨环背面，形成一圈集中载荷点——石墨是脆性材料，背面局部应力过高会在运行中微裂
2. 弹簧数量多，单只断裂后总弹力下降 8~25%（视数量），端面比压不足导致泄漏增大，而现场往往先怀疑石墨环
3. 含颗粒介质中，弹簧间隙容易被颗粒堵死，失去补偿能力——多弹簧在污水、纸浆类介质中天然吃亏

## 二、G6 系列的参数与选位

G6 系列标称 -20℃ ~ 200℃、≤ 0.8 MPa、≤ 3500 rpm，适配工业泵、清水泵、污水泵与通用机械。选位口径：

| 工况 | 建议配置 |
|---|---|
| 清水、冷却水 | 浸树脂石墨环 + 高铬不锈钢或 SiC 对磨面 |
| 污水、含砂水 | 浸锑石墨环 + SiC 对磨面 + 吸入过滤 |
| 轻油、润滑介质 | 浸树脂或浸锑 + SiC |
| 弱酸碱 | 浸树脂 + SiC（Al₂O₃ 在 pH>10 慎用） |
| 频繁启停 | 浸铜（导热最好，抗启动磨损）——但氨系统禁用 |

注意 G6 系列压力上限 0.8 MPa：化工高压场合往 120（M3N，≤1.2 MPa）或 206 系列（≤2.0 MPa）走，不要靠加粗弹簧硬扛。

## 三、检修检查顺序

泵解体检修时，石墨环的检查按"由外到内、先根因后件"的顺序：

### 3.1 先查根因

1. **轴套径向跳动**：≤ 0.03 mm（百分表打轴套外圆）。超差先校轴，不换环也白换
2. **轴振**：轴承状态、转子平衡；泵振动是密封杀手
3. **密封腔清洁度**：旧垫片、结晶介质、纤维团——都是新环的磨粒

### 3.2 再查弹性元件

4. **弹簧自由长度**：逐只测量，衰减超 5% 或出现裂纹、锈蚀，整套换
5. **弹簧座磨损**：与石墨环背面的接触面若磨出台阶或偏磨，弹簧力会偏载，必须换座
6. **传动销/防转销**：位置准确、无磨损；间隙按 0.3~0.8 mm 单边核

### 3.3 最后看石墨环

7. **端面磨损量**：端面宽度磨去超过 1/3、或磨损量超 1 mm，换
8. **端面缺陷**：贯通划痕、崩边超过接触带、蛛网状热裂纹——任一出现即换
9. **内孔与背面**：内孔单侧拉伤 = 压装/对中问题；背面压痕深浅不一 = 弹簧座问题
10. **浸渍质量**：端面色斑、断面可见大气孔——批次问题，联系供应商

## 四、换型与安装要点

- **石墨环和 SiC 环的寿命错配**是常态：SiC 寿命通常是石墨的 1 倍以上。默认策略"换石墨、留 SiC"；SiC 崩缺或深划才换
- **成套更换**：石墨环 + O 圈 + 弹簧同批换。O 圈老化后失去补偿，新环也救不回来
- **压装**：动环压装用导向套，2~5 mm/s 匀速，压后测内孔圆度（变化 > 0.01 mm 说明应力过大）
- **O 圈润滑**：装配用食品级/相容润滑脂薄涂，禁止干压（会撕裂 O 圈）；氨系统用氨兼容脂
- **磨合期管理**：新装密封前 2 小时是磨合期，允许每分钟几滴的初始泄漏；不降反升就要停机查

## 五、失效速查表

| 现象 | 根因 | 处置 |
|---|---|---|
| 泄漏逐渐增大 | 端面正常磨损；或弹簧衰减 | 换环 + 测弹簧 |
| 泄漏突然增大 | 弹簧断裂；O 圈翻边；对磨面崩缺 | 拆检弹性元件与静环 |
| 端面边缘崩缺 | 比压过大；含颗粒卡入 | 校核比压；加过滤 |
| 石墨环背面压痕不均 | 弹簧座磨损偏载 | 换弹簧座 |
| 内孔轴向裂纹 | 压装过盈 | 改推合，核对公差 |
| 密封腔积垢 | 介质结晶/结焦 | 改冲洗方案（Plan 11/32） |

## 结语

G6 系列这类通用石墨环的检修，难点从来不在环本身，而在**与它配合的弹簧、弹簧座和轴系**。检修时把"先测跳动、再查弹簧、后看环面"的顺序走完，同一只环的寿命差距可以拉到 3 倍以上。多弹簧密封在含颗粒介质里天然吃亏——污水泵场合该上过滤就上过滤，别让石墨环替过滤器的缺席买单。`,
      en: `## Key Points

- In multi-spring seals, face pressure comes from a ring of small springs; graphite rings carry point loads — face flatness and spring-seat wear decide pressure uniformity
- The G6 series (-20 to 200°C, ≤ 0.8 MPa, ≤ 3500 rpm) covers industrial, water and sewage pumps and general machinery: unspectacular ratings, messy duties
- Replacement criteria: face wear beyond 1 mm (or a third of face width consumed), through-scoring on the face, spring free length down more than 5%
- Overhaul order: measure sleeve runout and spring-seat wear before pulling the ring — replacing the ring without checking the seat is half a job
- Sewage duty: prefer antimony-impregnated grades with SiC faces; fiber-laden media demand filtration or no graphite ring survives

## 1. Multi-Spring Design Traits

Mechanical seals divide by elastic element into single-spring and multi-spring:

- **Single spring**: one large conical spring around the shaft; simple, clog-resistant, suits particulate media
- **Multi-spring**: a ring of 4–12 small cylindrical springs distributing load through a spring seat to the graphite ring; compact, even force, good for small shafts

The G6 series graphite ring serves exactly this multi-spring cavity. The effects on the ring cut both ways.

**Advantage**: circumferential force distribution is even, so face pressure is easier to keep flat than with a single spring; fewer local pressure peaks, less edge chipping.

**Costs**:

1. Each spring transmits force through a small seat area to the ring's back face — a ring of concentrated load points. Graphite is brittle; excessive local back-face stress micro-cracks the ring in service
2. With many springs, one failure drops total spring force 8–25% (by count); face pressure collapses and leakage rises — while the field blames the graphite ring first
3. In particulate media, spring gaps plug up and compensation is lost — multi-spring designs are inherently disadvantaged in sewage and stock service

## 2. G6 Ratings and Duty Positioning

The G6 series is rated -20 to 200°C, ≤ 0.8 MPa, ≤ 3500 rpm for industrial, water and sewage pumps and general machinery:

| Duty | Suggested configuration |
|---|---|
| Clean/cooling water | Resin-impregnated ring + high-chrome stainless or SiC face |
| Sewage, sandy water | Antimony-impregnated ring + SiC face + suction strainer |
| Light oil, lubricants | Resin or antimony + SiC |
| Weak acid/alkali | Resin + SiC (avoid Al₂O₃ above pH 10) |
| Frequent start/stop | Copper-impregnated (best conductivity, resists startup wear) — banned in ammonia |

Note the 0.8 MPa ceiling: for high-pressure chemical duty move to 120 (M3N, ≤1.2 MPa) or 206 series (≤2.0 MPa) — do not brute-force it with heavier springs.

## 3. Overhaul Inspection Order

At pump teardown, inspect the ring "outside-in, cause before part":

### 3.1 Root Causes First

1. **Sleeve radial runout**: ≤ 0.03 mm (indicator on sleeve OD). Fix the shaft first — a new ring on a bent shaft is wasted
2. **Shaft vibration**: bearing condition, rotor balance; pump vibration is the seal killer
3. **Cavity cleanliness**: old gaskets, crystallized media, fiber wads — the new ring's abrasive source

### 3.2 Elastic Elements Second

4. **Spring free length**: measure each; replace the set if any is down 5%, cracked or rusted
5. **Spring-seat wear**: a stepped or unevenly worn seat loads the ring unevenly — replace it
6. **Drive/anti-rotation pins**: correct position, unworn; single-sided clearance 0.3–0.8 mm

### 3.3 The Graphite Ring Last

7. **Face wear**: a third of face width consumed, or wear beyond 1 mm — replace
8. **Face defects**: through-scoring, edge chips beyond the contact band, spider-web thermal cracks — any one, replace
9. **Bore and back face**: one-sided bore scoring = pressing/alignment issue; uneven back-face impressions = seat problem
10. **Impregnation quality**: face blotching, visible through-pores in cross-section — batch issue, contact the supplier

## 4. Replacement and Installation

- **Life mismatch between graphite and SiC** is normal: SiC typically outlives graphite 2× or more. Default: replace graphite, keep SiC; replace SiC only for chips or deep scoring
- **Replace as a set**: ring + O-rings + springs together. Aged O-rings kill compensation; a new ring cannot compensate for them
- **Pressing**: press rotating rings with a guide sleeve at 2–5 mm/s; check bore roundness after (change > 0.01 mm = excessive assembly stress)
- **O-ring lubrication**: thin film of compatible food-grade grease; never dry-press (tears the O-ring); ammonia-compatible grease in ammonia service
- **Break-in management**: the first 2 hours after installation are break-in; a few drops per minute of initial leakage is acceptable. If leakage rises instead of settling, stop and investigate

## 5. Failure Quick Reference

| Symptom | Root cause | Action |
|---|---|---|
| Leakage growing gradually | Normal face wear; or spring decay | Replace ring; measure springs |
| Sudden leakage increase | Broken spring; extruded O-ring; chipped mating face | Inspect elastic elements and seat |
| Chipped face edge | Excessive face pressure; particle jam | Verify face pressure; add filtration |
| Uneven back-face impressions | Spring-seat wear, off-axis load | Replace seat |
| Axial bore cracks | Pressing interference | Change to push fit; verify tolerances |
| Cavity fouling | Crystallizing/coking media | Change flush plan (Plan 11/32) |

## Conclusion

The difficulty with general-purpose rings like the G6 series is never the ring itself — it is **the springs, seats and shaft line it lives with**. Follow the order "measure runout, check springs, then look at the face" and the same ring's life can vary by more than 3×. Multi-spring designs are inherently disadvantaged in particulate media — for sewage duty, fit the strainer and do not make the graphite ring pay for the missing filter.`,
    },
  },
  // 12. October 25, 2026 - CIP cleaning food beverage graphite seal
  {
    slug: "cip-cleaning-food-beverage-graphite-seal",
    title: {
      zh: "CIP清洗工况下的食品饮料石墨密封：耐碱、耐热冲击与合规",
      en: "Graphite Seals in Food and Beverage CIP Service: Alkali Resistance, Thermal Shock and Compliance",
    },
    excerpt: {
      zh: "食品饮料线的 CIP 就地清洗每天用 1%~2% 碱液冲 60~80℃，再用酸洗、热水消毒，密封件一天经历两轮酸碱交替和几十度温跃。本文讲石墨密封在这套循环里的选型、热裂预防与食品接触合规要点。",
      en: "Food and beverage CIP cycles daily through 1–2% alkali at 60–80°C, then acid, then hot-water sanitizing — seals see two acid/alkali alternations and tens of degrees of thermal shock every day. This article covers selection, thermal-crack prevention and food-contact compliance for graphite seals in this duty.",
    },
    tag: "application",
    date: "2026-10-25",
    content: {
      zh: `## 核心要点

- CIP 循环= 水预冲 → 碱洗（NaOH 1%~2%，60~80℃）→ 水冲 → 酸洗（HNO₃/H₃PO₄ 1%~2%）→ 消毒热水（85~90℃），密封每天经历 2 轮酸碱交替与 60℃ 以上的温跃
- 碳石墨耐稀酸碱，选型的真正敌人是热冲击（端面热裂）和化学交替下的 O 圈老化，不是腐蚀
- 端面热裂预防：窄端面 + 低比压 + 浸金属牌号（导热好），比"换更贵的材料"更有效
- O 圈是 CIP 系统最短命的密封件：EPDM 耐碱耐热是标准选择，矿物油场合改 FKM；寿命按 1~2 年计划更换
- 食品接触合规三件事：材料符合 EC 1935/2004 与 FDA 21 CFR 177 体系、表面粗糙度不藏污（Ra ≤ 0.8 μm 动密封区）、可追溯批次管理

## 一、CIP 循环对密封的考验

典型的就地清洗（Clean-in-Place）程序：

| 阶段 | 介质 | 温度 | 时长 |
|---|---|---|---|
| 预冲 | 水 | 常温 | 5~10 min |
| 碱洗 | NaOH 1%~2% | 60~80℃ | 10~20 min |
| 中间水冲 | 水 | 常温 | 5 min |
| 酸洗 | HNO₃ 或 H₃PO₄ 1%~2% | 60~70℃ | 10~15 min |
| 消毒 | 热水 | 85~90℃ | 15~20 min |

密封件在这个循环里承受的不是单一介质的缓慢腐蚀，而是三重考验：

### 1.1 化学交替

碳石墨本身耐稀酸碱：碳在碱中稳定，在有机酸与稀无机酸中也稳定；酚醛/环氧浸渍体系耐稀碱表现良好。真正的问题是**交替**：

- 碱阶段渗入石墨孔隙的碱液，在酸阶段被中和，盐类（硝酸钠、磷酸钠）留在孔隙里，反复循环后孔隙内结垢，端面出现麻点
- 对磨面若是不锈钢，酸阶段的点蚀风险随氯化物含量上升；SiC 免疫
- O 圈在碱中溶胀、在酸中收缩，一天两个来回，压缩永久变形累积

### 1.2 热冲击

60~80℃ 碱液之后紧跟常温水冲，密封端面在几分钟内经历 60℃ 以上的温跃。石墨的导热系数视浸渍体系在 15~85 W/(m·K)，端面表层的热梯度产生热应力：

- 表层想胀，芯部不让——拉应力集中在端面外缘
- 反复几千次循环后，端面出现蛛网状裂纹，泄漏从裂纹处渗出
- 浸树脂石墨的树脂相热膨胀远大于碳相，热循环下更容易出现微裂纹——这是 CIP 工况下热裂的主因

### 1.3 压力与机械循环

CIP 泵的频繁启停（每天 2~4 个循环）带来启动磨损累积。此外巴氏杀菌（> 100℃）与 CIP 叠加的工艺线，温度上限更高。

## 二、选型要点

### 2.1 石墨环本体

| 项目 | 建议 |
|---|---|
| 浸渍体系 | 浸树脂（常规 CIP）；温度上限 > 100℃ 或有热水消毒直冲的场合选浸锑（导热与强度更好） |
| 端面宽度 | 窄端面 3~5 mm：端面比压低、热梯度小，热裂风险显著低于宽端面 |
| 比压 | 取低值区（清水类 0.2~0.3 MPa）：比压越大，摩擦热越多、热裂越快 |
| 对磨面 | SiC 静环。酸碱交替 + 每天热循环下，SiC 是唯一不用操心的选择 |
| 表面质量 | 端面 Ra ≤ 0.2 μm、无方向性刀痕（圆周向纹路易藏污） |

### 2.2 O 圈与辅助密封

| 介质侧重 | 材料 |
|---|---|
| 碱洗为主、水基 | EPDM（耐碱、耐蒸汽、耐 90℃热水） |
| 有油成分（油脂线） | FKM（耐油，耐碱略逊） |
| 酸碱都强 | EPDM 或全氟醚（FFKM，成本高，只用于关键工位） |

CIP 系统的 O 圈寿命通常 1~2 年，计划性更换，不要等漏。换 O 圈时同步检查密封腔与轴套磨损。

### 2.3 与介质的细节

- **硝酸**对石墨无碍，但对高铬不锈钢的点蚀不容忽视——酸洗阶段若发现静环（不锈钢材质）出现锈迹，改 SiC
- **次氯酸/过氧乙酸消毒液**是氧化性介质：碳在稀释短时接触下稳定，但长期高浓度会缓慢氧化；消毒液残留要冲净
- **脂肪/蛋白残留**会在密封面碳化结焦（尤其 > 100℃ 工位），形成硬质颗粒划伤端面——冲洗流量要保证把密封腔的残留带走

## 三、食品接触合规

### 3.1 材料声明

- 欧盟：EC 1935/2004（食品接触材料框架）+ EC 2023/2006（GMP）；石墨件作为"非塑料/非橡胶"类，通常出具"成分符合性声明"（DoC）
- 美国：FDA 21 CFR 177（间接食品添加剂）体系；碳石墨类通常按 177.2410/177.2600 类口径或供应商声明
- 中国：GB 4806 系列（食品接触材料标准）

实务口径：采购时要求供应商提供**材质证明 + 浸渍剂成分声明**——树脂/金属浸渍剂是合规链上最常缺的一环。只写"食品级"三个字没有意义，要写清楚"符合 EC 1935/2004 与 GB 4806，浸渍剂为 XX"。

### 3.2 卫生设计

- 与产品接触的表面粗糙度 Ra ≤ 0.8 μm（轴套、腔体、石墨件非密封面），不积污、可冲洗
- 无死角、无盲孔；静密封优先焊接/卡箍连接而非垫片
- 石墨件与 O 圈不得有龟裂、掉屑——掉屑本身就是异物污染

### 3.3 追溯

- 每批石墨环留样 + 材质报告，保存期与产品保质期匹配
- 更换记录进入设备档案：批次号、装机日期、运行小时数、更换原因
- 出现异物投诉时，批次记录是回溯的唯一依据

## 四、维护要点

| 周期 | 动作 |
|---|---|
| 每班 | 看泄漏：痕迹级正常；连续流立即处理 |
| 每周 | 记录 CIP 循环次数、温度曲线、密封腔温度 |
| 每月 | 检查端面磨损（机会性）、O 圈外观 |
| 每年（或 8000 h） | 计划更换石墨环 + O 圈 + 弹簧；测轴套跳动 |
| CIP 程序变更时 | 重新评估温度与化学浓度——碱浓度上调或温度提高，密封选型要跟着复核 |

## 五、失效速查

| 现象 | 根因 | 处置 |
|---|---|---|
| 端面蛛网状裂纹 | 热冲击 + 宽端面/高比压 | 改窄端面低比压，换浸锑牌号 |
| 端面麻点、粗糙 | 孔隙内盐类结垢 | 优化终洗（水质、时长） |
| O 圈硬化/溶胀 | 材料选错或寿命到期 | 换 EPDM/FKM，缩短更换周期 |
| 泄漏随 CIP 频次上升 | 启动磨损 + 端面热疲劳叠加 | 降比压、选导热更好牌号 |
| 异物投诉（黑点） | 石墨掉屑或 O 圈碎屑 | 换件 + 查批次质量 |

## 结语

食品饮料 CIP 工况的石墨密封选型，核心不是"耐不耐腐蚀"，而是**扛不扛得住一天两轮的酸碱交替和几十度温跃**。做法可以归纳成三句：端面要窄、比压要低、导热要好（浸锑或 SiC 对磨）；O 圈按 1~2 年计划更换；合规靠材质声明和批次追溯，不靠口头"食品级"。这套组合做到，密封在 CIP 线上可以安安稳稳跑一年以上。`,
      en: `## Key Points

- A CIP cycle = water prerinse → alkali (NaOH 1–2%, 60–80°C) → rinse → acid (HNO₃/H₃PO₄ 1–2%) → hot-water sanitize (85–90°C): seals see two acid/alkali alternations and 60°C+ thermal jumps every day
- Carbon graphite tolerates dilute acid and alkali; the real enemies are thermal shock (face cracking) and O-ring aging under chemical cycling — not corrosion
- Thermal-crack prevention: narrow faces + low face pressure + metal-impregnated grades (better conductivity) beats "buying a more expensive material"
- O-rings are the shortest-lived seals in CIP: EPDM for alkali/heat is standard, FKM where oil is present; plan replacement every 1–2 years
- Food-contact compliance rests on three things: material compliance (EC 1935/2004, FDA 21 CFR 177 framework, GB 4806), hygienic surface finish (Ra ≤ 0.8 μm on dynamic surfaces), and batch traceability

## 1. What CIP Does to Seals

A typical clean-in-place program:

| Stage | Medium | Temperature | Duration |
|---|---|---|---|
| Prerinse | Water | Ambient | 5–10 min |
| Alkali wash | NaOH 1–2% | 60–80°C | 10–20 min |
| Intermediate rinse | Water | Ambient | 5 min |
| Acid wash | HNO₃ or H₃PO₄ 1–2% | 60–70°C | 10–15 min |
| Sanitize | Hot water | 85–90°C | 15–20 min |

Seals face not slow single-medium corrosion but three simultaneous challenges.

### 1.1 Chemical Cycling

Carbon graphite tolerates dilute acid and alkali: carbon is stable in alkali and in organic and dilute inorganic acids; phenolic/epoxy impregnation handles dilute alkali well. The problem is the **alternation**:

- Alkali that penetrated pores in the wash phase is neutralized in the acid phase; salts (sodium nitrate/phosphate) remain in the pores, scale builds over cycles, and faces pit
- Stainless mating faces carry pitting risk in the acid phase as chloride content rises; SiC is immune
- O-rings swell in alkali and contract in acid — twice a day, accumulating compression set

### 1.2 Thermal Shock

A 60–80°C alkali wash followed by ambient rinse gives the face a 60°C+ jump within minutes. Graphite conductivity (15–85 W/(m·K) by impregnant) leaves a steep surface gradient:

- The surface layer wants to expand against a cooler core — tensile stress concentrates at the face outer edge
- After thousands of cycles, spider-web cracks appear and leakage seeps through them
- The resin phase in resin-impregnated graphite expands far more than the carbon phase, making micro-cracking under thermal cycling the dominant CIP failure mode

### 1.3 Pressure and Mechanical Cycling

CIP pumps start and stop 2–4 times daily, accumulating startup wear. Lines combining pasteurization (> 100°C) with CIP push temperatures higher still.

## 2. Selection Points

### 2.1 Graphite Ring

| Item | Recommendation |
|---|---|
| Impregnant | Resin-impregnated (standard CIP); antimony-impregnated when temperatures exceed 100°C or hot-water sanitize sprays directly (better conductivity and strength) |
| Face width | Narrow 3–5 mm: lower face pressure and thermal gradient, markedly lower crack risk than wide faces |
| Face pressure | Low end (water-type 0.2–0.3 MPa): more pressure means more friction heat and faster cracking |
| Mating face | SiC seat — the only worry-free choice under alternating chemistry and daily thermal cycling |
| Surface quality | Face Ra ≤ 0.2 μm, no circumferential lay marks (they trap soil) |

### 2.2 O-Rings and Auxiliary Seals

| Medium emphasis | Material |
|---|---|
| Alkali-dominant, water-based | EPDM (alkali, steam and 90°C water resistant) |
| Oil components present (fat lines) | FKM (oil resistant, slightly weaker in alkali) |
| Strong acid and alkali | EPDM or FFKM (premium, critical stations only) |

CIP O-ring life is typically 1–2 years — replace on schedule, not on leak. Inspect cavity and sleeve wear at each O-ring change.

### 2.3 Media Details

- **Nitric acid** is harmless to graphite, but pitting of high-chrome stainless is not — if the stainless seat rusts during acid wash, switch to SiC
- **Hypochlorous/peracetic sanitizers** are oxidizing: carbon is stable in dilute, short contact but slowly oxidizes at high concentration long-term; rinse residuals away
- **Fat/protein residues** carbonize on faces (especially above 100°C stations), forming hard particles that score faces — flush flow must carry residues out of the chamber

## 3. Food-Contact Compliance

### 3.1 Material Declarations

- EU: EC 1935/2004 (framework) + EC 2023/2006 (GMP); graphite parts typically carry a declaration of composition (DoC) as non-plastic/non-rubber materials
- US: FDA 21 CFR 177 (indirect food additives) framework; carbon graphite usually documented per the 177.2410/177.2600 family or supplier declaration
- China: GB 4806 series

Practical rule: demand **material certificates plus an impregnant composition declaration** — the resin or metal impregnant is the most commonly missing link in the compliance chain. "Food grade" written alone means nothing; write "complies with EC 1935/2004 and GB 4806, impregnant XX."

### 3.2 Hygienic Design

- Product-contact surfaces at Ra ≤ 0.8 μm (sleeves, cavity, non-face areas of graphite parts): no soil traps, fully flushable
- No dead legs or blind holes; prefer welded or clamp connections over gasketed statics
- No cracking or flaking on graphite parts or O-rings — debris is foreign matter

### 3.3 Traceability

- Retain a sample plus material report per graphite batch, kept for the product shelf life
- Log every replacement in the equipment file: batch number, install date, run hours, reason for change
- Batch records are the only route to root cause when foreign-matter complaints arrive

## 4. Maintenance

| Interval | Action |
|---|---|
| Every shift | Check leakage: trace is normal; continuous flow demands action |
| Weekly | Log CIP cycle count, temperature profile, seal-chamber temperature |
| Monthly | Inspect face wear (opportunistic), O-ring appearance |
| Annually (or 8,000 h) | Planned replacement of ring + O-rings + springs; measure sleeve runout |
| On CIP program change | Re-evaluate selection — higher alkali concentration or temperature requires re-verification |

## 5. Failure Quick Reference

| Symptom | Root cause | Action |
|---|---|---|
| Spider-web face cracks | Thermal shock + wide face/high pressure | Narrow face, lower pressure, switch to antimony grade |
| Pitted, rough face | Salt scaling inside pores | Optimize final rinse (water quality, duration) |
| O-ring hardened/swollen | Wrong material or life expired | Switch EPDM/FKM; shorten interval |
| Leakage rising with CIP frequency | Startup wear + face thermal fatigue combined | Lower pressure; select better-conductivity grade |
| Foreign-matter complaint (black specks) | Graphite debris or O-ring fragments | Replace parts; audit batch quality |

## Conclusion

For graphite seals in food and beverage CIP service, the core question is not "is it corrosion-resistant" but **can it survive two acid/alkali alternations and tens of degrees of thermal jump every day**. Three rules cover it: narrow faces, low pressure, good conductivity (antimony impregnation or SiC mating); plan O-ring replacement every 1–2 years; and compliance comes from material declarations and batch traceability, not the verbal claim "food grade." Done this way, seals hold for over a year on a CIP line without drama.`,
    },
  },
  // 13. October 27, 2026 - Southeast Asia sediment water pump seal
  {
    slug: "southeast-asia-sediment-water-pump-seal",
    title: {
      zh: "东南亚高泥沙水源的水泵密封选型：磨粒磨损的系统对策",
      en: "Selecting Pump Seals for Sediment-Laden Water in Southeast Asia: A Systemic Answer to Abrasive Wear",
    },
    excerpt: {
      zh: "越南、印尼、菲律宾的地下水与河渠水含砂量高，密封环按清水设计寿命几个月就磨坏。本文给出一套按含砂量分级的选型矩阵：从过滤、冲洗方案、材料硬度到结构设计的完整对策，以及现场快速判断磨损类型的方法。",
      en: "Groundwater and canal water in Vietnam, Indonesia and the Philippines carries high sand loads; rings sized for clean water wear out in months. This article provides a graded selection matrix by sand content — filtration, flush plans, material hardness and structural design — plus field methods to identify wear types quickly.",
    },
    tag: "selection",
    date: "2026-10-27",
    content: {
      zh: `## 核心要点

- 含砂水质下密封寿命与含砂量近似成反比：含砂 50 mg/L 按清水设计能跑 8000 小时的密封，可能 1500 小时就磨坏；对策必须按"系统"做，不是换更硬的环
- 对策优先级：过滤 > 冲洗方案 > 材料硬度 > 结构设计；过滤是唯一能改变"进入密封腔的砂量"这一根因的手段
- 石墨环选浸锑或浸金属牌号（硬度 HS 80 以上），对磨面用 SiC；清水场合常用的高铬不锈钢对磨面在含砂水中是最差选择
- 冲洗方案：含砂 < 100 mg/L 用 Plan 11 + 过滤；更高含砂上 Plan 32 外冲或双端面隔离
- 现场判断磨损类型：端面圆周向平行划痕 = 磨粒磨损；蛛网纹 = 热裂；偏磨 = 对中不良——三种修法完全不同

## 一、东南亚水质的现实

越南湄公河三角洲、印尼爪哇、菲律宾吕宋的地表与浅层地下水普遍含砂：

| 水源 | 典型含砂 | 颗粒特征 |
|---|---|---|
| 河渠直抽 | 100~1000 mg/L（汛期更高） | 石英为主，粒径 0.05~0.5 mm |
| 浅井地下水 | 20~200 mg/L | 细砂 + 少量粉砂 |
| 市政管网（改善后） | < 20 mg/L | 经沉淀处理，仍有波动 |
| 海水 | 几乎无砂但高腐蚀 | 另一类问题（见本站[电偶腐蚀一文](/blog/graphite-seal-stainless-shaft-galvanic-corrosion)） |

石英（莫氏 7）比任何密封材料都硬，磨损是"犁沟"机制：颗粒压入软的一面，在对面犁出沟槽。密封环是脆性材料，被犁出的沟槽就是永久的泄漏通道——**磨粒磨损不可逆，只能预防**。

## 二、按含砂量的分级对策

### 2.1 对策优先级

现场最常见的错误是"磨坏了换更硬的环"。硬度只提高耐磨时间，不改变砂的输入量。正确的优先级：

| 优先级 | 手段 | 作用对象 |
|---|---|---|
| 1 | 入口过滤 | 减少进入泵的砂量（根因） |
| 2 | 冲洗方案 | 冲走/隔离已进入的砂 |
| 3 | 材料硬度 | 延长同等砂量下的寿命 |
| 4 | 结构设计 | 降低砂在危险区域的停留 |

### 2.2 分级矩阵

| 含砂量 | 推荐组合 | 预期寿命 |
|---|---|---|
| < 20 mg/L（市政水） | 浸树脂石墨 + 不锈钢对磨 + Plan 11 | 8000 h 以上 |
| 20~100 mg/L | 浸锑石墨 + SiC 对磨 + Plan 11 + 过滤循环（Plan 12 过滤版） | 4000~8000 h |
| 100~500 mg/L | 浸锑石墨 + SiC + Plan 32 外冲（洁净水）+ 吸入过滤 40 目 | 2000~4000 h |
| > 500 mg/L | 双端面 + 隔离液（Plan 54）+ 40 目过滤 + 沉淀池预处理 | 2000 h 上下，需按月点检 |
| 汛期峰值（> 2000 mg/L） | 停机避峰，或临时改开式冲洗结构 | —— |

### 2.3 过滤方案

- **吸入侧 Y 型过滤器 40~60 目**：最低限度配置；目数再高压损大、堵得勤
- **沉淀池/旋流除砂**：高含砂水源的预处理，成本在土建，运行费低
- **自动反冲洗过滤器**：连续生产场合，压差到设定值自动清洗；投资高但省人工
- **滤网目数与砂粒径**：目数 = 25.4 / (丝径 + 孔径) mm，40 目对应约 0.42 mm 孔径——能挡住 0.05~0.5 mm 的大部分石英

### 2.4 冲洗方案要点

- **Plan 11（自循环）**：靠泵自身压力把密封腔液体循环回泵入口；含砂场合必须加过滤器版本（Plan 12）
- **Plan 32（外冲）**：从外部引洁净水冲入密封腔，把砂挡在外面；水源必须是洁净的，否则等于换了个入口
- **Plan 54（外供隔离液）**：双端面 + 洁净隔离液循环系统，含砂与腐蚀都不进密封腔；成本最高，可靠性最好
- 冲洗流量不是越大越好：流量过大改变密封腔温度场，反而可能汽化；按供应商推荐值 ± 20% 执行

## 三、材料与对磨面

### 3.1 石墨环

| 场景 | 牌号选择 | 理由 |
|---|---|---|
| 含砂 < 100 mg/L | 浸锑（硬度 HS 80 以上） | 强度高，抗犁沟能力强于树脂体系 |
| 频繁干运转/间歇供水 | 浸铜 | 导热 85 W/(m·K) 量级，抗启动磨损 |
| 腐蚀 + 含砂 | 浸锑（避开强氧化介质） | 强度与耐蚀折中 |

### 3.2 对磨面

这是含砂水质下最容易被低估的一项：

- **高铬不锈钢**：便宜，但硬度只有 HV 200~300 量级，含砂水中被磨出沟槽，随后沟槽里的砂继续磨石墨——恶性循环。**含砂 > 100 mg/L 场合不要用**
- **反应烧结 SiC**：HRA 90 以上，石英砂很难犁动它；导热优于不锈钢，热稳定性好。**含砂场合的标准选择**
- **碳化钨（WC）**：更硬，但脆且贵，一般留给高 pv 场合

## 四、现场磨损类型判断

修泵时先判断磨损类型，再定对策——换错方向等于白修：

| 端面形貌 | 类型 | 对策方向 |
|---|---|---|
| 平行圆周向细密划痕，石墨与对磨面都有 | 磨粒磨损 | 加强过滤、升 SiC、上冲洗 |
| 只石墨有沟槽，SiC 面完好 | 磨粒嵌入石墨或润滑不良 | 查水质、查冲洗流量 |
| 蛛网状裂纹、放射纹 | 热裂（汽化/干运转） | 查冲洗、降比压、查吸入空气 |
| 单侧磨损带（半边磨半边不磨） | 对中不良/轴振 | 校对中、修轴承 |
| 端面外缘翻边、发亮 | 比压过大 | 校核弹簧与端面宽度 |
| 内孔单侧拉伤 | 压装偏斜或间隙过小 | 修配工艺 |
| O 圈硬化、压缩变形 | 寿命到期 | 按周期更换 |

## 五、现场管理清单

| # | 措施 | 频率 |
|---|---|---|
| 1 | 过滤器压差检查（压差翻倍即清洗） | 每周 |
| 2 | 密封泄漏量记录（痕迹/滴漏/连续流） | 每班 |
| 3 | 电机电流趋势（磨损使扭矩缓慢上升） | 每周 |
| 4 | 水源含砂目测（静置瓶观察沉降） | 每月，汛期每周 |
| 5 | 计划换环（按含砂量折算，不等漏） | 按矩阵寿命 |
| 6 | 换环时同步测轴套跳动、查 SiC 面 | 每次 |

## 结语

东南亚高泥沙水源的密封问题，答案不在材料表里，在系统里：**过滤挡住大部分砂、冲洗方案隔离漏网的砂、材料硬度消化剩下的砂**，三层各管一段，寿命才能从几个月拉到几年。单换更硬的石墨环，是三层里最靠后的那一层——做了最多人能做的事，拿到最小的改善。`,
      en: `## Key Points

- In sandy water, seal life falls roughly inversely with sand load: a ring sized for clean water at 8,000 hours may wear out in 1,500 at 50 mg/L; the answer must be systemic, not a harder ring
- Priority order: filtration > flush plan > material hardness > structural design; filtration is the only measure that attacks the root cause — how much sand enters the chamber
- Graphite rings: antimony- or metal-impregnated (HS 80+) with SiC mating faces; the high-chrome stainless common in clean water is the worst choice in sand
- Flush plans: under 100 mg/L use Plan 11 with filtration; above that, Plan 32 external flush or double-seal isolation
- Field wear diagnosis: circumferential parallel scoring = abrasive wear; spider-web = thermal crack; one-sided wear = misalignment — three completely different fixes

## 1. The Reality of Southeast Asian Water

Groundwater and shallow surface water in the Mekong Delta, Java and Luzon commonly carry sand:

| Source | Typical sand load | Particle character |
|---|---|---|
| Direct canal/river pumping | 100–1000 mg/L (higher in flood season) | Quartz dominant, 0.05–0.5 mm |
| Shallow well groundwater | 20–200 mg/L | Fine sand plus some silt |
| Municipal supply (treated) | < 20 mg/L | Sedimentation-treated, still variable |
| Seawater | Virtually sand-free but highly corrosive | A different problem (see this site's [galvanic corrosion article](/blog/graphite-seal-stainless-shaft-galvanic-corrosion)) |

Quartz (Mohs 7) is harder than any seal material; wear proceeds by plowing — particles embed in the softer side and furrow the harder. Graphite is brittle, and plowed grooves are permanent leak paths: **abrasive wear is irreversible, only preventable**.

## 2. Graded Countermeasures by Sand Content

### 2.1 Priority Order

The most common field mistake is "it wore out, fit a harder ring." Hardness buys time; it does not reduce sand input. Correct priority:

| Priority | Measure | Acts on |
|---|---|---|
| 1 | Inlet filtration | Sand entering the pump (root cause) |
| 2 | Flush plan | Sand that got in — wash out or isolate |
| 3 | Material hardness | Surviving the remaining sand |
| 4 | Structural design | Sand residence in critical zones |

### 2.2 Graded Matrix

| Sand content | Recommended combination | Expected life |
|---|---|---|
| < 20 mg/L (municipal) | Resin-impregnated graphite + stainless face + Plan 11 | 8,000+ h |
| 20–100 mg/L | Antimony-impregnated + SiC face + Plan 11 + filtered circulation (filtered Plan 12) | 4,000–8,000 h |
| 100–500 mg/L | Antimony-impregnated + SiC + Plan 32 external flush (clean water) + 40-mesh suction strainer | 2,000–4,000 h |
| > 500 mg/L | Double seal + barrier fluid (Plan 54) + 40-mesh strainer + settling basin pretreatment | ~2,000 h; monthly inspection |
| Flood-season peaks (> 2,000 mg/L) | Shut down through peaks, or temporarily run open-flush configuration | —— |

### 2.3 Filtration Options

- **Suction-side Y-strainer, 40–60 mesh**: minimum configuration; finer meshes cost pressure and plug faster
- **Settling basin / cyclone desander**: pretreatment for high-sand sources; cost is civil works, operating cost is low
- **Automatic backwash strainers**: for continuous duty, self-cleaning on ΔP; higher capex, less labor
- **Mesh count versus particle size**: mesh ≈ 25.4 / (wire + aperture) mm; 40 mesh ≈ 0.42 mm aperture — captures most of the 0.05–0.5 mm quartz

### 2.4 Flush Plan Notes

- **Plan 11 (self-circulation)**: chamber liquid recirculates to pump suction under pump pressure; in sand service it must be the filtered variant (Plan 12)
- **Plan 32 (external flush)**: clean water injected into the chamber to keep sand out; the flush source must itself be clean, or you have only moved the inlet
- **Plan 54 (supplied barrier fluid)**: double seal with clean barrier circulation — sand and corrosion both stay out; highest cost, best reliability
- Flush flow is not "more is better": excessive flow distorts the chamber temperature field and can induce flashing; stay within ±20% of the supplier's value

## 3. Materials and Mating Faces

### 3.1 Graphite Rings

| Scenario | Grade | Reason |
|---|---|---|
| Sand < 100 mg/L | Antimony-impregnated (HS 80+) | Higher strength; resists plowing better than resin systems |
| Frequent dry run / intermittent supply | Copper-impregnated | ~85 W/(m·K) class conductivity; resists startup wear |
| Corrosion + sand | Antimony (avoid strong oxidizers) | Strength/corrosion compromise |

### 3.2 Mating Faces

The most underrated decision in sand service:

- **High-chrome stainless**: cheap, but HV 200–300 class hardness gets furrowed by sand; grooves then hold sand that keeps grinding the graphite — a vicious cycle. **Do not use above 100 mg/L**
- **Reaction-bonded SiC**: HRA 90+, quartz barely scratches it; better conductivity than stainless and thermally stable. **The standard choice in sand**
- **Tungsten carbide (WC)**: harder still, but brittle and costly — reserve for high-pv duties

## 4. Field Wear Diagnosis

Diagnose wear type before choosing a fix — the wrong direction wastes the repair:

| Face pattern | Type | Direction |
|---|---|---|
| Fine parallel circumferential scoring on both members | Abrasive wear | More filtration, upgrade to SiC, add flush |
| Grooves in graphite only, SiC intact | Particles embedded in graphite or poor lubrication | Check water quality and flush flow |
| Spider-web / radial cracks | Thermal cracking (flashing/dry run) | Check flush, lower pressure, check suction air |
| One-sided wear band | Misalignment / shaft vibration | Realign, repair bearings |
| Rolled, bright face outer edge | Excessive face pressure | Verify springs and face width |
| One-sided bore scoring | Skewed pressing or tight clearance | Fix assembly practice |
| O-ring hardened, compressed | End of life | Replace on schedule |

## 5. Site Management Checklist

| # | Measure | Frequency |
|---|---|---|
| 1 | Strainer ΔP check (clean at 2× initial) | Weekly |
| 2 | Seal leakage log (trace/drip/stream) | Every shift |
| 3 | Motor current trend (wear raises torque slowly) | Weekly |
| 4 | Visual sand check (settle in a clear bottle) | Monthly; weekly in flood season |
| 5 | Planned ring replacement (scaled to sand load — do not wait for a leak) | Per matrix life |
| 6 | At ring change, also measure sleeve runout and inspect the SiC face | Every change |

## Conclusion

The answer to sediment-laden water in Southeast Asia is not in the material table — it is in the system: **filtration removes most of the sand, the flush plan isolates what leaks through, and material hardness absorbs the rest**. Three layers, three segments of the problem; only then does life stretch from months to years. Swapping to a harder ring alone is the last layer — the most visible action for the smallest gain.`,
    },
  },
  // 14. October 29, 2026 - F series light duty seal ring
  {
    slug: "f-type-series-light-duty-seal-ring",
    title: {
      zh: "F系列轻工石墨密封环：低速轻载设备的低成本密封方案",
      en: "F Series Light-Duty Graphite Seal Rings: Low-Cost Sealing for Low-Speed, Light-Load Equipment",
    },
    excerpt: {
      zh: "F系列（-20℃~180℃、≤0.8 MPa、≤3000 rpm）定位工业泵、搅拌器、旋转设备与轻工机械。它的价值不在参数，而在成本与供应速度。本文讲它的适用边界、降级使用的风险、以及什么场合不该省这笔钱。",
      en: "The F series (-20 to 180°C, ≤ 0.8 MPa, ≤ 3000 rpm) targets industrial pumps, mixers, rotating equipment and light machinery. Its value is not in ratings but in cost and availability. This article covers its application boundaries, the risks of derated use, and where not to save this money.",
    },
    tag: "process",
    date: "2026-10-29",
    content: {
      zh: `## 核心要点

- F系列标称 -20℃ ~ 180℃、≤ 0.8 MPa、≤ 3000 rpm，是轻工机械、搅拌器与通用旋转设备的低成本密封方案
- 适用边界：常温清水/轻油/弱腐蚀、连续或间断运转、维修预算紧、备件周转快的场合
- 三个"别省"的场合：高温热油（往锑浸渍/206 系列走）、含砂污水（往浸锑 + SiC 走）、频繁干运转（往浸铜走）
- F 系列的失效很少是"材料不行"，多数是超限使用——温度、比压、含砂三项任一超界，寿命断崖式下降
- 备件策略：F 系列单价低、渠道广，适合"按磨损失效换"的计划维修，而不是等漏了再修

## 一、F 系列的定位

F 系列碳石墨密封环标称 -20℃ ~ 180℃、≤ 0.8 MPa、≤ 3000 rpm，适配工业泵、搅拌器、旋转设备与轻工机械。和 104、US、G6 同属"轻工通用"档，参数接近，差异更多在行业沿用习惯——某些机型（特定泵厂、搅拌机厂）的图纸直接标 F 系列安装尺寸，换其他型号要改密封腔。

### 1.1 它在什么场合是好选择

- **轻工机械**：包装机、灌装机、输送机驱动端——负荷轻、转速低、介质干净
- **搅拌器与混合机**：常压或低压、常温、水或轻油介质；搅拌轴的密封要求不高但拆装频繁
- **辅助泵与循环泵**：冷却水循环、暖气循环，参数远低于标称上限，用 F 系列是"大马拉小车"
- **维修件市场**：设备量大、单件价值低、停机损失小——F 系列的供应速度和价格优势最大化

### 1.2 与其他轻工档的取舍

| 型号 | 温度 | 压力 | 转速 | 选择逻辑 |
|---|---|---|---|---|
| 104 | -20~200℃ | ≤0.8 | ≤3500 | 小型泵、家电、汽车行业 |
| F系列 | -20~180℃ | ≤0.8 | ≤3000 | 轻工机械、搅拌器 |
| US | -20~200℃ | ≤0.8 | ≤3500 | 工业泵、清水泵 |
| G6 | -20~200℃ | ≤0.8 | ≤3500 | 工业泵、污水泵 |

转速 3000 rpm 是 F 系列的上限——注意这是"上限"不是"舒适区"。长期贴上限运行（> 2500 rpm）建议往上走一档选 US/G6，余量留给磨损后期的轴振增大。

## 二、浸渍与对磨面的低成本组合

F 系列的浸渍体系同样在普通石墨、浸树脂、浸锑、浸铜之间选，但轻工场合多数落在"浸树脂 + 不锈钢对磨"这个最便宜的组合上：

| 组合 | 适用 | 成本 |
|---|---|---|
| 浸树脂 + 高铬不锈钢 | 清水、轻油、常温；轻工机械常规 | 基准 |
| 浸树脂 + SiC | 弱酸碱、间断热水 | +30~50% |
| 浸锑 + SiC | 100℃ 以上或含少量砂 | +60~100% |
| 浸铜 + SiC | 频繁启停、干运转倾向 | +100% 以上 |

**该省省、该花花**：轻工清水场合，不锈钢对磨完全够用，SiC 的溢价买不来寿命（因为没有磨损压力）。反之，含砂污水场合选最便宜的组合，是在给维修计划埋雷。

## 三、三个"别省"的场合

### 3.1 高温热油

F 系列温度上限 180℃，浸树脂体系长期在 150℃ 以上会加速老化（树脂相玻璃化转变区），热油场合（> 180℃）应该走锑浸渍牌号或更高压力档的 206 系列（≤2.0 MPa）。用 F 系列凑合的表现是：端面几周内出现热裂纹，然后泄漏——现场看像"质量问题"，实际是超限。

### 3.2 含砂污水

含砂介质下，材料强度决定耐磨时间。浸树脂石墨（抗压 90~100 MPa 量级）在砂里比浸锑（~190 MPa）磨得快一倍以上；对磨面用不锈钢会被砂犁出沟槽。污水泵请按本站[《东南亚高泥沙水源》](/blog/southeast-asia-sediment-water-pump-seal)一文的矩阵选，不要用轻工档凑。

### 3.3 频繁干运转

启动频繁、吸入空气、间歇供液的场合，摩擦热没有液膜导出，浸树脂体系导热只有 15~30 W/(m·K) 量级，端面温升快。浸铜（85 W/(m·K) 量级）是为这种场合准备的——单次差价几十到一百元，换的是避免一次抱轴停机。

## 四、失效与更换

### 4.1 F 系列的典型失效

| 现象 | 常见根因 |
|---|---|
| 端面均匀磨损、间隙变大 | 正常磨损失效——到了计划更换点 |
| 端面热裂纹 | 温度超限或冲洗不足 |
| 内孔磨损、抱套 | 含砂或润滑不良 |
| 外径划伤 | 密封腔内径拉毛（轻工设备机加工粗糙） |
| O 圈硬化 | 温度循环 + 寿命到期 |

### 4.2 计划维修策略

F 系列最适合"按磨损失效换"的计划维修：

1. 统计同型设备的实际更换间隔（一般 3000~8000 小时，视工况）
2. 按 80% 平均间隔设计划更换点
3. 每次更换时测轴套跳动，超差先修泵
4. 换环同时换 O 圈与弹簧（成本占比小，可靠性收益大）

这个策略的成本逻辑：F 系列单价低，计划更换的件价 + 人工 << 抱轴停机 + 连带轴承损坏的维修费。

## 五、采购与验收

F 系列供应商多、价格杂，验收抓三点：

- **尺寸一致**：轻工设备密封腔公差粗，环的尺寸超差更容易被掩盖，但会累积成偏磨；关键尺寸按批抽检
- **浸渍均匀**：端面色斑、断面可见大气孔——浸渍不匀的批次寿命波动大
- **批次可追溯**：轻工件容易被当成"低值易耗品"混批管理，出问题时无法回溯

## 结语

F 系列这类轻工石墨环的哲学是"合适比昂贵重要"：参数不极端、价格低、供应快，用在参数有裕度的场合是最经济的选择。但它有三个清晰的边界——高温、含砂、干运转——越过任何一条，省下的件钱会连本带利还给维修费。选型时花两分钟核对这三条边界，比事后复盘便宜得多。`,
      en: `## Key Points

- The F series is rated -20 to 180°C, ≤ 0.8 MPa, ≤ 3000 rpm for industrial pumps, mixers, rotating equipment and light machinery
- Sweet spot: ambient water/light oil/weak corrosion, continuous or intermittent duty, tight maintenance budgets, fast spares turnover
- Three "don't save" cases: hot oil (go antimony-impregnated or 206 series), sandy sewage (go antimony + SiC), frequent dry running (go copper)
- F-series failures are rarely "bad material" — most are over-limit use; exceed temperature, pressure or sand limits and life falls off a cliff
- Spares strategy: low unit price and wide availability suit wear-out replacement planning, not run-to-failure

## 1. Positioning

The F series carbon graphite seal ring is rated -20 to 180°C, ≤ 0.8 MPa, ≤ 3000 rpm for industrial pumps, mixers, rotating equipment and light machinery. Together with 104, US and G6 it forms the "light-duty general" class; ratings are close and differences are mostly industry habit — some pump and mixer drawings call out F-series installation dimensions directly, and other models would need cavity changes.

### 1.1 Where It Is a Good Choice

- **Light machinery**: packaging, filling and conveying drive ends — light load, low speed, clean media
- **Mixers and blenders**: atmospheric or low pressure, ambient temperature, water or light oil; seal demands are modest but disassembly is frequent
- **Auxiliary and circulation pumps**: cooling and heating loops run far below ratings — the F series is "a big engine on a small car"
- **Spares market**: high equipment counts, low unit value, small downtime cost — supply speed and price dominate

### 1.2 Trade-offs Within the Class

| Model | Temperature | Pressure | Speed | Selection logic |
|---|---|---|---|---|
| 104 | -20~200°C | ≤0.8 | ≤3500 | Small pumps, appliances, automotive |
| F series | -20~180°C | ≤0.8 | ≤3000 | Light machinery, mixers |
| US | -20~200°C | ≤0.8 | ≤3500 | Industrial and water pumps |
| G6 | -20~200°C | ≤0.8 | ≤3500 | Industrial and sewage pumps |

The 3000 rpm ceiling is a ceiling, not a comfort zone. Sustained operation near the limit (> 2500 rpm) argues for stepping up to US/G6, leaving margin for the vibration growth that comes with wear.

## 2. Low-Cost Impregnant and Face Combinations

The F series chooses among the same impregnants, but light-duty use mostly lands on the cheapest combination — resin impregnation with a stainless face:

| Combination | Suits | Cost |
|---|---|---|
| Resin + high-chrome stainless | Water, light oil, ambient; standard light duty | Baseline |
| Resin + SiC | Weak acid/alkali, intermittent hot water | +30–50% |
| Antimony + SiC | Above 100°C or light sand | +60–100% |
| Copper + SiC | Frequent starts, dry-run tendency | +100%+ |

**Spend where it matters**: in clean light-duty water the stainless face is entirely adequate — the SiC premium buys nothing because there is no wear pressure. Conversely, choosing the cheapest combination for sandy sewage is planting a mine in the maintenance plan.

## 3. Three "Don't Save" Cases

### 3.1 Hot Oil

The F-series ceiling is 180°C, and resin systems age faster above 150°C (approaching the resin glass-transition region). Hot-oil duty (> 180°C) belongs to antimony-impregnated grades or the higher-pressure 206 series (≤ 2.0 MPa). Making do with F series shows up as thermal face cracks within weeks, then leakage — it looks like a quality problem but is over-limit use.

### 3.2 Sandy Sewage

In abrasive media, strength sets wear life. Resin-impregnated graphite (90–100 MPa class) wears more than twice as fast as antimony (~190 MPa) in sand; stainless faces get furrowed. Size sewage duty per this site's [Southeast Asia sediment article](/blog/southeast-asia-sediment-water-pump-seal) — do not stretch the light-duty class.

### 3.3 Frequent Dry Running

For frequent starts, suction air or intermittent supply, friction heat has no film to carry it away; resin impregnation conducts only ~15–30 W/(m·K) and face temperature climbs fast. Copper impregnation (~85 W/(m·K) class) exists for this duty — tens to a hundred yuan of extra part cost against one seized-shaft outage.

## 4. Failure and Replacement

### 4.1 Typical F-Series Failures

| Symptom | Common root cause |
|---|---|
| Uniform face wear, growing clearance | Normal wear-out — planned replacement time |
| Thermal face cracks | Temperature over limit or insufficient flush |
| Bore wear, sleeve binding | Sand or poor lubrication |
| Scratched OD | Scuffed cavity bore (light-duty machining roughness) |
| O-ring hardened | Thermal cycling plus end of life |

### 4.2 Planned Maintenance

The F series suits wear-out replacement planning best:

1. Log actual replacement intervals on identical equipment (typically 3,000–8,000 h by duty)
2. Set planned replacement at 80% of the average interval
3. Measure sleeve runout at every change; fix the pump first if out of spec
4. Replace O-rings and springs with the ring — small cost share, large reliability gain

The cost logic: planned replacement of a low-price part plus labor is far below a seized-shaft outage plus collateral bearing damage.

## 5. Procurement and Acceptance

Many suppliers, scattered prices — check three things:

- **Dimensional consistency**: light-duty cavities are machined coarse, so oversize parts hide more easily and accumulate into edge wear; sample key dimensions by batch
- **Uniform impregnation**: face blotching or visible through-pores in cross-section mark batches with wide life scatter
- **Batch traceability**: light-duty parts get pooled as "cheap consumables"; without traceability, problems cannot be traced back

## Conclusion

The philosophy of light-duty rings like the F series is "suitable beats expensive": unspectacular ratings, low price, fast supply — the economical choice where parameters have margin. But it has three clear boundaries — high temperature, sand, dry running — and crossing any of them returns the saved part cost to the repair budget with interest. Two minutes checking those boundaries at selection time is far cheaper than the post-mortem.`,
    },
  },
  // 15. October 30, 2026 - First article inspection
  {
    slug: "graphite-seal-first-article-inspection",
    title: {
      zh: "石墨密封环首批样件（FAI）验收：尺寸、密封面与浸渍质量的检查要点",
      en: "First Article Inspection (FAI) for Graphite Seal Rings: Dimensional, Face and Impregnation Checks",
    },
    excerpt: {
      zh: "新供应商或新图纸的首批石墨密封环，验收松一次，后面几十批都可能带着同一个隐患。本文给出一份可直接照抄的 FAI 检查表：尺寸全检、平面度、粗糙度、浸渍质量、批次追溯，以及常见退换判据。",
      en: "Loose first-article acceptance on a new supplier or new graphite ring drawing lets the same defect ride along for dozens of batches. This article provides a copy-ready FAI checklist: dimensional inspection, flatness, roughness, impregnation quality and batch traceability, plus common rejection criteria.",
    },
    tag: "faq",
    date: "2026-10-30",
    content: {
      zh: `## 核心要点

- FAI 的核心逻辑：石墨密封环是脆性结构件 + 功能靠浸渍实现，尺寸超差和浸渍缺陷都不会"自己好转"，只会批量复制
- 检查分五组：外观、尺寸（关键尺寸全检）、密封面质量（平面度 + 粗糙度）、浸渍与材质（密度/孔隙/断面）、批次与文件
- 平面度是密封环的"功能性尺寸"：光圈法 1~2 条（约 0.9~1.8 μm）是常见合格线，超差直接退换
- 浸渍质量看三点：断面色斑、贯穿气孔、密度离散度；同一批密度离散超 2% 要警惕工艺波动
- 文件与样品封存比检查本身更重要：留样 + 报告 + 批次号，是后面几十批对照的基准

## 一、为什么石墨环必须做 FAI

金属密封件（如机加工不锈钢环）的缺陷大多是尺寸问题，超差了能用眼睛和卡尺发现。石墨密封环不同：

- **脆性**：微裂纹、崩边在库存和运输中会扩展，装机前看不出来
- **浸渍是"黑箱"**：孔隙填充是否充分，外表看不出来，要断面或密度间接判断；浸渍不匀的批次，寿命可以差一倍
- **功能依赖配合**：外径、内径、总高、端面宽度四个尺寸共同决定端面比压和浮动量，任一超差都会在运行中放大

所以 FAI 不是"走个形式"，是把隐患挡在批量之前。**FAI 松一次，隐患按批次复制几十次。**

## 二、检查表（可直接照抄）

### 2.1 外观（100% 检查）

| 项目 | 合格判据 |
|---|---|
| 端面崩边 | 接触带内无崩边；带外崩边 < 0.3 mm 且不延伸 |
| 裂纹 | 端面与内外径无可见裂纹（可浸煤油/着色检查） |
| 色差 | 同批色泽一致；端面色斑 = 浸渍不匀嫌疑 |
| 磕碰 | 无影响配合的磕碰伤 |
| 清洁度 | 无油污、手印、粉尘（液氧等禁油场合按禁油标准执行） |

### 2.2 尺寸（关键尺寸全检）

| 尺寸 | 工具 | 判据 |
|---|---|---|
| 外径 D | 千分尺/卡尺 | 按图样公差；记录实测值 |
| 内径 d | 内径千分表/塞规 | 按图样公差；注意圆度 |
| 总高 H | 千分尺 | 按图样公差；H 短会直接吃掉弹簧行程 |
| 端面宽度 | 卡尺 | 宽度公差直接影响端面比压 |
| 圆度 | 内径表多点测量 | 超差说明压制或磨削工艺问题 |

**图样没有给公差时**，参照本站[《1527系列配合公差》](/blog/1527-series-seal-ring-fit-tolerance)一文的口径反推：外径按 H9 级、内径按 H7 级、总高按 h9 级是通用件常见做法；有配合要求的以设备图样为准。

### 2.3 密封面质量

| 项目 | 方法 | 合格线 |
|---|---|---|
| 平面度 | 光圈法（平晶）或接触染色 | 1~2 条光圈（约 0.9~1.8 μm）；环径大取宽值 |
| 粗糙度 | 粗糙度仪或比对样 | 端面 Ra ≤ 0.2 μm |
| 纹路方向 | 目视/放大 | 无圆周向深纹（易藏污、泄漏通道）；端面以无方向性或细密交叉纹为好 |
| 划痕 | 目视 | 无贯通接触带的划痕 |

### 2.4 浸渍与材质

| 项目 | 方法 | 判据 |
|---|---|---|
| 密度 | 称重/排水法 | 符合牌号标称范围；同批离散 < 2% |
| 孔隙 | 断面观察（剖切抽检） | 孔隙被填充物充实，无贯穿大气孔 |
| 浸渍均匀性 | 断面色斑 + 密度分布 | 无明显未浸渍区 |
| 材质证明 | 供应商报告 | 基体牌号 + 浸渍剂成分声明（食品/液氧场合必需） |

抽检比例建议：首批 100% 外观 + 关键尺寸；剖切/密度按 3~5 件抽检；同批次后续按 5~10% 抽检。

### 2.5 文件与封存

| 文件 | 要求 |
|---|---|
| 材质报告 | 牌号、浸渍体系、密度实测 |
| 尺寸记录 | 全检记录表，供应商签章 |
| 批次号 | 与实物一一对应 |
| 留样 | 每批留 2~3 件，保存期 ≥ 2 年 |
| 封样对照 | 首批留样作为后续批次的"基准样"，色差、手感、端面纹路对照 |

## 三、常见退换判据

| 缺陷 | 严重度 | 处置 |
|---|---|---|
| 端面崩边进入接触带 | 致命 | 整批退换 |
| 贯穿裂纹 | 致命 | 整批退换 + 查包装运输 |
| 平面度超 3 条光圈 | 严重 | 退换（或返工研磨后复检） |
| 尺寸超差（任一关键尺寸） | 严重 | 退换 |
| 端面色斑、密度离散大 | 中等 | 加严抽检；连续两批如此换供应商 |
| 粗糙度不达标 | 中等 | 可返工研磨 |
| 无批次号/无材质报告 | 流程缺陷 | 暂停入库，补齐文件 |

## 四、常见"坑"

1. **只量尺寸不看密封面**：尺寸全合格的批次，平面度超差照样泄漏——泄漏走的是端面，不是外径
2. **不留基准样**：出了问题只能翻记录，翻不出实物对比；基准样是争议时的唯一仲裁物
3. **轻工件不当回事**：F 系列这类低价件最容易混批管理，恰恰是批量隐患的高发区
4. **跳过首件直接上线**：装机后失效的成本 = 件价 × 数量 + 停机 + 连带损伤，远超 FAI 的人工
5. **液氧/食品场合忽略禁油与合规文件**：这类场合 FAI 的第一项是清洁度与材质声明，不是尺寸

## 五、与供应商的协作

- 把这份检查表直接作为技术协议的附件，让供应商按同一口径自检 + 出货报告
- 首批安排一次现场审核（或视频验厂）：看浸渍工位、磨削设备、检测手段——**没有平面度检测手段的供应商，做不出稳定的密封面**
- 约定不合格批次的处置：退换、加严检验、或终止合作，写进协议比出事再谈容易

## 结语

石墨密封环的 FAI 可以浓缩成一句话：**尺寸全检、密封面重点检、浸渍抽检、文件留样**。四件事花不了半天时间，但它决定的是后面几十批的质量水位。对新供应商，第一批的严格程度就是你对这条供应关系的定价——放过一个隐患，市场会替供应商把账单寄给你。`,
      en: `## Key Points

- The FAI logic: graphite seal rings are brittle structural parts whose function depends on impregnation — dimensional errors and impregnation defects never self-correct, they replicate batch after batch
- Five inspection groups: visual, dimensional (key dimensions 100%), face quality (flatness + roughness), impregnation and material (density/porosity/cross-section), batch and documentation
- Flatness is the ring's "functional dimension": 1–2 interference fringes (~0.9–1.8 μm) is a common acceptance line; beyond it, reject
- Impregnation quality: three checks — cross-section blotching, through-pores, density scatter; density scatter beyond 2% within a batch signals process instability
- Documentation and retained samples matter more than the inspection itself: samples plus reports plus batch numbers are the benchmark for every later batch

## 1. Why Graphite Rings Need FAI

Metal seal parts (machined stainless, for example) fail mostly dimensionally, and errors show up to calipers and eyes. Graphite rings are different:

- **Brittle**: micro-cracks and chips grow during storage and transport, often invisible before installation
- **Impregnation is a black box**: pore filling adequacy is not visible from outside — it needs cross-sections or density as indirect evidence; uneven batches can differ 2× in life
- **Function depends on fits**: OD, ID, height and face width together set face pressure and float; any error amplifies in service

FAI is therefore not a formality — it is the gate before the batch. **Relax FAI once and the defect replicates dozens of times.**

## 2. The Checklist (copy-ready)

### 2.1 Visual (100%)

| Item | Acceptance |
|---|---|
| Face edge chips | None inside the contact band; outside the band < 0.3 mm and non-propagating |
| Cracks | None visible on faces, bore or OD (dye penetrant or oil-soak if in doubt) |
| Color | Uniform within batch; face blotching suggests uneven impregnation |
| Impact damage | None affecting fits |
| Cleanliness | No oil, fingerprints or dust (oxygen service follows the oil-free standard) |

### 2.2 Dimensions (key dimensions 100%)

| Dimension | Tool | Acceptance |
|---|---|---|
| OD (D) | Micrometer/caliper | Per drawing; record actual |
| ID (d) | Bore gauge/plug gauge | Per drawing; check roundness |
| Height (H) | Micrometer | Per drawing; a short H eats spring travel directly |
| Face width | Caliper | Width tolerance drives face pressure |
| Roundness | Bore gauge, multi-point | Error indicates forming or grinding problems |

**Without drawing tolerances**, work from this site's [1527-series tolerance article](/blog/1527-series-seal-ring-fit-tolerance): OD H9, ID H7, height h9 are common for general-purpose parts; fit-critical dimensions follow the equipment drawing.

### 2.3 Face Quality

| Item | Method | Acceptance |
|---|---|---|
| Flatness | Optical flats (interference fringes) or dye contact | 1–2 fringes (~0.9–1.8 μm); larger rings take the wider value |
| Roughness | Profilometer or comparison blocks | Face Ra ≤ 0.2 μm |
| Lay direction | Visual/magnified | No deep circumferential marks (soil traps, leak paths); isotropic or fine cross-hatch preferred |
| Scoring | Visual | No scoring crossing the contact band |

### 2.4 Impregnation and Material

| Item | Method | Acceptance |
|---|---|---|
| Density | Weight/water displacement | Within grade range; batch scatter < 2% |
| Porosity | Cross-section (destructive sample) | Pores filled; no through-voids |
| Impregnation uniformity | Cross-section blotching + density spread | No unimpregnated zones |
| Material certificate | Supplier report | Base grade + impregnant declaration (mandatory for food/oxygen) |

Sampling: first article 100% visual and key dimensions; 3–5 pieces destructive for cross-section and density; later batches 5–10% sampling.

### 2.5 Documentation and Retention

| Document | Requirement |
|---|---|
| Material report | Grade, impregnation system, measured density |
| Dimensional record | Full-inspection sheet, supplier stamped |
| Batch number | One-to-one with physical parts |
| Retained samples | 2–3 pieces per batch, kept ≥ 2 years |
| Reference sample | First-article retained as the benchmark for color, feel and face lay comparison |

## 3. Common Rejection Criteria

| Defect | Severity | Action |
|---|---|---|
| Edge chip entering contact band | Critical | Reject entire batch |
| Through-crack | Critical | Reject entire batch; audit packaging and transport |
| Flatness beyond 3 fringes | Major | Reject (or re-lap and re-inspect) |
| Any key dimension out of tolerance | Major | Reject |
| Face blotching, wide density scatter | Moderate | Tighten sampling; two consecutive batches means changing supplier |
| Roughness out of spec | Moderate | Rework by lapping |
| No batch number / no material report | Process defect | Hold receipt until documents complete |

## 4. Common Pitfalls

1. **Measuring dimensions, ignoring faces**: a fully dimensional batch with bad flatness still leaks — leakage exits at the face, not the OD
2. **No retained reference sample**: when disputes arrive you can only page through records; the sample is the only physical arbiter
3. **Treating light-duty parts as trivial**: low-price items like the F series are the most likely to be pooled into generic stores — exactly where batch defects breed
4. **Skipping FAI to save time**: in-service failure costs parts × quantity + downtime + collateral damage, far exceeding FAI labor
5. **Skipping cleanliness and compliance files in oxygen/food service**: there, the first FAI item is cleanliness and material declaration — not dimensions

## 5. Working With the Supplier

- Attach this checklist to the technical agreement so the supplier self-inspects and ships to the same criteria
- Schedule a first-article audit (on site or by video): look at the impregnation station, grinding equipment and inspection capability — **a supplier without flatness inspection capability cannot produce stable faces**
- Agree on nonconforming-batch disposition in advance — return, tightened inspection, or termination is easier to contract before trouble than after

## Conclusion

FAI for graphite seal rings reduces to one sentence: **full dimensional inspection, face quality as the priority, sampled impregnation checks, documents and retained samples**. Four items, half a day's work — and they set the quality level for dozens of later batches. With a new supplier, the strictness of the first article is your pricing of the whole relationship: let one defect through, and the market will send you the supplier's bill.`,
    },
  },
  // 10. October 23, 2026 - When to drop grease entirely: graphite bearing selection
  {
    slug: "when-to-drop-grease-graphite-bearings",
    title: {
      zh: "什么时候该彻底放弃润滑脂：碳石墨轴承的适用边界",
      en: "When to Drop Grease Entirely: The Working Envelope of Carbon Graphite Bearings",
    },
    excerpt: {
      zh: "润滑脂失效有三个前提条件：能补脂、温度在基油允许区间、污染物能容忍。三者缺一，脂就会先于轴承坏掉。这篇文章讲哪五类工位从设计上就该放弃脂、碳石墨轴承靠什么工作、它的边界又在哪里，以及石墨与含油轴承、陶瓷、工程塑料之间的取舍顺序。",
      en: "Grease fails when three preconditions break: it can be replenished, the temperature sits inside the base-oil window, and contamination can be tolerated. Lose any one and the grease dies before the bearing does. This article covers five station types that should never rely on grease, how carbon graphite bearings actually work, where their limits are, and how to choose between graphite, oil-impregnated bronze, ceramic and engineering plastics.",
    },
    tag: "selection",
    date: "2026-10-23",
    content: {
      zh: `## 核心要点

- 润滑脂能用，需要同时满足三件事：**能补脂、温度在基油允许区间、污染物能容忍**。三者缺一，脂会先于轴承失效
- 五类工位从设计上就该放弃脂：高温炉窑与烘箱、液下与浸没机构、真空与洁净腔体、食品医药直触部位、结构上根本接近不了的部位
- 碳石墨轴承靠转移膜工作，不需要外部润滑剂；代价是 **PV 值有上限**，且需要微量水分或气体参与成膜
- 它不是"万能无油轴承"：高于某一速度的干摩擦、强冲击、强氧化介质、干燥惰性气体环境，都要单独评估
- 选型顺序：先定温度与介质 → 再看能否补脂 → 再算 PV → 最后才在石墨、含油粉末冶金、陶瓷、工程塑料之间挑

## 一、润滑脂失效的三个前提

工程上讨论"用什么润滑脂"，默认了一个前提：**这个轴承是可以维护的**。整条润滑脂选型知识体系——锂基还是复合锂、矿物油还是聚 α 烯烃（PAO）、NLGI 号数、补脂周期——只有在下面三件事同时成立时才有意义：

1. **补脂通道存在**：有油嘴、有空间、有人排进维护计划
2. **温度落在基油窗口内**：矿物油基锂基脂的常用区间约 -20 °C 到 120 °C，合成烃基（PAO）可拓到 -50 °C 到 150 °C 量级
3. **污染物不致命**：粉尘、水、化学品、清洗剂不会持续破坏皂基结构

润滑脂选型本身已有相当成熟的工程讨论，温度边界和基油差异可以参照润滑脂厂商的公开技术资料，例如 [Chemours Krytox](https://www.krytox.com/) 与 [Klüber Lubrication](https://www.klueber.com/) 的产品数据。但要注意，那类讨论的前提仍然是"这个轴承还在加脂"。当上面三条里的任何一条断掉，继续在脂的品类里优化，方向本身就错了——该换的不是脂，是轴承类型。

## 二、五类从设计上就该放弃脂的工位

### 2.1 高温炉窑与烘箱

辊道窑、网带炉、烘干线、烧结炉的输送辊与风机构件，环境温度常在 200~600 °C。这个区间没有任何常规润滑脂能存活：矿物油在 120 °C 以上加速氧化，150 °C 以上皂基开始析油、结焦，最终留下的是碳化残渣——比没有润滑更糟，因为它会把滚动体卡死。

这类工位要么用高温固体润滑（石墨、二硫化钼），要么直接把轴承做成石墨件。

### 2.2 液下与浸没机构

潜水泵、液下辊、反应釜搅拌、清洗线传动。浸没工况下润滑脂会被介质冲刷、乳化、稀释，而且补脂完全不可行。选脂在这里是死路，只能选耐介质的自润滑材料。

### 2.3 真空与洁净腔体

半导体设备、镀膜机、真空炉、电子束焊机。真空环境下润滑脂会挥发，挥发物直接污染腔体和工件；同时脂的蒸气压成为真空度上限。真空腔内通常禁用一切油脂，必须用干膜润滑或石墨、陶瓷等固体润滑件。

### 2.4 食品、医药、饮用水直触部位

这里的问题不是失效，是合规。一次泄漏就是整批产品召回。虽然存在 H1 食品级润滑脂，但更彻底的做法是在直触或近触部位取消油脂，从源头消除污染路径。

### 2.5 结构上无法接近的工位

封闭减速箱内的支撑件、埋入式机构、高空或水下免维护部件。维护成本高于零件成本时，脂的经济性就是负的——每补一次脂的停机与人工，够换几次轴承。

## 三、碳石墨轴承靠什么工作

碳石墨轴承（浸树脂、浸金属或浸锑石墨）不靠外部润滑剂，靠的是**转移膜**：石墨在摩擦过程中，把自身微晶片层转移并附着到对偶金属表面，形成一层低剪切强度的固体膜，之后的摩擦就发生在石墨与这层膜之间。

摩擦系数通常在 0.10~0.20（干态，对钢），这个数值无法与油膜润滑的 0.001~0.01 相比——所以它换来的从来不是"更低的摩擦"，而是**免维护、耐温、耐介质、不污染**。

有两个常被忽略的成膜条件：

- **需要微量水分或氧气参与**。完全干燥的惰性气体环境（干氮、干氩）里，石墨的转移膜难以形成，磨损率会显著上升。这类工况要改用含二硫化钼或特殊浸渍的牌号，或干脆换材料
- **需要跑合**。新件初期磨合阶段摩擦系数偏高、会有少量石墨粉脱落，设计上应留出跑合余量，并在关键场合做预跑合

## 四、它的边界在哪里

碳石墨不是"无油场景的通用答案"。下面这些情况必须先算再选：

1. **PV 值上限**。每种牌号都有允许的 PV（压力 × 速度）上限，浸树脂牌号通常低于浸金属牌号。速度一高、比压一大，磨损率会非线性上升，还会因摩擦热导致浸渍剂软化
2. **强冲击与频繁启停**。石墨是脆性材料，抗冲击远不如金属；冲击载荷下可能崩边，崩边碎屑进入间隙会造成二次磨损
3. **强氧化介质**。高温下的浓硝酸、浓硫酸、次氯酸盐会侵蚀石墨基体与浸渍剂
4. **颗粒磨料环境**。含砂水流、浆料中，石墨磨损率会成倍上升，此时应考虑陶瓷或碳化硅
5. **需要承受径向冲击的旋转件**。纯石墨套的抗弯强度有限，长悬臂结构要加金属支撑或改结构

## 五、和另外三种"无油方案"的取舍

- **含油粉末冶金轴承（ oil-impregnated bronze）**：靠毛细孔储油，成本低、承载好；但油会耗尽，温度上限约 80~120 °C，真空与洁净场合不可用
- **陶瓷轴承（氧化锆、氮化硅）**：耐温、耐腐蚀、刚性好；但价格高、脆性大、对配合精度敏感，干摩擦下对偶件磨损严重
- **工程塑料（PEEK、PTFE 复合、聚甲醛）**：轻、耐化学、成本低；但耐温通常低于 250 °C，蠕变与热膨胀明显，承载有限
- **碳石墨**：耐温最高（惰性气氛可达 400 °C 以上）、自润滑、耐大多数化学品、导热好；代价是脆、抗冲击差、PV 受限

## 六、选型顺序

1. **定温度与介质**——这是唯一不可妥协的两条。温度超了脂的窗口，介质会溶解或侵蚀材料，其它参数都无意义
2. **判断能否补脂**——不能补脂，直接进入无油材料路线，不必再讨论脂的牌号
3. **估算 PV**——用实际比压与实际线速度，不要用额定值。留 30% 以上裕度
4. **确认成膜条件**——干态、真空、惰性气体、含油雾，分别对应不同浸渍牌号
5. **算配合与间隙**——石墨热膨胀系数与钢差一个量级，高温工况的冷态间隙必须放大
6. **确认合规**——食品、医药、饮用水场景要材料声明与析出测试

## 结论

判断一个工位该不该继续用脂，只需要问三个问题：**能不能补？温度扛不扛得住？污染能不能忍？** 三个都是"能"，就在脂的品类里优化；任何一个"不能"，就该把轴承类型换掉，而不是换脂。

碳石墨轴承解决的是"无法润滑的工位"，不是"想省润滑成本的工位"。把它用在对的地方，它是唯一可行的方案；用错地方，它的脆性和 PV 限制会立刻反噬。`,
      en: `## Key Takeaways

- Grease only works when three preconditions hold at once: **it can be replenished, the temperature sits inside the base-oil window, and contamination can be tolerated**. Break any one and the grease fails before the bearing does
- Five station types should never rely on grease by design: kilns and ovens, submerged or immersed mechanisms, vacuum and clean-chamber equipment, food and pharma contact zones, and positions nobody can physically reach
- Carbon graphite bearings work through a transfer film and need no external lubricant; the price is a **PV limit** and a requirement for trace moisture or gas to form that film
- They are not a universal oil-free answer: dry running above a certain speed, heavy shock, strongly oxidising media and dry inert-gas atmospheres all need separate evaluation
- Selection order: fix temperature and medium first, then ask whether regreasing is possible at all, then calculate PV, and only then choose between graphite, oil-impregnated bronze, ceramic and engineering plastics

## 1. Three Preconditions Behind Every Grease Decision

Engineering discussions about grease quietly assume something: **that this bearing can be maintained**. The entire body of grease knowledge — lithium versus lithium complex, mineral versus polyalphaolefin (PAO) base oil, NLGI grade, relubrication interval — only means anything when all three of the following hold:

1. **A replenishment path exists** — a nipple, access, and a maintenance schedule somebody actually follows
2. **Temperature sits inside the base-oil window** — roughly -20 °C to 120 °C for mineral-oil lithium grease, extended to about -50 °C to 150 °C for synthetic hydrocarbon (PAO) bases
3. **Contaminants are survivable** — dust, water, chemicals and washdown agents do not continuously destroy the soap structure

Grease selection is well documented as a discipline in its own right; temperature envelopes and base-oil differences are covered in lubricant makers' public technical data, for example [Chemours Krytox](https://www.krytox.com/) and [Klüber Lubrication](https://www.klueber.com/). But note the premise those discussions rest on: the bearing is still being greased. Once any one of the three preconditions breaks, optimising within the grease category is the wrong direction — what has to change is the bearing type, not the grease.

## 2. Five Stations That Should Never Depend on Grease

### 2.1 Kilns and Ovens

Conveyor rollers, fans and drive components in roller-hearth kilns, mesh-belt furnaces, drying lines and sintering furnaces routinely see 200–600 °C. No conventional grease survives that: mineral oil oxidises rapidly above 120 °C, soap thickeners bleed and coke above 150 °C, and what remains is carbonised residue — worse than no lubricant at all, because it seizes the rolling elements.

These positions need high-temperature solid lubrication (graphite, molybdenum disulfide) or a graphite part in the first place.

### 2.2 Submerged and Immersed Mechanisms

Submersible pumps, submerged rolls, reactor agitators, washing-line drives. Under immersion the grease is washed out, emulsified or diluted, and relubrication is physically impossible. Choosing a grease here is a dead end; the only path is a medium-resistant self-lubricating material.

### 2.3 Vacuum and Clean Chambers

Semiconductor tools, coating machines, vacuum furnaces, electron-beam welders. In vacuum, grease outgasses and the outgassed products contaminate the chamber and the workpiece; the grease vapour pressure also sets a floor on achievable vacuum. Vacuum chambers normally ban all greases and require dry-film or solid lubricants such as graphite and ceramics.

### 2.4 Food, Pharma and Drinking-Water Contact

The problem here is not failure, it is compliance. One leak means a batch recall. H1 food-grade greases exist, but the more robust approach is to eliminate grease from the contact or near-contact zone entirely and remove the contamination path at the source.

### 2.5 Positions Nobody Can Reach

Supports inside sealed gearboxes, buried mechanisms, high-altitude or underwater maintenance-free parts. When maintenance cost exceeds part cost, grease economics turn negative — the downtime and labour for one relubrication event buys several bearings.

## 3. How Carbon Graphite Bearings Actually Work

Carbon graphite bearings (resin-impregnated, metal-impregnated or antimony-impregnated) carry no external lubricant. They rely on a **transfer film**: during running, graphite transfers its own crystallite platelets onto the mating metal surface, building a low-shear solid film, after which friction takes place between graphite and that film.

The friction coefficient is typically 0.10–0.20 dry against steel. That cannot compete with the 0.001–0.01 of a hydrodynamic oil film — so what graphite buys you has never been lower friction. It is **maintenance freedom, temperature capability, medium resistance and zero contamination**.

Two film-formation conditions are routinely overlooked:

- **Trace moisture or oxygen is needed.** In completely dry inert atmospheres (dry nitrogen, dry argon) the transfer film forms poorly and wear rate climbs sharply. Such cases need molybdenum-disulfide or specially impregnated grades, or a different material altogether
- **Running-in is required.** Friction is higher during the initial bedding period and a small amount of graphite powder is shed; design in running-in allowance and pre-run critical parts

## 4. Where the Limits Are

Carbon graphite is not the generic answer to every oil-free requirement. These cases must be calculated before they are specified:

1. **PV ceiling.** Every grade has an allowable pressure × velocity limit, and resin-impregnated grades sit below metal-impregnated ones. Push speed or contact pressure and wear rate rises non-linearly, while frictional heat can soften the impregnant
2. **Shock and frequent starts.** Graphite is brittle and far weaker in impact than metal; edges chip under shock, and chips entering the clearance cause secondary wear
3. **Strongly oxidising media.** Hot concentrated nitric or sulfuric acid and hypochlorite attack both the graphite matrix and the impregnant
4. **Abrasive particle service.** In sand-laden water or slurry, graphite wear rate multiplies; silicon carbide or ceramic is the better answer
5. **Cantilevered rotating parts under radial shock.** Bending strength of plain graphite is limited — long overhangs need metal backing or a design change

## 5. Choosing Against the Other Oil-Free Options

- **Oil-impregnated bronze (powder metallurgy)**: stores oil in capillary pores, low cost, good load capacity; but the oil is finite, temperature tops out around 80–120 °C, and it is unusable in vacuum or clean service
- **Ceramic (zirconia, silicon nitride)**: temperature and corrosion resistant, stiff; but expensive, brittle, sensitive to fit accuracy, and aggressive to the mating surface when run dry
- **Engineering plastics (PEEK, PTFE compounds, POM)**: light, chemically resistant, cheap; but generally below 250 °C, with pronounced creep and thermal expansion, and limited load capacity
- **Carbon graphite**: highest temperature capability (above 400 °C in inert atmosphere), self-lubricating, resistant to most chemicals, thermally conductive; the price is brittleness, poor impact resistance and a bounded PV envelope

## 6. Selection Sequence

1. **Fix temperature and medium** — the only two non-negotiables. Exceed the grease window or let the medium attack the material and every other parameter is moot
2. **Decide whether regreasing is possible** — if it is not, go straight to the oil-free material route and stop discussing grease grades
3. **Estimate PV** — use real contact pressure and real surface speed, not catalogue ratings, and keep at least 30% margin
4. **Confirm film-formation conditions** — dry, vacuum, inert gas and oil-mist service each map to different impregnation grades
5. **Work out fits and clearance** — graphite thermal expansion differs from steel by an order of magnitude, so cold clearance must be opened up for high-temperature duty
6. **Confirm compliance** — food, pharma and drinking-water service need material declarations and extraction testing

## Conclusion

Deciding whether a station should keep using grease takes three questions: **can it be replenished, will the temperature hold, can the contamination be tolerated?** Three yes answers mean optimise within the grease category. Any single no means the bearing type has to change — not the grease.

Carbon graphite bearings solve stations that cannot be lubricated. They are not a way to save on lubrication cost. Applied where they belong, they are the only workable option; applied where they do not, their brittleness and PV ceiling will bite immediately.`,
    },
  },
]
