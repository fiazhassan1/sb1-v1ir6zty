import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Tech Stack', path: '/tech-stack' },
  { name: 'Industries', path: '/industries' },
  { name: 'Leadership', path: '/leadership' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className={`font-display font-bold text-2xl ${isScrolled ? 'text-primary-700' : 'text-white'}`}>
            QAITEK
          </span>
          <span className={`hidden md:inline-block font-display ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
            Solutions SDN BHD
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative font-medium ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-white/80'
              } transition-colors duration-200`}
            >
              {item.name}
              {pathname === item.path && (
                <motion.span
                  layoutId="navIndicator"
                  className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    isScrolled ? 'bg-primary-600' : 'bg-white'
                  }`}
                  transition={{ duration: 0.3, type: 'spring' }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <button
          onClick={toggleMenu}
          className={`lg:hidden p-2 rounded-md ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white shadow-md"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`py-2 px-4 rounded-md font-medium ${
                  pathname === item.path
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;