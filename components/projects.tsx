"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, ExternalLink, Github, X, ArrowRight } from "lucide-react"
import { projects as allProjects } from "@/data"
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof allProjects)[0] | null>(null)
  const ref = useRef<HTMLElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const lastTriggerRef = useRef<HTMLDivElement | null>(null)

  useBodyScrollLock(selectedProject !== null)

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
      dialogRef.current?.focus()
    } else {
      lastTriggerRef.current?.focus()
    }
  }, [selectedProject])

  useEffect(() => {
    if (!selectedProject) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null)
        return
      }
      if (e.key !== "Tab") return

      const dialog = dialogRef.current
      if (!dialog) return
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      } else if (!dialog.contains(document.activeElement)) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedProject])

  const openProject = (project: (typeof allProjects)[0], trigger: HTMLDivElement | null) => {
    lastTriggerRef.current = trigger
    setSelectedProject(project)
  }

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="border-t border-border/40 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
      >
        <div className="max-w-4xl w-full mx-auto">
          <p className="font-mono text-sm text-accent mb-3">&gt; projects</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={`View details for ${project.title}`}
                onClick={(e) => openProject(project, e.currentTarget)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    openProject(project, e.currentTarget)
                  }
                }}
                style={{ transitionDelay: `${index * 80}ms` }}
                className={`group bg-secondary/20 hover:bg-secondary/40 border border-border rounded-sm p-6 transition-all duration-300 hover:border-accent/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/5 text-left w-full cursor-pointer flex flex-col outline-none focus-visible:border-accent ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
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
                    <span key={techIndex} className="text-xs font-mono px-3 py-1 bg-muted rounded-sm text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-1 text-xs text-muted-foreground group-hover:text-accent transition-colors duration-200">
                  <span>view details</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            {!showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 font-mono text-sm bg-accent/10 hover:bg-accent/20 border border-accent/50 rounded-sm text-accent transition-all duration-200"
              >
                show all projects ({allProjects.length})
              </button>
            )}
            <a
              href="https://github.com/manik-prakash"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 font-mono text-sm border border-border hover:border-accent/50 rounded-sm text-muted-foreground hover:text-accent transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              <span>more on github</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            className="bg-secondary/40 backdrop-blur-sm border border-border rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-secondary/80 backdrop-blur-md border-b border-border p-6 flex items-start justify-between">
              <div className="flex-1 pr-4">
                <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="text-xs font-mono px-3 py-1 bg-muted rounded-sm text-muted-foreground">
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
                    className="flex items-center gap-2 px-6 py-3 font-mono text-sm bg-accent/10 hover:bg-accent/20 border border-accent/50 rounded-sm text-accent transition-all duration-200"
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
                    className="flex items-center gap-2 px-6 py-3 font-mono text-sm bg-accent/10 hover:bg-accent/20 border border-accent/50 rounded-sm text-accent transition-all duration-200"
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
