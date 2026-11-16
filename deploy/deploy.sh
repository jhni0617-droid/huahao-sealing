#!/usr/bin/env bash
# 拉取代码 → 构建 → 重启。每次更新站点都跑这个。
#
# 用法（在 /var/www/hhseal 目录下）：
#   bash deploy/deploy.sh

set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/hhseal}"
APP_NAME="${APP_NAME:-hhseal}"
PORT="${PORT:-3000}"

log() { printf '\n\033[1;32m==> %s\033[0m\n' "$*"; }

cd "$APP_DIR"

# ── 1. 拉最新代码 ──
log "拉取代码"
git fetch --depth 1 origin main
git reset --hard origin/main

# ── 2. 依赖 ──
# npm ci 要求 lock 与 package.json 严格同步，历史上这个仓库的 lock 曾出现
# @swc/helpers 缺失导致 ci 直接失败，所以失败时自动退回 npm install
log "安装依赖"
if ! npm ci --include=dev >/tmp/npmci.log 2>&1; then
  echo "npm ci 失败（锁文件不同步），改用 npm install"
  npm install --include=dev --no-audit --no-fund
fi

# ── 3. 构建（限制堆内存，避免小内存机器 OOM） ──
log "构建"
export NODE_OPTIONS="--max-old-space-size=2048"
export NEXT_TELEMETRY_DISABLED=1
npm run build

# ── 4. 组装 standalone 运行目录 ──
# Next 的 standalone 产物不会自动带 static 和 public，必须手动拷
log "组装 standalone 产物"
cp -r public .next/standalone/ 2>/dev/null || true
mkdir -p .next/standalone/.next
cp -r .next/static .next/standalone/.next/

# ── 5. 启动 / 重启 ──
log "重启应用"
if [ -f .env.production ]; then
  set -a
  # shellcheck disable=SC1091
  . ./.env.production
  set +a
fi

if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  PORT="$PORT" HOSTNAME=127.0.0.1 pm2 restart "$APP_NAME" --update-env
else
  # --update-env 不可省：PM2 daemon 会保留启动时的环境快照，
  # 不加这个参数新进程读不到刚 source 的 .env.production
  PORT="$PORT" HOSTNAME=127.0.0.1 pm2 start .next/standalone/server.js --name "$APP_NAME" --update-env
fi

pm2 save

# ── 6. 健康检查 ──
log "健康检查"
sleep 3
for i in 1 2 3 4 5; do
  CODE=$(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:${PORT}/en" || echo 000)
  if [ "$CODE" = "200" ]; then
    log "站点正常，HTTP $CODE"
    exit 0
  fi
  echo "第 $i 次检查返回 $CODE，重试…"
  sleep 3
done

echo ""
echo "启动后未通过健康检查，查看日志："
echo "  pm2 logs $APP_NAME --lines 50"
exit 1
