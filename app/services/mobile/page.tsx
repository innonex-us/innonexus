import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const mobileServices = [
  {
    title: "Cross-Platform App Development",
    description: "We build high-performance mobile apps that work seamlessly on both iOS and Android platforms using technologies like React Native and Flutter."
  },
  {
    title: "Native iOS and Android Development",
    description: "For apps that require platform-specific features, we offer native development services using Swift for iOS and Kotlin for Android."
  },
  {
    title: "Mobile UI/UX Design",
    description: "Our design team creates intuitive and engaging mobile interfaces that provide exceptional user experiences and drive user engagement."
  },
  {
    title: "Mobile App Integration",
    description: "We integrate mobile apps with backend services, APIs, and third-party tools to create fully functional and feature-rich applications."
  }
]

export default function MobileServicesPage() {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">Mobile App Development Services</h1>
      <p className="text-xl mb-12">Create powerful, user-friendly mobile applications that engage your audience and drive your business forward.</p>
      <div className="grid gap-8 md:grid-cols-2">
        {mobileServices.map((service) => (
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
          <Link href="/contact">Start Your Mobile App Project</Link>
        </Button>
      </div>
    </div>
  )
}

