import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We primarily serve the Canadian Rockies region, including Banff, Lake Louise, Canmore, Emerald Lake, and surrounding areas.'
  },
  {
    question: 'How far in advance should we book?',
    answer: 'For peak season (June-September), we recommend booking 12-18 months in advance. For off-season, 6-12 months is typically sufficient.'
  },
  {
    question: 'What happens if it rains on our wedding day?',
    answer: 'We always have backup plans for inclement weather. Each venue has indoor options, and we monitor weather patterns closely to make necessary adjustments.'
  },
  {
    question: 'Do you handle destination weddings?',
    answer: 'Yes! We specialize in helping couples plan their destination weddings in the Canadian Rockies, handling all local logistics and vendor coordination.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our packages start at $2,500 for day-of coordination and range up to $8,000+ for full-service planning. Each package is customizable to your needs.'
  },
  {
    question: 'Can you help with obtaining marriage licenses?',
    answer: 'Yes, we guide you through the process of obtaining a marriage license in Alberta or British Columbia, including all necessary documentation.'
  },
  {
    question: 'Do you work with preferred vendors?',
    answer: 'We have an extensive network of trusted local vendors but are also happy to work with vendors of your choice.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Our standard contract includes a detailed cancellation policy with varying refund amounts based on timing. Deposits are typically non-refundable.'
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-center text-gray-600 mb-12">
            Everything you need to know about planning your mountain wedding
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary-500 text-white py-3 px-8 rounded-full hover:bg-primary-600 transition-colors"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 