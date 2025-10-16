'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="hero" className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20 animate-gradient-shift"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm animate-pulse-slow">
                🎖️ Army Veteran | 🎓 CS Student | 💻 Full-Stack Dev
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="inline-block hover:scale-105 transition-transform duration-300">Hi,</span>{' '}
              <span className="inline-block hover:scale-105 transition-transform duration-300">I'm</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-text">
                Demarick Webb-Rivera
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Transforming{' '}
              <span className="text-blue-400 font-semibold">military precision</span>
              {' '}into{' '}
              <span className="text-purple-400 font-semibold">cutting-edge code</span>
              . Specializing in cybersecurity, full-stack development, and network architecture.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-slate-600 text-slate-300 font-medium rounded-lg hover:border-blue-500 hover:text-white hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Headshot & Logo Side */}
          <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main profile circle with animated rings */}
              <div className="relative w-80 h-80 mx-auto">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-spin-slow opacity-75 blur-md"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slower opacity-50 blur-lg"></div>
                
                {/* Inner container */}
                <div className="absolute inset-4 rounded-full bg-slate-900 border-4 border-slate-800 overflow-hidden shadow-2xl">
                  {/* Headshot placeholder - PUT YOUR IMAGE HERE */}
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

                {/* Floating tech badges */}
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-slow">
                  Python
                </div>
                <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-slower">
                  C++
                </div>
                <div className="absolute top-1/2 -right-8 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-slow" style={{animationDelay: '0.5s'}}>
                  React
                </div>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center hover:border-blue-500 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl font-bold text-blue-400">4+</div>
                  <div className="text-xs text-slate-400">Years Military IT</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl font-bold text-purple-400">7+</div>
                  <div className="text-xs text-slate-400">Projects Built</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center hover:border-pink-500 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl font-bold text-pink-400">3.1</div>
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