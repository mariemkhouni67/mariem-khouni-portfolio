import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  Check,
  Copy,
  ExternalLink,
} from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolio'
import { LinkedInIcon } from './SocialIcons'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'prepared'>('idle')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create a structured mailto fallback
    const subject = encodeURIComponent(
      `PFE / Web & AI Opportunity: Inquiry from ${formData.name || 'Portfolio Visitor'}`
    )
    const body = encodeURIComponent(
      `Hi Mariem,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    )

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`

    // Trigger user mail client
    window.location.href = mailtoUrl
    setFormStatus('prepared')
  }

  return (
    <section id="contact" className="py-24 relative bg-grid-pattern">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#6366F1]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#6366F1]/30 text-xs font-mono text-[#06B6D4] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's build something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">
              together.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open for final-year internship (PFE) opportunities starting February 2027 and discussions on modern web and AI engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Reach out directly via email, phone, or connect on LinkedIn.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Email item with copy button */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group hover:border-[#6366F1]/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#6366F1]/20 text-[#818CF8]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#06B6D4] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 hover:border-[#06B6D4]/40 transition-all">
                <div className="p-2.5 rounded-xl bg-[#06B6D4]/20 text-[#06B6D4]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Phone</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-[#06B6D4] transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Location</div>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* LinkedIn item */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between hover:border-[#6366F1]/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">LinkedIn</div>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#06B6D4] transition-colors"
                    >
                      in/mariem-khouni
                    </a>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                  aria-label="Open LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Fill out this form to launch your default email client with a pre-formatted message.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="e.g. jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your team, project, or PFE internship opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#6366F1] to-[#06B6D4] hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.01] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {formStatus === 'prepared' && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 flex items-center justify-between">
                  <span>Email client opened! You can also copy mariem.khouni@outlook.com directly.</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="underline font-semibold ml-2 cursor-pointer"
                  >
                    Copy Email
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
