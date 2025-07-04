
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                  Shubham Pandey
                </span>
              </h1>
              
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

      {/* About Brief Section */}
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
                with a strong foundation in full-stack development and data analytics. This portfolio showcases my 
                journey through various technologies, projects, and achievements in the field of software development.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Connect & Collaborate</h3>
                  <p className="text-slate-600">
                    I'm always open to discussing new opportunities, collaborating on projects, 
                    or sharing knowledge about technology and development.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Continuous Learning</h3>
                  <p className="text-slate-600">
                    Technology evolves rapidly, and so do I. I'm committed to staying updated 
                    with the latest trends and best practices in software development.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Problem Solving</h3>
                  <p className="text-slate-600">
                    I enjoy tackling complex challenges and creating solutions that make a 
                    real difference in people's lives through technology.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
