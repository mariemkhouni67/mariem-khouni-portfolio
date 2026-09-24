import React from 'react'
import { Mail, ArrowUp } from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolio'
import { LinkedInIcon, GitHubIcon } from './SocialIcons'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-[#03050e] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-1.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#6366F1] to-[#06B6D4] p-[1.5px]">
                <div className="w-full h-full bg-[#050816] rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-xs text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">
                    MK
                  </span>
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              {PERSONAL_INFO.shortTitle}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-panel border border-white/10 text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-panel border border-white/10 text-slate-400 hover:text-white hover:border-white/40 transition-all"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl glass-panel border border-white/10 text-slate-400 hover:text-[#6366F1] hover:border-[#6366F1]/40 transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl glass-panel border border-white/10 text-slate-400 hover:text-white hover:border-white/40 transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with React, TypeScript &amp; Three.js</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          </p>
        </div>
      </div>
    </footer>
  )
}
