"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface Card3DProps {
  children: ReactNode
  className?: string
}

export default function Card3D({ children, className = "" }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  // Motion values for tracking mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse tracking with springs
  const springConfig = { damping: 20, stiffness: 300 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  // Transform mouse position into rotation values
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ["-15deg", "15deg"])

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top

    const x = offsetX / width - 0.5
    const y = offsetY / height - 0.5

    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX: hovering ? rotateX : "0deg",
          rotateY: hovering ? rotateY : "0deg",
          transformStyle: "preserve-3d",
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
      >
        {children}

        {/* Highlight effect */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0"
          style={{
            opacity: useTransform(smoothMouseY, [-0.5, 0.5], [0.2, 0]),
            rotateX: "inherit",
            rotateY: "inherit",
          }}
        />
      </motion.div>
    </motion.div>
  )
}
