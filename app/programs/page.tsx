import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const programs = [
  {
    title: "AI Accelerator",
    description: "Empowering startups to harness the power of artificial intelligence.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "DeFi Incubator",
    description: "Supporting innovative decentralized finance projects.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "DePin Launchpad",
    description: "Launching the next generation of decentralized physical infrastructure.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    title: "L1/L2 Solutions",
    description: "Accelerating scalable blockchain infrastructure development.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function ProgramsPage() {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">Our Programs</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {programs.map((program) => (
          <Card key={program.title}>
            <CardHeader>
              <img src={program.image} alt={program.title} className="w-16 h-16 mb-4" />
              <CardTitle>{program.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{program.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/apply">Apply Now</Link>
        </Button>
      </div>
    </div>
  )
}

