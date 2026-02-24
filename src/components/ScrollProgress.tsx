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
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
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

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50" style={{ background: 'var(--yzy-ash)' }}>
      <div
        className="h-full"
        style={{ width: `${progress}%`, background: 'var(--yzy-bone)', transition: 'width 150ms steps(4)' }}
      />
    </div>
  )
}