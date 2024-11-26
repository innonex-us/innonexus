"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FlyingElement } from "@/components/flying-element"
import { motion } from "framer-motion"

const technologies = [
  { name: "Blockchain", description: "Secure, decentralized ledger technology for transparent and tamper-proof data management." },
  { name: "Artificial Intelligence", description: "Advanced machine learning algorithms for intelligent decision-making and process automation." },
  { name: "Internet of Things", description: "Interconnected device ecosystems for smart, data-driven environments and operations." },
  { name: "Cloud Computing", description: "Scalable, on-demand computing resources for flexible and efficient IT infrastructure." },
  { name: "5G Networks", description: "High-speed, low-latency wireless connectivity enabling real-time data processing and communication." },
  { name: "Quantum Computing", description: "Next-generation computing leveraging quantum mechanics for unprecedented processing power." },
]

export default function TechnologyPage() {
  return (
    <div className="container mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center gradient-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Technologies
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <FlyingElement key={tech.name} delay={index * 100}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background to-muted">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text mb-4">{tech.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tech.description}</p>
              </CardContent>
            </Card>
          </FlyingElement>
        ))}
      </div>
    </div>
  )
}

