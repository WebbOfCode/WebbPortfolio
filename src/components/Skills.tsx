'use client'

export default function Skills() {
  // Curated skills - only 12 essential ones
  const skills = [
    { name: "React & Next.js", category: "CORE STACK" },
    { name: "TypeScript", category: "CORE STACK" },
    { name: "Python", category: "CORE STACK" },
    { name: "PostgreSQL", category: "CORE STACK" },
    { name: "Network Security", category: "SPECIALIZED" },
    { name: "Linux Administration", category: "SPECIALIZED" },
    { name: "Machine Learning", category: "SPECIALIZED" },
    { name: "TCP/Network Protocols", category: "SPECIALIZED" },
    { name: "SIPRNET/NIPRNET", category: "MILITARY / SECURITY" },
    { name: "STIGs Compliance", category: "MILITARY / SECURITY" },
    { name: "Active Directory", category: "MILITARY / SECURITY" },
    { name: "Secret Clearance", category: "MILITARY / SECURITY" }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-professional">
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="text-section" style={{ marginBottom: '1.5rem' }}>SKILLS</h2>
          <p className="text-body" style={{ maxWidth: '65ch' }}>
            PROVEN CAPABILITIES ACROSS FULL STACK DEVELOPMENT NETWORK SECURITY AND MILITARY IT OPERATIONS
          </p>
        </div>

        {/* Simple 3x4 grid - no progress bars */}
        <div className="tech-grid yzy-skills-grid" style={{ marginBottom: '4rem' }}>
          {skills.map((skill) => (
            <div key={skill.name} className="tech-item">
              <div className="tech-name" style={{ textAlign: 'center', color: 'var(--yzy-bone)', fontWeight: 800 }}>
                {skill.name}
              </div>
              <div className="yzy-mono" style={{ fontSize: '0.6875rem', color: 'var(--yzy-ash)', marginTop: '0.25rem' }}>
                {skill.category}
              </div>
            </div>
          ))}
        </div>

        {/* Credentials - Compact */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass" style={{ padding: '2rem' }}>
            <h3 className="text-subsection" style={{ marginBottom: '1.5rem' }}>EDUCATION</h3>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ color: 'var(--yzy-void)', fontWeight: 800, marginBottom: '0.25rem' }}>BS COMPUTER SCIENCE</div>
              <div className="text-small">MTSU / CYBERSECURITY FOCUS / MAY 2026</div>
            </div>
            <div>
              <div style={{ color: 'var(--yzy-void)', fontWeight: 800, marginBottom: '0.25rem' }}>AS COMPUTER SCIENCE</div>
              <div className="text-small">NASHVILLE STATE CC / 2024</div>
            </div>
          </div>

          <div className="glass" style={{ padding: '2rem' }}>
            <h3 className="text-subsection" style={{ marginBottom: '1.5rem' }}>CLEARANCE / SERVICE</h3>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ color: 'var(--yzy-void)', fontWeight: 800, marginBottom: '0.25rem' }}>SECRET SECURITY CLEARANCE</div>
              <div className="text-small">DOD / ACTIVE</div>
            </div>
            <div>
              <div style={{ color: 'var(--yzy-void)', fontWeight: 800, marginBottom: '0.25rem' }}>ARMY IT SPECIALIST</div>
              <div className="text-small">4 YEARS / NETWORK OPERATIONS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}