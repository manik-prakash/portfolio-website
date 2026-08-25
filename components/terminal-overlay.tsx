"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { socialLinks, resumeUrl } from "@/data"
import { navItems } from "@/components/navbar"
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock"

const ABOUT_TEXT =
  "Full-stack engineer from Mumbai, building AI-powered products, scalable APIs, and dev infrastructure. Ex - Arcon."

type Line = { text?: string; className?: string; parts?: { text: string; className?: string }[] }

const HELP_LINES: Line[] = [
  { text: "welcome to manik-prakash's terminal", className: "text-accent" },
  { text: "available commands:" },
  ...[
    ["help", "show this list"],
    ["whoami", "who is this"],
    ["ls", "list sections"],
    ["cd <section>", "jump to a section"],
    ["cat resume.txt", "view resume"],
    ["cat about.txt", "read about me"],
    ["open <target>", "github · linkedin · twitter"],
    ["theme <dark|light>", "switch theme"],
    ["sudo hire-me", "you know you want to"],
    ["clear", "wipe the screen"],
    ["exit", "close terminal"],
  ].map(([cmd, desc]) => ({
    parts: [
      { text: `  ${cmd.padEnd(20)}`, className: "text-accent" },
      { text: desc },
    ],
  })),
]

export function TerminalOverlay() {
  const [isOpen, setIsOpen] = useState(false)
  const [history, setHistory] = useState<Line[]>([
    { text: "type 'help' to see available commands." },
  ])
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { setTheme } = useTheme()

  useBodyScrollLock(isOpen)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      const isTyping = target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable

      if (!isOpen && e.key === "/" && !isTyping) {
        e.preventDefault()
        setIsOpen(true)
      } else if (isOpen && e.key === "Escape") {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [history])

  const print = (lines: Line[]) => setHistory((h) => [...h, ...lines])

  const runCommand = (raw: string) => {
    const trimmed = raw.trim()
    if (!trimmed) return
    print([{ text: `guest@manik-prakash:~$ ${trimmed}`, className: "text-foreground" }])

    const [cmd, ...args] = trimmed.split(/\s+/)
    const arg = args.join(" ").toLowerCase()

    switch (cmd.toLowerCase()) {
      case "help":
        print(HELP_LINES)
        break

      case "whoami":
        print([{ text: "manik-prakash — software engineer" }])
        break

      case "ls":
        print([{ text: navItems.map((n) => n.href.slice(1)).join("  ") }])
        break

      case "cd": {
        const section = navItems.find((n) => n.href.slice(1) === arg)
        if (!section) {
          print([{ text: `cd: no such section: ${arg || "(none given)"}`, className: "text-destructive" }])
          break
        }
        print([{ text: `moving to ${section.href.slice(1)}...` }])
        setTimeout(() => {
          document.querySelector(section.href)?.scrollIntoView({ behavior: "smooth" })
          setIsOpen(false)
        }, 300)
        break
      }

      case "cat":
        if (arg === "resume.txt") {
          print([{ text: "opening resume.txt..." }])
          window.open(resumeUrl, "_blank", "noopener,noreferrer")
        } else if (arg === "about.txt") {
          print([{ text: ABOUT_TEXT }])
        } else {
          print([{ text: `cat: ${arg || "(none given)"}: No such file`, className: "text-destructive" }])
        }
        break

      case "open": {
        const link = socialLinks.find((s) => s.name === arg)
        if (!link) {
          print([{ text: `open: unknown target: ${arg || "(none given)"}`, className: "text-destructive" }])
          break
        }
        print([{ text: `opening ${arg}...` }])
        window.open(link.url, "_blank", "noopener,noreferrer")
        break
      }

      case "theme":
        if (arg === "dark" || arg === "light") {
          setTheme(arg)
          print([{ text: `theme set to ${arg}` }])
        } else {
          print([{ text: "usage: theme <dark|light>", className: "text-destructive" }])
        }
        break

      case "sudo":
        if (arg === "hire-me") {
          print([{ text: "permission granted. redirecting to contact...", className: "text-accent" }])
          setTimeout(() => {
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            setIsOpen(false)
          }, 500)
        } else {
          print([{ text: "sudo: nice try.", className: "text-destructive" }])
        }
        break

      case "clear":
        setHistory([])
        break

      case "exit":
        setIsOpen(false)
        break

      default:
        print([{ text: `command not found: ${cmd}. type 'help' for a list.`, className: "text-destructive" }])
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-2xl border border-border rounded-sm bg-background/95 shadow-2xl font-mono text-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b border-border">
          <span className="text-muted-foreground">manik-prakash — terminal</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close terminal"
          >
            esc
          </button>
        </div>

        <div ref={scrollRef} className="max-h-80 overflow-y-auto px-4 py-3 space-y-1.5">
          {history.map((line, i) => (
            <p key={i} className={line.className ?? "text-muted-foreground"}>
              {line.parts
                ? line.parts.map((part, j) => (
                    <span key={j} className={part.className ?? "text-muted-foreground"}>
                      {part.text}
                    </span>
                  ))
                : line.text}
            </p>
          ))}
        </div>

        <form
          className="flex items-center gap-2 px-4 py-3 border-t border-border"
          onSubmit={(e) => {
            e.preventDefault()
            runCommand(input)
            setInput("")
          }}
        >
          <span className="text-accent shrink-0">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-foreground"
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command input"
          />
        </form>
      </div>
    </div>
  )
}
