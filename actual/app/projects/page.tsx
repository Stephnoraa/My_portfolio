"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, Code, Shield, Database, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import AnimatedText from "@/components/animated-text"
import Card3D from "@/components/3d-card"

// Sample project data
const projects = [
  {
    id: 1,
    title: "SecureNet Scanner",
    description: "A Python-based network vulnerability scanner that identifies security weaknesses in local networks.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Python", "Cybersecurity", "Networking"],
    github: "#",
    demo: "#",
    category: "Cybersecurity",
  },
  {
    id: 2,
    title: "CloudGuard Dashboard",
    description: "A cloud security monitoring dashboard for AWS and Azure environments, providing real-time alerts and compliance reports.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Cloud Security", "AWS", "Azure", "Compliance"],
    github: "#",
    demo: "#",
    category: "Cloud Security",
  },
  {
    id: 3,
    title: "MediPredict",
    description: "An AI-powered tool that predicts potential diagnoses based on symptom inputs using machine learning.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Python", "AI", "Machine Learning", "Healthcare"],
    github: "#",
    demo: "#",
    category: "AI Tools",
  },
  {
    id: 4,
    title: "DataScrubber",
    description: "A Python utility for cleaning and anonymizing sensitive data in medical research datasets.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Python", "Data Processing", "Healthcare"],
    github: "#",
    demo: "#",
    category: "Python",
  },
  {
    id: 5,
    title: "CloudOps Automation",
    description: "A toolkit for automating cloud infrastructure deployment and management using Terraform and Ansible.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Cloud Engineering", "Terraform", "Ansible", "Automation"],
    github: "#",
    demo: "#",
    category: "Cloud Engineering",
  },
  {
    id: 6,
    title: "PhishGuard",
    description: "A browser extension that uses ML to detect and block phishing attempts in real-time.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Cybersecurity", "JavaScript", "Machine Learning"],
    github: "#",
    demo: "#",
    category: "Cybersecurity",
  },
  {
    id: 7,
    title: "NLP Document Analyzer",
    description: "An AI tool that extracts key information from legal and medical documents using NLP.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Python", "AI", "NLP", "Document Processing"],
    github: "#",
    demo: "#",
    category: "AI Tools",
  },
  {
    id: 8,
    title: "AutomatedETL",
    description: "A Python framework for building automated ETL pipelines with minimal configuration.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Python", "Data Engineering", "Automation"],
    github: "#",
    demo: "#",
    category: "Python",
  },
]

// Category icons
const categoryIcons = {
  Python: <Code className="h-5 w-5" />,
  Cybersecurity: <Shield className="h-5 w-5" />,
  "Cloud Security": <Shield className="h-5 w-5" />,
  "Cloud Engineering": <Brain className="h-5 w-5" />,
  "AI Tools": <Brain className="h-5 w-5" />,
}

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter || project.tags.includes(filter))

  const categories = ["All", "Python", "Cybersecurity", "Cloud Security", "Cloud Engineering", "AI Tools"];

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
      </div>

      {/* Projects Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <AnimatedText
            text="My Projects"
            className="text-4xl md:text-5xl font-bold mb-6 font-heading text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
            delay={0.1}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/70 mb-12 text-center max-w-3xl mx-auto"
          >
            A collection of my work across Python development, cybersecurity, Web3, and AI. Each project represents a
            problem solved and a skill mastered.
          </motion.p>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                <Button
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className="flex items-center gap-2 relative overflow-hidden"
                >
                  {filter === category && (
                    <motion.span
                      layoutId="activeFilterBackground"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  <span className="relative z-10">
                    {category !== "All" && categoryIcons[category]}
                    {category}
                  </span>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
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
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <Badge variant="outline" className="flex items-center gap-1">
                            {categoryIcons[project.category]}
                            {project.category}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/70 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Link href={project.github}>
                          <Button variant="outline" size="sm" className="flex items-center gap-2 group">
                            <Github className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                            Code
                          </Button>
                        </Link>
                        <Link href={project.demo}>
                          <Button size="sm" className="flex items-center gap-2 group relative overflow-hidden">
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10">Live Demo</span>
                            <ExternalLink className="relative z-10 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </Card3D>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <p className="text-lg text-foreground/70">No projects found with the selected filter.</p>
            </motion.div>
          )}
        </motion.div>
      </section>
    </div>
  )
}
