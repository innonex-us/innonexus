import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blockchainServices = [
  {
    title: "Smart Contract Development",
    description: "We develop secure, efficient, and audited smart contracts for various blockchain platforms, enabling automated and trustless transactions."
  },
  {
    title: "Decentralized Applications (dApps)",
    description: "Our team builds user-friendly dApps that leverage blockchain technology for enhanced security, transparency, and efficiency."
  },
  {
    title: "Tokenization Solutions",
    description: "We help businesses create and manage digital assets, from utility tokens to security tokens, ensuring compliance with regulations."
  },
  {
    title: "Blockchain Consulting",
    description: "Our experts provide strategic guidance on blockchain adoption, helping businesses identify the right use cases and implementation strategies."
  }
]

export default function BlockchainServicesPage() {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">Blockchain Services</h1>
      <p className="text-xl mb-12">Leverage the power of blockchain technology to enhance security, transparency, and efficiency in your business operations.</p>
      <div className="grid gap-8 md:grid-cols-2">
        {blockchainServices.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/contact">Discuss Your Blockchain Project</Link>
        </Button>
      </div>
    </div>
  )
}

