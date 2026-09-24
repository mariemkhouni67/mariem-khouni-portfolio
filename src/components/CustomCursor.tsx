import React, { useEffect, useState } from 'react'

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
  const [cursorText, setCursorText] = useState('')
  const [isHovering, setIsHovering] = useState(false)
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

      // Check target element attributes
      const target = e.target as HTMLElement | null
      if (!target) return

      const projectEl = target.closest('[data-cursor="project"]')
      const videoEl = target.closest('[data-cursor="video"]')
      const buttonEl = target.closest('button, a, input, textarea, [role="button"]')

      if (projectEl) {
        setCursorText('VIEW')
        setIsHovering(true)
      } else if (videoEl) {
        setCursorText('PLAY')
        setIsHovering(true)
      } else if (buttonEl) {
        setCursorText('')
        setIsHovering(true)
      } else {
        setCursorText('')
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (isTouch || !position) return null

  return (
    <>
      {/* Outer soft pink glow */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      >
        <div
          className={`rounded-full bg-[#EC4899]/15 blur-xl transition-all duration-300 ${
            isHovering ? 'w-24 h-24' : 'w-14 h-14'
          }`}
        />
      </div>

      {/* Main Cursor Core */}
      <div
        className="fixed pointer-events-none z-50 flex items-center justify-center transition-all duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      >
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-200 ${
            cursorText
              ? 'w-14 h-14 bg-[#EC4899] text-white text-[10px] font-mono font-bold tracking-wider shadow-lg shadow-pink-500/40 scale-110'
              : isHovering
              ? 'w-8 h-8 bg-[#EC4899]/25 border-2 border-[#EC4899] scale-110 shadow-md shadow-pink-500/20'
              : 'w-3 h-3 bg-[#EC4899] shadow-sm'
          }`}
        >
          {cursorText}
        </div>
      </div>
    </>
  )
}
