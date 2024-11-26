"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    category: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, category: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">Apply Now</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="project" className="block mb-2">Project Name</label>
          <Input id="project" name="project" value={formData.project} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="category" className="block mb-2">Category</label>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ai">AI</SelectItem>
              <SelectItem value="defi">DeFi</SelectItem>
              <SelectItem value="depin">DePin</SelectItem>
              <SelectItem value="l1l2">L1/L2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="description" className="block mb-2">Project Description</label>
          <Textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <Button type="submit">Submit Application</Button>
      </form>
    </div>
  )
}

