'use client';

import { motion } from 'framer-motion';
import { Rocket, Brain, Target, Sparkles, Building, Calendar, MapPin, Award, Users, TrendingUp, Cpu, Atom } from 'lucide-react';

const Experience = () => {


  const experiences = [
    {
      company: 'StoreX',
      position: 'Frontend Developer',
      duration: 'Sep 2024 - Present',
      location: 'Bosila Garden City, Mohammadpur, Dhaka',
      type: 'Full-time',
      achievements: [
        'Developing and Maintaining the admin panel for StoreX’s e-commerce platform, including design implementation and API integration',
        'Converting Figma designs into responsive, user-friendly, and SEO-optimized web pages',
        'Implementing advanced React patterns and modern state management solutions to improve code scalability',
        'Working on Conversion APIs such as Facebook Conversion API and TikTok Conversion API to enhance marketing and analytics',
        'Optimizing frontend performance and user experience across the platform'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Bootstrap', 'EJS', 'ShadCN UI', 'Ant Design'],
      logo: '🛍️',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      company: 'Microdeft',
      position: 'Frontend Developer',
      duration: 'Aug 2023 - Jul 2024',
      location: 'Banasree, Dhaka',
      type: 'Full-time',
      achievements: [
        'Developed and maintained multiple client websites and web applications',
        'Built responsive and accessible user interfaces using modern frameworks',
        'Converted Figma designs into pixel-perfect, production-ready interfaces',
        'Automated tasks and workflows using Puppeteer.js, including data collection from external websites',
        'Collaborated with designers and backend developers to deliver high-quality products',
        'Implemented SEO best practices and performance optimization',
      ],
      
      technologies: ['React', 'Next.js', 'Puppeteer.js', 'Tailwind CSS', 'Context API', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
      logo: '💼',
      color: 'from-purple-500 to-pink-500'
    },
    {
      company: 'Microdeft',
      position: 'Frontend Developer Intern',
      duration: 'Apr 2023 - Aug 2023',
      location: 'Banasree, Dhaka',
      type: 'Internship',
      achievements: [
        'Assisted in developing responsive web applications using React and modern JavaScript',
        'Learned and applied frontend development best practices and design patterns',
        'Collaborated with senior developers on various client projects',
        'Gained hands-on experience with version control and team collaboration tools',
        'Contributed to bug fixes and feature implementations under supervision'
      ],
      technologies: ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'Git'],
      logo: '💼',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const education = [
    {
      institution: 'Programming Hero',
      course: 'Advanced Web Development',
      duration: '2023',
      description: 'Comprehensive web development course covering modern technologies and best practices',
      logo: '🎓',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      institution: 'Programming Hero',
      course: 'Web Development (Level 1)',
      duration: '2022',
      description: 'Fundamental web development concepts and practical project-based learning',
      logo: '📚',
      color: 'from-green-500 to-blue-500'
    },
    {
      institution: 'Phitron',
      course: 'Problem Solving with C & C++',
      duration: '2022',
      description: 'Advanced problem-solving techniques and algorithmic thinking',
      logo: '🧮',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,165,0,0.1),transparent_50%)]"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="text-orange-400 animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <Brain className="text-orange-400 animate-pulse" size={32} />
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            My professional journey in web development, showcasing growth, achievements, 
            and the technologies I&apos;ve worked with across different companies.
          </p>
        </motion.div>

        {/* Futuristic Work Experience Timeline */}
        <div className="mb-24">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Target className="text-orange-400 animate-pulse" size={28} />
            <h3 className="text-3xl font-black text-white">
              Professional Experience
            </h3>
            <Sparkles className="text-orange-400 animate-pulse" size={28} />
          </div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.position}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-10"
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 border border-slate-700/50 hover:border-orange-500/50 backdrop-blur-xl overflow-hidden">
                    {/* Holographic Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        {exp.logo}
                        <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                          {exp.position}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <Building size={16} className="text-orange-400" />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-orange-400" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-orange-400" />
                            {exp.location}
                          </div>
                        </div>
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30 backdrop-blur-sm">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-bold text-white mb-4 text-lg">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                            <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold text-white mb-4 text-lg">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gradient-to-br from-slate-800/50 to-slate-700/50 text-gray-300 rounded-xl text-sm font-medium border border-slate-600/50 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Hover Effect Border */}
                    <div className={`absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  </div>
                </div>

                {/* Timeline Connector */}
                <div className="hidden lg:flex flex-col items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-400 rounded-full shadow-lg animate-pulse" />
                  {index < experiences.length - 1 && (
                    <div className="w-1 h-32 bg-gradient-to-b from-orange-400/50 to-red-400/50 rounded-full" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Futuristic Education Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Cpu className="text-orange-400 animate-pulse" size={28} />
            <h3 className="text-3xl font-black text-white">
              Education & Training
            </h3>
            <Atom className="text-orange-400 animate-pulse" size={28} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu) => (
              <motion.div
                key={`${edu.institution}-${edu.course}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 border border-slate-700/50 hover:border-orange-500/50 backdrop-blur-xl overflow-hidden"
              >
                {/* Holographic Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="text-center relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    {edu.logo}
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {edu.course}
                  </h4>
                  <p className="text-orange-400 font-medium mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-400 mb-4">
                    {edu.duration}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">
                    {edu.description}
                  </p>
                </div>
                
                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative p-12 bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-3xl border border-orange-500/30 backdrop-blur-xl overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.1),transparent_70%)]" />
          
          <div className="relative text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="text-orange-400 animate-pulse" size={32} />
              <h3 className="text-3xl font-black text-white">
                Career Highlights & <span className="gradient-text">Growth</span>
              </h3>
              <Users className="text-orange-400 animate-pulse" size={32} />
            </div>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg font-light">
              Throughout my journey, I&apos;ve consistently grown both technically and professionally, 
              taking on increasing responsibilities and expanding my skill set.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: 'Career Progression',
                  description: 'Advanced from junior developer to leading frontend development roles',
                  color: 'from-orange-400 to-red-400'
                },
                {
                  icon: Users,
                  title: 'Team Collaboration',
                  description: 'Worked with diverse teams across multiple projects and companies',
                  color: 'from-red-400 to-pink-400'
                },
                {
                  icon: Award,
                  title: 'Skill Development',
                  description: 'Continuously learning and adapting to new technologies and methodologies',
                  color: 'from-pink-400 to-purple-400'
                }
              ].map((highlight) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <highlight.icon size={40} className="text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray-300 font-light">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
