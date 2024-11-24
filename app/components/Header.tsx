"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: "Our Programs", href: "#programs" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Media", href: "#media" },
  { name: "Reviews", href: "#reviews" },
  { name: "Team", href: "#team" },
  { name: "FAQ", href: "#faq" },
  { name: "Blog", href: "#blog" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tech-font">InnoNexus</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm hover:text-orange-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Apply Now Button */}
          <div className="hidden md:block">
            <Link
              href="#apply"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-6 py-3 hover:bg-gray-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#apply"
                className="mx-6 my-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-center transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

