"use client"
import { useEffect, useRef, useState } from "react"
import { achievements } from "@/data"

export function Achievements() {
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
      id="achievements"
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className="group bg-secondary/20 hover:bg-secondary/40 border border-border rounded-lg p-6 transition-all duration-300 hover:border-accent/50"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="shrink-0 p-2 bg-accent/10 rounded-lg">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                        {achievement.title}
                      </h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{achievement.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
