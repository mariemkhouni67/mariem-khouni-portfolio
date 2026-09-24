import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ThreeHeroSceneProps {
  isDarkMode?: boolean
}

export const ThreeHeroScene: React.FC<ThreeHeroSceneProps> = ({ isDarkMode = true }) => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 18

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Palette
    const primaryColor = new THREE.Color(isDarkMode ? 0x6366f1 : 0x4f46e5)
    const secondaryColor = new THREE.Color(isDarkMode ? 0x06b6d4 : 0x0891b2)
    const tertiaryColor = new THREE.Color(isDarkMode ? 0x818cf8 : 0x3b82f6)

    // Master Group for mouse parallax
    const masterGroup = new THREE.Group()
    scene.add(masterGroup)

    // 1. Central Core: Inner Glowing Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(2.4, 2)
    const coreMat = new THREE.MeshStandardMaterial({
      color: primaryColor,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    masterGroup.add(coreMesh)

    // Inner solid core node
    const innerGeo = new THREE.SphereGeometry(1.2, 16, 16)
    const innerMat = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      wireframe: false,
      transparent: true,
      opacity: 0.4,
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    masterGroup.add(innerMesh)

    // 2. Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(4.2, 0.03, 16, 100)
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: 0.4,
    })
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1)
    ring1.rotation.x = Math.PI / 3
    masterGroup.add(ring1)

    const ringGeo2 = new THREE.TorusGeometry(5.6, 0.025, 16, 100)
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      transparent: true,
      opacity: 0.35,
    })
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2)
    ring2.rotation.y = Math.PI / 4
    ring2.rotation.x = -Math.PI / 6
    masterGroup.add(ring2)

    // 3. Orbiting Satellite Nodes (representing AI, Web, Systems)
    const satellites: {
      mesh: THREE.Mesh
      angle: number
      speed: number
      radius: number
      axis: THREE.Vector3
    }[] = []

    const satGeometries = [
      new THREE.OctahedronGeometry(0.45, 0),
      new THREE.TetrahedronGeometry(0.5, 0),
      new THREE.DodecahedronGeometry(0.4, 0),
      new THREE.IcosahedronGeometry(0.42, 0),
    ]

    for (let i = 0; i < 6; i++) {
      const satGeo = satGeometries[i % satGeometries.length]
      const satMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? secondaryColor : tertiaryColor,
        roughness: 0.3,
        metalness: 0.7,
        wireframe: i % 3 === 0,
      })
      const satMesh = new THREE.Mesh(satGeo, satMat)
      const radius = 3.6 + (i % 3) * 1.5
      const angle = (i * Math.PI) / 3

      satellites.push({
        mesh: satMesh,
        angle,
        speed: (0.3 + (i % 3) * 0.15) * 0.015,
        radius,
        axis: new THREE.Vector3(
          Math.sin(i * 1.2),
          Math.cos(i * 0.8),
          Math.sin(i * 0.5)
        ).normalize(),
      })
      masterGroup.add(satMesh)
    }

    // 4. Floating Ambient Particles (Constellation)
    const particleCount = 140
    const particleGeo = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleSizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 30
      particlePositions[i + 1] = (Math.random() - 0.5) * 20
      particlePositions[i + 2] = (Math.random() - 0.5) * 15
      particleSizes[i / 3] = Math.random() * 2 + 1
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: secondaryColor,
      size: 0.12,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    masterGroup.add(particles)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(primaryColor, 4, 30)
    pointLight1.position.set(5, 5, 8)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(secondaryColor, 3, 30)
    pointLight2.position.set(-6, -4, 6)
    scene.add(pointLight2)

    // Mouse Tracking for Parallax
    let targetMouseX = 0
    let targetMouseY = 0
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      targetMouseX = x * 0.6
      targetMouseY = y * 0.6
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Resize Handler
    const handleResize = () => {
      if (!container) return
      const width = container.clientWidth
      const height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Visibility Observer to pause loop when not on screen
    let isVisible = true
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting
        })
      },
      { threshold: 0.05 }
    )
    observer.observe(container)

    // Animation Loop
    let animationFrameId: number
    let clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      if (!isVisible) return

      const delta = clock.getDelta()
      const time = clock.getElapsedTime()

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      masterGroup.rotation.y = mouseX * 0.4
      masterGroup.rotation.x = -mouseY * 0.4

      if (!prefersReducedMotion) {
        // Core rotations
        coreMesh.rotation.x += delta * 0.2
        coreMesh.rotation.y += delta * 0.25
        innerMesh.rotation.y -= delta * 0.3

        // Ring rotations
        ring1.rotation.z += delta * 0.15
        ring2.rotation.z -= delta * 0.12

        // Satellites orbiting
        satellites.forEach((sat) => {
          sat.angle += sat.speed
          sat.mesh.position.x = Math.cos(sat.angle) * sat.radius
          sat.mesh.position.y = Math.sin(sat.angle) * sat.radius * 0.7
          sat.mesh.position.z = Math.sin(sat.angle * 1.5) * (sat.radius * 0.5)

          sat.mesh.rotation.x += delta * 0.8
          sat.mesh.rotation.y += delta * 0.6
        })

        // Particle subtle drift
        particles.rotation.y = time * 0.02
      }

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      observer.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }

      // Dispose resources
      coreGeo.dispose()
      coreMat.dispose()
      innerGeo.dispose()
      innerMat.dispose()
      ringGeo1.dispose()
      ringMat1.dispose()
      ringGeo2.dispose()
      ringMat2.dispose()
      satGeometries.forEach((g) => g.dispose())
      particleGeo.dispose()
      particleMat.dispose()
      renderer.dispose()
    }
  }, [isDarkMode])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
