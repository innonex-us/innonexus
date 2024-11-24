"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const services = [
  { title: "Blockchain Solutions", description: "Secure, transparent, and decentralized blockchain solutions.", icon: "🔗" },
  { title: "Web & Web 3.0 Development", description: "Modern web development with a focus on decentralized technologies.", icon: "🌐" },
  { title: "Mobile Application Development", description: "Engaging and feature-rich mobile apps for iOS and Android.", icon: "📱" },
  { title: "Machine Learning & AI Solutions", description: "Intelligent applications that automate processes and provide insights.", icon: "🧠" },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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

    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
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
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-black to-blue-900">
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

