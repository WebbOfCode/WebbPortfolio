'use client'

import { useState, useEffect, useRef } from 'react'

export interface Tab {
  id: string
  label: string
  icon?: string
}

export interface TabNavigationProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

/**
 * Accessible tab navigation component for retro console layout
 * Supports keyboard navigation, ARIA roles, and smooth transitions
 * Replaces the main navigation bar in retro mode
 */
export default function TabNavigation({ tabs, activeTab, onTabChange }: TabNavigationProps) {
  const tabListRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [theme, setTheme] = useState<'modern' | 'retro'>('modern')

  // Check for prefers-reduced-motion on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)

    // Load current theme
    const currentTheme = document.documentElement.getAttribute('data-theme')
    setTheme((currentTheme as 'modern' | 'retro') || 'modern')

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'modern' ? 'retro' : 'modern'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('portfolio-theme', newTheme)
  }

  // Keyboard navigation handler
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentTabId: string) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === currentTabId)
    let nextIndex = currentIndex

    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1
        break
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0
        break
      case 'Home':
        e.preventDefault()
        nextIndex = 0
        break
      case 'End':
        e.preventDefault()
        nextIndex = tabs.length - 1
        break
      default:
        return
    }

    const nextTabId = tabs[nextIndex].id
    onTabChange(nextTabId)

    // Focus the newly selected tab
    setTimeout(() => {
      tabRefs.current[nextTabId]?.focus()
    }, 0)
  }

  return (
    <div className="console-nav-wrapper">
      {/* Brand/Logo area */}
      <div className="console-brand-section">
        <div className="brand-logo">DWR</div>
        <div className="brand-title">SYSTEMS</div>
      </div>

      {/* Tab list */}
      <div
        ref={tabListRef}
        className="console-tab-list"
        role="tablist"
        aria-label="Console sections"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            ref={(el) => {
              if (el) tabRefs.current[tab.id] = el
            }}
            id={`${tab.id}-tab`}
            className={`console-tab ${activeTab === tab.id ? 'active' : ''}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-panel`}
            onClick={() => onTabChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
            tabIndex={activeTab === tab.id ? 0 : -1}
          >
            {tab.icon && <span className="tab-icon">{tab.icon}</span>}
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Theme toggle button - replaces the one in Navigation */}
      <button
        onClick={toggleTheme}
        className="console-theme-toggle"
        aria-label={`Switch to ${theme === 'modern' ? 'retro' : 'modern'} theme`}
        aria-pressed={theme === 'retro'}
      >
        <span className="toggle-icon">{theme === 'modern' ? '⚡' : '◆'}</span>
        <span className="toggle-text">{theme === 'modern' ? 'RETRO' : 'MODERN'}</span>
      </button>
    </div>
  )
}
