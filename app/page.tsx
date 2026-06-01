"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronsDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { NavHeader } from "@/components/nav-header"

function Counter({
  to,
  duration = 1400,
  format = (v) => Math.round(v).toString(),
  prefix = "",
  suffix = "",
}: {
  to: number
  duration?: number
  format?: (v: number) => string
  prefix?: string
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf: number
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(to * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {prefix}
      {format(value)}
      {suffix}
    </span>
  )
}

function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="px-1">
      <p className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-cyan-300 md:text-lg">
        {children}
      </p>
      <p className="mt-0.5 text-[9px] uppercase tracking-wider text-white/45">{label}</p>
    </div>
  )
}

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <NavHeader />

      <div className="fixed left-4 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {["experience", "projects"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="h-2 w-2 rounded-full bg-white/20 transition-colors hover:bg-purple-500 cursor-pointer"
          />
        ))}
      </div>

      <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative min-h-[calc(100vh-3.5rem)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid min-h-[calc(100vh-3.5rem)] items-center gap-12 py-16 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:py-24"
          >
            <div className="flex flex-col items-start gap-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Incoming SWE @ Google · Summer 2026
              </span>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Anirudh
                </span>
                .
              </h1>

              <p className="max-w-xl text-lg text-white/60 sm:text-xl">
                I build AI products at the edge of legal, finance, and developer tools. Currently Founding Engineer at{" "}
                <span className="text-white/90">Pearson Labs (YC F24)</span>, automating corporate legal transactions.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <Button className="bg-white text-black hover:bg-white/90" asChild>
                  <a href="mailto:kris.anirudh@gmail.com">Get in touch</a>
                </Button>
                <Link href="/resume" className="inline-flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-purple-400">
                  View resume <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <a href="#projects" className="inline-flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-purple-400">
                  See projects <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative isolate mx-auto w-full max-w-[380px] lg:mx-0 lg:ml-auto"
            >
              <div className="relative aspect-square overflow-hidden rounded-3xl ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1709019994328-rFsmTvvq4Z9ps13qhtiOFR2zWUZFqr.jpeg"
                  alt="Anirudh Krishna"
                  fill
                  sizes="(max-width: 1024px) 380px, 380px"
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
              </div>

              {/* Floating location chip */}
              <div className="absolute -bottom-3 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0a0a]/90 px-3 py-1.5 text-xs text-white/80 shadow-xl backdrop-blur">
                <span className="text-base leading-none">📍</span>
                San Francisco
              </div>

              {/* Decorative glow behind portrait — intensifies on hover */}
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 blur-2xl transition-all duration-700 group-hover:-inset-7 group-hover:from-purple-500/28 group-hover:to-cyan-500/28" />
            </motion.div>
          </motion.div>

          {/* Scroll cue */}
          <motion.a
            href="#experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-white/70 md:flex"
          >
            <span>Scroll</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronsDown className="h-4 w-4" />
            </motion.span>
          </motion.a>

          {/* Background gradients */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-purple-500/20 blur-[128px] rounded-full" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-cyan-500/20 blur-[128px] rounded-full" />
          </div>

        </div>

        {/* Content Sections */}
        <div className="space-y-24 pb-24">
          {/* Experience Section */}
          <section id="experience" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border-l-2 border-purple-500/20 pl-6"
            >
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Experience
              </h2>

              {/* Featured: Google */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-8 relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-white/[0.02] to-cyan-500/10 p-6 md:p-8"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Incoming · Summer 2026
                  </span>
                  <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-3xl font-bold text-white md:text-4xl">Google</h3>
                    <p className="text-sm text-white/50">June – Sept 2026</p>
                  </div>
                  <p className="mt-1 text-purple-300">Software Engineering Intern · Pixel</p>
                  <p className="mt-3 max-w-2xl text-white/70">
                    Building agentic, on-device generative AI features for Pixel using Kotlin and modern Android frameworks.
                  </p>
                </div>
              </motion.div>

              {/* Timeline */}
              <div className="relative mt-10">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/40 via-white/10 to-transparent" />
                {[
                  {
                    company: "Pearson Labs",
                    badge: "YC F24",
                    role: "Founding Engineer",
                    dates: "Apr 2025 – Present",
                    blurb: "Building an AI-powered Dropbox for legal teams (Orrick partner) — 40–60% delivery cost reduction, scaled from $0 to $3M ARR. Lead an agentic venture-financing suite spanning $3–6T in deal flow. Manage 6 engineers.",
                  },
                  {
                    company: "Shastha Fresh",
                    role: "Software Engineer",
                    dates: "May 2024 – Mar 2025",
                    blurb: "Built a web/mobile e-commerce platform that tripled revenue, plus a real-time inventory system for 2,000+ SKUs.",
                  },
                  {
                    company: "Baskin Engineering @ UCSC",
                    role: "Founding ML Engineer / Researcher",
                    dates: "May 2024 – May 2025",
                    blurb: "Founding engineer on a $3.4M-funded educational AI research lab. RAG, FastAPI, LangChain, deployed on AWS.",
                  },
                  {
                    company: "Blueprint @ UCSC",
                    role: "VP of Engineering",
                    dates: "Nov 2023 – Present",
                    blurb: "Lead engineering for non-profit web/mobile builds on AWS with Terraform-automated CI/CD.",
                  },
                  {
                    company: "Revoteen Inc.",
                    role: "Co-founder · Head of Engineering",
                    dates: "Jun 2022 – Sep 2023",
                    blurb: "Co-founded a student extracurricular platform — $30K raised, 10K+ users on web and mobile.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.company}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative pl-8 py-5"
                  >
                    <div className="absolute left-0 top-[26px] h-4 w-4 rounded-full border-2 border-purple-500/40 bg-[#0a0a0a] transition-colors group-hover:border-purple-400 group-hover:bg-purple-500/20" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-white">{item.company}</h4>
                        {item.badge && (
                          <span className="rounded-md border border-purple-500/30 bg-purple-500/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-purple-300">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-white/50">{item.dates}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-purple-400">{item.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{item.blurb}</p>
                  </motion.div>
                ))}
              </div>

              {/* Education footer */}
              <div className="mt-8 flex flex-wrap items-baseline justify-between gap-2 border-t border-white/5 pt-6 text-sm">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs uppercase tracking-wider text-white/40">Education</span>
                  <span className="text-white/80">UC Santa Cruz</span>
                  <span className="text-white/50">B.S. Computer Science</span>
                </div>
                <span className="text-white/50">GPA 3.98 · June 2026</span>
              </div>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border-l-2 border-purple-500/20 pl-6"
            >
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Projects
              </h2>

              {/* Featured: two Pearson Labs products side by side */}
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {/* Product 1: Legal Dropbox */}
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-purple-400">
                      Pearson Labs · YC F24
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-white">AI Dropbox for Legal</h3>
                    <p className="mt-3 flex-grow text-sm leading-relaxed text-white/65">
                      Scalable ETL, RAG, redlining, clustering, and document generation for legal teams. Supports 100k+ uploads at &lt;5s latency with 90%+ accuracy — cutting delivery costs 40–60% in partnership with Orrick.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {["Railway", "Hatchet", "RAG", "TurboPuffer", "Supabase", "Prisma"].map((t) => (
                        <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 border-t border-white/10 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 px-4 py-4 text-center">
                    <Stat label="files">
                      <Counter to={100} suffix="k+" />
                    </Stat>
                    <Stat label="latency">
                      <Counter to={5} prefix="<" suffix="s" />
                    </Stat>
                    <Stat label="cost cut">
                      <Counter
                        to={60}
                        suffix="%"
                        format={(v) => {
                          const n = Math.round(v)
                          return n < 40 ? `${n}` : `40–${n}`
                        }}
                      />
                    </Stat>
                    <Stat label="accuracy">
                      <Counter to={90} suffix="%+" />
                    </Stat>
                  </div>
                </motion.div>

                {/* Product 2: Venture Financing */}
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-purple-400">
                      Pearson Labs · YC F24
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-white">Venture Financing Agent</h3>
                    <p className="mt-3 flex-grow text-sm leading-relaxed text-white/65">
                      Agentic platform automating NVCA document generation, term-sheet analysis, and the closing process — connecting lawyers and founders without the back-and-forth. Integrated with DocuSign and Word.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {["Agentic", "NVCA", "DocuSign", "Pydantic", "TurboPuffer", "Evals"].map((t) => (
                        <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t border-white/10 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 px-4 py-4 text-center">
                    <Stat label="deal flow">
                      $3–6T
                    </Stat>
                    <Stat label="ARR (0 → 3M)">
                      <Counter to={3} prefix="$" suffix="M" />
                    </Stat>
                    <Stat label="docs">
                      NVCA · Term Sheet
                    </Stat>
                  </div>
                </motion.div>
              </div>

              {/* Other projects */}
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  {
                    name: "NeuroFlow",
                    blurb: "AI-powered DevOps agent automating end-to-end CI/CD provisioning and documentation with Jira.",
                    stack: ["FastAPI", "AWS", "RAG", "Google ADK", "MCP"],
                  },
                  {
                    name: "Soshal",
                    blurb: "Web/mobile event platform for clubs and students. Launched 10 large-scale events, secured 5 sponsors.",
                    stack: ["Flutter", "Next.js", "Firebase", "Stripe"],
                  },
                  {
                    name: "Revoteen",
                    blurb: "Student extracurricular platform — $30K raised, 10K+ users on web and mobile. 5x faster page loads via SSR + SWR.",
                    stack: ["Flutter", "Next.js", "PostgreSQL", "Express"],
                  },
                ].map((p) => (
                  <motion.div
                    key={p.name}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <h4 className="font-semibold text-white">{p.name}</h4>
                    <p className="mt-2 flex-grow text-sm text-white/65">{p.blurb}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <span key={t} className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-white/60">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/5 pb-10 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 text-sm sm:flex-row sm:items-center">
            <p className="text-white/40">© 2026 Anirudh Krishna</p>
            <div className="flex items-center gap-5 text-white/50">
              <a href="https://github.com/anikrish05" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">GitHub</a>
              <a href="https://linkedin.com/in/AniKrish" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">LinkedIn</a>
              <a href="mailto:kris.anirudh@gmail.com" className="transition-colors hover:text-white">Email</a>
              <Link href="/resume" className="transition-colors hover:text-white">Resume</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

