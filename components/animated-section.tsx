"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface AnimatedSectionProps {
    children: ReactNode
    id: string
    className?: string
}

export function AnimatedSection({ children, id, className = "" }: AnimatedSectionProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    return (
        <section
            id={id}
            ref={ref}
            className={`border-t border-border/40 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                } ${className}`}
        >
            {children}
        </section>
    )
}
