"use client"

import Link from "next/link"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {  Mail,  Send, Coffee, Twitter, Linkedin, Github } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  interface ContactFormData {
    name: string
    email: string
    message: string
  }

  interface HandleChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

  const handleChange = (e: HandleChangeEvent) => {
    const { name, value } = e.target
    setFormData((prev: ContactFormData) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/contact`
        : "http://127.0.0.1:8000/api/contact";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`)
      }

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      })

      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error("Contact form submission error:", error)
      toast({
        title: "Something went wrong",
        description: `Your message couldn't be sent: ${formData.message}. Please try again.`,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-fuchsia-900 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 cyber-grid"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="blob absolute w-64 h-64 top-1/4 left-1/4"></div>
          <div className="blob absolute w-96 h-96 bottom-1/4 right-1/4" style={{ animationDelay: "-5s" }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-center font-display"
            >
            Let's Connect
            </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-center max-w-3xl mx-auto"
          >
            Have a question, project idea, or just want to say hi? I'd love to hear from you!
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white font-display">Get In Touch</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Whether you want to collaborate on a project, have a job opportunity, or just want to chat about tech
                and life, I'm always open to connecting with new people.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">stephnoramafeng@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full">
                    <Twitter className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Twitter</h3>
                    <p className="text-gray-600 dark:text-gray-400">@stephnora_a</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">LinkedIn</h3>
                    <p className="text-gray-600 dark:text-gray-400">stephnora-mafeng</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Or Buy Me Coffee</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  If you find my work helpful or interesting, consider supporting me with a coffee!
                </p>
                <div className="flex gap-4">
                  <a href="https://paystack.shop/pay/stephnora" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800">
                      Buy Me Coffee (₦)
                    </Button>
                  </a>
                  <a href="https://buymeacoffee.com/stephnora" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                      Buy Me Coffee ($)
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="gradient-border">
                <div className="gradient-border-content p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white font-display">
                    Send Me a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        required
                        className="w-full min-h-[150px]"
                      />
                    </div>

                    <MagneticButton>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </div>
                        )}
                      </Button>
                    </MagneticButton>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white font-display">
            Find Me <span className="text-gray-800 dark:text-white">Elsewhere</span>
            </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="https://twitter.com/stephnora_a"
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center space-y-3 w-40 h-40 justify-center transition-all duration-300"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <Twitter className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-gray-800 dark:text-white font-medium">Twitter</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/stephnora-mafeng/"
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center space-y-3 w-40 h-40 justify-center transition-all duration-300"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-gray-800 dark:text-white font-medium">LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/stephnoraa"
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center space-y-3 w-40 h-40 justify-center transition-all duration-300"
            >
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                <Github className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-gray-800 dark:text-white font-medium">GitHub</span>
            </motion.a>

            <motion.a
              href="mailto:stephnoramafeng@gmail.com"
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center space-y-3 w-40 h-40 justify-center transition-all duration-300"
            >
              <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full">
                <Mail className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <span className="text-gray-800 dark:text-white font-medium">Email</span>
            </motion.a>
          </div>
        </div>
      </section>

     
    </main>
  )
}
