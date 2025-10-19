// Feature flags for controlling visibility of different sections
const defaultFlags = {
  // Set to false to hide the bartender services page and button
  showBartenderServices: false,
  
  // Future feature flags can be added here
  // showBlog: false,
  // showTestimonials: true,
}

// Function to get feature flags with localStorage persistence
export function getFeatureFlags() {
  if (typeof window === 'undefined') {
    // Server-side rendering - return defaults
    return defaultFlags
  }
  
  try {
    const stored = localStorage.getItem('portfolioFeatureFlags')
    if (stored) {
      const parsed = JSON.parse(stored)
      // Merge with defaults in case new flags were added
      return { ...defaultFlags, ...parsed }
    }
  } catch (error) {
    console.warn('Failed to load feature flags from localStorage:', error)
  }
  
  return defaultFlags
}

// Function to update feature flags and persist to localStorage
export function updateFeatureFlags(newFlags: Partial<typeof defaultFlags>) {
  if (typeof window === 'undefined') return
  
  try {
    const currentFlags = getFeatureFlags()
    const updatedFlags = { ...currentFlags, ...newFlags }
    localStorage.setItem('portfolioFeatureFlags', JSON.stringify(updatedFlags))
    return updatedFlags
  } catch (error) {
    console.error('Failed to save feature flags to localStorage:', error)
    return getFeatureFlags()
  }
}

// Export the dynamic feature flags
export const featureFlags = getFeatureFlags()

export default featureFlags