import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, TruckIcon, ShoppingCart, Banknote, Badge } from 'lucide-react'

const caseStudies = [
  {
    title: "Revolutionizing Supply Chain Management",
    description: "Developed a custom blockchain solution for real-time shipment tracking, resulting in a 30% reduction in delays and improved visibility across the supply chain.",
    industry: "Logistics",
    icon: TruckIcon,
    results: ["30% reduction in delays", "Enhanced supply chain visibility", "Improved partner trust"],
  },
  {
    title: "AI-Powered E-commerce Personalization",
    description: "Implemented an AI-driven recommendation system for a popular e-commerce platform, leading to a significant increase in sales and customer retention.",
    industry: "E-commerce",
    icon: ShoppingCart,
    results: ["20% increase in sales", "15% improvement in customer retention", "Enhanced user experience"],
  },
  {
    title: "Secure Decentralized Finance Platform",
    description: "Built a scalable DeFi platform with robust smart contracts, enabling secure cryptocurrency lending, borrowing, and trading without intermediaries.",
    industry: "FinTech",
    icon: Banknote,
    results: ["10,000+ users in first 3 months", "Established credibility in DeFi space", "Seamless token swaps"],
  },
]

export default function CaseStudies() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <study.icon className="w-6 h-6 text-white" />
                </div>
                
                <Badge className="mb-2">{study.industry}</Badge>
                <CardTitle className="text-xl font-semibold text-white">{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 mb-4">{study.description}</CardDescription>
                <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                <ul className="list-disc list-inside text-gray-400">
                  {study.results.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/case-studies" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
            View All Case Studies
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

