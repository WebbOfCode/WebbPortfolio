'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems: Array<{ label: string; href: string }> = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '/Demarick Webb-Resume Fall 25.docx' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 w-full z-50 bg-bg-elevated/95 backdrop-blur-sm border-b border-border-default">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-accent-gold rounded-lg flex items-center justify-center text-black font-semibold text-sm group-hover:scale-105 transition-transform duration-200">
                DW
              </div>
              <span className="font-manrope font-semibold text-text-primary hidden sm:block">Demarick</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-text-muted hover:text-accent-gold font-medium transition-colors duration-200"
                {...(item.href.startsWith('/') ? { download: true } : {})}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent-gold hover:bg-accent-gold-dark text-black px-4 py-2 rounded-lg font-semibold transition-all duration-200"
            >
              Say hi
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-text-secondary hover:text-burnt-orange transition-colors duration-200"
            >
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
          <div className="md:hidden border-t border-border-default bg-bg-elevated/98 backdrop-blur-sm rounded-xl mx-4 mb-4 shadow-lg">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-text-muted hover:text-accent-gold font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  {...(item.href.startsWith('/') ? { download: true } : {})}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block bg-accent-gold hover:bg-accent-gold-dark text-black px-3 py-2 rounded-lg font-semibold text-center mt-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Say hi
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}