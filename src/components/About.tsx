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
    <Code2 className="w-5 h-5 text-[#6366F1]" />,
    <Layout className="w-5 h-5 text-[#06B6D4]" />,
    <BrainCircuit className="w-5 h-5 text-[#818CF8]" />,
    <Cpu className="w-5 h-5 text-teal-400" />,
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#6366F1]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#6366F1]/30 text-xs font-mono text-[#06B6D4] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Web Systems &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">
              AI Solutions
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Summary Paragraph & Key Attributes */}
          <div className="lg:col-span-7 flex flex-col justify-between glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]"></span>
                Professional Summary
              </h3>

              {/* Exact paragraph based on the professional summary */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
                {PERSONAL_INFO.summary}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#06B6D4] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Location</div>
                    <div className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#6366F1] shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Expected Graduation</div>
                    <div className="text-sm font-semibold text-white">{PERSONAL_INFO.graduationDate}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:col-span-2">
                  <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Target Position</div>
                    <div className="text-sm font-semibold text-emerald-400">
                      {PERSONAL_INFO.internshipTarget}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PERSONAL_INFO.aboutBadges.map((badge, idx) => (
              <div
                key={badge.title}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#6366F1]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                    {badgeIcons[idx]}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#06B6D4] transition-colors">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{badge.desc}</p>
                </div>
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4] mt-6 opacity-40 group-hover:opacity-100 group-hover:w-16 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
