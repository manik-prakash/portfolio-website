import type { Metadata, Viewport } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
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
        className={`${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
