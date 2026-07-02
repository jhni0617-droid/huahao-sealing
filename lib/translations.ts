import {
  applications, enApplications,
  cases, enCases,
  advantages, enAdvantages,
  failureSolutions, enFailureSolutions,
  applicationConditions, enApplicationConditions,
  manufacturingProcess,
  factoryHighlights, enFactoryHighlights,
} from "./constants"

// ============================================================
// VIETNAMESE
// ============================================================

export const viApplications = [
  {
    title: "Bơm",
    slug: "pump-industry",
    description: "Vòng đệm trục quay và bạc lót cho bơm ly tâm, bơm hóa chất, bơm nước, bơm đa cấp. Tự bôi trơn, không cần bảo trì.",
    image: "pump",
  },
  {
    title: "Hàng hải & Ngoài khơi",
    slug: "marine-industry",
    description: "Phớt trục chân vịt tàu thủy, phớt bơm nước biển, bạc lót bánh lái. Tẩm chống ăn mòn đặc biệt cho môi trường nước biển.",
    image: "ship",
  },
  {
    title: "Hóa chất & Dược phẩm",
    slug: "chemical-processing",
    description: "Phớt trục khuấy phản ứng, phớt bơm áp suất cao. Trơ hóa học với axit mạnh, kiềm và dung môi hữu cơ.",
    image: "chem",
  },
  {
    title: "Điện lực & Năng lượng",
    slug: "power-energy",
    description: "Bạc lót bơm tuần hoàn, phớt bơm phụ trợ nhà máy điện. Chịu nhiệt độ cao lên đến 600°C.",
    image: "seal",
  },
  {
    title: "Thực phẩm & Đồ uống",
    slug: "food-pharma",
    description: "Bạc đạn máy trộn sô-cô-la, phớt bơm thực phẩm. Tẩm nhựa cấp thực phẩm, không dầu, đạt FDA.",
    image: "seal",
  },
  {
    title: "Khai thác mỏ & Luyện kim",
    slug: "mining-metallurgy",
    description: "Bạc lót bơm bùn, phớt bôi trơn máy cán. Chịu mài mòn và sốc nhiệt xuất sắc trong môi trường khắc nghiệt.",
    image: "pump",
  },
  {
    title: "Dầu khí",
    slug: "oil-gas",
    description: "Phớt cơ khí bơm dầu, bạc đạn máy nén khí tự nhiên. Ổn định hóa học trong môi trường hydrocarbon, đạt tiêu chuẩn API.",
    image: "chem",
  },
  {
    title: "Làm kín công nghiệp tổng hợp",
    slug: "general-sealing",
    description: "Phớt van, phớt máy nén, phớt máy trộn. Khả năng gia công linh hoạt cho cấu hình phi tiêu chuẩn.",
    image: "seal",
  },
]

export const viCases = [
  {
    title: "Băng tải lò nhiệt độ cao — Mòn trục inox nghiêm trọng",
    company: "Nhà máy sản xuất vật liệu pin lithium",
    condition: "Lò băng tải làm việc ở 300°C, trục băng tải 45mm, 80 vòng/phút. Bạc đồng + mỡ chịu nhiệt hỏng sau mỗi 2 tháng.",
    diagnosis: "Mỡ chịu nhiệt bị cacbon hóa + giãn nở nhiệt bạc đồng gây mòn tăng tốc và hư hỏng trục.",
    solution: "Thay thế bằng bạc than chì carbon RG-15 tùy chỉnh với tẩm chống oxy hóa, thiết kế cho vận hành liên tục 300°C+.",
    result: "Vận hành liên tục 6 tháng, mòn bạc ~0,2mm, trục không hư hỏng. Chi phí bảo trì giảm 60%.",
  },
  {
    title: "Bơm muối nóng chảy nhiệt độ cao — Kẹt bạc đạn",
    company: "Dự án điện mặt trời nhiệt",
    condition: "Bơm muối nóng chảy ở 450°C, trục 65mm, 1500 vòng/phút. Bạc đạn hợp kim đặc biệt bị kẹt thường xuyên, tuổi thọ trung bình 3 tháng.",
    diagnosis: "Không khớp giãn nở nhiệt giữa bạc hợp kim và trục gây mất khe hở và kẹt ở nhiệt độ vận hành.",
    solution: "Bạc than chì carbon độ tinh khiết cao tùy chỉnh với tẩm antimon, khe hở tối ưu cho vận hành 450°C.",
    result: "Vận hành liên tục 12 tháng, không kẹt. Thời gian hoạt động thiết bị kéo dài từ 3 lên 12+ tháng.",
  },
  {
    title: "Máy trộn thực phẩm — Khiếu nại nhiễm bẩn đồng",
    company: "Nhà máy sản xuất máy thực phẩm",
    condition: "Máy trộn sô-cô-la, trục 30mm, 200 vòng/phút, 80°C. Bạc đồng + mỡ cấp thực phẩm gây nhiễm ion đồng và mỡ.",
    diagnosis: "Hạt mài mòn bạc đồng + mỡ di chuyển làm nhiễm bẩn sản phẩm sô-cô-la, gây khiếu nại khách hàng.",
    solution: "Thay bằng bạc than chì tẩm nhựa cấp FDA — thiết kế tự bôi trơn hoàn toàn không dầu.",
    result: "Không còn khiếu nại nhiễm bẩn. Đạt FDA, vận hành hoàn toàn không dầu.",
  },
  {
    title: "Cải tạo bơm ly tâm hóa chất — Hỏng phớt",
    company: "Tập đoàn Hóa chất",
    condition: "Bơm ly tâm xử lý hóa chất ăn mòn, trục 50mm, 1450 vòng/phút, 80-120°C. Phớt PTFE rò rỉ sau mỗi 3 tháng.",
    diagnosis: "Phớt PTFE mềm ở nhiệt độ cao + tấn công hóa học gây phân hủy nhanh và rò rỉ tại bề mặt phớt.",
    solution: "Mặt phớt cơ khí than chì carbon tùy chỉnh với tẩm nhựa chống hóa chất, kết hợp với mặt đối tiếp SiC.",
    result: "Tuổi thọ kéo dài từ 3 lên 18 tháng (cải thiện 6 lần). Tiết kiệm bảo trì hàng năm ~280.000 NDT.",
  },
  {
    title: "Nâng cấp phớt bơm nước biển tàu thủy",
    company: "Nhà máy đóng tàu",
    condition: "Bơm nước biển, trục 60mm, 1750 vòng/phút. Bạc đồng + phớt cao su bị ăn mòn trong nước biển, thay mỗi 6 tháng.",
    diagnosis: "Ăn mòn điện hóa giữa hợp kim đồng và trục trong nước biển + phân hủy phớt cao su do tiếp xúc nước mặn.",
    solution: "Bạc than chì carbon cấp hàng hải với tẩm chống ăn mòn đặc biệt + phớt đàn hồi EPDM.",
    result: "Vận hành 2 năm không cần bảo trì. Chứng nhận DNV. Cấu hình tiêu chuẩn cho nhà máy đóng tàu này.",
  },
  {
    title: "Nâng cấp bạc đạn bơm tuần hoàn nhà máy điện",
    company: "Tập đoàn Điện lực",
    condition: "Bơm nước tuần hoàn lớn, trục 120mm, 990 vòng/phút, 60-95°C. Bạc đồng thiếc mòn nhanh, bảo trì hàng tháng.",
    diagnosis: "Hạt mài mòn trong nước tuần hoàn chưa xử lý làm tăng tốc mòn bạc đồng thiếc, cần thay hàng tháng.",
    solution: "Bạc than chì carbon độ cứng cao với tẩm chống mài mòn, thiết kế cho điều kiện nước có cát/hạt.",
    result: "Vận hành liên tục 15 tháng. Thời gian ngừng máy hàng năm giảm 720 giờ. Chi phí bảo trì giảm 80%.",
  },
]

export const viAdvantages = [
  {
    title: "Tự bôi trơn",
    description: "Than chì carbon có đặc tính tự bôi trơn tự nhiên, loại bỏ nhu cầu hệ thống bôi trơn ngoài, giảm đáng kể chi phí bảo trì. Phù hợp cho quay tốc độ cao, duy trì bôi trơn ngay cả khi khởi động và dừng.",
    icon: "oil",
  },
  {
    title: "Chịu nhiệt độ cao",
    description: "Vận hành ổn định ở 300°C dài hạn, đỉnh ngắn hạn lên đến 350°C. Tẩm chống oxy hóa đặc biệt đảm bảo hiệu suất ổn định trong môi trường nhiệt độ cao.",
    icon: "thermo",
  },
  {
    title: "Chống ăn mòn",
    description: "Than chì carbon trơ hóa học chống lại hầu hết axit, kiềm và dung môi hữu cơ. Tẩm thêm tăng cường độ bền trong môi trường ăn mòn cao.",
    icon: "shield",
  },
  {
    title: "Chống mài mòn",
    description: "Công nghệ tẩm tiên tiến tạo bề mặt phớt cứng, bền, kéo dài tuổi thọ đáng kể so với vật liệu thông thường. Cải thiện khả năng chống mài mòn 60-80%.",
    icon: "gear",
  },
]

export const viFailureSolutions = [
  {
    id: "wear",
    failure: "Mòn quá mức, tuổi thọ ngắn",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.25 3.15L17 12.23l-4-2.37z",
    cause: "Hạt mài trong môi trường, bôi trơn không đủ, hoặc chọn cấp vật liệu sai.",
    symptoms: "Phớt mỏng rõ rệt, rò rỉ sau vài tháng vận hành; rung bơm tăng; rãnh mòn hoặc dạng bậc trên bề mặt phớt.",
    industries: ["Bơm hóa chất", "Bơm nước thải", "Bơm bùn", "Thiết bị khai thác mỏ"],
    solution: "Cấp than chì carbon tùy chỉnh với tẩm tối ưu — ma trận tự bôi trơn giảm tỷ lệ mòn 60-80%.",
    benefit: "Tuổi thọ dài hơn 3-6 lần",
  },
  {
    id: "leak",
    failure: "Rò rỉ bề mặt phớt",
    icon: "M3 12h2v-2H3v2zm16 0h2v-2h-2v2zM5 12l6-6v4h6v4h-6v4l-6-6z",
    cause: "Biến dạng nhiệt, dao động áp suất, lệch tâm lắp đặt, hoặc phẳng bề mặt suy giảm trong vận hành.",
    symptoms: "Rò rỉ liên tục quanh chu vi phớt; rò rỉ tăng sau khi dừng/khởi động lại; vết nứt nhiệt hoặc dấu cong vênh trên bề mặt phớt.",
    industries: ["Bơm ly tâm", "Bơm hóa chất", "Bơm nước", "Bơm dầu"],
    solution: "Bề mặt phớt mài chính xác với than chì carbon ổn định duy trì độ phẳng qua chu trình nhiệt và dao động áp suất.",
    benefit: "Không rò rỉ trong vận hành bình thường",
  },
  {
    id: "corrosion",
    failure: "Ăn mòn & Tấn công hóa học",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
    cause: "Môi trường hóa chất ăn mòn tấn công cấu trúc phớt, gây phồng, nứt hoặc hòa tan.",
    symptoms: "Rỗ, phồng rộp hoặc mềm trên bề mặt phớt; thay đổi kích thước gây kẹt; thâm nhập môi trường dọc theo bề mặt phớt.",
    industries: ["Thiết bị phản ứng hóa chất", "Thiết bị tẩy rửa", "Dây chuyền mạ", "Dược phẩm"],
    solution: "Than chì carbon trơ hóa học với tẩm nhựa hoặc kim loại chuyên dụng, đánh giá cho môi trường hóa chất cụ thể.",
    benefit: "Chống axit, kiềm & dung môi (pH 0-14)",
  },
  {
    id: "heat",
    failure: "Quá nhiệt & Hỏng nhiệt",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    cause: "Vận hành tốc độ cao không đủ làm mát, chạy khô, hoặc tản nhiệt không đủ tại bề mặt phớt.",
    symptoms: "Nhiệt độ cao bất thường tại khu vực phớt; vết cháy hoặc đổi màu trên bề mặt phớt; phớt đàn hồi cứng và giòn.",
    industries: ["Bơm tốc độ cao", "Máy nén", "Máy khuấy", "Hệ thống hơi"],
    solution: "Than chì carbon dẫn nhiệt cao tản nhiệt nhanh gấp 3 lần vật liệu tiêu chuẩn, với xử lý chống oxy hóa cho ổn định nhiệt độ cao.",
    benefit: "Vận hành ổn định ở đỉnh 350°C",
  },
  {
    id: "vibration",
    failure: "Mòn rung & Hỏng do rung động",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    cause: "Rung bơm, độ đảo trục, hoặc lắp đặt không đúng gây mòn rung giữa các thành phần phớt.",
    symptoms: "Tiếng ồn và rung bất thường khi vận hành; mòn dạng đánh bóng trên bề mặt tiếp xúc; mòn rãnh O-ring không đều.",
    industries: ["Bơm nước lớn", "Thiết bị hàng hải", "Máy nén", "Máy giấy"],
    solution: "Đặc tính giảm chấn tự nhiên của than chì carbon hấp thụ rung động, khe hở tối ưu giảm mòn rung.",
    benefit: "Hiệu suất ổn định dưới rung động cao",
  },
]

export const viApplicationConditions = [
  { industry: "Bơm ly tâm & Bơm quy trình", tempRange: "-50°C ~ 260°C", pressureRange: "≤ 20 MPa", speedRange: "≤ 25 m/s", media: "Nước, dầu, hóa chất, bùn, hydrocarbon", phRange: "0–14 (tùy cấp)" },
  { industry: "Trục chân vịt tàu & Bơm nước biển", tempRange: "-20°C ~ 150°C", pressureRange: "≤ 10 MPa", speedRange: "≤ 15 m/s", media: "Nước biển, nước muối, dầu bôi trơn hàng hải", phRange: "6–10" },
  { industry: "Thiết bị phản ứng hóa chất & Máy khuấy", tempRange: "-50°C ~ 350°C", pressureRange: "≤ 25 MPa", speedRange: "≤ 10 m/s", media: "Axit mạnh, kiềm mạnh, dung môi hữu cơ", phRange: "0–14 (cấp chống ăn mòn)" },
  { industry: "Bơm tuần hoàn nhà máy điện & Bơm cấp nhiệt", tempRange: "0°C ~ 250°C", pressureRange: "≤ 16 MPa", speedRange: "≤ 20 m/s", media: "Nước làm mát, nước nóng, hơi, dầu nhiệt", phRange: "6–10" },
  { industry: "Máy thực phẩm & Dược phẩm", tempRange: "-20°C ~ 150°C", pressureRange: "≤ 10 MPa", speedRange: "≤ 10 m/s", media: "Bột thực phẩm, sô-cô-la, dược phẩm, chất lỏng CIP", phRange: "3–11 (cấp thực phẩm)" },
  { industry: "Bơm bùn mỏ & Thiết bị luyện kim", tempRange: "-20°C ~ 200°C", pressureRange: "≤ 15 MPa", speedRange: "≤ 12 m/s", media: "Bùn quặng, bùn, môi trường chứa hạt rắn", phRange: "4–12" },
  { industry: "Vận chuyển dầu khí", tempRange: "-50°C ~ 300°C", pressureRange: "≤ 25 MPa", speedRange: "≤ 20 m/s", media: "Dầu thô, khí tự nhiên, LNG, hóa chất dầu mỏ", phRange: "4–12 (cấp chịu dầu)" },
  { industry: "Thiết bị công nghiệp tổng hợp", tempRange: "-30°C ~ 280°C", pressureRange: "≤ 15 MPa", speedRange: "≤ 20 m/s", media: "Khí nén, hơi, khí, dầu bôi trơn", phRange: "4–12" },
  { industry: "Bơm chìm & Bơm nước thải", tempRange: "0°C ~ 80°C (ngắn hạn 120°C)", pressureRange: "≤ 5 MPa", speedRange: "≤ 10 m/s", media: "Nước sạch, nước thải, bùn, môi trường chứa hạt", phRange: "5–10" },
  { industry: "Máy nén khí & Thiết bị khí nén", tempRange: "-20°C ~ 200°C", pressureRange: "≤ 2,5 MPa", speedRange: "≤ 25 m/s", media: "Khí nén, nitơ, khí trơ, khí chứa dầu", phRange: "6–8" },
  { industry: "Thiết bị thủy lực & Van", tempRange: "-30°C ~ 150°C", pressureRange: "≤ 35 MPa", speedRange: "≤ 5 m/s", media: "Dầu thủy lực, dầu bôi trơn, nhũ tương", phRange: "6–9" },
]

export const viManufacturingProcess = [
  { step: 1, title: "Sàng lọc Nguyên liệu", description: "Mua than chì carbon độ tinh khiết cao từ nhà cung cấp được chứng nhận. Kiểm tra mật độ, độ cứng và độ tinh khiết trước khi đưa vào sản xuất.", details: ["Kiểm tra mật độ & độ xốp", "Xác minh độ cứng", "Phân tích độ tinh khiết hóa học", "Truy xuất lô hàng"] },
  { step: 2, title: "Gia công Chính xác", description: "Trung tâm gia công CNC sản xuất các thành phần với dung sai micron. Công nhân lành nghề giám sát từng bước để đảm bảo độ chính xác kích thước.", details: ["Tiện & phay CNC", "Hiệu chuẩn dao tự động", "Kiểm tra kích thước trong quy trình", "Kiểm soát độ hoàn thiện bề mặt"] },
  { step: 3, title: "Xử lý Tẩm", description: "Công nghệ tẩm tiên tiến bịt kín cấu trúc vi lỗ của than chì carbon, tăng cường chống mài mòn, giảm độ thấm và tùy chỉnh hiệu suất cho điều kiện vận hành cụ thể.", details: ["Xử lý chống oxy hóa", "Tùy chọn tẩm nhựa", "Tẩm kim loại chịu nhiệt cao", "Hỗ trợ công thức tùy chỉnh"] },
  { step: 4, title: "Kiểm soát Chất lượng", description: "Mỗi thành phần được kiểm tra 100% bao gồm xác minh kích thước, thử áp suất và đánh giá chất lượng bề mặt trước khi xuất xưởng.", details: ["Đo kích thước CMM", "Thử áp suất & rò rỉ", "Phân tích độ nhám bề mặt", "Kiểm tra ngoại quan & vi mô"] },
  { step: 5, title: "Đóng gói & Xuất hàng", description: "Sản phẩm được đóng gói riêng bằng vật liệu chống ăn mòn, cố định bằng thùng gỗ cấp xuất khẩu, đảm bảo nguyên vẹn trong vận chuyển quốc tế đường dài.", details: ["Bao bì chống ăn mòn", "Bảo vệ riêng", "Thùng gỗ cấp xuất khẩu", "Hồ sơ vận chuyển toàn cầu"] },
]

export const viFactoryHighlights = [
  { value: "10+", label: "Quốc gia xuất khẩu" },
  { value: "20+", label: "Nhân viên" },
  { value: "5 năm", label: "Kinh nghiệm xuất khẩu" },
]

// ============================================================
// THAI
// ============================================================

export const thApplications = [
  {
    title: "ปั๊ม",
    slug: "pump-industry",
    description: "ซีลเพลาหมุนและบูชสำหรับปั๊มหอยโข่ง ปั๊มเคมี ปั๊มน้ำ และปั๊มหลายขั้น หล่อลื่นในตัว ไม่ต้องบำรุงรักษา",
    image: "pump",
  },
  {
    title: "ต่อเรือและนอกชายฝั่ง",
    slug: "marine-industry",
    description: "ซีลเพลาใบพัดท้ายเรือ ซีลปั๊มน้ำทะเล บูชหางเสือ อัดซึมป้องกันการกัดกร่อนพิเศษสำหรับสภาพแวดล้อมน้ำทะเล",
    image: "ship",
  },
  {
    title: "เคมีและเภสัชกรรม",
    slug: "chemical-processing",
    description: "ซีลเพลากวนปฏิกรณ์ ซีลปั๊มแรงดันสูง เฉื่อยทางเคมีต่อกรดแก่ ด่าง และตัวทำละลายอินทรีย์",
    image: "chem",
  },
  {
    title: "พลังงานไฟฟ้า",
    slug: "power-energy",
    description: "บูชปั๊มหมุนเวียน ซีลปั๊มช่วยโรงไฟฟ้า ทนอุณหภูมิสูงได้ถึง 600°C",
    image: "seal",
  },
  {
    title: "เครื่องจักรอาหารและเครื่องดื่ม",
    slug: "food-pharma",
    description: "บูชเครื่องผสมช็อกโกแลต ซีลปั๊มอาหาร อัดซึมเรซินเกรดอาหาร ไร้น้ำมัน ผ่านมาตรฐาน FDA",
    image: "seal",
  },
  {
    title: "เหมืองแร่และโลหะวิทยา",
    slug: "mining-metallurgy",
    description: "บูชปั๊มโคลน ซีลหล่อลื่นโรงรีด ทนทานต่อการสึกหรอและความร้อนสะดุ้งในสภาพแวดล้อมที่รุนแรง",
    image: "pump",
  },
  {
    title: "น้ำมันและก๊าซ",
    slug: "oil-gas",
    description: "ซีลเชิงกลปั๊มน้ำมัน บูชคอมเพรสเซอร์ก๊าซธรรมชาติ เสถียรทางเคมีในสภาพแวดล้อมไฮโดรคาร์บอน ผ่านมาตรฐาน API",
    image: "chem",
  },
  {
    title: "การซีลอุตสาหกรรมทั่วไป",
    slug: "general-sealing",
    description: "ซีลวาล์ว ซีลคอมเพรสเซอร์ ซีลเครื่องผสม สามารถกลึงขึ้นรูปได้ยืดหยุ่นสำหรับการกำหนดค่าเฉพาะ",
    image: "seal",
  },
]

export const thCases = [
  {
    title: "สายพานลำเลียงเตาอุณหภูมิสูง — การสึกหรอของเพลาสเตนเลสรุนแรง",
    company: "ผู้ผลิตวัสดุแบตเตอรี่ลิเธียม",
    condition: "เตาอุโมงค์ทำงานที่ 300°C เพลาสายพาน 45 มม. 80 รอบ/นาที บูชทองแดง + จารบีทนความร้อนเสียทุก 2 เดือน",
    diagnosis: "จารบีทนความร้อนกลายเป็นคาร์บอน + การขยายตัวเนื่องจากความร้อนของบูชทองแดงทำให้สึกหรอเร่งและเพลาเสียหาย",
    solution: "เปลี่ยนเป็นบูชคาร์บอนกราไฟต์ RG-15 แบบกำหนดเองอัดซึมป้องกันออกซิเดชัน ออกแบบสำหรับทำงานต่อเนื่อง 300°C+",
    result: "ทำงานต่อเนื่อง 6 เดือน บูชสึก ~0.2 มม. เพลาไม่เสียหาย ค่าบำรุงรักษาลดลง 60%",
  },
  {
    title: "ปั๊มเกลือหลอมเหลวอุณหภูมิสูง — แบริ่งติดขัด",
    company: "โครงการพลังงานแสงอาทิตย์แบบความร้อน",
    condition: "ปั๊มเกลือหลอมเหลวที่ 450°C เพลา 65 มม. 1500 รอบ/นาที แบริ่งโลหะผสมพิเศษติดขัดบ่อย อายุเฉลี่ย 3 เดือน",
    diagnosis: "การขยายตัวเนื่องจากความร้อนไม่สมดุลระหว่างแบริ่งโลหะผสมและเพลาทำให้สูญเสียช่องว่างและติดขัดที่อุณหภูมิทำงาน",
    solution: "แบริ่งคาร์บอนกราไฟต์บริสุทธิ์สูงแบบกำหนดเองอัดซึมพลวง ช่องว่างเหมาะสมสำหรับการทำงานที่ 450°C",
    result: "ทำงานต่อเนื่อง 12 เดือน ไม่ติดขัด อายุการใช้งานอุปกรณ์เพิ่มจาก 3 เป็น 12+ เดือน",
  },
  {
    title: "เครื่องผสมอาหาร — ร้องเรียนการปนเปื้อนทองแดง",
    company: "ผู้ผลิตเครื่องจักรอาหาร",
    condition: "เครื่องผสมช็อกโกแลต เพลา 30 มม. 200 รอบ/นาที 80°C บูชทองแดง + จารบีเกรดอาหารทำให้เกิดการปนเปื้อนไอออนทองแดงและจารบี",
    diagnosis: "อนุภาคสึกหรอของบูชทองแดง + จารบีเคลื่อนที่ปนเปื้อนผลิตภัณฑ์ช็อกโกแลต ทำให้ลูกค้าร้องเรียน",
    solution: "เปลี่ยนเป็นบูชคาร์บอนกราไฟต์อัดซึมเรซินเกรด FDA — ออกแบบหล่อลื่นในตัวไร้น้ำมันสมบูรณ์",
    result: "ไม่มีการร้องเรียนการปนเปื้อน ผ่าน FDA ทำงานไร้น้ำมันสมบูรณ์",
  },
  {
    title: "ปรับปรุงปั๊มหอยโข่งเคมี — ซีลเสีย",
    company: "กลุ่มบริษัทเคมี",
    condition: "ปั๊มหอยโข่งจัดการสารเคมีกัดกร่อน เพลา 50 มม. 1450 รอบ/นาที 80-120°C ซีล PTFE รั่วทุก 3 เดือน",
    diagnosis: "ซีล PTFE อ่อนตัวที่อุณหภูมิสูง + การโจมตีทางเคมีทำให้เสื่อมสภาพเร็วและรั่วที่หน้าซีล",
    solution: "หน้าซีลเชิงกลคาร์บอนกราไฟต์แบบกำหนดเองอัดซึมเรซินทนเคมี ประกบคู่กับหน้าซีล SiC",
    result: "อายุการใช้งานเพิ่มจาก 3 เป็น 18 เดือน (ดีขึ้น 6 เท่า) ประหยัดค่าบำรุงรักษาปีละ ~280,000 หยวน",
  },
  {
    title: "อัพเกรดซีลปั๊มน้ำทะเลเดินเรือ",
    company: "อู่ต่อเรือ",
    condition: "ปั๊มน้ำทะเล เพลา 60 มม. 1750 รอบ/นาที บูชทองแดง + ซีลยางกัดกร่อนในน้ำทะเล เปลี่ยนทุก 6 เดือน",
    diagnosis: "การกัดกร่อนแบบกัลวานิกระหว่างโลหะผสมทองแดงและเพลาในน้ำทะเล + การเสื่อมสภาพของซีลยางจากการสัมผัสน้ำเค็ม",
    solution: "บูชคาร์บอนกราไฟต์เกรดเดินเรืออัดซึมป้องกันการกัดกร่อนพิเศษ + ซีลยาง EPDM",
    result: "ทำงาน 2 ปีไม่ต้องบำรุงรักษา รับรอง DNV กลายเป็นมาตรฐานของอู่ต่อเรือนี้",
  },
  {
    title: "อัพเกรดแบริ่งปั๊มหมุนเวียนโรงไฟฟ้า",
    company: "กลุ่มบริษัทไฟฟ้า",
    condition: "ปั๊มน้ำหมุนเวียนขนาดใหญ่ เพลา 120 มม. 990 รอบ/นาที 60-95°C แบริ่งทองแดงดีบุกสึกเร็ว ต้องบำรุงรักษาทุกเดือน",
    diagnosis: "อนุภาคกัดกร่อนในน้ำหมุนเวียนไม่ผ่านการบำบัดเร่งการสึกหรอของแบริ่งทองแดงดีบุก ต้องเปลี่ยนทุกเดือน",
    solution: "แบริ่งคาร์บอนกราไฟต์ความแข็งสูงอัดซึมป้องกันการกัดกร่อน ออกแบบสำหรับสภาพน้ำที่มีทราย/อนุภาค",
    result: "ทำงานต่อเนื่อง 15 เดือน เวลาหยุดงานประจำปีลดลง 720 ชม. ค่าบำรุงรักษาลดลง 80%",
  },
]

export const thAdvantages = [
  {
    title: "หล่อลื่นในตัว",
    description: "คาร์บอนกราไฟต์มีคุณสมบัติหล่อลื่นในตัวตามธรรมชาติ ไม่ต้องใช้ระบบหล่อลื่นภายนอก ลดค่าบำรุงรักษาอย่างมาก เหมาะสำหรับการหมุนความเร็วสูง คงการหล่อลื่นแม้ในตอนเริ่มและหยุด",
    icon: "oil",
  },
  {
    title: "ทนอุณหภูมิสูง",
    description: "ทำงานเสถียรที่ 300°C ในระยะยาว จุดสูงสุดระยะสั้นถึง 350°C การอัดซึมป้องกันออกซิเดชันพิเศษช่วยให้ประสิทธิภาพคงที่ในสภาพแวดล้อมอุณหภูมิสูง",
    icon: "thermo",
  },
  {
    title: "ทนการกัดกร่อน",
    description: "คาร์บอนกราไฟต์เฉื่อยทางเคมี ทนทานต่อกรด ด่าง และตัวทำละลายอินทรีย์ส่วนใหญ่ การอัดซึมเพิ่มความทนทานในสภาพแวดล้อมกัดกร่อนรุนแรง",
    icon: "shield",
  },
  {
    title: "ทนการสึกหรอ",
    description: "เทคโนโลยีอัดซึมขั้นสูงสร้างพื้นผิวซีลแข็ง ทนทาน ยืดอายุการใช้งานอย่างมากเมื่อเทียบกับวัสดุทั่วไป ความต้านทานการสึกหรอดีขึ้น 60-80%",
    icon: "gear",
  },
]

export const thFailureSolutions = [
  {
    id: "wear",
    failure: "การสึกหรอมากเกินไป อายุสั้น",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.25 3.15L17 12.23l-4-2.37z",
    cause: "อนุภาคกัดกร่อนในตัวกลาง หล่อลื่นไม่เพียงพอ หรือเลือกเกรดวัสดุผิด",
    symptoms: "ซีลบางลงชัดเจน รั่วหลังจากใช้งานหลายเดือน สั่นสะเทือนของปั๊มเพิ่มขึ้น ร่องสึกหรือรูปแบบขั้นบันไดบนหน้าซีล",
    industries: ["ปั๊มเคมี", "ปั๊มน้ำเสีย", "ปั๊มโคลน", "อุปกรณ์เหมืองแร่"],
    solution: "เกรดคาร์บอนกราไฟต์แบบกำหนดเองอัดซึมเหมาะสม — เมทริกซ์หล่อลื่นในตัวลดอัตราการสึก 60-80%",
    benefit: "อายุการใช้งานยาวนานขึ้น 3-6 เท่า",
  },
  {
    id: "leak",
    failure: "การรั่วของหน้าซีล",
    icon: "M3 12h2v-2H3v2zm16 0h2v-2h-2v2zM5 12l6-6v4h6v4h-6v4l-6-6z",
    cause: "การบิดเบี้ยวจากความร้อน ความผันผวนของความดัน การจัดตำแหน่งติดตั้งไม่ถูกต้อง หรือความเรียบหน้าซีลลดลงระหว่างทำงาน",
    symptoms: "ซึมต่อเนื่องรอบปริมณฑลซีล รั่วเพิ่มขึ้นหลังหยุด/สตาร์ทใหม่ รอยแตกจากความร้อนหรือรอยบิดเบี้ยวบนหน้าซีล",
    industries: ["ปั๊มหอยโข่ง", "ปั๊มเคมี", "ปั๊มน้ำ", "ปั๊มน้ำมัน"],
    solution: "หน้าซีลขัดเงาความแม่นยำสูงด้วยคาร์บอนกราไฟต์เสถียร คงความเรียบผ่านวงจรความร้อนและความผันผวนของความดัน",
    benefit: "ไม่มีการรั่วซึมในการทำงานปกติ",
  },
  {
    id: "corrosion",
    failure: "การกัดกร่อนและการโจมตีทางเคมี",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
    cause: "สารเคมีกัดกร่อนโจมตีโครงสร้างซีล ทำให้บวม แตก หรือละลาย",
    symptoms: "หลุม พุพอง หรืออ่อนตัวบนพื้นผิวซีล เปลี่ยนแปลงขนาดทำให้ติดขัด สารซึมเข้าตามหน้าซีลเปลี่ยนสี",
    industries: ["เครื่องปฏิกรณ์เคมี", "อุปกรณ์ดอง", "สายชุบ", "เภสัชกรรม"],
    solution: "คาร์บอนกราไฟต์เฉื่อยทางเคมีอัดซึมเรซินหรือโลหะเฉพาะทาง ประเมินสำหรับสภาพแวดล้อมเคมีเฉพาะ",
    benefit: "ทนกรด ด่าง และตัวทำละลาย (pH 0-14)",
  },
  {
    id: "heat",
    failure: "ความร้อนสูงเกินไปและความเสียหายจากความร้อน",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    cause: "การทำงานความเร็วสูงโดยไม่มีความเย็นเพียงพอ ทำงานแห้ง หรือการระบายความร้อนไม่เพียงพอที่หน้าซีล",
    symptoms: "อุณหภูมิสูงผิดปกติบริเวณซีล รอยไหม้หรือเปลี่ยนสีบนหน้าซีล ซีลยางแข็งและเปราะ",
    industries: ["ปั๊มความเร็วสูง", "คอมเพรสเซอร์", "เครื่องกวน", "ระบบไอน้ำ"],
    solution: "คาร์บอนกราไฟต์นำความร้อนสูงระบายความร้อนเร็วกว่าวัสดุมาตรฐาน 3 เท่า พร้อมการป้องกันออกซิเดชันเพื่อเสถียรภาพที่อุณหภูมิสูง",
    benefit: "ทำงานเสถียรที่อุณหภูมิสูงสุด 350°C",
  },
  {
    id: "vibration",
    failure: "การสึกแบบสั่นสะเทือนและความเสียหายจากการสั่น",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    cause: "การสั่นสะเทือนของปั๊ม การเยื้องศูนย์เพลา หรือการติดตั้งไม่ถูกต้องทำให้เกิดการสึกแบบสั่นระหว่างชิ้นส่วนซีล",
    symptoms: "เสียงและการสั่นผิดปกติระหว่างทำงาน รูปแบบการสึกเงาบนพื้นผิวสัมผัส การแร่องค์ประกอบ O-ring ไม่สม่ำเสมอ",
    industries: ["ปั๊มน้ำใหญ่", "อุปกรณ์เดินเรือ", "คอมเพรสเซอร์", "เครื่องจักรกระดาษ"],
    solution: "คุณสมบัติหน่วงตามธรรมชาติของคาร์บอนกราไฟต์ดูดซับการสั่นสะเทือน ช่องว่างที่เหมาะสมช่วยลดการสึกแบบสั่น",
    benefit: "ประสิทธิภาพเสถียรภายใต้การสั่นสะเทือนสูง",
  },
]

export const thApplicationConditions = [
  { industry: "ปั๊มหอยโข่งและปั๊มกระบวนการ", tempRange: "-50°C ~ 260°C", pressureRange: "≤ 20 MPa", speedRange: "≤ 25 m/s", media: "น้ำ น้ำมัน เคมี โคลน ไฮโดรคาร์บอน", phRange: "0–14 (ขึ้นกับเกรด)" },
  { industry: "เพลาใบพัดท้ายเรือและปั๊มน้ำทะเล", tempRange: "-20°C ~ 150°C", pressureRange: "≤ 10 MPa", speedRange: "≤ 15 m/s", media: "น้ำทะเล น้ำเกลือ น้ำมันหล่อลื่นเดินเรือ", phRange: "6–10" },
  { industry: "เครื่องปฏิกรณ์เคมีและเครื่องกวน", tempRange: "-50°C ~ 350°C", pressureRange: "≤ 25 MPa", speedRange: "≤ 10 m/s", media: "กรดแก่ ด่างแก่ ตัวทำละลายอินทรีย์", phRange: "0–14 (เกรดทนการกัดกร่อน)" },
  { industry: "ปั๊มหมุนเวียนโรงไฟฟ้าและปั๊มจ่ายความร้อน", tempRange: "0°C ~ 250°C", pressureRange: "≤ 16 MPa", speedRange: "≤ 20 m/s", media: "น้ำหล่อเย็น น้ำร้อน ไอน้ำ น้ำมันร้อน", phRange: "6–10" },
  { industry: "เครื่องจักรอาหารและเภสัชกรรม", tempRange: "-20°C ~ 150°C", pressureRange: "≤ 10 MPa", speedRange: "≤ 10 m/s", media: "อาหารเหลว ช็อกโกแลต ยา ของเหลว CIP", phRange: "3–11 (เกรดอาหาร)" },
  { industry: "ปั๊มโคลนเหมืองและอุปกรณ์โลหะวิทยา", tempRange: "-20°C ~ 200°C", pressureRange: "≤ 15 MPa", speedRange: "≤ 12 m/s", media: "โคลนแร่ โคลน สื่อที่มีอนุภาคของแข็ง", phRange: "4–12" },
  { industry: "ขนส่งน้ำมันและก๊าซ", tempRange: "-50°C ~ 300°C", pressureRange: "≤ 25 MPa", speedRange: "≤ 20 m/s", media: "น้ำมันดิบ ก๊าซธรรมชาติ LNG สารเคมีในแหล่งน้ำมัน", phRange: "4–12 (เกรดทนน้ำมัน)" },
  { industry: "อุปกรณ์อุตสาหกรรมทั่วไป", tempRange: "-30°C ~ 280°C", pressureRange: "≤ 15 MPa", speedRange: "≤ 20 m/s", media: "อากาศอัด ไอน้ำ ก๊าซ น้ำมันหล่อลื่น", phRange: "4–12" },
  { industry: "ปั๊มจุ่มและปั๊มน้ำเสีย", tempRange: "0°C ~ 80°C (ระยะสั้น 120°C)", pressureRange: "≤ 5 MPa", speedRange: "≤ 10 m/s", media: "น้ำสะอาด น้ำเสีย โคลน สื่อมีอนุภาค", phRange: "5–10" },
  { industry: "คอมเพรสเซอร์อากาศและอุปกรณ์นิวเมติก", tempRange: "-20°C ~ 200°C", pressureRange: "≤ 2.5 MPa", speedRange: "≤ 25 m/s", media: "อากาศอัด ไนโตรเจน แก๊สเฉื่อย แก๊สมีน้ำมัน", phRange: "6–8" },
  { industry: "อุปกรณ์ไฮดรอลิกและวาล์ว", tempRange: "-30°C ~ 150°C", pressureRange: "≤ 35 MPa", speedRange: "≤ 5 m/s", media: "น้ำมันไฮดรอลิก น้ำมันหล่อลื่น อิมัลชัน", phRange: "6–9" },
]

export const thManufacturingProcess = [
  { step: 1, title: "การคัดกรองวัตถุดิบ", description: "ซื้อคาร์บอนกราไฟต์บริสุทธิ์สูงจากซัพพลายเออร์ที่ได้รับการรับรอง ตรวจสอบความหนาแน่น ความแข็ง และความบริสุทธิ์ก่อนเข้าสู่การผลิต", details: ["ตรวจสอบความหนาแน่นและความพรุน", "ยืนยันความแข็ง", "วิเคราะห์ความบริสุทธิ์ทางเคมี", "ตรวจสอบย้อนกลับรุ่น"] },
  { step: 2, title: "การตัดเฉือนแม่นยำ", description: "ศูนย์กลึง CNC ผลิตชิ้นส่วนด้วยค่าความคลาดเคลื่อนระดับไมครอน ช่างผู้ชำนาญตรวจสอบในทุกขั้นตอนเพื่อความแม่นยำของมิติ", details: ["กลึงและกัด CNC", "ปรับเทียบเครื่องมืออัตโนมัติ", "ตรวจสอบมิติในกระบวนการ", "ควบคุมผิวสำเร็จ"] },
  { step: 3, title: "การอัดซึม", description: "เทคโนโลยีอัดซึมขั้นสูงปิดผนึกโครงสร้างรูพรุนของคาร์บอนกราไฟต์ เพิ่มความต้านทานการสึกหรอ ลดการซึมผ่าน และปรับแต่งประสิทธิภาพสำหรับสภาพการทำงานเฉพาะ", details: ["การป้องกันออกซิเดชัน", "ตัวเลือกอัดซึมเรซิน", "อัดซึมโลหะทนความร้อนสูง", "รองรับสูตรเฉพาะ"] },
  { step: 4, title: "การควบคุมคุณภาพ", description: "ทุกชิ้นส่วนผ่านการตรวจสอบ 100% รวมถึงการตรวจสอบมิติ การทดสอบแรงดัน และการประเมินคุณภาพพื้นผิวก่อนปล่อย", details: ["วัดมิติ CMM", "ทดสอบแรงดันและรั่วซึม", "วิเคราะห์ความหยาบผิว", "ตรวจสอบ外观และจุลภาค"] },
  { step: 5, title: "บรรจุภัณฑ์และจัดส่ง", description: "ผลิตภัณฑ์บรรจุแยกชิ้นด้วยวัสดุกัน腐蚀 ยึดด้วยกล่องไม้เกรดส่งออก ป้องกันความเสียหายในการขนส่งระหว่างประเทศทางไกล", details: ["บรรจุภัณฑ์กัน腐蚀", "ป้องกันแยกชิ้น", "กล่องไม้เกรดส่งออก", "เอกสารการขนส่งครบถ้วน"] },
]

export const thFactoryHighlights = [
  { value: "10+", label: "ประเทศที่ส่งออก" },
  { value: "20+", label: "พนักงาน" },
  { value: "5 ปี", label: "ประสบการณ์ส่งออก" },
]

// ============================================================
// RUSSIAN
// ============================================================

export const ruApplications = [
  {
    title: "Насосы",
    slug: "pump-industry",
    description: "Уплотнения вращающихся валов и втулки для центробежных, химических, водяных и многоступенчатых насосов. Самосмазывающиеся, не требующие обслуживания.",
    image: "pump",
  },
  {
    title: "Судостроение и морские применения",
    slug: "marine-industry",
    description: "Уплотнения гребных валов, уплотнения насосов забортной воды, рулевые подшипники. Специальная антикоррозионная пропитка для морской среды.",
    image: "ship",
  },
  {
    title: "Химическая и фармацевтическая промышленность",
    slug: "chemical-processing",
    description: "Уплотнения валов реакторов, уплотнения насосов высокого давления. Химически инертны к сильным кислотам, щелочам и органическим растворителям.",
    image: "chem",
  },
  {
    title: "Энергетика",
    slug: "power-energy",
    description: "Подшипники циркуляционных насосов, уплотнения вспомогательных насосов АЭС. Высокая термостойкость до 600°C.",
    image: "seal",
  },
  {
    title: "Пищевое и Beverage оборудование",
    slug: "food-pharma",
    description: "Подшипники смесителей шоколада, уплотнения пищевых насосов. Пропитка пищевой смолой, полностью безмасляная работа, соответствует FDA.",
    image: "seal",
  },
  {
    title: "Горнодобывающая и металлургическая промышленность",
    slug: "mining-metallurgy",
    description: "Втулки шламовых насосов, уплотнения смазки прокатных станов. Отличная износостойкость и термостойкость в суровых условиях.",
    image: "pump",
  },
  {
    title: "Нефтегазовая промышленность",
    slug: "oil-gas",
    description: "Механические уплотнения нефтяных насосов, подшипники компрессоров природного газа. Химически стабильны в углеводородных средах, соответствуют API.",
    image: "chem",
  },
  {
    title: "Общепромышленные уплотнения",
    slug: "general-sealing",
    description: "Уплотнения клапанов, компрессоров, смесителей. Гибкая обрабатываемость для нестандартных конфигураций.",
    image: "seal",
  },
]

export const ruCases = [
  {
    title: "Конвейер высокотемпературной печи — Сильный износ вала из нержавейки",
    company: "Производитель материалов для литий-ионных аккумуляторов",
    condition: "Туннельная печь при 300°C, вал конвейера 45 мм, 80 об/мин. Медные втулки + высокотемпературная смазка выходили из строя каждые 2 месяца.",
    diagnosis: "Карбонизация высокотемпературной смазки + тепловое расширение медной втулки вызвали ускоренный износ и повреждение вала.",
    solution: "Замена на custom углерод-графитовые втулки RG-15 с антиокислительной пропиткой, предназначенные для непрерывной работы 300°C+.",
    result: "6 месяцев непрерывной работы, износ втулки ~0,2 мм, вал не поврежден. Затраты на обслуживание снижены на 60%.",
  },
  {
    title: "Насос расплавленной соли — Заклинивание подшипника",
    company: "Проект солнечной тепловой электростанции",
    condition: "Насос расплавленной соли при 450°C, вал 65 мм, 1500 об/мин. Специальные сплавные подшипники часто заклинивали, средний срок службы 3 месяца.",
    diagnosis: "Несоответствие теплового расширения между сплавными подшипниками и валом привело к потере зазора и заклиниванию при рабочей температуре.",
    solution: "Специальные высокочистые углерод-графитовые подшипники с сурьмяной пропиткой, оптимизированный зазор для работы при 450°C.",
    result: "12 месяцев непрерывной работы, без заклинивания. Срок службы оборудования увеличен с 3 до 12+ месяцев.",
  },
  {
    title: "Пищевой смеситель — Жалоба на загрязнение медью",
    company: "Производитель пищевого оборудования",
    condition: "Смеситель шоколада, вал 30 мм, 200 об/мин, 80°C. Медные втулки + пищевая смазка вызвали загрязнение ионами меди и смазкой.",
    diagnosis: "Частицы износа медной втулки + миграция смазки загрязняли продукт, вызывая жалобы клиентов.",
    solution: "Замена на углерод-графитовые втулки с пропиткой смолой FDA — полностью безмасляная самосмазывающаяся конструкция.",
    result: "Ноль жалоб на загрязнение. Соответствие FDA, полностью безмасляная работа.",
  },
  {
    title: "Модернизация химического центробежного насоса — Отказ уплотнения",
    company: "Химическая группа",
    condition: "Центробежный насос, перекачивающий агрессивные химикаты, вал 50 мм, 1450 об/мин, 80-120°C. PTFE уплотнения протекали каждые 3 месяца.",
    diagnosis: "PTFE уплотнения размягчались при высокой температуре + химическое воздействие вызывало быструю деградацию и утечку.",
    solution: "Специальная углерод-графитовая механическая торцевая поверхность с химически стойкой пропиткой, в паре с SiC контртелом.",
    result: "Срок службы увеличен с 3 до 18 месяцев (улучшение в 6 раз). Годовая экономия на обслуживании ~280 000 юаней.",
  },
  {
    title: "Морской насос забортной воды — Модернизация уплотнения",
    company: "Судостроительный завод",
    condition: "Насос забортной воды, вал 60 мм, 1750 об/мин. Медные подшипники + резиновые уплотнения корродировали в морской воде, замена каждые 6 месяцев.",
    diagnosis: "Гальваническая коррозия между медным сплавом и валом в морской воде + деградация резиновых уплотнений от соленой воды.",
    solution: "Морские углерод-графитовые втулки со специальной антикоррозионной пропиткой + эластомерные уплотнения EPDM.",
    result: "2 года безотказной работы. Сертифицировано DNV. Стандартная конфигурация для этой верфи.",
  },
  {
    title: "Модернизация подшипников циркуляционного насоса электростанции",
    company: "Энергетическая группа",
    condition: "Крупный циркуляционный водяной насос, вал 120 мм, 990 об/мин, 60-95°C. Оловянно-бронзовые подшипники быстро изнашивались, ежемесячное обслуживание.",
    diagnosis: "Абразивные частицы в неочищенной циркуляционной воде ускоряли износ оловянно-бронзовых подшипников, требуя ежемесячной замены.",
    solution: "Высокотвердые углерод-графитовые подшипники с противоабразивной пропиткой, предназначенные для вод с песком/частицами.",
    result: "15 месяцев непрерывной работы. Годовое время простоя сокращено на 720 часов. Затраты на обслуживание снижены на 80%.",
  },
]

export const ruAdvantages = [
  {
    title: "Самосмазывание",
    description: "Углеродный графит обладает естественными самосмазывающимися свойствами, исключая необходимость во внешних системах смазки и значительно снижая затраты на обслуживание. Подходит для высокоскоростного вращения, сохраняя смазку даже при пуске и останове.",
    icon: "oil",
  },
  {
    title: "Высокая термостойкость",
    description: "Стабильная работа при 300°C длительно, кратковременные пики до 350°C. Специальная антиокислительная пропитка обеспечивает стабильную производительность в условиях высоких температур.",
    icon: "thermo",
  },
  {
    title: "Коррозионная стойкость",
    description: "Химически инертный углеродный графит устойчив к большинству кислот, щелочей и органических растворителей. Пропитка дополнительно повышает долговечность в агрессивных средах.",
    icon: "shield",
  },
  {
    title: "Износостойкость",
    description: "Передовая технология пропитки создает твердую, износостойкую поверхность уплотнения, значительно продлевая срок службы по сравнению с обычными материалами. Износостойкость повышена на 60-80%.",
    icon: "gear",
  },
]

export const ruFailureSolutions = [
  {
    id: "wear",
    failure: "Чрезмерный износ, короткий срок службы",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.25 3.15L17 12.23l-4-2.37z",
    cause: "Абразивные частицы в среде, недостаточная смазка или неправильный выбор марки материала.",
    symptoms: "Заметное истончение уплотнения, утечка после нескольких месяцев эксплуатации; повышенная вибрация насоса; канавки или ступенчатый износ на поверхности уплотнения.",
    industries: ["Химические насосы", "Насосы сточных вод", "Шламовые насосы", "Горное оборудование"],
    solution: "Специальная марка углеродного графита с оптимизированной пропиткой — самосмазывающаяся матрица снижает скорость износа на 60-80%.",
    benefit: "Срок службы в 3-6 раз дольше",
  },
  {
    id: "leak",
    failure: "Утечка через поверхность уплотнения",
    icon: "M3 12h2v-2H3v2zm16 0h2v-2h-2v2zM5 12l6-6v4h6v4h-6v4l-6-6z",
    cause: "Термическая деформация, колебания давления, несоосность при монтаже или ухудшение плоскостности поверхности в процессе эксплуатации.",
    symptoms: "Непрерывное просачивание по периметру уплотнения; усиление утечки после остановки/перезапуска; термические трещины или следы коробления на поверхности.",
    industries: ["Центробежные насосы", "Химические насосы", "Водяные насосы", "Нефтяные насосы"],
    solution: "Прецизионно притертая поверхность уплотнения из стабильного углеродного графита сохраняет плоскостность при термических циклах и колебаниях давления.",
    benefit: "Нулевая утечка при нормальной эксплуатации",
  },
  {
    id: "corrosion",
    failure: "Коррозия и химическое воздействие",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
    cause: "Агрессивные химические среды, атакующие структуру уплотнения, вызывающие набухание, растрескивание или растворение.",
    symptoms: "Питтинг, вздутие или размягчение поверхности уплотнения; изменение размеров, вызывающее заклинивание; проникновение среды и обесцвечивание вдоль поверхности.",
    industries: ["Химические реакторы", "Травильное оборудование", "Гальванические линии", "Фармацевтика"],
    solution: "Химически инертный углеродный графит со специализированной смоляной или металлической пропиткой, рассчитанный на конкретные химические среды.",
    benefit: "Устойчив к кислотам, щелочам и растворителям (pH 0-14)",
  },
  {
    id: "heat",
    failure: "Перегрев и термическое разрушение",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    cause: "Высокоскоростная работа без достаточного охлаждения, работа на сухую или недостаточный отвод тепла от поверхности уплотнения.",
    symptoms: "Аномально высокая температура в зоне уплотнения; следы ожога или обесцвечивание поверхности уплотнения; затвердевшие и хрупкие эластомерные уплотнения.",
    industries: ["Высокоскоростные насосы", "Компрессоры", "Мешалки", "Паровые системы"],
    solution: "Высокотеплопроводный углеродный графит рассеивает тепло в 3 раза быстрее стандартных материалов, с антиокислительной обработкой для стабильности при высоких температурах.",
    benefit: "Стабильная работа при пике 350°C",
  },
  {
    id: "vibration",
    failure: "Фреттинг-износ и вибрационное повреждение",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    cause: "Вибрация насоса, биение вала или неправильный монтаж, вызывающие фреттинг-износ между компонентами уплотнения.",
    symptoms: "Аномальный шум и вибрация при работе; полированный износ на сопрягаемых поверхностях; неравномерный износ канавки O-кольца.",
    industries: ["Крупные водяные насосы", "Морское оборудование", "Компрессоры", "Бумагоделательные машины"],
    solution: "Естественные демпфирующие свойства углеродного графита поглощают вибрацию, а оптимизированный зазор минимизирует фреттинг-износ.",
    benefit: "Стабильная работа при высокой вибрации",
  },
]

export const ruApplicationConditions = [
  { industry: "Центробежные и технологические насосы", tempRange: "-50°C ~ 260°C", pressureRange: "≤ 20 МПа", speedRange: "≤ 25 м/с", media: "Вода, масло, химикаты, шламы, углеводороды", phRange: "0–14 (зависит от марки)" },
  { industry: "Гребные валы и насосы забортной воды", tempRange: "-20°C ~ 150°C", pressureRange: "≤ 10 МПа", speedRange: "≤ 15 м/с", media: "Морская вода, рассол, судовые смазки", phRange: "6–10" },
  { industry: "Химические реакторы и мешалки", tempRange: "-50°C ~ 350°C", pressureRange: "≤ 25 МПа", speedRange: "≤ 10 м/с", media: "Сильные кислоты, щелочи, органические растворители", phRange: "0–14 (коррозионно-стойкая марка)" },
  { industry: "Циркуляционные насосы электростанций и насосы теплоснабжения", tempRange: "0°C ~ 250°C", pressureRange: "≤ 16 МПа", speedRange: "≤ 20 м/с", media: "Охлаждающая вода, горячая вода, пар, теплоноситель", phRange: "6–10" },
  { industry: "Пищевое и фармацевтическое оборудование", tempRange: "-20°C ~ 150°C", pressureRange: "≤ 10 МПа", speedRange: "≤ 10 м/с", media: "Пищевые суспензии, шоколад, лекарства, CIP-жидкости", phRange: "3–11 (пищевая марка)" },
  { industry: "Шламовые насосы и металлургическое оборудование", tempRange: "-20°C ~ 200°C", pressureRange: "≤ 15 МПа", speedRange: "≤ 12 м/с", media: "Рудный шлам, грязь, среды с твердыми частицами", phRange: "4–12" },
  { industry: "Нефтегазовый транспорт", tempRange: "-50°C ~ 300°C", pressureRange: "≤ 25 МПа", speedRange: "≤ 20 м/с", media: "Сырая нефть, природный газ, СПГ, промысловые химикаты", phRange: "4–12 (маслостойкая марка)" },
  { industry: "Общепромышленное оборудование", tempRange: "-30°C ~ 280°C", pressureRange: "≤ 15 МПа", speedRange: "≤ 20 м/с", media: "Сжатый воздух, пар, газы, смазочное масло", phRange: "4–12" },
  { industry: "Погружные и сточные насосы", tempRange: "0°C ~ 80°C (кратковременно 120°C)", pressureRange: "≤ 5 МПа", speedRange: "≤ 10 м/с", media: "Чистая вода, сточные воды, шлам, среды с частицами", phRange: "5–10" },
  { industry: "Воздушные компрессоры и пневмооборудование", tempRange: "-20°C ~ 200°C", pressureRange: "≤ 2,5 МПа", speedRange: "≤ 25 м/с", media: "Сжатый воздух, азот, инертные газы, маслосодержащие газы", phRange: "6–8" },
  { industry: "Гидрооборудование и клапаны", tempRange: "-30°C ~ 150°C", pressureRange: "≤ 35 МПа", speedRange: "≤ 5 м/с", media: "Гидравлическое масло, смазочное масло, эмульсии", phRange: "6–9" },
]

export const ruManufacturingProcess = [
  { step: 1, title: "Отбор сырья", description: "Закупка высокочистого углеродного графита у сертифицированных поставщиков. Строгий контроль плотности, твердости и чистоты перед запуском в производство.", details: ["Проверка плотности и пористости", "Контроль твердости", "Анализ химической чистоты", "Прослеживаемость партий"] },
  { step: 2, title: "Прецизионная обработка", description: "Обрабатывающие центры с ЧПУ производят компоненты с допусками на уровне микрон. Опытные операторы контролируют каждый этап для обеспечения точности размеров.", details: ["Токарная и фрезерная обработка ЧПУ", "Автоматическая калибровка инструмента", "Промежуточный контроль размеров", "Контроль чистоты поверхности"] },
  { step: 3, title: "Пропитка", description: "Передовая технология пропитки герметизирует микропористую структуру углеродного графита, повышая износостойкость, снижая проницаемость и настраивая свойства под конкретные условия эксплуатации.", details: ["Антиокислительная обработка", "Варианты смоляной пропитки", "Металлическая пропитка для высоких температур", "Поддержка пользовательских рецептур"] },
  { step: 4, title: "Контроль качества", description: "Каждый компонент проходит 100% проверку, включая контроль размеров, испытания под давлением и оценку качества поверхности перед отгрузкой.", details: ["Измерение размеров на КИМ", "Испытания под давлением и на герметичность", "Анализ шероховатости поверхности", "Визуальный и микроскопический контроль"] },
  { step: 5, title: "Упаковка и отгрузка", description: "Продукция индивидуально упаковывается в антикоррозионные материалы, фиксируется в экспортных деревянных ящиках для сохранности при международных перевозках.", details: ["Антикоррозионная упаковка", "Индивидуальная защита", "Экспортные деревянные ящики", "Полный пакет транспортных документов"] },
]

export const ruFactoryHighlights = [
  { value: "10+", label: "Стран экспорта" },
  { value: "20+", label: "Сотрудников" },
  { value: "5 лет", label: "Опыта экспорта" },
]

// ============================================================
// JAPANESE
// ============================================================

export const jaApplications = [
  {
    title: "ポンプ",
    slug: "pump-industry",
    description: "遠心ポンプ、化学ポンプ、水ポンプ、多段ポンプ用の回転軸シールとブッシング。自己潤滑性があり、メンテナンスフリー。",
    image: "pump",
  },
  {
    title: "船舶・海洋",
    slug: "marine-industry",
    description: "プロペラ船尾管シール、海水冷却ポンプシール、舵軸受。海水環境向け特殊防食用含浸処理。",
    image: "ship",
  },
  {
    title: "化学・医薬品",
    slug: "chemical-processing",
    description: "反応槽撹拌軸シール、高圧プロセスポンプシール。強酸、強アルカリ、有機溶剤に対して化学的に不活性。",
    image: "chem",
  },
  {
    title: "電力・エネルギー",
    slug: "power-energy",
    description: "循環水ポンプ軸受、原子力補助ポンプシール、タービン油ポンプブッシング。600°Cまでの高温対応。",
    image: "seal",
  },
  {
    title: "食品・飲料機械",
    slug: "food-pharma",
    description: "チョコレートミキサー軸受、食品搬送ポンプシール。食品グレード樹脂含浸、完全オイルフリー、FDA準拠。",
    image: "seal",
  },
  {
    title: "鉱業・冶金",
    slug: "mining-metallurgy",
    description: "スラリーポンプブッシング、圧延機潤滑シール。過酷環境での優れた耐摩耗性と耐熱衝撃性。",
    image: "pump",
  },
  {
    title: "石油・ガス",
    slug: "oil-gas",
    description: "油ポンプメカニカルシール、天然ガス圧縮機軸受。炭化水素媒体中で化学的に安定、API規格準拠。",
    image: "chem",
  },
  {
    title: "一般産業用シール",
    slug: "general-sealing",
    description: "バルブステムシール、圧縮機シール、ミキサーシール。非標準構成に対応する柔軟な機械加工性。",
    image: "seal",
  },
]

export const jaCases = [
  {
    title: "高温オーブンコンベヤ — ステンレス軸の深刻な摩耗",
    company: "リチウム電池材料メーカー",
    condition: "トンネルオーブン300°C、コンベヤ軸45mm、80rpm。銅ブッシング＋高温グリースが2ヶ月ごとに故障。",
    diagnosis: "高温グリースの炭化＋銅ブッシングの熱膨張により加速摩耗と軸損傷が発生。",
    solution: "耐酸化含浸処理を施したカスタムRG-15カーボングラファイトブッシングに交換。300°C+連続運転対応。",
    result: "6ヶ月連続運転、ブッシング摩耗〜0.2mm、軸は無損傷。メンテナンスコスト60%削減。",
  },
  {
    title: "高温溶融塩ポンプ — 軸受固着",
    company: "太陽熱発電プロジェクト",
    condition: "450°Cの溶融塩ポンプ、軸65mm、1500rpm。特殊合金軸受が頻繁に固着、平均寿命3ヶ月。",
    diagnosis: "合金軸受と軸の熱膨張差により運転温度でクリアランス消失、固着発生。",
    solution: "高純度カーボングラファイト製カスタム軸受、アンチモン含浸、450°C運転に最適化されたクリアランス。",
    result: "12ヶ月連続運転、固着なし。装置稼働時間が3ヶ月から12ヶ月以上に延長。",
  },
  {
    title: "食品ミキサー — 銅汚染の苦情",
    company: "食品機械メーカー",
    condition: "チョコレートミキサー、軸30mm、200rpm、80°C。銅ブッシング＋食品グレードグリースが銅イオンとグリース汚染を発生。",
    diagnosis: "銅ブッシングの摩耗粉＋グリースの移行がチョコレート製品を汚染し、顧客クレーム発生。",
    solution: "FDAグレード樹脂含浸カーボングラファイトブッシングに交換 — 完全オイルフリー自己潤滑設計。",
    result: "汚染クレームゼロ。FDA準拠、完全オイルフリー運転。",
  },
  {
    title: "化学遠心ポンプ改造 — シール不良",
    company: "化学グループ",
    condition: "腐食性化学品を取り扱う遠心ポンプ、軸50mm、1450rpm、80-120°C。PTFEシールが3ヶ月ごとに漏洩。",
    diagnosis: "高温でのPTFE軟化＋化学的攻撃により急速に劣化、シール面から漏洩。",
    solution: "耐薬品性樹脂含浸カスタムカーボングラファイトメカニカルシール面、SiC相手面と組み合わせ。",
    result: "寿命が3ヶ月から18ヶ月に延長（6倍改善）。年間保守費約28万元削減。",
  },
  {
    title: "船舶用海水ポンプ — シールアップグレード",
    company: "造船メーカー",
    condition: "海水ポンプ、軸60mm、1750rpm。銅軸受＋ゴムシールが海水中で腐食、6ヶ月ごとに交換。",
    diagnosis: "海水中での銅合金と軸間のガルバニック腐食＋塩水によるゴムシール劣化。",
    solution: "特殊防食含浸処理の船舶グレードカーボングラファイトブッシング＋EPDMエラストマーシール。",
    result: "2年間メンテナンスフリー運転。DNV認証取得。この造船所の標準構成に採用。",
  },
  {
    title: "発電所循環水ポンプ — 軸受アップグレード",
    company: "電力グループ",
    condition: "大型循環水ポンプ、軸120mm、990rpm、60-95°C。錫青銅軸受が急速摩耗、毎月メンテナンス。",
    diagnosis: "未処理循環水中の研磨粒子が錫青銅軸受の摩耗を加速、毎月交換が必要。",
    solution: "耐摩耗性含浸処理を施した高硬度カーボングラファイト軸受、砂・粒子含有水条件向け設計。",
    result: "15ヶ月連続運転。年間ダウンタイム720時間削減。保守費80%削減。",
  },
]

export const jaAdvantages = [
  {
    title: "自己潤滑性",
    description: "カーボングラファイトは天然の自己潤滑特性を持ち、外部潤滑システムが不要で保守コストを大幅に削減。高速回転に適し、起動時と停止時でも潤滑を維持。",
    icon: "oil",
  },
  {
    title: "耐高温性",
    description: "長期300°C、短期ピーク350°Cで安定運転。特殊な耐酸化含浸処理により高温環境でも安定した性能を確保。",
    icon: "thermo",
  },
  {
    title: "耐食性",
    description: "化学的に不活性なカーボングラファイトはほとんどの酸、アルカリ、有機溶剤に耐性。含浸処理により強腐食性媒体中での耐久性がさらに向上。",
    icon: "shield",
  },
  {
    title: "耐摩耗性",
    description: "高度な含浸技術により硬く耐久性のあるシール表面を形成、通常材料と比較して寿命を大幅に延長。耐摩耗性が60-80%向上。",
    icon: "gear",
  },
]

export const jaFailureSolutions = [
  {
    id: "wear",
    failure: "過度の摩耗、短寿命",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.25 3.15L17 12.23l-4-2.37z",
    cause: "媒体中の研磨粒子、不十分な潤滑、または不適切な材料グレードの選択。",
    symptoms: "シールの顕著な薄肉化、数ヶ月の運転で漏れ発生。ポンプ振動の増加。シール面の溝状または階段状の摩耗。",
    industries: ["化学ポンプ", "廃水ポンプ", "スラリーポンプ", "鉱山機器"],
    solution: "最適化された含浸処理を施したカスタムカーボングラファイトグレード — 自己潤滑マトリックスが摩耗率を60-80%低減。",
    benefit: "寿命が3-6倍に延長",
  },
  {
    id: "leak",
    failure: "シール面からの漏れ",
    icon: "M3 12h2v-2H3v2zm16 0h2v-2h-2v2zM5 12l6-6v4h6v4h-6v4l-6-6z",
    cause: "熱変形、圧力変動、取り付け時の芯ずれ、または運転中のシール面平面度の低下。",
    symptoms: "シール周囲からの継続的な浸み出し。停止/再起動後の漏れ増加。シール面の熱クラックまたは反り跡。",
    industries: ["遠心ポンプ", "化学ポンプ", "水ポンプ", "油ポンプ"],
    solution: "安定したカーボングラファイト材による精密ラップ仕上げシール面が熱サイクルと圧力変動下でも平面度を維持。",
    benefit: "通常運転時のゼロ漏れ",
  },
  {
    id: "corrosion",
    failure: "腐食・化学的攻撃",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
    cause: "腐食性化学媒体がシール構造を攻撃し、膨潤、割れ、または溶解を引き起こす。",
    symptoms: "シール表面のピッチング、発泡、軟化。寸法変化による固着。シール面に沿った媒体浸透と変色。",
    industries: ["化学反応装置", "酸洗い設備", "めっきライン", "医薬品"],
    solution: "特定の化学環境に適合した特殊樹脂または金属含浸処理を施した化学的に不活性なカーボングラファイト。",
    benefit: "酸・アルカリ・溶剤に耐性（pH 0-14）",
  },
  {
    id: "heat",
    failure: "過熱・熱破壊",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    cause: "十分な冷却のない高速運転、乾式運転、またはシール面での不十分な放熱。",
    symptoms: "シール部の異常な高温。シール面の焼け跡や変色。エラストマーシールの硬化・脆化。",
    industries: ["高速ポンプ", "圧縮機", "撹拌機", "蒸気システム"],
    solution: "高熱伝導率カーボングラファイトが標準材料の3倍の速度で熱を放散。耐酸化処理による高温安定性。",
    benefit: "ピーク350°Cでの安定運転",
  },
  {
    id: "vibration",
    failure: "フレッチング摩耗と振動損傷",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    cause: "ポンプ振動、軸振れ、または不適切な取付けによるシール構成部品間のフレッチング摩耗。",
    symptoms: "運転中の異常な騒音と振動。相手面の磨き状摩耗。Oリング溝の不均一な摩耗。",
    industries: ["大型水ポンプ", "船舶機器", "圧縮機", "製紙機械"],
    solution: "カーボングラファイトの天然ダンピング特性が振動を吸収、最適化されたクリアランスがフレッチング摩耗を低減。",
    benefit: "高振動下でも安定した性能",
  },
]

export const jaApplicationConditions = [
  { industry: "遠心ポンプ・プロセスポンプ", tempRange: "-50°C ~ 260°C", pressureRange: "≤ 20 MPa", speedRange: "≤ 25 m/s", media: "水、油、化学品、スラリー、炭化水素", phRange: "0–14（グレードによる）" },
  { industry: "船舶船尾管・海水ポンプ", tempRange: "-20°C ~ 150°C", pressureRange: "≤ 10 MPa", speedRange: "≤ 15 m/s", media: "海水、ブライン、船用潤滑油", phRange: "6–10" },
  { industry: "化学反応装置・撹拌機", tempRange: "-50°C ~ 350°C", pressureRange: "≤ 25 MPa", speedRange: "≤ 10 m/s", media: "強酸、強アルカリ、有機溶剤", phRange: "0–14（耐食グレード）" },
  { industry: "発電所循環水ポンプ・熱供給ポンプ", tempRange: "0°C ~ 250°C", pressureRange: "≤ 16 MPa", speedRange: "≤ 20 m/s", media: "冷却水、温水、蒸気、熱媒油", phRange: "6–10" },
  { industry: "食品・医薬品機械", tempRange: "-20°C ~ 150°C", pressureRange: "≤ 10 MPa", speedRange: "≤ 10 m/s", media: "食品スラリー、チョコレート、医薬品、CIP液", phRange: "3–11（食品グレード）" },
  { industry: "鉱山スラリーポンプ・冶金設備", tempRange: "-20°C ~ 200°C", pressureRange: "≤ 15 MPa", speedRange: "≤ 12 m/s", media: "鉱石スラリー、泥、固形粒子含有媒体", phRange: "4–12" },
  { industry: "石油・ガス輸送", tempRange: "-50°C ~ 300°C", pressureRange: "≤ 25 MPa", speedRange: "≤ 20 m/s", media: "原油、天然ガス、LNG、油田薬品", phRange: "4–12（耐油グレード）" },
  { industry: "一般産業機器", tempRange: "-30°C ~ 280°C", pressureRange: "≤ 15 MPa", speedRange: "≤ 20 m/s", media: "圧縮空気、蒸気、ガス、潤滑油", phRange: "4–12" },
  { industry: "水中ポンプ・排水ポンプ", tempRange: "0°C ~ 80°C（短期120°C）", pressureRange: "≤ 5 MPa", speedRange: "≤ 10 m/s", media: "清水、排水、汚泥、粒子含有媒体", phRange: "5–10" },
  { industry: "空気圧縮機・空圧機器", tempRange: "-20°C ~ 200°C", pressureRange: "≤ 2.5 MPa", speedRange: "≤ 25 m/s", media: "圧縮空気、窒素、不活性ガス、含油ガス", phRange: "6–8" },
  { industry: "油圧機器・バルブ", tempRange: "-30°C ~ 150°C", pressureRange: "≤ 35 MPa", speedRange: "≤ 5 m/s", media: "作動油、潤滑油、エマルジョン", phRange: "6–9" },
]

export const jaManufacturingProcess = [
  { step: 1, title: "原材料選別", description: "認定サプライヤーから高純度カーボングラファイトを調達。生産投入前に密度、硬度、純度を厳格に検査。", details: ["密度・気孔率検査", "硬度検証", "化学成分純度分析", "ロットトレーサビリティ"] },
  { step: 2, title: "精密加工", description: "CNC加工センターがミクロン公差で部品を製造。経験豊富なオペレーターが各工程を監視し、寸法精度を確保。", details: ["CNC旋盤・フライス加工", "自動ツール校正", "工程内寸法検査", "表面仕上げ管理"] },
  { step: 3, title: "含浸処理", description: "先進の含浸技術がカーボングラファイトの微細孔構造を封止、耐摩耗性を向上、透過性を低減し、特定の運転条件に合わせて性能をカスタマイズ。", details: ["耐酸化処理", "樹脂含浸オプション", "高温用金属含浸", "カスタム処方対応"] },
  { step: 4, title: "品質管理", description: "出庫前に各コンポーネントを100%検査。寸法検証、圧力テスト、表面品質評価を実施。", details: ["CMM寸法測定", "圧力・漏れテスト", "表面粗さ分析", "外観・顕微鏡検査"] },
  { step: 5, title: "包装・出荷", description: "製品を防錆材で個別包装、輸出用木箱で固定し、長距離国際輸送での完全性を確保。", details: ["防錆包装", "個別保護", "輸出用木箱", "グローバル輸送書類完備"] },
]

export const jaFactoryHighlights = [
  { value: "10+", label: "輸出国" },
  { value: "20+", label: "従業員数" },
  { value: "5年", label: "輸出経験" },
]

// ============================================================
// KOREAN
// ============================================================

export const koApplications = [
  {
    title: "펌프",
    slug: "pump-industry",
    description: "원심펌프, 화학펌프, 수중펌프, 다단펌프용 회전축 씰 및 부싱. 자체 윤활, 무유지보수.",
    image: "pump",
  },
  {
    title: "조선 및 해양",
    slug: "marine-industry",
    description: "프로펠러 선미관 씰, 해수 냉각펌프 씰, 러더 베어링. 해수 환경용 특수 내식 함침 처리.",
    image: "ship",
  },
  {
    title: "화학 및 제약",
    slug: "chemical-processing",
    description: "반응기 교반축 씰, 고압 공정펌프 씰. 강산, 강알칼리, 유기용제에 대해 화학적 불활성.",
    image: "chem",
  },
  {
    title: "전력 및 에너지",
    slug: "power-energy",
    description: "순환수펌프 베어링, 원자력 보조펌프 씰, 터빈 오일펌프 부싱. 최대 600°C까지 고온 대응.",
    image: "seal",
  },
  {
    title: "식품 및 음료 기계",
    slug: "food-pharma",
    description: "초콜릿 믹서 베어링, 식품 이송펌프 씰. 식품등급 수지 함침, 완전 무오일, FDA 적합.",
    image: "seal",
  },
  {
    title: "광업 및 제련",
    slug: "mining-metallurgy",
    description: "슬러리펌프 부싱, 압연기 윤활 씰. 열악한 환경에서 탁월한 내마모성 및 내열충격성.",
    image: "pump",
  },
  {
    title: "석유 및 가스",
    slug: "oil-gas",
    description: "오일펌프 기계식 씰, 천연가스 압축기 베어링. 탄화수소 매체에서 화학적 안정성, API 표준 충족.",
    image: "chem",
  },
  {
    title: "일반 산업용 씰링",
    slug: "general-sealing",
    description: "밸브 스템 씰, 압축기 씰, 믹서 씰. 비표준 형상에 대응하는 유연한 가공성.",
    image: "seal",
  },
]

export const koCases = [
  {
    title: "고온 오븐 컨베이어 — 스테인리스 축 심각한 마모",
    company: "리튬 배터리 재료 제조업체",
    condition: "터널 오븐 300°C, 컨베이어 축 45mm, 80rpm. 황동 부싱 + 고온 그리스 2개월마다 고장.",
    diagnosis: "고온 그리스 탄화 + 황동 부싱 열팽창으로 가속 마모 및 축 손상 발생.",
    solution: "내산화 함침 처리된 맞춤형 RG-15 카본 그라파이트 부싱으로 교체. 300°C+ 연속 운전 설계.",
    result: "6개월 연속 운전, 부싱 마모 ~0.2mm, 축 손상 없음. 유지보수 비용 60% 절감.",
  },
  {
    title: "고온 용융염 펌프 — 베어링 고착",
    company: "태양열 발전 프로젝트",
    condition: "450°C 용융염 펌프, 축 65mm, 1500rpm. 특수 합금 베어링 빈번한 고착, 평균 수명 3개월.",
    diagnosis: "합금 베어링과 축 간 열팽창 차이로 운전 온도에서 간극 소실 및 고착 발생.",
    solution: "고순도 카본 그라파이트 맞춤형 베어링, 안티몬 함침, 450°C 운전에 최적화된 간극.",
    result: "12개월 연속 운전, 고착 없음. 장비 가동 시간 3개월에서 12개월 이상으로 연장.",
  },
  {
    title: "식품 믹서 — 구리 오염 민원",
    company: "식품 기계 제조업체",
    condition: "초콜릿 믹서, 축 30mm, 200rpm, 80°C. 황동 부싱 + 식품급 그리스가 구리 이온 및 그리스 오염 유발.",
    diagnosis: "황동 부싱 마모 입자 + 그리스 이동이 초콜릿 제품 오염시켜 고객 민원 발생.",
    solution: "FDA 등급 수지 함침 카본 그라파이트 부싱으로 교체 — 완전 무오일 자체 윤활 설계.",
    result: "오염 민원 제로. FDA 적합, 완전 무오일 운전.",
  },
  {
    title: "화학 원심펌프 개조 — 씰 불량",
    company: "화학 그룹",
    condition: "부식성 화학물질 취급 원심펌프, 축 50mm, 1450rpm, 80-120°C. PTFE 씰 3개월마다 누설.",
    diagnosis: "고온에서 PTFE 연화 + 화학적 공격으로 급속 열화 및 시일면 누설 발생.",
    solution: "내약품성 수지 함침 맞춤형 카본 그라파이트 기계식 씰면, SiC 상대면과 조합.",
    result: "수명 3개월에서 18개월로 연장 (6배 개선). 연간 유지보수비 약 28만 위안 절감.",
  },
  {
    title: "선박용 해수펌프 — 씰 업그레이드",
    company: "조선소",
    condition: "해수펌프, 축 60mm, 1750rpm. 황동 베어링 + 고무 씰 해수에서 부식, 6개월마다 교체.",
    diagnosis: "해수 중 황동 합금과 축 간 갈바닉 부식 + 염수 노출에 의한 고무 씰 열화.",
    solution: "특수 내식 함침 처리 선박용 카본 그라파이트 부싱 + EPDM 엘라스토머 씰.",
    result: "2년 무유지보수 운전. DNV 인증. 이 조선소의 표준 구성으로 채택.",
  },
  {
    title: "발전소 순환수펌프 — 베어링 업그레이드",
    company: "전력 그룹",
    condition: "대형 순환수펌프, 축 120mm, 990rpm, 60-95°C. 주석 청동 베어링 급속 마모, 매월 유지보수.",
    diagnosis: "미처리 순환수 중 연마 입자가 주석 청동 베어링 마모 가속, 매월 교체 필요.",
    solution: "내마모 함침 처리된 고경도 카본 그라파이트 베어링, 모래/입자 함유 수 조건용 설계.",
    result: "15개월 연속 운전. 연간 다운타임 720시간 절감. 유지보수 비용 80% 절감.",
  },
]

export const koAdvantages = [
  {
    title: "자체 윤활",
    description: "카본 그라파이트는 천연 자체 윤활 특성을 가지고 있어 외부 윤활 시스템이 필요 없으며 유지보수 비용을 크게 절감합니다. 고속 회전에 적합하며 기동 및 정지 시에도 윤활을 유지합니다.",
    icon: "oil",
  },
  {
    title: "내고온성",
    description: "장기 300°C, 단기 피크 350°C에서 안정적으로 작동합니다. 특수 내산화 함침 처리로 고온 환경에서도 안정적인 성능을 보장합니다.",
    icon: "thermo",
  },
  {
    title: "내식성",
    description: "화학적으로 불활성인 카본 그라파이트는 대부분의 산, 알칼리 및 유기 용제에 내성이 있습니다. 함침 처리를 통해 강부식성 매체에서 내구성이 더욱 향상됩니다.",
    icon: "shield",
  },
  {
    title: "내마모성",
    description: "첨단 함침 기술이 단단하고 내구성 있는 씰 표면을 형성하여 일반 재료에 비해 수명을 크게 연장합니다. 내마모성이 60-80% 향상됩니다.",
    icon: "gear",
  },
]

export const koFailureSolutions = [
  {
    id: "wear",
    failure: "과도한 마모, 짧은 수명",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.25 3.15L17 12.23l-4-2.37z",
    cause: "매체 내 연마 입자, 불충분한 윤활, 또는 부적절한 재료 등급 선택.",
    symptoms: "씰의 현저한 박화, 수개월 운전 후 누설; 펌프 진동 증가; 씰면의 홈 또는 계단형 마모 패턴.",
    industries: ["화학 펌프", "폐수 펌프", "슬러리 펌프", "광산 장비"],
    solution: "최적화된 함침 처리 맞춤형 카본 그라파이트 등급 — 자체 윤활 매트릭스가 마모율 60-80% 감소.",
    benefit: "수명 3-6배 연장",
  },
  {
    id: "leak",
    failure: "씰면 누설",
    icon: "M3 12h2v-2H3v2zm16 0h2v-2h-2v2zM5 12l6-6v4h6v4h-6v4l-6-6z",
    cause: "열변형, 압력 변동, 설치 시 중심 이탈, 또는 운전 중 시일면 평탄도 저하.",
    symptoms: "씰 주변 지속적인 스며나옴; 정지/재시동 후 누설 증가; 씰면 열균열 또는 휨 자국.",
    industries: ["원심 펌프", "화학 펌프", "수중 펌프", "오일 펌프"],
    solution: "안정적인 카본 그라파이트 소재의 정밀 랩 가공 시일면이 열사이클과 압력 변동에서 평탄도 유지.",
    benefit: "정상 운전 시 제로 누설",
  },
  {
    id: "corrosion",
    failure: "부식 및 화학적 공격",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
    cause: "부식성 화학 매체가 씰 구조를 공격하여 팽윤, 균열 또는 용해 유발.",
    symptoms: "씰 표면의 피팅, 블리스터링 또는 연화; 치수 변화로 인한 고착; 씰면을 따른 매체 침투 및 변색.",
    industries: ["화학 반응기", "산세 장비", "도금 라인", "제약"],
    solution: "특정 화학 환경에 정합된 특수 수지 또는 금속 함침 처리된 화학적 불활성 카본 그라파이트.",
    benefit: "산, 알칼리 및 용제에 내성 (pH 0-14)",
  },
  {
    id: "heat",
    failure: "과열 및 열적 파괴",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    cause: "충분한 냉각 없는 고속 운전, 건조 운전, 또는 시일면의 불충분한 방열.",
    symptoms: "씰 영역의 비정상적 고온; 씰면의 화상 자국 또는 변색; 엘라스토머 씰의 경화 및 취화.",
    industries: ["고속 펌프", "압축기", "교반기", "증기 시스템"],
    solution: "고열전도율 카본 그라파이트가 표준 재료보다 3배 빠르게 열 발산, 내산화 처리로 고온 안정성 확보.",
    benefit: "피크 350°C에서 안정적 운전",
  },
  {
    id: "vibration",
    failure: "프레팅 마모 및 진동 손상",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    cause: "펌프 진동, 축 흔들림, 또는 부적절한 설치로 인한 씰 구성품 간 프레팅 마모.",
    symptoms: "운전 중 비정상적 소음 및 진동; 상대면의 광택 마모 패턴; O링 그루브의 불균일 마모.",
    industries: ["대형 수중 펌프", "선박 장비", "압축기", "제지 기계"],
    solution: "카본 그라파이트의 천연 감쇠 특성이 진동 흡수, 최적화된 간극이 프레팅 마모 최소화.",
    benefit: "고진동 환경에서 안정적 성능",
  },
]

export const koApplicationConditions = [
  { industry: "원심펌프 및 공정펌프", tempRange: "-50°C ~ 260°C", pressureRange: "≤ 20 MPa", speedRange: "≤ 25 m/s", media: "물, 오일, 화학약품, 슬러리, 탄화수소", phRange: "0–14 (등급에 따라 다름)" },
  { industry: "선박 선미관 및 해수펌프", tempRange: "-20°C ~ 150°C", pressureRange: "≤ 10 MPa", speedRange: "≤ 15 m/s", media: "해수, 염수, 선박용 윤활유", phRange: "6–10" },
  { industry: "화학 반응기 및 교반기", tempRange: "-50°C ~ 350°C", pressureRange: "≤ 25 MPa", speedRange: "≤ 10 m/s", media: "강산, 강알칼리, 유기용제", phRange: "0–14 (내식 등급)" },
  { industry: "발전소 순환수펌프 및 열공급펌프", tempRange: "0°C ~ 250°C", pressureRange: "≤ 16 MPa", speedRange: "≤ 20 m/s", media: "냉각수, 온수, 증기, 열매체유", phRange: "6–10" },
  { industry: "식품 및 의약품 기계", tempRange: "-20°C ~ 150°C", pressureRange: "≤ 10 MPa", speedRange: "≤ 10 m/s", media: "식품 슬러리, 초콜릿, 의약품, CIP 세정액", phRange: "3–11 (식품 등급)" },
  { industry: "광산 슬러리펌프 및 제련 설비", tempRange: "-20°C ~ 200°C", pressureRange: "≤ 15 MPa", speedRange: "≤ 12 m/s", media: "광석 슬러리, 진흙, 고체 입자 함유 매체", phRange: "4–12" },
  { industry: "석유 및 가스 수송", tempRange: "-50°C ~ 300°C", pressureRange: "≤ 25 MPa", speedRange: "≤ 20 m/s", media: "원유, 천연가스, LNG, 유전 화학약품", phRange: "4–12 (내유 등급)" },
  { industry: "일반 산업 설비", tempRange: "-30°C ~ 280°C", pressureRange: "≤ 15 MPa", speedRange: "≤ 20 m/s", media: "압축공기, 증기, 가스, 윤활유", phRange: "4–12" },
  { industry: "수중펌프 및 폐수펌프", tempRange: "0°C ~ 80°C (단기 120°C)", pressureRange: "≤ 5 MPa", speedRange: "≤ 10 m/s", media: "청수, 폐수, 슬러지, 입자 함유 매체", phRange: "5–10" },
  { industry: "공기 압축기 및 공압 장비", tempRange: "-20°C ~ 200°C", pressureRange: "≤ 2.5 MPa", speedRange: "≤ 25 m/s", media: "압축공기, 질소, 불활성 가스, 함유 가스", phRange: "6–8" },
  { industry: "유압 장비 및 밸브", tempRange: "-30°C ~ 150°C", pressureRange: "≤ 35 MPa", speedRange: "≤ 5 m/s", media: "작동유, 윤활유, 유제", phRange: "6–9" },
]

export const koManufacturingProcess = [
  { step: 1, title: "원자재 선별", description: "인증된 공급업체로부터 고순도 카본 그라파이트 조달. 생산 투입 전 밀도, 경도, 순도 엄격 검사.", details: ["밀도 및 기공률 검사", "경도 확인", "화학 성분 순도 분석", "로트 추적 가능"] },
  { step: 2, title: "정밀 가공", description: "CNC 가공센터가 미크론 공차로 부품 생산. 숙련된 작업자가 각 공정을 모니터링하여 치수 정밀도 확보.", details: ["CNC 선반 및 밀링", "자동 공구 교정", "공정 내 치수 검사", "표면 마감 관리"] },
  { step: 3, title: "함침 처리", description: "첨단 함침 기술이 카본 그라파이트의 미세 기공 구조를 밀봉, 내마모성 향상, 투과성 감소, 특정 운전 조건에 맞게 성능 맞춤화.", details: ["내산화 처리", "수지 함침 옵션", "고온용 금속 함침", "맞춤 배합 지원"] },
  { step: 4, title: "품질 관리", description: "출고 전 각 부품 100% 전수 검사. 치수 검증, 압력 테스트, 표면 품질 평가 포함.", details: ["CMM 치수 측정", "압력 및 누설 테스트", "표면 거칠기 분석", "육안 및 미세 검사"] },
  { step: 5, title: "포장 및 출하", description: "제품을 방식재료로 개별 포장, 수출용 목상자에 고정하여 장거리 국제 운송 중 온전함 보장.", details: ["방식 포장", "개별 보호", "수출용 목상자", "글로벌 운송 서류 완비"] },
]

export const koFactoryHighlights = [
  { value: "10+", label: "수출 국가" },
  { value: "20+", label: "직원 수" },
  { value: "5년", label: "수출 경험" },
]

// ============================================================
// LOCALE MAPS
// ============================================================

export const applicationsByLocale = { zh: applications, en: enApplications, vi: viApplications, th: thApplications, ru: ruApplications, ja: jaApplications, ko: koApplications }
export const casesByLocale = { zh: cases, en: enCases, vi: viCases, th: thCases, ru: ruCases, ja: jaCases, ko: koCases }
export const advantagesByLocale = { zh: advantages, en: enAdvantages, vi: viAdvantages, th: thAdvantages, ru: ruAdvantages, ja: jaAdvantages, ko: koAdvantages }
export const failureSolutionsByLocale = { zh: failureSolutions, en: enFailureSolutions, vi: viFailureSolutions, th: thFailureSolutions, ru: ruFailureSolutions, ja: jaFailureSolutions, ko: koFailureSolutions }
export const applicationConditionsByLocale = { zh: applicationConditions, en: enApplicationConditions, vi: viApplicationConditions, th: thApplicationConditions, ru: ruApplicationConditions, ja: jaApplicationConditions, ko: koApplicationConditions }
export const manufacturingProcessByLocale = { zh: manufacturingProcess, en: manufacturingProcess, vi: viManufacturingProcess, th: thManufacturingProcess, ru: ruManufacturingProcess, ja: jaManufacturingProcess, ko: koManufacturingProcess }
export const factoryHighlightsByLocale = { zh: factoryHighlights, en: enFactoryHighlights, vi: viFactoryHighlights, th: thFactoryHighlights, ru: ruFactoryHighlights, ja: jaFactoryHighlights, ko: koFactoryHighlights }
