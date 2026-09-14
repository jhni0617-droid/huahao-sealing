export interface BlogPost {
  slug: string
  title: { zh: string; en: string }
  excerpt: { zh: string; en: string }
  tag: string
  date: string
  content: { zh: string; en: string }
}

export const blogPostsBatch14: BlogPost[] = [
  // 1. September 14, 2026 - Copper impregnated graphite
  {
    slug: "copper-impregnated-graphite",
    title: {
      zh: "铜浸渍石墨：铜基金属浸渍石墨的性能与选型边界",
      en: "Copper Impregnated Graphite: Performance and Selection Boundaries of Copper-Based Metal-Impregnated Graphite",
    },
    excerpt: {
      zh: "铜及其合金浸渍石墨靠金属网络补强孔隙：青铜浸渍牌号实测抗压 260 MPa、肖氏硬度 HS 80、导热 85 W/(m·K)，残余孔隙低于 1%。本文讲清它适合水、低润滑与干运转倾向工况的原因，以及与锑浸渍、树脂浸渍的选择边界。",
      en: "Copper and copper-alloy impregnated graphite reinforces the pore network with metal: bronze-impregnated grades test at 260 MPa compressive strength, Shore hardness HS 80, thermal conductivity 85 W/(m·K), with residual porosity below 1%. This article explains why it suits water, low-lubricity and dry-running-prone services, and where to draw the line against antimony- and resin-impregnated grades.",
    },
    tag: "material",
    date: "2026-09-14",
    content: {
      zh: `## 核心要点

- 焙烧石墨气孔率 10%-20%，铜基合金（如锡青铜 CuSn10）真空压力浸渍后残余孔隙可低于 1%，气孔被连续金属网络填充
- 青铜浸渍石墨实测：抗压强度 260 MPa、抗折 72 MPa、肖氏硬度 HS 80、导热 85 W/(m·K)、热膨胀系数 3.2×10⁻⁶/℃
- 铜基金属浸渍最适合水、低润滑介质和有干运转倾向的工况：启动频繁、注水时间歇、迷宫密封镶片碰摩发热
- 耐介质：对水、H₂S（<500 ppm）、CO、烯烃、烷烃稳定；不适合强氧化性介质和 450℃ 以上空气环境
- 选择边界：≤180℃ 一般腐蚀选树脂浸渍，220-500℃ 高温油类选锑浸渍，水/低润滑/干运转倾向选铜浸渍

## 一、什么是铜浸渍石墨

铜浸渍石墨是以焙烧或石墨化碳石墨为基体，用纯铜或铜合金（锡青铜、铝青铜等）在真空压力下浸入开孔气孔制成的复合密封材料。纯铜本身导热约 390 W/(m·K)，固化在石墨孔隙里之后，它同时干三件事：堵孔、补强、导热。

基体石墨以细颗粒等静压石墨为宜，颗粒尺寸约 8 μm，基体密度约 1.82 g/cm³。浸渍前气孔率 10%-20%，真空压力浸渍（浸渍率 ≥ 95%）后残余孔隙可压到 1% 以下——这是铜浸渍石墨不渗漏的物理前提。

### 1.1 青铜浸渍石墨的典型性能

以锡青铜 CuSn10 浸渍的细颗粒石墨为例，实测数据：

- 抗压强度 260 MPa，抗折强度 72 MPa
- 肖氏硬度 HS 80（约相当于布氏 HB 120）
- 导热系数 85 W/(m·K)
- 热膨胀系数 3.2×10⁻⁶/℃，与碳钢（约 12×10⁻⁶/℃）配合时升温后间隙变大而非变小
- 空气中抗氧化温度 ≤ 450℃，非氧化介质中可参考碳石墨基体 600℃ 的上限
- 密封加工精度可达 ±0.005 mm（数控磨削）

这些数字的量级可以对照树脂浸渍和锑浸渍牌号：树脂浸渍抗压通常 90-100 MPa，锑浸渍约 190 MPa，铜基金属浸渍能到 260 MPa。承载能力是三类浸渍中最高的。

## 二、铜浸渍石墨适合什么工况

### 2.1 水与低润滑介质

水的润滑性差，密封端面液膜薄且易破。铜浸渍石墨硬度高、导热好，摩擦热点能迅速通过金属网络导出，端面不易因局部过热而拉伤。清水泵、冷却水泵的密封环和轴套是它的常规用途。

### 2.2 干运转倾向工况

三类典型场景：

1. **频繁启停的泵**：每次启动的瞬间端面液膜尚未建立，处于边界甚至干摩擦状态。铜基网络提供金属接触面的低摩擦与高导热，把启动磨损压下来。
2. **间歇注水的设备**：液膜反复建立-破裂，热冲击频繁。石墨导热 70-150 W/(m·K) 的量级加上铜网络的快速导热，是抗热裂的基础。
3. **迷宫密封镶片**：离心压缩机轴端与级间密封中，石墨镶片与镀铬轴套碰摩时，"石墨磨损、轴套不伤"的前提是摩擦热必须快速导出——85 W/(m·K) 的导热和低热膨胀系数正为此服务。

### 2.3 耐介质范围

铜浸渍石墨对水、蒸汽、油类、CO、烯烃、烷烃稳定；石墨基体本身不被 H₂S 腐蚀，铜浸渍剂在 H₂S 含量低于 500 ppm 时无实质影响——这使它适用于裂解气、油田气等含硫烃类气体的密封。限制同样明确：强氧化性介质（浓硝酸、铬酸等）会同时腐蚀铜相和石墨，不适合；空气环境中长期使用温度受 450℃ 抗氧化上限约束。

## 三、与锑浸渍、树脂浸渍的选择边界

三类浸渍的分工可以按"介质性质 + 温度 + 润滑条件"三条线划开。

### 3.1 树脂浸渍（酚醛 F、环氧 H、呋喃 K）

- 温度上限：酚醛、呋喃类约 180-220℃，环氧约 180℃
- 优势：耐化学腐蚀谱宽、成本最低、密度低
- 边界：树脂不耐高温、强度中等（抗压 90-100 MPa 量级），不适合干运转倾向和频繁启停工况

### 3.2 锑浸渍（D）

- 温度上限：约 500℃（非氧化介质）
- 优势：高温强度保持好，实测抗压 190 MPa、抗折 72 MPa、肖氏硬度 92 HS，导热约 70 W/(m·K)
- 边界：锑质地脆，耐磨性好但减摩性不如铜基金属；导热低于铜浸渍；不适合水介质为主的工况

### 3.3 铜浸渍（铜/青铜）

- 温度上限：空气中约 450℃，非氧化介质更高
- 优势：三类中承载最高（260 MPa）、导热最高（85 W/(m·K)）、摩擦相容性最好，耐磨且不伤对偶
- 边界：不耐强氧化介质；铜相对部分化学介质敏感，选型前需逐项核对介质成分

### 3.4 一句话选型

- 介质有腐蚀性、温度 ≤ 180℃、润滑正常：树脂浸渍（呋喃耐酸碱、酚醛通用）
- 高温油类、导热油泵、熔盐泵 220-500℃：锑浸渍
- 水为主、低润滑、启动频繁、干运转倾向、压缩机迷宫镶片：铜浸渍
- 500-600℃ 极端高温且介质无氧化性：改用碳化处理牌号，不依赖金属浸渍

## 四、小结

铜浸渍石墨的价值在于用铜基金属网络同时解决"堵孔、补强、导热"三件事：残余孔隙 < 1%、抗压 260 MPa、HS 80、导热 85 W/(m·K)，是三类常用浸渍中承载与导热最强的一种。它的位置在树脂浸渍（耐腐蚀、低成本、低温）和锑浸渍（高温、高强度）之间偏"工况苛刻、润滑不足"的一端。选型时先看介质成分是否对铜相安全，再看温度是否在 450℃ 以内，最后按润滑条件确认是否真需要金属浸渍——三条都过了，铜浸渍石墨通常是水与低润滑工况下最耐用的答案。`,
      en: `## Key Takeaways

- Baked graphite has 10%-20% porosity; after vacuum-pressure impregnation with copper-based alloys (e.g., tin bronze CuSn10), residual porosity drops below 1% — the pores are filled by a continuous metal network
- Measured bronze-impregnated graphite: compressive strength 260 MPa, flexural 72 MPa, Shore hardness HS 80, thermal conductivity 85 W/(m·K), thermal expansion 3.2×10⁻⁶/°C
- Copper-based impregnation suits water, low-lubricity media and dry-running-prone services: frequent starts, intermittent flooding, labyrinth seal insert rubbing heat
- Media compatibility: stable in water, H₂S (<500 ppm), CO, olefins and paraffins; not suitable for strongly oxidizing media or air above 450°C
- Selection boundaries: general corrosion up to 180°C takes resin impregnation, 220-500°C hot oils take antimony, water/low-lubricity/dry-running takes copper

## 1. What Copper Impregnated Graphite Is

Copper impregnated graphite is a composite sealing material made by vacuum-pressure impregnating baked or graphitized carbon graphite with pure copper or copper alloys (tin bronze, aluminum bronze, etc.). Pure copper itself conducts heat at roughly 390 W/(m·K); once locked into the graphite pores it does three jobs at once: sealing the pores, reinforcing the structure, and conducting heat away.

The base should be fine-grain isostatic graphite, grain size around 8 μm, base density about 1.82 g/cm³. Porosity before impregnation is 10%-20%; after vacuum-pressure impregnation (impregnation rate ≥ 95%) residual porosity can be pressed below 1% — the physical precondition for a leak-tight copper-impregnated ring.

### 1.1 Typical Properties of Bronze-Impregnated Graphite

Using fine-grain graphite impregnated with CuSn10 tin bronze as an example, measured values:

- Compressive strength 260 MPa, flexural strength 72 MPa
- Shore hardness HS 80 (roughly Brinell HB 120)
- Thermal conductivity 85 W/(m·K)
- Thermal expansion coefficient 3.2×10⁻⁶/°C — paired with carbon steel (about 12×10⁻⁶/°C), clearance opens rather than closes as temperature rises
- Oxidation resistance in air up to 450°C; in non-oxidizing media the graphite base allows up to 600°C
- Machining precision to ±0.005 mm by CNC grinding

For scale, compare resin- and antimony-impregnated grades: resin impregnation typically gives 90-100 MPa compressive strength, antimony about 190 MPa, while copper-based impregnation reaches 260 MPa — the highest load capacity of the three.

## 2. Where Copper Impregnated Graphite Fits

### 2.1 Water and Low-Lubricity Media

Water is a poor lubricant; the seal face film is thin and breaks easily. Copper-impregnated graphite has high hardness and good heat conduction, so friction hot spots drain quickly through the metal network and the face resists scoring. Seal rings and bushings for clean-water and cooling-water pumps are its routine applications.

### 2.2 Dry-Running-Prone Services

Three typical scenarios:

1. **Frequently started pumps**: at every start the face film has not yet formed — boundary or even dry friction. The copper network provides a low-friction metallic contact surface and rapid heat removal, reducing start-up wear.
2. **Intermittently flooded equipment**: the film builds and breaks repeatedly with frequent thermal shock. Graphite's 70-150 W/(m·K) conductivity range plus fast conduction through the copper network is the basis of thermal-crack resistance.
3. **Labyrinth seal inserts**: in centrifugal compressor shaft-end and inter-stage seals, when a graphite insert rubs a chrome-plated sleeve, the "graphite wears, sleeve survives" outcome depends on fast heat removal — 85 W/(m·K) conductivity and a low expansion coefficient exist for exactly this.

### 2.3 Media Compatibility

Copper impregnated graphite is stable in water, steam, oils, CO, olefins and paraffins. The graphite base itself is not corroded by H₂S, and the copper phase is unaffected below 500 ppm H₂S — which makes it suitable for sealing sulfur-bearing hydrocarbon gases such as cracker gas and field gas. The limits are equally clear: strongly oxidizing media (concentrated nitric acid, chromic acid, etc.) attack both the copper phase and the graphite, and continuous service in air is capped by the 450°C oxidation limit.

## 3. Boundaries Against Antimony and Resin Impregnation

The three impregnation families divide along three lines: media chemistry, temperature, and lubrication condition.

### 3.1 Resin Impregnation (Phenolic F, Epoxy H, Furan K)

- Temperature ceiling: about 180-220°C for phenolic and furan, about 180°C for epoxy
- Strengths: broad chemical resistance, lowest cost, low density
- Limits: resins do not tolerate high temperature and give mid-range strength (roughly 90-100 MPa compressive); unsuitable for dry-running tendencies and frequent starts

### 3.2 Antimony Impregnation (D)

- Temperature ceiling: about 500°C in non-oxidizing media
- Strengths: retains strength at temperature — measured 190 MPa compressive, 72 MPa flexural, 92 HS, conductivity about 70 W/(m·K)
- Limits: antimony is brittle; wear resistance is good but friction compatibility is inferior to copper-based metals; conductivity is below copper impregnation; not the choice for water-dominated media

### 3.3 Copper Impregnation (Copper/Bronze)

- Temperature ceiling: about 450°C in air, higher in non-oxidizing media
- Strengths: highest load capacity of the three (260 MPa), highest conductivity (85 W/(m·K)), best friction compatibility — wears without damaging the counter-face
- Limits: not for strongly oxidizing media; the copper phase is sensitive to some chemical media, so each medium must be checked before selection

### 3.4 One-Line Selection Guide

- Corrosive media, ≤ 180°C, normal lubrication: resin impregnation (furan for acids/alkalis, phenolic for general use)
- Hot oils, thermal-oil and molten-salt pumps at 220-500°C: antimony impregnation
- Water-dominated, low lubrication, frequent starts, dry-running tendency, compressor labyrinth inserts: copper impregnation
- 500-600°C extreme temperature in non-oxidizing media: switch to a carbonized grade that does not rely on metal impregnation

## 4. Summary

The value of copper impregnated graphite is that the copper-based metal network solves three problems at once — pore sealing, reinforcement and heat conduction: residual porosity below 1%, 260 MPa compressive strength, HS 80 hardness and 85 W/(m·K) conductivity, the strongest load and heat performance among the three common impregnations. Its position sits between resin impregnation (corrosion resistance, low cost, low temperature) and antimony impregnation (high temperature, high strength), on the side of harsh service and insufficient lubrication. When selecting, first confirm the medium is safe for the copper phase, then that the temperature stays within 450°C, and finally that the lubrication condition genuinely calls for metal impregnation — pass all three checks, and copper impregnated graphite is usually the most durable answer for water and low-lubricity services.`,
    },
  },
  // 2. September 14, 2026 - Carbon graphite grades guide
  {
    slug: "carbon-graphite-grades-guide",
    title: {
      zh: "碳石墨牌号指南：浸渍代号含义与按工况选牌号的方法",
      en: "Carbon Graphite Grades Guide: Impregnation Code Meanings and How to Select a Grade by Service Conditions",
    },
    excerpt: {
      zh: "碳石墨牌号由基体石墨与浸渍物代号组成：F=酚醛、H=环氧、K=呋喃、D=锑。本文解读牌号体系，给出 M106H、M106D、M106K、M191T、204B 等真实牌号的密度、抗压、硬度数据，并按介质、温度、压力、P-V 值四步选出正确牌号。",
      en: "A carbon graphite grade combines a base graphite with an impregnation code: F = phenolic, H = epoxy, K = furan, D = antimony. This article decodes the grade system, lists real data (density, compressive strength, hardness) for grades such as M106H, M106D, M106K, M191T and 204B, and shows a four-step selection by media, temperature, pressure and P-V value.",
    },
    tag: "selection",
    date: "2026-09-14",
    content: {
      zh: `## 核心要点

- 碳石墨牌号 = 基体石墨代号 + 浸渍物代号：F=酚醛树脂、H=环氧树脂、K=呋喃树脂、D=锑；如 M106D 即 M106 基体浸锑
- M106D 实测密度 2.20 g/cm³、抗压强度 190 MPa、抗折 72 MPa、肖氏硬度 92 HS，耐温 500℃，是高温密封的主力牌号
- M106H（环氧浸渍）耐温约 180℃、抗压 92 MPa、导热 45 W/(m·K)，用于水、油、弱酸弱碱通用工况
- M191T 碳化处理牌号无需金属浸渍即可耐 600℃，抗压 100 MPa，用于熔盐泵等极端高温场合
- 选牌号四步：先定介质化学相容性，再定温度上限，再按介质压力选结构与强度，最后按 P-V 值校核磨损
- 拿不准时按"工况数据 + 介质成分表"询厂，不要只凭牌号数字对照表选材

## 一、碳石墨牌号是怎么组成的

碳石墨密封材料的牌号通常由两段组成：前段是基体石墨，后段是浸渍物代号。以 M106D 为例，M106 是细颗粒碳石墨基体，D 表示浸渍锑。焙烧石墨出炉时气孔率 10%-20%，必须浸渍把孔隙封住（浸后 < 2%）才能做密封件，所以浸渍物基本决定了牌号的耐温、耐蚀和强度档位。

华豪密封常用浸渍代号规则：

- **F = 酚醛树脂**：通用耐蚀，成本最低，耐温约 180℃
- **H = 环氧树脂**：与酚醛档位接近，耐水、油、弱酸弱碱，耐温约 180℃
- **K = 呋喃树脂**：耐酸碱谱更宽，食品级树脂浸渍牌号（如 M106K）可用于 FDA 相关卫生工况，耐温约 220℃
- **D = 锑**：金属浸渍，耐温 500℃，强度和硬度显著提升

同一基体配不同浸渍物就是不同牌号：M106H 与 M106D 的差别不在石墨，而在那层填进孔隙里的材料。

## 二、站内真实牌号与性能数据

以下数据取自华豪密封技术参数表，可直接用于选型对比。

### 2.1 M106H（环氧树脂浸渍）

- 耐温 180℃，最大介质压力 1.5 MPa，最大线速度 25 m/s
- 抗压强度 92 MPa，抗折 38 MPa，导热 45 W/(m·K)
- 用途：离心泵、化工泵、清水泵机械密封环与轴套，介质温度低于 180℃ 的水、油、弱酸弱碱

### 2.2 M106D（锑浸渍）

- 耐温 500℃，最大介质压力 2.0 MPa，最大线速度 25 m/s
- 实测密度 2.20 g/cm³，抗压强度 190 MPa，抗折 72 MPa，肖氏硬度 92 HS（第三方检测值），导热 70 W/(m·K)
- 用途：高温导热油泵、熔盐泵、蒸汽阀、高温烘箱输送线轴套，220-500℃ 工况

### 2.3 M106K（食品级树脂浸渍）

- 耐温 220℃，最大介质压力 1.5 MPa，最大线速度 20 m/s
- 抗压强度 90 MPa，抗折 36 MPa，导热 42 W/(m·K)
- 符合 FDA 与 EU 食品接触标准，完全无油自润滑；用于巧克力搅拌机、灌装机、制药搅拌轴

### 2.4 M191T（碳化处理）

- 耐温 600℃，最大介质压力 2.5 MPa，最大线速度 20 m/s
- 抗压强度 100 MPa，抗折 40 MPa，导热 55 W/(m·K)
- 无需金属浸渍即可在 500-600℃ 运行；用于光热发电熔盐泵、冶金高温炉轴承

### 2.5 204B 与 59U

- 204B：特殊耐蚀浸渍，耐海水电化学腐蚀，通过 DNV 船级社认证，耐温 200℃、抗压 95 MPa，用于船舶艉轴密封、海水冷却泵轴套
- 59U：巴氏合金镶嵌结构，补偿轴跳动，耐温 180℃、抗压 88 MPa、最大线速度 15 m/s，用于压力波动工况的化工泵与搅拌器密封

碳石墨基体通用参考：碳含量 99.9%，体密度 1.75-1.85 g/cm³，肖氏硬度 78-82 HS，灰分 0.002%，热膨胀 4.0-5.0×10⁻⁶/℃，浸渍前气孔率 10-15%，惰性气氛耐温 600℃。

## 三、按工况选牌号的四步法

### 3.1 第一步：介质化学相容性

先排除会同时腐蚀浸渍物和石墨的介质：强氧化性介质（浓硝酸、铬酸、发烟硫酸）不能用常规树脂或金属浸渍牌号。海水及含氯离子介质选 204B。含 H₂S 的烃类气体，石墨基体不受影响，浸渍物需逐项核对。食品、制药接触面选 M106K 这类食品级牌号。

### 3.2 第二步：温度上限

- ≤ 180℃：M106H 即可
- 180-220℃：M106K 或耐蚀浸渍牌号
- 220-500℃：M106D
- 500-600℃：M191T
- 空气环境与惰性气氛要分开看：碳石墨在空气中抗氧化约 450℃ 起，牌号耐温均指非氧化介质或保护气氛

### 3.3 第三步：介质压力与结构

牌号的最大介质压力（1.0-2.5 MPa）是按端面比压核算的边界值。介质压力超过 1.5 MPa 时应配平衡型机械密封，降低端面比压；压力更高或压力波动大的场合（如搅拌器、往复压缩机），优先考虑 59U 这类能补偿轴跳动的镶嵌结构。

### 3.4 第四步：P-V 值校核

端面比压 P（MPa）与滑动线速度 V（m/s）的乘积决定摩擦热负荷。牌号的最大线速度 15-25 m/s 与最大压力值是关联约束，两者不能同时取满。热负荷高的工况优先选导热高的牌号：M106D 70 W/(m·K) 优于 M106H 45 W/(m·K)，配合冲洗或急冷措施使用。

## 四、小结

看懂牌号的关键在后半段：浸渍代号决定耐温与耐蚀档位，F/H/K 三类树脂覆盖 180-220℃ 以下的一般化学工况，D（锑）覆盖 220-500℃ 高温高强度工况，特殊处理（M191T 碳化、204B 耐海水浸渍）解决 600℃ 极端高温与海洋腐蚀两个端点。选型顺序固定：介质 → 温度 → 压力 → P-V 值，四步都过才有资格谈寿命。牌号表给的是典型值，实际项目把介质成分表、温度、压力、轴径和转速一起发给厂家复核，比单看数字对照更可靠。`,
      en: `## Key Takeaways

- A carbon graphite grade = base graphite code + impregnation code: F = phenolic resin, H = epoxy resin, K = furan resin, D = antimony; M106D means the M106 base impregnated with antimony
- M106D measured: density 2.20 g/cm³, compressive strength 190 MPa, flexural 72 MPa, Shore hardness 92 HS, rated to 500°C — the workhorse for high-temperature sealing
- M106H (epoxy-impregnated) is rated to about 180°C with 92 MPa compressive strength and 45 W/(m·K) conductivity, for water, oil and weak acids/alkalis
- M191T, a carbonized grade, withstands 600°C without metal impregnation at 100 MPa compressive strength, for molten-salt pumps and other extreme-temperature service
- Four-step grade selection: media compatibility first, then temperature ceiling, then structure and strength by pressure, finally wear check by P-V value
- When in doubt, send service data plus a media composition sheet to the manufacturer — do not select by grade number tables alone

## 1. How a Carbon Graphite Grade Is Built

A carbon graphite sealing grade typically has two parts: the base graphite and the impregnation code. Take M106D: M106 is the fine-grain carbon graphite base, D means antimony impregnation. Baked graphite leaves the furnace with 10%-20% porosity and must be impregnated to seal the pores (below 2% after impregnation) before it can become a seal — so the impregnant largely sets the grade's temperature, corrosion and strength class.

Huahao Sealing's impregnation code rules:

- **F = phenolic resin**: general corrosion resistance, lowest cost, rated to about 180°C
- **H = epoxy resin**: similar class to phenolic, resists water, oil, weak acids/alkalis, rated to about 180°C
- **K = furan resin**: broader acid/alkali resistance; food-grade resin-impregnated grades (such as M106K) serve FDA-relevant hygienic services, rated to about 220°C
- **D = antimony**: metal impregnation, rated to 500°C, with markedly higher strength and hardness

The same base with different impregnants gives different grades: the difference between M106H and M106D is not the graphite but the material filling its pores.

## 2. Real Grades and Performance Data

The following data come from Huahao Sealing's technical parameter table and can be used directly for selection comparisons.

### 2.1 M106H (Epoxy-Resin-Impregnated)

- 180°C, max media pressure 1.5 MPa, max peripheral speed 25 m/s
- Compressive strength 92 MPa, flexural 38 MPa, thermal conductivity 45 W/(m·K)
- Uses: mechanical seal rings and bushings for centrifugal, chemical and clean-water pumps in water, oil and weak acids/alkalis below 180°C

### 2.2 M106D (Antimony-Impregnated)

- 500°C, max media pressure 2.0 MPa, max peripheral speed 25 m/s
- Measured density 2.20 g/cm³, compressive strength 190 MPa, flexural 72 MPa, Shore hardness 92 HS (third-party tested), thermal conductivity 70 W/(m·K)
- Uses: high-temperature thermal-oil pumps, molten-salt pumps, steam valves, high-temperature oven conveyor bushings, 220-500°C service

### 2.3 M106K (Food-Grade Resin-Impregnated)

- 220°C, max media pressure 1.5 MPa, max peripheral speed 20 m/s
- Compressive strength 90 MPa, flexural 36 MPa, thermal conductivity 42 W/(m·K)
- FDA and EU food-contact compliant, completely oil-free self-lubricating; used in chocolate mixers, filling machines and pharmaceutical agitator shafts

### 2.4 M191T (Carbonized)

- 600°C, max media pressure 2.5 MPa, max peripheral speed 20 m/s
- Compressive strength 100 MPa, flexural 40 MPa, thermal conductivity 55 W/(m·K)
- Runs at 500-600°C without metal impregnation; used in solar-thermal molten-salt pumps and metallurgical furnace bearings

### 2.5 204B and 59U

- 204B: special corrosion-resistant impregnation, resists seawater galvanic corrosion, DNV certified, 200°C and 95 MPa compressive, for marine stern shaft seals and seawater cooling pump bushings
- 59U: babbitt-inlaid structure compensating shaft runout, 180°C, 88 MPa compressive, max speed 15 m/s, for chemical pump and agitator seals under pressure fluctuation

General carbon graphite base reference: carbon content 99.9%, bulk density 1.75-1.85 g/cm³, Shore hardness 78-82 HS, ash 0.002%, thermal expansion 4.0-5.0×10⁻⁶/°C, porosity before impregnation 10-15%, 600°C in inert atmosphere.

## 3. A Four-Step Method for Selecting by Service Conditions

### 3.1 Step 1: Media Chemical Compatibility

First exclude media that attack both the impregnant and the graphite: strongly oxidizing media (concentrated nitric acid, chromic acid, fuming sulfuric acid) rule out conventional resin and metal-impregnated grades. Seawater and chloride-bearing media take 204B. In H₂S-bearing hydrocarbon gases the graphite base is unaffected, but the impregnant must be checked item by item. Food and pharmaceutical contact surfaces take food-grade grades such as M106K.

### 3.2 Step 2: Temperature Ceiling

- Up to 180°C: M106H suffices
- 180-220°C: M106K or corrosion-resistant impregnated grades
- 220-500°C: M106D
- 500-600°C: M191T
- Keep air service separate from inert atmosphere: carbon graphite starts oxidizing in air from about 450°C, and grade temperature ratings refer to non-oxidizing media or protective atmosphere

### 3.3 Step 3: Media Pressure and Structure

A grade's maximum media pressure (1.0-2.5 MPa) is a boundary value calculated from face loading. Above 1.5 MPa use a balanced mechanical seal to reduce face pressure; for higher pressures or strong pressure fluctuation (agitators, reciprocating compressors), prefer inlaid structures such as 59U that compensate shaft runout.

### 3.4 Step 4: P-V Value Check

The product of face pressure P (MPa) and sliding speed V (m/s) sets the frictional heat load. A grade's maximum speed of 15-25 m/s and maximum pressure are linked constraints — you cannot take both to the limit. For high heat load, prefer grades with higher conductivity: M106D at 70 W/(m·K) outperforms M106H at 45 W/(m·K), used together with flush or quench plans.

## 4. Summary

The key to reading a grade is the second half: the impregnation code sets the temperature and corrosion class. The F/H/K resin family covers general chemical service below 180-220°C, D (antimony) covers 220-500°C high-temperature high-strength service, and special treatments (M191T carbonizing, 204B seawater-resistant impregnation) close the two ends: 600°C extreme heat and marine corrosion. The selection order is fixed: media, then temperature, then pressure, then P-V value — a grade qualifies only after passing all four. Grade tables give typical values; for a real project, send the media composition sheet, temperature, pressure, shaft diameter and speed to the manufacturer for review — more reliable than matching numbers in a table.`,
    },
  },
]
