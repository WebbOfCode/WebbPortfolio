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
    <main className="min-h-screen bg-black">
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
  )
}