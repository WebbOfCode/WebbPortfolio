'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getFeatureFlags } from '@/config/features'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [featureFlags, setFeatureFlags] = useState({ showBartenderServices: false })

  useEffect(() => {
    setMounted(true)
    setFeatureFlags(getFeatureFlags())
  }, [])

  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 lg:px-8 min-h-screen flex items-center justify-center">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Status badge */}
        <div className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-slate-800/50 border border-amber-400/30 backdrop-blur-sm transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="text-sm text-slate-300">Full Stack Developer | Army Veteran</span>
        </div>

        {/* Name */}
        <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Demarick Webb-Rivera
        </h1>

        {/* Tagline */}
        <p className={`text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Building secure, scalable web applications with a military IT background and full-stack expertise.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-amber-600 text-white font-medium hover:from-slate-600 hover:to-amber-500 transition-all duration-300 rounded-lg"
          >
            View Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {featureFlags.showBartenderServices && (
            <Link
              href="/bartender"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:from-amber-600 hover:to-orange-700 transition-all duration-300 rounded-lg"
            >
              Bartender Services
            </Link>
          )}

          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border-2 border-slate-600 text-slate-300 font-medium hover:border-amber-500 hover:text-white transition-all duration-300 rounded-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
