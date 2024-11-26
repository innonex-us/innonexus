import Link from "next/link"
import { Twitter, Linkedin, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">Our Story</Link></li>
              <li><Link href="/team" className="text-muted-foreground hover:text-foreground">Team</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/blockchain" className="text-muted-foreground hover:text-foreground">Blockchain Solutions</Link></li>
              <li><Link href="/services/web3" className="text-muted-foreground hover:text-foreground">Web3 Development</Link></li>
              <li><Link href="/services/mobile" className="text-muted-foreground hover:text-foreground">Mobile App Development</Link></li>
              <li><Link href="/services/ai-ml" className="text-muted-foreground hover:text-foreground">AI & Machine Learning</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/case-studies" className="text-muted-foreground hover:text-foreground">Case Studies</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://x.com/inn0nexus" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/inno-nexus/" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://github.com/innonex-us" className="text-muted-foreground hover:text-foreground">
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 InnoNexus. All rights reserved.</p>
          <p className="mt-2">1128 Vine Street, Waukegan, Illinois, USA - 60085</p>
          <p className="mt-2">Phone: +1 (123) 456-7890 | Email: rokon@innonex.us</p>
        </div>
      </div>
    </footer>
  )
}

