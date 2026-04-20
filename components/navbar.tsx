"use client"
import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"

export const navItems  = [
    { label: "home", href: "#hero" },
    { label: "education", href: "#education" },
    { label: "experience", href: "#experience" },
    { label: "projects", href: "#projects" },
    { label: "achievements", href: "#achievements" },
    { label: "activity", href: "#github" },
    { label: "contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = navItems.map((item) => item.href.substring(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? "w-[95%] max-w-3xl" : "w-[95%] max-w-3xl"
          }`}
      >
        <div
          className={`backdrop-blur-md bg-secondary/50 border border-border rounded-full px-6 py-3 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""
            }`}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="hidden md:flex items-center gap-0.5 mx-auto overflow-hidden">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-2.5 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-200 ${activeSection === item.href.substring(1)
                    ? "bg-accent/20 text-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="shrink-0 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-2xl px-8 py-3 transition-colors duration-200 ${activeSection === item.href.substring(1)
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
