
import React from 'react';
import Navigation from '../components/Navigation';
import Skills from '../components/Skills';

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <div className="pt-20">
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;
