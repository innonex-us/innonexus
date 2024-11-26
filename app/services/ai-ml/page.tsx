import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const aiMlServices = [
  {
    title: "Machine Learning Solutions",
    description: "We develop custom machine learning models to help businesses extract insights from data, make predictions, and automate decision-making processes."
  },
  {
    title: "Natural Language Processing",
    description: "Our NLP solutions enable machines to understand, interpret, and generate human language, powering chatbots, sentiment analysis, and more."
  },
  {
    title: "Computer Vision",
    description: "We create AI systems that can analyze and interpret visual information from the world, enabling applications like facial recognition and object detection."
  },
  {
    title: "AI Integration and Consulting",
    description: "Our experts help businesses identify AI opportunities, develop AI strategies, and integrate AI solutions into existing systems and workflows."
  }
]

export default function AiMlServicesPage() {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">AI and Machine Learning Services</h1>
      <p className="text-xl mb-12">Harness the power of artificial intelligence and machine learning to drive innovation, improve efficiency, and gain competitive advantage.</p>
      <div className="grid gap-8 md:grid-cols-2">
        {aiMlServices.map((service) => (
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
          <Link href="/contact">Explore AI/ML Solutions</Link>
        </Button>
      </div>
    </div>
  )
}

