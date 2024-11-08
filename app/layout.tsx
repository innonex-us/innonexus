import type { Metadata } from "next";
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
        url: "https://innonex.us/logo.svg",
        width: 800,
        height: 600,
        alt: "InnoNexus Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    creator: "@InnoNexus",
    site: "@InnoNexus",
    card: "summary_large_image",
  },
  icons: {
    icon: "/logo.svg",
  },
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
