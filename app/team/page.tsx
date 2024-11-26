"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FlyingElement } from "@/components/flying-element"
import Image from "next/image"
import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Dr. Emily Chen",
    role: "CEO & Founder",
    bio: "Visionary leader with a Ph.D. in Computer Science and 15+ years of experience in tech innovation.",
    image: "/team/emily-chen.jpg"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    bio: "Blockchain and AI expert with multiple patents and a track record of successful product launches.",
    image: "/team/michael-rodriguez.jpg"
  },
  {
    name: "Sarah Patel",
    role: "Head of Product",
    bio: "Product strategist with an MBA and a history of developing award-winning tech products.",
    image: "/team/sarah-patel.jpg"
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    bio: "Full-stack developer specializing in scalable web and mobile applications, with expertise in cloud architecture.",
    image: "/team/david-kim.jpg"
  }
]

export default function TeamPage() {
  return (
    <div className="container mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center gradient-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Innovative Team
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <FlyingElement key={member.name} delay={index * 100}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background to-muted">
              <CardHeader>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={200} 
                    height={200} 
                    className="rounded-full mx-auto mb-4"
                  />
                </motion.div>
                <CardTitle className="text-xl text-center gradient-text">{member.name}</CardTitle>
                <p className="text-center text-muted-foreground">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-center">{member.bio}</p>
              </CardContent>
            </Card>
          </FlyingElement>
        ))}
      </div>
    </div>
  )
}

