
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Upload, Eye, X } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "IBM",
      category: "Data Science",
      color: "from-blue-500 to-blue-600",
      image: null, // Add your certificate image path here
      verificationLink: "#",
      description: "Comprehensive course covering Python fundamentals for data analysis, pandas, numpy, and data visualization."
    },
    {
      title: "Data Analytics",
      issuer: "IBM",
      category: "Analytics",
      color: "from-green-500 to-green-600",
      image: null, // Add your certificate image path here
      verificationLink: "#",
      description: "Advanced data analytics techniques, statistical analysis, and business intelligence concepts."
    },
    {
      title: "Machine Learning Foundations",
      issuer: "AWS",
      category: "Machine Learning",
      color: "from-orange-500 to-orange-600",
      image: null, // Add your certificate image path here
      verificationLink: "#",
      description: "Fundamental machine learning concepts, algorithms, and AWS ML services implementation."
    },
    {
      title: "Cloud Foundations",
      issuer: "AWS",
      category: "Cloud Computing",
      color: "from-purple-500 to-purple-600",
      image: null, // Add your certificate image path here
      verificationLink: "#",
      description: "AWS cloud fundamentals, architecture principles, and core cloud computing concepts."
    },
    {
      title: "SQL & Database Programming",
      issuer: "Oracle",
      category: "Database",
      color: "from-red-500 to-red-600",
      image: null, // Add your certificate image path here
      verificationLink: "#",
      description: "Advanced SQL queries, database design, optimization, and Oracle database management."
    }
  ];

  const openCertificateModal = (cert: any) => {
    setSelectedCertificate(cert);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 mx-auto rounded-full shadow-lg mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Professional certifications that validate my expertise in data science, cloud computing, and various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden"
            >
              {/* Certificate Image or Placeholder */}
              <div className="h-56 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden cursor-pointer"
                   onClick={() => openCertificateModal(cert)}>
                {cert.image ? (
                  <div className="relative">
                    <img 
                      src={cert.image} 
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 flex items-center justify-center">
                      <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full group-hover:scale-105 transition-transform duration-300">
                    <div className={`w-20 h-20 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center mb-4 shadow-xl`}>
                      <Award className="text-white" size={40} />
                    </div>
                    <div className="text-center">
                      <Upload className="text-slate-400 mx-auto mb-2" size={24} />
                      <p className="text-sm text-slate-500 font-medium">Click to add certificate image</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-xl font-bold text-blue-600 mb-3">
                  {cert.issuer}
                </p>
                
                <span className={`inline-block px-4 py-2 bg-gradient-to-r ${cert.color} bg-opacity-10 text-slate-700 rounded-full text-sm font-bold mb-4`}>
                  {cert.category}
                </span>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between">
                  <motion.button
                    onClick={() => openCertificateModal(cert)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                  >
                    <Eye size={16} />
                    <span>View Details</span>
                  </motion.button>
                  
                  <a
                    href={cert.verificationLink}
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    title="Verify Certificate"
                  >
                    <ExternalLink size={20} />
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 bg-white/90 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <Upload className="mr-3 text-blue-600" size={28} />
            How to Add Your Certificate Images
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-600">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                <p>Upload your certificate images to the <code className="bg-slate-200 px-2 py-1 rounded text-sm font-mono">public/certificates/</code> folder</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                <p>Update the <code className="bg-slate-200 px-2 py-1 rounded text-sm font-mono">image</code> property with the path to your certificate image</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                <p>Add verification links to the <code className="bg-slate-200 px-2 py-1 rounded text-sm font-mono">verificationLink</code> property</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                <p>Certificates will display with hover effects and detailed modal previews</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeCertificateModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-slate-800">{selectedCertificate.title}</h3>
              <button
                onClick={closeCertificateModal}
                className="text-slate-400 hover:text-slate-600 transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            
            {selectedCertificate.image ? (
              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} Certificate`}
                className="w-full rounded-2xl shadow-lg mb-6"
              />
            ) : (
              <div className="w-full h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <Award className="text-slate-400 mx-auto mb-4" size={64} />
                  <p className="text-slate-500 font-medium">Certificate image will appear here</p>
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Issuer</h4>
                <p className="text-blue-600 font-semibold text-xl">{selectedCertificate.issuer}</p>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Category</h4>
                <span className={`inline-block px-4 py-2 bg-gradient-to-r ${selectedCertificate.color} bg-opacity-10 text-slate-700 rounded-full font-bold`}>
                  {selectedCertificate.category}
                </span>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Description</h4>
                <p className="text-slate-600 leading-relaxed">{selectedCertificate.description}</p>
              </div>
              
              <div className="flex space-x-4 pt-6">
                <a
                  href={selectedCertificate.verificationLink}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <ExternalLink size={18} />
                  <span>Verify Certificate</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certifications;
