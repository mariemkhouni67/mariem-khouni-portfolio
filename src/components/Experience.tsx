import React from 'react'
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { EXPERIENCE_ITEMS } from '../data/portfolio'

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-28 relative bg-gradient-to-b from-white via-[#FFF8FC] to-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#FCE7F3]/60 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F3D6E5] shadow-sm text-xs font-mono font-medium text-[#EC4899] mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>PRACTICAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight mb-4">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#DB2777]">
              Experience
            </span>
          </h2>
          <p className="text-[#52525B] text-base sm:text-lg leading-relaxed">
            Hands-on exposure to enterprise business processes, engineering documentation, and information systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          {/* Animated vertical pink line */}
          <div className="absolute left-6 sm:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#EC4899] via-[#F472B6] to-[#FCE7F3]" />

          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div key={idx} className="relative pl-16 sm:pl-20 group">
              {/* Glowing timeline marker point */}
              <div className="absolute left-3 sm:left-5 top-5 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#EC4899] flex items-center justify-center shadow-lg shadow-pink-500/30 group-hover:scale-125 transition-transform duration-300">
                <span className="w-2 h-2 rounded-full bg-[#EC4899]" />
              </div>

              {/* Experience Glass Card */}
              <div
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#F3D6E5] hover:border-[#EC4899]/60 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 bg-white/85"
                data-cursor="interactive"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold text-[#DB2777] bg-[#FFF1F7] border border-[#FBCFE8] mb-2">
                      {item.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] flex items-center gap-2">
                      <span>{item.company}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52525B] font-medium mt-0.5">
                      {item.companyFullName}
                    </p>
                  </div>

                  <div className="text-left sm:text-right text-xs text-[#71717A] font-mono space-y-1">
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <MapPin className="w-3.5 h-3.5 text-[#EC4899]" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:justify-end text-[#52525B] font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#F472B6]" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points - Exact truthful points */}
                <div className="pt-4 border-t border-[#F3D6E5] space-y-3">
                  {item.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-sm text-[#18181B]">
                      <CheckCircle2 className="w-4 h-4 text-[#EC4899] shrink-0 mt-0.5" />
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
