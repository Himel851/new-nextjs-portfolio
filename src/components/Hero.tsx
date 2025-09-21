'use client';

import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Zap, Target } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Intersection Observer for performance
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isClient]);

  const scrollToAbout = useCallback(() => {
    if (!isClient) return;
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }, [isClient]);

  // Simplified static grid lines for better performance
  const gridLines = useMemo(() => {
    if (!isVisible) return null;
    
    return (
      <>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent"
            style={{
              top: `${i * 30}%`,
              left: '0%',
              right: '0%',
            }}
          />
        ))}
        {[...Array(3)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent"
            style={{
              left: `${i * 30}%`,
              top: '0%',
              bottom: '0%',
            }}
          />
        ))}
      </>
    );
  }, [isVisible]);

  // Simplified static floating elements
  const floatingElements = useMemo(() => {
    if (!isVisible || !isClient) return null;
    
    return (
      <>
        <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full" style={{ left: '20%', top: '30%' }} />
        <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full" style={{ left: '80%', top: '70%' }} />
      </>
    );
  }, [isVisible, isClient]);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(120,119,198,0.02)_50%,transparent_100%)]"></div>
      </div>

      {/* Optimized Grid Lines */}
      {gridLines}

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Optimized Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >

            <span className="text-lg md:text-xl text-indigo-400 dark:text-indigo-300 font-medium tracking-wider">
              Hello, I&apos;m
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Nazmul Hasan Himel
              </span>
            </motion.h2>
          </motion.div>

          {/* Enhanced 2D Main Title with CSS effects */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 relative"
          >
            <span className="relative">
              <span className="gradient-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                FRONTEND
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 rounded-lg blur opacity-20" />
            </span>
            <br />
            <span className="relative">
              <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                DEVELOPER
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg blur opacity-20" />
            </span>
          </motion.h1>

          {/* Optimized Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            <span className="text-cyan-400 font-medium">Crafting</span> exceptional digital experiences with{' '}
            <span className="text-indigo-400 font-medium">cutting-edge technologies</span>. 
            Specialized in <span className="text-purple-400 font-medium">React</span>,{' '}
            <span className="text-pink-400 font-medium">Next.js</span>, and{' '}
            <span className="text-red-400 font-medium">TypeScript</span> with 2+ years of expertise 
            in building <span className="text-cyan-400 font-medium">scalable web applications</span>.
          </motion.p>

          {/* Optimized CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <button
              onClick={() => window.open('https://drive.google.com/file/d/1zE-aBJu5o8QPm_uIKVNLuahJqSp41iBK/view?usp=drive_link', '_blank', 'noopener,noreferrer')}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3">
                <Download size={20} className="animate-bounce" />
                <span>DOWNLOAD CV</span>
                <Zap size={20} className="text-yellow-300" />
              </div>
            </button>
            
            <button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-500 hover:text-black transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="relative flex items-center gap-3">
                <Target size={20} />
                EXPLORE MORE
              </span>
            </button>
          </motion.div>

          {/* Optimized Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center gap-6 mb-12"
          >
            {[
              { icon: Github, href: 'https://github.com/Himel851', label: 'GitHub', color: 'from-gray-600 to-gray-800' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/nazmulhimel96/', label: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
              { icon: Mail, href: 'mailto:himel.cse96@gmail.com', label: 'Email', color: 'from-red-500 to-red-700' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                rel="noopener noreferrer"
                target="_blank"
                className={`p-4 bg-gradient-to-br ${social.color} rounded-2xl shadow-2xl hover:shadow-lg transition-all duration-300 text-white backdrop-blur-sm border border-white/20`}
                aria-label={social.label}
              >
                <social.icon size={28} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Optimized Floating Elements */}
      {floatingElements}

      {/* Simplified energy field effect */}
      {isVisible && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-cyan-500/2 via-transparent to-transparent" />
        </div>
      )}
    </section>
  );
};

export default Hero;
