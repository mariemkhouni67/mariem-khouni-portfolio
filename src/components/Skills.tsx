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
    Frontend: <Layout className="w-5 h-5 text-[#EC4899]" />,
    Backend: <Server className="w-5 h-5 text-[#F472B6]" />,
    Databases: <Database className="w-5 h-5 text-emerald-500" />,
    'AI & Data': <BrainCircuit className="w-5 h-5 text-[#DB2777]" />,
    'Cloud & DevOps': <Cloud className="w-5 h-5 text-sky-500" />,
    Tools: <Wrench className="w-5 h-5 text-amber-500" />,
    Methodologies: <Workflow className="w-5 h-5 text-[#EC4899]" />,
  }

  const filterTabs = ['All', ...SKILL_CATEGORIES.map((c) => c.title)]

  const displayedCategories =
    selectedFilter === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === selectedFilter)

  return (
    <section id="skills" className="py-28 relative bg-gradient-to-b from-white via-[#FFF8FC] to-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FBCFE8]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FCE7F3]/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F3D6E5] shadow-sm text-xs font-mono font-medium text-[#EC4899] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>FULL-STACK TOOLSETS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight mb-4">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#DB2777]">
              Expertise
            </span>
          </h2>
          <p className="text-[#52525B] text-base sm:text-lg leading-relaxed">
            Structured skillsets organized by engineering discipline, with verified application across real projects.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedFilter === tab
                  ? 'bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white shadow-lg shadow-pink-500/25 scale-105'
                  : 'bg-white/80 border border-[#F3D6E5] text-[#52525B] hover:text-[#18181B] hover:border-[#EC4899]/50'
              }`}
              data-cursor="interactive"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Categorized Skills Section */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div
              key={category.title}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#F3D6E5] shadow-xl shadow-pink-500/5 bg-white/70"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F3D6E5]">
                <div className="p-2.5 rounded-xl bg-[#FFF1F7] border border-[#FBCFE8]">
                  {categoryIcons[category.title] || (
                    <Sparkles className="w-5 h-5 text-[#EC4899]" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#18181B] flex items-center gap-2">
                    <span>{category.title}</span>
                    <span className="text-xs font-mono font-normal text-[#71717A]">
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
