import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const mediaItems = [
  {
    title: "InnoNexus Launches $100M Web3 Fund",
    source: "TechCrunch",
    date: "2024-03-15",
    link: "#",
  },
  {
    title: "The Future of DeFi: Interview with InnoNexus CEO",
    source: "CoinDesk",
    date: "2024-02-28",
    link: "#",
  },
  {
    title: "InnoNexus Partners with Leading Blockchain University",
    source: "Bloomberg",
    date: "2024-02-10",
    link: "#",
  },
  {
    title: "Web3 Accelerator Program Announces New Cohort",
    source: "Forbes",
    date: "2024-01-22",
    link: "#",
  },
]

export default function MediaPage() {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">Media Coverage</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {mediaItems.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.source} - {item.date}</p>
              <a href={item.link} className="text-primary hover:underline mt-2 inline-block">Read More</a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

