import React, { useEffect } from 'react'
import {
  X,
  Printer,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Award,
  Globe,
} from 'lucide-react'
import {
  PERSONAL_INFO,
  EDUCATION_ITEMS,
  EXPERIENCE_ITEMS,
  PROJECTS,
  SKILL_CATEGORIES,
  CERTIFICATIONS,
  LANGUAGES,
} from '../data/portfolio'
import { LinkedInIcon } from './SocialIcons'

interface CVModalProps {
  isOpen: boolean
  onClose: () => void
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mariem Khouni Curriculum Vitae"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel rounded-3xl border border-white/20 p-6 sm:p-10 shadow-2xl text-left bg-[#0B1120]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Controls (Hidden in print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Curriculum Vitae Preview &bull; Ready to Print / Save PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#06B6D4] hover:shadow-lg transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full glass-panel border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Container */}
        <div id="cv-print-content" className="text-slate-200 space-y-8 font-sans">
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base sm:text-lg font-semibold text-[#06B6D4] mt-1">
              {PERSONAL_INFO.shortTitle}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Target: <strong className="text-emerald-400">{PERSONAL_INFO.internshipTarget}</strong>
            </p>

            {/* Contact row */}
            <div className="flex flex-wrap gap-4 mt-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#06B6D4]" />
                {PERSONAL_INFO.location}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#6366F1]" />
                {PERSONAL_INFO.email}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <LinkedInIcon className="w-3.5 h-3.5 text-sky-400" />
                linkedin.com/in/mariem-khouni
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#06B6D4] mb-2 font-bold">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#06B6D4] mb-3 font-bold flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            {EDUCATION_ITEMS.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex flex-wrap justify-between items-start gap-1">
                  <h3 className="text-sm font-bold text-white">{edu.degree}</h3>
                  <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                </div>
                <p className="text-xs text-[#06B6D4] font-mono mt-0.5">{edu.degreeFr}</p>
                <p className="text-xs text-slate-300 mt-1">{edu.institution}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#06B6D4] mb-3 font-bold flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </h2>
            {EXPERIENCE_ITEMS.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex flex-wrap justify-between items-start gap-1 mb-1">
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {exp.role} -- {exp.company}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">{exp.companyFullName}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {exp.period} &bull; {exp.location}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-1 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#06B6D4] mb-3 font-bold flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4" />
              <span>Key Projects</span>
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                    <span className="text-[11px] font-mono text-[#06B6D4]">{proj.subtitle}</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mb-2">
                    Technologies: {proj.technologies.join(', ')}
                  </div>
                  <ul className="space-y-1">
                    {proj.description.slice(0, 3).map((d, dIdx) => (
                      <li key={dIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#06B6D4] mb-3 font-bold">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <strong className="text-slate-200 block mb-1">{cat.title}:</strong>
                  <span className="text-slate-300">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#06B6D4] mb-3 font-bold flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Certifications</span>
              </h2>
              <div className="space-y-2">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs flex justify-between items-center"
                  >
                    <div>
                      <div className="font-semibold text-white">{cert.name}</div>
                      <div className="text-slate-400 font-mono text-[10px]">{cert.issuer}</div>
                    </div>
                    <span
                      className={`text-[10px] font-mono font-medium ${
                        cert.status === 'Completed' ? 'text-emerald-400' : 'text-amber-300'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#06B6D4] mb-3 font-bold flex items-center gap-1.5">
                <Globe className="w-4 h-4" />
                <span>Languages</span>
              </h2>
              <div className="space-y-2">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.language}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs flex justify-between items-center"
                  >
                    <span className="font-semibold text-white">{lang.language}</span>
                    <span className="text-slate-300 font-mono">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
