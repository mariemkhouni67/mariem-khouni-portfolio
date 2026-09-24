import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Send, Bot } from 'lucide-react'

interface NavbarProps {
  isDarkMode: boolean
  toggleTheme: () => void
  onOpenAIAssistant: () => void
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  toggleTheme,
  onOpenAIAssistant,
}) => {
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
          ? 'glass-nav py-2.5 shadow-xl shadow-black/20'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#6366F1] rounded-lg p-1"
            aria-label="Mariem Khouni Homepage"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-indigo-500/20">
              <div className="w-full h-full bg-[#050816] rounded-[9px] flex items-center justify-center">
                <span className="font-extrabold text-xs tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">
                  MK
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-[#06B6D4] transition-colors">
                Mariem Khouni
              </span>
              <span className="text-[10px] font-mono text-[#94A3B8] hidden sm:block">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/70 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#6366F1]/20 to-[#06B6D4]/20 text-white border border-[#6366F1]/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              )
            })}
          </nav>

          {/* Actions: AI Assistant, Theme Toggle & Let's Talk CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Ask Mariem's AI Assistant Button */}
            <button
              onClick={onOpenAIAssistant}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-cyan-200 glass-panel border border-[#06B6D4]/40 hover:border-[#06B6D4] hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer bg-[#06B6D4]/10"
              aria-label="Open AI Assistant"
            >
              <Bot className="w-3.5 h-3.5 text-[#06B6D4] animate-pulse" />
              <span>Ask AI</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-xl border border-white/10 bg-slate-900/60 text-slate-300 hover:text-white hover:border-[#6366F1]/50 transition-all cursor-pointer"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400" />
              )}
            </button>

            {/* Let's Talk Button */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              <span>Let's Talk</span>
            </button>
          </div>

          {/* Mobile Menu & Quick AI Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAIAssistant}
              className="p-2 rounded-lg border border-[#06B6D4]/40 bg-[#06B6D4]/15 text-[#06B6D4]"
              aria-label="Open AI Assistant"
            >
              <Bot className="w-4 h-4" />
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-white/10 bg-slate-900/60 text-slate-300"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 bg-slate-900/60 text-slate-200 hover:text-white"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-nav border-b border-white/10 mt-2 px-4 py-4 animate-in fade-in duration-200 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#6366F1]/20 text-[#06B6D4] font-semibold border-l-2 border-[#06B6D4]'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              )
            })}
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#06B6D4] shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Let's Talk</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
