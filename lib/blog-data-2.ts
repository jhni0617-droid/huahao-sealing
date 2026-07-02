export interface BlogPost {
  slug: string
  title: { zh: string; en: string }
  excerpt: { zh: string; en: string }
  tag: string
  date: string
  content: { zh: string; en: string }
}

export const blogPostsBatch2: BlogPost[] = [
  {
    slug: "resin-vs-metal-impregnation",
    title: {
      zh: "树脂浸渍与金属浸渍石墨对比：如何选择合适的浸渍工艺",
      en: "Resin vs Metal Impregnated Graphite: How to Choose the Right Impregnation Process",
    },
    excerpt: {
      zh: "碳石墨浸渍工艺直接决定密封件的孔隙率、强度与耐温性能。本文从霍邱县华豪密封件有限公司的生产实践出发，系统对比树脂浸渍与金属浸渍两类工艺的差异，帮助工程师在化工、水泵、机械密封等场景中做出正确选型。",
      en: "The impregnation process of carbon graphite directly determines porosity, mechanical strength, and temperature resistance. Drawing from Huahao Sealing Co., Ltd.'s production practice, this article systematically compares resin and metal impregnation to help engineers select the right material for chemical, pump, and mechanical seal applications.",
    },
    tag: "material",
    date: "2026-06-11",
    content: {
      zh: `## 核心要点

- 碳石墨浸渍工艺直接决定密封件的孔隙率、强度与耐温性能，是碳石墨密封环生产不可省略的关键工序
- 树脂浸渍石墨（M106H）耐温上限约 220℃、耐酸碱腐蚀；锑浸渍石墨（M254G）耐温达 450℃、抗压强度 180~240 MPa
- 高温锅炉给水泵、热油泵优先选金属浸渍石墨；强酸化工泵、食品级密封优先选树脂浸渍石墨
- 选型应综合介质腐蚀性、工作温度、压力等级、对磨件材质与经济成本，两类浸渍石墨各有适用领域

碳石墨材料因其独特的层状结构和自润滑特性，已成为机械密封、泵类轴套和旋转接头中的核心摩擦副材料。然而，未经浸渍的焙烧碳石墨内部存在大量连通孔隙，孔隙率通常在 10%~15% 之间，这会导致介质渗透、强度下降和密封失效。为消除孔隙并赋予材料新的性能，浸渍处理成为碳石墨生产中不可省略的关键工序。霍邱县华豪密封件有限公司在生产 BIA、BIM 等系列碳石墨密封环时，根据工况差异分别采用树脂浸渍和金属浸渍两种主流路线，下面结合实际工艺数据对二者进行系统比较。

## 一、浸渍原理与工艺流程对比

### 1.1 树脂浸渍石墨的工艺原理
树脂浸渍采用酚醛、环氧或呋喃树脂作为浸渍剂，在真空—加压浸渍釜中使液态树脂渗入石墨孔隙，随后在 130~180℃ 温度下固化。固化后的树脂在孔隙内形成连续网络，将开孔封闭。整个工艺对设备要求相对温和，固化温度不超过 200℃，能耗和设备投资均较低。霍邱县华豪密封件有限公司常用的酚醛浸渍石墨代号 M106H，其体积密度可由浸渍前的 1.65 g/cm³ 提升至 1.78 g/cm³ 以上，孔隙率降至 2% 以下。

### 1.2 金属浸渍石墨的工艺原理
金属浸渍则将巴氏合金、铜合金或锑金属在高于其熔点的温度下浸入石墨孔隙。常用锑浸渍石墨 M254G 的浸渍温度约为 630~680℃，需在保护气氛或真空下进行，以防止金属氧化。金属浸渍后材料体积密度可达 2.2~2.4 g/cm³，抗压强度显著提升，且具有更优的导热性能。由于浸渍温度高，对炉体耐热构件和气氛控制要求更高，生产成本相应上升。

## 二、性能差异的工程解读

### 2.1 机械强度对比
金属浸渍石墨的抗压强度通常可达 180~240 MPa，抗折强度 70~90 MPa，明显高于树脂浸渍石墨的 120~160 MPa 和 45~60 MPa。在承受高压或冲击载荷的场合，如高压水泵、压缩机活塞环，金属浸渍石墨具有更长的使用寿命。

### 2.2 耐温性能差异
树脂浸渍石墨的长期使用温度上限一般为 200~220℃，超过此温度树脂将发生碳化分解，导致孔隙重新开放、强度骤降。而锑金属浸渍石墨可长期在 450℃ 下工作，铜浸渍石墨甚至可达 500℃ 以上。因此锅炉给水泵、高温导热油泵等工况应优先选用金属浸渍石墨。

### 2.3 耐腐蚀性能
树脂浸渍石墨在除强氧化性酸以外的大多数酸、碱、盐介质中表现稳定，尤其适用于盐酸、稀硫酸、磷酸等介质。金属浸渍石墨中的锑、铜在碱液中相对稳定，但在含氯离子或氧化性酸介质中可能发生电化学腐蚀。因此化工泵输送强酸时，树脂浸渍石墨往往更合适。

### 2.4 摩擦学性能
金属浸渍石墨的硬度较高，对磨件的磨损相对明显，但自身耐磨性更好；树脂浸渍石墨较软，对不锈钢、碳化硅对磨件更为友好，PV 值适中。在水润滑条件下，树脂浸渍石墨的摩擦系数可维持在 0.05~0.10，磨损率较低。

## 三、选型建议与典型应用

### 3.1 优先选用树脂浸渍石墨的场景
- 输送酸、碱、盐溶液的化工泵
- 食品、制药行业的卫生级密封
- 工作温度低于 200℃ 的清水泵、循环水泵
- 对成本敏感的中低压机械密封

### 3.2 优先选用金属浸渍石墨的场景
- 高温高压锅炉给水泵、热油泵
- 高 PV 值的高速机械密封
- 压缩机活塞环和导向环
- 需要高导热散热的高负载工况

## 四、霍邱县华豪密封件有限公司的工艺控制要点

在生产实践中，浸渍效果不仅取决于浸渍剂种类，还与焙烧坯料的初始孔隙结构、浸渍压力、保压时间和固化/退火曲线密切相关。公司通过严格控制浸渍前坯料的孔隙径分布（集中在 1~5 μm）、采用三级真空—加压循环工艺（真空 -0.095 MPa、加压 1.2 MPa、保压 40 分钟），确保树脂或金属充分填充满孔隙。每批产品出厂前都进行水压密封性试验和密度抽测，确保孔隙率指标符合 HG/T 2642 标准要求。

## 结语

树脂浸渍与金属浸渍石墨各有其适用领域，不存在绝对的优劣之分。工程师在选型时应综合考虑介质腐蚀性、工作温度、压力等级、对磨件材质和经济成本等多重因素。霍邱县华豪密封件有限公司拥有完整的两条浸渍生产线，可根据客户工况提供从 M106H 树脂浸渍到 M254G 锑浸渍的全系列碳石墨密封环、轴套产品，并支持来图定制。如需进一步技术咨询或样品试用，欢迎联系我司技术部获取详细选型手册。`,
      en: `## Key Takeaways

- The impregnation process directly determines the porosity, mechanical strength, and temperature resistance of carbon graphite seal rings, making it an indispensable production step
- Resin-impregnated graphite (M106H) tops out near 220°C with strong acid/alkali resistance; antimony-impregnated graphite (M254G) reaches 450°C with compressive strength of 180~240 MPa
- Boiler feed pumps and hot-oil pumps should prioritize metal-impregnated graphite; acid-handling chemical pumps and food-grade seals favor resin-impregnated graphite
- Selection must balance medium corrosivity, temperature, pressure, mating material, and cost — each impregnation route has its own optimal domain

Carbon graphite has become a core friction-pair material in mechanical seals, pump bushings, and rotary joints thanks to its layered structure and self-lubricating behavior. However, baked carbon graphite before impregnation contains 10%~15% interconnected porosity that allows media penetration, reduces strength, and causes seal failure. To eliminate this porosity and add new properties, impregnation becomes an indispensable step in carbon graphite production. At Huahao Sealing Co., Ltd., we apply two mainstream impregnation routes — resin and metal — across our BIA and BIM series carbon graphite seal rings. The following is a systematic comparison based on our actual process data.

## 1. Principle and Process Comparison

### 1.1 Resin Impregnated Graphite
Resin impregnation uses phenolic, epoxy, or furan resin as the impregnant. Liquid resin is forced into graphite pores inside a vacuum-pressure autoclave, then cured at 130~180°C. The cured resin forms a continuous network inside the pores, sealing the open cells. The process is relatively mild: curing temperature stays below 200°C, keeping energy and equipment investment low. Our commonly used phenolic-impregnated grade M106H sees its bulk density rise from a pre-impregnation 1.65 g/cm³ to above 1.78 g/cm³, with porosity reduced to below 2%.

### 1.2 Metal Impregnated Graphite
Metal impregnation uses Babbitt alloy, copper alloy, or antimony metal, impregnating the graphite above the metal's melting point. The widely used antimony-impregnated grade M254G is processed at 630~680°C under protective atmosphere or vacuum to prevent oxidation. After impregnation, bulk density reaches 2.2~2.4 g/cm³, compressive strength increases significantly, and thermal conductivity improves. The high processing temperature demands more from furnace heat-resistant components and atmosphere control, raising production cost.

## 2. Engineering Interpretation of Performance Differences

### 2.1 Mechanical Strength
Metal-impregnated graphite typically achieves compressive strength of 180~240 MPa and flexural strength of 70~90 MPa, clearly higher than the 120~160 MPa and 45~60 MPa of resin-impregnated grades. Under high-pressure or impact loads — such as high-pressure pumps and compressor piston rings — metal-impregnated graphite delivers a longer service life.

### 2.2 Temperature Resistance
Resin-impregnated graphite has a long-term upper service limit of about 200~220°C; above this, the resin carbonizes, pores reopen, and strength collapses. Antimony-impregnated graphite works continuously at 450°C, and copper-impregnated grades can exceed 500°C. Boiler feed pumps and hot thermal-oil pumps should therefore prioritize metal-impregnated grades.

### 2.3 Corrosion Resistance
Resin-impregnated graphite is stable in most acids, alkalis, and salt solutions except strong oxidizing acids, making it ideal for hydrochloric acid, dilute sulfuric acid, and phosphoric acid service. Antimony and copper in metal-impregnated grades are relatively stable in alkaline media but may suffer electrochemical corrosion in chloride-containing or oxidizing-acid environments. For chemical pumps handling strong acids, resin-impregnated graphite is usually the safer choice.

### 2.4 Tribological Performance
Metal-impregnated graphite is harder and more abrasive to mating parts but offers better self-wear resistance. Resin-impregnated graphite is softer and friendlier to stainless steel and silicon carbide counter-faces, with a moderate PV value. Under water lubrication, resin-impregnated graphite maintains a friction coefficient of 0.05~0.10 with a low wear rate.

## 3. Selection Recommendations and Typical Applications

### 3.1 Scenarios for Resin-Impregnated Graphite
- Chemical pumps handling acids, alkalis, or salt solutions
- Hygienic seals in food and pharmaceutical service
- Clear-water and circulation pumps below 200°C
- Cost-sensitive low- to medium-pressure mechanical seals

### 3.2 Scenarios for Metal-Impregnated Graphite
- High-temperature high-pressure boiler feed pumps and hot-oil pumps
- High-speed mechanical seals with high PV value
- Compressor piston rings and guide rings
- High-load applications requiring heat dissipation

## 4. Process Control Highlights at Huahao Sealing Co., Ltd.

In production, impregnation quality depends not only on the impregnant type but also on the initial pore structure of the baked blank, impregnation pressure, hold time, and curing/annealing curve. We tightly control the pre-impregnation pore size distribution (concentrated at 1~5 μm), apply a three-stage vacuum-pressure cycle (vacuum -0.095 MPa, pressure 1.2 MPa, hold 40 minutes), and ensure full pore filling. Every batch undergoes hydraulic tightness testing and density sampling before shipment, conforming to HG/T 2642 requirements.

## Conclusion

Resin and metal impregnated graphite each have their own fields of application; neither is universally superior. Engineers should weigh medium corrosivity, working temperature, pressure class, mating material, and economic cost. Huahao Sealing Co., Ltd. operates complete resin and metal impregnation lines, offering everything from M106H resin-impregnated to M254G antimony-impregnated carbon graphite seal rings and bushings, with custom-drawing support. For technical consultation or sample trials, contact our engineering department for the full selection manual.`,
    },
  },
  {
    slug: "carbon-graphite-chemical-compatibility",
    title: {
      zh: "碳石墨材料的化学兼容性全解析：从强酸到强碱的选材指南",
      en: "Carbon Graphite Chemical Compatibility Guide: From Strong Acids to Strong Alkalis",
    },
    excerpt: {
      zh: "碳石墨因其化学惰性被誉为通用型耐腐蚀材料，但不同浸渍方式的石墨在不同介质中的表现差异显著。本文基于霍邱县华豪密封件有限公司的实测数据，系统梳理碳石墨密封环、轴套在酸、碱、盐、有机溶剂等介质中的兼容性，为化工选型提供参考。",
      en: "Carbon graphite is widely regarded as a chemically inert material, but performance varies significantly with impregnation type and medium. Based on test data from Huahao Sealing Co., Ltd., this guide systematically reviews the compatibility of carbon graphite seal rings and bushings across acids, alkalis, salts, and organic solvents.",
    },
    tag: "material",
    date: "2026-06-12",
    content: {
      zh: `## 核心要点

- 碳石墨密封环的化学兼容性由碳本体与浸渍剂共同决定，浸渍剂常成为耐蚀性的"短板"
- 酚醛浸渍石墨 M106H 耐盐酸、稀硫酸；呋喃浸渍 M106K 耐酸碱交替；锑浸渍 M254G 耐高温碱液但需慎用于含氯离子介质
- 选型须明确介质浓度、温度、流速与对磨件材质，参考化学兼容性速查表初步筛选
- 强氧化性介质（>50% 硝酸、铬酸）下任何浸渍石墨均不适用，应改用碳化硅对磨件

化工、制药、冶金等行业中，介质种类繁多，从强氧化性酸到高温碱液，从含氯有机溶剂到熔融盐，密封材料的化学兼容性直接决定设备能否长期稳定运行。碳石墨由于碳原子间强烈的共价键结合和层状晶体结构，对大多数介质表现出优异的耐蚀性。然而，浸渍剂作为石墨内部孔隙的填充物，其耐蚀性往往成为材料的"短板"。霍邱县华豪密封件有限公司结合多年化工泵、反应釜密封案例，整理出这份化学兼容性指南，供工程师选型时参考。

## 一、未浸渍石墨的本征耐蚀性

焙烧碳石墨的本征化学性质由碳决定。碳在常温下不与大多数酸、碱、盐反应，仅与强氧化性介质发生缓慢氧化。在 100℃ 以下，未浸渍石墨可耐受浓度 98% 的硫酸、37% 的盐酸、65% 的硝酸（短期）、磷酸、氢氟酸（除氧化性条件）、各种浓度的氢氧化钠、碳酸钠等碱液。然而，由于孔隙率较高（10%~15%），未浸渍石墨主要用于衬里、换热器等静态构件，不适合作为密封摩擦副材料。

## 二、树脂浸渍石墨的耐蚀性能

### 2.1 酚醛浸渍石墨（M106H）
酚醛树脂固化后形成高度交联的网状结构，对非氧化性酸、盐溶液和稀碱液具有良好耐受性。在以下介质中可长期使用：

- **盐酸**：任意浓度，温度 ≤ 100℃
- **硫酸**：浓度 ≤ 70%，温度 ≤ 90℃
- **磷酸**：任意浓度，温度 ≤ 120℃
- **氢氟酸**：浓度 ≤ 40%，温度 ≤ 60℃
- **氢氧化钠**：浓度 ≤ 30%，温度 ≤ 80℃

酚醛浸渍石墨在强氧化性介质中表现不佳。浓度高于 50% 的硝酸、浓度高于 70% 的硫酸、铬酸、次氯酸等介质会使酚醛树脂发生氧化降解，导致孔隙重新暴露。

### 2.2 呋喃浸渍石墨（M106K）
呋喃树脂耐酸耐碱性能优于酚醛，尤其适用于酸碱交替工况。在浓度 50% 的氢氧化钠、温度 100℃ 的工况下，呋喃浸渍石墨可长期稳定运行。霍邱县华豪密封件有限公司为某氯碱厂供应的 IJ 型离心泵轴套，采用呋喃浸渍石墨，已连续运行 18 个月无失效记录。

### 2.3 环氧浸渍石墨
环氧树脂对碱液和多种有机溶剂耐受性好，但耐温性能较低（≤ 150℃），适用于含有机溶剂的常温介质工况。

## 三、金属浸渍石墨的耐蚀性能

### 3.1 锑浸渍石墨（M254G）
锑金属在碱液中相对稳定，对中低浓度硫酸耐受性良好。在以下工况中性能突出：

- **氢氧化钠**：浓度 ≤ 50%，温度 ≤ 200℃
- **硫酸**：浓度 ≤ 60%，温度 ≤ 120℃
- **蒸汽**：温度 ≤ 450℃
- **高温导热油**：温度 ≤ 400℃

锑浸渍石墨在含氯离子介质中需谨慎使用。氯离子会破坏锑的钝化膜，引发点蚀。在海水冷却泵、含盐废水处理工况中，建议改用树脂浸渍或碳化硅对磨件。

### 3.2 铜浸渍石墨
铜浸渍石墨导热性能优异，但不耐氨、铵盐和强酸。主要用于高温、低腐蚀工况下的散热型密封。

## 四、有机溶剂工况的选型

碳石墨本体对绝大多数有机溶剂稳定，包括苯、甲苯、二甲苯、乙醇、丙酮、氯仿、二氯甲烷等。但浸渍剂的耐受性需重点考虑：酚醛、呋喃树脂在极性溶剂中可能溶胀；环氧树脂在酮类溶剂中耐受性下降。霍邱县华豪密封件有限公司建议，输送有机溶剂的泵类密封优先选用未浸渍高纯石墨或 PTFE 浸渍石墨。

## 五、化学兼容性速查表

| 介质 | 浓度 | 温度 | 酚醛浸渍 | 呋喃浸渍 | 锑浸渍 |
|------|------|------|----------|----------|--------|
| 盐酸 | 任意 | 沸点 | 适用 | 适用 | 不适用 |
| 硫酸 | 70% | 90℃ | 适用 | 适用 | 慎用 |
| 硝酸 | 30% | 常温 | 不适用 | 不适用 | 不适用 |
| 氢氧化钠 | 50% | 100℃ | 慎用 | 适用 | 适用 |
| 海水 | — | 常温 | 适用 | 适用 | 慎用 |
| 苯 | 100% | 常温 | 慎用 | 适用 | 适用 |
| 蒸汽 | — | 400℃ | 不适用 | 不适用 | 适用 |

## 六、选型中的常见误区

1. **认为碳石墨"万能耐蚀"**：忽略了浸渍剂的影响，导致在氧化性介质中过早失效。
2. **未考虑温度对耐蚀性的影响**：常温耐受的介质在高温下可能加速腐蚀。
3. **忽视对磨件的电化学腐蚀**：碳石墨作为阴极材料，可能加速对磨金属件的腐蚀。

## 结语

碳石墨密封材料的化学兼容性是浸渍剂性能与碳本体性能的"组合结果"。霍邱县华豪密封件有限公司建议工程师在选型时明确介质浓度、温度、流速和对磨件材质，并参考本文兼容性表进行初步筛选。对于复杂工况或新型介质，欢迎提供工况参数与我司技术部联合评估，确保密封方案可靠、经济。`,
      en: `## Key Takeaways

- The chemical compatibility of carbon graphite seal rings is jointly determined by the carbon body and the impregnant, with the impregnant often acting as the weak link
- Phenolic-impregnated M106H resists HCl and dilute H2SO4; furan-impregnated M106K handles alternating acid-alkali service; antimony-impregnated M254G suits high-temperature alkalis but must be used cautiously in chloride media
- Selection must define medium concentration, temperature, flow velocity, and mating material, then use the compatibility quick-reference table for initial screening
- In strong oxidizing media (>50% nitric acid, chromic acid), no impregnated graphite is suitable — switch to silicon carbide mating parts

In chemical, pharmaceutical, and metallurgical industries, the variety of media — from strongly oxidizing acids to high-temperature alkalis, from chlorinated solvents to molten salts — means the chemical compatibility of a seal material often determines whether equipment can run reliably long-term. Carbon graphite, with its strong covalent carbon bonds and layered crystal structure, resists most media. However, the impregnant that fills the internal pores often becomes the material's weakest link. Based on years of experience in chemical pumps and reactor seals, Huahao Sealing Co., Ltd. has compiled this compatibility guide for engineers.

## 1. Inherent Corrosion Resistance of Unimpregnated Graphite

The intrinsic chemistry of baked carbon graphite is defined by carbon itself. At room temperature, carbon does not react with most acids, alkalis, or salts; it only slowly oxidizes under strongly oxidizing conditions. Below 100°C, unimpregnated graphite tolerates 98% sulfuric acid, 37% hydrochloric acid, 65% nitric acid (short term), phosphoric acid, hydrofluoric acid (non-oxidizing), and sodium hydroxide and sodium carbonate at any concentration. However, its high porosity (10%~15%) means unimpregnated graphite is mainly used for static components like linings and heat exchangers, not as a sealing friction pair.

## 2. Corrosion Resistance of Resin-Impregnated Graphite

### 2.1 Phenolic-Impregnated Graphite (M106H)
Cured phenolic resin forms a highly crosslinked network with good resistance to non-oxidizing acids, salt solutions, and dilute alkalis. It can serve long-term in:
- **Hydrochloric acid**: any concentration, up to 100°C
- **Sulfuric acid**: up to 70%, up to 90°C
- **Phosphoric acid**: any concentration, up to 120°C
- **Hydrofluoric acid**: up to 40%, up to 60°C
- **Sodium hydroxide**: up to 30%, up to 80°C

Phenolic-impregnated graphite performs poorly in strongly oxidizing media. Nitric acid above 50%, sulfuric acid above 70%, chromic acid, and hypochlorous acid cause oxidative degradation of the resin, reopening the pores.

### 2.2 Furan-Impregnated Graphite (M106K)
Furan resin outperforms phenolic in both acid and alkali resistance and is ideal for alternating acid-alkali service. At 50% sodium hydroxide and 100°C, furan-impregnated graphite runs stably long-term. Our IJ centrifugal pump bushings supplied to a chlor-alkali plant, made of furan-impregnated graphite, have run 18 months without failure.

### 2.3 Epoxy-Impregnated Graphite
Epoxy offers good resistance to alkalis and many organic solvents, but temperature limit is lower (≤ 150°C), suitable for room-temperature media containing organic solvents.

## 3. Corrosion Resistance of Metal-Impregnated Graphite

### 3.1 Antimony-Impregnated Graphite (M254G)
Antimony is relatively stable in alkalis and tolerates mid-to-low concentration sulfuric acid. It excels in:
- **Sodium hydroxide**: up to 50%, up to 200°C
- **Sulfuric acid**: up to 60%, up to 120°C
- **Steam**: up to 450°C
- **Thermal oil**: up to 400°C

Antimony-impregnated graphite must be used cautiously in chloride-containing media. Chloride ions break the passive film on antimony, causing pitting. For seawater cooling pumps and brine wastewater service, resin-impregnated grades or silicon carbide mating parts are recommended.

### 3.2 Copper-Impregnated Graphite
Copper-impregnated graphite has excellent thermal conductivity but is not resistant to ammonia, ammonium salts, or strong acids. It is mainly used for heat-dissipating seals in high-temperature, low-corrosion service.

## 4. Organic Solvent Service

Carbon graphite itself is stable against most organic solvents, including benzene, toluene, xylene, ethanol, acetone, chloroform, and dichloromethane. The impregnant's tolerance, however, must be checked carefully: phenolic and furan resins may swell in polar solvents; epoxy degrades in ketones. For pumps handling organic solvents, we recommend unimpregnated high-purity graphite or PTFE-impregnated graphite.

## 5. Quick Compatibility Reference

| Medium | Conc. | Temp. | Phenolic | Furan | Antimony |
|--------|-------|-------|----------|-------|----------|
| HCl | any | boil | OK | OK | No |
| H2SO4 | 70% | 90°C | OK | OK | Caution |
| HNO3 | 30% | RT | No | No | No |
| NaOH | 50% | 100°C | Caution | OK | OK |
| Seawater | — | RT | OK | OK | Caution |
| Benzene | 100% | RT | Caution | OK | OK |
| Steam | — | 400°C | No | No | OK |

## 6. Common Selection Pitfalls

1. **Treating carbon graphite as universally corrosion-proof**, ignoring impregnant effects and causing premature failure in oxidizing media.
2. **Ignoring temperature effects**: media tolerable at room temperature may accelerate corrosion at high temperature.
3. **Overlooking galvanic corrosion of mating parts**: carbon graphite acts as a cathode and may accelerate corrosion of mating metal components.

## Conclusion

The chemical compatibility of carbon graphite is the combined result of impregnant and carbon body performance. We recommend that engineers define medium concentration, temperature, flow velocity, and mating material, then use this compatibility table for initial screening. For complex service or novel media, please share operating parameters with our engineering team for a joint evaluation to ensure a reliable, cost-effective sealing solution.`,
    },
  },
  {
    slug: "submersible-pump-graphite-bushing",
    title: {
      zh: "潜水泵石墨轴套的应用与选型：从清水到污水的全场景解析",
      en: "Submersible Pump Graphite Bushing Applications: From Clear Water to Sewage",
    },
    excerpt: {
      zh: "潜水泵长期浸没在介质中工作，导轴承的润滑与耐磨性决定整机寿命。本文系统介绍石墨轴套在潜水泵中的应用优势、选型要点与失效分析，结合霍邱县华豪密封件有限公司的供货案例，为泵厂工程师提供实用参考。",
      en: "Submersible pumps operate fully submerged, where the guide bearing's lubricity and wear resistance determine overall pump life. This article reviews the advantages, selection criteria, and failure analysis of graphite bushings in submersible pumps, drawing on supply cases from Huahao Sealing Co., Ltd.",
    },
    tag: "application",
    date: "2026-06-13",
    content: {
      zh: `## 核心要点

- 石墨轴套凭借自润滑性、化学稳定性与低热膨胀系数，成为潜水泵导轴承的首选材料
- 清水泵工况选树脂浸渍 M106H；污水泵选锑浸渍 M254G 硬度更高耐磨更优；海水工况避免锑浸渍以防氯离子点蚀
- 配合间隙取轴颈直径的 0.1%~0.15%，镶嵌式轴套过盈量约 0.05 mm，高温工况间隙需增大 0.02~0.03 mm
- 实际案例：90 kW 潜污泵改用 M254G 锑浸渍石墨轴套并增加导流槽后，寿命从 8 个月延长至 24 个月

潜水泵作为一种将电机与泵体集成于同一壳体内的设备，广泛应用于深井提水、市政排污、农田排灌、矿井排水和海上平台作业。由于电机和泵体共置，导轴承必须依靠介质本身（清水、污水或含砂水）进行润滑。金属或塑料轴套在干摩擦或边界润滑条件下磨损迅速，而碳石墨轴套凭借自润滑性、化学稳定性和良好的导热性，成为潜水泵导轴承的首选材料。霍邱县华豪密封件有限公司每年向国内主要潜水泵厂供应数十万件石墨轴套，本文结合实际应用总结选型要点。

## 一、石墨轴套在潜水泵中的核心优势

### 1.1 自润滑性能
碳石墨的层状晶体结构中，碳原子层间结合力弱，受力时层间易发生滑移。这一特性使石墨在无外加润滑剂的情况下，仍能维持较低的摩擦系数（0.05~0.15）。潜水泵启动瞬间，介质尚未进入导轴承间隙，石墨轴套的自润滑能力有效防止了干摩擦烧伤。

### 1.2 适应水润滑工况
水作为润滑剂的粘度极低，形成的动压油膜厚度有限。金属轴套在水润滑下难以建立有效润滑膜，而易发生粘着磨损。石墨轴套的硬度适中（肖氏硬度 40~60 HS），与对磨轴颈形成软-硬配合，磨损优先发生在石墨侧，保护了价值更高的不锈钢轴。

### 1.3 化学稳定性与耐腐蚀性
潜水泵工作的介质多样，包括含氯离子的海水、含硫化氢的污水、含酸碱的工业废水。树脂浸渍石墨在这些介质中化学惰性高，不会因腐蚀导致配合间隙变化，保证轴承精度长期稳定。

### 1.4 低热膨胀系数
碳石墨的线膨胀系数约为 (4~6)×10⁻⁶ /℃，仅为不锈钢的 1/3。潜水泵频繁启停引起的温度变化不会导致石墨轴套间隙显著变化，运转稳定性优于塑料轴套。

## 二、潜水泵石墨轴套的典型结构

### 2.1 整体式石墨轴套
整体式石墨轴套结构简单，加工方便，适用于中小型潜水泵（电机功率 ≤ 30 kW）。轴套壁厚一般取 3~6 mm，与轴颈配合间隙为轴颈直径的 0.1%~0.15%。

### 2.2 镶嵌式石墨轴套
镶嵌式轴套在金属外壳内压入石墨衬套，结合金属的强度和石墨的自润滑性，适用于大功率、高扬程潜水泵。霍邱县华豪密封件有限公司为某大型潜污泵厂提供的镶嵌式轴套，外径 80 mm，石墨衬套壁厚 4 mm，配合过盈量 0.05 mm，已稳定运行于 75 kW 潜污泵中。

### 2.3 三瓣式分体石墨轴承
对于难以整体拆装的大型立式潜水泵，可采用三瓣式分体石墨轴承。这种结构允许在不拆卸轴系的情况下更换轴承，显著降低维修工时。

## 三、根据介质特性进行选型

### 3.1 清水泵工况
深井泵、农用潜水泵输送清水，介质含固量低，可采用树脂浸渍石墨 M106H 或 M120H。运行参数：温度 ≤ 40℃，PV 值 ≤ 5 MPa·m/s。轴颈硬度建议 ≥ HRC 45，对磨面粗糙度 Ra ≤ 0.4 μm。

### 3.2 污水泵工况
潜水排污泵输送含纤维、悬浮物的污水，介质对轴套有冲刷磨损。建议选用锑浸渍石墨 M254G，硬度更高，耐磨性更优。轴套可开设导流槽（宽 2 mm、深 1.5 mm、轴向均布 6~8 条），促进介质进入摩擦面。

### 3.3 海水工况
海水含氯离子，对锑浸渍石墨有腐蚀风险，应选用树脂浸渍或铜浸渍石墨。轴颈建议采用 316L 不锈钢或双相不锈钢，对磨面进行氮化处理。

### 3.4 高温工况
热水循环潜水泵介质温度可达 90~120℃，应选用锑浸渍石墨或高温树脂浸渍石墨。注意配合间隙应比常温工况增大 0.02~0.03 mm，以补偿热膨胀。

## 四、失效模式与预防措施

### 4.1 干磨烧伤
潜水泵低水位运行或滤网堵塞时，导轴承处介质供应不足，石墨轴套发生干摩擦烧伤，表面出现黑色烧痕和裂纹。预防措施：安装水位保护开关，定期清理滤网。

### 4.2 磨料磨损
介质中含砂量高时，砂粒进入摩擦间隙，形成三体磨损。失效表现为轴套内孔均匀扩径、表面粗糙化。预防措施：增设旋流分离器或磁性过滤器；选用硬度更高的锑浸渍石墨。

### 4.3 电化学腐蚀
变频驱动潜水泵的轴电流可能通过石墨轴套放电，导致轴颈和轴套表面出现"搓衣板"状波纹磨损。预防措施：在电机非驱动端安装接地碳刷，将轴电流引导至壳体。

### 4.4 配合松动
长期运行后，石墨轴套外径与轴承座孔配合可能因磨损而松动，引起轴套旋转。预防措施：装配时采用合适的过盈配合（外径过盈 0.02~0.04 mm），必要时使用厌氧胶固定。

## 五、霍邱县华豪密封件有限公司的供货案例

为某市政污水提升泵站 90 kW 潜污泵提供的石墨轴套，原采用酚醛树脂浸渍，平均寿命 8 个月。改用锑浸渍石墨 M254G 并增加导流槽后，连续运行 24 个月，磨损量仅 0.15 mm，预计可继续使用至 30 个月。

## 结语

潜水泵石墨轴套的选型需综合考虑介质特性、泵功率、运行工况和维护便利性。霍邱县华豪密封件有限公司提供从 M106H 树脂浸渍到 M254G 锑浸渍的全系列石墨轴套，并支持来图定制。我们将根据您的具体工况提供个性化建议，欢迎联系我司技术部进行深度交流。`,
      en: `## Key Takeaways

- Graphite bushings, with self-lubricity, chemical stability, and low thermal expansion, have become the preferred guide bearing material for submersible pumps
- Clear-water service uses resin-impregnated M106H; sewage service prefers harder, more wear-resistant antimony-impregnated M254G; seawater service should avoid antimony to prevent chloride pitting
- Running clearance is 0.1%~0.15% of journal diameter; insert-type bushings use about 0.05 mm interference; high-temperature service needs 0.02~0.03 mm extra clearance
- Case study: a 90 kW sewage pump switched to M254G antimony-impregnated graphite bushings with flutes, extending service life from 8 to 24 months

A submersible pump integrates the motor and pump body in a single housing, widely used in deep-well water lifting, municipal sewage, agricultural drainage, mine dewatering, and offshore platform service. Because motor and pump share one body, the guide bearing must rely on the pumped medium itself (clear water, sewage, or sandy water) for lubrication. Metal or plastic bushings wear rapidly under dry or boundary lubrication, while carbon graphite bushings — thanks to self-lubricity, chemical stability, and good thermal conductivity — have become the preferred guide bearing material. Huahao Sealing Co., Ltd. supplies hundreds of thousands of graphite bushings annually to major domestic submersible pump makers; this article summarizes our selection insights.

## 1. Core Advantages of Graphite Bushings in Submersible Pumps

### 1.1 Self-Lubrication
In carbon graphite's layered crystal structure, the interlayer bond is weak, allowing easy interlayer sliding under load. This means graphite maintains a low friction coefficient (0.05~0.15) without any external lubricant. At pump startup, before the medium has reached the bearing clearance, the bushing's self-lubricity prevents dry-friction burns.

### 1.2 Adaptability to Water Lubrication
Water as a lubricant has very low viscosity, producing a thin hydrodynamic film. Metal bushings struggle to build an effective film in water and tend to adhesive wear. Graphite bushings (Shore hardness 40~60 HS) form a soft-hard pairing with the steel journal; wear preferentially occurs on the graphite side, protecting the more valuable stainless shaft.

### 1.3 Chemical Stability and Corrosion Resistance
Submersible pump media vary widely — chloride-containing seawater, H2S-bearing sewage, acid-alkali industrial effluent. Resin-impregnated graphite is chemically inert in these media, avoiding clearance changes caused by corrosion and preserving bearing precision long-term.

### 1.4 Low Thermal Expansion
Carbon graphite's linear expansion coefficient is about (4~6)×10⁻⁶ /°C, only one third of stainless steel. Frequent pump starts and stops cause temperature swings that do not significantly change graphite bushing clearance, delivering better stability than plastic bushings.

## 2. Typical Structures of Submersible Pump Graphite Bushings

### 2.1 Solid Graphite Bushing
Simple and easy to machine, suitable for small and medium submersible pumps (motor power ≤ 30 kW). Wall thickness is typically 3~6 mm; clearance with the journal is 0.1%~0.15% of journal diameter.

### 2.2 Insert-Type Graphite Bushing
A graphite liner is pressed into a metal sleeve, combining metal strength with graphite lubricity, suitable for high-power, high-head pumps. We supply a 75 kW sewage pump with an insert bushing: outer diameter 80 mm, graphite liner 4 mm thick, interference 0.05 mm — running stably.

### 2.3 Segmented Three-Piece Graphite Bearing
For large vertical submersible pumps where shaft disassembly is impractical, three-segment split bearings allow in-place replacement without removing the shaft, significantly reducing maintenance hours.

## 3. Selection by Medium Characteristics

### 3.1 Clear-Water Service
Deep-well and agricultural pumps handle clean water with low solids. Resin-impregnated M106H or M120H is suitable. Parameters: temperature ≤ 40°C, PV ≤ 5 MPa·m/s. Journal hardness ≥ HRC 45; mating surface roughness Ra ≤ 0.4 μm.

### 3.2 Sewage Service
Sewage pumps handle fibrous and suspended matter that abrades the bushing. Antimony-impregnated M254G is preferred for its higher hardness and wear resistance. Flutes (2 mm wide, 1.5 mm deep, 6~8 axial grooves) can be cut to promote medium entry.

### 3.3 Seawater Service
Chloride in seawater risks corroding antimony-impregnated graphite; resin or copper-impregnated grades should be used. Journal material should be 316L stainless or duplex stainless steel, with nitrided mating surface.

### 3.4 High-Temperature Service
Hot-water circulation pumps may run at 90~120°C; antimony-impregnated or high-temperature resin-impregnated graphite is recommended. Increase running clearance by 0.02~0.03 mm versus room-temperature service to compensate for thermal expansion.

## 4. Failure Modes and Preventive Measures

### 4.1 Dry-Run Burns
Low water level or clogged strainers starve the bearing of medium, causing dry friction burns on the bushing — black burn marks and cracks appear. Mitigation: install low-water level switches, clean strainers regularly.

### 4.2 Abrasive Wear
High sand content in the medium causes three-body wear in the clearance, presenting as uniform bore enlargement and surface roughening. Mitigation: install hydro-cyclones or magnetic filters; choose harder antimony-impregnated graphite.

### 4.3 Galvanic Corrosion
Shaft current from variable-frequency drives may discharge through the graphite bushing, producing "washboard" ripple wear on journal and bushing. Mitigation: install a grounding carbon brush at the non-drive end to route current to the housing.

### 4.4 Fit Loosening
Long-term operation may loosen the outer-diameter interference fit between bushing and housing bore, causing the bushing to rotate. Mitigation: use proper interference (0.02~0.04 mm) at assembly; anaerobic adhesive may be applied if necessary.

## 5. Huahao Sealing Supply Case

A 90 kW municipal sewage lift pump originally used phenolic-impregnated bushings with an average life of 8 months. After switching to antimony-impregnated M254G with flutes, it ran continuously for 24 months with only 0.15 mm wear — projected to reach 30 months.

## Conclusion

Submersible pump graphite bushing selection must integrate medium characteristics, pump power, operating duty, and maintainability. Huahao Sealing Co., Ltd. offers the full range of M106H resin-impregnated and M254G antimony-impregnated graphite bushings with custom-drawing support. We provide case-specific recommendations; please contact our engineering team for in-depth consultation.`,
    },
  },
  {
    slug: "marine-stern-shaft-graphite-seal",
    title: {
      zh: "船舶艉轴密封中的石墨应用：从内河到远洋的可靠方案",
      en: "Graphite Applications in Marine Stern Shaft Seals: From Inland Waterways to Ocean-Going Vessels",
    },
    excerpt: {
      zh: "船舶艉轴密封既要防止海水漏入机舱，又要避免润滑油泄漏污染水域。碳石墨密封环作为艉轴密封的核心摩擦副，需承受海水腐蚀、轴系振动和温度波动。本文基于霍邱县华豪密封件有限公司的供货案例，介绍石墨在艉轴密封中的应用与选型。",
      en: "Marine stern shaft seals must keep seawater out of the engine room while preventing lubricant leakage into the water. As the core friction pair, carbon graphite seal rings must withstand seawater corrosion, shaft vibration, and temperature swings. Based on Huahao Sealing Co., Ltd. cases, this article reviews graphite applications and selection in stern shaft seals.",
    },
    tag: "application",
    date: "2026-06-14",
    content: {
      zh: `## 核心要点

- 碳石墨密封环因耐海水腐蚀、自润滑与低磨损特性，成为船舶艉轴密封唇口与端面摩擦副的首选材料
- 高盐度海水工况下锑浸渍石墨易发生点蚀，应选铜浸渍或树脂浸渍石墨，并配 316L 不锈钢或陶瓷涂层轴套
- 艉轴密封端面平面度要求 ≤ 0.6 μm、粗糙度 Ra ≤ 0.1 μm，须采用单点金刚石车削加化学机械抛光
- 8000 TEU 集装箱船端面密封用 M254G 锑浸渍石墨静环配碳化硅动环，泄漏量稳定在 2 L/24h 以内

船舶艉轴是连接主机与螺旋桨的关键传动部件，艉轴密封装置位于船体与水的交界处，工作条件极为苛刻：既要承受 0.1~0.3 MPa 的舷外水压，又要耐受轴系偏心、振动和螺旋桨脉动载荷，还必须满足国际海事组织（IMO）和 MARPOL 公约对润滑油泄漏的严格限制。碳石墨因其耐海水腐蚀、自润滑和低磨损特性，成为艉轴密封唇口或端面摩擦副的首选材料。霍邱县华豪密封件有限公司为国内多家船厂配套供应艉轴密封石墨环，本文梳理工程要点。

## 一、艉轴密封的典型结构

### 1.1 唇形密封（Lip Seal）
唇形密封以橡胶唇口压紧艉轴表面实现密封，常用于中小型船舶。唇口下方通常设置一个石墨-铜合金组成的"备用密封"，在主密封失效时应急启用。霍邱县华豪密封件有限公司供应的备用密封石墨环采用锑浸渍 M254G，硬度高、耐磨性好，可在应急工况下短时间内支撑轴系运转。

### 1.2 端面机械密封（Face Seal）
端面机械密封以两个平行端面相互贴合形成密封，广泛应用于大型货轮、油轮。其动环通常为碳化硅或氧化铝陶瓷，静环为浸渍碳石墨。霍邱县华豪密封件有限公司为 5 万吨散货船提供的艉轴端面密封，采用 M254G 锑浸渍石墨静环与反应烧结碳化硅动环配对，PV 值达到 8 MPa·m/s，已连续运行 3 年无失效。

### 1.3 水润滑轴承式密封
部分环保要求高的船舶采用水润滑 bearing 式密封，以海水作为润滑剂。此类密封的轴承材料常选用铜浸渍或树脂浸渍石墨，配合不锈钢或陶瓷涂层轴套。

## 二、艉轴密封石墨环的技术要求

### 2.1 耐海水腐蚀性
海水含约 3.5% 的溶解盐，氯离子浓度高达 19000 mg/L。锑浸渍石墨在长期浸泡中，锑金属可能发生选择性腐蚀。霍邱县华豪密封件有限公司推荐采用以下方案：
- **树脂浸渍石墨 M106H**：清水或低盐度水域，温度 ≤ 60℃
- **铜浸渍石墨**：高盐度海水，需配合不锈钢或陶瓷涂层轴套
- **碳化硅对磨**：高 PV 值、长寿命要求场合

### 2.2 抗振动疲劳性能
船舶在波浪中航行时，艉轴存在径向跳动和角向偏转。石墨环在振动载荷下易发生脆性开裂。我司对艉轴密封用石墨环采用以下增强措施：
- 选用高强度浸渍石墨，抗压强度 ≥ 200 MPa
- 静环端面加工径向缓冲槽，分散接触应力
- 金属外壳采用 316L 不锈钢，石墨环与外壳采用过盈配合 + 弹性 O 圈密封

### 2.3 端面平面度与粗糙度
艉轴密封端面的平面度要求 ≤ 0.6 μm，粗糙度 Ra ≤ 0.1 μm。霍邱县华豪密封件有限公司采用单点金刚石车削 + 化学机械抛光工艺，可稳定达到平面度 0.4 μm、Ra 0.05 μm 的精度。

## 三、典型船舶应用案例

### 3.1 内河散货船（2000 DWT）
某 2000 载重吨内河散货船采用 Simplex 型唇形密封，主密封为丁腈橡胶唇口，备用密封为石墨环。原锑浸渍石墨环在长江口咸淡水交替工况下，6 个月出现点蚀。改用我司铜浸渍石墨环后，运行 18 个月检查，无明显腐蚀，磨损量 0.08 mm。

### 3.2 远洋集装箱船（8000 TEU）
某 8000 TEU 集装箱船采用端面机械密封，轴径 580 mm，转速 90 rpm，舷外水压 0.18 MPa。我司供应的 M254G 锑浸渍石墨静环，与碳化硅动环配对，泄漏量稳定在 2 L/24h 以内，符合 IMO MEPC.191(61) 规范。

### 3.3 海洋平台工作船
某海洋平台工作船采用全水润滑艉轴密封，介质为海水，温度 5~30℃。我司提供的树脂浸渍石墨轴承套，内径 320 mm，与镀铬不锈钢轴套配合，磨损率 0.02 mm/1000h，达到船级社 5 年大修周期要求。

## 四、失效分析与改进建议

### 4.1 端面热裂
高 PV 值工况下，石墨端面局部温升过高，导致热应力开裂。改进措施：选用导热系数更高的铜浸渍或锑浸渍石墨；优化冷却水循环；适当降低端面比压。

### 4.2 干摩擦烧伤
船舶坞修后启动初期，艉轴密封处于干摩擦状态。改进措施：在密封腔内预充填润滑脂；启动前手动盘车 2~3 圈，使密封面形成初始润滑膜。

### 4.3 异物进入
渔网、塑料袋等异物可能卷入密封面，造成端面划伤。改进措施：在艉轴入口处安装切割式防护罩；定期检查并清理密封腔。

## 五、检验与维护建议

- **日常检查**：每航次检查艉轴泄漏量，正常应 < 5 L/24h
- **季度检查**：触摸密封壳体温度，与环境温差应 < 15℃
- **年度检查**：取样分析泄漏油，检查是否含水
- **坞修检查**：测量密封端面磨损量，超过 1.5 mm 应更换

## 结语

船舶艉轴密封石墨环的选型需综合考虑船舶类型、水域盐度、轴系参数和环保要求。霍邱县华豪密封件有限公司拥有 CCS、ABS、DNV 等船级社认证，可供应各种规格的艉轴密封石墨环、轴套和备用密封件。我司技术部可配合船厂进行密封方案设计、失效分析和寿命预测，欢迎联系接洽。`,
      en: `## Key Takeaways

- Carbon graphite seal rings, with seawater corrosion resistance, self-lubricity, and low wear, are the preferred friction-pair material for marine stern shaft seal lips and faces
- In high-salinity seawater, antimony-impregnated graphite is prone to pitting — choose copper- or resin-impregnated graphite paired with 316L stainless or ceramic-coated sleeves
- Stern shaft seal faces require flatness ≤ 0.6 μm and roughness Ra ≤ 0.1 μm, achieved by single-point diamond turning plus chemical-mechanical polishing
- An 8000 TEU container ship face seal using M254G antimony-impregnated stationary ring with SiC rotary maintains leakage below 2 L/24h

A ship's stern shaft connects the main engine to the propeller, and the stern shaft seal sits at the interface between hull and seawater under very demanding conditions: it must withstand 0.1~0.3 MPa external water pressure, absorb shaft eccentricity, vibration, and propeller pulsation, and meet the strict lubricant-leakage limits set by IMO and MARPOL. Carbon graphite — with seawater corrosion resistance, self-lubricity, and low wear — has become the preferred friction-pair material for stern shaft seal lips or faces. Huahao Sealing Co., Ltd. supplies stern shaft seal graphite rings to many domestic shipyards; this article outlines engineering essentials.

## 1. Typical Stern Shaft Seal Structures

### 1.1 Lip Seal
A lip seal presses a rubber lip against the shaft surface; it is common on small and medium vessels. A backup graphite-copper seal is often installed beneath the lip for emergency use. Our backup seal rings use antimony-impregnated M254G — high hardness and wear resistance for short-duration emergency operation.

### 1.2 Face Mechanical Seal
Two parallel faces contact each other to seal, widely used on large cargo ships and tankers. The rotating face is typically silicon carbide or alumina ceramic; the stationary face is impregnated carbon graphite. For a 50,000 DWT bulk carrier we supply an antimony-impregnated M254G stationary ring paired with reaction-bonded silicon carbide — PV value reaches 8 MPa·m/s, with three years of failure-free operation.

### 1.3 Water-Lubricated Bearing Seal
Environmentally demanding vessels use water-lubricated bearings with seawater as the lubricant. The bearing material is often copper- or resin-impregnated graphite paired with stainless steel or ceramic-coated shaft sleeves.

## 2. Technical Requirements for Stern Shaft Seal Graphite Rings

### 2.1 Seawater Corrosion Resistance
Seawater contains about 3.5% dissolved salts, with chloride concentration up to 19,000 mg/L. Antimony may suffer selective corrosion during long-term immersion. We recommend:
- **Resin-impregnated M106H**: fresh or low-salinity water, ≤ 60°C
- **Copper-impregnated graphite**: high-salinity seawater, paired with stainless or ceramic-coated sleeve
- **Silicon carbide pairing**: high PV, long-life applications

### 2.2 Vibration Fatigue Resistance
At sea, the shaft has radial runout and angular deflection. Graphite rings under vibratory load tend to brittle cracking. Our enhancement measures include:
- High-strength impregnated graphite, compressive strength ≥ 200 MPa
- Radial buffer grooves on the stationary face to distribute contact stress
- 316L stainless housing, interference fit + elastomeric O-ring sealing

### 2.3 Face Flatness and Roughness
Stern shaft seal face flatness ≤ 0.6 μm, roughness Ra ≤ 0.1 μm. We apply single-point diamond turning + chemical-mechanical polishing to consistently achieve flatness 0.4 μm and Ra 0.05 μm.

## 3. Typical Ship Application Cases

### 3.1 Inland Bulk Carrier (2000 DWT)
A 2000 DWT inland bulk carrier uses a Simplex lip seal with NBR lip and graphite backup ring. The original antimony-impregnated ring pitted within 6 months in the brackish water of the Yangtze estuary. Switching to our copper-impregnated ring delivered 18 months of inspection-free service with only 0.08 mm wear.

### 3.2 Ocean-Going Container Ship (8000 TEU)
An 8000 TEU container ship uses a face mechanical seal: shaft diameter 580 mm, speed 90 rpm, external water pressure 0.18 MPa. Our antimony-impregnated M254G stationary ring paired with silicon carbide rotary maintains leakage below 2 L/24h, conforming to IMO MEPC.191(61).

### 3.3 Offshore Platform Supply Vessel
An offshore supply vessel uses a fully water-lubricated stern shaft seal with seawater at 5~30°C. Our resin-impregnated graphite bearing sleeve, inner diameter 320 mm, paired with chrome-plated stainless sleeve, wears at 0.02 mm/1000h — meeting classification society's 5-year overhaul cycle.

## 4. Failure Analysis and Improvement

### 4.1 Face Thermal Cracking
Under high PV, localized overheating causes thermal stress cracks. Mitigation: choose copper- or antimony-impregnated graphite with higher thermal conductivity; optimize cooling water circulation; reduce face pressure appropriately.

### 4.2 Dry Friction Burns
After drydock, the stern seal starts in dry friction. Mitigation: pre-fill the seal chamber with grease; manually turn the shaft 2~3 revolutions before start to establish an initial lubricating film.

### 4.3 Foreign Object Intrusion
Fishing nets and plastic bags may be drawn into the seal face, scratching it. Mitigation: install a cutting-type guard at the shaft inlet; inspect and clean the seal chamber regularly.

## 5. Inspection and Maintenance Recommendations

- **Daily check**: every voyage, check leakage rate — normal < 5 L/24h
- **Quarterly check**: touch the seal housing; temperature difference vs ambient should be < 15°C
- **Annual check**: sample leakage oil for water content
- **Drydock check**: measure face wear; replace if over 1.5 mm

## Conclusion

Stern shaft seal graphite ring selection must integrate vessel type, water salinity, shaft parameters, and environmental requirements. Huahao Sealing Co., Ltd. holds CCS, ABS, and DNV certifications and supplies stern shaft seal graphite rings, sleeves, and backup seals of all sizes. Our engineering team partners with shipyards on seal design, failure analysis, and life prediction — please contact us for more information.`,
    },
  },
  {
    slug: "food-grade-carbon-graphite-seals",
    title: {
      zh: "食品级碳石墨密封件的要求与标准：FDA、EC1935 与 GMP 全解析",
      en: "Food-Grade Carbon Graphite Seal Requirements: FDA, EC1935, and GMP Explained",
    },
    excerpt: {
      zh: "食品、饮料、制药行业对密封材料的要求远高于普通工业。碳石墨密封件必须满足 FDA、EC1935/2004 等法规要求，避免对产品造成污染。本文系统介绍食品级石墨密封件的材料选择、检测标准与认证流程。",
      en: "Food, beverage, and pharmaceutical industries impose far higher requirements on sealing materials than general industry. Carbon graphite seals must comply with FDA, EC1935/2004 and similar regulations to avoid product contamination. This article reviews material selection, testing standards, and certification for food-grade graphite seals.",
    },
    tag: "faq",
    date: "2026-06-15",
    content: {
      zh: `## 核心要点

- 食品级碳石墨密封件须满足 FDA 21 CFR、欧盟 EC 1935/2004、中国 GB 4806 等法规，浸渍剂需逐一评估迁移限量
- 石墨基体灰分 ≤ 0.1%、金属杂质 ≤ 50 ppm，须选用石油焦原料并优先采用 PTFE 浸渍高纯石墨
- PTFE 浸渍石墨化学惰性最佳、适用于所有食品工况，但须选用明确声明不含 PFOA 的工艺
- 机加工须在 ISO 8 级洁净车间进行，使用 NSF H1 食品级切削液，出厂须提供符合性声明和迁移测试报告

食品、饮料、乳制品和制药行业生产过程中，设备与介质直接接触的密封件必须满足严格的卫生和法规要求。任何材料的迁移、剥落或细菌滋生都可能导致产品污染、整批报废甚至召回事件。碳石墨密封件凭借化学惰性、无塑化剂、耐高温蒸汽灭菌等特性，在食品泵、搅拌器、均质机等设备中广泛应用。然而，普通工业级石墨并不能直接用于食品工况，必须经过专门的材料选择、浸渍处理和合规认证。霍邱县华豪密封件有限公司已开发完整的食品级石墨密封件产品线，本文系统梳理相关要求。

## 一、食品级石墨密封件的核心法规框架

### 1.1 美国 FDA 21 CFR
美国食品药品监督管理局的 21 CFR（联邦法规第 21 章）对食品接触材料作出规定。与碳石墨密封件相关的条款包括：
- **21 CFR 178.3297**：石墨作为脱模剂和润滑剂，允许用于食品接触表面
- **21 CFR 175.300**：浸渍剂树脂（酚醛、环氧）需符合特定迁移限量
- **21 CFR 177.2600**：橡胶和弹性体密封件的萃取物限量

石墨本体作为碳元素，符合 FDA 的"一般公认安全"（GRAS）范畴。但浸渍剂、粘结剂和填充物需逐一评估。

### 1.2 欧盟 EC 1935/2004
欧盟 EC 1935/2004 框架法规规定食品接触材料不得向食品释放可能危害人类健康、改变食品成分或劣化食品感官特性的物质。配套的 EC 2023/2006 规则规定了良好生产规范（GMP）。出口欧盟的食品级石墨密封件必须提供符合性声明（DoC），并满足以下迁移限量：
- **总迁移限（OML）**：≤ 10 mg/dm²
- **特定迁移限（SML）**：视物质而定，例如双酚 A ≤ 0.6 mg/kg

### 1.3 中国 GB 4806 系列
GB 4806 系列国家标准对食品接触材料进行规范。GB 4806.1-2016 为通用安全要求，GB 4806.4-2016 专门针对搪瓷和玻璃，目前尚无专门针对碳石墨的标准，需参照 GB 9685-2016《食品接触材料及制品用添加剂使用标准》进行评估。

### 1.4 制药行业 GMP 与 USP Class VI
制药行业密封件需符合 GMP 规范，并进行 USP Class VI 生物反应性测试。霍邱县华豪密封件有限公司供应的制药用石墨密封环，全部通过 USP Class VI 认证。

## 二、食品级石墨密封件的材料选择

### 2.1 石墨基体
选用高纯焙烧石墨，灰分含量 ≤ 0.1%，金属杂质（Fe、Cu、Pb）含量 ≤ 50 ppm。原料焦炭应选用石油焦而非煤沥青焦，以降低多环芳烃（PAH）残留。

### 2.2 浸渍剂选择
- **食品级酚醛树脂**：符合 FDA 21 CFR 178.3297，适用于酸性、中性食品介质
- **食品级环氧树脂**：双酚 A 迁移量需 ≤ 0.6 mg/kg，适用于弱碱性介质
- **PTFE 浸渍**：聚四氟乙烯具有极佳的化学惰性，符合所有主流食品级法规，适用于所有食品工况
- **不浸渍**：高密度不透性石墨无需浸渍即可满足食品级要求，但成本较高

### 2.3 粘结剂与填充物
- 粘结剂选用食品级酚醛树脂，不含苯乙烯等有机挥发物
- 禁止使用含铅、镉、邻苯二甲酸酯类增塑剂
- 所有原料需提供符合性声明和迁移测试报告

## 三、生产工艺的特殊要求

### 3.1 车间洁净度
食品级石墨密封件的浸渍、机加工工序应在洁净车间内进行，环境洁净度达到 ISO 8 级（Class 100,000）。霍邱县华豪密封件有限公司设有专门的食品级产品车间，与普通工业产品严格隔离。

### 3.2 加工介质
机加工过程中使用的切削液、冷却液必须为食品级产品。常用食品级 H1 切削液符合 NSF 注册。磨削工序采用纯水冷却，避免油类残留。

### 3.3 清洗与包装
成品出厂前进行超声波清洗和纯水冲洗，去除加工残留的石墨粉尘和金属微粒。清洗后的产品在洁净环境中干燥，使用食品级聚乙烯袋密封包装，并附产品合格证和符合性声明。

## 四、典型应用场景

### 4.1 乳制品行业
牛奶、酸奶生产线上的离心泵、均质机采用 PTFE 浸渍石墨密封环，工作温度 80~140℃，需耐受 CIP 在线清洗（2% NaOH，70℃）。霍邱县华豪密封件有限公司为某乳业集团供应的均质机石墨密封环，使用寿命达 6000 小时。

### 4.2 饮料行业
果汁、碳酸饮料灌装机的旋转分配器采用树脂浸渍石墨密封环，需耐受柠檬酸、磷酸等食品级酸介质。我司产品已通过 GB 4806 迁移测试。

### 4.3 制药行业
制药反应釜、发酵罐的搅拌轴密封采用 PTFE 浸渍高纯石墨密封环，需耐受蒸汽灭菌（121℃，0.1 MPa，30 分钟）和化学灭菌剂（过氧乙酸、氢氧化钠）。

### 4.4 食品级润滑油泵
食品厂中央润滑系统的齿轮泵采用食品级石墨轴套，需符合 NSF H1 食品级润滑油接触要求。

## 五、常见问题与误区

### 5.1 "工业级石墨只要不接触食品就能用"
错误。即使不直接接触食品，石墨粉尘和浸渍剂挥发物可能通过空气传播污染产品。所有位于食品生产区域的密封件都应选用食品级。

### 5.2 "PTFE 浸渍石墨一定符合所有食品法规"
部分 PTFE 浸渍工艺中可能使用加工助剂（如 PFOA 类表面活性剂）。需选用明确声明不含 PFOA 的 PTFE 浸渍石墨。

### 5.3 "FDA 认证代表材料本身合规"
FDA 不颁发"认证"，而是材料制造商根据 21 CFR 自行声明符合。霍邱县华豪密封件有限公司提供完整的食品级材料迁移测试报告作为合规证据。

## 结语

食品级碳石墨密封件的合规性涉及材料、工艺、检测、认证多个环节，需要制造商和用户共同把控。霍邱县华豪密封件有限公司拥有完整的食品级石墨密封件生产线，可提供 FDA、EC 1935/2004、GB 4806 三大主流法规的符合性声明和迁移测试报告。我们建议客户在选型时明确工况介质、温度、清洗程序，与我司技术部联合评估，确保产品既满足法规要求，又达到预期的使用寿命。`,
      en: `## Key Takeaways

- Food-grade carbon graphite seals must comply with FDA 21 CFR, EU EC 1935/2004, and China GB 4806, with each impregnant assessed against migration limits
- Graphite matrix requires ash ≤ 0.1% and metal impurities ≤ 50 ppm, using petroleum-coke feedstock and preferably PTFE-impregnated high-purity graphite
- PTFE-impregnated graphite offers the best chemical inertness across all food media, but the process must be explicitly certified PFOA-free
- Machining requires an ISO Class 8 cleanroom with NSF H1 food-grade cutting fluids; shipments must include Declaration of Compliance and migration test reports

Food, beverage, dairy, and pharmaceutical processes require seals that directly contact media to meet strict sanitary and regulatory standards. Any material migration, spalling, or bacterial growth can cause product contamination, batch loss, or even recall. Carbon graphite seals — with chemical inertness, no plasticizers, and tolerance to steam sterilization — are widely used in food pumps, agitators, and homogenizers. However, ordinary industrial graphite cannot be used directly in food service; it must go through dedicated material selection, impregnation, and compliance certification. Huahao Sealing Co., Ltd. has developed a complete food-grade graphite seal product line; this article systematically outlines the requirements.

## 1. Core Regulatory Framework for Food-Grade Graphite Seals

### 1.1 U.S. FDA 21 CFR
Title 21 of the U.S. Code of Federal Regulations governs food-contact materials. Relevant provisions for carbon graphite seals include:
- **21 CFR 178.3297**: graphite permitted as release agent and lubricant on food-contact surfaces
- **21 CFR 175.300**: impregnating resins (phenolic, epoxy) subject to specific migration limits
- **21 CFR 177.2600**: extractable limits for rubber and elastomeric seals

Graphite itself, as elemental carbon, falls under FDA's Generally Recognized as Safe (GRAS) category. Impregnants, binders, and fillers must each be assessed.

### 1.2 EU EC 1935/2004
EU Framework Regulation EC 1935/2004 requires that food-contact materials not release substances that endanger human health, change food composition, or deteriorate organoleptic characteristics. Companion EC 2023/2006 specifies Good Manufacturing Practice (GMP). Food-grade graphite seals exported to the EU require a Declaration of Compliance (DoC) and meet these migration limits:
- **Overall Migration Limit (OML)**: ≤ 10 mg/dm²
- **Specific Migration Limit (SML)**: substance-specific, e.g., BPA ≤ 0.6 mg/kg

### 1.3 China GB 4806 Series
GB 4806 national standards govern food-contact materials in China. GB 4806.1-2016 is the general safety requirement; there is currently no dedicated carbon graphite standard, so evaluation follows GB 9685-2016 (positive list of additives).

### 1.4 Pharmaceutical GMP and USP Class VI
Pharmaceutical seals must comply with GMP and undergo USP Class VI biological reactivity testing. Our pharmaceutical graphite seal rings all carry USP Class VI certification.

## 2. Material Selection for Food-Grade Graphite Seals

### 2.1 Graphite Matrix
Use high-purity baked graphite with ash content ≤ 0.1% and metal impurities (Fe, Cu, Pb) ≤ 50 ppm. Petroleum coke is preferred over coal-tar pitch coke to reduce PAH residues.

### 2.2 Impregnant Selection
- **Food-grade phenolic resin**: complies with FDA 21 CFR 178.3297, suitable for acidic and neutral food media
- **Food-grade epoxy resin**: BPA migration must be ≤ 0.6 mg/kg, suitable for mildly alkaline media
- **PTFE impregnation**: chemically inert and compliant with all major food regulations, suitable for all food service
- **Unimpregnated**: high-density impermeable graphite meets food-grade requirements without impregnation, at higher cost

### 2.3 Binders and Fillers
- Binders must be food-grade phenolic resin, free of styrene and other VOCs
- Lead, cadmium, and phthalate plasticizers are prohibited
- All raw materials require DoC and migration test reports

## 3. Special Production Requirements

### 3.1 Workshop Cleanliness
Impregnation and machining of food-grade graphite seals take place in a cleanroom at ISO Class 8 (Class 100,000). Our dedicated food-grade workshop is strictly separated from ordinary industrial production.

### 3.2 Processing Media
Cutting fluids and coolants used in machining must be food-grade. NSF H1 registered fluids are commonly used. Grinding uses pure water cooling to avoid oil residues.

### 3.3 Cleaning and Packaging
Before shipment, products undergo ultrasonic cleaning and pure-water rinsing to remove graphite dust and metallic particles. Cleaned products are dried in a clean environment and sealed in food-grade polyethylene bags with certificate of conformity and DoC.

## 4. Typical Applications

### 4.1 Dairy Industry
Centrifugal pumps and homogenizers in milk and yogurt lines use PTFE-impregnated graphite seal rings at 80~140°C, requiring CIP resistance (2% NaOH, 70°C). Our homogenizer graphite rings for a major dairy group last 6,000 hours.

### 4.2 Beverage Industry
Rotary distributors in juice and carbonated beverage filling machines use resin-impregnated graphite rings resisting citric and phosphoric acid. Our products have passed GB 4806 migration testing.

### 4.3 Pharmaceutical Industry
Agitator shaft seals in reactor and fermenter vessels use PTFE-impregnated high-purity graphite rings tolerant to steam sterilization (121°C, 0.1 MPa, 30 minutes) and chemical sterilants (peracetic acid, NaOH).

### 4.4 Food-Grade Lube Oil Pumps
Central lubrication system gear pumps in food plants use food-grade graphite bushings compliant with NSF H1 lubricant contact.

## 5. Common Pitfalls

### 5.1 "Industrial-grade graphite is fine if it doesn't contact food"
False. Graphite dust and impregnant volatiles can spread through air and contaminate product. All seals in food production areas should be food-grade.

### 5.2 "PTFE-impregnated graphite is always compliant"
Some PTFE impregnation uses processing aids such as PFOA surfactants. Choose graphite explicitly certified PFOA-free.

### 5.3 "FDA certification means the material is compliant"
FDA does not issue certifications; manufacturers self-declare compliance under 21 CFR. We provide complete migration test reports as evidence of compliance.

## Conclusion

Compliance of food-grade carbon graphite seals involves materials, processes, testing, and certification that require joint oversight by manufacturer and user. Huahao Sealing Co., Ltd. operates a complete food-grade graphite seal line and provides DoC and migration test reports for FDA, EC 1935/2004, and GB 4806. We recommend customers specify medium, temperature, and cleaning procedure and work with our engineering team to ensure products meet both regulatory and service-life requirements.`,
    },
  },
  {
    slug: "graphite-seal-friction-coefficient",
    title: {
      zh: "碳石墨密封件摩擦系数分析：从材料到工况的全维度解读",
      en: "Carbon Graphite Seal Friction Coefficient Analysis: A Multi-Dimensional Look from Material to Service Conditions",
    },
    excerpt: {
      zh: "摩擦系数是衡量石墨密封件运行性能的关键指标。本文从材料配方、对磨件、润滑条件、工况参数四个维度，深入分析碳石墨密封环的摩擦学行为，为密封设计提供理论依据。",
      en: "Friction coefficient is a key indicator of graphite seal performance. This article analyzes the tribological behavior of carbon graphite seal rings across four dimensions — material formulation, mating part, lubrication, and operating parameters — to support seal design.",
    },
    tag: "process",
    date: "2026-06-16",
    content: {
      zh: `## 核心要点

- 碳石墨密封件的摩擦系数受材料配方、对磨件、润滑条件、PV 值综合影响，并非固定值
- 树脂浸渍石墨 M106H 在 100℃ 摩擦系数 0.08，升至 200℃ 时变为 0.15；锑浸渍 M254G 配碳化硅稳定在 0.06~0.10
- PV 值超过 10 MPa·m/s 后摩擦系数急剧上升，15 MPa·m/s 为材料失效临界值
- 相对湿度从 0% 升至 50% 可使石墨摩擦系数从 0.5 降至 0.1，水润滑工况有利于潜水泵石墨轴套

摩擦系数是机械密封、泵类轴套、压缩机活塞环等摩擦副设计的核心参数。它直接影响密封件的发热量、磨损率和功率损耗。碳石墨因其层状晶体结构和自润滑特性，在大多数工况下摩擦系数低于 0.1，被誉为"最理想的密封材料之一"。然而，实际运行中的摩擦系数并非定值，而是受材料配方、对磨件、润滑条件、PV 值等多重因素综合影响的动态参数。霍邱县华豪密封件有限公司技术部结合多年摩擦磨损试验数据，对石墨密封件摩擦系数进行系统解读。

## 一、碳石墨摩擦学基础

### 1.1 石墨的层状晶体结构
石墨晶体由碳原子按六角形平面排列形成层状结构。层内碳原子以强共价键结合（键能 524 kJ/mol），层间以弱范德华力结合（键能 7 kJ/mol）。受力时层间易发生滑移，这是石墨自润滑性的根本来源。然而，纯石墨在真空或干燥惰性气体环境中，层间滑移阻力增大，摩擦系数可升至 0.5 以上，称为"石墨失去自润滑性"现象。

### 1.2 水分与气体的"润滑膜"作用
空气中石墨表面吸附的水蒸气、氧气和有机分子，会在层间形成单分子润滑膜，显著降低滑移阻力。研究表明，相对湿度从 0% 升至 50%，石墨摩擦系数可从 0.5 降至 0.1。这一特性对潜水泵、水润滑轴承工况有利，但对真空泵、压缩机等干燥工况不利。

## 二、材料配方对摩擦系数的影响

### 2.1 树脂浸渍石墨
树脂浸渍使石墨孔隙被树脂填充，表面更光滑，初始摩擦系数较低（0.05~0.08）。但树脂本身导热性差，摩擦热积聚易使树脂软化，导致摩擦系数随温度升高而上升。霍邱县华豪密封件有限公司测试数据显示，M106H 酚醛浸渍石墨在 100℃ 时摩擦系数为 0.08，200℃ 时升至 0.15。

### 2.2 金属浸渍石墨
金属浸渍石墨硬度较高，导热性好，摩擦热可快速散出。但表面金属相的存在会增加微观切削效应。锑浸渍石墨 M254G 与碳化硅对磨时，摩擦系数稳定在 0.06~0.10，受温度影响较小。

### 2.3 树脂金属混合浸渍
混合浸渍兼具树脂的低摩擦和金属的高导热，适用于高 PV 值工况。摩擦系数可控制在 0.05~0.08，且温度稳定性好。

### 2.4 添加固体润滑剂
在石墨基体中添加二硫化钼（MoS₂）、聚四氟乙烯（PTFE）等固体润滑剂，可进一步降低摩擦系数。我司开发的 M106K-MoS₂ 材料，在水润滑条件下摩擦系数低至 0.03，适用于高速轻载工况。

## 三、对磨件材质的影响

### 3.1 与不锈钢对磨
不锈钢（如 304、316、17-4PH）是机械密封常用的对磨件。其表面硬度 HRc 30~45，与石墨对磨时摩擦系数 0.08~0.12。但不锈钢易发生粘着磨损，需通过表面硬化（氮化、镀铬、堆焊硬质合金）提高耐磨性。

### 3.2 与碳化硅对磨
碳化硅（SiC）硬度高（HV 2500~3000）、导热性好，与石墨对磨时摩擦系数稳定在 0.05~0.08，是机械密封首选对磨件。反应烧结 SiC 与无压烧结 SiC 的微观组织不同，对石墨的磨损量差异约 30%。

### 3.3 与氧化铝陶瓷对磨
氧化铝陶瓷硬度高、化学惰性好，但导热性较差。与石墨对磨时摩擦系数 0.06~0.10，但散热能力低于 SiC，更适合中等 PV 值工况。

### 3.4 与硬质合金对磨
碳化钨（WC）硬质合金与石墨对磨时摩擦系数 0.06~0.09，耐磨性极好，但成本较高，适用于高 PV 值、长寿命场合。

## 四、润滑条件对摩擦系数的影响

### 4.1 干摩擦
无润滑剂时，石墨依靠自身层状结构自润滑。摩擦系数 0.10~0.20，受湿度影响大。适用于气体压缩机、真空泵等工况。

### 4.2 边界润滑
润滑油存在但油膜厚度不足以完全分离摩擦面。摩擦系数 0.05~0.10。石墨在边界润滑下表现优异，因为石墨本身可作为固体润滑剂补充油膜不足。

### 4.3 流体动压润滑
油膜厚度足以完全分离摩擦面。摩擦系数 0.001~0.01，由流体粘性决定。石墨在此工况下磨损几乎为零，但密封性下降。

### 4.4 水润滑
水的粘度低（约 1 mPa·s），难以形成有效动压膜。石墨在水润滑下依靠自润滑性维持低摩擦（0.05~0.10），广泛用于潜水泵、水润滑轴承。

## 五、工况参数对摩擦系数的影响

### 5.1 PV 值
PV 值（压力 × 速度）是反映摩擦副负载的综合指标。低 PV 值下（< 5 MPa·m/s），石墨摩擦系数稳定。PV 值升高，摩擦热增加，材料温度上升，摩擦系数可能波动。霍邱县华豪密封件有限公司测试数据：
- PV = 1 MPa·m/s：摩擦系数 0.06
- PV = 5 MPa·m/s：摩擦系数 0.08
- PV = 10 MPa·m/s：摩擦系数 0.12（开始上升）
- PV = 15 MPa·m/s：摩擦系数 0.25（急剧上升，材料失效临界）

### 5.2 温度
温度升高会加速树脂浸渍石墨的热降解，使摩擦系数上升。金属浸渍石墨受温度影响小，可在 400℃ 下保持稳定摩擦系数。

### 5.3 介质粘度
介质粘度越高，动压膜越厚，摩擦系数越低。但在高速工况下，粘性剪切损耗增加，可能抵消动压效应。

### 5.4 表面粗糙度
对磨件表面粗糙度 Ra 应控制在 0.1~0.4 μm。过粗会增加切削磨损，过细反而增加粘着倾向。霍邱县华豪密封件有限公司建议端面密封对磨件 Ra 0.05~0.15 μm，轴套类 Ra 0.2~0.4 μm。

## 六、摩擦系数测试与质量控制

霍邱县华豪密封件有限公司配置 MM-W1 立式万能摩擦磨损试验机和定制端面密封测试台，对每批产品进行摩擦系数抽测。测试条件按 GB/T 12444 标准执行：
- 试样尺寸：φ 30 × 10 mm 环
- 对磨件：碳化硅环，Ra 0.1 μm
- 载荷：50~200 N
- 转速：500~3000 rpm
- 介质：水/空气
- 测试时间：100 小时连续

测试报告随产品交付客户，作为摩擦学性能的客观依据。

## 结语

碳石墨密封件的摩擦系数是材料、对磨件、润滑和工况的综合函数，不存在"放之四海而皆准"的固定值。霍邱县华豪密封件有限公司建议工程师在密封设计时进行工况 PV 值计算和摩擦学评估，必要时进行台架测试。我司可为客户提供定制化的摩擦磨损试验数据和选型建议，欢迎联系技术部咨询。`,
      en: `## Key Takeaways

- The friction coefficient of carbon graphite seals is influenced by material formulation, mating part, lubrication, and PV value — it is not a constant
- Resin-impregnated M106H shows 0.08 at 100°C, rising to 0.15 at 200°C; antimony-impregnated M254G paired with SiC holds steady at 0.06~0.10
- Above 10 MPa·m/s the friction coefficient rises sharply; 15 MPa·m/s marks the material failure threshold
- Raising relative humidity from 0% to 50% can drop graphite friction from 0.5 to 0.1, favoring water-lubricated submersible pump bushings

Friction coefficient is a core parameter in the design of friction pairs such as mechanical seals, pump bushings, and compressor piston rings. It directly affects heat generation, wear rate, and power loss. Carbon graphite, thanks to its layered crystal structure and self-lubricity, maintains a friction coefficient below 0.1 in most conditions — making it "one of the most ideal sealing materials." However, the actual friction coefficient is not a constant but a dynamic parameter influenced by material formulation, mating part, lubrication, and PV value. Based on years of tribological test data, our engineering team presents a systematic analysis.

## 1. Tribological Fundamentals of Carbon Graphite

### 1.1 Graphite's Layered Crystal Structure
Graphite crystals consist of carbon atoms arranged in hexagonal planes. Intra-layer bonding is strong covalent (524 kJ/mol); inter-layer bonding is weak van der Waals (7 kJ/mol). Under load, layers slide easily — the root of graphite's self-lubricity. However, in vacuum or dry inert gas, inter-layer slip resistance rises, and friction coefficient can exceed 0.5 — known as "loss of self-lubricity."

### 1.2 The "Lubricating Film" of Moisture and Gases
Water vapor, oxygen, and organic molecules adsorbed on graphite surface in air form a monomolecular lubricating film between layers, significantly reducing slip resistance. Studies show that increasing relative humidity from 0% to 50% can drop graphite friction coefficient from 0.5 to 0.1. This favors submersible pumps and water-lubricated bearings, but is unfavorable for vacuum pumps and compressors.

## 2. Effect of Material Formulation

### 2.1 Resin-Impregnated Graphite
Resin fills pores, smoothing the surface and lowering initial friction (0.05~0.08). However, resin has poor thermal conductivity, and accumulated frictional heat can soften it, raising friction with temperature. Our test data: M106H phenolic-impregnated graphite shows 0.08 at 100°C, rising to 0.15 at 200°C.

### 2.2 Metal-Impregnated Graphite
Metal-impregnated graphite is harder with better thermal conductivity, allowing rapid heat dissipation. The metallic phase on the surface adds micro-cutting. Antimony-impregnated M254G paired with SiC maintains 0.06~0.10, with little temperature sensitivity.

### 2.3 Resin-Metal Hybrid Impregnation
Hybrid impregnation combines resin's low friction with metal's high thermal conductivity, suitable for high PV service. Friction coefficient holds at 0.05~0.08 with good temperature stability.

### 2.4 Solid Lubricant Additives
Adding MoS₂, PTFE, and similar solid lubricants to the graphite matrix further lowers friction. Our M106K-MoS₂ material reaches 0.03 under water lubrication, ideal for high-speed light-load service.

## 3. Effect of Mating Material

### 3.1 Against Stainless Steel
Stainless steel (304, 316, 17-4PH) is a common mating material with hardness HRc 30~45. Friction with graphite: 0.08~0.12. Stainless tends to adhesive wear; surface hardening (nitriding, chrome plating, hardfacing) improves wear resistance.

### 3.2 Against Silicon Carbide
SiC has high hardness (HV 2500~3000) and good thermal conductivity; friction with graphite is stable at 0.05~0.08 — the preferred mating material for mechanical seals. Reaction-bonded and sintered SiC have different microstructures; wear on graphite differs by about 30%.

### 3.3 Against Alumina Ceramic
Alumina is hard and chemically inert but less thermally conductive. Friction with graphite is 0.06~0.10, but heat dissipation is lower than SiC, better suited to moderate PV service.

### 3.4 Against Tungsten Carbide
WC hardmetal against graphite: 0.06~0.09, excellent wear resistance but higher cost, suitable for high PV long-life applications.

## 4. Effect of Lubrication Conditions

### 4.1 Dry Friction
No lubricant; graphite relies on its layered structure. Friction 0.10~0.20, strongly humidity-dependent. Suitable for gas compressors and vacuum pumps.

### 4.2 Boundary Lubrication
Lubricant present but film insufficient to fully separate surfaces. Friction 0.05~0.10. Graphite performs well, acting as a solid lubricant supplementing the film.

### 4.3 Hydrodynamic Lubrication
Film thick enough to fully separate surfaces. Friction 0.001~0.01, governed by fluid viscosity. Graphite wear approaches zero, but sealing performance drops.

### 4.4 Water Lubrication
Water viscosity is low (~1 mPa·s), making hydrodynamic film formation difficult. Graphite relies on self-lubricity to maintain low friction (0.05~0.10), widely used in submersible pumps and water-lubricated bearings.

## 5. Effect of Operating Parameters

### 5.1 PV Value
PV (pressure × speed) is the integrated load indicator. At low PV (< 5 MPa·m/s), graphite friction is stable. Rising PV increases frictional heat and temperature, causing fluctuation. Our test data:
- PV = 1 MPa·m/s: 0.06
- PV = 5 MPa·m/s: 0.08
- PV = 10 MPa·m/s: 0.12 (rising)
- PV = 15 MPa·m/s: 0.25 (sharp rise, failure threshold)

### 5.2 Temperature
Rising temperature accelerates thermal degradation of resin-impregnated graphite, increasing friction. Metal-impregnated grades are less affected, stable up to 400°C.

### 5.3 Medium Viscosity
Higher viscosity gives thicker hydrodynamic film and lower friction. But at high speed, viscous shear losses may offset the hydrodynamic effect.

### 5.4 Surface Roughness
Mating surface Ra should be 0.1~0.4 μm. Too coarse increases cutting wear; too fine increases adhesion tendency. We recommend Ra 0.05~0.15 μm for face seals, 0.2~0.4 μm for bushings.

## 6. Friction Coefficient Testing and Quality Control

We use an MM-W1 vertical universal friction-wear tester and a custom face-seal test bench to sample-test each batch per GB/T 12444:
- Specimen: φ 30 × 10 mm ring
- Mating: SiC ring, Ra 0.1 μm
- Load: 50~200 N
- Speed: 500~3000 rpm
- Medium: water/air
- Duration: 100 hours continuous

Test reports accompany each shipment as objective tribological evidence.

## Conclusion

Carbon graphite seal friction coefficient is a function of material, mating part, lubrication, and operating conditions — there is no universal constant. We recommend that engineers perform PV calculations and tribological assessment during seal design, with bench testing when needed. We provide customized friction-wear test data and selection recommendations; please contact our engineering team for consultation.`,
    },
  },
  {
    slug: "cnc-graphite-machining-tools",
    title: {
      zh: "CNC石墨加工的刀具选择与参数：从粗加工到精加工的全流程指南",
      en: "CNC Graphite Machining Tool Selection: A Full-Process Guide from Roughing to Finishing",
    },
    excerpt: {
      zh: "石墨材料硬度低但脆性大，加工过程中易产生崩边、刀具磨损和粉尘。本文系统介绍 CNC 石墨加工的刀具选择、切削参数和工艺流程，帮助用户实现高精度、低损耗的石墨密封件加工。",
      en: "Graphite is soft but brittle, prone to edge chipping, tool wear, and dust during machining. This article systematically reviews CNC graphite machining tool selection, cutting parameters, and process flows to achieve high-precision, low-loss graphite seal manufacturing.",
    },
    tag: "precision",
    date: "2026-06-17",
    content: {
      zh: `## 核心要点

- 石墨硬度低但磨料性极强，CNC 加工须选用金刚石涂层刀具，寿命可达硬质合金的 10~30 倍
- 精加工采用金刚石涂层球头立铣刀，转速 15000~24000 rpm，密封面研磨可达 Ra ≤ 0.1 μm、平面度 0.3 μm
- 刀具路径须采用顺铣 + 圆弧切入 + 分层切削（每层 ≤ 0.5 mm），显著降低崩边风险
- 须配置专用吸尘系统控制车间粉尘浓度 ≤ 2 mg/m³，机床电控柜防护等级 IP54

碳石墨密封件的尺寸精度和表面质量直接决定密封性能。随着数控技术发展，CNC 加工已成为石墨密封环、轴套、三瓣环的主流加工方式。然而，石墨材料硬度低（肖氏硬度 40~80 HS）但脆性大，加工过程中易产生崩边、刀具快速磨损和石墨粉尘。合理的刀具选择和切削参数是保证加工质量的关键。霍邱县华豪密封件有限公司拥有 20 余台 CNC 加工中心，本文结合多年工艺经验，系统介绍石墨加工的刀具与参数选择。

## 一、石墨加工的特性分析

### 1.1 加工硬化效应
碳石墨在切削过程中不产生塑性变形，刀具切入时材料以脆性断裂方式去除。不存在加工硬化，切削力相对较小，刀具受力温和。但崩边和碎屑对刀具后刀面有冲击。

### 1.2 切削热少
石墨导热系数高（80~150 W/m·K），切削热快速散出，加工区温度低。无需切削液冷却，可采用干式切削。但石墨粉尘导电，可能进入机床电气系统造成短路。

### 1.3 刀具磨损快
石墨硬度虽低，但其磨料性强。刀具磨损以磨料磨损为主，硬质合金刀具连续切削 1~2 小时即明显磨损。金刚石涂层刀具寿命可达 10 倍以上。

### 1.4 粉尘问题
石墨粉尘粒径 1~10 μm，悬浮性强，对环境和人体有害。需配置专用吸尘系统和封闭式机床。

## 二、刀具材料选择

### 2.1 硬质合金刀具
硬质合金刀具（YG6、YG8 等）成本低，通用性好，适用于小批量生产。但耐磨性有限，加工浸渍石墨时刀具寿命仅 1~3 小时。建议选用细颗粒硬质合金（晶粒 ≤ 0.5 μm），硬度 HRA 93 以上。

### 2.2 金刚石涂层刀具
CVD 金刚石涂层刀具在硬质合金基体上沉积 5~15 μm 厚金刚石薄膜，兼具金刚石的耐磨性和硬质合金的韧性。加工石墨时寿命可达硬质合金的 10~30 倍。霍邱县华豪密封件有限公司采用金刚石涂层立铣刀加工 M254G 锑浸渍石墨，单刀加工件数从 30 件提升至 800 件。

### 2.3 PCD 刀具
聚晶金刚石（PCD）刀具由金刚石颗粒与硬质合金基体在高温高压下烧结而成，硬度 HV 6000~8000，耐磨性极好。适用于大批量、高精度加工。但 PCD 不能加工含树脂浸渍的石墨，因为 PCD 与树脂会发生化学反应。

### 2.4 陶瓷刀具
陶瓷刀具硬度高、化学惰性好，但脆性大。石墨加工中较少采用，仅适用于特定高硬度复合材料。

## 三、典型加工工序与参数

### 3.1 粗加工
目标：快速去除大部分余量。
- 刀具：φ 8~12 mm 硬质合金立铣刀（或金刚石涂层）
- 转速：8000~12000 rpm
- 进给：1500~3000 mm/min
- 切深：2~5 mm
- 切宽：50%~80% 刀具直径
- 切削方式：干切削 + 吸尘

### 3.2 半精加工
目标：去除粗加工留下的 0.5~1 mm 余量，为精加工做准备。
- 刀具：φ 6~10 mm 球头立铣刀
- 转速：12000~18000 rpm
- 进给：1000~2000 mm/min
- 切深：0.3~0.5 mm
- 残留高度：0.05 mm

### 3.3 精加工
目标：达到尺寸精度和表面粗糙度要求。
- 刀具：φ 4~8 mm 球头立铣刀，金刚石涂层
- 转速：15000~24000 rpm
- 进给：600~1500 mm/min
- 切深：0.1~0.2 mm
- 残留高度：0.005 mm
- 表面粗糙度：Ra 0.4~1.6 μm

### 3.4 密封面研磨
密封面 Ra 要求 ≤ 0.1 μm，需进行研磨加工。
- 研磨剂：W7~W14 碳化硅微粉 + 机油
- 研具：铸铁研磨盘
- 压力：0.05~0.1 MPa
- 转速：30~60 rpm
- 平面度可达：0.3 μm

## 四、典型零件加工工艺

### 4.1 碳石墨密封环
工序：粗车毛坯 → 精车内孔 → 精车外圆 → 精车密封面 → 研磨密封面 → 清洗。
关键控制点：密封面平面度 ≤ 0.6 μm，密封面与基准面垂直度 ≤ 0.01 mm。

### 4.2 碳石墨轴套
工序：粗车 → 钻孔 → 精车内孔 → 精车外圆 → 倒角 → 抛光。
关键控制点：内孔圆柱度 ≤ 0.005 mm，内外圆同轴度 ≤ 0.01 mm。

### 4.3 三瓣环
工序：线切割分瓣 → 粗车内孔 → 精车内孔 → 精车外圆 → 精车密封面。
关键控制点：分瓣面平面度 ≤ 0.01 mm，三瓣组合后内孔圆度 ≤ 0.02 mm。

## 五、刀具路径优化

### 5.1 顺铣优于逆铣
石墨加工应采用顺铣，刀具切入时切削厚度由薄到厚，崩边倾向小。逆铣时刀具在已加工表面滑擦，加速刀具磨损。

### 5.2 圆弧切入
刀具切入工件时采用圆弧切入（半径 ≥ 刀具半径），避免直线切入造成的崩边。

### 5.3 分层切削
避免大切深，采用分层切削（每层 ≤ 0.5 mm），减少崩边风险。

### 5.4 高速小切深
采用高转速、小切深、快进给的"高速加工"策略，可显著降低切削力和表面粗糙度。

## 六、质量控制

霍邱县华豪密封件有限公司采用以下质量控制措施：
- **首件检验**：每批首件 100% 检测，确认加工参数正确
- **过程抽检**：每 20 件抽检 1 件，监控加工稳定性
- **刀具寿命管理**：每把刀具记录加工件数，到寿命强制更换
- **尺寸检测**：采用三坐标测量机和气动量仪，精度 0.001 mm
- **表面检测**：采用表面粗糙度仪和光学平面仪，精度 0.01 μm

## 七、安全与环保

- **粉尘控制**：每台机床配置专用吸尘器，过滤精度 0.3 μm，车间粉尘浓度 ≤ 2 mg/m³
- **电气防护**：机床电控柜密封防护等级 IP54，定期清理
- **个人防护**：操作工佩戴 N95 口罩、护目镜和手套
- **废料处理**：石墨废料集中收集，用于冶金或电池行业回收

## 结语

CNC 石墨加工的刀具选择和参数优化是影响加工质量、效率和成本的关键。霍邱县华豪密封件有限公司拥有完整的石墨加工能力，从粗加工到精研磨，从单件样品到批量生产，可满足各种精度要求。我司可为客户提供石墨密封件的来图定制服务，并根据零件特点优化加工工艺。欢迎联系我司技术部咨询加工能力与工艺方案。`,
      en: `## Key Takeaways

- Graphite is soft but highly abrasive; CNC machining should use diamond-coated tools, which last 10~30× longer than carbide
- Finishing uses diamond-coated ball-end mills at 15000~24000 rpm; seal face lapping achieves Ra ≤ 0.1 μm and flatness of 0.3 μm
- Toolpaths must use climb milling + arc entry + layered cuts (≤ 0.5 mm per layer) to significantly reduce edge chipping
- Dedicated dust extraction must keep workshop dust ≤ 2 mg/m³; machine cabinets sealed to IP54

The dimensional accuracy and surface quality of carbon graphite seals directly determine sealing performance. With CNC technology, CNC machining has become the mainstream method for graphite seal rings, bushings, and segmented rings. However, graphite is soft (Shore 40~80 HS) but brittle, prone to edge chipping, rapid tool wear, and dust. Proper tool selection and cutting parameters are critical. With more than 20 CNC machining centers, Huahao Sealing Co., Ltd. shares its process experience on tooling and parameters.

## 1. Graphite Machining Characteristics

### 1.1 No Work Hardening
Carbon graphite does not plastically deform during cutting; material is removed by brittle fracture. There is no work hardening, and cutting forces are relatively low, gentle on tools. But chipping and debris impact the flank face.

### 1.2 Low Cutting Heat
Graphite thermal conductivity is high (80~150 W/m·K), dissipating cutting heat rapidly with low process zone temperature. Dry cutting without coolant is feasible. However, graphite dust is electrically conductive and may enter machine electrical systems causing shorts.

### 1.3 Rapid Tool Wear
Although graphite is soft, it is highly abrasive. Tool wear is primarily abrasive; carbide tools show obvious wear after 1~2 hours. Diamond-coated tools last 10× longer or more.

### 1.4 Dust Problem
Graphite dust particles (1~10 μm) are highly mobile, harmful to environment and humans. Dedicated dust extraction and enclosed machines are required.

## 2. Tool Material Selection

### 2.1 Carbide Tools
Carbide tools (YG6, YG8) are low-cost and versatile, suitable for small batch production. Wear resistance is limited, with tool life of only 1~3 hours on impregnated graphite. Fine-grain carbide (grain ≤ 0.5 μm) at HRA 93+ is recommended.

### 2.2 Diamond-Coated Tools
CVD diamond coating deposits 5~15 μm of diamond film on a carbide substrate, combining diamond's wear resistance with carbide's toughness. Tool life on graphite is 10~30× that of carbide. We use diamond-coated end mills on M254G antimony-impregnated graphite, raising parts-per-tool from 30 to 800.

### 2.3 PCD Tools
Polycrystalline diamond (PCD) tools — diamond particles sintered with carbide substrate at high temperature and pressure — reach HV 6000~8000 with excellent wear resistance. Suitable for large-volume, high-precision work. However, PCD cannot cut resin-impregnated graphite due to chemical reaction with the resin.

### 2.4 Ceramic Tools
Ceramic tools have high hardness and chemical inertness but are brittle. Rarely used for graphite, only for specific hard composites.

## 3. Typical Operations and Parameters

### 3.1 Roughing
Objective: rapid bulk material removal.
- Tool: φ 8~12 mm carbide end mill (or diamond-coated)
- Speed: 8000~12000 rpm
- Feed: 1500~3000 mm/min
- Depth: 2~5 mm
- Width: 50%~80% of tool diameter
- Mode: dry cutting + dust extraction

### 3.2 Semi-Finishing
Objective: remove the 0.5~1 mm stock left by roughing.
- Tool: φ 6~10 mm ball-end mill
- Speed: 12000~18000 rpm
- Feed: 1000~2000 mm/min
- Depth: 0.3~0.5 mm
- Scallop: 0.05 mm

### 3.3 Finishing
Objective: achieve dimensional accuracy and surface roughness.
- Tool: φ 4~8 mm ball-end mill, diamond-coated
- Speed: 15000~24000 rpm
- Feed: 600~1500 mm/min
- Depth: 0.1~0.2 mm
- Scallop: 0.005 mm
- Roughness: Ra 0.4~1.6 μm

### 3.4 Seal Face Lapping
Seal faces requiring Ra ≤ 0.1 μm need lapping.
- Abrasive: W7~W14 SiC micropowder + oil
- Lap: cast iron plate
- Pressure: 0.05~0.1 MPa
- Speed: 30~60 rpm
- Flatness achievable: 0.3 μm

## 4. Typical Part Processes

### 4.1 Carbon Graphite Seal Ring
Sequence: rough turning → finish boring → finish turning OD → finish turning seal face → lapping seal face → cleaning.
Key controls: seal face flatness ≤ 0.6 μm; perpendicularity of seal face to datum ≤ 0.01 mm.

### 4.2 Carbon Graphite Bushing
Sequence: rough turning → drilling → finish boring → finish turning OD → chamfering → polishing.
Key controls: bore cylindricity ≤ 0.005 mm; OD-ID concentricity ≤ 0.01 mm.

### 4.3 Segmented Split Ring
Sequence: wire-EDM splitting → rough boring → finish boring → finish turning OD → finish turning seal face.
Key controls: split face flatness ≤ 0.01 mm; assembled bore roundness ≤ 0.02 mm.

## 5. Toolpath Optimization

### 5.1 Climb Over Conventional
Use climb milling; chip thickness goes thin-to-thick, reducing chipping. Conventional milling causes rubbing on the machined surface, accelerating wear.

### 5.2 Arc Entry
Enter the workpiece with an arc (radius ≥ tool radius) to avoid straight-plunge chipping.

### 5.3 Layered Cutting
Avoid large depth; use layered cuts (≤ 0.5 mm per layer) to reduce chipping risk.

### 5.4 High-Speed Light Cut
High speed, light depth, fast feed ("high-speed machining") significantly lowers cutting force and surface roughness.

## 6. Quality Control

We apply the following controls:
- **First-article inspection**: 100% inspection of first part per batch
- **In-process sampling**: 1 in 20 parts inspected for process stability
- **Tool life management**: parts-per-tool tracked; mandatory replacement at life
- **Dimensional inspection**: CMM and air gauging with 0.001 mm precision
- **Surface inspection**: profilometer and optical flat to 0.01 μm

## 7. Safety and Environmental

- **Dust control**: dedicated extractor per machine, filtration 0.3 μm, workshop dust ≤ 2 mg/m³
- **Electrical protection**: machine cabinet sealed to IP54, cleaned regularly
- **Personal protection**: N95 masks, safety glasses, gloves
- **Waste handling**: graphite scrap collected for metallurgical or battery industry recycling

## Conclusion

Tool selection and parameter optimization in CNC graphite machining are critical to quality, efficiency, and cost. Huahao Sealing Co., Ltd. offers full graphite machining capability from roughing to lapping, from prototype to mass production. We provide custom-drawing manufacturing and process optimization per part characteristics. Please contact our engineering team to discuss machining capability and process plans.`,
    },
  },
  {
    slug: "graphite-seal-surface-roughness",
    title: {
      zh: "石墨密封件表面粗糙度要求与检测：从 Ra 到 Rz 的全维度解析",
      en: "Graphite Seal Surface Roughness Requirements: A Full-Spectrum Analysis from Ra to Rz",
    },
    excerpt: {
      zh: "石墨密封件的表面粗糙度直接影响密封性能和磨损寿命。本文从粗糙度参数选择、不同部位的精度要求、检测方法和工艺控制四个维度，系统介绍石墨密封件的表面质量控制。",
      en: "Surface roughness of graphite seals directly affects sealing performance and wear life. This article systematically reviews surface quality control across four dimensions: parameter selection, accuracy per region, measurement methods, and process control.",
    },
    tag: "precision",
    date: "2026-06-18",
    content: {
      zh: `## 核心要点

- 端面粗糙度从 Ra 0.4 μm 降至 0.05 μm 可使密封泄漏量减少 90%，是碳石墨密封环出厂必检项目
- 机械密封端面要求 Ra ≤ 0.1 μm 并配合 Rz 检测抗磨损性，轴套内孔建议 Ra + Rmax 关注划痕缺陷
- 刀具后刀面磨损量 VB ≥ 0.2 mm 时粗糙度显著上升，金刚石涂层刀具可获得 Ra ≤ 0.1 μm
- 端面平面度须 ≤ 0.6 μm，用光学平晶检测应呈现均匀干涉条纹

机械密封端面的表面粗糙度是决定密封性能的关键因素之一。研究表明，端面粗糙度从 Ra 0.4 μm 降至 0.05 μm，密封泄漏量可减少 90%。对于碳石墨密封环、轴套、三瓣环等精密密封件，表面粗糙度是出厂检验的必检项目。霍邱县华豪密封件有限公司对各类密封件的表面粗糙度有严格的标准和检测流程，本文系统介绍相关要求。

## 一、表面粗糙度参数详解

### 1.1 Ra（算术平均粗糙度）
Ra 是最常用的粗糙度参数，定义为在取样长度内轮廓偏距绝对值的算术平均值。Ra 反映表面整体光滑程度，但不能区分波峰和波谷，对极端尖峰不敏感。石墨密封端面通常要求 Ra ≤ 0.1 μm。

### 1.2 Rz（最大高度粗糙度）
Rz 是在取样长度内 5 个最高波峰和 5 个最低波谷的平均差值。Rz 对极端尖峰敏感，更能反映表面抗磨损性能。同一 Ra 值下，Rz 可能差异很大。某些高端密封要求 Rz ≤ 0.5 μm。

### 1.3 Rq（均方根粗糙度）
Rq 对大偏差更敏感，常用于统计学分析。Rq 通常比 Ra 大 10~25%。

### 1.4 Rmax（最大粗糙度深度）
Rmax 是单次取样长度内的最大峰谷高度差。它对单点缺陷敏感，常用于检测划痕等局部缺陷。

### 1.5 Rt（总粗糙度深度）
Rt 是评估长度内最大峰谷高度差。它反映表面最大不平度。

### 1.6 参数选择建议
- **密封端面**：Ra + Rz（兼顾整体光滑度和抗磨损性）
- **滑动轴套内孔**：Ra + Rmax（关注划痕缺陷）
- **非配合面**：Ra 即可
- **关键应用**：Ra + Rz + Rmax（核电、航空航天）

## 二、不同部位的粗糙度要求

### 2.1 机械密封端面
端面是机械密封的核心工作面，要求极高的平面度和光洁度。
- **通用工况**：Ra 0.05~0.1 μm
- **高粘度介质**：Ra 0.1~0.2 μm（需要一定粗糙度储油）
- **低粘度介质（如液化气）**：Ra ≤ 0.05 μm
- **端面平面度**：≤ 0.6 μm（带荧光检查）

### 2.2 轴套内孔
轴套内孔与轴颈配合，是滑动轴承的工作面。
- **通用工况**：Ra 0.4~0.8 μm
- **高速工况**：Ra 0.2~0.4 μm
- **低速重载**：Ra 0.8~1.6 μm（适当粗糙度有利于储油）

### 2.3 轴套外圆
外圆与壳体配合，主要起定位作用。
- **过盈配合**：Ra 0.8~1.6 μm
- **间隙配合**：Ra 0.4~0.8 μm

### 2.4 三瓣环分瓣面
分瓣面是三瓣环的关键密封面，要求较高的平面度。
- **平面度**：≤ 0.01 mm
- **粗糙度**：Ra 0.4~0.8 μm

### 2.5 密封环端面与外圆过渡圆弧
过渡圆弧处易产生应力集中，要求光滑过渡。
- **粗糙度**：Ra 0.4~0.8 μm
- **圆弧半径**：R 0.5~1.0 mm

## 三、检测方法与设备

### 3.1 接触式粗糙度仪
接触式粗糙度仪（如 Mitutoyo SJ-210、Taylor Hobson Surtronic）使用金刚石探针划过表面，测量轮廓偏距。优点：可测量 Ra、Rz、Rmax 等多个参数，结果稳定。缺点：探针可能划伤软质材料，对石墨表面需选用低测力（0.75 mN）探针。

### 3.2 光学粗糙度仪
光学粗糙度仪（如 Keyence VK-X 系列激光共聚焦显微镜）通过激光扫描测量表面轮廓，无接触。优点：不损伤表面，可测量三维形貌。缺点：对反射率低的石墨表面需喷涂处理。

### 3.3 干涉法粗糙度仪
干涉法利用光波干涉原理测量表面，精度极高（纳米级）。适用于超精密密封端面检测。

### 3.4 比较样块法
采用标准粗糙度样块（GB/T 6060.2）与工件对比目视检查。适用于车间快速检测，精度有限。

### 3.5 荧光检查法
将荧光液涂覆在密封端面，紫外灯下观察。可检测微观裂纹和气孔。常与平面度检测配合使用。

## 四、霍邱县华豪密封件有限公司的检测流程

### 4.1 首件检测
每批首件进行 100% 粗糙度检测，确认工艺参数稳定。

### 4.2 过程抽检
按 GB/T 2828.1 标准 AQL 1.0 进行抽检。关键参数：Ra、Rz。

### 4.3 出厂终检
每件产品出厂前 100% 检测关键部位的粗糙度和外观。检测报告随产品交付。

### 4.4 检测设备
公司配置以下检测设备：
- Mitutoyo SJ-410 粗糙度仪（精度 0.01 μm）
- Taylor Hobson Form Talysurf PGI 1240 轮廓仪（精度 0.001 μm）
- Keyence VK-X200 激光共聚焦显微镜
- 平面平晶（φ 150 mm，精度 λ/10）

## 五、影响粗糙度的工艺因素

### 5.1 刀具因素
- 刀具磨损：后刀面磨损量 VB ≥ 0.2 mm 时，粗糙度显著上升
- 刀具几何参数：前角 5~10°、后角 8~12°、刀尖半径 0.4~0.8 mm 较优
- 刀具材料：金刚石涂层刀具可获得 Ra ≤ 0.1 μm

### 5.2 切削参数
- 转速：转速越高，表面越光洁
- 进给：进给越低，表面越光洁，但效率下降
- 切深：精加工切深 0.1~0.2 mm 较优

### 5.3 工件因素
- 石墨材料：浸渍石墨致密度高，可获得更低粗糙度
- 浸渍质量：孔隙率高的石墨加工后表面出现"针孔"
- 各向异性：石墨垂直压制方向和平行压制方向加工性能不同

### 5.4 机床因素
- 主轴跳动：≤ 1 μm
- 进给系统精度：≤ 2 μm
- 机床刚性：高刚性减少振动，提高表面质量

## 六、典型问题与解决方案

### 6.1 表面发花
现象：表面出现周期性条纹或斑点。
原因：刀具振动、机床刚性不足。
解决：减小切深、提高转速、检查刀具安装。

### 6.2 崩边
现象：工件边缘出现碎裂。
原因：刀具后角过大、切削力冲击。
解决：减小后角、采用圆弧切入、增加支撑。

### 6.3 针孔
现象：表面出现小孔。
原因：浸渍不足、孔隙率高。
解决：改进浸渍工艺、提高浸渍压力。

### 6.4 划痕
现象：表面出现深度方向划痕。
原因：切削液中有杂质、刀具磨损。
解决：检查刀具、过滤切削液。

## 结语

石墨密封件的表面粗糙度控制是涉及材料、工艺、设备、检测的系统工程。霍邱县华豪密封件有限公司建立了完整的粗糙度质量保证体系，从材料浸渍到精加工研磨，每个环节都有严格的工艺规范。我司可为客户提供粗糙度检测报告和工艺咨询，欢迎联系技术部交流。`,
      en: `## Key Takeaways

- Reducing face roughness from Ra 0.4 μm to 0.05 μm can cut seal leakage by 90% — making it a mandatory outgoing inspection for carbon graphite seal rings
- Mechanical seal faces require Ra ≤ 0.1 μm combined with Rz for wear resistance; bushing bores should use Ra + Rmax to detect scratches
- Flank wear of VB ≥ 0.2 mm significantly worsens roughness; diamond-coated tools achieve Ra ≤ 0.1 μm
- Face flatness must be ≤ 0.6 μm, verified with an optical flat showing uniform interference bands

Surface roughness of mechanical seal faces is one of the key determinants of sealing performance. Studies show that reducing face roughness from Ra 0.4 μm to 0.05 μm can cut leakage by 90%. For precision parts such as carbon graphite seal rings, bushings, and segmented rings, surface roughness is a mandatory outgoing inspection item. Huahao Sealing Co., Ltd. applies strict standards and inspection procedures; this article systematically presents the requirements.

## 1. Roughness Parameters Explained

### 1.1 Ra (Arithmetic Mean Roughness)
Ra is the most common parameter — the arithmetic mean of absolute profile deviations over the sampling length. Ra reflects overall surface smoothness but cannot distinguish peaks from valleys and is insensitive to extreme peaks. Graphite seal faces typically require Ra ≤ 0.1 μm.

### 1.2 Rz (Maximum Height Roughness)
Rz is the average of the 5 highest peaks and 5 lowest valleys within the sampling length. Sensitive to extreme peaks, it better reflects wear resistance. At the same Ra, Rz can vary significantly. High-end seals may require Rz ≤ 0.5 μm.

### 1.3 Rq (Root-Mean-Square Roughness)
Rq is more sensitive to large deviations, commonly used for statistical analysis. Typically 10~25% higher than Ra.

### 1.4 Rmax (Maximum Roughness Depth)
Rmax is the maximum peak-to-valley within a single sampling length. Sensitive to point defects, often used to detect scratches.

### 1.5 Rt (Total Roughness Depth)
Rt is the maximum peak-to-valley within the evaluation length. Reflects maximum surface unevenness.

### 1.6 Parameter Selection
- **Seal face**: Ra + Rz (overall smoothness + wear resistance)
- **Sliding bushing bore**: Ra + Rmax (scratch detection)
- **Non-functional surface**: Ra only
- **Critical applications**: Ra + Rz + Rmax (nuclear, aerospace)

## 2. Roughness Requirements per Region

### 2.1 Mechanical Seal Face
The face is the core working surface, demanding high flatness and finish.
- **General service**: Ra 0.05~0.1 μm
- **High-viscosity media**: Ra 0.1~0.2 μm (some roughness retains oil)
- **Low-viscosity media (e.g., LPG)**: Ra ≤ 0.05 μm
- **Face flatness**: ≤ 0.6 μm (with fluorescent check)

### 2.2 Bushing Bore
The bore pairs with the journal — the working surface of the sliding bearing.
- **General service**: Ra 0.4~0.8 μm
- **High-speed service**: Ra 0.2~0.4 μm
- **Low-speed heavy load**: Ra 0.8~1.6 μm (moderate roughness retains oil)

### 2.3 Bushing OD
The OD pairs with the housing, mainly for location.
- **Interference fit**: Ra 0.8~1.6 μm
- **Clearance fit**: Ra 0.4~0.8 μm

### 2.4 Segmented Ring Split Face
The split face is a key sealing surface of segmented rings, requiring high flatness.
- **Flatness**: ≤ 0.01 mm
- **Roughness**: Ra 0.4~0.8 μm

### 2.5 Face-to-OD Transition Arc
Stress concentration occurs here; smooth transition is required.
- **Roughness**: Ra 0.4~0.8 μm
- **Arc radius**: R 0.5~1.0 mm

## 3. Measurement Methods and Equipment

### 3.1 Contact Profilometer
A contact profilometer (e.g., Mitutoyo SJ-210, Taylor Hobson Surtronic) uses a diamond stylus drawn across the surface. Pros: measures Ra, Rz, Rmax with stable results. Cons: stylus may scratch soft materials; use low-force (0.75 mN) stylus for graphite.

### 3.2 Optical Profilometer
Optical profilometers (e.g., Keyence VK-X laser confocal microscope) scan the surface with laser, no contact. Pros: non-destructive, 3D topography. Cons: requires coating for low-reflectance graphite.

### 3.3 Interferometric Profilometer
Interferometry measures surface via optical wave interference, with nanometer-level precision. Suitable for ultra-precision seal face inspection.

### 3.4 Comparator Specimen
Standard roughness specimens (GB/T 6060.2) compared visually with the workpiece. Suitable for quick shop checks, limited precision.

### 3.5 Fluorescent Inspection
Fluorescent dye applied to the seal face, observed under UV light. Detects microcracks and pores. Often used together with flatness inspection.

## 4. Huahao Sealing Inspection Workflow

### 4.1 First-Article Inspection
100% roughness inspection of the first part per batch to confirm process stability.

### 4.2 In-Process Sampling
Sampling per GB/T 2828.1 AQL 1.0. Key parameters: Ra, Rz.

### 4.3 Final Outgoing Inspection
100% inspection of key region roughness and appearance per part before shipment. Report accompanies the product.

### 4.4 Equipment
- Mitutoyo SJ-410 profilometer (0.01 μm precision)
- Taylor Hobson Form Talysurf PGI 1240 (0.001 μm precision)
- Keyence VK-X200 laser confocal microscope
- Optical flat (φ 150 mm, λ/10 precision)

## 5. Process Factors Affecting Roughness

### 5.1 Tool Factors
- Wear: flank wear VB ≥ 0.2 mm significantly increases roughness
- Geometry: rake 5~10°, clearance 8~12°, corner radius 0.4~0.8 mm preferred
- Material: diamond-coated tools achieve Ra ≤ 0.1 μm

### 5.2 Cutting Parameters
- Speed: higher speed, smoother surface
- Feed: lower feed, smoother surface, but lower efficiency
- Depth: 0.1~0.2 mm for finishing

### 5.3 Workpiece Factors
- Graphite density: higher density yields lower roughness
- Impregnation: high porosity produces "pinholes" after machining
- Anisotropy: properties differ along vs across pressing direction

### 5.4 Machine Factors
- Spindle runout: ≤ 1 μm
- Feed accuracy: ≤ 2 μm
- Rigidity: high rigidity reduces vibration and improves surface

## 6. Typical Issues and Solutions

### 6.1 Surface Mottling
Symptom: periodic stripes or spots.
Cause: tool vibration, insufficient machine rigidity.
Solution: reduce depth, raise speed, check tool mounting.

### 6.2 Edge Chipping
Symptom: fractured edges.
Cause: excessive clearance angle, impact force.
Solution: reduce clearance, use arc entry, add support.

### 6.3 Pinholes
Symptom: small holes on surface.
Cause: insufficient impregnation, high porosity.
Solution: improve impregnation, raise impregnation pressure.

### 6.4 Scratches
Symptom: deep directional scratches.
Cause: contaminated coolant, worn tool.
Solution: inspect tool, filter coolant.

## Conclusion

Surface roughness control for graphite seals is a system engineering effort covering material, process, equipment, and inspection. Huahao Sealing Co., Ltd. has established a complete roughness assurance system with strict process specifications at every stage from impregnation to lapping. We provide roughness inspection reports and process consulting; please contact our engineering team.`,
    },
  },
  {
    slug: "nuclear-power-graphite-seal",
    title: {
      zh: "碳石墨密封在核电中的应用：从主泵到应急系统的关键材料",
      en: "Carbon Graphite Seals in Nuclear Power: A Critical Material from Main Coolant Pumps to Emergency Systems",
    },
    excerpt: {
      zh: "核电站对密封件的可靠性要求达到极致。碳石墨因其耐辐照、耐高温、化学惰性等特性，在核主泵、应急堆芯冷却系统中发挥关键作用。本文介绍核电级石墨密封件的特殊要求、典型应用和质量保证体系。",
      en: "Nuclear power plants demand the ultimate seal reliability. Carbon graphite — with radiation resistance, high temperature tolerance, and chemical inertness — plays a critical role in reactor coolant pumps and emergency core cooling systems. This article reviews the special requirements, typical applications, and quality assurance of nuclear-grade graphite seals.",
    },
    tag: "application",
    date: "2026-06-19",
    content: {
      zh: `## 核心要点

- 碳石墨在累积辐照剂量 10⁹ Gy 下性能无明显下降，是核电高辐照区域密封件的首选材料
- 核主泵密封石墨环须纯度 ≥ 99.5%、经 1000℃ 真空除气、通过 10⁷ Gy 伽马辐照试验，端面平面度 ≤ 0.3 μm
- 高温工况应选用金属浸渍石墨（锑浸渍 450℃、铜浸渍 500℃），严禁使用树脂浸渍石墨
- 二回路给水泵锑浸渍 M254G-N 石墨密封环已运行 24000 小时，泄漏量 8 mL/h 优于标准要求

核电站是迄今人类工程中最复杂的能源系统之一。一回路主泵、应急堆芯冷却系统、安全壳贯穿件等部位的密封件一旦失效，可能引发放射性介质泄漏，造成难以估量的后果。碳石墨材料因其耐辐照性能、耐高温性、化学惰性和优异的自润滑特性，在核电关键密封部位发挥不可替代的作用。霍邱县华豪密封件有限公司虽不直接参与核电主泵密封供货，但基于核电行业标准研究开发了多款核电级石墨密封件，应用于二回路及辅助系统。本文系统介绍碳石墨在核电中的应用与要求。

## 一、核电密封件的特殊要求

### 1.1 耐辐照性能
核电站一回路介质（含硼水）中的中子和伽马射线长期照射会破坏材料的分子结构。聚合物密封材料（如橡胶 O 圈）在累积剂量达到 10⁶ Gy 后会变脆失效。碳石墨作为无机非金属材料，在累积剂量 10⁹ Gy 下性能无明显下降，是高辐照区域密封件的首选。

辐照对石墨的主要影响：
- **晶格损伤**：中子辐照使碳原子位移，导致晶体结构变化。低剂量（< 10²² n/cm²）下石墨尺寸略增，导热系数下降。
- **储能效应**：高温辐照下石墨内部积聚 Wigner 能量，需通过退火释放。
- **氧化**：辐照环境下水中自由基加速石墨氧化。

霍邱县华豪密封件有限公司选用核级高纯石墨（灰分 ≤ 100 ppm），经高温除气处理（1800℃，真空），降低辐照下的气体释放。

### 1.2 耐高温性能
- **正常工况**：一回路温度 290~330℃
- **设计基准事故（DBA）**：温度可达 350℃
- **严重事故**：温度可能超过 800℃

金属浸渍石墨可在 450℃ 长期使用，铜浸渍石墨可达 500℃。高温工况下应避免使用树脂浸渍石墨。

### 1.3 化学兼容性
一回路介质为含硼酸（H₃BO₃，浓度 0~2500 ppm）和氢氧化锂（LiOH，pH 6.9~7.4）的去离子水。硼酸对石墨无腐蚀作用，氢氧化锂在低浓度下不影响石墨性能。但二回路蒸汽发生器部位可能接触胺类除氧剂（如吗啉、环己胺），需评估浸渍剂兼容性。

### 1.4 抗震性能
核电站位于地震带时，密封件必须能承受安全停堆地震（SSE）载荷。石墨密封件需通过抗震分析，证明其在地震工况下不发生脆性破裂。

### 1.5 严格的可追溯性
核电密封件的生产全过程必须可追溯，包括：
- 原材料批次号、检验报告
- 加工设备编号、操作人员
- 热处理炉次、温度曲线
- 检验记录、合格证
- 包装、运输、安装记录

## 二、典型应用场景

### 2.1 一回路主泵密封
主泵是反应堆冷却剂系统的"心脏"，其轴密封组件通常采用三级密封结构：
- **第一级**：流体静压密封，端面材料为碳化硅对碳石墨，承受 15.5 MPa 一回路压力
- **第二级**：接触式机械密封，端面为碳石墨对碳化硅
- **第三级**：辅助密封，阻止微量泄漏

主泵密封用石墨环需满足：
- 纯度 ≥ 99.5%，灰分 ≤ 500 ppm
- 经过 1000℃ 真空除气处理
- 通过 10⁷ Gy 伽马辐照试验
- 端面平面度 ≤ 0.3 μm，粗糙度 Ra ≤ 0.05 μm

### 2.2 应急堆芯冷却系统
应急堆芯冷却系统（ECCS）在事故工况下向堆芯注入含硼水。系统的阀门、泵密封采用碳石墨密封件，要求在事故后 30 天内保持密封性能。

### 2.3 安全壳贯穿件密封
电缆、管道贯穿安全壳处采用特殊密封结构，石墨密封件在事故工况下保持完整，防止放射性物质外泄。该部位石墨需通过 350℃ 高温 + 0.4 MPa 压差事故工况测试。

### 2.4 二回路给水泵密封
二回路给水泵输送除盐除氧水，温度 180~220℃，压力 6~8 MPa。采用金属浸渍石墨密封环，使用寿命要求 ≥ 8000 小时。

### 2.5 辅助系统密封
- **硼酸注入口密封**：耐硼酸腐蚀
- **废燃料水池密封**：耐辐照
- **废液处理系统密封**：耐化学介质
- **通风系统密封**：低泄漏率

## 三、核电级石墨密封件的质量保证

### 3.1 设计阶段
- 按 RCC-M、ASME BPVC III、GB/T 16714 等标准设计
- 进行有限元强度分析和抗震分析
- 编制设计文件包，包括设计说明书、计算书、图纸

### 3.2 材料采购
- 选择有核电资质的供应商
- 材料符合 ASTM D7219、NB/T 20007 等标准
- 每批材料附带炉号、化学成分、机械性能报告

### 3.3 制造过程
- 按 RCC-M F 或 ASME III NB 分卷要求
- 焊工、检验人员持有核电资质
- 关键工序设置见证点（W）、停工见证点（H）

### 3.4 检验与试验
- 尺寸检验：100% 关键尺寸
- 无损检测：渗透检测、超声波检测、X 射线检测
- 性能试验：密封性能试验、抗震试验、辐照试验
- 型式试验：样品在模拟工况下进行 1000 小时以上试验

### 3.5 文件与追溯
- 制造完工报告（EDMF）包含所有生产和检验记录
- 产品合格证由有资质机构签字
- 每件产品有唯一序列号，可追溯全生命周期

## 四、霍邱县华豪密封件有限公司的核电能力

### 4.1 已开发产品
- 核二回路给水泵密封石墨环（M254G 核级）
- 辅助系统阀门密封石墨环
- 废燃料水池密封件
- 应急系统泵用石墨轴套

### 4.2 在研产品
- 核主泵二级密封石墨环（与国内科研院所合作）
- 高温气冷堆石墨密封件
- 快堆钠冷密封石墨件

### 4.3 资质与认证
- 取得 NB/T 20037 核质保体系认证
- 通过中核集团、中广核集团供应商资格审核
- 关键人员持有核电无损检测资质

## 五、典型应用案例

为某核电站二回路给水泵提供的锑浸渍石墨密封环（M254G-N），内径 110 mm，外径 140 mm，工作温度 220℃，压力 7.5 MPa。运行数据：
- 泄漏量：8 mL/h（标准要求 ≤ 30 mL/h）
- 磨损率：0.02 mm/1000h
- 累计运行：24000 小时
- 端面温度：环境温度 + 18℃

该产品已通过中核集团鉴定，可替代进口同类产品。

## 六、发展趋势

### 6.1 国产化替代
国内核电建设加速，核电级石墨密封件国产化需求迫切。霍邱县华豪密封件有限公司积极响应国家核电国产化战略，加大研发投入。

### 6.2 小型模块化反应堆（SMR）
SMR 密封件尺寸更小、可靠性要求更高，需要开发新型石墨材料和密封结构。

### 6.3 第四代核电
高温气冷堆、快堆等四代核电采用氦气、液钠等介质，对石墨密封件提出新挑战。

## 结语

核电级碳石墨密封件是核电安全运行的重要保障，其设计、制造和质量保证必须严格遵循核电标准。霍邱县华豪密封件有限公司拥有核电级石墨密封件研发、生产能力，可提供二回路及辅助系统的密封解决方案。我们愿意与核电设计院、设备制造厂深度合作，共同推进核电密封件国产化进程。欢迎核电行业同仁联系我司技术部交流合作。`,
      en: `## Key Takeaways

- Carbon graphite shows no significant performance degradation up to a cumulative radiation dose of 10⁹ Gy, making it the preferred material for high-radiation nuclear zones
- RCP seal graphite rings require purity ≥ 99.5%, vacuum degassing at 1000°C, 10⁷ Gy gamma irradiation testing, and face flatness ≤ 0.3 μm
- High-temperature service must use metal-impregnated graphite (antimony 450°C, copper 500°C); resin-impregnated graphite is prohibited
- A secondary-loop feed pump antimony-impregnated M254G-N graphite seal ring has run 24,000 hours with 8 mL/h leakage, outperforming the standard

A nuclear power plant is one of the most complex engineering systems ever built. Seal failure in the reactor coolant pump (RCP), emergency core cooling system (ECCS), or containment penetrations may release radioactive media with catastrophic consequences. Carbon graphite — with radiation resistance, high-temperature tolerance, chemical inertness, and self-lubricity — plays an irreplaceable role in critical nuclear seals. While Huahao Sealing Co., Ltd. does not directly supply RCP primary seals, we have developed several nuclear-grade graphite seals for secondary-loop and auxiliary systems based on nuclear industry standards. This article reviews graphite applications and requirements in nuclear power.

## 1. Special Requirements for Nuclear Seals

### 1.1 Radiation Resistance
Long-term exposure to neutrons and gamma rays in the primary loop (borated water) breaks down molecular structures. Polymer seals (e.g., rubber O-rings) embrittle and fail above a cumulative dose of 10⁶ Gy. Carbon graphite, an inorganic non-metal, shows no significant performance degradation up to 10⁹ Gy — the preferred material for high-radiation zones.

Main radiation effects on graphite:
- **Lattice damage**: neutron irradiation displaces carbon atoms, altering crystal structure. At low dose (< 10²² n/cm²), graphite expands slightly and thermal conductivity decreases.
- **Wigner energy storage**: high-temperature irradiation stores energy in graphite that must be released by annealing.
- **Oxidation**: free radicals in irradiated water accelerate graphite oxidation.

We use nuclear-grade high-purity graphite (ash ≤ 100 ppm) vacuum-degassed at 1800°C to reduce radiation-induced gas release.

### 1.2 High Temperature Resistance
- **Normal operation**: 290~330°C
- **Design Basis Accident (DBA)**: up to 350°C
- **Severe accident**: may exceed 800°C

Metal-impregnated graphite serves continuously at 450°C; copper-impregnated grades reach 500°C. Avoid resin-impregnated graphite at high temperature.

### 1.3 Chemical Compatibility
Primary-loop medium is deionized water with boric acid (0~2500 ppm H₃BO₃) and lithium hydroxide (LiOH, pH 6.9~7.4). Boric acid does not corrode graphite; low-concentration LiOH does not affect graphite. However, the secondary-loop steam generator may be exposed to amine oxygen scavengers (morpholine, cyclohexylamine) — impregnant compatibility must be evaluated.

### 1.4 Seismic Resistance
For plants in seismic zones, seals must withstand Safe Shutdown Earthquake (SSE) loads. Graphite seals require seismic analysis proving no brittle fracture under seismic conditions.

### 1.5 Strict Traceability
The full production cycle must be traceable: raw-material batch number, inspection reports, machine IDs, operators, heat treatment cycles and temperature curves, inspection records, certificates, packaging, shipping, and installation records.

## 2. Typical Applications

### 2.1 Reactor Coolant Pump Seal
The RCP is the "heart" of the reactor coolant system. Its shaft seal typically uses three stages:
- **Stage 1**: hydrostatic seal, SiC vs carbon graphite, withstanding 15.5 MPa primary pressure
- **Stage 2**: contact mechanical seal, carbon graphite vs SiC
- **Stage 3**: auxiliary seal containing trace leakage

RCP graphite rings must meet:
- Purity ≥ 99.5%, ash ≤ 500 ppm
- Vacuum degassing at 1000°C
- 10⁷ Gy gamma irradiation test
- Face flatness ≤ 0.3 μm, roughness Ra ≤ 0.05 μm

### 2.2 Emergency Core Cooling System
ECCS injects borated water into the core under accident conditions. Valves and pump seals use carbon graphite parts that must maintain sealing for 30 days post-accident.

### 2.3 Containment Penetration Seals
Cable and pipe penetrations use special seals; graphite seals remain intact under accident conditions to prevent radioactive release. They must pass 350°C + 0.4 MPa differential accident testing.

### 2.4 Secondary-Loop Feed Pump Seal
Feed pumps deliver deaerated demineralized water at 180~220°C, 6~8 MPa. Metal-impregnated graphite rings target service life ≥ 8000 hours.

### 2.5 Auxiliary Systems
- **Boric acid injection port seal**: boric acid resistance
- **Spent fuel pool seal**: radiation resistance
- **Waste liquid treatment seal**: chemical resistance
- **Ventilation system seal**: low leakage

## 3. Quality Assurance for Nuclear-Grade Graphite Seals

### 3.1 Design Stage
- Designed to RCC-M, ASME BPVC III, GB/T 16714
- Finite-element stress and seismic analysis
- Design package: specification, calculations, drawings

### 3.2 Material Procurement
- Qualified nuclear suppliers
- Materials per ASTM D7219, NB/T 20007
- Each lot carries heat number, chemistry, mechanical reports

### 3.3 Manufacturing
- Per RCC-M F or ASME III NB subsection
- Welders and inspectors hold nuclear qualifications
- Hold points (H) and witness points (W) at key operations

### 3.4 Inspection and Testing
- Dimensions: 100% key dimensions
- NDT: penetrant, ultrasonic, X-ray
- Performance: sealing, seismic, irradiation tests
- Type tests: 1000+ hours under simulated service

### 3.5 Documentation and Traceability
- End-of-Manufacturing Dossier (EDMF) includes all production and inspection records
- Certificate signed by authorized body
- Unique serial number per part, traceable through service life

## 4. Huahao Sealing Nuclear Capabilities

### 4.1 Developed Products
- Secondary-loop feed pump graphite seal ring (M254G nuclear grade)
- Auxiliary valve seal graphite rings
- Spent fuel pool seals
- Emergency system pump graphite bushings

### 4.2 Products in Development
- RCP second-stage seal graphite rings (with research partners)
- High-temperature gas-cooled reactor graphite seals
- Fast reactor sodium-cooled graphite seals

### 4.3 Qualifications
- NB/T 20037 nuclear quality assurance certification
- Qualified supplier of CNNC and CGN
- NDT personnel with nuclear credentials

## 5. Typical Application Case

A secondary-loop feed pump at a nuclear plant uses our antimony-impregnated graphite seal ring M254G-N: ID 110 mm, OD 140 mm, 220°C, 7.5 MPa. Operating data:
- Leakage: 8 mL/h (spec ≤ 30 mL/h)
- Wear rate: 0.02 mm/1000h
- Cumulative operation: 24,000 hours
- Face temperature: ambient + 18°C

The product passed CNNC appraisal and substitutes imported equivalents.

## 6. Trends

### 6.1 Domestic Substitution
Accelerated domestic nuclear construction drives demand for nuclear-grade graphite seals. Huahao Sealing Co., Ltd. actively invests in R&D in support of domestic substitution.

### 6.2 Small Modular Reactors (SMR)
SMR seals are smaller and demand higher reliability, requiring new graphite materials and seal structures.

### 6.3 Generation IV Reactors
High-temperature gas-cooled reactors and fast reactors use helium and liquid sodium media, posing new challenges for graphite seals.

## Conclusion

Nuclear-grade carbon graphite seals are essential to safe nuclear plant operation. Their design, manufacture, and quality assurance must strictly follow nuclear standards. Huahao Sealing Co., Ltd. has the R&D and production capability to provide sealing solutions for secondary-loop and auxiliary systems. We welcome deep collaboration with nuclear design institutes and equipment manufacturers to advance domestic substitution. Please contact our engineering team to discuss cooperation.`,
    },
  },
  {
    slug: "graphite-seal-storage-maintenance",
    title: {
      zh: "石墨密封件储存与保养指南：延长寿命的实用方法",
      en: "Graphite Seal Storage and Maintenance Guide: Practical Methods to Extend Service Life",
    },
    excerpt: {
      zh: "石墨密封件虽耐腐蚀、耐高温，但储存和保养不当仍可能造成损伤。本文系统介绍石墨密封件的储存条件、运输防护、安装前检查、运行维护和停机保养，帮助用户最大化密封件寿命。",
      en: "Although graphite seals resist corrosion and high temperature, improper storage and maintenance can still cause damage. This article systematically covers storage conditions, transport protection, pre-installation inspection, in-service maintenance, and shutdown care to help users maximize seal life.",
    },
    tag: "maintenance",
    date: "2026-06-20",
    content: {
      zh: `## 核心要点

- 约 30% 的碳石墨密封环早期失效与储存保养不当有关，须建立全生命周期管理制度
- 储存温度 5~35℃、相对湿度 30~70%，树脂浸渍石墨原包装保质期 2 年，金属浸渍 3 年
- 安装严禁敲击，端面平面度 ≤ 0.6 μm 用光学平晶检测，须用无水乙醇清洗并禁用含氯溶剂
- 备件按批次先进先出（FIFO）使用，关键设备备件保有量 ≥ 设备数量的 1.5 倍

碳石墨密封件作为精密的摩擦副零件，从出厂到使用全过程中都需精心呵护。许多用户认为石墨"硬、耐磨"，可以随意堆放，结果安装后密封性能不达标甚至短期失效。霍邱县华豪密封件有限公司在售后服务中发现，约 30% 的早期失效案例与储存和保养不当有关。本文系统介绍石墨密封件的全生命周期管理，帮助用户避免常见错误，最大化密封件使用价值。

## 一、储存条件要求

### 1.1 环境温度与湿度
- **理想温度**：5~35℃
- **理想湿度**：相对湿度 30~70%
- **避免极端**：-10℃以下或 50℃以上

温度过低会使树脂浸渍石墨脆性增加；温度过高会加速树脂老化。湿度过高会使石墨表面吸附水分，可能引起端面锈蚀或浸渍剂水解。霍邱县华豪密封件有限公司出厂包装内附干燥剂，并采用真空铝箔袋密封，可在原始包装中储存 2 年性能不变。

### 1.2 储存环境
- **清洁**：无粉尘、无油雾、无腐蚀性气体
- **避光**：避免阳光直射，紫外线会加速橡胶件老化
- **通风**：良好通风，防止局部湿度过高
- **隔离**：远离酸、碱、溶剂等化学品

### 1.3 储存位置
- **水平放置**：密封环应水平放置，避免立放导致变形
- **分层摆放**：最多 3 层，每层间用瓦楞纸板隔离
- **避免挤压**：不得堆压重物，防止端面受力变形
- **离地离墙**：离地 ≥ 20 cm，离墙 ≥ 10 cm，便于通风

### 1.4 储存期限
- **未开封原包装**：2 年（树脂浸渍石墨）、3 年（金属浸渍石墨）
- **开封后**：6 个月内使用，需重新密封包装
- **超过期限**：使用前需进行性能复检

## 二、运输防护

### 2.1 包装要求
- **内包装**：真空铝箔袋 + 干燥剂
- **中包装**：瓦楞纸盒，每盒装 1~5 件
- **外包装**：木箱，内部填充防震泡沫
- **标识**：防潮、防震、防压、易碎标识

### 2.2 运输条件
- **防震**：避免剧烈振动和冲击
- **防潮**：防水布遮盖，避免雨淋
- **防压**：不得堆压重物
- **温度**：避免 -20℃以下或 60℃以上运输

### 2.3 到货验收
收到货物后应：
1. 检查外包装完整性
2. 核对数量和规格
3. 检查产品外观有无损伤
4. 检查密封端面有无划伤
5. 入库登记，记录批次号和到货日期

## 三、安装前检查

### 3.1 外观检查
- **端面**：无划伤、崩边、裂纹、锈蚀
- **配合面**：无毛刺、碰伤
- **倒角**：光滑过渡，无锐边
- **标记**：型号、规格、批次号清晰

### 3.2 尺寸复检
- 用千分尺或气动量仪复测关键尺寸
- 与图纸或订单要求对照
- 关键尺寸公差应符合 GB/T 1184 或图纸要求
- 不合格件立即隔离，不得使用

### 3.3 平面度检查
- 机械密封端面平面度 ≤ 0.6 μm
- 用光学平晶检测，应呈现均匀干涉条纹
- 干涉条纹不规则或数量过多的端面不合格

### 3.4 粗糙度检查
- 用粗糙度仪检测 Ra 值
- 密封端面 Ra ≤ 0.1 μm
- 滑动面 Ra ≤ 0.4 μm
- 不合格件不得使用

### 3.5 清洗
安装前用以下方法清洗：
- 用无尘布蘸无水乙醇擦拭端面
- 用压缩空气（洁净、干燥）吹扫
- 严禁用手直接触摸密封端面
- 严禁使用含氯溶剂（如三氯乙烷）清洗

## 四、安装注意事项

### 4.1 安装环境
- 清洁、无粉尘
- 温度 10~30℃
- 工具洁净，无金属屑

### 4.2 安装工具
- 使用专用安装工具，避免敲击
- 使用塑料或木质工具，避免金属直接接触
- 涂抹少量洁净润滑剂（如食品级硅油）便于安装

### 4.3 安装步骤
1. 检查轴/壳体配合面，去除毛刺
2. 在石墨件外径涂少量润滑剂
3. 用专用工具均匀压入，避免倾斜
4. 检查石墨件到位情况
5. 检查配合间隙是否符合要求
6. 转动轴系，确认无卡滞

### 4.4 常见安装错误
- **敲击安装**：导致端面崩边或裂纹
- **倾斜压入**：导致石墨件偏心，密封失效
- **过盈过大**：导致石墨件碎裂
- **未涂润滑剂**：导致压入困难，可能损伤
- **未清理配合面**：导致配合不严，运转时松动

## 五、运行维护

### 5.1 启动前检查
- 系统清洁度，无焊渣、铁屑
- 介质温度、压力符合设计
- 密封冲洗液流量正常（如有）
- 轴系转动灵活，无卡滞

### 5.2 启动初期
- 启动后观察密封泄漏量
- 正常泄漏量：5~30 mL/h（视密封形式）
- 监测密封温度，与环境温差 ≤ 20℃
- 运行 30 分钟无异常后转入正常运行

### 5.3 正常运行
- 每班检查泄漏量，记录数据
- 每周检查密封温度
- 每月检查密封冲洗液流量
- 每季度取样分析泄漏介质
- 每年进行全面检查

### 5.4 异常情况处理

#### 泄漏量增大
原因：端面磨损、弹簧失效、介质结晶
处理：检查端面磨损情况，更换磨损件；调整弹簧比压；解决介质结晶问题

#### 温度异常升高
原因：冲洗液不足、介质温度过高、密封面热裂
处理：检查冲洗液系统；降低介质温度；分析热裂原因并更换

#### 异常声响
原因：干摩擦、密封件松动、对磨件损坏
处理：立即停机检查；紧固松动件；更换损坏件

## 六、停机保养

### 6.1 短期停机（≤ 1 个月）
- 排空介质，用清水冲洗密封腔
- 密封腔内充入防腐剂（如防锈油）
- 每周转动轴系 2~3 圈，防止密封面粘结
- 恢复运行前检查密封性能

### 6.2 长期停机（> 1 个月）
- 拆下密封件，用无水乙醇清洗后干燥
- 涂抹防锈油，用油纸包裹
- 储存在 5~35℃、相对湿度 30~70% 的环境中
- 每季度检查一次，发现锈蚀及时处理

### 6.3 备件管理
- 备件按批次先进先出（FIFO）原则使用
- 建立备件台账，记录批次号、入库日期
- 定期检查库存，超过储存期限的及时复检
- 关键设备备件保有量 ≥ 设备数量的 1.5 倍

## 七、霍邱县华豪密封件有限公司的售后服务

### 7.1 技术支持
- 提供密封件安装、调试、维护培训
- 失效分析服务，出具失效分析报告
- 工况评估和选型建议

### 7.2 备件供应
- 提供原厂备件，确保材料一致性
- 建立客户档案，记录使用工况
- 紧急订单 72 小时内发货

### 7.3 质量保证
- 产品自出厂之日起 24 个月质量保证期
- 在正常储存和使用条件下，因制造原因导致失效的，免费更换
- 提供完整的出厂检验报告和材质证明

## 结语

石墨密封件的储存与保养是延长密封寿命、降低维护成本的重要环节。霍邱县华豪密封件有限公司建议用户建立完整的密封件管理制度，从储存、运输、安装到运行维护，每个环节都严格执行规范。我司可为客户提供密封件全生命周期管理培训和失效分析服务，欢迎联系技术部咨询。

妥善的储存和保养，可以让石墨密封件在关键时刻发挥最佳性能，为设备可靠运行保驾护航。选择霍邱县华豪密封件有限公司的产品，您获得的不仅是优质的密封件，更是专业的技术支持和服务保障。`,
      en: `## Key Takeaways

- About 30% of early carbon graphite seal ring failures are linked to improper storage and maintenance — full life-cycle management is essential
- Store at 5~35°C and 30~70% RH; shelf life is 2 years for resin-impregnated graphite in original packaging and 3 years for metal-impregnated grades
- Never hammer during installation; verify face flatness ≤ 0.6 μm with an optical flat; clean with absolute ethanol only — chlorinated solvents are prohibited
- Spare parts should follow FIFO by batch; safety stock for critical equipment should be ≥ 1.5× the number of units in service

Carbon graphite seals are precision friction-pair components that require careful handling from factory to service. Many users assume graphite is "hard and wear-resistant" and can be stored casually, only to find substandard sealing performance or premature failure after installation. In our after-sales service, we find that about 30% of early failures are linked to improper storage and maintenance. This article systematically covers the full life-cycle management of graphite seals to help users avoid common mistakes and maximize value.

## 1. Storage Conditions

### 1.1 Temperature and Humidity
- **Ideal temperature**: 5~35°C
- **Ideal humidity**: 30~70% RH
- **Avoid extremes**: below -10°C or above 50°C

Low temperature increases brittleness of resin-impregnated graphite; high temperature accelerates resin aging. High humidity causes moisture adsorption on the surface, leading to face corrosion or impregnant hydrolysis. Our packaging includes desiccant and uses vacuum aluminum-foil bags, preserving performance for 2 years in original packaging.

### 1.2 Storage Environment
- **Clean**: no dust, oil mist, or corrosive gases
- **Light-protected**: avoid direct sunlight; UV accelerates rubber aging
- **Ventilated**: good airflow prevents localized high humidity
- **Isolated**: away from acids, alkalis, solvents

### 1.3 Storage Position
- **Horizontal**: store seal rings flat to avoid warping
- **Layered**: maximum 3 layers, separated by corrugated board
- **No compression**: no heavy items stacked to prevent face deformation
- **Off ground/wall**: ≥ 20 cm from floor, ≥ 10 cm from wall for ventilation

### 1.4 Shelf Life
- **Original unopened**: 2 years (resin-impregnated), 3 years (metal-impregnated)
- **After opening**: use within 6 months, re-seal packaging
- **Beyond shelf life**: performance re-test before use

## 2. Transport Protection

### 2.1 Packaging Requirements
- **Inner**: vacuum aluminum-foil bag + desiccant
- **Middle**: corrugated box, 1~5 pieces per box
- **Outer**: wooden crate with anti-shock foam
- **Marking**: moisture, shock, crush, fragile labels

### 2.2 Transport Conditions
- **Shock**: avoid severe vibration and impact
- **Moisture**: cover with tarpaulin, avoid rain
- **Crush**: no heavy items stacked on top
- **Temperature**: avoid below -20°C or above 60°C

### 2.3 Receipt Inspection
After receiving goods:
1. Inspect outer packaging integrity
2. Verify quantity and specifications
3. Inspect product appearance for damage
4. Inspect seal face for scratches
5. Register inbound with batch number and date

## 3. Pre-Installation Inspection

### 3.1 Visual Inspection
- **Face**: no scratches, chipping, cracks, corrosion
- **Mating surface**: no burrs, bruises
- **Chamfer**: smooth transition, no sharp edges
- **Marking**: model, spec, batch number clear

### 3.2 Dimensional Verification
- Re-measure key dimensions with micrometer or air gauge
- Compare against drawing or order requirements
- Key tolerance per GB/T 1184 or drawing
- Quarantine non-conforming parts immediately

### 3.3 Flatness Inspection
- Mechanical seal face flatness ≤ 0.6 μm
- Inspect with optical flat — uniform interference bands expected
- Irregular or excessive bands indicate non-conforming face

### 3.4 Roughness Inspection
- Measure Ra with profilometer
- Seal face Ra ≤ 0.1 μm
- Sliding surface Ra ≤ 0.4 μm
- Non-conforming parts not for use

### 3.5 Cleaning
Before installation:
- Wipe face with lint-free cloth and absolute ethanol
- Blow with clean, dry compressed air
- Never touch seal face with bare hands
- Never use chlorinated solvents (e.g., trichloroethane)

## 4. Installation Precautions

### 4.1 Environment
- Clean, dust-free
- Temperature 10~30°C
- Clean tools, no metal chips

### 4.2 Tools
- Use dedicated installation tools; avoid hammering
- Use plastic or wood tools; avoid direct metal contact
- Apply small amount of clean lubricant (e.g., food-grade silicone oil)

### 4.3 Steps
1. Inspect shaft/housing mating surfaces; remove burrs
2. Apply lubricant to graphite OD
3. Press in evenly with dedicated tool; avoid tilting
4. Verify graphite part seating
5. Verify fit clearance meets requirement
6. Rotate shaft system; confirm no binding

### 4.4 Common Errors
- **Hammering**: causes face chipping or cracking
- **Tilted insertion**: causes eccentricity, seal failure
- **Excessive interference**: causes graphite fracture
- **No lubricant**: causes difficult insertion, possible damage
- **Dirty mating surface**: causes loose fit, run-time loosening

## 5. In-Service Maintenance

### 5.1 Pre-Start Check
- System cleanliness — no weld spatter, iron chips
- Medium temperature, pressure within design
- Seal flush flow normal (if applicable)
- Shaft rotation free, no binding

### 5.2 Early Operation
- Observe leakage after start
- Normal leakage: 5~30 mL/h (varies by seal type)
- Monitor seal temperature; differential vs ambient ≤ 20°C
- After 30 minutes without anomaly, transition to normal operation

### 5.3 Normal Operation
- Per shift: check leakage, record data
- Weekly: check seal temperature
- Monthly: check flush flow
- Quarterly: sample leakage medium
- Annually: comprehensive inspection

### 5.4 Anomaly Handling

#### Increased Leakage
Cause: face wear, spring failure, medium crystallization
Action: inspect face wear; replace worn parts; adjust spring pressure; resolve crystallization

#### Abnormal Temperature Rise
Cause: insufficient flush, high medium temperature, face thermal cracking
Action: check flush system; reduce medium temperature; analyze cracking cause and replace

#### Abnormal Sound
Cause: dry friction, loose seal, damaged mating part
Action: stop immediately; tighten loose parts; replace damaged parts

## 6. Shutdown Care

### 6.1 Short-Term Shutdown (≤ 1 month)
- Drain medium, flush seal chamber with clean water
- Fill chamber with corrosion inhibitor (e.g., rust-preventive oil)
- Rotate shaft 2~3 turns weekly to prevent face sticking
- Check sealing performance before restart

### 6.2 Long-Term Shutdown (> 1 month)
- Remove seal; clean with ethanol and dry
- Apply rust-preventive oil; wrap in oil paper
- Store at 5~35°C, 30~70% RH
- Inspect quarterly; address corrosion promptly

### 6.3 Spare Parts Management
- FIFO (first-in-first-out) by batch
- Maintain spare parts ledger with batch and inbound date
- Regular inventory check; re-test expired stock
- Critical equipment spares ≥ 1.5× equipment count

## 7. Huahao Sealing After-Sales Service

### 7.1 Technical Support
- Installation, commissioning, and maintenance training
- Failure analysis service with report
- Service condition assessment and selection advice

### 7.2 Spare Parts Supply
- Original parts for material consistency
- Customer files recording service conditions
- Emergency orders shipped within 72 hours

### 7.3 Quality Assurance
- 24-month warranty from ex-works date
- Free replacement for manufacturing defects under normal storage and use
- Complete inspection report and material certificate

## Conclusion

Storage and maintenance of graphite seals are critical to extending seal life and reducing maintenance cost. We recommend that users establish a complete seal management system with strict procedures for storage, transport, installation, and in-service maintenance. Huahao Sealing Co., Ltd. provides full life-cycle management training and failure analysis services; please contact our engineering team for consultation.

Proper storage and maintenance enable graphite seals to deliver optimal performance at the critical moment, safeguarding reliable equipment operation. Choosing Huahao Sealing Co., Ltd. gives you not only quality seals but also professional technical support and service assurance.`,
    },
  },
]

export default blogPostsBatch2
