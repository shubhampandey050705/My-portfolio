
import React from 'react';
import Navigation from '../components/Navigation';
import Experience from '../components/Experience';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20">
        <Experience />
      </div>
    </div>
  );
};

export default ExperiencePage;
