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
  const projects: ProjectMeta[] = [
    {
      id: 1,
      title: "CADENCE",
      problem: "OVER 200,000 SERVICE MEMBERS TRANSITION OUT EVERY YEAR, AND 44% FEEL UNPREPARED. EXISTING RESOURCES ARE SCATTERED, GENERIC, AND HARD TO NAVIGATE. VETERANS DESERVE BETTER.",
      approach: "I BUILT A FULL STACK PLATFORM USING NEXT.JS AND GPT-4O TO CREATE PERSONALIZED ROADMAPS. I INTERVIEWED 12 VETERANS TO UNDERSTAND REAL PAIN POINTS. MULTI-STEP ONBOARDING WITH ZUSTAND STATE MANAGEMENT AND STRUCTURED PROMPTS ENSURE EVERY USER GETS A TAILORED PLAN, NOT A GENERIC CHECKLIST.",
      result: "PRODUCTION-DEPLOYED PLATFORM WITH A 95% TASK COMPLETION RATE IN USER TESTING. BUILT WITH ZERO-TRUST SECURITY PRINCIPLES TO PROTECT SENSITIVE PII. THIS IS THE TOOL I WISH I HAD WHEN I TRANSITIONED.",
      technologies: ["Next.js", "TypeScript", "OpenAI GPT-4o", "Zustand", "Tailwind CSS"],
      image: "/cadence.svg",
      liveUrl: "https://cadence-blond.vercel.app/",
      githubUrl: "https://github.com/WebbOfCode/cadence",
      year: "2026"
    },
    {
      id: 2,
      title: "TRAFFICWIZ",
      problem: "NASHVILLE TRAFFIC IS NOTORIOUS, BUT EXISTING PREDICTION TOOLS ARE EITHER INACCURATE OR BUILT FOR CITY PLANNERS, NOT COMMUTERS. PEOPLE NEED ACTIONABLE INSIGHTS, NOT RAW DATA DUMPS.",
      approach: "I BUILT AN ML-POWERED DASHBOARD WITH A REACT FRONTEND AND PYTHON BACKEND USING SCIKIT-LEARN. TRAINED MODELS ON HISTORICAL TRAFFIC DATA TO PREDICT CONGESTION PATTERNS. POSTGRESQL FOR DATA PERSISTENCE. FOCUSED ON MAKING COMPLEX ML OUTPUTS ACTUALLY USABLE FOR REGULAR PEOPLE.",
      result: "15% BETTER PREDICTION ACCURACY THAN THE CITY'S EXISTING TOOLS. EARNED AN A IN MY MTSU CAPSTONE COURSE. PROVED I CAN TAKE A PROJECT FROM DATA COLLECTION TO DEPLOYED PRODUCT.",
      technologies: ["React", "Python", "Scikit-learn", "PostgreSQL"],
      image: "/trafficwiz.svg",
      liveUrl: "https://github.com/WebbOfCode/TrafficWiz",
      githubUrl: "https://github.com/WebbOfCode/TrafficWiz",
      year: "2025"
    },
    {
      id: 3,
      title: "SAFE URL CHECKER",
      problem: "PHISHING ATTACKS ARE GETTING MORE SOPHISTICATED, AND NON-TECHNICAL USERS ARE THE MOST VULNERABLE. MOST PEOPLE CANNOT SPOT A MALICIOUS LINK UNTIL IT IS TOO LATE.",
      approach: "BUILT A SECURITY-FOCUSED TOOL USING NEXT.JS THAT INTEGRATES MULTIPLE THREAT INTELLIGENCE APIS. REAL-TIME URL ANALYSIS WITH CLEAR, ACTIONABLE RESULTS. NO SECURITY JARGON — JUST A SIMPLE VERDICT WITH CONTEXT.",
      result: "REAL-TIME THREAT DETECTION WITH SUB-SECOND RESPONSE TIMES. SECURITY-FIRST DEVELOPMENT PRACTICES INCLUDING INPUT SANITIZATION AND RATE LIMITING. A TOOL THAT ACTUALLY PROTECTS PEOPLE.",
      technologies: ["Next.js", "TypeScript", "Vercel", "Security APIs"],
      image: "/safeurlcheck.svg",
      liveUrl: "https://safeurlcheck.vercel.app/",
      githubUrl: "https://github.com/WebbOfCode/COdeRivers",
      year: "2025"
    },
    {
      id: 4,
      title: "SMART WHEEL RESEARCH SIMULATOR",
      problem: "VANDERBILT'S AUTONOMOUS VEHICLE RESEARCH TEAM NEEDED A WAY TO STUDY HOW DRIVERS REACT WHEN AUTONOMOUS SYSTEMS HAND BACK CONTROL. COGNITIVE LOAD AND REACTION TIME ARE HARD TO MEASURE IN THE REAL WORLD.",
      approach: "BUILT A UNITY-BASED DRIVING SIMULATOR WITH SPLIT-SCREEN COGNITIVE MINIGAMES TO TEST ATTENTION UNDER LOAD. C# LOGIC FOR REAL-TIME DATA COLLECTION AND SPEECH RECOGNITION FOR VOICE COMMANDS. DESIGNED TO GENERATE RESEARCH-GRADE DATA.",
      result: "RESEARCH-GRADE SIMULATOR DEPLOYED FOR ACTIVE STUDIES. ENABLES REAL-TIME ATTENTION MONITORING AND SAFER AUTONOMOUS TRANSITIONS. WORKING WITH PHD RESEARCHERS TAUGHT ME A LOT ABOUT BUILDING FOR EXACTING REQUIREMENTS.",
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
          <h2 className="text-section" style={{ marginBottom: '1.5rem' }}>SELECTED WORK</h2>
          <p className="text-body" style={{ maxWidth: '65ch' }}>
            THESE PROJECTS SHOW WHAT I CAN BUILD WHEN GIVEN A PROBLEM WORTH SOLVING. EACH ONE DEMONSTRATES FULL STACK CAPABILITY, SECURITY AWARENESS, AND A FOCUS ON REAL-WORLD IMPACT.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-project yzy-project yzy-project-card"
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
                <div className="yzy-project-year">
                  {project.year}
                </div>
              </div>
              
              <div className="card-project-content">
                <h3 className="card-project-title">{project.title}</h3>
                
                {/* Case Study Format */}
                <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span className="yzy-mono" style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--yzy-construction)', letterSpacing: '0.08em' }}>THE PROBLEM</span>
                    <p className="text-small" style={{ marginTop: '0.25rem', lineHeight: '1.6' }}>{project.problem}</p>
                  </div>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span className="yzy-mono" style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--yzy-construction)', letterSpacing: '0.08em' }}>MY APPROACH</span>
                    <p className="text-small" style={{ marginTop: '0.25rem', lineHeight: '1.6' }}>{project.approach}</p>
                  </div>
                  <div>
                    <span className="yzy-mono" style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--yzy-construction)', letterSpacing: '0.08em' }}>THE RESULT</span>
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
                    {project.liveUrl === project.githubUrl ? 'VIEW PROJECT →' : 'LIVE DEMO →'}
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
            SEE MORE ON GITHUB →
          </a>
        </div>
      </div>
    </section>
  )
}
