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

    // Engineering & AI Node points
    interface NodePoint {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      label?: string
      type: 'agent' | 'mcp' | 'db' | 'api' | 'llm' | 'code' | 'dot'
    }

    const nodeTypes: NodePoint['type'][] = [
      'agent',
      'mcp',
      'db',
      'api',
      'llm',
      'code',
      'dot',
    ]
    const codeSnippets = [
      'new Agent({ tools })',
      'chroma.query(bge_m3)',
      'pipeline.rag()',
      'mcp.connect()',
      'deepseek.r1()',
      '<React.Suspense />',
      'SELECT * FROM mysql',
      'docker-compose up',
    ]

    const points: NodePoint[] = []
    const totalNodes = Math.min(Math.floor(width / 35), 45)

    for (let i = 0; i < totalNodes; i++) {
      const type = nodeTypes[i % nodeTypes.length]
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: type === 'dot' ? 1.5 : 2.5,
        type,
        label:
          type === 'code'
            ? codeSnippets[i % codeSnippets.length]
            : undefined,
      })
    }

    // Mouse tracking for soft interactivity
    let mouseX = width / 2
    let mouseY = height / 2

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Connect nearby nodes with subtle lines
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i]

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.08
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        // Draw node
        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2)

        if (p1.type === 'agent' || p1.type === 'llm') {
          ctx.fillStyle = 'rgba(6, 182, 212, 0.4)'
        } else if (p1.type === 'mcp' || p1.type === 'api') {
          ctx.fillStyle = 'rgba(139, 92, 246, 0.35)'
        } else {
          ctx.fillStyle = 'rgba(99, 102, 241, 0.25)'
        }
        ctx.fill()

        // Render subtle code fragments
        if (p1.label) {
          ctx.font = '10px "JetBrains Mono", monospace'
          ctx.fillStyle = 'rgba(148, 163, 184, 0.16)'
          ctx.fillText(p1.label, p1.x + 8, p1.y + 3)
        }

        // Move points unless reduced motion
        if (!prefersReducedMotion) {
          p1.x += p1.vx
          p1.y += p1.vy

          // Soft mouse repulsion
          const mdx = p1.x - mouseX
          const mdy = p1.y - mouseY
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
          if (mdist < 100) {
            const force = (100 - mdist) / 100
            p1.x += (mdx / mdist) * force * 0.5
            p1.y += (mdy / mdist) * force * 0.5
          }

          if (p1.x < 0) p1.x = width
          if (p1.x > width) p1.x = 0
          if (p1.y < 0) p1.y = height
          if (p1.y > height) p1.y = 0
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
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  )
}
