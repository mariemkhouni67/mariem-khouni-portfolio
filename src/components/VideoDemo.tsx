import React, { useState, useRef } from 'react'
import {
  Play,
  Pause,
  Maximize2,
  Sparkles,
  Volume2,
  VolumeX,
  Video,
} from 'lucide-react'

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
  const [isMuted, setIsMuted] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

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
        .catch(() => {
          setIsPlaying(false)
          setHasError(true)
        })
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    const newMuted = !isMuted
    videoRef.current.muted = newMuted
    setIsMuted(newMuted)
  }

  const handleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen()
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
      setHasError(false)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    setCurrentTime(time)
    if (videoRef.current) {
      videoRef.current.currentTime = time
    }
  }

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds === 0) return '00:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // If no video URL or video failed to load, render the clean fallback
  if (!videoUrl || hasError) {
    return (
      <div
        className="relative w-full rounded-2xl bg-gradient-to-br from-white via-[#FFF8FC] to-[#FFF1F7] border border-[#F3D6E5] p-6 sm:p-8 overflow-hidden group shadow-lg shadow-pink-500/5 hover:border-[#EC4899]/50 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300"
        data-cursor="video"
      >
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#FBCFE8]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center py-8 px-4">
          <div className="w-16 h-16 rounded-2xl bg-[#FFF1F7] border border-[#FBCFE8] flex items-center justify-center mb-4 text-[#EC4899] group-hover:scale-110 group-hover:bg-[#FCE7F3] transition-all duration-300 shadow-md shadow-pink-500/10">
            <Video className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#F3D6E5] text-xs font-mono font-medium text-[#EC4899] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>Walkthrough Player</span>
          </div>

          <h4 className="text-xl sm:text-2xl font-bold text-[#18181B] mb-2">
            Project Demo Coming Soon
          </h4>

          <p className="text-xs sm:text-sm text-[#52525B] max-w-md mb-6 leading-relaxed">
            The video walkthrough for <strong className="text-[#18181B]">{projectTitle}</strong> will be available shortly at{' '}
            <code className="text-[#DB2777] bg-[#FFF1F7] border border-[#FBCFE8] px-2 py-0.5 rounded font-mono text-xs font-semibold">
              {videoUrl || `/videos/${projectTitle.toLowerCase().replace(/\s+/g, '-')}-demo.mp4`}
            </code>.
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
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onError={() => setHasError(true)}
          onEnded={() => setIsPlaying(false)}
          onClick={togglePlay}
          className="w-full h-full object-cover cursor-pointer"
        />

        {/* Hover Center Big Play/Pause Button */}
        <div
          onClick={togglePlay}
          className={`absolute inset-0 flex items-center justify-center bg-black/25 transition-opacity duration-200 cursor-pointer ${
            isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
          }`}
          data-cursor="video"
        >
          <div className="w-16 h-16 rounded-full bg-white/95 text-[#EC4899] flex items-center justify-center shadow-2xl shadow-pink-500/40 hover:scale-110 active:scale-95 transition-all duration-200">
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-current" />
            ) : (
              <Play className="w-7 h-7 fill-current ml-1" />
            )}
          </div>
        </div>

        {/* Bottom Custom Controls Bar on Hover */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/85 via-black/45 to-transparent flex flex-col gap-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {/* Progress Scrubber */}
          <input
            type="range"
            min={0}
            max={duration || 100}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#EC4899]"
          />

          <div className="flex items-center justify-between text-white text-xs font-mono pt-1">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                className="hover:text-[#EC4899] transition-colors cursor-pointer"
                aria-label={isPlaying ? 'Pause' : 'Play'}
                data-cursor="interactive"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 ml-0.5" />
                )}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                className="hover:text-[#EC4899] transition-colors cursor-pointer"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
                data-cursor="interactive"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-rose-400" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              <span className="text-[11px] text-slate-300">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <button
              type="button"
              onClick={handleFullscreen}
              className="hover:text-[#EC4899] transition-colors cursor-pointer"
              title="Plein écran"
              aria-label="Plein écran"
              data-cursor="interactive"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
