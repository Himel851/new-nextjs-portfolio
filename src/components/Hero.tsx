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

  // Memoize grid lines to prevent unnecessary re-renders
  const gridLines = useMemo(() => {
    if (!isVisible) return null;
    
    return (
      <>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
            style={{
              top: `${i * 15}%`,
              left: '0%',
              right: '0%',
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"
            style={{
              left: `${i * 15}%`,
              top: '0%',
              bottom: '0%',
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3 + 1.5,
            }}
          />
        ))}
      </>
    );
  }, [isVisible]);

  // Memoize floating elements
  const floatingElements = useMemo(() => {
    if (!isVisible || !isClient) return null;
    
    // Deterministic positions and animations
    const elements = [
      { left: '20%', top: '30%', duration: 4.5, delay: 0.3 },
      { left: '80%', top: '70%', duration: 5.2, delay: 1.1 }
    ];
    
    return (
      <>
        {elements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: element.left,
              top: element.top,
            }}
            initial={{ opacity: 0, y: 0, scale: 1 }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
            }}
          />
        ))}
      </>
    );
  }, [isVisible, isClient]);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Enhanced 2D Background with CSS gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.15),rgba(255,255,255,0))]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(120,119,198,0.03)_50%,transparent_100%)] animate-pulse"></div>
        {/* Additional 2D background layers */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(6,182,212,0.1),rgba(139,92,246,0.1),rgba(236,72,153,0.1),rgba(6,182,212,0.1))] animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] animate-pulse" style={{animationDuration: '4s'}}></div>
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
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 rounded-lg blur opacity-25"
                animate={{ opacity: isVisible ? [0.25, 0.4, 0.25] : 0.25 }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
            <br />
            <span className="relative">
              <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                DEVELOPER
              </span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg blur opacity-25"
                animate={{ opacity: isVisible ? [0.25, 0.4, 0.25] : 0.25 }}
                transition={{ duration: 3, delay: 1.5 }}
              />
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
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3">
                <Download size={20} className="animate-bounce" />
                <span>DOWNLOAD CV</span>
                <Zap size={20} className="text-yellow-300" />
              </div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToAbout}
              className="group relative px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-500 hover:text-black transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="relative flex items-center gap-3">
                <Target size={20} />
                EXPLORE MORE
              </span>
            </motion.button>
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
              <motion.a
                key={social.label}
                href={social.href}
                rel="noopener noreferrer"
                target="_blank"
                whileHover={{ scale: 1.08, y: -3, rotate: 360 }}
                whileTap={{ scale: 0.92 }}
                className={`p-4 bg-gradient-to-br ${social.color} rounded-2xl shadow-2xl hover:shadow-lg transition-all duration-300 text-white backdrop-blur-sm border border-white/20`}
                aria-label={social.label}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Optimized Floating Elements */}
      {floatingElements}

      {/* Enhanced 2D Energy Field Effect */}
      {isVisible && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-cyan-500/3 via-transparent to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/3 via-transparent to-transparent animate-pulse" style={{animationDelay: '1.5s'}} />
          {/* Additional 2D effects */}
          <div className="absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(6,182,212,0.05),rgba(139,92,246,0.05),rgba(236,72,153,0.05))] animate-spin" style={{animationDuration: '30s'}}></div>
        </div>
      )}
    </section>
  );
};

export default Hero;
