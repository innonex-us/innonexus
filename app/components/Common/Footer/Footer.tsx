import React from 'react'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#342a59] via-[#492b72] to-[#512153] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 glow-text">InnoNexus</h3>
            <p className="text-sm">Empowering Innovation Across the Digital Spectrum</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#c69df1] transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#c69df1] transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-[#c69df1] transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-[#c69df1] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/innonex-us" target="_blank" rel="noopener noreferrer" className="hover:text-[#c69df1] transition-colors">
                <FiGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/company/inno-nexus/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c69df1] transition-colors">
                <FiLinkedin size={24} />
              </a>
              <a href="https://twitter.com/inn0nexus" target="_blank" rel="noopener noreferrer" className="hover:text-[#c69df1] transition-colors">
                <FiTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} InnoNexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

