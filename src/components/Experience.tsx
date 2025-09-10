import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-4 w-full text-center"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative pl-20"
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white dark:border-black shadow-lg"></div>

            {/* Experience Card */}
            <div className="bg-black/5 dark:bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-black/10 dark:border-white/20 text-left">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                  Virtual Intern
                </h3>
                <h4 className="text-lg font-semibold text-yellow-500 mb-2">
                  Eduskills & AICTE
                </h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  Data Analytics Program
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-black dark:text-white">
                      Automated 80% of data processing workflows
                    </span>{" "}
                    using Alteryx, significantly improving efficiency and
                    reducing manual intervention in data pipelines
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-black dark:text-white">
                      Designed comprehensive dashboards
                    </span>{" "}
                    for data visualization and business intelligence, enabling
                    stakeholders to make data-driven decisions
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-black dark:text-white">
                      Performed advanced data transformation and cleaning
                    </span>{" "}
                    operations, ensuring high-quality datasets for analysis and
                    reporting
                  </p>
                </div>
              </div>

              {/* Skills/Tags */}
              <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/20">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Alteryx",
                    "Data Analytics",
                    "Dashboard Design",
                    "Data Transformation",
                    "Data Cleaning",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-black/10 dark:bg-black/40 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium border border-black/10 dark:border-white/20 hover:bg-yellow-400 hover:text-black transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
