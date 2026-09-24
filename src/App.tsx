import { useState } from 'react'
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
import { CustomCursor } from './components/CustomCursor'
import { Sparkles } from 'lucide-react'

export function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false)
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#18181B] flex flex-col relative transition-colors duration-300 selection:bg-[#FCE7F3] selection:text-[#DB2777]">
      {/* Desktop Custom Cursor with VIEW & PLAY states */}
      <CustomCursor />

      {/* Subtle Animated Technology Background with Pink Glows and Floating AI Network */}
      <AnimatedBackground />

      {/* Sticky Top Glass Navbar */}
      <Navbar
        onOpenAIAssistant={() => setIsAIAssistantOpen(true)}
      />

      {/* Main Content Sections with Smooth Flow */}
      <main className="flex-1 w-full overflow-hidden relative z-10">
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />
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
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-white/90 backdrop-blur-xl border border-[#F3D6E5] text-[#18181B] font-mono text-xs font-semibold shadow-xl shadow-pink-500/15 hover:border-[#EC4899] hover:shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Ask Mariem's AI"
          data-cursor="interactive"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EC4899] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EC4899]"></span>
          </span>
          <span className="font-sans font-bold text-sm tracking-tight text-[#18181B] group-hover:text-[#EC4899] transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
            Ask Mariem's AI
          </span>
        </button>
      </div>

      {/* CV Download / Print Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />

      {/* Grounded AI Assistant Modal */}
      <AIAssistantModal
        isOpen={isAIAssistantOpen}
        onClose={() => setIsAIAssistantOpen(false)}
      />
    </div>
  )
}
