"use client"

export default function About() {

  return (
    <section id="about" className="section-padding">
      <div className="container-professional">
        <h2 className="text-section" style={{ marginBottom: '3rem', textAlign: 'center' }}>PROFILE</h2>
        
        {/* Condensed Intro */}
        <div className="yzy-text-block" style={{ maxWidth: '65ch', marginLeft: 'auto', marginRight: 'auto', marginBottom: '3rem' }}>
          <p className="text-body" style={{ marginBottom: '1.5rem' }}>
            I SPENT 4 YEARS MANAGING CLASSIFIED NETWORKS WITH ACTIVE SECRET CLEARANCE ACROSS TWO CONTINENTS AS AN ARMY IT SPECIALIST LEADING 5,000+ CONFIGURATION CHANGES WITH ZERO SECURITY INCIDENTS NOW I BUILD FULL STACK APPLICATIONS THAT PRIORITIZE SECURITY AND RELIABILITY FROM DAY ONE
          </p>
        </div>

        {/* What I'm Looking For - Keep this, it's strong */}
        <div className="glass" style={{ maxWidth: '50rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: '3rem', padding: '2rem', borderLeft: '2px solid var(--yzy-construction)' }}>
          <h3 className="text-subsection" style={{ marginBottom: '1rem', color: 'var(--yzy-void)' }}>
            WHAT I AM LOOKING FOR
          </h3>
          <p className="text-body" style={{ marginBottom: '1.5rem' }}>
            FIRST DEV ROLE WHERE I CAN CONTRIBUTE ON DAY ONE STRONGEST IN FULL STACK AND SECURITY FOCUSED DEVELOPMENT ACTIVE CLEARANCE FOR GOVERNMENT AND DEFENSE CONTRACTS SEEKING A TEAM OF STRONG ENGINEERS WHERE I CAN LEARN AND DELIVER
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.875rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>■</span> <span>NASHVILLE TN</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>■</span> <span>AVAILABLE IMMEDIATELY</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>■</span> <span>REMOTE OR RELOCATION OPEN</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>■</span> <span>ACTIVE SECRET CLEARANCE</span>
            </div>
          </div>
        </div>

        {/* How I Work - Manifesto tablet */}
        <div style={{ maxWidth: '65ch', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="yzy-manifesto">
            <div className="yzy-text-block">
              <h3 className="text-subsection">HOW I WORK</h3>
            </div>
            <div className="yzy-manifesto-rule"></div>
            <div className="yzy-manifesto-list">
              <div className="yzy-manifesto-item">
                <div>BREAK IT DOWN</div>
                <div className="yzy-manifesto-caption">SYSTEMATIC PERSISTENCE</div>
              </div>
              <div className="yzy-manifesto-item">
                <div>RESEARCH THOROUGHLY</div>
                <div className="yzy-manifesto-caption">DOCUMENT EVERYTHING</div>
              </div>
              <div className="yzy-manifesto-item">
                <div>TEST EVERYTHING</div>
                <div className="yzy-manifesto-caption">REMOVE EACH FAILURE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}