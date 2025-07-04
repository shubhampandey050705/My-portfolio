
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Hero = () => {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <>
      <Navigation />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src="/lovable-uploads/f5592b8c-c96f-4415-b66e-e941511cb225.png"
              alt="Shubham Pandey"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
            />
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Shubham Pandey
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
              Full-Stack Developer | Data Analyst | CS Undergrad
            </h2>
            
            <p className="text-lg text-gray-500 mb-8">📍 Greater Noida, India</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Download Resume
            </motion.button>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-12"
          >
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
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 hover:text-blue-600"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="animate-bounce"
          >
            <button
              onClick={scrollToBottom}
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <ArrowDown size={32} />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
