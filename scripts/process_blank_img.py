from PIL import Image
from rembg import remove

src = r"C:\Users\倪\AppData\Local\Temp\QQ_1788964190255.png"
dst = r"C:\Users\倪\Desktop\vibe codeing\客户\huahao-sealing\public\images\products\antimony-graphite-blank.png"

# 1. 读取
img = Image.open(src).convert("RGBA")

# 2. 逆时针旋转 90 度 (ROTATE_90 = counterclockwise)
img = img.transpose(Image.Transpose.ROTATE_90)

# 3. 抠图
cutout = remove(img)

# 4. 合成到白底
w, h = cutout.size
white_bg = Image.new("RGBA", (w, h), (255, 255, 255, 255))
white_bg.alpha_composite(cutout)
white_bg.convert("RGB").save(dst, "PNG")

print(f"saved: {dst}  size: {w}x{h}")
