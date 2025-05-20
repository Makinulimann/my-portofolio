import Image from "next/image"
import SectionHeading from "@/components/section-heading"

const skills = [
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Adobe Photoshop", icon: "/icons/photoshop.svg" },
  { name: "Adobe Illustrator", icon: "/icons/illustrator.svg" },

  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Adobe Photoshop", icon: "/icons/photoshop.svg" },
  { name: "Adobe Illustrator", icon: "/icons/illustrator.svg" },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 relative">
      <div className="container mx-auto">
        <SectionHeading title="Tech Stack" subtitle="Technologies and tools I work with" />

        <div className="relative overflow-hidden">
          <div className="skills-scroll-container flex gap-8 animate-scroll">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center flex-shrink-0 group">
                <div className="w-16 h-16 mb-2 bg-white/80 dark:bg-gray-800/80 rounded-full p-3 shadow-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <Image
                    src={skill.icon || "/placeholder.svg?height=48&width=48"}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="transition-all duration-300 group-hover:brightness-110"
                  />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
