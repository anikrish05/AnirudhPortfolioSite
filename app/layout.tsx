import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Anirudh Krishna - CS Student & Developer",
  description: "Personal website and blog of Anirudh Krishna, CS student at UC Santa Cruz",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "min-h-screen bg-black text-white antialiased")}>{children}</body>
    </html>
  )
}



import './globals.css'