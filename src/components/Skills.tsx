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
import { SkillCard } from './SkillCard'

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All')

  const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: <Layout className="w-5 h-5 text-sky-400" />,
    Backend: <Server className="w-5 h-5 text-indigo-400" />,
    Databases: <Database className="w-5 h-5 text-emerald-400" />,
    'AI & Data': <BrainCircuit className="w-5 h-5 text-[#06B6D4]" />,
    'Cloud & DevOps': <Cloud className="w-5 h-5 text-blue-400" />,
    Tools: <Wrench className="w-5 h-5 text-purple-400" />,
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
            <span>FULL-STACK TOOLSETS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#06B6D4]">
              Expertise
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured skillsets organized by engineering discipline, with verified application across real projects.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
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

        {/* Categorized Skills Section */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category.title} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {categoryIcons[category.title] || <Sparkles className="w-5 h-5 text-indigo-400" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>{category.title}</span>
                    <span className="text-xs font-mono font-normal text-slate-400">
                      ({category.skills.length} competencies)
                    </span>
                  </h3>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
