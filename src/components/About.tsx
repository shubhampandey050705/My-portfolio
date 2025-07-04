
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Users, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const skills = [
    { category: "Programming", items: ["Java", "Python", "JavaScript", "SQL"] },
    { category: "Web Dev", items: ["React", "Express", "Node.js", "Tailwind CSS"] },
    { category: "Data Science", items: ["NumPy", "Pandas", "Matplotlib", "Flask"] },
    { category: "Tools", items: ["Git", "MySQL", "Excel", "Alteryx"] }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-800 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Professional Summary */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
          >
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
              I'm a motivated Computer Science student at Galgotias University with a passion for 
              creating impactful software solutions. With expertise spanning full-stack web development 
              and data science, I bring a unique blend of technical skills and creative problem-solving 
              to every project.
            </p>
            
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              My technical arsenal includes <span className="font-semibold text-blue-600">React, Express, Flask, MySQL</span>, 
              and comprehensive data science tools like <span className="font-semibold text-slate-800">Pandas, NumPy, and Matplotlib</span>. 
              I thrive in collaborative environments and have demonstrated strong leadership skills 
              through various academic and personal projects.
            </p>
          </motion.div>
        </div>

        {/* Skills, Experience, Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-4">
              <Code className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-slate-800">Skills</h3>
            </div>
            
            <div className="space-y-4">
              {skills.map((skillGroup, index) => (
                <div key={skillGroup.category}>
                  <h4 className="font-semibold text-slate-700 mb-2">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-slate-800">Experience</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800">Virtual Intern</h4>
                <p className="text-blue-600 font-medium">Eduskills & AICTE</p>
                <p className="text-sm text-slate-600 mt-2">
                  Data Analytics Program focusing on automation and dashboard design
                </p>
                <ul className="mt-2 space-y-1">
                  <li className="text-sm text-slate-600">• Automated 80% of data processing</li>
                  <li className="text-sm text-slate-600">• Designed comprehensive dashboards</li>
                  <li className="text-sm text-slate-600">• Data transformation & cleaning</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-slate-800">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800">B.Tech Computer Science</h4>
                <p className="text-blue-600 font-medium">Galgotias University</p>
                <p className="text-sm text-slate-600">2022 - 2026 | CGPA: 8.5</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800">Higher Secondary</h4>
                <p className="text-blue-600 font-medium">Gyan Peethika School</p>
                <p className="text-sm text-slate-600">2020 - 2022 | 85%</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800">Secondary</h4>
                <p className="text-blue-600 font-medium">Gyan Peethika School</p>
                <p className="text-sm text-slate-600">2018 - 2020 | 82%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
