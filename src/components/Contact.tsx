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

    const subject = encodeURIComponent(
      `PFE / Web & AI Opportunity: Inquiry from ${formData.name || 'Portfolio Visitor'}`
    )
    const body = encodeURIComponent(
      `Hi Mariem,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    )

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`
    window.location.href = mailtoUrl
    setFormStatus('prepared')
  }

  return (
    <section id="contact" className="py-28 relative bg-gradient-to-b from-white via-[#FFF8FC] to-white">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#FBCFE8]/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FCE7F3]/60 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F3D6E5] shadow-sm text-xs font-mono font-medium text-[#EC4899] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight mb-4">
            Let's build something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#DB2777]">
              together.
            </span>
          </h2>
          <p className="text-[#52525B] text-base sm:text-lg leading-relaxed">
            Open for final-year internship (PFE) opportunities starting February 2027 and discussions on modern web and AI engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-[#F3D6E5] space-y-6 shadow-xl shadow-pink-500/5 bg-white/85">
            <div>
              <h3 className="text-xl font-bold text-[#18181B] mb-2">Direct Contact</h3>
              <p className="text-xs sm:text-sm text-[#52525B]">
                Reach out directly via email, phone, or connect on LinkedIn.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email row */}
              <div className="p-4 rounded-2xl bg-[#FFF8FC] border border-[#F3D6E5] flex items-center justify-between hover:border-[#EC4899]/50 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FFF1F7] border border-[#FBCFE8] text-[#EC4899] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#71717A]">Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#18181B] hover:text-[#EC4899] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white border border-[#F3D6E5] hover:border-[#EC4899]/50 text-[#52525B] hover:text-[#EC4899] transition-all cursor-pointer shadow-xs"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                  data-cursor="interactive"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone row */}
              <div className="p-4 rounded-2xl bg-[#FFF8FC] border border-[#F3D6E5] flex items-center gap-3 hover:border-[#EC4899]/50 transition-all">
                <div className="p-2.5 rounded-xl bg-[#FFF1F7] border border-[#FBCFE8] text-[#EC4899] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#71717A]">Phone</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-semibold text-[#18181B] hover:text-[#EC4899] transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location row */}
              <div className="p-4 rounded-2xl bg-[#FFF8FC] border border-[#F3D6E5] flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FFF1F7] border border-[#FBCFE8] text-[#EC4899] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#71717A]">Location</div>
                  <span className="text-xs sm:text-sm font-semibold text-[#18181B]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* LinkedIn row */}
              <div className="p-4 rounded-2xl bg-[#FFF8FC] border border-[#F3D6E5] flex items-center justify-between hover:border-[#EC4899]/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FFF1F7] border border-[#FBCFE8] text-[#EC4899] shrink-0">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#71717A]">LinkedIn</div>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-[#18181B] hover:text-[#EC4899] transition-colors"
                    >
                      in/mariem-khouni-691b01381
                    </a>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-[#F3D6E5] hover:border-[#EC4899]/50 text-[#52525B] hover:text-[#EC4899] transition-all shadow-xs"
                  aria-label="Open LinkedIn"
                  data-cursor="interactive"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-[#F3D6E5] shadow-xl shadow-pink-500/5 bg-white/85">
            <h3 className="text-xl font-bold text-[#18181B] mb-2">Send a Message</h3>
            <p className="text-xs sm:text-sm text-[#52525B] mb-7">
              Fill out this form to launch your email client with a pre-formatted message.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-mono font-semibold text-[#52525B] mb-1.5 uppercase tracking-wider">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF8FC] border border-[#F3D6E5] text-[#18181B] placeholder-[#A1A1AA] text-sm focus:outline-none focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 transition-all shadow-xs"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono font-semibold text-[#52525B] mb-1.5 uppercase tracking-wider">
                  Your Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="e.g. jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF8FC] border border-[#F3D6E5] text-[#18181B] placeholder-[#A1A1AA] text-sm focus:outline-none focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 transition-all shadow-xs"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono font-semibold text-[#52525B] mb-1.5 uppercase tracking-wider">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your team, project, or PFE internship opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF8FC] border border-[#F3D6E5] text-[#18181B] placeholder-[#A1A1AA] text-sm focus:outline-none focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 transition-all resize-none shadow-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#EC4899] to-[#F472B6] hover:from-[#DB2777] hover:to-[#EC4899] shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer"
                data-cursor="interactive"
              >
                <Send className="w-4 h-4" />
                <span>Send Message via Email</span>
              </button>

              {formStatus === 'prepared' && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 flex items-center justify-between font-medium">
                  <span>Email client opened! You can also copy the address directly.</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="underline font-bold ml-2 cursor-pointer hover:text-emerald-900 transition-colors"
                    data-cursor="interactive"
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
