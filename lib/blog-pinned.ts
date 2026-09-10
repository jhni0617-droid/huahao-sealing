/**
 * 首页「公司新闻」区块专用的轻量数据源。
 *
 * 为什么单独开一个模块：
 * `lib/blog-data.ts` 会把 10 个分片（合计约 1.6MB 源码、94 篇文章）全部聚合成
 * `blogPosts` / `blogPostsMeta`。首页只需要其中置顶的 3 条公司新闻，
 * 如果直接 `import { blogPostsMeta }`，整个 1.6MB 都会被拉进首页的服务端渲染链路，
 * 白白拖慢构建与冷启动。
 *
 * 目前 3 条置顶文章恰好都在 `blog-data-10.ts` 这一个分片里
 * （该分片仅 36KB、无外部依赖、含 4 篇文章），所以这里只引这一个分片。
 *
 * ⚠️ 维护约定：**新增置顶公司新闻时，请把它放进 `blog-data-10.ts`**。
 *    若因故必须放到其它分片，需同步修改本文件，否则新文章不会出现在首页
 *    （文件末尾有一处自检，数量不足时会告警）。
 */
import { blogPostsBatch10 } from "./blog-data-10"

/** 首页公司新闻区块要展示的置顶文章（最多 3 条） */
export const pinnedBlogPosts = blogPostsBatch10.filter((p) => p.pinned).slice(0, 3)

// 自检：blog-data-10.ts 里不足 3 条置顶，说明置顶文章被挪到了别的分片，
// 首页会少显示内容。这里提前告警。
if (process.env.NODE_ENV !== "production" && pinnedBlogPosts.length < 3) {
  console.warn(
    "[blog-pinned] 在 blog-data-10.ts 里只找到 " +
      pinnedBlogPosts.length +
      " 条置顶文章（期望 3 条）。" +
      "请确认新增的置顶文章是否放在了该分片，或同步更新 lib/blog-pinned.ts。"
  )
}
