import React, { useState } from 'react'
import {
  Sparkles,
  Target,
  GitBranch,
  Terminal,
  Cpu,
  CheckCircle2,
  RefreshCw,
  UserCheck,
  ShieldCheck,
  ArrowRight,
  Code,
  Wrench,
} from 'lucide-react'
import { HOW_I_BUILD_WITH_AI_STEPS, WORKFLOW_LABELS } from '../data/portfolio'

export const AIWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)

  const getStepIcon = (iconType: string) => {
    switch (iconType) {
      case 'target':
        return <Target className="w-5 h-5 text-rose-400" />
      case 'git-branch':
        return <GitBranch className="w-5 h-5 text-indigo-400" />
      case 'terminal':
        return <Terminal className="w-5 h-5 text-cyan-400" />
      case 'cpu':
        return <Cpu className="w-5 h-5 text-[#8B5CF6]" />
      case 'check-circle-2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />
      case 'refresh-cw':
        return <RefreshCw className="w-5 h-5 text-amber-400" />
      default:
        return <Sparkles className="w-5 h-5 text-[#06B6D4]" />
    }
  }

  const getLabelIcon = (label: string) => {
    switch (label) {
      case 'Human':
      case 'Human Review':
        return <UserCheck className="w-4 h-4 text-emerald-400" />
      case 'AI Agent':
        return <Cpu className="w-4 h-4 text-[#8B5CF6]" />
      case 'Tools':
        return <Wrench className="w-4 h-4 text-amber-400" />
      case 'Code':
        return <Code className="w-4 h-4 text-cyan-400" />
      case 'Testing':
        return <ShieldCheck className="w-4 h-4 text-sky-400" />
      default:
        return <Sparkles className="w-4 h-4 text-indigo-400" />
    }
  }

  return (
    <section id="ai-workflow" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#6366F1]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#6366F1]/30 text-xs font-mono text-[#06B6D4] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING DISCIPLINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            How I Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#06B6D4]">
              With AI
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I leverage AI agents and models as high-velocity engineering multipliers while keeping architectural ownership, strict testing, and human quality assurance at the center.
          </p>
        </div>

        {/* Dynamic Continuous Chain: Human -> AI Agent -> Tools -> Code -> Testing -> Human Review */}
        <div className="mb-14">
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 shadow-xl">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
              <span>The Engineering Feedback Loop</span>
              <span className="text-emerald-400 font-semibold">&bull; Human in the Loop</span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              {WORKFLOW_LABELS.map((label, idx) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-mono font-medium text-slate-200 shadow-sm">
                    {getLabelIcon(label)}
                    <span>{label}</span>
                  </div>
                  {idx < WORKFLOW_LABELS.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6 Step Interactive Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOW_I_BUILD_WITH_AI_STEPS.map((item, idx) => {
            const isActive = activeStep === idx

            return (
              <div
                key={item.step}
                onMouseEnter={() => setActiveStep(idx)}
                className={`glass-panel p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between group cursor-default ${
                  isActive
                    ? 'border-[#6366F1] shadow-2xl shadow-indigo-500/15 -translate-y-1 bg-gradient-to-b from-[#0B1120] to-[#0d1429]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                    <span className="text-2xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">
                      {item.step}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {getStepIcon(item.iconType)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#06B6D4] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {item.action}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
                  <span className="text-[#06B6D4] block text-[10px] uppercase tracking-wider mb-1">
                    Role &amp; Responsibility
                  </span>
                  <span className="text-slate-200">{item.agentRole}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Guaranteed Engineering Accountability
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Every line of code and architecture plan is validated, tested, and understood by the human engineer.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 whitespace-nowrap">
            Responsible AI Engineering
          </span>
        </div>
      </div>
    </section>
  )
}
