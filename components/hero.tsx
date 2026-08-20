"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { socialLinks } from "@/data"
import { PixelTrail, type PixelTrailHandle } from "@/components/ui/pixel-trail"
import { useScreenSize } from "@/hooks/use-screen-size"

const TYPED_WORDS = ["AI-powered products", "scalable APIs", "dev infrastructure", "full-stack apps"]

export function Hero() {
  const resumeLink = "https://drive.google.com/file/d/1kme59R4cig7EPyTtn6dYYLW1yi8V170V/view"
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)
  const screenSize = useScreenSize()
  const pixelTrailRef = useRef<PixelTrailHandle>(null)

  useEffect(() => {
    const word = TYPED_WORDS[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % TYPED_WORDS.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
      onMouseMove={(e) => pixelTrailRef.current?.handleMouseMove(e)}
    >
      <div className="absolute inset-0 pointer-events-none">
        <PixelTrail
          ref={pixelTrailRef}
          pixelSize={screenSize.lessThan("md") ? 20 : 28}
          fadeDuration={800}
          delay={0}
          pixelClassName="bg-accent/70"
        />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
            hi, i am <span className="text-accent">Manik Prakash</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8">
            from Mumbai, India
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed min-h-[5rem] sm:min-h-[5.5rem]">
            Full-stack engineer building{" "}
            <span className="text-accent font-mono">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
            . Ex-Intern @ Arcon.
          </p>

          <div className="flex gap-4 items-center flex-wrap">
            {socialLinks.map((link) => {
              const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
                github: Github,
                linkedin: Linkedin,
                twitter: Twitter,
                email: Mail,
              }
              const Icon = iconMap[link.name]
              return (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label={link.ariaLabel}
                >
                  <Icon className="w-6 h-6" />
                </a>
              )
            })}
            <a
              href={resumeLink}
              className="resume-btn-3d ml-2"
              aria-label="View Resume"
            >
              <span>resume</span>
              <span>resume</span>
              <span>resume</span>
              <span>resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
