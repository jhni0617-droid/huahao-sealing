"""用 ego 浏览器(CDP 9333)静默操作 GSC 网址检查，不抢鼠标。

原理：ego 开 --remote-debugging-port=9333，Playwright 通过 CDP 接管页面，
直接读写 DOM，全程不模拟鼠标键盘 —— 用户前台可正常操作，ego 窗口保持最小化。

关键(来自视频项目 memory 2026-11-16)：
1. 必须显式 --user-data-dir，否则参数被 ego 启动器吞掉、端口不起
2. 启动前 taskkill 清干净，否则单例转交参数给已有实例
3. ego 是脚本子进程，脚本一退出就没了 —— 启动+操作必须同一脚本内

用法：
  python deploy/gsc_submit.py            # 默认重点 URL 列表
  python deploy/gsc_submit.py <url> ...  # 自定义 URL
"""
import sys, os, time, subprocess, urllib.request
from playwright.sync_api import sync_playwright

if os.environ.get("GSC_BROWSER") == "realchrome":
    # 用户真实 Chrome 配置：网络/登录态与平时一致，需先关闭所有 Chrome 窗口
    EGO = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    UD = r"C:\Users\倪\AppData\Local\Google\Chrome\User Data"
    CDP = "http://127.0.0.1:9336"
elif os.environ.get("GSC_BROWSER") == "chrome":
    # ego 无窗口时用本机 Chrome + 独立持久 profile（只用于 GSC）
    EGO = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    UD = r"C:\Users\倪\AppData\Local\Temp\gsc-real-profile"
    CDP = "http://127.0.0.1:9334"
else:
    EGO = r"C:\Program Files\Citro Labs\ego lite\Application\ego.exe"
    UD = r"C:\Users\倪\AppData\Local\Citro Labs\ego lite\User Data"
    CDP = "http://127.0.0.1:9333"
CDP_PORT = CDP.rsplit(":", 1)[1]
GSC = "https://search.google.com/search-console?resource_id=sc-domain%3Ahhseal.cn"
SEARCH_ARIA = "检查 hhseal.cn 中的任何网址"

DEFAULT_URLS = [
    "https://hhseal.cn/en",
    "https://hhseal.cn/zh",
    "https://hhseal.cn/en/products",
    "https://hhseal.cn/en/contact",
    "https://hhseal.cn/en/products/bia-series",
    "https://hhseal.cn/en/products/2100-series",
    "https://hhseal.cn/en/products/g6-series",
    "https://hhseal.cn/en/blog/antimony-impregnated-graphite-m106d",
]


def cdp_ready(sec=40):
    for _ in range(sec):
        try:
            urllib.request.urlopen(CDP + "/json/version", timeout=2)
            return True
        except Exception:
            time.sleep(1)
    return False


def start_ego():
    if EGO.endswith("chrome.exe"):
        # 不动用户正在用的 Chrome，独立 profile 会另开窗口
        if cdp_ready(2):
            return
    else:
        subprocess.run(["taskkill", "/F", "/IM", "ego.exe"],
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        time.sleep(2)
    args = [
        EGO, f"--remote-debugging-port={CDP_PORT}", "--remote-allow-origins=*",
        f"--user-data-dir={UD}", "--no-first-run", "--no-default-browser-check",
    ]
    if EGO.endswith("chrome.exe"):
        args += ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"]
        if os.environ.get("GSC_BROWSER") != "realchrome":
            args.append(f"--proxy-server={os.environ.get('GSC_PROXY', 'http://127.0.0.1:7890')}")
    args.append(GSC)
    subprocess.Popen(args, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    if not cdp_ready():
        raise RuntimeError(f"浏览器 CDP {CDP_PORT} 未就绪")


def get_page(browser):
    ctx = browser.contexts[0]
    for pg in ctx.pages:
        if "search.google.com/search-console" in pg.url:
            return pg
    pg = ctx.new_page()
    pg.goto(GSC, wait_until="domcontentloaded", timeout=90000)
    return pg


def show_ego(page):
    try:
        s = page.context.new_cdp_session(page)
        w = s.send("Browser.getWindowForTarget")
        s.send("Browser.setWindowBounds", {
            "windowId": w["windowId"],
            "bounds": {"windowState": "normal", "left": 80, "top": 80,
                       "width": 1280, "height": 860},
        })
        page.bring_to_front()
    except Exception as e:
        print("show warn:", str(e)[:80], flush=True)


def minimize_ego(page):
    try:
        s = page.context.new_cdp_session(page)
        w = s.send("Browser.getWindowForTarget")
        s.send("Browser.setWindowBounds", {"windowId": w["windowId"],
                                            "bounds": {"windowState": "minimized"}})
    except Exception as e:
        print("minimize warn:", str(e)[:80], flush=True)


def inspect_and_request(page, url):
    """检查单个 URL，若可请求则点『请求编入索引』。返回结果文字"""
    # 回到概述页(有搜索框)
    if "search-console/inspect" in page.url or "search-console/url" in page.url:
        page.goto(GSC, wait_until="domcontentloaded", timeout=90000)
        page.wait_for_timeout(2000)

    box = page.locator(f'input[aria-label="{SEARCH_ARIA}"]')
    if box.count() == 0:
        # 可能页面结构不同，尝试 combobox
        box = page.locator('input[role="combobox"]').first
    box.first.fill(url, timeout=15000)
    page.wait_for_timeout(400)
    box.first.press("Enter")
    page.wait_for_timeout(6000)

    body = page.evaluate("() => document.body.innerText")
    # 判断是否已在索引中
    if "已在 Google 编入索引" in body or "网址已编入索引" in body:
        return "ALREADY_INDEXED"

    # 找"请求编入索引"按钮
    req = page.get_by_text("请求编入索引", exact=True)
    if req.count() == 0:
        # 模糊找
        req = page.get_by_text("请求编入索引")
    if req.count() == 0:
        snippet = body[:300].replace("\n", " | ")
        return "NO_BUTTON: " + snippet

    req.first.click()
    page.wait_for_timeout(3000)
    # 实时测试通常 1-2 分钟，等到出现"已请求编入索引"或超时
    for _ in range(45):  # 最多 ~90s
        page.wait_for_timeout(2000)
        b = page.evaluate("() => document.body.innerText")
        if "已请求编入索引" in b or "已添加到优先抓取" in b:
            return "REQUESTED_OK"
        if "无法编入索引" in b or "无法建立索引" in b:
            return "TEST_FAILED"
    return "TIMEOUT_WAITING"


def main():
    wait_login = "--wait-login" in sys.argv
    urls = [u for u in sys.argv[1:] if not u.startswith("--")] or DEFAULT_URLS
    start_ego()
    results = []
    with sync_playwright() as pw:
        browser = pw.chromium.connect_over_cdp(CDP, timeout=120000)
        page = get_page(browser)
        page.wait_for_timeout(4000)
        if wait_login:
            # 登录态丢失时：窗口保持可见，等用户在 ego 里登录 GSC
            show_ego(page)
            print("WAIT_LOGIN: 请在弹出的 ego 浏览器中登录 Google Search Console", flush=True)
            for _ in range(180):
                # 未登录时 GSC 会落到 about 落地页，点「前往 Google Search Console」进登录流
                go = page.get_by_text("前往 Google Search Console", exact=True)
                if go.count() > 0:
                    try:
                        go.first.click(timeout=3000)
                        page.wait_for_timeout(2000)
                    except Exception:
                        pass
                has_box = (page.locator(f'input[aria-label="{SEARCH_ARIA}"]').count() > 0
                           or page.locator('input[role="combobox"]').count() > 0)
                if has_box:
                    print("LOGIN_OK", flush=True)
                    break
                page.wait_for_timeout(2000)
            else:
                raise RuntimeError("等待 GSC 登录超时（6 分钟）")
        minimize_ego(page)
        for i, url in enumerate(urls):
            try:
                r = inspect_and_request(page, url)
                results.append((url, r))
                print(f"[{i+1}/{len(urls)}] {r:20s} {url}", flush=True)
            except Exception as e:
                results.append((url, "ERROR"))
                print(f"[{i+1}/{len(urls)}] ERROR: {str(e)[:100]} {url}", flush=True)
    print("\n=== 汇总 ===", flush=True)
    for url, r in results:
        print(f"  {r:20s} {url}", flush=True)


if __name__ == "__main__":
    main()
