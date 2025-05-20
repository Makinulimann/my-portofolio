"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Animated gradient background */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 animate-gradient-slow"
                aria-hidden="true"
            ></div>

            {/* Floating shapes */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-300/20 dark:bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-yellow-300/20 dark:bg-yellow-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-6000"></div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"
                aria-hidden="true"
            ></div>
        </div>
    );
}
