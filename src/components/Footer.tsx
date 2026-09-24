import React from 'react'
import { Mail, ArrowUp } from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolio'
import { LinkedInIcon, GitHubIcon } from './SocialIcons'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#F3D6E5] bg-white py-12 relative">
      {/* Soft pink ambient at top of footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#EC4899]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-1.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#EC4899] to-[#F472B6] p-[1.5px]">
                <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-xs text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#DB2777]">
                    MK
                  </span>
                </div>
              </div>
              <span className="font-bold text-lg text-[#18181B] tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#52525B]">
              {PERSONAL_INFO.shortTitle}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-[#F3D6E5] text-[#52525B] hover:text-[#EC4899] hover:border-[#EC4899]/50 hover:shadow-md hover:shadow-pink-500/10 transition-all shadow-xs"
              aria-label="LinkedIn Profile"
              data-cursor="interactive"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-[#F3D6E5] text-[#52525B] hover:text-[#18181B] hover:border-[#EC4899]/50 hover:shadow-md hover:shadow-pink-500/10 transition-all shadow-xs"
              aria-label="GitHub Profile"
              data-cursor="interactive"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-white border border-[#F3D6E5] text-[#52525B] hover:text-[#EC4899] hover:border-[#EC4899]/50 hover:shadow-md hover:shadow-pink-500/10 transition-all shadow-xs"
              aria-label="Send Email"
              data-cursor="interactive"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#FFF1F7] border border-[#FBCFE8] text-[#EC4899] hover:bg-gradient-to-r hover:from-[#EC4899] hover:to-[#F472B6] hover:text-white hover:border-transparent hover:shadow-md hover:shadow-pink-500/20 transition-all cursor-pointer shadow-xs"
              aria-label="Back to top"
              data-cursor="interactive"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#F3D6E5] flex flex-col sm:flex-row items-center justify-between text-xs text-[#71717A] font-mono gap-4">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with React, TypeScript &amp; Three.js</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] animate-pulse"></span>
          </p>
        </div>
      </div>
    </footer>
  )
}
