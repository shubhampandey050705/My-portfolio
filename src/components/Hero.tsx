
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
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img
                src="/lovable-uploads/f5592b8c-c96f-4415-b66e-e941511cb225.png"
                alt="Shubham Pandey"
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl mx-auto shadow-2xl border-8 border-white"
              />
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-800">
                Shubham Pandey
              </h1>
              
              {/* Added Data Science | Data Analytics */}
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="text-blue-600" size={24} />
                  <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Data Science | Data Analytics
                  </span>
                  <Database className="text-purple-600" size={24} />
                </div>
              </div>
              
              <h2 className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
                Full-Stack Developer | Data Analyst | CS Undergrad
              </h2>
              
              <p className="text-lg text-slate-500 mb-8">📍 Greater Noida, India</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-slate-700 transition-all duration-300"
                >
                  Download Resume
                </motion.button>
                
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                  >
                    Get In Touch
                  </motion.button>
                </Link>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:shubhampandey050705@gmail.com', label: 'Email' },
                  { icon: Phone, href: 'tel:+917752884451', label: 'Phone' }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-slate-600 hover:text-blue-600"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <button
              onClick={scrollToAbout}
              className="text-slate-400 hover:text-blue-600 transition-colors duration-300 animate-bounce"
            >
              <ArrowDown size={32} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Brief Section with Data Science Focus */}
      <section id="about-brief" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                About This Portfolio
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-800 to-blue-600 mx-auto rounded-full mb-8"></div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Welcome to my digital portfolio! I'm a passionate Computer Science student at Galgotias University 
                with expertise in full-stack development, data science, and analytics. This portfolio showcases my 
                journey through various technologies, data-driven projects, and achievements in software development and data analysis.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Data Analytics</h3>
                  <p className="text-slate-600">
                    Transforming raw data into actionable insights using advanced statistical methods, 
                    visualization techniques, and machine learning algorithms.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Machine Learning</h3>
                  <p className="text-slate-600">
                    Building predictive models and implementing intelligent solutions that learn from data 
                    to solve complex real-world problems.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Full-Stack Development</h3>
                  <p className="text-slate-600">
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
