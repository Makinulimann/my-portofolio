import { CalendarDays } from "lucide-react"
import SectionHeading from "@/components/section-heading"

const experiences = [
  {
    title: "Staff System Information - Backend",
    company: "Indonesian Future Leaders Malang",
    period: "Sept 2024 - Present",
    description: [
      "As a Backend Developer to develop Indonesian Future Malang Website",
      "Managed server and database infrastructure to ensure website performance",
      "Developed a secure payment gateway integration with Tripay and enhanced the donation feature with real-time updates",
      "Implemented backend systems and APIs to support seamless user interactions and frontend functionality",
    ],
  },
  {
    title: "Freelance Designer",
    company: "ZeeX Design Labs",
    period: "Oct 2024",
    description: [
      "As a Freelance Graphic Designer on ZeeX Design Labs",
      "Make a logo Senada Helai and Design brand of Senada Helai",
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 relative">
      <div className="container mx-auto">
        <SectionHeading title="Experience" subtitle="My professional journey and work history" />

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 flex flex-col md:flex-row gap-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: "forwards" }}
            >
              <div className="md:w-1/3">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <CalendarDays size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="md:w-2/3 relative">
                {index !== experiences.length - 1 && (
                  <div className="absolute left-0 top-8 bottom-0 w-px bg-gray-300 dark:bg-gray-700 -ml-4 hidden md:block"></div>
                )}
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500 -ml-5 hidden md:block"></div>

                <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{exp.company}</p>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
