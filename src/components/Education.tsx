import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      description:
        "Comprehensive computer science curriculum with focus on software development, data structures, algorithms, and emerging technologies.",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Gyan Peethika School",
      duration: "2020 - 2022",
      grade: "85%",
      description:
        "Science stream with Mathematics and Computer Science as core subjects.",
    },
    {
      degree: "Secondary (10th)",
      institution: "Gyan Peethika School",
      duration: "2018 - 2020",
      grade: "82%",
      description:
        "Strong foundation in mathematics, science, and analytical thinking.",
    },
  ];

  return (
    <section
      id="education"
      className="relative min-h-screen flex items-center justify-center py-20 bg-white dark:bg-black"
    >
      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-black/5 dark:bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-black/10 dark:border-white/20 text-left"
            >
              {/* Degree */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {edu.degree}
              </h3>

              {/* Institution */}
              <h4 className="text-lg font-semibold text-yellow-500 dark:text-yellow-400 mb-2">
                {edu.institution}
              </h4>

              {/* Duration + Grade */}
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {edu.duration}
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  {edu.grade}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
