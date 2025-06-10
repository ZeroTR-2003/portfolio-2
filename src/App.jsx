import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PathDraw from './components/PathDraw'

const App = () => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      {/* Site navigation */}
      <Navbar />

      {/* Hero / intro */}
      <Hero />

      {/* About section */}
      <section id="about" className="py-20 px-4">
        <About />
      </section>

      {/* ——— SVG Path‑Draw Divider ——— */}
      <PathDraw
        svgPath="M0,75 C150,200 350,-50 500,75 650,200 850,-50 1000,75"
        height={150}
        strokeColor="#3b82f6"
        strokeWidth={3}
      />

      {/* Projects section */}
      <section id="projects" className="py-20 px-4">
        <Projects />
      </section>

      {/* Certifications section */}
      <section id="certifications" className="py-20 px-4">
        <Certifications />
      </section>

      {/* Contact / footer CTA */}
      <section id="contact" className="py-20 px-4">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
