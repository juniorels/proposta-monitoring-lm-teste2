"use client"

import { useEffect, useState, ReactNode } from "react"

interface SlideWrapperProps {
  children: ReactNode
  className?: string
}

export default function SlideWrapper({ children, className = "" }: SlideWrapperProps) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const calculateScale = () => {
      const baseWidth = 1920
      const baseHeight = 1080
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      
      // Calculate scale based on viewport, maintaining aspect ratio
      const scaleX = viewportWidth / baseWidth
      const scaleY = viewportHeight / baseHeight
      const newScale = Math.min(scaleX, scaleY, 1.2) // Max scale 1.2x
      
      setScale(Math.max(newScale, 0.5)) // Min scale 0.5x
      document.documentElement.style.setProperty('--slide-scale', String(newScale))
    }

    calculateScale()
    window.addEventListener('resize', calculateScale)
    return () => window.removeEventListener('resize', calculateScale)
  }, [])

  return (
    <div 
      className={`slide-content ${className}`}
      style={{
        fontSize: `calc(16px * ${scale})`,
      }}
    >
      {children}
    </div>
  )
}
