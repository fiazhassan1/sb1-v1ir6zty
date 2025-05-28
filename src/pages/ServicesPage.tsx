import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const ServicesPage: React.FC = () => {
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
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive digital transformation and automation solutions to optimize your business operations.
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading 
            title="How We Can Help You" 
            subtitle="We offer a wide range of services to help businesses transform, automate, and integrate their operations."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Process" 
            subtitle="We follow a structured approach to ensure successful digital transformation."
            center
          />
          
          <div className="relative">
            {/* Process line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold mx-auto relative z-10">
                    1
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-3 text-center text-gray-900">Discovery</h3>
                  <p className="text-gray-600 text-center">
                    We analyze your current processes, identify pain points, and understand your business goals.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold mx-auto relative z-10">
                    2
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-3 text-center text-gray-900">Planning</h3>
                  <p className="text-gray-600 text-center">
                    We develop a strategic plan tailored to your specific needs and business objectives.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold mx-auto relative z-10">
                    3
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-3 text-center text-gray-900">Implementation</h3>
                  <p className="text-gray-600 text-center">
                    We execute the transformation plan with a focus on minimizing disruption to your operations.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold mx-auto relative z-10">
                    4
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-3 text-center text-gray-900">Optimization</h3>
                  <p className="text-gray-600 text-center">
                    We continuously monitor and refine the solution to ensure optimal performance and results.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading 
            title="Benefits of Working With Us" 
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Increased Efficiency</h3>
              <p className="text-gray-600">
                Streamline your operations, reduce manual work, and eliminate bottlenecks for smoother workflows.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Reduced Costs</h3>
              <p className="text-gray-600">
                Cut operational expenses through automation and optimization of your business processes.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Enhanced Quality</h3>
              <p className="text-gray-600">
                Improve the quality of your products and services through standardized processes and testing.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Faster Time to Market</h3>
              <p className="text-gray-600">
                Accelerate your development and deployment cycles with CI/CD and automated testing.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Better Decision Making</h3>
              <p className="text-gray-600">
                Gain valuable insights from integrated systems and data-driven analytics.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Scalable Solutions</h3>
              <p className="text-gray-600">
                Implement solutions that grow with your business and adapt to changing requirements.
              </p>
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
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact us today to discuss how we can help you digitally transform your business 
              operations and achieve your goals.
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
                Contact Us Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;