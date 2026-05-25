import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function NavHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="relative h-7 w-7 overflow-hidden rounded-full ring-1 ring-white/15 transition-all group-hover:ring-purple-400/40">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1709019994328-rFsmTvvq4Z9ps13qhtiOFR2zWUZFqr.jpeg"
                alt="Anirudh Krishna"
                width={28}
                height={28}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-white/90 transition-colors group-hover:text-white">
              Anirudh Krishna
            </span>
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-sm md:flex">
            <Link href="/#experience" className="text-white/55 transition-colors hover:text-white">Experience</Link>
            <Link href="/#projects" className="text-white/55 transition-colors hover:text-white">Projects</Link>
          </nav>

          <div className="flex items-center gap-1">
            <Link
              href="https://github.com/anikrish05"
              target="_blank"
              aria-label="GitHub"
              className="rounded-md p-2 text-white/50 transition-colors hover:bg-white/5 hover:text-white"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://linkedin.com/in/AniKrish"
              target="_blank"
              aria-label="LinkedIn"
              className="rounded-md p-2 text-white/50 transition-colors hover:bg-white/5 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="/resume"
              className="ml-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/85 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              Résumé
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
