import React from 'react'
import { GraduationCap, Calendar, Building, BookOpen } from 'lucide-react'
import { EDUCATION_ITEMS } from '../data/portfolio'

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#6366F1]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#6366F1]/30 text-xs font-mono text-[#06B6D4] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Education &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">
              Degrees
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Software Engineering and Information Systems studies at ISSAT.
          </p>
        </div>

        {/* Education Display Card */}
        <div className="max-w-3xl mx-auto">
          {EDUCATION_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-[#6366F1]/40 transition-all duration-300 relative overflow-hidden group shadow-2xl"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6366F1]/20 to-transparent pointer-events-none rounded-bl-full" />

              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#6366F1]/20 to-[#06B6D4]/20 border border-white/15 text-[#06B6D4] group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-2">
                      {item.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      {item.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#06B6D4] mt-1">
                      {item.degreeFr}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-[#6366F1]" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Institution details */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-indigo-400 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Institution</div>
                    <div className="text-sm font-semibold text-white">{item.institution}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-[#06B6D4] shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Specialization</div>
                    <div className="text-sm font-semibold text-white">
                      Software Engineering &amp; Information Systems
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
