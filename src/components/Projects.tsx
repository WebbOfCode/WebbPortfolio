'use client'

import Image from 'next/image'

type ProjectMeta = {
  id: number
  title: string
  problem: string
  approach: string
  result: string
  technologies: string[]
  image: string
  liveUrl: string
  githubUrl: string
  year: string
}

export default function Projects() {
  // Keep only the 4 strongest projects
  const projects: ProjectMeta[] = [
    {
      id: 1,
      title: "Cadence — Veteran Transition Platform",
      problem: "200,000+ service members transition annually with 44% feeling unprepared. Existing resources are scattered across generic websites with limited personalization.",
      approach: "Built full-stack Next.js application with GPT-4o integration after interviewing 12 veterans. Implemented multi-step onboarding with Zustand state persistence, progressive disclosure UI, and structured AI prompting for consistent results.",
      result: "Production-deployed platform achieving 95% task completion rate in user testing. Demonstrates full-stack expertise with AI integration, sophisticated state management, and real-world deployment. Zero-trust security protects PII.",
      technologies: ["Next.js", "TypeScript", "OpenAI GPT-4o", "Zustand", "Tailwind CSS"],
      image: "/cadence.svg",
      liveUrl: "https://cadence-blond.vercel.app/",
      githubUrl: "https://github.com/WebbOfCode/cadence",
      year: "2024"
    },
    {
      id: 2,
      title: "TrafficWiz",
      problem: "Nashville lacks accurate real-time traffic prediction tools for commuters and city planners.",
      approach: "Built ML-powered dashboard using React frontend with Python/Scikit-learn backend analyzing historical congestion patterns and PostgreSQL data storage.",
      result: "Achieved 15% better prediction accuracy than existing city tools. Earned A grade on MTSU capstone project demonstrating real-world ML application.",
      technologies: ["React", "Python", "Scikit-learn", "PostgreSQL"],
      image: "/trafficwiz.svg",
      liveUrl: "https://github.com/WebbOfCode/TrafficWiz",
      githubUrl: "https://github.com/WebbOfCode/TrafficWiz",
      year: "2024"
    },
    {
      id: 3,
      title: "Safe URL Checker",
      problem: "Phishing attacks increasingly target non-technical users who can't identify malicious links.",
      approach: "Developed Next.js security tool integrating multiple threat intelligence APIs to analyze URLs for malicious content, malware, and phishing indicators.",
      result: "Real-time threat detection with intuitive UI. Demonstrates security-first development approach and API integration skills.",
      technologies: ["Next.js", "TypeScript", "Vercel", "Security APIs"],
      image: "/safeurlcheck.svg",
      liveUrl: "https://safeurlcheck.vercel.app/",
      githubUrl: "https://github.com/WebbOfCode/COdeRivers",
      year: "2024"
    },
    {
      id: 4,
      title: "Smart Wheel Research Simulator",
      problem: "Vanderbilt robotics research needed a way to study driver reactions and cognitive load during autonomous vehicle transitions.",
      approach: "Built Unity-based driving simulator with split-screen rendering that integrates cognitive minigames (Stroop tests, math puzzles) alongside main gameplay. Used C# for game logic and speech recognition integration.",
      result: "Research-grade simulator enabling real-time driver attention monitoring. Supports Vanderbilt's development of intelligent steering wheels that improve autonomous vehicle safety.",
      technologies: ["Unity", "C#", "Speech Recognition", "FFmpeg"],
      image: "/driving.svg",
      liveUrl: "https://github.com/WebbOfCode/sample9632",
      githubUrl: "https://github.com/WebbOfCode/sample9632",
      year: "2024"
    }
  ]

  const handleLiveDemo = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleGithubView = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container-professional">
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="text-section" style={{ marginBottom: '1.5rem' }}>Featured Projects</h2>
          <p className="text-body" style={{ maxWidth: '65ch' }}>
            Production-ready applications that demonstrate full-stack capabilities, security focus, and real-world problem solving.
          </p>
        </div>

        {/* Project Cards - Simple Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-project"
            >
              <div className="relative group">
                <Image 
                  src={project.image} 
                  alt={`${project.title} screenshot`}
                  width={600}
                  height={375}
                  className="card-project-image"
                />
                
                {/* Year badge */}
                <div className="absolute top-4 left-4" style={{ 
                  background: 'var(--card-bg)', 
                  backdropFilter: 'blur(8px)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  border: '1px solid var(--card-border)'
                }}>
                  {project.year}
                </div>
              </div>
              
              <div className="card-project-content">
                <h3 className="card-project-title">{project.title}</h3>
                
                {/* Case Study Format - Condensed */}
                <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'monospace' }}>Problem</span>
                    <p className="text-small" style={{ marginTop: '0.25rem', lineHeight: '1.5' }}>{project.problem}</p>
                  </div>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'monospace' }}>Approach</span>
                    <p className="text-small" style={{ marginTop: '0.25rem', lineHeight: '1.5' }}>{project.approach}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'monospace' }}>Result</span>
                    <p className="text-small" style={{ marginTop: '0.25rem', lineHeight: '1.5' }}>{project.result}</p>
                  </div>
                </div>
                
                {/* Tech Stack */}
                <div className="card-project-tags">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.375rem 0.75rem',
                        background: 'var(--card-bg)',
                        color: 'var(--accent-secondary)',
                        fontSize: '0.75rem',
                        fontFamily: 'monospace',
                        fontWeight: 500,
                        borderRadius: '6px',
                        border: '1px solid rgba(16, 185, 129, 0.3)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="card-project-links">
                  <button
                    onClick={() => handleLiveDemo(project.liveUrl)}
                    className="btn btn-primary"
                  >
                    {project.liveUrl === project.githubUrl ? 'View Project' : 'Live Demo'}
                  </button>
                  {project.liveUrl !== project.githubUrl && (
                    <button
                      onClick={() => handleGithubView(project.githubUrl)}
                      className="btn btn-secondary"
                    >
                      View Code
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a
            href="https://github.com/WebbOfCode"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            More on GitHub
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
