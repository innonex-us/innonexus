import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "./components/Common/Navbar/Navbar";
import Footer from "./components/Common/Footer/Footer";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the application
export const metadata: Metadata = {
  metadataBase: new URL("https://innonex.us"),
  title: "InnoNexus - Empowering Innovation Across the Digital Spectrum",
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
        url: "https://innonex.us/logo.png",
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
    images: ["https://innonex.us/logo.png"],
  },
  icons: {
    icon: [
      { url: "./favicon.ico", sizes: "any" },
      { url: "./icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "./logo.png", sizes: "180x180" }],
  },
  manifest: "./manifest.json",
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
    <html lang="en">
      <head>
        <link rel="canonical" href="https://innonex.us" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden`}
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900 via-black to-blue-900">
          {/* Glowing Shapes */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-600 to-blue-600 opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur-3xl animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>

        {/* Analytics and Speed Insights */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
