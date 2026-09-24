import React, { useState, useRef } from 'react'
import { Play, Pause, Maximize2, Video, Sparkles } from 'lucide-react'

interface VideoDemoProps {
  projectTitle: string
  videoUrl?: string
  posterUrl?: string
  accentColor?: string
}

export const VideoDemo: React.FC<VideoDemoProps> = ({
  projectTitle,
  videoUrl,
  posterUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setHasError(true))
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  // If no video URL or video failed to load, render the premium placeholder
  if (!videoUrl || hasError) {
    return (
      <div className="relative w-full rounded-2xl glass-panel border border-white/10 p-6 sm:p-8 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40" />
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#6366F1]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center py-10 px-4">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center mb-4 text-[#06B6D4] group-hover:scale-110 group-hover:border-[#06B6D4]/50 transition-all duration-300 shadow-xl">
            <Video className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#06B6D4] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Demo Player</span>
          </div>

          <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Project Demo Coming Soon
          </h4>

          <p className="text-xs sm:text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
            A high-definition walkthrough of {projectTitle} is being prepared. You can drop a video file in{' '}
            <code className="text-[#06B6D4] bg-white/5 px-2 py-0.5 rounded font-mono text-xs">
              /public/videos/{projectTitle.toLowerCase().replace(/\s+/g, '-')}-demo.mp4
            </code>{' '}
            to showcase live execution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Full-Stack Architecture Verified
            </span>
            <span className="text-slate-600">&bull;</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#06B6D4]"></span>
              Live Pipeline Active
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full rounded-2xl glass-panel border border-white/15 overflow-hidden group shadow-2xl">
      <div className="relative aspect-video w-full bg-black/90">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          preload="metadata"
          onError={() => setHasError(true)}
          onEnded={() => setIsPlaying(false)}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            className="w-16 h-16 rounded-full glass-panel border border-white/20 text-white flex items-center justify-center hover:scale-110 hover:border-[#06B6D4] transition-all duration-300 shadow-2xl cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1 text-[#06B6D4]" />
            )}
          </button>
        </div>

        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-xs text-white">
          <span className="font-mono text-slate-300">{projectTitle} &bull; Demo</span>
          <button
            onClick={handleFullscreen}
            aria-label="Fullscreen"
            className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
