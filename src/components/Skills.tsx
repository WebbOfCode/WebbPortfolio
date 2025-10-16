export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, color: "bg-blue-400" },
        { name: "C++", level: 85, color: "bg-blue-600" },
        { name: "JavaScript", level: 88, color: "bg-yellow-500" },
        { name: "React", level: 82, color: "bg-blue-500" },
        { name: "SQL", level: 85, color: "bg-blue-700" },
        { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
      ]
    },
    {
      title: "Frameworks & Tools", 
      skills: [
        { name: "Vite", level: 80, color: "bg-purple-500" },
        { name: "Node.js", level: 78, color: "bg-green-600" },
        { name: "Git", level: 92, color: "bg-red-600" },
        { name: "VS Code", level: 95, color: "bg-blue-600" },
        { name: "Next.js", level: 75, color: "bg-gray-700" },
        { name: "Tailwind CSS", level: 85, color: "bg-teal-500" },
      ]
    },
    {
      title: "Networking & Security",
      skills: [
        { name: "Socket Programming", level: 88, color: "bg-green-500" },
        { name: "SSH", level: 90, color: "bg-gray-600" },
        { name: "Wireshark", level: 82, color: "bg-blue-500" },
        { name: "Nmap", level: 85, color: "bg-red-500" },
        { name: "Port Proxying", level: 80, color: "bg-yellow-600" },
        { name: "TCP/IP", level: 87, color: "bg-purple-600" },
      ]
    }
  ]

  const otherSkills = [
    "WSL2", "PowerShell", "Bash", "Linux", "Machine Learning", "Data Analysis", 
    "Network Administration", "Cybersecurity", "System Administration", "TCP/UDP Protocols",
    "Traffic Analysis", "Dashboard Development", "Multi-branch Git", "Remote Connectivity",
    "DoD Electronic Key Management", "Cisco Hardware (7975, 1140E, 1120SA)", "Classified Networks",
    "Help Desk Support", "Discrete Mathematics", "Ethics in Computing", "Customer Service"
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to build amazing digital experiences.
          </p>
        </div>

        {/* Technical Skills with Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
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

        {/* Certifications/Education */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg text-blue-400 font-medium">Bachelor of Science in Computer Science</h4>
                <p className="text-slate-300">Middle Tennessee State University - Murfreesboro, TN</p>
                <p className="text-slate-400 text-sm mb-2">Expected May 2026 | GPA: 3.1</p>
                <p className="text-slate-400 text-sm">Concentration: Cybersecurity</p>
              </div>
              <div>
                <h4 className="text-lg text-blue-400 font-medium">Associate of Science in Computer Science</h4>
                <p className="text-slate-300">Nashville State Community College - Nashville, TN</p>
                <p className="text-slate-400 text-sm">Graduated May 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Military Training & Clearance</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg text-blue-400 font-medium">Secret Security Clearance</h4>
                <p className="text-slate-300">U.S. Department of Defense</p>
                <p className="text-slate-400 text-sm">Active</p>
              </div>
              <div>
                <h4 className="text-lg text-blue-400 font-medium">Advanced Skills & Leadership Course, IT</h4>
                <p className="text-slate-300">Ft. Gordon, GA</p>
                <p className="text-slate-400 text-sm">U.S. Army</p>
              </div>
              <div>
                <h4 className="text-lg text-blue-400 font-medium">Structured Self-Development Course</h4>
                <p className="text-slate-300">Ft. Bliss, TX</p>
                <p className="text-slate-400 text-sm">U.S. Army</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}