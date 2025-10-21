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

    const node = ref.current
    if (node) {
      observer.observe(node)
    }

    return () => {
      if (node) {
        observer.unobserve(node)
      }
    }
  }, [threshold, rootMargin, hasAnimated])

  return [ref, isInView] as const
}