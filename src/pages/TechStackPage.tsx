import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import TechStackItem from '../components/TechStackItem';
import { techStack } from '../data/techStack';

const TechStackPage: React.FC = () => {
  // Group tech stack by category
  const groupedTechStack = techStack.reduce<Record<string, typeof techStack>>(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {}
  );

  // Order of categories to display
  const categoryOrder = [
    'Automation',
    'Languages',
    'CI/CD',
    'Testing',
    'Version Control',
  ];

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
            Tech Stack
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We use the latest technologies and tools to deliver high-quality solutions for our clients.
          </motion.p>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading 
            title="Our Technology Expertise" 
            subtitle="We specialize in a wide range of technologies to provide comprehensive solutions."
            center
          />
          
          <div className="space-y-16">
            {categoryOrder.map((category, categoryIndex) => (
              <div key={category} className="space-y-4">
                <motion.h3
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {category}
                </motion.h3>
                
                <motion.div 
                  className="h-1 w-16 bg-primary-600 mb-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                
                <div className="flex flex-wrap gap-3">
                  {groupedTechStack[category]?.map((tech, index) => (
                    <TechStackItem 
                      key={tech.id} 
                      tech={tech} 
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Approach Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach to Technology</h2>
              <p className="text-lg text-gray-600 mb-6">
                At QAITEK Solutions, we believe in using the right technology for the right problem.
                Our approach is pragmatic and results-oriented, focusing on delivering solutions that
                provide real business value.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology Selection</h3>
                  <p className="text-gray-700">
                    We carefully select the most appropriate technologies based on your specific requirements,
                    existing infrastructure, and long-term goals.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Practices</h3>
                  <p className="text-gray-700">
                    We follow industry best practices and standards to ensure the quality,
                    maintainability, and security of our solutions.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Learning</h3>
                  <p className="text-gray-700">
                    We continuously learn and adapt to new technologies and methodologies to stay
                    at the forefront of digital transformation.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Technology Approach" 
                className="rounded-lg shadow-xl max-w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Benefits Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading 
            title="Benefits of Our Technology Stack" 
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
              <h3 className="text-xl font-bold mb-3 text-gray-900">Scalability</h3>
              <p className="text-gray-600">
                Our solutions are built to scale with your business, accommodating growth and changing requirements.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Reliability</h3>
              <p className="text-gray-600">
                We use proven, enterprise-grade technologies that provide stable and reliable performance.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Security</h3>
              <p className="text-gray-600">
                Security is built into our solutions from the ground up, protecting your data and systems.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Integration</h3>
              <p className="text-gray-600">
                Our technologies integrate seamlessly with your existing systems and third-party applications.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Performance</h3>
              <p className="text-gray-600">
                We optimize for performance, ensuring fast and responsive applications and workflows.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Future-Proof</h3>
              <p className="text-gray-600">
                We select technologies with longevity in mind, ensuring your solutions remain viable for years to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStackPage;