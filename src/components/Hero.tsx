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
  isDarkMode: boolean
  onOpenCV: () => void
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode, onOpenCV }) => {
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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grid-pattern"
    >
      {/* 3D Interactive Three.js Scene */}
      <ThreeHeroScene isDarkMode={isDarkMode} />

      {/* Ambient background glow gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#6366F1]/15 via-[#8B5CF6]/10 to-[#06B6D4]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border border-[#6366F1]/30 text-xs font-medium text-slate-300 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-200">
                Seeking PFE Internship &bull;{' '}
                <span className="text-[#06B6D4] font-semibold">Feb 2027</span>
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3 leading-[1.1]">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#06B6D4]">
                Mariem Khouni
              </span>
            </h1>

            {/* Second line: Role with rotating animated text */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 mb-2 tracking-tight flex flex-wrap items-center gap-2">
              <span>Software Engineering Student &amp;</span>
              <span className="inline-block min-w-[220px] text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] font-mono transition-all duration-500">
                {HERO_ROTATING_ROLES[currentRoleIndex]}
              </span>
            </h2>

            {/* Third line: Tagline */}
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mb-8 leading-relaxed">
              Building modern web applications and AI-powered experiences.
            </p>

            {/* Three Main Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#6366F1] to-[#06B6D4] hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>View My Projects</span>
              </button>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass-panel border border-white/10 hover:border-[#6366F1]/50 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-[#06B6D4]" />
                <span>Download CV</span>
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 glass-panel border border-white/10 hover:border-[#06B6D4]/50 hover:text-[#06B6D4] hover:bg-white/5 transition-all duration-300 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Let's Talk</span>
              </button>
            </div>

            {/* Social Links & Location Quick Info */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 w-full">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel border border-white/10 text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/40 hover:scale-110 transition-all"
                  aria-label="Mariem Khouni LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel border border-white/10 text-slate-400 hover:text-white hover:border-white/40 hover:scale-110 transition-all"
                  aria-label="Mariem Khouni GitHub"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl glass-panel border border-white/10 text-slate-400 hover:text-[#6366F1] hover:border-[#6366F1]/40 hover:scale-110 transition-all"
                  aria-label="Email Mariem Khouni"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#06B6D4]" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="hidden sm:inline text-slate-600">&bull;</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#6366F1]" />
                  ISSAT 2024–2027
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Photo & Interactive Developer Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Premium Profile Photo with Orbiting Elements */}
            <div className="mb-6">
              <ProfilePhoto src={PERSONAL_INFO.profilePhotoPath} />
            </div>

            {/* Developer Console Badge Card */}
            <div className="w-full max-w-sm glass-panel rounded-2xl p-4 border border-white/10 shadow-xl backdrop-blur-xl font-mono text-xs">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="text-[10px] text-slate-400">mariem@issat: ~</span>
              </div>

              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">$ core.stack:</span>
                  <span className="text-[#06B6D4]">React &bull; Node &bull; TypeScript</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">$ ai.pipeline:</span>
                  <span className="text-[#8B5CF6]">DeepSeek &bull; RAG &bull; ChromaDB</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">$ pfe.target:</span>
                  <span className="text-emerald-400 font-semibold">Feb 2027 Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
        <a
          href="#about"
          className="p-1.5 rounded-full border border-white/20 text-slate-400 hover:text-white transition-colors"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
