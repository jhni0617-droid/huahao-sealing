import Image from "next/image"
import { getLocale } from "next-intl/server"
import { Link } from "@/i18n/routing"
import { getLocalized } from "@/lib/locale-data"
import Icon, { type IconName } from "@/components/ui/Icon"

const copy = {
  zh: {
    eyebrow: "产品能力",
    title: "面向泵、密封与旋转设备的碳石墨零部件",
    description: "从标准机械密封环到按图加工的石墨轴套、轴承和三瓣环，华豪密封为 OEM 厂商和设备维护团队提供稳定、可追溯的碳石墨解决方案。",
    viewAll: "查看全部产品",
    quote: "提交图纸询价",
    customTitle: "支持按图纸 / 样品定制",
    customDesc: "提供尺寸、公差、介质、温度、压力和转速信息，我们可协助推荐材料牌号与加工方案。",
    products: [
      {
        title: "碳石墨密封环",
        subtitle: "Mechanical seal faces",
        description: "适用于离心泵、化工泵、海水泵和通用机械密封。",
        image: "/images/密封环/IMG_20260505_125818.webp",
        href: "/products#seal-rings",
        icon: "seal",
      },
      {
        title: "石墨轴套 / 轴承",
        subtitle: "Bushings & bearings",
        description: "自润滑、耐腐蚀，适用于潜水泵、船舶、搅拌器和重载旋转设备。",
        image: "/images/products/graphite-bushing.webp",
        href: "/products#carbon-graphite-sleeves",
        icon: "gear",
      },
      {
        title: "碳石墨三瓣环",
        subtitle: "Segmented split rings",
        description: "适合封闭腔体安装，可在不拆轴条件下维护和替换。",
        image: "/images/products/three-part-ring.webp",
        href: "/products#three-part-rings",
        icon: "shield",
      },
    ],
  },
  en: {
    eyebrow: "Product capability",
    title: "Carbon graphite components for pumps, seals and rotating equipment",
    description: "From standard mechanical seal faces to drawing-based graphite bushings, bearings and segmented rings, Huahao supports OEM buyers and maintenance teams with stable, traceable carbon graphite parts.",
    viewAll: "View All Products",
    quote: "Send Drawing for Quote",
    customTitle: "Custom machining from drawing or sample",
    customDesc: "Share dimensions, tolerances, medium, temperature, pressure and speed. Our team can recommend material grade and machining approach.",
    products: [
      {
        title: "Carbon Graphite Seal Rings",
        subtitle: "Mechanical seal faces",
        description: "For centrifugal pumps, chemical pumps, seawater pumps and general mechanical seals.",
        image: "/images/密封环/IMG_20260505_125818.webp",
        href: "/products#seal-rings",
        icon: "seal",
      },
      {
        title: "Graphite Bushings & Bearings",
        subtitle: "Self-lubricating supports",
        description: "For submersible pumps, marine equipment, agitators and heavy-duty rotating machinery.",
        image: "/images/products/graphite-bushing.webp",
        href: "/products#carbon-graphite-sleeves",
        icon: "gear",
      },
      {
        title: "Carbon Graphite Split Rings",
        subtitle: "Segmented sealing rings",
        description: "For enclosed cavities where maintenance is needed without removing the shaft.",
        image: "/images/products/three-part-ring.webp",
        href: "/products#three-part-rings",
        icon: "shield",
      },
    ],
  },
  vi: {
    eyebrow: "Năng lực sản phẩm",
    title: "Linh kiện than chì carbon cho bơm, phớt và thiết bị quay",
    description: "Từ mặt phớt cơ khí tiêu chuẩn đến bạc lót, ổ trục và vòng chia gia công theo bản vẽ, Huahao cung cấp linh kiện than chì ổn định, truy xuất được cho OEM và bảo trì.",
    viewAll: "Xem tất cả sản phẩm",
    quote: "Gửi bản vẽ báo giá",
    customTitle: "Hỗ trợ tùy chỉnh theo bản vẽ / mẫu",
    customDesc: "Cung cấp kích thước, dung sai, môi trường, nhiệt độ, áp suất và tốc độ; chúng tôi hỗ trợ đề xuất cấp vật liệu và phương án gia công.",
    products: [
      { title: "Vòng phớt than chì carbon", subtitle: "Mặt phớt cơ khí", description: "Cho bơm ly tâm, bơm hóa chất, bơm nước biển và phớt cơ khí thông dụng.", image: "/images/密封环/IMG_20260505_125818.webp", href: "/products#seal-rings", icon: "seal" },
      { title: "Bạc lót / ổ trục graphite", subtitle: "Đỡ tự bôi trơn", description: "Tự bôi trơn, chống ăn mòn, dùng cho bơm chìm, hàng hải, máy khuấy và thiết bị quay tải nặng.", image: "/images/products/graphite-bushing.webp", href: "/products#carbon-graphite-sleeves", icon: "gear" },
      { title: "Vòng chia than chì carbon", subtitle: "Vòng phân đoạn", description: "Phù hợp khoang kín, có thể bảo trì và thay thế mà không tháo trục.", image: "/images/products/three-part-ring.webp", href: "/products#three-part-rings", icon: "shield" },
    ],
  },
  th: {
    eyebrow: "ความสามารถสินค้า",
    title: "ชิ้นส่วนคาร์บอนกราไฟต์สำหรับปั๊ม ซีล และอุปกรณ์หมุน",
    description: "ตั้งแต่หน้าซีลกลมาตรฐานจนถึงบูช แบริ่ง และแหวนแบ่งชิ้นตามแบบ Huahao สนับสนุน OEM และทีมซ่อมบำรุงด้วยชิ้นส่วนคาร์บอนกราไฟต์ที่เสถียรและตรวจสอบย้อนกลับได้",
    viewAll: "ดูสินค้าทั้งหมด",
    quote: "ส่งแบบเพื่อขอราคา",
    customTitle: "รองรับการผลิตตามแบบ / ตัวอย่าง",
    customDesc: "แจ้งขนาด ค่าความคลาดเคลื่อน ตัวกลาง อุณหภูมิ แรงดัน และความเร็ว เราช่วยแนะนำเกรดวัสดุและแนวทางการผลิตได้",
    products: [
      { title: "แหวนซีลคาร์บอนกราไฟต์", subtitle: "หน้าซีลกล", description: "สำหรับปั๊มหอยโข่ง ปั๊มเคมี ปั๊มน้ำทะเล และซีลกลทั่วไป", image: "/images/密封环/IMG_20260505_125818.webp", href: "/products#seal-rings", icon: "seal" },
      { title: "บูช / แบริ่งกราไฟต์", subtitle: "รองรับแบบหล่อลื่นตัวเอง", description: "หล่อลื่นตัวเอง ทนกัดกร่อน ใช้กับปั๊มจุ่ม งานเรือ เครื่องกวน และอุปกรณ์หมุนหนัก", image: "/images/products/graphite-bushing.webp", href: "/products#carbon-graphite-sleeves", icon: "gear" },
      { title: "แหวนแบ่งคาร์บอนกราไฟต์", subtitle: "วงแหวนแบ่งชิ้น", description: "เหมาะกับช่องปิด สามารถบำรุงรักษาและเปลี่ยนโดยไม่ต้องถอดเพลา", image: "/images/products/three-part-ring.webp", href: "/products#three-part-rings", icon: "shield" },
    ],
  },
  ru: {
    eyebrow: "Возможности продукции",
    title: "Углерод-графитовые компоненты для насосов, уплотнений и вращающегося оборудования",
    description: "От стандартных торцевых уплотнений до графитовых втулок, подшипников и сегментных колец по чертежам: Huahao поставляет стабильные прослеживаемые детали для OEM и обслуживания.",
    viewAll: "Все продукты",
    quote: "Отправить чертеж",
    customTitle: "Изготовление по чертежу или образцу",
    customDesc: "Передайте размеры, допуски, среду, температуру, давление и скорость; мы поможем выбрать марку материала и способ обработки.",
    products: [
      { title: "Углерод-графитовые кольца", subtitle: "Торцевые уплотнения", description: "Для центробежных, химических, морских насосов и стандартных механических уплотнений.", image: "/images/密封环/IMG_20260505_125818.webp", href: "/products#seal-rings", icon: "seal" },
      { title: "Графитовые втулки / подшипники", subtitle: "Самосмазывающиеся опоры", description: "Для погружных насосов, морского оборудования, мешалок и тяжелых вращающихся узлов.", image: "/images/products/graphite-bushing.webp", href: "/products#carbon-graphite-sleeves", icon: "gear" },
      { title: "Сегментные графитовые кольца", subtitle: "Разрезные кольца", description: "Для закрытых полостей, где обслуживание возможно без снятия вала.", image: "/images/products/three-part-ring.webp", href: "/products#three-part-rings", icon: "shield" },
    ],
  },
  ja: {
    eyebrow: "製品能力",
    title: "ポンプ、シール、回転機器向けカーボングラファイト部品",
    description: "標準メカニカルシール面から図面加工のブッシング、軸受、分割リングまで、HuahaoはOEMと保守チームに安定した追跡可能な部品を提供します。",
    viewAll: "全製品を見る",
    quote: "図面で見積依頼",
    customTitle: "図面 / サンプルによるカスタム対応",
    customDesc: "寸法、公差、媒体、温度、圧力、速度を共有いただければ、材料グレードと加工方法を提案します。",
    products: [
      { title: "カーボングラファイトシールリング", subtitle: "メカニカルシール面", description: "遠心ポンプ、化学ポンプ、海水ポンプ、一般メカニカルシール向け。", image: "/images/密封环/IMG_20260505_125818.webp", href: "/products#seal-rings", icon: "seal" },
      { title: "グラファイトブッシング / 軸受", subtitle: "自己潤滑サポート", description: "水中ポンプ、船舶、撹拌機、重負荷回転機器向け。", image: "/images/products/graphite-bushing.webp", href: "/products#carbon-graphite-sleeves", icon: "gear" },
      { title: "カーボングラファイト分割リング", subtitle: "分割シールリング", description: "軸を外さずに保守・交換が必要な密閉空間に適します。", image: "/images/products/three-part-ring.webp", href: "/products#three-part-rings", icon: "shield" },
    ],
  },
  ko: {
    eyebrow: "제품 역량",
    title: "펌프, 씰 및 회전 장비용 카본 그라파이트 부품",
    description: "표준 기계식 씰 페이스부터 도면 기반 부싱, 베어링, 분할 링까지 Huahao는 OEM 구매자와 유지보수팀에 안정적이고 추적 가능한 부품을 제공합니다.",
    viewAll: "전체 제품 보기",
    quote: "도면 견적 요청",
    customTitle: "도면 / 샘플 맞춤 가공 지원",
    customDesc: "치수, 공차, 매체, 온도, 압력, 속도를 공유하면 재료 등급과 가공 방안을 추천합니다.",
    products: [
      { title: "카본 그라파이트 씰 링", subtitle: "기계식 씰 페이스", description: "원심 펌프, 화학 펌프, 해수 펌프 및 일반 기계식 씰용.", image: "/images/密封环/IMG_20260505_125818.webp", href: "/products#seal-rings", icon: "seal" },
      { title: "그라파이트 부싱 / 베어링", subtitle: "자체 윤활 지지부", description: "수중 펌프, 해양 장비, 교반기 및 중부하 회전 장비용.", image: "/images/products/graphite-bushing.webp", href: "/products#carbon-graphite-sleeves", icon: "gear" },
      { title: "카본 그라파이트 분할 링", subtitle: "분할 씰 링", description: "축을 제거하지 않고 유지보수와 교체가 필요한 밀폐 공간에 적합.", image: "/images/products/three-part-ring.webp", href: "/products#three-part-rings", icon: "shield" },
    ],
  },
}

export default async function HomeProductEntry() {
  const locale = await getLocale()
  const data = getLocalized(copy, locale)

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <div className="badge-accent mb-4">{data.eyebrow}</div>
            <h2 className="max-w-4xl text-3xl font-bold text-primary md:text-5xl">{data.title}</h2>
            <div className="industrial-divider" />
          </div>
          <div className="lg:text-right">
            <p className="text-base leading-relaxed text-muted">{data.description}</p>
            <div className="mt-6 flex flex-wrap gap-3 lg:justify-end">
              <Link href="/products" className="btn-secondary">{data.viewAll}</Link>
              <Link href="/contact" className="btn-primary">{data.quote}</Link>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="group grid overflow-hidden border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] bg-background">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-4 sm:p-6 lg:p-8 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                />
              </div>
              <div className="border-t border-border p-4 sm:p-5 lg:p-6">
                <div className="mb-3 sm:mb-4 flex items-center justify-between gap-3">
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.08em] text-accent">{product.subtitle}</div>
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 items-center justify-center bg-accent-subtle text-accent">
                    <Icon name={product.icon as IconName} className="h-4 w-4 sm:h-4.5 sm:w-4.5 lg:h-5 lg:w-5" />
                  </div>
                </div>
                <h3 className="mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl font-bold text-primary transition-colors group-hover:text-accent">{product.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-muted line-clamp-3">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 grid gap-4 border border-border bg-background p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-lg font-bold text-primary">{data.customTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{data.customDesc}</p>
          </div>
          <Link href="/contact" className="btn-primary md:justify-self-end">
            {data.quote}
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
