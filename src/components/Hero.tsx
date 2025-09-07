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
      
      {/* Hero Section with Portrait */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            
            {/* Left side - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              <div className="space-y-8">
                <h1 className="text-6xl md:text-8xl font-bold">
                  <span className="text-foreground">Shubham</span>
                  <br />
                  <span className="text-accent font-bold">Pandey</span>
                </h1>
                
                <p className="text-lg text-muted-foreground uppercase tracking-wider">
                  DATA SCIENTIST | FULL-STACK DEVELOPER
                </p>
                
                <div className="max-w-lg">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    I'm a <span className="text-accent font-semibold">data science enthusiast</span> from Greater Noida, India. 
                    I aim to make a difference through my creative solutions.
                  </p>
                </div>
                
                {/* Navigation Links */}
                <nav className="space-y-4 pt-8">
                  <Link to="/about" className="block text-lg hover:text-accent transition-colors duration-300 font-medium text-muted-foreground">
                    ABOUT ME
                  </Link>
                  <Link to="/experience" className="block text-lg hover:text-accent transition-colors duration-300 font-medium text-muted-foreground">
                    EXPERIENCE
                  </Link>
                  <Link to="/projects" className="block text-lg hover:text-accent transition-colors duration-300 font-medium text-muted-foreground">
                    PROJECTS
                  </Link>
                  <Link to="/skills" className="block text-lg hover:text-accent transition-colors duration-300 font-medium text-muted-foreground">
                    SKILLS
                  </Link>
                  <Link to="/contact" className="block text-lg hover:text-accent transition-colors duration-300 font-medium text-muted-foreground">
                    CONTACT
                  </Link>
                </nav>
                
                {/* Contact Info */}
                <div className="space-y-4 pt-8">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">EMAIL</p>
                    <p className="text-foreground">shubhampandey050705@gmail.com</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">PHONE</p>
                    <p className="text-foreground">+91 7752884451</p>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-4 pt-6">
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

            {/* Right side - Portrait Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-80 h-96 lg:w-96 lg:h-[500px] relative overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/2f745dba-75af-4de1-a404-e6afb3565d6b.png" 
                    alt="Shubham Pandey working on laptop"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  {/* Subtle overlay for blend effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
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