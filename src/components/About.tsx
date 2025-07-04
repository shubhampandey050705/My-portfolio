
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 rounded-3xl shadow-lg"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              I'm a motivated Computer Science student at Galgotias University with a passion for 
              creating impactful software solutions. With expertise spanning full-stack web development 
              and data science, I bring a unique blend of technical skills and creative problem-solving 
              to every project.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              My technical arsenal includes <span className="font-semibold text-blue-600">React, Express, Flask, MySQL</span>, 
              and comprehensive data science tools like <span className="font-semibold text-purple-600">Pandas, NumPy, and Matplotlib</span>. 
              I thrive in collaborative environments and have demonstrated strong leadership skills 
              through various academic and personal projects.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Whether it's building scalable web applications, analyzing complex datasets, or 
              leading development teams, I'm passionate about leveraging technology to solve 
              real-world problems and create meaningful user experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
