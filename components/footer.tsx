import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { CopyEmail } from "./copy-email"
import { socialLinks, email } from "@/data"

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          <h3 className="text-xl sm:text-2xl font-semibold">say hello</h3>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Building something interesting?{" "}
            <CopyEmail email={email} />
          </p>

          <div className="flex gap-6 items-center justify-center">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.name]
              if (!Icon) return null
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
          </div>
          <div className="pt-6 text-sm text-muted-foreground">
            <p>
              Made by Manik <span className="font-mono text-xs">· press / for terminal</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
