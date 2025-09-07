import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Phone, BarChart3, Database, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-brief');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navigation />
      
      {/* Hero Section with Half Background Image */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image - Left Half */}
        <div className="absolute inset-0 lg:w-1/2 w-full">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/245d5d0e-eb9a-45f7-853f-f77ebdb7283c.png')`
            }}
          />
        </div>
        
        {/* Content Background - Right Half */}
        <div className="absolute inset-0 lg:left-1/2 left-0 bg-background/95 backdrop-blur-sm" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            
            {/* Left side - Navigation Menu (Dark Style) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 flex flex-col justify-center lg:pl-12"
            >
              <div className="space-y-8 text-white lg:text-left text-center">
                <nav className="space-y-4">
                  <Link to="/about" className="block text-lg hover:text-accent transition-colors duration-300 font-medium">
                    ABOUT ME
                  </Link>
                  <Link to="/experience" className="block text-lg hover:text-accent transition-colors duration-300 font-medium">
                    EXPERIENCE
                  </Link>
                  <Link to="/projects" className="block text-lg hover:text-accent transition-colors duration-300 font-medium">
                    PROJECTS
                  </Link>
                  <Link to="/skills" className="block text-lg hover:text-accent transition-colors duration-300 font-medium">
                    SKILLS
                  </Link>
                  <Link to="/contact" className="block text-lg hover:text-accent transition-colors duration-300 font-medium">
                    CONTACT
                  </Link>
                </nav>
                
                <div className="space-y-2 text-sm text-gray-300">
                  <p>EMAIL</p>
                  <p className="text-white">shubhampandey050705@gmail.com</p>
                </div>
                
                <div className="space-y-2 text-sm text-gray-300">
                  <p>PHONE</p>
                  <p className="text-white">+91 7752884451</p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 text-center lg:text-left lg:pr-12"
            >
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                  Shubham
                  <br />
                  <span className="text-accent font-bold italic">Pandey</span>
                </h1>
                
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  DATA SCIENTIST | FULL-STACK DEVELOPER
                </p>
                
                <div className="max-w-md">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a <span className="text-accent font-semibold">data science enthusiast</span> from Greater Noida, India. 
                    I aim to make a difference through my creative solutions.
                  </p>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-8 max-w-sm pt-8">
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">EDUCATION</p>
                    <p className="text-foreground">Computer Science</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">EXPERIENCE</p>
                    <p className="text-foreground">2+ years</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">FAMILIAR WITH</p>
                    <p className="text-foreground">Python, React, ML</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">SKILLS</p>
                    <p className="text-foreground">Analytics, Development</p>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-4 pt-4">
                  {[
                    { icon: Github, href: '#', label: 'GitHub' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Mail, href: 'mailto:shubhampandey050705@gmail.com', label: 'Email' }
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-3 bg-card rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-muted-foreground hover:text-accent border border-border"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Down Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-accent transition-colors duration-300 animate-bounce"
            >
              <ArrowDown size={32} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Brief Section with Data Science Focus */}
      <section id="about-brief" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                About This Portfolio
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-foreground to-accent mx-auto rounded-full mb-8"></div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Welcome to my digital portfolio! I'm a passionate Computer Science student at Galgotias University 
                with expertise in full-stack development, data science, and analytics. This portfolio showcases my 
                journey through various technologies, data-driven projects, and achievements in software development and data analysis.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  className="text-center p-6 bg-card rounded-xl hover:shadow-lg transition-all duration-300 border border-border"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Data Analytics</h3>
                  <p className="text-muted-foreground">
                    Transforming raw data into actionable insights using advanced statistical methods, 
                    visualization techniques, and machine learning algorithms.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="text-center p-6 bg-card rounded-xl hover:shadow-lg transition-all duration-300 border border-border"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Machine Learning</h3>
                  <p className="text-muted-foreground">
                    Building predictive models and implementing intelligent solutions that learn from data 
                    to solve complex real-world problems.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="text-center p-6 bg-card rounded-xl hover:shadow-lg transition-all duration-300 border border-border"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Full-Stack Development</h3>
                  <p className="text-muted-foreground">
                    Creating end-to-end web applications with modern technologies, focusing on scalable 
                    architecture and exceptional user experiences.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;