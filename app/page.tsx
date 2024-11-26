"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Cursor } from "@/components/cursor"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const servicesRef = useRef(null)
  const industriesRef = useRef(null)
  const ctaRef = useRef(null)
  const faqRef = useRef(null)

  useEffect(() => {
    const sections = [heroRef, featuresRef, servicesRef, industriesRef, ctaRef, faqRef]

    sections.forEach((section) => {
      gsap.from(section.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    })
  }, [])

  return (
    <main className="relative">
      <Cursor />
      
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex items-center">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                Empowering Innovation Across the Digital Spectrum
              </h1>
              <p className="text-xl text-muted-foreground">
                InnoNexus is a next-generation technology solutions provider dedicated to pushing the boundaries of what's possible in the digital world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Digital Innovation"
                className="relative w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We are committed to exploring new ideas, technologies, and methodologies to provide cutting-edge solutions that keep our clients ahead of the curve.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We believe in the power of teamwork, both internally and with our clients. By fostering a collaborative environment, we ensure that every project benefits from diverse perspectives.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Trust and transparency are the cornerstones of our business. We operate with the highest standards of integrity, ensuring that our solutions are secure, reliable, and ethically developed.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Blockchain Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Develop secure and efficient blockchain applications, smart contracts, and decentralized systems.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Web & Web 3.0 Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Create modern, responsive web applications and decentralized web solutions.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mobile App Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Build cross-platform mobile applications that deliver exceptional user experiences.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Implement AI-driven solutions to automate processes and gain actionable insights from data.</CardDescription>
              </CardContent>
            </Card>
          </div>
</div>
      </section>

      {/* Industries Section */}
      <section ref={industriesRef} className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {["Finance & FinTech", "Healthcare", "Retail & E-commerce", "Supply Chain & Logistics", "Education", "Media & Entertainment"].map((industry) => (
              <Card key={industry} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{industry}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>What technologies does InnoNexus specialize in?</AccordionTrigger>
              <AccordionContent>
                InnoNexus specializes in blockchain, Web 3.0, mobile application development, and machine learning. We also have expertise in cloud computing, DevOps, and various programming languages.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does InnoNexus ensure the security of blockchain solutions?</AccordionTrigger>
              <AccordionContent>
                We implement best practices in smart contract development, conduct thorough security audits, and use advanced encryption techniques to ensure the highest level of security for our blockchain solutions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can InnoNexus help with integrating AI into existing systems?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer AI integration services to enhance existing systems. Our team can assess your current infrastructure and implement AI solutions that improve efficiency and provide valuable insights.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What is InnoNexus's approach to project management?</AccordionTrigger>
              <AccordionContent>
                We follow an agile methodology, ensuring flexibility and continuous collaboration with our clients. Our process includes regular updates, sprint reviews, and adaptability to changing requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Ready to Innovate?</h2>
            <p className="text-xl text-muted-foreground">
              Let's work together to bring your ideas to life. Our team of experts is ready to help you navigate the digital landscape and create solutions that drive real-world change.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

