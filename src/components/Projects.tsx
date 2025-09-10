import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Code, Database, Cloud, BarChart } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      title: "Doubtify",
      description:
        "A comprehensive Q&A platform similar to StackOverflow where users can ask technical questions, receive community-driven answers, and engage through upvoting/downvoting systems. Features user authentication, question categorization, and real-time notifications.",
      technologies: [
        "React.js",
        "Express.js",
        "Node.js",
        "MySQL",
        "JWT Authentication",
        "Socket.io",
      ],
      features: [
        "User registration and authentication",
        "Question posting with rich text editor",
        "Community-driven answer system",
        "Upvoting/downvoting mechanism",
        "Real-time notifications",
        "Question categorization and tagging",
      ],
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Heart Disease Predictor",
      description:
        "An intelligent health risk prediction tool that combines machine learning with modern web technologies to analyze ECG data and provide visual predictions with email notifications. Uses trained ML models for accurate health assessments.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Express.js",
        "Flask",
        "Python",
        "Scikit-learn",
        "Pickle",
        "EmailJS",
      ],
      features: [
        "ECG data upload and processing",
        "Machine learning predictions",
        "Interactive data visualization",
        "Email report generation",
        "Risk assessment dashboard",
        "Historical data tracking",
      ],
      icon: BarChart,
      color: "from-red-500 to-pink-500",
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "COVID-19 Data Dashboard",
      description:
        "Interactive dashboard analyzing COVID-19 trends and patterns using Python data science libraries, providing comprehensive visualizations and insights. Features real-time data updates and comparative analysis across regions.",
      technologies: [
        "Python",
        "Matplotlib",
        "NumPy",
        "Pandas",
        "Plotly",
        "Streamlit",
        "COVID-19 API",
      ],
      features: [
        "Real-time COVID-19 data analysis",
        "Interactive trend visualization",
        "Regional comparison charts",
        "Statistical pattern recognition",
        "Exportable data reports",
        "Mobile-responsive interface",
      ],
      icon: BarChart,
      color: "from-green-500 to-emerald-500",
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Pizza Sales Analysis",
      description:
        "SQL-based analytical dashboard designed to understand customer behavior, identify sales trends, and provide actionable business recommendations. Includes comprehensive data modeling and visualization.",
      technologies: [
        "SQL",
        "MySQL",
        "Power BI",
        "Python",
        "Pandas",
        "Database Design",
      ],
      features: [
        "Comprehensive sales trend analysis",
        "Customer behavior insights",
        "Revenue optimization recommendations",
        "Interactive business dashboards",
        "Automated reporting system",
        "Data warehouse implementation",
      ],
      icon: Database,
      color: "from-orange-500 to-amber-500",
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Drone Monitoring System",
      description:
        "Academic project integrating IoT sensors with drone technology for comprehensive area monitoring, combining hardware and software solutions. Features real-time data collection and analysis.",
      technologies: [
        "IoT Sensors",
        "Arduino",
        "Python",
        "Data Integration",
        "Real-time Processing",
        "Wireless Communication",
      ],
      features: [
        "Real-time area monitoring",
        "IoT sensor data integration",
        "Automated data collection",
        "Environmental surveillance",
        "Alert notification system",
        "Data visualization dashboard",
      ],
      icon: Cloud,
      color: "from-purple-500 to-violet-500",
      githubLink: "#",
      liveLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center"
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack
            development, data science, and problem-solving skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gray-100 dark:bg-white/10 dark:backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-white/20 text-left"
            >
              {/* Top Row: Icon + Links */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center shadow-md`}
                >
                  <project.icon className="text-white" size={24} />
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.githubLink}
                    className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                    title="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveLink}
                    className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                    title="View Live Project"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white group-hover:text-yellow-400 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-yellow-500 uppercase tracking-wide mb-3">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-black/40 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium border border-gray-300 dark:border-white/20 hover:bg-yellow-400 hover:text-black transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-sm font-semibold text-yellow-500 uppercase tracking-wide mb-3">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start text-sm text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
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
