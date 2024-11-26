import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const technologies = [
  {
    title: "Blockchain Platforms",
    items: ["Ethereum", "Polkadot", "Hyperledger", "Solana"]
  },
  {
    title: "Web Technologies",
    items: ["React", "Next.js", "Node.js", "Django", "Ruby on Rails"]
  },
  {
    title: "Mobile Development",
    items: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    title: "AI & Machine Learning",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV"]
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
  }
]

export default function TechnologyPage() {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">Our Technology Expertise</h1>
      <p className="text-xl mb-12">At InnoNexus, we leverage cutting-edge technologies to deliver innovative solutions across various domains.</p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech) => (
          <Card key={tech.title}>
            <CardHeader>
              <CardTitle>{tech.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <ul className="list-disc pl-5">
                  {tech.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

