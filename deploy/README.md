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
