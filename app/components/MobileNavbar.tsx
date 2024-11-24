"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Link from "next/link"

export default function MobileNavbar() {
  const navbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.from(navbarRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  return (
    <div ref={navbarRef} className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md md:hidden">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-around items-center">
          <li>
            <Link href="#about" className="text-white hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="text-white hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Services
            </Link>
          </li>
          <li>
            <Link href="#industries" className="text-white hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Industries
            </Link>
          </li>
          <li>
            <Link href="#technology" className="text-white hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Technology
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-white hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

