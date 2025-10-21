'use client'

//nb importing the usual suspects
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTypewriter } from '@/hooks/useTypewriter'
import { getFeatureFlags } from '@/config/features'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
    // bb keeping track of feature toggles - initialize with defaults to avoid hydration issues
  const [featureFlags, setFeatureFlags] = useState({ showBartenderServices: false })
  
      // this typewriter effect took forever to get right
  const { displayText: taglineText, isComplete: taglineComplete } = useTypewriter(
    "Turning caffeine into code since 2014", 
    50, 
    1000
  )
  
  // //////bghgjgn second typewriter for the punchline
  const { displayText: specializationText } = useTypewriter(
  ". From Army network ops to bartending Nashville's stages, I (try to) build things that (usually) don't break at 2am.", 
    40, 
    taglineComplete ? 500 : 5000 // TODO: maybe make this delay configurable?
  )

  useEffect(() => {
    setMounted(true)
        // Update feature flags on mount
    setFeatureFlags(getFeatureFlags())
  }, [])

  return (
    <section id="hero" className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* //nb animated background that looks cool */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/20 to-amber-900/20 animate-gradient-shift"></div>
      
      {/* floating particle things - keeping this simple because it works */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
          {/* TODO: maybe add more particles? or is this enough */}
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* bb main text content side */}
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-block mb-4">
              <div className="bg-slate-900/80 border-l-2 border-amber-400 px-4 py-2 font-mono text-sm">
                <span className="text-slate-400">$ </span>
                <span className="text-amber-400">WhoAmI</span>
                <span className="text-slate-500 ml-2"># Full Stack Developer | U.S Army Veteran</span>
              </div>
            </div>
            
            {/* //////bghgjgn big name display */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="inline-block hover:scale-105 transition-transform duration-300">Demarick</span>{' '}
              <br />
              <span className="bg-gradient-to-r from-slate-500 to-amber-500 bg-clip-text text-transparent">
                Webb-Rivera
              </span>
            </h1>
            
            <div className="text-xl text-slate-300 mb-8 leading-relaxed min-h-[3.5rem]">
              <span className="text-amber-300 font-medium">
                {taglineText}
              </span>
              <span className="text-slate-300">
                {specializationText}
              </span>
              {/* //nb blinking cursor for typewriter effect */}
              {(!taglineComplete || specializationText.length < 70) && (
                <span className="inline-block w-0.5 h-6 bg-amber-300 ml-1 animate-pulse"></span>
              )}
            </div>
            
            {/* call to action buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-amber-600 text-white font-medium hover:from-slate-600 hover:to-amber-500 transition-all duration-300 hover:scale-105"
              >
                View Projects
                  {/* // this animation timing feels right but might tweak later */}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-250" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              {/* bartender button - only shows when feature flag is on */}
              {featureFlags.showBartenderServices && (
                <Link
                  href="/bartender"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:from-amber-600 hover:to-orange-700 transition-all duration-350 hover:scale-105"
                >
                  Bartender Services
                  {/* //////bghgjgn different timing for variety */}
                  <svg className="ml-2 w-5 h-5 transition-transform duration-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 12V7a1 1 0 011-1h1V4a2 2 0 114 0v2h1a1 1 0 011 1v5a6 6 0 01-12 0zm6 0a1 1 0 11-2 0 1 1 0 012 0z"/>
                  </svg>
                </Link>
              )}
              
              {/* simple contact button */}
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-slate-600 text-slate-300 font-medium hover:border-amber-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              If you&apos;re looking for someone who codes like an engineer and thinks like a problem solver — let&apos;s connect.
            </div>
          </div>

          {/* //nb image and stats side */}
          <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* // main profile circle with spinning rings that look sick */}
              <div className="relative w-80 h-80 mx-auto">
                {/* //////bghgjgn animated ring effects */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-600 to-amber-700 animate-spin-slow opacity-85 blur-md"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-amber-700 to-emerald-700 animate-spin-slower opacity-60 blur-lg"></div>
                
                {/* actual image container */}
                <div className="absolute inset-4 rounded-full bg-slate-900 border-4 border-slate-800 overflow-hidden shadow-2xl">
                  {/* TODO: maybe add dark mode toggle? idk */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <Image
                      src="/logo dwr com.png"
                      alt="Demarick Webb-Rivera"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* //nb floating tech skill badges */}
                <div className="absolute -top-4 -right-4 bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-slow">
                  Python
                </div>
                <div className="absolute -bottom-4 -left-4 bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-slower">
                  C++
                </div>
                <div className="absolute top-1/2 -right-8 bg-slate-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-slow" style={{animationDelay: '0.5s'}}>
                  React
                </div>
              </div>

              {/* // stats cards section - still tweaking the alignment */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {/* //////bghgjgn first card slightly higher */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center hover:border-amber-500 transition-all duration-350 hover:scale-105 transform translate-y-1">
                  <div className="text-2xl font-bold text-amber-400">4+</div>
                  <div className="text-xs text-slate-400">Years IT Experience</div>
                </div>
                {/* middle card normal positioning */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center hover:border-emerald-500 transition-all duration-250 hover:scale-105">
                  <div className="text-2xl font-bold text-emerald-400">7+</div>
                  <div className="text-xs text-slate-400">Projects Built</div>
                </div>
                {/* last card slightly lower for that authentic feel */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center hover:border-amber-500 transition-all duration-400 hover:scale-105 transform -translate-y-0.5">
                  <div className="text-2xl font-bold text-amber-400">3.1</div>
                  <div className="text-xs text-slate-400">GPA @ MTSU</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
