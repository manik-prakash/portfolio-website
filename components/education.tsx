import { AnimatedSection } from "./animated-section"
import { education } from "@/data"

export function Education() {
  return (
    <AnimatedSection id="education">
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
    </AnimatedSection>
  )
}
