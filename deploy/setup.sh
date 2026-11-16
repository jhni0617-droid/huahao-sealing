#!/usr/bin/env bash
# 阿里云轻量服务器（Ubuntu 22.04 / 24.04）首次初始化
# 用法：以 root 登录后执行
#   curl -fsSL <本脚本地址> | bash
# 或把仓库克隆下来后：
#   bash deploy/setup.sh
#
# 幂等：重复执行不会破坏已有环境

set -euo pipefail

log() { printf '\n\033[1;32m==> %s\033[0m\n' "$*"; }
warn() { printf '\n\033[1;33m[!] %s\033[0m\n' "$*"; }

if [ "$(id -u)" -ne 0 ]; then
  echo "请用 root 运行：sudo bash deploy/setup.sh"
  exit 1
fi

# ── 1. 系统更新 + 基础工具 ──
log "更新系统包索引"
export DEBIAN_FRONTEND=noninteractive
apt-get update -y
apt-get install -y curl git ca-certificates gnupg ufw build-essential python3 rsync

# ── 2. Swap（2G 内存机器构建 Next.js 必需，4G 也建议留一点） ──
log "配置 2GB swap"
if [ ! -f /swapfile ]; then
  fallocate -l 2G /swapfile || dd if=/dev/zero of=/swapfile bs=1M count=2048
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  grep -q '^/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab
  # 降低 swap 使用倾向，只有内存吃紧才用
  sysctl -w vm.swappiness=10
  grep -q '^vm.swappiness' /etc/sysctl.conf || echo 'vm.swappiness=10' >> /etc/sysctl.conf
  log "swap 已启用"
else
  log "swap 已存在，跳过"
fi

# ── 3. Node.js 22 LTS ──
log "安装 Node.js 22 LTS"
if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
else
  log "Node 已安装：$(node -v)"
fi

# ── 4. PM2 进程守护 ──
log "安装 PM2"
npm install -g pm2
pm2 startup systemd -u root --hp /root >/dev/null 2>&1 || true

# ── 5. Nginx ──
log "安装 Nginx"
apt-get install -y nginx
systemctl enable nginx
systemctl start nginx

# ── 6. Certbot（Let's Encrypt 免费证书，自动续期） ──
log "安装 Certbot"
apt-get install -y certbot python3-certbot-nginx

# ── 7. 目录 ──
log "创建站点目录"
mkdir -p /var/www/hhseal
mkdir -p /var/log/pm2

# ── 8. 防火墙 ──
log "配置防火墙（只放行 22 / 80 / 443）"
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

# ── 9. 结果 ──
log "环境就绪"
echo "  Node    : $(node -v)"
echo "  NPM     : $(npm -v)"
echo "  PM2     : $(pm2 -v)"
echo "  Nginx   : $(nginx -v 2>&1)"
echo "  Swap    : $(free -h | awk '/Swap/{print $2}')"
echo "  内存    : $(free -h | awk '/Mem/{print $2}')"
echo ""
echo "下一步："
echo "  1) git clone 仓库到 /var/www/hhseal"
echo "  2) 复制 deploy/.env.example 为 .env.production 并填值"
echo "  3) bash deploy/deploy.sh"
echo "  4) 复制 deploy/nginx.conf 到 /etc/nginx/sites-available/ 并启用"
echo "  5) certbot --nginx -d hhseal.cn -d www.hhseal.cn"
