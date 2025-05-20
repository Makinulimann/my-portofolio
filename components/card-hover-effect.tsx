"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export const HoverCard = ({
    items,
    className,
}: {
    items: {
        title: string
        description: string
        icon?: React.ReactNode
    }[]
    className?: string
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="relative group block p-6 h-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-white/10 dark:bg-gray-800/10 block rounded-lg"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <div className="flex flex-col h-full">
                            {item.icon && <div className="mb-3">{item.icon}</div>}
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export const Card = ({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) => {
    return (
        <div
            className={cn(
                "rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 h-full",
                className,
            )}
        >
            <div className="p-5 h-full">{children}</div>
        </div>
    )
}

export const CardTitle = ({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) => {
    return <h3 className={cn("text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2", className)}>{children}</h3>
}

export const CardDescription = ({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) => {
    return <p className={cn("text-gray-600 dark:text-gray-400 flex-grow", className)}>{children}</p>
}
