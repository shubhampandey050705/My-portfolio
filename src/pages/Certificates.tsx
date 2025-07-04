
import React from 'react';
import Navigation from '../components/Navigation';
import Certifications from '../components/Certifications';

const CertificatesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20">
        <Certifications />
      </div>
    </div>
  );
};

export default CertificatesPage;
