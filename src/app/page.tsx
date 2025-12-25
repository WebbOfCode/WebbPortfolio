'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import SystemInfo from '@/components/SystemInfo'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import YouTube from '@/components/YouTube'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import TabNavigation from '@/components/TabNavigation'
import { ConsolePanelTitle } from '@/components/ConsoleModule'
import DevVerifier from '@/components/DevVerifier'

interface Tab {
  id: string
  label: string
  icon: string
}

const BASE_TABS: Tab[] = [
  { id: 'home', label: 'HOME', icon: '◆' },
  { id: 'projects', label: 'PROJECTS', icon: '◇' },
  { id: 'skills', label: 'SKILLS', icon: '▶' },
  { id: 'about', label: 'ABOUT', icon: '★' },
  { id: 'contact', label: 'CONTACT', icon: '✉' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')
  const [mounted, setMounted] = useState(false)
  const [isRetro, setIsRetro] = useState(false)

  // Load active tab from sessionStorage and detect theme on mount
  useEffect(() => {
    setMounted(true)
    const savedTab = sessionStorage.getItem('activeTab')
    if (savedTab && BASE_TABS.find((tab) => tab.id === savedTab)) {
      setActiveTab(savedTab)
    }
    
    // Detect current theme
    const currentTheme = document.documentElement.getAttribute('data-theme')
    setIsRetro(currentTheme === 'retro')
    
    // Listen for theme changes
    const handleThemeChange = () => {
      const newTheme = document.documentElement.getAttribute('data-theme')
      setIsRetro(newTheme === 'retro')
    }
    
    // Use MutationObserver to detect theme attribute changes
    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    
    return () => observer.disconnect()
  }, [])

  // Save active tab to sessionStorage when it changes
  useEffect(() => {
    if (mounted) {
      sessionStorage.setItem('activeTab', activeTab)
    }
  }, [activeTab, mounted])

  if (!mounted) {
    return null
  }

  // Compute tabs for retro vs modern modes
  const TABS: Tab[] = isRetro
    ? BASE_TABS.map(t => t.id === 'about' ? { ...t, label: 'SYSTEM', icon: '★' } : t)
    : BASE_TABS

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-burnt-orange focus:text-white focus:rounded-lg focus:font-medium"
      >
        Skip to main content
      </a>
      
      <main className="min-h-screen bg-gradient-to-b from-bg-main to-bg-elevated" id="main-content">
        {/* Console frame corner accents (only visible in retro mode) */}
        <div className="corner-accent top-left" aria-hidden="true"></div>
        <div className="corner-accent top-right" aria-hidden="true"></div>
        <div className="corner-accent bottom-left" aria-hidden="true"></div>
        <div className="corner-accent bottom-right" aria-hidden="true"></div>
        
        <ScrollProgress />
        
        {/* Navigation bar - hidden in retro mode */}
        {!isRetro && <Navigation />}
        
        {/* Check if retro theme is active */}
        {isRetro ? (
          /* RETRO MODE: Tab-based navigation replaces top nav */
          <>
            <TabNavigation tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
            
            <div className="viewport-content">
              {/* Home Tab */}
              <div
                role="tabpanel"
                id="home-panel"
                aria-labelledby="home-tab"
                className={`tab-panel ${activeTab === 'home' ? 'active' : ''}`}
              >
                <ConsolePanelTitle title="SYSTEM MAIN" status="ONLINE" />
                <Hero />
                <YouTube />
              </div>

              {/* Projects Tab */}
              <div
                role="tabpanel"
                id="projects-panel"
                aria-labelledby="projects-tab"
                className={`tab-panel ${activeTab === 'projects' ? 'active' : ''}`}
              >
                <ConsolePanelTitle title="PROJECT CATALOG" status="LOADED" />
                <Projects />
              </div>

              {/* Skills Tab */}
              <div
                role="tabpanel"
                id="skills-panel"
                aria-labelledby="skills-tab"
                className={`tab-panel ${activeTab === 'skills' ? 'active' : ''}`}
              >
                <ConsolePanelTitle title="SKILL MATRIX" status="READY" />
                <Skills />
              </div>

              {/* About Tab (Retro: System Diagnostics) */}
              <div
                role="tabpanel"
                id="about-panel"
                aria-labelledby="about-tab"
                className={`tab-panel ${activeTab === 'about' ? 'active' : ''}`}
              >
                <ConsolePanelTitle title="SYSTEM DIAGNOSTICS" status="ONLINE" />
                <SystemInfo />
              </div>

              {/* Contact Tab */}
              <div
                role="tabpanel"
                id="contact-panel"
                aria-labelledby="contact-tab"
                className={`tab-panel ${activeTab === 'contact' ? 'active' : ''}`}
              >
                <ConsolePanelTitle title="CONTACT SYSTEM" status="ACTIVE" />
                <Contact />
              </div>

              <Footer />
            </div>
          </>
        ) : (
          /* MODERN MODE: Traditional scrollable layout */
          <div className="viewport-content">
            <Hero />
            <About />
            <Projects />
            <YouTube />
            <Skills />
            <Contact />
            <Footer />
          </div>
        )}
      </main>
      
      {/* Development Verifier - Only visible when DEV_VERIFY is true */}
      <DevVerifier />
    </>
  )
}