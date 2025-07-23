"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Projects", path: "/projects" },
	{ name: "Blog", path: "/blog" },
	{ name: "Contact", path: "/contact" },
]

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const pathname = usePathname()
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<Link href="/" className="flex items-center">
							<span className="font-mono text-xl font-bold gradient-text">
								steph.py
							</span>
						</Link>
					</div>

					{/* Desktop menu */}
					<div className="hidden md:flex items-center space-x-4">
						<div className="flex space-x-1">
							{navItems.map((item) => (
								<Link key={item.path} href={item.path}>
									<Button
										variant="ghost"
										className={cn(
											"relative hover-lift",
											pathname === item.path &&
												"text-foreground font-medium"
										)}
									>
										{item.name}
										{pathname === item.path && (
											<motion.div
												className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary to-secondary"
												layoutId="navbar-indicator"
											/>
										)}
									</Button>
								</Link>
							))}
						</div>
						<Button
							variant="ghost"
							size="icon"
							onClick={() =>
								setTheme(theme === "dark" ? "light" : "dark")
							}
							aria-label="Toggle theme"
							className="hover-lift"
						>
							{mounted && theme === "dark" ? (
								<SunIcon className="h-5 w-5" />
							) : (
								<MoonIcon className="h-5 w-5" />
							)}
						</Button>
					</div>

					{/* Mobile menu button */}
					<div className="flex md:hidden">
						<Button
							variant="ghost"
							size="icon"
							onClick={() =>
								setTheme(theme === "dark" ? "light" : "dark")
							}
							aria-label="Toggle theme"
							className="mr-2"
						>
							{mounted && theme === "dark" ? (
								<SunIcon className="h-5 w-5" />
							) : (
								<MoonIcon className="h-5 w-5" />
							)}
						</Button>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							aria-label="Toggle menu"
						>
							{mobileMenuOpen ? (
								<XIcon className="h-5 w-5" />
							) : (
								<MenuIcon className="h-5 w-5" />
							)}
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{mobileMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.2 }}
					className="md:hidden glass-card"
				>
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navItems.map((item) => (
							<Link key={item.path} href={item.path}>
								<Button
									variant="ghost"
									className={cn(
										"w-full justify-start",
										pathname === item.path &&
											"text-foreground font-medium"
									)}
									onClick={() => setMobileMenuOpen(false)}
								>
									{item.name}
								</Button>
							</Link>
						))}
					</div>
				</motion.div>
			)}
		</nav>
	)
}
