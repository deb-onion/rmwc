import React from 'react';
import { motion } from 'framer-motion';

const resources = [
  {
    category: 'Planning Guides',
    items: [
      {
        title: 'Wedding Timeline',
        description: 'Month-by-month planning checklist',
        icon: '📅',
        link: '/resources/timeline'
      },
      {
        title: 'Budget Calculator',
        description: 'Customizable wedding budget planner',
        icon: '💰',
        link: '/resources/budget'
      },
      {
        title: 'Vendor Guide',
        description: 'Curated list of local vendors',
        icon: '📋',
        link: '/resources/vendors'
      }
    ]
  },
  {
    category: 'Legal & Documentation',
    items: [
      {
        title: 'Marriage License Guide',
        description: 'Requirements for Alberta & BC',
        icon: '📄',
        link: '/resources/marriage-license'
      },
      {
        title: 'Travel Information',
        description: 'Getting to the Canadian Rockies',
        icon: '✈️',
        link: '/resources/travel'
      },
      {
        title: 'Weather Guide',
        description: 'Seasonal weather patterns',
        icon: '🌤️',
        link: '/resources/weather'
      }
    ]
  },
  {
    category: 'Design & Inspiration',
    items: [
      {
        title: 'Style Guide',
        description: 'Mountain wedding design ideas',
        icon: '🎨',
        link: '/resources/style'
      },
      {
        title: 'Color Palettes',
        description: 'Seasonal color combinations',
        icon: '🌈',
        link: '/resources/colors'
      },
      {
        title: 'Decor Rentals',
        description: 'Local rental inventory',
        icon: '🪑',
        link: '/resources/rentals'
      }
    ]
  },
  {
    category: 'Guest Experience',
    items: [
      {
        title: 'Accommodation Guide',
        description: 'Where to stay',
        icon: '🏨',
        link: '/resources/accommodation'
      },
      {
        title: 'Activities Guide',
        description: 'Things to do in the area',
        icon: '🏔️',
        link: '/resources/activities'
      },
      {
        title: 'Transportation',
        description: 'Getting around the Rockies',
        icon: '🚗',
        link: '/resources/transportation'
      }
    ]
  }
];

export default function PlanningResourcesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-4">
            Planning Resources
          </h1>
          <p className="text-lg text-center text-gray-600 mb-12">
            Everything you need to plan your perfect mountain wedding
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <motion.a
                      key={item.title}
                      href={item.link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (sectionIndex * 3 + itemIndex) * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="block p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors"
                    >
                      <div className="flex items-start">
                        <span className="text-2xl mr-4" role="img" aria-label="icon">
                          {item.icon}
                        </span>
                        <div>
                          <h3 className="text-lg font-medium mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Free Planning Tools
            </h2>
            <p className="text-gray-600 mb-6">
              Download our comprehensive wedding planning toolkit
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition-colors"
            >
              Download Toolkit
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 