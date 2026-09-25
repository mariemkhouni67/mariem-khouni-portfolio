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
  BrainCircuit,
  Video,
} from 'lucide-react'
import type { Project } from '../data/portfolio'
import { GitHubIcon } from './SocialIcons'
import { VideoDemo } from './VideoDemo'

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-[#F3D6E5] p-6 sm:p-8 shadow-2xl text-left bg-white/95 backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-[#F3D6E5]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF1F7] border border-[#FBCFE8] text-xs font-mono font-bold text-[#DB2777] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
              <span>{project.category}</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#18181B]">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#52525B] mt-1">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white border border-[#F3D6E5] text-[#52525B] hover:text-[#EC4899] hover:border-[#EC4899]/50 transition-all cursor-pointer shadow-xs"
            aria-label="Close project modal"
            data-cursor="interactive"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="py-6 space-y-8">
          {/* Project Demo Video Area */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#DB2777] font-bold mb-3 flex items-center gap-2">
              <Video className="w-4 h-4 text-[#EC4899]" />
              <span>Project Demo Walkthrough</span>
            </h3>
            <VideoDemo
              projectTitle={project.title}
              videoUrl={modalDetails.videoDemoUrl}
              posterUrl={modalDetails.posterUrl}
            />
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#DB2777] font-bold mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#EC4899]" />
              <span>Project Overview</span>
            </h3>
            <p className="text-[#18181B] leading-relaxed text-sm sm:text-base font-normal">
              {modalDetails.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#FFF8FC] border border-[#F3D6E5]">
              <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase font-mono mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                {modalDetails.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFF1F7] border border-[#FBCFE8]">
              <div className="flex items-center gap-2 text-[#DB2777] font-bold text-xs uppercase font-mono mb-2">
                <Lightbulb className="w-4 h-4 text-[#EC4899]" />
                <span>Technical Solution Architecture</span>
              </div>
              <p className="text-xs sm:text-sm text-[#18181B] leading-relaxed">
                {modalDetails.solution}
              </p>
            </div>
          </div>

          {/* Architecture Overview */}
          {modalDetails.architecture && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#DB2777] font-bold mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#EC4899]" />
                <span>Architecture Overview</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#18181B] leading-relaxed p-4 rounded-xl bg-[#FFF8FC] border border-[#F3D6E5]">
                {modalDetails.architecture}
              </p>
            </div>
          )}

          {/* Key Features */}
          {modalDetails.features && modalDetails.features.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#DB2777] font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Key Features</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {modalDetails.features.map((feature: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#F3D6E5] flex items-start gap-2.5 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#18181B] leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Components Deep-Dive */}
          {modalDetails.aiComponents && modalDetails.aiComponents.length > 0 && (
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FFF1F7] via-white to-[#FFF8FC] border border-[#FBCFE8]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#DB2777] font-bold mb-3 flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-[#EC4899]" />
                <span>AI Engineering &amp; Model Integration</span>
              </h3>
              <ul className="space-y-2">
                {modalDetails.aiComponents.map((cap: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#18181B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Detailed Tech Stack Badges */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#DB2777] font-bold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#EC4899]" />
              <span>Full Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {modalDetails.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl bg-[#FFF8FC] border border-[#F3D6E5] text-xs font-mono font-medium text-[#18181B] shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="pt-6 border-t border-[#F3D6E5] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white border border-[#F3D6E5] text-xs font-mono font-semibold text-[#18181B] hover:text-[#EC4899] hover:border-[#EC4899]/50 flex items-center gap-2 transition-all shadow-xs"
                data-cursor="interactive"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white text-xs font-mono font-semibold flex items-center gap-2 shadow-md shadow-pink-500/20 hover:scale-105 transition-all"
                data-cursor="interactive"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Application</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#FFF1F7] text-xs font-mono font-semibold text-[#DB2777] border border-[#FBCFE8] hover:bg-[#FCE7F3] transition-colors cursor-pointer"
            data-cursor="interactive"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  )
}
