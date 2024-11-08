import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

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
    images: ["https://innonex.us/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}