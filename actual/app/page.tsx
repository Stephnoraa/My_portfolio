"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Shield, Database, Braces, Cloud, Terminal, Bot } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import Blob from "@/components/svg/blob"
import Card3D from "@/components/3d-card"
import AnimatedText from "@/components/animated-text"
import ScrollProgress from "@/components/scroll-progress"
import Particles from "@/components/particles"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative overflow-hidden">
      {/* Animation components */}
      <ScrollProgress />
      <Particles />

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Blob className="absolute top-20 left-10 w-64 h-64 text-purple-600/30" />
        <Blob className="absolute bottom-20 right-10 w-80 h-80 text-cyan-500/30" />
        <Blob className="absolute top-1/3 right-1/4 w-40 h-40 text-pink-500/30" />

        {/* Code-like elements */}
        <div className="hidden lg:block absolute top-40 left-10 text-xs font-mono text-foreground/20 rotate-12">
          {`def chaos_theory():\n    return order_from_disorder()`}
        </div>
        <div className="hidden lg:block absolute bottom-40 right-10 text-xs font-mono text-foreground/20 -rotate-6">
          {`# Exploring the digital frontier\nimport life as adventure`}
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="inline-block mb-4 px-4 py-1 rounded-full vibrant-gradient text-white"
          >
            <span className="text-sm font-medium">
              Cloud Engineer • Python Developer • Cybersecurity Analyst
            </span>
          </motion.div>

          <AnimatedText
            text="Turning Chaos Into Code"
            className="text-4xl md:text-6xl font-bold mb-6 font-heading gradient-text"
            delay={0.2}
          />

          <div className="h-16 mb-6">
            <TypeAnimation
              sequence={[
                "Building secure systems with Python",
                1000,
                "Automating workflows for efficiency",
                1000,
                "Engineering prompts for AI models",
                1000,
                "Deploying solutions to the cloud",
                1000,
                "Containerizing applications with Docker",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-xl md:text-2xl text-foreground/80 font-mono"
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>

            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto"
            >
            Hey, I’m Stephnora.<br />
            Builder. Breaker. Security Girl. Certified Chaos.<br />
            I build with Python, automate what I can, secure what I must, and deploy to the cloud like it’s second nature.<br />
            If it involves code, creativity, or coffee-fueled curiosity — I’m in.<br />
            This is my corner of the internet. Welcome.
            </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/projects">
              <Button size="lg" className="group relative overflow-hidden vibrant-button">
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="relative z-10 ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="group hover-lift vibrant-card">
                Enter the Chaos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Skills */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Code className="h-10 w-10 text-purple-600 mb-4" />,
              title: "Python Mastery",
              description: "Building robust applications, automation tools, and data analysis pipelines with Python.",
              delay: 0.1,
            },
            {
              icon: <Shield className="h-10 w-10 text-cyan-500 mb-4" />,
              title: "Cybersecurity",
              description:
                "Protecting digital assets through penetration testing, security analysis, and best practices.",
              delay: 0.2,
            },
            {
              icon: <Database className="h-10 w-10 text-pink-500 mb-4" />,
              title: "Cloud Engineering",
              description: "Provisioning infrastructure, setting up firewalls, IAM, VMs, and securing cloud environments.",
              delay: 0.3,
            },
            {
              icon: <Bot className="h-10 w-10 text-purple-600 mb-4" />,
              title: "Prompt Engineering",
              description: "Designing effective prompts for AI models to generate high-quality, relevant outputs.",
              delay: 0.4,
            },
            {
              icon: <Terminal className="h-10 w-10 text-cyan-500 mb-4" />,
              title: "Automation",
              description: "Creating efficient workflows and scripts that save time and reduce human error.",
              delay: 0.5,
            },
            {
              icon: <Cloud className="h-10 w-10 text-pink-500 mb-4" />,
              title: "Cloud Systems",
              description: "Designing and implementing scalable solutions using AWS and other cloud providers.",
              delay: 0.6,
            },
            {
              icon: <Braces className="h-10 w-10 text-purple-600 mb-4" />,
              title: "Containerization",
              description: "Using Docker and Kubernetes to create consistent, deployable application environments.",
              delay: 0.7,
            },
            {
              icon: <Braces className="h-10 w-10 text-cyan-500 mb-4" />,
              title: "AI & Machine Learning",
              description: "Creating intelligent systems that learn, adapt, and solve complex problems.",
              delay: 0.8,
            },
          ].map((skill, index) => (
            <Card3D key={index} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: skill.delay }}
                className="glass-card elegant-shadow p-6 vibrant-card h-full hover-lift"
              >
                {skill.icon}
                <h3 className="text-xl font-bold mb-2 font-heading">{skill.title}</h3>
                <p className="text-foreground/70">{skill.description}</p>
              </motion.div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card elegant-shadow p-8 text-center vibrant-card"
        >
          <AnimatedText
            text="Ready to collaborate?"
            className="text-2xl md:text-3xl font-bold mb-4 font-heading gradient-text"
            delay={0.1}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto"
          >
            I'm always open to new projects, collaborations, or just a friendly chat about tech.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button size="lg" className="group relative overflow-hidden vibrant-button">
                <span className="relative z-10">Get in Touch</span>
                <ArrowRight className="relative z-10 ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
