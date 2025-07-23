from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
import uvicorn
import random
import re
import aiosmtplib
from email.message import EmailMessage
from email_validator import validate_email, EmailNotValidError
from dotenv import load_dotenv
import os

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

# Knowledge base for the chatbot
knowledge_base = {
    "skills": [
        "Python development",
        "Cybersecurity",
        "Web3 technologies",
        "Blockchain",
        "AI & Machine Learning",
        "Automation",
        "Prompt engineering",
        "Cloud systems (AWS)",
        "Containerization (Docker, Kubernetes)"
    ],
    "projects": [
        "SecureNet Scanner - A Python-based network vulnerability scanner",
        "CryptoTracker DApp - A decentralized application for tracking cryptocurrency portfolios",
        "MediPredict - An AI-powered medical diagnosis tool",
        "DataScrubber - A Python utility for cleaning sensitive data",
        "BlockVote - A blockchain-based voting system",
        "PhishGuard - A browser extension that detects phishing attempts",
        "NLP Document Analyzer - An AI tool for document analysis",
        "AutomatedETL - A Python framework for ETL pipelines"
    ],
    "background": "I transitioned from medical school to tech, bringing a unique perspective to my work. I specialize in Python development, cybersecurity, Web3 technologies, automation, and cloud systems.",
    "contact": "You can reach me via email at contact@stephpy.dev or through any of the social links on this page."
}

# Function to detect intent from user message
def detect_intent(message: str) -> str:
    message = message.lower()
    
    if re.search(r'\b(hi|hello|hey|greetings)\b', message):
        return "greeting"
    elif re.search(r'\b(bye|goodbye|see you|farewell)\b', message):
        return "farewell"
    elif re.search(r'\b(thanks|thank you|appreciate)\b', message):
        return "thanks"
    elif re.search(r'\b(skill|skills|expertise|know|good at|specialize)\b', message):
        return "skills"
    elif re.search(r'\b(project|projects|portfolio|work|built|created)\b', message):
        return "projects"
    elif re.search(r'\b(background|history|experience|journey|story|about)\b', message):
        return "background"
    elif re.search(r'\b(contact|email|reach|connect|talk|message)\b', message):
        return "contact"
    elif re.search(r'\b(automation|automate)\b', message):
        return "automation"
    elif re.search(r'\b(cloud|aws|azure|gcp)\b', message):
        return "cloud"
    elif re.search(r'\b(container|docker|kubernetes|k8s)\b', message):
        return "containerization"
    elif re.search(r'\b(prompt|engineering|ai prompt|gpt)\b', message):
        return "prompt_engineering"
    else:
        return "unknown"

# Function to generate response based on intent
def generate_response(intent: str) -> str:
    if intent == "greeting":
        greetings = [
            "Hello! How can I help you today?",
            "Hi there! What would you like to know about my work?",
            "Hey! I'm StephBot. What can I tell you about Stephanie's skills or projects?"
        ]
        return random.choice(greetings)
    
    elif intent == "farewell":
        farewells = [
            "Goodbye! Feel free to reach out if you have more questions.",
            "See you later! Don't hesitate to contact Stephanie directly.",
            "Take care! Hope to chat again soon."
        ]
        return random.choice(farewells)
    
    elif intent == "thanks":
        thanks_responses = [
            "You're welcome! Is there anything else you'd like to know?",
            "Happy to help! Let me know if you have other questions.",
            "My pleasure! Feel free to ask about anything else."
        ]
        return random.choice(thanks_responses)
    
    elif intent == "skills":
        skills_list = ", ".join(knowledge_base["skills"][:-1]) + ", and " + knowledge_base["skills"][-1]
        return f"Stephanie specializes in {skills_list}. Which skill would you like to know more about?"
    
    elif intent == "projects":
        projects_sample = random.sample(knowledge_base["projects"], 3)
        projects_text = ", ".join(projects_sample[:-1]) + ", and " + projects_sample[-1]
        return f"Some notable projects include {projects_text}. Would you like to hear about a specific project or see the full portfolio?"
    
    elif intent == "background":
        return knowledge_base["background"]
    
    elif intent == "contact":
        return knowledge_base["contact"]
    
    elif intent == "automation":
        return "Stephanie is an automation specialist who creates efficient workflows using Python, Bash scripting, and CI/CD pipelines. She's automated everything from data processing to infrastructure deployment, saving countless hours of manual work."
    
    elif intent == "cloud":
        return "Stephanie has extensive experience with AWS cloud services, including EC2, S3, Lambda, and CloudFormation. She's designed and implemented scalable, cost-effective cloud architectures for various applications."
    
    elif intent == "containerization":
        return "Stephanie works with Docker and Kubernetes to containerize applications, ensuring consistent deployment across different environments. She's created microservice architectures that are both scalable and maintainable."
    
    elif intent == "prompt_engineering":
        return "As a prompt engineering expert, Stephanie designs effective prompts for AI models like GPT to generate high-quality, relevant outputs. She's optimized prompts for various use cases, from content generation to code assistance."
    
    else:
        unknown_responses = [
            "That's an interesting question. While I don't have specific information on that, I can tell you about Stephanie's skills, projects, or background.",
            "I'm not sure about that, but I'd be happy to share details about Stephanie's expertise in Python, cybersecurity, or Web3.",
            "I don't have that information at hand. Would you like to know about Stephanie's skills in automation, cloud systems, or prompt engineering instead?"
        ]
        return random.choice(unknown_responses)

@app.post("/api/chat")
async def chat(request: ChatRequest):
    try:
        # Get the last message from the user
        last_message = request.messages[-1].content
        
        # Detect intent from the message
        intent = detect_intent(last_message)
        
        # Generate response based on intent
        response = generate_response(intent)
        
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

load_dotenv()

SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASS = os.getenv("SMTP_PASS")

@app.post("/api/contact")
async def contact(form: ContactForm):
    # Validate email
    try:
        validate_email(form.email)
    except EmailNotValidError as e:
        raise HTTPException(status_code=400, detail=str(e))

    # Compose email
    msg = EmailMessage()
    msg["From"] = SMTP_USER
    msg["To"] = SMTP_USER  # Send to yourself
    msg["Subject"] = f"New Contact Form Submission from {form.name}"
    msg.set_content(
        f"Name: {form.name}\nEmail: {form.email}\n\nMessage:\n{form.message}"
    )

    try:
        await aiosmtplib.send(
            msg,
            hostname=SMTP_HOST,
            port=SMTP_PORT,
            username=SMTP_USER,
            password=SMTP_PASS,
            start_tls=True,
        )
        return {"message": "Your message has been sent!"}
    except Exception as e:
        print("SMTP error:", e)
        raise HTTPException(status_code=500, detail="Failed to send email. Please try again later.")

@app.get("/")
def read_root():
    return {"message": "API is running!"}
    


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
