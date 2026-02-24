'use client'

export default function Skills() {
  // Curated skills - only 12 essential ones
  const skills = [
    { name: "React & Next.js", category: "Core Stack" },
    { name: "TypeScript", category: "Core Stack" },
    { name: "Python", category: "Core Stack" },
    { name: "PostgreSQL", category: "Core Stack" },
    { name: "Network Security", category: "Specialized" },
    { name: "Linux Administration", category: "Specialized" },
    { name: "Machine Learning", category: "Specialized" },
    { name: "TCP/Network Protocols", category: "Specialized" },
    { name: "SIPRNET/NIPRNET", category: "Military/Security" },
    { name: "STIGs Compliance", category: "Military/Security" },
    { name: "Active Directory",category: "Military/Security" },
    { name: "Secret Clearance", category: "Military/Security" }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-professional">
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="text-section" style={{ marginBottom: '1.5rem' }}>Skills</h2>
          <p className="text-body" style={{ maxWidth: '65ch' }}>
            Proven capabilities across full-stack development, network security, and military IT operations.
          </p>
        </div>

        {/* Simple 3x4 grid - no progress bars */}
        <div className="tech-grid" style={{ marginBottom: '4rem' }}>
          {skills.map((skill) => (
            <div key={skill.name} className="tech-item">
              <div className="tech-name" style={{ textAlign: 'center', color: 'var(--text-main)', fontWeight: 600 }}>
                {skill.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '0.25rem' }}>
                {skill.category}
              </div>
            </div>
          ))}
        </div>

        {/* Credentials - Compact */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
            <h3 className="text-subsection" style={{ marginBottom: '1.5rem' }}>Education</h3>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>BS Computer Science</div>
              <div className="text-small">MTSU • Cybersecurity Focus • May 2026</div>
            </div>
            <div>
              <div style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>AS Computer Science</div>
              <div className="text-small">Nashville State CC • 2024</div>
            </div>
          </div>

          <div className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
            <h3 className="text-subsection" style={{ marginBottom: '1.5rem' }}>Clearance & Service</h3>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '0.25rem' }}>Secret Security Clearance</div>
              <div className="text-small">DoD • Active</div>
            </div>
            <div>
              <div style={{ color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '0.25rem' }}>Army IT Specialist</div>
              <div className="text-small">4 years • Network Operations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}