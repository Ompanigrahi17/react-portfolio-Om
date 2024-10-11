import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/certifications';
import Expertise from './components/Expertise';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900" style={{ backgroundColor: 'black' }}>
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="container mx-auto px-0 main-content">
        <Navbar />
        <Hero />
        <main className="flex flex-col">
          <section id="about" className="flex items-center justify-center">
            <About />
          </section>
          <section id="expertise" className="flex items-center justify-center">
            <Expertise />
          </section>
          <section id="technologies" className="flex items-center justify-center">
            <Technologies />
          </section>
          <section id="experience" className="flex items-center justify-center">
            <Experience />
          </section>
          <section id="projects" className="flex items-center justify-center">
            <Projects />
          </section>
          <section id="certifications" className="flex items-center justify-center">
            <Certifications />
          </section>
          <section id="contact" className="flex items-center justify-center">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
