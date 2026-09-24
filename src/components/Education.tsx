import React from 'react'
import { GraduationCap, Calendar, Building, BookOpen, CheckCircle2 } from 'lucide-react'
import { EDUCATION_ITEMS } from '../data/portfolio'

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-28 relative overflow-hidden bg-gradient-to-b from-white via-[#FFF8FC] to-white">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#FBCFE8]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F3D6E5] shadow-sm text-xs font-mono font-medium text-[#EC4899] mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight mb-4">
            Education &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#DB2777]">
              Degrees
            </span>
          </h2>
          <p className="text-[#52525B] text-base sm:text-lg leading-relaxed">
            Software Engineering and Information Systems degree at ISSAT.
          </p>
        </div>

        {/* Education Display Card with Timeline Motif */}
        <div className="max-w-3xl mx-auto">
          {EDUCATION_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#F3D6E5] hover:border-[#EC4899]/60 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 relative overflow-hidden group bg-white/85"
              data-cursor="interactive"
            >
              {/* Corner soft pink gradient accent */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#FCE7F3] to-transparent pointer-events-none rounded-bl-full" />

              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#FFF1F7] border border-[#FBCFE8] text-[#EC4899] group-hover:scale-110 group-hover:bg-[#FCE7F3] transition-all shadow-xs">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 mb-2">
                      {item.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] leading-snug">
                      {item.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#DB2777] font-semibold mt-1">
                      {item.degreeFr}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#F3D6E5] text-xs font-mono text-[#52525B] font-semibold shadow-xs">
                  <Calendar className="w-3.5 h-3.5 text-[#EC4899]" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Institution details */}
              <div className="pt-6 border-t border-[#F3D6E5] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-[#EC4899] shrink-0" />
                  <div>
                    <div className="text-xs text-[#71717A] font-mono">Institution</div>
                    <div className="text-sm font-semibold text-[#18181B]">{item.institution}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-[#F472B6] shrink-0" />
                  <div>
                    <div className="text-xs text-[#71717A] font-mono">Specialization</div>
                    <div className="text-sm font-semibold text-[#18181B]">
                      Software Engineering &amp; Information Systems
                    </div>
                  </div>
                </div>
              </div>

              {/* Factual Core Coursework Highlights */}
              <div className="mt-6 pt-6 border-t border-[#F3D6E5]/70">
                <span className="text-xs font-mono uppercase tracking-wider text-[#DB2777] font-bold block mb-3">
                  Key Academic Topics
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#52525B]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Algorithms &amp; Data Structures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Database Management Systems (SQL)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Object-Oriented Programming &amp; UML</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Web Architectures &amp; Distributed Systems</span>
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
