import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Brain,
  Database,
  BarChart3,
  Code,
  Globe,
  Zap,
  GraduationCap,
  Briefcase,
  Award,
} from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const technicalSkills = [
    "Python",
    "Java",
    "JavaScript",
    "SQL",
    "React",
    "Node.js",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Flask",
    "MySQL",
    "Git",
    "Alteryx",
  ];

  const softSkills = [
    "Communication",
    "Project Management",
    "Team Leadership",
    "Problem Solving",
    "Analytical Thinking",
    "Time Management",
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* ================= About Section ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Hello! I’m Shubham Pandey, a 4th-year B.Tech Computer Science student at Galgotias University, with a strong interest in Data Science, Data Analytics, Machine Learning, and Full-Stack Development.<br></br>

            I love exploring how data can drive innovationwhether it’s building predictive models, analyzing trends, or deploying AI-powered solutions within web applications. Over time, I’ve developed projects like a Heart Disease Prediction , Q/A full stack website, AI-based Crop Recommendation System, Data anlysis of company using SQL, which reflect my passion for combining AI, analytics, and development to create practical, user-friendly solutions.
            <br></br>
   
            My vision is to not just be a developer, but also a problem-solver and mentor. I plan to work real world problem solving alongside my technical journey, aiming to bridge the gap between technology and management while guiding others in the field.
            <br>
            </br>

            Beyond coding, I’m always eager to explore new technologies, challenge myself with projects, and continuously learn to stay ahead in this fast-evolving tech world.{" "}
            

             My journey combines analytical thinking with creative
              problem-solving to build innovative solutions.
            </p>
          </motion.div>

          {/* Skills Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="text-accent" size={32} />,
                title: "Data Analytics",
                description:
                  "Transforming raw data into actionable insights using statistical analysis and visualization.",
              },
              {
                icon: <Brain className="text-accent" size={32} />,
                title: "Machine Learning",
                description:
                  "Building predictive models and intelligent systems with modern ML algorithms.",
              },
              {
                icon: <BarChart3 className="text-accent" size={32} />,
                title: "Data Science",
                description:
                  "Using Machine learning model to predict trends of data and fins insights.",
              },
              {
                icon: <Database className="text-accent" size={32} />,
                title: "Data Engineering",
                description:
                  "Designing robust pipelines, EDA processes, and database architectures.",
              },
              {
                icon: <Code className="text-accent" size={32} />,
                title: "Programming",
                description:
                  "Proficient in Python, SQL, JavaScript, and Java for analysis and development.",
              },
              {
                icon: <Globe className="text-accent" size={32} />,
                title: "Web Development",
                description:
                  "Creating responsive apps using React, Node.js, flask and modern cloud tech.",
              },
              {
                icon: <Zap className="text-accent" size={32} />,
                title: "Business Intelligence",
                description:
                  "Building dashboards and reports that enable smarter business decisions.",
              },
              
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-2xl border bg-card text-card-foreground p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Skills Section ================= */}
      <section className="py-20 border-t">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12"
          >
            <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Technical */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border bg-card text-card-foreground p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center md:justify-start">
                <Code className="mr-3 text-accent" size={24} />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Soft */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border bg-card text-card-foreground p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center md:justify-start">
                <Award className="mr-3 text-accent" size={24} />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= Experience Section ================= */}
      <section className="py-20 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent"></div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative pl-16 mb-12"
            >
              <div className="absolute left-2 w-8 h-8 flex items-center justify-center bg-accent text-background rounded-full shadow-lg">
                <Briefcase size={18} />
              </div>
              <div className="rounded-2xl border bg-card text-card-foreground p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-2">Virtual Intern</h3>
                <p className="text-accent font-medium mb-2">
                  Eduskills & AICTE — Data Analytics Program
                </p>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Automated 80% of workflows using Alteryx</li>
                  <li>• Built dashboards for visualization</li>
                  <li>• Performed advanced data cleaning & transformation</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= Education Section ================= */}
      <section className="py-20 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Education
            </span>
          </motion.h2>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent"></div>

            {[
              {
                degree: "B.Tech Computer Science Engineering",
                institution: "Galgotias University",
                duration: "2022 - 2026",
                grade: "CGPA: 8.5",
              },
              {
                degree: "Higher Secondary (12th)",
                institution: "Gyan Peethika School",
                duration: "2020 - 2022",
                grade: "85%",
              },
              {
                degree: "Secondary (10th)",
                institution: "Gyan Peethika School",
                duration: "2018 - 2020",
                grade: "82%",
              },
            ].map((edu, index) => (
              <motion.div
                key={edu.degree}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-16 mb-12"
              >
                <div className="absolute left-2 w-8 h-8 flex items-center justify-center bg-accent text-background rounded-full shadow-lg">
                  <GraduationCap size={18} />
                </div>
                <div className="rounded-2xl border bg-card text-card-foreground p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-accent font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{edu.duration}</span>
                    <span className="font-semibold">{edu.grade}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
