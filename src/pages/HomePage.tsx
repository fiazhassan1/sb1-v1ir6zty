import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', 
            filter: 'brightness(0.4)'
          }}
        />
        
        <div className="container-custom relative z-10 text-white text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Driving Digital Transformation, <br className="hidden md:block" />
            Automation & Integration Solutions
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Led by Fiaz Hassan, a QA Automation Architect with 18+ years of experience 
            delivering scalable QA, DevOps, and automation strategies across banking, 
            healthcare, automotive, and enterprise domains.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/services">
              <Button variant="primary" size="lg">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Rest of the sections... */}

      {/* CTA Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Business Operations?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's discuss how QAITEK Solutions can help you optimize workflows, 
              enhance quality, and automate your operations.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/contact">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-primary-700 hover:bg-gray-100 font-semibold"
                >
                  Get Started Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;