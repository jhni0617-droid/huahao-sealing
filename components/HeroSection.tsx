"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { useLocale } from "next-intl"
import { Link } from "@/i18n/routing"
import { getLocalized } from "@/lib/locale-data"

/**
 * 首屏 Hero 轮播：
 * - 第 0 张保留原始内容（CNC 车间实拍 + 600°C 大字 + 按图定制），不动
 * - 第 1-6 张用新生成的 hero 背景图 + 艺术文字 + 入场动效
 * - 背景图交叉淡入，文字通过 key 变化重挂载重播动画
 */

const heroUi = {
  zh: {
    tempLabel: "非氧化介质中长期服役温度",
    lead: "碳石墨密封件",
    accent: "按图定制",
    subline: "密封环 · 轴套/轴承 · 三瓣环 ｜ 树脂/锑/铜浸渍牌号",
    cta: "提交图纸询价",
  },
  en: {
    tempLabel: "Long-term service temperature in non-oxidizing media",
    lead: "Carbon Graphite Seals",
    accent: "Custom-Machined",
    subline: "Seal rings · bushings & bearings · split rings — resin, antimony & copper impregnated grades",
    cta: "Send Your Drawing for a Quote",
  },
  vi: {
    tempLabel: "Nhiệt độ phục vụ lâu dài trong môi trường không oxy hóa",
    lead: "Phớt than chì carbon",
    accent: "Gia công theo bản vẽ",
    subline: "Vòng phớt · bạc lót/ổ trục · vòng chia — cấp tẩm nhựa, antimony, đồng",
    cta: "Gửi bản vẽ để báo giá",
  },
  th: {
    tempLabel: "อุณหภูมิใช้งานระยะยาวในตัวกลางที่ไม่ออกซิไดซ์",
    lead: "ซีลคาร์บอนกราไฟต์",
    accent: "ผลิตตามแบบ",
    subline: "แหวนซีล · บูช/แบริ่ง · แหวนแยก — เกรดอิมเพรกเนตเรซิน พลวง ทองแดง",
    cta: "ส่งแบบรับใบเสนอราคา",
  },
  ru: {
    tempLabel: "Рабочая температура в неокисляющих средах",
    lead: "Углерод-графитовые уплотнения",
    accent: "Обработка по чертежам",
    subline: "Кольца · втулки/подшипники · разрезные кольца — марки с пропиткой смолой, сурьмой, медью",
    cta: "Отправить чертёж на расчёт",
  },
  ja: {
    tempLabel: "非酸化性媒体中での長期使用温度",
    lead: "カーボングラファイトシール",
    accent: "図面から製作",
    subline: "シールリング・ブッシング/軸受・分割リング — レジン・アンチモン・銅含浸グレード",
    cta: "図面を送って見積もり",
  },
  ko: {
    tempLabel: "비산화 분위기에서의 장기 사용 온도",
    lead: "카본 그라파이트 씰",
    accent: "도면 기반 가공",
    subline: "씰 링 · 부싱/베어링 · 분할 링 — 레진·안티모니·구리 함침 등급",
    cta: "도면 보내고 견적 받기",
  },
}

type SlideContent = {
  eyebrow: Record<string, string>
  title: Record<string, string>
  accent: Record<string, string>
  stat: string
  statUnit: string
  statLabel: Record<string, string>
  subline: Record<string, string>
}

const slides: { bg: string; content?: SlideContent; original?: boolean }[] = [
  // 第 0 张：匠心传承（从最后移到第一）
  {
    bg: "/images/hero/hero-vintage-workshop.webp",
    content: {
      eyebrow: { zh: "匠心传承", en: "HERITAGE & CRAFT", vi: "TRUYỀN THỪA NGHIỆP", th: "อาชีพสืบทอด", ru: "НАСЛЕДИЕ И МАСТЕРСТВО", ja: "匠の伝承", ko: "장인 정신" },
      title: { zh: "始于", en: "Since", vi: "Từ năm", th: "ตั้งแต่", ru: "С", ja: "創業", ko: "설립" },
      accent: { zh: "2006", en: "2006", vi: "2006", th: "2006", ru: "2006", ja: "2006", ko: "2006" },
      stat: "20",
      statUnit: "年",
      statLabel: { zh: "专注碳石墨密封件制造", en: "Focused on carbon graphite seal manufacturing", vi: "Tập trung sản xuất phớt than chì carbon", th: "มุ่งผลิตซีลคาร์บอนกราไฟต์", ru: "Фокус на углерод-графитовых уплотнениях", ja: "カーボングラファイトシール専門", ko: "카본 그라파이트 씰 전문" },
      subline: { zh: "从材料 · 浸渍 · 加工到检测的完整制造能力", en: "Integrated capability from material, impregnation, machining to inspection", vi: "Năng lực tích hợp từ vật liệu, tẩm, gia công đến kiểm tra", th: "ความสามารถครบวงจรตั้งแต่วัสดุ อิมพรีเกต กลึง ถึงตรวจสอบ", ru: "Полный цикл: материал, пропитка, обработка, контроль", ja: "材料・含浸・加工・検査までの一貫製造", ko: "소재 · 함침 · 가공 · 검사 일관 제조" },
    },
  },
  // 第 1 张：原始内容（CNC 车间实拍 + 600°C）
  { bg: "/images/实拍/IMG_20260517_193309.webp", original: true },
  // 第 2 张：精密制造
  {
    bg: "/images/hero/hero-cnc-machining-dark.webp",
    content: {
      eyebrow: { zh: "精密制造", en: "PRECISION MANUFACTURING", vi: "CHẾ TẠO CHÍNH XÁC", th: "การผลิตแม่นยำ", ru: "ТОЧНОЕ ПРОИЗВОДСТВО", ja: "精密製造", ko: "정밀 제조" },
      title: { zh: "公差受控", en: "Tolerance", vi: "Dung sai", th: "ค่าคลาดเคลื่อน", ru: "Допуск", ja: "公差管理", ko: "공차 관리" },
      accent: { zh: "全程受控", en: "Controlled", vi: "Được kiểm soát", th: "ควบคุมได้", ru: "Контроль", ja: "制御", ko: "제어" },
      stat: "±0.01",
      statUnit: "mm",
      statLabel: { zh: "尺寸公差 · 全程受控", en: "Dimensional tolerance, controlled throughout", vi: "Dung sai kích thước, kiểm soát toàn bộ", th: "ค่าคลาดเคลื่อน ควบคุมตลอด", ru: "Контроль допусков на всех этапах", ja: "寸法公差・全工程管理", ko: "치수 공차 · 전 공정 관리" },
      subline: { zh: "CNC车削 · 内外径 · 端面研磨 · 开槽异形", en: "CNC turning · I.D./O.D. · face lapping · grooves & custom profiles", vi: "Tiện CNC · I.D./O.D. · mài mặt · rãnh và biên dạng", th: "กลึง CNC · I.D./O.D. · เจียรหน้า · ร่องและรูปพิเศษ", ru: "CNC точение · I.D./O.D. · притирка · канавки и профили", ja: "CNC旋削・内外径・端面ラップ・溝・異形", ko: "CNC 선삭 · 내외경 · 면 랩핑 · 홈 및 특수 형상" },
    },
  },
  // 第 3 张：品质如一
  {
    bg: "/images/hero/hero-graphite-rings-dramatic.webp",
    content: {
      eyebrow: { zh: "品质保证", en: "QUALITY ASSURED", vi: "CHẤT LƯỢNG ĐẢM BẢO", th: "คุณภาพมั่นใจ", ru: "ГАРАНТИЯ КАЧЕСТВА", ja: "品質保証", ko: "품질 보증" },
      title: { zh: "全检出厂", en: "Full Inspection", vi: "Kiểm tra toàn bộ", th: "ตรวจสอบทั้งหมด", ru: "Полный контроль", ja: "全数検査", ko: "전수 검사" },
      accent: { zh: "品质如一", en: "Consistent", vi: "Nhất quán", th: "สม่ำเสมอ", ru: "Стабильно", ja: "安定", ko: "균일" },
      stat: "100",
      statUnit: "%",
      statLabel: { zh: "尺寸·端面·外观 出厂前全检", en: "Dimensions, faces & appearance — fully inspected before shipment", vi: "Kích thước, mặt, ngoại quan — kiểm tra toàn bộ trước xuất", th: "ขนาด หน้า ลักษณะ ตรวจครบก่อนส่ง", ru: "Размеры, торцы, внешний вид — полный контроль", ja: "寸法・端面・外観を出荷前全数検査", ko: "치수·단면·외관 출하 전 전수 검사" },
      subline: { zh: "树脂/锑/铜浸渍牌号 · 材料批次可追溯", en: "Resin/antimony/copper grades · batch traceable", vi: "Cấp tẩm nhựa/antimon/đồng · truy xuất lô được", th: "เกรดเรซิน/พลวง/ทองแดง · ติดตามล็อตได้", ru: "Марки смола/сурьма/медь · прослеживаемость партий", ja: "樹脂/アンチモン/銅含浸グレード・ロット追跡可能", ko: "수지/안티몬/구리 함침 등급 · 로트 추적 가능" },
    },
  },
  // 第 4 张：精工细磨（抛光机）
  {
    bg: "/images/hero/hero-polishing-machine.webp",
    content: {
      eyebrow: { zh: "精工细磨", en: "CRAFTSMANSHIP", vi: "TINH CHỈNH", th: "ฝีมืออาชีพ", ru: "МАСТЕРСТВО", ja: "匠の技", ko: "장인 정신" },
      title: { zh: "端面研磨", en: "Face Lapping", vi: "Mài mặt", th: "เจียรหน้า", ru: "Притирка торцов", ja: "端面ラップ", ko: "단면 랩핑" },
      accent: { zh: "镜面级", en: "Mirror Finish", vi: "Gương", th: "กระจก", ru: "Зеркало", ja: "鏡面", ko: "경면" },
      stat: "Ra0.2",
      statUnit: "μm",
      statLabel: { zh: "密封端面粗糙度", en: "Seal face roughness", vi: "Độ nhám mặt làm kín", th: "ความหยาบหน้าซีล", ru: "Шероховатость уплотнительной поверхности", ja: "シール面粗さ", ko: "씰 면 조도" },
      subline: { zh: "树脂/锑/铜浸渍牌号 · 自润滑耐高温", en: "Resin/antimony/copper grades · self-lubricating & heat resistant", vi: "Cấp tẩm nhựa/antimon/đồng · tự bôi trơn chịu nhiệt", th: "เกรดเรซิน/พลวง/ทองแดง · หล่อลื่นตัวเองทนความร้อน", ru: "Марки смола/сурьма/медь · самосмазка и жаростойкость", ja: "樹脂/アンチモン/銅含浸・自己潤滑・耐熱", ko: "수지/안티몬/구리 함침 · 자체 윤활 내열" },
    },
  },
  // 第 5 张：出口全球
  {
    bg: "/images/hero/hero-global-map.webp",
    content: {
      eyebrow: { zh: "全球出口", en: "WORLDWIDE EXPORT", vi: "XUẤT KHẨU TOÀN CẦU", th: "ส่งออกโลก", ru: "ЭКСПОРТ ПО ВСЕМУ МИРУ", ja: "世界輸出", ko: "글로벌 수출" },
      title: { zh: "持续供货", en: "Steady Supply", vi: "Cung ứng ổn định", th: "จัดหาอย่างต่อเนื่อง", ru: "Стабильные поставки", ja: "安定供給", ko: "안정 공급" },
      accent: { zh: "工程响应", en: "24h Response", vi: "Phản hồi 24h", th: "ตอบกลับ 24 ชม.", ru: "Ответ 24ч", ja: "24時間対応", ko: "24시간 대응" },
      stat: "24",
      statUnit: "h",
      statLabel: { zh: "工程技术响应时效", en: "Engineering response time", vi: "Thời gian phản hồi kỹ thuật", th: "เวลาตอบสนองทางวิศวกรรม", ru: "Срок инженерного ответа", ja: "技術対応時間", ko: "기술 대응 시간" },
      subline: { zh: "图纸 · 样品 · 批量规格 · 替代型号 · 长期供货", en: "Drawings · samples · batch specs · replacements · long-term supply", vi: "Bản vẽ · mẫu · thông số lô · thay thế · cung ứng dài hạn", th: "แบบ · ตัวอย่าง · สเปกล็อต · ทดแทน · จัดหาระยะยาว", ru: "Чертежи · образцы · партии · замены · долгосрочные поставки", ja: "図面・サンプル・ロット仕様・代替・長期供給", ko: "도면 · 샘플 · 로트 사양 · 대체 · 장기 공급" },
    },
  },
]

// 轮播自动切换间隔：2.5 秒（交叉淡入 1200ms，切换时不会出现半透明叠影）
const AUTO_PLAY_MS = 2500

export default function HeroSection() {
  const locale = useLocale()
  const ui = getLocalized(heroUi, locale)
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  // 定时器回调里读「当前是第几张」，避免在 setState updater 里做副作用
  const currentRef = useRef(0)

  /**
   * 渐进挂载：只渲染已经需要出现的图层。
   * 6 张背景图都是 absolute inset-0，在浏览器看来全部处于视口内，
   * 一次性挂载会 6 张同时抢首屏带宽（首图 LCP 被拖慢）。
   * 初始只挂载第 0、1 张（当前 + 下一张），之后每切换一张再挂载新的一张。
   * 因为有「下一张」前瞻，轮播推进时目标图必定已就绪，交叉淡入不会空白。
   */
  const [mountedSlides, setMountedSlides] = useState<number[]>([0, 1])

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  /** 标记「这一张 + 下一张」需要挂载（下一张提前就位，交叉淡入不空白） */
  const markMounted = useCallback((idx: number) => {
    setMountedSlides((prev) =>
      prev.includes(idx) ? prev : [...new Set([...prev, idx, (idx + 1) % slides.length])]
    )
  }, [])

  const startTimer = useCallback(() => {
    stopTimer()
    timerRef.current = setInterval(() => {
      const next = (currentRef.current + 1) % slides.length
      currentRef.current = next
      setCurrent(next)
      markMounted(next)
    }, AUTO_PLAY_MS)
  }, [stopTimer, markMounted])

  const goTo = useCallback((idx: number) => {
    // 点击圆点跳转时立即挂载目标张，避免跳到未挂载的幻灯片出现空白
    currentRef.current = idx
    setCurrent(idx)
    markMounted(idx)
    startTimer()
  }, [markMounted, startTimer])

  /** 相对当前位置前后翻一张（左右滑动用） */
  const stepBy = useCallback((dir: 1 | -1) => {
    const next = (currentRef.current + dir + slides.length) % slides.length
    currentRef.current = next
    setCurrent(next)
    markMounted(next)
    startTimer()
  }, [markMounted, startTimer])

  /** 只挂载指定一张（滑动的反方向那张需要提前就位） */
  const mountOne = useCallback((idx: number) => {
    setMountedSlides((prev) => (prev.includes(idx) ? prev : [...prev, idx]))
  }, [])

  /* ── 左右滑动切换（鼠标拖拽 + 触摸滑动，用 Pointer Events 统一处理） ──
     dragX：当前拖拽位移，用于让画面跟手
     dragW：起手时记下视口宽度，用于算阈值与限位（不在渲染里读 window，避免 SSR 不一致）
     位移放在 slide 的外层 wrapper 上，而不是直接改图片元素 —— 图片上有 Ken Burns 的
     transform 动画，两者写在同一个元素上会互相覆盖。 */
  const [dragX, setDragX] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [dragW, setDragW] = useState(1440)
  const [dragLimit, setDragLimit] = useState(120)
  const dragRef = useRef<{ x: number; y: number; active: boolean; moved: boolean; dx: number } | null>(null)
  // 松手后紧跟的那次 click 要吞掉，否则会误触到落点下方的圆点/链接
  const suppressClickRef = useRef(false)

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return
    const w = window.innerWidth
    dragRef.current = { x: e.clientX, y: e.clientY, active: true, moved: false, dx: 0 }
    setDragW(w)
    // 阈值取视口宽度的 8%，且不小于 40px
    setDragLimit(Math.max(40, w * 0.08))
    // 反方向那张往往还没挂载（渐进挂载只保证「当前 + 下一张」），起手就补上，
    // 给图片留出加载时间，否则往回拖松手会看到空白
    mountOne((currentRef.current - 1 + slides.length) % slides.length)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current
    if (!d || !d.active) return
    const dx = e.clientX - d.x
    const dy = e.clientY - d.y

    // 纵向意图优先：若是上下滑，直接放弃接管，让页面正常滚动
    if (!d.moved && Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 8) {
      d.active = false
      setDragging(false)
      setDragX(0)
      return
    }

    if (!d.moved && Math.abs(dx) > 6) {
      d.moved = true
      setDragging(true)
    }
    if (d.moved) {
      d.dx = dx
      setDragX(dx)
    }
  }

  const endDrag = () => {
    const d = dragRef.current
    dragRef.current = null
    if (!d) return
    setDragging(false)
    setDragX(0)
    if (!d.active || !d.moved) return

    suppressClickRef.current = true
    window.setTimeout(() => { suppressClickRef.current = false }, 0)

    if (d.dx <= -dragLimit) stepBy(1)
    else if (d.dx >= dragLimit) stepBy(-1)
  }

  const slide = slides[current]
  const isMounted = (idx: number) => mountedSlides.includes(idx)

  // 拖拽中的视觉：整叠跟手位移（限位 ±25% 视口宽，避免飞出屏幕），
  // 同时按拖拽进度把目标那张淡入 —— 只位移不淡入的话，边缘会露出底色显得空。
  const dragProgress = dragging ? Math.min(1, Math.abs(dragX) / dragLimit) : 0
  const dragDir = dragX < 0 ? 1 : -1
  const dragNeighbor = dragging && dragX !== 0
    ? (current + dragDir + slides.length) % slides.length
    : -1
  const visualOffset = dragging
    ? Math.max(-dragW * 0.25, Math.min(dragW * 0.25, dragX))
    : 0

  // 悬停或拖拽中都暂停自动播放，避免手感被打断
  useEffect(() => {
    if (!paused && !dragging) startTimer()
    return stopTimer
  }, [paused, dragging, startTimer, stopTimer])

  return (
    <section
      // 负 margin 上移到 Header 后方，让背景图覆盖整个视口（含 Header 区域）
      //
      // md:max-h-[100svh]：桌面端把区块高度锁死在视口高。
      // 配合 hero-pad 的 svh 自适应留白，这样即使视口极矮，锚在区块底部的轮播指示器
      // 也一定落在首屏内。内容超出时由内边距吸收，不会裁到文字（已验证到 500px 高）。
      //
      // touch-pan-y：横向手势交给下面的拖拽逻辑，纵向仍交给浏览器滚动，
      // 否则手机上左右滑会被当成页面滚动而收不到事件。
      className={`relative -mt-16 flex min-h-[100svh] items-center overflow-hidden bg-hero-bg text-white md:-mt-[72px] md:max-h-[100svh] touch-pan-y ${
        dragging ? "select-none" : ""
      }`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
      // 拖拽刚结束时吞掉落点上的一次 click，避免误触圆点或链接
      onClickCapture={(e) => {
        if (suppressClickRef.current) {
          e.preventDefault()
          e.stopPropagation()
        }
      }}
    >
      {/* 背景图层：交叉淡入 + 当前层 Ken Burns（仅挂载已就绪的层） */}
      {/* 背景图层：交叉淡入 + 当前层 Ken Burns（仅挂载已就绪的层）。
          外面这层 wrapper 只负责左右拖拽的跟手位移 —— 放在这里而不是图片元素上，
          是因为图片带 Ken Burns 的 transform 动画，两个 transform 写在同一元素会互相覆盖。
          松手后 wrapper 回到 0 时带 300ms 过渡，所以小幅拖拽的回弹是平滑的。 */}
      <div
        className={`absolute inset-0 ${dragging ? "cursor-grabbing" : "cursor-grab"} ${
          dragging ? "" : "transition-transform duration-300 ease-out"
        }`}
        style={{ transform: `translate3d(${visualOffset}px, 0, 0)` }}
      >
        {slides.map((s, idx) => {
          if (!isMounted(idx)) return null
          const isCurrent = idx === current
          const isNeighbor = idx === dragNeighbor
          return (
            <div
              key={s.bg}
              className={`absolute inset-0 ${
                // 拖拽中不做过渡，否则跟手会延迟；且此时正在按进度改透明度，必须即时生效
                dragging ? "" : "transition-opacity duration-[1200ms] ease-in-out"
              } ${
                // 拖拽时把目标那张提到最上层并按进度淡入（只位移不淡入的话边缘会露底色）
                isNeighbor && dragProgress > 0 ? "z-20" : isCurrent ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={
                isNeighbor && dragProgress > 0
                  ? { opacity: dragProgress }
                  : isCurrent && dragging && dragProgress > 0
                    ? { opacity: Math.max(0.35, 1 - dragProgress * 0.65) }
                    : undefined
              }
            >
              <Image
                src={s.bg}
                alt="Huahao Sealing"
                fill
                priority={idx === 0}
                sizes="100vw"
                className={`object-cover object-center [filter:brightness(0.82)] ${
                  isCurrent ? "hero-kenburns" : ""
                }`}
              />
            </div>
          )
        })}
      </div>

      {/* 轻量可读性遮罩：左侧文字区微暗 + 底部收边，不压暗整张图 */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* 文字内容：用 key 重挂载以重播动画 */}
      {/* 垂直留白用 hero-pad（见 app/globals.css）：随视口高度自适应，避免矮屏下 Hero
          被内容撑得比视口更高，把锚在区块底部的轮播指示器推出首屏。 */}
      <div className="hero-pad relative z-30 w-full px-6 md:px-10 xl:px-[4.5vw]">
        <div key={current}>
          {/* ============ 原始内容（CNC 车间实拍 + 600°C） ============ */}
          {slide.original && (
            <div className="animate-reveal">
              <div className="inline-flex items-center gap-4">
                <span className="h-7 w-[3px] bg-accent" aria-hidden />
                <span className="font-serif-sc text-[13px] uppercase tracking-[0.32em] text-white/85 md:text-[15px]">
                  Carbon Graphite Sealing Components
                </span>
              </div>
              <h1 className="mt-6 max-w-[1200px] font-serif-sc text-[clamp(2.4rem,4.6vw,5.5rem)] font-black leading-[1.12] text-white md:mt-7">
                {ui.lead}
                <span className="text-accent"> · {ui.accent}</span>
              </h1>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-10 md:gap-x-8">
                <span className="font-num-serif italic leading-none text-white [font-size:clamp(3.4rem,6vw,7rem)]">
                  600<span className="align-top tracking-[-0.04em] text-[0.5em]">°C</span>
                </span>
                <span className="hidden h-14 w-px bg-white/35 md:block md:h-16" aria-hidden />
                <span className="text-base tracking-wide text-white/90 md:text-xl xl:text-2xl">{ui.tempLabel}</span>
              </div>
              <div className="mt-8 h-px w-full max-w-[820px] bg-white/20 md:mt-10 md:max-w-[56vw]" aria-hidden />
              <p className="mt-6 text-sm tracking-wide text-white/85 md:mt-7 md:text-lg xl:text-xl">{ui.subline}</p>
              <div className="mt-9 md:mt-11">
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center gap-3 rounded-full bg-accent px-8 text-base font-medium text-white transition-colors hover:bg-accent-hover md:h-14 md:px-10 md:text-xl"
                >
                  {ui.cta}
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          )}

          {/* ============ 第 1-6 张：艺术文字 + 入场动效 ============ */}
          {!slide.original && slide.content && (
            <div>
              {/* eyebrow */}
              <div className="hero-text-fade-up inline-flex items-center gap-4" style={{ animationDelay: "0.1s" }}>
                <span className="h-7 w-[3px] bg-accent" aria-hidden />
                <span className="font-serif-sc text-[13px] uppercase tracking-[0.32em] text-white/85 md:text-[15px]">
                  {getLocalized(slide.content.eyebrow, locale)}
                </span>
              </div>

              {/* 主标题：title + accent（红色发光） */}
              <h1
                className="mt-6 max-w-[1100px] font-serif-sc text-[clamp(2.4rem,4.8vw,5.8rem)] font-black leading-[1.1] text-white md:mt-7 hero-text-slide-left"
                style={{ animationDelay: "0.25s" }}
              >
                {getLocalized(slide.content.title, locale)}
                <span className="hero-accent-glow text-accent"> · {getLocalized(slide.content.accent, locale)}</span>
              </h1>

              {/* 数据大字行 */}
              <div
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-10 md:gap-x-8 hero-text-fade-up"
                style={{ animationDelay: "0.45s" }}
              >
                <span className="font-num-serif italic leading-none text-white [font-size:clamp(3.4rem,6vw,7rem)]">
                  {slide.content.stat}
                  <span className="align-top tracking-[-0.04em] text-[0.45em] text-accent">{slide.content.statUnit}</span>
                </span>
                <span className="hidden h-14 w-px bg-white/35 md:block md:h-16" aria-hidden />
                <span className="text-base tracking-wide text-white/90 md:text-xl xl:text-2xl">
                  {getLocalized(slide.content.statLabel, locale)}
                </span>
              </div>

              {/* 通栏细线 */}
              <div
                className="mt-8 h-px w-full max-w-[820px] bg-white/20 md:mt-10 md:max-w-[56vw] hero-line-grow origin-left"
                style={{ animationDelay: "0.6s" }}
                aria-hidden
              />

              {/* 副标题 */}
              <p
                className="mt-6 text-sm tracking-wide text-white/85 md:mt-7 md:text-lg xl:text-xl hero-text-fade-in"
                style={{ animationDelay: "0.75s" }}
              >
                {getLocalized(slide.content.subline, locale)}
              </p>

              {/* CTA */}
              <div className="mt-9 md:mt-11 hero-text-fade-up" style={{ animationDelay: "0.9s" }}>
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center gap-3 rounded-full bg-accent px-8 text-base font-medium text-white transition-colors hover:bg-accent-hover md:h-14 md:px-10 md:text-xl"
                >
                  {ui.cta}
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 轮播指示器：大圆点，当前项红色填充 */}
      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 md:bottom-12 md:gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className="group flex items-center"
          >
            {idx === current ? (
              <span className="block h-4 w-4 rounded-full bg-accent shadow-[0_0_0_3px_rgba(230,0,18,0.25)] transition-all md:h-5 md:w-5" />
            ) : (
              <span className="block h-4 w-4 rounded-full border-2 border-white/60 bg-transparent transition-all group-hover:border-white group-hover:bg-white/30 md:h-5 md:w-5" />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}
