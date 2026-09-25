import React, { useState, useRef, useEffect } from 'react'
import {
  Play,
  Pause,
  Maximize2,
  Upload,
  Trash2,
  Sparkles,
  Volume2,
  VolumeX,
  CheckCircle2,
  RefreshCw,
  FolderOpen,
} from 'lucide-react'
import { saveVideo, getVideo, deleteVideo } from '../utils/videoStorage'

interface VideoDemoProps {
  projectId?: string
  projectTitle: string
  videoUrl?: string
  posterUrl?: string
}

export const VideoDemo: React.FC<VideoDemoProps> = ({
  projectId,
  projectTitle,
  videoUrl,
  posterUrl,
}) => {
  const resolvedId = projectId || projectTitle.toLowerCase().replace(/[^a-z0-9]/g, '-')

  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null)
  const [videoMeta, setVideoMeta] = useState<{ name: string; size: number } | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [successBanner, setSuccessBanner] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // 1. On mount or project change, check IndexedDB first for a user-uploaded video
  useEffect(() => {
    let isMounted = true

    async function loadStoredVideo() {
      try {
        const stored = await getVideo(resolvedId)
        if (!isMounted) return

        if (stored && stored.url) {
          setActiveVideoUrl(stored.url)
          setVideoMeta({ name: stored.name, size: stored.size })
          return
        }
      } catch {
        // Fallback to static URL
      }

      if (isMounted) {
        if (videoUrl) {
          setActiveVideoUrl(videoUrl)
          setVideoMeta(null)
        } else {
          setActiveVideoUrl(null)
          setVideoMeta(null)
        }
      }
    }

    loadStoredVideo()

    return () => {
      isMounted = false
    }
  }, [resolvedId, videoUrl])

  // Handle file selection (from input or drop)
  const handleFileProcess = async (file: File) => {
    if (!file.type.startsWith('video/')) {
      alert('Veuillez sélectionner un fichier vidéo valide (MP4, WebM, MOV, etc.).')
      return
    }

    // Revoke previous object URL if applicable
    if (activeVideoUrl && activeVideoUrl.startsWith('blob:')) {
      try {
        URL.revokeObjectURL(activeVideoUrl)
      } catch {
        // Ignore error
      }
    }

    setIsSaving(true)
    try {
      const stored = await saveVideo(resolvedId, file)
      setActiveVideoUrl(stored.url)
      setVideoMeta({ name: stored.name, size: stored.size })
      setIsPlaying(false)
      setSuccessBanner(`Vidéo "${file.name}" importée et sauvegardée avec succès !`)
      setTimeout(() => setSuccessBanner(null), 4000)
    } catch (err) {
      console.error('Failed to save video to IndexedDB:', err)
      // Fallback: ephemeral object URL
      const tempUrl = URL.createObjectURL(file)
      setActiveVideoUrl(tempUrl)
      setVideoMeta({ name: file.name, size: file.size })
      setSuccessBanner(`Vidéo "${file.name}" chargée pour cette session.`)
      setTimeout(() => setSuccessBanner(null), 4000)
    } finally {
      setIsSaving(false)
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileProcess(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      handleFileProcess(file)
    }
  }

  const handleRemoveVideo = async () => {
    if (activeVideoUrl && activeVideoUrl.startsWith('blob:')) {
      try {
        URL.revokeObjectURL(activeVideoUrl)
      } catch {
        // Ignore
      }
    }
    await deleteVideo(resolvedId)
    setActiveVideoUrl(videoUrl || null)
    setVideoMeta(null)
    setIsPlaying(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const togglePlay = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
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

  const formatFileSize = (bytes: number) => {
    if (!bytes) return ''
    const mb = bytes / (1024 * 1024)
    return `${mb.toFixed(1)} Mo`
  }

  return (
    <div className="relative w-full rounded-3xl bg-white/90 backdrop-blur-xl border border-[#F3D6E5] overflow-hidden shadow-xl shadow-pink-500/5 transition-all">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/mp4,video/webm,video/ogg,video/quicktime,.mp4,.webm,.mov"
        onChange={handleFileInputChange}
        className="hidden"
        id={`video-upload-${resolvedId}`}
      />

      {/* Success notification banner */}
      {successBanner && (
        <div className="absolute top-3 left-3 right-3 z-30 flex items-center justify-between gap-2 px-4 py-2.5 rounded-2xl bg-emerald-50/95 border border-emerald-200 text-emerald-800 text-xs font-mono shadow-lg backdrop-blur-md animate-fadeIn">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">{successBanner}</span>
          </span>
          <button
            onClick={() => setSuccessBanner(null)}
            className="text-emerald-700 hover:text-emerald-900 font-bold ml-2 cursor-pointer"
          >
            &times;
          </button>
        </div>
      )}

      {/* STATE A: ACTIVE VIDEO LOADED */}
      {activeVideoUrl ? (
        <div className="relative aspect-video w-full bg-slate-950 group overflow-hidden">
          <video
            ref={videoRef}
            src={activeVideoUrl}
            poster={posterUrl}
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
            className="w-full h-full object-cover cursor-pointer"
          />

          {/* Top Bar Floating Badges & Action Buttons */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto">
            {/* File metadata pill */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-mono shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="truncate max-w-[160px] sm:max-w-[220px]">
                {videoMeta?.name || `${projectTitle} Demo`}
              </span>
              {videoMeta?.size ? (
                <span className="text-[#FBCFE8] font-semibold text-[11px]">
                  ({formatFileSize(videoMeta.size)})
                </span>
              ) : null}
            </div>

            {/* Quick Action buttons: Replace & Remove */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                title="Remplacer la vidéo"
                data-cursor="interactive"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#F472B6]" />
                <span className="hidden sm:inline">Remplacer</span>
              </button>

              <button
                type="button"
                onClick={handleRemoveVideo}
                className="p-1.5 rounded-xl bg-black/60 hover:bg-rose-950/80 backdrop-blur-md border border-white/20 text-slate-300 hover:text-rose-300 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                title="Supprimer la vidéo"
                data-cursor="interactive"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center Play/Pause Overlay Button */}
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

          {/* Bottom Player Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col gap-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {/* Scrubber Range */}
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
                  onClick={togglePlay}
                  className="hover:text-[#EC4899] transition-colors cursor-pointer"
                  data-cursor="interactive"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 ml-0.5" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="hover:text-[#EC4899] transition-colors cursor-pointer"
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
                onClick={handleFullscreen}
                className="hover:text-[#EC4899] transition-colors cursor-pointer"
                title="Plein écran"
                data-cursor="interactive"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* STATE B: NO VIDEO LOADED - INTERACTIVE DRAG & DROP UPLOAD ZONE */
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative p-8 sm:p-10 flex flex-col items-center justify-center text-center transition-all duration-300 ${
            isDragging
              ? 'bg-[#FFF1F7] border-2 border-dashed border-[#EC4899] scale-[0.99]'
              : 'bg-gradient-to-br from-white via-[#FFF8FC] to-[#FFF1F7] border border-dashed border-[#F3D6E5] hover:border-[#EC4899]/60 hover:bg-[#FFF8FC]'
          }`}
        >
          {/* Ambient soft glow */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#FBCFE8]/40 rounded-full blur-3xl pointer-events-none" />

          {/* Upload icon circle */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 shadow-lg cursor-pointer ${
              isDragging
                ? 'bg-[#EC4899] text-white scale-110 shadow-pink-500/30'
                : 'bg-[#FFF1F7] border border-[#FBCFE8] text-[#EC4899] hover:scale-110 hover:bg-[#FCE7F3] shadow-pink-500/10'
            }`}
            data-cursor="interactive"
          >
            {isSaving ? (
              <RefreshCw className="w-8 h-8 animate-spin" />
            ) : isDragging ? (
              <FolderOpen className="w-8 h-8" />
            ) : (
              <Upload className="w-8 h-8" />
            )}
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#F3D6E5] text-xs font-mono font-medium text-[#EC4899] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
            <span>Lecteur &amp; Import Vidéo Démo</span>
          </div>

          {/* Title */}
          <h4 className="text-xl sm:text-2xl font-extrabold text-[#18181B] mb-2 tracking-tight">
            Importer la Démo Vidéo de {projectTitle}
          </h4>

          {/* Subtitle / drag drop prompt */}
          <p className="text-xs sm:text-sm text-[#52525B] max-w-md mb-6 leading-relaxed">
            Glissez-déposez votre vidéo ici, ou cliquez sur le bouton ci-dessous pour importer un fichier depuis votre ordinateur.
          </p>

          {/* Upload Button */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isSaving}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#EC4899] to-[#F472B6] hover:from-[#DB2777] hover:to-[#EC4899] text-white text-xs sm:text-sm font-bold shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/35 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              data-cursor="interactive"
            >
              <Upload className="w-4 h-4" />
              <span>Choisir un fichier vidéo (MP4, WebM)</span>
            </button>
          </div>

          {/* Metadata pill details */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-[#71717A] max-w-lg">
            <span className="px-2.5 py-1 rounded-lg bg-white border border-[#F3D6E5] shadow-xs">
              Formats : MP4, WebM, MOV
            </span>
            <span className="text-[#F472B6]">&bull;</span>
            <span className="px-2.5 py-1 rounded-lg bg-white border border-[#F3D6E5] shadow-xs">
              Sauvegarde IndexedDB persistante
            </span>
          </div>

          {/* Note about production folder */}
          <div className="mt-5 pt-4 border-t border-[#F3D6E5]/70 text-[11px] font-mono text-[#71717A] text-center max-w-md">
            <span>Pour intégrer définitivement au projet source : </span>
            <code className="text-[#DB2777] bg-[#FFF1F7] px-2 py-0.5 rounded font-semibold border border-[#FBCFE8] inline-block mt-1">
              /public/videos/{resolvedId}-demo.mp4
            </code>
          </div>
        </div>
      )}
    </div>
  )
}
