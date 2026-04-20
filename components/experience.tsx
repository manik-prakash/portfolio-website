"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { experiences } from "@/data"

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <AnimatedSection id="experience">
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isCurrent = exp.period.toLowerCase().includes("present")
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`rounded-lg border transition-all duration-300 ${
                  isCurrent
                    ? "border-accent/30 bg-accent/5"
                    : "border-border bg-secondary/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-accent">
                        {exp.company}
                      </h3>
                      {isCurrent && (
                        <span className="text-xs px-2 py-0.5 rounded-full border border-accent/40 text-accent bg-accent/10">
                          current
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
