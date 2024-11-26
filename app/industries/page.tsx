"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FlyingElement } from "@/components/flying-element";
import { motion } from "framer-motion";

const industries = [
  {
    title: "Finance & FinTech",
    description: "Empowering financial services with blockchain, AI, and secure digital transformation to deliver transparency and efficiency.",
  },
  {
    title: "Healthcare",
    description: "Revolutionizing healthcare with AI diagnostics, blockchain-secured patient data, and enhanced patient engagement solutions.",
  },
  {
    title: "Retail & E-commerce",
    description: "Driving personalized shopping experiences with AI-powered recommendations and secure payment integrations.",
  },
  {
    title: "Supply Chain & Logistics",
    description: "Enhancing supply chain transparency and efficiency through blockchain technology and AI-driven logistics solutions.",
  },
  {
    title: "Education",
    description: "Creating engaging learning environments with interactive e-learning platforms, AI tutoring systems, and blockchain credential verification.",
  },
  {
    title: "Media & Entertainment",
    description: "Transforming content creation and distribution using Web3 technologies, blockchain rights management, and AI-driven insights.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="container py-24 md:py-32">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center gradient-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Industries We Serve
      </motion.h1>
      <motion.p
        className="text-xl text-center mb-12 text-muted-foreground"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        At InnoNexus, we apply our technological expertise to various industries, delivering custom solutions that address specific challenges and foster innovation.
      </motion.p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => (
          <FlyingElement key={industry.title} delay={index * 100}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background to-muted"
              >
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{industry.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </FlyingElement>
        ))}
      </div>
    </div>
  );
}
