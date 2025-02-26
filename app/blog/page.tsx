"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NavHeader } from "@/components/nav-header"

const blogPosts = [
  {
    slug: "building-rag-pipelines",
    title: "Building RAG Pipelines for Educational AI",
    description: "A deep dive into creating efficient retrieval augmented generation pipelines for educational tools.",
    date: "May 15, 2024",
    readTime: "10 min read",
    tags: ["AI", "Education", "RAG"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    slug: "scaling-nextjs-apps",
    title: "Scaling Web Applications with Next.js",
    description: "Learn how to build and scale web applications using Next.js and React with best practices.",
    date: "May 10, 2024",
    readTime: "8 min read",
    tags: ["Next.js", "Web Development", "Performance"],
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <NavHeader />
      <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12"
        >
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:text-5xl">
              Astra Blog
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Thoughts on AI, software development, and building great products
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <motion.div key={post.slug} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full overflow-hidden bg-white/5 border-white/10 backdrop-blur-sm">
                    <div className="aspect-video relative">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <CardHeader className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-400"
                          >
                            <Tag className="mr-1 h-3 w-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <CardTitle className="text-xl text-white hover:text-purple-400 transition-colors">
                        {post.title}
                      </CardTitle>
                      <p className="text-sm text-white/70">{post.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}

