"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const industries = [
  "Finance & FinTech",
  "Healthcare",
  "Retail & E-commerce",
  "Supply Chain & Logistics",
  "Education & E-learning",
  "Media & Entertainment",
]

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    itemRefs.current.forEach((item, index) => {
      gsap.from(item, {
        x: index % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })
    })
  }, [])

  return (
    <section ref={sectionRef} id="industries" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Industries We Serve</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <li
              key={industry}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center text-xl font-semibold text-center"
            >
              {industry}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

