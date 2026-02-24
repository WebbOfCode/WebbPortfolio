'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      alert('ENTER YOUR NAME')
      return
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      alert('ENTER A VALID EMAIL')
      return
    }
    if (!formData.message.trim()) {
      alert('ENTER A MESSAGE')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Send email using EmailJS (init is not needed when using send directly)
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_vtlp32a',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_ghiu8yb',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: 'PORTFOLIO INQUIRY',
          message: formData.message,
          reply_to: formData.email,
          to_email: 'demarickw104@live.com',
          to_name: 'Demarick Webb-Rivera'
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'UNKlFMtz9oZIt0Z7a'
      )
      
      console.log('Email sent successfully:', result)
      alert('MESSAGE SENT')
      setFormData({ name: '', email: '', message: '' })
      
    } catch (error: any) {
      console.error('Failed to send email:', error)
      console.error('Error details:', error.text || error.message)
      alert('ERROR SENDING MESSAGE EMAIL ME DIRECTLY AT DEMARICKW104@LIVE.COM')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-professional">
        <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '65ch', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 className="text-section" style={{ marginBottom: '1.5rem' }}>CONTACT</h2>
          <p className="text-body" style={{ marginBottom: '1rem' }}>
            OPEN TO FULL TIME SOFTWARE ENGINEERING ROLES STARTING IMMEDIATELY
          </p>
          <p className="text-body">
            EMAIL <a href="mailto:demarickw104@live.com" style={{ color: 'var(--yzy-construction)', textDecoration: 'underline' }}>DEMARICKW104@LIVE.COM</a> / <a href="https://www.linkedin.com/in/demarick-webb1/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--yzy-construction)', textDecoration: 'underline' }}>LINKEDIN</a>
          </p>
        </div>

        {/* Simplified Contact Form */}
        <div className="glass" style={{ maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', padding: '2.5rem' }}>
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
            <div>
              <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                NAME
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
                  background: 'var(--yzy-concrete)',
                  border: '1px solid var(--yzy-ash)',
                  color: 'var(--yzy-bone)',
                  fontSize: '1rem'
                }}
                placeholder="YOUR NAME"
              />
            </div>
            
            <div>
              <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                EMAIL
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
                  background: 'var(--yzy-concrete)',
                  border: '1px solid var(--yzy-ash)',
                  color: 'var(--yzy-bone)',
                  fontSize: '1rem'
                }}
                placeholder="YOUR.EMAIL@EXAMPLE.COM"
              />
            </div>
            
            <div>
              <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                MESSAGE
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
                  background: 'var(--yzy-concrete)',
                  border: '1px solid var(--yzy-ash)',
                  color: 'var(--yzy-bone)',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
                placeholder="PROJECT DETAILS / TIMELINE / QUESTIONS"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              {isSubmitting ? 'SENDING' : 'SEND'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}