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

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
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
