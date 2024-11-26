import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const caseStudies = [
  {
    title: "Revolutionizing Supply Chain Management with Blockchain",
    client: "Global Logistics Company",
    description: "Implemented a custom blockchain solution for real-time shipment tracking, resulting in a 30% reduction in delays and improved visibility across the supply chain.",
    outcome: "30% reduction in delays, improved visibility"
  },
  {
    title: "Enhancing E-commerce Sales with AI-Powered Personalization",
    client: "Popular E-commerce Platform",
    description: "Developed a machine learning model for personalized product recommendations, seamlessly integrated into the existing platform.",
    outcome: "20% increase in sales, 15% improvement in customer retention"
  },
  {
    title: "Building a Secure Decentralized Finance (DeFi) Platform",
    client: "FinTech Startup",
    description: "Designed and developed a scalable DeFi platform with robust smart contracts for secure and transparent cryptocurrency transactions.",
    outcome: "Attracted over 10,000 users within first three months"
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
      <p className="text-xl mb-12">Explore how InnoNexus has helped businesses across various industries leverage cutting-edge technologies to solve complex challenges and drive growth.</p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Card key={study.title}>
            <CardHeader>
              <CardTitle>{study.title}</CardTitle>
              <CardDescription>{study.client}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{study.description}</p>
              <p className="font-semibold">Outcome: {study.outcome}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/contact">Discuss Your Project</Link>
        </Button>
      </div>
    </div>
  )
}

