export interface BlogPost {
  slug: string
  title: { zh: string; en: string; vi?: string; th?: string }
  excerpt: { zh: string; en: string; vi?: string; th?: string }
  tag: string
  date: string
  content: { zh: string; en: string; vi?: string; th?: string }
}

export const blogPostsBatch7: BlogPost[] = [
  {
    slug: "petroleum-refining-high-temperature-pump-seal",
    title: {
      zh: "石油炼化高温油泵碳石墨密封应用：常减压塔底泵 350℃ 工况解决方案",
      en: "Carbon Graphite Seals for High-Temperature Oil Pumps in Petroleum Refining: 350℃ Atmospheric-Vacuum Residue Pump Solutions",
      vi: "Vòng đệm than chì carbon cho bơm dầu nhiệt độ cao trong lọc dầu: Giải pháp cho bơm cặn chưng cất áp suất thường-khí 350℃",
      th: "ซีลคาร์บอนกราไฟต์สำหรับปั๊มน้ำมันอุณหภูมิสูงในโรงกลั่นน้ำมัน: โซลูชันสำหรับปั๊มกากอุณหภูมิ 350℃",
    },
    excerpt: {
      zh: "塔底泵渣油温度 350-380℃，树脂浸渍石墨 300℃ 以上碳化失效。本文按材料（锑浸渍石墨）、结构（平衡型）、冲洗（API 682 Plan 23）三步给出高温油泵密封选型流程，附炼厂现场案例。",
      en: "Bottom-pump residue runs 350–380°C while resin-impregnated graphite carbonizes above 300°C. In three steps — material (antimony-impregnated graphite), structure (balanced type) and flush plan (API 682 Plan 23) — this article lays out a selection workflow for hot oil pump seals with refinery field cases.",
      vi: "Dành cho bơm đáy tháp chưng cất áp suất thường-khí hoạt động trên 350℃ với cặn nhiệt độ cao, bài viết trình bày có hệ thống cách chọn vật liệu vòng đệm than chì carbon (than chì tẩm kim loại antimon), thiết kế kết cấu (kiểu cân bằng), phương án xả (API 682 Plan 23) và các case study thực tế — hướng dẫn chọn lựa thực tế cho kỹ sư cơ khí nhà máy lọc dầu.",
      th: "สำหรับปั๊มก้นหอกลั่นภายใต้ความดันปกติและสุญญากาศที่ทำงานเหนือ 350℃ กับกากน้ำมันอุณหภูมิสูง บทความนี้อธิบายอย่างเป็นระบบถึงการเลือกวัสดุซีลคาร์บอนกราไฟต์ (กราไฟต์อิมเพรกเนตอินติมอนี) การออกแบบโครงสร้าง (แบบสมดุล) แผนล้าง (API 682 Plan 23) และกรณีศึกษาภาคสนาม — คู่มือเลือกใช้สำหรับวิศวกรเครื่องกลโรงกลั่น",
    },
    tag: "application",
    date: "2026-07-01",
    content: {
      zh: `## 核心要点

- 常减压塔底泵输送 350-380℃ 渣油，普通树脂浸渍石墨在 300℃ 以上会发生碳化失效，必须采用锑金属浸渍石墨（耐温 500℃）
- 高温工况下端面液膜易汽化，需配合 API 682 Plan 23（自冲洗循环冷却）或 Plan 21+23 组合方案，将密封腔温度降至 200℃ 以下
- 平衡型结构（载荷系数 B=0.7-0.8）降低端面比压，配合 SiC 对磨材料，使用寿命可达 12000-16000 小时
- 华豪密封在某石化 800 万吨/年常减压装置改造中，将原机械密封寿命从 4000 小时提升至 14000 小时
- 选型三要素：介质温度梯度、含固体颗粒量、启停频次，三者决定浸渍类型与冲洗方案组合

塔底泵输送的渣油温度 350-380℃，普通树脂浸渍石墨在 300℃ 以上就会碳化失效——所以高温油泵密封的选材答案几乎只有一个：锑金属浸渍石墨。但材料只是三分之一：端面液膜在高温下易汽化，要靠 API 682 Plan 23 自冲洗把密封腔温度压下来；结构上选平衡型控制比压。本文按材料、结构、冲洗方案三步走，结合炼厂现场案例讲完整选型流程。

## 一、工况特性与失效机理

### 1.1 高温渣油的密封挑战

常减压塔底泵介质具有"三高一含"特性：高温（350-380℃）、高粘度（运动粘度 100-500 mm²/s）、高饱和蒸汽压（易汽化）、含固体颗粒（焦粉、铁锈）。这三高一含对机械密封提出严苛要求：高温会使普通碳石墨材料的浸渍树脂在 300℃ 以上发生碳化分解；高粘度增加端面摩擦扭矩，密封环易发生热裂；介质在端面处因压力骤降发生闪蒸汽化，破坏液膜润滑；焦粉颗粒进入密封面会加速磨损。

### 1.2 典型失效模式

现场统计显示，高温油泵机械密封失效有 70% 集中在三类：石墨环表面热裂（占 35%）、浸渍剂碳化失效（占 22%）、弹簧疲劳卡阻（占 13%）。其中前两类均与碳石墨材料选型直接相关。

## 二、材料选型：锑金属浸渍石墨

### 2.1 为何不用树脂浸渍

酚醛、呋喃等热固性树脂浸渍石墨的长期使用温度上限为 200-220℃，短期 250℃。在 350℃ 渣油中，树脂会在 500-2000 小时内逐步碳化，碳化后体积收缩 8-12%，气孔率从 2% 反弹至 8% 以上，密封面出现渗透性泄漏。

### 2.2 锑金属浸渍的优势

锑（Sb）金属浸渍石墨的耐温上限可达 500℃，熔点 630℃。锑浸渍后石墨气孔率降至 1% 以下，且金属浸渍层在高温下不分解、不收缩，长期稳定。锑的导热系数（24 W/(m·K)）远高于树脂（0.2 W/(m·K)），有利于端面摩擦热散失。

华豪密封的 M106D 锑浸渍石墨在 380℃ 渣油工况下的实测寿命：树脂浸渍 M106K 平均 4200 小时，锑浸渍 M106D 平均 13800 小时，寿命提升 3.3 倍。

### 2.3 配对材料选择

高温渣油工况推荐碳石墨与碳化硅（SiC）配对。SiC 导热系数达 120-150 W/(m·K)，是硬质合金的 3 倍，能快速导出端面摩擦热。避免使用氧化铝陶瓷（导热仅 30 W/(m·K)），高温下易因热应力开裂。

## 三、结构设计要点

### 3.1 平衡型载荷系数

高温工况必须采用平衡型结构，载荷系数 B 取 0.7-0.8。非平衡型（B≥1）在 350℃ 渣油中端面比压过大，会挤压破坏高温下变薄的液膜，导致干摩擦。

### 3.2 金属波纹管替代弹簧

高温油泵推荐用 Inconel 718 金属波纹管替代传统圆柱螺旋弹簧。波纹管兼具弹性元件与辅助密封双重功能，无需 O 型圈（O 型圈在 350℃ 需用氟橡胶 FKM，寿命仅 2000-3000 小时），整体耐温可达 400℃ 以上。

## 四、冲洗方案：API 682 Plan 23

### 4.1 Plan 23 自冲洗循环冷却

Plan 23 是高温油泵首选方案：从密封腔引出介质，经冷却器降温至 200℃ 以下后返回密封腔，形成闭式循环。冷却水耗量约 0.5-1.0 m³/h，可将密封腔温度从 350℃ 降至 180-200℃，从根本上消除汽化风险。

### 4.2 Plan 21+23 组合

对含颗粒较多的减压渣油，可在 Plan 23 基础上并联 Plan 21（从泵出口引洁净蜡油经孔板降压后注入密封腔），形成双冲洗方案，既降温又阻隔颗粒。

## 五、华豪密封案例

某石化公司 800 万吨/年常减压装置塔底泵（流量 450 m³/h，温度 365℃，介质含焦粉），原用进口品牌机械密封平均寿命 4000 小时，年泄漏停工 3 次。2019 年改用华豪密封 M106D + SiC + Inconel 波纹管 + Plan 23 方案后，平均寿命提升至 14000 小时，4 年累计运行 56000 小时仅更换 4 套密封，节约备件费用约 80 万元。

选型时需综合考量介质温度梯度、含固量、启停频次三要素：温度波动大优先用波纹管；含固量高优先用 Plan 21+23；频繁启停应降低端面比压至 0.3-0.4 MPa。`,
      en: `## Key Takeaways

- Atmospheric-vacuum distillation bottom pumps handle 350-380℃ residue oil; conventional resin-impregnated graphite carbonizes and fails above 300℃, requiring antimony-impregnated graphite (rated to 500℃)
- At high temperatures the face liquid film easily vaporizes; API 682 Plan 23 (self-flush circulation with cooling) or a Plan 21+23 combination is needed to bring seal chamber temperature below 200℃
- Balanced-type construction (load coefficient B=0.7-0.8) reduces face specific pressure; paired with SiC mating material, service life reaches 12000-16000 hours
- Huahao Sealing extended seal life from 4000 to 14000 hours in a Sinopec 8 million ton/year atmospheric-vacuum unit revamp
- Three selection factors: media temperature gradient, solid particle content, and start-stop frequency — together they determine the impregnation type and flush plan combination

Bottom pumps convey residue at 350–380°C, and resin-impregnated graphite carbonizes above 300°C — so the material answer for hot oil pump seals is nearly singular: antimony-impregnated graphite. But material is only one third of the answer: the face liquid film flashes easily at high temperature, so API 682 Plan 23 self-circulation is needed to pull seal chamber temperature down, and a balanced-type design controls face pressure. This article walks material, structure and flush plan in three steps, backed by refinery field cases.

## 1. Operating Conditions and Failure Mechanisms

### 1.1 Sealing Challenges of High-Temperature Residue

Atmospheric-vacuum bottom pump media exhibit "three-high one-containing" characteristics: high temperature (350-380℃), high viscosity (100-500 mm²/s), high saturation vapor pressure (prone to flashing), and containing solid particles (coke powder, rust). High temperature carbonizes the impregnation resin of ordinary carbon graphite above 300℃; high viscosity increases face friction torque leading to thermal cracking; pressure drop at the face causes flashing that destroys film lubrication; coke particles entering the face accelerate wear.

### 1.2 Typical Failure Modes

Field statistics show 70% of high-temperature oil pump mechanical seal failures fall into three categories: graphite ring surface thermal cracking (35%), impregnant carbonization failure (22%), and spring fatigue jamming (13%). The first two are directly related to carbon graphite material selection.

## 2. Material Selection: Antimony-Impregnated Graphite

### 2.1 Why Not Resin Impregnation

Thermosetting resin-impregnated graphite (phenolic, furan) has a long-term service temperature ceiling of 200-220℃, or 250℃ short-term. In 350℃ residue oil, the resin carbonizes progressively within 500-2000 hours. After carbonization the volume shrinks 8-12%, porosity rebounds from 2% to above 8%, and the sealing face develops permeation leakage.

### 2.2 Advantages of Antimony Metal Impregnation

Antimony (Sb) metal-impregnated graphite has a temperature ceiling of 500℃ (antimony melting point 630℃). After impregnation, graphite porosity drops below 1%, and the metal impregnation layer does not decompose or shrink at high temperature, remaining stable long-term. Antimony's thermal conductivity (24 W/(m·K)) is far higher than resin (0.2 W/(m·K)), aiding face friction heat dissipation.

Huahao Sealing's M106D antimony-impregnated graphite in 380℃ residue oil service shows: average life of resin-impregnated M106K is 4200 hours, while Sb-impregnated M106D averages 13800 hours — a 3.3x life improvement.

### 2.3 Mating Material Selection

For high-temperature residue oil, pair carbon graphite with silicon carbide (SiC). SiC thermal conductivity reaches 120-150 W/(m·K), three times that of hard alloy, rapidly conducting face friction heat away. Avoid alumina ceramic (thermal conductivity only 30 W/(m·K)), which is prone to thermal stress cracking at high temperature.

## 3. Structural Design Points

### 3.1 Balanced Load Coefficient

High-temperature service must use balanced-type construction with load coefficient B of 0.7-0.8. Unbalanced type (B≥1) creates excessive face specific pressure in 350℃ residue oil, squeezing out the thinned high-temperature film and causing dry friction.

### 3.2 Metal Bellows Instead of Springs

For high-temperature oil pumps, Inconel 718 metal bellows are recommended over conventional cylindrical helical springs. Bellows serve as both elastic element and auxiliary seal, eliminating O-rings (FKM O-rings at 350℃ last only 2000-3000 hours) and offering overall temperature resistance above 400℃.

## 4. Flush Plans: API 682 Plan 23

### 4.1 Plan 23 Self-Flush Circulation Cooling

Plan 23 is the preferred solution for high-temperature oil pumps: media is drawn from the seal chamber, cooled by a cooler to below 200℃, then returned to the seal chamber forming a closed loop. Cooling water consumption is about 0.5-1.0 m³/h, reducing chamber temperature from 350℃ to 180-200℃, fundamentally eliminating vaporization risk.

### 4.2 Plan 21+23 Combination

For vacuum residue with higher particle content, Plan 21 (clean wax oil from pump discharge, pressure-reduced through an orifice, injected into seal chamber) can be paralleled with Plan 23 — a dual-flush plan that both cools and blocks particles.

## 5. Huahao Sealing Case Study

A Sinopec 8 million ton/year atmospheric-vacuum unit bottom pump (flow 450 m³/h, temperature 365℃, media containing coke powder) originally used an imported brand mechanical seal averaging 4000 hours life, with three leakage shutdowns per year. After switching to Huahao Sealing's M106D + SiC + Inconel bellows + Plan 23 solution in 2019, average life reached 14000 hours. Over 4 years and 56000 cumulative hours, only 4 seal sets were replaced, saving about 800000 CNY in spare parts.

Selection requires weighing three factors: media temperature gradient, particle content, and start-stop frequency. Large temperature swings favor bellows; high particle content favors Plan 21+23; frequent starts/stops should reduce face specific pressure to 0.3-0.4 MPa.`,
      vi: `## Điểm chính

- Bơm đáy tháp chưng cất áp suất thường-khí xử lý cặn dầu 350-380℃; than chì tẩm nhựa thông thường bị cacbon hóa và hỏng trên 300℃, cần dùng than chì tẩm kim loại antimon (chịu được 500℃)
- Ở nhiệt độ cao màng dung dịch bề mặt dễ hóa hơi; cần API 682 Plan 23 (tuần hoàn xả tự làm mát) hoặc tổ hợp Plan 21+23 để hạ nhiệt độ buồng kín xuống dưới 200℃
- Kết cấu kiểu cân bằng (hệ số tải B=0.7-0.8) giảm áp suất riêng bề mặt; kết hợp vật liệu ma đối SiC, tuổi thọ đạt 12000-16000 giờ
- Huahao Sealing đã nâng tuổi thọ kín từ 4000 lên 14000 giờ trong dự án cải tạo nhà máy chưng cất áp suất thường-khí 8 triệu tấn/năm của Sinopec
- Ba yếu tố chọn lựa: gradient nhiệt độ môi chất, hàm lượng hạt rắn, tần số khởi-dừng — cùng quyết định loại tẩm và tổ hợp phương án xả

Bơm đáy tháp của thiết bị chưng cất áp suất thường-khí trong nhà máy lọc dầu là "trái tim" của thiết bị. Cặn dầu áp suất thường vận chuyển thường ở 350-380℃, cặn dầu chân không cũng trên 380℃. Trong điều kiện này, độ tin cậy của cơ cấu kín trực tiếp quyết định việc thiết bị có thể đạt chu kỳ bảo dưỡng 4 năm/lần. Dựa trên nhiều năm kinh nghiệm phục vụ các nhà máy lọc của Sinopec và PetroChina, bài viết trình bày có hệ thống về chọn lựa và thiết kế vòng đệm than chì carbon cho bơm dầu nhiệt độ cao.

## 1. Đặc tính điều kiện làm việc và cơ chế hỏng hóc

### 1.1 Thách thức kín của cặn dầu nhiệt độ cao

Môi chất bơm đáy tháp áp suất thường-khí có đặc tính "ba cao một chứa": nhiệt độ cao (350-380℃), độ nhớt cao (100-500 mm²/s), áp suất hơi bão hòa cao (dễ hóa hơi), và chứa hạt rắn (bột than cốc, rỉ sét). Nhiệt độ cao làm nhựa tẩm của than chì carbon thông thường bị cacbon hóa trên 300℃; độ nhớt cao tăng mô-men ma sát bề mặt, dễ gây nứt nhiệt; sự giảm áp tại bề mặt làm môi chất hóa hơi nhanh, phá hủy bôi trơn màng dung dịch; hạt cốc xâm nhập bề mặt tăng tốc mài mòn.

### 1.2 Chế độ hỏng điển hình

Thống kê hiện trường cho thấy 70% hỏng hóc cơ cấu kín bơm dầu nhiệt độ cao tập trung vào ba loại: nứt nhiệt bề mặt vòng than chì (35%), hỏng do cacbon hóa chất tẩm (22%), và kẹt mỏi lò xo (13%). Hai loại đầu liên quan trực tiếp đến việc chọn vật liệu than chì carbon.

## 2. Chọn vật liệu: Than chì tẩm antimon

### 2.1 Tại sao không tẩm nhựa

Than chì tẩm nhựa nhiệt rắn (phenolic, furan) có giới hạn nhiệt độ sử dụng dài hạn 200-220℃, ngắn hạn 250℃. Trong cặn dầu 350℃, nhựa bị cacbon hóa dần trong 500-2000 giờ. Sau khi cacbon hóa thể tích co lại 8-12%, độ rỗng tăng từ 2% lên trên 8%, bề mặt kín xuất hiện rò rỉ thấm.

### 2.2 Lợi ích của tẩm antimon

Than chì tẩm kim loại antimon (Sb) có giới hạn nhiệt độ 500℃ (antimon nóng chảy 630℃). Sau khi tẩm, độ rỗng than chì giảm dưới 1%, lớp tẩm kim loại không phân hủy hay co lại ở nhiệt độ cao, ổn định dài hạn. Hệ số dẫn nhiệt của antimon (24 W/(m·K)) cao hơn nhiều so với nhựa (0.2 W/(m·K)), có lợi cho tản nhiệt ma sát bề mặt.

Than chì tẩm antimon M106D của Huahao Sealing trong điều kiện cặn dầu 380℃ cho kết quả: tuổi thọ trung bình của M106H tẩm nhựa là 4200 giờ, trong khi M106D tẩm antimon đạt 13800 giờ — tăng 3.3 lần.

### 2.3 Chọn vật liệu ma đối

Cho cặn dầu nhiệt độ cao, kết hợp than chì carbon với silicon carbide (SiC). Hệ số dẫn nhiệt SiC đạt 120-150 W/(m·K), gấp ba lần hợp kim cứng, dẫn nhiệt ma sát bề mặt nhanh chóng. Tránh dùng gốm nhôm oxide (hệ số dẫn nhiệt chỉ 30 W/(m·K)), dễ nứt do ứng suất nhiệt ở nhiệt độ cao.

## 3. Điểm thiết kế kết cấu

### 3.1 Hệ số tải cân bằng

Dịch vụ nhiệt độ cao phải dùng kết cấu kiểu cân bằng, hệ số tải B lấy 0.7-0.8. Kiểu không cân bằng (B≥1) tạo áp suất riêng bề mặt quá lớn trong cặn dầu 350℃, ép vỡ màng dung dịch mỏng ở nhiệt độ cao, gây ma sát khô.

### 3.2 Ống bích kim loại thay lò xo

Cho bơm dầu nhiệt độ cao, nên dùng ống bích kim loại Inconel 718 thay lò xo xoắn ốc trụ thông thường. Ống bích vừa là phần tử đàn hồi vừa là kín phụ, loại bỏ O-ring (O-ring FKM ở 350℃ chỉ dùng được 2000-3000 giờ), chịu nhiệt tổng thể trên 400℃.

## 4. Phương án xả: API 682 Plan 23

### 4.1 Plan 23 tuần hoàn xả tự làm mát

Plan 23 là giải pháp ưu tiên cho bơm dầu nhiệt độ cao: môi chất dẫn từ buồng kín qua bộ làm mát hạ nhiệt dưới 200℃ rồi trở lại buồng kín, tạo vòng tuần hoàn kín. Lượng nước làm mát khoảng 0.5-1.0 m³/h, hạ nhiệt buồng từ 350℃ xuống 180-200℃, loại bỏ triệt để nguy cơ hóa hơi.

### 4.2 Tổ hợp Plan 21+23

Cho cặn dầu chân không có nhiều hạt, có thể song song Plan 21 (dầu sáp sạch từ đầu ra bơm, qua màng giảm áp, bơm vào buồng kín) với Plan 23 — phương án xả kép vừa làm mát vừa chặn hạt.

## 5. Case study Huahao Sealing

Bơm đáy tháp thiết bị chưng cất áp suất thường-khí 8 triệu tấn/năm của Sinopec (lưu lượng 450 m³/h, nhiệt độ 365℃, môi chất chứa bột cốc) ban đầu dùng cơ cấu kín thương hiệu nhập khẩu tuổi thọ trung bình 4000 giờ, mỗi năm dừng máy do rò rỉ 3 lần. Sau khi chuyển sang giải pháp M106D + SiC + ống bích Inconel + Plan 23 của Huahao Sealing năm 2019, tuổi thọ trung bình đạt 14000 giờ. Trong 4 năm tích lũy 56000 giờ, chỉ thay 4 bộ kín, tiết kiệm chi phí phụ tùng khoảng 800000 CNY.

Chọn lựa cần xem xét ba yếu tố: gradient nhiệt độ môi chất, hàm lượng hạt, tần số khởi-dừng. Dao động nhiệt lớn ưu tiên ống bích; hạt nhiều ưu tiên Plan 21+23; khởi-dừng thường xuyên nên giảm áp suất riêng bề mặt xuống 0.3-0.4 MPa.`,
      th: `## ประเด็นสำคัญ

- ปั๊มก้นหอกลั่นภายใต้ความดันปกติ-สุญญากาศรับมือกับกากน้ำมัน 350-380℃; กราไฟต์อิมเพรกเนตเรซินทั่วไปจะคาร์บอไนซ์และเสียเหนือ 300℃ จำเป็นต้องใช้กราไฟต์อิมเพรกเนตอินติมอนี (ทนได้ 500℃)
- ที่อุณหภูมิสูงฟิล์มของเหลวที่ผิวหน้าง่ายต่อการระเหย; จำเป็นต้องใช้ API 682 Plan 23 (หมุนเวียนล้างด้วยการระบายความร้อน) หรือผสม Plan 21+23 เพื่อลดอุณหภูมิห้องซีลให้ต่ำกว่า 200℃
- โครงสร้างแบบสมดุล (ค่าสัมประสิทธิ์โหลด B=0.7-0.8) ลดความดันจำเพาะที่ผิวหน้า; จับคู่กับวัสดุเคลื่อนที่ประกบ SiC อายุการใช้งานถึง 12000-16000 ชั่วโมง
- Huahao Sealing ได้ยืดอายุซีลจาก 4000 เป็น 14000 ชั่วโมงในโครงการปรับปรุงหอกลั่นภายใต้ความดันปกติ-สุญญากาศ 8 ล้านตัน/ปี ของ Sinopec
- ปัจจัยในการเลือกสามข้อ: การไล่เฉดอุณหภูมิของตัวกลาง ปริมาณอนุภาคของแข็ง และความถี่ในการเริ่ม-หยุด — กำหนดชนิดการอิมเพรกเนตและผสมแผนล้างร่วมกัน

ปั๊มก้นหอของหอกลั่นภายใต้ความดันปกติ-สุญญากาศในโรงกลั่นน้ำมันเป็น "หัวใจ" ของอุปกรณ์ กากน้ำมันภายใต้ความดันปกติที่ส่งผ่านมักจะอยู่ที่ 350-380℃ และกากน้ำมันสุญญากาศก็เกิน 380℃ ในสภาวะเช่นนี้ ความน่าเชื่อถือของซีลกลไกกำหนดโดยตรงว่าหน่วยสามารถบรรลุรอบการบำรุงรักษา 4 ปี/ครั้งได้หรือไม่ อ้างอิงจากประสบการณ์หลายปีในการให้บริการโรงกลั่นของ Sinopec และ PetroChina บทความนี้ครอบคลุมอย่างเป็นระบบถึงการเลือกและออกแบบซีลคาร์บอนกราไฟต์สำหรับปั๊มน้ำมันอุณหภูมิสูง

## 1. สภาวะการทำงานและกลไกการเสียหาย

### 1.1 ความท้าทายด้านซีลของกากน้ำมันอุณหภูมิสูง

ตัวกลางของปั๊มก้นหอภายใต้ความดันปกติ-สุญญากาศมีลักษณะ "สามสูงหนึ่งมี": อุณหภูมิสูง (350-380℃) ความหนืดสูง (100-500 mm²/s) ความดันไออิ่มตัวสูง (ง่ายต่อการระเหย) และมีอนุภาคของแข็ง (ผงโค้ก สนิม) อุณหภูมิสูงทำให้เรซินอิมเพรกเนตของคาร์บอนกราไฟต์ทั่วไปคาร์บอไนซ์เหนือ 300℃; ความหนืดสูงเพิ่มแรงบิดการเสียดสีที่ผิวหน้า นำไปสู่การแตกร้าวจากความร้อน; ความดันตกที่ผิวหน้าทำให้ตัวกลางแฟลชระเหย ทำลายการหล่อลื่นฟิล์ม; อนุภาคโค้กที่เข้าสู่ผิวหน้าเร่งการสึกหรอ

### 1.2 รูปแบบความเสียหายทั่วไป

สถิติภาคสนามแสดงให้เห็นว่า 70% ของความเสียหายของซีลกลไกปั๊มน้ำมันอุณหภูมิสูงกระจุกตัวอยู่ในสามประเภท: การแตกร้าวจากความร้อนที่ผิวหน้าวงแหวนกราไฟต์ (35%) การเสียหายจากคาร์บอไนเซชันของสารอิมเพรกเนต (22%) และการยึดติดจากความเหนื่อยล้าของสปริง (13%) สองประเภทแรกเกี่ยวข้องโดยตรงกับการเลือกวัสดุคาร์บอนกราไฟต์

## 2. การเลือกวัสดุ: กราไฟต์อิมเพรกเนตอินติมอนี

### 2.1 ทำไมไม่อิมเพรกเนตเรซิน

กราไฟต์อิมเพรกเนตเรซินเทอร์โมเซตติ้ง (ฟีนอลิก ฟูแรน) มีเพดานอุณหภูมิการใช้งานระยะยาว 200-220℃ หรือ 250℃ ระยะสั้น ในกากน้ำมัน 350℃ เรซินจะคาร์บอไนซ์อย่างต่อเนื่องภายใน 500-2000 ชั่วโมง หลังคาร์บอไนเซชันปริมาตรหดตัว 8-12% พอรอสิตี้เพิ่มจาก 2% เป็นมากกว่า 8% และผิวหน้าซีลเกิดการรั่วซึมแบบทะลุ

### 2.2 ข้อดีของการอิมเพรกเนตอินติมอนีโลหะ

กราไฟต์อิมเพรกเนตอินติมอนี (Sb) โลหะมีเพดานอุณหภูมิ 500℃ (จุดหลอมเหลวอินติมอนี 630℃) หลังอิมเพรกเนต พอรอสิตี้กราไฟต์ลดต่ำกว่า 1% และชั้นอิมเพรกเนตโลหะไม่สลายตัวหรือหดตัวที่อุณหภูมิสูง คงที่ในระยะยาว ค่าการนำความร้อนของอินติมอนี (24 W/(m·K)) สูงกว่าเรซิน (0.2 W/(m·K)) มาก ช่วยกระจายความร้อนจากการเสียดสีที่ผิวหน้า

กราไฟต์อิมเพรกเนตอินติมอนี M106D ของ Huahao Sealing ในบริการกากน้ำมัน 380℃ แสดง: อายุการใช้งานเฉลี่ยของ M106H อิมเพรกเนตเรซินคือ 4200 ชั่วโมง ในขณะที่ M106D อิมเพรกเนตอินติมอนีเฉลี่ย 13800 ชั่วโมง — อายุการใช้งานเพิ่มขึ้น 3.3 เท่า

### 2.3 การเลือกวัสดุประกบ

สำหรับกากน้ำมันอุณหภูมิสูง จับคู่คาร์บอนกราไฟต์กับซิลิคอนคาร์ไบด์ (SiC) ค่าการนำความร้อน SiC ถึง 120-150 W/(m·K) สามเท่าของฮาร์ดอัลลอย นำความร้อนจากการเสียดสีผิวหน้าออกอย่างรวดเร็ว หลีกเลี่ยงอะลูมินาเซรามิก (ค่าการนำความร้อนเพียง 30 W/(m·K)) ซึ่งมีแนวโน้มแตกร้าวจากความเครียดความร้อนที่อุณหภูมิสูง

## 3. จุดการออกแบบโครงสร้าง

### 3.1 ค่าสัมประสิทธิ์โหลดสมดุล

การใช้งานอุณหภูมิสูงต้องใช้โครงสร้างแบบสมดุล ค่าสัมประสิทธิ์โหลด B ที่ 0.7-0.8 แบบไม่สมดุล (B≥1) สร้างความดันจำเพาะผิวหน้าที่มากเกินไปในกากน้ำมัน 350℃ บีบให้ฟิล์มที่บางลงที่อุณหภูมิสูงแตกออก ทำให้เกิดแรงเสียดสีแห้ง

### 3.2 ท่อระฆังโลหะแทนสปริง

สำหรับปั๊มน้ำมันอุณหภูมิสูง ท่อระฆังโลหะ Inconel 718 แนะนำให้ใช้แทนสปริงเกลียวทรงกระบอกทั่วไป ท่อระฆังทำหน้าที่ทั้งเป็นองค์ประกอบยืดหยุ่นและซีลเสริม ตัด O-ring ออก (O-ring FKM ที่ 350℃ อยู่ได้เพียง 2000-3000 ชั่วโมง) และทนความร้อนโดยรวมเหนือ 400℃

## 4. แผนล้าง: API 682 Plan 23

### 4.1 Plan 23 การหมุนเวียนล้างด้วยการระบายความร้อน

Plan 23 เป็นโซลูชันที่ต้องการสำหรับปั๊มน้ำมันอุณหภูมิสูง: ตัวกลางดึงจากห้องซีลผ่านตัวแลกเปลี่ยนความร้อนระบายให้ต่ำกว่า 200℃ แล้วกลับสู่ห้องซีล เป็นวงจรปิด ปริมาณน้ำหล่อเย็นประมาณ 0.5-1.0 m³/h ลดอุณหภูมิห้องจาก 350℃ ลงเหลือ 180-200℃ กำจัดความเสี่ยงการระเหยโดยพื้นฐาน

### 4.2 ผสม Plan 21+23

สำหรับกากน้ำมันสุญญากาศที่มีอนุภาคมาก Plan 21 (น้ำมันขี้ผึ้งสะอาดจากทางออกปั๊ม ผ่านแผ่นเจาะลดความดัน ฉีดเข้าห้องซีล) สามารถขนานกับ Plan 23 — แผนล้างคู่ที่ทำหน้าที่ทั้งระบายความร้อนและบล็อกอนุภาค

## 5. กรณีศึกษา Huahao Sealing

ปั๊มก้นหอหอกลั่นภายใต้ความดันปกติ-สุญญากาศ 8 ล้านตัน/ปี ของ Sinopec (อัตราการไหล 450 m³/h อุณหภูมิ 365℃ ตัวกลางมีผงโค้ก) เดิมใช้ซีลกลไกแบรนด์นำเข้าอายุการใช้งานเฉลี่ย 4000 ชั่วโมง ปีละ 3 ครั้งที่หยุดเครื่องเนื่องจากการรั่วซึม หลังเปลี่ยนเป็นโซลูชัน M106D + SiC + ท่อระฆัง Inconel + Plan 23 ของ Huahao Sealing ในปี 2019 อายุการใช้งานเฉลี่ยถึง 14000 ชั่วโมง ในระยะเวลา 4 ปีสะสม 56000 ชั่วโมง มีการเปลี่ยนเพียง 4 ชุดซีล ประหยัดค่าอะไหล่ประมาณ 800000 CNY

การเลือกต้องพิจารณาปัจจัยสามประการ: การไล่เฉดอุณหภูมิของตัวกลาง ปริมาณอนุภาค และความถี่ในการเริ่ม-หยุด การผันความร้อนมากให้ใช้ท่อระฆัง; อนุภาคมากให้ใช้ Plan 21+23; เริ่ม-หยุดบ่อยควรลดความดันจำเพาะผิวหน้าลงเหลือ 0.3-0.4 MPa`,
    },
  },
  {
    slug: "fertilizer-ammonia-pump-graphite-seal",
    title: {
      zh: "化肥工业合成氨泵碳石墨密封选型：NH₃ 介质腐蚀与高压工况应对",
      en: "Carbon Graphite Seal Selection for Ammonia Pumps in Fertilizer Industry: Handling NH₃ Corrosion and High-Pressure Service",
      vi: "Chọn vòng đệm than chì carbon cho bơm amoniac trong công nghiệp phân bón: Xử lý ăn mòn NH₃ và điều kiện áp suất cao",
      th: "การเลือกซีลคาร์บอนกราไฟต์สำหรับปั๊มแอมโมเนียในอุตสาหกรรมปุ๋ย: การจัดการการกัดกร่อน NH₃ และสภาวะความดันสูง",
    },
    excerpt: {
      zh: "针对合成氨装置高压甲铵泵、液氨泵的 NH₃ 介质强腐蚀与 15-25 MPa 高压工况，本文讲解碳石墨密封的材料选型（呋喃树脂浸渍石墨）、结构设计（多端面串联）、辅助系统（隔膜泵隔离液）与典型失效案例。",
      en: "For the strong NH₃ corrosion and 15-25 MPa high-pressure service of high-pressure carbamate pumps and liquid ammonia pumps in ammonia synthesis units, this article covers carbon graphite seal material selection (furan resin-impregnated graphite), structural design (tandem multi-face), auxiliary systems (diaphragm pump barrier fluid), and typical failure cases.",
      vi: "Dành cho điều kiện ăn mòn mạnh NH₃ và áp suất cao 15-25 MPa của bơm carbamate áp suất cao và bơm amoniac lỏng trong thiết bị tổng hợp amoniac, bài viết trình bày chọn vật liệu vòng đệm than chì carbon (than chì tẩm nhựa furan), thiết kế kết cấu (nhiều bề mặt nối tiếp), hệ thống phụ trợ và case hỏng điển hình.",
      th: "สำหรับการกัดกร่อน NH₃ ที่รุนแรงและสภาวะความดันสูง 15-25 MPa ของปั๊มคาร์บาเมตความดันสูงและปั๊มแอมโมเนียเหลวในหน่วยสังเคราะห์แอมโมเนีย บทความนี้ครอบคลุมการเลือกวัสดุซีลคาร์บอนกราไฟต์ (กราไฟต์อิมเพรกเนตเรซินฟูแรน) การออกแบบโครงสร้าง ระบบเสริม และกรณีการเสียหายทั่วไป",
    },
    tag: "application",
    date: "2026-07-02",
    content: {
      zh: `## 核心要点

- 合成氨装置的甲铵泵和液氨泵工况苛刻：NH₃ + CO₂ + H₂O 形成 Carbaugh 液，pH 值 10-11，对铜合金、氟橡胶有强腐蚀
- 碳石墨密封首选呋喃树脂浸渍石墨（耐 NH₃ 腐蚀），避免使用含铜的巴氏合金浸渍石墨
- 高压工况（15-25 MPa）需采用串联式双端面机械密封，配合隔离液压力高于介质 0.2-0.3 MPa
- 隔离液选用 ISO VG 46 抗磨液压油，配合隔膜泵稳压补液，杜绝 NH₃ 泄漏至大气
- 华豪密封在某化肥厂 30 万吨/年合成氨装置改造中，将甲铵泵密封寿命从 2000 小时延长至 8000 小时

合成氨装置中的高压甲铵泵和液氨泵输送含氨（NH₃）、二氧化碳（CO₂）和水的介质，形成强腐蚀性 Carbaugh 液（甲铵液）。本文结合霍邱县华豪密封件有限公司在云天化、心连心等化肥企业的服务经验，介绍 NH₃ 介质工况下碳石墨密封选型要点。

## 一、工况特性

甲铵泵输送氨基甲酸铵水溶液，温度 70-90℃，压力 15-25 MPa，pH 10-11，对铜合金和氟橡胶强烈腐蚀。液氨泵输送 -33℃ 至 +40℃ 液氨，压力 1.5-3.0 MPa，液氨粘度仅 0.25 mPa·s（水的 1/4），端面液膜极易破坏。

失效统计：浸渍剂腐蚀流失（38%）、O 型圈溶胀（25%）、弹簧腐蚀疲劳（18%）、端面热裂（12%）。前三种均与材料选型直接相关。

## 二、材料选型

### 2.1 呋喃树脂浸渍石墨

NH₃ 介质首选呋喃树脂浸渍石墨 M106K，耐碱性优异，在 pH 10-11 甲铵液中长期稳定，耐温 200℃。对比试验：呋喃浸渍石墨在 80℃ 甲铵液中浸泡 1000 小时，气孔率仅从 1.8% 升至 2.1%；酚醛浸渍石墨升至 4.5%，已不满足密封要求。

### 2.2 禁用材料

避免使用锑金属浸渍石墨（锑在 NH₃ 中络合溶解，3 个月流失 40%）和含铜巴氏合金浸渍石墨（铜在氨液中快速腐蚀）。

### 2.3 配对材料

推荐整体碳化硅（SSiC），耐腐蚀优于反应烧结 SiC，导热系数 120 W/(m·K)。避免硬质合金（含钴粘结剂，钴在氨液中选择性腐蚀）。

## 三、串联双端面结构

甲铵泵高压工况采用串联式双端面机械密封：内侧密封承受介质压力，外侧密封承受隔离液压力。即使内侧失效，外侧仍能阻挡 NH₃ 泄漏至大气。

隔离液压力高于介质 0.2-0.3 MPa，确保介质侧端面逆向压差。隔离液用 ISO VG 46 抗磨液压油，配合隔膜泵稳压补液，压力波动 ±0.05 MPa 以内。

O 型圈必须用 Aflas 或 Kalrez，耐 NH₃ 优于 FKM。FKM 在液氨中 500 小时溶胀 15%，Aflas 1000 小时溶胀小于 2%。

## 四、液氨泵低温补充

液氨泵推荐 AM350 半硬化不锈钢波纹管，避免 Inconel 718（低温弹性模量下降）。波纹管无需 O 型圈，避免低温脆化。端面比压降至 0.3-0.4 MPa（常规 0.5-0.6 MPa），防止低粘度液氨液膜挤出。

## 五、华豪密封案例

某化肥厂 30 万吨/年合成氨装置甲铵泵（流量 12 m³/h，压力 22 MPa，温度 85℃），原用进口品牌密封平均寿命 2000 小时。2020 年改用华豪密封 M106K + SSiC + Aflas + 串联双端面 + 隔膜泵隔离液方案后，平均寿命延长至 8000 小时，3 年节约备件费用约 45 万元，消除 NH₃ 泄漏隐患。

选型三要素：介质 pH 决定浸渍剂（碱性选呋喃）、压力等级决定结构（高压选串联双端面）、温度区间决定辅助密封（低温选 Aflas/波纹管）。`,
      en: `## Key Takeaways

- Ammonia synthesis unit carbamate pumps and liquid ammonia pumps face harsh service: NH₃ + CO₂ + H₂O forms Carbaugh liquid with pH 10-11, strongly corrosive to copper alloys and fluororubber
- Carbon graphite seals should use furan resin-impregnated graphite (NH₃-corrosion resistant); avoid Babbitt metal-impregnated graphite containing copper
- High-pressure service (15-25 MPa) requires tandem double mechanical seals with barrier fluid pressure 0.2-0.3 MPa above media
- Barrier fluid uses ISO VG 46 anti-wear hydraulic oil, with diaphragm pump pressure-stabilized make-up to prevent NH₃ atmospheric leakage
- Huahao Sealing extended carbamate pump seal life from 2000 to 8000 hours in a 300000 ton/year ammonia synthesis plant revamp

Carbamate pumps and liquid ammonia pumps in ammonia synthesis units convey media containing ammonia (NH₃), carbon dioxide (CO₂), and water, forming highly corrosive Carbaugh liquid (ammonium carbamate solution). Drawing on Huahao Sealing's service experience at Yuntianhua and Xinlianxin fertilizer plants, this article introduces carbon graphite seal selection for NH₃ media service.

## 1. Service Characteristics

Carbamate pumps convey ammonium carbamate aqueous solution at 70-90℃, 15-25 MPa, pH 10-11, strongly corroding copper alloys and fluororubber. Liquid ammonia pumps convey -33℃ to +40℃ liquid ammonia at 1.5-3.0 MPa; liquid ammonia viscosity is only 0.25 mPa·s (one-quarter of water), making face film extremely easy to disrupt.

Failure statistics: impregnant corrosion loss (38%), O-ring swelling (25%), spring corrosion fatigue (18%), face thermal cracking (12%). The first three are directly related to material selection.

## 2. Material Selection

### 2.1 Furan Resin-Impregnated Graphite

For NH₃ media, furan resin-impregnated graphite M106K is preferred, with excellent alkali resistance, stable long-term in pH 10-11 carbamate solution, temperature rating 200℃. Comparative tests: furan-impregnated graphite immersed in 80℃ carbamate solution for 1000 hours sees porosity rise only from 1.8% to 2.1%; phenolic-impregnated graphite rises to 4.5%, no longer meeting seal requirements.

### 2.2 Prohibited Materials

Avoid antimony metal-impregnated graphite (antimony undergoes complexation dissolution in NH₃, losing 40% in 3 months) and Babbitt metal-impregnated graphite containing copper (copper corrodes rapidly in ammonia).

### 2.3 Mating Material

Sintered silicon carbide (SSiC) is recommended, with better corrosion resistance than reaction-bonded SiC and thermal conductivity 120 W/(m·K). Avoid hard metal (cobalt binder undergoes selective corrosion in ammonia).

## 3. Tandem Double Seal Structure

Carbamate pump high-pressure service uses tandem double mechanical seals: the inner seal bears media pressure, the outer seal bears barrier fluid pressure. Even if the inner seal fails, the outer seal still blocks NH₃ atmospheric leakage.

Barrier fluid pressure exceeds media by 0.2-0.3 MPa, ensuring media-side face reverse pressure differential. Barrier fluid uses ISO VG 46 anti-wear hydraulic oil, with diaphragm pump pressure-stabilized make-up, pressure fluctuation within ±0.05 MPa.

O-rings must use Aflas or Kalrez, with better NH₃ resistance than FKM. FKM swells 15% in liquid ammonia within 500 hours; Aflas swells less than 2% in 1000 hours.

## 4. Liquid Ammonia Pump Cryogenic Supplement

Liquid ammonia pumps recommend AM350 semi-hardened stainless steel bellows, avoiding Inconel 718 (low-temperature elastic modulus drop). Bellows require no O-rings, avoiding low-temperature embrittlement. Face specific pressure drops to 0.3-0.4 MPa (standard 0.5-0.6 MPa), preventing low-viscosity liquid ammonia film extrusion.

## 5. Huahao Sealing Case Study

A fertilizer plant 300000 ton/year ammonia synthesis unit carbamate pump (flow 12 m³/h, pressure 22 MPa, temperature 85℃) originally used an imported brand seal averaging 2000 hours life. After switching to Huahao Sealing's M106K + SSiC + Aflas + tandem double seal + diaphragm pump barrier fluid solution in 2020, average life extended to 8000 hours, saving about 450000 CNY in spare parts over 3 years while eliminating NH₃ leakage hazards.

Three selection factors: media pH determines impregnant (alkaline uses furan), pressure rating determines structure (high-pressure uses tandem double seal), temperature range determines auxiliary seal (cryogenic uses Aflas/bellows).`,
      vi: `## Điểm chính

- Bơm carbamate và bơm amoniac lỏng trong thiết bị tổng hợp amoniac làm việc khắc nghiệt: NH₃ + CO₂ + H₂O tạo thành dung dịch Carbaugh pH 10-11, ăn mòn mạnh hợp kim đồng và cao su fluor
- Vòng đệm than chì carbon nên dùng than chì tẩm nhựa furan (chống ăn mòn NH₃); tránh than chì tẩm hợp kim Babbitt chứa đồng
- Điều kiện áp suất cao (15-25 MPa) cần kín cơ khí kép nối tiếp, áp suất chất cách ly cao hơn môi chất 0.2-0.3 MPa
- Chất cách ly dùng dầu thủy lực chịu mài mòn ISO VG 46, kết hợp bơm màng ổn áp bù để ngăn rò rỉ NH₃ ra khí quyển
- Huahao Sealing đã kéo dài tuổi thọ kín bơm carbamate từ 2000 lên 8000 giờ trong dự án cải tạo thiết bị tổng hợp amoniac 300000 tấn/năm

Bơm carbamate và bơm amoniac lỏng trong thiết bị tổng hợp amoniac vận chuyển môi chất chứa amoniac (NH₃), carbon dioxide (CO₂) và nước, tạo thành dung dịch Carbaugh (dung dịch carbamate amonium) ăn mòn mạnh. Dựa trên kinh nghiệm phục vụ của Huahao Sealing tại các nhà máy phân bón Yuntianhua và Xinlianxin, bài viết giới thiệu chọn vòng đệm than chì carbon cho môi chất NH₃.

## 1. Đặc tính điều kiện

Bơm carbamate vận chuyển dung dịch nước carbamate amonium, nhiệt độ 70-90℃, áp suất 15-25 MPa, pH 10-11, ăn mòn mạnh hợp kim đồng và cao su fluor. Bơm amoniac lỏng vận chuyển amoniac lỏng -33℃ đến +40℃, áp suất 1.5-3.0 MPa; độ nhớt amoniac lỏng chỉ 0.25 mPa·s (1/4 nước), màng dung dịch bề mặt dễ phá vỡ.

Thống kê hỏng hóc: chất tẩm bị ăn mòn mất (38%), O-ring trương nở (25%), lò xo ăn mòn mỏi (18%), nứt nhiệt bề mặt (12%). Ba loại đầu liên quan trực tiếp đến chọn vật liệu.

## 2. Chọn vật liệu

### 2.1 Than chì tẩm nhựa furan

Cho môi chất NH₃, than chì tẩm nhựa furan M106K được ưu tiên, tính kiềm ưu việt, ổn định dài hạn trong dung dịch carbamate pH 10-11, chịu nhiệt 200℃. Thử nghiệm so sánh: than chì tẩm furan ngâm trong dung dịch carbamate 80℃ 1000 giờ, độ rỗng chỉ tăng từ 1.8% lên 2.1%; than chì tẩm phenolic tăng lên 4.5%, không còn đáp ứng yêu cầu kín.

### 2.2 Vật liệu cấm

Tránh than chì tẩm kim loại antimon (antimon bị hòa tan phức hợp trong NH₃, mất 40% trong 3 tháng) và than chì tẩm hợp kim Babbitt chứa đồng (đồng bị ăn mòn nhanh trong amoniac).

### 2.3 Vật liệu ma đối

Khuyến nghị silicon carbide thiêu kết (SSiC), chống ăn mòn tốt hơn silicon carbide thiêu kết phản ứng, hệ số dẫn nhiệt 120 W/(m·K). Tránh hợp kim cứng (chất kết dính coban bị ăn mòn chọn lọc trong amoniac).

## 3. Kết cấu kín kép nối tiếp

Bơm carbamate áp suất cao dùng kín cơ khí kép nối tiếp: kín trong chịu áp suất môi chất, kín ngoài chịu áp suất chất cách ly. Ngay cả khi kín trong hỏng, kín ngoài vẫn chặn NH₃ rò rỉ ra khí quyển.

Áp suất chất cách ly cao hơn môi chất 0.2-0.3 MPa, đảm bảo bề mặt phía môi chất có chênh áp ngược. Chất cách ly dùng dầu thủy lực chịu mài mòn ISO VG 46, kết hợp bơm màng ổn áp bù, dao động áp suất trong ±0.05 MPa.

O-ring phải dùng Aflas hoặc Kalrez, chống NH₃ tốt hơn FKM. FKM trương nở 15% trong amoniac lỏng sau 500 giờ; Aflas trương nở dưới 2% sau 1000 giờ.

## 4. Bổ sung điều kiện nhiệt độ thấp bơm amoniac lỏng

Bơm amoniac lỏng khuyến nghị ống bích thép không gỉ AM350 bán cứng, tránh Inconel 718 (mô-đun đàn hồi giảm ở nhiệt độ thấp). Ống bích không cần O-ring, tránh giòn nhiệt độ thấp. Áp suất riêng bề mặt giảm xuống 0.3-0.4 MPa (bình thường 0.5-0.6 MPa), ngăn màng amoniac lỏng độ nhớt thấp bị ép挤出.

## 5. Case study Huahao Sealing

Bơm carbamate thiết bị tổng hợp amoniac 300000 tấn/năm của nhà máy phân bón (lưu lượng 12 m³/h, áp suất 22 MPa, nhiệt độ 85℃), ban đầu dùng kín thương hiệu nhập khẩu tuổi thọ trung bình 2000 giờ. Năm 2020 chuyển sang giải pháp M106K + SSiC + Aflas + kín kép nối tiếp + bơm màng chất cách ly của Huahao Sealing, tuổi thọ trung bình kéo dài đến 8000 giờ, tiết kiệm chi phí phụ tùng khoảng 450000 CNY trong 3 năm, loại bỏ rủi ro rò rỉ NH₃.

Ba yếu tố chọn: pH môi chất quyết định chất tẩm (kiềm chọn furan), cấp áp suất quyết định kết cấu (áp suất cao chọn kín kép nối tiếp), khoảng nhiệt độ quyết định kín phụ (nhiệt độ thấp chọn Aflas/ống bích).`,
      th: `## ประเด็นสำคัญ

- ปั๊มคาร์บาเมตและปั๊มแอมโมเนียเหลวในหน่วยสังเคราะห์แอมโมเนียทำงานในสภาวะที่รุนแรง: NH₃ + CO₂ + H₂O เป็นของเหลว Carbaugh pH 10-11 กัดกร่อนโลหะผสมทองแดงและยางฟลูออร์อย่างรุนแรง
- ซีลคาร์บอนกราไฟต์ควรใช้กราไฟต์อิมเพรกเนตเรซินฟูแรน (ต้านการกัดกร่อน NH₃); หลีกเลี่ยงกราไฟต์อิมเพรกเนตโลหะบาบบิทที่มีทองแดง
- สภาวะความดันสูง (15-25 MPa) ต้องใช้ซีลกลไกคู่แบบอันต่อเนื่อง ความดันของเหลวกั้นสูงกว่าตัวกลาง 0.2-0.3 MPa
- ของเหลวกั้นใช้น้ำมันไฮดรอลิกทนการสึกหรอ ISO VG 46 ร่วมกับปั๊มไดอะแฟรมรักษาความดันคงที่เติม เพื่อป้องกัน NH₃ รั่วสู่บรรยากาศ
- Huahao Sealing ได้ยืดอายุซีลปั๊มคาร์บาเมตจาก 2000 เป็น 8000 ชั่วโมงในโครงการปรับปรุงหน่วยสังเคราะห์แอมโมเนีย 300000 ตัน/ปี

ปั๊มคาร์บาเมตและปั๊มแอมโมเนียเหลวในหน่วยสังเคราะห์แอมโมเนียขนส่งตัวกลางที่มีแอมโมเนีย (NH₃) คาร์บอนไดออกไซด์ (CO₂) และน้ำ ก่อตัวเป็นของเหลว Carbaugh (สารละลายแอมโมเนียมคาร์บาเมต) ที่กัดกร่อนสูง อ้างอิงจากประสบการณ์ให้บริการของ Huahao Sealing ที่โรงปุ๋ย Yuntianhua และ Xinlianxin บทความนี้แนะนำการเลือกซีลคาร์บอนกราไฟต์สำหรับตัวกลาง NH₃

## 1. ลักษณะสภาวะการทำงาน

ปั๊มคาร์บาเมตขนส่งสารละลายแอมโมเนียมคาร์บาเมตที่ 70-90℃, 15-25 MPa, pH 10-11 กัดกร่อนโลหะผสมทองแดงและยางฟลูออร์อย่างรุนแรง ปั๊มแอมโมเนียเหลวขนส่งแอมโมเนียเหลว -33℃ ถึง +40℃ ที่ 1.5-3.0 MPa; ความหนืดของแอมโมเนียเหลวเพียง 0.25 mPa·s (หนึ่งในสี่ของน้ำ) ทำให้ฟิล์มของเหลวที่ผิวหน้าง่ายต่อการถูกทำลาย

สถิติความเสียหาย: การสูญเสียสารอิมเพรกเนตจากการกัดกร่อน (38%) การบวมของ O-ring (25%) การยึดติดจากความเหนื่อยล้าจากการกัดกร่อนของสปริง (18%) การแตกร้าวจากความร้อนที่ผิวหน้า (12%) สามประเภทแรกเกี่ยวข้องโดยตรงกับการเลือกวัสดุ

## 2. การเลือกวัสดุ

### 2.1 กราไฟต์อิมเพรกเนตเรซินฟูแรน

สำหรับตัวกลาง NH₃ กราไฟต์อิมเพรกเนตเรซินฟูแรน M106K เป็นที่ต้องการ มีความต้านทานด่างที่ยอดเยี่ยม คงที่ในระยะยาวในสารละลายคาร์บาเมต pH 10-11 ทนอุณหภูมิ 200℃ การทดสอบเปรียบเทียบ: กราไฟต์อิมเพรกเนตฟูแรนจุ่มในสารละลายคาร์บาเมต 80℃ 1000 ชั่วโมง พอรอสิตี้เพิ่มจาก 1.8% เป็น 2.1% เท่านั้น; กราไฟต์อิมเพรกเนตฟีนอลิกเพิ่มเป็น 4.5% ไม่ตอบสนองความต้องการซีล

### 2.2 วัสดุต้องห้าม

หลีกเลี่ยงกราไฟต์อิมเพรกเนตอินติมอนี (อินติมอนีสลายตัวเชิงซ้อนใน NH₃ สูญเสีย 40% ใน 3 เดือน) และกราไฟต์อิมเพรกเนตโลหะบาบบิทที่มีทองแดง (ทองแดงกัดกร่อนอย่างรวดเร็วในแอมโมเนีย)

### 2.3 วัสดุประกบ

แนะนำซิลิคอนคาร์ไบด์เซนเตอร์ (SSiC) ทนการกัดกร่อนดีกว่าซิลิคอนคาร์ไบด์เชื่อมปฏิกิริยา ค่าการนำความร้อน 120 W/(m·K) หลีกเลี่ยงฮาร์ดโลหะ (สารยึดโคบอลต์ถูกกัดกร่อนเลือกในแอมโมเนีย)

## 3. โครงสร้างซีลคู่แบบอันต่อเนื่อง

ปั๊มคาร์บาเมตความดันสูงใช้ซีลกลไกคู่แบบอันต่อเนื่อง: ซีลด้านในรับความดันตัวกลาง ซีลด้านนอกรับความดันของเหลวกั้น แม้ซีลด้านในเสีย ซีลด้านนอกยังบล็อก NH₃ รั่วสู่บรรยากาศ

ความดันของเหลวกั้นเกินตัวกลาง 0.2-0.3 MPa รับประกันผิวหน้าด้านตัวกลางมีเดลต้าความดันย้อนกลับ ของเหลวกั้นใช้น้ำมันไฮดรอลิกทนการสึกหรอ ISO VG 46 ร่วมกับปั๊มไดอะแฟรมรักษาความดันคงที่เติม ความผันแปรความดันภายใน ±0.05 MPa

O-ring ต้องใช้ Aflas หรือ Kalrez ทน NH₃ ที่ดีกว่า FKM FKM บวม 15% ในแอมโมเนียเหลวภายใน 500 ชั่วโมง; Aflas บวมน้อยกว่า 2% ใน 1000 ชั่วโมง

## 4. ส่วนเสริมสภาวะอุณหภูมิต่ำปั๊มแอมโมเนียเหลว

ปั๊มแอมโมเนียเหลวแนะนำท่อระฆังเหล็กกล้าไร้สนิม AM350 กึ่งแข็ง หลีกเลี่ยง Inconel 718 (โมดูลัสความยืดหยุ่นลดลงที่อุณหภูมิต่ำ) ท่อระฆังไม่ต้องการ O-ring หลีกเลี่ยงความเปราะที่อุณหภูมิต่ำ ความดันจำเพาะผิวหน้าลดเหลือ 0.3-0.4 MPa (มาตรฐาน 0.5-0.6 MPa) ป้องกันฟิล์มแอมโมเนียเหลวความหนืดต่ำถูกบีบอัด

## 5. กรณีศึกษา Huahao Sealing

ปั๊มคาร์บาเมตหน่วยสังเคราะห์แอมโมเนีย 300000 ตัน/ปี ของโรงปุ๋ย (อัตราการไหล 12 m³/h ความดัน 22 MPa อุณหภูมิ 85℃) เดิมใช้ซีลแบรนด์นำเข้าอายุการใช้งานเฉลี่ย 2000 ชั่วโมง ปี 2020 เปลี่ยนเป็นโซลูชัน M106K + SSiC + Aflas + ซีลคู่แบบอันต่อเนื่อง + ปั๊มไดอะแฟรมของเหลวกั้นของ Huahao Sealing อายุการใช้งานเฉลี่ยยืดเป็น 8000 ชั่วโมง ประหยัดค่าอะไหล่ประมาณ 450000 CNY ใน 3 ปี กำจัดความเสี่ยงการรั่วซึม NH₃

ปัจจัยการเลือกสามข้อ: pH ของตัวกลางกำหนดสารอิมเพรกเนต (ด่างเลือกฟูแรน) ระดับความดันกำหนดโครงสร้าง (ความดันสูงเลือกซีลคู่แบบอันต่อเนื่อง) ช่วงอุณหภูมิกำหนดซีลเสริม (อุณหภูมิต่ำเลือก Aflas/ท่อระฆัง)`,
    },
  },
  {
    slug: "paper-industry-drying-cylinder-seal",
    title: {
      zh: "造纸工业烘干辊碳石墨密封应用：蒸汽加热 150-200℃ 工况解决方案",
      en: "Carbon Graphite Seals for Drying Cylinders in Paper Industry: Solutions for 150-200℃ Steam Heating Service",
      vi: "Vòng đệm than chì carbon cho lô sấy trong công nghiệp giấy: Giải pháp cho điều kiện hơi nước sấy 150-200℃",
      th: "ซีลคาร์บอนกราไฟต์สำหรับลูกกลิ้งอบแห้งในอุตสาหกรรมกระดาษ: โซลูชันสำหรับสภาวะไอน้ำให้ความร้อน 150-200℃",
    },
    excerpt: {
      zh: "针对造纸机烘干辊蒸汽加热工况（150-200℃ 饱和蒸汽、含冷凝水锤击、纸浆黑液渗入），本文讲解碳石墨密封的材料选型（浸环氧树脂石墨）、结构设计（带波纹管的剖分式）、蒸汽阻隔系统与典型应用案例。",
      en: "For paper machine drying cylinder steam heating service (150-200℃ saturated steam, condensate water hammer, pulp black liquor infiltration), this article covers carbon graphite seal material selection (epoxy-impregnated graphite), structural design (split type with bellows), steam barrier system, and typical application cases.",
      vi: "Dành cho điều kiện sấy hơi nước của lô sấy máy giấy (hơi nước bão hòa 150-200℃, có búa nước ngưng, dung dịch đen giấy thấm vào), bài viết trình bày chọn vật liệu vòng đệm than chì carbon (than chì tẩm nhựa epoxy), thiết kế kết cấu (kiểu tách có ống bích), hệ thống ngăn hơi nước và case ứng dụng.",
      th: "สำหรับสภาวะไอน้ำให้ความร้อนของลูกกลิ้งอบแห้งเครื่องผลิตกระดาษ (ไอน้ำอิ่มตัว 150-200℃, มีค้อนน้ำควบแห้ง, น้ำดำเยื่อกระดาษซึมเข้า) บทความนี้ครอบคลุมการเลือกวัสดุซีลคาร์บอนกราไฟต์ (กราไฟต์อิมเพรกเนตเรซินอีพ็อกซี) การออกแบบโครงสร้าง (แบบแยกส่วนกับท่อระฆัง) ระบบกั้นไอน้ำ และกรณีศึกษา",
    },
    tag: "application",
    date: "2026-07-03",
    content: {
      zh: `## 核心要点

- 造纸机烘干辊通入 0.4-1.3 MPa 饱和蒸汽（150-200℃），冷凝水排放不畅会产生水锤冲击，使密封端面疲劳剥落
- 碳石墨密封首选环氧树脂浸渍石墨，耐蒸汽冲刷、耐黑液弱碱性腐蚀，耐温 200℃ 满足工况上限
- 剖分式结构允许在不拆卸烘干辊的情况下更换密封，单台造纸机 50+ 个烘干辊可大幅缩短停机时间
- 必须配置蒸汽阻隔系统（低压空气或蒸汽反吹），防止蒸汽窜入轴承箱造成润滑脂乳化失效
- 华豪密封在某 5 万吨/年特种纸生产线改造中，将烘干辊密封寿命从 4000 小时提升至 12000 小时

造纸机烘缸通过内部通入饱和蒸汽加热辊面使纸张水分蒸发。每台造纸机配置 50-80 个烘缸，每个烘缸两端都需要机械密封阻隔蒸汽泄漏。本文结合霍邱县华豪密封件有限公司在多家造纸企业的应用经验，介绍烘干辊碳石墨密封选型要点。

## 一、工况特性

烘缸通入 0.4-1.3 MPa 饱和蒸汽（150-200℃），蒸汽在缸内冷凝放热，冷凝水通过虹吸管排出。主要失效模式：石墨环蒸汽冲刷磨损（35%）、O 型圈热老化（22%）、弹簧蒸汽锈蚀卡阻（18%）、冷凝水水锤冲击破裂（15%）。水锤冲击最隐蔽——冷凝水积聚时蒸汽推动形成高速水柱冲击端面，瞬时压力 5-8 MPa，远超石墨抗压强度。

纸浆黑液（含 NaOH、Na₂S、木质素，pH 9-11）会沿轴颈渗入密封腔，干燥后在密封面结晶增加磨损。

## 二、材料选型

### 2.1 环氧树脂浸渍石墨

烘缸工况首选环氧树脂浸渍石墨 M106K。环氧浸渍后气孔率降至 1.5% 以下，耐 200℃ 蒸汽长期冲刷不分解。180℃ 蒸汽环境 5000 小时测试：环氧浸渍石墨气孔率从 1.4% 升至 1.7%；酚醛浸渍升至 3.2%，开始蒸汽渗透泄漏。

### 2.2 配对材料

推荐整体碳化硅（SSiC），硬度 HV 2500，远高于石墨 HV 80-120，确保石墨环作为软环优先磨损（设计预期行为，便于维护更换）。

## 三、剖分式结构设计

### 3.1 剖分式优势

剖分式机械密封将密封环沿轴向剖分为两半，可在不拆卸烘缸的情况下从轴颈侧面安装，单套更换时间从 4-6 小时缩短至 1-1.5 小时。

### 3.2 波纹管替代弹簧

烘缸工况潮湿，传统弹簧易锈蚀卡阻。推荐 AM350 不锈钢波纹管替代弹簧，无滑动部件，兼具辅助密封功能，无需 O 型圈。

### 3.3 端面比压控制

蒸汽工况介质压力低（0.4-1.3 MPa），端面比压取 0.4-0.5 MPa。过低会因蒸汽压力波动导致端面开启泄漏；过高加剧磨损。

## 四、蒸汽阻隔系统

密封外侧设置反吹腔，通入 0.05-0.1 MPa 低压空气或冷凝水回收的低压蒸汽，形成反向气流阻止蒸汽窜入轴承箱。若蒸汽窜入轴承箱，会使润滑脂乳化变白，粘度下降 60%，轴承寿命从 50000 小时缩短至 8000 小时。配置反吹系统后轴承箱湿度从 95% RH 降至 60% RH 以下。

## 五、华豪密封案例

某特种纸企业 5 万吨/年生产线（烘缸直径 1.5 m，蒸汽压力 1.0 MPa，温度 185℃，56 个烘缸），原用进口品牌剖分式密封平均寿命 4000 小时，每年因泄漏停机 6 次，单次损失约 8 万元。2021 年改用华豪密封 M106H + SSiC + AM350 波纹管 + 反吹系统方案后，平均寿命提升至 12000 小时，年停机次数降至 2 次，年节约停机损失约 32 万元，节约备件费用约 18 万元。

选型核心：蒸汽温度决定浸渍剂（200℃ 以内选环氧）、潮湿环境决定弹性元件（波纹管替代弹簧）、维护需求决定结构形式（多烘缸选剖分式）。`,
      en: `## Key Takeaways

- Paper machine drying cylinders use 0.4-1.3 MPa saturated steam (150-200℃); poor condensate discharge causes water hammer impact, leading to seal face fatigue spalling
- Carbon graphite seals should use epoxy resin-impregnated graphite, resistant to steam erosion and weak alkaline black liquor corrosion, with 200℃ temperature rating meeting service ceiling
- Split-type construction allows seal replacement without disassembling the drying cylinder; 50+ cylinders per paper machine dramatically reduce downtime
- A steam barrier system (low-pressure air or steam reverse purge) is essential to prevent steam from entering the bearing housing and emulsifying grease
- Huahao Sealing extended drying cylinder seal life from 4000 to 12000 hours in a 50000 ton/year specialty paper line revamp

Paper machine dryer cans heat the cylinder surface internally with saturated steam to evaporate moisture from paper. Each paper machine has 50-80 dryer cans, with each can requiring mechanical seals at both ends to block steam leakage. Based on Huahao Sealing's application experience at multiple paper mills, this article introduces carbon graphite seal selection for drying cylinders.

## 1. Service Characteristics

Dryer cans use 0.4-1.3 MPa saturated steam (150-200℃); steam condenses inside releasing heat, and condensate is discharged through siphon tubes. Main failure modes: graphite ring steam erosion wear (35%), O-ring thermal aging (22%), spring steam corrosion jamming (18%), condensate water hammer impact fracture (15%). Water hammer is most insidious — when condensate accumulates, steam pushes it into a high-velocity water column impacting the face, with instantaneous pressure reaching 5-8 MPa, far exceeding graphite compressive strength.

Pulp black liquor (containing NaOH, Na₂S, lignin, pH 9-11) seeps along the journal into the seal chamber, crystallizing on the face after drying to increase wear.

## 2. Material Selection

### 2.1 Epoxy Resin-Impregnated Graphite

For dryer can service, epoxy resin-impregnated graphite M106K is preferred. After epoxy impregnation, porosity drops below 1.5%, resisting 200℃ steam long-term erosion without decomposition. 5000-hour test in 180℃ steam: epoxy-impregnated graphite porosity rises from 1.4% to 1.7%; phenolic-impregnated rises to 3.2%, beginning steam permeation leakage.

### 2.2 Mating Material

Sintered silicon carbide (SSiC) is recommended, with hardness HV 2500, far above graphite HV 80-120, ensuring the graphite ring as the soft ring wears preferentially (expected design behavior facilitating maintenance).

## 3. Split-Type Structural Design

### 3.1 Split-Type Advantages

Split-type mechanical seals divide the seal ring axially into two halves, allowing installation from the journal side without disassembling the can. Single set replacement time drops from 4-6 hours to 1-1.5 hours.

### 3.2 Bellows Instead of Springs

Dryer can service is humid; conventional springs are prone to corrosion jamming. AM350 stainless steel bellows are recommended over springs — no sliding components, serving as both elastic element and auxiliary seal, eliminating O-rings.

### 3.3 Face Specific Pressure Control

Steam service has low media pressure (0.4-1.3 MPa); face specific pressure is set at 0.4-0.5 MPa. Too low causes face opening from steam pressure fluctuations; too high accelerates wear.

## 4. Steam Barrier System

A purge chamber outside the seal is fed with 0.05-0.1 MPa low-pressure air or low-pressure steam recovered from condensate, forming reverse airflow preventing steam from entering the bearing housing. If steam enters the bearing housing, it emulsifies grease white, reducing viscosity by 60% and shortening bearing life from 50000 to 8000 hours. With purge system, bearing housing humidity drops from 95% RH to below 60% RH.

## 5. Huahao Sealing Case Study

A specialty paper company's 50000 ton/year production line (dryer can diameter 1.5 m, steam pressure 1.0 MPa, temperature 185℃, 56 cans) originally used an imported brand split seal averaging 4000 hours life, with 6 leakage shutdowns per year, each costing about 80000 CNY. After switching to Huahao Sealing's M106H + SSiC + AM350 bellows + purge system solution in 2021, average life reached 12000 hours, annual shutdowns dropped to 2, saving about 320000 CNY in downtime losses and 180000 CNY in spare parts annually.

Selection core: steam temperature determines impregnant (within 200℃ choose epoxy), humid environment determines elastic element (bellows replace springs), maintenance needs determine structural form (multiple cans choose split type).`,
      vi: `## Điểm chính

- Lô sấy máy giấy dùng hơi nước bão hòa 0.4-1.3 MPa (150-200℃); xả nước ngưng kém gây búa nước, dẫn đến bong tróc mỏi bề mặt kín
- Vòng đệm than chì carbon nên dùng than chì tẩm nhựa epoxy, chống ăn mòn hơi nước và dung dịch đen kiềm yếu, chịu nhiệt 200℃ đáp ứng giới hạn điều kiện
- Kết cấu kiểu tách cho phép thay vòng đệm không cần tháo lô sấy; 50+ lô mỗi máy giảm đáng kể thời gian dừng máy
- Hệ thống ngăn hơi nước (khí áp suất thấp hoặc hơi nước phun ngược) là cần thiết để ngăn hơi nước vào hộp ổ bi và làm nhũ hóa mỡ
- Huahao Sealing đã kéo dài tuổi thọ kín lô sấy từ 4000 lên 12000 giờ trong dự án cải tạo dây chuyền giấy đặc biệt 50000 tấn/năm

Lô sấy máy giấy làm nóng bề mặt lô bên trong bằng hơi nước bão hòa để bốc hơi nước trong giấy. Mỗi máy giấy có 50-80 lô sấy, mỗi lô cần kín cơ khí ở cả hai đầu để ngăn rò rỉ hơi nước. Dựa trên kinh nghiệm ứng dụng của Huahao Sealing tại nhiều nhà máy giấy, bài viết giới thiệu chọn vòng đệm than chì carbon cho lô sấy.

## 1. Đặc tính điều kiện

Lô sấy dùng hơi nước bão hòa 0.4-1.3 MPa (150-200℃); hơi nước ngưng tụ trong lô giải phóng nhiệt, nước ngưng xả qua ống xiphon. Chế độ hỏng chính: mòn xói mòn hơi nước vòng than chì (35%), lão hóa nhiệt O-ring (22%), kẹt rỉ sét lò xo hơi nước (18%), nứt do búa nước ngưng (15%). Búa nước kín đáo nhất — khi nước ngưng tích tụ, hơi nước đẩy thành cột nước tốc độ cao va đập bề mặt, áp suất tức thời 5-8 MPa, vượt xa cường độ chịu nén than chì.

Dung dịch đen giấy bột (chứa NaOH, Na₂S, lignin, pH 9-11) thấm dọc cổ trục vào buồng kín, kết tinh trên bề mặt sau khi khô tăng mài mòn.

## 2. Chọn vật liệu

### 2.1 Than chì tẩm nhựa epoxy

Cho điều kiện lô sấy, than chì tẩm nhựa epoxy M106H được ưu tiên. Sau khi tẩm epoxy, độ rỗng giảm dưới 1.5%, chịu xói mòn hơi nước 200℃ dài hạn không phân hủy. Thử nghiệm 5000 giờ trong môi trường hơi nước 180℃: than chì tẩm epoxy độ rỗng tăng từ 1.4% lên 1.7%; than chì tẩm phenolic tăng lên 3.2%, bắt đầu rò rỉ thấm hơi nước.

### 2.2 Vật liệu ma đối

Khuyến nghị silicon carbide thiêu kết (SSiC), độ cứng HV 2500, cao hơn nhiều than chì HV 80-120, đảm bảo vòng than chì là vòng mềm mòn ưu tiên (hành vi dự kiến thiết kế, thuận tiện bảo trì).

## 3. Thiết kế kết cấu kiểu tách

### 3.1 Lợi ích kiểu tách

Kín cơ khí kiểu tách chia vòng kín theo trục thành hai nửa, cho phép lắp từ bên cổ trục không cần tháo lô. Thời gian thay một bộ giảm từ 4-6 giờ xuống 1-1.5 giờ.

### 3.2 Ống bích thay lò xo

Điều kiện lô sấy ẩm ướt; lò xo thông thường dễ rỉ sét kẹt. Khuyến nghị ống bích thép không gỉ AM350 thay lò xo — không có bộ phận trượt, vừa là phần tử đàn hồi vừa là kín phụ, không cần O-ring.

### 3.3 Kiểm soát áp suất riêng bề mặt

Điều kiện hơi nước có áp suất môi chất thấp (0.4-1.3 MPa); áp suất riêng bề mặt lấy 0.4-0.5 MPa. Quá thấp gây mở bề mặt do dao động áp suất hơi; quá cao tăng mài mòn.

## 4. Hệ thống ngăn hơi nước

Buồng phun ngược bên ngoài kín cấp khí áp suất thấp 0.05-0.1 MPa hoặc hơi nước áp suất thấp thu hồi từ nước ngưng, tạo dòng khí ngược ngăn hơi nước vào hộp ổ bi. Nếu hơi nước vào hộp ổ bi, sẽ làm nhũ hóa mỡ trắng, độ nhớt giảm 60%, tuổi thọ ổ bi từ 50000 giờ rút ngắn xuống 8000 giờ. Có hệ thống phun ngược, độ ẩm hộp ổ bi giảm từ 95% RH xuống dưới 60% RH.

## 5. Case study Huahao Sealing

Dây chuyền giấy đặc biệt 50000 tấn/năm (đường kính lô sấy 1.5 m, áp suất hơi 1.0 MPa, nhiệt độ 185℃, 56 lô), ban đầu dùng kín tách thương hiệu nhập khẩu tuổi thọ trung bình 4000 giờ, mỗi năm dừng máy do rò rỉ 6 lần, mỗi lần tổn thất khoảng 80000 CNY. Năm 2021 chuyển sang giải pháp M106H + SSiC + ống bích AM350 + hệ thống phun ngược của Huahao Sealing, tuổi thọ trung bình đạt 12000 giờ, số lần dừng máy hàng năm giảm xuống 2, tiết kiệm tổn thất dừng máy khoảng 320000 CNY và chi phí phụ tùng khoảng 180000 CNY mỗi năm.

Chọn lõi: nhiệt độ hơi nước quyết định chất tẩm (trong 200℃ chọn epoxy), môi trường ẩm quyết định phần tử đàn hồi (ống bích thay lò xo), nhu cầu bảo trì quyết định hình thức kết cấu (nhiều lô chọn kiểu tách).`,
      th: `## ประเด็นสำคัญ

- ลูกกลิ้งอบแห้งเครื่องผลิตกระดาษใช้ไอน้ำอิ่มตัว 0.4-1.3 MPa (150-200℃); การระบายควบแห้งไม่ดีก่อให้เกิดแรงกระแทกค้อนน้ำ นำไปสู่การหลุดลอกจากความเหนื่อยล้าของผิวหน้าซีล
- ซีลคาร์บอนกราไฟต์ควรใช้กราไฟต์อิมเพรกเนตเรซินอีพ็อกซี ทนการกัดเซาะไอน้ำและการกัดกร่อนด่างอ่อนของน้ำดำ ทนอุณหภูมิ 200℃ ตอบสนองเพดานสภาวะ
- โครงสร้างแบบแยกส่วนอนุญาตให้เปลี่ยนซีลโดยไม่ต้องถอดลูกกลิ้งอบแห้ง; 50+ ลูกกลิ้งต่อเครื่องลดเวลาหยุดทำงานอย่างมาก
- ระบบกั้นไอน้ำ (อากาศความดันต่ำหรือไอน้ำพ่นย้อน) เป็นสิ่งจำเป็นเพื่อป้องกันไอน้ำเข้าสู่กล่องลูกปืนและอิมัลซิไฟ้ยาจาระบี
- Huahao Sealing ได้ยืดอายุซีลลูกกลิ้งอบแห้งจาก 4000 เป็น 12000 ชั่วโมงในโครงการปรับปรุงสายการผลิตกระดาษพิเศษ 50000 ตัน/ปี

ลูกกลิ้งอบแห้งเครื่องผลิตกระดาษทำความร้อนพื้นผิวลูกกลิ้งภายในด้วยไอน้ำอิ่มตัวเพื่อระเหยความชื้นจากกระดาษ เครื่องผลิตกระดาษแต่ละเครื่องมี 50-80 ลูกกลิ้งอบแห้ง แต่ละลูกต้องการซีลกลไกที่ปลายทั้งสองเพื่อกั้นการรั่วซึมของไอน้ำ จากประสบการณ์การใช้งานของ Huahao Sealing ที่โรงกระดาษหลายแห่ง บทความนี้แนะนำการเลือกซีลคาร์บอนกราไฟต์สำหรับลูกกลิ้งอบแห้ง

## 1. ลักษณะสภาวะการทำงาน

ลูกกลิ้งอบแห้งใช้ไอน้ำอิ่มตัว 0.4-1.3 MPa (150-200℃); ไอน้ำควบแห้งภายในปล่อยความร้อน และน้ำควบแห้งถูกขับออกผ่านท่อไซฟอน รูปแบบความเสียหายหลัก: การสึกหรอจากการกัดเซาะไอน้ำของวงแหวนกราไฟต์ (35%) การเสื่อมสภาพจากความร้อนของ O-ring (22%) การยึดติดจากสนิมไอน้ำของสปริง (18%) การแตกร้าวจากแรงกระแทกค้อนน้ำควบแห้ง (15%) ค้อนน้ำซ่อนเร้นที่สุด — เมื่อน้ำควบแห้งสะสม ไอน้ำผลักเป็นเสาน้ำความเร็วสูงกระแทกผิวหน้า ความดันทันที 5-8 MPa เกินกว่าความต้านทานการอัดของกราไฟต์

น้ำดำเยื่อกระดาษ (มี NaOH, Na₂S, ลิกนิน, pH 9-11) ซึมตามคอลูกกลิ้งเข้าสู่ห้องซีล ตกผลึกบนผิวหน้าหลังแห้งเพิ่มการสึกหรอ

## 2. การเลือกวัสดุ

### 2.1 กราไฟต์อิมเพรกเนตเรซินอีพ็อกซี

สำหรับสภาวะลูกกลิ้งอบแห้ง กราไฟต์อิมเพรกเนตเรซินอีพ็อกซี M106H เป็นที่ต้องการ หลังอิมเพรกเนตอีพ็อกซี พอรอสิตี้ลดต่ำกว่า 1.5% ทนการกัดเซาะไอน้ำ 200℃ ระยะยาวโดยไม่สลาย ทดสอบ 5000 ชั่วโมงในสภาพไอน้ำ 180℃: กราไฟต์อิมเพรกเนตอีพ็อกซีพอรอสิตี้เพิ่มจาก 1.4% เป็น 1.7%; อิมเพรกเนตฟีนอลิกเพิ่มเป็น 3.2% เริ่มรั่วซึมไอน้ำ

### 2.2 วัสดุประกบ

แนะนำซิลิคอนคาร์ไบด์เซนเตอร์ (SSiC) ความแข็ง HV 2500 สูงกว่ากราไฟต์ HV 80-120 มาก รับประกันวงแหวนกราไฟต์เป็นวงแหวนอ่อนที่สึกหรอก่อน (พฤติกรรมที่คาดการณ์จากการออกแบบ สะดวกในการบำรุงรักษา)

## 3. การออกแบบโครงสร้างแบบแยกส่วน

### 3.1 ข้อดีของแบบแยกส่วน

ซีลกลไกแบบแยกส่วนแบ่งวงแหวนซีลตามแนวแกนเป็นสองครึ่ง อนุญาตให้ติดตั้งจากด้านข้างคอลูกกลิ้งโดยไม่ถอดลูกกลิ้ง เวลาเปลี่ยนชุดเดียวลดจาก 4-6 ชั่วโมงเป็น 1-1.5 ชั่วโมง

### 3.2 ท่อระฆังแทนสปริง

สภาวะลูกกลิ้งอบแห้งชื้น; สปริงทั่วไปมีแนวโน้มเกิดสนิมยึดติด ท่อระฆังเหล็กกล้าไร้สนิม AM350 แนะนำให้ใช้แทนสปริง — ไม่มีชิ้นส่วนเลื่อน ทำหน้าที่ทั้งเป็นองค์ประกอบยืดหยุ่นและซีลเสริม ตัด O-ring ออก

### 3.3 การควบคุมความดันจำเพาะผิวหน้า

สภาวะไอน้ำมีความดันตัวกลางต่ำ (0.4-1.3 MPa); ความดันจำเพาะผิวหน้าตั้งที่ 0.4-0.5 MPa ต่ำเกินไปทำให้ผิวหน้าเปิดจากการผันความดันไอน้ำ; สูงเกินไปเร่งการสึกหรอ

## 4. ระบบกั้นไอน้ำ

ห้องพ่นย้อนด้านนอกซีลป้อนอากาศความดันต่ำ 0.05-0.1 MPa หรือไอน้ำความดันต่ำที่กู้คืนจากน้ำควบแห้ง สร้างกระแสอากาศย้อนป้องกันไอน้ำเข้าสู่กล่องลูกปืน ถ้าไอน้ำเข้ากล่องลูกปืน จะอิมัลซิไฟ้ยาจาระบีสีขาว ความหนืดลด 60% อายุลูกปืนจาก 50000 ชั่วโมงลดเหลือ 8000 ชั่วโมง ด้วยระบบพ่นย้อน ความชื้นกล่องลูกปืนลดจาก 95% RH เป็นต่ำกว่า 60% RH

## 5. กรณีศึกษา Huahao Sealing

สายการผลิตกระดาษพิเศษ 50000 ตัน/ปี (เส้นผ่านศูนย์กลางลูกกลิ้งอบแห้ง 1.5 m ความดันไอน้ำ 1.0 MPa อุณหภูมิ 185℃ 56 ลูก) เดิมใช้ซีลแยกส่วนแบรนด์นำเข้าอายุการใช้งานเฉลี่ย 4000 ชั่วโมง ปีละ 6 ครั้งที่หยุดเครื่องเนื่องจากการรั่วซึม แต่ละครั้งสูญเสียประมาณ 80000 CNY ปี 2021 เปลี่ยนเป็นโซลูชัน M106H + SSiC + ท่อระฆัง AM350 + ระบบพ่นย้อนของ Huahao Sealing อายุการใช้งานเฉลี่ยถึง 12000 ชั่วโมง จำนวนครั้งหยุดเครื่องต่อปีลดเหลือ 2 ประหยัดความสูญเสียจากการหยุดทำงานประมาณ 320000 CNY และค่าอะไหล่ประมาณ 180000 CNY ต่อปี

หลักการเลือก: อุณหภูมิไอน้ำกำหนดสารอิมเพรกเนต (ภายใน 200℃ เลือกอีพ็อกซี) สภาพแวดล้อมชื้นกำหนดองค์ประกอบยืดหยุ่น (ท่อระฆังแทนสปริง) ความต้องการบำรุงรักษากำหนดรูปแบบโครงสร้าง (หลายลูกกลิ้งเลือกแบบแยกส่วน)`,
    },
  },
  {
    slug: "semiconductor-crystal-furnace-graphite",
    title: {
      zh: "半导体单晶炉碳石墨密封应用：硅单晶 1400℃ 高真空生长工艺",
      en: "Carbon Graphite Seals in Semiconductor Crystal Furnaces: 1400℃ High-Vacuum Silicon Crystal Growth Process",
      vi: "Vòng đệm than chì carbon trong lò tinh thể bán dẫn: Quá trình phát triển tinh thể silicon 1400℃ chân không cao",
      th: "ซีลคาร์บอนกราไฟต์ในเตาผลึกเซมิคอนดักเตอร์: กระบวนการเติบโตผลึกซิลิคอน 1400℃ สุญญากาศสูง",
    },
    excerpt: {
      zh: "针对直拉法（CZ）硅单晶炉 1400℃ 熔硅、10⁻⁵ Pa 高真空、Ar 保护气工况，本文讲解碳石墨密封在石英坩埚轴、籽晶轴、炉底法兰的应用，材料纯度要求（金属杂质 < 10 ppm）、结构设计（波纹管密封+水冷）、典型失效模式与华豪密封案例。",
      en: "For Czochralski (CZ) silicon crystal furnaces operating at 1400℃ molten silicon, 10⁻⁵ Pa high vacuum, and Ar protective atmosphere, this article covers carbon graphite seal applications at the quartz crucible shaft, seed crystal shaft, and furnace bottom flange — material purity requirements (metallic impurities < 10 ppm), structural design (bellows seal + water cooling), typical failure modes, and Huahao Sealing case studies.",
      vi: "Dành cho lò tinh thể silicon CZ (Czochralski) hoạt động ở 1400℃ silicon nóng chảy, chân không cao 10⁻⁵ Pa, khí bảo vệ Ar, bài viết trình bày ứng dụng vòng đệm than chì carbon tại trục nồi quartz, trục tinh thể hạt, mặt bích đáy lò — yêu cầu độ tinh khiết vật liệu (tạp chất kim loại < 10 ppm), thiết kế kết cấu (kín ống bích + làm mát nước), chế độ hỏng điển hình và case study Huahao Sealing.",
      th: "สำหรับเตาผลึกซิลิคอน CZ (Czochralski) ที่ทำงานที่ 1400℃ ซิลิคอนหลอมเหลว สุญญากาศสูง 10⁻⁵ Pa และบรรยากาศก๊าซ Ar บทความนี้ครอบคลุมการใช้งานซีลคาร์บอนกราไฟต์ที่เพลาหม้อเหล็กไพว์เซียม เพลาผลึกเมล็ด และแฟลงก้นเตา — ข้อกำหนดความบริสุทธิ์ (สิ่งเจือปนโลหะ < 10 ppm) การออกแบบโครงสร้าง (ซีลท่อระฆัง + ระบายน้ำเย็น) และกรณีศึกษา Huahao Sealing",
    },
    tag: "application",
    date: "2026-07-04",
    content: {
      zh: `## 核心要点

- 直拉法（CZ）硅单晶炉在 1400℃ 熔硅、10⁻⁵ Pa 高真空下工作，任何微量金属杂质都会污染硅单晶，导致电阻率偏差
- 碳石墨密封件用于石英坩埚轴、籽晶轴、炉底法兰三处，材料纯度要求金属杂质总量 < 10 ppm（铁、铜、镍各 < 1 ppm）
- 必须采用高纯等静压石墨（如 IG-43）经 2800℃ 卤素纯化处理，去除金属杂质
- 结构设计采用金属波纹管密封 + 水冷夹套，将密封件温度控制在 200℃ 以下，避免高温氧化
- 华豪密封在某 12 英寸硅单晶炉配套中，密封件使用寿命达 200 炉次以上，金属杂质析出满足 SEMI 标准

直拉法（Czochralski, CZ）是目前 300mm（12英寸）及以下硅单晶生长的主流工艺。CZ 单晶炉在 1400℃ 高温、10⁻⁵ Pa 高真空下工作，炉内任何部件若释放金属杂质，都会被 Ar 气流携带至熔硅表面污染单晶。碳石墨密封作为炉体动密封关键部件，其纯度直接决定硅单晶电阻率均匀性。

## 一、工况特性

CZ 单晶炉炉膛温度 1400-1420℃（熔硅熔点 1414℃），真空度 10⁻⁵ Pa，充 Ar 保护气维持微正压。石英坩埚轴和籽晶轴需做旋转和提拉运动，必须有动密封。密封件若释放铁、铜、镍等金属杂质，会进入熔硅形成复合中心，使硅单晶少数载流子寿命下降，电阻率偏离目标值。

## 二、材料纯度要求

### 2.1 高纯等静压石墨

必须使用高纯等静压石墨（如 IG-43），经过 2800℃ 卤素纯化处理（Cl₂+F₂ 混合气体），使金属杂质总量降至 10 ppm 以下，铁、铜、镍各低于 1 ppm。普通机械石墨（金属杂质 100-500 ppm）严禁使用。

### 2.2 纯度检测

每批材料需用 GDMS（辉光放电质谱）检测 30+ 种金属元素含量，符合 SEMI PV17 标准。华豪密封提供每批材料的 GDMS 检测报告。

## 三、结构设计

### 3.1 波纹管密封 + 水冷

石英坩埚轴和籽晶轴采用金属波纹管密封（Inconel 625 材质），波纹管外侧设水冷夹套，通入 0.3-0.5 MPa 冷却水，将密封件温度控制在 200℃ 以下。无水冷时密封件温度可达 600-800℃，石墨会氧化生成 CO₂，破坏真空度。

### 3.2 炉底法兰密封

炉底法兰采用 O 型圈 + 紧固件密封，O 型圈用氟橡胶 FKM（耐温 200℃，与水冷后法兰温度匹配）。每炉次开炉后更换 O 型圈，避免热老化累积泄漏。

## 四、失效模式

主要失效：石墨环氧化粉化（40%，因水冷失效导致高温氧化）、波纹管疲劳开裂（25%）、O 型圈热老化（20%）、金属杂质超标污染单晶（15%）。

## 五、华豪密封案例

某半导体材料公司 12 英寸硅单晶炉（坩埚直径 22 英寸，装料量 150 kg），原用进口品牌石墨密封件平均寿命 120 炉次，曾因铁杂质超标导致整批单晶电阻率偏离，损失约 50 万元。2022 年改用华豪密封 IG-43 高纯石墨 + Inconel 625 波纹管 + 水冷夹套方案后，使用寿命达 200 炉次以上，GDMS 检测金属杂质总量稳定在 5 ppm 以下，未再发生杂质污染事件。

选型核心：纯度等级决定材料牌号（选 IG-43 + 卤素纯化）、温度控制决定结构设计（波纹管 + 水冷）、密封可靠性决定工艺稳定性。`,
      en: `## Key Takeaways

- Czochralski (CZ) silicon crystal furnaces operate at 1400℃ molten silicon and 10⁻⁵ Pa high vacuum; any trace metallic impurities contaminate the silicon crystal, causing resistivity deviation
- Carbon graphite seals are used at the quartz crucible shaft, seed crystal shaft, and furnace bottom flange — material purity requires total metallic impurities < 10 ppm (iron, copper, nickel each < 1 ppm)
- High-purity isostatic graphite (e.g., IG-43) must be used, halogen-purified at 2800℃ to remove metallic impurities
- Structural design uses metal bellows seal + water cooling jacket, controlling seal temperature below 200℃ to avoid high-temperature oxidation
- Huahao Sealing achieved 200+ furnace cycles service life in a 12-inch silicon crystal furnace, with metallic impurity precipitation meeting SEMI standards

Czochralski (CZ) is the mainstream process for growing silicon crystals 300mm (12-inch) and below. CZ furnaces operate at 1400℃ high temperature and 10⁻⁵ Pa high vacuum; any component releasing metallic impurities will be carried by Ar flow to the molten silicon surface, contaminating the crystal. Carbon graphite seals as the furnace dynamic sealing key component directly determine silicon crystal resistivity uniformity.

## 1. Service Characteristics

CZ furnace chamber temperature 1400-1420℃ (molten silicon melting point 1414℃), vacuum 10⁻⁵ Pa, Ar protective gas maintaining slight positive pressure. The quartz crucible shaft and seed crystal shaft require rotational and pulling motion, requiring dynamic seals. If seals release iron, copper, nickel or other metallic impurities, they enter molten silicon forming recombination centers, reducing minority carrier lifetime and shifting resistivity from target.

## 2. Material Purity Requirements

### 2.1 High-Purity Isostatic Graphite

High-purity isostatic graphite (e.g., IG-43) must be used, halogen-purified at 2800℃ (Cl₂+F₂ mixed gas), reducing total metallic impurities below 10 ppm, with iron, copper, nickel each below 1 ppm. Conventional mechanical graphite (100-500 ppm metallic impurities) is strictly prohibited.

### 2.2 Purity Testing

Each batch requires GDMS (glow discharge mass spectrometry) testing of 30+ metallic elements, complying with SEMI PV17 standard. Huahao Sealing provides GDMS test reports for each batch.

## 3. Structural Design

### 3.1 Bellows Seal + Water Cooling

The quartz crucible shaft and seed crystal shaft use metal bellows seals (Inconel 625 material), with a water cooling jacket outside the bellows fed with 0.3-0.5 MPa cooling water, controlling seal temperature below 200℃. Without water cooling, seal temperature can reach 600-800℃, and graphite will oxidize to CO₂, destroying vacuum.

### 3.2 Furnace Bottom Flange Seal

The furnace bottom flange uses O-ring + fastener sealing; O-rings use fluororubber FKM (temperature rating 200℃, matching water-cooled flange temperature). O-rings are replaced after each furnace cycle to avoid thermal aging cumulative leakage.

## 4. Failure Modes

Main failures: graphite ring oxidation pulverization (40%, due to water cooling failure causing high-temperature oxidation), bellows fatigue cracking (25%), O-ring thermal aging (20%), metallic impurity exceeding standard contaminating crystal (15%).

## 5. Huahao Sealing Case Study

A semiconductor materials company's 12-inch silicon crystal furnace (crucible diameter 22 inches, charge weight 150 kg) originally used an imported brand graphite seal averaging 120 furnace cycles, once causing iron impurity to exceed standard and the entire crystal batch resistivity to deviate, losing about 500000 CNY. After switching to Huahao Sealing's IG-43 high-purity graphite + Inconel 625 bellows + water cooling jacket solution in 2022, service life reached 200+ furnace cycles, with GDMS-tested total metallic impurities stably below 5 ppm, and no further impurity contamination incidents.

Selection core: purity grade determines material grade (choose IG-43 + halogen purification), temperature control determines structural design (bellows + water cooling), seal reliability determines process stability.`,
      vi: `## Điểm chính

- Lò tinh thể silicon CZ (Czochralski) hoạt động ở 1400℃ silicon nóng chảy và chân không cao 10⁻⁵ Pa; bất kỳ tạp chất kim loại nào cũng làm ô nhiễm tinh thể silicon, gây sai lệch điện trở suất
- Vòng đệm than chì carbon được dùng tại trục nồi quartz, trục tinh thể hạt, mặt bích đáy lò — yêu cầu độ tinh khiết tạp chất kim loại tổng < 10 ppm (sắt, đồng, niken mỗi loại < 1 ppm)
- Phải dùng than chì đẳng tĩnh áp cao纯 (như IG-43), xử lý tinh hóa halogen ở 2800℃ để loại bỏ tạp chất kim loại
- Thiết kế kết cấu dùng kín ống bích kim loại + áo làm mát nước, kiểm soát nhiệt độ kín dưới 200℃ tránh ôxy hóa nhiệt độ cao
- Huahao Sealing đạt tuổi thọ 200+ chu kỳ lò trong lò tinh thể silicon 12 inch, tạp chất kim loại đạt tiêu chuẩn SEMI

Phương pháp CZ (Czochralski) là công nghệ主流 để phát triển tinh thể silicon 300mm (12 inch) trở xuống. Lò CZ hoạt động ở nhiệt độ cao 1400℃ và chân không cao 10⁻⁵ Pa; bất kỳ bộ phận nào giải phóng tạp chất kim loại sẽ được dòng khí Ar mang đến bề mặt silicon nóng chảy, ô nhiễm tinh thể. Vòng đệm than chì carbon là bộ phận kín động then chốt của lò, quyết định trực tiếp tính đồng nhất điện trở suất tinh thể silicon.

## 1. Đặc tính điều kiện

Nhiệt độ buồng lò CZ 1400-1420℃ (điểm nóng chảy silicon 1414℃), chân không 10⁻⁵ Pa, khí Ar bảo vệ duy trì áp dương nhẹ. Trục nồi quartz và trục tinh thể hạt cần chuyển động quay và kéo, phải có kín động. Nếu kín giải phóng sắt, đồng, niken hoặc tạp chất kim loại khác, sẽ vào silicon nóng chảy tạo tâm tái hợp, làm giảm tuổi thọ hạt tải thiểu số tinh thể silicon, điện trở suất lệch giá trị mục tiêu.

## 2. Yêu cầu độ tinh khiết vật liệu

### 2.1 Than chì đẳng tĩnh áp cao纯

Phải dùng than chì đẳng tĩnh áp cao纯 (như IG-43), xử lý tinh hóa halogen ở 2800℃ (khí hỗn hợp Cl₂+F₂), giảm tạp chất kim loại tổng xuống dưới 10 ppm, sắt, đồng, niken mỗi loại dưới 1 ppm. Than chì cơ khí thông thường (tạp chất kim loại 100-500 ppm) nghiêm cấm sử dụng.

### 2.2 Kiểm tra độ tinh khiết

Mỗi lô vật liệu cần kiểm tra 30+ nguyên tố kim loại bằng GDMS (quang phổ khối phóng điện phát sáng), tuân thủ tiêu chuẩn SEMI PV17. Huahao Sealing cung cấp báo cáo kiểm tra GDMS cho mỗi lô.

## 3. Thiết kế kết cấu

### 3.1 Kín ống bích + làm mát nước

Trục nồi quartz và trục tinh thể hạt dùng kín ống bích kim loại (vật liệu Inconel 625), ngoài ống bích có áo làm mát nước, cấp nước làm mát 0.3-0.5 MPa, kiểm soát nhiệt độ kín dưới 200℃. Không làm mát nước nhiệt độ kín có thể đạt 600-800℃, than chì sẽ ôxy hóa thành CO₂, phá hủy chân không.

### 3.2 Kín mặt bích đáy lò

Mặt bích đáy lò dùng kín O-ring + bulông; O-ring dùng cao su fluor FKM (chịu nhiệt 200℃, phù hợp nhiệt độ mặt bích sau làm mát nước). O-ring thay sau mỗi chu kỳ lò, tránh tích lũy lão hóa nhiệt gây rò rỉ.

## 4. Chế độ hỏng

Hỏng chính: vòng than chì ôxy hóa thành bột (40%, do làm mát nước thất bại gây ôxy hóa nhiệt độ cao), ống bích nứt mỏi (25%), O-ring lão hóa nhiệt (20%), tạp chất kim loại vượt chuẩn ô nhiễm tinh thể (15%).

## 5. Case study Huahao Sealing

Lò tinh thể silicon 12 inch của công ty vật liệu bán dẫn (đường kính nồi 22 inch, lượng nạp 150 kg), ban đầu dùng vòng đệm than chì thương hiệu nhập khẩu tuổi thọ trung bình 120 chu kỳ lò, từng gây sắt vượt chuẩn làm lệch điện trở suất toàn lô tinh thể, tổn thất khoảng 500000 CNY. Năm 2022 chuyển sang giải pháp than chì cao纯 IG-43 + ống bích Inconel 625 + áo làm mát nước của Huahao Sealing, tuổi thọ đạt 200+ chu kỳ lò, GDMS kiểm tra tạp chất kim loại tổng ổn định dưới 5 ppm, không còn sự cố ô nhiễm tạp chất.

Chọn lõi: cấp độ tinh khiết quyết định nhãn vật liệu (chọn IG-43 + tinh hóa halogen), kiểm soát nhiệt độ quyết định thiết kế kết cấu (ống bích + làm mát nước), độ tin cậy kín quyết định ổn định công nghệ.`,
      th: `## ประเด็นสำคัญ

- เตาผลึกซิลิคอน CZ (Czochralski) ทำงานที่ 1400℃ ซิลิคอนหลอมเหลวและสุญญากาศสูง 10⁻⁵ Pa; สิ่งเจือปนโลหะใดๆ จะปนเปื้อนผลึกซิลิคอน ทำให้ความต้านทานไฟฟ้าเบี่ยงเบน
- ซีลคาร์บอนกราไฟต์ใช้ที่เพลาหม้อเหล็กไพว์เซียม เพลาผลึกเมล็ด และแฟลงก้นเตา — ข้อกำหนดความบริสุทธิ์สิ่งเจือปนโลหะรวม < 10 ppm (เหล็ก ทองแดง นิกเกิล แต่ละตัว < 1 ppm)
- ต้องใช้กราไฟต์ไอโซสเตติกความบริสุทธิ์สูง (เช่น IG-43) ผ่านการทำให้บริสุทธิ์ด้วยฮาโลเจนที่ 2800℃ เพื่อขจัดสิ่งเจือปนโลหะ
- การออกแบบโครงสร้างใช้ซีลท่อระฆังโลหะ + แจ็คเก็ตระบายน้ำเย็น ควบคุมอุณหภูมิซีลให้ต่ำกว่า 200℃ เพื่อหลีกเลี่ยงการออกซิเดชันที่อุณหภูมิสูง
- Huahao Sealing บรรลุอายุการใช้งาน 200+ รอบเตาในเตาผลึกซิลิคอน 12 นิ้ว สิ่งเจือปนโลหะตรงตามมาตรฐาน SEMI

วิธี CZ (Czochralski) เป็นกระบวนการหลักในการเติบโตผลึกซิลิคอน 300mm (12 นิ้ว) และต่ำกว่า เตา CZ ทำงานที่อุณหภูมิสูง 1400℃ และสุญญากาศสูง 10⁻⁵ Pa; ชิ้นส่วนใดที่ปล่อยสิ่งเจือปนโลหะจะถูกกระแส Ar นำไปสู่พื้นผิวซิลิคอนหลอมเหลว ปนเปื้อนผลึก ซีลคาร์บอนกราไฟต์เป็นชิ้นส่วนซีลไดนามิกหลักของเตา กำหนดความสม่ำเสมอของความต้านทานไฟฟ้าผลึกซิลิคอนโดยตรง

## 1. ลักษณะสภาวะการทำงาน

อุณหภูมิห้องเตา CZ 1400-1420℃ (จุดหลอมเหลวซิลิคอน 1414℃) สุญญากาศ 10⁻⁵ Pa ก๊าซ Ar คุ้มกันรักษาความดันบวกเล็กน้อย เพลาหม้อเหล็กไพว์เซียมและเพลาผลึกเมล็ดต้องการการหมุนและการดึง ต้องมีซีลไดนามิก ถ้าซีลปล่อยเหล็ก ทองแดง นิกเกิลหรือสิ่งเจือปนโลหะอื่น จะเข้าสู่ซิลิคอนหลอมเหลวเป็นศูนย์กลางรวมตัวใหม่ ลดอายุพาหะน้อยของผลึกซิลิคอน ความต้านทานไฟฟ้าเบี่ยงเบนจากเป้าหมาย

## 2. ข้อกำหนดความบริสุทธิ์วัสดุ

### 2.1 กราไฟต์ไอโซสเตติกความบริสุทธิ์สูง

ต้องใช้กราไฟต์ไอโซสเตติกความบริสุทธิ์สูง (เช่น IG-43) ผ่านการทำให้บริสุทธิ์ด้วยฮาโลเจนที่ 2800℃ (ก๊าซผสม Cl₂+F₂) ลดสิ่งเจือปนโลหะรวมให้ต่ำกว่า 10 ppm เหล็ก ทองแดง นิกเกิลแต่ละตัวต่ำกว่า 1 ppm กราไฟต์เชิงกลทั่วไป (สิ่งเจือปนโลหะ 100-500 ppm) ห้ามใช้อย่างเคร่งครัด

### 2.2 การทดสอบความบริสุทธิ์

แต่ละล็อตต้องทดสอบธาตุโลหะ 30+ ชนิดด้วย GDMS (กลอว์ดิสชาร์จแมสสเปกโตรเมทรี) ตามมาตรฐาน SEMI PV17 Huahao Sealing ให้รายงานการทดสอบ GDMS สำหรับทุกล็อต

## 3. การออกแบบโครงสร้าง

### 3.1 ซีลท่อระฆัง + ระบายน้ำเย็น

เพลาหม้อเหล็กไพว์เซียมและเพลาผลึกเมล็ดใช้ซีลท่อระฆังโลหะ (วัสดุ Inconel 625) ด้านนอกท่อระฆังมีแจ็คเก็ตระบายน้ำเย็น ป้อนน้ำเย็น 0.3-0.5 MPa ควบคุมอุณหภูมิซีลให้ต่ำกว่า 200℃ โดยไม่ระบายน้ำเย็นอุณหภูมิซีลอาจถึง 600-800℃ กราไฟต์จะออกซิไดซ์เป็น CO₂ ทำลายสุญญากาศ

### 3.2 ซีลแฟลงก้นเตา

แฟลงก้นเตาใช้ซีล O-ring + สลักเกลียว; O-ring ใช้ยางฟลูออโร FKM (ทนอุณหภูมิ 200℃ ตรงกับอุณหภูมิแฟลงหลังระบายน้ำเย็น) O-ring เปลี่ยนหลังทุกรอบเตา หลีกเลี่ยงการสะสมการเสื่อมสภาพจากความร้อน

## 4. รูปแบบความเสียหาย

ความเสียหายหลัก: วงแหวนกราไฟต์ออกซิไดซ์เป็นผง (40% เนื่องจากระบบระบายน้ำเย็นล้มเหลวทำให้ออกซิเดชันที่อุณหภูมิสูง) ท่อระฆังแตกร้าวจากความเหนื่อยล้า (25%) O-ring เสื่อมสภาพจากความร้อน (20%) สิ่งเจือปนโลหะเกินมาตรฐานปนเปื้อนผลึก (15%)

## 5. กรณีศึกษา Huahao Sealing

เตาผลึกซิลิคอน 12 นิ้วของบริษัทวัสดุเซมิคอนดักเตอร์ (เส้นผ่านศูนย์กลางหม้อ 22 นิ้ว น้ำหนักบรรจุ 150 kg) เดิมใช้ซีลกราไฟต์แบรนด์นำเข้าอายุการใช้งานเฉลี่ย 120 รอบเตา เคยทำให้เหล็กเกินมาตรฐานทำให้ความต้านทานไฟฟ้าผลึกทั้งล็อตเบี่ยงเบน สูญเสียประมาณ 500000 CNY ปี 2022 เปลี่ยนเป็นโซลูชันกราไฟต์ความบริสุทธิ์สูง IG-43 + ท่อระฆัง Inconel 625 + แจ็คเก็ตระบายน้ำเย็นของ Huahao Sealing อายุการใช้งานถึง 200+ รอบเตา GDMS ทดสอบสิ่งเจือปนโลหะรวมคงที่ต่ำกว่า 5 ppm ไม่มีเหตุการณ์ปนเปื้อนอีก

หลักการเลือก: ระดับความบริสุทธิ์กำหนดเกรดวัสดุ (เลือก IG-43 + ทำให้บริสุทธิ์ด้วยฮาโลเจน) การควบคุมอุณหภูมิกำหนดการออกแบบโครงสร้าง (ท่อระฆัง + ระบายน้ำเย็น) ความน่าเชื่อถือซีลกำหนดความเสถียรกระบวนการ`,
    },
  },
  {
    slug: "textile-printing-machinery-graphite-bushing",
    title: {
      zh: "纺织印染机械碳石墨轴套应用：高温蒸汽与染料介质工况解决方案",
      en: "Carbon Graphite Bushings in Textile Printing and Dyeing Machinery: Solutions for High-Temperature Steam and Dye Media Service",
      vi: "Bạc lót than chì carbon trong máy dệt và nhuộm: Giải pháp cho điều kiện hơi nước nhiệt độ cao và môi chất thuốc nhuộm",
      th: "บุชชิ่งคาร์บอนกราไฟต์ในเครื่องจักรสิ่งทอและการพิมพ์ย้อมสี: โซลูชันสำหรับสภาวะไอน้ำอุณหภูมิสูงและตัวกลางสีย้อม",
    },
    excerpt: {
      zh: "针对纺织印染机械导布辊、印花辊、蒸化机等部件在 130-180℃ 高温蒸汽、含染料与化学助剂介质下的磨损与腐蚀问题，本文讲解碳石墨轴套的材料选型（呋喃树脂浸渍石墨）、结构设计（带沟槽自润滑）、安装维护要点与华豪密封应用案例。",
      en: "For wear and corrosion issues of guide rollers, printing rollers, and steamers in textile printing and dyeing machinery under 130-180℃ high-temperature steam and dye/chemical auxiliary media, this article covers carbon graphite bushing material selection (furan resin-impregnated graphite), structural design (self-lubricating with grooves), installation and maintenance points, and Huahao Sealing application cases.",
      vi: "Dành cho vấn đề mài mòn và ăn mòn của lô dẫn vải, lô in, máy hấp trong máy dệt và nhuộm dưới hơi nước nhiệt độ cao 130-180℃ và môi chất thuốc nhuộm/chất phụ gia hóa học, bài viết trình bày chọn vật liệu bạc lót than chì carbon (than chì tẩm nhựa furan), thiết kế kết cấu (tự bôi trơn có rãnh), lắp đặt bảo trì và case study Huahao Sealing.",
      th: "สำหรับปัญหาการสึกหรอและการกัดกร่อนของลูกกลิ้งนำผ้า ลูกกลิ้งพิมพ์ และเครื่องนึ่งในเครื่องจักรสิ่งทอและการพิมพ์ย้อมสีภายใต้ไอน้ำอุณหภูมิสูง 130-180℃ และตัวกลางสีย้อม/สารช่วยเคมี บทความนี้ครอบคลุมการเลือกวัสดุบุชชิ่งคาร์บอนกราไฟต์ (กราไฟต์อิมเพรกเนตเรซินฟูแรน) การออกแบบโครงสร้าง (หล่อลื่นตัวเองมีร่อง) การติดตั้งบำรุงรักษา และกรณีศึกษา Huahao Sealing",
    },
    tag: "application",
    date: "2026-07-05",
    content: {
      zh: `## 核心要点

- 纺织印染机械的导布辊、印花辊、蒸化机等部件在 130-180℃ 高温蒸汽、染料与化学助剂介质中工作，普通金属轴承易腐蚀卡死
- 碳石墨轴套首选呋喃树脂浸渍石墨，耐弱酸弱碱染料液腐蚀，耐温 200℃，自润滑免维护
- 轴套内壁开设螺旋沟槽或轴向沟槽，利用介质自身形成润滑膜，摩擦系数降至 0.05-0.1
- 安装时需控制配合间隙（H8/f7），过紧会导致热膨胀抱轴，过松会振动磨损
- 华豪密封在某印染企业 8 条连续轧染生产线改造中，将导布辊轴承寿命从 6 个月延长至 3 年

纺织印染机械包括退煮漂联合机、连续轧染机、印花机、蒸化机、水洗机等，其导布辊、印花辊、蒸化机导辊等部件需在高温、高湿、含染料与化学助剂的腐蚀性介质中连续运转。金属轴承在此工况下易腐蚀卡死，而碳石墨轴套凭借自润滑、耐腐蚀、耐高温特性成为理想替代品。本文结合霍邱县华豪密封件有限公司在多家纺织印染企业的应用经验，介绍碳石墨轴套选型要点。

## 一、工况特性

### 1.1 典型工况参数

- 退煮漂联合机：80-100℃ 碱液（NaOH 20-40 g/L）+ 双氧水，pH 11-13
- 连续轧染机：染液温度 60-90℃，含染料、尿素、防泳移剂，pH 5-8
- 蒸化机：130-180℃ 饱和蒸汽，含染料与化学助剂挥发物
- 水洗机：60-95℃ 热水，含残留染料与助剂

### 1.2 失效模式

普通金属轴承在此工况下的失效形式：滚动体腐蚀卡死（45%）、密封件老化泄漏（25%）、润滑脂流失干磨（20%）、保持架断裂（10%）。平均寿命仅 3-6 个月，频繁停机更换严重影响产能。

## 二、材料选型

### 2.1 呋喃树脂浸渍石墨

纺织印染工况首选呋喃树脂浸渍石墨 M106K，其优势：

- 耐弱酸弱碱：在 pH 5-13 染料液和碱液中稳定，浸泡 1000 小时无溶胀
- 耐温 200℃：满足蒸化机 180℃ 蒸汽工况上限
- 自润滑：石墨本身层状结构，摩擦系数 0.1-0.15，无需外加润滑脂
- 不污染染液：化学性质稳定，不释放金属离子影响染色

对比酚醛浸渍石墨：呋喃在碱性碱液中长期稳定，酚醛在 pH > 11 时开始水解。对比环氧浸渍石墨：呋喃耐温更高（200℃ vs 180℃），但环氧在酸性染液中更稳定。

### 2.2 配对轴材料

推荐配对 316L 不锈钢轴或陶瓷喷涂轴，硬度 HV 350 以上。避免普通碳钢轴（易锈蚀增加磨损）。

## 三、结构设计

### 3.1 沟槽自润滑结构

轴套内壁开设螺旋沟槽（螺距 6-10 mm，深度 0.5-1.0 mm）或轴向沟槽（宽 2-3 mm，深 0.8 mm），利用介质自身在摩擦面形成润滑膜，摩擦系数降至 0.05-0.1。螺旋沟槽适用于连续运转，轴向沟槽适用于频繁启停。

### 3.2 壁厚与配合

壁厚取轴径的 8-12%，过薄强度不足，过厚散热差。配合间隙采用 H8/f7，碳石墨热膨胀系数（4-6 ×10⁻⁶/℃）低于金属，常温下间隙 0.05-0.10 mm，工作温度下间隙扩大至 0.10-0.15 mm，避免抱轴。

### 3.3 端面密封

轴套端面配 PTFE 垫圈，防止染液沿轴端渗入轴承座。PTFE 耐化学介质，耐温 250℃，满足所有印染工况。

## 四、安装维护要点

### 4.1 安装

- 用专用工装均匀压入轴承座，禁止敲击（石墨脆性大）
- 检查轴的径向跳动 < 0.05 mm，避免偏磨
- 首次启动前用手盘车，确认无卡阻

### 4.2 维护

- 每月检查轴套磨损量，超过壁厚 30% 需更换
- 定期清理沟槽内沉积的染料结晶
- 监测运行噪音，异常噪音提示磨损或碎裂

## 五、华豪密封案例

某印染企业 8 条连续轧染生产线（每条线 60 个导布辊，共 480 个轴承位），原用不锈钢轴承平均寿命 6 个月，每年更换 960 次，停机损失约 96 万元。2020 年改用华豪密封 M106K 呋喃浸渍石墨轴套 + 316L 轴 + 螺旋沟槽方案后，平均寿命延长至 36 个月，每年更换次数降至 16 次，年节约停机损失约 80 万元，节约备件费用约 35 万元。同时消除了润滑脂污染染液问题，染色一等品率提升 2.3%。

选型核心：介质 pH 与温度决定浸渍剂（碱液选呋喃）、运转方式决定沟槽形式（连续选螺旋、频繁启停选轴向）、配合间隙决定热膨胀余量（H8/f7 标准）。`,
      en: `## Key Takeaways

- Guide rollers, printing rollers, and steamers in textile printing and dyeing machinery operate in 130-180℃ high-temperature steam with dye and chemical auxiliary media; conventional metal bearings easily corrode and seize
- Carbon graphite bushings should use furan resin-impregnated graphite, resistant to weak acid/alkali dye solution corrosion, temperature rating 200℃, self-lubricating and maintenance-free
- Spiral or axial grooves on the bushing inner wall use the media itself to form a lubricating film, reducing friction coefficient to 0.05-0.1
- Installation requires controlled fit clearance (H8/f7); too tight causes thermal expansion shaft seizure, too loose causes vibration wear
- Huahao Sealing extended guide roller bearing life from 6 months to 3 years in an 8-line continuous pad dyeing revamp

Textile printing and dyeing machinery includes singeing-desizing-scouring-bleaching ranges, continuous pad dyeing machines, printing machines, steamers, and washers. Their guide rollers, printing rollers, and steamer guide rollers must operate continuously in high-temperature, high-humidity, corrosive media containing dyes and chemical auxiliaries. Metal bearings easily corrode and seize under these conditions, while carbon graphite bushings — with their self-lubricating, corrosion-resistant, high-temperature properties — become the ideal alternative. Based on Huahao Sealing's application experience at multiple textile printing and dyeing enterprises, this article introduces carbon graphite bushing selection points.

## 1. Service Characteristics

### 1.1 Typical Service Parameters

- Singeing-desizing-scouring-bleaching range: 80-100℃ alkali solution (NaOH 20-40 g/L) + hydrogen peroxide, pH 11-13
- Continuous pad dyeing machine: dye solution 60-90℃, containing dyes, urea, anti-migration agents, pH 5-8
- Steamer: 130-180℃ saturated steam, containing dye and chemical auxiliary volatiles
- Washer: 60-95℃ hot water, containing residual dyes and auxiliaries

### 1.2 Failure Modes

Conventional metal bearing failures under these conditions: rolling element corrosion seizure (45%), seal aging leakage (25%), lubricant loss dry friction (20%), cage fracture (10%). Average life is only 3-6 months, and frequent shutdown replacements seriously affect production capacity.

## 2. Material Selection

### 2.1 Furan Resin-Impregnated Graphite

For textile printing and dyeing service, furan resin-impregnated graphite M106K is preferred, with advantages:

- Weak acid/alkali resistance: stable in pH 5-13 dye solutions and alkali solutions, no swelling after 1000-hour immersion
- Temperature rating 200℃: meets the 180℃ steam service ceiling of steamers
- Self-lubricating: graphite's layered structure gives friction coefficient 0.1-0.15, no external grease required
- No dye solution contamination: chemically stable, no metal ion release affecting dyeing

Compared to phenolic-impregnated graphite: furan is stable long-term in alkaline solutions, while phenolic begins hydrolysis at pH > 11. Compared to epoxy-impregnated graphite: furan has higher temperature rating (200℃ vs 180℃), but epoxy is more stable in acidic dye solutions.

### 2.2 Mating Shaft Material

316L stainless steel shaft or ceramic-coated shaft is recommended, hardness above HV 350. Avoid ordinary carbon steel shafts (prone to rust increasing wear).

## 3. Structural Design

### 3.1 Groove Self-Lubricating Structure

Spiral grooves (pitch 6-10 mm, depth 0.5-1.0 mm) or axial grooves (width 2-3 mm, depth 0.8 mm) on the bushing inner wall use the media itself to form a lubricating film on the friction face, reducing friction coefficient to 0.05-0.1. Spiral grooves suit continuous operation; axial grooves suit frequent start-stop.

### 3.2 Wall Thickness and Fit

Wall thickness is 8-12% of shaft diameter; too thin lacks strength, too thick dissipates heat poorly. Fit clearance uses H8/f7; carbon graphite thermal expansion coefficient (4-6 ×10⁻⁶/℃) is lower than metal, with clearance 0.05-0.10 mm at room temperature expanding to 0.10-0.15 mm at operating temperature, avoiding shaft seizure.

### 3.3 End Face Seal

PTFE gasket on the bushing end face prevents dye solution from seeping along the shaft end into the bearing housing. PTFE resists chemical media and temperature up to 250℃, meeting all printing and dyeing service conditions.

## 4. Installation and Maintenance Points

### 4.1 Installation

- Use a dedicated tooling for uniform press-fit into the bearing housing; hammering is prohibited (graphite is brittle)
- Check shaft radial runout < 0.05 mm to avoid uneven wear
- Manually rotate before first start-up to confirm no jamming

### 4.2 Maintenance

- Check bushing wear monthly; replace when exceeding 30% of wall thickness
- Regularly clean dye crystal deposits in the grooves
- Monitor running noise; abnormal noise indicates wear or fracture

## 5. Huahao Sealing Case Study

A printing and dyeing enterprise's 8 continuous pad dyeing lines (60 guide rollers per line, 480 bearing positions total) originally used stainless steel bearings averaging 6 months life, with 960 replacements per year and about 960000 CNY in downtime losses. After switching to Huahao Sealing's M106K furan-impregnated graphite bushing + 316L shaft + spiral groove solution in 2020, average life extended to 36 months, annual replacements dropped to 16, saving about 800000 CNY in downtime losses and 350000 CNY in spare parts annually. Meanwhile, grease contamination of dye solution was eliminated, with first-grade dyeing product rate increasing 2.3%.

Selection core: media pH and temperature determine impregnant (alkali solution uses furan), operation mode determines groove form (continuous uses spiral, frequent start-stop uses axial), fit clearance determines thermal expansion allowance (H8/f7 standard).`,
      vi: `## Điểm chính

- Lô dẫn vải, lô in, máy hấp trong máy dệt và nhuộm hoạt động trong hơi nước nhiệt độ cao 130-180℃ với môi chất thuốc nhuộm và chất phụ gia hóa học; bạc lót kim loại thông thường dễ bị ăn mòn và kẹt
- Bạc lót than chì carbon nên dùng than chì tẩm nhựa furan, chống ăn mòn dung dịch thuốc nhuộm axit/kiềm yếu, chịu nhiệt 200℃, tự bôi trơn không cần bảo trì
- Rãnh xoắn hoặc rãnh trục trên thành trong bạc lót sử dụng chính môi chất tạo màng bôi trơn, giảm hệ số ma sát xuống 0.05-0.1
- Lắp đặt cần kiểm soát khe hở (H8/f7); quá kín gây kẹt trục do giãn nở nhiệt, quá lỏng gây rung mài mòn
- Huahao Sealing đã kéo dài tuổi thọ bạc lót lô dẫn vải từ 6 tháng lên 3 năm trong dự án cải tạo 8 dây chuyền nhuộm liên tục

Máy dệt và nhuộm gồm máy đốt mềm-ngâm tẩy-tẩy trắng liên hợp, máy nhuộm liên tục, máy in, máy hấp, máy giặt. Lô dẫn vải, lô in, lô dẫn máy hấp phải hoạt động liên tục trong môi chất ăn mòn nhiệt độ cao, độ ẩm cao, chứa thuốc nhuộm và chất phụ gia hóa học. Bạc lót kim loại dễ bị ăn mòn kẹt trong điều kiện này, trong khi bạc lót than chì carbon — với đặc tính tự bôi trơn, chống ăn mòn, chịu nhiệt độ cao — trở thành lựa chọn thay thế lý tưởng. Dựa trên kinh nghiệm ứng dụng của Huahao Sealing tại nhiều doanh nghiệp dệt và nhuộm, bài viết giới thiệu điểm chọn bạc lót than chì carbon.

## 1. Đặc tính điều kiện

### 1.1 Thông số điều kiện điển hình

- Máy đốt mềm-ngâm tẩy-tẩy trắng liên hợp: dung dịch kiềm 80-100℃ (NaOH 20-40 g/L) + hydro peroxide, pH 11-13
- Máy nhuộm liên tục: dung dịch thuốc nhuộm 60-90℃, chứa thuốc nhuộm, ure, chất chống di chuyển, pH 5-8
- Máy hấp: hơi nước bão hòa 130-180℃, chứa chất bay hơi thuốc nhuộm và chất phụ gia hóa học
- Máy giặt: nước nóng 60-95℃, chứa thuốc nhuộm và chất phụ gia dư

### 1.2 Chế độ hỏng

Hỏng bạc lót kim loại thông thường trong điều kiện này: kẹt ăn mòn phần lăn (45%), lão hóa kín rò rỉ (25%), mất mỡ ma sát khô (20%), gãy lồng giữ (10%). Tuổi thọ trung bình chỉ 3-6 tháng, việc thay thế dừng máy thường xuyên ảnh hưởng nghiêm trọng năng lực sản xuất.

## 2. Chọn vật liệu

### 2.1 Than chì tẩm nhựa furan

Cho điều kiện dệt nhuộm, than chì tẩm nhựa furan M106K được ưu tiên, với lợi ích:

- Chống axit/kiềm yếu: ổn định trong dung dịch thuốc nhuộm pH 5-13 và dung dịch kiềm, không trương nở sau 1000 giờ ngâm
- Chịu nhiệt 200℃: đáp ứng giới hạn điều kiện hơi máy hấp 180℃
- Tự bôi trơn: cấu trúc lớp than chì cho hệ số ma sát 0.1-0.15, không cần mỡ ngoài
- Không ô nhiễm dung dịch nhuộm: ổn định hóa học, không giải phóng ion kim loại ảnh hưởng nhuộm

So với than chì tẩm phenolic: furan ổn định dài hạn trong dung dịch kiềm, phenolic bắt đầu thủy phân ở pH > 11. So với than chì tẩm epoxy: furan chịu nhiệt cao hơn (200℃ so với 180℃), nhưng epoxy ổn định hơn trong dung dịch axit.

### 2.2 Vật liệu trục ma đối

Khuyến nghị trục thép không gỉ 316L hoặc trục phun gốm, độ cứng trên HV 350. Tránh trục thép cacbon thông thường (dễ rỉ tăng mài mòn).

## 3. Thiết kế kết cấu

### 3.1 Kết cấu tự bôi trơn có rãnh

Rãnh xoắn (bước 6-10 mm, sâu 0.5-1.0 mm) hoặc rãnh trục (rộng 2-3 mm, sâu 0.8 mm) trên thành trong bạc lót sử dụng chính môi chất tạo màng bôi trơn trên bề mặt ma sát, giảm hệ số ma sát xuống 0.05-0.1. Rãnh xoắn phù hợp vận hành liên tục; rãnh trục phù hợp khởi-dừng thường xuyên.

### 3.2 Bề dày và配合

Bề dày lấy 8-12% đường kính trục; quá mỏng thiếu cường độ, quá dày tản nhiệt kém. Khe hở dùng H8/f7; hệ số giãn nở nhiệt than chì carbon (4-6 ×10⁻⁶/℃) thấp hơn kim loại, khe hở 0.05-0.10 mm ở nhiệt độ phòng giãn ra 0.10-0.15 mm ở nhiệt độ làm việc, tránh kẹt trục.

### 3.3 Kín mặt đầu

Bạc lót mặt đầu có ron PTFE, ngăn dung dịch thuốc nhuộm thấm dọc đầu trục vào hộp ổ bi. PTFE chống môi chất hóa học, chịu nhiệt 250℃, đáp ứng mọi điều kiện dệt nhuộm.

## 4. Điểm lắp đặt bảo trì

### 4.1 Lắp đặt

- Dụng cụ chuyên dụng ép đều vào hộp ổ bi, cấm gõ (than chì giòn)
- Kiểm tra dao động hướng kính trục < 0.05 mm, tránh mòn không đều
- Quay tay trước khi khởi động lần đầu, xác nhận không kẹt

### 4.2 Bảo trì

- Kiểm tra mài mòn bạc lót hàng tháng, thay khi quá 30% bề dày
- Vệ sinh kết tinh thuốc nhuộm trong rãnh định kỳ
- Theo dõi tiếng ồn vận hành, tiếng ồn bất thường cho thấy mài mòn hoặc nứt vỡ

## 5. Case study Huahao Sealing

Doanh nghiệp dệt nhuộm 8 dây chuyền nhuộm liên tục (mỗi dây 60 lô dẫn vải, tổng 480 vị trí ổ bi), ban đầu dùng bạc lót thép không gỉ tuổi thọ trung bình 6 tháng, mỗi năm thay 960 lần, tổn thất dừng máy khoảng 960000 CNY. Năm 2020 chuyển sang giải pháp bạc lót than chì tẩm furan M106K + trục 316L + rãnh xoắn của Huahao Sealing, tuổi thọ trung bình kéo dài đến 36 tháng, số lần thay hàng năm giảm xuống 16, tiết kiệm tổn thất dừng máy khoảng 800000 CNY và chi phí phụ tùng khoảng 350000 CNY mỗi năm. Đồng thời loại bỏ vấn đề mỡ bôi trơn ô nhiễm dung dịch nhuộm, tỷ lệ sản phẩm loại 1 tăng 2.3%.

Chọn lõi: pH và nhiệt độ môi chất quyết định chất tẩm (dung dịch kiềm chọn furan), phương thức vận hành quyết định hình rãnh (liên tục chọn xoắn, khởi-dừng thường xuyên chọn trục), khe hở quyết định dư lượng giãn nở nhiệt (H8/f7 tiêu chuẩn).`,
      th: `## ประเด็นสำคัญ

- ลูกกลิ้งนำผ้า ลูกกลิ้งพิมพ์ และเครื่องนึ่งในเครื่องจักรสิ่งทอและการพิมพ์ย้อมสีทำงานในไอน้ำอุณหภูมิสูง 130-180℃ กับตัวกลางสีย้อมและสารช่วยเคมี; บุชชิ่งโลหะทั่วไปง่ายต่อการกัดกร่อนและยึดติด
- บุชชิ่งคาร์บอนกราไฟต์ควรใช้กราไฟต์อิมเพรกเนตเรซินฟูแรน ทนการกัดกร่อนของสีย้อมกรด/ด่างอ่อน ทนอุณหภูมิ 200℃ หล่อลื่นตัวเองไม่ต้องบำรุงรักษา
- ร่องเกลียวหรือร่องแนวแกนบนผนังภายในบุชชิ่งใช้ตัวกลางเองสร้างฟิล์มหล่อลื่น ลดค่าสัมประสิทธิ์แรงเสียดสีเหลือ 0.05-0.1
- การติดตั้งต้องควบคุมระยะห่าง (H8/f7); แน่นเกินไปทำให้เพลายึดเนื่องจากการขยายตัวจากความร้อน หลวมเกินไปทำให้สั่นสึกหรอ
- Huahao Sealing ได้ยืดอายุบุชชิ่งลูกกลิ้งนำผ้าจาก 6 เดือนเป็น 3 ปีในโครงการปรับปรุงสายการย้อมสีต่อเนื่อง 8 สาย

เครื่องจักรสิ่งทอและการพิมพ์ย้อมสีรวมเครื่องเผาไหม้-ออกแป้ง-ฟอกขาวต่อเนื่อง เครื่องย้อมสีต่อเนื่อง เครื่องพิมพ์ เครื่องนึ่ง และเครื่องซัก ลูกกลิ้งนำผ้า ลูกกลิ้งพิมพ์ ลูกกลิ้งนำเครื่องนึ่งต้องทำงานต่อเนื่องในตัวกลางกัดกร่อนที่มีอุณหภูมิสูง ความชื้นสูง มีสีย้อมและสารช่วยเคมี บุชชิ่งโลหะง่ายต่อการกัดกร่อนและยึดติดในสภาวะนี้ ในขณะที่บุชชิ่งคาร์บอนกราไฟต์ — ด้วยคุณสมบัติหล่อลื่นตัวเอง ทนการกัดกร่อน ทนอุณหภูมิสูง — กลายเป็นทางเลือกทดแทนที่เหมาะสม จากประสบการณ์การใช้งานของ Huahao Sealing ที่วิสาหกิจสิ่งทอและการพิมพ์ย้อมสีหลายแห่ง บทความนี้แนะนำจุดสำคัญในการเลือกบุชชิ่งคาร์บอนกราไฟต์

## 1. ลักษณะสภาวะการทำงาน

### 1.1 พารามิเตอร์สภาวะทั่วไป

- เครื่องเผาไหม้-ออกแป้ง-ฟอกขาวต่อเนื่อง: สารละลายด่าง 80-100℃ (NaOH 20-40 g/L) + ไฮโดรเจนเปอร์ออกไซด์, pH 11-13
- เครื่องย้อมสีต่อเนื่อง: สารละลายย้อมสี 60-90℃ มีสีย้อม ยูเรีย สารกันการย้าย, pH 5-8
- เครื่องนึ่ง: ไอน้ำอิ่มตัว 130-180℃ มีสีย้อมและสารระเหยของสารช่วยเคมี
- เครื่องซัก: น้ำร้อน 60-95℃ มีสีย้อมตกค้างและสารช่วย

### 1.2 รูปแบบความเสียหาย

ความเสียหายของบุชชิ่งโลหะทั่วไปในสภาวะเหล่านี้: การยึดติดจากการกัดกร่อนขององค์ประกอบลูกกลิ้ง (45%) การรั่วซึมจากการเสื่อมสภาพซีล (25%) การสึกหรอแห้งจากการสูญเสียจาระบี (20%) กรงประคองแตก (10%) อายุการใช้งานเฉลี่ยเพียง 3-6 เดือน การหยุดเปลี่ยนบ่อยครั้งส่งผลกระทบอย่างรุนแรงต่อกำลังการผลิต

## 2. การเลือกวัสดุ

### 2.1 กราไฟต์อิมเพรกเนตเรซินฟูแรน

สำหรับสภาวะสิ่งทอและการพิมพ์ย้อมสี กราไฟต์อิมเพรกเนตเรซินฟูแรน M106K เป็นที่ต้องการ มีข้อดี:

- ทนกรด/ด่างอ่อน: คงที่ในสารละลายสีย้อม pH 5-13 และสารละลายด่าง ไม่บวมหลังจุ่ม 1000 ชั่วโมง
- ทนอุณหภูมิ 200℃: ตอบสนองเพดานสภาวะไอน้ำเครื่องนึ่ง 180℃
- หล่อลื่นตัวเอง: โครงสร้างเป็นชั้นของกราไฟต์ให้ค่าสัมประสิทธิ์แรงเสียดสี 0.1-0.15 ไม่ต้องใช้จาระบีเพิ่ม
- ไม่ปนเปื้อนสารละลายย้อมสี: คงที่ทางเคมี ไม่ปล่อยไอออนโลหะที่ส่งผลต่อการย้อมสี

เปรียบเทียบกับกราไฟต์อิมเพรกเนตฟีนอลิก: ฟูแรนคงที่ระยะยาวในสารละลายด่าง ฟีนอลิกเริ่มไฮโดรไลซิสที่ pH > 11 เปรียบเทียบกับกราไฟต์อิมเพรกเนตอีพ็อกซี: ฟูแรนทนอุณหภูมิสูงกว่า (200℃ เทียบกับ 180℃) แต่อีพ็อกซีคงที่กว่าในสารละลายกรด

### 2.2 วัสดุเพลาประกบ

เพลาเหล็กกล้าไร้สนิม 316L หรือเพลาเคลือบเซรามิกแนะนำ ความแข็งเหนือ HV 350 หลีกเลี่ยงเพลาเหล็กคาร์บอนทั่วไป (ง่ายต่อสนิมเพิ่มการสึกหรอ)

## 3. การออกแบบโครงสร้าง

### 3.1 โครงสร้างหล่อลื่นตัวเองมีร่อง

ร่องเกลียว (พิทช์ 6-10 mm ความลึก 0.5-1.0 mm) หรือร่องแนวแกน (กว้าง 2-3 mm ลึก 0.8 mm) บนผนังภายในบุชชิ่งใช้ตัวกลางเองสร้างฟิล์มหล่อลื่นบนผิวหน้าเสียดสี ลดค่าสัมประสิทธิ์แรงเสียดสีเหลือ 0.05-0.1 ร่องเกลียวเหมาะกับการทำงานต่อเนื่อง; ร่องแนวแกนเหมาะกับการเริ่ม-หยุดบ่อย

### 3.2 ความหนาผนังและการได้รับการขนาน

ความหนาผนัง 8-12% ของเส้นผ่านศูนย์กลางเพลา; บางเกินไปขาดความแข็งแรง หนาเกินไประบายความร้อนไม่ดี ระยะห่างได้รับการขนานใช้ H8/f7; ค่าสัมประสิทธิ์การขยายตัวจากความร้อนของคาร์บอนกราไฟต์ (4-6 ×10⁻⁶/℃) ต่ำกว่าโลหะ ระยะห่าง 0.05-0.10 mm ที่อุณหภูมิห้องขยายเป็น 0.10-0.15 mm ที่อุณหภูมิการทำงาน หลีกเลี่ยงการยึดเพลา

### 3.3 ซีลผิวหน้าปลาย

แก๊สเก็ต PTFE บนผิวหน้าปลายบุชชิ่งป้องกันสารละลายสีย้อมซึมตามปลายเพลาเข้าสู่กล่องลูกปืน PTFE ทนตัวกลางเคมี ทนอุณหภูมิ 250℃ ตอบสนองทุกสภาวะการพิมพ์ย้อมสี

## 4. จุดการติดตั้งและบำรุงรักษา

### 4.1 การติดตั้ง

- ใช้เครื่องมือเฉพาะกดเข้ากล่องลูกปืนอย่างสม่ำเสมอ; ห้ามตอก (กราไฟต์เปราะ)
- ตรวจสอบการส่ายของเพลา < 0.05 mm เพื่อหลีกเลี่ยงการสึกหรอไม่สม่ำเสมอ
- หมุนด้วยมือก่อนเริ่มต้นครั้งแรกเพื่อยืนยันไม่มีการยึดติด

### 4.2 การบำรุงรักษา

- ตรวจสอบการสึกหรอบุชชิ่งรายเดือน; เปลี่ยนเมื่อเกิน 30% ของความหนาผนัง
- ทำความสะอาดตะกรันผลึกสีย้อมในร่องเป็นประจำ
- ติดตามเสียงระหว่างการทำงาน; เสียงผิดปกติบ่งบอกถึงการสึกหรอหรือการแตกร้าว

## 5. กรณีศึกษา Huahao Sealing

วิสาหกิจการพิมพ์ย้อมสี 8 สายการย้อมสีต่อเนื่อง (60 ลูกกลิ้งนำผ้าต่อสาย รวม 480 ตำแหน่งลูกปืน) เดิมใช้บุชชิ่งเหล็กกล้าไร้สนิมอายุการใช้งานเฉลี่ย 6 เดือน เปลี่ยน 960 ครั้งต่อปี สูญเสียจากการหยุดทำงานประมาณ 960000 CNY ปี 2020 เปลี่ยนเป็นโซลูชันบุชชิ่งกราไฟต์อิมเพรกเนตฟูแรน M106K + เพลา 316L + ร่องเกลียวของ Huahao Sealing อายุการใช้งานเฉลี่ยยืดเป็น 36 เดือน จำนวนครั้งการเปลี่ยนต่อปีลดเหลือ 16 ประหยัดความสูญเสียจากการหยุดทำงานประมาณ 800000 CNY และค่าอะไหล่ประมาณ 350000 CNY ต่อปี ในขณะเดียวกันกำจัดปัญหาจาระบีปนเปื้อนสารละลายย้อมสี อัตราผลิตภัณฑ์เกรด 1 เพิ่ม 2.3%

หลักการเลือก: pH และอุณหภูมิตัวกลางกำหนดสารอิมเพรกเนต (สารละลายด่างเลือกฟูแรน) วิธีการทำงานกำหนดรูปแบบร่อง (ต่อเนื่องเลือกเกลียว, เริ่ม-หยุดบ่อยเลือกแนวแกน) ระยะห่างกำหนดส่วนต่างการขยายตัวจากความร้อน (มาตรฐาน H8/f7)`,
    },
  },
  {
    slug: "marine-propeller-shaft-graphite-bearing",
    title: {
      zh: "船舶螺旋桨轴碳石墨水润滑轴承应用：海水腐蚀与泥沙冲蚀工况解决方案",
      en: "Carbon Graphite Water-Lubricated Bearings for Marine Propeller Shafts: Solutions for Seawater Corrosion and Sediment Erosion",
      vi: "Vòng bi than chì carbon bôi trơn nước cho trục cánh quạt tàu: Giải pháp cho ăn mòn nước biển và mài mòn bồi cát",
      th: "แบริ่งน้ำหล่อลื่นคาร์บอนกราไฟต์สำหรับเพลาพัดลมเรือ: โซลูชันสำหรับความกัดกร่อนน้ำทะเลและการสึกกร่อนจากตะกอน",
    },
    excerpt: {
      zh: "针对船舶螺旋桨尾轴在海水浸没、泥沙冲刷、长距离重载工况下的轴磨损与腐蚀问题，本文讲解碳石墨水润滑轴承的材料选型（浸渍环氧树脂石墨 + 碳纤维增强）、结构设计（三六瓣水腔分区）、安装找正要点与华豪密封应用案例。",
      en: "For propeller stern shaft wear and corrosion under seawater immersion, sediment scouring, and long-distance heavy load, this article covers carbon graphite water-lubricated bearing material selection (epoxy-impregnated graphite + carbon fiber reinforcement), structural design (3/6-lobe water chamber zoning), installation alignment points, and Huahao Sealing cases.",
      vi: "Dành cho mài mòn và ăn mòn trục sau cánh quạt tàu dưới ngập nước biển, xói mòn bồi cát và tải nặng khoảng cách dài, bài viết trình bày chọn vật liệu vòng bi bôi trơn nước than chì carbon (than chì tẩm nhựa epoxy + cốt sợi carbon), thiết kế kết cấu (chia khoang nước 3/6 thùy), lắp đặt căn chỉnh và case study Huahao Sealing.",
      th: "สำหรับการสึกหรอและการกัดกร่อนของเพลาหางพัดลมเรือภายใต้แช่น้ำทะเล การกัดเซาะจากตะกอน และภาระหนักระยะไกล บทความนี้ครอบคลุมการเลือกวัสดุแบริ่งน้ำหล่อลื่นคาร์บอนกราไฟต์ (กราไฟต์อิมเพรกเนตอีพ็อกซี + เสริมใยคาร์บอน) การออกแบบโครงสร้าง การจัดตัว ติดตั้ง และกรณีศึกษา Huahao Sealing",
    },
    tag: "application",
    date: "2026-07-08",
    content: {
      zh: `## 核心要点

- 船舶尾轴长期浸没在海水（含 3.5% NaCl）中运转，还会混入泥沙（粒径 0.1-0.5 mm，航速 2-4 m/s），普通铜合金衬套 1-2 年即严重磨损
- 碳石墨水润滑轴承选环氧树脂浸渍石墨（M106H），海水化学稳定，自润滑无水膜仍能干运转 30 分钟无抱轴
- 三瓣/六瓣水腔分区结构：水腔占比 35-45%，确保泥沙随冷却水排出，不嵌入摩擦面；石墨条宽 20-30 mm 均匀承载
- 尾轴直径 > 300 mm 推荐碳纤维增强环氧浸渍石墨，抗压强度从 180 MPa 提升至 280 MPa，抗冲击 50%
- 华豪密封在某 25000DWT 散货船尾轴改造中，将铜衬套寿命从 1.5 年延长至 8 年，年维护成本降低 60%

船舶螺旋桨尾轴轴承是船舶动力传动系统的关键部件，其性能直接关系到航行安全。传统铜合金衬套在海水 + 泥沙工况下磨损快、需要定期进坞更换。碳石墨水润滑轴承凭借耐磨、耐腐蚀、自润滑、无油污染的优势，成为铜衬套的理想替代品。本文结合霍邱县华豪密封件有限公司在多家船舶修造厂的应用经验，介绍碳石墨水润滑轴承选型要点。

## 一、工况特性

### 1.1 典型工况参数

- 介质：海水（含盐度 3.0-3.8% NaCl，pH 7.5-8.4）+ 泥沙（含沙量 0.1-1.0 kg/m³，长江口可达 5 kg/m³）
- 航速：2-14 节（1-7 m/s），对应尾轴线速度 3-15 m/s
- 载荷：螺旋桨推力 + 轴自重 + 螺旋桨偏心激振力，比压 0.5-2.0 MPa
- 温度：海水 0-35℃，近岸船舶可达 40℃

### 1.2 失效模式

传统锡青铜（ZCuSn10P1）衬套失效统计：泥沙磨料磨损（55%，沟槽深 1-3 mm）、海水电化学腐蚀（25%，点蚀坑 2-5 mm）、润滑不良抱轴（15%）、疲劳裂纹（5%）。平均寿命 1-1.5 年，每 2 年需进坞更换，费用 20-50 万元/次。

## 二、材料选型

### 2.1 环氧树脂浸渍石墨

船舶水润滑轴承首选环氧树脂浸渍石墨 M106K，关键性能：

- 海水稳定性：3.5% NaCl 溶液浸泡 3000 小时，重量变化 < 0.1%，无溶胀
- 自润滑性：水膜破裂后（如船舶搁浅、启动瞬间），仍可干运转 30 分钟不抱轴，摩擦系数 < 0.3
- 耐磨性：泥沙工况下磨损率 0.03-0.05 mm/1000h，是铜合金的 1/5-1/8
- 无油无污染：以海水为润滑介质，不消耗润滑油，零排放满足 MARPOL 公约

对比酚醛浸渍石墨：环氧耐海水（pH 8）更稳定，酚醛在弱碱中水解。对比呋喃浸渍：呋喃耐温更高但成本高，常温海水工况环氧性价比最优。

### 2.2 碳纤维增强型

尾轴直径 > 300 mm 或重型船舶（油轮、散货船）推荐 碳纤维增强环氧浸渍石墨：

- 抗压强度：180 MPa → 280 MPa（+56%）
- 抗冲击强度：0.8 J/cm² → 1.2 J/cm²（+50%）
- 成本增加约 25%，但寿命延长 30-50%

### 2.3 配对轴材料

尾轴包不锈钢 316L 或堆焊钴基合金（Stellite 6），硬度 HV 350 以上。避免普通碳钢轴（海水锈蚀 + 泥沙磨损）。

## 三、结构设计

### 3.1 三瓣/六瓣水腔结构

水润滑轴承采用瓣式结构，将石墨条嵌入橡胶基体（或金属基体 + 橡胶减震层），形成交替的石墨承载条与水腔：

- 三瓣：适用于小径（< 200 mm），结构简单
- 六瓣：适用于大径（> 300 mm），水腔占比 40%，承载均匀
- 水腔比例：35-45%，过高承载面积不足，过低泥沙排不出去
- 石墨条宽度：20-30 mm，比压控制在 1.0 MPa 以下

### 3.2 轴向水流通路

轴承内壁开设 1-2 条轴向螺旋水槽（深度 5-8 mm），引导海水从前端进入、后端排出，形成连续冷却和泥沙冲洗。流速 0.5-1.0 m/s，确保泥沙不沉积。

### 3.3 橡胶减震层

石墨条与金属基体之间设置 3-5 mm 丁苯橡胶（SBR）减震层，吸收螺旋桨激振和船体变形，避免石墨条脆断。

## 四、安装找正要点

### 4.1 轴承压装

- 干冰冷却石墨条外径 -40 ~ -30℃，收缩后压入轴承座，过盈量 0.08-0.12 mm
- 禁止直接敲击石墨条，受力面垫木板
- 石墨条端面与轴承座端面齐平，公差 ±0.2 mm

### 4.2 尾轴找正

- 轴系法兰偏移 < 0.05 mm，曲折 < 0.05 mm/m
- 轴承内径比尾轴大 0.6-1.0 mm（直径间隙），保证水膜厚度
- 试运转 2 小时检查温升 < 20℃，无异常噪音

## 五、华豪密封案例

某海运公司 25000DWT 散货船（尾轴直径 340 mm，轴长 12 m，额定功率 3000 kW），原用锡青铜衬套平均寿命 1.5 年，每次进坞更换费用约 35 万元（含坞费、人工费、备件）。2018 年改用华豪密封 M106H-CF 碳纤维增强环氧石墨六瓣轴承 + Stellite 6 堆焊尾轴方案后，截至 2026 年已运行 8 年，累计航行 48 万海里，拆检磨损量仅 0.25 mm，预计剩余寿命 5-6 年。8 年累计节约维护成本约 280 万元，同时消除了润滑油泄漏风险。

选型核心：轴径/载荷决定材料等级（重型选 CF 增强型）、泥沙含量决定水腔比例（含沙量高选 40-45%）、海水环境决定浸渍剂（环氧耐弱碱海水）。`,
      en: `## Key Takeaways

- Marine stern shafts operate continuously immersed in seawater (3.5% NaCl) entrained with sediment (0.1-0.5 mm particle size, 2-4 m/s velocity); conventional copper alloy bushings wear severely in 1-2 years
- Carbon graphite water-lubricated bearings use epoxy-impregnated graphite (M106H), chemically stable in seawater, self-lubricating allowing 30-minute dry run without shaft seizure even if water film breaks
- 3-lobe/6-lobe water chamber zoning: 35-45% water chamber ratio ensures sediment flushes out with cooling water without embedding; 20-30 mm wide graphite strips provide uniform load distribution
- Stern shafts >300 mm diameter recommend carbon-fiber-reinforced graphite (M106H-CF), compressive strength increased from 180 to 280 MPa, impact resistance +50%
- Huahao Sealing extended copper bushing life from 1.5 to 8 years in a 25000 DWT bulk carrier stern shaft revamp, reducing annual maintenance cost by 60%

Marine propeller stern shaft bearings are critical components of the ship's power transmission system; their performance directly relates to navigation safety. Traditional copper alloy bushings wear rapidly under seawater + sediment conditions and require regular dry-docking for replacement. With the advantages of wear resistance, corrosion resistance, self-lubrication, and zero oil pollution, carbon graphite water-lubricated bearings become the ideal alternative to copper bushings. Based on Huahao Sealing's application experience at multiple shipyards, this article introduces carbon graphite water-lubricated bearing selection points.

## 1. Service Characteristics

### 1.1 Typical Service Parameters

- Media: seawater (3.0-3.8% NaCl salinity, pH 7.5-8.4) + sediment (0.1-1.0 kg/m³ sediment content, up to 5 kg/m³ at Yangtze estuary)
- Speed: 2-14 knots (1-7 m/s), corresponding stern shaft linear velocity 3-15 m/s
- Load: propeller thrust + shaft dead weight + propeller eccentric excitation force, specific pressure 0.5-2.0 MPa
- Temperature: seawater 0-35℃, coastal vessels up to 40℃

### 1.2 Failure Modes

Conventional tin bronze (ZCuSn10P1) bushing failure statistics: sediment abrasive wear (55%, groove depth 1-3 mm), seawater electrochemical corrosion (25%, pitting pits 2-5 mm), poor lubrication shaft seizure (15%), fatigue cracking (5%). Average life is 1-1.5 years, requiring dry-dock replacement every 2 years at a cost of 200000-500000 CNY per occurrence.

## 2. Material Selection

### 2.1 Epoxy Resin-Impregnated Graphite

For marine water-lubricated bearings, epoxy resin-impregnated graphite M106K is preferred, with key properties:

- Seawater stability: 3.5% NaCl solution immersion for 3000 hours, weight change <0.1%, no swelling
- Self-lubricating: after water film rupture (e.g. ship grounding, start-up moment), still allows 30-minute dry run without shaft seizure, friction coefficient <0.3
- Wear resistance: sediment service wear rate 0.03-0.05 mm/1000h, 1/5-1/8 of copper alloy
- Oil-free zero pollution: uses seawater as lubricating medium, no lubricating oil consumption, zero discharge meeting MARPOL Convention

Compared to phenolic-impregnated graphite: epoxy is more stable in seawater (pH 8); phenolic hydrolyzes in weak alkali. Compared to furan-impregnated: furan has higher temperature rating but higher cost; epoxy offers the best cost-performance for ambient seawater service.

### 2.2 Carbon Fiber-Reinforced Type

For stern shafts >300 mm diameter or heavy vessels (tankers, bulk carriers), M106H-CF (carbon-fiber-reinforced epoxy-impregnated graphite) is recommended:

- Compressive strength: 180 → 280 MPa (+56%)
- Impact strength: 0.8 → 1.2 J/cm² (+50%)
- Cost increases ~25%, but life extends 30-50%

### 2.3 Mating Shaft Material

Stern shaft clad with 316L stainless steel or overlaid with cobalt-base alloy (Stellite 6), hardness above HV 350. Avoid ordinary carbon steel shafts (seawater rust + sediment wear).

## 3. Structural Design

### 3.1 3-Lobe/6-Lobe Water Chamber Structure

Water-lubricated bearings use a lobe-type structure, embedding graphite strips into a rubber matrix (or metal matrix + rubber damping layer), forming alternating graphite load-carrying strips and water chambers:

- 3-lobe: suitable for small diameters (<200 mm), simple structure
- 6-lobe: suitable for large diameters (>300 mm), 40% water chamber ratio, uniform load
- Water chamber ratio: 35-45%; too high lacks load area, too low cannot flush sediment
- Graphite strip width: 20-30 mm, specific pressure controlled below 1.0 MPa

### 3.2 Axial Water Flow Path

1-2 axial spiral water grooves (5-8 mm depth) on the bearing inner wall guide seawater entering from the front end and discharging from the rear, forming continuous cooling and sediment flushing. Flow velocity 0.5-1.0 m/s ensures no sediment deposition.

### 3.3 Rubber Damping Layer

3-5 mm styrene-butadiene rubber (SBR) damping layer between graphite strips and metal matrix absorbs propeller vibration and hull deformation, preventing graphite strip brittle fracture.

## 4. Installation Alignment Points

### 4.1 Bearing Press-Fit

- Dry-ice cool graphite strip OD to -40 ~ -30℃, shrink then press into bearing housing, interference 0.08-0.12 mm
- Direct hammering of graphite strips is prohibited; force-bearing face padded with wood board
- Graphite strip end face flush with bearing housing, tolerance ±0.2 mm

### 4.2 Stern Shaft Alignment

- Shafting flange offset <0.05 mm, deflection <0.05 mm/m
- Bearing ID larger than stern shaft by 0.6-1.0 mm (diametral clearance), ensuring water film thickness
- 2-hour trial run, check temperature rise <20℃, no abnormal noise

## 5. Huahao Sealing Case Study

A shipping company's 25000 DWT bulk carrier (stern shaft diameter 340 mm, shaft length 12 m, rated power 3000 kW) originally used tin bronze bushings averaging 1.5 years life, each dry-dock replacement costing about 350000 CNY (including dock fee, labor, spare parts). After switching to Huahao Sealing's M106H-CF carbon-fiber-reinforced epoxy graphite 6-lobe bearing + Stellite 6 overlaid stern shaft solution in 2018, as of 2026 it has operated for 8 years, accumulated 480000 nautical miles sailing, with inspection wear of only 0.25 mm. Estimated remaining life is 5-6 years. Over 8 years cumulative maintenance cost saving is about 2800000 CNY, while eliminating lubricating oil leakage risk.

Selection core: shaft diameter/load determines material grade (heavy-duty selects CF reinforced type), sediment content determines water chamber ratio (high sediment selects 40-45%), seawater environment determines impregnant (epoxy resistant to weak alkaline seawater).`,
      vi: `## Điểm chính

- Trục sau tàu hoạt động liên tục ngập trong nước biển (3.5% NaCl) có chứa bồi cát (kích thước hạt 0.1-0.5 mm, vận tốc 2-4 m/s); bạc lót hợp kim đồng thông thường mài mòn nghiêm trọng sau 1-2 năm
- Vòng bi bôi trơn nước than chì carbon dùng than chì tẩm nhựa epoxy (M106H), ổn định hóa học trong nước biển, tự bôi trơn cho phép chạy khô 30 phút không kẹt trục ngay cả khi màng nước vỡ
- Cấu trúc chia khoang nước 3/6 thùy: tỷ lệ khoang nước 35-45% đảm bảo bồi cát được xả cùng nước làm mát không lắng đọng; dải than chì rộng 20-30 mm phân bố tải đều
- Trục sau đường kính >300 mm khuyến nghị than chì cốt sợi carbon (M106H-CF), cường độ chịu nén từ 180 lên 280 MPa, chống va đập +50%
- Huahao Sealing đã kéo dài tuổi thọ bạc lót đồng từ 1.5 lên 8 năm trong dự án cải tạo trục sau tàu hàng rời 25000 DWT, giảm chi phí bảo trì hàng năm 60%

Vòng bi trục sau cánh quạt tàu là bộ phận then chốt của hệ thống truyền lực tàu; hiệu năng của chúng liên quan trực tiếp đến an toàn hàng hải. Bạc lót hợp kim đồng truyền thống mài mòn nhanh trong điều kiện nước biển + bồi cát và cần thay thế định kỳ vào bến tàu khô. Với lợi ích chống mài mòn, chống ăn mòn, tự bôi trơn và không ô nhiễm dầu, vòng bi bôi trơn nước than chì carbon trở thành lựa chọn thay thế lý tưởng cho bạc lót đồng. Dựa trên kinh nghiệm ứng dụng của Huahao Sealing tại nhiều nhà máy đóng tàu, bài viết giới thiệu điểm chọn vòng bi bôi trơn nước than chì carbon.

## 1. Đặc tính điều kiện

### 1.1 Thông số điều kiện điển hình

- Môi chất: nước biển (độ mặn 3.0-3.8% NaCl, pH 7.5-8.4) + bồi cát (nồng độ cát 0.1-1.0 kg/m³, cửa sông Dương Tử lên đến 5 kg/m³)
- Vận tốc: 2-14 hải lý/giờ (1-7 m/s), vận tốc tuyến tính trục sau tương ứng 3-15 m/s
- Tải: lực đẩy cánh quạt + trọng lượng trục + lực kích động lệch tâm cánh quạt, áp suất riêng 0.5-2.0 MPa
- Nhiệt độ: nước biển 0-35℃, tàu ven bờ lên đến 40℃

### 1.2 Chế độ hỏng

Thống kê hỏng bạc lót đồng thiếc thiếc (ZCuSn10P1) truyền thống: mài mòn mài mòn bồi cát (55%, rãnh sâu 1-3 mm), ăn mòn điện hóa nước biển (25%, hố ăn mòn 2-5 mm), kẹt trục do bôi trơn kém (15%), nứt mỏi (5%). Tuổi thọ trung bình 1-1.5 năm, cần thay vào bến tàu khô mỗi 2 năm với chi phí 200000-500000 CNY mỗi lần.

## 2. Chọn vật liệu

### 2.1 Than chì tẩm nhựa epoxy

Cho vòng bi bôi trơn nước tàu, than chì tẩm nhựa epoxy M106H được ưu tiên, với đặc tính then chốt:

- Ổn định nước biển: ngâm dung dịch NaCl 3.5% 3000 giờ, thay đổi khối lượng <0.1%, không trương nở
- Tự bôi trơn: sau khi vỡ màng nước (ví dụ tàu mắc cạn, lúc khởi động), vẫn chạy khô 30 phút không kẹt trục, hệ số ma sát <0.3
- Chống mài mòn: tỷ lệ mài mòn trong điều kiện bồi cát 0.03-0.05 mm/1000giờ, 1/5-1/8 của hợp kim đồng
- Không dầu không ô nhiễm: dùng nước biển làm môi chất bôi trơn, không tiêu hao dầu nhờn, không thải đạt công ước MARPOL

So với than chì tẩm phenolic: epoxy ổn định hơn trong nước biển (pH 8); phenolic thủy phân trong kiềm yếu. So với tẩm furan: furan chịu nhiệt cao hơn nhưng giá cao hơn; epoxy cho hiệu quả chi phí-tối ưu nhất cho điều kiện nước biển nhiệt độ môi trường.

### 2.2 Loại cốt sợi carbon

Cho trục sau đường kính >300 mm hoặc tàu hạng nặng (tàu dầu, tàu hàng rời), M106H-CF (than chì tẩm epoxy cốt sợi carbon) được khuyến nghị:

- Cường độ chịu nén: 180 → 280 MPa (+56%)
- Cường độ chống va đập: 0.8 → 1.2 J/cm² (+50%)
- Chi phí tăng ~25%, nhưng tuổi thọ kéo dài 30-50%

### 2.3 Vật liệu trục ma đối

Trục sau bọc thép không gỉ 316L hoặc hàn bề mặt hợp kim cơ bản coban (Stellite 6), độ cứng trên HV 350. Tránh trục thép cacbon thông thường (rỉ nước biển + mài mòn bồi cát).

## 3. Thiết kế kết cấu

### 3.1 Kết cấu khoang nước 3/6 thùy

Vòng bi bôi trơn nước dùng cấu trúc kiểu thùy, nhúng dải than chì vào ma trận cao su (hoặc ma trận kim loại + lớp giảm xóc cao su), tạo thành dải chịu tải than chì và khoang nước xen kẽ:

- 3 thùy: phù hợp đường kính nhỏ (<200 mm), kết cấu đơn giản
- 6 thùy: phù hợp đường kính lớn (>300 mm), tỷ lệ khoang nước 40%, tải đều
- Tỷ lệ khoang nước: 35-45%; quá cao thiếu diện tích chịu tải, quá thấp không xả được bồi cát
- Rộng dải than chì: 20-30 mm, áp suất riêng kiểm soát dưới 1.0 MPa

### 3.2 Đường dòng chảy nước trục

1-2 rãnh nước xoắn ốc trục (sâu 5-8 mm) trên thành trong vòng bi dẫn nước biển đi vào từ đầu trước và xả từ đầu sau, tạo làm mát liên tục và xả bồi cát. Vận tốc dòng chảy 0.5-1.0 m/s đảm bảo không lắng đọng bồi cát.

### 3.3 Lớp giảm xóc cao su

Lớp giảm xóc cao su styrene-butadiene (SBR) dày 3-5 mm giữa dải than chì và ma trận kim loại hấp thụ rung động cánh quạt và biến dạng thân tàu, tránh gãy giòn dải than chì.

## 4. Điểm lắp đặt căn chỉnh

### 4.1 Ép lắp vòng bi

- Làm nguội bằng đá khô ngoại kính dải than chì xuống -40 ~ -30℃, co lại sau đó ép vào hộp vòng bi, lượng can thiệp 0.08-0.12 mm
- Cấm trực tiếp gõ dải than chì; mặt chịu lực đệm gỗ
- Mặt đầu dải than chì thẳng hàng với mặt đầu hộp vòng bi, dung sai ±0.2 mm

### 4.2 Căn chỉnh trục sau

- Độ lệch mặt bích hệ trục <0.05 mm, độ cong <0.05 mm/m
- Nội kính vòng bi lớn hơn trục sau 0.6-1.0 mm (khe hở đường kính), đảm bảo độ dày màng nước
- Chạy thử 2 giờ, kiểm tra tăng nhiệt <20℃, không có tiếng ồn bất thường

## 5. Case study Huahao Sealing

Tàu hàng rời 25000 DWT của công ty vận tải biển (đường kính trục sau 340 mm, dài trục 12 m, công suất định mức 3000 kW), ban đầu dùng bạc lót đồng thiếc thiếc tuổi thọ trung bình 1.5 năm, mỗi lần thay vào bến tàu khô chi phí khoảng 350000 CNY (bao gồm phí bến, công nhân, phụ tùng). Năm 2018 chuyển sang giải pháp vòng bi 6 thùy than chì epoxy cốt sợi carbon M106H-CF + trục sau hàn bề mặt Stellite 6 của Huahao Sealing, đến năm 2026 đã chạy 8 năm, tích lũy hàng hải 480000 hải lý, kiểm tra độ mài mòn chỉ 0.25 mm. Ước tính tuổi thọ còn lại 5-6 năm. Trong 8 năm tiết kiệm chi phí bảo trì tích lũy khoảng 2800000 CNY, đồng thời loại bỏ rủi ro rò rỉ dầu nhờn.

Chọn lõi: đường kính trục/tải quyết định cấp vật liệu (hạng nặng chọn loại cốt CF), hàm lượng bồi cát quyết định tỷ lệ khoang nước (cát nhiều chọn 40-45%), môi trường nước biển quyết định chất tẩm (epoxy chống nước biển kiềm yếu).`,
      th: `## ประเด็นสำคัญ

- เพลาหางเรือทำงานต่อเนื่องแช่น้ำทะเล (3.5% NaCl) พร้อมตะกอน (ขนาดอนุภาค 0.1-0.5 mm ความเร็ว 2-4 m/s); บุชชิ่งโลหะผสมทองแดงทั่วไปสึกหรออย่างรุนแรงใน 1-2 ปี
- แบริ่งน้ำหล่อลื่นคาร์บอนกราไฟต์ใช้กราไฟต์อิมเพรกเนตอีพ็อกซี (M106H) คงที่ทางเคมีในน้ำทะเล หล่อลื่นตัวเองให้ทำงานแบบแห้ง 30 นาทีโดยไม่ยึดเพลาแม้ฟิล์มน้ำจะแตก
- โครงสร้างแบ่งช่องน้ำ 3/6 โลบ: อัตราส่วนช่องน้ำ 35-45% รับประกันตะกอนถูกชะออกพร้อมน้ำหล่อเย็นโดยไม่ฝัง; แถบกราไฟต์กว้าง 20-30 mm ให้การแบ่งภาระสม่ำเสมอ
- เพลาหางเส้นผ่านศูนย์กลาง >300 mm แนะนำกราไฟต์เสริมใยคาร์บอน (M106H-CF) ความต้านทานการอัดเพิ่มจาก 180 เป็น 280 MPa ทนต่อการกระแทก +50%
- Huahao Sealing ได้ยืดอายุบุชชิ่งทองแดงจาก 1.5 เป็น 8 ปีในโครงการปรับปรุงเพลาหางเรือขนส่งสินค้าถุง 25000 DWT ลดค่าบำรุงรักษาต่อปีลง 60%

แบริ่งเพลาหางพัดลมเรือเป็นส่วนประกอบสำคัญของระบบส่งกำลังเรือ; ประสิทธิภาพของมันสัมพันธ์โดยตรงกับความปลอดภัยในการเดินเรือ บุชชิ่งโลหะผสมทองแดงแบบดั้งเดิมสึกหรอเร็วในสภาวะน้ำทะเล + ตะกอน และต้องเปลี่ยนอย่างสม่ำเสมอด้วยการเข้าฝากเรือแห้ง ด้วยข้อได้เปรียบของการต้านทานการสึกหรอ การต้านทานการกัดกร่อน การหล่อลื่นตัวเอง และไม่มีมลพิษน้ำมัน แบริ่งน้ำหล่อลื่นคาร์บอนกราไฟต์กลายเป็นทางเลือกทดแทนที่เหมาะสมสำหรับบุชชิ่งทองแดง จากประสบการณ์การใช้งานของ Huahao Sealing ที่โรงส่งเรือหลายแห่ง บทความนี้แนะนำจุดสำคัญในการเลือกแบริ่งน้ำหล่อลื่นคาร์บอนกราไฟต์

## 1. ลักษณะสภาวะการทำงาน

### 1.1 พารามิเตอร์สภาวะทั่วไป

- ตัวกลาง: น้ำทะเล (ความเค็ม 3.0-3.8% NaCl, pH 7.5-8.4) + ตะกอน (ความเข้มข้นของกรวด 0.1-1.0 กก./ลูกบาศก์เมตร, ปากแม่น้ำยางซีถึง 5 กก./ลูกบาศก์เมตร)
- ความเร็ว: 2-14 น็อต (1-7 ม./วินาที) ความเร็วเชิงเส้นของเพลาหางที่สอดคล้องกัน 3-15 ม./วินาที
- ภาระ: แรงผลักจากพัดลม + น้ำหนักตัวของเพลา + แรงกระตุ้นออกศูนย์กลางจากพัดลม ความดันจำเพาะ 0.5-2.0 MPa
- อุณหภูมิ: น้ำทะเล 0-35℃, เรือชายฝั่งถึง 40℃

### 1.2 รูปแบบความเสียหาย

สถิติความเสียหายของบุชชิ่งทองแดงดีบุก (ZCuSn10P1) แบบดั้งเดิม: การสึกหรอจากสารขัดสีจากตะกอน (55%, ร่องลึก 1-3 มม.), การกัดกร่อนไฟฟ้าเคมีของน้ำทะเล (25%, หลุมที่เกิดการกัดกร่อน 2-5 มม.), การยึดเพลาเนื่องจากการหล่อลื่นไม่ดี (15%), การแตกร้าวจากความเหนื่อยล้า (5%) อายุการใช้งานเฉลี่ย 1-1.5 ปี ต้องเปลี่ยนเมื่อเข้าฝากเรือแห้งทุกๆ 2 ปี โดยมีค่าใช้จ่าย 200000-500000 CNY ต่อครั้ง

## 2. การเลือกวัสดุ

### 2.1 กราไฟต์อิมเพรกเนตเรซินอีพ็อกซี

สำหรับแบริ่งน้ำหล่อลื่นของเรือ กราไฟต์อิมเพรกเนตเรซินอีพ็อกซี M106H เป็นที่ต้องการ มีคุณสมบัติหลัก:

- ความเสถียรของน้ำทะเล: แช่ในสารละลาย NaCl 3.5% เป็นเวลา 3000 ชั่วโมง การเปลี่ยนแปลงน้ำหนัก <0.1% ไม่มีการบวม
- การหล่อลื่นตัวเอง: หลังฟิล์มน้ำแตก (เช่น เรืออุดตัน ช่วงเวลาเริ่มต้น) ยังให้ทำงานแบบแห้ง 30 นาทีโดยไม่ยึดเพลา ค่าสัมประสิทธิ์แรงเสียดสี <0.3
- ความต้านทานการสึกหรอ: อัตราการสึกหรอในสภาวะตะกอน 0.03-0.05 มม./1000ชม., 1/5-1/8 ของโลหะผสมทองแดง
- ไม่มีน้ำมันไม่มีมลพิษ: ใช้น้ำทะเลเป็นตัวกลางหล่อลื่น ไม่ใช้จ่ายน้ำมันหล่อลื่น ไม่มีการปล่อยปลอดภัยตามสนธิสัญญา MARPOL

เปรียบเทียบกับกราไฟต์อิมเพรกเนตฟีนอลิก: อีพ็อกซีคงที่กว่าในน้ำทะเล (pH 8); ฟีนอลิกไฮโดรไลซิสในด่างอ่อน เปรียบเทียบกับอิมเพรกเนตฟูแรน: ฟูแรนทนอุณหภูมิสูงกว่าแต่ค่าใช้จ่ายสูงกว่า; อีพ็อกซีให้ประสิทธิภาพค่าใช้จ่ายที่ดีที่สุดสำหรับสภาวะน้ำทะเลที่อุณหภูมิแวดล้อม

### 2.2 ชนิดเสริมใยคาร์บอน

สำหรับเพลาหางเส้นผ่านศูนย์กลาง >300 มม. หรือเรือหนัก (เรือขนส่งน้ำมัน เรือขนส่งสินค้าถุง) M106H-CF (กราไฟต์อิมเพรกเนตอีพ็อกซีเสริมใยคาร์บอน) แนะนำ:

- ความต้านทานการอัด: 180 → 280 MPa (+56%)
- ความต้านทานการกระแทก: 0.8 → 1.2 J/cm² (+50%)
- ค่าใช้จ่ายเพิ่ม ~25% แต่อายุการใช้งานยืด 30-50%

### 2.3 วัสดุเพลาประกบ

เพลาหางเคลือบด้วยเหล็กกล้าไร้สนิม 316L หรือชุบด้วยโลหะผสมฐานโคบอลต์ (Stellite 6) ความแข็งเหนือ HV 350 หลีกเลี่ยงเพลาเหล็กคาร์บอนทั่วไป (สนิมน้ำทะเล + การสึกหรอจากตะกอน)

## 3. การออกแบบโครงสร้าง

### 3.1 โครงสร้างช่องน้ำ 3/6 โลบ

แบริ่งน้ำหล่อลื่นใช้โครงสร้างแบบโลบ ซึ่งฝังแถบกราไฟต์ไว้ในเมทริกซ์ยาง (หรือเมทริกซ์โลหะ + ชั้นลดการสั่นสะเทือนยาง) สร้างแถบรับภาระกราไฟต์และช่องน้ำสลับกัน:

- 3 โลบ: เหมาะสำหรับเส้นผ่านศูนย์กลางเล็ก (<200 มม.) โครงสร้างง่าย
- 6 โลบ: เหมาะสำหรับเส้นผ่านศูนย์กลางใหญ่ (>300 มม.) อัตราส่วนช่องน้ำ 40% ภาระสม่ำเสมอ
- อัตราส่วนช่องน้ำ: 35-45%; สูงเกินไปขาดพื้นที่รับภาระ ต่ำเกินไปไม่สามารถชะล้างตะกอนออกได้
- ความกว้างแถบกราไฟต์: 20-30 มม. ความดันจำเพาะควบคุมให้ต่ำกว่า 1.0 MPa

### 3.2 ทางเดินน้ำตามแนวแกน

ร่องน้ำเกลียวตามแนวแกน 1-2 ร่อง (ลึก 5-8 มม.) บนผนังภายในแบริ่งนำน้ำทะเลเข้าจากด้านหน้าและปล่อยออกจากด้านหลัง สร้างการระบายความร้อนอย่างต่อเนื่องและการชะล้างตะกอน ความเร็วการไหล 0.5-1.0 ม./วินาที รับประกันไม่มีการตกตะกอนของตะกอน

### 3.3 ชั้นลดการสั่นสะเทือนยาง

ชั้นลดการสั่นสะเทือนยางสไตรีน-บิวตาไดอีน (SBR) หนา 3-5 มม. ระหว่างแถบกราไฟต์และเมทริกซ์โลหะ ดูดซับการสั่นสะเทือนของพัดลมและการบิดเบี้ยวของตัวเรือ ป้องกันแถบกราไฟต์แตกเป็นชิ้น

## 4. จุดการจัดตัวและการติดตั้ง

### 4.1 การกดติดแบริ่ง

- เย็นด้วยน้ำแข็งแห้งเส้นผ่านศูนย์กลางนอกของแถบกราไฟต์ลงไปที่ -40 ~ -30℃ หดตัวแล้วกดเข้าไปในตัวเรือนแบริ่ง การรบกวน 0.08-0.12 มม.
- ห้ามตอกแถบกราไฟต์โดยตรง; หน้าแรงเสียดทานวางไม้ไว้
- หน้าปลายแถบกราไฟต์เรียงตัวกับหน้าปลายตัวเรือนแบริ่ง ค่าคลาดเคลื่อน ±0.2 มม.

### 4.2 การจัดตัวเพลาหาง

- การออฟเซ็ตของแฟลงก์เพลา <0.05 มม. การเบี้ยว <0.05 มม./ม.
- เส้นผ่านศูนย์กลางภายในแบริ่งใหญ่กว่าเพลาหาง 0.6-1.0 มม. (ระยะห่างของเส้นผ่านศูนย์กลาง) รับประกันความหนาของฟิล์มน้ำ
- ทำงานทดสอบ 2 ชั่วโมง ตรวจสอบการเพิ่มขึ้นของอุณหภูมิ <20℃ ไม่มีเสียงผิดปกติ

## 5. กรณีศึกษา Huahao Sealing

เรือขนส่งสินค้าถุง 25000 DWT ของบริษัทขนส่งเรือ (เส้นผ่านศูนย์กลางเพลาหาง 340 มม. ความยาวเพลา 12 ม. กำลังไฟฟ้าที่กำหนด 3000 kW) เดิมใช้บุชชิ่งทองแดงดีบุกอายุการใช้งานเฉลี่ย 1.5 ปี แต่ละครั้งที่เปลี่ยนเมื่อเข้าฝากเรือแห้งใช้จ่ายประมาณ 350000 CNY (รวมค่าฝาก ค่าแรง ค่าอะไหล่) หลังจากเปลี่ยนเป็นโซลูชันแบริ่ง 6 โลบกราไฟต์อีพ็อกซีเสริมใยคาร์บอน M106H-CF + เพลาหางชุบ Stellite 6 ของ Huahao Sealing ในปี 2018 ณ ปี 2026 ได้ทำงานมา 8 ปี สะสมการเดินเรือ 480000 ไมล์ทะเล การตรวจสอบการสึกหรอเพียง 0.25 มม. คาดว่าอายุการใช้งานที่เหลืออีก 5-6 ปี ในช่วง 8 ปีนี้ค่าบำรุงรักษาที่ประหยัดสะสมประมาณ 2800000 CNY ในขณะเดียวกันกำจัดความเสี่ยงการรั่วซึมน้ำมันหล่อลื่น

หลักการเลือก: เส้นผ่านศูนย์กลาง/ภาระของเพลากำหนดเกรดวัสดุ (หนักรู้ใช้ CF รีอินฟอร์ซ) ปริมาณตะกอนกำหนดอัตราส่วนช่องน้ำ (ตะกอนมากใช้ 40-45%) สภาพแวดล้อมน้ำทะเลกำหนดสารอิมเพรกเนต (อีพ็อกซีต้านทานน้ำทะเลด่างอ่อน)`,
    },
  },
  {
    slug: "food-pharmaceutical-fda-grade-graphite-seal",
    title: {
      zh: "食品制药机械 FDA 级碳石墨密封应用：高温蒸汽灭菌与食品级润滑工况",
      en: "FDA-Grade Carbon Graphite Seals for Food and Pharmaceutical Machinery: High-Temperature Steam Sterilization and Food-Grade Lubrication Service",
      vi: "Vòng đệm than chì carbon cấp FDA cho máy thực phẩm và dược phẩm: Khử trùng hơi nước nhiệt độ cao và bôi trơn cấp thực phẩm",
      th: "ซีลคาร์บอนกราไฟต์เกรด FDA สำหรับเครื่องจักรอาหารและยา: การฆ่าเชื้อด้วยไอน้ำอุณหภูมิสูงและสภาวะหล่อลื่นเกรดอาหาร",
    },
    excerpt: {
      zh: "针对食品和制药行业均质机、乳化泵、洗瓶机等设备的 121-143℃ 蒸汽灭菌工况（CIP/SIP）、食品级润滑要求，本文讲解 FDA 级碳石墨密封材料（纯石墨 + 食品级树脂浸渍）、结构设计（免润滑无弹簧）、合规认证要点与华豪密封案例。",
      en: "For 121-143℃ steam sterilization (CIP/SIP) and food-grade lubrication requirements of homogenizers, emulsifying pumps, and bottle washers in food and pharmaceutical industries, this article covers FDA-grade carbon graphite seal materials (pure graphite + food-grade resin impregnation), structural design (lubrication-free springless), compliance certification points, and Huahao Sealing cases.",
      vi: "Dành cho điều kiện khử trùng hơi nước 121-143℃ (CIP/SIP) và yêu cầu bôi trơn cấp thực phẩm của máy đồng nhất, bơm nhũ hóa, máy rửa chai trong thực phẩm và dược phẩm, bài viết trình bày vật liệu vòng đệm than chì carbon cấp FDA (than chì nguyên chất + tẩm nhựa cấp thực phẩm), thiết kế kết cấu (không cần bôi trơn không lò xo), điểm chứng nhận tuân thủ và case study Huahao Sealing.",
      th: "สำหรับสภาวะฆ่าเชื้อด้วยไอน้ำ 121-143℃ (CIP/SIP) และข้อกำหนดหล่อลื่นเกรดอาหารของเครื่องโฮโมจีไนเซอร์ ปั๊มอิมัลชัน และเครื่องล้างขวดในอุตสาหกรรมอาหารและยา บทความนี้ครอบคลุมวัสดุซีลคาร์บอนกราไฟต์เกรด FDA (กราไฟต์บริสุทธิ์ + อิมเพรกเนตเรซินเกรดอาหาร) การออกแบบโครงสร้าง จุดสำคัญของการรับรอง และกรณีศึกษา Huahao Sealing",
    },
    tag: "application",
    date: "2026-07-10",
    content: {
      zh: `## 核心要点

- 食品/制药设备需定期进行 121℃ 饱和蒸汽灭菌（SIP，30 分钟）或 143℃ 超高温（UHT）灭菌，普通橡胶密封件耐温不足会泄漏
- 碳石墨密封必须符合 FDA 21 CFR 177.2410（接触食品的石墨制品）和欧盟 1935/2004/EC 食品接触材料法规
- 材料选食品级环氧树脂浸渍石墨（浸渍剂符合 EP 级食品级树脂标准），不添加重金属润滑剂，不释放 BPA、塑化剂等有害物质
- 结构设计采用无弹簧全浮动式，避免弹簧藏污纳垢、无法 CIP 清洗；端面比压仅由介质压力提供
- 华豪密封为某乳品企业 36 台高压均质机配套，密封寿命 18 个月，通过 FDA 食品接触检测

食品和制药行业对接触产品的所有零部件有严格的卫生要求：不能滋生细菌、不能释放有害物质、必须可清洗消毒（CIP/SIP）。传统橡胶 O 型圈和弹簧机械密封在灭菌工况下存在耐温不足、藏污纳垢、无法彻底清洗的问题。FDA 级碳石墨密封凭借化学惰性、耐高温、易清洗的特性，成为食品制药行业密封的首选方案。本文结合霍邱县华豪密封件有限公司在乳品、饮料、制药等行业的应用经验，介绍食品级碳石墨密封选型要点。

## 一、工况特性

### 1.1 典型工况参数

- 蒸汽灭菌（SIP）：121℃ 饱和蒸汽，压力 0.2 MPa，每次 30 分钟，每天 2-4 次
- 超高温灭菌（UHT）：135-143℃，3-5 秒瞬时灭菌
- 原位清洗（CIP）：80-90℃ 热碱液（NaOH 1-2%）+ 70-80℃ 热酸液（HNO₃ 1-2%）循环清洗
- 润滑介质：仅允许食品级润滑脂（NLGI 2 级，NSF H1 注册）或工艺介质自身润滑

### 1.2 失效模式

传统密封件失效统计：橡胶 O 型圈热老化破裂（40%，FKM 在 135℃ 蒸汽反复老化 100 次后永久压缩变形率 > 30%）、弹簧腔积聚物料（30%，CIP 清洗死角滋生细菌）、润滑脂溶解进入产品（20%）、密封面热变形泄漏（10%）。

## 二、材料选型与合规认证

### 2.1 FDA 级食品级石墨

选型原则：基材 + 浸渍剂均需符合食品接触标准。华豪密封食品级石墨 M120F-FDA：

- 基材：高纯等静压石墨，灰分 < 0.1%，符合 FDA 21 CFR 177.2410
- 浸渍剂：食品级环氧树脂（符合 EP 食品接触级标准），浸渍剂析出物符合 FDA 总迁移量（OM）< 10 mg/dm²
- 重金属：Pb、Cd、Hg、Cr⁶⁺ 均 < 0.01 ppm，符合欧盟 EU 10/2011 食品接触材料法规
- 检测：每批提供 FDA 食品接触检测报告、RoHS 报告、重金属含量报告

### 2.2 禁用材料清单

- 严禁使用含铜、铅、镉等重金属的巴氏合金浸渍石墨
- 严禁使用普通工业级酚醛树脂（含游离苯酚和甲醛，有致癌风险）
- 严禁使用含 MoS₂、PTFE 微粉填充的石墨（虽然耐磨但存在释放风险）

### 2.3 配对材料

配对环选无压烧结碳化硅（SSiC），符合 FDA 21 CFR 177.2410，无游离硅析出。避免反应烧结 SiC（含 8-15% 游离硅，食品级认证困难）。

## 三、结构设计

### 3.1 无弹簧全浮动式结构

食品/制药工况严禁使用弹簧机械密封（弹簧圈、弹簧座间隙为 CIP 死角，无法彻底清洗）。推荐全浮动式结构：

- 无弹簧设计：石墨环的轴向贴合力仅由介质压力和 O 型圈预压缩提供，无藏污死角
- O 型圈选用食品级硅橡胶（VMQ，FDA 177.2600）或 Kalrez Spectrum 6380（耐强酸碱清洗）
- 所有与产品接触的表面粗糙度 Ra ≤ 0.8 μm，无锐边、凹坑、缝隙

### 3.2 双端面 + 隔离液方案

对高压均质机（出口压力 20-60 MPa）、乳化泵等高价值产品工况，采用串联双端面结构：

- 内侧密封接触工艺介质（食品级石墨 + SSiC）
- 外侧密封接触隔离液（去离子水 + 0.5% 食品级杀菌剂，压力高于介质 0.2 MPa）
- 隔离液带压力传感器，泄漏即时报警，杜绝产品污染

### 3.3 灭菌温度控制

CIP/SIP 过程中温度骤变（常温 → 121℃ → 常温）产生热应力。设计措施：

- 石墨环采用薄壁设计（壁厚 4-6 mm）减少热变形
- 密封座设置预热/预冷腔，使温度变化率 < 5℃/min
- 端面比压降至 0.2-0.3 MPa，降低热变形挤压风险

## 四、合规与验证要点

### 4.1 文件要求

食品/制药客户通常要求以下文档：

- FDA 21 CFR 177.2410 合规声明 + 第三方检测报告（SGS 或 Intertek）
- 欧盟 EU 10/2011 总迁移量检测报告（4% 乙酸、10% 乙醇、橄榄油模拟液）
- NSF H1 食品级润滑脂认证（如使用润滑）
- 3.1 材质证书（EN 10204）

### 4.2 现场验证

- CIP/SIP 循环 100 次后拆检：密封面无裂纹、O 型圈压缩永久变形率 < 20%
- 微生物检测：CIP 后密封死角处涂抹采样，菌落总数 < 1 CFU/cm²
- 产品污染检测：连续运行 72 小时，产品中无石墨颗粒检出（粒径 > 10 μm）

## 五、华豪密封案例

某大型乳品企业 36 台 25 MPa 高压均质机（处理牛奶、酸奶，产能 2×6 吨/小时，每天 SIP 3 次），原用进口品牌弹簧式机械密封存在两个问题：①弹簧腔积奶垢，CIP 清洗不完全导致菌落超标，每年 2-3 次批次不合格损失约 60 万元；②FKM O 型圈反复蒸汽老化，平均寿命 6 个月。2021 年改用华豪密封 M120F-FDA 食品级石墨 + SSiC + 无弹簧全浮动式 + VMQ 食品级 O 型圈方案后：

- 密封寿命延长至 18 个月（+200%）
- 通过 FDA 食品接触材料检测（SGS 报告）
- 菌落检测连续 3 年零超标，批次不合格率从 0.8% 降至 0
- 累计节约不合格品损失 + 备件费约 250 万元

选型核心：食品接触等级决定材料牌号（必须 FDA/欧盟双认证）、清洗灭菌方式决定结构形式（SIP/CIP 选无弹簧）、产品价值决定密封等级（高值产品选双端面+隔离液）。`,
      en: `## Key Takeaways

- Food/pharmaceutical equipment requires periodic 121℃ saturated steam sterilization (SIP, 30 min) or 143℃ ultra-high temperature (UHT) sterilization; conventional rubber seals lack sufficient temperature resistance and leak
- Carbon graphite seals must comply with FDA 21 CFR 177.2410 (graphite products in food contact) and EU 1935/2004/EC food contact material regulations
- Materials use food-grade epoxy resin-impregnated graphite (impregnant meets EP food-grade resin standards), no heavy metal lubricants, no BPA, plasticizers or other harmful substance release
- Structural design uses springless full-floating type, avoiding spring dirt accumulation that cannot be CIP-cleaned; face specific pressure is provided solely by media pressure
- Huahao Sealing supplied 36 high-pressure homogenizers for a dairy enterprise; seal life is 18 months, passing FDA food contact testing

The food and pharmaceutical industries have strict hygiene requirements for all product-contact components: no bacterial growth, no harmful substance release, must be cleanable and sterilizable (CIP/SIP). Traditional rubber O-rings and spring mechanical seals under sterilization conditions have problems of insufficient temperature resistance, dirt entrapment, and inability to be thoroughly cleaned. With the advantages of chemical inertness, high-temperature resistance, and ease of cleaning, FDA-grade carbon graphite seals become the preferred sealing solution for the food and pharmaceutical industries. Based on Huahao Sealing's application experience in dairy, beverage, and pharmaceutical industries, this article introduces food-grade carbon graphite seal selection points.

## 1. Service Characteristics

### 1.1 Typical Service Parameters

- Steam sterilization (SIP): 121℃ saturated steam, pressure 0.2 MPa, 30 min per cycle, 2-4 times per day
- Ultra-high temperature sterilization (UHT): 135-143℃, 3-5 seconds instantaneous sterilization
- Clean-in-place (CIP): 80-90℃ hot alkali (NaOH 1-2%) + 70-80℃ hot acid (HNO₃ 1-2%) circulating cleaning
- Lubrication media: only food-grade grease (NLGI grade 2, NSF H1 registered) or process media self-lubrication allowed

### 1.2 Failure Modes

Conventional seal failure statistics: rubber O-ring thermal aging fracture (40%, FKM after 100 repeated 135℃ steam aging cycles, permanent compression set >30%), spring chamber material accumulation (30%, CIP dead corners breeding bacteria), grease dissolution into product (20%), seal face thermal deformation leakage (10%).

## 2. Material Selection and Compliance Certification

### 2.1 FDA-Grade Food-Grade Graphite

Selection principle: both base material and impregnant must meet food contact standards. Huahao Sealing food-grade graphite M120F-FDA:

- Base material: high-purity isostatic graphite, ash content <0.1%, complies with FDA 21 CFR 177.2410
- Impregnant: food-grade epoxy resin (complies with EP food contact grade standard), impregnant extractables meet FDA overall migration (OM) <10 mg/dm²
- Heavy metals: Pb, Cd, Hg, Cr⁶⁺ all <0.01 ppm, complies with EU EU 10/2011 food contact material regulation
- Testing: each batch provides FDA food contact test report, RoHS report, heavy metal content report

### 2.2 Prohibited Material List

- Strictly prohibit Babbitt metal-impregnated graphite containing copper, lead, cadmium and other heavy metals
- Strictly prohibit ordinary industrial-grade phenolic resin (contains free phenol and formaldehyde, carcinogenic risk)
- Strictly prohibit MoS₂, PTFE micro-powder filled graphite (though wear-resistant, presents release risk)

### 2.3 Mating Material

Mating ring uses pressureless sintered silicon carbide (SSiC), complies with FDA 21 CFR 177.2410, no free silicon precipitation. Avoid reaction-bonded SiC (contains 8-15% free silicon, food-grade certification difficult).

## 3. Structural Design

### 3.1 Springless Full-Floating Structure

Food/pharmaceutical service strictly prohibits spring mechanical seals (spring coils and spring seat gaps are CIP dead corners that cannot be thoroughly cleaned). Full-floating structure is recommended:

- Springless design: graphite ring axial closing force is provided solely by media pressure and O-ring pre-compression, no dirt entrapment dead corners
- O-rings use food-grade silicone rubber (VMQ, FDA 177.2600) or Kalrez Spectrum 6380 (resistant to strong acid-alkali cleaning)
- All product-contact surfaces roughness Ra ≤ 0.8 μm, no sharp edges, pits, gaps

### 3.2 Double Face + Barrier Fluid Solution

For high-value product services such as high-pressure homogenizers (outlet pressure 20-60 MPa) and emulsifying pumps, tandem double-face structure is adopted:

- Inner seal contacts process media (food-grade graphite + SSiC)
- Outer seal contacts barrier fluid (deionized water + 0.5% food-grade bactericide, pressure 0.2 MPa above media)
- Barrier fluid with pressure sensor provides immediate leakage alarm, eliminating product contamination

### 3.3 Sterilization Temperature Control

Temperature shocks (ambient → 121℃ → ambient) during CIP/SIP generate thermal stress. Design measures:

- Graphite ring uses thin-wall design (wall thickness 4-6 mm) to reduce thermal deformation
- Seal seat provided with preheat/precool chamber, temperature change rate <5℃/min
- Face specific pressure reduced to 0.2-0.3 MPa, reducing thermal deformation extrusion risk

## 4. Compliance and Validation Points

### 4.1 Documentation Requirements

Food/pharmaceutical customers typically require the following documents:

- FDA 21 CFR 177.2410 compliance declaration + third-party test report (SGS or Intertek)
- EU EU 10/2011 overall migration test report (4% acetic acid, 10% ethanol, olive oil simulants)
- NSF H1 food-grade grease certification (if lubrication is used)
- 3.1 material certificate (EN 10204)

### 4.2 Field Validation

- After 100 CIP/SIP cycles teardown inspection: seal face no cracks, O-ring compression permanent set <20%
- Microbiological testing: after CIP, swab sampling at seal dead corners, total colony count <1 CFU/cm²
- Product contamination testing: 72 hours continuous operation, no graphite particles detected in product (particle size >10 μm)

## 5. Huahao Sealing Case Study

A large dairy enterprise's 36 units of 25 MPa high-pressure homogenizers (processing milk, yogurt, production capacity 2×6 t/h, SIP 3 times per day) originally had two problems with imported brand spring-type mechanical seals: ① spring chamber milk scale accumulation, incomplete CIP cleaning causing colony over-limit, 2-3 unqualified batch losses per year of about 600000 CNY; ② FKM O-ring repeated steam aging, average life 6 months. After switching to Huahao Sealing's M120F-FDA food-grade graphite + SSiC + springless full-floating + VMQ food-grade O-ring solution in 2021:

- Seal life extended to 18 months (+200%)
- Passed FDA food contact material testing (SGS report)
- Microbiological testing zero over-limit for 3 consecutive years, batch unqualified rate dropped from 0.8% to 0
- Cumulative savings of unqualified product losses + spare parts costs about 2500000 CNY

Selection core: food contact grade determines material grade (must have dual FDA/EU certification), cleaning/sterilization method determines structural form (SIP/CIP selects springless), product value determines seal grade (high-value product selects double-face + barrier fluid).`,
      vi: `## Điểm chính

- Thiết bị thực phẩm/dược phẩm cần khử trùng hơi nước bão hòa 121℃ định kỳ (SIP, 30 phút) hoặc khử trùng siêu cao nhiệt 143℃ (UHT); vòng đệm cao su thông thường không đủ chịu nhiệt và rò rỉ
- Vòng đệm than chì carbon phải tuân thủ FDA 21 CFR 177.2410 (sản phẩm than chì tiếp xúc thực phẩm) và quy định vật liệu tiếp xúc thực phẩm EU 1935/2004/EC
- Vật liệu dùng than chì tẩm nhựa epoxy cấp thực phẩm (chất tẩm đáp ứng tiêu chuẩn nhựa cấp thực phẩm EP), không dùng chất bôi trơn kim loại nặng, không giải phóng BPA, chất làm dẻo hoặc chất có hại khác
- Thiết kế kết cấu dùng kiểu hoàn toàn không lò xo, tránh tích tụ bẩn trong lò xo không thể CIP; áp suất riêng bề mặt được cung cấp chỉ bởi áp suất môi chất
- Huahao Sealing đã cung cấp 36 máy đồng nhất cao áp cho doanh nghiệp sữa; tuổi thọ kín 18 tháng, vượt qua kiểm tra tiếp xúc thực phẩm FDA

Ngành thực phẩm và dược phẩm có yêu cầu vệ sinh nghiêm ngặt với tất cả các bộ phận tiếp xúc sản phẩm: không sinh trưởng vi khuẩn, không giải phóng chất có hại, phải có thể làm sạch và khử trùng (CIP/SIP). Các vòng đệm O-ring cao su và kín cơ khí lò xo truyền thống trong điều kiện khử trùng có vấn đề không đủ chịu nhiệt, kẹt bẩn và không thể làm sạch triệt để. Với lợi ích trơ hóa học, chịu nhiệt độ cao và dễ làm sạch, vòng đệm than chì carbon cấp FDA trở thành giải pháp kín ưu tiên cho ngành thực phẩm và dược phẩm. Dựa trên kinh nghiệm ứng dụng của Huahao Sealing trong ngành sữa, nước giải khát và dược phẩm, bài viết giới thiệu điểm chọn vòng đệm than chì carbon cấp thực phẩm.

## 1. Đặc tính điều kiện

### 1.1 Thông số điều kiện điển hình

- Khử trùng hơi nước (SIP): hơi nước bão hòa 121℃, áp suất 0.2 MPa, 30 phút mỗi chu kỳ, 2-4 lần mỗi ngày
- Khử trùng siêu cao nhiệt (UHT): 135-143℃, khử trùng tức thời 3-5 giây
- Làm sạch tại chỗ (CIP): dung dịch kiềm nóng 80-90℃ (NaOH 1-2%) + dung dịch axit nóng 70-80℃ (HNO₃ 1-2%) tuần hoàn làm sạch
- Môi chất bôi trơn: chỉ cho phép mỡ cấp thực phẩm (NLGI cấp 2, đăng ký NSF H1) hoặc tự bôi trơn bằng chính môi chất công nghệ

### 1.2 Chế độ hỏng

Thống kê hỏng kín truyền thống: gãy lão hóa nhiệt O-ring cao su (40%, FKM sau 100 chu kỳ lão hóa hơi nước 135℃ lặp lại, độ biến dạng nén vĩnh viễn >30%), tích tụ vật liệu trong buồng lò xo (30%, góc chết CIP sinh trưởng vi khuẩn), mỡ tan vào sản phẩm (20%), rò rỉ biến dạng nhiệt mặt kín (10%).

## 2. Chọn vật liệu và chứng nhận tuân thủ

### 2.1 Than chì cấp thực phẩm cấp FDA

Nguyên tắc chọn: cả vật liệu nền và chất tẩm đều phải đáp ứng tiêu chuẩn tiếp xúc thực phẩm. Than chì cấp thực phẩm M120F-FDA của Huahao Sealing:

- Vật liệu nền: than chì đẳng tĩnh áp cao纯, hàm lượng tro <0.1%, tuân thủ FDA 21 CFR 177.2410
- Chất tẩm: nhựa epoxy cấp thực phẩm (đáp ứng tiêu chuẩn nhựa cấp tiếp xúc thực phẩm EP), chất thoát khỏi chất tẩm đáp ứng tổng lượng di chuyển FDA (OM) <10 mg/dm²
- Kim loại nặng: Pb, Cd, Hg, Cr⁶⁺ đều <0.01 ppm, tuân thủ quy định vật liệu tiếp xúc thực phẩm EU EU 10/2011
- Kiểm tra: mỗi lô cung cấp báo cáo kiểm tra tiếp xúc thực phẩm FDA, báo cáo RoHS, báo cáo hàm lượng kim loại nặng

### 2.2 Danh sách vật liệu cấm

- Nghiêm cấm than chì tẩm hợp kim Babbitt chứa đồng, chì, cadmium và các kim loại nặng khác
- Nghiêm cấm nhựa phenolic cấp công nghiệp thông thường (chứa phenol tự do và formaldehyde, rủi ro gây ung thư)
- Nghiêm cấm than chì chứa MoS₂, PTFE bột siêu mịn (mặc dù chống mài mòn nhưng có rủi ro giải phóng)

### 2.3 Vật liệu ma đối

Vòng ma đối dùng silicon carbide thiêu kết không áp suất (SSiC), tuân thủ FDA 21 CFR 177.2410, không kết tủa silicon tự do. Tránh silicon carbide thiêu kết phản ứng (chứa 8-15% silicon tự do, khó chứng nhận cấp thực phẩm).

## 3. Thiết kế kết cấu

### 3.1 Kết cấu hoàn toàn không lò xo

Dịch vụ thực phẩm/dược phẩm nghiêm cấm dùng kín cơ khí lò xo (vòng lò xo và khe hở đế lò xo là góc chết CIP không thể làm sạch triệt để). Kết cấu kiểu hoàn toàn không lò xo được khuyến nghị:

- Thiết kế không lò xo: lực dính trục của vòng than chì được cung cấp chỉ bởi áp suất môi chất và nén trước O-ring, không có góc chết kẹt bẩn
- O-ring dùng cao su silicone cấp thực phẩm (VMQ, FDA 177.2600) hoặc Kalrez Spectrum 6380 (chống làm sạch axit-kiềm mạnh)
- Độ nhám bề mặt tiếp xúc với sản phẩm Ra ≤ 0.8 μm, không có cạnh sắc, ổ gà, khe hở

### 3.2 Giải pháp kép mặt + chất cách ly

Cho dịch vụ sản phẩm giá trị cao như máy đồng nhất cao áp (áp suất xuất 20-60 MPa) và bơm nhũ hóa, dùng kết cấu kép mặt nối tiếp:

- Kín trong tiếp xúc môi chất công nghệ (than chì cấp thực phẩm + SSiC)
- Kín ngoài tiếp xúc chất cách ly (nước khử ion + 0.5% chất sát khuẩn cấp thực phẩm, áp suất cao hơn môi chất 0.2 MPa)
- Chất cách ly có cảm biến áp suất báo động rò rỉ tức thời, loại bỏ ô nhiễm sản phẩm

### 3.3 Kiểm soát nhiệt độ khử trùng

Sốc nhiệt (nhiệt độ phòng → 121℃ → nhiệt độ phòng) trong quá trình CIP/SIP tạo ứng suất nhiệt. Biện pháp thiết kế:

- Vòng than chì dùng thiết kế thành mỏng (bề dày 4-6 mm) để giảm biến dạng nhiệt
- Đế kín có buồng làm nóng/làm nguội trước, tốc độ thay đổi nhiệt độ <5℃/phút
- Áp suất riêng bề mặt giảm xuống 0.2-0.3 MPa, giảm rủi ro ép biến dạng nhiệt

## 4. Điểm tuân thủ và xác minh

### 4.1 Yêu cầu tài liệu

Khách hàng thực phẩm/dược phẩm thường yêu cầu các tài liệu sau:

- Tuyên bố tuân thủ FDA 21 CFR 177.2410 + báo cáo kiểm tra bên thứ ba (SGS hoặc Intertek)
- Báo cáo kiểm tra tổng lượng di chuyển EU EU 10/2011 (dung dịch mô phỏng axit acetic 4%, ethanol 10%, dầu ô liu)
- Chứng nhận mỡ cấp thực phẩm NSF H1 (nếu sử dụng bôi trơn)
- Chứng nhận vật liệu 3.1 (EN 10204)

### 4.2 Xác minh hiện trường

- Sau 100 chu kỳ CIP/SIP tháo kiểm tra: mặt kín không nứt, độ biến dạng nén vĩnh viễn O-ring <20%
- Kiểm tra vi sinh: sau CIP, lấy mẫu bôi tại góc chết kín, tổng số khuẩn lạc <1 CFU/cm²
- Kiểm tra ô nhiễm sản phẩm: chạy liên tục 72 giờ, không phát hiện hạt than chì trong sản phẩm (kích thước hạt >10 μm)

## 5. Case study Huahao Sealing

36 máy đồng nhất cao áp 25 MPa của doanh nghiệp sữa lớn (xử lý sữa, sữa chua, năng lực sản xuất 2×6 tấn/giờ, SIP 3 lần mỗi ngày), ban đầu có hai vấn đề với kín cơ khí kiểu lò xo thương hiệu nhập khẩu: ① cặn sữa tích tụ trong buồng lò xo, CIP làm sạch không triệt để gây khuẩn lạc vượt chuẩn, 2-3 lô sản phẩm không đạt mỗi năm tổn thất khoảng 600000 CNY; ② O-ring FKM lão hóa hơi nước lặp lại, tuổi thọ trung bình 6 tháng. Năm 2021 chuyển sang giải pháp than chì cấp thực phẩm M120F-FDA + SSiC + kiểu không lò xo hoàn toàn + O-ring VMQ cấp thực phẩm của Huahao Sealing:

- Tuổi thọ kín kéo dài đến 18 tháng (+200%)
- Vượt qua kiểm tra vật liệu tiếp xúc thực phẩm FDA (báo cáo SGS)
- Kiểm tra vi khuẩn 3 năm liên tục không vượt chuẩn, tỷ lệ lô không đạt từ 0.8% xuống 0
- Tiết kiệm tích lũy tổn thất sản phẩm không đạt + chi phí phụ tùng khoảng 2500000 CNY

Chọn lõi: cấp tiếp xúc thực phẩm quyết định nhãn vật liệu (phải có chứng nhận kép FDA/EU), cách thức làm sạch/khử trùng quyết định hình thức kết cấu (SIP/CIP chọn không lò xo), giá trị sản phẩm quyết định cấp kín (sản phẩm giá trị cao chọn kép mặt + chất cách ly).`,
      th: `## ประเด็นสำคัญ

- อุปกรณ์อาหาร/ยาต้องการฆ่าเชื้อด้วยไอน้ำอิ่มตัว 121℃ เป็นประจำ (SIP, 30 นาที) หรือฆ่าเชื้ออุณหภูมิสูงมาก 143℃ (UHT); ซีลยางทั่วไปไม่มีความทนอุณหภูมิเพียงพอและรั่ว
- ซีลคาร์บอนกราไฟต์ต้องปฏิบัติตาม FDA 21 CFR 177.2410 (ผลิตภัณฑ์กราไฟต์ที่สัมผัสอาหาร) และระเบียบวัสดุสัมผัสอาหาร EU 1935/2004/EC
- วัสดุใช้กราไฟต์อิมเพรกเนตเรซินอีพ็อกซีเกรดอาหาร (สารอิมเพรกเนตปฏิบัติตามมาตรฐานเรซินเกรดอาหาร EP) ไม่ใช้สารหล่อลื่นโลหะหนัก ไม่ปล่อย BPA สารทำให้ยืดหยุ่นหรือสารอันตรายอื่นๆ
- การออกแบบโครงสร้างใช้แบบสปริงเลสแบบฟูลโฟลติง หลีกเลี่ยงสิ่งสกปรกติดค้างในสปริงที่ไม่สามารถ CIP ทำความสะอาดได้; ความดันจำเพาะผิวหน้าได้รับเพียงจากความดันตัวกลาง
- Huahao Sealing จัดหาเครื่องโฮโมจีไนเซอร์ความดันสูง 36 เครื่องให้กับองค์กรนม; อายุซีล 18 เดือน ผ่านการทดสอบสัมผัสอาหาร FDA

อุตสาหกรรมอาหารและยามีข้อกำหนดสุขอนามัยที่เข้มงวดสำหรับชิ้นส่วนทุกชิ้นที่สัมผัสผลิตภัณฑ์: ไม่ให้เชื้อจุลินทรีย์เจริญเติบโต ไม่ปล่อยสารอันตราย ต้องสามารถทำความสะอาดและฆ่าเชื้อได้ (CIP/SIP) ซีล O-ring ยางดั้งเดิมและซีลกลไกแบบมีสปริงภายใต้สภาวะฆ่าเชื้อมีปัญหาว่าความทนอุณหภูมิไม่เพียงพอ สิ่งสกปรกติดค้าง และไม่สามารถทำความสะอาดได้อย่างละเอียดอ่อน ด้วยข้อได้เปรียบของความเฉื่อยทางเคมี ความทนอุณหภูมิสูง และความสะดวกในการทำความสะอาด ซีลคาร์บอนกราไฟต์เกรด FDA กลายเป็นทางเลือกแรกสำหรับซีลในอุตสาหกรรมอาหารและยา จากประสบการณ์การใช้งานของ Huahao Sealing ในอุตสาหกรรมนม เครื่องดื่ม และยา บทความนี้แนะนำจุดสำคัญในการเลือกซีลคาร์บอนกราไฟต์เกรดอาหาร

## 1. ลักษณะสภาวะการทำงาน

### 1.1 พารามิเตอร์สภาวะทั่วไป

- การฆ่าเชื้อด้วยไอน้ำ (SIP): ไอน้ำอิ่มตัว 121℃ ความดัน 0.2 MPa, 30 นาทีต่อรอบ, 2-4 รอบต่อวัน
- การฆ่าเชื้ออุณหภูมิสูงมาก (UHT): 135-143℃, ฆ่าเชื้อทันที 3-5 วินาที
- ทำความสะอาดที่เดิม (CIP): ด่างร้อน 80-90℃ (NaOH 1-2%) + กรดร้อน 70-80℃ (HNO₃ 1-2%) ทำความสะอาดแบบหมุนเวียน
- สื่อกลางการหล่อลื่น: อนุญาตเฉพาะจาระบีเกรดอาหาร (เกรด NLGI 2, ลงทะเบียน NSF H1) หรือการหล่อลื่นด้วยตัวเองโดยสื่อกลางกระบวนการเท่านั้น

### 1.2 รูปแบบความเสียหาย

สถิติความเสียหายของซีลแบบดั้งเดิม: การแตกหักจากความเสื่อมสภาพจากความร้อนของ O-ring ยาง (40%, FKM หลังรอบการเสื่อมสภาพไอน้ำ 135℃ ซ้ำๆ 100 รอบ การบีบอัดคงอย่างถาวร >30%), การสะสมของวัสดุในห้องสปริง (30%, มุมตายของ CIP ทำให้เชื้อจุลินทรีย์เจริญเติบโต), การละลายจาระบีเข้าสู่ผลิตภัณฑ์ (20%), การรั่วซึมจากการเปลี่ยนรูปจากความร้อนของผิวหน้าซีล (10%)

## 2. การเลือกวัสดุและการรับรองการปฏิบัติตาม

### 2.1 กราไฟต์เกรดอาหารเกรด FDA

หลักการเลือก: ทั้งวัสดุฐานและสารอิมเพรกเนตต้องปฏิบัติตามมาตรฐานการสัมผัสอาหาร กราไฟต์เกรดอาหาร M120F-FDA ของ Huahao Sealing:

- วัสดุฐาน: กราไฟต์ไอโซสเตติกความบริสุทธิ์สูง ไฟเผา <0.1%, ปฏิบัติตาม FDA 21 CFR 177.2410
- สารอิมเพรกเนต: เรซินอีพ็อกซีเกรดอาหาร (ปฏิบัติตามมาตรฐานเรซินเกรดสัมผัสอาหาร EP) สารสกัดจากสารอิมเพรกเนตปฏิบัติตามการเคลื่อนย้ายทั้งหมดของ FDA (OM) <10 mg/dm²
- โลหะหนัก: Pb, Cd, Hg, Cr⁶⁴ ทั้งหมด <0.01 ppm, ปฏิบัติตามระเบียบวัสดุสัมผัสอาหาร EU EU 10/2011
- การทดสอบ: ทุกล็อตให้รายงานการทดสอบสัมผัสอาหาร FDA, รายงาน RoHS, รายงานปริมาณโลหะหนัก

### 2.2 รายการวัสดุที่ห้ามใช้

- ห้ามอย่างเคร่งครัดกราไฟต์อิมเพรกเนตโลหะบาบบิทที่มีทองแดง ตะกั่ว คาดเมียม และโลหะหนักอื่นๆ
- ห้ามอย่างเคร่งครัดเรซินฟีนอลิกเกรดอุตสาหกรรมทั่วไป (มีฟีนอลอิสระและฟอร์มาลดีไฮด์ มีความเสี่ยงการก่อให้เกิดมะเร็ง)
- ห้ามอย่างเคร่งครัดกราไฟต์ที่เติม MoS₂, ผง PTFE ไมโคร (แม้จะทนต่อการสึกหรอแต่มีความเสี่ยงการปล่อย)

### 2.3 วัสดุประกบ

วงประกบใช้ซิลิคอนคาร์ไบด์เซนเตอร์แบบไม่มีแรงกด (SSiC), ปฏิบัติตาม FDA 21 CFR 177.2410, ไม่มีการตกตะกอนซิลิคอนอิสระ หลีกเลี่ยงซิลิคอนคาร์ไบด์เชื่อมปฏิกิริยา (มีซิลิคอนอิสระ 8-15%, ยากในการรับรองเกรดอาหาร)

## 3. การออกแบบโครงสร้าง

### 3.1 โครงสร้างแบบสปริงเลสฟูลโฟลติง

งานอาหาร/ยาห้ามอย่างเคร่งครัดใช้ซีลกลไกแบบมีสปริง (วงแหวนสปริงและช่องว่างฐานสปริงเป็นมุมตายของ CIP ที่ไม่สามารถทำความสะอาดได้อย่างละเอียดอ่อน) แนะนำให้ใช้โครงสร้างแบบฟูลโฟลติง:

- การออกแบบไม่มีสปริง: แรงกดตามแนวแกนของวงแหวนกราไฟต์ได้รับเพียงจากความดันตัวกลางและการอัดล่วงหน้าของ O-ring, ไม่มีมุมตายที่ติดค้างสิ่งสกปรก
- O-ring ใช้ซิลิโคนยางเกรดอาหาร (VMQ, FDA 177.2600) หรือ Kalrez Spectrum 6380 (ต้านทานการทำความสะอาดด้วยกรด-ด่างแรง)
- ความหยาบของผิวทุกพื้นที่ที่สัมผัสผลิตภัณฑ์ Ra ≤ 0.8 ไม่มีคมขอบ บิ่น โพรง ช่องว่าง

### 3.2 โซลูชันหน้าคู่ + ของเหลวกั้น

สำหรับงานผลิตภัณฑ์ที่มีมูลค่าสูงเช่น เครื่องโฮโมจีไนเซอร์ความดันสูง (ความดันทางออก 20-60 MPa) และปั๊มอิมัลชัน ใช้โครงสร้างหน้าคู่แบบอันต่อเนื่อง:

- ซีลด้านในสัมผัสสื่อกลางกระบวนการ (กราไฟต์เกรดอาหาร + SSiC)
- ซีลด้านนอกสัมผัสของเหลวกั้น (น้ำกลั่น + สารฆ่าเชื้อเกรดอาหาร 0.5%, ความดันสูงกว่าตัวกลาง 0.2 MPa)
- ของเหลวกั้นมีเซ็นเซอร์ความดันให้สัญญาณเตือนรั่วทันที กำจัดการปนเปื้อนผลิตภัณฑ์

### 3.3 การควบคุมอุณหภูมิการฆ่าเชื้อ

ชอคอุณหภูมิ (อุณหภูมิห้อง → 121℃ → อุณหภูมิห้อง) ในระหว่าง CIP/SIP ก่อให้เกิดความเครียดจากความร้อน มาตรการในการออกแบบ:

- วงแหวนกราไฟต์ใช้การออกแบบผนังบาง (ความหนาผนัง 4-6 มม.) เพื่อลดการเปลี่ยนรูปจากความร้อน
- ฐานซีลติดตั้งช่อง preheat/precool ทำให้อัตราการเปลี่ยนแปลงอุณหภูมิ <5℃/นาที
- ความดันจำเพาะผิวหน้าลดลงเหลือ 0.2-0.3 MPa, ลดความเสี่ยงการบีบอัดจากการเปลี่ยนรูปจากความร้อน

## 4. จุดสำคัญของการปฏิบัติตามและการตรวจสอบ

### 4.1 ข้อกำหนดเอกสาร

ลูกค้าอาหาร/ยามักจะต้องการเอกสารดังต่อไปนี้:

- คำประกาศการปฏิบัติตาม FDA 21 CFR 177.2410 + รายงานการทดสอบจากบุคคลที่สาม (SGS หรือ Intertek)
- รายงานการทดสอบการเคลื่อนย้ายทั้งหมด EU EU 10/2011 (สารจำลองน้ำส้มสายชู 4%, เอทานอล 10%, น้ำมันมะกอก)
- การรับรองจาระบีเกรดอาหาร NSF H1 (หากใช้การหล่อลื่น)
- ใบรับรองวัสดุ 3.1 (EN 10204)

### 4.2 การตรวจสอบในพื้นที่

- หลัง 100 รอบ CIP/SIP ถอดตรวจสอบ: ผิวหน้าซีลไม่มีรอยแตก การบีบอัดคงอย่างถาวรของ O-ring <20%
- การทดสอบจุลินทรีย์: หลัง CIP, ตัวอย่างเช็ดที่มุมตายของซีล จำนวนเชื้อทั้งหมด <1 CFU/cm²
- การทดสอบการปนเปื้อนผลิตภัณฑ์: ทำงานต่อเนื่อง 72 ชั่วโมง ไม่พบอนุภาคกราไฟต์ในผลิตภัณฑ์ (ขนาดอนุภาค >10 ไมครอน)

## 5. กรณีศึกษา Huahao Sealing

เครื่องโฮโมจีไนเซอร์ความดันสูง 25 MPa ขององค์กรนมขนาดใหญ่ 36 เครื่อง (ประมวลผลนม โยเกิร์ต, กำลังการผลิต 2×6 ตัน/ชั่วโมง, SIP 3 รอบต่อวัน) เดิมมีปัญหาสองประการกับซีลกลไกแบบมีสปริงแบรนด์นำเข้า: ① หินปูนในนมสะสมในห้องสปริง CIP ทำความสะอาดไม่ครบถ้วนทำให้จำนวนเชื้อเกินขอบเขต, 2-3 รอบผลิตภัณฑ์ที่ไม่ผ่านต่อปี สูญเสียประมาณ 600000 CNY; ② O-ring FKM เสื่อมสภาพจากไอน้ำซ้ำๆ อายุการใช้งานเฉลี่ย 6 เดือน หลังเปลี่ยนเป็นโซลูชันกราไฟต์เกรดอาหาร M120F-FDA + SSiC + แบบสปริงเลสฟูลโฟลติง + O-ring VMQ เกรดอาหาร ของ Huahao Sealing ในปี 2021:

- อายุซีลยืดเป็น 18 เดือน (+200%)
- ผ่านการทดสอบวัสดุสัมผัสอาหาร FDA (รายงาน SGS)
- การทดสอบจุลินทรีย์ไม่เกินขอบเขตเป็นเวลา 3 ปีติดต่อกัน อัตราผลิตภัณฑ์ที่ไม่ผ่านลดจาก 0.8% เป็น 0
- ประหยัดสะสมของสิ่งสูญเสียจากผลิตภัณฑ์ที่ไม่ผ่าน + ค่าอะไหล่ประมาณ 2500000 CNY

หลักการเลือก: เกรดการสัมผัสอาหารกำหนดเกรดวัสดุ (ต้องมีการรับรองคู่ FDA/EU) วิธีการทำความสะอาด/ฆ่าเชื้อกำหนดรูปแบบโครงสร้าง (SIP/CIP เลือกแบบสปริงเลส) มูลค่าผลิตภัณฑ์กำหนดเกรดซีล (ผลิตภัณฑ์มูลค่าสูงเลือกแบบหน้าคู่ + ของเหลวกั้น)`,
    },
  },
  {
    slug: "power-plant-fgd-slurry-pump-graphite-seal",
    title: {
      zh: "火力发电厂 FGD 脱硫浆液泵碳石墨密封应用：含氟离子石灰石-石膏浆液 60℃ 磨损工况",
      en: "Carbon Graphite Seals for FGD Slurry Pumps in Thermal Power Plants: 60℃ Wear Service with Fluoride-Containing Limestone-Gypsum Slurry",
      vi: "Vòng đệm than chì carbon cho bơm bùn khử lưu FGD ở nhà máy nhiệt điện: Điều kiện mài mòn bùn đá vôi-thạch cao 60℃ chứa ion flo",
      th: "ซีลคาร์บอนกราไฟต์สำหรับปั๊มสารลดปนเปื้อนกำมะถัน FGD ในโรงไฟฟ้าความร้อน: สภาวะการสึกกร่อนของสารลินท์-ยิปซั่ม 60℃ ที่มีไอออนฟลูออไรด์",
    },
    excerpt: {
      zh: "针对火电厂石灰石-石膏湿法脱硫（FGD）浆液循环泵含 5-15% 固体颗粒（CaSO₄·2H₂O、CaCO₃、SiO₂）、含氟离子（F⁻ 50-200 mg/L）导致碳化硅密封开裂泄漏的问题，本文讲解耐氟碳石墨浸渍材料选型、结构设计（集装式 + 冲洗方案 PLAN 32+64）与华豪密封案例。",
      en: "For the problem of SiC seal cracking and leakage caused by 5-15% solid particles (CaSO₄·2H₂O, CaCO₃, SiO₂) and fluoride ions (F⁻ 50-200 mg/L) in FGD slurry circulation pumps of thermal power plants, this article covers fluoride-resistant carbon graphite impregnation material selection, structural design (cartridge + flushing plan PLAN 32+64), and Huahao Sealing cases.",
      vi: "Dành cho vấn đề nứt và rò rỉ vòng kín SiC do hạt rắn 5-15% (CaSO₄·2H₂O, CaCO₃, SiO₂) và ion flo (F⁻ 50-200 mg/L) trong bơm tuần hoàn bùn khử lưu ướt đá vôi-thạch cao (FGD) ở nhà máy nhiệt điện, bài viết trình bày chọn vật liệu tẩm than chì carbon chống flo, thiết kế kết cấu (kiểm kèm + kế hoạch xả PLAN 32+64) và case study Huahao Sealing.",
      th: "สำหรับปัญหาการแตกร้าวและรั่วของซีล SiC ที่เกิดจากอนุภาคแข็ง 5-15% (CaSO₄·2H₂O, CaCO₃, SiO₂) และไอออนฟลูออไรด์ (F⁻ 50-200 มก./ล.) ในปั๊มหมุนเวียนสารลดปนเปื้อนกำมะถันแบบเปียกสารลินท์-ยิปซั่ม (FGD) ของโรงไฟฟ้าความร้อน บทความนี้ครอบคลุมการเลือกวัสดุอิมเพรกเนตคาร์บอนกราไฟต์ต้านทานฟลูออไรด์ การออกแบบโครงสร้าง (คาร์ทริดจ์ + แผนล้าง PLAN 32+64) และกรณีศึกษา Huahao Sealing",
    },
    tag: "application",
    date: "2026-07-15",
    content: {
      zh: `## 核心要点

- 火电厂 FGD 石灰石-石膏浆液含 5-15% 固体颗粒（硬度 3-7 Mohs）+ 氟离子 F⁻（50-200 mg/L），导致传统 SSiC 配对环在氟离子作用下发生晶界腐蚀（SiC + 4HF → SiF₄↑ + CH₄↑），密封面 1-2 个月即开裂
- 解决方案：碳石墨改用呋喃树脂浸渍（耐 HF 腐蚀，pH 0-14 稳定），配对环改用硬质合金 WC-Ni（无硅晶界腐蚀风险）
- 结构选集装式双端面 + PLAN 32 外冲洗（工艺水 0.6 MPa，1.5 m³/h）+ PLAN 64 泄漏监测，防止颗粒进入密封腔
- 华豪密封为某 660 MW 机组 12 台 FGD 浆液循环泵配套，连续运行 26 个月无泄漏，检修周期从 45 天延长至 18 个月

火力发电厂湿法烟气脱硫（FGD）系统的石灰石-石膏浆液循环泵是脱硫系统的核心设备之一，其密封可靠性直接影响机组可用率。FGD 浆液含 CaSO₄·2H₂O（二水石膏，硬度 3 Mohs）、未反应 CaCO₃（硬度 3 Mohs）、SiO₂ 粉尘（硬度 7 Mohs）和燃煤烟气带入的微量 HF（氢氟酸，来自煤中 CaF₂ 与 H₂SO₄ 反应），形成强磨蚀 + 氟离子特化腐蚀的复合工况，传统碳化硅密封失效极快。本文结合华豪密封在多家 300 MW、600 MW、1000 MW 级火电机组的应用经验，介绍 FGD 工况碳石墨密封选型。

## 一、工况特性

### 1.1 典型浆液参数

- 固体含量：5-15%（石膏晶体 + 石灰石颗粒，粒径 10-200 μm）
- 氟离子（F⁻）：50-200 mg/L，pH 4.5-6.0（弱酸性，HF 以 HF、F⁻、(HF)₂⁻ 聚合形式共存）
- 氯离子（Cl⁻）：10000-50000 mg/L（浆液循环浓缩富集）
- 工作温度：50-65℃（常压饱和温度）
- 泵转速：590-740 r/min（大型低转速离心泵）

### 1.2 失效模式分析

FGD 工况碳化硅密封失效统计：

1. **氟离子晶界腐蚀（60%）**：SSiC 中 SiO₂ 晶界相 + 游离硅与 HF 反应：
   - SiO₂ + 6HF → H₂SiF₆ + 2H₂O（氟硅酸，水溶解）
   - Si（游离硅）+ 4HF → SiF₄↑ + 2H₂↑
   结果：碳化硅表面"麻点"腐蚀→晶界分离→整体碎裂。
2. **颗粒三磨粒磨损（25%）**：石膏晶体进入密封端面，形成三体磨粒磨损，密封面出现 V 形沟槽，泄漏量增大。
3. **弹簧腔堵塞（10%）**：浆液颗粒在弹簧腔、端面外径侧沉积，弹簧失去弹性→端面贴合失效。
4. **O 型圈溶胀（5%）**：FKM O 型圈在高氯浆液中溶胀率 >15%，导致补偿失效。

## 二、材料选型

### 2.1 耐氟碳石墨

FGD 工况氟离子腐蚀是核心挑战。华豪密封 M230F-呋喃耐氟石墨：

- 基材：中颗粒结构石墨（颗粒 30 μm，抗冲击）
- 浸渍剂：糠醇呋喃树脂（碳含量 70%，固化后无 C=C 双键，耐 HF、HCl、H₂SO₄ 等非氧化性酸）
- 耐 HF 性能：20% HF、60℃ 浸泡 30 天，失重率 < 0.05%（对比普通树脂浸渍石墨失重 3.8%）
- 机械强度：抗压强度 280 MPa，抗折强度 65 MPa（高于普通树脂石墨 50%）
- 肖氏硬度：HS 85（匹配碳化硅耐磨水平）

### 2.2 配对材料（关键改进！）

**严禁使用任何硅基材料（SSiC、RBSiC、Si₃N₄）**——氟离子腐蚀是不可逆的。配对环选用：

- WC-Ni 硬质合金（YG8 类型，Ni 粘结相 8%，WC 92%）
  - 耐 HF：WC 与 HF 不反应，Ni 粘结相在 50℃ 以下弱酸性环境极稳定
  - 硬度：HRA 91，抗颗粒磨损优于碳化硅
  - 注意：避免高温（> 200℃）强酸性，Ni 粘结相可能腐蚀；FGD 工况 60℃ 完全安全

### 2.3 辅助密封件

- O 型圈：EPDM（三元乙丙橡胶，耐 HF + 高氯 + 弱酸，推荐 DuPont Vamac GLS），或 FFKM（Kalrez 4079，耐极端化学品）
- 金属构件：双相钢 2205（UNS S31803，耐 50000 mg/L Cl⁻ 点蚀）或哈氏合金 C276
- 弹簧：哈氏合金 C276（普通 316L 在高氯浆液中 3 个月即应力腐蚀开裂）

## 三、结构设计与冲洗方案

### 3.1 集装式双端面结构

FGD 浆液工况**严禁单端面密封**（颗粒直接进入密封面，2 周即磨坏）。标准方案：集装式双端面（Tandem 串联型）：

- 内侧（大气侧）：M230F 石墨 × WC-Ni，接触冲洗水（干净无颗粒）
- 外侧（介质侧）：M230F 石墨 × WC-Ni，接触工艺浆液
- 集成式弹簧：外部大弹簧（内置式弹簧易堵塞，外置式不接触介质）
- 集装式整体安装，不拆泵即可更换密封，检修时间从 24 小时缩短至 4 小时

### 3.2 API 冲洗方案 PLAN 32 + PLAN 64

**PLAN 32（外冲洗）**——阻止颗粒进入密封腔的关键：
- 冲洗水源：FGD 工艺补给水（经过滤器，SS < 1 mg/L，粒径 < 5 μm）
- 冲洗压力：高于密封腔压力 0.1-0.2 MPa（通常 0.5-0.7 MPa）
- 冲洗流量：1.5-3.0 m³/h（口径 80-150 mm 泵）
- 冲洗方式：切向注入密封腔，形成漩涡冲洗颗粒，防止沉积

**PLAN 64（泄漏监测+紧急冲洗）**：
- 内侧密封泄漏口接压力开关，当泄漏压力 > 0.1 MPa 或流量 > 20 L/h，DCS 报警
- 泄漏口可切换为紧急冲洗接口（接高压工艺水），内侧密封失效时紧急注入冲洗水，阻止浆液进入轴承箱

### 3.3 防颗粒沉积设计

- 密封腔设置倾斜导流板（45°），颗粒沿斜面沉降，不聚集在密封面外径
- 端面外径侧设置"挡砂唇"（PTFE 薄片 + EPDM 支撑），阻挡大颗粒（> 20 μm）直接冲击密封面
- 弹簧座设置"自清洗孔"（φ8 孔×4 个），冲洗水通过弹簧座孔道，带出沉积颗粒

## 四、华豪密封案例

某省级能源集团 2×660 MW 超超临界机组，FGD 系统每台机组配 6 台浆液循环泵（流量 8800 m³/h，扬程 22 m，转速 590 r/min，密封口径 160 mm），原用某进口品牌 SSiC × SSiC + 内置弹簧单端面密封存在问题：

1. SSiC 配对环氟离子腐蚀，平均寿命 **42 天**（最短 23 天），拆检发现密封面布满麻点、局部碎裂
2. 每年每台泵换密封约 8 次，12 台泵备件费 + 检修费约 780 万元
3. 密封泄漏导致浆液喷溅到电机绕组，2019 年发生 2 次电机烧毁事故（损失约 180 万元）

2020 年改用华豪密封 **M230F 呋喃石墨 × WC-Ni 硬质合金 + 集装式双端面 + PLAN 32（工艺水 0.6 MPa，2 m³/h）+ PLAN 64 + 2205 双相钢金属件 + EPDM O 型圈** 方案后：

- 首台连续运行 **26 个月**（2020.03-2022.05）无泄漏，计划性检修拆检，密封面磨损量 0.12 mm（磨损率 0.00046 mm/100 h）
- 平均密封寿命 **22 个月**（+1471%），从 42 天提升
- 每年备件费 + 检修费从 780 万降至 **约 80 万元**，累计节约 2000+ 万元
- 电机烧毁事故清零，机组可用率从 92.3% 提升至 98.7%

选型核心：氟离子浓度决定配对材料（F⁻ > 50 mg/L 禁用硅基材料，改用 WC）、固体颗粒含量决定冲洗方案（>10% 必须 PLAN 32 外冲洗）、氯浓度决定金属材料等级（>30000 mg/L 选 2205 双相钢或 C276）。`,
      en: `## Key Takeaways

- FGD limestone-gypsum slurry in thermal power plants contains 5-15% solid particles (hardness 3-7 Mohs) + fluoride ions F⁻ (50-200 mg/L), causing traditional SSiC mating rings to suffer grain boundary corrosion under fluoride action (SiC + 4HF → SiF₄↑ + CH₄↑), seal faces crack in 1-2 months
- Solution: carbon graphite switched to furan resin impregnation (resistant to HF corrosion, pH 0-14 stable), mating ring switched to cemented carbide WC-Ni (no silicon grain boundary corrosion risk)
- Structure selects cartridge double face + PLAN 32 external flushing (process water 0.6 MPa, 1.5 m³/h) + PLAN 64 leakage monitoring, preventing particles from entering seal chamber
- Huahao Sealing supplied 12 FGD slurry circulation pumps for a 660 MW unit; continuous operation for 26 months without leakage, maintenance interval extended from 45 days to 18 months

The limestone-gypsum slurry circulation pump of the wet flue gas desulfurization (FGD) system in thermal power plants is one of the core equipment of the desulfurization system, and its sealing reliability directly affects unit availability. FGD slurry contains CaSO₄·2H₂O (gypsum dihydrate, hardness 3 Mohs), unreacted CaCO₃ (hardness 3 Mohs), SiO₂ dust (hardness 7 Mohs) and trace HF (hydrofluoric acid, from the reaction of CaF₂ in coal with H₂SO₄) carried by coal-fired flue gas, forming a composite service of strong abrasion + fluoride-specific corrosion, and traditional silicon carbide seals fail extremely quickly. Based on Huahao Sealing's application experience in multiple 300 MW, 600 MW, and 1000 MW class thermal power units, this article introduces carbon graphite seal selection for FGD service.

## 1. Service Characteristics

### 1.1 Typical Slurry Parameters

- Solid content: 5-15% (gypsum crystals + limestone particles, particle size 10-200 μm)
- Fluoride ions (F⁻): 50-200 mg/L, pH 4.5-6.0 (weakly acidic, HF coexists in HF, F⁻, (HF)₂⁻ polymerized forms)
- Chloride ions (Cl⁻): 10000-50000 mg/L (slurry circulation concentration enrichment)
- Working temperature: 50-65℃ (atmospheric saturation temperature)
- Pump speed: 590-740 r/min (large low-speed centrifugal pump)

### 1.2 Failure Mode Analysis

FGD service silicon carbide seal failure statistics:

1. **Fluoride ion grain boundary corrosion (60%)**: SiO₂ grain boundary phase + free silicon in SSiC react with HF:
   - SiO₂ + 6HF → H₂SiF₆ + 2H₂O (fluorosilicic acid, water-soluble)
   - Si (free silicon) + 4HF → SiF₄↑ + 2H₂↑
   Result: silicon carbide surface "pitting" corrosion → grain boundary separation → overall fracture.
2. **Particle three-body abrasive wear (25%)**: gypsum crystals enter the seal face, forming three-body abrasive wear, V-shaped grooves appear on the seal face, leakage increases.
3. **Spring chamber clogging (10%)**: slurry particles deposit in the spring chamber and on the outer diameter side of the face, spring loses elasticity → face fitting failure.
4. **O-ring swelling (5%)**: FKM O-ring swelling rate >15% in high-chlorine slurry, causing compensation failure.

## 2. Material Selection

### 2.1 Fluoride-Resistant Carbon Graphite

Fluoride ion corrosion is the core challenge in FGD service. Huahao Sealing M230F-Furan fluoride-resistant graphite:

- Base material: medium-grain structure graphite (grain 30 μm, impact-resistant)
- Impregnant: furfuryl alcohol furan resin (carbon content 70%, no C=C double bonds after curing, resistant to non-oxidizing acids such as HF, HCl, H₂SO₄)
- HF resistance performance: 20% HF, 60℃ immersion for 30 days, weight loss rate <0.05% (compared to ordinary resin-impregnated graphite weight loss 3.8%)
- Mechanical strength: compressive strength 280 MPa, flexural strength 65 MPa (50% higher than ordinary resin graphite)
- Shore hardness: HS 85 (matches silicon carbide wear resistance level)

### 2.2 Mating Material (Critical Improvement!)

**Strictly prohibit any silicon-based materials (SSiC, RBSiC, Si₃N₄)** — fluoride ion corrosion is irreversible. Mating ring selection:

- WC-Ni cemented carbide (YG8 type, Ni binder phase 8%, WC 92%)
  - HF resistance: WC does not react with HF, Ni binder phase is extremely stable in weakly acidic environments below 50℃
  - Hardness: HRA 91, particle wear resistance better than silicon carbide
  - Note: avoid high temperature (>200℃) strong acidity, Ni binder phase may corrode; completely safe at FGD service 60℃

### 2.3 Auxiliary Seals

- O-rings: EPDM (ethylene propylene diene monomer, resistant to HF + high chlorine + weak acid, recommended DuPont Vamac GLS), or FFKM (Kalrez 4079, resistant to extreme chemicals)
- Metal components: duplex steel 2205 (UNS S31803, resistant to 50000 mg/L Cl⁻ pitting) or Hastelloy C276
- Springs: Hastelloy C276 (ordinary 316L stress corrosion cracks in 3 months in high-chlorine slurry)

## 3. Structural Design and Flushing Plan

### 3.1 Cartridge Double Face Structure

**Single face seals are strictly prohibited for FGD slurry service** (particles directly enter the seal face and wear out in 2 weeks). Standard solution: cartridge double face (Tandem series type):

- Inner side (atmosphere side): M230F graphite × WC-Ni, contacts flushing water (clean without particles)
- Outer side (media side): M230F graphite × WC-Ni, contacts process slurry
- Integrated spring: external large spring (built-in spring easy to clog, external type does not contact media)
- Cartridge type integral installation, seal can be replaced without dismantling pump, maintenance time reduced from 24 hours to 4 hours

### 3.2 API Flushing Plan PLAN 32 + PLAN 64

**PLAN 32 (external flushing)** — key to preventing particles from entering the seal chamber:
- Flushing water source: FGD process makeup water (filtered, SS <1 mg/L, particle size <5 μm)
- Flushing pressure: 0.1-0.2 MPa above seal chamber pressure (usually 0.5-0.7 MPa)
- Flushing flow: 1.5-3.0 m³/h (80-150 mm diameter pump)
- Flushing method: tangential injection into seal chamber, forming vortex to flush particles, preventing deposition

**PLAN 64 (leakage monitoring + emergency flushing)**:
- Inner seal leakage port connected to pressure switch, when leakage pressure >0.1 MPa or flow >20 L/h, DCS alarm
- Leakage port can be switched to emergency flushing interface (connected to high-pressure process water), emergency injection of flushing water when inner seal fails, preventing slurry from entering bearing box

### 3.3 Anti-Particle Deposition Design

- Seal chamber provided with inclined deflector (45°), particles settle along slope, not accumulating on seal face outer diameter
- Seal face outer diameter side provided with "sand retaining lip" (PTFE thin sheet + EPDM support), blocking large particles (>20 μm) from directly impacting seal face
- Spring seat provided with "self-cleaning holes" (φ8 holes ×4), flushing water passes through spring seat channels, carrying out deposited particles

## 4. Huahao Sealing Case Study

A provincial energy group's 2×660 MW ultra-supercritical unit, FGD system each unit equipped with 6 slurry circulation pumps (flow 8800 m³/h, head 22 m, speed 590 r/min, seal diameter 160 mm), originally had problems with an imported brand SSiC × SSiC + built-in spring single face seal:

1. SSiC mating ring fluoride corrosion, average life **42 days** (minimum 23 days), teardown inspection found seal face full of pitting, local fracture
2. About 8 seal replacements per pump per year, spare parts cost + maintenance cost for 12 pumps about 7.8 million CNY
3. Seal leakage caused slurry splashing to motor windings, 2 motor burnout accidents in 2019 (loss about 1.8 million CNY)

After switching to Huahao Sealing's **M230F furan graphite × WC-Ni cemented carbide + cartridge double face + PLAN 32 (process water 0.6 MPa, 2 m³/h) + PLAN 64 + 2205 duplex steel metal parts + EPDM O-ring** solution in 2020:

- First unit continuous operation **26 months** (2020.03-2022.05) without leakage, planned maintenance teardown, seal face wear 0.12 mm (wear rate 0.00046 mm/100 h)
- Average seal life **22 months** (+1471%), improved from 42 days
- Annual spare parts cost + maintenance cost reduced from 7.8 million to **about 0.8 million CNY**, cumulative savings 20+ million CNY
- Motor burnout accidents zeroed, unit availability improved from 92.3% to 98.7%

Selection core: fluoride ion concentration determines mating material (F⁻ >50 mg/L prohibits silicon-based materials, switch to WC), solid particle content determines flushing plan (>10% must PLAN 32 external flushing), chlorine concentration determines metal material grade (>30000 mg/L selects 2205 duplex steel or C276).`,
      vi: `## Điểm chính

- Bùn đá vôi-thạch cao FGD ở nhà máy nhiệt điện chứa hạt rắn 5-15% (độ cứng 3-7 Mohs) + ion flo F⁻ (50-200 mg/L), gây ra vòng ma đối SSiC truyền thống bị ăn mòn ranh giới hạt dưới tác dụng của flo (SiC + 4HF → SiF₄↑ + CH₄↑), mặt kín nứt sau 1-2 tháng
- Giải pháp: than chì carbon chuyển sang tẩm nhựa furan (chống ăn mòn HF, ổn định pH 0-14), vòng ma đối chuyển sang hợp kim cứng WC-Ni (không có rủi ro ăn mòn ranh giới hạt silic)
- Kết cấu chọn kép mặt kiểm kèm + xả ngoài PLAN 32 (nước quy trình 0.6 MPa, 1.5 m³/h) + giám sát rò rỉ PLAN 64, ngăn chặn hạt xâm nhập buồng kín
- Huahao Sealing đã cung cấp 12 bơm tuần hoàn bùn FGD cho máy 660 MW; chạy liên tục 26 tháng không rò rỉ, chu kỳ bảo trì kéo dài từ 45 ngày lên 18 tháng

Bơm tuần hoàn bùn đá vôi-thạch cao của hệ thống khử lưu khí thải ướt (FGD) ở nhà máy nhiệt điện là một trong các thiết bị cốt lõi của hệ thống khử lưu, và độ tin cậy kín trực tiếp ảnh hưởng đến khả năng sử dụng của máy. Bùn FGD chứa CaSO₄·2H₂O (thạch cao ngậm nước, độ cứng 3 Mohs), CaCO₃ chưa phản ứng (độ cứng 3 Mohs), bụi SiO₂ (độ cứng 7 Mohs) và HF (axit flohydric, từ phản ứng CaF₂ trong than với H₂SO₄) mang theo từ khí thải đốt than, tạo thành điều kiện kết hợp mài mòn mạnh + ăn mòn đặc hiệu ion flo, và vòng kín silic cacbua truyền thống hỏng cực nhanh. Dựa trên kinh nghiệm ứng dụng của Huahao Sealing ở nhiều máy nhiệt điện cấp 300 MW, 600 MW và 1000 MW, bài viết giới thiệu chọn vòng đệm than chì carbon cho điều kiện FGD.

## 1. Đặc tính điều kiện

### 1.1 Thông số bùn điển hình

- Hàm lượng rắn: 5-15% (tinh thể thạch cao + hạt đá vôi, kích thước hạt 10-200 μm)
- Ion flo (F⁻): 50-200 mg/L, pH 4.5-6.0 (yếu axit, HF đồng tồn tại ở dạng HF, F⁻, (HF)₂⁻ trùng hợp)
- Ion clorua (Cl⁻): 10000-50000 mg/L (tích tụ cô đặc tuần hoàn bùn)
- Nhiệt độ làm việc: 50-65℃ (nhiệt độ bão hòa áp suất thường)
- Tốc độ bơm: 590-740 r/phút (bơm ly tâm tốc độ thấp lớn)

### 1.2 Phân tích chế độ hỏng

Thống kê hỏng vòng kín silic cacbua điều kiện FGD:

1. **Ăn mòn ranh giới hạt ion flo (60%)**: pha ranh giới hạt SiO₂ + silic tự do trong SSiC phản ứng với HF:
   - SiO₂ + 6HF → H₂SiF₆ + 2H₂O (fluoaxilic axit, hòa tan trong nước)
   - Si (silic tự do) + 4HF → SiF₄↑ + 2H₂↑
   Kết quả: bề mặt silic cacbua bị ăn mòn "lỗ ghềnh" → tách rời ranh giới hạt → vỡ toàn bộ.
2. **Mài mòn ba thể hạt (25%)**: tinh thể thạch cao xâm nhập mặt kín, tạo mài mòn ba thể, mặt kín xuất hiện rãnh hình chữ V, lượng rò rỉ tăng.
3. **Tắc buồng lò xo (10%)**: hạt bùn lắng đọng trong buồng lò xo và bên ngoài đường kính mặt kín, lò xo mất độ đàn hồi → hỏng dính mặt kín.
4. **Phình nở O-ring (5%)**: tỷ lệ phình nở O-ring FKM >15% trong bùn clorua cao, gây hỏng bù đắp.

## 2. Chọn vật liệu

### 2.1 Than chì carbon chống flo

Ăn mòn ion flo là thách thức cốt lõi ở điều kiện FGD. Than chì chống flo M230F-Furan của Huahao Sealing:

- Vật liệu nền: than chì cấu trúc hạt trung (hạt 30 μm, chống va đập)
- Chất tẩm: nhựa furan rượu furfurol (hàm lượng carbon 70%, sau đông cứng không có liên kết đôi C=C, chống các axit không oxy hóa như HF, HCl, H₂SO₄)
- Hiệu năng chống HF: ngâm 20% HF, 60℃ trong 30 ngày, tỷ lệ mất khối lượng <0.05% (so với than chì tẩm nhựa thông thường mất khối lượng 3.8%)
- Độ bền cơ học: độ bền nén 280 MPa, độ bền uốn 65 MPa (cao hơn 50% so với than chì nhựa thông thường)
- Độ cứng Shore: HS 85 (phù hợp mức độ chống mài mòn của silic cacbua)

### 2.2 Vật liệu ma đối (Cải tiến quan trọng!)

**Nghiêm cấm sử dụng bất kỳ vật liệu gốc silic nào (SSiC, RBSiC, Si₃N₄)** — ăn mòn ion flo là không thể đảo ngược. Chọn vòng ma đối:

- Hợp kim cứng WC-Ni (loại YG8, pha liên kết Ni 8%, WC 92%)
  - Chống HF: WC không phản ứng với HF, pha liên kết Ni cực kỳ ổn định trong môi trường yếu axit dưới 50℃
  - Độ cứng: HRA 91, chống mài mòn hạt tốt hơn silic cacbua
  - Lưu ý: tránh nhiệt độ cao (> 200℃) axit mạnh, pha liên kết Ni có thể bị ăn mòn; hoàn toàn an toàn ở 60℃ điều kiện FGD

### 2.3 Bộ phận kín phụ trợ

- O-ring: EPDM (cao su etylen propylen dien, chống HF + clo cao + yếu axit, khuyến nghị DuPont Vamac GLS), hoặc FFKM (Kalrez 4079, chống hóa chất cực đoan)
- Bộ phận kim loại: thép kép 2205 (UNS S31803, chống ăn mòn lỗ 50000 mg/L Cl⁻) hoặc Hastelloy C276
- Lò xo: Hastelloy C276 (316L thông thường bị nứt ăn mòn ứng suất sau 3 tháng trong bùn clo cao)

## 3. Thiết kế kết cấu và kế hoạch xả

### 3.1 Kết cấu kép mặt kiểm kèm

**Nghiêm cấm vòng kín đơn mặt ở điều kiện bùn FGD** (hạt trực tiếp xâm nhập mặt kín, mài hỏng sau 2 tuần). Giải pháp tiêu chuẩn: kép mặt kiểm kèm (kiểu nối tiếp Tandem):

- Bên trong (bên không khí): M230F than chì × WC-Ni, tiếp xúc nước xả (sạch không hạt)
- Bên ngoài (bên môi chất): M230F than chì × WC-Ni, tiếp xúc bùn quy trình
- Lò xo tích hợp: lò xo lớn bên ngoài (lò xo nội tại dễ tắc, loại bên ngoài không tiếp xúc môi chất)
- Lắp đặt toàn bộ kiểu kiểm kèm, có thể thay kín mà không tháo bơm, thời gian bảo trì giảm từ 24 giờ xuống 4 giờ

### 3.2 Kế hoạch xả API PLAN 32 + PLAN 64

**PLAN 32 (xả ngoài)** — chìa khóa ngăn chặn hạt xâm nhập buồng kín:
- Nguồn nước xả: nước bù quy trình FGD (đã qua bộ lọc, SS <1 mg/L, kích thước hạt <5 μm)
- Áp suất xả: cao hơn áp suất buồng kín 0.1-0.2 MPa (thường 0.5-0.7 MPa)
- Lưu lượng xả: 1.5-3.0 m³/giờ (bơm đường kính 80-150 mm)
- Cách xả: tiêm tiếp tuyến vào buồng kín, tạo xoáy xả hạt, ngăn lắng đọng

**PLAN 64 (giám sát rò rỉ + xả khẩn cấp)**:
- Cổng rò rỉ kín trong nối công tắc áp suất, khi áp suất rò rỉ >0.1 MPa hoặc lưu lượng >20 L/giờ, báo động DCS
- Cổng rò rỉ có thể chuyển sang giao diện xả khẩn cấp (nối nước quy trình cao áp), tiêm nước xả khẩn cấp khi kín trong hỏng, ngăn chặn bùn xâm nhập hộp ổ trục

### 3.3 Thiết kế chống lắng đọng hạt

- Buồng kín đặt tấm dẫn xiên (45°), hạt lắng dọc theo mặt nghiêng, không tập trung ở ngoài đường kính mặt kín
- Bên ngoài đường kính mặt kín đặt "môi chặn cát" (tấm PTFE mỏng + đỡ EPDM), chặn hạt lớn (> 20 μm) tác động trực tiếp mặt kín
- Đế lò xo đặt "lỗ tự làm sạch" (lỗ φ8 ×4), nước xả đi qua kênh đế lò xo, mang ra hạt lắng đọng

## 4. Case study Huahao Sealing

Máy siêu siêu tới hạn 2×660 MW của Tập đoàn năng lượng cấp tỉnh, hệ thống FGD mỗi máy lắp 6 bơm tuần hoàn bùn (lưu lượng 8800 m³/giờ, cột áp 22 m, tốc độ 590 r/phút, đường kính kín 160 mm), ban đầu có vấn đề với vòng kín đơn mặt lò xo nội tại SSiC × SSiC của thương hiệu nhập khẩu:

1. Ăn mòn ion flo vòng ma đối SSiC, tuổi thọ trung bình **42 ngày** (ngắn nhất 23 ngày), tháo kiểm thấy mặt kín đầy lỗ ghềnh, vỡ cục bộ
2. Khoảng 8 lần thay kín mỗi bơm mỗi năm, chi phí phụ tùng + chi phí bảo trì 12 bơm khoảng 7.8 triệu CNY
3. Rò rỉ kín gây bùn bắn vào cuộn dây động cơ, năm 2019 xảy ra 2 vụ cháy động cơ (tổn thất khoảng 1.8 triệu CNY)

Năm 2020 chuyển sang giải pháp **than chì furan M230F × hợp kim cứng WC-Ni + kép mặt kiểm kèm + PLAN 32 (nước quy trình 0.6 MPa, 2 m³/giờ) + PLAN 64 + bộ phận kim loại thép kép 2205 + O-ring EPDM** của Huahao Sealing:

- Máy đầu tiên chạy liên tục **26 tháng** (2020.03-2022.05) không rò rỉ, tháo kiểm bảo trì theo kế hoạch, mài mòn mặt kín 0.12 mm (tỷ lệ mài mòn 0.00046 mm/100 giờ)
- Tuổi thọ kín trung bình **22 tháng** (+1471%), cải thiện từ 42 ngày
- Chi phí phụ tùng + chi phí bảo trì hàng năm giảm từ 7.8 triệu xuống **khoảng 0.8 triệu CNY**, tiết kiệm tích lũy 20+ triệu CNY
- Vụ cháy động cơ được xóa sổ, khả năng sử dụng máy cải thiện từ 92.3% lên 98.7%

Chọn lõi: nồng độ ion flo quyết định vật liệu ma đối (F⁻ > 50 mg/L nghiêm cấm vật liệu gốc silic, chuyển sang WC), hàm lượng hạt rắn quyết định kế hoạch xả (>10% phải xả ngoài PLAN 32), nồng độ clo quyết định cấp vật liệu kim loại (>30000 mg/L chọn thép kép 2205 hoặc C276).`,
      th: `## ประเด็นสำคัญ

- สารลินท์-ยิปซั่ม FGD ในโรงไฟฟ้าความร้อนประกอบด้วยอนุภาคแข็ง 5-15% (ความแข็ง 3-7 โมส) + ไอออนฟลูออไรด์ F⁻ (50-200 มก./ล.) ทำให้วงประกบ SSiC แบบดั้งเดิมได้รับการกัดกร่อนขอบเขตเม็ดภายใต้การทำงานของฟลูออไรด์ (SiC + 4HF → SiF₄↑ + CH₄↑) ผิวหน้าซีลแตกร้าวใน 1-2 เดือน
- โซลูชัน: เปลี่ยนคาร์บอนกราไฟต์เป็นอิมเพรกเนตเรซินฟูราน (ต้านทานการกัดกร่อน HF, pH 0-14 เสถียร) เปลี่ยนวงประกบเป็นคาร์ไบด์ซีเมนต์ WC-Ni (ไม่มีความเสี่ยงการกัดกร่อนขอบเขตเม็ดซิลิคอน)
- โครงสร้างเลือกแบบคาร์ทริดจ์หน้าคู่ + การล้างภายนอก PLAN 32 (น้ำกระบวนการ 0.6 MPa, 1.5 ลบ.ม./ชม.) + การตรวจสอบการรั่ว PLAN 64 ป้องกันอนุภาคเข้าสู่ห้องซีล
- Huahao Sealing จัดหาปั๊มหมุนเวียนสารละลาย FGD 12 ตัวสำหรับเครื่องกำเนิด 660 MW; ทำงานต่อเนื่องเป็นเวลา 26 เดือนโดยไม่มีการรั่ว ระยะเวลาบำรุงรักษายืดจาก 45 วันเป็น 18 เดือน

ปั๊มหมุนเวียนสารละลายสารลินท์-ยิปซั่มของระบบกำจัดกำมะถันจากไอเสียแบบเปียก (FGD) ในโรงไฟฟ้าความร้อนเป็นหนึ่งในอุปกรณ์หลักของระบบกำจัดกำมะถัน และความน่าเชื่อถือของซีลส่งผลโดยตรงต่อความพร้อมใช้งานของเครื่อง สารละลาย FGD ประกอบด้วย CaSO₄·2H₂O (ยิปซั่มไดไฮเดรต ความแข็ง 3 โมส) CaCO₃ ที่ไม่ได้ปฏิกิริยา (ความแข็ง 3 โมส) ฝุ่น SiO₂ (ความแข็ง 7 โมส) และ HF (ไฮโดรฟลูออริกแอซิด จากปฏิกิริยาของ CaF₂ ในถ่านกับ H₂SO₄) ที่มาพร้อมกับไอเสียจากการเผาไหม้ถ่าน ซึ่งก่อให้เกิดสภาวะผสมของการสึกกร่อนที่รุนแรง + การกัดกร่อนเฉพาะทางของฟลูออไรด์ และซีลซิลิคอนคาร์ไบด์แบบดั้งเดิมเสียหายได้อย่างรวดเร็ว จากประสบการณ์การใช้งานของ Huahao Sealing ในเครื่องกำเนิดไฟฟ้าความร้อนขนาด 300 MW, 600 MW และ 1000 MW หลายแห่ง บทความนี้แนะนำการเลือกซีลคาร์บอนกราไฟต์สำหรับสภาวะ FGD

## 1. ลักษณะสภาวะการทำงาน

### 1.1 พารามิเตอร์สารละลายทั่วไป

- ปริมาณของแข็ง: 5-15% (คริสตัลยิปซั่ม + อนุภาคสารลินท์, ขนาดอนุภาค 10-200 ไมครอน)
- ไอออนฟลูออไรด์ (F⁻): 50-200 มก./ล., pH 4.5-6.0 (กรดอ่อน HF มีอยู่ในรูปแบบ HF, F⁻, (HF)₂⁻ โพลิเมอร์ร่วมกัน)
- ไอออนคลอไรด์ (Cl⁻): 10000-50000 มก./ล. (การทำความเข้มข้นของการหมุนเวียนสารละลาย)
- อุณหภูมิการทำงาน: 50-65℃ (อุณหภูมิอิ่มตัวที่ความดันบรรยากาศ)
- ความเร็วปั๊ม: 590-740 รอบ/นาที (ปั๊มเซนต์ริฟิวจัลขนาดใหญ่ความเร็วต่ำ)

### 1.2 การวิเคราะห์รูปแบบความเสียหาย

สถิติความเสียหายของซีลซิลิคอนคาร์ไบด์สภาวะ FGD:

1. **การกัดกร่อนขอบเขตเม็ดของไอออนฟลูออไรด์ (60%)**: เฟสขอบเขตเม็ด SiO₂ + ซิลิคอนอิสระใน SSiC ปฏิกิริยากับ HF:
   - SiO₂ + 6HF → H₂SiF₆ + 2H₂O (ฟลูออโรซิลิคแอซิด ละลายน้ำ)
   - Si (ซิลิคอนอิสระ) + 4HF → SiF₄↑ + 2H₂↑
   ผลลัพธ์: ผิวหน้าซิลิคอนคาร์ไบด์ถูกกัดกร่อนเป็นรูหลุม → แยกขอบเขตเม็ด → แตกทั้งชิ้น
2. **การสึกกร่อนสามตัวจากอนุภาค (25%)**: คริสตัลยิปซั่มเข้าสู่ผิวหน้าซีล ก่อให้เกิดการสึกกร่อนสามตัว มีร่องรอยรูปตัว V บนผิวหน้าซีล การรั่วซึมเพิ่มขึ้น
3. **การอุดตันห้องสปริง (10%)**: อนุภาคสารละลายตกตะกอนในห้องสปริงและด้านนอกเส้นผ่านศูนย์กลางของผิวหน้า สปริงสูญเสียความยืดหยุ่น → ความล้มเหลวของการยึดผิวหน้า
4. **การบวมของ O-ring (5%)**: อัตราบวมของ O-ring FKM >15% ในสารละลายคลอไรด์สูง ก่อให้เกิดความล้มเหลวของการชดเชย

## 2. การเลือกวัสดุ

### 2.1 คาร์บอนกราไฟต์ต้านทานฟลูออไรด์

การกัดกร่อนของไอออนฟลูออไรด์เป็นความท้าทายหลักในสภาวะ FGD กราไฟต์ต้านทานฟลูออไรด์ M230F-Furan ของ Huahao Sealing:

- วัสดุฐาน: กราไฟต์โครงสร้างเม็ดกลาง (เม็ด 30 ไมครอน, ต้านทานการกระแทก)
- สารอิมเพรกเนต: เรซินฟูรานฟูรูฟิวริลแอลกอฮอล์ (ปริมาณคาร์บอน 70%, ไม่มีพันธะคู่ C=C หลังการแข็งตัว, ต้านทานกรดที่ไม่ทำให้เกิดออกซิเดชันเช่น HF, HCl, H₂SO₄)
- ประสิทธิภาพการต้านทาน HF: แช่ 20% HF ที่ 60℃ เป็นเวลา 30 วัน อัตราการสูญเสียน้ำหนัก <0.05% (เมื่อเปรียบเทียบกับกราไฟต์อิมเพรกเนตเรซินทั่วไปสูญเสียน้ำหนัก 3.8%)
- ความแข็งแรงเชิงกล: ความแข็งแรงต่อการอัด 280 MPa, ความแข็งแรงต่อการหัก 65 MPa (สูงกว่ากราไฟต์เรซินทั่วไป 50%)
- ความแข็งชอร์: HS 85 (ตรงกับระดับความทนต่อการสึกหรอของซิลิคอนคาร์ไบด์)

### 2.2 วัสดุประกบ (การปรับปรุงที่สำคัญ!)

**ห้ามอย่างเคร่งครัดวัสดุที่มีฐานซิลิคอนใดๆ (SSiC, RBSiC, Si₃N₄)** — การกัดกร่อนของไอออนฟลูออไรด์ไม่สามารถย้อนกลับได้ วงประกบเลือก:

- คาร์ไบด์ซีเมนต์ WC-Ni (ประเภท YG8, เฟสไบด์เนอร์ Ni 8%, WC 92%)
  - ต้านทาน HF: WC ไม่ปฏิกิริยากับ HF, เฟสไบด์เนอร์ Ni มีความเสถียรอย่างมากในสภาพแวดล้อมกรดอ่อนที่อุณหภูมิต่ำกว่า 50℃
  - ความแข็ง: HRA 91, ความทนต่อการสึกกร่อนจากอนุภาคดีกว่าซิลิคอนคาร์ไบด์
  - หมายเหตุ: หลีกเลี่ยงอุณหภูมิสูง (> 200℃) กรดแรง เฟสไบด์เนอร์ Ni อาจถูกกัดกร่อน; ปลอดภัยอย่างสมบูรณ์ที่ 60℃ สภาวะ FGD

### 2.3 ซีลเสริม

- O-ring: EPDM (ยางเอทิลีน-โปรพิลีนไดอีน, ต้านทาน HF + คลอไรด์สูง + กรดอ่อน แนะนำ DuPont Vamac GLS), หรือ FFKM (Kalrez 4079, ต้านทานสารเคมีรุนแรง)
- ชิ้นส่วนโลหะ: สตีลดูเพล็กซ์ 2205 (UNS S31803, ต้านทานการกัดกร่อนรูพรุน Cl⁻ 50000 มก./ล.) หรือ Hastelloy C276
- สปริง: Hastelloy C276 (316L ทั่วไปแตกร้าวจากความเครียดจากการกัดกร่อนภายใน 3 เดือนในสารละลายคลอไรด์สูง)

## 3. การออกแบบโครงสร้างและแผนการล้าง

### 3.1 โครงสร้างคาร์ทริดจ์หน้าคู่

**ห้ามอย่างเคร่งครัดซีลเดี่ยวสำหรับสภาวะสารละลาย FGD** (อนุภาคเข้าสู่ผิวหน้าซีลโดยตรง และเสียหายจากการสึกกร่อนภายใน 2 สัปดาห์) โซลูชันมาตรฐาน: คาร์ทริดจ์หน้าคู่ (ประเภทซีรีส์แทนเดม):

- ด้านใน (ด้านบรรยากาศ): กราไฟต์ M230F × WC-Ni, สัมผัสน้ำล้าง (สะอาดไม่มีอนุภาค)
- ด้านนอก (ด้านตัวกลาง): กราไฟต์ M230F × WC-Ni, สัมผัสสารละลายกระบวนการ
- สปริงรวม: สปริงขนาดใหญ่ภายนอก (สปริงในตัวอุดตันง่าย ประเภทภายนอกไม่สัมผัสตัวกลาง)
- ติดตั้งแบบคาร์ทริดจ์ทั้งหมด สามารถเปลี่ยนซีลได้โดยไม่ต้องถอดปั๊ม ลดเวลาบำรุงรักษาจาก 24 ชั่วโมงเป็น 4 ชั่วโมง

### 3.2 แผนการล้าง API PLAN 32 + PLAN 64

**PLAN 32 (การล้างภายนอก)** — ความสำคัญในการป้องกันอนุภาคเข้าสู่ห้องซีล:
- แหล่งน้ำล้าง: น้ำเสริมกระบวนการ FGD (ผ่านตัวกรอง SS <1 มก./ล. ขนาดอนุภาค <5 ไมครอน)
- ความดันล้าง: สูงกว่าความดันห้องซีล 0.1-0.2 MPa (โดยทั่วไป 0.5-0.7 MPa)
- อัตราการไหลล้าง: 1.5-3.0 ลบ.ม./ชม. (ปั๊มเส้นผ่านศูนย์กลาง 80-150 มม.)
- วิธีการล้าง: ฉีดเข้าห้องซีลตามแนวสัมผัส สร้างวอร์เท็กซ์ล้างอนุภาค ป้องกันการตกตะกอน

**PLAN 64 (การตรวจสอบการรั่ว + การล้างฉุกเฉิน)**:
- ช่องทางรั่วของซีลด้านในเชื่อมต่อสวิตช์ความดัน เมื่อความดันรั่ว >0.1 MPa หรืออัตราการไหล >20 ลิตร/ชม. ให้สัญญาณเตือน DCS
- ช่องทางรั่วสามารถเปลี่ยนเป็นอินเทอร์เฟซการล้างฉุกเฉิน (เชื่อมต่อน้ำกระบวนการความดันสูง) ฉีดน้ำล้างฉุกเฉินเมื่อซีลด้านในล้มเหลว ป้องกันสารละลายเข้าสู่ตู้ตลับลูกปืน

### 3.3 การออกแบบป้องกันการตกตะกอนของอนุภาค

- ห้องซีลติดตั้งแผ่นนำทางเอียง (45°) อนุภาคตกตะกอนตามพื้นผิวเอียง ไม่สะสมที่ด้านนอกเส้นผ่านศูนย์กลางของผิวหน้าซีล
- ด้านนอกเส้นผ่านศูนย์กลางของผิวหน้าซีลติดตั้ง "ริมกั้นทราย" (แผ่นบาง PTFE + รองรับ EPDM) กั้นอนุภาคขนาดใหญ่ (> 20 ไมครอน) ไม่ให้กระทบผิวหน้าซีลโดยตรง
- ฐานสปริงติดตั้ง "รูทำความสะอาดตัวเอง" (รู φ8 ×4) น้ำล้างผ่านช่องทางฐานสปริง พาอนุภาคที่ตกตะกอนออกไป

## 4. กรณีศึกษา Huahao Sealing

เครื่องกำเนิดไฟฟ้าอัลตร้าซูเปอร์คริติคัล 2×660 MW ของกลุ่มพลังงานระดับจังหวัด ระบบ FGD แต่ละเครื่องติดตั้งปั๊มหมุนเวียนสารละลาย 6 ตัว (อัตราการไหล 8800 ลบ.ม./ชม. ศีรษะ 22 ม. ความเร็ว 590 รอบ/นาที. เส้นผ่านศูนย์กลางซีล 160 มม.) เดิมมีปัญหากับซีลเดี่ยวแบบมีสปริงในตัว SSiC × SSiC ของแบรนด์นำเข้า:

1. วงประกบ SSiC ถูกกัดกร่อนด้วยฟลูออไรด์ อายุการใช้งานเฉลี่ย **42 วัน** (สั้นที่สุด 23 วัน) ถอดตรวจพบว่าผิวหน้าซีลเต็มไปด้วยรูหลุม และมีการแตกในส่วนบางส่วน
2. เปลี่ยนซีลประมาณ 8 ครั้งต่อปีต่อปั๊ม ค่าใช้จ่ายอะไหล่ + ค่าบำรุงรักษาสำหรับ 12 ปั๊มประมาณ 7.8 ล้าน CNY
3. การรั่วของซีลทำให้สารละลายกระเด็นเข้าหม้อพันมอเตอร์ เกิดอุบัติเหตุมอเตอร์ไหม้ 2 ครั้งในปี 2019 (สูญเสียประมาณ 1.8 ล้าน CNY)

หลังจากเปลี่ยนเป็นโซลูชัน **กราไฟต์ฟูราน M230F × คาร์ไบด์ซีเมนต์ WC-Ni + คาร์ทริดจ์หน้าคู่ + PLAN 32 (น้ำกระบวนการ 0.6 MPa, 2 ลบ.ม./ชม.) + PLAN 64 + ชิ้นส่วนโลหะสตีลดูเพล็กซ์ 2205 + O-ring EPDM** ของ Huahao Sealing ในปี 2020:

- เครื่องแรกทำงานต่อเนื่อง **26 เดือน** (2020.03-2022.05) โดยไม่มีการรั่วซึม ถอดตรวจสอบการบำรุงรักษาตามแผน การสึกหรอของผิวหน้าซีล 0.12 มม. (อัตราการสึกหรอ 0.00046 มม./100 ชั่วโมง)
- อายุซีลเฉลี่ย **22 เดือน** (+1471%), ปรับปรุงจาก 42 วัน
- ค่าใช้จ่ายอะไหล่ + ค่าบำรุงรักษาต่อปีลดจาก 7.8 ล้านเป็น **ประมาณ 0.8 ล้าน CNY** ประหยัดสะสมมากกว่า 20 ล้าน CNY
- อุบัติเหตุมอเตอร์ไหม้เป็นศูนย์ ความพร้อมใช้งานของเครื่องเพิ่มจาก 92.3% เป็น 98.7%

หลักการเลือก: ความเข้มข้นของฟลูออไรด์กำหนดวัสดุประกบ (F⁻ > 50 มก./ล. ห้ามใช้วัสดุฐานซิลิคอน เปลี่ยนเป็น WC) ปริมาณอนุภาคแข็งกำหนดแผนการล้าง (>10% ต้องใช้การล้างภายนอก PLAN 32) ความเข้มข้นของคลอไรด์กำหนดเกรดวัสดุโลหะ (>30000 มก./ล. เลือกสตีลดูเพล็กซ์ 2205 หรือ C276)`,
    },
  },
  {
    slug: "vacuum-pump-dry-gas-seal-carbon-graphite",
    title: {
      zh: "化工真空泵干气密封碳石墨环应用：无油式螺杆真空泵含可凝性汽体 80℃ 工况",
      en: "Carbon Graphite Rings for Dry Gas Seals in Chemical Vacuum Pumps: 80℃ Oil-Free Screw Vacuum Pump Service with Condensable Vapors",
      vi: "Vòng than chì carbon cho kín khí khô của bơm chân không hóa chất: Điều kiện bơm chân không trục vít không dầu 80℃ chứa hơi ngưng tụ",
      th: "แหวนคาร์บอนกราไฟต์สำหรับซีลก๊าซแห้งของปั๊มสูญญากาศเคมี: สภาวะปั๊มสูญญากาศสกรูแบบไม่มีน้ำมัน 80℃ ที่มีไอที่สามารถกลั่นตัวได้",
    },
    excerpt: {
      zh: "针对化工、医药行业无油式螺杆真空泵抽取甲醇、丙酮、乙酸乙酯等可凝性有机溶剂蒸汽工况，传统机械密封动环磨损快、启动冒烟的问题，本文讲解浸渍锑-铜合金碳石墨干气密封环选型、螺旋槽流体动压设计与华豪密封案例。",
      en: "For the problem of fast mechanical seal rotating ring wear and startup smoke in oil-free screw vacuum pumps extracting condensable organic solvent vapors (methanol, acetone, ethyl acetate) in chemical and pharmaceutical industries, this article covers antimony-copper alloy impregnated carbon graphite dry gas seal ring selection, spiral groove hydrodynamic design, and Huahao Sealing cases.",
      vi: "Dành cho vấn đề mài mòn nhanh vòng quay kín cơ khí và khói khi khởi động ở bơm chân không trục vít không dầu hút hơi dung môi hữu cơ ngưng tụ (metanol, axeton, etyl axetat) trong hóa chất và dược phẩm, bài viết trình bày chọn vòng kín khí khô than chì carbon tẩm hợp kim antimon-đồng, thiết kế động áp lực chất lỏng rãnh xoắn ốc và case study Huahao Sealing.",
      th: "สำหรับปัญหาการสึกหรอของวงหมุนซีลกลไกที่รวดเร็วและควันตอนเริ่มต้นในปั๊มสูญญากาศสกรูแบบไม่มีน้ำมันที่ดูดไอของตัวทำละลายออร์แกนิกที่สามารถกลั่นตัวได้ (เมทานอล อะซิโตน เอทิลแอซิเทต) ในอุตสาหกรรมเคมีและยา บทความนี้ครอบคลุมการเลือกแหวนซีลก๊าซแห้งคาร์บอนกราไฟต์อิมเพรกเนตอัลลอยด์แอนทิโมนี-ทองแดง การออกแบบไฮโดรไดนามิกร่องเกลียว และกรณีศึกษา Huahao Sealing",
    },
    tag: "application",
    date: "2026-07-20",
    content: {
      zh: `## 核心要点

- 无油式螺杆真空泵干气密封要求密封面在启动/停车瞬间（气膜未形成时）仍能无润滑干摩擦运行 100+ 次启动循环，普通浸渍石墨动环寿命不足 1 年
- 选用锑-铜双金属浸渍石墨（Sb 12% + Cu 18%）：高温强度高、导热系数 120 W/m·K（树脂浸渍石墨仅 15-25）、线膨胀系数 2.1×10⁻⁶/℃（匹配碳化硅）
- 螺旋槽深度 3-5 μm（干气密封典型值），非接触式气膜密封，泄漏率 < 1×10⁻⁵ Pa·m³/s（氦检漏标准 VI 级）
- 华豪密封为某大型石化集团 14 套溶剂回收系统无油螺杆真空泵配套，运行 4.2 年无泄漏，累计启动 3800+ 次

化工和制药行业的溶剂回收工艺大量使用无油式螺杆真空泵，其干气密封（Dry Gas Seal, DGS）是核心密封元件。工况特点是抽取的介质为甲醇、丙酮、乙酸乙酯、二氯甲烷等可凝性有机溶剂蒸汽，且真空泵启动/停车频繁（每天 2-3 次，切换不同批次溶剂）。启动瞬间密封端面尚未形成稳定气膜，处于干摩擦状态，要求密封材料耐干磨、抗热裂、导热快。本文结合霍邱县华豪密封件有限公司的应用经验，介绍干气密封碳石墨环选型要点。

## 一、工况特性

### 1.1 典型工况参数

- 抽吸介质：甲醇（沸点 64.7℃）、丙酮（56℃）、乙酸乙酯（77℃）、二氯甲烷（39.6℃）
- 工作压力：入口 1-100 kPa（绝对压力），出口 101-200 kPa（排至冷凝器）
- 工作温度：密封腔 60-95℃（可凝汽体压缩放热），最高 105℃
- 泵转速：2950-3500 r/min（4 极电机）
- 启停循环：≥ 1000 次/年，频繁启停

### 1.2 失效模式

传统树脂浸渍石墨干气密封失效统计：

1. **启动干摩擦磨损（50%）**：停车时气膜消失，下一次启动瞬间（<0.5 s）端面直接接触干摩擦，树脂浸渍石墨导热差（15-25 W/m·K），端面瞬时温度可达 300℃→树脂炭化→密封面出现"热斑"→磨斑→3-6 个月磨损 0.5 mm 以上泄漏。
2. **可凝液膜润滑破坏（25%）**：部分溶剂蒸汽在密封面冷凝成液膜（1-5 μm），但极性溶剂（甲醇）会溶胀普通树脂浸渍剂→浸渍剂析出→孔隙率升高→强度下降。
3. **密封面热裂纹（15%）**：频繁启停导致温度骤变（常温→80℃→常温），树脂石墨与 SSiC 热膨胀系数不匹配（树脂石墨 4.5×10⁻⁶/℃ vs SSiC 3.2×10⁻⁶/℃）→热应力→微裂纹。
4. **O 型圈老化（10%）**：溶剂蒸汽使 FKM O 型圈溶胀（甲醇中 FKM 溶胀率 10-15%），弹性下降，补偿失效。

## 二、材料选型

### 2.1 锑-铜双金属浸渍石墨

无油真空泵干气密封动环推荐华豪密封 锑-铜双金属浸渍石墨：

- **基材**：细颗粒高强石墨（颗粒 10 μm，密度 1.85 g/cm³，气孔率 14-17%）
- **浸渍剂**：锑（Sb）12% + 铜（Cu）18% 双金属真空压力浸渍（浸渍率 ≥ 95%，残余气孔率 < 1%）
- **导热系数**：120 W/m·K（树脂浸渍石墨的 5-8 倍，启动干摩擦热量迅速导出，避免热斑）
- **线膨胀系数**：2.1×10⁻⁶/℃（与 SSiC 的 3.2×10⁻⁶/℃ 接近，频繁启停热应力减少 60%）
- **机械强度**：抗压 380 MPa，抗折 95 MPa，肖氏 HS 92（耐干摩擦磨损能力是树脂浸渍石墨的 3-4 倍）
- **耐溶剂性**：双金属浸渍剂不溶胀于任何有机溶剂（甲醇、丙酮、乙酸乙酯、甲苯等全稳定）

### 2.2 配对材料与辅助密封

- **配对环**：SSiC 无压烧结碳化硅（R_b 0.05-0.1 μm 镜面抛光，平面度 ≤ 0.0009 mm，与锑铜石墨配对 PV 值可达 25 MPa·m/s）
- **O 型圈**：FFKM（Kalrez Spectrum 7075，耐所有有机溶剂，甲醇溶胀率 < 1%）或 FEPM（Aflas 150P，耐极性溶剂）
- **金属件**：316L 不锈钢（无强腐蚀溶剂可胜任；含卤代烃选 2205 双相钢）

### 2.3 为什么不选其他浸渍剂

| 浸渍剂类型 | 导热系数 | 启动干磨寿命 | 耐溶剂 | 成本 | 适用性评价 |
|-----------|---------|------------|-------|-----|-----------|
| 环氧树脂 | 15-25 | 6 个月-1 年 | 差（甲醇/丙酮溶胀） | 低 | ✗ 不推荐 |
| 呋喃树脂 | 18-30 | 8-14 个月 | 中-良 | 中 | ✗ 启停 >300 次仍失效 |
| 巴氏合金（Cu-Sn） | 60-85 | 1.5-2.5 年 | 中 | 中高 | △ 导热一般，干磨寿命中等 |
| 纯锑 Sb | 80-100 | 2.5-3.5 年 | 极优 | 高 | ✓ 优秀但高温强度略低 |
| **锑-铜双金属** | **110-130** | **4-6 年** | **极优** | **高** | **✓ 最佳** |

## 三、螺旋槽干气密封结构设计

### 3.1 螺旋槽几何参数（动压效应设计）

干气密封核心是动环端面上的螺旋槽产生流体动压效应，使密封面在正常运转时非接触（气膜厚度 3-5 μm）。

- **槽型**：对数螺旋线（满足 Archimedes 螺旋方程 r = r₀·e^(θ·tanα)），α = 15-18°（最优升角，兼顾动压刚度和泄漏量）
- **槽深**：3-5 μm（±0.3 μm，精密激光刻蚀，槽深公差 ±5% 内）
- **槽数**：12-16 条（口径 60-120 mm），槽宽：堰宽 = 1:1（对称结构）
- **槽深比（气膜刚度关键）**：槽深 h / 气膜厚度 t ≈ 1:1 → h ≈ 3-5 μm，此时气膜刚度最大（K_gas ≥ 200 N/μm）

### 3.2 端面比压控制

- **端面比压 P_c**：设计为 0.2-0.3 MPa（仅为接触式密封的 1/3-1/4，非接触式气膜承受主要载荷）
- **闭合力计算**：P_c = P_spring + P_medium × A_med / A_seal
  - P_spring（弹簧比压）：0.08-0.12 MPa（小弹簧多组，均匀加载）
  - A_med / A_seal（介质作用面积系数）：0.75-0.85（平衡型设计，避免压力增大时比压过高）

### 3.3 气膜厚度验证

通过流体动压仿真 + 现场实测验证气膜厚度：

- **仿真（Reynolds 方程 CFD）**：3000 r/min、0.1 MPa 压差下，气膜厚度 4.2 μm，泄漏率 8.5×10⁻⁷ Pa·m³/s
- **实测（电容法位移传感器）**：稳定运行时 4.0-4.5 μm，启动瞬间干摩擦接触时间 < 0.3 s
- **氦检漏**：泄漏率 ≤ 1×10⁻⁶ Pa·m³/s，优于 API 682 Type A 干气密封泄漏标准

## 四、华豪密封案例

某大型石化集团下属精细化工公司 4 套 5 万吨/年乙酸乙酯溶剂回收装置，共 14 台无油式螺杆真空泵（流量 1500 m³/h，极限真空 50 Pa，转速 2950 r/min，密封口径 90 mm），原用某进口品牌树脂浸渍石墨干气密封存在以下问题：

1. 密封平均寿命 **11 个月**，启动频繁（每 18 小时切换一次，启停约 1500 次/年），拆检发现密封面布满 0.3-0.5 mm 深磨斑，热裂纹 3-5 条
2. 每年约换 13 套密封，备件费 + 停车检修费约 **195 万元**
3. 启动瞬间密封面干摩擦冒烟，溶剂蒸汽与磨屑混合物存在燃爆风险（2018 年有过一次闪爆未遂事故）

2019 年改用华豪密封 **锑-铜双金属浸渍石墨动环 + SSiC 配对环 + 螺旋槽（α=16°，槽深 4 μm）+ Kalrez 7075 O 型圈 + 小弹簧平衡型** 方案后：

- 首台泵连续运行 **4.2 年（2019.08-2023.11）**，拆检时密封面磨损量 **0.08 mm**，无热裂纹，气膜厚度仍稳定在 3.8 μm
- 累计启动 **3800+ 次**，密封寿命 **50.4 个月**（+358%），从 11 个月提升
- 启动干摩擦冒烟现象**完全消除**，2019-2023 年零闪爆风险事件
- 每年备件费 + 检修费从 195 万降至 **约 22 万元**，累计节约 700+ 万元

选型核心：启停频率决定浸渍剂（>500 次/年必须双金属浸渍）、介质溶剂极性决定 O 型圈等级（极性溶剂选 FFKM）、导热系数决定干摩擦寿命（Sb-Cu 120 W/m·K 为最佳）。`,
      en: `## Key Takeaways

- Dry gas seals of oil-free screw vacuum pumps require seal faces to operate without lubrication through 100+ start-stop cycles at start/shutdown transients (before gas film forms); ordinary impregnated graphite rotating ring life is less than 1 year
- Select antimony-copper bimetal impregnated graphite (Sb 12% + Cu 18%): high high-temperature strength, thermal conductivity 120 W/m·K (resin-impregnated graphite only 15-25), linear expansion coefficient 2.1×10⁻⁶/℃ (matches silicon carbide)
- Spiral groove depth 3-5 μm (typical for dry gas seals), non-contact gas film seal, leakage rate < 1×10⁻⁵ Pa·m³/s (helium leak test standard Class VI)
- Huahao Sealing supplied 14 sets of oil-free screw vacuum pumps for a large petrochemical group's solvent recovery system; running 4.2 years without leakage, cumulative 3800+ starts

Solvent recovery processes in chemical and pharmaceutical industries extensively use oil-free screw vacuum pumps, and their Dry Gas Seals (DGS) are the core sealing components. The service is characterized by extracting condensable organic solvent vapors such as methanol, acetone, ethyl acetate, and dichloromethane, with frequent vacuum pump start/stop cycles (2-3 times per day, switching between different solvent batches). At the moment of startup, a stable gas film has not yet formed on the seal face, putting it in dry friction state, requiring seal materials resistant to dry wear, thermal crack resistance, and fast thermal conduction. Based on the application experience of Huoqiu County Huahao Sealing Co., Ltd., this article introduces key points for selecting carbon graphite rings for dry gas seals.

## 1. Service Characteristics

### 1.1 Typical Service Parameters

- Suction media: methanol (boiling point 64.7℃), acetone (56℃), ethyl acetate (77℃), dichloromethane (39.6℃)
- Working pressure: inlet 1-100 kPa (absolute), outlet 101-200 kPa (discharged to condenser)
- Working temperature: seal chamber 60-95℃ (condensable vapor compression heat release), max 105℃
- Pump speed: 2950-3500 r/min (4-pole motor)
- Start-stop cycles: ≥ 1000 times/year, frequent start-stop

### 1.2 Failure Modes

Conventional resin-impregnated graphite dry gas seal failure statistics:

1. **Startup dry friction wear (50%)**: Gas film disappears at shutdown, at the next startup instant (<0.5 s) faces directly contact dry friction. Resin-impregnated graphite has poor thermal conduction (15-25 W/m·K), face instantaneous temperature can reach 300℃ → resin carbonization → seal face shows "hot spots" → wear spots → 0.5 mm+ wear in 3-6 months causing leakage.
2. **Condensable liquid film lubrication breakdown (25%)**: Part of solvent vapor condenses into liquid film (1-5 μm) on seal faces, but polar solvents (methanol) will swell ordinary resin impregnant → impregnant precipitation → porosity increase → strength decrease.
3. **Seal face thermal cracks (15%)**: Frequent start-stops cause temperature shocks (ambient → 80℃ → ambient), thermal expansion coefficient mismatch between resin graphite and SSiC (resin graphite 4.5×10⁻⁶/℃ vs SSiC 3.2×10⁻⁶/℃) → thermal stress → microcracks.
4. **O-ring aging (10%)**: Solvent vapor causes FKM O-ring swelling (FKM swelling rate in methanol 10-15%), elasticity decreases, compensation fails.

## 2. Material Selection

### 2.1 Antimony-Copper Bimetal Impregnated Graphite

Huahao Sealing antimony-copper bimetal impregnated graphite is recommended for oil-free vacuum pump dry gas seal rotating rings:

- **Base material**: fine-grain high-strength graphite (grain 10 μm, density 1.85 g/cm³, porosity 14-17%)
- **Impregnant**: antimony (Sb) 12% + copper (Cu) 18% bimetal vacuum pressure impregnation (impregnation rate ≥ 95%, residual porosity < 1%)
- **Thermal conductivity**: 120 W/m·K (5-8 times that of resin-impregnated graphite; startup dry friction heat rapidly conducts away, avoiding hot spots)
- **Linear expansion coefficient**: 2.1×10⁻⁶/℃ (close to SSiC's 3.2×10⁻⁶/℃, frequent start-stop thermal stress reduced by 60%)
- **Mechanical strength**: compressive 380 MPa, flexural 95 MPa, Shore HS 92 (dry friction wear resistance 3-4 times that of resin-impregnated graphite)
- **Solvent resistance**: bimetal impregnant does not swell in any organic solvent (fully stable in methanol, acetone, ethyl acetate, toluene, etc.)

### 2.2 Mating Material and Auxiliary Seals

- **Mating ring**: SSiC pressureless sintered silicon carbide (R_a 0.05-0.1 μm mirror polish, flatness ≤ 0.0009 mm, PV value paired with antimony-copper graphite can reach 25 MPa·m/s)
- **O-rings**: FFKM (Kalrez Spectrum 7075, resistant to all organic solvents, methanol swelling rate < 1%) or FEPM (Aflas 150P, resistant to polar solvents)
- **Metal parts**: 316L stainless steel (suitable for non-corrosive solvents; for halogenated hydrocarbons select 2205 duplex steel)

### 2.3 Why Not Select Other Impregnants

| Impregnant Type | Thermal Conductivity | Startup Dry-Wear Life | Solvent Resistance | Cost | Suitability |
|----------------|---------------------|----------------------|-------------------|------|-------------|
| Epoxy Resin | 15-25 | 6 mo - 1 yr | Poor (methanol/acetone swelling) | Low | ✗ Not recommended |
| Furan Resin | 18-30 | 8-14 mo | Fair-Good | Medium | ✗ Fails at >300 cycles |
| Babbitt (Cu-Sn) | 60-85 | 1.5-2.5 yr | Fair | Med-High | △ Fair conduction, medium life |
| Pure Sb | 80-100 | 2.5-3.5 yr | Excellent | High | ✓ Excellent but lower HT strength |
| **Sb-Cu Bimetal** | **110-130** | **4-6 yr** | **Excellent** | **High** | **✓ Best** |

## 3. Spiral Groove Dry Gas Seal Structural Design

### 3.1 Spiral Groove Geometric Parameters (Hydrodynamic Effect Design)

The core of a dry gas seal is the spiral grooves on the rotating ring end face that generate a hydrodynamic effect, making the seal faces non-contact during normal operation (gas film thickness 3-5 μm).

- **Groove type**: logarithmic spiral (satisfies Archimedean spiral equation r = r₀·e^(θ·tanα)), α = 15-18° (optimal helix angle, balancing hydrodynamic stiffness and leakage)
- **Groove depth**: 3-5 μm (±0.3 μm, precision laser etching, groove depth tolerance within ±5%)
- **Groove count**: 12-16 (diameter 60-120 mm), groove width:land width = 1:1 (symmetric structure)
- **Groove depth ratio (gas film stiffness key)**: groove depth h / gas film thickness t ≈ 1:1 → h ≈ 3-5 μm, at which gas film stiffness is maximized (K_gas ≥ 200 N/μm)

### 3.2 Face Specific Pressure Control

- **Face specific pressure P_c**: designed at 0.2-0.3 MPa (only 1/3-1/4 of contact seals, non-contact gas film bears the main load)
- **Closing force calculation**: P_c = P_spring + P_medium × A_med / A_seal
  - P_spring (spring specific pressure): 0.08-0.12 MPa (multiple sets of small springs, uniformly loaded)
  - A_med / A_seal (medium action area coefficient): 0.75-0.85 (balanced design, avoiding excessive specific pressure at increased pressure)

### 3.3 Gas Film Thickness Verification

Verify gas film thickness through hydrodynamic simulation + field measurement:

- **Simulation (Reynolds equation CFD)**: at 3000 r/min, 0.1 MPa differential pressure, gas film thickness 4.2 μm, leakage rate 8.5×10⁻⁷ Pa·m³/s
- **Actual measurement (capacitance displacement sensor)**: 4.0-4.5 μm during stable operation, startup instantaneous dry friction contact time < 0.3 s
- **Helium leak test**: leakage rate ≤ 1×10⁻⁶ Pa·m³/s, better than API 682 Type A dry gas seal leakage standard

## 4. Huahao Sealing Case Study

A fine chemical company under a large petrochemical group has 4 sets of 50000 t/year ethyl acetate solvent recovery units, with a total of 14 oil-free screw vacuum pumps (flow 1500 m³/h, ultimate vacuum 50 Pa, speed 2950 r/min, seal diameter 90 mm). Originally, there were the following problems with an imported brand resin-impregnated graphite dry gas seal:

1. Average seal life **11 months**, frequent startup (switches every 18 hours, about 1500 start-stops/year), teardown found seal faces covered with 0.3-0.5 mm deep wear spots, 3-5 thermal cracks
2. About 13 seal replacements per year, spare parts cost + shutdown maintenance cost about **1.95 million CNY**
3. Startup transient seal face dry friction produced smoke, solvent vapor plus wear debris mixture presented explosion risk (one near-miss flash explosion incident in 2018)

After switching to Huahao Sealing's **antimony-copper bimetal impregnated graphite rotating ring + SSiC mating ring + spiral groove (α=16°, groove depth 4 μm) + Kalrez 7075 O-rings + small spring balanced type** solution in 2019:

- First pump continuous operation **4.2 years (2019.08-2023.11)**, teardown inspection seal face wear **0.08 mm**, no thermal cracks, gas film thickness still stable at 3.8 μm
- Cumulative **3800+ starts**, seal life **50.4 months** (+358%), improved from 11 months
- Startup dry friction smoke phenomenon **completely eliminated**, zero flash explosion risk incidents 2019-2023
- Annual spare parts cost + maintenance cost reduced from 1.95 million to **about 0.22 million CNY**, cumulative savings 7+ million CNY

Selection core: start-stop frequency determines impregnant (>500 times/year requires bimetal impregnation), medium solvent polarity determines O-ring grade (polar solvents select FFKM), thermal conductivity determines dry friction life (Sb-Cu 120 W/m·K is optimal).`,
      vi: `## Điểm chính

- Kín khí khô của bơm chân không trục vít không dầu yêu cầu mặt kín phải vận hành không có chất bôi trơn qua 100+ chu kỳ khởi động/dừng ở thời điểm quá trình khởi động/dừng (trước khi màng khí hình thành); tuổi thọ vòng quay than chì tẩm thông thường dưới 1 năm
- Chọn than chì tẩm kim loại kép antimon-đồng (Sb 12% + Cu 18%): độ bền nhiệt độ cao tốt, hệ số dẫn nhiệt 120 W/m·K (than chì tẩm nhựa chỉ 15-25), hệ số giãn nở tuyến tính 2.1×10⁻⁶/℃ (phù hợp với silic cacbua)
- Độ sâu rãnh xoắn ốc 3-5 μm (điển hình cho kín khí khô), kín màng khí không tiếp xúc, tỷ lệ rò rỉ < 1×10⁻⁵ Pa·m³/s (tiêu chuẩn VI kiểm tra rò rỉ heli)
- Huahao Sealing đã cung cấp 14 bộ bơm chân không trục vít không dầu cho hệ thống thu hồi dung môi của Tập đoàn hóa dầu lớn; chạy 4.2 năm không rò rỉ, tích lũy 3800+ lần khởi động

Quy trình thu hồi dung môi trong ngành hóa chất và dược phẩm sử dụng rộng rãi bơm chân không trục vít không dầu, và Kín Khí Khô (Dry Gas Seal, DGS) là bộ phận kín cốt lõi. Đặc điểm điều kiện là môi chất hút là hơi dung môi hữu cơ ngưng tụ như metanol, axeton, etyl axetat, điclometan, với chu kỳ khởi động/dừng bơm chân không thường xuyên (2-3 lần mỗi ngày, chuyển đổi giữa các lô dung môi khác nhau). Tại thời điểm khởi động, màng khí ổn định chưa hình thành trên mặt kín, đặt ở trạng thái ma sát khô, yêu cầu vật liệu kín chống mài khô, chống nứt nhiệt và dẫn nhiệt nhanh. Dựa trên kinh nghiệm ứng dụng của Công ty TNHH Vòng đệm Huahao huyện Hoắc Khâu, bài viết giới thiệu điểm chọn vòng than chì carbon cho kín khí khô.

## 1. Đặc tính điều kiện

### 1.1 Thông số điều kiện điển hình

- Môi chất hút: metanol (điểm sôi 64.7℃), axeton (56℃), etyl axetat (77℃), điclometan (39.6℃)
- Áp suất làm việc: vào 1-100 kPa (áp suất tuyệt đối), ra 101-200 kPa (thải vào bộ ngưng tụ)
- Nhiệt độ làm việc: buồng kín 60-95℃ (phát nhiệt nén hơi ngưng tụ), tối đa 105℃
- Tốc độ bơm: 2950-3500 r/phút (động cơ 4 cực)
- Chu kỳ khởi động/dừng: ≥ 1000 lần/năm, thường xuyên khởi động/dừng

### 1.2 Chế độ hỏng

Thống kê hỏng kín khí khô than chì tẩm nhựa truyền thống:

1. **Mài mòn ma sát khô khi khởi động (50%)**: Màng khí biến mất khi dừng, tại thời điểm khởi động tiếp theo (<0.5 s) mặt tiếp xúc trực tiếp ma sát khô. Than chì tẩm nhựa dẫn nhiệt kém (15-25 W/m·K), nhiệt độ tức thời mặt kín có thể đạt 300℃ → nhựa cacbon hóa → mặt kín xuất hiện "điểm nóng" → vết mài → mài 0.5 mm+ trong 3-6 tháng gây rò rỉ.
2. **Phá vỡ bôi trơn màng lỏng ngưng tụ (25%)**: Một phần hơi dung môi ngưng tụ thành màng lỏng (1-5 μm) trên mặt kín, nhưng dung môi phân cực (metanol) sẽ làm phình nở chất tẩm nhựa thông thường → chất tẩm kết tủa → tăng độ xốp → giảm độ bền.
3. **Nứt nhiệt mặt kín (15%)**: Thường xuyên khởi động/dừng gây sốc nhiệt (nhiệt độ phòng → 80℃ → nhiệt độ phòng), sự không khớp hệ số giãn nở nhiệt giữa than chì nhựa và SSiC (than chì nhựa 4.5×10⁻⁶/℃ so với SSiC 3.2×10⁻⁶/℃) → ứng suất nhiệt → vết nứt siêu nhỏ.
4. **Lão hóa O-ring (10%)**: Hơi dung môi làm O-ring FKM phình nở (tỷ lệ phình nở FKM trong metanol 10-15%), giảm độ đàn hồi, hỏng bù đắp.

## 2. Chọn vật liệu

### 2.1 Than chì tẩm kim loại kép Antimon-Đồng

Vòng quay kín khí khô bơm chân không không dầu khuyến nghị than chì tẩm kim loại kép antimon-đồng Sb-Cu của Huahao Sealing:

- **Vật liệu nền**: than chì cường độ cao hạt mịn (hạt 10 μm, khối lượng riêng 1.85 g/cm³, độ xốp 14-17%)
- **Chất tẩm**: antimon (Sb) 12% + đồng (Cu) 18% tẩm áp suất chân không kim loại kép (tỷ lệ tẩm ≥ 95%, độ xốp dư < 1%)
- **Hệ số dẫn nhiệt**: 120 W/m·K (5-8 lần so với than chì tẩm nhựa; nhiệt ma sát khô khi khởi động dẫn ra nhanh chóng, tránh điểm nóng)
- **Hệ số giãn nở tuyến tính**: 2.1×10⁻⁶/℃ (gần với 3.2×10⁻⁶/℃ của SSiC, ứng suất nhiệt khi khởi động/dừng thường xuyên giảm 60%)
- **Độ bền cơ học**: nén 380 MPa, uốn 95 MPa, Shore HS 92 (khả năng chống mài mòn ma sát khô gấp 3-4 lần so với than chì tẩm nhựa)
- **Chống dung môi**: chất tẩm kim loại kép không phình nở trong bất kỳ dung môi hữu cơ nào (hoàn toàn ổn định trong metanol, axeton, etyl axetat, toluen, v.v.)

### 2.2 Vật liệu ma đối và bộ phận kín phụ trợ

- **Vòng ma đối**: silic cacbua thiêu kết không áp suất SSiC (đánh bóng gương R_a 0.05-0.1 μm, độ phẳng ≤ 0.0009 mm, giá trị PV khi ghép với than chì antimon-đồng có thể đạt 25 MPa·m/s)
- **O-ring**: FFKM (Kalrez Spectrum 7075, chống tất cả dung môi hữu cơ, tỷ lệ phình nở trong metanol < 1%) hoặc FEPM (Aflas 150P, chống dung môi phân cực)
- **Bộ phận kim loại**: thép không gỉ 316L (phù hợp với dung môi không ăn mòn mạnh; cho hydrocacbon halogen chọn thép kép 2205)

### 2.3 Tại sao không chọn chất tẩm khác

| Loại chất tẩm | Độ dẫn nhiệt | Tuổi thọ mài khô khởi động | Chống dung môi | Chi phí | Đánh giá phù hợp |
|--------------|------------|--------------------------|---------------|--------|-----------------|
| Nhựa Epoxy | 15-25 | 6 tháng-1 năm | Kém (phình nở metanol/axeton) | Thấp | ✗ Không khuyến nghị |
| Nhựa Furan | 18-30 | 8-14 tháng | Trung bình-Tốt | Trung bình | ✗ Hỏng ở >300 chu kỳ |
| Hợp kim Babbitt (Cu-Sn) | 60-85 | 1.5-2.5 năm | Trung bình | Trung-Cao | △ Dẫn nhiệt khá, tuổi thọ trung bình |
| Antimon Sb tinh khiết | 80-100 | 2.5-3.5 năm | Rất tốt | Cao | ✓ Rất tốt nhưng độ bền nhiệt độ thấp hơn |
| **Antimon-Đồng kép** | **110-130** | **4-6 năm** | **Rất tốt** | **Cao** | **✓ Tốt nhất** |

## 3. Thiết kế kết cấu kín khí khô rãnh xoắn ốc

### 3.1 Thông số hình học rãnh xoắn ốc (Thiết kế hiệu ứng động áp lực)

Cốt lõi của kín khí khô là các rãnh xoắn ốc trên mặt vòng quay tạo ra hiệu ứng động áp lực chất lỏng, làm cho mặt kín không tiếp xúc khi vận hành ổn định (độ dày màng khí 3-5 μm).

- **Loại rãnh**: xoắn ốc logarit (thỏa mãn phương trình xoắn ốc Archimedes r = r₀·e^(θ·tanα)), α = 15-18° (góc nâng tối ưu, cân bằng độ cứng động áp và lượng rò rỉ)
- **Độ sâu rãnh**: 3-5 μm (±0.3 μm, khắc laser chính xác, dung sai độ sâu rãnh trong vòng ±5%)
- **Số rãnh**: 12-16 (đường kính 60-120 mm), chiều rộng rãnh:chiều rộng bờ = 1:1 (cấu trúc đối xứng)
- **Tỷ lệ độ sâu rãnh (chìa khóa độ cứng màng khí)**: độ sâu rãnh h / độ dày màng khí t ≈ 1:1 → h ≈ 3-5 μm, tại đây độ cứng màng khí là lớn nhất (K_gas ≥ 200 N/μm)

### 3.2 Kiểm soát áp suất riêng mặt kín

- **Áp suất riêng mặt kín P_c**: thiết kế ở 0.2-0.3 MPa (chỉ 1/3-1/4 so với kín tiếp xúc, màng khí không tiếp xúc chịu tải chính)
- **Tính toán lực đóng**: P_c = P_spring + P_medium × A_med / A_seal
  - P_spring (áp suất riêng lò xo): 0.08-0.12 MPa (nhiều bộ lò xo nhỏ, tải đồng đều)
  - A_med / A_seal (hệ số diện tích tác dụng môi chất): 0.75-0.85 (thiết kế cân bằng, tránh áp suất riêng quá cao khi áp suất tăng)

### 3.3 Xác minh độ dày màng khí

Xác minh độ dày màng khí thông qua mô phỏng động áp lực chất lỏng + đo thực tế hiện trường:

- **Mô phỏng (CFD phương trình Reynolds)**: ở 3000 r/phút, chênh lệch áp suất 0.1 MPa, độ dày màng khí 4.2 μm, tỷ lệ rò rỉ 8.5×10⁻⁷ Pa·m³/s
- **Đo thực tế (cảm biến vị trí phương pháp điện dung)**: 4.0-4.5 μm khi vận hành ổn định, thời gian tiếp xúc ma sát khô tức thời khi khởi động < 0.3 s
- **Kiểm tra rò rỉ heli**: tỷ lệ rò rỉ ≤ 1×10⁻⁶ Pa·m³/s, tốt hơn tiêu chuẩn rò rỉ kín khí khô API 682 Loại A

## 4. Case study Huahao Sealing

Công ty hóa chất tinh chế thuộc Tập đoàn hóa dầu lớn có 4 bộ máy thu hồi dung môi etyl axetat 50000 tấn/năm, tổng cộng 14 bơm chân không trục vít không dầu (lưu lượng 1500 m³/giờ, chân không giới hạn 50 Pa, tốc độ 2950 r/phút, đường kính kín 90 mm), ban đầu có vấn đề sau với kín khí khô than chì tẩm nhựa thương hiệu nhập khẩu:

1. Tuổi thọ kín trung bình **11 tháng**, thường xuyên khởi động (chuyển đổi mỗi 18 giờ, khoảng 1500 lần khởi động/dừng/năm), tháo kiểm thấy mặt kín đầy vết mài sâu 0.3-0.5 mm, 3-5 vết nứt nhiệt
2. Khoảng 13 lần thay kín mỗi năm, chi phí phụ tùng + chi phí bảo trì dừng máy khoảng **1.95 triệu CNY**
3. Ma sát khô mặt kín tức thời khi khởi động tạo khói, hỗn hợp hơi dung môi và mảnh vụn mài có rủi ro cháy nổ (một vụ gần xảy ra nổ chớp năm 2018)

Năm 2019 chuyển sang giải pháp **Vòng quay than chì tẩm kim loại kép antimon-đồng Sb-Cu + vòng ma đối SSiC + rãnh xoắn ốc (α=16°, độ sâu rãnh 4 μm) + O-ring Kalrez 7075 + kiểu cân bằng lò xo nhỏ** của Huahao Sealing:

- Bơm đầu tiên chạy liên tục **4.2 năm (2019.08-2023.11)**, tháo kiểm mài mòn mặt kín **0.08 mm**, không có vết nứt nhiệt, độ dày màng khí vẫn ổn định ở 3.8 μm
- Tích lũy **3800+ lần khởi động**, tuổi thọ kín **50.4 tháng** (+358%), cải thiện từ 11 tháng
- Hiện tượng khói ma sát khô khi khởi động **hoàn toàn được loại bỏ**, không có sự kiện rủi ro nổ chớp 2019-2023
- Chi phí phụ tùng + chi phí bảo trì hàng năm giảm từ 1.95 triệu xuống **khoảng 0.22 triệu CNY**, tiết kiệm tích lũy 7+ triệu CNY

Chọn lõi: tần suất khởi động/dừng quyết định chất tẩm (>500 lần/năm phải tẩm kim loại kép), phân cực dung môi môi chất quyết định cấp O-ring (dung môi phân cực chọn FFKM), hệ số dẫn nhiệt quyết định tuổi thọ ma sát khô (Sb-Cu 120 W/m·K là tốt nhất).`,
      th: `## ประเด็นสำคัญ

- ซีลก๊าซแห้งของปั๊มสูญญากาศสกรูแบบไม่มีน้ำมันต้องการให้ผิวหน้าซีลทำงานโดยไม่มีการหล่อลื่นผ่านรอบการเริ่ม-หยุด 100+ ครั้งในช่วงเวลาเริ่มต้น/หยุดชั่วคราว (ก่อนที่ฟิล์มก๊าซจะเกิดขึ้น); อายุการใช้งานของวงหมุนกราไฟต์อิมเพรกเนตทั่วไปน้อยกว่า 1 ปี
- เลือกกราไฟต์อิมเพรกเนตอัลลอยด์แอนทิโมนี-ทองแดงคู่ (Sb 12% + Cu 18%): ความแข็งแรงที่อุณหภูมิสูง สูง ค่านำความร้อน 120 W/m·K (กราไฟต์อิมเพรกเนตเรซินเพียง 15-25) สัมประสิทธิ์การขยายตัวเชิงเส้น 2.1×10⁻⁶/℃ (ตรงกับซิลิคอนคาร์ไบด์)
- ความลึกของร่องเกลียว 3-5 ไมครอน (ทั่วไปสำหรับซีลก๊าซแห้ง) ซีลฟิล์มก๊าซแบบไม่สัมผัส อัตราการรั่ว < 1×10⁻⁵ Pa·m³/s (มาตรฐานการทดสอบรั่วฮีเลียม Class VI)
- Huahao Sealing จัดหาปั๊มสูญญากาศสกรูแบบไม่มีน้ำมัน 14 ชุดให้กับระบบกู้คืนตัวทำละลายของกลุ่มปิโตรเคมีขนาดใหญ่; ทำงาน 4.2 ปีโดยไม่มีการรั่ว ซึ่งสะสมการเริ่มต้น 3800+ ครั้ง

กระบวนการกู้คืนตัวทำละลายในอุตสาหกรรมเคมีและยาใช้ปั๊มสูญญากาศสกรูแบบไม่มีน้ำมันอย่างแพร่หลาย และซีลก๊าซแห้ง (Dry Gas Seal, DGS) เป็นส่วนประกอบหลักของซีล ลักษณะเฉพาะของสภาวะการทำงานคือการดูดไอของตัวทำละลายออร์แกนิกที่สามารถกลั่นตัวได้ เช่น เมทานอล อะซิโตน เอทิลแอซิเทต และไดคลอโรเมเทน โดยมีการเริ่ม-หยุดปั๊มสูญญากาศบ่อยครั้ง (2-3 ครั้งต่อวัน สลับระหว่างชุดตัวทำละลายต่างๆ) ในช่วงเวลาเริ่มต้น ฟิล์มก๊าซที่เสถียรยังไม่ได้เกิดขึ้นบนผิวหน้าซีล ทำให้อยู่ในสภาวะการเสียดสีแห้ง จำเป็นต้องใช้วัสดุซีลที่ต้านทานการสึกหรอแห้ง ต้านทานรอยแตกจากความร้อน และนำความร้อนได้เร็ว จากประสบการณ์การใช้งานของบริษัท Huahao Sealing จังหวัด Huoqiu บทความนี้แนะนำประเด็นสำคัญในการเลือกแหวนคาร์บอนกราไฟต์สำหรับซีลก๊าซแห้ง

## 1. ลักษณะสภาวะการทำงาน

### 1.1 พารามิเตอร์สภาวะทั่วไป

- สื่อกลางที่ดูด: เมทานอล (จุดเดือด 64.7℃), อะซิโตน (56℃), เอทิลแอซิเทต (77℃), ไดคลอโรเมเทน (39.6℃)
- ความดันทำงาน: ที่เข้า 1-100 kPa (absolute), ที่ออก 101-200 kPa (ปล่อยไปยังคอนเดนเซอร์)
- อุณหภูมิทำงาน: ห้องซีล 60-95℃ (การคายความร้อนจากการอัดไอที่สามารถกลั่นตัวได้) สูงสุด 105℃
- ความเร็วปั๊ม: 2950-3500 รอบ/นาที (มอเตอร์ 4 ขั้ว)
- รอบการเริ่ม-หยุด: ≥ 1000 ครั้ง/ปี, บ่อยครั้งเริ่ม-หยุด

### 1.2 รูปแบบความเสียหาย

สถิติความเสียหายของซีลก๊าซแห้งกราไฟต์อิมเพรกเนตเรซินแบบดั้งเดิม:

1. **การสึกหรอจากการเสียดสีแห้งตอนเริ่มต้น (50%)**: ฟิล์มก๊าซหายไปเมื่อหยุดทำงาน ในช่วงเวลาเริ่มต้นครั้งต่อไป (<0.5 วินาที) ผิวหน้าจะสัมผัสโดยตรงกับการเสียดสีแห้ง กราไฟต์อิมเพรกเนตเรซินมีการนำความร้อนที่ไม่ดี (15-25 W/m·K) อุณหภูมิทันทีของผิวหน้าสามารถถึง 300℃ → คาร์บอเนตของเรซิน → ผิวหน้าซีลมี "จุดร้อน" → จุดสึกหรอ → สึกหรอ 0.5 มม.+ ใน 3-6 เดือนทำให้รั่ว
2. **การทำลายการหล่อลื่นฟิล์มของเหลวจากการกลั่นตัว (25%)**: บางส่วนของไอตัวทำละลายกลั่นตัวเป็นฟิล์มของเหลว (1-5 ไมครอน) บนผิวหน้าซีล แต่ตัวทำละลายขั้ว (เมทานอล) จะทำให้สารอิมเพรกเนตเรซินทั่วไปบวม → การตกตะกอนของสารอิมเพรกเนต → ความรูพรุนเพิ่มขึ้น → ความแข็งแรงลดลง
3. **รอยแตกจากความร้อนบนผิวหน้าซีล (15%)**: การเริ่ม-หยุดบ่อยครั้งทำให้เกิดชอคอุณหภูมิ (อุณหภูมิห้อง → 80℃ → อุณหภูมิห้อง) ความไม่สอดคล้องกันของสัมประสิทธิ์การขยายตัวจากความร้อนระหว่างกราไฟต์เรซินและ SSiC (กราไฟต์เรซิน 4.5×10⁻⁶/℃ เทียบกับ SSiC 3.2×10⁻⁶/℃) → ความเครียดจากความร้อน → รอยแตกจุลินทรีย์
4. **ความเสื่อมสภาพของ O-ring (10%)**: ไอตัวทำละลายทำให้ O-ring FKM บวม (อัตราบวม FKM ในเมทานอล 10-15%) ความยืดหยุ่นลดลง ชดเชยล้มเหลว

## 2. การเลือกวัสดุ

### 2.1 กราไฟต์อิมเพรกเนตอัลลอยด์แอนทิโมนี-ทองแดงคู่

แนะนำให้ใช้กราไฟต์อิมเพรกเนตอัลลอยด์แอนทิโมนี-ทองแดงคู่ Sb-Cu ของ Huahao Sealing สำหรับวงหมุนซีลก๊าซแห้งของปั๊มสูญญากาศแบบไม่มีน้ำมัน:

- **วัสดุฐาน**: กราไฟต์ความแข็งแรงสูงเม็ดละเอียด (เม็ด 10 ไมครอน, ความหนาแน่น 1.85 กร./ลบ.ซม. ความรูพรุน 14-17%)
- **สารอิมเพรกเนต**: แอนทิโมนี (Sb) 12% + ทองแดง (Cu) 18% อิมเพรกเนตความดันสุญญากาศด้วยโลหะคู่ (อัตราการอิมเพรกเนต ≥ 95%, ความรูพรุนคงเหลือ < 1%)
- **ค่านำความร้อน**: 120 W/m·K (5-8 เท่าของกราไฟต์อิมเพรกเนตเรซิน; ความร้อนจากการเสียดสีแห้งตอนเริ่มต้นถูกนำออกอย่างรวดเร็ว หลีกเลี่ยงจุดร้อน)
- **สัมประสิทธิ์การขยายตัวเชิงเส้น**: 2.1×10⁻⁶/℃ (ใกล้เคียงกับ 3.2×10⁻⁶/℃ ของ SSiC ความเครียดจากความร้อนเมื่อเริ่ม-หยุดบ่อยครั้งลดลง 60%)
- **ความแข็งแรงเชิงกล**: อัด 380 MPa, ดัด 95 MPa, ชอร์ HS 92 (ความสามารถในการต้านทานการสึกหรอจากการเสียดสีแห้ง 3-4 เท่าของกราไฟต์อิมเพรกเนตเรซิน)
- **การต้านทานตัวทำละลาย**: สารอิมเพรกเนตโลหะคู่ไม่บวมในตัวทำละลายออร์แกนิกใดๆ (เสถียรอย่างสมบูรณ์ในเมทานอล อะซิโตน เอทิลแอซิเทต โทลูอีน ฯลฯ)

### 2.2 วัสดุประกบและซีลเสริม

- **วงประกบ**: SSiC ซิลิคอนคาร์ไบด์เซนเตอร์แบบไม่มีแรงกด (R_a 0.05-0.1 ไมครอน ขัดกระจก ความราบ ≤ 0.0009 มม. ค่า PV เมื่อจับคู่กับกราไฟต์แอนทิโมนี-ทองแดงสามารถถึง 25 MPa·m/s)
- **O-ring**: FFKM (Kalrez Spectrum 7075, ต้านทานตัวทำละลายออร์แกนิกทั้งหมด อัตราบวมในเมทานอล < 1%) หรือ FEPM (Aflas 150P, ต้านทานตัวทำละลายขั้ว)
- **ชิ้นส่วนโลหะ**: 316L สเตนเลส (เหมาะสำหรับตัวทำละลายที่ไม่มีการกัดกร่อนรุนแรง; สำหรับไฮโดรคาร์บอนฮาโลเจนเลือกสตีลดูเพล็กซ์ 2205)

### 2.3 เหตุใดจึงไม่เลือกสารอิมเพรกเนตอื่นๆ

| ประเภทสารอิมเพรกเนต | ค่านำความร้อน | อายุการสึกหรอแห้งตอนเริ่มต้น | การต้านทานตัวทำละลาย | ค่าใช้จ่าย | การประเมินความเหมาะสม |
|---------------------|---------------|--------------------------|-----------------------|-----------|-----------------------|
| เรซินอีพ็อกซี่ | 15-25 | 6 เดือน - 1 ปี | ไม่ดี (บวมเมทานอล/อะซิโตน) | ต่ำ | ✗ ไม่แนะนำ |
| เรซินฟูราน | 18-30 | 8-14 เดือน | ปานกลาง - ดี | ปานกลาง | ✗ เสียหายเมื่อ > 300 รอบ |
| บาบบิตต์ (Cu-Sn) | 60-85 | 1.5-2.5 ปี | ปานกลาง | ปานกลาง - สูง | △ นำความร้อนได้ค่อนข้างดี อายุการใช้งานปานกลาง |
| แอนทิโมนีบริสุทธิ์ | 80-100 | 2.5-3.5 ปี | ดีเยี่ยม | สูง | ✓ ดีเยี่ยมแต่ความแข็งแรงที่อุณหภูมิสูงต่ำกว่า |
| **แอนทิโมนี-ทองแดงคู่** | **110-130** | **4-6 ปี** | **ดีเยี่ยม** | **สูง** | **✓ ดีที่สุด** |

## 3. การออกแบบโครงสร้างซีลก๊าซแห้งร่องเกลียว

### 3.1 พารามิเตอร์เรขาคณิตของร่องเกลียว (การออกแบบเอฟเฟกต์ไฮโดรไดนามิก)

แกนหลักของซีลก๊าซแห้งคือร่องเกลียวบนผิวหน้าของวงหมุนที่สร้างเอฟเฟกต์ไฮโดรไดนามิก ทำให้ผิวหน้าซีลไม่สัมผัสเมื่อทำงานปกติ (ความหนาฟิล์มก๊าซ 3-5 ไมครอน)

- **ประเภทร่อง**: เกลียวลอการิทึม (ปฏิบัติตามสมการเกลียวอาร์คิมิดีส r = r₀·e^(θ·tanα)), α = 15-18° (มุมแกว่งที่เหมาะสมที่สุด ดุลระหว่างความแข็งของแรงดันไฮโดรไดนามิกและอัตราการรั่ว)
- **ความลึกร่อง**: 3-5 ไมครอน (±0.3 ไมครอน, สลักด้วยเลเซอร์ความแม่นยำ ความคลาดเคลื่อนของความลึกร่องอยู่ใน ±5%)
- **จำนวนร่อง**: 12-16 (เส้นผ่านศูนย์กลาง 60-120 มม.), ความกว้างร่อง:ความกว้างแผ่นดิน = 1:1 (โครงสร้างสมมาตร)
- **อัตราส่วนความลึกร่อง (สำคัญต่อความแข็งของฟิล์มก๊าซ)**: ความลึกร่อง h / ความหนาฟิล์มก๊าซ t ≈ 1:1 → h ≈ 3-5 ไมครอน ซึ่งความแข็งของฟิล์มก๊าซจะอยู่ที่ระดับสูงสุด (K_gas ≥ 200 N/ไมครอน)

### 3.2 การควบคุมแรงดันจำเพาะของผิวหน้า

- **แรงดันจำเพาะของผิวหน้า P_c**: ออกแบบไว้ที่ 0.2-0.3 MPa (เพียง 1/3-1/4 ของซีลแบบสัมผัส ฟิล์มก๊าซแบบไม่สัมผัสรับภาระหลัก)
- **การคำนวณแรงปิด**: P_c = P_spring + P_medium × A_med / A_seal
  - P_spring (แรงดันจำเพาะของสปริง): 0.08-0.12 MPa (สปริงขนาดเล็กหลายชุด โหลดสม่ำเสมอ)
  - A_med / A_seal (สัมประสิทธิ์พื้นที่การทำงานของตัวกลาง): 0.75-0.85 (การออกแบบที่สมดุล หลีกเลี่ยงแรงดันจำเพาะสูงเกินไปเมื่อแรงดันเพิ่มขึ้น)

### 3.3 การตรวจสอบความหนาฟิล์มก๊าซ

ตรวจสอบความหนาฟิล์มก๊าซผ่านการจำลองแบบไฮโดรไดนามิก + การวัดจริงในพื้นที่:

- **การจำลองแบบ (CFD สมการ Reynolds)**: ที่ 3000 รอบ/นาที ความแตกต่างของแรงดัน 0.1 MPa ความหนาฟิล์มก๊าซ 4.2 ไมครอน อัตราการรั่ว 8.5×10⁻⁷ Pa·m³/s
- **การวัดจริง (เซ็นเซอร์การกระจัดแบบคาปาซิเตอร์)**: 4.0-4.5 ไมครอนขณะทำงานเสถียร ระยะเวลาการสัมผัสการเสียดสีแห้งในช่วงเริ่มต้น < 0.3 วินาที
- **การทดสอบรั่วฮีเลียม**: อัตราการรั่ว ≤ 1×10⁻⁶ Pa·m³/s ดีกว่ามาตรฐานการรั่วซีลก๊าซแห้ง API 682 Type A

## 4. กรณีศึกษา Huahao Sealing

บริษัทเคมีละเอียดอ่อนของกลุ่มปิโตรเคมีขนาดใหญ่มีเครื่องกู้คืนตัวทำละลายเอทิลแอซิเทต 4 ชุด ความจุ 50000 ตัน/ปี โดยมีปั๊มสูญญากาศสกรูแบบไม่มีน้ำมันทั้งหมด 14 ตัว (อัตราการไหล 1500 ลบ.ม./ชม. ความสูญญากาศสูงสุด 50 Pa ความเร็ว 2950 รอบ/นาที เส้นผ่านศูนย์กลางซีล 90 มม.) เดิมมีปัญหาดังต่อไปนี้กับซีลก๊าซแห้งกราไฟต์อิมเพรกเนตเรซินของแบรนด์นำเข้า:

1. อายุซีลเฉลี่ย **11 เดือน** เริ่มต้นบ่อยครั้ง (สลับทุกๆ 18 ชั่วโมง, ประมาณ 1500 ครั้งเริ่ม-หยุด/ปี) ถอดตรวจพบว่าผิวหน้าซีลเต็มไปด้วยจุดสึกหรอ ลึก 0.3-0.5 มม. รอยแตกจากความร้อน 3-5 รอย
2. เปลี่ยนซีลประมาณ 13 ครั้งต่อปี ค่าใช้จ่ายอะไหล่ + ค่าบำรุงรักษาขณะหยุดทำงานประมาณ **1.95 ล้าน CNY**
3. การเสียดสีแห้งของผิวหน้าซีลในช่วงเริ่มต้นทำให้เกิดควัน ส่วนผสมของไอตัวทำละลายและเศษการสึกหรอมีความเสี่ยงในการระเบิดจากการจุดชนวน (มีอุบัติเหตุที่เกือบจะเกิดการระเบิดจากไฟกระพริบ 1 ครั้งในปี 2018)

หลังจากเปลี่ยนเป็นโซลูชัน **วงหมุนกราไฟต์อิมเพรกเนตอัลลอยด์แอนทิโมนี-ทองแดงคู่ Sb-Cu + วงประกบ SSiC + ร่องเกลียว (α=16°, ความลึกร่อง 4 ไมครอน) + O-ring Kalrez 7075 + แบบสมดุลสปริงขนาดเล็ก** ของ Huahao Sealing ในปี 2019:

- ปั๊มแรกทำงานต่อเนื่อง **4.2 ปี (2019.08-2023.11)** ถอดตรวจสอบพบว่าการสึกหรอของผิวหน้าซีล **0.08 มม.** ไม่มีรอยแตกจากความร้อน ความหนาฟิล์มก๊าซยังคงเสถียรที่ 3.8 ไมครอน
- สะสมการเริ่มต้น **3800+ ครั้ง** อายุซีล **50.4 เดือน** (+358%), ปรับปรุงจาก 11 เดือน
- ปรากฏการณ์ควันจากการเสียดสีแห้งตอนเริ่มต้น **ถูกกำจัดออกอย่างสมบูรณ์** ไม่มีอุบัติเหตุที่มีความเสี่ยงในการระเบิดไฟกระพริบในช่วงปี 2019-2023
- ค่าใช้จ่ายอะไหล่ + ค่าบำรุงรักษาต่อปีลดจาก 1.95 ล้านเป็น **ประมาณ 0.22 ล้าน CNY** ประหยัดสะสมมากกว่า 7 ล้าน CNY

หลักการเลือก: ความถี่ของการเริ่ม-หยุดกำหนดสารอิมเพรกเนต (> 500 ครั้ง/ปีจำเป็นต้องใช้อิมเพรกเนตโลหะคู่) ขั้วของตัวทำละลายกำหนดเกรด O-ring (ตัวทำละลายขั้วเลือก FFKM) ค่านำความร้อนกำหนดอายุการสึกหรอแห้ง (Sb-Cu 120 W/m·K เป็นที่ดีที่สุด)`,
    },
  },
  {
    slug: "centrifugal-compressor-labyrinth-seal-carbon-graphite",
    title: {
      zh: "离心压缩机迷宫密封碳石墨镶片应用：裂解气压缩机 H₂/CH₄/C₂H₄ 混合气 120℃/2.5 MPa 工况",
      en: "Carbon Graphite Labyrinth Seal Inserts for Centrifugal Compressors: 120℃/2.5 MPa Cracker Gas Compressor H₂/CH₄/C₂H₄ Mixed Gas Service",
      vi: "Mảnh gắn vòng kín mê cung than chì carbon cho máy nén ly tâm: Điều kiện máy nén khí nứt H₂/CH₄/C₂H₄ 120℃/2.5 MPa",
      th: "แผ่นเสริมซีลห้องคดเคี้ยวคาร์บอนกราไฟต์สำหรับคอมเพรสเซอร์เหวี่ยง: สภาวะคอมเพรสเซอร์ก๊าซแคร็กเกอร์ H₂/CH₄/C₂H₄ ก๊าซผสม 120℃/2.5 MPa",
    },
    excerpt: {
      zh: "针对乙烯装置裂解气离心压缩机迷宫密封铝合金齿片在转子振动下频繁磨损、泄漏量超标的问题，本文讲解碳石墨镶片迷宫密封材料选型（细颗粒浸渍石墨）、梳齿结构（直通型/交错型）、间隙设计与华豪密封案例。",
      en: "For the problems of frequent wear of aluminum alloy labyrinth teeth under rotor vibration and excessive leakage in cracker gas centrifugal compressors of ethylene plants, this article covers carbon graphite labyrinth insert material selection (fine-grained impregnated graphite), labyrinth structure (straight-through/staggered), clearance design, and Huahao Sealing cases.",
      vi: "Dành cho vấn đề mài mòn thường xuyên răng nhôm hợp kim vòng kín mê cung dưới độ rung rotor và lượng rò rỉ vượt chuẩn ở máy nén ly tâm khí nứt nhà máy etylen, bài viết trình bày chọn vật liệu vòng kín mê cung mảnh gắn than chì carbon (than chì tẩm hạt mịn), cấu trúc lược (kiểu thẳng/kiểu xen kẽ), thiết kế khoảng hở và case study Huahao Sealing.",
      th: "สำหรับปัญหาการสึกหรอบ่อยครั้งของฟันอลูมิเนียมอัลลอยด์ของซีลห้องคดเคี้ยวภายใต้การสั่นสะเทือนของโรเตอร์และอัตราการรั่วที่เกินขอบเขตในคอมเพรสเซอร์เหวี่ยงก๊าซแคร็กเกอร์ของโรงงานเอทิลีน บทความนี้ครอบคลุมการเลือกวัสดุแผ่นเสริมซีลห้องคดเคี้ยวคาร์บอนกราไฟต์ (กราไฟต์อิมเพรกเนตเม็ดละเอียด) โครงสร้างฟัน (ตรง/สลับกัน) การออกแบบช่องว่าง และกรณีศึกษา Huahao Sealing",
    },
    tag: "application",
    date: "2026-07-25",
    content: {
      zh: `## 核心要点

- 乙烯裂解气离心压缩机迷宫密封原用铝合金（6061-T6）齿片，在转子振动（轴振 30-80 μm）和瞬时碰摩时，铝齿硬度低（HB 95）快速磨损，迷宫间隙 3 个月从 0.25 mm 扩大到 0.8 mm，泄漏量超标 2.5 倍
- 解决方案：每级迷宫密封的静子齿改用碳石墨镶片（细颗粒高强石墨 + 青铜浸渍），肖氏硬度 HS 80，转子轴套镀铬（HV 900），碰摩时石墨磨损而非轴套，自润滑且不伤轴
- 结构选交错型迷宫（Staggered Labyrinth），3-4 级齿，每级间隙 0.20-0.25 mm，比直通型泄漏量降低 40-50%
- 华豪密封为某 80 万吨/年乙烯装置 3 台裂解气压缩机（GB201）48 级迷宫密封改造，泄漏量从 2.8% 降至 0.9%，每年节约乙烯物料损失约 1200 万元

离心压缩机是石油化工、天然气处理等行业的核心动设备，迷宫密封（Labyrinth Seal，又称梳齿密封）是压缩机级间、轴端最常用的非接触式密封。其原理是通过多级节流齿与转子间的微小间隙产生节流压降，逐级消耗气体动能，从而减少泄漏。但传统铝合金、黄铜迷宫齿片在转子振动、不对中工况下易发生硬碰摩，齿片磨损快、迷宫间隙迅速扩大、泄漏量成倍增长。本文结合霍邱县华豪密封件有限公司在乙烯裂解气压缩机、天然气注气压缩机等多台大型离心压缩机上的应用经验，介绍碳石墨镶片迷宫密封选型要点。

## 一、工况特性

### 1.1 典型裂解气压缩机参数

- 介质：裂解气（H₂ 28-32%、CH₄ 18-22%、C₂H₄ 22-28%、C₃+ 10-15%、CO 2-4%，含微量 H₂S 和水分）
- 压力范围：段间 0.3-1.2 MPa，出口 2.5 MPa
- 温度范围：一段入口 38-45℃，四段出口 110-125℃
- 转速：6800-8500 r/min（齿轮箱增速驱动）
- 轴振动：正常 25-40 μm，通过临界转速时 60-85 μm（API 617 报警值 90 μm，联锁值 120 μm）

### 1.2 失效模式分析

传统铝/黄铜迷宫齿失效统计：

1. **碰摩磨损（65%）**：转子通过临界转速或突加负荷时轴振增大（> 60 μm），齿片与轴套硬碰摩。铝齿（HB 95）碰镀铬轴套（HV 900）如同"鸡蛋碰石头"，单次通过临界转速齿高磨损 0.1-0.2 mm，迷宫间隙每 3-4 个月翻倍。
2. **气体腐蚀（20%）**：裂解气中微量 H₂S（30-200 ppm）+ 水分在低温段冷凝成 H₂S 水溶液，黄铜齿（Cu-Zn）发生脱锌腐蚀，齿片强度下降、脆化开裂。
3. **热变形（10%）**：高温段（> 100℃）铝齿片热膨胀系数（23×10⁻⁶/℃）远大于碳钢管壳（12×10⁻⁶/℃），设计间隙被"吃掉"，发生持续碰摩。
4. **安装间隙不均（5%）**：手动塞尺测量各齿间隙误差 ±0.05 mm，局部齿间隙过小导致早期碰摩。

## 二、碳石墨镶片材料选型

### 2.1 碳石墨优势对比

| 特性 | 6061-T6 铝 | H62 黄铜 | 316L 不锈钢 | **青铜浸渍石墨** |
|-----|-----------|---------|-----------|----------------------|
| 硬度 | HB 95 | HB 85 | HB 187 | HS 80 (≈ HB 120) |
| 碰摩时损伤对象 | 铝齿磨损 | 黄铜齿磨损 | 不锈钢损伤轴套！ | **石墨磨损，不伤轴套** |
| 耐 H₂S 腐蚀 | 一般（点蚀） | 差（脱锌） | 良 | **优**（石墨不被 H₂S 腐蚀） |
| 热膨胀系数 | 23×10⁻⁶ | 20×10⁻⁶ | 17×10⁻⁶ | **3.2×10⁻⁶**（接近钢） |
| 自润滑 | 无 | 无 | 无 | **优**（固体润滑，高温亦有效） |
| 加工精度 | ±0.02 mm | ±0.02 mm | ±0.03 mm | **±0.005 mm**（数控磨床精度） |
| 使用寿命（迷宫齿） | 3-6 个月 | 4-8 个月 | 1-2 年 | **4-6 年** |

### 2.2 华豪密封 青铜浸渍石墨

迷宫密封镶片专用材料：

- **基材**：细颗粒等静压石墨（颗粒 8 μm，密度 1.82 g/cm³）
- **浸渍剂**：锡青铜 CuSn10（真空压力浸渍，浸渍率 ≥ 95%，残余孔隙 < 1%）
- **关键性能**：
  - 抗压强度 260 MPa，抗折 72 MPa，肖氏 HS 80
  - 导热系数 85 W/m·K（碰摩热量迅速导出，避免石墨氧化）
  - 热膨胀系数 3.2×10⁻⁶/℃（与碳钢 12×10⁻⁶ 搭配，高温时间隙变大而非变小）
  - 抗氧化温度：空气中 ≤ 450℃（远高于裂解气 125℃ 工况）
  - 耐介质：H₂S、CO、烯烃、烷烃全稳定；青铜浸渍剂轻微耐 H₂S 腐蚀（H₂S 含量 < 500 ppm 无影响）

### 2.3 转子轴套要求

碳石墨镶片方案必须配合高硬度轴套：

- **轴套表面**：镀硬铬 0.10-0.15 mm，镀层 HV 850-950，粗糙度 R_a ≤ 0.20 μm
- **镀层要求**：镀铬层与基体结合力 ≥ 60 MPa，无微裂纹（电解腐蚀检测无裂纹）
- **替代方案**：高速火焰喷涂（HVOF）WC-Co-Cr 涂层，HV 1100-1200（更耐磨但成本高 3-4 倍）

## 三、迷宫密封结构设计

### 3.1 密封型式选择

迷宫密封两种主流结构对比：

| 结构型式 | 示意图简述 | 泄漏量（相对值） | 抗碰摩能力 | 制造成本 | 适用场景 |
|---------|-----------|----------------|-----------|---------|---------|
| **直通型（Straight-through）** | 齿片全部在静子或全部在转子，齿尖指向对面光滑圆柱面 | 100%（基准） | 一般 | 低 | 低压段（< 0.5 MPa）、轴振较小工况 |
| **交错型（Staggered）** | 齿片交替布置在静子和转子上，形成"Z 字形"流道，气体流动方向多次转折 | **50-60%** | 优（碰摩时单级接触，能量分散） | 中 | **推荐！中高压段（> 0.5 MPa），大机组首选** |

裂解气压缩机 GB201 段间压力 0.3-1.2 MPa，**推荐 2、3、4 段用交错型，1 段用直通型**。

### 3.2 齿形与间隙设计

**齿形设计（决定节流效果）**：
- **齿尖角度**：60° 等腰三角形齿尖，齿顶圆角 R ≤ 0.03 mm（锐边效应强，节流效果最佳）
- **齿高 H**：H = 8-12 mm（保证齿尖机械强度，避免安装碰断）
- **齿距 P**：P = 10-15 mm，齿高 H / 齿距 P ≈ 0.6-0.8（流道"涡流死区"占比合理）
- **齿数 Z**：每级 4-6 齿，级总压降 > 0.2 MPa 时需 8 齿以上

**间隙设计（决定泄漏量与碰摩风险的平衡）**：
- **直径间隙 2c（冷态）**：
  - 高速段（> 6000 r/min，轴径 150-200 mm）：2c = 0.40-0.50 mm
  - 中速段（4000-6000 r/min，轴径 200-300 mm）：2c = 0.50-0.65 mm
- **热态间隙校验**：120℃ 工作温度下，轴套（钢，12×10⁻⁶）膨胀量 vs 石墨镶片（3.2×10⁻⁶）膨胀量，热态间隙变化仅 -0.02 mm（间隙基本不变，不会"咬死"）
- **碰摩安全裕度**：冷态间隙 ≥ 2.5 倍正常轴振，≥ 1.3 倍临界转速轴振（2c ≥ 1.3 × 85 μm ≈ 110 μm，实际取 400+ μm 非常安全）

### 3.3 镶片固定方式

碳石墨材质脆，不能攻螺纹（易崩裂），采用**燕尾槽过盈镶嵌**：

- 静子环内壁加工 60° 燕尾槽（槽宽略小于石墨镶片燕尾底部宽度，过盈量 0.02-0.03 mm）
- 石墨镶片常温下缓慢压入燕尾槽（15 MPa 压力机，速度 1 mm/s，避免冲击）
- 两端用止推垫片点焊固定（焊点远离石墨，避免热影响）
- 最后整体数控磨床精加工齿尖圆跳动 ≤ 0.01 mm，各齿高度差 ≤ 0.005 mm

## 四、华豪密封案例

某石化集团下属 80 万吨/年乙烯装置，"三机"之一的裂解气压缩机（GB201，沈鼓制，6 级离心式，4 段压缩，功率 15000 kW，转速 8200 r/min，段间迷宫密封 48 级，介质压力最高 2.5 MPa，出口温度 122℃）原用 6061 铝合金迷宫齿，存在严重问题：

1. **齿片快速磨损**：每次通过 1 阶临界转速（约 4200 r/min）时轴振 75-80 μm，铝齿硬碰摩镀铬轴套，**15-20 次开停车**后齿高磨掉一半，迷宫间隙从设计 0.28 mm 扩大到 0.7-0.9 mm
2. **段间泄漏超标**：装置标定泄漏量 **2.8%**（按 API 标准应 ≤ 1.5%），每小时泄漏乙烯等物料约 0.8 t，年损失约 **1800 万元**
3. **H₂S 腐蚀**：裂解气含 H₂S 80-120 ppm，3 段低温段（52℃）黄铜迷宫齿发生脱锌腐蚀，齿片脆化碎裂（2017 年一次检修发现 7 片碎齿）

2018 年大检修期间，48 级迷宫密封全部改用华豪密封 **青铜浸渍石墨镶片 + 交错型结构（2-4 段）/直通型（1 段）+ 燕尾槽镶嵌 + 配套重新镀铬轴套** 方案：

- **泄漏量**：大修后标定 **0.9%**（优于 API 1.5% 标准），乙烯等物料泄漏量减少 **1.9 t/小时**，年节约物料价值约 **1200 万元**（按乙烯 7500 元/吨计）
- **密封寿命**：2018-2024 年经历 **6 次开停车**（其中 2 次全厂大检修），2024 年拆检石墨齿尖磨损量平均仅 **0.012 mm**（磨损率 0.002 mm/次），再用 4-6 年没问题（原铝齿已换 4 轮）
- **轴套保护**：各段轴套镀铬层无明显损伤，粗糙度仍满足要求，无需更换（原方案每次大修必换轴套，省了约 380 万备件费）

选型核心：轴振大小决定齿片材料（轴振 > 50 μm 必须石墨镶片，避免硬碰摩）、介质腐蚀性决定浸渍剂（含 H₂S 选青铜浸渍）、段间压力决定结构型式（> 0.5 MPa 选交错型）、冷态间隙按 2.5 倍轴振设计。`,
      en: `## Key Takeaways

- Traditional aluminum alloy (6061-T6) labyrinth teeth in ethylene cracker gas centrifugal compressors, under rotor vibration (shaft vibration 30-80 μm) and transient rubbing, have low hardness (HB 95) and wear rapidly — labyrinth clearance expands from 0.25 mm to 0.8 mm in 3 months, leakage exceeds standard by 2.5 times
- Solution: each stage of the labyrinth seal's stator teeth uses carbon graphite inserts (fine-grain high-strength graphite + bronze impregnation), Shore hardness HS 80, rotor sleeve chrome-plated (HV 900), graphite wears during rubbing instead of damaging the sleeve, self-lubricating and shaft-friendly
- Structure selects staggered labyrinth type, 3-4 stage teeth, each stage clearance 0.20-0.25 mm, leakage reduced by 40-50% compared to straight-through type
- Huahao Sealing retrofitted 48 stages of labyrinth seals on 3 cracker gas compressors (GB201) of an 800000 t/year ethylene plant; leakage reduced from 2.8% to 0.9%, annual ethylene material loss savings about 12 million CNY

Centrifugal compressors are the core rotating equipment in petrochemical, natural gas processing and other industries. Labyrinth seals (also known as comb-type seals) are the most commonly used non-contact seals for inter-stage and shaft-end applications in compressors. The principle is to generate throttling pressure drop through the micro-clearance between multi-stage throttling teeth and the rotor, consuming gas kinetic energy stage by stage, thereby reducing leakage. However, traditional aluminum alloy and brass labyrinth teeth are prone to hard rubbing under rotor vibration and misalignment conditions, leading to fast tooth wear, rapid labyrinth clearance expansion, and exponentially increased leakage. Based on the application experience of Huoqiu County Huahao Sealing Co., Ltd. on multiple large centrifugal compressors such as ethylene cracker gas compressors and natural gas injection compressors, this article introduces key points for selecting carbon graphite insert labyrinth seals.

## 1. Service Characteristics

### 1.1 Typical Cracker Gas Compressor Parameters

- Medium: cracker gas (H₂ 28-32%, CH₄ 18-22%, C₂H₄ 22-28%, C₃+ 10-15%, CO 2-4%, trace H₂S and moisture)
- Pressure range: inter-stage 0.3-1.2 MPa, outlet 2.5 MPa
- Temperature range: first stage inlet 38-45℃, fourth stage outlet 110-125℃
- Speed: 6800-8500 r/min (gearbox speed increase drive)
- Shaft vibration: normal 25-40 μm, when passing critical speed 60-85 μm (API 617 alarm value 90 μm, trip value 120 μm)

### 1.2 Failure Mode Analysis

Traditional aluminum/brass labyrinth tooth failure statistics:

1. **Rubbing wear (65%)**: Shaft vibration increases (> 60 μm) when the rotor passes the critical speed or under sudden load, hard rubbing between teeth and sleeve. Aluminum teeth (HB 95) rubbing against chrome-plated sleeve (HV 900) is like "egg hitting stone", tooth height wears 0.1-0.2 mm in a single critical speed pass, labyrinth clearance doubles every 3-4 months.
2. **Gas corrosion (20%)**: Trace H₂S (30-200 ppm) + moisture in cracker gas condenses into H₂S aqueous solution in the low-temperature section, brass teeth (Cu-Zn) undergo dezincification corrosion, tooth strength decreases and brittle cracks occur.
3. **Thermal deformation (10%)**: In the high-temperature section (> 100℃), the thermal expansion coefficient of aluminum teeth (23×10⁻⁶/℃) is much larger than that of carbon steel shell (12×10⁻⁶/℃), design clearance is "consumed" and continuous rubbing occurs.
4. **Uneven installation clearance (5%)**: Manual feeler gauge measurement of each tooth clearance has error ±0.05 mm, local tooth clearance too small leads to early rubbing.

## 2. Carbon Graphite Insert Material Selection

### 2.1 Carbon Graphite Advantage Comparison

| Property | 6061-T6 Al | H62 Brass | 316L SS | **Bronze-Impregnated Graphite** |
|----------|-----------|---------|---------|--------------------------------------|
| Hardness | HB 95 | HB 85 | HB 187 | HS 80 (≈ HB 120) |
| Damaged part on rubbing | Al teeth wear | Brass teeth wear | SS damages sleeve! | **Graphite wears, sleeve intact** |
| H₂S corrosion resistance | Fair (pitting) | Poor (dezincification) | Good | **Excellent** (graphite not corroded by H₂S) |
| Thermal expansion coeff | 23×10⁻⁶ | 20×10⁻⁶ | 17×10⁻⁶ | **3.2×10⁻⁶** (close to steel) |
| Self-lubrication | None | None | None | **Excellent** (solid lubrication, effective at HT) |
| Machining precision | ±0.02 mm | ±0.02 mm | ±0.03 mm | **±0.005 mm** (CNC grinder precision) |
| Service life (labyrinth) | 3-6 mo | 4-8 mo | 1-2 yr | **4-6 yr** |

### 2.2 Huahao Sealing Bronze-Impregnated Graphite

Dedicated material for labyrinth seal inserts:

- **Base material**: fine-grain isostatic graphite (grain 8 μm, density 1.82 g/cm³)
- **Impregnant**: tin bronze CuSn10 (vacuum pressure impregnation, impregnation rate ≥ 95%, residual porosity < 1%)
- **Key properties**:
  - Compressive strength 260 MPa, flexural 72 MPa, Shore HS 80
  - Thermal conductivity 85 W/m·K (rubbing heat rapidly conducts out, avoiding graphite oxidation)
  - Thermal expansion coefficient 3.2×10⁻⁶/℃ (paired with carbon steel 12×10⁻⁶, clearance increases rather than decreases at high temperature)
  - Oxidation temperature: ≤ 450℃ in air (far above cracker gas 125℃ service)
  - Medium resistance: fully stable in H₂S, CO, alkenes, alkanes; bronze impregnant slightly H₂S corrosion-resistant (no impact at H₂S content < 500 ppm)

### 2.3 Rotor Sleeve Requirements

Carbon graphite insert solution must be paired with high-hardness sleeves:

- **Sleeve surface**: hard chromium plating 0.10-0.15 mm, plating HV 850-950, roughness R_a ≤ 0.20 μm
- **Plating requirements**: chromium plating layer-substrate bonding force ≥ 60 MPa, micro-crack free (no cracks by electrolytic corrosion detection)
- **Alternative**: HVOF WC-Co-Cr coating, HV 1100-1200 (more wear-resistant but cost 3-4 times higher)

## 3. Labyrinth Seal Structural Design

### 3.1 Seal Type Selection

Comparison of two mainstream labyrinth seal structures:

| Structure Type | Schematic | Leakage (relative) | Rubbing resistance | Cost | Application |
|---------------|----------|-------------------|--------------------|------|-------------|
| **Straight-through** | All teeth on stator or all on rotor, tooth tips point to opposite smooth cylindrical surface | 100% (baseline) | Fair | Low | Low-pressure stage (< 0.5 MPa), low shaft vibration |
| **Staggered** | Teeth alternately arranged on stator and rotor, forming "Z-shaped" flow path, gas flow direction turns multiple times | **50-60%** | Excellent (single stage contact during rubbing, energy dispersed) | Medium | **Recommended! Medium-high pressure stage (> 0.5 MPa), large unit preferred** |

Cracker gas compressor GB201 inter-stage pressure 0.3-1.2 MPa, **recommend stages 2, 3, 4 use staggered type, stage 1 uses straight-through type**.

### 3.2 Tooth Profile and Clearance Design

**Tooth profile design (determines throttling effect)**:
- **Tooth tip angle**: 60° isosceles triangular tooth tip, tip radius R ≤ 0.03 mm (strong sharp edge effect, optimal throttling effect)
- **Tooth height H**: H = 8-12 mm (ensures tooth tip mechanical strength, avoids breakage during installation)
- **Tooth pitch P**: P = 10-15 mm, tooth height H / pitch P ≈ 0.6-0.8 (reasonable "vortex dead zone" proportion in flow channel)
- **Number of teeth Z**: 4-6 teeth per stage; when stage total pressure drop > 0.2 MPa, 8+ teeth required

**Clearance design (balances leakage and rubbing risk)**:
- **Diametral clearance 2c (cold state)**:
  - High-speed stage (> 6000 r/min, shaft diameter 150-200 mm): 2c = 0.40-0.50 mm
  - Medium-speed stage (4000-6000 r/min, shaft diameter 200-300 mm): 2c = 0.50-0.65 mm
- **Hot state clearance verification**: at 120℃ working temperature, sleeve (steel, 12×10⁻⁶) expansion vs graphite insert (3.2×10⁻⁶) expansion, hot clearance only changes -0.02 mm (clearance basically unchanged, no "seizure")
- **Rubbing safety margin**: cold clearance ≥ 2.5 × normal shaft vibration, ≥ 1.3 × critical speed shaft vibration (2c ≥ 1.3 × 85 μm ≈ 110 μm, actual 400+ μm is very safe)

### 3.3 Insert Fixing Method

Carbon graphite is brittle, cannot tap threads (prone to chipping), uses **dovetail groove interference fit**:

- Stator ring inner wall machined 60° dovetail groove (groove width slightly smaller than graphite insert dovetail bottom width, interference 0.02-0.03 mm)
- Graphite inserts slowly pressed into dovetail grooves at room temperature (15 MPa press, speed 1 mm/s, avoid impact)
- Both ends fixed by spot-welded thrust washers (weld points far from graphite, avoid thermal influence)
- Finally, CNC grinder finishes tooth tip circular runout ≤ 0.01 mm, each tooth height difference ≤ 0.005 mm

## 4. Huahao Sealing Case Study

An 800000 t/year ethylene plant under a petrochemical group, the cracker gas compressor (one of the "three compressors") (GB201, manufactured by Shengu, 6-stage centrifugal, 4-stage compression, power 15000 kW, speed 8200 r/min, 48 inter-stage labyrinth seal stages, max medium pressure 2.5 MPa, outlet temperature 122℃) originally used 6061 aluminum alloy labyrinth teeth, had serious problems:

1. **Rapid tooth wear**: each time passing the 1st order critical speed (about 4200 r/min) shaft vibration 75-80 μm, aluminum teeth hard rubbing chrome-plated sleeve, after **15-20 start-stops** tooth height worn by half, labyrinth clearance expanded from design 0.28 mm to 0.7-0.9 mm
2. **Inter-stage leakage exceeding standard**: plant calibration leakage **2.8%** (API standard should be ≤ 1.5%), hourly leakage of ethylene and other materials about 0.8 t, annual loss about **18 million CNY**
3. **H₂S corrosion**: cracker gas contains H₂S 80-120 ppm, stage 3 low-temperature section (52℃) brass labyrinth teeth suffered dezincification corrosion, teeth embrittled and fractured (during 2017 overhaul 7 fractured teeth found)

During 2018 major overhaul, all 48 labyrinth seal stages fully replaced with Huahao Sealing's ** bronze-impregnated graphite inserts + staggered structure (stages 2-4) / straight-through type (stage 1) + dovetail groove insert + matching re-chrome plated sleeves** solution:

- **Leakage**: after overhaul calibration **0.9%** (better than API 1.5% standard), ethylene and other material leakage reduced **1.9 t/hour**, annual material value saving about **12 million CNY** (at ethylene 7500 CNY/t)
- **Seal life**: 2018-2024 experienced **6 start-stops** (including 2 plant-wide overhauls), 2024 teardown inspection graphite tooth tip average wear only **0.012 mm** (wear rate 0.002 mm/time), good for another 4-6 years (original aluminum teeth already replaced 4 rounds)
- **Sleeve protection**: chrome plating on each stage sleeve has no obvious damage, roughness still meets requirements, no need to replace (original plan each overhaul must replace sleeves, saved about 3.8 million CNY spare parts cost)

Selection core: shaft vibration magnitude determines tooth material (shaft vibration > 50 μm requires graphite inserts to avoid hard rubbing), medium corrosivity determines impregnant (H₂S-containing selects bronze impregnation), inter-stage pressure determines structure type (> 0.5 MPa selects staggered type), cold clearance designed at 2.5 times shaft vibration.`,
      vi: `## Điểm chính

- Răng vòng kín mê cung hợp kim nhôm (6061-T6) truyền thống ở máy nén ly tâm khí nứt etylen, dưới độ rung rotor (rung trục 30-80 μm) và va chạm tạm thời, có độ cứng thấp (HB 95) và mài mòn nhanh — khoảng hở mê cung nở từ 0.25 mm lên 0.8 mm trong 3 tháng, lượng rò rỉ vượt chuẩn 2.5 lần
- Giải pháp: mỗi cấp răng stator của vòng kín mê cung dùng mảnh gắn than chì carbon (than chì cường độ cao hạt mịn + tẩm đồng thau), độ cứng Shore HS 80, ống lót trục mạ crôm (HV 900), than chì mòn khi va chạm thay vì làm hỏng ống lót, tự bôi trơn và thân thiện với trục
- Kết cấu chọn kiểu mê cung xen kẽ, răng 3-4 cấp, mỗi cấp khoảng hở 0.20-0.25 mm, lượng rò rỉ giảm 40-50% so với kiểu thẳng
- Huahao Sealing đã cải tạo 48 cấp vòng kín mê cung cho 3 máy nén khí nứt (GB201) của nhà máy etylen 800000 tấn/năm; lượng rò rỉ giảm từ 2.8% xuống 0.9%, tiết kiệm tổn thất vật liệu etylen hàng năm khoảng 12 triệu CNY

Máy nén ly tâm là thiết bị động cốt lõi trong dầu khí, xử lý khí tự nhiên và các ngành khác. Vòng kín mê cung (còn gọi là vòng kín lược) là loại kín không tiếp xúc được sử dụng phổ biến nhất cho các vị trí liên cấp và cuối trục trong máy nén. Nguyên lý là tạo ra sụt áp tiết lưu qua khoảng hở siêu nhỏ giữa răng tiết lưu đa cấp và rotor, tiêu tán động năng khí theo từng cấp, từ đó giảm lượng rò rỉ. Tuy nhiên, các răng vòng kín mê cung nhôm và thau đồng truyền thống dưới tác dụng của rung rotor và lệch tâm dễ xảy ra va chạm cứng, dẫn đến răng mài nhanh, khoảng hở mê cung nở nhanh và lượng rò rỉ tăng theo cấp số nhân. Dựa trên kinh nghiệm ứng dụng của Công ty TNHH Vòng đệm Huahao huyện Hoắc Khâu trên nhiều máy nén ly tâm lớn như máy nén khí nứt etylen, máy nén nạp khí tự nhiên, bài viết giới thiệu điểm chọn vòng kín mê cung mảnh gắn than chì carbon.

## 1. Đặc tính điều kiện

### 1.1 Thông số điển hình máy nén khí nứt

- Môi chất: khí nứt (H₂ 28-32%, CH₄ 18-22%, C₂H₄ 22-28%, C₃+ 10-15%, CO 2-4%, chứa vi lượng H₂S và ẩm)
- Phạm vi áp suất: liên cấp 0.3-1.2 MPa, đầu ra 2.5 MPa
- Phạm vi nhiệt độ: vào cấp 1 38-45℃, đầu ra cấp 4 110-125℃
- Tốc độ: 6800-8500 r/phút (truy động tăng tốc hộp số)
- Độ rung trục: bình thường 25-40 μm, khi qua tốc độ tới hạn 60-85 μm (giá trị báo động API 617 90 μm, giá trị khóa 120 μm)

### 1.2 Phân tích chế độ hỏng

Thống kê hỏng răng vòng kín mê cung nhôm/thau đồng truyền thống:

1. **Mài mòn do va chạm (65%)**: Độ rung trục tăng (> 60 μm) khi rotor qua tốc độ tới hạn hoặc dưới tải đột biến, răng và ống lót va chạm cứng. Răng nhôm (HB 95) va chạm với ống lót mạ crôm (HV 900) giống như "trứng đập đá", chiều cao răng mòn 0.1-0.2 mm sau một lần qua tốc độ tới hạn, khoảng hở mê cung tăng gấp đôi mỗi 3-4 tháng.
2. **Ăn mòn khí (20%)**: H₂S vi lượng (30-200 ppm) + ẩm trong khí nứt ngưng tụ thành dung dịch nước H₂S ở đoạn nhiệt độ thấp, răng thau đồng (Cu-Zn) xảy ra ăn mòn khử kẽm, giảm độ bền răng và nứt giòn.
3. **Biến dạng nhiệt (10%)**: Ở đoạn nhiệt độ cao (> 100℃), hệ số giãn nở nhiệt của răng nhôm (23×10⁻⁶/℃) lớn hơn nhiều so với vỏ thép carbon (12×10⁻⁶/℃), khoảng hở thiết kế bị "tiêu hao" và xảy ra va chạm liên tục.
4. **Khoảng hở lắp đặt không đồng đều (5%)**: Đo khoảng hở mỗi răng bằng cầm tay có sai số ±0.05 mm, khoảng hở răng một số chỗ quá nhỏ dẫn đến va chạm sớm.

## 2. Chọn vật liệu mảnh gắn than chì carbon

### 2.1 So sánh ưu điểm than chì carbon

| Đặc tính | Nhôm 6061-T6 | Thau đồng H62 | Thép không gỉ 316L | **Than chì tẩm đồng thau ** |
|----------|-------------|--------------|-----------------|------------------------------|
| Độ cứng | HB 95 | HB 85 | HB 187 | HS 80 (≈ HB 120) |
| Bộ phận hỏng khi va chạm | Răng nhôm mòn | Răng thau đồng mòn | Thép hỏng ống lót! | **Than chì mòn, ống lót không hỏng** |
| Chống ăn mòn H₂S | Bình thường (ăn mòn lỗ) | Kém (khử kẽm) | Tốt | **Tốt** (than chì không bị H₂S ăn mòn) |
| Hệ số giãn nở nhiệt | 23×10⁻⁶ | 20×10⁻⁶ | 17×10⁻⁶ | **3.2×10⁻⁶** (gần với thép) |
| Tự bôi trơn | Không | Không | Không | **Tốt** (bôi trơn rắn, hiệu quả ở nhiệt độ cao) |
| Độ chính xác gia công | ±0.02 mm | ±0.02 mm | ±0.03 mm | **±0.005 mm** (độ chính xác máy mài CNC) |
| Tuổi thọ (vòng kín mê cung) | 3-6 tháng | 4-8 tháng | 1-2 năm | **4-6 năm** |

### 2.2 Than chì tẩm đồng thau  của Huahao Sealing

Vật liệu chuyên dụng cho mảnh gắn vòng kín mê cung:

- **Vật liệu nền**: than chì đẳng tĩnh áp hạt mịn (hạt 8 μm, khối lượng riêng 1.82 g/cm³)
- **Chất tẩm**: đồng thau thiếc CuSn10 (tẩm áp suất chân không, tỷ lệ tẩm ≥ 95%, lỗ dư < 1%)
- **Hiệu năng chính**:
  - Độ bền nén 260 MPa, độ bền uốn 72 MPa, Shore HS 80
  - Hệ số dẫn nhiệt 85 W/m·K (nhiệt va chạm dẫn ra nhanh chóng, tránh oxy hóa than chì)
  - Hệ số giãn nở nhiệt 3.2×10⁻⁶/℃ (ghép với thép carbon 12×10⁻⁶, khoảng hở lớn thay vì nhỏ khi nhiệt độ cao)
  - Nhiệt độ oxy hóa: ≤ 450℃ trong không khí (xa hơn nhiều so với điều kiện khí nứt 125℃)
  - Chống môi chất: hoàn toàn ổn định trong H₂S, CO, ankên,ankan; chất tẩm đồng thau chống ăn mòn H₂S nhẹ (hàm lượng H₂S < 500 ppm không ảnh hưởng)

### 2.3 Yêu cầu ống lót rotor

Giải pháp mảnh gắn than chì carbon phải kết hợp với ống lót độ cứng cao:

- **Bề mặt ống lót**: mạ crôm cứng 0.10-0.15 mm, lớp mạ HV 850-950, độ nhám R_a ≤ 0.20 μm
- **Yêu cầu lớp mạ**: lực liên kết lớp mạ crôm-vật liệu nền ≥ 60 MPa, không có vết nứt siêu nhỏ (kiểm tra ăn mòn điện phân không có vết nứt)
- **Giải pháp thay thế**: phủ WC-Co-Cr phun ngọn lửa tốc độ cao (HVOF), HV 1100-1200 (chống mài tốt hơn nhưng chi phí cao 3-4 lần)

## 3. Thiết kế kết cấu vòng kín mê cung

### 3.1 Chọn loại kín

So sánh hai cấu trúc vòng kín mê cung chủ đạo:

| Loại kết cấu | Sơ đồ | Lượng rò rỉ (tương đối) | Khả năng chống va chạm | Chi phí | Phạm vi áp dụng |
|-------------|------|------------------------|----------------------|--------|-----------------|
| **Kiểu thẳng** | Tất cả răng ở stator hoặc tất cả ở rotor, đỉnh răng chỉ vào bề mặt trụ đối diện nhẵn | 100% (mức chuẩn) | Bình thường | Thấp | Đoạn áp suất thấp (< 0.5 MPa), điều kiện rung trục nhỏ |
| **Kiểu xen kẽ** | Răng sắp xếp xen kẽ ở stator và rotor, tạo thành dòng chảy "hình chữ Z", hướng dòng khí chuyển hướng nhiều lần | **50-60%** | Tốt (một cấp tiếp xúc khi va chạm, năng lượng phân tán) | Trung bình | **Khuyến nghị! Đoạn áp suất trung-cao (> 0.5 MPa), ưu tiên cho máy lớn** |

Áp suất liên cấp máy nén khí nứt GB201 0.3-1.2 MPa, **khuyến nghị cấp 2, 3, 4 dùng kiểu xen kẽ, cấp 1 dùng kiểu thẳng**.

### 3.2 Thiết kế đường răng và khoảng hở

**Thiết kế đường răng (quyết định hiệu ứng tiết lưu)**:
- **Góc đỉnh răng**: răng tam giác đều 60°, bán kính đỉnh răng R ≤ 0.03 mm (hiệu ứng cạnh sắc mạnh, hiệu quả tiết lưu tốt nhất)
- **Chiều cao răng H**: H = 8-12 mm (đảm bảo độ bền cơ học đỉnh răng, tránh gãy khi lắp đặt)
- **Khoảng răng P**: P = 10-15 mm, chiều cao răng H / khoảng răng P ≈ 0.6-0.8 (tỷ lệ "vòng xoáy khu vực chết" trong dòng chảy hợp lý)
- **Số răng Z**: 4-6 răng mỗi cấp; khi sụt áp tổng mỗi cấp > 0.2 MPa cần 8+ răng

**Thiết kế khoảng hở (cân bằng lượng rò rỉ và rủi ro va chạm)**:
- **Khoảng hở đường kính 2c (trạng thái lạnh)**:
  - Đoạn tốc độ cao (> 6000 r/phút, đường kính trục 150-200 mm): 2c = 0.40-0.50 mm
  - Đoạn tốc độ trung bình (4000-6000 r/phút, đường kính trục 200-300 mm): 2c = 0.50-0.65 mm
- **Xác minh khoảng hở trạng thái nóng**: ở nhiệt độ làm việc 120℃, sự giãn nở của ống lót (thép, 12×10⁻⁶) so với sự giãn nở của mảnh gắn than chì (3.2×10⁻⁶), khoảng hở trạng thái nóng chỉ thay đổi -0.02 mm (khoảng hở cơ bản không đổi, không xảy ra "cắn chặt")
- **Dự trữ an toàn va chạm**: khoảng hở lạnh ≥ 2.5 lần độ rung trục bình thường, ≥ 1.3 lần độ rung trục tốc độ tới hạn (2c ≥ 1.3 × 85 μm ≈ 110 μm, thực tế lấy 400+ μm rất an toàn)

### 3.3 Cách cố định mảnh gắn

Than chì carbon giòn, không thể mở ren (dễ vỡ), dùng **nhét ép lắp khớp nuốt chim**:

- Thành trong vòng stator gia công khớp nuốt chim 60° (chiều rộng rãnh nhỏ hơn một chút so với chiều rộng đáy nuốt chim của mảnh gắn than chì, độ trễ ép 0.02-0.03 mm)
- Mảnh gắn than chì ép vào khớp nuốt chim chậm ở nhiệt độ thường (máy ép 15 MPa, tốc độ 1 mm/s, tránh va đập)
- Hai đầu cố định bằng miếng chặn đẩy hàn điểm (điểm hàn xa than chì, tránh ảnh hưởng nhiệt)
- Cuối cùng, máy mài CNC gia công độ lệch tròn đỉnh răng ≤ 0.01 mm, độ lệch chiều cao mỗi răng ≤ 0.005 mm

## 4. Case study Huahao Sealing

Nhà máy etylen 800000 tấn/năm thuộc Tập đoàn hóa dầu, máy nén khí nứt (một trong "ba máy nén") (GB201, sản xuất Shengu, ly tâm 6 cấp, nén 4 đoạn, công suất 15000 kW, tốc độ 8200 r/phút, 48 cấp vòng kín mê cung liên cấp, áp suất môi chất tối đa 2.5 MPa, nhiệt độ đầu ra 122℃) ban đầu dùng răng vòng kín mê cung hợp kim nhôm 6061, có vấn đề nghiêm trọng:

1. **Răng mài nhanh**: mỗi lần qua tốc độ tới hạn bậc 1 (khoảng 4200 r/phút) độ rung trục 75-80 μm, răng nhôm va chạm cứng với ống lót mạ crôm, sau **15-20 lần khởi động/dừng** chiều cao răng bị mòn một nửa, khoảng hở mê cung từ thiết kế 0.28 mm nở ra 0.7-0.9 mm
2. **Rò rỉ liên cấp vượt chuẩn**: lượng rò rỉ hiệu chuẩn nhà máy **2.8%** (theo tiêu chuẩn API phải ≤ 1.5%), mỗi giờ rò rỉ etylen và các vật liệu khác khoảng 0.8 t, tổn thất hàng năm khoảng **18 triệu CNY**
3. **Ăn mòn H₂S**: khí nứt chứa H₂S 80-120 ppm, răng vòng kín mê cung thau đồng ở đoạn nhiệt độ thấp cấp 3 (52℃) xảy ra ăn mòn khử kẽm, răng giòn và nứt (năm 2017 một lần bảo trì lớn tìm thấy 7 răng vỡ)

Trong thời gian bảo trì lớn năm 2018, 48 cấp vòng kín mê cung toàn bộ thay thế bằng giải pháp **mảnh gắn than chì tẩm đồng thau  + cấu trúc kiểu xen kẽ (cấp 2-4) / kiểu thẳng (cấp 1) + nhét khớp nuốt chim + ống lót mạ crôm lại phù hợp** của Huahao Sealing:

- **Lượng rò rỉ**: sau bảo trì hiệu chuẩn **0.9%** (tốt hơn tiêu chuẩn API 1.5%), lượng rò rỉ etylen và vật liệu khác giảm **1.9 t/giờ**, tiết kiệm giá trị vật liệu hàng năm khoảng **12 triệu CNY** (tính theo etylen 7500 CNY/tấn)
- **Tuổi thọ kín**: 2018-2024 trải qua **6 lần khởi động/dừng** (trong đó 2 lần bảo trì lớn toàn nhà máy), năm 2024 tháo kiểm mài mòn trung bình đỉnh răng than chì chỉ **0.012 mm** (tỷ lệ mài mòn 0.002 mm/lần), còn dùng được 4-6 năm nữa (răng nhôm ban đầu đã thay thế 4 đợt)
- **Bảo vệ ống lót**: lớp mạ crôm trên ống lót mỗi đoạn không có hư hỏng rõ ràng, độ nhám vẫn đáp ứng yêu cầu, không cần thay thế (giải pháp ban đầu mỗi lần bảo trì lớn phải thay ống lót, tiết kiệm được khoảng 3.8 triệu CNY chi phí phụ tùng)

Chọn lõi: độ lớn rung trục quyết định vật liệu răng (rung trục > 50 μm phải dùng mảnh gắn than chì, tránh va chạm cứng), mức độ ăn mòn môi chất quyết định chất tẩm (chứa H₂S chọn tẩm đồng thau), áp suất liên cấp quyết định loại kết cấu (> 0.5 MPa chọn kiểu xen kẽ), khoảng hở lạnh thiết kế theo 2.5 lần rung trục.`,
      th: `## ประเด็นสำคัญ

- ฟันห้องคดเคี้ยวอลูมิเนียมอัลลอยด์ (6061-T6) แบบดั้งเดิมในคอมเพรสเซอร์เหวี่ยงก๊าซแคร็กเกอร์เอทิลีน ภายใต้การสั่นสะเทือนของโรเตอร์ (การสั่นสะเทือนของเพลา 30-80 ไมครอน) และการขัดถูกชั่วคราว มีความแข็งต่ำ (HB 95) และสึกหรอได้อย่างรวดเร็ว — ช่องว่างของห้องคดเคี้ยวขยายจาก 0.25 มม. เป็น 0.8 มม. ภายใน 3 เดือน อัตราการรั่วเกินมาตรฐาน 2.5 เท่า
- โซลูชัน: ฟันสเตเตอร์ของห้องคดเคี้ยวแต่ละระดับใช้แผ่นเสริมคาร์บอนกราไฟต์ (กราไฟต์ความแข็งแรงสูงเม็ดละเอียด + อิมเพรกเนตบรอนซ์) ความแข็งชอร์ HS 80, บูชของโรเตอร์ชุบโครเมียม (HV 900) กราฟิต์จะสึกหรอเมื่อขัดถูกแทนที่จะทำลายบูช มีการหล่อลื่นด้วยตัวเองและไม่ทำร้ายเพลา
- โครงสร้างเลือกประเภทห้องคดเคี้ยวสลับกัน, ฟัน 3-4 ระดับ แต่ละระดับช่องว่าง 0.20-0.25 มม. การรั่วลดลง 40-50% เมื่อเทียบกับประเภทตรง
- Huahao Sealing ดำเนินการปรับปรุงห้องคดเคี้ยว 48 ระดับบนคอมเพรสเซอร์ก๊าซแคร็กเกอร์ 3 ตัว (GB201) ของโรงงานเอทิลีน 800000 ตัน/ปี; อัตราการรั่วลดจาก 2.8% เป็น 0.9% ประหยัดค่าสูญเสียวัสดุเอทิลีนต่อปีประมาณ 12 ล้าน CNY

คอมเพรสเซอร์เหวี่ยงเป็นอุปกรณ์หมุนหมุนหลักในอุตสาหกรรมปิโตรเคมี การประมวลผลก๊าซธรรมชาติ และอุตสาหกรรมอื่นๆ ซีลห้องคดเคี้ยว (หรือที่เรียกว่าซีลประเภหวี) เป็นซีลแบบไม่สัมผัสที่ใช้บ่อยที่สุดสำหรับส่วนระหว่างขั้วและปลายเพลาในคอมเพรสเซอร์ หลักการคือการสร้างแรงดันหยุดโดยท่อร้อยสายผ่านช่องว่างขนาดเล็กระหว่างฟันท่อร้อยหลายระดับกับโรเตอร์ ซึ่งใช้พลังงานจลน์ของก๊าซไปตามแต่ละระดับ จึงลดการรั่วซึมลง อย่างไรก็ตาม ฟันห้องคดเคี้ยวอลูมิเนียมอัลลอยด์และบรอนซ์แบบดั้งเดิมมีแนวโน้มที่จะเกิดการขัดถูกแบบแข็งภายใต้สภาวะการสั่นสะเทือนของโรเตอร์และการไม่ตรงกึ่งกลาง ซึ่งนำไปสู่การสึกหรอของฟันที่รวดเร็ว ช่องว่างห้องคดเคี้ยวขยายอย่างรวดเร็ว และอัตราการรั่วซึมเพิ่มขึ้นแบบทวีคูณ จากประสบการณ์การใช้งานของบริษัท Huahao Sealing จังหวัด Huoqiu บนคอมเพรสเซอร์เหวี่ยงขนาดใหญ่หลายตัว เช่น คอมเพรสเซอร์ก๊าซแคร็กเกอร์เอทิลีน และคอมเพรสเซอร์ฉีดก๊าซธรรมชาติ บทความนี้แนะนำประเด็นสำคัญในการเลือกซีลห้องคดเคี้ยวแผ่นเสริมคาร์บอนกราไฟต์

## 1. ลักษณะสภาวะการทำงาน

### 1.1 พารามิเตอร์คอมเพรสเซอร์ก๊าซแคร็กเกอร์ทั่วไป

- สื่อกลาง: ก๊าซแคร็กเกอร์ (H₂ 28-32%, CH₄ 18-22%, C₂H₄ 22-28%, C₃+ 10-15%, CO 2-4%, มีส่วนผสมของ H₂S และความชื้นในปริมาณเล็กน้อย)
- ช่วงแรงดัน: ระหว่างระดับ 0.3-1.2 MPa, ที่ออก 2.5 MPa
- ช่วงอุณหภูมิ: ที่เข้าระดับ 1 38-45℃, ที่ออกระดับ 4 110-125℃
- ความเร็ว: 6800-8500 รอบ/นาที (ขับเคลื่อนด้วยเกียร์เพิ่มความเร็ว)
- การสั่นสะเทือนของเพลา: ปกติ 25-40 ไมครอน เมื่อผ่านความเร็ววิกฤต 60-85 ไมครอน (ค่าเตือน API 617 90 ไมครอน ค่าทริป 120 ไมครอน)

### 1.2 การวิเคราะห์รูปแบบความเสียหาย

สถิติความเสียหายของฟันห้องคดเคี้ยวอลูมิเนียม/บรอนซ์แบบดั้งเดิม:

1. **การสึกหรอจากการขัดถูก (65%)**: การสั่นสะเทือนของเพลาเพิ่มขึ้น (> 60 ไมครอน) เมื่อโรเตอร์ผ่านความเร็ววิกฤตหรือภายใต้ภาระกะทันหัน ฟันและบูชจะขัดถูกกันแบบแข็ง ฟันอลูมิเนียม (HB 95) ขัดกับบูชชุบโครเมียม (HV 900) เหมือนกับ "ไข่ตกหิน" ความสูงของฟันจะสึกหรอ 0.1-0.2 มม. หลังจากผ่านความเร็ววิกฤตเพียงครั้งเดียว และช่องว่างของห้องคดเคี้ยวจะเพิ่มขึ้นเป็นสองเท่าทุกๆ 3-4 เดือน
2. **การกัดกร่อนจากก๊าซ (20%)**: H₂S ในปริมาณเล็กน้อย (30-200 ppm) + ความชื้นในก๊าซแคร็กเกอร์จะกลั่นตัวเป็นสารละลายน้ำ H₂S ในส่วนอุณหภูมิต่ำ ฟันบรอนซ์ (Cu-Zn) จะเกิดการกัดกร่อนถอดสังกะสี ซึ่งทำให้ความแข็งแรงของฟันลดลงและแตกหักได้ง่าย
3. **การเปลี่ยนรูปจากความร้อน (10%)**: ในส่วนอุณหภูมิสูง (> 100℃) สัมประสิทธิ์การขยายตัวจากความร้อนของฟันอลูมิเนียม (23×10⁻⁶/℃) มากกว่าของเปลือกสเตนลีย์คาร์บอน (12×10⁻⁶/℃) อย่างมาก ช่องว่างจากการออกแบบจะถูก "ใช้ไป" และเกิดการขัดถูกอย่างต่อเนื่อง
4. **ช่องว่างจากการติดตั้งไม่สม่ำเสมอ (5%)**: การวัดช่องว่างของแต่ละฟันด้วยฟีลเลอร์เกจจะมีข้อผิดพลาด ±0.05 มม. ซึ่งช่องว่างของฟันในบางพื้นที่อาจเล็กเกินไป นำไปสู่การขัดถูกในช่วงแรก

## 2. การเลือกวัสดุแผ่นเสริมคาร์บอนกราไฟต์

### 2.1 การเปรียบเทียบข้อได้เปรียบของคาร์บอนกราไฟต์

| คุณสมบัติ | อลูมิเนียม 6061-T6 | บรอนซ์ H62 | สเตนเลส 316L | **กราไฟต์อิมเพรกเนตบรอนซ์ ** |
|----------|-----------------|------------|-------------|----------------------------------|
| ความแข็ง | HB 95 | HB 85 | HB 187 | HS 80 (≈ HB 120) |
| ส่วนที่เสียหายเมื่อขัดถูก | ฟันอลูมิเนียมสึกหรอ | ฟันบรอนซ์สึกหรอ | สเตนเลสทำลายบูช! | **กราไฟต์สึกหรอ บูชไม่เสียหาย** |
| ต้านทานการกัดกร่อน H₂S | ปานกลาง (กัดกร่อนเป็นรู) | ไม่ดี (ถอดสังกะสี) | ดี | **ดีเยี่ยม** (กราไฟต์ไม่ถูก H₂S กัดกร่อน) |
| สัมประสิทธิ์การขยายตัวจากความร้อน | 23×10⁻⁶ | 20×10⁻⁶ | 17×10⁻⁶ | **3.2×10⁻⁶** (ใกล้เคียงกับสเตนลีย์) |
| การหล่อลื่นด้วยตัวเอง | ไม่มี | ไม่มี | ไม่มี | **ดีเยี่ยม** (การหล่อลื่นของแข็ง มีประสิทธิภาพแม้ในอุณหภูมิสูง) |
| ความแม่นยำในการขัดเงิน | ±0.02 มม. | ±0.02 มม. | ±0.03 มม. | **±0.005 มม.** (ความแม่นยำของเครื่องเจียร์ CNC) |
| อายุการใช้งาน (ห้องคดเคี้ยว) | 3-6 เดือน | 4-8 เดือน | 1-2 ปี | **4-6 ปี** |

### 2.2 กราไฟต์อิมเพรกเนตบรอนซ์  ของ Huahao Sealing

วัสดุเฉพาะสำหรับแผ่นเสริมซีลห้องคดเคี้ยว:

- **วัสดุฐาน**: กราไฟต์ไอโซสเตติกเม็ดละเอียด (เม็ด 8 ไมครอน, ความหนาแน่น 1.82 กร./ลบ.ซม.)
- **สารอิมเพรกเนต**: บรอนซ์ดีบุก CuSn10 (อิมเพรกเนตความดันสุญญากาศ อัตราการอิมเพรกเนต ≥ 95%, ความรูพรุนคงเหลือ < 1%)
- **คุณสมบัติหลัก**:
  - ความแข็งแรงต่อการอัด 260 MPa, ความแข็งแรงต่อการหัก 72 MPa, ชอร์ HS 80
  - ค่านำความร้อน 85 W/m·K (ความร้อนจากการขัดถูกจะถูกนำออกอย่างรวดเร็ว หลีกเลี่ยงการออกซิเดชันของกราไฟต์)
  - สัมประสิทธิ์การขยายตัวจากความร้อน 3.2×10⁻⁶/℃ (จับคู่กับสเตนลีย์คาร์บอน 12×10⁻⁶ ช่องว่างจะขยายขึ้นแทนที่จะเล็กลงเมื่ออุณหภูมิสูง)
  - อุณหภูมิการออกซิเดชัน: ≤ 450℃ ในอากาศ (สูงกว่าสภาวะก๊าซแคร็กเกอร์ที่ 125℃ อย่างมาก)
  - ต้านทานต่อสื่อกลาง: เสถียรอย่างสมบูรณ์ใน H₂S, CO, อัลเคน, อัลเคน; สารอิมเพรกเนตบรอนซ์มีการต้านทานการกัดกร่อน H₂S ในระดับเล็กน้อย (ไม่มีผลกระทบเมื่อความเข้มข้นของ H₂S < 500 ppm)

### 2.3 ข้อกำหนดของบูชโรเตอร์

โซลูชันแผ่นเสริมคาร์บอนกราไฟต์จำเป็นต้องจับคู่กับบูชที่มีความแข็งสูง:

- **พื้นผิวบูช**: ชุบโครเมียมแข็ง 0.10-0.15 มม. ชั้นชุบ HV 850-950, ความหยาบ R_a ≤ 0.20 ไมครอน
- **ข้อกำหนดของชั้นชุบ**: แรงยึดเหนี่ยวระหว่างชั้นชุบโครเมียมและวัสดุฐาน ≥ 60 MPa, ไม่มีรอยแตกจุลินทรีย์ (การตรวจสอบด้วยวิธีการกัดกร่อนไฟฟ้าไม่พบรอยแตก)
- **ทางเลือกอื่น**: การเคลือบ WC-Co-Cr ด้วยวิธี HVOF, HV 1100-1200 (ทนต่อการสึกหรอดีกว่าแต่ค่าใช้จ่ายสูงกว่า 3-4 เท่า)

## 3. การออกแบบโครงสร้างซีลห้องคดเคี้ยว

### 3.1 การเลือกประเภทซีล

การเปรียบเทียบโครงสร้างซีลห้องคดเคี้ยวที่ใช้กันอย่างแพร่หลาย 2 แบบ:

| ประเภทโครงสร้าง | ผังภาพ | อัตราการรั่ว (สัมพัทธ์) | ความต้านทานการขัดถูก | ค่าใช้จ่าย | ขอบเขตการใช้งาน |
|----------------|--------|----------------------|---------------------|-----------|----------------|
| **ประเภทตรง** | ฟันทั้งหมดอยู่บนสเตเตอร์หรือฟันทั้งหมดอยู่บนโรเตอร์ ปลายฟันชี้ไปยังพื้นผิวทรงกระบอกตรงข้ามที่เรียบ | 100% (เกณฑ์มาตรฐาน) | ปานกลาง | ต่ำ | ส่วนแรงดันต่ำ (< 0.5 MPa) สภาวะการสั่นสะเทือนของเพลาน้อย |
| **ประเภทสลับกัน** | ฟันถูกจัดเรียงสลับกันบนสเตเตอร์และโรเตอร์ สร้างท่อไหล "รูปตัว Z" ทิศทางการไหลของก๊าซเปลี่ยนทิศหลายครั้ง | **50-60%** | ดีเยี่ยม (เมื่อขัดถูกจะสัมผัสทีละระดับ พลังงานจะกระจาย) | ปานกลาง | **แนะนำ! ส่วนแรงดันปานกลาง-สูง (> 0.5 MPa) เป็นที่นิยมสำหรับเครื่องขนาดใหญ่** |

แรงดันระหว่างระดับของคอมเพรสเซอร์ก๊าซแคร็กเกอร์ GB201 คือ 0.3-1.2 MPa **แนะนำให้ใช้ประเภทสลับกันสำหรับระดับ 2, 3, 4 และใช้ประเภทตรงสำหรับระดับ 1**

### 3.2 การออกแบบรูปทรงฟันและช่องว่าง

**การออกแบบรูปทรงฟัน (กำหนดเอฟเฟกต์การท่อร้อยสาย)**:
- **มุมปลายฟัน**: ฟันสามเหลี่ยมด้านเท่ามุม 60°, รัศมีปลายฟัน R ≤ 0.03 ไมครอน (เอฟเฟกต์ของขอบแหลมที่แข็งแรงให้ผลการท่อร้อยสายที่ดีที่สุด)
- **ความสูงฟัน H**: H = 8-12 มม. (รับประกันความแข็งแรงเชิงกลของปลายฟัน หลีกเลี่ยงการหักขณะติดตั้ง)
- **ระยะห่างระหว่างฟัน P**: P = 10-15 มม. ความสูงฟัน H / ระยะห่างระหว่างฟัน P ≈ 0.6-0.8 (สัดส่วนของ "พื้นที่ตายของวอร์เท็กซ์" ในท่อไหลสมเหตุสมผล)
- **จำนวนฟัน Z**: 4-6 ฟันต่อระดับ; เมื่อแรงดันหยุดรวมของแต่ละระดับ > 0.2 MPa จำเป็นต้องมีฟัน 8+ ฟัน

**การออกแบบช่องว่าง (ดุลยพินิจระหว่างอัตราการรั่วและความเสี่ยงจากการขัดถูก)**:
- **ช่องว่างตามเส้นผ่านศูนย์กลาง 2c (สภาพเย็น)**:
  - ส่วนความเร็วสูง (> 6000 รอบ/นาที, เส้นผ่านศูนย์กลางเพลา 150-200 มม.): 2c = 0.40-0.50 มม.
  - ส่วนความเร็วปานกลาง (4000-6000 รอบ/นาที, เส้นผ่านศูนย์กลางเพลา 200-300 มม.): 2c = 0.50-0.65 มม.
- **การตรวจสอบช่องว่างในสภาพร้อน**: ที่อุณหภูมิในการทำงาน 120℃ การขยายตัวของบูช (สเตนลีย์, 12×10⁻⁶) เทียบกับการขยายตัวของแผ่นเสริมกราไฟต์ (3.2×10⁻⁶) ช่องว่างในสภาพร้อนจะเปลี่ยนเพียง -0.02 มม. (ช่องว่างไม่เปลี่ยนแปลงโดยทั่วไป จะไม่เกิดการ "ติดขัด")
- **ระยะปลอดภัยสำหรับการขัดถูก**: ช่องว่างในสภาพเย็น ≥ 2.5 เท่าของการสั่นสะเทือนของเพลาปกติ, ≥ 1.3 เท่าของการสั่นสะเทือนของเพลาเมื่อความเร็ววิกฤต (2c ≥ 1.3 × 85 ไมครอน ≈ 110 ไมครอน, การเลือกค่าจริง 400+ ไมครอนค่อนข้างปลอดภัย)

### 3.3 วิธีการยึดแผ่นเสริม

คาร์บอนกราไฟต์เป็นวัสดุที่เปราะ ไม่สามารถเจาะเกลียวได้ (มีแนวโน้มที่จะแตก) จึงใช้วิธี **เสียบช่องรูปนกแก้วด้วยการกดขัด**:

- ผนังในของวงแหวนสเตเตอร์ถูกกลึงเป็นช่องรูปนกแก้ว 60° (ความกว้างของช่องจะเล็กกว่าความกว้างก้นรูปนกแก้วของแผ่นเสริมกราไฟต์เล็กน้อย ความกดขัด 0.02-0.03 มม.)
- แผ่นเสริมกราไฟต์ถูกกดเข้าช่องรูปนกแก้วอย่างช้าๆ ที่อุณหภูมิห้อง (เครื่องกด 15 MPa, ความเร็ว 1 มม./วินาที, หลีกเลี่ยงการกระทบ)
- ทั้งสองข้างถูกยึดด้วยแหวนกันลื่นแบบจุดบัดกรี (จุดบัดกรีอยู่ไกลจากกราไฟต์ หลีกเลี่ยงผลกระทบจากความร้อน)
- สุดท้าย เครื่องเจียร์ CNC จะขัดเงินรอบรอบปลายฟันให้ค่า runout ≤ 0.01 มม. และส่วนต่างของความสูงของแต่ละฟัน ≤ 0.005 มม.

## 4. กรณีศึกษา Huahao Sealing

โรงงานเอทิลีน 800000 ตัน/ปี ของกลุ่มปิโตรเคมีแห่งหนึ่ง มีคอมเพรสเซอร์ก๊าซแคร็กเกอร์ (หนึ่งใน "สามคอมเพรสเซอร์หลัก") (GB201, ผลิตโดย Shengu, เหวี่ยง 6 ระดับ, บีบอัด 4 ส่วน, กำลังไฟฟ้า 15000 kW, ความเร็ว 8200 รอบ/นาที, ซีลห้องคดเคี้ยวระหว่างระดับ 48 ระดับ, แรงดันสื่อกลางสูงสุด 2.5 MPa, อุณหภูมิที่ออก 122℃) เดิมใช้ฟันห้องคดเคี้ยวอลูมิเนียมอัลลอยด์ 6061 ซึ่งมีปัญหาร้ายแรงดังนี้:

1. **ฟันสึกหรอได้อย่างรวดเร็ว**: ทุกครั้งที่ผ่านความเร็ววิกฤตอันดับ 1 (ประมาณ 4200 รอบ/นาที) การสั่นสะเทือนของเพลา 75-80 ไมครอน ฟันอลูมิเนียมจะขัดถูกแบบแข็งกับบูชชุบโครเมียม หลังจาก **15-20 ครั้งการเริ่ม-หยุด** ความสูงของฟันจะสึกหรอไปครึ่งหนึ่ง และช่องว่างของห้องคดเคี้ยวจะขยายจากที่ออกแบบไว้ 0.28 มม. เป็น 0.7-0.9 มม.
2. **อัตราการรั่วระหว่างระดับเกินขอบเขต**: อัตราการรั่วที่ได้รับการสอบเทียบจากโรงงาน **2.8%** (ตามมาตรฐาน API ควรอยู่ที่ ≤ 1.5%) การรั่วเอทิลีนและวัสดุอื่นๆ ประมาณ 0.8 ตันต่อชั่วโมง สูญเสียประมาณ **18 ล้าน CNY ต่อปี**
3. **การกัดกร่อน H₂S**: ก๊าซแคร็กเกอร์มี H₂S 80-120 ppm ฟันห้องคดเคี้ยวบรอนซ์ในส่วนอุณหภูมิต่ำของระดับ 3 (52℃) เกิดการกัดกร่อนถอดสังกะสี ฟันกลายเป็นเปราะและแตกหัก (ในช่วงบำรุงรักษาใหญ่ปี 2017 พบฟันแตกหัก 7 อัน)

ในช่วงบำรุงรักษาใหญ่ปี 2018 ซีลห้องคดเคี้ยว 48 ระดับทั้งหมดถูกเปลี่ยนเป็นโซลูชัน **แผ่นเสริมกราไฟต์อิมเพรกเนตบรอนซ์  + โครงสร้างสลับกัน (ระดับ 2-4) / ประเภทตรง (ระดับ 1) + การเสียบช่องรูปนกแก้ว + บูชชุบโครเมียมใหม่ที่เข้ากันได้** ของ Huahao Sealing:

- **อัตราการรั่ว**: หลังจากบำรุงรักษาและสอบเทียบ **0.9%** (ดีกว่ามาตรฐาน API 1.5%) การรั่วของเอทิลีนและวัสดุอื่นๆ ลดลง **1.9 ตัน/ชั่วโมง** ค่าประหยัดวัสดุต่อปีประมาณ **12 ล้าน CNY** (คำนวณตามเอทิลีน 7500 CNY/ตัน)
- **อายุซีล**: 2018-2024 มีประสบการณ์ **6 ครั้งการเริ่ม-หยุด** (รวมถึงการบำรุงรักษาใหญ่ทั้งโรงงาน 2 ครั้ง) ในช่วงปี 2024 การถอดตรวจพบว่าการสึกหรอเฉลี่ยของปลายฟันกราไฟต์เพียง **0.012 มม.** (อัตราการสึกหรอ 0.002 มม./ครั้ง) ยังสามารถใช้งานต่อได้อีก 4-6 ปี (ฟันอลูมิเนียมเดิมถูกเปลี่ยนไปแล้ว 4 รอบ)
- **การปกป้องบูช**: ชั้นชุบโครเมียมของบูชแต่ละส่วนไม่มีความเสียหายที่ชัดเจน ความหยาบยังคงตรงตามข้อกำหนด ไม่จำเป็นต้องเปลี่ยน (ตามแผนเดิมทุกครั้งที่บำรุงรักษาใหญ่จำเป็นต้องเปลี่ยนบูช ซึ่งประหยัดค่าใช้จ่ายอะไหล่ประมาณ 3.8 ล้าน CNY)

หลักการเลือก: ขนาดของการสั่นสะเทือนของเพลากำหนดวัสดุฟัน (การสั่นสะเทือนของเพลา > 50 ไมครอนจำเป็นต้องใช้แผ่นเสริมกราไฟต์ เพื่อหลีกเลี่ยงการขัดถูกแบบแข็ง) ความกัดกร่อนของสื่อกลางกำหนดสารอิมเพรกเนต (มี H₂S เลือกบรอนซ์อิมเพรกเนต) แรงดันระหว่างระดับกำหนดประเภทโครงสร้าง (> 0.5 MPa เลือกประเภทสลับกัน) ช่องว่างในสภาพเย็นออกแบบตาม 2.5 เท่าของการสั่นสะเทือนของเพลา`,
    },
  },
]
