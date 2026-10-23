/**
 * 隐私政策文案（7 语言）。
 *
 * 内容约定：`blocks` 里以 "- " 开头的条目渲染为列表项，其余渲染为段落。
 * 改文案时注意：Google / Meta / Microsoft / Vercel 这几家必须与实际接入的追踪一致，
 * 加装新的第三方脚本就要回来同步这一页（CMS 里没有，纯静态）。
 */

export type PrivacyBlock = string
export type PrivacySection = { heading: string; blocks: PrivacyBlock[] }
export type PrivacyContent = {
  title: string
  updatedLabel: string
  updated: string
  intro: string
  sections: PrivacySection[]
  contactHeading: string
  contactBlocks: PrivacyBlock[]
}

const CONTACT_EMAIL = "ni@hhseal.cn"
const CONTACT_PHONE = "+86 199 5646 8316"

export const privacyContent: Record<string, PrivacyContent> = {
  zh: {
    title: "隐私政策",
    updatedLabel: "最近更新",
    updated: "2026 年 10 月 23 日",
    intro:
      "本政策说明霍邱县华豪密封件有限公司（下称“我们”）通过 hhseal.cn 收集哪些个人数据、为什么收集、以及你可以怎么处理。适用于本网站的访客、潜在客户，以及任何通过本站与我们联系的人。",
    sections: [
      {
        heading: "一、谁在处理你的数据",
        blocks: [
          `霍邱县华豪密封件有限公司（英文名 Huahao Carbon Graphite Sealing Co., Ltd.）是本站个人数据的处理者。我们在安徽省六安市霍邱县龙潭镇产业园生产碳石墨密封环、轴套/轴承与三瓣环。`,
          "地址：中国安徽省六安市霍邱县龙潭镇产业园 14 号",
          `邮箱：${CONTACT_EMAIL}　电话：${CONTACT_PHONE}`,
          "我们未设立数据保护官（DPO）。与隐私相关的询问请发到上述邮箱，由负责出口业务的同事处理。",
        ],
      },
      {
        heading: "二、我们收集哪些数据",
        blocks: [
          "**你主动提供的**：通过询价表单、邮件或即时通讯发来的姓名、公司、国家、邮箱、电话或聊天账号、意向产品，以及你留言的内容和附带的图纸、规格文件。",
          "**自动收集的**：IP 地址（用于判断国家，并做哈希后用于访客去重统计）、浏览器与设备类型、来源页面、访问的页面与停留时间。",
          "**Cookie**：见第五节。",
          "我们不收集 16 岁以下人士的数据，本站也不处理任何支付卡信息。",
        ],
      },
      {
        heading: "三、我们为什么使用这些数据",
        blocks: [
          "- 回复你的询价、报价与供货（履行合同或订立合同前的措施）",
          "- 了解哪些页面与市场更有效，改进网站内容（合法利益）",
          "- 衡量广告是否触达了正确的买家（在需要时基于你的同意）",
          "- 保障网站安全、防止滥用（合法利益）",
          "- 满足会计、税务与出口报关的法定要求（法律义务）",
          "我们不出售个人数据，也不使用询价内容做自动化决策或画像。",
        ],
      },
      {
        heading: "四、处理的法律依据（GDPR）",
        blocks: [
          "- 询价处理：履行合同或应你要求采取合同订立前的措施",
          "- 网站分析与广告效果衡量：你的同意；在同意不是必要条件时，为我们经营与改进业务的合法利益",
          "- 安全与防滥用：合法利益",
          "- 会计、税务与出口记录：法律义务",
          "你可以随时撤回同意，撤回不影响撤回之前已进行的处理。",
        ],
      },
      {
        heading: "五、Cookie 与类似技术",
        blocks: [
          "- **必要 Cookie**：`NEXT_LOCALE`，用于记住你的语言选择，有效期约 1 年。网站没有它无法正常工作，因此不受同意开关控制。",
          "- **分析 Cookie**：用于了解哪些页面被阅读、访客在哪里卡住。只有你允许“分析”之后才会写入。",
          "- **广告 Cookie**：Google Ads 的转化与再营销 Cookie（如 `_gcl_au`）、Meta Pixel（`_fbp`）。只有你允许“广告”之后才会写入 —— Google 侧通过 Consent Mode v2 控制，Meta Pixel 在未获同意时根本不加载。",
          "改变主意：点击页脚的“Cookie 设置”即可重新选择。若你位于欧洲经济区、英国或瑞士，首次访问时会看到同意横幅；其他地区的访客不会被打扰。",
        ],
      },
      {
        heading: "六、我们与谁共享",
        blocks: [
          "- Google（Google Ireland Ltd. / Google LLC）：广告转化衡量 —— 需广告同意",
          "- Meta（Meta Platforms Ireland Ltd.）：广告效果衡量 —— 需广告同意",
          "- Microsoft：Clarity 会话分析 —— 需分析同意（如启用）",
          "- Vercel Inc.：网站托管与内容分发",
          "- 我们的企业邮箱服务商：日常业务往来邮件",
          "- 承运人、货代与报关行：仅在履行订单时",
          "- 专业顾问与监管机构：在法律要求时",
          "我们不会向任何人出售或出租个人数据。",
        ],
      },
      {
        heading: "七、跨境传输",
        blocks: [
          "我们的经营主体位于中国。运营本网站、回复询价，意味着数据会被传输到中国处理。欧盟委员会未对中国作出充分性认定。",
          "当涉及欧洲经济区或英国访客的个人数据时，我们依赖标准合同条款，或依据“为履行与你之间的合同所必需”这一例外进行传输。你可以联系我们了解具体保障措施。",
        ],
      },
      {
        heading: "八、保存期限",
        blocks: [
          "- 转化为订单的询价：按中国会计与出口管理规定保存（会计凭证通常 10 年）",
          "- 未成交的询价：最多保存 24 个月，之后删除",
          "- 访客统计：IP 做哈希后存储；原始访问记录最多保存 14 个月",
          "- 同意记录：保存 12 个月后重新征询",
        ],
      },
      {
        heading: "九、你的权利",
        blocks: [
          "你有权访问、更正、删除你的个人数据，有权限制或反对处理，有权要求数据可携带，也有权随时撤回同意。",
          "如果你位于欧洲经济区，可向所在国的数据保护监管机构投诉；在英国可向 ICO 投诉。",
          `行使上述任何权利，请发邮件至 ${CONTACT_EMAIL}。我们会在 30 天内回复。`,
        ],
      },
      {
        heading: "十、安全",
        blocks: [
          "全站 HTTPS 传输；后台管理区需登录鉴权；访客 IP 在入库前做哈希处理。",
          "没有任何系统是绝对安全的。如果发生可能影响你权利的数据泄露，我们会按法律要求通知你和相关监管机构。",
        ],
      },
      {
        heading: "十一、政策变更",
        blocks: [
          "我们可能更新本政策。页面顶部的日期即当前版本。涉及实质变化的，会在本页公告。",
        ],
      },
    ],
    contactHeading: "联系我们",
    contactBlocks: [
      `如对本政策或你的个人数据有任何疑问：${CONTACT_EMAIL}`,
      `电话：${CONTACT_PHONE}`,
      "地址：中国安徽省六安市霍邱县龙潭镇产业园 14 号",
    ],
  },

  en: {
    title: "Privacy Policy",
    updatedLabel: "Last updated",
    updated: "23 October 2026",
    intro:
      "This policy explains what personal data Huahao Carbon Graphite Sealing Co., Ltd. (“we”) collects through hhseal.cn, why we collect it, and what you can do about it. It applies to visitors of this website, prospective customers, and anyone who contacts us through it.",
    sections: [
      {
        heading: "1. Who is responsible",
        blocks: [
          "Huahao Carbon Graphite Sealing Co., Ltd. (霍邱县华豪密封件有限公司) is the controller of the personal data described here. We manufacture carbon graphite seal rings, bushings/bearings and split rings at our plant in Huoqiu County, Lu'an, Anhui, China.",
          "Address: No.14, Longtan Town Industrial Park, Huoqiu County, Lu'an, Anhui, China",
          `Email: ${CONTACT_EMAIL}  ·  Phone: ${CONTACT_PHONE}`,
          "We have not appointed a Data Protection Officer. Privacy enquiries go to the address above and are handled by the colleague responsible for export sales.",
        ],
      },
      {
        heading: "2. What we collect",
        blocks: [
          "**Provided by you**: name, company, country, email, phone or messaging ID, product of interest, and the content of your message together with any drawing or specification file you attach — through the enquiry form, by email, or over messaging apps.",
          "**Collected automatically**: IP address (used to infer country and, once hashed, to de-duplicate visitor counts), browser and device type, referring page, pages viewed and time on page.",
          "**Cookies**: see section 5.",
          "We do not knowingly collect data from anyone under 16, and this site does not process payment card data.",
        ],
      },
      {
        heading: "3. Why we use it",
        blocks: [
          "- To answer your enquiry, quote and supply (performance of a contract or steps prior to entering one)",
          "- To understand which pages and markets perform, and to improve the site (legitimate interest)",
          "- To measure whether our advertising reaches the right buyers (your consent, where required)",
          "- To keep the site secure and prevent abuse (legitimate interest)",
          "- To meet accounting, tax and export obligations (legal obligation)",
          "We do not sell personal data, and we do not use enquiry content for automated decision-making or profiling.",
        ],
      },
      {
        heading: "4. Legal bases (GDPR)",
        blocks: [
          "- Enquiry handling: performance of a contract, or steps taken at your request before entering one",
          "- Site analytics and advertising measurement: your consent; where consent is not required, our legitimate interest in running and improving the business",
          "- Security and abuse prevention: legitimate interest",
          "- Accounting, tax and export records: legal obligation",
          "You may withdraw consent at any time. Withdrawal does not affect processing carried out before it.",
        ],
      },
      {
        heading: "5. Cookies and similar technologies",
        blocks: [
          "- **Strictly necessary**: `NEXT_LOCALE`, which remembers your language choice for about one year. The site cannot work without it, so it is not governed by the consent switches.",
          "- **Analytics**: help us see which pages are read and where visitors get stuck. Set only after you allow analytics.",
          "- **Advertising**: Google Ads conversion and remarketing cookies (such as `_gcl_au`) and Meta Pixel (`_fbp`). Set only after you allow advertising — Google is gated through Consent Mode v2, and the Meta Pixel is not loaded at all until consent is given.",
          "To change your mind, use “Cookie settings” in the footer. Visitors in the EEA, the UK and Switzerland see a consent banner on their first visit; visitors elsewhere are not interrupted.",
        ],
      },
      {
        heading: "6. Who we share it with",
        blocks: [
          "- Google (Google Ireland Ltd. / Google LLC) — advertising conversion measurement — requires advertising consent",
          "- Meta (Meta Platforms Ireland Ltd.) — advertising measurement — requires advertising consent",
          "- Microsoft — Clarity session analytics — requires analytics consent, where enabled",
          "- Vercel Inc. — website hosting and content delivery",
          "- Our business email provider — ordinary correspondence",
          "- Carriers, freight forwarders and customs brokers — only when fulfilling an order",
          "- Professional advisers and authorities — where legally required",
          "We do not sell or rent personal data to anyone.",
        ],
      },
      {
        heading: "7. International transfers",
        blocks: [
          "Our company is based in China. Operating this website and answering enquiries therefore involves transferring data to China for processing. The European Commission has not adopted an adequacy decision for China.",
          "Where personal data of EEA or UK visitors is transferred, we rely on the Standard Contractual Clauses, or on the necessity of the transfer for the performance of a contract with you. You can contact us for details of the safeguards applied.",
        ],
      },
      {
        heading: "8. How long we keep it",
        blocks: [
          "- Enquiries that become orders: for the period required by Chinese accounting and export rules (accounting vouchers, generally 10 years)",
          "- Enquiries that do not: up to 24 months, then deleted",
          "- Visitor analytics: IPs hashed before storage; raw visit records kept up to 14 months",
          "- Consent records: kept for 12 months, after which you are asked again",
        ],
      },
      {
        heading: "9. Your rights",
        blocks: [
          "You have the right to access, correct and erase your personal data, to restrict or object to processing, to data portability, and to withdraw consent at any time.",
          "If you are in the EEA you may complain to your national data protection authority; in the UK, to the ICO.",
          `To exercise any of these rights, email ${CONTACT_EMAIL}. We respond within 30 days.`,
        ],
      },
      {
        heading: "10. Security",
        blocks: [
          "The site is served over HTTPS; the administration area requires authentication; visitor IP addresses are hashed before storage.",
          "No system is perfect. If a breach occurs that is likely to affect your rights, we will notify you and the relevant authority as required by law.",
        ],
      },
      {
        heading: "11. Changes to this policy",
        blocks: [
          "We may update this policy. The date at the top shows the current version. Material changes will be announced on this page.",
        ],
      },
    ],
    contactHeading: "Contact us",
    contactBlocks: [
      `For any question about this policy or your personal data: ${CONTACT_EMAIL}`,
      `Phone: ${CONTACT_PHONE}`,
      "Address: No.14, Longtan Town Industrial Park, Huoqiu County, Lu'an, Anhui, China",
    ],
  },

  vi: {
    title: "Chính sách quyền riêng tư",
    updatedLabel: "Cập nhật lần cuối",
    updated: "23 tháng 10, 2026",
    intro:
      "Chính sách này giải thích Công ty TNHH Vòng đệm than chì Huahao (霍邱县华豪密封件有限公司) thu thập dữ liệu cá nhân nào qua hhseal.cn, vì sao thu thập và bạn có thể làm gì. Chính sách áp dụng cho khách truy cập website, khách hàng tiềm năng và bất kỳ ai liên hệ với chúng tôi qua website.",
    sections: [
      {
        heading: "1. Đơn vị chịu trách nhiệm",
        blocks: [
          "Công ty TNHH Vòng đệm than chì Huahao là đơn vị kiểm soát dữ liệu cá nhân được mô tả ở đây. Chúng tôi sản xuất vòng đệm than chì carbon, bạc lót/ổ trục và vòng chẻ tại nhà máy ở huyện Hoắc Khâu, Lục An, An Huy, Trung Quốc.",
          "Địa chỉ: Số 14, Khu công nghiệp thị trấn Long Đàm, huyện Hoắc Khâu, Lục An, An Huy, Trung Quốc",
          `Email: ${CONTACT_EMAIL}  ·  Điện thoại: ${CONTACT_PHONE}`,
          "Chúng tôi không bổ nhiệm Cán bộ bảo vệ dữ liệu. Mọi câu hỏi về quyền riêng tư xin gửi tới địa chỉ trên, do bộ phận phụ trách kinh doanh xuất khẩu xử lý.",
        ],
      },
      {
        heading: "2. Dữ liệu chúng tôi thu thập",
        blocks: [
          "**Bạn cung cấp**: họ tên, công ty, quốc gia, email, điện thoại hoặc tài khoản chat, sản phẩm quan tâm, nội dung tin nhắn và các tệp bản vẽ/thông số đính kèm.",
          "**Thu thập tự động**: địa chỉ IP (dùng để suy ra quốc gia và sau khi băm để loại trùng lượt truy cập), loại trình duyệt và thiết bị, trang giới thiệu, các trang đã xem và thời gian truy cập.",
          "**Cookie**: xem mục 5.",
          "Chúng tôi không cố ý thu thập dữ liệu của người dưới 16 tuổi và không xử lý dữ liệu thẻ thanh toán trên website này.",
        ],
      },
      {
        heading: "3. Mục đích sử dụng",
        blocks: [
          "- Trả lời yêu cầu, báo giá và cung cấp hàng (thực hiện hợp đồng hoặc các bước trước khi ký hợp đồng)",
          "- Hiểu trang và thị trường nào hiệu quả, cải thiện nội dung website (lợi ích hợp pháp)",
          "- Đo lường xem quảng cáo có tiếp cận đúng người mua (dựa trên sự đồng ý của bạn khi cần)",
          "- Bảo mật website và chống lạm dụng (lợi ích hợp pháp)",
          "- Tuân thủ nghĩa vụ kế toán, thuế và xuất khẩu (nghĩa vụ pháp lý)",
          "Chúng tôi không bán dữ liệu cá nhân và không dùng nội dung yêu cầu để ra quyết định tự động hay lập hồ sơ cá nhân.",
        ],
      },
      {
        heading: "4. Cơ sở pháp lý (GDPR)",
        blocks: [
          "- Xử lý yêu cầu: thực hiện hợp đồng hoặc theo yêu cầu của bạn trước khi ký hợp đồng",
          "- Phân tích website và đo lường quảng cáo: sự đồng ý của bạn; khi không bắt buộc, dựa trên lợi ích hợp pháp của chúng tôi",
          "- Bảo mật và chống lạm dụng: lợi ích hợp pháp",
          "- Hồ sơ kế toán, thuế, xuất khẩu: nghĩa vụ pháp lý",
          "Bạn có thể rút lại sự đồng ý bất cứ lúc nào, không ảnh hưởng đến việc xử lý đã thực hiện trước đó.",
        ],
      },
      {
        heading: "5. Cookie và công nghệ tương tự",
        blocks: [
          "- **Cookie thiết yếu**: `NEXT_LOCALE` ghi nhớ lựa chọn ngôn ngữ khoảng một năm. Không có nó website không hoạt động, nên không phụ thuộc công tắc đồng ý.",
          "- **Cookie phân tích**: giúp biết trang nào được đọc, khách dừng ở đâu. Chỉ đặt sau khi bạn cho phép phân tích.",
          "- **Cookie quảng cáo**: cookie chuyển đổi và tiếp thị lại của Google Ads (như `_gcl_au`) và Meta Pixel (`_fbp`). Chỉ đặt sau khi bạn cho phép quảng cáo — Google được kiểm soát qua Consent Mode v2, Meta Pixel không tải nếu chưa có đồng ý.",
          "Muốn thay đổi, dùng mục “Cài đặt cookie” ở chân trang. Khách ở EEA, Vương quốc Anh và Thụy Sĩ sẽ thấy biểu ngữ đồng ý trong lần truy cập đầu; khu vực khác không bị làm phiền.",
        ],
      },
      {
        heading: "6. Chia sẻ với ai",
        blocks: [
          "- Google (Google Ireland Ltd. / Google LLC) — đo lường chuyển đổi quảng cáo — cần đồng ý quảng cáo",
          "- Meta (Meta Platforms Ireland Ltd.) — đo lường quảng cáo — cần đồng ý quảng cáo",
          "- Microsoft — phân tích phiên Clarity — cần đồng ý phân tích (nếu được bật)",
          "- Vercel Inc. — lưu trữ và phân phối website",
          "- Nhà cung cấp email doanh nghiệp — thư từ công việc",
          "- Hãng vận tải, giao nhận và khai hải quan — chỉ khi thực hiện đơn hàng",
          "- Cố vấn chuyên môn và cơ quan có thẩm quyền — khi pháp luật yêu cầu",
          "Chúng tôi không bán hoặc cho thuê dữ liệu cá nhân.",
        ],
      },
      {
        heading: "7. Chuyển dữ liệu quốc tế",
        blocks: [
          "Công ty chúng tôi đặt tại Trung Quốc, nên việc vận hành website và trả lời yêu cầu kéo theo việc chuyển dữ liệu sang Trung Quốc để xử lý. Ủy ban châu Âu chưa có quyết định đầy đủ về mức độ bảo vệ cho Trung Quốc.",
          "Khi liên quan đến dữ liệu của khách ở EEA hoặc Vương quốc Anh, chúng tôi dựa trên Điều khoản hợp đồng tiêu chuẩn, hoặc dựa trên sự cần thiết của việc chuyển dữ liệu để thực hiện hợp đồng với bạn. Liên hệ chúng tôi để biết chi tiết biện pháp bảo đảm.",
        ],
      },
      {
        heading: "8. Thời gian lưu trữ",
        blocks: [
          "- Yêu cầu trở thành đơn hàng: theo quy định kế toán và xuất khẩu Trung Quốc (chứng từ kế toán thường 10 năm)",
          "- Yêu cầu không thành đơn: tối đa 24 tháng rồi xóa",
          "- Thống kê truy cập: IP được băm trước khi lưu; bản ghi truy cập thô tối đa 14 tháng",
          "- Bản ghi đồng ý: lưu 12 tháng, sau đó hỏi lại",
        ],
      },
      {
        heading: "9. Quyền của bạn",
        blocks: [
          "Bạn có quyền truy cập, chỉnh sửa, xóa dữ liệu cá nhân, hạn chế hoặc phản đối việc xử lý, yêu cầu chuyển dữ liệu và rút lại sự đồng ý bất cứ lúc nào.",
          "Nếu bạn ở EEA, bạn có thể khiếu nại cơ quan bảo vệ dữ liệu quốc gia; tại Vương quốc Anh là ICO.",
          `Để thực hiện các quyền này, gửi email tới ${CONTACT_EMAIL}. Chúng tôi phản hồi trong 30 ngày.`,
        ],
      },
      {
        heading: "10. Bảo mật",
        blocks: [
          "Website dùng HTTPS; khu vực quản trị yêu cầu đăng nhập; địa chỉ IP của khách được băm trước khi lưu.",
          "Không hệ thống nào an toàn tuyệt đối. Nếu xảy ra sự cố có thể ảnh hưởng đến quyền của bạn, chúng tôi sẽ thông báo cho bạn và cơ quan có thẩm quyền theo luật.",
        ],
      },
      {
        heading: "11. Thay đổi chính sách",
        blocks: [
          "Chúng tôi có thể cập nhật chính sách này. Ngày ở đầu trang là phiên bản hiện hành. Thay đổi quan trọng sẽ được thông báo trên trang này.",
        ],
      },
    ],
    contactHeading: "Liên hệ",
    contactBlocks: [
      `Mọi câu hỏi về chính sách này hoặc dữ liệu cá nhân của bạn: ${CONTACT_EMAIL}`,
      `Điện thoại: ${CONTACT_PHONE}`,
      "Địa chỉ: Số 14, Khu công nghiệp thị trấn Long Đàm, huyện Hoắc Khâu, Lục An, An Huy, Trung Quốc",
    ],
  },

  th: {
    title: "นโยบายความเป็นส่วนตัว",
    updatedLabel: "ปรับปรุงล่าสุด",
    updated: "23 ตุลาคม 2026",
    intro:
      "นโยบายนี้อธิบายว่าบริษัท หัวเฮา ซีลิ่ง จำกัด (霍邱县华豪密封件有限公司) เก็บข้อมูลส่วนบุคคลใดผ่าน hhseal.cn เพราะเหตุใด และคุณทำอะไรได้บ้าง มีผลกับผู้เข้าชมเว็บไซต์ ลูกค้าที่สนใจ และผู้ที่ติดต่อเราผ่านเว็บไซต์นี้",
    sections: [
      {
        heading: "1. ผู้รับผิดชอบข้อมูล",
        blocks: [
          "บริษัท หัวเฮา ซีลิ่ง จำกัด เป็นผู้ควบคุมข้อมูลส่วนบุคคลตามที่ระบุในนโยบายนี้ เราผลิตแหวนซีลคาร์บอนกราไฟต์ บูช/ตลับลูกปืน และแหวนผ่าครึ่ง ที่โรงงานในอำเภอฮั่วชิว เมืองลู่อาน มณฑลอันฮุย ประเทศจีน",
          "ที่อยู่: เลขที่ 14 นิคมอุตสาหกรรมตำบลหลงถาน อำเภอฮั่วชิว เมืองลู่อาน มณฑลอันฮุย ประเทศจีน",
          `อีเมล: ${CONTACT_EMAIL}  ·  โทรศัพท์: ${CONTACT_PHONE}`,
          "เราไม่ได้แต่งตั้งเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล คำถามด้านความเป็นส่วนตัวส่งมาที่อีเมลข้างต้น โดยทีมงานฝ่ายขายต่างประเทศเป็นผู้ดูแล",
        ],
      },
      {
        heading: "2. ข้อมูลที่เราเก็บ",
        blocks: [
          "**ข้อมูลที่คุณให้**: ชื่อ บริษัท ประเทศ อีเมล โทรศัพท์หรือบัญชีแชท สินค้าที่สนใจ เนื้อหาข้อความ และไฟล์แบบร่างหรือสเปกที่แนบมา",
          "**ข้อมูลที่เก็บอัตโนมัติ**: ที่อยู่ IP (ใช้ระบุประเทศ และเมื่อแฮชแล้วใช้ตัดข้อมูลเข้าชมซ้ำ) ชนิดเบราว์เซอร์และอุปกรณ์ หน้าเว็บต้นทาง หน้าที่เข้าชมและระยะเวลา",
          "**คุกกี้**: ดูข้อ 5",
          "เราไม่เก็บข้อมูลของผู้ที่มีอายุต่ำกว่า 16 ปีโดยเจตนา และเว็บไซต์นี้ไม่ประมวลผลข้อมูลบัตรชำระเงิน",
        ],
      },
      {
        heading: "3. เราใช้ข้อมูลเพื่ออะไร",
        blocks: [
          "- ตอบคำถาม เสนอราคา และจัดส่งสินค้า (ปฏิบัติตามสัญญาหรือขั้นตอนก่อนทำสัญญา)",
          "- เข้าใจว่าหน้าและตลาดใดได้ผล และปรับปรุงเนื้อหาเว็บไซต์ (ประโยชน์โดยชอบด้วยกฎหมาย)",
          "- วัดว่าโฆษณาเข้าถึงผู้ซื้อที่ตรงกลุ่มหรือไม่ (ตามความยินยอมของคุณเมื่อจำเป็น)",
          "- รักษาความปลอดภัยของเว็บไซต์และป้องกันการใช้งานในทางที่ผิด (ประโยชน์โดยชอบด้วยกฎหมาย)",
          "- ปฏิบัติตามหน้าที่ด้านบัญชี ภาษี และการส่งออก (หน้าที่ตามกฎหมาย)",
          "เราไม่ขายข้อมูลส่วนบุคคล และไม่ใช้เนื้อหาการสอบถามเพื่อตัดสินใจโดยอัตโนมัติหรือจัดทำโปรไฟล์",
        ],
      },
      {
        heading: "4. ฐานทางกฎหมาย (GDPR)",
        blocks: [
          "- การจัดการคำถาม: ปฏิบัติตามสัญญา หรือตามคำขอของคุณก่อนเข้าทำสัญญา",
          "- การวิเคราะห์เว็บไซต์และวัดผลโฆษณา: ความยินยอมของคุณ เมื่อไม่จำเป็นต้องขอความยินยอม ใช้ประโยชน์โดยชอบด้วยกฎหมายของเรา",
          "- ความปลอดภัยและการป้องกันการทุจริต: ประโยชน์โดยชอบด้วยกฎหมาย",
          "- เอกสารบัญชี ภาษี และการส่งออก: หน้าที่ตามกฎหมาย",
          "คุณถอนความยินยอมได้ทุกเมื่อ โดยไม่กระทบการประมวลผลที่ทำไปก่อนแล้ว",
        ],
      },
      {
        heading: "5. คุกกี้และเทคโนโลยีที่คล้ายกัน",
        blocks: [
          "- **คุกกี้ที่จำเป็น**: `NEXT_LOCALE` จดจำภาษาที่เลือก ประมาณ 1 ปี หากไม่มี เว็บไซต์ทำงานไม่ได้ จึงไม่อยู่ภายใต้สวิตช์ความยินยอม",
          "- **คุกกี้วิเคราะห์**: ช่วยดูว่าหน้าใดถูกอ่าน ผู้อ่านติดขัดตรงไหน จะถูกตั้งเมื่อคุณอนุญาตการวิเคราะห์เท่านั้น",
          "- **คุกกี้โฆษณา**: คุกกี้วัดผลและรีมาร์เก็ตติ้งของ Google Ads (เช่น `_gcl_au`) และ Meta Pixel (`_fbp`) จะถูกตั้งเมื่อคุณอนุญาตโฆษณาเท่านั้น — ฝั่ง Google ควบคุมด้วย Consent Mode v2 ส่วน Meta Pixel จะไม่โหลดเลยหากยังไม่ได้รับความยินยอม",
          "หากต้องการเปลี่ยนใจ ใช้ “การตั้งค่าคุกกี้” ที่ส่วนท้ายเว็บไซต์ ผู้เข้าชมใน EEA สหราชอาณาจักร และสวิตเซอร์แลนด์จะเห็นแบนเนอร์ขอความยินยอมในการเข้าชมครั้งแรก พื้นที่อื่นจะไม่ถูกรบกวน",
        ],
      },
      {
        heading: "6. เปิดเผยต่อใคร",
        blocks: [
          "- Google (Google Ireland Ltd. / Google LLC) — วัดผลการแปลงโฆษณา — ต้องยินยอมโฆษณา",
          "- Meta (Meta Platforms Ireland Ltd.) — วัดผลโฆษณา — ต้องยินยอมโฆษณา",
          "- Microsoft — วิเคราะห์เซสชัน Clarity — ต้องยินยอมการวิเคราะห์ (หากเปิดใช้)",
          "- Vercel Inc. — โฮสติ้งและส่งเนื้อหาเว็บไซต์",
          "- ผู้ให้บริการอีเมลองค์กร — จดหมายติดต่อธุรกิจ",
          "- ผู้ขนส่ง ตัวแทนขนส่ง และตัวแทนศุลกากร — เฉพาะเมื่อปฏิบัติตามคำสั่งซื้อ",
          "- ที่ปรึกษาวิชาชีพและหน่วยงานราชการ — เมื่อกฎหมายกำหนด",
          "เราไม่ขายหรือให้เช่าข้อมูลส่วนบุคคลแก่ผู้ใด",
        ],
      },
      {
        heading: "7. การโอนข้อมูลระหว่างประเทศ",
        blocks: [
          "บริษัทของเราตั้งอยู่ในประเทศจีน การดำเนินงานเว็บไซต์และตอบคำถามจึงต้องมีการโอนข้อมูลไปประมวลผลในประเทศจีน ซึ่งคณะกรรมาธิการยุโรปยังไม่มีคำวินิจฉัยด้านความเพียงพอ",
          "สำหรับข้อมูลของผู้เข้าชมใน EEA หรือสหราชอาณาจักร เราใช้ข้อสัญญามาตรฐาน หรืออาศัยความจำเป็นของการโอนเพื่อปฏิบัติตามสัญญากับคุณ ติดต่อเราเพื่อขอรายละเอียดมาตรการคุ้มครอง",
        ],
      },
      {
        heading: "8. ระยะเวลาการเก็บรักษา",
        blocks: [
          "- คำถามที่กลายเป็นคำสั่งซื้อ: ตามกฎระเบียบบัญชีและการส่งออกของจีน (เอกสารบัญชีโดยทั่วไป 10 ปี)",
          "- คำถามที่ไม่เป็นคำสั่งซื้อ: ไม่เกิน 24 เดือน แล้วลบ",
          "- สถิติผู้เข้าชม: แฮช IP ก่อนจัดเก็บ เก็บบันทึกดิบไม่เกิน 14 เดือน",
          "- บันทึกความยินยอม: เก็บ 12 เดือน แล้วสอบถามใหม่",
        ],
      },
      {
        heading: "9. สิทธิของคุณ",
        blocks: [
          "คุณมีสิทธิเข้าถึง แก้ไข ลบข้อมูล จำกัดหรือคัดค้านการประมวลผล ขอโอนย้ายข้อมูล และถอนความยินยอมได้ทุกเมื่อ",
          "หากอยู่ใน EEA สามารถร้องเรียนต่อหน่วยงานคุ้มครองข้อมูลของประเทศคุณ ในสหราชอาณาจักรคือ ICO",
          `หากต้องการใช้สิทธิ์ใด ๆ อีเมลถึง ${CONTACT_EMAIL} เราจะตอบภายใน 30 วัน`,
        ],
      },
      {
        heading: "10. ความปลอดภัย",
        blocks: [
          "เว็บไซต์ให้บริการผ่าน HTTPS พื้นที่ผู้ดูแลระบบต้องเข้าสู่ระบบ ที่อยู่ IP ของผู้เข้าชมถูกแฮชก่อนจัดเก็บ",
          "ไม่มีระบบใดปลอดภัยสมบูรณ์ หากเกิดเหตุละเมิดที่อาจกระทบสิทธิของคุณ เราจะแจ้งคุณและหน่วยงานที่เกี่ยวข้องตามที่กฎหมายกำหนด",
        ],
      },
      {
        heading: "11. การเปลี่ยนแปลงนโยบาย",
        blocks: [
          "เราอาจปรับปรุงนโยบายนี้ วันที่ด้านบนคือนฉบับปัจจุบัน การเปลี่ยนแปลงที่มีนัยสำคัญจะประกาศในหน้านี้",
        ],
      },
    ],
    contactHeading: "ติดต่อเรา",
    contactBlocks: [
      `หากมีคำถามเกี่ยวกับนโยบายนี้หรือข้อมูลส่วนบุคคลของคุณ: ${CONTACT_EMAIL}`,
      `โทรศัพท์: ${CONTACT_PHONE}`,
      "ที่อยู่: เลขที่ 14 นิคมอุตสาหกรรมตำบลหลงถาน อำเภอฮั่วชิว เมืองลู่อาน มณฑลอันฮุย ประเทศจีน",
    ],
  },

  ru: {
    title: "Политика конфиденциальности",
    updatedLabel: "Обновлено",
    updated: "23 октября 2026 г.",
    intro:
      "Настоящая политика объясняет, какие персональные данные компания Huahao Carbon Graphite Sealing Co., Ltd. («мы») собирает через сайт hhseal.cn, зачем и какие у вас есть права. Она распространяется на посетителей сайта, потенциальных клиентов и всех, кто связывается с нами через сайт.",
    sections: [
      {
        heading: "1. Кто отвечает за обработку",
        blocks: [
          "Huahao Carbon Graphite Sealing Co., Ltd. (霍邱县华豪密封件有限公司) является контролёром персональных данных, описанных здесь. Мы производим кольца из углеродного графита, втулки/подшипники и разрезные кольца на заводе в уезде Хоцю, город Луань, провинция Аньхой, Китай.",
          "Адрес: No.14, Longtan Town Industrial Park, Huoqiu County, Lu'an, Anhui, China",
          `Email: ${CONTACT_EMAIL}  ·  Телефон: ${CONTACT_PHONE}`,
          "Мы не назначали специалиста по защите данных (DPO). Вопросы конфиденциальности направляйте на указанный адрес — ими занимается сотрудник, отвечающий за экспортные продажи.",
        ],
      },
      {
        heading: "2. Какие данные мы собираем",
        blocks: [
          "**Предоставленные вами**: имя, компания, страна, email, телефон или мессенджер, интересующая продукция, текст сообщения и приложенные чертежи или спецификации — через форму запроса, по email или в мессенджерах.",
          "**Собираемые автоматически**: IP-адрес (для определения страны и, после хеширования, для подсчёта уникальных посещений), тип браузера и устройства, страница-источник, просмотренные страницы и время на них.",
          "**Cookie**: см. раздел 5.",
          "Мы сознательно не собираем данные лиц младше 16 лет и не обрабатываем на этом сайте данные платёжных карт.",
        ],
      },
      {
        heading: "3. Зачем мы их используем",
        blocks: [
          "- Чтобы ответить на запрос, подготовить предложение и поставить продукцию (исполнение договора или шаги до его заключения)",
          "- Чтобы понимать, какие страницы и рынки работают, и улучшать сайт (законный интерес)",
          "- Чтобы измерять, достигает ли реклама нужных покупателей (на основании вашего согласия, когда оно требуется)",
          "- Чтобы обеспечивать безопасность сайта и предотвращать злоупотребления (законный интерес)",
          "- Чтобы выполнять требования бухгалтерского, налогового и экспортного учёта (юридическая обязанность)",
          "Мы не продаём персональные данные и не используем содержание запросов для автоматизированного принятия решений или профилирования.",
        ],
      },
      {
        heading: "4. Правовые основания (GDPR)",
        blocks: [
          "- Обработка запросов: исполнение договора или шаги по вашему запросу до его заключения",
          "- Аналитика сайта и измерение рекламы: ваше согласие; если согласие не требуется — наш законный интерес в ведении и улучшении бизнеса",
          "- Безопасность и предотвращение злоупотреблений: законный интерес",
          "- Бухгалтерские, налоговые и экспортные записи: юридическая обязанность",
          "Вы можете отозвать согласие в любой момент; это не влияет на обработку, выполненную до отзыва.",
        ],
      },
      {
        heading: "5. Cookie и аналогичные технологии",
        blocks: [
          "- **Строго необходимые**: `NEXT_LOCALE` запоминает выбранный язык примерно на один год. Без него сайт не работает, поэтому он не подчиняется переключателям согласия.",
          "- **Аналитические**: показывают, какие страницы читают и где посетители останавливаются. Устанавливаются только после разрешения аналитики.",
          "- **Рекламные**: cookie конверсий и ремаркетинга Google Ads (например, `_gcl_au`) и Meta Pixel (`_fbp`). Устанавливаются только после разрешения рекламы — Google управляется через Consent Mode v2, а Meta Pixel вообще не загружается без согласия.",
          "Чтобы изменить решение, используйте «Настройки cookie» в подвале сайта. Посетители ЕЭЗ, Великобритании и Швейцарии видят баннер согласия при первом визите; в других регионах он не появляется.",
        ],
      },
      {
        heading: "6. Кому мы передаём данные",
        blocks: [
          "- Google (Google Ireland Ltd. / Google LLC) — измерение конверсий рекламы — требуется согласие на рекламу",
          "- Meta (Meta Platforms Ireland Ltd.) — измерение рекламы — требуется согласие на рекламу",
          "- Microsoft — аналитика сессий Clarity — требуется согласие на аналитику (если включена)",
          "- Vercel Inc. — хостинг и доставка сайта",
          "- Наш корпоративный почтовый провайдер — деловая переписка",
          "- Перевозчики, экспедиторы и таможенные брокеры — только при исполнении заказа",
          "- Профессиональные консультанты и органы власти — когда этого требует закон",
          "Мы не продаём и не сдаём в аренду персональные данные.",
        ],
      },
      {
        heading: "7. Трансграничная передача",
        blocks: [
          "Наша компания находится в Китае, поэтому работа сайта и ответы на запросы предполагают передачу данных в Китай. Европейская комиссия не приняла решения об адекватности для Китая.",
          "При передаче данных посетителей из ЕЭЗ или Великобритании мы опираемся на Стандартные договорные условия либо на необходимость передачи для исполнения договора с вами. Свяжитесь с нами, чтобы узнать о применяемых гарантиях.",
        ],
      },
      {
        heading: "8. Сроки хранения",
        blocks: [
          "- Запросы, ставшие заказами: в сроки, установленные китайскими правилами бухгалтерского и экспортного учёта (бухгалтерские документы обычно 10 лет)",
          "- Запросы без заказа: до 24 месяцев, затем удаляются",
          "- Статистика посещений: IP хешируются перед сохранением; исходные записи — до 14 месяцев",
          "- Записи о согласии: 12 месяцев, затем запрашиваем заново",
        ],
      },
      {
        heading: "9. Ваши права",
        blocks: [
          "Вы вправе получить доступ к своим данным, исправить и удалить их, ограничить обработку или возразить против неё, требовать переносимости данных и отозвать согласие в любой момент.",
          "Если вы находитесь в ЕЭЗ, вы можете подать жалобу в национальный орган по защите данных; в Великобритании — в ICO.",
          `Чтобы воспользоваться любым из этих прав, напишите на ${CONTACT_EMAIL}. Мы отвечаем в течение 30 дней.`,
        ],
      },
      {
        heading: "10. Безопасность",
        blocks: [
          "Сайт работает по HTTPS; административная часть требует авторизации; IP-адреса посетителей хешируются перед сохранением.",
          "Ни одна система не абсолютно надёжна. Если произойдёт утечка, способная затронуть ваши права, мы уведомим вас и компетентный орган в порядке, установленном законом.",
        ],
      },
      {
        heading: "11. Изменения политики",
        blocks: [
          "Мы можем обновлять эту политику. Дата вверху страницы соответствует текущей версии. О существенных изменениях сообщим на этой странице.",
        ],
      },
    ],
    contactHeading: "Связаться с нами",
    contactBlocks: [
      `По любым вопросам о политике или ваших данных: ${CONTACT_EMAIL}`,
      `Телефон: ${CONTACT_PHONE}`,
      "Адрес: No.14, Longtan Town Industrial Park, Huoqiu County, Lu'an, Anhui, China",
    ],
  },

  ja: {
    title: "プライバシーポリシー",
    updatedLabel: "最終更新",
    updated: "2026年10月23日",
    intro:
      "本ポリシーは、華豪密封件有限公司（霍邱县华豪密封件有限公司、以下「当社」）が hhseal.cn を通じて取得する個人情報の種類、取得目的、およびお客様の権利について説明します。本サイトの訪問者、見込み顧客、本サイト経由でお問い合わせいただいた方に適用されます。",
    sections: [
      {
        heading: "1. 管理者",
        blocks: [
          "華豪密封件有限公司が本ポリシーに記載する個人情報の管理者です。当社は中国安徽省六安市霍邱県の工場で、カーボングラファイト製シールリング、ブッシュ／ベアリング、分割リングを製造しています。",
          "所在地：中国安徽省六安市霍邱県龍潭鎮産業園14号",
          `メール：${CONTACT_EMAIL}　電話：${CONTACT_PHONE}`,
          "個人情報保護責任者（DPO）は置いていません。プライバシーに関するお問い合わせは上記メール宛てにお願いします。輸出営業担当が対応します。",
        ],
      },
      {
        heading: "2. 取得する情報",
        blocks: [
          "**お客様にご提供いただく情報**：氏名、会社名、国、メールアドレス、電話番号またはメッセージアプリのID、ご関心の製品、お問い合わせ内容、添付された図面や仕様書。",
          "**自動的に取得する情報**：IPアドレス（国判定およびハッシュ化後の重複訪問排除に使用）、ブラウザと端末の種類、参照元ページ、閲覧ページと滞在時間。",
          "**Cookie**：第5項をご覧ください。",
          "16歳未満の方の情報を意図的に取得することはなく、本サイトでは決済カード情報を扱いません。",
        ],
      },
      {
        heading: "3. 利用目的",
        blocks: [
          "- お問い合わせへの回答、見積り、供給（契約の履行または契約締結前の対応）",
          "- どのページ・市場が機能しているかの把握とサイト改善（正当な利益）",
          "- 広告が適切な購買層に届いているかの測定（必要な場合は同意に基づく）",
          "- サイトの安全性確保と不正利用の防止（正当な利益）",
          "- 会計・税務・輸出に関する法令上の義務の履行（法的義務）",
          "個人情報を販売することはなく、お問い合わせ内容を自動意思決定やプロファイリングに使用することもありません。",
        ],
      },
      {
        heading: "4. 法的根拠（GDPR）",
        blocks: [
          "- お問い合わせ対応：契約の履行、またはご依頼に基づく契約締結前の措置",
          "- サイト分析および広告効果測定：同意。同意が不要な場合は、事業の運営・改善に関する正当な利益",
          "- セキュリティと不正防止：正当な利益",
          "- 会計・税務・輸出記録：法的義務",
          "同意はいつでも撤回できます。撤回前に行われた処理には影響しません。",
        ],
      },
      {
        heading: "5. Cookie 等",
        blocks: [
          "- **必須 Cookie**：`NEXT_LOCALE`（言語設定を約1年間記憶）。これがないとサイトが動作しないため、同意スイッチの対象外です。",
          "- **分析 Cookie**：どのページが読まれ、どこで離脱しているかを把握します。分析を許可した場合のみ設定されます。",
          "- **広告 Cookie**：Google Ads のコンバージョン／リマーケティング Cookie（`_gcl_au` 等）と Meta Pixel（`_fbp`）。広告を許可した場合のみ設定されます。Google は Consent Mode v2 で制御し、Meta Pixel は同意がない限り読み込みません。",
          "変更する場合はフッターの「Cookie 設定」をご利用ください。EEA・英国・スイスの訪問者には初回のみ同意バナーを表示し、その他の地域では表示しません。",
        ],
      },
      {
        heading: "6. 第三者提供",
        blocks: [
          "- Google（Google Ireland Ltd. / Google LLC）：広告コンバージョン測定（広告の同意が必要）",
          "- Meta（Meta Platforms Ireland Ltd.）：広告効果測定（広告の同意が必要）",
          "- Microsoft：Clarity によるセッション分析（分析の同意が必要、有効時のみ）",
          "- Vercel Inc.：ホスティングと配信",
          "- 企業メールサービス提供者：業務連絡",
          "- 運送会社・フォワーダー・通関業者：受注の履行時のみ",
          "- 専門家および行政機関：法令上必要な場合",
          "個人情報を販売・貸与することはありません。",
        ],
      },
      {
        heading: "7. 国外への移転",
        blocks: [
          "当社は中国に所在するため、本サイトの運営とお問い合わせ対応には中国へのデータ移転が伴います。欧州委員会は中国について十分性認定を行っていません。",
          "EEA または英国の訪問者の個人情報を移転する場合、標準契約条項、またはお客様との契約履行に必要な移転として行います。適用される保護措置の詳細はお問い合わせください。",
        ],
      },
      {
        heading: "8. 保存期間",
        blocks: [
          "- 受注に至ったお問い合わせ：中国の会計・輸出規則に定める期間（会計帳簿は通常10年）",
          "- 受注に至らなかったお問い合わせ：最長24か月、その後削除",
          "- アクセス統計：IP はハッシュ化して保存。生のアクセス記録は最長14か月",
          "- 同意記録：12か月保存し、その後再度確認",
        ],
      },
      {
        heading: "9. お客様の権利",
        blocks: [
          "個人情報の開示、訂正、削除、処理の制限・異議、データポータビリティ、および同意の撤回を行う権利があります。",
          "EEA にお住まいの方は各国のデータ保護機関に、英国の方は ICO に苦情を申し立てられます。",
          `権利行使は ${CONTACT_EMAIL} までメールでご連絡ください。30日以内に回答します。`,
        ],
      },
      {
        heading: "10. セキュリティ",
        blocks: [
          "サイトは HTTPS で配信され、管理画面は認証が必要です。訪問者の IP アドレスは保存前にハッシュ化します。",
          "完全に安全なシステムはありません。お客様の権利に影響しうる漏えいが発生した場合は、法令に従いお客様および関係機関に通知します。",
        ],
      },
      {
        heading: "11. 本ポリシーの変更",
        blocks: [
          "本ポリシーは更新される場合があります。ページ上部の日付が現行版を示します。重要な変更は本ページで告知します。",
        ],
      },
    ],
    contactHeading: "お問い合わせ",
    contactBlocks: [
      `本ポリシーまたは個人情報に関するご質問：${CONTACT_EMAIL}`,
      `電話：${CONTACT_PHONE}`,
      "所在地：中国安徽省六安市霍邱県龍潭鎮産業園14号",
    ],
  },

  ko: {
    title: "개인정보 처리방침",
    updatedLabel: "최종 업데이트",
    updated: "2026년 10월 23일",
    intro:
      "본 방침은 화하오 밀봉 유한공사(霍邱县华豪密封件有限公司, 이하 “당사”)가 hhseal.cn을 통해 어떤 개인정보를 수집하고, 왜 수집하며, 이용자가 어떤 권리를 가지는지 설명합니다. 본 사이트 방문자, 잠재 고객, 사이트를 통해 문의한 모든 분에게 적용됩니다.",
    sections: [
      {
        heading: "1. 개인정보 처리자",
        blocks: [
          "화하오 밀봉 유한공사가 본 방침에 설명된 개인정보의 처리자입니다. 당사는 중국 안후이성 루안시 훠추현 공장에서 카본 그라파이트 씰 링, 부시/베어링, 분할 링을 생산합니다.",
          "주소: 중국 안후이성 루안시 훠추현 룽탄진 산업단지 14호",
          `이메일: ${CONTACT_EMAIL}  ·  전화: ${CONTACT_PHONE}`,
          "개인정보 보호 책임자(DPO)는 두지 않았습니다. 개인정보 관련 문의는 위 이메일로 보내주시면 수출 영업 담당자가 처리합니다.",
        ],
      },
      {
        heading: "2. 수집하는 정보",
        blocks: [
          "**이용자 제공 정보**: 이름, 회사명, 국가, 이메일, 전화번호 또는 메신저 ID, 관심 제품, 문의 내용과 첨부한 도면·사양서.",
          "**자동 수집 정보**: IP 주소(국가 판별 및 해시 처리 후 중복 방문 집계에 사용), 브라우저·기기 유형, 유입 페이지, 조회 페이지와 체류 시간.",
          "**쿠키**: 5항 참조.",
          "만 16세 미만의 정보를 의도적으로 수집하지 않으며, 본 사이트는 결제 카드 정보를 처리하지 않습니다.",
        ],
      },
      {
        heading: "3. 이용 목적",
        blocks: [
          "- 문의 응대, 견적, 공급(계약 이행 또는 계약 체결 전 조치)",
          "- 어떤 페이지와 시장이 효과적인지 파악하고 사이트 개선(정당한 이익)",
          "- 광고가 적합한 구매자에게 도달하는지 측정(필요한 경우 동의 기반)",
          "- 사이트 보안 유지 및 남용 방지(정당한 이익)",
          "- 회계·세무·수출 관련 법적 의무 이행(법적 의무)",
          "개인정보를 판매하지 않으며, 문의 내용을 자동 의사결정이나 프로파일링에 사용하지 않습니다.",
        ],
      },
      {
        heading: "4. 법적 근거(GDPR)",
        blocks: [
          "- 문의 처리: 계약 이행 또는 이용자 요청에 따른 계약 체결 전 조치",
          "- 사이트 분석 및 광고 효과 측정: 이용자의 동의. 동의가 필요 없는 경우 사업 운영·개선의 정당한 이익",
          "- 보안 및 남용 방지: 정당한 이익",
          "- 회계·세무·수출 기록: 법적 의무",
          "동의는 언제든지 철회할 수 있으며, 철회 이전의 처리에는 영향을 주지 않습니다.",
        ],
      },
      {
        heading: "5. 쿠키 및 유사 기술",
        blocks: [
          "- **필수 쿠키**: `NEXT_LOCALE`, 언어 선택을 약 1년간 기억합니다. 없으면 사이트가 작동하지 않아 동의 스위치 대상이 아닙니다.",
          "- **분석 쿠키**: 어떤 페이지가 읽히고 어디서 이탈하는지 파악합니다. 분석을 허용한 뒤에만 설정됩니다.",
          "- **광고 쿠키**: Google Ads 전환·리마케팅 쿠키(`_gcl_au` 등)와 Meta 픽셀(`_fbp`). 광고를 허용한 뒤에만 설정되며, Google은 Consent Mode v2로 제어하고 Meta 픽셀은 동의 없이는 아예 로드하지 않습니다.",
          "변경하려면 페이지 하단의 “쿠키 설정”을 이용하세요. EEA·영국·스위스 방문자에게는 첫 방문 시 동의 배너가 표시되며, 다른 지역에는 표시되지 않습니다.",
        ],
      },
      {
        heading: "6. 제3자 제공",
        blocks: [
          "- Google(Google Ireland Ltd. / Google LLC): 광고 전환 측정 — 광고 동의 필요",
          "- Meta(Meta Platforms Ireland Ltd.): 광고 효과 측정 — 광고 동의 필요",
          "- Microsoft: Clarity 세션 분석 — 분석 동의 필요(사용 시)",
          "- Vercel Inc.: 호스팅 및 콘텐츠 전송",
          "- 기업 이메일 서비스 제공자: 업무 서신",
          "- 운송사·포워더·관세사: 주문 이행 시에만",
          "- 전문 자문 및 관계 기관: 법령상 필요한 경우",
          "개인정보를 판매하거나 임대하지 않습니다.",
        ],
      },
      {
        heading: "7. 국외 이전",
        blocks: [
          "당사는 중국에 소재하므로 사이트 운영과 문의 응대에는 중국으로의 데이터 이전이 수반됩니다. 유럽연합 집행위원회는 중국에 대해 적정성 결정을 채택하지 않았습니다.",
          "EEA 또는 영국 방문자의 개인정보를 이전하는 경우 표준계약조항을 근거로 하거나, 이용자와의 계약 이행에 필요한 이전으로 처리합니다. 적용되는 보호조치의 세부 내용은 문의해 주세요.",
        ],
      },
      {
        heading: "8. 보관 기간",
        blocks: [
          "- 주문으로 이어진 문의: 중국 회계·수출 규정에 따른 기간(회계 증빙은 통상 10년)",
          "- 주문으로 이어지지 않은 문의: 최대 24개월 후 삭제",
          "- 방문 통계: IP는 저장 전 해시 처리, 원본 방문 기록은 최대 14개월",
          "- 동의 기록: 12개월 보관 후 다시 확인",
        ],
      },
      {
        heading: "9. 이용자의 권리",
        blocks: [
          "개인정보 열람·정정·삭제, 처리 제한·반대, 데이터 이동, 동의 철회의 권리가 있습니다.",
          "EEA에 계신 경우 국가 개인정보 보호기관에, 영국에 계신 경우 ICO에 진정할 수 있습니다.",
          `권리 행사는 ${CONTACT_EMAIL}로 이메일 주시면 30일 이내에 답변합니다.`,
        ],
      },
      {
        heading: "10. 보안",
        blocks: [
          "사이트는 HTTPS로 제공되며, 관리자 영역은 인증이 필요합니다. 방문자 IP는 저장 전 해시 처리합니다.",
          "완벽한 시스템은 없습니다. 권리에 영향을 줄 수 있는 유출이 발생하면 법령에 따라 이용자와 관계 기관에 통지합니다.",
        ],
      },
      {
        heading: "11. 방침 변경",
        blocks: [
          "본 방침은 변경될 수 있습니다. 페이지 상단의 날짜가 현행 버전을 나타냅니다. 중요한 변경은 이 페이지에 공지합니다.",
        ],
      },
    ],
    contactHeading: "문의",
    contactBlocks: [
      `본 방침 또는 개인정보에 관한 문의: ${CONTACT_EMAIL}`,
      `전화: ${CONTACT_PHONE}`,
      "주소: 중국 안후이성 루안시 훠추현 룽탄진 산업단지 14호",
    ],
  },
}
