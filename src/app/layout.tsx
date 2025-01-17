import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cesar's Concrete | Loveland's Premier Concrete Contractor",
  description: "Expert concrete services in Loveland, CO. Specializing in driveways, patios, walkways, and commercial concrete solutions. Quality craftsmanship with 25+ years experience.",
  keywords: "concrete contractor, Loveland concrete, driveway installation, concrete patio, walkways, commercial concrete, residential concrete, Colorado concrete services",
  authors: [{ name: "Cesar's Concrete" }],
  creator: "Cesar's Concrete",
  publisher: "Cesar's Concrete",
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    title: "Cesar's Concrete | Loveland's Premier Concrete Contractor",
    description: "Expert concrete services in Loveland, CO. Quality craftsmanship with 25+ years experience.",
    url: 'https://cesarsconcrete.com',
    siteName: "Cesar's Concrete",
    images: [
      {
        url: '/logom5 1.png',
        width: 800,
        height: 600,
        alt: "Cesar's Concrete Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cesar's Concrete | Loveland's Premier Concrete Contractor",
    description: "Expert concrete services in Loveland, CO. Quality craftsmanship with 25+ years experience.",
    images: ['/logom5 1.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logom5 1.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
