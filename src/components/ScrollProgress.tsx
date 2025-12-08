'use client'

import { useEffect, useState } from 'react'

/**
 * Reading progress indicator component
 * Shows scroll progress through the page
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(Math.min(scrollPercent, 100))
    }

    // Throttle scroll events for performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    updateProgress() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-600 transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Scroll indicator dot (appears after 10% scroll) */}
      {progress > 10 && (
        <div className="fixed top-4 right-4 z-50 transition-all duration-300">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-600 flex items-center justify-center">
              <svg 
                className="w-6 h-6 text-amber-300 transform -rotate-90" 
                viewBox="0 0 36 36"
              >
                <path
                  className="text-slate-600"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="transparent"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-400"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="transparent"
                  strokeDasharray={`${progress}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-white font-medium">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}