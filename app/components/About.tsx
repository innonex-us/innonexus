"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
    })
    .from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
    }, "-=0.5")
    .from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
    }, "-=0.5")
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-16">
            <h2 ref={titleRef} className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              About InnoNexus
            </h2>
            <p ref={textRef} className="text-xl leading-relaxed text-gray-300">
              InnoNexus is a next-generation technology solutions provider dedicated to pushing the boundaries of what's possible in the digital world. Founded by a team of visionary developers and tech enthusiasts, InnoNexus has emerged as a leader in offering comprehensive digital solutions that encompass blockchain, Web 3.0, mobile application development, and machine learning.
            </p>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img
              ref={imageRef}
              src="/placeholder.svg?height=400&width=600"
              alt="InnoNexus Team"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

