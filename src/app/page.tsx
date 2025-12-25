'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import YouTube from '@/components/YouTube'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import TabNavigation from '@/components/TabNavigation'

interface Tab {
  id: string
  label: string
  icon: string
}

const TABS: Tab[] = [
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
    if (savedTab && TABS.find((tab) => tab.id === savedTab)) {
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
                <Projects />
              </div>

              {/* Skills Tab */}
              <div
                role="tabpanel"
                id="skills-panel"
                aria-labelledby="skills-tab"
                className={`tab-panel ${activeTab === 'skills' ? 'active' : ''}`}
              >
                <Skills />
              </div>

              {/* About Tab */}
              <div
                role="tabpanel"
                id="about-panel"
                aria-labelledby="about-tab"
                className={`tab-panel ${activeTab === 'about' ? 'active' : ''}`}
              >
                <About />
              </div>

              {/* Contact Tab */}
              <div
                role="tabpanel"
                id="contact-panel"
                aria-labelledby="contact-tab"
                className={`tab-panel ${activeTab === 'contact' ? 'active' : ''}`}
              >
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
    </>
  )
}