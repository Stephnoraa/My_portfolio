"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import AnimatedText from "@/components/animated-text"
import Card3D from "@/components/3d-card"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Securing Your Python Applications: Best Practices",
    excerpt:
      "Learn how to protect your Python applications from common security vulnerabilities with these essential best practices.",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 10, 2024",
    tags: ["Python", "Security", "Best Practices"],
    category: "Cybersecurity",
  },
  {
    id: 2,
    title: "Cloud Security Fundamentals: Protecting Your Cloud Infrastructure",
    excerpt:
      "A comprehensive introduction to cloud security, best practices for AWS/Azure, and how to secure your cloud workloads.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 28, 2024",
    tags: ["Cloud Security", "AWS", "Azure", "Fundamentals"],
    category: "Cloud Security",
  },
  {
    id: 3,
    title: "Building Your First AI Model with Python",
    excerpt: "A step-by-step tutorial on creating a simple machine learning model using Python and popular libraries.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 15, 2024",
    tags: ["Python", "AI", "Tutorial"],
    category: "AI",
  },
  {
    id: 4,
    title: "From Medicine to Tech: My Career Transition",
    excerpt:
      "My personal journey of transitioning from medical school to a career in technology, with lessons learned along the way.",
    image: "/placeholder.svg?height=200&width=400",
    date: "March 30, 2024",
    tags: ["Career", "Personal"],
    category: "Personal",
  },
  {
    id: 5,
    title: "Ethical Hacking: Tools of the Trade",
    excerpt:
      "An overview of the essential tools and techniques used by ethical hackers to identify and address security vulnerabilities.",
    image: "/placeholder.svg?height=200&width=400",
    date: "March 18, 2024",
    tags: ["Cybersecurity", "Ethical Hacking", "Tools"],
    category: "Cybersecurity",
  },
  {
    id: 6,
    title: "Cloud Engineering: Automating Infrastructure with Terraform & Ansible",
    excerpt: "A practical guide to automating cloud infrastructure deployment and management using Terraform and Ansible.",
    image: "/placeholder.svg?height=200&width=400",
    date: "March 5, 2024",
    tags: ["Cloud Engineering", "Terraform", "Ansible", "Automation"],
    category: "Cloud Engineering",
  },
]

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const categories = ["All", "Python", "Cybersecurity", "Cloud Security", "Cloud Engineering", "AI", "Personal"]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = categoryFilter === "All" || post.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      {/* Background elements for chaos */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [0, -100]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.2]),
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [0, 100]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 1]),
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 200]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]),
          }}
        />

        {/* Code-like elements */}
        <div className="hidden lg:block absolute top-40 right-10 text-xs font-mono text-foreground/20 rotate-6">
          {`# Thoughts and musings\nfrom random import inspiration`}
        </div>
      </div>

      {/* Blog Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <AnimatedText
            text="My Cozy Hacker Corner"
            className="text-4xl md:text-5xl font-bold mb-6 font-heading text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
            delay={0.1}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/70 mb-12 text-center max-w-3xl mx-auto"
          >
            Welcome to my digital journal where I share thoughts, tutorials, and insights about Python, cybersecurity,
            Web3, and my journey in tech.
          </motion.p>

          {/* Search and filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <motion.div
                className="relative flex-1"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/50" />
                <Input
                  placeholder="Search posts..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </motion.div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  >
                    <Button
                      variant={categoryFilter === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCategoryFilter(category)}
                      className="relative overflow-hidden"
                    >
                      {categoryFilter === category && (
                        <motion.span
                          layoutId="activeBlogFilterBackground"
                          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                      <span className="relative z-10">{category}</span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                >
                  <Card3D className="h-full">
                    <Card className="h-full overflow-hidden group hover:border-primary/50 transition-colors">
                      <div className="overflow-hidden">
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start gap-4">
                          <CardTitle>{post.title}</CardTitle>
                          <div className="flex gap-2">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-foreground/60">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-foreground/50" />
                          <p className="text-sm text-foreground/60">{post.date}</p>
                        </div>
                        <Link href={`/blog/${post.id}`}>
                          <Button variant="outline" size="sm">
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </Card3D>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
