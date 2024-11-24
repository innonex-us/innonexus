"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "./components/Header"
import MobileNavbar from "./components/MobileNavbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Industries from "./components/Industries"
import Technology from "./components/Technology"
import Contact from "./components/Contact"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // Initialize any global animations or ScrollTriggers here
  }, [])

  return (
    <main className="bg-black text-white">
      <div className="smooth-scroll">
        <Header />
        <Hero />
        <About />
        <Services />
        <Industries />
        <Technology />
        <Contact />
        <MobileNavbar />
      </div>
    </main>
  )
}

