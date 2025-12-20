"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    company: "Somaiya Machine Learning Association SMLRA",
    role: "Tech Head | fulltime",
    period: "july 2025 - present",
    description: "Led full development and deployment of the council website, managing technical infrastructure and cloud hosting.Built React.js forms with Firebase Authentication for streamlined student registration and secure data handling.Implemented a database management system for 200+ student records across events and activities.Delivered a technical blockchain session as part of “The TFM 2.0” workshop covering AI, blockchain, and quantitative finance.",
  },
  {
    company: "Crowdsource by Google india",
    role: "Crowdsource Learning Community Influencer",
    period: "August 2025 - October 2025",
    description: "Conducted student-led Google Crowdsource seminars to help students understand the importance of crowdsourcing in the inclusive training of AI models.Educated participants on the need for diverse and representative data in machine learning datasets to improve fairness and Bias.Contributed 50+ meaningful submissions to the Crowdsource program in the STEM domain, aiding in the development of more homogeneous and diverse training data for Google’s upcoming AI models.Engaged with a passionate community of learners, encouraging collaboration and awareness around real-world data annotation challenges.",
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
  }
]

export function Experience() {
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
      id="experience"
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
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
    </section>
  )
}
