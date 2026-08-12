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
      zh: "针对常减压装置塔底泵 350℃ 以上高温渣油工况，本文系统讲解碳石墨密封环的材料选型（锑金属浸渍石墨）、结构设计（平衡型）、冲洗方案（API 682 Plan 23）与现场使用案例，为炼厂机械工程师提供实用选型指南。",
      en: "For atmospheric-vacuum distillation unit bottom pumps operating above 350℃ with high-temperature residue, this article systematically covers carbon graphite seal ring material selection (antimony-impregnated graphite), structural design (balanced type), flush plans (API 682 Plan 23), and field case studies — a practical selection guide for refinery mechanical engineers.",
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

石油炼化行业常减压装置的塔底泵是装置的"心脏"设备，其输送的常压渣油温度通常在 350-380℃，减压渣油温度也在 380℃ 以上。在这种工况下，机械密封的可靠性直接决定装置能否实现四年一修的长周期运行目标。本文结合霍邱县华豪密封件有限公司多年服务于中石化、中石油炼厂的实际经验，系统讲解高温油泵碳石墨密封的选型与设计要点。

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

华豪密封的 M106H-Sb 锑浸渍石墨在 380℃ 渣油工况下的实测寿命：树脂浸渍 M106H 平均 4200 小时，锑浸渍 M106H-Sb 平均 13800 小时，寿命提升 3.3 倍。

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

某石化公司 800 万吨/年常减压装置塔底泵（流量 450 m³/h，温度 365℃，介质含焦粉），原用进口品牌机械密封平均寿命 4000 小时，年泄漏停工 3 次。2019 年改用华豪密封 M106H-Sb + SiC + Inconel 波纹管 + Plan 23 方案后，平均寿命提升至 14000 小时，4 年累计运行 56000 小时仅更换 4 套密封，节约备件费用约 80 万元。

选型时需综合考量介质温度梯度、含固量、启停频次三要素：温度波动大优先用波纹管；含固量高优先用 Plan 21+23；频繁启停应降低端面比压至 0.3-0.4 MPa。`,
      en: `## Key Takeaways

- Atmospheric-vacuum distillation bottom pumps handle 350-380℃ residue oil; conventional resin-impregnated graphite carbonizes and fails above 300℃, requiring antimony-impregnated graphite (rated to 500℃)
- At high temperatures the face liquid film easily vaporizes; API 682 Plan 23 (self-flush circulation with cooling) or a Plan 21+23 combination is needed to bring seal chamber temperature below 200℃
- Balanced-type construction (load coefficient B=0.7-0.8) reduces face specific pressure; paired with SiC mating material, service life reaches 12000-16000 hours
- Huahao Sealing extended seal life from 4000 to 14000 hours in a Sinopec 8 million ton/year atmospheric-vacuum unit revamp
- Three selection factors: media temperature gradient, solid particle content, and start-stop frequency — together they determine the impregnation type and flush plan combination

The bottom pumps of atmospheric-vacuum distillation units in petroleum refineries are the "heart" of the unit. The atmospheric residue they convey is typically 350-380℃, and vacuum residue exceeds 380℃. Under such conditions, mechanical seal reliability directly determines whether the unit can achieve a four-year turnaround cycle. Drawing on years of field experience serving Sinopec and PetroChina refineries, this article systematically covers selection and design of carbon graphite seals for high-temperature oil pumps.

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

Huahao Sealing's M106H-Sb antimony-impregnated graphite in 380℃ residue oil service shows: average life of resin-impregnated M106H is 4200 hours, while Sb-impregnated M106H-Sb averages 13800 hours — a 3.3x life improvement.

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

A Sinopec 8 million ton/year atmospheric-vacuum unit bottom pump (flow 450 m³/h, temperature 365℃, media containing coke powder) originally used an imported brand mechanical seal averaging 4000 hours life, with three leakage shutdowns per year. After switching to Huahao Sealing's M106H-Sb + SiC + Inconel bellows + Plan 23 solution in 2019, average life reached 14000 hours. Over 4 years and 56000 cumulative hours, only 4 seal sets were replaced, saving about 800000 CNY in spare parts.

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

Than chì tẩm antimon M106H-Sb của Huahao Sealing trong điều kiện cặn dầu 380℃ cho kết quả: tuổi thọ trung bình của M106H tẩm nhựa là 4200 giờ, trong khi M106H-Sb tẩm antimon đạt 13800 giờ — tăng 3.3 lần.

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

Bơm đáy tháp thiết bị chưng cất áp suất thường-khí 8 triệu tấn/năm của Sinopec (lưu lượng 450 m³/h, nhiệt độ 365℃, môi chất chứa bột cốc) ban đầu dùng cơ cấu kín thương hiệu nhập khẩu tuổi thọ trung bình 4000 giờ, mỗi năm dừng máy do rò rỉ 3 lần. Sau khi chuyển sang giải pháp M106H-Sb + SiC + ống bích Inconel + Plan 23 của Huahao Sealing năm 2019, tuổi thọ trung bình đạt 14000 giờ. Trong 4 năm tích lũy 56000 giờ, chỉ thay 4 bộ kín, tiết kiệm chi phí phụ tùng khoảng 800000 CNY.

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

กราไฟต์อิมเพรกเนตอินติมอนี M106H-Sb ของ Huahao Sealing ในบริการกากน้ำมัน 380℃ แสดง: อายุการใช้งานเฉลี่ยของ M106H อิมเพรกเนตเรซินคือ 4200 ชั่วโมง ในขณะที่ M106H-Sb อิมเพรกเนตอินติมอนีเฉลี่ย 13800 ชั่วโมง — อายุการใช้งานเพิ่มขึ้น 3.3 เท่า

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

ปั๊มก้นหอหอกลั่นภายใต้ความดันปกติ-สุญญากาศ 8 ล้านตัน/ปี ของ Sinopec (อัตราการไหล 450 m³/h อุณหภูมิ 365℃ ตัวกลางมีผงโค้ก) เดิมใช้ซีลกลไกแบรนด์นำเข้าอายุการใช้งานเฉลี่ย 4000 ชั่วโมง ปีละ 3 ครั้งที่หยุดเครื่องเนื่องจากการรั่วซึม หลังเปลี่ยนเป็นโซลูชัน M106H-Sb + SiC + ท่อระฆัง Inconel + Plan 23 ของ Huahao Sealing ในปี 2019 อายุการใช้งานเฉลี่ยถึง 14000 ชั่วโมง ในระยะเวลา 4 ปีสะสม 56000 ชั่วโมง มีการเปลี่ยนเพียง 4 ชุดซีล ประหยัดค่าอะไหล่ประมาณ 800000 CNY

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

烘缸工况首选环氧树脂浸渍石墨 M120E。环氧浸渍后气孔率降至 1.5% 以下，耐 200℃ 蒸汽长期冲刷不分解。180℃ 蒸汽环境 5000 小时测试：环氧浸渍石墨气孔率从 1.4% 升至 1.7%；酚醛浸渍升至 3.2%，开始蒸汽渗透泄漏。

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

某特种纸企业 5 万吨/年生产线（烘缸直径 1.5 m，蒸汽压力 1.0 MPa，温度 185℃，56 个烘缸），原用进口品牌剖分式密封平均寿命 4000 小时，每年因泄漏停机 6 次，单次损失约 8 万元。2021 年改用华豪密封 M120E + SSiC + AM350 波纹管 + 反吹系统方案后，平均寿命提升至 12000 小时，年停机次数降至 2 次，年节约停机损失约 32 万元，节约备件费用约 18 万元。

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

For dryer can service, epoxy resin-impregnated graphite M120E is preferred. After epoxy impregnation, porosity drops below 1.5%, resisting 200℃ steam long-term erosion without decomposition. 5000-hour test in 180℃ steam: epoxy-impregnated graphite porosity rises from 1.4% to 1.7%; phenolic-impregnated rises to 3.2%, beginning steam permeation leakage.

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

A specialty paper company's 50000 ton/year production line (dryer can diameter 1.5 m, steam pressure 1.0 MPa, temperature 185℃, 56 cans) originally used an imported brand split seal averaging 4000 hours life, with 6 leakage shutdowns per year, each costing about 80000 CNY. After switching to Huahao Sealing's M120E + SSiC + AM350 bellows + purge system solution in 2021, average life reached 12000 hours, annual shutdowns dropped to 2, saving about 320000 CNY in downtime losses and 180000 CNY in spare parts annually.

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

Cho điều kiện lô sấy, than chì tẩm nhựa epoxy M120E được ưu tiên. Sau khi tẩm epoxy, độ rỗng giảm dưới 1.5%, chịu xói mòn hơi nước 200℃ dài hạn không phân hủy. Thử nghiệm 5000 giờ trong môi trường hơi nước 180℃: than chì tẩm epoxy độ rỗng tăng từ 1.4% lên 1.7%; than chì tẩm phenolic tăng lên 3.2%, bắt đầu rò rỉ thấm hơi nước.

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

Dây chuyền giấy đặc biệt 50000 tấn/năm (đường kính lô sấy 1.5 m, áp suất hơi 1.0 MPa, nhiệt độ 185℃, 56 lô), ban đầu dùng kín tách thương hiệu nhập khẩu tuổi thọ trung bình 4000 giờ, mỗi năm dừng máy do rò rỉ 6 lần, mỗi lần tổn thất khoảng 80000 CNY. Năm 2021 chuyển sang giải pháp M120E + SSiC + ống bích AM350 + hệ thống phun ngược của Huahao Sealing, tuổi thọ trung bình đạt 12000 giờ, số lần dừng máy hàng năm giảm xuống 2, tiết kiệm tổn thất dừng máy khoảng 320000 CNY và chi phí phụ tùng khoảng 180000 CNY mỗi năm.

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

สำหรับสภาวะลูกกลิ้งอบแห้ง กราไฟต์อิมเพรกเนตเรซินอีพ็อกซี M120E เป็นที่ต้องการ หลังอิมเพรกเนตอีพ็อกซี พอรอสิตี้ลดต่ำกว่า 1.5% ทนการกัดเซาะไอน้ำ 200℃ ระยะยาวโดยไม่สลาย ทดสอบ 5000 ชั่วโมงในสภาพไอน้ำ 180℃: กราไฟต์อิมเพรกเนตอีพ็อกซีพอรอสิตี้เพิ่มจาก 1.4% เป็น 1.7%; อิมเพรกเนตฟีนอลิกเพิ่มเป็น 3.2% เริ่มรั่วซึมไอน้ำ

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

สายการผลิตกระดาษพิเศษ 50000 ตัน/ปี (เส้นผ่านศูนย์กลางลูกกลิ้งอบแห้ง 1.5 m ความดันไอน้ำ 1.0 MPa อุณหภูมิ 185℃ 56 ลูก) เดิมใช้ซีลแยกส่วนแบรนด์นำเข้าอายุการใช้งานเฉลี่ย 4000 ชั่วโมง ปีละ 6 ครั้งที่หยุดเครื่องเนื่องจากการรั่วซึม แต่ละครั้งสูญเสียประมาณ 80000 CNY ปี 2021 เปลี่ยนเป็นโซลูชัน M120E + SSiC + ท่อระฆัง AM350 + ระบบพ่นย้อนของ Huahao Sealing อายุการใช้งานเฉลี่ยถึง 12000 ชั่วโมง จำนวนครั้งหยุดเครื่องต่อปีลดเหลือ 2 ประหยัดความสูญเสียจากการหยุดทำงานประมาณ 320000 CNY และค่าอะไหล่ประมาณ 180000 CNY ต่อปี

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
]
