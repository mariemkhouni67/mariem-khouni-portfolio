import React from 'react'
import { Award } from 'lucide-react'
import { CERTIFICATIONS } from '../data/portfolio'
import { CertificationCard } from './CertificationCard'

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#6366F1]/30 text-xs font-mono text-[#06B6D4] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS &amp; LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Certifications &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">
              Learning
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified qualifications in web engineering, cloud infrastructure (Azure AZ-900), and intensive AI agent systems.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
