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
            <Link href="/ani_resume_google.pdf" download>
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
                    <p className="text-white/70">June 2027</p>
                    <p className="text-purple-400">GPA: 3.96</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-white/70">Relevant Coursework:</p>
                  <p className="mt-1 text-sm text-white/70">
                    Object-oriented Python, Data Structures in C++, C Programming, Computer Architecture/Assembly
                    Language, Computer Systems and Design, Linear Algebra, Discrete Math, Machine Learning, Probability & Statistics, Software Engineering
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
              {/* Pearson Labs */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold text-white">Pearson Labs (YC F24)</h4>
                      <p className="text-purple-400">Founding Engineer / CTO</p>
                    </div>
                    <p className="text-white/70">April 2025 – Present</p>
                  </div>
                  <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                    <li>Led development of an AI-powered Dropbox for legal teams, reducing delivery costs by 40-60% in partnership with Orrick</li>
                    <li>Architected scalable AI systems (ETL, RAG, redlining, clustering, document generation) with Railway and Hatchet, supporting 100k+ file uploads, delivering under 5s end-to-end latency with validation pipelines ensuring 90%+ accuracy</li>
                    <li>Led DevOps, implementing Doppler-managed secrets, CI/CD pipelines for deployments across environments, and DB migrations</li>
                    <li>Managed 6 engineers and delivered enterprise features including RBAC, audit logs, and multi-region data sharding</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Shastha Fresh */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold text-white">Shastha Fresh</h4>
                      <p className="text-purple-400">Software Engineer Intern</p>
                    </div>
                    <p className="text-white/70">May 2024 – Present</p>
                  </div>
                  <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                    <li>Built a web and mobile e-commerce platform using React Native and Next.js, scaling to 300+ users and tripling revenue</li>
                    <li>Developed a real-time inventory system for 1000+ SKUs using Kafka, Redis caching for images, and Firebase for data storage</li>
                    <li>Automated CI/CD with Jenkins, integrated Stripe API for payment processing, and deployed on Vercel, AppStore, PlayStore</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Blueprint @ UCSC */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold text-white">Blueprint @ UCSC</h4>
                      <p className="text-purple-400">VP Of Engineering & Full Stack Developer</p>
                    </div>
                    <p className="text-white/70">Nov 2023 – Present</p>
                  </div>
                  <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                    <li>Developed web and mobile applications for non-profits using React Native and Firebase, enhancing user engagement</li>
                    <li>Built scalable infrastructure with AWS RDS, EKS, Lambda, Kubernetes, and Docker for containerized deployments</li>
                    <li>Automated infrastructure and CI/CD pipelines using Terraform and Jenkins, ensuring reliable and efficient scaling</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Baskin Engineering */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold text-white">Baskin Engineering @ UCSC</h4>
                      <p className="text-purple-400">Founding ML Engineer/Researcher</p>
                    </div>
                    <p className="text-white/70">May 2024 – May 2025</p>
                  </div>
                  <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                    <li>Secured $3.4M funding, transforming a startup into a research lab advancing educational AI tools with RAG pipelines</li>
                    <li>Built backend with FastAPI and REST APIs, integrating OpenAI APIs, Firebase, and Pinecone DB, orchestrated with LangChain</li>
                    <li>Developed frontend with Next.js, React, Tailwind CSS, for chrome extensions, slack bots, and websites</li>
                    <li>Streamlined CI/CD with GitHub Actions, deploying via Docker, Kubernetes, hosted on AWS EC2</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Soshal */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold text-white">Soshal</h4>
                      <p className="text-purple-400">Founding Engineer</p>
                    </div>
                    <p className="text-white/70">Oct 2023 – Jun 2024</p>
                  </div>
                  <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                    <li>Led the development of web/mobile using Flutter, Next.js, Node.js, and Firebase, streamlining event management for clubs</li>
                    <li>Built Express.js APIs with authentication and Stripe API for secure payment processing, enabling efficient event creation</li>
                    <li>Led the project from ideation to launch, resulting in 10 large-scale events and securing 5 sponsors</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Revoteen Inc. */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold text-white">Revoteen Inc.</h4>
                      <p className="text-purple-400">Head of Engineering/Co-founder</p>
                    </div>
                    <p className="text-white/70">Jun 2022 – Sep 2023</p>
                  </div>
                  <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                    <li>Secured $30K funding and scaled a platform connecting students to extracurriculars, reaching 10,000+ users with web and mobile</li>
                    <li>Built with Flutter, Next.js, PostgreSQL, a single Express.js service, and deployed via Vercel, launching on Play and Apple Stores</li>
                    <li>Optimized performance by 5x, integrated Google Analytics/Facebook Ads, and designed UIs using Tailwind CSS and Figma</li>
                  </ul>
                </CardContent>
              </Card>
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
                    <h4 className="font-bold text-white">NeuroFlow</h4>
                    <p className="text-purple-400">Vite.js, FastAPI, AWS, RAG, Google ADK, MCP Servers, Firebase Functions</p>
                  </div>
                  <p className="text-white/70">Jan 2025 – Mar 2025</p>
                </div>
                <ul className="mt-4 list-disc pl-4 text-sm text-white/70">
                  <li>Built AI-powered DevOps agent automating end-to-end CI/CD provisioning and documentation with Jira integration</li>
                  <li>Monitored CI/CD pipeline failures and provided automated remediation guidance and integrated merge editor in web app</li>
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
                    React.js, Next.js, Flutter, Node.js, Fast API, Express.js, Tailwind CSS, TensorFlow, PyTorch,
                    React Native, Expo
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Tools:</p>
                  <p className="text-sm text-white/70">
                    Git, AWS (S3, Lambda), Kubernetes, Redis, Docker, Kafka, Terraform, Firebase, Supabase, GCP, Vercel, Playwright, Hatchet
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Gen AI:</p>
                  <p className="text-sm text-white/70">
                    NLP, ChatGPT Assistance API, Realtime API, Prompt Engineering, GraphRAG, Google ADK
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

