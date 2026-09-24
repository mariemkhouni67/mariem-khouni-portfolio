import React, { useState, useEffect } from 'react'
import { Menu, X, Send, Bot } from 'lucide-react'

interface NavbarProps {
  onOpenAIAssistant: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAIAssistant }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'AI', href: '#ai' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navLinks.map((l) => l.href.substring(1))
      const scrollPosition = window.scrollY + 140

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5'
          : 'py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 glass-nav border border-[#F3D6E5] ${
            isScrolled ? 'shadow-lg shadow-pink-500/5 bg-white/90' : 'bg-white/80'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#EC4899] rounded-lg p-1"
            aria-label="Mariem Khouni Homepage"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#EC4899] via-[#F472B6] to-[#FBCFE8] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-pink-500/20">
              <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center">
                <span className="font-extrabold text-xs tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#DB2777]">
                  MK
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-[#18181B] group-hover:text-[#EC4899] transition-colors">
                Mariem Khouni
              </span>
              <span className="text-[10px] font-mono text-[#52525B] hidden sm:block">
                Software &bull; AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/70 border border-[#F3D6E5] rounded-full px-3 py-1 shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#EC4899]/15 to-[#F472B6]/15 text-[#DB2777] border border-[#EC4899]/30 shadow-xs'
                      : 'text-[#52525B] hover:text-[#18181B] hover:bg-pink-50/60'
                  }`}
                >
                  {link.name}
                </button>
              )
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Ask AI Trigger */}
            <button
              onClick={onOpenAIAssistant}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-[#DB2777] bg-[#FFF1F7] border border-[#F3D6E5] hover:border-[#EC4899] hover:bg-[#FCE7F3] shadow-xs transition-all cursor-pointer"
            >
              <Bot className="w-3.5 h-3.5 text-[#EC4899] animate-pulse" />
              <span>Ask AI</span>
            </button>

            {/* Let's Talk Button */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#EC4899] to-[#F472B6] hover:from-[#DB2777] hover:to-[#EC4899] shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              <span>Let's Talk</span>
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAIAssistant}
              className="p-2 rounded-full border border-[#F3D6E5] bg-[#FFF1F7] text-[#EC4899]"
              aria-label="Open AI Assistant"
            >
              <Bot className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-[#F3D6E5] bg-white text-[#18181B]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden max-w-7xl mx-auto px-4 mt-2">
          <div className="glass-panel rounded-3xl border border-[#F3D6E5] p-5 shadow-xl bg-white/95 animate-in fade-in duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[#FFF1F7] text-[#DB2777] border-l-4 border-[#EC4899]'
                        : 'text-[#52525B] hover:bg-pink-50/50 hover:text-[#18181B]'
                    }`}
                  >
                    {link.name}
                  </button>
                )
              })}
              <button
                onClick={() => handleNavClick('#contact')}
                className="mt-2 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#EC4899] to-[#F472B6] shadow-md shadow-pink-500/25"
              >
                <Send className="w-4 h-4" />
                <span>Let's Talk</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
