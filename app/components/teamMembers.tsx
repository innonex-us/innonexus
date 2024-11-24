import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkedinIcon, TwitterIcon, GithubIcon } from 'lucide-react'

const teamMembers = [
    {
        name: "Rokon Uzzaman",
        role: "Founder & CEO",
        bio: "With 3 years of experience in software development and blockchain, Rokon is a visionary leader who drives the company's strategic vision.",
        image: "/team/rokon-uzzaman.jpg",
        social: {
            linkedin: "https://www.linkedin.com/in/rokonuzzaman040/",
            twitter: "https://x.com/rokon_uzzaman40",
            github: "https://github.com/mrokonuzzaman040"
        }
    },
    {
        name: "Mosaeb Hossain",
        role: "CTO",
        bio: "Mosaeb leads the technical direction at InnoNexus, bringing deep expertise in software architecture, blockchain, and machine learning.",
        image: "/team/mosaeb-hossain.jpg",
        social: {
            linkedin: "https://www.linkedin.com/in/mosayeb-hossain/",
            twitter: "https://twitter.com/mosaebhossain",
            github: "https://github.com/Mosayeb09"
        }
    },
    {
        name: "Arafat Hossain",
        role: "Head of Product Development",
        bio: "Overseeing the development of all products, Arafat ensures that our projects meet client expectations and industry standards.",
        image: "/team/arafat-hossain.jpg",
        social: {
            linkedin: "https://www.linkedin.com/in/arafathossain/",
            twitter: "https://twitter.com/arafathossain",
            github: "https://github.com/arafathossain"
        }
    },
    {
        name: "Sanjana Sami",
        role: "Head of Business Development",
        bio: "Responsible for client relations and partnerships, Sanjana brings a strategic mindset to expanding InnoNexus' global presence.",
        image: "/team/sanjana-sami.jpg",
        social: {
            linkedin: "https://www.linkedin.com/in/sanjana-sami-15baa51ba/",
            twitter: "https://twitter.com/sanjanasami",
            github: "https://github.com/sanjanasami"
        }
    }
]

export default function Team() {
    return (
        <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Our Leadership Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors duration-300">
                            <CardHeader>
                                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                                <CardTitle className="text-xl font-semibold text-white text-center">{member.name}</CardTitle>
                                <CardDescription className="text-blue-400 text-center">{member.role}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400 text-center mb-4">{member.bio}</p>
                                <div className="flex justify-center space-x-4">
                                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                        <LinkedinIcon className="w-5 h-5" />
                                        <span className="sr-only">LinkedIn profile of {member.name}</span>
                                    </a>
                                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                        <TwitterIcon className="w-5 h-5" />
                                        <span className="sr-only">Twitter profile of {member.name}</span>
                                    </a>
                                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                        <GithubIcon className="w-5 h-5" />
                                        <span className="sr-only">GitHub profile of {member.name}</span>
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

