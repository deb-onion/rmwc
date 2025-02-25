import React from 'react';
import { motion } from 'framer-motion';
import { animated } from '@react-spring/web';
import { useScrollAnimation } from '@/lib/animations/useScrollAnimation';

interface GridItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface InteractiveGridProps {
  items: GridItem[];
  columns?: number;
  gap?: number;
}

export const InteractiveGrid: React.FC<InteractiveGridProps> = ({
  items,
  columns = 3,
  gap = 8,
}) => {
  const { ref, springProps } = useScrollAnimation();

  return (
    <animated.div
      ref={ref}
      style={springProps}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-${gap}`}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
            delay: index * 0.1,
          }}
          className="relative overflow-hidden rounded-lg shadow-lg bg-white"
        >
          <div className="relative h-64 overflow-hidden">
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0"
              whileHover={{ opacity: 1 }}
            >
              <motion.a
                href={item.link}
                className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium transform hover:scale-105 transition-transform"
                whileHover={{ y: -2 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </animated.div>
  );
}; 