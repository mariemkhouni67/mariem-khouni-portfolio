import React from 'react'
import { Languages as LanguagesIcon, Globe } from 'lucide-react'
import { LANGUAGES } from '../data/portfolio'

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#6366F1]/30 text-xs font-mono text-[#06B6D4] mb-3">
            <LanguagesIcon className="w-3.5 h-3.5" />
            <span>COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Language{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">
              Proficiency
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Multilingual capabilities facilitating collaboration across international teams.
          </p>
        </div>

        {/* Language Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LANGUAGES.map((lang) => (
            <div
              key={lang.language}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#6366F1]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#06B6D4] group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10">
                    {lang.levelTag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#06B6D4] transition-colors">
                  {lang.language}
                </h3>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400 block mb-0.5">Proficiency</span>
                <span className="text-sm font-semibold text-slate-200">{lang.proficiency}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
