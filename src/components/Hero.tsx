import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hi, I&apos;m <span className="text-blue-400">Demarick Webb-Rivera</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Army Veteran • Full-Stack Developer • Network & Security Enthusiast
            </p>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Bringing military discipline and technical expertise to software engineering, 
              with a focus on cybersecurity, networking, and innovative web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                View My Work
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-300 hover:text-white hover:border-slate-500 transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Profile Logo */}
          <div className="mt-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center p-4">
                <Image
                  src="/logo dwr com.png"
                  alt="Demarick Webb-Rivera Professional Logo"
                  width={200}
                  height={200}
                  className="rounded-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}