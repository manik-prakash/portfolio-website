"use client"
import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">Education</h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-base sm:text-lg md:text-xl">tldr; curious by nature, builder by choice.</p>
          <p className="text-base sm:text-lg md:text-xl">
            i like technology that solves real problems and systems that are simple, scalable, and well thought out. i spend most of my time building web applications and experimenting with cloud and devops tools.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            i’m currently exploring ai, distributed systems, and modern web architectures — always trying to learn how products work end-to-end.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            outside of coding, i enjoy cooking, and exploring new ideas on the internet and Gym (obv.)
          </p>
        </div>
      </div>
    </section>
  )
}
