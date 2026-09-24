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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-[#F3D6E5] p-6 sm:p-10 shadow-2xl text-left bg-white/96 backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Controls (Hidden in print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#F3D6E5] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#52525B] font-semibold">
              CV Preview &bull; Ready to Print / Save PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#EC4899] to-[#F472B6] hover:from-[#DB2777] hover:to-[#EC4899] shadow-md shadow-pink-500/20 hover:scale-105 transition-all cursor-pointer"
              data-cursor="interactive"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white border border-[#F3D6E5] text-[#52525B] hover:text-[#EC4899] hover:border-[#EC4899]/50 transition-all cursor-pointer shadow-xs"
              aria-label="Close CV Modal"
              data-cursor="interactive"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Container — clean light theme */}
        <div id="cv-print-content" className="text-[#18181B] space-y-8 font-sans">
          {/* Header */}
          <div className="border-b border-[#F3D6E5] pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base sm:text-lg font-semibold text-[#EC4899] mt-1">
              {PERSONAL_INFO.shortTitle}
            </p>
            <p className="text-xs sm:text-sm text-[#52525B] mt-1">
              Target: <strong className="text-emerald-600">{PERSONAL_INFO.internshipTarget}</strong>
            </p>

            {/* Contact row */}
            <div className="flex flex-wrap gap-4 mt-4 text-xs font-mono text-[#52525B]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#EC4899]" />
                {PERSONAL_INFO.location}
              </span>
              <span className="text-[#F472B6]">&bull;</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#EC4899]" />
                {PERSONAL_INFO.email}
              </span>
              <span className="text-[#F472B6]">&bull;</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#EC4899]" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="text-[#F472B6]">&bull;</span>
              <span className="flex items-center gap-1.5">
                <LinkedInIcon className="w-3.5 h-3.5 text-[#EC4899]" />
                linkedin.com/in/mariem-khouni
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#DB2777] mb-2 font-bold">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#DB2777] mb-3 font-bold flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#EC4899]" />
              <span>Education</span>
            </h2>
            {EDUCATION_ITEMS.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FFF8FC] border border-[#F3D6E5]">
                <div className="flex flex-wrap justify-between items-start gap-1">
                  <h3 className="text-sm font-bold text-[#18181B]">{edu.degree}</h3>
                  <span className="text-xs font-mono text-[#52525B]">{edu.period}</span>
                </div>
                <p className="text-xs text-[#DB2777] font-mono mt-0.5 font-semibold">{edu.degreeFr}</p>
                <p className="text-xs text-[#52525B] mt-1">{edu.institution}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#DB2777] mb-3 font-bold flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-[#EC4899]" />
              <span>Experience</span>
            </h2>
            {EXPERIENCE_ITEMS.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FFF8FC] border border-[#F3D6E5]">
                <div className="flex flex-wrap justify-between items-start gap-1 mb-1">
                  <div>
                    <h3 className="text-sm font-bold text-[#18181B]">
                      {exp.role} — {exp.company}
                    </h3>
                    <p className="text-xs text-[#52525B] font-medium">{exp.companyFullName}</p>
                  </div>
                  <span className="text-xs font-mono text-[#52525B]">
                    {exp.period} &bull; {exp.location}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs text-[#18181B] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] mt-1 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#DB2777] mb-3 font-bold flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4 text-[#EC4899]" />
              <span>Key Projects</span>
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-[#FFF8FC] border border-[#F3D6E5]">
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h3 className="text-sm font-bold text-[#18181B]">{proj.title}</h3>
                    <span className="text-[11px] font-mono text-[#EC4899] font-semibold">{proj.subtitle}</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#52525B] mb-2">
                    Technologies: {proj.technologies.join(', ')}
                  </div>
                  <ul className="space-y-1">
                    {proj.description.slice(0, 3).map((d, dIdx) => (
                      <li key={dIdx} className="text-xs text-[#18181B] flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#EC4899] mt-1.5 shrink-0" />
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
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#DB2777] mb-3 font-bold">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-2.5 rounded-lg bg-[#FFF8FC] border border-[#F3D6E5]">
                  <strong className="text-[#18181B] block mb-1 font-bold">{cat.title}:</strong>
                  <span className="text-[#52525B]">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#DB2777] mb-3 font-bold flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#EC4899]" />
                <span>Certifications</span>
              </h2>
              <div className="space-y-2">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-2.5 rounded-lg bg-[#FFF8FC] border border-[#F3D6E5] text-xs flex justify-between items-center"
                  >
                    <div>
                      <div className="font-bold text-[#18181B]">{cert.name}</div>
                      <div className="text-[#52525B] font-mono text-[10px]">{cert.issuer}</div>
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold ${
                        cert.status === 'Completed' ? 'text-emerald-600' : 'text-amber-600'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#DB2777] mb-3 font-bold flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#EC4899]" />
                <span>Languages</span>
              </h2>
              <div className="space-y-2">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.language}
                    className="p-2.5 rounded-lg bg-[#FFF8FC] border border-[#F3D6E5] text-xs flex justify-between items-center"
                  >
                    <span className="font-bold text-[#18181B]">{lang.language}</span>
                    <span className="text-[#52525B] font-mono font-medium">{lang.proficiency}</span>
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
