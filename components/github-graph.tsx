"use client"

import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { AnimatedSection } from "./animated-section"

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
)

const darkTheme = { dark: ["#0d0f1a", "#1a2744", "#1e3a6e", "#2563a8", "#60a5fa"] }
const lightTheme = { light: ["#e8ecf4", "#bfcfe8", "#7fa8d4", "#2563a8", "#1a3a6e"] }

export function GithubGraph() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isDark = !mounted || theme === "dark"

  return (
    <AnimatedSection id="github">
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">activity</h2>
        <p className="text-sm text-muted-foreground mb-10">
          github contribution graph — last 12 months
        </p>
        {/* desktop */}
        <div className="hidden sm:block overflow-x-auto">
          <GitHubCalendar
            username="manik-prakash"
            colorScheme={isDark ? "dark" : "light"}
            theme={isDark ? darkTheme : lightTheme}
            style={{ width: "100%" }}
            fontSize={12}
            blockSize={13}
            blockMargin={4}
          />
        </div>
        {/* mobile */}
        <div className="sm:hidden overflow-x-auto">
          <GitHubCalendar
            username="manik-prakash"
            colorScheme={isDark ? "dark" : "light"}
            theme={isDark ? darkTheme : lightTheme}
            blockSize={10}
            blockMargin={3}
            fontSize={10}
          />
        </div>
      </div>
    </AnimatedSection>
  )
}
