import dynamic from "next/dynamic"
import { AnimatedSection } from "./animated-section"

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
)

export function GithubGraph() {
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
            colorScheme="dark"
            theme={{ dark: ["#0d0f1a", "#1a2744", "#1e3a6e", "#2563a8", "#60a5fa"] }}
            style={{ width: "100%" }}
            fontSize={12}
            blockSize={13}
            blockMargin={4}
          />
        </div>
        {/* mobile — smaller blocks, last 6 months only */}
        <div className="sm:hidden overflow-x-auto">
          <GitHubCalendar
            username="manik-prakash"
            colorScheme="dark"
            theme={{ dark: ["#0d0f1a", "#1a2744", "#1e3a6e", "#2563a8", "#60a5fa"] }}
            blockSize={10}
            blockMargin={3}
            fontSize={10}
          />
        </div>
      </div>
    </AnimatedSection>
  )
}
