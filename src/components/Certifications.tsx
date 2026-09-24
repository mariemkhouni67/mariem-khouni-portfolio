import React from 'react'
import { Award, CheckCircle, Clock } from 'lucide-react'
import { CERTIFICATIONS } from '../data/portfolio'

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#6366F1]/30 text-xs font-mono text-[#06B6D4] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Certifications &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">
              Accreditations
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified credentials in cloud, web engineering, and modern AI agents.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const isInProgress = cert.status === 'In Progress'

            return (
              <div
                key={cert.name}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-[#6366F1]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-xl relative"
              >
                {isInProgress && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-mono text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                    <Clock className="w-3 h-3 animate-spin" />
                    <span>In Progress</span>
                  </div>
                )}

                <div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-4 text-[#06B6D4] group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono text-slate-400 block mb-1">
                    Issued by <strong className="text-slate-200">{cert.issuer}</strong>
                  </span>

                  <h3 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-[#06B6D4] transition-colors">
                    {cert.name}
                  </h3>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Status</span>
                  <span
                    className={`font-semibold flex items-center gap-1.5 ${
                      isInProgress ? 'text-amber-300' : 'text-emerald-400'
                    }`}
                  >
                    {!isInProgress ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Completed</span>
                      </>
                    ) : (
                      <>
                        <Clock className="w-3.5 h-3.5" />
                        <span>Active Learner</span>
                      </>
                    )}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
