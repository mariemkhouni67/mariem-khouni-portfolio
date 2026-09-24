import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ThreeHeroSceneProps {
  isDarkMode?: boolean
}

export const ThreeHeroScene: React.FC<ThreeHeroSceneProps> = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 17

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    container.appendChild(renderer.domElement)

    // Palette: Soft pinks, rose, and iridescent accents
    const primaryPink = new THREE.Color(0xec4899)
    const secondaryPink = new THREE.Color(0xf472b6)
    const lightPink = new THREE.Color(0xfbcfe8)
    const accentRose = new THREE.Color(0xdb2777)

    const masterGroup = new THREE.Group()
    scene.add(masterGroup)

    // 1. Central Core: Soft Translucent Wireframe Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(2.2, 2)
    const coreMat = new THREE.MeshStandardMaterial({
      color: primaryPink,
      roughness: 0.1,
      metalness: 0.3,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    masterGroup.add(coreMesh)

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(1.1, 24, 24)
    const innerMat = new THREE.MeshBasicMaterial({
      color: lightPink,
      transparent: true,
      opacity: 0.35,
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    masterGroup.add(innerMesh)

    // 2. Orbital Torus Rings
    const ringGeo1 = new THREE.TorusGeometry(3.8, 0.025, 16, 100)
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: secondaryPink,
      transparent: true,
      opacity: 0.4,
    })
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1)
    ring1.rotation.x = Math.PI / 3
    masterGroup.add(ring1)

    const ringGeo2 = new THREE.TorusGeometry(5.2, 0.02, 16, 100)
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: primaryPink,
      transparent: true,
      opacity: 0.3,
    })
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2)
    ring2.rotation.y = Math.PI / 4
    ring2.rotation.x = -Math.PI / 6
    masterGroup.add(ring2)

    // 3. Orbiting Geometric Satellites
    const satellites: {
      mesh: THREE.Mesh
      angle: number
      speed: number
      radius: number
    }[] = []

    const satGeometries = [
      new THREE.OctahedronGeometry(0.38, 0),
      new THREE.TetrahedronGeometry(0.42, 0),
      new THREE.DodecahedronGeometry(0.35, 0),
      new THREE.IcosahedronGeometry(0.36, 0),
    ]

    for (let i = 0; i < 5; i++) {
      const satGeo = satGeometries[i % satGeometries.length]
      const satMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? secondaryPink : accentRose,
        roughness: 0.2,
        metalness: 0.5,
        wireframe: i % 2 === 1,
        transparent: true,
        opacity: 0.6,
      })
      const satMesh = new THREE.Mesh(satGeo, satMat)
      const radius = 3.4 + (i % 3) * 1.3
      const angle = (i * Math.PI * 2) / 5

      satellites.push({
        mesh: satMesh,
        angle,
        speed: (0.25 + (i % 3) * 0.1) * 0.012,
        radius,
      })
      masterGroup.add(satMesh)
    }

    // 4. Soft Ambient Particles
    const particleCount = 70
    const particleGeo = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 26
      particlePositions[i + 1] = (Math.random() - 0.5) * 18
      particlePositions[i + 2] = (Math.random() - 0.5) * 12
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: secondaryPink,
      size: 0.1,
      transparent: true,
      opacity: 0.45,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    masterGroup.add(particles)

    // Lighting for light background
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(primaryPink, 2.5, 25)
    pointLight1.position.set(4, 4, 6)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(lightPink, 2.0, 25)
    pointLight2.position.set(-5, -3, 5)
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
      targetMouseX = x * 0.4
      targetMouseY = y * 0.4
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const handleResize = () => {
      if (!container) return
      const width = container.clientWidth
      const height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

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

    let animationFrameId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      if (!isVisible) return

      const delta = clock.getDelta()

      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      masterGroup.rotation.y = mouseX * 0.35
      masterGroup.rotation.x = -mouseY * 0.35

      if (!prefersReducedMotion) {
        coreMesh.rotation.x += delta * 0.18
        coreMesh.rotation.y += delta * 0.22
        innerMesh.rotation.y -= delta * 0.25

        ring1.rotation.z += delta * 0.12
        ring2.rotation.z -= delta * 0.1

        satellites.forEach((sat) => {
          sat.angle += sat.speed
          sat.mesh.position.x = Math.cos(sat.angle) * sat.radius
          sat.mesh.position.y = Math.sin(sat.angle) * sat.radius * 0.65
          sat.mesh.position.z = Math.sin(sat.angle * 1.4) * (sat.radius * 0.45)

          sat.mesh.rotation.x += delta * 0.6
          sat.mesh.rotation.y += delta * 0.5
        })

        particles.rotation.y += delta * 0.02
      }

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      observer.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }

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
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  )
}
