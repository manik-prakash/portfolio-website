"use client"

import { useEffect } from "react"

export function ConsoleEasterEgg() {
  useEffect(() => {
    console.log(
      "%c manik-prakash.tech ",
      "background:#0a0a0a;color:#65a3d5;font-family:monospace;font-size:14px;padding:4px 8px;border:1px solid #65a3d5;"
    )
    console.log(
      "%cLooking at the source? Nice — that's usually a good sign.\nLet's talk: manikprakash74@gmail.com\nPS: press '/' anywhere on the page for a hidden terminal.",
      "color:#8b8b8b;font-family:monospace;font-size:12px;"
    )
  }, [])

  return null
}
