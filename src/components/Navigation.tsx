
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:bg-gray-900/95 dark:border-gray-700' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent dark:from-white dark:to-blue-400"
              whileHover={{ scale: 1.05 }}
            >
              SP
            </motion.div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 font-medium relative ${
                  location.pathname === item.path
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    layoutId="activeTab"
                  />
                )}
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-slate-600 dark:text-slate-300" />
              ) : (
                <Sun size={20} className="text-slate-600 dark:text-slate-300" />
              )}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? (
                <Moon size={18} className="text-slate-600 dark:text-slate-300" />
              ) : (
                <Sun size={18} className="text-slate-600 dark:text-slate-300" />
              )}
            </motion.button>
            
            <button className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
