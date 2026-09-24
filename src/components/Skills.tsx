import React, { useState } from 'react'
import {
  Sparkles,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Cloud,
  Wrench,
  Workflow,
} from 'lucide-react'
import { SKILL_CATEGORIES } from '../data/portfolio'

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All')

  const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: <Layout className="w-5 h-5 text-sky-400" />,
    Backend: <Server className="w-5 h-5 text-indigo-400" />,
    Databases: <Database className="w-5 h-5 text-emerald-400" />,
    'AI & Data': <BrainCircuit className="w-5 h-5 text-[#06B6D4]" />,
    'Cloud & DevOps': <Cloud className="w-5 h-5 text-blue-400" />,
    'Tools & UI/UX': <Wrench className="w-5 h-5 text-purple-400" />,
    Methodologies: <Workflow className="w-5 h-5 text-rose-400" />,
  }

  const filterTabs = ['All', ...SKILL_CATEGORIES.map((c) => c.title)]

  const displayedCategories =
    selectedFilter === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === selectedFilter)

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#6366F1]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#6366F1]/30 text-xs font-mono text-[#06B6D4] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#06B6D4]">
              Technologies
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Modern toolsets and frameworks leveraged across full-stack web and AI application architectures.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedFilter === tab
                  ? 'bg-gradient-to-r from-[#6366F1] to-[#06B6D4] text-white shadow-lg shadow-indigo-500/20 scale-105'
                  : 'glass-panel border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => {
            const isAi = category.title === 'AI & Data'

            return (
              <div
                key={category.title}
                className={`rounded-2xl p-6 transition-all duration-300 relative group flex flex-col justify-between ${
                  isAi
                    ? 'glass-panel border-2 border-[#06B6D4]/50 shadow-xl shadow-cyan-500/10 md:col-span-2 lg:col-span-1 bg-gradient-to-b from-[#0B1120] to-[#0d1c33]'
                    : 'glass-panel border border-white/10 hover:border-[#6366F1]/40 hover:-translate-y-1'
                }`}
              >
                {/* Special AI badge if applicable */}
                {isAi && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Specialized Focus</span>
                  </div>
                )}

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isAi
                          ? 'bg-[#06B6D4]/20 border border-[#06B6D4]/40 text-[#06B6D4]'
                          : 'bg-white/5 border border-white/10'
                      }`}
                    >
                      {categoryIcons[category.title]}
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-bold ${
                          isAi
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-indigo-300'
                            : 'text-white'
                        }`}
                      >
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {category.skills.length} Technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-default ${
                          skill.isAiHighlight
                            ? 'bg-[#06B6D4]/15 border border-[#06B6D4]/40 text-cyan-200 hover:bg-[#06B6D4]/25 hover:scale-105'
                            : 'bg-white/5 border border-white/10 text-slate-200 hover:border-[#6366F1]/50 hover:bg-white/10 hover:scale-105'
                        }`}
                      >
                        {skill.isAiHighlight ? (
                          <Sparkles className="w-3 h-3 text-[#06B6D4]" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtext info */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Stack Tier</span>
                  <span className="text-[#06B6D4]">Production-Ready</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
