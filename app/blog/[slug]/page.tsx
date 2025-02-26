"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { NavHeader } from "@/components/nav-header"

export default function BlogPost({ params }: { params: { slug: string } }) {
  // This would normally come from a CMS or database
  const post = {
    title: "Building RAG Pipelines for Educational AI",
    description: "A deep dive into creating efficient retrieval augmented generation pipelines for educational tools.",
    date: "May 15, 2024",
    readTime: "10 min read",
    tags: ["AI", "Education", "RAG"],
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      # Introduction

      Retrieval Augmented Generation (RAG) is becoming increasingly important in educational AI applications. 
      In this post, we'll explore how to build efficient RAG pipelines that can enhance the learning experience.

      ## Understanding RAG

      RAG combines the power of large language models with the ability to retrieve relevant information from a 
      knowledge base. This makes it particularly useful in educational contexts where accuracy and relevance are crucial.

      \`\`\`python
      from langchain import RAGPipeline

      def create_educational_rag():
          # Initialize the pipeline
          pipeline = RAGPipeline(
              retriever="semantic",
              model="gpt-4",
              max_tokens=500
          )
          return pipeline
      \`\`\`

      ## Key Components

      1. **Document Processing**
         - Text extraction
         - Chunking
         - Embedding generation

      2. **Retrieval System**
         - Vector store setup
         - Similarity search
         - Context window management

      3. **Generation Layer**
         - Prompt engineering
         - Response synthesis
         - Output formatting

      ## Best Practices

      When implementing RAG for educational purposes, consider:

      - **Accuracy**: Ensure retrieved information is accurate and up-to-date
      - **Relevance**: Fine-tune retrieval to match educational context
      - **Performance**: Optimize for quick response times
      - **Scalability**: Design for growing content and user base

      ## Implementation Example

      Here's a simple example of how to implement a basic RAG pipeline:

      \`\`\`python
      from langchain import Document, Retriever, Generator

      class EducationalRAG:
          def __init__(self):
              self.retriever = Retriever()
              self.generator = Generator()

          def process_query(self, query: str) -> str:
              # Retrieve relevant documents
              docs = self.retriever.get_relevant_docs(query)
              
              # Generate response
              response = self.generator.generate(
                  query=query,
                  context=docs
              )
              
              return response
      \`\`\`

      ## Conclusion

      RAG pipelines are powerful tools for building educational AI systems. By following 
      best practices and understanding the key components, you can create effective 
      solutions that enhance learning experiences.

      ## Next Steps

      - Explore advanced retrieval techniques
      - Implement feedback mechanisms
      - Scale the system for larger deployments
    `,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <NavHeader />
      <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12"
        >
          <div className="mx-auto max-w-3xl">
            <Link href="/blog" className="mb-8 inline-flex items-center text-sm text-white/70 hover:text-purple-400">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mb-8">
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">{post.title}</h1>
              <p className="mb-6 text-xl text-white/70">{post.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
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
              </div>
            </div>

            <div className="mb-12 aspect-[2/1] relative rounded-lg overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <div className="prose prose-invert prose-purple max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </div>
        </motion.article>
      </main>
    </div>
  )
}

