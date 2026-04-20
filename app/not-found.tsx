import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <p className="text-accent text-sm tracking-widest">404</p>
        <h1 className="text-4xl sm:text-5xl font-bold">page not found</h1>
        <p className="text-muted-foreground max-w-sm mx-auto">
          This URL doesn&apos;t exist. Might have been moved or mistyped.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/50 rounded-full text-accent transition-all duration-200 hover:scale-105"
        >
          ← back home
        </Link>
      </div>
    </main>
  )
}
