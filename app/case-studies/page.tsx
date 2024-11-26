"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FlyingElement } from "@/components/flying-element"
import Link from "next/link"
import { motion } from "framer-motion"

const caseStudies = [
  {
    title: "Blockchain-based Supply Chain Solution",
    client: "Global Logistics Co.",
    description: "Implemented a blockchain solution to enhance transparency and traceability in the supply chain, resulting in a 30% reduction in disputes and a 20% increase in efficiency.",
    results: ["30% reduction in disputes", "20% increase in efficiency", "100% traceability of products"]
  },
  {
    title: "AI-Powered Customer Service Platform",
    client: "TechRetail Inc.",
    description: "Developed an AI chatbot that handles 70% of customer inquiries, reducing response times by 60% and improving customer satisfaction scores by 25%.",
    results: ["70% of inquiries handled by AI", "60% reduction in response times", "25% improvement in customer satisfaction"]
  },
  {
    title: "IoT Fleet Management System",
    client: "EcoTransport Ltd.",
    description: "Created an IoT-based fleet management system that optimized routes and reduced fuel consumption by 15%, leading to significant cost savings and reduced carbon emissions.",
    results: ["15% reduction in fuel consumption", "20% increase in fleet efficiency", "30% decrease in maintenance costs"]
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center gradient-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Success Stories
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {caseStudies.map((study, index) => (
          <FlyingElement key={study.title} delay={index * 100}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background to-muted">
              <CardHeader>
                <CardTitle className="text-xl gradient-text">{study.title}</CardTitle>
                <p className="text-muted-foreground">{study.client}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{study.description}</p>
                <ul className="list-disc list-inside mb-4">
                  {study.results.map((result, i) => (
                    <li key={i} className="text-muted-foreground">{result}</li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">Read Full Case Study</Button>
              </CardContent>
            </Card>
          </FlyingElement>
        ))}
      </div>
      <div className="text-center">
        <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90" asChild>
          <Link href="/contact">Discuss Your Project</Link>
        </Button>
      </div>
    </div>
  )
}

