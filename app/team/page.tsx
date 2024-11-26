"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlyingElement } from "@/components/flying-element";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Rokon Uzzaman",
    role: "Founder & CEO",
    bio: "Visionary leader with 5+ years in software development and blockchain, driving InnoNexus's strategic growth.",
    image: "/team/rokon-uzzaman.jpg",
  },
  {
    name: "Mosaeb Hossain",
    role: "Chief Technology Officer",
    bio: "Expert in software architecture, blockchain, and machine learning, ensuring scalable and future-ready solutions.",
    image: "/team/mosaeb-hossain.jpg",
  },
  {
    name: "Arafat Hossain",
    role: "Head of Product Development",
    bio: "Detail-oriented leader ensuring products meet client expectations and industry standards.",
    image: "/team/arafat-hossain.jpg",
  },
  {
    name: "Sanjana Sami",
    role: "Head of Business Development",
    bio: "Strategic thinker fostering global partnerships and expanding InnoNexus’s presence.",
    image: "/team/sanjana-sami.jpg",
  },
];

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
                <CardTitle className="text-xl text-center gradient-text">
                  {member.name}
                </CardTitle>
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
  );
}
