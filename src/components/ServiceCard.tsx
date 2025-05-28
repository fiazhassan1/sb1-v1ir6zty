import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Cog, GitBranch, CheckCircle } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'workflow':
        return <Workflow size={40} className="text-primary-600" />;
      case 'cog':
        return <Cog size={40} className="text-primary-600" />;
      case 'git-branch':
        return <GitBranch size={40} className="text-primary-600" />;
      case 'check-circle':
        return <CheckCircle size={40} className="text-primary-600" />;
      default:
        return <Cog size={40} className="text-primary-600" />;
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6">
        <div className="mb-4">{getIcon(service.icon)}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;