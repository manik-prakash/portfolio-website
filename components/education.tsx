"use client"

import { useEffect, useRef, useState } from "react"

const education = [
  {
    institution: "K. J. Somaiya School of Engineering, Mumbai",
    degree: "B.Tech in Computer Engineering",
    period: "2023 - 2027",
    description: "Relevant coursework: Data Structures, Algorithms, Database Management, Operating Systems, Computer Networks, Machine Learning. Active member of technical councils and hackathon participant.",
  },
  {
    institution: "D.A.V Public School, Ranchi",
    degree: "HSC (Science Stream)",
    period: "2021 - 2023",
    description: "Completed higher secondary education with Physics, Chemistry, and Mathematics. Scored 91% in 12th board examinations and 94% in 10th board examinations.",
  },
]

export function Education() {
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
      id="education"
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">Education</h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="group hover:bg-secondary/30 p-6 rounded-lg transition-all duration-300 -mx-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                    {edu.institution}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{edu.degree}</p>
                </div>
                <span className="text-sm sm:text-base text-muted-foreground whitespace-nowrap">{edu.period}</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
