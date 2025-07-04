
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Users, Briefcase, GraduationCap, Award, Sparkles, Target } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const skills = [
    { category: "Programming", items: ["Java", "Python", "JavaScript", "SQL"], icon: Code, color: "from-blue-500 to-indigo-600" },
    { category: "Web Dev", items: ["React", "Express", "Node.js", "Tailwind CSS"], icon: Database, color: "from-green-500 to-emerald-600" },
    { category: "Data Science", items: ["NumPy", "Pandas", "Matplotlib", "Flask"], icon: Target, color: "from-purple-500 to-violet-600" },
    { category: "Tools", items: ["Git", "MySQL", "Excel", "Alteryx"], icon: Award, color: "from-orange-500 to-red-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-blue-600 mr-3" size={32} />
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <Sparkles className="text-purple-600 ml-3" size={32} />
          </div>
          <div className="w-32 h-1.5 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        {/* Enhanced Professional Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm p-10 md:p-16 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-6">
                  <Users className="mr-2" size={16} />
                  Software Developer & Data Enthusiast
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 text-center font-light">
                I'm a <span className="font-bold text-blue-600">passionate Computer Science student</span> at Galgotias University, 
                dedicated to crafting innovative software solutions that make a meaningful impact. My journey spans across 
                <span className="font-bold text-purple-600"> full-stack development</span> and 
                <span className="font-bold text-indigo-600"> data science</span>, where I blend technical expertise with creative problem-solving.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                  <div className="text-slate-600">Years of Coding</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mt-8 text-center">
                My technical toolkit includes cutting-edge technologies like <span className="font-semibold text-blue-600">React, Express, Flask, MySQL</span>, 
                complemented by powerful data science tools such as <span className="font-semibold text-slate-800">Pandas, NumPy, and Matplotlib</span>. 
                I excel in collaborative environments and have proven leadership capabilities through various academic and personal projects.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Skills, Experience, Education Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Enhanced Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                <Code className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 ml-4">Technical Skills</h3>
            </div>
            
            <div className="space-y-6">
              {skills.map((skillGroup, index) => {
                const IconComponent = skillGroup.icon;
                return (
                  <motion.div 
                    key={skillGroup.category}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-3">
                      <div className={`p-2 bg-gradient-to-r ${skillGroup.color} rounded-lg mr-3`}>
                        <IconComponent className="text-white" size={16} />
                      </div>
                      <h4 className="font-bold text-slate-700">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-11">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-blue-200 hover:text-blue-700 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Enhanced Experience Summary */}
          <motion.div
            variants={itemVariants}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 ml-4">Experience</h3>
            </div>
            
            <div className="space-y-6">
              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                <h4 className="font-bold text-slate-800 text-lg">Virtual Intern</h4>
                <p className="text-blue-600 font-semibold text-lg">Eduskills & AICTE</p>
                <p className="text-slate-600 font-medium mb-3">Data Analytics Program</p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      <span className="font-semibold text-green-600">80% automation</span> of data processing workflows
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Designed <span className="font-semibold text-green-600">comprehensive dashboards</span>
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Advanced <span className="font-semibold text-green-600">data transformation</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Education Summary */}
          <motion.div
            variants={itemVariants}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl shadow-lg">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 ml-4">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border-l-4 border-purple-500">
                  <h4 className="font-bold text-slate-800 text-lg">B.Tech Computer Science</h4>
                  <p className="text-purple-600 font-semibold">Galgotias University</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-slate-600 text-sm">2022 - 2026</p>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">CGPA: 8.5</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-slate-800">Higher Secondary (12th)</h4>
                  <p className="text-blue-600 font-semibold">Gyan Peethika School</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-slate-600 text-sm">2020 - 2022</p>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">85%</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
                  <h4 className="font-bold text-slate-800">Secondary (10th)</h4>
                  <p className="text-green-600 font-semibold">Gyan Peethika School</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-slate-600 text-sm">2018 - 2020</p>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">82%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
