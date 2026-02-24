import Image from 'next/image'

export default function Hero() {
  return (
    <>
      {/* Hero Section with Clear "Open to Work" Signal */}
      <section id="hero" className="section-padding">
        <div className="container-professional">
          {/* Status Badge - Prominent but professional */}
          <div className="hero-status">
            <span className="hero-status-dot"></span>
            <span>Open to Work — Software Engineer</span>
            <span style={{ color: 'var(--text-subtle)', margin: '0 0.5rem' }}>|</span>
            <span style={{ color: 'var(--text-muted)' }}>Available Immediately</span>
          </div>
          
          {/* Hero Content with Photo */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center' }} className="md:grid-cols-[auto,1fr]">
            {/* Professional Headshot */}
            <div style={{ order: 2 }} className="md:order-1">
              <div style={{ 
                width: '200px', 
                height: '200px', 
                borderRadius: '12px', 
                overflow: 'hidden',
                border: '3px solid var(--accent-primary)',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
                margin: '0 auto'
              }}>
                <Image 
                  src="/headshot.jpg" 
                  alt="Demarick Webb-Rivera"
                  width={200}
                  height={200}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            {/* Hero Text */}
            <div style={{ order: 1 }} className="md:order-2">
              <h1 className="text-hero" style={{ marginBottom: '1rem' }}>
                Demarick Webb-Rivera
                <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.6em', fontWeight: 600, marginTop: '0.5rem' }}>
                  Full Stack Developer & Army Veteran
                </span>
              </h1>
              
              <p className="text-body" style={{ maxWidth: '600px', marginBottom: '2rem' }}>
                Building secure, scalable web applications with 4 years of military IT experience 
                and modern full-stack expertise. Currently seeking my first dev role where I can 
                contribute on day one.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#projects" className="btn btn-primary">
                  View Projects
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 12L2 6h12l-6 6z"/></svg>
                </a>
                <a href="mailto:demarickw104@live.com" className="btn btn-success">
                  Hire Me
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2 4h12v8H2V4zm0-2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z"/><path d="M2 4l6 4 6-4"/></svg>
                </a>
                <a href="/resume.pdf" className="btn btn-secondary" download>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Mobile CTA */}
      <a href="mailto:demarickw104@live.com" className="floating-cta">
        <span>Let&apos;s Talk</span>
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M2 4h12v8H2V4zm0-2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z"/></svg>
      </a>
    </>
  )
}
