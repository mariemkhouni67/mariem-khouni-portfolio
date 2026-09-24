import React from 'react'
import { Award } from 'lucide-react'
import { CERTIFICATIONS } from '../data/portfolio'
import { CertificationCard } from './CertificationCard'

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-28 relative bg-gradient-to-b from-white via-[#FFF8FC] to-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-[#FCE7F3]/60 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F3D6E5] shadow-sm text-xs font-mono font-medium text-[#EC4899] mb-3">
            <Award className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>CREDENTIALS &amp; LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight mb-4">
            Certifications &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#DB2777]">
              Learning
            </span>
          </h2>
          <p className="text-[#52525B] text-base sm:text-lg leading-relaxed">
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
