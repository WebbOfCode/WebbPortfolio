"use client"

export default function About() {

  return (
    <section id="about" className="section-padding">
      <div className="container-professional">
        <h2 className="text-section" style={{ marginBottom: '3rem', textAlign: 'center' }}>THE SHORT VERSION</h2>
        
        {/* Condensed Intro */}
        <div className="yzy-text-block" style={{ maxWidth: '65ch', marginLeft: 'auto', marginRight: 'auto', marginBottom: '3rem' }}>
          <p className="text-body" style={{ marginBottom: '1.5rem' }}>
            I SERVED 4 YEARS AS AN INFORMATION TECHNOLOGY SPECIALIST IN THE U.S. ARMY. I STARTED AS AN INFORMATION SYSTEMS MAINTAINER IN SOUTH KOREA, THEN PROMOTED TO HELP DESK TEAM CHIEF IN COLORADO SPRINGS. I MANAGED 5,000+ NETWORK MOVES, ADDS, AND CHANGES (MACS) WITH ZERO DOWNTIME. I OVERSAW $750,000 IN COMMUNICATIONS EQUIPMENT WITH ZERO LOSSES. AFTER THE ARMY, I WORKED REMOTE HELP DESK AT TECH BRIDGE SOLUTIONS, SUPPORTING 200+ ENTERPRISE CLIENTS. THAT EXPERIENCE TAUGHT ME DETAILS MATTER — WHETHER IN NETWORK CONFIGS OR CODE. NOW I BUILD FULL STACK APPLICATIONS WITH THAT SAME MINDSET.
          </p>
        </div>

        {/* What I'm Looking For */}
        <div className="glass" style={{ maxWidth: '50rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: '3rem', padding: '2rem', borderLeft: '2px solid var(--yzy-construction)' }}>
          <h3 className="text-subsection" style={{ marginBottom: '1rem', color: 'var(--yzy-void)' }}>
            WHAT I AM LOOKING FOR
          </h3>
          <p className="text-body" style={{ marginBottom: '1.5rem' }}>
            MY FIRST DEVELOPER ROLE WHERE I CAN CONTRIBUTE FROM DAY ONE. I AM STRONGEST IN FULL STACK AND SECURITY-FOCUSED DEVELOPMENT. I HAVE AN ACTIVE CLEARANCE FOR GOVERNMENT AND DEFENSE WORK. MOST IMPORTANTLY, I WANT TO JOIN A TEAM OF SOLID ENGINEERS WHERE I CAN LEARN FAST AND DELIVER FASTER.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.875rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>■</span> <span>BASED IN NASHVILLE</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>■</span> <span>AVAILABLE NOW</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>■</span> <span>OPEN TO REMOTE OR RELOCATION</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>■</span> <span>ACTIVE SECRET CLEARANCE</span>
            </div>
          </div>
        </div>

        {/* How I Work */}
        <div style={{ maxWidth: '65ch', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="yzy-manifesto">
            <div className="yzy-text-block">
              <h3 className="text-subsection">HOW I WORK</h3>
            </div>
            <div className="yzy-manifesto-rule"></div>
            <div className="yzy-manifesto-list">
              <div className="yzy-manifesto-item">
                <div>BREAK IT DOWN</div>
                <div className="yzy-manifesto-caption">BIG PROBLEMS ARE JUST SMALL ONES STACKED TOGETHER</div>
              </div>
              <div className="yzy-manifesto-item">
                <div>RESEARCH BEFORE BUILDING</div>
                <div className="yzy-manifesto-caption">UNDERSTAND FIRST, CODE SECOND</div>
              </div>
              <div className="yzy-manifesto-item">
                <div>TEST UNTIL IT BREAKS</div>
                <div className="yzy-manifesto-caption">BETTER I FIND IT THAN A USER DOES</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
