"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Shared mouse state between React and R3F contexts
let mouseX = 0
let mouseY = 0

function ParticleField() {
  const group = useRef<THREE.Group>(null!)
  const count = 500

  const { positions, colors } = useMemo(() => {
    const p = new Float32Array(count * 3)
    const c = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const t = i / count
      const r = 2 + t * 6                         // 2–8 radius
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      p[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      p[i * 3 + 1] = r * Math.cos(phi) * 0.35     // flatten vertically
      p[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)

      // Warm bronze / gold tones
      const b = 0.25 + Math.random() * 0.5
      const isAccent = Math.random() < 0.15
      c[i * 3]     = isAccent ? b + 0.2 : b * 0.9
      c[i * 3 + 1] = isAccent ? b * 0.55 : b * 0.5
      c[i * 3 + 2] = isAccent ? b * 0.2 : b * 0.25
    }

    return { positions: p, colors: c }
  }, [])

  useFrame((state, delta) => {
    if (!group.current) return

    // Smooth mouse-follow rotation
    const tx = mouseY * 0.3
    const ty = mouseX * 0.3
    group.current.rotation.x += (tx - group.current.rotation.x) * 0.015
    group.current.rotation.y += (ty - group.current.rotation.y) * 0.015
    group.current.rotation.z += delta * 0.008
  })

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute args={[positions, 3]} attach="attributes-position" />
          <bufferAttribute args={[colors, 3]} attach="attributes-color" />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          vertexColors
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
    </group>
  )
}

function GlowRings() {
  const ring = useRef<THREE.Mesh>(null!)
  const ring2 = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (ring.current) {
      ring.current.rotation.x += delta * 0.15
      ring.current.rotation.y += delta * 0.1
    }
    if (ring2.current) {
      ring2.current.rotation.x -= delta * 0.08
      ring2.current.rotation.z += delta * 0.12
    }
  })

  return (
    <>
      <mesh ref={ring} position={[0, 0, 0]}>
        <torusGeometry args={[2.8, 0.015, 16, 64]} />
        <meshBasicMaterial color="#bd7a2c" transparent opacity={0.15} />
      </mesh>
      <mesh ref={ring2} position={[0, 0, 0]} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[3.8, 0.01, 16, 64]} />
        <meshBasicMaterial color="#bd7a2c" transparent opacity={0.08} />
      </mesh>
    </>
  )
}

export default function HeroParticles() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handler = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }
    const resizeHandler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("mousemove", handler)
    window.addEventListener("resize", resizeHandler)
    return () => {
      window.removeEventListener("mousemove", handler)
      window.removeEventListener("resize", resizeHandler)
    }
  }, [])

  if (isMobile) return null

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <ParticleField />
        <GlowRings />
      </Canvas>
    </div>
  )
}
