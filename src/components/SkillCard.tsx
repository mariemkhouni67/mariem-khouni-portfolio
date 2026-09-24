import React from 'react'
import { Sparkles, FolderGit2 } from 'lucide-react'
import type { SkillItem } from '../data/portfolio'

interface SkillCardProps {
  skill: SkillItem
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div
      className={`p-4 rounded-2xl transition-all duration-300 flex flex-col justify-between group ${
        skill.isAiHighlight
          ? 'glass-panel border border-[#06B6D4]/40 bg-gradient-to-br from-[#06B6D4]/10 via-[#0B1120] to-[#8B5CF6]/10 hover:border-[#06B6D4] hover:shadow-lg hover:shadow-cyan-500/15 hover:-translate-y-1'
          : 'glass-panel border border-white/10 hover:border-[#6366F1]/50 hover:bg-white/5 hover:-translate-y-1'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
              skill.isAiHighlight
                ? 'text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/30'
                : 'text-slate-400 bg-white/5'
            }`}
          >
            {skill.category}
          </span>

          {skill.isAiHighlight && (
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4] animate-pulse" />
          )}
        </div>

        <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-[#06B6D4] transition-colors">
          {skill.name}
        </h4>

        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          {skill.description}
        </p>
      </div>

      {/* Associated Real Projects */}
      {skill.relatedProjects && skill.relatedProjects.length > 0 && (
        <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-slate-400">
          <FolderGit2 className="w-3 h-3 text-slate-500" />
          {skill.relatedProjects.map((p) => (
            <span
              key={p}
              className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
            >
              {p}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
