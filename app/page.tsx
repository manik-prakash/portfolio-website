import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Footer />
    </main>
  )
}
