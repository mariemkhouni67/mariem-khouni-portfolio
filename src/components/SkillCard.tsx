import React from 'react'
import { Sparkles, FolderGit2 } from 'lucide-react'
import type { SkillItem } from '../data/portfolio'

interface SkillCardProps {
  skill: SkillItem
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div
      className={`p-4 rounded-2xl transition-all duration-300 flex flex-col justify-between group cursor-default ${
        skill.isAiHighlight
          ? 'bg-gradient-to-br from-[#FFF1F7] via-white to-[#FFF8FC] border border-[#FBCFE8] shadow-md shadow-pink-500/10 hover:border-[#EC4899] hover:shadow-xl hover:shadow-pink-500/20 hover:-translate-y-1'
          : 'bg-white/85 backdrop-blur-md border border-[#F3D6E5] shadow-xs hover:border-[#EC4899]/60 hover:shadow-lg hover:shadow-pink-500/10 hover:-translate-y-1'
      }`}
      data-cursor="interactive"
    >
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span
            className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md font-semibold ${
              skill.isAiHighlight
                ? 'text-[#DB2777] bg-[#FFF1F7] border border-[#FBCFE8]'
                : 'text-[#71717A] bg-[#FFF8FC] border border-[#F3D6E5]'
            }`}
          >
            {skill.category}
          </span>

          {skill.isAiHighlight && (
            <Sparkles className="w-3.5 h-3.5 text-[#EC4899] animate-pulse" />
          )}
        </div>

        <h4 className="text-base font-bold text-[#18181B] mb-1.5 group-hover:text-[#EC4899] transition-colors">
          {skill.name}
        </h4>

        <p className="text-xs text-[#52525B] leading-relaxed mb-4">
          {skill.description}
        </p>
      </div>

      {/* Associated Real Projects */}
      {skill.relatedProjects && skill.relatedProjects.length > 0 && (
        <div className="pt-3 border-t border-[#F3D6E5]/70 flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-[#71717A]">
          <FolderGit2 className="w-3 h-3 text-[#EC4899]" />
          {skill.relatedProjects.map((p) => (
            <span
              key={p}
              className="px-1.5 py-0.5 rounded bg-[#FFF8FC] border border-[#F3D6E5] text-[#18181B] font-medium"
            >
              {p}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
