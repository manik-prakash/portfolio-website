"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, ExternalLink, Github, X } from "lucide-react"
import { projects as allProjects } from "@/data"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof allProjects)[0] | null>(null)
  const ref = useRef<HTMLElement>(null)

  const sortedProjects = [...allProjects].sort((a, b) => {
    const aLive = a.demo && a.demo !== "#" ? 1 : 0
    const bLive = b.demo && b.demo !== "#" ? 1 : 0
    return bLive - aLive
  })
  const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, 4)

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

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedProject])

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="max-w-4xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {displayedProjects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(project)}
                className="group bg-secondary/20 hover:bg-secondary/40 border border-border rounded-lg p-6 transition-all duration-300 hover:border-accent/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/5 text-left w-full cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        aria-label="View source code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-accent transition-colors duration-200">
                  <span>view details</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </button>
            ))}
          </div>

          {!showAll && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/50 rounded-full text-accent transition-all duration-200 hover:scale-105"
              >
                show all projects ({allProjects.length})
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-secondary/40 backdrop-blur-sm border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-secondary/80 backdrop-blur-md border-b border-border p-6 flex items-start justify-between">
              <div className="flex-1 pr-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-accent mb-2">overview</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-accent mb-2">problem & context</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.whyBuilt}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-accent mb-3">key highlights</h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent mt-1.5">•</span>
                      <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-4">
                {selectedProject.github && selectedProject.github !== "#" && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/50 rounded-full text-accent transition-all duration-200 hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                    <span>view code</span>
                  </a>
                )}
                {selectedProject.demo && selectedProject.demo !== "#" && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/50 rounded-full text-accent transition-all duration-200 hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>live demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
