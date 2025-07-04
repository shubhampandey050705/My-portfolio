
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "IBM",
      category: "Data Science",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Data Analytics",
      issuer: "IBM",
      category: "Analytics",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Machine Learning Foundations",
      issuer: "AWS",
      category: "Machine Learning",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Cloud Foundations",
      issuer: "AWS",
      category: "Cloud Computing",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "SQL & Database Programming",
      issuer: "Oracle",
      category: "Database",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-6 h-6 bg-white rounded-md"></div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-lg font-semibold text-gray-600 mb-2">
                {cert.issuer}
              </p>
              
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {cert.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
