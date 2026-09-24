import React, { useEffect } from 'react'
import {
  X,
  Sparkles,
  Layers,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  BookOpen,
} from 'lucide-react'
import type { Project } from '../data/portfolio'
import { GitHubIcon } from './SocialIcons'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const { modalDetails } = project

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6366F1]/15 border border-[#6366F1]/30 text-xs font-mono text-[#06B6D4] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-1">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full glass-panel border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="py-6 space-y-8">
          {/* Overview */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#06B6D4] mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Project Overview</span>
            </h3>
            <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
              {modalDetails.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-sm font-mono text-rose-400 font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Problem</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {modalDetails.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#6366F1]/10 border border-[#6366F1]/30">
              <h4 className="text-sm font-mono text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Solution</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {modalDetails.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#06B6D4] mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Key Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {modalDetails.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#06B6D4] mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Technologies</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/5 border border-white/15 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-300 mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Architecture</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {modalDetails.architecture}
            </p>
          </div>

          {/* Challenges & What I Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-sm font-mono text-amber-300 font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Technical Challenges</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {modalDetails.challenges}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-sm font-mono text-[#06B6D4] font-semibold mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                <span>What I Learned</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {modalDetails.whatILearned}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Show GitHub only if valid URL exists */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white glass-panel border border-white/20 hover:border-white"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {/* Show Live Demo only if valid URL exists */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#06B6D4]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white glass-panel border border-white/20 hover:bg-white/10 transition-colors ml-auto cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  )
}
