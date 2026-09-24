import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Languages } from './components/Languages'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CVModal } from './components/CVModal'

export function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return true // Default dark mode as specified
  })

  const [isCVModalOpen, setIsCVModalOpen] = useState(false)

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
      {/* Top Navbar */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-hidden">
        <Hero isDarkMode={isDarkMode} onOpenCV={() => setIsCVModalOpen(true)} />
        <About />
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

      {/* CV Download / Print Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  )
}

export default App
