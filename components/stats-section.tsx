"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Award, Briefcase, Code, Trophy } from "lucide-react"
import { useInView } from "framer-motion"

interface StatItemProps {
    icon: React.ReactNode
    value: number
    label: string
    delay?: number
}

function StatItem({ icon, value, label, delay = 0 }: StatItemProps) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (!isInView) return

        let start = 0
        const duration = 2000 // ms
        const step = 30 // ms

        // Delay the start of the animation
        const timeoutId = setTimeout(() => {
            const timer = setInterval(() => {
                start += step
                const progress = Math.min(start / duration, 1)
                setCount(Math.floor(progress * value))

                if (progress === 1) {
                    clearInterval(timer)
                }
            }, step)

            return () => clearInterval(timer)
        }, delay)

        return () => clearTimeout(timeoutId)
    }, [value, isInView, delay])

    return (
        <div
            ref={ref}
            className="flex flex-col items-center p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
        >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-4">
                {icon}
            </div>
            <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">{count}</h3>
            <p className="text-gray-600 dark:text-gray-400">{label}</p>
        </div>
    )
}

export default function StatsSection() {
    const stats = [
        { icon: <Briefcase size={28} />, value: 8, label: "Projects Completed" },
        { icon: <Award size={28} />, value: 5, label: "Certifications" },
        { icon: <Code size={28} />, value: 9, label: "Technologies" },
    ]

    return (
        <section className="py-16 relative">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <StatItem key={index} icon={stat.icon} value={stat.value} label={stat.label} delay={index * 200} />
                    ))}
                </div>
            </div>
        </section>
    )
}
