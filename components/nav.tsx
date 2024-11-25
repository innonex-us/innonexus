"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const links = [
  { href: "#", label: "Our Programs" },
  { href: "#", label: "Portfolio" },
  { href: "#", label: "Media" },
  { href: "#", label: "Reviews" },
  { href: "#", label: "Team" },
  { href: "#", label: "FAQ" },
  { href: "#", label: "Blog" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container flex items-center justify-between h-16 gap-4 md:h-20">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="sr-only">InnoNexus</span>
          <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="w-8 h-8" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="#" className="hidden md:block">
            <Button variant="ghost">Our Ecosystem</Button>
          </Link>
          <Link href="#">
            <Button>Apply Now</Button>
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <div className="grid gap-6 pt-16">
                {links.map((link, index) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium hover:text-primary transition-colors",
                      "animate-in slide-in-from-right-8",
                      "data-[state=open]:duration-500",
                      `data-[state=open]:delay-${index * 100}`
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

