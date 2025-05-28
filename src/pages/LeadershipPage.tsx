import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Linkedin, Mail, Phone } from 'lucide-react';

const LeadershipPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-700 text-white py-20">
        <div className="container-custom">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Leadership
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Meet the visionary behind QAITEK Solutions and learn about his expertise and experience.
          </motion.p>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/fiaz-hassan.jpg" 
                alt="Fiaz Hassan - Director of QAITEK Solutions" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-2xl font-bold">18+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fiaz Hassan</h2>
              <p className="text-xl text-primary-600 font-semibold mb-6">Director, QAITEK Solutions SDN BHD</p>
              
              <p className="text-lg text-gray-600 mb-6">
                Fiaz is a QA Automation Architect and DevOps Consultant with 18+ years of industry 
                experience across Singapore, Malaysia, USA, and Pakistan.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                Known for optimizing quality processes, training cross-functional teams, and designing 
                test solutions that reduce manual effort and enhance agility.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Fiaz has spearheaded automation in web app testing to allow teams to focus on innovation 
                rather than repetition, leading to significant improvements in efficiency and quality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.linkedin.com/in/fiazhassan/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-[#0077B5] text-white rounded-md hover:bg-[#0069a2] transition-colors"
                >
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn Profile
                </a>
                <a 
                  href="mailto:fiaz.hassan@gmail.com" 
                  className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  <Mail className="mr-2" size={20} />
                  Contact Directly
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Areas of Expertise" 
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">QA Automation</h3>
              <p className="text-gray-600">
                Expert in designing and implementing comprehensive test automation frameworks
                for web, mobile, and API testing using various tools and technologies.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">DevOps Integration</h3>
              <p className="text-gray-600">
                Skilled in integrating QA processes into DevOps pipelines, enabling continuous 
                testing and delivery for faster and more reliable software releases.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Digital Transformation</h3>
              <p className="text-gray-600">
                Experienced in leading digital transformation initiatives, helping organizations 
                streamline their processes and adopt modern technologies.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Team Leadership</h3>
              <p className="text-gray-600">
                Proven ability to lead and mentor cross-functional teams, fostering a culture of 
                quality, innovation, and continuous improvement.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Process Optimization</h3>
              <p className="text-gray-600">
                Adept at analyzing and optimizing business processes to improve efficiency, 
                reduce costs, and enhance quality.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Strategic Planning</h3>
              <p className="text-gray-600">
                Skilled in developing strategic plans for quality assurance and automation, 
                aligning with business goals and objectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading 
            title="Career Highlights" 
            center
          />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-4 h-4 rounded-full bg-primary-600 mt-2"></div>
                  <div className="w-0.5 h-full bg-primary-200 ml-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Senior QA Automation Architect</h3>
                  <p className="text-gray-600 mb-1">Singapore, 2020-2024</p>
                  <p className="text-gray-700">
                    Led the implementation of automated testing frameworks for major financial institutions,
                    resulting in a 70% reduction in testing time and improved software quality.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-4 h-4 rounded-full bg-primary-600 mt-2"></div>
                  <div className="w-0.5 h-full bg-primary-200 ml-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">DevOps Consultant</h3>
                  <p className="text-gray-600 mb-1">USA, 2017-2020</p>
                  <p className="text-gray-700">
                    Developed and implemented CI/CD pipelines for automotive clients, streamlining
                    their development processes and reducing release cycles by 50%.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-4 h-4 rounded-full bg-primary-600 mt-2"></div>
                  <div className="w-0.5 h-full bg-primary-200 ml-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">QA Team Lead</h3>
                  <p className="text-gray-600 mb-1">Malaysia, 2015-2017</p>
                  <p className="text-gray-700">
                    Managed a team of QA engineers for healthcare clients, implementing best practices
                    and improving test coverage by 80%.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-4 h-4 rounded-full bg-primary-600 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Test Automation Engineer</h3>
                  <p className="text-gray-600 mb-1">Pakistan, 2010-2015</p>
                  <p className="text-gray-700">
                    Developed and maintained automated test scripts for web and mobile applications,
                    improving test efficiency and reducing manual testing effort.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Message */}
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
              A Message from Our Director
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <blockquote className="text-xl italic mb-8">
                "At QAITEK Solutions, we are committed to helping organizations in Malaysia embrace 
                digital transformation and automation to stay competitive in today's fast-paced business 
                environment. Our goal is to not just implement technology solutions, but to be a trusted 
                partner in your digital journey."
              </blockquote>
              
              <p className="text-lg">
                — Fiaz Hassan, Director
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadershipPage;