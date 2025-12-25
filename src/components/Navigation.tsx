'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'modern' | 'retro'>('modern')

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as 'modern' | 'retro' | null
    
    if (savedTheme) {
      // Use saved preference
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // No saved preference, check system preference
      // We interpret dark mode as interest in retro theme
      setTheme('retro')
      document.documentElement.setAttribute('data-theme', 'retro')
    }
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'modern' ? 'retro' : 'modern'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('portfolio-theme', newTheme)
  }

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
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border-default hover:border-accent-gold transition-all duration-200 bg-bg-main/50 hover:bg-bg-elevated group"
              aria-label={`Switch to ${theme === 'modern' ? 'retro' : 'modern'} theme`}
              aria-pressed={theme === 'retro'}
            >
              <span className="text-lg group-hover:scale-110 transition-transform">
                {theme === 'modern' ? '⚡' : '◆'}
              </span>
              <span className="text-xs font-mono font-semibold text-text-muted group-hover:text-accent-gold">
                {theme === 'modern' ? 'RETRO' : 'MODERN'}
              </span>
            </button>
            <a
              href="#contact"
              className="bg-accent-gold hover:bg-accent-gold-dark text-black px-4 py-2 rounded-lg font-semibold transition-all duration-200"
            >
              Say hi
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1 px-2 py-2 rounded-lg border border-border-default hover:border-accent-gold transition-all duration-200 bg-bg-main/50"
              aria-label={`Switch to ${theme === 'modern' ? 'retro' : 'modern'} theme`}
              aria-pressed={theme === 'retro'}
            >
              <span className="text-base">
                {theme === 'modern' ? '⚡' : '◆'}
              </span>
            </button>
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