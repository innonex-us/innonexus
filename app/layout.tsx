import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Loading } from "@/components/loading"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "InnoNexus - Empowering Innovation Across the Digital Spectrum",
  description: "Next-generation technology solutions provider dedicated to pushing the boundaries of what's possible in the digital world. Specializing in blockchain, Web 3.0, mobile application development, and machine learning.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Loading />
          <Nav />
          <div className="mt-12">{children}</div>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

