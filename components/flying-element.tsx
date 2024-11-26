"use client"

import { useEffect, useRef, ReactNode } from "react"
import { useInView } from "framer-motion"

interface FlyingElementProps {
  children: ReactNode
  delay?: number
}

export function FlyingElement({ children, delay = 0 }: FlyingElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView && ref.current) {
      setTimeout(() => {
        ref.current?.classList.add("visible")
      }, delay)
    }
  }, [isInView, delay])

  return (
    <div ref={ref} className="flying-element">
      {children}
    </div>
  )
}

