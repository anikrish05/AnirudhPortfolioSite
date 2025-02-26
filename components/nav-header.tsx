import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NavHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                AK
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link className="text-white/70 transition-colors hover:text-purple-400" href="/#about">
                About
              </Link>
              <Link className="text-white/70 transition-colors hover:text-purple-400" href="/#experience">
                Experience
              </Link>
              <Link className="text-white/70 transition-colors hover:text-purple-400" href="/#projects">
                Projects
              </Link>
              <Link className="text-white/70 transition-colors hover:text-purple-400" href="/blog">
                Blog
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-purple-400" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-purple-400" asChild>
              <Link href="https://linkedin.com/in/AniKrish" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-purple-400" asChild>
              <Link href="mailto:kris.anirudh@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

