"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Twitter, Check, Copy } from "lucide-react"

export function Footer() {
  const email = "manikprakash74@gmail.com"
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer id="contact" className="border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          <h3 className="text-xl sm:text-2xl font-semibold">say hello</h3>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Building something interesting?{" "}
            <button
              onClick={handleCopy}
              className="text-accent hover:underline inline-flex items-center gap-1 cursor-pointer"
              aria-label="Copy email address"
            >
              {email}
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3 opacity-50" />}
            </button>
          </p>

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
              href="mailto:manikprakash74@gmail.com"
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
