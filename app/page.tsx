"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Cursor } from "@/components/cursor"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const programsRef = useRef(null)
  const partnersRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const sections = [heroRef, featuresRef, programsRef, partnersRef, ctaRef]

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
      <section ref={heroRef} className="min-h-screen pt-32 pb-16 flex items-center">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                Beyond Capital
              </h1>
              <p className="text-xl text-muted-foreground">
                Supercharging Web3 Builders - transforming visionary ideas into real-world growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="#">Apply for Incubation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Hero"
                className="relative w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Smart Capital</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Our ecosystem support goes beyond funding, providing strategic resources for growth.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>End-to-End Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>From funding to go-to-market strategies, we provide comprehensive assistance at every stage.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Unique Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We go beyond capital, offering a holistic ecosystem to transform ideas into industry leaders.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section ref={programsRef} className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Our Programs</h2>
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>AI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Advanced artificial intelligence solutions for various industries.</CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>DeFi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Decentralized finance infrastructure to revolutionize financial systems.</CardDescription>
</CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>DePin</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Decentralized physical infrastructure for the next generation of networks.</CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>L1/L2</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Layer 1 and Layer 2 blockchain solutions for scalability and efficiency.</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto">
              <img
                src="/placeholder.svg?height=800&width=600"
                alt="Programs"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section ref={partnersRef} className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <img src="/placeholder.svg?height=60&width=180" alt="Partner 1" className="h-12" />
            <img src="/placeholder.svg?height=60&width=180" alt="Partner 2" className="h-12" />
            <img src="/placeholder.svg?height=60&width=180" alt="Partner 3" className="h-12" />
            <img src="/placeholder.svg?height=60&width=180" alt="Partner 4" className="h-12" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Ready to Build the Future?</h2>
            <p className="text-xl text-muted-foreground">
              Join our ecosystem and transform your vision into reality. We provide the tools, resources, and support you need to succeed in the Web3 space.
            </p>
            <Button size="lg" asChild>
              <Link href="#">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}