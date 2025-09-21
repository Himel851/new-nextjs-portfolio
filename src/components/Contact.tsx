'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Rocket,
  Brain,
  Cpu,
  Atom,
  Sparkles,
  Target,
  Zap,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_AUTO_REPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID ;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ;

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Deterministic floating elements
  const floatingElements = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${(i * 5.5) % 100}%`,
    top: `${(i * 8) % 100}%`,
    duration: 7 + (i % 4),
    delay: (i % 5) * 0.8,
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 1. Send main message to you (himel.cse96@gmail.com)
      const mainTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'himel.cse96@gmail.com',
        to_name: 'Himel',
      };

      console.log('Sending main email...');
      // Send main email to you
      await emailjs.send(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        mainTemplateParams,
        EMAILJS_PUBLIC_KEY!
      );
      console.log('Main email sent successfully');

      // 2. Send auto-reply to user (only if auto-reply template is configured)
      if (EMAILJS_AUTO_REPLY_TEMPLATE_ID && EMAILJS_AUTO_REPLY_TEMPLATE_ID !== 'template_auto_reply_id' && EMAILJS_AUTO_REPLY_TEMPLATE_ID !== 'template_c8njlfv') {
        const autoReplyParams = {
          from_name: formData.name,
          subject: formData.subject,
          to_email: formData.email,
        };

        console.log('Sending auto-reply email...');
        // Send auto-reply to user
        await emailjs.send(
          EMAILJS_SERVICE_ID!,
          EMAILJS_AUTO_REPLY_TEMPLATE_ID!,
          autoReplyParams,
          EMAILJS_PUBLIC_KEY!
        );
        console.log('Auto-reply email sent successfully');
      } else {
        console.log('Auto-reply template not configured, skipping auto-reply');
      }

      // Success
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      
      // Hide error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isClient) {
    return (
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Rocket className="text-pink-400 animate-pulse" size={32} />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <Brain className="text-pink-400 animate-pulse" size={32} />
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              I&apos;m always excited to hear about new opportunities and interesting projects. 
              Let&apos;s discuss how we can work together to create something <span className="text-pink-400 font-medium">amazing</span>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(236,72,153,0.03)_50%,transparent_70%)]"></div>
      
      {/* Simplified static elements */}
      <div className="absolute inset-0 pointer-events-none">
        {isClient && floatingElements.slice(0, 6).map((item) => (
          <div
            key={item.id}
            className="absolute w-1 h-1 bg-pink-400/30 rounded-full"
            style={{
              left: item.left,
              top: item.top,
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
            <Rocket className="text-pink-400 animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <Brain className="text-pink-400 animate-pulse" size={32} />
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            I&apos;m always excited to hear about new opportunities and interesting projects. 
            Let&apos;s discuss how we can work together to create something <span className="text-pink-400 font-medium">amazing</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Futuristic Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <Target className="text-pink-400 animate-pulse" size={28} />
              <h3 className="text-3xl font-black text-white">
                Send Message
              </h3>
              <Sparkles className="text-pink-400 animate-pulse" size={28} />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-pink-400 transition-colors duration-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-gray-400 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 backdrop-blur-xl"
                    placeholder="Your Name"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-pink-400 transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-gray-400 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 backdrop-blur-xl"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-pink-400 transition-colors duration-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-gray-400 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 backdrop-blur-xl"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-pink-400 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-gray-400 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 backdrop-blur-xl resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                      <Zap size={20} className="text-yellow-300" />
                    </>
                  )}
                </span>
              </button>

              {/* Submission Status */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl text-green-400 backdrop-blur-xl"
                  >
                    <CheckCircle size={20} />
                    <span className="font-medium">Message sent successfully! Check your email for confirmation.</span>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-2xl text-red-400 backdrop-blur-xl"
                  >
                    <AlertCircle size={20} />
                    <span className="font-medium">Something went wrong. Please try again.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Futuristic Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <Cpu className="text-pink-400 animate-pulse" size={28} />
              <h3 className="text-3xl font-black text-white">
                Contact Info
              </h3>
              <Atom className="text-pink-400 animate-pulse" size={28} />
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  value: 'himel.cse96@gmail.com',
                  href: 'mailto:himel.cse96@gmail.com',
                  color: 'from-pink-500 to-purple-500'
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  value: '+8801687454958',
                  href: 'tel:+8801687454958',
                  color: 'from-purple-500 to-indigo-500'
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  value: 'Uttara, Dhaka',
                  href: '#',
                  color: 'from-indigo-500 to-blue-500'
                }
              ].map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-6 p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-3xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 border border-slate-700/50 hover:border-pink-500/50 backdrop-blur-xl"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <contact.icon size={28} className="text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                      {contact.title}
                    </h4>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-xl font-bold text-white mb-6 text-center">
                Follow Me
              </h4>
              <div className="flex justify-center gap-6">
                {[
                  { icon: Github, href: 'https://github.com/Himel851', label: 'GitHub', color: 'from-gray-600 to-gray-800' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/nazmulhimel96/', label: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
                  { icon: Mail, href: 'mailto:himel.cse96@gmail.com', label: 'Email', color: 'from-red-500 to-red-700' },
                  { icon: Phone, href: 'tel:+8801687454958', label: 'Call', color: 'from-green-500 to-green-700' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-gradient-to-br ${social.color} rounded-2xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 text-white backdrop-blur-sm border border-white/20`}
                    aria-label={social.label}
                  >
                    <social.icon size={28} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Futuristic Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-12 bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-3xl border border-pink-500/30 backdrop-blur-xl overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_70%)]" />
          
          <div className="relative text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Target className="text-pink-400 animate-pulse" size={32} />
              <h3 className="text-3xl font-black text-white">
                Current <span className="gradient-text">Status</span>
              </h3>
              <Sparkles className="text-pink-400 animate-pulse" size={32} />
            </div>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg font-light">
              I&apos;m currently <span className="text-pink-400 font-medium">available for new opportunities</span> and exciting projects. 
              I&apos;m particularly interested in <span className="text-purple-400 font-medium">frontend development roles</span> and 
              <span className="text-indigo-400 font-medium"> innovative web applications</span>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <motion.span 
                className="px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 rounded-2xl text-sm font-medium border border-pink-500/30 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                Available for Freelance
              </motion.span>
              <motion.span 
                className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 rounded-2xl text-sm font-medium border border-purple-500/30 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                Open to Full-time Roles
              </motion.span>
              <motion.span 
                className="px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-indigo-300 rounded-2xl text-sm font-medium border border-indigo-500/30 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                Remote Work Preferred
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
