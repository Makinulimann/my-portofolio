"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import { sendEmail } from "@/lib/actions"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("loading")

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields")
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address")
      }

      // Send email
      await sendEmail(formData)

      // Success
      setFormStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    } catch (error) {
      setFormStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.")

      // Reset error after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
        setErrorMessage("")
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-16 relative">
      <div className="container mx-auto">
        <SectionHeading title="Contact" subtitle="Get in touch with me for collaborations or opportunities" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">Email</h4>
                  <a
                    href="mailto:akinmonsan@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    akinmonsan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">Phone</h4>
                  <a
                    href="tel:+6281327521645"
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    +62 813 2752 1645
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Malang, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Send Message</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="bg-white/70 dark:bg-gray-800/70 border-gray-200 dark:border-gray-700"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-white/70 dark:bg-gray-800/70 border-gray-200 dark:border-gray-700"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="bg-white/70 dark:bg-gray-800/70 border-gray-200 dark:border-gray-700"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  className="bg-white/70 dark:bg-gray-800/70 border-gray-200 dark:border-gray-700 min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                disabled={formStatus === "loading"}
              >
                {formStatus === "loading" ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              {/* Success message */}
              {formStatus === "success" && (
                <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md flex items-center gap-2">
                  <CheckCircle size={16} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {/* Error message */}
              {formStatus === "error" && (
                <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-md flex items-center gap-2">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Alternative contact method */}
              <div className="text-center text-sm text-gray-600 dark:text-gray-400 pt-2">
                <p>
                  Or email me directly at{" "}
                  <a href="mailto:akinmonsan@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    akinmonsan@gmail.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
