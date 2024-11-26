"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FlyingElement } from "@/components/flying-element"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    title: "Blockchain Solutions",
    description: "Secure and transparent blockchain applications for various industries.",
    link: "/services/blockchain"
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent systems that learn and adapt to your business needs.",
    link: "/services/ai-ml"
  },
  {
    title: "IoT Development",
    description: "Connected device ecosystems for smart homes and industries.",
    link: "/services/iot"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and flexible cloud infrastructure and applications.",
    link: "/services/cloud"
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications with stunning UX/UI.",
    link: "/services/mobile"
  },
  {
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies.",
    link: "/services/web"
  }
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center gradient-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <FlyingElement key={service.title} delay={index * 100}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background to-muted">
              <CardHeader>
                <CardTitle className="text-xl gradient-text">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <Button asChild>
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </FlyingElement>
        ))}
      </div>
    </div>
  )
}