import React, { useState, useEffect } from 'react'
import {
  ArrowDown,
  FileDown,
  FolderGit2,
  Mail,
  Send,
  MapPin,
  Calendar,
} from 'lucide-react'
import { PERSONAL_INFO, HERO_ROTATING_ROLES } from '../data/portfolio'
import { ThreeHeroScene } from './ThreeHeroScene'
import { LinkedInIcon, GitHubIcon } from './SocialIcons'
import { ProfilePhoto } from './ProfilePhoto'

interface HeroProps {
  isDarkMode?: boolean
  onOpenCV: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % HERO_ROTATING_ROLES.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FFF8FC] to-[#FFF1F7] bg-grid-pattern"
    >
      {/* 3D Subtle Three.js Crystalline Scene */}
      <ThreeHeroScene />

      {/* Soft Pink Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FCE7F3]/70 via-[#FBCFE8]/50 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-[#FCE7F3]/60 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[360px] h-[360px] bg-[#FFF1F7]/80 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-[#F3D6E5] text-xs font-medium text-[#52525B] mb-6 shadow-sm shadow-pink-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EC4899] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EC4899]"></span>
              </span>
              <span>
                Seeking Final-Year Internship (PFE) &bull;{' '}
                <strong className="text-[#DB2777]">Feb 2027</strong>
              </span>
            </div>

            {/* Main Title: Large Elegant Typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#18181B] mb-3 leading-[1.1]">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#DB2777]">
                Mariem Khouni
              </span>
            </h1>

            {/* Animated Rotating Role Line */}
            <div className="h-10 sm:h-12 flex items-center mb-4">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#DB2777] font-mono tracking-tight transition-all duration-500">
                {HERO_ROTATING_ROLES[currentRoleIndex]}
              </span>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#52525B] max-w-2xl mb-8 leading-relaxed font-normal">
              Building modern web applications and AI-powered experiences with a focus on scalable systems, RAG workflows, and interactive design.
            </p>

            {/* 3 Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm text-white bg-gradient-to-r from-[#EC4899] to-[#F472B6] hover:from-[#DB2777] hover:to-[#EC4899] shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/35 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>View My Projects</span>
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm text-[#DB2777] glass-panel border border-[#F3D6E5] hover:border-[#EC4899] hover:bg-[#FFF8FC] shadow-sm shadow-pink-500/5 transition-all duration-300 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#EC4899]" />
                <span>Let's Talk</span>
              </button>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm text-[#52525B] glass-panel border border-[#F3D6E5] hover:border-[#EC4899] hover:text-[#18181B] transition-all duration-300 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-[#EC4899]" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links & Location Quick Info */}
            <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-[#F3D6E5] w-full">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel border border-[#F3D6E5] text-[#52525B] hover:text-[#EC4899] hover:border-[#EC4899]/50 hover:scale-110 transition-all shadow-sm"
                  aria-label="Mariem Khouni LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel border border-[#F3D6E5] text-[#52525B] hover:text-[#18181B] hover:border-[#EC4899]/50 hover:scale-110 transition-all shadow-sm"
                  aria-label="Mariem Khouni GitHub"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl glass-panel border border-[#F3D6E5] text-[#52525B] hover:text-[#DB2777] hover:border-[#EC4899]/50 hover:scale-110 transition-all shadow-sm"
                  aria-label="Email Mariem Khouni"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#52525B] font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#EC4899]" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="hidden sm:inline text-pink-300">&bull;</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#F472B6]" />
                  ISSAT 2024–2027
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Photo in Floating Glass Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <ProfilePhoto src={PERSONAL_INFO.profilePhotoPath} />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
        <a
          href="#about"
          className="p-2 rounded-full border border-[#F3D6E5] bg-white text-[#EC4899] shadow-sm hover:scale-110 transition-transform"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
