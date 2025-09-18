'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PerformanceMonitor from '@/components/PerformanceMonitor';

// Direct imports to avoid lazy loading issues
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';


export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} // Reduced from 1s to 0.5s
      >
        {/* Hero Section - Always loaded */}
        <section id="home">
          <Hero />
        </section>

        {/* Direct component sections */}
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </motion.div>

      {/* Performance Monitor - Only in development */}
      <PerformanceMonitor />
    </main>
  );
}
