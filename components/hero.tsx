import { Github, Linkedin, Mail, Twitter, FileText } from "lucide-react"
import { socialLinks } from "@/data"

export function Hero() {
  const resumeLink = "https://drive.google.com/file/d/1kme59R4cig7EPyTtn6dYYLW1yi8V170V/view"

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl w-full mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
            hi, i am <span className="text-accent">Manik Prakash</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8">
            from Mumbai, India
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Computer Engineering student who learns <span className="text-accent">Full-Stack</span> and <span className="text-accent">cloud DevOps</span> by breaking things and building them better :)
          </p>

          <div className="flex gap-4 items-center flex-wrap">
            {socialLinks.map((link) => {
              const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
                github: Github,
                linkedin: Linkedin,
                twitter: Twitter,
                email: Mail,
              }
              const Icon = iconMap[link.name]
              return (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label={link.ariaLabel}
                >
                  <Icon className="w-6 h-6" />
                </a>
              )
            })}
            <a
              href={resumeLink}
              className="resume-btn-3d ml-2"
              aria-label="View Resume"
            >
              <span>resume</span>
              <span>resume</span>
              <span>resume</span>
              <span>resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
