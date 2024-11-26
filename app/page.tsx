"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Cursor } from "@/components/cursor"
import { Button } from "@/components/ui/button"
import { FlyingElement } from "@/components/flying-element"
import { LottieAnimation } from "@/components/lottie-animation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

// Import Lottie animations
import heroAnimation from "@/public/animations/hero-animation.json"
import innovationAnimation from "@/public/animations/innovation-animation.json"
import collaborationAnimation from "@/public/animations/collaboration-animation.json"
import integrityAnimation from "@/public/animations/integrity-animation.json"
import blockchainAnimation from "@/public/animations/blockchain-animation.json"
import webDevAnimation from "@/public/animations/web-dev-animation.json"
import mobileAppAnimation from "@/public/animations/mobile-app-animation.json"
import aiMlAnimation from "@/public/animations/ai-ml-animation.json"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
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
      <section className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex items-center bg-gradient-to-b from-background to-muted/50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none gradient-text">
                Empowering Innovation Across the Digital Spectrum
              </h1>
              <p className="text-xl text-muted-foreground">
                InnoNexus is a next-generation technology solutions provider dedicated to pushing the boundaries of what's possible in the digital world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="gradient-border" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div 
              className="relative aspect-square"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <LottieAnimation animationData={heroAnimation} className="w-full h-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <FlyingElement>
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Core Values</h2>
          </FlyingElement>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Innovation",
                description: "We are committed to exploring new ideas, technologies, and methodologies to provide cutting-edge solutions that keep our clients ahead of the curve.",
                animation: innovationAnimation
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork, both internally and with our clients. By fostering a collaborative environment, we ensure that every project benefits from diverse perspectives.",
                animation: collaborationAnimation
              },
              {
                title: "Integrity",
                description: "Trust and transparency are the cornerstones of our business. We operate with the highest standards of integrity, ensuring that our solutions are secure, reliable, and ethically developed.",
                animation: integrityAnimation
              }
            ].map((feature, index) => (
              <FlyingElement key={feature.title} delay={index * 200}>
                <Card>
                  <CardHeader>
                    <div className="w-24 h-24 mb-4 mx-auto">
                      <LottieAnimation animationData={feature.animation} className="w-full h-full" />
                    </div>
                    <CardTitle className="gradient-text text-center">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </FlyingElement>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <FlyingElement>
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Our Services</h2>
          </FlyingElement>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Blockchain Solutions",
                description: "Develop secure and efficient blockchain applications, smart contracts, and decentralized systems.",
                animation: blockchainAnimation
              },
              {
                title: "Web & Web 3.0 Development",
                description: "Create modern, responsive web applications and decentralized web solutions.",
                animation: webDevAnimation
              },
              {
                title: "Mobile App Development",
                description: "Build cross-platform mobile applications that deliver exceptional user experiences.",
                animation: mobileAppAnimation
              },
              {
                title: "AI & Machine Learning",
                description: "Implement AI-driven solutions to automate processes and gain actionable insights from data.",
                animation: aiMlAnimation
              }
            ].map((service, index) => (
              <FlyingElement key={service.title} delay={index * 200}>
                <Card>
                  <CardHeader>
                    <div className="w-24 h-24 mb-4 mx-auto">
                      <LottieAnimation animationData={service.animation} className="w-full h-full" />
                    </div>
                    <CardTitle className="gradient-text text-center">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </FlyingElement>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <FlyingElement>
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Industries We Serve</h2>
          </FlyingElement>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {["Finance & FinTech", "Healthcare", "Retail & E-commerce", "Supply Chain & Logistics", "Education", "Media & Entertainment"].map((industry, index) => (
              <FlyingElement key={industry} delay={index * 100}>
                <Card className="text-center hover:bg-primary/10 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg gradient-text">{industry}</CardTitle>
                  </CardHeader>
                </Card>
              </FlyingElement>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <FlyingElement>
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Frequently Asked Questions</h2>
          </FlyingElement>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {[
              {
                question: "What technologies does InnoNexus specialize in?",
                answer: "InnoNexus specializes in blockchain, Web 3.0, mobile application development, and machine learning. We also have expertise in cloud computing, DevOps, and various programming languages."
              },
              {
                question: "How does InnoNexus ensure the security of blockchain solutions?",
                answer: "We implement best practices in smart contract development, conduct thorough security audits, and use advanced encryption techniques to ensure the highest level of security for our blockchain solutions."
              },
              {
                question: "Can InnoNexus help with integrating AI into existing systems?",
                answer: "Yes, we offer AI integration services to enhance existing systems. Our team can assess your current infrastructure and implement AI solutions that improve efficiency and provide valuable insights."
              },
              {
                question: "What is InnoNexus's approach to project management?",
                answer: "We follow an agile methodology, ensuring flexibility and continuous collaboration with our clients. Our process includes regular updates, sprint reviews, and adaptability to changing requirements."
              }
            ].map((faq, index) => (
              <FlyingElement key={faq.question} delay={index * 100}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </FlyingElement>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <FlyingElement>
              <h2 className="text-4xl font-bold gradient-text">Ready to Innovate?</h2>
            </FlyingElement>
            <FlyingElement delay={200}>
              <p className="text-xl text-muted-foreground">
                Let's work together to bring your ideas to life. Our team of experts is ready to help you navigate the digital landscape and create solutions that drive real-world change.
              </p>
            </FlyingElement>
            <FlyingElement delay={400}>
              <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </FlyingElement>
          </div>
        </div>
      </section>
    </main>
  )
}

