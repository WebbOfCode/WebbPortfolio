'use client'

import { useState } from 'react'
import Image from 'next/image'

type PhotoMode = 'backdrop' | 'nav'

type NavigationProps = {
  photoMode: PhotoMode
  onTogglePhotoMode: () => void
}

export default function Navigation({ photoMode, onTogglePhotoMode }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems: Array<{ label: string; href: string }> = [
    { label: 'PROJECTS', href: '#projects' },
    { label: 'RESUME', href: '/Demarick Webb-Resume Fall 25.docx' },
    { label: 'CONTACT', href: '#contact' },
  ]

  return (
    <nav className="yzy-nav" aria-label="Primary">
      <div className="yzy-nav-inner">
        <div className="yzy-nav-brand">
          <a href="#hero" className="yzy-nav-brand">DW</a>
          {photoMode === 'nav' && (
            <span className="yzy-nav-avatar" aria-hidden="true">
              <Image
                src="/headshot.jpg"
                alt="Demarick Webb-Rivera"
                width={48}
                height={48}
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.4) brightness(0.6)' }}
              />
            </span>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex yzy-nav-links">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="yzy-nav-link"
              {...(item.href.startsWith('/') ? { download: true } : {})}
            >
              {item.label}
            </a>
          ))}
          <button type="button" className="yzy-nav-link yzy-photo-toggle" onClick={onTogglePhotoMode}>
            PHOTO {photoMode === 'backdrop' ? 'BACKDROP' : 'NAV'}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="yzy-nav-link"
            aria-expanded={isMenuOpen}
            aria-controls="yzy-mobile-menu"
          >
            MENU
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div id="yzy-mobile-menu" className="yzy-mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="yzy-mobile-link"
              onClick={() => setIsMenuOpen(false)}
              {...(item.href.startsWith('/') ? { download: true } : {})}
            >
              {item.label}
            </a>
          ))}
          <button type="button" className="yzy-mobile-link yzy-photo-toggle" onClick={onTogglePhotoMode}>
            PHOTO {photoMode === 'backdrop' ? 'BACKDROP' : 'NAV'}
          </button>
        </div>
      )}
    </nav>
  )
}