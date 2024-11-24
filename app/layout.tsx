import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import "./globals.css"

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono'
})

export const metadata: Metadata = {
  title: "InnoNexus - Web3 Innovation Hub",
  description: "Empowering the next generation of Web3 builders and innovators.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceMono.variable} font-mono`}>
        <div className="min-h-screen bg-black">
          {children}
        </div>
      </body>
    </html>
  )
}

