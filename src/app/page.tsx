'use client'

import { useEffect, useRef, useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import DevVerifier from '@/components/DevVerifier'

export default function Home() {
  const [showDonda, setShowDonda] = useState(false)
  const [flash, setFlash] = useState(false)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [photoMode, setPhotoMode] = useState<'backdrop' | 'nav'>('backdrop')
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const clickCount = useRef(0)
  const lastClick = useRef(0)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'yeezy')
  }, [])

  useEffect(() => {
    const audio = new Audio('/Kanye_West_Don_Toliver_-_Moon_(mp3.pm).mp3')
    audio.loop = true
    audio.volume = 0.35
    audioRef.current = audio

    audio.play()
      .then(() => setIsAudioPlaying(true))
      .catch(() => setIsAudioPlaying(false))

    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    const handleTripleClick = (event: MouseEvent) => {
      if (event.detail === 3) {
        clickCount.current = 0
        setFlash(true)
        setShowDonda(true)

        setTimeout(() => setFlash(false), 120)
        setTimeout(() => setShowDonda(false), 2000)

        try {
          const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)()
          const oscillator = audioCtx.createOscillator()
          const gain = audioCtx.createGain()
          oscillator.type = 'sine'
          oscillator.frequency.value = 261.6
          gain.gain.value = 0.06
          oscillator.connect(gain)
          gain.connect(audioCtx.destination)
          oscillator.start()
          oscillator.stop(audioCtx.currentTime + 0.6)
        } catch {
          // Audio blocked or unavailable
        }
        return
      }

      const now = Date.now()
      const delta = now - lastClick.current

      if (delta < 700) {
        clickCount.current += 1
      } else {
        clickCount.current = 1
      }

      lastClick.current = now

      if (clickCount.current === 3) {
        clickCount.current = 0
        setFlash(true)
        setShowDonda(true)

        setTimeout(() => setFlash(false), 120)
        setTimeout(() => setShowDonda(false), 2000)

        try {
          const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)()
          const oscillator = audioCtx.createOscillator()
          const gain = audioCtx.createGain()
          oscillator.type = 'sine'
          oscillator.frequency.value = 261.6
          gain.gain.value = 0.06
          oscillator.connect(gain)
          gain.connect(audioCtx.destination)
          oscillator.start()
          oscillator.stop(audioCtx.currentTime + 0.6)
        } catch {
          // Audio blocked or unavailable
        }
      }
    }

    document.addEventListener('click', handleTripleClick, true)
    return () => document.removeEventListener('click', handleTripleClick, true)
  }, [])

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-burnt-orange focus:text-white focus:rounded-lg focus:font-medium"
      >
        Skip to main content
      </a>
      
      <main className="min-h-screen" id="main-content">
        <ScrollProgress />
        <Navigation
          photoMode={photoMode}
          onTogglePhotoMode={() =>
            setPhotoMode((current) => (current === 'backdrop' ? 'nav' : 'backdrop'))
          }
        />
        <div className="viewport-content">
          <Hero photoMode={photoMode} />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </main>

      <DevVerifier />

      {flash && <div className="yzy-flash" aria-hidden="true" />}
      {showDonda && <div className="yzy-donda-overlay">DONDA</div>}

      <button
        type="button"
        className="yzy-audio-toggle"
        onClick={() => {
          const audio = audioRef.current
          if (!audio) return
          if (audio.paused) {
            audio.play()
              .then(() => setIsAudioPlaying(true))
              .catch(() => setIsAudioPlaying(false))
          } else {
            audio.pause()
            setIsAudioPlaying(false)
          }
        }}
        aria-pressed={isAudioPlaying}
      >
        {isAudioPlaying ? 'AUDIO ON' : 'AUDIO OFF'}
      </button>
    </>
  )
}