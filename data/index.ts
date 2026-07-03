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
    description: string[]
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
        period: "2023 - 2027 (Expected)",
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
        company: "Arcon",
        role: "Summer Intern",
        period: "June 2026 - Present",
        description: [
            "Optimizing Dockerfiles for backend services, reducing image size and improving build efficiency",
            "Refactoring and optimizing Jenkins CI pipelines to streamline build and deployment workflows",
            "Leading migration of microservices from .NET 8 to .NET 10 across services running on Kubernetes",
            "Optimizing frontend Dockerfiles to improve build times and container performance",
        ],
    },
    {
        company: "Boomlex Technologies Private Limited",
        role: "Full Stack Engineer | Intern",
        period: "Feb 2026 - May 2026",
        description: [
            "Building and shipping production features for a live SaaS product using React, Node.js, and TypeScript — handling everything from API design to frontend state management.",
            "Owning end-to-end feature development in a fast-paced startup environment, collaborating directly with the engineering team and product stakeholders.",
            "Applying secure coding practices to protect user data and API endpoints, informed by my CyberSecurity Honours coursework.",
        ],
    },
    {
        company: "Somaiya Machine Learning Association SMLRA",
        role: "Tech Head",
        period: "July 2025 - Present",
        description: [
            "Led full development and deployment of the council website, managing technical infrastructure and cloud hosting.",
            "Built React.js forms with Firebase Authentication for streamlined student registration and secure data handling.",
            "Implemented a database management system for 200+ student records across events and activities.",
            "Delivered a technical blockchain session as part of 'The TFM 2.0' workshop covering AI, blockchain, and quantitative finance.",
        ],
    },
    {
        company: "Crowdsource by Google India",
        role: "Crowdsource Learning Community Influencer",
        period: "August 2025 - October 2025",
        description: [
            "Conducted student-led seminars on the role of crowdsourcing in training inclusive, unbiased AI models.",
            "Educated participants on the need for diverse and representative data in machine learning datasets.",
            "Contributed 50+ meaningful submissions to the Crowdsource program in the STEM domain.",
            "Engaged with a community of learners around real-world data annotation challenges.",
        ],
    },
    {
        company: "SmowCode",
        role: "FullStack Developer | Intern",
        period: "June 2025 - July 2025",
        description: [
            "Developed a native desktop application in Python for microcontroller flashing, achieving ~30% faster performance.",
            "Implemented serial monitor debugging tools tailored for embedded systems workflows.",
            "Created thorough test suites and documentation ensuring cross-platform support on Windows, macOS, and Linux.",
            "Recognized for exceptional project management, clean code organization, and effective collaborative development.",
        ],
    },
    {
        company: "SwDC KJSSE",
        role: "Backend Developer | Intern",
        period: "May 2025 - July 2025",
        description: [
            "Architected and developed a RESTful backend API for an institutional feedback system with Node.js and Express.js.",
            "Designed database schemas in MongoDB supporting users, authentication, and feedback processing.",
            "Built an admin dashboard featuring full CRUD operations, data visualization, and real-time analytics.",
            "Implemented secure role-based access control using JWT authentication and bcryptjs encryption.",
        ],
    },
]

export const projects: Project[] = [
    {
        title: "PromptForm",
        description:
            "An AI-powered form builder where users describe a form in natural language and the backend generates a validated, renderable JSON schema via LLM inference.",
        tech: [
            "Next.js",
            "TypeScript",
            "Express.js",
            "PostgreSQL",
            "Prisma",
            "OpenRouter",
            "Zod",
            "React Hook Form",
            "Tailwind CSS",
        ],
        github: "https://github.com/manik-prakash/PromptForm",
        demo: "https://prompt-form-brown.vercel.app",
        fullDescription:
            "PromptForm is a full-stack AI form builder where authenticated users describe a form in plain language and receive a working, shareable form in seconds. The backend calls OpenRouter to convert the prompt into a structured JSON schema, validates it with Zod, and persists it via Prisma to PostgreSQL. The frontend dynamically renders that schema into a live form using React Hook Form. Form owners can share public links, review submissions, and export schema or submission data. The JSON schema is the central contract — it connects LLM output, backend storage, frontend rendering, and submission validation into a single coherent pipeline.",
        whyBuilt:
            "Existing form builders are rigid — you drag components, configure fields one by one, and fight their UI. The real problem is that form structure is just data, and language models are good at generating structured data from descriptions. PromptForm treats the LLM as a schema compiler: natural language in, validated JSON out, working form rendered immediately.",
        highlights: [
            "Natural language → validated JSON schema via OpenRouter LLM",
            "Zod schema validation on both generation output and form submissions",
            "Prisma + PostgreSQL for form and submission persistence",
            "Public form sharing with unique links",
            "Dashboard with submission management and schema export",
            "JWT authentication with bcryptjs password hashing",
            "Monorepo structure with shared backend and frontend",
        ],
    },
    {
        title: "BetterUptime",
        description:
            "A full-stack uptime monitoring platform using Redis Streams for job distribution, background worker services, and a real-time dashboard for website health tracking.",
        tech: [
            "Next.js",
            "TypeScript",
            "Express.js",
            "PostgreSQL",
            "Prisma",
            "Redis Streams",
            "Zod",
            "Turborepo",
        ],
        github: "https://github.com/manik-prakash/UpTime",
        demo: "#",
        fullDescription:
            "BetterUptime is an uptime monitoring platform built around a distributed job pipeline. A pusher service writes monitored website URLs into a Redis Stream on a configurable interval. Consumer groups of worker services read from the stream, perform HTTP checks, and write results — status, response time, region, timestamp — back to PostgreSQL via Prisma. The Express backend exposes a REST API for monitor management and dashboard aggregation. The Next.js frontend renders uptime history, response time trends, and health summaries. The Turborepo monorepo has clean package separation: db, redis, common schemas, backend, worker, pusher, and web.",
        whyBuilt:
            "Most uptime monitoring tutorials use cron jobs on a single process — which breaks the moment you want multiple workers or regional checks. The real architecture problem is job distribution: how do you fan out checks to multiple workers, prevent duplicate processing, and handle worker failures without losing jobs? Redis Streams with consumer groups is the correct answer, and this project was built to implement that pattern end to end.",
        highlights: [
            "Redis Streams with consumer groups for distributed job processing",
            "Separate pusher and worker services for scalable check execution",
            "PostgreSQL + Prisma for uptime history and response time tracking",
            "Turborepo monorepo with shared db, redis, and validation packages",
            "Zod input validation across all API endpoints",
            "Dashboard aggregation: average uptime, response time, monitors needing attention",
            "Region-based monitoring support",
        ],
    },
    {
        title: "DevScope",
        description:
            "An AI coding agent analytics platform with a Go CLI that wraps Claude Code and Codex, captures privacy-safe session telemetry, and scores developer-AI collaboration with LLM evaluation.",
        tech: [
            "Go",
            "TypeScript",
            "Express.js",
            "PostgreSQL",
            "Prisma",
            "OpenRouter",
            "Pino",
            "JWT",
            "Turborepo",
        ],
        github: "https://github.com/manik-prakash/devScope",
        demo: "#",
        fullDescription:
            "DevScope is a platform for engineering teams to understand how developers use AI coding agents. The Go CLI wraps Claude Code or Codex — it snapshots the filesystem before and after a session, parses agent logs via adapters, normalizes and redacts sensitive content, signs the payload with an API key, and ships it to the backend. The Express backend verifies the signature, stores the sanitized session in PostgreSQL, and asynchronously evaluates it via OpenRouter. Role-based access control separates manager and developer views. Access and refresh token rotation, Pino structured logging, and Zod validation are applied throughout. The privacy model is strict: no raw code, file names, or prompt text leaves the developer machine.",
        whyBuilt:
            "AI coding agents are becoming default workflow tools, but engineering teams have no visibility into how they're being used — which agents, what tasks, how effectively. DevScope addresses that gap with a privacy-first design: behavioral metadata and aggregate stats only, never source content. The Go CLI was chosen specifically because it ships as a single binary with no runtime dependency, which is the right distribution model for a developer tool.",
        highlights: [
            "Go CLI wrapping Claude Code and Codex with log parsing adapters",
            "Privacy-first pipeline: normalize → redact → sign → ship",
            "HMAC payload signing with API key for tamper detection",
            "RBAC with Manager and Developer roles across org/project hierarchy",
            "Access + refresh token rotation with revocation",
            "Pino structured logging for observability",
            "Async AI evaluation via OpenRouter with PENDING/SCORED/FAILED states",
            "Offline queue — sessions submitted when connectivity is restored",
        ],
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
            "Existing note tools either lock data in proprietary formats or lack public sharing without friction. ThoughtCache was built for personal use — a self-hosted knowledge base where everything is owned, exportable, and shareable via clean slugs. Running it on Kubernetes came from a real need: surviving traffic spikes when shared links go public.",
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
        title: "CareerWiki",
        description:
            "An AI-powered career education platform with interactive career simulations, Gemini-powered coaching, personalized onboarding, and progress tracking for students.",
        tech: [
            "Next.js",
            "TypeScript",
            "MongoDB",
            "Mongoose",
            "Google Gemini",
            "JWT",
            "Tailwind CSS",
            "Framer Motion",
            "shadcn/ui",
        ],
        github: "https://github.com/manik-prakash/csi-gemini-hackday",
        demo: "https://careerwiki.vercel.app",
        fullDescription:
            "CareerWiki is an AI-powered career education platform built for the CSI Gemini Hackdays. Users complete a personalized onboarding flow, then explore careers through interactive roleplay simulations, a Gemini-powered career counselor chatbot, curated resources, and entrance exam guidance. Each simulation runs through branching scenario stages — Gemini streams realistic narration, the user selects decisions, and the system tracks choices, reveals relevant skills, and generates a final performance evaluation. A dashboard surfaces activity streaks, AI-generated career recommendations scored against the user's profile, and exploration history.",
        whyBuilt:
            "Students are asked to choose careers without understanding what professionals actually do day to day. Static career guides don't solve this — they describe roles, not experience them. CareerWiki uses branching AI simulations to put students inside real workplace scenarios: an ER triage decision, a code review, a client negotiation. The goal is career discovery through doing, not reading.",
        highlights: [
            "Gemini streaming for scenario narration and real-time career counseling",
            "Branching scenario engine with stage progression and skill tracking",
            "AI-generated career recommendations with match scores and reasoning",
            "Multi-step personalized onboarding saved to MongoDB",
            "Activity streak tracking and dashboard analytics",
            "HTTP-only cookie JWT auth with bcrypt password hashing",
            "Hackathon project — CSI Gemini Hackdays",
        ],
    },
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
