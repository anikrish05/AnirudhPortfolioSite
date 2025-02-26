"use client"

import { Download } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NavHeader } from "@/components/nav-header"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <NavHeader />
      <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:text-4xl">
              Resume
            </h1>
            <p className="mt-2 text-white/70">View and download my professional resume</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-cyan-500" asChild>
            <Link href="/Anirudh_Krishna_Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Link>
          </Button>
        </div>

        <div className="space-y-8">
          {/* Header Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white">Anirudh Krishna</h2>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-white/70">
                  <p>650-741-8311</p>
                  <p>kris.anirudh@gmail.com</p>
                  <Link href="https://linkedin.com/in/AniKrish" className="text-purple-400 hover:text-purple-300">
                    linkedin.com/in/AniKrish
                  </Link>
                  <p>San Ramon, CA</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Education
            </h3>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-bold text-white">University of California, Santa Cruz</h4>
                    <p className="text-purple-400">B.S. in Computer Science</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/70">June 2026</p>
                    <p className="text-purple-400">GPA: 4.0</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-white/70">Relevant Coursework:</p>
                  <p className="mt-1 text-sm text-white/70">
                    Object-oriented Python, Data Structures in C++, C Programming, Computer Architecture/Assembly
                    Language, Computer Systems and Design, Linear Algebra, Discrete Math, Machine Learning
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Work Experience
            </h3>
            <div className="space-y-4">
              {/* Baskin Engineering */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold text-white">Baskin Engineering @ UCSC</h4>
                      <p className="text-purple-400">Founding ML Engineer/Researcher</p>
                    </div>
                    <p className="text-white/70">May 2024 – Present</p>
                  </div>
                  <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                    <li>
                      Secured $3.4M funding, transforming a startup into a research lab advancing educational AI tools
                      with RAG pipelines
                    </li>
                    <li>
                      Built backend with FastAPI and REST APIs, integrating OpenAI APIs, Firebase, and Pinecone DB
                    </li>
                    <li>
                      Developed frontend with Next.js, React, Tailwind CSS, for chrome extensions, slack bots, and
                      websites
                    </li>
                    <li>Streamlined CI/CD with GitHub Actions, deploying via Docker, Kubernetes, hosted on AWS EC2</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Slug AI */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold text-white">Slug AI @ UCSC</h4>
                      <p className="text-purple-400">Founder</p>
                    </div>
                    <p className="text-white/70">Oct 2023 – Present</p>
                  </div>
                  <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                    <li>Founded UCSC branch of UCLA's Bruin AI, building an AI workforce of 40 students</li>
                    <li>Led 10+ workshops on RAG pipelines, transformers, LLMs, and neural networks</li>
                    <li>Organized weekly panels with professionals, attracting 150+ attendees</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Continue with other work experiences... */}
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Projects
            </h3>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-bold text-white">Doculaw</h4>
                    <p className="text-purple-400">Next.JS, Express.JS, Fast API, AWS, GraphRAG, Neo4J</p>
                  </div>
                  <p className="text-white/70">Nov 2024 – Present</p>
                </div>
                <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                  <li>Developing a law tech platform to streamline discovery and propounding</li>
                  <li>Utilizing GraphRAG with the MERN stack, ensuring scalability and performance</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="mb-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Technical Skills
            </h3>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div>
                  <p className="font-semibold text-white">Languages:</p>
                  <p className="text-sm text-white/70">
                    Python, C, C++, Dart, JavaScript/jQuery, TypeScript, Java, HTML, CSS, RISC-V
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Frameworks:</p>
                  <p className="text-sm text-white/70">
                    React.js, Next.js, Flutter, Node.js, Flask, Express.js, Tailwind CSS, Django, TensorFlow, PyTorch,
                    React Native, Expo
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Tools:</p>
                  <p className="text-sm text-white/70">
                    Git, AWS(S3, Lambda), Kubernetes, Redis, Docker, Kafka, Terraform, Firebase, Supabase, GCP, Vercel
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Gen AI:</p>
                  <p className="text-sm text-white/70">
                    NLP, ChatGPT Assistance API, Realtime API, Prompt Engineering, GraphRAG
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

