"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
      })
    }

    window.addEventListener("mousemove", onMouseMove)
    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [])

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 bg-orange-500 rounded-full mix-blend-difference pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
    />
  )
}

