import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    bio: "Blockchain veteran with 10+ years of experience in the industry.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "John Smith",
    role: "CTO",
    bio: "Former lead developer at Ethereum, passionate about scalability solutions.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Alice Johnson",
    role: "Head of Investments",
    bio: "Ex-Goldman Sachs, specializing in Web3 and DeFi investments.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Bob Williams",
    role: "Head of Partnerships",
    bio: "Seasoned business development expert with a focus on blockchain ecosystems.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function TeamPage() {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <Card key={member.name}>
            <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

