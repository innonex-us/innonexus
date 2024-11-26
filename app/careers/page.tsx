import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const openings = [
  {
    title: "Senior Blockchain Developer",
    department: "Engineering",
    location: "Remote",
    description: "We're seeking an experienced blockchain developer to lead our DeFi projects and smart contract development."
  },
  {
    title: "AI/ML Engineer",
    department: "Data Science",
    location: "Waukegan, IL",
    description: "Join our AI team to develop cutting-edge machine learning models for various industry applications."
  },
  {
    title: "Full Stack Web3 Developer",
    department: "Engineering",
    location: "Remote",
    description: "Help build the next generation of decentralized applications using the latest Web3 technologies."
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Waukegan, IL",
    description: "Create intuitive and engaging user experiences for our blockchain and AI-powered applications."
  }
]

export default function CareersPage() {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">Careers at InnoNexus</h1>
      <p className="text-xl mb-12">Join our team of innovators and help shape the future of technology. We offer exciting opportunities in blockchain, AI, Web3, and more.</p>
      <div className="grid gap-8 md:grid-cols-2">
        {openings.map((job) => (
          <Card key={job.title}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.department} | {job.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{job.description}</p>
              <Button asChild>
                <Link href="/apply">Apply Now</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="mb-4">Don't see a position that fits your skills? We're always looking for talented individuals to join our team.</p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}

