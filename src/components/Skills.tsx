'use client'

export default function Skills() {
  const skillsByProficiency = {
    expert: {
      title: "Expert",
      description: "Daily use, production experience, deep understanding",
      skills: ["Python", "Git", "VS Code", "HTML/CSS", "JavaScript", "SQL"]
    },
    proficient: {
      title: "Proficient",
      description: "Regular use, project experience, solid foundation",
      skills: ["React", "C++", "Next.js", "Tailwind CSS", "PostgreSQL", "Linux Systems"]
    },
    familiar: {
      title: "Familiar",
      description: "Working knowledge, learning and building",
      skills: ["TypeScript", "Node.js", "Flask", "Machine Learning", "MongoDB", "AWS"]
    }
  }

  const specializedSkills = [
    {
      category: "Networking & Security",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      skills: ["TCP/IP", "Socket Programming", "SSH", "Wireshark", "Nmap", "Port Proxying", "DoD Security Protocols"]
    },
    {
      category: "Development Tools",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ["VS Code", "GitHub", "Vercel", "WSL2", "PowerShell", "Bash", "Vite"]
    },
    {
      category: "Frameworks & Libraries",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      skills: ["React", "Next.js", "Tailwind CSS", "Flask", "Scikit-learn", "OpenCV"]
    }
  ]

  return (
    <section id="skills" className="py-16 px-6 lg:px-8 bg-bg-main">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-manrope font-bold text-accent-gold mb-4">What I Can Do</h2>
          <p className="text-lg text-text-muted max-w-2xl">
            Built with these tools across real projects—not just tutorial-level knowledge.
          </p>
        </div>

        {/* Proficiency Levels */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {Object.entries(skillsByProficiency).map(([key, group]) => (
            <div key={key} className="bg-bg-elevated border border-border-default rounded-xl p-6">
              <div className="flex items-center mb-3">
                <div className={`w-3 h-3 rounded-full mr-2 ${
                  key === 'expert' ? 'bg-accent-teal' : 
                  key === 'proficient' ? 'bg-accent-gold' : 
                  'bg-blue-500'
                }`}></div>
                <h3 className="text-lg font-semibold text-text-primary">{group.title}</h3>
              </div>
              <p className="text-xs text-text-muted mb-4">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-bg-main text-text-primary text-sm rounded-lg border border-accent-teal/30 hover:border-accent-teal transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-text-primary mb-6">Specialized Areas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {specializedSkills.map((area) => (
              <div key={area.category} className="bg-bg-elevated border border-border-default rounded-xl p-6">
                <div className="flex items-center text-accent-gold mb-4">
                  {area.icon}
                  <h4 className="ml-2 font-bold text-accent-gold text-lg">{area.category}</h4>
                </div>
                <ul className="space-y-2">
                  {area.skills.map((skill) => (
                    <li key={skill} className="text-sm text-text-muted flex items-start">
                      <span className="text-accent-teal mr-2">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Strengths */}
        <div className="bg-accent-gold/10 border border-accent-gold/30 rounded-xl p-8 mb-12">
          <h3 className="text-xl font-semibold text-text-primary mb-4 text-center">
            Core Strengths
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-burnt-orange mb-2">4+</div>
              <div className="text-sm text-text-secondary">Years Military IT</div>
              <div className="text-xs text-text-secondary mt-1">Network operations & security</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-burnt-orange mb-2">$750K</div>
              <div className="text-sm text-text-secondary">Infrastructure Managed</div>
              <div className="text-xs text-text-secondary mt-1">Zero losses or security incidents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-burnt-orange mb-2">5,000+</div>
              <div className="text-sm text-text-secondary">Network Changes</div>
              <div className="text-xs text-text-secondary mt-1">Classified & unclassified systems</div>
            </div>
          </div>
        </div>

        {/* Credentials and Training */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/60 border border-gray-100 rounded-xl p-6">
            <div className="border-b border-gray-100 pb-4 mb-4">
              <h3 className="text-lg font-semibold text-text-primary">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-burnt-orange font-medium mb-1">BS Computer Science</div>
                <div className="text-text-secondary text-sm">MTSU • Cybersecurity Focus • Expected May 2026</div>
              </div>
              <div>
                <div className="text-burnt-orange font-medium mb-1">AS Computer Science</div>
                <div className="text-text-secondary text-sm">Nashville State CC • Completed 2024</div>
              </div>
            </div>
          </div>

          <div className="bg-white/60 border border-gray-100 rounded-xl p-6">
            <div className="border-b border-gray-100 pb-4 mb-4">
              <h3 className="text-lg font-semibold text-text-primary">Clearances & Background</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-burnt-orange font-medium mb-1">Secret Security Clearance</div>
                <div className="text-text-secondary text-sm">DoD • Active status</div>
              </div>
              <div>
                <div className="text-burnt-orange font-medium mb-1">Army IT Specialist</div>
                <div className="text-text-secondary text-sm">4 years • Network operations & cybersecurity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}