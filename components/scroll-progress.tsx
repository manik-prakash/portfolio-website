"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const calc = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    calc()
    window.addEventListener("scroll", calc, { passive: true })
    return () => window.removeEventListener("scroll", calc)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-60 h-0.5 bg-transparent">
      <div
        className="h-full bg-accent transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
