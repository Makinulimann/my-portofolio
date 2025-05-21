import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown } from "lucide-react";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import SocialLinks from "@/components/social-links";
import EducationSection from "@/components/education-section";
import { ThemeToggle } from "@/components/theme-toggle";
import AnimatedBackground from "@/components/animated-background";
import SectionHeading from "@/components/section-heading";
import StatsSection from "@/components/stats-section";
import MobileNav from "@/components/mobile-nav";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Fixed Navigation */}
      <div className="fixed top-0 w-full flex justify-center z-50 mt-4">
        {/* Desktop Navigation */}
        <nav className="bg-white/70 dark:bg-gray-900/70 shadow-sm rounded-full px-8 py-4 mx-auto backdrop-blur-md hidden md:block">
          <ul className="flex justify-center space-x-8">
            <li>
              <a
                href="#home"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Button - Top Left */}
        <div className="fixed top-4 left-4 z-50 md:hidden">
          <MobileNav />
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Add padding to the top of the page to account for the fixed navbar */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto py-16 text-center relative"
      >
        <div className="relative w-32 h-32 mx-auto mb-6 animate-float">
          <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Image
              src="/memoji.png"
              alt="Muhammad Makinul Iman"
              width={84}
              height={84}
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2 animate-fade-in">
          Muhammad Makinul Iman
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
          Undergraduate Student System Information of Brawijaya University |
          Backend Developer | UI/UX Designer | Freelance Graphic Designer
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in animation-delay-400">
          <a href="mailto:akinmonsan@gmail.com?subject=Contact from Portfolio Website&body=Hello Muhammad Makinul Iman,%0D%0A%0D%0AI visited your portfolio website and would like to get in touch with you regarding...">
            <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
              <Mail size={16} />
              Contact Me
            </Button>
          </a>
          <a href="/CV_Makinul.pdf" download>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-gray-800/30"
            >
              <Download size={16} />
              Download CV
            </Button>
          </a>
        </div>

        <SocialLinks />

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-gray-600 dark:text-gray-400" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 relative">
        <div className="container mx-auto">
          <SectionHeading
            title="About Me"
            subtitle="Get to know more about me and my background"
          />

          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <div className="w-full md:w-1/3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <Image
                  src="/profil.png"
                  alt="Muhammad Makinul Iman"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg relative bg-white dark:bg-gray-900 p-1"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Hai! Saya Muhammad Makinul Iman, mahasiswa Sistem Informasi di
                Universitas Brawijaya. Saya memiliki minat dan keahlian dalam
                pengembangan web, UI/UX Design dan juga sebagai Freelance
                Graphic Designer.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Saya memiliki pengalaman dalam backend development dan membangun
                aplikasi yang berfungsi baik. Saat ini saya aktif mengerjakan
                beberapa project freelance dan memperdalam skill programming
                serta desain antarmuka pengguna.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                As an Information Systems undergraduate with a GPA of 3.79, I am
                passionate about software engineering and UI/UX design. Skilled
                in web development, responsive design, and backend systems, I
                excel in analytical thinking and problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 dark:text-gray-400 relative">
        <div className="container mx-auto">
          <p>
            © {new Date().getFullYear()} Muhammad Makinul Iman. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
