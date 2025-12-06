'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <section id="hero" className="bg-gradient-to-r from-bg-main via-slate-dark to-bg-elevated py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-bg-elevated/80 border border-border-default text-text-muted text-sm font-medium rounded-full mb-6">
                  Currently building at MTSU
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold text-text-primary leading-tight mb-4">
                  I'm Demarick
                </h1>
                <p className="text-lg md:text-xl text-accent-gold font-semibold mb-6">
                  Full Stack Developer • Cybersecurity • Army Vet
                </p>
                <p className="text-xl text-text-muted leading-relaxed mb-8">
                  I write code that actually works. Started securing networks in the Army, now building full-stack applications that don't break. I care about security, performance, and writing code I'd actually want to maintain in 6 months.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent-gold hover:bg-accent-gold-dark text-black font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View Projects
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                
                <a
                  href="/Demarick Webb-Resume Fall 25.docx"
                  download="Demarick_Webb_Resume.docx"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-accent-gold text-text-primary font-semibold rounded-lg hover:bg-bg-elevated transition-all duration-200">
                >
                  Download Resume
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>

              {/* Single key stat */}
              <div className="inline-flex items-center space-x-2 text-text-secondary">
                <div className="w-2 h-2 bg-burnt-orange rounded-full"></div>
                <span className="text-sm">Secret clearance holder • 4+ years building systems</span>
              </div>
            </div>

            {/* Photo */}
            <div className="animate-fade-in">
              <div className="relative">
                <div className="relative w-80 h-80 mx-auto">
                  <div className="w-full h-full bg-bg-elevated rounded-2xl overflow-hidden shadow-2xl border border-border-default">
                    <Image
                      src="/logo dwr com.png"
                      alt="Demarick Webb-Rivera - Full Stack Developer and Army Veteran working on software projects"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-bg-elevated rounded-xl px-4 py-2 shadow-lg border border-border-default">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-text-primary">Available for hire</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-bg-elevated border-t border-border-default py-8 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-gold">7+</div>
              <div className="text-sm text-text-muted">Projects shipped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-gold">3.1</div>
              <div className="text-sm text-text-muted">GPA @ MTSU</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-gold">2018</div>
              <div className="text-sm text-text-muted">Coding since</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-gold">∞</div>
              <div className="text-sm text-text-muted">Coffees consumed</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
