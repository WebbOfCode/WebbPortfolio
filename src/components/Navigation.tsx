'use client'

//nb nav component with secret admin panel
import { useState, useEffect } from 'react'
import Image from 'next/image'
import AdminPanel from './AdminPanel'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
    // bb admin panel toggle state
  const [showAdmin, setShowAdmin] = useState(false)
  const [clickCount, setClickCount] = useState(0) // counting clicks for secret access
  const [clickTimer, setClickTimer] = useState<NodeJS.Timeout | null>(null)

      // //////bghgjgn 5-click admin access function
  const handleAdminClick = () => {
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)

    // clear existing timer if running
    if (clickTimer) {
      clearTimeout(clickTimer)
    }

    // TODO: maybe make this 3 clicks instead of 5?
    if (newClickCount >= 5) {
      setShowAdmin(true)
      setClickCount(0)
      return
    }

        // reset counter after 2 seconds - keeping this timing
    const timer = setTimeout(() => {
      setClickCount(0)
    }, 2000)
    setClickTimer(timer)
  }

  // cleanup function so we don't leak timers
  useEffect(() => {
    return () => {
      if (clickTimer) {
        clearTimeout(clickTimer)
      }
    }
  }, [clickTimer])

    // //////bghgjgn simple nav structure
  const navItems: Array<{ label: string; href: string; external?: boolean }> = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' }, // TODO: maybe add a blog section?
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-green-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* //nb logo section with secret admin button */}
          <div className="flex-shrink-0 flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
              <div className="w-8 h-8 bg-green-500/20 border border-green-500/50 flex items-center justify-center font-mono text-green-400 text-sm font-bold">
                DW
              </div>
              {/* terminal prompt styling */}
              <span className="font-mono text-green-400 hidden sm:block">root@portfolio</span>
            </a>
            
            {/* // secret admin button - 5 clicks to access */}
            <button
              onClick={handleAdminClick}
              className={`w-6 h-6 bg-gray-800/50 border border-gray-600/30 flex items-center justify-center font-mono text-xs transition-colors duration-350 ${
                clickCount > 0 
                  ? 'text-yellow-400 border-yellow-500/50 hover:text-yellow-300' 
                  : 'text-gray-600 hover:text-gray-400 hover:border-gray-500/50'
              }`}
              title={`Admin Panel (${5 - clickCount} clicks remaining)`}
            >
              $
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                // bb styling each nav link to look like terminal
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="text-green-400 hover:text-white px-3 py-2 text-sm font-mono font-medium transition-colors duration-200 hover:bg-green-500/10 hover:border-b hover:border-green-400 flex items-center"
                >
                  {item.label}
                  {item.external && (
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </a>
              ))}
              <a
                href="/ResumeWebb-1.docx"
                download="Demarick_Webb_Resume.docx"
                className="bg-black border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-4 py-2 text-sm font-mono font-medium transition-colors duration-200 flex items-center"
              >
                <span className="text-blue-400 mr-1">$</span> ./resume.pdf
              </a>
            </div>
          </div>

          {/* mobile hamburger menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 border border-green-400/50 text-green-400 hover:text-white hover:bg-green-500/10 transition-colors duration-200"
            >
              {/* hamburger icon toggle - changes between menu and X */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border border-green-500/30 mb-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="text-green-400 hover:text-white block px-3 py-2 text-base font-mono font-medium transition-colors duration-200 hover:bg-green-500/10 flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-blue-400 mr-2">$</span>
                  {item.label}
                  {item.external && (
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </a>
              ))}
              <a
                href="/ResumeWebb-1.docx"
                download="Demarick_Webb_Resume.docx"
                className="bg-black border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 block px-3 py-2 text-base font-mono font-medium transition-colors duration-200 flex items-center"
              >
                <span className="text-blue-400 mr-2">$</span> ./resume.pdf
              </a>
            </div>
          </div>
        )}
      </div>
      
      {/* admin panel component */}
      <AdminPanel isOpen={showAdmin} onClose={() => setShowAdmin(false)} />
    </nav>
  )
}