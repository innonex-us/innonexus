import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "./components/Common/Navbar/Navbar";
import Footer from "./components/Common/Footer/Footer";

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

export const metadata: Metadata = {
  metadataBase: new URL('https://innonex.us'),
  title: "InnoNexus - Empowering Innovation Across the Digital Spectrum",
  description:
    "InnoNexus is a technology-driven company specializing in blockchain, Web 3.0, mobile development, and AI solutions. We provide customized digital solutions for businesses across industries, driving innovation and growth.",
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
    description: "Discover how InnoNexus leverages cutting-edge technology to transform ideas into reality.",
    images: ["https://innonex.us/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://innonex.us",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://innonex.us" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}