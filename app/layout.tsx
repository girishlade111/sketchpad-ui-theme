import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://vercel.com/gileb64375-5584s-projects/v0-sketchpad-shadcn-ui-theme"),
  title: {
    default: "Sketchpad - Modern UI Theme | shadcn/ui Next.js",
    template: "%s | Sketchpad - shadcn/ui Theme",
  },
  description: "A modern, responsive web application built with Next.js 14, React 18, Tailwind CSS 4, and shadcn/ui components. Features dark/light mode, accessibility-first design, and premium UI components.",
  keywords: [
    "Next.js",
    "React",
    "shadcn/ui",
    "Tailwind CSS",
    "UI components",
    "web development",
    "modern UI",
    "responsive design",
    "TypeScript",
    "dark mode",
    "light mode",
    "accessibility",
    "Radix UI",
  ],
  authors: [{ name: "Sketchpad", url: "https://v0.app" }],
  creator: "v0.app",
  publisher: "Vercel",
  generator: "v0.app",
  applicationName: "Sketchpad",
  referrer: "origin-when-cross-origin",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vercel.com/gileb64375-5584s-projects/v0-sketchpad-shadcn-ui-theme",
    siteName: "Sketchpad",
    title: "Sketchpad - Modern UI Theme | shadcn/ui Next.js",
    description: "A modern, responsive web application built with Next.js 14, React 18, Tailwind CSS 4, and shadcn/ui components. Features dark/light mode, accessibility-first design, and premium UI components.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sketchpad - Modern UI Theme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sketchpad - Modern UI Theme | shadcn/ui Next.js",
    description: "A modern, responsive web application built with Next.js 14, React 18, Tailwind CSS 4, and shadcn/ui components.",
    creator: "@v0app",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://vercel.com/gileb64375-5584s-projects/v0-sketchpad-shadcn-ui-theme",
    languages: {
      en: "https://vercel.com/gileb64375-5584s-projects/v0-sketchpad-shadcn-ui-theme",
    },
  },
  category: "technology",
  classification: "Web Application",
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} theme-color="#000000">
      <body className="font-mono">
        <Suspense>{children}</Suspense>
      </body>
    </html>
  )
}
