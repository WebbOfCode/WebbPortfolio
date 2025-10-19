'use client'

import { useState, useEffect } from 'react'

/**
 * Custom hook for typewriter animation effect
 * @param text - The text to animate
 * @param speed - Typing speed in milliseconds per character
 * @param delay - Initial delay before starting animation
 */
export const useTypewriter = (text: string, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, currentIndex === 0 ? delay : speed)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed, delay])

  return { displayText, isComplete }
}