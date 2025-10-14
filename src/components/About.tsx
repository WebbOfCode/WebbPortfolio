export default function About() {
  const experience = [
    {
      title: "Computer Science Student",
      company: "Middle Tennessee State University",
      period: "Current",
      description: "Coursework: CSCI 4/5300 — Advanced Systems & Networking, Cybersecurity, and Applied Programming. Focus on network systems, cybersecurity, and full-stack development."
    },
    {
      title: "U.S. Army Veteran", 
      company: "United States Army",
      period: "Military Service",
      description: "Served honorably, developing leadership, technical readiness, and operational precision. Gained strong teamwork, mission focus, and unwavering commitment to excellence."
    },
    {
      title: "Full-Stack Developer",
      company: "Personal Projects",
      period: "Ongoing", 
      description: "Building innovative applications including traffic analysis systems, chat applications, and web dashboards with modern technologies."
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            I&apos;m Demarick Webb-Rivera, a proud Army veteran turned software engineer studying Computer Science at MTSU. 
            I bring military discipline and technical expertise to every project I build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">My Story</h3>
            <div className="space-y-4 text-slate-300">
              <p>
                My journey began in the U.S. Army, where I developed the discipline, attention to detail, 
                and ability to thrive under pressure that I now bring to software engineering. Military 
                service instilled in me strong leadership, technical readiness, and operational precision.
              </p>
              <p>
                Currently studying Computer Science at Middle Tennessee State University, I focus on 
                network systems, cybersecurity, and full-stack application development. My coursework 
                in advanced systems and networking has given me a deep understanding of how technology 
                works at every level.
              </p>
              <p>
                I specialize in Python, C++, JavaScript, and modern frameworks, with particular expertise 
                in socket programming, network security, and machine learning integration. I&apos;m passionate 
                about building systems that are both innovative and secure.
              </p>
            </div>
            
            {/* Download Resume Button */}
            <div className="mt-8">
              <a
                href="/resumewebb-1.docx"
                download
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