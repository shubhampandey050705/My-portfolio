
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      title: "Doubtify",
      description: "A comprehensive Q&A platform similar to StackOverflow where users can ask technical questions, receive community-driven answers, and engage through upvoting/downvoting systems.",
      technologies: ["React", "Express", "Node.js", "MySQL"],
      features: ["Question posting", "Answer suggestions", "Voting system", "User authentication"]
    },
    {
      title: "Heart Disease Predictor",
      description: "An intelligent health risk prediction tool that combines machine learning with modern web technologies to analyze ECG data and provide visual predictions with email notifications.",
      technologies: ["React", "TailwindCSS", "Express", "Flask", "ML/Pickle"],
      features: ["ECG upload", "ML predictions", "Visual analytics", "Email reports"]
    },
    {
      title: "COVID-19 Data Dashboard",
      description: "Interactive dashboard analyzing COVID-19 trends and patterns using Python data science libraries, providing comprehensive visualizations and insights.",
      technologies: ["Python", "Matplotlib", "NumPy", "Pandas"],
      features: ["Trend analysis", "Interactive graphs", "Data reports", "Pattern recognition"]
    },
    {
      title: "Pizza Sales Analysis",
      description: "SQL-based analytical dashboard designed to understand customer behavior, identify sales trends, and provide actionable business recommendations.",
      technologies: ["SQL", "Database Design", "Analytics"],
      features: ["Sales trends", "Customer insights", "Behavioral analysis", "Business recommendations"]
    },
    {
      title: "Drone Monitoring System",
      description: "Academic project integrating IoT sensors with drone technology for comprehensive area monitoring, combining hardware and software solutions.",
      technologies: ["IoT", "Sensors", "Data Integration"],
      features: ["Real-time monitoring", "Sensor integration", "Data collection", "Area surveillance"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Key Features
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
