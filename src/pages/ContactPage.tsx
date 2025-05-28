import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
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
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in touch with us to discuss how we can help transform your business operations.
          </motion.p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading 
                title="Get In Touch" 
                subtitle="We'd love to hear from you. Contact us using the form or the information below."
              />
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <Phone className="text-primary-600" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+60135633202" className="hover:text-primary-600 transition-colors">
                        +60 135633202
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <Mail className="text-primary-600" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:fiaz.hassan@gmail.com" className="hover:text-primary-600 transition-colors">
                        fiaz.hassan@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <Linkedin className="text-primary-600" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">LinkedIn</h3>
                    <p className="text-gray-600">
                      <a 
                        href="https://www.linkedin.com/in/fiazhassan/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-600 transition-colors"
                      >
                        linkedin.com/in/fiazhassan
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <MapPin className="text-primary-600" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Location</h3>
                    <p className="text-gray-600">
                      Kuala Lumpur, Malaysia
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="font-medium text-gray-700">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Saturday</p>
                    <p className="text-gray-600">By appointment</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Sunday</p>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder for future use) */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Visit Us" 
            subtitle="Our office is located in the heart of Kuala Lumpur."
            center
          />
          
          <motion.div
            className="bg-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Map placeholder - Office location will be added soon.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading 
            title="Frequently Asked Questions" 
            center
          />
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What areas do you serve?</h3>
                <p className="text-gray-600">
                  We primarily serve clients in Malaysia, but we also work with clients across Southeast Asia.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">How long does a typical project take?</h3>
                <p className="text-gray-600">
                  Project timelines vary depending on the scope and complexity. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Do you offer ongoing support?</h3>
                <p className="text-gray-600">
                  Yes, we provide ongoing support and maintenance for all our solutions to ensure long-term success.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">How do we get started?</h3>
                <p className="text-gray-600">
                  Simply contact us through the form above or give us a call. We'll schedule an initial consultation to discuss your needs.
                </p>
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
              Ready to Start Your Digital Transformation Journey?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact us today to discuss how QAITEK Solutions can help you optimize your 
              workflows, enhance quality, and automate your operations.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a 
                href="tel:+60135633202" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-700 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                <Phone size={20} className="mr-2" />
                Call Us
              </a>
              <a 
                href="mailto:fiaz.hassan@gmail.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                <Mail size={20} className="mr-2" />
                Email Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;