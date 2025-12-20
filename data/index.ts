import { Trophy, Star, LucideIcon } from "lucide-react"

export interface Education {
    institution: string
    degree: string
    period: string
    description: string
}

export interface Experience {
    company: string
    role: string
    period: string
    description: string
}

export interface Project {
    title: string
    description: string
    tech: string[]
    github: string
    demo: string
    fullDescription: string
    whyBuilt: string
    highlights: string[]
}

export interface Achievement {
    icon: LucideIcon
    title: string
    description: string
    year: string
}

export interface SocialLink {
    name: string
    url: string
    ariaLabel: string
}

export const personalInfo = {
    name: "Manik Prakash",
    location: "Mumbai, IN",
    tagline: "Computer Engineering student who learns backend and cloud DevOps by breaking things and building them better :)",
}


export const socialLinks: SocialLink[] = [
    { name: "github", url: "https://github.com/manik-prakash", ariaLabel: "GitHub" },
    { name: "linkedin", url: "https://www.linkedin.com/in/manik-prakash/", ariaLabel: "LinkedIn" },
    { name: "twitter", url: "https://x.com/manikprakash74", ariaLabel: "Twitter" },
    { name: "email", url: "mailto:manikprakash74@gmail.com", ariaLabel: "Email" },
]

export const education: Education[] = [
    {
        institution: "K. J. Somaiya School of Engineering, Mumbai",
        degree: "B.Tech in Computer Engineering (Honours in CyberSecurity)",
        period: "2023 - 2027",
        description: "Relevant coursework: Data Structures, Algorithms, Database Management, Operating Systems, Computer Networks, Machine Learning. Active member of technical council(SMLRA) and hackathon participant.",
    },
    {
        institution: "D.A.V. Public School, Ranchi",
        degree: "PCM (Science Stream)",
        period: "2021 - 2023",
        description: "Completed higher secondary education with Physics, Chemistry, and Mathematics. Scored 91% in 12th board examinations and 94% in 10th board examinations.",
    },
]

export const experiences: Experience[] = [
    {
        company: "Somaiya Machine Learning Association SMLRA",
        role: "Tech Head | fulltime",
        period: "july 2025 - present",
        description: "Led full development and deployment of the council website, managing technical infrastructure and cloud hosting. Built React.js forms with Firebase Authentication for streamlined student registration and secure data handling. Implemented a database management system for 200+ student records across events and activities. Delivered a technical blockchain session as part of 'The TFM 2.0' workshop covering AI, blockchain, and quantitative finance.",
    },
    {
        company: "Crowdsource by Google india",
        role: "Crowdsource Learning Community Influencer",
        period: "August 2025 - October 2025",
        description: "Conducted student-led Google Crowdsource seminars to help students understand the importance of crowdsourcing in the inclusive training of AI models.Educated participants on the need for diverse and representative data in machine learning datasets to improve fairness and Bias.Contributed 50+ meaningful submissions to the Crowdsource program in the STEM domain, aiding in the development of more homogeneous and diverse training data for Google's upcoming AI models.Engaged with a passionate community of learners, encouraging collaboration and awareness around real-world data annotation challenges.",
    },
    {
        company: "SmowCode",
        role: "FullStack Developer | intern",
        period: "june 2025 - july 2025",
        description: "Developed a native desktop application in Python for microcontroller flashing, achieving ~30% faster performance. Implemented serial monitor debugging tools tailored for embedded systems workflows. Created thorough test suites and documentation ensuring cross-platform support on Windows, macOS, and Linux. Recognized for exceptional project management, clean code organization, and effective collaborative development.",
    },
    {
        company: "SwDC KJSSE",
        role: "Backend Developer | intern",
        period: "may 2025 - july 2025",
        description: "Architected and developed a RESTful backend API for an institutional feedback system with Node.js and Express.js.Designed database schemas in MongoDB supporting users, authentication, and feedback processing.Built an admin dashboard featuring full CRUD operations, data visualization, and real-time analytics.Implemented secure role-based access control using JWT authentication and bcryptjs encryption.",
    },
]

export const projects: Project[] = [
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
            "This project is a minimal authentication API built while learning serverless architecture and Cloudflare Workers for the first time. It provides user signup, login, and protected routes using JWT-based authentication. The API runs entirely on Cloudflare's edge using Workers, with data stored in Cloudflare D1 (a serverless SQLite database). Hono is used as a fast and lightweight framework, making the API simple, efficient, and easy to deploy globally.",
        whyBuilt:
            "I built this project while learning about serverless computing and Cloudflare Workers. It was my first hands-on project to understand how APIs can run without traditional servers, how edge functions work, and how authentication can be implemented in a stateless, cloud-native way.",
        highlights: [
            "Built using Cloudflare Workers (serverless & edge-based)",
            "JWT-based authentication with protected routes",
            "Uses Cloudflare D1 for serverless database storage",
            "Lightweight Hono framework for fast API handling",
            "No traditional backend server or infrastructure",
            "Deployed globally using Cloudflare's edge network",
            "First hands-on project exploring serverless architecture",
        ]
    }
]


export const achievements: Achievement[] = [
    {
        icon: Trophy,
        title: "Datathon Hackathon Winner (Case-study)",
        description: "Winner of national-level case study competition among 20+ participating teams",
        year: "2025",
    },
    {
        icon: Trophy,
        title: "Gajshield KJSSE Hack8 Hackthon",
        description:
            "Selected as top 5 finalist team in college hackathon competition for cybersecurity project",
        year: "2025",
    },
    {
        icon: Star,
        title: "Mckinsey Forward 25",
        description: "Completed McKinsey.org Forward — a 10-week global online program focused on developing practical workplace and problem-solving skills.",
        year: "2025"
    },
]
