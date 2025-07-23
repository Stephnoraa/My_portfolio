import type React from "react"
import type { Metadata } from "next"
import { Raleway, Playfair_Display, Fira_Code } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"
import ScrollProgress from "@/components/scroll-progress"
import Particles from "@/components/particles"
import ThemeTransition from "@/components/theme-transition"

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
})

export const metadata: Metadata = {
  title: "Steph's Portfolio | Python, Cybersecurity, Web3",
  description: "Portfolio of a Python programmer, cybersecurity analyst, and Web3 enthusiast",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.variable} ${playfair.variable} ${firaCode.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            <ScrollProgress />
            <ThemeTransition />
            <div className="min-h-screen bg-background flex flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Analytics />
            </div>
            <Particles />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
