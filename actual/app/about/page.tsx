"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Code, Brain, Download, Briefcase, GraduationCap, Award, BookOpen, Coffee } from "lucide-react"
import { Zap } from "lucide-react"
import AnimatedText from "@/components/animated-text"
import { useRef } from "react"
export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Animation variants for framer-motion
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [0, -100]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.2]),
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [0, 100]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 1]),
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 200]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]),
          }}
        />
      </div>

      {/* About Section - Add profile image */}
      <section className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <AnimatedText
            text="About Me"
            className="text-4xl md:text-5xl font-bold mb-6 font-heading gradient-text"
            delay={0.1}
          />

          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="w-full md:w-1/3">
              <motion.div
                className="relative w-64 h-64 mx-auto"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute inset-0 rounded-full vibrant-gradient blur-md" />
                <div className="absolute inset-1 rounded-full bg-background overflow-hidden">
                  <Image
                    src="/steph.jpg"
                    alt="Stephnora Mafeng Osedei"
                    width={250}
                    height={250}
                    className="rounded-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-2/3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-foreground/80 mb-4"
              >
                Hello! I'm Stephnora, a girl who took an unconventional path from medical school to the world
                of technology. My journey represents my belief that life isn't always linear, and the most interesting
                stories come from unexpected turns.

              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-foreground/80 mb-4"
              >
                My work lives at the intersection of cloud engineering, security, and automation.
                I’m fascinated by how modern infrastructure can be built, monitored, defended, and made
                smarter with the right code and systems in place. Whether it’s detecting anomalies in a SOC environment,
                securing cloud workloads, or writing scripts to automate the boring stuff — I’m there!
                This website is a digital scrapbook of everything I am: a builder,
                a learner, an advocate, a multitasker with a to-do list that never ends.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-lg text-foreground/80"
              >
                I started my career in tech as a junior developer in 2023, where I built web applications and learned the ropes of coding.
                Since then, I transitioned into a cybersecurity analyst role, where I worked for over two years.
                My experience spans various domains, including Cloud Engineering, SOC, Digital Forensics and automation.
                I have completed multiple internships and worked on a lot projects to build my expertise.
                My goal is to continue growing in this field, leveraging my unique background to bring fresh perspectives to the table.
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center mb-12"
          >
            <a
              href="/stephnora_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden vibrant-button px-6 py-3 inline-flex items-center"
            >
              <span className="relative z-10">View My Resume</span>
              <Download className="relative z-10 ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
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
            My Skillset
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Category 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
                <Code className="mr-2 h-6 w-6 text-purple-600" /> Development
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Python (FastAPI,Flask, Django)</li>
                <li>JavaScript (React, Next.js, Node.js)</li>
                <li>SQL (PostgreSQL, SQLite)</li>
                <li>RESTful API, Pandas, NumPy</li>
                <li>Git & GitHub, CI/CD Pipelines</li>
                <li>LangChain, CrewAI, GenAI, NLP</li>
                <li>Web Scraping & Data Analysis</li>
                <li>Agile Methodologies & DevOps</li>
              </ul>
            </motion.div>

            {/* Skill Category 2 */}
              <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
                <Zap className="mr-2 h-6 w-6 text-pink-600" /> Cybersecurity
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Network Security & Malware Analysis</li>
                <li>Vulnerability & Risk Management</li>
                <li>Security Incident Response</li>
                <li>Threat Intelligence & Security Auditing</li>
                <li>Pen Testing & Digital Forensics</li>
                <li>SIEM Tools (Splunk, ELK)</li>
                <li>Security Policies & Compliance</li>
                <li>Data Protection & Encryption</li>
              </ul>
            </motion.div>

            {/* Skill Category 3 */}
              <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
                <Brain className="mr-2 h-6 w-6 text-indigo-600" /> Cloud Engineering
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Cloud Platforms(AWS, GCP, Azure)</li>
                <li>VPC, IAM, Firewalls, Security group</li>
                <li>IaCode (Terraform, CloudFormation)</li>
                <li>Containerization (Docker, Kubernetes)</li>
                <li>Serverless Architectures </li>
                <li>Monitoring & Logging (CloudWatch, ELK)</li>
                <li>Automation (Ansible, Puppet)</li>
                <li>Cost Optimization & Management</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
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
            Work Experience
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="space-y-10 max-w-3xl mx-auto"
          >
            {/* Job 1: Shadow Fox */}
            <motion.div
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="h-8 w-8 text-purple-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display">
                    Cybersecurity  & Cloud Security  Intern
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Cyblack | London, UK | 05-2025 - 09-2025</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Assisted in designing and implementing secure cloud architectures on AWS and Azure.</li>
                <li>Monitored and responded to cloud security incidents, ensuring compliance with industry standards.</li>
                <li>Automated security controls and vulnerability management using cloud-native tools.</li>
                <li>Collaborated with cross-functional teams to improve security posture and incident response.</li>
                <li>Worked as a team on the 6 different domains in cybersecurity, solving our company's challenges, reporting and presenting to the board.</li>
              </ul>
            </motion.div>
            {/* Job 2: Hacktify */}
            <motion.div
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="h-8 w-8 text-pink-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display">
                    Cyber Security Analyst Intern
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Hacktify | Remote | 01/2025 - 03/2025</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Used Nmap and Wireshark to analyze network traffic and detect open ports for vulnerability assessment.</li>
                <li>Conducted SQL Injection & XSS testing to identify security weaknesses in web applications.</li>
                <li>Analyzed logs and attack patterns using Burp Suite and Security Onion for real-time threat monitoring.</li>
                <li>Documented vulnerabilities and mitigation strategies in detailed security reports.</li>
              </ul>
            </motion.div>
            {/* Job 3: Cyblack */}
            <motion.div
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display">
                    Cybersecurity  Analyst Intern
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Shadow Fox | Remote | 12/2024 - 02/2025</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Monitored network traffic using Wireshark to detect potential security threats.</li>
                <li>Conducted vulnerability assessments using Nmap to identify misconfigured systems.</li>
                <li>Performed log analysis with Security Onion to detect suspicious activity and unauthorized access.</li>
                <li>Investigated security incidents by analyzing logs, attack patterns, and system anomalies.</li>
                <li>Created detailed security reports with findings, mitigation strategies, and remediation steps.</li>
              </ul>

            </motion.div>
            {/* Job 4: CyberSecured India */}
            <motion.div
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="h-8 w-8 text-orange-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display">
                    Cybersecurity Analyst Intern
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">CyberSecured India | India | 2024</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Conducted threat analysis and risk assessments for enterprise clients.</li>
                <li>Investigated and responded to security incidents, including malware outbreaks and phishing attacks.</li>
                <li>Developed and delivered security awareness training for staff and clients.</li>
                <li>Worked with SIEM tools to monitor, detect, and report on security events.</li>
              </ul>
            </motion.div>
            {/* Job 5: We do all tech */}
            <motion.div
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="h-8 w-8 text-indigo-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display">
                    Python Developer
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Oasis Infobyte | Remote | 11/2023 - 05/2024</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Developed and maintained Python-based applications.</li>
                <li>Collaborated with teams to implement technical solutions.</li>
                <li>Assisted in debugging and optimizing code.</li>
                <li>Worked with departments across the company, including marketing and project management, in developing new ideas, initiatives, products, and services.</li>
              </ul>
            </motion.div>
            {/* Job 6: Fred Photography and Enterprises */}
            <motion.div
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="h-8 w-8 text-green-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display">
                    Customer Service and IT Support
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Fred Photography and Enterprises | Jos, Plateau State | 02/2020 - 06/2021</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Provided technical support and troubleshooting for customers.</li>
                <li>Assisted with system maintenance and network configurations.</li>
                <li>Delivered excellent customer service, improving client satisfaction.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white font-display">
            Certifications
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="space-y-10 max-w-3xl mx-auto"
          >
            <motion.div
              variants={item}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-purple-100 dark:border-purple-800"
            >
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-pink-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display">
                    Certifications & Badges
                  </h3>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Google Cybersecurity Professional Certification</li>
                <li>Certified in Cybersecurity (CC)</li>
                <li>CompTIA Security+ <span className="italic">(in view)</span></li>
                <li>AWS Certified Cloud Practitioner <span className="italic">(in view)</span></li>
                <li>Google Cloud Engineer Associate</li>
                <li>Google Cloud Cybersecurity Certificate</li>
                <li>Cisco Networking and Cybersecurity Certification</li>
                <li>Python Certification (100 days of code)</li>
                <li>TryHackMe Badges (<a href="https://tryhackme.com/p/stephnora" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Profile</a>)</li>
                <li>Credly Badges (<a href="https://www.credly.com/users/stephnora-mafeng-osedei" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Badges</a>)</li>
                <li>AI Research Program (Speech Data, ML, NLP)</li>
                <li>Cybersecurity Bootcamp - Miva University & Nexascale</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white font-display">
            Education
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
                    Bachelor of Science (B.Sc.) in Cybersecurity
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Miva Open University | Abuja | Sept 2023 – Mar 2027</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>First class student with advanced coursework in network security, digital forensics, and cloud security.</li>
                <li>Engaged in research and hands-on projects, including cybersecurity bootcamps and AI research programs.</li>
                <li>Active member of university tech and cybersecurity communities.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resume Download Section */}
      <section className="py-16 animated-gradient-bg text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Resume</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Get a copy of my professional background and skills.
          </p>
          <a
            href="/stephnora_resume.pdf"
            download
            className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            <Download className="inline-block mr-2 h-5 w-5" /> Download My Resume
          </a>
        </div>
      </section>

      {/* Add a footer section at the bottom: */}
      <footer className="py-8 bg-gray-100 dark:bg-gray-900 text-center border-t border-gray-200 dark:border-gray-800 mt-16">
        <p className="mt-4 text-gray-500 text-sm">If you enjoy my work, consider supporting me! 💜</p>
      </footer>
    </div>
  )
}
