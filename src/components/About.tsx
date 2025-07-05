
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Database, BarChart3, Code, Globe, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800 dark:text-white">
              About Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                I'm a passionate Computer Science student at Galgotias University with a strong focus on 
                <span className="font-semibold text-blue-600 dark:text-blue-400"> Data Science</span> and 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> Full-Stack Development</span>. 
                My journey combines analytical thinking with creative problem-solving to build innovative solutions.
              </p>
            </div>
          </motion.div>

          {/* Floating Icons */}
          <div className="relative">
            <motion.div
              variants={floatingAnimation}
              animate="animate" 
              className="absolute top-10 left-10 text-blue-500 dark:text-blue-400"
            >
              <BarChart3 size={40} />
            </motion.div>
            <motion.div
              variants={floatingAnimation}
              animate="animate"
              className="absolute top-20 right-20 text-purple-500 dark:text-purple-400"
            >
              <Brain size={35} />
            </motion.div>
            <motion.div
              variants={floatingAnimation}
              animate="animate"
              className="absolute bottom-10 right-10 text-green-500 dark:text-green-400"
            >
              <Database size={45} />
            </motion.div>
          </div>

          {/* Data Science Skills Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: <BarChart3 className="text-white" size={28} />,
                title: "Data Analytics",
                description: "Transforming raw data into actionable insights using statistical analysis, data visualization, and advanced analytics techniques.",
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100 dark:from-blue-900/20 to-blue-800/20"
              },
              {
                icon: <Brain className="text-white" size={28} />,
                title: "Machine Learning",
                description: "Building predictive models and intelligent systems using supervised and unsupervised learning algorithms.",
                gradient: "from-purple-500 to-purple-600", 
                bgGradient: "from-purple-50 to-purple-100 dark:from-purple-900/20 to-purple-800/20"
              },
              {
                icon: <Database className="text-white" size={28} />,
                title: "Data Engineering",
                description: "Designing robust data pipelines, ETL processes, and database architectures for scalable data solutions.",
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 to-green-100 dark:from-green-900/20 to-green-800/20"
              },
              {
                icon: <Code className="text-white" size={28} />,
                title: "Programming",
                description: "Proficient in Python, R, SQL, and JavaScript for data analysis, web development, and automation.",
                gradient: "from-orange-500 to-orange-600",
                bgGradient: "from-orange-50 to-orange-100 dark:from-orange-900/20 to-orange-800/20"
              },
              {
                icon: <Globe className="text-white" size={28} />,
                title: "Web Development",
                description: "Creating responsive web applications with modern frameworks like React, Node.js, and cloud technologies.",
                gradient: "from-teal-500 to-teal-600",
                bgGradient: "from-teal-50 to-teal-100 dark:from-teal-900/20 to-teal-800/20"
              },
              {
                icon: <Zap className="text-white" size={28} />,
                title: "Business Intelligence",
                description: "Developing dashboards and reports that drive data-driven decision making across organizations.",
                gradient: "from-pink-500 to-pink-600",
                bgGradient: "from-pink-50 to-pink-100 dark:from-pink-900/20 to-pink-800/20"
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-br ${skill.bgGradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/50`}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${skill.gradient} rounded-xl mb-6 flex items-center justify-center shadow-lg`}>
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">{skill.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-white">Professional Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                variants={cardVariants}
                className="text-left"
              >
                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">My Approach</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  I believe in the power of data-driven insights combined with intuitive user experiences. 
                  My approach integrates analytical rigor with creative problem-solving to deliver solutions 
                  that are both technically sound and user-friendly.
                </p>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Data-driven decision making
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    User-centered design thinking
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Continuous learning mindset
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                variants={cardVariants}
                className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Current Focus</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Currently pursuing my Computer Science degree while actively working on projects that 
                  bridge the gap between data science and web development.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 dark:text-slate-300">Data Science</span>
                    <div className="w-32 bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 dark:text-slate-300">Web Development</span>
                    <div className="w-32 bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 dark:text-slate-300">Machine Learning</span>
                    <div className="w-32 bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
