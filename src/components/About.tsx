"use client"

import Image from 'next/image'

export default function About() {

  return (
    <section id="about" className="py-12 px-6 lg:px-8 bg-bg-main">
      <div className="max-w-5xl mx-auto">
        {/* Headshot above About */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-xl border border-border-default">
              <Image
                src="/headshot.jpg"
                alt="Demarick Webb-Rivera"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-manrope font-bold text-text-primary mb-4">About me</h2>
          
          <div className="bg-bg-elevated border-l-4 border-accent-gold rounded-xl px-6 py-4 max-w-3xl mb-6">
            <p className="text-lg text-text-muted leading-relaxed">
              I spent 4 years managing critical Army networks, then transitioned into Computer Science. I'm currently finishing my CS degree while bartending on weekends—balancing building software with keeping the bills paid.
            </p>
          </div>

          {/* What I'm Looking For */}
          <div className="bg-accent-gold/20 border-2 border-accent-gold rounded-xl px-6 py-4 max-w-3xl">
            <h3 className="text-accent-gold font-bold mb-2 flex items-center text-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              What I'm looking for
            </h3>
            <p className="text-text-primary font-medium leading-relaxed">
              I am looking for my first dev role where I can contribute on day one. I'm strongest in full-stack work and anything security-related. My clearance is still active, so I'm open to government/defense contracts too. Ideally somewhere I can learn from good engineers and make meaningful contributions to the team.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-accent-gold font-semibold mb-2">Military IT background</h3>
            <p className="text-text-secondary leading-relaxed">
            I served as an Army IT Specialist managing classified networks across two continents for four years. Led 5,000+ configuration changes and oversaw $750K in infrastructure equipment with zero losses. It is here where I learned that security and reliability aren't optional—they're foundational.
            </p>
          </div>

          <div>
            <h3 className="text-accent-gold font-semibold mb-2">Education & growth</h3>
            <p className="text-text-secondary leading-relaxed">
              Completed Associate at Nashville State and currently pursuing Bachelor's degree in Computer Science at MTSU with a cybersecurity concentration. Combining military discipline with academic theory for cleaner code and better solutions.
            </p>
          </div>

          <div>
            <h3 className="text-accent-gold font-semibold mb-2">How I work</h3>
            <p className="text-text-secondary leading-relaxed">
              Break it down, research thoroughly, test everything. I approach debugging like troubleshooting military networks—systematically and persistently until it works, breaking things into simple stepsand knocking them out.
            </p>
          </div>

          <div>
            <h3 className="text-accent-gold font-semibold mb-2">Beyond the code</h3>
            <p className="text-text-secondary leading-relaxed">
              WHen im not knee deep in code i'm most likely bartending at some of the major Nashville venues and that keeps me grounded in real-world people skills. FSU football, live music, and having family time round out the picture.
            </p>
          </div>
          
          <div className="pt-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-bg-elevated text-accent-teal text-sm rounded-lg border border-accent-teal/30">Bartending</span>
              <span className="px-3 py-1 bg-bg-elevated text-accent-teal text-sm rounded-lg border border-accent-teal/30">FSU Football</span>
              <span className="px-3 py-1 bg-bg-elevated text-accent-teal text-sm rounded-lg border border-accent-teal/30">Live Music</span>
              <span className="px-3 py-1 bg-bg-elevated text-accent-teal text-sm rounded-lg border border-accent-teal/30">Photography</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}