"use client"

import { useRef, useEffect } from "react"

interface Particle {
  x: number; y: number; z: number
  vx: number; vy: number
  size: number; alpha: number
}

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    let animId = 0
    let mouseX = 0
    let mouseY = 0
    let isMobile = window.innerWidth < 768
    let w = 0, h = 0

    const particleCount = isMobile ? 0 : 80
    const particles: Particle[] = []

    function resize() {
      w = canvas!.width = window.innerWidth
      h = canvas!.height = window.innerHeight
      isMobile = window.innerWidth < 768
    }

    function initParticles() {
      particles.length = 0
      const count = Math.min(particleCount, isMobile ? 0 : 80)
      for (let i = 0; i < count; i++) {
        const z = 0.5 + Math.random() * 4.5
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3 - 0.15,
          size: 0.6 + z * 0.4,
          alpha: 0.2 + z * 0.08,
        })
      }
    }

    function draw() {
      if (isMobile) { animId = requestAnimationFrame(draw); return }
      ctx.clearRect(0, 0, w, h)

      // Gentle mouse influence
      const mx = mouseX * 0.15
      const my = mouseY * 0.15

      for (const p of particles) {
        p.x += p.vx + mx * 0.005
        p.y += p.vy + my * 0.005

        // Wrap around edges
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(189,122,44,${p.alpha})`
        ctx.fill()
      }

      // Rotating ring indicators (decorative arcs)
      const cx = w / 2, cy = h / 2 + 40
      const t = Date.now() / 1000
      ctx.strokeStyle = "rgba(189,122,44,0.06)"
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.arc(cx, cy, 320, t * 0.08, t * 0.08 + 1.2)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(cx, cy, 260, t * 0.12 + 0.5, t * 0.12 + 1.7)
      ctx.stroke()

      animId = requestAnimationFrame(draw)
    }

    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / w) * 2 - 1
      mouseY = -(e.clientY / h) * 2 + 1
    }
    const onResize = () => { resize(); initParticles() }

    resize()
    initParticles()
    window.addEventListener("mousemove", onMouse, { passive: true })
    window.addEventListener("resize", onResize, { passive: true })
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("mousemove", onMouse)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}
