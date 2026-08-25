import type { Metadata, Viewport } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const firaCode = Fira_Code({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Manik Prakash | Software Engineer",
    template: "%s | Manik Prakash",
  },
  description: "Software engineer building things that matter. Full-stack developer specializing in React, Node.js, TypeScript, and cloud technologies.",
  keywords: ["Manik Prakash", "Software Engineer", "Full Stack Developer", "React", "Node.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Manik Prakash" }],
  creator: "Manik Prakash",
  metadataBase: new URL("https://manik-prakash.tech"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased`}
      >
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-background focus:border focus:border-accent focus:rounded-sm focus:text-accent"
          >
            skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
