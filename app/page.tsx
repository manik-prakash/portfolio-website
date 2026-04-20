"use client"
import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Footer } from "@/components/footer"
import { GithubGraph } from "@/components/github-graph"
import Snowfall from 'react-snowfall'

export default function Portfolio() {
  const [snowflakeCount, setSnowflakeCount] = useState(40)

  useEffect(() => {
    setSnowflakeCount(window.innerWidth < 640 ? 15 : 40)
  }, [])

  return (
    <main className="min-h-screen">
      <Snowfall
        snowflakeCount={snowflakeCount}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 50,
          pointerEvents: 'none',
        }}
      />
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
