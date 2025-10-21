'use client'

import { useInView } from '@/hooks/useInView'

export default function Skills() {
  // Use the hook at the top level
  const [ref, isInView] = useInView(0.3, '-50px')

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
  { name: "Python", level: 87, color: "bg-gradient-to-r from-amber-400 to-amber-500" }, // honestly use this daily
  { name: "C++", level: 79, color: "bg-gradient-to-r from-slate-600 to-emerald-600" }, // still figuring out pointers sometimes
        { name: "JavaScript", level: 83, color: "bg-gradient-to-r from-yellow-500 to-yellow-400" }, // async/await is my friend
  { name: "React", level: 76, color: "bg-gradient-to-r from-emerald-400 to-amber-500" }, // hooks make sense now
  { name: "SQL", level: 82, color: "bg-gradient-to-r from-slate-600 to-slate-500" }, // JOIN queries all day
        { name: "HTML/CSS", level: 89, color: "bg-gradient-to-r from-orange-500 to-red-500" }, // flexbox wizard
      ]
    },
    {
      title: "Real World Tools", // what I actually use
      skills: [
        { name: "Git", level: 88, color: "bg-gradient-to-r from-red-600 to-orange-500" }, // merge conflicts happen
  { name: "VS Code", level: 93, color: "bg-gradient-to-r from-emerald-500 to-amber-400" }, // extensions galore  
  { name: "Vite", level: 74, color: "bg-gradient-to-r from-slate-500 to-slate-400" }, // fast builds
        { name: "Node.js", level: 71, color: "bg-gradient-to-r from-green-600 to-green-500" }, // backend stuff
        { name: "Next.js", level: 72, color: "bg-gradient-to-r from-slate-100 to-slate-300" }, // this portfolio runs on it
  { name: "Tailwind CSS", level: 84, color: "bg-gradient-to-r from-amber-300 to-emerald-300" }, // utility classes FTW
      ]
    },
    {
      title: "Networking & Security",
      skills: [
        { name: "Socket Programming", level: 88, color: "bg-gradient-to-r from-green-500 to-green-400" },
        { name: "SSH", level: 90, color: "bg-gradient-to-r from-slate-600 to-slate-500" },
  { name: "Wireshark", level: 82, color: "bg-gradient-to-r from-slate-600 to-slate-500" },
        { name: "Nmap", level: 85, color: "bg-gradient-to-r from-red-500 to-red-400" },
        { name: "Port Proxying", level: 80, color: "bg-gradient-to-r from-yellow-600 to-yellow-500" },
  { name: "TCP/IP", level: 87, color: "bg-gradient-to-r from-slate-600 to-emerald-500" },
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
  { name: "Problem Solving", level: 93, color: "bg-gradient-to-r from-amber-400 to-emerald-400" },
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-[Inter] text-white mb-3">Core Strengths</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">Short, scannable focus areas — what I reach for first when solving problems.</p>
        </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-900/30 border border-slate-700/40 rounded-md p-6">
            <h4 className="text-sm text-amber-300 font-semibold mb-3">Core Languages</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>Python</li>
              <li>C++</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="bg-slate-900/30 border border-slate-700/40 rounded-md p-6">
            <h4 className="text-sm text-amber-300 font-semibold mb-3">Frameworks &amp; Tools</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Git / VS Code</li>
            </ul>
          </div>

          <div className="bg-slate-900/30 border border-slate-700/40 rounded-md p-6">
            <h4 className="text-sm text-amber-300 font-semibold mb-3">Security &amp; Networking</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>SSH</li>
              <li>Wireshark</li>
              <li>Nmap</li>
              <li>Socket Programming</li>
            </ul>
          </div>
        </div>

        <div className="text-sm text-slate-400 italic mb-8">Military discipline + bartender hustle = dependable, people-first engineering.</div>

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