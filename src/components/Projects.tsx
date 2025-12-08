'use client'

import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      id: 0,
      title: "TrafficWiz",
      problem: "Nashville lacks accurate real-time traffic prediction tools for commuters and city planners.",
      approach: "Built ML-powered dashboard using React frontend with Python/Scikit-learn backend analyzing historical congestion patterns and PostgreSQL data storage.",
      result: "Achieved 15% better prediction accuracy than existing city tools. Earned A grade on MTSU capstone project demonstrating real-world ML application.",
      technologies: ["React", "Python", "Scikit-learn", "PostgreSQL"],
      image: "/trafficwiz.svg",
      liveUrl: "https://github.com/WebbOfCode/TrafficWiz",
      githubUrl: "https://github.com/WebbOfCode/TrafficWiz",
      featured: true,
      year: "2024"
    },
    {
      id: 1,
      title: "Safe URL Checker",
      problem: "Phishing attacks increasingly target non-technical users who can't identify malicious links.",
      approach: "Developed Next.js security tool integrating multiple threat intelligence APIs to analyze URLs for malicious content, malware, and phishing indicators.",
      result: "Real-time threat detection with intuitive UI. Demonstrates security-first development approach and API integration skills.",
      technologies: ["Next.js", "TypeScript", "Vercel", "Security APIs"],
      image: "/safeurlcheck.svg",
      liveUrl: "https://safeurlcheck.vercel.app/",
      githubUrl: "https://github.com/WebbOfCode/COdeRivers",
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "Smart Wheel Research Simulator",
      problem: "Vanderbilt robotics research needed a way to study driver reactions and cognitive load during autonomous vehicle transitions.",
      approach: "Built Unity-based driving simulator with split-screen rendering that integrates cognitive minigames (Stroop tests, math puzzles) alongside main gameplay. Used C# for game logic and speech recognition integration.",
      result: "Research-grade simulator enabling real-time driver attention monitoring. Supports Vanderbilt's development of intelligent steering wheels that improve autonomous vehicle safety.",
      technologies: ["Unity", "C#", "Speech Recognition", "FFmpeg"],
      image: "/driving.svg",
      liveUrl: "https://github.com/WebbOfCode/sample9632",
      githubUrl: "https://github.com/WebbOfCode/sample9632",
      featured: true,
      year: "2024"
    },
    {
      id: 3,
      title: "PantryMate",
      problem: "Food waste costs households money and impacts environment due to forgotten expiration dates.",
      approach: "Created AI-powered inventory tracker with Python/OpenCV barcode scanning, React frontend, and Flask backend. Auto-suggests recipes based on available ingredients.",
      result: "Functional prototype demonstrating computer vision integration and full-stack development. Reduces food waste through intelligent tracking.",
      technologies: ["Python", "React", "OpenCV", "Flask"],
      image: "/pantrymate.svg",
      liveUrl: "https://pantry-mate-khaki.vercel.app/",
      githubUrl: "https://github.com/WebbOfCode/PantryMate",
      featured: true,
      year: "2024"
    },
    {
      id: 4,
      title: "Cadence",
      problem: "Veterans face overwhelming transition from military to civilian life with unclear career paths, confusing benefits, and lack of personalized guidance.",
      approach: "Built full-stack Next.js application with OpenAI GPT-4o integration that generates personalized mission plans. Features multi-step onboarding flow, interactive dashboard with task tracking, progress visualization, search/filtering, and resource recommendations using Zustand state management and Zod validation.",
      result: "Production-deployed tool helping veterans transition smoothly. Demonstrates full-stack expertise with AI integration, sophisticated state management, and deployment to Vercel. Handles complex user flows and data persistence.",
      technologies: ["Next.js", "TypeScript", "OpenAI API", "Zustand", "Tailwind CSS", "Framer Motion"],
      image: "/cadence.svg",
      liveUrl: "https://cadence-blond.vercel.app/",
      githubUrl: "https://github.com/WebbOfCode/cadence",
      featured: true,
      year: "2024"
    },
    {
      id: 5,
      title: "🔐 Network Security Tools",
      description: "Collection of networking and security tools including socket programming, SSH configurations, Wireshark analysis, Nmap scanning, and port proxying implementations.",
      technologies: ["Python", "C++", "Wireshark", "Nmap", "SSH", "Socket Programming"],
      image: "/security-tools.svg",
      liveUrl: "https://github.com/WebbOfCode",
      githubUrl: "https://github.com/WebbOfCode",
      featured: false
    },
    {
      id: 6,
      title: "💬 Chat-Room MTSU",
      description: "Real-time chat application using TCP sockets in C++. Cross-platform messaging system supporting communication from iPad to PC via SSH with multi-threading.",
      technologies: ["C++", "TCP Sockets", "SSH", "Threading", "Network Programming"],
      image: "/chatroom.svg",
      liveUrl: "https://github.com/WebbOfCode/Chat-Room-MTSU",
      githubUrl: "https://github.com/WebbOfCode/Chat-Room-MTSU",
      featured: false
    },
    {
      id: 7,
      title: "📊 Data & ML Integration",
      description: "Python backends with traffic prediction models and dashboard visualization. Includes data analysis, machine learning model integration, and real-time data processing.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Visualization", "Backend"],
      image: "/ml-integration.svg",
      liveUrl: "https://github.com/WebbOfCode",
      githubUrl: "https://github.com/WebbOfCode",
      featured: false
    },
    {
      id: 8,
      title: "🌐 Portfolio Website",
      description: "This very portfolio website showcasing responsive design, smooth animations, and modern web practices. Built with Next.js, TypeScript, and Tailwind CSS.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      image: "/portfolio-site.svg",
      liveUrl: "#",
      githubUrl: "https://github.com/WebbOfCode/portfolio",
      featured: false
    },
    {
      id: 9,
      title: "⚙️ System Administration",
      description: "Advanced systems work including WSL2 configurations, PowerShell scripting, Bash automation, and cross-platform development environments.",
      technologies: ["WSL2", "PowerShell", "Bash", "Linux", "System Admin", "DevOps"],
      image: "/sysadmin.svg",
      liveUrl: "https://github.com/WebbOfCode",
      githubUrl: "https://github.com/WebbOfCode",
      featured: false
    }
  ]

  const handleLiveDemo = (url: string, title: string) => {
    if (url === '#') {
      alert(`This is the ${title} you're currently viewing!`)
      return
    }
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleGithubView = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="projects" className="py-16 px-6 lg:px-8 bg-bg-elevated">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-manrope font-bold text-accent-gold mb-4">Here's some Work I'm Proud Of</h2>
          <p className="text-lg text-text-muted max-w-2xl">
            Projects that went from idea to deployed. Each one taught me foundational skills, and I learned valuable lessons about building real products.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.filter(project => project.featured).map((project) => (
            <div key={project.id} className="bg-bg-main border border-border-default rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200">
              <div className="relative group">
                <Image 
                  src={project.image} 
                  alt={`${project.title} screenshot`}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                
                {/* Year badge */}
                <div className="absolute top-4 left-4 bg-bg-elevated/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-text-muted border border-border-default">
                  {project.year}
                </div>
                
                {/* Action buttons */}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-5 transition-all duration-200 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="flex space-x-3">
                    {project.liveUrl !== project.githubUrl && (
                      <button
                        onClick={() => handleLiveDemo(project.liveUrl, project.title)}
                        className="bg-bg-elevated backdrop-blur-sm text-text-primary px-4 py-2 rounded-lg font-semibold hover:bg-accent-gold hover:text-black transition-colors duration-200 border border-border-default"
                      >
                        Try it
                      </button>
                    )}
                    <button
                      onClick={() => handleGithubView(project.githubUrl)}
                      className="bg-accent-gold text-black px-4 py-2 rounded-lg font-semibold hover:bg-accent-gold-dark transition-colors duration-200"
                    >
                      Code
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-accent-gold mb-3">{project.title}</h3>
                
                {/* Case Study Format */}
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-accent-teal uppercase tracking-wide">Problem</span>
                    <p className="text-sm text-text-muted mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-accent-teal uppercase tracking-wide">Approach</span>
                    <p className="text-sm text-text-muted mt-1">{project.approach}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-accent-teal uppercase tracking-wide">Result</span>
                    <p className="text-sm text-text-muted mt-1">{project.result}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-bg-elevated text-accent-teal text-xs font-medium rounded-lg border border-accent-teal/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-text-primary mb-8">Additional Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project) => (
              <div key={project.id} className="bg-bg-main border border-border-default rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="relative group">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={144}
                    className="w-full h-32 object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="flex space-x-2">
                      {project.liveUrl !== project.githubUrl && (
                        <button
                          onClick={() => handleLiveDemo(project.liveUrl, project.title)}
                          className="bg-bg-elevated text-text-primary px-3 py-1 rounded text-sm font-semibold hover:bg-accent-teal hover:text-black transition-colors duration-200 border border-border-default"
                        >
                          Demo
                        </button>
                      )}
                      <button
                        onClick={() => handleGithubView(project.githubUrl)}
                        className="bg-accent-gold text-black px-3 py-1 rounded text-sm font-semibold hover:bg-accent-gold-dark transition-colors duration-200"
                      >
                        Code
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-accent-gold mb-2">{project.title}</h4>
                  <p className="text-text-muted text-sm mb-3 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-bg-elevated text-accent-teal text-xs rounded-full border border-accent-teal/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Now & Uses sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Now */}
          <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Currently Working On
            </h3>
            <ul className="space-y-2 text-text-secondary">
              <li>• Completing CS degree at MTSU (May 2026)</li>
              <li>• Building restaurant POS system in React</li>
              <li>• Exploring Three.js for 3D web experiences</li>
              <li>• Contributing to open source projects</li>
            </ul>
          </div>

          {/* Uses */}
          <div className="bg-warm-white rounded-xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Tech Stack</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>• VS Code + GitHub Copilot</li>
              <li>• React, Next.js, Tailwind CSS</li>
              <li>• Python for backend & ML work</li>
              <li>• PostgreSQL & MongoDB</li>
              <li>• Vercel & AWS for deployment</li>
            </ul>
          </div>
        </div>

        {/* View More Projects CTA */}
        <div className="text-center">
          <a
            href="https://github.com/WebbOfCode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-700 border border-gray-600 text-white font-medium rounded-xl hover:shadow-card transition-all duration-200 hover-lift"
          >
            More on GitHub
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
