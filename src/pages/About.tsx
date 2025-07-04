
import React from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20">
        <About />
      </div>
    </div>
  );
};

export default AboutPage;
