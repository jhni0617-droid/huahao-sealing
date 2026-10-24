import { BlogPost } from "./blog-data"

export const blogPostsBatch15: BlogPost[] = [
  // 1. October 3, 2026 - Ice machine graphite bearing and seal
  {
    slug: "ice-machine-graphite-bearing-seal",
    title: {
      zh: "片冰机与管冰机：蒸发器石墨轴承与轴封的选型要点",
      en: "Ice Machines: Selecting Graphite Bearings and Shaft Seals for Evaporator Service",
    },
    excerpt: {
      zh: "片冰机蒸发器在 -20℃ 冰水与冰晶颗粒环境中刮冰，轴承与轴封既缺连续油膜又不能被磨粒打坏。本文按制冷剂类型、水温、含砂量给出石墨轴承与密封环的选型口径，含间隙、比压与失效征兆。",
      en: "Flake-ice evaporators scrape ice in a -20°C slurry of water and ice crystals, leaving bearings and shaft seals with neither a continuous oil film nor protection from abrasive particles. This article covers bearing and seal selection by refrigerant, water temperature and sand content, including clearance, specific load and failure symptoms.",
    },
    tag: "application",
    date: "2026-10-03",
    content: {
      zh: `## 核心要点

- 制冰机蒸发器的轴承处于"水润滑 + 冰晶磨粒 + 低温"三重工况，油润滑轴承与脂润滑轴承都不适用，自润滑碳石墨轴承是行业标准解
- 轴承比压一般只有 0.1~0.5 MPa，远低于石墨轴承的承载上限（GB 系列标称 ≤ 20 MPa），真正决定寿命的是冰晶与砂粒的磨粒磨损，不是承载能力
- 氨（R717）系统严禁铜及铜合金件，选浸锑或纯碳石墨牌号；氟利昂系统（R507A/R404A/R22）对材料无特殊限制
- 典型间隙：水润滑工况取轴径的 0.15%~0.25%，低温启动前需预留收缩量
- 失效征兆依次是：扭矩升高/电流上升 → 冰厚不均 → 刮冰刀痕 → 轴承内孔拉伤；发现扭矩异常就应拆检，不要等漏水

## 一、片冰机蒸发器的工作环境

片冰机（flake ice machine）的制冰筒是一只夹套蒸发器：制冷剂在夹套内蒸发，水在筒外壁结成 1.5~3 mm 厚的冰壳，旋转的刮冰刀（冰刀）把冰壳刮落成片冰。刮冰刀组件由轴与轴承支撑，轴承泡在冰水混合物里，温度在 -10℃ ~ -20℃ 之间。

这个位置对轴承提出四个互相矛盾的要求：

1. **不能有润滑油**：冰是食品，任何油脂泄漏都造成污染；同时低温下矿物油会蜡化失去流动性
2. **必须自润滑**：启动和低速阶段没有完整液膜，边界摩擦不可避免
3. **要耐磨粒**：水里悬浮的冰晶硬度接近莫氏 2~3，本身不硬，但未溶解的水垢（碳酸钙，莫氏 3）和随水带入的砂粒（石英，莫氏 7）会划伤石墨
4. **要耐温度冲击**：热气融冰（hot gas defrost）阶段，制冷剂热气 60~90℃ 直接进入夹套，轴承环境在几十秒内从 -15℃ 冲到 +40℃ 以上

## 二、轴承选型：先看制冷剂，再看水质

### 2.1 按制冷剂定材料牌号

| 制冷剂 | 轴承/密封材料 | 原因 |
|---|---|---|
| 氨 R717 | 纯碳石墨或浸锑石墨（M120K/M106D 类） | 氨遇铜生成可溶性络合物，铜及铜合金件会被快速腐蚀，铜浸渍石墨同样禁用 |
| R507A / R404A | 浸树脂或浸锑石墨均可 | 氟利昂对碳材料与常见金属均惰性 |
| R22（存量改造） | 浸树脂石墨 | R22 正在淘汰，仅涉及老设备备件 |
| CO₂（跨临界） | 浸锑/浸金属牌号 | 系统压力高（可达 10 MPa 以上），需要更高抗压强度的浸渍体系 |

浸渍剂的选择比基体更关键。浸树脂石墨（酚醛/环氧体系）致密、耐磨，但长期使用温度一般不超过 200℃；浸锑石墨强度更高（典型抗压 190 MPa 量级），适合有热冲击和水质差的场合；浸铜石墨导热最好（典型 85 W/(m·K)），但氨系统禁用。

### 2.2 间隙与比压

水润滑的石墨轴承不能按油润滑的间隙选，原因是水的粘度只有润滑油的 1/20 左右，液膜承载能力弱，间隙大了泄漏大、形成不了动压；间隙小了又容易抱轴。工程上的通行口径：

- 直径间隙取轴径的 **0.15%~0.25%**，例如 φ50 mm 轴取 0.075~0.125 mm
- 长径比 L/d 取 1.0~1.5，过长反而容易因挠度抱轴
- 比压 p = F/(d·L)，刮冰轴一般 0.1~0.5 MPa，GB 系列石墨轴承标称承压 ≤ 20 MPa，安全裕度在 40 倍以上
- 线速度通常 3~8 m/s，远低于 GB 系列 ≤ 15 m/s 的标称上限

也就是说，**制冰机轴承几乎没有"压坏"的，都是"磨坏"或"咬坏"的**。选型重点应放在磨粒磨损和装配间隙控制上。

### 2.3 水质含砂的处理

东南亚、中东地区的地下水与自来水常带有细砂（几十到几百 mg/L）。石英颗粒一旦进入轴承间隙，会在石墨内孔犁出连续沟槽，同时把轴（多为 304 不锈钢）磨出亮带。处理办法按成本排序：

1. 进水加装 50~100 目的 Y 型过滤器并建立每周清洗制度（成本最低，效果最直接）
2. 轴表面改为镀铬或喷涂碳化钨，提高对磨件硬度
3. 轴承改浸锑牌号，硬度从 HS 60~70 提到 HS 80 以上
4. 轴承布置移到水室之外（改密封结构），适用于新机设计，改造代价大

## 三、轴封与静密封

### 3.1 动密封

刮冰轴穿过水室壁的位置需要动密封。水室压力接近常压（0~0.05 MPa），温度 -20℃，属于低压低温水工况：

- 常规选择是浸树脂石墨密封环配不锈钢轴套，如 F 系列、US 系列这类轻工定位的型号（F 系列标称 -20℃ ~ 180℃、≤ 0.8 MPa、≤ 3000 rpm，覆盖这个工况有余量）
- 密封面宽度不必追求大端面，窄端面（3~5 mm）在低温低负荷下反而载荷低、发热小
- 对磨面用 304 或镀铬不锈钢即可，无需 SiC；但对连续生产的机型，SiC 对磨能把泄漏量稳定住，代价是成本上升

### 3.2 静密封

制冰机水室端盖、视镜、人孔多用 O 形圈或平垫。低温工况注意两点：

- 丁腈橡胶（NBR）在 -20℃ 已接近脆性温度下限，应选 EPDM（适用到 -40℃）或低温柔化 NBR
- 石墨与不锈钢法兰直接贴合做静密封时，螺栓扭矩不宜过大，石墨抗压虽高但抗剪弱，过拧会把密封面压出裂纹

## 四、装配与维护

### 4.1 装配

- 轴承压装使用导向套，压入力均匀，速度控制在 2~5 mm/s，禁止用锤直接敲击石墨件
- 装配环境清洁：石墨孔隙率 10%~20%（浸渍前），任何砂尘都会嵌进孔隙变成永久磨粒源
- 手动盘车 2~3 圈确认无卡滞，手感扭矩应均匀

### 4.2 运行监控

把下列指标写进点检表：

| 指标 | 正常 | 预警 |
|---|---|---|
| 刮冰电机电流 | 额定值内 | 超过额定 10% |
| 冰厚均匀性 | 整筒一致 | 局部偏薄/不出冰 |
| 出水温度 | 符合工艺 | 上升 2℃ 以上 |
| 轴承温升 | 接近水温 | 明显高于水温 |

热气融冰后首次启动的磨损最大——冰壳脱落不完全时刮刀要"啃"冰，此时扭矩峰值可达正常值的 2~3 倍。建议融冰结束后延时 30~60 秒再启动刮冰轴。

## 五、常见失效与判据

| 失效形貌 | 根因 | 处置 |
|---|---|---|
| 轴承内孔均匀沟槽 | 水里带砂；过滤器失效 | 换轴承 + 修过滤器 + 轴表面强化 |
| 内孔单侧拉伤、抱轴 | 间隙过小或对中不良 | 校中，按 0.2% d 重选间隙 |
| 端面热裂纹（蛛网状） | 热气融冰热冲击 + 密封面压过大 | 换浸金属牌号，复核端面比压 |
| 冰厚不均、电机电流升高 | 轴承磨损后刀位变化 | 更换轴承并检查刮刀安装基准 |

## 结语

制冰机的石墨轴承与密封环是典型的"低负荷、高环境敏感"部件：材料强度从来不是瓶颈，水温、砂粒、装配间隙和热气融冰的热冲击才是。选型时先按制冷剂排除材料（氨禁铜），再按水质决定是否升级到浸锑牌号，最后把装配间隙和过滤器制度落实好——这三步做到，轴承寿命可以稳定在 2~3 个制冰季以上。`,
      en: `## Key Points

- Evaporator bearings in ice machines operate in water lubrication with ice-crystal abrasion at low temperature; neither oil- nor grease-lubricated bearings work, making self-lubricating carbon graphite the industry standard
- Bearing specific load is typically only 0.1–0.5 MPa, far below the GB-series graphite bearing rating of 20 MPa. Life is governed by abrasive wear from ice and sand, not load capacity
- Ammonia (R717) systems prohibit copper and copper alloys: select pure carbon graphite or antimony-impregnated grades (M120K/M106D type). HFC/HFO systems (R507A/R404A/R22) impose no material restrictions
- Typical running clearance: 0.15%–0.25% of shaft diameter, with extra allowance for thermal contraction at startup
- Failure sequence: rising torque/current → uneven ice thickness → scraper marks → scored bearing bore. Inspect on torque anomaly, not on leakage

## 1. The Evaporator Environment

A flake-ice machine freezes water on the outside of a jacketed evaporator cylinder while refrigerant boils inside the jacket. Ice grows to a 1.5–3 mm shell and a rotating scraper removes it as flakes. The scraper assembly runs on bearings fully submerged in an ice-water slurry at -10 to -20°C.

This location imposes four conflicting requirements:

1. **No lubricating oil**: ice is a food product; any oil leak contaminates it, and mineral oil waxes out at low temperature
2. **Self-lubrication**: at startup and low speed there is no continuous film, so boundary friction is unavoidable
3. **Abrasion tolerance**: ice crystals (Mohs 2–3) are soft, but undissolved scale (calcium carbonate, Mohs 3) and inlet sand (quartz, Mohs 7) will score graphite
4. **Thermal shock resistance**: during hot-gas defrost, 60–90°C refrigerant gas heats the jacket and the bearing environment swings from -15°C to above +40°C within seconds

## 2. Bearing Selection: Refrigerant First, Water Quality Second

### 2.1 Material Grade by Refrigerant

| Refrigerant | Bearing/seal material | Reason |
|---|---|---|
| Ammonia R717 | Pure carbon graphite or antimony-impregnated (M120K/M106D type) | Ammonia forms soluble complexes with copper; copper and copper alloys corrode rapidly, so copper-impregnated graphite is equally banned |
| R507A / R404A | Resin- or antimony-impregnated graphite | HFCs are inert to carbon and common metals |
| R22 (legacy) | Resin-impregnated graphite | Phase-out refrigerant; spare parts only |
| CO₂ (transcritical) | Antimony- or metal-impregnated grades | System pressure can exceed 10 MPa, demanding higher compressive strength |

The impregnant matters more than the base carbon. Resin-impregnated graphite (phenolic/epoxy) is dense and wear-resistant but generally limited to 200°C; antimony-impregnated grades are stronger (typically ~190 MPa compressive) and suit thermal shock and poor water; copper-impregnated graphite has the best thermal conductivity (~85 W/(m·K)) but is banned in ammonia service.

### 2.2 Clearance and Specific Load

Water-lubricated graphite bearings cannot use oil-bearing clearances: water viscosity is roughly 1/20 of oil, so film load capacity is weak. Too much clearance leaks without building hydrodynamic pressure; too little risks seizure. Industry practice:

- Diametral clearance: **0.15%–0.25% of shaft diameter** — e.g. 0.075–0.125 mm on a φ50 mm shaft
- L/d ratio 1.0–1.5; longer bearings seize more easily from shaft deflection
- Specific load p = F/(d·L): typically 0.1–0.5 MPa on scraper shafts versus the GB-series rating of ≤ 20 MPa — a safety margin above 40×
- Surface speed is usually 3–8 m/s, well below the ≤ 15 m/s rating

In other words, **ice-machine bearings are almost never crushed — they are worn out or seized**. Selection effort belongs on abrasive wear and assembly clearance, not load capacity.

### 2.3 Handling Sand-Laden Water

Groundwater and municipal supplies in Southeast Asia and the Middle East often carry fine sand at tens to hundreds of mg/L. Quartz entering the clearance plows continuous grooves in the bore and burnishes the 304 stainless shaft. Countermeasures by cost:

1. Fit a 50–100 mesh Y-strainer with a weekly cleaning routine (cheapest, most effective)
2. Plate the shaft with chrome or spray WC coating to raise mating hardness
3. Move to an antimony-impregnated grade, raising hardness from HS 60–70 to HS 80+
4. Relocate the bearing outside the water chamber (redesign) — new-machine territory only

## 3. Shaft Seal and Static Seals

### 3.1 Dynamic Seal

Where the scraper shaft exits the chamber wall, chamber pressure is near atmospheric (0–0.05 MPa) at -20°C — a low-pressure, low-temperature water duty:

- Standard choice: resin-impregnated graphite seal ring on a stainless shaft sleeve, e.g. F-series or US-series light-duty types (F-series rated -20 to 180°C, ≤ 0.8 MPa, ≤ 3000 rpm — ample margin)
- Narrow faces (3–5 mm) are preferred: lower face load and less heat at low temperature and load
- 304 or chrome-plated stainless mating faces suffice; SiC mating stabilizes leakage on continuous-duty machines at higher cost

### 3.2 Static Seals

Chamber covers, sight glasses and manholes use O-rings or flat gaskets. Two cold-temperature cautions:

- NBR approaches its brittleness limit at -20°C; choose EPDM (serviceable to -40°C) or low-temperature NBR
- When graphite seats directly against a stainless flange, do not over-torque the bolts: graphite resists compression well but is weak in shear, and over-tightening cracks the face

## 4. Assembly and Maintenance

### 4.1 Assembly

- Press bearings with a guide sleeve, even load, 2–5 mm/s speed; never strike graphite with a hammer
- Assemble in a clean environment: graphite porosity is 10%–20% before impregnation, and embedded grit becomes a permanent abrasive source
- Hand-rotate 2–3 turns to confirm free, uniform torque

### 4.2 Monitoring

Put these on the inspection sheet:

| Indicator | Normal | Warning |
|---|---|---|
| Scraper motor current | Within rating | Above 110% of rating |
| Ice thickness uniformity | Consistent around drum | Thin patches / no ice |
| Water outlet temperature | Per process | +2°C rise |
| Bearing temperature rise | Near water temp | Clearly above water temp |

Wear peaks right after hot-gas defrost: incomplete ice release makes the scraper "bite," and torque can reach 2–3× normal. Delay scraper restart 30–60 seconds after defrost ends.

## 5. Common Failures

| Failure pattern | Root cause | Action |
|---|---|---|
| Uniform grooves in bore | Sand in water; failed strainer | Replace bearing, repair strainer, harden shaft |
| One-sided bore scoring, seizure | Clearance too small or misalignment | Realign; re-select clearance at 0.2% d |
| Spider-web thermal cracks on face | Hot-gas shock + excessive face load | Switch to metal-impregnated grade; verify face pressure |
| Uneven ice, rising motor current | Scraper position drift from bearing wear | Replace bearing; check scraper datum |

## Conclusion

Ice-machine graphite bearings and seal rings are classic low-load, environment-sensitive parts: material strength is never the bottleneck — water temperature, sand, assembly clearance and defrost thermal shock are. Select material first by refrigerant (no copper in ammonia), then by water quality (upgrade to antimony-impregnated if sand is present), then control clearance and strainer discipline. Do those three and bearing life will hold for two to three ice seasons or more.`,
    },
  },
  // 2. October 5, 2026 - 2100 series selection
  {
    slug: "2100-series-industrial-pump-seal-ring",
    title: {
      zh: "2100系列碳石墨密封环：工业泵通用工况的选型与替代口径",
      en: "2100 Series Carbon Graphite Seal Rings: Selection and Substitution for General Industrial Pumps",
    },
    excerpt: {
      zh: "2100系列是通用工业泵里覆盖面最广的石墨环规格之一：-20℃~200℃、≤1.0 MPa、≤4000 rpm。本文讲清它与104/109/120（M3N）的选型边界、介质适配、浸渍体系取舍，以及进口密封换国产石墨环时的尺寸核对清单。",
      en: "The 2100 series is one of the broadest-coverage graphite ring sizes for general industrial pumps: -20 to 200°C, ≤ 1.0 MPa, ≤ 4000 rpm. This article explains selection boundaries against 104/109/120 (M3N), media compatibility, impregnant trade-offs, and the dimensional checklist when swapping imported seals for domestic graphite rings.",
    },
    tag: "selection",
    date: "2026-10-05",
    content: {
      zh: `## 核心要点

- 2100系列碳石墨密封环的标称能力为 -20℃ ~ 200℃、≤ 1.0 MPa、≤ 4000 rpm，覆盖清水、污水、轻油和一般化工介质，是通用工业泵的"默认选项"
- 与同档型号的边界：104 面向小型泵与轻工，109 偏清水/污水大流量，120（M3N）压力档更高（≤1.2 MPa），2100 的转速上限最高（4000 rpm）
- 浸渍体系按介质温度与腐蚀性三选一：树脂（≤200℃、一般腐蚀）、锑（220~500℃ 热油）、铜（水/低润滑/干运转倾向）
- 换进口密封（如 2100 这类通用规格）时，真正要核对的是安装位尺寸与密封面宽度，不是外径
- 干运转是石墨环的第一杀手：启动前盘车、进口阀全开、杜绝吸入空气

## 一、2100系列的定位

2100系列属于"通用旋转设备"定位的碳石墨密封环，标称参数：温度 -20℃ ~ 200℃、压力 ≤ 1.0 MPa、转速 ≤ 4000 rpm，适用介质覆盖清水、污水、轻油和弱腐蚀性化工介质，对磨面可用碳化硅、碳化钨、氧化铝陶瓷或高铬不锈钢。

这类型号在市场上的角色是"标准件"：单级单端面机械密封、部分双端面密封的辅助环、以及大量存量进口密封的国产替代，都指向同一组安装尺寸。对泵厂和维修方来说，选 2100 系列意味着"大概率能装上、大概率能用"。

### 1.1 与同档型号的边界

| 型号 | 温度 | 压力 | 转速 | 典型场景 |
|---|---|---|---|---|
| 104 | -20~200℃ | ≤0.8 MPa | ≤3500 rpm | 小型泵、汽车行业、家用电器、轻工 |
| 109 | -20~180℃ | ≤1.0 MPa | ≤4000 rpm | 离心泵、清水泵、污水泵 |
| 120（M3N） | -20~200℃ | ≤1.2 MPa | ≤3500 rpm | 离心泵、化工泵、搅拌器 |
| US | -20~200℃ | ≤0.8 MPa | ≤3500 rpm | 工业泵、清水泵、轻工设备 |
| G6 | -20~200℃ | ≤0.8 MPa | ≤3500 rpm | 工业泵、清水/污水泵、通用机械 |
| **2100** | -20~200℃ | **≤1.0 MPa** | **≤4000 rpm** | 工业泵、压缩机、搅拌器、通用旋转设备 |

选型时先看两个硬指标：**压力**和**转速**。压力超过 1.0 MPa 往 120（M3N）或 206 系列看；转速长期超过 4000 rpm 就不在这类通用件的覆盖范围，需要高速平衡型结构。其余场景差异不大，按现有密封腔尺寸和供应习惯选即可。

### 1.2 为什么转速上限重要

石墨环的磨损与端面平均线速度关系极大。端面 pv 值固定时，转速越高、端面比压越低，液膜越容易建立；但离心力也越大，石墨环在密封腔内必须有可靠的防转结构（防转销/卡槽），否则高速下石墨环会"随轴扫描"，几天内把端面磨成台阶。2100 系列标称 4000 rpm，前提是防转可靠、对磨面硬度足够。

## 二、浸渍体系选择

石墨基体的开口气孔率 10%~20%，不浸渍直接用的很少。三种主流浸渍的口径：

| 浸渍体系 | 典型抗压 | 耐温 | 适合 | 不适合 |
|---|---|---|---|---|
| 酚醛/环氧树脂 | 90~100 MPa | ≤200℃ | 清水、污水、弱酸碱、油类 | 强碱、热油、>200℃ |
| 锑 | ~190 MPa | 220~500℃ | 热油、导热油、高温蒸汽 | 强氧化介质 |
| 铜合金 | ~260 MPa | 空气 ≤450℃ | 水、低润滑、干运转倾向、含 H₂S 烃类 | 强氧化介质、氨系统 |

选型顺序建议：先按温度排除（>200℃ 排除树脂），再按腐蚀性排除（氨系统排除铜；强氧化性酸排除锑与铜），最后按润滑条件定（频繁干运转倾向选铜）。剩下的多数工况，树脂浸渍即可，且成本最低。

### 2.1 与对磨面的配合

端面摩擦副的硬度搭配直接决定磨损量级。2100 系列这类通用件的对磨面按介质选：

- 清水/污水：高铬不锈钢或 SiC。不锈钢便宜但水中电位差会加速腐蚀磨损，含砂水质优先 SiC
- 轻油/化工：SiC 或 WC。反应烧结 SiC 是目前性价比最高的选择，硬度 HRA 90 以上
- 弱酸碱：SiC（陶瓷对水中碱不敏感，Al₂O₃ 在 pH>10 时长期使用有腐蚀风险）

对磨面粗糙度 Ra ≤ 0.2 μm、平面度按光圈法 1~2 条（λ/2~λ）控制，装前用无尘布蘸酒精轻擦，禁止手摸端面——指纹上的油脂在 200℃ 工况会碳化结焦，成为泄漏通道。

## 三、进口密封的国产替代核对清单

大量存量设备使用进口通用规格密封（美标 21 系列、日标 2100 类规格、欧标轻型系列等），石墨环磨坏后换国产件是常见降本手段。核对清单：

| # | 核对项 | 常见坑 |
|---|---|---|
| 1 | 密封腔内径 D 与石墨环外径配合（推荐 H8/f7 量级） | 进口件按英制公差，国产件按公制，直接互换可能过松导致串压 |
| 2 | 石墨环内径与轴套配合 | 国产轴套外径公差带偏下偏差，环会"抱套" |
| 3 | 密封面宽度（端面内外径差） | 端面宽度差 1 mm，端面比压变化可达 15%，泄漏量随之改变 |
| 4 | 总高 H | 弹簧压缩量是按总高算的，H 短 1 mm 可能让端面比压归零 |
| 5 | 防转槽/防转孔位置与尺寸 | 位置错位=没有防转，高速下必坏 |
| 6 | 浸渍体系与原工况匹配 | 原用锑浸渍的热油泵换树脂件，几周就开裂 |

替代后前 72 小时是观察窗口：泄漏量从初始磨合滴漏（每小时数毫升量级）逐渐下降到痕迹级是正常的；若泄漏不降反升、或出现连续流，先查对磨面与轴振，再怀疑石墨环质量。

## 四、安装与运行纪律

石墨环再贵也怕"人为工况"：

1. **严禁干摩擦启动**：启动前打开吸入阀、排空气，点动确认泵内充液。碳石墨的干摩擦 pv 极限只有水润滑的几分之一，一次干启动的磨损相当于正常运转几百小时
2. **盘车**：新装或久停后，手动盘车 2~3 圈，确认无卡滞再送电
3. **压装工艺**：用导向套均匀压入，速度 2~5 mm/s；严禁锤击，崩边在高压下会扩展成断裂
4. **水压试验**：1.5 倍工作压力保持 10 分钟无压降（石墨本身不渗，泄漏都走端面或静密封）
5. **备件存放**：浸树脂石墨有存放期（见本站[《浸树脂石墨的存放与保质期》](/blog/resin-impregnated-graphite-storage-shelf-life)一文），避光防潮，先进先出

## 五、常见问题速查

| 现象 | 优先怀疑 |
|---|---|
| 端面蛛网状裂纹 | 热冲击或比压过大；检查冲洗与冷却 |
| 内孔均匀磨损、间隙变大 | 含砂介质；查过滤与对磨面 |
| 外径划伤、密封腔内壁拉毛 | 配合过紧或压装偏斜 |
| 端面边缘崩缺 | 锤击安装或弹簧力过大 |
| 连续泄漏（非端面痕迹） | 防转失效、对磨面跳动超差、轴振超标 |

## 结语

2100系列的价值在于"通用"：参数覆盖面广、供应渠道多、替代选择大。也正因为通用，选型时反而容易忽略两件事——浸渍体系与工况的匹配、以及替代件的配合尺寸核对。把这两项做细，比换更贵的型号更能解决问题。`,
      en: `## Key Points

- The 2100 series carbon graphite seal ring is rated -20 to 200°C, ≤ 1.0 MPa, ≤ 4000 rpm, covering water, sewage, light oil and mildly corrosive chemicals — the default choice for general industrial pumps
- Boundaries within the class: 104 targets small pumps and light industry, 109 targets high-flow water/sewage, 120 (M3N) offers a higher pressure rating (≤1.2 MPa), and 2100 has the highest speed rating (4000 rpm)
- Impregnant is a three-way choice by temperature and corrosivity: resin (≤200°C, general corrosion), antimony (220–500°C hot oil), copper (water, low lubricity, dry-run tendency)
- When substituting for imported seals, verify installation dimensions and face width — not the OD
- Dry running is the number one killer of graphite rings: no startup without a liquid-filled, vented pump

## 1. Positioning of the 2100 Series

The 2100 series sits in the "general rotating equipment" slot: -20 to 200°C, ≤ 1.0 MPa, ≤ 4000 rpm, for water, sewage, light oil and weakly corrosive chemical media, with SiC, WC, alumina ceramic or high-chrome stainless mating faces.

Its market role is the standard part: single-stage single seals, auxiliary rings in some double seals, and countless domestic replacements for imported general-size seals all point to the same installation envelope. For pump builders and maintenance teams, choosing 2100 means "it will very likely fit and very likely work."

### 1.1 Boundaries Against Sibling Models

| Model | Temperature | Pressure | Speed | Typical use |
|---|---|---|---|---|
| 104 | -20~200°C | ≤0.8 MPa | ≤3500 rpm | Small pumps, automotive, appliances, light industry |
| 109 | -20~180°C | ≤1.0 MPa | ≤4000 rpm | Centrifugal, water, sewage pumps |
| 120 (M3N) | -20~200°C | ≤1.2 MPa | ≤3500 rpm | Centrifugal, chemical pumps, mixers |
| US | -20~200°C | ≤0.8 MPa | ≤3500 rpm | Industrial, water pumps, light equipment |
| G6 | -20~200°C | ≤0.8 MPa | ≤3500 rpm | Industrial, water/sewage pumps, general machinery |
| **2100** | -20~200°C | **≤1.0 MPa** | **≤4000 rpm** | Industrial pumps, compressors, mixers, general rotating equipment |

Selection starts with two hard limits: **pressure** and **speed**. Above 1.0 MPa, move to 120 (M3N) or 206 series; sustained speed above 4000 rpm is outside this general-purpose class and needs high-speed balanced designs. Other differences are minor — pick by cavity size and supply habit.

### 1.2 Why the Speed Rating Matters

Graphite ring wear scales strongly with mean face velocity. At fixed face pv, higher speed means lower face load and a better chance of a stable film — but centrifugal loading also rises, and the ring must be reliably anti-rotated (pin or slot) in the cavity. Without it, a high-speed ring "scans" with the shaft and wears a step into the face within days. The 4000 rpm rating assumes reliable anti-rotation and adequate mating hardness.

## 2. Choosing the Impregnant

The graphite base has 10%–20% open porosity; unimpregnated service is rare. Three mainstream systems:

| Impregnant | Typical compressive | Temperature limit | Suits | Avoids |
|---|---|---|---|---|
| Phenolic/epoxy resin | 90–100 MPa | ≤200°C | Water, sewage, weak acid/alkali, oil | Strong alkali, hot oil, >200°C |
| Antimony | ~190 MPa | 220–500°C | Hot oil, thermal oil, steam | Strong oxidizers |
| Copper alloy | ~260 MPa | ≤450°C in air | Water, low lubricity, dry-run tendency, H₂S-bearing hydrocarbons | Strong oxidizers, ammonia systems |

Order of elimination: temperature first (>200°C rules out resin), then chemistry (ammonia rules out copper; strong oxidizing acids rule out antimony and copper), then lubrication (frequent dry-run tendency selects copper). Most remaining duties are fine with resin impregnation at the lowest cost.

### 2.1 Pairing With Mating Faces

Face pair hardness sets the wear regime. For this general-purpose class:

- Water/sewage: high-chrome stainless or SiC. Stainless is cheap but galvanic potentials in water accelerate corrosive wear; with sand, prefer SiC
- Light oil/chemical: SiC or WC. Reaction-bonded SiC (HRA 90+) is the best value today
- Weak acid/alkali: SiC (ceramics tolerate alkaline water; Al₂O₃ carries long-term risk above pH 10)

Mate faces at Ra ≤ 0.2 μm and flatness of 1–2 interference fringes (λ/2–λ); wipe with alcohol on lint-free cloth before assembly and never touch the face — fingerprint oil carbonizes at 200°C and becomes a leak path.

## 3. Checklist for Imported-Seal Substitution

Many legacy machines run imported general-size seals (US Type 21-class, Japanese 2100-class, European light-duty series). Replacing a worn graphite ring with a domestic part is a common cost move. The checklist:

| # | Item | Common trap |
|---|---|---|
| 1 | Cavity ID vs ring OD (H8/f7 class) | Imperial vs metric tolerances; a loose fit lets the ring cock |
| 2 | Ring ID vs sleeve OD | Domestic sleeves run low on OD tolerance; the ring binds |
| 3 | Face width (OD-ID) | 1 mm of face width shifts face pressure ~15% and leakage with it |
| 4 | Overall height H | Spring load is computed from H; 1 mm short can zero face pressure |
| 5 | Anti-rotation slot/pin position and size | Misaligned pin = no anti-rotation; failure at speed |
| 6 | Impregnant matched to duty | Swapping an antimony ring on a hot-oil pump for resin cracks it in weeks |

The first 72 hours after substitution are the observation window: initial wear-in leakage (a few ml/h) settling to trace levels is normal. If leakage rises or becomes a continuous stream, check the mating face and shaft vibration before suspecting the ring.

## 4. Installation and Operating Discipline

The best ring loses to bad practice:

1. **Never start dry**: open the suction valve, vent, jog to confirm the pump is liquid-filled. Carbon graphite dry-running pv limits are a fraction of water-lubricated values; one dry start can cost hundreds of hours of normal wear
2. **Hand-rotate** 2–3 turns after new assembly or long standstill before energizing
3. **Press with a guide sleeve**, even load, 2–5 mm/s; no hammering — chips propagate into cracks under pressure
4. **Hydrostatic test** at 1.5× working pressure for 10 minutes without pressure drop (graphite itself is impermeable; leakage exits at faces or statics)
5. **Spares storage**: resin-impregnated graphite has shelf life (see this site's [article on storage and shelf life](/blog/resin-impregnated-graphite-storage-shelf-life)) — keep dark and dry, FIFO

## 5. Quick Troubleshooting

| Symptom | First suspect |
|---|---|
| Spider-web face cracks | Thermal shock or excessive face load; check flush plan and cooling |
| Uniform bore wear, growing clearance | Abrasive medium; inspect filtration and mating face |
| Scratched OD, scuffed cavity | Tight fit or skewed pressing |
| Chipped face edge | Hammer installation or excessive spring load |
| Continuous leakage (not face traces) | Anti-rotation failure, mating face runout, shaft vibration |

## Conclusion

The 2100 series earns its place through versatility: broad ratings, many supply channels, many substitutes. Because it is generic, selection tends to skip two things — matching the impregnant to the duty, and verifying substitute fit dimensions. Getting those two right solves more problems than buying a more expensive model.`,
    },
  },
  // 3. October 7, 2026 - Ammonia refrigeration compressor graphite seal
  {
    slug: "ammonia-refrigeration-compressor-graphite-seal",
    title: {
      zh: "氨制冷压缩机：石墨密封环的介质兼容性与禁铜红线",
      en: "Ammonia Refrigeration Compressors: Graphite Seal Ring Media Compatibility and the No-Copper Red Line",
    },
    excerpt: {
      zh: "氨系统对铜及铜合金有强腐蚀性，而碳石墨本身对氨稳定——这让石墨成为氨压缩机密封的主力材料。本文讲氨环境下的浸渍体系选择、机械密封配置、油路影响与安装要点，并列出禁铜红线清单。",
      en: "Ammonia aggressively corrodes copper and copper alloys while carbon graphite itself is ammonia-stable — which makes graphite the mainstay sealing material in ammonia compressors. This article covers impregnant selection, mechanical seal arrangements, oil-circuit effects and installation practice, with a no-copper checklist.",
    },
    tag: "application",
    date: "2026-10-07",
    content: {
      zh: `## 核心要点

- 氨与铜生成可溶性络合物，铜件会被持续腐蚀；碳石墨基体对氨（无水或氨水）稳定，是氨制冷压缩机的首选密封材料
- 红线：氨系统禁用铜浸渍石墨密封环，选纯碳石墨或浸锑/浸树脂牌号；也不要用铜基防转销、铜垫
- 氨润滑多采用聚烯烃（PAO）或矿物冷冻油，油会稀释密封液膜并改变摩擦副的润滑状态，密封环要有耐油浸渍体系
- 开机抽真空与停机回收环节存在低压干运转窗口，密封环要按干摩擦 pv 校核
- 泄漏判定从严：氨的爆炸下限 15%，职业接触限值 25 ppm 报警、35 ppm 短时上限，密封不允许有可检测外漏

## 一、氨为什么"吃铜不咬石墨"

无水氨对铜及铜合金的腐蚀机理是络合反应：氨分子与铜离子形成可溶性的 [Cu(NH₃)₄]²⁺，把金属表面不断拉进溶液。含微量水分时腐蚀更快（氨水电离出 OH⁻，同时溶解氧加速电化学腐蚀）。因此氨系统的管路、阀件、螺栓、垫片长期执行"禁铜"规定。

碳石墨的情况完全不同：

- 碳在氨环境中化学惰性，无水氨、氨水（弱碱性，pH 约 11）都不与碳反应
- 石墨本身有自润滑性，不需要油膜也能短时运转
- 常温至 300℃ 范围内强度稳定（视牌号），覆盖氨压缩机的大部分工况

这也是为什么从老式开启式氨机的填料密封，到现代半封闭/开启螺杆机的机械密封，主密封环基本都是碳石墨。**但要害在浸渍剂**：如果用了铜浸渍石墨，等于把铜直接埋进了密封环里，氨会顺着孔隙腐蚀金属相，密封环强度下降、孔隙变大，最后整环碎裂。选型时第一件事就是问清楚浸渍体系。

## 二、浸渍体系选择

| 浸渍体系 | 氨兼容性 | 典型抗压 | 适用部位 |
|---|---|---|---|
| 纯碳石墨（不浸渍） | 完全兼容 | 较低（按牌号） | 低载荷轴承、隔离环 |
| 浸树脂（酚醛/环氧） | 兼容（树脂耐弱碱） | 90~100 MPa | 主密封环、辅助环 |
| 浸锑 | 兼容 | ~190 MPa | 高载荷或高温油侧 |
| **浸铜/铜合金** | **禁用** | ~260 MPa | —— |

氨压缩机轴封的实际选型口径：

- **主密封环（动环）**：浸树脂或浸锑碳石墨，配 SiC 或高铬不锈钢静环。SiC 对氨完全惰性且硬度高，是目前氨机密封的标配对磨面
- **轴套/轴承类**：纯碳石墨或浸锑；滑动轴承部位（如螺杆压缩机的同步齿轮支撑、能量调节机构的滑动副）用碳石墨轴承时注意氨气含油后的润滑变化
- **辅助密封 O 圈**：EPDM 或丁基橡胶。NBR 耐油但氨兼容性差，EPDM 耐氨耐水是氨系统标准选择；低温工况（-40℃ 蒸发温度）EPDM 仍保持弹性

## 三、机械密封配置

### 3.1 单端面 vs 双端面

氨有毒性且可燃，密封策略按泄漏零容忍设计：

- **小型半封闭螺杆机/活塞机**：轴封常用单端面机械密封 + 外置挡油环，泄漏按痕迹级管理
- **大型开启式螺杆机/离心机**：推荐双端面密封，密封液用相容的冷冻油或乙二醇溶液，压力略高于氨侧 0.05~0.1 MPa，把泄漏方向反转成"向内"，外漏趋近于零
- **危险场合（机房密闭、大充注量）**：双端面 + 密封液罐 + 泄漏收集，密封液系统单独设低液位报警

### 3.2 密封液与冲洗

氨溶解于水（1:700 体积比），不溶于大多数矿物油但能与 PAO 互溶。这意味着：

- 若用冷冻油做密封液，油会进入氨回路，随氨进入蒸发器后附着在换热管表面，**长期累积降低换热效率**——这是氨机密封液管理最现实的代价。因此冲洗/密封液流量按"最小有效量"设计，而不是越大越好
- 外冲洗（Plan 32）用水会引入水分与氧，加速氨水对金属的电化学腐蚀，氨系统一般不推荐外冲水，除非水质受控且定期排放
- 更常见的做法是 Plan 11（自身循环）+ 夹套冷却，维持密封腔温度在氨的沸点以上 10~20℃，避免氨在密封面汽化导致干摩擦

### 3.3 干运转窗口

两类典型干摩擦时刻：

1. **开机抽真空**：曲轴箱抽空使密封腔压力骤降，若此时油未到位，端面处于半干摩擦
2. **停机降压**：停机后氨从密封腔侧回流或密封液泄压，液膜消失

对策：开机程序保证密封液/润滑油先建立压力再启动主机；停机程序先停主机、后停油泵；密封环按"允许短时干摩擦"选型（石墨的自润滑性此时发挥作用），并在检修时测量端面磨损量，超过 0.5 mm 即更换（端面宽度余量耗尽后比压急剧上升）。

## 四、安装与维护要点

| 环节 | 要求 |
|---|---|
| 清洁度 | 密封腔、管路酸洗除油；禁止使用含铜工具接触密封腔 |
| O 圈润滑 | 装配润滑用相容的硅脂或专用氨兼容润滑剂；禁止普通矿物脂 |
| 螺栓与垫片 | 全不锈钢或镀锌件，禁铜合金；垫片用柔性石墨复合垫或无铜缠绕垫 |
| 防转件 | 不锈钢防转销；有些老机用铜销，更换时务必换成不锈钢 |
| 压力试验 | 氨侧气密试验用氮气，1.0~1.5 倍设计压力，肥皂水检漏；禁止用水压替代气密 |
| 泄漏检测 | 固定式氨检测仪 25 ppm 报警；燃烧法/试纸法做辅助判断 |

## 五、失效模式速查

| 现象 | 根因 | 处置 |
|---|---|---|
| 密封环整体碎裂、断面发暗绿/蓝 | 铜浸渍石墨被氨腐蚀（或铜件污染） | 更换为浸锑/浸树脂牌号，排查系统内铜件 |
| 端面均匀磨损快 | 干运转窗口频繁；密封液建立慢 | 优化启停程序，加大端面宽度 |
| O 圈硬化开裂 | 误用 NBR 或非氨兼容橡胶 | 换 EPDM |
| 静环（SiC）出现放射纹 | 对磨面进入颗粒；氨侧带油碳化颗粒 | 检查过滤与油路清洁度 |
| 泄漏量随负荷上升而增大 | 密封腔温度过高，氨汽化 | 加冷却/夹套，维持过冷度 |

## 结语

氨制冷压缩机的石墨密封选型可以归纳成一句话：**碳石墨不怕氨，怕的是氨里混进来的铜和干运转**。把浸渍体系限定在树脂/锑两类、密封面用 SiC、辅助密封用 EPDM、启停程序保证液膜先建立，氨机轴封可以稳定运行一个大修周期（通常 8000~15000 小时）。系统内任何铜件的存在都是隐患，包括不起眼的防转销和垫片。`,
      en: `## Key Points

- Ammonia complexes with copper and corrodes it, while carbon graphite itself is stable in ammonia (anhydrous or aqueous) — the reason graphite dominates ammonia compressor sealing
- Red line: never use copper-impregnated graphite in ammonia service; select pure carbon or antimony/resin-impregnated grades, and ban copper anti-rotation pins and copper gaskets too
- Ammonia plants use PAO or mineral refrigeration oil; oil thins the seal film and changes pair lubrication, so impregnation must be oil-tolerant
- Vacuum pull-down at startup and pressure let-down at shutdown create dry-running windows; rings must be checked against dry-friction pv
- Leakage discipline is strict: ammonia's lower explosion limit is 15%, with 25 ppm alarm and 35 ppm short-term exposure limits — no detectable external leakage is acceptable

## 1. Why Ammonia Eats Copper but Not Graphite

Anhydrous ammonia corrodes copper through complexation: NH₃ forms soluble [Cu(NH₃)₄]²⁺ with copper ions, continuously pulling the surface into solution. Trace water accelerates it (ammonia solution ionizes to OH⁻ and dissolved oxygen speeds electrochemistry). Hence the long-standing "no copper" rule for ammonia piping, valves, bolts and gaskets.

Carbon graphite behaves oppositely:

- Carbon is chemically inert in ammonia; neither anhydrous ammonia nor weak ammonia solution (pH ≈ 11) reacts with it
- Graphite is inherently self-lubricating and can run briefly without an oil film
- Strength is stable from ambient to ~300°C depending on grade, covering most ammonia compressor duties

That is why everything from old open-type stuffing boxes to modern semi-hermetic and open screw-compressor mechanical seals uses carbon graphite primary rings. **The catch is the impregnant**: copper-impregnated graphite embeds copper in the ring itself; ammonia attacks the metal phase through the pores, strength drops, porosity grows, and the ring eventually breaks apart. The first selection question is always the impregnant.

## 2. Impregnant Selection

| Impregnant | Ammonia compatibility | Typical compressive | Typical use |
|---|---|---|---|
| Pure carbon (unimpregnated) | Fully compatible | Lower (grade-dependent) | Light-load bearings, isolating rings |
| Resin (phenolic/epoxy) | Compatible (resists weak alkali) | 90–100 MPa | Primary and secondary seal rings |
| Antimony | Compatible | ~190 MPa | High-load or hot oil side |
| **Copper / copper alloy** | **Prohibited** | ~260 MPa | —— |

Practical selection for ammonia compressor shaft seals:

- **Primary (rotating) ring**: resin- or antimony-impregnated carbon graphite against SiC or high-chrome stainless. SiC is fully inert to ammonia and hard; it is the standard mating face today
- **Sleeves / bearing parts**: pure carbon or antimony-impregnated. Where carbon graphite bearings serve sliding surfaces (screw-compressor gear supports, capacity-control slides), account for oil carryover changing lubrication
- **Secondary O-rings**: EPDM or butyl. NBR handles oil but not ammonia; EPDM is the ammonia-system standard and stays elastic at -40°C evaporating temperatures

## 3. Mechanical Seal Arrangements

### 3.1 Single vs Double Seals

Ammonia is toxic and flammable, so sealing strategy targets zero leakage:

- **Small semi-hermetic screws / recip compressors**: single mechanical seal plus an external oil-thrower, leakage managed at trace level
- **Large open screws / centrifugals**: double seals recommended, barrier fluid being compatible refrigeration oil or glycol solution at 0.05–0.1 MPa above ammonia side, reversing leakage inward so external leakage tends to zero
- **Hazardous installations (enclosed machinery rooms, large charge)**: double seals with seal-fluid reservoir and leakage collection, plus low-level alarm on the barrier system

### 3.2 Barrier Fluid and Flush

Ammonia dissolves in water (700:1 by volume) but is largely immiscible with mineral oil, while PAO is mutually soluble. Consequences:

- If refrigeration oil is the barrier fluid, oil enters the ammonia circuit and coats evaporator tubes, **degrading heat transfer over time** — the practical cost of ammonia seal-fluid management. Size flush/barrier flow for "minimum effective," not maximum
- External water flush (Plan 32) introduces water and oxygen and accelerates ammonia electrochemistry; it is generally not recommended in ammonia service unless water quality is controlled and drained regularly
- The usual approach is Plan 11 (self-circulation) plus jacket cooling, holding seal-chamber temperature 10–20°C above ammonia boiling point to prevent flashing and dry running at the faces

### 3.3 Dry-Running Windows

Two classic dry-friction moments:

1. **Startup vacuum pull-down**: crankcase evacuation drops seal-chamber pressure; if oil has not arrived, faces run semi-dry
2. **Shutdown let-down**: ammonia backflow or barrier pressure loss removes the film after stop

Countermeasures: establish barrier/oil pressure before starting the compressor; stop the compressor before the oil pump; select rings rated for brief dry running (graphite's self-lubrication helps here); measure face wear at overhaul and replace beyond 0.5 mm (once face-width margin is gone, face pressure rises sharply).

## 4. Installation and Maintenance

| Stage | Requirement |
|---|---|
| Cleanliness | Pickle and degrease seal chamber and piping; no copper tools in the chamber |
| O-ring lube | Ammonia-compatible silicone or special grease; no ordinary mineral grease |
| Bolts and gaskets | All stainless or zinc-plated; no copper alloys; flexible-graphite composite or copper-free spiral-wound gaskets |
| Anti-rotation parts | Stainless pins — legacy copper pins must be replaced |
| Pressure test | Pneumatic with nitrogen at 1.0–1.5× design pressure, soap-water leak check; do not substitute hydrostatic for tightness |
| Leak detection | Fixed ammonia detectors alarming at 25 ppm; dye paper or combustion methods as backup |

## 5. Failure Modes

| Symptom | Root cause | Action |
|---|---|---|
| Ring fragmented, fracture dark green/blue | Copper-impregnated graphite corroded by ammonia (or copper contamination) | Replace with antimony/resin grades; audit system for copper |
| Fast uniform face wear | Frequent dry-running windows; slow barrier buildup | Revise start/stop sequence; widen face |
| O-ring hardened and cracked | NBR or ammonia-incompatible elastomer used | Switch to EPDM |
| Radial marks on SiC seat | Particles from ammonia side; carbonized oil | Check filtration and oil cleanliness |
| Leakage rising with load | Seal chamber too hot; ammonia flashing | Add cooling/jacket; maintain subcooling |

## Conclusion

Graphite seal selection for ammonia refrigeration compressors reduces to one sentence: **carbon graphite does not fear ammonia — it fears copper carried in with it, and dry running**. Limit impregnation to resin or antimony, use SiC faces, EPDM elastomers, and start/stop sequences that establish the film first, and shaft seals will hold for a full overhaul interval (typically 8,000–15,000 hours). Any copper in the system is a liability — including the inconspicuous anti-rotation pin and gasket.`,
    },
  },
  // 4. October 9, 2026 - Dyeing machine 41.275 series
  {
    slug: "dyeing-machine-41-275-seal-ring-textile",
    title: {
      zh: "染色机41.275系列密封环：印染高温染料液工况的实战选型",
      en: "41.275 Series Seal Rings for Dyeing Machines: Practical Selection in High-Temperature Dye-Liquor Service",
    },
    excerpt: {
      zh: "印染溢流/气流染色机在 130℃ 染料液、酸碱交替和织物纤维掉毛的环境里工作，密封环要同时耐温、耐腐蚀、耐磨粒。本文按 41.275 系列的参数边界，讲浸渍体系、对磨面、法兰静密封与换型周期的确定方法。",
      en: "Overflow and air-flow dyeing machines work at 130°C in dye liquor with alternating acid/alkali and fabric lint. Seal rings must survive temperature, corrosion and abrasion at once. This article uses the 41.275 series ratings to cover impregnation, mating faces, flange static seals and how to set replacement intervals.",
    },
    tag: "selection",
    date: "2026-10-09",
    content: {
      zh: `## 核心要点

- 41.275 系列（染色机专用规格）标称 -10℃ ~ 180℃、≤ 0.8 MPa、≤ 3000 rpm，适配染料液、化学品与热水，覆盖绝大多数溢流/气流/卷染机
- 染液温度常到 130℃，且含碱（活性染料固色 pH 10~11）、酸（还原清洗 pH 3~4）、保险粉与表面活性剂，密封环必须耐温又耐化学交替
- 织物掉毛（棉绒/化纤屑）是磨粒源，端面选 SiC 对磨、按周清理过滤器；泵送染液的机械密封按"每周运转率"折算换型周期
- 主泵轴封和布水循环泵是密封失效高发位，前者高压高温、后者含纤维
- 换型周期不要拍脑袋：按泵的累计运转小时 + 泄漏趋势双指标判定

## 一、染色机密封的工况画像

印染厂的连续式与前处理设备大量使用离心泵输送染液、助剂和水。典型参数：

- 介质温度 40~130℃（涤纶染色 130℃，棉织物前处理 95~100℃）
- 压力 0.2~0.6 MPa（主循环泵扬程 25~40 m）
- 介质：水、染料（分散/活性/还原）、碱（NaOH、Na₂CO₃）、酸（乙酸、柠檬酸）、保险粉（连二亚硫酸钠）、精练剂、柔软剂
- 颗粒物：织物掉毛、布屑、未溶解的染料团聚体、水垢

41.275 系列的参数边界（-10℃ ~ 180℃、≤ 0.8 MPa、≤ 3000 rpm，介质染料液/化学品/热水）正好落在这个区间的中位。选型的难点不在参数够不够，而在**化学交替与磨粒的叠加**。

### 1.1 化学交替的破坏性

同一条工艺管路里，碱性精练（pH 10~12）之后可能是酸性还原清洗（pH 3~4），一天之内来回好几次。对密封系统的影响：

- 树脂浸渍石墨本身耐稀酸稀碱，但端面液膜在 pH 剧变时反复经历"皂化-中和"，磨痕形态与单一介质不同
- 对磨面若是高铬不锈钢，酸性阶段的点蚀倾向上升；SiC 则完全不受影响
- 静密封 O 圈是化学品交替下最先坏的部件：EPDM 耐碱耐高温但在矿物油中溶胀，NBR 耐油但耐碱一般；印染工况主流选 EPDM

### 1.2 纤维与布屑

棉绒和化纤屑密度低、尺寸 0.1~2 mm，随液体在密封腔内打转。它们本身软，但会：

- 嵌入端面之间形成"第三体"，把对磨面磨出圆周向划痕
- 堵住密封腔循环通路，造成局部汽化、端面发热
- 在弹簧和传动件周围堆积，影响补偿动作

对策不是换更硬的材料，而是**把颗粒挡在外面**：泵吸入过滤器 20~40 目 + 密封腔前的旁通过滤（Plan 11/12 的过滤版本）。

## 二、浸渍体系与对磨面

### 2.1 浸渍体系

按温度排：

| 温度区间 | 推荐浸渍 | 说明 |
|---|---|---|
| ≤100℃（前处理、水洗） | 浸树脂 | 成本低、致密耐磨 |
| 100~140℃（染色主循环） | 浸锑或耐温树脂牌号 | 树脂体系长期 130℃ 有玻璃化转变风险，按牌号上限选 |
| 140~180℃（高温高压卷染、热熔） | 浸锑 | 锑浸渍 220℃ 以上才发挥优势，但强度与耐温余量最好 |

保险粉（还原剂）对碳无害，对铜有影响；因此染色机密封环**同样不建议铜浸渍**（与氨系统同理，还原环境 + 高温加速铜相溶解）。

### 2.2 对磨面

- 染色主循环泵：SiC 静环。酸碱交替 + 纤维环境下，SiC 是唯一能同时扛住腐蚀和磨粒的选择
- 水洗/前处理辅助泵：高铬不锈钢可以，但含纤维水质下寿命明显短于 SiC
- 端面宽度取 4~6 mm：太窄容易被纤维磨出沟槽，太宽端面比压分布不均

### 2.3 法兰静密封

印染设备大量使用法兰连接（换热器、过滤机、缸体），130℃ 酸碱交替下：

- 优先柔性石墨复合垫（金属齿垫 + 柔性石墨贴面），耐温耐蚀、可重复上紧
- 次选 EPDM 包覆垫或全 EPDM 平垫，注意螺栓扭矩按垫片压缩量控制（石墨垫 25~35 MPa 面压即可，不是越紧越好）
- 禁用普通石棉橡胶垫：印染车间的湿热 + 酸碱会让它迅速硬化

## 三、换型周期的确定方法

维修主管最常问的问题：这对密封环能用多久？正确做法是用数据定，不是用经验拍。

**双指标法**：

1. **累计运转小时**：染色机密封按年 3000~5000 运转小时（两班制）估算，取本厂历史数据
2. **泄漏趋势**：每次点检记录泄漏量（痕迹/滴漏/连续流三级），画趋势线；泄漏从痕迹级升到滴漏级的时间点就是计划换型窗口

行业参考值（棉/涤混纺、130℃染色主循环泵、SiC 对磨、正确冲洗）：

| 部件 | 参考寿命 |
|---|---|
| 主密封环（石墨） | 4000~8000 小时 |
| SiC 静环 | 8000~15000 小时（通常比石墨环长 1 倍以上） |
| O 圈 | 1~2 年（温度循环 + 化学交替） |
| 弹簧 | 与密封同周期更换 |

把"换石墨环不换 SiC 环"当作默认策略；只有当 SiC 出现崩缺或深度划痕时才换，否则重复使用是经济的。

## 四、安装与维护

- **清洗**：换型时彻底清理密封腔，旧垫片碎片、干结染料、纤维团都是新密封的磨粒源
- **对中**：泵与电机对中误差控制在 0.05 mm 以内（径向）。印染泵常被管路应力拉偏，先用百分表确认再装密封
- **冷却/冲洗**：Plan 11 自循环 + 密封腔冷却夹套，维持密封腔温度低于介质沸点 15℃ 以上；含纤维介质加 Plan 12 过滤循环
- **点检表**：泄漏量、密封腔温度、电流、轴承位噪声，每周一次并记录
- **备件管理**：浸树脂石墨避光存放，先进先出；O 圈按批次登记，超两年不用的降级使用

## 五、失效速查

| 现象 | 根因 | 处置 |
|---|---|---|
| 端面圆周向细密划痕 | 纤维/布屑进入端面 | 加过滤，清理密封腔，检查过滤器压差 |
| 端面边缘局部崩缺 | 纤维团局部卡死、弹簧卡滞 | 清理传动件，换弹簧 |
| O 圈一周内硬化 | 介质温度超 EPDM 长期上限或误用 NBR | 核算实际温度，换耐高温 EPDM |
| 泄漏量突然增大 | 泵振动（轴承坏/汽蚀） | 先修泵，再换密封 |
| 静环外圆微动腐蚀 | 静环 O 圈压缩量不足或腔体磨损 | 换 O 圈或腔体镶套 |

## 结语

染色机密封环的选择逻辑可以压缩成三句话：**温度定浸渍（130℃ 以上走锑浸渍）、腐蚀定对磨面（酸碱交替用 SiC）、磨粒靠过滤（纤维挡在密封腔外）**。41.275 系列作为染色机专用规格，参数边界覆盖这个工况；真正决定寿命的是过滤制度和对中精度，而不是石墨牌号本身。`,
      en: `## Key Points

- The 41.275 series (dyeing-machine specific size) is rated -10 to 180°C, ≤ 0.8 MPa, ≤ 3000 rpm for dye liquor, chemicals and hot water — covering nearly all overflow, air-flow and jigger machines
- Dye liquor runs to 130°C with alkali (reactive dye fixation at pH 10–11), acid (reduction clearing at pH 3–4), hydrosulfite and surfactants; rings must survive thermal and chemical cycling at once
- Fabric lint and fiber debris are the abrasive source: SiC faces plus weekly filter service; replacement intervals for liquor-pump seals derive from accumulated run hours
- Main pump shaft seals and fabric-circulation pumps are the failure hotspots — high pressure/temperature in the former, fiber-laden in the latter
- Set replacement intervals from data, not gut feel: run hours plus leakage trend

## 1. Dyeing Duty Profile

Dyeing and pretreatment lines use centrifugal pumps extensively for liquor, auxiliaries and water. Typical parameters:

- Medium temperature 40–130°C (polyester at 130°C, cotton pretreatment at 95–100°C)
- Pressure 0.2–0.6 MPa (main loop pumps at 25–40 m head)
- Media: water, dyes (disperse/reactive/vat), alkali (NaOH, Na₂CO₃), acid (acetic, citric), sodium hydrosulfite, scouring and softening agents
- Particles: fabric lint, fiber debris, undissolved dye agglomerates, scale

The 41.275 series envelope (-10 to 180°C, ≤ 0.8 MPa, ≤ 3000 rpm; dye liquor/chemicals/hot water) sits mid-band for this duty. The difficulty is not the ratings — it is **chemical cycling plus abrasion combined**.

### 1.1 How Chemical Cycling Attacks

The same process line swings from alkaline scouring (pH 10–12) to acidic reduction clearing (pH 3–4), several times a day. Effects on the seal:

- Resin-impregnated graphite tolerates dilute acid and alkali, but the face film cycles through saponification and neutralization, producing a different wear pattern than single-medium service
- High-chrome stainless mating faces show pitting tendency in the acid phase; SiC is unaffected
- Static O-rings fail first under chemical cycling: EPDM handles alkali and heat but swells in mineral oil; NBR handles oil but not alkali — dyeing practice standardizes on EPDM

### 1.2 Fibers and Lint

Cotton lint and synthetic debris (0.1–2 mm) circulate in the seal chamber. Soft as they are, they:

- Embed between faces as third bodies, cutting circumferential scoring into the mating face
- Block chamber circulation paths, causing local flashing and face heating
- Accumulate around springs and drive features, disturbing compensation

The answer is not harder materials but **keeping particles out**: 20–40 mesh suction strainers plus bypass filtration ahead of the chamber (filtered variants of Plan 11/12).

## 2. Impregnant and Mating Faces

### 2.1 Impregnant

By temperature:

| Temperature band | Recommended impregnant | Notes |
|---|---|---|
| ≤100°C (pretreatment, washing) | Resin | Low cost, dense, wear-resistant |
| 100–140°C (dyeing main loop) | Antimony or high-temp resin grade | Long-term 130°C service approaches resin glass-transition limits; select by grade ceiling |
| 140–180°C (HT beam/beck, thermosol) | Antimony | Sb grades only show full advantage above 220°C, but offer the best strength and temperature margin |

Sodium hydrosulfite is harmless to carbon but affects copper; dyeing rings are therefore **also not recommended in copper-impregnated form** (as in ammonia service — reducing chemistry plus temperature accelerates dissolution of the metal phase).

### 2.2 Mating Faces

- Dyeing main loop pumps: SiC seats. Under alternating acid/alkali plus fibers, SiC is the only face that survives both
- Washing/pretreatment auxiliary pumps: high-chrome stainless works, but life is visibly shorter than SiC in fiber-laden water
- Face width 4–6 mm: too narrow gets grooved by fibers, too wide gives uneven face-pressure distribution

### 2.3 Flange Static Seals

Dyeing equipment is flange-heavy (heat exchangers, filters, vessels) at 130°C with acid/alkali cycling:

- Prefer flexible-graphite composite gaskets (metal serrated core with graphite facing): temperature- and corrosion-resistant, re-tightenable
- Second choice: EPDM-clad or solid EPDM flat gaskets; control bolt torque by gasket compression (graphite faces need only 25–35 MPa surface pressure — tighter is not better)
- Never ordinary asbestos-rubber: dyeing-house heat, humidity and chemicals harden it quickly

## 3. Setting Replacement Intervals

The most common maintenance question: how long will this ring last? Answer with data.

**Two-indicator method**:

1. **Accumulated run hours**: dyeing seals typically see 3,000–5,000 h/year (two shifts) — use plant history
2. **Leakage trend**: log leakage at each inspection (trace/drip/stream), plot the trend; the moment it crosses from trace to drip is the planned-replacement window

Industry reference values (cotton/polyester blends, 130°C dyeing main loop, SiC faces, correct flush):

| Part | Reference life |
|---|---|
| Primary graphite ring | 4,000–8,000 h |
| SiC seat | 8,000–15,000 h (typically 2× the graphite ring) |
| O-rings | 1–2 years (thermal cycling + chemical alternation) |
| Springs | Replace with the seal |

Default strategy: **replace the graphite ring, keep the SiC seat**; replace seats only for chips or deep scoring — reuse is economical.

## 4. Installation and Maintenance

- **Cleaning**: at changeover, fully clean the chamber — old gasket fragments, dried dye and fiber wads are the abrasive source for the new seal
- **Alignment**: pump-motor alignment within 0.05 mm radial. Dyeing pumps are often pulled off by piping stress; verify with a dial indicator before installing the seal
- **Cooling / flush**: Plan 11 circulation plus chamber cooling jacket, holding chamber temperature 15°C below the medium boiling point; add filtered Plan 12 circulation for fiber-laden media
- **Inspection sheet**: leakage, chamber temperature, current, bearing noise — weekly, recorded
- **Spares management**: resin-impregnated graphite stored dark, FIFO; register O-ring batches and downgrade unused stock older than two years

## 5. Failure Quick Reference

| Symptom | Root cause | Action |
|---|---|---|
| Fine circumferential face scoring | Fibers/lint at the faces | Add filtration, clean chamber, check strainer ΔP |
| Localized face edge chipping | Fiber wad jam; stuck spring | Clean drive parts; replace spring |
| O-ring hardened within a week | Temperature above EPDM long-term limit or NBR used | Verify actual temperature; switch to high-temp EPDM |
| Sudden leakage increase | Pump vibration (bearing failure/cavitation) | Repair the pump before resealing |
| Fretting corrosion on seat OD | Insufficient seat O-ring squeeze or worn cavity | Replace O-ring or bush the cavity |

## Conclusion

Dyeing-machine seal selection compresses to three rules: **temperature sets impregnation (above 130°C go antimony), corrosion sets the mating face (alternating acid/alkali means SiC), abrasion is solved by filtration (keep fibers out of the chamber)**. The 41.275 series covers this duty by ratings; what actually determines life is filtration discipline and alignment accuracy, not the graphite grade itself.`,
    },
  },
  // 5. October 11, 2026 - Oil-free screw air compressor carbon ring seal
  {
    slug: "oil-free-screw-air-compressor-carbon-ring-seal",
    title: {
      zh: "无油螺杆空压机：隔离压缩腔的碳环密封原理与间隙控制",
      en: "Oil-Free Screw Air Compressors: Carbon Ring Seals That Isolate the Compression Chamber",
    },
    excerpt: {
      zh: "无油螺杆机的压缩腔不允许进一滴油，但轴承腔必须润滑——把两者隔开的就是轴端碳环密封。本文讲碳环的结构、间隙设计、密封气配置、磨损判据与检修周期，含食品/医药 0 级无油认证的关联要求。",
      en: "An oil-free screw compressor allows no oil into the compression chamber, yet the bearing chamber must be lubricated — the shaft-end carbon ring seal keeps them apart. This article covers carbon ring construction, clearance design, seal-gas configuration, wear criteria and overhaul intervals, including links to Class 0 oil-free certification for food and pharma.",
    },
    tag: "application",
    date: "2026-10-11",
    content: {
      zh: `## 核心要点

- 无油螺杆机转子不接触、无油润滑，轴端必须把"有油的轴承腔"和"无油的压缩腔"隔开，标准解是碳石墨分瓣碳环密封
- 碳环是"受控泄漏"密封：允许极小流量气体通过间隙维持压力平衡，不是零泄漏密封，间隙设计是核心
- 直径间隙典型 0.05~0.15 mm，与轴径、转速、压差相关；间隙过大泄漏量上升、过小抱环
- 密封气（缓冲气）必须洁净干燥，含油含水的气会把碳环变成污染源——这是医药 0 级认证现场最常见的失败点
- 检修判据看泄漏曲线与轴承温度，不看"还能不能转"；碳环寿命通常 8000~20000 小时

## 一、为什么无油螺杆机需要碳环

螺杆式空压机分喷油与无油两类：

- **喷油机**：油注入压缩腔，承担密封、冷却、润滑三大职能，轴端只需普通油封，压缩空气含油 3~10 ppm
- **无油机**：压缩腔无油，转子靠同步齿轮保持间隙，压缩空气理论上 0 油；但转子轴穿过轴承腔，轴承腔里有润滑油与润滑脂

如果轴端没有有效隔离，润滑油会被吸入压缩腔（开机负压阶段）或被压缩空气推入（停机与压力波动阶段），结果是：

1. 压缩空气含油，食品、医药、电子行业不可接受
2. 油进入压缩腔污染转子涂层，增加功耗
3. 排气温度升高，后处理设备（干燥机、过滤器）负荷增大

承担隔离的就是**碳环密封（carbon ring seal）**：装在轴端的一组分瓣碳石墨环，径向抱住轴（或轴套），允许极小流量气体通过，形成压力屏障。

### 1.1 碳环的结构

典型碳环组由 3~5 瓣碳石墨环 + 保持弹簧 + 壳体槽组成：

- 每瓣环为 120°（三瓣）或 90°（四瓣）扇形，外圆被弹簧箍紧在壳体内
- 环的内圆与轴之间是间隙配合，不接触（或极轻微接触）
- 环被止转销限制在壳体内，不随轴旋转
- 压缩腔侧与轴承腔侧之间由环与环的对接缝、环与壳体的间隙构成曲折路径

**注意区分**：本站 [TP 系列碳石墨三瓣环](/products/three-part-series) 就是这类结构的元件（标称 ≤ 10 MPa、≤ 15 m/s、-40℃ ~ 280℃），既用于压缩机轴封，也用于离心泵、船舶设备与蒸汽透平。分瓣数越多、对接缝越曲折，泄漏越小，但结构越复杂、成本越高。

## 二、间隙设计

碳环不是接触密封，是**限流密封**。设计思路是让通过间隙的泄漏量小到可以接受，同时环与轴不接触。

### 2.1 间隙量级

工程上的通行口径（空气介质、常温）：

| 轴径 | 直径间隙 | 说明 |
|---|---|---|
| 25~50 mm | 0.05~0.08 mm | 小型机主轴 |
| 50~100 mm | 0.08~0.12 mm | 主流机型 |
| 100 mm 以上 | 0.10~0.15 mm | 大型机、双轴伸 |

间隙受三个因素拉扯：

- **压差**：轴承腔与压缩腔压差越大，泄漏量按间隙的立方增长，高压级要收紧间隙
- **转速**：线速度高时有"气膜浮起"效应，间隙可略放大；低速重载反而要留余量防抱环
- **温度**：碳的热膨胀系数约 2~5×10⁻⁶/℃，比钢（约 12×10⁻⁶/℃）小，升温时钢轴涨得多、间隙变大——冷态间隙按热态核算

### 2.2 密封气（缓冲气）配置

碳环必须配密封气，这是最容易被现场忽视的一环：

- 气源：仪表级压缩空气或氮气，露点 ≤ -20℃（常压露点），含油量 ≤ 0.01 mg/m³
- 压力：略高于压缩腔侧 0.01~0.05 MPa，保证气体流向压缩腔（外向流），而不是轴承腔的油雾流向压缩腔
- 流量：以泄漏曲线上"压力稳定所需最小流量"标定，过量密封气是浪费，不足则失去屏障作用
- 必须除油除水：带油的密封气等于把油直接送进压缩腔，比不设密封气更糟

## 三、磨损与判据

### 3.1 失效机理

| 阶段 | 现象 | 机理 |
|---|---|---|
| 磨合期 | 泄漏量偏大后回落 | 瓣间对接缝与内圆毛刺磨平 |
| 稳定期 | 泄漏量平稳 | 间隙稳定，无接触 |
| 劣化期 | 泄漏量持续上升 | 内圆出现沟槽（进气带尘/油碳化颗粒）、瓣间缝磨损 |
| 失效 | 泄漏量陡增、轴承腔窜气 | 环断裂或弹簧松弛 |

进气质量是寿命的第一变量：螺杆机进气过滤器失效后，粉尘进入压缩腔，虽大部分被转子与排气带走，但细颗粒会在碳环内圆"犁沟"，几个月内把间隙磨大 2~3 倍。

### 3.2 检修判据

不看"还能不能转"，看三个量化指标：

1. **泄漏曲线**：每周记录密封气流量与压缩腔含油趋势；流量缓慢爬升是正常的劣化信号，陡增是断裂信号
2. **轴承温度**：碳环抱轴时轴承温度先升（摩擦热），此时立即停机，否则几分钟内就能咬死
3. **排气含油检测**：在线或定期取样，含油量上升是隔离失效的直接证据（气相色谱或简易油蒸气试纸）

### 3.3 换环周期

行业参考（密封气合格、进气过滤正常、两班制）：

- 碳环组寿命 8000~20000 小时，通常与轴承大修周期（约 20000~40000 小时）错开安排
- 换环时**整套更换**（含弹簧与保持件），新旧混装会因刚度差异导致单环过载
- 装机前的清洁度：碳环孔隙会吸油，装配环境与工具必须无油；新环有防潮包装时不要提前拆封

## 四、与 0 级无油认证的关联

食品、医药行业要求压缩空气符合 ISO 8573-1 的 0 级无油（含油量 ≤ 0.005 mg/m³ 量级，按 GB/T 13277 或合同约定）。碳环密封是该认证链上的一环：

- 压缩机本体：无油螺杆机 + 碳环隔离
- 密封气：必须 0 级气源（通常从后处理洁净端引气，自成回路）
- 后处理：吸附式干燥机 + 高效过滤器组，过滤器按压差更换
- 验证：验收时做含油检测 + 颗粒检测，运行期间按季度复检

现场最常见的失败点就是**密封气从含油的仪表空气母管取气**——认证检查时数据漂亮，运行一个月后压缩空气含油超标。取气点必须放在无油系统的后处理之后。

## 五、安装要点

| 环节 | 要求 |
|---|---|
| 装配清洁 | 无油环境；手汗、油脂都会渗进碳环孔隙，运行中碳化结焦 |
| 壳体槽检查 | 槽内不得有拉伤、锈迹；弹簧自由长度一致（误差 < 2%） |
| 止转销 | 位置准确、无磨损；错位会让环被带着转，几天就磨坏 |
| 轴/轴套 | 表面硬度与粗糙度足够（Ra ≤ 0.4 μm），无轴向划痕 |
| 盘车 | 装配后手动盘车，确认无碰擦；密封气建立后才能开机 |

## 结语

无油螺杆机的碳环密封是"小间隙大学问"：结构简单（几瓣碳石墨环 + 弹簧），但间隙、密封气、清洁度三件事任何一件没做好，压缩腔就会进油。对追求 0 级无油的用户，选型重点不在碳环本身，而在**密封气从哪里取、有多干、有多干净**。把密封气做对，碳环跑 15000 小时以上是常态；做不对，几千小时就要拆机。`,
      en: `## Key Points

- An oil-free screw compressor allows no oil into the compression chamber while the bearing chamber must be lubricated; the shaft-end carbon ring seal performs the isolation
- Carbon rings are controlled-leakage seals: a small gas flow through the clearance maintains the pressure barrier — they are not zero-leakage seals, and clearance design is the core
- Typical diametral clearance: 0.05–0.15 mm, scaled with shaft diameter, speed and pressure differential; too large leaks, too small seizes
- Seal (buffer) gas must be clean and dry; oily or wet gas turns the carbon ring into a contamination source — the most common failure point in Class 0 oil-free audits
- Judge condition by leakage trend and bearing temperature, not by "does it still turn"; carbon ring life is typically 8,000–20,000 hours

## 1. Why Oil-Free Screws Need Carbon Rings

Screw compressors split into oil-flooded and oil-free:

- **Oil-flooded**: oil is injected into the compression chamber for sealing, cooling and lubrication; the shaft end needs only a lip seal, and air carries 3–10 ppm oil
- **Oil-free**: no oil in the chamber, rotors held apart by timing gears, air nominally oil-free; but the rotor shafts pass through bearing chambers containing oil and grease

Without effective shaft-end isolation, bearing oil gets drawn into the chamber (negative pressure at startup) or pushed in (shutdown and pressure swings), causing:

1. Oil in the compressed air — unacceptable for food, pharma and electronics
2. Oil contamination of rotor coatings, raising power draw
3. Higher discharge temperature and heavier load on downstream dryers and filters

The isolator is the **carbon ring seal**: a set of segmented carbon graphite rings at the shaft end that hug the shaft (or sleeve) radially, pass a very small gas flow, and form a pressure barrier.

### 1.1 Carbon Ring Construction

A typical stack is 3–5 segmented carbon graphite rings plus retaining springs in a housing:

- Each segment is a 120° (three-segment) or 90° (four-segment) arc, sprung against the housing
- The bore runs with a clearance over the shaft — no contact, or extremely light contact
- Anti-rotation pins hold the stack in the housing so it does not spin with the shaft
- Chamber side and bearing side are separated by segment butt joints and housing clearances forming a tortuous path

**Note**: the [TP-series carbon graphite three-segment rings](/products/three-part-series) on this site are exactly this component (rated ≤ 10 MPa, ≤ 15 m/s, -40 to 280°C), used on compressor shaft ends as well as centrifugal pumps, marine equipment and steam turbines. More segments and more tortuous paths mean less leakage but more complexity and cost.

## 2. Clearance Design

Carbon rings are not contact seals — they are **flow-restricting seals**. The design passes a small, acceptable leakage while keeping the ring off the shaft.

### 2.1 Clearance Magnitudes

Common practice (air, ambient):

| Shaft diameter | Diametral clearance | Application |
|---|---|---|
| 25–50 mm | 0.05–0.08 mm | Small machine main shafts |
| 50–100 mm | 0.08–0.12 mm | Mainstream machines |
| >100 mm | 0.10–0.15 mm | Large machines, double shaft ends |

Three forces pull the clearance:

- **Pressure differential**: leakage scales roughly with clearance cubed, so high-pressure stages tighten clearance
- **Speed**: high surface speed gives an air-film lift effect, allowing slightly larger clearance; low-speed heavy duty needs margin against seizure
- **Temperature**: carbon CTE is about 2–5×10⁻⁶/°C versus steel's ~12×10⁻⁶/°C, so heating opens the gap — size cold clearance from hot calculation

### 2.2 Seal Gas Configuration

Seal gas is mandatory and is the most overlooked item in the field:

- Source: instrument-grade air or nitrogen, pressure dew point ≤ -20°C, oil content ≤ 0.01 mg/m³
- Pressure: 0.01–0.05 MPa above chamber side so flow is outward toward the chamber, not bearing-chamber oil mist inward
- Flow: set at the minimum that stabilizes pressure on the leakage curve; excess is waste, shortage loses the barrier
- Must be oil- and water-free: oily seal gas injects oil straight into the chamber — worse than no seal gas at all

## 3. Wear and Criteria

### 3.1 Failure Mechanism

| Stage | Symptom | Mechanism |
|---|---|---|
| Break-in | High leakage settling down | Butt joints and bore burrs smoothing |
| Stable | Flat leakage | Stable clearance, no contact |
| Degradation | Rising leakage | Bore grooving (dust or carbonized oil particles), butt-joint wear |
| Failure | Leakage jump, chamber-to-bearing blowby | Ring fracture or spring relaxation |

Inlet air quality is the first variable in life: a failed intake filter lets dust into the chamber; most exits with the flow, but fines plow grooves in the carbon bore and can multiply clearance 2–3× within months.

### 3.2 Overhaul Criteria

Three quantitative indicators, not "does it still turn":

1. **Leakage curve**: weekly log of seal-gas flow and chamber oil trend; slow creep is degradation, a jump is fracture
2. **Bearing temperature**: when a carbon ring rubs the shaft, bearing temperature rises first (friction heat) — stop immediately or it seizes within minutes
3. **Discharge oil check**: online or periodic sampling; rising oil is direct evidence of isolation failure (GC or simple oil-vapor paper)

### 3.3 Replacement Interval

Reference (qualified seal gas, normal intake filtration, two-shift operation):

- Carbon stack life 8,000–20,000 h, usually scheduled between bearing overhauls (~20,000–40,000 h)
- **Replace the stack as a set** including springs and retainers; mixing old and new overloads individual segments through stiffness differences
- Cleanliness at assembly: carbon pores absorb oil, so assembly environment and tools must be oil-free; do not open moisture-barrier packaging early

## 4. Link to Class 0 Oil-Free Certification

Food and pharma require compressed air to ISO 8573-1 Class 0 oil-free (oil content around ≤ 0.005 mg/m³, per GB/T 13277 or contract). The carbon ring is one link in that chain:

- Compressor: oil-free screw plus carbon ring isolation
- Seal gas: must itself be Class 0 — normally tapped from downstream of the treatment train, forming its own loop
- Treatment: desiccant dryer plus filter train, filters changed on ΔP
- Verification: oil and particle testing at acceptance, requalified quarterly

The most common audit failure is **tapping seal gas from the oily instrument-air header** — numbers look good during the audit, then air goes out of spec within a month. The tap point must be after oil-free treatment.

## 5. Installation Checklist

| Stage | Requirement |
|---|---|
| Assembly cleanliness | Oil-free environment; sweat and grease soak into carbon pores and carbonize in service |
| Housing bore check | No scoring or rust; spring free lengths consistent (within 2%) |
| Anti-rotation pins | Correct position, no wear; misalignment spins the stack and destroys it in days |
| Shaft / sleeve | Adequate hardness and finish (Ra ≤ 0.4 μm), no axial scratches |
| Barring | Hand-rotate after assembly to confirm no rub; seal gas must be established before start |

## Conclusion

The oil-free screw carbon ring is "small clearance, deep discipline": mechanically simple — a few graphite segments and springs — but if clearance, seal gas or cleanliness is wrong, oil enters the chamber. For Class 0 users, the selection effort belongs not on the ring itself but on **where the seal gas comes from, how dry and how clean it is**. Get seal gas right and 15,000+ hours is routine; get it wrong and teardown comes within a few thousand hours.`,
    },
  },
  // 6. October 13, 2026 - 1527 series fit tolerance
  {
    slug: "1527-series-seal-ring-fit-tolerance",
    title: {
      zh: "1527系列石墨环的配合公差与密封腔设计",
      en: "1527 Series Graphite Rings: Fit Tolerances and Seal Cavity Design",
    },
    excerpt: {
      zh: "1527系列是常见的通用规格石墨环（-20℃~180℃、≤0.8 MPa、≤3500 rpm）。同一只环，配合选松了串压泄漏、选紧了抱套碎裂。本文给出一套可直接照抄的配合公差、密封腔尺寸链与防转结构设计口径。",
      en: "The 1527 series is a common general-purpose graphite ring (-20 to 180°C, ≤ 0.8 MPa, ≤ 3500 rpm). The same ring leaks if fitted loose and cracks if fitted tight. This article gives a copy-ready set of fit tolerances, seal-cavity dimension chains and anti-rotation design practice.",
    },
    tag: "precision",
    date: "2026-10-13",
    content: {
      zh: `## 核心要点

- 石墨环有三处配合：外径对密封腔（动配合，要滑得动又不能太松）、内径对轴套（静配合或轻推合）、端面与弹簧/传动件（力传递）
- 外径推荐 H9/f8 或 H8/f7 量级间隙配合，间隙按环外径的 0.05%~0.15% 取；内径与轴套取 H7/js6 过渡配合附近，禁止过盈
- 密封腔深度按端面磨损余量 + 弹簧工作行程设计，轴向窜量一般预留 1.5~3 mm
- 防转是高速工况的第一失效项：防转销与槽单边间隙 0.3~0.8 mm，位置必须在最大弯矩最小的方位
- 同轴度链：腔体-轴套-轴，任一环节超差都会让端面偏磨，最终表现是泄漏量随运行时间持续上升

## 一、三处配合，三种逻辑

很多人把"石墨环装上不漏"当成一个尺寸问题，实际是三处不同性质的配合：

| 部位 | 配合性质 | 功能 | 选错后果 |
|---|---|---|---|
| 外径 ↔ 密封腔 | 动配合（间隙） | 环要能轴向浮动补偿磨损 | 过松：环倾斜、偏磨；过紧：抱腔卡死 |
| 内径 ↔ 轴套 | 静配合/轻推合 | 传递扭矩（静环侧）或随动 | 过盈：内孔开裂；间隙大：偏摆 |
| 端面 ↔ 弹簧/传动座 | 力接触 | 端面比压来源 | 偏载：端面一端磨损一端不磨 |

1527 系列标称 -20℃ ~ 180℃、≤ 0.8 MPa、≤ 3500 rpm，属于中低参数通用件，三处配合的容错度比高压高速件大，但设计口径是相通的。

### 1.1 外径配合

外径间隙的作用是让石墨环在密封腔内轴向浮动，同时补偿热膨胀与制造误差。碳的热膨胀系数约 2~5×10⁻⁶/℃，只有钢的 1/3 左右，所以升温时环的膨胀远小于腔体——**外径间隙随温度升高而变大，冷态设计是偏安全的**。

推荐口径：

- 环外径 ≤ 50 mm：间隙 0.03~0.06 mm（H9/f8 量级）
- 环外径 50~100 mm：间隙 0.05~0.10 mm
- 环外径 > 100 mm：间隙 0.08~0.15 mm

换算成比例就是外径的 0.05%~0.15%。腔内表面粗糙度 Ra ≤ 1.6 μm，避免划伤石墨外径（石墨外径被划伤后，划痕会成为泄漏通道，而且现场无法修复）。

### 1.2 内径配合

内径对轴套的配合要看环的角色：

- **静环（不转的那只）**：与轴套之间是密封间隙，不是配合间隙。端面之外的径向间隙按 0.5~1.5 mm 设计，偏大无妨
- **动环（随轴转的那只）**：与轴套是传递扭矩的静配合，取 H7/js6 或 H7/k6 量级。石墨抗压不抗拉，**严禁过盈压入**——过盈产生的径向拉应力会让环在运行中沿内孔开裂，裂纹从内孔向外扩展，断口齐整

压装动环时用柔性套筒均匀加压，禁止直接锤击；压入后测内孔圆度，变化超过 0.01 mm 说明压装应力过大。

### 1.3 端面配合

端面比压由弹簧通过传动座作用在动环上。两个要点：

- 接触面要均匀：传动座与环的接触面平面度 0.02 mm 以内，局部高点会让环在运行中微裂
- 比压按介质定：清水类 0.2~0.4 MPa，油类 0.3~0.5 MPa。比压过小液膜太厚泄漏大，过大磨痕发热、石墨崩边

## 二、密封腔尺寸链

一只石墨环的安装腔至少包含五个尺寸：腔体内径 D、腔体深度 H、轴套外径 d、轴套定位台阶、防转槽位置。

### 2.1 深度设计

H = 环高 h + 弹簧工作行程 s + 磨损余量 w + 装配余量 a

- 弹簧工作行程 s：补偿磨损 + 吸振，一般 2~4 mm
- 磨损余量 w：石墨环端面允许磨损 1~2 mm，超过后端面比压失控，必须留出这个量
- 装配余量 a：0.5~1 mm，照顾压装工具与测量误差

举例：环高 8 mm、行程 3 mm、磨损 1.5 mm、装配 0.5 mm → 腔深 13 mm。腔浅了环被顶住无法浮动，腔深了环偏摆。

### 2.2 同轴度链

端面偏磨的根源几乎都在同轴度链：

| 环节 | 公差 | 测量 |
|---|---|---|
| 腔体对轴颈径向跳动 | ≤ 0.05 mm | 百分表打腔口 |
| 轴套对轴径向跳动 | ≤ 0.03 mm | 百分表打轴套外圆 |
| 轴径向跳动（轴承处） | ≤ 0.05 mm | 百分表打轴外圆 |
| 端面对轴线垂直度 | ≤ 0.02 mm | 环装在轴上打端面 |

任何一环超差，端面就会出现"单边接触"：接触侧快速磨损、不接触侧保持锋利，端面宽度变小、比压上升，形成恶性循环。

### 2.3 防转结构

防转槽/防转孔是石墨环的"保险丝"：

- 销与槽单边间隙 0.3~0.8 mm，间隙大了环仍能转动，间隙小了热膨胀卡死
- 销的位置避开最大弯矩方位，尽量靠近压缩量最小的区域
- 高速工况（> 3000 rpm）优先用宽防转槽 + 扁销，比圆销抗剪面积大
- 防转件必须用不锈钢，禁用铜件（氨、还原性化工介质会腐蚀）

没有防转的后果：环与轴之间只有摩擦传扭，转速上去后环"扫描"，端面几小时内磨出台阶。

## 三、维修现场的口径

设备维修方拿不到装配图时，用这套办法反推：

1. 测旧环外径、内径、总高、端面宽度，与样本对比
2. 测密封腔内径、深度，反推原配合
3. 看旧环磨损形貌：外径划伤=原配合过紧；内孔裂纹=压装过盈；端面偏磨=同轴度问题
4. 换环时同批校核轴套跳动，别只换环不修泵

常见失误：把石墨环当"耐磨橡胶圈"对待——用锤砸、拿台钳夹、和油污工具堆在一起。石墨环是脆性结构件，任何冲击载荷和油浸都会缩短寿命。

## 四、验收清单

| # | 项目 | 合格判据 |
|---|---|---|
| 1 | 外观 | 无崩边、裂纹、色差（浸渍不匀会表现为端面色斑） |
| 2 | 尺寸 | 外径、内径、总高符合图样，关键尺寸按批次抽检 |
| 3 | 平面度 | 端面按光圈法 1~2 条，或平晶测量 ≤ 0.9~1.8 μm（按环径） |
| 4 | 粗糙度 | 端面 Ra ≤ 0.2 μm |
| 5 | 浸渍质量 | 断面观察孔隙填充，无贯穿大气孔 |
| 6 | 配研 | 与对磨面配研，接触带连续、宽度符合设计 |

## 结语

1527 这类通用石墨环的失效，七成在配合与安装，三成在材料。把外径间隙按 0.05%~0.15% 外径取、内径严禁过盈、防转间隙留 0.3~0.8 mm、同轴度链逐项校核——这四条做到，同一只环的寿命可以差出 3 倍以上。修泵时先测同轴度再换密封，是最便宜的可靠性投资。`,
      en: `## Key Points

- A graphite ring has three fits: OD to cavity (running fit — slides but not loose), ID to sleeve (static or light push), face to spring/drive (force transfer)
- OD: H9/f8 or H8/f7 class clearance at 0.05%–0.15% of OD; ID to sleeve near H7/js6 transition — never interference
- Cavity depth = face wear allowance + spring working travel; axial float typically 1.5–3 mm
- Anti-rotation is the first failure item at speed: pin-to-slot single-sided clearance 0.3–0.8 mm, positioned away from peak bending
- The concentricity chain cavity–sleeve–shaft: any weak link shows up as edge wear and leakage that climbs with run time

## 1. Three Fits, Three Logics

"Fits and doesn't leak" is not one dimensional problem but three different fits:

| Location | Fit type | Function | If wrong |
|---|---|---|---|
| OD ↔ cavity | Running (clearance) | Axial float to compensate wear | Loose: tilt and edge wear; tight: seized |
| ID ↔ sleeve | Static / light push | Torque transmission (rotating side) | Interference: bore cracking; loose: wobble |
| Face ↔ spring/drive seat | Force contact | Face pressure source | Off-center load: one-sided wear |

The 1527 series (-20 to 180°C, ≤ 0.8 MPa, ≤ 3500 rpm) is a mid-range general-purpose ring with more fit tolerance than high-pressure/high-speed parts, but the design logic is the same.

### 1.1 OD Fit

OD clearance lets the ring float axially in the cavity and absorbs thermal and manufacturing variation. Carbon CTE is about 2–5×10⁻⁶/°C, roughly a third of steel, so on heating the cavity grows more than the ring — **OD clearance opens with temperature, so cold design is the conservative case**.

Recommended practice:

- OD ≤ 50 mm: clearance 0.03–0.06 mm (H9/f8 class)
- OD 50–100 mm: clearance 0.05–0.10 mm
- OD > 100 mm: clearance 0.08–0.15 mm

In proportion: 0.05%–0.15% of OD. Cavity surface finish Ra ≤ 1.6 μm — a scratched graphite OD becomes a permanent leak path that cannot be repaired in the field.

### 1.2 ID Fit

ID fit depends on the ring's role:

- **Seat (stationary ring)**: the ID is a sealing clearance, not a fit. Radial gap outside the face 0.5–1.5 mm; larger is acceptable
- **Rotating ring**: ID to sleeve transmits torque — H7/js6 or H7/k6 class. Graphite is strong in compression and weak in tension, so **interference pressing is prohibited**: radial tensile stress cracks the ring in service, with cracks running outward from the bore and clean fracture faces

Press rotating rings with a soft sleeve for even load, never hammer; after pressing, check bore roundness — a change over 0.01 mm indicates excessive assembly stress.

### 1.3 Face Fit

Face pressure comes from the spring through the drive seat. Two points:

- Even contact: drive-seat flatness within 0.02 mm; a local high spot micro-cracks the ring in service
- Face pressure by medium: water 0.2–0.4 MPa, oil 0.3–0.5 MPa. Too low and the film is too thick (leakage); too high and wear heats the face and chips the graphite edge

## 2. Seal Cavity Dimension Chain

A ring cavity involves at least five dimensions: cavity ID D, cavity depth H, sleeve OD d, sleeve shoulder, anti-rotation slot position.

### 2.1 Depth Design

H = ring height h + spring working travel s + wear allowance w + assembly allowance a

- Spring travel s: absorbs wear and vibration, typically 2–4 mm
- Wear allowance w: 1–2 mm of face wear is acceptable; beyond it face pressure runs away, so the cavity must allow for it
- Assembly allowance a: 0.5–1 mm for tooling and measurement error

Example: ring height 8 mm, travel 3 mm, wear 1.5 mm, assembly 0.5 mm → cavity depth 13 mm. Too shallow and the ring cannot float; too deep and it wobbles.

### 2.2 Concentricity Chain

Edge wear almost always traces to the chain:

| Link | Tolerance | Measurement |
|---|---|---|
| Cavity-to-shaft runout | ≤ 0.05 mm | Dial indicator at cavity mouth |
| Sleeve-to-shaft runout | ≤ 0.03 mm | Indicator on sleeve OD |
| Shaft runout at bearing | ≤ 0.05 mm | Indicator on shaft OD |
| Face-to-axis squareness | ≤ 0.02 mm | Indicator on face with ring mounted |

Any weak link gives one-sided face contact: the contact side wears fast, the other stays sharp, face width shrinks, pressure rises — a vicious cycle.

### 2.3 Anti-Rotation Design

The anti-rotation slot/pin is the ring's fuse:

- Pin-to-slot single-sided clearance 0.3–0.8 mm; too large and the ring still rotates, too small and thermal growth jams it
- Position the pin away from peak bending, near minimum compression
- High speed (> 3000 rpm): prefer a wide slot with a flat pin over a round pin — more shear area
- Anti-rotation parts must be stainless, never copper (ammonia and reducing chemistries corrode it)

Without anti-rotation, torque passes by friction only; at speed the ring scans and a step is worn into the face within hours.

## 3. Field Practice Without Drawings

When maintenance crews have no assembly drawing, reverse-engineer:

1. Measure the old ring: OD, ID, height, face width; compare with samples
2. Measure cavity ID and depth to infer the original fits
3. Read the wear pattern: scored OD = fit was tight; bore cracks = pressing interference; edge wear = concentricity problem
4. On ring replacement, check sleeve runout at the same time — replace the ring without fixing the pump is half a job

The classic mistake is treating a graphite ring like a wear-resistant rubber seal — hammered, clamped in a vise, stored with oily tools. It is a brittle structural part; any impact load or oil soak shortens life.

## 4. Acceptance Checklist

| # | Item | Acceptance |
|---|---|---|
| 1 | Visual | No chips, cracks or color banding (uneven impregnation shows as face blotching) |
| 2 | Dimensions | OD, ID, height per drawing; key dimensions sampled by batch |
| 3 | Flatness | Face 1–2 interference fringes, or optical flat ≤ 0.9–1.8 μm by ring size |
| 4 | Roughness | Face Ra ≤ 0.2 μm |
| 5 | Impregnation | Cross-section pore filling without through-voids |
| 6 | Lapping | Continuous contact band of specified width against the mating face |

## Conclusion

For general-purpose rings like the 1527 series, seven failures in ten come from fits and installation, three from material. Take OD clearance at 0.05%–0.15% of OD, never use ID interference, leave 0.3–0.8 mm at the anti-rotation pin, and check the concentricity chain link by link — those four rules alone can triple ring life. Measuring concentricity before resealing is the cheapest reliability investment there is.`,
    },
  },
  // 7. October 15, 2026 - Galvanic corrosion
  {
    slug: "graphite-seal-stainless-shaft-galvanic-corrosion",
    title: {
      zh: "石墨与不锈钢轴的海水电偶腐蚀：机理、征兆与三种对策",
      en: "Galvanic Corrosion Between Graphite and Stainless Shafts in Seawater: Mechanism, Symptoms and Three Countermeasures",
    },
    excerpt: {
      zh: "石墨在海水中的电极电位比不锈钢贵 0.3 V 以上，配对使用时不锈钢轴是阳极、被腐蚀，石墨环反而完好——这类失效常被误判为「轴质量不行「。本文讲电偶序、失效加速条件，以及换对磨面、非金属轴套、表面强化三种对策的取舍。",
      en: "Graphite sits more than 0.3 V nobler than stainless in seawater, so in the pair the stainless shaft is the anode and corrodes while the graphite ring survives — a failure often misdiagnosed as a bad shaft. This article covers the galvanic series, accelerating conditions, and the trade-offs among changing mating faces, non-metallic sleeves and surface hardening.",
    },
    tag: "maintenance",
    date: "2026-10-15",
    content: {
      zh: `## 核心要点

- 石墨是电化学上的"贵金属"（阴极），不锈钢在海水里相对活泼（阳极）；石墨环 + 不锈钢轴这一对，腐蚀发生在大面积阳极-小面积阴极的错配下，轴被加速腐蚀
- 典型现象：不锈钢轴套/轴在密封位附近出现点蚀、锈迹、甚至咬死，而石墨环看起来"还很好"
- 加速条件：高电导率介质（海水、盐水）、高温、缝隙滞留、轴表面有钝化膜破损
- 对策按成本排序：换 SiC 对磨面（消除大电位差）、轴表面强化（镀铬/喷 WC）、改用非金属轴套；牺牲阳极在紧凑密封腔内基本不可行
- 诊断方法：看腐蚀只发生在石墨接触带附近、其余轴面无事——这就是电偶腐蚀的指纹

## 一、机理：一对"反直觉"的组合

碳材料（石墨、碳石墨）在电化学序中的位置接近贵金属。在海水（典型电导率 3~5 S/m）中，石墨的稳定电位约在 +0.2 ~ +0.35 V（相对饱和甘汞电极 SCE），而 304/316 不锈钢的自然腐蚀电位在 -0.05 ~ -0.15 V（SCE）附近。**石墨比不锈钢贵 0.3 V 以上**。

电偶腐蚀三要素：电位差、电解质通路、电子通路。石墨环与不锈钢轴的组合三要素全齐：

1. **电位差** 0.3 V 以上，足以驱动可观的腐蚀电流
2. **电解质**：海水泵、冷却水泵、反渗透浓水、沿海大气中的盐雾环境都是高电导率介质
3. **电子通路**：轴与环的接触面本身就是导电接触

结果是：不锈钢轴成为阳极，发生 Fe → Fe²⁺ + 2e⁻ 的溶解；石墨环成为阴极，只发生氧还原反应，本身不消耗。腐蚀电流在轴表面流动，流速由面积比决定——**小阳极-大阴极的组合最致命**，反之大阳极-小阴极尚可容忍。石墨环的密封面通常只有轴套的一小部分，但如果腐蚀集中在接触带，局部电流密度依然很高。

还有一个加重因素：**缝隙腐蚀**。石墨环与轴之间的狭窄间隙里，氧扩散受限，形成氧浓差电池；同时海水中的 Cl⁻ 在缝隙内富集，点蚀电位下降。接触带附近因此比开阔轴面腐蚀快数倍。

## 二、现场征兆

被电偶腐蚀的设备，现场表现很有特征：

| 部位 | 现象 |
|---|---|
| 石墨环 | 端面/内孔基本完好，可能只有正常磨痕；拆下来"看着还能用" |
| 轴套接触带 | 发暗、点蚀坑、沿圆周的锈迹带；擦净后不久复现 |
| 接触带以外轴面 | 基本完好，光泽度正常 |
| 运行参数 | 扭矩逐渐上升，电流缓慢爬升；严重时抱轴卡死 |
| 拆检 | 轴套接触带可摸到粗糙感或环形沟槽，石墨环内孔可见嵌入的腐蚀产物 |

**诊断指纹**：腐蚀严格限制在石墨接触带附近，轴的其他部位完好。这与单纯的材料腐蚀（整轴均匀生锈）或磨损（轴面光滑、间隙大）完全不同。

常见误判：

- "轴的材料不行，换好钢"——换双相钢 2205/2507 只能延缓，电位差依然存在，不解决电偶问题
- "石墨环磨的"——石墨比不锈钢软得多，磨不出沟槽；沟槽是不锈钢被腐蚀-剥落后的形貌
- "海水就这样"——同等介质下 SiC 对磨的同类泵可以稳定运行，差别就在电位差

## 三、三种对策

### 3.1 换 SiC 对磨面（首选）

把不锈钢对磨面换成反应烧结碳化硅（Rb-SiC）或无压烧结 SiC：

- SiC 在海水中的电位比不锈钢更负（接近惰性但电位差小），与石墨的电位差远小于不锈钢-石墨对
- 硬度 HRA 90 以上，抗磨粒磨损，海水含砂工况一并受益
- 导热优于不锈钢，端面摩擦热导出更快，热裂风险下降

代价：SiC 件成本是不锈钢的 3~8 倍，且脆性大，安装与冲击载荷场合要小心。对连续运行的海水泵、船用泵、反渗透高压泵，这个代价通常值得。

### 3.2 轴表面强化（改造项目常用）

不动密封结构，只改轴/轴套表面：

| 工艺 | 效果 | 注意 |
|---|---|---|
| 镀硬铬 | 电位差减小，耐蚀性提升；硬度 HV 800~1000 | 镀层孔隙是弱点，厚镀（>50 μm）才可靠 |
| 喷涂碳化钨（HVOF WC-Co） | 硬度 HV 1000~1300，结合强度高 | 封孔处理后耐蚀性才好 |
| 喷涂陶瓷（Al₂O₃/Cr₂O₃） | 完全绝缘电偶通路 | 磨削后需封孔；厚涂层均匀性难控制 |

原理有两层：提高表面硬度降低磨损，同时改变表层电位/钝化状态减小电偶驱动力。表面强化对已装机泵的改造最友好——只换轴套，不动密封腔。

局限：镀层/涂层一旦被磨穿（尤其含砂海水），下层基材重新暴露，腐蚀加速。所以表面强化必须与过滤、控制含砂量配合。

### 3.3 非金属轴套（新设计）

把轴套整体改成非金属：

- PEEK（聚醚醚酮）：强度高、自润滑、电位远离不锈钢轴，但导热差、耐温 ~250℃、成本高
- 陶瓷（SiC/Al₂O₃）：电位与耐磨都理想，脆性是约束
- 碳石墨轴套 + 非金属轴（如陶瓷轴）：极端方案，用于小功率、洁净场合

非金属方案从根上消除电偶对，但设计自由度小（轴的结构、连接方式都要跟着变），一般用于新机型或关键工位。

### 3.4 关于牺牲阳极

有现场问"在密封腔里塞块锌板行不行"。理论上牺牲阳极（锌，约 -1.0 V SCE）会同时保护不锈钢轴和不被石墨拖累，但工程上基本不可行：

- 密封腔空间极小，锌块面积与保护电流不足
- 锌块消耗产物（氢氧化锌）是磨粒，会污染密封面
- 海水流动下锌块安装固定困难

真正需要整体阴极保护的场景（如海水管路、阀门），属于系统设计问题，不是密封腔内能解决的。

## 四、预防性维护清单

| # | 措施 | 周期 |
|---|---|---|
| 1 | 停机检查轴套接触带：擦净后 30 分钟内是否复现锈迹 | 每 3~6 个月 |
| 2 | 监测密封泄漏量与电机电流趋势（电偶腐蚀导致间隙变化的先行指标） | 每月 |
| 3 | 控制介质含砂与电导率（海水取水管口避开海底沉积物再悬浮区） | 设计阶段 + 定期水质 |
| 4 | 大修时测轴套接触带粗糙度与沟槽深度，> 0.1 mm 即换套 | 大修 |
| 5 | 换对磨面时直接升级 SiC，不要重复不锈钢方案 | 改造决策 |

## 五、失效复盘示例

一条典型的复盘路径：

1. 某船用冷却水泵（海水介质、304 轴套、石墨环）运行 6 个月后电流上升 15%，泄漏量增加
2. 拆检：石墨环端面正常，轴套接触带点蚀 + 环形沟槽，沟槽深度约 0.15 mm
3. 误判为轴套质量问题，换 316 轴套；3 个月后同样问题复现（316 与 304 电位接近，换材无效）
4. 改用 SiC 静环 + 原 304 轴套（或同时镀铬），同类泵运行 2 年无异常

这个案例的教训：**看到"轴坏环好"，先想电偶腐蚀，不要先怀疑材料等级**。换更高牌号不锈钢是最常见的无效投入。

## 结语

石墨-不锈钢在海水中的组合是一个"贵阴极配贱阳极"的经典陷阱：环没事、轴先坏，而且坏在不起眼的接触带上。选型阶段就把对磨面定为 SiC，是最简单也最彻底的对策；改造项目用表面强化；新设计可以考虑非金属轴套。牺牲阳极不要指望——密封腔里没有它的位置。`,
      en: `## Key Points

- Graphite sits high in the galvanic series (cathodic); stainless is relatively active (anodic) in seawater. In the graphite-ring + stainless-shaft pair, the shaft corrodes while the ring survives
- Typical signs: pitting, rust or seizure on the stainless sleeve near the seal band, with the graphite ring looking "fine"
- Accelerators: high-conductivity media (seawater, brine), high temperature, crevice stagnation, damaged passive film
- Countermeasures by cost: switch to SiC mating faces (eliminates most of the potential difference), harden the shaft surface (chrome/HVOF WC), or go non-metallic; sacrificial anodes are impractical in a compact seal cavity
- Diagnosis: corrosion confined to the graphite contact band with healthy shaft elsewhere — that is the fingerprint

## 1. Mechanism: A Counterintuitive Pair

Carbon materials (graphite, carbon graphite) sit near the noble end of the galvanic series. In seawater (conductivity typically 3–5 S/m), graphite's stable potential is around +0.2 to +0.35 V versus saturated calomel (SCE), while 304/316 stainless free-corrosion potential is roughly -0.05 to -0.15 V SCE. **Graphite is more than 0.3 V nobler than stainless.**

Galvanic corrosion needs three conditions: potential difference, electrolyte path, electron path. A graphite ring on a stainless shaft has all three:

1. **Potential difference** above 0.3 V — enough to drive substantial corrosion current
2. **Electrolyte**: seawater pumps, cooling water, RO concentrate and coastal salt fog are all high-conductivity media
3. **Electron path**: the ring/shaft contact is itself conductive

Result: the stainless shaft is the anode, dissolving as Fe → Fe²⁺ + 2e⁻; the graphite ring is the cathode, only supporting oxygen reduction and not consumed. Current magnitude is governed by area ratio — **small anode with large cathode is the worst case**. The graphite face covers only part of the sleeve, but corrosion concentrated at the band still produces high local current density.

One aggravating factor is **crevice corrosion**: inside the narrow ring-shaft gap, oxygen diffusion is restricted, creating a differential-aeration cell, while Cl⁻ concentrates in the crevice and lowers pitting potential. The contact band corrodes several times faster than open shaft surface.

## 2. Field Symptoms

Affected equipment shows a characteristic pattern:

| Location | Observation |
|---|---|
| Graphite ring | Face/bore essentially normal wear; on teardown "still looks usable" |
| Sleeve contact band | Dull, pitted, circumferential rust band; returns shortly after cleaning |
| Shaft outside the band | Largely intact, normal gloss |
| Operating data | Torque and current climbing slowly; seizure in severe cases |
| Teardown | Roughness or annular grooves in the contact band; corrosion products embedded in the ring bore |

**Diagnostic fingerprint**: corrosion strictly confined to the graphite contact band, healthy shaft elsewhere. This is entirely different from general corrosion (uniform rust) or wear (smooth shaft, growing clearance).

Common misdiagnoses:

- "Bad shaft steel — upgrade the alloy" — moving to duplex 2205/2507 only delays; the potential difference remains
- "The graphite ring wore it" — graphite is far softer than stainless and cannot cut grooves; grooves are the aftermath of steel corrosion and spalling
- "Seawater is just like that" — sister pumps with SiC faces run stably in the same water; the difference is the potential difference

## 3. Three Countermeasures

### 3.1 Switch to SiC Mating Faces (first choice)

Replace the stainless mating face with reaction-bonded or sinterless SiC:

- SiC's potential in seawater is far closer to inert than stainless's, so the graphite-SiC potential difference is a fraction of graphite-stainless
- HRA 90+ hardness resists abrasive wear — a bonus in sand-laden seawater
- Better thermal conductivity than stainless, exporting face friction heat and lowering thermal-crack risk

Cost: SiC parts run 3–8× stainless and are brittle, so installation and impact loading need care. For continuous-duty seawater, marine and RO high-pressure pumps, it usually pays.

### 3.2 Surface Hardening (retrofits)

Keep the seal architecture, change the shaft/sleeve surface:

| Process | Effect | Caution |
|---|---|---|
| Hard chrome plating | Smaller potential difference, better corrosion resistance; HV 800–1000 | Porosity is the weakness; only thick coatings (>50 μm) are reliable |
| HVOF WC-Co | HV 1000–1300, high bond strength | Sealing treatment needed for corrosion resistance |
| Ceramic spray (Al₂O₃/Cr₂O₃) | Fully interrupts the galvanic path | Seal after grinding; thick-coat uniformity is hard |

Two mechanisms at once: harder surface lowers wear, and the altered surface potential/passive state cuts the galvanic driving force. Surface treatment is the most retrofit-friendly option — replace the sleeve only, leave the cavity alone.

Limit: once the coating is worn through (especially in sandy seawater), the substrate re-exposes and corrosion accelerates. Surface hardening must be paired with filtration and sand control.

### 3.3 Non-Metallic Sleeves (new designs)

Make the sleeve entirely non-metallic:

- PEEK: strong, self-lubricating, potential far from stainless — but poor thermal conductivity, ~250°C ceiling, high cost
- Ceramic (SiC/Al₂O₃): ideal potential and wear resistance; brittleness is the constraint
- Carbon graphite sleeve with a non-metallic (ceramic) shaft: the extreme option for small-power, clean service

Non-metallic designs eliminate the couple at the root, but constrain shaft structure and joint design — new-machine or critical-duty territory.

### 3.4 On Sacrificial Anodes

The field often asks about "putting a zinc plate in the cavity." In theory a zinc anode (~-1.0 V SCE) would protect the stainless shaft regardless of the graphite. In practice it is impractical:

- The cavity has no room for enough anode area or protective current
- Zinc consumption products (zinc hydroxide) are abrasive and contaminate the faces
- In flowing seawater, mechanically fixing the anode is difficult

Where system-wide cathodic protection is genuinely needed (seawater piping, valves), that is a system design problem — not solvable inside a seal cavity.

## 4. Preventive Maintenance Checklist

| # | Measure | Interval |
|---|---|---|
| 1 | Inspect the sleeve contact band: does rust return within 30 minutes of cleaning? | Every 3–6 months |
| 2 | Track seal leakage and motor current trends (leading indicators of gap change from corrosion) | Monthly |
| 3 | Control medium sand and conductivity (locate intakes away from sediment resuspension zones) | Design + periodic water tests |
| 4 | At overhaul, measure contact-band roughness and groove depth; replace the sleeve beyond 0.1 mm | Overhaul |
| 5 | When replacing mating faces, upgrade directly to SiC — do not repeat the stainless solution | Retrofit decision |

## 5. Post-Mortem Example

A typical review path:

1. A marine cooling-water pump (seawater, 304 sleeve, graphite ring) shows 15% current rise and increased leakage after 6 months
2. Teardown: normal ring face; sleeve contact band pitted with annular grooves ~0.15 mm deep
3. Misjudged as sleeve quality; replaced with 316 — same failure within 3 months (316 and 304 potentials are close; the alloy change does nothing)
4. Switched to SiC seat with the original 304 sleeve (or chrome-plated); sister pumps run 2 years without incident

The lesson: **when "the shaft dies and the ring lives," think galvanic corrosion first — do not suspect the alloy grade.** Upgrading the stainless is the most common wasted spend.

## Conclusion

Graphite on stainless in seawater is the classic noble-cathode/active-anode trap: the ring survives, the shaft dies, and it dies at the inconspicuous contact band. Specify SiC mating faces at selection time — the simplest and most complete fix; use surface hardening for retrofits and non-metallic sleeves for new designs. And do not count on sacrificial anodes — there is no room for them in a seal cavity.`,
    },
  },
  // 8. October 17, 2026 - Liquid oxygen cleanliness
  {
    slug: "liquid-oxygen-graphite-seal-oil-free-cleanliness",
    title: {
      zh: "液氧工况石墨密封：禁油、清洁度与氧相容性三原则",
      en: "Graphite Seals in Liquid Oxygen Service: The No-Oil, Cleanliness and Oxygen-Compatibility Principles",
    },
    excerpt: {
      zh: "液氧本身不可燃，但有机物与液氧的混合物在冲击或点火下会剧烈燃烧甚至爆炸——密封件上的微量油脂就是最危险的「燃料「。本文讲液氧工况下石墨密封的材料筛选、除油清洁度要求、检验方法与常见违规操作。",
      en: "Liquid oxygen is not flammable, but organic matter mixed with it can ignite violently or explode under impact — trace oil on a seal is exactly that fuel. This article covers material screening, degreasing cleanliness requirements, verification methods and common violations for graphite seals in LOX service.",
    },
    tag: "faq",
    date: "2026-10-17",
    content: {
      zh: `## 核心要点

- 液氧是强氧化剂：与油脂、橡胶、纤维等有机物接触后，在冲击、摩擦或点火源作用下可发生剧烈燃烧或爆炸；密封件的清洁度是安全项，不是卫生项
- 碳石墨基体本身与液氧相容（用于液氧泵的既有先例），但**浸渍体系和装配润滑脂必须按氧相容性筛选**；铜浸渍一般不推荐，树脂/PTFE 浸渍需有氧相容试验数据
- 清洁度流程：粗洗（溶剂/碱性清洗剂）→ 精洗（无水乙醇/丙酮）→ 烘干/氮气吹扫 → 无油包装，全流程禁油禁脂
- 检验：紫外荧光法或称重法测残油，按合同/规范要求控制；包装后到装机前不得开封
- 现场最常见违规：用普通矿物脂润滑 O 圈、用不洁手直接接触密封面、密封件与油品混放运输

## 一、为什么液氧对油脂零容忍

液氧（LOX，沸点 -183℃）本身不燃，它是助燃剂。风险来自"燃料 + 氧化剂 + 点火能量"三要素：

- **燃料**：矿物油、润滑脂、橡胶、密封胶、纤维、纸屑、手汗、防锈油——都是有机物，都是燃料
- **氧化剂**：液氧或富氧气体
- **点火能量**：冲击（部件跌落、气流冲蚀颗粒）、摩擦热（密封面干摩擦）、静电、绝热压缩

有机物与液氧混合后形成对冲击极敏感的体系，文献与事故记录中的典型表现是：受到不大的冲击即起火，火势在富氧环境中极快蔓延。液氧系统的安全规范（如国内 GB 50030《氧气站设计规范》及各类空分安全规程）因此对"氧兼容材料 + 禁油清洁度"有强制性要求。

对密封件而言，这意味着：

- 出厂清洁度必须达到规范等级，不是"擦干净就行"
- 装配、运输、贮存全链条禁油
- 材料本身要经氧相容性筛选（不是所有"耐低温"材料都能用）

## 二、材料筛选：哪些能用，哪些禁用

### 2.1 碳石墨基体

碳（石墨）在液氧中化学惰性，导热好、低温强度不脆化，是液氧泵、液氧阀门滑动副的成熟材料。基体本身通常不是问题——问题在浸渍剂和辅助件。

### 2.2 浸渍体系

| 浸渍体系 | 液氧适配 | 说明 |
|---|---|---|
| 不浸渍（纯碳石墨） | 最稳妥 | 孔隙是开口的，渗入的液氧与碳接触无风险；强度按牌号选 |
| 浸锑/浸铅合金 | 较稳妥（金属相与氧相容需评估） | 金属浸渍提高强度；铅因毒性与氧化敏感性一般不用，锑需评估 |
| 浸树脂 | **需氧相容试验数据** | 树脂是有机物，落入液氧即成为潜在燃料；未经验证的树脂浸渍不得用于液氧 |
| 浸铜/铜合金 | **不推荐** | 铜在富氧中促进有机物氧化放热，是氧系统的经典敏感材料 |
| PTFE 浸渍 | 可用（PTFE 是公认氧兼容聚合物） | 但 PTFE 在液氧中的冲击敏感性数据因牌号而异，需按规范选用 |

结论口径：**液氧工况优先用不浸渍或金属浸渍（锑）牌号，且必须有该牌号的氧相容性证明材料**；拿不到数据的浸渍石墨，宁可降级使用或改材料。

### 2.3 辅助件

- **O 圈/垫片**：PTFE（及 PCTFE、PVDF 等氟聚合物）是液氧标准选择；EPDM/NBR/FKM 等弹性体在液氧中会脆化，禁用
- **润滑脂**：液氧专用氟基润滑脂或干脆干装配；普通硅脂也不行——硅是有机物
- **弹簧/金属件**：不锈钢、蒙乃尔等；禁用镀镉件（镉在氧中敏感）

## 三、清洁度流程

液氧系统密封件的清洁流程，行业上按"脱脂等级"管理。一个可照抄的流程：

### 3.1 粗洗

- 目的：去除加工油、防锈油、指纹、粉尘
- 方法：碱性清洗剂（无磷、易漂洗）或溶剂喷洗；超声清洗 10~20 分钟
- 注意：清洗后充分漂洗，清洗剂残留同样是污染物

### 3.2 精洗

- 无水乙醇或丙酮浸泡/擦洗，去除最后的有机残留
- 密封面用无尘布（预清洗过）单向擦拭，禁止来回抹
- 禁止用手直接接触密封面——必须戴无粉丁腈/氯丁手套，且手套本身需清洁

### 3.3 干燥与吹扫

- 烘干（≤60℃）或氮气吹扫至无溶剂味
- 孔隙内的溶剂要靠真空/负压脱除，静置不够

### 3.4 包装

- 双层包装：内层无脂塑料袋（或铝箔袋），外层防震
- 袋内充氮气更好，防止结露与二次污染
- 袋外贴"禁油、已脱脂"标识 + 批次号 + 清洁度等级

### 3.5 运输与贮存

- **密封件绝不可与油品、润滑脂、含油备件同车同箱**
- 贮存环境干燥、无油雾；拆封后未装机暴露时间按规范限制（通常 24 小时内装机，超时重新处理）

## 四、检验方法

| 方法 | 原理 | 适用 |
|---|---|---|
| 紫外荧光法 | 油脂在紫外下发荧光，与标准样对比 | 现场快检、抽检 |
| 称重法 | 清洗前后称重，算残油率 | 批次验收，可量化 |
| 溶剂萃取+色谱 | 萃取后测有机物含量 | 仲裁/型式试验 |
| 白布擦拭法 | 无尘白布擦拭后目视无污染 | 装配前自检最低要求 |

具体限值按合同与规范定（空分行业与航天标准的严格程度不同），采购时应在技术协议里写清楚检验方法和合格限值——只写"清洁"两个字等于没写。

## 五、常见违规清单

现场审查中反复出现的问题，按危险程度排序：

1. **装配时用普通润滑脂抹 O 圈**——最高频、最危险。液氧装配要么干装，要么用氧兼容氟基脂
2. **裸手抓密封面**——指纹和手汗直接留在密封面上，运行中成为点火源
3. **密封件与普通机物料混放**——油雾沉降污染包装内表面
4. **用压缩空气吹干**——普通压缩空气含油（即使是"无油机"也常含油 ppm 级），必须用氮气
5. **检修后随意更换密封件来源**——新供应商没有清洁度证明，等于把整个系统的安全押给未知
6. **包装提前拆封"备用"**——车间环境的油雾和粉尘会在几小时内污染内表面

## 六、液氧泵密封的系统配合

单件清洁只是底线，系统层面还要注意：

- 密封冲洗/冷却液不得用含油液体；液氧泵的密封通常采用"无密封液的自润滑设计"或液氧 itself 作为润滑冷却介质
- 启动前管道系统要经脱脂 + 氮气吹扫 + 露点确认；密封件在系统吹扫之后、临装机前才拆封
- 首次运行缓慢升压，避免绝热压缩热点；监控密封位温度，异常温升先停机再排查
- 检修周期内更换的每一件密封，都必须附带清洁度证明，随检修记录归档

## 结语

液氧工况的石墨密封，材料选择只是第一关，**清洁度是全链条的安全工程**：碳石墨基体可以选，浸渍剂必须验证，装配运输贮存全程禁油，检验方法和限值写进合同。记住一条判据就够用——**任何可能进入密封部位的有机物，都是液氧系统的潜在点火燃料**，包括你以为"只有一点点"的润滑脂。`,
      en: `## Key Points

- Liquid oxygen is a strong oxidizer: contact with oil, rubber or fiber can produce violent combustion or explosion under impact or ignition — cleanliness of seals is a safety requirement, not hygiene
- The carbon graphite base itself is oxygen-compatible (proven in LOX pumps), but **impregnants and assembly greases must be screened for oxygen compatibility**; copper impregnation is not recommended, and resin/PTFE systems need compatibility test data
- Cleanliness chain: coarse clean (solvent/alkaline) → fine clean (anhydrous ethanol/acetone) → dry/nitrogen purge → oil-free packaging, with oil and grease banned throughout
- Verification: UV fluorescence or gravimetric residual-oil testing to contract/specification limits; no opening the package before installation
- Most common violations: mineral grease on O-rings, bare hands on faces, seals shipped with oily stores

## 1. Why Liquid Oxygen Has Zero Tolerance for Oil

Liquid oxygen (LOX, boiling point -183°C) is not flammable — it is an oxidizer. Risk comes from the fuel + oxidizer + ignition triad:

- **Fuel**: mineral oil, grease, rubber, sealant, fiber, paper debris, sweat, rust-preventive oil — all organics
- **Oxidizer**: liquid oxygen or oxygen-enriched gas
- **Ignition energy**: impact (dropped parts, particle erosion), friction heat (dry faces), static, adiabatic compression

Organics mixed with LOX form impact-sensitive systems; documented accidents show ignition from modest impact with rapid flame spread in the enriched atmosphere. Oxygen-system codes (e.g. GB 50030 and air-separation safety rules) therefore mandate oxygen-compatible materials plus oil-free cleanliness.

For seals this means:

- Delivered cleanliness must meet the specified class — "wiped clean" is not a standard
- Assembly, transport and storage are oil-free end to end
- Materials themselves must pass oxygen-compatibility screening — not every "low-temperature" material qualifies

## 2. Material Screening

### 2.1 Carbon Graphite Base

Carbon is chemically inert in LOX, conducts heat well and does not embrittle at cryogenic temperature; it is a proven material for LOX pump and valve sliding surfaces. The base is rarely the problem — the impregnant and auxiliaries are.

### 2.2 Impregnants

| Impregnant | LOX suitability | Notes |
|---|---|---|
| None (pure carbon) | Most conservative | Open pores admit LOX harmlessly; strength is grade-limited |
| Antimony / lead alloy | Relatively conservative (metal phase compatibility to be assessed) | Raises strength; lead avoided for toxicity and oxidation sensitivity, antimony needs assessment |
| Resin | **Requires oxygen-compatibility test data** | Resin is organic — inside LOX it is potential fuel; unvalidated resin grades must not be used |
| Copper / copper alloy | **Not recommended** | Copper accelerates oxidative heat release from organics in oxygen — a classic sensitive material |
| PTFE | Acceptable (a recognized oxygen-compatible polymer) | Impact sensitivity varies by grade; select per code |

Working rule: **in LOX service prefer unimpregnated or antimony-impregnated grades, and demand oxygen-compatibility documentation for the specific grade**; if data is unavailable, derate the application or change material.

### 2.3 Auxiliaries

- **O-rings / gaskets**: PTFE (and PCTFE, PVDF and similar fluoropolymers) are the LOX standard; EPDM/NBR/FKM elastomers embrittle in LOX — prohibited
- **Grease**: LOX-rated fluorinated grease, or dry assembly; ordinary silicone grease is also organic — prohibited
- **Springs / metal parts**: stainless, Monel; cadmium plating prohibited (cadmium is oxygen-sensitive)

## 3. Cleanliness Procedure

Industry practice manages LOX seal cleanliness by degreasing class. A copy-ready chain:

### 3.1 Coarse Clean

- Purpose: remove machining oil, rust preventive, fingerprints, dust
- Method: phosphate-free, easily rinsed alkaline cleaner or solvent spray; ultrasonic 10–20 minutes
- Note: rinse thoroughly — cleaner residue is also contamination

### 3.2 Fine Clean

- Anhydrous ethanol or acetone soak/wipe for final organic removal
- Wipe faces one direction with pre-cleaned lint-free cloth; no back-and-forth
- Never touch faces bare-handed — wear powder-free nitrile/neoprene gloves, themselves cleaned

### 3.3 Dry and Purge

- Oven dry (≤60°C) or nitrogen-purge until no solvent odor
- Solvent inside pores needs vacuum/negative-pressure removal — standing time alone is not enough

### 3.4 Packaging

- Double wrap: inner oil-free polyethylene (or aluminum foil) bag, outer shock protection
- Nitrogen-filled inner bag preferred — prevents condensation and recontamination
- Label "OIL-FREE / DEGREASED" plus batch number and cleanliness class

### 3.5 Transport and Storage

- **Never ship or store seals with oil products, grease or oily spares**
- Store dry and oil-mist free; limit exposure after opening (typically install within 24 hours, otherwise re-clean)

## 4. Verification Methods

| Method | Principle | Use |
|---|---|---|
| UV fluorescence | Oil fluoresces under UV; compare with standards | Field quick check, sampling |
| Gravimetric | Weigh before/after cleaning; compute residual oil | Batch acceptance, quantitative |
| Solvent extraction + chromatography | Extract and measure organics | Arbitration / type testing |
| White-cloth wipe | Wipe with clean white cloth; no visible soil | Minimum pre-assembly self-check |

Limits depend on contract and code (air-separation versus aerospace strictness differ) — write the test method and acceptance limit into the technical agreement. Writing only "clean" is writing nothing.

## 5. Common Violations

Problems seen repeatedly in audits, ranked by hazard:

1. **Ordinary grease on O-rings at assembly** — most frequent and most dangerous. LOX assembly is dry or uses oxygen-compatible fluorinated grease
2. **Bare hands on faces** — fingerprints and sweat sit exactly where ignition matters
3. **Seals stored with general stores** — oil mist settles on packaging surfaces
4. **Blow-drying with compressed air** — even "oil-free" compressor air carries ppm oil; use nitrogen
5. **Casual seal-source changes during overhaul** — a new supplier without cleanliness proof bets system safety on the unknown
6. **Opening packaging early "to have it ready"** — shop oil mist and dust contaminate the inner surface within hours

## 6. System-Level Fit for LOX Pump Seals

Single-part cleanliness is the floor; the system must cooperate:

- Flush/cooling liquids must be oil-free; LOX pump seals typically use a self-lubricating design or LOX itself as the lubricating medium
- Before startup, degrease piping, nitrogen-purge and confirm dew point; open seal packaging only after system purge, just before installation
- First run: raise pressure slowly to avoid adiabatic hot spots; monitor seal-area temperature and stop on anomaly before investigating
- Every seal replaced within the maintenance interval must carry cleanliness documentation, filed with the maintenance record

## Conclusion

For graphite seals in LOX service, material selection is only the first gate — **cleanliness is a full-chain safety discipline**: the carbon base can be selected, the impregnant must be validated, assembly/transport/storage are oil-free throughout, and the test method and limits go in the contract. One rule is enough to remember: **any organic that can reach a seal is potential ignition fuel in an oxygen system** — including the "just a little" grease you were about to apply.`,
    },
  },
]
