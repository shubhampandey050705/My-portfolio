
import React from 'react';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
