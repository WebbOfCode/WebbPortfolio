'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name.trim()) {
      alert('Please enter your name.')
      return
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      alert('Please enter a valid email address.')
      return
    }
    if (!formData.subject.trim()) {
      alert('Please provide a subject.')
      return
    }
    if (!formData.message.trim()) {
      alert('Please include a message.')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Log environment variables for debugging (in development only)
      console.log('EmailJS Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
      console.log('EmailJS Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)
      
      // Send email using EmailJS (init is not needed when using send directly)
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_vtlp32a',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_ghiu8yb',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
          to_email: 'demarickw104@live.com',
          to_name: 'Demarick Webb-Rivera'
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'UNKlFMtz9oZIt0Z7a'
      )
      
      console.log('Email sent successfully:', result)
      alert('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
    } catch (error: any) {
      console.error('Failed to send email:', error)
      console.error('Error details:', error.text || error.message)
      alert('Sorry, there was an error sending your message. Please try again or email me directly at demarickw104@live.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "demarickw104@live.com",
      link: "mailto:demarickw104@live.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Nashville, TN",
      link: null
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/WebbOfCode",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/demarick-webb1/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@only1webbie",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-professional">
        <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '65ch', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 className="text-section" style={{ marginBottom: '1.5rem' }}>Let&apos;s Work Together</h2>
          <p className="text-body" style={{ marginBottom: '1rem' }}>
            Open to full-time software engineering roles starting immediately. I respond to all inquiries within 24 hours.
          </p>
          <p className="text-body">
            Or reach me directly: <a href="mailto:demarickw104@live.com" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>demarickw104@live.com</a> | <a href="https://www.linkedin.com/in/demarick-webb1/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>LinkedIn</a>
          </p>
        </div>

        {/* Simplified Contact Form */}
        <div className="glass" style={{ maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', padding: '2.5rem', borderRadius: '12px' }}>
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
            <div>
              <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                aria-required="true"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '8px',
                  color: 'var(--text-main)',
                  fontSize: '1rem'
                }}
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '8px',
                  color: 'var(--text-main)',
                  fontSize: '1rem'
                }}
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                aria-required="true"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '8px',
                  color: 'var(--text-main)',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
                placeholder="Tell me about your project, timeline, or any questions you have..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}