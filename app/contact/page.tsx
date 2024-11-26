"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-lg mb-4">
            Get in touch with us for any inquiries about our services, partnership opportunities, or to discuss your project ideas.
          </p>
          <div className="space-y-2">
            <p><strong>Address:</strong> 1128 Vine Street, Waukegan, Illinois, USA - 60085</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p><strong>Email:</strong> rokon@innonex.us</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  )
}

