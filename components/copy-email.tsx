"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="text-accent hover:underline inline-flex items-center gap-1 cursor-pointer"
      aria-label="Copy email address"
    >
      {email}
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3 opacity-50" />}
    </button>
  )
}
