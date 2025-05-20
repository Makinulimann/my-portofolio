"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import { useState } from "react"

const projects = [
  {
    title: "Indonesian Future Leaders Website",
    description: "A website for Indonesian Future Leaders Malang chapter with donation and event management features.",
    image: "/projects/ifl-website.png",
    tags: ["Laravel", "MySQL", "Tailwind", "PHP", "React"],
    liveLink: "https://iflchaptermalang.org/",
    githubLink: null,
  },
  {
    title: "Senada Helai Brand Design",
    description: "Logo and brand identity design for Senada Helai brand.",
    image: "/projects/senada-helai.png",
    tags: ["Graphic Design", "Branding", "Adobe Illustrator"],
    liveLink: "https://www.behance.net/gallery/210105611/Logo-Design",
    githubLink: null,
  },
  {
    title: "Design App Farmora",
    description: "Design Application UI of Farmora",
    image: "/projects/Farmora-logo.jpg",
    tags: ["UI/UX Design", "Figma", "Design Thinking"],
    liveLink: "https://www.figma.com/proto/4FriCQSs6XtqR3en1r7BTJ/FARMORA?page-id=0%3A1&node-id=198-1556&p=f&viewport=-1086%2C438%2C0.19&t=0nmIowIemXnfTG8R-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=149%3A1168",
    githubLink: null,
  },
  {
    title: "Design Web App CarbonEthics",
    description: "Design Website CarbonEthics on Digital Monitoring section for Mobile Device",
    image: "/projects/Carbonethics.jpg",
    tags: ["UI/UX Design", "Figma", "User Flow", "UX Research"],
    liveLink: "https://www.figma.com/proto/lBGyvbrCkEknNr2r0312uT/Project-CarbonEthics---Digital-Monitoring?page-id=4%3A9&node-id=66-2748&p=f&viewport=494%2C278%2C0.1&t=mn0AzXayUhSEztKN-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=66%3A2748",
    githubLink: null,
  },
  {
    title: "Design App SpeedPay",
    description: "Design Application SpeedPay on Transaction Feature",
    image: "/projects/SpeedPay.jpg",
    tags: ["UI/UX Design", "Figma", "User Flow"],
    liveLink: "https://www.figma.com/proto/mTCre7pNfJiYDCHMezrAVI/Speedpay?page-id=0%3A1&node-id=5-2955&p=f&viewport=293%2C294%2C0.07&t=FtovvGC22V1bOfJU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5%3A3073",
    githubLink: null,
  },
  {
    title: "Design App Social Nature",
    description: "Design Application UI of Social Nature",
    image: "/projects/Gemash.jpg",
    tags: ["UI/UX Design", "Figma", "Design Thinking"],
    liveLink: "https://www.figma.com/proto/rQNBxpS78oRFmP6o4k8hbX/Social-Nature?page-id=0%3A1&node-id=2-3084&p=f&viewport=550%2C609%2C0.09&t=82gOsXeP59K8KAHe-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A5088&show-proto-sidebar=1",
    githubLink: null,
  },
  {
    title: "Website App SEKITA (Capstone Project)",
    description: "Develop Capstone Project : Website for Certification Lecturers",
    image: "/projects/Sekita.jpg",
    tags: ["Laravel", "Vue", "Tailwind", "Github"],
    liveLink: "",
    githubLink: "https://github.com/Makinulimann/Capstone",
  },
]

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

  // Change page
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    // Scroll to the top of the projects section
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="projects" className="py-16 relative">
      <div className="container mx-auto">
        <SectionHeading title="Projects" subtitle="Some of my recent work and creations" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden transition-all duration-500 hover:shadow-lg opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: "forwards" }}
            >
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={project.image || "/placeholder.svg?height=200&width=400"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 relative">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 bg-white/50 dark:bg-gray-800/50"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </Button>
                    </a>
                  )}

                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 bg-white/50 dark:bg-gray-800/50"
                      >
                        <Github size={14} />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </Button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => goToPage(index + 1)}
                className={`w-10 h-10 ${
                  currentPage === index + 1
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
                    : "bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                }`}
                aria-label={`Page ${index + 1}`}
                aria-current={currentPage === index + 1 ? "page" : undefined}
              >
                {index + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
              aria-label="Next page"
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
