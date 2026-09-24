import React from 'react'
import { Award, CheckCircle, Clock, FileText } from 'lucide-react'
import type { CertificationItem } from '../data/portfolio'

interface CertificationCardProps {
  cert: CertificationItem
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ cert }) => {
  const isInProgress = cert.status === 'In Progress'

  return (
    <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-[#6366F1]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden">
      {/* Top Status Pill */}
      {isInProgress ? (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-mono text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
          <Clock className="w-3 h-3 animate-spin" />
          <span>In Progress</span>
        </div>
      ) : (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>Verified</span>
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

      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-1">
          <FileText className="w-3.5 h-3.5 text-slate-500" />
          <span>Credential File</span>
        </span>
        <span className="text-[11px] text-slate-400">
          /public/certificates/
        </span>
      </div>
    </div>
  )
}
