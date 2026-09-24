import React, { useState } from 'react'
import { FolderGit2 } from 'lucide-react'
import { PROJECTS } from '../data/portfolio'
import type { Project } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-gradient-to-b from-white via-[#FFF8FC] to-white">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FCE7F3]/70 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F3D6E5] shadow-sm text-xs font-mono font-medium text-[#EC4899] mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight mb-4">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#DB2777]">
              Projects
            </span>
          </h2>
          <p className="text-[#52525B] text-base sm:text-lg leading-relaxed">
            Full-stack architectures and AI integrations built with modern engineering standards.
          </p>
        </div>

        {/* Project Cards Large Alternating Layout */}
        <div className="space-y-12 sm:space-y-16">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
