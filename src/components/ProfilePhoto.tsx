import React, { useState } from 'react'
import {
  Code2,
  BrainCircuit,
  Database,
  Network,
  Layers,
} from 'lucide-react'

interface ProfilePhotoProps {
  className?: string
  src?: string
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  className = '',
  src = '/images/profile.jpg',
}) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [isHovered, setIsHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleImageError = () => {
    if (imgSrc === '/images/profile.jpg') {
      setImgSrc('/images/mariem.jpg')
    } else {
      setImgSrc('/images/profile-placeholder.svg')
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16
    setTilt({ x, y })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
    >
      {/* Pink Gradient Halo & Ambient Glow */}
      <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#EC4899]/35 via-[#F472B6]/25 to-[#FBCFE8]/40 blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Floating Glass Panel Container */}
      <div className="relative p-3.5 sm:p-4 rounded-full glass-panel shadow-2xl shadow-pink-500/15 border border-[#F3D6E5] bg-white/70 backdrop-blur-xl">
        {/* Animated Gradient Halo Border Ring */}
        <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#EC4899] via-[#F472B6] to-[#FBCFE8] shadow-md shadow-pink-500/20">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden bg-white p-1">
            <img
              src={imgSrc}
              alt="Mariem Khouni - Software Engineering Student & Full-Stack Developer"
              onError={handleImageError}
              loading="lazy"
              className={`w-full h-full object-cover rounded-full transition-transform duration-700 ease-out ${
                isHovered ? 'scale-106' : 'scale-100'
              }`}
            />
            {/* Subtle light vignette overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-pink-900/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* FLOATING TECHNOLOGY BADGES (Layered digital ecosystem around the photo) */}

      {/* Badge 1: React (Top Right, gentle horizontal float) */}
      <div
        className="absolute -top-3 right-0 sm:-top-4 sm:right-2 glass-panel border border-[#F3D6E5] px-3 py-1.5 rounded-full shadow-lg shadow-pink-500/10 flex items-center gap-1.5 text-xs font-mono font-semibold text-[#18181B] bg-white/90 animate-bounce"
        style={{ animationDuration: '4s' }}
      >
        <span className="w-2 h-2 rounded-full bg-[#EC4899]" />
        <span>React</span>
      </div>

      {/* Badge 2: AI & RAG (Top Left, vertical float) */}
      <div
        className="absolute top-2 -left-6 sm:top-4 sm:-left-8 glass-panel border border-[#F472B6]/40 px-3.5 py-1.5 rounded-full shadow-lg shadow-pink-500/15 flex items-center gap-1.5 text-xs font-mono font-bold text-[#DB2777] bg-white/95"
        style={{ transform: `translateY(${isHovered ? -4 : 0}px)`, transition: 'transform 0.3s' }}
      >
        <BrainCircuit className="w-3.5 h-3.5 text-[#EC4899] animate-pulse" />
        <span>AI &bull; RAG</span>
      </div>

      {/* Badge 3: TypeScript (Mid Right) */}
      <div className="absolute top-28 -right-6 sm:top-32 sm:-right-8 glass-panel border border-[#F3D6E5] px-3 py-1 rounded-full shadow-md text-[11px] font-mono font-medium text-[#52525B] bg-white/90 hidden sm:flex items-center gap-1.5">
        <Code2 className="w-3.5 h-3.5 text-[#EC4899]" />
        <span>TypeScript</span>
      </div>

      {/* Badge 4: Node.js (Bottom Right) */}
      <div
        className="absolute -bottom-2 right-4 sm:-bottom-3 sm:right-6 glass-panel border border-[#F3D6E5] px-3.5 py-1.5 rounded-full shadow-lg shadow-pink-500/10 flex items-center gap-1.5 text-xs font-mono font-semibold text-[#18181B] bg-white/90 animate-pulse"
        style={{ animationDuration: '3.5s' }}
      >
        <Layers className="w-3.5 h-3.5 text-[#F472B6]" />
        <span>Node.js</span>
      </div>

      {/* Badge 5: MCP & Tools (Bottom Left) */}
      <div
        className="absolute -bottom-3 -left-4 sm:-bottom-4 sm:-left-6 glass-panel border border-[#EC4899]/30 px-3.5 py-1.5 rounded-full shadow-lg shadow-pink-500/15 flex items-center gap-1.5 text-xs font-mono font-bold text-[#EC4899] bg-white/95"
      >
        <Network className="w-3.5 h-3.5 text-[#DB2777]" />
        <span>MCP &bull; Tools</span>
      </div>

      {/* Badge 6: Database & Cloud (Mid Left) */}
      <div className="absolute bottom-24 -left-8 sm:bottom-28 sm:-left-10 glass-panel border border-[#F3D6E5] px-2.5 py-1 rounded-full shadow-md text-[10px] font-mono text-[#52525B] bg-white/85 hidden sm:flex items-center gap-1">
        <Database className="w-3 h-3 text-[#F472B6]" />
        <span>DB &bull; Cloud</span>
      </div>

      {/* Active Availability Beacon (PFE 2027) */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 glass-panel border border-pink-300 px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#DB2777] bg-white">
        <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-ping" />
        <span>PFE Feb 2027</span>
      </div>
    </div>
  )
}
