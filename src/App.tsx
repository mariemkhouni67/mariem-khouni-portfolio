import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { AIAgentsSection } from './components/AIAgentsSection'
import { AIWorkflow } from './components/AIWorkflow'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Languages } from './components/Languages'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CVModal } from './components/CVModal'
import { AIAssistantModal } from './components/AIAssistantModal'
import { AnimatedBackground } from './components/AnimatedBackground'
import { CursorGlow } from './components/CursorGlow'

export function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return true // Default dark mode as specified
  })

  const [isCVModalOpen, setIsCVModalOpen] = useState(false)
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] flex flex-col relative transition-colors duration-300">
      {/* Animated Subtle Engineering & AI Background */}
      <AnimatedBackground />

      {/* Desktop Ambient Cursor Glow */}
      <CursorGlow />

      {/* Sticky Top Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        onOpenAIAssistant={() => setIsAIAssistantOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-hidden relative z-10">
        <Hero isDarkMode={isDarkMode} onOpenCV={() => setIsCVModalOpen(true)} />
        <About />
        <AIAgentsSection />
        <AIWorkflow />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Languages />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button for Mariem's AI Assistant */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsAIAssistantOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] text-white font-mono text-xs font-semibold shadow-2xl shadow-cyan-500/30 hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer"
          aria-label="Ask Mariem's AI"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <span>Ask Mariem's AI</span>
        </button>
      </div>

      {/* CV Download / Print Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />

      {/* AI Assistant Modal */}
      <AIAssistantModal
        isOpen={isAIAssistantOpen}
        onClose={() => setIsAIAssistantOpen(false)}
      />
    </div>
  )
}

export default App
