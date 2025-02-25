'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Full Wedding Planning',
    description: 'Comprehensive planning services from concept to execution',
    image: '/images/services/full-planning.jpg',
    link: '/services#full-planning'
  },
  {
    title: 'Partial Planning',
    description: 'Support and guidance for specific aspects of your wedding',
    image: '/images/services/partial-planning.jpg',
    link: '/services#partial-planning'
  },
  {
    title: 'Day-Of Coordination',
    description: 'Professional coordination to ensure your day runs smoothly',
    image: '/images/services/day-of.jpg',
    link: '/services#day-of'
  },
  {
    title: 'Vendor Curation',
    description: 'Access to our network of premium mountain wedding vendors',
    image: '/images/services/vendors.jpg',
    link: '/services#vendors'
  }
];

export const ServicesOverview: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-playfair mb-6">Our Services</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Crafting unforgettable mountain weddings with our comprehensive planning services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Link href={service.link} className="group block">
              <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </div>
              <h3 className="text-2xl font-playfair mb-3 group-hover:text-primary-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link href="/services" className="btn-primary">
          View All Services
        </Link>
      </div>
    </div>
  );
}; 