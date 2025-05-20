"use server"

import nodemailer from "nodemailer"

interface EmailData {
    name: string
    email: string
    subject: string
    message: string
}

export async function sendEmail(data: EmailData) {
    try {
        // Create a transporter using your Gmail credentials
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        })

        // Set up email data
        const mailOptions = {
            from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Send to yourself
            replyTo: data.email, // Allow replying directly to the sender
            subject: `Portfolio Contact: ${data.subject || "New message from your portfolio"}`,
            text: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
      `,
            html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #4a5568;">New Contact Form Submission</h2>
  <p style="margin-bottom: 20px; color: #718096;">You have received a new message from your portfolio website.</p>
  
  <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${data.name}</p>
    <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #4299e1;">${data.email}</a></p>
    <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${data.subject || "N/A"}</p>
  </div>
  
  <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px;">
    <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
    <p style="white-space: pre-line; margin: 0; color: #4a5568;">${data.message}</p>
  </div>
  
  <p style="margin-top: 20px; font-size: 14px; color: #a0aec0;">This email was sent from your portfolio website contact form.</p>
</div>
      `,
        }

        // Send the email
        await transporter.sendMail(mailOptions)

        return { success: true }
    } catch (error) {
        console.error("Error sending email:", error)
        throw new Error("Failed to send email. Please try again later.")
    }
}
