import React, { useState } from 'react'
import { FolderGit2 } from 'lucide-react'
import { PROJECTS } from '../data/portfolio'
import type { Project } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6366F1]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#6366F1]/30 text-xs font-mono text-[#06B6D4] mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#06B6D4]">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Full-stack architectures and AI integrations built with modern engineering standards.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
              isFeatured={idx === 0}
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
