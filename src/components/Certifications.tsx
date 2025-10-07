import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink, Upload, Eye, X } from "lucide-react";

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
      file: "/certificates/python_for_datascience.png",
      type: "image",
      description:
        "Comprehensive course covering Python fundamentals for data analysis, pandas, numpy, and data visualization.",
    },
    {
      title: "Machine Learning Foundations",
      issuer: "AWS",
      category: "Machine Learning",
      color: "from-orange-500 to-orange-600",
      file: "/certificates/ml_aws.jpeg",
      type: "image",
      description:
        "Fundamental machine learning concepts, algorithms, and AWS ML services implementation.",
    },
    {
      title: "Cloud Foundations",
      issuer: "AWS",
      category: "Cloud Computing",
      color: "from-purple-500 to-purple-600",
      file: "/certificates/cloud_foundation.jpeg",
      type: "image",
      description:
        "AWS cloud fundamentals, architecture principles, and core cloud computing concepts.",
    },
    {
      title: "SQL & Database Programming",
      issuer: "Oracle",
      category: "Database",
      color: "from-red-500 to-red-600",
      file: "/certificates/oracle_sql.png",
      type: "image",
      description:
        "Advanced SQL queries, database design, optimization, and Oracle database management.",
    },
  ];

  const openCertificateModal = (cert: any) => setSelectedCertificate(cert);
  const closeCertificateModal = () => setSelectedCertificate(null);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 px-6 bg-background">
      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Professional certifications that validate my expertise in data science,
          cloud computing, and various technologies.
        </p>
      </motion.div>

      {/* Certification Cards */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-2xl border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div
              className="h-48 flex items-center justify-center bg-muted relative cursor-pointer"
              onClick={() => openCertificateModal(cert)}
            >
              <img
                src={cert.file}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Certificate Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-200">
                {cert.title}
              </h3>
              <p className="text-sm font-semibold text-accent mb-2">{cert.issuer}</p>
              <span
                className={`inline-block px-3 py-1 bg-gradient-to-r ${cert.color} text-white rounded-full text-xs font-medium mb-4`}
              >
                {cert.category}
              </span>
              <p className="text-sm text-muted-foreground mb-6">{cert.description}</p>

              <div className="flex items-center justify-between">
                <motion.button
                  onClick={() => openCertificateModal(cert)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-foreground to-accent text-white rounded-lg text-sm font-semibold"
                >
                  <Eye size={16} />
                  <span>View</span>
                </motion.button>

                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closeCertificateModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-card text-card-foreground rounded-2xl p-8 max-w-xl w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold">{selectedCertificate.title}</h3>
              <button
                onClick={closeCertificateModal}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            <img
              src={selectedCertificate.file}
              alt={selectedCertificate.title}
              className="w-full rounded-lg mb-6"
            />

            <p className="text-muted-foreground mb-4">{selectedCertificate.description}</p>
            <p className="font-semibold text-accent mb-4">
              Issuer: {selectedCertificate.issuer}
            </p>

            <a
              href={selectedCertificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-foreground to-accent text-white rounded-lg text-sm font-semibold"
            >
              <ExternalLink size={16} />
              <span>View / Download</span>
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certifications;
