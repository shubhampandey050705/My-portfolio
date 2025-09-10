import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Sun,
  Moon,
  BarChart3,
  Database,
  Brain,
} from "lucide-react";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(true);

  // Apply theme class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-brief");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navigation />

      {/* Dark/Light Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-white/20 dark:bg-black/40 border border-white/30 text-gray-800 dark:text-gray-200 hover:scale-110 transition-all"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Hero Section (Page 1) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fullscreen Background Image */}
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/2f745dba-75af-4de1-a404-e6afb3565d6b.png"
            alt="Shubham Pandey working on laptop"
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Side: Name + Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="text-white">Shubham</span>
              <br />
              <span className="text-yellow-400 font-bold">Pandey</span>
            </h1>
            <p className="text-lg text-gray-300 uppercase tracking-wider">
              DATA SCIENCE | DATA ANALYTICS
            </p>
            {/* Added paragraph here */}
            <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
              I'm a data science enthusiast passionate about transforming complex
              data into actionable insights and impactful solutions. Leveraging
              data science to drive strategic decision-making and solve real-world
              problems. My expertise spans data analysis, machine learning, and
              statistical modeling. A data professional skilled in uncovering
              trends, building predictive models, and communicating data-driven
              stories to the world.
            </p>
          </motion.div>

          {/* Right Side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
              <img
                src="/lovable-uploads/f5592b8c-c96f-4415-b66e-e941511cb225.png"
                alt="Shubham Pandey"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </section>

      {/* About Brief Section (Page 2 with Links + Contact + Socials + Portfolio) */}
      <section
        id="about-brief"
        className="min-h-screen flex flex-col items-center justify-center py-20 bg-background"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Navigation Links */}
          <nav className="space-y-4 pt-4 flex flex-col items-center">
            <Link
              to="/about"
              className="block text-lg hover:text-yellow-400 transition-colors duration-300 font-medium text-gray-300"
            >
              ABOUT ME
            </Link>
            <Link
              to="/experience"
              className="block text-lg hover:text-yellow-400 transition-colors duration-300 font-medium text-gray-300"
            >
              EXPERIENCE
            </Link>
            <Link
              to="/projects"
              className="block text-lg hover:text-yellow-400 transition-colors duration-300 font-medium text-gray-300"
            >
              PROJECTS
            </Link>
            <Link
              to="/skills"
              className="block text-lg hover:text-yellow-400 transition-colors duration-300 font-medium text-gray-300"
            >
              SKILLS
            </Link>
            <Link
              to="/contact"
              className="block text-lg hover:text-yellow-400 transition-colors duration-300 font-medium text-gray-300"
            >
              CONTACT
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="space-y-4 pt-8 text-center">
            <div className="space-y-1">
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                EMAIL
              </p>
              <p className="text-white">shubhampandey050705@gmail.com</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                PHONE
              </p>
              <p className="text-white">+91 7752884451</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 pt-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              {
                icon: Mail,
                href: "mailto:shubhampandey050705@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-white/10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-300 hover:text-yellow-400 border border-white/20"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Portfolio About */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                About This Portfolio
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-foreground to-accent mx-auto rounded-full mb-8"></div>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Welcome to my digital portfolio! I'm a passionate Computer
                Science student at Galgotias University with expertise in
                full-stack development, data science, and analytics. This
                portfolio showcases my journey through various technologies,
                data-driven projects, and achievements in software development
                and data analysis.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center p-6 bg-card rounded-xl hover:shadow-lg transition-all duration-300 border border-border"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Data Analytics
                  </h3>
                  <p className="text-muted-foreground">
                    Transforming raw data into actionable insights using
                    advanced statistical methods, visualization techniques, and
                    machine learning algorithms.
                  </p>
                </motion.div>

                <motion.div
                  className="text-center p-6 bg-card rounded-xl hover:shadow-lg transition-all duration-300 border border-border"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Machine Learning
                  </h3>
                  <p className="text-muted-foreground">
                    Building predictive models and implementing intelligent
                    solutions that learn from data to solve complex real-world
                    problems.
                  </p>
                </motion.div>

                <motion.div
                  className="text-center p-6 bg-card rounded-xl hover:shadow-lg transition-all duration-300 border border-border"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Full-Stack Development
                  </h3>
                  <p className="text-muted-foreground">
                    Creating end-to-end web applications with modern
                    technologies, focusing on scalable architecture and
                    exceptional user experiences.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
