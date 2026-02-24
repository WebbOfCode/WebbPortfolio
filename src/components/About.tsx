"use client"

export default function About() {

  return (
    <section id="about" className="section-padding">
      <div className="container-professional">
        <h2 className="text-section" style={{ marginBottom: '3rem', textAlign: 'center' }}>About Me</h2>
        
        {/* Condensed Intro */}
        <div style={{ maxWidth: '65ch', marginLeft: 'auto', marginRight: 'auto', marginBottom: '3rem' }}>
          <p className="text-body" style={{ marginBottom: '1.5rem' }}>
            I spent 4 years managing classified networks (Active Secret Clearance) across two continents as an Army IT Specialist, leading 5,000+ configuration changes with zero security incidents. Now I build full-stack applications that prioritize security and reliability from day one.
          </p>
        </div>

        {/* What I'm Looking For - Keep this, it's strong */}
        <div className="glass" style={{ maxWidth: '50rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: '3rem', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-secondary)' }}>
          <h3 className="text-subsection" style={{ marginBottom: '1rem', color: 'var(--accent-secondary)' }}>
            What I&apos;m Looking For
          </h3>
          <p className="text-body" style={{ marginBottom: '1.5rem' }}>
            My first dev role where I can contribute on day one. I&apos;m strongest in full-stack work and security-related development. My clearance is active, making me ideal for government/defense contracts. Seeking a team of strong engineers where I can learn and make meaningful contributions.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.875rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ✓ <span>Nashville, TN</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ✓ <span>Available Immediately</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ✓ <span>Remote/Relocation Open</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🔒 <span>Active Secret Clearance</span>
            </div>
          </div>
        </div>

        {/* How I Work - Memorable debugging analogy */}
        <div style={{ maxWidth: '65ch', marginLeft: 'auto', marginRight: 'auto' }}>
          <h3 className="text-subsection" style={{ marginBottom: '1rem' }}>How I Work</h3>
          <p className="text-body">
            I approach debugging like troubleshooting military networks—systematically and persistently. Break it down, research thoroughly, test everything, knock out simple steps until it works.
          </p>
        </div>
      </div>
    </section>
  )
}