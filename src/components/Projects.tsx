'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Code, Globe, Smartphone, Rocket, Brain, Sparkles, Target, Zap } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const allProjects = [
    {
      id: 1,
      title: 'E-Commerce Tutorial & Management Platform',
      description: "Developed a comprehensive e-commerce tutorial platform featuring step-by-step video guidelines for business setup, marketing, logo design, product upload, and order management, providing an end-to-end learning and management solution. (Demo Login: Phone – 01687454958, Password – 123456).",
      image: '/image/incubation.webp',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'ShadCN UI'],
      category: 'Frontend',
      liveUrl: 'https://edu.storex.com.bd/login',
      githubUrl: '#',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 2,
      title: 'E-Commerce Website (Frontend Development)',
      description: 'Developed a feature-rich e-commerce website with category-based product listings, promotional offers, and stock management, leveraging Redux Toolkit for efficient state management and scalable performance. Integrated conversion APIs, marketing tools, and TikTok for enhanced tracking and campaign optimization.',
      image: '/image/fimon.webp',
      technologies: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', "Radix UI", "React Splide", "Lucide React"],
      category: 'Frontend',
      liveUrl: 'https://fimon.com.bd/',
      githubUrl: '#',
      featured: true,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 3,
      title: 'Travel World Website',
      description: 'Developed a pixel-perfect travel booking website from Figma design, featuring category-wise travel cards with advanced filters, detailed hotel pages (rooms, amenities, policies, ratings), FAQs, hot deals, tour packages, popular destinations, and smooth navigation.',
      image: '/image/travel.webp',
      technologies: ['Next.js', 'Tailwind CSS', "React Compare Slider","React Slick", "Slick Carousel", "Lucide React"],
      category: 'Frontend',
      liveUrl: 'https://himel851-travel-world.netlify.app/',
      githubUrl: '#',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Deshify - E-commerce Website',
      description: 'Built Deshify, a modern e-commerce platform with category and variation-based product listings, secure authentication, cart and checkout functionality, and an integrated blog section for enhanced user engagement.',
      image: '/image/deshify.webp',
      technologies: ['Next.js', 'React Bootstrap', "Context API","Lodash", "Google Chapcha", "React Carousel", "SASS"],
      category: 'Frontend',
      liveUrl: 'https://deshify.com/',
      githubUrl: '#',
      featured: true,
      color: 'from-pink-500 to-red-500'
    },
    {
      id: 5,
      title: 'Photo Editing Service Website',
      description: "Developed a photo editing service website featuring advanced editing showcases, FAQs, service descriptions, client testimonials, and a portfolio gallery, ensuring a seamless experience for clients seeking professional image enhancement.",
      image: '/image/photo.webp',
      technologies: ['Next.js', 'Tailwind CSS', 'React Compare Slider', 'React Slick', 'Slick Carousel', 'Lucide React'],
      category: 'Full-Stack',
      liveUrl: 'https://himel851-black-fox.netlify.app/',
      githubUrl: '#',
      featured: false,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const displayedProjects = showAll ? allProjects : allProjects.filter(project => project.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full-Stack':
        return <Code size={20} />;
      case 'Frontend':
        return <Globe size={20} />;
      case 'Mobile':
        return <Smartphone size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  if (!isClient) {
    return (
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Rocket className="text-green-400 animate-pulse" size={32} />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <Brain className="text-green-400 animate-pulse" size={32} />
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Here are some of my recent projects that showcase my skills and expertise in 
              <span className="text-green-400 font-medium">modern web development</span>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_30%,rgba(34,197,94,0.03)_50%,transparent_70%)]"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"
            style={{
              top: `${i * 8}%`,
              left: '0%',
              right: '0%',
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="text-green-400 animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <Brain className="text-green-400 animate-pulse" size={32} />
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            A showcase of my recent work, demonstrating my skills in frontend development, 
            full-stack applications, and <span className="text-green-400 font-medium">modern web technologies</span>.
          </p>
        </motion.div>

        {/* Futuristic Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-16">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-3xl shadow-2xl hover:shadow-green-500/25 transition-all duration-500 overflow-hidden border border-slate-700/50 hover:border-green-500/50 backdrop-blur-xl project-card hover:before:absolute hover:before:inset-0 hover:before:rounded-3xl hover:before:border hover:before:border-transparent hover:before:bg-gradient-to-r hover:before:${project.color} hover:before:opacity-20 hover:before:transition-opacity hover:before:duration-500 hover:before:pointer-events-none`}
              >
                
                
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-700 overflow-hidden">
                  {project.image && project.image !== '/api/placeholder/400/250' ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">🚀</div>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-gradient-to-br from-slate-800/90 to-slate-700/90 text-gray-300 rounded-2xl text-sm font-medium flex items-center gap-2 backdrop-blur-sm border border-slate-600/50">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-br from-slate-800/50 to-slate-700/50 text-gray-300 rounded-xl text-sm font-medium border border-slate-600/50 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-2xl hover:shadow-green-500/25 transition-all duration-300 shadow-lg"
                      >
                        <Eye size={18} />
                        Live Demo
                      </a>
                    </motion.div>
                    {/* <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-slate-600/50 text-gray-300 font-bold rounded-2xl hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 backdrop-blur-sm"
                    >
                      <Github size={18} />
                      Code
                    </motion.a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Futuristic See All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center gap-3 mx-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-3">
              {showAll ? 'Show Less' : 'See All Projects'}
              <ExternalLink size={24} />
              <Zap size={24} className="text-yellow-300" />
            </span>
          </motion.button>
        </motion.div>

        {/* Futuristic Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            { number: '8+', label: 'Projects Completed', icon: '🎯', color: 'from-green-500 to-emerald-500' },
            { number: '2+', label: 'Years Experience', icon: '⏰', color: 'from-emerald-500 to-teal-500' },
            { number: '100%', label: 'Client Satisfaction', icon: '⭐', color: 'from-teal-500 to-cyan-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-3xl shadow-2xl border border-slate-700/50 hover:border-green-500/50 backdrop-blur-xl transition-all duration-500"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="text-4xl">{stat.icon}</span>
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-4xl font-black gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Futuristic Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-12 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-3xl border border-green-500/30 backdrop-blur-xl overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]" />
          
          <div className="relative text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Target className="text-green-400 animate-pulse" size={32} />
              <h3 className="text-3xl font-black text-white">
                Have a Project in <span className="gradient-text">Mind</span>?
              </h3>
              <Sparkles className="text-green-400 animate-pulse" size={32} />
            </div>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg font-light">
              I&apos;m always excited to work on new projects and bring innovative ideas to life. 
              Let&apos;s discuss how we can create something <span className="text-green-400 font-medium">amazing together</span>.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                <Rocket size={24} className="animate-bounce" />
                Start a Project
                <Zap size={24} className="text-yellow-300" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
