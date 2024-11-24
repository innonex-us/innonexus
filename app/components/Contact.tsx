'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function Contact() {
    const { toast } = useToast()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Here you would typically handle the form submission,
        // e.g., sending the data to an API
        toast({
            title: "Message Sent",
            description: "We've received your message and will get back to you soon.",
        })
    }

    return (
        <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Get in Touch</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold text-white">Contact Information</CardTitle>
                            <CardDescription className="text-gray-400">Reach out to us for any inquiries</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center text-gray-400">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span>1128 Vine Street, Waukegan, Illinois, USA - 60085</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <Phone className="w-5 h-5 mr-2" />
                                <span>+1 (123) 456-7890</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <Mail className="w-5 h-5 mr-2" />
                                <span>rokon@innonex.us</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold text-white">Send us a Message</CardTitle>
                            <CardDescription className="text-gray-400">We&apos;d love to hear from you</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                    <Input id="name" placeholder="Your Name" className="bg-gray-700 text-white border-gray-600" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                    <Input id="email" type="email" placeholder="your@email.com" className="bg-gray-700 text-white border-gray-600" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                    <Textarea id="message" placeholder="Your message" className="bg-gray-700 text-white border-gray-600" required />
                                </div>
                                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

