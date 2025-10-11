"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NavHeader } from "@/components/nav-header"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <NavHeader />

      <div className="fixed left-4 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {["about", "experience", "projects", "skills"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="h-2 w-2 rounded-full bg-white/20 transition-colors hover:bg-purple-500 cursor-pointer"
          />
        ))}
      </div>

      <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex min-h-screen flex-col-reverse items-center justify-center gap-12 py-20 lg:flex-row lg:justify-between lg:py-32"
          >
            <div className="flex max-w-2xl flex-col items-start gap-6">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:text-6xl lg:text-7xl">
                <TypeAnimation
                  sequence={["Hi, I'm Anirudh Krishna", 1000, "Founding Engineer at Pearson Labs", 1000, "Building AI for Legal Teams", 1000, "YC F24 Startup", 1000]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </h1>
              <p className="text-lg text-white/70 sm:text-xl">
                CS Student at UC Santa Cruz. Founding Engineer/CTO at Pearson Labs (YC F24). Building AI-powered solutions for legal teams, reducing delivery costs by 40-60%.
              </p>
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                <Button variant="outline" className="border-purple-500 text-purple-400" asChild>
                  <Link href="/resume">View Resume</Link>
                </Button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[280px] w-[280px] rounded-full border-2 border-purple-500/20 p-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1709019994328-rFsmTvvq4Z9ps13qhtiOFR2zWUZFqr.jpeg"
                  alt="Anirudh Krishna"
                  width={280}
                  height={280}
                  className="rounded-full object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm" />
              </div>
            </motion.div>
          </motion.div>

          {/* Background gradients */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-purple-500/20 blur-[128px] rounded-full" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-cyan-500/20 blur-[128px] rounded-full" />
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-24 pb-24">
          {/* About Section */}
          <section id="about" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border-l-2 border-purple-500/20 pl-6"
            >
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:text-4xl">
                About Me
              </h2>
                <p className="mt-6 text-lg text-white/70">
                I&apos;m a Computer Science student at UC Santa Cruz with a 3.96 GPA. 🎓 Currently serving as Founding Engineer/CTO at Pearson Labs (YC F24), where I&apos;m building an AI-powered Dropbox for legal teams that reduces delivery costs by 40-60% in partnership with Orrick. I&apos;ve architected scalable AI systems supporting 100k+ file uploads with under 5s latency and 90%+ accuracy. Previously, I secured $3.4M funding at Baskin Engineering and founded multiple startups reaching 10,000+ users. Passionate about AI, full-stack development, and building at scale. 🚀
                </p>
            </motion.div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border-l-2 border-purple-500/20 pl-6"
            >
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:text-4xl">
                Coolest Experiences
              </h2>
              <div className="mt-6">
                <Tabs defaultValue="work" className="w-full">
                  <TabsList className="bg-white/5 border border-white/10">
                    <TabsTrigger value="work" className="data-[state=active]:bg-purple-500">
                      Work
                    </TabsTrigger>
                    <TabsTrigger value="education" className="data-[state=active]:bg-purple-500">
                      Education
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="work" className="mt-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            <h3 className="font-bold text-purple-400">Pearson Labs (YC F24)</h3>
                            <p className="text-sm text-white/50">Founding Engineer/CTO • April 2025 - Present</p>
                            <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                              <li>Led development of AI-powered Dropbox for legal teams, reducing delivery costs by 40-60%</li>
                              <li>Architected scalable AI systems supporting 100k+ file uploads with under 5s latency and 90%+ accuracy</li>
                              <li>Managed 6 engineers and delivered enterprise features including RBAC and multi-region sharding</li>
                            </ul>
                          </motion.div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            <h3 className="font-bold text-purple-400">Shastha Fresh</h3>
                            <p className="text-sm text-white/50">Software Engineer Intern • May 2024 - Present</p>
                            <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                              <li>Built web and mobile e-commerce platform using React Native and Next.js, scaling to 300+ users</li>
                              <li>Developed real-time inventory system for 1000+ SKUs using Kafka, Redis caching, and Firebase</li>
                              <li>Automated CI/CD with Jenkins and integrated Stripe API for payment processing</li>
                            </ul>
                          </motion.div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            <h3 className="font-bold text-purple-400">Blueprint @ UCSC</h3>
                            <p className="text-sm text-white/50">VP Of Engineering & Full Stack Developer • Nov 2023 - Present</p>
                            <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                              <li>Developed web and mobile applications for non-profits using React Native and Firebase</li>
                              <li>Built scalable infrastructure with AWS RDS, EKS, Lambda, and Kubernetes</li>
                              <li>Automated infrastructure and CI/CD pipelines using Terraform and Jenkins</li>
                            </ul>
                          </motion.div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            <h3 className="font-bold text-purple-400">Baskin Engineering @ UCSC</h3>
                            <p className="text-sm text-white/50">Founding ML Engineer/Researcher • May 2024 - May 2025</p>
                            <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                              <li>Secured $3.4M funding, transforming startup into research lab advancing educational AI tools</li>
                              <li>Built backend with FastAPI and REST APIs, integrating OpenAI APIs and Pinecone DB</li>
                              <li>Developed frontend with Next.js, React, Tailwind CSS for chrome extensions and websites</li>
                            </ul>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="education" className="mt-6">
                    <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                          <h3 className="font-bold text-purple-400">University of California, Santa Cruz</h3>
                          <p className="text-sm text-white/50">B.S. in Computer Science • GPA: 3.96 • Expected June 2027</p>
                          <p className="mt-4 text-sm text-white/70">Relevant Coursework:</p>
                          <ul className="mt-2 list-disc pl-4 text-sm text-white/70">
                            <li>Object-oriented Python</li>
                            <li>Data Structures in C++</li>
                            <li>Computer Architecture/Assembly Language</li>
                            <li>Machine Learning</li>
                            <li>Probability & Statistics</li>
                            <li>Software Engineering</li>
                          </ul>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
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
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:text-4xl">
                Featured Projects
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <h3 className="font-bold text-purple-400">NeuroFlow</h3>
                      <p className="text-sm text-white/50">Vite.js • FastAPI • AWS • RAG • Google ADK • MCP Servers</p>
                      <p className="mt-2 text-sm text-white/70 flex-grow">
                        AI-powered DevOps agent automating end-to-end CI/CD provisioning and documentation with Jira integration.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <h3 className="font-bold text-purple-400">Pearson Labs Platform</h3>
                      <p className="text-sm text-white/50">AI • Railway • Hatchet • Enterprise Features</p>
                      <p className="mt-2 text-sm text-white/70 flex-grow">
                        AI-powered Dropbox for legal teams with scalable systems supporting 100k+ file uploads and under 5s latency.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <h3 className="font-bold text-purple-400">Revoteen Platform</h3>
                      <p className="text-sm text-white/50">Flutter • Next.js • PostgreSQL • Express.js</p>
                      <p className="mt-2 text-sm text-white/70 flex-grow">
                        Platform connecting students to extracurriculars, reaching 10,000+ users with 5x performance optimization.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border-l-2 border-purple-500/20 pl-6"
            >
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:text-4xl">
                Skills
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-sm h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <h3 className="font-bold text-purple-400">Languages</h3>
                      <p className="mt-2 text-sm text-white/70 flex-grow">
                        Python, C, C++, Dart, JavaScript/jQuery, TypeScript, Java, HTML, CSS, RISC-V
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-sm h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <h3 className="font-bold text-purple-400">Frameworks</h3>
                      <p className="mt-2 text-sm text-white/70 flex-grow">
                        React.js, Next.js, Flutter, Node.js, Fast API, Express.js, Tailwind CSS, TensorFlow, PyTorch, React Native, Expo
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-sm h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <h3 className="font-bold text-purple-400">Tools</h3>
                      <p className="mt-2 text-sm text-white/70 flex-grow">
                        Git, AWS (S3, Lambda), Kubernetes, Redis, Docker, Kafka, Terraform, Firebase, Supabase, GCP, Vercel, Playwright, Hatchet
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-sm h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <h3 className="font-bold text-purple-400">Gen AI</h3>
                      <p className="mt-2 text-sm text-white/70 flex-grow">
                        NLP, ChatGPT Assistance API, Realtime API, Prompt Engineering, GraphRAG, Google ADK
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  )
}

