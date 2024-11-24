import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "./components/Common/Navbar/Navbar";
import Footer from "./components/Common/Footer/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

// Metadata for the application
export const metadata: Metadata = {
  metadataBase: new URL("https://innonex.us"),
  title: {
    default: "InnoNexus - Empowering Innovation Across the Digital Spectrum",
    template: "%s | InnoNexus"
  },
  description:
    "InnoNexus specializes in blockchain, Web 3.0, mobile development, and AI solutions. We deliver tailored digital solutions to drive growth and innovation.",
  openGraph: {
    title: "InnoNexus - Empowering Innovation Across the Digital Spectrum",
    description:
      "Discover how InnoNexus leverages cutting-edge technology to transform ideas into reality. Our services include blockchain, Web 3.0, mobile, and machine learning solutions.",
    url: "https://innonex.us",
    siteName: "InnoNexus",
    images: [
      {
        url: "https://innonex.us/og-image.png",
        width: 1200,
        height: 630,
        alt: "InnoNexus - Empowering Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@InnoNexus",
    creator: "@InnoNexus",
    title: "InnoNexus - Empowering Innovation Across the Digital Spectrum",
    description:
      "Discover how InnoNexus leverages cutting-edge technology to transform ideas into reality.",
    images: ["https://innonex.us/twitter-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://innonex.us",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </AnimatedBackground>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

