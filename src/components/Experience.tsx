import React from 'react'
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { EXPERIENCE_ITEMS } from '../data/portfolio'

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#6366F1]/30 text-xs font-mono text-[#06B6D4] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on exposure to enterprise business processes and information systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#6366F1] via-[#06B6D4] to-transparent" />

          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div key={idx} className="relative pl-16 sm:pl-20 group">
              {/* Timeline marker node */}
              <div className="absolute left-3.5 sm:left-5.5 top-5 -translate-x-1/2 w-6 h-6 rounded-full bg-[#050816] border-2 border-[#06B6D4] flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-125 transition-transform duration-300">
                <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#06B6D4]/40 transition-all duration-300 shadow-xl">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-medium text-[#06B6D4] bg-[#06B6D4]/15 border border-[#06B6D4]/30 mb-2">
                      {item.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                      <span>{item.company}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      {item.companyFullName}
                    </p>
                  </div>

                  <div className="text-left sm:text-right text-xs text-slate-400 font-mono space-y-1">
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <MapPin className="w-3.5 h-3.5 text-[#6366F1]" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:justify-end text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-[#06B6D4]" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  {item.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
