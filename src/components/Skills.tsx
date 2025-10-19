'use client'

import { useInView } from '@/hooks/useInView'

export default function Skills() {
  // Use the hook at the top level
  const [ref, isInView] = useInView(0.3, '-50px')

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 87, color: "bg-gradient-to-r from-blue-400 to-blue-500" }, // honestly use this daily
        { name: "C++", level: 79, color: "bg-gradient-to-r from-blue-600 to-indigo-600" }, // still figuring out pointers sometimes
        { name: "JavaScript", level: 83, color: "bg-gradient-to-r from-yellow-500 to-yellow-400" }, // async/await is my friend
        { name: "React", level: 76, color: "bg-gradient-to-r from-cyan-400 to-blue-500" }, // hooks make sense now
        { name: "SQL", level: 82, color: "bg-gradient-to-r from-blue-700 to-blue-600" }, // JOIN queries all day
        { name: "HTML/CSS", level: 89, color: "bg-gradient-to-r from-orange-500 to-red-500" }, // flexbox wizard
      ]
    },
    {
      title: "Real World Tools", // what I actually use
      skills: [
        { name: "Git", level: 88, color: "bg-gradient-to-r from-red-600 to-orange-500" }, // merge conflicts happen
        { name: "VS Code", level: 93, color: "bg-gradient-to-r from-blue-600 to-cyan-500" }, // extensions galore  
        { name: "Vite", level: 74, color: "bg-gradient-to-r from-purple-500 to-purple-400" }, // fast builds
        { name: "Node.js", level: 71, color: "bg-gradient-to-r from-green-600 to-green-500" }, // backend stuff
        { name: "Next.js", level: 72, color: "bg-gradient-to-r from-slate-100 to-slate-300" }, // this portfolio runs on it
        { name: "Tailwind CSS", level: 84, color: "bg-gradient-to-r from-teal-500 to-cyan-400" }, // utility classes FTW
      ]
    },
    {
      title: "Networking & Security",
      skills: [
        { name: "Socket Programming", level: 88, color: "bg-gradient-to-r from-green-500 to-green-400" },
        { name: "SSH", level: 90, color: "bg-gradient-to-r from-slate-600 to-slate-500" },
        { name: "Wireshark", level: 82, color: "bg-gradient-to-r from-blue-500 to-blue-400" },
        { name: "Nmap", level: 85, color: "bg-gradient-to-r from-red-500 to-red-400" },
        { name: "Port Proxying", level: 80, color: "bg-gradient-to-r from-yellow-600 to-yellow-500" },
        { name: "TCP/IP", level: 87, color: "bg-gradient-to-r from-purple-600 to-purple-500" },
      ]
    },
    {
      title: "Professional Experience",
      skills: [
        { name: "Bartending & Service", level: 95, color: "bg-gradient-to-r from-amber-500 to-yellow-500" },
        { name: "Team Leadership", level: 92, color: "bg-gradient-to-r from-red-600 to-red-500" },
        { name: "High-Pressure Management", level: 90, color: "bg-gradient-to-r from-orange-600 to-orange-500" },
        { name: "Customer Relations", level: 88, color: "bg-gradient-to-r from-green-600 to-green-500" },
        { name: "Military Operations", level: 95, color: "bg-gradient-to-r from-slate-600 to-slate-500" },
        { name: "Problem Solving", level: 93, color: "bg-gradient-to-r from-purple-600 to-purple-500" },
      ]
    }
  ]

  const otherSkills = [
    "WSL2", "PowerShell", "Bash", "Linux", "Machine Learning", "Data Analysis", 
    "Network Administration", "Cybersecurity", "System Administration", "TCP/UDP Protocols",
    "Traffic Analysis", "Dashboard Development", "Multi-branch Git", "Remote Connectivity",
    "DoD Electronic Key Management", "Cisco Hardware", "Classified Networks",
    "Venue Management", "High-Volume Operations", "Event Coordination", "FSU Football Analysis",
    "Live Music Industry", "Food & Beverage", "Photography", "Content Creation"
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Technologies and tools I work with to build secure, scalable solutions.
          </p>
        </div>

        {/* Technical Skills with Progress Bars */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`bg-slate-900/30 backdrop-blur-sm border border-slate-700/40 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-700 group hover:shadow-lg hover:shadow-cyan-500/10 ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${categoryIndex * 200}ms` // Staggered appearance
                }}
              >
                <h3 className="text-lg font-semibold text-slate-200 mb-6 text-center group-hover:text-cyan-300 transition-colors duration-300">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className={`text-cyan-400 text-sm transition-all duration-500 ${
                          isInView ? 'opacity-100' : 'opacity-0'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-800/60 rounded-full h-2 overflow-hidden mb-4">
                        <div
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1200 ease-out transform origin-left shadow-sm ${
                            // python bar gets a slight tweak - been adjusting this one manually
                            skill.name === 'Python' ? 'h-2.5' : ''
                          }`}
                          style={{ 
                            width: isInView ? `${skill.level}%` : '0%',
                            transitionDelay: `${(skillIndex * 100) + (categoryIndex * 200)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-slate-800/50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Additional Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {otherSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-slate-600 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Credentials and Training */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-black border border-green-500/30 p-6">
            <div className="border-b border-green-500/30 pb-2 mb-4">
              <h3 className="text-sm font-mono text-green-400 uppercase tracking-wider">education.log</h3>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div>
                <div className="text-cyan-400 mb-1">[2024-2026] BS_COMPUTER_SCIENCE</div>
                <div className="text-slate-300 text-xs">→ MTSU | Cybersecurity Focus | GPA: 3.1</div>
              </div>
              <div>
                <div className="text-cyan-400 mb-1">[2022-2024] AS_COMPUTER_SCIENCE</div>
                <div className="text-slate-300 text-xs">→ Nashville State CC | Foundation Complete</div>
              </div>
            </div>
          </div>

          <div className="bg-black border border-green-500/30 p-6">
            <div className="border-b border-green-500/30 pb-2 mb-4">
              <h3 className="text-sm font-mono text-green-400 uppercase tracking-wider">clearance.sec</h3>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div>
                <div className="text-red-400 mb-1">[ACTIVE] SECRET_CLEARANCE</div>
                <div className="text-slate-300 text-xs">→ DoD | Security Level: SECRET</div>
              </div>
              <div>
                <div className="text-yellow-400 mb-1">[CERT] ARMY_IT_LEADERSHIP</div>
                <div className="text-slate-300 text-xs">→ Ft. Gordon, GA | Advanced Skills</div>
              </div>
              <div>
                <div className="text-yellow-400 mb-1">[CERT] STRUCTURED_DEV</div>
                <div className="text-slate-300 text-xs">→ Ft. Bliss, TX | Professional Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}