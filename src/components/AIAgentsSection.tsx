import React, { useState } from 'react'
import {
  BrainCircuit,
  Bot,
  Cpu,
  Database,
  Terminal,
  Wrench,
  Sparkles,
  Network,
  CheckCircle2,
  Share2,
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
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)

  const getPipelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'user':
        return <Terminal className="w-5 h-5 text-[#EC4899]" />
      case 'terminal':
        return <Terminal className="w-5 h-5 text-[#F472B6]" />
      case 'bot':
        return <Bot className="w-5 h-5 text-[#DB2777]" />
      case 'wrench':
        return <Wrench className="w-5 h-5 text-amber-500" />
      case 'network':
        return <Network className="w-5 h-5 text-[#EC4899]" />
      case 'database':
        return <Database className="w-5 h-5 text-emerald-500" />
      case 'cpu':
        return <Cpu className="w-5 h-5 text-sky-500" />
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#EC4899]" />
      default:
        return <Cpu className="w-5 h-5 text-[#EC4899]" />
    }
  }

  // Node descriptions for interactive hover state
  const nodeDescriptions: Record<string, string> = {
    USER: 'Initial human goal or domain query initiating the task execution cycle.',
    PROMPT: 'Structured framing with role assignment, constraints, schemas, and guardrails.',
    'AI AGENT': 'Autonomous orchestrator executing multi-step reasoning and plan decomposition.',
    TOOLS: 'Verified external functions, file system operations, calculation, and web APIs.',
    MCP: 'Model Context Protocol: Standardized client/server protocol for interoperable tooling.',
    'RAG / DATABASE': 'Dynamic semantic search via ChromaDB vector stores and dense BGE-M3 embeddings.',
    LLM: 'High-reasoning foundation models (e.g. DeepSeek R1) performing synthesis.',
    RESULT: 'Deterministic, verified production deliverable verified against test criteria.',
  }

  return (
    <section id="ai" className="py-28 relative overflow-hidden bg-gradient-to-b from-white via-[#FFF8FC] to-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FCE7F3]/70 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FBCFE8]/50 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F3D6E5] shadow-sm text-xs font-mono font-medium text-[#EC4899] mb-3">
            <BrainCircuit className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>AGENTIC &amp; AI ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight mb-4">
            Building{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#DB2777]">
              With AI
            </span>
          </h2>
          <p className="text-[#52525B] text-base sm:text-lg leading-relaxed">
            Hands-on integration with LLMs, RAG pipelines, dense embeddings, and exploration of modern agent-based workflows (MCP &amp; A2A).
          </p>
        </div>

        {/* Conceptual Workflow Interactive 8-Node Pipeline */}
        <div className="mb-16">
          <div className="glass-panel rounded-3xl border border-[#F3D6E5] p-6 sm:p-8 shadow-xl shadow-pink-500/5 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-6 border-b border-[#F3D6E5] mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#EC4899] font-bold flex items-center gap-1.5">
                  <Share2 className="w-4 h-4" />
                  <span>Agentic Pipeline Architecture</span>
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#18181B] mt-1">
                  End-to-End Autonomous Agent Execution Flow
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#DB2777] bg-[#FFF1F7] border border-[#FBCFE8] px-3 py-1 rounded-full font-semibold">
                Hover Nodes to Inspect Flow
              </span>
            </div>

            {/* Pipeline visual diagram with animated pink particles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative">
              {CONCEPTUAL_PIPELINE.map((node, idx) => {
                const isHovered = hoveredNode === idx
                const isAdjacent = hoveredNode !== null && Math.abs(hoveredNode - idx) === 1

                return (
                  <div
                    key={node.label}
                    onMouseEnter={() => setHoveredNode(idx)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="relative flex flex-col items-center text-center transition-all duration-300"
                    data-cursor="interactive"
                  >
                    <div
                      className={`w-full p-4 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center gap-2 group cursor-pointer ${
                        isHovered
                          ? 'scale-105 bg-[#FFF1F7] border-2 border-[#EC4899] shadow-xl shadow-pink-500/25 -translate-y-1'
                          : isAdjacent
                          ? 'bg-[#FFF8FC] border border-[#F472B6]/60 shadow-md shadow-pink-500/10'
                          : 'bg-white/80 border border-[#F3D6E5] hover:border-[#EC4899]/50 shadow-sm'
                      }`}
                    >
                      <div
                        className={`p-2.5 rounded-xl transition-all duration-300 ${
                          isHovered
                            ? 'bg-[#EC4899] text-white scale-110 shadow-md shadow-pink-500/30'
                            : 'bg-[#FFF1F7] border border-[#FBCFE8]'
                        }`}
                      >
                        {getPipelineIcon(node.icon)}
                      </div>
                      <span className="text-xs font-bold font-mono text-[#18181B] group-hover:text-[#EC4899] transition-colors">
                        {node.label}
                      </span>
                      <span className="text-[10px] text-[#71717A] font-mono line-clamp-1">
                        {node.role}
                      </span>
                    </div>

                    {/* Animated connecting pulse indicator for large screens */}
                    {idx < CONCEPTUAL_PIPELINE.length - 1 && (
                      <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 items-center justify-center z-10 pointer-events-none">
                        <div className="w-2 h-2 rounded-full bg-[#EC4899]/60 animate-ping" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Dynamic Node Detail Banner on Hover */}
            <div className="mt-6 pt-5 border-t border-[#F3D6E5] flex items-center justify-between min-h-[50px] px-2">
              {hoveredNode !== null ? (
                <div className="flex items-center gap-3 w-full animate-fadeIn">
                  <span className="px-2.5 py-1 rounded-md bg-[#FFF1F7] text-[#EC4899] font-mono text-xs font-bold border border-[#FBCFE8]">
                    {CONCEPTUAL_PIPELINE[hoveredNode].label}
                  </span>
                  <p className="text-xs sm:text-sm text-[#18181B] font-medium">
                    {nodeDescriptions[CONCEPTUAL_PIPELINE[hoveredNode].label] || CONCEPTUAL_PIPELINE[hoveredNode].role}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-[#71717A] font-mono italic">
                  Hover over any node in the pipeline to examine its role in the agentic loop.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Technologies Grid & Detailed Inspection Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 9 Verified Technologies Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {AI_AGENT_CONCEPTS.map((concept) => {
              const isSelected = selectedConcept.id === concept.id

              return (
                <button
                  key={concept.id}
                  onClick={() => setSelectedConcept(concept)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#FFF1F7] to-[#FFF8FC] border-2 border-[#EC4899] shadow-lg shadow-pink-500/15 scale-[1.02]'
                      : 'bg-white/80 border border-[#F3D6E5] hover:border-[#EC4899]/50 hover:bg-[#FFF8FC]'
                  }`}
                  data-cursor="interactive"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#DB2777] font-bold uppercase tracking-wider block mb-1">
                      {concept.tag}
                    </span>
                    <h4 className="text-sm font-bold text-[#18181B] leading-tight">
                      {concept.name}
                    </h4>
                  </div>
                  <div className="mt-4 pt-2 border-t border-[#F3D6E5]/60 text-[11px] font-mono text-[#71717A] flex items-center justify-between">
                    <span>Inspect</span>
                    <span className="text-[#EC4899] font-bold">&rarr;</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Selected Concept Deep-Dive Card */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-[#F3D6E5] shadow-xl shadow-pink-500/5 relative overflow-hidden bg-white/90">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F3D6E5]">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-[#DB2777] bg-[#FFF1F7] border border-[#FBCFE8]">
                {selectedConcept.tag}
              </span>
              <span className="text-[11px] font-mono text-[#71717A]">
                Engineering Curriculum
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#18181B] mb-3">
              {selectedConcept.name}
            </h3>

            <p className="text-sm text-[#52525B] leading-relaxed mb-6">
              {selectedConcept.description}
            </p>

            <div className="p-4 rounded-2xl bg-[#FFF8FC] border border-[#F3D6E5] mb-6">
              <span className="text-[11px] font-mono text-[#DB2777] uppercase font-bold block mb-1">
                Architecture Role
              </span>
              <p className="text-xs text-[#18181B] font-semibold">
                {selectedConcept.workflowRole}
              </p>
            </div>

            <div className="pt-4 border-t border-[#F3D6E5] flex items-center gap-2 text-xs font-mono text-[#52525B]">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Grounded in practical coursework &amp; project integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
