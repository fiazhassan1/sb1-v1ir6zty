import React from 'react';
import { motion } from 'framer-motion';
import { TechItem } from '../types';

interface TechStackItemProps {
  tech: TechItem;
  index: number;
}

const TechStackItem: React.FC<TechStackItemProps> = ({ tech, index }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Automation':
        return 'bg-primary-100 text-primary-800 border-primary-200';
      case 'Languages':
        return 'bg-secondary-100 text-secondary-800 border-secondary-200';
      case 'CI/CD':
        return 'bg-accent-100 text-accent-800 border-accent-200';
      case 'Testing':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Version Control':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <motion.div
      className={`px-4 py-2 rounded-md border ${getCategoryColor(tech.category)} font-medium text-sm md:text-base`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
    >
      {tech.name}
    </motion.div>
  );
};

export default TechStackItem;