import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BarChart2, Users, Layers } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';
import { timeline } from '../data/timeline';

const AboutPage: React.FC = () => {
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
            Company Overview
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learn more about QAITEK Solutions, our mission, values, and our journey so far.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              title="Our Mission" 
              center
            />
            
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-gray-700 italic">
                "To empower organizations in Malaysia through tailored digital transformation 
                solutions that optimize workflows, enhance quality, and automate repetitive operations."
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gray-50 p-6 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">Our Vision</h3>
                <p className="text-gray-700">
                  To be the leading provider of digital transformation solutions in Malaysia, 
                  known for our expertise, innovation, and commitment to delivering measurable 
                  results for our clients.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-gray-50 p-6 rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">Our Values</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Excellence in everything we do</li>
                  <li>• Innovation and continuous improvement</li>
                  <li>• Integrity and transparency</li>
                  <li>• Client-focused solutions</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="What We Do" 
            subtitle="We help organizations optimize their workflows, enhance quality, and automate repetitive operations."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Layers className="text-primary-600" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Integrate Digital Processes</h3>
              <p className="text-gray-600">
                We integrate digital processes and team-specific workflows to streamline operations and improve efficiency.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <BarChart2 className="text-primary-600" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Automate Manual Operations</h3>
              <p className="text-gray-600">
                We automate manual operations and daily activity tracking to reduce human error and increase productivity.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-primary-600" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Build Adaptable Systems</h3>
              <p className="text-gray-600">
                We build systems that adapt based on business scope and team dynamics for long-term success.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-primary-600" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Eliminate Repetitive Tasks</h3>
              <p className="text-gray-600">
                We eliminate repetitive tasks through smart test automation so your team can focus on innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Our Journey" 
            subtitle="QAITEK Solutions has evolved from years of experience in the industry."
            center
          />
          
          <div className="space-y-12 py-8">
            {timeline.map((item, index) => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                index={index}
                isLast={index === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold mb-2">18+</div>
              <div className="text-lg opacity-80">Years Experience</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-80">Projects Completed</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-lg opacity-80">Industries Served</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-lg opacity-80">Countries</div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;