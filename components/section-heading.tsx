import { cn } from "@/lib/utils"

interface SectionHeadingProps {
    title: string
    subtitle?: string
    className?: string
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
    return (
        <div className={cn("text-center mb-12", className)}>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 relative inline-block">
                {title}
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
            </h2>
            {subtitle && <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
    )
}
