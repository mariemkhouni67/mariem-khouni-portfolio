import React from 'react'
import { Languages as LanguagesIcon, Globe } from 'lucide-react'
import { LANGUAGES } from '../data/portfolio'

const levelDotCounts: Record<string, number> = {
  Native: 5,
  Fluent: 4,
  'Professional Working Proficiency': 3,
  Basic: 2,
}

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-28 relative overflow-hidden bg-gradient-to-b from-white via-[#FFF8FC] to-white">
      {/* Ambient glow */}
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FBCFE8]/50 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F3D6E5] shadow-sm text-xs font-mono font-medium text-[#EC4899] mb-3">
            <LanguagesIcon className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight mb-4">
            Language{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#DB2777]">
              Proficiency
            </span>
          </h2>
          <p className="text-[#52525B] text-base sm:text-lg leading-relaxed">
            Multilingual capabilities enabling collaboration across international and cross-cultural teams.
          </p>
        </div>

        {/* Language Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LANGUAGES.map((lang) => {
            const dots = levelDotCounts[lang.proficiency] ?? 3
            return (
              <div
                key={lang.language}
                className="glass-panel p-6 rounded-3xl border border-[#F3D6E5] hover:border-[#EC4899] hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-sm bg-white/85"
                data-cursor="interactive"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-[#FFF1F7] border border-[#FBCFE8] text-[#EC4899] group-hover:scale-110 group-hover:bg-[#FCE7F3] transition-all shadow-xs">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-[#DB2777] bg-[#FFF1F7] border border-[#FBCFE8]">
                      {lang.levelTag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#18181B] mb-1.5 group-hover:text-[#EC4899] transition-colors">
                    {lang.language}
                  </h3>

                  <p className="text-sm font-semibold text-[#52525B]">
                    {lang.proficiency}
                  </p>
                </div>

                {/* Visual proficiency indicator dots — no percentages */}
                <div className="pt-5 mt-5 border-t border-[#F3D6E5]">
                  <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider font-bold block mb-2.5">
                    Proficiency Level
                  </span>
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                          i < dots
                            ? 'bg-gradient-to-r from-[#EC4899] to-[#F472B6]'
                            : 'bg-[#F3D6E5]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
