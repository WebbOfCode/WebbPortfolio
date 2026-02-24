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
      title: "CADENCE / VETERAN TRANSITION PLATFORM",
      problem: "200,000+ SERVICE MEMBERS TRANSITION ANNUALLY WITH 44% FEELING UNPREPARED EXISTING RESOURCES ARE SCATTERED WITH LIMITED PERSONALIZATION",
      approach: "BUILT FULL STACK NEXT JS PLATFORM WITH GPT 4O INTEGRATION AFTER INTERVIEWING 12 VETERANS MULTI STEP ONBOARDING WITH ZUSTAND STATE AND STRUCTURED PROMPTS",
      result: "PRODUCTION DEPLOYED PLATFORM WITH 95% TASK COMPLETION RATE IN TESTING ZERO TRUST SECURITY PROTECTS PII",
      technologies: ["Next.js", "TypeScript", "OpenAI GPT-4o", "Zustand", "Tailwind CSS"],
      image: "/cadence.svg",
      liveUrl: "https://cadence-blond.vercel.app/",
      githubUrl: "https://github.com/WebbOfCode/cadence",
      year: "2024"
    },
    {
      id: 2,
      title: "TRAFFICWIZ",
      problem: "NASHVILLE LACKS ACCURATE REAL TIME TRAFFIC PREDICTION TOOLS FOR COMMUTERS AND CITY PLANNERS",
      approach: "BUILT ML DASHBOARD WITH REACT FRONTEND AND PYTHON SCIKIT LEARN BACKEND WITH POSTGRESQL",
      result: "15% BETTER PREDICTION ACCURACY THAN EXISTING CITY TOOLS MTSU CAPSTONE A GRADE",
      technologies: ["React", "Python", "Scikit-learn", "PostgreSQL"],
      image: "/trafficwiz.svg",
      liveUrl: "https://github.com/WebbOfCode/TrafficWiz",
      githubUrl: "https://github.com/WebbOfCode/TrafficWiz",
      year: "2024"
    },
    {
      id: 3,
      title: "SAFE URL CHECKER",
      problem: "PHISHING ATTACKS TARGET NON TECHNICAL USERS WHO CANNOT IDENTIFY MALICIOUS LINKS",
      approach: "NEXT JS SECURITY TOOL INTEGRATING MULTIPLE THREAT INTELLIGENCE APIS FOR URL ANALYSIS",
      result: "REAL TIME THREAT DETECTION WITH SECURITY FIRST DEVELOPMENT AND API INTEGRATION",
      technologies: ["Next.js", "TypeScript", "Vercel", "Security APIs"],
      image: "/safeurlcheck.svg",
      liveUrl: "https://safeurlcheck.vercel.app/",
      githubUrl: "https://github.com/WebbOfCode/COdeRivers",
      year: "2024"
    },
    {
      id: 4,
      title: "SMART WHEEL RESEARCH SIMULATOR",
      problem: "VANDERBILT ROBOTICS NEEDED A WAY TO STUDY DRIVER REACTIONS AND COGNITIVE LOAD DURING AUTONOMOUS TRANSITIONS",
      approach: "BUILT UNITY DRIVING SIMULATOR WITH SPLIT SCREEN AND COGNITIVE MINIGAMES C# LOGIC AND SPEECH RECOGNITION",
      result: "RESEARCH GRADE SIMULATOR FOR REAL TIME ATTENTION MONITORING AND SAFER AUTONOMOUS TRANSITIONS",
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
          <h2 className="text-section" style={{ marginBottom: '1.5rem' }}>WORK</h2>
          <p className="text-body" style={{ maxWidth: '65ch' }}>
            PRODUCTION READY SYSTEMS THAT DEMONSTRATE FULL STACK CAPABILITY SECURITY FOCUS AND REAL WORLD PROBLEM SOLVING
          </p>
        </div>

        {/* Project Cards - Simple Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-project yzy-project"
            >
              <div className="relative group yzy-project-media">
                <Image 
                  src={project.image} 
                  alt={`${project.title} screenshot`}
                  width={600}
                  height={375}
                  className="card-project-image yzy-project-image"
                />
                
                {/* Year badge */}
                <div className="absolute top-4 left-4 yzy-mono" style={{ 
                  background: 'var(--yzy-ash)', 
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  color: 'var(--yzy-bone)',
                  border: '1px solid var(--yzy-ash)'
                }}>
                  {project.year}
                </div>
              </div>
              
              <div className="card-project-content">
                <h3 className="card-project-title">{project.title}</h3>
                
                {/* Case Study Format - Condensed */}
                <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span className="yzy-mono" style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--yzy-construction)', letterSpacing: '0.08em' }}>PROBLEM</span>
                    <p className="text-small" style={{ marginTop: '0.25rem', lineHeight: '1.6' }}>{project.problem}</p>
                  </div>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span className="yzy-mono" style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--yzy-construction)', letterSpacing: '0.08em' }}>APPROACH</span>
                    <p className="text-small" style={{ marginTop: '0.25rem', lineHeight: '1.6' }}>{project.approach}</p>
                  </div>
                  <div>
                    <span className="yzy-mono" style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--yzy-construction)', letterSpacing: '0.08em' }}>RESULT</span>
                    <p className="text-small" style={{ marginTop: '0.25rem', lineHeight: '1.6' }}>{project.result}</p>
                  </div>
                </div>
                
                {/* Tech Stack */}
                <div className="card-project-tags">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.375rem 0.75rem',
                        background: 'var(--yzy-ash)',
                        color: 'var(--yzy-bone)',
                        fontSize: '0.6875rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 500,
                        border: '1px solid var(--yzy-ash)'
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
                    {project.liveUrl === project.githubUrl ? 'VIEW WORK →' : 'VIEW WORK →'}
                  </button>
                  {project.liveUrl !== project.githubUrl && (
                    <button
                      onClick={() => handleGithubView(project.githubUrl)}
                      className="btn btn-secondary"
                    >
                      VIEW CODE
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
            MORE ON GITHUB →
          </a>
        </div>
      </div>
    </section>
  )
}
