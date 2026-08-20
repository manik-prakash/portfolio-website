import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "status",
  robots: { index: false, follow: false },
}

const services = [
  { name: "Docker Daemon", uptime: "99.99%" },
  { name: "Jenkins Pipeline Queue", uptime: "99.97%" },
  { name: "Kubernetes Cluster", uptime: "100.00%" },
  { name: "Portfolio API", uptime: "99.95%" },
  { name: "Coffee Levels", uptime: "62.00%" },
]

const bars = Array.from({ length: 45 })

export default function StatusPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-sm text-accent mb-3">&gt; status</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">manik-prakash.tech</h1>
        <p className="text-muted-foreground mb-10">system status — all services operational</p>

        <div className="border border-border rounded-sm p-6 mb-8">
          <p className="font-mono text-xs text-muted-foreground mb-1">overall uptime (90d)</p>
          <p className="text-4xl sm:text-5xl font-bold text-accent">99.98%</p>
        </div>

        <div className="space-y-3 mb-10">
          {services.map((service) => (
            <div key={service.name} className="border border-border rounded-sm p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="font-medium">{service.name}</span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{service.uptime}</span>
              </div>
              <div className="flex gap-0.5">
                {bars.map((_, i) => (
                  <span key={i} className="h-4 flex-1 rounded-sm bg-accent/60" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm bg-accent/10 hover:bg-accent/20 border border-accent/50 rounded-sm text-accent transition-all duration-200"
        >
          ← back home
        </Link>
      </div>
    </main>
  )
}
