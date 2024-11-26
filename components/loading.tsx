"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      onAnimationComplete={() => document.body.style.overflow = "auto"}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="relative w-24 h-24">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-2 border-primary"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.img
            src="/logo.png"
            alt="InnoNexus Logo"
            className="w-12 h-12"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

