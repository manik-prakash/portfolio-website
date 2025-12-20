import { AnimatedSection } from "./animated-section"
import { experiences } from "@/data"

export function Experience() {
  return (
    <AnimatedSection id="experience">
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group hover:bg-secondary/30 p-6 rounded-lg transition-all duration-300 -mx-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                    {exp.company}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{exp.role}</p>
                </div>
                <span className="text-sm sm:text-base text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
