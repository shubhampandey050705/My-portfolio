
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Users, Briefcase, GraduationCap, Award, Sparkles, Target, BarChart3, Brain, TrendingUp } from 'lucide-react';

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

  const dataSkills = [
    {
      title: "Data Analysis",
      description: "Expert in extracting insights from complex datasets using statistical methods and visualization techniques",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      skills: ["Python", "Pandas", "NumPy", "SQL"]
    },
    {
      title: "Machine Learning",
      description: "Proficient in building predictive models and implementing ML algorithms for real-world applications",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: ["Scikit-learn", "TensorFlow", "Data Modeling", "Algorithm Design"]
    },
    {
      title: "Data Visualization",
      description: "Creating compelling visual stories from data using modern visualization tools and libraries",
      icon: TrendingUp,
      color: "from-green-500 to-teal-500",
      skills: ["Matplotlib", "Seaborn", "Plotly", "Dashboard Design"]
    }
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl"
        ></motion.div>
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl"
        ></motion.div>
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl"
        ></motion.div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-blue-300 opacity-30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-300 rounded-full opacity-40"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-blue-600 mr-4" size={40} />
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-purple-600 ml-4" size={40} />
            </motion.div>
          </div>
          <motion.div 
            className="w-40 h-2 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 mx-auto rounded-full shadow-2xl"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Enhanced Professional Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto mb-24"
        >
          <motion.div
            variants={cardVariants}
            className="bg-white/90 backdrop-blur-lg p-12 md:p-20 rounded-[2rem] shadow-2xl border border-white/30 relative overflow-hidden"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-pink-50/40 rounded-[2rem]"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <motion.div 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full text-lg font-bold mb-8 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users className="mr-3" size={20} />
                  Software Developer & Data Scientist
                </motion.div>
              </div>
              
              <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed mb-10 text-center font-light">
                I'm a <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">passionate Computer Science student</span> at Galgotias University, 
                dedicated to crafting innovative software solutions and extracting meaningful insights from data. My expertise spans across 
                <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> full-stack development</span>, 
                <span className="font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> data science</span>, and 
                <span className="font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> analytics</span>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">3+</div>
                  <div className="text-slate-600 font-medium">Years of Coding</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">10+</div>
                  <div className="text-slate-600 font-medium">Projects Completed</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">5+</div>
                  <div className="text-slate-600 font-medium">Data Science Projects</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Data Science Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Data Science Expertise
              </span>
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transforming raw data into actionable insights through advanced analytics and machine learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  variants={cardVariants}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-700 hover:scale-105 relative overflow-hidden">
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="text-white" size={32} />
                      </div>
                      
                      <h4 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {skill.title}
                      </h4>
                      
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {skill.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {skill.skills.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1.5 bg-gradient-to-r ${skill.color} bg-opacity-10 text-slate-700 rounded-full text-sm font-medium hover:bg-opacity-20 transition-all duration-300`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced Skills, Experience, Education Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          {/* Enhanced Skills Summary */}
          <motion.div
            variants={cardVariants}
            className="bg-white/95 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-700 hover:scale-105 relative overflow-hidden group"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl">
                  <Code className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 ml-6">Technical Skills</h3>
              </div>
              
              <div className="space-y-8">
                {skills.map((skillGroup, index) => {
                  const IconComponent = skillGroup.icon;
                  return (
                    <motion.div 
                      key={skillGroup.category}
                      variants={itemVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`p-3 bg-gradient-to-r ${skillGroup.color} rounded-xl mr-4 shadow-lg`}>
                          <IconComponent className="text-white" size={18} />
                        </div>
                        <h4 className="font-bold text-slate-700 text-lg">{skillGroup.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-3 ml-16">
                        {skillGroup.items.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-blue-200 hover:text-blue-700 transition-all duration-300 cursor-default shadow-sm"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Experience Summary */}
          <motion.div
            variants={cardVariants}
            className="bg-white/95 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-700 hover:scale-105 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl">
                  <Briefcase className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 ml-6">Experience</h3>
              </div>
              
              <div className="space-y-8">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-3 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg"></div>
                  <h4 className="font-bold text-slate-800 text-xl mb-2">Virtual Intern</h4>
                  <p className="text-green-600 font-bold text-lg mb-1">Eduskills & AICTE</p>
                  <p className="text-slate-600 font-semibold mb-4">Data Analytics Program</p>
                  
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-start space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                      <p className="text-slate-700 leading-relaxed">
                        <span className="font-bold text-green-600">80% automation</span> of data processing workflows using advanced tools
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                      <p className="text-slate-700 leading-relaxed">
                        Designed <span className="font-bold text-green-600">comprehensive dashboards</span> for data visualization
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                      <p className="text-slate-700 leading-relaxed">
                        Implemented <span className="font-bold text-green-600">data transformation</span> techniques
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Education Summary */}
          <motion.div
            variants={cardVariants}
            className="bg-white/95 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-700 hover:scale-105 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl shadow-xl">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 ml-6">Education</h3>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-6 bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl border-l-4 border-purple-500 shadow-lg">
                    <h4 className="font-bold text-slate-800 text-xl mb-2">B.Tech Computer Science</h4>
                    <p className="text-purple-600 font-bold text-lg mb-3">Galgotias University</p>
                    <div className="flex justify-between items-center">
                      <p className="text-slate-600">2022 - 2026</p>
                      <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold shadow-sm">CGPA: 8.5</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-500 shadow-lg">
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Higher Secondary (12th)</h4>
                    <p className="text-blue-600 font-bold">Gyan Peethika School</p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-slate-600 text-sm">2020 - 2022</p>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold shadow-sm">85%</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-500 shadow-lg">
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Secondary (10th)</h4>
                    <p className="text-green-600 font-bold">Gyan Peethika School</p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-slate-600 text-sm">2018 - 2020</p>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold shadow-sm">82%</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
