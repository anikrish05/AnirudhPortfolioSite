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
          <Link
            key={section}
            href={`#${section}`}
            className="h-2 w-2 rounded-full bg-white/20 transition-colors hover:bg-purple-500"
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
                  sequence={["Hi, I'm Anirudh Krishna", 1000, "I build amazing things", 1000, "I love to code", 1000]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </h1>
              <p className="text-lg text-white/70 sm:text-xl">
                CS Student at UC Santa Cruz. ML Engineer. Full Stack Developer. Entrepreneur. Building the future with AI and web
                technologies.
              </p>
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                <Link href="#projects">View Projects</Link>
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
                I&apos;m a Computer Science student at UC Santa Cruz with a perfect 4.0 GPA. 🎓 I&apos;m passionate about
                machine learning 🤖, full-stack development 💻, and building scalable applications 🚀. Currently, I&apos;m
                working on several projects including AI research at Baskin Engineering 🧠 and leading Slug AI, UCSC&apos;s
                AI community 🌟. Keep on the lookout for my coolest project, Astra, a home automation platform that will change how we interact with our homes 🏠.
                Info updated on my blog! 📝 Remember build quick, fail quick, ship fast! Reach out to talk abt any and everything.
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
                            <h3 className="font-bold text-purple-400">Baskin Engineering @ UCSC</h3>
                            <p className="text-sm text-white/50">ML Engineer/Researcher • May 2024 - Present</p>
                            <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                              <li>Secured $3.4M funding for educational AI tools</li>
                              <li>Built backend with FastAPI and integrated with OpenAI</li>
                              <li>Developed frontend with Next.js and React</li>
                            </ul>
                          </motion.div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            <h3 className="font-bold text-purple-400">Slug AI @ UCSC</h3>
                            <p className="text-sm text-white/50">Founder • Oct 2023 - Present</p>
                            <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                              <li>Founded UCSC branch of Bruin AI with 40+ students</li>
                              <li>Led workshops on RAG pipelines and transformers</li>
                              <li>Organized industry panels with 150+ attendees</li>
                            </ul>
                          </motion.div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            <h3 className="font-bold text-purple-400">Revoteen Inc.</h3>
                            <p className="text-sm text-white/50">Founder • Jun 2020 - Jan 2024</p>
                            <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                              <li>Secured $30K funding and scaled a platform connecting students to extracurriculars, reaching 10,000+ users with web and mobile.</li>
                              <li>Built with Flutter, Next.js, PostgreSQL, a single Express.js service, and deployed via Vercel, launching on Play and Apple Stores.</li>
                              <li>Optimized performance by 5x, integrated Google Analytics/Facebook Ads, and designed UIs using Tailwind CSS and Figma.</li>
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
                          <p className="text-sm text-white/50">B.S. in Computer Science • GPA: 4.0</p>
                          <p className="mt-4 text-sm text-white/70">Relevant Coursework:</p>
                          <ul className="mt-2 list-disc pl-4 text-sm text-white/70">
                            <li>Object-oriented Python</li>
                            <li>Data Structures in C++</li>
                            <li>Computer Architecture/Assembly Language</li>
                            <li>Machine Learning</li>
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
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-purple-400">Astra</h3>
                      <p className="text-sm text-white/50">Python • AI • IoT</p>
                      <p className="mt-2 text-sm text-white/70">
                        Reinvineting Home Automation with AI and IoT. A Agentic AI platform for managing smart home devices.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-purple-400">Doculaw</h3>
                      <p className="text-sm text-white/50">Next.js • Express.js • FastAPI • AWS</p>
                      <p className="mt-2 text-sm text-white/70">
                        Law tech platform streamlining discovery and propounding using GraphRAG and MERN stack.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-purple-400">Soshal</h3>
                      <p className="text-sm text-white/50">Flutter • Next.js • Node.js • Firebase</p>
                      <p className="mt-2 text-sm text-white/70">
                        Event management platform for clubs with integrated payment processing.
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
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-purple-400">Languages</h3>
                      <p className="mt-2 text-sm text-white/70">
                        Python, C, C++, JavaScript, TypeScript, Java, HTML, CSS, RISC-V
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-purple-400">Frameworks</h3>
                      <p className="mt-2 text-sm text-white/70">
                        React.js, Next.js, Flutter, Node.js, Express.js, TensorFlow, PyTorch
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-purple-400">Tools</h3>
                      <p className="mt-2 text-sm text-white/70">
                        AWS, Kubernetes, Docker, Redis, Firebase, Supabase, Vercel
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

