import Image from 'next/image'

type PhotoMode = 'backdrop' | 'nav'

type HeroProps = {
  photoMode: PhotoMode
}

export default function Hero({ photoMode }: HeroProps) {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="section-padding" style={{ position: 'relative' }}>
        {photoMode === 'backdrop' && (
          <div className="yzy-hero-backdrop" aria-hidden="true">
            <Image
              src="/headshot.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}
        <div className="container-professional yzy-hero-content">
          {/* Hero Text */}
            <div>
              <h1 className="text-hero" style={{ marginBottom: '1rem' }}>
                DEMARICK WEBB-RIVERA
                <span style={{ display: 'block', color: 'var(--yzy-dust)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', marginTop: '0.75rem' }}>
                  FULL STACK DEVELOPER / ARMY VETERAN / ACTIVE CLEARANCE
                </span>
              </h1>
              
              <p className="text-body" style={{ maxWidth: '600px', marginBottom: '2rem' }}>
                BUILDING SECURE SCALABLE APPLICATIONS / 4 YEARS MILITARY IT / SEEKING FIRST ENGINEERING ROLE
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#projects" className="btn btn-primary">
                  VIEW WORK →
                </a>
                <a href="mailto:demarickw104@live.com" className="btn btn-success">
                  CONTACT
                </a>
                <a href="/resume.pdf" className="btn btn-secondary" download>
                  DOWNLOAD RESUME
                </a>
              </div>
          </div>
        </div>
      </section>

      {/* Status Beacon */}
      <div className="yzy-status" aria-live="polite">
        <span className="yzy-status-pulse" aria-hidden="true"></span>
        <span className="yzy-status-text">OPEN TO WORK</span>
        <span className="yzy-status-divider">/</span>
        <span className="yzy-status-meta">SOFTWARE ENGINEER</span>
      </div>
    </>
  )
}
