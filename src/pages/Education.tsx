
import React from 'react';
import Navigation from '../components/Navigation';
import Education from '../components/Education';

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <div className="pt-20">
        <Education />
      </div>
    </div>
  );
};

export default EducationPage;
