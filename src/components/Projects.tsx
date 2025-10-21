'use client'

import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      id: 0,
      title: "🚦 TrafficWiz",
      description: "Built this for an MTSU Database Management Capstone project - Nashville traffic data meets ML. Predicts traffic better than existing city dashboards and navigation apps.",
      technologies: ["React", "Python", "Machine Learning", "SQL", "Dashboard", "Git"],
      image: "/trafficwiz.svg",
      liveUrl: "https://github.com/WebbOfCode/TrafficWiz",
      githubUrl: "https://github.com/WebbOfCode/TrafficWiz",
      featured: true
    },
    {
      id: 1,
      title: "🔒 Safe URL Checker",
      description: "Checks if URLs are sketchy or not. I made this tool after falling for one too many 'you won a free iPhone' links. Works surprisingly well.",
      technologies: ["Next.js", "TypeScript", "Security", "API Integration", "Vercel"],
      image: "/safeurlcheck.svg",
      liveUrl: "https://safeurlcheck.vercel.app/",
      githubUrl: "https://github.com/WebbOfCode/COdeRivers",
      featured: true
    },
    {
      id: 2,
      title: " Chat-Room MTSU",
      description: "C++ chat app using TCP Sockets. Two people can talk to each other across different devices. Revolutionary stuff lol. I actually got it working from my iPad to PC using SSH, which felt pretty good.",
      technologies: ["C++", "TCP Sockets", "Networking", "SSH", "Real-time Communication"],
      image: "/chatroom.svg",
      liveUrl: "https://github.com/WebbOfCode/Chat-Room-MTSU",
      githubUrl: "https://github.com/WebbOfCode/Chat-Room-MTSU",
      featured: true
    },
    {
      id: 3,
      title: "PantryMate",
      description: "PantryMate — AI-powered food inventory tracker that helps people see what's in their pantry, plan meals, and reduce food waste.",
      technologies: ["Python", "React", "AI", "Barcode Scanner"],
      image: "/pantrymate.svg",
      liveUrl: "https://pantry-mate-khaki.vercel.app/",
      githubUrl: "https://github.com/WebbOfCode/PantryMate",
      featured: true
    },
    {
      id: 4,
      title: "🔐 Network Security Tools",
      description: "Collection of networking and security tools including socket programming, SSH configurations, Wireshark analysis, Nmap scanning, and port proxying implementations.",
      technologies: ["Python", "C++", "Wireshark", "Nmap", "SSH", "Socket Programming"],
      image: "/security-tools.svg",
      liveUrl: "https://github.com/WebbOfCode",
      githubUrl: "https://github.com/WebbOfCode",
      featured: false
    },
    {
      id: 5,
      title: "📊 Data & ML Integration",
      description: "Python backends with traffic prediction models and dashboard visualization. Includes data analysis, machine learning model integration, and real-time data processing.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Visualization", "Backend"],
      image: "/ml-integration.svg",
      liveUrl: "https://github.com/WebbOfCode",
      githubUrl: "https://github.com/WebbOfCode",
      featured: false
    },
    {
      id: 6,
      title: "🌐 Portfolio Website",
      description: "This very portfolio website showcasing responsive design, smooth animations, and modern web practices. Built with Next.js, TypeScript, and Tailwind CSS.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      image: "/portfolio-site.svg",
      liveUrl: "#",
      githubUrl: "https://github.com/WebbOfCode/portfolio",
      featured: false
    },
    {
      id: 7,
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Here are some recent projects that showcase my technical skills and problem-solving approach.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Featured Work</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={project.id} className={`bg-slate-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
                index === 0 ? 'transform translate-x-1 md:w-[calc(100%+4px)]' : ''
              }`}>
                <div className="relative group overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Enhanced overlay with project stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-between p-4">
                    
                    {/* Top: Quick stats */}
                    <div className="flex justify-between items-start">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                          <span className="text-white text-xs font-medium">
                          {project.technologies.length} Technologies
                        </span>
                      </div>
                        <div className="bg-emerald-500/20 backdrop-blur-sm rounded-full px-3 py-1 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                          <span className="text-emerald-300 text-xs font-medium">
                            ✓ {project.featured ? 'Featured' : 'Production'}
                          </span>
                        </div>
                    </div>

                    {/* Bottom: Action buttons */}
                    <div className="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                      {project.liveUrl !== project.githubUrl && (
                        <button
                          onClick={() => handleLiveDemo(project.liveUrl, project.title)}
                          className="bg-black border border-amber-500/30 text-amber-300 hover:bg-amber-500/10 hover:border-amber-400 px-4 py-2 font-mono text-sm font-medium transition-all duration-200 flex items-center"
                        >
                          <span className="text-amber-300 mr-1">$</span>
                          ./run_demo.sh
                        </button>
                      )}
                      <button
                        onClick={() => handleGithubView(project.githubUrl)}
                        className="bg-black border border-amber-500/30 text-amber-300 hover:bg-amber-500/10 hover:border-amber-400 px-4 py-2 font-mono text-sm font-medium transition-all duration-200 flex items-center"
                      >
                        <span className="text-amber-300 mr-1">$</span>
                        ./git_clone.sh
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-800 border border-green-500/30 text-green-400 text-xs font-mono"
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

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project) => (
              <div key={project.id} className="bg-slate-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="relative group">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={144}
                    className="w-full h-36 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                      {project.liveUrl !== project.githubUrl && (
                        <button
                          onClick={() => handleLiveDemo(project.liveUrl, project.title)}
                          className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors duration-200"
                        >
                          Demo
                        </button>
                      )}
                      <button
                        onClick={() => handleGithubView(project.githubUrl)}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors duration-200"
                      >
                        Code
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                  <p className="text-slate-300 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-800 border border-emerald-500/20 text-emerald-300 text-xs rounded-full"
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

        {/* View More Projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/WebbOfCode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-amber-600 text-base font-medium rounded-md text-amber-400 hover:bg-amber-600 hover:text-white transition-colors duration-200"
          >
            View More on GitHub
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
