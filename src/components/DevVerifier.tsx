'use client'

import { useState, useEffect, useRef } from 'react'

// DEV VERIFICATION FLAG - Set to false to disable all verification
const DEV_VERIFY = true

interface VerificationState {
  currentMode: 'modern' | 'retro'
  activeTab: string
  localStorageTheme: boolean
  prefersReducedMotion: boolean
  isViewportScrolling: boolean
  visiblePanels: number
  ariaValid: boolean
  themeAttributeValid: boolean
  pseudoElementsValid: boolean
  consoleFrameGradient: boolean
  consoleFrameShadows: boolean
  viewportOverflow: boolean
  themeVariablesDistinct: boolean
  keyboardNavigationWorking: boolean
}

export default function DevVerifier() {
  const [state, setState] = useState<VerificationState>({
    currentMode: 'modern',
    activeTab: '',
    localStorageTheme: false,
    prefersReducedMotion: false,
    isViewportScrolling: false,
    visiblePanels: 0,
    ariaValid: false,
    themeAttributeValid: false,
    pseudoElementsValid: false,
    consoleFrameGradient: false,
    consoleFrameShadows: false,
    viewportOverflow: false,
    themeVariablesDistinct: false,
    keyboardNavigationWorking: false
  })

  const [isVisible, setIsVisible] = useState(DEV_VERIFY)
  const verificationInterval = useRef<NodeJS.Timeout>()

  // Run comprehensive verification checks
  const runVerification = () => {
    if (!DEV_VERIFY) return

    const newState: Partial<VerificationState> = {}

    // 1. Current mode detection
    const currentTheme = document.documentElement.getAttribute('data-theme')
    newState.currentMode = (currentTheme === 'retro' ? 'retro' : 'modern')

    // 2. Active tab detection
    const activeTabElement = document.querySelector('.console-tab.active')
    newState.activeTab = activeTabElement?.id?.replace('-tab', '') || 'none'

    // 3. localStorage theme check
    newState.localStorageTheme = !!localStorage.getItem('portfolio-theme')

    // 4. prefers-reduced-motion check
    newState.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // 5. Viewport scrolling check (critical for retro mode)
    const viewportElement = document.querySelector('.viewport-content')
    const bodyScrolling = document.documentElement.scrollTop > 0 || document.body.scrollTop > 0
    const viewportScrolling = viewportElement ? viewportElement.scrollTop > 0 : false
    
    if (newState.currentMode === 'retro') {
      newState.isViewportScrolling = !bodyScrolling && viewportScrolling
      
      // ASSERTION: Body should not scroll in retro mode
      if (bodyScrolling) {
        console.error('🚨 VERIFICATION FAILED: Body is scrolling in retro mode! Viewport should handle scrolling.')
      }
    } else {
      newState.isViewportScrolling = true // Modern mode can use body scrolling
    }

    // 6. Visible panels check
    const visiblePanelElements = document.querySelectorAll('.tab-panel.active')
    newState.visiblePanels = visiblePanelElements.length

    // ASSERTION: Only one panel should be visible
    if (visiblePanelElements.length > 1) {
      console.error('🚨 VERIFICATION FAILED: Multiple tab panels are visible simultaneously!')
    }

    // 7. ARIA validation
    const tabList = document.querySelector('[role="tablist"]')
    const tabs = document.querySelectorAll('[role="tab"]')
    const panels = document.querySelectorAll('[role="tabpanel"]')
    
    let ariaValid = true
    let ariaIssues = []
    
    // In modern mode, ARIA tabs aren't expected, so consider it valid
    if (newState.currentMode === 'modern') {
      ariaValid = true
      ariaIssues = []
    } else if (newState.currentMode === 'retro') {
      // In retro mode, ARIA tabs should be present
      if (!tabList) {
        ariaValid = false
        ariaIssues.push('Missing tablist element')
      }
      if (tabs.length === 0) {
        ariaValid = false
        ariaIssues.push('No tab elements found')
      }
      if (panels.length === 0) {
        ariaValid = false
        ariaIssues.push('No tabpanel elements found')
      }
      
      // Only check ARIA relationships if we have tabs
      if (tabs.length > 0) {
        tabs.forEach((tab, index) => {
          const tabId = tab.id
          const controls = tab.getAttribute('aria-controls')
          const selected = tab.getAttribute('aria-selected')
          
          if (!tabId) {
            ariaValid = false
            ariaIssues.push(`Tab ${index} missing id`)
          }
          if (!controls) {
            ariaValid = false
            ariaIssues.push(`Tab ${index} missing aria-controls`)
          }
          if (selected === null) {
            ariaValid = false
            ariaIssues.push(`Tab ${index} missing aria-selected`)
          }
          
          if (controls) {
            const correspondingPanel = document.getElementById(controls)
            if (!correspondingPanel) {
              ariaValid = false
              ariaIssues.push(`Tab ${index} controls missing panel: ${controls}`)
            }
          }
        })
      }
    }

    newState.ariaValid = ariaValid
    if (!ariaValid) {
      console.error('🚨 VERIFICATION FAILED: ARIA roles/attributes are missing or invalid!')
      console.error('🔍 ARIA Issues:', ariaIssues)
    }

    // 8. Theme attribute validation
    newState.themeAttributeValid = !!currentTheme && (currentTheme === 'modern' || currentTheme === 'retro')
    if (!newState.themeAttributeValid) {
      console.error('🚨 VERIFICATION FAILED: Theme attribute is missing or incorrect!')
    }

    // 9. Pseudo-elements validation (console frame)
    const consoleElement = document.querySelector('.console-nav-wrapper') || document.querySelector('.corner-accent')
    if (consoleElement) {
      const computedStyle = window.getComputedStyle(consoleElement, '::before')
      const pseudoBeforeValid = computedStyle.content !== 'none' && computedStyle.content !== ''
      
      const computedStyleAfter = window.getComputedStyle(consoleElement, '::after')
      const pseudoAfterValid = computedStyleAfter.content !== 'none' && computedStyleAfter.content !== ''
      
      newState.pseudoElementsValid = pseudoBeforeValid || pseudoAfterValid
      
      if (!newState.pseudoElementsValid && newState.currentMode === 'retro') {
        console.error('🚨 VERIFICATION FAILED: Console frame pseudo-elements are not present!')
      }
    }

    // 10. Console frame visual checks
    const consoleFrame = document.querySelector('.console-nav-wrapper') || document.querySelector('.corner-accent')
    if (consoleFrame) {
      const frameStyle = window.getComputedStyle(consoleFrame)
      const background = frameStyle.background || frameStyle.backgroundColor
      const boxShadow = frameStyle.boxShadow
      
      newState.consoleFrameGradient = background.includes('gradient') || background.includes('rgb(')
      newState.consoleFrameShadows = boxShadow && boxShadow !== 'none' && boxShadow.includes(',')
      
      if (!newState.consoleFrameGradient && newState.currentMode === 'retro') {
        console.warn('⚠️ VERIFICATION WARNING: Console frame background might not be a gradient')
      }
      
      if (!newState.consoleFrameShadows && newState.currentMode === 'retro') {
        console.warn('⚠️ VERIFICATION WARNING: Console frame might be missing multiple box-shadows')
      }
    }

    // 11. Viewport overflow check
    if (viewportElement) {
      const viewportStyle = window.getComputedStyle(viewportElement)
      newState.viewportOverflow = viewportStyle.overflow === 'auto' || viewportStyle.overflow === 'scroll' || viewportStyle.overflowY === 'auto' || viewportStyle.overflowY === 'scroll'
      
      if (!newState.viewportOverflow && newState.currentMode === 'retro') {
        console.error('🚨 VERIFICATION FAILED: Viewport does not have proper overflow settings!')
      }
    }

    // 12. Theme variables distinctness check
    const rootStyle = window.getComputedStyle(document.documentElement)
    const modernVars = {
      accentGold: rootStyle.getPropertyValue('--accent-gold'),
      bgMain: rootStyle.getPropertyValue('--bg-main'),
      textMain: rootStyle.getPropertyValue('--text-main')
    }
    
    // Temporarily switch to retro to check variables
    const originalTheme = currentTheme
    if (originalTheme !== 'retro') {
      document.documentElement.setAttribute('data-theme', 'retro')
    }
    
    const retroStyle = window.getComputedStyle(document.documentElement)
    const retroVars = {
      accentGold: retroStyle.getPropertyValue('--accent-gold'),
      bgMain: retroStyle.getPropertyValue('--bg-main'),
      textMain: retroStyle.getPropertyValue('--text-main')
    }
    
    // Restore original theme
    if (originalTheme !== 'retro') {
      document.documentElement.setAttribute('data-theme', originalTheme)
    }
    
    newState.themeVariablesDistinct = 
      modernVars.accentGold !== retroVars.accentGold ||
      modernVars.bgMain !== retroVars.bgMain ||
      modernVars.textMain !== retroVars.textMain

    setState(prev => ({ ...prev, ...newState }))
  }

  // Keyboard navigation test
  const testKeyboardNavigation = () => {
    const firstTab = document.querySelector('.console-tab') as HTMLElement
    if (!firstTab) return false

    try {
      // Focus first tab
      firstTab.focus()
      const initiallyFocused = document.activeElement === firstTab

      // Test arrow key navigation
      const rightArrowEvent = new KeyboardEvent('keydown', { key: 'ArrowRight' })
      firstTab.dispatchEvent(rightArrowEvent)

      // Check if focus moved
      setTimeout(() => {
        const newFocus = document.activeElement
        const focusMoved = newFocus !== firstTab && newFocus?.classList.contains('console-tab')
        
        setState(prev => ({ ...prev, keyboardNavigationWorking: initiallyFocused && focusMoved }))
        
        if (!focusMoved) {
          console.error('🚨 VERIFICATION FAILED: Keyboard navigation is not working!')
        }
      }, 100)

      return true
    } catch (error) {
      console.error('🚨 VERIFICATION FAILED: Keyboard navigation test threw an error:', error)
      return false
    }
  }

  useEffect(() => {
    if (!DEV_VERIFY) return

    // Initial verification
    runVerification()
    
    // Set up periodic verification
    verificationInterval.current = setInterval(runVerification, 2000)
    
    // Test keyboard navigation on mount
    setTimeout(testKeyboardNavigation, 1000)

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setTimeout(runVerification, 100)
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    return () => {
      if (verificationInterval.current) {
        clearInterval(verificationInterval.current)
      }
      observer.disconnect()
    }
  }, [])

  if (!DEV_VERIFY || !isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-[9999] bg-black/90 text-green-400 font-mono text-xs p-4 rounded-lg border border-green-500/30 max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-green-300 font-bold">DEV VERIFIER</h3>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-red-400 hover:text-red-300"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Mode:</span>
          <span className={state.currentMode === 'retro' ? 'text-green-300' : 'text-yellow-300'}>
            {state.currentMode.toUpperCase()}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Active Tab:</span>
          <span className="text-cyan-300">{state.activeTab.toUpperCase()}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Theme Saved:</span>
          <span className={state.localStorageTheme ? 'text-green-300' : 'text-red-300'}>
            {state.localStorageTheme ? 'YES' : 'NO'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Reduced Motion:</span>
          <span className={state.prefersReducedMotion ? 'text-yellow-300' : 'text-green-300'}>
            {state.prefersReducedMotion ? 'YES' : 'NO'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Viewport Scroll:</span>
          <span className={state.isViewportScrolling ? 'text-green-300' : 'text-red-300'}>
            {state.isViewportScrolling ? 'YES' : 'NO'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Visible Panels:</span>
          <span className={state.visiblePanels === 1 ? 'text-green-300' : 'text-red-300'}>
            {state.visiblePanels}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>ARIA Valid:</span>
          <span className={state.ariaValid ? 'text-green-300' : 'text-red-300'}>
            {state.ariaValid ? 'YES' : 'NO'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Pseudo-elements:</span>
          <span className={state.pseudoElementsValid ? 'text-green-300' : 'text-yellow-300'}>
            {state.pseudoElementsValid ? 'YES' : 'NO'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Frame Gradient:</span>
          <span className={state.consoleFrameGradient ? 'text-green-300' : 'text-yellow-300'}>
            {state.consoleFrameGradient ? 'YES' : 'NO'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Frame Shadows:</span>
          <span className={state.consoleFrameShadows ? 'text-green-300' : 'text-yellow-300'}>
            {state.consoleFrameShadows ? 'YES' : 'NO'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Viewport Overflow:</span>
          <span className={state.viewportOverflow ? 'text-green-300' : 'text-red-300'}>
            {state.viewportOverflow ? 'YES' : 'NO'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Theme Variables:</span>
          <span className={state.themeVariablesDistinct ? 'text-green-300' : 'text-red-300'}>
            {state.themeVariablesDistinct ? 'DISTINCT' : 'SAME'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Keyboard Nav:</span>
          <span className={state.keyboardNavigationWorking ? 'text-green-300' : 'text-yellow-300'}>
            {state.keyboardNavigationWorking ? 'WORKING' : 'UNKNOWN'}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-green-500/30">
        <button 
          onClick={runVerification}
          className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-300 py-1 px-2 rounded text-xs"
        >
          RUN MANUAL CHECK
        </button>
      </div>
    </div>
  )
}
