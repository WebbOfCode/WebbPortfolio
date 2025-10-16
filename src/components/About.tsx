import Image from 'next/image'

export default function About() {
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
    {
      title: "Bartender Team Lead",
      company: "Nashville Symphony, Bridgestone Arena, Nissan Stadium",
      period: "2018 - Present", 
      description: "Managed high-volume bar operations at major event venues. Trained and supervised staff to ensure efficiency and top-tier customer service. Maintained compliance with alcohol service regulations and venue policies."
    },
    {
      title: "Computer Science Student",
      company: "Middle Tennessee State University",
      period: "May 2026",
      description: "Bachelor of Science in Computer Science with Cybersecurity concentration (3.1 GPA). Coursework: Linux Essentials for Cybersecurity, Data Algorithms & Structures, Python for Business Applications, Data Analysis, Ethics and Computing Technology."
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Small subtle headshot - out of the way */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full border-2 border-slate-700 overflow-hidden shadow-lg opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/headshot.jpg"
                alt="Demarick Webb-Rivera"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            I&apos;m Demarick Webb-Rivera, a dedicated IT professional with experience in help desk support, cybersecurity, 
            and network troubleshooting. Army veteran turned Computer Science student at MTSU. When I&apos;m not working on tech projects, 
            you&apos;ll find me spending quality time with my wife and family, cheering for the Florida State Seminoles, catching live concerts, 
            exploring nature, or watching football with friends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">My Story</h3>
            <div className="space-y-4 text-slate-300">
              <p>
                My journey began as an Information Technology Specialist in the U.S. Army (2014-2018), where I served 
                as a Help Desk Team Chief in Colorado Springs and Information Systems Maintainer in Daegu, South Korea. 
                I led over 5,000 network moves, adds, and changes while managing $750,000 in communications equipment 
                with zero losses. I hold a Secret Security Clearance and developed strong leadership, problem-solving, 
                and customer service skills through both IT and hospitality roles.
              </p>
              <p>
                Currently pursuing a Bachelor of Science in Computer Science at Middle Tennessee State University 
                (3.1 GPA, expected May 2026) with a concentration in Cybersecurity. I also earned my Associate of 
                Science in Computer Science from Nashville State Community College in May 2024. My technical foundation 
                includes coursework in Linux Essentials for Cybersecurity, Data Algorithms & Structures, Python for 
                Business Applications, Security Plus, Penetration Testing and Ethical Hacking, and Data Analysis.
              </p>
              <p>
                My military experience includes maintaining and troubleshooting network infrastructure (enterprise switches, 
                routers, firewalls), ensuring secure communications using government encryption and key management systems, 
                and performing installations on cybersecurity devices. I supported both classified and unclassified networks, 
                managing enterprise VoIP phone systems and wireless access points. I completed Advanced Skills & Leadership 
                Course in IT at Ft. Gordon, GA and Structured Self-Development Course at Ft. Bliss, TX.
              </p>
              <p>
                Beyond tech, what matters most is spending time with my wife and family. I&apos;m also a die-hard 
                Florida State Seminoles fan 🍢 — nothing beats game day! I love getting outdoors for hiking and 
                nature photography, hitting up live concerts and music festivals, and gathering with friends to 
                watch football. Life&apos;s about balance: code hard, play harder, and cherish the moments with 
                loved ones.
              </p>
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