
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "SQL"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Web Development",
      skills: ["React", "Express", "Node.js", "HTML/CSS", "Tailwind CSS"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Data Science & Analytics",
      skills: ["NumPy", "Pandas", "Matplotlib", "Flask", "Jupyter Notebook"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "MySQL", "Excel", "Alteryx"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Project Management", "Team Leadership", "Problem Solving"],
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl mb-4 flex items-center justify-center`}>
                <div className="w-6 h-6 bg-white rounded-md"></div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
