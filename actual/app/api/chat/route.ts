import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // In production, this would connect to your Python backend
    // const response = await fetch('http://localhost:8000/api/chat', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // })
    // const data = await response.json()

    // For now, we'll simulate the Python backend response
    const lastMessage = body.messages[body.messages.length - 1].content.toLowerCase()
    let responseText = ""

    // Simple intent detection
    if (lastMessage.includes("hello") || lastMessage.includes("hi")) {
      responseText = "Hello! How can I help you today?"
    } else if (lastMessage.includes("skill") || lastMessage.includes("expertise")) {
      responseText =
        "Stephanie specializes in Python development, cybersecurity, Web3 technologies, automation, prompt engineering, cloud systems (AWS), and containerization. Which skill would you like to know more about?"
    } else if (lastMessage.includes("automation")) {
      responseText =
        "Stephanie is an automation specialist who creates efficient workflows using Python, Bash scripting, and CI/CD pipelines. She's automated everything from data processing to infrastructure deployment, saving countless hours of manual work."
    } else if (lastMessage.includes("prompt") || lastMessage.includes("engineering")) {
      responseText =
        "As a prompt engineering expert, Stephanie designs effective prompts for AI models like GPT to generate high-quality, relevant outputs. She's optimized prompts for various use cases, from content generation to code assistance."
    } else if (lastMessage.includes("cloud") || lastMessage.includes("aws")) {
      responseText =
        "Stephanie has extensive experience with AWS cloud services, including EC2, S3, Lambda, and CloudFormation. She's designed and implemented scalable, cost-effective cloud architectures for various applications."
    } else if (
      lastMessage.includes("container") ||
      lastMessage.includes("docker") ||
      lastMessage.includes("kubernetes")
    ) {
      responseText =
        "Stephanie works with Docker and Kubernetes to containerize applications, ensuring consistent deployment across different environments. She's created microservice architectures that are both scalable and maintainable."
    } else if (lastMessage.includes("project")) {
      responseText =
        "Some notable projects include SecureNet Scanner (a Python-based network vulnerability scanner), CryptoTracker DApp (a decentralized application for tracking cryptocurrency portfolios), and AutomatedETL (a Python framework for ETL pipelines). Would you like to hear about a specific project?"
    } else if (lastMessage.includes("contact")) {
      responseText =
        "You can reach Stephanie via email at contact@stephpy.dev or through any of the social links on this page."
    } else if (lastMessage.includes("background") || lastMessage.includes("experience")) {
      responseText =
        "Stephanie transitioned from medical school to tech, bringing a unique perspective to her work. She specializes in Python development, cybersecurity, Web3 technologies, automation, and cloud systems."
    } else {
      responseText =
        "That's an interesting question. I'd be happy to tell you about Stephanie's skills in Python, cybersecurity, Web3, automation, prompt engineering, cloud systems, or containerization. What would you like to know more about?"
    }

    return NextResponse.json({ response: responseText })
  } catch (error) {
    console.error("Error processing chat request:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
