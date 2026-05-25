"use client"

import { Download, Mail, Linkedin, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { NavHeader } from "@/components/nav-header"

const work = [
  {
    company: "Google",
    badge: "Incoming",
    role: "Software Engineering Intern",
    dates: "Jun 2026 – Sept 2026",
    bullets: [
      "Incoming Summer Intern building agentic, on-device generative AI features for Pixel experiences using Kotlin and modern Android frameworks.",
    ],
  },
  {
    company: "Pearson Labs",
    badge: "YC F24",
    role: "Founding Engineer",
    dates: "Apr 2025 – Present",
    bullets: [
      "Leading development of an AI-powered Dropbox for legal teams, reducing delivery costs by 40–60% in partnership with Orrick. Scaled product from $0 to $3M ARR.",
      "Architecting scalable AI systems (ETL, RAG, redlining, clustering, document generation) with Railway and Hatchet, supporting 100k+ file uploads with <5s end-to-end latency and 90%+ pipeline accuracy.",
      "Leading DevOps: Doppler-managed secrets, cross-env CI/CD, Supabase DB migrations via Prisma.",
      "Managing 6 engineers and delivering enterprise features including RBAC, audit logs, and multi-region data sharding.",
      "Leading the agentic venture-financing automation suite supporting $3–6T in annual deal flow — due diligence, NVCA document generation, term-sheet analysis, integrated with DocuSign, Word, and external data sources.",
    ],
  },
  {
    company: "Shastha Fresh",
    role: "Software Engineer",
    dates: "May 2024 – Mar 2025",
    bullets: [
      "Built a web and mobile e-commerce platform using React Native and Next.js, scaling to 300+ users and tripling revenue.",
      "Developed a real-time inventory system for 2,000+ SKUs using Kafka, Redis caching, and Firebase.",
      "Automated CI/CD with Jenkins, integrated Stripe API for payment processing, and deployed on Vercel, App Store, Play Store.",
    ],
  },
  {
    company: "Blueprint @ UCSC",
    role: "VP of Engineering & Full Stack Developer",
    dates: "Nov 2023 – Present",
    bullets: [
      "Developed web and mobile applications for non-profits using React Native and Firebase.",
      "Built scalable infrastructure with AWS RDS, EKS, Lambda, Kubernetes, and Docker.",
      "Automated infrastructure and CI/CD pipelines using Terraform and Jenkins.",
    ],
  },
  {
    company: "Baskin Engineering @ UCSC",
    role: "Founding ML Engineer / Researcher",
    dates: "May 2024 – May 2025",
    bullets: [
      "Secured $3.4M funding, transforming a startup into a research lab advancing educational AI tools with RAG pipelines.",
      "Built backend with FastAPI and REST APIs, integrating OpenAI APIs, Firebase, and Pinecone DB, orchestrated with LangChain.",
      "Developed frontend with Next.js, React, and Tailwind for chrome extensions, Slack bots, and websites.",
      "Streamlined CI/CD with GitHub Actions, deploying via Docker, Kubernetes, hosted on AWS EC2.",
    ],
  },
  {
    company: "Soshal",
    role: "Founding Engineer",
    dates: "Oct 2023 – Jun 2024",
    bullets: [
      "Led the development of web/mobile using Flutter, Next.js, Node.js, and Firebase, streamlining event management for clubs.",
      "Built Express.js APIs with authentication and Stripe API for secure payment processing.",
      "Led the project from ideation to launch — 10 large-scale events, 5 sponsors secured.",
    ],
  },
  {
    company: "Revoteen Inc.",
    role: "Co-founder · Head of Engineering",
    dates: "Jun 2022 – Sep 2023",
    bullets: [
      "Secured $30K funding and scaled a platform connecting students to extracurriculars, reaching 10,000+ users.",
      "Built with Flutter, Next.js, PostgreSQL, and a single Express.js service. Launched on Play and Apple Stores.",
      "Incorporated SSR and SWR, cutting page load times 5x. Designed UIs in Tailwind and Figma.",
    ],
  },
]

const projects = [
  {
    name: "NeuroFlow",
    dates: "Jan 2025 – Mar 2025",
    stack: ["Vite.js", "FastAPI", "AWS", "RAG", "Google ADK", "MCP", "Firebase Functions"],
    bullets: [
      "Built AI-powered DevOps agent automating end-to-end CI/CD provisioning and documentation with Jira integration.",
      "Monitored CI/CD pipeline failures and provided automated remediation guidance and integrated merge editor in web app.",
    ],
  },
]

const skills = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Kotlin", "C", "C++", "Dart", "Java", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Flutter", "Node.js", "FastAPI", "Express", "Tailwind", "Jetpack Compose", "React Native", "Expo"],
  },
  {
    label: "Infra & Tools",
    items: ["AWS (S3 · Lambda · SQS)", "GCP", "Firebase", "Supabase", "Vercel", "Railway", "Hatchet", "Prisma", "Playwright", "Bazel", "Git"],
  },
  {
    label: "AI / ML",
    items: ["RAG", "Fine-Tuning", "Pydantic", "TurboPuffer", "Evals", "BrainTrust"],
  },
]

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <NavHeader />

      <main className="mx-auto max-w-3xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-start justify-between gap-6"
        >
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Anirudh Krishna</h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60">
              <a href="mailto:kris.anirudh@gmail.com" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
                <Mail className="h-3.5 w-3.5" />
                kris.anirudh@gmail.com
              </a>
              <a href="tel:+16507418311" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
                <Phone className="h-3.5 w-3.5" />
                650-741-8311
              </a>
              <a href="https://linkedin.com/in/AniKrish" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
                <Linkedin className="h-3.5 w-3.5" />
                AniKrish
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                San Francisco, CA
              </span>
            </div>
          </div>
          <Button variant="outline" className="border-white/15 bg-white/5 text-white/85 hover:bg-white/10 hover:text-white" asChild>
            <Link href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Link>
          </Button>
        </motion.div>

        {/* Education */}
        <Section title="Education" delay={0.05}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <div>
              <h3 className="font-semibold text-white">University of California, Santa Cruz</h3>
              <p className="text-sm text-purple-400">B.S. in Computer Science</p>
            </div>
            <div className="text-right text-sm text-white/50">
              <p>Expected June 2026</p>
              <p>GPA: 3.98</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-white/60">
            <span className="text-white/40">Coursework: </span>
            Object-oriented Python, Data Structures in C++, C Programming, Computer Architecture/Assembly,
            Computer Systems and Design, Linear Algebra, Discrete Math, Machine Learning, Probability & Statistics, Software Engineering
          </p>
        </Section>

        {/* Work Experience */}
        <Section title="Work Experience" delay={0.1}>
          <div className="space-y-7">
            {work.map((w) => (
              <div key={w.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-white">{w.company}</h3>
                    {w.badge && (
                      <span className="rounded-md border border-purple-500/30 bg-purple-500/10 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-purple-300">
                        {w.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/50">{w.dates}</p>
                </div>
                <p className="mt-0.5 text-sm text-purple-400">{w.role}</p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-white/65">
                  {w.bullets.map((b, i) => (
                    <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-[0.5rem] before:h-1 before:w-1 before:rounded-full before:bg-white/30">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects" delay={0.15}>
          <div className="space-y-7">
            {projects.map((p) => (
              <div key={p.name}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-semibold text-white">{p.name}</h3>
                  <p className="text-sm text-white/50">{p.dates}</p>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-white/65">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-[0.5rem] before:h-1 before:w-1 before:rounded-full before:bg-white/30">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Technical Skills" delay={0.2}>
          <div className="space-y-5">
            {skills.map((group) => (
              <div key={group.label} className="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-6">
                <p className="text-xs uppercase tracking-wider text-white/40 sm:pt-2">{group.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/75 transition-colors hover:border-purple-500/40 hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  )
}

function Section({ title, delay, children }: { title: string; delay: number; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mt-12"
    >
      <div className="mb-5 flex items-center gap-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">{title}</h2>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      {children}
    </motion.section>
  )
}
