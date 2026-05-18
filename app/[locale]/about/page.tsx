import Image from "next/image"
import CTASection from "@/components/CTASection"
import FAQAccordion from "@/components/FAQAccordion"
import { generateMeta } from "@/lib/utils"

export const metadata = generateMeta({
  title: "关于我们 | 华豪密封件",
  description: "霍邱县华豪密封件有限公司，前身为浙江嘉善先锋电碳，专业从事石墨密封件及石墨轴套研发制造与销售，支持免费寄样测试与非标定制。",
  path: "/about",
})

const milestones = [
  { year: "2006", event: "嘉善先锋电碳正式成立，深耕碳石墨密封件行业，专业从事石墨密封环、碳石墨耐磨制品研发、生产与定制加工，夯实实业发展根基。" },
  { year: "2009", event: "批量引进高精度车床设备，全面升级加工硬件，优化生产流程，扩充生产产能，迈入标准化、规模化生产新阶段。" },
  { year: "2010", event: "搭建完善全域质检体系，制定全流程严苛品控标准，从原料筛选到成品出库层层严控，稳步提升产品品质与市场口碑。" },
  { year: "2012", event: "引进行业先进全自动浸渍生产线，升级石墨致密化核心工艺，全面强化产品耐高温、耐磨损、耐腐蚀及密封稳定性。" },
  { year: "2019", event: "企业战略迁址安徽六安，正式更名霍邱县华豪密封件有限公司，全面整合资源，重新规划布局生产全线。" },
  { year: "2020", event: "组建专业专项研发团队，自主研发抗氧化浸渍核心技术，攻克高温恶劣工况应用难题，核心工艺实力稳居行业前沿。" },
  { year: "2021", event: "拓宽市场应用赛道，全面布局新能源、液压机械、化工泵阀、空压机等领域，丰富全系密封产品，适配多元工业工况需求。" },
  { year: "2022", event: "扩建现代化标准生产厂区，完善生产配套设施，大幅提升批量供货能力，有效压缩订单交付周期。" },
  { year: "2025", event: "专注深耕高端精密石墨密封领域，聚焦特殊工况定制研发，匠心打造高适配、高耐用、高性能一体化工业密封解决方案。" },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-hero-bg text-white">
        <div className="container-wide py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于华豪密封件</h1>
          <div className="w-[60px] h-[3px] bg-accent mb-4" />
          <p className="text-gray-300 max-w-2xl">
            十余年专注碳石墨密封件研发制造，匠心品质，值得信赖。
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">公司简介</h2>
              <div className="industrial-divider" />
              <p className="text-muted mt-4 leading-relaxed">
                霍邱县华豪密封件有限公司位于安徽省六安市霍邱县龙潭镇纺织产业园14号厂房，成立于2019年，前身为浙江嘉善先锋电碳。是一家专业从事石墨密封件及石墨轴套研发制造与销售的企业。
              </p>
              <p className="text-muted mt-4 leading-relaxed">
                公司依托当地资源优势，致力为国内外工业设备提供高性能、高可靠性的密封与耐磨解决方案。拥有成熟的生产工艺和完善的质量控制体系，产品采用优质碳石墨材料，具有自润滑、耐高温、耐腐蚀、成本低等特性，广泛应用于泵、阀门、压缩机、反应釜、化工冶金、机械密封等领域。
              </p>
              <p className="text-muted mt-4 leading-relaxed">
                我们可根据客户的图纸或样品进行非标定制，满足不同工况需求。同时，我们支持免费寄样测试，让客户先验证质量，再批量合作，深受客户信赖。华豪密封件始终坚持以质量求生存，以信誉求发展，期待与全球客户携手合作，共创未来！
              </p>
            </div>

            <div className="relative h-full min-h-[400px]">
              <Image
                src="/images/{9D8C1630-8B0E-4C5E-8263-6B2C49856468}.png"
                alt="华豪密封件厂区实景"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">常见问题解答</h2>
          <div className="industrial-divider mx-auto" />
          <p className="text-muted mt-4 text-center max-w-2xl mx-auto mb-12">
            关于产品、定制、合作等常见疑问，这里为您一一解答。
          </p>

          <div className="max-w-4xl mx-auto space-y-10">
            {/* Category 1 */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent rounded-full" />
                一、公司基础信息
              </h3>
              <div className="space-y-3">
                <FAQAccordion title="贵公司主营什么产品？">
                  <p className="text-sm text-muted leading-relaxed">
                    我司专业生产各类石墨轴套、石墨密封件、石墨三瓣环等石墨制品，主打自润滑耐磨石墨配件，支持非标定制、精密加工。
                  </p>
                </FAQAccordion>
                <FAQAccordion title="公司成立多久，生产实力如何？">
                  <p className="text-sm text-muted leading-relaxed">
                    深耕石墨制品行业多年，自有原料调配、成型烧结、精密机加工、真空浸渍全套生产线，自产自销，产能充足，可大批量稳定供货。
                  </p>
                </FAQAccordion>
                <FAQAccordion title="公司地址在哪里？">
                  <p className="text-sm text-muted leading-relaxed">
                    厂区位于安徽六安，交通物流便捷，全国可快速发货，就近配送高效省心。
                  </p>
                </FAQAccordion>
                <FAQAccordion title="是否为源头工厂，有无中间商差价？">
                  <p className="text-sm text-muted leading-relaxed">
                    纯实体源头生产厂家，无层层分销，直接对接厂家直供，性价比高，价格透明。
                  </p>
                </FAQAccordion>
              </div>
            </div>

            {/* Category 2 */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent rounded-full" />
                二、产品工艺与品质
              </h3>
              <div className="space-y-3">
                <FAQAccordion title="产品采用哪些主流浸渍工艺？">
                  <p className="text-sm text-muted leading-relaxed">
                    可做树脂浸渍、锑浸渍、巴氏合金浸渍等多种工艺，适配不同工况需求。
                  </p>
                </FAQAccordion>
                <FAQAccordion title="产品精度与质量有保障吗？">
                  <p className="text-sm text-muted leading-relaxed">
                    严格把控烧结密度、外观平整度、内外径公差，成品经过尺寸检测、耐磨测试、耐温测试，出厂全检，品质稳定耐用。
                  </p>
                </FAQAccordion>
                <FAQAccordion title="产品耐温、耐磨、耐腐蚀性能怎么样？">
                  <p className="text-sm text-muted leading-relaxed">
                    可适配低温、常温、中高温、干磨、油润滑、清水、弱酸碱等多种工况，耐磨减磨效果优异，使用寿命长。
                  </p>
                </FAQAccordion>
              </div>
            </div>

            {/* Category 3 */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent rounded-full" />
                三、定制与加工服务
              </h3>
              <div className="space-y-3">
                <FAQAccordion title="可以来图来样非标定制吗？">
                  <p className="text-sm text-muted leading-relaxed">
                    支持任意尺寸、异形结构、开槽、打孔、端面打磨等精密定制，图纸 / 样品均可接单。
                  </p>
                </FAQAccordion>
                <FAQAccordion title="最小起订量是多少？">
                  <p className="text-sm text-muted leading-relaxed">
                    支持试样小批量接单，也可承接大批量订单，灵活适配客户需求。
                  </p>
                </FAQAccordion>
                <FAQAccordion title="交货周期大概多久？">
                  <p className="text-sm text-muted leading-relaxed">
                    常规现货款式当天 / 次日发货；标准定制 1-3 天；复杂异形件 7-10 天，急单可优先排产。
                  </p>
                </FAQAccordion>
                <FAQAccordion title="能否提供图纸选型、工况技术指导？">
                  <p className="text-sm text-muted leading-relaxed">
                    专业技术团队免费提供工况选材、间隙搭配、工艺选型、安装使用全套技术方案。
                  </p>
                </FAQAccordion>
              </div>
            </div>

            {/* Category 4 */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent rounded-full" />
                四、合作与售后
              </h3>
              <div className="space-y-3">
                <FAQAccordion title="支持哪些合作模式？">
                  <p className="text-sm text-muted leading-relaxed">
                    工厂直供、经销商合作、项目配套、外贸订单、代工贴牌均可合作。
                  </p>
                </FAQAccordion>
                <FAQAccordion title="发货物流怎么安排？">
                  <p className="text-sm text-muted leading-relaxed">
                    默认专线物流、快递配送，大件走货运，可按客户指定物流发货，运费合理。
                  </p>
                </FAQAccordion>
                <FAQAccordion title="出现质量问题如何处理？">
                  <p className="text-sm text-muted leading-relaxed">
                    非人为使用损坏，严格按售后政策处理，退换货无忧，全力保障客户使用权益。
                  </p>
                </FAQAccordion>
                <FAQAccordion title="是否可以免费寄样？">
                  <p className="text-sm text-muted leading-relaxed">
                    支持客户申请样品测试，少量试样免费，仅收取基础运费。
                  </p>
                </FAQAccordion>
              </div>
            </div>

            {/* Category 5 */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent rounded-full" />
                五、行业优势
              </h3>
              <div className="space-y-3">
                <FAQAccordion title="相比同行你们最大优势是什么？">
                  <p className="text-sm text-muted leading-relaxed">
                    自产原料 + 自主浸渍工艺 + 精密机加工一体化，价格低、交期快、精度高、工况适配性强，一站式解决石墨耐磨密封配件需求。
                  </p>
                </FAQAccordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">企业发展历程</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 pb-8 last:pb-0 relative">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent rounded-full shrink-0 mt-1" />
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                </div>
                <div>
                  <span className="text-sm font-bold text-accent">{m.year}</span>
                  <p className="text-muted mt-1">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">质量与制造</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "原材料控制",
                desc: "每批碳石墨原材料在投产前均经过密度、硬度和纯度检测。",
              },
              {
                title: "精密加工",
                desc: "CNC加工中心实现微米级尺寸公差，确保每一批次的质量一致性。",
              },
              {
                title: "性能检测",
                desc: "每件产品经过严格的尺寸验证、压力测试和表面质量评估。",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="与华豪密封件合作"
        subtitle="无论您需要标准产品还是非标定制方案，欢迎来图来样，免费寄样测试，让质量先行。"
      />
    </>
  )
}
