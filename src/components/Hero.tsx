import Image from 'next/image'

type PhotoMode = 'backdrop' | 'nav'

type HeroProps = {
  photoMode: PhotoMode
}

export default function Hero({ photoMode }: HeroProps) {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="section-padding yzy-hero" style={{ position: 'relative' }}>
        {/* Always show backdrop on mobile, toggle on desktop */}
        <div className="yzy-hero-backdrop yzy-hero-backdrop-mobile" aria-hidden="true">
          <Image
            src="/headshot.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {photoMode === 'backdrop' && (
          <div className="yzy-hero-backdrop yzy-hero-backdrop-desktop" aria-hidden="true">
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
                I BUILD THINGS THAT WORK. 4 YEARS AS AN ARMY IT SPECIALIST — FROM HELP DESK TEAM CHIEF IN COLORADO TO SYSTEMS MAINTAINER IN KOREA — TAUGHT ME THAT GOOD CODE AND GOOD DEFENSE SHARE THE SAME PRINCIPLE: NO WEAK POINTS. I MANAGED 5,000+ NETWORK CHANGES WITH ZERO DOWNTIME AND $750K IN EQUIPMENT WITH ZERO LOSSES. NOW I AM LOOKING FOR MY FIRST ENGINEERING ROLE.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#projects" className="btn btn-primary">
                  SEE WHAT I HAVE BUILT →
                </a>
                <a href="mailto:demarickw104@live.com" className="btn btn-success">
                  LET US TALK
                </a>
                <a href="/resume.docx" className="btn btn-secondary" download>
                  DOWNLOAD RESUME (DOCX)
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
