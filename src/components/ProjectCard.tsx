import React from 'react'
import {
  ExternalLink,
  Info,
  Sparkles,
  Bot,
  Compass,
  Activity,
} from 'lucide-react'
import type { Project } from '../data/portfolio'
import { GitHubIcon } from './SocialIcons'

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
  isFeatured?: boolean
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  isFeatured = false,
}) => {
  const renderVisualMockup = () => {
    if (project.id === 'studymate') {
      return (
        <div className="relative w-full h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950 via-indigo-950/60 to-slate-900 border border-[#6366F1]/30 p-4 sm:p-5 flex flex-col justify-between overflow-hidden group">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#6366F1]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar: DeepSeek & RAG Indicator */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-[11px] font-mono text-cyan-300">
              <Bot className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>DeepSeek + ChromaDB (BGE-M3)</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Bilingual UI
            </span>
          </div>

          {/* Middle: Simulated Interactive AI Knowledge & Flashcard Card */}
          <div className="relative z-10 grid grid-cols-2 gap-3 my-auto">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 shadow-lg">
              <div className="text-[10px] font-mono text-[#06B6D4] mb-1">RAG Context Query</div>
              <div className="text-xs text-white font-medium truncate">Course summaries &amp; notes</div>
              <div className="mt-2 flex items-center gap-1 text-[9px] text-slate-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                ChromaDB Vector Store
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-[#6366F1]/40 shadow-lg">
              <div className="text-[10px] font-mono text-indigo-400 mb-1">Gamified Retention</div>
              <div className="text-xs text-white font-medium truncate">Adaptive Quizzes &amp; Cards</div>
              <div className="mt-2 flex items-center gap-1 text-[9px] text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Streak Tracking Active
              </div>
            </div>
          </div>

          {/* Bottom Bar: Architecture Footprint */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/10">
            <span>MySQL &bull; Docker Containerized</span>
            <span className="text-[#06B6D4]">AI Study Platform</span>
          </div>
        </div>
      )
    }

    if (project.id === 'travelscape') {
      return (
        <div className="relative w-full h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950 via-cyan-950/40 to-slate-900 border border-[#06B6D4]/30 p-4 sm:p-5 flex flex-col justify-between overflow-hidden group">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#06B6D4]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-[11px] font-mono text-cyan-300">
              <Compass className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Leaflet Interactive Maps &bull; MERN</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
              3D Animated Hero
            </span>
          </div>

          <div className="relative z-10 space-y-2 my-auto">
            <div className="p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-cyan-400">Destination Discovery &amp; Booking</div>
                <div className="text-xs text-white font-medium">Real-time reservations &amp; reviews</div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">CRUD Admin</span>
            </div>

            <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
              <span>Multilingual Conversational Chatbot</span>
              <span className="text-[#06B6D4]">&bull; Integrated</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/10">
            <span>MongoDB &bull; Express &bull; React &bull; Node</span>
            <span className="text-cyan-400">Glassmorphic UI</span>
          </div>
        </div>
      )
    }

    return (
      <div className="relative w-full h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-900 border border-blue-500/30 p-4 sm:p-5 flex flex-col justify-between overflow-hidden group">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-[11px] font-mono text-blue-300">
            <Activity className="w-3.5 h-3.5 text-blue-400" />
            <span>DeepSeek R1 Reasoning</span>
          </div>
          <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
            873+ Exercises
          </span>
        </div>

        <div className="relative z-10 space-y-2 my-auto">
          <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10">
            <div className="text-[10px] font-mono text-sky-400">Personalized Posture Routine</div>
            <div className="text-xs text-white font-medium">DeepSeek R1 AI recommendation workflow</div>
          </div>

          <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-between text-[10px] font-mono text-slate-200">
            <span>Decathlon Product Matching Engine</span>
            <span className="text-emerald-400 font-semibold">Matched</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/10">
          <span>React &bull; TypeScript &bull; Tailwind CSS</span>
          <span className="text-blue-400">Health AI</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`glass-panel rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#6366F1]/50 hover:shadow-2xl hover:shadow-indigo-500/10 ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="p-6 sm:p-8">
        <div className="mb-6">{renderVisualMockup()}</div>

        <div className="mb-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#06B6D4]">
              <Sparkles className="w-3 h-3" />
              <span>{project.category}</span>
            </div>
            {isFeatured && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full font-mono">
                Featured Flagship
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-slate-300 mt-1">{project.subtitle}</p>
        </div>

        {/* Description Bullets */}
        <div className="space-y-2 mb-6">
          {project.description.slice(0, 4).map((desc, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-2 shrink-0" />
              <span>{desc}</span>
            </div>
          ))}
        </div>

        {/* Highlights Badges */}
        <div className="mb-6">
          <div className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
            Key Capabilities
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.highlights.map((h) => (
              <span
                key={h}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 border border-white/10 text-slate-200"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Technologies Pills */}
        <div>
          <div className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
            Technologies
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#6366F1]/10 text-indigo-300 border border-[#6366F1]/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Bar */}
      <div className="px-6 py-4 sm:px-8 border-t border-white/10 bg-slate-900/40 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-panel border border-white/10 text-slate-400 hover:text-white"
              aria-label={`${project.title} GitHub`}
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-panel border border-white/10 text-[#06B6D4] hover:text-white"
              aria-label={`${project.title} Live Demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#06B6D4] hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02] transition-all cursor-pointer ml-auto"
        >
          <Info className="w-4 h-4" />
          <span>View Case Study &amp; Demo</span>
        </button>
      </div>
    </div>
  )
}
