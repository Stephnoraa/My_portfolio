"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Award, BookOpen } from "lucide-react"

export default function ResumePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
            My <span className="gradient-text">Credentials</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-center max-w-3xl mx-auto"
          >
            A snapshot of my professional journey, skills, and achievements.
          </motion.p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fillOpacity='1' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white font-display">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="space-y-10 max-w-3xl mx-auto"
          >
            {/* Job 1 */}
            <motion.div
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="h-8 w-8 text-purple-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display">
                    Cybersecurity Analyst
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Tech Solutions Inc. | 2023 - Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Monitored security systems and responded to incidents, reducing breach risk by 15%.</li>
                <li>Conducted vulnerability assessments and penetration testing on web applications.</li>
                <li>Developed Python scripts for automating security tasks and data analysis.</li>
                <li>Provided security awareness training to employees.</li>
              </ul>
            </motion.div>

            {/* Job 2 */}
            <motion.div
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="h-8 w-8 text-pink-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display">Junior Developer</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Innovate Web Studio | 2021 - 2023</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Built and maintained responsive web applications using React and Next.js.</li>
                <li>Developed RESTful APIs with Node.js and Express.</li>
                <li>Collaborated with design teams to implement user-friendly interfaces.</li>
                <li>Participated in code reviews and agile development sprints.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white font-display">
            Education & <span className="gradient-text">Certifications</span>
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="space-y-10 max-w-3xl mx-auto"
          >
            {/* Education 1 */}
            <motion.div
              variants={item}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-purple-100 dark:border-purple-800"
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-indigo-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display">
                    B.Sc. Computer Science
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">University of Technology | 2020 - 2024</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Specialized in Cybersecurity and Software Engineering.</li>
                <li>Relevant coursework: Data Structures, Algorithms, Network Security, Cryptography.</li>
              </ul>
            </motion.div>

            {/* Certification 1 */}
            <motion.div
              variants={item}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-pink-100 dark:border-pink-800"
            >
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-pink-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display">
                    CompTIA Security&#43;
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Issued: 2022</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Validated foundational cybersecurity skills and knowledge.
              </p>
            </motion.div>

            {/* Certification 2 */}
            <motion.div
              variants={item}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-purple-100 dark:border-purple-800"
            >
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-purple-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display">
                    Certified Ethical Hacker (CEH)
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Issued: 2023</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Demonstrated proficiency in ethical hacking techniques and countermeasures.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 animated-gradient-bg text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Download My Resume</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Get a detailed overview of my professional background and skills.
          </p>
          <motion.a
            href="/stephnora_resume.pdf" // Placeholder for your actual resume PDF
            download
            className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen className="inline-block mr-2 h-5 w-5" /> Download PDF
          </motion.a>
        </div>
      </section>
    </main>
  )
}
