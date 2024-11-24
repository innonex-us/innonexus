import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BitcoinIcon as Blockchain, Globe, Smartphone, Cpu } from 'lucide-react'

const services = [
  {
    title: "Blockchain Solutions",
    description: "Secure, transparent, and efficient blockchain systems tailored to your business needs.",
    icon: Blockchain,
  },
  {
    title: "Web 3.0 Development",
    description: "Next-generation web applications leveraging decentralized technologies and enhanced user experiences.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description: "Intuitive and powerful mobile applications for iOS and Android platforms.",
    icon: Smartphone,
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions that harness the power of AI to drive insights and automation.",
    icon: Cpu,
  },
]

export default function Services() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

