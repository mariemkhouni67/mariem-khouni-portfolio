import React, { useEffect, useRef } from 'react'

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // AI Network Nodes and Background Particles
    interface NetworkNode {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      label?: string
      isSpecial?: boolean
    }

    const specialLabels = [
      'USER',
      'AI AGENT',
      'TOOLS',
      'MCP',
      'RAG',
      'DATABASE',
      'AI MODEL',
      'API',
      'REACT',
      'NODE.JS',
    ]

    const nodes: NetworkNode[] = []
    const totalNodes = Math.min(Math.floor(width / 40), 38)

    for (let i = 0; i < totalNodes; i++) {
      const isSpecial = i < specialLabels.length
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: isSpecial ? 3.5 : 2,
        label: isSpecial ? specialLabels[i] : undefined,
        isSpecial,
      })
    }

    let mouseX = width / 2
    let mouseY = height / 2

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Connect nearby nodes with delicate pink lines
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i]

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]
          const dx = n1.x - n2.x
          const dy = n1.y - n2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.14
            ctx.beginPath()
            ctx.moveTo(n1.x, n1.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.strokeStyle = `rgba(236, 72, 153, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        // Draw node dot
        ctx.beginPath()
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2)
        ctx.fillStyle = n1.isSpecial ? 'rgba(236, 72, 153, 0.45)' : 'rgba(244, 114, 182, 0.25)'
        ctx.fill()

        // Render soft tech label if present
        if (n1.label) {
          ctx.font = '9px "JetBrains Mono", monospace'
          ctx.fillStyle = 'rgba(219, 39, 119, 0.3)'
          ctx.fillText(n1.label, n1.x + 7, n1.y + 3)
        }

        // Move points unless user prefers reduced motion
        if (!prefersReducedMotion) {
          n1.x += n1.vx
          n1.y += n1.vy

          // Delicate mouse reaction
          const mdx = n1.x - mouseX
          const mdy = n1.y - mouseY
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
          if (mdist < 120) {
            const force = (120 - mdist) / 120
            n1.x += (mdx / mdist) * force * 0.4
            n1.y += (mdy / mdist) * force * 0.4
          }

          if (n1.x < 0) n1.x = width
          if (n1.x > width) n1.x = 0
          if (n1.y < 0) n1.y = height
          if (n1.y > height) n1.y = 0
        }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background Soft Pink Ambient Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FFF1F7] via-[#FCE7F3]/60 to-transparent blur-[120px]" />
      <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#FCE7F3]/70 via-[#FFF1F7] to-transparent blur-[140px]" />
      <div className="absolute -bottom-32 left-1/3 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#FFF8FC] via-[#FCE7F3]/40 to-transparent blur-[130px]" />

      <canvas ref={canvasRef} className="w-full h-full opacity-80" />
    </div>
  )
}
