import React, { useState, useRef } from 'react'
import {
  ExternalLink,
  Info,
  Sparkles,
  Bot,
  Compass,
  Activity,
  ArrowRight,
  Video,
} from 'lucide-react'
import type { Project } from '../data/portfolio'
import { GitHubIcon } from './SocialIcons'
import { VideoDemo } from './VideoDemo'

interface ProjectCardProps {
  project: Project
  index: number
  onSelect: (project: Project) => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onSelect,
}) => {
  const [activeVisualTab, setActiveVisualTab] = useState<'mockup' | 'video'>('mockup')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const isEven = index % 2 === 0

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const renderVisualMockup = () => {
    if (project.id === 'studymate') {
      return (
        <div className="relative w-full h-80 sm:h-96 rounded-2xl bg-gradient-to-br from-white via-[#FFF8FC] to-[#FFF1F7] border border-[#F3D6E5] p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner">
          {/* Subtle decorative glow */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#FBCFE8]/50 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar: DeepSeek & RAG Indicator */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#FBCFE8] text-xs font-mono font-semibold text-[#DB2777] shadow-xs">
              <Bot className="w-3.5 h-3.5 text-[#EC4899]" />
              <span>DeepSeek + ChromaDB (BGE-M3)</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Bilingual Interface
            </span>
          </div>

          {/* Middle: Simulated Interactive AI Knowledge & Flashcard Card */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-auto">
            <div className="p-4 rounded-2xl bg-white/95 border border-[#F3D6E5] shadow-md shadow-pink-500/5 hover:border-[#EC4899]/50 transition-all">
              <div className="text-[10px] font-mono text-[#DB2777] font-bold mb-1">RAG Context Query</div>
              <div className="text-xs sm:text-sm text-[#18181B] font-bold truncate">Course Summaries &amp; Notes</div>
              <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-[#71717A] font-mono">
                <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-pulse"></span>
                ChromaDB Vector Retrieval
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/95 border border-[#FBCFE8] shadow-md shadow-pink-500/5 hover:border-[#EC4899] transition-all">
              <div className="text-[10px] font-mono text-[#EC4899] font-bold mb-1">Gamified Retention</div>
              <div className="text-xs sm:text-sm text-[#18181B] font-bold truncate">Adaptive Flashcards &amp; Quizzes</div>
              <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-emerald-600 font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Streak Tracking Active
              </div>
            </div>
          </div>

          {/* Bottom Bar: Architecture Footprint */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#71717A] pt-3 border-t border-[#F3D6E5]">
            <span>MySQL &bull; Docker Containerized</span>
            <span className="text-[#EC4899] font-bold">AI Study Platform</span>
          </div>
        </div>
      )
    }

    if (project.id === 'travelscape') {
      return (
        <div className="relative w-full h-80 sm:h-96 rounded-2xl bg-gradient-to-br from-white via-[#FFF8FC] to-[#FFF1F7] border border-[#F3D6E5] p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#FBCFE8]/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#FBCFE8] text-xs font-mono font-semibold text-[#DB2777] shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#EC4899]" />
              <span>Leaflet Interactive Maps &bull; MERN</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
              3D Animated Hero
            </span>
          </div>

          <div className="relative z-10 space-y-3 my-auto">
            <div className="p-4 rounded-2xl bg-white/95 border border-[#F3D6E5] shadow-md shadow-pink-500/5 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-[#DB2777] font-bold">Destination Discovery</div>
                <div className="text-xs sm:text-sm text-[#18181B] font-bold">Real-Time Bookings &amp; Reviews</div>
              </div>
              <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                CRUD Admin
              </span>
            </div>

            <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/90 border border-[#FBCFE8] text-xs font-mono text-[#18181B]">
              <span>Multilingual Conversational Chatbot</span>
              <span className="text-[#EC4899] font-bold">&bull; Integrated</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#71717A] pt-3 border-t border-[#F3D6E5]">
            <span>MongoDB &bull; Express &bull; React &bull; Node</span>
            <span className="text-[#EC4899] font-bold">Travel &amp; Hospitality</span>
          </div>
        </div>
      )
    }

    // Default: Decathlon Posture Coach
    return (
      <div className="relative w-full h-80 sm:h-96 rounded-2xl bg-gradient-to-br from-white via-[#FFF8FC] to-[#FFF1F7] border border-[#F3D6E5] p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner">
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#FBCFE8]/50 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#FBCFE8] text-xs font-mono font-semibold text-[#DB2777] shadow-xs">
            <Activity className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>DeepSeek R1 + 873+ Exercises</span>
          </div>
          <span className="text-[10px] font-mono font-bold text-[#DB2777] bg-[#FFF1F7] px-2.5 py-1 rounded-full border border-[#FBCFE8]">
            Decathlon Matching
          </span>
        </div>

        <div className="relative z-10 space-y-3 my-auto">
          <div className="p-4 rounded-2xl bg-white/95 border border-[#F3D6E5] shadow-md shadow-pink-500/5">
            <div className="text-[10px] font-mono text-[#DB2777] font-bold mb-1">
              Personalized Posture &amp; Fitness Plan
            </div>
            <div className="text-xs sm:text-sm text-[#18181B] font-bold">
              Dynamic Injury-Prevention Advice &amp; Sets
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#FFF1F7] to-white border border-[#FBCFE8] flex items-center justify-between text-xs font-mono">
            <span className="text-[#18181B] font-medium">Decathlon Catalog Match</span>
            <span className="text-[#EC4899] font-bold">873+ Verified Items</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#71717A] pt-3 border-t border-[#F3D6E5]">
          <span>Full-Stack Architecture &bull; AI Agent</span>
          <span className="text-[#EC4899] font-bold">HealthTech &bull; AI</span>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-3xl bg-white/85 backdrop-blur-xl border border-[#F3D6E5] p-6 sm:p-10 shadow-xl shadow-pink-500/5 hover:border-[#EC4899]/70 hover:shadow-2xl hover:shadow-pink-500/15 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group"
      data-cursor="project"
    >
      {/* Magnetic Spotlight Radial Overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(circle 450px at ${mousePos.x}px ${mousePos.y}px, rgba(236, 72, 153, 0.08), transparent 70%)`,
          }}
        />
      )}

      {/* Alternating Layout Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* VISUAL SHOWCASE COLUMN */}
        <div
          className={`lg:col-span-7 ${
            isEven ? 'order-1' : 'order-1 lg:order-2'
          }`}
        >
          {/* Visual Mode Switcher (Mockup vs. Video Demo) */}
          <div className="flex items-center justify-between mb-4">
            <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-[#FFF8FC] border border-[#F3D6E5] shadow-xs">
              <button
                onClick={() => setActiveVisualTab('mockup')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeVisualTab === 'mockup'
                    ? 'bg-white text-[#EC4899] shadow-xs border border-[#FBCFE8]'
                    : 'text-[#71717A] hover:text-[#18181B]'
                }`}
                data-cursor="interactive"
              >
                Architecture Mockup
              </button>
              <button
                onClick={() => setActiveVisualTab('video')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeVisualTab === 'video'
                    ? 'bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white shadow-xs'
                    : 'text-[#71717A] hover:text-[#18181B]'
                }`}
                data-cursor="video"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Video Demo</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-[#DB2777] font-semibold hidden sm:inline-block">
              Case Study #{index + 1}
            </span>
          </div>

          {/* Active Visual Render */}
          <div className="relative transition-all duration-300">
            {activeVisualTab === 'mockup' ? (
              renderVisualMockup()
            ) : (
              <VideoDemo
                projectId={project.id}
                projectTitle={project.title}
                videoUrl={project.modalDetails.videoDemoUrl}
                posterUrl={project.modalDetails.posterUrl}
              />
            )}
          </div>
        </div>

        {/* DETAILS & NARRATIVE COLUMN */}
        <div
          className={`lg:col-span-5 flex flex-col justify-between ${
            isEven ? 'order-2' : 'order-2 lg:order-1'
          }`}
        >
          <div>
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF1F7] border border-[#FBCFE8] text-xs font-mono font-bold text-[#DB2777] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
              <span>{project.category}</span>
            </div>

            {/* Huge Project Title with subtle hover shift */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#18181B] tracking-tight mb-3 group-hover:text-[#EC4899] group-hover:translate-x-1 transition-all duration-200">
              {project.title}
            </h3>

            {/* Subtitle / Tagline */}
            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mb-6 font-normal">
              {project.subtitle}
            </p>

            {/* Key Technical Highlights */}
            <div className="space-y-2.5 mb-6">
              {project.highlights.map((point, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#18181B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] mt-2 shrink-0"></span>
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            {/* Interactive Technology Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-[#FFF8FC] border border-[#F3D6E5] text-xs font-mono font-medium text-[#18181B] shadow-xs group-hover:border-[#EC4899]/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links & CTA */}
          <div className="pt-6 border-t border-[#F3D6E5] flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelect(project)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white text-xs font-mono font-semibold flex items-center gap-2 shadow-md shadow-pink-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              data-cursor="interactive"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Architecture Deep Dive</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl bg-white border border-[#F3D6E5] text-xs font-mono font-semibold text-[#18181B] hover:text-[#EC4899] hover:border-[#EC4899]/50 flex items-center gap-1.5 transition-all shadow-xs"
                data-cursor="interactive"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-[#F3D6E5] text-[#52525B] hover:text-[#18181B] hover:border-[#EC4899]/50 transition-all shadow-xs"
                aria-label="GitHub Repository"
                data-cursor="interactive"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
