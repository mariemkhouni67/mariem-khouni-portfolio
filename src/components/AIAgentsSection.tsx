import React, { useState } from 'react'
import {
  BrainCircuit,
  Bot,
  Cpu,
  Database,
  Terminal,
  Wrench,
  Sparkles,
  ArrowRight,
  Workflow,
  CheckCircle2,
} from 'lucide-react'
import {
  AI_AGENT_CONCEPTS,
  CONCEPTUAL_PIPELINE,
} from '../data/portfolio'
import type { AIConcept } from '../data/portfolio'

export const AIAgentsSection: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<AIConcept>(
    AI_AGENT_CONCEPTS[0]
  )

  const getPipelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'user':
        return <Terminal className="w-4 h-4 text-emerald-400" />
      case 'terminal':
        return <Terminal className="w-4 h-4 text-cyan-400" />
      case 'bot':
        return <Bot className="w-4 h-4 text-[#8B5CF6]" />
      case 'wrench':
        return <Wrench className="w-4 h-4 text-amber-400" />
      case 'database':
        return <Database className="w-4 h-4 text-emerald-400" />
      case 'cpu':
        return <Cpu className="w-4 h-4 text-[#06B6D4]" />
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-indigo-400" />
      default:
        return <Cpu className="w-4 h-4 text-indigo-400" />
    }
  }

  return (
    <section id="ai" className="py-24 relative overflow-hidden bg-[#070b16]/70">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#06B6D4]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#06B6D4]/40 text-xs font-mono text-[#06B6D4] mb-3">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>AGENTIC &amp; AI CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            AI &amp; Agentic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-[#818CF8] to-[#8B5CF6]">
              Development
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on integration with LLMs, RAG pipelines, dense embeddings, and exploration of modern agent-based workflows (MCP &amp; A2A).
          </p>
        </div>

        {/* Conceptual Workflow Interactive Pipeline */}
        <div className="mb-16">
          <div className="glass-panel rounded-3xl border border-[#06B6D4]/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#06B6D4] font-semibold flex items-center gap-1.5">
                  <Workflow className="w-4 h-4" />
                  <span>Agentic Pipeline Architecture</span>
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  How Agentic Workflows Route Intent to Verified Responses
                </h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Interactive Architecture
              </span>
            </div>

            {/* Pipeline visual diagram */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative">
              {CONCEPTUAL_PIPELINE.map((node, idx) => (
                <div key={node.label} className="relative flex flex-col items-center text-center">
                  <div className="w-full p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#06B6D4]/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center gap-2 group cursor-default">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {getPipelineIcon(node.icon)}
                    </div>
                    <span className="text-xs font-bold font-mono text-white group-hover:text-[#06B6D4] transition-colors">
                      {node.label}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono line-clamp-1">
                      {node.role}
                    </span>
                  </div>

                  {idx < CONCEPTUAL_PIPELINE.length - 1 && (
                    <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600 z-10">
                      <ArrowRight className="w-4 h-4 text-slate-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Technologies Grid & Detailed Inspection Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 9 Verified Technologies Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {AI_AGENT_CONCEPTS.map((concept) => {
              const isSelected = selectedConcept.id === concept.id

              return (
                <button
                  key={concept.id}
                  onClick={() => setSelectedConcept(concept)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'glass-panel border-2 border-[#06B6D4] shadow-lg shadow-cyan-500/20 bg-gradient-to-br from-[#06B6D4]/15 to-[#8B5CF6]/15'
                      : 'glass-panel border border-white/10 hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#06B6D4] font-semibold uppercase tracking-wider block mb-1">
                      {concept.tag}
                    </span>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {concept.name}
                    </h4>
                  </div>
                  <div className="mt-4 pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>Inspect</span>
                    <span className="text-[#06B6D4]">&rarr;</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Selected Concept Deep-Dive Card */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-[#06B6D4]/40 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#0B1120] to-[#070b16]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-[#06B6D4] bg-[#06B6D4]/15 border border-[#06B6D4]/30">
                {selectedConcept.tag}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Verified Curriculum
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-3">
              {selectedConcept.name}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedConcept.description}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
              <span className="text-xs font-mono text-[#818CF8] block mb-1">
                Workflow Role
              </span>
              <span className="text-sm font-semibold text-white">
                {selectedConcept.workflowRole}
              </span>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified in StudyMate &amp; Workflows
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
