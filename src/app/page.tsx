import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import YouTube from '@/components/YouTube'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#about" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-burnt-orange focus:text-white focus:rounded-lg focus:font-medium"
      >
        Skip to main content
      </a>
      
      <main className="min-h-screen bg-gradient-to-b from-bg-main to-bg-elevated">
        <ScrollProgress />
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <YouTube />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}