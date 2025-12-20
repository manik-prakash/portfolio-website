"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, X } from "lucide-react"

const allProjects = [
  {
    title: "DoodleChat",
    description:
      "A real-time drawing and chat app where multiple users can join rooms, draw together on a shared canvas, and chat instantly.",
    tech: [
      "Next.js",
      "TypeScript",
      "WebSockets",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Turborepo"
    ],
    github: "https://github.com/manik-prakash/DoodleChat",
    demo: "#",
    fullDescription:
      "DoodleChat is a fun real-time collaboration app where users can create or join rooms and draw together on a shared canvas while chatting at the same time. It supports multiple users in a room, live drawing updates, and instant messaging using WebSockets. The frontend is built with Next.js, while the backend is split into a REST API for authentication and room management and a WebSocket server for real-time events. All drawings and chat messages are saved in a PostgreSQL database so users can see existing content when they rejoin a room.",
    whyBuilt:
      "I built this project to learn how real-time applications work under the hood. I wanted hands-on experience with WebSockets, syncing data between multiple users, and handling edge cases like users joining, leaving, or reconnecting to rooms.",
    highlights: [
      "Real-time drawing synced across all users",
      "Live chat inside drawing rooms",
      "Canvas state and chat history stored in database",
      "Monorepo setup using Turborepo",
      "User join/leave notifications in real time",
      "Clear canvas option for room owners",
    ]
  },
  {
    title: "ThoughtCache",
    description:
      "A personal knowledge management app (Second Brain) to save, organize, and share notes, links, and ideas in one place.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tailwind CSS",
      "Docker",
      "Kubernetes"
    ],
    github: "https://github.com/manik-prakash/ThoughtCache",
    demo: "https://thought-cache.vercel.app",
    fullDescription:
      "ThoughtCache is a full-stack application that helps users capture and manage their thoughts, notes, and ideas in a structured way. Users can create items, tag them, star important notes, and even share selected items publicly using unique links. The backend is built with Express and MongoDB, while the frontend uses React and TailwindCSS for a clean and responsive UI. The app is fully containerized with Docker and deployed using Kubernetes, making it a great mix of full-stack and DevOps learning.",
    whyBuilt:
      "I built ThoughtCache to create my own version of a Second Brain and to get hands-on experience with building a complete full-stack application. This project helped me understand backend architecture, authentication, frontend state management, and real-world deployment using Docker and Kubernetes.",
    highlights: [
      "Create, edit, delete, and star notes and ideas",
      "Tag-based organization",
      "Public sharing of notes using unique slugs",
      "Responsive UI built with React and TailwindCSS",
      "Dockerized backend and frontend",
      "Kubernetes deployment with ingress and secrets",
      "Export all user data in JSON format",
    ]
  },
  {
    title: "GitStory",
    description:
      "A clean and interactive web app that visualizes a GitHub user's repositories as a timeline with stats and yearly breakdowns.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API"
    ],
    github: "https://github.com/manik-prakash/GitStory",
    demo: "https://gitstory-002.vercel.app/",
    fullDescription:
      "GitStory is a GitHub timeline visualizer where users can enter a GitHub username and see all their public repositories displayed in a chronological timeline. The app shows useful stats like total repositories, active years, and average repos per year, along with a year-wise bar chart. It is built using Next.js App Router with a simple API route that fetches data from the GitHub API. The UI supports light, dark, and system themes and focuses on clean visuals and smooth interactions.",
    whyBuilt:
      "I built GitStory to practice working with public APIs and to improve my frontend skills with Next.js and modern UI patterns. I also wanted to learn how to design data-heavy UIs and present information in a clean and visual way.",
    highlights: [
      "Visual timeline of GitHub repositories",
      "Year-wise stats and bar chart breakdown",
      "Light, dark, and system theme support",
      "Input validation and error handling",
      "API route to safely fetch GitHub data",
      "Clean and responsive UI with Tailwind CSS",
    ]
  },
  {
    title: "TaskFlow",
    description:
      "A full-stack Todo application containerized with Docker and deployed on a multi-node Kubernetes cluster with Nginx reverse proxy.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Nginx"
    ],
    github: "https://github.com/manik-prakash/TaskFlow",
    demo: "#",
    fullDescription:
      "TaskFlow is a full-stack Todo application built to learn real-world containerization and Kubernetes deployment. The app consists of a Next.js frontend, an Express.js backend, and a MongoDB database, each running in separate Docker containers. These services are deployed on a 3-node Kubernetes cluster with proper services, deployments, and an Nginx reverse proxy to route traffic. The backend handles authentication and task management using JWT, while the frontend provides a clean dashboard for managing todos. The project focuses heavily on infrastructure, service communication, and production-like deployment practices.",
    whyBuilt:
      "I built TaskFlow to get hands-on experience with Docker and Kubernetes beyond just theory. My main goal was to understand how multiple services communicate inside a cluster, how reverse proxies work, and how real applications are deployed and managed in a cloud-native environment.",
    highlights: [
      "Dockerized frontend, backend, and database",
      "Deployed on a 3-node Kubernetes (KIND) cluster",
      "Nginx reverse proxy for routing frontend and API traffic",
      "Separate Kubernetes deployments and services for each component",
      "JWT-based authentication with protected routes",
      "MongoDB service running inside the cluster",
      "Defined resource requests and limits for pods",
      "Non-root containers for better security",
    ]

  },
  {
    title: "SafeShare",
    description:
      "A secure file upload and sharing platform built as a cybersecurity mini-project, focusing on encryption, access control, and backend security.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Helmet",
    ],
    github: "https://github.com/manik-prakash/SafeShare",
    demo: "#",
    fullDescription:
      "SafeShare is a secure file management and sharing platform built as a mini-project for my Cybersecurity Honours lab. Users can upload files that are encrypted before being stored on the server and share them with other users using controlled permissions. The backend is built with Express and MongoDB and focuses on practical security concepts like AES-256 encryption, JWT-based authentication, role-based access control, and rate limiting. The frontend, built with Next.js, provides a simple dashboard for uploading, sharing, and managing files.",
    whyBuilt:
      "I built SafeShare as a hands-on mini-project for my Cybersecurity Honours lab to apply theoretical security concepts in a real application. The project helped me understand how encryption, authentication, access control, and secure backend practices are implemented in production-like systems.",
    highlights: [
      "AES-256 encryption for files stored on the server",
      "JWT-based authentication with role-based access control (RBAC)",
      "Rate limiting and security headers using Helmet",
      "User and admin roles with permission-based access",
      "Secure file sharing ",
      "Server-side logging for admin monitoring",
      "Clean and responsive Next.js frontend with dark mode",
    ]
  },
  {
    title: "Chatty",
    description:
      "A real-time chat application built as a Django coursework mini-project using WebSockets for live messaging.",
    tech: [
      "Django",
      "Django Channels",
      "Python",
      "React",
      "Vite",
      "WebSockets",
      "SQLite",
      "Tailwind CSS"
    ],
    github: "https://github.com/manik-prakash/Chatty",
    demo: "#",
    fullDescription:
      "Chatty is a full-stack real-time chat application developed as a mini-project for my Django coursework in college. It allows users to register, log in, create chat rooms, and exchange messages in real time using WebSockets powered by Django Channels. The backend uses Django and Django REST Framework for authentication, room management, and message persistence, while the frontend is built with React and Tailwind CSS for a clean and responsive UI. Messages are stored in the database so users can view chat history when they rejoin a room.",
    whyBuilt:
      "I built Chatty as part of my Django coursework to understand how real-time applications work with Django Channels. The goal was to learn WebSocket integration, session-based authentication, and how HTTP APIs and WebSockets can work together in a single application.",
    highlights: [
      "Real-time messaging using Django Channels and WebSockets",
      "Session-based authentication with CSRF protection",
      "Create, join, and manage chat rooms",
      "Persistent chat history stored in the database",
      "Clean React frontend with Tailwind CSS",
      "Clear separation between REST APIs and WebSocket logic",
      "Built as a hands-on Django coursework mini-project",
    ]
  },
  {
    title: "Serverless JWT Auth API",
    description:
      "A lightweight authentication API built as my first serverless project using Cloudflare Workers and Hono.",
    tech: [
      "Cloudflare Workers",
      "Hono",
      "TypeScript",
      "JWT",
      "Cloudflare D1",
      "Wrangler"
    ],
    github: "https://github.com/manik-prakash/auth-jwt-cloudflare-workers",
    demo: "#",
    fullDescription:
      "This project is a minimal authentication API built while learning serverless architecture and Cloudflare Workers for the first time. It provides user signup, login, and protected routes using JWT-based authentication. The API runs entirely on Cloudflare’s edge using Workers, with data stored in Cloudflare D1 (a serverless SQLite database). Hono is used as a fast and lightweight framework, making the API simple, efficient, and easy to deploy globally.",
    whyBuilt:
      "I built this project while learning about serverless computing and Cloudflare Workers. It was my first hands-on project to understand how APIs can run without traditional servers, how edge functions work, and how authentication can be implemented in a stateless, cloud-native way.",
    highlights: [
      "Built using Cloudflare Workers (serverless & edge-based)",
      "JWT-based authentication with protected routes",
      "Uses Cloudflare D1 for serverless database storage",
      "Lightweight Hono framework for fast API handling",
      "No traditional backend server or infrastructure",
      "Deployed globally using Cloudflare’s edge network",
      "First hands-on project exploring serverless architecture",
    ]
  }
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof allProjects)[0] | null>(null)
  const ref = useRef<HTMLElement>(null)

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 4)

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
                className="group bg-secondary/20 hover:bg-secondary/40 border border-border rounded-lg p-6 transition-all duration-300 hover:border-accent/50 text-left w-full"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
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
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          {!showAll && allProjects.length > 4 && (
            <div className="flex justify-center">
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
                <h4 className="text-lg font-semibold text-accent mb-2">why i built this</h4>
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
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/50 rounded-full text-accent transition-all duration-200 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>view code</span>
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/50 rounded-full text-accent transition-all duration-200 hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>live demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
