import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'full-planning',
    title: 'Full Wedding Planning',
    description: 'Comprehensive planning from engagement to "I do"',
    features: [
      'Venue selection and booking',
      'Vendor coordination',
      'Budget management',
      'Timeline creation',
      'Day-of coordination',
      'Full design and styling'
    ],
    price: 'Starting at $8,000'
  },
  {
    id: 'partial-planning',
    title: 'Partial Planning',
    description: 'Perfect for couples who have started planning but need expert guidance',
    features: [
      'Vendor recommendations',
      'Design consultation',
      'Timeline creation',
      'Month-of coordination',
      'Rehearsal coordination'
    ],
    price: 'Starting at $4,000'
  },
  {
    id: 'month-of',
    title: 'Month-of Coordination',
    description: 'Professional execution of your carefully planned wedding',
    features: [
      'Vendor confirmation',
      'Timeline creation',
      'Rehearsal coordination',
      'Day-of coordination',
      'Setup and teardown supervision'
    ],
    price: 'Starting at $2,500'
  },
  {
    id: 'design-only',
    title: 'Design & Styling',
    description: 'Transform your vision into a cohesive wedding design',
    features: [
      'Design concept development',
      'Color palette selection',
      'Decor planning',
      'Vendor recommendations',
      'Style guide creation'
    ],
    price: 'Starting at $3,000'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Expert wedding planning services tailored to your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <svg
                      className="w-5 h-5 text-primary-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <div className="text-xl font-semibold text-primary-500">
                {service.price}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-primary-500 text-white py-3 px-6 rounded-full hover:bg-primary-600 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 