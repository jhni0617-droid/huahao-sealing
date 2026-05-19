import type { CoreTable, FAQCategory, Formula } from "./faq-data"
import { coreTables, faqCategories, formulas } from "./faq-data"
import { enCoreTables, enFaqCategories, enFormulas } from "./faq-data-en"

// ============================================================
// VIETNAMESE (vi)
// ============================================================

export const viCoreTables: CoreTable[] = [
  {
    id: "impregnation-selection",
    title: "Bảng tra nhanh chọn tẩm",
    description: "Chọn loại tẩm phù hợp dựa trên môi trường làm việc và nhiệt độ",
    headers: ["Loại tẩm", "Dải nhiệt độ", "Chống ăn mòn", "Môi trường phù hợp", "Ứng dụng điển hình"],
    rows: [
      ["Tẩm nhựa Phenolic", "-50°C ~ +200°C", "Tốt", "Nước, dầu, axit/kiềm nhẹ", "Bơm thông dụng, bơm nước sạch"],
      ["Tẩm nhựa Furan", "-50°C ~ +250°C", "Xuất sắc", "Axit mạnh, kiềm mạnh, dung môi hữu cơ", "Thiết bị phản ứng hóa học, thiết bị tẩy rửa"],
      ["Tẩm nhựa Epoxy", "-50°C ~ +180°C", "Tốt", "Nước, dầu, dung dịch kiềm", "Máy thực phẩm, thiết bị dược phẩm"],
      ["Tẩm kim loại Antimon", "-100°C ~ +450°C", "Trung bình", "Dầu nhiệt độ cao, hơi nước", "Bơm nhiệt độ cao, phớt tua bin"],
      ["Tẩm hợp kim Babit", "-100°C ~ +350°C", "Trung bình", "Dầu nhiệt độ cao, tải nặng", "Bạc đạn chịu tải nặng, ổ bi lớn"],
      ["Xử lý cacbon hóa (Carbon tinh khiết)", "-200°C ~ +600°C", "Xuất sắc", "Hầu hết môi trường (kể cả chân không)", "Lò nhiệt độ cao, thiết bị bán dẫn"],
      ["Tẩm PTFE", "-100°C ~ +250°C", "Xuất sắc", "Môi trường ăn mòn mạnh, thực phẩm", "Dược phẩm, hóa chất, thực phẩm"],
    ],
  },
  {
    id: "sleeve-clearance",
    title: "Bảng tính khe hở tiêu chuẩn bạc lót",
    description: "Giá trị khe hở tham khảo giữa bạc than chì và trục thép ở các đường kính và tốc độ khác nhau",
    headers: ["Đường kính trục (mm)", "Tốc độ < 500 v/p", "Tốc độ 500~1500 v/p", "Tốc độ 1500~3000 v/p", "Tốc độ > 3000 v/p"],
    rows: [
      ["10 ~ 25", "0,08 ~ 0,12 mm", "0,10 ~ 0,15 mm", "0,15 ~ 0,20 mm", "0,20 ~ 0,30 mm"],
      ["25 ~ 50", "0,10 ~ 0,15 mm", "0,15 ~ 0,20 mm", "0,20 ~ 0,30 mm", "0,30 ~ 0,40 mm"],
      ["50 ~ 80", "0,12 ~ 0,18 mm", "0,18 ~ 0,25 mm", "0,25 ~ 0,35 mm", "0,35 ~ 0,50 mm"],
      ["80 ~ 120", "0,15 ~ 0,22 mm", "0,22 ~ 0,30 mm", "0,30 ~ 0,42 mm", "0,42 ~ 0,60 mm"],
      ["120 ~ 200", "0,18 ~ 0,28 mm", "0,25 ~ 0,38 mm", "0,35 ~ 0,50 mm", "0,50 ~ 0,70 mm"],
    ],
  },
  {
    id: "material-comparison",
    title: "Bảng so sánh tính năng vật liệu than chì",
    description: "So sánh tính chất cơ lý của vật liệu than chì carbon theo quy trình tạo hình",
    headers: ["Chỉ tiêu", "Than chì ép khuôn", "Than chì ép đẳng tĩnh", "Than chì hạt mịn", "Than chì hạt thô", "Than chì độ tinh khiết cao"],
    rows: [
      ["Khối lượng riêng (g/cm³)", "1,70 ~ 1,80", "1,78 ~ 1,90", "1,65 ~ 1,75", "1,55 ~ 1,65", "1,70 ~ 1,85"],
      ["Cường độ nén (MPa)", "≥ 180", "≥ 200", "≥ 140", "≥ 100", "≥ 160"],
      ["Cường độ uốn (MPa)", "≥ 60", "≥ 70", "≥ 45", "≥ 35", "≥ 55"],
      ["Độ cứng Shore (HS)", "60 ~ 80", "65 ~ 85", "50 ~ 65", "40 ~ 55", "55 ~ 75"],
      ["Độ xốp (%)", "8 ~ 15", "5 ~ 12", "12 ~ 18", "15 ~ 22", "10 ~ 15"],
      ["Nhiệt độ tối đa (°C)", "400", "500", "350", "300", "600"],
      ["Ứng dụng điển hình", "Vòng đệm, bạc lót", "Phớt cơ khí cao cấp", "Ổ bi thông dụng", "Ổ bi tốc độ thấp", "Nhiệt độ cao, chân không"],
    ],
  },
  {
    id: "medium-adaptation",
    title: "Bảng chọn vật liệu theo môi trường",
    description: "Khuyến nghị loại than chì và tẩm phù hợp dựa trên loại môi trường cần bịt kín",
    headers: ["Loại môi trường", "Nền than chì khuyến nghị", "Tẩm khuyến nghị", "Nhiệt độ tối đa", "Ghi chú"],
    rows: [
      ["Nước sạch / Nước ngọt", "Than chì hạt mịn vừa", "Nhựa Phenolic", "200°C", "Tránh môi trường có cát"],
      ["Nước biển", "Than chì hạt mịn mật độ cao", "Nhựa Furan", "180°C", "Cần tẩm chống clo"],
      ["Dầu khoáng / Dầu thủy lực", "Than chì hạt trung bình", "Nhựa Phenolic", "200°C", "Giảm khe hở cho dầu độ nhớt thấp"],
      ["Axit mạnh (H₂SO₄, HCl)", "Than chì hạt mịn độ tinh khiết cao", "Nhựa Furan", "250°C", "Tránh tẩm antimon tiếp xúc axit"],
      ["Kiềm mạnh (NaOH, KOH)", "Than chì hạt mịn", "Nhựa Furan", "200°C", "Không khuyến nghị nhựa Phenolic"],
      ["Dung môi hữu cơ", "Than chì hạt mịn", "Furan / PTFE", "200°C", "Xác nhận dung môi không hòa tan chất tẩm"],
      ["Hơi nước nhiệt độ cao", "Than chì hạt mịn mật độ cao", "Cacbon hóa / Antimon", "600°C", "Chú ý chống oxy hóa"],
      ["Khí nóng nhiệt độ cao", "Than chì độ tinh khiết cao", "Xử lý cacbon hóa", "600°C", "Giới hạn oxy < 1%"],
      ["Môi trường chân không", "Than chì ép đẳng tĩnh mật độ cao", "Xử lý cacbon hóa", "500°C", "Yêu cầu thoát khí thấp"],
      ["Thực phẩm / Dược phẩm", "Than chì hạt mịn", "Nhựa cấp thực phẩm", "180°C", "Chứng nhận FDA/EU"],
    ],
  },
  {
    id: "temp-speed-limits",
    title: "Bảng thông số giới hạn nhiệt độ và tốc độ",
    description: "Giới hạn vận hành của các tổ hợp vật liệu khác nhau trong điều kiện nhiệt độ và tốc độ kết hợp",
    headers: ["Tổ hợp vật liệu", "Nhiệt độ tối đa", "Tốc độ dài tối đa (m/s)", "Giới hạn PV (MPa·m/s)", "Bôi trơn"],
    rows: [
      ["Than chì carbon vs SiC", "200°C", "25", "18", "Bôi trơn dầu/nước"],
      ["Than chì carbon vs Inox", "180°C", "15", "10", "Bôi trơn dầu"],
      ["Than chì tẩm Sb vs SiC", "450°C", "20", "15", "Dầu/tự bôi trơn"],
      ["Than chì cacbon hóa vs SiC", "600°C", "30", "22", "Tự bôi trơn"],
      ["Than chì carbon vs Gốm sứ", "250°C", "20", "14", "Bôi trơn nước/dầu"],
      ["Than chì Babit vs Thép", "350°C", "12", "8", "Bôi trơn dầu"],
      ["Than chì vs Than chì", "300°C", "8", "5", "Tự bôi trơn"],
    ],
  },
  {
    id: "wear-life",
    title: "Bảng ước tính tuổi thọ mài mòn",
    description: "Tốc độ mài mòn dự kiến và tuổi thọ của phớt than chì carbon trong các điều kiện vận hành khác nhau",
    headers: ["Điều kiện vận hành", "Ứng dụng điển hình", "Mài mòn hàng tháng (mm)", "Tuổi thọ dự kiến", "Yếu tố chính"],
    rows: [
      ["Bơm nước sạch — Liên tục", "Phớt bơm ly tâm", "0,02 ~ 0,05", "24 ~ 36 tháng", "Độ sạch môi trường"],
      ["Bơm hóa chất — Ăn mòn", "Phớt khuấy phản ứng", "0,05 ~ 0,10", "12 ~ 24 tháng", "Tính ăn mòn"],
      ["Bơm dầu nhiệt độ cao — 250°C", "Phớt bơm dầu nóng", "0,03 ~ 0,08", "18 ~ 30 tháng", "Ổn định nhiệt độ"],
      ["Bơm nước thải — Có hạt", "Phớt bơm thoát nước", "0,10 ~ 0,20", "6 ~ 12 tháng", "Độ cứng/nồng độ hạt"],
      ["Bơm tốc độ cao — >3000v/p", "Bơm cấp lò hơi", "0,04 ~ 0,08", "12 ~ 20 tháng", "Tốc độ/cân bằng"],
      ["Chạy khô — Gián đoạn", "Ổ bi quạt", "0,01 ~ 0,03", "36 ~ 60 tháng", "Tần suất khởi động"],
      ["Bơm nước biển tàu thủy", "Phớt trục đuôi", "0,03 ~ 0,06", "18 ~ 36 tháng", "Hàm lượng cát"],
    ],
  },
  {
    id: "press-fit-force",
    title: "Bảng an toàn lực ép",
    description: "Dải an toàn của độ dôi và lực ép tương ứng khi lắp bạc than chì",
    headers: ["Đường kính ngoài bạc (mm)", "Độ dôi khuyến nghị (mm)", "Lực ép tối đa (kN)", "Tốc độ ép (mm/s)", "Ghi chú"],
    rows: [
      ["20 ~ 40", "0,02 ~ 0,05", "5 ~ 15", "2 ~ 5", "Vát mép dẫn hướng ≥ 15°"],
      ["40 ~ 60", "0,03 ~ 0,07", "15 ~ 30", "2 ~ 5", "Độ nhám lỗ Ra ≤ 1,6"],
      ["60 ~ 80", "0,04 ~ 0,09", "30 ~ 50", "1 ~ 3", "Bôi trơn trước khi ép"],
      ["80 ~ 120", "0,05 ~ 0,12", "50 ~ 80", "1 ~ 3", "Khuyến nghị ép nhiệt hoặc co ngót"],
      ["120 ~ 160", "0,06 ~ 0,15", "80 ~ 120", "1 ~ 2", "Cần giám sát lực-dịch chuyển"],
      ["160 ~ 200", "0,08 ~ 0,18", "120 ~ 180", "0,5 ~ 1", "Ép từng đoạn, kiểm tra từng bước"],
    ],
  },
  {
    id: "face-pressure",
    title: "Bảng tính áp suất bề mặt phớt đầu",
    description: "Dải áp suất bề mặt phớt đầu khuyến nghị với áp suất lò xo và hệ số áp suất tương ứng",
    headers: ["Loại phớt", "Áp suất mặt Pc (MPa)", "Áp suất lò xo Ps (MPa)", "Hệ số áp suất K", "Dải tốc độ"],
    rows: [
      ["Cân bằng trong", "0,3 ~ 0,6", "0,08 ~ 0,15", "0,65 ~ 0,75", "< 3000 v/p"],
      ["Không cân bằng trong", "0,4 ~ 0,8", "0,10 ~ 0,20", "0,85 ~ 0,95", "< 1500 v/p"],
      ["Cân bằng ngoài", "0,2 ~ 0,5", "0,06 ~ 0,12", "0,60 ~ 0,70", "< 5000 v/p"],
      ["Phớt hai mặt", "0,3 ~ 0,7", "0,10 ~ 0,18", "0,65 ~ 0,80", "< 4000 v/p"],
      ["Phớt mềm nhiệt độ cao", "0,15 ~ 0,35", "0,05 ~ 0,10", "0,55 ~ 0,65", "< 2000 v/p"],
    ],
  },
  {
    id: "heat-treatment",
    title: "Bảng thông số nhiệt độ xử lý nhiệt / tẩm than chì",
    description: "Thông số kiểm soát nhiệt độ cho các giai đoạn xử lý than chì carbon",
    headers: ["Quy trình", "Dải nhiệt độ", "Thời gian giữ", "Tốc độ tăng nhiệt", "Mục đích"],
    rows: [
      ["Sấy phôi", "120°C ~ 180°C", "8 ~ 24 h", "≤ 30°C/h", "Loại bỏ ẩm tạo hình"],
      ["Xử lý cacbon hóa sơ bộ", "800°C ~ 1200°C", "4 ~ 8 h", "≤ 50°C/h", "Tăng cường cacbon hóa nền"],
      ["Xử lý graphit hóa", "2200°C ~ 2600°C", "2 ~ 6 h", "≤ 100°C/h", "Cải thiện độ kết tinh/dẫn điện"],
      ["Đóng rắn tẩm nhựa", "150°C ~ 200°C", "4 ~ 12 h", "≤ 20°C/h", "Lấp đầy lỗ xốp"],
      ["Tẩm kim loại (Sb)", "600°C ~ 800°C", "2 ~ 4 h", "≤ 60°C/h", "Tẩm kim loại chân không"],
      ["Tẩm hợp kim Babit", "300°C ~ 400°C", "1 ~ 3 h", "≤ 40°C/h", "Lấp đầy hợp kim ổ bi"],
      ["Tẩm PTFE thiêu kết", "360°C ~ 380°C", "2 ~ 6 h", "≤ 30°C/h", "Lấp đầy và thiêu kết PTFE"],
      ["Ủ ổn định", "200°C ~ 350°C", "6 ~ 12 h", "≤ 25°C/h", "Khử ứng suất gia công"],
    ],
  },
  {
    id: "troubleshooting",
    title: "Bảng xử lý tiếng ồn, quá nhiệt và rò rỉ",
    description: "Triệu chứng, nguyên nhân và giải pháp cho các sự cố vận hành phớt thường gặp",
    headers: ["Triệu chứng", "Nguyên nhân có thể", "Phương pháp chẩn đoán", "Giải pháp"],
    rows: [
      ["Tiếng rít the thé", "Ma sát khô mặt phớt / bôi trơn không đủ", "Kiểm tra lưu lượng bôi trơn", "Tăng cấp chất lỏng hoặc cải thiện thiết kế rãnh mặt phớt"],
      ["Tiếng ầm tần số thấp", "Khe hở bạc quá lớn / rung trục", "Đo độ đảo hướng kính", "Giảm khe hở hoặc nắn thẳng trục"],
      ["Nhiệt độ mặt > 80°C", "Áp suất mặt quá cao / làm mát không đủ", "Đo nhiệt độ khoang phớt", "Giảm nén lò xo hoặc tăng lưu lượng làm mát"],
      ["Rò rỉ dầu chậm (giọt/phút)", "Độ phẳng mặt kém / hạt mài mòn", "Kiểm tra chất lượng mài mặt phớt", "Mài lại hoặc thay vòng đệm"],
      ["Rò rỉ lớn", "Vòng đệm nứt / lắp đặt lệch", "Dừng kiểm tra mặt phớt", "Thay phớt và hiệu chỉnh lắp đặt"],
      ["Rò khi khởi động, không rò khi dừng", "Phớt tĩnh lão hóa / khe hở thay đổi", "Kiểm tra vòng O và bạc lót", "Thay phớt đàn hồi"],
      ["Tiếng ồn tăng dần", "Mài mòn ổ bi tích lũy", "Đo xu hướng khe hở ổ bi", "Lên lịch thay bạc lót"],
      ["Mài mòn mặt bất thường", "Hạt cứng trong môi trường", "Lọc và phân tích mẫu môi trường", "Thêm bộ lọc đầu vào hoặc đổi cấp chống mài mòn"],
    ],
  },
]

export const viFaqCategories: FAQCategory[] = [
  {
    category: "Chọn loại phớt",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    items: [
      {
        question: "Chọn vật liệu than chì cho nhiệt độ cao/thấp thế nào?",
        answer: "Nhiệt độ thấp (-50°C ~ 100°C): Dùng than chì hạt mịn vừa tẩm nhựa Phenolic. Chi phí hợp lý, hiệu suất ổn định.\nNhiệt độ trung bình (100°C ~ 250°C): Khuyến nghị tẩm nhựa Furan hoặc Epoxy. Chịu nhiệt và chống ăn mòn tốt hơn Phenolic.\nNhiệt độ cao (250°C ~ 450°C): Bắt buộc dùng than chì tẩm kim loại Antimon hoặc Babit. Nền khuyến nghị ép đẳng tĩnh để ổn định kích thước ở nhiệt độ cao.\nNhiệt độ siêu cao (450°C ~ 600°C): Dùng than chì xử lý cacbon hóa (carbon tinh khiết), không chất tẩm, dựa vào khả năng chịu nhiệt của than chì. Cần môi trường trơ hoặc khử.",
      },
      {
        question: "Chọn tẩm cho điều kiện ướt/khô thế nào?",
        answer: "Vận hành hoàn toàn ướt (bôi trơn đầy đủ): Dùng tẩm nhựa Phenolic hoặc Furan. Nhựa lấp đầy lỗ xốp, tăng mật độ, giảm mài mòn.\nChu trình ướt-khô (khởi động/dừng thường xuyên): Cần tẩm có tính tự bôi trơn xuất sắc. Khuyến nghị tẩm kim loại (Antimon/Babit) hoặc PTFE, tạo màng bôi trơn chuyển tiếp khi chạy khô.\nChạy khô hoàn toàn (không bôi trơn): Dùng than chì cacbon hóa hoặc tẩm nhựa đặc biệt. Thiết kế PV thấp (≤ 3 MPa·m/s) với rãnh tự bôi trơn trên mặt phớt.",
      },
      {
        question: "Than chì tốt nhất cho tốc độ cao / tải nặng / áp suất thấp?",
        answer: "Tốc độ cao (vận tốc dài > 20 m/s): Than chì ép đẳng tĩnh hạt mịn mật độ cao kết hợp mặt đối tiếp SiC. Tẩm Antimon hoặc cacbon hóa. Hạt mịn đảm bảo mài mòn đồng đều ở tốc độ cao.\nTải nặng (PV > 15 MPa·m/s): Than chì tẩm Babit hoặc Antimon. Kim loại lấp đầy cải thiện đáng kể cường độ nén và dẫn nhiệt, tản nhiệt ma sát kịp thời.\nÁp suất thấp (áp suất môi trường < 0,5 MPa): Có thể dùng than chì ép khuôn hạt trung bình tẩm nhựa Phenolic. Lựa chọn tiết kiệm nhất.",
      },
      {
        question: "Khác biệt chọn vật liệu bôi trơn không dầu và bôi trơn dầu?",
        answer: "Tự bôi trơn không dầu: Cần than chì cấp tự bôi trơn cao. Khuyến nghị than chì độ tinh khiết cao cacbon hóa hoặc tẩm PTFE. Mặt phớt cần rãnh chứa mảnh vụn hoặc rãnh xoắn để bôi trơn rắn qua màng chuyển than chì. PV khuyến nghị: 0,5 ~ 5 MPa·m/s.\nBôi trơn dầu: Than chì tẩm nhựa Phenolic hoặc Furan tiêu chuẩn đủ đáp ứng. Màng dầu cung cấp bôi trơn chính. Than chì làm mặt mềm thích ứng và chạy khẩn cấp. PV có thể đạt 10 ~ 20 MPa·m/s. Hạt than chì hơi thô hơn có thể cải thiện chống mài mòn khi bôi trơn dầu.",
      },
    ],
  },
  {
    category: "Khe hở lắp ráp",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    items: [
      {
        question: "Khắc phục rung (khe hở lớn) hoặc kẹt (quá chặt)?",
        answer: "Khe hở quá lớn: Trục rung hướng kính khi vận hành, giảm khả năng theo dõi mặt phớt, gây rò rỉ, tiếng ồn và mài mòn bất thường. Giải pháp: Tra bảng khe hở tiêu chuẩn theo tốc độ và đường kính trục. Gia công lại lỗ bạc. Kiểm tra độ thẳng trục, nắn thẳng nếu quá dung sai.\nKhe hở không đủ: Nhiệt ma sát không tản được. Nhiệt độ tăng làm than chì giãn nở, giảm thêm khe hở, tạo vòng phản hồi dương dẫn đến kẹt. Giải pháp: Tăng khe hở lên giới hạn trên khuyến nghị. Xác nhận tản nhiệt vỏ bạc. Kiểm tra lưu lượng hệ thống làm mát.\nChẩn đoán: Đo nhiệt độ sau 30 phút vận hành. > 90°C = quá chặt. Rung rõ khi vận hành = quá lỏng.",
      },
      {
        question: "Dung sai lắp tiêu chuẩn theo đường kính trục?",
        answer: "Dải dung sai phổ biến (lỗ bạc than chì vs trục thép):\nTrục nhỏ d ≤ 30 mm: H7/f7 hoặc H7/g6, khe hở 0,02 ~ 0,08 mm\nTrục trung bình 30 < d ≤ 80 mm: H7/f7 hoặc H8/e8, khe hở 0,03 ~ 0,15 mm\nTrục lớn 80 < d ≤ 150 mm: H8/e8 hoặc H8/d8, khe hở 0,05 ~ 0,30 mm\nTrục rất lớn d > 150 mm: H8/d8 hoặc H9/c9, khe hở 0,10 ~ 0,50 mm\nGhi chú: Giá trị thực tế phải xét đến tốc độ, nhiệt độ và hệ số giãn nở nhiệt của vật liệu.",
      },
      {
        question: "Điều chỉnh khe hở cho giãn nở nhiệt?",
        answer: "Hệ số giãn nở nhiệt than chì ≈ (2~4)×10⁻⁶ /°C, thép ≈ 11×10⁻⁶ /°C. Khác biệt đáng kể.\nPhương pháp hiệu chỉnh:\n1. Tính thay đổi bán kính: Δr = (α_thép - α_than_chì) × r × ΔT\n2. Cộng kết quả vào giá trị khe hở nguội\n3. Ví dụ: Trục 80 mm, tăng nhiệt 150°C, thay đổi bán kính ≈ (11-3)×10⁻⁶ × 40 × 150 = 0,048 mm\n4. Khe hở nguội thực tế = khe hở vận hành + 0,048 mm\n5. Lưu ý: Khe hở co lại khi nguội. Thiết bị lắp nóng phải kiểm tra đồng tâm sau khi nguội.",
      },
    ],
  },
  {
    category: "Gia công và lắp đặt",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    items: [
      {
        question: "Lưu ý khi tiện, khoan, mài than chì?",
        answer: "Tiện: Dùng dao kim cương hoặc hợp kim cứng. Góc trước 0°~5°, góc sau 6°~10°. Tốc độ cắt 100~300 m/ph, lượng ăn dao 0,05~0,15 mm/v. Duy trì cắt liên tục, tránh va đập gây sứt mép. Dùng thiết bị hút bụi than chì.\nKhoan: Mũi khoan HSS hoặc hợp kim cứng, góc mũi 90°~120°. Tốc độ 3000~8000 v/ph, lượng ăn 0,02~0,08 mm/v. Dễ sứt mép vào và ra, cần vát mép hai mặt, đỡ mặt ra bằng gỗ.\nMài: Đá mài cacbua silic (hạt 60~120#), độ sâu ≤ 0,01 mm/lần. Mài khô ưu tiên. Nếu mài ướt, xác nhận cấp tẩm than chì chịu được dung dịch làm mát.\nAn toàn: Bụi than chì dẫn điện. Thiết bị điện cần bảo vệ chống bụi. Người vận hành phải đeo khẩu trang chống bụi.",
      },
      {
        question: "Khắc phục lệch, sứt mép, nứt khi ép?",
        answer: "Lệch: Vát mép lỗ không đều hoặc lực ép lệch trục. Giải pháp: Kiểm tra vát mép lỗ (≥ 15°), dùng trục dẫn hướng, kiểm soát tốc độ ép 2~5 mm/s.\nSứt mép: Tập trung ứng suất ở mép bạc hoặc độ dôi quá lớn. Giải pháp: Tăng vát mép vào bạc (C0,5~C1,0), giảm độ dôi, kiểm tra độ nhám lỗ (≤ Ra 1,6).\nNứt: Độ dôi quá dung sai hoặc độ tròn lỗ quá mức. Giải pháp: Tính lại độ dôi, đo độ tròn lỗ (≤ IT7), xem xét ép nhiệt (nung lỗ đến 150~200°C trước lắp).\nGiám sát: Dùng máy ép với cảm biến lực-dịch chuyển để theo dõi đường cong thời gian thực. Dừng ngay nếu đường cong bất thường.",
      },
      {
        question: "Kiểm soát độ chặt khi lắp dôi?",
        answer: "Nguyên tắc tính độ dôi:\n1. Độ dôi tối thiểu: Đảm bảo bạc không lỏng ở nhiệt độ vận hành tối đa; tính đến chênh lệch giãn nở nhiệt\n2. Độ dôi tối đa: Đảm bảo bạc than chì không bị ép vỡ; lấy 1/5 ~ 1/3 cường độ nén than chì\n3. Công thức thực nghiệm: δ ≈ (0,002~0,005) × ĐK ngoài bạc\n\nGiá trị tham khảo:\nĐK ngoài ≤ 50 mm: độ dôi 0,02~0,05 mm\nĐK ngoài 50~100 mm: độ dôi 0,04~0,10 mm\nĐK ngoài 100~150 mm: độ dôi 0,06~0,15 mm\nĐK ngoài > 150 mm: độ dôi 0,08~0,20 mm\n\nPhương pháp lắp:\n- Độ dôi nhỏ: Ép nguội\n- Độ dôi trung bình: Nung lỗ đến 150~200°C ép nhiệt\n- Độ dôi lớn: Kết hợp làm lạnh bạc (nitơ lỏng -196°C) + nung lỗ",
      },
    ],
  },
  {
    category: "Sự cố vận hành",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z",
    items: [
      {
        question: "Xử lý nhiệt độ vận hành quá cao?",
        answer: "Trình tự kiểm tra:\n1. Đo nhiệt độ thực tế — Dùng nhiệt kế hồng ngoại hoặc cặp nhiệt trên vách khoang phớt. Kiểm tra nếu > 80°C.\n2. Kiểm tra hệ thống làm mát — Lưu lượng chất làm mát đủ? Đường ống tắc? Bộ trao đổi nhiệt giảm hiệu suất?\n3. Kiểm tra áp suất mặt — Lò xo nén quá mức? Bề mặt phớt quá rộng?\n4. Kiểm tra khe hở — Khe hở quá nhỏ gây tăng nhiệt ma sát nhanh.\n\nBiện pháp khẩn cấp:\n- Tăng lưu lượng làm mát lên 1,2~1,5 lần khuyến nghị\n- Giảm tốc độ hoặc áp suất (tạm thời)\n- Kiểm tra độ sạch dầu bôi trơn và bộ lọc\n\nBiện pháp dài hạn:\n- Đánh giá chuyển sang cấp than chì tẩm có dẫn nhiệt cao hơn\n- Tối ưu thiết kế rãnh làm mát mặt phớt\n- Kiểm tra đồng tâm trục",
      },
      {
        question: "Khắc phục rò rỉ dầu/nước nhẹ?",
        answer: "Rò rỉ ≤ 5 giọt/phút (chấp nhận được):\n1. Kiểm tra mặt phớt — Nếu rò nhẹ trong giai đoạn chạy rà, tiếp tục vận hành 24~48 giờ để theo dõi\n2. Điều chỉnh bu lông nắp — Siết đều và đối xứng, mô-men ở 50%~70% khuyến nghị\n3. Kiểm tra phớt phụ — Vòng O/đệm lão hóa hoặc hỏng? Khoang phớt có khuyết tật đúc?\n\nRò rỉ > 5 giọt/phút (cần dừng máy):\n1. Kiểm tra mặt phớt — Nứt nhiệt, xước, cong vênh? Mặt đối tiếp phẳng?\n2. Kiểm tra kích thước lắp — Nén đúng? Mặt phớt vuông góc trục?\n3. Kiểm tra thay đổi điều kiện vận hành — Biến động nhiệt độ, áp suất, tốc độ gần đây?\n4. Thay phớt — Tháo và thay toàn bộ bộ phớt, hiệu chỉnh lại lắp đặt",
      },
      {
        question: "Nguyên nhân tiếng ồn, rung, mài mòn nhanh?",
        answer: "Chẩn đoán tiếng ồn:\n- Tiếng rít the thé → Ma sát khô mặt phớt. Kiểm tra bôi trơn ngay.\n- Tiếng ầm tần số thấp → Khe hở ổ bi quá lớn hoặc mất cân bằng phần quay.\n- Tiếng lách cách gián đoạn → Hạt lạ trên mặt phớt hoặc sứt mép cục bộ.\n\nNguyên nhân rung:\n1. Trục cong hoặc mòn ổ bi gây đảo quá mức\n2. Độ phẳng mặt phớt kém > 0,9 μm\n3. Môi trường hóa hơi (chớp) gây mở mặt gián đoạn\n4. Sai lệch đồng tâm lắp > 0,05 mm\n\nNguyên nhân mài mòn nhanh:\n1. Hạt mài mòn trong môi trường (cát, xỉ hàn, rỉ) — thêm bộ lọc đầu vào\n2. Chọn sai vật liệu (độ cứng thấp hoặc cấp tẩm không phù hợp)\n3. PV thực tế vượt quá PV cho phép của vật liệu\n4. Khởi động/dừng thường xuyên hoặc chạy khô kéo dài\n5. Tính ăn mòn môi trường vượt khả năng chịu của chất tẩm",
      },
      {
        question: "Khắc phục cacbon hóa và bột hóa ở nhiệt độ cao?",
        answer: "Triệu chứng cacbon hóa: Tích tụ bột đen trên mặt phớt. Bề mặt than chì rời rạc, dạng bột, mất cấu trúc chịu lực.\n\nPhân tích nguyên nhân gốc:\n1. Nhiệt độ vượt khả năng chịu của chất tẩm — nhựa Phenolic bắt đầu cacbon hóa > 200°C\n2. Điểm nóng cục bộ — nhiệt ma sát mặt + nhiệt môi trường vượt giới hạn\n3. Môi trường oxy hóa — oxy oxy hóa than chì ở nhiệt độ cao; CO/CO₂ thoát ra gây xốp cấu trúc\n\nGiải pháp:\n1. Dừng ngay và thay thế; ngăn hỏng phớt hoàn toàn do cacbon hóa lan rộng\n2. Chọn cấp tẩm chịu nhiệt cao hơn (Phenolic→Furan→Antimon→Cacbon hóa)\n3. Kiểm soát môi trường — xả khí trơ hoặc phớt hơi cho điều kiện nhiệt độ cao\n4. Tối ưu làm mát — tăng lưu lượng làm mát khoang phớt\n5. Xem xét thiết kế rãnh mặt phớt để cải thiện bôi trơn và tản nhiệt\n\nPhòng ngừa: Duy trì biên an toàn ít nhất 50°C dưới nhiệt độ định mức. Lắp đầu dò nhiệt độ.",
      },
    ],
  },
  {
    category: "Bảo trì",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    items: [
      {
        question: "Quy trình chạy rà ban đầu?",
        answer: "Mục đích: Cho các mặt phớt thích ứng, tạo màng chất lỏng ổn định và dạng mài mòn.\n\nCác bước chạy rà:\n1. Trước khi khởi động: Kiểm tra khoang phớt đã đầy môi trường, xả khí. Quay tay 2~3 vòng xác nhận chuyển động tự do, không tiếng ồn.\n2. Giai đoạn 1 (0~30 phút): Chạy ở 30%~50% tốc độ định mức. Theo dõi rò rỉ, nhiệt độ, rung. Cho phép rò nhẹ.\n3. Giai đoạn 2 (30~120 phút): Tăng dần lên 70%~80% tốc độ định mức. Nhiệt độ ổn định ở ≤ 60°C.\n4. Giai đoạn 3 (120~240 phút): Chạy tốc độ tối đa. Sau khi nhiệt độ ổn định, kiểm tra rò rỉ trong phạm vi cho phép.\n5. Thời gian chạy rà (72 giờ đầu): Duy trì vận hành liên tục nếu có thể.\n\nNếu nhiệt độ vượt 80°C hoặc rò rỉ tăng đáng kể trong chạy rà, dừng và kiểm tra ngay.",
      },
      {
        question: "Bảo quản khi ngừng dài hạn?",
        answer: "Ngắn hạn (≤ 7 ngày):\n1. Giữ khoang phớt đầy môi trường, tránh khô mặt phớt\n2. Quay tay 1~2 vòng mỗi tuần, tránh dính mặt phớt\n3. Đóng van đầu vào/ra\n\nTrung hạn (7~90 ngày):\n1. Xả môi trường, xối sạch bằng nước hoặc dung môi\n2. Bôi mỡ chống rỉ hoặc chất bảo vệ đặc biệt lên mặt phớt\n3. Phủ dầu chống rỉ lên bề mặt ngoài bạc\n4. Nạp khí nitơ hoặc đặt chất hút ẩm trong khoang phớt\n5. Quay tay mỗi hai tuần một lần\n\nDài hạn (> 90 ngày):\n1. Tháo các bộ phận phớt, bảo quản riêng\n2. Làm sạch và bọc bằng giấy chống rỉ\n3. Môi trường bảo quản: 5~35°C, độ ẩm ≤ 60%, tránh ánh nắng trực tiếp\n4. Tránh xa chất axit/kiềm\n5. Kiểm tra phớt về lão hóa hoặc biến dạng trước khi lắp lại",
      },
      {
        question: "Tiêu chuẩn thay thế khi mòn đến giới hạn?",
        answer: "Vòng đệm:\n1. Độ sâu mòn mặt > 1,0 mm hoặc khuyết tật > 15% bề rộng mặt phớt\n2. Nứt xuyên hoặc sứt mẻ\n3. Độ phẳng sau mài > 0,9 μm (đánh giá lại sau mài)\n4. Tuổi thọ còn lại không đủ đến kỳ bảo trì tiếp theo\n\nBạc lót/Ổ bi:\n1. Mòn lỗ > 2~3 lần khe hở ban đầu\n2. Bậc mòn hoặc rãnh trên đường kính ngoài\n3. Giảm chiều dày thành > 20% ban đầu\n4. Rung cao hơn 50%+ so với giá trị ban đầu\n\nQuy trình đánh giá:\n1. Ghi lại kích thước ban đầu và thông số vận hành\n2. Đo xu hướng mòn và rung định kỳ (mỗi 3~6 tháng)\n3. Lên lịch thay sớm khi tốc độ mòn tăng đột ngột\n4. Chuẩn bị phụ tùng khi đạt 80% tuổi thọ lý thuyết",
      },
    ],
  },
  {
    category: "Đặt hàng tùy chỉnh",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    items: [
      {
        question: "Lưu ý khi mở khuôn cho than chì tùy chỉnh?",
        answer: "Ba yếu tố đánh giá:\n1. Số lượng & Chi phí — Chi phí khuôn thường 3.000~15.000 NDT. Số lượng nhỏ (< 50 cái): khuyến nghị gia công. > 500 cái: xem xét ép khuôn.\n2. Độ chính xác — Dung sai ép khuôn ±0,5%. Gia công đạt ±0,05 mm.\n3. Hình dạng — Hình phức tạp (lỗ sâu, L/D > 5, thành mỏng < 3 mm): phôi ép + gia công tinh.\n\nLưu ý thiết kế khuôn:\n- Góc thoát khuôn ≥ 1°~3° (liên quan chiều cao)\n- Tránh góc nhọn và thay đổi tiết diện đột ngột (bán kính tối thiểu R ≥ 2 mm)\n- Giữ đối xứng để giảm tải lệch\n- Chừa lượng dư gia công 0,5~1,0 mm (cho bề mặt hoàn thiện)\n- Xét hướng ép ảnh hưởng đến đồng đều mật độ",
      },
      {
        question: "Tiêu chuẩn thiết kế rãnh dầu và vai?",
        answer: "Thiết kế rãnh dầu/bôi trơn:\n- Độ sâu: 0,3~1,0 mm (theo đường kính trục và PV)\n- Rộng: 1,0~3,0 mm\n- Loại: Xoắn (một chiều), chữ V (hai chiều), thẳng (tốc độ thấp)\n- Khoảng cách: 5~15 mm\n- Cách mép: ≥ 2 mm\n\nThiết kế vai:\n- Cao: 1~3 mm (theo chiều dày thành)\n- Góc: 30°~45°\n- Bán kính lượn: R ≥ 0,5 mm\n- Tránh tập trung ứng suất ở chân vai\n\nKý hiệu dung sai:\n- Vị trí rãnh: ±0,2 mm\n- Sâu rãnh: +0,1 mm / -0 mm\n- Đồng tâm vai: ≤ 0,05 mm",
      },
      {
        question: "Gia công gấp tùy chỉnh đảm bảo chất lượng?",
        answer: "Quy trình gấp:\n1. Xác nhận bản vẽ — Mô hình 3D xem xét cấu trúc, bản vẽ kỹ thuật 2D với dung sai quan trọng\n2. Chọn phôi — Dùng cấp và kích thước có sẵn, bỏ qua thời gian mua hàng\n3. Quy trình — Sắp xếp hiệu quả: tiện thô→tiện tinh→khoan→mài. Giảm số lần gá.\n4. Thiết bị — Máy CNC độ chính xác cao (sai số định vị ≤ 0,005 mm) + dao kim cương\n\nCấp chính xác:\n- Tiêu chuẩn ±0,05 mm: Tiện thường\n- Chính xác ±0,02 mm: Cần mài\n- Cao ±0,01 mm: Máy mài CNC + CMM\n- Độ phẳng 0,9 μm: Cần mài nghiền\n\nThời gian gấp (bạc đơn giản/vòng đệm):\n- Theo bản vẽ: 3~5 ngày làm việc\n- Có mua vật liệu: 7~10 ngày\n- Bao gồm khuôn: 15~25 ngày",
      },
    ],
  },
]

export const viFormulas: Formula[] = [
  {
    name: "Công thức khe hở bạc tổng quát",
    formula: "C = C₀ + α₁ × d × ΔT₁ - α₂ × d × ΔT₂ + K × d × n",
    description: "Tính khe hở có xét đến giãn nở nhiệt, lực ly tâm và ảnh hưởng tốc độ",
    variables: [
      { symbol: "C", meaning: "Khe hở vận hành (mm)" },
      { symbol: "C₀", meaning: "Khe hở lắp ban đầu (mm), thường 0,02~0,08 mm" },
      { symbol: "α₁", meaning: "Hệ số giãn nở nhiệt vật liệu lỗ (thép ≈ 11×10⁻⁶ /°C)" },
      { symbol: "α₂", meaning: "Hệ số giãn nở nhiệt than chì (≈ 2~4×10⁻⁶ /°C)" },
      { symbol: "d", meaning: "Đường kính trục (mm)" },
      { symbol: "ΔT₁", meaning: "Tăng nhiệt độ lỗ (°C)" },
      { symbol: "ΔT₂", meaning: "Tăng nhiệt độ than chì (°C)" },
      { symbol: "K", meaning: "Hệ số lực ly tâm (≈ 0,001~0,003)" },
      { symbol: "n", meaning: "Tốc độ (vòng/phút)" },
    ],
    note: "Đơn giản hóa: C = C₀ + (α₁ - α₂) × d × ΔT. Thông thường: 0,15~0,25 mm cho bơm nước áp thấp, 0,30~0,50 mm cho bơm nhiệt độ cao.",
  },
  {
    name: "Công thức giới hạn tốc độ dài",
    formula: "V = π × d × n / 60000",
    description: "Tính vận tốc dài trung bình mặt phớt để đánh giá giới hạn PV và chọn vật liệu",
    variables: [
      { symbol: "V", meaning: "Vận tốc dài (m/s)" },
      { symbol: "d", meaning: "Đường kính trung bình mặt phớt (mm)" },
      { symbol: "n", meaning: "Tốc độ (vòng/phút)" },
      { symbol: "π", meaning: "Pi (≈ 3,1416)" },
    ],
    note: "Giới hạn khuyến nghị than chì carbon: tẩm nhựa ≤ 20 m/s, tẩm kim loại ≤ 25 m/s, cacbon hóa ≤ 30 m/s. Trên giới hạn, dùng thiết kế phớt cân bằng hoặc tăng cường làm mát.",
  },
  {
    name: "Công thức áp suất bề mặt phớt đầu",
    formula: "Pc = Ps + (B × K) × P",
    description: "Lực đóng trên một đơn vị diện tích mặt phớt, quyết định hiệu suất bịt kín và tuổi thọ",
    variables: [
      { symbol: "Pc", meaning: "Áp suất bề mặt phớt (MPa)" },
      { symbol: "Ps", meaning: "Áp suất lò xo (MPa), thường 0,08~0,20 MPa" },
      { symbol: "B", meaning: "Tỷ lệ cân bằng (cân bằng 0,65~0,85, không cân bằng 0,90~1,10)" },
      { symbol: "K", meaning: "Hệ số áp suất (≈ 0,5~0,7)" },
      { symbol: "P", meaning: "Áp suất môi trường (MPa)" },
    ],
    note: "Dải áp suất mặt khuyến nghị: 0,3~0,8 MPa. Quá thấp: nguy cơ rò rỉ. Quá cao: sinh nhiệt và mài mòn tăng tốc. Than chì carbon vs SiC: đầu thấp. Than chì carbon vs kim loại: đầu cao.",
  },
  {
    name: "Công thức bù giãn nở nhiệt",
    formula: "ΔL = α × L × ΔT",
    description: "Tính thay đổi kích thước chi tiết than chì do thay đổi nhiệt độ, dùng để hiệu chỉnh khe hở và thiết kế lắp nhiệt",
    variables: [
      { symbol: "ΔL", meaning: "Thay đổi kích thước (mm)" },
      { symbol: "α", meaning: "Hệ số giãn nở nhiệt vật liệu (/°C)" },
      { symbol: "L", meaning: "Kích thước ban đầu (mm)" },
      { symbol: "ΔT", meaning: "Thay đổi nhiệt độ (°C) = nhiệt độ vận hành - nhiệt độ lắp" },
    ],
    note: "Than chì α ≈ (2,0~4,5)×10⁻⁶ /°C (theo cấp và hướng tạo hình). Thép α ≈ 11×10⁻⁶ /°C. Thiết kế lắp nhiệt: tính cả giãn nở lỗ và giãn nở bạc than chì; chênh lệch là thay đổi độ dôi hiệu dụng.",
  },
  {
    name: "Công thức an toàn độ dôi ép",
    formula: "σ_max = (δ × E) / (d × (1 - μ²)) ≤ [σ] / S",
    description: "Xác minh ứng suất tối đa từ độ dôi chọn không vượt ứng suất cho phép của vật liệu",
    variables: [
      { symbol: "σ_max", meaning: "Ứng suất kéo vòng tối đa (MPa)" },
      { symbol: "δ", meaning: "Độ dôi (mm)" },
      { symbol: "E", meaning: "Mô đun đàn hồi than chì (≈ 8000~12000 MPa)" },
      { symbol: "d", meaning: "Đường kính ngoài bạc (mm)" },
      { symbol: "μ", meaning: "Hệ số Poisson than chì (≈ 0,15~0,25)" },
      { symbol: "[σ]", meaning: "Ứng suất cho phép than chì (cường độ kéo / hệ số an toàn)" },
      { symbol: "S", meaning: "Hệ số an toàn (khuyến nghị 3~5)" },
    ],
    note: "Cường độ kéo than chì carbon xấp xỉ 1/3~1/4 cường độ nén. Luôn dùng cường độ kéo (không phải nén) trong tính toán. Hệ số an toàn ≥ 3. Độ dôi khuyến nghị: ≤ 0,5%~1,0% chiều dày thành than chì.",
  },
]

// ============================================================
// THAI (th) - Fallback to English
// ============================================================

export const thCoreTables: CoreTable[] = [
  {
    id: "impregnation-selection",
    title: "ตารางเลือกการชุบอย่างรวดเร็ว",
    description: "เลือกประเภทการชุบที่เหมาะสมตามสื่อและอุณหภูมิในการทำงาน",
    headers: ["ประเภทการชุบ", "ช่วงอุณหภูมิ", "ความต้านทานการกัดกร่อน", "สื่อที่เหมาะสม", "การใช้งานทั่วไป"],
    rows: [
      ["ชุบเรซินฟีนอลิก", "-50°C ~ +200°C", "ดี", "น้ำ, น้ำมัน, กรด/ด่างอ่อน", "ซีลปั๊มทั่วไป, ปั๊มน้ำสะอาด"],
      ["ชุบเรซินฟูแรน", "-50°C ~ +250°C", "ยอดเยี่ยม", "กรดแก่, ด่างแก่, ตัวทำละลายอินทรีย์", "เครื่องปฏิกรณ์เคมี, อุปกรณ์ล้างกรด"],
      ["ชุบเรซินอีพ็อกซี", "-50°C ~ +180°C", "ดี", "น้ำ, น้ำมัน, สารละลายด่าง", "เครื่องจักรอาหาร, อุปกรณ์เภสัชกรรม"],
      ["ชุบโลหะแอนติโมนี", "-100°C ~ +450°C", "ปานกลาง", "น้ำมันอุณหภูมิสูง, ไอน้ำ", "ปั๊มอุณหภูมิสูง, ซีลกังหัน"],
      ["ชุบโลหะแบ็บบิท", "-100°C ~ +350°C", "ปานกลาง", "น้ำมันอุณหภูมิสูง, รับน้ำหนักมาก", "บูชรับน้ำหนักมาก, แบริ่งขนาดใหญ่"],
      ["คาร์บอไนซ์ (คาร์บอนบริสุทธิ์)", "-200°C ~ +600°C", "ยอดเยี่ยม", "สื่อเกือบทั้งหมด (รวมสุญญากาศ)", "เตาอุณหภูมิสูง, อุปกรณ์เซมิคอนดักเตอร์"],
      ["ชุบ PTFE", "-100°C ~ +250°C", "ยอดเยี่ยม", "สื่อกัดกร่อนรุนแรง, อาหาร", "เภสัชกรรม, เคมี, อาหาร"],
    ],
  },
  {
    id: "sleeve-clearance",
    title: "ตารางคำนวณระยะห่างบูชมาตรฐาน",
    description: "ค่าระยะห่างแนะนำระหว่างบูชกราไฟท์และเพลาเหล็กที่เส้นผ่านศูนย์กลางและความเร็วต่างๆ",
    headers: ["เส้นผ่านศูนย์กลางเพลา (มม.)", "ความเร็ว < 500 รอบ/นาที", "ความเร็ว 500~1500 รอบ/นาที", "ความเร็ว 1500~3000 รอบ/นาที", "ความเร็ว > 3000 รอบ/นาที"],
    rows: [
      ["10 ~ 25", "0.08 ~ 0.12 มม.", "0.10 ~ 0.15 มม.", "0.15 ~ 0.20 มม.", "0.20 ~ 0.30 มม."],
      ["25 ~ 50", "0.10 ~ 0.15 มม.", "0.15 ~ 0.20 มม.", "0.20 ~ 0.30 มม.", "0.30 ~ 0.40 มม."],
      ["50 ~ 80", "0.12 ~ 0.18 มม.", "0.18 ~ 0.25 มม.", "0.25 ~ 0.35 มม.", "0.35 ~ 0.50 มม."],
      ["80 ~ 120", "0.15 ~ 0.22 มม.", "0.22 ~ 0.30 มม.", "0.30 ~ 0.42 มม.", "0.42 ~ 0.60 มม."],
      ["120 ~ 200", "0.18 ~ 0.28 มม.", "0.25 ~ 0.38 มม.", "0.35 ~ 0.50 มม.", "0.50 ~ 0.70 มม."],
    ],
  },
  {
    id: "material-comparison",
    title: "ตารางเปรียบเทียบสมบัติวัสดุกราไฟท์",
    description: "เปรียบเทียบสมบัติทางกายภาพและเชิงกลของวัสดุคาร์บอนกราไฟท์ตามกระบวนการขึ้นรูป",
    headers: ["สมบัติ", "กราไฟท์อัดขึ้นรูป", "กราไฟท์อัดไอโซสแตติก", "กราไฟท์เนื้อละเอียด", "กราไฟท์เนื้อหยาบ", "กราไฟท์บริสุทธิ์สูง"],
    rows: [
      ["ความหนาแน่นรวม (g/cm³)", "1.70 ~ 1.80", "1.78 ~ 1.90", "1.65 ~ 1.75", "1.55 ~ 1.65", "1.70 ~ 1.85"],
      ["กำลังอัด (MPa)", "≥ 180", "≥ 200", "≥ 140", "≥ 100", "≥ 160"],
      ["กำลังดัด (MPa)", "≥ 60", "≥ 70", "≥ 45", "≥ 35", "≥ 55"],
      ["ความแข็งโชร์ (HS)", "60 ~ 80", "65 ~ 85", "50 ~ 65", "40 ~ 55", "55 ~ 75"],
      ["ความพรุน (%)", "8 ~ 15", "5 ~ 12", "12 ~ 18", "15 ~ 22", "10 ~ 15"],
      ["อุณหภูมิใช้งานสูงสุด (°C)", "400", "500", "350", "300", "600"],
      ["การใช้งานทั่วไป", "ซีลริง, บูช", "ซีลเชิงกลระดับพรีเมียม", "แบริ่งทั่วไป", "แบริ่งความเร็วต่ำ", "อุณหภูมิสูง, สุญญากาศ"],
    ],
  },
  {
    id: "medium-adaptation",
    title: "ตารางเลือกวัสดุตามสื่อการทำงาน",
    description: "แนะนำเกรดกราไฟท์และการชุบตามประเภทสื่อที่ต้องการซีล",
    headers: ["ประเภทสื่อ", "ฐานกราไฟท์แนะนำ", "การชุบแนะนำ", "อุณหภูมิสูงสุด", "หมายเหตุ"],
    rows: [
      ["น้ำสะอาด / น้ำจืด", "กราไฟท์เนื้อละเอียดปานกลาง", "เรซินฟีนอลิก", "200°C", "หลีกเลี่ยงสื่อที่มีทราย"],
      ["น้ำทะเล", "กราไฟท์เนื้อละเอียดความหนาแน่นสูง", "เรซินฟูแรน", "180°C", "ต้องการการชุบที่ทนคลอไรด์"],
      ["น้ำมันแร่ / น้ำมันไฮดรอลิก", "กราไฟท์เนื้อปานกลาง", "เรซินฟีนอลิก", "200°C", "ลดระยะห่างสำหรับน้ำมันความหนืดต่ำ"],
      ["กรดแก่ (H₂SO₄, HCl)", "กราไฟท์เนื้อละเอียดบริสุทธิ์สูง", "เรซินฟูแรน", "250°C", "หลีกเลี่ยงการชุบแอนติโมนีกับกรด"],
      ["ด่างแก่ (NaOH, KOH)", "กราไฟท์เนื้อละเอียด", "เรซินฟูแรน", "200°C", "ไม่แนะนำเรซินฟีนอลิก"],
      ["ตัวทำละลายอินทรีย์", "กราไฟท์เนื้อละเอียด", "ฟูแรน / PTFE", "200°C", "ยืนยันว่าตัวทำละลายไม่ละลายสารชุบ"],
      ["ไอน้ำอุณหภูมิสูง", "กราไฟท์เนื้อละเอียดความหนาแน่นสูง", "คาร์บอไนซ์ / แอนติโมนี", "600°C", "ระวังการออกซิเดชัน"],
      ["แก๊สร้อนอุณหภูมิสูง", "กราไฟท์บริสุทธิ์สูง", "คาร์บอไนซ์", "600°C", "จำกัดออกซิเจน < 1%"],
      ["สภาพสุญญากาศ", "กราไฟท์อัดไอโซสแตติกความหนาแน่นสูง", "คาร์บอไนซ์", "500°C", "ต้องการการปล่อยแก๊สต่ำ"],
      ["อาหาร / เภสัชกรรม", "กราไฟท์เนื้อละเอียด", "เรซินเกรดอาหาร", "180°C", "รับรอง FDA/EU"],
    ],
  },
  {
    id: "temp-speed-limits",
    title: "ตารางพารามิเตอร์จำกัดอุณหภูมิและความเร็ว",
    description: "ขีดจำกัดการทำงานของชุดวัสดุต่างๆภายใต้สภาวะอุณหภูมิและความเร็วร่วม",
    headers: ["ชุดวัสดุ", "อุณหภูมิสูงสุด", "ความเร็วเชิงเส้นสูงสุด (m/s)", "ขีดจำกัด PV (MPa·m/s)", "การหล่อลื่น"],
    rows: [
      ["คาร์บอนกราไฟท์ vs SiC", "200°C", "25", "18", "หล่อลื่นน้ำมัน/น้ำ"],
      ["คาร์บอนกราไฟท์ vs สแตนเลส", "180°C", "15", "10", "หล่อลื่นน้ำมัน"],
      ["กราไฟท์ชุบ Sb vs SiC", "450°C", "20", "15", "น้ำมัน/หล่อลื่นตัวเอง"],
      ["กราไฟท์คาร์บอไนซ์ vs SiC", "600°C", "30", "22", "หล่อลื่นตัวเอง"],
      ["คาร์บอนกราไฟท์ vs เซรามิก", "250°C", "20", "14", "หล่อลื่นน้ำ/น้ำมัน"],
      ["กราไฟท์แบ็บบิท vs เหล็ก", "350°C", "12", "8", "หล่อลื่นน้ำมัน"],
      ["กราไฟท์ vs กราไฟท์", "300°C", "8", "5", "หล่อลื่นตัวเอง"],
    ],
  },
  {
    id: "wear-life",
    title: "ตารางอ้างอิงประมาณการอายุการสึกหรอ",
    description: "อัตราการสึกหรอและอายุการใช้งานที่คาดหวังของซีลคาร์บอนกราไฟท์ภายใต้สภาวะการทำงานต่างๆ",
    headers: ["สภาวะการทำงาน", "การใช้งานทั่วไป", "การสึกหรอรายเดือน (มม.)", "อายุการใช้งานประมาณ", "ปัจจัยหลัก"],
    rows: [
      ["ปั๊มน้ำสะอาด — ต่อเนื่อง", "ซีลปั๊มหอยโข่ง", "0.02 ~ 0.05", "24 ~ 36 เดือน", "ความสะอาดของสื่อ"],
      ["ปั๊มเคมี — กัดกร่อน", "ซีลเครื่องกวนปฏิกรณ์", "0.05 ~ 0.10", "12 ~ 24 เดือน", "ความกัดกร่อนของสื่อ"],
      ["ปั๊มน้ำมันอุณหภูมิสูง — 250°C", "ซีลปั๊มน้ำมันร้อน", "0.03 ~ 0.08", "18 ~ 30 เดือน", "เสถียรภาพอุณหภูมิ"],
      ["ปั๊มน้ำเสีย — มีอนุภาค", "ซีลปั๊มระบายน้ำ", "0.10 ~ 0.20", "6 ~ 12 เดือน", "ความแข็ง/ความเข้มข้นอนุภาค"],
      ["ปั๊มความเร็วสูง — >3000 รอบ/นาที", "ปั๊มป้อนหม้อไอน้ำ", "0.04 ~ 0.08", "12 ~ 20 เดือน", "ความเร็ว/สมดุล"],
      ["เดินแห้ง — เป็นระยะ", "แบริ่งพัดลม", "0.01 ~ 0.03", "36 ~ 60 เดือน", "ความถี่เริ่ม-หยุด"],
      ["ปั๊มน้ำทะเลทางทะเล", "ซีลเพลาท้ายเรือ", "0.03 ~ 0.06", "18 ~ 36 เดือน", "ปริมาณทรายในน้ำทะเล"],
    ],
  },
  {
    id: "press-fit-force",
    title: "ตารางความปลอดภัยแรงกดประกอบ",
    description: "ช่วงการแทรกสอดที่ปลอดภัยและแรงกดประกอบที่สอดคล้องสำหรับการติดตั้งบูชกราไฟท์",
    headers: ["OD บูช (มม.)", "การแทรกสอดแนะนำ (มม.)", "แรงกดสูงสุด (kN)", "ความเร็วกด (มม./วินาที)", "หมายเหตุ"],
    rows: [
      ["20 ~ 40", "0.02 ~ 0.05", "5 ~ 15", "2 ~ 5", "ลบมุมนำ ≥ 15°"],
      ["40 ~ 60", "0.03 ~ 0.07", "15 ~ 30", "2 ~ 5", "ความหยาบผิวรู Ra ≤ 1.6"],
      ["60 ~ 80", "0.04 ~ 0.09", "30 ~ 50", "1 ~ 3", "ทาสารหล่อลื่นก่อนกด"],
      ["80 ~ 120", "0.05 ~ 0.12", "50 ~ 80", "1 ~ 3", "แนะนำการหดร้อนหรือกดร้อน"],
      ["120 ~ 160", "0.06 ~ 0.15", "80 ~ 120", "1 ~ 2", "ใช้การตรวจสอบแรง-ระยะทาง"],
      ["160 ~ 200", "0.08 ~ 0.18", "120 ~ 180", "0.5 ~ 1", "กดเป็นขั้น ตรวจสอบแต่ละขั้น"],
    ],
  },
  {
    id: "face-pressure",
    title: "ตารางคำนวณแรงดันจำเพาะหน้าซีล",
    description: "ช่วงแรงดันจำเพาะหน้าซีลแนะนำพร้อมแรงดันสปริงและค่าสัมประสิทธิ์แรงดันที่สอดคล้อง",
    headers: ["ประเภทซีล", "แรงดันหน้า Pc (MPa)", "แรงดันสปริง Ps (MPa)", "ค่าสัมประสิทธิ์แรงดัน K", "ช่วงความเร็ว"],
    rows: [
      ["สมดุลภายใน", "0.3 ~ 0.6", "0.08 ~ 0.15", "0.65 ~ 0.75", "< 3000 รอบ/นาที"],
      ["ไม่สมดุลภายใน", "0.4 ~ 0.8", "0.10 ~ 0.20", "0.85 ~ 0.95", "< 1500 รอบ/นาที"],
      ["สมดุลภายนอก", "0.2 ~ 0.5", "0.06 ~ 0.12", "0.60 ~ 0.70", "< 5000 รอบ/นาที"],
      ["ซีลสองหน้า", "0.3 ~ 0.7", "0.10 ~ 0.18", "0.65 ~ 0.80", "< 4000 รอบ/นาที"],
      ["ซีลยืดหยุ่นอุณหภูมิสูง", "0.15 ~ 0.35", "0.05 ~ 0.10", "0.55 ~ 0.65", "< 2000 รอบ/นาที"],
    ],
  },
  {
    id: "heat-treatment",
    title: "ตารางพารามิเตอร์อุณหภูมิการอบชุบ/การชุบกราไฟท์",
    description: "พารามิเตอร์ควบคุมอุณหภูมิสำหรับขั้นตอนการแปรรูปคาร์บอนกราไฟท์",
    headers: ["กระบวนการ", "ช่วงอุณหภูมิ", "เวลาเก็บ", "อัตราการเพิ่มอุณหภูมิ", "วัตถุประสงค์"],
    rows: [
      ["การอบแห้งชิ้นงาน", "120°C ~ 180°C", "8 ~ 24 ชม.", "≤ 30°C/ชม.", "ขจัดความชื้นจากการขึ้นรูป"],
      ["การคาร์บอไนซ์เบื้องต้น", "800°C ~ 1200°C", "4 ~ 8 ชม.", "≤ 50°C/ชม.", "เสริมความแข็งแรงด้วยคาร์บอไนซ์ฐาน"],
      ["การกราไฟท์ไทซ์", "2200°C ~ 2600°C", "2 ~ 6 ชม.", "≤ 100°C/ชม.", "ปรับปรุงความเป็นผลึก/การนำไฟฟ้า"],
      ["การบ่มชุบเรซิน", "150°C ~ 200°C", "4 ~ 12 ชม.", "≤ 20°C/ชม.", "เติมเต็มความพรุน"],
      ["การชุบโลหะ (Sb)", "600°C ~ 800°C", "2 ~ 4 ชม.", "≤ 60°C/ชม.", "การชุบโลหะสุญญากาศ"],
      ["การชุบแบ็บบิท", "300°C ~ 400°C", "1 ~ 3 ชม.", "≤ 40°C/ชม.", "การเติมโลหะแบริ่ง"],
      ["การชุบ PTFE เผาผนึก", "360°C ~ 380°C", "2 ~ 6 ชม.", "≤ 30°C/ชม.", "การเติมและเผาผนึก PTFE"],
      ["การอบอ่อนเสถียรภาพ", "200°C ~ 350°C", "6 ~ 12 ชม.", "≤ 25°C/ชม.", "คลายความเค้นจากการตัดเฉือน"],
    ],
  },
  {
    id: "troubleshooting",
    title: "ตารางแก้ปัญหาเสียงดัง ความร้อนสูง และการรั่วไหล",
    description: "อาการ สาเหตุ และแนวทางแก้ไขปัญหาการทำงานซีลทั่วไป",
    headers: ["อาการ", "สาเหตุที่เป็นไปได้", "วิธีการวินิจฉัย", "แนวทางแก้ไข"],
    rows: [
      ["เสียงแหลมสูง", "หน้าแห้งเสียดทาน / การหล่อลื่นไม่เพียงพอ", "ตรวจสอบอัตราการไหลหล่อลื่น", "เพิ่มปริมาณของเหลวหรือปรับปรุงร่องหน้า"],
      ["เสียงต่ำก้อง", "ระยะห่างบูชมากเกินไป / แกนสั่น", "วัดการเยื้องศูนย์แนวรัศมี", "ลดระยะห่างหรือยืดแกนให้ตรง"],
      ["อุณหภูมิหน้า > 80°C", "แรงดันหน้าสูงเกินไป / ระบบทำความเย็นไม่เพียงพอ", "วัดอุณหภูมิโพรงซีล", "ลดการกดสปริงหรือเพิ่มการไหลของน้ำหล่อเย็น"],
      ["น้ำมันรั่วช้า (เป็นหยด/นาที)", "ความเรียบหน้าซีลดลง / มีอนุภาคขัดฝัง", "ตรวจสอบคุณภาพการเจียรหน้า", "เจียรหน้าใหม่หรือเปลี่ยนซีลริง"],
      ["รั่วไหลมาก", "ซีลริงแตก / ติดตั้งเยื้องศูนย์", "หยุดเครื่องและตรวจสอบหน้าซีล", "เปลี่ยนซีลและปรับเทียบการติดตั้ง"],
      ["รั่วเมื่อสตาร์ทเท่านั้น", "ซีลสถิตเสื่อม / ระยะห่างเปลี่ยน", "ตรวจสอบโอริงและบูช", "เปลี่ยนซีลยืดหยุ่น"],
      ["เสียงดังเพิ่มขึ้นเรื่อยๆ", "การสึกหรอของแบริ่งสะสม", "วัดแนวโน้มระยะห่างแบริ่ง", "วางแผนเปลี่ยนบูช"],
      ["การสึกหรอหน้าผิดปกติ", "อนุภาคแข็งในสื่อ", "กรองและวิเคราะห์ตัวอย่างสื่อ", "เพิ่มตัวกรองต้นทางหรือเปลี่ยนเป็นเกรดทนทาน"],
    ],
  },
]
export const thFaqCategories: FAQCategory[] = [
  {
    category: "การเลือกซีล",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    items: [
      {
        question: "วิธีการเลือกวัสดุกราไฟท์สำหรับอุณหภูมิสูง/ต่ำ?",
        answer: "อุณหภูมิต่ำ (-50°C ~ 100°C): ใช้กราไฟท์เนื้อละเอียดปานกลางชุบเรซินฟีนอลิก ต้นทุนเหมาะสม ประสิทธิภาพ穩คง\nอุณหภูมิปานกลาง (100°C ~ 250°C): แนะนำชุบเรซินฟูแรนหรืออีพ็อกซี ทนความร้อนและทนการกัดกร่อนดีกว่าฟีนอลิก\nอุณหภูมิสูง (250°C ~ 450°C): ต้องใช้กราไฟท์ชุบโลหะแอนติโมนีหรือแบ็บบิท แนะนำเนื้อกราไฟท์อัดไอโซสแตติกเพื่อความเสถียรของขนาด\nอุณหภูมิสูงพิเศษ (450°C ~ 600°C): ใช้กราไฟท์คาร์บอไนซ์ (คาร์บอนบริสุทธิ์) ไม่มีสารชุบ อาศัยความทนทานของกราไฟท์เอง ต้องใช้ในบรรยากาศเฉื่อยหรือรีดิวซ์",
      },
      {
        question: "วิธีการเลือกการชุบสำหรับสภาวะเปียก/แห้ง?",
        answer: "การทำงานเปียกเต็มที่ (หล่อลื่นเพียงพอ): ชุบเรซินฟีนอลิกหรือฟูแรน เรซินเติมรูพรุน เพิ่มความหนาแน่น ลดการสึกหรอ\nสภาวะเปียก-แห้งสลับ (สตาร์ท/หยุดบ่อย): ต้องการการชุบที่มีคุณสมบัติหล่อลื่นตัวเองดีเยี่ยม แนะนำชุบโลหะ (แอนติโมนี/แบ็บบิท) หรือ PTFE สร้างฟิล์มหล่อลื่นถ่ายโอนเมื่อทำงานแห้ง\nการทำงานแห้งสนิท (ไม่มีการหล่อลื่น): ใช้กราไฟท์คาร์บอไนซ์หรือชุบเรซินพิเศษ ออกแบบค่า PV ต่ำ (≤ 3 MPa·m/s) พร้อมร่องหล่อลื่นตัวเอง",
      },
      {
        question: "กราไฟท์ที่ดีที่สุดสำหรับความเร็วสูง / รับน้ำหนักมาก / ความดันต่ำ?",
        answer: "ความเร็วสูง (ความเร็วเชิงเส้น > 20 m/s): กราไฟท์อัดไอโซสแตติกเนื้อละเอียดความหนาแน่นสูง คู่กับ SiC ชุบแอนติโมนีหรือคาร์บอไนซ์ เนื้อละเอียดรับประกันการสึกหรอสม่ำเสมอ\nรับน้ำหนักมาก (PV > 15 MPa·m/s): กราไฟท์ชุบแบ็บบิทหรือแอนติโมนี โลหะเติมเต็มช่วยเพิ่มกำลังอัดและการนำความร้อน ระบายความร้อนเสียดทานได้ทัน\nความดันต่ำ (ความดัน < 0.5 MPa): ใช้กราไฟท์อัดขึ้นรูปเนื้อละเอียดปานกลางชุบฟีนอลิก ประหยัดที่สุด",
      },
      {
        question: "การเลือกวัสดุแบบไม่มีน้ำมันหล่อลื่น vs แบบมีน้ำมันหล่อลื่น?",
        answer: "หล่อลื่นตัวเองไม่มีน้ำมัน: ต้องการกราไฟท์เกรดหล่อลื่นตัวเองสูง แนะนำกราไฟท์บริสุทธิ์สูงคาร์บอไนซ์หรือชุบ PTFE หน้าซีลต้องมีร่องเก็บเศษหรือร่องเกลียวเพื่อหล่อลื่นแบบของแข็งผ่านฟิล์มถ่ายโอนกราไฟท์ ค่า PV แนะนำ: 0.5 ~ 5 MPa·m/s\nหล่อลื่นด้วยน้ำมัน: กราไฟท์ชุบฟีนอลิกหรือฟูแรนมาตรฐานเพียงพอ ฟิล์มน้ำมันให้การหล่อลื่นหลัก กราไฟท์ทำหน้าที่ผิวอ่อนปรับตัวและทำงานฉุกเฉิน ค่า PV สูงถึง 10 ~ 20 MPa·m/s เนื้อกราไฟท์หยาบขึ้นเล็กน้อยช่วยเพิ่มความทนทานการสึกหรอ",
      },
    ],
  },
  {
    category: "ระยะห่างการประกอบ",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    items: [
      {
        question: "แก้ไขการสั่นสะเทือน (ระยะห่างมากเกินไป) หรือการติดขัด (แน่นเกินไป)?",
        answer: "ระยะห่างมากเกินไป: เพลาสั่นในแนวรัศมีระหว่างทำงาน ลดการติดตามหน้าซีล ทำให้รั่ว มีเสียงดัง และสึกหรอผิดปกติ วิธีแก้: ดูตารางระยะห่างมาตรฐานตามความเร็วและเส้นผ่านศูนย์กลางเพลา กลึงเจียรผิวในบูชใหม่ ตรวจสอบความตรงเพลา แก้ไขถ้าเกินพิกัด\nระยะห่างไม่พอ: ความร้อนเสียดทานระบายไม่ได้ อุณหภูมิสูงขึ้นทำให้กราไฟท์ขยายตัว ระยะห่างยิ่งลดลง เกิดวงจรป้อนกลับ จนติดขัด วิธีแก้: เพิ่มระยะห่างถึงขีดจำกัดบนที่แนะนำ ตรวจสอบการระบายความร้อนของครอบบูช ตรวจสอบอัตราการไหลของระบบทำความเย็น\nการวินิจฉัย: วัดอุณหภูมิหลังทำงาน 30 นาที > 90°C = แน่นเกินไป สั่นสะเทือนชัดเจนขณะทำงาน = หลวมเกินไป",
      },
      {
        question: "ค่าพิกัดความเสื่อยมาตรฐานตามเส้นผ่านศูนย์กลางเพลา?",
        answer: "ช่วงพิกัดความเสื่อยทั่วไป (รูบูชกราไฟท์ vs เพลาเหล็ก):\nเพลาเล็ก d ≤ 30 มม.: H7/f7 หรือ H7/g6 ระยะห่าง 0.02 ~ 0.08 มม.\nเพลากลาง 30 < d ≤ 80 มม.: H7/f7 หรือ H8/e8 ระยะห่าง 0.03 ~ 0.15 มม.\nเพลาใหญ่ 80 < d ≤ 150 มม.: H8/e8 หรือ H8/d8 ระยะห่าง 0.05 ~ 0.30 มม.\nเพลาใหญ่พิเศษ d > 150 มม.: H8/d8 หรือ H9/c9 ระยะห่าง 0.10 ~ 0.50 มม.\nหมายเหตุ: ค่าจริงต้องพิจารณาความเร็ว อุณหภูมิ และสัมประสิทธิ์การขยายตัวทางความร้อน",
      },
      {
        question: "การปรับระยะห่างสำหรับการขยายตัวทางความร้อน?",
        answer: "สัมประสิทธิ์การขยายตัวทางความร้อนของกราไฟท์ ≈ (2~4)×10⁻⁶ /°C เหล็ก ≈ 11×10⁻⁶ /°C แตกต่างอย่างมีนัยสำคัญ\nวิธีการปรับ:\n1. คำนวณการเปลี่ยนแปลงรัศมี: Δr = (αเหล็ก - αกราไฟท์) × r × ΔT\n2. บวกผลลัพธ์เข้าระยะห่างตอนเย็น\n3. ตัวอย่าง: เพลา 80 มม. อุณหภูมิเพิ่ม 150°C รัศมีเปลี่ยน ≈ (11-3)×10⁻⁶ × 40 × 150 = 0.048 มม.\n4. ระยะห่างเย็นจริง = ระยะห่างทำงาน + 0.048 มม.\n5. หมายเหตุ: ระยะห่างหดตัวเมื่อเย็นลง อุปกรณ์ที่ประกอบร้อนต้องตรวจสอบแนวหลังเย็นลง",
      },
    ],
  },
  {
    category: "การตัดเฉือนและการติดตั้ง",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    items: [
      {
        question: "ข้อควรระวังในการกลึง เจาะ และเจียรกราไฟท์?",
        answer: "การกลึง: ใช้มีดเพชรหรือคาร์ไบด์ มุมคาย 0°~5° มุมหลบ 6°~10° ความเร็วตัด 100~300 ม./นาที อัตราป้อน 0.05~0.15 มม./รอบ ตัดต่อเนื่อง หลีกเลี่ยงการป้อนกระแทกที่ทำให้ขอบแตก ใช้เครื่องดูดฝุ่นกราไฟท์\nการเจาะ: ดอกสว่าน HSS หรือคาร์ไบด์ มุมปลาย 90°~120° ความเร็ว 3000~8000 รอบ/นาที อัตราป้อน 0.02~0.08 มม./รอบ ขอบเข้าและออกง่ายต่อการแตก ต้องลบคมทั้งสองข้าง ใช้ไม้รองด้านออก\nการเจียร: ล้อเจียรซิลิคอนคาร์ไบด์ (กรวด 60~120#) ความลึก ≤ 0.01 มม./รอบ เจียรแห้งเป็นหลัก ถ้าเจียรเปียกต้องยืนยันว่ากราไฟท์ทนน้ำหล่อเย็น\nความปลอดภัย: ฝุ่นกราไฟท์นำไฟฟ้า อุปกรณ์ไฟฟ้าต้องป้องกันฝุ่น ผู้ปฏิบัติงานต้องสวมหน้ากากกันฝุ่น",
      },
      {
        question: "แก้ไขการกดเอียง ขอบแตก และร้าว?",
        answer: "การกดเอียง: ลบมุมรูไม่สม่ำเสมอหรือแรงกดเยื้องศูนย์ วิธีแก้: ตรวจสอบลบมุมรู (≥ 15°) ใช้แกนนำกด ควบคุมความเร็วกด 2~5 มม./วินาที\nขอบแตก: ความเค้นรวมที่ขอบบูชหรือการแทรกสอดมากเกินไป วิธีแก้: เพิ่มลบมุมขอบนอกบูช (C0.5~C1.0) ลดการแทรกสอด ตรวจสอบความหยาบผิวรู (≤ Ra 1.6)\nร้าว: การแทรกสอดเกินพิกัดหรือความกลมรูเกิน Spec วิธีแก้: คำนวณการแทรกสอดใหม่ วัดความกลมรู (≤ IT7) พิจารณาประกอบร้อน (ให้ความร้อนรูถึง 150~200°C ก่อนประกอบ)\nการตรวจสอบ: ใช้เครื่องกดพร้อมเซ็นเซอร์วัดแรง-ระยะทาง ตรวจสอบกราฟเรียลไทม์ หยุดทันทีถ้ากราฟผิดปกติ",
      },
      {
        question: "การควบคุมความแน่นของการประกอบแทรกสอด?",
        answer: "หลักการคำนวณการแทรกสอด:\n1. การแทรกสอดต่ำสุด: รับประกันว่าบูชไม่หลวมที่อุณหภูมิทำงานสูงสุด คิดถึงความแตกต่างการขยายตัวทางความร้อน\n2. การแทรกสอดสูงสุด: รับประกันว่าบูชกราไฟท์ไม่ถูกกดแตก ใช้ 1/5 ~ 1/3 ของกำลังอัดกราไฟท์\n3. สูตรเชิงประจักษ์: δ ≈ (0.002~0.005) × OD บูช\n\nค่าอ้างอิง:\nOD ≤ 50 มม.: แทรกสอด 0.02~0.05 มม.\nOD 50~100 มม.: แทรกสอด 0.04~0.10 มม.\nOD 100~150 มม.: แทรกสอด 0.06~0.15 มม.\nOD > 150 มม.: แทรกสอด 0.08~0.20 มม.\n\nวิธีการประกอบ:\n- แทรกสอดน้อย: กดเย็น\n- แทรกสอดปานกลาง: ให้ความร้อนรูถึง 150~200°C ประกอบร้อน\n- แทรกสอดมาก: รวมวิธีทำเย็นบูช (ไนโตรเจนเหลว -196°C) + ให้ความร้อนรู",
      },
    ],
  },
  {
    category: "ปัญหาการทำงาน",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z",
    items: [
      {
        question: "จัดการกับอุณหภูมิทำงานสูงเกินไป?",
        answer: "ลำดับการตรวจสอบ:\n1. วัดอุณหภูมิจริง — ใช้เทอร์โมมิเตอร์อินฟราเรดหรือเทอร์โมคัปเปิลที่ผนังโพรงซีล ตรวจสอบว่า > 80°C\n2. ตรวจสอบระบบทำความเย็น — อัตราการไหลของน้ำหล่อเย็นเพียงพอ? ท่ออุดตัน? ประสิทธิภาพเครื่องแลกเปลี่ยนความร้อนลดลง?\n3. ตรวจสอบแรงดันหน้าซีล — สปริงถูกอัดมากเกินไป? หน้าซีลกว้างเกินไป?\n4. ตรวจสอบระยะห่าง — ระยะห่างน้อยเกินไปทำให้ความร้อนเสียดทานเพิ่มขึ้นอย่างรวดเร็ว\n\nมาตรการฉุกเฉิน:\n- เพิ่มอัตราการไหลของน้ำหล่อเย็นเป็น 1.2~1.5 เท่าของที่แนะนำ\n- ลดความเร็วหรือแรงดัน (ชั่วคราว)\n- ตรวจสอบความสะอาดน้ำมันหล่อลื่นและไส้กรอง\n\nมาตรการระยะยาว:\n- ประเมินการเปลี่ยนเป็นกราไฟท์ชุบเกรดนำความร้อนสูงขึ้น\n- ออกแบบร่องระบายความร้อนหน้าซีลให้เหมาะสม\n- ตรวจสอบการจัดแนวเพลา",
      },
      {
        question: "แก้ไขการซึมของน้ำมัน/น้ำเล็กน้อย?",
        answer: "การรั่ว ≤ 5 หยด/นาที (ยอมรับได้):\n1. ตรวจสอบหน้าซีล — ถ้ารั่วเล็กน้อยในช่วงเบรกอิน ให้เดินเครื่องต่อ 24~48 ชม. เพื่อสังเกต\n2. ปรับสลักเกลียวฝาปิด — ขันให้สม่ำเสมอและสมมาตร แรงบิดที่ 50%~70% ของที่แนะนำ\n3. ตรวจสอบซีลรอง — โอริง/ปะเก็นเสื่อมหรือเสียหาย? โพรงซีลมีตำหนิจากหล่อ?\n\nการรั่ว > 5 หยด/นาที (ต้องหยุดเครื่อง):\n1. ตรวจสอบหน้าซีล — รอยแตกจากความร้อน รอยขีดข่วน การบิดตัว? หน้าคู่แบน?\n2. ตรวจสอบขนาดการติดตั้ง — การกดถูกต้อง? หน้าซีลตั้งฉากกับเพลา?\n3. ตรวจสอบการเปลี่ยนแปลงสภาพการทำงาน — อุณหภูมิ แรงดัน ความเร็ว เปลี่ยนแปลงเมื่อเร็วๆ นี้?\n4. เปลี่ยนซีล — ถอดและเปลี่ยนชุดซีลทั้งชุด ปรับเทียบการติดตั้งใหม่",
      },
      {
        question: "สาเหตุของเสียงดัง การสั่นสะเทือน และการสึกหรอเร็ว?",
        answer: "การวินิจฉัยเสียง:\n- เสียงแหลมสูง → แห้งเสียดทานหน้าซีล ตรวจสอบการหล่อลื่นทันที\n- เสียงต่ำก้อง → ระยะห่างแบริ่งมากเกินไปหรือชิ้นส่วนหมุนไม่สมดุล\n- เสียงคลิกเป็นระยะ → อนุภาคแปลกปลอมบนหน้าซีลหรือขอบแตกเฉพาะที่\n\nสาเหตุการสั่นสะเทือน:\n1. เพลางอหรือแบริ่งสึกหรอทำให้เยื้องศูนย์มากเกินไป\n2. ความเรียบหน้าซีลดลง > 0.9 μm\n3. การกลายเป็นไอของของเหลวทำให้หน้าซีลเปิดเป็นระยะ\n4. ค่าเบี่ยงเบนการจัดแนวติดตั้ง > 0.05 มม.\n\nสาเหตุการสึกหรอเร็ว:\n1. อนุภาคขัดสีในของเหลว (ทราย ตะกรันเชื่อม สนิม) — เพิ่มกรองต้นทาง\n2. เลือกวัสดุผิด (ความแข็งต่ำหรือเกรดชุบไม่เหมาะสม)\n3. ค่า PV จริงเกินค่า PV ที่วัสดุอนุญาต\n4. เริ่ม-หยุดบ่อยหรือทำงานแห้งนานเกินไป\n5. ความกัดกร่อนของของเหลวเกินความทนของสารชุบ",
      },
      {
        question: "แก้ไขการคาร์บอไนเซชันและการกลายเป็นผงที่อุณหภูมิสูง?",
        answer: "อาการคาร์บอไนเซชัน: ผงดำสะสมบนหน้าซีล ผิวกราไฟท์ร่วนเป็นผง สูญเสียความแข็งแรงโครงสร้าง\n\nวิเคราะห์สาเหตุ:\n1. อุณหภูมิเกินความทนของสารชุบ — เรซินฟีนอลิกเริ่มคาร์บอไนซ์ > 200°C\n2. จุดร้อนเฉพาะที่ — ความร้อนเสียดทานหน้าซีล + อุณหภูมิของเหลวเกินขีดจำกัด\n3. บรรยากาศออกซิเดชัน — ออกซิเจนออกซิไดซ์กราไฟท์ที่อุณหภูมิสูง CO/CO₂ หลุดออกทำให้โครงสร้างพรุน\n\nวิธีแก้:\n1. หยุดเครื่องทันทีและเปลี่ยน ป้องกันซีลเสียหายทั้งหมดจากการคาร์บอไนเซชัน\n2. เลือกเกรดชุบทนอุณหภูมิสูงขึ้น (ฟีนอลิก→ฟูแรน→แอนติโมนี→คาร์บอไนซ์)\n3. ควบคุมบรรยากาศ — ใช้แก๊สเฉื่อยหรือซีลไอน้ำสำหรับสภาวะอุณหภูมิสูง\n4. ปรับปรุงการทำความเย็น — เพิ่มอัตราการไหลของน้ำหล่อเย็นโพรงซีล\n5. พิจารณาออกแบบร่องหน้าซีลเพื่อปรับปรุงการหล่อลื่นและการระบายความร้อน\n\nการป้องกัน: รักษาระยะปลอดภัยอย่างน้อย 50°C ต่ำกว่าอุณหภูมิที่กำหนด ติดตั้งหัววัดอุณหภูมิ",
      },
    ],
  },
  {
    category: "การบำรุงรักษา",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    items: [
      {
        question: "ขั้นตอนการเบรกอินเมื่อเริ่มเดินเครื่องครั้งแรก?",
        answer: "วัตถุประสงค์: ให้หน้าซีลปรับตัวเข้าหากัน สร้างฟิล์มของเหลวและรูปแบบการสึกหรอที่穩คง\n\nขั้นตอนเบรกอิน:\n1. ก่อนเริ่ม: ตรวจสอบโพรงซีลเต็มไปด้วยของเหลว ไล่อากาศ หมุนมือ 2~3 รอบ ยืนยันการเคลื่อนที่อิสระ ไม่มีเสียง\n2. ระยะที่ 1 (0~30 นาที): เดินเครื่องที่ 30%~50% ของความเร็วที่กำหนด ติดตามการรั่ว อุณหภูมิ การสั่นสะเทือน อนุญาตให้ซึมเล็กน้อย\n3. ระยะที่ 2 (30~120 นาที): ค่อยๆ เพิ่มเป็น 70%~80% ของความเร็วที่กำหนด อุณหภูมิควรคงที่ ≤ 60°C\n4. ระยะที่ 3 (120~240 นาที): เดินเครื่องเต็มความเร็ว หลังจากอุณหภูมิคงที่ ตรวจสอบการรั่วในเกณฑ์ที่ยอมรับได้\n5. ช่วงเบรกอิน (72 ชม. แรก): รักษาการทำงานต่อเนื่องถ้าเป็นไปได้\n\nถ้าอุณหภูมิเกิน 80°C หรือการรั่วเพิ่มขึ้นมากระหว่างเบรกอิน ให้หยุดและตรวจสอบทันที",
      },
      {
        question: "การเก็บรักษาสำหรับการหยุดเดินเครื่องระยะยาว?",
        answer: "ระยะสั้น (≤ 7 วัน):\n1. รักษาโพรงซีลให้เต็มไปด้วยของเหลว ป้องกันหน้าซีลแห้ง\n2. หมุนมือ 1~2 รอบทุกสัปดาห์ ป้องกันหน้าซีลติด\n3. ปิดวาล์วเข้า/ออก\n\nระยะกลาง (7~90 วัน):\n1. ระบายของเหลว ล้างด้วยน้ำสะอาดหรือตัวทำละลาย\n2. ทาจาระบีกันสนิมหรือสารป้องกันพิเศษที่หน้าซีล\n3. เคลือบผิวด้านนอกบูชด้วยน้ำมันกันสนิม\n4. อัดไนโตรเจนหรือใส่สารดูดความชื้นในโพรงซีล\n5. หมุนมือทุกสองสัปดาห์\n\nระยะยาว (> 90 วัน):\n1. ถอดชิ้นส่วนซีล เก็บแยกต่างหาก\n2. ทำความสะอาดและห่อด้วยกระดาษกันสนิม\n3. สภาพแวดล้อมเก็บ: 5~35°C ความชื้น ≤ 60% หลีกเลี่ยงแสงแดด\n4. หลีกเลี่ยงสารกรด/ด่าง\n5. ตรวจสอบซีลว่ามีการเสื่อมสภาพหรือเสียรูปก่อนติดตั้งใหม่",
      },
      {
        question: "เกณฑ์การเปลี่ยนเมื่อสึกหรอถึงขีดจำกัด?",
        answer: "ซีลริง:\n1. ความลึกการสึกของหน้า > 1.0 มม. หรือข้อบกพร่อง > 15% ของความกว้างหน้าซีล\n2. รอยแตกทะลุหรือแตกบิ่น\n3. ความเรียบหลังการเจียร > 0.9 μm (ประเมินใหม่หลังเจียร)\n4. อายุการใช้งานเหลือไม่เพียงพอถึงรอบบำรุงรักษาถัดไป\n\nบูช/แบริ่ง:\n1. การสึกของรู > 2~3 เท่าของระยะห่างเริ่มต้น\n2. ขั้นสึกหรือร่องบน OD\n3. ความหนาลดลง > 20% ของเดิม\n4. การสั่นสะเทือนสูงกว่าเริ่มต้น 50%+\n\nขั้นตอนการประเมิน:\n1. บันทึกขนาดเริ่มต้นและพารามิเตอร์การทำงาน\n2. วัดแนวโน้มการสึกและการสั่นสะเทือนเป็นระยะ (ทุก 3~6 เดือน)\n3. วางแผนเปลี่ยนก่อนเมื่ออัตราการสึกเพิ่มขึ้นกะทันหัน\n4. เตรียมอะไหล่เมื่อถึง 80% ของอายุการใช้งานตามทฤษฎี",
      },
    ],
  },
  {
    category: "สั่งทำพิเศษ",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    items: [
      {
        question: "ข้อควรพิจารณาในการทำแม่พิมพ์สำหรับชิ้นส่วนกราไฟท์สั่งทำ?",
        answer: "สามปัจจัยประเมิน:\n1. ปริมาณและต้นทุน — ค่าแม่พิมพ์ typically 3,000~15,000 หยวน ปริมาณน้อย (< 50 ชิ้น): แนะนำกลึง > 500 ชิ้น: พิจารณาอัดขึ้นรูป\n2. ความแม่นยำ — พิกัดอัดขึ้นรูป ±0.5% กลึงได้ ±0.05 มม.\n3. รูปทรง — รูปทรงซับซ้อน (รูเจาะลึก L/D > 5 ผนังบาง < 3 มม.): ชิ้นงานอัด + กลึงเก็บ\n\nข้อควรระวังออกแบบแม่พิมพ์:\n- มุมถอด ≥ 1°~3° (สัมพันธ์กับความสูง)\n- หลีกเลี่ยงมุมคมและการเปลี่ยนหน้าตัดกะทันหัน (รัศมีต่ำสุด R ≥ 2 มม.)\n- รักษาความสมมาตรเพื่อลดการรับน้ำหนักไม่สมดุล\n- เผื่อการตัดเฉือน 0.5~1.0 มม. (สำหรับผิวสำเร็จ)\n- พิจารณาทิศทางการอัดที่มีผลต่อความสม่ำเสมอความหนาแน่น",
      },
      {
        question: "มาตรฐานการออกแบบร่องน้ำมัน ร่องหล่อลื่น และบ่าติดตั้ง?",
        answer: "การออกแบบร่องน้ำมัน/หล่อลื่น:\n- ความลึก: 0.3~1.0 มม. (ตามเส้นผ่านศูนย์กลางเพลาและค่า PV)\n- ความกว้าง: 1.0~3.0 มม.\n- ประเภท: เกลียว (หมุนทางเดียว), รูปตัว V (หมุนสองทาง), ร่องตรง (ความเร็วต่ำ)\n- ระยะห่าง: 5~15 มม.\n- ระยะจากขอบ: ≥ 2 มม.\n\nการออกแบบบ่า:\n- ความสูง: 1~3 มม. (ตามความหนาผนัง)\n- มุม: 30°~45°\n- รัศมีโค้ง: R ≥ 0.5 มม.\n- หลีกเลี่ยงความเค้นรวมที่โคนบ่า\n\nการระบุพิกัด:\n- ตำแหน่งร่อง: ±0.2 มม.\n- ความลึกร่อง: +0.1 มม. / -0 มม.\n- ความเยื้องศูนย์ของบ่า: ≤ 0.05 มม.",
      },
      {
        question: "การกลึงด่วนสั่งทำพร้อมรับประกันคุณภาพ?",
        answer: "ขั้นตอนการด่วน:\n1. ยืนยันแบบ — โมเดล 3D ตรวจสอบโครงสร้าง แบบวิศวกรรม 2D ระบุพิกัดสำคัญ\n2. เลือกชิ้นงาน — ใช้เกรดและขนาดที่มีในสต็อก ลดระยะเวลาจัดซื้อ\n3. เส้นทางกระบวนการ — จัดลำดับอย่างมีประสิทธิภาพ: กลึงหยาบ→กลึงเก็บ→เจาะ→เจียร ลดจำนวนการจับยึด\n4. อุปกรณ์ — เครื่อง CNC ความแม่นยำสูง (ความแม่นยำตำแหน่ง ≤ 0.005 มม.) + มีดเพชร\n\nระดับความแม่นยำ:\n- มาตรฐาน ±0.05 มม.: กลึงทั่วไป\n- ละเอียด ±0.02 มม.: ต้องเจียร\n- ละเอียดสูง ±0.01 มม.: เครื่องเจียร CNC + CMM\n- ความเรียบ 0.9 μm: ต้องลับเลีย\n\nระยะเวลาการด่วน (บูช/ซีลริงธรรมดา):\n- ตามแบบ: 3~5 วันทำการ\n- รวมจัดซื้อวัสดุ: 7~10 วันทำการ\n- รวมทำแม่พิมพ์: 15~25 วันทำการ",
      },
    ],
  },
]
export const thFormulas: Formula[] = [
  {
    name: "สูตรคำนวณระยะห่างบุชชิ่งทั่วไป",
    formula: "C = C₀ + α₁ × d × ΔT₁ - α₂ × d × ΔT₂ + K × d × n",
    description: "การคำนวณระยะห่างโดยคำนึงถึงการขยายตัวเนื่องจากความร้อน แรงเหวี่ยงหนีศูนย์กลาง และผลกระทบจากความเร็ว",
    variables: [
      { symbol: "C", meaning: "ระยะห่างขณะทำงาน (มม.)" },
      { symbol: "C₀", meaning: "ระยะห่างขณะประกอบเริ่มต้น (มม.) โดยทั่วไป 0.02~0.08 มม." },
      { symbol: "α₁", meaning: "ค่าสัมประสิทธิ์การขยายตัวทางความร้อนของวัสดุโครงยึด (เหล็ก ≈ 11×10⁻⁶ /°C)" },
      { symbol: "α₂", meaning: "ค่าสัมประสิทธิ์การขยายตัวทางความร้อนของกราไฟต์ (≈ 2~4×10⁻⁶ /°C)" },
      { symbol: "d", meaning: "เส้นผ่านศูนย์กลางเพลา (มม.)" },
      { symbol: "ΔT₁", meaning: "อุณหภูมิโครงยึดที่เพิ่มขึ้น (°C)" },
      { symbol: "ΔT₂", meaning: "อุณหภูมิกราไฟต์ที่เพิ่มขึ้น (°C)" },
      { symbol: "K", meaning: "สัมประสิทธิ์แรงเหวี่ยงหนีศูนย์กลาง (≈ 0.001~0.003)" },
      { symbol: "n", meaning: "ความเร็วรอบ (รอบ/นาที)" },
    ],
    note: "วิศวกรรมแบบย่อ: C = C₀ + (α₁ - α₂) × d × ΔT โดยทั่วไป: 0.15~0.25 มม. สำหรับปั๊มน้ำแรงดันต่ำ, 0.30~0.50 มม. สำหรับปั๊มอุณหภูมิสูง",
  },
  {
    name: "สูตรขีดจำกัดความเร็วเชิงเส้น",
    formula: "V = π × d × n / 60000",
    description: "การคำนวณความเร็วเชิงเส้นเฉลี่ยของหน้าซีลสำหรับการประเมินขีดจำกัด PV และการเลือกวัสดุ",
    variables: [
      { symbol: "V", meaning: "ความเร็วเชิงเส้น (ม./วินาที)" },
      { symbol: "d", meaning: "เส้นผ่านศูนย์กลางเฉลี่ยของหน้าซีล (มม.)" },
      { symbol: "n", meaning: "ความเร็วรอบ (รอบ/นาที)" },
      { symbol: "π", meaning: "พาย (≈ 3.1416)" },
    ],
    note: "ขีดจำกัดที่แนะนำสำหรับกราไฟต์คาร์บอน: ชนิดอัดเรซิน ≤ 20 ม./วินาที, ชนิดอัดโลหะ ≤ 25 ม./วินาที, ชนิดคาร์บอไนซ์ ≤ 30 ม./วินาที สูงกว่าขีดจำกัดนี้ ควรออกแบบซีลแบบสมดุลหรือเพิ่มการระบายความร้อน",
  },
  {
    name: "สูตรความดันจำเพาะหน้าปลาย",
    formula: "Pc = Ps + (B × K) × P",
    description: "แรงปิดต่อหน่วยพื้นที่บนหน้าซีล ใช้กำหนดประสิทธิภาพการซีลและอายุการใช้งาน",
    variables: [
      { symbol: "Pc", meaning: "ความดันจำเพาะหน้าซีล (MPa)" },
      { symbol: "Ps", meaning: "ความดันจำเพาะสปริง (MPa) โดยทั่วไป 0.08~0.20 MPa" },
      { symbol: "B", meaning: "อัตราส่วนสมดุล (แบบสมดุล 0.65~0.85, ไม่สมดุล 0.90~1.10)" },
      { symbol: "K", meaning: "สัมประสิทธิ์ความดัน (≈ 0.5~0.7)" },
      { symbol: "P", meaning: "ความดันตัวกลาง (MPa)" },
    ],
    note: "ช่วงความดันหน้าซีลที่แนะนำ: 0.3~0.8 MPa ต่ำเกินไป: เสี่ยงต่อการรั่วซึม สูงเกินไป: สร้างความร้อนและเร่งการสึกหรอ กราไฟต์คาร์บอนกับ SiC: ใช้ค่าต่ำ กราไฟต์คาร์บอนกับโลหะ: ใช้ค่าสูง",
  },
  {
    name: "สูตรชดเชยการขยายตัวเนื่องจากความร้อน",
    formula: "ΔL = α × L × ΔT",
    description: "การคำนวณการเปลี่ยนแปลงขนาดของชิ้นส่วนกราไฟต์เนื่องจากการเปลี่ยนแปลงอุณหภูมิ ใช้สำหรับปรับระยะห่างและการออกแบบหดรัด",
    variables: [
      { symbol: "ΔL", meaning: "การเปลี่ยนแปลงขนาด (มม.)" },
      { symbol: "α", meaning: "ค่าสัมประสิทธิ์การขยายตัวทางความร้อนของวัสดุ (/°C)" },
      { symbol: "L", meaning: "ขนาดเดิม (มม.)" },
      { symbol: "ΔT", meaning: "การเปลี่ยนแปลงอุณหภูมิ (°C) = อุณหภูมิทำงาน - อุณหภูมิขณะติดตั้ง" },
    ],
    note: "กราไฟต์ α ≈ (2.0~4.5)×10⁻⁶ /°C (แตกต่างกันตามเกรดและทิศทางการขึ้นรูป) เหล็ก α ≈ 11×10⁻⁶ /°C สำหรับการออกแบบหดรัด ให้คำนวณทั้งการขยายตัวของโครงยึดและการขยายตัวของบุชชิ่งกราไฟต์ ผลต่างคือการเปลี่ยนแปลงระยะสวมจริง",
  },
  {
    name: "สูตรความปลอดภัยของระยะสวมกด",
    formula: "σ_max = (δ × E) / (d × (1 - μ²)) ≤ [σ] / S",
    description: "ตรวจสอบว่าความเค้นสูงสุดจากระยะสวมที่เลือกไม่เกินค่าความเค้นที่วัสดุยอมให้",
    variables: [
      { symbol: "σ_max", meaning: "ความเค้นดึงสูงสุดในแนวเส้นรอบวง (MPa)" },
      { symbol: "δ", meaning: "ระยะสวม (มม.)" },
      { symbol: "E", meaning: "มอดุลัสยืดหยุ่นของกราไฟต์ (≈ 8000~12000 MPa)" },
      { symbol: "d", meaning: "เส้นผ่านศูนย์กลางภายนอกบุชชิ่ง (มม.)" },
      { symbol: "μ", meaning: "อัตราส่วนปัวซองของกราไฟต์ (≈ 0.15~0.25)" },
      { symbol: "[σ]", meaning: "ความเค้นที่ยอมให้ของกราไฟต์ (ความแข็งแรงดึง / ตัวประกอบความปลอดภัย)" },
      { symbol: "S", meaning: "ตัวประกอบความปลอดภัย (แนะนำ 3~5)" },
    ],
    note: "ความแข็งแรงดึงของกราไฟต์คาร์บอนประมาณ 1/3~1/4 ของความแข็งแรงอัด ควรใช้ค่าความแข็งแรงดึง (ไม่ใช่ค่าอัด) ในการคำนวณเสมอ ตัวประกอบความปลอดภัย ≥ 3 ระยะสวมที่แนะนำ: ≤ 0.5%~1.0% ของความหนาผนังกราไฟต์",
  },
]

// ============================================================
// RUSSIAN (ru) - Fallback to English
// ============================================================

export const ruCoreTables: CoreTable[] = [
  {
    id: "impregnation-selection",
    title: "Таблица быстрого выбора пропитки",
    description: "Выбор оптимального типа пропитки в зависимости от рабочей среды и температуры",
    headers: ["Тип пропитки", "Диапазон температур", "Коррозионная стойкость", "Применимые среды", "Типичные применения"],
    rows: [
      ["Фенольная смола", "-50°C ~ +200°C", "Хорошая", "Вода, масло, слабые кислоты/щелочи", "Уплотнения насосов общего назначения, водяные насосы"],
      ["Фурановая смола", "-50°C ~ +250°C", "Отличная", "Сильные кислоты, щелочи, органические растворители", "Химические реакторы, травильное оборудование"],
      ["Эпоксидная смола", "-50°C ~ +180°C", "Хорошая", "Вода, масло, щелочи", "Пищевое оборудование, фармацевтика"],
      ["Сурьма", "-100°C ~ +450°C", "Умеренная", "Высокотемпературное масло, пар", "Высокотемпературные насосы, турбинные уплотнения"],
      ["Баббит", "-100°C ~ +350°C", "Умеренная", "Высокотемпературное масло, тяжелые нагрузки", "Тяжелые втулки, крупные подшипники"],
      ["Карбонизация (чистый углерод)", "-200°C ~ +600°C", "Отличная", "Почти все среды (включая вакуум)", "Высокотемпературные печи, полупроводниковое оборудование"],
      ["Пропитка PTFE", "-100°C ~ +250°C", "Отличная", "Сильноагрессивные среды, пищевые", "Фармацевтика, химия, пищевая"],
    ],
  },
  {
    id: "sleeve-clearance",
    title: "Стандартный расчет зазоров втулки",
    description: "Рекомендуемые значения зазоров между графитовыми втулками и стальными валами при различных диаметрах и скоростях",
    headers: ["Диаметр вала (мм)", "Скорость < 500 об/мин", "Скорость 500~1500 об/мин", "Скорость 1500~3000 об/мин", "Скорость > 3000 об/мин"],
    rows: [
      ["10 ~ 25", "0,08 ~ 0,12 мм", "0,10 ~ 0,15 мм", "0,15 ~ 0,20 мм", "0,20 ~ 0,30 мм"],
      ["25 ~ 50", "0,10 ~ 0,15 мм", "0,15 ~ 0,20 мм", "0,20 ~ 0,30 мм", "0,30 ~ 0,40 мм"],
      ["50 ~ 80", "0,12 ~ 0,18 мм", "0,18 ~ 0,25 мм", "0,25 ~ 0,35 мм", "0,35 ~ 0,50 мм"],
      ["80 ~ 120", "0,15 ~ 0,22 мм", "0,22 ~ 0,30 мм", "0,30 ~ 0,42 мм", "0,42 ~ 0,60 мм"],
      ["120 ~ 200", "0,18 ~ 0,28 мм", "0,25 ~ 0,38 мм", "0,35 ~ 0,50 мм", "0,50 ~ 0,70 мм"],
    ],
  },
  {
    id: "material-comparison",
    title: "Сравнение свойств графитовых материалов",
    description: "Физико-механические свойства углерод-графитовых материалов по методу формования",
    headers: ["Свойство", "Прессованный графит", "Изостатический графит", "Мелкозернистый графит", "Крупнозернистый графит", "Высокочистый графит"],
    rows: [
      ["Насыпная плотность (г/см³)", "1,70 ~ 1,80", "1,78 ~ 1,90", "1,65 ~ 1,75", "1,55 ~ 1,65", "1,70 ~ 1,85"],
      ["Прочность на сжатие (МПа)", "≥ 180", "≥ 200", "≥ 140", "≥ 100", "≥ 160"],
      ["Прочность на изгиб (МПа)", "≥ 60", "≥ 70", "≥ 45", "≥ 35", "≥ 55"],
      ["Твердость по Шору (HS)", "60 ~ 80", "65 ~ 85", "50 ~ 65", "40 ~ 55", "55 ~ 75"],
      ["Пористость (%)", "8 ~ 15", "5 ~ 12", "12 ~ 18", "15 ~ 22", "10 ~ 15"],
      ["Макс. температура (°C)", "400", "500", "350", "300", "600"],
      ["Типичное применение", "Уплотнительные кольца, втулки", "Премиум механические уплотнения", "Подшипники общего назначения", "Тихоходные подшипники", "Высокие температуры, вакуум"],
    ],
  },
  {
    id: "medium-adaptation",
    title: "Выбор материала по типу среды",
    description: "Рекомендации по марке графита и пропитке в зависимости от уплотняемой среды",
    headers: ["Тип среды", "Рекомендуемая основа графита", "Рекомендуемая пропитка", "Макс. температура", "Примечания"],
    rows: [
      ["Чистая / пресная вода", "Среднемелкозернистый графит", "Фенольная смола", "200°C", "Избегать песчаных сред"],
      ["Морская вода", "Мелкозернистый высокой плотности", "Фурановая смола", "180°C", "Требуется хлоридостойкая пропитка"],
      ["Минеральное / гидравлическое масло", "Среднезернистый графит", "Фенольная смола", "200°C", "Уменьшить зазор для маловязкого масла"],
      ["Сильная кислота (H₂SO₄, HCl)", "Высокочистый мелкозернистый", "Фурановая смола", "250°C", "Избегать сурьмяной пропитки с кислотами"],
      ["Сильная щелочь (NaOH, KOH)", "Мелкозернистый графит", "Фурановая смола", "200°C", "Фенольная смола не рекомендуется"],
      ["Органические растворители", "Мелкозернистый графит", "Фуран / PTFE", "200°C", "Растворитель не должен растворять пропитку"],
      ["Высокотемпературный пар", "Мелкозернистый высокой плотности", "Карбонизация / Сурьма", "600°C", "Следить за окислением"],
      ["Высокотемпературный газ", "Высокочистый графит", "Карбонизация", "600°C", "Ограничить кислород < 1%"],
      ["Вакуум", "Изостатический высокой плотности", "Карбонизация", "500°C", "Низкое газовыделение"],
      ["Пищевая / фармацевтическая", "Мелкозернистый графит", "Пищевая смола", "180°C", "Сертификат FDA/EU"],
    ],
  },
  {
    id: "temp-speed-limits",
    title: "Предельные параметры температуры и скорости",
    description: "Эксплуатационные пределы различных комбинаций материалов при совместном воздействии температуры и скорости",
    headers: ["Комбинация материалов", "Макс. температура", "Макс. линейная скорость (м/с)", "Предел PV (МПа·м/с)", "Смазка"],
    rows: [
      ["Углеродный графит vs SiC", "200°C", "25", "18", "Масляная/водяная смазка"],
      ["Углеродный графит vs нерж. сталь", "180°C", "15", "10", "Масляная смазка"],
      ["Графит с сурьмой vs SiC", "450°C", "20", "15", "Масляная/самосмазка"],
      ["Карбонизированный графит vs SiC", "600°C", "30", "22", "Самосмазка"],
      ["Углеродный графит vs керамика", "250°C", "20", "14", "Водяная/масляная смазка"],
      ["Баббитовый графит vs сталь", "350°C", "12", "8", "Масляная смазка"],
      ["Графит vs графит", "300°C", "8", "5", "Самосмазка"],
    ],
  },
  {
    id: "wear-life",
    title: "Справочная таблица износа и срока службы",
    description: "Ожидаемая скорость износа и срок службы углерод-графитовых уплотнений в различных условиях эксплуатации",
    headers: ["Условия эксплуатации", "Типичное применение", "Месячный износ (мм)", "Расчетный срок службы", "Ключевые факторы"],
    rows: [
      ["Насос чистой воды — непрерывно", "Уплотнение центробежного насоса", "0,02 ~ 0,05", "24 ~ 36 мес.", "Чистота среды"],
      ["Химический насос — агрессивно", "Уплотнение мешалки реактора", "0,05 ~ 0,10", "12 ~ 24 мес.", "Агрессивность среды"],
      ["Высокотемпературный масляный насос — 250°C", "Уплотнение горячего масляного насоса", "0,03 ~ 0,08", "18 ~ 30 мес.", "Стабильность температуры"],
      ["Насос сточных вод — частицы", "Уплотнение канализационного насоса", "0,10 ~ 0,20", "6 ~ 12 мес.", "Твердость/концентрация частиц"],
      ["Высокоскоростной насос — >3000 об/мин", "Питательный насос котла", "0,04 ~ 0,08", "12 ~ 20 мес.", "Скорость/баланс"],
      ["Сухой ход — периодический", "Подшипник вентилятора", "0,01 ~ 0,03", "36 ~ 60 мес.", "Частота пусков/остановов"],
      ["Морской насос забортной воды", "Уплотнение гребного вала", "0,03 ~ 0,06", "18 ~ 36 мес.", "Содержание песка в воде"],
    ],
  },
  {
    id: "press-fit-force",
    title: "Таблица безопасности усилия запрессовки",
    description: "Безопасный диапазон натяга и соответствующее усилие запрессовки для монтажа графитовых втулок",
    headers: ["Наружный диаметр втулки (мм)", "Рекомендуемый натяг (мм)", "Макс. усилие запрессовки (кН)", "Скорость запрессовки (мм/с)", "Примечания"],
    rows: [
      ["20 ~ 40", "0,02 ~ 0,05", "5 ~ 15", "2 ~ 5", "Направляющая фаска ≥ 15°"],
      ["40 ~ 60", "0,03 ~ 0,07", "15 ~ 30", "2 ~ 5", "Шероховатость отверстия Ra ≤ 1,6"],
      ["60 ~ 80", "0,04 ~ 0,09", "30 ~ 50", "1 ~ 3", "Нанести смазку перед запрессовкой"],
      ["80 ~ 120", "0,05 ~ 0,12", "50 ~ 80", "1 ~ 3", "Рекомендуется горячая/холодная посадка"],
      ["120 ~ 160", "0,06 ~ 0,15", "80 ~ 120", "1 ~ 2", "Использовать контроль усилия-перемещения"],
      ["160 ~ 200", "0,08 ~ 0,18", "120 ~ 180", "0,5 ~ 1", "Поэтапная запрессовка"],
    ],
  },
  {
    id: "face-pressure",
    title: "Расчет удельного давления на торец",
    description: "Рекомендуемые диапазоны удельного давления на торец с соответствующим давлением пружины и коэффициентами",
    headers: ["Тип уплотнения", "Давление на торец Pc (МПа)", "Давление пружины Ps (МПа)", "Коэфф. давления K", "Диапазон скоростей"],
    rows: [
      ["Внутреннее балансированное", "0,3 ~ 0,6", "0,08 ~ 0,15", "0,65 ~ 0,75", "< 3000 об/мин"],
      ["Внутреннее небалансированное", "0,4 ~ 0,8", "0,10 ~ 0,20", "0,85 ~ 0,95", "< 1500 об/мин"],
      ["Наружное балансированное", "0,2 ~ 0,5", "0,06 ~ 0,12", "0,60 ~ 0,70", "< 5000 об/мин"],
      ["Двухстороннее уплотнение", "0,3 ~ 0,7", "0,10 ~ 0,18", "0,65 ~ 0,80", "< 4000 об/мин"],
      ["Высокотемпературное гибкое", "0,15 ~ 0,35", "0,05 ~ 0,10", "0,55 ~ 0,65", "< 2000 об/мин"],
    ],
  },
  {
    id: "heat-treatment",
    title: "Параметры термообработки и пропитки графита",
    description: "Параметры контроля температуры для этапов обработки углерод-графита",
    headers: ["Процесс", "Диапазон температур", "Время выдержки", "Скорость нагрева", "Цель"],
    rows: [
      ["Сушка заготовки", "120°C ~ 180°C", "8 ~ 24 ч", "≤ 30°C/ч", "Удаление формовочной влаги"],
      ["Карбонизация предварительная", "800°C ~ 1200°C", "4 ~ 8 ч", "≤ 50°C/ч", "Упрочнение основы карбонизацией"],
      ["Графитизация", "2200°C ~ 2600°C", "2 ~ 6 ч", "≤ 100°C/ч", "Повышение кристалличности/проводимости"],
      ["Отверждение смоляной пропитки", "150°C ~ 200°C", "4 ~ 12 ч", "≤ 20°C/ч", "Заполнение пор"],
      ["Металлическая пропитка (Sb)", "600°C ~ 800°C", "2 ~ 4 ч", "≤ 60°C/ч", "Вакуумная пропитка металлом"],
      ["Баббитовая пропитка", "300°C ~ 400°C", "1 ~ 3 ч", "≤ 40°C/ч", "Заполнение подшипниковым сплавом"],
      ["Пропитка PTFE спекание", "360°C ~ 380°C", "2 ~ 6 ч", "≤ 30°C/ч", "Заполнение и спекание PTFE"],
      ["Стабилизирующий отжиг", "200°C ~ 350°C", "6 ~ 12 ч", "≤ 25°C/ч", "Снятие напряжения после обработки"],
    ],
  },
  {
    id: "troubleshooting",
    title: "Таблица устранения шума, перегрева и утечек",
    description: "Симптомы, причины и решения типичных неисправностей уплотнений",
    headers: ["Симптом", "Возможная причина", "Метод диагностики", "Решение"],
    rows: [
      ["Высокочастотный визг", "Сухое трение торца / недостаточная смазка", "Проверить расход смазки", "Увеличить подачу жидкости или улучшить канавки торца"],
      ["Низкочастотный гул", "Слишком большой зазор втулки / вибрация вала", "Измерить радиальное биение", "Уменьшить зазор или выправить вал"],
      ["Температура торца > 80°C", "Слишком высокое давление на торец / недостаточное охлаждение", "Измерить температуру камеры", "Уменьшить сжатие пружины или увеличить поток охлаждения"],
      ["Медленная утечка масла (капли/мин)", "Ухудшение плоскостности торца / внедрение абразива", "Проверить качество притирки торца", "Перепритереть или заменить кольцо"],
      ["Значительная утечка", "Трещина кольца / перекос при монтаже", "Остановить и осмотреть торец", "Заменить уплотнение и откалибровать монтаж"],
      ["Утечка только при пуске", "Старение статического уплотнения / изменение зазора", "Проверить O-кольцо и втулку", "Заменить эластичное уплотнение"],
      ["Постепенно усиливающийся шум", "Накопление износа подшипника", "Измерить тренд зазора подшипника", "Спланировать замену втулки"],
      ["Аномальный износ торца", "Твердые частицы в среде", "Отфильтровать и проанализировать пробу среды", "Добавить фильтр на входе или перейти на износостойкую марку"],
    ],
  },
]
export const ruFaqCategories: FAQCategory[] = [
  {
    category: "Выбор уплотнения",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    items: [
      {
        question: "Как выбрать материал графита для высоких/низких температур?",
        answer: "Низкая температура (-50°C ~ 100°C): Используйте средне-мелкозернистый графит с пропиткой фенольной смолой. Экономично, стабильные характеристики.\nСредняя температура (100°C ~ 250°C): Рекомендуется пропитка фурановой или эпоксидной смолой. Лучшая термо- и коррозионная стойкость, чем у фенольной.\nВысокая температура (250°C ~ 450°C): Требуется графит с пропиткой сурьмой или баббитом. Основа из изостатического графита для стабильности размеров.\nСверхвысокая температура (450°C ~ 600°C): Используйте карбонизированный (чистый углеродный) графит без пропитки. Требуется инертная или восстановительная атмосфера.",
      },
      {
        question: "Как выбрать пропитку для влажных/сухих условий?",
        answer: "Полностью влажная работа (достаточная смазка): Пропитка фенольной или фурановой смолой. Смола заполняет поры, повышает плотность, снижает износ.\nЦиклы влажно-сухо (частые пуски/остановы): Требуется пропитка с отличной самосмазываемостью. Рекомендуется металлическая пропитка (сурьма/баббит) или PTFE.\nПолностью сухая работа (без смазки): Карбонизированный графит или специальная смоляная пропитка. Проектируйте с низким PV (≤ 3 МПа·м/с) и канавками самосмазывания.",
      },
      {
        question: "Лучший графит для высокой скорости / тяжелой нагрузки / низкого давления?",
        answer: "Высокая скорость (линейная скорость > 20 м/с): Изостатический мелкозернистый графит высокой плотности в паре с SiC. Пропитка сурьмой или карбонизация.\nТяжелая нагрузка (PV > 15 МПа·м/с): Графит с пропиткой баббитом или сурьмой. Металлическое заполнение значительно повышает прочность и теплопроводность.\nНизкое давление (давление среды < 0,5 МПа): Литой среднезернистый графит с фенольной пропиткой. Наиболее экономичный вариант.",
      },
      {
        question: "Разница в выборе материалов для бесмасляной и масляной смазки?",
        answer: "Бесмасляная самосмазка: Требуется графит высокой степени самосмазываемости. Рекомендуется карбонизированный высокочистый графит или с пропиткой PTFE. На поверхности уплотнения необходимы канавки для сбора частиц. Диапазон PV: 0,5 ~ 5 МПа·м/с.\nМасляная смазка: Достаточно стандартного графита с фенольной или фурановой пропиткой. Масляная пленка обеспечивает основную смазку. PV до 10 ~ 20 МПа·м/с.",
      },
    ],
  },
  {
    category: "Сборочные зазоры",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    items: [
      {
        question: "Как устранить вибрацию (большой зазор) или заклинивание (слишком туго)?",
        answer: "Слишком большой зазор: Вал радиально вибрирует при работе, ухудшается слежение торца уплотнения, увеличивается утечка, шум и износ. Решение: Сверьтесь с таблицей стандартных зазоров, переработайте отверстие втулки, проверьте прямолинейность вала.\nНедостаточный зазор: Теплота трения не рассеивается, температура растет, графит расширяется, зазор уменьшается, создавая положительную обратную связь до заклинивания. Решение: Увеличьте зазор до верхнего рекомендуемого предела, проверьте охлаждение корпуса втулки.\nДиагностика: Измерьте температуру через 30 мин работы. > 90°C = слишком туго. Заметное биение при работе = слишком свободно.",
      },
      {
        question: "Стандартные посадки по диаметру вала?",
        answer: "Стандартные поля допусков (отверстие графитовой втулки / стальной вал):\nМалый вал d ≤ 30 мм: H7/f7 или H7/g6, зазор 0,02~0,08 мм\nСредний вал 30 < d ≤ 80 мм: H7/f7 или H8/e8, зазор 0,03~0,15 мм\nБольшой вал 80 < d ≤ 150 мм: H8/e8 или H8/d8, зазор 0,05~0,30 мм\nОчень большой вал d > 150 мм: H8/d8 или H9/c9, зазор 0,10~0,50 мм\nПримечание: Фактические значения зависят от скорости, температуры и коэффициентов теплового расширения.",
      },
      {
        question: "Корректировка зазора на тепловое расширение?",
        answer: "КТР графита ≈ (2~4)×10⁻⁶ /°C, стали ≈ 11×10⁻⁶ /°C. Разница значительна.\nМетод коррекции:\n1. Рассчитайте изменение радиуса: Δr = (αстали - αграфита) × r × ΔT\n2. Прибавьте к холодному зазору\n3. Пример: Вал 80 мм, нагрев 150°C, изменение радиуса ≈ (11-3)×10⁻⁶ × 40 × 150 = 0,048 мм\n4. Фактический холодный зазор = рабочий зазор + 0,048 мм\n5. Примечание: Зазор уменьшается при охлаждении. Оборудование, собранное горячим, требует проверки соосности после остывания.",
      },
    ],
  },
  {
    category: "Механическая обработка и монтаж",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    items: [
      {
        question: "Меры предосторожности при точении, сверлении и шлифовке графита?",
        answer: "Точение: Алмазный или твердосплавный инструмент. Передний угол 0°~5°, задний угол 6°~10°. Скорость резания 100~300 м/мин, подача 0,05~0,15 мм/об. Непрерывное резание, избегайте ударной подачи. Используйте пылеотсос.\nСверление: Сверло из быстрорежущей стали или твердого сплава, угол при вершине 90°~120°. Скорость 3000~8000 об/мин, подача 0,02~0,08 мм/об. Края входа и выхода склонны к выкрашиванию, необходима фаска с обеих сторон.\nШлифовка: Круг из карбида кремния (зерно 60~120#), глубина ≤ 0,01 мм/проход. Предпочтительно сухое шлифование.\nБезопасность: Графитовая пыль электропроводна. Электрооборудование требует защиты от пыли. Операторы должны использовать респираторы.",
      },
      {
        question: "Как устранить перекос, выкрашивание кромок и трещины при запрессовке?",
        answer: "Перекос: Неравномерная фаска отверстия или несоосное усилие запрессовки. Решение: Проверьте фаску (≥ 15°), используйте направляющую оправку, контролируйте скорость запрессовки 2~5 мм/с.\nВыкрашивание: Концентрация напряжений у края втулки или чрезмерный натяг. Решение: Увеличьте входную фаску втулки (C0,5~C1,0), уменьшите натяг, проверьте шероховатость отверстия (≤ Ra 1,6).\nТрещины: Натяг значительно выходит за допуск или превышена некруглость отверстия. Решение: Пересчитайте натяг, измерьте круглость (≤ IT7), рассмотрите горячую сборку (нагрев отверстия до 150~200°C).\nКонтроль: Используйте пресс с датчиком усилия-перемещения. Остановитесь при аномальной кривой.",
      },
      {
        question: "Контроль затяга при сборке с натягом?",
        answer: "Принципы расчета натяга:\n1. Минимальный натяг: Обеспечивает неослабление втулки при макс. рабочей температуре\n2. Максимальный натяг: Предотвращает разрушение втулки от сжатия; 1/5 ~ 1/3 прочности графита на сжатие\n3. Эмпирическая формула: δ ≈ (0,002~0,005) × нар. диаметр втулки\n\nСправочные значения:\nНаруж. диаметр ≤ 50 мм: натяг 0,02~0,05 мм\nНаруж. диаметр 50~100 мм: натяг 0,04~0,10 мм\nНаруж. диаметр 100~150 мм: натяг 0,06~0,15 мм\nНаруж. диаметр > 150 мм: натяг 0,08~0,20 мм\n\nМетоды сборки:\n- Малый натяг: холодная запрессовка\n- Средний натяг: нагрев отверстия до 150~200°C (горячая сборка)\n- Большой натяг: комбинированный метод (охлаждение втулки жидким азотом -196°C + нагрев отверстия)",
      },
    ],
  },
  {
    category: "Эксплуатационные неисправности",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z",
    items: [
      {
        question: "Как устранить чрезмерный нагрев при работе?",
        answer: "Последовательность проверки:\n1. Измерьте фактическую температуру — ИК-термометром или термопарой на стенке камеры уплотнения.\n2. Проверьте систему охлаждения — достаточен ли расход охлаждающей жидкости? Не забиты ли трубопроводы?\n3. Проверьте удельное давление на торце — не пережата ли пружина?\n4. Проверьте зазор — малый зазор вызывает быстрый рост теплоты трения.\n\nЭкстренные меры:\n- Увеличьте расход охлаждающей жидкости в 1,2~1,5 раза\n- Снизьте скорость или давление (временно)\n- Проверьте чистоту смазки и состояние фильтра\n\nДолгосрочные меры:\n- Рассмотрите переход на графит с более высокой теплопроводностью\n- Оптимизируйте конструкцию канавок охлаждения\n- Проверьте соосность вала",
      },
      {
        question: "Как устранить небольшую утечку масла/воды?",
        answer: "Утечка ≤ 5 капель/мин (допустимо):\n1. Проверьте торец — при небольшой утечке в период приработки продолжайте работу 24~48 часов\n2. Отрегулируйте болты крышки — затягивайте равномерно, момент 50%~70% от рекомендуемого\n3. Проверьте вспомогательные уплотнения — не изношены ли кольца/прокладки?\n\nУтечка > 5 капель/мин (требуется остановка):\n1. Проверьте торец — термические трещины, царапины, коробление?\n2. Проверьте монтажные размеры — правильное сжатие? Торец перпендикулярен оси?\n3. Проверьте изменения режима работы — колебания температуры, давления, скорости?\n4. Замените уплотнение — разберите и замените полный комплект, откалибруйте монтаж",
      },
      {
        question: "Причины шума, вибрации и быстрого износа?",
        answer: "Диагностика шума:\n- Высокочастотный визг → сухое трение торца. Немедленно проверьте смазку.\n- Низкочастотный гул → большой зазор подшипника или дисбаланс ротора.\n- Прерывистые щелчки → посторонние частицы или местные сколы.\n\nПричины вибрации:\n1. Изгиб вала или износ подшипника, вызывающие чрезмерное биение\n2. Ухудшение плоскостности торца > 0,9 мкм\n3. Испарение среды, вызывающее периодическое открытие торца\n4. Отклонение соосности при монтаже > 0,05 мм\n\nПричины быстрого износа:\n1. Абразивные частицы в среде (песок, шлак, ржавчина) — добавьте фильтр на входе\n2. Неправильный выбор материала (низкая твердость или неподходящая пропитка)\n3. Фактическое PV превышает допустимое PV материала\n4. Частые пуски-остановы или длительная работа всухую\n5. Коррозионная агрессивность среды превышает стойкость пропитки",
      },
      {
        question: "Как устранить карбонизацию и распыление при высокой температуре?",
        answer: "Признаки карбонизации: Черный порошок на торце, поверхность графита становится рыхлой, порошкообразной, теряет прочность.\n\nАнализ причин:\n1. Температура превышает стойкость пропитки — фенольная смола начинает карбонизироваться > 200°C\n2. Локальные горячие точки — тепло трения + температура среды превышают предел\n3. Окислительная атмосфера — кислород окисляет графит при высокой температуре\n\nРешения:\n1. Немедленно остановите и замените\n2. Выберите пропитку более высокого температурного класса (фенол→фуран→сурьма→карбонизация)\n3. Контроль атмосферы — продувка инертным газом или паровое уплотнение\n4. Оптимизация охлаждения — увеличьте расход охлаждающей жидкости\n5. Рассмотрите конструкцию канавок для улучшения смазки и теплоотвода\n\nПрофилактика: Запас по температуре не менее 50°C. Установите датчики температуры.",
      },
    ],
  },
  {
    category: "Техническое обслуживание",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    items: [
      {
        question: "Режим приработки при первом пуске?",
        answer: "Цель: Приработка торцов для образования стабильной жидкостной пленки и профиля износа.\n\nШаги приработки:\n1. Перед пуском: Проверьте заполнение камеры средой, удалите воздух. Проверните вручную 2~3 оборота.\n2. Этап 1 (0~30 мин): Работа на 30%~50% номинальной скорости. Следите за утечкой, температурой, вибрацией. Допускается небольшая утечка.\n3. Этап 2 (30~120 мин): Постепенное увеличение до 70%~80% скорости. Температура должна стабилизироваться ≤ 60°C.\n4. Этап 3 (120~240 мин): Полная скорость. После стабилизации температуры проверьте утечку.\n5. Период приработки (первые 72 часа): По возможности поддерживайте непрерывную работу.\n\nПри превышении 80°C или значительном увеличении утечки остановитесь и проверьте.",
      },
      {
        question: "Методы консервации при длительном простое?",
        answer: "Краткосрочный (≤ 7 дней):\n1. Держите камеру заполненной средой\n2. Проворачивайте вручную 1~2 оборота еженедельно\n3. Закрывайте входные/выходные клапаны\n\nСреднесрочный (7~90 дней):\n1. Слейте среду, промойте водой или растворителем\n2. Нанесите антикоррозионную смазку на торец\n3. Покройте открытые поверхности втулки маслом\n4. Заполните камеру азотом или поместите осушитель\n\nДолгосрочный (> 90 дней):\n1. Снимите компоненты уплотнения для отдельного хранения\n2. Очистите и заверните в антикоррозионную бумагу\n3. Условия хранения: 5~35°C, влажность ≤ 60%, без прямых солнечных лучей\n4. Перед установкой проверьте уплотнения на старение и деформацию",
      },
      {
        question: "Критерии замены при предельном износе?",
        answer: "Уплотнительные кольца:\n1. Глубина износа торца > 1,0 мм или дефект > 15% ширины торца\n2. Сквозные трещины или сколы\n3. Плоскостность после притирки > 0,9 мкм\n4. Остаточный ресурс недостаточен до следующего ремонта\n\nВтулки/Подшипники:\n1. Износ отверстия > 2~3× начального зазора\n2. Видимый уступ или канавка на наружном диаметре\n3. Уменьшение толщины стенки > 20% от исходной\n4. Вибрация > 50%+ от начального значения\n\nПроцедура оценки:\n1. Фиксируйте начальные размеры и параметры\n2. Измеряйте износ и вибрацию периодически (каждые 3~6 мес.)\n3. Планируйте замену при ускорении износа\n4. Готовьте запчасти при достижении 80% теоретического ресурса",
      },
    ],
  },
  {
    category: "Изготовление на заказ",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    items: [
      {
        question: "Особенности изготовления пресс-форм для нестандартных графитовых деталей?",
        answer: "Три фактора оценки:\n1. Объем и стоимость — Оснастка обычно 3000~15000 юаней. Малые партии (< 50 шт.): механическая обработка. > 500 шт.: пресс-форма.\n2. Точность — Допуск пресс-формы ±0,5%. Мехобработка ±0,05 мм.\n3. Геометрия — Сложные формы (глубокие отверстия, L/D > 5, тонкая стенка < 3 мм): прессованная заготовка + финишная обработка.\n\nПримечания по конструкции:\n- Уклон не менее 1°~3°\n- Избегайте острых углов и резких изменений сечения (мин. радиус R ≥ 2 мм)\n- Симметричная конструкция для снижения неравномерной нагрузки\n- Припуск на обработку 0,5~1,0 мм\n- Учитывайте направление прессования для равномерности плотности",
      },
      {
        question: "Нормы проектирования канавок и буртиков?",
        answer: "Конструкция смазочных канавок:\n- Глубина: 0,3~1,0 мм (по диаметру вала и PV)\n- Ширина: 1,0~3,0 мм\n- Типы: спиральные (одно направление), шевронные (двунаправленные), прямые (низкая скорость)\n- Шаг: 5~15 мм\n- Расстояние от края: ≥ 2 мм\n\nКонструкция буртика:\n- Высота: 1~3 мм (по толщине стенки)\n- Угол: 30°~45°\n- Радиус скругления: R ≥ 0,5 мм\n\nОбозначение допусков:\n- Позиция канавки: ±0,2 мм\n- Глубина канавки: +0,1 мм / -0 мм\n- Соосность буртика: ≤ 0,05 мм",
      },
      {
        question: "Срочное изготовление с гарантией качества?",
        answer: "Процесс срочного изготовления:\n1. Утверждение чертежа — 3D-модель, 2D-чертеж с критическими допусками\n2. Выбор заготовки — из имеющихся на складе марок и размеров\n3. Маршрут обработки — черновое точение→чистовое точение→сверление→шлифовка\n4. Оборудование — высокоточные станки CNC (точность позиционирования ≤ 0,005 мм) + алмазный инструмент\n\nУровни точности:\n- Стандартный ±0,05 мм: обычное точение\n- Точный ±0,02 мм: требуется шлифовка\n- Высокоточный ±0,01 мм: CNC шлифовка + КИМ\n- Плоскостность 0,9 мкм: требуется притирка\n\nСроки срочного изготовления (простые втулки/кольца):\n- По чертежу: 3~5 рабочих дней\n- С закупкой материала: 7~10 рабочих дней\n- С изготовлением оснастки: 15~25 рабочих дней",
      },
    ],
  },
]
export const ruFormulas: Formula[] = [
  {
    name: "Общая формула зазора втулки",
    formula: "C = C₀ + α₁ × d × ΔT₁ - α₂ × d × ΔT₂ + K × d × n",
    description: "Расчет зазора с учетом теплового расширения, центробежной силы и влияния скорости",
    variables: [
      { symbol: "C", meaning: "Рабочий зазор (мм)" },
      { symbol: "C₀", meaning: "Начальный монтажный зазор (мм), обычно 0,02~0,08 мм" },
      { symbol: "α₁", meaning: "КТР материала корпуса (сталь ≈ 11×10⁻⁶ /°C)" },
      { symbol: "α₂", meaning: "КТР графита (≈ 2~4×10⁻⁶ /°C)" },
      { symbol: "d", meaning: "Диаметр вала (мм)" },
      { symbol: "ΔT₁", meaning: "Повышение температуры корпуса (°C)" },
      { symbol: "ΔT₂", meaning: "Повышение температуры графита (°C)" },
      { symbol: "K", meaning: "Коэффициент центробежной силы (≈ 0,001~0,003)" },
      { symbol: "n", meaning: "Частота вращения (об/мин)" },
    ],
    note: "Упрощенная инженерная формула: C = C₀ + (α₁ - α₂) × d × ΔT. Типично: 0,15~0,25 мм для низконапорных водяных насосов, 0,30~0,50 мм для высокотемпературных насосов.",
  },
  {
    name: "Формула предела линейной скорости",
    formula: "V = π × d × n / 60000",
    description: "Расчет средней линейной скорости торца уплотнения для оценки предела PV и выбора материала",
    variables: [
      { symbol: "V", meaning: "Линейная скорость (м/с)" },
      { symbol: "d", meaning: "Средний диаметр торца уплотнения (мм)" },
      { symbol: "n", meaning: "Частота вращения (об/мин)" },
      { symbol: "π", meaning: "Пи (≈ 3,1416)" },
    ],
    note: "Рекомендуемые пределы для углеродного графита: пропитка смолой ≤ 20 м/с, пропитка металлом ≤ 25 м/с, карбонизированный ≤ 30 м/с. Выше этих пределов используйте сбалансированную конструкцию уплотнения или усиленное охлаждение.",
  },
  {
    name: "Формула удельного давления на торец",
    formula: "Pc = Ps + (B × K) × P",
    description: "Усилие закрытия на единицу площади торца уплотнения, определяющее герметичность и срок службы",
    variables: [
      { symbol: "Pc", meaning: "Удельное давление на торец (MPa)" },
      { symbol: "Ps", meaning: "Удельное давление пружины (MPa), обычно 0,08~0,20 MPa" },
      { symbol: "B", meaning: "Коэффициент балансировки (сбалансир. 0,65~0,85, несбалансир. 0,90~1,10)" },
      { symbol: "K", meaning: "Коэффициент давления (≈ 0,5~0,7)" },
      { symbol: "P", meaning: "Давление среды (MPa)" },
    ],
    note: "Рекомендуемый диапазон давления на торец: 0,3~0,8 MPa. Слишком низкое: риск утечки. Слишком высокое: нагрев и ускоренный износ. Углеродный графит против SiC: нижний предел. Углеродный графит против металла: верхний предел.",
  },
  {
    name: "Формула компенсации теплового расширения",
    formula: "ΔL = α × L × ΔT",
    description: "Расчет изменения размеров графитовых деталей из-за перепада температур, используется для коррекции зазора и расчета посадки с натягом",
    variables: [
      { symbol: "ΔL", meaning: "Изменение размера (мм)" },
      { symbol: "α", meaning: "КТР материала (/°C)" },
      { symbol: "L", meaning: "Исходный размер (мм)" },
      { symbol: "ΔT", meaning: "Перепад температур (°C) = рабочая температура - температура монтажа" },
    ],
    note: "КТР графита α ≈ (2,0~4,5)×10⁻⁶ /°C (зависит от марки и направления формования). КТР стали α ≈ 11×10⁻⁶ /°C. При проектировании посадки с натягом рассчитайте расширение корпуса и расширение графитовой втулки; разница является эффективным изменением натяга.",
  },
  {
    name: "Формула безопасности натяга при запрессовке",
    formula: "σ_max = (δ × E) / (d × (1 - μ²)) ≤ [σ] / S",
    description: "Проверяет, что максимальное напряжение от выбранного натяга не превышает допустимого напряжения материала",
    variables: [
      { symbol: "σ_max", meaning: "Максимальное тангенциальное растягивающее напряжение (MPa)" },
      { symbol: "δ", meaning: "Натяг (мм)" },
      { symbol: "E", meaning: "Модуль упругости графита (≈ 8000~12000 MPa)" },
      { symbol: "d", meaning: "Наружный диаметр втулки (мм)" },
      { symbol: "μ", meaning: "Коэффициент Пуассона графита (≈ 0,15~0,25)" },
      { symbol: "[σ]", meaning: "Допускаемое напряжение графита (предел прочности / запас прочности)" },
      { symbol: "S", meaning: "Запас прочности (рекомендуется 3~5)" },
    ],
    note: "Прочность углеродного графита на растяжение составляет примерно 1/3~1/4 от прочности на сжатие. Всегда используйте прочность на растяжение (не на сжатие) в расчетах. Запас прочности ≥ 3. Рекомендуемый натяг: ≤ 0,5%~1,0% от толщины стенки графита.",
  },
]

// ============================================================
// JAPANESE (ja) - Fallback to English
// ============================================================

export const jaCoreTables: CoreTable[] = [
  {
    id: "impregnation-selection",
    title: "含浸タイプクイック選択ガイド",
    description: "使用媒体と温度に基づいて最適な含浸タイプを選択します",
    headers: ["含浸タイプ", "温度範囲", "耐食性", "適用媒体", "代表用途"],
    rows: [
      ["フェノール樹脂", "-50°C ~ +200°C", "良好", "水、油、弱酸・弱アルカリ", "一般ポンプシール、水ポンプ"],
      ["フラン樹脂", "-50°C ~ +250°C", "優れる", "強酸、強アルカリ、有機溶剤", "化学反応槽、酸洗設備"],
      ["エポキシ樹脂", "-50°C ~ +180°C", "良好", "水、油、アルカリ", "食品機械、医薬品設備"],
      ["アンチモン金属", "-100°C ~ +450°C", "普通", "高温油、蒸気", "高温ポンプ、タービンシール"],
      ["バビットメタル", "-100°C ~ +350°C", "普通", "高温油、高荷重", "高荷重ブッシュ、大型軸受"],
      ["炭化（純カーボン）", "-200°C ~ +600°C", "優れる", "ほぼすべての媒体（真空含む）", "高温炉、半導体設備"],
      ["PTFE含浸", "-100°C ~ +250°C", "優れる", "強腐食性媒体、食品", "医薬品、化学、食品"],
    ],
  },
  {
    id: "sleeve-clearance",
    title: "ブッシュクリアランス標準計算",
    description: "異なる径と速度におけるグラファイトブッシュと鋼製シャフト間の推奨クリアランス値",
    headers: ["シャフト径 (mm)", "速度 < 500 rpm", "速度 500~1500 rpm", "速度 1500~3000 rpm", "速度 > 3000 rpm"],
    rows: [
      ["10 ~ 25", "0.08 ~ 0.12 mm", "0.10 ~ 0.15 mm", "0.15 ~ 0.20 mm", "0.20 ~ 0.30 mm"],
      ["25 ~ 50", "0.10 ~ 0.15 mm", "0.15 ~ 0.20 mm", "0.20 ~ 0.30 mm", "0.30 ~ 0.40 mm"],
      ["50 ~ 80", "0.12 ~ 0.18 mm", "0.18 ~ 0.25 mm", "0.25 ~ 0.35 mm", "0.35 ~ 0.50 mm"],
      ["80 ~ 120", "0.15 ~ 0.22 mm", "0.22 ~ 0.30 mm", "0.30 ~ 0.42 mm", "0.42 ~ 0.60 mm"],
      ["120 ~ 200", "0.18 ~ 0.28 mm", "0.25 ~ 0.38 mm", "0.35 ~ 0.50 mm", "0.50 ~ 0.70 mm"],
    ],
  },
  {
    id: "material-comparison",
    title: "グラファイト材料特性比較",
    description: "成形プロセス別のカーボングラファイト材料の物理的・機械的特性",
    headers: ["特性", "成形グラファイト", "等方性グラファイト", "微細粒グラファイト", "粗粒グラファイト", "高純度グラファイト"],
    rows: [
      ["かさ密度 (g/cm³)", "1.70 ~ 1.80", "1.78 ~ 1.90", "1.65 ~ 1.75", "1.55 ~ 1.65", "1.70 ~ 1.85"],
      ["圧縮強さ (MPa)", "≥ 180", "≥ 200", "≥ 140", "≥ 100", "≥ 160"],
      ["曲げ強さ (MPa)", "≥ 60", "≥ 70", "≥ 45", "≥ 35", "≥ 55"],
      ["ショア硬さ (HS)", "60 ~ 80", "65 ~ 85", "50 ~ 65", "40 ~ 55", "55 ~ 75"],
      ["気孔率 (%)", "8 ~ 15", "5 ~ 12", "12 ~ 18", "15 ~ 22", "10 ~ 15"],
      ["最高温度 (°C)", "400", "500", "350", "300", "600"],
      ["代表用途", "シールリング、ブッシュ", "高級メカニカルシール", "一般軸受", "低速軸受", "高温・真空"],
    ],
  },
  {
    id: "medium-adaptation",
    title: "媒体別材料選定表",
    description: "シール媒体の種類に基づく推奨カーボングラファイトグレードと含浸",
    headers: ["媒体タイプ", "推奨グラファイト基材", "推奨含浸", "最高温度", "注意事項"],
    rows: [
      ["清水／真水", "中細粒グラファイト", "フェノール樹脂", "200°C", "砂質媒体を避ける"],
      ["海水", "微細粒高密度", "フラン樹脂", "180°C", "耐塩化物含浸が必要"],
      ["鉱油／作動油", "中粒グラファイト", "フェノール樹脂", "200°C", "低粘度油の場合はクリアランス低減"],
      ["強酸（H₂SO₄、HCl）", "高純度微細粒", "フラン樹脂", "250°C", "酸環境ではアンチモン含浸を避ける"],
      ["強アルカリ（NaOH、KOH）", "微細粒グラファイト", "フラン樹脂", "200°C", "フェノール樹脂は非推奨"],
      ["有機溶剤", "微細粒グラファイト", "フラン／PTFE", "200°C", "溶剤が含浸材を溶解しないことを確認"],
      ["高温蒸気", "微細粒高密度", "炭化／アンチモン", "600°C", "酸化に注意"],
      ["高温熱ガス", "高純度グラファイト", "炭化", "600°C", "酸素濃度1%未満に制限"],
      ["真空環境", "等方性高密度", "炭化", "500°C", "低ガス放出が必要"],
      ["食品／医薬品", "微細粒グラファイト", "食品グレード樹脂", "180°C", "FDA/EU認証取得"],
    ],
  },
  {
    id: "temp-speed-limits",
    title: "温度・速度制限パラメータ",
    description: "温度と速度の複合条件下における異なる材料組み合わせの運転限界",
    headers: ["材料組み合わせ", "最高温度", "最高線速度 (m/s)", "PV限界 (MPa·m/s)", "潤滑"],
    rows: [
      ["カーボングラファイト vs SiC", "200°C", "25", "18", "油／水潤滑"],
      ["カーボングラファイト vs ステンレス鋼", "180°C", "15", "10", "油潤滑"],
      ["アンチモングラファイト vs SiC", "450°C", "20", "15", "油／自己潤滑"],
      ["炭化グラファイト vs SiC", "600°C", "30", "22", "自己潤滑"],
      ["カーボングラファイト vs セラミック", "250°C", "20", "14", "水／油潤滑"],
      ["バビットグラファイト vs 鋼", "350°C", "12", "8", "油潤滑"],
      ["グラファイト vs グラファイト", "300°C", "8", "5", "自己潤滑"],
    ],
  },
  {
    id: "wear-life",
    title: "摩耗寿命推定参考表",
    description: "異なる運転条件下でのカーボングラファイトシールの予想摩耗率と使用寿命",
    headers: ["運転条件", "代表用途", "月間摩耗量 (mm)", "推定使用寿命", "主要因"],
    rows: [
      ["清水ポンプ — 連続", "遠心ポンプシール", "0.02 ~ 0.05", "24 ~ 36ヶ月", "媒体清浄度"],
      ["ケミカルポンプ — 腐食性", "反応槽撹拌機シール", "0.05 ~ 0.10", "12 ~ 24ヶ月", "媒体腐食性"],
      ["高温油ポンプ — 250°C", "熱油ポンプシール", "0.03 ~ 0.08", "18 ~ 30ヶ月", "温度安定性"],
      ["廃水ポンプ — 粒子含有", "下水ポンプシール", "0.10 ~ 0.20", "6 ~ 12ヶ月", "粒子硬度／濃度"],
      ["高速ポンプ — >3000rpm", "ボイラ給水ポンプ", "0.04 ~ 0.08", "12 ~ 20ヶ月", "速度／バランス"],
      ["ドライランニング — 断続", "ファン軸受", "0.01 ~ 0.03", "36 ~ 60ヶ月", "起動停止頻度"],
      ["船舶用海水ポンプ", "船尾管シール", "0.03 ~ 0.06", "18 ~ 36ヶ月", "海水泥砂含有量"],
    ],
  },
  {
    id: "press-fit-force",
    title: "圧入安全基準表",
    description: "グラファイトブッシュ取付の安全な締代範囲と対応圧入力",
    headers: ["ブッシュ外径 (mm)", "推奨締代 (mm)", "最大圧入力 (kN)", "圧入速度 (mm/s)", "注意事項"],
    rows: [
      ["20 ~ 40", "0.02 ~ 0.05", "5 ~ 15", "2 ~ 5", "誘い面取り ≥ 15°"],
      ["40 ~ 60", "0.03 ~ 0.07", "15 ~ 30", "2 ~ 5", "穴粗さ Ra ≤ 1.6"],
      ["60 ~ 80", "0.04 ~ 0.09", "30 ~ 50", "1 ~ 3", "圧入前に潤滑剤を塗布"],
      ["80 ~ 120", "0.05 ~ 0.12", "50 ~ 80", "1 ~ 3", "焼嵌めまたは熱嵌めを推奨"],
      ["120 ~ 160", "0.06 ~ 0.15", "80 ~ 120", "1 ~ 2", "力-変位モニタリングを使用"],
      ["160 ~ 200", "0.08 ~ 0.18", "120 ~ 180", "0.5 ~ 1", "段階圧入、各段階を確認"],
    ],
  },
  {
    id: "face-pressure",
    title: "端面比圧計算表",
    description: "推奨端面比圧範囲と対応するばね圧力および圧力係数",
    headers: ["シールタイプ", "端面比圧 Pc (MPa)", "ばね圧力 Ps (MPa)", "圧力係数 K", "速度範囲"],
    rows: [
      ["内部バランス形", "0.3 ~ 0.6", "0.08 ~ 0.15", "0.65 ~ 0.75", "< 3000 rpm"],
      ["内部アンバランス形", "0.4 ~ 0.8", "0.10 ~ 0.20", "0.85 ~ 0.95", "< 1500 rpm"],
      ["外部バランス形", "0.2 ~ 0.5", "0.06 ~ 0.12", "0.60 ~ 0.70", "< 5000 rpm"],
      ["複合フェースシール", "0.3 ~ 0.7", "0.10 ~ 0.18", "0.65 ~ 0.80", "< 4000 rpm"],
      ["高温フレキシブルシール", "0.15 ~ 0.35", "0.05 ~ 0.10", "0.55 ~ 0.65", "< 2000 rpm"],
    ],
  },
  {
    id: "heat-treatment",
    title: "グラファイト熱処理／含浸温度パラメータ",
    description: "カーボングラファイト加工段階の温度制御パラメータ",
    headers: ["プロセス", "温度範囲", "保持時間", "昇温速度", "目的"],
    rows: [
      ["素地乾燥", "120°C ~ 180°C", "8 ~ 24 h", "≤ 30°C/h", "成形水分の除去"],
      ["炭化前処理", "800°C ~ 1200°C", "4 ~ 8 h", "≤ 50°C/h", "ベース炭化強化"],
      ["黒鉛化", "2200°C ~ 2600°C", "2 ~ 6 h", "≤ 100°C/h", "結晶性・導電性の向上"],
      ["樹脂含浸硬化", "150°C ~ 200°C", "4 ~ 12 h", "≤ 20°C/h", "気孔充填"],
      ["金属含浸（Sb）", "600°C ~ 800°C", "2 ~ 4 h", "≤ 60°C/h", "真空金属含浸"],
      ["バビット含浸", "300°C ~ 400°C", "1 ~ 3 h", "≤ 40°C/h", "軸受合金充填"],
      ["PTFE含浸焼結", "360°C ~ 380°C", "2 ~ 6 h", "≤ 30°C/h", "PTFE充填と焼結"],
      ["安定化焼鈍", "200°C ~ 350°C", "6 ~ 12 h", "≤ 25°C/h", "加工応力の除去"],
    ],
  },
  {
    id: "troubleshooting",
    title: "騒音・過熱・漏れトラブルシューティングガイド",
    description: "シール運転の一般的な故障症状、原因、および解決策",
    headers: ["症状", "考えられる原因", "診断方法", "解決策"],
    rows: [
      ["高音のきしみ音", "端面乾摩擦／潤滑不足", "潤滑流量を確認", "流体供給量を増やすか、端面溝設計を改善"],
      ["低周波のゴロゴロ音", "ブッシュクリアランス過大／シャフト振動", "ラジアル振れを測定", "クリアランス低減またはシャフト修正"],
      ["端面温度 > 80°C", "端面圧力過高／冷却不足", "シールキャビティ温度を測定", "ばね圧縮を低減または冷却流量を増加"],
      ["徐漏れ（滴/分）", "端面平坦度劣化／研磨材埋込み", "端面ラップ品質を確認", "再ラップまたはシールリング交換"],
      ["大量漏れ", "シールリング破損／取付位置ずれ", "停止してシール面を点検", "シール交換と取付再調整"],
      ["起動時のみ漏れ", "静止シール劣化／クリアランス変化", "Oリングとブッシュを確認", "弾性シール交換"],
      ["徐々に増加する騒音", "軸受摩耗の蓄積", "軸受クリアランス推移を測定", "ブッシュ交換を計画"],
      ["異常な端面摩耗", "媒体中の硬質粒子", "媒体サンプルをろ過・分析", "上流フィルタ追加または耐摩耗グレードに変更"],
    ],
  },
]
export const jaFaqCategories: FAQCategory[] = [
  {
    category: "選定に関する質問",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    items: [
      {
        question: "高温・低温環境での黒鉛材質の選び方は？",
        answer: "低温環境（-50°C～100°C）：フェノール樹脂含浸の中細粒黒鉛が適しています。コストも手頃で性能も安定しています。\n中温環境（100°C～250°C）：フラン樹脂またはエポキシ樹脂含浸を推奨します。耐熱性・耐食性ともにフェノールより優れています。\n高温環境（250°C～450°C）：アンチモン金属またはバビットメタル含浸黒鉛が必要です。等方圧成形の黒鉛基材が高温での寸法安定性に優れます。\n超高温環境（450°C～600°C）：炭化処理（純炭素）黒鉛を使用します。含浸材なしで、黒鉛自身の耐熱性に依存します。不活性または還元性雰囲気での使用が必要です。",
      },
      {
        question: "湿潤・乾燥状態での含浸工法の選び方は？",
        answer: "完全湿潤運転（十分な潤滑）：フェノール樹脂またはフラン樹脂含浸で十分です。樹脂が気孔を充填し、緻密性を高め、摩耗を低減します。\n湿乾繰り返し（頻繁な起動・停止）：自己潤滑性に優れた含浸工法が必要です。金属含浸（アンチモン/バビット）またはPTFE含浸を推奨します。\n完全乾式運転（無潤滑）：炭化処理黒鉛または特殊樹脂含浸を使用します。低PV値（≤ 3 MPa·m/s）で設計し、自己潤滑溝を設けます。",
      },
      {
        question: "高速・高負荷・低圧に最適な黒鉛は？",
        answer: "高速工况（線速度 > 20 m/s）：等方圧成形微細粒高密度黒鉛をSiCと組み合わせます。含浸はアンチモン金属または炭化処理を推奨。\n高負荷工况（PV値 > 15 MPa·m/s）：バビットメタル含浸またはアンチモン含浸黒鉛を選定。金属充填により圧縮強度と熱伝導率が大幅に向上します。\n低圧工况（媒体圧力 < 0.5 MPa）：成形中粒黒鉛にフェノール樹脂含浸で十分対応可能。最もコストパフォーマンスに優れます。",
      },
      {
        question: "無油自己潤滑と油潤滑の選定違いは？",
        answer: "無油自己潤滑：自己潤滑性の高い黒鉛材質が必要です。炭化処理高純度黒鉛またはPTFE含浸黒鉛を推奨。シール端面にはデブリ溝やスパイラル溝を設け、黒鉛の自己潤滑転写膜を利用します。推奨PV範囲：0.5～5 MPa·m/s。\n油潤滑：標準的なフェノール樹脂またはフラン樹脂含浸黒鉛で十分です。油膜が主な潤滑機能を提供し、黒鉛は軟質材料としての適合と緊急運転を担います。PV値は10～20 MPa·m/sまで可能です。",
      },
    ],
  },
  {
    category: "組み立て隙間に関する質問",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    items: [
      {
        question: "隙間が大きすぎる場合の振れ・小さすぎる場合の焼付き対策は？",
        answer: "隙間过大：運転中に軸が径方向に振れ、シール端面の追従性が低下し、漏れ増加、異音、異常摩耗が発生します。解決策：実回転数と軸径に応じた標準隙間表を参照し、ブッシュ内径を再加工します。\n隙間過小：摩擦熱が放散できず、温度上昇により黒鉛が熱膨張してさらに隙間が狭まり、正のフィードバックループで最終的に焼付きます。解決策：隙間を推奨上限値まで拡大し、ブッシュ外径側の放熱条件を確認します。\n判別方法：運転30分後に停止し、ブッシュ温度が90°C超＝過熱、運転中に手で触れて明らかな揺れ＝過大。",
      },
      {
        question: "軸径別の標準嵌めあい公差は？",
        answer: "一般的な嵌めあい公差帯（黒鉛ブッシュ内径 vs 鋼軸）：\n小径 d ≤ 30 mm：H7/f7 または H7/g6、隙間 0.02～0.08 mm\n中径 30 < d ≤ 80 mm：H7/f7 または H8/e8、隙間 0.03～0.15 mm\n大径 80 < d ≤ 150 mm：H8/e8 または H8/d8、隙間 0.05～0.30 mm\n特大径 d > 150 mm：H8/d8 または H9/c9、隙間 0.10～0.50 mm\n注：実際の値は回転数、温度、材料の熱膨張係数を総合的に計算する必要があります。",
      },
      {
        question: "冷熱伸縮を考慮した隙間補正方法は？",
        answer: "黒鉛の熱膨張係数は約(2～4)×10⁻⁶/°C、鋼は11×10⁻⁶/°Cで、両者に大きな差があります。\n補正方法：\n1. 温度変化による半径変化量を計算：Δr = (α鋼 - α黒鉛) × r × ΔT\n2. 計算値を常温隙間に加算\n3. 例：軸径80mm、温度上昇150°Cの場合、半径変化差 ≈ (11-3)×10⁻⁶ × 40 × 150 = 0.048mm\n4. 実際の常温隙間 = 運転隙間 + 0.048mm\n5. 注意：停止冷却後に隙間は縮小するため、熱間組立した設備は冷却後に芯出し確認が必要です。",
      },
    ],
  },
  {
    category: "加工・取り付けに関する質問",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    items: [
      {
        question: "黒鉛の旋削、穴あけ、研削の注意点は？",
        answer: "旋削加工：ダイヤモンドまたは超硬工具を使用。すくい角0°～5°、逃げ角6°～10°。切削速度100～300m/min、送り量0.05～0.15mm/rev。断続切削を避け、チッピングを防止します。集塵装置で黒鉛粉を回収します。\n穴あけ：高速鋼または超硬ドリル、先端角90°～120°。回転数3000～8000rpm、送り量0.02～0.08mm/rev。入口・出口のエッジは欠けやすいため、両面面取りが必要です。\n研削：炭化珪素砥石（粒度60～120#）、切込み深さ0.01mm/pass以下。主に乾式研削とします。\n安全：黒鉛粉は導電性があるため、電気機器は防塵処理が必要です。作業者は防塵マスクを着用してください。",
      },
      {
        question: "圧入時の片振れ、欠け、割れの対策は？",
        answer: "片振れ：ハウジングの面取りが不均一、または圧入力が軸心からずれています。対策：ハウジング面取りを確認（15°以上）、ガイド付き圧入マンドレルを使用、圧入速度2～5mm/sに制御。\n欠け：ブッシュ端部への応力集中またはしまりばめ量过大。対策：ブッシュ外径入口面取りを追加（C0.5～C1.0）、しまりばめ量を適正化、ハウジング粗さを確認（Ra 1.6以下）。\n割れ：しまりばめ量が大幅に公差超過、またはハウジング真円度超過。対策：しまりばめ量を再計算、ハウジング真円度を測定（IT7以下）、焼きばめを検討（ハウジングを150～200°Cに加熱）。\nモニタリング：力-変位センサー付き圧入機を使用し、リアルタイムで圧入曲線を監視。異常時は直ちに停止。",
      },
      {
        question: "しまりばめの締め代管理は？",
        answer: "しまり量計算の原則：\n1. 最小しまり量：最高使用温度でブッシュが緩まないことを保証\n2. 最大しまり量：黒鉛ブッシュが圧縮応力で破壊されないことを保証（黒鉛圧縮強度の1/5～1/3）\n3. 経験式：δ ≈ (0.002～0.005) × ブッシュ外径\n\n参考値：\n外径 ≤ 50mm：しまり 0.02～0.05mm\n外径 50～100mm：しまり 0.04～0.10mm\n外径 100～150mm：しまり 0.06～0.15mm\n外径 > 150mm：しまり 0.08～0.20mm\n\n組立方法：\n- 小しまり量：常温圧入\n- 中しまり量：ハウジングを150～200°Cに加熱して焼きばめ\n- 大しまり量：ブッシュを液体窒素で冷却（-196°C）+ ハウジング加熱の併用工法",
      },
    ],
  },
  {
    category: "使用中のトラブルに関する質問",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z",
    items: [
      {
        question: "運転中の発熱が大きい場合の対処法は？",
        answer: "確認手順：\n1. 実際の温度を確認 — 赤外線温度計または熱電対でシールチャンバー外壁温度を測定。80°C超を確認。\n2. 冷却システムを確認 — 冷却水/油の流量は十分か？配管は詰まっていないか？熱交換器の効率は？\n3. 端面比圧を確認 — スプリングが過圧縮になっていないか？シール面幅が大きすぎないか？\n4. 嵌めあい隙間を確認 — 隙間過小は摩擦熱の急激な増加を引き起こします。\n\n応急処置：\n- 冷却液流量を推奨値の1.2～1.5倍に増加\n- 回転数または圧力を低減（暫定措置）\n- 潤滑油の清浄度とフィルター状態を確認\n\n恒久対策：\n- より熱伝導率の高い含浸黒鉛への変更を評価\n- シール端面冷却溝の設計最適化\n- 軸系の芯出し確認",
      },
      {
        question: "軽度の油漏れ・水漏れの対策は？",
        answer: "漏れ量 ≤ 5滴/分（許容範囲内）：\n1. シール端面を確認 — なじみ運転初期の軽度漏れであれば、24～48時間継続観察\n2. グランドボルトを調整 — 均等に対角締め、トルクは推奨値の50%～70%\n3. 補助シールを確認 — Oリング/ガスケットの劣化や損傷は？\n\n漏れ量 > 5滴/分（停止対応が必要）：\n1. シール端面を確認 — 熱亀裂、傷、反りは？相手面は平坦か？\n2. 取付寸法を確認 — 圧縮量は適正か？端面は軸に垂直か？\n3. 運転条件の変動を確認 — 最近の温度、圧力、回転数の大幅な変化は？\n4. シール交換 — 分解後、全シール部品を交換し、取付を再調整",
      },
      {
        question: "異音、振動、早期摩耗の原因は？",
        answer: "異音の診断：\n- 高周波の金属音 → 端面の乾式摩擦。潤滑系統を直ちに確認。\n- 低周波の唸り → 軸受隙間过大または回転部の不均衡。\n- 断続的なカチカチ音 → 端面への異物噛み込みまたは端面の局所欠損。\n\n振動の原因：\n1. 軸の曲がりまたは軸受摩耗による径方向振れの増大\n2. シール端面の平面度劣化 > 0.9μm\n3. 媒体の気化（フラッシング）による端面の断続的開口\n4. 取り付け芯出し偏差 > 0.05mm\n\n早期摩耗の原因：\n1. 媒体中の研磨粒子（砂、溶接スラグ、錆）— 上流にフィルター追加\n2. 材質選定ミス（硬度不足または含浸グレード不一致）\n3. 実PV値が材料許容PV値を超過\n4. 頻繁な起動停止または長時間の乾式運転\n5. 含浸材料の耐性を超える媒体腐食性",
      },
      {
        question: "高温による炭化・粉状劣化の解決法は？",
        answer: "炭化劣化の症状：シール端面に黒色粉末が堆積し、黒鉛表面が鬆粗な粉状になり、構造強度を失います。\n\n原因分析：\n1. 含浸材料の耐熱限界超過 — フェノール樹脂は200°C超で炭化開始\n2. 局所的ホットスポット — 端面摩擦熱 + 媒体温度が限界を超過\n3. 酸化雰囲気 — 高温下で空気中の酸素が黒鉛を酸化、CO/CO₂が放出されて構造が多孔質化\n\n解決策：\n1. 直ちに停止して交換、炭化進行による完全シール破損を防止\n2. より耐熱性の高い含浸方式を選定（フェノール→フラン→アンチモン→炭化処理）\n3. 雰囲気管理 — 高温条件では不活性ガスパージまたは蒸気シールを採用\n4. 冷却最適化 — シールチャンバー冷却流量を増加\n5. 端面溝加工による潤滑と放熱の改善を検討\n\n予防：使用温度に50°C以上の安全マージンを確保。温度監視プローブを設置。",
      },
    ],
  },
  {
    category: "メンテナンスに関する質問",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    items: [
      {
        question: "初回運転時のなじみ運転手順は？",
        answer: "なじみ運転の目的：シール端面を相互に馴染ませ、安定した流体膜と摩耗パターンを形成します。\n\n手順：\n1. 起動前：シールチャンバー内が媒体で満たされていることを確認し、空気を抜きます。手回し2～3回転で異音なく回転することを確認。\n2. 第1段階（0～30分）：定格回転数の30%～50%で運転。漏れ、温度、振動を監視。軽度の漏れは許容。\n3. 第2段階（30～120分）：徐々に定格の70%～80%まで上昇。温度は60°C以下で安定させる。\n4. 第3段階（120～240分）：全速運転。温度安定後、漏れ量が許容範囲内であることを確認。\n5. なじみ期間（最初の72時間）：可能な限り連続運転を維持。\n\nなじみ運転中に温度が80°Cを超えたり、漏れが大幅に増加した場合は直ちに停止して点検。",
      },
      {
        question: "長期停止時の保管・防護方法は？",
        answer: "短期停止（≤ 7日間）：\n1. シールチャンバー内を媒体で満たしたままにし、端面の乾燥を防止\n2. 毎週1～2回手回しし、端面の固着を防止\n3. 入口・出口バルブを閉止\n\n中期停止（7～90日間）：\n1. チャンバー内の媒体を排出し、水または溶剤で洗浄\n2. シール端面に防錆グリースまたは専用保護剤を塗布\n3. ブッシュ露出部に防錆油を塗布\n\n長期保管（> 90日間）：\n1. シール部品を分解して別途保管\n2. 洗浄後、防錆紙で包装\n3. 保管環境：温度5～35°C、湿度60%以下、直射日光を避ける\n4. 酸・アルカリ物質との接触を避ける\n5. 再使用前にシールの劣化・変形を確認",
      },
      {
        question: "摩耗限界と交換判定基準は？",
        answer: "シールリング：\n1. 端面摩耗深さ > 1.0mm、または欠損がシール面幅の15%超\n2. 貫通クラックまたは欠け\n3. ラッピング後の平面度 > 0.9μm（再ラッピング後に判定）\n4. 残存寿命が次回の点検周期まで持たない\n\nブッシュ/軸受：\n1. 内径摩耗量 > 初期隙間の2～3倍\n2. 外径に明らかな摩耗段差または溝\n3. 肉厚減少量 > 初期肉厚の20%\n4. 振動値が初期値比50%以上増加\n\n判定手順：\n1. 初期取付寸法と運転パラメータを記録\n2. 定期的（3～6ヶ月毎）に摩耗量と振動傾向を測定\n3. 摩耗速度が急激に増加した場合、早期交換を計画\n4. 理論寿命の80%に達した時点で予備品を準備",
      },
    ],
  },
  {
    category: "カスタム・非標準品に関する質問",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    items: [
      {
        question: "異形黒鉛部品の金型製作における注意点は？",
        answer: "金型評価の3要素：\n1. 数量とコスト — 金型費は通常3,000～15,000元。少数生産（< 50個）は機械加工推奨、> 500個は成形を検討。\n2. 精度要件 — 成形公差 ±0.5%、機械加工で ±0.05mm可能。\n3. 形状制限 — 複雑形状（深穴、細長比 > 5、薄肉 < 3mm）は成形ブランク+機械加工が適切。\n\n金型設計の注意点：\n- 抜き勾配 1°～3°以上（高さに比例）\n- 鋭い角や急激な断面変化を避ける（最小R ≥ 2mm）\n- 対称設計で偏荷重を低減\n- 加工代 0.5～1.0mmを確保\n- 成形方向が密度均一性に与える影響を考慮",
      },
      {
        question: "溝加工、油溝、止まり部の設計基準は？",
        answer: "油溝/潤滑溝の設計：\n- 深さ：0.3～1.0mm（軸径とPV値に応じて）\n- 幅：1.0～3.0mm\n- 形状：スパイラル溝（一方向）、ヘリンボーン溝（双方向）、ストレート溝（低速用）\n- ピッチ：5～15mm\n- 端部からの距離：≥ 2mm\n\n止まり部の設計：\n- 高さ：1～3mm（肉厚に応じて）\n- 角度：30°～45°\n- 隅R：R ≥ 0.5mm\n\n公差指示：\n- 溝位置度 ±0.2mm\n- 溝深さ +0.1mm / -0mm\n- 止まり部同軸度 ≤ 0.05mm",
      },
      {
        question: "短納期カスタム加工の品質確保策は？",
        answer: "短納期加工の流れ：\n1. 図面確認 — 3Dモデルで構造確認、2D図面で主要公差指示\n2. 素材選定 — 在庫のある材料を使用し、調達期間を短縮\n3. 工程設計 — 荒削り→仕上げ→穴あけ→研削の順序で、チャッキング回数を最小化\n4. 設備選定 — 高精度NC旋盤（位置決め精度 ≤ 0.005mm）+ ダイヤモンド工具\n\n精度レベル：\n- 標準 ±0.05mm：標準旋削\n- 精密 ±0.02mm：研削加工が必要\n- 高精密 ±0.01mm：NC研削盤 + 三次元測定\n- 平面度 0.9μm：ラッピング加工が必要\n\n短納期目安（単純なブッシュ/シールリング）：\n- 図面加工：3～5営業日\n- 材料調達含む：7～10営業日\n- 金型製作含む：15～25営業日",
      },
    ],
  },
]
export const jaFormulas: Formula[] = [
  {
    name: "ブッシュクリアランス一般式",
    formula: "C = C₀ + α₁ × d × ΔT₁ - α₂ × d × ΔT₂ + K × d × n",
    description: "熱膨張、遠心力、速度効果を考慮したクリアランス計算式",
    variables: [
      { symbol: "C", meaning: "運転クリアランス（mm）" },
      { symbol: "C₀", meaning: "初期組立クリアランス（mm）、通常0.02～0.08mm" },
      { symbol: "α₁", meaning: "ハウジング材料の熱膨張係数（鋼 ≈ 11×10⁻⁶ /°C）" },
      { symbol: "α₂", meaning: "グラファイトの熱膨張係数（≈ 2～4×10⁻⁶ /°C）" },
      { symbol: "d", meaning: "シャフト径（mm）" },
      { symbol: "ΔT₁", meaning: "ハウジング温度上昇（°C）" },
      { symbol: "ΔT₂", meaning: "グラファイト温度上昇（°C）" },
      { symbol: "K", meaning: "遠心力係数（≈ 0.001～0.003）" },
      { symbol: "n", meaning: "回転数（rpm）" },
    ],
    note: "簡易計算式：C = C₀ + (α₁ - α₂) × d × ΔT。標準値：低圧水ポンプで0.15～0.25mm、高温ポンプで0.30～0.50mm。",
  },
  {
    name: "線速度限界式",
    formula: "V = π × d × n / 60000",
    description: "PV限界評価と材料選定のための平均シール端面線速度計算",
    variables: [
      { symbol: "V", meaning: "線速度（m/s）" },
      { symbol: "d", meaning: "シール端面平均径（mm）" },
      { symbol: "n", meaning: "回転数（rpm）" },
      { symbol: "π", meaning: "円周率（≈ 3.1416）" },
    ],
    note: "カーボングラファイト推奨限界：樹脂含浸 ≤ 20m/s、金属含浸 ≤ 25m/s、炭化 ≤ 30m/s。これらの限界を超える場合は、バランス形シール設計または強化冷却を使用。",
  },
  {
    name: "端面比圧計算式",
    formula: "Pc = Ps + (B × K) × P",
    description: "シール面の単位面積あたりの閉鎖力、シール性能と使用寿命を決定",
    variables: [
      { symbol: "Pc", meaning: "端面比圧（MPa）" },
      { symbol: "Ps", meaning: "ばね比圧（MPa）、通常0.08～0.20MPa" },
      { symbol: "B", meaning: "バランス比（バランス形0.65～0.85、アンバランス形0.90～1.10）" },
      { symbol: "K", meaning: "圧力係数（≈ 0.5～0.7）" },
      { symbol: "P", meaning: "媒体圧力（MPa）" },
    ],
    note: "推奨端面比圧範囲：0.3～0.8MPa。低すぎると漏れのリスク。高すぎると発熱と摩耗促進。カーボングラファイト vs SiC：低め。カーボングラファイト vs 金属：高め。",
  },
  {
    name: "熱膨張補正式",
    formula: "ΔL = α × L × ΔT",
    description: "温度変化によるグラファイト部品の寸法変化計算、クリアランス補正と焼嵌め設計に使用",
    variables: [
      { symbol: "ΔL", meaning: "寸法変化量（mm）" },
      { symbol: "α", meaning: "材料の熱膨張係数（/°C）" },
      { symbol: "L", meaning: "元の寸法（mm）" },
      { symbol: "ΔT", meaning: "温度変化（°C）= 運転温度 - 組立温度" },
    ],
    note: "グラファイトα ≈ (2.0～4.5)×10⁻⁶ /°C（グレードと成形方向により変動）。鋼α ≈ 11×10⁻⁶ /°C。焼嵌め設計では、ハウジング膨張とグラファイトブッシュ膨張の両方を計算し、その差が有効締代変化量。",
  },
  {
    name: "圧入締代安全式",
    formula: "σ_max = (δ × E) / (d × (1 - μ²)) ≤ [σ] / S",
    description: "選択した締代による最大応力が材料許容応力を超えないことを検証",
    variables: [
      { symbol: "σ_max", meaning: "最大円周引張応力（MPa）" },
      { symbol: "δ", meaning: "締代（mm）" },
      { symbol: "E", meaning: "グラファイト弾性係数（≈ 8000～12000 MPa）" },
      { symbol: "d", meaning: "ブッシュ外径（mm）" },
      { symbol: "μ", meaning: "グラファイトポアソン比（≈ 0.15～0.25）" },
      { symbol: "[σ]", meaning: "グラファイト許容応力（引張強さ／安全率）" },
      { symbol: "S", meaning: "安全率（推奨3～5）" },
    ],
    note: "カーボングラファイトの引張強さは圧縮強さの約1/3～1/4。計算には常に引張強さ（圧縮強さではなく）を使用。安全率≥3。推奨締代：グラファイト肉厚の0.5%～1.0%以下。",
  },
]

// ============================================================
// KOREAN (ko) - Fallback to English
// ============================================================

export const koCoreTables: CoreTable[] = [
  {
    id: "impregnation-selection",
    title: "함침 퀵 선택 가이드",
    description: "운전 매체와 온도를 기준으로 최적의 함침 유형을 선택합니다",
    headers: ["함침 유형", "온도 범위", "내식성", "적용 매체", "일반 용도"],
    rows: [
      ["페놀 수지", "-50°C ~ +200°C", "양호", "물, 오일, 약산/알칼리", "일반 펌프 씰, 수도 펌프"],
      ["퓨란 수지", "-50°C ~ +250°C", "우수", "강산, 강알칼리, 유기 용제", "화학 반응기, 산세 장비"],
      ["에폭시 수지", "-50°C ~ +180°C", "양호", "물, 오일, 알칼리", "식품 기계, 제약 장비"],
      ["안티몬 금속", "-100°C ~ +450°C", "보통", "고온 오일, 증기", "고온 펌프, 터빈 씰"],
      ["바빗 금속", "-100°C ~ +350°C", "보통", "고온 오일, 중하중", "중부하 부시, 대형 베어링"],
      ["탄화 처리(순수 카본)", "-200°C ~ +600°C", "우수", "거의 모든 매체(진공 포함)", "고온로, 반도체 장비"],
      ["PTFE 함침", "-100°C ~ +250°C", "우수", "강부식성 매체, 식품", "제약, 화학, 식품"],
    ],
  },
  {
    id: "sleeve-clearance",
    title: "부시 간극 표준 계산",
    description: "다양한 직경과 속도에서 흑연 부시와 강철 샤프트 사이의 권장 간극 값",
    headers: ["샤프트 직경 (mm)", "속도 < 500 rpm", "속도 500~1500 rpm", "속도 1500~3000 rpm", "속도 > 3000 rpm"],
    rows: [
      ["10 ~ 25", "0.08 ~ 0.12 mm", "0.10 ~ 0.15 mm", "0.15 ~ 0.20 mm", "0.20 ~ 0.30 mm"],
      ["25 ~ 50", "0.10 ~ 0.15 mm", "0.15 ~ 0.20 mm", "0.20 ~ 0.30 mm", "0.30 ~ 0.40 mm"],
      ["50 ~ 80", "0.12 ~ 0.18 mm", "0.18 ~ 0.25 mm", "0.25 ~ 0.35 mm", "0.35 ~ 0.50 mm"],
      ["80 ~ 120", "0.15 ~ 0.22 mm", "0.22 ~ 0.30 mm", "0.30 ~ 0.42 mm", "0.42 ~ 0.60 mm"],
      ["120 ~ 200", "0.18 ~ 0.28 mm", "0.25 ~ 0.38 mm", "0.35 ~ 0.50 mm", "0.50 ~ 0.70 mm"],
    ],
  },
  {
    id: "material-comparison",
    title: "흑연 재료 물성 비교",
    description: "성형 공정별 탄소흑연 재료의 물리적 및 기계적 특성",
    headers: ["특성", "성형 흑연", "등방성 흑연", "미립 흑연", "조립 흑연", "고순도 흑연"],
    rows: [
      ["부피 밀도 (g/cm³)", "1.70 ~ 1.80", "1.78 ~ 1.90", "1.65 ~ 1.75", "1.55 ~ 1.65", "1.70 ~ 1.85"],
      ["압축 강도 (MPa)", "≥ 180", "≥ 200", "≥ 140", "≥ 100", "≥ 160"],
      ["굴곡 강도 (MPa)", "≥ 60", "≥ 70", "≥ 45", "≥ 35", "≥ 55"],
      ["쇼어 경도 (HS)", "60 ~ 80", "65 ~ 85", "50 ~ 65", "40 ~ 55", "55 ~ 75"],
      ["기공률 (%)", "8 ~ 15", "5 ~ 12", "12 ~ 18", "15 ~ 22", "10 ~ 15"],
      ["최대 온도 (°C)", "400", "500", "350", "300", "600"],
      ["일반 용도", "씰 링, 부시", "프리미엄 기계식 씰", "일반 베어링", "저속 베어링", "고온, 진공"],
    ],
  },
  {
    id: "medium-adaptation",
    title: "매체 적응 재료 선택",
    description: "밀봉 매체 유형에 따른 권장 탄소흑연 등급 및 함침",
    headers: ["매체 유형", "권장 흑연 베이스", "권장 함침", "최대 온도", "비고"],
    rows: [
      ["청수 / 담수", "중미립 흑연", "페놀 수지", "200°C", "모래 함유 매체 피할 것"],
      ["해수", "미립 고밀도", "퓨란 수지", "180°C", "내염소성 함침 필요"],
      ["광유 / 작동유", "중립 흑연", "페놀 수지", "200°C", "저점도 오일은 간극 감소"],
      ["강산 (H₂SO₄, HCl)", "고순도 미립", "퓨란 수지", "250°C", "산과 함께 안티몬 함침 금지"],
      ["강알칼리 (NaOH, KOH)", "미립 흑연", "퓨란 수지", "200°C", "페놀 수지 비권장"],
      ["유기 용제", "미립 흑연", "퓨란 / PTFE", "200°C", "용제가 함침제를 용해하지 않는지 확인"],
      ["고온 증기", "미립 고밀도", "탄화 / 안티몬", "600°C", "산화 주의"],
      ["고온 가스", "고순도 흑연", "탄화", "600°C", "산소 1% 미만으로 제한"],
      ["진공 환경", "등방성 고밀도", "탄화", "500°C", "저방출성 요구됨"],
      ["식품 / 제약", "미립 흑연", "식품 등급 수지", "180°C", "FDA/EU 인증"],
    ],
  },
  {
    id: "temp-speed-limits",
    title: "온도 및 속도 제한 파라미터",
    description: "온도와 속도 조건이 결합된 상황에서 다양한 재료 조합의 운전 한계",
    headers: ["재료 조합", "최대 온도", "최대 선속도 (m/s)", "PV 한계 (MPa·m/s)", "윤활 방식"],
    rows: [
      ["카본 흑연 vs SiC", "200°C", "25", "18", "오일/수 윤활"],
      ["카본 흑연 vs 스테인리스강", "180°C", "15", "10", "오일 윤활"],
      ["안티몬 흑연 vs SiC", "450°C", "20", "15", "오일/자기윤활"],
      ["탄화 흑연 vs SiC", "600°C", "30", "22", "자기윤활"],
      ["카본 흑연 vs 세라믹", "250°C", "20", "14", "수/오일 윤활"],
      ["바빗 흑연 vs 강철", "350°C", "12", "8", "오일 윤활"],
      ["흑연 vs 흑연", "300°C", "8", "5", "자기윤활"],
    ],
  },
  {
    id: "wear-life",
    title: "마모 수명 추정 기준",
    description: "다양한 운전 조건에서 탄소흑연 씰의 예상 마모율 및 서비스 수명",
    headers: ["운전 조건", "일반 용도", "월간 마모량 (mm)", "예상 수명", "주요 요인"],
    rows: [
      ["청수 펌프 — 연속", "원심 펌프 씰", "0.02 ~ 0.05", "24 ~ 36개월", "매체 청결도"],
      ["화학 펌프 — 부식성", "반응기 교반기 씰", "0.05 ~ 0.10", "12 ~ 24개월", "매체 부식성"],
      ["고온 오일 펌프 — 250°C", "열오일 펌프 씰", "0.03 ~ 0.08", "18 ~ 30개월", "온도 안정성"],
      ["폐수 펌프 — 입자 함유", "하수 펌프 씰", "0.10 ~ 0.20", "6 ~ 12개월", "입자 경도/농도"],
      ["고속 펌프 — >3000rpm", "보일러 급수 펌프", "0.04 ~ 0.08", "12 ~ 20개월", "속도/밸런스"],
      ["드라이 런닝 — 간헐적", "팬 베어링", "0.01 ~ 0.03", "36 ~ 60개월", "기동-정지 빈도"],
      ["선박용 해수 펌프", "선미축 씰", "0.03 ~ 0.06", "18 ~ 36개월", "해수 모래 함량"],
    ],
  },
  {
    id: "press-fit-force",
    title: "압입력 안전 기준",
    description: "흑연 부시 설치를 위한 안전 간섭 범위 및 해당 압입력",
    headers: ["부시 외경 (mm)", "권장 간섭량 (mm)", "최대 압입력 (kN)", "압입 속도 (mm/s)", "비고"],
    rows: [
      ["20 ~ 40", "0.02 ~ 0.05", "5 ~ 15", "2 ~ 5", "가이드 모따기 ≥ 15°"],
      ["40 ~ 60", "0.03 ~ 0.07", "15 ~ 30", "2 ~ 5", "내경 거칠기 Ra ≤ 1.6"],
      ["60 ~ 80", "0.04 ~ 0.09", "30 ~ 50", "1 ~ 3", "압입 전 윤활제 도포"],
      ["80 ~ 120", "0.05 ~ 0.12", "50 ~ 80", "1 ~ 3", "수축 또는 열박음 권장"],
      ["120 ~ 160", "0.06 ~ 0.15", "80 ~ 120", "1 ~ 2", "힘-변위 모니터링 사용"],
      ["160 ~ 200", "0.08 ~ 0.18", "120 ~ 180", "0.5 ~ 1", "단계별 압입, 각 단계 확인"],
    ],
  },
  {
    id: "face-pressure",
    title: "단면 비접촉압 계산",
    description: "권장 단면 비접촉압 범위와 해당 스프링 압력 및 압력 계수",
    headers: ["씰 유형", "단면압 Pc (MPa)", "스프링압 Ps (MPa)", "압력 계수 K", "속도 범위"],
    rows: [
      ["내부 평형형", "0.3 ~ 0.6", "0.08 ~ 0.15", "0.65 ~ 0.75", "< 3000 rpm"],
      ["내부 불평형형", "0.4 ~ 0.8", "0.10 ~ 0.20", "0.85 ~ 0.95", "< 1500 rpm"],
      ["외부 평형형", "0.2 ~ 0.5", "0.06 ~ 0.12", "0.60 ~ 0.70", "< 5000 rpm"],
      ["양면 씰", "0.3 ~ 0.7", "0.10 ~ 0.18", "0.65 ~ 0.80", "< 4000 rpm"],
      ["고온 플렉시블 씰", "0.15 ~ 0.35", "0.05 ~ 0.10", "0.55 ~ 0.65", "< 2000 rpm"],
    ],
  },
  {
    id: "heat-treatment",
    title: "흑연 열처리 / 함침 온도 파라미터",
    description: "탄소흑연 가공 공정별 온도 제어 파라미터",
    headers: ["공정", "온도 범위", "유지 시간", "승온 속도", "목적"],
    rows: [
      ["소재 건조", "120°C ~ 180°C", "8 ~ 24 h", "≤ 30°C/h", "성형 수분 제거"],
      ["탄화 전처리", "800°C ~ 1200°C", "4 ~ 8 h", "≤ 50°C/h", "기초 탄화 강화"],
      ["흑연화", "2200°C ~ 2600°C", "2 ~ 6 h", "≤ 100°C/h", "결정성/전도성 개선"],
      ["수지 함침 경화", "150°C ~ 200°C", "4 ~ 12 h", "≤ 20°C/h", "기공 충전"],
      ["금속 함침 (Sb)", "600°C ~ 800°C", "2 ~ 4 h", "≤ 60°C/h", "진공 금속 함침"],
      ["바빗 함침", "300°C ~ 400°C", "1 ~ 3 h", "≤ 40°C/h", "베어링 합금 충전"],
      ["PTFE 함침 소결", "360°C ~ 380°C", "2 ~ 6 h", "≤ 30°C/h", "PTFE 충전 및 소결"],
      ["안정화 어닐링", "200°C ~ 350°C", "6 ~ 12 h", "≤ 25°C/h", "가공 응력 제거"],
    ],
  },
  {
    id: "troubleshooting",
    title: "소음, 과열 및 누수 문제 해결 가이드",
    description: "일반적인 씰 운전 고장 증상, 원인 및 해결 방법",
    headers: ["증상", "가능한 원인", "진단 방법", "해결 방법"],
    rows: [
      ["고음의 삐걱거림", "단면 건조 마찰 / 윤활 부족", "윤활 유량 확인", "유체 공급 증가 또는 단면 그루브 설계 개선"],
      ["저음의 덜거덕거림", "부시 간극 과대 / 샤프트 진동", "반경 방향 흔들림 측정", "간극 감소 또는 샤프트 교정"],
      ["단면 온도 > 80°C", "단면압 과대 / 냉각 부족", "씰 캐비티 온도 측정", "스프링 압축 감소 또는 냉각수 유량 증가"],
      ["느린 오일 누출 (방울/분)", "단면 평탄도 저하 / 연마재 박힘", "단면 래핑 품질 확인", "재래핑 또는 씰 링 교체"],
      ["대량 누출", "씰 링 균열 / 설치 정렬 불량", "정지 후 씰 면 점검", "씰 교체 및 설치 재조정"],
      ["기동 시에만 누출", "고정 씰 노후화 / 간극 변동", "O-링 및 부시 확인", "탄성 씰 교체"],
      ["점진적 소음 증가", "베어링 마모 누적", "베어링 간극 추세 측정", "부시 교체 계획"],
      ["비정상적인 단면 마모", "매체 내 경질 입자", "매체 샘플 필터링 및 분석", "상류 필터 추가 또는 내마모 등급으로 변경"],
    ],
  },
]
export const koFaqCategories: FAQCategory[] = [
  {
    category: "선정 관련 문제",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    items: [
      {
        question: "고온/저온 환경에서 흑연 재질 선택 방법은?",
        answer: "저온 환경(-50°C ~ 100°C): 페놀 수지 함침 중미립 흑연 사용. 비용 적정, 성능 안정적.\n중온 환경(100°C ~ 250°C): 푸란 수지 또는 에폭시 수지 함침 권장. 페놀보다 내열성 및 내식성 우수.\n고온 환경(250°C ~ 450°C): 안티몬 금속 또는 배빗 메탈 함침 흑연 필수. 등방압 성형 흑연 기재 권장, 고온에서 치수 안정성 우수.\n초고온 환경(450°C ~ 600°C): 탄화 처리(순수 탄소) 흑연 사용. 함침제 없이 흑연 자체의 내열성 활용. 불활성 또는 환원성 분위기 필요.",
      },
      {
        question: "습식/건식 조건에서 함침 공법 선택 방법은?",
        answer: "전습식 운전(충분한 윤활): 페놀 수지 또는 푸란 수지 함침으로 충분. 수지가 기공을 충전하여 밀도 증가, 마모 감소.\n습건식 반복(잦은 기동/정지): 자기윤활성이 우수한 함침 공법 필요. 금속 함침(안티몬/배빗) 또는 PTFE 함침 권장.\n완전 건식 운전(무윤활): 탄화 처리 흑연 또는 특수 수지 함침 사용. 낮은 PV 값(≤ 3 MPa·m/s)으로 설계, 자기윤활홈 가공.",
      },
      {
        question: "고속/중하중/저압에 가장 적합한 흑연은?",
        answer: "고속(선속도 > 20 m/s): 등방압 성형 미립 고밀도 흑연을 SiC와 조합. 안티몬 또는 탄화 처리 함침 권장.\n중하중(PV > 15 MPa·m/s): 배빗 메탈 또는 안티몬 함침 흑연 선정. 금속 충전으로 압축 강도 및 열전도율 크게 향상.\n저압(매체 압력 < 0.5 MPa): 성형 중립 흑연에 페놀 수지 함침으로 충분. 가장 비용 효율적.",
      },
      {
        question: "무유 자기윤활과 유윤활의 선정 차이는?",
        answer: "무유 자기윤활: 자기윤활성 등급이 높은 흑연 재질 필요. 탄화 처리 고순도 흑연 또는 PTFE 함침 흑연 권장. 실링 면에 칩 홈 또는 나선형 홈을 설치하여 흑연 전사막을 이용한 고체 윤활 구현. 권장 PV 범위: 0.5 ~ 5 MPa·m/s.\n유윤활: 표준 페놀 수지 또는 푸란 수지 함침 흑연으로 충분. 오일막이 주 윤활 기능 제공. PV 범위 최대 10 ~ 20 MPa·m/s.",
      },
    ],
  },
  {
    category: "조립 간극 관련 문제",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    items: [
      {
        question: "간극 과다로 인한 진동, 간극 과소로 인한 소착 해결 방법은?",
        answer: "간극 과다: 운전 중 축이 반경 방향으로 진동하여 시일 면 추종성 저하, 누설 증가, 이음, 이상 마모 발생. 해결 방법: 실제 회전수와 축경에 따른 표준 간극표 참조, 부싱 내경 재가공.\n간극 과소: 마찰열이 방산되지 못해 온도 상승으로 흑연이 열팽창하여 간극이 더욱 좁아지는 정궤환 루프 발생,最终 소착. 해결 방법: 간극을 권장 상한치까지 확대, 부싱 외경측 방열 조건 확인.\n판별 방법: 운전 30분 후 정지하여 부싱 온도 > 90°C = 과열, 운전 중 손으로 만져 명확한 흔들림 = 과대.",
      },
      {
        question: "축경별 표준 끼워맞춤 공차는?",
        answer: "일반적인 끼워맞춤 공차대(흑연 부싱 내경 vs 강축):\n소경 d ≤ 30 mm: H7/f7 또는 H7/g6, 간극 0.02 ~ 0.08 mm\n중경 30 < d ≤ 80 mm: H7/f7 또는 H8/e8, 간극 0.03 ~ 0.15 mm\n대경 80 < d ≤ 150 mm: H8/e8 또는 H8/d8, 간극 0.05 ~ 0.30 mm\n특대경 d > 150 mm: H8/d8 또는 H9/c9, 간극 0.10 ~ 0.50 mm\n참고: 실제 값은 회전수, 온도, 재료 열팽창 계수를 종합적으로 계산해야 함.",
      },
      {
        question: "열팽창을 고려한 간극 보정 방법은?",
        answer: "흑연 열팽창 계수 약 (2~4)×10⁻⁶ /°C, 강 11×10⁻⁶ /°C로 차이가 큽니다.\n보정 방법:\n1. 온도 변화에 따른 반경 변화량 계산: Δr = (α강 - α흑연) × r × ΔT\n2. 계산값을 상온 간극에 추가\n3. 예: 축경 80mm, 온도 상승 150°C, 반경 변화차 ≈ (11-3)×10⁻⁶ × 40 × 150 = 0.048mm\n4. 실제 상온 간극 = 운전 간극 + 0.048mm\n5. 참고: 냉각 후 간극이 축소되므로 열간 조립 설비는 냉각 후 심춰내기 확인 필요.",
      },
    ],
  },
  {
    category: "가공 및 설치 관련 문제",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    items: [
      {
        question: "흑연 선반가공, 드릴링, 연삭 시 주의사항은?",
        answer: "선반 가공: 다이아몬드 또는 초경 공구 사용. 경사각 0°~5°, 여유각 6°~10°. 절삭 속도 100~300 m/min, 이송 0.05~0.15 mm/rev. 연속 절삭 유지, 충격 이송으로 인한 모서리 파손 방지. 집진 장치 사용.\n드릴링: HSS 또는 초경 드릴, 선단각 90°~120°. 회전수 3000~8000 rpm, 이송 0.02~0.08 mm/rev. 입구와 출구 모서리 파손 방지를 위해 양면 모따기 필요.\n연삭: 탄화규소 연삭숫돌(입도 60~120#), 깊이 0.01 mm/pass 이하. 건식 연삭 우선.\n안전: 흑연 분진은 전도성이 있으므로 전기 장비는 방진 처리 필요. 작업자는 방진 마스크 착용.",
      },
      {
        question: "압입 시 편심, 모서리 파손, 균열 해결 방법은?",
        answer: "편심: 하우징 모따기 불균일 또는 압입력이 축심에서 이탈. 해결 방법: 하우징 모따기 확인(15° 이상), 가이드 맨드릴 사용, 압입 속도 2~5 mm/s 제어.\n모서리 파손: 부싱 단부 응력 집중 또는 과도한 죔새. 해결 방법: 부싱 외경 입구 모따기 추가(C0.5~C1.0), 죔새 적정화, 하우징 조도 확인(Ra 1.6 이하).\n균열: 죔새가 공차를 크게 초과 또는 하우징 진원도 초과. 해결 방법: 죔새 재계산, 하우징 진원도 측정(IT7 이하), 열박음 고려(하우징 150~200°C 가열).\n모니터링: 힘-변위 센서 부착 압입기로 실시간 압입 곡선 감시. 이상 시 즉시 정지.",
      },
      {
        question: "죔새 끼워맞춤의 조임 정도 관리 방법은?",
        answer: "죔새 계산 원칙:\n1. 최소 죔새: 최고 사용 온도에서 부싱이 느슨해지지 않도록 보장\n2. 최대 죔새: 흑연 부싱이 압축 응력으로 파괴되지 않도록 보장(흑연 압축 강도의 1/5~1/3)\n3. 경험식: δ ≈ (0.002~0.005) × 부싱 외경\n\n참고값:\n외경 ≤ 50 mm: 죔새 0.02~0.05 mm\n외경 50~100 mm: 죔새 0.04~0.10 mm\n외경 100~150 mm: 죔새 0.06~0.15 mm\n외경 > 150 mm: 죔새 0.08~0.20 mm\n\n조립 방법:\n- 소죔새: 상온 압입\n- 중죔새: 하우징 150~200°C 가열 열박음\n- 대죔새: 부싱 액체질소 냉각(-196°C) + 하우징 가열 병용 공법",
      },
    ],
  },
  {
    category: "사용 중 트러블 관련 문제",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z",
    items: [
      {
        question: "운전 중 발열이 큰 경우 대처 방법은?",
        answer: "확인 순서:\n1. 실제 온도 측정 — 적외선 온도계 또는 열전대로 시일 챔버 외벽 온도 측정. 80°C 초과 확인.\n2. 냉각 시스템 확인 — 냉각수/오일 유량 충분한가? 배관 막힘? 열교환기 효율 저하?\n3. 단면 비압 확인 — 스프링 과압축? 시일 면 폭 과대?\n4. 끼워맞춤 간극 확인 — 간극 과소는 마찰열 급증 원인.\n\n응급 조치:\n- 냉각액 유량을 권장치의 1.2~1.5배로 증가\n- 회전수 또는 압력 저감(임시 조치)\n- 윤활유 청정도 및 필터 상태 확인\n\n항구 대책:\n- 열전도율이 높은 함침 흑연으로 변경 검토\n- 시일 단면 냉각홈 설계 최적화\n- 축계 심춰내기 확인",
      },
      {
        question: "경미한 오일/수 누설 대책은?",
        answer: "누설량 ≤ 5 방울/분(허용 범위):\n1. 시일 단면 확인 — 길들이기 초기 경미한 누설이면 24~48시간 계속 관찰\n2. 글랜드 볼트 조정 — 균등 대각선 체결, 토크는 권장치의 50%~70%\n3. 보조 시일 확인 — O링/개스킷 노후 또는 손상?\n\n누설량 > 5 방울/분(정지 필요):\n1. 시일 단면 확인 — 열균열, 흠집, 변형? 상대면 평탄?\n2. 설치 치수 확인 — 압축량 적정? 단면이 축에 수직?\n3. 운전 조건 변동 확인 — 최근 온도, 압력, 회전수 변화?\n4. 시일 교환 — 분해 후 전 시일 부품 교환, 설치 재조정",
      },
      {
        question: "이음, 진동, 조기 마모의 원인은?",
        answer: "이음 진단:\n- 고주파 스퀼 → 단면 건식 마찰. 윤활계통 즉시 확인.\n- 저주파 윙 → 베어링 간극 과대 또는 회전체 불평형.\n- 간헐적 딸깍 소리 → 단면 이물질 혼입 또는 단면 국부 결손.\n\n진동 원인:\n1. 축 굽힘 또는 베어링 마모로 인한 경방향 흔들림 증대\n2. 시일 단면 평면도 저하 > 0.9 μm\n3. 매체 기화(플래싱)로 인한 단면 간헐적 개방\n4. 설치 심춰내기 편차 > 0.05 mm\n\n조기 마모 원인:\n1. 매체 중 연마 입자(모래, 용접 슬래그, 녹) — 상류 필터 추가\n2. 재질 선정 오류(경도 부족 또는 함침 등급 부적합)\n3. 실제 PV 값이 재료 허용 PV 초과\n4. 빈번한 기동/정지 또는 장시간 건식 운전\n5. 함침재 내성을 초과하는 매체 부식성",
      },
      {
        question: "고온에 의한 탄화 및 분말화 열화 해결 방법은?",
        answer: "탄화 열화 증상: 시일 단면에 흑색 분말 축적, 흑연 표면이 포슬포슬한 분말상으로 변하여 구조 강도 상실.\n\n원인 분석:\n1. 함침재 내열 한계 초과 — 페놀 수지는 200°C 초과에서 탄화 시작\n2. 국부적 핫스팟 — 단면 마찰열 + 매체 온도가 한계 초과\n3. 산화 분위기 — 고온에서 공기 중 산소가 흑연 산화, CO/CO₂ 방출로 구조 다공질화\n\n해결책:\n1. 즉시 정지 및 교환, 탄화 진행으로 인한 완전 시일 파손 방지\n2. 내열성 높은 함침 방식 선정(페놀→푸란→안티몬→탄화 처리)\n3. 분위기 관리 — 고온 조건에서는 불활성 가스 퍼지 또는 증기 시일 채용\n4. 냉각 최적화 — 시일 챔버 냉각 유량 증가\n5. 단면 홈 가공을 통한 윤활 및 방열 개선 검토\n\n예방: 사용 온도 대비 50°C 이상의 안전 마진 확보. 온도 모니터링 프로브 설치.",
      },
    ],
  },
  {
    category: "유지보수 관련 문제",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    items: [
      {
        question: "초기 운전 시 길들이기 절차는?",
        answer: "길들이기 목적: 시일 단면을 서로 길들여 안정적인 유체막과 마모 패턴 형성.\n\n절차:\n1. 기동 전: 시일 챔버 내 매체 충전 확인, 에어 빼기. 수동 회전 2~3회, 이상음 없이 회전 확인.\n2. 제1단계(0~30분): 정격 회전수의 30%~50%로 운전. 누설, 온도, 진동 모니터링. 경미한 누설 허용.\n3. 제2단계(30~120분): 서서히 정격의 70%~80%까지 상승. 온도 60°C 이하로 안정화.\n4. 제3단계(120~240분): 전속 운전. 온도 안정 후 누설량 허용 범위 확인.\n5. 길들이기 기간(최초 72시간): 가능한 연속 운전 유지.\n\n길들이기 중 온도 80°C 초과 또는 누설 현저히 증가 시 즉시 정지 점검.",
      },
      {
        question: "장기 정지 시 보관 및 방호 방법은?",
        answer: "단기 정지(≤ 7일):\n1. 시일 챔버 내 매체 충전 상태 유지, 단면 건조 방지\n2. 매주 1~2회 수동 회전, 단면 고착 방지\n\n중기 정지(7~90일):\n1. 챔버 내 매체 배출, 물 또는 용제로 세정\n2. 시일 단면에 방청 그리스 또는 전용 보호제 도포\n\n장기 보관(> 90일):\n1. 시일 부품 분해하여 별도 보관\n2. 세정 후 방청지로 포장\n3. 보관 환경: 온도 5~35°C, 습도 60% 이하, 직사광선 회피\n4. 산/알칼리 물질과의 접촉 회피\n5. 재사용 전에 시일 노화 및 변형 확인",
      },
      {
        question: "마모 한계 및 교체 판정 기준은?",
        answer: "시일 링:\n1. 단면 마모 깊이 > 1.0 mm 또는 결손이 시일 면 폭의 15% 초과\n2. 관통 균열 또는 결손\n3. 래핑 후 평면도 > 0.9 μm(재래핑 후 판정)\n4. 잔존 수명이 다음 점검 주기까지 부족\n\n부싱/베어링:\n1. 내경 마모량 > 초기 간극의 2~3배\n2. 외경에 명확한 마모 단차 또는 홈\n3. 벽 두께 감소량 > 초기 두께의 20%\n4. 진동값이 초기 대비 50% 이상 증가\n\n판정 절차:\n1. 초기 설치 치수 및 운전 파라미터 기록\n2. 정기적(3~6개월마다) 마모량 및 진동 경향 측정\n3. 마모 속도 급증 시 조기 교체 계획\n4. 이론 수명의 80% 도달 시 예비품 준비",
      },
    ],
  },
  {
    category: "커스텀 및 비표준품 관련 문제",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    items: [
      {
        question: "이형 흑연 부품 금형 제작 시 주의점은?",
        answer: "금형 평가 3요소:\n1. 수량과 비용 — 금형비 통상 3,000~15,000위안. 소량(< 50개)은 기계가공 권장, > 500개는 성형 검토.\n2. 정밀도 — 성형 공차 ±0.5%, 기계가공 ±0.05mm 가능.\n3. 형상 제한 — 복잡 형상(깊은 구멍, 세장비 > 5, 박육 < 3mm)은 성형 블랭크+기계가공 적합.\n\n금형 설계 주의점:\n- 드래프트 각도 1°~3° 이상(높이에 비례)\n- 예리한 모서리와 급격한 단면 변화 회피(최소 R ≥ 2mm)\n- 대칭 설계로 편하중 저감\n- 가공 여유 0.5~1.0mm 확보\n- 성형 방향이 밀도 균일성에 미치는 영향 고려",
      },
      {
        question: "홈 가공, 오일 홈, 턱 설계 기준은?",
        answer: "오일 홈/윤활 홈 설계:\n- 깊이: 0.3~1.0mm(축경과 PV 값에 따라)\n- 폭: 1.0~3.0mm\n- 형상: 스파이럴 홈(단방향), 헤링본 홈(양방향), 스트레이트 홈(저속용)\n- 피치: 5~15mm\n- 단부 거리: ≥ 2mm\n\n턱 설계:\n- 높이: 1~3mm(벽 두께에 따라)\n- 각도: 30°~45°\n- 모서리 R: R ≥ 0.5mm\n\n공차 지시:\n- 홈 위치도 ±0.2mm\n- 홈 깊이 +0.1mm / -0mm\n- 턱 동심도 ≤ 0.05mm",
      },
      {
        question: "단납기 커스텀 가공 품질 확보 방안은?",
        answer: "단납기 가공 흐름:\n1. 도면 확인 — 3D 모델로 구조 확인, 2D 도면에 주요 공차 지시\n2. 소재 선정 — 재고 재료 사용, 조달 기간 단축\n3. 공정 설계 — 황삭→정삭→드릴링→연삭 순서, 척킹 횟수 최소화\n4. 장비 선정 — 고정밀 NC 선반(위치 결정精度 ≤ 0.005mm) + 다이아몬드 공구\n\n정밀도 레벨:\n- 표준 ±0.05mm: 표준 선반 가공\n- 정밀 ±0.02mm: 연삭 가공 필요\n- 고정밀 ±0.01mm: NC 연삭기 + 3차원 측정\n- 평면도 0.9μm: 래핑 가공 필요\n\n단납기 기준(단순 부싱/시일 링):\n- 도면 가공: 3~5 영업일\n- 재료 조달 포함: 7~10 영업일\n- 금형 제작 포함: 15~25 영업일",
      },
    ],
  },
]
export const koFormulas: Formula[] = [
  {
    name: "부시 간극 일반 공식",
    formula: "C = C₀ + α₁ × d × ΔT₁ - α₂ × d × ΔT₂ + K × d × n",
    description: "열팽창, 원심력 및 속도 효과를 고려한 간극 계산",
    variables: [
      { symbol: "C", meaning: "운전 간극 (mm)" },
      { symbol: "C₀", meaning: "초기 조립 간극 (mm), 일반적으로 0.02~0.08 mm" },
      { symbol: "α₁", meaning: "하우징 재료 열팽창계수 (강철 ≈ 11×10⁻⁶ /°C)" },
      { symbol: "α₂", meaning: "흑연 열팽창계수 (≈ 2~4×10⁻⁶ /°C)" },
      { symbol: "d", meaning: "샤프트 직경 (mm)" },
      { symbol: "ΔT₁", meaning: "하우징 온도 상승 (°C)" },
      { symbol: "ΔT₂", meaning: "흑연 온도 상승 (°C)" },
      { symbol: "K", meaning: "원심력 계수 (≈ 0.001~0.003)" },
      { symbol: "n", meaning: "속도 (rpm)" },
    ],
    note: "단순화 공식: C = C₀ + (α₁ - α₂) × d × ΔT. 일반적: 저압 수도 펌프 0.15~0.25 mm, 고온 펌프 0.30~0.50 mm.",
  },
  {
    name: "선속도 한계 공식",
    formula: "V = π × d × n / 60000",
    description: "PV 한계 평가 및 재료 선정을 위한 평균 씰 면 선속도 계산",
    variables: [
      { symbol: "V", meaning: "선속도 (m/s)" },
      { symbol: "d", meaning: "씰 면 평균 직경 (mm)" },
      { symbol: "n", meaning: "속도 (rpm)" },
      { symbol: "π", meaning: "원주율 (≈ 3.1416)" },
    ],
    note: "카본 흑연 권장 한계: 수지 함침 ≤ 20 m/s, 금속 함침 ≤ 25 m/s, 탄화 ≤ 30 m/s. 이 한계를 초과하는 경우 평형형 씰 설계 또는 강화 냉각 사용.",
  },
  {
    name: "단면 비접촉압 공식",
    formula: "Pc = Ps + (B × K) × P",
    description: "씰 면의 단위 면적당 닫힘 힘, 밀봉 성능과 수명 결정",
    variables: [
      { symbol: "Pc", meaning: "단면 비접촉압 (MPa)" },
      { symbol: "Ps", meaning: "스프링 비접촉압 (MPa), 일반적으로 0.08~0.20 MPa" },
      { symbol: "B", meaning: "평형 비율 (평형형 0.65~0.85, 불평형형 0.90~1.10)" },
      { symbol: "K", meaning: "압력 계수 (≈ 0.5~0.7)" },
      { symbol: "P", meaning: "매체 압력 (MPa)" },
    ],
    note: "권장 단면압 범위: 0.3~0.8 MPa. 너무 낮음: 누출 위험. 너무 높음: 발열 및 가속 마모. 카본 흑연 vs SiC: 낮은 쪽. 카본 흑연 vs 금속: 높은 쪽.",
  },
  {
    name: "열팽창 보상 공식",
    formula: "ΔL = α × L × ΔT",
    description: "온도 변화에 따른 흑연 부품의 치수 변화 계산, 간극 보정 및 수축 맞춤 설계에 사용",
    variables: [
      { symbol: "ΔL", meaning: "치수 변화량 (mm)" },
      { symbol: "α", meaning: "재료 열팽창계수 (/°C)" },
      { symbol: "L", meaning: "원래 치수 (mm)" },
      { symbol: "ΔT", meaning: "온도 변화 (°C) = 운전 온도 - 설치 온도" },
    ],
    note: "흑연 α ≈ (2.0~4.5)×10⁻⁶ /°C (등급과 성형 방향에 따라 다름). 강철 α ≈ 11×10⁻⁶ /°C. 수축 맞춤 설계의 경우 하우징 팽창과 흑연 부시 팽창을 모두 계산하며, 그 차이가 유효 간섭 변화량입니다.",
  },
  {
    name: "압입 간섭 안전 공식",
    formula: "σ_max = (δ × E) / (d × (1 - μ²)) ≤ [σ] / S",
    description: "선택된 간섭량으로 인한 최대 응력이 재료 허용 응력을 초과하지 않는지 확인",
    variables: [
      { symbol: "σ_max", meaning: "최대 원주 인장 응력 (MPa)" },
      { symbol: "δ", meaning: "간섭량 (mm)" },
      { symbol: "E", meaning: "흑연 탄성 계수 (≈ 8000~12000 MPa)" },
      { symbol: "d", meaning: "부시 외경 (mm)" },
      { symbol: "μ", meaning: "흑연 푸아송 비 (≈ 0.15~0.25)" },
      { symbol: "[σ]", meaning: "흑연 허용 응력 (인장 강도 / 안전 계수)" },
      { symbol: "S", meaning: "안전 계수 (권장 3~5)" },
    ],
    note: "카본 흑연 인장 강도는 압축 강도의 약 1/3~1/4입니다. 계산 시 항상 인장 강도(압축 강도 아님)를 사용하십시오. 안전 계수 ≥ 3. 권장 간섭량: 흑연 벽 두께의 0.5%~1.0% 이하.",
  },
]

// ============================================================
// LOCALE-BASED EXPORTS
// ============================================================

export const faqCoreTablesByLocale: Record<string, CoreTable[]> = {
  zh: coreTables,
  en: enCoreTables,
  vi: viCoreTables,
  th: thCoreTables,
  ru: ruCoreTables,
  ja: jaCoreTables,
  ko: koCoreTables,
}

export const faqCategoriesByLocale: Record<string, FAQCategory[]> = {
  zh: faqCategories,
  en: enFaqCategories,
  vi: viFaqCategories,
  th: thFaqCategories,
  ru: ruFaqCategories,
  ja: jaFaqCategories,
  ko: koFaqCategories,
}

export const faqFormulasByLocale: Record<string, Formula[]> = {
  zh: formulas,
  en: enFormulas,
  vi: viFormulas,
  th: thFormulas,
  ru: ruFormulas,
  ja: jaFormulas,
  ko: koFormulas,
}
