import React from 'react'
import {
  Code2,
  Cpu,
  BrainCircuit,
  Layout,
  GraduationCap,
  MapPin,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolio'

export const About: React.FC = () => {
  const badgeIcons = [
    <Code2 className="w-5 h-5 text-[#EC4899]" />,
    <Layout className="w-5 h-5 text-[#F472B6]" />,
    <BrainCircuit className="w-5 h-5 text-[#DB2777]" />,
    <Cpu className="w-5 h-5 text-[#EC4899]" />,
  ]

  const floatingTags = [
    { name: 'React', delay: '0s', pos: 'top-2 left-4' },
    { name: 'Node.js', delay: '0.4s', pos: 'top-6 right-6' },
    { name: 'AI', delay: '0.8s', pos: 'bottom-8 left-6' },
    { name: 'RAG', delay: '1.2s', pos: 'bottom-2 right-12' },
    { name: 'MCP', delay: '1.6s', pos: 'top-1/2 -left-2' },
    { name: 'TypeScript', delay: '2s', pos: 'top-1/2 -right-2' },
  ]

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-gradient-to-b from-white via-[#FFF8FC] to-white">
      {/* Ambient soft pink glow orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#FBCFE8]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#FCE7F3]/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pill Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F3D6E5] shadow-sm text-xs font-mono font-medium text-[#EC4899]">
            <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>ABOUT MARIEM</span>
          </div>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Large Editorial Typography & Floating Domain Tags */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#18181B] tracking-tight leading-[1.1] mb-8">
                Turning ideas into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#DB2777]">
                  digital experiences.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#52525B] leading-relaxed mb-10 font-normal">
                Passionate about bridging full-stack web engineering with autonomous AI capabilities to solve real-world problems through clean, robust code.
              </p>
            </div>

            {/* Interactive Domain Pill Cloud with Floating Animation */}
            <div className="relative p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-[#F3D6E5] shadow-lg shadow-pink-500/5 min-h-[200px] flex flex-wrap items-center justify-center gap-3">
              <span className="absolute top-3 left-4 text-[10px] font-mono text-[#EC4899] uppercase tracking-wider font-semibold">
                Core Domains
              </span>

              {floatingTags.map((tag) => (
                <div
                  key={tag.name}
                  style={{ animationDelay: tag.delay }}
                  className="px-4 py-2 rounded-full bg-white border border-[#F3D6E5] text-[#18181B] font-mono text-xs sm:text-sm font-semibold shadow-sm hover:border-[#EC4899] hover:text-[#EC4899] hover:shadow-md hover:shadow-pink-500/10 hover:-translate-y-0.5 transition-all duration-200 cursor-default animate-float"
                  data-cursor="interactive"
                >
                  <span className="text-[#EC4899] mr-1.5">#</span>
                  {tag.name}
                </div>
              ))}
            </div>

            {/* Factual Availability Card */}
            <div className="mt-8 p-5 rounded-2xl bg-[#FFF1F7] border border-[#FBCFE8] flex items-center gap-3.5 shadow-sm">
              <div className="p-2.5 rounded-xl bg-white text-[#EC4899] shadow-sm shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#EC4899]" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#DB2777] font-bold block">
                  Target Opportunity
                </span>
                <span className="text-sm font-semibold text-[#18181B]">
                  {PERSONAL_INFO.internshipTarget}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Profile Narrative & Competency Cards */}
          <div className="lg:col-span-7 space-y-8">
            {/* Professional Summary Glass Panel */}
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#F3D6E5] shadow-xl shadow-pink-500/5 hover:border-[#EC4899]/40 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] mb-5 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EC4899] animate-pulse"></span>
                Engineering Profile
              </h3>

              <p className="text-base sm:text-lg text-[#52525B] leading-relaxed font-normal mb-8">
                {PERSONAL_INFO.summary}
              </p>

              {/* Factual Info Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#F3D6E5]/70">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FFF1F7] border border-[#FBCFE8] text-[#EC4899] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#71717A] font-mono">Location</div>
                    <div className="text-sm font-semibold text-[#18181B]">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FFF1F7] border border-[#FBCFE8] text-[#EC4899] shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#71717A] font-mono">Expected Graduation</div>
                    <div className="text-sm font-semibold text-[#18181B]">{PERSONAL_INFO.graduationDate}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Competency Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PERSONAL_INFO.aboutBadges.map((badge, idx) => (
                <div
                  key={badge.title}
                  className="glass-panel p-6 rounded-2xl border border-[#F3D6E5] hover:border-[#EC4899]/60 hover:shadow-lg hover:shadow-pink-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                  data-cursor="interactive"
                >
                  <div>
                    <div className="p-3 rounded-xl bg-[#FFF1F7] border border-[#FBCFE8] w-fit mb-4 group-hover:scale-110 group-hover:bg-[#FCE7F3] transition-all">
                      {badgeIcons[idx]}
                    </div>
                    <h4 className="text-base font-bold text-[#18181B] mb-2 group-hover:text-[#EC4899] transition-colors">
                      {badge.title}
                    </h4>
                    <p className="text-xs text-[#52525B] leading-relaxed">{badge.desc}</p>
                  </div>
                  <div className="w-8 h-1 rounded-full bg-gradient-to-r from-[#EC4899] to-[#F472B6] mt-6 opacity-40 group-hover:opacity-100 group-hover:w-16 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
