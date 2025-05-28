import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Linkedin, MapPin, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="font-display font-bold text-2xl">QAITEK</span>
              <span className="text-gray-400">Solutions</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Driving digital transformation, automation & integration solutions in Malaysia
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} className="text-primary-400" />
                <a href="tel:+60135633202" className="hover:text-primary-400 transition-colors">
                  +60 135633202
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} className="text-primary-400" />
                <a 
                  href="mailto:fiaz.hassan@gmail.com" 
                  className="hover:text-primary-400 transition-colors"
                >
                  fiaz.hassan@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Linkedin size={18} className="text-primary-400" />
                <a 
                  href="https://www.linkedin.com/in/fiazhassan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  linkedin.com/in/fiazhassan
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="flex items-center text-gray-400 hover:text-primary-400 transition-colors">
                  <ChevronRight size={16} className="mr-1" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center text-gray-400 hover:text-primary-400 transition-colors">
                  <ChevronRight size={16} className="mr-1" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center text-gray-400 hover:text-primary-400 transition-colors">
                  <ChevronRight size={16} className="mr-1" /> Our Services
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="flex items-center text-gray-400 hover:text-primary-400 transition-colors">
                  <ChevronRight size={16} className="mr-1" /> Leadership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-gray-400 hover:text-primary-400 transition-colors">
                  <ChevronRight size={16} className="mr-1" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="flex items-center text-gray-400 hover:text-primary-400 transition-colors">
                  <ChevronRight size={16} className="mr-1" /> Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center text-gray-400 hover:text-primary-400 transition-colors">
                  <ChevronRight size={16} className="mr-1" /> Automation & QA
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center text-gray-400 hover:text-primary-400 transition-colors">
                  <ChevronRight size={16} className="mr-1" /> CI/CD & DevOps
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center text-gray-400 hover:text-primary-400 transition-colors">
                  <ChevronRight size={16} className="mr-1" /> End-to-End QA
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates on digital transformation and automation.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          &copy; {currentYear} QAITEK Solutions SDN BHD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;