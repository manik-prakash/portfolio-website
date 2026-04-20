import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Manik Prakash — Full Stack Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0f1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ color: "#60a5fa", fontSize: 20, marginBottom: 24, letterSpacing: 4 }}>
          &gt;_
        </div>
        <div style={{ color: "#f1f5f9", fontSize: 64, fontWeight: 700, lineHeight: 1.1, marginBottom: 20 }}>
          Manik Prakash
        </div>
        <div style={{ color: "#94a3b8", fontSize: 28, marginBottom: 48 }}>
          Full Stack Engineer · CyberSecurity · Cloud DevOps
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {["React", "Node.js", "TypeScript", "Kubernetes", "Cloudflare"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(96,165,250,0.1)",
                border: "1px solid rgba(96,165,250,0.3)",
                color: "#60a5fa",
                padding: "8px 18px",
                borderRadius: 999,
                fontSize: 16,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  )
}
