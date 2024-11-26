import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    title: "Blockchain Solutions",
    description: "Develop secure and efficient blockchain applications, smart contracts, and decentralized systems.",
    link: "/services/blockchain"
  },
  {
    title: "Web & Web 3.0 Development",
    description: "Create modern, responsive web applications and decentralized web solutions.",
    link: "/services/web3"
  },
  {
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications that deliver exceptional user experiences.",
    link: "/services/mobile"
  },
  {
    title: "AI & Machine Learning",
    description: "Implement AI-driven solutions to automate processes and gain actionable insights from data.",
    link: "/services/ai-ml"
  },
]

export default function ServicesPage() {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
              <Link href={service.link} className="text-primary hover:underline mt-4 inline-block">
                Learn More
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

