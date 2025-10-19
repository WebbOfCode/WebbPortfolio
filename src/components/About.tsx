'use client'

import Image from 'next/image'

export default function About() {
      // //////bghgjgn experience timeline - mix of military/tech/bartending  
  const experience = [
    {
      title: "Help Desk Team Chief",
      company: "U.S. Army - IT Specialist",
      period: "2016 - 2018",
      description: "Led over 5,000 network configuration changes and user support tickets for classified/unclassified systems. Managed and troubleshot enterprise networking equipment including VoIP phones and wireless access points. Oversaw $750,000 in communications equipment with zero losses."
    },
    {
      title: "Information Systems Maintainer", 
      company: "U.S. Army - Daegu, South Korea",
      period: "2014 - 2016",
      description: "Maintained and troubleshot network devices (switches, routers, firewalls). Ensured secure communications using DoD electronic key management systems. Performed installations and preventive maintenance on cybersecurity devices."
    },
          // bartending keeps the bills paid while in school
    {
      title: "Bartender Team Lead",
      company: "Nashville Symphony, Bridgestone Arena, Nissan Stadium",
      period: "2018 - Present", 
      description: "Managed high-volume bar operations at major event venues. Trained and supervised staff to ensure efficiency and top-tier customer service. Maintained compliance with alcohol service regulations and venue policies."
    },
    {
      title: "Bachelor's in Computer Science",
      company: "Middle Tennessee State University",
      period: "2024 - May 2026",
      description: "Bachelor of Science in Computer Science with Cybersecurity concentration (3.1 GPA). Coursework: Linux Essentials for Cybersecurity, Data Algorithms & Structures, Python for Business Applications, Data Analysis, Ethics and Computing Technology."
    },
    {
      title: "Associate of Science - Computer Science", 
      company: "Nashville State Community College",
      period: "Jan 2022 - May 2024",
      description: "Completed Associate degree in Computer Science. Built foundational knowledge in programming fundamentals, data structures, algorithms, and system administration while transitioning from military to civilian tech career."
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
        // geometric pattern with my actual photo
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 relative">
                    // layered rotating borders for visual interest
                <div className="absolute inset-0 border border-slate-600 rounded-sm rotate-12 opacity-20"></div>
                <div className="absolute inset-2 border border-blue-500 rounded-sm rotate-45 opacity-40"></div>
                <div className="absolute inset-4 border border-cyan-400 rounded-sm opacity-60"></div>
                <div className="w-20 h-20 absolute top-6 left-6 rounded-full border-2 border-slate-700 overflow-hidden shadow-lg opacity-90 hover:opacity-100 transition-opacity">
                  <Image
                    src="/headshot.jpg"
                    alt="Demarick Webb-Rivera"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About</h2>
          
          <div className="bg-slate-900/50 border-l-4 border-cyan-400 px-8 py-6 max-w-4xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
              Army veteran building secure, scalable systems.<br/>
              <span className="text-cyan-400">Currently studying CS at MTSU</span> with a cybersecurity focus.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">My Story</h3>
            
            <div className="space-y-8 text-slate-300">
              
              <div className="mb-8">
                <h4 className="text-cyan-400 font-semibold mb-3">Military Foundation</h4>
                <p className="text-slate-300 leading-relaxed">
                  Four years as an Army IT Specialist taught me that reliable systems aren't built by chance. 
                  I managed classified networks across two continents, handled $750K in critical infrastructure, 
                  and learned that security isn't just a feature—it's the foundation everything else relies on.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-cyan-400 font-semibold mb-3">Academic Foundation</h4>
                <p className="text-slate-300 leading-relaxed">
                  Completed Associate of Science in Computer Science at Nashville State Community College (Jan 2022 - May 2024). 
                  Currently pursuing Bachelor's in Computer Science with cybersecurity concentration at MTSU. 
                  Military discipline translates directly to systematic debugging, secure coding practices, and deadline-driven development cycles.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-cyan-400 font-semibold mb-3">How I Debug</h4>
                <p className="text-slate-300 leading-relaxed">
                  I debug like I troubleshoot Army networks - systematically, coffee-fueled, until it works. 
                  Break it down, Google the weird error, try stuff until something clicks. 
                  Usually works around 2am with enough caffeine.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-cyan-400 font-semibold mb-3">Beyond Code</h4>
                <p className="text-slate-300 leading-relaxed">
                  Behind the bar at Nashville's biggest venues, I've learned to read people, handle pressure, 
                  and deliver under chaos. FSU Seminoles bleed through my veins on Saturdays. 
                  Live music feeds the soul, good food fuels the grind, and art keeps the mind creative. 
                  Family anchors everything - they're my why for all the late nights coding and studying.
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700">
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full border border-slate-600">Bartending</span>
                  <span 
                    className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full border border-slate-600 hover:bg-garnet-600 transition-colors cursor-pointer" 
                    onMouseEnter={() => console.log('Go Noles 🍢')}
                  >
                    FSU Football
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full border border-slate-600">Live Music</span>
                  <span className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full border border-slate-600">Photography</span>
                </div>
              </div>
              
            </div>
            
            {/* Download Resume Button */}
            <div className="mt-8">
              <a
                href="/ResumeWebb-1.docx"
                download="Demarick_Webb_Resume.docx"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-400 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Experience</h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-600">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                  <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                    <h4 className="text-lg font-semibold text-white">{job.title}</h4>
                    <p className="text-blue-400 font-medium">{job.company}</p>
                    <p className="text-sm text-slate-400 mb-2">{job.period}</p>
                    <p className="text-slate-300">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}