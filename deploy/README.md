# 阿里云自托管部署手册

面向零基础操作：照着从上往下做，不需要懂代码。

---

## 一、买服务器

**购买页**：阿里云官网 → 产品 → 轻量应用服务器（`aliyun.com/product/swas`）

下单时必须选对这三项：

| 选项 | 选什么 | 为什么 |
|---|---|---|
| **地域** | **中国香港** | 大陆地域必须 ICP 备案，且海外客户访问慢 |
| **规格** | **2核 4GB**（国际型） | 两个 Next.js 站在同一台构建，2G 会内存不足 |
| **镜像** | **Ubuntu 24.04** | 脚本按这个系统写的 |

价格约 **¥78/月**，年付更便宜。购买时长建议先买 1 个月，跑通了再续一年。

> 「国际型」是指线路类型 `BGP_NCO`，专为海外访问优化。**不要选「BGP 优化」**，那是给中国大陆访问优化的，海外反而慢。

---

## 二、域名解析

阿里云控制台 → **云解析 DNS** → 找到 `hhseal.cn` → 解析设置 → 添加记录：

| 记录类型 | 主机记录 | 记录值 |
|---|---|---|
| A | `@` | 服务器的**公网 IP** |
| A | `www` | 服务器的**公网 IP** |

如果 `xfastener.cn` 也要放这台机器，同样加两条 A 记录。

DNS 生效一般 10 分钟到 2 小时。

---

## 三、连上服务器

阿里云轻量控制台 → 点你的实例 → 右上角 **「远程连接」** → 选「Workbench 远程连接」。

会打开一个网页终端，用户名 `root`，密码在实例详情页可以重置。

---

## 四、装环境（复制粘贴，一次跑完）

在网页终端里逐行粘贴：

```bash
apt-get update -y && apt-get install -y git
git clone https://github.com/jhni0617-droid/huahao-sealing.git /var/www/hhseal
cd /var/www/hhseal
bash deploy/setup.sh
```

`setup.sh` 会自动装好 Node 22、Nginx、PM2、SSL 工具，并配 2G swap（防构建时内存不足）。大约 3-5 分钟。

> 如果 `git clone` 卡住或失败（访问 GitHub 慢），告诉我，我教你把代码打个包传上去。

---

## 五、填配置

```bash
cd /var/www/hhseal
cp deploy/.env.example .env.production
nano .env.production
```

至少要填 `SMTP_PASS`（邮箱密码或授权码），这是询盘通知发不出去的关键。

nano 编辑器操作：改完按 `Ctrl+O` → 回车保存 → `Ctrl+X` 退出。

---

## 六、构建并启动

```bash
bash deploy/deploy.sh
```

这一步 3-8 分钟（要编译 600 多篇文章 × 7 种语言）。最后看到 `站点正常，HTTP 200` 就成了。

此时用 IP 访问应该能看到站点：`http://服务器IP:3000/en`

---

## 七、配 Nginx + 上 SSL

```bash
cp deploy/nginx.conf /etc/nginx/sites-available/sites.conf
ln -sf /etc/nginx/sites-available/sites.conf /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

certbot --nginx -d hhseal.cn -d www.hhseal.cn
```

certbot 会问你邮箱（填你的）、同意条款（输 `A`）、是否跳转 HTTPS（输 `2` 强制跳转）。

跑完后 https://hhseal.cn 就通了，证书 90 天自动续期，不用管。

---

## 八、验证

浏览器打开：

- https://hhseal.cn/en
- https://hhseal.cn/zh
- 随便点一个产品页
- 提交一次联系表单，看邮箱有没有收到

---

## 以后怎么更新站点

改完代码在本地 push 到 GitHub，然后服务器上跑一条：

```bash
cd /var/www/hhseal && bash deploy/deploy.sh
```

---

## 九、2026-11-24 性能与 502 修复（现有服务器照做）

> 症状：产品页图片裂开、CSS/JS 随机 502、首字节 1.8 秒、20 并发最慢 31 秒。
> 根因：单台机器跑全部请求 + `/_next/image` 现场转码 + 只有 HTTP/1.1。

### 0. 先备份，出问题可回滚

```bash
sudo grep -rl 'server_name hhseal.cn' /etc/nginx/sites-enabled/ /etc/nginx/conf.d/
# 假设输出是 /etc/nginx/sites-enabled/sites.conf
sudo cp /etc/nginx/sites-available/sites.conf /etc/nginx/sites-available/sites.conf.bak-$(date +%F)
```

回滚：`sudo cp /etc/nginx/sites-available/sites.conf.bak-YYYY-MM-DD /etc/nginx/sites-available/sites.conf && sudo nginx -t && sudo systemctl reload nginx`

### 1. 先把当前状态存下来（把输出发我）

```bash
pm2 status
pm2 logs hhseal --lines 100 --err
pm2 describe hhseal | grep -E 'restarts|uptime|memory'
free -h
sudo tail -50 /var/log/nginx/error.log
```

### 2. 更新代码并重新构建（关闭按需图片转码）

本地 push 后，服务器上：

```bash
cd /var/www/hhseal && bash deploy/deploy.sh
```

`next.config.ts` 已加 `images.unoptimized: true`：`public/` 下 279 张图本来就是 WebP（最大 364KB），
由 Nginx 直接读盘返回，不再走 `/_next/image` 现场转码。这是消除图片 502 的关键一步。

### 3. 改 Nginx（三个改动，缺一不可）

```bash
sudo mkdir -p /var/cache/nginx/hhseal_html
sudo chown -R www-data:www-data /var/cache/nginx/hhseal_html
sudo nano /etc/nginx/sites-available/sites.conf
```

**3a.** 在所有 `server {` 块之前的最顶层，加这一行（`proxy_cache_path` 只能放在 http 层）：

```nginx
proxy_cache_path /var/cache/nginx/hhseal_html levels=1:2 keys_zone=hhseal_html:20m
                 max_size=256m inactive=30m use_temp_path=off;
```

**3b.** 找到 `server_name hhseal.cn ...;` 的那个 **443** server 块，把 `listen 443 ssl;` 改成（nginx 1.24 不支持 `http2 on;`）：

```nginx
    listen 443 ssl http2;
```

**3c.** 同一个 443 块里，把原有的 `location /_next/static/`、`location /images/`、`location /`
三段**整段删掉**，换成下面整段（`/admin` 和 `/api` 不能缓存，`/` 的 307 语言跳转也不能缓存）：

```nginx
    location /_next/static/ {
        alias /var/www/hhseal/.next/standalone/.next/static/;
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
        try_files $uri =404;
    }

    location /images/ {
        alias /var/www/hhseal/.next/standalone/public/images/;
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
        access_log off;
        try_files $uri =404;
    }

    location = / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_no_cache 1;
        proxy_cache_bypass 1;
    }

    location ^~ /admin {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_no_cache 1;
        proxy_cache_bypass 1;
    }

    location ^~ /api {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_no_cache 1;
        proxy_cache_bypass 1;
    }

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_connect_timeout 10s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;

        proxy_cache hhseal_html;
        proxy_cache_valid 200 5m;
        proxy_cache_key "$scheme$host$request_uri$http_accept_encoding";
        proxy_ignore_headers Set-Cookie;
        add_header X-Page-Cache $upstream_cache_status always;
    }
```

> 只改 hhseal.cn 的 server 块；如果 xfastener.cn 也在同一台机器，不要碰它的 server 块。

保存后：`sudo nginx -t && sudo systemctl reload nginx`

### 4. 给 Node 进程加内存上限（一次性）

```bash
pm2 delete hhseal
PORT=3000 HOSTNAME=127.0.0.1 pm2 start /var/www/hhseal/.next/standalone/server.js \
  --name hhseal --update-env --max-memory-restart 700M
pm2 save
```

`deploy.sh` 里也已加上这个参数，以后重新部署不会丢。重启有 1–2 秒空窗，正常。

### 5. 验证

```bash
curl -sI https://hhseal.cn/en/products | grep -iE 'HTTP/|x-page-cache|cache-control'
curl -sI https://hhseal.cn/en/products | grep -iE 'x-page-cache'   # 第二次应变成 HIT
curl -sI https://hhseal.cn/images/products/catalog/bia.webp | grep -iE 'HTTP/|cache-control'
curl -sI https://hhseal.cn/_next/static/chunks/0-5foo8qn-pme.css | grep -iE 'HTTP/|cache-control'
openssl s_client -connect hhseal.cn:443 -servername hhseal.cn -alpn h2 </dev/null 2>/dev/null | grep 'ALPN protocol'
```

期望：`HTTP/2 200`；静态资源 `Cache-Control: ... immutable`；第二次页面 `X-Page-Cache: HIT`；
ALPN 显示 `h2`。再用浏览器打开产品页确认图片不再裂。

---

## 常用命令

```bash
pm2 status                    # 看进程状态
pm2 logs hhseal --lines 50    # 看日志
pm2 restart hhseal            # 重启
systemctl reload nginx        # 重载 Nginx
df -h                         # 看磁盘
free -h                       # 看内存
```

---

## 数据备份（重要）

询盘数据和访问记录存在：

```
/var/www/hhseal/data/huahao.db
```

建议每周拷一份到本地：

```bash
# 在服务器上打包
tar -czf /root/backup-$(date +%F).tar.gz /var/www/hhseal/data
```

然后从服务器下载到电脑保存。这个文件丢了，所有询盘记录就没了。

---

## 常见问题

**Q：构建时报 `Killed` 或 `out of memory`**
内存不够。检查 swap 是否启用：`free -h` 应该看到 Swap 有 2.0Gi。没启用就重跑 `bash deploy/setup.sh`。

**Q：站点打不开，502 Bad Gateway**
应用没起来。跑 `pm2 logs hhseal --lines 50` 看报错，多半是 `.env.production` 少填了必填项。

**Q：https 打不开但 http 能开**
certbot 没跑成功，重跑：`certbot --nginx -d hhseal.cn -d www.hhseal.cn`

**Q：表单提交了但没收到邮件**
`.env.production` 里的 `SMTP_PASS` 不对。阿里云企业邮箱需要在邮箱设置里单独生成「客户端授权码」，不是登录密码。

**Q：内存一直涨**
Next.js 长时间运行会占内存，正常。超过 80% 可以 `pm2 restart hhseal` 释放。长期方案是加内存或配 PM2 定时重启。
