import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import IndustryCard from '../components/IndustryCard';
import { industries } from '../data/industries';

const IndustriesPage: React.FC = () => {
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
            Industries We Serve
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We provide digital transformation solutions across various industries, bringing specialized expertise to each sector.
          </motion.p>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading 
            title="Our Industry Expertise" 
            subtitle="We have worked with clients across multiple sectors, developing industry-specific solutions."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Featured Case Studies" 
            subtitle="Learn how we've helped our clients achieve their digital transformation goals."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Banking Case Study" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary-600 font-semibold mb-2">Banking & Finance</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Automating End-to-End Testing for a Major Bank</h3>
                <p className="text-gray-600 mb-4">
                  We helped a leading bank automate their testing processes, reducing testing time by 70% 
                  and improving the quality of their digital banking platform.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Client: DBS Bank</div>
                  <a href="#" className="text-primary-600 font-medium hover:text-primary-700">Read More →</a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Healthcare Case Study" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary-600 font-semibold mb-2">Healthcare</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Streamlining Patient Management Workflows</h3>
                <p className="text-gray-600 mb-4">
                  We developed an integrated patient management system that improved operational efficiency 
                  and enhanced the patient experience for a healthcare provider.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Client: DocOncology</div>
                  <a href="#" className="text-primary-600 font-medium hover:text-primary-700">Read More →</a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Automotive Case Study" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary-600 font-semibold mb-2">Automotive</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">CI/CD Pipeline Optimization for Vehicle Software</h3>
                <p className="text-gray-600 mb-4">
                  We optimized the CI/CD pipeline for a leading automotive manufacturer, reducing deployment time 
                  and improving the quality of their vehicle software systems.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Client: Ford</div>
                  <a href="#" className="text-primary-600 font-medium hover:text-primary-700">Read More →</a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Maritime Case Study" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary-600 font-semibold mb-2">Shipping & Maritime</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Automating Logistics Tracking & Management</h3>
                <p className="text-gray-600 mb-4">
                  We developed an automated logistics tracking system for a shipping company, improving 
                  visibility and efficiency in their supply chain operations.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Client: Samudera</div>
                  <a href="#" className="text-primary-600 font-medium hover:text-primary-700">Read More →</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Approach Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Industry Approach" 
                className="rounded-lg shadow-xl max-w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Industry Approach</h2>
              <p className="text-lg text-gray-600 mb-6">
                We understand that each industry has its own unique challenges and requirements.
                Our approach is tailored to address these specific needs while leveraging our 
                expertise across multiple sectors.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry-Specific Expertise</h3>
                  <p className="text-gray-700">
                    We have deep knowledge of the specific challenges and opportunities in each industry we serve,
                    allowing us to provide targeted solutions.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cross-Industry Innovation</h3>
                  <p className="text-gray-700">
                    We leverage our experience across multiple industries to bring innovative ideas
                    and best practices to your specific challenges.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Regulatory Compliance</h3>
                  <p className="text-gray-700">
                    We ensure that our solutions comply with industry-specific regulations and standards,
                    providing peace of mind for your business.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              Ready to Transform Your Industry?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact us today to discuss how we can help you leverage digital transformation 
              to gain a competitive edge in your industry.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-700 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesPage;