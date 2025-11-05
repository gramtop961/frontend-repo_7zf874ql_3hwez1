import React from 'react';
import Hero from './components/Hero';
import WorkGallery from './components/WorkGallery';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-wide">EDITORFOLIO</a>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/90 hover:border-white"
          >
            Book a Project
          </a>
        </div>
      </header>

      {/* Hero with Spline background */}
      <Hero />

      {/* Work */}
      <div id="services">
        <WorkGallery />
        <Services />
      </div>

      {/* Contact */}
      <Contact />
    </div>
  );
};

export default App;
