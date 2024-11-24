'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useMouse } from 'react-use'

interface AnimatedBackgroundProps {
  children: React.ReactNode
}

const colorSchemes = [
  ['rgb(51, 33, 82)', 'rgb(74, 44, 114)', 'rgb(98, 56, 148)', 'rgb(123, 68, 184)', 'rgb(149, 80, 221)'],
  ['rgb(92, 47, 97)', 'rgb(107, 67, 123)', 'rgb(122, 87, 151)', 'rgb(137, 108, 180)', 'rgb(152, 129, 209)'],
  // Add more color schemes here...
]

export default function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  const [colorScheme, setColorScheme] = useState(colorSchemes[0])
  const controls = useAnimation()
  const ref = React.useRef(null)
  const { elX, elY } = useMouse(ref)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight)

      controls.start({
        backgroundPosition: `0% ${scrollPercentage * 100}%`,
        transition: { type: 'tween', ease: 'linear' }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [controls])

  useEffect(() => {
    const interval = setInterval(() => {
      setColorScheme(prev => {
        const nextIndex = (colorSchemes.indexOf(prev) + 1) % colorSchemes.length
        return colorSchemes[nextIndex]
      })
    }, 10000) // Change color scheme every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      ref={ref}
      className="min-h-screen"
      animate={controls}
      style={{
        background: `linear-gradient(${colorScheme.join(', ')})`,
        backgroundSize: '100% 100%',
        transition: 'background 1s ease'
      }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${elX}px ${elY}px, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 50%)`,
        }}
        transition={{ type: 'tween', ease: 'linear' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

