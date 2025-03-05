import type { ReactNode } from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Anirudh Krishna",
  description: "Personal website and blog of Anirudh Krishna, CS student at UC Santa Cruz",
  icons: {
    icon: "/anirudh.jpeg",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <Analytics/>
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-black text-white antialiased"
        )}
      >

        {children}
      </body>
    </html>
  )
}
