import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const industries = [
  {
    title: "Finance & FinTech",
    description: "Revolutionizing financial services with blockchain, AI, and secure digital solutions."
  },
  {
    title: "Healthcare",
    description: "Enhancing patient care and operational efficiency through innovative technology."
  },
  {
    title: "Retail & E-commerce",
    description: "Creating seamless shopping experiences with AI-powered personalization and blockchain security."
  },
  {
    title: "Supply Chain & Logistics",
    description: "Optimizing operations with blockchain transparency and AI-driven insights."
  },
  {
    title: "Education",
    description: "Transforming learning experiences with interactive platforms and AI tutoring systems."
  },
  {
    title: "Media & Entertainment",
    description: "Innovating content creation and distribution with Web3 and AI technologies."
  }
]

export default function IndustriesPage() {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">Industries We Serve</h1>
      <p className="text-xl mb-12">At InnoNexus, we apply our expertise across various sectors, delivering tailored solutions that address industry-specific challenges and drive innovation.</p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <Card key={industry.title}>
            <CardHeader>
              <CardTitle>{industry.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{industry.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

