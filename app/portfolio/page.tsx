import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const portfolioItems = [
  {
    name: "DecentralAI",
    description: "AI-powered decentralized data marketplace",
    category: "AI / Blockchain",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "ChainFinance",
    description: "Next-gen DeFi lending and borrowing platform",
    category: "DeFi",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "MeshNet",
    description: "Decentralized mesh network infrastructure",
    category: "DePin",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "ScaleTech",
    description: "Layer 2 scaling solution for Ethereum",
    category: "L1/L2",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function PortfolioPage() {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">Our Portfolio</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <Card key={item.name}>
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

