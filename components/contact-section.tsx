import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import SectionHeading from "@/components/section-heading";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 relative">
      <div className="container mx-auto">
        <SectionHeading
          title="Contact"
          subtitle="Get in touch with me for collaborations or opportunities"
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-8 text-center">
              Get In Touch
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100 text-lg mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:akinmonsan@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    akinmonsan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100 text-lg mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+6281327521645"
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    +62 813 2752 1645
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100 text-lg mb-1">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Malang, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100 text-lg mb-1">
                    LinkedIn
                  </h4>
                  <a
                    href="https://linkedin.com/in/makinulimann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    linkedin.com/in/makinulimann
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100 text-lg mb-1">
                    Instagram
                  </h4>
                  <a
                    href="https://instagram.com/makinuliman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    @makinuliman
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center text-gray-700 dark:text-gray-300 shrink-0">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100 text-lg mb-1">
                    GitHub
                  </h4>
                  <a
                    href="https://github.com/Makinulimann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                  >
                    github.com/Makinulimann
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Feel free to reach out to me through any of these channels. I'll
                get back to you as soon as possible!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
