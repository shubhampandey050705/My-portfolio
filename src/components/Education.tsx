
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const educationData = [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "Galgotias University",
      duration: "2022 - 2026",
      grade: "CGPA: 8.5",
      description: "Comprehensive computer science curriculum with focus on software development, data structures, algorithms, and emerging technologies."
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Gyan Peethika School",
      duration: "2020 - 2022",
      grade: "85%",
      description: "Science stream with Mathematics and Computer Science as core subjects."
    },
    {
      degree: "Secondary (10th)",
      institution: "Gyan Peethika School",
      duration: "2018 - 2020",
      grade: "82%",
      description: "Strong foundation in mathematics, science, and analytical thinking."
    }
  ];

  return (
    <section className="py-20 bg-white">
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
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600 mb-2">
                          {edu.institution}
                        </h4>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 font-medium mb-1">{edu.duration}</p>
                        <p className="text-lg font-bold text-green-600">{edu.grade}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
