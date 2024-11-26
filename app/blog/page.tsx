import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Futureof Blockchain in Enterprise",
    date: "2024-03-15",
    excerpt: "Explore how blockchain technology is transforming business operations and creating new opportunities for innovation.",
    author: "Rokon Uzzaman"
  },
  {
    title: "AI-Driven Personalization in E-commerce",
    date: "2024-03-10",
    excerpt: "Learn how AI is revolutionizing the online shopping experience through advanced personalization techniques.",
    author: "Mosaeb Hossain"
  },
  {
    title: "The Rise of Decentralized Finance (DeFi)",
    date: "2024-03-05",
    excerpt: "Discover the potential of DeFi to reshape the financial industry and create more inclusive financial systems.",
    author: "Arafat Hossain"
  },
  {
    title: "Building Scalable Web3 Applications",
    date: "2024-02-28",
    excerpt: "Best practices and strategies for developing robust and scalable decentralized applications on Web3 platforms.",
    author: "Sanjana Sami"
  }
]

export default function BlogPage() {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">InnoNexus Blog</h1>
      <p className="text-xl mb-12">Stay updated with the latest insights, trends, and innovations in blockchain, AI, and Web3 technologies.</p>
      <div className="grid gap-8 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Card key={post.title}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date} | By {post.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.excerpt}</p>
              <Button variant="outline" asChild>
                <Link href="#">Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/contact">Subscribe to Our Newsletter</Link>
        </Button>
      </div>
    </div>
  )
}

