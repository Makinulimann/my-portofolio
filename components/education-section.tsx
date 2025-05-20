import { GraduationCap, Award } from "lucide-react"
import SectionHeading from "@/components/section-heading"

export default function EducationSection() {
  return (
    <section id="education" className="py-16 relative">
      <div className="container mx-auto">
        <SectionHeading
          title="Education & Achievements"
          subtitle="My academic background and notable accomplishments"
        />

        <div className="max-w-3xl mx-auto">
          <div
            className="mb-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shrink-0">
                <GraduationCap size={24} />
              </div>

              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm flex-1">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Brawijaya University - Malang, Indonesia
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Undergraduate in Information System, 3.79/4.00 | Aug 2022 - Present
                </p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>
                    Actively participates campus events, such as organizations, competitions, webinars, and skills
                    training workshops.
                  </li>
                  <li>Relevant Subjects: Algorithm & Data Structure, HTML, CSS, JavaScript, PHP, MySQL</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shrink-0">
                <Award size={24} />
              </div>

              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm flex-1">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Achievements & Certifications
                </h3>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1 mt-2">
                  <li>3rd Place PKM-K MABA FILKOM (2022)</li>
                  <li>Finalist Business Plan Competition Industrial Business Project 2024</li>
                  <li>Oracle – Database Design (2023)</li>
                  <li>Oracle – Database Programming (2023)</li>
                  <li>Hackerrank - Problem Solving - Basic (2024)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
