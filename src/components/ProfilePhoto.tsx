import React, { useState } from 'react'
import { BrainCircuit, Code2 } from 'lucide-react'

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

  const handleImageError = () => {
    // If /images/profile.jpg doesn't exist, try /images/mariem.jpg then fallback to SVG placeholder
    if (imgSrc === '/images/profile.jpg') {
      setImgSrc('/images/mariem.jpg')
    } else {
      setImgSrc('/images/profile-placeholder.svg')
    }
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer ambient pulsing aura */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#6366F1]/30 via-[#8B5CF6]/20 to-[#06B6D4]/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Rotating conic gradient border ring */}
      <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] shadow-2xl shadow-indigo-500/20">
        {/* Glass container */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-[#050816] p-1.5 backdrop-blur-md">
          <img
            src={imgSrc}
            alt="Mariem Khouni - Software Engineering Student & Full-Stack Developer"
            onError={handleImageError}
            loading="lazy"
            className={`w-full h-full object-cover rounded-full transition-transform duration-700 ease-out ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />

          {/* Soft inner vignette overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Floating Orbital Badge 1: AI & RAG */}
      <div
        className={`absolute -top-3 -right-3 sm:-top-2 sm:-right-4 glass-panel border border-[#06B6D4]/40 px-3 py-1.5 rounded-full shadow-lg shadow-cyan-500/20 flex items-center gap-1.5 text-[11px] font-mono font-medium text-cyan-200 transition-all duration-300 ${
          isHovered ? 'translate-y-[-4px] scale-105' : ''
        }`}
      >
        <BrainCircuit className="w-3.5 h-3.5 text-[#06B6D4] animate-pulse" />
        <span>AI &amp; RAG</span>
      </div>

      {/* Floating Orbital Badge 2: Full-Stack React / TS */}
      <div
        className={`absolute -bottom-2 -left-3 sm:-bottom-3 sm:-left-4 glass-panel border border-[#6366F1]/40 px-3 py-1.5 rounded-full shadow-lg shadow-indigo-500/20 flex items-center gap-1.5 text-[11px] font-mono font-medium text-indigo-200 transition-all duration-300 ${
          isHovered ? 'translate-y-[4px] scale-105' : ''
        }`}
      >
        <Code2 className="w-3.5 h-3.5 text-[#818CF8]" />
        <span>React &bull; Node</span>
      </div>

      {/* Floating Orbital Badge 3: PFE Feb 2027 */}
      <div
        className={`absolute top-1/2 -left-6 -translate-y-1/2 hidden lg:flex glass-panel border border-emerald-500/30 px-2.5 py-1 rounded-full shadow-lg text-[10px] font-mono text-emerald-300 items-center gap-1.5 transition-all duration-300 ${
          isHovered ? 'scale-105' : ''
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>PFE 2027</span>
      </div>
    </div>
  )
}
