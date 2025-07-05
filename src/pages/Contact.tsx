
import React from 'react';
import Navigation from '../components/Navigation';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <div className="pt-20">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
