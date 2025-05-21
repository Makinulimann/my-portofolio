"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (
                isOpen &&
                !target.closest("#mobile-menu") &&
                !target.closest("#menu-button")
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    return (
        <div className="md:hidden">
            <Button
                id="menu-button"
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/30"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            <div
                id="mobile-menu"
                className={cn(
                    "fixed inset-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 ease-in-out",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
            >
                <nav className="flex flex-col items-center space-y-8">
                    <a
                        href="#home"
                        className="text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={closeMenu}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={closeMenu}
                    >
                        About
                    </a>
                    <a
                        href="#experience"
                        className="text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={closeMenu}
                    >
                        Experience
                    </a>
                    <a
                        href="#projects"
                        className="text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={closeMenu}
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={closeMenu}
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </div>
    );
}
