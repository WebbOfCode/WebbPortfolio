/**
 * THEME SYSTEM CONTROLLER
 * =======================
 * 
 * Manages theme switching between MODERN and RETRO themes
 * 
 * Features:
 * - Switches html data-theme attribute
 * - Persists user preference to localStorage
 * - Respects prefers-color-scheme on first load
 * - Updates toggle button state and accessibility attributes
 * - Smooth transitions between themes
 * 
 * Theme States:
 * - "modern" = Clean, minimal, high-contrast design
 * - "retro" = Early-2000s console UI with chrome panels and neon glows
 */

(function() {
  'use strict';
  
  // ============================================
  // CONSTANTS & CONFIGURATION
  // ============================================
  
  const THEME_KEY = 'portfolio-theme';
  const THEMES = {
    MODERN: 'modern',
    RETRO: 'retro'
  };
  
  const TOGGLE_TEXT = {
    [THEMES.MODERN]: 'RETRO',
    [THEMES.RETRO]: 'MODERN'
  };
  
  const TOGGLE_ICON = {
    [THEMES.MODERN]: '⚡',
    [THEMES.RETRO]: '◆'
  };
  
  // ============================================
  // STATE & DOM REFERENCES
  // ============================================
  
  let currentTheme = THEMES.MODERN;
  let toggleButton = null;
  let toggleText = null;
  let toggleIcon = null;
  
  // ============================================
  // THEME DETECTION & INITIALIZATION
  // ============================================
  
  /**
   * Get initial theme based on:
   * 1. Saved preference in localStorage
   * 2. System preference (prefers-color-scheme)
   * 3. Default to MODERN
   */
  function getInitialTheme() {
    // Check localStorage first
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme && (savedTheme === THEMES.MODERN || savedTheme === THEMES.RETRO)) {
      return savedTheme;
    }
    
    // Check system preference
    // Note: We interpret dark mode preference as interest in the RETRO theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEMES.RETRO;
    }
    
    // Default to modern
    return THEMES.MODERN;
  }
  
  /**
   * Apply theme to the document
   */
  function applyTheme(theme) {
    currentTheme = theme;
    
    // Update html data-theme attribute
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem(THEME_KEY, theme);
    
    // Update toggle button if it exists
    updateToggleButton();
    
    // Announce theme change to screen readers
    announceThemeChange(theme);
    
    // Log for debugging (can be removed in production)
    console.log(`Theme changed to: ${theme.toUpperCase()}`);
  }
  
  /**
   * Toggle between themes
   */
  function toggleTheme() {
    const newTheme = currentTheme === THEMES.MODERN ? THEMES.RETRO : THEMES.MODERN;
    applyTheme(newTheme);
  }
  
  // ============================================
  // TOGGLE BUTTON MANAGEMENT
  // ============================================
  
  /**
   * Update toggle button state and content
   */
  function updateToggleButton() {
    if (!toggleButton) return;
    
    // Update aria-pressed attribute for accessibility
    const isRetro = currentTheme === THEMES.RETRO;
    toggleButton.setAttribute('aria-pressed', isRetro.toString());
    
    // Update aria-label to reflect current action
    const nextTheme = isRetro ? THEMES.MODERN : THEMES.RETRO;
    toggleButton.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
    
    // Update button text and icon
    if (toggleText) {
      toggleText.textContent = TOGGLE_TEXT[currentTheme];
    }
    
    if (toggleIcon) {
      toggleIcon.textContent = TOGGLE_ICON[currentTheme];
    }
  }
  
  /**
   * Initialize toggle button event listeners
   */
  function initToggleButton() {
    toggleButton = document.getElementById('theme-toggle');
    
    if (!toggleButton) {
      console.warn('Theme toggle button not found');
      return;
    }
    
    toggleText = toggleButton.querySelector('.toggle-text');
    toggleIcon = toggleButton.querySelector('.toggle-icon');
    
    // Click event
    toggleButton.addEventListener('click', toggleTheme);
    
    // Keyboard support (Enter and Space)
    toggleButton.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
      }
    });
    
    // Update initial button state
    updateToggleButton();
  }
  
  // ============================================
  // ACCESSIBILITY
  // ============================================
  
  /**
   * Announce theme changes to screen readers
   */
  function announceThemeChange(theme) {
    // Create or update live region for screen reader announcements
    let liveRegion = document.getElementById('theme-announcement');
    
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'theme-announcement';
      liveRegion.setAttribute('role', 'status');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.style.position = 'absolute';
      liveRegion.style.left = '-10000px';
      liveRegion.style.width = '1px';
      liveRegion.style.height = '1px';
      liveRegion.style.overflow = 'hidden';
      document.body.appendChild(liveRegion);
    }
    
    const themeName = theme === THEMES.RETRO ? 'retro console' : 'modern minimal';
    liveRegion.textContent = `Theme changed to ${themeName} mode`;
  }
  
  // ============================================
  // SYSTEM PREFERENCE MONITORING
  // ============================================
  
  /**
   * Listen for system color scheme changes
   * Updates theme only if user hasn't manually selected a preference
   */
  function monitorSystemPreference() {
    if (!window.matchMedia) return;
    
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    darkModeQuery.addEventListener('change', (e) => {
      // Only auto-switch if user hasn't manually set a preference
      const hasManualPreference = localStorage.getItem(THEME_KEY);
      
      if (!hasManualPreference) {
        const newTheme = e.matches ? THEMES.RETRO : THEMES.MODERN;
        applyTheme(newTheme);
      }
    });
  }
  
  // ============================================
  // NAVIGATION ACTIVE STATE
  // ============================================
  
  /**
   * Update active navigation link based on scroll position
   */
  function initNavigationTracking() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    function updateActiveLink() {
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
          currentSection = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveLink);
    
    // Update on page load
    updateActiveLink();
  }
  
  // ============================================
  // FORM HANDLING
  // ============================================
  
  /**
   * Initialize contact form with basic validation and submission handling
   */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Basic validation
      if (!data.name || !data.email || !data.message) {
        alert('Please fill in all required fields');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // In a real implementation, you would send this to a server
      // For now, we'll just log it and show a success message
      console.log('Form submission:', data);
      
      // Show success message
      alert('MESSAGE TRANSMITTED\n\nThank you for your message. I will respond as soon as possible.');
      
      // Reset form
      form.reset();
    });
  }
  
  // ============================================
  // SMOOTH SCROLL ENHANCEMENT
  // ============================================
  
  /**
   * Enhance anchor links with smooth scrolling
   * (respects prefers-reduced-motion)
   */
  function initSmoothScroll() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // User prefers reduced motion, use instant scroll
      document.documentElement.style.scrollBehavior = 'auto';
      return;
    }
    
    // Handle anchor link clicks
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') return;
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          // Smooth scroll to target
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without jumping
          history.pushState(null, null, href);
        }
      });
    });
  }
  
  // ============================================
  // SKILL BAR ANIMATIONS
  // ============================================
  
  /**
   * Animate skill bars when they come into view
   */
  function initSkillBarAnimations() {
    const skillBars = document.querySelectorAll('.skill-fill');
    
    if (skillBars.length === 0) return;
    
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: just show all bars
      skillBars.forEach(bar => {
        bar.style.width = bar.style.getPropertyValue('--skill-width') || '0%';
      });
      return;
    }
    
    // Create observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.style.getPropertyValue('--skill-width') || '0%';
          
          // Trigger animation by setting width
          setTimeout(() => {
            bar.style.width = targetWidth;
          }, 100);
          
          // Stop observing this bar
          observer.unobserve(bar);
        }
      });
    }, {
      threshold: 0.5
    });
    
    // Observe all skill bars
    skillBars.forEach(bar => {
      bar.style.width = '0%'; // Start at 0
      observer.observe(bar);
    });
  }
  
  // ============================================
  // INITIALIZATION
  // ============================================
  
  /**
   * Initialize all features when DOM is ready
   */
  function init() {
    // Apply initial theme before page renders (prevents flash)
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);
    
    // Initialize features
    initToggleButton();
    monitorSystemPreference();
    initNavigationTracking();
    initContactForm();
    initSmoothScroll();
    initSkillBarAnimations();
    
    console.log('Portfolio system initialized');
  }
  
  // ============================================
  // EXECUTION
  // ============================================
  
  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM is already ready
    init();
  }
  
})();
