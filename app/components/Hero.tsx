"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(headingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
    .from(subheadingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5")
    .from(ctaRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5")

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <h1 
          ref={headingRef}
          className="text-6xl md:text-8xl font-bold mb-6 tech-font tracking-tighter"
        >
          GROW
          <br />
          <span className="gradient-text">BACKING</span>
          <br />
          TOMORROW
        </h1>
        
        <p 
          ref={subheadingRef}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Backing the very best web3 builders - transforming visionary ideas into real-world growth.
        </p>
        
        <div ref={ctaRef} className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link
            href="#apply"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
          >
            Apply for Incubation
          </Link>
          <Link
            href="#learn"
            className="text-white hover:text-orange-500 flex items-center gap-2 transition-colors"
          >
            Learn More
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl" />
      </div>
    </div>
  )
}

