# HuaHao Sealing B2B 独立站

## 技术栈
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- 部署：Vercel

## 项目结构

```
app/                        # 页面文件（路由）
  page.tsx                  # 首页
  layout.tsx                # 全局布局（Header/Footer/浮动CTA）
  globals.css               # 全局样式 + Tailwind 主题
  sitemap.ts                # SEO 站点地图
  products/
    page.tsx                # 产品列表页
    [slug]/page.tsx         # 产品详情页（动态路由）
  applications/page.tsx     # 应用领域页
  cases/page.tsx            # 案例页
  about/page.tsx            # 关于我们页
  contact/page.tsx          # 联系我们页
  api/contact/route.ts      # 询价表单 API

components/                 # 组件
  Header.tsx                # 顶部导航栏
  Footer.tsx                # 底部
  FloatingCTA.tsx           # 全局浮动咨询按钮
  HeroSection.tsx           # 首页首屏
  ProblemSection.tsx        # 问题场景模块
  FailureSolutionsSection.tsx  # 常见故障解决方案
  FactorySection.tsx        # 工厂数据
  FactoryWorkshopSection.tsx   # 工厂车间展示
  ClientsSection.tsx        # 出口国家/全球客户
  AdvantagesSection.tsx     # 产品优势
  ApplicationsSection.tsx   # 应用领域（首页）
  ApplicationConditionsSection.tsx  # 工况参数表
  CasesSection.tsx          # 案例展示
  CTASection.tsx            # 通用 CTA 区块
  ContactForm.tsx           # 询价表单

lib/                        # 数据层（修改内容主要在这里）
  constants.ts              # 所有文本内容、公司信息、优势、案例、工况、故障方案等
  products.ts               # 产品数据（10个产品，含规格/特性/材料/FAQ）
  utils.ts                  # SEO 工具函数
```

## 常用修改指南

### 修改公司信息（电话、邮箱、地址等）
→ 编辑 `lib/constants.ts` 中的 `siteConfig` 对象

### 添加/修改产品
→ 编辑 `lib/products.ts`，每个产品包含：
  - slug（URL标识）, name, model, category
  - description, shortDesc
  - specs（技术参数表格）
  - applications（适用场景列表）
  - materials（可用材料列表）
  - features（特性列表）
  - faq（常见问题）

### 修改首页内容（优势、应用、案例、工厂数据、出口国家等）
→ 编辑 `lib/constants.ts` 中的对应数组：
  - `advantages` — 四大优势
  - `applications` — 四大应用领域
  - `cases` — 案例故事
  - `factoryHighlights` — 工厂统计数据
  - `clientCountries` — 出口国家列表
  - `exportRegions` — 按大洲分组的国家
  - `manufacturingProcess` — 生产工艺流程
  - `applicationConditions` — 工况参数表
  - `failureSolutions` — 故障解决方案

### 添加新页面
1. 在 `app/` 下创建文件夹和 `page.tsx`
2. 参照已有页面格式
3. 在 `app/sitemap.ts` 中添加路由

### Meta Pixel / 转化 API（CAPI）跟踪
- 配置文件：`lib/meta/capi.ts`（服务端上报）、`lib/meta/client.ts`（浏览器辅助）、`components/AnalyticsScripts.tsx`（Pixel 初始化 + 路由切换重发 PageView）
- 事件：`PageView`（Pixel 自动/路由切换）、`Lead`（询价表单提交，Pixel + CAPI 双通道，同 `event_id` 去重）
- 启用配置（`.env.local`）：
  - `NEXT_PUBLIC_META_PIXEL_ID` — Pixel ID
  - `META_CAPI_ACCESS_TOKEN` — 转化 API token（仅服务端使用，切勿暴露）
  - `META_CAPI_TEST_EVENT_CODE` — 可选，测试事件代码（调试用，上线前清空）
- 新增转化事件：在业务成功路径调用 `sendCapiEvent`（服务端）或 `trackPixelEvent`（浏览器），两者使用相同 `eventId` 避免重复计数
- 隐私：PII（em/ph/fn）在服务端 SHA-256 哈希后上报；`fbp`/`fbc` 透传不哈希

### 修改样式/颜色
→ 编辑 `app/globals.css` 中的 `@theme` 块：
  - `--color-primary` — 主色（深蓝 #1a3a5c）
  - `--color-accent` — 强调色（红色 #c0392b）
  - 其他 Tailwind 自定义变量

### 修改导航菜单
→ 编辑 `components/Header.tsx`

## 命令
- `npm run dev` — 本地开发
- `npm run build` — 构建检查
- `git add -A && git commit -m "msg"` — 提交
- `git push` — 推送

## 提示
- 所有文本内容集中在 `lib/` 目录，修改数据即可更新页面，无需动组件
- 首页模块顺序在 `app/page.tsx` 中调整
- 构建必须通过 (`npm run build` 无错误) 才能部署
