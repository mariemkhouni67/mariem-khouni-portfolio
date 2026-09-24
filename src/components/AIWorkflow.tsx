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
  Quote,
} from 'lucide-react'
import { HOW_I_BUILD_WITH_AI_STEPS, WORKFLOW_LABELS } from '../data/portfolio'

export const AIWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)

  const getStepIcon = (iconType: string) => {
    switch (iconType) {
      case 'target':
        return <Target className="w-5 h-5 text-[#EC4899]" />
      case 'git-branch':
        return <GitBranch className="w-5 h-5 text-[#F472B6]" />
      case 'terminal':
        return <Terminal className="w-5 h-5 text-[#DB2777]" />
      case 'cpu':
        return <Cpu className="w-5 h-5 text-[#EC4899]" />
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />
      case 'check-circle-2':
        return <CheckCircle2 className="w-5 h-5 text-[#DB2777]" />
      case 'refresh-cw':
        return <RefreshCw className="w-5 h-5 text-[#EC4899]" />
      default:
        return <Sparkles className="w-5 h-5 text-[#EC4899]" />
    }
  }

  const getLabelIcon = (label: string) => {
    switch (label) {
      case 'Human':
      case 'Human Review':
        return <UserCheck className="w-4 h-4 text-[#EC4899]" />
      case 'AI Agent':
        return <Cpu className="w-4 h-4 text-[#DB2777]" />
      case 'Tools':
        return <Wrench className="w-4 h-4 text-amber-500" />
      case 'Code':
        return <Code className="w-4 h-4 text-[#F472B6]" />
      case 'Testing':
        return <ShieldCheck className="w-4 h-4 text-emerald-500" />
      default:
        return <Sparkles className="w-4 h-4 text-[#EC4899]" />
    }
  }

  return (
    <section id="ai-workflow" className="py-28 relative overflow-hidden bg-gradient-to-b from-white via-[#FFF8FC] to-white">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#FCE7F3]/70 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F3D6E5] shadow-sm text-xs font-mono font-medium text-[#EC4899] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>METHODOLOGY &amp; WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight mb-4">
            How I Use{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#DB2777]">
              AI
            </span>
          </h2>
          <p className="text-[#52525B] text-base sm:text-lg leading-relaxed">
            I leverage AI agents and models as high-velocity engineering multipliers while keeping architectural ownership, strict testing, and human quality assurance at the center.
          </p>
        </div>

        {/* Dynamic Continuous Chain: Human -> AI Agent -> Tools -> Code -> Testing -> Human Review */}
        <div className="mb-14">
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-[#F3D6E5] shadow-lg shadow-pink-500/5">
            <div className="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-4 flex items-center justify-between">
              <span>The Engineering Feedback Loop</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Human in the Loop
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              {WORKFLOW_LABELS.map((label, idx) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="px-3.5 py-2 rounded-xl bg-white border border-[#F3D6E5] flex items-center gap-2 text-xs font-mono font-medium text-[#18181B] shadow-sm">
                    {getLabelIcon(label)}
                    <span>{label}</span>
                  </div>
                  {idx < WORKFLOW_LABELS.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#F472B6] hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 7-Step Interactive Process Grid Connected with Animated Pink Line */}
        <div className="relative mb-16">
          {/* Subtle animated pink horizontal connector for desktop */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-0.5 bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#DB2777] opacity-40 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 relative z-10">
            {HOW_I_BUILD_WITH_AI_STEPS.map((item, idx) => {
              const isActive = activeStep === idx

              return (
                <div
                  key={item.step}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`glass-panel p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between group cursor-pointer ${
                    isActive
                      ? 'border-2 border-[#EC4899] shadow-xl shadow-pink-500/20 -translate-y-1.5 bg-[#FFF8FC]'
                      : 'border-[#F3D6E5] bg-white/85 hover:border-[#EC4899]/50 hover:bg-[#FFF8FC]/60'
                  }`}
                  data-cursor="interactive"
                >
                  <div>
                    {/* Header: Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-[#FFF1F7] text-[#EC4899] border border-[#FBCFE8]">
                        {item.step}
                      </span>
                      <div className="p-2 rounded-xl bg-white border border-[#F3D6E5] shadow-xs group-hover:scale-110 transition-transform">
                        {getStepIcon(item.iconType)}
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base font-bold text-[#18181B] mb-2 group-hover:text-[#EC4899] transition-colors">
                      {item.title}
                    </h3>

                    {/* Action Text */}
                    <p className="text-xs text-[#52525B] leading-relaxed mb-4">
                      {item.action}
                    </p>
                  </div>

                  {/* Agent Role Badge */}
                  <div className="pt-3 border-t border-[#F3D6E5]/70">
                    <span className="text-[10px] font-mono font-medium text-[#DB2777] block">
                      {item.agentRole}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Required Bottom Quote */}
        <div className="max-w-3xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FFF1F7] via-white to-[#FFF8FC] border border-[#FBCFE8] shadow-lg shadow-pink-500/5 relative overflow-hidden text-center">
            <Quote className="w-8 h-8 text-[#EC4899]/30 mx-auto mb-3" />
            <blockquote className="text-lg sm:text-xl font-bold text-[#18181B] italic leading-relaxed">
              "AI helps me accelerate development, but I validate, debug and refine the result."
            </blockquote>
            <p className="mt-3 text-xs font-mono text-[#DB2777] font-semibold uppercase tracking-wider">
              Mariem Khouni &bull; Engineering Philosophy
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
