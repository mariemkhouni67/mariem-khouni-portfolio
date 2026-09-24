import React from 'react'
import { Award, CheckCircle, Clock, FileText } from 'lucide-react'
import type { CertificationItem } from '../data/portfolio'

interface CertificationCardProps {
  cert: CertificationItem
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ cert }) => {
  const isInProgress = cert.status === 'In Progress'

  return (
    <div
      className="glass-panel p-6 sm:p-7 rounded-3xl border border-[#F3D6E5] hover:border-[#EC4899] hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-sm relative overflow-hidden bg-white/85"
      data-cursor="interactive"
    >
      {/* Top Status Pill */}
      {isInProgress ? (
        <div className="absolute top-5 right-5 flex items-center gap-1.5 text-[10px] font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
          <Clock className="w-3 h-3 animate-spin" />
          <span>In Progress</span>
        </div>
      ) : (
        <div className="absolute top-5 right-5 flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>Verified</span>
        </div>
      )}

      <div>
        <div className="p-3.5 rounded-2xl bg-[#FFF1F7] border border-[#FBCFE8] w-fit mb-4 text-[#EC4899] group-hover:scale-110 group-hover:bg-[#FCE7F3] transition-all shadow-xs">
          <Award className="w-7 h-7" />
        </div>

        <span className="text-xs font-mono text-[#71717A] block mb-1">
          Issued by <strong className="text-[#18181B] font-bold">{cert.issuer}</strong>
        </span>

        <h3 className="text-lg font-bold text-[#18181B] leading-snug mb-3 group-hover:text-[#EC4899] transition-colors">
          {cert.name}
        </h3>
      </div>

      <div className="pt-4 border-t border-[#F3D6E5] flex items-center justify-between text-xs font-mono text-[#71717A]">
        <span className="flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-[#EC4899]" />
          <span>Document Vault</span>
        </span>
        <span className="text-[11px] text-[#DB2777] font-semibold bg-[#FFF8FC] px-2 py-0.5 rounded border border-[#F3D6E5]">
          /public/certificates/
        </span>
      </div>
    </div>
  )
}
