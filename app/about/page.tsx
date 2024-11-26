import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">About InnoNexus</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          InnoNexus is a next-generation technology solutions provider dedicated to pushing the boundaries of what's possible in the digital world. Founded by a team of visionary developers and tech enthusiasts, InnoNexus has emerged as a leader in offering comprehensive digital solutions that encompass blockchain, Web 3.0, mobile application development, and machine learning.
        </p>
        <p>
          Our journey began with a simple yet powerful idea: to harness the potential of cutting-edge technologies to create solutions that drive real-world change. Today, we stand at the forefront of digital innovation, helping businesses across various sectors leverage the latest in technology to enhance their operations, engage their audiences, and grow their enterprises.
        </p>
        <h2>Our Vision</h2>
        <p>
          At InnoNexus, our vision is to be a catalyst for digital transformation worldwide. We aim to lead the way in innovative technology solutions, enabling businesses to redefine their industries and enhance everyday life through the intelligent application of cutting-edge technologies.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower innovation by creating seamless, secure, and intelligent technology solutions that connect the digital and real world. We aim to equip businesses and developers with the tools they need to thrive, enabling them to unlock new possibilities across blockchain, Web 3.0, mobile development, and machine learning.
        </p>
      </div>
      <div className="mt-12">
        <Button asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  )
}

