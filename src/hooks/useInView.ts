'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for intersection observer animations
 * Triggers animations when elements come into view
 * @param threshold - Percentage of element visible before triggering (0.1 = 10%)
 * @param rootMargin - Margin around viewport for early/late triggering
 */
export const useInView = (threshold = 0.1, rootMargin = '0px') => {
  const [isInView, setIsInView] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true)
          setHasAnimated(true) // Animate only once for performance
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, hasAnimated])

  return [ref, isInView] as const
}