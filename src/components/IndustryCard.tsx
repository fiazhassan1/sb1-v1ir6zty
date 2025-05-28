import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, HeartPulse, Car, Ship, ShoppingBag, Cpu } from 'lucide-react';
import { Industry } from '../types';

interface IndustryCardProps {
  industry: Industry;
  index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry, index }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'landmark':
        return <Landmark size={36} className="text-primary-600" />;
      case 'heart-pulse':
        return <HeartPulse size={36} className="text-primary-600" />;
      case 'car':
        return <Car size={36} className="text-primary-600" />;
      case 'ship':
        return <Ship size={36} className="text-primary-600" />;
      case 'shopping-bag':
        return <ShoppingBag size={36} className="text-primary-600" />;
      case 'cpu':
        return <Cpu size={36} className="text-primary-600" />;
      default:
        return <Cpu size={36} className="text-primary-600" />;
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="p-6">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100">
          {getIcon(industry.icon)}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{industry.name}</h3>
        <div className="flex flex-wrap gap-2">
          {industry.clients.map((client, idx) => (
            <span
              key={idx}
              className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default IndustryCard;