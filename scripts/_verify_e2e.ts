import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());
import { dbAll } from "../lib/admin/db";

async function main() {
  const rows = await dbAll(
    `SELECT id, path, referrer, is_bot, substr(visited_at,1,19) as t
     FROM page_views WHERE path LIKE '/test-e2e%' ORDER BY id DESC`, []);
  console.log("--- E2E 测试记录 ---");
  for (const r of rows) console.log(JSON.stringify(r));
}
main().catch((e) => { console.error(e); process.exit(1); });
