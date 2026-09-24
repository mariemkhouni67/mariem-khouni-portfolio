import React, { useState, useEffect, useRef } from 'react'
import { Bot, X, Send, User, HelpCircle } from 'lucide-react'
import { ASSISTANT_KNOWLEDGE_BASE } from '../data/portfolio'

interface Message {
  id: string
  sender: 'user' | 'assistant'
  text: string
  timestamp: string
}

interface AIAssistantModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hello! I am Mariem's Portfolio AI Assistant. I can answer questions about Mariem's projects (StudyMate, TravelScape, Decathlon Posture Coach), her skills in Full-Stack and AI/RAG, education at ISSAT, and internship availability for Feb 2027. What would you like to know?`,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickPrompts = [
    'What projects has Mariem built?',
    'What AI technologies does she use?',
    'Tell me about StudyMate.',
    "What is Mariem's experience with AI agents?",
    'What technologies does she use for backend development?',
    'How does she use RAG?',
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  // Grounded deterministic semantic lookup
  const generateGroundedAnswer = (query: string): string => {
    const qLower = query.toLowerCase()

    // 1. Direct FAQ match
    const matchedFaq = ASSISTANT_KNOWLEDGE_BASE.find(
      (f) =>
        f.question.toLowerCase() === qLower ||
        f.tags.some((tag) => qLower.includes(tag))
    )

    if (matchedFaq) {
      return matchedFaq.answer
    }

    // 2. Keyword fallback grounded strictly in real data
    if (qLower.includes('studymate')) {
      return `StudyMate is Mariem's flagship full-stack AI platform built with React, TypeScript, Node.js, MySQL, and Docker. It integrates DeepSeek summaries, a RAG chatbot using ChromaDB and BGE-M3 embeddings, adaptive quizzes, and spaced-repetition flashcards.`
    }

    if (qLower.includes('travelscape')) {
      return `TravelScape is a full-stack MERN travel booking platform built with MongoDB, Express.js, React, Node.js, and Leaflet maps, featuring a 3D animated hero, glassmorphic UI, multilingual chatbot, and an admin CRUD dashboard.`
    }

    if (qLower.includes('decathlon') || qLower.includes('fitness') || qLower.includes('posture')) {
      return `Decathlon Posture Coach is an AI-powered fitness app developed with React, TypeScript, Node.js, Tailwind CSS, and DeepSeek R1 reasoning. It recommends personalized workouts from a database of 873+ exercises matched with Decathlon products.`
    }

    if (qLower.includes('education') || qLower.includes('school') || qLower.includes('issat') || qLower.includes('degree')) {
      return `Mariem is pursuing a Bachelor's Degree in Software Engineering and Information Systems (Licence en Génie Logiciel et Systèmes d'Information) at ISSAT (Institut Supérieur des Sciences Appliquées et de Technologie) from 2024 to June 2027.`
    }

    if (qLower.includes('internship') || qLower.includes('pfe') || qLower.includes('availability') || qLower.includes('hire')) {
      return `Mariem is seeking a final-year internship (PFE) starting February 2027. She specializes in full-stack web engineering and AI solutions. You can reach her at mariem.khouni@outlook.com or +216 94 852 832.`
    }

    if (qLower.includes('experience') || qLower.includes('sonede')) {
      return `Mariem completed an internship at SONEDE (Société Nationale d'Exploitation et de Distribution des Eaux) in Tunisia, focusing on information systems, organizational workflows, and utility business processes.`
    }

    if (qLower.includes('certif') || qLower.includes('azure') || qLower.includes('udemy') || qLower.includes('google')) {
      return `Mariem holds the Udemy Web Development Certification, is Microsoft Certified: Azure Fundamentals (AZ-900), and is currently completing Google's "AI Agents: Intensive Vibe Coding Course".`
    }

    if (qLower.includes('language') || qLower.includes('speak') || qLower.includes('french') || qLower.includes('english') || qLower.includes('arabic')) {
      return `Mariem is a Native Arabic speaker, Fluent in French, has Professional Working Proficiency in English, and Basic German.`
    }

    // Strict no-hallucination fallback
    return `Based strictly on Mariem's portfolio: She is a Software Engineering student at ISSAT specializing in full-stack web development (React, Next.js, Node.js, MySQL, MongoDB) and AI applications (DeepSeek, RAG with ChromaDB & BGE-M3, and AI agent workflows). Feel free to ask about her projects, skills, or PFE internship!`
  }

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue
    if (!text.trim()) return

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }

    setMessages((prev) => [...prev, userMsg])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      const responseText = generateGroundedAnswer(text)
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 600)
  }

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mariem's AI Assistant"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg h-[92vh] sm:h-[620px] rounded-t-3xl sm:rounded-3xl glass-panel border border-cyan-500/30 flex flex-col justify-between overflow-hidden shadow-2xl bg-[#090D1A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6366F1] to-[#06B6D4] p-[1.5px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#050816] rounded-[9px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#06B6D4]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white">Ask Mariem's AI</h3>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Grounded in Mariem Khouni's Verified Portfolio
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat message history */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user'

            return (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${
                  isUser ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    isUser
                      ? 'bg-[#6366F1] text-white'
                      : 'bg-[#06B6D4]/20 border border-[#06B6D4]/40 text-[#06B6D4]'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div
                  className={`max-w-[82%] p-3.5 rounded-2xl ${
                    isUser
                      ? 'bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white rounded-tr-none'
                      : 'glass-panel border border-white/10 text-slate-200 rounded-tl-none bg-slate-900/60'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  <span
                    className={`block text-[10px] mt-1.5 font-mono ${
                      isUser ? 'text-indigo-200' : 'text-slate-500'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            )
          })}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Bot className="w-4 h-4 text-[#06B6D4] animate-spin" />
              <span>Grounded knowledge search...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Question Chips */}
        <div className="px-4 py-2 border-t border-white/5 bg-slate-900/40">
          <div className="text-[10px] font-mono text-slate-400 mb-1.5 flex items-center gap-1">
            <HelpCircle className="w-3 h-3 text-[#06B6D4]" />
            <span>Suggested Inquiries:</span>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {quickPrompts.slice(0, 3).map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-lg text-[11px] font-mono whitespace-nowrap bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#06B6D4]/50 transition-colors shrink-0 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input area */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="p-3 sm:p-4 border-t border-white/10 bg-slate-900/80 flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Ask about Mariem's AI, full-stack work, or PFE..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#06B6D4] transition-all"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="p-2.5 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#06B6D4] text-white disabled:opacity-40 hover:scale-105 transition-all cursor-pointer"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  )
}
