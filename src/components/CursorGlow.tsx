import React, { useEffect, useState } from 'react'

export const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Disable on touch devices or reduced motion
    if (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsTouch(true)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (isTouch || !position) return null

  return (
    <div
      className="fixed pointer-events-none z-30 transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
      aria-hidden="true"
    >
      <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-[#6366F1]/10 via-[#06B6D4]/10 to-transparent blur-[80px]" />
    </div>
  )
}
