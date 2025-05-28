import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItem as TimelineItemType } from '../types';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isLast }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-8 left-4 w-0.5 h-full bg-primary-200 md:left-1/2 md:-ml-0.5"></div>
      )}
      
      <motion.div 
        className="relative flex items-start md:justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* Year bubble */}
        <div className="flex flex-col md:items-end md:w-5/12 md:pr-8">
          <div className="hidden md:block z-10 rounded-full bg-primary-100 text-primary-800 font-bold py-2 px-4 inline-block mb-2">
            {item.year}
          </div>
          <div className="hidden md:block text-xl font-bold text-gray-900">{item.title}</div>
        </div>
        
        {/* Content for mobile and desktop */}
        <div className="flex md:w-5/12 md:pl-8">
          <div className="z-10 rounded-full bg-primary-600 border-4 border-white shadow-md w-8 h-8 mt-1 mr-4 md:absolute md:left-1/2 md:-ml-4"></div>
          <div className="bg-white rounded-lg shadow-md p-5 md:mt-0">
            <div className="md:hidden rounded-full bg-primary-100 text-primary-800 font-bold py-1 px-3 inline-block mb-2 text-sm">
              {item.year}
            </div>
            <h3 className="text-xl font-bold text-gray-900 md:hidden">{item.title}</h3>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;