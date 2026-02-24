'use client'

import { useState, useEffect } from 'react'

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Mobile Sticky CTA */}
      <a
        href="#contact"
        className="sticky-mobile-cta btn-trust md:hidden"
        aria-label="Contact me"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Contact
      </a>

      {/* Desktop Sticky Bar */}
      <div className={`hidden md:block fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-content mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-status-green pulse-dot"></span>
            <span className="text-sm font-semibold text-white">Demarick Webb-Rivera</span>
            <span className="text-sm text-slate-400">— Open to work</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:demarickw104@live.com"
              className="px-4 py-2 rounded-lg bg-trust-blue hover:bg-trust-blue-dark text-white text-sm font-semibold transition-colors"
            >
              Email Me
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg border border-slate-600 hover:border-amber-500 text-slate-300 hover:text-white text-sm font-semibold transition-colors"
            >
              Contact Form
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
