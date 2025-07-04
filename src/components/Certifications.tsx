
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

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
      color: "from-blue-500 to-blue-600",
      image: null, // You can add certificate image URLs here
      verificationLink: "#"
    },
    {
      title: "Data Analytics",
      issuer: "IBM",
      category: "Analytics",
      color: "from-green-500 to-green-600",
      image: null,
      verificationLink: "#"
    },
    {
      title: "Machine Learning Foundations",
      issuer: "AWS",
      category: "Machine Learning",
      color: "from-orange-500 to-orange-600",
      image: null,
      verificationLink: "#"
    },
    {
      title: "Cloud Foundations",
      issuer: "AWS",
      category: "Cloud Computing",
      color: "from-purple-500 to-purple-600",
      image: null,
      verificationLink: "#"
    },
    {
      title: "SQL & Database Programming",
      issuer: "Oracle",
      category: "Database",
      color: "from-red-500 to-red-600",
      image: null,
      verificationLink: "#"
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
            <span className="bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-800 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in various technologies and methodologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* Certificate Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Award className="text-white" size={32} />
                    </div>
                  </div>
                )}
                
                {/* Overlay for future certificate images */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-lg font-semibold text-blue-600 mb-2">
                  {cert.issuer}
                </p>
                
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
                  {cert.category}
                </span>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Certificate</span>
                  <a
                    href={cert.verificationLink}
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    title="View Certificate"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructions for adding certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-3">How to Add Your Certificates:</h3>
          <div className="text-slate-600 space-y-2">
            <p>1. Upload your certificate images to the project</p>
            <p>2. Update the <code className="bg-slate-200 px-2 py-1 rounded text-sm">image</code> property in the certifications array</p>
            <p>3. Add verification links to the <code className="bg-slate-200 px-2 py-1 rounded text-sm">verificationLink</code> property</p>
            <p>4. The certificates will be displayed with hover effects and proper formatting</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
