import React, { useState, useRef } from 'react'
import { Play, Pause, Maximize2, Video, Sparkles } from 'lucide-react'

interface VideoDemoProps {
  projectTitle: string
  videoUrl?: string
  posterUrl?: string
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
      <div
        className="relative w-full rounded-2xl bg-gradient-to-br from-white via-[#FFF8FC] to-[#FFF1F7] border border-[#F3D6E5] p-6 sm:p-8 overflow-hidden group shadow-lg shadow-pink-500/5 hover:border-[#EC4899]/50 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300"
        data-cursor="video"
      >
        {/* Soft pink ambient lighting */}
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#FBCFE8]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center py-8 px-4">
          <div className="w-16 h-16 rounded-2xl bg-[#FFF1F7] border border-[#FBCFE8] flex items-center justify-center mb-4 text-[#EC4899] group-hover:scale-110 group-hover:bg-[#FCE7F3] transition-all duration-300 shadow-md shadow-pink-500/10">
            <Video className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#F3D6E5] text-xs font-mono font-medium text-[#EC4899] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>Interactive Demo Player</span>
          </div>

          <h4 className="text-xl sm:text-2xl font-bold text-[#18181B] mb-2">
            Project Demo Coming Soon
          </h4>

          <p className="text-xs sm:text-sm text-[#52525B] max-w-md mb-6 leading-relaxed">
            A high-definition walkthrough of {projectTitle} is ready to be linked. Place an MP4 in{' '}
            <code className="text-[#DB2777] bg-[#FFF1F7] border border-[#FBCFE8] px-2 py-0.5 rounded font-mono text-xs font-semibold">
              /public/videos/{projectTitle.toLowerCase().replace(/\s+/g, '-')}-demo.mp4
            </code>{' '}
            to enable inline streaming.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#71717A]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Full-Stack Architecture Verified
            </span>
            <span className="text-[#F472B6]">&bull;</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#EC4899]"></span>
              Live Pipeline Active
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative w-full rounded-2xl bg-white border border-[#F3D6E5] overflow-hidden group shadow-xl shadow-pink-500/5 hover:border-[#EC4899] transition-all"
      data-cursor="video"
    >
      <div className="relative aspect-video w-full bg-slate-950">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          preload="metadata"
          onError={() => setHasError(true)}
          onEnded={() => setIsPlaying(false)}
          className="w-full h-full object-cover"
        />

        {/* Hover Overlay with Big Play Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/15 transition-colors">
          <button
            onClick={togglePlay}
            className="w-16 h-16 rounded-full bg-white/95 text-[#EC4899] flex items-center justify-center shadow-2xl shadow-pink-500/40 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label={isPlaying ? 'Pause Demo' : 'Play Demo'}
            data-cursor="video"
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-current" />
            ) : (
              <Play className="w-7 h-7 fill-current ml-1" />
            )}
          </button>
        </div>

        {/* Top Floating Controls */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <button
            onClick={handleFullscreen}
            className="p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all"
            aria-label="Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
