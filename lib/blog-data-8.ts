export interface BlogPost {
  slug: string
  title: { zh: string; en: string }
  excerpt: { zh: string; en: string }
  tag: string
  date: string
  content: { zh: string; en: string }
}

export const blogPostsBatch8: BlogPost[] = [
  // 72. August 28, 2026 — What is Carbon Graphite (report #91, P1 foundational)
  {
    slug: "what-is-carbon-graphite",
    title: {
      zh: "什么是碳石墨？材料定义、制造工艺与工业应用全面解析",
      en: "What Is Carbon Graphite? Material Definition, Manufacturing and Industrial Applications Explained",
    },
    excerpt: {
      zh: "碳石墨并非天然矿石，而是以石油焦、沥青焦和鳞片石墨为原料经高温石墨化制备的人造工程材料。本文从材料定义、微观结构、制造工艺到浸渍改性与工业应用，为工程师与采购人员提供一份系统的入门指南。",
      en: "Carbon graphite is not a natural ore but an engineered material made from petroleum coke, pitch coke and flake graphite through high-temperature graphitization. This guide covers its material definition, microstructure, manufacturing process, impregnation modification and industrial applications for engineers and procurement teams.",
    },
    tag: "faq",
    date: "2026-08-28",
    content: {
      zh: `## 核心要点

- 碳石墨是以石油焦/沥青焦/鳞片石墨为原料、经焙烧与石墨化（2400-3000℃）制备的人造碳基工程材料，不同于天然石墨矿石
- 关键物理性能：密度 1.55-1.85 g/cm³、肖氏硬度 40-90、抗压强度 150-340 MPa、导热系数 70-150 W/(m·K)
- 未浸渍碳石墨气孔率 10%-20%，必须通过树脂/金属浸渍将气孔率降至 2% 以下才能用于密封工况
- 与天然石墨的本质区别：原料纯度可控、晶体结构规整、性能一致性高，可按工况定制浸渍类型
- 主要应用：机械密封环、石墨轴套/轴承、分段密封环、碳石墨毛坯，覆盖化工、制药、食品、冶金、电力、汽车等行业

## 一、碳石墨的材料定义

碳石墨（Carbon Graphite）是一种以碳元素为主成分的人造工程材料。它以石油焦、沥青焦或鳞片石墨为主要原料，经过配料、混捏、压制成型、焙烧（1000-1400℃）和石墨化（2400-3000℃）等多道高温工艺制备而成。

需要特别澄清一个常见误区：碳石墨并非天然石墨矿石。天然石墨虽然也以碳为主成分，但其纯度、晶体规整度和性能一致性远不能满足精密密封件的要求。工业密封件所使用的碳石墨是经过严格工艺控制的人造材料，原料纯度可达 99% 以上，晶体结构高度规整，性能可在批次间保持稳定。

### 1.1 与"石墨"和"碳"的区分

在工业术语中，"碳石墨"（Carbon Graphite）通常指经过石墨化处理的碳基材料，兼具碳的硬度和石墨的自润滑性。"硬碳"（Hard Carbon / Carbon）则仅经过焙烧未经石墨化，硬度更高但润滑性较差。密封件行业所说的"碳石墨密封环"默认指石墨化材料，因为其兼具良好的自润滑性与机械强度。

## 二、微观结构与物理性能

碳石墨的层状晶体结构赋予其一系列独特性能。石墨晶体中碳原子以 sp² 杂化形成六边形层状结构，层内为强共价键（键长约 0.142 nm），层间为弱范德华力（层间距约 0.335 nm）。这种结构使碳石墨具有优异的自润滑性——层间可滑动，摩擦系数在干摩擦条件下可低至 0.04-0.15。

典型物理性能指标：

- 密度：1.55-1.85 g/cm³（浸渍后可达 1.80-2.20 g/cm³）
- 肖氏硬度（HS）：40-90
- 抗压强度：150-340 MPa
- 抗折强度：40-100 MPa
- 导热系数：70-150 W/(m·K)（远高于工程塑料的 0.2-0.4 W/(m·K)）
- 线膨胀系数：(2.5-5.0)×10⁻⁶ /℃（低于金属，有利于热稳定性）
- 使用温度：非氧化介质中可长期使用至 600℃ 以上，真空/惰性气氛可达 1000℃

## 三、制造工艺流程

碳石墨的制造是一个多工序高温过程：

1. **原料制备**：石油焦/沥青焦煅烧去除挥发分，鳞片石墨精选提纯
2. **配料混捏**：将焦炭骨料、石墨粉与煤沥青粘结剂在 140-160℃ 混捏成型
3. **压制成型**：模压（小批量异形件）、等静压（各向同性产品）或挤压（连续棒材/管材）
4. **焙烧**：在 1000-1400℃ 隔绝空气缓慢加热，使粘结剂焦化，制品气孔率约 10%-20%
5. **石墨化**：在 2400-3000℃ 电加热炉中处理，无定形碳转变为石墨晶体结构
6. **浸渍改性**：以树脂或金属填充气孔，使气孔率降至 2% 以下
7. **精加工**：车削、磨削至图纸尺寸与表面粗糙度要求

## 四、浸渍改性的作用

未浸渍的碳石墨存在 10%-20% 的气孔率，会导致介质渗透泄漏，不能直接用于密封。浸渍工艺通过真空加压将液态或熔融态材料压入气孔，固化后封堵泄漏通道。常见浸渍类型：

- **酚醛/呋喃树脂浸渍**：耐酸碱腐蚀，适用化工泵、反应釜密封
- **环氧树脂浸渍**：耐中等腐蚀，机械强度高
- **锑金属浸渍**：耐高温（400℃+）与高载荷，适用高温油泵、热油介质
- **巴氏合金浸渍**：承载能力强，适用重载轴承
- **PTFE 浸渍**：化学惰性极佳，满足食品/制药卫生级要求
- **铜/铜合金浸渍**：导电导热性增强，适用电机碳刷等电气应用

## 五、主要工业应用

碳石墨在工业密封与轴承领域应用广泛：

- **机械密封环**：作为软环与碳化硅/硬质合金配对，用于离心泵、压缩机、反应釜
- **石墨轴套/轴承**：利用自润滑性，用于无油润滑工况、潜水泵、食品机械
- **分段密封环（三瓣/四瓣环）**：用于压缩机、膨胀机、蒸汽轮机的活塞杆密封
- **碳石墨毛坯**：供下游精加工厂按图纸定制，降低客户库存成本
- **特殊应用**：核电主泵密封、半导体制程炉石墨件、真空泵干气密封

## 六、为什么选择碳石墨而非其他材料

相比 PTFE、金属轴承、陶瓷等替代材料，碳石墨兼具：

1. 自润滑性优于金属，无需外加润滑系统
2. 耐温性高于 PTFE（PTFE 仅耐 260℃）
3. 韧性高于陶瓷（碳化硅/氧化铝），不易脆性开裂
4. 导热性远高于工程塑料，有利于密封面散热
5. 化学稳定性满足大多数工业介质要求

这些综合性能使碳石墨成为干摩擦、高温、腐蚀、无油润滑等苛刻工况下不可替代的密封与轴承材料。`,
      en: `## Key Points

- Carbon graphite is an engineered material made from petroleum coke, pitch coke and flake graphite through baking (1000-1400°C) and graphitization (2400-3000°C), not a natural graphite ore
- Key physical properties: density 1.55-1.85 g/cm³, Shore hardness 40-90, compressive strength 150-340 MPa, thermal conductivity 70-150 W/(m·K)
- Un-impregnated carbon graphite has 10%-20% porosity and must be impregnated with resin or metal to reduce porosity below 2% before use in sealing applications
- Essential difference from natural graphite: controlled raw material purity, regular crystal structure, high performance consistency, and customizable impregnation types
- Main applications: mechanical seal rings, graphite bushings/bearings, segmented split rings, carbon graphite blanks across chemical, pharmaceutical, food, metallurgy, power and automotive industries

## 1. Material Definition of Carbon Graphite

Carbon graphite is an engineered material primarily composed of carbon. It is produced from petroleum coke, pitch coke or flake graphite through multi-stage high-temperature processes including compounding, kneading, molding, baking (1000-1400°C) and graphitization (2400-3000°C).

A common misconception must be clarified: carbon graphite is not natural graphite ore. While natural graphite is also carbon-based, its purity, crystal regularity and performance consistency fall far short of the requirements for precision sealing components. Industrial sealing-grade carbon graphite is a manufactured material with raw material purity above 99%, highly regular crystal structure and batch-to-batch performance stability.

### 1.1 Distinguishing "Graphite" and "Carbon"

In industrial terminology, "carbon graphite" (Carbon Graphite) typically refers to graphitized carbon-based material, combining the hardness of carbon with the self-lubricating property of graphite. "Hard carbon" undergoes only baking without graphitization, offering higher hardness but poorer lubricity. The "carbon graphite seal ring" in the sealing industry refers to graphitized material, as it provides both good self-lubrication and mechanical strength.

## 2. Microstructure and Physical Properties

The layered crystal structure of carbon graphite imparts a unique combination of properties. In graphite crystals, carbon atoms form hexagonal layers via sp² hybridization, with strong covalent bonds within layers (bond length ~0.142 nm) and weak van der Waals forces between layers (~0.335 nm spacing). This structure gives carbon graphite excellent self-lubrication, as layers can slide, yielding a dry friction coefficient as low as 0.04-0.15.

Typical physical properties:

- Density: 1.55-1.85 g/cm³ (up to 1.80-2.20 g/cm³ after impregnation)
- Shore hardness (HS): 40-90
- Compressive strength: 150-340 MPa
- Flexural strength: 40-100 MPa
- Thermal conductivity: 70-150 W/(m·K) (far exceeding engineering plastics at 0.2-0.4 W/(m·K))
- Coefficient of thermal expansion: (2.5-5.0)×10⁻⁶ /°C (lower than metals, beneficial for thermal stability)
- Service temperature: above 600°C in non-oxidizing media, up to 1000°C in vacuum/inert atmosphere

## 3. Manufacturing Process

Carbon graphite manufacturing is a multi-step high-temperature process:

1. **Raw material preparation**: calcination of petroleum/pitch coke to remove volatiles; selection and purification of flake graphite
2. **Compounding and kneading**: coke aggregate, graphite powder and coal tar pitch binder kneaded at 140-160°C
3. **Molding**: die pressing (small batches of custom shapes), isostatic pressing (isotropic products) or extrusion (continuous bars/tubes)
4. **Baking**: slow heating in 1000-1400°C oxygen-free furnace, pitch binder cokes, resulting porosity ~10%-20%
5. **Graphitization**: electric heating at 2400-3000°C transforms amorphous carbon into graphite crystal structure
6. **Impregnation modification**: resin or metal fills pores, reducing porosity below 2%
7. **Finishing**: turning and grinding to drawing dimensions and surface roughness specifications

## 4. Role of Impregnation

Un-impregnated carbon graphite has 10%-20% porosity, causing media permeation leakage, making it unsuitable for direct sealing use. Impregnation uses vacuum pressure to force liquid or molten material into pores, which then cures to seal leak channels. Common impregnation types:

- **Phenolic/furan resin**: acid and alkali resistance, suitable for chemical pump and reactor seals
- **Epoxy resin**: moderate corrosion resistance, high mechanical strength
- **Antimony metal**: high temperature (400°C+) and high load, suitable for hot oil pumps
- **Babbitt alloy**: high load capacity for heavy-duty bearings
- **PTFE**: excellent chemical inertness for food/pharmaceutical sanitary grade
- **Copper/copper alloy**: enhanced electrical/thermal conductivity for motor brushes

## 5. Main Industrial Applications

Carbon graphite is widely used in industrial sealing and bearings:

- **Mechanical seal rings**: as the soft face paired with silicon carbide or hard alloy, used in centrifugal pumps, compressors and reactors
- **Graphite bushings/bearings**: leveraging self-lubrication for oil-free operation, submersible pumps, food machinery
- **Segmented split rings (3-segment/4-segment)**: for compressor, expander and steam turbine piston rod seals
- **Carbon graphite blanks**: supplied to downstream finishing shops for custom machining, reducing customer inventory costs
- **Special applications**: nuclear primary pump seals, semiconductor process furnace graphite components, vacuum pump dry gas seals

## 6. Why Carbon Graphite Over Alternatives

Compared to PTFE, metal bearings and ceramics, carbon graphite offers:

1. Better self-lubrication than metals, requiring no external lubrication system
2. Higher temperature resistance than PTFE (which only withstands 260°C)
3. Higher toughness than ceramics (silicon carbide/alumina), less prone to brittle fracture
4. Thermal conductivity far exceeding engineering plastics, aiding seal face heat dissipation
5. Chemical stability meeting most industrial media requirements

These combined properties make carbon graphite an irreplaceable sealing and bearing material for demanding conditions such as dry friction, high temperature, corrosion and oil-free lubrication.`,
    },
  },

  // 73. August 28, 2026 — Graphite vs Carbon (report #54, P0 high-value comparison)
  {
    slug: "graphite-vs-carbon",
    title: {
      zh: "石墨与碳的区别：材料术语辨析、性能对比与密封件选型指南",
      en: "Graphite vs Carbon: Material Terminology, Performance Comparison and Seal Selection Guide",
    },
    excerpt: {
      zh: `在密封件行业，"石墨"与"碳"常被混用，但二者在制造工艺、晶体结构、硬度与润滑性上存在本质差异。本文从材料学角度辨析石墨与碳的区别，并给出密封件选型的实用建议。`,
      en: "In the sealing industry, \"graphite\" and \"carbon\" are often used interchangeably, yet they differ fundamentally in manufacturing process, crystal structure, hardness and lubricity. This article distinguishes graphite from carbon and provides practical seal selection guidance.",
    },
    tag: "selection",
    date: "2026-08-28",
    content: {
      zh: `## 核心要点

- "碳"（Carbon）指仅经焙烧（1000-1400℃）未石墨化的材料，硬度高、耐磨性好但润滑性差
- "石墨"（Graphite）指经石墨化（2400-3000℃）处理的材料，自润滑性好、摩擦系数低
- "碳石墨"（Carbon Graphite）是介于二者之间的部分石墨化材料，兼顾硬度与润滑性，是密封件主流选材
- 性能对比：碳硬度 HS 70-100、摩擦系数 0.15-0.30；石墨硬度 HS 40-70、摩擦系数 0.04-0.15
- 选型原则：高载荷/耐磨优先选碳或硬碳；干摩擦/无油润滑优先选石墨或碳石墨；强腐蚀工况选浸渍改性碳石墨

## 一、术语溯源：为什么容易混淆

在中文工业语境中，"碳石墨""石墨""硬碳""电化石墨"等术语经常混用，给采购与工程师带来选型困惑。根本原因在于这些材料都是以碳元素为主成分的人造工程材料，区别在于热处理温度和晶体转化程度：

- **碳（Carbon）**：焙烧温度 1000-1400℃，碳原子以无定形结构为主，未形成完整石墨晶体
- **石墨（Graphite）**：经 2400-3000℃ 石墨化处理，碳原子重排为规整的层状石墨晶体
- **碳石墨（Carbon Graphite）**：部分石墨化材料，晶体转化度介于碳与石墨之间
- **电化石墨（Electrographite）**：在电炉中完全石墨化，晶体转化度最高

英文术语同样存在层级：Hard Carbon → Carbon Graphite → Electrographite，对应石墨化程度递增。

## 二、晶体结构的本质差异

三种材料的本质区别在于 X 射线衍射下 (002) 峰的尖锐度，即石墨化度（Graphitization Degree）：

| 材料 | 焙烧温度 | 石墨化度 | 层间距 d₀₀₂ | 晶体特征 |
|------|---------|---------|-------------|---------|
| 碳（硬碳） | 1000-1400℃ | <30% | 3.44-3.70 Å | 无定形为主 |
| 碳石墨 | 2000-2400℃ | 30%-80% | 3.36-3.44 Å | 部分规整 |
| 电化石墨 | 2400-3000℃ | >80% | 3.35-3.36 Å | 高度规整 |

石墨化度越高，层状结构越完整，层间范德华力越弱，自润滑性越好；但同时材料硬度下降，耐磨性降低。这是材料选型中必须权衡的核心矛盾。

## 三、性能对比

### 3.1 力学性能

- **碳（硬碳）**：肖氏硬度 HS 70-100，抗压强度 200-400 MPa，耐磨性优异但脆性较大
- **碳石墨**：肖氏硬度 HS 40-90，抗压强度 150-340 MPa，硬度与韧性平衡
- **电化石墨**：肖氏硬度 HS 30-60，抗压强度 100-200 MPa，韧性最好但硬度最低

### 3.2 摩擦学性能

- **碳**：干摩擦系数 0.15-0.30，自润滑性差，需配对软材料或加润滑
- **碳石墨**：干摩擦系数 0.04-0.15，自润滑性良好，是密封件主流选材
- **电化石墨**：干摩擦系数 0.04-0.10，自润滑性最佳，但耐磨性低于碳石墨

### 3.3 热学与化学性能

三者导热系数均较高（70-150 W/(m·K)），远优于工程塑料。耐温性能在非氧化介质中均可至 600℃ 以上。化学稳定性方面，碳和碳石墨对大多数酸碱盐耐蚀，但气孔率较高需浸渍改性；电化石墨气孔率较低但仍需浸渍以满足密封要求。

## 四、密封件选型建议

### 4.1 高载荷、强磨损工况

如矿山设备破碎机轴承、重型机械衬套，优先选碳或硬碳材料，利用其高硬度和耐磨性。但需注意碳的脆性较大，不宜承受冲击载荷。

### 4.2 干摩擦、无油润滑工况

如食品机械、真空设备、潜水泵，优先选石墨或碳石墨，利用其低摩擦系数与自润滑性，避免介质污染。常用浸渍 PTFE 或酚醛树脂以提升密封性。

### 4.3 高温油泵、热油介质

优先选锑金属浸渍碳石墨，兼顾 400℃+ 耐温性与承载能力，常用 M106K 等牌号。

### 4.4 强腐蚀化工工况

优先选呋喃树脂浸渍碳石墨，耐强酸碱；如介质含氢氟酸则需选 PTFE 浸渍牌号。

### 4.5 高速轻载密封（机械密封环）

主流选碳石墨作为软环，与碳化硅或硬质合金硬环配对。碳石墨兼具足够硬度与良好自润滑性，在端面液膜稳定性和耐磨性之间取得平衡。

## 五、采购建议

向供应商确认以下信息可避免选错材料：

1. 材料类型：碳/碳石墨/电化石墨（石墨化度）
2. 浸渍类型：树脂/金属/无浸渍
3. 性能指标：硬度、抗压强度、气孔率、摩擦系数
4. 适用工况：温度、压力、介质、转速
5. 是否符合行业标准要求（如 API 682），牌号后缀与浸渍物对应关系以厂家样本为准

华豪密封件有限公司提供 M106K、M120K、M106H 等主流牌号的碳石墨密封环、轴套与分段环，支持按图纸与样品定制加工，可提供材料性能检测报告。`,
      en: `## Key Points

- "Carbon" refers to material baked at 1000-1400°C without graphitization, with high hardness and wear resistance but poor lubricity
- "Graphite" refers to material graphitized at 2400-3000°C, with good self-lubrication and low friction coefficient
- "Carbon graphite" is a partially graphitized intermediate material balancing hardness and lubricity, the mainstream choice for seals
- Performance: carbon hardness HS 70-100, friction 0.15-0.30; graphite hardness HS 40-70, friction 0.04-0.15
- Selection principle: high load/wear → carbon or hard carbon; dry friction/oil-free → graphite or carbon graphite; corrosive media → impregnated carbon graphite

## 1. Terminology: Why the Confusion

In industrial contexts, terms like "carbon graphite," "graphite," "hard carbon" and "electrographite" are often used interchangeably, causing selection confusion for procurement and engineers. The root cause is that these are all carbon-based engineered materials differing in heat treatment temperature and crystal conversion degree:

- **Carbon**: baked at 1000-1400°C, carbon atoms primarily amorphous, no complete graphite crystals
- **Graphite**: graphitized at 2400-3000°C, carbon atoms rearranged into regular layered graphite crystals
- **Carbon graphite**: partially graphitized, crystal conversion between carbon and graphite
- **Electrographite**: fully graphitized in electric furnace, highest crystal conversion

English terminology follows the same hierarchy: Hard Carbon → Carbon Graphite → Electrographite, with increasing graphitization degree.

## 2. Essential Crystal Structure Difference

The fundamental difference lies in the sharpness of the (002) peak in X-ray diffraction, i.e., graphitization degree:

| Material | Baking temp | Graphitization | d₀₀₂ spacing | Crystal features |
|----------|-------------|----------------|---------------|------------------|
| Carbon (hard) | 1000-1400°C | <30% | 3.44-3.70 Å | Mostly amorphous |
| Carbon graphite | 2000-2400°C | 30%-80% | 3.36-3.44 Å | Partially regular |
| Electrographite | 2400-3000°C | >80% | 3.35-3.36 Å | Highly regular |

Higher graphitization means more complete layered structure, weaker inter-layer van der Waals forces and better self-lubrication; but hardness drops and wear resistance decreases. This is the core trade-off in material selection.

## 3. Performance Comparison

### 3.1 Mechanical Properties

- **Carbon (hard)**: Shore hardness HS 70-100, compressive 200-400 MPa, excellent wear resistance but higher brittleness
- **Carbon graphite**: Shore hardness HS 40-90, compressive 150-340 MPa, balanced hardness and toughness
- **Electrographite**: Shore hardness HS 30-60, compressive 100-200 MPa, best toughness but lowest hardness

### 3.2 Tribological Properties

- **Carbon**: dry friction 0.15-0.30, poor self-lubrication, needs soft counterface or external lubrication
- **Carbon graphite**: dry friction 0.04-0.15, good self-lubrication, mainstream seal material
- **Electrographite**: dry friction 0.04-0.10, best self-lubrication but lower wear resistance than carbon graphite

### 3.3 Thermal and Chemical Properties

All three have high thermal conductivity (70-150 W/(m·K)), far superior to engineering plastics. Temperature resistance reaches 600°C+ in non-oxidizing media. Chemically, carbon and carbon graphite resist most acids, alkalis and salts but require impregnation due to higher porosity; electrographite has lower porosity but still needs impregnation for sealing.

## 4. Seal Selection Recommendations

### 4.1 High Load, Heavy Wear Conditions

For mining crusher bearings and heavy machinery bushings, choose carbon or hard carbon for high hardness and wear resistance. Note that carbon is more brittle and should not bear impact loads.

### 4.2 Dry Friction, Oil-Free Conditions

For food machinery, vacuum equipment and submersible pumps, choose graphite or carbon graphite for low friction and self-lubrication to avoid media contamination. PTFE or phenolic impregnation is commonly used.

### 4.3 High Temperature Oil Pumps

Choose antimony-impregnated carbon graphite for 400°C+ temperature resistance and load capacity, commonly grade M106K.

### 4.4 Highly Corrosive Chemical Service

Choose furan resin-impregnated carbon graphite for strong acid/alkali resistance; PTFE impregnation is needed for hydrofluoric acid service.

### 4.5 High-Speed Light-Load Sealing (Mechanical Seal Rings)

Carbon graphite is the mainstream choice as the soft face, paired with silicon carbide or hard alloy as the hard face. It balances hardness and self-lubrication for stable fluid film and wear resistance.

## 5. Procurement Recommendations

Confirm the following with your supplier to avoid material selection errors:

1. Material type: carbon/carbon graphite/electrographite (graphitization degree)
2. Impregnation type: resin/metal/un-impregnated
3. Performance indicators: hardness, compressive strength, porosity, friction coefficient
4. Service conditions: temperature, pressure, media, speed
5. Compliance with industry standards (e.g., API 682); suffix-to-impregnant mapping per the manufacturer datasheet

Huahao Sealing Co., Ltd. supplies carbon graphite seal rings, bushings and segmented rings in grades such as M106K, M120K, M140K and M106D, with custom machining from drawings or samples and material test reports.`,
    },
  },

  // 74. August 28, 2026 — How Graphite Seal Works (report #92, foundational)
  {
    slug: "how-graphite-seal-works",
    title: {
      zh: "石墨密封的工作原理：端面液膜、弹簧比压与自润滑机制详解",
      en: "How a Graphite Seal Works: Face Fluid Film, Spring Pressure and Self-Lubrication Explained",
    },
    excerpt: {
      zh: `石墨密封并非靠"硬碰硬"的接触实现密封，而是依靠端面间 0.5-3μm 的微观液膜、弹簧与介质压力的共同作用，以及石墨的自润滑性形成动态密封。本文解析石墨密封的三大核心机制。`,
      en: "A graphite seal does not rely on \"hard-on-hard\" contact but on a 0.5-3μm micro fluid film between faces, combined spring and media pressure, and graphite self-lubrication. This article explains the three core mechanisms of graphite seals.",
    },
    tag: "faq",
    date: "2026-08-28",
    content: {
      zh: `## 核心要点

- 石墨密封依靠动环与静环端面间 0.5-3μm 的微观液膜实现密封与润滑，并非完全刚性接触
- 弹簧力提供初始贴合压力（端面比压 0.2-0.6 MPa），介质压力工作时补充密封力
- 石墨层状晶体结构的层间滑动赋予自润滑性，干摩擦系数可低至 0.04-0.15
- 碳石墨作为软环与碳化硅等硬质材料配对，硬环维持端面平整度，软环提供自润滑与磨损牺牲面
- 端面液膜汽化是密封干摩擦失效的根因：PV 值超限、导热不足或介质温度接近沸点时易发生

## 一、密封的基本问题

机械密封的核心挑战是：一根旋转的泵轴需要穿过静止的泵壳，如何让轴在高速旋转的同时不泄漏介质？传统的填料密封靠压紧软质填料压紧轴表面，存在磨损快、泄漏量大、需频繁维护的问题。

机械密封（即端面密封）采用完全不同的思路：将两个超平整的端面（一个随轴旋转的动环，一个固定的静环）贴合在一起，端面之间的微观间隙小到介质无法通过，从而实现密封。石墨密封就是使用碳石墨作为其中一个端面（通常是软环）的机械密封。

## 二、端面液膜机制

许多人误以为密封端面是"硬碰硬"的刚性接触。实际上，两个端面之间存在一层厚度 0.5-3μm 的微观液膜，这层液膜同时承担密封与润滑两大功能：

### 2.1 液膜的形成

密封端面经精密研磨，表面粗糙度 Ra 通常在 0.05-0.2μm 之间。即使如此平整，微观下仍有凸峰和凹谷。当两端面在弹簧力作用下贴合时，微观凹谷中残留的介质形成液膜。液膜厚度取决于端面比压、介质粘度和相对速度。

### 2.2 液膜的密封作用

液膜极薄（微米级），其流动阻力极大。介质要通过这层液膜需要克服极大的剪切阻力，实际泄漏量极低（通常 <1 mL/h），可视为"准密封"。

### 2.3 液膜的润滑作用

液膜将两端面隔开，避免金属/石墨与硬质材料的直接接触，大幅降低摩擦与磨损。一旦液膜破坏（如端面温度过高导致介质汽化），密封将进入干摩擦状态，碳石墨端面会迅速磨损发热，最终失效。

## 三、弹簧比压与介质压力

密封端面的贴合压力来自两个力源：

### 3.1 弹簧力（机械比压）

密封组件内置弹簧（如螺旋弹簧、波形弹簧或波纹管），始终提供 0.2-0.6 MPa 的端面比压。这个力保证：

- 介质压力为零时（停机状态）端面仍贴合不泄漏
- 补偿端面磨损，保持贴合状态
- 克服密封件装配偏差与振动

### 3.2 介质压力（液压比压）

工作时，介质压力作用在动环/静环的非密封侧，进一步将端面压紧。这部分力的大小取决于密封结构与介质压力：

- **非平衡型**：介质压力全部传递至端面，端面比压随介质压力线性增大。适用于低压工况（<1.5 MPa）
- **平衡型**：通过阶梯轴结构使端面受压面积小于介质受压面积，端面比压仅为介质压力的 50%-70%。适用于高压工况（>1.5 MPa）

### 3.3 端面比压的合理范围

端面比压过低 → 泄漏；过高 → 干摩擦、发热、磨损。机械密封设计的核心是平衡这两者。典型范围 0.2-0.6 MPa，具体取决于介质、转速与材料配对。

## 四、石墨的自润滑机制

碳石墨作为密封软环的核心优势是自润滑性。其层状晶体结构中，碳原子层内为强共价键，层间为弱范德华力。当两端面相对滑动时：

1. 石墨晶体层间发生剪切滑动，相当于在摩擦面形成一层"固体润滑膜"
2. 干摩擦系数可低至 0.04-0.15，远低于金属对金属（0.3-0.6）
3. 即使液膜局部破坏，石墨的自润滑仍能避免端面咬合，延长容错时间

这就是为什么密封软环通常选碳石墨而非金属或陶瓷——金属无自润滑性，干摩擦时会咬合烧死；陶瓷硬度高但脆性大，不能作为牺牲磨损面。碳石墨兼具自润滑、导热和"软磨损牺牲面"特性。

## 五、PV 值与密封寿命

密封的工作严酷程度用 PV 值（端面比压 × 端面线速度）衡量，单位 MPa·m/s：

- 碳石墨 vs 碳化硅：许用 PV 值 7-15 MPa·m/s
- 碳石墨 vs 硬质合金：许用 PV 值 5-10 MPa·m/s
- 碳石墨 vs 氧化铝：许用 PV 值 3-7 MPa·m/s

PV 值超出材料许用范围时，端面温度上升 → 液膜汽化 → 干摩擦 → 磨损加剧 → 温度进一步升高，形成恶性循环。这就是为什么密封选型必须校核 PV 值。

## 六、密封失效的典型机制

理解石墨密封的工作原理，就能理解失效根因：

1. **液膜汽化**：介质温度接近沸点或 PV 值过高导致液膜失稳
2. **弹簧失效**：弹簧腐蚀、疲劳或卡死导致端面比压不足
3. **端面磨损**：介质含固体颗粒或液膜破坏导致端面磨损泄漏
4. **O 形圈老化**：辅助密封圈老化变硬，失去补偿能力
5. **石墨环开裂**：装配应力、热冲击或端面比压过高导致脆性开裂

掌握这些机制，工程师就能在故障发生前通过合理选型、规范安装和预防性维护延长密封寿命。`,
      en: `## Key Points

- A graphite seal relies on a 0.5-3μm micro fluid film between rotating and stationary faces, not rigid contact
- Spring force provides initial face pressure (0.2-0.6 MPa), with media pressure adding sealing force during operation
- Graphite's layered crystal structure enables inter-layer sliding, with dry friction as low as 0.04-0.15
- Carbon graphite as the soft face pairs with silicon carbide hard face; the hard face maintains flatness, the soft face provides self-lubrication and sacrificial wear
- Fluid film vaporization is the root cause of dry friction failure: exceeding PV limit, insufficient heat conduction or media temperature near boiling point

## 1. The Fundamental Sealing Problem

The core challenge of mechanical seals: a rotating pump shaft must pass through a stationary pump casing, so how do we keep the shaft from leaking media while it spins at high speed? Traditional packing seals rely on compressing soft packing against the shaft surface, suffering from rapid wear, high leakage and frequent maintenance.

Mechanical seals (face seals) take a fundamentally different approach: two ultra-flat faces (a rotating ring attached to the shaft and a stationary ring) are pressed together, with the micro gap between them so small that media cannot pass through. A graphite seal is a mechanical seal that uses carbon graphite as one of the faces (typically the soft face).

## 2. Face Fluid Film Mechanism

Many mistakenly believe seal faces are in "hard-on-hard" rigid contact. In reality, a micro fluid film of 0.5-3μm exists between the two faces, simultaneously providing sealing and lubrication:

### 2.1 Film Formation

Seal faces are precision lapped to surface roughness Ra typically 0.05-0.2μm. Even at this flatness, micro peaks and valleys exist. When the faces are pressed together by spring force, media trapped in micro valleys forms the fluid film. Film thickness depends on face pressure, media viscosity and relative speed.

### 2.2 Sealing Action of the Film

The film is extremely thin (microns), creating enormous flow resistance. Media must overcome extreme shear resistance to pass through, resulting in very low actual leakage (typically <1 mL/h), effectively a "quasi-seal."

### 2.3 Lubricating Action of the Film

The film separates the two faces, preventing direct contact between metal/graphite and the hard material, dramatically reducing friction and wear. Once the film is destroyed (e.g., by excessive face temperature causing media vaporization), the seal enters dry friction, and the carbon graphite face rapidly wears and heats, ultimately failing.

## 3. Spring Pressure and Media Pressure

Face contact pressure comes from two sources:

### 3.1 Spring Force (Mechanical Pressure)

The seal assembly contains a spring (helical, wave spring or bellows) that constantly provides 0.2-0.6 MPa face pressure. This force ensures:

- Faces remain in contact at zero media pressure (standstill)
- Compensates for face wear to maintain contact
- Overcomes assembly tolerances and vibration

### 3.2 Media Pressure (Hydraulic Pressure)

During operation, media pressure acts on the non-sealing side of the rotating/stationary ring, further pressing the faces together. The magnitude depends on seal structure and media pressure:

- **Unbalanced**: full media pressure transferred to the face; face pressure increases linearly with media pressure. Suitable for low pressure (<1.5 MPa)
- **Balanced**: step shaft design makes the pressurized face area smaller than the media pressure area; face pressure is 50%-70% of media pressure. Suitable for high pressure (>1.5 MPa)

### 3.3 Reasonable Face Pressure Range

Too low → leakage; too high → dry friction, heat, wear. The core of seal design is balancing these. Typical range is 0.2-0.6 MPa, depending on media, speed and material pairing.

## 4. Graphite Self-Lubrication Mechanism

The core advantage of carbon graphite as the soft face is self-lubrication. In its layered crystal structure, intra-layer bonds are strong covalent, while inter-layer bonds are weak van der Waals forces. As the two faces slide:

1. Inter-layer shear sliding occurs in graphite crystals, effectively forming a "solid lubricant film" on the friction surface
2. Dry friction coefficient can be as low as 0.04-0.15, far below metal-on-metal (0.3-0.6)
3. Even if the film locally fails, graphite self-lubrication still prevents face galling, extending fault tolerance

This is why seal soft faces are typically carbon graphite rather than metal or ceramic — metal has no self-lubrication and would gall under dry friction; ceramic is hard but brittle and cannot serve as a sacrificial wear face. Carbon graphite combines self-lubrication, thermal conductivity and "soft sacrificial wear face" properties.

## 5. PV Value and Seal Life

The severity of seal service is measured by PV value (face pressure × face linear velocity), in MPa·m/s:

- Carbon graphite vs silicon carbide: allowable PV 7-15 MPa·m/s
- Carbon graphite vs hard alloy: allowable PV 5-10 MPa·m/s
- Carbon graphite vs alumina: allowable PV 3-7 MPa·m/s

When PV exceeds the material's allowable limit, face temperature rises → film vaporizes → dry friction → wear intensifies → temperature rises further, creating a vicious cycle. This is why seal selection must verify PV value.

## 6. Typical Seal Failure Mechanisms

Understanding how graphite seals work explains failure root causes:

1. **Film vaporization**: media temperature near boiling point or excessive PV destabilizes the film
2. **Spring failure**: corrosion, fatigue or jamming causes insufficient face pressure
3. **Face wear**: media with solids or film failure causes face wear and leakage
4. **O-ring aging**: auxiliary seals harden and lose compensation ability
5. **Graphite ring fracture**: assembly stress, thermal shock or excessive face pressure causes brittle fracture

By understanding these mechanisms, engineers can extend seal life through proper selection, correct installation and preventive maintenance.`,
    },
  },

  // 75. August 28, 2026 — Carbon Graphite vs Silicon Carbide (report #67, P2 comparison)
  {
    slug: "carbon-graphite-vs-silicon-carbide",
    title: {
      zh: "碳石墨与碳化硅密封面对比：性能、成本与配对选型指南",
      en: "Carbon Graphite vs Silicon Carbide Seal Faces: Performance, Cost and Pairing Selection Guide",
    },
    excerpt: {
      zh: `碳石墨与碳化硅是机械密封面最常用的两种材料，但二者并非竞争关系——而是互补的配对关系。本文对比两种材料的物理性能、化学耐蚀性、成本与典型应用，并说明为什么"碳石墨 + 碳化硅"是行业主流配对。`,
      en: "Carbon graphite and silicon carbide are the two most common seal face materials, but they are not competitors — they are complementary pairing materials. This article compares their physical properties, chemical resistance, cost and typical applications, and explains why \"carbon graphite + silicon carbide\" is the industry-standard pairing.",
    },
    tag: "selection",
    date: "2026-08-28",
    content: {
      zh: `## 核心要点

- 碳石墨与碳化硅不是替代关系，而是机械密封面最经典的"软+硬"配对组合
- 碳化硅硬度 HV 2000-2800（碳石墨仅 HS 40-90），耐磨性远超碳石墨但脆性大
- 碳化硅导热系数 80-150 W/(m·K)，与碳石墨相当，远优于氧化铝陶瓷
- 碳化硅耐几乎所有酸碱（除 HF），化学耐蚀性优于碳石墨，但价格是浸渍碳石墨的 3-8 倍
- 主流配对：碳石墨（软环，自润滑牺牲面）+ 反应烧结碳化硅（硬环，维持端面平整度）

## 一、两种材料的定位

机械密封的端面配对通常采用"一软一硬"原则：软环提供自润滑与牺牲磨损面，硬环维持端面平整度并承受高速摩擦。碳石墨与碳化硅正是这一配对中最经典的组合：

- **碳石墨**：作为软环（动环或静环之一），利用层状结构的自润滑性降低摩擦，并通过优先磨损保护硬环
- **碳化硅（SiC）**：作为硬环，凭借极高硬度和耐磨性维持端面平整度，承受高速摩擦

二者不是竞争关系，而是互补的配对关系。一个密封组件通常同时使用这两种材料。

## 二、物理性能对比

| 性能指标 | 碳石墨（浸渍后） | 反应烧结碳化硅 | 无压烧结碳化硅 |
|---------|----------------|----------------|----------------|
| 密度 (g/cm³) | 1.80-2.20 | 3.05-3.10 | 3.10-3.21 |
| 硬度 | HS 40-90 | HV 2000-2800 | HV 2500-2800 |
| 抗压强度 (MPa) | 150-340 | 1500-2500 | 2000-3000 |
| 抗折强度 (MPa) | 40-100 | 350-500 | 400-550 |
| 导热系数 (W/m·K) | 70-150 | 80-150 | 80-120 |
| 线膨胀系数 (×10⁻⁶/℃) | 2.5-5.0 | 4.0-4.5 | 4.0-4.5 |
| 最高使用温度 (℃) | 600（非氧化） | 1400 | 1600 |

关键结论：

1. 碳化硅硬度是碳石墨的 30-50 倍，耐磨性远超碳石墨
2. 两者导热系数相当，均远优于氧化铝陶瓷（25-35 W/m·K）
3. 碳化石墨韧性好，不易脆裂；碳化硅脆性大，易受热冲击开裂

## 三、化学耐蚀性对比

| 介质 | 碳石墨（酚醛浸渍） | 碳化硅 |
|------|-------------------|--------|
| 盐酸 (30%) | 良好 | 优秀 |
| 硫酸 (50%) | 良好 | 优秀 |
| 硝酸 (30%) | 一般 | 优秀 |
| 氢氟酸 | 差（需 PTFE 浸渍） | 差（SiC 与 HF 反应） |
| 氢氧化钠 (30%) | 良好 | 优秀 |
| 丙酮、醇类 | 优秀 | 优秀 |

关键结论：

1. 碳化硅耐几乎所有酸碱（除氢氟酸），化学稳定性优于碳石墨
2. 碳石墨的耐蚀性取决于浸渍类型，强氧化性介质（如浓硝酸）下易降解
3. 氢氟酸工况下两者均不适用，需选用 PTFE 或填充 PTFE 配对

## 四、成本与加工性对比

- **碳石墨毛坯**：约 30-80 元/kg，加工性好，可车削磨削
- **反应烧结碳化硅毛坯**：约 250-600 元/kg，需金刚石砂轮加工，加工成本高
- **无压烧结碳化硅毛坯**：约 400-900 元/kg，更硬更难加工

碳化硅单价比碳石墨高 3-8 倍，且加工成本高。但碳化硅耐磨性远超碳石墨，使用寿命长。在含固体颗粒介质或高速高压工况下，碳化硅的整体寿命成本可能更低。

## 五、典型应用场景

### 5.1 主流工况：清水、弱腐蚀介质、中低压

- 配对：浸渍碳石墨 + 反应烧结碳化硅
- 工况：离心泵、循环泵、冷却水泵，介质压力 <2 MPa，温度 <150℃
- 优势：性价比高，端面液膜稳定，寿命 8000-12000 小时

### 5.2 含颗粒介质：污水、矿浆、纸浆

- 配对：无压烧结碳化硅 vs 无压烧结碳化硅（硬对硬）
- 工况：含固体颗粒的磨损性介质
- 说明：颗粒会迅速磨损碳石墨软环，故改用 SiC vs SiC 配对，但成本高且端面液膜稳定性差

### 5.3 强腐蚀化工：盐酸、硫酸、碱液

- 配对：呋喃浸渍碳石墨 + 反应烧结碳化硅
- 工况：化工泵、反应釜，强酸碱介质
- 优势：耐蚀性与性价比平衡

### 5.4 高温热油：导热油、沥青介质

- 配对：锑浸渍碳石墨 + 反应烧结碳化硅
- 工况：温度 200-400℃，热油泵
- 优势：耐高温与承载能力兼顾

## 六、为什么"碳石墨+碳化硅"是主流配对

1. **互补优势**：碳石墨自润滑降低摩擦，碳化硅维持端面平整度
2. **液膜稳定性**：碳石墨软环优先磨损，形成微观凹谷容纳介质，稳定液膜
3. **成本平衡**：碳石墨便宜可定期更换，碳化硅耐磨可长期复用
4. **导热协调**：两者导热系数相当，端面热量可双向散失，避免局部过热
5. **容错性**：碳石墨作为牺牲磨损面，遇到异常工况先磨损报警，保护昂贵的碳化硅硬环

这些综合优势使"碳石墨+碳化硅"成为 90% 以上工业机械密封的默认配对。仅在特殊工况（如含颗粒、氢氟酸）才需要调整配对方案。`,
      en: `## Key Points

- Carbon graphite and silicon carbide are not substitutes but the classic "soft + hard" face pairing for mechanical seals
- Silicon carbide hardness HV 2000-2800 (carbon graphite only HS 40-90), far exceeding carbon graphite in wear resistance but more brittle
- Silicon carbide thermal conductivity 80-150 W/(m·K), comparable to carbon graphite and far superior to alumina ceramic
- Silicon carbide resists nearly all acids and alkalis (except HF), better chemical resistance than carbon graphite, but costs 3-8x impregnated carbon graphite
- Mainstream pairing: carbon graphite (soft face, self-lubricating sacrificial) + reaction-bonded silicon carbide (hard face, maintains flatness)

## 1. Positioning of the Two Materials

Mechanical seal face pairing typically follows the "one soft, one hard" principle: the soft face provides self-lubrication and sacrificial wear, while the hard face maintains flatness and withstands high-speed friction. Carbon graphite and silicon carbide are the classic combination:

- **Carbon graphite**: as the soft face (either rotating or stationary ring), leveraging layered structure self-lubrication to reduce friction, and protecting the hard face through preferential wear
- **Silicon carbide (SiC)**: as the hard face, maintaining face flatness through extreme hardness and wear resistance under high-speed friction

They are not competitors but complementary pairing materials. A single seal assembly typically uses both.

## 2. Physical Property Comparison

| Property | Carbon graphite (impregnated) | Reaction-bonded SiC | Pressureless sintered SiC |
|---------|-------------------------------|---------------------|---------------------------|
| Density (g/cm³) | 1.80-2.20 | 3.05-3.10 | 3.10-3.21 |
| Hardness | HS 40-90 | HV 2000-2800 | HV 2500-2800 |
| Compressive (MPa) | 150-340 | 1500-2500 | 2000-3000 |
| Flexural (MPa) | 40-100 | 350-500 | 400-550 |
| Thermal cond. (W/m·K) | 70-150 | 80-150 | 80-120 |
| CTE (×10⁻⁶/°C) | 2.5-5.0 | 4.0-4.5 | 4.0-4.5 |
| Max temp (°C) | 600 (non-oxidizing) | 1400 | 1600 |

Key conclusions:

1. SiC hardness is 30-50x carbon graphite, far exceeding in wear resistance
2. Both have comparable thermal conductivity, far superior to alumina ceramic (25-35 W/m·K)
3. Carbon graphite has better toughness and resists brittle fracture; SiC is brittle and prone to thermal shock cracking

## 3. Chemical Resistance Comparison

| Media | Carbon graphite (phenolic impregnated) | Silicon carbide |
|-------|----------------------------------------|-----------------|
| Hydrochloric acid (30%) | Good | Excellent |
| Sulfuric acid (50%) | Good | Excellent |
| Nitric acid (30%) | Fair | Excellent |
| Hydrofluoric acid | Poor (needs PTFE impregnation) | Poor (SiC reacts with HF) |
| Sodium hydroxide (30%) | Good | Excellent |
| Acetone, alcohols | Excellent | Excellent |

Key conclusions:

1. SiC resists nearly all acids and alkalis (except HF), with better chemical stability than carbon graphite
2. Carbon graphite resistance depends on impregnation type; strongly oxidizing media (e.g., concentrated nitric acid) cause degradation
3. Neither is suitable for hydrofluoric acid; PTFE or filled PTFE pairings are needed

## 4. Cost and Machinability Comparison

- **Carbon graphite blank**: ~30-80 yuan/kg, good machinability, can be turned and ground
- **Reaction-bonded SiC blank**: ~250-600 yuan/kg, requires diamond wheels, high machining cost
- **Pressureless sintered SiC blank**: ~400-900 yuan/kg, harder and more difficult to machine

SiC unit price is 3-8x carbon graphite, with higher machining cost. However, SiC wear resistance far exceeds carbon graphite, providing longer service life. In media with solids or high-speed/high-pressure service, SiC total life cost may be lower.

## 5. Typical Application Scenarios

### 5.1 Mainstream Service: clean water, mildly corrosive media, low-to-medium pressure

- Pairing: impregnated carbon graphite + reaction-bonded SiC
- Service: centrifugal pumps, circulation pumps, cooling water pumps, media pressure <2 MPa, temperature <150°C
- Advantage: cost-effective, stable fluid film, 8000-12000 hour life

### 5.2 Particulate Media: sewage, slurry, pulp

- Pairing: pressureless sintered SiC vs pressureless sintered SiC (hard vs hard)
- Service: abrasive media with solids
- Note: particles rapidly wear the carbon graphite soft face, so SiC vs SiC is used, but at higher cost and less stable fluid film

### 5.3 Strongly Corrosive Chemical: HCl, H₂SO₄, caustic

- Pairing: furan-impregnated carbon graphite + reaction-bonded SiC
- Service: chemical pumps, reactors, strong acid/alkali media
- Advantage: balances corrosion resistance and cost-effectiveness

### 5.4 High-Temperature Hot Oil: thermal oil, asphalt

- Pairing: antimony-impregnated carbon graphite + reaction-bonded SiC
- Service: 200-400°C, hot oil pumps
- Advantage: balances high-temperature resistance and load capacity

## 6. Why "Carbon Graphite + SiC" is the Mainstream Pairing

1. **Complementary strengths**: carbon graphite self-lubrication reduces friction, SiC maintains face flatness
2. **Film stability**: carbon graphite soft face preferentially wears, forming micro valleys that retain media and stabilize the film
3. **Cost balance**: cheap carbon graphite is periodically replaced, wear-resistant SiC is reused long-term
4. **Thermal coordination**: comparable thermal conductivity allows bidirectional heat dissipation, avoiding local overheating
5. **Fault tolerance**: carbon graphite serves as the sacrificial wear face, wearing first during abnormal conditions to alert and protect the expensive SiC hard face

These combined advantages make "carbon graphite + SiC" the default pairing for over 90% of industrial mechanical seals. Only special conditions (particulate media, HF) require alternative pairings.`,
    },
  },

  // 76. August 28, 2026 — How to Select Graphite Grade for Seal (report #101, P2 guide)
  {
    slug: "select-graphite-grade-seal",
    title: {
      zh: "如何为密封件选石墨牌号：M106D/M106K/M120K 选型决策指南",
      en: "How to Select a Graphite Grade for Seals: M106D/M106K/M120K Selection Decision Guide",
    },
    excerpt: {
      zh: "M106D、M106K、M120K 等牌号是碳石墨密封件最常用的材料牌号，但它们的浸渍类型、性能指标与适用工况各不相同。本文给出一份基于工况、介质、温度与压力的选型决策流程。",
      en: "Grades like M106D, M106K and M120K are the most commonly used carbon graphite seal materials, but their impregnation types, performance and suitable service conditions differ. This article provides a selection decision process based on media, temperature and pressure.",
    },
    tag: "selection",
    date: "2026-08-28",
    content: {
      zh: `## 核心要点

- M106D（锑浸渍）：耐高温 450-500℃、高载荷，适用热油泵、高温介质，高温工况首选牌号
- M106K/M120K（呋喃树脂浸渍）：耐酸碱腐蚀，适用化工泵、反应釜，主流耐腐牌号
- M106H（环氧树脂浸渍）：通用型，机械强度高，适用清水泵、冷却水泵
- 选型四步法：① 确认介质类型与腐蚀性 → ② 确认温度范围 → ③ 确认压力与 PV 值 → ④ 确认转速与端面配对
- 特殊工况选型：食品级选 PTFE 浸渍牌号；高磨损含颗粒介质选硬碳牌号；核电主泵选特殊高纯牌号

## 一、为什么石墨牌号选型如此重要

碳石墨密封件的材料牌号直接决定了密封的性能、寿命与可靠性。同一形状尺寸的密封环，使用不同牌号的碳石墨，其使用寿命可能相差 3-5 倍。错误的牌号选型是密封早期失效的最常见原因之一。

国内机械用碳石墨牌号沿用电碳行业传统编号：**M 表示机械碳石墨材料，数字代表基体系列，后缀字母表示浸渍物——F=酚醛树脂、H=环氧树脂、K=呋喃树脂（糠醇）、D=锑金属**；巴氏合金、铜、PTFE 等特殊浸渍的代号各厂不同，选型时以厂家样本为准。

## 二、主流牌号对比

### 2.1 M106D（锑浸渍碳石墨）

- **基体**：高强碳石墨基体，经锑金属浸渍
- **密度**：2.15-2.25 g/cm³（华豪检测 2.20）
- **肖氏硬度**：HS 85-95（检测 92）
- **抗压强度**：180-200 MPa（检测 190）
- **气孔率**：<2%
- **使用温度**：450-500℃（非氧化介质）
- **特点**：耐高温、高载荷，锑金属提供优异的导热性与承载能力
- **典型应用**：热油泵密封、高温导热油介质、石化高温泵、蒸汽介质

### 2.2 M120K（呋喃树脂浸渍碳石墨）

- **基体**：中强碳石墨基体，经呋喃树脂浸渍
- **密度**：1.80-1.90 g/cm³
- **肖氏硬度**：HS 55-75
- **抗压强度**：180-240 MPa
- **气孔率**：<2%
- **使用温度**：≤220℃
- **特点**：耐酸碱腐蚀性能优异，呋喃树脂对强酸强碱稳定
- **典型应用**：化工泵密封、酸碱介质、反应釜搅拌器、电镀设备

### 2.3 M106H（环氧树脂浸渍碳石墨）

- **基体**：通用碳石墨基体，经环氧树脂浸渍
- **密度**：1.75-1.85 g/cm³
- **肖氏硬度**：HS 50-70
- **抗压强度**：170-220 MPa
- **气孔率**：<2%
- **使用温度**：≤180℃
- **特点**：机械强度均衡，耐中等腐蚀，性价比高
- **典型应用**：清水泵、冷却水泵、循环泵、通用工业泵

### 2.4 其他常见牌号

- **M106F**（酚醛浸渍）：弱酸弱碱通用，使用温度 ≤200℃
- **M140K**（呋喃浸渍）：华豪在产呋喃牌号，基体强度更高
- **M191T**（碳化处理）：600℃ 极端高温，无需金属浸渍
- **PTFE 浸渍牌号**：食品制药卫生级，化学惰性最佳
- **铜/巴氏合金浸渍牌号**：导电导热或高速跑合工况，代号按厂家样本

## 三、选型四步法

### 第一步：确认介质类型与腐蚀性

| 介质类型 | 推荐浸渍 | 推荐牌号 |
|---------|---------|---------|
| 清水、冷却水 | 环氧树脂 | M106H |
| 弱酸弱碱 | 酚醛或呋喃树脂 | M106F / M106K |
| 强酸强碱 | 呋喃树脂 | M106K / M120K |
| 高温油类 | 锑金属 | M106D |
| 食品制药介质 | PTFE | 食品级牌号 |
| 含颗粒介质 | 锑金属或无浸渍硬碳 | M106D 或硬碳 |

### 第二步：确认温度范围

- **<180℃**：可选树脂浸渍牌号（M106F/M106H/M106K），性价比高
- **180-400℃**：必须选金属浸渍牌号（M106D），树脂浸渍会碳化失效
- **>400℃**：选 M191T 碳化处理牌号或定制高温牌号

### 第三步：确认压力与 PV 值

- **介质压力 <1.5 MPa**：可选非平衡型密封，所有牌号均适用
- **介质压力 1.5-5 MPa**：需平衡型密封，选高强牌号（M106K/M120K）
- **PV 值校核**：PV = 端面比压 × 端面线速度，不得超过材料许用 PV 值
  - 碳石墨 vs 碳化硅：许用 PV 7-15 MPa·m/s
  - 碳石墨 vs 硬质合金：许用 PV 5-10 MPa·m/s

### 第四步：确认转速与端面配对

- **转速 <3000 rpm**：标准碳石墨 + 反应烧结碳化硅配对
- **转速 3000-10000 rpm**：需选高强基体牌号（M106K），降低端面比压
- **配对硬环**：碳化硅 > 硬质合金 > 氧化铝，按介质腐蚀性与成本选

## 四、特殊工况选型建议

### 4.1 食品制药卫生级

- 介质：饮用水、乳制品、药液、酒精
- 推荐：PTFE 浸渍碳石墨，符合 FDA 认证
- 注意：避免使用金属浸渍牌号，防止金属离子迁移

### 4.2 高磨损含颗粒介质

- 介质：污水、矿浆、纸浆
- 推荐：考虑硬碳牌号或 SiC vs SiC 配对
- 说明：碳石墨软环会迅速磨损，需选高硬度牌号或改用硬对硬配对

### 4.3 核电主泵密封

- 介质：一回路高温高压水
- 推荐：特殊高纯碳石墨牌号，符合核电标准
- 说明：需要长期辐照稳定性、低杂质释放，必须按核电规范选型

### 4.4 真空泵干气密封

- 介质：气体（无液膜润滑）
- 推荐：锑浸渍高强牌号（M106D）+ 干气密封结构
- 说明：干摩擦工况需利用碳石墨自润滑性，金属浸渍提升承载能力

## 五、采购时的技术确认要点

向供应商下单时建议确认：

1. 牌号后缀字母与浸渍物的对应关系（F/H/K/D），以厂家样本为准
2. 浸渍类型与浸渍后气孔率（应 <2%）
3. 力学性能报告：硬度、抗压强度、抗折强度
4. 是否提供材料性能检测报告与材质证明
5. 批次稳定性：同一供应商不同批次性能差异应 <10%
6. 是否支持按图纸与样品定制加工

华豪密封件有限公司提供 M106K、M120K、M140K、M106D 等牌号及特殊浸渍定制，支持按图纸与样品定制加工碳石墨密封环、轴套与分段环，并提供完整的材料性能检测报告。`,
      en: `## Key Points

- M106D (antimony-impregnated): high temperature 450–500°C, high load, for hot oil pumps and high-temperature media, the first choice for high-temperature service
- M106K/M120K (furan resin-impregnated): acid/alkali corrosion resistance, for chemical pumps and reactors, mainstream corrosion-resistant grades
- M106H (epoxy resin-impregnated): general-purpose, high mechanical strength, for clean water and cooling water pumps
- Four-step selection: ① confirm media type and corrosivity → ② confirm temperature range → ③ confirm pressure and PV value → ④ confirm speed and face pairing
- Special service selection: food-grade → PTFE-impregnated; abrasive particulate media → hard carbon grades; nuclear primary pump → special high-purity grades

## 1. Why Graphite Grade Selection Matters

The carbon graphite grade directly determines seal performance, life and reliability. Sealing rings of identical dimensions using different carbon graphite grades may have 3-5x difference in service life. Incorrect grade selection is among the most common causes of premature seal failure.

Domestic mechanical carbon graphite grades follow the traditional electric-carbon numbering: **M denotes mechanical carbon graphite, the number the matrix series, and the suffix letter the impregnant — F=phenolic resin, H=epoxy resin, K=furan (furfuryl alcohol) resin, D=antimony metal**. Special impregnations (babbitt, copper, PTFE) use factory-specific codes; check the manufacturer's datasheet.

## 2. Mainstream Grade Comparison

### 2.1 M106D (Antimony-Impregnated Carbon Graphite)

- **Matrix**: high-strength carbon graphite matrix, antimony-impregnated
- **Density**: 2.15-2.25 g/cm³ (2.20 per Huahao testing)
- **Shore hardness**: HS 85-95 (92 tested)
- **Compressive strength**: 180-200 MPa (190 tested)
- **Porosity**: <2%
- **Service temperature**: 450-500°C (non-oxidizing media)
- **Features**: high-temperature and high-load resistance; antimony provides excellent thermal conductivity and load capacity
- **Typical applications**: hot oil pump seals, high-temperature thermal oil media, petrochemical high-temperature pumps, steam media

### 2.2 M120K (Furan Resin-Impregnated Carbon Graphite)

- **Matrix**: medium-strength carbon graphite matrix, furan resin-impregnated
- **Density**: 1.80-1.90 g/cm³
- **Shore hardness**: HS 55-75
- **Compressive strength**: 180-240 MPa
- **Porosity**: <2%
- **Service temperature**: ≤220°C
- **Features**: excellent acid/alkali corrosion resistance; furan resin is stable against strong acids and alkalis
- **Typical applications**: chemical pump seals, acid/alkali media, reactor agitators, electroplating equipment

### 2.3 M106H (Epoxy Resin-Impregnated Carbon Graphite)

- **Matrix**: general carbon graphite matrix, epoxy resin-impregnated
- **Density**: 1.75-1.85 g/cm³
- **Shore hardness**: HS 50-70
- **Compressive strength**: 170-220 MPa
- **Porosity**: <2%
- **Service temperature**: ≤180°C
- **Features**: balanced mechanical strength, moderate corrosion resistance, cost-effective
- **Typical applications**: clean water pumps, cooling water pumps, circulation pumps, general industrial pumps

### 2.4 Other Common Grades

- **M106F** (phenolic-impregnated): general weak acid/alkali service, ≤200°C
- **M140K** (furan-impregnated): Huahao's in-production furan grade with a higher-strength matrix
- **M191T** (carbonized): extreme 600°C service without metal impregnation
- **PTFE-impregnated grades**: food/pharmaceutical sanitary grade, best chemical inertness
- **Copper/babbitt-impregnated grades**: electrical or high-speed run-in service, codes vary by manufacturer

## 3. Four-Step Selection Method

### Step 1: Confirm Media Type and Corrosivity

| Media type | Recommended impregnation | Recommended grade |
|------------|--------------------------|-------------------|
| Clean water, cooling water | Epoxy resin | M106H |
| Weak acid/alkali | Phenolic or furan resin | M106F / M106K |
| Strong acid/alkali | Furan resin | M106K / M120K |
| High-temperature oils | Antimony metal | M106D |
| Food/pharmaceutical media | PTFE | Food-grade |
| Particulate media | Antimony or un-impregnated hard carbon | M106D or hard carbon |

### Step 2: Confirm Temperature Range

- **<180°C**: resin-impregnated grades available (M106F/M106H/M106K), cost-effective
- **180-400°C**: must use metal-impregnated grades (M106D); resin impregnation carbonizes and fails
- **>400°C**: M191T carbonized grade or custom high-temperature grade

### Step 3: Confirm Pressure and PV Value

- **Media pressure <1.5 MPa**: unbalanced seal acceptable, all grades suitable
- **Media pressure 1.5-5 MPa**: balanced seal needed, select high-strength grades (M106K/M120K)
- **PV verification**: PV = face pressure × face linear velocity, must not exceed material's allowable PV
  - Carbon graphite vs SiC: allowable PV 7-15 MPa·m/s
  - Carbon graphite vs hard alloy: allowable PV 5-10 MPa·m/s

### Step 4: Confirm Speed and Face Pairing

- **Speed <3000 rpm**: standard carbon graphite + reaction-bonded SiC pairing
- **Speed 3000-10000 rpm**: select high-strength matrix grade (M106K), reduce face pressure
- **Hard face pairing**: SiC > hard alloy > alumina, selected by media corrosivity and cost

## 4. Special Service Selection Recommendations

### 4.1 Food and Pharmaceutical Sanitary Grade

- Media: drinking water, dairy, pharmaceutical solutions, alcohol
- Recommendation: PTFE-impregnated carbon graphite, FDA-compliant
- Note: avoid metal-impregnated grades to prevent metal ion migration

### 4.2 High-Wear Particulate Media

- Media: sewage, slurry, pulp
- Recommendation: consider hard carbon grades or SiC vs SiC pairing
- Note: carbon graphite soft face wears rapidly; select high-hardness grades or switch to hard-vs-hard pairing

### 4.3 Nuclear Primary Pump Seal

- Media: primary loop high-temperature high-pressure water
- Recommendation: special high-purity carbon graphite grade, nuclear-standard compliant
- Note: requires long-term irradiation stability and low impurity release; selection must follow nuclear specifications

### 4.4 Vacuum Pump Dry Gas Seal

- Media: gas (no fluid film lubrication)
- Recommendation: antimony-impregnated high-strength grade (M106D) + dry gas seal structure
- Note: dry friction service requires leveraging carbon graphite self-lubrication; metal impregnation enhances load capacity

## 5. Technical Verification Points for Procurement

When ordering, recommend confirming:

1. The suffix-to-impregnant mapping (F/H/K/D), per the manufacturer datasheet
2. Impregnation type and post-impregnation porosity (should be <2%)
3. Mechanical property report: hardness, compressive strength, flexural strength
4. Whether material property test reports and certificates are provided
5. Batch stability: performance variation between batches from the same supplier should be <10%
6. Whether custom machining from drawings and samples is supported

Huahao Sealing Co., Ltd. supplies mainstream grades M106K, M120K, M106H and special impregnation customization, with custom machining of carbon graphite seal rings, bushings and segmented rings from drawings or samples, and complete material property test reports.`,
    },
  },
]
