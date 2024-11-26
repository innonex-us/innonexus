"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FlyingElement } from "@/components/flying-element";
import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Revolutionizing Supply Chain Management with Blockchain",
    client: "Global Logistics Co.",
    description: "Developed a blockchain-based solution that enabled real-time tracking of shipments, reducing delays and enhancing transparency.",
    results: [
      "30% reduction in delays",
      "100% transparency in the supply chain",
      "Enhanced partner trust",
    ],
  },
  {
    title: "Enhancing E-commerce Sales with AI-Powered Personalization",
    client: "TechRetail Inc.",
    description: "Implemented a machine learning model to provide personalized product recommendations, boosting customer engagement and sales.",
    results: [
      "20% increase in sales",
      "15% improvement in customer retention",
      "Enhanced user experience",
    ],
  },
  {
    title: "Building a Secure Decentralized Finance (DeFi) Platform",
    client: "FinTech Startup",
    description: "Designed a scalable DeFi platform enabling users to lend, borrow, and trade cryptocurrencies securely.",
    results: [
      "10,000+ users within three months",
      "Improved transaction transparency",
      "Scalable smart contracts for secure trading",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center gradient-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Success Stories
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {caseStudies.map((study, index) => (
          <FlyingElement key={study.title} delay={index * 100}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background to-muted">
              <CardHeader>
                <CardTitle className="text-xl gradient-text">
                  {study.title}
                </CardTitle>
                <p className="text-muted-foreground font-semibold">
                  Client: {study.client}
                </p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{study.description}</p>
                <ul className="list-disc list-inside mb-4">
                  {study.results.map((result, i) => (
                    <li key={i} className="text-muted-foreground">
                      {result}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  <Link href={`/case-studies/${index + 1}`}>
                    Read Full Case Study
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </FlyingElement>
        ))}
      </div>
      <div className="text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90"
          asChild
        >
          <Link href="/contact">Discuss Your Project</Link>
        </Button>
      </div>
    </div>
  );
}
