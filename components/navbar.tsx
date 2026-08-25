"use client"
import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock"

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

  useBodyScrollLock(isMobileMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.substring(1)))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          isScrolled ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-2">
          <a
            href="#hero"
            onClick={handleNavClick}
            className="font-mono text-sm text-accent shrink-0"
            aria-label="Go to top"
          >
            ~/manik
          </a>

          <nav aria-label="Section navigation" className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                aria-current={activeSection === item.href.substring(1) ? "true" : undefined}
                className={`px-3 py-1.5 font-mono text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeSection === item.href.substring(1)
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-accent/50 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 border border-border rounded-sm text-foreground"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-md">
          <nav aria-label="Mobile section navigation" className="flex flex-col items-center justify-center h-full gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                aria-current={activeSection === item.href.substring(1) ? "true" : undefined}
                className={`font-mono text-2xl px-8 py-3 transition-colors duration-200 ${activeSection === item.href.substring(1)
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
