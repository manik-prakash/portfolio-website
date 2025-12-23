import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          <h3 className="text-xl sm:text-2xl font-semibold">say hello</h3>
          <p className="text-muted-foreground">Just an intensive learner here.</p>

          <div className="flex gap-6 items-center justify-center">
            <a
              href="https://github.com/manik-prakash"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/manik-prakash/"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/manikprakash74"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="pt-6 text-sm text-muted-foreground">
            <p>Made by Manik</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
