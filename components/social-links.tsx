import { Mail, Linkedin, Instagram, Github } from "lucide-react"
import Link from "next/link"

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 animate-fade-in animation-delay-600">
      <Link
        href="https://linkedin.com/in/makinulimann"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </Link>
      <Link
        href="https://www.instagram.com/makinuliman/"
        className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-pink-100 dark:hover:bg-pink-900/30 hover:text-pink-600 dark:hover:text-pink-400 transition-colors shadow-sm"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </Link>
      <Link
        href="https://github.com/Makinulimann"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors shadow-sm"
        aria-label="GitHub"
      >
        <Github size={20} />
      </Link>
    </div>
  )
}