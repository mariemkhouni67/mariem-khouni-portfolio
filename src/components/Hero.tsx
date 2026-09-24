import React from 'react'
import {
  ArrowDown,
  FileDown,
  FolderGit2,
  Mail,
  Sparkles,
  Cpu,
  Layers,
  Terminal,
  BrainCircuit,
  MapPin,
  Calendar,
} from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolio'
import { ThreeHeroScene } from './ThreeHeroScene'
import { LinkedInIcon, GitHubIcon } from './SocialIcons'

interface HeroProps {
  isDarkMode: boolean
  onOpenCV: () => void
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode, onOpenCV }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* 3D Interactive Three.js Scene */}
      <ThreeHeroScene isDarkMode={isDarkMode} />

      {/* Ambient background glow gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-[#6366F1]/15 to-[#06B6D4]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#06B6D4]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#06B6D4]">
                Mariem Khouni
              </span>
            </h1>

            {/* Second line */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 mb-3 tracking-tight">
              Software Engineering Student &amp; Full-Stack Developer
            </h2>

            {/* Third line */}
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mb-8 leading-relaxed">
              Building modern web applications and AI-powered experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#6366F1] to-[#06B6D4] hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>View My Projects</span>
              </button>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass-panel border border-white/10 hover:border-[#6366F1]/50 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-[#06B6D4]" />
                <span>Download CV</span>
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

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#06B6D4]" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="hidden sm:inline text-slate-600">&bull;</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#6366F1]" />
                  Graduation: {PERSONAL_INFO.graduationDate}
                </span>
              </div>
            </div>
          </div>

          {/* Right Floating Ecosystem Cards (Creative Developer Representation) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px]">
            {/* Center Floating Glass Hub */}
            <div className="w-full max-w-md glass-panel rounded-2xl p-6 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              {/* Top Bar of Dev Console */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-[#06B6D4]" />
                  <span>mariem@engineer: ~/workspace</span>
                </div>
              </div>

              {/* Developer Ecosystem Visuals */}
              <div className="space-y-3 font-mono text-xs">
                {/* System Node 1: Full-Stack */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-[#6366F1]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-[#6366F1]/20 text-[#818CF8]">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-200">Full-Stack Core</div>
                      <div className="text-[10px] text-slate-400">React &bull; Next.js &bull; Node.js</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Active
                  </span>
                </div>

                {/* System Node 2: AI & RAG */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-[#06B6D4]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-[#06B6D4]/20 text-[#06B6D4]">
                      <BrainCircuit className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-200">AI Intelligence</div>
                      <div className="text-[10px] text-slate-400">DeepSeek &bull; RAG &bull; ChromaDB</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#06B6D4] bg-[#06B6D4]/10 px-2 py-0.5 rounded">
                    BGE-M3
                  </span>
                </div>

                {/* System Node 3: Systems & Data */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-200">Data Architecture</div>
                      <div className="text-[10px] text-slate-400">MySQL &bull; MongoDB &bull; Docker</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>
              </div>

              {/* Code Snippet Micro Preview */}
              <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[11px] text-slate-400 flex items-center justify-between">
                <span className="text-slate-500">$ pfe.status()</span>
                <span className="text-[#06B6D4] font-semibold">&gt; Ready for Feb 2027</span>
              </div>
            </div>

            {/* Orbiting Badges Around Card */}
            <div className="hidden sm:flex absolute -top-4 -right-4 glass-panel border border-[#06B6D4]/40 px-3 py-1.5 rounded-xl shadow-lg items-center gap-1.5 text-xs text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>AI &amp; RAG Engineer</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-4 -left-4 glass-panel border border-[#6366F1]/40 px-3 py-1.5 rounded-xl shadow-lg items-center gap-1.5 text-xs text-white">
              <Layers className="w-3.5 h-3.5 text-[#6366F1]" />
              <span>Full-Stack Solutions</span>
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
