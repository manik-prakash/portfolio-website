"use client"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Footer } from "@/components/footer"
import { GithubGraph } from "@/components/github-graph"
import { ScrollProgress } from "@/components/scroll-progress"
import { TerminalOverlay } from "@/components/terminal-overlay"
import { ConsoleEasterEgg } from "@/components/console-easter-egg"

export default function Portfolio() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen">
      <ScrollProgress />
      <TerminalOverlay />
      <ConsoleEasterEgg />
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <GithubGraph />
      <Footer />
    </main>
  )
}
