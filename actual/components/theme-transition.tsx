"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

// Define our color themes with more vibrant colors
const colorThemes = [
  {
    name: "purple",
    primary: "hsl(262.1 83.3% 57.8%)",
    secondary: "hsl(186 100% 42.2%)",
    accent: "hsl(329.5 100% 44.3%)",
  },
  {
    name: "teal",
    primary: "hsl(173 80% 40%)",
    secondary: "hsl(335 78% 42%)",
    accent: "hsl(43 96% 58%)",
  },
  {
    name: "blue",
    primary: "hsl(221 83% 53%)",
    secondary: "hsl(349 100% 59%)",
    accent: "hsl(271 91% 65%)",
  },
  {
    name: "green",
    primary: "hsl(142 76% 36%)",
    secondary: "hsl(205 100% 50%)",
    accent: "hsl(31 100% 60%)",
  },
]

export default function ThemeTransition() {
  const { theme } = useTheme()
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0)

  useEffect(() => {
    // Update CSS variables when theme changes
    const applyTheme = (themeIndex: number) => {
      const root = document.documentElement
      const colors = colorThemes[themeIndex]

      // Apply with transition
      root.style.setProperty("--transition-duration", "2s")
      root.style.setProperty("--primary-hue", colors.primary)
      root.style.setProperty("--secondary-hue", colors.secondary)
      root.style.setProperty("--accent-hue", colors.accent)

      // Reset transition after colors have changed
      setTimeout(() => {
        root.style.setProperty("--transition-duration", "0s")
      }, 2000)
    }

    // Rotate through themes
    const interval = setInterval(() => {
      const nextIndex = (currentThemeIndex + 1) % colorThemes.length
      setCurrentThemeIndex(nextIndex)
      applyTheme(nextIndex)
    }, 10000) // Change every 10 seconds

    // Apply initial theme
    applyTheme(currentThemeIndex)

    return () => clearInterval(interval)
  }, [currentThemeIndex, theme])

  return null
}
