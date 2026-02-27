'use client'

import { useState } from 'react'

export default function Skills() {
  const [skillsExpanded, setSkillsExpanded] = useState(false)

  // Core capabilities
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

  const primarySkills = skills.slice(0, 6)
  const allSkills = skillsExpanded ? skills : primarySkills
  const hiddenCount = skills.length - primarySkills.length

  return (
    <section id="skills" className="section-padding">
      <div className="container-professional">
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="text-section" style={{ marginBottom: '1.5rem' }}>WHAT I BRING</h2>
          <p className="text-body" style={{ maxWidth: '65ch' }}>
            4 YEARS IN MILITARY IT (PLUS HELP DESK WORK POST-SERVICE) TAUGHT ME TO BE RELIABLE UNDER PRESSURE. MY CS DEGREE GAVE ME THE FOUNDATION. THESE ARE THE TOOLS I USE TO BUILD.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="tech-grid yzy-skills-grid" style={{ marginBottom: '2rem' }}>
          {allSkills.map((skill) => (
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

        {/* Expand button */}
        {!skillsExpanded && (
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <button
              onClick={() => setSkillsExpanded(true)}
              className="btn btn-secondary"
              style={{ fontSize: '0.875rem', letterSpacing: '0.1em' }}
            >
              + {hiddenCount} MORE →
            </button>
          </div>
        )}

        {/* Credentials */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass" style={{ padding: '2rem' }}>
            <h3 className="text-subsection" style={{ marginBottom: '1.5rem' }}>EDUCATION</h3>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ color: 'var(--yzy-void)', fontWeight: 800, marginBottom: '0.25rem' }}>BS COMPUTER SCIENCE</div>
              <div className="text-small">MTSU / CYBERSECURITY FOCUS / GRADUATING MAY 2026</div>
            </div>
            <div>
              <div style={{ color: 'var(--yzy-void)', fontWeight: 800, marginBottom: '0.25rem' }}>AS COMPUTER SCIENCE</div>
              <div className="text-small">NASHVILLE STATE COMMUNITY COLLEGE / 2024</div>
            </div>
          </div>

          <div className="glass" style={{ padding: '2rem' }}>
            <h3 className="text-subsection" style={{ marginBottom: '1.5rem' }}>CLEARANCE & SERVICE</h3>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ color: 'var(--yzy-void)', fontWeight: 800, marginBottom: '0.25rem' }}>SECRET SECURITY CLEARANCE</div>
              <div className="text-small">DEPARTMENT OF DEFENSE / ACTIVE</div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ color: 'var(--yzy-void)', fontWeight: 800, marginBottom: '0.25rem' }}>HELP DESK TEAM CHIEF</div>
              <div className="text-small">COLORADO SPRINGS / 2016-2018 / 5,000+ MACS MANAGED</div>
            </div>
            <div>
              <div style={{ color: 'var(--yzy-void)', fontWeight: 800, marginBottom: '0.25rem' }}>INFORMATION SYSTEMS MAINTAINER</div>
              <div className="text-small">DAEGU, SOUTH KOREA / 2015-2016</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
