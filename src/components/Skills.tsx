import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "SQL"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Web Development",
      skills: ["React", "Express", "Node.js", "HTML/CSS", "Tailwind CSS"],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Data Science & Analytics",
      skills: ["NumPy", "Pandas", "Matplotlib", "Flask", "Jupyter Notebook"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "MySQL", "Excel", "Alteryx"],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Soft Skills",
      skills: [
        "Communication",
        "Project Management",
        "Team Leadership",
        "Problem Solving",
      ],
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-20 
                 bg-background text-foreground transition-colors duration-300"
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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card text-card-foreground p-6 rounded-2xl shadow-lg 
                         hover:shadow-2xl transition-all duration-300 
                         border border-border text-center"
            >
              {/* Icon Circle */}
              <div
                className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}
              >
                <div className="w-6 h-6 bg-white rounded-md"></div>
              </div>

              {/* Category Title */}
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted text-muted-foreground 
                               rounded-full text-sm font-medium border border-border
                               hover:bg-yellow-400 hover:text-black transition-colors duration-300"
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
