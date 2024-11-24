"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const technologies = [
  { name: "Blockchain", icon: "🔗" },
  { name: "Web 3.0", icon: "🌐" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
]

export default function Technology() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    itemRefs.current.forEach((item, index) => {
      gsap.from(item, {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: "back.out(1.7)",
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
    <section ref={sectionRef} id="technology" className="py-20 bg-gradient-to-br from-black to-purple-900">
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Our Technology Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="bg-gray-800 bg-opacity-50 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer w-28 h-28 flex flex-col items-center justify-center text-center"
            >
              <div className="text-3xl mb-2">{tech.icon}</div>
              <span className="text-sm font-semibold text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

